var _ = `_6ogph74EeuE-`,
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
