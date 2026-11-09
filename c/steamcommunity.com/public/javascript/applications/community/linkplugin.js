import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _ } from "./bbcodes.module.js";
import { _ } from "./main.js";
import { _, _, _, _, _, _ } from "./pmbbcodeschema.js";
var _ = _(_(), 1),
  _ = `Z7wUlPllFIw-`,
  _ = `_2gxT3R534nw-`,
  _ = `mMPoMyKK0Co-`,
  _ = _(),
  _ = _.memo(function (_) {
    let { linkMarkType: _, onURLPasted: _, schema: _, onClickURL: _ = _ } = _,
      _ = _.useRef(_);
    _.current = _;
    let [_, _] = _.useState(),
      [_, _] = _.useState(),
      [_, _] = _.useState(),
      [_, _] = _(_),
      _ = _.useMemo(
        () =>
          new _({
            props: {
              handleClickOn(_, _, _, _, _, _) {
                if (_ && (_.ctrlKey || _.button == 1)) {
                  let _ = _.resolve(_ - _)
                      .marks()
                      .find((_) => _.type == _),
                    _ = _ && _(_.attrs.href);
                  if (_) return _.current(_, _.view), _.preventDefault(), !0;
                }
                return !1;
              },
              handleKeyDown(_, _) {
                return _.key == `k` &&
                  (_.metaKey || _.ctrlKey) &&
                  !_.shiftKey &&
                  !_.altKey
                  ? (_(_), !0)
                  : !1;
              },
              clipboardTextParser(_, _, _, _) {
                let _ = _(_, _, _, _);
                return _ && new _(_.from(_), _.start(), _.end());
              },
              handlePaste(_, _, _) {
                let _ = [];
                if (
                  (_.content.descendants((_, _) => {
                    if (_.isText) {
                      let _ = _(_, _.text, _, _);
                      _ &&
                        _.push({
                          node: _,
                          pos: _,
                          rgNodes: _,
                        });
                    }
                  }),
                  !_.length)
                )
                  return !1;
                let _ = _.state._;
                _.selection.empty || _.deleteSelection();
                let _ = _.selection.from,
                  _ = 0;
                for (let _ of _) {
                  let { node: _, pos: _, rgNodes: _ } = _,
                    _ = _.content.cut(_, _).append(_.from(_));
                  _.insert(_, _), (_ += _.size + 2), (_ = _ + _.nodeSize);
                }
                return (
                  _.insert(_, _.content.cut(_)),
                  _.scrollIntoView(),
                  _.dispatch(_),
                  !0
                );
              },
              handleDOMEvents: {
                mouseover: (_, _) => {
                  for (
                    let _ = _.target;
                    _ && _ != _.currentTarget;
                    _ = _.parentElement
                  )
                    if (_.nodeName == `A` && `getBoundingClientRect` in _) {
                      let _ = _.getBoundingClientRect();
                      _(_.left + _.width / 2), _(_.bottom + 2), _(_);
                      return;
                    }
                  _(void 0);
                },
                mouseleave: (_, _) => (_(void 0), !1),
              },
            },
          }),
        [_, _, _, _],
      );
    _(_);
    let _ = null;
    return (
      _ &&
        _ &&
        _ &&
        (_ = (0, _.jsx)(_, {
          top: _,
          left: _,
          href: _.getAttribute(`href`),
        })),
      (0, _.jsxs)(_.Fragment, {
        children: [_, _],
      })
    );
  });
function _(_) {
  let { top: _, left: _, href: _ } = _,
    [_, _] = _.useState(0),
    _ = _.useRef(null);
  _.useLayoutEffect(() => {
    _(_.current.getBoundingClientRect().width);
  }, [_, _, _]);
  let _ = {
    top: `${_}px`,
    left: `${Math.max(_ - _ / 2, 12)}px`,
  };
  return (0, _.jsxs)(`div`, {
    className: _,
    style: _,
    ref: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#UserGameNotes_ClickToOpenLink`),
      }),
    ],
  });
}
function _(_, _) {
  _.open(_);
}
export { _ };
