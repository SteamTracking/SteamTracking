import { _ } from "./chunk~f025431ab0.js";
import { _ } from "./chunk~01cfc309bf.js";
import { _, _ } from "./main.js";
var _ = _(_());
function _(_, _) {
  let _;
  if (typeof _ == `string`) _ = _;
  else if (`location` in _) _ = _.location.search;
  else if (`search` in _) _ = _.search;
  else return;
  let _ = new URLSearchParams(_.substring(1));
  if (_.has(_)) {
    let _ = _.getAll(_);
    return _[_.length - 1];
  }
}
function _(_, _, _, _ = !1) {
  let _ = new URLSearchParams(_.location.search.substring(1));
  if (_ != null && _ != null) {
    if (_.get(_) == _) return;
    _.set(_, _);
  } else {
    if (!_.has(_)) return;
    _.delete(_);
  }
  _
    ? _.replace(`?${_.toString()}`, {
        ..._.location.state,
      })
    : _.push(`?${_.toString()}`);
}
function _(_, _, _) {
  _(_, _, _, !0);
}
function _(_, _) {
  let _ = _(),
    _ = _();
  return [
    (0, _.useMemo)(() => {
      let _ = _(_.search, _);
      return _ != null && _ != null
        ? _ != null && _ != null
          ? typeof _ == `boolean`
            ? _.constructor(_ !== `false`)
            : _.constructor(_)
          : _
        : _;
    }, [_.search, _, _]),
    (0, _.useCallback)(
      (_, _ = !1) => {
        _(_, _, _ != null && _ != null ? String(_) : null, _);
      },
      [_, _],
    ),
  ];
}
function _(_, _, _ = !1) {
  let _ = new URLSearchParams(_.location.search.substring(1));
  for (let _ in _)
    if (_.hasOwnProperty(_)) {
      let _ = _[_];
      (_.delete(_), _ != null && _ != null && _.append(_, _));
    }
  _
    ? _.replace(`?${_.toString()}`, {
        ..._.location.state,
      })
    : _.push(`?${_.toString()}`);
}
function _(_, _) {
  _(_, _, !0);
}
