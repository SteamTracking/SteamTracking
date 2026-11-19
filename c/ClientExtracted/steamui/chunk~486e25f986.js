import { _ } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { _, _ } from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import { _ } from "./chunk~7f38fefeac.js?contenthash=B2NENpWg";
import { _ } from "./chunk~fac4c69429.js?contenthash=CKwkyCQ9";
import { _ } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { _, _ } from "./chunk~5ad53110ba.js?contenthash=1ilwDMsN";
var _ = _(_()),
  _ = `j69e3vZtBU0-`,
  _ = `Zm1xh3yeapk-`,
  _ = `XjD0MBkAhzY-`,
  _ = `b3bQbkVwMm8-`,
  _ = _();
function _(_) {
  let { reaction: _ } = _,
    _ = _(_.reaction_type);
  if (!_) return null;
  let _ = _(`#RewardsReaction_Tooltip`, _.count || 0, _.localized_title);
  return (0, _.jsxs)(_, {
    className: _(_, _),
    toolTipContent: _,
    children: [
      (0, _.jsx)(`img`, {
        className: _,
        src: _(_.reaction_type, !1),
      }),
      _.count &&
        (0, _.jsx)(`div`, {
          className: `pzm1L8w9RaY-`,
          children: _.count,
        }),
    ],
  });
}
var _ = class extends _.PureComponent {
  render() {
    let _ = [];
    for (let _ of this.props.reactions)
      _.push(
        (0, _.jsx)(
          _,
          {
            reaction: _,
          },
          _.reaction_type,
        ),
      );
    return (0, _.jsx)(`div`, {
      className: _,
      children: _,
    });
  }
};
export { _ as AwardIconList };
