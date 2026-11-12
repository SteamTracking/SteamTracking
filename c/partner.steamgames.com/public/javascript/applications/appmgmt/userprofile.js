import { _, _, _, _ } from "./chunk~de7f2df91c.js";
import { _ } from "./chunk~25a6634263.js";
import "./chunk~a6b9ae1345.js";
import { _, _ } from "./chunk~ec644f97c6.js";
var _ = _(_()),
  _ = `w1edBej-iT4-`,
  _ = _();
function _(_) {
  let {
      accountID: _,
      bHideWhenNotAvailable: _,
      bHideName: _,
      bLink: _ = !0,
    } = _,
    [_] = _(_),
    _ = _(_),
    _ = _.useMemo(() => _.InitFromAccountID(_, _.EUNIVERSE), [_]),
    _ = `${_.COMMUNITY_BASE_URL}profiles/${_.ConvertTo64BitString()}`;
  return (0, _.jsx)(_.Fragment, {
    children: _
      ? (0, _.jsxs)(_ ? `a` : `span`, {
          href: _ ? _ : void 0,
          children: [
            (0, _.jsx)(`img`, {
              className: _,
              src: _.avatar_url,
              "data-miniprofile": `s` + _.ConvertTo64BitString(),
            }),
            !_ &&
              (0, _.jsx)(`span`, {
                children: _ ? `${_} (${_.persona_name})` : _.persona_name,
              }),
          ],
        })
      : (0, _.jsx)(_.Fragment, {
          children:
            !_ &&
            (0, _.jsx)(`span`, {
              children: _,
            }),
        }),
  });
}
