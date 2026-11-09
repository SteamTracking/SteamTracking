/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import {
  Hb as r,
  Kv as i,
  Pc as a,
  Vc as o,
  Vu as s,
  Xt as c,
  nl as l,
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
      fnHoverState: a,
      disableScreenshots: o,
      children: s,
    } = e,
    c = u.useRef(null),
    l = u.useCallback(
      (e) => {
        let n = f(t);
        n &&
          (a && a(!0),
          window.GameHover &&
            (c.current &&
              o &&
              (c.current.dataset.hoverDisableScreenshots = `true`),
            window.GameHover(r ? r() : c.current, e, `global_hover`, {
              type: n,
              id: i(t).id,
              v6: 1,
            })));
      },
      [a, r, o, t],
    ),
    p = u.useCallback(
      (e) => {
        f(t) &&
          (a && e.relatedTarget && a(!1),
          window.HideGameHover &&
            window.HideGameHover(r ? r() : c.current, e, `global_hover`));
      },
      [t, a, r],
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
  let { id: t, strExtraParams: n, fnOnClickOverride: u, strOverrideURL: m } = e,
    h = s(),
    g = c(),
    _ = o(
      m ||
        (t && `creatorid` in t
          ? a(`${r.STORE_BASE_URL}curator/${i(t).id}${n ? `?${n}` : ``}`, h, g)
          : a(
              `${r.STORE_BASE_URL}${f(t)}/${i(t).id}${n ? `?${n}` : ``}`,
              h,
              g,
            )),
    );
  return (0, d.jsx)(p, {
    ...e,
    children: (0, d.jsx)(l, {
      className: e.className,
      href: u ? void 0 : _,
      target: r.IN_CLIENT || u ? void 0 : `_blank`,
      rel: `noopener noreferrer`,
      onClick: u,
      children: e.children,
    }),
  });
}
export { p as n, m as t };
