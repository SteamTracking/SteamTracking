function _() {
  return [_.COMMUNITY_BASE_URL, _.STEAMTV_BASE_URL];
}
function _(_) {
  let _ = _();
  return _ && _().includes(_) ? new _(_) : _;
}
export { _ };
