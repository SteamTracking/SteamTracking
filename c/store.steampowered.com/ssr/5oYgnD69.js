var _ = _(_(), 1);
function _(_, _) {
  let [_, _] = (0, _.useState)(_);
  return [
    _,
    _(_, {
      nTimeoutMS: _,
      nTimeoutExtensionMS: _,
      nMaxTimeoutExtensions: 1 / 0,
    }),
    _,
  ];
}
function _(_, _ = {}) {
  let {
      nTimeoutMS: _ = 350,
      nTimeoutExtensionMS: _ = 125,
      nMaxTimeoutExtensions: _ = 3,
    } = _,
    [_, _] = _.useState(_),
    _ = _.useRef(void 0);
  return (
    _.useEffect(() => {
      let _ = performance.now();
      _.current
        ? _ - _.current.tsLastChange < _ * _ &&
          (_.current.tsScheduledTimeout = Math.max(
            performance.now() + _,
            _.current.tsScheduledTimeout,
          ))
        : (_.current = {
            tsLastChange: _,
            tsScheduledTimeout: performance.now() + _,
          });
      let _ = _.current.tsScheduledTimeout - performance.now(),
        _ = window.setTimeout(() => {
          (_.current = void 0), _(_);
        }, _);
      return () => window.clearTimeout(_);
    }, [_, _, _, _]),
    _
  );
}
export { _, _ };
