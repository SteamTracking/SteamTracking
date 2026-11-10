/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { st as e } from "./libraries.js";
import "./playerstore.js";
import { n as t, t as n } from "./steammessages_friendslist_pb.js";
import {
  J as r,
  Ly as i,
  X as a,
  ay as o,
  hx as s,
  ly as c,
  ut as l,
} from "./main.js";
function u() {
  let t = o(),
    n = c();
  return e(d(t, n));
}
function d(e, r) {
  return {
    queryKey: [`GetFriendsList`, r],
    queryFn: async () => {
      let r = s.Init(n),
        a = await t.GetFriendsList(e, r),
        o = [];
      for (let e of a.Body().friendslist()?.friends() ?? []) {
        let t = e.ulfriendid();
        t &&
          (e.efriendrelationship() == 3 || e.efriendrelationship() == 6) &&
          new i(t).BIsIndividualAccount() &&
          o.push(t);
      }
      return o;
    },
  };
}
function f() {
  let r = o(),
    a = c();
  return e({
    queryKey: [`GetIgnoredAccounts`, a],
    queryFn: async () => {
      let e = s.Init(n);
      return (await t.GetFriendsList(r, e))
        .Body()
        .friendslist()
        ?.friends()
        ?.filter((e) => {
          let t = new i(e.ulfriendid());
          return (
            (e.efriendrelationship() == 5 || e.efriendrelationship() == 6) &&
            t.BIsIndividualAccount()
          );
        })
        .map((e) => e.ulfriendid());
    },
  });
}
function p(t = {}) {
  let n = o(),
    r = c();
  return e({ ...m(n, r), ...t });
}
function m(e, t) {
  return {
    queryKey: [`GetFriendNicknameList`, t],
    queryFn: async () => {
      let t = s.Init(a);
      return (await l.GetNicknameList(e, t)).Body().toObject();
    },
  };
}
function h(e = {}) {
  return p({ ...e, select: (e) => g(e.nicknames) });
}
function g(e) {
  let t = new Map();
  for (let n of e ?? [])
    n.accountid !== void 0 &&
      n.nickname !== void 0 &&
      t.set(n.accountid, n.nickname);
  return t;
}
async function _(e, t) {
  let n = s.Init(r);
  n.Body().set_appid(t);
  let i = await l.GetFriendsGameplayInfo(e, n);
  return (
    i.BSuccess() ||
      console.warn(`Failed to get gameplay info: ${i.GetEResult()}`),
    i.Body().toObject()
  );
}
function v(t, n = {}) {
  let r = o(),
    i = c();
  return e({
    queryKey: [`GameplayInfo_${i}_${t}`],
    queryFn: async () => await _(r, t),
    ...n,
  });
}
export { f as i, u as n, v as r, h as t };
