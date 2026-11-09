/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./rolldown-runtime.js";
import { Lt as n, ft as r } from "./libraries.js";
import { u as i } from "./clanimagemodels.js";
import { t as a } from "./image.js";
import {
  H as o,
  R as s,
  V as c,
  i as l,
  r as u,
  z as d,
} from "./basicbbcodeparser.js";
import {
  $b as f,
  Hb as p,
  Hc as m,
  Qb as h,
  ba as g,
  nl as _,
  va as v,
  ya as y,
} from "./main.js";
var b = e(n(), 1),
  x = t({
    Separator: () => S,
    "Size-1": () => C,
    "Size-2": () => w,
    "Size-3": () => T,
    "Size-4": () => E,
    default: () => D,
  }),
  S = `vNNhEahPBA0-`,
  C = `cG3Bl0aMLsI-`,
  w = `sTGfTmWlAtM-`,
  T = `SaUen44WwpY-`,
  E = `KZc7C2EnUyw-`,
  D = {
    Separator: S,
    "Size-1": `cG3Bl0aMLsI-`,
    "Size-2": `sTGfTmWlAtM-`,
    "Size-3": `SaUen44WwpY-`,
    "Size-4": `KZc7C2EnUyw-`,
  },
  O = r();
function k(e) {
  let { orientation: t = `horizontal`, size: n = `1`, ...r } = e;
  return (0, O.jsx)(`div`, {
    role: `separator`,
    "aria-orientation": t,
    ...g({ ...r, size: n, className: S }, A),
  });
}
var A = [
  ...v,
  { prop: `size`, className: (e) => x[`Size-${e}`], responsive: !0 },
  { prop: `color`, cssProperty: (e) => [`--separator-color`, y(e)] },
];
function j(e, t) {
  return {
    store_page_asset_url: `${p.BASE_URL_SHARED_CDN}store_item_assets/steam/apps/${e}/%s?t=${t}`,
  };
}
var M = b.createContext({ store_page_asset_url: `` });
function N(e) {
  let t =
    e.store_page_asset_url === void 0
      ? j(e.appid, e.app_last_modified)
      : { store_page_asset_url: e.store_page_asset_url };
  return (0, O.jsx)(M.Provider, { value: t, children: e.children });
}
var P = () => b.useContext(M);
function F() {
  let { store_page_asset_url: e } = P();
  return b.useCallback(
    (t) => {
      if (t) {
        if (t.startsWith(`{STEAM_APP_IMAGE}/`)) {
          let n = t.replace(i + `/`, ``);
          return e.replace(`%s`, n);
        }
        return t;
      }
    },
    [e],
  );
}
var I = `Ni6YiwQWBXM-`,
  L = `JH6u-fBBvEI-`,
  R = `ebS1BwVurMY-`;
function z(e) {
  return new o(new c());
}
function B(e) {
  let t = new Map([
    ...Array.from(u.entries()),
    [`img`, { Constructor: G, autocloses: !1 }],
    [`sup`, { Constructor: V, autocloses: !1 }],
    [`h6`, { Constructor: H, autocloses: !1, skipFollowingNewline: !0 }],
  ]);
  return (e && t.set(`url`, { Constructor: U, autocloses: !1 }), t);
}
function V(e) {
  return (0, O.jsx)(`sup`, { children: e.children });
}
function H(e) {
  return (0, O.jsx)(`h6`, { children: e.children });
}
function U(e) {
  let t = s(l(e.args));
  return (
    !t && typeof e.children == `string` && m(e.children) && (t = s(e.children)),
    t ? (0, O.jsx)(_, { href: t, children: e.children }) : e.children || ``
  );
}
function W(e) {
  let { text: t, languageOverride: n, bBypassLinkFilter: r } = e,
    [i] = (0, b.useState)(new d(B(r), z, n || 0));
  return (0, O.jsx)(`div`, {
    className: I,
    children: i.ParseBBCode(t, {}, !0),
  });
}
function G(e) {
  let { showErrorInfo: t } = e.context,
    n = F(),
    r = e.args.alt ?? ``;
  if (e.args.mp4 || e.args.webm) {
    let t = n(e.args.webm),
      i = n(e.args.mp4),
      a = n(e.args.poster),
      o = f() || h();
    return (0, O.jsxs)(`video`, {
      className: R,
      poster: a,
      "aria-label": r,
      autoPlay: !0,
      muted: !0,
      loop: !0,
      playsInline: !0,
      onClick: (e) => {
        let t = e.currentTarget;
        t.paused ? t.play() : t.pause();
      },
      children: [
        t && !o && (0, O.jsx)(`source`, { src: t, type: `video/webm` }),
        i &&
          !p.IN_CLIENT &&
          (0, O.jsx)(`source`, { src: i, type: `video/mp4` }),
      ],
    });
  }
  {
    let i = n(e.args.src);
    return t
      ? (0, O.jsx)(a, { className: L, src: i })
      : (0, O.jsx)(`img`, { className: L, src: i, alt: r });
  }
}
export { N as n, k as r, W as t };
