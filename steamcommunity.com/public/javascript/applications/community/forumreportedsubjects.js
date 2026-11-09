/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { K as t, Pt as n, ot as r } from "./libraries.js";
import { c as i } from "./moderationqueries.js";
import { t as a } from "./throbber.js";
import {
  $ as o,
  N as s,
  Qm as c,
  dm as l,
  k as u,
  qp as d,
  ul as f,
  xu as p,
} from "./main.js";
var m = `_9-W7SdmsKXY-`,
  h = `ek4QiIo5ajA-`,
  g = `kJDQZr8W-ho-`,
  _ = `-LcpvovFNxA-`,
  v = `fMQqI-SP2pY-`,
  y = e(n()),
  b = r();
function x(e) {
  let t = i({ subject_type: 1, topic: e.gidTopic }),
    n = D(e.clanSteamID, 7, e.gidForum, e.gidTopic);
  return (0, b.jsx)(S, {
    subjectType: 1,
    subjectGroupQuery: t,
    commentThreadQuery: n,
  });
}
function S(e) {
  let { subjectGroupQuery: t } = e,
    n = `floatingforumreportedsubjectslist`,
    [r, i] = (0, y.useState)(() => localStorage[n] !== void 0);
  if (
    ((0, y.useMemo)(() => {
      t.data?.subjects?.sort(w);
    }, [t.data?.subjects]),
    !t.isSuccess || !t.data?.subjects || t.data.subjects.length === 0)
  )
    return null;
  let s = () => {
      r ? localStorage.removeItem(n) : localStorage.setItem(n, `1`), i(!r);
    },
    c = 0;
  return (0, b.jsx)(`div`, {
    className: r ? m : (e.inlineClassNames ?? ``),
    children: (0, b.jsx)(`div`, {
      className: `rightbox`,
      children: (0, b.jsxs)(`div`, {
        className: `content`,
        children: [
          (0, b.jsx)(`div`, {
            className: `rightbox_list_header`,
            children: (0, b.jsxs)(`span`, {
              className: h,
              children: [
                (0, b.jsx)(`div`, {
                  className: `title`,
                  children: o.Localize(`#reportedsubjectlist_header`),
                }),
                (0, b.jsx)(`button`, {
                  className: g,
                  onClick: s,
                  children: (0, b.jsx)(f, {}),
                }),
              ],
            }),
          }),
          t.isError &&
            (0, b.jsx)(`div`, {
              className: `moderatorToolLink`,
              children: `Error`,
            }),
          t.isLoading && (0, b.jsx)(a, {}),
          t.isSuccess &&
            (0, b.jsx)(`div`, {
              style: { maxHeight: `20em`, overflowY: `scroll` },
              children: t.data.subjects.map((t) =>
                t.coordinates
                  ? (0, b.jsx)(
                      E,
                      { subject: t, commentThreadQuery: e.commentThreadQuery },
                      t.reported_content_id,
                    )
                  : (0, b.jsx)(
                      `div`,
                      {
                        className: p(`moderatorToolLink`, `-LcpvovFNxA-`),
                        children: `Bug - inform Valve`,
                      },
                      `bad-${c++}`,
                    ),
              ),
            }),
        ],
      }),
    }),
  });
}
function C(e, t) {
  if (e.length !== t.length) return e.length - t.length;
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n),
      i = t.charCodeAt(n);
    if (r !== i) return r - i;
  }
  return 0;
}
function w(e, t) {
  let n = +(e.unresolved_dispute_count + e.unresolved_report_count > 0);
  return (
    +(t.unresolved_dispute_count + t.unresolved_report_count > 0) - n ||
    t.required_moderator_level - e.required_moderator_level ||
    C(e.coordinates?.comment ?? ``, t.coordinates?.comment ?? ``)
  );
}
function T(e) {
  for (;;) {
    let t = e.indexOf(`[/quote]`);
    if (t === -1) break;
    e = e.slice(t + 8);
  }
  return e.slice(0, 35);
}
function E(e) {
  let { subject: t, commentThreadQuery: n } = e,
    r = t.coordinates?.comment,
    i = null;
  r === `0` && (i = `Topic`);
  let a = `#NA`;
  if (i === null && n.isSuccess) {
    let e = 1;
    for (let t of n.data.comments ?? []) {
      if (t.gidcomment === r) {
        (i = T(t.text)), (a = `#${e}`);
        break;
      }
      e++;
    }
  }
  if (i === null && n.isSuccess) {
    if (t.subject_type === 2) i = `[Deleted]`;
    else
      for (let e of n.data.deleted_comments ?? [])
        if (e.gidcomment === r) {
          i = T(e.text);
          break;
        }
  }
  i === null && (i = `[Comment]`);
  let s;
  t.subject_type === 1
    ? (s = r === `0` ? `#forum_op_${t.coordinates?.topic}` : `#c${r}`)
    : t.subject_type === 2 && (s = `#comment_${r}`);
  let c = t.unresolved_dispute_count > 0 || t.unresolved_report_count > 0,
    u = t.required_moderator_level === 10,
    d = t.required_moderator_level === 1;
  return (0, b.jsxs)(`div`, {
    className: p(`moderatorToolLink`, _),
    children: [
      (0, b.jsxs)(`a`, {
        href: s,
        children: [
          c &&
            !u &&
            !d &&
            (0, b.jsx)(`img`, {
              className: `pSFLKLsjgbM-`,
              src: `${l.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
            }),
          !c &&
            (0, b.jsx)(`span`, { className: `pSFLKLsjgbM-`, children: `\xA0` }),
          c &&
            u &&
            (0, b.jsx)(`span`, {
              className: p(`pSFLKLsjgbM-`, `W8Ft0tBdYIM-`),
              children: `VO`,
            }),
          c &&
            d &&
            (0, b.jsx)(`span`, {
              className: p(`pSFLKLsjgbM-`, `sERoHMrC-4o-`),
              children: `▲`,
            }),
          `\xA0`,
          a,
          `\xA0`,
          i,
        ],
      }),
      (0, b.jsxs)(`div`, {
        className: v,
        children: [
          `\xA0`,
          o.Localize(
            `#forumsubjectlist_subjectreportsummary`,
            t.unresolved_report_count,
            t.unresolved_dispute_count,
          ),
        ],
      }),
    ],
  });
}
function D(e, n, r, i) {
  let a = d();
  return t({
    queryKey: [`comment_thread`, e, n, r, i],
    queryFn: async () => {
      let t = c.Init(u);
      return (
        t.Body().set_steamid(e),
        t.Body().set_comment_thread_type(n),
        r !== -1 && t.Body().set_gidfeature(r),
        i !== -1 && t.Body().set_gidfeature2(i),
        t.Body().set_include_deleted(!0),
        t.Body().set_oldest_first(!0),
        (await s.GetCommentThread(a, t)).Body().toObject()
      );
    },
  });
}
export { S as ReportedSubjectList, x as default, D as useCommentThread };
