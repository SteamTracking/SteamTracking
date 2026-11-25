/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, at as n, ot as r, ut as i } from "./chunk~01cfc309bf.js";
import {
  Ey as a,
  Ty as o,
  jy as s,
  kx as c,
  ox as l,
  wy as u,
  yy as d,
} from "./main.js";
var f = e(t()),
  p = `PlaytestInvites`;
function m() {
  let e = d();
  return r({
    queryKey: [p],
    queryFn: async () => {
      let t = c.Init(u),
        n = await s.GetInvites(e, t);
      if (n.GetEResult() != 1)
        throw Error(
          `Error from usePlaytestInvite: ${n.GetEResult()} ${n.GetErrorMessage()}`,
        );
      return n.Body()?.toObject().invites ?? [];
    },
  });
}
function h(e) {
  let t = d(),
    r = i();
  return n({
    mutationFn: async (n) => {
      let r = c.Init(a);
      (r.Body().add_invite_ids(e), r.Body().set_status(n.bAccept ? 3 : 2));
      let i = await s.UpdateInvites(t, r);
      if (i.GetEResult() != 1)
        throw {
          result: i.GetEResult(),
          message: `Error from UpdatePlaytestInvite: ${i.GetErrorMessage()} ( ${i.GetEResult()} )`,
        };
    },
    onSuccess: (t, n) => {
      r.setQueryData([p], (t) =>
        t.map((t) =>
          t.invite_id === e ? { ...t, status: n.bAccept ? 3 : 2 } : t,
        ),
      );
    },
    onError: () => {
      r.invalidateQueries({ queryKey: [p] });
    },
  });
}
function g(e) {
  return [`PlaytestUserStatus`, e];
}
function _(e) {
  let t = d();
  return r({
    queryKey: g(e),
    queryFn: async () => {
      if (l.logged_in) {
        let n = c.Init(o);
        e && n.Body().set_appid(e);
        let r = await s.GetUserStatus(t, n);
        if (r.GetEResult() != 1)
          throw Error(
            `Error from usePlaytestUserStatus: ${r.GetEResult()} ${r.GetErrorMessage()}`,
          );
        return r.Body()?.toObject().results ?? [];
      }
      return [];
    },
    staleTime: 6e5,
  });
}
function v() {
  let e = i();
  return f.useCallback(
    (t, n) => {
      e.setQueryData(g(t), n);
    },
    [e],
  );
}
export { v as i, _ as n, h as r, m as t };
