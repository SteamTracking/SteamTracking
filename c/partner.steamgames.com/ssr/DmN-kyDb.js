var _ = _(_(), 1),
  _ = `NukVMmfB1P8-`,
  _ = `Cq7FQuRHhs0-`,
  _ = _();
function _(_) {
  let { children: _, ..._ } = _;
  return (0, _.jsx)(_, {
    className: _,
    ..._,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: _.children,
    }),
  });
}
function _(_) {
  let { data: _ } = _(_);
  return (0, _.useMemo)(
    () => (_ ? (_.item_type == 0 ? [_.appid] : _.included_appids || []) : []),
    [_],
  );
}
function _(_) {
  let { data: _ } = _(_);
  return (0, _.useMemo)(() => {
    if (_ && _.related_items && _.related_items.parent_appid)
      return {
        appid: _.related_items.parent_appid,
      };
  }, [_]);
}
function _(_) {
  return (0, _.useMemo)(
    () =>
      _
        ? {
            appid: _,
          }
        : void 0,
    [_],
  );
}
