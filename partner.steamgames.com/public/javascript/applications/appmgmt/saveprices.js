/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./chunk~9e91add775.js",
      "./chunk~de7f2df91c.js",
      "./chunk~1fa4b8f2ff.js",
      "./chunk~bd90a5fce7.js",
      "./chunk~44f252525d.js",
      "./chunk~96e60d7578.js",
      "./chunk~25a6634263.js",
      "../../../css/applications/appmgmt/chunk~1fc66b8190.css",
      "./chunk~fa5480ab25.js",
      "./chunk~ede3e357a2.js",
      "./chunk~8fb30ea08b.js",
      "./chunk~9aa05d2c7d.js",
      "./chunk~bf46c905a4.js",
      "./chunk~38a44beba7.js",
      "./chunk~2f8c67b4de.js",
      "../../../css/applications/appmgmt/chunk~bc10934db3.css",
      "./chunk~74d773532d.js",
      "./chunk~c627bf7efa.js",
      "./chunk~f8b6a4beb3.js",
      "../../../css/applications/appmgmt/chunk~f609af6c02.css",
    ]),
) => i.map((i) => d[i]);

import {
  Pt as e,
  W as t,
  k as n,
  nt as r,
  r as i,
} from "./chunk~de7f2df91c.js";
import { P as a, ot as o } from "./chunk~bd90a5fce7.js";
import {
  Gt as s,
  Ht as c,
  Kr as l,
  Mt as u,
  Pa as d,
  Wt as f,
  Xa as p,
  _n as m,
  an as h,
  da as g,
  en as _,
  eo as v,
  f as ee,
  fa as y,
  ga as b,
  h as x,
  in as te,
  l as S,
  nr as C,
  on as w,
  sn as T,
  wn as E,
  xn as D,
} from "./chunk~1fa4b8f2ff.js";
import { n as O } from "./chunk~a58194c5d9.js";
import {
  A as k,
  F as A,
  G as j,
  H as M,
  R as N,
  S as ne,
  T as re,
  U as P,
  b as F,
  c as ie,
  h as I,
  j as ae,
  k as L,
  o as R,
  u as z,
  w as oe,
  z as se,
} from "./chunk~360b8fa68b.js";
import { r as B } from "./chunk~8681f5c764.js";
import { t as ce } from "./chunk~92931c6310.js";
import { t as le } from "./chunk~eefd71512b.js";
import { i as ue } from "./chunk~0111fcd096.js";
import {
  c as de,
  i as fe,
  n as pe,
  t as me,
  u as he,
} from "./chunk~55bac8fc8b.js";
import { dt as ge, h as _e, n as ve, pt as ye } from "./chunk~cb393b4e7b.js";
import { t as be } from "./chunk~74d773532d.js";
var V = e(r(), 1),
  H = t(),
  U = V.lazy(() =>
    p(
      () => import(`./chunk~9e91add775.js`),
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      ]),
      import.meta.url,
    ),
  ),
  W = U
    ? function (e) {
        return (0, H.jsx)(V.Suspense, {
          fallback: null,
          children: (0, H.jsx)(U, { ...e }),
        });
      }
    : (e) => null,
  xe = `beibQA383h0-`,
  Se = `L9vHNZZ9iVQ-`,
  Ce = `yr05aRbkKls-`,
  we = `ChHauw6JZ6E-`,
  Te = `HWOMrzWN1Tc-`,
  G = `Bj-cDAje8jA-`;
function Ee(e) {
  let { closeModal: t, fnOnApply: r, singlePackage: i } = e,
    a = ne();
  return (0, H.jsxs)(S, {
    closeModal: t,
    bAlertDialog: !0,
    strTitle: be.Localize(`#PricingDashboard_ApplyConversion_Method`),
    onOK: () => {
      (a(), r && r());
    },
    strOKButtonText: g(
      i
        ? `#PricingDashboard_ApplyGuidelines_Button_Single`
        : `#PricingDashboard_ApplyGuidelines_Button`,
    ),
    children: [
      (0, H.jsx)(`div`, {
        className: G,
        children: be.Localize(
          `#PricingDashboard_ApplyGuidelines_Instructions_MultiOptions`,
        ),
      }),
      (0, H.jsx)(`br`, {}),
      (0, H.jsx)(`a`, {
        href: n.PARTNER_BASE_URL + `doc/store/pricing#5`,
        target: `_blank`,
        children: g(`#PricingDashboard_ApplyGuidelines_Link`),
      }),
      (0, H.jsx)(`br`, {}),
      (0, H.jsx)(`br`, {}),
      !i &&
        (0, H.jsx)(`div`, {
          className: `Bj-cDAje8jA-`,
          children: g(`#PricingDashboard_ApplyGuidelines_Instructions2`),
        }),
      (0, H.jsx)(`div`, {
        className: G,
        children: g(`#PricingDashboard_ApplyGuidelines_Assurance`),
      }),
      (0, H.jsx)(`br`, {}),
      (0, H.jsx)(W, { bHideTour: !0 }),
    ],
  });
}
var De = `CTciUzDmA1I-`,
  K = new u(`price-grid-cell-popout-elements`);
function q(e) {
  let { hoverKey: t, className: n, renderHover: r } = e,
    a = i(De, n),
    o = V.useRef(void 0),
    s = V.useCallback(() => {
      K.HideElement(o.current.ownerDocument, t);
    }, [t]);
  return (0, H.jsx)(`div`, {
    ref: o,
    tabIndex: -1,
    className: a,
    onFocus: (e) => {
      e.target.focus();
      let n = (0, H.jsx)(D, {
        target: o.current,
        direction: `top`,
        bEnablePointerEvents: !0,
        nBodyDistance: 0,
        onClick: s,
        children: r(),
      });
      K.ShowElement(o.current.ownerDocument, n, t);
    },
    onBlur: () => {
      K.HideElement(o.current.ownerDocument, t, 100);
    },
    children: (0, H.jsx)(l, {}),
  });
}
var Oe = `jkgPfypIl3g-`,
  ke = `lZZ9kI2m4XE-`,
  Ae = `Tgfbrh9a7xM-`,
  je = `iduas5SBB-M-`,
  Me = `Nz97KnFhx5s-`,
  Ne = `SLXEdmwQBlU-`,
  Pe = `id6f-X9evAA-`,
  Fe = `wTLGaPMbbuo-`,
  J = `KFTKJXXW01k-`,
  Ie = `wfA7TOLqp5Y-`,
  Le = `LRKE3JBYM9I-`,
  Re = `tIHLL-OD3Gs-`,
  Y = `idZ4p4sm8E0-`,
  X = `CQHVqiaz0dY-`,
  ze = `_9XRS2xOl1A4-`,
  Be = `_5wYYMpXLWKI-`,
  Ve = `wgrJtAuBnVo-`,
  He = `ApmhLbw5J-w-`,
  Ue = `_9-uVcACf610-`,
  We = `X-xPX0y9VTQ-`,
  Ge = `ggjasVwKzDg-`,
  Ke = `CDfJP287RU0-`,
  qe = `K2BEBFwTOYM-`,
  Je = `qAyHg--sDi8-`,
  Ye = `SuCGD7foB9c-`,
  Xe = `n7iJ3z9O75E-`,
  Ze = `ovxCFLyPyjY-`,
  Qe = `m6LIoSRASE8-`,
  $e = `wkBMybv4xw0-`,
  et = `ryBEtg-5OlI-`,
  tt = `V-J1acv8jWY-`,
  nt = `Xs4vx3d-VjA-`,
  rt = `ieRHKoMhCPk-`,
  it = `y7JuVW5N7Ks-`,
  at = `nT9r551qk-A-`,
  ot = `UCalEMrUHCE-`,
  st = `_9h68RuMTsa0-`,
  ct = `M5FxdTP2dX0-`,
  lt = `KUVnNneRkyE-`,
  ut = `Z-lk2fvvlY8-`,
  dt = `m6tQidvlwyU-`;
function Z(e) {
  let { rgLocalPriceOverrides: t } = e,
    [n, r] = V.useState(t.length < 9);
  return (0, H.jsx)(`div`, {
    className: He,
    children: n
      ? (0, H.jsx)(`div`, {
          className: We,
          children: t.map((e) =>
            (0, H.jsx)(ft, { override: e }, `${e.packageID}_${e.strPriceKey}`),
          ),
        })
      : (0, H.jsx)(s, {
          onClick: () => r(!0),
          className: Ue,
          children: g(`#PackageGrid_SeePendingChanges`),
        }),
  });
}
function ft(e) {
  let { override: t } = e,
    { packageID: n, strPriceKey: r, nPriceInCents: a, nOldPriceInCents: o } = t,
    s = j(n),
    [c, l, u] = R(o, r),
    [d, f, p] = R(a, r),
    h = z(r),
    { nMinPriceInCents: g, nMaxPriceInCents: _ } = I(n, r),
    v = a < g || (!!_ && a > _);
  return (0, H.jsxs)(`div`, {
    className: i(qe),
    children: [
      (0, H.jsx)(m, {
        toolTipContent: h,
        direction: `top`,
        className: Ze,
        strTooltipClassname: ot,
        children: r,
      }),
      (0, H.jsx)(m, {
        toolTipContent: `${n}: ${s}`,
        direction: `overlay`,
        className: Je,
        strTooltipClassname: ot,
        children: s,
      }),
      v
        ? (0, H.jsx)(fe, { packageID: n, strPriceKey: r })
        : (0, H.jsx)(pe, { nPriceInCents: a, nSavedPriceInCents: o }),
      (0, H.jsxs)(`div`, {
        className: Ge,
        children: [
          (0, H.jsx)(`div`, { className: Qe, children: c }),
          (0, H.jsx)(`span`, { className: Ye, children: l }),
          (0, H.jsx)(`div`, { className: $e, children: u }),
        ],
      }),
      (0, H.jsx)(`span`, {
        className: et,
        children: (0, H.jsx)(C, { angle: 90 }),
      }),
      (0, H.jsxs)(`div`, {
        className: Ke,
        children: [
          (0, H.jsx)(`div`, { className: Qe, children: c }),
          (0, H.jsx)(`span`, { className: Xe, children: f }),
          (0, H.jsx)(`div`, { className: $e, children: u }),
        ],
      }),
    ],
  });
}
function pt(e) {
  let { closeModal: t, packageID: n, bPackageVisible: r } = e,
    i = se(n),
    a = i.some((e) => e.nPriceInCents > e.nOldPriceInCents),
    o = ht(n, a),
    {
      fnPublish: s,
      ePublishState: c,
      strPublishError: l,
      bBlockedByCooldown: u,
    } = mt(n),
    d = o == 4 || u,
    f = V.useCallback(async () => {
      (await s()) && t?.();
    }, [s, t]),
    p;
  if (o == 3)
    p = y(
      `#PricingDashboard_PriceProposal_Publish_FailedToLoad`,
      (0, H.jsx)(`div`, {}),
      (0, H.jsx)(`div`, {}),
    );
  else if (d) {
    let e = (0, H.jsx)(E, {
      href: `https://partner.steamgames.com/doc/store/pricing`,
    });
    p = (0, H.jsxs)(H.Fragment, {
      children: [
        (0, H.jsx)(`div`, {
          children: g(`#PricingDashboard_PriceProposal_Publish_CooldownError1`),
        }),
        (0, H.jsx)(`div`, {
          children: y(
            `#PricingDashboard_PriceProposal_Publish_CooldownError2`,
            e,
          ),
        }),
        (0, H.jsx)(`div`, {
          children: g(`#PricingDashboard_PriceProposal_Publish_CooldownError3`),
        }),
        (0, H.jsx)(`div`, {
          children: (0, H.jsxs)(`ol`, {
            children: [
              (0, H.jsx)(`li`, {
                children: g(
                  `#PricingDashboard_PriceProposal_Publish_CooldownError3a`,
                ),
              }),
              (0, H.jsx)(`li`, {
                children: g(
                  `#PricingDashboard_PriceProposal_Publish_CooldownError3b`,
                ),
              }),
            ],
          }),
        }),
      ],
    });
  } else
    c == 3 &&
      (p =
        l ||
        y(
          `#PricingDashboard_PriceProposal_Publish_FailedToPublish`,
          (0, H.jsx)(`div`, {}),
          (0, H.jsx)(`div`, {}),
        ));
  if (p) {
    let e = g(
      r
        ? `#PricingDashboard_PriceProposal_Publish_Title`
        : `#PricingDashboard_StageNewPrices_title`,
    );
    return (
      d && (e = g(`#PricingDashboard_PriceProposal_Publish_CantPublishTitle`)),
      (0, H.jsx)(S, {
        strTitle: e,
        bAlertDialog: !0,
        onOK: t,
        onCancel: t,
        closeModal: t,
        children: (0, H.jsx)(`div`, { className: at, children: p }),
      })
    );
  }
  let m = o == 1 || c == 1;
  return (0, H.jsxs)(S, {
    strTitle: g(
      r
        ? `#PricingDashboard_PriceProposal_Publish_Title`
        : `#PricingDashboard_StageNewPrices_title`,
    ),
    bAlertDialog: !1,
    strOKButtonText: g(
      r
        ? `#PricingDashboard_PriceProposal_Publish_Button`
        : `#PricingDashboard_StageNewPrices_ok`,
    ),
    bOKDisabled: m,
    bCancelDisabled: m,
    bDestructiveWarning: !0,
    bCloseAfterOK: !1,
    onOK: f,
    onCancel: t,
    closeModal: t,
    children: [
      m && (0, H.jsx)(le, { position: `center` }),
      !m &&
        (0, H.jsxs)(H.Fragment, {
          children: [
            b(
              r
                ? `#PricingDashboard_PriceProposal_Publish_Explanation`
                : `#PricingDashboard_StageNewPrices_desc_Timing`,
              i.length,
            ),
            !r &&
              (0, H.jsx)(`div`, {
                className: `IOfxER8mFb4-`,
                children: g(`#PricingDashboard_StageNewPrices_NoStoreChange`),
              }),
            P(n) &&
              a &&
              (0, H.jsx)(`div`, {
                className: `Xloihdj9v2Y-`,
                children: g(
                  `#PricingDashboard_PriceProposal_Publish_CooldownWarning`,
                ),
              }),
            (0, H.jsx)(Z, { rgLocalPriceOverrides: i }),
          ],
        }),
    ],
  });
}
function mt(e) {
  let t = k(),
    [n, r] = V.useState(0),
    [i, a] = V.useState(void 0),
    [o, s] = V.useState(!1);
  return {
    fnPublish: V.useCallback(async () => {
      (r(1), a(void 0), s(!1));
      let n = await t(e);
      if (n.success != 1) {
        let e = n.success == 40;
        return (a(e ? n.msg : void 0), s(e && !!n.cooldown), r(3), !1);
      }
      return (r(2), !0);
    }, [r, t, e]),
    ePublishState: n,
    strPublishError: i,
    bBlockedByCooldown: o,
  };
}
function ht(e, t) {
  let [n, r] = V.useState(void 0),
    i = ye(),
    a = ue(60);
  return (
    V.useEffect(() => {
      t &&
        (r(void 0),
        i([e], void 0, 6e4).then(async (e) => {
          r(e);
        }));
    }, [t, e, r, i]),
    t
      ? n == null
        ? 1
        : n == 1
          ? ge(e).every((e) => e.rtStartDate > a + _e || e.rtEndDate < a)
            ? 2
            : 4
          : 3
      : 2
  );
}
function gt(e) {
  let { packageID: t, bShowCancel: n } = e,
    r = A(t),
    a = N(t),
    o = a && me(a.rtSubmitted),
    [s, c] = ve(a?.submitterID),
    l = c ? c.persona_name : a?.submitterID,
    u = `PackageMore_` + t,
    d = null,
    f = null,
    p = null;
  r
    ? ((d = Me),
      (p = g(`#PricingDashboard_PriceProposal_NeedsReview_ttip`)),
      (f = g(`#PricingDashboard_PriceProposal_NeedsReview`)))
    : a?.eState == 1 && a.bPartnerWillPublish
      ? ((d = Pe),
        (p = g(
          `#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish_ttip`,
          l,
          o,
        )),
        (f = g(
          `#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish`,
        )))
      : a?.eState == 1 && !a.bPartnerWillPublish
        ? ((d = Ne),
          (p = g(
            `#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish_ttip`,
            l,
            o,
          )),
          (f = (0, H.jsxs)(`div`, {
            children: [
              g(`#PricingDashboard_PriceProposal_WaitingForReview`),
              (0, H.jsx)(`br`, {}),
              (0, H.jsx)(`span`, {
                children: g(
                  `#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish`,
                ),
              }),
            ],
          })))
        : a?.eState == 4
          ? ((d = Fe),
            (p = g(
              M(t)
                ? `#PricingDashboard_PriceProposal_Approved_ttip`
                : `#PricingDashboard_PriceProposal_Approved_Stage_ttip`,
            )),
            (f = (0, H.jsx)(bt, { packageID: t })))
          : ((d = je),
            (p = g(`#PricingDashboard_PriceProposal_NoneInFlight_ttip`)),
            (f = g(`#PricingDashboard_PriceProposal_NoneInFlight`)));
  let h = () => (0, H.jsx)(xt, { packageID: t }),
    _ = n && (r || !!a);
  return (0, H.jsxs)(`div`, {
    className: i(Oe, d),
    children: [
      (0, H.jsxs)(m, {
        toolTipContent: p,
        className: ke,
        children: [(0, H.jsx)(`div`, { className: Ae }), f],
      }),
      _ && (0, H.jsx)(q, { hoverKey: u, className: void 0, renderHover: h }),
    ],
  });
}
function _t(e) {
  let t = N(e),
    n = M(e);
  return t
    ? t.eState == 4
      ? n
        ? {
            bApproved: !0,
            strLabel: `#PricingDashboard_ProposedPrice_Status_Approved`,
            strMessage: `#PricingDashboard_ProposedPrice_CallOut_Approved`,
          }
        : {
            bApproved: !0,
            strLabel: `#PricingDashboard_ProposedPrice_Status_Approved_Stage`,
            strMessage: `#PricingDashboard_ProposedPrice_CallOut_Approved_Stage`,
          }
      : t.bPartnerWillPublish
        ? {
            bApproved: !1,
            strLabel: `#PricingDashboard_ProposedPrice_Status_InReview`,
            strMessage: n
              ? `#PricingDashboard_ProposedPrice_CallOut_InReview`
              : `#PricingDashboard_ProposedPrice_CallOut_InReview_Stage`,
          }
        : {
            bApproved: !1,
            strLabel: `#PricingDashboard_ProposedPrice_Status_InReview_AutoPublish`,
            strMessage: `#PricingDashboard_ProposedPrice_CallOut_InReview_AutoPublish`,
          }
    : null;
}
function vt(e) {
  let t = _t(e.packageID);
  return t
    ? (0, H.jsx)(O, {
        size: `4`,
        color: t.bApproved ? `text-success` : `text-warning`,
        children: g(t.strMessage),
      })
    : null;
}
function yt(e) {
  let t = _t(e.packageID);
  return t
    ? (0, H.jsx)(O, {
        size: `3`,
        color: t.bApproved ? `text-success` : `text-warning`,
        children: g(t.strLabel),
      })
    : null;
}
function bt(e) {
  let { packageID: t } = e,
    [n, r, i] = a(),
    o = M(t);
  return (0, H.jsxs)(H.Fragment, {
    children: [
      (0, H.jsx)(w, {
        onClick: r,
        children: g(
          o
            ? `#PricingDashboard_PriceProposal_PublishDialog_Button`
            : `#PricingDashboard_StageNewPrices`,
        ),
      }),
      (0, H.jsx)(B, {
        active: n,
        children: (0, H.jsx)(pt, {
          packageID: t,
          bPackageVisible: o,
          closeModal: i,
        }),
      }),
    ],
  });
}
function xt(e) {
  let { packageID: t } = e,
    n = A(t),
    r = re(t),
    i = N(t),
    a = oe(t);
  return (0, H.jsx)(`div`, {
    className: he,
    children: (0, H.jsxs)(`div`, {
      className: de,
      children: [
        n &&
          (0, H.jsx)(`div`, {
            className: `dIR-rFd35NQ-`,
            onClick: r,
            children: g(`#PricingDashboard_RevertAllPackage`),
          }),
        !!i &&
          (0, H.jsx)(`div`, {
            className: `dIR-rFd35NQ-`,
            onClick: a,
            children: g(`#PricingDashboard_CancelPriceProposal`),
          }),
      ],
    }),
  });
}
function St(e) {
  let { closeModal: t } = e,
    n = F(),
    r = L();
  return (0, H.jsxs)(S, {
    strTitle: g(`#PackageGrid_DiscardChangesTitle`),
    strOKButtonText: g(`#PackageGrid_DiscardChangesButton`),
    onOK: r,
    bDestructiveWarning: !0,
    closeModal: t,
    children: [
      b(`#PricingDashboard_DiscardChangesExplanation`, n.length),
      (0, H.jsx)(Z, { rgLocalPriceOverrides: n }),
    ],
  });
}
var Q = 30,
  Ct = 40;
function wt(e) {
  let { bReloadPageOnSave: t } = e,
    n = F()?.length ?? 0,
    r = n > 0,
    [o, c, l] = a(),
    [u, d, f] = a();
  return (0, H.jsxs)(`div`, {
    className: i(J, r && `wfA7TOLqp5Y-`),
    children: [
      (0, H.jsx)(`div`, {
        className: Le,
        children: b(`#PackageGrid_PendingChangeCount`, n),
      }),
      (0, H.jsxs)(`div`, {
        className: Y,
        children: [
          (0, H.jsx)(s, {
            onClick: c,
            disabled: n == 0,
            className: i(X, ze),
            children: g(`#PackageGrid_SaveChangesDialogButton`),
          }),
          (0, H.jsx)(B, {
            active: o,
            children: (0, H.jsx)($, { closeModal: l, bReloadPageOnSave: t }),
          }),
          (0, H.jsx)(s, {
            className: X,
            onClick: d,
            children: g(`#PackageGrid_DiscardChangesDialogButton`),
          }),
          (0, H.jsx)(B, {
            active: u,
            children: (0, H.jsx)(St, { closeModal: f }),
          }),
        ],
      }),
    ],
  });
}
function Tt() {
  return V.useCallback(
    (e, t) => x((0, H.jsx)($, { strContinueUrl: t }), o(e)),
    [],
  );
}
function Et(e) {
  return e
    .filter((e) => e.nPriceInCents > e.nOldPriceInCents)
    .map((e) => e.packageID);
}
function Dt(e) {
  let [t, n] = V.useState(void 0),
    r = ye(),
    i = ue(60);
  return (
    V.useEffect(() => {
      n(void 0);
      let t = Et(e);
      t.length > 0
        ? r(t, void 0, 6e4).then((e) => {
            n(e);
          })
        : n(1);
    }, [n, e, r]),
    V.useMemo(() => {
      if (t === void 0) return null;
      if (t != 1) return { days: 0, loadFailed: !0 };
      let n = 2 ** 53 - 1,
        r = Et(e);
      for (let e of r) {
        let t = ge(e);
        for (let e of t) {
          if (e.rtStartDate < i) continue;
          let t = Math.floor((e.rtStartDate - i) / v.PerDay);
          n = Math.min(n, t);
        }
      }
      return { days: n, loadFailed: !1 };
    }, [t, i, e])
  );
}
var Ot = 5;
function kt(e) {
  let { rgViolations: t } = e;
  if (t.length == 0) return null;
  let n = t.slice(0, Ot),
    r = t.length - n.length,
    i = (0, H.jsx)(E, {
      href: `https://partner.steamgames.com/doc/store/pricing`,
    });
  return (0, H.jsxs)(`div`, {
    className: Be,
    children: [
      n.map((e) =>
        (0, H.jsx)(
          `div`,
          {
            className: Ve,
            children: g(
              e.bTooLow
                ? `#PricingDashboard_PreviewWarning_TooLow`
                : `#PricingDashboard_PreviewWarning_TooHigh`,
              j(e.packageID),
              e.strPriceKey,
              R(e.nPriceInCents, e.strPriceKey).join(``),
              R(e.nLimitInCents, e.strPriceKey).join(``),
            ),
          },
          `${e.packageID}_${e.strPriceKey}`,
        ),
      ),
      r > 0 &&
        (0, H.jsx)(`div`, {
          className: `wgrJtAuBnVo-`,
          children: b(`#PricingDashboard_PreviewWarning_MorePriceProblems`, r),
        }),
      (0, H.jsx)(`div`, {
        className: Ve,
        children: y(`#PricingDashboard_PreviewWarning_SeeRules`, i),
      }),
    ],
  });
}
function $(e) {
  let { closeModal: t, strContinueUrl: n, bReloadPageOnSave: r } = e,
    i = F(),
    a = L(),
    [o, s] = V.useState(void 0),
    l = Dt(i);
  if (!l) return null;
  let u = !!n,
    d = g(
      u
        ? `#PackageGrid_NavigationWarning_Title`
        : `#PricingDashboard_SavePricesTitle`,
    ),
    p = b(`#PricingDashboard_SavePricesExplanation`, i.length);
  if (l.loadFailed)
    return (0, H.jsx)(S, {
      strTitle: d,
      bAlertDialog: !0,
      onOK: t,
      onCancel: t,
      closeModal: t,
      children: (0, H.jsx)(`div`, {
        className: at,
        children: y(
          `#PricingDashboard_SavePrices_FailedToLoad`,
          (0, H.jsx)(`div`, {}),
          (0, H.jsx)(`div`, {}),
        ),
      }),
    });
  let m = [],
    v = new Set(),
    C = new Set(),
    w = new Set();
  for (let e of i) {
    let { packageID: t, strPriceKey: n, nPriceInCents: r } = e,
      { nMinPriceInCents: i, nMaxPriceInCents: a } = I(t, n);
    (r < i
      ? m.push({
          packageID: t,
          strPriceKey: n,
          nPriceInCents: r,
          nLimitInCents: i,
          bTooLow: !0,
        })
      : a &&
        r > a &&
        m.push({
          packageID: t,
          strPriceKey: n,
          nPriceInCents: r,
          nLimitInCents: a,
          bTooLow: !1,
        }),
      e.nPriceInCents > e.nOldPriceInCents &&
        (v.add(e.strPriceKey), P(t) && C.add(e.strPriceKey)),
      w.add(e.packageID));
  }
  let T = Array.from(v),
    E = Array.from(C),
    D = ie(w),
    O;
  if (D.length > 0) {
    let e = D.map((e) => j(e));
    O = g(`#PricingDashboad_RequiredPrices`, e.join(`, `));
  }
  let k = m.length > 0 || o === void 0 || D.length != 0,
    A = (e) => {
      n ? (window.location.href = n) : r && !e && window.location.reload();
    },
    M = () => {
      o === void 0
        ? console.error(`Pricing:SaveChangesDialog auto publish undefined`)
        : (e.closeModal(),
          x((0, H.jsx)(Pt, { bAutoPublish: o, fnOnSuccess: A }), window));
    };
  return (0, H.jsx)(ee, {
    title: d,
    onOK: M,
    onCancel: e.closeModal,
    bDestructiveWarning: u,
    closeModal: t,
    children: (0, H.jsxs)(c, {
      className: tt,
      children: [
        (0, H.jsxs)(f, {
          className: nt,
          children: [
            u &&
              (0, H.jsx)(`div`, {
                className: `ABD5cRto1DQ-`,
                children: g(`#PackageGrid_NavigationWarning`),
              }),
            p,
            (0, H.jsx)(kt, { rgViolations: m }),
            O &&
              (0, H.jsxs)(`div`, {
                className: `_5wYYMpXLWKI-`,
                children: [` `, O, ` `],
              }),
            (0, H.jsx)(Z, { rgLocalPriceOverrides: i }),
            (0, H.jsx)(At, {
              rgIncreasedPriceKeys: T,
              rgCooldownPriceKeys: E,
              nextDiscount: l.days,
            }),
            (0, H.jsx)(jt, { value: o, onChange: s, nextDiscount: l.days }),
          ],
        }),
        (0, H.jsx)(_, {
          children: u
            ? (0, H.jsx)(h, {
                strOKText: g(`#Button_Save`),
                onOK: M,
                bOKDisabled: k,
                strUpdateText: g(`#PackageGrid_NavigateWithoutSavingButton`),
                onUpdate: () => {
                  (a(), e.closeModal(), A(!0));
                },
                onCancel: e.closeModal,
              })
            : (0, H.jsx)(te, {
                strOKText: g(`#Button_Save`),
                onOK: M,
                bOKDisabled: k,
                onCancel: e.closeModal,
              }),
        }),
      ],
    }),
  });
}
function At(e) {
  let { rgIncreasedPriceKeys: t, rgCooldownPriceKeys: n, nextDiscount: r } = e,
    i;
  return (
    r < Q
      ? (i = g(`#PricingDashboard_SavePrice_FutureDiscountTooSoon`, Q))
      : r < Ct
        ? (i = g(`#PricingDashboard_SavePrice_FutureDiscountSoon`, r, Q))
        : ((i = g(`#PricingDashboard_SavePrice_CooldownWarning`, Q)), (t = n)),
    t.length == 0
      ? null
      : (0, H.jsxs)(`div`, {
          className: st,
          children: [
            (0, H.jsx)(`div`, {
              className: ct,
              children: (0, H.jsx)(C, { angle: 0 }),
            }),
            (0, H.jsxs)(`div`, {
              className: lt,
              children: [
                (0, H.jsxs)(`div`, {
                  className: void 0,
                  children: [` `, i, ` `],
                }),
                (0, H.jsx)(`div`, {
                  className: ut,
                  children: b(
                    `#PricingDashboard_SavePrice_IncreasedCurrencies`,
                    t.length,
                    t.join(`, `),
                  ),
                }),
              ],
            }),
          ],
        })
  );
}
function jt(e) {
  let { value: t, onChange: n } = e,
    r = () => n(!0),
    i = () => n(!1),
    a = e.nextDiscount <= Q;
  return (0, H.jsxs)(`div`, {
    className: rt,
    children: [
      (0, H.jsx)(T, {
        className: it,
        checked: t === !1,
        onChange: i,
        label: g(`#PricingDashboard_AutoPublish_Disabled`),
      }),
      (0, H.jsx)(T, {
        className: it,
        checked: t === !0,
        disabled: a,
        onChange: r,
        label: g(`#PricingDashboard_AutoPublish_Enabled`),
      }),
    ],
  });
}
var Mt = {
  USD_CIS: `#PricingDashboard_UnappliedProposal_PriceKeyName_USD_CIS`,
  USD_LATAM: `#PricingDashboard_UnappliedProposal_PriceKeyName_USD_LATAM`,
  USD_MENA: `#PricingDashboard_UnappliedProposal_PriceKeyName_USD_MENA`,
  USD_SASIA: `#PricingDashboard_UnappliedProposal_PriceKeyName_USD_SASIA`,
};
function Nt(e) {
  let { response: t, fnResolve: n } = e,
    { unappliedProposal: r, newProposal: a } = t,
    o = d(r.rtSubmitted),
    s = Array.from(
      new Set([
        ...Object.keys(a?.prices ?? {}),
        ...Object.keys(r.prices ?? {}),
      ]),
    );
  return (0, H.jsx)(S, {
    className: dt,
    strTitle: g(`#PricingDashboard_UnappliedProposal_Title`),
    strDescription: (0, H.jsxs)(H.Fragment, {
      children: [
        (0, H.jsx)(`p`, {
          children: g(
            `#PricingDashboard_UnappliedProposal_Description`,
            j(r.packageID),
            o,
          ),
        }),
        (0, H.jsx)(`p`, {
          children: g(`#PricingDashboard_UnappliedProposal_Instructions`),
        }),
      ],
    }),
    strOKButtonText: g(`#PricingDashboard_UnappliedProposal_Proceed`),
    strCancelButtonText: g(`#Button_Cancel`),
    onOK: () => n(!0),
    onCancel: () => n(!1),
    bDestructiveWarning: !0,
    children:
      s.length > 0 &&
      (0, H.jsxs)(`table`, {
        className: `eQGCJS38cLQ-`,
        children: [
          (0, H.jsx)(`thead`, {
            children: (0, H.jsxs)(`tr`, {
              children: [
                (0, H.jsx)(`th`, {
                  children: g(`#PricingDashboard_UnappliedProposal_PriceKey`),
                }),
                (0, H.jsx)(`th`, {
                  children: g(
                    `#PricingDashboard_UnappliedProposal_PriceKeyName`,
                  ),
                }),
                (0, H.jsxs)(`th`, {
                  className: `AJ-VLRenOm8-`,
                  children: [
                    g(`#PricingDashboard_UnappliedProposal_UnappliedPrice`),
                    (0, H.jsx)(`br`, {}),
                    g(`#PricingDashboard_UnappliedProposal_SubmittedDate`, o),
                  ],
                }),
                (0, H.jsx)(`th`, {
                  children: g(`#PricingDashboard_UnappliedProposal_NewPrice`),
                }),
              ],
            }),
          }),
          (0, H.jsx)(`tbody`, {
            children: s.map((e) => {
              let t = Number(r.prices?.[e] ?? 0),
                n = Number(a?.prices?.[e] ?? 0);
              return (0, H.jsxs)(
                `tr`,
                {
                  children: [
                    (0, H.jsx)(`td`, { children: e }),
                    (0, H.jsx)(`td`, { children: Mt[e] ? g(Mt[e]) : z(e) }),
                    (0, H.jsx)(`td`, { children: R(t, e).join(``) }),
                    (0, H.jsx)(`td`, {
                      className: i(t != n && `SDOQ9-PH82Y-`),
                      children: R(n, e).join(``),
                    }),
                  ],
                },
                e,
              );
            }),
          }),
        ],
      }),
  });
}
function Pt(e) {
  let { closeModal: t, bAutoPublish: n, fnOnSuccess: r } = e,
    i = F(),
    a = ae(),
    o = ce(`SaveProgressDialog`),
    [s, c] = V.useState(0),
    [l, u] = V.useState(null),
    [d, f] = V.useState(null),
    p = () => {
      o.cancel(`cancelled by user`);
    },
    m = !n;
  return (
    V.useEffect(() => {
      (async () => {
        let e = Array.from(new Set(i.map((e) => e.packageID)));
        for (let t = 0; t < e.length; t++) {
          c(t);
          let n = e[t],
            r = await a(n, m, !1, o);
          if (o.token.reason) return;
          if (r.unappliedProposal) {
            let e = await new Promise((e) => f({ response: r, fnResolve: e }));
            if ((f(null), !e)) {
              u(g(`#PricingDashboard_UnappliedProposal_Declined`, j(n)));
              return;
            }
            if (((r = await a(n, m, !0, o)), o.token.reason)) return;
          }
          if (r.success != 1) {
            u(
              r.msg && r.success != 10
                ? r.msg
                : g(`#PricingDashboard_SavePricesError`),
            );
            return;
          }
        }
        (c(e.length), r(), t());
      })();
    }, []),
    d
      ? (0, H.jsx)(Nt, { response: d.response, fnResolve: d.fnResolve })
      : (0, H.jsx)(S, {
          strTitle: g(`#PackageGrid_SaveInProgress`),
          bAlertDialog: !!l,
          strOKButtonText: g(l ? `#Button_Close` : `#Button_OK`),
          onOK: l ? t : r,
          onCancel: p,
          closeModal: t,
          bDestructiveWarning: !0,
          children:
            l ??
            (0, H.jsx)(le, {
              position: `center`,
              string: g(`#PricingDashboard_Progress`, s),
            }),
        })
  );
}
export {
  we as _,
  yt as a,
  Y as c,
  Ie as d,
  q as f,
  xe as g,
  Se as h,
  gt as i,
  Re as l,
  Te as m,
  wt as n,
  vt as o,
  Ee as p,
  Tt as r,
  X as s,
  $ as t,
  J as u,
  Ce as v,
  W as y,
};
