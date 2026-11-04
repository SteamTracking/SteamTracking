_();
var _ = _(_(), 1),
  _ = _();
function _(_) {
  let {
      rows: _ = 3,
      sizing: _ = `content`,
      resize: _ = `none`,
      ref: _,
      value: _,
      onTextChange: _,
      onChange: _,
      disabled: _,
      variant: _,
      ..._
    } = _,
    _ = (_) => {
      _ || (_(_.target.value), _ && _(_));
    },
    _ = _(`TextArea`, _),
    _ = _(),
    [_, _] = _(_),
    _ = {
      resize: _,
      fieldSizing: _,
      minHeight: _,
      maxHeight: _,
    },
    _ = _({
      ..._,
      className: (0, _.default)(_(), _()),
      style: _,
      cursor: `text`,
      disabled: _,
      variant: _,
    });
  return (0, _.jsx)(_ ? _ : `textarea`, {
    ref: _,
    ..._,
    value: _ || ``,
    onChange: _,
    readOnly: _,
    "aria-disabled": _,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    noFocusRing: !0,
    ..._,
  });
}
function _(_) {
  let _ = typeof _ == `number` ? _ : _.min,
    _ = typeof _ == `number` ? void 0 : _.max;
  return [
    typeof _ == `number` ? `calc( ${_}lh + 2 * var(--spacing-1) )` : void 0,
    typeof _ == `number` ? `calc( ${_}lh + 2 * var(--spacing-1) )` : void 0,
  ];
}
export { _ };
