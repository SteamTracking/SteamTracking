/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
var r = e(t()),
  i = n();
function a(e) {
  let {
      rgSources: t,
      onIncrementalError: n,
      onError: a,
      strAltText: o,
      ref: s,
      ...c
    } = e,
    [l, u] = r.useState(0),
    d = r.useMemo(() => JSON.stringify(t), [t]),
    [f, p] = r.useState(d);
  f != d && (p(d), u(0));
  let m = r.useMemo(() => {
      let n = ``;
      return (
        t && t.length > l && (n = t[l]),
        (n ||=
          (console.warn(`MultiSourceImage created with no image src`, e, l),
          `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=`)),
        n
      );
    }, [t, l, e]),
    h = r.useCallback(
      (e) => {
        n?.(e, t[l], l);
        let r = l + 1;
        r >= t.length && a && a(e), r < t.length && u(r);
      },
      [l, a, n, t],
    ),
    g = r.useRef(null);
  return (
    r.useImperativeHandle(
      s,
      () => ({ imgRef: g, nSourceIndex: l, nSourceLength: t.length }),
      [g, l, t],
    ),
    r.useEffect(() => {
      let e = g.current;
      e?.complete && e.naturalWidth == 0 && (e.src = e.src);
    }, []),
    (0, i.jsx)(`img`, { ref: g, ...c, src: m, onError: h, alt: o }, f)
  );
}
export { a as t };
