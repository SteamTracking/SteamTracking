/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  A as t,
  C as n,
  Ft as r,
  H as i,
  K as a,
  ot as o,
  w as s,
} from "./chunk~01cfc309bf.js";
import {
  $ as c,
  F as l,
  Q as u,
  Qr as d,
  Xr as f,
  Zr as p,
  a as m,
  c as h,
  en as g,
  h as _,
  ht as ee,
  i as te,
  mr as ne,
  n as re,
  nt as ie,
  o as ae,
  ot as oe,
  r as se,
  tt as ce,
  z as le,
} from "./chunk~35b0bf48ef.js";
import { S as ue } from "./chunk~3f4314f3b4.js";
import { C as v, a as de } from "./chunk~437071091c.js";
import { P as y, U as fe, u as pe, v as me } from "./chunk~05a38bc848.js";
import {
  At as he,
  B as ge,
  Ct as b,
  Dt as _e,
  Et as ve,
  H as ye,
  Ot as be,
  St as xe,
  Tt as Se,
  V as Ce,
  X as we,
  bt as Te,
  jt as Ee,
  kt as De,
  pt as Oe,
  wt as x,
  xt as ke,
} from "./chunk~77ea210942.js";
import { t as Ae } from "./chunk~008c00a198.js";
import { n as je, r as Me } from "./chunk~0111fcd096.js";
import { d as Ne } from "./chunk~ec644f97c6.js";
import { V as S, x as C } from "./chunk~91ae5e1167.js";
import { r as Pe } from "./chunk~739842ca30.js";
import { j as w } from "./chunk~2bb3c0c267.js";
import {
  $a as Fe,
  Bn as Ie,
  Dc as Le,
  Er as Re,
  Eu as T,
  Hs as E,
  Ja as ze,
  Js as Be,
  Ko as Ve,
  Lo as D,
  Mo as He,
  Pc as Ue,
  Qa as We,
  Qh as O,
  Sa as Ge,
  Tn as Ke,
  Vn as qe,
  Wo as Je,
  Xa as Ye,
  Ya as Xe,
  Yo as k,
  Za as Ze,
  Zd as A,
  _d as j,
  _f as Qe,
  bm as $e,
  ca as et,
  cs as tt,
  dp as M,
  du as nt,
  ec as rt,
  eo as it,
  es as N,
  fs as P,
  ga as F,
  h as I,
  if as L,
  ig as R,
  io as at,
  jd as ot,
  jo as st,
  ku as ct,
  m as lt,
  md as ut,
  no as dt,
  ps as ft,
  qa as pt,
  qi as z,
  qo as mt,
  ro as ht,
  rr as gt,
  s as _t,
  ss as B,
  to as vt,
  ts as yt,
  xm as bt,
  ys as xt,
} from "./main.js";
import {
  B as St,
  E as Ct,
  F as wt,
  G as Tt,
  H as Et,
  I as Dt,
  K as Ot,
  L as kt,
  N as At,
  R as jt,
  S as Mt,
  T as Nt,
  U as Pt,
  V as Ft,
  W as It,
  X as Lt,
  Y as Rt,
  Z as zt,
  _ as Bt,
  a as Vt,
  c as Ht,
  g as V,
  h as Ut,
  i as Wt,
  j as Gt,
  l as Kt,
  m as H,
  n as qt,
  o as Jt,
  p as U,
  r as Yt,
  s as Xt,
  v as Zt,
  w as Qt,
  x as $t,
  y as W,
  z as en,
} from "./chunk~5c33f42766.js";
import { t as tn } from "./chunk~01d6da9524.js";
function nn(e) {
  return Lt({ rules: [zt(/^>$/, e.nodes.quote)] });
}
var G = e(r()),
  K = o();
function rn(e, t, n, r = y.left) {
  e.dispatch(
    e.state.tr.insert(e.state.selection.to, t.create({ videoID: n, align: r })),
  );
}
function an(e) {
  let {
      videoID: t,
      align: n,
      editModel: r,
      selected: i,
      setAttrs: a,
      focusView: o,
    } = e,
    [s, c, l] = j(),
    u = G.useCallback(() => {
      (l(), o());
    }, [l, o]),
    f = G.useCallback(
      (e, t) => {
        (a({ videoID: e, align: t }), u());
      },
      [a, u],
    );
  return (0, K.jsxs)(K.Fragment, {
    children: [
      s &&
        (0, K.jsx)(on, {
          videoID: t,
          align: n,
          bEditing: !0,
          hideModal: u,
          onSave: f,
        }),
      (0, K.jsxs)(p, {
        className: T(ie, i && `ef5sjCjBDrY-`),
        children: [
          (0, K.jsx)(d, {
            onEditClick: c,
            onDeleteClick: e.removeNode,
            bStrongShadows: !0,
          }),
          i && (0, K.jsx)(`div`, { className: `RhG8qWaN38o-` }),
          (0, K.jsx)(Te, {
            event: r.GetEventModel(),
            strTag: `previewyoutube`,
            args: { "": `${t};${n}` },
            rawargs: `${t};${n}`,
            showErrorInfo: !0,
          }),
        ],
      }),
    ],
  });
}
function on(e) {
  let {
      videoID: t = ``,
      align: n = ``,
      bEditing: r = !1,
      hideModal: i,
      onSave: a,
    } = e,
    [o, s] = G.useState(n || y.full),
    [c, l] = G.useState(t ? `https://www.youtube.com/watch?v=${t}` : ``),
    [u, d] = G.useState(void 0),
    f = G.useCallback(() => {
      let { strVideoID: e } = fe(c);
      return (e ? a(e, o) : d(L(`#EventEditor_InsertYouTube_NoURL`)), !1);
    }, [c, o, a]),
    p = G.useCallback((e) => {
      e && (e.element.focus(), e.element.select());
    }, []);
  return (0, K.jsx)(E, {
    active: !0,
    children: (0, K.jsxs)(Qt, {
      strTitle: L(`#EventEditor_InsertYouTube`),
      closeModal: i,
      strOKText: L(r ? `#Button_Save` : `#EventEditor_InsertYouTube`),
      onOK: f,
      children: [
        u && (0, K.jsx)(`div`, { className: `O-jb07OKlag-`, children: u }),
        (0, K.jsx)(k, {
          label: L(`#EventEditor_InsertYouTube_URL`),
          placeholder: L(`#EventEditor_InsertYouTube_Placholder`),
          value: c,
          ref: p,
          onChange: (e) => l(e.currentTarget.value),
        }),
        (0, K.jsxs)(tt, {
          label: L(`#EventEditor_InsertYouTube_Position`),
          children: [
            (0, K.jsx)(P, {
              checked: o == y.left,
              onChange: (e) => e && s(y.left),
              label: L(`#EventEditor_InsertYouTube_Left`),
            }),
            (0, K.jsx)(P, {
              checked: o == y.right,
              onChange: (e) => e && s(y.right),
              label: L(`#EventEditor_InsertYouTube_Right`),
            }),
            (0, K.jsx)(P, {
              checked: o == y.full,
              onChange: (e) => e && s(y.full),
              label: L(`#EventEditor_InsertYouTube_Full`),
            }),
          ],
        }),
      ],
    }),
  });
}
var sn = `bkCqOWe6u70-`,
  cn = `F-Iu9ouJkU4-`,
  ln = `Orxop48kS2w-`,
  un = `p-atMVHbHCY-`,
  dn = `-dznvStnO7w-`,
  fn = `UXQ6tbkrOG0-`,
  pn = `tKQoekDRds8-`,
  q = e(Ne()),
  mn = e(t());
function hn(e) {
  let { hideModal: t, fnUpdateSession: n } = e,
    [r, i] = (0, G.useState)(() => J(!0, null)),
    [a, o] = (0, G.useState)(() => Y(!0, null)),
    [c] = s(() => [a.location_type]);
  return (0, K.jsx)(E, {
    active: !0,
    children: (0, K.jsx)(z, {
      strTitle: L(`#MeetSteam_create_title`),
      onOK: () => n(r, a),
      closeModal: () => {
        (o(Y(!0, null)), i(J(!0, null)), t());
      },
      bOKDisabled: !c == null,
      children: (0, K.jsxs)(`div`, {
        className: dn,
        children: [
          (0, K.jsx)(vn, { group: r, fnSetGroup: i }),
          (0, K.jsx)(bn, { session: a, fnSetSession: o }),
        ],
      }),
    }),
  });
}
function gn(e) {
  let { hideModal: t, groupInput: n, fnUpdateGroupSession: r } = e,
    [i, a] = (0, G.useState)(() => J(!1, n));
  return (0, K.jsx)(E, {
    active: !0,
    children: (0, K.jsx)(z, {
      strTitle: L(`#MeetSteam_edit_title`),
      onOK: () => {
        (r(i), t());
      },
      onCancel: () => {
        (a(J(!1, n)), t());
      },
      children: (0, K.jsx)(`div`, {
        className: dn,
        children: (0, K.jsx)(vn, { group: i, fnSetGroup: a }),
      }),
    }),
  });
}
function _n(e) {
  let { bCreate: t, hideModal: n, sessionInput: r, fnUpdateSession: i } = e,
    [a, o] = (0, G.useState)(() => Y(t, r)),
    [c] = s(() => [a.location_type]);
  return (0, K.jsx)(E, {
    active: !0,
    children: (0, K.jsx)(z, {
      strTitle: L(t ? `#MeetSteam_create_title` : `#MeetSteam_edit_title`),
      onOK: () => {
        (i(a), n());
      },
      onCancel: () => {
        (o(Y(t, r)), n());
      },
      bOKDisabled: !c,
      children: (0, K.jsx)(`div`, {
        className: dn,
        children: (0, K.jsx)(bn, { session: a, fnSetSession: o }),
      }),
    }),
  });
}
function vn(e) {
  let { group: t, fnSetGroup: n } = e,
    r = S();
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(k, {
        type: `text`,
        label: L(`#MeetSteam_edit_session_name`),
        value: A.Get(t.localized_session_title, r),
        onChange: (e) => {
          let i = { ...t };
          ((i.localized_session_title = A.Set(
            i.localized_session_title,
            r,
            e.currentTarget.value,
          )),
            n(i));
        },
      }),
      (0, K.jsx)(B, { children: L(`#MeetSteam_edit_session_desc`) }),
      (0, K.jsx)(`textarea`, {
        className: T(`DialogTextInputBase`, pn),
        value: A.Get(t.localized_session_description, r),
        rows: 5,
        onChange: (e) => {
          let i = { ...t };
          ((i.localized_session_description = A.Set(
            i.localized_session_description,
            r,
            e.currentTarget.value,
          )),
            n(i));
        },
      }),
      (0, K.jsx)(k, {
        type: `text`,
        label: `Intended Audience`,
        tooltip: `A short descriptions for whom then event is designed for to help partners self select`,
        value: A.Get(t.localized_intended_audience, r),
        onChange: (e) => {
          let i = { ...t };
          ((i.localized_intended_audience = A.Set(
            i.localized_intended_audience,
            r,
            e.currentTarget.value,
          )),
            n(i));
        },
      }),
      (0, K.jsxs)(B, {
        children: [
          `FAQ `,
          (0, K.jsx)(xt, {
            tooltip: `Optional FAQ section which appears in the pop-up display and hidden by default`,
          }),
        ],
      }),
      (0, K.jsx)(`textarea`, {
        className: T(`DialogTextInputBase`, pn),
        value: A.Get(t.localized_sesssion_faq, r),
        rows: 5,
        onChange: (e) => {
          let i = { ...t };
          ((i.localized_sesssion_faq = A.Set(
            i.localized_sesssion_faq,
            r,
            e.currentTarget.value,
          )),
            n(i));
        },
      }),
      (0, K.jsx)(yt, {
        checked: t.ask_registration_question,
        onChange: (e) => {
          let r = { ...t };
          ((r.ask_registration_question = e), n(r));
        },
        label: `Ask partner to tell us what they want to learn from the sessions`,
      }),
      (0, K.jsx)(yn, { ...e }),
    ],
  });
}
function yn(e) {
  let { group: t, fnSetGroup: n } = e,
    [r, i] = (0, G.useState)(t.group_visibility_tokens?.length > 0);
  return r
    ? (0, K.jsxs)(K.Fragment, {
        children: [
          (0, K.jsx)(`div`, {
            children: `By default, all sessions are visibility to any partner wiht a list. We can limit visibility to users by adding tokens below. Multiple Meet Steam sections can be visible together if they share the same token. To make the tokens appears most friendly, we are limiting them to exactly 5 digits. Only one token can be set on the URL.`,
          }),
          t.group_visibility_tokens.map((e, r) =>
            (0, K.jsx)(
              k,
              {
                type: `number`,
                min: `10000`,
                max: `99999`,
                value: e || 1e4,
                onChange: (e) => {
                  let i = { ...t };
                  ((i.group_visibility_tokens[r] = Number.parseInt(
                    e.currentTarget.value,
                  )),
                    n(i));
                },
                label: `Visibility Token`,
              },
              `token` + e + `_` + r,
            ),
          ),
          (0, K.jsx)(N, {
            onClick: () => {
              let e = { ...t };
              ((e.group_visibility_tokens = [
                ...e.group_visibility_tokens,
                1e4,
              ]),
                n(e));
            },
            children: `Add Token`,
          }),
          t.group_visibility_tokens.length > 0 &&
            (0, K.jsx)(N, {
              onClick: () => {
                let e = { ...t };
                ((e.group_visibility_tokens = e.group_visibility_tokens.slice(
                  0,
                  -1,
                )),
                  n(e));
              },
              children: `Remove Last Token`,
            }),
        ],
      })
    : (0, K.jsx)(yt, {
        checked: !1,
        onChange: i,
        label: `Change Visibility Options`,
      });
}
function bn(e) {
  let { session: t, fnSetSession: n } = e,
    [r, i, a, o, c, l] = s(() => [
      t.rtime_start,
      t.rtime_end,
      t.max_capacity,
      t.max_per_team,
      t.location_type,
      t.in_person_time_zone,
    ]),
    u = [];
  for (let e = 0; e < 4; ++e) u.push({ data: e, label: e });
  let d = Math.max(0, Math.floor((i - r) / 60)),
    f = Intl.DateTimeFormat().resolvedOptions().timeZone,
    p = c === `in_person` ? (l ?? `America/Los_Angeles`) : f;
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(Sn, {
        startTime: t.rtime_start,
        location_type: c,
        fnUpdateLocationAndTZ: (e, r) =>
          n({ ...t, location_type: e, in_person_time_zone: r }),
        in_person_time_zone: l,
      }),
      (0, K.jsx)(`br`, {}),
      (0, K.jsx)(ee, {
        strDescription: L(`#MeetSteam_edit_start`),
        nEarliestTime: 0,
        fnGetTimeToUpdate: () => r,
        fnSetTimeToUpdate: (e) =>
          n({ ...t, rtime_start: e, rtime_end: e + M.PerMinute * d }),
        fnIsValidDateTime: () => !0,
        bShowTimeZone: !0,
      }),
      (0, K.jsx)(`br`, {}),
      (0, K.jsx)(k, {
        type: `number`,
        min: 0,
        label: L(`#MeetSteam_edit_duration`),
        onChange: (e) => {
          let r = Number.parseInt(e.currentTarget.value);
          n({ ...t, rtime_end: t.rtime_start + M.PerMinute * r });
        },
        value: d,
      }),
      (0, K.jsx)(xn, { rtime_start: r, rtime_end: i, sDisplayTimeZone: p }),
      (0, K.jsx)(`br`, {}),
      (0, K.jsx)(`br`, {}),
      (0, K.jsxs)(`div`, {
        className: fn,
        children: [
          (0, K.jsx)(k, {
            type: `number`,
            value: a,
            label: L(`#MeetSteam_edit_max_capacity`),
            min: 1,
            onChange: (e) =>
              n({ ...t, max_capacity: Number.parseInt(e.currentTarget.value) }),
          }),
          (0, K.jsx)(Je, {
            controlled: !0,
            label: L(`#MeetSteam_edit_guest_count`),
            tooltip: L(`#MeetSteam_edit_guest_count_ttip`),
            rgOptions: u,
            selectedOption: o,
            onChange: (e) => n({ ...t, max_per_team: e.data }),
          }),
        ],
      }),
    ],
  });
}
function xn(e) {
  let { rtime_start: t, rtime_end: n, sDisplayTimeZone: r } = e,
    i = q.unix(t).tz(Ee),
    a = q.unix(t).tz(r),
    o = a.utcOffset() - i.utcOffset(),
    s = q.unix(n).tz(Ee),
    c = q.unix(n).tz(r),
    l = c.utcOffset() - s.utcOffset();
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsxs)(`div`, {
        children: [
          L(`#MeetSteam_edit_displayed_start`),
          `: `,
          Qe(a.unix() + o * 60, !1, a.format(`z`)),
          ` `,
        ],
      }),
      (0, K.jsxs)(`div`, {
        children: [
          L(`#MeetSteam_edit_displayed_end`),
          `: `,
          Qe(c.unix() + l * 60, !1, c.format(`z`)),
          ` `,
        ],
      }),
    ],
  });
}
function Sn(e) {
  let {
      startTime: t,
      location_type: n,
      fnUpdateLocationAndTZ: r,
      in_person_time_zone: i,
    } = e,
    a = { option: (e) => ({ ...e, color: `#444444` }) },
    o = Cn(t),
    s = G.useMemo(
      () => o.reduce((e, t) => e.set(t.name, t.friendly_name), new Map()),
      [o],
    ),
    c = (e) => s.get(e) ?? e,
    l = G.useId(),
    u = G.useId();
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(`div`, {
        id: l,
        className: qe,
        children: L(`#MeetSteam_edit_date_display_title`),
      }),
      (0, K.jsx)(`div`, {
        id: u,
        className: Ie,
        children: L(`#MeetSteam_edit_date_display_desc`),
      }),
      (0, K.jsxs)(mt, {
        labelId: l,
        descriptionId: u,
        value: n,
        onChange: (e) => r(e, i),
        children: [
          (0, K.jsx)(Ve, {
            value: `in_person`,
            children: L(`#MeetSteam_edit_date_display_in_person`),
          }),
          (0, K.jsx)(Ve, {
            value: `virtual`,
            children: L(`#MeetSteam_edit_date_display_virtual`),
          }),
        ],
      }),
      n === `in_person` &&
        (0, K.jsx)(g._default, {
          styles: a,
          isSearchable: !0,
          isMulti: !1,
          options: o.map((e) => ({ label: e.friendly_name, value: e.name })),
          defaultMenuIsOpen: !1,
          value: i
            ? { label: c(i), value: i }
            : { label: c(`America/Los_Angeles`), value: `America/Los_Angeles` },
          onChange: (e) => r(n, e.value),
        }),
    ],
  });
}
function Cn(e) {
  let t = a({
    queryKey: [`timezone`, e],
    queryFn: async () => {
      let t = `${$e.COMMUNITY_BASE_URL}/eventadmin/ajaxgettimezones`,
        n = { reference_time: e };
      return (await mn.default.get(t, { params: n }))?.data.timezones;
    },
  });
  return t.isSuccess ? t.data : [];
}
function J(e, t) {
  if (e) {
    let e = h.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
      t = 0;
    do t = Math.floor(1e4 + Math.random() * 9e4);
    while (e && e.findIndex((e) => e.group_id == t) >= 0);
    return {
      group_id: t,
      localized_session_title: O([], 32, null),
      localized_session_description: O([], 32, null),
      localized_sesssion_faq: O([], 32, null),
      localized_intended_audience: O([], 32, null),
      group_visibility_tokens: [],
      ask_registration_question: !1,
      sessions: [],
    };
  }
  return t
    ? {
        ...t,
        localized_session_description: [...t.localized_session_description],
        localized_session_title: [...t.localized_session_title],
        localized_sesssion_faq: [...(t.localized_sesssion_faq || [])],
        localized_intended_audience: [...(t.localized_intended_audience || [])],
        group_visibility_tokens: [...(t.group_visibility_tokens || [])],
        ask_registration_question: t.ask_registration_question,
      }
    : (R(
        !1,
        `HelperCreateOrCloneGroupSessionModel Expect Create or previous model`,
      ),
      null);
}
function Y(e, t) {
  if (e) {
    let e = je.GetTimeNowWithOverride(),
      t = h
        .GetEditModel()
        .GetEventModel()
        .jsondata.meet_steam_groups?.reduce((e, t) => e.concat(t.sessions), []),
      n = 0;
    do n = Math.floor(1e4 + Math.random() * 9e4);
    while (t && t.findIndex((e) => e.id == n) >= 0);
    let r = Math.ceil(e / 3600) * 3600;
    return {
      id: n,
      rtime_start: r + M.PerDay,
      rtime_end: r + M.PerDay + M.PerHour,
      max_capacity: 100,
      max_per_team: 3,
    };
  }
  return t
    ? { ...t }
    : (R(
        !1,
        `HelperCreateOrCloneSessionInstanceModel Expect Create or previous model`,
      ),
      null);
}
function wn(e) {
  let t = h.GetEditModel();
  for (
    let n = 0;
    n < t.GetEventModel().jsondata.meet_steam_groups.length;
    ++n
  ) {
    let r = t.GetEventModel().jsondata.meet_steam_groups[n];
    for (let t = 0; t < r.sessions.length; ++t)
      if (r.sessions[t].id == e) return { groupIndex: n, sessionIndex: t };
  }
  return null;
}
function Tn(e) {
  let t = h.GetEditModel();
  for (
    let n = 0;
    n < t.GetEventModel().jsondata.meet_steam_groups.length;
    ++n
  ) {
    let r = t.GetEventModel().jsondata.meet_steam_groups[n];
    if (r.group_id == e) return { group: r, groupIndex: n };
  }
  return null;
}
function En(e) {
  let t = h.GetEditModel();
  for (
    let n = 0;
    n < t.GetEventModel().jsondata.meet_steam_schedules.length;
    ++n
  ) {
    let r = t.GetEventModel().jsondata.meet_steam_schedules[n];
    if (r.schedule_id == e) return { schedule: r, scheduleIndex: n };
  }
  return null;
}
function Dn(e, t, n) {
  e.dispatch(
    e.state.tr.insert(e.state.selection.to, t.create({ group_id: n })),
  );
}
function On(e) {
  let { focusView: t, removeNode: n, group_id: r } = e,
    i = w(),
    a = s(() =>
      i
        .GetEventModel()
        .jsondata.meet_steam_groups?.find((e) => e.group_id == r),
    ),
    [o, c, l] = j(),
    u = G.useCallback(() => {
      (t(), l());
    }, [t, l]),
    [d, f, p] = j(),
    m = G.useCallback(() => {
      (t(), p());
    }, [t, p]);
  return !a || i.GetClanAccountID() != v()
    ? (0, K.jsx)(`div`, {
        children: `Error: Cannot edit meet steam session group`,
      })
    : (0, K.jsxs)(`div`, {
        className: ln,
        children: [
          (0, K.jsx)(kn, { groupData: a, focusView: t }),
          (0, K.jsxs)(`div`, {
            className: cn,
            children: [
              (0, K.jsx)(V, {
                onClick: c,
                tooltip: L(`#Button_Edit`),
                children: (0, K.jsx)(F, {}),
              }),
              (0, K.jsx)(V, {
                onClick: f,
                tooltip: L(`#Button_Delete`),
                children: (0, K.jsx)(D, {}),
              }),
              a.group_visibility_tokens?.length > 0 &&
                (0, K.jsx)(V, {
                  onClick: () => {},
                  tooltip: `Limited visibility to those with the appropriate URLs`,
                  children: (0, K.jsx)(nt, {}),
                }),
              !!a.ask_registration_question &&
                (0, K.jsx)(V, {
                  onClick: () => {},
                  tooltip: `Will ask partner to provides questions for us for this session.`,
                  children: (0, K.jsx)(Le, {}),
                }),
            ],
          }),
          !!o &&
            (0, K.jsx)(gn, {
              hideModal: u,
              groupInput: a,
              fnUpdateGroupSession: (e) => {
                let { groupIndex: t } = Tn(e.group_id),
                  n = h.GetEditModel();
                ((n.GetEventModel().jsondata.meet_steam_groups[t] = e),
                  n.SetDirty(_.description));
              },
            }),
          !!d &&
            (0, K.jsx)(E, {
              active: !0,
              children: (0, K.jsx)(z, {
                strTitle: L(`#Button_Delete`),
                strDescription: L(`#Dialog_AreYouSure`),
                onOK: () => {
                  let { groupIndex: e } = Tn(a.group_id),
                    t = h.GetEditModel(),
                    r = [...t.GetEventModel().jsondata.meet_steam_groups];
                  (r.splice(e, 1),
                    (t.GetEventModel().jsondata.meet_steam_groups = r),
                    t.SetDirty(_.description),
                    n());
                },
                closeModal: m,
              }),
            }),
        ],
      });
}
function kn(e) {
  let { groupData: t, focusView: n } = e,
    r = s(() => t.sessions || []),
    [i, a, o] = j(),
    c = G.useCallback(() => {
      (n(), o());
    }, [n, o]);
  return t
    ? (0, K.jsxs)(be, {
        groupData: t,
        children: [
          r.map((e, i) =>
            (0, K.jsx)(
              An,
              { focusView: n, sessionID: e.id, bShowOR: i + 1 < r.length },
              `timecol_` + t.group_id + `_` + e.id,
            ),
          ),
          (0, K.jsx)(V, {
            className: un,
            onClick: a,
            tooltip: L(`#MeetSteam_add`),
            children: (0, K.jsx)(et, {}),
          }),
          i &&
            (0, K.jsx)(_n, {
              bCreate: !0,
              hideModal: c,
              fnUpdateSession: (e) => {
                let n = h.GetEditModel(),
                  r = [...t.sessions, e];
                (r.sort((e, t) => e.rtime_start - t.rtime_start),
                  (t.sessions = r),
                  n.SetDirty(_.description));
              },
            }),
        ],
      })
    : null;
}
function An(e) {
  let { sessionID: t, bShowOR: n, focusView: r } = e,
    [i, a] = ot(),
    o = s(() => {
      let { groupIndex: e, sessionIndex: n } = wn(t);
      return h.GetEditModel().GetEventModel().jsondata.meet_steam_groups[e]
        .sessions[n];
    }),
    [c, l, u] = j(),
    d = G.useCallback(() => {
      (r(), u());
    }, [r, u]),
    [f, p, m] = j(),
    g = G.useCallback(() => {
      (r(), m());
    }, [r, m]);
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsxs)(`div`, {
        className: sn,
        ...a,
        children: [
          (0, K.jsx)(De, { sessionData: o }),
          !!i &&
            (0, K.jsxs)(`div`, {
              className: `F-Iu9ouJkU4-`,
              children: [
                (0, K.jsx)(V, {
                  onClick: l,
                  tooltip: L(`#Button_Edit`),
                  children: (0, K.jsx)(F, {}),
                }),
                (0, K.jsx)(V, {
                  onClick: p,
                  tooltip: L(`#Button_Delete`),
                  children: (0, K.jsx)(D, {}),
                }),
              ],
            }),
          !!c &&
            (0, K.jsx)(_n, {
              bCreate: !1,
              hideModal: d,
              sessionInput: o,
              fnUpdateSession: (e) => {
                let n = h.GetEditModel(),
                  { groupIndex: r, sessionIndex: i } = wn(t),
                  a = [
                    ...n.GetEventModel().jsondata.meet_steam_groups[r].sessions,
                  ];
                ((a[i] = e),
                  a.sort((e, t) => e.rtime_start - t.rtime_start),
                  (n.GetEventModel().jsondata.meet_steam_groups[r].sessions =
                    a),
                  n.SetDirty(_.description));
              },
            }),
          !!f &&
            (0, K.jsx)(E, {
              active: !0,
              children: (0, K.jsx)(z, {
                strTitle: L(`#Button_Delete`),
                strDescription: L(`#Dialog_AreYouSure`),
                onOK: () => {
                  let e = h.GetEditModel(),
                    { groupIndex: n, sessionIndex: r } = wn(t),
                    i = [
                      ...e.GetEventModel().jsondata.meet_steam_groups[n]
                        .sessions,
                    ];
                  (i.splice(r, 1),
                    i.sort((e, t) => e.rtime_start - t.rtime_start),
                    (e.GetEventModel().jsondata.meet_steam_groups[n].sessions =
                      i),
                    e.SetDirty(_.description));
                },
                closeModal: g,
              }),
            }),
        ],
      }),
      n && (0, K.jsx)(he, {}),
    ],
  });
}
function jn(e, t, n, r, i) {
  let a = () => n.createChecked(null, i.createChecked()),
    o = () => r.createChecked(null, i.createChecked());
  return e.createChecked(null, [
    t.createChecked(null, [a(), a()]),
    t.createChecked(null, [o(), o()]),
  ]);
}
function Mn(e) {
  let { schema: t } = e,
    {
      table: n,
      table_row: r,
      table_header: i,
      table_cell: a,
      paragraph: o,
    } = t.nodes,
    s = G.useCallback(
      (e, t, s) =>
        !Ft(e) && (t && t(e.tr.insert(e.selection.to, jn(n, r, i, a, o))), !0),
      [n, r, i, a, o],
    );
  return n
    ? (0, K.jsx)(U, {
        tooltip: L(`#FormattingToolbar_Tables_InsertTable`),
        command: s,
        children: (0, K.jsx)(Ze, {}),
      })
    : null;
}
function Nn(e) {
  let { schema: t, className: n } = e,
    { callbacks: r, view: i } = W(),
    [a, o] = G.useState(() => !!t.nodes.table && Ft(i.state));
  return (
    ut(
      r,
      G.useCallback((e) => o(!!t.nodes.table && Ft(e.state)), [t.nodes.table]),
    ),
    (0, K.jsx)(Ae, {
      visible: a,
      msAnimationDuration: 100,
      children: (0, K.jsx)(Zt, {
        className: n,
        children: (0, K.jsx)(Pn, { schema: t }),
      }),
    })
  );
}
function Pn(e) {
  let { schema: t } = e;
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(U, {
        tooltip: L(`#FormattingToolbar_Tables_AddRowBefore`),
        command: jt,
        children: (0, K.jsx)(We, {}),
      }),
      (0, K.jsx)(U, {
        tooltip: L(`#FormattingToolbar_Tables_AddRowAfter`),
        command: kt,
        children: (0, K.jsx)(Fe, {}),
      }),
      (0, K.jsx)(U, {
        tooltip: L(`#FormattingToolbar_Tables_DeleteRow`),
        command: St,
        children: (0, K.jsx)(ze, {}),
      }),
      (0, K.jsx)(H, {}),
      (0, K.jsx)(U, {
        tooltip: L(`#FormattingToolbar_Tables_AddColumnBefore`),
        command: Dt,
        children: (0, K.jsx)(Xe, {}),
      }),
      (0, K.jsx)(U, {
        tooltip: L(`#FormattingToolbar_Tables_AddColumnAfter`),
        command: wt,
        children: (0, K.jsx)(Ye, {}),
      }),
      (0, K.jsx)(U, {
        tooltip: L(`#FormattingToolbar_Tables_DeleteColumn`),
        command: en,
        children: (0, K.jsx)(pt, {}),
      }),
      (0, K.jsx)(H, {}),
      (0, K.jsx)(U, {
        tooltip: L(`#FormattingToolbar_Tables_HeaderRow`),
        command: Ot,
        children: (0, K.jsx)(at, {}),
      }),
      (0, K.jsx)(U, {
        tooltip: L(`#FormattingToolbar_Tables_HeaderColumn`),
        command: Tt,
        children: (0, K.jsx)(ht, {}),
      }),
      (0, K.jsx)(U, {
        tooltip: L(`#FormattingToolbar_Tables_HeaderCell`),
        command: It,
        children: (0, K.jsx)(dt, {}),
      }),
      (0, K.jsx)(H, {}),
      (0, K.jsx)(U, {
        tooltip: L(`#FormattingToolbar_Tables_MergeCells`),
        command: Et,
        children: (0, K.jsx)(it, {}),
      }),
      (0, K.jsx)(U, {
        tooltip: L(`#FormattingToolbar_Tables_SplitCells`),
        command: Pt,
        children: (0, K.jsx)(vt, {}),
      }),
      !1,
    ],
  });
}
var Fn = `TfGEx4iodHc-`,
  In = `EbkD9oXySts-`;
function Ln(e, t, n) {
  e.dispatch(
    e.state.tr.insert(e.state.selection.to, t.create({ schedule_id: n })),
  );
}
function Rn(e, t) {
  if (e) {
    let e = h.GetEditModel().GetEventModel().jsondata.meet_steam_schedules,
      t = 0;
    do t = Math.floor(1e4 + Math.random() * 9e4);
    while (e && e.findIndex((e) => e.schedule_id == t) >= 0);
    return { schedule_id: t, session_breaks: [] };
  }
  return t
    ? { ...t }
    : (R(
        !1,
        `HelperCreateOrCloneMeetSteamSchedule Expect Create or previous model`,
      ),
      null);
}
function zn(e) {
  let { hideModal: t, fnUpdateSession: n, inputScheduleModel: r } = e,
    i = Me(),
    a = w(),
    [o, c] = (0, G.useState)(() => Rn(!r, r)),
    [l, u, d] = s(() => [
      o.location_type,
      o.in_person_time_zone,
      a.GetEventModel().jsondata.meet_steam_groups || [],
    ]),
    f = (0, G.useMemo)(() => {
      let e = d.reduce((e, t) => e.concat(t.sessions), []);
      return e.length == 0 ? i : Math.min(...e.map((e) => e.rtime_start));
    }, [d, i]);
  return (0, K.jsx)(E, {
    active: !0,
    children: (0, K.jsx)(z, {
      strTitle: r
        ? `Update Meet Steam Schedule`
        : `Create Meet Steam Schedule View`,
      onOK: () => n(o),
      closeModal: () => {
        (c(Rn(!r, r)), t());
      },
      children: (0, K.jsxs)(`div`, {
        className: void 0,
        children: [
          (0, K.jsx)(Sn, {
            startTime: a.GetEventStartTime(),
            location_type: l,
            in_person_time_zone: u,
            fnUpdateLocationAndTZ: (e, t) =>
              c({ ...o, location_type: e, in_person_time_zone: t }),
          }),
          (0, K.jsx)(Bn, {
            inputScheduleModel: o,
            fnUpdateSession: (e) => c(e),
            rtBreakStartingTime: f,
          }),
        ],
      }),
    }),
  });
}
function Bn(e) {
  let { fnUpdateSession: t, inputScheduleModel: n, rtBreakStartingTime: r } = e,
    [i, a] = s(() => [
      n.session_breaks || [],
      n.in_person_time_zone || `America/Los_Angeles`,
    ]),
    o = (0, G.useCallback)(
      (e, r) => {
        let i = { ...n };
        ((i.session_breaks = i.session_breaks ? [...i.session_breaks] : []),
          r < i.session_breaks.length
            ? (i.session_breaks[r] = e)
            : i.session_breaks.push(e),
          t(i));
      },
      [t, n],
    );
  return (0, K.jsxs)(`div`, {
    children: [
      (0, K.jsx)(`div`, { children: `Scheduled Breaks` }),
      i
        .sort((e, t) => t.rtime_start - e.rtime_start)
        .map((e, t) =>
          (0, K.jsx)(
            Vn,
            {
              sDisplayTimeZone: a,
              index: t,
              breakSession: e,
              fnOnUpdate: (e) => o(e, t),
            },
            `breakedit` + e.break_id,
          ),
        ),
      (0, K.jsx)(N, {
        onClick: () => {
          let e = n.session_breaks ? [...n.session_breaks] : [],
            t = Math.floor(1 + Math.random() * 1e5);
          for (; e.findIndex((e) => e.break_id == t) >= 0;)
            t = Math.floor(1 + Math.random() * 1e5);
          o(
            {
              break_id: t,
              localized_break_description: O([], 32, null),
              rtime_start: r,
              rtime_end: r + M.PerHour,
            },
            n.session_breaks?.length || 0,
          );
        },
        children: `+ Add Break`,
      }),
    ],
  });
}
function Vn(e) {
  let { breakSession: t, fnOnUpdate: n, index: r, sDisplayTimeZone: i } = e,
    a = S(),
    [o, c, l, u] = s(() => [
      t.rtime_start,
      t.rtime_end,
      t.localized_break_description[a] || ``,
      Math.max(0, Math.floor((t.rtime_end - t.rtime_start) / 60)),
    ]);
  return (0, K.jsxs)(`div`, {
    children: [
      (0, K.jsxs)(`div`, { children: [`Break # `, r + 1] }),
      (0, K.jsx)(`br`, {}),
      (0, K.jsx)(ee, {
        strDescription: `Break Start Time`,
        nEarliestTime: 0,
        fnGetTimeToUpdate: () => o,
        fnSetTimeToUpdate: (e) =>
          n({ ...t, rtime_start: e, rtime_end: e + M.PerMinute * u }),
        fnIsValidDateTime: () => !0,
        bShowTimeZone: !0,
      }),
      (0, K.jsx)(`br`, {}),
      (0, K.jsx)(k, {
        type: `number`,
        min: 0,
        label: `Break duration in minutes`,
        onChange: (e) => {
          let r = Number.parseInt(e.currentTarget.value);
          n({ ...t, rtime_end: t.rtime_start + M.PerMinute * r });
        },
        value: u,
      }),
      (0, K.jsx)(k, {
        type: `text`,
        label: `Break Description`,
        value: l,
        onChange: (e) => {
          let r = { ...t };
          ((r.localized_break_description[a] = e.currentTarget.value), n(r));
        },
      }),
      (0, K.jsx)(xn, { rtime_start: o, rtime_end: c, sDisplayTimeZone: i }),
    ],
  });
}
function Hn(e) {
  let { focusView: t, removeNode: n, schedule_id: r } = e,
    i = w(),
    a = s(() =>
      i
        .GetEventModel()
        .jsondata.meet_steam_schedules?.find((e) => e.schedule_id == r),
    ),
    [o, c, l] = j(),
    u = G.useCallback(() => {
      (t(), l());
    }, [t, l]),
    [d, f, p] = j(),
    m = G.useCallback(() => {
      (t(), p());
    }, [t, p]);
  return !a || i.GetClanAccountID() != v()
    ? (0, K.jsx)(`div`, {
        children: `Error: Cannot edit meet steam schedule view`,
      })
    : (0, K.jsxs)(`div`, {
        className: Fn,
        children: [
          (0, K.jsx)(_e, { eventModel: i.GetEventModel(), scheduleData: a }),
          (0, K.jsxs)(`div`, {
            className: In,
            children: [
              (0, K.jsx)(V, {
                onClick: c,
                tooltip: L(`#Button_Edit`),
                children: (0, K.jsx)(F, {}),
              }),
              (0, K.jsx)(V, {
                onClick: f,
                tooltip: L(`#Button_Delete`),
                children: (0, K.jsx)(D, {}),
              }),
            ],
          }),
          !!o &&
            (0, K.jsx)(zn, {
              hideModal: u,
              inputScheduleModel: a,
              fnUpdateSession: (e) => {
                let { scheduleIndex: t } = En(e.schedule_id);
                ((i.GetEventModel().jsondata.meet_steam_schedules[t] = e),
                  i.SetDirty(_.description));
              },
            }),
          !!d &&
            (0, K.jsx)(E, {
              active: !0,
              children: (0, K.jsx)(z, {
                strTitle: L(`#Button_Delete`),
                strDescription: L(`#Dialog_AreYouSure`),
                onOK: () => {
                  let { scheduleIndex: e } = En(a.schedule_id),
                    t = h.GetEditModel(),
                    r = [...t.GetEventModel().jsondata.meet_steam_schedules];
                  (r.splice(e, 1),
                    (t.GetEventModel().jsondata.meet_steam_schedules = r),
                    t.SetDirty(_.description),
                    n());
                },
                closeModal: m,
              }),
            }),
        ],
      });
}
function Un(e) {
  let { schema: t } = e,
    { callbacks: n, view: r } = W(),
    [a, o] = G.useState(!1),
    s = G.useCallback(
      (e, n) => {
        (r.dispatch(
          r.state.tr.insert(
            r.state.selection.to,
            t.nodes.emoticon.create(null, t.text(e)),
          ),
        ),
          n || r.focus());
      },
      [r, t],
    ),
    c = G.useCallback(
      (e) => {
        o(!0);
        let t = Be((0, K.jsx)(Wn, { OnSelected: s }), e, {
          bOverlapHorizontal: !0,
        });
        i(
          () => !t.visible,
          () => o(!1),
        );
      },
      [s],
    );
  return (0, K.jsx)(V, {
    tooltip: L(`#Editor_Emoticon`),
    onClick: c,
    toggled: a,
    children: (0, K.jsx)(Ue, {}),
  });
}
function Wn(e) {
  let t = _t();
  return (I(t), (0, K.jsx)(pe, { emoticonStore: t, OnSelected: e.OnSelected }));
}
var Gn = `KJ1XyPiGQj0-`,
  X = `fiKe4PCXweM-`,
  Kn = `yuw8NnJmdB8-`;
function qn(e) {
  let { hideModal: t, fnUpdateSession: n, clanAccountID: r } = e,
    [i, a] = (0, G.useState)(() => $(!0, null));
  return (0, K.jsx)(E, {
    active: !0,
    children: (0, K.jsx)(z, {
      strTitle: L(`#UserPolls_Create_title`),
      onOK: () => n(i),
      closeModal: () => {
        (a($(!0, null)), t());
      },
      children: (0, K.jsx)(`div`, {
        className: Gn,
        children: (0, K.jsx)(Xn, {
          clanAccountID: r,
          userPollDef: i,
          fnSetDef: a,
        }),
      }),
    }),
  });
}
function Jn(e) {
  let {
      hideModal: t,
      userPollDef: n,
      clanAccountID: r,
      fnUpdateUserPollDef: i,
    } = e,
    [a, o] = (0, G.useState)(() => $(!1, n));
  return (0, K.jsx)(E, {
    active: !0,
    children: (0, K.jsx)(z, {
      strTitle: L(`#UserPolls_Edit_title`),
      onOK: () => {
        i(a);
      },
      onCancel: () => {
        o($(!1, n));
      },
      closeModal: t,
      children: (0, K.jsx)(`div`, {
        className: Gn,
        children: (0, K.jsx)(Xn, {
          userPollDef: a,
          clanAccountID: r,
          fnSetDef: o,
        }),
      }),
    }),
  });
}
function Yn(e) {
  switch (e) {
    default:
    case b.k_EPollResult_NotVisible:
      return L(`#UserPolls_Visibility_None`);
    case b.k_EPollResult_Visible_After_End:
      return L(`#UserPolls_Visibility_End`);
    case b.k_EPollResult_Visible_After_Vote:
      return L(`#UserPolls_Visibility_Voter`);
    case b.k_EPollResult_Visible_After_Vote_Or_End:
      return L(`#UserPolls_Visibility_Voter_or_End`);
    case b.k_EPollResult_Visible_On_Demand:
      return L(`#UserPolls_Visibility_OnDemand`);
  }
}
function Xn(e) {
  let { userPollDef: t, fnSetDef: n } = e,
    r = S(),
    [i] = s(() => [t.results_visibility_settings]),
    a = Object.values(b).map((e) => ({ data: e, label: Yn(e) }));
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(k, {
        type: `text`,
        label: L(`#UserPolls_Description`),
        value: A.Get(t.localized_poll_description, r),
        onChange: (e) => {
          let i = { ...t };
          ((i.localized_poll_description = A.Set(
            i.localized_poll_description,
            r,
            e.currentTarget.value,
          )),
            n(i));
        },
      }),
      (0, K.jsx)($n, { ...e }),
      (0, K.jsx)(Qn, { ...e }),
      (0, K.jsx)(B, { children: L(`#UserPolls_Visibility`) }),
      (0, K.jsx)(`div`, {
        className: X,
        children: (0, K.jsx)(Je, {
          strDropDownClassName: Ke,
          rgOptions: a,
          selectedOption: i,
          onChange: (e) => {
            e.data != t.results_visibility_settings &&
              n({ ...t, results_visibility_settings: e.data });
          },
          bDisableMouseOverlay: !0,
          contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
        }),
      }),
      (0, K.jsx)(Zn, { ...e }),
    ],
  });
}
function Zn(e) {
  let { clanAccountID: t, userPollDef: n, fnSetDef: r } = e,
    i = w(),
    a = Se(i.GetClanSteamID()),
    [o] = s(() => [n.user_poll_background]),
    c = (0, G.useCallback)(
      (e, t, i, a, o) => {
        (R(i != null && i >= 0 && i < 32, `Unexpected value for elang: ` + i),
          R(o === `user_poll_background`, `Unexpected artwork type ` + o));
        let s = l(e, t);
        s.image && r({ ...n, user_poll_background: s.image });
      },
      [r, n],
    );
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(B, { children: L(`#UserPolls_BackgroundImage`) }),
      (0, K.jsxs)(`div`, {
        className: X,
        children: [
          (0, K.jsx)(`p`, { children: L(`#UserPolls_BackgroundImage_desc`) }),
          (0, K.jsx)(le, {
            rgRealmList: i.GetIncludedRealmList(),
            rgSupportArtwork: ve,
            strUploadAjaxURL: a,
            fnOnUploadSuccess: c,
            elOverrideDragAndDropText: L(
              `#Template_Section_MediaUpdate_Static_Dnd`,
            ),
            bTwoPhaseUpload: !0,
            bDirectTempStorageUpload: !0,
          }),
          !!o && (0, K.jsx)(`img`, { src: ue(t, o) }),
        ],
      }),
    ],
  });
}
function Z(e) {
  switch (e) {
    case x.k_EPollVoter_AnyUser:
      return L(`#UserPolls_Voters_Anyone`);
    case x.k_EPollVoter_UserGameInLibrary:
      return L(`#UserPolls_Voters_Owners`);
    case x.k_EPollVoter_MinPlayTime:
      return L(`#UserPolls_Voters_Players`);
    case x.k_EPollVoter_MemberOfGroup:
      return L(`#UserPolls_Voters_Members`);
  }
}
function Qn(e) {
  let { clanAccountID: t, userPollDef: n, fnSetDef: r } = e,
    [i, a] = de(t),
    [o, c] = s(() => [n.voter_min_playtime_seconds, n.voter_eligibility]),
    l = (0, G.useMemo)(() => {
      let e = [
        { label: Z(x.k_EPollVoter_AnyUser), data: x.k_EPollVoter_AnyUser },
      ];
      return (
        a && a.is_ogg && t != 4145017
          ? (e.push({
              label: Z(x.k_EPollVoter_UserGameInLibrary),
              data: x.k_EPollVoter_UserGameInLibrary,
            }),
            e.push({
              label: Z(x.k_EPollVoter_MinPlayTime),
              data: x.k_EPollVoter_MinPlayTime,
            }))
          : a &&
            (!a.is_ogg || t == 4145017) &&
            e.push({
              label: Z(x.k_EPollVoter_MemberOfGroup),
              data: x.k_EPollVoter_MemberOfGroup,
            }),
        e
      );
    }, [t, a]);
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(B, { children: L(`#UserPolls_Voters`) }),
      (0, K.jsxs)(`div`, {
        className: X,
        children: [
          (0, K.jsx)(Je, {
            strDropDownClassName: Ke,
            rgOptions: l,
            selectedOption: c,
            onChange: (e) => {
              if (e.data != n.voter_eligibility) {
                let t = { ...n, voter_eligibility: e.data };
                (e.data == x.k_EPollVoter_MinPlayTime &&
                  (t.voter_min_playtime_seconds = 5 * tr),
                  r(t));
              }
            },
            bDisableMouseOverlay: !0,
            contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
          }),
          c == x.k_EPollVoter_MinPlayTime &&
            (0, K.jsx)(`div`, {
              className: `_1iRX-KtzqgY-`,
              children: (0, K.jsx)(k, {
                type: `number`,
                label: L(`#UserPolls_MinPlayTime`),
                value: o / tr,
                min: 5,
                onChange: (e) => {
                  let t = (Number.parseInt(e?.currentTarget?.value) ?? 5) * tr;
                  n.voter_min_playtime_seconds != t &&
                    r({ ...n, voter_min_playtime_seconds: t });
                },
              }),
            }),
        ],
      }),
    ],
  });
}
function $n(e) {
  let { userPollDef: t, fnSetDef: n } = e,
    [r, i] = s(() => [t.poll_end_time, t.poll_end_days_since_start]);
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(B, { children: L(`#UserPolls_Starts`) }),
      (0, K.jsxs)(`div`, {
        className: X,
        children: [
          (0, K.jsxs)(`div`, {
            className: T(gt, Re),
            children: [
              (0, K.jsx)(`input`, {
                type: `radio`,
                name: `StartDateRadio`,
                id: `UserPollDialog_Days`,
                checked: !!i,
                onChange: () => {
                  t.poll_end_days_since_start ||
                    n({
                      ...t,
                      poll_end_time: void 0,
                      poll_end_days_since_start: er * Q,
                    });
                },
              }),
              (0, K.jsx)(`label`, {
                htmlFor: `UserPollDialog_Days`,
                children: (0, K.jsx)(`span`, {
                  children: L(`#UserPolls_EndTime_In_Days`),
                }),
              }),
            ],
          }),
          !!i &&
            (0, K.jsx)(`div`, {
              className: `_1iRX-KtzqgY-`,
              children: (0, K.jsx)(k, {
                type: `number`,
                value: i / Q,
                min: 1,
                onChange: (e) => {
                  let r = (Number.parseInt(e?.currentTarget?.value) ?? 1) * Q;
                  t.poll_end_days_since_start != r &&
                    n({
                      ...t,
                      poll_end_time: void 0,
                      poll_end_days_since_start: r,
                    });
                },
              }),
            }),
          (0, K.jsxs)(`div`, {
            className: T(gt, Re),
            children: [
              (0, K.jsx)(`input`, {
                type: `radio`,
                name: `StartDateRadio`,
                id: `UserPollDialog_SpecificTime`,
                checked: !!r,
                onChange: () => {
                  t.poll_end_time ||
                    n({
                      ...t,
                      poll_end_days_since_start: void 0,
                      poll_end_time: Math.floor(Date.now() / 1e3) + er * Q,
                    });
                },
              }),
              (0, K.jsx)(`label`, {
                htmlFor: `UserPollDialog_SpecificTime`,
                children: (0, K.jsx)(`span`, {
                  children: L(`#UserPolls_EndTime_Specific`),
                }),
              }),
            ],
          }),
          !!r &&
            (0, K.jsxs)(`div`, {
              className: T(`_1iRX-KtzqgY-`, `befdhdeb-HY-`),
              children: [
                (0, K.jsx)(ee, {
                  strDescription: ``,
                  nEarliestTime: Math.floor(Date.now() / 1e3) + 3600,
                  fnGetTimeToUpdate: () => r,
                  fnSetTimeToUpdate: (e) => {
                    t.poll_end_time != e &&
                      n({
                        ...t,
                        poll_end_days_since_start: void 0,
                        poll_end_time: e,
                      });
                  },
                  fnIsValidDateTime: () =>
                    r > Math.floor(Date.now() / 1e3) + 3600,
                }),
                (0, K.jsx)(`span`, { children: L(`#UserPolls_EndTime_Zone`) }),
              ],
            }),
        ],
      }),
    ],
  });
}
var er = 7,
  Q = 86400,
  tr = 60;
function $(e, t) {
  if (e) {
    let e = h.GetEditModel().GetEventModel().jsondata.user_polls || [],
      t = 0;
    do t = Math.floor(1e4 + Math.random() * 9e4);
    while (e && e.findIndex((e) => e.poll_id == t) >= 0);
    return {
      poll_id: t,
      options: [],
      localized_poll_description: O([], 32, null),
      poll_end_days_since_start: er * Q,
      poll_end_time: void 0,
      results_visibility_settings: b.k_EPollResult_Visible_On_Demand,
      voter_eligibility: x.k_EPollVoter_AnyUser,
    };
  }
  return t
    ? { ...t, localized_poll_description: [...t.localized_poll_description] }
    : (R(
        !1,
        `HelperCreateOrCloneUserPollModel Expect Create or previous model`,
      ),
      null);
}
function nr(e) {
  let {
      bCreate: t,
      hideModal: n,
      pollOptionsInput: r,
      fnUpdatePollOption: i,
    } = e,
    [a, o] = (0, G.useState)(() => rr(t, r)),
    s = S();
  return (0, K.jsx)(E, {
    active: !0,
    children: (0, K.jsx)(z, {
      strTitle: L(t ? `#UserPolls_Option_Create` : `#UserPolls_Option_Edit`),
      onOK: () => {
        (i(a), n());
      },
      onCancel: () => {
        (o(rr(t, r)), n());
      },
      children: (0, K.jsx)(`div`, {
        className: Gn,
        children: (0, K.jsx)(k, {
          type: `text`,
          label: L(`#UserPolls_Option_Title`),
          value: A.Get(a.localized_option, s),
          onChange: (e) => {
            let t = { ...a };
            ((t.localized_option = [...t.localized_option]),
              (t.localized_option = A.Set(
                t.localized_option,
                s,
                e.currentTarget.value,
              )),
              o(t));
          },
        }),
      }),
    }),
  });
}
function rr(e, t) {
  if (e) {
    let e = h
        .GetEditModel()
        .GetEventModel()
        .jsondata.user_polls?.reduce((e, t) => e.concat(t.options), []),
      t = 0;
    do t = Math.floor(1e4 + Math.random() * 9e4);
    while (e && e.findIndex((e) => e.option_id == t) >= 0);
    return { option_id: t, localized_option: O([], 32, null) };
  }
  return t
    ? { ...t }
    : (R(
        !1,
        `HelperCreateOrClonePollOptionModel Expect Create or previous model`,
      ),
      null);
}
function ir(e) {
  let t = h.GetEditModel();
  for (let n = 0; n < t.GetEventModel().jsondata.user_polls.length; ++n) {
    let r = t.GetEventModel().jsondata.user_polls[n];
    for (let t = 0; t < r.options.length; ++t)
      if (r.options[t].option_id == e) return { pollIndex: n, optionIndex: t };
  }
  return null;
}
function ar(e) {
  let t = h.GetEditModel();
  for (let n = 0; n < t.GetEventModel().jsondata.user_polls.length; ++n) {
    let r = t.GetEventModel().jsondata.user_polls[n];
    if (r.poll_id == e) return { userPollDef: r, pollIndex: n };
  }
  return null;
}
function or(e, t, n) {
  e.dispatch(e.state.tr.insert(e.state.selection.to, t.create({ poll_id: n })));
}
function sr(e) {
  let { focusView: t, removeNode: n, poll_id: r } = e,
    i = w(),
    a = s(() =>
      i.GetEventModel().jsondata.user_polls?.find((e) => e.poll_id == r),
    ),
    [o, c, l] = j(),
    u = G.useCallback(() => {
      (t(), l());
    }, [t, l]),
    [d, f, p] = j(),
    m = G.useCallback(() => {
      (t(), p());
    }, [t, p]);
  return a
    ? (0, K.jsxs)(`div`, {
        className: ln,
        children: [
          (0, K.jsx)(cr, { userPollDef: a, focusView: t }),
          (0, K.jsxs)(`div`, {
            className: cn,
            children: [
              (0, K.jsx)(V, {
                onClick: c,
                tooltip: L(`#Button_Edit`),
                children: (0, K.jsx)(F, {}),
              }),
              (0, K.jsx)(V, {
                onClick: f,
                tooltip: L(`#Button_Delete`),
                children: (0, K.jsx)(D, {}),
              }),
              (0, K.jsx)(V, {
                onClick: () => {},
                tooltip: Yn(a.results_visibility_settings),
                children: (0, K.jsx)(nt, {}),
              }),
              (0, K.jsx)(V, {
                onClick: () => {},
                tooltip: Z(a.voter_eligibility),
                children: (0, K.jsx)(rt, {}),
              }),
            ],
          }),
          !!o &&
            (0, K.jsx)(Jn, {
              hideModal: u,
              userPollDef: a,
              clanAccountID: i.GetClanAccountID(),
              fnUpdateUserPollDef: (e) => {
                let { pollIndex: t } = ar(e.poll_id),
                  n = h.GetEditModel();
                ((n.GetEventModel().jsondata.user_polls[t] = e),
                  n.SetDirty(_.description));
              },
            }),
          !!d &&
            (0, K.jsx)(E, {
              active: !0,
              children: (0, K.jsx)(z, {
                strTitle: L(`#Button_Delete`),
                strDescription: L(`#Dialog_AreYouSure`),
                onOK: () => {
                  let { pollIndex: e } = ar(a.poll_id),
                    t = h.GetEditModel(),
                    r = [...t.GetEventModel().jsondata.user_polls];
                  (r.splice(e, 1),
                    (t.GetEventModel().jsondata.user_polls = r),
                    t.SetDirty(_.description),
                    n());
                },
                closeModal: m,
              }),
            }),
        ],
      })
    : (0, K.jsx)(`div`, {
        className: Pe,
        children: L(`#UserPolls_Editor_FailToFindModel`, r),
      });
}
function cr(e) {
  let { userPollDef: t, focusView: n } = e,
    [r, i] = s(() => [t.options || [], t.randomize_option_order]),
    a = w(),
    o = S(),
    [c, l, u] = j(),
    d = G.useCallback(() => {
      (n(), u());
    }, [n, u]),
    [f, p, m] = j(),
    g = G.useCallback(() => {
      (n(), m());
    }, [n, m]);
  return t
    ? (0, K.jsxs)(ke, {
        userPollDef: t,
        eventModel: a.GetEventModel(),
        lang: o,
        children: [
          r.map((e) =>
            (0, K.jsx)(
              ur,
              { focusView: n, optionID: e.option_id },
              `polloption` + t.poll_id + `_` + e.option_id,
            ),
          ),
          (0, K.jsxs)(`div`, {
            className: Kn,
            children: [
              (0, K.jsx)(ft, {
                className: ``,
                onClick: l,
                children: L(`#UserPolls_Option_Add`),
              }),
              (0, K.jsx)(ft, {
                className: ``,
                onClick: p,
                children: L(`#UserPolls_Option_Reorder`),
              }),
            ],
          }),
          c &&
            (0, K.jsx)(nr, {
              bCreate: !0,
              hideModal: d,
              fnUpdatePollOption: (e) => {
                let n = h.GetEditModel();
                ((t.options ||= []),
                  t.options.push(e),
                  n.SetDirty(_.description));
              },
            }),
          f &&
            (0, K.jsx)(lr, {
              hideModal: g,
              options: r,
              bRandomize: i,
              fnUpdateOptions: (e, n) => {
                ((t.randomize_option_order = n), (t.options = e));
              },
            }),
        ],
      })
    : null;
}
function lr(e) {
  let { options: t, bRandomize: n, fnUpdateOptions: r, hideModal: i } = e,
    a = S(),
    [o, s] = (0, G.useState)(n),
    [c, l] = (0, G.useState)(t);
  return (0, K.jsx)(E, {
    active: !0,
    children: (0, K.jsxs)(z, {
      strTitle: L(`#UserPolls_Option_Reorder`),
      strDescription: L(`#UserPolls_Option_Reorder_desc`),
      onCancel: () => {
        (s(n), l(t));
      },
      onOK: () => {
        r([...c], o);
      },
      closeModal: i,
      children: [
        (0, K.jsx)(yt, {
          label: L(`#UserPolls_Option_Randomize`),
          checked: o,
          onChange: s,
        }),
        (0, K.jsx)(ne, {
          items: c,
          render: (e) =>
            (0, K.jsx)(`div`, {
              children:
                e.localized_option?.[a] || e.localized_option?.[0] || ``,
            }),
          onReorder: (e) => l(e),
        }),
      ],
    }),
  });
}
function ur(e) {
  let { optionID: t, focusView: n } = e,
    [r, i] = ot(),
    a = s(() => {
      let { optionIndex: e, pollIndex: n } = ir(t);
      return h.GetEditModel().GetEventModel().jsondata.user_polls[n].options[e];
    }),
    o = S(),
    [c, l, u] = j(),
    d = G.useCallback(() => {
      (n(), u());
    }, [n, u]),
    [f, p, m] = j(),
    g = G.useCallback(() => {
      (n(), m());
    }, [n, m]);
  return (0, K.jsxs)(`div`, {
    className: sn,
    ...i,
    children: [
      (0, K.jsx)(xe, { pollOptionDef: a, lang: o }),
      !!r &&
        (0, K.jsxs)(`div`, {
          className: `F-Iu9ouJkU4-`,
          children: [
            (0, K.jsx)(V, {
              onClick: l,
              tooltip: L(`#Button_Edit`),
              children: (0, K.jsx)(F, {}),
            }),
            (0, K.jsx)(V, {
              onClick: p,
              tooltip: L(`#Button_Delete`),
              children: (0, K.jsx)(D, {}),
            }),
          ],
        }),
      !!c &&
        (0, K.jsx)(nr, {
          bCreate: !1,
          hideModal: d,
          pollOptionsInput: a,
          fnUpdatePollOption: (e) => {
            let n = h.GetEditModel(),
              { optionIndex: r, pollIndex: i } = ir(t),
              a = [...n.GetEventModel().jsondata.user_polls[i].options];
            ((a[r] = e),
              (n.GetEventModel().jsondata.user_polls[i].options = a),
              n.SetDirty(_.description));
          },
        }),
      !!f &&
        (0, K.jsx)(E, {
          active: !0,
          children: (0, K.jsx)(z, {
            strTitle: L(`#Button_Delete`),
            strDescription: L(`#Dialog_AreYouSure`),
            onOK: () => {
              let e = h.GetEditModel(),
                { optionIndex: n, pollIndex: r } = ir(t),
                i = [...e.GetEventModel().jsondata.user_polls[r].options];
              (i.splice(n, 1),
                (e.GetEventModel().jsondata.user_polls[r].options = i),
                e.SetDirty(_.description));
            },
            closeModal: g,
          }),
        }),
    ],
  });
}
var dr = G.memo(function (e) {
  let {
    view: t,
    schema: n,
    refUpdateToolbar: r,
    className: i,
    clanSteamID: a,
    bSpellcheckEnabled: o,
    setSpellcheckEnabled: s,
  } = e;
  return (0, K.jsx)(Bt, {
    refUpdateToolbar: r,
    view: t,
    children: (0, K.jsxs)(`div`, {
      className: e.className,
      children: [
        (0, K.jsxs)(Zt, {
          className: e.className,
          children: [
            (0, K.jsx)(Ht, {}),
            (0, K.jsx)(H, {}),
            (0, K.jsx)(qt, { schema: n }),
            (0, K.jsx)(H, {}),
            n.marks.link && (0, K.jsx)(fr, { schema: n }),
            (0, K.jsx)(H, {}),
            (0, K.jsx)(Jt, { schema: n }),
            (0, K.jsx)(Yt, { schema: n, levels: 3 }),
            (0, K.jsx)(H, {}),
            (0, K.jsx)(Un, { schema: n }),
            (0, K.jsx)(mr, { schema: n, clanSteamID: a }),
            (0, K.jsx)(Mn, { schema: n }),
            (0, K.jsx)(Vt, { schema: n, showIndentButtonsAsNeeded: !0 }),
            (0, K.jsx)(Ut, {}),
            s &&
              (0, K.jsx)(Xt, {
                bSpellcheckEnabled: o,
                setSpellcheckEnabled: s,
              }),
            n.nodes.meetsteamsessiongroup && (0, K.jsx)(gr, { schema: n }),
            n.nodes.meetsteamscheduleview && (0, K.jsx)(_r, { schema: n }),
            n.nodes.userpolls && bt.is_support && (0, K.jsx)(pr, { schema: n }),
          ],
        }),
        (0, K.jsx)(Nn, { className: e.className, schema: n }),
      ],
    }),
  });
});
function fr(e) {
  let t = oe();
  return (0, K.jsx)(Wt, { schema: e.schema, addtlAttrs: t });
}
function pr(e) {
  let { schema: t } = e,
    { callbacks: n, view: r } = W(),
    i = w(),
    [a, o, s] = j(),
    c = G.useCallback(() => {
      (s(), r.focus());
    }, [s, r]),
    l = G.useCallback(
      (e) => {
        (i.GetEventModel().jsondata.user_polls ||
          (i.GetEventModel().jsondata.user_polls = []),
          i.GetEventModel().jsondata.user_polls.push({ ...e }),
          or(r, t.nodes.userpolls, e.poll_id),
          c());
      },
      [t, r, c, i],
    );
  return (0, K.jsxs)(K.Fragment, {
    children: [
      a &&
        (0, K.jsx)(qn, {
          hideModal: c,
          clanAccountID: i.GetClanAccountID(),
          fnUpdateSession: l,
        }),
      (0, K.jsx)(V, {
        tooltip: L(`#UserPolls_Toolbar_ttip`),
        onClick: o,
        toggled: a,
        children: (0, K.jsx)(st, {}),
      }),
    ],
  });
}
function mr(e) {
  let { schema: t, clanSteamID: n } = e,
    { callbacks: r, view: i } = W(),
    { image: a, video: o, previewyoutube: s } = t.nodes,
    c = G.useCallback(
      (e, t) => {
        i.dispatch(i.state.tr.insert(i.state.selection.to, t.create(e)));
      },
      [i],
    ),
    l = G.useCallback(() => i.focus(), [i]),
    {
      showInsertImageModal: u,
      showInsertVideoModal: d,
      imageModal: f,
      activeModal: p,
    } = te({
      clanSteamID: n,
      imageNodeType: a,
      videoNodeType: o,
      onItemSelected: c,
      onHideModal: l,
    });
  return (0, K.jsxs)(K.Fragment, {
    children: [
      f,
      a &&
        (0, K.jsx)(V, {
          tooltip: L(`#EventEditor_InsertImage_Title`),
          onClick: u,
          toggled: p == `image`,
          children: (0, K.jsx)(Ge, {}),
        }),
      o &&
        (0, K.jsx)(V, {
          tooltip: L(`#EventEditor_EditVideo_Title`),
          onClick: d,
          toggled: p == `video`,
          children: (0, K.jsx)(He, {}),
        }),
      s && (0, K.jsx)(hr, { schema: t }),
      (a || o || s) && (0, K.jsx)(H, {}),
    ],
  });
}
function hr(e) {
  let { schema: t } = e,
    { callbacks: n, view: r } = W(),
    [i, a, o] = j(),
    s = G.useCallback(() => {
      (o(), r.focus());
    }, [o, r]),
    c = G.useCallback(
      (e, n) => {
        (rn(r, t.nodes.previewyoutube, e, n), s());
      },
      [t, r, s],
    );
  return (0, K.jsxs)(K.Fragment, {
    children: [
      i && (0, K.jsx)(on, { hideModal: s, onSave: c }),
      (0, K.jsx)(V, {
        tooltip: L(`#EventEditor_InsertYouTube`),
        onClick: a,
        toggled: i,
        children: (0, K.jsx)(`img`, { src: C }),
      }),
    ],
  });
}
function gr(e) {
  let { schema: t } = e,
    { callbacks: n, view: r } = W(),
    i = w(),
    [a, o, s] = j(),
    c = G.useCallback(() => {
      (s(), r.focus());
    }, [s, r]),
    l = G.useCallback(
      (e, n) => {
        (i.GetEventModel().jsondata.meet_steam_groups ||
          (i.GetEventModel().jsondata.meet_steam_groups = []),
          i
            .GetEventModel()
            .jsondata.meet_steam_groups.push({ ...e, sessions: [n] }),
          Dn(r, t.nodes.meetsteamsessiongroup, e.group_id),
          c());
      },
      [t, r, c, i],
    );
  if (i?.GetClanAccountID() == v())
    return (0, K.jsxs)(K.Fragment, {
      children: [
        a && (0, K.jsx)(hn, { hideModal: c, fnUpdateSession: l }),
        (0, K.jsx)(V, {
          tooltip: L(`#MeetSteam_add_group_ttip`),
          onClick: o,
          toggled: a,
          children: (0, K.jsx)(`img`, { src: C }),
        }),
      ],
    });
}
function _r(e) {
  let { schema: t } = e,
    { callbacks: n, view: r } = W(),
    i = w(),
    [a, o, s] = j(),
    c = G.useCallback(() => {
      (s(), r.focus());
    }, [s, r]),
    l = G.useCallback(
      (e) => {
        (i.GetEventModel().jsondata.meet_steam_schedules ||
          (i.GetEventModel().jsondata.meet_steam_schedules = []),
          i.GetEventModel().jsondata.meet_steam_schedules.push({ ...e }),
          Ln(r, t.nodes.meetsteamscheduleview, e.schedule_id),
          c());
      },
      [t, r, c, i],
    );
  if (i?.GetClanAccountID() == v())
    return (0, K.jsxs)(K.Fragment, {
      children: [
        a &&
          (0, K.jsx)(zn, {
            hideModal: c,
            inputScheduleModel: null,
            fnUpdateSession: l,
          }),
        (0, K.jsx)(V, {
          tooltip: L(`#MeetSteam_add_schedule_ttip`),
          onClick: o,
          toggled: a,
          children: (0, K.jsx)(`img`, { src: C }),
        }),
      ],
    });
}
function vr(e) {
  let { schema: t, emoticonStore: n } = e,
    r = t.nodes.emoticon;
  (I(n),
    At(
      G.useMemo(() => Lt({ rules: [br(/:([a-zA-Z0-9_]+):$/, r, n)] }), [r, n]),
    ));
  let i = G.useMemo(
    () => [
      {
        type: r,
        component: yr,
        readProps: (e) => ({ emoticonStore: n, emoticon: e.textContent }),
      },
    ],
    [r, n],
  );
  return (0, K.jsx)(Gt, { specs: i });
}
function yr(e) {
  let { selected: t, emoticonStore: n, emoticon: r } = e;
  return (
    I(n),
    n.BHasEmoticon(r)
      ? (0, K.jsx)(`span`, {
          style: t
            ? { background: `#54a5d4`, filter: `brightness(1.2)` }
            : void 0,
          children: (0, K.jsx)(me, { emoticon: r }),
        })
      : `:${r}:`
  );
}
function br(e, t, n) {
  return new Rt(e, (e, r, i, a) => {
    let o = r[1];
    if (!n.BHasEmoticon(o)) return null;
    let s = t.create(null, e.schema.text(o));
    return e.tr.replaceWith(i, a, s);
  });
}
var xr = n(function (e) {
  let { editModel: t } = e,
    n = t.GetEventModel().loadedAllLanguages,
    r = t.GetCurEditLanguage();
  return n
    ? (0, K.jsx)(ct, {
        children: (0, K.jsx)(Cr, { ...e, eCurrentEditLanguage: r }),
      })
    : null;
});
function Sr(e, t, n, r) {
  let i = t.GetDescription(n);
  return (
    (i = i?.replace(
      lt.GetUnvalidatedEmoticonReplaceRegex(),
      `[emoticon]$1[/emoticon]`,
    )),
    new Ct(e, i, (e) => t.SetDescription(n, e), {
      parser: {
        fnProcessText: (t) => Mt(e.pm_schema, t, e.pm_schema.marks.link, r),
      },
    })
  );
}
var Cr = G.memo(function (e) {
  let {
      editModel: t,
      refOnInsertImage: n,
      limitBBCode: r,
      eCurrentEditLanguage: i,
    } = e,
    [a, o] = G.useState(),
    s = G.useMemo(() => ce(r), [r]),
    [c, l] = G.useState(),
    u = wr(t.GetClanSteamID(), s);
  G.useEffect(() => {
    l(Sr(s, t, i, u));
  }, [s, u, t, i]);
  let d = G.useRef(void 0);
  Nt(c, { msAutosaveTimeout: 1e3 });
  let { nodes: f, marks: p } = s.pm_schema;
  return (
    m(n, f.image, f.video, p.link, a),
    (0, K.jsx)(se, {
      clanSteamID: t.GetClanSteamID(),
      imageNode: f.image,
      videoNode: f.video,
      children: (0, K.jsxs)(`div`, {
        className: Ce,
        children: [
          (0, K.jsx)(dr, {
            view: a,
            schema: s.pm_schema,
            refUpdateToolbar: d,
            className: Oe,
            clanSteamID: t.GetClanSteamID(),
          }),
          (0, K.jsx)(`div`, {
            className: ge,
            children: (0, K.jsx)(Kt, {
              pmState: c,
              className: T(ye, we),
              refOnUpdate: d,
              refView: o,
              panelProps: { onBlur: () => c.CommitChanges() },
              children: (0, K.jsx)(Tr, {
                eventSchemaConfig: s,
                editModel: t,
                onURLPasted: u,
              }),
            }),
          }),
        ],
      }),
    })
  );
});
function wr(e, t) {
  let { nodes: n } = t.pm_schema,
    r = ae(e, n.image, n.video),
    i = c(n.dynamiclink);
  return G.useCallback(
    (...e) => {
      let t = `default`;
      return (r && (t = r(...e)), t == "default" && i && (t = i(...e)), t);
    },
    [r, i],
  );
}
var Tr = G.memo(function (e) {
  let { eventSchemaConfig: t, editModel: n, onURLPasted: r } = e,
    i = _t(),
    { marks: a, nodes: o } = t.pm_schema;
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(tn, {
        linkMarkType: a.link,
        onURLPasted: r,
        schema: t.pm_schema,
      }),
      o.image && (0, K.jsx)($t, { nodeType: o.image }),
      (0, K.jsx)(Er, {
        schemaConfig: t,
        editModel: n,
        clanSteamID: n.GetClanSteamID(),
      }),
      (0, K.jsx)(vr, { emoticonStore: i, schema: t.pm_schema }),
    ],
  });
});
function Er(e) {
  let { schemaConfig: t, editModel: n, clanSteamID: r } = e,
    i = t.pm_schema,
    a = G.useMemo(() => nn(i), [i]);
  At(a);
  let o = i.nodes,
    s = o.image,
    c = o.video,
    l = o.carousel,
    d = G.useCallback(
      (e, i) => ({
        schemaConfig: t,
        node: i,
        imageNodeType: s,
        videoNodeType: c,
        carouselNodeType: l,
        editModel: n,
        clanSteamID: r,
      }),
      [t, s, c, l, n, r],
    ),
    p = G.useMemo(
      () => [
        o.previewyoutube && {
          type: o.previewyoutube,
          component: an,
          readProps: (e) => ({
            videoID: e.attrs.videoID,
            align: e.attrs.align,
            editModel: n,
          }),
        },
        s && { type: s, component: re, readProps: (e) => d(`image`, e) },
        c && { type: c, component: re, readProps: (e) => d(`video`, e) },
        o.meetsteamsessiongroup && {
          type: o.meetsteamsessiongroup,
          component: On,
          readProps: (e) => ({ group_id: e.attrs.group_id }),
        },
        o.meetsteamscheduleview && {
          type: o.meetsteamscheduleview,
          component: Hn,
          readProps: (e) => ({ schedule_id: e.attrs.schedule_id }),
        },
        o.userpolls && {
          type: o.userpolls,
          component: sr,
          readProps: (e) => ({ poll_id: e.attrs.poll_id }),
        },
        o.dynamiclink && {
          type: o.dynamiclink,
          component: u,
          readProps: (e) => ({
            editModel: n,
            href: e.attrs.href,
            schema: t.pm_schema,
          }),
        },
        o.carousel && {
          type: o.carousel,
          component: f,
          readProps: (e) => ({
            node: e,
            imageNodeType: s,
            videoNodeType: c,
            schemaConfig: t,
            editModel: n,
          }),
        },
      ],
      [o, s, c, n, d, t],
    );
  return (0, K.jsx)(Gt, { specs: p });
}
export { xr as default };
