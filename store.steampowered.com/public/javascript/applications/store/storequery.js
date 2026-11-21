/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n, st as r } from "./chunk~01cfc309bf.js";
import {
  Ox as i,
  Tu as a,
  eu as o,
  fy as s,
  gy as c,
  my as l,
  sS as u,
  vy as d,
  wu as f,
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
    o = d();
  a || u(!1, `useStoreQuery called outside of a <StoreQueryRoot>`);
  let s = a.defaultOptions,
    c = p.useMemo(() => {
      let e = [];
      return (
        i?.content_descriptors_excluded
          ? (e = i.content_descriptors_excluded)
          : s?.content_descriptors_excluded &&
            (e = s.content_descriptors_excluded),
        { ...t, filters: { content_descriptors_excluded: e, ...t.filters } }
      );
    }, [t, i, s]),
    l;
  i?.override_country_code === void 0
    ? s?.override_country_code !== void 0 && (l = s.override_country_code)
    : (l = i.override_country_code);
  let f = { staleTime: 36e5 };
  return (
    i?.reactQuery && (f = { ...f, ...i.reactQuery }),
    r({
      queryKey: [v, c, n ?? {}, i ?? {}],
      queryFn: () => b(o, e, c, n ?? {}, l),
      ...f,
    })
  );
}
async function b(e, t, n, r, o) {
  let u = i.Init(l);
  (f(u),
    r && a(u, r),
    o && u.Body().set_override_country_code(o),
    u.Body().set_query(s.fromObject(n)),
    u.Body().set_query_name(t));
  let d = await c.Query(e, u);
  if (d.GetEResult() != 1)
    throw `Error executing StoreQuery "${t}", EResult: ${d.GetEResult()}`;
  return new x(d, r);
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
      (u(
        e.Body().metadata().start() == 0,
        `Empty item list - expected to start at 0`,
      ),
      []);
    let n = e.Body().ids() || [];
    if (
      ((this.m_rgItemIDs = n.map((e) => e.toObject())), e.Body().store_items())
    )
      for (let n of e.Body().store_items()) {
        let e = o.Get().ReadItem(n, t);
        e && this.m_Items.push(e);
      }
    this.m_metadata = e.Body().metadata().toObject();
  }
};
export { y as n, _ as t };
