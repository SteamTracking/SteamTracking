/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Ct as t, Pt as n, wt as r } from "./libraries.js";
var i = e(n());
function a(e, t) {
  let n;
  if (typeof e == `string`) n = e;
  else if (`location` in e) n = e.location.search;
  else if (`search` in e) n = e.search;
  else return;
  let r = new URLSearchParams(n.substring(1));
  if (r.has(t)) {
    let e = r.getAll(t);
    return e[e.length - 1];
  }
}
function o(e, t, n, r = !1) {
  let i = new URLSearchParams(e.location.search.substring(1));
  if (n != null && n != null) {
    if (i.get(t) == n) return;
    i.set(t, n);
  } else {
    if (!i.has(t)) return;
    i.delete(t);
  }
  r
    ? e.replace(`?${i.toString()}`, { ...e.location.state })
    : e.push(`?${i.toString()}`);
}
function s(e, t, n) {
  o(e, t, n, !0);
}
function c(e, n) {
  let s = t(),
    c = r();
  return [
    (0, i.useMemo)(() => {
      let t = a(c.search, e);
      return t != null && t != null
        ? n != null && n != null
          ? typeof n == `boolean`
            ? n.constructor(t !== `false`)
            : n.constructor(t)
          : t
        : n;
    }, [c.search, e, n]),
    (0, i.useCallback)(
      (t, n = !1) => {
        o(s, e, t != null && t != null ? String(t) : null, n);
      },
      [s, e],
    ),
  ];
}
function l(e, t, n = !1) {
  let r = new URLSearchParams(e.location.search.substring(1));
  for (let e in t)
    if (t.hasOwnProperty(e)) {
      let n = t[e];
      r.delete(e), n != null && n != null && r.append(e, n);
    }
  n
    ? e.replace(`?${r.toString()}`, { ...e.location.state })
    : e.push(`?${r.toString()}`);
}
function u(e, t) {
  l(e, t, !0);
}
export { l as a, o as i, s as n, c as o, u as r, a as t };
