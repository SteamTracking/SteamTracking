/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n } from "./chunk~01cfc309bf.js";
import { n as r } from "./chunk~5adf866415.js";
import { i, r as a, u as o } from "./chunk~6cf3fe3e07.js";
import {
  Au as s,
  Cc as c,
  Pc as l,
  Vc as u,
  gl as d,
  ib as f,
} from "./main.js";
var p = e(t()),
  m = `slvPA8f0gLM-`,
  h = `kcXPMd3IHiw-`,
  g = n(),
  _ = (e) => {
    let t = [`maxresdefault`, `mqdefault`, `default`],
      [n, i] = p.useState(0);
    p.useEffect(() => i(0), [e.video]);
    let a = p.useRef(null);
    if (e.altImgWithFallback && e.altImgWithFallback.length > 0)
      return (0, g.jsx)(r, {
        className: e.className,
        srcs: e.altImgWithFallback,
      });
    if (e.altImg)
      return (0, g.jsx)(`img`, { src: e.altImg, className: e.className });
    {
      let r = `https://img.youtube.com/vi/` + e.video + `/` + t[n] + `.jpg`,
        o = () => {
          n + 1 < t.length && i(n + 1);
        };
      return (0, g.jsx)(`img`, {
        ref: a,
        onLoad: () => {
          a.current && a.current.naturalHeight < 91 && o();
        },
        onError: o,
        src: r,
        className: l(m, e.className),
      });
    }
  },
  v = (e) => {
    let [t, n] = p.useState(!1);
    i(!!e.preloadYoutubeScripts);
    let r = o(`youtube`);
    return !t || !r
      ? (0, g.jsxs)(`div`, {
          className: l(`YoutubePreviewContainer`, m, e.imageClassnames),
          onClick: r
            ? (t) => {
                (e.onPlayerActivated && e.onPlayerActivated(),
                  n(!0),
                  t.stopPropagation(),
                  t.preventDefault());
              }
            : void 0,
          children: [
            (0, g.jsx)(_, {
              className: `YoutubePreviewImage`,
              altImgWithFallback: e.altImgWithFallback,
              altImg: e.altImg,
              video: e.video,
            }),
            r &&
              (0, g.jsxs)(g.Fragment, {
                children: [
                  (0, g.jsx)(`div`, {
                    className: `YoutubePreviewPlay`,
                    children: (0, g.jsx)(c, {}),
                  }),
                  (0, g.jsx)(`div`, {
                    className: `VideoHintText`,
                    children: f(`#EventCalendar_WatchYouTubeVideo`),
                  }),
                ],
              }),
          ],
        })
      : (0, g.jsx)(a, { ...e, classnames: l(h, e.classnames) });
  },
  y = `qeblZrFO1wc-`;
function b(e) {
  let { crumbs: t, className: n, bHideLastArrow: r } = e;
  return !t || t.length == 0
    ? null
    : (0, g.jsxs)(`div`, {
        className: l(y, n),
        children: [
          (0, g.jsx)(u, {
            className: `blockbg`,
            "flow-children": `row`,
            children: t.map((e, n) => {
              let i = [];
              return (
                e.url.startsWith(`http`)
                  ? i.push(
                      (0, g.jsx)(
                        d,
                        { href: e.url, children: e.name },
                        `anchor_` + e.name,
                      ),
                    )
                  : i.push(
                      (0, g.jsx)(
                        s,
                        { to: e.url, children: e.name },
                        `link_` + e.name,
                      ),
                    ),
                (!r || n < t.length - 1) &&
                  i.push(
                    (0, g.jsx)(`span`, { children: `\xA0> ` }, e.name + `span`),
                  ),
                i
              );
            }),
          }),
          (0, g.jsx)(`div`, { style: { clear: `left` } }),
        ],
      });
}
export { m as i, _ as n, v as r, b as t };
