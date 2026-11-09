/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $t as e,
  A as t,
  U as n,
  _t as r,
  kt as i,
  on as a,
} from "./mobx.esm.js";
import { F as o, It as s, R as c, r as l } from "./src.js";
import { n as u } from "./usedataloader.client.js";
import { Ga as d, Vt as f, oa as p, s as ee, un as m } from "./dialogs.js";
import { D as te, a as ne, k as h, r as g } from "./react-router.js";
import { i as _, n as v, r as re, t as y } from "./pricingguidelineobject.js";
import { n as b, t as x } from "./flex.js";
import { n as ie, t as ae } from "./button.js";
import { n as S } from "./text.js";
import { t as C } from "./heading.js";
import { t as w } from "./textlink.js";
import {
  B as T,
  O as E,
  R as D,
  V as oe,
  _ as se,
  a as O,
  d as k,
  g as A,
  m as ce,
  p as j,
  q as le,
  v as M,
  w as ue,
  y as de,
} from "./tabulatorutils.js";
import { r as N } from "./modals.js";
import { t as P } from "./throbber.js";
import { c as F, i as I, o as L, r as R, s as z } from "./currencyutils.js";
import { d as B, f as V, l as H, r as fe } from "./pricinggridcell.js";
import { t as pe } from "./phpintegration.js";
import { t as me } from "./unknownroute.js";
import { n as he, t as U } from "./fancytable.js";
import { a as ge, f as _e } from "./profilestore.js";
import { t as W } from "./localization3.js";
import {
  a as ve,
  c as ye,
  d as be,
  i as xe,
  l as Se,
  n as Ce,
  o as we,
  p as Te,
  r as Ee,
  s as De,
  u as Oe,
  y as ke,
} from "./saveprices.js";
import { n as G, t as Ae } from "./localization4.js";
var K = {};
((K.arabic = () =>
  d(() => import(`./currency_arabic.js`), [], import.meta.url)),
  (K.brazilian = () =>
    d(() => import(`./currency_brazilian.js`), [], import.meta.url)),
  (K.bulgarian = () =>
    d(() => import(`./currency_bulgarian.js`), [], import.meta.url)),
  (K.czech = () => d(() => import(`./currency_czech.js`), [], import.meta.url)),
  (K.danish = () =>
    d(() => import(`./currency_danish.js`), [], import.meta.url)),
  (K.dutch = () => d(() => import(`./currency_dutch.js`), [], import.meta.url)),
  (K.english = () =>
    d(() => import(`./currency_english.js`), [], import.meta.url)),
  (K.finnish = () =>
    d(() => import(`./currency_finnish.js`), [], import.meta.url)),
  (K.french = () =>
    d(() => import(`./currency_french.js`), [], import.meta.url)),
  (K.german = () =>
    d(() => import(`./currency_german.js`), [], import.meta.url)),
  (K.greek = () => d(() => import(`./currency_greek.js`), [], import.meta.url)),
  (K.hungarian = () =>
    d(() => import(`./currency_hungarian.js`), [], import.meta.url)),
  (K.indonesian = () =>
    d(() => import(`./currency_indonesian.js`), [], import.meta.url)),
  (K.italian = () =>
    d(() => import(`./currency_italian.js`), [], import.meta.url)),
  (K.japanese = () =>
    d(() => import(`./currency_japanese.js`), [], import.meta.url)),
  (K.koreana = () =>
    d(() => import(`./currency_koreana.js`), [], import.meta.url)),
  (K.latam = () => d(() => import(`./currency_latam.js`), [], import.meta.url)),
  (K.malay = () => d(() => import(`./currency_malay.js`), [], import.meta.url)),
  (K.norwegian = () =>
    d(() => import(`./currency_norwegian.js`), [], import.meta.url)),
  (K.polish = () =>
    d(() => import(`./currency_polish.js`), [], import.meta.url)),
  (K.portuguese = () =>
    d(() => import(`./currency_portuguese.js`), [], import.meta.url)),
  (K.romanian = () =>
    d(() => import(`./currency_romanian.js`), [], import.meta.url)),
  (K.russian = () =>
    d(() => import(`./currency_russian.js`), [], import.meta.url)),
  (K.sc_schinese = () =>
    d(() => import(`./currency_sc_schinese.js`), [], import.meta.url)),
  (K.schinese = () =>
    d(() => import(`./currency_schinese.js`), [], import.meta.url)),
  (K.spanish = () =>
    d(() => import(`./currency_spanish.js`), [], import.meta.url)),
  (K.swedish = () =>
    d(() => import(`./currency_swedish.js`), [], import.meta.url)),
  (K.tchinese = () =>
    d(() => import(`./currency_tchinese.js`), [], import.meta.url)),
  (K.thai = () => d(() => import(`./currency_thai.js`), [], import.meta.url)),
  (K.turkish = () =>
    d(() => import(`./currency_turkish.js`), [], import.meta.url)),
  (K.ukrainian = () =>
    d(() => import(`./currency_ukrainian.js`), [], import.meta.url)),
  (K.vietnamese = () =>
    d(() => import(`./currency_vietnamese.js`), [], import.meta.url)));
async function je(e) {
  if (K[e]) return await K[e]();
}
var q = te(je);
function Me(e) {
  return q.Localize(`#CurrencyCodeDescription_${I(e)}`);
}
var J = a(i(), 1),
  Y = r();
function X(e) {
  return Me(e.getValue());
}
function Ne(e) {
  let t = e.getValue(),
    n = z(t),
    r = q.Localize(`#Region_Pricing_Tooltip_${n}`);
  return (0, Y.jsxs)(`span`, {
    children: [n, ` `, (0, Y.jsx)(m, { tooltip: r })],
  });
}
var Pe = { PriceEdit: (e) => `/packages/pricing/${e}` },
  Z = a(s());
function Fe(t, n, r) {
  let i = _(),
    a = V();
  return (0, J.useMemo)(() => {
    let o = [],
      s = [],
      c = [];
    if (t) {
      let l = L(1).toUpperCase(),
        u = j(n, l) || A(n, l) || M(n, l);
      for (let e = 1; e < 48; ++e) {
        if (!t.BIsSupportCurrencyAndOrRegion(e)) continue;
        let s = L(e).toUpperCase(),
          c = M(n, s),
          l = A(n, s),
          d = j(n, s),
          f = t.GetScaledRecommendedPrice(u, e, void 0, i).price;
        o.push({
          packageID: n,
          strPriceKey: s,
          eCurrencyCode: e,
          eRegionCode: void 0,
          strCountryOverride: void 0,
          nPublishedPrice: c,
          nProposedPrice: l,
          nLocalPrice: d,
          nSuggestedPrice: f,
          bCanSetToFree: !!a,
          appids: r,
        });
      }
      for (let e = 1; e < 5; ++e) {
        if (!t.BIsSupportCurrencyAndOrRegion(1, e)) continue;
        let a = L(1, e).toUpperCase(),
          o = M(n, a),
          c = A(n, a),
          l = j(n, a),
          d = t.GetScaledRecommendedPrice(u, 1, e, i).price;
        s.push({
          packageID: n,
          strPriceKey: a,
          eCurrencyCode: 1,
          eRegionCode: e,
          strCountryOverride: void 0,
          nPublishedPrice: o,
          nProposedPrice: c,
          nLocalPrice: l,
          nSuggestedPrice: d,
          bCanSetToFree: !1,
          appids: r,
        });
      }
      let d = se(n);
      d.length > 0 &&
        d.forEach((t) => {
          let { eCurrencyCode: i, strCountryCode: a } = F(t),
            o = R(a);
          e(
            i == o,
            `Unexpected currency ${i} for country ${a} when expecting ${o} `,
          );
          let s = A(n, t);
          c.push({
            packageID: n,
            strPriceKey: t,
            eCurrencyCode: i,
            eRegionCode: void 0,
            strCountryOverride: a,
            nPublishedPrice: de(n, t),
            nProposedPrice: s,
            nLocalPrice: j(n, t),
            nSuggestedPrice: void 0,
            bCanSetToFree: !1,
            appids: r,
          });
        });
    }
    return { rgCurrencyRows: o, rgRegionRows: s, rgCountryOverrideRows: c };
  }, [t, n, a, i, r]);
}
function Ie(e) {
  let t = `${n.PARTNER_BASE_URL}doc/finance/taxfaq`;
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsxs)(b, {
        paddingBottom: `4`,
        children: [
          (0, Y.jsx)(S, {
            as: `p`,
            size: `4`,
            color: `text-body`,
            contrast: `subtitle`,
            children: W.Localize(`#SinglePricingPackage_Intro_1`),
          }),
          (0, Y.jsx)(S, {
            as: `p`,
            size: `4`,
            color: `text-body`,
            contrast: `subtitle`,
            children: W.Localize(`#SinglePricingPackage_Intro_2`),
          }),
          (0, Y.jsx)(S, {
            size: `4`,
            color: `text-body`,
            contrast: `subtitle`,
            children: (0, Y.jsxs)(`ol`, {
              children: [
                (0, Y.jsx)(`li`, {
                  children: W.Localize(`#SinglePricingPackage_Intro_2a`),
                }),
                (0, Y.jsx)(`li`, {
                  children: W.Localize(`#SinglePricingPackage_Intro_2b`),
                }),
              ],
            }),
          }),
        ],
      }),
      (0, Y.jsx)(b, {
        paddingBottom: `4`,
        children: (0, Y.jsx)(S, {
          children: W.LocalizeReact(
            `#SinglePricingPackage_Desc_2`,
            (0, Y.jsx)(w, {
              href: t,
              children: W.LocalizeReact(`#SinglePricingPackage_Desc_2_Link`),
            }),
          ),
        }),
      }),
      (0, Y.jsx)(b, {
        children: (0, Y.jsx)(S, {
          children: W.Localize(`#SinglePricingPackage_Desc_3`),
        }),
      }),
    ],
  });
}
var Le = `wo2GzPtQoTA-`,
  Re = `Pa6ALJGOpwk-`,
  ze = `A9X1dzkhLiA-`,
  Be = `TSvnB8--gSk-`,
  Ve = `G35ZSKlRwJg-`,
  He = `vp56-md-DzE-`;
function Q(e) {
  return e.getValue() == -1 || !e.getValue()
    ? `--`
    : u(e.getValue(), e.row.original.eCurrencyCode);
}
function Ue(e) {
  let n = e.row.original;
  if (n.nProposedPrice == -1 || !n.nProposedPrice) return `--`;
  let r = !n.nPublishedPrice;
  return (0, Y.jsx)(`span`, {
    className: t({
      [Le]: r,
      [Re]: !r && n.nProposedPrice > n.nPublishedPrice,
      [ze]: !r && n.nProposedPrice < n.nPublishedPrice,
    }),
    children: u(n.nProposedPrice, n.eCurrencyCode),
  });
}
function We(e) {
  return Ae(e.row.original.strCountryOverride);
}
function Ge(e) {
  let {
      packageID: n,
      strPriceKey: r,
      eRegionCode: i,
      eCurrencyCode: a,
    } = e.row.original,
    { nPriceInCents: o, nProposedPriceInCents: s } = T(n, r),
    c = _(),
    l = v(),
    u = L(1).toUpperCase(),
    d = j(n, u) || A(n, u) || M(n, u),
    { nGuidelinesLevel: f } = oe(l, c, d, a, i),
    p = ce(r, o ?? s, f, !0);
  return p == -1 || !p
    ? `--`
    : (0, Y.jsxs)(`span`, { className: t({}), children: [p, ` %`] });
}
function Ke(e) {
  let { nPackageID: t } = e;
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsxs)(x, {
        direction: `column`,
        align: `start`,
        paddingBottom: `4`,
        children: [
          (0, Y.jsx)(ie, {
            href: `${n.PARTNER_BASE_URL}pricing/dashboard/?pn=${t}`,
            children: W.Localize(`#SinglePackagePricing_Right_Edit`),
          }),
          (0, Y.jsx)(S, {
            children: W.Localize(`#SinglePackagePricing_Right_Edit_desc`),
          }),
        ],
      }),
      (0, Y.jsxs)(x, {
        direction: `column`,
        paddingBottom: `4`,
        children: [
          (0, Y.jsx)(C, {
            size: `7`,
            children: W.Localize(`#SinglePackagePricing_Right_Help_Title`),
          }),
          (0, Y.jsx)(S, {
            children: W.Localize(`#SinglePackagePricing_Right_Help_Desc`),
          }),
          (0, Y.jsx)(w, {
            href: `${n.PARTNER_BASE_URL}doc/store/pricing`,
            children: W.Localize(`#SinglePackagePricing_Right_Link`),
          }),
        ],
      }),
      (0, Y.jsxs)(x, {
        direction: `column`,
        children: [
          (0, Y.jsx)(C, {
            size: `7`,
            children: W.Localize(`#SinglePackagePricing_Right_FAQ`),
          }),
          (0, Y.jsxs)(b, {
            children: [
              (0, Y.jsx)(S, {
                size: `4`,
                weight: `medium`,
                children: W.Localize(
                  `#SinglePackagePricing_Right_FAQ_switching`,
                ),
              }),
              (0, Y.jsx)(`br`, {}),
              (0, Y.jsx)(S, {
                children: W.LocalizeReact(
                  `#SinglePackagePricing_Right_FAQ_switching_answer`,
                  (0, Y.jsx)(w, {
                    href: `${n.PARTNER_BASE_URL}wizard/HelpWithPublishing?issueid=915`,
                    children: W.Localize(
                      `#SinglePackagePricing_Right_FAQ_switching_answer_link`,
                    ),
                  }),
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function qe(e) {
  let { nPackageID: n } = e,
    r = D(n),
    [i, a, o] = c(),
    s = ue(n),
    [l, u] = (0, J.useState)(!1);
  return r
    ? (0, Y.jsxs)(`div`, {
        className: t(Oe, be),
        children: [
          (0, Y.jsx)(`div`, {
            className: Se,
            children: (0, Y.jsx)(ve, { packageID: n }),
          }),
          (0, Y.jsxs)(`div`, {
            className: ye,
            children: [
              (0, Y.jsx)(xe, { packageID: n, bShowCancel: !1 }),
              (0, Y.jsx)(f, {
                onClick: a,
                className: t(De),
                children: p(`#PricingDashboard_CancelPriceProposal`),
              }),
              (0, Y.jsx)(N, {
                active: i,
                children: (0, Y.jsx)(ee, {
                  strTitle: p(`#PricingDashboard_CancelPriceProposal`),
                  strDescription: p(`#Dialog_AreYouSure`),
                  closeModal: o,
                  onOK: async () => {
                    (u(!0), await s(), u(!1), window.location.reload());
                  },
                  children:
                    l &&
                    (0, Y.jsx)(P, { string: p(`#ImageUpload_Processing`) }),
                }),
              }),
            ],
          }),
        ],
      })
    : null;
}
var $ = he();
function Je(e) {
  let { nPackageID: t, appids: n } = e,
    r = E();
  _e(r);
  let i = Ee(),
    a = Number.parseInt(t);
  return (
    v(),
    (0, Y.jsx)(l, {
      children: (0, Y.jsxs)(ge, {
        fnBLocalChangesExist: r,
        fnWarnUser: i,
        children: [
          (0, Y.jsxs)(`div`, {
            className: `adminTwoColCtn`,
            children: [
              (0, Y.jsx)(`div`, {
                className: `adminLeftCol`,
                children: (0, Y.jsx)(`div`, {
                  className: `colSection`,
                  children: (0, Y.jsx)(Ie, {}),
                }),
              }),
              (0, Y.jsx)(`div`, {
                className: `adminRightCol`,
                children: (0, Y.jsx)(`div`, {
                  className: `panel`,
                  children: (0, Y.jsx)(Ke, { nPackageID: a }),
                }),
              }),
            ],
          }),
          (0, Y.jsx)(`div`, {
            className: ``,
            children: (0, Y.jsx)(Ye, {
              nPackageID: a,
              appids: n.map(Number.parseInt),
            }),
          }),
        ],
      }),
    })
  );
}
function Ye(e) {
  let { nPackageID: t, appids: n } = e,
    r = v(),
    {
      rgCurrencyRows: i,
      rgRegionRows: a,
      rgCountryOverrideRows: o,
    } = Fe(r, t, n),
    s = D(t),
    c = !!s,
    l = s?.eState == 4,
    { fnApplyGuidelines: u } = y(O());
  (0, J.useEffect)(() => {
    le([t]);
  }, [t]);
  let d = [
    $.accessor(`nPublishedPrice`, {
      header: p(`#PackagePricing_Col_CurPrice`),
      meta: { cellClassname: (0, Z.default)(Be) },
      size: 120,
      cell: Q,
    }),
    $.accessor(c ? `nProposedPrice` : `strPriceKey`, {
      header: p(
        l ? `#PackagePricing_Col_Approved` : `#PackagePricing_Col_Proposal`,
      ),
      meta: { cellClassname: (0, Z.default)(Ve) },
      size: 280,
      cell: c ? Ue : fe,
    }),
    $.accessor(c ? `nProposedPrice` : `strPriceKey`, {
      id: `nMaxDiscount`,
      header: p(`#PackagePricing_Col_MaxDiscount`),
      meta: {
        cellClassname: (0, Z.default)(He),
        strHeaderTooltip: p(`#PackagePricing_Col_MaxDiscount_ttip`),
      },
      size: 150,
      cell: Ge,
    }),
  ];
  return i.length == 0 || a.length == 0
    ? null
    : (0, Y.jsxs)(Y.Fragment, {
        children: [
          c
            ? (0, Y.jsx)(Y.Fragment, {
                children: (0, Y.jsx)(`div`, {
                  className: `colSection`,
                  children: (0, Y.jsx)(we, { packageID: t }),
                }),
              })
            : (0, Y.jsx)(Y.Fragment, {
                children: (0, Y.jsx)(`div`, {
                  className: `colSection`,
                  children: (0, Y.jsxs)(x, {
                    direction: `row`,
                    gap: `5`,
                    children: [
                      (0, Y.jsx)(ke, {
                        fnConversionMethodSelected: (e) => {
                          u(t, k(t, `USD`), e);
                        },
                      }),
                      (0, Y.jsxs)(x, {
                        direction: `column`,
                        children: [
                          (0, Y.jsx)(S, {
                            size: `3`,
                            children: W.Localize(
                              `#PricingDashboard_Select_Price`,
                            ),
                          }),
                          (0, Y.jsx)(Xe, { usdRow: i[1] }),
                        ],
                      }),
                      (0, Y.jsxs)(x, {
                        direction: `column`,
                        align: `start`,
                        children: [
                          (0, Y.jsxs)(S, {
                            size: `3`,
                            children: [
                              p(
                                `#PricingDashboard_ApplyGuidelinesDialog_Context_Short`,
                              ),
                              (0, Y.jsx)(m, {
                                tooltip: p(
                                  `#PricingDashboard_ApplyGuidelinesDialog_Context`,
                                ),
                              }),
                            ],
                          }),
                          (0, Y.jsx)(Ze, {
                            nPackageID: t,
                            oPricingGuideline: r,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
          (0, Y.jsxs)(`div`, {
            className: `colSection`,
            children: [
              (0, Y.jsx)(U, {
                data: i,
                className: (0, Z.default)(
                  G.DefaultFancyTable,
                  G.NoColumnBorders,
                  H,
                ),
                columns: [
                  $.accessor(`eCurrencyCode`, {
                    header: p(`#PackagePricing_Col_Currency`),
                    size: 200,
                    cell: X,
                  }),
                  ...d,
                ],
                getRowKey: (e, t) => `${t.eCurrencyCode}`,
                nItemHeight: 20,
                stickyHeader: !0,
              }),
              (0, Y.jsx)(U, {
                data: a,
                className: (0, Z.default)(
                  G.DefaultFancyTable,
                  G.NoColumnBorders,
                  H,
                ),
                columns: [
                  $.accessor(`eRegionCode`, {
                    header: p(`#PackagePricing_Col_Region`),
                    size: 200,
                    cell: Ne,
                  }),
                  $.accessor(`eCurrencyCode`, {
                    header: p(`#PackagePricing_Col_Currency`),
                    size: 100,
                    cell: X,
                  }),
                  ...d,
                ],
                getRowKey: (e, t) => `${t.eRegionCode}`,
                nItemHeight: 20,
                stickyHeader: !0,
              }),
              o.length > 0 &&
                (0, Y.jsx)(U, {
                  data: o,
                  className: (0, Z.default)(
                    G.DefaultFancyTable,
                    G.NoColumnBorders,
                    `XslZzcoK48s-`,
                  ),
                  columns: [
                    $.accessor(`strCountryOverride`, {
                      header: p(`#PackagePricing_Col_Country`),
                      size: 200,
                      cell: We,
                    }),
                    $.accessor(`eCurrencyCode`, {
                      header: p(`#PackagePricing_Col_Currency`),
                      size: 100,
                      cell: X,
                    }),
                    ...d,
                  ],
                  getRowKey: (e, t) => `${t.strCountryOverride}`,
                  nItemHeight: 20,
                  stickyHeader: !0,
                }),
              (0, Y.jsx)(Ce, { bReloadPageOnSave: !0 }),
              (0, Y.jsx)(qe, { nPackageID: t }),
            ],
          }),
        ],
      });
}
function Xe(e) {
  let { usdRow: t } = e,
    { fnApplyGuidelines: n } = y(O());
  return (0, Y.jsx)(B, {
    strButton: W.Localize(`#PricingDashboard_Select_Price_button`),
    strTooltip: W.Localize(`#PricingDashboard_Select_Price_button_ttip`),
    fnGetUSDPriceInCents: () => k(t.packageID, `USD`),
    fnOnUpdate: (e) => n(t.packageID, e),
    strDescription: W.Localize(
      `#PricingDashboard_GuidelinesPickerDescription_New`,
    ),
    appids: t.appids,
    nPackageID: t.packageID,
    bCanSetToFree: t.bCanSetToFree,
  });
}
function Ze(e) {
  let { nPackageID: t, oPricingGuideline: n } = e,
    [r, i, a] = c(),
    s = o();
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(ae, {
        onClick: i,
        children: p(`#PricingDashboard_ApplyGuidelinesDialog_Button`),
      }),
      (0, Y.jsx)(N, {
        active: r,
        children: (0, Y.jsx)(Te, {
          closeModal: a,
          fnOnApply: s,
          singlePackage: !0,
        }),
      }),
    ],
  });
}
function Qe(e) {
  return (
    J.use(h()),
    (0, Y.jsx)(ne, {
      children: (0, Y.jsxs)(re, {
        children: [
          (0, Y.jsx)(g, {
            path: Pe.PriceEdit(`:packageid`),
            children: (0, Y.jsx)(pe, {
              config: {
                "packageadmin-price-editor": (e) => (0, Y.jsx)(Je, { ...e }),
              },
            }),
          }),
          (0, Y.jsx)(g, { component: me }),
        ],
      }),
    })
  );
}
export { Qe as default };
