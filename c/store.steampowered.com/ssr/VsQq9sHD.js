_();
var _ = _();
function _(_) {
  let {
      storeItem: _,
      feature: _,
      depth: _,
      children: _,
      noImpressionTracking: _,
      ..._
    } = _,
    _ = _?.appid,
    _ = _(_, _, _);
  if (!_) return _;
  let _ = (0, _.jsx)(_, {
    ..._,
    href: _,
    children: _,
  });
  return _ && !_
    ? (0, _.jsx)(_, {
        appID: _,
        feature: _,
        depth: _,
        children: _,
      })
    : _;
}
function _(_, _, _) {
  return _(_ ? `${_.STORE_BASE_URL}${_.store_url_path}` : void 0, _, _);
}
export { _, _ };
