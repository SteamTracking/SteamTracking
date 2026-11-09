import { _, _ } from "./mobx.esm.js";
import { _, _ } from "./react-router.js";
_();
var _ = _();
function _(_) {
  let _ = _();
  return _.pathname.includes(`//`)
    ? (console.error(`Malformed path: "${_.pathname}"`),
      (0, _.jsx)(_, {
        _: _.pathname.replace(/\/\//g, `/`),
      }))
    : _.redirect
      ? (0, _.jsx)(_, {
          push: !0,
          _: _.redirect || `/`,
        })
      : null;
}
