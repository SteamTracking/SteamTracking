/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  R as t,
  U as n,
  _t as r,
  kt as i,
  nt as a,
  on as o,
} from "./mobx.esm.js";
import { d as s, q as c } from "./src.js";
import {
  La as l,
  On as u,
  Ra as d,
  Ta as f,
  ea as p,
  ka as ee,
  oa as m,
  sa as h,
  un as g,
} from "./dialogs.js";
import {
  C as _,
  O as v,
  _ as y,
  a as b,
  f as x,
  h as S,
  i as C,
  l as w,
  p as T,
  s as E,
  v as te,
  y as D,
} from "./storebrowsequerycontext.js";
import {
  An as ne,
  Bn as re,
  Dn as ie,
  Dt as ae,
  Fi as O,
  Fn as oe,
  H as k,
  In as se,
  J as ce,
  Ln as A,
  Pi as j,
  Pn as le,
  Qn as M,
  Rn as ue,
  St as N,
  Tn as de,
  Un as fe,
  Vt as P,
  X as pe,
  Y as me,
  _n as he,
  _t as ge,
  at as _e,
  cn as F,
  ct as ve,
  dn as I,
  et as ye,
  ft as be,
  gt as xe,
  hn as Se,
  ht as Ce,
  it as L,
  jn as we,
  kt as Te,
  ln as R,
  mt as Ee,
  nt as De,
  ot as Oe,
  pt as ke,
  rn as Ae,
  rt as je,
  t as Me,
  tn as z,
  un as B,
  vt as Ne,
  wn as Pe,
  yt as V,
  zn as Fe,
} from "./saletags.js";
import { r as Ie } from "./storenaveventcontext.js";
import "./react-router.js";
import { i as H } from "./utils.js";
import { t as Le } from "./useQuery.js";
import { n as Re } from "./appidutils.js";
import {
  m as ze,
  n as Be,
  p as Ve,
  r as He,
  u as Ue,
} from "./salestoreitemutils.js";
import { d as We, n as U } from "./deckverified.js";
import { S as W } from "./partnereventutils.js";
function Ge(e) {
  return e
    ? e === `game` ||
        e === `dlc` ||
        e === `software` ||
        e === `music` ||
        e === `application` ||
        e === `demo` ||
        e === `hardware` ||
        e === `mod` ||
        e == `video` ||
        e === `beta` ||
        e === `advertising`
    : !1;
}
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
var K = o(i(), 1),
  Ke = `x33TRfA9NLE-`,
  q = r(),
  qe = 6;
function Je(e) {
  let { id: t, bHideInLibraryApps: n } = e,
    { data: r } = S(t),
    i = r?.item_type == 2,
    { data: a } = O(),
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
    c = l.LocalizePlural(`#Sale_ContentPreview`, s);
  if (i && r) {
    let e = r.included_appids?.length || 0;
    e != s && (c = l.Localize(`#Sale_Bundle_CompletePartialSet`, e - s, e));
  }
  return (0, q.jsxs)(`div`, {
    className: Te,
    children: [
      (0, q.jsxs)(`div`, {
        className: P,
        children: [
          i &&
            (0, q.jsx)(`span`, {
              className: `_8o-dkC5O1co-`,
              children: l.Localize(`#AppType_bundle`),
            }),
          c,
        ],
      }),
      (0, q.jsx)(`div`, {
        className: F,
        children: o
          .slice(0, qe)
          .map((e) => (0, q.jsx)(Ye, { id: e }, `preview${v(e)}`)),
      }),
    ],
  });
}
function Ye(e) {
  let { id: t } = e,
    { data: n } = te(t),
    { data: r } = y(t);
  if (!n || !r) return null;
  let i = M(n, `small_capsule`);
  return (0, q.jsx)(L, {
    id: t,
    className: B,
    hoverProps: { direction: `right`, style: { minWidth: `350px` } },
    children: (0, q.jsx)(`img`, {
      src: i,
      className: R,
      loading: `lazy`,
      alt: r.name || ``,
    }),
  });
}
var Xe = `WYXlhoxwBlU-`,
  J = `Ypf4QLCxqQU-`,
  Ze = `jP-Qr-tpETg-`,
  Y = `triBTPpfZNQ-`,
  Qe = `Ep0wQ-6tJLw-`,
  $e = `-Rp0JgQXMoA-`,
  et = `QWDBAVIUpho-`,
  tt = `JAphvRffM9M-`,
  nt = `FQQL32BdomI-`,
  rt = `xNRz-0kPOeE-`,
  X = `-F6L5ywkZiU-`,
  it = `_4eS9H8fFOdo-`,
  Z = `_7fjzkXY-Nhs-`,
  at = `qNcrltVSVzI-`,
  ot = `A-4nfbw4-fY-`,
  st = `oe2Jr-slLMU-`,
  ct = `DGZ5Ptl37g4-`,
  lt = `zstB61TOiBA-`,
  ut = `-ZEsfMgRePw-`,
  dt = `P-N-CSZ-VX8-`,
  ft = `aZng9sDwNZg-`,
  pt = `x80z1JoR9dc-`,
  mt = `X-2r-tUH1gQ-`,
  ht = `-A11cjkYCU8-`,
  gt = `_10gRNaJtPOU-`,
  _t = `UskT6FngUB8-`,
  vt = `L03Y6ydPSDM-`,
  yt = `rX8DGzBU5pU-`,
  bt = `_8mKyAzWvx8I-`,
  xt = `RfxR9kxm2-o-`,
  St = `_3EpVljmp8Bg-`,
  Ct = `h1-hm2PiNH0-`,
  wt = `ruaMViMLvdA-`;
function Tt(t) {
  let {
    capsules_per_row: n,
    is_generic: r,
    is_generic_trailer: i,
    is_event_dash_row: a,
    is_trailer_carousel: o,
    is_spotlights: s,
    is_item_browser: c,
    is_maincap: l,
    is_expanded_maincap: u,
    is_expanded_display: f,
    show_auto_advance_bar: p,
  } = t;
  if (!n) return null;
  if (r)
    return (0, q.jsx)(Q, {
      children: (0, q.jsx)(`div`, {
        className: Ze,
        children: (0, q.jsx)(`div`, { className: Y }),
      }),
    });
  if (i)
    return (0, q.jsx)(Q, {
      children: (0, q.jsx)(`div`, {
        className: Qe,
        children: (0, q.jsx)(`div`, { className: Y }),
      }),
    });
  if (o)
    return (0, q.jsxs)(Q, {
      children: [
        (0, q.jsxs)(`div`, {
          className: ht,
          children: [
            (0, q.jsx)(`div`, {
              className: gt,
              children: (0, q.jsx)(`div`, { className: Y }),
            }),
            (0, q.jsx)(`div`, {
              className: _t,
              children: (0, q.jsx)(`div`, { className: Y }),
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
    return (0, q.jsx)(Q, {
      children: (0, q.jsxs)(`div`, {
        className: lt,
        children: [
          (0, q.jsx)(`div`, { className: e(ut, J) }),
          (0, q.jsxs)(`div`, {
            className: e(dt),
            children: [
              (0, q.jsx)(`div`, { className: e(ft, J) }),
              (0, q.jsx)(`div`, { className: e(pt, J) }),
              (0, q.jsx)(`div`, { className: e(mt, J) }),
            ],
          }),
        ],
      }),
    });
  if (s)
    return (0, q.jsx)(Q, {
      children: (0, q.jsxs)(`div`, {
        className: st,
        children: [
          (0, q.jsx)(`div`, { className: J }),
          (0, q.jsx)(`div`, { className: J }),
          (0, q.jsxs)(`div`, {
            className: ct,
            children: [
              (0, q.jsx)(`div`, { className: J }),
              (0, q.jsx)(`div`, { className: J }),
            ],
          }),
        ],
      }),
    });
  if (l)
    return (0, q.jsx)(Q, {
      children: (0, q.jsxs)(`div`, {
        className: e({ [xt]: !0, [void 0]: u }),
        children: [
          (0, q.jsx)(`div`, { className: J }),
          (0, q.jsxs)(`div`, {
            className: e(dt),
            children: [
              (0, q.jsx)(`div`, { className: e(ft, J) }),
              (0, q.jsx)(`div`, { className: e(pt, J) }),
              (0, q.jsx)(`div`, { className: e(St, J) }),
              (0, q.jsx)(`div`, { className: e(Ct, J) }),
              (0, q.jsx)(`div`, { className: e(wt, J) }),
            ],
          }),
        ],
      }),
    });
  if (f)
    return (0, q.jsx)(Q, {
      children: (0, q.jsxs)(`div`, {
        className: vt,
        children: [
          (0, q.jsx)(`div`, { className: e(yt, J) }),
          (0, q.jsx)(`div`, { className: e(bt, J) }),
        ],
      }),
    });
  if (c) {
    let e = [];
    for (let t = 0; t < n[0]; t++)
      e.push(
        (0, q.jsx)(
          d,
          {
            className: nt,
            focusable: !0,
            children: (0, q.jsx)(`div`, { className: J }),
          },
          `item_browse_ghost_` + t,
        ),
      );
    return (0, q.jsx)(Q, { children: e });
  }
  return n?.length == 1
    ? n[0] == 1
      ? (0, q.jsx)(Q, {
          children: (0, q.jsx)(`div`, {
            className: tt,
            children: (0, q.jsx)(`div`, { className: J }),
          }),
        })
      : n[0] == 4
        ? (0, q.jsx)(Q, {
            children: (0, q.jsxs)(`div`, {
              className: et,
              children: [
                (0, q.jsx)(`div`, { className: J }),
                (0, q.jsx)(`div`, { className: J }),
                (0, q.jsx)(`div`, { className: J }),
                (0, q.jsx)(`div`, { className: J }),
              ],
            }),
          })
        : (0, q.jsx)(Q, {
            children: (0, q.jsxs)(`div`, {
              className: $e,
              children: [
                (0, q.jsx)(`div`, { className: J }),
                (0, q.jsx)(`div`, { className: J }),
                (0, q.jsx)(`div`, { className: J }),
              ],
            }),
          })
    : n?.length == 2
      ? n[0] == 3 && n[1] == 3
        ? (0, q.jsx)(Q, {
            children: (0, q.jsxs)(`div`, {
              className: rt,
              children: [
                (0, q.jsxs)(`div`, {
                  className: e(X, Z),
                  children: [
                    (0, q.jsx)(`div`, { className: J }),
                    (0, q.jsx)(`div`, { className: J }),
                    (0, q.jsx)(`div`, { className: J }),
                  ],
                }),
                (0, q.jsxs)(`div`, {
                  className: e(X, Z),
                  children: [
                    (0, q.jsx)(`div`, { className: J }),
                    (0, q.jsx)(`div`, { className: J }),
                    (0, q.jsx)(`div`, { className: J }),
                  ],
                }),
              ],
            }),
          })
        : (0, q.jsx)(Q, {
            children: (0, q.jsxs)(`div`, {
              className: rt,
              children: [
                (0, q.jsxs)(`div`, {
                  className: e(X, it),
                  children: [
                    (0, q.jsx)(`div`, { className: J }),
                    (0, q.jsx)(`div`, { className: J }),
                  ],
                }),
                (0, q.jsxs)(`div`, {
                  className: e(X, Z),
                  children: [
                    (0, q.jsx)(`div`, { className: J }),
                    (0, q.jsx)(`div`, { className: J }),
                    (0, q.jsx)(`div`, { className: J }),
                  ],
                }),
              ],
            }),
          })
      : (0, q.jsx)(Q, {
          children: (0, q.jsxs)(`div`, {
            className: at,
            children: [
              (0, q.jsxs)(`div`, {
                className: e(X, it),
                children: [
                  (0, q.jsx)(`div`, { className: J }),
                  (0, q.jsx)(`div`, { className: J }),
                ],
              }),
              (0, q.jsxs)(`div`, {
                className: e(X, Z),
                children: [
                  (0, q.jsx)(`div`, { className: J }),
                  (0, q.jsx)(`div`, { className: J }),
                  (0, q.jsx)(`div`, { className: J }),
                ],
              }),
              (0, q.jsxs)(`div`, {
                className: e(X, ot),
                children: [
                  (0, q.jsx)(`div`, { className: J }),
                  (0, q.jsx)(`div`, { className: J }),
                  (0, q.jsx)(`div`, { className: J }),
                  (0, q.jsx)(`div`, { className: J }),
                ],
              }),
            ],
          }),
        });
}
function Q(t) {
  return (0, q.jsx)(d, {
    className: e(Xe, t.className),
    focusableIfEmpty: !0,
    children: t.children,
  });
}
function Et(e) {
  let [t, n] = (0, K.useState)(void 0),
    { data: r } = S(e),
    { data: i } = _(e),
    a = H(),
    o = C();
  return (
    (0, K.useEffect)(() => {
      if (r) {
        if (i && i.length > 0) n(i);
        else if (r.related_items?.parent_appid) {
          let e = { appid: r.related_items?.parent_appid };
          (async () => {
            let t = await a.fetchQuery(w(o, e));
            t && t.length > 0 && n(t);
          })();
        }
      }
    }, [o, a, r, i]),
    t
  );
}
function Dt(e) {
  let { id: t } = e;
  return t ? (0, q.jsx)(Ot, { id: t }) : null;
}
function Ot(e) {
  let { id: t } = e,
    n = Et(t);
  return n
    ? (0, q.jsx)(`div`, {
        className: ue,
        children: n
          .slice(0, 10)
          .map((e) =>
            (0, q.jsx)(Me, { tagid: e.tagid, className: N }, `tag_` + e.tagid),
          ),
      })
    : null;
}
function kt(t) {
  let {
      id: n,
      bShowDemoButton: r,
      bShowPurchaseOptionsButton: i,
      fnOnPurchaseOptionsClick: a,
      bHidePrice: o,
      bShowDeckCompatibilityDialog: s,
      eHardwareCompatibilityDisplay: c,
      className: l,
      bShowCartButton: u,
    } = t,
    { data: d } = S(n),
    { data: p } = D(n),
    { data: h } = T(n),
    { bIsOwned: _ } = j(n),
    [v, y] = Oe(s, c);
  if (!d) return null;
  let b =
      (d.type === 1 && !p?.is_coming_soon) ||
      (d.related_items?.demo_appid && d.related_items?.demo_appid.length > 0),
    x = G(d.type),
    C = r && x && b,
    w = null;
  if (!_ && h?.is_free_to_keep && h?.free_to_keep_ends) {
    let e = h.free_to_keep_ends,
      t = m(
        `#Sale_default_label_Free_Promo_Description_Short`,
        ee(e) + ` @ ` + f(e, { bForce24HourClock: !1 }),
      );
    w = (0, q.jsxs)(`div`, {
      className: I,
      children: [
        t,
        (0, q.jsx)(g, {
          tooltip: m(`#Sale_default_Tooltip_Free_Promo_Limitation`),
        }),
      ],
    });
  }
  return (0, q.jsxs)(`div`, {
    className: e(he, l),
    children: [
      w,
      (0, q.jsxs)(`div`, {
        className: Pe,
        children: [
          !!C && (0, q.jsx)(ce, { id: n, className: `R0sGSaFdUWo-` }),
          !o &&
            d.type !== 1 &&
            (0, q.jsxs)(q.Fragment, {
              children: [
                !(!i || d.is_free) &&
                  (0, q.jsx)(At, { fnOnPurchaseOptionsClick: a }),
                !(!u || d.is_free) &&
                  (0, q.jsx)(me, { id: n, className: `CartBtn` }),
              ],
            }),
          !o && (0, q.jsx)(De, { id: n }),
          v && (0, q.jsx)(U, { id: n, compatibility: y }),
        ],
      }),
    ],
  });
}
function At(e) {
  return (0, q.jsx)(`div`, {
    className: V,
    onClick: e.fnOnPurchaseOptionsClick,
    children: (0, q.jsx)(`span`, {
      children: m(`#EventDisplay_CallToAction_ShowPurchaseOptions_Button`),
    }),
  });
}
function jt(n) {
  let {
      id: r,
      type: i,
      bShowDemoButton: o,
      bPreferDemoStorePage: l,
      bHidePrice: u,
      bUseSubscriptionLayout: f,
      bHidePlatforms: p,
      bHideContainedApps: ee,
      bAllowTwoLinesForHeader: m,
      bShowReviewSummary: h,
      bShowDeckCompatibilityDialog: g,
      eHardwareCompatibilityDisplay: _,
      bAutoFocus: b,
      fnOnClickOverride: x,
      bIsMarketingMessage: S,
      bPreferAssetWithoutOverride: C,
    } = n,
    w = Ue(r, i),
    [E, te] = (0, K.useState)(!1),
    oe = Ie(),
    { data: k, isPending: ce } = y(w),
    { data: A } = T(w),
    { data: j } = D(w),
    { data: M } = O(),
    ue = Re(w),
    N = (0, K.useRef)(null),
    [P, me] = (0, K.useState)(!1),
    F = t();
  (0, K.useEffect)(() => {
    N.current && me(N.current.offsetWidth < 370);
  }, [N]);
  let I = (0, K.useMemo)(
      () => (l && k && Ce(k) ? { appid: xe(k)[0] } : w),
      [l, w, k],
    ),
    { strStoreURL: L, snr: Te } = pe(k, l);
  if (!k)
    return ce
      ? (0, q.jsx)(Tt, { capsules_per_row: [1], is_item_browser: !0 })
      : null;
  let R = k.included_appids?.length || 0,
    Ee = k.included_appids?.filter((e) => M?.has(e))?.length || 0,
    Me = k.item_type == 2 && !!A?.must_purchase_as_set,
    z = !ee && R > 1,
    B = k.item_type == 1 && R == 1,
    V = k.item_type == 0 || B,
    H = B && k.appid,
    Le = k.name || ``,
    U = ke(j, A),
    W = F || !j?.is_coming_soon || U,
    [Ge, G] = Oe(g, _);
  return (0, q.jsxs)(d, {
    className: e({ [le]: !0, [void 0]: m, StoreSaleWidgetOuterContainer: !0 }),
    "flow-children": `grid`,
    navEntryPreferPosition: c.PREFERRED_CHILD,
    autoFocus: b,
    navKey: `preview_widget_` + v(w),
    children: [
      (0, q.jsx)(_e, {
        appid: V && `appid` in w ? w.appid : void 0,
        children: (0, q.jsxs)(s, {
          onClick: S ? x : void 0,
          className: e({ [ie]: !0, [Se]: !0, [Ae]: S }),
          ...Be(k, oe, F, !!l, void 0, x),
          preferredFocus: z,
          children: [
            (0, q.jsx)(`div`, {
              className: e(ne),
              children: (0, q.jsx)(Mt, {
                id: I,
                strURL: L,
                children: (0, q.jsxs)(`div`, {
                  className: we,
                  children: [
                    (0, q.jsx)(He, { appids: ue }),
                    (0, q.jsx)(ze, {
                      id: w,
                      imageType: `header`,
                      bPreferAssetWithoutOverride: C,
                    }),
                    (0, q.jsx)(Ve, { id: w }),
                    (0, q.jsx)(ge, {
                      id: w,
                      active: w && E,
                      bIsHoverMode: !0,
                      eGrowOnActivate: Ne.k_ETrailerGrowAmount_Medium,
                    }),
                  ],
                }),
              }),
            }),
            (0, q.jsxs)(`div`, {
              className: e({ [se]: !0, [ae]: z }),
              children: [
                !(!V || x) &&
                  (0, q.jsx)(ve, {
                    id: w,
                    classOverride: e(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: Te,
                  }),
                (0, q.jsx)(`div`, {
                  className: re,
                  children: (0, q.jsx)(`a`, {
                    href: x ? void 0 : L,
                    target: a.IN_CLIENT ? void 0 : `_blank`,
                    onClick: x,
                    children: (0, q.jsx)(`div`, {
                      className: e(Fe, `StoreSaleWidgetTitle`),
                      children: Le,
                    }),
                  }),
                }),
                !z && (0, q.jsx)(Dt, { id: w }),
                (0, q.jsxs)(`div`, {
                  className: fe,
                  ref: N,
                  children: [
                    V && (0, q.jsx)(Nt, { id: w }),
                    !z &&
                      !p &&
                      w &&
                      (0, q.jsxs)(q.Fragment, {
                        children: [
                          (0, q.jsx)(je, {
                            id: w,
                            bMinimizePlatforms: P,
                            bHideWindows: P,
                          }),
                          !!(Ge && k.item_type == 0) &&
                            (0, q.jsx)(We, {
                              eHWCompat: G,
                              className: `tUIs-i3NWoU-`,
                              id: w,
                            }),
                        ],
                      }),
                  ],
                }),
                !z &&
                  h &&
                  w &&
                  (0, q.jsx)(`div`, {
                    className: `BZ9dZKOmXqE-`,
                    children: (0, q.jsx)(be, { id: w }),
                  }),
                z &&
                  w &&
                  (0, q.jsx)(Je, {
                    id: w,
                    bHideInLibraryApps: !Me && k.item_type == 2 && Ee < R,
                  }),
                !!V && (0, q.jsx)(Pt, { id: w }),
                x
                  ? (0, q.jsx)(`div`, {
                      className: he,
                      children: (0, q.jsx)(`div`, {
                        className: Pe,
                        children: (0, q.jsx)(De, { id: w }),
                      }),
                    })
                  : (0, q.jsx)(q.Fragment, {
                      children:
                        f && V && H
                          ? (0, q.jsx)(ye, { appid: H, bIsMuted: !!E })
                          : (0, q.jsx)(kt, {
                              id: w,
                              bShowDemoButton: o,
                              bHidePrice: u,
                              bHideWishlistButton: W,
                              eHardwareCompatibilityDisplay: G,
                            }),
                    }),
                (0, q.jsx)(`div`, {
                  className: de,
                  children: (0, q.jsx)(ze, {
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
      !!(n.strReason && n.strReason.length > 0) &&
        (0, q.jsx)(`div`, { className: `-cW4bgqyLAo-`, children: n.strReason }),
    ],
  });
}
function Mt(e) {
  let { id: t, strURL: n, children: r } = e;
  return `appid` in t
    ? (0, q.jsxs)(L, { id: t, children: [r, ` `] })
    : (0, q.jsx)(`a`, { href: n, children: r });
}
function Nt(e) {
  let { id: t } = e,
    { data: n } = D(t);
  return n ? (0, q.jsx)(`div`, { className: oe, children: Ee(n) }) : null;
}
function Pt(t) {
  let { id: n } = t,
    { data: r } = y(n),
    { data: i } = T(n),
    { data: a } = x(n),
    { data: o } = O();
  if (!r || !a || !a.short_description || !o) return null;
  let s = i?.discount_pct || 0,
    c = r.included_appids?.length || 0,
    l = r.included_appids?.filter((e) => o?.has(e))?.length || 0,
    u = a.short_description,
    d = r.item_type == 1 && c == 1,
    f = r.item_type == 2 && !!i?.must_purchase_as_set;
  return (
    (r.item_type == 2 || (r.item_type == 1 && !d)) &&
      (u =
        !f && l > 0 && l < c
          ? m(`#Sale_Bundle_CompletePartialSet`, l, c)
          : s > 0
            ? m(`#Sale_BundleSave_WithDiscount`, s, c)
            : m(`#Sale_BundleSave`, c)),
    (0, q.jsx)(`div`, {
      className: e(A, `StoreSaleWidgetShortDesc`),
      children:
        u.startsWith(`#`) && u.indexOf(` `) == -1
          ? (0, q.jsx)(`span`, {
              className: z,
              children: h(
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
var Ft = `yFKurY5xd-8-`,
  It = `x-jXNI-s184-`,
  Lt = `aG-OF9IYlE8-`,
  Rt = `Ef8xOk5PJbg-`,
  zt = `RTkq2WI2bK4-`,
  Bt = `_4vRcmVJ4gN8-`,
  Vt = `eEhfnGythD0-`,
  Ht = `qtB6DnXH-bs-`,
  Ut = `tF-0HvIRqgQ-`,
  Wt = `_0EeL7NnvnjU-`,
  Gt = `L-E-bGfH1Sw-`,
  Kt = `-pV6HCIaaqM-`,
  qt = `MUbRKQFMT7E-`;
function Jt(e, t, r) {
  return {
    queryKey: Yt(r),
    enabled: !!r?.GID,
    queryFn: async () => {
      if (!r) return null;
      let i = r.appid
          ? await e.ensureQueryData(E(t, { appid: r.appid }))
          : null,
        a = await e.ensureQueryData(k(r.clanSteamID.GetAccountID(), e));
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
              `${n.STORE_ITEM_BASE_URL}${i.all_ages_screenshots[e].filename}`
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
function Yt(e) {
  return [`useFallbackArtworkScreenshot`, e?.GID];
}
function Xt(e, t, n, r = W.full, i = !0) {
  let a = H(),
    o = C();
  return Le(Qt(a, o, e, t, n, r, i)).data ?? void 0;
}
function Zt(e, t, n, r = W.full, i = !0) {
  return [`useEventImageURLWithFallback`, e?.GID, t, n, r, i];
}
function Qt(e, t, r, i, a, o = W.full, s = !0) {
  return {
    queryKey: Zt(r, i, a, o, s),
    enabled: !!r?.GID,
    initialData: () => $(r, i, a, o, s),
    queryFn: async () => {
      if (!r) return null;
      let c = $(r, i, a, o, s);
      if (c) return c;
      let l = await e.ensureQueryData(k(r.clanSteamID.GetAccountID(), e));
      if (i == `capsule`) {
        let i = r.appid;
        if (!i && l && ((l.is_creator_home && !l.is_ogg) || l.is_curator)) {
          if (r.jsondata?.referenced_appids?.length)
            i = r.jsondata.referenced_appids[0];
          else return l.avatar_full_url ?? null;
        }
        let a = await e.ensureQueryData(b(t, { appid: i }));
        return a
          ? (M(a, `main_capsule`) ?? null)
          : l?.avatar_full_url
            ? l.avatar_full_url
            : `${n.STORE_ITEM_BASE_URL}steam/apps/${i}/header.jpg`;
      }
      return i == `background` &&
        l &&
        ((l.is_creator_home && !l.is_ogg) || l.is_curator)
        ? (l.creator_page_bg_url ?? null)
        : await e.ensureQueryData(Jt(e, t, r));
    },
  };
}
function $(e, t, n, r = W.full, i = !0) {
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
    if (t && (i || u(t))) return t;
  }
}
export {
  jt as _,
  Ft as a,
  Ke as b,
  Rt as c,
  Ht as d,
  Vt as f,
  Gt as g,
  Kt as h,
  Wt as i,
  zt as l,
  qt as m,
  Xt as n,
  It as o,
  Ut as p,
  Jt as r,
  Lt as s,
  Qt as t,
  Bt as u,
  kt as v,
  Ge as x,
  Tt as y,
};
