import { _ } from "./rolldown-runtime.js";
import { _, _, _ } from "./libraries.js";
import { _ } from "./partnereventshared.module.js";
import { _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_()),
  _ = `-POP4zTRo6U-`,
  _ = `dzdTC1QVCoU-`,
  _ = `p3qQHic3po0-`,
  _ = _();
function _(_) {
  let {
      title: _,
      tooltip: _,
      getMinimized: _,
      toggleMinimized: _,
      className: _,
      children: _,
      elAdditionalButtons: _,
    } = _,
    _ = _(() => _());
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`div`, {
        className: _(_, _, _, `SectionTitleHeader`),
        children: [
          (0, _.jsxs)(`div`, {
            className: _(_, `EventEditorTextTitle`),
            children: [
              _,
              !!_ &&
                (0, _.jsx)(_, {
                  tooltip: _,
                }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              _,
              (0, _.jsx)(_, {
                bIsMinimized: _,
                fnToggleMinimize: _,
              }),
            ],
          }),
        ],
      }),
      !_ &&
        (0, _.jsx)(_, {
          children: _,
        }),
    ],
  });
}
function _(_) {
  let [_, _] = _.useState(!!_.bStartMinimized);
  return (0, _.jsx)(_, {
    ..._,
    getMinimized: () => _,
    toggleMinimized: () => _(!_),
    children: _.children,
  });
}
function _(_) {
  let { bIsMinimized: _, fnToggleMinimize: _ } = _,
    _ = _ ? `#Section_Maximize_Tooltip` : `#Section_Minimize_Tooltip`;
  return (0, _.jsx)(_, {
    "data-tooltip-text": _(_),
    onClick: _,
    children: _.bIsMinimized ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
  });
}
