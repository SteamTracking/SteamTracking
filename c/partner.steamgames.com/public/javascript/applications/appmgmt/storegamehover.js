import { _, _, _, _ } from "./mobx.esm.js";
import { _ } from "./src.js";
import { _ } from "./dialogs.js";
import { _ } from "./storebrowsequerycontext.js";
import { _ } from "./saletags.js";
import { _ } from "./storenaveventcontext.js";
import { _ } from "./localization2.js";
var _ = _(_(), 1),
  _ = _();
function _(_) {
  if (_) {
    if (`appid` in _) return `app`;
    if (`bundleid` in _) return `bundle`;
    if (`packageid` in _) return `sub`;
  }
}
function _(_) {
  let {
      _: _,
      hoverClassName: _,
      fnGetIDOverride: _,
      fnHoverState: _,
      disableScreenshots: _,
      children: _,
    } = _,
    _ = _.useRef(null),
    _ = _.useCallback(
      (_) => {
        let _ = _(_);
        _ &&
          (_ && _(!0),
          window.GameHover &&
            (_.current &&
              _ &&
              (_.current.dataset.hoverDisableScreenshots = `true`),
            window.GameHover(_ ? _() : _.current, _, `global_hover`, {
              type: _,
              _: _(_)._,
              _: 1,
            })));
      },
      [_, _, _, _],
    ),
    _ = _.useCallback(
      (_) => {
        _(_) &&
          (_ && _.relatedTarget && _(!1),
          window.HideGameHover &&
            window.HideGameHover(_ ? _() : _.current, _, `global_hover`));
      },
      [_, _, _],
    );
  return (0, _.jsx)(`div`, {
    ref: _,
    className: _,
    onMouseEnter: _,
    onMouseLeave: _,
    onFocus: _,
    onBlur: _,
    children: _,
  });
}
function _(_) {
  let { _: _, strExtraParams: _, fnOnClickOverride: _, strOverrideURL: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(
      _ ||
        (_ && `creatorid` in _
          ? _(`${_.STORE_BASE_URL}curator/${_(_)._}${_ ? `?${_}` : ``}`, _, _)
          : _(`${_.STORE_BASE_URL}${_(_)}/${_(_)._}${_ ? `?${_}` : ``}`, _, _)),
    );
  return (0, _.jsx)(_, {
    ..._,
    children: (0, _.jsx)(_, {
      className: _.className,
      href: _ ? void 0 : _,
      target: _.IN_CLIENT || _ ? void 0 : `_blank`,
      rel: `noopener noreferrer`,
      onClick: _,
      children: _.children,
    }),
  });
}
