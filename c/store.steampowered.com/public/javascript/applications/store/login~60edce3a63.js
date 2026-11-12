import { _ } from "./chunk~f025431ab0.js";
import { _, _ } from "./chunk~01cfc309bf.js";
import { _, _ } from "./main.js";
import "./chunk~7cbe6011f7.js";
import { _, _, _, _ } from "./chunk~2e8feda0b1.js";
var _ = `PvNen1Rhhrk-`,
  _ = _(_()),
  _ = _();
function _(_) {
  let { redirectUrl: _ = _.STORE_BASE_URL } = _,
    _ = _(),
    [_, _] = (0, _.useState)(!1),
    _ = _.guest;
  return (0, _.jsx)(`div`, {
    className: _,
    children: _
      ? (0, _.jsx)(_, {})
      : (0, _.jsx)(_, {
          autoFocus: !0,
          transport: _,
          platform: 2,
          onComplete: (_) => {
            _ == _.k_PrimaryDomainFail ? _(!0) : window.location.assign(_);
          },
          redirectUrl: _,
          children:
            _ &&
            (0, _.jsx)(_, {
              redirectURL: _.redirectUrl,
            }),
        }),
  });
}
export { _ as default };
