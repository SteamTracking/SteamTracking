/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, sn as t } from "./chunk~de7f2df91c.js";
import { o as n, s as r } from "./chunk~1fa4b8f2ff.js";
var i = t(e());
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
function s(e, t) {
  let s = n(),
    c = r();
  return [
    (0, i.useMemo)(() => {
      let n = a(c.search, e);
      return n != null && n != null
        ? t != null && t != null
          ? typeof t == `boolean`
            ? t.constructor(n !== `false`)
            : t.constructor(n)
          : n
        : t;
    }, [c.search, e, t]),
    (0, i.useCallback)(
      (t, n = !1) => {
        o(s, e, t != null && t != null ? String(t) : null, n);
      },
      [s, e],
    ),
  ];
}
export { o as n, s as r, a as t };
