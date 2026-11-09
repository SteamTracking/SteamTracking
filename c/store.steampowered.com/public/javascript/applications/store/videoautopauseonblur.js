import { _ } from "./rolldown-runtime.js";
import { _ } from "./libraries.js";
import { _ } from "./main.js";
var _ = _(_()),
  _ = 2e4;
function _(_) {
  let _ = (0, _.useRef)(!1),
    _ = (0, _.useRef)(null),
    _ = (0, _.useCallback)(() => {
      _.current = setTimeout(() => {
        _.current && !_.current.paused && (_.current.pause(), (_.current = !0));
      }, _);
    }, [_]),
    _ = (0, _.useCallback)(() => {
      ((_.current &&= (clearTimeout(_.current), null)),
        _.current && _.current && (_.current.play(), (_.current = !1)));
    }, [_]);
  (_(window, `blur`, _), _(window, `focus`, _));
}
