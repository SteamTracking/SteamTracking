/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js?contenthash=DbX3T1YK";
import { Rt as t, k as n, pt as r } from "./libraries.js?contenthash=b0JzZ9xY";
import { Jy as i, Lb as a } from "./main.js?contenthash=C1XpPKHE";
import { o, t as s } from "./layout.js?contenthash=C9c-cUkp";
import {
  _ as c,
  a as l,
  c as u,
  d,
  g as f,
  h as p,
  i as m,
  s as h,
  u as g,
  v as _,
} from "./loyalty.js?contenthash=DTyVKCuH";
var v = e(t()),
  y = `VlcajOpXVIQ-`,
  b = new URL(
    `../../../images/applications/store/showcases_header_image.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  x = r(),
  S = (e) =>
    (0, x.jsx)(d, {
      ...e,
      onClick: (t) =>
        l(t, e.customization_type, e.current_level, e.desired_level),
    }),
  C = (e) =>
    (0, x.jsx)(g, {
      ...e,
      onClick: (t) =>
        m(t, e.customization_type, e.purchased_count, e.current_level),
    }),
  w = (e) =>
    (0, x.jsx)(s, {
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
    let s = n.map((e) => {
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
    return (0, x.jsx)(o, {
      className: c,
      itemClassName: _,
      spacing: `xlarge`,
      children: (0, x.jsx)(p, {
        title: i(`#ProfileShowcases_Upgrades_Title`),
        subtitle: i(`#ProfileShowcases_Upgrades_Subtitle`),
        children: s,
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
      s = new Map(),
      l = new Map();
    n.forEach((e) => {
      s.set(e, 0), l.set(e, 1);
    }),
      r &&
        r.forEach((e) => {
          s.set(e.customization_type, e.count);
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
          purchased_count: s.get(e),
        },
        e,
      ),
    );
    return (0, x.jsx)(o, {
      className: c,
      itemClassName: _,
      spacing: `xlarge`,
      children: (0, x.jsx)(p, {
        title: i(`#ProfileShowcases_Slots_Title`),
        subtitle: i(`#ProfileShowcases_Slots_Subtitle`),
        children: u,
      }),
    });
  },
  D = class extends v.Component {
    render() {
      let e = f.Get().GetUpgradableProfileShowcaseCost(),
        t = f.Get().GetUpgradableProfileShowcases(),
        n = f.Get().GetUpgradedProfileCustomizations(),
        r = f.Get().GetPurchasableProfileShowcaseSlotCost(),
        a = f.Get().GetPurchasableProfileShowcaseSlots(),
        s = f.Get().GetPurchasedProfileCustomizations();
      return (0, x.jsx)(h, {
        children: (0, x.jsxs)(o, {
          className: c,
          itemClassName: _,
          spacing: `xlarge`,
          children: [
            (0, x.jsx)(`div`, {
              children: (0, x.jsx)(u, {
                title: i(`#ShopPageTitle_ProfileShowcases`),
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
              purchasable_showcases: a,
              purchased_showcases: s,
              purchased_upgrades: n,
            }),
            this.props.children,
          ],
        }),
      });
    }
  };
D = a([n], D);
var O = D;
export { D as ProfileShowcasesPage, O as default };
