/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { ot as e } from "./chunk~01cfc309bf.js";
import "./chunk~d382bdf2cf.js";
import { n as t, t as n } from "./chunk~73f829e6f9.js";
import {
  Cy as r,
  J as i,
  X as a,
  Zy as o,
  kx as s,
  ut as c,
  yy as l,
} from "./main.js";
function u() {
  let t = l(),
    n = r();
  return e(d(t, n));
}
function d(e, r) {
  return {
    queryKey: [`GetFriendsList`, r],
    queryFn: async () => {
      let r = s.Init(n),
        i = await t.GetFriendsList(e, r),
        a = [];
      for (let e of i.Body().friendslist()?.friends() ?? []) {
        let t = e.ulfriendid();
        t &&
          (e.efriendrelationship() == 3 || e.efriendrelationship() == 6) &&
          new o(t).BIsIndividualAccount() &&
          a.push(t);
      }
      return a;
    },
  };
}
function f() {
  let i = l(),
    a = r();
  return e({
    queryKey: [`GetIgnoredAccounts`, a],
    queryFn: async () => {
      let e = s.Init(n);
      return (await t.GetFriendsList(i, e))
        .Body()
        .friendslist()
        ?.friends()
        ?.filter((e) => {
          let t = new o(e.ulfriendid());
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
      let t = s.Init(a);
      return (await c.GetNicknameList(e, t)).Body().toObject();
    },
  };
}
function m(t = {}) {
  let n = l(),
    i = r();
  return e({ ...p(n, i), ...t, select: (e) => h(e.nicknames) });
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
  let n = s.Init(i);
  n.Body().set_appid(t);
  let r = await c.GetFriendsGameplayInfo(e, n);
  return (
    r.BSuccess() ||
      console.warn(`Failed to get gameplay info: ${r.GetEResult()}`),
    r.Body().toObject()
  );
}
function _(t, n = {}) {
  let i = l(),
    a = r();
  return e({
    queryKey: [`GameplayInfo_${a}_${t}`],
    queryFn: async () => await g(i, t),
    ...n,
  });
}
export { f as i, u as n, _ as r, m as t };
