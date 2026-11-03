var _ = `unUserdataVersion`;
function _() {
  return Number.parseInt(window.localStorage.getItem(_) || `0`);
}
function _(_, _, _) {
  let _ = _(),
    _ = `${_}dynamicstore/userdata/?id=${_}&cc=${_}&origin=${self.origin}`;
  return _ && (_ += `&v=${_}`), _;
}
function _() {
  window.localStorage.setItem(
    _,
    (Number.parseInt(window.localStorage.getItem(_) || `0`) + 1).toString(),
  );
}
export { _, _ };
