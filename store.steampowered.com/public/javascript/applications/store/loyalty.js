/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  At as t,
  F as n,
  L as r,
  Lt as i,
  P as a,
  Pt as o,
  ft as s,
  kt as ee,
  l as te,
  st as ne,
  tt as re,
} from "./libraries.js";
import {
  A as ie,
  C as c,
  D as ae,
  E as l,
  M as u,
  N as oe,
  O as se,
  P as ce,
  _ as le,
  a as ue,
  c as de,
  g as d,
  h as fe,
  i as pe,
  j as me,
  k as f,
  m as he,
  n as ge,
  r as _e,
  s as ve,
  t as ye,
  v as be,
  w as xe,
  x as Se,
} from "./rewardsshop.js";
import { t as Ce } from "./appinfostore.js";
import {
  $a as we,
  $x as p,
  By as Te,
  Cb as m,
  Cc as h,
  Ey as Ee,
  Jy as De,
  Lu as g,
  Ly as Oe,
  Nb as ke,
  Oy as Ae,
  Qx as _,
  Ra as v,
  SS as je,
  Uy as Me,
  Wc as Ne,
  Wy as y,
  Xx as b,
  Yb as Pe,
  Yy as x,
  Zi as Fe,
  Zx as S,
  _u as Ie,
  bS as C,
  bu as Le,
  eS as w,
  eo as Re,
  gx as T,
  hx as E,
  ix as D,
  nS as O,
  ox as ze,
  rS as k,
  tS as A,
  to as Be,
  xr as Ve,
  za as He,
} from "./main.js";
import { t as Ue } from "./steamavatar.js";
import { a as j, o as We, t as M } from "./layout.js";
var N = e(i());
function Ge(e) {
  return typeof GStoreItemData > `u`
    ? (console.error(`Unable to find GStoreItemData`), null)
    : GStoreItemData.fnFormatCurrency(e);
}
var Ke = new URL(
    `../../../images/applications/store/game_tiles.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  qe = new URL(
    `../../../images/applications/store/float.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Je = new URL(
    `../../../images/applications/store/Entering_vr.gif?v=CYKO1bep`,
    import.meta.url,
  ).href,
  Ye = new URL(
    `../../../images/applications/store/bonemetal_224px.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Xe = new URL(
    `../../../images/applications/store/header_image.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Ze = new URL(
    `../../../images/applications/store/award_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Qe = new URL(
    `../../../images/applications/store/beautiful_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  $e = new URL(
    `../../../images/applications/store/crown_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  et = new URL(
    `../../../images/applications/store/fire_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  tt = new URL(
    `../../../images/applications/store/funny_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  nt = new URL(
    `../../../images/applications/store/hundo_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  rt = new URL(
    `../../../images/applications/store/life_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  it = new URL(
    `../../../images/applications/store/perfect_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  at = new URL(
    `../../../images/applications/store/plus_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  ot = new URL(
    `../../../images/applications/store/smart_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  st = new URL(
    `../../../images/applications/store/treasure_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  ct = new URL(
    `../../../images/applications/store/wholesome_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  lt = `T0ZVj-qBX-Q-`,
  ut = `g2HRkHxGpU8-`,
  P = `_7mLpLVp63UA-`,
  dt = `xhebd4mkSB8-`,
  ft = `UQSnPv-1FwI-`,
  pt = `tMpqxBQst-o-`,
  mt = `o8gkSlk3zsY-`,
  ht = `kY5MK0ENRFQ-`,
  F = `Jofbiq39q78-`,
  gt = `g5G4XG-6oRw-`,
  _t = `M-L0TSOzjRo-`,
  vt = `VdllGvB-1ik-`,
  I = `LruDduCdrIE-`,
  L = `Djto0ev0oVg-`,
  yt = `_0xeBAaTPgvw-`,
  R = `v2o2-0PfeII-`,
  z = `-PJVtiVarKU-`,
  bt = `QUFx0RuDIhY-`,
  B = `B03HBRJnuX8-`,
  V = `NNBkgM3NYsc-`,
  H = `D6hKTWRjFE0-`,
  U = `sqmw1NuBHIg-`,
  W = `DcNiZXDf28w-`,
  G = `bFQGOnRvaT0-`,
  K = `fVTaguQEiwQ-`,
  q = `a4d2KJgPZwY-`,
  xt = `f1AqH1bh9Ws-`,
  St = `saHNIRov1Co-`,
  Ct = `WnxQAXQcmOA-`,
  wt = `_9OftyXt6gnU-`,
  Tt = `xhu-lXyR1ks-`,
  Et = `gAZILs2qO8o-`,
  Dt = `bveQKNyBoXY-`,
  Ot = `_9nQSX1RcX6k-`,
  kt = `N4CcYsJ2Mzw-`,
  At = `d8WFjt3OwTk-`,
  jt = `QmvwfMD-L9Y-`,
  Mt = `nvBBELch7DI-`,
  Nt = `i4tGfESae2o-`,
  Pt = `zV3i2p2jeSk-`,
  Ft = `_7W3qkYR1hOs-`,
  It = `BLVTy-pkD8I-`,
  J = s(),
  Y = (e) => {
    let { children: t, iconComponent: n, descCallout: r } = e,
      i = n,
      a = r;
    return (0, J.jsxs)(`div`, {
      className: kt,
      children: [
        (0, J.jsx)(`div`, {
          className: At,
          children: (0, J.jsx)(i, { className: jt }),
        }),
        (0, J.jsxs)(`div`, { className: Mt, children: [` `, y(a), ` `] }),
      ],
    });
  },
  Lt = (e) =>
    (0, J.jsxs)(M, {
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      paddingTop: `xlarge`,
      className: P,
      children: [
        (0, J.jsx)(`div`, {
          className: ft,
          children: y(`#HowItWorks_SteamPoints`),
        }),
        (0, J.jsx)(`div`, {
          className: pt,
          children: y(`#HowItWorks_SteamPoints_Desc1`),
        }),
        (0, J.jsx)(`img`, { src: Xe, className: dt }),
        (0, J.jsx)(`div`, {
          className: pt,
          children: y(`#HowItWorks_SteamPoints_Desc2`),
        }),
      ],
    }),
  Rt = (e) => {
    let t = x(
      `#HowItWorks_Conversion`,
      (0, J.jsx)(`span`, { children: Fe(e.numPoints) }),
      (0, J.jsx)(`span`, { children: Ge(e.dollarConversion) }),
    );
    return (0, J.jsx)(j, {
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `center`,
      paddingTop: `medium`,
      className: P,
      focusable: !0,
      noFocusRing: !0,
      children: (0, J.jsxs)(`div`, {
        className: h(gt),
        children: [
          (0, J.jsx)(`div`, { className: _t, children: t }),
          (0, J.jsx)(`div`, {
            className: F,
            children: y(`#HowItWorks_How_Desc`),
          }),
        ],
      }),
    });
  },
  zt = (e) => {
    let t = x(
      `#ShopName`,
      (0, J.jsx)(`span`, { children: y(`#ShopNamePre`) }),
      y(`#ShopNamePost`),
    );
    return (0, J.jsxs)(M, {
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      paddingTop: `xxlarge`,
      children: [
        (0, J.jsxs)(j, {
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `center`,
          className: vt,
          focusable: !0,
          noFocusRing: !0,
          children: [
            (0, J.jsx)(c, { className: h(I, B) }),
            (0, J.jsx)(v, { className: h(I, V) }),
            (0, J.jsx)(He, { className: h(I, H) }),
            (0, J.jsx)(l, { className: h(I, U) }),
            (0, J.jsx)(Be, { className: h(I, W) }),
            (0, J.jsx)(we, { className: h(I, G) }),
            (0, J.jsx)(Re, { className: h(I, K) }),
            (0, J.jsx)(f, { className: h(I, q) }),
            (0, J.jsx)(c, { className: h(I, B) }),
            (0, J.jsx)(v, { className: h(I, V) }),
            (0, J.jsx)(He, { className: h(I, H) }),
            (0, J.jsx)(l, { className: h(I, U) }),
            (0, J.jsx)(Be, { className: h(I, W) }),
            (0, J.jsx)(we, { className: h(I, G) }),
            (0, J.jsx)(Re, { className: h(I, K) }),
            (0, J.jsx)(f, { className: h(I, q) }),
            (0, J.jsx)(c, { className: h(I, B) }),
            (0, J.jsx)(v, { className: h(I, V) }),
            (0, J.jsx)(He, { className: h(I, H) }),
            (0, J.jsx)(l, { className: h(I, U) }),
            (0, J.jsx)(Be, { className: h(I, W) }),
            (0, J.jsx)(we, { className: h(I, G) }),
            (0, J.jsx)(Re, { className: h(I, K) }),
            (0, J.jsx)(f, { className: h(I, q) }),
            (0, J.jsx)(c, { className: h(I, B) }),
          ],
        }),
        (0, J.jsxs)(M, {
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          paddingTop: `large`,
          className: P,
          children: [
            (0, J.jsx)(`div`, { className: lt, children: t }),
            (0, J.jsx)(`div`, {
              className: F,
              children: y(`#HowItWorks_UsePoints_Desc1`),
            }),
            (0, J.jsxs)(j, {
              display: `flex`,
              flexDirection: `column`,
              paddingTop: `large`,
              focusable: !0,
              noFocusRing: !0,
              children: [
                (0, J.jsx)(Y, {
                  iconComponent: ae,
                  descCallout: `#HowItWorks_DoNotExpire`,
                }),
                (0, J.jsx)(Y, {
                  iconComponent: xe,
                  descCallout: `#HowItWorks_Permanent`,
                }),
                (0, J.jsx)(Y, {
                  iconComponent: se,
                  descCallout: `#HowItWorks_Marketable`,
                }),
              ],
            }),
            (0, J.jsxs)(j, {
              className: St,
              focusable: !0,
              noFocusRing: !0,
              children: [
                (0, J.jsx)(`img`, { className: Ct, src: qe }),
                (0, J.jsx)(`img`, { className: wt, src: pe }),
                (0, J.jsxs)(`div`, {
                  className: void 0,
                  children: [
                    (0, J.jsx)(`img`, { className: Et, src: Ye }),
                    (0, J.jsx)(`img`, { className: Dt, src: Je }),
                  ],
                }),
                (0, J.jsx)(`img`, { className: Tt, src: _e }),
                (0, J.jsx)(`img`, { className: Ot, src: ge }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Bt = () => {
    let e = g.LoyaltyByGame();
    return (0, J.jsx)(`div`, {
      className: mt,
      style: { backgroundImage: `url(${Ke})` },
      children: (0, J.jsxs)(M, {
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        paddingRight: `xlarge`,
        paddingLeft: `xlarge`,
        paddingBottom: `xxlarge`,
        children: [
          (0, J.jsx)(f, { className: xt }),
          (0, J.jsx)(Ie, {
            to: e,
            children: (0, J.jsx)(`div`, {
              className: ht,
              children: y(`#HowItWorks_YourGames`),
            }),
          }),
          (0, J.jsx)(`div`, {
            className: F,
            children: y(`#HowItWorks_YourGames_Desc1`),
          }),
          (0, J.jsx)(j, {
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: `center`,
            paddingTop: `large`,
            focusable: !0,
            noFocusRing: !0,
            children: (0, J.jsx)(Y, {
              iconComponent: se,
              descCallout: `#HowItWorks_YourGames_TradingCards`,
            }),
          }),
        ],
      }),
    });
  },
  Vt = te(() => {
    let e = u.Get().GetCommunityAwardPointsTransferred(),
      t = D.STORE_BASE_URL + `labs/trendingreviews/`,
      n = D.COMMUNITY_BASE_URL + `?subsection=workshop`;
    return (0, J.jsxs)(M, {
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      paddingTop: `xxlarge`,
      children: [
        (0, J.jsxs)(j, {
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `center`,
          className: vt,
          focusable: !0,
          noFocusRing: !0,
          children: [
            (0, J.jsx)(`img`, { src: Ze, className: L }),
            (0, J.jsx)(`img`, { src: Qe, className: L }),
            (0, J.jsx)(`img`, { src: $e, className: L }),
            (0, J.jsx)(`img`, { src: et, className: L }),
            (0, J.jsx)(`img`, { src: tt, className: L }),
            (0, J.jsx)(`img`, { src: nt, className: L }),
            (0, J.jsx)(`img`, { src: rt, className: L }),
            (0, J.jsx)(`img`, { src: it, className: L }),
            (0, J.jsx)(`img`, { src: at, className: L }),
            (0, J.jsx)(`img`, { src: ot, className: L }),
            (0, J.jsx)(`img`, { src: st, className: L }),
            (0, J.jsx)(`img`, { src: ct, className: L }),
          ],
        }),
        (0, J.jsxs)(j, {
          id: `CommunityAwards`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          paddingTop: `large`,
          className: P,
          focusable: !0,
          noFocusRing: !0,
          children: [
            (0, J.jsx)(`div`, {
              className: lt,
              children: y(`#HowItWorks_ReviewAwards`),
            }),
            (0, J.jsx)(`div`, {
              className: F,
              children: y(`#HowItWorks_ReviewAwardsWinter_Desc`, e),
            }),
            (0, J.jsx)(`img`, {
              alt: y(`#HowItWorks_ReviewAwards`),
              src:
                D.MEDIA_CDN_URL + `store/rewards/howtoawards/${D.LANGUAGE}.png`,
              className: yt,
            }),
          ],
        }),
        (0, J.jsxs)(j, {
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          paddingTop: `large`,
          className: P,
          focusable: !0,
          noFocusRing: !0,
          children: [
            (0, J.jsxs)(M, {
              display: `flex`,
              flexDirection: `row`,
              alignItems: `center`,
              justifyContent: `center`,
              children: [
                (0, J.jsx)(`img`, { src: et, className: R }),
                (0, J.jsxs)(M, {
                  display: `flex`,
                  flexDirection: `column`,
                  children: [
                    (0, J.jsx)(`div`, {
                      className: h(F, z),
                      children: y(`#HowItWorks_AwardsReviews`, e),
                    }),
                    (0, J.jsx)(`a`, {
                      href: t,
                      children: (0, J.jsx)(`div`, {
                        className: bt,
                        children: y(`#HowItWorks_AwardsReviewsLink`),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, J.jsxs)(M, {
              display: `flex`,
              flexDirection: `row`,
              alignItems: `center`,
              justifyContent: `center`,
              paddingTop: `large`,
              children: [
                (0, J.jsx)(`img`, { src: $e, className: R }),
                (0, J.jsxs)(M, {
                  display: `flex`,
                  flexDirection: `column`,
                  children: [
                    (0, J.jsx)(`div`, {
                      className: h(F, z),
                      children: y(`#HowItWorks_AwardsUgc`, e),
                    }),
                    (0, J.jsx)(`a`, {
                      href: n,
                      children: (0, J.jsx)(`div`, {
                        className: bt,
                        children: y(`#HowItWorks_AwardsUgcLink`),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, J.jsxs)(M, {
              display: `flex`,
              flexDirection: `row`,
              alignItems: `center`,
              justifyContent: `center`,
              paddingTop: `large`,
              children: [
                (0, J.jsx)(`img`, { src: Qe, className: R }),
                (0, J.jsx)(M, {
                  display: `flex`,
                  flexDirection: `column`,
                  children: (0, J.jsx)(`div`, {
                    className: h(F, z),
                    children: y(`#HowItWorks_AwardsProfile`, e),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  });
function Ht() {
  let e = C(D.EREALM);
  return [
    {
      question: `#Faq_GetPoints_Q`,
      answer: [`#Faq_GetPoints_A`, `#Faq_GetPoints_A1`],
    },
    { question: `#Faq_PointsExpire_Q`, answer: `#Faq_PointsExpire_A` },
    { question: `#Faq_Limits_Q`, answer: `#Faq_Limits_A` },
    { question: `#Faq_Trade_Q`, answer: `#Faq_Trade_A` },
    { question: `#Faq_TradingCards_Q`, answer: `#Faq_TradingCards_A` },
    { question: `#Faq_Refund_Q`, answer: `#Faq_Refund_A` },
    !e && { question: `#Faq_Lunar_Q`, answer: `#Faq_Lunar_A` },
    !e && {
      question: `#Faq_WhatElse_Q`,
      answer: [`#Faq_WhatElse_A`, `#Faq_WhatElse_A1`, `#Faq_WhatElse_A2`],
    },
    !e && { question: `#Faq_SortOrder_Q`, answer: `#Faq_SortOrder_A` },
  ].filter(Boolean);
}
var Ut = () => {
    let e = Ht();
    return (0, J.jsx)(M, {
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `center`,
      paddingTop: `xxlarge`,
      className: Nt,
      children: (0, J.jsxs)(M, {
        display: `flex`,
        flexDirection: `column`,
        children: [
          (0, J.jsx)(`div`, { className: Pt, children: y(`#Faq_Title`) }),
          e.map((e) =>
            (0, N.createElement)(Wt, {
              ...e,
              key: Array.isArray(e.question) ? e.question[0] : e.question,
            }),
          ),
        ],
      }),
    });
  },
  Wt = (e) => {
    let { question: t, answer: n } = e,
      r = Array.isArray(t) ? t : [t],
      i = Array.isArray(n) ? n : [n];
    return (0, J.jsxs)(j, {
      display: `flex`,
      flexDirection: `column`,
      paddingTop: `medium`,
      paddingBottom: `medium`,
      focusable: !0,
      children: [
        r.map((e) => (0, J.jsx)(Gt, { children: y(e) }, e)),
        i.map((e) => (0, J.jsx)(Kt, { children: y(e) }, e)),
      ],
    });
  },
  Gt = ({ children: e }) => (0, J.jsx)(`div`, { className: Ft, children: e }),
  Kt = ({ children: e }) => (0, J.jsx)(`div`, { className: It, children: e }),
  qt = () => {
    let e = u.Get().GetConfig().points_conversion.unit_spend,
      t = u.Get().GetConfig().points_conversion.points;
    return (0, J.jsx)(fe, {
      children: (0, J.jsx)(he, {
        children: (0, J.jsxs)(M, {
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          style: { width: `100%` },
          id: `Title`,
          className: ut,
          children: [
            (0, J.jsx)(Lt, {}),
            (0, J.jsx)(Rt, { dollarConversion: e, numPoints: t }),
            (0, J.jsx)(zt, {}),
            (0, J.jsx)(Bt, {}),
            !C(D.EREALM) && (0, J.jsx)(Vt, {}),
            (0, J.jsx)(Ut, {}),
          ],
        }),
      }),
    });
  },
  Jt = `D8E3eEEId9s-`,
  Yt = `_6qpJsKhhr-M-`,
  X = `An0FlKVC9nw-`,
  Z = `bFuJQ7DqoCY-`,
  Xt = class extends N.Component {
    constructor(e) {
      (super(e), u.Get().GetLoyaltyRewardsSummary());
    }
    render() {
      return C(D.EREALM)
        ? (0, J.jsx)(d, {
            children: (0, J.jsxs)(M, {
              className: Jt,
              marginX: `xlarge`,
              display: `flex`,
              flexDirection: `column`,
              children: [
                (0, J.jsxs)(M, {
                  marginY: `large`,
                  display: `flex`,
                  flexDirection: `column`,
                  children: [
                    (0, J.jsx)(M, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Yt,
                      children: y(`#LunarSale2022_Rules_Header_China`),
                    }),
                    (0, J.jsx)(M, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: y(`#LunarSale2022_Rules_Intro_China`),
                    }),
                  ],
                }),
                (0, J.jsxs)(M, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, J.jsx)(M, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: X,
                      children: y(`#LunarSale2022_Rules_1_Title_China`),
                    }),
                    (0, J.jsx)(M, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: y(`#LunarSale2022_Rules_1_Desc_China`),
                    }),
                  ],
                }),
                (0, J.jsxs)(M, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, J.jsx)(M, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: X,
                      children: y(`#LunarSale2022_Rules_2_Title_China`),
                    }),
                    (0, J.jsx)(M, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: y(`#LunarSale2022_Rules_2_Desc_China`),
                    }),
                    (0, J.jsx)(M, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: y(`#LunarSale2022_Rules_2_Desc2_China`),
                    }),
                  ],
                }),
                (0, J.jsxs)(M, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, J.jsx)(M, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: X,
                      children: y(`#LunarSale2022_Rules_3_Title_China`),
                    }),
                    (0, J.jsx)(M, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: y(`#LunarSale2022_Rules_3_Desc_China`),
                    }),
                    (0, J.jsx)(M, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: y(`#LunarSale2022_Rules_3_Desc2_China`),
                    }),
                  ],
                }),
                (0, J.jsxs)(M, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, J.jsx)(M, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: X,
                      children: y(`#LunarSale2022_Rules_4_Title_China`),
                    }),
                    (0, J.jsx)(M, {
                      marginY: `xsmall`,
                      className: Z,
                      children: x(
                        `#LunarSale2022_Rules_4_Desc_China`,
                        (0, J.jsx)(Ve, {
                          href: D.STORE_BASE_URL + `privacy_agreement`,
                          children: y(`#LunarSale2022_Rules_ClickHere`),
                        }),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          })
        : (0, J.jsx)(d, {
            children: (0, J.jsxs)(M, {
              className: Jt,
              marginX: `xlarge`,
              display: `flex`,
              flexDirection: `column`,
              children: [
                (0, J.jsxs)(M, {
                  marginY: `large`,
                  display: `flex`,
                  flexDirection: `column`,
                  children: [
                    (0, J.jsx)(M, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Yt,
                      children: y(`#LunarSale2022_Rules_Header`),
                    }),
                    (0, J.jsx)(M, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: y(`#LunarSale2022_Rules_Intro`),
                    }),
                  ],
                }),
                (0, J.jsxs)(M, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, J.jsx)(M, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: X,
                      children: y(`#LunarSale2022_Rules_1_Title`),
                    }),
                    (0, J.jsx)(M, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: y(`#LunarSale2022_Rules_1_Desc`),
                    }),
                  ],
                }),
                (0, J.jsxs)(M, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, J.jsx)(M, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: X,
                      children: y(`#LunarSale2022_Rules_2_Title`),
                    }),
                    (0, J.jsx)(M, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: y(`#LunarSale2022_Rules_2_Desc`),
                    }),
                    (0, J.jsx)(M, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: y(`#LunarSale2022_Rules_2_Desc2`),
                    }),
                  ],
                }),
                (0, J.jsxs)(M, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, J.jsx)(M, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: X,
                      children: y(`#LunarSale2022_Rules_3_Title`),
                    }),
                    (0, J.jsx)(M, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: y(`#LunarSale2022_Rules_3_Desc`),
                    }),
                    (0, J.jsx)(M, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: y(`#LunarSale2022_Rules_3_Desc2`),
                    }),
                  ],
                }),
                (0, J.jsxs)(M, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, J.jsx)(M, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: X,
                      children: y(`#LunarSale2022_Rules_4_Title`),
                    }),
                    (0, J.jsx)(M, {
                      marginY: `xsmall`,
                      className: Z,
                      children: x(
                        `#LunarSale2022_Rules_4_Desc`,
                        (0, J.jsx)(Ve, {
                          href: D.STORE_BASE_URL + `privacy_agreement`,
                          children: y(`#LunarSale2022_Rules_ClickHere`),
                        }),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          });
    }
  };
Xt = ke([te], Xt);
var Zt = e(re()),
  Qt = `kySzsqSwnv8-`;
function $t(e) {
  let { steamid: t } = e,
    n = new Oe(t),
    r = ne({
      queryKey: [`EquippedProfileItems`, t],
      queryFn: () => u.Get().GetEquippedProfileItems(t),
      staleTime: 1 / 0,
    }),
    i = ne({
      queryKey: [`MiniprofileData`, t],
      queryFn: async () =>
        (
          await Zt.default.get(
            D.COMMUNITY_BASE_URL +
              `miniprofile/` +
              n.GetAccountID() +
              `/json/?origin=` +
              D.STORE_BASE_URL,
          )
        ).data,
      staleTime: 1 / 0,
    }),
    a = N.useMemo(() => r?.data?.active_definitions?.map((e) => e.appid), [r]),
    o = N.useMemo(() => {
      let e = [];
      return (
        r?.data?.bundle_definitions?.length &&
          (e = [...r.data.bundle_definitions, ...e]),
        r?.data?.active_definitions?.length &&
          (e = [...r.data.active_definitions, ...e]),
        r?.data?.inactive_definitions?.length &&
          (e = [...r.data.inactive_definitions, ...e]),
        e?.find((e) => e.community_item_class == 3)
      );
    }, [r]);
  if (!r.data || !i.data) return null;
  let s = null;
  r.data.eResult == 1
    ? !r.data.active_definitions?.length &&
      !r.data.inactive_definitions?.length &&
      (s = y(`#EquippedProfile_Error_NoItems`))
    : ((s = y(`#EquippedProfile_Error_Generic`)),
      r.data.eResult == 15 && (s = y(`#EquippedProfile_Error_AccessDenied`)));
  let ee = (e, t) => ({
      rewards: r.data.active_definitions,
      bLoadingMore: !1,
      cTotalMatching: r.data.active_definitions.length,
      cMaxToReturn: r.data.active_definitions.length,
    }),
    te = (e, t) => ({
      rewards: r.data.inactive_definitions,
      bLoadingMore: !1,
      cTotalMatching: r.data.inactive_definitions.length,
      cMaxToReturn: r.data.inactive_definitions.length,
    }),
    re = {
      type: 1,
      cluster: {
        id: `SimilarProfileItems`,
        title: y(`#EquippedProfile_RelatedAppsCarousel_Title`),
        subtitle: ``,
        GetRewards: (e, t, n) =>
          u.Get().QueryRewardDefinitions({ appid: a, grouping: 2 }, e, t),
      },
    },
    c = (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsxs)(`a`, {
          className: Qt,
          href: Ne(D.COMMUNITY_BASE_URL + `profiles/` + t),
          children: [
            (0, J.jsx)(Ue, {
              "data-miniprofile": `s` + t,
              className: void 0,
              size: `Large`,
              statusPosition: `right`,
              strAvatarURL: i.data.avatar_url,
            }),
            i.data.persona_name,
          ],
        }),
        (0, J.jsx)(`div`, { children: y(`#EquippedProfile_Header_Title`) }),
      ],
    });
  return (0, J.jsx)(d, {
    background:
      o &&
      `${D.MEDIA_CDN_COMMUNITY_URL}images/items/${o.appid}/${o.community_item_data?.item_image_large}`,
    children: (0, J.jsxs)(We, {
      className: oe,
      itemClassName: ce,
      spacing: `xlarge`,
      children: [
        (0, J.jsx)(le, {
          title: c,
          subtitle: y(`#EquippedProfile_Header_Desc`),
        }),
        s && (0, J.jsx)(`div`, { className: `_2nOWN-OvhNw-`, children: s }),
        r.data.active_definitions?.length > 0 &&
          (0, J.jsx)(ie, {
            title: y(`#EquippedProfile_AvailableForPurchase`),
            children: (0, J.jsx)(be, {
              style: { width: `100%` },
              getItems: ee,
              itemClassName: `_7nsR0k0ssII-`,
              renderItem: (e) => (0, J.jsx)(de, { definition: e }, e.defid),
            }),
          }),
        r.data.inactive_definitions?.length > 0 &&
          (0, J.jsx)(ie, {
            title: y(`#EquippedProfile_NotAvailable`),
            subtitle: De(
              `#EquippedProfile_NotAvailable_Desc`,
              r.data.inactive_definitions.length,
            ),
            children: (0, J.jsx)(be, {
              style: { width: `100%` },
              getItems: te,
              itemClassName: `_7nsR0k0ssII-`,
              renderItem: (e) =>
                (0, J.jsx)(Se, { definition: e, purchaseable: !1 }, e.defid),
            }),
          }),
        a?.length > 0 && (0, J.jsx)(ve, { descriptor: re }),
      ],
    }),
  });
}
var Q = e(o(), 1),
  en = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: p.readUint32, bw: k.writeUint32 },
            auctiondescriptionid: {
              n: 2,
              br: p.readUint64String,
              bw: k.writeUint64String,
            },
            state: { n: 3, br: p.readEnum, bw: k.writeEnum },
            time_created: { n: 4, br: p.readUint32, bw: k.writeUint32 },
            time_updated: { n: 5, br: p.readUint32, bw: k.writeUint32 },
            amount_bid: { n: 6, br: p.readInt64String, bw: k.writeInt64String },
            amount_paid: {
              n: 7,
              br: p.readInt64String,
              bw: k.writeInt64String,
            },
            auctionbidid: {
              n: 8,
              br: p.readInt64String,
              bw: k.writeInt64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuction_Bid`;
    }
  },
  tn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.auctiondescriptionid || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, [12], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            auctiondescriptionid: {
              n: 1,
              br: p.readUint64String,
              bw: k.writeUint64String,
            },
            time_start: { n: 2, br: p.readUint32, bw: k.writeUint32 },
            time_end: { n: 3, br: p.readUint32, bw: k.writeUint32 },
            amount_total: {
              n: 5,
              br: p.readInt64String,
              bw: k.writeInt64String,
            },
            amount_remaining: {
              n: 6,
              br: p.readInt64String,
              bw: k.writeInt64String,
            },
            highest_amount: {
              n: 7,
              br: p.readInt64String,
              bw: k.writeInt64String,
            },
            highest_bidder_accountid: {
              n: 8,
              br: p.readUint32,
              bw: k.writeUint32,
            },
            community_item_appid: { n: 9, br: p.readUint32, bw: k.writeUint32 },
            community_item_type: { n: 10, br: p.readUint32, bw: k.writeUint32 },
            store_appid: { n: 11, br: p.readUint32, bw: k.writeUint32 },
            store_packageids: {
              n: 12,
              r: !0,
              q: !0,
              br: p.readUint32,
              pbr: p.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
            reserve_price: {
              n: 13,
              br: p.readInt64String,
              bw: k.writeInt64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuction_Item`;
    }
  },
  nn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.auctiondescriptionid || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            auctiondescriptionid: {
              n: 1,
              br: p.readUint64String,
              bw: k.writeUint64String,
            },
            amount_bid: { n: 2, br: p.readInt64String, bw: k.writeInt64String },
            expected_amount_remaining: {
              n: 3,
              br: p.readInt32,
              bw: k.writeInt32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuction_PlaceBid_Request`;
    }
  },
  rn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Q.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuction_PlaceBid_Response`;
    }
  },
  an = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.auctiondescriptionid || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            auctiondescriptionid: {
              n: 1,
              br: p.readUint64String,
              bw: k.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuction_CancelBid_Request`;
    }
  },
  on = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.amount_returned || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            amount_returned: {
              n: 1,
              br: p.readInt64String,
              bw: k.writeInt64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuction_CancelBid_Response`;
    }
  },
  sn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: p.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuction_GetBidsForUser_Request`;
    }
  },
  cn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bids || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { bids: { n: 1, c: en, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuction_GetBidsForUser_Response`;
    }
  },
  ln = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.auctiondescriptionid || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            auctiondescriptionid: {
              n: 1,
              br: p.readUint64String,
              bw: k.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuction_GetBidsForItem_Request`;
    }
  },
  un = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item: { n: 1, c: tn },
            count_total: { n: 2, br: p.readInt32, bw: k.writeInt32 },
            current_user_position: { n: 3, br: p.readInt32, bw: k.writeInt32 },
            winning_bids: { n: 4, c: en, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuction_GetBidsForItem_Response`;
    }
  },
  dn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.auctiondescriptionid || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            auctiondescriptionid: {
              n: 1,
              br: p.readUint64String,
              bw: k.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuction_GetUserBidForItem_Request`;
    }
  },
  fn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bid || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { bid: { n: 1, c: en } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuction_GetUserBidForItem_Response`;
    }
  },
  pn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.auctiondescriptionid || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            auctiondescriptionid: {
              n: 1,
              br: p.readUint64String,
              bw: k.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuction_GetItemDetails_Request`;
    }
  },
  mn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { item: { n: 1, c: tn } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuction_GetItemDetails_Response`;
    }
  },
  hn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), Q.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuction_GetAllItems_Request`;
    }
  },
  gn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.items || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { items: { n: 1, c: tn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return _(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuction_GetAllItems_Response`;
    }
  },
  $;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Auction.PlaceBid#1`, T(nn, t, n), rn, { ePrivilege: 3 });
  }
  e.PlaceBid = t;
  function n(e, t, n) {
    return e.SendMsg(`Auction.CancelBid#1`, T(an, t, n), on, { ePrivilege: 1 });
  }
  e.CancelBid = n;
  function r(e, t, n) {
    return e.SendMsg(`Auction.GetBidsForUser#1`, T(sn, t, n), cn, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetBidsForUser = r;
  function i(e, t, n) {
    return e.SendMsg(`Auction.GetBidsForItem#1`, T(ln, t, n), un, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetBidsForItem = i;
  function a(e, t, n) {
    return e.SendMsg(`Auction.GetUserBidForItem#1`, T(dn, t, n), fn, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetUserBidForItem = a;
  function o(e, t, n) {
    return e.SendMsg(`Auction.GetItemDetails#1`, T(pn, t, n), mn, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetItemDetails = o;
  function s(e, t, n) {
    return e.SendMsg(`Auction.GetAllItems#1`, T(hn, t, n), gn, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetAllItems = s;
})(($ ||= {}));
var _n = class e {
  constructor() {
    ee(this);
  }
  m_transport;
  m_anonymousTransport;
  static s_Singleton;
  m_bLoadedCurrentUserBids = !1;
  m_rgCurrentUserBids = t.array([], { deep: !0 });
  m_bLoadedAllItems = !1;
  m_mapAuctionItems = new Map();
  static Get() {
    return ((this.s_Singleton ||= new e()), this.s_Singleton);
  }
  Init(e) {
    ((this.m_transport = e.GetServiceTransport()),
      (this.m_anonymousTransport = e.GetAnonymousServiceTransport()));
  }
  async LoadCurrentUserBids() {
    if (!u.Get().BIsLoggedIn()) return [];
    let e = E.Init(sn);
    e.SetBodyFields({ steamid: ze.steamid });
    let t = await $.GetBidsForUser(this.m_transport, e);
    return t.GetEResult() == 1
      ? t.Body().toObject().bids
      : (console.error(
          `Error when calling AuctionService.GetBidsForUser: EResult=${t.GetEResult()}`,
        ),
        []);
  }
  GetCurrentUserBids(e) {
    return (
      (!this.m_bLoadedCurrentUserBids || e) &&
        ((this.m_bLoadedCurrentUserBids = !0),
        (this.m_rgCurrentUserBids = []),
        this.LoadCurrentUserBids().then((e) =>
          e.forEach((e) => this.m_rgCurrentUserBids.push(e)),
        )),
      this.m_rgCurrentUserBids
    );
  }
  async LoadAllItems() {
    let e = E.Init(hn),
      t = await $.GetAllItems(this.m_anonymousTransport, e);
    return t.GetEResult() == 1
      ? t.Body().toObject().items
      : (console.error(
          `Error when calling AuctionService.GetAllItems: EResult=${t.GetEResult()}`,
        ),
        []);
  }
  GetAllItems(e) {
    return (
      (!this.m_bLoadedAllItems || e) &&
        ((this.m_bLoadedCurrentUserBids = !0),
        this.m_mapAuctionItems.clear(),
        this.LoadAllItems().then((e) =>
          e.forEach((e) => this.m_mapAuctionItems.set(e.store_appid, e)),
        )),
      this.m_mapAuctionItems
    );
  }
  GetAuctionItemByAppID(e) {
    return this.GetAllItems(!1).get(e);
  }
  async GetUserBidForItem(e) {
    let t = E.Init(dn),
      n = await $.GetUserBidForItem(this.m_transport, t);
    return n.GetEResult() == 1
      ? n.Body().toObject().bid
      : (console.error(
          `Error when calling AuctionService.GetUserBidForItem: EResult=${n.GetEResult()}`,
        ),
        null);
  }
  async PlaceBid(e, t, n) {
    let r = { eResult: 2, strMessage: `` };
    if (!u.Get().BIsLoggedIn())
      return ((r = { eResult: 21, strMessage: `Not logged on` }), r);
    let i = E.Init(nn);
    i.SetBodyFields({
      auctiondescriptionid: e,
      amount_bid: t,
      expected_amount_remaining: n,
    });
    let a = await $.PlaceBid(this.m_transport, i);
    return (
      (r.eResult = a.GetEResult()),
      a.GetEResult() == 1
        ? this.GetCurrentUserBids(!0)
        : ((r.strMessage = a.Hdr().error_message()),
          console.error(
            `Error when calling AuctionService.PlaceBid: EResult=${a.GetEResult()}`,
          )),
      r
    );
  }
  async CancelBid(e) {
    let t = { eResult: 2, strMessage: `` };
    if (!u.Get().BIsLoggedIn())
      return ((t = { eResult: 21, strMessage: `Not logged on` }), t);
    let n = E.Init(an);
    n.SetBodyFields({ auctiondescriptionid: e });
    let r = await $.CancelBid(this.m_transport, n);
    return (
      (t.eResult = r.GetEResult()),
      r.GetEResult() == 1
        ? this.GetCurrentUserBids(!0)
        : ((t.strMessage = r.Hdr().error_message()),
          console.error(
            `Error when calling AuctionService.CancelBid: EResult=${r.GetEResult()}`,
          )),
      t
    );
  }
};
(ke([t], _n.prototype, `m_rgCurrentUserBids`, void 0),
  ke([t], _n.prototype, `m_mapAuctionItems`, void 0));
async function vn() {
  let e = D.LANGUAGE,
    t = Te.GetLanguageFallback(e),
    n = e === t,
    [r, i] = await Promise.all([
      je(
        Object.assign({
          "../../../localization/loyalty/loyalty_arabic.json": () =>
            m(() => import(`./loyalty_arabic.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_brazilian.json": () =>
            m(() => import(`./loyalty_brazilian.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_bulgarian.json": () =>
            m(() => import(`./loyalty_bulgarian.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_czech.json": () =>
            m(() => import(`./loyalty_czech.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_danish.json": () =>
            m(() => import(`./loyalty_danish.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_dutch.json": () =>
            m(() => import(`./loyalty_dutch.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_english.json": () =>
            m(() => import(`./loyalty_english.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_finnish.json": () =>
            m(() => import(`./loyalty_finnish.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_french.json": () =>
            m(() => import(`./loyalty_french.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_german.json": () =>
            m(() => import(`./loyalty_german.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_greek.json": () =>
            m(() => import(`./loyalty_greek.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_hungarian.json": () =>
            m(() => import(`./loyalty_hungarian.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_indonesian.json": () =>
            m(() => import(`./loyalty_indonesian.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_italian.json": () =>
            m(() => import(`./loyalty_italian.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_japanese.json": () =>
            m(() => import(`./loyalty_japanese.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_koreana.json": () =>
            m(() => import(`./loyalty_koreana.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_latam.json": () =>
            m(() => import(`./loyalty_latam.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_malay.json": () =>
            m(() => import(`./loyalty_malay.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_norwegian.json": () =>
            m(() => import(`./loyalty_norwegian.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_polish.json": () =>
            m(() => import(`./loyalty_polish.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_portuguese.json": () =>
            m(() => import(`./loyalty_portuguese.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_romanian.json": () =>
            m(() => import(`./loyalty_romanian.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_russian.json": () =>
            m(() => import(`./loyalty_russian.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_sc_schinese.json": () =>
            m(() => import(`./loyalty_sc_schinese.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_schinese.json": () =>
            m(() => import(`./loyalty_schinese.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_spanish.json": () =>
            m(() => import(`./loyalty_spanish.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_swedish.json": () =>
            m(() => import(`./loyalty_swedish.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_tchinese.json": () =>
            m(() => import(`./loyalty_tchinese.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_thai.json": () =>
            m(() => import(`./loyalty_thai.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_turkish.json": () =>
            m(() => import(`./loyalty_turkish.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_ukrainian.json": () =>
            m(() => import(`./loyalty_ukrainian.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_vietnamese.json": () =>
            m(() => import(`./loyalty_vietnamese.js`), [], import.meta.url),
        }),
        `../../../localization/loyalty/loyalty_${e}.json`,
        6,
      ),
      n
        ? void 0
        : je(
            Object.assign({
              "../../../localization/loyalty/loyalty_arabic.json": () =>
                m(() => import(`./loyalty_arabic.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_brazilian.json": () =>
                m(() => import(`./loyalty_brazilian.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_bulgarian.json": () =>
                m(() => import(`./loyalty_bulgarian.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_czech.json": () =>
                m(() => import(`./loyalty_czech.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_danish.json": () =>
                m(() => import(`./loyalty_danish.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_dutch.json": () =>
                m(() => import(`./loyalty_dutch.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_english.json": () =>
                m(() => import(`./loyalty_english.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_finnish.json": () =>
                m(() => import(`./loyalty_finnish.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_french.json": () =>
                m(() => import(`./loyalty_french.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_german.json": () =>
                m(() => import(`./loyalty_german.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_greek.json": () =>
                m(() => import(`./loyalty_greek.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_hungarian.json": () =>
                m(() => import(`./loyalty_hungarian.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_indonesian.json": () =>
                m(() => import(`./loyalty_indonesian.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_italian.json": () =>
                m(() => import(`./loyalty_italian.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_japanese.json": () =>
                m(() => import(`./loyalty_japanese.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_koreana.json": () =>
                m(() => import(`./loyalty_koreana.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_latam.json": () =>
                m(() => import(`./loyalty_latam.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_malay.json": () =>
                m(() => import(`./loyalty_malay.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_norwegian.json": () =>
                m(() => import(`./loyalty_norwegian.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_polish.json": () =>
                m(() => import(`./loyalty_polish.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_portuguese.json": () =>
                m(() => import(`./loyalty_portuguese.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_romanian.json": () =>
                m(() => import(`./loyalty_romanian.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_russian.json": () =>
                m(() => import(`./loyalty_russian.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_sc_schinese.json": () =>
                m(
                  () => import(`./loyalty_sc_schinese.js`),
                  [],
                  import.meta.url,
                ),
              "../../../localization/loyalty/loyalty_schinese.json": () =>
                m(() => import(`./loyalty_schinese.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_spanish.json": () =>
                m(() => import(`./loyalty_spanish.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_swedish.json": () =>
                m(() => import(`./loyalty_swedish.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_tchinese.json": () =>
                m(() => import(`./loyalty_tchinese.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_thai.json": () =>
                m(() => import(`./loyalty_thai.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_turkish.json": () =>
                m(() => import(`./loyalty_turkish.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_ukrainian.json": () =>
                m(() => import(`./loyalty_ukrainian.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_vietnamese.json": () =>
                m(() => import(`./loyalty_vietnamese.js`), [], import.meta.url),
            }),
            `../../../localization/loyalty/loyalty_${t}.json`,
            6,
          ),
    ]);
  Me.AddTokens(r.default, i ? i.default : void 0);
}
var yn = class extends N.Component {
  state = { bReady: !1 };
  componentDidMount() {
    xn.then(() => this.setState({ bReady: !0 }));
  }
  render() {
    return this.state.bReady
      ? (0, J.jsx)(ue, {
          children: (0, J.jsxs)(r, {
            children: [
              (0, J.jsx)(n, {
                path: g.LoyaltyHowItWorks(),
                children: (0, J.jsx)(qt, {}),
              }),
              (0, J.jsx)(n, {
                path: g.LoyaltyStore(),
                children: (0, J.jsx)(ye, {}),
              }),
              (0, J.jsx)(n, {
                path: g.LoyaltyGiveawayRules(),
                children: (0, J.jsx)(Xt, {}),
              }),
              (0, J.jsx)(n, {
                path: g.LoyaltyEquippedProfile(`:steamid`),
                render: (e) =>
                  (0, J.jsx)($t, { steamid: e.match.params.steamid }),
              }),
              (0, J.jsx)(n, {
                children: (0, J.jsx)(a, { to: g.LoyaltyStore() }),
              }),
            ],
          }),
        })
      : (0, J.jsx)(me, {});
  }
};
async function bn() {
  let e = Pe(`loyaltystore`, `application_config`),
    t = Ee(Ae());
  (Ce.Init(t), await vn(), await Le.Get().HintLoad(), u.Get().Init(t, e));
}
var xn = bn();
export { yn as default };
