/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n } from "./chunk~01cfc309bf.js";
import { n as r } from "./chunk~710e3cfd2f.js";
import {
  Cn as i,
  Dl as a,
  Pc as o,
  Vc as s,
  ex as c,
  gl as l,
  lx as u,
  vx as d,
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
      this.m_rgSections = u(`categories`, `application_config`);
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
    (0, w.jsx)(s, {
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
    o = c(),
    s = (0, w.jsxs)(`div`, {
      className: m,
      children: [
        (0, w.jsx)(`span`, { className: h, children: t.name }),
        (0, w.jsx)(i, {
          className: g,
          scrollDirection: `x`,
          navEntryPreferPosition: a.MAINTAIN_X,
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
  return o ? s : (0, w.jsx)(r, { placeholderHeight: `150px`, children: s });
}
function D(e) {
  let { category: t, autoFocus: n } = e;
  return (0, w.jsx)(s, {
    focusableIfEmpty: !0,
    autoFocus: n,
    navKey: `cat_panel` + t.name,
    children: (0, w.jsxs)(l, {
      href: d.STORE_BASE_URL + t.url,
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
      children: (0, w.jsx)(`img`, { src: d.STORE_BASE_URL + t.image_url }),
    }),
  });
}
export { T as default };
