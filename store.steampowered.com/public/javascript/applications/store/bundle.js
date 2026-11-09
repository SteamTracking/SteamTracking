/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./rolldown-runtime.js";
import { Lt as e, P as t, ft as n, l as r } from "./libraries.js";
import {
  A as i,
  M as a,
  S as o,
  T as s,
  _ as c,
  g as l,
  l as u,
  p as d,
  u as f,
  v as p,
  x as m,
} from "./rewardsshop.js";
import "./steammessages_loyalty_rewards_pb.js";
import { Iu as h, Sc as g, Uy as _ } from "./main.js";
import { t as v } from "./layout.js";
e();
var y = `YUOqKgPXmCU-`,
  b = `zWVeNNgiLlw-`,
  x = `_3FNdh1NAvXg-`,
  S = `jZFDBQTnlmM-`,
  C = n(),
  w = r((e) => {
    let { bundleid: n } = e.match.params,
      r = parseInt(n),
      i = (0, C.jsx)(t, { to: h.LoyaltyStore() });
    if (isNaN(r)) return i;
    let [o] = a.Get().GetRewardDefinitions(r);
    return o
      ? o.type !== 5 && o.type !== 6
        ? i
        : (0, C.jsx)(T, { bundle: o })
      : null;
  }),
  T = r((e) => {
    let { bundle: t } = e,
      n = a.Get().GetBundleOfferForUser(t);
    return (0, C.jsx)(l, {
      children: (0, C.jsxs)(v, {
        paddingY: `xlarge`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        children: [
          (0, C.jsx)(E, { bundle: t, offer: n }),
          n.point_cost === 0
            ? (0, C.jsx)(D, { className: y })
            : (0, C.jsx)(u, {
                cost: n.point_cost,
                discount: n.discount,
                originalCost: n.original_point_cost,
                className: y,
                onClick: (e) => d(e, t),
              }),
          (0, C.jsx)(O, { offer: n }),
        ],
      }),
    });
  }),
  E = r(({ bundle: e, offer: t }) => {
    let n = o(e),
      r = _(`#RewardBundle_OfferDescription`, t.discount);
    return (0, C.jsx)(v, {
      paddingBottom: `xlarge`,
      children: (0, C.jsx)(c, { title: n, subtitle: r }),
    });
  }),
  D = ({ className: e }) =>
    (0, C.jsxs)(`div`, {
      className: g(e, x),
      children: [
        (0, C.jsx)(s, { className: b }),
        (0, C.jsx)(`span`, {
          className: S,
          children: _(`#Redeem_BundleItemOwned`),
        }),
      ],
    }),
  O = r((e) => {
    let { offer: t } = e;
    return (0, C.jsx)(i, {
      title: _(`#RewardBundle_BundleContentsSection_Title`),
      children: (0, C.jsx)(p, {
        getItems: (e, n) => ({
          rewards: t.items.slice(e, n),
          bLoadingMore: !1,
          cTotalMatching: t.items.length,
          cMaxToReturn: t.items.length,
        }),
        renderItem: (e) =>
          (0, C.jsx)(
            m,
            { definition: e, purchaseable: !1, onClick: (t) => f(t, e) },
            e.defid,
          ),
      }),
    });
  });
export { w as default };
