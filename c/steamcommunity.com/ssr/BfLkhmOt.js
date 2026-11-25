function _(_) {
  let _ = _();
  return _ && _ === _.STORE_CHECKOUT_BASE_URL ? new _(_, `checkout`) : new _(_);
}
function _(_, _) {
  typeof window < `u` && (window[_] = _);
}
