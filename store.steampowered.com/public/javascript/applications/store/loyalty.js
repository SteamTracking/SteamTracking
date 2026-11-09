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
  l as c,
  st as te,
  tt as ne,
} from "./libraries.js";
import {
  A as re,
  C as l,
  D as ie,
  E as ae,
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
  Dy as Te,
  Hy as Ee,
  Iu as m,
  Iy as De,
  Jb as Oe,
  Jy as h,
  La as g,
  Mb as _,
  Qa as ke,
  Qx as v,
  Ra as Ae,
  Sb as y,
  Sc as b,
  Ty as je,
  Uc as Me,
  Uy as x,
  Xi as Ne,
  Xx as S,
  Yx as C,
  Zx as w,
  ax as Pe,
  br as Fe,
  eS as T,
  eo as E,
  gu as Ie,
  hx as D,
  mx as O,
  nS as k,
  qy as Le,
  rx as A,
  tS as j,
  xS as Re,
  yS as M,
  yu as ze,
  zy as Be,
} from "./main.js";
import { t as Ve } from "./steamavatar.js";
import { a as N, o as He, t as P } from "./layout.js";
var F = e(i());
function Ue(e) {
  return typeof GStoreItemData > `u`
    ? (console.error(`Unable to find GStoreItemData`), null)
    : GStoreItemData.fnFormatCurrency(e);
}
var We = new URL(
    `../../../images/applications/store/game_tiles.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Ge = new URL(
    `../../../images/applications/store/float.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Ke = new URL(
    `../../../images/applications/store/Entering_vr.gif?v=CYKO1bep`,
    import.meta.url,
  ).href,
  qe = new URL(
    `../../../images/applications/store/bonemetal_224px.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Je = new URL(
    `../../../images/applications/store/header_image.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Ye = new URL(
    `../../../images/applications/store/award_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Xe = new URL(
    `../../../images/applications/store/beautiful_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Ze = new URL(
    `../../../images/applications/store/crown_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Qe = new URL(
    `../../../images/applications/store/fire_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  $e = new URL(
    `../../../images/applications/store/funny_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  et = new URL(
    `../../../images/applications/store/hundo_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  tt = new URL(
    `../../../images/applications/store/life_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  nt = new URL(
    `../../../images/applications/store/perfect_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  rt = new URL(
    `../../../images/applications/store/plus_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  it = new URL(
    `../../../images/applications/store/smart_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  at = new URL(
    `../../../images/applications/store/treasure_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  ot = new URL(
    `../../../images/applications/store/wholesome_anim_225.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  st = `T0ZVj-qBX-Q-`,
  ct = `g2HRkHxGpU8-`,
  I = `_7mLpLVp63UA-`,
  lt = `xhebd4mkSB8-`,
  ut = `UQSnPv-1FwI-`,
  dt = `tMpqxBQst-o-`,
  ft = `o8gkSlk3zsY-`,
  pt = `kY5MK0ENRFQ-`,
  L = `Jofbiq39q78-`,
  mt = `g5G4XG-6oRw-`,
  ht = `M-L0TSOzjRo-`,
  gt = `VdllGvB-1ik-`,
  R = `LruDduCdrIE-`,
  z = `Djto0ev0oVg-`,
  _t = `_0xeBAaTPgvw-`,
  B = `v2o2-0PfeII-`,
  V = `-PJVtiVarKU-`,
  vt = `QUFx0RuDIhY-`,
  H = `B03HBRJnuX8-`,
  U = `NNBkgM3NYsc-`,
  W = `D6hKTWRjFE0-`,
  G = `sqmw1NuBHIg-`,
  K = `DcNiZXDf28w-`,
  q = `bFQGOnRvaT0-`,
  yt = `fVTaguQEiwQ-`,
  bt = `a4d2KJgPZwY-`,
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
        (0, J.jsxs)(`div`, { className: Mt, children: [` `, x(a), ` `] }),
      ],
    });
  },
  Lt = (e) =>
    (0, J.jsxs)(P, {
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      paddingTop: `xlarge`,
      className: I,
      children: [
        (0, J.jsx)(`div`, {
          className: ut,
          children: x(`#HowItWorks_SteamPoints`),
        }),
        (0, J.jsx)(`div`, {
          className: dt,
          children: x(`#HowItWorks_SteamPoints_Desc1`),
        }),
        (0, J.jsx)(`img`, { src: Je, className: lt }),
        (0, J.jsx)(`div`, {
          className: dt,
          children: x(`#HowItWorks_SteamPoints_Desc2`),
        }),
      ],
    }),
  Rt = (e) => {
    let t = h(
      `#HowItWorks_Conversion`,
      (0, J.jsx)(`span`, { children: Ne(e.numPoints) }),
      (0, J.jsx)(`span`, { children: Ue(e.dollarConversion) }),
    );
    return (0, J.jsx)(N, {
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `center`,
      paddingTop: `medium`,
      className: I,
      focusable: !0,
      noFocusRing: !0,
      children: (0, J.jsxs)(`div`, {
        className: b(mt),
        children: [
          (0, J.jsx)(`div`, { className: ht, children: t }),
          (0, J.jsx)(`div`, {
            className: L,
            children: x(`#HowItWorks_How_Desc`),
          }),
        ],
      }),
    });
  },
  zt = (e) => {
    let t = h(
      `#ShopName`,
      (0, J.jsx)(`span`, { children: x(`#ShopNamePre`) }),
      x(`#ShopNamePost`),
    );
    return (0, J.jsxs)(P, {
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      paddingTop: `xxlarge`,
      children: [
        (0, J.jsxs)(N, {
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `center`,
          className: gt,
          focusable: !0,
          noFocusRing: !0,
          children: [
            (0, J.jsx)(l, { className: b(R, H) }),
            (0, J.jsx)(g, { className: b(R, U) }),
            (0, J.jsx)(Ae, { className: b(R, W) }),
            (0, J.jsx)(ae, { className: b(R, G) }),
            (0, J.jsx)(E, { className: b(R, K) }),
            (0, J.jsx)(ke, { className: b(R, q) }),
            (0, J.jsx)(we, { className: b(R, yt) }),
            (0, J.jsx)(f, { className: b(R, bt) }),
            (0, J.jsx)(l, { className: b(R, H) }),
            (0, J.jsx)(g, { className: b(R, U) }),
            (0, J.jsx)(Ae, { className: b(R, W) }),
            (0, J.jsx)(ae, { className: b(R, G) }),
            (0, J.jsx)(E, { className: b(R, K) }),
            (0, J.jsx)(ke, { className: b(R, q) }),
            (0, J.jsx)(we, { className: b(R, yt) }),
            (0, J.jsx)(f, { className: b(R, bt) }),
            (0, J.jsx)(l, { className: b(R, H) }),
            (0, J.jsx)(g, { className: b(R, U) }),
            (0, J.jsx)(Ae, { className: b(R, W) }),
            (0, J.jsx)(ae, { className: b(R, G) }),
            (0, J.jsx)(E, { className: b(R, K) }),
            (0, J.jsx)(ke, { className: b(R, q) }),
            (0, J.jsx)(we, { className: b(R, yt) }),
            (0, J.jsx)(f, { className: b(R, bt) }),
            (0, J.jsx)(l, { className: b(R, H) }),
          ],
        }),
        (0, J.jsxs)(P, {
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          paddingTop: `large`,
          className: I,
          children: [
            (0, J.jsx)(`div`, { className: st, children: t }),
            (0, J.jsx)(`div`, {
              className: L,
              children: x(`#HowItWorks_UsePoints_Desc1`),
            }),
            (0, J.jsxs)(N, {
              display: `flex`,
              flexDirection: `column`,
              paddingTop: `large`,
              focusable: !0,
              noFocusRing: !0,
              children: [
                (0, J.jsx)(Y, {
                  iconComponent: ie,
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
            (0, J.jsxs)(N, {
              className: St,
              focusable: !0,
              noFocusRing: !0,
              children: [
                (0, J.jsx)(`img`, { className: Ct, src: Ge }),
                (0, J.jsx)(`img`, { className: wt, src: pe }),
                (0, J.jsxs)(`div`, {
                  className: void 0,
                  children: [
                    (0, J.jsx)(`img`, { className: Et, src: qe }),
                    (0, J.jsx)(`img`, { className: Dt, src: Ke }),
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
    let e = m.LoyaltyByGame();
    return (0, J.jsx)(`div`, {
      className: ft,
      style: { backgroundImage: `url(${We})` },
      children: (0, J.jsxs)(P, {
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
              className: pt,
              children: x(`#HowItWorks_YourGames`),
            }),
          }),
          (0, J.jsx)(`div`, {
            className: L,
            children: x(`#HowItWorks_YourGames_Desc1`),
          }),
          (0, J.jsx)(N, {
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
  Vt = c(() => {
    let e = u.Get().GetCommunityAwardPointsTransferred(),
      t = A.STORE_BASE_URL + `labs/trendingreviews/`,
      n = A.COMMUNITY_BASE_URL + `?subsection=workshop`;
    return (0, J.jsxs)(P, {
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      paddingTop: `xxlarge`,
      children: [
        (0, J.jsxs)(N, {
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `center`,
          className: gt,
          focusable: !0,
          noFocusRing: !0,
          children: [
            (0, J.jsx)(`img`, { src: Ye, className: z }),
            (0, J.jsx)(`img`, { src: Xe, className: z }),
            (0, J.jsx)(`img`, { src: Ze, className: z }),
            (0, J.jsx)(`img`, { src: Qe, className: z }),
            (0, J.jsx)(`img`, { src: $e, className: z }),
            (0, J.jsx)(`img`, { src: et, className: z }),
            (0, J.jsx)(`img`, { src: tt, className: z }),
            (0, J.jsx)(`img`, { src: nt, className: z }),
            (0, J.jsx)(`img`, { src: rt, className: z }),
            (0, J.jsx)(`img`, { src: it, className: z }),
            (0, J.jsx)(`img`, { src: at, className: z }),
            (0, J.jsx)(`img`, { src: ot, className: z }),
          ],
        }),
        (0, J.jsxs)(N, {
          id: `CommunityAwards`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          paddingTop: `large`,
          className: I,
          focusable: !0,
          noFocusRing: !0,
          children: [
            (0, J.jsx)(`div`, {
              className: st,
              children: x(`#HowItWorks_ReviewAwards`),
            }),
            (0, J.jsx)(`div`, {
              className: L,
              children: x(`#HowItWorks_ReviewAwardsWinter_Desc`, e),
            }),
            (0, J.jsx)(`img`, {
              alt: x(`#HowItWorks_ReviewAwards`),
              src:
                A.MEDIA_CDN_URL + `store/rewards/howtoawards/${A.LANGUAGE}.png`,
              className: _t,
            }),
          ],
        }),
        (0, J.jsxs)(N, {
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          paddingTop: `large`,
          className: I,
          focusable: !0,
          noFocusRing: !0,
          children: [
            (0, J.jsxs)(P, {
              display: `flex`,
              flexDirection: `row`,
              alignItems: `center`,
              justifyContent: `center`,
              children: [
                (0, J.jsx)(`img`, { src: Qe, className: B }),
                (0, J.jsxs)(P, {
                  display: `flex`,
                  flexDirection: `column`,
                  children: [
                    (0, J.jsx)(`div`, {
                      className: b(L, V),
                      children: x(`#HowItWorks_AwardsReviews`, e),
                    }),
                    (0, J.jsx)(`a`, {
                      href: t,
                      children: (0, J.jsx)(`div`, {
                        className: vt,
                        children: x(`#HowItWorks_AwardsReviewsLink`),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, J.jsxs)(P, {
              display: `flex`,
              flexDirection: `row`,
              alignItems: `center`,
              justifyContent: `center`,
              paddingTop: `large`,
              children: [
                (0, J.jsx)(`img`, { src: Ze, className: B }),
                (0, J.jsxs)(P, {
                  display: `flex`,
                  flexDirection: `column`,
                  children: [
                    (0, J.jsx)(`div`, {
                      className: b(L, V),
                      children: x(`#HowItWorks_AwardsUgc`, e),
                    }),
                    (0, J.jsx)(`a`, {
                      href: n,
                      children: (0, J.jsx)(`div`, {
                        className: vt,
                        children: x(`#HowItWorks_AwardsUgcLink`),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, J.jsxs)(P, {
              display: `flex`,
              flexDirection: `row`,
              alignItems: `center`,
              justifyContent: `center`,
              paddingTop: `large`,
              children: [
                (0, J.jsx)(`img`, { src: Xe, className: B }),
                (0, J.jsx)(P, {
                  display: `flex`,
                  flexDirection: `column`,
                  children: (0, J.jsx)(`div`, {
                    className: b(L, V),
                    children: x(`#HowItWorks_AwardsProfile`, e),
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
  let e = M(A.EREALM);
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
    return (0, J.jsx)(P, {
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `center`,
      paddingTop: `xxlarge`,
      className: Nt,
      children: (0, J.jsxs)(P, {
        display: `flex`,
        flexDirection: `column`,
        children: [
          (0, J.jsx)(`div`, { className: Pt, children: x(`#Faq_Title`) }),
          e.map((e) =>
            (0, F.createElement)(Wt, {
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
    return (0, J.jsxs)(N, {
      display: `flex`,
      flexDirection: `column`,
      paddingTop: `medium`,
      paddingBottom: `medium`,
      focusable: !0,
      children: [
        r.map((e) => (0, J.jsx)(Gt, { children: x(e) }, e)),
        i.map((e) => (0, J.jsx)(Kt, { children: x(e) }, e)),
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
        children: (0, J.jsxs)(P, {
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          style: { width: `100%` },
          id: `Title`,
          className: ct,
          children: [
            (0, J.jsx)(Lt, {}),
            (0, J.jsx)(Rt, { dollarConversion: e, numPoints: t }),
            (0, J.jsx)(zt, {}),
            (0, J.jsx)(Bt, {}),
            !M(A.EREALM) && (0, J.jsx)(Vt, {}),
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
  Xt = class extends F.Component {
    constructor(e) {
      super(e), u.Get().GetLoyaltyRewardsSummary();
    }
    render() {
      return M(A.EREALM)
        ? (0, J.jsx)(d, {
            children: (0, J.jsxs)(P, {
              className: Jt,
              marginX: `xlarge`,
              display: `flex`,
              flexDirection: `column`,
              children: [
                (0, J.jsxs)(P, {
                  marginY: `large`,
                  display: `flex`,
                  flexDirection: `column`,
                  children: [
                    (0, J.jsx)(P, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Yt,
                      children: x(`#LunarSale2022_Rules_Header_China`),
                    }),
                    (0, J.jsx)(P, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: x(`#LunarSale2022_Rules_Intro_China`),
                    }),
                  ],
                }),
                (0, J.jsxs)(P, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, J.jsx)(P, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: X,
                      children: x(`#LunarSale2022_Rules_1_Title_China`),
                    }),
                    (0, J.jsx)(P, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: x(`#LunarSale2022_Rules_1_Desc_China`),
                    }),
                  ],
                }),
                (0, J.jsxs)(P, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, J.jsx)(P, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: X,
                      children: x(`#LunarSale2022_Rules_2_Title_China`),
                    }),
                    (0, J.jsx)(P, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: x(`#LunarSale2022_Rules_2_Desc_China`),
                    }),
                    (0, J.jsx)(P, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: x(`#LunarSale2022_Rules_2_Desc2_China`),
                    }),
                  ],
                }),
                (0, J.jsxs)(P, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, J.jsx)(P, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: X,
                      children: x(`#LunarSale2022_Rules_3_Title_China`),
                    }),
                    (0, J.jsx)(P, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: x(`#LunarSale2022_Rules_3_Desc_China`),
                    }),
                    (0, J.jsx)(P, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: x(`#LunarSale2022_Rules_3_Desc2_China`),
                    }),
                  ],
                }),
                (0, J.jsxs)(P, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, J.jsx)(P, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: X,
                      children: x(`#LunarSale2022_Rules_4_Title_China`),
                    }),
                    (0, J.jsx)(P, {
                      marginY: `xsmall`,
                      className: Z,
                      children: h(
                        `#LunarSale2022_Rules_4_Desc_China`,
                        (0, J.jsx)(Fe, {
                          href: A.STORE_BASE_URL + `privacy_agreement`,
                          children: x(`#LunarSale2022_Rules_ClickHere`),
                        }),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          })
        : (0, J.jsx)(d, {
            children: (0, J.jsxs)(P, {
              className: Jt,
              marginX: `xlarge`,
              display: `flex`,
              flexDirection: `column`,
              children: [
                (0, J.jsxs)(P, {
                  marginY: `large`,
                  display: `flex`,
                  flexDirection: `column`,
                  children: [
                    (0, J.jsx)(P, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Yt,
                      children: x(`#LunarSale2022_Rules_Header`),
                    }),
                    (0, J.jsx)(P, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: x(`#LunarSale2022_Rules_Intro`),
                    }),
                  ],
                }),
                (0, J.jsxs)(P, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, J.jsx)(P, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: X,
                      children: x(`#LunarSale2022_Rules_1_Title`),
                    }),
                    (0, J.jsx)(P, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: x(`#LunarSale2022_Rules_1_Desc`),
                    }),
                  ],
                }),
                (0, J.jsxs)(P, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, J.jsx)(P, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: X,
                      children: x(`#LunarSale2022_Rules_2_Title`),
                    }),
                    (0, J.jsx)(P, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: x(`#LunarSale2022_Rules_2_Desc`),
                    }),
                    (0, J.jsx)(P, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: x(`#LunarSale2022_Rules_2_Desc2`),
                    }),
                  ],
                }),
                (0, J.jsxs)(P, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, J.jsx)(P, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: X,
                      children: x(`#LunarSale2022_Rules_3_Title`),
                    }),
                    (0, J.jsx)(P, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: x(`#LunarSale2022_Rules_3_Desc`),
                    }),
                    (0, J.jsx)(P, {
                      marginY: `xsmall`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: Z,
                      children: x(`#LunarSale2022_Rules_3_Desc2`),
                    }),
                  ],
                }),
                (0, J.jsxs)(P, {
                  marginY: `medium`,
                  display: `flex`,
                  flexDirection: `column`,
                  className: void 0,
                  children: [
                    (0, J.jsx)(P, {
                      marginY: `small`,
                      display: `flex`,
                      flexDirection: `column`,
                      className: X,
                      children: x(`#LunarSale2022_Rules_4_Title`),
                    }),
                    (0, J.jsx)(P, {
                      marginY: `xsmall`,
                      className: Z,
                      children: h(
                        `#LunarSale2022_Rules_4_Desc`,
                        (0, J.jsx)(Fe, {
                          href: A.STORE_BASE_URL + `privacy_agreement`,
                          children: x(`#LunarSale2022_Rules_ClickHere`),
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
Xt = _([c], Xt);
var Zt = e(ne()),
  Qt = `kySzsqSwnv8-`;
function $t(e) {
  let { steamid: t } = e,
    n = new De(t),
    r = te({
      queryKey: [`EquippedProfileItems`, t],
      queryFn: () => u.Get().GetEquippedProfileItems(t),
      staleTime: 1 / 0,
    }),
    i = te({
      queryKey: [`MiniprofileData`, t],
      queryFn: async () =>
        (
          await Zt.default.get(
            A.COMMUNITY_BASE_URL +
              `miniprofile/` +
              n.GetAccountID() +
              `/json/?origin=` +
              A.STORE_BASE_URL,
          )
        ).data,
      staleTime: 1 / 0,
    }),
    a = F.useMemo(() => r?.data?.active_definitions?.map((e) => e.appid), [r]),
    o = F.useMemo(() => {
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
      (s = x(`#EquippedProfile_Error_NoItems`))
    : ((s = x(`#EquippedProfile_Error_Generic`)),
      r.data.eResult == 15 && (s = x(`#EquippedProfile_Error_AccessDenied`)));
  let ee = (e, t) => ({
      rewards: r.data.active_definitions,
      bLoadingMore: !1,
      cTotalMatching: r.data.active_definitions.length,
      cMaxToReturn: r.data.active_definitions.length,
    }),
    c = (e, t) => ({
      rewards: r.data.inactive_definitions,
      bLoadingMore: !1,
      cTotalMatching: r.data.inactive_definitions.length,
      cMaxToReturn: r.data.inactive_definitions.length,
    }),
    ne = {
      type: 1,
      cluster: {
        id: `SimilarProfileItems`,
        title: x(`#EquippedProfile_RelatedAppsCarousel_Title`),
        subtitle: ``,
        GetRewards: (e, t, n) =>
          u.Get().QueryRewardDefinitions({ appid: a, grouping: 2 }, e, t),
      },
    },
    l = (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsxs)(`a`, {
          className: Qt,
          href: Me(A.COMMUNITY_BASE_URL + `profiles/` + t),
          children: [
            (0, J.jsx)(Ve, {
              "data-miniprofile": `s` + t,
              className: void 0,
              size: `Large`,
              statusPosition: `right`,
              strAvatarURL: i.data.avatar_url,
            }),
            i.data.persona_name,
          ],
        }),
        (0, J.jsx)(`div`, { children: x(`#EquippedProfile_Header_Title`) }),
      ],
    });
  return (0, J.jsx)(d, {
    background:
      o &&
      `${A.MEDIA_CDN_COMMUNITY_URL}images/items/${o.appid}/${o.community_item_data?.item_image_large}`,
    children: (0, J.jsxs)(He, {
      className: oe,
      itemClassName: ce,
      spacing: `xlarge`,
      children: [
        (0, J.jsx)(le, {
          title: l,
          subtitle: x(`#EquippedProfile_Header_Desc`),
        }),
        s && (0, J.jsx)(`div`, { className: `_2nOWN-OvhNw-`, children: s }),
        r.data.active_definitions?.length > 0 &&
          (0, J.jsx)(re, {
            title: x(`#EquippedProfile_AvailableForPurchase`),
            children: (0, J.jsx)(be, {
              style: { width: `100%` },
              getItems: ee,
              itemClassName: `_7nsR0k0ssII-`,
              renderItem: (e) => (0, J.jsx)(de, { definition: e }, e.defid),
            }),
          }),
        r.data.inactive_definitions?.length > 0 &&
          (0, J.jsx)(re, {
            title: x(`#EquippedProfile_NotAvailable`),
            subtitle: Le(
              `#EquippedProfile_NotAvailable_Desc`,
              r.data.inactive_definitions.length,
            ),
            children: (0, J.jsx)(be, {
              style: { width: `100%` },
              getItems: c,
              itemClassName: `_7nsR0k0ssII-`,
              renderItem: (e) =>
                (0, J.jsx)(Se, { definition: e, purchaseable: !1 }, e.defid),
            }),
          }),
        a?.length > 0 && (0, J.jsx)(ve, { descriptor: ne }),
      ],
    }),
  });
}
var Q = e(o(), 1),
  en = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.accountid || C(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: v.readUint32, bw: k.writeUint32 },
            auctiondescriptionid: {
              n: 2,
              br: v.readUint64String,
              bw: k.writeUint64String,
            },
            state: { n: 3, br: v.readEnum, bw: k.writeEnum },
            time_created: { n: 4, br: v.readUint32, bw: k.writeUint32 },
            time_updated: { n: 5, br: v.readUint32, bw: k.writeUint32 },
            amount_bid: { n: 6, br: v.readInt64String, bw: k.writeInt64String },
            amount_paid: {
              n: 7,
              br: v.readInt64String,
              bw: k.writeInt64String,
            },
            auctionbidid: {
              n: 8,
              br: v.readInt64String,
              bw: k.writeInt64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return j(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAuction_Bid`;
    }
  },
  tn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.auctiondescriptionid || C(e.M()),
        Q.Message.initialize(this, t, 0, -1, [12], null);
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
              br: v.readUint64String,
              bw: k.writeUint64String,
            },
            time_start: { n: 2, br: v.readUint32, bw: k.writeUint32 },
            time_end: { n: 3, br: v.readUint32, bw: k.writeUint32 },
            amount_total: {
              n: 5,
              br: v.readInt64String,
              bw: k.writeInt64String,
            },
            amount_remaining: {
              n: 6,
              br: v.readInt64String,
              bw: k.writeInt64String,
            },
            highest_amount: {
              n: 7,
              br: v.readInt64String,
              bw: k.writeInt64String,
            },
            highest_bidder_accountid: {
              n: 8,
              br: v.readUint32,
              bw: k.writeUint32,
            },
            community_item_appid: { n: 9, br: v.readUint32, bw: k.writeUint32 },
            community_item_type: { n: 10, br: v.readUint32, bw: k.writeUint32 },
            store_appid: { n: 11, br: v.readUint32, bw: k.writeUint32 },
            store_packageids: {
              n: 12,
              r: !0,
              q: !0,
              br: v.readUint32,
              pbr: v.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
            reserve_price: {
              n: 13,
              br: v.readInt64String,
              bw: k.writeInt64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return j(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAuction_Item`;
    }
  },
  nn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.auctiondescriptionid || C(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: v.readUint64String,
              bw: k.writeUint64String,
            },
            amount_bid: { n: 2, br: v.readInt64String, bw: k.writeInt64String },
            expected_amount_remaining: {
              n: 3,
              br: v.readInt32,
              bw: k.writeInt32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return j(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAuction_PlaceBid_Request`;
    }
  },
  rn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), Q.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAuction_PlaceBid_Response`;
    }
  },
  an = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.auctiondescriptionid || C(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: v.readUint64String,
              bw: k.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return j(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAuction_CancelBid_Request`;
    }
  },
  on = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.amount_returned || C(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: v.readInt64String,
              bw: k.writeInt64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return j(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAuction_CancelBid_Response`;
    }
  },
  sn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || C(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: v.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return j(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAuction_GetBidsForUser_Request`;
    }
  },
  cn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.bids || C(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null);
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
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return j(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAuction_GetBidsForUser_Response`;
    }
  },
  ln = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.auctiondescriptionid || C(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: v.readUint64String,
              bw: k.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return j(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAuction_GetBidsForItem_Request`;
    }
  },
  un = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.item || C(e.M()),
        Q.Message.initialize(this, t, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item: { n: 1, c: tn },
            count_total: { n: 2, br: v.readInt32, bw: k.writeInt32 },
            current_user_position: { n: 3, br: v.readInt32, bw: k.writeInt32 },
            winning_bids: { n: 4, c: en, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return j(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAuction_GetBidsForItem_Response`;
    }
  },
  dn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.auctiondescriptionid || C(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: v.readUint64String,
              bw: k.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return j(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAuction_GetUserBidForItem_Request`;
    }
  },
  fn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.bid || C(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { bid: { n: 1, c: en } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return j(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAuction_GetUserBidForItem_Response`;
    }
  },
  pn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.auctiondescriptionid || C(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: v.readUint64String,
              bw: k.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return j(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAuction_GetItemDetails_Request`;
    }
  },
  mn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.item || C(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { item: { n: 1, c: tn } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return j(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAuction_GetItemDetails_Response`;
    }
  },
  hn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), Q.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAuction_GetAllItems_Request`;
    }
  },
  gn = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || C(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null);
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
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return j(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      T(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAuction_GetAllItems_Response`;
    }
  },
  $;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Auction.PlaceBid#1`, D(nn, t, n), rn, { ePrivilege: 3 });
  }
  e.PlaceBid = t;
  function n(e, t, n) {
    return e.SendMsg(`Auction.CancelBid#1`, D(an, t, n), on, { ePrivilege: 1 });
  }
  e.CancelBid = n;
  function r(e, t, n) {
    return e.SendMsg(`Auction.GetBidsForUser#1`, D(sn, t, n), cn, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetBidsForUser = r;
  function i(e, t, n) {
    return e.SendMsg(`Auction.GetBidsForItem#1`, D(ln, t, n), un, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetBidsForItem = i;
  function a(e, t, n) {
    return e.SendMsg(`Auction.GetUserBidForItem#1`, D(dn, t, n), fn, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetUserBidForItem = a;
  function o(e, t, n) {
    return e.SendMsg(`Auction.GetItemDetails#1`, D(pn, t, n), mn, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetItemDetails = o;
  function s(e, t, n) {
    return e.SendMsg(`Auction.GetAllItems#1`, D(hn, t, n), gn, {
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
    return (this.s_Singleton ||= new e()), this.s_Singleton;
  }
  Init(e) {
    (this.m_transport = e.GetServiceTransport()),
      (this.m_anonymousTransport = e.GetAnonymousServiceTransport());
  }
  async LoadCurrentUserBids() {
    if (!u.Get().BIsLoggedIn()) return [];
    let e = O.Init(sn);
    e.SetBodyFields({ steamid: Pe.steamid });
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
    let e = O.Init(hn),
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
    let t = O.Init(dn),
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
      return (r = { eResult: 21, strMessage: `Not logged on` }), r;
    let i = O.Init(nn);
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
      return (t = { eResult: 21, strMessage: `Not logged on` }), t;
    let n = O.Init(an);
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
_([t], _n.prototype, `m_rgCurrentUserBids`, void 0),
  _([t], _n.prototype, `m_mapAuctionItems`, void 0);
async function vn() {
  let e = A.LANGUAGE,
    t = Be.GetLanguageFallback(e),
    n = e === t,
    [r, i] = await Promise.all([
      Re(
        Object.assign({
          "../../../localization/loyalty/loyalty_arabic.json": () =>
            y(() => import(`./loyalty_arabic.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_brazilian.json": () =>
            y(() => import(`./loyalty_brazilian.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_bulgarian.json": () =>
            y(() => import(`./loyalty_bulgarian.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_czech.json": () =>
            y(() => import(`./loyalty_czech.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_danish.json": () =>
            y(() => import(`./loyalty_danish.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_dutch.json": () =>
            y(() => import(`./loyalty_dutch.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_english.json": () =>
            y(() => import(`./loyalty_english.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_finnish.json": () =>
            y(() => import(`./loyalty_finnish.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_french.json": () =>
            y(() => import(`./loyalty_french.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_german.json": () =>
            y(() => import(`./loyalty_german.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_greek.json": () =>
            y(() => import(`./loyalty_greek.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_hungarian.json": () =>
            y(() => import(`./loyalty_hungarian.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_indonesian.json": () =>
            y(() => import(`./loyalty_indonesian.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_italian.json": () =>
            y(() => import(`./loyalty_italian.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_japanese.json": () =>
            y(() => import(`./loyalty_japanese.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_koreana.json": () =>
            y(() => import(`./loyalty_koreana.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_latam.json": () =>
            y(() => import(`./loyalty_latam.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_malay.json": () =>
            y(() => import(`./loyalty_malay.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_norwegian.json": () =>
            y(() => import(`./loyalty_norwegian.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_polish.json": () =>
            y(() => import(`./loyalty_polish.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_portuguese.json": () =>
            y(() => import(`./loyalty_portuguese.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_romanian.json": () =>
            y(() => import(`./loyalty_romanian.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_russian.json": () =>
            y(() => import(`./loyalty_russian.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_sc_schinese.json": () =>
            y(() => import(`./loyalty_sc_schinese.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_schinese.json": () =>
            y(() => import(`./loyalty_schinese.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_spanish.json": () =>
            y(() => import(`./loyalty_spanish.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_swedish.json": () =>
            y(() => import(`./loyalty_swedish.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_tchinese.json": () =>
            y(() => import(`./loyalty_tchinese.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_thai.json": () =>
            y(() => import(`./loyalty_thai.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_turkish.json": () =>
            y(() => import(`./loyalty_turkish.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_ukrainian.json": () =>
            y(() => import(`./loyalty_ukrainian.js`), [], import.meta.url),
          "../../../localization/loyalty/loyalty_vietnamese.json": () =>
            y(() => import(`./loyalty_vietnamese.js`), [], import.meta.url),
        }),
        `../../../localization/loyalty/loyalty_${e}.json`,
        6,
      ),
      n
        ? void 0
        : Re(
            Object.assign({
              "../../../localization/loyalty/loyalty_arabic.json": () =>
                y(() => import(`./loyalty_arabic.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_brazilian.json": () =>
                y(() => import(`./loyalty_brazilian.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_bulgarian.json": () =>
                y(() => import(`./loyalty_bulgarian.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_czech.json": () =>
                y(() => import(`./loyalty_czech.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_danish.json": () =>
                y(() => import(`./loyalty_danish.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_dutch.json": () =>
                y(() => import(`./loyalty_dutch.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_english.json": () =>
                y(() => import(`./loyalty_english.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_finnish.json": () =>
                y(() => import(`./loyalty_finnish.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_french.json": () =>
                y(() => import(`./loyalty_french.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_german.json": () =>
                y(() => import(`./loyalty_german.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_greek.json": () =>
                y(() => import(`./loyalty_greek.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_hungarian.json": () =>
                y(() => import(`./loyalty_hungarian.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_indonesian.json": () =>
                y(() => import(`./loyalty_indonesian.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_italian.json": () =>
                y(() => import(`./loyalty_italian.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_japanese.json": () =>
                y(() => import(`./loyalty_japanese.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_koreana.json": () =>
                y(() => import(`./loyalty_koreana.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_latam.json": () =>
                y(() => import(`./loyalty_latam.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_malay.json": () =>
                y(() => import(`./loyalty_malay.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_norwegian.json": () =>
                y(() => import(`./loyalty_norwegian.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_polish.json": () =>
                y(() => import(`./loyalty_polish.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_portuguese.json": () =>
                y(() => import(`./loyalty_portuguese.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_romanian.json": () =>
                y(() => import(`./loyalty_romanian.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_russian.json": () =>
                y(() => import(`./loyalty_russian.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_sc_schinese.json": () =>
                y(
                  () => import(`./loyalty_sc_schinese.js`),
                  [],
                  import.meta.url,
                ),
              "../../../localization/loyalty/loyalty_schinese.json": () =>
                y(() => import(`./loyalty_schinese.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_spanish.json": () =>
                y(() => import(`./loyalty_spanish.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_swedish.json": () =>
                y(() => import(`./loyalty_swedish.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_tchinese.json": () =>
                y(() => import(`./loyalty_tchinese.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_thai.json": () =>
                y(() => import(`./loyalty_thai.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_turkish.json": () =>
                y(() => import(`./loyalty_turkish.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_ukrainian.json": () =>
                y(() => import(`./loyalty_ukrainian.js`), [], import.meta.url),
              "../../../localization/loyalty/loyalty_vietnamese.json": () =>
                y(() => import(`./loyalty_vietnamese.js`), [], import.meta.url),
            }),
            `../../../localization/loyalty/loyalty_${t}.json`,
            6,
          ),
    ]);
  Ee.AddTokens(r.default, i ? i.default : void 0);
}
var yn = class extends F.Component {
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
                path: m.LoyaltyHowItWorks(),
                children: (0, J.jsx)(qt, {}),
              }),
              (0, J.jsx)(n, {
                path: m.LoyaltyStore(),
                children: (0, J.jsx)(ye, {}),
              }),
              (0, J.jsx)(n, {
                path: m.LoyaltyGiveawayRules(),
                children: (0, J.jsx)(Xt, {}),
              }),
              (0, J.jsx)(n, {
                path: m.LoyaltyEquippedProfile(`:steamid`),
                render: (e) =>
                  (0, J.jsx)($t, { steamid: e.match.params.steamid }),
              }),
              (0, J.jsx)(n, {
                children: (0, J.jsx)(a, { to: m.LoyaltyStore() }),
              }),
            ],
          }),
        })
      : (0, J.jsx)(me, {});
  }
};
async function bn() {
  let e = Oe(`loyaltystore`, `application_config`),
    t = je(Te());
  Ce.Init(t), await vn(), await ze.Get().HintLoad(), u.Get().Init(t, e);
}
var xn = bn();
export { yn as default };
