/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { st as e } from "./chunk~01cfc309bf.js";
import "./chunk~d382bdf2cf.js";
import { n as t, t as n } from "./chunk~73f829e6f9.js";
import {
  J as r,
  Ox as i,
  Sy as a,
  X as o,
  Xy as s,
  ut as c,
  vy as l,
} from "./main.js";
function u() {
  let t = l(),
    n = a();
  return e(d(t, n));
}
function d(e, r) {
  return {
    queryKey: [`GetFriendsList`, r],
    queryFn: async () => {
      let r = i.Init(n),
        a = await t.GetFriendsList(e, r),
        o = [];
      for (let e of a.Body().friendslist()?.friends() ?? []) {
        let t = e.ulfriendid();
        t &&
          (e.efriendrelationship() == 3 || e.efriendrelationship() == 6) &&
          new s(t).BIsIndividualAccount() &&
          o.push(t);
      }
      return o;
    },
  };
}
function f() {
  let r = l(),
    o = a();
  return e({
    queryKey: [`GetIgnoredAccounts`, o],
    queryFn: async () => {
      let e = i.Init(n);
      return (await t.GetFriendsList(r, e))
        .Body()
        .friendslist()
        ?.friends()
        ?.filter((e) => {
          let t = new s(e.ulfriendid());
          return (
            (e.efriendrelationship() == 5 || e.efriendrelationship() == 6) &&
            t.BIsIndividualAccount()
          );
        })
        .map((e) => e.ulfriendid());
    },
  });
}
function p(e, t) {
  return {
    queryKey: [`GetFriendNicknameList`, t],
    queryFn: async () => {
      let t = i.Init(o);
      return (await c.GetNicknameList(e, t)).Body().toObject();
    },
  };
}
function m(t = {}) {
  let n = l(),
    r = a();
  return e({ ...p(n, r), ...t, select: (e) => h(e.nicknames) });
}
function h(e) {
  let t = new Map();
  for (let n of e ?? [])
    n.accountid !== void 0 &&
      n.nickname !== void 0 &&
      t.set(n.accountid, n.nickname);
  return t;
}
async function g(e, t) {
  let n = i.Init(r);
  n.Body().set_appid(t);
  let a = await c.GetFriendsGameplayInfo(e, n);
  return (
    a.BSuccess() ||
      console.warn(`Failed to get gameplay info: ${a.GetEResult()}`),
    a.Body().toObject()
  );
}
function _(t, n = {}) {
  let r = l(),
    i = a();
  return e({
    queryKey: [`GameplayInfo_${i}_${t}`],
    queryFn: async () => await g(r, t),
    ...n,
  });
}
export { f as i, u as n, _ as r, m as t };
