import { _ } from "./chunk~f025431ab0.js";
import { _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~f57d770d64.js";
import { _ } from "./main.js";
var _ = _(_(), 1),
  _ = `100% 0px 100% 0px`,
  _ = `SaleSection_`;
function _() {
  return window.innerWidth ?? 1920;
}
function _() {
  return _() >= 940;
}
function _() {
  _();
  let [_, _] = (0, _.useState)(() => _());
  return (
    (0, _.useEffect)(() => {
      let _ = () => {
        _(_());
      };
      return (
        _(),
        window.addEventListener(`resize`, _),
        () => window.removeEventListener(`resize`, _)
      );
    }, []),
    _
  );
}
function _(_ = 940) {
  return _() >= _;
}
function _(_) {
  let _ = _(),
    _ = _ >= 940,
    _ = _(_);
  return _
    ? {
        nMaxCapsulesPerRow: _.nMaxItemsPerRow,
        bScreenIsWide: _,
      }
    : {
        nMaxCapsulesPerRow: Math.min(
          Math.max(Math.floor(_ / _.nItemMinimumWidth), 1),
          _.nMaxItemsPerRow,
        ),
        bScreenIsWide: _,
      };
}
function _(_) {
  let _ = _(_);
  return _()
    ? _.nMaxItemsPerRow
    : Math.min(
        Math.max(Math.floor(window.innerWidth / _.nItemMinimumWidth), 1),
        _.nMaxItemsPerRow,
      );
}
