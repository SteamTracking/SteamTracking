import { _ } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { _, _, _ } from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./chunk~fac4c69429.js?contenthash=CKwkyCQ9";
import { _ } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { _, _ } from "./chunk~a292304e38.js?contenthash=CdSTH8yM";
import { _, _, _, _, _ } from "./chunk~5f339e9a5f.js?contenthash=Dj-RoKCb";
var _ = `_3HgSSqEdwS4-`,
  _ = _(_(), 1),
  _ = _();
function _(_) {
  let { children: _, "flow-children": _, ..._ } = _,
    { gamepadEvents: _ } = _(_);
  (_ && (_.layout = _(_)),
    _.onOKButton ||
      (`onClick` in _.props && _.props.onClick && (_.onOKButton = _)));
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
var _ = _(_(), 1);
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
