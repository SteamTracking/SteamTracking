/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { G as e, at as t, ot as n } from "./libraries.js";
import { c as r, n as i } from "./moderationqueries.js";
import { t as a } from "./moderationdialog.js";
import { Q as o, Qm as s, X as c, Y as l, Z as u, qp as d } from "./main.js";
import { t as f } from "./copytoclipboardbutton.js";
var p = n();
function m(e) {
  let t = (r({ subject_type: 1, topic: e.topicId }).data?.subjects ?? []).find(
      (t) => t.coordinates?.comment === e.subjectId,
    ),
    n = _(
      e.clanSteamId,
      e.forumId,
      e.topicId,
      e.subjectId,
      t?.reported_content_id,
    ),
    i = g(
      e.clanSteamId,
      e.forumId,
      e.topicId,
      e.subjectId,
      t?.reported_content_id,
    );
  return (0, p.jsx)(a, {
    sanctionMutation: n,
    acquitMutation: i,
    subject: t,
    eSubjectType: 1,
    gidComment: e.subjectId,
    authorSteamID: e.authorSteamId,
    clanSteamID: e.clanSteamId,
    children: (0, p.jsx)(h, { ...e }),
  });
}
function h(e) {
  return (0, p.jsx)(`table`, {
    children: (0, p.jsxs)(`tbody`, {
      children: [
        (0, p.jsxs)(`tr`, {
          children: [
            (0, p.jsx)(`td`, { children: `Clan SteamID:` }),
            (0, p.jsxs)(`td`, {
              children: [
                e.clanSteamId,
                ` `,
                (0, p.jsx)(f, { text: e.clanSteamId, size: `small` }),
              ],
            }),
          ],
        }),
        (0, p.jsxs)(`tr`, {
          children: [
            (0, p.jsx)(`td`, { children: `Forum GID:` }),
            (0, p.jsxs)(`td`, {
              children: [
                e.forumId,
                ` `,
                (0, p.jsx)(f, { text: e.forumId, size: `small` }),
              ],
            }),
          ],
        }),
        (0, p.jsxs)(`tr`, {
          children: [
            (0, p.jsx)(`td`, { children: `Topic GID:` }),
            (0, p.jsxs)(`td`, {
              children: [
                e.topicId,
                ` `,
                (0, p.jsx)(f, { text: e.topicId, size: `small` }),
              ],
            }),
          ],
        }),
        e.subjectId !== `0` &&
          (0, p.jsxs)(`tr`, {
            children: [
              (0, p.jsx)(`td`, { children: `Comment GID:` }),
              (0, p.jsxs)(`td`, {
                children: [
                  e.subjectId,
                  ` `,
                  (0, p.jsx)(f, { text: e.subjectId, size: `small` }),
                ],
              }),
            ],
          }),
      ],
    }),
  });
}
function g(n, r, a, c, u) {
  let f = d(),
    p = t();
  return e({
    mutationFn: async () => {
      let e = s.Init(l);
      (e.Body().set_steamid(n),
        e.Body().set_gidforum(r),
        e.Body().set_gidtopic(a),
        e.Body().set_gidpost(c));
      let t = await o.ResolveReportedPost(f, e);
      if (!t.BSuccess())
        throw Error(`Failed to acquit forum comment: ` + t.GetEMsg());
    },
    onSuccess: async (e) => {
      await i(p, u);
    },
  });
}
function _(n, r, a, l, f) {
  let p = d(),
    m = t();
  return e({
    mutationFn: async (e) => {
      let t = s.Init(c);
      (t.Body().set_steamid(n),
        t.Body().set_gidforum(r),
        t.Body().set_gidtopic(a),
        t.Body().set_gidpost(l),
        t.Body().set_reason(e.reason),
        t.Body().set_note(e.message));
      for (let n of e.sanctions) {
        let e = new u();
        (e.set_sanction(n.sanction),
          n.days !== void 0 && e.set_days(n.days),
          t.Body().add_sanctions(e));
      }
      let i = await o.SanctionReportedPost(p, t);
      if (!i.BSuccess())
        throw Error(
          `Failed to sanction forum comment: (` +
            i.GetEResult() +
            `) ` +
            i.GetErrorMessage(),
        );
    },
    onSuccess: async (e) => {
      await i(m, f);
    },
  });
}
export {
  m as default,
  g as useAcquitForumComment,
  _ as useSanctionForumComment,
};
