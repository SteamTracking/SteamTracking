/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  j as t,
  lt as n,
  sn as r,
  vt as i,
} from "./chunk~de7f2df91c.js";
import { Zi as a, gn as o, hr as s, ua as c } from "./chunk~1fa4b8f2ff.js";
import { t as l } from "./chunk~f4e4ed5c17.js";
import { t as u } from "./chunk~eefd71512b.js";
import { t as d } from "./chunk~802e967112.js";
import { _ as f, d as p, v as m } from "./chunk~d6693aba87.js";
import {
  B as h,
  C as g,
  H as _,
  N as v,
  S as y,
  V as b,
  w as x,
  z as S,
} from "./chunk~6110f63e8e.js";
var C = r(e()),
  w = r(l()),
  T = `lGLGFqOzoyQ-`,
  E = `sxnrj8ps74s-`,
  D = `PXYBAa2tYnw-`,
  O = `_3-9LVAuBDdI-`,
  k = `-Mdp9nvfCIA-`,
  A = i();
function j(e) {
  let { bDone: n, name: r, tooltip: i } = e;
  return (0, A.jsxs)(`div`, {
    className: E,
    children: [
      (0, A.jsx)(`span`, {
        className: t(D, n ? O : k),
        children: n ? (0, A.jsx)(s, {}) : (0, A.jsx)(a, {}),
      }),
      (0, A.jsx)(o, { toolTipContent: i, children: r }),
    ],
  });
}
function M(e) {
  let { rgAssetURL: t, rgLang: r, bIsImage: i } = e,
    [a, o] = (0, C.useState)([]);
  if (
    ((0, C.useEffect)(() => {
      let e = !1,
        n = i ? N : P;
      return (
        Promise.all(t.map((e) => n(e))).then((t) => {
          e || o(t);
        }),
        () => {
          e = !0;
        }
      );
    }, [t, i]),
    !a)
  )
    return (0, A.jsx)(u, { size: `small`, string: `Checking Assets...` });
  let s = a.map((e, t) => (e ? -1 : t)).filter((e) => e !== -1);
  return s.length === 0
    ? (0, A.jsx)(j, {
        bDone: !0,
        name: `Uploaded assets verified`,
        tooltip: `In the background we verified the assets by downloading from the CDN to verify they are present`,
      })
    : (0, A.jsxs)(A.Fragment, {
        children: [
          (0, A.jsx)(j, {
            bDone: !1,
            name: `${s.length} Asset(s) uploaded failed to fetch`,
          }),
          s
            .map((e) => ({ url: t[e], lang: r[e] }))
            .map((e) =>
              (0, A.jsx)(
                j,
                {
                  bDone: !1,
                  name: `${n(e.lang)} - Not found`,
                  tooltip: `${e.url} not downloadable from the CDN`,
                },
                e.url,
              ),
            ),
        ],
      });
}
function N(e) {
  return new Promise((t) => {
    let n = new Image();
    ((n.onload = () => t(!0)), (n.onerror = () => t(!1)), (n.src = e));
  });
}
function P(e) {
  return new Promise((t) => {
    let n = document.createElement(`video`);
    ((n.preload = `metadata`),
      (n.onloadedmetadata = () => t(!0)),
      (n.onerror = () => t(!1)),
      (n.src = e));
  });
}
function F(e) {
  let {
      rgAssetLangs: t,
      initialLang: n,
      fnGetAssetUrl: r,
      fnDeletAssetLang: i,
      imageClassname: a,
      fnDeleteAllAssets: o,
      showDeleteAll: s = !0,
      bVerifyAssets: l,
      bVideoAsset: u,
    } = e,
    [f, p] = C.useState(n ?? d.Get().GetCurEditLanguage() ?? t[0]),
    [m, h] = C.useState(r(f)),
    x = C.useMemo(() => [...t].sort(), [t]);
  C.useEffect(() => {
    let e = r(f);
    e ? h(e) : x.length > 0 ? p(x[0]) : h(null);
  }, [f, r, x]);
  let w = () => {
      o ? o() : x.forEach((e) => i(e));
    },
    T = (0, C.useMemo)(() => t.map((e) => r(e)), [r, t]);
  return (0, A.jsxs)(`div`, {
    className: S,
    children: [
      (0, A.jsx)(`div`, {
        className: b,
        children: (0, A.jsx)(L, { curAssetURL: m, imageClassname: a }),
      }),
      (0, A.jsx)(`div`, {
        className: _,
        children: (0, A.jsxs)(`div`, {
          className: v,
          children: [
            (0, A.jsx)(`div`, {
              className: y,
              children: c(`#ImageUpload_LocalizedAssets`),
            }),
            (0, A.jsx)(`div`, {
              className: g,
              children: x.map((e) =>
                (0, A.jsx)(
                  I,
                  {
                    language: e,
                    selectedLanguage: f,
                    setSelectedLanguage: p,
                    deleteLanguage: i,
                  },
                  e,
                ),
              ),
            }),
            s &&
              !!x.length &&
              (0, A.jsx)(`a`, {
                href: `#`,
                className: `oyKuVDO21ZA-`,
                onClick: (e) => {
                  (w(), e.preventDefault());
                },
                children: c(`#Button_DeleteAll`),
              }),
            !!l && (0, A.jsx)(M, { rgAssetURL: T, rgLang: t, bIsImage: !u }),
          ],
        }),
      }),
    ],
  });
}
function I(e) {
  let {
      language: t,
      selectedLanguage: r,
      setSelectedLanguage: i,
      deleteLanguage: o,
    } = e,
    s = n(t);
  return (0, A.jsxs)(
    `div`,
    {
      className: h,
      children: [
        (0, A.jsx)(`a`, {
          href: `#`,
          onClick: (e) => {
            (e.preventDefault(), i(t));
          },
          children:
            t === r
              ? (0, A.jsx)(`span`, { className: x, children: `` + s })
              : (0, A.jsx)(`span`, { children: `` + s }),
        }),
        (0, A.jsx)(`a`, {
          href: `#`,
          onClick: (e) => {
            (e.preventDefault(), o(t));
          },
          children: (0, A.jsx)(a, {}),
        }),
      ],
    },
    `image` + s,
  );
}
function L(e) {
  let { curAssetURL: t, imageClassname: n } = e;
  if (!t)
    return (0, A.jsx)(`div`, {
      className: T,
      children: c(`#ImageDisplay_NoAssetUploaded`),
    });
  let r = p(t);
  return m.includes(r)
    ? (0, A.jsx)(R, { ...e })
    : f.includes(r)
      ? (0, A.jsx)(z, { className: n || `fR9yHTgcATY-`, strTextURL: t })
      : (0, A.jsx)(`img`, { className: n || `fR9yHTgcATY-`, src: t });
}
function R(e) {
  let { curAssetURL: t, imageClassname: n } = e,
    r = C.useRef(null);
  return (
    C.useEffect(() => {
      r.current && (r.current.load(), r.current.play());
    }, [t]),
    (0, A.jsx)(`video`, {
      ref: r,
      className: n || `fR9yHTgcATY-`,
      autoPlay: !0,
      loop: !0,
      controls: !0,
      muted: !0,
      children: (0, A.jsx)(`source`, { src: t }),
    })
  );
}
function z(e) {
  let { strTextURL: t, className: n } = e,
    [r, i] = C.useState(``);
  return (
    C.useEffect(() => {
      w.default
        .get(t)
        .then((e) => {
          i(e.data);
        })
        .catch((e) => {
          console.error(e);
        });
    }, [t]),
    (0, A.jsx)(`textarea`, { className: n, value: r, readOnly: !0, rows: 20 })
  );
}
export { j as n, F as t };
