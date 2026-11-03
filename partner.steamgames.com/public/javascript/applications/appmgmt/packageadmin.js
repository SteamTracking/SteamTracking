/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $t as e,
  A as t,
  U as n,
  _t as r,
  kt as i,
  on as a,
} from "./mobx.esm.js?contenthash=BRGZcCup";
import {
  Ht as o,
  Jo as s,
  dn as c,
  lo as l,
  oa as u,
  oo as d,
  qo as f,
  s as p,
} from "./dialogs.js?contenthash=D1pxcxuf";
import { n as m } from "./usedataloader.client.js?contenthash=DAd0LgAa";
import { n as h } from "./long.js?contenthash=DWB27pGN";
import {
  D as ee,
  a as te,
  k as ne,
  r as g,
} from "./react-router.js?contenthash=nQj0_J23";
import {
  i as _,
  n as v,
  r as re,
  t as y,
} from "./pricingguidelineobject.js?contenthash=BkbRq0Li";
import { r as b } from "./modals.js?contenthash=Bi1vin1f";
import { n as x, t as S } from "./flex.js?contenthash=BqvwdiAv";
import { n as ie, t as ae } from "./button.js?contenthash=CU33iYfg";
import { n as C } from "./text.js?contenthash=eLRF4CUL";
import { t as w } from "./heading.js?contenthash=JlFqtEbo";
import { t as T } from "./textlink.js?contenthash=DqM5ftUk";
import {
  B as E,
  O as oe,
  R as D,
  V as se,
  _ as ce,
  a as O,
  d as k,
  g as A,
  m as le,
  p as j,
  q as ue,
  v as M,
  w as de,
  y as N,
} from "./tabulatorutils.js?contenthash=BiwL1JH9";
import { t as P } from "./throbber.js?contenthash=1eooMzHf";
import {
  c as F,
  i as I,
  o as L,
  r as R,
  s as z,
} from "./currencyutils.js?contenthash=BLJDeGzO";
import {
  d as B,
  f as V,
  l as H,
  r as fe,
} from "./pricinggridcell.js?contenthash=LyzAlx0S";
import { t as pe } from "./phpintegration.js?contenthash=CCsRwFZl";
import { t as me } from "./unknownroute.js?contenthash=C2vrZ8Y1";
import { n as he, t as U } from "./fancytable.js?contenthash=BiBqH93f";
import { a as ge, f as _e } from "./profilestore.js?contenthash=3wVpz-0i";
import { t as W } from "./localization3.js?contenthash=B4lvHMmE";
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
} from "./saveprices.js?contenthash=B2VMWVQE";
import { n as G, t as Ae } from "./localization4.js?contenthash=73n-ZBjU";
var K = {};
(K.arabic = () =>
  s(
    () => import(`./currency_arabic.js?contenthash=gFBHoyni`),
    [],
    import.meta.url,
  )),
  (K.brazilian = () =>
    s(
      () => import(`./currency_brazilian.js?contenthash=KjHxyFBf`),
      [],
      import.meta.url,
    )),
  (K.bulgarian = () =>
    s(
      () => import(`./currency_bulgarian.js?contenthash=CmZniUHH`),
      [],
      import.meta.url,
    )),
  (K.czech = () =>
    s(
      () => import(`./currency_czech.js?contenthash=Brld-NkF`),
      [],
      import.meta.url,
    )),
  (K.danish = () =>
    s(
      () => import(`./currency_danish.js?contenthash=Dyd8FMZa`),
      [],
      import.meta.url,
    )),
  (K.dutch = () =>
    s(
      () => import(`./currency_dutch.js?contenthash=jt7JKRbR`),
      [],
      import.meta.url,
    )),
  (K.english = () =>
    s(
      () => import(`./currency_english.js?contenthash=DcNS618d`),
      [],
      import.meta.url,
    )),
  (K.finnish = () =>
    s(
      () => import(`./currency_finnish.js?contenthash=BOsgMjY5`),
      [],
      import.meta.url,
    )),
  (K.french = () =>
    s(
      () => import(`./currency_french.js?contenthash=CWYifI2w`),
      [],
      import.meta.url,
    )),
  (K.german = () =>
    s(
      () => import(`./currency_german.js?contenthash=D8O0Qd5l`),
      [],
      import.meta.url,
    )),
  (K.greek = () =>
    s(
      () => import(`./currency_greek.js?contenthash=C_30d4Wv`),
      [],
      import.meta.url,
    )),
  (K.hungarian = () =>
    s(
      () => import(`./currency_hungarian.js?contenthash=KrE9bPHA`),
      [],
      import.meta.url,
    )),
  (K.indonesian = () =>
    s(
      () => import(`./currency_indonesian.js?contenthash=GLv7lpUi`),
      [],
      import.meta.url,
    )),
  (K.italian = () =>
    s(
      () => import(`./currency_italian.js?contenthash=2ZJWmGPn`),
      [],
      import.meta.url,
    )),
  (K.japanese = () =>
    s(
      () => import(`./currency_japanese.js?contenthash=DVpUjcez`),
      [],
      import.meta.url,
    )),
  (K.koreana = () =>
    s(
      () => import(`./currency_koreana.js?contenthash=CWk_iEjY`),
      [],
      import.meta.url,
    )),
  (K.latam = () =>
    s(
      () => import(`./currency_latam.js?contenthash=Q9Q8vP40`),
      [],
      import.meta.url,
    )),
  (K.malay = () =>
    s(
      () => import(`./currency_malay.js?contenthash=fhaBO-Xv`),
      [],
      import.meta.url,
    )),
  (K.norwegian = () =>
    s(
      () => import(`./currency_norwegian.js?contenthash=Bc0SPDDJ`),
      [],
      import.meta.url,
    )),
  (K.polish = () =>
    s(
      () => import(`./currency_polish.js?contenthash=BOF_IGdx`),
      [],
      import.meta.url,
    )),
  (K.portuguese = () =>
    s(
      () => import(`./currency_portuguese.js?contenthash=DEBVwj_9`),
      [],
      import.meta.url,
    )),
  (K.romanian = () =>
    s(
      () => import(`./currency_romanian.js?contenthash=1c0yX7xS`),
      [],
      import.meta.url,
    )),
  (K.russian = () =>
    s(
      () => import(`./currency_russian.js?contenthash=DcouFg8i`),
      [],
      import.meta.url,
    )),
  (K.sc_schinese = () =>
    s(
      () => import(`./currency_sc_schinese.js?contenthash=-HVyXZH3`),
      [],
      import.meta.url,
    )),
  (K.schinese = () =>
    s(
      () => import(`./currency_schinese.js?contenthash=B6q7gqNk`),
      [],
      import.meta.url,
    )),
  (K.spanish = () =>
    s(
      () => import(`./currency_spanish.js?contenthash=Dg5T0oJY`),
      [],
      import.meta.url,
    )),
  (K.swedish = () =>
    s(
      () => import(`./currency_swedish.js?contenthash=D9qGtxR2`),
      [],
      import.meta.url,
    )),
  (K.tchinese = () =>
    s(
      () => import(`./currency_tchinese.js?contenthash=CqKmq7sE`),
      [],
      import.meta.url,
    )),
  (K.thai = () =>
    s(
      () => import(`./currency_thai.js?contenthash=3CA5Hupg`),
      [],
      import.meta.url,
    )),
  (K.turkish = () =>
    s(
      () => import(`./currency_turkish.js?contenthash=BsgHcKs7`),
      [],
      import.meta.url,
    )),
  (K.ukrainian = () =>
    s(
      () => import(`./currency_ukrainian.js?contenthash=C7AI--qO`),
      [],
      import.meta.url,
    )),
  (K.vietnamese = () =>
    s(
      () => import(`./currency_vietnamese.js?contenthash=CKVM5eDv`),
      [],
      import.meta.url,
    ));
async function je(e) {
  if (K[e]) return await K[e]();
}
var q = ee(je);
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
    children: [n, ` `, (0, Y.jsx)(c, { tooltip: r })],
  });
}
var Pe = { PriceEdit: (e) => `/packages/pricing/${e}` },
  Z = a(f());
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
      let d = ce(n);
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
            nPublishedPrice: N(n, t),
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
              href: t,
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
    : m(e.getValue(), e.row.original.eCurrencyCode);
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
    children: m(n.nProposedPrice, n.eCurrencyCode),
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
    { nPriceInCents: o, nProposedPriceInCents: s } = E(n, r),
    c = _(),
    l = v(),
    u = L(1).toUpperCase(),
    d = j(n, u) || A(n, u) || M(n, u),
    { nGuidelinesLevel: f } = se(l, c, d, a, i),
    p = le(r, o ?? s, f, !0);
  return p == -1 || !p
    ? `--`
    : (0, Y.jsxs)(`span`, { className: t({}), children: [p, ` %`] });
}
function Ke(e) {
  let { nPackageID: t } = e;
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsxs)(S, {
        direction: `column`,
        align: `start`,
        paddingBottom: `4`,
        children: [
          (0, Y.jsx)(ie, {
            href: `${n.PARTNER_BASE_URL}pricing/dashboard/?pn=${t}`,
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
            href: `${n.PARTNER_BASE_URL}doc/store/pricing`,
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
    [i, a, s] = l(),
    c = de(n),
    [d, f] = (0, J.useState)(!1);
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
              (0, Y.jsx)(o, {
                onClick: a,
                className: t(De),
                children: u(`#PricingDashboard_CancelPriceProposal`),
              }),
              (0, Y.jsx)(b, {
                active: i,
                children: (0, Y.jsx)(p, {
                  strTitle: u(`#PricingDashboard_CancelPriceProposal`),
                  strDescription: u(`#Dialog_AreYouSure`),
                  closeModal: s,
                  onOK: async () => {
                    f(!0), await c(), f(!1), window.location.reload();
                  },
                  children:
                    d &&
                    (0, Y.jsx)(P, { string: u(`#ImageUpload_Processing`) }),
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
    r = oe();
  _e(r);
  let i = Ee(),
    a = Number.parseInt(t);
  return (
    v(),
    (0, Y.jsx)(h, {
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
    l = !!s,
    d = s?.eState == 4,
    { fnApplyGuidelines: f } = y(O());
  (0, J.useEffect)(() => {
    ue([t]);
  }, [t]);
  let p = [
    $.accessor(`nPublishedPrice`, {
      header: u(`#PackagePricing_Col_CurPrice`),
      meta: { cellClassname: (0, Z.default)(Be) },
      size: 120,
      cell: Q,
    }),
    $.accessor(l ? `nProposedPrice` : `strPriceKey`, {
      header: u(
        d ? `#PackagePricing_Col_Approved` : `#PackagePricing_Col_Proposal`,
      ),
      meta: { cellClassname: (0, Z.default)(Ve) },
      size: 280,
      cell: l ? Ue : fe,
    }),
    $.accessor(l ? `nProposedPrice` : `strPriceKey`, {
      id: `nMaxDiscount`,
      header: u(`#PackagePricing_Col_MaxDiscount`),
      meta: {
        cellClassname: (0, Z.default)(He),
        strHeaderTooltip: u(`#PackagePricing_Col_MaxDiscount_ttip`),
      },
      size: 150,
      cell: Ge,
    }),
  ];
  return i.length == 0 || a.length == 0
    ? null
    : (0, Y.jsxs)(Y.Fragment, {
        children: [
          l
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
                          f(t, k(t, `USD`), e);
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
                              u(
                                `#PricingDashboard_ApplyGuidelinesDialog_Context_Short`,
                              ),
                              (0, Y.jsx)(c, {
                                tooltip: u(
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
                    header: u(`#PackagePricing_Col_Currency`),
                    size: 200,
                    cell: X,
                  }),
                  ...p,
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
                    header: u(`#PackagePricing_Col_Region`),
                    size: 200,
                    cell: Ne,
                  }),
                  $.accessor(`eCurrencyCode`, {
                    header: u(`#PackagePricing_Col_Currency`),
                    size: 100,
                    cell: X,
                  }),
                  ...p,
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
                      header: u(`#PackagePricing_Col_Country`),
                      size: 200,
                      cell: We,
                    }),
                    $.accessor(`eCurrencyCode`, {
                      header: u(`#PackagePricing_Col_Currency`),
                      size: 100,
                      cell: X,
                    }),
                    ...p,
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
    [r, i, a] = l(),
    o = d();
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(ae, {
        onClick: i,
        children: u(`#PricingDashboard_ApplyGuidelinesDialog_Button`),
      }),
      (0, Y.jsx)(b, {
        active: r,
        children: (0, Y.jsx)(Te, {
          closeModal: a,
          fnOnApply: o,
          singlePackage: !0,
        }),
      }),
    ],
  });
}
function Qe(e) {
  return (
    J.use(ne()),
    (0, Y.jsx)(te, {
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
