import { _ } from "./rolldown-runtime.js?contenthash=C8f2gWku";
import { _, _ } from "./libraries.js?contenthash=CNC_iAx3";
import { _, _ } from "./main.js?contenthash=DIXnzMn5";
import "./steammessages_twofactor_pb.js?contenthash=9fAAsxdl";
import { _, _, _, _ } from "./logindialog.js?contenthash=BXiEqUZ0";
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
