/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js?contenthash=C8f2gWku";
import { Lt as t, ft as n, l as r } from "./libraries.js?contenthash=CNC_iAx3";
import {
  A as i,
  M as a,
  N as o,
  P as s,
  _ as c,
  b as l,
  d as u,
  f as d,
  g as f,
  y as p,
} from "./rewardsshop.js?contenthash=C_qe3Od4";
import { Mb as m, Uy as h } from "./main.js?contenthash=BznMolNX";
import { o as g, t as _ } from "./layout.js?contenthash=lKAUroBd";
var v = e(t()),
  y = `VlcajOpXVIQ-`,
  b = new URL(
    `../../../images/applications/store/showcases_header_image.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  x = n(),
  S = (e) =>
    (0, x.jsx)(l, {
      ...e,
      onClick: (t) =>
        d(t, e.customization_type, e.current_level, e.desired_level),
    }),
  C = (e) =>
    (0, x.jsx)(p, {
      ...e,
      onClick: (t) =>
        u(t, e.customization_type, e.purchased_count, e.current_level),
    }),
  w = (e) =>
    (0, x.jsx)(_, {
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `center`,
      alignItems: `center`,
      paddingTop: `small`,
      className: void 0,
      children: (0, x.jsx)(`img`, { src: b, className: y }),
    }),
  T = (e) => {
    let { point_cost: t, upgradable_showcases: n, purchased_upgrades: r } = e,
      a = new Map();
    n.forEach((e) => {
      a.set(e, 1);
    }),
      r &&
        r.forEach((e) => {
          a.set(e.customization_type, e.level);
        });
    let c = n.map((e) => {
      let n = a.get(e),
        r = n + 1;
      return (0, x.jsx)(
        S,
        {
          point_cost: t,
          customization_type: e,
          current_level: n,
          desired_level: r,
        },
        e,
      );
    });
    return (0, x.jsx)(g, {
      className: o,
      itemClassName: s,
      spacing: `xlarge`,
      children: (0, x.jsx)(i, {
        title: h(`#ProfileShowcases_Upgrades_Title`),
        subtitle: h(`#ProfileShowcases_Upgrades_Subtitle`),
        children: c,
      }),
    });
  },
  E = (e) => {
    let {
        point_cost: t,
        purchasable_showcases: n,
        purchased_showcases: r,
        purchased_upgrades: a,
      } = e,
      c = new Map(),
      l = new Map();
    n.forEach((e) => {
      c.set(e, 0), l.set(e, 1);
    }),
      r &&
        r.forEach((e) => {
          c.set(e.customization_type, e.count);
        }),
      a &&
        a.forEach((e) => {
          l.set(e.customization_type, e.level);
        });
    let u = n.map((e) =>
      (0, x.jsx)(
        C,
        {
          point_cost: t,
          current_level: l.get(e),
          customization_type: e,
          purchased_count: c.get(e),
        },
        e,
      ),
    );
    return (0, x.jsx)(g, {
      className: o,
      itemClassName: s,
      spacing: `xlarge`,
      children: (0, x.jsx)(i, {
        title: h(`#ProfileShowcases_Slots_Title`),
        subtitle: h(`#ProfileShowcases_Slots_Subtitle`),
        children: u,
      }),
    });
  },
  D = class extends v.Component {
    render() {
      let e = a.Get().GetUpgradableProfileShowcaseCost(),
        t = a.Get().GetUpgradableProfileShowcases(),
        n = a.Get().GetUpgradedProfileCustomizations(),
        r = a.Get().GetPurchasableProfileShowcaseSlotCost(),
        i = a.Get().GetPurchasableProfileShowcaseSlots(),
        l = a.Get().GetPurchasedProfileCustomizations();
      return (0, x.jsx)(f, {
        children: (0, x.jsxs)(g, {
          className: o,
          itemClassName: s,
          spacing: `xlarge`,
          children: [
            (0, x.jsx)(`div`, {
              children: (0, x.jsx)(c, {
                title: h(`#ShopPageTitle_ProfileShowcases`),
              }),
            }),
            (0, x.jsx)(w, {}),
            (0, x.jsx)(T, {
              point_cost: e,
              upgradable_showcases: t,
              purchased_upgrades: n,
            }),
            (0, x.jsx)(E, {
              point_cost: r,
              purchasable_showcases: i,
              purchased_showcases: l,
              purchased_upgrades: n,
            }),
            this.props.children,
          ],
        }),
      });
    }
  };
D = m([r], D);
var O = D;
export { D as ProfileShowcasesPage, O as default };
