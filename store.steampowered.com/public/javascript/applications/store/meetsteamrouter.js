/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  F as t,
  L as n,
  Lt as r,
  ft as i,
  ot as a,
  tt as o,
} from "./libraries.js";
import { o as s } from "./historyutils.js";
import { t as c } from "./throbber.js";
import { i as l, r as u } from "./eventdevfeaturestore.js";
import { n as d, t as f } from "./simplesuccesserror.js";
import { o as p } from "./partnereventstore.js";
import {
  Cc as m,
  Dn as h,
  Jb as g,
  Lu as _,
  Ly as v,
  Qn as y,
  Wy as b,
  Yb as x,
  Yc as S,
  _b as C,
  do as w,
  eb as T,
  fr as ee,
  hS as E,
  ir as D,
  ix as O,
  mn as k,
  rr as A,
  ub as j,
  wl as M,
  x as te,
} from "./main.js";
import {
  a as ne,
  d as N,
  i as P,
  n as F,
  r as I,
  t as L,
} from "./meetsteamregistrationhooks.js";
import { t as re } from "./collapseablesection.js";
import { t as ie } from "./useavatarandpersona.js";
import { t as ae } from "./userprofile.js";
var R = e(o()),
  z = e(r());
function oe(e, t, n, r) {
  return a({
    mutationFn: async ({ bIncludeSelf: i, rgGuests: a }) => {
      let o = new FormData();
      (o.append(`sessionid`, g()),
        o.append(`gid`, e),
        o.append(`accountid`, `` + t),
        o.append(`meetsteam_group_id`, `` + n),
        o.append(`meetsteam_session_id`, `` + r),
        o.append(`include_self`, `` + +!!i),
        a?.length && o.append(`guests`, a.join(`|`)));
      let s = `${O.STORE_BASE_URL}meetsteam/ajaxupdateattendance`;
      return (
        (await R.default.post(s, o, { withCredentials: !0 }))?.data?.success ==
        1
      );
    },
  });
}
function se(e, t, n) {
  return a({
    mutationFn: async ({ nCapacity: r }) => {
      let i = new FormData();
      (i.append(`sessionid`, g()),
        i.append(`gid`, e),
        i.append(`meetsteam_group_id`, `` + t),
        i.append(`meetsteam_session_id`, `` + n),
        i.append(`capacity`, `` + r));
      let a = `${O.STORE_BASE_URL}meetsteam/ajaxupdatecapacity`;
      return (
        (await R.default.post(a, i, { withCredentials: !0 }))?.data?.success ==
        1
      );
    },
  });
}
function ce(e) {
  return e.reduce(
    (e, t) => (
      e[t.relativeToToday] || (e[t.relativeToToday] = []),
      e[t.relativeToToday].push(t),
      e
    ),
    { today: [], past: [], future: [] },
  );
}
function B(e, t, n) {
  for (let r of e)
    if (r.group_id === t) {
      let e = r.sessions.find((e) => e.id === n);
      if (e) return { group: r, session: e };
    }
  return { group: null, session: null };
}
function V(e, t) {
  let n = l(),
    [r] = (0, z.useState)(() =>
      x(`registrations`, `application_config`)
        .map((e) => ((e.userReg = JSON.parse(e.jsondata)), e))
        .sort((t, n) => {
          let r = B(e.jsondata.meet_steam_groups, t.group_id, t.session_id);
          return (
            (B(e.jsondata.meet_steam_groups, n.group_id, n.session_id)?.session
              ?.rtime_start || 0) - (r?.session?.rtime_start || 0)
          );
        })
        .map((t) => {
          let r = B(e.jsondata.meet_steam_groups, t.group_id, t.session_id);
          return (
            (t.relativeToToday = U(r?.session, n)),
            (t.rtSesssionTime = r?.session?.rtime_start ?? 0),
            t
          );
        }),
    ),
    i = t?.trim().toLowerCase() || ``;
  return (0, z.useMemo)(
    () =>
      r.filter(
        (e) =>
          !i.length ||
          e.userReg.name?.toLowerCase().includes(i) ||
          e.userReg.company?.toLowerCase().includes(i) ||
          e.userReg.guest_names?.find((e) => e.toLowerCase().includes(i)) ||
          e.userReg.email_override?.toLowerCase().includes(i),
      ),
    [r, t],
  );
}
function H(e, t) {
  return (0, z.useMemo)(() => ce(e), [e, t]);
}
function U(e, t) {
  if (!e) return `past`;
  let n = L(e),
    r = F(e.rtime_start, n),
    i = t === void 0 ? new Date() : new Date(t * 1e3),
    a = new Date(i.getFullYear(), i.getMonth(), i.getDate()),
    o = new Date(i.getFullYear(), i.getMonth(), i.getDate() + 1);
  return r >= a && r < o ? `today` : r < a ? `past` : `future`;
}
var W = `qp3ftpND5iU-`,
  G = `oPN23gVsMtA-`,
  le = `UEUcc6MRWe8-`,
  ue = `kT4hEzPaZYI-`,
  de = `_2eRd-nCkb7s-`,
  fe = `_5eCjhjtChK8-`,
  pe = `PM3aTfYifbw-`,
  me = `zoQGA6oGiFU-`,
  he = `fCoHnd1EAUg-`,
  ge = `o5u0ZDISyOE-`,
  K = `ClYsAiAEq3o-`,
  q = `JtIOqFfvU-4-`,
  J = i();
function _e(e) {
  let [t] = s(`gid`),
    n = p(t),
    r = E(O.LANGUAGE),
    i = (0, z.useCallback)(
      () =>
        window.location.assign(
          `${O.STORE_BASE_URL}meetsteam/attendeelist?gid=${t}`,
        ),
      [t],
    );
  return n
    ? (0, J.jsxs)(`div`, {
        className: W,
        children: [
          (0, J.jsxs)(`div`, {
            className: le,
            children: [
              (0, J.jsx)(`h2`, { children: n.GetNameWithFallback(r) }),
              (0, J.jsx)(`a`, {
                href: `${O.STORE_BASE_URL}meetsteam/${t}`,
                target: `_blank`,
                children: `See Event Details`,
              }),
            ],
          }),
          (0, J.jsx)(`div`, {
            className: K,
            children: (0, J.jsxs)(A, {
              onClick: i,
              children: [
                (0, J.jsx)(w, { angle: 180, className: q }),
                `Back to full list`,
              ],
            }),
          }),
          (0, J.jsx)(ve, { eventModel: n }),
        ],
      })
    : (0, J.jsx)(c, { string: b(`#Loading`) });
}
function ve(e) {
  let { eventModel: t } = e,
    n = H(V(t)),
    [r] = s(`accountid`),
    i = l();
  return (0, J.jsxs)(`div`, {
    children: [
      (0, J.jsx)(`div`, {
        className: G,
        children: (0, J.jsx)(ae, { accountID: r }),
      }),
      (0, J.jsx)(Y, {
        eventModel: t,
        rgUserRegs: n.today,
        strTitle: `Today ` + j(i),
      }),
      (0, J.jsx)(Y, {
        eventModel: t,
        rgUserRegs: n.future,
        bHideIfEmpty: !0,
        strTitle: `Future`,
      }),
      (0, J.jsx)(Y, {
        eventModel: t,
        rgUserRegs: n.past,
        bHideIfEmpty: !0,
        strTitle: `Past`,
      }),
    ],
  });
}
function Y(e) {
  let { eventModel: t, rgUserRegs: n, bHideIfEmpty: r, strTitle: i } = e;
  return n.length == 0 && r
    ? null
    : (0, J.jsx)(re, {
        title: `${i} (${n.length})`,
        bStartMinimized: r,
        children:
          !n || n.length == 0
            ? (0, J.jsx)(`div`, { children: r ? `` : `No registrations` })
            : (0, J.jsx)(`div`, {
                children: n
                  .sort((e, t) => e.rtSesssionTime - t.rtSesssionTime)
                  .map((e) =>
                    (0, J.jsx)(
                      be,
                      { eventModel: t, reg: e },
                      `${e.group_id}_${e.session_id}`,
                    ),
                  ),
              }),
      });
}
function ye(e) {
  let { desc: t } = e,
    [n, r] = (0, z.useState)(!1),
    i = (0, z.useCallback)(() => r((e) => !e), []);
  return (0, J.jsx)(`div`, {
    className: m({ [ge]: !0, [void 0]: n }),
    onClick: i,
    onMouseEnter: () => r(!0),
    onMouseLeave: () => r(!1),
    children: t,
  });
}
function be(e) {
  let { reg: t, eventModel: n } = e,
    r = new v(t.steamid).GetAccountID(),
    [i] = ie(t.userReg.accountid),
    [a, o] = (0, z.useState)(!0),
    [s, c] = (0, z.useState)([]),
    [l, u] = (0, z.useState)(!1),
    d = t.userReg,
    { group: f, session: p } = B(
      n.jsondata.meet_steam_groups,
      t.group_id,
      t.session_id,
    ),
    [m, h, g] = M(),
    _ = oe(n.GID, r, t.group_id, t.session_id),
    y = new Set(
      t.guests_attendance?.length > 0 ? t.guests_attendance.split(`|`) : [],
    ),
    b = t.attendance_count > y.size,
    x = (e, t, n, r) =>
      (0, J.jsxs)(J.Fragment, {
        children: [
          (0, J.jsxs)(`span`, { className: he, children: [e, `:`, `\xA0`] }),
          t,
          n &&
            (0, J.jsxs)(J.Fragment, {
              children: [
                `\xA0`,
                (0, J.jsxs)(`span`, {
                  className: `wLlCdBivyGc-`,
                  children: [`(`, n, `)`],
                }),
              ],
            }),
          (0, J.jsxs)(J.Fragment, {
            children: [
              `\xA0`,
              `-`,
              (0, J.jsx)(`span`, {
                children: r ? `✅ checked in` : `☐ not checked in`,
              }),
            ],
          }),
        ],
      });
  return (0, J.jsxs)(`div`, {
    children: [
      (0, J.jsx)(Se, { group: f, session: p }),
      l
        ? (0, J.jsx)(`div`, {
            className: me,
            children: `Attendee has been checked in`,
          })
        : (0, J.jsxs)(`div`, {
            className: pe,
            children: [
              (0, J.jsx)(D, {
                label: (0, J.jsx)(J.Fragment, {
                  children: x(
                    `Attendee`,
                    d.name || i.persona_name,
                    d.email_override,
                    b,
                  ),
                }),
                checked: a,
                onChange: o,
              }),
              d.guest_names?.length > 0 &&
                (0, J.jsx)(J.Fragment, {
                  children: d.guest_names.map((e) =>
                    (0, J.jsx)(
                      D,
                      {
                        label: (0, J.jsx)(J.Fragment, {
                          children: x(`Guest`, e, void 0, y.has(e)),
                        }),
                        checked: s.includes(e),
                        onChange: (t) => {
                          c((n) =>
                            t
                              ? n.includes(e)
                                ? n
                                : [...n, e]
                              : n.filter((t) => t !== e),
                          );
                        },
                      },
                      `` + t.group_id + `_` + t.session_id + `_` + e,
                    ),
                  ),
                }),
              (0, J.jsx)(ee, {
                onClick: h,
                children: `Check in selected people`,
              }),
            ],
          }),
      (0, J.jsx)(k, {
        active: m,
        children: (0, J.jsx)(S, {
          children: (0, J.jsx)(xe, {
            closeModal: g,
            bIncludeSelf: a,
            rgGuestsAttending: s,
            fnMarkAttendance: _,
            fnOnSuccess: () => u(!0),
          }),
        }),
      }),
    ],
  });
}
function xe(e) {
  let {
      closeModal: t,
      bIncludeSelf: n,
      rgGuestsAttending: r,
      fnMarkAttendance: i,
      fnOnSuccess: a,
    } = e,
    o = d();
  return o.bLoading
    ? (0, J.jsx)(f, { state: o, strDialogTitle: b(`#Saving`), closeModal: t })
    : (0, J.jsx)(h, {
        onCancel: t,
        strTitle: b(`#Button_Submit`),
        bAllowFullSize: !0,
        onOK: async () => {
          (o.fnSetLoading(!0),
            i
              .mutateAsync({ bIncludeSelf: n, rgGuests: r })
              .then((e) => {
                e
                  ? (a(),
                    o.fnSetStrSuccess(
                      `Success! This person has been checked in.`,
                    ))
                  : o.fnSetStrError(b(`#Login_Error_Network_Description`));
              })
              .catch(() =>
                o.fnSetStrError(b(`#Login_Error_Network_Description`)),
              ));
        },
        children: `Mark as checked in?`,
      });
}
function Se(e) {
  let { session: t, group: n } = e,
    { sDisplayTimeZone: r, rtime_start: i, rtime_end: a } = N(e.session),
    o = I(i, r),
    s = P(i, a, r);
  return !t || !n
    ? (0, J.jsx)(`div`, { children: `Session Infomrmation Missing` })
    : (0, J.jsxs)(`div`, {
        className: ue,
        children: [
          (0, J.jsx)(`div`, {
            className: de,
            children: n.localized_session_title[0],
          }),
          (0, J.jsxs)(`div`, {
            className: fe,
            children: [o, ` @ `, (0, J.jsx)(`b`, { children: s })],
          }),
          (0, J.jsx)(`div`, {
            children: (0, J.jsx)(ye, {
              desc: `Description: ${n.localized_session_description[0] || ``}`,
            }),
          }),
          !1,
        ],
      });
}
var Ce = `nRDp-l61YHE-`,
  we = `CBm6tYhtelM-`,
  Te = `qOYa8mxlKiI-`,
  Ee = `_6dnv0Uap06Q-`,
  De = `_3j92ztnh3-U-`,
  Oe = `nYQPuX9zn5w-`,
  ke = `D5PlmnNKbM4-`,
  Ae = `TbuBLdEM4EU-`,
  je = `aQ8WH9RBXYM-`,
  Me = `qXuG2pGa7SM-`,
  Ne = `v2t82VLw74A-`,
  Pe = `C0YiVY9PBgY-`,
  Fe = `Zn9u5dfjLaA-`,
  Ie = `gK91ntqy1Mg-`,
  Le = `Tgky-eweAsQ-`,
  X = `rkfz9oU8Beg-`,
  Re = `MzXqArUOQNI-`,
  ze = `_05vyEbktq5k-`;
function Z(e) {
  let t = new Date(e.getTime());
  return (t.setHours(0, 0, 0, 0), t);
}
function Be(e, t) {
  return e.reduce((e, n) => {
    let r = t(n),
      i = Math.floor(r.getTime() / 1e3),
      a = e.get(i) || [];
    return (e.set(i, [...a, n]), e);
  }, new Map());
}
function Ve(e) {
  let [t] = s(`gid`),
    n = p(t),
    r = E(O.LANGUAGE),
    [i, a] = (0, z.useState)(``);
  return n
    ? (0, J.jsxs)(`div`, {
        className: Ce,
        children: [
          (0, J.jsxs)(`div`, {
            className: we,
            children: [
              (0, J.jsx)(`h1`, { children: n.GetNameWithFallback(r) }),
              (0, J.jsx)(`a`, {
                href: `${O.STORE_BASE_URL}meetsteam/${t}`,
                target: `_blank`,
                children: `See Event Details`,
              }),
            ],
          }),
          (0, J.jsx)(We, { eventModel: n }),
          (0, J.jsx)(`div`, {
            className: Te,
            children: (0, J.jsx)(y, {
              type: `text`,
              label: `Search for an attendee`,
              value: i,
              bShowClearAction: !0,
              onChange: (e) => a(e.currentTarget.value || ``),
              placeholder: `Type name or partner or email address`,
            }),
          }),
          (0, J.jsx)(He, { eventModel: n, strSearch: i.toLowerCase() }),
        ],
      })
    : (0, J.jsx)(c, { string: b(`#Loading`) });
}
function He(e) {
  let { eventModel: t, strSearch: n } = e,
    r = V(t, n),
    [i, a] = (0, z.useState)(null),
    [o, s] = (0, z.useMemo)(() => {
      let e = new Map();
      return (
        r.forEach((t) => {
          [t.userReg.name, ...(t.userReg.guest_names || [])].forEach((n) => {
            let r = n.toLowerCase();
            e.has(r) ? e.get(r).push(t) : e.set(r, [t]);
          });
        }),
        [e, Array.from(e.keys()).sort()]
      );
    }, [r]);
  return (
    z.useEffect(() => {
      a(null);
    }, [n]),
    (0, J.jsxs)(`div`, {
      children: [
        (0, J.jsx)(`h3`, { children: `Attendees` }),
        i
          ? (0, J.jsx)(Ue, {
              eventModel: t,
              rgSelected: i,
              strSearch: n,
              onCleanSelection: () => a(null),
            })
          : (0, J.jsx)(J.Fragment, {
              children: s
                .filter((e) => !n || e.includes(n))
                .map((e) =>
                  (0, J.jsx)(
                    `div`,
                    {
                      className: Ee,
                      children: (0, J.jsx)(A, {
                        onClick: () => a(o.get(e.toLowerCase())),
                        children: e,
                      }),
                    },
                    e,
                  ),
                ),
            }),
      ],
    })
  );
}
function Ue(e) {
  let { eventModel: t, rgSelected: n, strSearch: r, onCleanSelection: i } = e,
    a = l(),
    o = H(n, r);
  return (0, J.jsxs)(`div`, {
    children: [
      (0, J.jsx)(`div`, {
        className: K,
        children: (0, J.jsxs)(A, {
          onClick: i,
          children: [
            (0, J.jsx)(w, { angle: 180, className: q }),
            `Back to full list`,
          ],
        }),
      }),
      (0, J.jsx)(Y, {
        eventModel: t,
        rgUserRegs: o.today,
        strTitle: `Today ` + j(a),
      }),
      (0, J.jsx)(Y, {
        eventModel: t,
        rgUserRegs: o.future,
        bHideIfEmpty: !0,
        strTitle: `Future`,
      }),
      (0, J.jsx)(Y, {
        eventModel: t,
        rgUserRegs: o.past,
        bHideIfEmpty: !0,
        strTitle: `Past`,
      }),
    ],
  });
}
function We(e) {
  let { eventModel: t } = e,
    n = u(),
    [r, i] = z.useState(!1),
    { rgGroupedSessions: a, bMoreSessions: o } = z.useMemo(() => {
      let e = t?.jsondata?.meet_steam_groups?.flatMap((e) =>
          e.sessions.map((t) => {
            let n = L(t);
            return { group: e, session: t, displayDate: F(t.rtime_start, n) };
          }),
        ),
        i = e?.filter((e) => r || Z(e.displayDate) >= Z(n)),
        a = r || (e && e.length > i.length);
      return {
        rgGroupedSessions: Be(i ?? [], (e) => Z(e.displayDate)),
        bMoreSessions: a,
      };
    }, [t?.jsondata?.meet_steam_groups, n, r]),
    s = z.useMemo(() => {
      let e = x(`registrations`, `application_config`);
      if (e && typeof e == `object`)
        return e.reduce((e, t) => {
          let n = `${t.group_id}_${t.session_id}`,
            r = e.get(n) ?? [];
          return (r.push(t), e.set(n, r), e);
        }, new Map());
    }, []);
  if (!s || (a.size == 0 && !o)) return;
  let c =
      Array.from(a.keys()).reduce(
        (e, t) => (e == null || (t * 1e3 > n.getTime() && t < e) ? t : e),
        void 0,
      ) ?? 0,
    l = Array.from(a.keys()).some((e) => C(n, new Date(e * 1e3)));
  return (0, J.jsxs)(`div`, {
    className: De,
    children: [
      o &&
        (0, J.jsx)(D, { label: `Show past events`, checked: r, onChange: i }),
      (0, J.jsx)(`div`, {
        className: Oe,
        children: Array.from(a.keys()).map((e) =>
          (0, J.jsx)(
            Ge,
            {
              eventModel: t,
              date: new Date(e * 1e3),
              sessionsAndGroups: a.get(e),
              rgRegistrationInfo: s,
              isToday: C(l ? n : new Date(c * 1e3), new Date(e * 1e3)),
            },
            e,
          ),
        ),
      }),
    ],
  });
}
function Ge(e) {
  let {
    eventModel: t,
    date: n,
    sessionsAndGroups: r,
    rgRegistrationInfo: i,
    isToday: a,
  } = e;
  return (0, J.jsxs)(`div`, {
    className: m(Ae, !a && `dfDPmr4MFBA-`),
    children: [
      (0, J.jsx)(`div`, { className: ke, children: T(n) }),
      (0, J.jsx)(`div`, {
        className: je,
        children: r.map((e) =>
          (0, J.jsx)(
            Ke,
            {
              eventModel: t,
              date: n,
              registrations: i.get(`${e.group.group_id}_${e.session.id}`) ?? [],
              group: e.group,
              session: e.session,
            },
            `${e.group.group_id}_${e.session.id}`,
          ),
        ),
      }),
    ],
  });
}
function Ke(e) {
  let { eventModel: t, date: n, group: r, session: i, registrations: a } = e,
    o = E(O.LANGUAGE),
    s = u(),
    { sDisplayTimeZone: c, rtime_start: l } = N(i),
    d = ne(l, c),
    f = a.reduce((e, t) => e + (t.guests_registered ?? 0), 0),
    p = a.reduce(
      (e, t) =>
        e +
        (t.rt_attendance_marked > 0 && t.guests_registered
          ? t.guests_registered
          : 0),
      0,
    ),
    [h, g, _] = M(),
    v = se(t.GID, r.group_id, i.id),
    y = () => window.location.reload();
  return (0, J.jsxs)(`div`, {
    className: Me,
    children: [
      (0, J.jsxs)(`div`, {
        className: Ne,
        children: [
          (0, J.jsx)(`div`, {
            className: Pe,
            children:
              r.localized_session_title[o] ?? r.localized_session_title[0],
          }),
          (0, J.jsx)(`div`, { className: Fe, children: d }),
        ],
      }),
      (0, J.jsx)(Q, {
        title: `Registered:`,
        nCount: f,
        nCapacity: i.max_capacity,
      }),
      (0, J.jsx)(Q, {
        title: `Checked in:`,
        nCount: p,
        nCapacity: i.max_capacity,
      }),
      Z(n) >= Z(s) &&
        (0, J.jsxs)(J.Fragment, {
          children: [
            (0, J.jsx)(A, {
              className: m(`-nD2J-ewBfk-`),
              onClick: g,
              children: `Update capacity...`,
            }),
            (0, J.jsx)(k, {
              active: h,
              children: (0, J.jsx)(S, {
                children: (0, J.jsx)(qe, {
                  closeModal: _,
                  nCapacity: i.max_capacity ?? 0,
                  fnUpdateCapacity: v,
                  fnOnSuccess: () => y(),
                }),
              }),
            }),
          ],
        }),
    ],
  });
}
function qe(e) {
  let { closeModal: t, nCapacity: n, fnUpdateCapacity: r, fnOnSuccess: i } = e,
    [a, o] = z.useState(n.toString()),
    s = d();
  return s.bLoading
    ? (0, J.jsx)(f, { state: s, strDialogTitle: b(`#Saving`), closeModal: t })
    : (0, J.jsx)(h, {
        onCancel: t,
        strTitle: b(`Update Capacity`),
        bAllowFullSize: !0,
        onOK: async () => {
          s.fnSetLoading(!0);
          let e = Number.isNaN(Number.parseInt(a))
            ? void 0
            : Number.parseInt(a);
          r.mutateAsync({ nCapacity: e })
            .then((e) => {
              e
                ? (i(), s.fnSetStrSuccess(`Max capacity updated.`))
                : s.fnSetStrError(b(`#Login_Error_Network_Description`));
            })
            .catch(() =>
              s.fnSetStrError(b(`#Login_Error_Network_Description`)),
            );
        },
        children: (0, J.jsx)(y, {
          className: ze,
          label: `New capacity`,
          type: `text`,
          autoComplete: `off`,
          value: a,
          onChange: (e) => o(e.currentTarget.value),
        }),
      });
}
function Q(e) {
  let { title: t, nCount: n, nCapacity: r } = e,
    i = n >= r,
    a = Math.min((n / r) * 100, 100),
    o = n > 0 ? `${a}%` : `0%`;
  return (0, J.jsxs)(`div`, {
    className: Ie,
    children: [
      (0, J.jsxs)(`span`, { children: [t, ` `, n, ` / `, r] }),
      (0, J.jsx)(`div`, {
        className: Le,
        children: (0, J.jsx)(`div`, {
          className: m(X, i ? Re : ``),
          style: { width: o },
        }),
      }),
    ],
  });
}
var $ = {
  MeetSteamAttendance: () => `${_.MeetSteamRoute()}attendance`,
  MeetSteamAttendeeList: () => `${_.MeetSteamRoute()}attendeelist`,
};
function Je(e) {
  return (0, J.jsxs)(n, {
    children: [
      (0, J.jsx)(t, {
        path: $.MeetSteamAttendance(),
        render: (e) => (0, J.jsx)(_e, { ...e }),
      }),
      (0, J.jsx)(t, {
        path: $.MeetSteamAttendeeList(),
        render: (e) => (0, J.jsx)(Ve, { ...e }),
      }),
      (0, J.jsx)(t, { children: (0, J.jsx)(te, {}) }),
    ],
  });
}
export { $ as MeetSteamRoutes, Je as default };
