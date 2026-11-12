import { _ } from "./chunk~f025431ab0.js";
import { _, _ } from "./chunk~01cfc309bf.js";
import { _, _, _, _, _, _ } from "./chunk~cf3721cc1c.js";
import { _ } from "./chunk~331382b23f.js";
import { _ } from "./main.js";
var _ = _(_(), 1),
  _ = `BedOijc5U30-`,
  _ = _();
function _(_) {
  let _ = _(),
    _ = _(_),
    { data: _ } = _(_ ? _ : void 0),
    _ = _.useMemo(() => _(_?.votes ?? []).includes(_), [_, _]);
  if (_(_)) return `nominations`;
  if (_ && _) return `voting`;
}
function _(_) {
  let { appID: _ } = _,
    _ = _(_);
  return _
    ? (0, _.jsx)(`a`, {
        href: _(_ == `nominations` ? `nominations` : ``),
        className: _,
        children: (0, _.jsx)(_, {
          appID: _,
          ePhase: _,
        }),
      })
    : null;
}
function _(_) {
  let { appID: _, ePhase: _ } = _,
    { data: _ } = _({
      appid: _,
    });
  return (0, _.jsx)(`div`, {
    className: void 0,
    children: _?.name,
  });
}
export { _ as SteamAwardAppBanner };
