import { _, _ } from "./chunk~de7f2df91c.js";
import { _, _ } from "./chunk~44f252525d.js";
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
