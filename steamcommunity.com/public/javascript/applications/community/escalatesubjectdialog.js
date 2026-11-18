/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Ft as t, ot as n } from "./chunk~01cfc309bf.js";
import { t as r } from "./chunk~cfd048ddd7.js";
import { t as i } from "./chunk~91ffd0567f.js";
import { a, s as o, u as s } from "./chunk~1e67c3e4e4.js";
import { n as c } from "./chunk~6c2bf73948.js";
import { t as l } from "./chunk~bdc7e21194.js";
import { t as u } from "./chunk~eefd71512b.js";
import {
  $ as d,
  B as f,
  Du as p,
  Gt as m,
  H as h,
  It as g,
  Q as _,
  R as v,
  Rt as y,
  V as b,
  gt as x,
  ym as S,
  z as C,
} from "./main.js";
var w = `xLywNz6knuU-`,
  T = `nA9MaZPmXRU-`,
  E = `WS9SvilWIXE-`,
  D = `aO8lOVQNngE-`,
  O = `hosEjyB9L6s-`,
  k = `QTrmbby5x-U-`,
  A = `U5fa7ynZKdY-`,
  j = `WN24eWEAUSk-`,
  M = `Dm1bd-TdIjE-`,
  N = n();
function P(e) {
  let { reportedContentID: t } = e;
  return t ? (0, N.jsx)(L, { ...e }) : (0, N.jsx)(F, {});
}
function F(e) {
  return (0, N.jsx)(`div`, {
    children: (0, N.jsxs)(`table`, {
      className: w,
      children: [
        (0, N.jsx)(I, {}),
        (0, N.jsx)(`tbody`, {
          children: (0, N.jsx)(`tr`, {
            children: (0, N.jsx)(`td`, {
              colSpan: 4,
              children: (0, N.jsx)(g, {
                size: `2`,
                children: _.Localize(`#subjectauditlog_noentries`),
              }),
            }),
          }),
        }),
      ],
    }),
  });
}
function I() {
  return (0, N.jsxs)(N.Fragment, {
    children: [
      (0, N.jsxs)(`colgroup`, {
        children: [
          (0, N.jsx)(`col`, { className: T }),
          (0, N.jsx)(`col`, { className: O }),
          (0, N.jsx)(`col`, { className: k }),
          (0, N.jsx)(`col`, {}),
        ],
      }),
      (0, N.jsx)(`thead`, {
        children: (0, N.jsxs)(`tr`, {
          children: [
            (0, N.jsx)(`th`, {
              children: (0, N.jsx)(g, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Date`,
              }),
            }),
            (0, N.jsx)(`th`, {
              children: (0, N.jsx)(g, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Actor`,
              }),
            }),
            (0, N.jsx)(`th`, {
              children: (0, N.jsx)(g, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Action`,
              }),
            }),
            (0, N.jsx)(`th`, {
              children: (0, N.jsx)(g, {
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
function L(e) {
  let t = a(e.reportedContentID),
    n = t?.data?.entries?.length ?? 0,
    r = t.data?.entries ?? [];
  return (
    r.sort((e, t) => t.timestamp - e.timestamp),
    (0, N.jsx)(`div`, {
      children:
        n > 0 &&
        (0, N.jsxs)(`table`, {
          className: `xLywNz6knuU-`,
          children: [
            (0, N.jsx)(I, {}),
            (0, N.jsxs)(`tbody`, {
              children: [
                t === void 0 &&
                  (0, N.jsx)(`tr`, {
                    children: (0, N.jsx)(`td`, {
                      colSpan: 4,
                      children: (0, N.jsx)(g, {
                        size: `2`,
                        children: _.Localize(`#subjectauditlog_noentries`),
                      }),
                    }),
                  }),
                t &&
                  (0, N.jsxs)(N.Fragment, {
                    children: [
                      t.isLoading &&
                        (0, N.jsx)(`tr`, {
                          children: (0, N.jsx)(`td`, {
                            colSpan: 4,
                            children: (0, N.jsx)(u, {}),
                          }),
                        }),
                      t.isError &&
                        (0, N.jsx)(`tr`, {
                          children: (0, N.jsx)(`td`, {
                            colSpan: 4,
                            children: (0, N.jsx)(g, {
                              size: `2`,
                              children: _.Localize(`#subjectauditlog_error`),
                            }),
                          }),
                        }),
                      t.isSuccess &&
                        n === 0 &&
                        (0, N.jsx)(`tr`, {
                          children: (0, N.jsx)(`td`, {
                            colSpan: 4,
                            children: (0, N.jsx)(g, {
                              size: `2`,
                              children: _.Localize(
                                `#subjectauditlog_noentries`,
                              ),
                            }),
                          }),
                        }),
                      t.isSuccess &&
                        n > 0 &&
                        r.map((e) => (0, N.jsx)(z, { entry: e }, e.timestamp)),
                    ],
                  }),
              ],
            }),
          ],
        }),
    })
  );
}
function R(e) {
  let {
    steamid: t,
    strPersonaName: n,
    bIsSupportAccount: i,
    bIsDeveloperAccount: a,
  } = e;
  return (0, N.jsxs)(N.Fragment, {
    children: [
      (0, N.jsx)(`span`, {
        className: j,
        children: (0, N.jsx)(r, {
          href: `${S.COMMUNITY_BASE_URL}profiles/${t}`,
          children: (0, N.jsx)(g, {
            size: `2`,
            truncate: !0,
            title: n,
            className: M,
            children: n,
          }),
        }),
      }),
      i &&
        (0, N.jsx)(`span`, {
          className: `yMtdDuggCPo-`,
          title: `Support or Admin account`,
          children: `Mod`,
        }),
      a &&
        (0, N.jsx)(`span`, {
          className: `yMtdDuggCPo-`,
          title: `Partner account for this item's app`,
          children: `Dev`,
        }),
    ],
  });
}
function z(e) {
  let { entry: t } = e,
    n = l(t.actor_steamid);
  if (!n.isSuccess || !n.data) return null;
  let i = n.data.public_data?.persona_name;
  return (0, N.jsxs)(`tr`, {
    children: [
      (0, N.jsx)(`td`, {
        children: (0, N.jsx)(g, {
          size: `2`,
          children: x(t.timestamp, !1, ``),
        }),
      }),
      (0, N.jsx)(`td`, {
        children: (0, N.jsxs)(`div`, {
          className: A,
          children: [
            (0, N.jsx)(R, {
              steamid: t.actor_steamid,
              strPersonaName: i,
              bIsSupportAccount: t.actor_is_support,
              bIsDeveloperAccount: t.actor_is_developer,
            }),
            (0, N.jsx)(r, {
              size: `2`,
              href: `${S.COMMUNITY_BASE_URL}moderation/activity/${t.actor_steamid}`,
              children: `(activity)`,
            }),
          ],
        }),
      }),
      (0, N.jsx)(`td`, {
        children: (0, N.jsxs)(g, {
          size: `2`,
          children: [
            h(t.action),
            t.automated_action &&
              (0, N.jsx)(N.Fragment, { children: `\xA0(Automated)` }),
          ],
        }),
      }),
      (0, N.jsx)(`td`, {
        children: (0, N.jsx)(g, {
          as: `div`,
          size: `2`,
          children: (0, N.jsx)(B, {
            eAction: t.action,
            jsonData: t.additional_json_data,
          }),
        }),
      }),
    ],
  });
}
function B(e) {
  let { eAction: t, jsonData: n } = e,
    r = {};
  n && (r = JSON.parse(n));
  let i = r.report_id
    ? (0, N.jsxs)(`span`, { children: [`Report ID: `, r.report_id] })
    : null;
  switch (t) {
    case 1:
      return i;
    case 2:
      return (0, N.jsxs)(N.Fragment, {
        children: [
          `Reason: `,
          f(r.reason),
          r.resolution !== 1 &&
            r.resolution !== 14 &&
            (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)(`br`, {}), `Resolution: `, b(r.resolution)],
            }),
          r.sanctions &&
            (0, N.jsxs)(N.Fragment, {
              children: [
                (0, N.jsx)(`br`, {}),
                `Sanctions: `,
                r.sanctions.map(v).join(`, `),
              ],
            }),
        ],
      });
    case 4:
      return i;
    case 5:
      return (0, N.jsx)(N.Fragment, {
        children: JSON.stringify(r, null, `	`),
      });
    case 6:
      return (0, N.jsxs)(N.Fragment, { children: [`New level: `, C(r.level)] });
    case 7:
      return i;
    default:
      return null;
  }
}
function V(e) {
  let { subject: t } = e,
    n = t && t.reports && t.reports.length > 0,
    r = [...(t?.reports ?? [])].sort(
      (e, t) => (t.time_reported ?? 0) - (e.time_reported ?? 0),
    ),
    i = s(t?.reported_content_id, !0).data?.subject?.reports ?? [],
    a = new Set(
      i.filter((e) => e.reporter_is_support).map((e) => e.reporter_steamid),
    ),
    o = new Set(
      i.filter((e) => e.reporter_is_developer).map((e) => e.reporter_steamid),
    );
  return (0, N.jsxs)(`table`, {
    className: w,
    children: [
      (0, N.jsxs)(`colgroup`, {
        children: [
          (0, N.jsx)(`col`, { className: T }),
          (0, N.jsx)(`col`, { className: E }),
          (0, N.jsx)(`col`, { className: D }),
          (0, N.jsx)(`col`, {}),
        ],
      }),
      (0, N.jsx)(`thead`, {
        children: (0, N.jsxs)(`tr`, {
          children: [
            (0, N.jsx)(`th`, {
              children: (0, N.jsx)(g, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Date`,
              }),
            }),
            (0, N.jsx)(`th`, {
              children: (0, N.jsx)(g, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Reporter`,
              }),
            }),
            (0, N.jsx)(`th`, {
              children: (0, N.jsx)(g, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Status`,
              }),
            }),
            (0, N.jsx)(`th`, {
              children: (0, N.jsx)(g, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Reason`,
              }),
            }),
          ],
        }),
      }),
      (0, N.jsxs)(`tbody`, {
        children: [
          !n &&
            (0, N.jsx)(`tr`, {
              children: (0, N.jsx)(`td`, {
                colSpan: 4,
                children: (0, N.jsx)(g, {
                  size: `2`,
                  children: _.Localize(`#contentreportslist_noreports`),
                }),
              }),
            }),
          n &&
            r.map((e) =>
              (0, N.jsx)(
                H,
                {
                  report: e,
                  bReporterIsSupport: a.has(e.reporter_steamid),
                  bReporterIsDeveloper: o.has(e.reporter_steamid),
                },
                e.report_id,
              ),
            ),
        ],
      }),
    ],
  });
}
function H(e) {
  let { report: t, bReporterIsSupport: n, bReporterIsDeveloper: r } = e,
    i = l(t.reporter_steamid);
  if (!i.isSuccess || !i.data?.public_data) return null;
  let a = !!t.time_disputed && t.dispute_resolved === 0,
    o = t.resolved !== 0 && (!t.time_disputed || t.dispute_resolved !== 0),
    s = t.time_dispute_resolved !== 0,
    u = t.resolved === 1,
    p = i.data.public_data.persona_name;
  return (0, N.jsxs)(`tr`, {
    children: [
      (0, N.jsx)(`td`, {
        children: (0, N.jsx)(g, {
          size: `2`,
          children: x(t.time_reported, !1, ``),
        }),
      }),
      (0, N.jsx)(`td`, {
        children: (0, N.jsxs)(`div`, {
          className: A,
          children: [
            (0, N.jsx)(`a`, {
              href: `${S.COMMUNITY_BASE_URL}profiles/${t.reporter_steamid}`,
              children: (0, N.jsx)(c, {
                playerLinkDetails: i.data,
                size: `X-Small`,
                alt: `Reporter`,
              }),
            }),
            (0, N.jsx)(R, {
              steamid: t.reporter_steamid,
              strPersonaName: p,
              bIsSupportAccount: n,
              bIsDeveloperAccount: r,
            }),
          ],
        }),
      }),
      (0, N.jsx)(`td`, {
        children: (0, N.jsxs)(g, {
          as: `div`,
          size: `2`,
          children: [
            !o &&
              (0, N.jsx)(`span`, {
                children: d.Localize(`#moderation_resolutionstatus_pending`),
              }),
            u &&
              !a &&
              !s &&
              (0, N.jsx)(`span`, {
                children: _.Localize(
                  `#contentreportslist_acquitted_at`,
                  x(t.time_resolved, !1, ``),
                ),
              }),
            o &&
              !u &&
              !a &&
              !s &&
              (0, N.jsx)(`span`, {
                children: _.Localize(
                  `#contentreportslist_resolved_at`,
                  x(t.time_resolved, !1, ``),
                ),
              }),
            a &&
              !s &&
              (0, N.jsx)(`span`, {
                children: _.Localize(
                  `#contentreportslist_disputed_at`,
                  x(t.time_disputed, !1, ``),
                ),
              }),
            s &&
              (0, N.jsx)(`span`, {
                children: _.Localize(
                  `#contentreportslist_dispute_resolved_at`,
                  x(t.time_dispute_resolved, !1, ``),
                ),
              }),
          ],
        }),
      }),
      (0, N.jsxs)(`td`, {
        children: [
          (0, N.jsx)(g, { as: `div`, size: `2`, children: f(t.report_reason) }),
          !!t.report_text &&
            (0, N.jsxs)(g, {
              as: `div`,
              size: `2`,
              marginTop: `1`,
              children: [
                (0, N.jsx)(g, {
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
            (0, N.jsxs)(g, {
              as: `div`,
              size: `2`,
              marginTop: `1`,
              children: [
                (0, N.jsx)(g, {
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
var U = e(t(), 1),
  W = `cjaqlMfwUaA-`,
  G = `Ne8mPzs8UgE-`,
  K = [
    [0, `#moderation_escalationlevel_any`],
    [1, `#moderation_escalationlevel_supervisor`],
    [10, `#moderation_escalationlevel_valve`],
  ];
function q(e) {
  return (e?.required_moderator_level ?? 0) < 10;
}
function J(e) {
  let { reportedContentID: t, onClose: n } = e,
    r = e.eCurrentLevel ?? 0,
    a = K.filter(([e]) => e > r),
    [s, c] = (0, U.useState)(10),
    l = o(t),
    [u, f] = (0, U.useState)(``);
  return (0, N.jsxs)(p, {
    className: W,
    children: [
      (0, N.jsx)(p, {
        children: _.Localize(`#moderation_escalation_description`),
      }),
      (0, N.jsx)(`select`, {
        className: G,
        value: s,
        onChange: (e) => c(parseInt(e.target.value)),
        children: a.map(([e, t]) =>
          (0, N.jsx)(`option`, { value: e, children: _.Localize(t) }, e),
        ),
      }),
      (0, N.jsx)(`label`, {
        children: _.Localize(`#moderation_escalation_escalationnote`),
      }),
      (0, N.jsx)(i, { onTextChange: f, value: u }),
      (0, N.jsxs)(m, {
        direction: `row`,
        justify: `end`,
        gap: `2`,
        marginTop: `2`,
        children: [
          (0, N.jsx)(y, {
            color: `dull`,
            onClick: n,
            children: d.Localize(`#moderation_cancel`),
          }),
          (0, N.jsx)(y, {
            onClick: async () => {
              (await l.mutateAsync({ eNewLevel: s, strNote: u }), n());
            },
            disabled: a.length == 0,
            loading: l.isPending,
            children: _.Localize(`#moderation_escalation_escalate`),
          }),
        ],
      }),
    ],
  });
}
export { V as i, J as n, P as r, q as t };
