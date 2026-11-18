/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, N as n, ft as r } from "./chunk~01cfc309bf.js";
import { Kr as i } from "./main.js";
var a = e(t(), 1),
  o = e(n(), 1),
  s = `ewL7epZsubk-`,
  c = `data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.5%2016C30.5%2024.0081%2024.0081%2030.5%2016%2030.5C7.99187%2030.5%201.5%2024.0081%201.5%2016C1.5%207.99187%207.99187%201.5%2016%201.5C24.0081%201.5%2030.5%207.99187%2030.5%2016Z'%20fill='white'/%3e%3cpath%20d='M17.3817%2022.5H14.6183V17.1193L10%209H13.2177L16.0946%2014.4L18.9905%209H22L17.3817%2017.1386V22.5Z'%20fill='%230E141B'/%3e%3c/svg%3e`,
  l = r();
function u(e, t = `Y`) {
  let [n, r] = a.useState(!1),
    i = a.useCallback((t) => r(t && !!e), [e]),
    o = a.useCallback(() => {
      e && e.length !== 0 && (window.location.href = e);
    }, [e]);
  return {
    bShowSeeMoreHint: n,
    panelProps:
      t == `X`
        ? { onFocusWithin: i, onSecondaryButton: o }
        : { onFocusWithin: i, onOptionsButton: o },
  };
}
function d(e) {
  let { label: t, shown: n, button: r = `Y` } = e;
  return (0, l.jsxs)(`div`, {
    className: (0, o.default)(s, n && `lDd-amB-eCU-`),
    children: [
      r == `X`
        ? (0, l.jsx)(i, { button: `X`, "aria-label": `X` })
        : (0, l.jsx)(`img`, { src: c, alt: `Y` }),
      (0, l.jsx)(`div`, { children: t }),
    ],
  });
}
export { u as n, d as t };
