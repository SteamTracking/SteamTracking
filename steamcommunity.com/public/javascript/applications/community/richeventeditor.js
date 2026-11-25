/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  C as t,
  G as n,
  Pt as r,
  S as i,
  V as a,
  at as o,
  k as s,
} from "./chunk~01cfc309bf.js";
import {
  $ as c,
  Bt as l,
  F as u,
  Ir as d,
  Lr as f,
  Q as p,
  Rr as m,
  a as h,
  c as g,
  er as ee,
  h as _,
  ht as te,
  i as ne,
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
import { V as S, x as Pe } from "./chunk~91ae5e1167.js";
import { r as Fe } from "./chunk~739842ca30.js";
import { j as C } from "./chunk~2bb3c0c267.js";
import {
  $h as w,
  Bo as Ie,
  Cu as Le,
  Eo as Re,
  Ga as ze,
  Gd as T,
  Ha as Be,
  Hs as Ve,
  Is as E,
  Ja as He,
  Jo as Ue,
  Js as We,
  Ka as Ge,
  Nn as Ke,
  Oc as qe,
  Pn as Je,
  Qa as Ye,
  Qd as D,
  Ro as Xe,
  Td as Ze,
  To as Qe,
  Ua as $e,
  Uo as O,
  Va as et,
  Vi as k,
  Vo as tt,
  Wa as nt,
  Xa as rt,
  Xn as it,
  Ya as at,
  Yo as A,
  Za as ot,
  ap as j,
  au as st,
  bu as M,
  cd as ct,
  dd as N,
  df as lt,
  ga as ut,
  h as P,
  hm as dt,
  jo as F,
  m as ft,
  mm as pt,
  na as mt,
  ns as ht,
  os as gt,
  ps as _t,
  qa as vt,
  qh as I,
  s as yt,
  ss as bt,
  ts as L,
  ua as R,
  vn as xt,
  xc as St,
  yr as Ct,
} from "./main.js";
import {
  B as wt,
  E as Tt,
  F as Et,
  G as Dt,
  H as Ot,
  I as kt,
  K as At,
  L as jt,
  N as Mt,
  R as Nt,
  S as Pt,
  T as Ft,
  U as It,
  V as z,
  W as Lt,
  X as Rt,
  Y as zt,
  Z as Bt,
  _ as Vt,
  a as Ht,
  c as Ut,
  g as B,
  h as Wt,
  i as Gt,
  j as Kt,
  l as qt,
  m as V,
  n as Jt,
  o as Yt,
  p as H,
  r as Xt,
  s as Zt,
  v as Qt,
  w as $t,
  x as en,
  y as U,
  z as tn,
} from "./chunk~5c33f42766.js";
import { t as nn } from "./chunk~01d6da9524.js";
function rn(e) {
  return Rt({ rules: [Bt(/^>$/, e.nodes.quote)] });
}
var W = e(r()),
  G = o();
function an(e, t, n, r = y.left) {
  e.dispatch(
    e.state.tr.insert(e.state.selection.to, t.create({ videoID: n, align: r })),
  );
}
function on(e) {
  let {
      videoID: t,
      align: n,
      editModel: r,
      selected: i,
      setAttrs: a,
      focusView: o,
    } = e,
    [s, c, l] = N(),
    u = W.useCallback(() => {
      (l(), o());
    }, [l, o]),
    d = W.useCallback(
      (e, t) => {
        (a({ videoID: e, align: t }), u());
      },
      [a, u],
    );
  return (0, G.jsxs)(G.Fragment, {
    children: [
      s &&
        (0, G.jsx)(sn, {
          videoID: t,
          align: n,
          bEditing: !0,
          hideModal: u,
          onSave: d,
        }),
      (0, G.jsxs)(f, {
        className: M(ie, i && `ef5sjCjBDrY-`),
        children: [
          (0, G.jsx)(m, {
            onEditClick: c,
            onDeleteClick: e.removeNode,
            bStrongShadows: !0,
          }),
          i && (0, G.jsx)(`div`, { className: `RhG8qWaN38o-` }),
          (0, G.jsx)(Te, {
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
function sn(e) {
  let {
      videoID: t = ``,
      align: n = ``,
      bEditing: r = !1,
      hideModal: i,
      onSave: a,
    } = e,
    [o, s] = W.useState(n || y.full),
    [c, l] = W.useState(t ? `https://www.youtube.com/watch?v=${t}` : ``),
    [u, d] = W.useState(void 0),
    f = W.useCallback(() => {
      let { strVideoID: e } = fe(c);
      return (e ? a(e, o) : d(D(`#EventEditor_InsertYouTube_NoURL`)), !1);
    }, [c, o, a]),
    p = W.useCallback((e) => {
      e && (e.element.focus(), e.element.select());
    }, []);
  return (0, G.jsx)(E, {
    active: !0,
    children: (0, G.jsxs)($t, {
      strTitle: D(`#EventEditor_InsertYouTube`),
      closeModal: i,
      strOKText: D(r ? `#Button_Save` : `#EventEditor_InsertYouTube`),
      onOK: f,
      children: [
        u && (0, G.jsx)(`div`, { className: `O-jb07OKlag-`, children: u }),
        (0, G.jsx)(O, {
          label: D(`#EventEditor_InsertYouTube_URL`),
          placeholder: D(`#EventEditor_InsertYouTube_Placholder`),
          value: c,
          ref: p,
          onChange: (e) => l(e.currentTarget.value),
        }),
        (0, G.jsxs)(ht, {
          label: D(`#EventEditor_InsertYouTube_Position`),
          children: [
            (0, G.jsx)(gt, {
              checked: o == y.left,
              onChange: (e) => e && s(y.left),
              label: D(`#EventEditor_InsertYouTube_Left`),
            }),
            (0, G.jsx)(gt, {
              checked: o == y.right,
              onChange: (e) => e && s(y.right),
              label: D(`#EventEditor_InsertYouTube_Right`),
            }),
            (0, G.jsx)(gt, {
              checked: o == y.full,
              onChange: (e) => e && s(y.full),
              label: D(`#EventEditor_InsertYouTube_Full`),
            }),
          ],
        }),
      ],
    }),
  });
}
var cn = `bkCqOWe6u70-`,
  ln = `F-Iu9ouJkU4-`,
  un = `Orxop48kS2w-`,
  dn = `p-atMVHbHCY-`,
  K = `-dznvStnO7w-`,
  fn = `UXQ6tbkrOG0-`,
  pn = `tKQoekDRds8-`,
  q = e(Ne()),
  mn = e(s());
function hn(e) {
  let { hideModal: n, fnUpdateSession: r } = e,
    [i, a] = (0, W.useState)(() => J(!0, null)),
    [o, s] = (0, W.useState)(() => Y(!0, null)),
    [c] = t(() => [o.location_type]);
  return (0, G.jsx)(E, {
    active: !0,
    children: (0, G.jsx)(k, {
      strTitle: D(`#MeetSteam_create_title`),
      onOK: () => r(i, o),
      closeModal: () => {
        (s(Y(!0, null)), a(J(!0, null)), n());
      },
      bOKDisabled: !c == null,
      children: (0, G.jsxs)(`div`, {
        className: K,
        children: [
          (0, G.jsx)(vn, { group: i, fnSetGroup: a }),
          (0, G.jsx)(bn, { session: o, fnSetSession: s }),
        ],
      }),
    }),
  });
}
function gn(e) {
  let { hideModal: t, groupInput: n, fnUpdateGroupSession: r } = e,
    [i, a] = (0, W.useState)(() => J(!1, n));
  return (0, G.jsx)(E, {
    active: !0,
    children: (0, G.jsx)(k, {
      strTitle: D(`#MeetSteam_edit_title`),
      onOK: () => {
        (r(i), t());
      },
      onCancel: () => {
        (a(J(!1, n)), t());
      },
      children: (0, G.jsx)(`div`, {
        className: K,
        children: (0, G.jsx)(vn, { group: i, fnSetGroup: a }),
      }),
    }),
  });
}
function _n(e) {
  let { bCreate: n, hideModal: r, sessionInput: i, fnUpdateSession: a } = e,
    [o, s] = (0, W.useState)(() => Y(n, i)),
    [c] = t(() => [o.location_type]);
  return (0, G.jsx)(E, {
    active: !0,
    children: (0, G.jsx)(k, {
      strTitle: D(n ? `#MeetSteam_create_title` : `#MeetSteam_edit_title`),
      onOK: () => {
        (a(o), r());
      },
      onCancel: () => {
        (s(Y(n, i)), r());
      },
      bOKDisabled: !c,
      children: (0, G.jsx)(`div`, {
        className: K,
        children: (0, G.jsx)(bn, { session: o, fnSetSession: s }),
      }),
    }),
  });
}
function vn(e) {
  let { group: t, fnSetGroup: n } = e,
    r = S();
  return (0, G.jsxs)(G.Fragment, {
    children: [
      (0, G.jsx)(O, {
        type: `text`,
        label: D(`#MeetSteam_edit_session_name`),
        value: T.Get(t.localized_session_title, r),
        onChange: (e) => {
          let i = { ...t };
          ((i.localized_session_title = T.Set(
            i.localized_session_title,
            r,
            e.currentTarget.value,
          )),
            n(i));
        },
      }),
      (0, G.jsx)(L, { children: D(`#MeetSteam_edit_session_desc`) }),
      (0, G.jsx)(`textarea`, {
        className: M(`DialogTextInputBase`, pn),
        value: T.Get(t.localized_session_description, r),
        rows: 5,
        onChange: (e) => {
          let i = { ...t };
          ((i.localized_session_description = T.Set(
            i.localized_session_description,
            r,
            e.currentTarget.value,
          )),
            n(i));
        },
      }),
      (0, G.jsx)(O, {
        type: `text`,
        label: `Intended Audience`,
        tooltip: `A short descriptions for whom then event is designed for to help partners self select`,
        value: T.Get(t.localized_intended_audience, r),
        onChange: (e) => {
          let i = { ...t };
          ((i.localized_intended_audience = T.Set(
            i.localized_intended_audience,
            r,
            e.currentTarget.value,
          )),
            n(i));
        },
      }),
      (0, G.jsxs)(L, {
        children: [
          `FAQ `,
          (0, G.jsx)(_t, {
            tooltip: `Optional FAQ section which appears in the pop-up display and hidden by default`,
          }),
        ],
      }),
      (0, G.jsx)(`textarea`, {
        className: M(`DialogTextInputBase`, pn),
        value: T.Get(t.localized_sesssion_faq, r),
        rows: 5,
        onChange: (e) => {
          let i = { ...t };
          ((i.localized_sesssion_faq = T.Set(
            i.localized_sesssion_faq,
            r,
            e.currentTarget.value,
          )),
            n(i));
        },
      }),
      (0, G.jsx)(A, {
        checked: t.ask_registration_question,
        onChange: (e) => {
          let r = { ...t };
          ((r.ask_registration_question = e), n(r));
        },
        label: `Ask partner to tell us what they want to learn from the sessions`,
      }),
      (0, G.jsx)(yn, { ...e }),
    ],
  });
}
function yn(e) {
  let { group: t, fnSetGroup: n } = e,
    [r, i] = (0, W.useState)(t.group_visibility_tokens?.length > 0);
  return r
    ? (0, G.jsxs)(G.Fragment, {
        children: [
          (0, G.jsx)(`div`, {
            children: `By default, all sessions are visibility to any partner wiht a list. We can limit visibility to users by adding tokens below. Multiple Meet Steam sections can be visible together if they share the same token. To make the tokens appears most friendly, we are limiting them to exactly 5 digits. Only one token can be set on the URL.`,
          }),
          t.group_visibility_tokens.map((e, r) =>
            (0, G.jsx)(
              O,
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
          (0, G.jsx)(Ue, {
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
            (0, G.jsx)(Ue, {
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
    : (0, G.jsx)(A, {
        checked: !1,
        onChange: i,
        label: `Change Visibility Options`,
      });
}
function bn(e) {
  let { session: n, fnSetSession: r } = e,
    [i, a, o, s, c, l] = t(() => [
      n.rtime_start,
      n.rtime_end,
      n.max_capacity,
      n.max_per_team,
      n.location_type,
      n.in_person_time_zone,
    ]),
    u = [];
  for (let e = 0; e < 4; ++e) u.push({ data: e, label: e });
  let d = Math.max(0, Math.floor((a - i) / 60)),
    f = Intl.DateTimeFormat().resolvedOptions().timeZone,
    p = c === `in_person` ? (l ?? `America/Los_Angeles`) : f;
  return (0, G.jsxs)(G.Fragment, {
    children: [
      (0, G.jsx)(Sn, {
        startTime: n.rtime_start,
        location_type: c,
        fnUpdateLocationAndTZ: (e, t) =>
          r({ ...n, location_type: e, in_person_time_zone: t }),
        in_person_time_zone: l,
      }),
      (0, G.jsx)(`br`, {}),
      (0, G.jsx)(te, {
        strDescription: D(`#MeetSteam_edit_start`),
        nEarliestTime: 0,
        fnGetTimeToUpdate: () => i,
        fnSetTimeToUpdate: (e) =>
          r({ ...n, rtime_start: e, rtime_end: e + j.PerMinute * d }),
        fnIsValidDateTime: () => !0,
        bShowTimeZone: !0,
      }),
      (0, G.jsx)(`br`, {}),
      (0, G.jsx)(O, {
        type: `number`,
        min: 0,
        label: D(`#MeetSteam_edit_duration`),
        onChange: (e) => {
          let t = Number.parseInt(e.currentTarget.value);
          r({ ...n, rtime_end: n.rtime_start + j.PerMinute * t });
        },
        value: d,
      }),
      (0, G.jsx)(xn, { rtime_start: i, rtime_end: a, sDisplayTimeZone: p }),
      (0, G.jsx)(`br`, {}),
      (0, G.jsx)(`br`, {}),
      (0, G.jsxs)(`div`, {
        className: fn,
        children: [
          (0, G.jsx)(O, {
            type: `number`,
            value: o,
            label: D(`#MeetSteam_edit_max_capacity`),
            min: 1,
            onChange: (e) =>
              r({ ...n, max_capacity: Number.parseInt(e.currentTarget.value) }),
          }),
          (0, G.jsx)(Xe, {
            controlled: !0,
            label: D(`#MeetSteam_edit_guest_count`),
            tooltip: D(`#MeetSteam_edit_guest_count_ttip`),
            rgOptions: u,
            selectedOption: s,
            onChange: (e) => r({ ...n, max_per_team: e.data }),
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
  return (0, G.jsxs)(G.Fragment, {
    children: [
      (0, G.jsxs)(`div`, {
        children: [
          D(`#MeetSteam_edit_displayed_start`),
          `: `,
          lt(a.unix() + o * 60, !1, a.format(`z`)),
          ` `,
        ],
      }),
      (0, G.jsxs)(`div`, {
        children: [
          D(`#MeetSteam_edit_displayed_end`),
          `: `,
          lt(c.unix() + l * 60, !1, c.format(`z`)),
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
    s = W.useMemo(
      () => o.reduce((e, t) => e.set(t.name, t.friendly_name), new Map()),
      [o],
    ),
    c = (e) => s.get(e) ?? e,
    u = W.useId(),
    d = W.useId();
  return (0, G.jsxs)(G.Fragment, {
    children: [
      (0, G.jsx)(`div`, {
        id: u,
        className: Je,
        children: D(`#MeetSteam_edit_date_display_title`),
      }),
      (0, G.jsx)(`div`, {
        id: d,
        className: Ke,
        children: D(`#MeetSteam_edit_date_display_desc`),
      }),
      (0, G.jsxs)(tt, {
        labelId: u,
        descriptionId: d,
        value: n,
        onChange: (e) => r(e, i),
        children: [
          (0, G.jsx)(Ie, {
            value: `in_person`,
            children: D(`#MeetSteam_edit_date_display_in_person`),
          }),
          (0, G.jsx)(Ie, {
            value: `virtual`,
            children: D(`#MeetSteam_edit_date_display_virtual`),
          }),
        ],
      }),
      n === `in_person` &&
        (0, G.jsx)(l._default, {
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
  let t = n({
    queryKey: [`timezone`, e],
    queryFn: async () => {
      let t = `${pt.COMMUNITY_BASE_URL}/eventadmin/ajaxgettimezones`,
        n = { reference_time: e };
      return (await mn.default.get(t, { params: n }))?.data.timezones;
    },
  });
  return t.isSuccess ? t.data : [];
}
function J(e, t) {
  if (e) {
    let e = g.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
      t = 0;
    do t = Math.floor(1e4 + Math.random() * 9e4);
    while (e && e.findIndex((e) => e.group_id == t) >= 0);
    return {
      group_id: t,
      localized_session_title: I([], 32, null),
      localized_session_description: I([], 32, null),
      localized_sesssion_faq: I([], 32, null),
      localized_intended_audience: I([], 32, null),
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
    : (w(
        !1,
        `HelperCreateOrCloneGroupSessionModel Expect Create or previous model`,
      ),
      null);
}
function Y(e, t) {
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
      rtime_start: r + j.PerDay,
      rtime_end: r + j.PerDay + j.PerHour,
      max_capacity: 100,
      max_per_team: 3,
    };
  }
  return t
    ? { ...t }
    : (w(
        !1,
        `HelperCreateOrCloneSessionInstanceModel Expect Create or previous model`,
      ),
      null);
}
function wn(e) {
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
function Tn(e) {
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
function En(e) {
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
function Dn(e, t, n) {
  e.dispatch(
    e.state.tr.insert(e.state.selection.to, t.create({ group_id: n })),
  );
}
function On(e) {
  let { focusView: n, removeNode: r, group_id: i } = e,
    a = C(),
    o = t(() =>
      a
        .GetEventModel()
        .jsondata.meet_steam_groups?.find((e) => e.group_id == i),
    ),
    [s, c, l] = N(),
    u = W.useCallback(() => {
      (n(), l());
    }, [n, l]),
    [d, f, p] = N(),
    m = W.useCallback(() => {
      (n(), p());
    }, [n, p]);
  return !o || a.GetClanAccountID() != v()
    ? (0, G.jsx)(`div`, {
        children: `Error: Cannot edit meet steam session group`,
      })
    : (0, G.jsxs)(`div`, {
        className: un,
        children: [
          (0, G.jsx)(kn, { groupData: o, focusView: n }),
          (0, G.jsxs)(`div`, {
            className: ln,
            children: [
              (0, G.jsx)(B, {
                onClick: c,
                tooltip: D(`#Button_Edit`),
                children: (0, G.jsx)(R, {}),
              }),
              (0, G.jsx)(B, {
                onClick: f,
                tooltip: D(`#Button_Delete`),
                children: (0, G.jsx)(F, {}),
              }),
              o.group_visibility_tokens?.length > 0 &&
                (0, G.jsx)(B, {
                  onClick: () => {},
                  tooltip: `Limited visibility to those with the appropriate URLs`,
                  children: (0, G.jsx)(st, {}),
                }),
              !!o.ask_registration_question &&
                (0, G.jsx)(B, {
                  onClick: () => {},
                  tooltip: `Will ask partner to provides questions for us for this session.`,
                  children: (0, G.jsx)(St, {}),
                }),
            ],
          }),
          !!s &&
            (0, G.jsx)(gn, {
              hideModal: u,
              groupInput: o,
              fnUpdateGroupSession: (e) => {
                let { groupIndex: t } = Tn(e.group_id),
                  n = g.GetEditModel();
                ((n.GetEventModel().jsondata.meet_steam_groups[t] = e),
                  n.SetDirty(_.description));
              },
            }),
          !!d &&
            (0, G.jsx)(E, {
              active: !0,
              children: (0, G.jsx)(k, {
                strTitle: D(`#Button_Delete`),
                strDescription: D(`#Dialog_AreYouSure`),
                onOK: () => {
                  let { groupIndex: e } = Tn(o.group_id),
                    t = g.GetEditModel(),
                    n = [...t.GetEventModel().jsondata.meet_steam_groups];
                  (n.splice(e, 1),
                    (t.GetEventModel().jsondata.meet_steam_groups = n),
                    t.SetDirty(_.description),
                    r());
                },
                closeModal: m,
              }),
            }),
        ],
      });
}
function kn(e) {
  let { groupData: n, focusView: r } = e,
    i = t(() => n.sessions || []),
    [a, o, s] = N(),
    c = W.useCallback(() => {
      (r(), s());
    }, [r, s]);
  return n
    ? (0, G.jsxs)(be, {
        groupData: n,
        children: [
          i.map((e, t) =>
            (0, G.jsx)(
              An,
              { focusView: r, sessionID: e.id, bShowOR: t + 1 < i.length },
              `timecol_` + n.group_id + `_` + e.id,
            ),
          ),
          (0, G.jsx)(B, {
            className: dn,
            onClick: o,
            tooltip: D(`#MeetSteam_add`),
            children: (0, G.jsx)(mt, {}),
          }),
          a &&
            (0, G.jsx)(_n, {
              bCreate: !0,
              hideModal: c,
              fnUpdateSession: (e) => {
                let t = g.GetEditModel(),
                  r = [...n.sessions, e];
                (r.sort((e, t) => e.rtime_start - t.rtime_start),
                  (n.sessions = r),
                  t.SetDirty(_.description));
              },
            }),
        ],
      })
    : null;
}
function An(e) {
  let { sessionID: n, bShowOR: r, focusView: i } = e,
    [a, o] = Ze(),
    s = t(() => {
      let { groupIndex: e, sessionIndex: t } = wn(n);
      return g.GetEditModel().GetEventModel().jsondata.meet_steam_groups[e]
        .sessions[t];
    }),
    [c, l, u] = N(),
    d = W.useCallback(() => {
      (i(), u());
    }, [i, u]),
    [f, p, m] = N(),
    h = W.useCallback(() => {
      (i(), m());
    }, [i, m]);
  return (0, G.jsxs)(G.Fragment, {
    children: [
      (0, G.jsxs)(`div`, {
        className: cn,
        ...o,
        children: [
          (0, G.jsx)(De, { sessionData: s }),
          !!a &&
            (0, G.jsxs)(`div`, {
              className: `F-Iu9ouJkU4-`,
              children: [
                (0, G.jsx)(B, {
                  onClick: l,
                  tooltip: D(`#Button_Edit`),
                  children: (0, G.jsx)(R, {}),
                }),
                (0, G.jsx)(B, {
                  onClick: p,
                  tooltip: D(`#Button_Delete`),
                  children: (0, G.jsx)(F, {}),
                }),
              ],
            }),
          !!c &&
            (0, G.jsx)(_n, {
              bCreate: !1,
              hideModal: d,
              sessionInput: s,
              fnUpdateSession: (e) => {
                let t = g.GetEditModel(),
                  { groupIndex: r, sessionIndex: i } = wn(n),
                  a = [
                    ...t.GetEventModel().jsondata.meet_steam_groups[r].sessions,
                  ];
                ((a[i] = e),
                  a.sort((e, t) => e.rtime_start - t.rtime_start),
                  (t.GetEventModel().jsondata.meet_steam_groups[r].sessions =
                    a),
                  t.SetDirty(_.description));
              },
            }),
          !!f &&
            (0, G.jsx)(E, {
              active: !0,
              children: (0, G.jsx)(k, {
                strTitle: D(`#Button_Delete`),
                strDescription: D(`#Dialog_AreYouSure`),
                onOK: () => {
                  let e = g.GetEditModel(),
                    { groupIndex: t, sessionIndex: r } = wn(n),
                    i = [
                      ...e.GetEventModel().jsondata.meet_steam_groups[t]
                        .sessions,
                    ];
                  (i.splice(r, 1),
                    i.sort((e, t) => e.rtime_start - t.rtime_start),
                    (e.GetEventModel().jsondata.meet_steam_groups[t].sessions =
                      i),
                    e.SetDirty(_.description));
                },
                closeModal: h,
              }),
            }),
        ],
      }),
      r && (0, G.jsx)(he, {}),
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
    s = W.useCallback(
      (e, t, s) =>
        !z(e) && (t && t(e.tr.insert(e.selection.to, jn(n, r, i, a, o))), !0),
      [n, r, i, a, o],
    );
  return n
    ? (0, G.jsx)(H, {
        tooltip: D(`#FormattingToolbar_Tables_InsertTable`),
        command: s,
        children: (0, G.jsx)(ze, {}),
      })
    : null;
}
function Nn(e) {
  let { schema: t, className: n } = e,
    { callbacks: r, view: i } = U(),
    [a, o] = W.useState(() => !!t.nodes.table && z(i.state));
  return (
    ct(
      r,
      W.useCallback((e) => o(!!t.nodes.table && z(e.state)), [t.nodes.table]),
    ),
    (0, G.jsx)(Ae, {
      visible: a,
      msAnimationDuration: 100,
      children: (0, G.jsx)(Qt, {
        className: n,
        children: (0, G.jsx)(Pn, { schema: t }),
      }),
    })
  );
}
function Pn(e) {
  let { schema: t } = e;
  return (0, G.jsxs)(G.Fragment, {
    children: [
      (0, G.jsx)(H, {
        tooltip: D(`#FormattingToolbar_Tables_AddRowBefore`),
        command: Nt,
        children: (0, G.jsx)(Ge, {}),
      }),
      (0, G.jsx)(H, {
        tooltip: D(`#FormattingToolbar_Tables_AddRowAfter`),
        command: jt,
        children: (0, G.jsx)(vt, {}),
      }),
      (0, G.jsx)(H, {
        tooltip: D(`#FormattingToolbar_Tables_DeleteRow`),
        command: wt,
        children: (0, G.jsx)(Be, {}),
      }),
      (0, G.jsx)(V, {}),
      (0, G.jsx)(H, {
        tooltip: D(`#FormattingToolbar_Tables_AddColumnBefore`),
        command: kt,
        children: (0, G.jsx)($e, {}),
      }),
      (0, G.jsx)(H, {
        tooltip: D(`#FormattingToolbar_Tables_AddColumnAfter`),
        command: Et,
        children: (0, G.jsx)(nt, {}),
      }),
      (0, G.jsx)(H, {
        tooltip: D(`#FormattingToolbar_Tables_DeleteColumn`),
        command: tn,
        children: (0, G.jsx)(et, {}),
      }),
      (0, G.jsx)(V, {}),
      (0, G.jsx)(H, {
        tooltip: D(`#FormattingToolbar_Tables_HeaderRow`),
        command: At,
        children: (0, G.jsx)(Ye, {}),
      }),
      (0, G.jsx)(H, {
        tooltip: D(`#FormattingToolbar_Tables_HeaderColumn`),
        command: Dt,
        children: (0, G.jsx)(ot, {}),
      }),
      (0, G.jsx)(H, {
        tooltip: D(`#FormattingToolbar_Tables_HeaderCell`),
        command: Lt,
        children: (0, G.jsx)(rt, {}),
      }),
      (0, G.jsx)(V, {}),
      (0, G.jsx)(H, {
        tooltip: D(`#FormattingToolbar_Tables_MergeCells`),
        command: Ot,
        children: (0, G.jsx)(He, {}),
      }),
      (0, G.jsx)(H, {
        tooltip: D(`#FormattingToolbar_Tables_SplitCells`),
        command: It,
        children: (0, G.jsx)(at, {}),
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
    let e = g.GetEditModel().GetEventModel().jsondata.meet_steam_schedules,
      t = 0;
    do t = Math.floor(1e4 + Math.random() * 9e4);
    while (e && e.findIndex((e) => e.schedule_id == t) >= 0);
    return { schedule_id: t, session_breaks: [] };
  }
  return t
    ? { ...t }
    : (w(
        !1,
        `HelperCreateOrCloneMeetSteamSchedule Expect Create or previous model`,
      ),
      null);
}
function zn(e) {
  let { hideModal: n, fnUpdateSession: r, inputScheduleModel: i } = e,
    a = Me(),
    o = C(),
    [s, c] = (0, W.useState)(() => Rn(!i, i)),
    [l, u, d] = t(() => [
      s.location_type,
      s.in_person_time_zone,
      o.GetEventModel().jsondata.meet_steam_groups || [],
    ]),
    f = (0, W.useMemo)(() => {
      let e = d.reduce((e, t) => e.concat(t.sessions), []);
      return e.length == 0 ? a : Math.min(...e.map((e) => e.rtime_start));
    }, [d, a]);
  return (0, G.jsx)(E, {
    active: !0,
    children: (0, G.jsx)(k, {
      strTitle: i
        ? `Update Meet Steam Schedule`
        : `Create Meet Steam Schedule View`,
      onOK: () => r(s),
      closeModal: () => {
        (c(Rn(!i, i)), n());
      },
      children: (0, G.jsxs)(`div`, {
        className: void 0,
        children: [
          (0, G.jsx)(Sn, {
            startTime: o.GetEventStartTime(),
            location_type: l,
            in_person_time_zone: u,
            fnUpdateLocationAndTZ: (e, t) =>
              c({ ...s, location_type: e, in_person_time_zone: t }),
          }),
          (0, G.jsx)(Bn, {
            inputScheduleModel: s,
            fnUpdateSession: (e) => c(e),
            rtBreakStartingTime: f,
          }),
        ],
      }),
    }),
  });
}
function Bn(e) {
  let { fnUpdateSession: n, inputScheduleModel: r, rtBreakStartingTime: i } = e,
    [a, o] = t(() => [
      r.session_breaks || [],
      r.in_person_time_zone || `America/Los_Angeles`,
    ]),
    s = (0, W.useCallback)(
      (e, t) => {
        let i = { ...r };
        ((i.session_breaks = i.session_breaks ? [...i.session_breaks] : []),
          t < i.session_breaks.length
            ? (i.session_breaks[t] = e)
            : i.session_breaks.push(e),
          n(i));
      },
      [n, r],
    );
  return (0, G.jsxs)(`div`, {
    children: [
      (0, G.jsx)(`div`, { children: `Scheduled Breaks` }),
      a
        .sort((e, t) => t.rtime_start - e.rtime_start)
        .map((e, t) =>
          (0, G.jsx)(
            Vn,
            {
              sDisplayTimeZone: o,
              index: t,
              breakSession: e,
              fnOnUpdate: (e) => s(e, t),
            },
            `breakedit` + e.break_id,
          ),
        ),
      (0, G.jsx)(Ue, {
        onClick: () => {
          let e = r.session_breaks ? [...r.session_breaks] : [],
            t = Math.floor(1 + Math.random() * 1e5);
          for (; e.findIndex((e) => e.break_id == t) >= 0;)
            t = Math.floor(1 + Math.random() * 1e5);
          s(
            {
              break_id: t,
              localized_break_description: I([], 32, null),
              rtime_start: i,
              rtime_end: i + j.PerHour,
            },
            r.session_breaks?.length || 0,
          );
        },
        children: `+ Add Break`,
      }),
    ],
  });
}
function Vn(e) {
  let { breakSession: n, fnOnUpdate: r, index: i, sDisplayTimeZone: a } = e,
    o = S(),
    [s, c, l, u] = t(() => [
      n.rtime_start,
      n.rtime_end,
      n.localized_break_description[o] || ``,
      Math.max(0, Math.floor((n.rtime_end - n.rtime_start) / 60)),
    ]);
  return (0, G.jsxs)(`div`, {
    children: [
      (0, G.jsxs)(`div`, { children: [`Break # `, i + 1] }),
      (0, G.jsx)(`br`, {}),
      (0, G.jsx)(te, {
        strDescription: `Break Start Time`,
        nEarliestTime: 0,
        fnGetTimeToUpdate: () => s,
        fnSetTimeToUpdate: (e) =>
          r({ ...n, rtime_start: e, rtime_end: e + j.PerMinute * u }),
        fnIsValidDateTime: () => !0,
        bShowTimeZone: !0,
      }),
      (0, G.jsx)(`br`, {}),
      (0, G.jsx)(O, {
        type: `number`,
        min: 0,
        label: `Break duration in minutes`,
        onChange: (e) => {
          let t = Number.parseInt(e.currentTarget.value);
          r({ ...n, rtime_end: n.rtime_start + j.PerMinute * t });
        },
        value: u,
      }),
      (0, G.jsx)(O, {
        type: `text`,
        label: `Break Description`,
        value: l,
        onChange: (e) => {
          let t = { ...n };
          ((t.localized_break_description[o] = e.currentTarget.value), r(t));
        },
      }),
      (0, G.jsx)(xn, { rtime_start: s, rtime_end: c, sDisplayTimeZone: a }),
    ],
  });
}
function Hn(e) {
  let { focusView: n, removeNode: r, schedule_id: i } = e,
    a = C(),
    o = t(() =>
      a
        .GetEventModel()
        .jsondata.meet_steam_schedules?.find((e) => e.schedule_id == i),
    ),
    [s, c, l] = N(),
    u = W.useCallback(() => {
      (n(), l());
    }, [n, l]),
    [d, f, p] = N(),
    m = W.useCallback(() => {
      (n(), p());
    }, [n, p]);
  return !o || a.GetClanAccountID() != v()
    ? (0, G.jsx)(`div`, {
        children: `Error: Cannot edit meet steam schedule view`,
      })
    : (0, G.jsxs)(`div`, {
        className: Fn,
        children: [
          (0, G.jsx)(_e, { eventModel: a.GetEventModel(), scheduleData: o }),
          (0, G.jsxs)(`div`, {
            className: In,
            children: [
              (0, G.jsx)(B, {
                onClick: c,
                tooltip: D(`#Button_Edit`),
                children: (0, G.jsx)(R, {}),
              }),
              (0, G.jsx)(B, {
                onClick: f,
                tooltip: D(`#Button_Delete`),
                children: (0, G.jsx)(F, {}),
              }),
            ],
          }),
          !!s &&
            (0, G.jsx)(zn, {
              hideModal: u,
              inputScheduleModel: o,
              fnUpdateSession: (e) => {
                let { scheduleIndex: t } = En(e.schedule_id);
                ((a.GetEventModel().jsondata.meet_steam_schedules[t] = e),
                  a.SetDirty(_.description));
              },
            }),
          !!d &&
            (0, G.jsx)(E, {
              active: !0,
              children: (0, G.jsx)(k, {
                strTitle: D(`#Button_Delete`),
                strDescription: D(`#Dialog_AreYouSure`),
                onOK: () => {
                  let { scheduleIndex: e } = En(o.schedule_id),
                    t = g.GetEditModel(),
                    n = [...t.GetEventModel().jsondata.meet_steam_schedules];
                  (n.splice(e, 1),
                    (t.GetEventModel().jsondata.meet_steam_schedules = n),
                    t.SetDirty(_.description),
                    r());
                },
                closeModal: m,
              }),
            }),
        ],
      });
}
function Un(e) {
  let { schema: t } = e,
    { callbacks: n, view: r } = U(),
    [i, o] = W.useState(!1),
    s = W.useCallback(
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
    c = W.useCallback(
      (e) => {
        o(!0);
        let t = Ve((0, G.jsx)(Wn, { OnSelected: s }), e, {
          bOverlapHorizontal: !0,
        });
        a(
          () => !t.visible,
          () => o(!1),
        );
      },
      [s],
    );
  return (0, G.jsx)(B, {
    tooltip: D(`#Editor_Emoticon`),
    onClick: c,
    toggled: i,
    children: (0, G.jsx)(qe, {}),
  });
}
function Wn(e) {
  let t = yt();
  return (P(t), (0, G.jsx)(pe, { emoticonStore: t, OnSelected: e.OnSelected }));
}
var Gn = `KJ1XyPiGQj0-`,
  X = `fiKe4PCXweM-`,
  Kn = `yuw8NnJmdB8-`;
function qn(e) {
  let { hideModal: t, fnUpdateSession: n, clanAccountID: r } = e,
    [i, a] = (0, W.useState)(() => $(!0, null));
  return (0, G.jsx)(E, {
    active: !0,
    children: (0, G.jsx)(k, {
      strTitle: D(`#UserPolls_Create_title`),
      onOK: () => n(i),
      closeModal: () => {
        (a($(!0, null)), t());
      },
      children: (0, G.jsx)(`div`, {
        className: Gn,
        children: (0, G.jsx)(Xn, {
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
    [a, o] = (0, W.useState)(() => $(!1, n));
  return (0, G.jsx)(E, {
    active: !0,
    children: (0, G.jsx)(k, {
      strTitle: D(`#UserPolls_Edit_title`),
      onOK: () => {
        i(a);
      },
      onCancel: () => {
        o($(!1, n));
      },
      closeModal: t,
      children: (0, G.jsx)(`div`, {
        className: Gn,
        children: (0, G.jsx)(Xn, {
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
      return D(`#UserPolls_Visibility_None`);
    case b.k_EPollResult_Visible_After_End:
      return D(`#UserPolls_Visibility_End`);
    case b.k_EPollResult_Visible_After_Vote:
      return D(`#UserPolls_Visibility_Voter`);
    case b.k_EPollResult_Visible_After_Vote_Or_End:
      return D(`#UserPolls_Visibility_Voter_or_End`);
    case b.k_EPollResult_Visible_On_Demand:
      return D(`#UserPolls_Visibility_OnDemand`);
  }
}
function Xn(e) {
  let { userPollDef: n, fnSetDef: r } = e,
    i = S(),
    [a] = t(() => [n.results_visibility_settings]),
    o = Object.values(b).map((e) => ({ data: e, label: Yn(e) }));
  return (0, G.jsxs)(G.Fragment, {
    children: [
      (0, G.jsx)(O, {
        type: `text`,
        label: D(`#UserPolls_Description`),
        value: T.Get(n.localized_poll_description, i),
        onChange: (e) => {
          let t = { ...n };
          ((t.localized_poll_description = T.Set(
            t.localized_poll_description,
            i,
            e.currentTarget.value,
          )),
            r(t));
        },
      }),
      (0, G.jsx)($n, { ...e }),
      (0, G.jsx)(Qn, { ...e }),
      (0, G.jsx)(L, { children: D(`#UserPolls_Visibility`) }),
      (0, G.jsx)(`div`, {
        className: X,
        children: (0, G.jsx)(Xe, {
          strDropDownClassName: xt,
          rgOptions: o,
          selectedOption: a,
          onChange: (e) => {
            e.data != n.results_visibility_settings &&
              r({ ...n, results_visibility_settings: e.data });
          },
          bDisableMouseOverlay: !0,
          contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
        }),
      }),
      (0, G.jsx)(Zn, { ...e }),
    ],
  });
}
function Zn(e) {
  let { clanAccountID: n, userPollDef: r, fnSetDef: i } = e,
    a = C(),
    o = Se(a.GetClanSteamID()),
    [s] = t(() => [r.user_poll_background]),
    c = (0, W.useCallback)(
      (e, t, n, a, o) => {
        (w(n != null && n >= 0 && n < 32, `Unexpected value for elang: ` + n),
          w(o === `user_poll_background`, `Unexpected artwork type ` + o));
        let s = u(e, t);
        s.image && i({ ...r, user_poll_background: s.image });
      },
      [i, r],
    );
  return (0, G.jsxs)(G.Fragment, {
    children: [
      (0, G.jsx)(L, { children: D(`#UserPolls_BackgroundImage`) }),
      (0, G.jsxs)(`div`, {
        className: X,
        children: [
          (0, G.jsx)(`p`, { children: D(`#UserPolls_BackgroundImage_desc`) }),
          (0, G.jsx)(le, {
            rgRealmList: a.GetIncludedRealmList(),
            rgSupportArtwork: ve,
            strUploadAjaxURL: o,
            fnOnUploadSuccess: c,
            elOverrideDragAndDropText: D(
              `#Template_Section_MediaUpdate_Static_Dnd`,
            ),
            bTwoPhaseUpload: !0,
            bDirectTempStorageUpload: !0,
          }),
          !!s && (0, G.jsx)(`img`, { src: ue(n, s) }),
        ],
      }),
    ],
  });
}
function Z(e) {
  switch (e) {
    case x.k_EPollVoter_AnyUser:
      return D(`#UserPolls_Voters_Anyone`);
    case x.k_EPollVoter_UserGameInLibrary:
      return D(`#UserPolls_Voters_Owners`);
    case x.k_EPollVoter_MinPlayTime:
      return D(`#UserPolls_Voters_Players`);
    case x.k_EPollVoter_MemberOfGroup:
      return D(`#UserPolls_Voters_Members`);
  }
}
function Qn(e) {
  let { clanAccountID: n, userPollDef: r, fnSetDef: i } = e,
    [a, o] = de(n),
    [s, c] = t(() => [r.voter_min_playtime_seconds, r.voter_eligibility]),
    l = (0, W.useMemo)(() => {
      let e = [
        { label: Z(x.k_EPollVoter_AnyUser), data: x.k_EPollVoter_AnyUser },
      ];
      return (
        o && o.is_ogg && n != 4145017
          ? (e.push({
              label: Z(x.k_EPollVoter_UserGameInLibrary),
              data: x.k_EPollVoter_UserGameInLibrary,
            }),
            e.push({
              label: Z(x.k_EPollVoter_MinPlayTime),
              data: x.k_EPollVoter_MinPlayTime,
            }))
          : o &&
            (!o.is_ogg || n == 4145017) &&
            e.push({
              label: Z(x.k_EPollVoter_MemberOfGroup),
              data: x.k_EPollVoter_MemberOfGroup,
            }),
        e
      );
    }, [n, o]);
  return (0, G.jsxs)(G.Fragment, {
    children: [
      (0, G.jsx)(L, { children: D(`#UserPolls_Voters`) }),
      (0, G.jsxs)(`div`, {
        className: X,
        children: [
          (0, G.jsx)(Xe, {
            strDropDownClassName: xt,
            rgOptions: l,
            selectedOption: c,
            onChange: (e) => {
              if (e.data != r.voter_eligibility) {
                let t = { ...r, voter_eligibility: e.data };
                (e.data == x.k_EPollVoter_MinPlayTime &&
                  (t.voter_min_playtime_seconds = 5 * tr),
                  i(t));
              }
            },
            bDisableMouseOverlay: !0,
            contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
          }),
          c == x.k_EPollVoter_MinPlayTime &&
            (0, G.jsx)(`div`, {
              className: `_1iRX-KtzqgY-`,
              children: (0, G.jsx)(O, {
                type: `number`,
                label: D(`#UserPolls_MinPlayTime`),
                value: s / tr,
                min: 5,
                onChange: (e) => {
                  let t = (Number.parseInt(e?.currentTarget?.value) ?? 5) * tr;
                  r.voter_min_playtime_seconds != t &&
                    i({ ...r, voter_min_playtime_seconds: t });
                },
              }),
            }),
        ],
      }),
    ],
  });
}
function $n(e) {
  let { userPollDef: n, fnSetDef: r } = e,
    [i, a] = t(() => [n.poll_end_time, n.poll_end_days_since_start]);
  return (0, G.jsxs)(G.Fragment, {
    children: [
      (0, G.jsx)(L, { children: D(`#UserPolls_Starts`) }),
      (0, G.jsxs)(`div`, {
        className: X,
        children: [
          (0, G.jsxs)(`div`, {
            className: M(it, Ct),
            children: [
              (0, G.jsx)(`input`, {
                type: `radio`,
                name: `StartDateRadio`,
                id: `UserPollDialog_Days`,
                checked: !!a,
                onChange: () => {
                  n.poll_end_days_since_start ||
                    r({
                      ...n,
                      poll_end_time: void 0,
                      poll_end_days_since_start: er * Q,
                    });
                },
              }),
              (0, G.jsx)(`label`, {
                htmlFor: `UserPollDialog_Days`,
                children: (0, G.jsx)(`span`, {
                  children: D(`#UserPolls_EndTime_In_Days`),
                }),
              }),
            ],
          }),
          !!a &&
            (0, G.jsx)(`div`, {
              className: `_1iRX-KtzqgY-`,
              children: (0, G.jsx)(O, {
                type: `number`,
                value: a / Q,
                min: 1,
                onChange: (e) => {
                  let t = (Number.parseInt(e?.currentTarget?.value) ?? 1) * Q;
                  n.poll_end_days_since_start != t &&
                    r({
                      ...n,
                      poll_end_time: void 0,
                      poll_end_days_since_start: t,
                    });
                },
              }),
            }),
          (0, G.jsxs)(`div`, {
            className: M(it, Ct),
            children: [
              (0, G.jsx)(`input`, {
                type: `radio`,
                name: `StartDateRadio`,
                id: `UserPollDialog_SpecificTime`,
                checked: !!i,
                onChange: () => {
                  n.poll_end_time ||
                    r({
                      ...n,
                      poll_end_days_since_start: void 0,
                      poll_end_time: Math.floor(Date.now() / 1e3) + er * Q,
                    });
                },
              }),
              (0, G.jsx)(`label`, {
                htmlFor: `UserPollDialog_SpecificTime`,
                children: (0, G.jsx)(`span`, {
                  children: D(`#UserPolls_EndTime_Specific`),
                }),
              }),
            ],
          }),
          !!i &&
            (0, G.jsxs)(`div`, {
              className: M(`_1iRX-KtzqgY-`, `befdhdeb-HY-`),
              children: [
                (0, G.jsx)(te, {
                  strDescription: ``,
                  nEarliestTime: Math.floor(Date.now() / 1e3) + 3600,
                  fnGetTimeToUpdate: () => i,
                  fnSetTimeToUpdate: (e) => {
                    n.poll_end_time != e &&
                      r({
                        ...n,
                        poll_end_days_since_start: void 0,
                        poll_end_time: e,
                      });
                  },
                  fnIsValidDateTime: () =>
                    i > Math.floor(Date.now() / 1e3) + 3600,
                }),
                (0, G.jsx)(`span`, { children: D(`#UserPolls_EndTime_Zone`) }),
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
    let e = g.GetEditModel().GetEventModel().jsondata.user_polls || [],
      t = 0;
    do t = Math.floor(1e4 + Math.random() * 9e4);
    while (e && e.findIndex((e) => e.poll_id == t) >= 0);
    return {
      poll_id: t,
      options: [],
      localized_poll_description: I([], 32, null),
      poll_end_days_since_start: er * Q,
      poll_end_time: void 0,
      results_visibility_settings: b.k_EPollResult_Visible_On_Demand,
      voter_eligibility: x.k_EPollVoter_AnyUser,
    };
  }
  return t
    ? { ...t, localized_poll_description: [...t.localized_poll_description] }
    : (w(
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
    [a, o] = (0, W.useState)(() => rr(t, r)),
    s = S();
  return (0, G.jsx)(E, {
    active: !0,
    children: (0, G.jsx)(k, {
      strTitle: D(t ? `#UserPolls_Option_Create` : `#UserPolls_Option_Edit`),
      onOK: () => {
        (i(a), n());
      },
      onCancel: () => {
        (o(rr(t, r)), n());
      },
      children: (0, G.jsx)(`div`, {
        className: Gn,
        children: (0, G.jsx)(O, {
          type: `text`,
          label: D(`#UserPolls_Option_Title`),
          value: T.Get(a.localized_option, s),
          onChange: (e) => {
            let t = { ...a };
            ((t.localized_option = [...t.localized_option]),
              (t.localized_option = T.Set(
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
    let e = g
        .GetEditModel()
        .GetEventModel()
        .jsondata.user_polls?.reduce((e, t) => e.concat(t.options), []),
      t = 0;
    do t = Math.floor(1e4 + Math.random() * 9e4);
    while (e && e.findIndex((e) => e.option_id == t) >= 0);
    return { option_id: t, localized_option: I([], 32, null) };
  }
  return t
    ? { ...t }
    : (w(
        !1,
        `HelperCreateOrClonePollOptionModel Expect Create or previous model`,
      ),
      null);
}
function ir(e) {
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
  let { focusView: n, removeNode: r, poll_id: i } = e,
    a = C(),
    o = t(() =>
      a.GetEventModel().jsondata.user_polls?.find((e) => e.poll_id == i),
    ),
    [s, c, l] = N(),
    u = W.useCallback(() => {
      (n(), l());
    }, [n, l]),
    [d, f, p] = N(),
    m = W.useCallback(() => {
      (n(), p());
    }, [n, p]);
  return o
    ? (0, G.jsxs)(`div`, {
        className: un,
        children: [
          (0, G.jsx)(cr, { userPollDef: o, focusView: n }),
          (0, G.jsxs)(`div`, {
            className: ln,
            children: [
              (0, G.jsx)(B, {
                onClick: c,
                tooltip: D(`#Button_Edit`),
                children: (0, G.jsx)(R, {}),
              }),
              (0, G.jsx)(B, {
                onClick: f,
                tooltip: D(`#Button_Delete`),
                children: (0, G.jsx)(F, {}),
              }),
              (0, G.jsx)(B, {
                onClick: () => {},
                tooltip: Yn(o.results_visibility_settings),
                children: (0, G.jsx)(st, {}),
              }),
              (0, G.jsx)(B, {
                onClick: () => {},
                tooltip: Z(o.voter_eligibility),
                children: (0, G.jsx)(We, {}),
              }),
            ],
          }),
          !!s &&
            (0, G.jsx)(Jn, {
              hideModal: u,
              userPollDef: o,
              clanAccountID: a.GetClanAccountID(),
              fnUpdateUserPollDef: (e) => {
                let { pollIndex: t } = ar(e.poll_id),
                  n = g.GetEditModel();
                ((n.GetEventModel().jsondata.user_polls[t] = e),
                  n.SetDirty(_.description));
              },
            }),
          !!d &&
            (0, G.jsx)(E, {
              active: !0,
              children: (0, G.jsx)(k, {
                strTitle: D(`#Button_Delete`),
                strDescription: D(`#Dialog_AreYouSure`),
                onOK: () => {
                  let { pollIndex: e } = ar(o.poll_id),
                    t = g.GetEditModel(),
                    n = [...t.GetEventModel().jsondata.user_polls];
                  (n.splice(e, 1),
                    (t.GetEventModel().jsondata.user_polls = n),
                    t.SetDirty(_.description),
                    r());
                },
                closeModal: m,
              }),
            }),
        ],
      })
    : (0, G.jsx)(`div`, {
        className: Fe,
        children: D(`#UserPolls_Editor_FailToFindModel`, i),
      });
}
function cr(e) {
  let { userPollDef: n, focusView: r } = e,
    [i, a] = t(() => [n.options || [], n.randomize_option_order]),
    o = C(),
    s = S(),
    [c, l, u] = N(),
    d = W.useCallback(() => {
      (r(), u());
    }, [r, u]),
    [f, p, m] = N(),
    h = W.useCallback(() => {
      (r(), m());
    }, [r, m]);
  return n
    ? (0, G.jsxs)(ke, {
        userPollDef: n,
        eventModel: o.GetEventModel(),
        lang: s,
        children: [
          i.map((e) =>
            (0, G.jsx)(
              ur,
              { focusView: r, optionID: e.option_id },
              `polloption` + n.poll_id + `_` + e.option_id,
            ),
          ),
          (0, G.jsxs)(`div`, {
            className: Kn,
            children: [
              (0, G.jsx)(bt, {
                className: ``,
                onClick: l,
                children: D(`#UserPolls_Option_Add`),
              }),
              (0, G.jsx)(bt, {
                className: ``,
                onClick: p,
                children: D(`#UserPolls_Option_Reorder`),
              }),
            ],
          }),
          c &&
            (0, G.jsx)(nr, {
              bCreate: !0,
              hideModal: d,
              fnUpdatePollOption: (e) => {
                let t = g.GetEditModel();
                ((n.options ||= []),
                  n.options.push(e),
                  t.SetDirty(_.description));
              },
            }),
          f &&
            (0, G.jsx)(lr, {
              hideModal: h,
              options: i,
              bRandomize: a,
              fnUpdateOptions: (e, t) => {
                ((n.randomize_option_order = t), (n.options = e));
              },
            }),
        ],
      })
    : null;
}
function lr(e) {
  let { options: t, bRandomize: n, fnUpdateOptions: r, hideModal: i } = e,
    a = S(),
    [o, s] = (0, W.useState)(n),
    [c, l] = (0, W.useState)(t);
  return (0, G.jsx)(E, {
    active: !0,
    children: (0, G.jsxs)(k, {
      strTitle: D(`#UserPolls_Option_Reorder`),
      strDescription: D(`#UserPolls_Option_Reorder_desc`),
      onCancel: () => {
        (s(n), l(t));
      },
      onOK: () => {
        r([...c], o);
      },
      closeModal: i,
      children: [
        (0, G.jsx)(A, {
          label: D(`#UserPolls_Option_Randomize`),
          checked: o,
          onChange: s,
        }),
        (0, G.jsx)(ee, {
          items: c,
          render: (e) =>
            (0, G.jsx)(`div`, {
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
  let { optionID: n, focusView: r } = e,
    [i, a] = Ze(),
    o = t(() => {
      let { optionIndex: e, pollIndex: t } = ir(n);
      return g.GetEditModel().GetEventModel().jsondata.user_polls[t].options[e];
    }),
    s = S(),
    [c, l, u] = N(),
    d = W.useCallback(() => {
      (r(), u());
    }, [r, u]),
    [f, p, m] = N(),
    h = W.useCallback(() => {
      (r(), m());
    }, [r, m]);
  return (0, G.jsxs)(`div`, {
    className: cn,
    ...a,
    children: [
      (0, G.jsx)(xe, { pollOptionDef: o, lang: s }),
      !!i &&
        (0, G.jsxs)(`div`, {
          className: `F-Iu9ouJkU4-`,
          children: [
            (0, G.jsx)(B, {
              onClick: l,
              tooltip: D(`#Button_Edit`),
              children: (0, G.jsx)(R, {}),
            }),
            (0, G.jsx)(B, {
              onClick: p,
              tooltip: D(`#Button_Delete`),
              children: (0, G.jsx)(F, {}),
            }),
          ],
        }),
      !!c &&
        (0, G.jsx)(nr, {
          bCreate: !1,
          hideModal: d,
          pollOptionsInput: o,
          fnUpdatePollOption: (e) => {
            let t = g.GetEditModel(),
              { optionIndex: r, pollIndex: i } = ir(n),
              a = [...t.GetEventModel().jsondata.user_polls[i].options];
            ((a[r] = e),
              (t.GetEventModel().jsondata.user_polls[i].options = a),
              t.SetDirty(_.description));
          },
        }),
      !!f &&
        (0, G.jsx)(E, {
          active: !0,
          children: (0, G.jsx)(k, {
            strTitle: D(`#Button_Delete`),
            strDescription: D(`#Dialog_AreYouSure`),
            onOK: () => {
              let e = g.GetEditModel(),
                { optionIndex: t, pollIndex: r } = ir(n),
                i = [...e.GetEventModel().jsondata.user_polls[r].options];
              (i.splice(t, 1),
                (e.GetEventModel().jsondata.user_polls[r].options = i),
                e.SetDirty(_.description));
            },
            closeModal: h,
          }),
        }),
    ],
  });
}
var dr = W.memo(function (e) {
  let {
    view: t,
    schema: n,
    refUpdateToolbar: r,
    className: i,
    clanSteamID: a,
    bSpellcheckEnabled: o,
    setSpellcheckEnabled: s,
  } = e;
  return (0, G.jsx)(Vt, {
    refUpdateToolbar: r,
    view: t,
    children: (0, G.jsxs)(`div`, {
      className: e.className,
      children: [
        (0, G.jsxs)(Qt, {
          className: e.className,
          children: [
            (0, G.jsx)(Ut, {}),
            (0, G.jsx)(V, {}),
            (0, G.jsx)(Jt, { schema: n }),
            (0, G.jsx)(V, {}),
            n.marks.link && (0, G.jsx)(fr, { schema: n }),
            (0, G.jsx)(V, {}),
            (0, G.jsx)(Yt, { schema: n }),
            (0, G.jsx)(Xt, { schema: n, levels: 3 }),
            (0, G.jsx)(V, {}),
            (0, G.jsx)(Un, { schema: n }),
            (0, G.jsx)(mr, { schema: n, clanSteamID: a }),
            (0, G.jsx)(Mn, { schema: n }),
            (0, G.jsx)(Ht, { schema: n, showIndentButtonsAsNeeded: !0 }),
            (0, G.jsx)(Wt, {}),
            s &&
              (0, G.jsx)(Zt, {
                bSpellcheckEnabled: o,
                setSpellcheckEnabled: s,
              }),
            n.nodes.meetsteamsessiongroup && (0, G.jsx)(gr, { schema: n }),
            n.nodes.meetsteamscheduleview && (0, G.jsx)(_r, { schema: n }),
            n.nodes.userpolls && dt.is_support && (0, G.jsx)(pr, { schema: n }),
          ],
        }),
        (0, G.jsx)(Nn, { className: e.className, schema: n }),
      ],
    }),
  });
});
function fr(e) {
  let t = oe();
  return (0, G.jsx)(Gt, { schema: e.schema, addtlAttrs: t });
}
function pr(e) {
  let { schema: t } = e,
    { callbacks: n, view: r } = U(),
    i = C(),
    [a, o, s] = N(),
    c = W.useCallback(() => {
      (s(), r.focus());
    }, [s, r]),
    l = W.useCallback(
      (e) => {
        (i.GetEventModel().jsondata.user_polls ||
          (i.GetEventModel().jsondata.user_polls = []),
          i.GetEventModel().jsondata.user_polls.push({ ...e }),
          or(r, t.nodes.userpolls, e.poll_id),
          c());
      },
      [t, r, c, i],
    );
  return (0, G.jsxs)(G.Fragment, {
    children: [
      a &&
        (0, G.jsx)(qn, {
          hideModal: c,
          clanAccountID: i.GetClanAccountID(),
          fnUpdateSession: l,
        }),
      (0, G.jsx)(B, {
        tooltip: D(`#UserPolls_Toolbar_ttip`),
        onClick: o,
        toggled: a,
        children: (0, G.jsx)(Qe, {}),
      }),
    ],
  });
}
function mr(e) {
  let { schema: t, clanSteamID: n } = e,
    { callbacks: r, view: i } = U(),
    { image: a, video: o, previewyoutube: s } = t.nodes,
    c = W.useCallback(
      (e, t) => {
        i.dispatch(i.state.tr.insert(i.state.selection.to, t.create(e)));
      },
      [i],
    ),
    l = W.useCallback(() => i.focus(), [i]),
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
  return (0, G.jsxs)(G.Fragment, {
    children: [
      f,
      a &&
        (0, G.jsx)(B, {
          tooltip: D(`#EventEditor_InsertImage_Title`),
          onClick: u,
          toggled: p == `image`,
          children: (0, G.jsx)(ut, {}),
        }),
      o &&
        (0, G.jsx)(B, {
          tooltip: D(`#EventEditor_EditVideo_Title`),
          onClick: d,
          toggled: p == `video`,
          children: (0, G.jsx)(Re, {}),
        }),
      s && (0, G.jsx)(hr, { schema: t }),
      (a || o || s) && (0, G.jsx)(V, {}),
    ],
  });
}
function hr(e) {
  let { schema: t } = e,
    { callbacks: n, view: r } = U(),
    [i, a, o] = N(),
    s = W.useCallback(() => {
      (o(), r.focus());
    }, [o, r]),
    c = W.useCallback(
      (e, n) => {
        (an(r, t.nodes.previewyoutube, e, n), s());
      },
      [t, r, s],
    );
  return (0, G.jsxs)(G.Fragment, {
    children: [
      i && (0, G.jsx)(sn, { hideModal: s, onSave: c }),
      (0, G.jsx)(B, {
        tooltip: D(`#EventEditor_InsertYouTube`),
        onClick: a,
        toggled: i,
        children: (0, G.jsx)(`img`, { src: Pe }),
      }),
    ],
  });
}
function gr(e) {
  let { schema: t } = e,
    { callbacks: n, view: r } = U(),
    i = C(),
    [a, o, s] = N(),
    c = W.useCallback(() => {
      (s(), r.focus());
    }, [s, r]),
    l = W.useCallback(
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
    return (0, G.jsxs)(G.Fragment, {
      children: [
        a && (0, G.jsx)(hn, { hideModal: c, fnUpdateSession: l }),
        (0, G.jsx)(B, {
          tooltip: D(`#MeetSteam_add_group_ttip`),
          onClick: o,
          toggled: a,
          children: (0, G.jsx)(`img`, { src: Pe }),
        }),
      ],
    });
}
function _r(e) {
  let { schema: t } = e,
    { callbacks: n, view: r } = U(),
    i = C(),
    [a, o, s] = N(),
    c = W.useCallback(() => {
      (s(), r.focus());
    }, [s, r]),
    l = W.useCallback(
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
    return (0, G.jsxs)(G.Fragment, {
      children: [
        a &&
          (0, G.jsx)(zn, {
            hideModal: c,
            inputScheduleModel: null,
            fnUpdateSession: l,
          }),
        (0, G.jsx)(B, {
          tooltip: D(`#MeetSteam_add_schedule_ttip`),
          onClick: o,
          toggled: a,
          children: (0, G.jsx)(`img`, { src: Pe }),
        }),
      ],
    });
}
function vr(e) {
  let { schema: t, emoticonStore: n } = e,
    r = t.nodes.emoticon;
  (P(n),
    Mt(
      W.useMemo(() => Rt({ rules: [br(/:([a-zA-Z0-9_]+):$/, r, n)] }), [r, n]),
    ));
  let i = W.useMemo(
    () => [
      {
        type: r,
        component: yr,
        readProps: (e) => ({ emoticonStore: n, emoticon: e.textContent }),
      },
    ],
    [r, n],
  );
  return (0, G.jsx)(Kt, { specs: i });
}
function yr(e) {
  let { selected: t, emoticonStore: n, emoticon: r } = e;
  return (
    P(n),
    n.BHasEmoticon(r)
      ? (0, G.jsx)(`span`, {
          style: t
            ? { background: `#54a5d4`, filter: `brightness(1.2)` }
            : void 0,
          children: (0, G.jsx)(me, { emoticon: r }),
        })
      : `:${r}:`
  );
}
function br(e, t, n) {
  return new zt(e, (e, r, i, a) => {
    let o = r[1];
    if (!n.BHasEmoticon(o)) return null;
    let s = t.create(null, e.schema.text(o));
    return e.tr.replaceWith(i, a, s);
  });
}
var xr = i(function (e) {
  let { editModel: t } = e,
    n = t.GetEventModel().loadedAllLanguages,
    r = t.GetCurEditLanguage();
  return n
    ? (0, G.jsx)(Le, {
        children: (0, G.jsx)(Cr, { ...e, eCurrentEditLanguage: r }),
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
    new Tt(e, i, (e) => t.SetDescription(n, e), {
      parser: {
        fnProcessText: (t) => Pt(e.pm_schema, t, e.pm_schema.marks.link, r),
      },
    })
  );
}
var Cr = W.memo(function (e) {
  let {
      editModel: t,
      refOnInsertImage: n,
      limitBBCode: r,
      eCurrentEditLanguage: i,
    } = e,
    [a, o] = W.useState(),
    s = W.useMemo(() => ce(r), [r]),
    [c, l] = W.useState(),
    u = wr(t.GetClanSteamID(), s);
  W.useEffect(() => {
    l(Sr(s, t, i, u));
  }, [s, u, t, i]);
  let d = W.useRef(void 0);
  Ft(c, { msAutosaveTimeout: 1e3 });
  let { nodes: f, marks: p } = s.pm_schema;
  return (
    h(n, f.image, f.video, p.link, a),
    (0, G.jsx)(se, {
      clanSteamID: t.GetClanSteamID(),
      imageNode: f.image,
      videoNode: f.video,
      children: (0, G.jsxs)(`div`, {
        className: Ce,
        children: [
          (0, G.jsx)(dr, {
            view: a,
            schema: s.pm_schema,
            refUpdateToolbar: d,
            className: Oe,
            clanSteamID: t.GetClanSteamID(),
          }),
          (0, G.jsx)(`div`, {
            className: ge,
            children: (0, G.jsx)(qt, {
              pmState: c,
              className: M(ye, we),
              refOnUpdate: d,
              refView: o,
              panelProps: { onBlur: () => c.CommitChanges() },
              children: (0, G.jsx)(Tr, {
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
  return W.useCallback(
    (...e) => {
      let t = `default`;
      return (r && (t = r(...e)), t == "default" && i && (t = i(...e)), t);
    },
    [r, i],
  );
}
var Tr = W.memo(function (e) {
  let { eventSchemaConfig: t, editModel: n, onURLPasted: r } = e,
    i = yt(),
    { marks: a, nodes: o } = t.pm_schema;
  return (0, G.jsxs)(G.Fragment, {
    children: [
      (0, G.jsx)(nn, {
        linkMarkType: a.link,
        onURLPasted: r,
        schema: t.pm_schema,
      }),
      o.image && (0, G.jsx)(en, { nodeType: o.image }),
      (0, G.jsx)(Er, {
        schemaConfig: t,
        editModel: n,
        clanSteamID: n.GetClanSteamID(),
      }),
      (0, G.jsx)(vr, { emoticonStore: i, schema: t.pm_schema }),
    ],
  });
});
function Er(e) {
  let { schemaConfig: t, editModel: n, clanSteamID: r } = e,
    i = t.pm_schema,
    a = W.useMemo(() => rn(i), [i]);
  Mt(a);
  let o = i.nodes,
    s = o.image,
    c = o.video,
    l = o.carousel,
    u = W.useCallback(
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
    f = W.useMemo(
      () => [
        o.previewyoutube && {
          type: o.previewyoutube,
          component: on,
          readProps: (e) => ({
            videoID: e.attrs.videoID,
            align: e.attrs.align,
            editModel: n,
          }),
        },
        s && { type: s, component: re, readProps: (e) => u(`image`, e) },
        c && { type: c, component: re, readProps: (e) => u(`video`, e) },
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
          component: p,
          readProps: (e) => ({
            editModel: n,
            href: e.attrs.href,
            schema: t.pm_schema,
          }),
        },
        o.carousel && {
          type: o.carousel,
          component: d,
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
  return (0, G.jsx)(Kt, { specs: f });
}
export { xr as default };
