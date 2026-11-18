/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { D as t, Ft as n, at as r, ot as i } from "./chunk~01cfc309bf.js";
import { t as a } from "./chunk~5412a9f1de.js";
import { c as o, l as s, n as c, t as l } from "./chunk~1e67c3e4e4.js";
import { i as u, n as d, r as f, t as p } from "./chunk~0f9e58b0a5.js";
import {
  B as m,
  Gt as h,
  It as g,
  Q as _,
  Rt as v,
  St as y,
  V as b,
  b as x,
  dm as S,
} from "./main.js";
var C = `kz--RFdqETk-`,
  w = `_37eExA4Y63U-`,
  T = `ec1nSO9hROk-`,
  E = `-NGXn8lsHRg-`,
  D = `NQvpF1uY2-0-`,
  O = e(t(), 1),
  k = i();
function A(e) {
  return !!e && e !== 3;
}
function j(e) {
  if (e.subject_type !== 3) return !1;
  let t = e.coordinates?.ugc_content_type === 16;
  return !!e.reports?.some(
    (e) => e.report_reason === 70 || (t && e.report_reason === 16),
  );
}
function M(e) {
  return A(e.status)
    ? (0, k.jsxs)(`span`, {
        className: (0, O.default)(C, e.className),
        children: [e.label, e.status === 1 && `?`],
      })
    : null;
}
function N(e) {
  return (0, k.jsx)(M, { status: e.status, className: w, label: `Terrorism` });
}
function P(e) {
  return (0, k.jsx)(M, { status: e.status, className: T, label: `CSAM` });
}
function F(e) {
  return (0, k.jsx)(M, {
    status: e.status,
    className: E,
    label: `Violent threat`,
  });
}
function I() {
  return (0, k.jsx)(`span`, {
    className: (0, O.default)(C, D),
    children: `Malware?`,
  });
}
function L(e) {
  let { subject: t } = e,
    n = j(t);
  return !A(t.terrorism_status) &&
    !A(t.csam_status) &&
    !A(t.credible_threat_of_violence_status) &&
    !n
    ? null
    : (0, k.jsxs)(h, {
        wrap: `wrap`,
        gap: `1`,
        children: [
          (0, k.jsx)(N, { status: t.terrorism_status }),
          (0, k.jsx)(P, { status: t.csam_status }),
          (0, k.jsx)(F, { status: t.credible_threat_of_violence_status }),
          n && (0, k.jsx)(I, {}),
        ],
      });
}
var R = `QyKPlQ4VsXM-`,
  z = `i0Uyqkg-S5o-`,
  B = `Nug0PHJEgnI-`,
  V = `TtTr5Dvwsng-`,
  H = `ltGDK3wj7iU-`,
  U = `Mb5M5Kl46Vs-`,
  W = `i-KGNaLie0w-`,
  G = e(n(), 1);
function K(e) {
  switch (e) {
    case 0:
      return H;
    case 1:
      return V;
    case 3:
    case 4:
      return;
    default:
      return B;
  }
}
function q(e) {
  let t = s(l(e.publishedFileID)),
    [n, r] = (0, G.useState)(!1);
  if (t.isPending) return null;
  if (t.isError)
    return (0, k.jsx)(g, { children: _.Localize(`#ugcsubjectpanel_error`) });
  let i = t.data.subjects?.[0];
  if (!i) return null;
  let a = i.resolved ?? 0,
    o = i.content_moderated_reason,
    c = a !== 0 && !!o && o !== 1,
    u = i.unresolved_dispute_count ?? 0;
  return (0, k.jsxs)(h, {
    direction: `column`,
    gap: `1`,
    children: [
      (0, k.jsx)(L, { subject: i }),
      (0, k.jsxs)(`div`, {
        className: R,
        children: [
          (0, k.jsx)(`span`, {
            className: (0, O.default)(z, K(a)),
            children: b(a),
          }),
          c &&
            (0, k.jsx)(`span`, { className: `i0Uyqkg-S5o-`, children: m(o) }),
        ],
      }),
      (0, k.jsxs)(`div`, {
        className: U,
        children: [
          (0, k.jsxs)(`span`, {
            children: [
              _.Localize(`#ugcsubjectpanel_unresolved`),
              ` `,
              (0, k.jsx)(`span`, {
                className: W,
                children: y(i.unresolved_report_count ?? 0),
              }),
            ],
          }),
          u > 0 &&
            (0, k.jsxs)(`span`, {
              children: [
                _.Localize(`#ugcsubjectpanel_disputed`),
                ` `,
                (0, k.jsx)(`span`, {
                  className: `i-KGNaLie0w-`,
                  children: y(u),
                }),
              ],
            }),
        ],
      }),
      (0, k.jsxs)(h, {
        direction: `row`,
        gap: `2`,
        children: [
          (0, k.jsx)(v, {
            size: `1`,
            color: `dull`,
            onClick: () => r(!0),
            children: _.Localize(`#ugcsubjectpanel_history`),
          }),
          (0, k.jsx)(J, { subject: i }),
          (0, k.jsx)(Y, { subject: i }),
        ],
      }),
      n && (0, k.jsx)(X, { subject: i, onClose: () => r(!1) }),
    ],
  });
}
function J(e) {
  let { subject: t } = e,
    n = o(t.reported_content_id ? [t.reported_content_id] : []),
    r = !!t.assigned_moderator_steamid && t.assigned_moderator_steamid !== `0`;
  return !t.reported_content_id ||
    !r ||
    t.assigned_moderator_steamid !== S.steamid
    ? null
    : (0, k.jsx)(v, {
        size: `1`,
        color: `dull`,
        loading: n.isPending,
        onClick: () => n.mutate(),
        children: _.Localize(`#ugcsubjectpanel_release`),
      });
}
function Y(e) {
  let { subject: t } = e,
    [n, r] = (0, G.useState)(!1);
  return !t.reported_content_id || !p(t)
    ? null
    : (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)(v, {
            size: `1`,
            color: `dull`,
            onClick: () => r(!0),
            children: _.Localize(`#moderation_escalation_escalate`),
          }),
          n &&
            (0, k.jsx)(x, {
              onClose: () => r(!1),
              strTitle: _.Localize(`#moderation_escalation_escalate`),
              children: (0, k.jsx)(d, {
                reportedContentID: t.reported_content_id,
                eCurrentLevel: t.required_moderator_level,
                onClose: () => r(!1),
              }),
            }),
        ],
      });
}
function X(e) {
  let { subject: t, onClose: n } = e,
    [r, i] = (0, G.useState)(`reports`);
  return (0, k.jsx)(x, {
    onClose: n,
    strTitle: _.Localize(`#ugcsubjectpanel_dialogtitle`),
    children: (0, k.jsxs)(h, {
      direction: `column`,
      gap: `2`,
      children: [
        (0, k.jsxs)(a.Root, {
          value: r,
          onValueChange: (e) => i(e),
          children: [
            (0, k.jsx)(a.Item, {
              value: `reports`,
              children: _.Localize(`#ugcsubjectpanel_reports`),
            }),
            (0, k.jsx)(a.Item, {
              value: `history`,
              children: _.Localize(`#ugcsubjectpanel_history`),
            }),
          ],
        }),
        r === `reports` && (0, k.jsx)(u, { subject: t }),
        r === `history` &&
          (0, k.jsx)(f, { reportedContentID: t.reported_content_id }),
      ],
    }),
  });
}
function Z(e) {
  let { publishedFileID: t } = e,
    n = r();
  return (
    (0, G.useEffect)(() => {
      let e = (e) => {
        e.detail?.publishedFileID == t &&
          n.invalidateQueries({ queryKey: c(t) });
      };
      return (
        window.addEventListener(`ugc-moderation-resolved`, e),
        () => window.removeEventListener(`ugc-moderation-resolved`, e)
      );
    }, [n, t]),
    (0, k.jsx)(q, { publishedFileID: t })
  );
}
export { Z as UGCModerationSubjectPanel };
