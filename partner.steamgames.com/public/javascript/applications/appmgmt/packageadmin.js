/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  W as t,
  en as n,
  j as r,
  sn as i,
  vt as a,
} from "./chunk~de7f2df91c.js";
import { I as o, N as s, Pt as c, r as l } from "./chunk~25a6634263.js";
import { n as u } from "./chunk~68b7e78d68.js";
import {
  Wt as d,
  Ya as f,
  l as p,
  pn as m,
  ua as h,
} from "./chunk~1fa4b8f2ff.js";
import { E as ee, O as te, a as g, r as _ } from "./chunk~44f252525d.js";
import { i as v, n as y, r as ne, t as b } from "./chunk~fa5480ab25.js";
import { n as x, t as S } from "./chunk~971d501580.js";
import { n as re, t as ie } from "./chunk~baca8b8889.js";
import { n as C } from "./chunk~a58194c5d9.js";
import { t as w } from "./chunk~e53a8c8667.js";
import { t as T } from "./chunk~cfd048ddd7.js";
import {
  B as ae,
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
} from "./chunk~360b8fa68b.js";
import { r as N } from "./chunk~8681f5c764.js";
import { t as P } from "./chunk~eefd71512b.js";
import { c as F, i as I, o as L, r as R, s as z } from "./chunk~38a44beba7.js";
import { d as B, f as V, l as H, r as fe } from "./chunk~55bac8fc8b.js";
import { t as pe } from "./chunk~234d4d786c.js";
import { t as me } from "./chunk~58c6c52d52.js";
import { n as he, t as U } from "./chunk~8c0cff8a60.js";
import { a as ge, f as _e } from "./chunk~cb393b4e7b.js";
import { t as W } from "./chunk~74d773532d.js";
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
} from "./chunk~91d759d956.js";
import { n as G, t as Ae } from "./chunk~44547eeba5.js";
var K = {};
((K.arabic = () =>
  f(() => import(`./chunk~72e54bbf6d.js`), [], import.meta.url)),
  (K.brazilian = () =>
    f(() => import(`./chunk~7d38a6f239.js`), [], import.meta.url)),
  (K.bulgarian = () =>
    f(() => import(`./chunk~0cb5d08047.js`), [], import.meta.url)),
  (K.czech = () =>
    f(() => import(`./chunk~d3bc43fe06.js`), [], import.meta.url)),
  (K.danish = () =>
    f(() => import(`./chunk~08b93d9833.js`), [], import.meta.url)),
  (K.dutch = () =>
    f(() => import(`./chunk~3277a723d7.js`), [], import.meta.url)),
  (K.english = () =>
    f(() => import(`./chunk~eef15573d1.js`), [], import.meta.url)),
  (K.finnish = () =>
    f(() => import(`./chunk~44b233b9b6.js`), [], import.meta.url)),
  (K.french = () =>
    f(() => import(`./chunk~48e7fbf52b.js`), [], import.meta.url)),
  (K.german = () =>
    f(() => import(`./chunk~a6a4d58219.js`), [], import.meta.url)),
  (K.greek = () =>
    f(() => import(`./chunk~6bf37ffed6.js`), [], import.meta.url)),
  (K.hungarian = () =>
    f(() => import(`./chunk~17f36570c2.js`), [], import.meta.url)),
  (K.indonesian = () =>
    f(() => import(`./chunk~3f3d307b96.js`), [], import.meta.url)),
  (K.italian = () =>
    f(() => import(`./chunk~6b64079be4.js`), [], import.meta.url)),
  (K.japanese = () =>
    f(() => import(`./chunk~d7ea1f237e.js`), [], import.meta.url)),
  (K.koreana = () =>
    f(() => import(`./chunk~4d1bebe549.js`), [], import.meta.url)),
  (K.latam = () =>
    f(() => import(`./chunk~9ccda940a0.js`), [], import.meta.url)),
  (K.malay = () =>
    f(() => import(`./chunk~07f5a4f181.js`), [], import.meta.url)),
  (K.norwegian = () =>
    f(() => import(`./chunk~e066ec9520.js`), [], import.meta.url)),
  (K.polish = () =>
    f(() => import(`./chunk~58f74549dd.js`), [], import.meta.url)),
  (K.portuguese = () =>
    f(() => import(`./chunk~67ed6ae02b.js`), [], import.meta.url)),
  (K.romanian = () =>
    f(() => import(`./chunk~3c16b9d264.js`), [], import.meta.url)),
  (K.russian = () =>
    f(() => import(`./chunk~b02253d200.js`), [], import.meta.url)),
  (K.sc_schinese = () =>
    f(() => import(`./chunk~d151670123.js`), [], import.meta.url)),
  (K.schinese = () =>
    f(() => import(`./chunk~a1d0326e7f.js`), [], import.meta.url)),
  (K.spanish = () =>
    f(() => import(`./chunk~16a07847ae.js`), [], import.meta.url)),
  (K.swedish = () =>
    f(() => import(`./chunk~357b1cfff4.js`), [], import.meta.url)),
  (K.tchinese = () =>
    f(() => import(`./chunk~5ef106b2ab.js`), [], import.meta.url)),
  (K.thai = () =>
    f(() => import(`./chunk~8ccfdb83ff.js`), [], import.meta.url)),
  (K.turkish = () =>
    f(() => import(`./chunk~cd7b153d6d.js`), [], import.meta.url)),
  (K.ukrainian = () =>
    f(() => import(`./chunk~7452856e2a.js`), [], import.meta.url)),
  (K.vietnamese = () =>
    f(() => import(`./chunk~1ae8105024.js`), [], import.meta.url)));
async function je(e) {
  if (K[e]) return await K[e]();
}
var q = ee(je);
function Me(e) {
  return q.Localize(`#CurrencyCodeDescription_${I(e)}`);
}
var J = i(e(), 1),
  Y = a();
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
  Z = i(c());
function Fe(e, t, r) {
  let i = v(),
    a = V();
  return (0, J.useMemo)(() => {
    let o = [],
      s = [],
      c = [];
    if (e) {
      let l = L(1).toUpperCase(),
        u = j(t, l) || A(t, l) || M(t, l);
      for (let n = 1; n < 48; ++n) {
        if (!e.BIsSupportCurrencyAndOrRegion(n)) continue;
        let s = L(n).toUpperCase(),
          c = M(t, s),
          l = A(t, s),
          d = j(t, s),
          f = e.GetScaledRecommendedPrice(u, n, void 0, i).price;
        o.push({
          packageID: t,
          strPriceKey: s,
          eCurrencyCode: n,
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
      for (let n = 1; n < 5; ++n) {
        if (!e.BIsSupportCurrencyAndOrRegion(1, n)) continue;
        let a = L(1, n).toUpperCase(),
          o = M(t, a),
          c = A(t, a),
          l = j(t, a),
          d = e.GetScaledRecommendedPrice(u, 1, n, i).price;
        s.push({
          packageID: t,
          strPriceKey: a,
          eCurrencyCode: 1,
          eRegionCode: n,
          strCountryOverride: void 0,
          nPublishedPrice: o,
          nProposedPrice: c,
          nLocalPrice: l,
          nSuggestedPrice: d,
          bCanSetToFree: !1,
          appids: r,
        });
      }
      let d = se(t);
      d.length > 0 &&
        d.forEach((e) => {
          let { eCurrencyCode: i, strCountryCode: a } = F(e),
            o = R(a);
          n(
            i == o,
            `Unexpected currency ${i} for country ${a} when expecting ${o} `,
          );
          let s = A(t, e);
          c.push({
            packageID: t,
            strPriceKey: e,
            eCurrencyCode: i,
            eRegionCode: void 0,
            strCountryOverride: a,
            nPublishedPrice: de(t, e),
            nProposedPrice: s,
            nLocalPrice: j(t, e),
            nSuggestedPrice: void 0,
            bCanSetToFree: !1,
            appids: r,
          });
        });
    }
    return { rgCurrencyRows: o, rgRegionRows: s, rgCountryOverrideRows: c };
  }, [e, t, a, i, r]);
}
function Ie(e) {
  let n = `${t.PARTNER_BASE_URL}doc/finance/taxfaq`;
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsxs)(x, {
        paddingBottom: `4`,
        children: [
          (0, Y.jsx)(C, {
            as: `p`,
            size: `4`,
            color: `text-body`,
            contrast: `subtitle`,
            children: W.Localize(`#SinglePricingPackage_Intro_1`),
          }),
          (0, Y.jsx)(C, {
            as: `p`,
            size: `4`,
            color: `text-body`,
            contrast: `subtitle`,
            children: W.Localize(`#SinglePricingPackage_Intro_2`),
          }),
          (0, Y.jsx)(C, {
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
      (0, Y.jsx)(x, {
        paddingBottom: `4`,
        children: (0, Y.jsx)(C, {
          children: W.LocalizeReact(
            `#SinglePricingPackage_Desc_2`,
            (0, Y.jsx)(T, {
              href: n,
              children: W.LocalizeReact(`#SinglePricingPackage_Desc_2_Link`),
            }),
          ),
        }),
      }),
      (0, Y.jsx)(x, {
        children: (0, Y.jsx)(C, {
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
  let t = e.row.original;
  if (t.nProposedPrice == -1 || !t.nProposedPrice) return `--`;
  let n = !t.nPublishedPrice;
  return (0, Y.jsx)(`span`, {
    className: r({
      [Le]: n,
      [Re]: !n && t.nProposedPrice > t.nPublishedPrice,
      [ze]: !n && t.nProposedPrice < t.nPublishedPrice,
    }),
    children: u(t.nProposedPrice, t.eCurrencyCode),
  });
}
function We(e) {
  return Ae(e.row.original.strCountryOverride);
}
function Ge(e) {
  let {
      packageID: t,
      strPriceKey: n,
      eRegionCode: i,
      eCurrencyCode: a,
    } = e.row.original,
    { nPriceInCents: o, nProposedPriceInCents: s } = ae(t, n),
    c = v(),
    l = y(),
    u = L(1).toUpperCase(),
    d = j(t, u) || A(t, u) || M(t, u),
    { nGuidelinesLevel: f } = oe(l, c, d, a, i),
    p = ce(n, o ?? s, f, !0);
  return p == -1 || !p
    ? `--`
    : (0, Y.jsxs)(`span`, { className: r({}), children: [p, ` %`] });
}
function Ke(e) {
  let { nPackageID: n } = e;
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsxs)(S, {
        direction: `column`,
        align: `start`,
        paddingBottom: `4`,
        children: [
          (0, Y.jsx)(re, {
            href: `${t.PARTNER_BASE_URL}pricing/dashboard/?pn=${n}`,
            children: W.Localize(`#SinglePackagePricing_Right_Edit`),
          }),
          (0, Y.jsx)(C, {
            children: W.Localize(`#SinglePackagePricing_Right_Edit_desc`),
          }),
        ],
      }),
      (0, Y.jsxs)(S, {
        direction: `column`,
        paddingBottom: `4`,
        children: [
          (0, Y.jsx)(w, {
            size: `7`,
            children: W.Localize(`#SinglePackagePricing_Right_Help_Title`),
          }),
          (0, Y.jsx)(C, {
            children: W.Localize(`#SinglePackagePricing_Right_Help_Desc`),
          }),
          (0, Y.jsx)(T, {
            href: `${t.PARTNER_BASE_URL}doc/store/pricing`,
            children: W.Localize(`#SinglePackagePricing_Right_Link`),
          }),
        ],
      }),
      (0, Y.jsxs)(S, {
        direction: `column`,
        children: [
          (0, Y.jsx)(w, {
            size: `7`,
            children: W.Localize(`#SinglePackagePricing_Right_FAQ`),
          }),
          (0, Y.jsxs)(x, {
            children: [
              (0, Y.jsx)(C, {
                size: `4`,
                weight: `medium`,
                children: W.Localize(
                  `#SinglePackagePricing_Right_FAQ_switching`,
                ),
              }),
              (0, Y.jsx)(`br`, {}),
              (0, Y.jsx)(C, {
                children: W.LocalizeReact(
                  `#SinglePackagePricing_Right_FAQ_switching_answer`,
                  (0, Y.jsx)(T, {
                    href: `${t.PARTNER_BASE_URL}wizard/HelpWithPublishing?issueid=915`,
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
  let { nPackageID: t } = e,
    n = D(t),
    [i, a, s] = o(),
    c = ue(t),
    [l, u] = (0, J.useState)(!1);
  return n
    ? (0, Y.jsxs)(`div`, {
        className: r(Oe, be),
        children: [
          (0, Y.jsx)(`div`, {
            className: Se,
            children: (0, Y.jsx)(ve, { packageID: t }),
          }),
          (0, Y.jsxs)(`div`, {
            className: ye,
            children: [
              (0, Y.jsx)(xe, { packageID: t, bShowCancel: !1 }),
              (0, Y.jsx)(d, {
                onClick: a,
                className: r(De),
                children: h(`#PricingDashboard_CancelPriceProposal`),
              }),
              (0, Y.jsx)(N, {
                active: i,
                children: (0, Y.jsx)(p, {
                  strTitle: h(`#PricingDashboard_CancelPriceProposal`),
                  strDescription: h(`#Dialog_AreYouSure`),
                  closeModal: s,
                  onOK: async () => {
                    (u(!0), await c(), u(!1), window.location.reload());
                  },
                  children:
                    l &&
                    (0, Y.jsx)(P, { string: h(`#ImageUpload_Processing`) }),
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
    y(),
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
    r = y(),
    {
      rgCurrencyRows: i,
      rgRegionRows: a,
      rgCountryOverrideRows: o,
    } = Fe(r, t, n),
    s = D(t),
    c = !!s,
    l = s?.eState == 4,
    { fnApplyGuidelines: u } = b(O());
  (0, J.useEffect)(() => {
    le([t]);
  }, [t]);
  let d = [
    $.accessor(`nPublishedPrice`, {
      header: h(`#PackagePricing_Col_CurPrice`),
      meta: { cellClassname: (0, Z.default)(Be) },
      size: 120,
      cell: Q,
    }),
    $.accessor(c ? `nProposedPrice` : `strPriceKey`, {
      header: h(
        l ? `#PackagePricing_Col_Approved` : `#PackagePricing_Col_Proposal`,
      ),
      meta: { cellClassname: (0, Z.default)(Ve) },
      size: 280,
      cell: c ? Ue : fe,
    }),
    $.accessor(c ? `nProposedPrice` : `strPriceKey`, {
      id: `nMaxDiscount`,
      header: h(`#PackagePricing_Col_MaxDiscount`),
      meta: {
        cellClassname: (0, Z.default)(He),
        strHeaderTooltip: h(`#PackagePricing_Col_MaxDiscount_ttip`),
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
                  children: (0, Y.jsxs)(S, {
                    direction: `row`,
                    gap: `5`,
                    children: [
                      (0, Y.jsx)(ke, {
                        fnConversionMethodSelected: (e) => {
                          u(t, k(t, `USD`), e);
                        },
                      }),
                      (0, Y.jsxs)(S, {
                        direction: `column`,
                        children: [
                          (0, Y.jsx)(C, {
                            size: `3`,
                            children: W.Localize(
                              `#PricingDashboard_Select_Price`,
                            ),
                          }),
                          (0, Y.jsx)(Xe, { usdRow: i[1] }),
                        ],
                      }),
                      (0, Y.jsxs)(S, {
                        direction: `column`,
                        align: `start`,
                        children: [
                          (0, Y.jsxs)(C, {
                            size: `3`,
                            children: [
                              h(
                                `#PricingDashboard_ApplyGuidelinesDialog_Context_Short`,
                              ),
                              (0, Y.jsx)(m, {
                                tooltip: h(
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
                    header: h(`#PackagePricing_Col_Currency`),
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
                    header: h(`#PackagePricing_Col_Region`),
                    size: 200,
                    cell: Ne,
                  }),
                  $.accessor(`eCurrencyCode`, {
                    header: h(`#PackagePricing_Col_Currency`),
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
                      header: h(`#PackagePricing_Col_Country`),
                      size: 200,
                      cell: We,
                    }),
                    $.accessor(`eCurrencyCode`, {
                      header: h(`#PackagePricing_Col_Currency`),
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
    { fnApplyGuidelines: n } = b(O());
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
    [r, i, a] = o(),
    c = s();
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(ie, {
        onClick: i,
        children: h(`#PricingDashboard_ApplyGuidelinesDialog_Button`),
      }),
      (0, Y.jsx)(N, {
        active: r,
        children: (0, Y.jsx)(Te, {
          closeModal: a,
          fnOnApply: c,
          singlePackage: !0,
        }),
      }),
    ],
  });
}
function Qe(e) {
  return (
    J.use(te()),
    (0, Y.jsx)(g, {
      children: (0, Y.jsxs)(ne, {
        children: [
          (0, Y.jsx)(_, {
            path: Pe.PriceEdit(`:packageid`),
            children: (0, Y.jsx)(pe, {
              config: {
                "packageadmin-price-editor": (e) => (0, Y.jsx)(Je, { ...e }),
              },
            }),
          }),
          (0, Y.jsx)(_, { component: me }),
        ],
      }),
    })
  );
}
export { Qe as default };
