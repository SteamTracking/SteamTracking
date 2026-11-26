var _ = _(_()),
  _ = _();
function _(_) {
  let { children: _, ..._ } = _,
    _ = _(),
    _ = _.useMemo(
      () => ({
        ..._.GetDefaultParams(),
        ..._,
        ..._,
      }),
      [_, _.domain, _.controller, _.method, _.submethod, _.feature, _.depth],
    );
  return (0, _.jsx)(_, {
    ..._,
    children: _,
  });
}
