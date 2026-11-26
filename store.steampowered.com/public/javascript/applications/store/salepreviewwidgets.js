/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n, ut as r } from "./chunk~01cfc309bf.js";
import {
  Bn as i,
  Cs as a,
  Ds as o,
  Es as s,
  Ga as c,
  Go as l,
  Ia as u,
  Ja as d,
  Jn as f,
  Ka as p,
  Ko as m,
  La as ee,
  Lo as h,
  Ss as te,
  Ts as g,
  Vn as ne,
  Wo as _,
  Za as v,
  Zn as re,
  Zo as ie,
  _r as y,
  er as ae,
  es as oe,
  fr as b,
  hs as se,
  io as x,
  js as ce,
  ks as le,
  lr as ue,
  no as de,
  or as fe,
  ps as pe,
  qo as S,
  t as me,
  us as he,
  vs as ge,
  ws as _e,
  yo as C,
  ys as ve,
  zo as ye,
} from "./chunk~6b8ddcaac8.js";
import { n as be } from "./chunk~751f63337e.js";
import {
  C as w,
  O as xe,
  S as T,
  _ as Se,
  m as E,
  p as Ce,
  v as we,
} from "./chunk~4eed35ad1f.js";
import { i as Te, r as Ee } from "./chunk~4c13037b22.js";
import { d as De, p as Oe, r as ke } from "./chunk~cbbb6ae37c.js";
import { n as Ae, t as je } from "./chunk~56437c278a.js";
import {
  Dl as Me,
  Fv as D,
  Hv as O,
  Ib as k,
  Ic as Ne,
  Or as A,
  Pc as j,
  Vc as M,
  Vv as N,
  Wv as P,
  Xv as F,
  Yv as I,
  Zv as L,
  ab as R,
  bb as Pe,
  bv as Fe,
  dn as Ie,
  ex as Le,
  ib as z,
  ly as Re,
  nd as ze,
  ry as B,
  vl as Be,
  vx as Ve,
  wb as V,
} from "./main.js";
var H = e(t(), 1),
  U = `x33TRfA9NLE-`,
  He = `UWpi28gEMso-`,
  W = n(),
  Ue = 6;
function We(e) {
  let { id: t, bHideInLibraryApps: n } = e,
    { data: r } = P(t),
    i = r?.item_type == 2,
    { data: a } = w(),
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
    c = k.LocalizePlural(`#Sale_ContentPreview`, s);
  if (i && r) {
    let e = r.included_appids?.length || 0;
    e != s && (c = k.Localize(`#Sale_Bundle_CompletePartialSet`, e - s, e));
  }
  return (0, W.jsxs)(`div`, {
    className: x,
    children: [
      (0, W.jsxs)(`div`, {
        className: C,
        children: [
          i &&
            (0, W.jsx)(`span`, {
              className: `_8o-dkC5O1co-`,
              children: k.Localize(`#AppType_bundle`),
            }),
          c,
        ],
      }),
      (0, W.jsx)(`div`, {
        className: _,
        children: o
          .slice(0, Ue)
          .map((e) => (0, W.jsx)(G, { id: e }, `preview${Re(e)}`)),
      }),
    ],
  });
}
function G(e) {
  let { id: t } = e,
    { data: n } = F(t),
    { data: r } = I(t);
  if (!n || !r) return null;
  let i = Ne(n, `small_capsule`);
  return (0, W.jsx)(b, {
    id: t,
    className: m,
    hoverProps: { direction: `right`, style: { minWidth: `350px` } },
    children: (0, W.jsx)(`img`, {
      src: i,
      className: l,
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
        className: j(J, Ge),
        children: [0, 1, 2, 3, 4].map((e) =>
          (0, W.jsx)(
            `div`,
            {
              className: j(Ke, f === `tall_capsule` && `RDPLi3Xo-Mk-`),
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
          (0, W.jsx)(`div`, { className: j(at, q) }),
          (0, W.jsxs)(`div`, {
            className: j(ot),
            children: [
              (0, W.jsx)(`div`, { className: j(st, q) }),
              (0, W.jsx)(`div`, { className: j(ct, q) }),
              (0, W.jsx)(`div`, { className: j(lt, q) }),
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
        className: j({ [gt]: !0, [void 0]: l }),
        children: [
          (0, W.jsx)(`div`, { className: q }),
          (0, W.jsxs)(`div`, {
            className: j(ot),
            children: [
              (0, W.jsx)(`div`, { className: j(st, q) }),
              (0, W.jsx)(`div`, { className: j(ct, q) }),
              (0, W.jsx)(`div`, { className: j(_t, q) }),
              (0, W.jsx)(`div`, { className: j(vt, q) }),
              (0, W.jsx)(`div`, { className: j(yt, q) }),
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
          (0, W.jsx)(`div`, { className: j(mt, q) }),
          (0, W.jsx)(`div`, { className: j(ht, q) }),
        ],
      }),
    });
  if (s) {
    let e = [];
    for (let n = 0; n < t[0]; n++)
      e.push(
        (0, W.jsx)(
          M,
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
                  className: j(Z, Q),
                  children: [
                    (0, W.jsx)(`div`, { className: q }),
                    (0, W.jsx)(`div`, { className: q }),
                    (0, W.jsx)(`div`, { className: q }),
                  ],
                }),
                (0, W.jsxs)(`div`, {
                  className: j(Z, Q),
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
                  className: j(Z, $e),
                  children: [
                    (0, W.jsx)(`div`, { className: q }),
                    (0, W.jsx)(`div`, { className: q }),
                  ],
                }),
                (0, W.jsxs)(`div`, {
                  className: j(Z, Q),
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
                className: j(Z, $e),
                children: [
                  (0, W.jsx)(`div`, { className: q }),
                  (0, W.jsx)(`div`, { className: q }),
                ],
              }),
              (0, W.jsxs)(`div`, {
                className: j(Z, Q),
                children: [
                  (0, W.jsx)(`div`, { className: q }),
                  (0, W.jsx)(`div`, { className: q }),
                  (0, W.jsx)(`div`, { className: q }),
                ],
              }),
              (0, W.jsxs)(`div`, {
                className: j(Z, tt),
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
  return (0, W.jsx)(M, {
    className: j(K, e.className),
    focusableIfEmpty: !0,
    children: e.children,
  });
}
function xt(e) {
  let [t, n] = (0, H.useState)(void 0),
    { data: i } = P(e),
    { data: a } = B(e),
    o = r(),
    s = Fe();
  return (
    (0, H.useEffect)(() => {
      if (i) {
        if (a && a.length > 0) n(a);
        else if (i.related_items?.parent_appid) {
          let e = { appid: i.related_items?.parent_appid };
          (async () => {
            let t = await o.fetchQuery(D(s, e));
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
        className: s,
        children: n
          .slice(0, 10)
          .map((e) =>
            (0, W.jsx)(me, { tagid: e.tagid, className: v }, `tag_` + e.tagid),
          ),
      })
    : null;
}
function wt(e) {
  let {
      id: t,
      bShowDemoButton: n,
      bShowPurchaseOptionsButton: r,
      fnOnPurchaseOptionsClick: a,
      bHidePrice: o,
      bShowDeckCompatibilityDialog: s,
      eHardwareCompatibilityDisplay: c,
      className: l,
      bShowCartButton: u,
    } = e,
    { data: d } = P(t),
    { data: f } = L(t),
    { data: p } = O(t),
    { bIsOwned: m } = T(t),
    [ee, h] = E(s, c);
  if (!d) return null;
  let te =
      (d.type === 1 && !f?.is_coming_soon) ||
      (d.related_items?.demo_appid && d.related_items?.demo_appid.length > 0),
    g = be(d.type),
    _ = n && g && te,
    v = null;
  if (!m && p?.is_free_to_keep && p?.free_to_keep_ends) {
    let e = p.free_to_keep_ends,
      t = z(
        `#Sale_default_label_Free_Promo_Description_Short`,
        V(e) + ` @ ` + Pe(e, { bForce24HourClock: !1 }),
      );
    v = (0, W.jsxs)(`div`, {
      className: S,
      children: [
        t,
        (0, W.jsx)(A, {
          tooltip: z(`#Sale_default_Tooltip_Free_Promo_Limitation`),
        }),
      ],
    });
  }
  return (0, W.jsxs)(`div`, {
    className: j(oe, l),
    children: [
      v,
      (0, W.jsxs)(`div`, {
        className: he,
        children: [
          !!_ && (0, W.jsx)(i, { id: t, className: `R0sGSaFdUWo-` }),
          !o &&
            d.type !== 1 &&
            (0, W.jsxs)(W.Fragment, {
              children: [
                !(!r || d.is_free) &&
                  (0, W.jsx)(Tt, { fnOnPurchaseOptionsClick: a }),
                !(!u || d.is_free) &&
                  (0, W.jsx)(ne, { id: t, className: `CartBtn` }),
              ],
            }),
          !o && (0, W.jsx)(ae, { id: t }),
          ee && (0, W.jsx)(y, { id: t, compatibility: h }),
        ],
      }),
    ],
  });
}
function Tt(e) {
  return (0, W.jsx)(`div`, {
    className: d,
    onClick: e.fnOnPurchaseOptionsClick,
    children: (0, W.jsx)(`span`, {
      children: z(`#EventDisplay_CallToAction_ShowPurchaseOptions_Button`),
    }),
  });
}
function Et(e) {
  let {
      id: t,
      type: n,
      bShowDemoButton: r,
      bPreferDemoStorePage: i,
      bHidePrice: a,
      bUseSubscriptionLayout: s,
      bHidePlatforms: l,
      bHideContainedApps: d,
      bAllowTwoLinesForHeader: p,
      bShowReviewSummary: m,
      bShowDeckCompatibilityDialog: h,
      eHardwareCompatibilityDisplay: g,
      bAutoFocus: ne,
      fnOnClickOverride: _,
      bIsMarketingMessage: v,
      bPreferAssetWithoutOverride: y,
    } = e,
    b = ue(t, n),
    [x, S] = (0, H.useState)(!1),
    me = ze(),
    { data: C, isPending: be } = I(b),
    { data: T } = O(b),
    { data: D } = L(b),
    { data: k } = w(),
    Ne = xe(b),
    A = (0, H.useRef)(null),
    [N, P] = (0, H.useState)(!1),
    F = Le(),
    [R, Pe] = (0, H.useState)(!1);
  ((0, H.useEffect)(() => {
    if (!R) {
      S(!1);
      return;
    }
    let e = window.setTimeout(() => S(!0), 500);
    return () => window.clearTimeout(e);
  }, [R]),
    (0, H.useEffect)(() => {
      A.current && P(A.current.offsetWidth < 370);
    }, [A]));
  let Fe = (0, H.useMemo)(
      () => (i && C && Ee(C) ? { appid: Te(C)[0] } : b),
      [i, b, C],
    ),
    { strStoreURL: z, snr: B } = f(C, i),
    V = Ae(v ? void 0 : b);
  if (!C)
    return be
      ? (0, W.jsx)(bt, { capsules_per_row: [1], is_item_browser: !0 })
      : null;
  let U = C.included_appids?.length || 0,
    He = C.included_appids?.filter((e) => k?.has(e))?.length || 0,
    Ue = C.item_type == 2 && !!T?.must_purchase_as_set,
    G = !d && U > 1,
    K = C.item_type == 1 && U == 1,
    q = C.item_type == 0 || K,
    J = K && C.appid,
    Ge = C.name || ``,
    Ke = c(D, T),
    qe = F || !D?.is_coming_soon || Ke,
    [Y, X] = E(h, g);
  return (0, W.jsxs)(M, {
    className: j({ [te]: !0, [void 0]: p, StoreSaleWidgetOuterContainer: !0 }),
    "flow-children": `grid`,
    navEntryPreferPosition: Me.PREFERRED_CHILD,
    autoFocus: ne,
    navKey: `preview_widget_` + Re(b),
    ...V,
    children: [
      (0, W.jsx)(Ce, {
        appid: q && `appid` in b ? b.appid : void 0,
        children: (0, W.jsxs)(Be, {
          onClick: v ? _ : void 0,
          className: j({ [se]: !0, [ie]: !0, [ye]: v }),
          ...je(C, me, F, !!i, void 0, _),
          preferredFocus: G,
          onFocusWithin: F ? Pe : void 0,
          children: [
            (0, W.jsx)(`div`, {
              className: j(ge),
              children: (0, W.jsx)(Dt, {
                id: Fe,
                strURL: z,
                children: (0, W.jsxs)(`div`, {
                  className: ve,
                  children: [
                    (0, W.jsx)(ke, { appids: Ne }),
                    (0, W.jsx)(Oe, {
                      id: b,
                      imageType: `header`,
                      bPreferAssetWithoutOverride: y,
                    }),
                    (0, W.jsx)(De, { id: b }),
                    (0, W.jsx)(Se, {
                      id: b,
                      active: b && x,
                      bIsHoverMode: !0,
                      eGrowOnActivate: F
                        ? void 0
                        : we.k_ETrailerGrowAmount_Medium,
                    }),
                  ],
                }),
              }),
            }),
            (0, W.jsxs)(`div`, {
              className: j({ [_e]: !0, [de]: G }),
              children: [
                !(!q || _) &&
                  (0, W.jsx)(u, {
                    id: b,
                    classOverride: j(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: B,
                  }),
                (0, W.jsx)(`div`, {
                  className: le,
                  children: (0, W.jsx)(`a`, {
                    href: _ ? void 0 : z,
                    target: Ve.IN_CLIENT ? void 0 : `_blank`,
                    onClick: _,
                    children: (0, W.jsx)(`div`, {
                      className: j(o, `StoreSaleWidgetTitle`),
                      children: Ge,
                    }),
                  }),
                }),
                !G && (0, W.jsx)(St, { id: b }),
                (0, W.jsxs)(`div`, {
                  className: ce,
                  ref: A,
                  children: [
                    q && (0, W.jsx)(Ot, { id: b }),
                    !G &&
                      !l &&
                      b &&
                      (0, W.jsxs)(W.Fragment, {
                        children: [
                          (0, W.jsx)(fe, {
                            id: b,
                            bMinimizePlatforms: N,
                            bHideWindows: N,
                          }),
                          !!(Y && C.item_type == 0) &&
                            (0, W.jsx)(Ie, {
                              eHWCompat: X,
                              className: `tUIs-i3NWoU-`,
                              id: b,
                            }),
                        ],
                      }),
                  ],
                }),
                !G &&
                  m &&
                  b &&
                  (0, W.jsx)(`div`, {
                    className: `BZ9dZKOmXqE-`,
                    children: (0, W.jsx)(ee, { id: b }),
                  }),
                G &&
                  b &&
                  (0, W.jsx)(We, {
                    id: b,
                    bHideInLibraryApps: !Ue && C.item_type == 2 && He < U,
                  }),
                !!q && (0, W.jsx)(kt, { id: b }),
                _
                  ? (0, W.jsx)(`div`, {
                      className: oe,
                      children: (0, W.jsx)(`div`, {
                        className: he,
                        children: (0, W.jsx)(ae, { id: b }),
                      }),
                    })
                  : (0, W.jsx)(W.Fragment, {
                      children:
                        s && q && J
                          ? (0, W.jsx)(re, { appid: J, bIsMuted: !!x })
                          : (0, W.jsx)(wt, {
                              id: b,
                              bShowDemoButton: r,
                              bHidePrice: a,
                              bHideWishlistButton: qe,
                              eHardwareCompatibilityDisplay: X,
                            }),
                    }),
                (0, W.jsx)(`div`, {
                  className: pe,
                  children: (0, W.jsx)(Oe, {
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
        (0, W.jsx)(`div`, { className: `-cW4bgqyLAo-`, children: e.strReason }),
    ],
  });
}
function Dt(e) {
  let { id: t, strURL: n, children: r } = e;
  return `appid` in t
    ? (0, W.jsxs)(b, { id: t, children: [r, ` `] })
    : (0, W.jsx)(`a`, { href: n, children: r });
}
function Ot(e) {
  let { id: t } = e,
    { data: n } = L(t);
  return n ? (0, W.jsx)(`div`, { className: a, children: p(n) }) : null;
}
function kt(e) {
  let { id: t } = e,
    { data: n } = I(t),
    { data: r } = O(t),
    { data: i } = N(t),
    { data: a } = w();
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
          ? z(`#Sale_Bundle_CompletePartialSet`, c, s)
          : o > 0
            ? z(`#Sale_BundleSave_WithDiscount`, o, s)
            : z(`#Sale_BundleSave`, s)),
    (0, W.jsx)(`div`, {
      className: j(g, `StoreSaleWidgetShortDesc`),
      children:
        l.startsWith(`#`) && l.indexOf(` `) == -1
          ? (0, W.jsx)(`span`, {
              className: h,
              children: R(
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
