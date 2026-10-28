import { _ } from "./rolldown-runtime.js?contenthash=DbX3T1YK";
import { _, _ } from "./libraries.js?contenthash=b0JzZ9xY";
import "./steammessages_twofactor_pb.js?contenthash=CZ2mBkuA";
import { _, _, _, _ } from "./logindialog.js?contenthash=ryq4v2gg";
import { _, _ } from "./main.js?contenthash=C1XpPKHE";
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
