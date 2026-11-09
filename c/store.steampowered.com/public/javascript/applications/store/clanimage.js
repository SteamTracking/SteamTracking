import "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _ } from "./clanimagemodels.js";
import { _ } from "./multisourceimage.js";
_();
var _ = _();
function _(_) {
  let { strImageToken: _, language: _, strAltText: _ } = _,
    _ = _(_, _);
  return _
    ? typeof _ == `string`
      ? (0, _.jsx)(`img`, {
          src: _,
          alt: _,
        })
      : (0, _.jsx)(_, {
          rgSources: _,
          strAltText: _,
        })
    : null;
}
