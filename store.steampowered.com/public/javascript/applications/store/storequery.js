/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, st as r } from "./libraries.js";
import {
  Qv as i,
  Vl as a,
  du as o,
  ey as s,
  fu as c,
  iy as l,
  mx as u,
  ny as d,
  qx as f,
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
    o = l();
  a || f(!1, `useStoreQuery called outside of a <StoreQueryRoot>`);
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
    u;
  i?.override_country_code === void 0
    ? s?.override_country_code !== void 0 && (u = s.override_country_code)
    : (u = i.override_country_code);
  let d = { staleTime: 36e5 };
  return (
    i?.reactQuery && (d = { ...d, ...i.reactQuery }),
    r({
      queryKey: [v, c, n ?? {}, i ?? {}],
      queryFn: () => b(o, e, c, n ?? {}, u),
      ...d,
    })
  );
}
async function b(e, t, n, r, a) {
  let l = u.Init(s);
  o(l),
    r && c(l, r),
    a && l.Body().set_override_country_code(a),
    l.Body().set_query(i.fromObject(n)),
    l.Body().set_query_name(t);
  let f = await d.Query(e, l);
  if (f.GetEResult() != 1)
    throw `Error executing StoreQuery "${t}", EResult: ${f.GetEResult()}`;
  return new x(f, r);
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
      (f(
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
