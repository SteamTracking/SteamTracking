import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _ } from "./routing.js";
import { _ } from "./main.js";
import { MarketBaseUIRoot as _, _, _ } from "./market.js";
var _ = _(_()),
  _ = _();
function _(_) {
  let { app: _, initialValue: _, debugMode: _ } = _,
    [_, _] = (0, _.useState)(_),
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(!0);
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        width: `259px`,
        ref: _,
        position: `relative`,
        style: {
          zIndex: 402,
        },
        children: (0, _.jsx)(_.Suspense, {
          fallback: null,
          children: (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              value: _,
              onTextChange: _,
              app: _ ? _ : void 0,
              onClearApp: () => _(!1),
              radius: `none`,
              name: `q`,
              autoComplete: `off`,
              popoverWidth: (_) => `clamp( ${_.unTargetWidth}px, 440px, 95vw )`,
            }),
          }),
        }),
      }),
    }),
  });
}
function _(_) {
  return (_.use(_.Ready()), _.children);
}
export { _ as default };
