import { _, _, _ } from "./chunk~de7f2df91c.js";
import { _ } from "./chunk~1fa4b8f2ff.js";
import { _ } from "./chunk~e7f5a67b58.js";
var _ = _(_(), 1);
function _(_) {
  let { ownerWindow: _ } = _(),
    _ = typeof _.matchMedia == `function` ? _.matchMedia : _,
    _ = (0, _.useMemo)(() => _(_), [_, _]),
    [_, _] = (0, _.useState)(_ ? _.matches : !1);
  return (
    (0, _.useEffect)(() => {
      if (!_) return () => {};
      _(_.matches);
      function _(_) {
        _(_.matches);
      }
      return (
        _.addEventListener(`change`, _),
        () => _.removeEventListener(`change`, _)
      );
    }, [_]),
    _
  );
}
function _() {
  return null;
}
var _ = _(),
  _ = [`initial`, `xs`, `sm`, `md`, `lg`],
  _ = (0, _.createContext)({
    _: 375,
    _: 768,
    _: 940,
    _: 1240,
    _: `lg`,
  });
function _(_ = {}) {
  let _ = (0, _.useContext)(_),
    _ = _._ ?? _._,
    _ = _._ ?? _._,
    _ = _._ ?? _._,
    _ = _._ ?? _._;
  return (0, _.useMemo)(
    () => ({
      _: _,
      _: _,
      _: _,
      _: _,
    }),
    [_, _, _, _],
  );
}
function _(_) {
  let { _: _, breakpoints: _, children: _ } = _,
    { _: _, _: _, _: _, _: _ } = _(_),
    _ = (0, _.useMemo)(
      () => ({
        _: _,
        _: _,
        _: _,
        _: _,
        _: _,
      }),
      [_, _, _, _, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _(_) {
  let { children: _, breakpoints: _ } = _,
    _ = _(_),
    _ = _(_);
  return (0, _.jsx)(_, {
    _: _,
    breakpoints: _,
    children: _,
  });
}
function _(_) {
  let { formFactor: _, children: _ } = _,
    _ = (0, _.useContext)(_),
    _ = (0, _.useMemo)(
      () => ({
        ..._,
        _: _ ?? _._,
      }),
      [_, _],
    );
  return _
    ? (0, _.jsx)(_.Provider, {
        value: _,
        children: _,
      })
    : (0, _.jsx)(_.Fragment, {
        children: _,
      });
}
function _(_) {
  let _ = _(`(min-width: ${_._}px)`),
    _ = _(`(min-width: ${_._}px)`),
    _ = _(`(min-width: ${_._}px)`),
    _ = _(`(min-width: ${_._}px)`),
    [_, _] = (0, _.useState)(!0);
  (0, _.useEffect)(() => _(!0), []);
  let _ = _();
  return _
    ? _
      ? `lg`
      : _
        ? `md`
        : _
          ? `sm`
          : _
            ? `xs`
            : `initial`
    : _.viewportWidth
      ? _.viewportWidth.value >= _._
        ? `lg`
        : _.viewportWidth.value >= _._
          ? `md`
          : _.viewportWidth.value >= _._
            ? `sm`
            : _.viewportWidth.value >= _._
              ? `xs`
              : `initial`
      : `lg`;
}
function _() {
  return (0, _.useContext)(_)._;
}
_.reduce((_, _, _) => ((_[_] = _), _), {});
var _ = {
  none: !0,
  _: !0,
  _: !0,
  _: !0,
  full: !0,
};
function _(_) {
  return !!_[_];
}
var _ = {
  0: !0,
  1: !0,
  2: !0,
  3: !0,
  4: !0,
  5: !0,
  6: !0,
  7: !0,
  8: !0,
  9: !0,
};
function _(_) {
  return !!_[_];
}
