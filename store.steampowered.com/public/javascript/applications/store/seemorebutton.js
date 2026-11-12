/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, N as n, ft as r } from "./chunk~01cfc309bf.js";
var i = e(t(), 1),
  a = e(n(), 1),
  o = `ewL7epZsubk-`,
  s = `data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.5%2016C30.5%2024.0081%2024.0081%2030.5%2016%2030.5C7.99187%2030.5%201.5%2024.0081%201.5%2016C1.5%207.99187%207.99187%201.5%2016%201.5C24.0081%201.5%2030.5%207.99187%2030.5%2016Z'%20fill='white'/%3e%3cpath%20d='M17.3817%2022.5H14.6183V17.1193L10%209H13.2177L16.0946%2014.4L18.9905%209H22L17.3817%2017.1386V22.5Z'%20fill='%230E141B'/%3e%3c/svg%3e`,
  c = r();
function l(e) {
  let [t, n] = i.useState(!1);
  return {
    bShowSeeMoreHint: t,
    panelProps: {
      onFocusWithin: i.useCallback((t) => n(t && !!e), [e]),
      onOptionsButton: i.useCallback(() => {
        e && e.length !== 0 && (window.location.href = e);
      }, [e]),
    },
  };
}
function u(e) {
  let { label: t, shown: n } = e;
  return (0, c.jsxs)(`div`, {
    className: (0, a.default)(o, n && `lDd-amB-eCU-`),
    children: [
      (0, c.jsx)(`img`, { src: s, alt: `Y` }),
      (0, c.jsx)(`div`, { children: t }),
    ],
  });
}
export { l as n, u as t };
