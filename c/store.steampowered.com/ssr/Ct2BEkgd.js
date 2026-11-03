var _;
_ ??= new Set();
var _ = void 0;
function _() {
  return (_ ??= Promise.all(_));
}
function _(_) {
  (_ ??= new Set()), _.add(_), (_ = Promise.all(_));
}
export { _, _ };
