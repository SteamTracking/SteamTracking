/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Pt as t, at as n } from "./chunk~01cfc309bf.js";
import { n as r } from "./chunk~cfd048ddd7.js";
import { m as i, o as a, p as o } from "./chunk~1e67c3e4e4.js";
import { t as s } from "./chunk~eefd71512b.js";
import { i as c, n as l, r as u, t as d } from "./chunk~0f9e58b0a5.js";
import { n as f, t as p } from "./chunk~62cf132e0e.js";
import { r as m, t as h } from "./chunk~75db1bf948.js";
import { t as g } from "./chunk~37e5316e27.js";
import {
  $h as _,
  B as v,
  Cu as y,
  Dc as b,
  Gi as x,
  K as S,
  Ko as C,
  Nt as w,
  Pu as T,
  Q as E,
  Su as D,
  Vh as O,
  bu as k,
  fa as A,
  hc as j,
  jt as M,
  mm as N,
  ms as P,
  q as F,
  qo as I,
  uu as L,
  y as R,
  zt as z,
} from "./main.js";
var B = e(t(), 1),
  V = n(),
  H = { 1: [62, 20, 28, 25, 22], 2: [35, 3, 20, 21, 22] };
function U(e) {
  let [t, n] = (0, B.useState)(null),
    [r, i] = (0, B.useState)(`main`),
    [a, o] = (0, B.useState)(!1),
    [c, l] = (0, B.useState)(!1),
    [u, d] = (0, B.useState)(null),
    [g, y] = (0, B.useState)(null),
    [b, x] = (0, B.useState)(null),
    [C, T] = (0, B.useState)(!1),
    [O, j] = (0, B.useState)(!1),
    [M, N] = (0, B.useState)(0),
    [P, I] = (0, B.useState)(``),
    L =
      !!e.rtContentCreatedAt &&
      Date.now() / 1e3 - e.rtContentCreatedAt > 2592e3,
    R = (e.subject.subject_type ? H[e.subject.subject_type] : void 0) ?? [],
    z = a || c || u || g || b || C || O,
    U = f(S(t), e.authorSteamID);
  (0, B.useEffect)(() => {
    I(U ?? ``);
  }, [U]);
  let W = async () => {
      _(t !== null, `eReason must be non-null to sanction`);
      let n = [];
      (a && n.push({ sanction: 1 }),
        c && n.push({ sanction: 8 }),
        u && n.push({ sanction: 3, days: u }),
        g && n.push({ sanction: 2, days: g }),
        b && n.push({ sanction: 5, days: b }),
        C && n.push({ sanction: 4, days: -1 }),
        O && n.push({ sanction: 7 }),
        M === 1
          ? n.push({ sanction: 12, escalate_to: 1 })
          : M === 10 && n.push({ sanction: 12, escalate_to: 10 }),
        await e.sanctionMutation.mutateAsync({
          sanctions: n,
          message: P.trim(),
          reason: t,
        }),
        e.onSanction());
    },
    G = (e) => {
      (n(e), i(`main`));
    },
    K = (e) => {
      e ? (j(!0), x(7), n(16)) : (j(!1), x(-1));
    };
  return (0, V.jsxs)(V.Fragment, {
    children: [
      r === `reason` && (0, V.jsx)(p, { reasons: F, onSelect: G }),
      r === `main` &&
        (0, V.jsxs)(D, {
          children: [
            (0, V.jsxs)(D, {
              className: `gDpRvQSyEhc-`,
              children: [
                e.sanctionMutation.isError &&
                  (0, V.jsxs)(`div`, {
                    className: k(`_0Aus5xkg4rs-`, `WfjrnpAtOos-`),
                    children: [
                      (0, V.jsx)(A, {}),
                      ` Error: `,
                      e.sanctionMutation.error.message,
                    ],
                  }),
                (0, V.jsx)(`label`, { htmlFor: `reason`, children: `Reason:` }),
                (0, V.jsx)(`button`, {
                  id: `reason`,
                  className: void 0,
                  onClick: () => i(`reason`),
                  children:
                    t === null
                      ? E.Localize(`#commentsanctiondialog_selectreason`)
                      : v(t),
                }),
                R.length > 0 &&
                  (0, V.jsx)(`div`, {
                    className: `M5MEiztLFqg-`,
                    children: R.map((e) =>
                      (0, V.jsx)(
                        w,
                        {
                          onClick: () => n(t === e ? null : e),
                          size: `1`,
                          variant: t === e ? `basic` : `dark`,
                          children: v(e),
                        },
                        e,
                      ),
                    ),
                  }),
                (0, V.jsxs)(`label`, {
                  className: `_0Aus5xkg4rs-`,
                  children: [
                    (0, V.jsx)(`input`, {
                      type: `checkbox`,
                      checked: a,
                      onChange: (e) => o(e.target.checked),
                    }),
                    ` Delete`,
                  ],
                }),
                (0, V.jsxs)(`label`, {
                  className: `_0Aus5xkg4rs-`,
                  children: [
                    (0, V.jsx)(`input`, {
                      type: `checkbox`,
                      checked: c,
                      onChange: (e) => l(e.target.checked),
                    }),
                    ` Issue Warning`,
                  ],
                }),
                L &&
                  !!u &&
                  (0, V.jsxs)(`div`, {
                    className: k(`_0Aus5xkg4rs-`, `WfjrnpAtOos-`),
                    children: [
                      (0, V.jsx)(A, {}),
                      ` Content is older than 30 days. Are you sure you want to ban?`,
                    ],
                  }),
                e.clanSteamID &&
                  (0, V.jsxs)(V.Fragment, {
                    children: [
                      (0, V.jsx)(`label`, {
                        htmlFor: `hubban`,
                        children: `Ban from hub:`,
                      }),
                      (0, V.jsxs)(`select`, {
                        id: `hubban`,
                        onChange: (e) =>
                          d(
                            e.target.value === `0`
                              ? null
                              : parseInt(e.target.value),
                          ),
                        value: u ?? 0,
                        children: [
                          (0, V.jsx)(`option`, {
                            value: `0`,
                            children: `Do not ban`,
                          }),
                          (0, V.jsx)(`option`, {
                            value: `1`,
                            children: `1 day`,
                          }),
                          (0, V.jsx)(`option`, {
                            value: `3`,
                            children: `3 days`,
                          }),
                          (0, V.jsx)(`option`, {
                            value: `7`,
                            children: `7 days`,
                          }),
                          (0, V.jsx)(`option`, {
                            value: `14`,
                            children: `14 days`,
                          }),
                          (0, V.jsx)(`option`, {
                            value: `30`,
                            children: `30 days`,
                          }),
                          (0, V.jsx)(`option`, {
                            value: `90`,
                            children: `3 months`,
                          }),
                          (0, V.jsx)(`option`, {
                            value: `365`,
                            children: `1 year`,
                          }),
                          (0, V.jsx)(`option`, {
                            value: `-1`,
                            children: `Permanent`,
                          }),
                        ],
                      }),
                      !1,
                    ],
                  }),
                L &&
                  !!g &&
                  (0, V.jsxs)(`div`, {
                    className: k(`_0Aus5xkg4rs-`, `WfjrnpAtOos-`),
                    children: [
                      (0, V.jsx)(A, {}),
                      ` Content is older than 30 days. Are you sure you want to ban?`,
                    ],
                  }),
                (0, V.jsx)(`label`, {
                  htmlFor: `communityban`,
                  children: `Ban from community:`,
                }),
                (0, V.jsxs)(`select`, {
                  id: `communityban`,
                  onChange: (e) =>
                    y(e.target.value === `0` ? null : parseInt(e.target.value)),
                  value: g ?? 0,
                  children: [
                    (0, V.jsx)(`option`, {
                      value: `0`,
                      children: `Do not ban`,
                    }),
                    (0, V.jsx)(`option`, { value: `1`, children: `1 day` }),
                    (0, V.jsx)(`option`, { value: `3`, children: `3 days` }),
                    (0, V.jsx)(`option`, { value: `7`, children: `7 days` }),
                    (0, V.jsx)(`option`, { value: `14`, children: `14 days` }),
                    (0, V.jsx)(`option`, { value: `30`, children: `30 days` }),
                    (0, V.jsx)(`option`, { value: `90`, children: `3 months` }),
                    (0, V.jsx)(`option`, { value: `365`, children: `1 year` }),
                    (0, V.jsx)(`option`, {
                      value: `-1`,
                      children: `Permanent`,
                    }),
                  ],
                }),
                !1,
                (0, V.jsx)(`label`, {
                  htmlFor: `deletecomments`,
                  children: `Delete comments since:`,
                }),
                (0, V.jsxs)(`select`, {
                  id: `deletecomments`,
                  disabled: O,
                  onChange: (e) =>
                    x(
                      e.target.value === `-1` ? null : parseInt(e.target.value),
                    ),
                  value: b ?? -1,
                  children: [
                    (0, V.jsx)(`option`, {
                      value: `-1`,
                      children: `Do not delete`,
                    }),
                    (0, V.jsx)(`option`, { value: `1`, children: `1 day` }),
                    (0, V.jsx)(`option`, { value: `7`, children: `7 days` }),
                    (0, V.jsx)(`option`, { value: `14`, children: `14 days` }),
                    (0, V.jsx)(`option`, { value: `30`, children: `30 days` }),
                    (0, V.jsx)(`option`, {
                      value: `0`,
                      children: `All comments`,
                    }),
                  ],
                }),
                (0, V.jsxs)(`span`, {
                  className: `_0Aus5xkg4rs-`,
                  children: [
                    (0, V.jsx)(`input`, {
                      type: `checkbox`,
                      checked: C,
                      onChange: (e) => T(e.target.checked),
                    }),
                    `\xA0Permanent trade ban`,
                  ],
                }),
                !1,
                (0, V.jsxs)(`span`, {
                  className: `_0Aus5xkg4rs-`,
                  children: [
                    (0, V.jsx)(`input`, {
                      type: `checkbox`,
                      checked: O,
                      onChange: (e) => K(e.target.checked),
                    }),
                    `\xA0Mark as suspicious`,
                  ],
                }),
                (0, V.jsx)(`label`, {
                  htmlFor: `escalateto`,
                  children: `Escalate to`,
                }),
                (0, V.jsxs)(`select`, {
                  id: `escalateto`,
                  onChange: (e) => N(parseInt(e.target.value)),
                  value: M,
                  children: [
                    (0, V.jsx)(`option`, {
                      value: 0,
                      children: `Do not escalate`,
                    }),
                    (0, V.jsx)(`option`, { value: 1, children: `Supervisor` }),
                    (0, V.jsx)(`option`, { value: 10, children: `Valve` }),
                  ],
                }),
                (0, V.jsx)(`textarea`, {
                  className: k(`_0Aus5xkg4rs-`, `Obo5tCs0Dgo-`),
                  placeholder: `Message to send (required)`,
                  value: P,
                  onChange: (e) => I(e.target.value),
                }),
              ],
            }),
            (0, V.jsxs)(D, {
              className: `iummRPlc5UA-`,
              children: [
                e.sanctionMutation.isPending &&
                  (0, V.jsx)(s, { size: `small` }),
                !e.sanctionMutation.isPending &&
                  (0, V.jsxs)(V.Fragment, {
                    children: [
                      (0, V.jsx)(m, {
                        onClick: e.onCancel,
                        children: `Cancel`,
                      }),
                      (0, V.jsx)(h, {
                        onClick: W,
                        disabled: t === null || !z || P.trim().length === 0,
                        children: `Sanction`,
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
    ],
  });
}
var W = `qJiMpgjUBmw-`,
  G = `TMrWHSfHqDs-`,
  K = `RxrRIG6Jn9o-`;
function q(e) {
  let { subject: t } = e,
    [n, i] = (0, B.useState)(!1),
    a = t && (t.unresolved_report_count > 0 || t.unresolved_dispute_count > 0),
    o = (0, V.jsx)(r, {
      onClick: () => i(!0),
      children: (0, V.jsxs)(z, {
        direction: `row`,
        justify: `between`,
        align: `baseline`,
        gap: `1`,
        children: [
          a &&
            (0, V.jsx)(`img`, {
              className: `tPmeaVOVhvg-`,
              src: `${N.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
            }),
          E.Localize(`#commentsanctiondialog_moderate`),
          t &&
            t.required_moderator_level === 10 &&
            (0, V.jsx)(`span`, {
              className: `_2T5Cy4opNNw-`,
              children: `(VO)`,
            }),
          t &&
            t.required_moderator_level === 1 &&
            (0, V.jsx)(`span`, {
              className: `WUCJ-cE1nNQ-`,
              children: `(Supervisor)`,
            }),
        ],
      }),
    });
  return (0, V.jsxs)(V.Fragment, {
    children: [
      n && (0, V.jsx)(Y, { onClose: () => i(!1), ...e }),
      t &&
        (0, V.jsx)(P, {
          toolTipContent: (0, V.jsx)(J, { subject: t }),
          direction: `bottom`,
          nDelayShowMS: 0,
          children: o,
        }),
      !t && o,
    ],
  });
}
function J(e) {
  let { subject: t } = e,
    n = (0, B.useMemo)(() => {
      let e = O(t?.reports ?? [], (e) => e.report_reason);
      return (e.sort((e, t) => e[1] - t[1]), e);
    }, [t.reports]);
  return n.length === 0
    ? null
    : (0, V.jsxs)(V.Fragment, {
        children: [
          (0, V.jsx)(`div`, { children: E.Localize(`#reasonlist_title`) }),
          n.map(([e, t]) =>
            (0, V.jsx)(
              `div`,
              { children: E.Localize(`#reasonlist_reasonwithcount`, v(e), t) },
              e,
            ),
          ),
        ],
      });
}
function Y(e) {
  let {
      sanctionMutation: t,
      acquitMutation: n,
      subject: r,
      eSubjectType: i,
      gidComment: a,
      clanSteamID: o,
      authorSteamID: s,
      onClose: f,
    } = e,
    p = r?.reported_content_id,
    [m, h] = (0, B.useState)(`main`),
    _ = [
      {
        name: `Reports`,
        key: `reports`,
        contents: (0, V.jsx)(y, { children: (0, V.jsx)(c, { subject: r }) }),
      },
      {
        name: `History`,
        key: `history`,
        contents: (0, V.jsx)(y, {
          children: (0, V.jsx)(u, { reportedContentID: p }),
        }),
      },
      {
        name: `Details`,
        key: `details`,
        contents: (0, V.jsx)(y, { children: e.children }),
      },
    ],
    v = () => {
      (e.onClose(),
        window.location.href.split(`#`).length === 1 &&
          a !== `0` &&
          (window.location.href += `#c` + a),
        window.location.reload());
    },
    S = 0,
    w = 0;
  if (r)
    for (let e of r.reports)
      (e.time_resolved && !e.time_disputed && S++,
        e.time_dispute_resolved && w++);
  let D =
      !!r?.reported_content_id && !r.owner_dispute_time && r.resolved === 14,
    O = r !== void 0 && !!r.owner_dispute_time;
  return (0, V.jsx)(R, {
    onlyPopoutIfNeeded: !0,
    popupHeight: 340,
    popupWidth: 640,
    strTitle: `Moderate subject`,
    children: (0, V.jsx)(x, {
      bAllowFullSize: !0,
      title: `Moderate`,
      "aria-describedby": `moderate`,
      onCancel: e.onClose,
      className: void 0,
      children: (0, V.jsx)(C, {
        children: (0, V.jsx)(I, {
          children: (0, V.jsxs)(`div`, {
            className: W,
            children: [
              m === `main` &&
                (0, V.jsxs)(`div`, {
                  className: `Wgs3U5MVZxE-`,
                  children: [
                    (0, V.jsxs)(`div`, {
                      className: void 0,
                      children: [
                        (0, V.jsxs)(M, {
                          as: `div`,
                          size: `3`,
                          contrast: `description`,
                          children: [
                            r?.unresolved_report_count ?? 0,
                            ` unresolved / `,
                            S,
                            ` resolved / `,
                            r?.unresolved_dispute_count ?? 0,
                            ` disputed / `,
                            w,
                            ` disputes resolved`,
                          ],
                        }),
                        (0, V.jsx)(g, { tabs: _, bDisableRouting: !0 }),
                      ],
                    }),
                    (0, V.jsxs)(`div`, {
                      className: `XevVgxU7JM8-`,
                      children: [
                        (0, V.jsx)(`button`, {
                          onClick: () => h(`sanction`),
                          children: (0, V.jsxs)(z, {
                            direction: `row`,
                            justify: `center`,
                            align: `center`,
                            children: [
                              (0, V.jsx)(L, { className: `Pk8e-JCMLtM-` }),
                              ` Sanction`,
                            ],
                          }),
                        }),
                        (0, V.jsx)(Q, {
                          subject: r,
                          acquitMutation: n,
                          onClose: f,
                        }),
                        (0, V.jsx)($, { subject: r, onClose: f }),
                        d(r) &&
                          (0, V.jsx)(T, {
                            disabled: !p,
                            onClick: () => h(`escalate`),
                            children: E.Localize(
                              `#moderation_escalation_escalate`,
                            ),
                          }),
                        !O &&
                          (0, V.jsx)(`button`, {
                            disabled: !D,
                            onClick: () => h(`ownerdispute`),
                            children: `Owner Dispute`,
                          }),
                        O &&
                          (0, V.jsxs)(`span`, {
                            children: [
                              (0, V.jsx)(`a`, {
                                href: `${N.HELP_BASE_URL}ticketmaster/ticket/${r.owner_dispute_details}`,
                                children: (0, V.jsx)(M, {
                                  size: `2`,
                                  children: E.Localize(
                                    `#moderation_already_owner_disputed`,
                                  ),
                                }),
                              }),
                              (0, V.jsx)(`button`, {
                                disabled: !p,
                                onClick: () => h(`editownerdisputedetails`),
                                className: `VDTUVdDNhUU-`,
                                children: (0, V.jsx)(b, {}),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              m === `escalate` &&
                !!p &&
                (0, V.jsx)(l, {
                  reportedContentID: p,
                  eCurrentLevel: r?.required_moderator_level,
                  onClose: () => h(`main`),
                }),
              m === `sanction` &&
                (0, V.jsx)(U, {
                  subject: r ?? { subject_type: i },
                  clanSteamID: o,
                  authorSteamID: s,
                  sanctionMutation: t,
                  onSanction: v,
                  onCancel: () => h(`main`),
                }),
              m === `ownerdispute` &&
                !!p &&
                (0, V.jsx)(Z, {
                  reportedContentID: p,
                  onClose: () => h(`main`),
                }),
              m === `editownerdisputedetails` &&
                !!p &&
                (0, V.jsx)(X, {
                  reportedContentID: p,
                  onClose: () => h(`main`),
                  currentDetails: r?.owner_dispute_details ?? ``,
                }),
            ],
          }),
        }),
      }),
    }),
  });
}
function X(e) {
  let { reportedContentID: t, onClose: n, currentDetails: r } = e,
    [a, o] = (0, B.useState)(r),
    s = i(t, a);
  return (0, V.jsxs)(V.Fragment, {
    children: [
      (0, V.jsxs)(`label`, {
        children: [
          (0, V.jsx)(M, {
            size: `2`,
            children: E.Localize(`#moderation_editownerdisputedetails_label`),
          }),
          (0, V.jsx)(`input`, {
            type: `text`,
            value: a,
            onChange: (e) => o(e.target.value),
          }),
        ],
      }),
      (0, V.jsxs)(z, {
        justify: `between`,
        direction: `row`,
        children: [
          (0, V.jsx)(T, {
            onClick: async () => {
              (await s.mutateAsync(), n());
            },
            children: E.Localize(`#moderation_editownerdisputedetails_save`),
          }),
          (0, V.jsx)(w, {
            onClick: n,
            loading: s.isPending,
            children: E.Localize(`#moderation_ownerdispute_cancel`),
          }),
        ],
      }),
    ],
  });
}
function Z(e) {
  let { reportedContentID: t, onClose: n } = e,
    [r, i] = (0, B.useState)(``),
    o = a(t, r);
  return (0, V.jsxs)(D, {
    className: G,
    children: [
      (0, V.jsx)(M, {
        as: `div`,
        size: `2`,
        children: E.Localize(`#moderation_ownerdispute_description`),
      }),
      (0, V.jsxs)(`label`, {
        children: [
          (0, V.jsx)(M, {
            size: `2`,
            children: E.Localize(`#moderation_ownerdispute_ticketmastercode`),
          }),
          ` `,
          (0, V.jsx)(`input`, {
            type: `text`,
            value: r,
            onChange: (e) => i(e.target.value),
          }),
        ],
      }),
      (0, V.jsxs)(z, {
        justify: `between`,
        direction: `row`,
        children: [
          (0, V.jsx)(T, {
            onClick: async () => {
              (await o.mutateAsync(), n());
            },
            children: E.Localize(`#moderation_ownerdispute_dispute`),
          }),
          (0, V.jsx)(T, {
            onClick: n,
            children: E.Localize(`#moderation_ownerdispute_cancel`),
          }),
        ],
      }),
    ],
  });
}
function Q(e) {
  let { acquitMutation: t, onClose: n, subject: r } = e,
    i = r && (r.unresolved_report_count > 0 || r.unresolved_dispute_count > 0);
  return (0, V.jsx)(`button`, {
    onClick: async () => {
      (await t.mutateAsync(void 0), n());
    },
    disabled: !i,
    children: (0, V.jsxs)(z, {
      direction: `row`,
      justify: `center`,
      align: `center`,
      children: [
        (0, V.jsx)(j, { className: K }),
        ` `,
        E.Localize(`#moderation_actions_acquit`),
      ],
    }),
  });
}
function $(e) {
  let { subject: t, onClose: n } = e,
    r =
      !!t?.reported_content_id &&
      t.resolved !== 0 &&
      (t.unresolved_dispute_count > 0 || t.unresolved_report_count > 0),
    i = o();
  return (0, V.jsx)(`button`, {
    onClick: async () => {
      t?.reported_content_id &&
        (await i.mutateAsync({ reportedContentID: t.reported_content_id }),
        n());
    },
    disabled: !r,
    children: E.Localize(`#moderation_actions_sustain`),
  });
}
export { q as t };
