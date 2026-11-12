/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { G as e, at as t, ot as n } from "./chunk~01cfc309bf.js";
import { c as r, n as i } from "./chunk~1e67c3e4e4.js";
import { t as a } from "./chunk~3a8474f307.js";
import { Q as o, X as s, Y as c, Z as l, Zp as u, nh as d } from "./main.js";
import { t as f } from "./chunk~f0745bb5e2.js";
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
function g(n, r, a, s, l) {
  let f = u(),
    p = t();
  return e({
    mutationFn: async () => {
      let e = d.Init(c);
      (e.Body().set_steamid(n),
        e.Body().set_gidforum(r),
        e.Body().set_gidtopic(a),
        e.Body().set_gidpost(s));
      let t = await o.ResolveReportedPost(f, e);
      if (!t.BSuccess())
        throw Error(`Failed to acquit forum comment: ` + t.GetEMsg());
    },
    onSuccess: async (e) => {
      await i(p, l);
    },
  });
}
function _(n, r, a, c, f) {
  let p = u(),
    m = t();
  return e({
    mutationFn: async (e) => {
      let t = d.Init(s);
      (t.Body().set_steamid(n),
        t.Body().set_gidforum(r),
        t.Body().set_gidtopic(a),
        t.Body().set_gidpost(c),
        t.Body().set_reason(e.reason),
        t.Body().set_note(e.message));
      for (let n of e.sanctions) {
        let e = new l();
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
