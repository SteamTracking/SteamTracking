import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
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
