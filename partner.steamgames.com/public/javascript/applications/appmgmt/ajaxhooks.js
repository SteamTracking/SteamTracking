/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, sn as t } from "./chunk~de7f2df91c.js";
import { t as n } from "./chunk~f4e4ed5c17.js";
var r = t(n()),
  i = t(e());
function a(e) {
  let t = i.useRef(r.default.CancelToken.source());
  return (
    i.useEffect(() => {
      let n = t.current;
      return () => n.cancel(e ? `${e}: unmounting` : `unmounting`);
    }, [e]),
    t.current
  );
}
export { a as t };
