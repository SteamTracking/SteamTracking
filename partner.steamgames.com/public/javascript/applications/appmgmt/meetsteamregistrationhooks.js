/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { W as e, sn as t } from "./chunk~de7f2df91c.js";
import { $a as n, Aa as r, Ca as i, wa as a } from "./chunk~1fa4b8f2ff.js";
import { w as o } from "./chunk~44f252525d.js";
import { t as s } from "./chunk~ede3e357a2.js";
import { c } from "./chunk~fc8a9e4879.js";
import { t as l } from "./chunk~429133cc70.js";
import { t as u } from "./chunk~93fc7377c2.js";
var d = `meetsteam/updateregistration`,
  f = `meetsteam/attendance_qrcode`;
async function p(t, n) {
  let r = new URL(e.STORE_BASE_URL + t);
  for (let [e, t] of Object.entries(n)) r.searchParams.set(e, t);
  let i = await fetch(r, { credentials: `include` });
  if (!i.ok) throw Error(`${r} answered ${i.status}`);
  return await i.json();
}
async function m(e) {
  return (await p(`meetsteam/availability`, { gid: e })).availability ?? [];
}
async function h(e) {
  return (await p(`meetsteam/registrations`, { gid: e })).registrations ?? [];
}
async function g(e) {
  return (
    (await p(`meetsteam/registrationdetails`, { gid: e })).strJSONData ?? ``
  );
}
async function _() {
  return (
    (await p(`meetsteam/registrantinfo`, {})).info ?? {
      realname: ``,
      email: ``,
      partners: [],
    }
  );
}
async function v(e, t) {
  return await p(f, { gid: e, accountid: String(t) });
}
async function y(t) {
  let n = e.STORE_BASE_URL + d,
    r = new URLSearchParams({
      gid: t.gid,
      group_id: String(t.group_id),
      session_id: String(t.session_id),
      guest_count: String(t.guest_count),
      jsondata: t.jsondata,
      skip_email: t.skip_email ? `1` : `0`,
    }),
    i = await fetch(n, { method: `POST`, credentials: `include`, body: r });
  if (!i.ok) throw Error(`${n} answered ${i.status}`);
  return (await i.json()).success;
}
var b = t(l(), 1),
  x = `America/Los_Angeles`;
function S(e, t) {
  return {
    queryKey: w(e, t),
    queryFn: () => m(t),
    enabled: u() == e,
    staleTime: n.PerMinute * 10,
  };
}
function C(e, t) {
  return s(S(e, t));
}
var w = (e, t) => [`useMeetSteamGetAvailability`, e, t];
function T(e, t, n) {
  return {
    queryKey: D(e, t, n),
    queryFn: async () => {
      let e = await g(t);
      return e ? JSON.parse(e) : {};
    },
    enabled: u() == e && !!n,
  };
}
function E(e, t, n) {
  return s(T(e, t, n));
}
var D = (e, t, n) => [`useMeetSteamGetRegistrationDetails`, e, t, n];
function O(e) {
  return {
    queryKey: [`MeetSteamRegistrantInfo`, e],
    queryFn: () => _(),
    enabled: !!e,
    staleTime: n.PerMinute * 10,
  };
}
function k(e) {
  return s(O(e));
}
function A(e, t) {
  return {
    queryKey: [`useMeetSteamQRCode`, e, t],
    queryFn: () => v(e, t),
    enabled: !!t && !0,
    staleTime: n.PerMinute * 10,
  };
}
function j(e, t) {
  return s(A(e, t)).data?.qrcode;
}
function M(e, t = Intl.DateTimeFormat().resolvedOptions().timeZone) {
  return e.location_type === `in_person`
    ? (e.in_person_time_zone ?? `America/Los_Angeles`)
    : t;
}
function N(e) {
  let t = c();
  return o(() => ({
    rtime_start: e.rtime_start,
    rtime_end: e.rtime_end,
    sDisplayTimeZone: M(e, t),
  }));
}
function P(e, t) {
  let n = b.default.unix(e),
    r = b.default.unix(e).tz(t).utcOffset() - n.utcOffset();
  return new Date((e + r * 60) * 1e3);
}
function F(e, t) {
  let n = P(e, t),
    r = new Date();
  return n.getFullYear() == r.getFullYear() ? i(n) : a(n);
}
function I(e, t, n, i) {
  let a = b.default.unix(e),
    o = b.default.unix(e).tz(n).utcOffset() - a.utcOffset(),
    s = b.default.unix(t),
    c = b.default.unix(t).tz(n),
    l = c.utcOffset() - s.utcOffset();
  return r(e + o * 60, t + l * 60, !0) + (i ? `` : ` ` + c.format(`z`));
}
export {
  E as a,
  N as c,
  C as i,
  h as l,
  I as n,
  j as o,
  x as r,
  k as s,
  F as t,
  y as u,
};
