import { _ } from "./rolldown-runtime.js?contenthash=C8f2gWku";
import { _, _ } from "./libraries.js?contenthash=CNC_iAx3";
import { _, _ } from "./main.js?contenthash=CFzBcxgL";
import "./steammessages_twofactor_pb.js?contenthash=S88bSi0e";
import { _, _, _, _ } from "./logindialog.js?contenthash=BqrzHBHZ";
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
