import { _, _, _, _ } from "./mobx.esm.js";
import { _, _, _, _ } from "./src.js";
import { _ } from "./dialogs.js";
import { _ } from "./flex.js";
import { _, _ } from "./variantdefaults.js";
import { _, _, _ } from "./localization.js";
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `WKhffzvaq2A-`;
function _() {
  return _;
}
var _ = _();
function _(_) {
  let { extracted: _, remaining: _ } = _(_),
    {
      value: _,
      onTextChange: _,
      onTextClear: _,
      clearable: _,
      onChange: _,
      radius: _,
      variant: _,
      size: _,
      beforeContent: _,
      afterContent: _,
      inputRef: _,
      ref: _,
      disabled: _,
      gamepadFocusable: _ = !0,
      status: _,
      ..._
    } = _,
    _ = _(),
    _ = (_) => {
      _ || (_(_.target.value), _ && _(_));
    },
    _ = () => {
      _(``), _ && _();
    },
    _ = !!_ && _,
    _ = _
      ? (0, _.jsx)(_, {
          onClick: _,
          cursor: `pointer`,
          hitSlop: !0,
        })
      : _,
    _ = _(`TextInput`, _),
    _ = {
      ..._,
      variant: _,
      size: _,
      radius: _,
      status: _,
      beforeContent: _,
      afterContent: _,
      ref: _,
      disabled: _,
    },
    _ = (0, _.useRef)(null),
    _ = (_) => {
      _.current && _.target !== _.current && _.current.focus();
    },
    _ = _ && _,
    _ = _ ? _ : `input`,
    _ =
      _ && _ && !_
        ? {
            onSecondaryButton: _,
            actionDescriptionMap: {
              [_.SECONDARY]: _.Localize(`#Clear`),
            },
          }
        : {};
  return (0, _.jsx)(_, {
    cursor: `text`,
    ..._,
    onClick: _,
    children: (0, _.jsx)(_, {
      ref: _(_, _),
      type: `text`,
      "aria-disabled": _,
      readOnly: _,
      className: (0, _.default)(_(), _()),
      value: _ || ``,
      onChange: _,
      ..._,
      ..._,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    noFocusRing: !0,
    ..._,
  });
}
function _(_) {
  if (!_ || _.trim().length == 0) return null;
  try {
    return JSON.parse(_);
  } catch {
    return null;
  }
}
function _(_, _) {
  let _ = new Set();
  return _.filter((_) => {
    let _ = _(_);
    return !_.has(_) && (_.add(_), !0);
  });
}
function _(..._) {
  return [...new Set(_.flat())];
}
function _(_) {
  let { href: _, children: _ } = _;
  return _
    ? (0, _.jsx)(`a`, {
        ..._,
        children: _,
      })
    : (0, _.jsx)(_.Fragment, {
        children: _,
      });
}
function _(_, _) {
  let _ = {
      sText: _(`#Dashboard_UpcomingEvents_AppReleaseState_unavailable`),
      sTooltip: _(
        `#Dashboard_UpcomingEvents_AppReleaseState_unavailable_Description`,
      ),
      bPrereleaseOrReleased: !1,
    },
    _ = {
      sText: _(`#Dashboard_UpcomingEvents_AppReleaseState_storepagenotlive`),
      sTooltip: void 0,
      bPrereleaseOrReleased: !1,
    },
    _ = {
      released: {
        sText: _(`#Dashboard_UpcomingEvents_AppReleaseState_released`),
        sTooltip: _(
          `#Dashboard_UpcomingEvents_AppReleaseState_released_Description`,
        ),
        bPrereleaseOrReleased: !0,
      },
      prerelease: {
        sText: _(`#Dashboard_UpcomingEvents_AppReleaseState_prerelease`),
        sTooltip: _(
          `#Dashboard_UpcomingEvents_AppReleaseState_prerelease_Description`,
        ),
        bPrereleaseOrReleased: !0,
      },
      ownersonly: {
        sText: _(`#Dashboard_UpcomingEvents_AppReleaseState_ownersonly`),
        sTooltip: _(
          `#Dashboard_UpcomingEvents_AppReleaseState_ownersonly_Description`,
        ),
        bPrereleaseOrReleased: !1,
      },
      preloadonly: {
        sText: _(`#Dashboard_UpcomingEvents_AppReleaseState_preloadonly`),
        sTooltip: _(
          `#Dashboard_UpcomingEvents_AppReleaseState_preloadonly_Description`,
        ),
        bPrereleaseOrReleased: !1,
      },
      disabled: {
        sText: _(`#Dashboard_UpcomingEvents_AppReleaseState_disabled`),
        sTooltip: _(
          `#Dashboard_UpcomingEvents_AppReleaseState_disabled_Description`,
        ),
        bPrereleaseOrReleased: !1,
      },
    },
    _ = _;
  return _ in _ ? (_ = _[_]) : _ || (_ = _), _;
}
function _(_) {
  if (_.type == `seasonalsale`) {
    let _ = _.name.toLowerCase();
    if (_.includes(`spring`)) return `#dd71d4`;
    if (_.includes(`summer`)) return `#29c6ec`;
    if (_.includes(`autumn`)) return `#ac240c`;
    if (_.includes(`winter`)) return `#01704f`;
  }
}
function _(_) {
  let _ = 0;
  for (let _ = 0; _ < _.length; _++) _ = _.charCodeAt(_) + ((_ << 5) - _);
  return `hsl(${_ % 360}, ${50 + (_ % 50)}%, ${40 + (_ % 30)}%, 0.25)`;
}
export { _, _, _, _, _, _, _, _, _ };
