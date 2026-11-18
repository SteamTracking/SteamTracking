var _ = _(_(), 1),
  _ = 390,
  _ = 800,
  _ = 1280;
function _(_, _) {
  let _ = _ ?? ``;
  return _ || /Mobi|iPhone|iPod/.test(_)
    ? _
    : /iPad|Android|Tablet/.test(_)
      ? _
      : _;
}
function _() {
  let _ = {},
    _ = _(_);
  if (_)
    try {
      let _ = JSON.parse(_);
      _ &&
        typeof _ == `object` &&
        (_(_._, `number`) &&
          _._._ > 0 &&
          (_.viewportWidth = {
            value: _._._,
            source: _._._,
          }),
        _(_._, `number`) &&
          _._._ > 0 &&
          (_.viewportHeight = {
            value: _._._,
            source: _._._,
          }));
    } catch (_) {
      console.error(`Failed to parse existing client hints cookie: "${_}"`);
    }
  return _;
}
function _(_) {
  let _ = {};
  (_.viewportWidth &&
    (_._ = {
      _: _.viewportWidth.value,
      _: _.viewportWidth.source,
    }),
    _.viewportHeight &&
      (_._ = {
        _: _.viewportHeight.value,
        _: _.viewportHeight.source,
      }),
    Object.keys(_).length === 0 ? _(_) : _(_, JSON.stringify(_)));
}
function _(_, _) {
  if (!_ || typeof _ != `object`) return !1;
  let _ = _;
  return typeof _._ != `number` || _._ === void 0
    ? !1
    : typeof _ == `string`
      ? typeof _._ === _
      : _(_._);
}
function _() {
  let _ = _();
  if (!_.viewportWidth) {
    let _ = navigator.userAgentData;
    _.viewportWidth = {
      value: _(navigator.userAgent, _?.mobile),
      source: _.Guess,
    };
  }
  return _;
}
var _ = _(),
  _ = (function (_) {
    return (
      (_[(_.None = 0)] = `None`),
      (_[(_.Header = 1)] = `Header`),
      (_[(_.Measured = 2)] = `Measured`),
      (_[(_.Guess = 3)] = `Guess`),
      _
    );
  })({}),
  _ = (0, _.createContext)({});
function _(_) {
  let [_] = (0, _.useState)(_);
  return (
    (0, _.useEffect)(() => {
      let _ = _.viewportWidth?.source !== 1,
        _ = _.viewportHeight?.source !== 1;
      if (!_ && !_) return () => {};
      let _ = () =>
        _({
          ..._,
          viewportWidth: _
            ? {
                value: window.innerWidth,
                source: 2,
              }
            : _.viewportWidth,
          viewportHeight: _
            ? {
                value: window.innerHeight,
                source: 2,
              }
            : _.viewportHeight,
        });
      _();
      let _,
        _ = () => {
          (clearTimeout(_), (_ = setTimeout(_, 250)));
        };
      return (
        window.addEventListener(`resize`, _),
        () => {
          (clearTimeout(_), window.removeEventListener(`resize`, _));
        }
      );
    }, [_]),
    (0, _.jsx)(_, {
      value: _,
      children: _.children,
    })
  );
}
function _() {
  return (0, _.useContext)(_);
}
