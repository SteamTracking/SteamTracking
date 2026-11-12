/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, W as t, sn as n, vt as r } from "./chunk~de7f2df91c.js";
import { s as i } from "./chunk~25a6634263.js";
import { Fn as a } from "./chunk~1fa4b8f2ff.js";
import { E as o } from "./chunk~0a99e05c44.js";
import { X as s } from "./chunk~6b8ddcaac8.js";
import { r as c } from "./chunk~9a06851bec.js";
import { c as l } from "./chunk~8ceeb46076.js";
var u = n(e(), 1),
  d = r();
function f(e) {
  if (e) {
    if (`appid` in e) return `app`;
    if (`bundleid` in e) return `bundle`;
    if (`packageid` in e) return `sub`;
  }
}
function p(e) {
  let {
      id: t,
      hoverClassName: n,
      fnGetIDOverride: r,
      fnHoverState: i,
      disableScreenshots: a,
      children: s,
    } = e,
    c = u.useRef(null),
    l = u.useCallback(
      (e) => {
        let n = f(t);
        n &&
          (i && i(!0),
          window.GameHover &&
            (c.current &&
              a &&
              (c.current.dataset.hoverDisableScreenshots = `true`),
            window.GameHover(r ? r() : c.current, e, `global_hover`, {
              type: n,
              id: o(t).id,
              v6: 1,
            })));
      },
      [i, r, a, t],
    ),
    p = u.useCallback(
      (e) => {
        f(t) &&
          (i && e.relatedTarget && i(!1),
          window.HideGameHover &&
            window.HideGameHover(r ? r() : c.current, e, `global_hover`));
      },
      [t, i, r],
    );
  return (0, d.jsx)(`div`, {
    ref: c,
    className: n,
    onMouseEnter: l,
    onMouseLeave: p,
    onFocus: l,
    onBlur: p,
    children: s,
  });
}
function m(e) {
  let { id: n, strExtraParams: r, fnOnClickOverride: u, strOverrideURL: m } = e,
    h = c(),
    g = s(),
    _ = a(
      m ||
        (n && `creatorid` in n
          ? l(`${t.STORE_BASE_URL}curator/${o(n).id}${r ? `?${r}` : ``}`, h, g)
          : l(
              `${t.STORE_BASE_URL}${f(n)}/${o(n).id}${r ? `?${r}` : ``}`,
              h,
              g,
            )),
    );
  return (0, d.jsx)(p, {
    ...e,
    children: (0, d.jsx)(i, {
      className: e.className,
      href: u ? void 0 : _,
      target: t.IN_CLIENT || u ? void 0 : `_blank`,
      rel: `noopener noreferrer`,
      onClick: u,
      children: e.children,
    }),
  });
}
export { p as n, m as t };
