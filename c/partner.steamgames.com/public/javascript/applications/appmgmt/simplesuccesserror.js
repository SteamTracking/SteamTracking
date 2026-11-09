import { _, _, _ } from "./mobx.esm.js";
import { _, _ } from "./dialogs.js";
import "./modals.js";
import { _ } from "./throbber.js";
import { _ } from "./partnereventdialog.module.js";
var _ = _(_()),
  _ = _();
function _(_) {
  let [_, _] = (0, _.useState)(() => !!_),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null);
  return {
    bLoading: _,
    bError: _,
    bSuccess: _,
    strError: _,
    strSuccess: _,
    elSuccess: _,
    elError: _,
    strThrobber: _,
    fnSetLoading: _,
    fnSetError: _,
    fnSetSuccess: _,
    fnSetStrError: _,
    fnSetStrSuccess: _,
    fnSetElSuccess: _,
    fnSetElError: _,
    fnSetThrobber: _,
  };
}
function _(_) {
  let { strDialogTitle: _, state: _, closeModal: _, strThrobber: _ } = _,
    {
      bLoading: _,
      bError: _,
      bSuccess: _,
      strError: _,
      strSuccess: _,
      elSuccess: _,
      elError: _,
      strThrobber: _,
    } = _;
  return _ || _ || _
    ? (0, _.jsxs)(_, {
        strTitle: _,
        bAlertDialog: !0,
        closeModal: _,
        className: _,
        children: [
          !!_ &&
            (0, _.jsx)(`div`, {
              className: `wizbFzhGtBc-`,
              children: _ || _(`#Error_ErrorCommunicatingWithNetwork`),
            }),
          !!_ && _,
        ],
      })
    : _ || _ || _
      ? (0, _.jsx)(_, {
          strTitle: _,
          strDescription: _ || _(`#EventDisplay_Share_Success`),
          bAlertDialog: !0,
          closeModal: _,
          className: _,
          children: (0, _.jsx)(_.Fragment, {
            children: !!_ && _,
          }),
        })
      : (0, _.jsx)(_, {
          strTitle: _,
          className: _,
          bProgressDialog: !0,
          closeModal: () => {},
          children: (0, _.jsx)(_, {
            string: _ || _ || _(`#Loading`),
            size: `medium`,
            position: `center`,
          }),
        });
}
export { _, _ };
