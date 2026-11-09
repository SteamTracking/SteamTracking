import { _, _, _ } from "./mobx.esm.js";
var _ = _(_()),
  _ = _();
function _(_) {
  let {
      rgSources: _,
      onIncrementalError: _,
      onError: _,
      strAltText: _,
      ref: _,
      ..._
    } = _,
    [_, _] = _.useState(0),
    _ = _.useMemo(() => JSON.stringify(_), [_]),
    [_, _] = _.useState(_);
  _ != _ && (_(_), _(0));
  let _ = _.useMemo(() => {
      let _ = ``;
      return (
        _ && _.length > _ && (_ = _[_]),
        (_ ||=
          (console.warn(`MultiSourceImage created with no image src`, _, _),
          `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=`)),
        _
      );
    }, [_, _, _]),
    _ = _.useCallback(
      (_) => {
        _?.(_, _[_], _);
        let _ = _ + 1;
        _ >= _.length && _ && _(_), _ < _.length && _(_);
      },
      [_, _, _, _],
    ),
    _ = _.useRef(null);
  return (
    _.useImperativeHandle(
      _,
      () => ({
        imgRef: _,
        nSourceIndex: _,
        nSourceLength: _.length,
      }),
      [_, _, _],
    ),
    _.useEffect(() => {
      let _ = _.current;
      _?.complete && _.naturalWidth == 0 && (_.src = _.src);
    }, []),
    (0, _.jsx)(
      `img`,
      {
        ref: _,
        ..._,
        src: _,
        onError: _,
        alt: _,
      },
      _,
    )
  );
}
export { _ };
