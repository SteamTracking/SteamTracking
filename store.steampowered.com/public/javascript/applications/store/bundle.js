/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./chunk~f025431ab0.js";
import { Lt as e, P as t, ft as n, l as r } from "./chunk~01cfc309bf.js";
import "./chunk~4e18b7e430.js";
import { Jy as i, Vu as a, wc as o } from "./main.js";
import { t as s } from "./chunk~915930a63a.js";
import {
  c,
  f as l,
  g as u,
  h as d,
  l as f,
  m as p,
  n as m,
  o as h,
  p as g,
  r as _,
  s as v,
} from "./chunk~47a0a99af9.js";
e();
var y = `YUOqKgPXmCU-`,
  b = `zWVeNNgiLlw-`,
  x = `_3FNdh1NAvXg-`,
  S = `jZFDBQTnlmM-`,
  C = n(),
  w = r((e) => {
    let { bundleid: n } = e.match.params,
      r = parseInt(n),
      i = (0, C.jsx)(t, { to: a.LoyaltyStore() });
    if (isNaN(r)) return i;
    let [o] = u.Get().GetRewardDefinitions(r);
    return o
      ? o.type !== 5 && o.type !== 6
        ? i
        : (0, C.jsx)(T, { bundle: o })
      : null;
  }),
  T = r((e) => {
    let { bundle: t } = e,
      n = u.Get().GetBundleOfferForUser(t);
    return (0, C.jsx)(v, {
      children: (0, C.jsxs)(s, {
        paddingY: `xlarge`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        children: [
          (0, C.jsx)(E, { bundle: t, offer: n }),
          n.point_cost === 0
            ? (0, C.jsx)(D, { className: y })
            : (0, C.jsx)(m, {
                cost: n.point_cost,
                discount: n.discount,
                originalCost: n.original_point_cost,
                className: y,
                onClick: (e) => h(e, t),
              }),
          (0, C.jsx)(O, { offer: n }),
        ],
      }),
    });
  }),
  E = r(({ bundle: e, offer: t }) => {
    let n = g(e),
      r = i(`#RewardBundle_OfferDescription`, t.discount);
    return (0, C.jsx)(s, {
      paddingBottom: `xlarge`,
      children: (0, C.jsx)(c, { title: n, subtitle: r }),
    });
  }),
  D = ({ className: e }) =>
    (0, C.jsxs)(`div`, {
      className: o(e, x),
      children: [
        (0, C.jsx)(p, { className: b }),
        (0, C.jsx)(`span`, {
          className: S,
          children: i(`#Redeem_BundleItemOwned`),
        }),
      ],
    }),
  O = r((e) => {
    let { offer: t } = e;
    return (0, C.jsx)(d, {
      title: i(`#RewardBundle_BundleContentsSection_Title`),
      children: (0, C.jsx)(f, {
        getItems: (e, n) => ({
          rewards: t.items.slice(e, n),
          bLoadingMore: !1,
          cTotalMatching: t.items.length,
          cMaxToReturn: t.items.length,
        }),
        renderItem: (e) =>
          (0, C.jsx)(
            l,
            { definition: e, purchaseable: !1, onClick: (t) => _(t, e) },
            e.defid,
          ),
      }),
    });
  });
export { w as default };
