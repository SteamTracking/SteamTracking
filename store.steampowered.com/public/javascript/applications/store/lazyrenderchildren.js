/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n } from "./chunk~01cfc309bf.js";
import { Vc as r, vt as i } from "./main.js";
var a = e(t(), 1),
  o = n(),
  s = a.createContext({ enabled: !0 });
function c(e) {
  let { enabled: t, children: n } = e,
    r = a.useMemo(() => ({ enabled: t }), [t]);
  return (0, o.jsx)(s.Provider, { value: r, children: n });
}
function l(e) {
  let {
      placeholderWidth: t,
      placeholderHeight: n,
      holdGamepadFocus: c = !1,
      releaseGamepadFocusWhenEmpty: l = !1,
      onRender: d,
      style: f,
      mode: p = `JustLoad`,
      children: m,
      ...h
    } = e,
    g = a.useContext(s),
    [_, v] = a.useState(() => ({
      bRenderChildren: !g.enabled,
      nPrevRenderHeight: 0,
      nPrevRenderWidth: 0,
    })),
    y = a.useRef(null),
    b = p === `LoadAndUnload` && g.enabled,
    x = a.useCallback(
      (e) => {
        v((t) => {
          if (t.bRenderChildren === e || (t.bRenderChildren && !b)) return t;
          let n = 0,
            r = 0;
          if (y.current) {
            let e = y.current.getBoundingClientRect();
            e && ((n = e.width), (r = e.height));
          }
          return (
            e && d && d(),
            { bRenderChildren: e, nPrevRenderWidth: n, nPrevRenderHeight: r }
          );
        });
      },
      [b, d],
    );
  a.useEffect(() => {
    g.enabled || x(!0);
  }, [g.enabled, x]);
  let S = f;
  if (!_.bRenderChildren) {
    let e = _.nPrevRenderWidth || t,
      r = _.nPrevRenderHeight || n;
    (r !== void 0 || e !== void 0) && (S = { ...f, minHeight: r, minWidth: e });
  }
  let C = b ? `repeated` : `once`,
    w = (0, o.jsx)(i, {
      containerRef: y,
      style: S,
      ...h,
      onVisibilityChange: x,
      trigger: C,
      children: _.bRenderChildren && m,
    });
  return (
    c &&
      (w = (0, o.jsx)(r, {
        focusableIfEmpty: !0,
        style: { height: `100%` },
        fnCanTakeFocus: l && _.bRenderChildren ? u : void 0,
        children: w,
      })),
    w
  );
}
function u(e) {
  return e.m_rgChildren.some((e) => {
    let t = e.GetFocusable();
    return t === `self` || (t === `children` && u(e));
  });
}
export { l as n, c as t };
