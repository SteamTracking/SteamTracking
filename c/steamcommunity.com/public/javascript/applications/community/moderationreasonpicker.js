import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _ } from "./basebuttons.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_(), 1),
  _ = _();
function _(_) {
  let [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)([]),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    _ = _.reasons;
  for (let _ of _) _ = _[_].children;
  let _ = _ === null ? null : _(_),
    _ = _ === null ? null : _(_),
    _ = () => {
      _ === null
        ? _.length === 0
          ? _.onSelect(null)
          : _(_.slice(0, -1))
        : _(null);
    };
  return (0, _.jsxs)(`div`, {
    children: [
      _ === null &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`div`, {
              className: `oBBLRDyMwQ0-`,
              children: _.map((_, _) =>
                _(_)
                  ? (0, _.jsx)(
                      _,
                      {
                        href: _.url,
                        width: `100%`,
                        color: `dull`,
                        children: _.Localize(_.strLocToken),
                      },
                      _.url,
                    )
                  : (0, _.jsx)(
                      _,
                      {
                        onClick: () => {
                          if (_(_)) {
                            let _ = [..._];
                            (_.push(_), _(_));
                          } else if (_(_))
                            _(_.value) || _(_.value)
                              ? _(_.value)
                              : _.onSelect(_.value);
                          else throw Error(`This should be unreachable.`);
                        },
                        width: `100%`,
                        color: `dull`,
                        children: (0, _.jsxs)(_, {
                          justify: `between`,
                          align: `center`,
                          width: `100%`,
                          children: [
                            (0, _.jsx)(`span`, {
                              children: _(_)
                                ? _.Localize(_.strLocToken)
                                : _(_.value),
                            }),
                            _(_) &&
                              (0, _.jsx)(`span`, {
                                children: `▶`,
                              }),
                          ],
                        }),
                      },
                      _,
                    ),
              ),
            }),
            (0, _.jsx)(_, {
              onClick: _,
              children: `Back`,
            }),
          ],
        }),
      _ !== null &&
        (0, _.jsxs)(`div`, {
          className: `oBBLRDyMwQ0-`,
          children: [
            (0, _.jsx)(`div`, {
              className: `h39kXDS8c6A-`,
              children: _(_),
            }),
            _ !== null &&
              (0, _.jsxs)(`label`, {
                children: [
                  (0, _.jsx)(`input`, {
                    type: `checkbox`,
                    checked: _,
                    onChange: (_) => _(_.target.checked),
                  }),
                  ` Targeted at women`,
                ],
              }),
            _ !== null &&
              (0, _.jsxs)(`label`, {
                children: [
                  (0, _.jsx)(`input`, {
                    type: `checkbox`,
                    checked: _,
                    onChange: (_) => _(_.target.checked),
                  }),
                  ` Deepfake`,
                ],
              }),
            (0, _.jsxs)(`div`, {
              className: void 0,
              children: [
                (0, _.jsx)(_, {
                  onClick: _,
                  children: `Back`,
                }),
                (0, _.jsx)(_, {
                  onClick: () => {
                    let _ = _;
                    _ !== null &&
                      (_ && _(_) !== null && (_ = _(_)),
                      _ && _(_) !== null && (_ = _(_)),
                      _.onSelect(_));
                  },
                  children: `Continue`,
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
