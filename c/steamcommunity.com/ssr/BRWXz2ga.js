function _(_, _) {
  let _ = window.SSR?.clientAssets?.moduleMap?.[_];
  return _
    ? import(new URL(_, document.baseURI).href)
    : Promise.reject(Error(`Failed to load module ${_}`));
}
var _ = _(_(), 1),
  _ = _(),
  _ = new Map();
function _(_) {
  if (!window.SSR?.clientAssets?.moduleMap?.[_._]) return null;
  let _ = _.get(_._);
  return (
    _ || ((_ = _.lazy(_._)), _.set(_._, _)),
    (0, _.jsx)(_.Suspense, {
      children: (0, _.jsx)(_, {
        _: _._,
      }),
    })
  );
}
export { _, _ };
