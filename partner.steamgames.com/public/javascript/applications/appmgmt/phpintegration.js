/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  sn as t,
  t as n,
  vt as r,
  z as i,
} from "./chunk~de7f2df91c.js";
import {
  C as a,
  H as o,
  N as s,
  Ot as c,
  Rt as l,
  r as u,
  ut as d,
} from "./chunk~25a6634263.js";
import { Ua as f } from "./chunk~1fa4b8f2ff.js";
var p = t(e(), 1),
  m = r(),
  h = p.forwardRef(function (e, t) {
    let { children: n, navTreeRef: r, ...s } = e,
      l = p.useRef(void 0),
      u = c(l, r),
      d = i(),
      h = o(`__nav_tree_root`);
    return (0, m.jsx)(a, {
      ...s,
      navTreeRef: u,
      ref: t,
      parentEmbeddedNavTree: h,
      disabledRoot: !d,
      historyMode: `navigationapi`,
      "flow-children": `column`,
      children: (0, m.jsx)(f, { disableFocusRing: !d, children: n }),
    });
  }),
  g = t(n());
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
    n = s(),
    r = p.useRef([]),
    i = p.useRef(0);
  return (
    p.useEffect(() => {
      let e = `[data-featuretarget=${t}]`;
      ((r.current = []), (i.current = 0));
      let a = (e) => r.current.push({ key: i.current++, elem: e }),
        o = (e) => l(r.current, (t) => t.elem == e);
      (document.querySelectorAll(e).forEach(a), r.current.length && n());
      let s = new MutationObserver((t) => {
        let r = !1;
        for (let n of t)
          d(
            n,
            (t) => {
              S(t, e).forEach((e) => {
                (a(e), (r = !0));
              });
            },
            (t) => {
              S(t, e).forEach((e) => {
                (o(e), (r = !0));
              });
            },
          );
        r && n();
      });
      return (
        s.observe(document, { childList: !0, subtree: !0 }),
        () => s.disconnect()
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
