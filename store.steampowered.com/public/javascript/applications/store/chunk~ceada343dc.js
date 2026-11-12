/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { st as e } from "./chunk~01cfc309bf.js";
import { n as t } from "./chunk~593a6b8ddc.js";
import { Vy as n, Wy as r, qb as i, yS as a } from "./main.js";
function o(e) {
  let t = r.GetELanguageFallback(e);
  return e == t ? `${e}` : `${e}_${t}`;
}
function s(e) {
  return e ? t(new n(e.clanSteamID64), e.event) : null;
}
async function c(e, t) {
  let n = new URLSearchParams();
  (e.clanAccountID && n.set(`clan_accountid`, String(e.clanAccountID)),
    e.appid && n.set(`appid`, String(e.appid)),
    e.eventGID && n.set(`event_gid`, e.eventGID),
    e.announcementGID && n.set(`announcement_gid`, e.announcementGID),
    n.set(`lang_list`, o(t)),
    n.set(`last_modified_time`, `0`),
    n.set(`origin`, window.location.origin));
  let r = i.STORE_BASE_URL + `events/ajaxgetpartnerevent?` + n.toString(),
    a = await fetch(r);
  if (!a.ok) throw Error(`${r} answered ${a.status}`);
  let s = await a.json();
  return s.success !== 1 || !s.event?.clan_steamid
    ? null
    : { clanSteamID64: s.event.clan_steamid, event: s.event };
}
function l(e, t) {
  return [
    `LinkedPartnerEvent`,
    e.clanAccountID,
    e.appid,
    e.eventGID,
    e.announcementGID,
    t,
  ];
}
function u(e) {
  return (
    !!e &&
    (!!e.clanAccountID || !!e.appid) &&
    (!!e.eventGID || !!e.announcementGID)
  );
}
function d(e, t) {
  let n = u(e);
  return {
    queryKey: l(e ?? {}, t),
    queryFn: () => c(e ?? {}, t),
    select: s,
    enabled: n,
    staleTime: 36e5,
    retry: !1,
  };
}
function f(t) {
  let n = a(i.LANGUAGE);
  return e(d(t, n));
}
var p = 1778623200;
function m(e, t) {
  let n = !1;
  return (
    e && e.GetEventType() == 36
      ? (n = !0)
      : e && t && t.is_creator_home && (n = h(e, t)),
    n
  );
}
function h(e, t) {
  return !!t && !!t.is_creator_home && (e.createTime ?? 0) > p;
}
export { o as n, f as r, m as t };
