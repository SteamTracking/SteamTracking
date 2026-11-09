/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, tt as n } from "./libraries.js";
var r = e(n()),
  i = e(t());
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
