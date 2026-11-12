import { _, _ } from "./chunk~f025431ab0.js";
import { _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_(), 1),
  _ = _({
    Heading: () => _,
    "HeadingSize-1": () => _,
    "HeadingSize-2": () => _,
    "HeadingSize-3": () => _,
    "HeadingSize-4": () => _,
    "HeadingSize-5": () => _,
    "HeadingSize-6": () => _,
    "HeadingSize-7": () => _,
    "HeadingSize-8": () => _,
    "HeadingSize-9": () => _,
    default: () => _,
  }),
  _ = `CYJ1C2fZ7fQ-`,
  _ = `_2b-MxT8bm78-`,
  _ = `W0Lv9H8NDtc-`,
  _ = `sHc2NgynHLg-`,
  _ = `cR6P2y5vl7Q-`,
  _ = `_2hFrLV1TIRs-`,
  _ = `CGvKhlGPwmI-`,
  _ = `iPtXWzTzC0Y-`,
  _ = `aCFOm4WcJxs-`,
  _ = `ovGroIOnmJM-`,
  _ = {
    Heading: _,
    "HeadingSize-1": `_2b-MxT8bm78-`,
    "HeadingSize-2": `W0Lv9H8NDtc-`,
    "HeadingSize-3": `sHc2NgynHLg-`,
    "HeadingSize-4": `cR6P2y5vl7Q-`,
    "HeadingSize-5": `_2hFrLV1TIRs-`,
    "HeadingSize-6": `CGvKhlGPwmI-`,
    "HeadingSize-7": `iPtXWzTzC0Y-`,
    "HeadingSize-8": `aCFOm4WcJxs-`,
    "HeadingSize-9": `ovGroIOnmJM-`,
  },
  _ = _(),
  _ = _.createContext({
    depth: 0,
  });
function _() {
  return (0, _.useContext)(_).depth;
}
var _ = _(_(), 1);
function _(_) {
  let { level: _ = `auto`, className: _, color: _ } = _,
    _ = _(_, _());
  return (0, _.jsx)(_, {
    ..._(
      {
        ..._,
        className: (0, _.default)(_(), _, _),
      },
      _,
    ),
  });
}
var _ = [
  ..._,
  ..._,
  {
    prop: `size`,
    responsive: !0,
    className: (_) => _[`HeadingSize-${_}`],
  },
];
function _(_, _) {
  if (_ === `auto` && _ === 0) return `h1`;
  let _ = _ === `auto` ? _.toString() : _;
  return /^[1-6]$/.test(_)
    ? `h` + _
    : _ === `auto`
      ? (console.error(`<Section> nesting has exceeded "h6" for headings.`),
        `h6`)
      : (console.error(`Attempt to render invalid heading level, "${_}".`),
        `h1`);
}
var _ = `DpD67dmxucQ-`,
  _ = `A5IqXhyabak-`,
  _ = `_5Hx3QdjAWRs-`,
  _ = `n7tV1f0-oi8-`,
  _ = `Eksm5rKuJc0-`,
  _ = `AdpFURiX9Hs-`,
  _ = `_19qKB6cDHVY-`,
  _ = `MeE0fNNPy-8-`,
  _ = `qLMEP66ZZaI-`,
  _ = `cI9FOTX2QCs-`,
  _ = `Dag5YbwnV8U-`,
  _ = `rj9iYiJwrs4-`,
  _ = `mvtLyO3jUk4-`,
  _ = `Ptd-YqbMTf8-`;
function _(_) {
  let { _: _ = `div`, ref: _, focusable: _, navProps: _, ..._ } = _,
    _ = _(),
    _ = _(
      {
        ..._,
        className: (0, _.default)(_, _.className),
      },
      _,
    ),
    _ = _ ?? _?.focusable ?? !!_.onClick,
    _ = (0, _.jsx)(_, {
      ref: _,
      ..._,
    });
  return _
    ? (0, _.jsx)(_, {
        "flow-children": `grid`,
        ...(_ || {}),
        focusable: _,
        children: _,
      })
    : _;
}
var _ = [
  ..._,
  {
    prop: `display`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-display`,
  },
  {
    prop: `columns`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-columns`,
  },
  {
    prop: `rows`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-rows`,
  },
  {
    prop: `autoColumns`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-auto-columns`,
  },
  {
    prop: `autoRows`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-auto-rows`,
  },
  {
    prop: `autoFlow`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-auto-flow`,
  },
  {
    prop: `areas`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-areas`,
  },
  {
    prop: `flow`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-flow`,
  },
  {
    prop: `alignContent`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-align-content`,
  },
  {
    prop: `justifyContent`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-justify-content`,
  },
  {
    prop: `alignItems`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-align-items`,
  },
  {
    prop: `justifyItems`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-justify-items`,
  },
  {
    prop: `gap`,
    responsive: !0,
    className: _,
    cssProperty: (_) => [`--grid-gap`, `var(--spacing-${_})`],
  },
  {
    prop: `gapX`,
    responsive: !0,
    className: _,
    cssProperty: (_) => [`--grid-gap-x`, `var(--spacing-${_})`],
  },
  {
    prop: `gapY`,
    responsive: !0,
    className: _,
    cssProperty: (_) => [`--grid-gap-y`, `var(--spacing-${_})`],
  },
];
function _(_) {
  let {
      children: _,
      hoverContent: _,
      nDelayShowMS: _,
      bTooltipMode: _,
      popoverProps: _,
    } = _,
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsxs)(_.Root, {
    open: _,
    onOpenChange: _,
    interactions: {
      hover: (_) => {
        let _ = {
          ..._,
          delay: {
            open: _,
            close: 0,
          },
        };
        return (
          _ &&
            (_ = {
              ..._,
              handleClose: null,
            }),
          _
        );
      },
    },
    presentation: `anchor`,
    ..._,
    children: [
      (0, _.jsx)(_.Anchor, {
        children: _,
      }),
      (0, _.jsx)(_.Positioner, {
        children: (0, _.jsx)(_, {
          children: _,
        }),
      }),
    ],
  });
}
