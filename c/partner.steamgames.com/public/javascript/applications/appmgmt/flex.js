import { _, _, _, _ } from "./chunk~de7f2df91c.js";
import { _ } from "./chunk~25a6634263.js";
import { _ } from "./chunk~f7fdc3d084.js";
import { _ } from "./chunk~4cdb5412a1.js";
import { _, _, _, _, _ } from "./chunk~5f339e9a5f.js";
import { _ } from "./chunk~a292304e38.js";
var _ = `_3HgSSqEdwS4-`;
_();
var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { _: _ = `div`, focusable: _, navProps: _, ref: _, ..._ } = _,
    _ = _(),
    _ = _(
      {
        ..._,
        className: (0, _.default)(_, _(), _.className),
      },
      _,
    ),
    _ = _ ?? _?.focusable ?? !!_.onClick,
    _ = (0, _.jsx)(_, {
      ref: _,
      ..._,
    });
  return _ && (_ || _)
    ? (0, _.jsx)(_, {
        ...(_ || {}),
        focusable: _,
        children: _,
      })
    : _;
}
var _ = _;
function _(_) {
  return _(_, _);
}
var _ = `PmISXgz3FoQ-`,
  _ = `Bj8vGJI7AGo-`,
  _ = `_2AVS3LuARvU-`,
  _ = `rC6xro2ZWbk-`,
  _ = `oln6i1TGpO0-`,
  _ = `xTWnfrOQ1MU-`,
  _ = `h31r9FtdgH0-`,
  _ = `AwByPYmuf2E-`,
  _ = `rPm-B0T-Plk-`;
function _(_) {
  let { _: _ = `div`, focusable: _, navProps: _, ref: _, ..._ } = _,
    _ = _(),
    _ = _(
      {
        ..._,
        className: (0, _.default)(_.className, _),
      },
      _,
    ),
    _ = _ ?? _?.focusable ?? !!_.onClick,
    _ = (0, _.jsx)(_, {
      ref: _,
      ..._,
    }),
    _ = _();
  if (_) {
    let _ = _(_.wrap, _),
      _ = _(_.direction, _) ?? `row`;
    return (
      _ === `wrap` && _ === `row` && (_ = `grid`),
      (0, _.jsx)(_, {
        ...(_ || {}),
        focusable: _,
        "flow-children": _,
        children: _,
      })
    );
  }
  return _;
}
var _ = [
  ..._,
  {
    prop: `direction`,
    responsive: !0,
    className: _,
    cssProperty: `--direction`,
  },
  {
    prop: `justify`,
    responsive: !0,
    className: _,
    cssProperty: (_) => [`--justify`, _(_)],
  },
  {
    prop: `align`,
    responsive: !0,
    className: _,
    cssProperty: `--align`,
  },
  {
    prop: `gap`,
    responsive: !0,
    className: _,
    cssProperty: (_) => [`--gap`, `var(--spacing-${_})`],
  },
  {
    prop: `gapX`,
    responsive: !0,
    className: _,
    cssProperty: (_) => [`--gap-x`, `var(--spacing-${_})`],
  },
  {
    prop: `gapY`,
    responsive: !0,
    className: _,
    cssProperty: (_) => [`--gap-y`, `var(--spacing-${_})`],
  },
  {
    prop: `wrap`,
    responsive: !0,
    className: _,
    cssProperty: `--wrap`,
  },
  {
    prop: `inline`,
    responsive: !0,
    className: _,
  },
];
function _(_) {
  return /^(between|around|evenly)$/.test(_) ? `space-${_}` : _;
}
