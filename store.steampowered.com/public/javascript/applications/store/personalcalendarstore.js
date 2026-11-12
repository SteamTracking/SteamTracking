/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { st as t, tt as n } from "./chunk~01cfc309bf.js";
import { Hy as r, cx as i } from "./main.js";
var a = e(n()),
  o = class e {
    static s_PersonalCalendarStore;
    static Get() {
      return (
        e.s_PersonalCalendarStore ||
          ((e.s_PersonalCalendarStore = new e()),
          e.s_PersonalCalendarStore.Init(),
          (window.g_SubscriptionStore = e.s_PersonalCalendarStore)),
        e.s_PersonalCalendarStore
      );
    }
    async GetCalendarRecommendations(e, t, n) {
      let i = new Date();
      (i.setDate(i.getDate() + n), i.setHours(0, 0, 0, 0));
      let a = new Date();
      (a.setDate(a.getDate() - t), a.setHours(0, 0, 0, 0));
      let o = await r.fetchQuery(c(e, t, n));
      return (
        (o.arrAppInfos = o.arrAppInfos.filter(
          (e) =>
            e.nReleaseDate >= a.getTime() / 1e3 &&
            e.nReleaseDate < i.getTime() / 1e3,
        )),
        o
      );
    }
    Init() {}
  };
function s(e, n, r) {
  return t(c(e, n, r));
}
function c(e, t, n) {
  return {
    queryKey: [`personalcalendar`, e, t, n],
    queryFn: async () => {
      let r = { tag: e, days_backward: t, days_forward: n },
        o = await a.default.get(`${i.STORE_BASE_URL}personalcalendardata`, {
          params: r,
          timeout: 2e4,
          withCredentials: !0,
        });
      return {
        arrAppInfos: o.data.arrAppInfos,
        strResultMessage: o.data.strResultMessage,
        bUsesWishlistedGames: o.data.bUsesWishlistedGames,
      };
    },
    placeholderData: (e) => e,
  };
}
function l(e, t, n, r) {
  let i = new Date();
  if ((i.setDate(i.getDate() - e), n)) {
    let e = i.getDay() % 7;
    (i.setDate(i.getDate() - e), i.setHours(0, 0, 0, 0));
  } else i.setHours(0, 0, 0, 0);
  let a = [],
    o = new Date(i),
    s = Math.ceil((e + t) / 7);
  for (let e = 0; e < s; e++) {
    a.push([]);
    for (let t = 0; t < 7; t++)
      ((!r || (o.getDay() != 0 && o.getDay() != 6)) &&
        a[e].push(Math.floor(o.getTime() / 1e3)),
        o.setDate(o.getDate() + 1),
        o.setHours(0, 0, 0, 0));
  }
  return a;
}
export { l as n, s as r, o as t };
