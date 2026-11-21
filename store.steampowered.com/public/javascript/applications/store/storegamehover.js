/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import {
  Gc as r,
  Qc as i,
  Zt as a,
  hl as o,
  nx as s,
  oy as c,
  td as l,
} from "./main.js";
var u = e(t(), 1),
  d = n();
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
      children: o,
    } = e,
    s = u.useRef(null),
    l = u.useCallback(
      (e) => {
        let n = f(t);
        n &&
          (i && i(!0),
          window.GameHover &&
            (s.current &&
              a &&
              (s.current.dataset.hoverDisableScreenshots = `true`),
            window.GameHover(r ? r() : s.current, e, `global_hover`, {
              type: n,
              id: c(t).id,
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
            window.HideGameHover(r ? r() : s.current, e, `global_hover`));
      },
      [t, i, r],
    );
  return (0, d.jsx)(`div`, {
    ref: s,
    className: n,
    onMouseEnter: l,
    onMouseLeave: p,
    onFocus: l,
    onBlur: p,
    children: o,
  });
}
function m(e) {
  let { id: t, strExtraParams: n, fnOnClickOverride: u, strOverrideURL: m } = e,
    h = l(),
    g = a(),
    _ = i(
      m ||
        (t && `creatorid` in t
          ? r(`${s.STORE_BASE_URL}curator/${c(t).id}${n ? `?${n}` : ``}`, h, g)
          : r(
              `${s.STORE_BASE_URL}${f(t)}/${c(t).id}${n ? `?${n}` : ``}`,
              h,
              g,
            )),
    );
  return (0, d.jsx)(p, {
    ...e,
    children: (0, d.jsx)(o, {
      className: e.className,
      href: u ? void 0 : _,
      target: s.IN_CLIENT || u ? void 0 : `_blank`,
      rel: `noopener noreferrer`,
      onClick: u,
      children: e.children,
    }),
  });
}
export { p as n, m as t };
