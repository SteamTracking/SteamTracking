/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, dt as n, ot as r, st as i } from "./libraries.js";
import {
  Kb as a,
  _y as o,
  ay as s,
  dy as c,
  fy as l,
  hx as u,
  uy as d,
} from "./main.js";
var f = e(t()),
  p = `PlaytestInvites`;
function m() {
  let e = s();
  return i({
    queryKey: [p],
    queryFn: async () => {
      let t = u.Init(d),
        n = await o.GetInvites(e, t);
      if (n.GetEResult() != 1)
        throw Error(
          `Error from usePlaytestInvite: ${n.GetEResult()} ${n.GetErrorMessage()}`,
        );
      return n.Body()?.toObject().invites ?? [];
    },
  });
}
function h(e) {
  let t = s(),
    i = n();
  return r({
    mutationFn: async (n) => {
      let r = u.Init(l);
      (r.Body().add_invite_ids(e), r.Body().set_status(n.bAccept ? 3 : 2));
      let i = await o.UpdateInvites(t, r);
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
  let t = s();
  return i({
    queryKey: g(e),
    queryFn: async () => {
      if (a.logged_in) {
        let n = u.Init(c);
        e && n.Body().set_appid(e);
        let r = await o.GetUserStatus(t, n);
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
