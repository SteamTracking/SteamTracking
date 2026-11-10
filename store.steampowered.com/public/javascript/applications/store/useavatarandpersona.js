/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, dt as n, nt as r, st as i, tt as a } from "./libraries.js";
import {
  Fb as o,
  Iu as s,
  Ly as c,
  X as l,
  ay as u,
  hx as d,
  ix as f,
  ox as p,
  ut as m,
} from "./main.js";
var h = e(a()),
  g = e(r()),
  _ = e(t()),
  v = `nicknames`;
function y(e) {
  let t = u(),
    { data: n, isLoading: r } = i({
      queryKey: [v],
      queryFn: async () => {
        let e = new Map();
        if (p.logged_in) {
          let n = d.Init(l),
            r = (await m.GetNicknameList(t, n)).Body().toObject();
          r?.nicknames &&
            r.nicknames.length > 0 &&
            r.nicknames.forEach((t) => {
              t.accountid && t.nickname && e.set(t.accountid, t.nickname);
            });
        }
        return e;
      },
    });
  return n ? n.get(e) : null;
}
async function b(e) {
  if (!e || e.length == 0) return [];
  let t = o() == `community` ? f.COMMUNITY_BASE_URL : f.STORE_BASE_URL;
  if (e.length == 1) {
    let n = { accountid: e[0], origin: self.origin },
      r = await h.default.get(`${t}actions/ajaxgetavatarpersona`, {
        params: n,
      });
    if (!r || r.status != 200 || r.data?.success != 1 || !r.data?.userinfo)
      throw `Load single avatar/persona failed ${s(r).strErrorMsg}`;
    return [r.data.userinfo];
  }
  {
    let n = { accountids: e.join(`,`), origin: self.origin },
      r = await h.default.get(`${t}actions/ajaxgetmultiavatarpersona`, {
        params: n,
      });
    if (!r || r.status != 200 || r.data?.success != 1 || !r.data?.userinfos)
      throw `Load single avatar/persona failed ${s(r).strErrorMsg}`;
    let i = new Map();
    return (
      r.data.userinfos.forEach((e) =>
        i.set(new c(e.steamid).GetAccountID(), e),
      ),
      e.map((e) => i.get(e))
    );
  }
}
var x = new g.default((e) => b(e), { cache: !1 }),
  S = `avatarandpersonas`;
function C(e) {
  return [S, e];
}
function w(e) {
  let { data: t, isLoading: n } = i({
    queryKey: C(e),
    queryFn: () => x.load(e),
  });
  return [t, n];
}
function T(e) {
  let t = n(),
    { data: r, isLoading: a } = i({
      queryKey: [S, e],
      queryFn: async () => {
        let n = await x.loadMany(e);
        return (
          n.forEach((e) => {
            if (e instanceof Error) return;
            let n = [S, new c(e.steamid).GetAccountID()];
            t.setQueryData(n, e);
          }),
          n
        );
      },
      enabled: e?.length > 0,
    }),
    o = (0, _.useMemo)(() => {
      let e = [];
      return (
        r?.forEach((t) => {
          t instanceof Error || e.push(t);
        }),
        e
      );
    }, [r]);
  return a ? null : o;
}
export { y as n, T as r, w as t };
