var _ = _(_(), 1),
  _ = _(),
  _ = _.createContext(!1);
function _() {
  return _.useContext(_);
}
function _(_) {
  let {
    snr: _,
    focusable: _,
    navProps: _,
    href: _,
    openInNewWindow: _,
    target: _,
    rel: _,
    ..._
  } = _;
  _(!(_ && _), `Link: pass either openInNewWindow or target, not both`);
  let _ = _(),
    _ = _(),
    _ = _(_, _),
    _ = _ ?? _?.focusable ?? !!_,
    _ = _ ? `_blank` : _;
  !_ && _ && (_ = `_top`);
  let _ = _;
  !_ && _ && (_ = `noreferrer noopener`);
  let _ = {
    href: _,
    target: _,
    rel: _,
    ..._,
  };
  return _ && (_ || _)
    ? (0, _.jsx)(_, {
        ..._,
        focusable: _,
        ..._,
      })
    : (0, _.jsx)(`a`, {
        ..._,
      });
}
function _(_, _) {
  let _ = _();
  return !_ || !_
    ? _
    : _(
        _ === !0
          ? _
          : {
              ..._,
              ..._,
            },
        _,
      );
}
