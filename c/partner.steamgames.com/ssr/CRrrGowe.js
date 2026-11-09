_();
var _ = _(_(), 1),
  _ = _({
    Button: () => _,
    Icon: () => _,
    MinWidth: () => _,
    "Size-1": () => _,
    "Size-2": () => _,
    "Size-3": () => _,
    "Variant-basic": () => _,
    "Variant-dark": () => _,
    "Variant-ghost": () => _,
    "Variant-inverted": () => _,
    "Variant-outline": () => _,
    "Variant-vibrant": () => _,
    Width: () => _,
    default: () => _,
  }),
  _ = `D8IENuW8Q7w-`,
  _ = `YAnzAmuUUnI-`,
  _ = `_2rTZ-Nig90Q-`,
  _ = `inqz7Zdx9Xg-`,
  _ = `-GZ6XDQ0-34-`,
  _ = `ob-nIzzquk8-`,
  _ = `_-0GNcZrYp-U-`,
  _ = `vCmvVAHC2BY-`,
  _ = `a-Dt3-0cU9Y-`,
  _ = `sFeQogRji0A-`,
  _ = `B2hj-u2WH-0-`,
  _ = `WPxeXV5lR1E-`,
  _ = `fkz-MePtKwI-`,
  _ = {
    Button: _,
    "Size-1": `YAnzAmuUUnI-`,
    Icon: _,
    "Size-2": `inqz7Zdx9Xg-`,
    "Size-3": `-GZ6XDQ0-34-`,
    "Variant-basic": `ob-nIzzquk8-`,
    "Variant-dark": `_-0GNcZrYp-U-`,
    "Variant-inverted": `vCmvVAHC2BY-`,
    "Variant-outline": `a-Dt3-0cU9Y-`,
    "Variant-ghost": `sFeQogRji0A-`,
    "Variant-vibrant": `B2hj-u2WH-0-`,
    Width: _,
    MinWidth: _,
  },
  _ = _();
function _(_) {
  let {
      variant: _,
      size: _ = `2`,
      minWidth: _ = `fit-content`,
      color: _,
      loading: _,
      children: _,
      onClick: _,
      icon: _,
      focusable: _,
      navProps: _,
      ..._
    } = _,
    _ = _(),
    _ = _
      ? (0, _.jsx)(_, {
          size: _,
          color: _,
          variant: `bright`,
          children: _,
        })
      : _,
    _ = _ ? void 0 : _,
    _ = _ ?? _?.focusable ?? !!_,
    _ = _(`Button`, _),
    _ = {
      type: `button`,
      ..._(
        {
          ..._,
          variant: _,
          size: _,
          minWidth: _,
          color: _,
          className: (0, _.default)(_, _ && `_2rTZ-Nig90Q-`),
          onClick: _,
        },
        _,
      ),
      children: _,
    };
  return _ && (_ || _)
    ? (0, _.jsx)(_, {
        ..._,
        ...(_ || {}),
        focusable: _,
      })
    : (0, _.jsx)(`button`, {
        ..._,
      });
}
function _(_) {
  let {
      variant: _,
      size: _ = `2`,
      minWidth: _ = `fit-content`,
      disabled: _,
      icon: _,
      onClick: _,
      ..._
    } = _,
    _ = _(`Button`, _),
    _ = _(
      {
        onClick: _ ? _ : _,
        "aria-disabled": _,
        ..._,
        variant: _,
        size: _,
        minWidth: _,
        className: (0, _.default)(_, _ && `_2rTZ-Nig90Q-`, _()),
      },
      _,
    );
  return (0, _.jsx)(_, {
    ..._,
  });
}
function _(_) {
  _.preventDefault();
}
var _ = [
    ..._,
    {
      prop: `size`,
      responsive: !0,
      className: (_) => _[`Size-${_}`],
    },
    {
      prop: `variant`,
      className: (_) => _[`Variant-${_}`],
    },
    {
      prop: `color`,
      dataProperty: (_) => [`accent-color`, `${_}`],
    },
    {
      prop: `width`,
      className: _,
      cssProperty: `--width`,
      responsive: !0,
    },
    {
      prop: `minWidth`,
      className: _,
      cssProperty: `--min-width`,
      responsive: !0,
    },
  ],
  _ = _,
  _ = _;
