/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { Ac as r, _t as i } from "./main.js";
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
      onRender: l,
      style: u,
      mode: d = `JustLoad`,
      children: f,
      ...p
    } = e,
    m = a.useContext(s),
    [h, g] = a.useState(() => ({
      bRenderChildren: !m.enabled,
      nPrevRenderHeight: 0,
      nPrevRenderWidth: 0,
    })),
    _ = a.useRef(null),
    v = d === `LoadAndUnload` && m.enabled,
    y = a.useCallback(
      (e) => {
        g((t) => {
          if (t.bRenderChildren === e || (t.bRenderChildren && !v)) return t;
          let n = 0,
            r = 0;
          if (_.current) {
            let e = _.current.getBoundingClientRect();
            e && ((n = e.width), (r = e.height));
          }
          return (
            e && l && l(),
            { bRenderChildren: e, nPrevRenderWidth: n, nPrevRenderHeight: r }
          );
        });
      },
      [v, l],
    );
  a.useEffect(() => {
    m.enabled || y(!0);
  }, [m.enabled, y]);
  let b = u;
  if (!h.bRenderChildren) {
    let e = h.nPrevRenderWidth || t,
      r = h.nPrevRenderHeight || n;
    (r !== void 0 || e !== void 0) && (b = { ...u, minHeight: r, minWidth: e });
  }
  let x = v ? `repeated` : `once`,
    S = (0, o.jsx)(i, {
      containerRef: _,
      style: b,
      ...p,
      onVisibilityChange: y,
      trigger: x,
      children: h.bRenderChildren && f,
    });
  return (
    c &&
      (S = (0, o.jsx)(r, {
        focusableIfEmpty: !0,
        style: { height: `100%` },
        children: S,
      })),
    S
  );
}
export { l as n, c as t };
