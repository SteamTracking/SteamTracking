/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { st as e } from "./libraries.js";
import { n as t } from "./partnereventutils.js";
import { Hb as n, Iy as r, mS as i, zy as a } from "./main.js";
function o(e) {
  let t = a.GetELanguageFallback(e);
  return e == t ? `${e}` : `${e}_${t}`;
}
function s(e) {
  return e ? t(new r(e.clanSteamID64), e.event) : null;
}
async function c(e, t) {
  let r = new URLSearchParams();
  e.clanAccountID && r.set(`clan_accountid`, String(e.clanAccountID)),
    e.appid && r.set(`appid`, String(e.appid)),
    e.eventGID && r.set(`event_gid`, e.eventGID),
    e.announcementGID && r.set(`announcement_gid`, e.announcementGID),
    r.set(`lang_list`, o(t)),
    r.set(`last_modified_time`, `0`),
    r.set(`origin`, window.location.origin);
  let i = n.STORE_BASE_URL + `events/ajaxgetpartnerevent?` + r.toString(),
    a = await fetch(i);
  if (!a.ok) throw Error(`${i} answered ${a.status}`);
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
  let r = i(n.LANGUAGE);
  return e(d(t, r));
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
