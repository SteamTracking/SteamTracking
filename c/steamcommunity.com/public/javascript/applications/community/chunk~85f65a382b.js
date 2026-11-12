import { _ } from "./chunk~f025431ab0.js";
import { _, _ } from "./chunk~01cfc309bf.js";
import { _, _, _, _, _, _ } from "./main.js";
import { _, _, _, _ } from "./chunk~2e8feda0b1.js";
var _ = _(_()),
  _ = _();
function _(_) {
  return (0, _.jsx)(_, {
    onEscKeypress: _.closeModal,
    bDisableBackgroundDismiss: !0,
    children: (0, _.jsx)(_, {
      redirectURL: _.redirectURL,
      guestOption: _.guestOption,
    }),
  });
}
function _() {
  _(
    (0, _.jsx)(_, {
      ownerWin: window,
      redirectURL: window.location.href,
    }),
    window,
    {
      strTitle: _(`#Login_SignInTitle`),
    },
  );
}
function _(_) {
  let { redirectURL: _, guestOption: _ } = _,
    [_] = (0, _.useState)(
      new _(new _(_.WEBAPI_BASE_URL)).GetAnonymousServiceTransport(),
    ),
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsx)(`div`, {
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
          theme: `modal`,
          children:
            _ &&
            (0, _.jsx)(_, {
              redirectURL: _,
            }),
        }),
  });
}
