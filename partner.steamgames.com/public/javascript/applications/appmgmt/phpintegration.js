/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { R as e, _t as t, kt as n, on as r } from "./mobx.esm.js";
import {
  At as i,
  F as a,
  T as o,
  Vt as s,
  W as c,
  ft as l,
  r as u,
} from "./src.js";
import { za as d } from "./dialogs.js";
import { E as f } from "./react-router.js";
var p = r(n(), 1),
  m = t(),
  h = p.forwardRef(function (t, n) {
    let { children: r, navTreeRef: a, ...s } = t,
      l = p.useRef(void 0),
      u = i(l, a),
      f = e(),
      h = c(`__nav_tree_root`);
    return (0, m.jsx)(o, {
      ...s,
      navTreeRef: u,
      ref: n,
      parentEmbeddedNavTree: h,
      disabledRoot: !f,
      historyMode: `navigationapi`,
      "flow-children": `column`,
      children: (0, m.jsx)(d, { disableFocusRing: !f, children: r }),
    });
  }),
  g = r(f());
function _({
  config: e,
  isDynamic: t,
  omitFocusNavTreeBridge: n,
  takeGamepadFocusOnMount: r,
}) {
  let i = t ? y : v;
  return (0, m.jsx)(p.Fragment, {
    children: Object.keys(e || {}).map((t) =>
      (0, m.jsx)(
        i,
        {
          featureName: t,
          render: e[t],
          omitFocusNavTreeBridge: !!n,
          takeGamepadFocusOnMount: !!r,
        },
        t,
      ),
    ),
  });
}
function v(e) {
  let { featureName: t } = e,
    n = p.useMemo(
      () => Array.from(document.querySelectorAll(`[data-featuretarget=${t}]`)),
      [t],
    );
  return n.length
    ? (0, m.jsx)(m.Fragment, {
        children: n.map((t, n) => (0, m.jsx)(b, { elem: t, ...e }, n)),
      })
    : null;
}
function y(e) {
  let { featureName: t } = e,
    n = a(),
    r = p.useRef([]),
    i = p.useRef(0);
  return (
    p.useEffect(() => {
      let e = `[data-featuretarget=${t}]`;
      (r.current = []), (i.current = 0);
      let a = (e) => r.current.push({ key: i.current++, elem: e }),
        o = (e) => s(r.current, (t) => t.elem == e);
      document.querySelectorAll(e).forEach(a), r.current.length && n();
      let c = new MutationObserver((t) => {
        let r = !1;
        for (let n of t)
          l(
            n,
            (t) => {
              S(t, e).forEach((e) => {
                a(e), (r = !0);
              });
            },
            (t) => {
              S(t, e).forEach((e) => {
                o(e), (r = !0);
              });
            },
          );
        r && n();
      });
      return (
        c.observe(document, { childList: !0, subtree: !0 }),
        () => c.disconnect()
      );
    }, [t, n]),
    (0, m.jsx)(m.Fragment, {
      children: r.current.map(({ key: t, elem: n }) =>
        (0, m.jsx)(b, { elem: n, ...e }, t),
      ),
    })
  );
}
function b(e) {
  let {
      featureName: t,
      elem: n,
      render: r,
      omitFocusNavTreeBridge: i,
      takeGamepadFocusOnMount: a,
    } = e,
    o = p.useMemo(() => x(n.getAttribute(`data-props`), t), [n, t]),
    s = p.useRef(void 0);
  return (
    p.useEffect(() => {
      s.current && a && s.current.Activate(!0);
    }, [a, s]),
    i
      ? (0, g.createPortal)(
          (0, m.jsx)(u, {
            children: (0, m.jsx)(p.Suspense, { children: r(o) }),
          }),
          n,
        )
      : (0, g.createPortal)(
          (0, m.jsx)(u, {
            children: (0, m.jsx)(h, {
              navID: `FeatureTarget_${t}`,
              navTreeRef: s,
              children: (0, m.jsx)(p.Suspense, { children: r(o) }),
            }),
          }),
          n,
        )
  );
}
function x(e, t) {
  if (!e) return {};
  try {
    let t = JSON.parse(e);
    if (!t || typeof t != `object` || Array.isArray(t)) throw Error();
    return t;
  } catch (n) {
    return (
      console.error(
        `There was a problem parsing props for feature target "${t}"`,
        n,
      ),
      console.log(`Problematic string: >>>${e}<<<`),
      {}
    );
  }
}
function S(e, t) {
  return e.matches(t) ? [e] : e.querySelectorAll(t);
}
export { _ as t };
