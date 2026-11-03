var _ = _(_(), 1),
  _ = _.createContext({
    eAdultOnlyMediaBehavior: `masked`,
  });
function _(_) {
  let { eAdultOnlyMediaBehavior: _, children: _ } = _,
    _ = _.useMemo(
      () => ({
        eAdultOnlyMediaBehavior: _,
      }),
      [_],
    );
  return _.createElement(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
var _ = {
  name: `forceallages`,
  preferenceControls: {
    isTechnicallyNecessary: !0,
  },
};
function _() {
  return _.useMemo(() => {
    let _ = _(_);
    return !!(
      (_ && _ !== `0`) ||
      (_.IN_MOBILE_WEBVIEW && navigator.userAgent.match(/Android/))
    );
  }, []);
}
function _() {
  let { eAdultOnlyMediaBehavior: _ } = _.useContext(_),
    _ = _();
  return _() ||
    (_ == `masked` &&
      (_.excluded_content_descriptors.includes(4) ||
        _.excluded_content_descriptors.includes(3)))
    ? `blocked`
    : _ == `masked` && _
      ? `allowed`
      : _;
}
function _() {
  return _() != `allowed`;
}
var _ = {
    name: `bDisableAOWarning`,
    options: {
      path: `/`,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  },
  _ = 2 * _.PerDay;
function _() {
  let _ = _();
  return _.useCallback(() => {
    _(_, String(Math.floor(Date.now() / 1e3) + _)),
      _.invalidateQueries({
        queryKey: [`AOWarningCookie`],
      });
  }, [_]);
}
function _() {
  let _ = _(_),
    _ = _ ? parseInt(_) : 0;
  return _ == 0 ? null : _;
}
function _() {
  return {
    queryKey: [`AOWarningCookie`],
    queryFn: () => _(),
    placeholderData: () => _(),
    staleTime: 0,
  };
}
function _() {
  let { data: _ } = _(_());
  return _ && _ > Date.now() / 1e3;
}
function _(_) {
  let _ = _() == `blocked` && !!_,
    { data: _ } = _(
      _
        ? {
            appid: _,
          }
        : void 0,
    );
  return _
    ? !_ ||
        _.content_descriptorids.includes(3) ||
        _.content_descriptorids.includes(4)
    : !1;
}
function _(_) {
  let { eAdultOnlyMediaBehavior: _ } = _.useContext(_),
    _ = _(),
    _ = _ == `allowed` && !_,
    { data: _ } = _(_ ? void 0 : _);
  return _ || !_ ? !1 : !_ || !!_.content_descriptorids?.includes(3);
}
export { _, _, _, _, _, _ };
