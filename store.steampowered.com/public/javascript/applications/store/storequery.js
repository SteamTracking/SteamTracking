/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, st as r } from "./libraries.js";
import {
  $v as i,
  Hl as a,
  Jx as o,
  ay as s,
  fu as c,
  hx as l,
  pu as u,
  ry as d,
  ty as f,
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
  let a = g(),
    c = s();
  a || o(!1, `useStoreQuery called outside of a <StoreQueryRoot>`);
  let l = a.defaultOptions,
    u = p.useMemo(() => {
      let e = [];
      return (
        i?.content_descriptors_excluded
          ? (e = i.content_descriptors_excluded)
          : l?.content_descriptors_excluded &&
            (e = l.content_descriptors_excluded),
        { ...t, filters: { content_descriptors_excluded: e, ...t.filters } }
      );
    }, [t, i, l]),
    d;
  i?.override_country_code === void 0
    ? l?.override_country_code !== void 0 && (d = l.override_country_code)
    : (d = i.override_country_code);
  let f = { staleTime: 36e5 };
  return (
    i?.reactQuery && (f = { ...f, ...i.reactQuery }),
    r({
      queryKey: [v, u, n ?? {}, i ?? {}],
      queryFn: () => b(c, e, u, n ?? {}, d),
      ...f,
    })
  );
}
async function b(e, t, n, r, a) {
  let o = l.Init(f);
  (c(o),
    r && u(o, r),
    a && o.Body().set_override_country_code(a),
    o.Body().set_query(i.fromObject(n)),
    o.Body().set_query_name(t));
  let s = await d.Query(e, o);
  if (s.GetEResult() != 1)
    throw `Error executing StoreQuery "${t}", EResult: ${s.GetEResult()}`;
  return new x(s, r);
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
      (o(
        e.Body().metadata().start() == 0,
        `Empty item list - expected to start at 0`,
      ),
      []);
    let n = e.Body().ids() || [];
    if (
      ((this.m_rgItemIDs = n.map((e) => e.toObject())), e.Body().store_items())
    )
      for (let n of e.Body().store_items()) {
        let e = a.Get().ReadItem(n, t);
        e && this.m_Items.push(e);
      }
    this.m_metadata = e.Body().metadata().toObject();
  }
};
export { y as n, _ as t };
