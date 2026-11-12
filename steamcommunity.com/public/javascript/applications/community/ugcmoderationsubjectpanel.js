/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { D as t, Ft as n, at as r, ot as i } from "./chunk~01cfc309bf.js";
import { t as a } from "./chunk~5412a9f1de.js";
import { c as o, f as s, s as c, t as l } from "./chunk~1e67c3e4e4.js";
import { i as u, n as d, r as f, t as p } from "./chunk~0f9e58b0a5.js";
import {
  $ as m,
  Kt as h,
  Lt as g,
  U as _,
  b as v,
  sm as y,
  zt as b,
} from "./main.js";
var x = `kz--RFdqETk-`,
  S = `_37eExA4Y63U-`,
  C = `ec1nSO9hROk-`,
  w = `-NGXn8lsHRg-`,
  T = `NQvpF1uY2-0-`,
  E = e(t(), 1),
  D = i();
function O(e) {
  return !!e && e !== 3;
}
function k(e) {
  if (e.subject_type !== 3) return !1;
  let t = e.coordinates?.ugc_content_type === 16;
  return !!e.reports?.some(
    (e) => e.report_reason === 70 || (t && e.report_reason === 16),
  );
}
function A(e) {
  return O(e.status)
    ? (0, D.jsxs)(`span`, {
        className: (0, E.default)(x, e.className),
        children: [e.label, e.status === 1 && `?`],
      })
    : null;
}
function j(e) {
  return (0, D.jsx)(A, { status: e.status, className: S, label: `Terrorism` });
}
function M(e) {
  return (0, D.jsx)(A, { status: e.status, className: C, label: `CSAM` });
}
function N(e) {
  return (0, D.jsx)(A, {
    status: e.status,
    className: w,
    label: `Violent threat`,
  });
}
function P() {
  return (0, D.jsx)(`span`, {
    className: (0, E.default)(x, T),
    children: `Malware?`,
  });
}
function F(e) {
  let { subject: t } = e,
    n = k(t);
  return !O(t.terrorism_status) &&
    !O(t.csam_status) &&
    !O(t.credible_threat_of_violence_status) &&
    !n
    ? null
    : (0, D.jsxs)(h, {
        wrap: `wrap`,
        gap: `1`,
        children: [
          (0, D.jsx)(j, { status: t.terrorism_status }),
          (0, D.jsx)(M, { status: t.csam_status }),
          (0, D.jsx)(N, { status: t.credible_threat_of_violence_status }),
          n && (0, D.jsx)(P, {}),
        ],
      });
}
var I = e(n(), 1);
function L(e) {
  return { subject_type: 3, published_file_id: e };
}
function R(e) {
  return l(L(e));
}
function z(e) {
  let t = o(L(e.publishedFileID)),
    [n, r] = (0, I.useState)(!1);
  if (t.isPending) return null;
  if (t.isError)
    return (0, D.jsx)(g, { children: m.Localize(`#ugcsubjectpanel_error`) });
  let i = t.data.subjects?.[0];
  return i
    ? (0, D.jsxs)(h, {
        direction: `column`,
        gap: `1`,
        children: [
          (0, D.jsx)(g, { children: _(i) }),
          (0, D.jsx)(F, { subject: i }),
          (0, D.jsx)(g, {
            children: m.Localize(
              `#forumsubjectlist_subjectreportsummary`,
              i.unresolved_report_count ?? 0,
              i.unresolved_dispute_count ?? 0,
            ),
          }),
          (0, D.jsxs)(h, {
            direction: `row`,
            gap: `2`,
            children: [
              (0, D.jsx)(b, {
                size: `1`,
                color: `dull`,
                onClick: () => r(!0),
                children: m.Localize(`#ugcsubjectpanel_history`),
              }),
              (0, D.jsx)(B, { subject: i }),
              (0, D.jsx)(V, { subject: i }),
              (0, D.jsx)(H, { subject: i }),
            ],
          }),
          n && (0, D.jsx)(U, { subject: i, onClose: () => r(!1) }),
        ],
      })
    : null;
}
function B(e) {
  let { subject: t } = e,
    n = c(t.reported_content_id ? [t.reported_content_id] : []),
    r = !!t.assigned_moderator_steamid && t.assigned_moderator_steamid !== `0`;
  return !t.reported_content_id ||
    !r ||
    t.assigned_moderator_steamid !== y.steamid
    ? null
    : (0, D.jsx)(b, {
        size: `1`,
        color: `dull`,
        loading: n.isPending,
        onClick: () => n.mutate(),
        children: m.Localize(`#ugcsubjectpanel_release`),
      });
}
function V(e) {
  let { subject: t } = e,
    [n, r] = (0, I.useState)(!1);
  return !t.reported_content_id || !p(t)
    ? null
    : (0, D.jsxs)(D.Fragment, {
        children: [
          (0, D.jsx)(b, {
            size: `1`,
            color: `dull`,
            onClick: () => r(!0),
            children: m.Localize(`#moderation_escalation_escalate`),
          }),
          n &&
            (0, D.jsx)(v, {
              onClose: () => r(!1),
              strTitle: m.Localize(`#moderation_escalation_escalate`),
              children: (0, D.jsx)(d, {
                reportedContentID: t.reported_content_id,
                eCurrentLevel: t.required_moderator_level,
                onClose: () => r(!1),
              }),
            }),
        ],
      });
}
function H(e) {
  let { subject: t } = e,
    n = s();
  return t.reported_content_id &&
    (t.resolved ?? 0) !== 0 &&
    ((t.unresolved_report_count ?? 0) > 0 ||
      (t.unresolved_dispute_count ?? 0) > 0)
    ? (0, D.jsx)(b, {
        size: `1`,
        color: `dull`,
        loading: n.isPending,
        onClick: () => n.mutate({ reportedContentID: t.reported_content_id }),
        children: m.Localize(`#moderation_actions_sustain_short`),
      })
    : null;
}
function U(e) {
  let { subject: t, onClose: n } = e,
    [r, i] = (0, I.useState)(`reports`);
  return (0, D.jsx)(v, {
    onClose: n,
    strTitle: m.Localize(`#ugcsubjectpanel_dialogtitle`),
    children: (0, D.jsxs)(h, {
      direction: `column`,
      gap: `2`,
      children: [
        (0, D.jsxs)(a.Root, {
          value: r,
          onValueChange: (e) => i(e),
          children: [
            (0, D.jsx)(a.Item, {
              value: `reports`,
              children: m.Localize(`#ugcsubjectpanel_reports`),
            }),
            (0, D.jsx)(a.Item, {
              value: `history`,
              children: m.Localize(`#ugcsubjectpanel_history`),
            }),
          ],
        }),
        r === `reports` && (0, D.jsx)(u, { subject: t }),
        r === `history` &&
          (0, D.jsx)(f, { reportedContentID: t.reported_content_id }),
      ],
    }),
  });
}
function W(e) {
  let { publishedFileID: t } = e,
    n = r();
  return (
    (0, I.useEffect)(() => {
      let e = (e) => {
        e.detail?.publishedFileID == t &&
          n.invalidateQueries({ queryKey: R(t) });
      };
      return (
        window.addEventListener(`ugc-moderation-resolved`, e),
        () => window.removeEventListener(`ugc-moderation-resolved`, e)
      );
    }, [n, t]),
    (0, D.jsx)(z, { publishedFileID: t })
  );
}
export { W as UGCModerationSubjectPanel };
