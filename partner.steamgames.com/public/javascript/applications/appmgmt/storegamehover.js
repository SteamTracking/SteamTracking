/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { U as e, _t as t, kt as n, on as r } from "./mobx.esm.js";
import { l as i } from "./src.js";
import { Mn as a } from "./dialogs.js";
import { E as o } from "./storebrowsequerycontext.js";
import { Z as s } from "./saletags.js";
import { r as c } from "./storenaveventcontext.js";
import { c as l } from "./localization2.js";
var u = r(n(), 1),
  d = t();
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
function m(t) {
  let { id: n, strExtraParams: r, fnOnClickOverride: u, strOverrideURL: m } = t,
    h = c(),
    g = s(),
    _ = a(
      m ||
        (n && `creatorid` in n
          ? l(`${e.STORE_BASE_URL}curator/${o(n).id}${r ? `?${r}` : ``}`, h, g)
          : l(
              `${e.STORE_BASE_URL}${f(n)}/${o(n).id}${r ? `?${r}` : ``}`,
              h,
              g,
            )),
    );
  return (0, d.jsx)(p, {
    ...t,
    children: (0, d.jsx)(i, {
      className: t.className,
      href: u ? void 0 : _,
      target: e.IN_CLIENT || u ? void 0 : `_blank`,
      rel: `noopener noreferrer`,
      onClick: u,
      children: t.children,
    }),
  });
}
export { p as n, m as t };
