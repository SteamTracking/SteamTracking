/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { ot as e } from "./libraries.js";
import { c as t, d as n, r } from "./moderationqueries.js";
import { t as i } from "./moderationdialog.js";
var a = e();
function o(e) {
  let { steamid: o, commentThreadID: c, gidComment: l, authorSteamID: u } = e,
    d = t({ subject_type: 2, comment_thread_id: c }),
    f = n(o, c, l),
    p = r(o, c, l),
    m = (d.data?.subjects ?? []).find((e) => e.coordinates?.comment === l);
  return (0, a.jsx)(i, {
    sanctionMutation: f,
    acquitMutation: p,
    subject: m,
    eSubjectType: 2,
    gidComment: l,
    authorSteamID: u,
    children: (0, a.jsx)(s, { ...e }),
  });
}
function s(e) {
  return (0, a.jsxs)(a.Fragment, {
    children: [
      (0, a.jsxs)(`div`, { children: [`SteamID: `, e.steamid] }),
      (0, a.jsxs)(`div`, {
        children: [`CommentThreadID: `, e.commentThreadID],
      }),
      (0, a.jsxs)(`div`, { children: [`CommentGID: `, e.gidComment] }),
    ],
  });
}
export { o as default };
