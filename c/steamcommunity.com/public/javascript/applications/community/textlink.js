import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _, _, _, _, _ } from "./main.js";
_();
var _ = _({
    TextLink: () => _,
    TextLinkButton: () => _,
    Truncate: () => _,
    "Underline-always": () => _,
    "Underline-auto": () => _,
    "Underline-hover": () => _,
    "Underline-never": () => _,
    default: () => _,
  }),
  _ = `BpJ261oKuoo-`,
  _ = `I5odaKKuZ2g-`,
  _ = `h0t554qNPT4-`,
  _ = `_82NIbwX6q7Y-`,
  _ = `_3HTR2AjbBb0-`,
  _ = `V-l7vWhrqVo-`,
  _ = `Uv-RqseBiL0-`,
  _ = {
    TextLink: _,
    TextLinkButton: _,
    Truncate: _,
    "Underline-always": `_82NIbwX6q7Y-`,
    "Underline-never": `_3HTR2AjbBb0-`,
    "Underline-auto": `V-l7vWhrqVo-`,
    "Underline-hover": `Uv-RqseBiL0-`,
  },
  _ = _();
function _(_) {
  let { underline: _ = `auto`, ..._ } = _,
    _ = _(
      {
        ..._,
        underline: _,
        className: _,
      },
      _,
    );
  return (0, _.jsx)(_, {
    ..._,
  });
}
var _ = [
  ..._,
  {
    prop: `underline`,
    className: (_) => _[`Underline-${_}`],
  },
];
function _(_) {
  let { underline: _ = `auto`, focusable: _, navProps: _, ..._ } = _,
    _ = _(),
    _ = _ ?? _?.focusable ?? !!_.onClick,
    _ = (0, _.jsx)(`span`, {
      role: `button`,
      ..._(
        {
          ..._,
          underline: _,
          className: _,
        },
        _,
      ),
    });
  return _ && (_ || _)
    ? (0, _.jsx)(_, {
        ...(_ || {}),
        focusable: _,
        children: _,
      })
    : _;
}
