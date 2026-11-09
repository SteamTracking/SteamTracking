import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _ } from "./historyutils.js";
import { _ } from "./throbber.js";
import { _ } from "./eventdevfeaturestore.js";
import { _ } from "./fakesalehelper.js";
import { _ } from "./partnereventstore.js";
import { _, _ } from "./main.js";
import _ from "./storesaledisplay.js";
var _ = _(_()),
  _ = _();
function _(_) {
  let { clanAccountID: _, gidEvent: _ } = _,
    { eventModel: _, bLoading: _ } = _(_, _),
    _ = _(_.LANGUAGE),
    [_] = _(`livepreview`);
  return (
    _ && (_ = _(_, 36, `creatorhome_fake`, _())),
    _.useEffect(() => {
      if (!_ && !_) {
        let _ = new URL(window.location.href);
        _.searchParams.set(`v1`, `1`), window.location.replace(_.toString());
      }
    }, [_, _]),
    _
      ? (0, _.jsx)(_, {
          eventModel: _,
          promotionName: `creatorhome_${_}`,
          language: _,
        })
      : (0, _.jsx)(_, {})
  );
}
export { _ as default };
