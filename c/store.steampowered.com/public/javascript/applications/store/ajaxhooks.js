import { _ } from "./chunk~f025431ab0.js";
import { _, _ } from "./chunk~01cfc309bf.js";
var _ = _(_()),
  _ = _(_());
function _(_) {
  let _ = _.useRef(_.default.CancelToken.source());
  return (
    _.useEffect(() => {
      let _ = _.current;
      return () => _.cancel(_ ? `${_}: unmounting` : `unmounting`);
    }, [_]),
    _.current
  );
}
