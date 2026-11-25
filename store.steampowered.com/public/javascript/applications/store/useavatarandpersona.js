/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  It as t,
  et as n,
  ot as r,
  tt as i,
  ut as a,
} from "./chunk~01cfc309bf.js";
import {
  X as o,
  Xu as s,
  Yb as c,
  Zy as l,
  bx as u,
  kx as d,
  ut as f,
  vx as p,
  yy as m,
} from "./main.js";
var h = e(n()),
  g = e(i()),
  _ = e(t()),
  v = `nicknames`;
function y(e) {
  let t = m(),
    { data: n, isLoading: i } = r({
      queryKey: [v],
      queryFn: async () => {
        let e = new Map();
        if (u.logged_in) {
          let n = d.Init(o),
            r = (await f.GetNicknameList(t, n)).Body().toObject();
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
  let t = c() == `community` ? p.COMMUNITY_BASE_URL : p.STORE_BASE_URL;
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
        i.set(new l(e.steamid).GetAccountID(), e),
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
  let { data: t, isLoading: n } = r({
    queryKey: C(e),
    queryFn: () => x.load(e),
  });
  return [t, n];
}
function T(e) {
  let t = a(),
    { data: n, isLoading: i } = r({
      queryKey: [S, e],
      queryFn: async () => {
        let n = await x.loadMany(e);
        return (
          n.forEach((e) => {
            if (e instanceof Error) return;
            let n = [S, new l(e.steamid).GetAccountID()];
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
        n?.forEach((t) => {
          t instanceof Error || e.push(t);
        }),
        e
      );
    }, [n]);
  return i ? null : o;
}
export { y as n, T as r, w as t };
