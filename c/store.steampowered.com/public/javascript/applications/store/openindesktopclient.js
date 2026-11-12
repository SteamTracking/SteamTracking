import { _, _ } from "./chunk~f025431ab0.js";
import { _, _ } from "./chunk~01cfc309bf.js";
import { _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_(), 1),
  _ = `Y6jQLvaUs3E-`,
  _ = `pdKx9hOuFv0-`,
  _ = _();
function _(_) {
  let { children: _, ..._ } = _;
  return (0, _.jsx)(_, {
    className: _,
    ..._,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: _.children,
    }),
  });
}
function _() {
  return typeof navigator < `u` ? navigator.userAgent : void 0;
}
function _(_ = _()) {
  let _ = _?.match(
    /Valve (?<family>Steam (?:Client|GameOverlay|Tenfoot|ClientUI|Gamepad(?: VR)?(?:\/Steam Deck)?))( \[(?<betaid>[^\]]*)\])?(\/(?<launcher>[A-Za-z0-9_]+))?\/(?<version>[0-9]*)/,
  );
  if (_) return _.groups;
}
function _(_ = _()) {
  return (
    !!_ &&
    /iP(?:od|hone|ad)|[pP]lay[sS]tation [vV]ita|Symbian|webOS\/|Blazer|\/GoBrowser|BlackBerry|Opera M(?:obi|ini)\/|Vortex|Android|Windows (?:CE|Mobile)/.test(
      _,
    )
  );
}
var _ = `oQvwi1Y4MaQ-`,
  _ = `GKmWn7m8mDY-`,
  _ = `WdULLkUdyac-`,
  _ = `_7q8JkI4IXK8-`,
  _ = _({
    OpenInDesktopClient: () => _,
    default: () => _,
    useOpenWebInSteamClient: () => _,
    useShowOpenInSteamBanner: () => _,
  });
function _() {
  return !_.logged_in && !_() && !_();
}
function _() {
  let { fnOpenInSteamClient: _ } = _();
  return _()
    ? (0, _.jsx)(_, {
        className: _,
        children: (0, _.jsx)(_, {
          children: (0, _.jsxs)(_, {
            align: `center`,
            gap: `5`,
            padding: `3`,
            children: [
              (0, _.jsx)(_, {
                className: _,
                children: (0, _.jsx)(_, {
                  onClick: _,
                  children: _.Localize(`#OpenInDesktopAppBanner_OpenAppButton`),
                }),
              }),
              (0, _.jsxs)(_, {
                _: `div`,
                size: `4`,
                className: _,
                children: [
                  (0, _.jsx)(_, {
                    weight: `heavy`,
                    className: _,
                    children: _.Localize(`#OpenInDesktopAppBanner_NotSignedIn`),
                  }),
                  (0, _.jsx)(`br`, {}),
                  _.Localize(`#OpenInDesktopAppBanner_Body`),
                ],
              }),
            ],
          }),
        }),
      })
    : null;
}
function _() {
  return {
    fnOpenInSteamClient: _.useCallback(() => {
      let _ = `${_()}//openurl/`,
        _ = _(`browserid`);
      if (_) {
        let _ = new URL(window.location.href),
          _ = new URLSearchParams(_.search);
        (_.set(`utm_bid`, _),
          (_ += _.origin + _.pathname + `?` + _.toString() + _.hash));
      } else _ += window.location.href;
      window.location.href = _;
    }, []),
  };
}
