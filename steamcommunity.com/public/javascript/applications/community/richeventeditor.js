/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  A as t,
  C as n,
  H as r,
  K as i,
  Pt as a,
  ot as o,
  w as s,
} from "./libraries.js";
import {
  $t as c,
  Jr as l,
  P as u,
  Q as d,
  R as f,
  Yr as p,
  Z as m,
  a as h,
  at as ee,
  c as g,
  et as te,
  h as _,
  i as ne,
  mt as re,
  n as ie,
  o as ae,
  pr as oe,
  qr as se,
  r as ce,
  tt as le,
} from "./eventrow.js";
import "./vodquery.js";
import { C as v, a as ue } from "./clanstore.js";
import { P as y, U as de, u as fe, v as pe } from "./emoticonbutton.js";
import {
  At as me,
  B as he,
  Ct as b,
  Dt as ge,
  Et as _e,
  Gt as ve,
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
} from "./apppartnereventspage.js";
import { t as Ae } from "./expandonappear.js";
import { n as je, r as Me } from "./eventdevfeaturestore.js";
import { c as Ne } from "./localdateandtime.js";
import { V as S, x as Pe } from "./languagepicker.js";
import { r as Fe } from "./partnereventdialog.module.js";
import { A as C } from "./clanimagepicker.js";
import {
  $a as Ie,
  Do as Le,
  Dr as Re,
  En as ze,
  Eo as Be,
  Ga as Ve,
  Ha as He,
  Hn as Ue,
  Ho as We,
  Ja as Ge,
  Ka as Ke,
  Ls as w,
  Mo as T,
  Qa as qe,
  Sc as Je,
  Ua as Ye,
  Uh as E,
  Ui as D,
  Us as Xe,
  Vn as Ze,
  Vo as Qe,
  Wa as $e,
  Wd as O,
  Wo as k,
  Xa as et,
  Xo as tt,
  Ya as nt,
  Yh as A,
  Yo as rt,
  Ys as it,
  Za as at,
  Zd as j,
  _a as ot,
  cs as st,
  da as M,
  dm as ct,
  fm as lt,
  h as N,
  ip as P,
  ir as ut,
  kc as dt,
  m as ft,
  ms as pt,
  ns as F,
  ou as mt,
  qa as ht,
  ra as gt,
  rs as _t,
  s as vt,
  sd as yt,
  ss as bt,
  ud as I,
  uf as xt,
  wd as St,
  wu as Ct,
  xu as L,
  zo as wt,
} from "./main.js";
import {
  B as Tt,
  E as Et,
  F as Dt,
  G as Ot,
  H as kt,
  I as At,
  K as jt,
  L as Mt,
  N as Nt,
  R as Pt,
  S as Ft,
  T as It,
  U as Lt,
  V as R,
  W as Rt,
  X as zt,
  Y as Bt,
  Z as Vt,
  _ as Ht,
  a as Ut,
  c as Wt,
  g as z,
  h as Gt,
  i as Kt,
  j as qt,
  l as Jt,
  m as B,
  n as Yt,
  o as Xt,
  p as V,
  r as Zt,
  s as Qt,
  v as $t,
  w as en,
  x as tn,
  y as H,
  z as nn,
} from "./pmbbcodeschema.js";
import { t as rn } from "./linkplugin.js";
function an(e) {
  return zt({ rules: [Vt(/^>$/, e.nodes.quote)] });
}
var U = e(a()),
  W = o();
function on(e, t, n, r = y.left) {
  e.dispatch(
    e.state.tr.insert(e.state.selection.to, t.create({ videoID: n, align: r })),
  );
}
function sn(e) {
  let {
      videoID: t,
      align: n,
      editModel: r,
      selected: i,
      setAttrs: a,
      focusView: o,
    } = e,
    [s, c, u] = I(),
    d = U.useCallback(() => {
      (u(), o());
    }, [u, o]),
    f = U.useCallback(
      (e, t) => {
        (a({ videoID: e, align: t }), d());
      },
      [a, d],
    );
  return (0, W.jsxs)(W.Fragment, {
    children: [
      s &&
        (0, W.jsx)(cn, {
          videoID: t,
          align: n,
          bEditing: !0,
          hideModal: d,
          onSave: f,
        }),
      (0, W.jsxs)(l, {
        className: L(le, i && `ef5sjCjBDrY-`),
        children: [
          (0, W.jsx)(p, {
            onEditClick: c,
            onDeleteClick: e.removeNode,
            bStrongShadows: !0,
          }),
          i && (0, W.jsx)(`div`, { className: `RhG8qWaN38o-` }),
          (0, W.jsx)(Te, {
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
function cn(e) {
  let {
      videoID: t = ``,
      align: n = ``,
      bEditing: r = !1,
      hideModal: i,
      onSave: a,
    } = e,
    [o, s] = U.useState(n || y.full),
    [c, l] = U.useState(t ? `https://www.youtube.com/watch?v=${t}` : ``),
    [u, d] = U.useState(void 0),
    f = U.useCallback(() => {
      let { strVideoID: e } = de(c);
      return (e ? a(e, o) : d(j(`#EventEditor_InsertYouTube_NoURL`)), !1);
    }, [c, o, a]),
    p = U.useCallback((e) => {
      e && (e.element.focus(), e.element.select());
    }, []);
  return (0, W.jsx)(w, {
    active: !0,
    children: (0, W.jsxs)(en, {
      strTitle: j(`#EventEditor_InsertYouTube`),
      closeModal: i,
      strOKText: j(r ? `#Button_Save` : `#EventEditor_InsertYouTube`),
      onOK: f,
      children: [
        u && (0, W.jsx)(`div`, { className: `O-jb07OKlag-`, children: u }),
        (0, W.jsx)(k, {
          label: j(`#EventEditor_InsertYouTube_URL`),
          placeholder: j(`#EventEditor_InsertYouTube_Placholder`),
          value: c,
          ref: p,
          onChange: (e) => l(e.currentTarget.value),
        }),
        (0, W.jsxs)(_t, {
          label: j(`#EventEditor_InsertYouTube_Position`),
          children: [
            (0, W.jsx)(bt, {
              checked: o == y.left,
              onChange: (e) => e && s(y.left),
              label: j(`#EventEditor_InsertYouTube_Left`),
            }),
            (0, W.jsx)(bt, {
              checked: o == y.right,
              onChange: (e) => e && s(y.right),
              label: j(`#EventEditor_InsertYouTube_Right`),
            }),
            (0, W.jsx)(bt, {
              checked: o == y.full,
              onChange: (e) => e && s(y.full),
              label: j(`#EventEditor_InsertYouTube_Full`),
            }),
          ],
        }),
      ],
    }),
  });
}
var ln = `bkCqOWe6u70-`,
  un = `F-Iu9ouJkU4-`,
  dn = `Orxop48kS2w-`,
  fn = `p-atMVHbHCY-`,
  G = `-dznvStnO7w-`,
  pn = `UXQ6tbkrOG0-`,
  mn = `tKQoekDRds8-`,
  K = e(Ne()),
  hn = e(t());
function gn(e) {
  let { hideModal: t, fnUpdateSession: n } = e,
    [r, i] = (0, U.useState)(() => q(!0, null)),
    [a, o] = (0, U.useState)(() => J(!0, null)),
    [c] = s(() => [a.location_type]);
  return (0, W.jsx)(w, {
    active: !0,
    children: (0, W.jsx)(D, {
      strTitle: j(`#MeetSteam_create_title`),
      onOK: () => n(r, a),
      closeModal: () => {
        (o(J(!0, null)), i(q(!0, null)), t());
      },
      bOKDisabled: !c == null,
      children: (0, W.jsxs)(`div`, {
        className: G,
        children: [
          (0, W.jsx)(yn, { group: r, fnSetGroup: i }),
          (0, W.jsx)(xn, { session: a, fnSetSession: o }),
        ],
      }),
    }),
  });
}
function _n(e) {
  let { hideModal: t, groupInput: n, fnUpdateGroupSession: r } = e,
    [i, a] = (0, U.useState)(() => q(!1, n));
  return (0, W.jsx)(w, {
    active: !0,
    children: (0, W.jsx)(D, {
      strTitle: j(`#MeetSteam_edit_title`),
      onOK: () => {
        (r(i), t());
      },
      onCancel: () => {
        (a(q(!1, n)), t());
      },
      children: (0, W.jsx)(`div`, {
        className: G,
        children: (0, W.jsx)(yn, { group: i, fnSetGroup: a }),
      }),
    }),
  });
}
function vn(e) {
  let { bCreate: t, hideModal: n, sessionInput: r, fnUpdateSession: i } = e,
    [a, o] = (0, U.useState)(() => J(t, r)),
    [c] = s(() => [a.location_type]);
  return (0, W.jsx)(w, {
    active: !0,
    children: (0, W.jsx)(D, {
      strTitle: j(t ? `#MeetSteam_create_title` : `#MeetSteam_edit_title`),
      onOK: () => {
        (i(a), n());
      },
      onCancel: () => {
        (o(J(t, r)), n());
      },
      bOKDisabled: !c,
      children: (0, W.jsx)(`div`, {
        className: G,
        children: (0, W.jsx)(xn, { session: a, fnSetSession: o }),
      }),
    }),
  });
}
function yn(e) {
  let { group: t, fnSetGroup: n } = e,
    r = S();
  return (0, W.jsxs)(W.Fragment, {
    children: [
      (0, W.jsx)(k, {
        type: `text`,
        label: j(`#MeetSteam_edit_session_name`),
        value: O.Get(t.localized_session_title, r),
        onChange: (e) => {
          let i = { ...t };
          ((i.localized_session_title = O.Set(
            i.localized_session_title,
            r,
            e.currentTarget.value,
          )),
            n(i));
        },
      }),
      (0, W.jsx)(F, { children: j(`#MeetSteam_edit_session_desc`) }),
      (0, W.jsx)(`textarea`, {
        className: L(`DialogTextInputBase`, mn),
        value: O.Get(t.localized_session_description, r),
        rows: 5,
        onChange: (e) => {
          let i = { ...t };
          ((i.localized_session_description = O.Set(
            i.localized_session_description,
            r,
            e.currentTarget.value,
          )),
            n(i));
        },
      }),
      (0, W.jsx)(k, {
        type: `text`,
        label: `Intended Audience`,
        tooltip: `A short descriptions for whom then event is designed for to help partners self select`,
        value: O.Get(t.localized_intended_audience, r),
        onChange: (e) => {
          let i = { ...t };
          ((i.localized_intended_audience = O.Set(
            i.localized_intended_audience,
            r,
            e.currentTarget.value,
          )),
            n(i));
        },
      }),
      (0, W.jsxs)(F, {
        children: [
          `FAQ `,
          (0, W.jsx)(pt, {
            tooltip: `Optional FAQ section which appears in the pop-up display and hidden by default`,
          }),
        ],
      }),
      (0, W.jsx)(`textarea`, {
        className: L(`DialogTextInputBase`, mn),
        value: O.Get(t.localized_sesssion_faq, r),
        rows: 5,
        onChange: (e) => {
          let i = { ...t };
          ((i.localized_sesssion_faq = O.Set(
            i.localized_sesssion_faq,
            r,
            e.currentTarget.value,
          )),
            n(i));
        },
      }),
      (0, W.jsx)(tt, {
        checked: t.ask_registration_question,
        onChange: (e) => {
          let r = { ...t };
          ((r.ask_registration_question = e), n(r));
        },
        label: `Ask partner to tell us what they want to learn from the sessions`,
      }),
      (0, W.jsx)(bn, { ...e }),
    ],
  });
}
function bn(e) {
  let { group: t, fnSetGroup: n } = e,
    [r, i] = (0, U.useState)(t.group_visibility_tokens?.length > 0);
  return r
    ? (0, W.jsxs)(W.Fragment, {
        children: [
          (0, W.jsx)(`div`, {
            children: `By default, all sessions are visibility to any partner wiht a list. We can limit visibility to users by adding tokens below. Multiple Meet Steam sections can be visible together if they share the same token. To make the tokens appears most friendly, we are limiting them to exactly 5 digits. Only one token can be set on the URL.`,
          }),
          t.group_visibility_tokens.map((e, r) =>
            (0, W.jsx)(
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
          (0, W.jsx)(rt, {
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
            (0, W.jsx)(rt, {
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
    : (0, W.jsx)(tt, {
        checked: !1,
        onChange: i,
        label: `Change Visibility Options`,
      });
}
function xn(e) {
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
  return (0, W.jsxs)(W.Fragment, {
    children: [
      (0, W.jsx)(Cn, {
        startTime: t.rtime_start,
        location_type: c,
        fnUpdateLocationAndTZ: (e, r) =>
          n({ ...t, location_type: e, in_person_time_zone: r }),
        in_person_time_zone: l,
      }),
      (0, W.jsx)(`br`, {}),
      (0, W.jsx)(re, {
        strDescription: j(`#MeetSteam_edit_start`),
        nEarliestTime: 0,
        fnGetTimeToUpdate: () => r,
        fnSetTimeToUpdate: (e) =>
          n({ ...t, rtime_start: e, rtime_end: e + P.PerMinute * d }),
        fnIsValidDateTime: () => !0,
        bShowTimeZone: !0,
      }),
      (0, W.jsx)(`br`, {}),
      (0, W.jsx)(k, {
        type: `number`,
        min: 0,
        label: j(`#MeetSteam_edit_duration`),
        onChange: (e) => {
          let r = Number.parseInt(e.currentTarget.value);
          n({ ...t, rtime_end: t.rtime_start + P.PerMinute * r });
        },
        value: d,
      }),
      (0, W.jsx)(Sn, { rtime_start: r, rtime_end: i, sDisplayTimeZone: p }),
      (0, W.jsx)(`br`, {}),
      (0, W.jsx)(`br`, {}),
      (0, W.jsxs)(`div`, {
        className: pn,
        children: [
          (0, W.jsx)(k, {
            type: `number`,
            value: a,
            label: j(`#MeetSteam_edit_max_capacity`),
            min: 1,
            onChange: (e) =>
              n({ ...t, max_capacity: Number.parseInt(e.currentTarget.value) }),
          }),
          (0, W.jsx)(wt, {
            controlled: !0,
            label: j(`#MeetSteam_edit_guest_count`),
            tooltip: j(`#MeetSteam_edit_guest_count_ttip`),
            rgOptions: u,
            selectedOption: o,
            onChange: (e) => n({ ...t, max_per_team: e.data }),
          }),
        ],
      }),
    ],
  });
}
function Sn(e) {
  let { rtime_start: t, rtime_end: n, sDisplayTimeZone: r } = e,
    i = K.unix(t).tz(Ee),
    a = K.unix(t).tz(r),
    o = a.utcOffset() - i.utcOffset(),
    s = K.unix(n).tz(Ee),
    c = K.unix(n).tz(r),
    l = c.utcOffset() - s.utcOffset();
  return (0, W.jsxs)(W.Fragment, {
    children: [
      (0, W.jsxs)(`div`, {
        children: [
          j(`#MeetSteam_edit_displayed_start`),
          `: `,
          xt(a.unix() + o * 60, !1, a.format(`z`)),
          ` `,
        ],
      }),
      (0, W.jsxs)(`div`, {
        children: [
          j(`#MeetSteam_edit_displayed_end`),
          `: `,
          xt(c.unix() + l * 60, !1, c.format(`z`)),
          ` `,
        ],
      }),
    ],
  });
}
function Cn(e) {
  let {
      startTime: t,
      location_type: n,
      fnUpdateLocationAndTZ: r,
      in_person_time_zone: i,
    } = e,
    a = { option: (e) => ({ ...e, color: `#444444` }) },
    o = wn(t),
    s = U.useMemo(
      () => o.reduce((e, t) => e.set(t.name, t.friendly_name), new Map()),
      [o],
    ),
    l = (e) => s.get(e) ?? e,
    u = U.useId(),
    d = U.useId();
  return (0, W.jsxs)(W.Fragment, {
    children: [
      (0, W.jsx)(`div`, {
        id: u,
        className: Ue,
        children: j(`#MeetSteam_edit_date_display_title`),
      }),
      (0, W.jsx)(`div`, {
        id: d,
        className: Ze,
        children: j(`#MeetSteam_edit_date_display_desc`),
      }),
      (0, W.jsxs)(We, {
        labelId: u,
        descriptionId: d,
        value: n,
        onChange: (e) => r(e, i),
        children: [
          (0, W.jsx)(Qe, {
            value: `in_person`,
            children: j(`#MeetSteam_edit_date_display_in_person`),
          }),
          (0, W.jsx)(Qe, {
            value: `virtual`,
            children: j(`#MeetSteam_edit_date_display_virtual`),
          }),
        ],
      }),
      n === `in_person` &&
        (0, W.jsx)(c._default, {
          styles: a,
          isSearchable: !0,
          isMulti: !1,
          options: o.map((e) => ({ label: e.friendly_name, value: e.name })),
          defaultMenuIsOpen: !1,
          value: i
            ? { label: l(i), value: i }
            : { label: l(`America/Los_Angeles`), value: `America/Los_Angeles` },
          onChange: (e) => r(n, e.value),
        }),
    ],
  });
}
function wn(e) {
  let t = i({
    queryKey: [`timezone`, e],
    queryFn: async () => {
      let t = `${ct.COMMUNITY_BASE_URL}/eventadmin/ajaxgettimezones`,
        n = { reference_time: e };
      return (await hn.default.get(t, { params: n }))?.data.timezones;
    },
  });
  return t.isSuccess ? t.data : [];
}
function q(e, t) {
  if (e) {
    let e = g.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
      t = 0;
    do t = Math.floor(1e4 + Math.random() * 9e4);
    while (e && e.findIndex((e) => e.group_id == t) >= 0);
    return {
      group_id: t,
      localized_session_title: E([], 32, null),
      localized_session_description: E([], 32, null),
      localized_sesssion_faq: E([], 32, null),
      localized_intended_audience: E([], 32, null),
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
    : (A(
        !1,
        `HelperCreateOrCloneGroupSessionModel Expect Create or previous model`,
      ),
      null);
}
function J(e, t) {
  if (e) {
    let e = je.GetTimeNowWithOverride(),
      t = g
        .GetEditModel()
        .GetEventModel()
        .jsondata.meet_steam_groups?.reduce((e, t) => e.concat(t.sessions), []),
      n = 0;
    do n = Math.floor(1e4 + Math.random() * 9e4);
    while (t && t.findIndex((e) => e.id == n) >= 0);
    let r = Math.ceil(e / 3600) * 3600;
    return {
      id: n,
      rtime_start: r + P.PerDay,
      rtime_end: r + P.PerDay + P.PerHour,
      max_capacity: 100,
      max_per_team: 3,
    };
  }
  return t
    ? { ...t }
    : (A(
        !1,
        `HelperCreateOrCloneSessionInstanceModel Expect Create or previous model`,
      ),
      null);
}
function Tn(e) {
  let t = g.GetEditModel();
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
function En(e) {
  let t = g.GetEditModel();
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
function Dn(e) {
  let t = g.GetEditModel();
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
function On(e, t, n) {
  e.dispatch(
    e.state.tr.insert(e.state.selection.to, t.create({ group_id: n })),
  );
}
function kn(e) {
  let { focusView: t, removeNode: n, group_id: r } = e,
    i = C(),
    a = s(() =>
      i
        .GetEventModel()
        .jsondata.meet_steam_groups?.find((e) => e.group_id == r),
    ),
    [o, c, l] = I(),
    u = U.useCallback(() => {
      (t(), l());
    }, [t, l]),
    [d, f, p] = I(),
    m = U.useCallback(() => {
      (t(), p());
    }, [t, p]);
  return !a || i.GetClanAccountID() != v()
    ? (0, W.jsx)(`div`, {
        children: `Error: Cannot edit meet steam session group`,
      })
    : (0, W.jsxs)(`div`, {
        className: dn,
        children: [
          (0, W.jsx)(An, { groupData: a, focusView: t }),
          (0, W.jsxs)(`div`, {
            className: un,
            children: [
              (0, W.jsx)(z, {
                onClick: c,
                tooltip: j(`#Button_Edit`),
                children: (0, W.jsx)(M, {}),
              }),
              (0, W.jsx)(z, {
                onClick: f,
                tooltip: j(`#Button_Delete`),
                children: (0, W.jsx)(T, {}),
              }),
              a.group_visibility_tokens?.length > 0 &&
                (0, W.jsx)(z, {
                  onClick: () => {},
                  tooltip: `Limited visibility to those with the appropriate URLs`,
                  children: (0, W.jsx)(mt, {}),
                }),
              !!a.ask_registration_question &&
                (0, W.jsx)(z, {
                  onClick: () => {},
                  tooltip: `Will ask partner to provides questions for us for this session.`,
                  children: (0, W.jsx)(Je, {}),
                }),
            ],
          }),
          !!o &&
            (0, W.jsx)(_n, {
              hideModal: u,
              groupInput: a,
              fnUpdateGroupSession: (e) => {
                let { groupIndex: t } = En(e.group_id),
                  n = g.GetEditModel();
                ((n.GetEventModel().jsondata.meet_steam_groups[t] = e),
                  n.SetDirty(_.description));
              },
            }),
          !!d &&
            (0, W.jsx)(w, {
              active: !0,
              children: (0, W.jsx)(D, {
                strTitle: j(`#Button_Delete`),
                strDescription: j(`#Dialog_AreYouSure`),
                onOK: () => {
                  let { groupIndex: e } = En(a.group_id),
                    t = g.GetEditModel(),
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
function An(e) {
  let { groupData: t, focusView: n } = e,
    r = s(() => t.sessions || []),
    [i, a, o] = I(),
    c = U.useCallback(() => {
      (n(), o());
    }, [n, o]);
  return t
    ? (0, W.jsxs)(be, {
        groupData: t,
        children: [
          r.map((e, i) =>
            (0, W.jsx)(
              jn,
              { focusView: n, sessionID: e.id, bShowOR: i + 1 < r.length },
              `timecol_` + t.group_id + `_` + e.id,
            ),
          ),
          (0, W.jsx)(z, {
            className: fn,
            onClick: a,
            tooltip: j(`#MeetSteam_add`),
            children: (0, W.jsx)(gt, {}),
          }),
          i &&
            (0, W.jsx)(vn, {
              bCreate: !0,
              hideModal: c,
              fnUpdateSession: (e) => {
                let n = g.GetEditModel(),
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
function jn(e) {
  let { sessionID: t, bShowOR: n, focusView: r } = e,
    [i, a] = St(),
    o = s(() => {
      let { groupIndex: e, sessionIndex: n } = Tn(t);
      return g.GetEditModel().GetEventModel().jsondata.meet_steam_groups[e]
        .sessions[n];
    }),
    [c, l, u] = I(),
    d = U.useCallback(() => {
      (r(), u());
    }, [r, u]),
    [f, p, m] = I(),
    h = U.useCallback(() => {
      (r(), m());
    }, [r, m]);
  return (0, W.jsxs)(W.Fragment, {
    children: [
      (0, W.jsxs)(`div`, {
        className: ln,
        ...a,
        children: [
          (0, W.jsx)(De, { sessionData: o }),
          !!i &&
            (0, W.jsxs)(`div`, {
              className: `F-Iu9ouJkU4-`,
              children: [
                (0, W.jsx)(z, {
                  onClick: l,
                  tooltip: j(`#Button_Edit`),
                  children: (0, W.jsx)(M, {}),
                }),
                (0, W.jsx)(z, {
                  onClick: p,
                  tooltip: j(`#Button_Delete`),
                  children: (0, W.jsx)(T, {}),
                }),
              ],
            }),
          !!c &&
            (0, W.jsx)(vn, {
              bCreate: !1,
              hideModal: d,
              sessionInput: o,
              fnUpdateSession: (e) => {
                let n = g.GetEditModel(),
                  { groupIndex: r, sessionIndex: i } = Tn(t),
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
            (0, W.jsx)(w, {
              active: !0,
              children: (0, W.jsx)(D, {
                strTitle: j(`#Button_Delete`),
                strDescription: j(`#Dialog_AreYouSure`),
                onOK: () => {
                  let e = g.GetEditModel(),
                    { groupIndex: n, sessionIndex: r } = Tn(t),
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
                closeModal: h,
              }),
            }),
        ],
      }),
      n && (0, W.jsx)(me, {}),
    ],
  });
}
function Mn(e, t, n, r, i) {
  let a = () => n.createChecked(null, i.createChecked()),
    o = () => r.createChecked(null, i.createChecked());
  return e.createChecked(null, [
    t.createChecked(null, [a(), a()]),
    t.createChecked(null, [o(), o()]),
  ]);
}
function Nn(e) {
  let { schema: t } = e,
    {
      table: n,
      table_row: r,
      table_header: i,
      table_cell: a,
      paragraph: o,
    } = t.nodes,
    s = U.useCallback(
      (e, t, s) =>
        !R(e) && (t && t(e.tr.insert(e.selection.to, Mn(n, r, i, a, o))), !0),
      [n, r, i, a, o],
    );
  return n
    ? (0, W.jsx)(V, {
        tooltip: j(`#FormattingToolbar_Tables_InsertTable`),
        command: s,
        children: (0, W.jsx)(Ke, {}),
      })
    : null;
}
function Pn(e) {
  let { schema: t, className: n } = e,
    { callbacks: r, view: i } = H(),
    [a, o] = U.useState(() => !!t.nodes.table && R(i.state));
  return (
    yt(
      r,
      U.useCallback((e) => o(!!t.nodes.table && R(e.state)), [t.nodes.table]),
    ),
    (0, W.jsx)(Ae, {
      visible: a,
      msAnimationDuration: 100,
      children: (0, W.jsx)($t, {
        className: n,
        children: (0, W.jsx)(Fn, { schema: t }),
      }),
    })
  );
}
function Fn(e) {
  let { schema: t } = e;
  return (0, W.jsxs)(W.Fragment, {
    children: [
      (0, W.jsx)(V, {
        tooltip: j(`#FormattingToolbar_Tables_AddRowBefore`),
        command: Pt,
        children: (0, W.jsx)(ht, {}),
      }),
      (0, W.jsx)(V, {
        tooltip: j(`#FormattingToolbar_Tables_AddRowAfter`),
        command: Mt,
        children: (0, W.jsx)(Ge, {}),
      }),
      (0, W.jsx)(V, {
        tooltip: j(`#FormattingToolbar_Tables_DeleteRow`),
        command: Tt,
        children: (0, W.jsx)(Ye, {}),
      }),
      (0, W.jsx)(B, {}),
      (0, W.jsx)(V, {
        tooltip: j(`#FormattingToolbar_Tables_AddColumnBefore`),
        command: At,
        children: (0, W.jsx)($e, {}),
      }),
      (0, W.jsx)(V, {
        tooltip: j(`#FormattingToolbar_Tables_AddColumnAfter`),
        command: Dt,
        children: (0, W.jsx)(Ve, {}),
      }),
      (0, W.jsx)(V, {
        tooltip: j(`#FormattingToolbar_Tables_DeleteColumn`),
        command: nn,
        children: (0, W.jsx)(He, {}),
      }),
      (0, W.jsx)(B, {}),
      (0, W.jsx)(V, {
        tooltip: j(`#FormattingToolbar_Tables_HeaderRow`),
        command: jt,
        children: (0, W.jsx)(Ie, {}),
      }),
      (0, W.jsx)(V, {
        tooltip: j(`#FormattingToolbar_Tables_HeaderColumn`),
        command: Ot,
        children: (0, W.jsx)(qe, {}),
      }),
      (0, W.jsx)(V, {
        tooltip: j(`#FormattingToolbar_Tables_HeaderCell`),
        command: Rt,
        children: (0, W.jsx)(at, {}),
      }),
      (0, W.jsx)(B, {}),
      (0, W.jsx)(V, {
        tooltip: j(`#FormattingToolbar_Tables_MergeCells`),
        command: kt,
        children: (0, W.jsx)(nt, {}),
      }),
      (0, W.jsx)(V, {
        tooltip: j(`#FormattingToolbar_Tables_SplitCells`),
        command: Lt,
        children: (0, W.jsx)(et, {}),
      }),
      !1,
    ],
  });
}
var In = `TfGEx4iodHc-`,
  Ln = `EbkD9oXySts-`;
function Rn(e, t, n) {
  e.dispatch(
    e.state.tr.insert(e.state.selection.to, t.create({ schedule_id: n })),
  );
}
function zn(e, t) {
  if (e) {
    let e = g.GetEditModel().GetEventModel().jsondata.meet_steam_schedules,
      t = 0;
    do t = Math.floor(1e4 + Math.random() * 9e4);
    while (e && e.findIndex((e) => e.schedule_id == t) >= 0);
    return { schedule_id: t, session_breaks: [] };
  }
  return t
    ? { ...t }
    : (A(
        !1,
        `HelperCreateOrCloneMeetSteamSchedule Expect Create or previous model`,
      ),
      null);
}
function Bn(e) {
  let { hideModal: t, fnUpdateSession: n, inputScheduleModel: r } = e,
    i = Me(),
    a = C(),
    [o, c] = (0, U.useState)(() => zn(!r, r)),
    [l, u, d] = s(() => [
      o.location_type,
      o.in_person_time_zone,
      a.GetEventModel().jsondata.meet_steam_groups || [],
    ]),
    f = (0, U.useMemo)(() => {
      let e = d.reduce((e, t) => e.concat(t.sessions), []);
      return e.length == 0 ? i : Math.min(...e.map((e) => e.rtime_start));
    }, [d, i]);
  return (0, W.jsx)(w, {
    active: !0,
    children: (0, W.jsx)(D, {
      strTitle: r
        ? `Update Meet Steam Schedule`
        : `Create Meet Steam Schedule View`,
      onOK: () => n(o),
      closeModal: () => {
        (c(zn(!r, r)), t());
      },
      children: (0, W.jsxs)(`div`, {
        className: void 0,
        children: [
          (0, W.jsx)(Cn, {
            startTime: a.GetEventStartTime(),
            location_type: l,
            in_person_time_zone: u,
            fnUpdateLocationAndTZ: (e, t) =>
              c({ ...o, location_type: e, in_person_time_zone: t }),
          }),
          (0, W.jsx)(Vn, {
            inputScheduleModel: o,
            fnUpdateSession: (e) => c(e),
            rtBreakStartingTime: f,
          }),
        ],
      }),
    }),
  });
}
function Vn(e) {
  let { fnUpdateSession: t, inputScheduleModel: n, rtBreakStartingTime: r } = e,
    [i, a] = s(() => [
      n.session_breaks || [],
      n.in_person_time_zone || `America/Los_Angeles`,
    ]),
    o = (0, U.useCallback)(
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
  return (0, W.jsxs)(`div`, {
    children: [
      (0, W.jsx)(`div`, { children: `Scheduled Breaks` }),
      i
        .sort((e, t) => t.rtime_start - e.rtime_start)
        .map((e, t) =>
          (0, W.jsx)(
            Hn,
            {
              sDisplayTimeZone: a,
              index: t,
              breakSession: e,
              fnOnUpdate: (e) => o(e, t),
            },
            `breakedit` + e.break_id,
          ),
        ),
      (0, W.jsx)(rt, {
        onClick: () => {
          let e = n.session_breaks ? [...n.session_breaks] : [],
            t = Math.floor(1 + Math.random() * 1e5);
          for (; e.findIndex((e) => e.break_id == t) >= 0;)
            t = Math.floor(1 + Math.random() * 1e5);
          o(
            {
              break_id: t,
              localized_break_description: E([], 32, null),
              rtime_start: r,
              rtime_end: r + P.PerHour,
            },
            n.session_breaks?.length || 0,
          );
        },
        children: `+ Add Break`,
      }),
    ],
  });
}
function Hn(e) {
  let { breakSession: t, fnOnUpdate: n, index: r, sDisplayTimeZone: i } = e,
    a = S(),
    [o, c, l, u] = s(() => [
      t.rtime_start,
      t.rtime_end,
      t.localized_break_description[a] || ``,
      Math.max(0, Math.floor((t.rtime_end - t.rtime_start) / 60)),
    ]);
  return (0, W.jsxs)(`div`, {
    children: [
      (0, W.jsxs)(`div`, { children: [`Break # `, r + 1] }),
      (0, W.jsx)(`br`, {}),
      (0, W.jsx)(re, {
        strDescription: `Break Start Time`,
        nEarliestTime: 0,
        fnGetTimeToUpdate: () => o,
        fnSetTimeToUpdate: (e) =>
          n({ ...t, rtime_start: e, rtime_end: e + P.PerMinute * u }),
        fnIsValidDateTime: () => !0,
        bShowTimeZone: !0,
      }),
      (0, W.jsx)(`br`, {}),
      (0, W.jsx)(k, {
        type: `number`,
        min: 0,
        label: `Break duration in minutes`,
        onChange: (e) => {
          let r = Number.parseInt(e.currentTarget.value);
          n({ ...t, rtime_end: t.rtime_start + P.PerMinute * r });
        },
        value: u,
      }),
      (0, W.jsx)(k, {
        type: `text`,
        label: `Break Description`,
        value: l,
        onChange: (e) => {
          let r = { ...t };
          ((r.localized_break_description[a] = e.currentTarget.value), n(r));
        },
      }),
      (0, W.jsx)(Sn, { rtime_start: o, rtime_end: c, sDisplayTimeZone: i }),
    ],
  });
}
function Un(e) {
  let { focusView: t, removeNode: n, schedule_id: r } = e,
    i = C(),
    a = s(() =>
      i
        .GetEventModel()
        .jsondata.meet_steam_schedules?.find((e) => e.schedule_id == r),
    ),
    [o, c, l] = I(),
    u = U.useCallback(() => {
      (t(), l());
    }, [t, l]),
    [d, f, p] = I(),
    m = U.useCallback(() => {
      (t(), p());
    }, [t, p]);
  return !a || i.GetClanAccountID() != v()
    ? (0, W.jsx)(`div`, {
        children: `Error: Cannot edit meet steam schedule view`,
      })
    : (0, W.jsxs)(`div`, {
        className: In,
        children: [
          (0, W.jsx)(ge, { eventModel: i.GetEventModel(), scheduleData: a }),
          (0, W.jsxs)(`div`, {
            className: Ln,
            children: [
              (0, W.jsx)(z, {
                onClick: c,
                tooltip: j(`#Button_Edit`),
                children: (0, W.jsx)(M, {}),
              }),
              (0, W.jsx)(z, {
                onClick: f,
                tooltip: j(`#Button_Delete`),
                children: (0, W.jsx)(T, {}),
              }),
            ],
          }),
          !!o &&
            (0, W.jsx)(Bn, {
              hideModal: u,
              inputScheduleModel: a,
              fnUpdateSession: (e) => {
                let { scheduleIndex: t } = Dn(e.schedule_id);
                ((i.GetEventModel().jsondata.meet_steam_schedules[t] = e),
                  i.SetDirty(_.description));
              },
            }),
          !!d &&
            (0, W.jsx)(w, {
              active: !0,
              children: (0, W.jsx)(D, {
                strTitle: j(`#Button_Delete`),
                strDescription: j(`#Dialog_AreYouSure`),
                onOK: () => {
                  let { scheduleIndex: e } = Dn(a.schedule_id),
                    t = g.GetEditModel(),
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
function Wn(e) {
  let { schema: t } = e,
    { callbacks: n, view: i } = H(),
    [a, o] = U.useState(!1),
    s = U.useCallback(
      (e, n) => {
        (i.dispatch(
          i.state.tr.insert(
            i.state.selection.to,
            t.nodes.emoticon.create(null, t.text(e)),
          ),
        ),
          n || i.focus());
      },
      [i, t],
    ),
    c = U.useCallback(
      (e) => {
        o(!0);
        let t = Xe((0, W.jsx)(Gn, { OnSelected: s }), e, {
          bOverlapHorizontal: !0,
        });
        r(
          () => !t.visible,
          () => o(!1),
        );
      },
      [s],
    );
  return (0, W.jsx)(z, {
    tooltip: j(`#Editor_Emoticon`),
    onClick: c,
    toggled: a,
    children: (0, W.jsx)(dt, {}),
  });
}
function Gn(e) {
  let t = vt();
  return (N(t), (0, W.jsx)(fe, { emoticonStore: t, OnSelected: e.OnSelected }));
}
var Kn = `KJ1XyPiGQj0-`,
  Y = `fiKe4PCXweM-`,
  qn = `yuw8NnJmdB8-`;
function Jn(e) {
  let { hideModal: t, fnUpdateSession: n, clanAccountID: r } = e,
    [i, a] = (0, U.useState)(() => Q(!0, null));
  return (0, W.jsx)(w, {
    active: !0,
    children: (0, W.jsx)(D, {
      strTitle: j(`#UserPolls_Create_title`),
      onOK: () => n(i),
      closeModal: () => {
        (a(Q(!0, null)), t());
      },
      children: (0, W.jsx)(`div`, {
        className: Kn,
        children: (0, W.jsx)(Zn, {
          clanAccountID: r,
          userPollDef: i,
          fnSetDef: a,
        }),
      }),
    }),
  });
}
function Yn(e) {
  let {
      hideModal: t,
      userPollDef: n,
      clanAccountID: r,
      fnUpdateUserPollDef: i,
    } = e,
    [a, o] = (0, U.useState)(() => Q(!1, n));
  return (0, W.jsx)(w, {
    active: !0,
    children: (0, W.jsx)(D, {
      strTitle: j(`#UserPolls_Edit_title`),
      onOK: () => {
        i(a);
      },
      onCancel: () => {
        o(Q(!1, n));
      },
      closeModal: t,
      children: (0, W.jsx)(`div`, {
        className: Kn,
        children: (0, W.jsx)(Zn, {
          userPollDef: a,
          clanAccountID: r,
          fnSetDef: o,
        }),
      }),
    }),
  });
}
function Xn(e) {
  switch (e) {
    default:
    case b.k_EPollResult_NotVisible:
      return j(`#UserPolls_Visibility_None`);
    case b.k_EPollResult_Visible_After_End:
      return j(`#UserPolls_Visibility_End`);
    case b.k_EPollResult_Visible_After_Vote:
      return j(`#UserPolls_Visibility_Voter`);
    case b.k_EPollResult_Visible_After_Vote_Or_End:
      return j(`#UserPolls_Visibility_Voter_or_End`);
    case b.k_EPollResult_Visible_On_Demand:
      return j(`#UserPolls_Visibility_OnDemand`);
  }
}
function Zn(e) {
  let { userPollDef: t, fnSetDef: n } = e,
    r = S(),
    [i] = s(() => [t.results_visibility_settings]),
    a = Object.values(b).map((e) => ({ data: e, label: Xn(e) }));
  return (0, W.jsxs)(W.Fragment, {
    children: [
      (0, W.jsx)(k, {
        type: `text`,
        label: j(`#UserPolls_Description`),
        value: O.Get(t.localized_poll_description, r),
        onChange: (e) => {
          let i = { ...t };
          ((i.localized_poll_description = O.Set(
            i.localized_poll_description,
            r,
            e.currentTarget.value,
          )),
            n(i));
        },
      }),
      (0, W.jsx)(er, { ...e }),
      (0, W.jsx)($n, { ...e }),
      (0, W.jsx)(F, { children: j(`#UserPolls_Visibility`) }),
      (0, W.jsx)(`div`, {
        className: Y,
        children: (0, W.jsx)(wt, {
          strDropDownClassName: ze,
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
      (0, W.jsx)(Qn, { ...e }),
    ],
  });
}
function Qn(e) {
  let { clanAccountID: t, userPollDef: n, fnSetDef: r } = e,
    i = C(),
    a = Se(i.GetClanSteamID()),
    [o] = s(() => [n.user_poll_background]),
    c = (0, U.useCallback)(
      (e, t, i, a, o) => {
        (A(i != null && i >= 0 && i < 32, `Unexpected value for elang: ` + i),
          A(o === `user_poll_background`, `Unexpected artwork type ` + o));
        let s = u(e, t);
        s.image && r({ ...n, user_poll_background: s.image });
      },
      [r, n],
    );
  return (0, W.jsxs)(W.Fragment, {
    children: [
      (0, W.jsx)(F, { children: j(`#UserPolls_BackgroundImage`) }),
      (0, W.jsxs)(`div`, {
        className: Y,
        children: [
          (0, W.jsx)(`p`, { children: j(`#UserPolls_BackgroundImage_desc`) }),
          (0, W.jsx)(f, {
            rgRealmList: i.GetIncludedRealmList(),
            rgSupportArtwork: _e,
            strUploadAjaxURL: a,
            fnOnUploadSuccess: c,
            elOverrideDragAndDropText: j(
              `#Template_Section_MediaUpdate_Static_Dnd`,
            ),
            bTwoPhaseUpload: !0,
            bDirectTempStorageUpload: !0,
          }),
          !!o && (0, W.jsx)(`img`, { src: ve(t, o) }),
        ],
      }),
    ],
  });
}
function X(e) {
  switch (e) {
    case x.k_EPollVoter_AnyUser:
      return j(`#UserPolls_Voters_Anyone`);
    case x.k_EPollVoter_UserGameInLibrary:
      return j(`#UserPolls_Voters_Owners`);
    case x.k_EPollVoter_MinPlayTime:
      return j(`#UserPolls_Voters_Players`);
    case x.k_EPollVoter_MemberOfGroup:
      return j(`#UserPolls_Voters_Members`);
  }
}
function $n(e) {
  let { clanAccountID: t, userPollDef: n, fnSetDef: r } = e,
    [i, a] = ue(t),
    [o, c] = s(() => [n.voter_min_playtime_seconds, n.voter_eligibility]),
    l = (0, U.useMemo)(() => {
      let e = [
        { label: X(x.k_EPollVoter_AnyUser), data: x.k_EPollVoter_AnyUser },
      ];
      return (
        a && a.is_ogg && t != 4145017
          ? (e.push({
              label: X(x.k_EPollVoter_UserGameInLibrary),
              data: x.k_EPollVoter_UserGameInLibrary,
            }),
            e.push({
              label: X(x.k_EPollVoter_MinPlayTime),
              data: x.k_EPollVoter_MinPlayTime,
            }))
          : a &&
            (!a.is_ogg || t == 4145017) &&
            e.push({
              label: X(x.k_EPollVoter_MemberOfGroup),
              data: x.k_EPollVoter_MemberOfGroup,
            }),
        e
      );
    }, [t, a]);
  return (0, W.jsxs)(W.Fragment, {
    children: [
      (0, W.jsx)(F, { children: j(`#UserPolls_Voters`) }),
      (0, W.jsxs)(`div`, {
        className: Y,
        children: [
          (0, W.jsx)(wt, {
            strDropDownClassName: ze,
            rgOptions: l,
            selectedOption: c,
            onChange: (e) => {
              if (e.data != n.voter_eligibility) {
                let t = { ...n, voter_eligibility: e.data };
                (e.data == x.k_EPollVoter_MinPlayTime &&
                  (t.voter_min_playtime_seconds = 5 * nr),
                  r(t));
              }
            },
            bDisableMouseOverlay: !0,
            contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
          }),
          c == x.k_EPollVoter_MinPlayTime &&
            (0, W.jsx)(`div`, {
              className: `_1iRX-KtzqgY-`,
              children: (0, W.jsx)(k, {
                type: `number`,
                label: j(`#UserPolls_MinPlayTime`),
                value: o / nr,
                min: 5,
                onChange: (e) => {
                  let t = (Number.parseInt(e?.currentTarget?.value) ?? 5) * nr;
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
function er(e) {
  let { userPollDef: t, fnSetDef: n } = e,
    [r, i] = s(() => [t.poll_end_time, t.poll_end_days_since_start]);
  return (0, W.jsxs)(W.Fragment, {
    children: [
      (0, W.jsx)(F, { children: j(`#UserPolls_Starts`) }),
      (0, W.jsxs)(`div`, {
        className: Y,
        children: [
          (0, W.jsxs)(`div`, {
            className: L(ut, Re),
            children: [
              (0, W.jsx)(`input`, {
                type: `radio`,
                name: `StartDateRadio`,
                id: `UserPollDialog_Days`,
                checked: !!i,
                onChange: () => {
                  t.poll_end_days_since_start ||
                    n({
                      ...t,
                      poll_end_time: void 0,
                      poll_end_days_since_start: tr * Z,
                    });
                },
              }),
              (0, W.jsx)(`label`, {
                htmlFor: `UserPollDialog_Days`,
                children: (0, W.jsx)(`span`, {
                  children: j(`#UserPolls_EndTime_In_Days`),
                }),
              }),
            ],
          }),
          !!i &&
            (0, W.jsx)(`div`, {
              className: `_1iRX-KtzqgY-`,
              children: (0, W.jsx)(k, {
                type: `number`,
                value: i / Z,
                min: 1,
                onChange: (e) => {
                  let r = (Number.parseInt(e?.currentTarget?.value) ?? 1) * Z;
                  t.poll_end_days_since_start != r &&
                    n({
                      ...t,
                      poll_end_time: void 0,
                      poll_end_days_since_start: r,
                    });
                },
              }),
            }),
          (0, W.jsxs)(`div`, {
            className: L(ut, Re),
            children: [
              (0, W.jsx)(`input`, {
                type: `radio`,
                name: `StartDateRadio`,
                id: `UserPollDialog_SpecificTime`,
                checked: !!r,
                onChange: () => {
                  t.poll_end_time ||
                    n({
                      ...t,
                      poll_end_days_since_start: void 0,
                      poll_end_time: Math.floor(Date.now() / 1e3) + tr * Z,
                    });
                },
              }),
              (0, W.jsx)(`label`, {
                htmlFor: `UserPollDialog_SpecificTime`,
                children: (0, W.jsx)(`span`, {
                  children: j(`#UserPolls_EndTime_Specific`),
                }),
              }),
            ],
          }),
          !!r &&
            (0, W.jsxs)(`div`, {
              className: L(`_1iRX-KtzqgY-`, `befdhdeb-HY-`),
              children: [
                (0, W.jsx)(re, {
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
                (0, W.jsx)(`span`, { children: j(`#UserPolls_EndTime_Zone`) }),
              ],
            }),
        ],
      }),
    ],
  });
}
var tr = 7,
  Z = 86400,
  nr = 60;
function Q(e, t) {
  if (e) {
    let e = g.GetEditModel().GetEventModel().jsondata.user_polls || [],
      t = 0;
    do t = Math.floor(1e4 + Math.random() * 9e4);
    while (e && e.findIndex((e) => e.poll_id == t) >= 0);
    return {
      poll_id: t,
      options: [],
      localized_poll_description: E([], 32, null),
      poll_end_days_since_start: tr * Z,
      poll_end_time: void 0,
      results_visibility_settings: b.k_EPollResult_Visible_On_Demand,
      voter_eligibility: x.k_EPollVoter_AnyUser,
    };
  }
  return t
    ? { ...t, localized_poll_description: [...t.localized_poll_description] }
    : (A(
        !1,
        `HelperCreateOrCloneUserPollModel Expect Create or previous model`,
      ),
      null);
}
function rr(e) {
  let {
      bCreate: t,
      hideModal: n,
      pollOptionsInput: r,
      fnUpdatePollOption: i,
    } = e,
    [a, o] = (0, U.useState)(() => ir(t, r)),
    s = S();
  return (0, W.jsx)(w, {
    active: !0,
    children: (0, W.jsx)(D, {
      strTitle: j(t ? `#UserPolls_Option_Create` : `#UserPolls_Option_Edit`),
      onOK: () => {
        (i(a), n());
      },
      onCancel: () => {
        (o(ir(t, r)), n());
      },
      children: (0, W.jsx)(`div`, {
        className: Kn,
        children: (0, W.jsx)(k, {
          type: `text`,
          label: j(`#UserPolls_Option_Title`),
          value: O.Get(a.localized_option, s),
          onChange: (e) => {
            let t = { ...a };
            ((t.localized_option = [...t.localized_option]),
              (t.localized_option = O.Set(
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
function ir(e, t) {
  if (e) {
    let e = g
        .GetEditModel()
        .GetEventModel()
        .jsondata.user_polls?.reduce((e, t) => e.concat(t.options), []),
      t = 0;
    do t = Math.floor(1e4 + Math.random() * 9e4);
    while (e && e.findIndex((e) => e.option_id == t) >= 0);
    return { option_id: t, localized_option: E([], 32, null) };
  }
  return t
    ? { ...t }
    : (A(
        !1,
        `HelperCreateOrClonePollOptionModel Expect Create or previous model`,
      ),
      null);
}
function $(e) {
  let t = g.GetEditModel();
  for (let n = 0; n < t.GetEventModel().jsondata.user_polls.length; ++n) {
    let r = t.GetEventModel().jsondata.user_polls[n];
    for (let t = 0; t < r.options.length; ++t)
      if (r.options[t].option_id == e) return { pollIndex: n, optionIndex: t };
  }
  return null;
}
function ar(e) {
  let t = g.GetEditModel();
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
    i = C(),
    a = s(() =>
      i.GetEventModel().jsondata.user_polls?.find((e) => e.poll_id == r),
    ),
    [o, c, l] = I(),
    u = U.useCallback(() => {
      (t(), l());
    }, [t, l]),
    [d, f, p] = I(),
    m = U.useCallback(() => {
      (t(), p());
    }, [t, p]);
  return a
    ? (0, W.jsxs)(`div`, {
        className: dn,
        children: [
          (0, W.jsx)(cr, { userPollDef: a, focusView: t }),
          (0, W.jsxs)(`div`, {
            className: un,
            children: [
              (0, W.jsx)(z, {
                onClick: c,
                tooltip: j(`#Button_Edit`),
                children: (0, W.jsx)(M, {}),
              }),
              (0, W.jsx)(z, {
                onClick: f,
                tooltip: j(`#Button_Delete`),
                children: (0, W.jsx)(T, {}),
              }),
              (0, W.jsx)(z, {
                onClick: () => {},
                tooltip: Xn(a.results_visibility_settings),
                children: (0, W.jsx)(mt, {}),
              }),
              (0, W.jsx)(z, {
                onClick: () => {},
                tooltip: X(a.voter_eligibility),
                children: (0, W.jsx)(it, {}),
              }),
            ],
          }),
          !!o &&
            (0, W.jsx)(Yn, {
              hideModal: u,
              userPollDef: a,
              clanAccountID: i.GetClanAccountID(),
              fnUpdateUserPollDef: (e) => {
                let { pollIndex: t } = ar(e.poll_id),
                  n = g.GetEditModel();
                ((n.GetEventModel().jsondata.user_polls[t] = e),
                  n.SetDirty(_.description));
              },
            }),
          !!d &&
            (0, W.jsx)(w, {
              active: !0,
              children: (0, W.jsx)(D, {
                strTitle: j(`#Button_Delete`),
                strDescription: j(`#Dialog_AreYouSure`),
                onOK: () => {
                  let { pollIndex: e } = ar(a.poll_id),
                    t = g.GetEditModel(),
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
    : (0, W.jsx)(`div`, {
        className: Fe,
        children: j(`#UserPolls_Editor_FailToFindModel`, r),
      });
}
function cr(e) {
  let { userPollDef: t, focusView: n } = e,
    [r, i] = s(() => [t.options || [], t.randomize_option_order]),
    a = C(),
    o = S(),
    [c, l, u] = I(),
    d = U.useCallback(() => {
      (n(), u());
    }, [n, u]),
    [f, p, m] = I(),
    h = U.useCallback(() => {
      (n(), m());
    }, [n, m]);
  return t
    ? (0, W.jsxs)(ke, {
        userPollDef: t,
        eventModel: a.GetEventModel(),
        lang: o,
        children: [
          r.map((e) =>
            (0, W.jsx)(
              ur,
              { focusView: n, optionID: e.option_id },
              `polloption` + t.poll_id + `_` + e.option_id,
            ),
          ),
          (0, W.jsxs)(`div`, {
            className: qn,
            children: [
              (0, W.jsx)(st, {
                className: ``,
                onClick: l,
                children: j(`#UserPolls_Option_Add`),
              }),
              (0, W.jsx)(st, {
                className: ``,
                onClick: p,
                children: j(`#UserPolls_Option_Reorder`),
              }),
            ],
          }),
          c &&
            (0, W.jsx)(rr, {
              bCreate: !0,
              hideModal: d,
              fnUpdatePollOption: (e) => {
                let n = g.GetEditModel();
                ((t.options ||= []),
                  t.options.push(e),
                  n.SetDirty(_.description));
              },
            }),
          f &&
            (0, W.jsx)(lr, {
              hideModal: h,
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
    [o, s] = (0, U.useState)(n),
    [c, l] = (0, U.useState)(t);
  return (0, W.jsx)(w, {
    active: !0,
    children: (0, W.jsxs)(D, {
      strTitle: j(`#UserPolls_Option_Reorder`),
      strDescription: j(`#UserPolls_Option_Reorder_desc`),
      onCancel: () => {
        (s(n), l(t));
      },
      onOK: () => {
        r([...c], o);
      },
      closeModal: i,
      children: [
        (0, W.jsx)(tt, {
          label: j(`#UserPolls_Option_Randomize`),
          checked: o,
          onChange: s,
        }),
        (0, W.jsx)(oe, {
          items: c,
          render: (e) =>
            (0, W.jsx)(`div`, {
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
    [r, i] = St(),
    a = s(() => {
      let { optionIndex: e, pollIndex: n } = $(t);
      return g.GetEditModel().GetEventModel().jsondata.user_polls[n].options[e];
    }),
    o = S(),
    [c, l, u] = I(),
    d = U.useCallback(() => {
      (n(), u());
    }, [n, u]),
    [f, p, m] = I(),
    h = U.useCallback(() => {
      (n(), m());
    }, [n, m]);
  return (0, W.jsxs)(`div`, {
    className: ln,
    ...i,
    children: [
      (0, W.jsx)(xe, { pollOptionDef: a, lang: o }),
      !!r &&
        (0, W.jsxs)(`div`, {
          className: `F-Iu9ouJkU4-`,
          children: [
            (0, W.jsx)(z, {
              onClick: l,
              tooltip: j(`#Button_Edit`),
              children: (0, W.jsx)(M, {}),
            }),
            (0, W.jsx)(z, {
              onClick: p,
              tooltip: j(`#Button_Delete`),
              children: (0, W.jsx)(T, {}),
            }),
          ],
        }),
      !!c &&
        (0, W.jsx)(rr, {
          bCreate: !1,
          hideModal: d,
          pollOptionsInput: a,
          fnUpdatePollOption: (e) => {
            let n = g.GetEditModel(),
              { optionIndex: r, pollIndex: i } = $(t),
              a = [...n.GetEventModel().jsondata.user_polls[i].options];
            ((a[r] = e),
              (n.GetEventModel().jsondata.user_polls[i].options = a),
              n.SetDirty(_.description));
          },
        }),
      !!f &&
        (0, W.jsx)(w, {
          active: !0,
          children: (0, W.jsx)(D, {
            strTitle: j(`#Button_Delete`),
            strDescription: j(`#Dialog_AreYouSure`),
            onOK: () => {
              let e = g.GetEditModel(),
                { optionIndex: n, pollIndex: r } = $(t),
                i = [...e.GetEventModel().jsondata.user_polls[r].options];
              (i.splice(n, 1),
                (e.GetEventModel().jsondata.user_polls[r].options = i),
                e.SetDirty(_.description));
            },
            closeModal: h,
          }),
        }),
    ],
  });
}
var dr = U.memo(function (e) {
  let {
    view: t,
    schema: n,
    refUpdateToolbar: r,
    className: i,
    clanSteamID: a,
    bSpellcheckEnabled: o,
    setSpellcheckEnabled: s,
  } = e;
  return (0, W.jsx)(Ht, {
    refUpdateToolbar: r,
    view: t,
    children: (0, W.jsxs)(`div`, {
      className: e.className,
      children: [
        (0, W.jsxs)($t, {
          className: e.className,
          children: [
            (0, W.jsx)(Wt, {}),
            (0, W.jsx)(B, {}),
            (0, W.jsx)(Yt, { schema: n }),
            (0, W.jsx)(B, {}),
            n.marks.link && (0, W.jsx)(fr, { schema: n }),
            (0, W.jsx)(B, {}),
            (0, W.jsx)(Xt, { schema: n }),
            (0, W.jsx)(Zt, { schema: n, levels: 3 }),
            (0, W.jsx)(B, {}),
            (0, W.jsx)(Wn, { schema: n }),
            (0, W.jsx)(mr, { schema: n, clanSteamID: a }),
            (0, W.jsx)(Nn, { schema: n }),
            (0, W.jsx)(Ut, { schema: n, showIndentButtonsAsNeeded: !0 }),
            (0, W.jsx)(Gt, {}),
            s &&
              (0, W.jsx)(Qt, {
                bSpellcheckEnabled: o,
                setSpellcheckEnabled: s,
              }),
            n.nodes.meetsteamsessiongroup && (0, W.jsx)(gr, { schema: n }),
            n.nodes.meetsteamscheduleview && (0, W.jsx)(_r, { schema: n }),
            n.nodes.userpolls && lt.is_support && (0, W.jsx)(pr, { schema: n }),
          ],
        }),
        (0, W.jsx)(Pn, { className: e.className, schema: n }),
      ],
    }),
  });
});
function fr(e) {
  let t = ee();
  return (0, W.jsx)(Kt, { schema: e.schema, addtlAttrs: t });
}
function pr(e) {
  let { schema: t } = e,
    { callbacks: n, view: r } = H(),
    i = C(),
    [a, o, s] = I(),
    c = U.useCallback(() => {
      (s(), r.focus());
    }, [s, r]),
    l = U.useCallback(
      (e) => {
        (i.GetEventModel().jsondata.user_polls ||
          (i.GetEventModel().jsondata.user_polls = []),
          i.GetEventModel().jsondata.user_polls.push({ ...e }),
          or(r, t.nodes.userpolls, e.poll_id),
          c());
      },
      [t, r, c, i],
    );
  return (0, W.jsxs)(W.Fragment, {
    children: [
      a &&
        (0, W.jsx)(Jn, {
          hideModal: c,
          clanAccountID: i.GetClanAccountID(),
          fnUpdateSession: l,
        }),
      (0, W.jsx)(z, {
        tooltip: j(`#UserPolls_Toolbar_ttip`),
        onClick: o,
        toggled: a,
        children: (0, W.jsx)(Be, {}),
      }),
    ],
  });
}
function mr(e) {
  let { schema: t, clanSteamID: n } = e,
    { callbacks: r, view: i } = H(),
    { image: a, video: o, previewyoutube: s } = t.nodes,
    c = U.useCallback(
      (e, t) => {
        i.dispatch(i.state.tr.insert(i.state.selection.to, t.create(e)));
      },
      [i],
    ),
    l = U.useCallback(() => i.focus(), [i]),
    {
      showInsertImageModal: u,
      showInsertVideoModal: d,
      imageModal: f,
      activeModal: p,
    } = ne({
      clanSteamID: n,
      imageNodeType: a,
      videoNodeType: o,
      onItemSelected: c,
      onHideModal: l,
    });
  return (0, W.jsxs)(W.Fragment, {
    children: [
      f,
      a &&
        (0, W.jsx)(z, {
          tooltip: j(`#EventEditor_InsertImage_Title`),
          onClick: u,
          toggled: p == `image`,
          children: (0, W.jsx)(ot, {}),
        }),
      o &&
        (0, W.jsx)(z, {
          tooltip: j(`#EventEditor_EditVideo_Title`),
          onClick: d,
          toggled: p == `video`,
          children: (0, W.jsx)(Le, {}),
        }),
      s && (0, W.jsx)(hr, { schema: t }),
      (a || o || s) && (0, W.jsx)(B, {}),
    ],
  });
}
function hr(e) {
  let { schema: t } = e,
    { callbacks: n, view: r } = H(),
    [i, a, o] = I(),
    s = U.useCallback(() => {
      (o(), r.focus());
    }, [o, r]),
    c = U.useCallback(
      (e, n) => {
        (on(r, t.nodes.previewyoutube, e, n), s());
      },
      [t, r, s],
    );
  return (0, W.jsxs)(W.Fragment, {
    children: [
      i && (0, W.jsx)(cn, { hideModal: s, onSave: c }),
      (0, W.jsx)(z, {
        tooltip: j(`#EventEditor_InsertYouTube`),
        onClick: a,
        toggled: i,
        children: (0, W.jsx)(`img`, { src: Pe }),
      }),
    ],
  });
}
function gr(e) {
  let { schema: t } = e,
    { callbacks: n, view: r } = H(),
    i = C(),
    [a, o, s] = I(),
    c = U.useCallback(() => {
      (s(), r.focus());
    }, [s, r]),
    l = U.useCallback(
      (e, n) => {
        (i.GetEventModel().jsondata.meet_steam_groups ||
          (i.GetEventModel().jsondata.meet_steam_groups = []),
          i
            .GetEventModel()
            .jsondata.meet_steam_groups.push({ ...e, sessions: [n] }),
          On(r, t.nodes.meetsteamsessiongroup, e.group_id),
          c());
      },
      [t, r, c, i],
    );
  if (i?.GetClanAccountID() == v())
    return (0, W.jsxs)(W.Fragment, {
      children: [
        a && (0, W.jsx)(gn, { hideModal: c, fnUpdateSession: l }),
        (0, W.jsx)(z, {
          tooltip: j(`#MeetSteam_add_group_ttip`),
          onClick: o,
          toggled: a,
          children: (0, W.jsx)(`img`, { src: Pe }),
        }),
      ],
    });
}
function _r(e) {
  let { schema: t } = e,
    { callbacks: n, view: r } = H(),
    i = C(),
    [a, o, s] = I(),
    c = U.useCallback(() => {
      (s(), r.focus());
    }, [s, r]),
    l = U.useCallback(
      (e) => {
        (i.GetEventModel().jsondata.meet_steam_schedules ||
          (i.GetEventModel().jsondata.meet_steam_schedules = []),
          i.GetEventModel().jsondata.meet_steam_schedules.push({ ...e }),
          Rn(r, t.nodes.meetsteamscheduleview, e.schedule_id),
          c());
      },
      [t, r, c, i],
    );
  if (i?.GetClanAccountID() == v())
    return (0, W.jsxs)(W.Fragment, {
      children: [
        a &&
          (0, W.jsx)(Bn, {
            hideModal: c,
            inputScheduleModel: null,
            fnUpdateSession: l,
          }),
        (0, W.jsx)(z, {
          tooltip: j(`#MeetSteam_add_schedule_ttip`),
          onClick: o,
          toggled: a,
          children: (0, W.jsx)(`img`, { src: Pe }),
        }),
      ],
    });
}
function vr(e) {
  let { schema: t, emoticonStore: n } = e,
    r = t.nodes.emoticon;
  (N(n),
    Nt(
      U.useMemo(() => zt({ rules: [br(/:([a-zA-Z0-9_]+):$/, r, n)] }), [r, n]),
    ));
  let i = U.useMemo(
    () => [
      {
        type: r,
        component: yr,
        readProps: (e) => ({ emoticonStore: n, emoticon: e.textContent }),
      },
    ],
    [r, n],
  );
  return (0, W.jsx)(qt, { specs: i });
}
function yr(e) {
  let { selected: t, emoticonStore: n, emoticon: r } = e;
  return (
    N(n),
    n.BHasEmoticon(r)
      ? (0, W.jsx)(`span`, {
          style: t
            ? { background: `#54a5d4`, filter: `brightness(1.2)` }
            : void 0,
          children: (0, W.jsx)(pe, { emoticon: r }),
        })
      : `:${r}:`
  );
}
function br(e, t, n) {
  return new Bt(e, (e, r, i, a) => {
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
    ? (0, W.jsx)(Ct, {
        children: (0, W.jsx)(Cr, { ...e, eCurrentEditLanguage: r }),
      })
    : null;
});
function Sr(e, t, n, r) {
  let i = t.GetDescription(n);
  return (
    (i = i?.replace(
      ft.GetUnvalidatedEmoticonReplaceRegex(),
      `[emoticon]$1[/emoticon]`,
    )),
    new Et(e, i, (e) => t.SetDescription(n, e), {
      parser: {
        fnProcessText: (t) => Ft(e.pm_schema, t, e.pm_schema.marks.link, r),
      },
    })
  );
}
var Cr = U.memo(function (e) {
  let {
      editModel: t,
      refOnInsertImage: n,
      limitBBCode: r,
      eCurrentEditLanguage: i,
    } = e,
    [a, o] = U.useState(),
    s = U.useMemo(() => te(r), [r]),
    [c, l] = U.useState(),
    u = wr(t.GetClanSteamID(), s);
  U.useEffect(() => {
    l(Sr(s, t, i, u));
  }, [s, u, t, i]);
  let d = U.useRef(void 0);
  It(c, { msAutosaveTimeout: 1e3 });
  let { nodes: f, marks: p } = s.pm_schema;
  return (
    h(n, f.image, f.video, p.link, a),
    (0, W.jsx)(ce, {
      clanSteamID: t.GetClanSteamID(),
      imageNode: f.image,
      videoNode: f.video,
      children: (0, W.jsxs)(`div`, {
        className: Ce,
        children: [
          (0, W.jsx)(dr, {
            view: a,
            schema: s.pm_schema,
            refUpdateToolbar: d,
            className: Oe,
            clanSteamID: t.GetClanSteamID(),
          }),
          (0, W.jsx)(`div`, {
            className: he,
            children: (0, W.jsx)(Jt, {
              pmState: c,
              className: L(ye, we),
              refOnUpdate: d,
              refView: o,
              panelProps: { onBlur: () => c.CommitChanges() },
              children: (0, W.jsx)(Tr, {
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
    i = d(n.dynamiclink);
  return U.useCallback(
    (...e) => {
      let t = `default`;
      return (r && (t = r(...e)), t == "default" && i && (t = i(...e)), t);
    },
    [r, i],
  );
}
var Tr = U.memo(function (e) {
  let { eventSchemaConfig: t, editModel: n, onURLPasted: r } = e,
    i = vt(),
    { marks: a, nodes: o } = t.pm_schema;
  return (0, W.jsxs)(W.Fragment, {
    children: [
      (0, W.jsx)(rn, {
        linkMarkType: a.link,
        onURLPasted: r,
        schema: t.pm_schema,
      }),
      o.image && (0, W.jsx)(tn, { nodeType: o.image }),
      (0, W.jsx)(Er, {
        schemaConfig: t,
        editModel: n,
        clanSteamID: n.GetClanSteamID(),
      }),
      (0, W.jsx)(vr, { emoticonStore: i, schema: t.pm_schema }),
    ],
  });
});
function Er(e) {
  let { schemaConfig: t, editModel: n, clanSteamID: r } = e,
    i = t.pm_schema,
    a = U.useMemo(() => an(i), [i]);
  Nt(a);
  let o = i.nodes,
    s = o.image,
    c = o.video,
    l = o.carousel,
    u = U.useCallback(
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
    d = U.useMemo(
      () => [
        o.previewyoutube && {
          type: o.previewyoutube,
          component: sn,
          readProps: (e) => ({
            videoID: e.attrs.videoID,
            align: e.attrs.align,
            editModel: n,
          }),
        },
        s && { type: s, component: ie, readProps: (e) => u(`image`, e) },
        c && { type: c, component: ie, readProps: (e) => u(`video`, e) },
        o.meetsteamsessiongroup && {
          type: o.meetsteamsessiongroup,
          component: kn,
          readProps: (e) => ({ group_id: e.attrs.group_id }),
        },
        o.meetsteamscheduleview && {
          type: o.meetsteamscheduleview,
          component: Un,
          readProps: (e) => ({ schedule_id: e.attrs.schedule_id }),
        },
        o.userpolls && {
          type: o.userpolls,
          component: sr,
          readProps: (e) => ({ poll_id: e.attrs.poll_id }),
        },
        o.dynamiclink && {
          type: o.dynamiclink,
          component: m,
          readProps: (e) => ({
            editModel: n,
            href: e.attrs.href,
            schema: t.pm_schema,
          }),
        },
        o.carousel && {
          type: o.carousel,
          component: se,
          readProps: (e) => ({
            node: e,
            imageNodeType: s,
            videoNodeType: c,
            schemaConfig: t,
            editModel: n,
          }),
        },
      ],
      [o, s, c, n, u, t],
    );
  return (0, W.jsx)(qt, { specs: d });
}
export { xr as default };
