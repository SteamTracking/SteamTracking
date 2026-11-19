import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { _t as t, eo as n } from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import {
  Rn as r,
  Yr as i,
  w as a,
} from "./chunk~1fa4b8f2ff.js?contenthash=DQ8gxgDF";
import { t as o } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { n as s } from "./chunk~8681f5c764.js?contenthash=CAkdBbB8";
import {
  G as c,
  H as l,
  K as u,
  g as d,
  q as f,
} from "./chunk~5ad53110ba.js?contenthash=1ilwDMsN";
import p from "./chunk~61cfadc62b.js?contenthash=BkOc07sF";
var m = e(n()),
  h = `w1pZZfyDmDk-`,
  g = o();
function _(e) {
  let { popup: t } = e,
    [n, r] = m.useState();
  return (
    m.useEffect(() => {
      if (n)
        return f.RegisterPopup(t, () => n.SteamClient.Window.BringToFront());
    }, [t, n]),
    t.noteid === void 0
      ? (0, g.jsx)(b, { popup: t, refPopup: r })
      : (0, g.jsx)(v, { popup: t, refPopup: r })
  );
}
function v(e) {
  let { popup: n, refPopup: a } = e,
    o = t(`#GameNotes_NoteForGame`, n.display_name);
  return (0, g.jsx)(i, {
    body_class: h,
    children: (0, g.jsxs)(s, {
      strName: n.id,
      strTitle: o,
      onDismiss: () => n.close(),
      popupWidth: 500,
      popupHeight: 500,
      resizable: !0,
      refPopup: a,
      className: `TODO`,
      children: [
        (0, g.jsx)(r, { children: o }),
        (0, g.jsx)(u, {
          mode: `single`,
          closePopup: () => n.close(),
          children: (0, g.jsx)(y, {
            noteParent: n.noteParent,
            noteid: n.noteid,
          }),
        }),
      ],
    }),
  });
}
function y(e) {
  let { noteParent: t, noteid: n } = e,
    { data: r } = c(t, n);
  return r ? (0, g.jsx)(d, { note: r }) : null;
}
function b(e) {
  let { popup: t, refPopup: n } = e,
    r = t.noteParent,
    i = m.useMemo(() => [l(r)], [r]);
  return (0, g.jsx)(s, {
    strName: t.id,
    strTitle: t.display_name,
    onDismiss: () => t.close(),
    popupWidth: 900,
    popupHeight: 830,
    resizable: !0,
    refPopup: n,
    className: `TODO`,
    children: (0, g.jsx)(a, {
      initialEntries: i,
      children: (0, g.jsx)(u, {
        mode: `page`,
        closePopup: () => t.close(),
        children: (0, g.jsx)(p, { noteParent: r }),
      }),
    }),
  });
}
export { _ as default };
