/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { n as r } from "./lazyrenderchildren.js";
import {
  Ac as i,
  Bb as a,
  Cc as o,
  Yb as s,
  ix as c,
  ml as l,
  rl as u,
  vn as d,
} from "./main.js";
var f = e(t()),
  p = `mGcJKj4m2EQ-`,
  m = `k4wGY7WH8xY-`,
  h = `EocTioZrw9s-`,
  g = `CWjqVwxnME0-`,
  _ = `fs2SowBIWKY-`,
  v = `QB7iDEGFU0U-`,
  y = `i6EHwtQS17s-`,
  b = `phoj4PQF2yo-`,
  x = `Zg-LMow-8x8-`,
  S = class e {
    m_rgSections;
    GetSections() {
      return this.m_rgSections;
    }
    static s_singleton;
    static Get() {
      return ((e.s_singleton ||= new e()), e.s_singleton);
    }
    constructor() {
      this.m_rgSections = s(`categories`, `application_config`);
    }
  };
function C() {
  let e = S.Get(),
    [t, n] = (0, f.useState)(e.GetSections());
  return { sections: t };
}
var w = n();
function T() {
  let { sections: e } = C(),
    t = f.useRef(null);
  return (
    f.useEffect(() => {
      t.current && t.current.NavTree()?.Activate(!0);
    }, []),
    (0, w.jsx)(i, {
      className: p,
      navRef: t,
      children: e.map((e, t) =>
        (0, w.jsx)(E, { section: e, autoFocus: t == 0 }, `section` + e.name),
      ),
    })
  );
}
function E(e) {
  let { section: t, autoFocus: n } = e,
    i = a(),
    o = (0, w.jsxs)(`div`, {
      className: m,
      children: [
        (0, w.jsx)(`span`, { className: h, children: t.name }),
        (0, w.jsx)(d, {
          className: g,
          scrollDirection: `x`,
          navEntryPreferPosition: l.MAINTAIN_X,
          navKey: `cat_section` + t.name,
          children: t.categories.map((e, t) =>
            (0, w.jsx)(
              D,
              { category: e, autoFocus: n && t === 0 },
              `category` + e.name,
            ),
          ),
        }),
      ],
    });
  return i ? o : (0, w.jsx)(r, { placeholderHeight: `150px`, children: o });
}
function D(e) {
  let { category: t, autoFocus: n } = e;
  return (0, w.jsx)(i, {
    focusableIfEmpty: !0,
    autoFocus: n,
    navKey: `cat_panel` + t.name,
    children: (0, w.jsxs)(u, {
      href: c.STORE_BASE_URL + t.url,
      className: o({ [_]: !0, [x]: t.is_toplevel_genre }),
      children: [
        (0, w.jsx)(O, { ...e }),
        (0, w.jsx)(`div`, { className: y }),
        (0, w.jsx)(`span`, {
          className: b,
          children: (0, w.jsx)(`span`, { children: t.name }),
        }),
      ],
    }),
  });
}
function O(e) {
  let { category: t } = e;
  return (0, w.jsx)(`div`, {
    className: void 0,
    children: (0, w.jsx)(`div`, {
      className: v,
      children: (0, w.jsx)(`img`, { src: c.STORE_BASE_URL + t.image_url }),
    }),
  });
}
export { T as default };
