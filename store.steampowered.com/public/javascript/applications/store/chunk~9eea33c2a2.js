/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, dt as n, ot as r, st as i } from "./chunk~01cfc309bf.js";
import {
  Xb as a,
  gy as o,
  hy as s,
  ly as c,
  my as l,
  xy as u,
  yx as d,
} from "./main.js";
var f = e(t()),
  p = `PlaytestInvites`;
function m() {
  let e = c();
  return i({
    queryKey: [p],
    queryFn: async () => {
      let t = d.Init(l),
        n = await u.GetInvites(e, t);
      if (n.GetEResult() != 1)
        throw Error(
          `Error from usePlaytestInvite: ${n.GetEResult()} ${n.GetErrorMessage()}`,
        );
      return n.Body()?.toObject().invites ?? [];
    },
  });
}
function h(e) {
  let t = c(),
    i = n();
  return r({
    mutationFn: async (n) => {
      let r = d.Init(o);
      (r.Body().add_invite_ids(e), r.Body().set_status(n.bAccept ? 3 : 2));
      let i = await u.UpdateInvites(t, r);
      if (i.GetEResult() != 1)
        throw {
          result: i.GetEResult(),
          message: `Error from UpdatePlaytestInvite: ${i.GetErrorMessage()} ( ${i.GetEResult()} )`,
        };
    },
    onSuccess: (t, n) => {
      i.setQueryData([p], (t) =>
        t.map((t) =>
          t.invite_id === e ? { ...t, status: n.bAccept ? 3 : 2 } : t,
        ),
      );
    },
    onError: () => {
      i.invalidateQueries({ queryKey: [p] });
    },
  });
}
function g(e) {
  return [`PlaytestUserStatus`, e];
}
function _(e) {
  let t = c();
  return i({
    queryKey: g(e),
    queryFn: async () => {
      if (a.logged_in) {
        let n = d.Init(s);
        e && n.Body().set_appid(e);
        let r = await u.GetUserStatus(t, n);
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
  let e = n();
  return f.useCallback(
    (t, n) => {
      e.setQueryData(g(t), n);
    },
    [e],
  );
}
export { v as i, _ as n, h as r, m as t };
