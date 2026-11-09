import { _ } from "./rolldown-runtime.js";
import { _ } from "./libraries.js";
var _ = _(_());
function _(_) {
  _.useEffect(() => {
    if (!_) return;
    let _ = [];
    for (let _ of _.split(/ /))
      document.body.classList.contains(_) || _.push(_);
    return (
      document.body.classList.add(..._),
      () => document.body.classList.remove(..._)
    );
  }, [_]);
}
export { _ };
