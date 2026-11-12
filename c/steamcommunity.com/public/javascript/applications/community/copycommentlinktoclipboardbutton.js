import { _ } from "./chunk~f025431ab0.js";
import { _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~f0745bb5e2.js";
var _ = _(_()),
  _ = _();
function _(_) {
  let [_, _] = (0, _.useState)(
      () => localStorage.floatingforumreportedsubjectslist !== void 0,
    ),
    _ = (0, _.useMemo)(() => {
      let _ = window.location.href.split(`#`)[0];
      return (_.gidcomment !== null && (_ += `#c` + _.gidcomment), _);
    }, [_.gidcomment]);
  return (0, _.jsx)(_, {
    text: _,
    size: _ ? `large` : `small`,
  });
}
export { _ as default };
