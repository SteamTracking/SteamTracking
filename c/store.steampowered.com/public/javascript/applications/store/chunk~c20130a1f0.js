import { _ } from "./chunk~f025431ab0.js";
import { _ } from "./chunk~01cfc309bf.js";
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
