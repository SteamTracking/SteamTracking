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
  $ as te,
  $t as ne,
  Dt as k,
  En as A,
  Et as re,
  Fn as j,
  Ft as M,
  J as N,
  Jt as ie,
  Kt as ae,
  Pn as oe,
  V as P,
  Y as se,
  _n as F,
  _t as ce,
  an as le,
  at as ue,
  cn as de,
  dn as fe,
  dt as pe,
  en as me,
  fn as he,
  ft as ge,
  gn as I,
  gt as _e,
  hn as ve,
  ht as ye,
  it as be,
  ln as xe,
  mn as L,
  mt as Se,
  nn as Ce,
  nt as we,
  on as Te,
  pn as Ee,
  pt as De,
  q as R,
  rt as z,
  st as Oe,
  t as ke,
  tn as B,
  tt as Ae,
  un as je,
  vn as Me,
  vt as Ne,
  xn as Pe,
  xt as Fe,
  yn as Ie,
} from "./chunk~6b8ddcaac8.js";
import { r as Le } from "./chunk~9a06851bec.js";
import "./chunk~44f252525d.js";
import { i as V } from "./chunk~8fb30ea08b.js";
import { t as H } from "./chunk~ede3e357a2.js";
import { n as Re } from "./chunk~b390ee0f78.js";
import {
  m as ze,
  n as Be,
  p as Ve,
  r as He,
  t as Ue,
  u as We,
} from "./chunk~cbbb6ae37c.js";
import { d as Ge, n as U } from "./chunk~2201b8cb3d.js";
import { v as W } from "./chunk~2bee5a7d08.js";
function Ke(e) {
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
var G = i(e(), 1),
  K = a(),
  q = 6;
function qe(e) {
  let { id: t, bHideInLibraryApps: n } = e,
    { data: r } = y(t),
    i = r?.item_type == 2,
    { data: a } = j(),
    o = G.useMemo(() => {
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
  return (0, K.jsxs)(`div`, {
    className: k,
    children: [
      (0, K.jsxs)(`div`, {
        className: M,
        children: [
          i &&
            (0, K.jsx)(`span`, {
              className: `_8o-dkC5O1co-`,
              children: u.Localize(`#AppType_bundle`),
            }),
          c,
        ],
      }),
      (0, K.jsx)(`div`, {
        className: ne,
        children: o
          .slice(0, q)
          .map((e) => (0, K.jsx)(Je, { id: e }, `preview${_(e)}`)),
      }),
    ],
  });
}
function Je(e) {
  let { id: t } = e,
    { data: n } = x(t),
    { data: r } = O(t);
  if (!n || !r) return null;
  let i = A(n, `small_capsule`);
  return (0, K.jsx)(z, {
    id: t,
    className: B,
    hoverProps: { direction: `right`, style: { minWidth: `350px` } },
    children: (0, K.jsx)(`img`, {
      src: i,
      className: me,
      loading: `lazy`,
      alt: r.name || ``,
    }),
  });
}
var Ye = `WYXlhoxwBlU-`,
  J = `Ypf4QLCxqQU-`,
  Xe = `rDvoly1XGQk-`,
  Ze = `n2t7u-oXiwM-`,
  Qe = `a1UUU8zD1Lg-`,
  $e = `jP-Qr-tpETg-`,
  Y = `triBTPpfZNQ-`,
  et = `Ep0wQ-6tJLw-`,
  tt = `-Rp0JgQXMoA-`,
  nt = `QWDBAVIUpho-`,
  rt = `JAphvRffM9M-`,
  it = `FQQL32BdomI-`,
  at = `xNRz-0kPOeE-`,
  X = `-F6L5ywkZiU-`,
  ot = `_4eS9H8fFOdo-`,
  Z = `_7fjzkXY-Nhs-`,
  st = `qNcrltVSVzI-`,
  ct = `A-4nfbw4-fY-`,
  lt = `oe2Jr-slLMU-`,
  ut = `DGZ5Ptl37g4-`,
  dt = `zstB61TOiBA-`,
  ft = `-ZEsfMgRePw-`,
  pt = `P-N-CSZ-VX8-`,
  mt = `aZng9sDwNZg-`,
  ht = `x80z1JoR9dc-`,
  gt = `X-2r-tUH1gQ-`,
  _t = `-A11cjkYCU8-`,
  vt = `_10gRNaJtPOU-`,
  yt = `UskT6FngUB8-`,
  bt = `L03Y6ydPSDM-`,
  xt = `rX8DGzBU5pU-`,
  St = `_8mKyAzWvx8I-`,
  Ct = `RfxR9kxm2-o-`,
  wt = `_3EpVljmp8Bg-`,
  Tt = `h1-hm2PiNH0-`,
  Et = `ruaMViMLvdA-`;
function Dt(e) {
  let {
    capsules_per_row: t,
    is_generic: r,
    is_generic_trailer: i,
    is_event_dash_row: a,
    is_trailer_carousel: o,
    is_spotlights: s,
    is_item_browser: c,
    is_maincap: l,
    is_expanded_maincap: u,
    is_expanded_display: d,
    show_auto_advance_bar: f,
    swipe_row: m,
  } = e;
  if (typeof m == `string`)
    return (0, K.jsx)(Q, {
      children: (0, K.jsx)(`div`, {
        className: n(Xe, Ze),
        children: [0, 1, 2, 3, 4].map((e) =>
          (0, K.jsx)(
            `div`,
            {
              className: n(Qe, m === `tall_capsule` && `RDPLi3Xo-Mk-`),
              children: (0, K.jsx)(`div`, { className: J }),
            },
            e,
          ),
        ),
      }),
    });
  if (m)
    return (0, K.jsx)(Q, {
      children: (0, K.jsx)(`div`, {
        className: Xe,
        children: [0, 1].map((e) =>
          (0, K.jsx)(
            `div`,
            { className: J, style: { width: m.width, height: m.height } },
            e,
          ),
        ),
      }),
    });
  if (!t) return null;
  if (r)
    return (0, K.jsx)(Q, {
      children: (0, K.jsx)(`div`, {
        className: $e,
        children: (0, K.jsx)(`div`, { className: Y }),
      }),
    });
  if (i)
    return (0, K.jsx)(Q, {
      children: (0, K.jsx)(`div`, {
        className: et,
        children: (0, K.jsx)(`div`, { className: Y }),
      }),
    });
  if (o)
    return (0, K.jsxs)(Q, {
      children: [
        (0, K.jsxs)(`div`, {
          className: _t,
          children: [
            (0, K.jsx)(`div`, {
              className: vt,
              children: (0, K.jsx)(`div`, { className: Y }),
            }),
            (0, K.jsx)(`div`, {
              className: yt,
              children: (0, K.jsx)(`div`, { className: Y }),
            }),
          ],
        }),
        f &&
          (0, K.jsx)(`div`, {
            className: `lvoTx8-ZMMw-`,
            children: (0, K.jsx)(`div`, { className: `triBTPpfZNQ-` }),
          }),
      ],
    });
  if (a)
    return (0, K.jsx)(Q, {
      children: (0, K.jsxs)(`div`, {
        className: dt,
        children: [
          (0, K.jsx)(`div`, { className: n(ft, J) }),
          (0, K.jsxs)(`div`, {
            className: n(pt),
            children: [
              (0, K.jsx)(`div`, { className: n(mt, J) }),
              (0, K.jsx)(`div`, { className: n(ht, J) }),
              (0, K.jsx)(`div`, { className: n(gt, J) }),
            ],
          }),
        ],
      }),
    });
  if (s)
    return (0, K.jsx)(Q, {
      children: (0, K.jsxs)(`div`, {
        className: lt,
        children: [
          (0, K.jsx)(`div`, { className: J }),
          (0, K.jsx)(`div`, { className: J }),
          (0, K.jsxs)(`div`, {
            className: ut,
            children: [
              (0, K.jsx)(`div`, { className: J }),
              (0, K.jsx)(`div`, { className: J }),
            ],
          }),
        ],
      }),
    });
  if (l)
    return (0, K.jsx)(Q, {
      children: (0, K.jsxs)(`div`, {
        className: n({ [Ct]: !0, [void 0]: u }),
        children: [
          (0, K.jsx)(`div`, { className: J }),
          (0, K.jsxs)(`div`, {
            className: n(pt),
            children: [
              (0, K.jsx)(`div`, { className: n(mt, J) }),
              (0, K.jsx)(`div`, { className: n(ht, J) }),
              (0, K.jsx)(`div`, { className: n(wt, J) }),
              (0, K.jsx)(`div`, { className: n(Tt, J) }),
              (0, K.jsx)(`div`, { className: n(Et, J) }),
            ],
          }),
        ],
      }),
    });
  if (d)
    return (0, K.jsx)(Q, {
      children: (0, K.jsxs)(`div`, {
        className: bt,
        children: [
          (0, K.jsx)(`div`, { className: n(xt, J) }),
          (0, K.jsx)(`div`, { className: n(St, J) }),
        ],
      }),
    });
  if (c) {
    let e = [];
    for (let n = 0; n < t[0]; n++)
      e.push(
        (0, K.jsx)(
          p,
          {
            className: it,
            focusable: !0,
            children: (0, K.jsx)(`div`, { className: J }),
          },
          `item_browse_ghost_` + n,
        ),
      );
    return (0, K.jsx)(Q, { children: e });
  }
  return t?.length == 1
    ? t[0] == 1
      ? (0, K.jsx)(Q, {
          children: (0, K.jsx)(`div`, {
            className: rt,
            children: (0, K.jsx)(`div`, { className: J }),
          }),
        })
      : t[0] == 4
        ? (0, K.jsx)(Q, {
            children: (0, K.jsxs)(`div`, {
              className: nt,
              children: [
                (0, K.jsx)(`div`, { className: J }),
                (0, K.jsx)(`div`, { className: J }),
                (0, K.jsx)(`div`, { className: J }),
                (0, K.jsx)(`div`, { className: J }),
              ],
            }),
          })
        : (0, K.jsx)(Q, {
            children: (0, K.jsxs)(`div`, {
              className: tt,
              children: [
                (0, K.jsx)(`div`, { className: J }),
                (0, K.jsx)(`div`, { className: J }),
                (0, K.jsx)(`div`, { className: J }),
              ],
            }),
          })
    : t?.length == 2
      ? t[0] == 3 && t[1] == 3
        ? (0, K.jsx)(Q, {
            children: (0, K.jsxs)(`div`, {
              className: at,
              children: [
                (0, K.jsxs)(`div`, {
                  className: n(X, Z),
                  children: [
                    (0, K.jsx)(`div`, { className: J }),
                    (0, K.jsx)(`div`, { className: J }),
                    (0, K.jsx)(`div`, { className: J }),
                  ],
                }),
                (0, K.jsxs)(`div`, {
                  className: n(X, Z),
                  children: [
                    (0, K.jsx)(`div`, { className: J }),
                    (0, K.jsx)(`div`, { className: J }),
                    (0, K.jsx)(`div`, { className: J }),
                  ],
                }),
              ],
            }),
          })
        : (0, K.jsx)(Q, {
            children: (0, K.jsxs)(`div`, {
              className: at,
              children: [
                (0, K.jsxs)(`div`, {
                  className: n(X, ot),
                  children: [
                    (0, K.jsx)(`div`, { className: J }),
                    (0, K.jsx)(`div`, { className: J }),
                  ],
                }),
                (0, K.jsxs)(`div`, {
                  className: n(X, Z),
                  children: [
                    (0, K.jsx)(`div`, { className: J }),
                    (0, K.jsx)(`div`, { className: J }),
                    (0, K.jsx)(`div`, { className: J }),
                  ],
                }),
              ],
            }),
          })
      : (0, K.jsx)(Q, {
          children: (0, K.jsxs)(`div`, {
            className: st,
            children: [
              (0, K.jsxs)(`div`, {
                className: n(X, ot),
                children: [
                  (0, K.jsx)(`div`, { className: J }),
                  (0, K.jsx)(`div`, { className: J }),
                ],
              }),
              (0, K.jsxs)(`div`, {
                className: n(X, Z),
                children: [
                  (0, K.jsx)(`div`, { className: J }),
                  (0, K.jsx)(`div`, { className: J }),
                  (0, K.jsx)(`div`, { className: J }),
                ],
              }),
              (0, K.jsxs)(`div`, {
                className: n(X, ct),
                children: [
                  (0, K.jsx)(`div`, { className: J }),
                  (0, K.jsx)(`div`, { className: J }),
                  (0, K.jsx)(`div`, { className: J }),
                  (0, K.jsx)(`div`, { className: J }),
                ],
              }),
            ],
          }),
        });
}
function Q(e) {
  return (0, K.jsx)(p, {
    className: n(Ye, e.className),
    focusableIfEmpty: !0,
    children: e.children,
  });
}
function Ot(e) {
  let [t, n] = (0, G.useState)(void 0),
    { data: r } = y(e),
    { data: i } = v(e),
    a = V(),
    o = w();
  return (
    (0, G.useEffect)(() => {
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
function kt(e) {
  let { id: t } = e;
  return t ? (0, K.jsx)(At, { id: t }) : null;
}
function At(e) {
  let { id: t } = e,
    n = Ot(t);
  return n
    ? (0, K.jsx)(`div`, {
        className: F,
        children: n
          .slice(0, 10)
          .map((e) =>
            (0, K.jsx)(ke, { tagid: e.tagid, className: Fe }, `tag_` + e.tagid),
          ),
      })
    : null;
}
function jt(e) {
  let {
      id: t,
      bShowDemoButton: r,
      bShowPurchaseOptionsButton: i,
      fnOnPurchaseOptionsClick: a,
      bHidePrice: o,
      bShowDeckCompatibilityDialog: s,
      eHardwareCompatibilityDisplay: c,
      className: u,
      bShowCartButton: d,
    } = e,
    { data: p } = y(t),
    { data: m } = D(t),
    { data: g } = C(t),
    { bIsOwned: _ } = oe(t),
    [v, b] = ue(s, c);
  if (!p) return null;
  let x =
      (p.type === 1 && !m?.is_coming_soon) ||
      (p.related_items?.demo_appid && p.related_items?.demo_appid.length > 0),
    S = Ke(p.type),
    w = r && S && x,
    T = null;
  if (!_ && g?.is_free_to_keep && g?.free_to_keep_ends) {
    let e = g.free_to_keep_ends,
      t = h(
        `#Sale_default_label_Free_Promo_Description_Short`,
        f(e) + ` @ ` + l(e, { bForce24HourClock: !1 }),
      );
    T = (0, K.jsxs)(`div`, {
      className: Ce,
      children: [
        t,
        (0, K.jsx)(ee, {
          tooltip: h(`#Sale_default_Tooltip_Free_Promo_Limitation`),
        }),
      ],
    });
  }
  return (0, K.jsxs)(`div`, {
    className: n(Te, u),
    children: [
      T,
      (0, K.jsxs)(`div`, {
        className: de,
        children: [
          !!w && (0, K.jsx)(R, { id: t, className: `R0sGSaFdUWo-` }),
          !o &&
            p.type !== 1 &&
            (0, K.jsxs)(K.Fragment, {
              children: [
                !(!i || p.is_free) &&
                  (0, K.jsx)(Mt, { fnOnPurchaseOptionsClick: a }),
                !(!d || p.is_free) &&
                  (0, K.jsx)(N, { id: t, className: `CartBtn` }),
              ],
            }),
          !o && (0, K.jsx)(Ae, { id: t }),
          v && (0, K.jsx)(U, { id: t, compatibility: b }),
        ],
      }),
    ],
  });
}
function Mt(e) {
  return (0, K.jsx)(`div`, {
    className: Ne,
    onClick: e.fnOnPurchaseOptionsClick,
    children: (0, K.jsx)(`span`, {
      children: h(`#EventDisplay_CallToAction_ShowPurchaseOptions_Button`),
    }),
  });
}
function Nt(e) {
  let {
      id: t,
      type: i,
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
    w = We(t, i),
    [T, E] = (0, G.useState)(!1),
    ne = Le(),
    { data: k, isPending: A } = O(w),
    { data: M } = C(w),
    { data: N } = D(w),
    { data: ae } = j(),
    oe = Re(w),
    P = (0, G.useRef)(null),
    [F, me] = (0, G.useState)(!1),
    I = o(),
    [L, Ce] = (0, G.useState)(!1);
  ((0, G.useEffect)(() => {
    if (!L) {
      E(!1);
      return;
    }
    let e = window.setTimeout(() => E(!0), 500);
    return () => window.clearTimeout(e);
  }, [L]),
    (0, G.useEffect)(() => {
      P.current && me(P.current.offsetWidth < 370);
    }, [P]));
  let De = (0, G.useMemo)(
      () => (l && k && Se(k) ? { appid: ye(k)[0] } : w),
      [l, w, k],
    ),
    { strStoreURL: R, snr: z } = se(k, l),
    ke = Be(x ? void 0 : w);
  if (!k)
    return A
      ? (0, K.jsx)(Dt, { capsules_per_row: [1], is_item_browser: !0 })
      : null;
  let B = k.included_appids?.length || 0,
    Ne = k.included_appids?.filter((e) => ae?.has(e))?.length || 0,
    Fe = k.item_type == 2 && !!M?.must_purchase_as_set,
    V = !m && B > 1,
    H = k.item_type == 1 && B == 1,
    U = k.item_type == 0 || H,
    W = H && k.appid,
    Ke = k.name || ``,
    q = ge(N, M),
    Je = I || !N?.is_coming_soon || q,
    [Ye, J] = ue(ee, v);
  return (0, K.jsxs)(p, {
    className: n({ [Ee]: !0, [void 0]: h, StoreSaleWidgetOuterContainer: !0 }),
    "flow-children": `grid`,
    navEntryPreferPosition: s.PREFERRED_CHILD,
    autoFocus: y,
    navKey: `preview_widget_` + _(w),
    ...ke,
    children: [
      (0, K.jsx)(be, {
        appid: U && `appid` in w ? w.appid : void 0,
        children: (0, K.jsxs)(c, {
          onClick: x ? b : void 0,
          className: n({ [je]: !0, [le]: !0, [ie]: x }),
          ...Ue(k, ne, I, !!l, void 0, b),
          preferredFocus: V,
          onFocusWithin: I ? Ce : void 0,
          children: [
            (0, K.jsx)(`div`, {
              className: n(fe),
              children: (0, K.jsx)(Pt, {
                id: De,
                strURL: R,
                children: (0, K.jsxs)(`div`, {
                  className: he,
                  children: [
                    (0, K.jsx)(He, { appids: oe }),
                    (0, K.jsx)(ze, {
                      id: w,
                      imageType: `header`,
                      bPreferAssetWithoutOverride: S,
                    }),
                    (0, K.jsx)(Ve, { id: w }),
                    (0, K.jsx)(_e, {
                      id: w,
                      active: w && T,
                      bIsHoverMode: !0,
                      eGrowOnActivate: I
                        ? void 0
                        : ce.k_ETrailerGrowAmount_Medium,
                    }),
                  ],
                }),
              }),
            }),
            (0, K.jsxs)(`div`, {
              className: n({ [ve]: !0, [re]: V }),
              children: [
                !(!U || b) &&
                  (0, K.jsx)(Oe, {
                    id: w,
                    classOverride: n(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: z,
                  }),
                (0, K.jsx)(`div`, {
                  className: Ie,
                  children: (0, K.jsx)(`a`, {
                    href: b ? void 0 : R,
                    target: r.IN_CLIENT ? void 0 : `_blank`,
                    onClick: b,
                    children: (0, K.jsx)(`div`, {
                      className: n(Me, `StoreSaleWidgetTitle`),
                      children: Ke,
                    }),
                  }),
                }),
                !V && (0, K.jsx)(kt, { id: w }),
                (0, K.jsxs)(`div`, {
                  className: Pe,
                  ref: P,
                  children: [
                    U && (0, K.jsx)(Ft, { id: w }),
                    !V &&
                      !f &&
                      w &&
                      (0, K.jsxs)(K.Fragment, {
                        children: [
                          (0, K.jsx)(we, {
                            id: w,
                            bMinimizePlatforms: F,
                            bHideWindows: F,
                          }),
                          !!(Ye && k.item_type == 0) &&
                            (0, K.jsx)(Ge, {
                              eHWCompat: J,
                              className: `tUIs-i3NWoU-`,
                              id: w,
                            }),
                        ],
                      }),
                  ],
                }),
                !V &&
                  g &&
                  w &&
                  (0, K.jsx)(`div`, {
                    className: `BZ9dZKOmXqE-`,
                    children: (0, K.jsx)(pe, { id: w }),
                  }),
                V &&
                  w &&
                  (0, K.jsx)(qe, {
                    id: w,
                    bHideInLibraryApps: !Fe && k.item_type == 2 && Ne < B,
                  }),
                !!U && (0, K.jsx)(It, { id: w }),
                b
                  ? (0, K.jsx)(`div`, {
                      className: Te,
                      children: (0, K.jsx)(`div`, {
                        className: de,
                        children: (0, K.jsx)(Ae, { id: w }),
                      }),
                    })
                  : (0, K.jsx)(K.Fragment, {
                      children:
                        d && U && W
                          ? (0, K.jsx)(te, { appid: W, bIsMuted: !!T })
                          : (0, K.jsx)(jt, {
                              id: w,
                              bShowDemoButton: a,
                              bHidePrice: u,
                              bHideWishlistButton: Je,
                              eHardwareCompatibilityDisplay: J,
                            }),
                    }),
                (0, K.jsx)(`div`, {
                  className: xe,
                  children: (0, K.jsx)(ze, {
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
        (0, K.jsx)(`div`, { className: `-cW4bgqyLAo-`, children: e.strReason }),
    ],
  });
}
function Pt(e) {
  let { id: t, strURL: n, children: r } = e;
  return `appid` in t
    ? (0, K.jsxs)(z, { id: t, children: [r, ` `] })
    : (0, K.jsx)(`a`, { href: n, children: r });
}
function Ft(e) {
  let { id: t } = e,
    { data: n } = D(t);
  return n ? (0, K.jsx)(`div`, { className: L, children: De(n) }) : null;
}
function It(e) {
  let { id: t } = e,
    { data: r } = O(t),
    { data: i } = C(t),
    { data: a } = T(t),
    { data: o } = j();
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
          ? h(`#Sale_Bundle_CompletePartialSet`, l, c)
          : s > 0
            ? h(`#Sale_BundleSave_WithDiscount`, s, c)
            : h(`#Sale_BundleSave`, c)),
    (0, K.jsx)(`div`, {
      className: n(I, `StoreSaleWidgetShortDesc`),
      children:
        u.startsWith(`#`) && u.indexOf(` `) == -1
          ? (0, K.jsx)(`span`, {
              className: ae,
              children: g(
                u,
                (0, K.jsx)(`i`, {}),
                (0, K.jsx)(`i`, {}),
                (0, K.jsx)(`i`, {}),
                (0, K.jsx)(`i`, {}),
              ),
            })
          : u,
    })
  );
}
var Lt = `yFKurY5xd-8-`,
  Rt = `x-jXNI-s184-`,
  zt = `aG-OF9IYlE8-`,
  Bt = `Ef8xOk5PJbg-`,
  Vt = `RTkq2WI2bK4-`,
  Ht = `_4vRcmVJ4gN8-`,
  Ut = `eEhfnGythD0-`,
  Wt = `qtB6DnXH-bs-`,
  Gt = `tF-0HvIRqgQ-`,
  Kt = `_0EeL7NnvnjU-`,
  qt = `L-E-bGfH1Sw-`,
  Jt = `-pV6HCIaaqM-`,
  Yt = `MUbRKQFMT7E-`;
function Xt(e, n, r) {
  return {
    queryKey: Zt(r),
    enabled: !!r?.GID,
    queryFn: async () => {
      if (!r) return null;
      let i = r.appid
          ? await e.ensureQueryData(S(n, { appid: r.appid }))
          : null,
        a = await e.ensureQueryData(P(r.clanSteamID.GetAccountID(), e));
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
function Zt(e) {
  return [`useFallbackArtworkScreenshot`, e?.GID];
}
function Qt(e, t, n, r = W.full, i = !0) {
  let a = V(),
    o = w();
  return H(en(a, o, e, t, n, r, i)).data ?? void 0;
}
function $t(e, t, n, r = W.full, i = !0) {
  return [`useEventImageURLWithFallback`, e?.GID, t, n, r, i];
}
function en(e, n, r, i, a, o = W.full, s = !0) {
  return {
    queryKey: $t(r, i, a, o, s),
    enabled: !!r?.GID,
    initialData: () => $(r, i, a, o, s),
    queryFn: async () => {
      if (!r) return null;
      let c = $(r, i, a, o, s);
      if (c) return c;
      let l = await e.ensureQueryData(P(r.clanSteamID.GetAccountID(), e));
      if (i == `capsule`) {
        let i = r.appid;
        if (!i && l && ((l.is_creator_home && !l.is_ogg) || l.is_curator)) {
          if (r.jsondata?.referenced_appids?.length)
            i = r.jsondata.referenced_appids[0];
          else return l.avatar_full_url ?? null;
        }
        let a = await e.ensureQueryData(b(n, { appid: i }));
        return a
          ? (A(a, `main_capsule`) ?? null)
          : l?.avatar_full_url
            ? l.avatar_full_url
            : `${t.STORE_ITEM_BASE_URL}steam/apps/${i}/header.jpg`;
      }
      return i == `background` &&
        l &&
        ((l.is_creator_home && !l.is_ogg) || l.is_curator)
        ? (l.creator_page_bg_url ?? null)
        : await e.ensureQueryData(Xt(e, n, r));
    },
  };
}
function $(e, t, n, r = W.full, i = !0) {
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
  Nt as _,
  Lt as a,
  Bt as c,
  Wt as d,
  Ut as f,
  qt as g,
  Jt as h,
  Kt as i,
  Vt as l,
  Yt as m,
  Qt as n,
  Rt as o,
  Gt as p,
  Xt as r,
  zt as s,
  en as t,
  Ht as u,
  jt as v,
};
