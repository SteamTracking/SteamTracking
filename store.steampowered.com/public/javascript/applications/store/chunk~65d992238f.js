/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n, st as r } from "./chunk~01cfc309bf.js";
import {
  Gl as i,
  Qx as a,
  ay as o,
  gu as s,
  hu as c,
  ly as l,
  ry as u,
  sy as d,
  yx as f,
} from "./main.js";
var p = e(t()),
  m = n(),
  h = p.createContext({}),
  g = () => p.useContext(h);
function _(e) {
  let { defaultOptions: t, children: n } = e,
    r = p.useMemo(() => ({ defaultOptions: t || {} }), [t]);
  return (0, m.jsx)(h.Provider, { value: r, children: n });
}
var v = `StoreQueryStore`;
function y(e, t, n, i) {
  let o = g(),
    s = l();
  o || a(!1, `useStoreQuery called outside of a <StoreQueryRoot>`);
  let c = o.defaultOptions,
    u = p.useMemo(() => {
      let e = [];
      return (
        i?.content_descriptors_excluded
          ? (e = i.content_descriptors_excluded)
          : c?.content_descriptors_excluded &&
            (e = c.content_descriptors_excluded),
        { ...t, filters: { content_descriptors_excluded: e, ...t.filters } }
      );
    }, [t, i, c]),
    d;
  i?.override_country_code === void 0
    ? c?.override_country_code !== void 0 && (d = c.override_country_code)
    : (d = i.override_country_code);
  let f = { staleTime: 36e5 };
  return (
    i?.reactQuery && (f = { ...f, ...i.reactQuery }),
    r({
      queryKey: [v, u, n ?? {}, i ?? {}],
      queryFn: () => b(s, e, u, n ?? {}, d),
      ...f,
    })
  );
}
async function b(e, t, n, r, i) {
  let a = f.Init(o);
  (c(a),
    r && s(a, r),
    i && a.Body().set_override_country_code(i),
    a.Body().set_query(u.fromObject(n)),
    a.Body().set_query_name(t));
  let l = await d.Query(e, a);
  if (l.GetEResult() != 1)
    throw `Error executing StoreQuery "${t}", EResult: ${l.GetEResult()}`;
  return new x(l, r);
}
var x = class {
  m_Items = void 0;
  m_rgItemIDs = void 0;
  m_metadata = void 0;
  constructor(e, t) {
    this.ReadResults(e, t);
  }
  GetItems() {
    return this.m_Items;
  }
  GetItemIDs() {
    return this.m_rgItemIDs;
  }
  GetMetadata() {
    return this.m_metadata;
  }
  ReadResults(e, t) {
    this.m_Items ||=
      (a(
        e.Body().metadata().start() == 0,
        `Empty item list - expected to start at 0`,
      ),
      []);
    let n = e.Body().ids() || [];
    if (
      ((this.m_rgItemIDs = n.map((e) => e.toObject())), e.Body().store_items())
    )
      for (let n of e.Body().store_items()) {
        let e = i.Get().ReadItem(n, t);
        e && this.m_Items.push(e);
      }
    this.m_metadata = e.Body().metadata().toObject();
  }
};
export { y as n, _ as t };
