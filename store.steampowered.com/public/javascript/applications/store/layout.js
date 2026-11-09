/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { Sc as r, kc as i, zb as a } from "./main.js";
var o = e(t()),
  s = `ebvruITp5l4-`,
  c = `lpZBduTm0mM-`,
  l = {};
function u(e) {
  let [t, n] = (0, o.useState)(!1);
  return (
    (0, o.useEffect)(() => {
      let t = !0;
      l[e]
        ? l[e].refCount++
        : (l[e] = { list: window.matchMedia(e), refCount: 1 });
      let r = l[e].list,
        i = () => {
          t && n(r.matches);
        };
      return (
        i(),
        r.addEventListener(`change`, i),
        () => {
          (t = !1),
            r.removeEventListener(`change`, i),
            l[e].refCount--,
            l[e].refCount === 0 && delete l[e];
        }
      );
    }, [e]),
    t
  );
}
var d = n(),
  f = (0, o.forwardRef)(function (e, t) {
    let {
        component: n,
        padding: a,
        paddingX: o,
        paddingY: s,
        paddingRight: c,
        paddingLeft: l,
        paddingTop: u,
        paddingBottom: f,
        margin: p,
        marginX: m,
        marginY: h,
        marginLeft: g,
        marginTop: _,
        marginRight: v,
        marginBottom: y,
        display: b,
        flexDirection: x,
        flexWrap: S,
        justifyContent: C,
        alignItems: T,
        flexGrow: E,
        flexShrink: D,
        flexBasis: O,
        flex: k,
        className: A,
        style: j,
        ...M
      } = e,
      N = r(
        w(`padding-left`, l || o || a),
        w(`padding-top`, u || s || a),
        w(`padding-right`, c || o || a),
        w(`padding-bottom`, f || s || a),
        w(`margin-left`, g || m || p),
        w(`margin-top`, _ || h || p),
        w(`margin-right`, v || m || p),
        w(`margin-bottom`, y || h || p),
        A,
      ),
      P = {
        display: b,
        flexDirection: x,
        flexWrap: S,
        justifyContent: C,
        alignItems: T,
        flexGrow: E,
        flexShrink: D,
        flexBasis: O,
        flex: k,
        ...j,
      },
      F = { className: N, style: P, ref: t, ...M };
    return n
      ? (0, d.jsx)(n, { ...F })
      : (0, d.jsx)(i, { className: N, style: P, ref: t, ...M });
  }),
  p = (0, o.forwardRef)(function (e, t) {
    let {
        children: n,
        style: r,
        spacing: a,
        horizontalSpacing: c,
        verticalSpacing: l,
        itemClassName: u,
        "flow-children": p = `row`,
        ...m
      } = e,
      g = v(),
      _ = g.spacing[E(c || a || `none`)],
      y = g.spacing[E(l || a || `none`)];
    return (0, d.jsx)(i, {
      "flow-children": p,
      ref: t,
      style: { ...(r || {}), marginTop: h(-y) },
      ...m,
      children: (0, d.jsx)(`div`, {
        style: { marginInlineStart: h(-_) },
        className: s,
        children: o.Children.map(n, (e) =>
          e == null
            ? null
            : (0, d.jsx)(f, {
                paddingLeft: c || a,
                paddingTop: l || a,
                className: u,
                children: e,
              }),
        ),
      }),
    });
  }),
  m = (0, o.forwardRef)(function (e, t) {
    let { spacing: n, itemClassName: a, children: s, className: l, ...u } = e,
      p = o.Children.count(s);
    return (0, d.jsx)(i, {
      "flow-children": `column`,
      ref: t,
      className: l,
      ...u,
      children: o.Children.map(s, (e, t) =>
        e == null
          ? null
          : (0, d.jsx)(f, {
              paddingBottom: t === p - 1 ? void 0 : n,
              className: r(a, c),
              children: e,
            }),
      ),
    });
  }),
  h = (e) => `${e}px`,
  g = {
    spacing: {
      none: 0,
      xxsmall: 4,
      xsmall: 8,
      small: 12,
      medium: 20,
      large: 32,
      xlarge: 48,
      xxlarge: 96,
      xxxlarge: 192,
    },
    breakpoint: { mobile: 0, tablet: 740, desktop: 965 },
  },
  _ = (0, o.createContext)(g),
  v = () => (0, o.useContext)(_),
  y = (e) => {
    let { config: t, children: n } = e,
      r = t || g,
      i = (0, o.useMemo)(() => b(r), [r]),
      [a, s] = (0, o.useState)(0);
    return (
      (0, o.useLayoutEffect)(() => {
        s((e) => e + 1);
      }, [i]),
      (0, d.jsxs)(o.Fragment, {
        children: [(0, d.jsx)(`style`, { children: i }), n],
      })
    );
  };
function b(e) {
  return [
    `padding`,
    `padding-top`,
    `padding-bottom`,
    `padding-right`,
    `padding-left`,
    `margin`,
    `margin-left`,
    `margin-top`,
    `margin-right`,
    `margin-bottom`,
  ]
    .map((t) =>
      Object.keys(e.spacing)
        .map((n) => C(t, n, e.spacing[n]))
        .join(`
`),
    )
    .join(`
`);
}
var x = (e, t) => `${e}-${t}`,
  S = {
    "padding-left": `padding-inline-start`,
    "padding-right": `padding-inline-end`,
    "margin-left": `margin-inline-start`,
    "margin-right": `margin-inline-end`,
  },
  C = (e, t, n) => `.${x(e, t)} { ${S[e] ?? e}: ${n}px; }`,
  w = (e, t) => {
    let n = E(t);
    return t ? x(e, n) : ``;
  };
function T(e) {
  let t = v(),
    n = E(e);
  return (e && t.spacing[n]) || 0;
}
function E(e) {
  let t = D();
  return Array.isArray(e)
    ? e[Math.min(t === `desktop` ? 2 : +(t === `tablet`), e.length - 1)]
    : e;
}
function D() {
  let {
      breakpoint: { tablet: e, desktop: t },
    } = v(),
    n = u(`(min-width: ${e}px)`),
    r = u(`(min-width: ${t}px)`);
  return a() ? `mobile` : r ? `desktop` : n ? `tablet` : `mobile`;
}
function O(e) {
  return e.children(D());
}
function k(e) {
  return (0, d.jsx)(f, { component: i, ...e });
}
export {
  k as a,
  v as c,
  T as d,
  u as f,
  y as i,
  E as l,
  O as n,
  m as o,
  p as r,
  D as s,
  f as t,
  w as u,
};
