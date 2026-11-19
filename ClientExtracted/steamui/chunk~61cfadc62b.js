import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { _t as t, eo as n } from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import {
  E as r,
  O as i,
  T as a,
} from "./chunk~1fa4b8f2ff.js?contenthash=DQ8gxgDF";
import { t as o } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { Q as s } from "./library.js?contenthash=CVZWwsCP";
import {
  H as c,
  In as l,
  U as u,
  W as d,
  h as f,
  m as p,
} from "./chunk~5ad53110ba.js?contenthash=1ilwDMsN";
var m = e(n()),
  h = o();
function g() {
  let { data: e, isLoading: n } = d(),
    r = m.useMemo(
      () => e?.slice().sort((e, t) => t.last_modified - e.last_modified),
      [e],
    );
  return n
    ? (0, h.jsx)(s, { msDelayAppear: 300 })
    : (0, h.jsxs)(`div`, {
        children: [
          (0, h.jsx)(`h1`, { children: t(`#UserGameNotes_NotesList`) }),
          (0, h.jsx)(`ul`, {
            children: r.map((e) =>
              (0, h.jsx)(_, { game: e }, e.appid || e.shortcut_name),
            ),
          }),
        ],
      });
}
function _(e) {
  let { game: t } = e;
  return (0, h.jsx)(`li`, {
    children: (0, h.jsx)(l, {
      to: c(t.appid ? { appid: t.appid } : { shortcut: t.shortcut_name }),
      children: t.appid ? (0, h.jsx)(v, { appid: t.appid }) : t.shortcut_name,
    }),
  });
}
function v(e) {
  let { appid: t } = e;
  return f(t)?.name;
}
function y(e) {
  return (0, h.jsxs)(i, {
    children: [
      (0, h.jsx)(r, { path: u.List(), children: (0, h.jsx)(g, {}) }),
      (0, h.jsx)(r, {
        path: u.AppNotes(`:appid`, `:noteid?`),
        children: (0, h.jsx)(p, {}),
      }),
      (0, h.jsx)(r, {
        path: u.ShortcutNotes(`:shortcut_name`, `:noteid?`),
        children: (0, h.jsx)(p, {}),
      }),
      (0, h.jsx)(r, { children: (0, h.jsx)(a, { to: `${c(e.noteParent)}` }) }),
    ],
  });
}
export { y as default };
