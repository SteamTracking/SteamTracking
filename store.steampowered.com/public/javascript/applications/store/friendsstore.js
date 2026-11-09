/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { st as e } from "./libraries.js";
import "./playerstore.js";
import { n as t, t as n } from "./steammessages_friendslist_pb.js";
import {
  Iy as r,
  J as i,
  X as a,
  cy as o,
  iy as s,
  mx as c,
  ut as l,
} from "./main.js";
function u() {
  let t = s(),
    n = o();
  return e(d(t, n));
}
function d(e, i) {
  return {
    queryKey: [`GetFriendsList`, i],
    queryFn: async () => {
      let i = c.Init(n),
        a = await t.GetFriendsList(e, i),
        o = [];
      for (let e of a.Body().friendslist()?.friends() ?? []) {
        let t = e.ulfriendid();
        t &&
          (e.efriendrelationship() == 3 || e.efriendrelationship() == 6) &&
          new r(t).BIsIndividualAccount() &&
          o.push(t);
      }
      return o;
    },
  };
}
function f() {
  let i = s(),
    a = o();
  return e({
    queryKey: [`GetIgnoredAccounts`, a],
    queryFn: async () => {
      let e = c.Init(n);
      return (await t.GetFriendsList(i, e))
        .Body()
        .friendslist()
        ?.friends()
        ?.filter((e) => {
          let t = new r(e.ulfriendid());
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
  let n = s(),
    r = o();
  return e({ ...m(n, r), ...t });
}
function m(e, t) {
  return {
    queryKey: [`GetFriendNicknameList`, t],
    queryFn: async () => {
      let t = c.Init(a);
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
  let n = c.Init(i);
  n.Body().set_appid(t);
  let r = await l.GetFriendsGameplayInfo(e, n);
  return (
    r.BSuccess() ||
      console.warn(`Failed to get gameplay info: ${r.GetEResult()}`),
    r.Body().toObject()
  );
}
function v(t, n = {}) {
  let r = s(),
    i = o();
  return e({
    queryKey: [`GameplayInfo_${i}_${t}`],
    queryFn: async () => await _(r, t),
    ...n,
  });
}
export { f as i, u as n, v as r, h as t };
