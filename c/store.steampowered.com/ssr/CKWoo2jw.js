var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { dynamicImport: _, fallback: _, ..._ } = _,
    [_] = (0, _.useState)(() =>
      _.lazy(async () => {
        let _ = await _();
        return (
          await _(),
          {
            default: _,
          }
        );
      }),
    );
  return (0, _.jsx)(_, {
    fallback: _,
    children: (0, _.jsx)(_.Suspense, {
      fallback: _,
      children: (0, _.jsx)(_, {
        ..._,
      }),
    }),
  });
}
