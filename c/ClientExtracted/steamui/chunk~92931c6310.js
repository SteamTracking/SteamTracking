import { _ } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { _ } from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import { _ } from "./library.js?contenthash=CVZWwsCP";
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
