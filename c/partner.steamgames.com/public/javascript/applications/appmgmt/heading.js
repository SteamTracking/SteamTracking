import { _, _, _, _ } from "./mobx.esm.js";
import { _ } from "./src.js";
import { _, _ } from "./layout.js";
import { _ } from "./variantdefaults.js";
import { _ } from "./text.js";
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
