/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Pt as t, ot as n } from "./libraries.js";
import { W as r } from "./bbcodes.module.js";
import { Zd as i } from "./main.js";
import {
  $ as a,
  C as o,
  N as s,
  Q as c,
  S as l,
  et as u,
} from "./pmbbcodeschema.js";
var d = e(t(), 1),
  f = `Z7wUlPllFIw-`,
  p = `_2gxT3R534nw-`,
  m = `mMPoMyKK0Co-`,
  h = n(),
  g = d.memo(function (e) {
    let { linkMarkType: t, onURLPasted: n, schema: i, onClickURL: f = v } = e,
      p = d.useRef(f);
    p.current = f;
    let [m, g] = d.useState(),
      [y, b] = d.useState(),
      [x, S] = d.useState(),
      [C, w] = o(i),
      T = d.useMemo(
        () =>
          new c({
            props: {
              handleClickOn(e, n, i, a, o, s) {
                if (s && (o.ctrlKey || o.button == 1)) {
                  let e = i
                      .resolve(n - a)
                      .marks()
                      .find((e) => e.type == t),
                    s = e && r(e.attrs.href);
                  if (s) return p.current(s, o.view), o.preventDefault(), !0;
                }
                return !1;
              },
              handleKeyDown(e, t) {
                return t.key == `k` &&
                  (t.metaKey || t.ctrlKey) &&
                  !t.shiftKey &&
                  !t.altKey
                  ? (C(e), !0)
                  : !1;
              },
              clipboardTextParser(e, r, o, s) {
                let c = l(i, e, t, n);
                return c && new u(a.from(c), r.start(), r.end());
              },
              handlePaste(e, r, o) {
                let s = [];
                if (
                  (o.content.descendants((e, r) => {
                    if (e.isText) {
                      let a = l(i, e.text, t, n);
                      a && s.push({ node: e, pos: r, rgNodes: a });
                    }
                  }),
                  !s.length)
                )
                  return !1;
                let c = e.state.tr;
                c.selection.empty || c.deleteSelection();
                let u = c.selection.from,
                  d = 0;
                for (let e of s) {
                  let { node: t, pos: n, rgNodes: r } = e,
                    i = o.content.cut(d, n).append(a.from(r));
                  c.insert(u, i), (u += i.size + 2), (d = n + t.nodeSize);
                }
                return (
                  c.insert(u, o.content.cut(d)),
                  c.scrollIntoView(),
                  e.dispatch(c),
                  !0
                );
              },
              handleDOMEvents: {
                mouseover: (e, t) => {
                  for (
                    let e = t.target;
                    e && e != t.currentTarget;
                    e = e.parentElement
                  )
                    if (e.nodeName == `A` && `getBoundingClientRect` in e) {
                      let t = e.getBoundingClientRect();
                      g(t.left + t.width / 2), b(t.bottom + 2), S(e);
                      return;
                    }
                  S(void 0);
                },
                mouseleave: (e, t) => (S(void 0), !1),
              },
            },
          }),
        [t, C, n, i],
      );
    s(T);
    let E = null;
    return (
      x &&
        m &&
        y &&
        (E = (0, h.jsx)(_, { top: y, left: m, href: x.getAttribute(`href`) })),
      (0, h.jsxs)(h.Fragment, { children: [E, w] })
    );
  });
function _(e) {
  let { top: t, left: n, href: r } = e,
    [a, o] = d.useState(0),
    s = d.useRef(null);
  d.useLayoutEffect(() => {
    o(s.current.getBoundingClientRect().width);
  }, [t, n, r]);
  let c = { top: `${t}px`, left: `${Math.max(n - a / 2, 12)}px` };
  return (0, h.jsxs)(`div`, {
    className: f,
    style: c,
    ref: s,
    children: [
      (0, h.jsx)(`div`, { className: p, children: r }),
      (0, h.jsx)(`div`, {
        className: m,
        children: i(`#UserGameNotes_ClickToOpenLink`),
      }),
    ],
  });
}
function v(e, t) {
  t.open(e);
}
export { g as t };
