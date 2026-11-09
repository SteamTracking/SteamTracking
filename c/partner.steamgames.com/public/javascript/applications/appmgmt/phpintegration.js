import { _, _, _, _ } from "./mobx.esm.js";
import { _, _, _, _, _, _, _ } from "./src.js";
import { _ } from "./dialogs.js";
import { _ } from "./react-router.js";
var _ = _(_(), 1),
  _ = _(),
  _ = _.forwardRef(function (_, _) {
    let { children: _, navTreeRef: _, ..._ } = _,
      _ = _.useRef(void 0),
      _ = _(_, _),
      _ = _(),
      _ = _(`__nav_tree_root`);
    return (0, _.jsx)(_, {
      ..._,
      navTreeRef: _,
      ref: _,
      parentEmbeddedNavTree: _,
      disabledRoot: !_,
      historyMode: `navigationapi`,
      "flow-children": `column`,
      children: (0, _.jsx)(_, {
        disableFocusRing: !_,
        children: _,
      }),
    });
  }),
  _ = _(_());
function _({
  config: _,
  isDynamic: _,
  omitFocusNavTreeBridge: _,
  takeGamepadFocusOnMount: _,
}) {
  let _ = _ ? _ : _;
  return (0, _.jsx)(_.Fragment, {
    children: Object.keys(_ || {}).map((_) =>
      (0, _.jsx)(
        _,
        {
          featureName: _,
          render: _[_],
          omitFocusNavTreeBridge: !!_,
          takeGamepadFocusOnMount: !!_,
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let { featureName: _ } = _,
    _ = _.useMemo(
      () => Array.from(document.querySelectorAll(`[data-featuretarget=${_}]`)),
      [_],
    );
  return _.length
    ? (0, _.jsx)(_.Fragment, {
        children: _.map((_, _) =>
          (0, _.jsx)(
            _,
            {
              elem: _,
              ..._,
            },
            _,
          ),
        ),
      })
    : null;
}
function _(_) {
  let { featureName: _ } = _,
    _ = _(),
    _ = _.useRef([]),
    _ = _.useRef(0);
  return (
    _.useEffect(() => {
      let _ = `[data-featuretarget=${_}]`;
      (_.current = []), (_.current = 0);
      let _ = (_) =>
          _.current.push({
            key: _.current++,
            elem: _,
          }),
        _ = (_) => _(_.current, (_) => _.elem == _);
      document.querySelectorAll(_).forEach(_), _.current.length && _();
      let _ = new MutationObserver((_) => {
        let _ = !1;
        for (let _ of _)
          _(
            _,
            (_) => {
              _(_, _).forEach((_) => {
                _(_), (_ = !0);
              });
            },
            (_) => {
              _(_, _).forEach((_) => {
                _(_), (_ = !0);
              });
            },
          );
        _ && _();
      });
      return (
        _.observe(document, {
          childList: !0,
          subtree: !0,
        }),
        () => _.disconnect()
      );
    }, [_, _]),
    (0, _.jsx)(_.Fragment, {
      children: _.current.map(({ key: _, elem: _ }) =>
        (0, _.jsx)(
          _,
          {
            elem: _,
            ..._,
          },
          _,
        ),
      ),
    })
  );
}
function _(_) {
  let {
      featureName: _,
      elem: _,
      render: _,
      omitFocusNavTreeBridge: _,
      takeGamepadFocusOnMount: _,
    } = _,
    _ = _.useMemo(() => _(_.getAttribute(`data-props`), _), [_, _]),
    _ = _.useRef(void 0);
  return (
    _.useEffect(() => {
      _.current && _ && _.current.Activate(!0);
    }, [_, _]),
    _
      ? (0, _.createPortal)(
          (0, _.jsx)(_, {
            children: (0, _.jsx)(_.Suspense, {
              children: _(_),
            }),
          }),
          _,
        )
      : (0, _.createPortal)(
          (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              navID: `FeatureTarget_${_}`,
              navTreeRef: _,
              children: (0, _.jsx)(_.Suspense, {
                children: _(_),
              }),
            }),
          }),
          _,
        )
  );
}
function _(_, _) {
  if (!_) return {};
  try {
    let _ = JSON.parse(_);
    if (!_ || typeof _ != `object` || Array.isArray(_)) throw Error();
    return _;
  } catch (_) {
    return (
      console.error(
        `There was a problem parsing props for feature target "${_}"`,
        _,
      ),
      console.log(`Problematic string: >>>${_}<<<`),
      {}
    );
  }
}
function _(_, _) {
  return _.matches(_) ? [_] : _.querySelectorAll(_);
}
export { _ };
