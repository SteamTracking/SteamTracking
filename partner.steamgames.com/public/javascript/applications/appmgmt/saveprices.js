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
      "./chunk~25a6634263.js",
      "./chunk~44f252525d.js",
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
  At as e,
  j as t,
  rt as n,
  sn as r,
  vt as i,
} from "./chunk~de7f2df91c.js";
import { I as a, ct as o } from "./chunk~25a6634263.js";
import {
  $a as s,
  $t as c,
  Cn as l,
  Gr as u,
  Na as d,
  Ut as f,
  Vt as p,
  Wt as m,
  Ya as h,
  an as g,
  bn as _,
  da as v,
  f as ee,
  gn as y,
  h as b,
  ha as x,
  in as te,
  jt as S,
  l as C,
  on as w,
  rn as ne,
  tr as T,
  ua as E,
} from "./chunk~1fa4b8f2ff.js";
import { n as D } from "./chunk~a58194c5d9.js";
import {
  A as O,
  F as k,
  G as A,
  H as j,
  R as M,
  S as re,
  T as ie,
  U as ae,
  b as N,
  c as oe,
  h as P,
  j as se,
  k as F,
  o as I,
  u as L,
  w as ce,
  z as le,
} from "./chunk~360b8fa68b.js";
import { r as R } from "./chunk~8681f5c764.js";
import { t as ue } from "./chunk~92931c6310.js";
import { t as z } from "./chunk~eefd71512b.js";
import { i as de } from "./chunk~0111fcd096.js";
import {
  c as fe,
  i as pe,
  n as me,
  t as he,
  u as ge,
} from "./chunk~55bac8fc8b.js";
import { dt as _e, h as ve, n as ye, pt as be } from "./chunk~cb393b4e7b.js";
import { t as B } from "./chunk~74d773532d.js";
var V = r(e(), 1),
  H = i(),
  U = V.lazy(() =>
    h(
      () => import(`./chunk~9e91add775.js`),
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
  let { closeModal: t, fnOnApply: r, singlePackage: i } = e,
    a = re();
  return (0, H.jsxs)(C, {
    closeModal: t,
    bAlertDialog: !0,
    strTitle: B.Localize(`#PricingDashboard_ApplyConversion_Method`),
    onOK: () => {
      (a(), r && r());
    },
    strOKButtonText: E(
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
        href: n.PARTNER_BASE_URL + `doc/store/pricing#5`,
        target: `_blank`,
        children: E(`#PricingDashboard_ApplyGuidelines_Link`),
      }),
      (0, H.jsx)(`br`, {}),
      (0, H.jsx)(`br`, {}),
      !i &&
        (0, H.jsx)(`div`, {
          className: `Bj-cDAje8jA-`,
          children: E(`#PricingDashboard_ApplyGuidelines_Instructions2`),
        }),
      (0, H.jsx)(`div`, {
        className: G,
        children: E(`#PricingDashboard_ApplyGuidelines_Assurance`),
      }),
      (0, H.jsx)(`br`, {}),
      (0, H.jsx)(W, { bHideTour: !0 }),
    ],
  });
}
var De = `CTciUzDmA1I-`,
  K = new S(`price-grid-cell-popout-elements`);
function q(e) {
  let { hoverKey: n, className: r, renderHover: i } = e,
    a = t(De, r),
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
      let t = (0, H.jsx)(_, {
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
    children: (0, H.jsx)(u, {}),
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
      : (0, H.jsx)(m, {
          onClick: () => r(!0),
          className: Ue,
          children: E(`#PackageGrid_SeePendingChanges`),
        }),
  });
}
function ft(e) {
  let { override: n } = e,
    { packageID: r, strPriceKey: i, nPriceInCents: a, nOldPriceInCents: o } = n,
    s = A(r),
    [c, l, u] = I(o, i),
    [d, f, p] = I(a, i),
    m = L(i),
    { nMinPriceInCents: h, nMaxPriceInCents: g } = P(r, i),
    _ = a < h || (!!g && a > g);
  return (0, H.jsxs)(`div`, {
    className: t(qe),
    children: [
      (0, H.jsx)(y, {
        toolTipContent: m,
        direction: `top`,
        className: Ze,
        strTooltipClassname: ot,
        children: i,
      }),
      (0, H.jsx)(y, {
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
        children: (0, H.jsx)(T, { angle: 90 }),
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
    i = le(n),
    a = i.some((e) => e.nPriceInCents > e.nOldPriceInCents),
    o = ht(n, a),
    {
      fnPublish: s,
      ePublishState: c,
      strPublishError: u,
      bBlockedByCooldown: d,
    } = mt(n),
    f = o == 4 || d,
    p = V.useCallback(async () => {
      (await s()) && t?.();
    }, [s, t]),
    m;
  if (o == 3)
    m = v(
      `#PricingDashboard_PriceProposal_Publish_FailedToLoad`,
      (0, H.jsx)(`div`, {}),
      (0, H.jsx)(`div`, {}),
    );
  else if (f) {
    let e = (0, H.jsx)(l, {
      href: `https://partner.steamgames.com/doc/store/pricing`,
    });
    m = (0, H.jsxs)(H.Fragment, {
      children: [
        (0, H.jsx)(`div`, {
          children: E(`#PricingDashboard_PriceProposal_Publish_CooldownError1`),
        }),
        (0, H.jsx)(`div`, {
          children: v(
            `#PricingDashboard_PriceProposal_Publish_CooldownError2`,
            e,
          ),
        }),
        (0, H.jsx)(`div`, {
          children: E(`#PricingDashboard_PriceProposal_Publish_CooldownError3`),
        }),
        (0, H.jsx)(`div`, {
          children: (0, H.jsxs)(`ol`, {
            children: [
              (0, H.jsx)(`li`, {
                children: E(
                  `#PricingDashboard_PriceProposal_Publish_CooldownError3a`,
                ),
              }),
              (0, H.jsx)(`li`, {
                children: E(
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
      (m =
        u ||
        v(
          `#PricingDashboard_PriceProposal_Publish_FailedToPublish`,
          (0, H.jsx)(`div`, {}),
          (0, H.jsx)(`div`, {}),
        ));
  if (m) {
    let e = E(
      r
        ? `#PricingDashboard_PriceProposal_Publish_Title`
        : `#PricingDashboard_StageNewPrices_title`,
    );
    return (
      f && (e = E(`#PricingDashboard_PriceProposal_Publish_CantPublishTitle`)),
      (0, H.jsx)(C, {
        strTitle: e,
        bAlertDialog: !0,
        onOK: t,
        onCancel: t,
        closeModal: t,
        children: (0, H.jsx)(`div`, { className: at, children: m }),
      })
    );
  }
  let h = o == 1 || c == 1;
  return (0, H.jsxs)(C, {
    strTitle: E(
      r
        ? `#PricingDashboard_PriceProposal_Publish_Title`
        : `#PricingDashboard_StageNewPrices_title`,
    ),
    bAlertDialog: !1,
    strOKButtonText: E(
      r
        ? `#PricingDashboard_PriceProposal_Publish_Button`
        : `#PricingDashboard_StageNewPrices_ok`,
    ),
    bOKDisabled: h,
    bCancelDisabled: h,
    bDestructiveWarning: !0,
    bCloseAfterOK: !1,
    onOK: p,
    onCancel: t,
    closeModal: t,
    children: [
      h && (0, H.jsx)(z, { position: `center` }),
      !h &&
        (0, H.jsxs)(H.Fragment, {
          children: [
            x(
              r
                ? `#PricingDashboard_PriceProposal_Publish_Explanation`
                : `#PricingDashboard_StageNewPrices_desc_Timing`,
              i.length,
            ),
            !r &&
              (0, H.jsx)(`div`, {
                className: `IOfxER8mFb4-`,
                children: E(`#PricingDashboard_StageNewPrices_NoStoreChange`),
              }),
            ae(n) &&
              a &&
              (0, H.jsx)(`div`, {
                className: `Xloihdj9v2Y-`,
                children: E(
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
  let t = O(),
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
function gt(e) {
  let { packageID: n, bShowCancel: r } = e,
    i = k(n),
    a = M(n),
    o = a && he(a.rtSubmitted),
    [s, c] = ye(a?.submitterID),
    l = c ? c.persona_name : a?.submitterID,
    u = `PackageMore_` + n,
    d = null,
    f = null,
    p = null;
  i
    ? ((d = Me),
      (p = E(`#PricingDashboard_PriceProposal_NeedsReview_ttip`)),
      (f = E(`#PricingDashboard_PriceProposal_NeedsReview`)))
    : a?.eState == 1 && a.bPartnerWillPublish
      ? ((d = Pe),
        (p = E(
          `#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish_ttip`,
          l,
          o,
        )),
        (f = E(
          `#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish`,
        )))
      : a?.eState == 1 && !a.bPartnerWillPublish
        ? ((d = Ne),
          (p = E(
            `#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish_ttip`,
            l,
            o,
          )),
          (f = (0, H.jsxs)(`div`, {
            children: [
              E(`#PricingDashboard_PriceProposal_WaitingForReview`),
              (0, H.jsx)(`br`, {}),
              (0, H.jsx)(`span`, {
                children: E(
                  `#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish`,
                ),
              }),
            ],
          })))
        : a?.eState == 4
          ? ((d = Fe),
            (p = E(
              j(n)
                ? `#PricingDashboard_PriceProposal_Approved_ttip`
                : `#PricingDashboard_PriceProposal_Approved_Stage_ttip`,
            )),
            (f = (0, H.jsx)(bt, { packageID: n })))
          : ((d = je),
            (p = E(`#PricingDashboard_PriceProposal_NoneInFlight_ttip`)),
            (f = E(`#PricingDashboard_PriceProposal_NoneInFlight`)));
  let m = () => (0, H.jsx)(xt, { packageID: n }),
    h = r && (i || !!a);
  return (0, H.jsxs)(`div`, {
    className: t(Oe, d),
    children: [
      (0, H.jsxs)(y, {
        toolTipContent: p,
        className: ke,
        children: [(0, H.jsx)(`div`, { className: Ae }), f],
      }),
      h && (0, H.jsx)(q, { hoverKey: u, className: void 0, renderHover: m }),
    ],
  });
}
function _t(e) {
  let t = M(e),
    n = j(e);
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
    ? (0, H.jsx)(D, {
        size: `4`,
        color: t.bApproved ? `text-success` : `text-warning`,
        children: E(t.strMessage),
      })
    : null;
}
function yt(e) {
  let t = _t(e.packageID);
  return t
    ? (0, H.jsx)(D, {
        size: `3`,
        color: t.bApproved ? `text-success` : `text-warning`,
        children: E(t.strLabel),
      })
    : null;
}
function bt(e) {
  let { packageID: t } = e,
    [n, r, i] = a(),
    o = j(t);
  return (0, H.jsxs)(H.Fragment, {
    children: [
      (0, H.jsx)(g, {
        onClick: r,
        children: E(
          o
            ? `#PricingDashboard_PriceProposal_PublishDialog_Button`
            : `#PricingDashboard_StageNewPrices`,
        ),
      }),
      (0, H.jsx)(R, {
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
    n = k(t),
    r = ie(t),
    i = M(t),
    a = ce(t);
  return (0, H.jsx)(`div`, {
    className: ge,
    children: (0, H.jsxs)(`div`, {
      className: fe,
      children: [
        n &&
          (0, H.jsx)(`div`, {
            className: `dIR-rFd35NQ-`,
            onClick: r,
            children: E(`#PricingDashboard_RevertAllPackage`),
          }),
        !!i &&
          (0, H.jsx)(`div`, {
            className: `dIR-rFd35NQ-`,
            onClick: a,
            children: E(`#PricingDashboard_CancelPriceProposal`),
          }),
      ],
    }),
  });
}
function St(e) {
  let { closeModal: t } = e,
    n = N(),
    r = F();
  return (0, H.jsxs)(C, {
    strTitle: E(`#PackageGrid_DiscardChangesTitle`),
    strOKButtonText: E(`#PackageGrid_DiscardChangesButton`),
    onOK: r,
    bDestructiveWarning: !0,
    closeModal: t,
    children: [
      x(`#PricingDashboard_DiscardChangesExplanation`, n.length),
      (0, H.jsx)(Z, { rgLocalPriceOverrides: n }),
    ],
  });
}
var Q = 30,
  Ct = 40;
function wt(e) {
  let { bReloadPageOnSave: n } = e,
    r = N()?.length ?? 0,
    i = r > 0,
    [o, s, c] = a(),
    [l, u, d] = a();
  return (0, H.jsxs)(`div`, {
    className: t(J, i && `wfA7TOLqp5Y-`),
    children: [
      (0, H.jsx)(`div`, {
        className: Le,
        children: x(`#PackageGrid_PendingChangeCount`, r),
      }),
      (0, H.jsxs)(`div`, {
        className: Y,
        children: [
          (0, H.jsx)(m, {
            onClick: s,
            disabled: r == 0,
            className: t(X, ze),
            children: E(`#PackageGrid_SaveChangesDialogButton`),
          }),
          (0, H.jsx)(R, {
            active: o,
            children: (0, H.jsx)($, { closeModal: c, bReloadPageOnSave: n }),
          }),
          (0, H.jsx)(m, {
            className: X,
            onClick: u,
            children: E(`#PackageGrid_DiscardChangesDialogButton`),
          }),
          (0, H.jsx)(R, {
            active: l,
            children: (0, H.jsx)(St, { closeModal: d }),
          }),
        ],
      }),
    ],
  });
}
function Tt() {
  return V.useCallback(
    (e, t) => b((0, H.jsx)($, { strContinueUrl: t }), o(e)),
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
          let t = Math.floor((e.rtStartDate - i) / s.PerDay);
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
    i = (0, H.jsx)(l, {
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
            children: E(
              e.bTooLow
                ? `#PricingDashboard_PreviewWarning_TooLow`
                : `#PricingDashboard_PreviewWarning_TooHigh`,
              A(e.packageID),
              e.strPriceKey,
              I(e.nPriceInCents, e.strPriceKey).join(``),
              I(e.nLimitInCents, e.strPriceKey).join(``),
            ),
          },
          `${e.packageID}_${e.strPriceKey}`,
        ),
      ),
      r > 0 &&
        (0, H.jsx)(`div`, {
          className: `wgrJtAuBnVo-`,
          children: x(`#PricingDashboard_PreviewWarning_MorePriceProblems`, r),
        }),
      (0, H.jsx)(`div`, {
        className: Ve,
        children: v(`#PricingDashboard_PreviewWarning_SeeRules`, i),
      }),
    ],
  });
}
function $(e) {
  let { closeModal: t, strContinueUrl: n, bReloadPageOnSave: r } = e,
    i = N(),
    a = F(),
    [o, s] = V.useState(void 0),
    l = Dt(i);
  if (!l) return null;
  let u = !!n,
    d = E(
      u
        ? `#PackageGrid_NavigationWarning_Title`
        : `#PricingDashboard_SavePricesTitle`,
    ),
    m = x(`#PricingDashboard_SavePricesExplanation`, i.length);
  if (l.loadFailed)
    return (0, H.jsx)(C, {
      strTitle: d,
      bAlertDialog: !0,
      onOK: t,
      onCancel: t,
      closeModal: t,
      children: (0, H.jsx)(`div`, {
        className: at,
        children: v(
          `#PricingDashboard_SavePrices_FailedToLoad`,
          (0, H.jsx)(`div`, {}),
          (0, H.jsx)(`div`, {}),
        ),
      }),
    });
  let h = [],
    g = new Set(),
    _ = new Set(),
    y = new Set();
  for (let e of i) {
    let { packageID: t, strPriceKey: n, nPriceInCents: r } = e,
      { nMinPriceInCents: i, nMaxPriceInCents: a } = P(t, n);
    (r < i
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
        (g.add(e.strPriceKey), ae(t) && _.add(e.strPriceKey)),
      y.add(e.packageID));
  }
  let S = Array.from(g),
    w = Array.from(_),
    T = oe(y),
    D;
  if (T.length > 0) {
    let e = T.map((e) => A(e));
    D = E(`#PricingDashboad_RequiredPrices`, e.join(`, `));
  }
  let O = h.length > 0 || o === void 0 || T.length != 0,
    k = (e) => {
      n ? (window.location.href = n) : r && !e && window.location.reload();
    },
    j = () => {
      o === void 0
        ? console.error(`Pricing:SaveChangesDialog auto publish undefined`)
        : (e.closeModal(),
          b((0, H.jsx)(Pt, { bAutoPublish: o, fnOnSuccess: k }), window));
    };
  return (0, H.jsx)(ee, {
    title: d,
    onOK: j,
    onCancel: e.closeModal,
    bDestructiveWarning: u,
    closeModal: t,
    children: (0, H.jsxs)(p, {
      className: tt,
      children: [
        (0, H.jsxs)(f, {
          className: nt,
          children: [
            u &&
              (0, H.jsx)(`div`, {
                className: `ABD5cRto1DQ-`,
                children: E(`#PackageGrid_NavigationWarning`),
              }),
            m,
            (0, H.jsx)(kt, { rgViolations: h }),
            D &&
              (0, H.jsxs)(`div`, {
                className: `_5wYYMpXLWKI-`,
                children: [` `, D, ` `],
              }),
            (0, H.jsx)(Z, { rgLocalPriceOverrides: i }),
            (0, H.jsx)(At, {
              rgIncreasedPriceKeys: S,
              rgCooldownPriceKeys: w,
              nextDiscount: l.days,
            }),
            (0, H.jsx)(jt, { value: o, onChange: s, nextDiscount: l.days }),
          ],
        }),
        (0, H.jsx)(c, {
          children: u
            ? (0, H.jsx)(te, {
                strOKText: E(`#Button_Save`),
                onOK: j,
                bOKDisabled: O,
                strUpdateText: E(`#PackageGrid_NavigateWithoutSavingButton`),
                onUpdate: () => {
                  (a(), e.closeModal(), k(!0));
                },
                onCancel: e.closeModal,
              })
            : (0, H.jsx)(ne, {
                strOKText: E(`#Button_Save`),
                onOK: j,
                bOKDisabled: O,
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
      ? (i = E(`#PricingDashboard_SavePrice_FutureDiscountTooSoon`, Q))
      : r < Ct
        ? (i = E(`#PricingDashboard_SavePrice_FutureDiscountSoon`, r, Q))
        : ((i = E(`#PricingDashboard_SavePrice_CooldownWarning`, Q)), (t = n)),
    t.length == 0
      ? null
      : (0, H.jsxs)(`div`, {
          className: st,
          children: [
            (0, H.jsx)(`div`, {
              className: ct,
              children: (0, H.jsx)(T, { angle: 0 }),
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
                  children: x(
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
        label: E(`#PricingDashboard_AutoPublish_Disabled`),
      }),
      (0, H.jsx)(w, {
        className: it,
        checked: t === !0,
        disabled: a,
        onChange: r,
        label: E(`#PricingDashboard_AutoPublish_Enabled`),
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
  let { response: n, fnResolve: r } = e,
    { unappliedProposal: i, newProposal: a } = n,
    o = d(i.rtSubmitted),
    s = Array.from(
      new Set([
        ...Object.keys(a?.prices ?? {}),
        ...Object.keys(i.prices ?? {}),
      ]),
    );
  return (0, H.jsx)(C, {
    className: dt,
    strTitle: E(`#PricingDashboard_UnappliedProposal_Title`),
    strDescription: (0, H.jsxs)(H.Fragment, {
      children: [
        (0, H.jsx)(`p`, {
          children: E(
            `#PricingDashboard_UnappliedProposal_Description`,
            A(i.packageID),
            o,
          ),
        }),
        (0, H.jsx)(`p`, {
          children: E(`#PricingDashboard_UnappliedProposal_Instructions`),
        }),
      ],
    }),
    strOKButtonText: E(`#PricingDashboard_UnappliedProposal_Proceed`),
    strCancelButtonText: E(`#Button_Cancel`),
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
                  children: E(`#PricingDashboard_UnappliedProposal_PriceKey`),
                }),
                (0, H.jsx)(`th`, {
                  children: E(
                    `#PricingDashboard_UnappliedProposal_PriceKeyName`,
                  ),
                }),
                (0, H.jsxs)(`th`, {
                  className: `AJ-VLRenOm8-`,
                  children: [
                    E(`#PricingDashboard_UnappliedProposal_UnappliedPrice`),
                    (0, H.jsx)(`br`, {}),
                    E(`#PricingDashboard_UnappliedProposal_SubmittedDate`, o),
                  ],
                }),
                (0, H.jsx)(`th`, {
                  children: E(`#PricingDashboard_UnappliedProposal_NewPrice`),
                }),
              ],
            }),
          }),
          (0, H.jsx)(`tbody`, {
            children: s.map((e) => {
              let n = Number(i.prices?.[e] ?? 0),
                r = Number(a?.prices?.[e] ?? 0);
              return (0, H.jsxs)(
                `tr`,
                {
                  children: [
                    (0, H.jsx)(`td`, { children: e }),
                    (0, H.jsx)(`td`, { children: Mt[e] ? E(Mt[e]) : L(e) }),
                    (0, H.jsx)(`td`, { children: I(n, e).join(``) }),
                    (0, H.jsx)(`td`, {
                      className: t(n != r && `SDOQ9-PH82Y-`),
                      children: I(r, e).join(``),
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
    i = N(),
    a = se(),
    o = ue(`SaveProgressDialog`),
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
              u(E(`#PricingDashboard_UnappliedProposal_Declined`, A(n)));
              return;
            }
            if (((r = await a(n, m, !0, o)), o.token.reason)) return;
          }
          if (r.success != 1) {
            u(
              r.msg && r.success != 10
                ? r.msg
                : E(`#PricingDashboard_SavePricesError`),
            );
            return;
          }
        }
        (c(e.length), r(), t());
      })();
    }, []),
    d
      ? (0, H.jsx)(Nt, { response: d.response, fnResolve: d.fnResolve })
      : (0, H.jsx)(C, {
          strTitle: E(`#PackageGrid_SaveInProgress`),
          bAlertDialog: !!l,
          strOKButtonText: E(l ? `#Button_Close` : `#Button_OK`),
          onOK: l ? t : r,
          onCancel: p,
          closeModal: t,
          bDestructiveWarning: !0,
          children:
            l ??
            (0, H.jsx)(z, {
              position: `center`,
              string: E(`#PricingDashboard_Progress`, s),
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
