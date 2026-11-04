var _ = _(_(), 1),
  _ = _();
function _(_) {
  let [_, _] = (0, _.useState)(!1);
  return (
    (0, _.useEffect)(() => {
      window.SSR && (window.SSR.hydrated = !0),
        (0, _.startTransition)(() => _(!0));
    }, []),
    (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    })
  );
}
var _ = (0, _.createContext)(!1);
function _() {
  return (0, _.use)(_);
}
export { _, _ };
