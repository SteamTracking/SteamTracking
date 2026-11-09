import { _, _ } from "./mobx.esm.js";
import { _, _, _, _ } from "./dialogs.js";
import { _ } from "./react-router.js";
import { _ } from "./useQuery.js";
import { _ } from "./partnereventstore.js";
import { _ } from "./moment-timezone.js";
import { _ } from "./meetsteamclanid.js";
var _ = `meetsteam/updateregistration`,
  _ = `meetsteam/attendance_qrcode`;
async function _(_, _) {
  let _ = new URL(_.STORE_BASE_URL + _);
  for (let [_, _] of Object.entries(_)) _.searchParams.set(_, _);
  let _ = await fetch(_, {
    credentials: `include`,
  });
  if (!_._) throw Error(`${_} answered ${_.status}`);
  return await _.json();
}
async function _(_) {
  return (
    (
      await _(`meetsteam/availability`, {
        gid: _,
      })
    ).availability ?? []
  );
}
async function _(_) {
  return (
    (
      await _(`meetsteam/registrations`, {
        gid: _,
      })
    ).registrations ?? []
  );
}
async function _(_) {
  return (
    (
      await _(`meetsteam/registrationdetails`, {
        gid: _,
      })
    ).strJSONData ?? ``
  );
}
async function _() {
  return (
    (await _(`meetsteam/registrantinfo`, {})).info ?? {
      realname: ``,
      email: ``,
      partners: [],
    }
  );
}
async function _(_, _) {
  return await _(_, {
    gid: _,
    accountid: String(_),
  });
}
async function _(_) {
  let _ = _.STORE_BASE_URL + _,
    _ = new URLSearchParams({
      gid: _.gid,
      group_id: String(_.group_id),
      session_id: String(_.session_id),
      guest_count: String(_.guest_count),
      jsondata: _.jsondata,
      skip_email: _.skip_email ? `1` : `0`,
    }),
    _ = await fetch(_, {
      method: `POST`,
      credentials: `include`,
      body: _,
    });
  if (!_._) throw Error(`${_} answered ${_.status}`);
  return (await _.json()).success;
}
var _ = _(_(), 1),
  _ = `America/Los_Angeles`;
function _(_, _) {
  return {
    queryKey: _(_, _),
    queryFn: () => _(_),
    enabled: _() == _,
    staleTime: _.PerMinute * 10,
  };
}
function _(_, _) {
  return _(_(_, _));
}
var _ = (_, _) => [`useMeetSteamGetAvailability`, _, _];
function _(_, _, _) {
  return {
    queryKey: _(_, _, _),
    queryFn: async () => {
      let _ = await _(_);
      return _ ? JSON.parse(_) : {};
    },
    enabled: _() == _ && !!_,
  };
}
function _(_, _, _) {
  return _(_(_, _, _));
}
var _ = (_, _, _) => [`useMeetSteamGetRegistrationDetails`, _, _, _];
function _(_) {
  return {
    queryKey: [`MeetSteamRegistrantInfo`, _],
    queryFn: () => _(),
    enabled: !!_,
    staleTime: _.PerMinute * 10,
  };
}
function _(_) {
  return _(_(_));
}
function _(_, _) {
  return {
    queryKey: [`useMeetSteamQRCode`, _, _],
    queryFn: () => _(_, _),
    enabled: !!_ && !0,
    staleTime: _.PerMinute * 10,
  };
}
function _(_, _) {
  return _(_(_, _)).data?.qrcode;
}
function _(_, _ = Intl.DateTimeFormat().resolvedOptions().timeZone) {
  return _.location_type === `in_person`
    ? (_.in_person_time_zone ?? `America/Los_Angeles`)
    : _;
}
function _(_) {
  let _ = _();
  return _(() => ({
    rtime_start: _.rtime_start,
    rtime_end: _.rtime_end,
    sDisplayTimeZone: _(_, _),
  }));
}
function _(_, _) {
  let _ = _.default.unix(_),
    _ = _.default.unix(_)._(_).utcOffset() - _.utcOffset();
  return new Date((_ + _ * 60) * 1e3);
}
function _(_, _) {
  let _ = _(_, _),
    _ = new Date();
  return _.getFullYear() == _.getFullYear() ? _(_) : _(_);
}
function _(_, _, _, _) {
  let _ = _.default.unix(_),
    _ = _.default.unix(_)._(_).utcOffset() - _.utcOffset(),
    _ = _.default.unix(_),
    _ = _.default.unix(_)._(_),
    _ = _.utcOffset() - _.utcOffset();
  return _(_ + _ * 60, _ + _ * 60, !0) + (_ ? `` : ` ` + _.format(`z`));
}
export { _, _, _, _, _, _, _, _, _, _ };
