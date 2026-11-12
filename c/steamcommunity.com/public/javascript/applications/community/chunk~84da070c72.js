import { _ } from "./chunk~01cfc309bf.js";
import { _, _, _ } from "./chunk~1e67c3e4e4.js";
import { _ } from "./chunk~3a8474f307.js";
var _ = _();
function _(_) {
  let { steamid: _, commentThreadID: _, gidComment: _, authorSteamID: _ } = _,
    _ = _({
      subject_type: 2,
      comment_thread_id: _,
    }),
    _ = _(_, _, _),
    _ = _(_, _, _),
    _ = (_.data?.subjects ?? []).find((_) => _.coordinates?.comment === _);
  return (0, _.jsx)(_, {
    sanctionMutation: _,
    acquitMutation: _,
    subject: _,
    eSubjectType: 2,
    gidComment: _,
    authorSteamID: _,
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`div`, {
        children: [`SteamID: `, _.steamid],
      }),
      (0, _.jsxs)(`div`, {
        children: [`CommentThreadID: `, _.commentThreadID],
      }),
      (0, _.jsxs)(`div`, {
        children: [`CommentGID: `, _.gidComment],
      }),
    ],
  });
}
export { _ as default };
