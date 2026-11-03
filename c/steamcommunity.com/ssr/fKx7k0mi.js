_();
var _ = _(_(), 1),
  _ = _();
function _(_) {
  let {
      rows: _ = 3,
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
    _ = _({
      ..._,
      className: (0, _.default)(_(), _()),
      style: {
        resize: _,
      },
      cursor: `text`,
      disabled: _,
      variant: _,
    });
  return (0, _.jsx)(_ ? _ : `textarea`, {
    ref: _,
    ..._,
    value: _ || ``,
    onChange: _,
    rows: _,
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
export { _ };
