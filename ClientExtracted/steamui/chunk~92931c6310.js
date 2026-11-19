import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { eo as t } from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import { C as n } from "./library.js?contenthash=CVZWwsCP";
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
