import { _, _, _, _ } from "./mobx.esm.js";
import { _ } from "./src.js";
import { _, _, _, _ } from "./layout.js";
_();
var _ = _(_(), 1),
  _ = _({
    LineClamp: () => _,
    Text: () => _,
    TextAlign: () => _,
    "TextSize-1": () => _,
    "TextSize-2": () => _,
    "TextSize-3": () => _,
    "TextSize-4": () => _,
    "TextSize-5": () => _,
    "TextSize-6": () => _,
    "TextSize-7": () => _,
    "TextSize-8": () => _,
    "TextSize-9": () => _,
    TextWeight: () => _,
    Truncate: () => _,
    WhiteSpace: () => _,
    default: () => _,
  }),
  _ = `oDEFTUumdv8-`,
  _ = `Ic04FuZ-TKg-`,
  _ = `kvJw29bpEN0-`,
  _ = `GeWSoC6e568-`,
  _ = `La-YYLx2qY0-`,
  _ = `RIS7imY3rYQ-`,
  _ = `m3n9feiG5Z0-`,
  _ = `FTwvzjX-DeA-`,
  _ = `WFGm5WdD-9M-`,
  _ = `_8QB4wGa6kZw-`,
  _ = `RKf2rBMhi2M-`,
  _ = `onLSYXBtvEU-`,
  _ = `NQUG6IKBYxM-`,
  _ = `PKFlRSq6vqk-`,
  _ = `ZRy341OHOcI-`,
  _ = {
    Text: _,
    Truncate: _,
    "TextSize-1": `kvJw29bpEN0-`,
    "TextSize-2": `GeWSoC6e568-`,
    "TextSize-3": `La-YYLx2qY0-`,
    "TextSize-4": `RIS7imY3rYQ-`,
    "TextSize-5": `m3n9feiG5Z0-`,
    "TextSize-6": `FTwvzjX-DeA-`,
    "TextSize-7": `WFGm5WdD-9M-`,
    "TextSize-8": `_8QB4wGa6kZw-`,
    "TextSize-9": `RKf2rBMhi2M-`,
    TextWeight: _,
    TextAlign: _,
    LineClamp: _,
    WhiteSpace: _,
  },
  _ = _();
function _(_) {
  let { _: _ = `span`, ref: _, className: _, ..._ } = _;
  return (0, _.jsx)(_, {
    ref: _,
    ..._(
      {
        ..._,
        className: (0, _.default)(_, _),
      },
      _,
    ),
  });
}
var _ = [
    {
      prop: `weight`,
      responsive: !0,
      className: _,
      cssProperty: (_) => [`--text-weight`, `var(--font-weight-${_})`],
    },
    {
      prop: `align`,
      responsive: !0,
      className: _,
      cssProperty: `--text-align`,
    },
    {
      prop: `color`,
      responsive: !0,
      cssProperty: (_, _, _) => [
        `--text-color`,
        _(_, _(_.contrast, _) ?? `body`),
      ],
    },
    {
      prop: `contrast`,
      responsive: !0,
      cssProperty: (_, _, _) => [
        `--text-color`,
        _(_(_.color, _) ?? `text-body`, _),
      ],
    },
    {
      prop: `truncate`,
      className: _,
    },
    {
      prop: `lineClamp`,
      responsive: !0,
      className: _,
      cssProperty: `--line-clamp`,
    },
    {
      prop: `whiteSpace`,
      className: _,
      cssProperty: `--white-space`,
    },
  ],
  _ = [
    ..._,
    ..._,
    {
      prop: `size`,
      responsive: !0,
      className: (_) => _[`TextSize-${_}`],
    },
  ];
