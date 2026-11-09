import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _, _ } from "./main.js";
var _ = _(_(), 1),
  _ = _(),
  _ = _.createContext({
    enabled: !0,
  });
function _(_) {
  let { enabled: _, children: _ } = _,
    _ = _.useMemo(
      () => ({
        enabled: _,
      }),
      [_],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _(_) {
  let {
      placeholderWidth: _,
      placeholderHeight: _,
      holdGamepadFocus: _ = !1,
      onRender: _,
      style: _,
      mode: _ = `JustLoad`,
      children: _,
      ..._
    } = _,
    _ = _.useContext(_),
    [_, _] = _.useState(() => ({
      bRenderChildren: !_.enabled,
      nPrevRenderHeight: 0,
      nPrevRenderWidth: 0,
    })),
    _ = _.useRef(null),
    _ = _ === `LoadAndUnload` && _.enabled,
    _ = _.useCallback(
      (_) => {
        _((_) => {
          if (_.bRenderChildren === _ || (_.bRenderChildren && !_)) return _;
          let _ = 0,
            _ = 0;
          if (_.current) {
            let _ = _.current.getBoundingClientRect();
            _ && ((_ = _.width), (_ = _.height));
          }
          return (
            _ && _ && _(),
            {
              bRenderChildren: _,
              nPrevRenderWidth: _,
              nPrevRenderHeight: _,
            }
          );
        });
      },
      [_, _],
    );
  _.useEffect(() => {
    _.enabled || _(!0);
  }, [_.enabled, _]);
  let _ = _;
  if (!_.bRenderChildren) {
    let _ = _.nPrevRenderWidth || _,
      _ = _.nPrevRenderHeight || _;
    (_ !== void 0 || _ !== void 0) &&
      (_ = {
        ..._,
        minHeight: _,
        minWidth: _,
      });
  }
  let _ = _ ? `repeated` : `once`,
    _ = (0, _.jsx)(_, {
      containerRef: _,
      style: _,
      ..._,
      onVisibilityChange: _,
      trigger: _,
      children: _.bRenderChildren && _,
    });
  return (
    _ &&
      (_ = (0, _.jsx)(_, {
        focusableIfEmpty: !0,
        style: {
          height: `100%`,
        },
        children: _,
      })),
    _
  );
}
export { _, _ };
