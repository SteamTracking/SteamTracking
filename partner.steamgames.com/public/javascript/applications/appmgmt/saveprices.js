/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./conversionmethodpicker.js",
      "./mobx.esm.js",
      "./dialogs.js",
      "./src.js",
      "./react-router.js",
      "../../../css/applications/appmgmt/dialogs.css",
      "./pricingguidelineobject.js",
      "./useQuery.js",
      "./utils.js",
      "./reactqueryroot.js",
      "./mutation.js",
      "./currencyutils.js",
      "./partnereventshared.module.js",
      "../../../css/applications/appmgmt/partnereventshared.css",
      "./localization3.js",
      "./tour.js",
      "./servicetransportprovider.js",
      "../../../css/applications/appmgmt/tour.css",
    ]),
) => i.map((i) => d[i]);

import { A as e, _t as t, kt as n, nt as r, on as i } from "./mobx.esm.js";
import { R as a, ut as o } from "./src.js";
import {
  Bt as s,
  Ga as c,
  Ot as l,
  Rt as u,
  Vt as d,
  Xt as f,
  Ya as p,
  _n as m,
  bn as h,
  da as g,
  en as _,
  ka as v,
  nn as y,
  oa as b,
  p as x,
  pn as S,
  qn as C,
  rn as w,
  s as T,
  sa as E,
  tn as ee,
  u as te,
  zr as D,
} from "./dialogs.js";
import { n as O } from "./text.js";
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
  h as ae,
  j as oe,
  k as I,
  o as L,
  u as R,
  w as se,
  z as ce,
} from "./tabulatorutils.js";
import { r as z } from "./modals.js";
import { t as le } from "./ajaxhooks.js";
import { t as ue } from "./throbber.js";
import { i as de } from "./eventdevfeaturestore.js";
import {
  c as fe,
  i as pe,
  n as me,
  t as he,
  u as ge,
} from "./pricinggridcell.js";
import { dt as _e, h as ve, n as ye, pt as be } from "./profilestore.js";
import { t as B } from "./localization3.js";
var V = i(n(), 1),
  H = t(),
  U = V.lazy(() =>
    c(
      () => import(`./conversionmethodpicker.js`),
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
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
  let { closeModal: t, fnOnApply: n, singlePackage: i } = e,
    a = ne();
  return (0, H.jsxs)(T, {
    closeModal: t,
    bAlertDialog: !0,
    strTitle: B.Localize(`#PricingDashboard_ApplyConversion_Method`),
    onOK: () => {
      a(), n && n();
    },
    strOKButtonText: b(
      i
        ? `#PricingDashboard_ApplyGuidelines_Button_Single`
        : `#PricingDashboard_ApplyGuidelines_Button`,
    ),
    children: [
      (0, H.jsx)(`div`, {
        className: G,
        children: B.Localize(
          `#PricingDashboard_ApplyGuidelines_Instructions_MultiOptions`,
        ),
      }),
      (0, H.jsx)(`br`, {}),
      (0, H.jsx)(`a`, {
        href: r.PARTNER_BASE_URL + `doc/store/pricing#5`,
        target: `_blank`,
        children: b(`#PricingDashboard_ApplyGuidelines_Link`),
      }),
      (0, H.jsx)(`br`, {}),
      (0, H.jsx)(`br`, {}),
      !i &&
        (0, H.jsx)(`div`, {
          className: `Bj-cDAje8jA-`,
          children: b(`#PricingDashboard_ApplyGuidelines_Instructions2`),
        }),
      (0, H.jsx)(`div`, {
        className: G,
        children: b(`#PricingDashboard_ApplyGuidelines_Assurance`),
      }),
      (0, H.jsx)(`br`, {}),
      (0, H.jsx)(W, { bHideTour: !0 }),
    ],
  });
}
var De = `CTciUzDmA1I-`,
  K = new l(`price-grid-cell-popout-elements`);
function q(t) {
  let { hoverKey: n, className: r, renderHover: i } = t,
    a = e(De, r),
    o = V.useRef(void 0),
    s = V.useCallback(() => {
      K.HideElement(o.current.ownerDocument, n);
    }, [n]);
  return (0, H.jsx)(`div`, {
    ref: o,
    tabIndex: -1,
    className: a,
    onFocus: (e) => {
      e.target.focus();
      let t = (0, H.jsx)(m, {
        target: o.current,
        direction: `top`,
        bEnablePointerEvents: !0,
        nBodyDistance: 0,
        onClick: s,
        children: i(),
      });
      K.ShowElement(o.current.ownerDocument, t, n);
    },
    onBlur: () => {
      K.HideElement(o.current.ownerDocument, n, 100);
    },
    children: (0, H.jsx)(D, {}),
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
      : (0, H.jsx)(d, {
          onClick: () => r(!0),
          className: Ue,
          children: b(`#PackageGrid_SeePendingChanges`),
        }),
  });
}
function ft(t) {
  let { override: n } = t,
    { packageID: r, strPriceKey: i, nPriceInCents: a, nOldPriceInCents: o } = n,
    s = j(r),
    [c, l, u] = L(o, i),
    [d, f, p] = L(a, i),
    m = R(i),
    { nMinPriceInCents: h, nMaxPriceInCents: g } = ae(r, i),
    _ = a < h || (!!g && a > g);
  return (0, H.jsxs)(`div`, {
    className: e(qe),
    children: [
      (0, H.jsx)(S, {
        toolTipContent: m,
        direction: `top`,
        className: Ze,
        strTooltipClassname: ot,
        children: i,
      }),
      (0, H.jsx)(S, {
        toolTipContent: `${r}: ${s}`,
        direction: `overlay`,
        className: Je,
        strTooltipClassname: ot,
        children: s,
      }),
      _
        ? (0, H.jsx)(pe, { packageID: r, strPriceKey: i })
        : (0, H.jsx)(me, { nPriceInCents: a, nSavedPriceInCents: o }),
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
    i = ce(n),
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
    p = E(
      `#PricingDashboard_PriceProposal_Publish_FailedToLoad`,
      (0, H.jsx)(`div`, {}),
      (0, H.jsx)(`div`, {}),
    );
  else if (d) {
    let e = (0, H.jsx)(h, {
      href: `https://partner.steamgames.com/doc/store/pricing`,
    });
    p = (0, H.jsxs)(H.Fragment, {
      children: [
        (0, H.jsx)(`div`, {
          children: b(`#PricingDashboard_PriceProposal_Publish_CooldownError1`),
        }),
        (0, H.jsx)(`div`, {
          children: E(
            `#PricingDashboard_PriceProposal_Publish_CooldownError2`,
            e,
          ),
        }),
        (0, H.jsx)(`div`, {
          children: b(`#PricingDashboard_PriceProposal_Publish_CooldownError3`),
        }),
        (0, H.jsx)(`div`, {
          children: (0, H.jsxs)(`ol`, {
            children: [
              (0, H.jsx)(`li`, {
                children: b(
                  `#PricingDashboard_PriceProposal_Publish_CooldownError3a`,
                ),
              }),
              (0, H.jsx)(`li`, {
                children: b(
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
        E(
          `#PricingDashboard_PriceProposal_Publish_FailedToPublish`,
          (0, H.jsx)(`div`, {}),
          (0, H.jsx)(`div`, {}),
        ));
  if (p) {
    let e = b(
      r
        ? `#PricingDashboard_PriceProposal_Publish_Title`
        : `#PricingDashboard_StageNewPrices_title`,
    );
    return (
      d && (e = b(`#PricingDashboard_PriceProposal_Publish_CantPublishTitle`)),
      (0, H.jsx)(T, {
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
  return (0, H.jsxs)(T, {
    strTitle: b(
      r
        ? `#PricingDashboard_PriceProposal_Publish_Title`
        : `#PricingDashboard_StageNewPrices_title`,
    ),
    bAlertDialog: !1,
    strOKButtonText: b(
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
      m && (0, H.jsx)(ue, { position: `center` }),
      !m &&
        (0, H.jsxs)(H.Fragment, {
          children: [
            g(
              r
                ? `#PricingDashboard_PriceProposal_Publish_Explanation`
                : `#PricingDashboard_StageNewPrices_desc_Timing`,
              i.length,
            ),
            !r &&
              (0, H.jsx)(`div`, {
                className: `IOfxER8mFb4-`,
                children: b(`#PricingDashboard_StageNewPrices_NoStoreChange`),
              }),
            P(n) &&
              a &&
              (0, H.jsx)(`div`, {
                className: `Xloihdj9v2Y-`,
                children: b(
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
      r(1), a(void 0), s(!1);
      let n = await t(e);
      if (n.success != 1) {
        let e = n.success == 40;
        return a(e ? n.msg : void 0), s(e && !!n.cooldown), r(3), !1;
      }
      return r(2), !0;
    }, [r, t, e]),
    ePublishState: n,
    strPublishError: i,
    bBlockedByCooldown: o,
  };
}
function ht(e, t) {
  let [n, r] = V.useState(void 0),
    i = be(),
    a = de(60);
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
          ? _e(e).every((e) => e.rtStartDate > a + ve || e.rtEndDate < a)
            ? 2
            : 4
          : 3
      : 2
  );
}
function gt(t) {
  let { packageID: n, bShowCancel: r } = t,
    i = A(n),
    a = N(n),
    o = a && he(a.rtSubmitted),
    [s, c] = ye(a?.submitterID),
    l = c ? c.persona_name : a?.submitterID,
    u = `PackageMore_` + n,
    d = null,
    f = null,
    p = null;
  i
    ? ((d = Me),
      (p = b(`#PricingDashboard_PriceProposal_NeedsReview_ttip`)),
      (f = b(`#PricingDashboard_PriceProposal_NeedsReview`)))
    : a?.eState == 1 && a.bPartnerWillPublish
      ? ((d = Pe),
        (p = b(
          `#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish_ttip`,
          l,
          o,
        )),
        (f = b(
          `#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish`,
        )))
      : a?.eState == 1 && !a.bPartnerWillPublish
        ? ((d = Ne),
          (p = b(
            `#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish_ttip`,
            l,
            o,
          )),
          (f = (0, H.jsxs)(`div`, {
            children: [
              b(`#PricingDashboard_PriceProposal_WaitingForReview`),
              (0, H.jsx)(`br`, {}),
              (0, H.jsx)(`span`, {
                children: b(
                  `#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish`,
                ),
              }),
            ],
          })))
        : a?.eState == 4
          ? ((d = Fe),
            (p = b(
              M(n)
                ? `#PricingDashboard_PriceProposal_Approved_ttip`
                : `#PricingDashboard_PriceProposal_Approved_Stage_ttip`,
            )),
            (f = (0, H.jsx)(bt, { packageID: n })))
          : ((d = je),
            (p = b(`#PricingDashboard_PriceProposal_NoneInFlight_ttip`)),
            (f = b(`#PricingDashboard_PriceProposal_NoneInFlight`)));
  let m = () => (0, H.jsx)(xt, { packageID: n }),
    h = r && (i || !!a);
  return (0, H.jsxs)(`div`, {
    className: e(Oe, d),
    children: [
      (0, H.jsxs)(S, {
        toolTipContent: p,
        className: ke,
        children: [(0, H.jsx)(`div`, { className: Ae }), f],
      }),
      h && (0, H.jsx)(q, { hoverKey: u, className: void 0, renderHover: m }),
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
        children: b(t.strMessage),
      })
    : null;
}
function yt(e) {
  let t = _t(e.packageID);
  return t
    ? (0, H.jsx)(O, {
        size: `3`,
        color: t.bApproved ? `text-success` : `text-warning`,
        children: b(t.strLabel),
      })
    : null;
}
function bt(e) {
  let { packageID: t } = e,
    [n, r, i] = a(),
    o = M(t);
  return (0, H.jsxs)(H.Fragment, {
    children: [
      (0, H.jsx)(y, {
        onClick: r,
        children: b(
          o
            ? `#PricingDashboard_PriceProposal_PublishDialog_Button`
            : `#PricingDashboard_StageNewPrices`,
        ),
      }),
      (0, H.jsx)(z, {
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
    a = se(t);
  return (0, H.jsx)(`div`, {
    className: ge,
    children: (0, H.jsxs)(`div`, {
      className: fe,
      children: [
        n &&
          (0, H.jsx)(`div`, {
            className: `dIR-rFd35NQ-`,
            onClick: r,
            children: b(`#PricingDashboard_RevertAllPackage`),
          }),
        !!i &&
          (0, H.jsx)(`div`, {
            className: `dIR-rFd35NQ-`,
            onClick: a,
            children: b(`#PricingDashboard_CancelPriceProposal`),
          }),
      ],
    }),
  });
}
function St(e) {
  let { closeModal: t } = e,
    n = F(),
    r = I();
  return (0, H.jsxs)(T, {
    strTitle: b(`#PackageGrid_DiscardChangesTitle`),
    strOKButtonText: b(`#PackageGrid_DiscardChangesButton`),
    onOK: r,
    bDestructiveWarning: !0,
    closeModal: t,
    children: [
      g(`#PricingDashboard_DiscardChangesExplanation`, n.length),
      (0, H.jsx)(Z, { rgLocalPriceOverrides: n }),
    ],
  });
}
var Q = 30,
  Ct = 40;
function wt(t) {
  let { bReloadPageOnSave: n } = t,
    r = F()?.length ?? 0,
    i = r > 0,
    [o, s, c] = a(),
    [l, u, f] = a();
  return (0, H.jsxs)(`div`, {
    className: e(J, i && `wfA7TOLqp5Y-`),
    children: [
      (0, H.jsx)(`div`, {
        className: Le,
        children: g(`#PackageGrid_PendingChangeCount`, r),
      }),
      (0, H.jsxs)(`div`, {
        className: Y,
        children: [
          (0, H.jsx)(d, {
            onClick: s,
            disabled: r == 0,
            className: e(X, ze),
            children: b(`#PackageGrid_SaveChangesDialogButton`),
          }),
          (0, H.jsx)(z, {
            active: o,
            children: (0, H.jsx)($, { closeModal: c, bReloadPageOnSave: n }),
          }),
          (0, H.jsx)(d, {
            className: X,
            onClick: u,
            children: b(`#PackageGrid_DiscardChangesDialogButton`),
          }),
          (0, H.jsx)(z, {
            active: l,
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
    r = be(),
    i = de(60);
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
        let t = _e(e);
        for (let e of t) {
          if (e.rtStartDate < i) continue;
          let t = Math.floor((e.rtStartDate - i) / p.PerDay);
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
    i = (0, H.jsx)(h, {
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
            children: b(
              e.bTooLow
                ? `#PricingDashboard_PreviewWarning_TooLow`
                : `#PricingDashboard_PreviewWarning_TooHigh`,
              j(e.packageID),
              e.strPriceKey,
              L(e.nPriceInCents, e.strPriceKey).join(``),
              L(e.nLimitInCents, e.strPriceKey).join(``),
            ),
          },
          `${e.packageID}_${e.strPriceKey}`,
        ),
      ),
      r > 0 &&
        (0, H.jsx)(`div`, {
          className: `wgrJtAuBnVo-`,
          children: g(`#PricingDashboard_PreviewWarning_MorePriceProblems`, r),
        }),
      (0, H.jsx)(`div`, {
        className: Ve,
        children: E(`#PricingDashboard_PreviewWarning_SeeRules`, i),
      }),
    ],
  });
}
function $(e) {
  let { closeModal: t, strContinueUrl: n, bReloadPageOnSave: r } = e,
    i = F(),
    a = I(),
    [o, c] = V.useState(void 0),
    l = Dt(i);
  if (!l) return null;
  let d = !!n,
    p = b(
      d
        ? `#PackageGrid_NavigationWarning_Title`
        : `#PricingDashboard_SavePricesTitle`,
    ),
    m = g(`#PricingDashboard_SavePricesExplanation`, i.length);
  if (l.loadFailed)
    return (0, H.jsx)(T, {
      strTitle: p,
      bAlertDialog: !0,
      onOK: t,
      onCancel: t,
      closeModal: t,
      children: (0, H.jsx)(`div`, {
        className: at,
        children: E(
          `#PricingDashboard_SavePrices_FailedToLoad`,
          (0, H.jsx)(`div`, {}),
          (0, H.jsx)(`div`, {}),
        ),
      }),
    });
  let h = [],
    v = new Set(),
    y = new Set(),
    S = new Set();
  for (let e of i) {
    let { packageID: t, strPriceKey: n, nPriceInCents: r } = e,
      { nMinPriceInCents: i, nMaxPriceInCents: a } = ae(t, n);
    r < i
      ? h.push({
          packageID: t,
          strPriceKey: n,
          nPriceInCents: r,
          nLimitInCents: i,
          bTooLow: !0,
        })
      : a &&
        r > a &&
        h.push({
          packageID: t,
          strPriceKey: n,
          nPriceInCents: r,
          nLimitInCents: a,
          bTooLow: !1,
        }),
      e.nPriceInCents > e.nOldPriceInCents &&
        (v.add(e.strPriceKey), P(t) && y.add(e.strPriceKey)),
      S.add(e.packageID);
  }
  let C = Array.from(v),
    w = Array.from(y),
    D = ie(S),
    O;
  if (D.length > 0) {
    let e = D.map((e) => j(e));
    O = b(`#PricingDashboad_RequiredPrices`, e.join(`, `));
  }
  let k = h.length > 0 || o === void 0 || D.length != 0,
    A = (e) => {
      n ? (window.location.href = n) : r && !e && window.location.reload();
    },
    M = () => {
      o === void 0
        ? console.error(`Pricing:SaveChangesDialog auto publish undefined`)
        : (e.closeModal(),
          x((0, H.jsx)(Pt, { bAutoPublish: o, fnOnSuccess: A }), window));
    };
  return (0, H.jsx)(te, {
    title: p,
    onOK: M,
    onCancel: e.closeModal,
    bDestructiveWarning: d,
    closeModal: t,
    children: (0, H.jsxs)(u, {
      className: tt,
      children: [
        (0, H.jsxs)(s, {
          className: nt,
          children: [
            d &&
              (0, H.jsx)(`div`, {
                className: `ABD5cRto1DQ-`,
                children: b(`#PackageGrid_NavigationWarning`),
              }),
            m,
            (0, H.jsx)(kt, { rgViolations: h }),
            O &&
              (0, H.jsxs)(`div`, {
                className: `_5wYYMpXLWKI-`,
                children: [` `, O, ` `],
              }),
            (0, H.jsx)(Z, { rgLocalPriceOverrides: i }),
            (0, H.jsx)(At, {
              rgIncreasedPriceKeys: C,
              rgCooldownPriceKeys: w,
              nextDiscount: l.days,
            }),
            (0, H.jsx)(jt, { value: o, onChange: c, nextDiscount: l.days }),
          ],
        }),
        (0, H.jsx)(f, {
          children: d
            ? (0, H.jsx)(ee, {
                strOKText: b(`#Button_Save`),
                onOK: M,
                bOKDisabled: k,
                strUpdateText: b(`#PackageGrid_NavigateWithoutSavingButton`),
                onUpdate: () => {
                  a(), e.closeModal(), A(!0);
                },
                onCancel: e.closeModal,
              })
            : (0, H.jsx)(_, {
                strOKText: b(`#Button_Save`),
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
      ? (i = b(`#PricingDashboard_SavePrice_FutureDiscountTooSoon`, Q))
      : r < Ct
        ? (i = b(`#PricingDashboard_SavePrice_FutureDiscountSoon`, r, Q))
        : ((i = b(`#PricingDashboard_SavePrice_CooldownWarning`, Q)), (t = n)),
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
                  children: g(
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
      (0, H.jsx)(w, {
        className: it,
        checked: t === !1,
        onChange: i,
        label: b(`#PricingDashboard_AutoPublish_Disabled`),
      }),
      (0, H.jsx)(w, {
        className: it,
        checked: t === !0,
        disabled: a,
        onChange: r,
        label: b(`#PricingDashboard_AutoPublish_Enabled`),
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
function Nt(t) {
  let { response: n, fnResolve: r } = t,
    { unappliedProposal: i, newProposal: a } = n,
    o = v(i.rtSubmitted),
    s = Array.from(
      new Set([
        ...Object.keys(a?.prices ?? {}),
        ...Object.keys(i.prices ?? {}),
      ]),
    );
  return (0, H.jsx)(T, {
    className: dt,
    strTitle: b(`#PricingDashboard_UnappliedProposal_Title`),
    strDescription: (0, H.jsxs)(H.Fragment, {
      children: [
        (0, H.jsx)(`p`, {
          children: b(
            `#PricingDashboard_UnappliedProposal_Description`,
            j(i.packageID),
            o,
          ),
        }),
        (0, H.jsx)(`p`, {
          children: b(`#PricingDashboard_UnappliedProposal_Instructions`),
        }),
      ],
    }),
    strOKButtonText: b(`#PricingDashboard_UnappliedProposal_Proceed`),
    strCancelButtonText: b(`#Button_Cancel`),
    onOK: () => r(!0),
    onCancel: () => r(!1),
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
                  children: b(`#PricingDashboard_UnappliedProposal_PriceKey`),
                }),
                (0, H.jsx)(`th`, {
                  children: b(
                    `#PricingDashboard_UnappliedProposal_PriceKeyName`,
                  ),
                }),
                (0, H.jsxs)(`th`, {
                  className: `AJ-VLRenOm8-`,
                  children: [
                    b(`#PricingDashboard_UnappliedProposal_UnappliedPrice`),
                    (0, H.jsx)(`br`, {}),
                    b(`#PricingDashboard_UnappliedProposal_SubmittedDate`, o),
                  ],
                }),
                (0, H.jsx)(`th`, {
                  children: b(`#PricingDashboard_UnappliedProposal_NewPrice`),
                }),
              ],
            }),
          }),
          (0, H.jsx)(`tbody`, {
            children: s.map((t) => {
              let n = Number(i.prices?.[t] ?? 0),
                r = Number(a?.prices?.[t] ?? 0);
              return (0, H.jsxs)(
                `tr`,
                {
                  children: [
                    (0, H.jsx)(`td`, { children: t }),
                    (0, H.jsx)(`td`, { children: Mt[t] ? b(Mt[t]) : R(t) }),
                    (0, H.jsx)(`td`, { children: L(n, t).join(``) }),
                    (0, H.jsx)(`td`, {
                      className: e(n != r && `SDOQ9-PH82Y-`),
                      children: L(r, t).join(``),
                    }),
                  ],
                },
                t,
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
    a = oe(),
    o = le(`SaveProgressDialog`),
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
              u(b(`#PricingDashboard_UnappliedProposal_Declined`, j(n)));
              return;
            }
            if (((r = await a(n, m, !0, o)), o.token.reason)) return;
          }
          if (r.success != 1) {
            u(
              r.msg && r.success != 10
                ? r.msg
                : b(`#PricingDashboard_SavePricesError`),
            );
            return;
          }
        }
        c(e.length), r(), t();
      })();
    }, []),
    d
      ? (0, H.jsx)(Nt, { response: d.response, fnResolve: d.fnResolve })
      : (0, H.jsx)(T, {
          strTitle: b(`#PackageGrid_SaveInProgress`),
          bAlertDialog: !!l,
          strOKButtonText: b(l ? `#Button_Close` : `#Button_OK`),
          onOK: l ? t : r,
          onCancel: p,
          closeModal: t,
          bDestructiveWarning: !0,
          children:
            l ??
            (0, H.jsx)(ue, {
              position: `center`,
              string: b(`#PricingDashboard_Progress`, s),
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
