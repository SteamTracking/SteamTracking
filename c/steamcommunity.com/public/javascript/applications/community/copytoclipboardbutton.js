import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _, _, _ } from "./main.js";
var _ = _(_()),
  _ = `_22H1cFqJ3Xo-`,
  _ = `ILRTOLQcXtQ-`,
  _ = `DEcxQM-4cPU-`,
  _ = _();
function _(_) {
  let [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(null);
  return (0, _.jsx)(`span`, {
    children: (0, _.jsxs)(`button`, {
      onClick: (_) => (
        _(!0),
        _.stopPropagation(),
        navigator.clipboard.writeText(_.text),
        setTimeout(() => _(!1), 1e3),
        !1
      ),
      className: _(_, _.size === `large` ? _ : _),
      ref: _,
      title: _.text,
      children: [
        _ &&
          _.current &&
          (0, _.jsx)(_, {
            target: _.current,
            direction: `bottom`,
            children: (0, _.jsx)(`div`, {
              className: `e1X81I-Jga0-`,
              children: `Copied.`,
            }),
          }),
        (0, _.jsx)(_, {}),
      ],
    }),
  });
}
