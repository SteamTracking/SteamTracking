import { _, _, _ } from "./mobx.esm.js";
import { _, _, _, _, _, _, _, _ } from "./src.js";
var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { children: _, "flow-children": _, ..._ } = _,
    { gamepadEvents: _ } = _(_);
  _ && (_.layout = _(_)),
    _.onOKButton ||
      (`onClick` in _.props && _.props.onClick && (_.onOKButton = _));
  let _;
  _.focusable && (_ = _.props.tabIndex || 0);
  let { ref: _, node: _ } = _(_);
  _(_, _);
  let _ = _(_),
    _ = _(_, _.props?.ref, _);
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.cloneElement(_, {
      ..._.props,
      ref: _,
      tabIndex: _,
    }),
  });
}
export { _ };
