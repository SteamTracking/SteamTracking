/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { st as t, u as n } from "./libraries.js";
import { t as r } from "./meetsteamclanid.js";
import { t as i } from "./moment-timezone.js";
import {
  $y as a,
  Hb as o,
  Qi as s,
  ab as c,
  eb as l,
  ob as u,
  yb as d,
} from "./main.js";
var f = `meetsteam/updateregistration`,
  p = `meetsteam/attendance_qrcode`;
async function m(e, t) {
  let n = new URL(o.STORE_BASE_URL + e);
  for (let [e, r] of Object.entries(t)) n.searchParams.set(e, r);
  let r = await fetch(n, { credentials: `include` });
  if (!r.ok) throw Error(`${n} answered ${r.status}`);
  return await r.json();
}
async function h(e) {
  return (await m(`meetsteam/availability`, { gid: e })).availability ?? [];
}
async function g(e) {
  return (await m(`meetsteam/registrations`, { gid: e })).registrations ?? [];
}
async function _(e) {
  return (
    (await m(`meetsteam/registrationdetails`, { gid: e })).strJSONData ?? ``
  );
}
async function v() {
  return (
    (await m(`meetsteam/registrantinfo`, {})).info ?? {
      realname: ``,
      email: ``,
      partners: [],
    }
  );
}
async function y(e, t) {
  return await m(p, { gid: e, accountid: String(t) });
}
async function b(e) {
  let t = o.STORE_BASE_URL + f,
    n = new URLSearchParams({
      gid: e.gid,
      group_id: String(e.group_id),
      session_id: String(e.session_id),
      guest_count: String(e.guest_count),
      jsondata: e.jsondata,
      skip_email: e.skip_email ? `1` : `0`,
    }),
    r = await fetch(t, { method: `POST`, credentials: `include`, body: n });
  if (!r.ok) throw Error(`${t} answered ${r.status}`);
  return (await r.json()).success;
}
var x = e(i(), 1),
  S = `America/Los_Angeles`;
function C(e, t) {
  return {
    queryKey: T(e, t),
    queryFn: () => h(t),
    enabled: r() == e,
    staleTime: d.PerMinute * 10,
  };
}
function w(e, n) {
  return t(C(e, n));
}
var T = (e, t) => [`useMeetSteamGetAvailability`, e, t];
function E(e, t, n) {
  return {
    queryKey: O(e, t, n),
    queryFn: async () => {
      let e = await _(t);
      return e ? JSON.parse(e) : {};
    },
    enabled: r() == e && !!n,
  };
}
function D(e, n, r) {
  return t(E(e, n, r));
}
var O = (e, t, n) => [`useMeetSteamGetRegistrationDetails`, e, t, n];
function k(e) {
  return {
    queryKey: [`MeetSteamRegistrantInfo`, e],
    queryFn: () => v(),
    enabled: !!e,
    staleTime: d.PerMinute * 10,
  };
}
function A(e) {
  return t(k(e));
}
function j(e, t) {
  return {
    queryKey: [`useMeetSteamQRCode`, e, t],
    queryFn: () => y(e, t),
    enabled: !!t && !0,
    staleTime: d.PerMinute * 10,
  };
}
function M(e, n) {
  return t(j(e, n)).data?.qrcode;
}
function N(e, t = Intl.DateTimeFormat().resolvedOptions().timeZone) {
  return e.location_type === `in_person`
    ? (e.in_person_time_zone ?? `America/Los_Angeles`)
    : t;
}
function P(e) {
  let t = s();
  return n(() => ({
    rtime_start: e.rtime_start,
    rtime_end: e.rtime_end,
    sDisplayTimeZone: N(e, t),
  }));
}
function F(e, t) {
  let n = x.default.unix(e),
    r = x.default.unix(e).tz(t).utcOffset() - n.utcOffset();
  return new Date((e + r * 60) * 1e3);
}
function I(e, t) {
  let n = F(e, t),
    r = new Date();
  return n.getFullYear() == r.getFullYear() ? a(n) : l(n);
}
function L(e, t) {
  let n = x.default.unix(e),
    r = x.default.unix(e).tz(t).utcOffset() - n.utcOffset();
  return c(e + r * 60);
}
function R(e, t, n, r) {
  let i = x.default.unix(e),
    a = x.default.unix(e).tz(n).utcOffset() - i.utcOffset(),
    o = x.default.unix(t),
    s = x.default.unix(t).tz(n),
    c = s.utcOffset() - o.utcOffset();
  return u(e + a * 60, t + c * 60, !0) + (r ? `` : ` ` + s.format(`z`));
}
export {
  L as a,
  D as c,
  P as d,
  g as f,
  R as i,
  M as l,
  F as n,
  S as o,
  b as p,
  I as r,
  w as s,
  N as t,
  A as u,
};
