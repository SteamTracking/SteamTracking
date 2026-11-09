import { _, _, _ } from "./mobx.esm.js";
import "./src.js";
import { _, _, _, _, _, _ } from "./dialogs.js";
import { _ } from "./react-router.js";
var _ = _(_()),
  _ = _(_()),
  _ = _();
function _(_) {
  let { active: _, children: _ } = _,
    _ = _() || _(window),
    _ = _(),
    [_, _] = _.useState(null),
    [_, _] = _.useState(!1),
    _ = _.useRef(void 0);
  if (
    (_.useEffect(() => {
      if (_) {
        let _ = _.ShowPortalModal(),
          _ = _.OnElementReadyCallbacks.Register(_),
          _ = _.OnModalActiveCallbacks.Register(_);
        return (
          (_.current = _.key),
          () => {
            (_(null), _(!1), _.Close(), _.Unregister(), _.Unregister());
          }
        );
      }
    }, [_, _]),
    !_ || !_)
  )
    return null;
  let _ = _;
  return (
    _ &&
      (_ = (0, _.jsx)(_, {
        active: _,
        modalKey: _.current,
        children: _,
      })),
    _.createPortal(_, _)
  );
}
function _(_) {
  let { labelledBy: _ } = _ || {},
    [_, _] = _.useState(void 0),
    _ = _.useMemo(
      () => ({
        setHeaderId: _,
      }),
      [],
    );
  return {
    headerId: _ || _,
    context: _,
  };
}
function _(_) {
  let {
      active: _,
      onDismiss: _,
      className: _,
      modalClassName: _,
      bGamepadUIScrollWithin: _,
      children: _,
      ..._
    } = _,
    { headerId: _, context: _ } = _({
      labelledBy: _[`aria-labelledby`],
    });
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_, {
      active: _,
      children: (0, _.jsx)(_, {
        onEscKeypress: _,
        className: _,
        bGamepadUIScrollWithin: _,
        children: (0, _.jsx)(_, {
          role: `dialog`,
          "aria-labelledby": _,
          className: _,
          ..._,
          children: _,
        }),
      }),
    }),
  });
}
function _(_) {
  let { className: _, children: _ } = _;
  return (0, _.jsx)(_, {
    active: !0,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: _,
    }),
  });
}
