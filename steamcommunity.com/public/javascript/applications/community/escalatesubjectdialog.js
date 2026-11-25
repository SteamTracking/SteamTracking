/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Pt as t, at as n } from "./chunk~01cfc309bf.js";
import { t as r } from "./chunk~cfd048ddd7.js";
import { t as i } from "./chunk~91ffd0567f.js";
import { a, s as o, u as s } from "./chunk~1e67c3e4e4.js";
import { n as c } from "./chunk~6c2bf73948.js";
import { t as l } from "./chunk~bdc7e21194.js";
import { t as u } from "./chunk~eefd71512b.js";
import {
  $ as d,
  B as f,
  H as p,
  Nt as m,
  Q as h,
  R as g,
  Su as _,
  V as v,
  dt as y,
  jt as b,
  mm as x,
  z as S,
  zt as C,
} from "./main.js";
function w(e) {
  let { eTrustBucket: t } = e;
  return null;
}
var T = `xLywNz6knuU-`,
  E = `nA9MaZPmXRU-`,
  D = `WS9SvilWIXE-`,
  O = `aO8lOVQNngE-`,
  k = `hosEjyB9L6s-`,
  A = `QTrmbby5x-U-`,
  j = `U5fa7ynZKdY-`,
  M = `i-jXCzZsk-I-`,
  N = `WN24eWEAUSk-`,
  P = `Dm1bd-TdIjE-`,
  F = n();
function I(e) {
  let { reportedContentID: t } = e;
  return t ? (0, F.jsx)(z, { ...e }) : (0, F.jsx)(L, {});
}
function L(e) {
  return (0, F.jsx)(`div`, {
    children: (0, F.jsxs)(`table`, {
      className: T,
      children: [
        (0, F.jsx)(R, {}),
        (0, F.jsx)(`tbody`, {
          children: (0, F.jsx)(`tr`, {
            children: (0, F.jsx)(`td`, {
              colSpan: 4,
              children: (0, F.jsx)(b, {
                size: `2`,
                children: h.Localize(`#subjectauditlog_noentries`),
              }),
            }),
          }),
        }),
      ],
    }),
  });
}
function R() {
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsxs)(`colgroup`, {
        children: [
          (0, F.jsx)(`col`, { className: E }),
          (0, F.jsx)(`col`, { className: k }),
          (0, F.jsx)(`col`, { className: A }),
          (0, F.jsx)(`col`, {}),
        ],
      }),
      (0, F.jsx)(`thead`, {
        children: (0, F.jsxs)(`tr`, {
          children: [
            (0, F.jsx)(`th`, {
              children: (0, F.jsx)(b, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Date`,
              }),
            }),
            (0, F.jsx)(`th`, {
              children: (0, F.jsx)(b, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Actor`,
              }),
            }),
            (0, F.jsx)(`th`, {
              children: (0, F.jsx)(b, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Action`,
              }),
            }),
            (0, F.jsx)(`th`, {
              children: (0, F.jsx)(b, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Details`,
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function z(e) {
  let t = a(e.reportedContentID),
    n = t?.data?.entries?.length ?? 0,
    r = t.data?.entries ?? [];
  return (
    r.sort((e, t) => t.timestamp - e.timestamp),
    (0, F.jsx)(`div`, {
      children:
        n > 0 &&
        (0, F.jsxs)(`table`, {
          className: `xLywNz6knuU-`,
          children: [
            (0, F.jsx)(R, {}),
            (0, F.jsxs)(`tbody`, {
              children: [
                t === void 0 &&
                  (0, F.jsx)(`tr`, {
                    children: (0, F.jsx)(`td`, {
                      colSpan: 4,
                      children: (0, F.jsx)(b, {
                        size: `2`,
                        children: h.Localize(`#subjectauditlog_noentries`),
                      }),
                    }),
                  }),
                t &&
                  (0, F.jsxs)(F.Fragment, {
                    children: [
                      t.isLoading &&
                        (0, F.jsx)(`tr`, {
                          children: (0, F.jsx)(`td`, {
                            colSpan: 4,
                            children: (0, F.jsx)(u, {}),
                          }),
                        }),
                      t.isError &&
                        (0, F.jsx)(`tr`, {
                          children: (0, F.jsx)(`td`, {
                            colSpan: 4,
                            children: (0, F.jsx)(b, {
                              size: `2`,
                              children: h.Localize(`#subjectauditlog_error`),
                            }),
                          }),
                        }),
                      t.isSuccess &&
                        n === 0 &&
                        (0, F.jsx)(`tr`, {
                          children: (0, F.jsx)(`td`, {
                            colSpan: 4,
                            children: (0, F.jsx)(b, {
                              size: `2`,
                              children: h.Localize(
                                `#subjectauditlog_noentries`,
                              ),
                            }),
                          }),
                        }),
                      t.isSuccess &&
                        n > 0 &&
                        r.map((e) => (0, F.jsx)(V, { entry: e }, e.timestamp)),
                    ],
                  }),
              ],
            }),
          ],
        }),
    })
  );
}
function B(e) {
  let { steamid: t, strPersonaName: n, status: i } = e;
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsxs)(`div`, {
        className: M,
        children: [
          (0, F.jsx)(`span`, {
            className: N,
            children: (0, F.jsx)(r, {
              href: `${x.COMMUNITY_BASE_URL}profiles/${t}`,
              children: (0, F.jsx)(b, {
                size: `2`,
                truncate: !0,
                title: n,
                className: P,
                children: n,
              }),
            }),
          }),
          (0, F.jsx)(w, { eTrustBucket: i?.trust_bucket }),
        ],
      }),
      !!i?.is_support &&
        (0, F.jsx)(`span`, {
          className: `yMtdDuggCPo-`,
          title: `Support or Admin account`,
          children: `Mod`,
        }),
      !!i?.is_developer &&
        (0, F.jsx)(`span`, {
          className: `yMtdDuggCPo-`,
          title: `Partner account for this item's app`,
          children: `Dev`,
        }),
    ],
  });
}
function V(e) {
  let { entry: t } = e,
    n = l(t.actor_steamid);
  if (!n.isSuccess || !n.data) return null;
  let i = n.data.public_data?.persona_name;
  return (0, F.jsxs)(`tr`, {
    children: [
      (0, F.jsx)(`td`, {
        children: (0, F.jsx)(b, {
          size: `2`,
          children: y(t.timestamp, !1, ``),
        }),
      }),
      (0, F.jsx)(`td`, {
        children: (0, F.jsxs)(`div`, {
          className: j,
          children: [
            (0, F.jsx)(B, {
              steamid: t.actor_steamid,
              strPersonaName: i,
              status: t.actor_account_status,
            }),
            (0, F.jsx)(r, {
              size: `2`,
              href: `${x.COMMUNITY_BASE_URL}moderation/activity/${t.actor_steamid}`,
              children: `(activity)`,
            }),
          ],
        }),
      }),
      (0, F.jsx)(`td`, {
        children: (0, F.jsxs)(b, {
          size: `2`,
          children: [
            p(t.action),
            t.automated_action &&
              (0, F.jsx)(F.Fragment, { children: `\xA0(Automated)` }),
          ],
        }),
      }),
      (0, F.jsx)(`td`, {
        children: (0, F.jsx)(b, {
          as: `div`,
          size: `2`,
          children: (0, F.jsx)(H, {
            eAction: t.action,
            jsonData: t.additional_json_data,
          }),
        }),
      }),
    ],
  });
}
function H(e) {
  let { eAction: t, jsonData: n } = e,
    r = {};
  n && (r = JSON.parse(n));
  let i = r.report_id
    ? (0, F.jsxs)(`span`, { children: [`Report ID: `, r.report_id] })
    : null;
  switch (t) {
    case 1:
      return i;
    case 2:
      return (0, F.jsxs)(F.Fragment, {
        children: [
          `Reason: `,
          f(r.reason),
          r.resolution !== 1 &&
            r.resolution !== 14 &&
            (0, F.jsxs)(F.Fragment, {
              children: [(0, F.jsx)(`br`, {}), `Resolution: `, v(r.resolution)],
            }),
          r.sanctions &&
            (0, F.jsxs)(F.Fragment, {
              children: [
                (0, F.jsx)(`br`, {}),
                `Sanctions: `,
                r.sanctions.map(g).join(`, `),
              ],
            }),
        ],
      });
    case 4:
      return i;
    case 5:
      return (0, F.jsx)(F.Fragment, {
        children: JSON.stringify(r, null, `	`),
      });
    case 6:
      return (0, F.jsxs)(F.Fragment, { children: [`New level: `, S(r.level)] });
    case 7:
      return i;
    default:
      return null;
  }
}
function U(e) {
  let { subject: t } = e,
    n = t && t.reports && t.reports.length > 0,
    r = [...(t?.reports ?? [])].sort(
      (e, t) => (t.time_reported ?? 0) - (e.time_reported ?? 0),
    ),
    i = s(t?.reported_content_id, !0).data?.subject?.reports ?? [],
    a = new Map(i.map((e) => [e.reporter_steamid, e.reporter_account_status]));
  return (0, F.jsxs)(`table`, {
    className: T,
    children: [
      (0, F.jsxs)(`colgroup`, {
        children: [
          (0, F.jsx)(`col`, { className: E }),
          (0, F.jsx)(`col`, { className: D }),
          (0, F.jsx)(`col`, { className: O }),
          (0, F.jsx)(`col`, {}),
        ],
      }),
      (0, F.jsx)(`thead`, {
        children: (0, F.jsxs)(`tr`, {
          children: [
            (0, F.jsx)(`th`, {
              children: (0, F.jsx)(b, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Date`,
              }),
            }),
            (0, F.jsx)(`th`, {
              children: (0, F.jsx)(b, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Reporter`,
              }),
            }),
            (0, F.jsx)(`th`, {
              children: (0, F.jsx)(b, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Status`,
              }),
            }),
            (0, F.jsx)(`th`, {
              children: (0, F.jsx)(b, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Reason`,
              }),
            }),
          ],
        }),
      }),
      (0, F.jsxs)(`tbody`, {
        children: [
          !n &&
            (0, F.jsx)(`tr`, {
              children: (0, F.jsx)(`td`, {
                colSpan: 4,
                children: (0, F.jsx)(b, {
                  size: `2`,
                  children: h.Localize(`#contentreportslist_noreports`),
                }),
              }),
            }),
          n &&
            r.map((e) =>
              (0, F.jsx)(
                W,
                { report: e, reporterStatus: a.get(e.reporter_steamid) },
                e.report_id,
              ),
            ),
        ],
      }),
    ],
  });
}
function W(e) {
  let { report: t, reporterStatus: n } = e,
    r = l(t.reporter_steamid);
  if (!r.isSuccess || !r.data?.public_data) return null;
  let i = !!t.time_disputed && t.dispute_resolved === 0,
    a = t.resolved !== 0 && (!t.time_disputed || t.dispute_resolved !== 0),
    o = t.time_dispute_resolved !== 0,
    s = t.resolved === 1,
    u = r.data.public_data.persona_name;
  return (0, F.jsxs)(`tr`, {
    children: [
      (0, F.jsx)(`td`, {
        children: (0, F.jsx)(b, {
          size: `2`,
          children: y(t.time_reported, !1, ``),
        }),
      }),
      (0, F.jsx)(`td`, {
        children: (0, F.jsxs)(`div`, {
          className: j,
          children: [
            (0, F.jsx)(`a`, {
              href: `${x.COMMUNITY_BASE_URL}profiles/${t.reporter_steamid}`,
              children: (0, F.jsx)(c, {
                playerLinkDetails: r.data,
                size: `X-Small`,
                alt: `Reporter`,
              }),
            }),
            (0, F.jsx)(B, {
              steamid: t.reporter_steamid,
              strPersonaName: u,
              status: n,
            }),
          ],
        }),
      }),
      (0, F.jsx)(`td`, {
        children: (0, F.jsxs)(b, {
          as: `div`,
          size: `2`,
          children: [
            !a &&
              (0, F.jsx)(`span`, {
                children: d.Localize(`#moderation_resolutionstatus_pending`),
              }),
            s &&
              !i &&
              !o &&
              (0, F.jsx)(`span`, {
                children: h.Localize(
                  `#contentreportslist_acquitted_at`,
                  y(t.time_resolved, !1, ``),
                ),
              }),
            a &&
              !s &&
              !i &&
              !o &&
              (0, F.jsx)(`span`, {
                children: h.Localize(
                  `#contentreportslist_resolved_at`,
                  y(t.time_resolved, !1, ``),
                ),
              }),
            i &&
              !o &&
              (0, F.jsx)(`span`, {
                children: h.Localize(
                  `#contentreportslist_disputed_at`,
                  y(t.time_disputed, !1, ``),
                ),
              }),
            o &&
              (0, F.jsx)(`span`, {
                children: h.Localize(
                  `#contentreportslist_dispute_resolved_at`,
                  y(t.time_dispute_resolved, !1, ``),
                ),
              }),
          ],
        }),
      }),
      (0, F.jsxs)(`td`, {
        children: [
          (0, F.jsx)(b, { as: `div`, size: `2`, children: f(t.report_reason) }),
          !!t.report_text &&
            (0, F.jsxs)(b, {
              as: `div`,
              size: `2`,
              marginTop: `1`,
              children: [
                (0, F.jsx)(b, {
                  size: `1`,
                  weight: `heavy`,
                  contrast: `description`,
                  children: `Report: `,
                }),
                t.report_text,
              ],
            }),
          !!t.time_disputed &&
            !!t.dispute_details &&
            (0, F.jsxs)(b, {
              as: `div`,
              size: `2`,
              marginTop: `1`,
              children: [
                (0, F.jsx)(b, {
                  size: `1`,
                  weight: `heavy`,
                  contrast: `description`,
                  children: `Dispute: `,
                }),
                t.dispute_details,
              ],
            }),
        ],
      }),
    ],
  });
}
var G = e(t(), 1),
  K = `cjaqlMfwUaA-`,
  q = `Ne8mPzs8UgE-`,
  J = [
    [0, `#moderation_escalationlevel_any`],
    [1, `#moderation_escalationlevel_supervisor`],
    [10, `#moderation_escalationlevel_valve`],
  ];
function Y(e) {
  return (e?.required_moderator_level ?? 0) < 10;
}
function X(e) {
  let { reportedContentID: t, onClose: n } = e,
    r = e.eCurrentLevel ?? 0,
    a = J.filter(([e]) => e > r),
    [s, c] = (0, G.useState)(10),
    l = o(t),
    [u, f] = (0, G.useState)(``);
  return (0, F.jsxs)(_, {
    className: K,
    children: [
      (0, F.jsx)(_, {
        children: h.Localize(`#moderation_escalation_description`),
      }),
      (0, F.jsx)(`select`, {
        className: q,
        value: s,
        onChange: (e) => c(parseInt(e.target.value)),
        children: a.map(([e, t]) =>
          (0, F.jsx)(`option`, { value: e, children: h.Localize(t) }, e),
        ),
      }),
      (0, F.jsx)(`label`, {
        children: h.Localize(`#moderation_escalation_escalationnote`),
      }),
      (0, F.jsx)(i, { onTextChange: f, value: u }),
      (0, F.jsxs)(C, {
        direction: `row`,
        justify: `end`,
        gap: `2`,
        marginTop: `2`,
        children: [
          (0, F.jsx)(m, {
            color: `dull`,
            onClick: n,
            children: d.Localize(`#moderation_cancel`),
          }),
          (0, F.jsx)(m, {
            onClick: async () => {
              (await l.mutateAsync({ eNewLevel: s, strNote: u }), n());
            },
            disabled: a.length == 0,
            loading: l.isPending,
            children: h.Localize(`#moderation_escalation_escalate`),
          }),
        ],
      }),
    ],
  });
}
export { U as i, X as n, I as r, Y as t };
