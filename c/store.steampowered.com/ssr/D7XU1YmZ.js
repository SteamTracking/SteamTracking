var _ = _(_(), 1);
function _(_) {
  let [_, _] = (0, _.useState)(_.IsReady());
  return (
    (0, _.useEffect)(() => {
      _ || _.Ready().then(() => _(!0));
    }, [_, _]),
    _
  );
}
export { _ };
