_();
var _ = _(_(), 1),
  _ = `Qhm6jOAQZog-`,
  _ = `EnFuoPFRUQw-`,
  _ = `Psv8L3U3Y44-`,
  _ = `_0Yp9qPJ4rvQ-`,
  _ = `sI7wun-GD7g-`,
  _ = `EJ5nTwCNNaQ-`,
  _ = `-O4XGIBjnX8-`,
  _ = `yXbd0191s9A-`,
  _ = `_2FdmsjGPIgk-`,
  _ = _();
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
