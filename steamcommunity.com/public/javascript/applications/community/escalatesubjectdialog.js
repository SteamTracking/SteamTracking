/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Pt as t, ot as n } from "./libraries.js";
import { t as r } from "./textlink.js";
import { t as i } from "./textarea.js";
import { i as a, l as o, o as s } from "./moderationqueries.js";
import { n as c } from "./steamavatar.js";
import { t as l } from "./playerlinkdetailsquery.js";
import { t as u } from "./throbber.js";
import {
  $ as d,
  B as f,
  Bt as p,
  Cu as m,
  H as h,
  Ht as g,
  Jt as _,
  R as v,
  V as y,
  bt as b,
  dm as x,
  et as S,
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
              children: (0, N.jsx)(p, {
                size: `2`,
                children: d.Localize(`#subjectauditlog_noentries`),
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
              children: (0, N.jsx)(p, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Date`,
              }),
            }),
            (0, N.jsx)(`th`, {
              children: (0, N.jsx)(p, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Actor`,
              }),
            }),
            (0, N.jsx)(`th`, {
              children: (0, N.jsx)(p, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Action`,
              }),
            }),
            (0, N.jsx)(`th`, {
              children: (0, N.jsx)(p, {
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
                      children: (0, N.jsx)(p, {
                        size: `2`,
                        children: d.Localize(`#subjectauditlog_noentries`),
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
                            children: (0, N.jsx)(p, {
                              size: `2`,
                              children: d.Localize(`#subjectauditlog_error`),
                            }),
                          }),
                        }),
                      t.isSuccess &&
                        n === 0 &&
                        (0, N.jsx)(`tr`, {
                          children: (0, N.jsx)(`td`, {
                            colSpan: 4,
                            children: (0, N.jsx)(p, {
                              size: `2`,
                              children: d.Localize(
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
  let { steamid: t, strPersonaName: n, bIsSupportAccount: i } = e;
  return (0, N.jsxs)(N.Fragment, {
    children: [
      (0, N.jsx)(`span`, {
        className: j,
        children: (0, N.jsx)(r, {
          href: `${x.COMMUNITY_BASE_URL}profiles/${t}`,
          children: (0, N.jsx)(p, {
            size: `2`,
            truncate: !0,
            title: n,
            className: M,
            weight: i ? `heavy` : void 0,
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
        children: (0, N.jsx)(p, {
          size: `2`,
          children: b(t.timestamp, !1, ``),
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
            }),
            (0, N.jsx)(r, {
              size: `2`,
              href: `${x.COMMUNITY_BASE_URL}moderation/activity/${t.actor_steamid}`,
              children: `(activity)`,
            }),
          ],
        }),
      }),
      (0, N.jsx)(`td`, {
        children: (0, N.jsxs)(p, {
          size: `2`,
          children: [
            h(t.action),
            t.automated_action &&
              (0, N.jsx)(N.Fragment, { children: `\xA0(Automated)` }),
          ],
        }),
      }),
      (0, N.jsx)(`td`, {
        children: (0, N.jsx)(p, {
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
              children: [(0, N.jsx)(`br`, {}), `Resolution: `, y(r.resolution)],
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
    i = o(t?.reported_content_id, !0),
    a = new Set(
      (i.data?.subject?.reports ?? [])
        .filter((e) => e.reporter_is_support)
        .map((e) => e.reporter_steamid),
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
              children: (0, N.jsx)(p, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Date`,
              }),
            }),
            (0, N.jsx)(`th`, {
              children: (0, N.jsx)(p, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Reporter`,
              }),
            }),
            (0, N.jsx)(`th`, {
              children: (0, N.jsx)(p, {
                size: `2`,
                weight: `heavy`,
                contrast: `description`,
                children: `Status`,
              }),
            }),
            (0, N.jsx)(`th`, {
              children: (0, N.jsx)(p, {
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
                children: (0, N.jsx)(p, {
                  size: `2`,
                  children: d.Localize(`#contentreportslist_noreports`),
                }),
              }),
            }),
          n &&
            r.map((e) =>
              (0, N.jsx)(
                H,
                { report: e, bReporterIsSupport: a.has(e.reporter_steamid) },
                e.report_id,
              ),
            ),
        ],
      }),
    ],
  });
}
function H(e) {
  let { report: t, bReporterIsSupport: n } = e,
    r = l(t.reporter_steamid);
  if (!r.isSuccess || !r.data?.public_data) return null;
  let i = !!t.time_disputed && t.dispute_resolved === 0,
    a = t.resolved !== 0 && (!t.time_disputed || t.dispute_resolved !== 0),
    o = t.time_dispute_resolved !== 0,
    s = t.resolved === 1,
    u = r.data.public_data.persona_name;
  return (0, N.jsxs)(`tr`, {
    children: [
      (0, N.jsx)(`td`, {
        children: (0, N.jsx)(p, {
          size: `2`,
          children: b(t.time_reported, !1, ``),
        }),
      }),
      (0, N.jsx)(`td`, {
        children: (0, N.jsxs)(`div`, {
          className: A,
          children: [
            (0, N.jsx)(`a`, {
              href: `${x.COMMUNITY_BASE_URL}profiles/${t.reporter_steamid}`,
              children: (0, N.jsx)(c, {
                playerLinkDetails: r.data,
                size: `X-Small`,
                alt: `Reporter`,
              }),
            }),
            (0, N.jsx)(R, {
              steamid: t.reporter_steamid,
              strPersonaName: u,
              bIsSupportAccount: n,
            }),
          ],
        }),
      }),
      (0, N.jsx)(`td`, {
        children: (0, N.jsxs)(p, {
          as: `div`,
          size: `2`,
          children: [
            !a &&
              (0, N.jsx)(`span`, {
                children: S.Localize(`#moderation_resolutionstatus_pending`),
              }),
            s &&
              !i &&
              !o &&
              (0, N.jsx)(`span`, {
                children: d.Localize(
                  `#contentreportslist_acquitted_at`,
                  b(t.time_resolved, !1, ``),
                ),
              }),
            a &&
              !s &&
              !i &&
              !o &&
              (0, N.jsx)(`span`, {
                children: d.Localize(
                  `#contentreportslist_resolved_at`,
                  b(t.time_resolved, !1, ``),
                ),
              }),
            i &&
              !o &&
              (0, N.jsx)(`span`, {
                children: d.Localize(
                  `#contentreportslist_disputed_at`,
                  b(t.time_disputed, !1, ``),
                ),
              }),
            o &&
              (0, N.jsx)(`span`, {
                children: d.Localize(
                  `#contentreportslist_dispute_resolved_at`,
                  b(t.time_dispute_resolved, !1, ``),
                ),
              }),
          ],
        }),
      }),
      (0, N.jsxs)(`td`, {
        children: [
          (0, N.jsx)(p, { as: `div`, size: `2`, children: f(t.report_reason) }),
          !!t.report_text &&
            (0, N.jsxs)(p, {
              as: `div`,
              size: `2`,
              marginTop: `1`,
              children: [
                (0, N.jsx)(p, {
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
            (0, N.jsxs)(p, {
              as: `div`,
              size: `2`,
              marginTop: `1`,
              children: [
                (0, N.jsx)(p, {
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
    [o, c] = (0, U.useState)(10),
    l = s(t),
    [u, f] = (0, U.useState)(``);
  return (0, N.jsxs)(m, {
    className: W,
    children: [
      (0, N.jsx)(m, {
        children: d.Localize(`#moderation_escalation_description`),
      }),
      (0, N.jsx)(`select`, {
        className: G,
        value: o,
        onChange: (e) => c(parseInt(e.target.value)),
        children: a.map(([e, t]) =>
          (0, N.jsx)(`option`, { value: e, children: d.Localize(t) }, e),
        ),
      }),
      (0, N.jsx)(`label`, {
        children: d.Localize(`#moderation_escalation_escalationnote`),
      }),
      (0, N.jsx)(i, { onTextChange: f, value: u }),
      (0, N.jsxs)(_, {
        direction: `row`,
        justify: `end`,
        gap: `2`,
        marginTop: `2`,
        children: [
          (0, N.jsx)(g, {
            color: `dull`,
            onClick: n,
            children: S.Localize(`#moderation_cancel`),
          }),
          (0, N.jsx)(g, {
            onClick: async () => {
              (await l.mutateAsync({ eNewLevel: o, strNote: u }), n());
            },
            disabled: a.length == 0,
            loading: l.isPending,
            children: d.Localize(`#moderation_escalation_escalate`),
          }),
        ],
      }),
    ],
  });
}
export { V as i, J as n, P as r, q as t };
