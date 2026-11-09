import "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _, _, _, _, _, _, _, _, _ } from "./main.js";
_();
var _ = _();
function _(_) {
  let _ = _?.jsondata?.read_more_link;
  if (!_) return;
  let _ = _(_).toLocaleLowerCase();
  return _ ? [_] : void 0;
}
function _(_, _) {
  return _(_, _(_));
}
function _(_, _) {
  if (!_) return ``;
  if (!_(_)) return _(_);
  let _ = _(_, _) ? _(_) : _;
  return (_.IN_CLIENT ? `steam://openurl_external/` : ``) + _;
}
function _(_, _, _) {
  let _ = _.toLowerCase().startsWith(`http`) ? _ : `http://` + _;
  return (0, _.jsx)(_, {
    url: _,
    event: _,
    children: _ || _,
  });
}
var _ = (_) => {
  let { url: _, event: _, className: _, style: _ } = _,
    _ = _(_);
  _ = _(_, _);
  let _ = _(_) ? `noopener nofollow` : void 0,
    _ =
      typeof _.children == `string` &&
      _.children.length > 0 &&
      _ &&
      !_.startsWith(`steam://`)
        ? _(_)
        : void 0;
  return (0, _.jsx)(_, {
    toolTipContent: _,
    direction: `top`,
    children: (0, _.jsx)(_, {
      className: _,
      href: _,
      rel: _,
      _: _._,
      style: _,
      children: _.children,
    }),
  });
};
