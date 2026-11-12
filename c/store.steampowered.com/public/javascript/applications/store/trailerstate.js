import { _ } from "./chunk~f025431ab0.js";
import { _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~38061b7abb.js";
import { _, _, _ } from "./main.js";
var _ = _(_(), 1),
  _ = _(),
  _ = {
    name: `trailerPrefs`,
    options: {
      path: `/`,
      secure: !0,
      maxAge: 2592e6,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  },
  _ = {
    flVolume: 0.8,
    bMuted: !0,
  };
function _(_) {
  return _.flVolume === _.flVolume && _.bMuted === _.bMuted;
}
function _() {
  try {
    let _ = _(_);
    if (!_) return _;
    let _ = JSON.parse(_);
    return {
      flVolume: typeof _.flVolume == `number` ? _.flVolume : _.flVolume,
      bMuted: typeof _.bMuted == `boolean` ? _.bMuted : _.bMuted,
    };
  } catch {
    return _;
  }
}
function _(_) {
  _(_) || Object.keys(_).length == 0 ? _(_) : _(_, JSON.stringify(_));
}
function _(_) {
  let { children: _ } = _,
    [_, _] = (0, _.useState)(() => _());
  return (
    (0, _.useEffect)(() => {
      _(_);
    }, [_]),
    (0, _.jsx)(_, {
      playerVolume: _.flVolume,
      setPlayerVolume: (_) =>
        _((_) => ({
          ..._,
          flVolume: _,
        })),
      audioMuted: _.bMuted,
      setAudioMuted: (_) =>
        _((_) => ({
          ..._,
          bMuted: _,
        })),
      children: _,
    })
  );
}
