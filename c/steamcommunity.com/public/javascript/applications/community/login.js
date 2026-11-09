import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _, _, _ } from "./main.js";
import { _, _, _ } from "./logindialog.js";
var _ = _(_()),
  _ = `_9-qRKyX6pp4-`,
  _ = _();
function _(_) {
  let { redirectUrl: _ = _.COMMUNITY_BASE_URL } = _,
    [_] = (0, _.useState)(
      new _(new _(_.WEBAPI_BASE_URL)).GetAnonymousServiceTransport(),
    ),
    [_, _] = (0, _.useState)(!1);
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
        }),
  });
}
export { _ as default };
