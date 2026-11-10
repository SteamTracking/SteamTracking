/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, N as n, ft as r } from "./libraries.js";
import { ix as i } from "./main.js";
var a = e(t(), 1),
  o = e(n(), 1),
  s = `ewL7epZsubk-`,
  c = r();
function l(e) {
  let [t, n] = a.useState(!1);
  return {
    bShowSeeMoreHint: t,
    panelProps: {
      onFocusWithin: a.useCallback((t) => n(t && !!e), [e]),
      onOptionsButton: a.useCallback(() => {
        e && e.length !== 0 && (window.location.href = e);
      }, [e]),
    },
  };
}
function u(e) {
  let { label: t, shown: n } = e;
  return (0, c.jsxs)(`div`, {
    className: (0, o.default)(s, n && `lDd-amB-eCU-`),
    children: [
      (0, c.jsx)(`img`, {
        src: `${i.IMG_URL}ico_gamepad/shared_button_y.svg`,
        alt: `Y`,
      }),
      (0, c.jsx)(`div`, { children: t }),
    ],
  });
}
export { l as n, u as t };
