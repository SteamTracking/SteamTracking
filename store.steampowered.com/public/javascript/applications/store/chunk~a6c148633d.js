/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { st as e } from "./chunk~01cfc309bf.js";
import "./chunk~d382bdf2cf.js";
import { n as t, t as n } from "./chunk~73f829e6f9.js";
import {
  J as r,
  Vy as i,
  X as a,
  ly as o,
  py as s,
  ut as c,
  yx as l,
} from "./main.js";
function u() {
  let t = o(),
    n = s();
  return e(d(t, n));
}
function d(e, r) {
  return {
    queryKey: [`GetFriendsList`, r],
    queryFn: async () => {
      let r = l.Init(n),
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
    a = s();
  return e({
    queryKey: [`GetIgnoredAccounts`, a],
    queryFn: async () => {
      let e = l.Init(n);
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
function p(e, t) {
  return {
    queryKey: [`GetFriendNicknameList`, t],
    queryFn: async () => {
      let t = l.Init(a);
      return (await c.GetNicknameList(e, t)).Body().toObject();
    },
  };
}
function m(t = {}) {
  let n = o(),
    r = s();
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
  let n = l.Init(r);
  n.Body().set_appid(t);
  let i = await c.GetFriendsGameplayInfo(e, n);
  return (
    i.BSuccess() ||
      console.warn(`Failed to get gameplay info: ${i.GetEResult()}`),
    i.Body().toObject()
  );
}
function _(t, n = {}) {
  let r = o(),
    i = s();
  return e({
    queryKey: [`GameplayInfo_${i}_${t}`],
    queryFn: async () => await g(r, t),
    ...n,
  });
}
export { f as i, u as n, _ as r, m as t };
