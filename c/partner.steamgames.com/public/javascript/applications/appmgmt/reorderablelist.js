import { _, _, _, _, _ } from "./mobx.esm.js";
import { _ } from "./src.js";
import { _, _ } from "./dialogs.js";
import { _ } from "./axios.js";
import { _, _, _, _, _, _, _, _ } from "./reorderablelist.module.js";
import "./cross.js";
import "./shared_common.module.js";
var _ = _(_()),
  _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC`,
  _ = _(_()),
  _ = _();
function _(_) {
  let {
      items: _,
      render: _,
      onDelete: _,
      onEdit: _,
      onReorder: _,
      onMove: _,
      bDisabled: _,
      rowClassName: _,
    } = _,
    [_, _] = _.useState(!1),
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(-1),
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(0),
    [_, _] = _.useState(0),
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(``),
    _ = _.useRef(void 0),
    _ = _.useRef([]),
    _ = _.useRef([]),
    _ = _.useMemo(() => _.default.CancelToken.source(), []),
    _ = () => {
      _.current?.firstElementChild &&
        (_(_.current.firstElementChild.getBoundingClientRect().height),
        _(_.current.firstElementChild.getBoundingClientRect().width));
    };
  (_.useEffect(() => {
    _();
  }, []),
    _.useEffect(() => () => _.cancel(`ReorderableList unmounting`), [_]));
  let _ = (_, _) => {
      let _ = _.current[_]?.current;
      if (!_) {
        console.error(`start element grab missing element at index ` + _);
        return;
      }
      (_(!0), _(_), _(void 0), _(_));
      let _ = _.clientX - _.getBoundingClientRect().left;
      _(_);
      let _ = _.clientY - _.getBoundingClientRect().top;
      (_(_),
        (_.style.position = `fixed`),
        (_.style.left = _.clientX - _ + `px`),
        (_.style.top = _.clientY - _ + `px`),
        (_.style.zIndex = `1`));
    },
    _ = _.useCallback(
      (_) => {
        let _ = _.current[_]?.current;
        _
          ? ((_.style.left = _.clientX - _ + `px`),
            (_.style.top = _.clientY - _ + `px`))
          : console.error(`update grab element missing element`);
      },
      [_, _, _],
    ),
    _ = _.useCallback(() => {
      let _ = _.current[_]?.current;
      (_
        ? ((_.style.position = ``), (_.style.zIndex = ``))
        : console.error(`end element drag missing element`),
        _(!1),
        _(-1),
        _(void 0),
        _(void 0));
    }, [_]),
    _ = (_, _) => {
      _.token.reason ||
        (_.current.firstElementChild?.getBoundingClientRect().height > 0 &&
          _ != _.current.firstElementChild.getBoundingClientRect().height &&
          _(),
        _(_, _),
        _.preventDefault());
    },
    _ = (_, _) => {
      let _ = _(_ > _ ? _ - 1 : _, 0, _.length - 1);
      _ != _ && (_ ? _(_, _) : _(_, _, _), _(_), _ && _(_));
    },
    _ = (_) => {
      _ && !_.token.reason && (_(), _(_, _));
    },
    _ = _.useCallback(
      (_) => {
        if (!_ || _.token.reason) return;
        let _ = _.clientY,
          _;
        for (let _ = 0; _ < _.current.length; _++)
          if (
            _ <
            (_.current[_].current.getBoundingClientRect().top +
              _.current[_].current.getBoundingClientRect().bottom * 2) /
              3
          ) {
            _ = _;
            break;
          }
        (_(_ ?? _.current.length), _(_));
      },
      [_, _, _],
    );
  (_(window, `mousemove`, _ ? _ : void 0),
    _(window, `mouseup`, _ ? _ : void 0),
    _.useEffect(() => {
      for (let _ = _.current.length; _ < _.length; _++)
        (_.current.push(_.createRef()), _.current.push(_.createRef()));
    }, [_.length]));
  let _ = (_) => {
      _(void 0);
      let _ = _?.trim(),
        _ = Number.parseInt(_);
      if (_.length == 0 || isNaN(_)) return;
      let _ = _ - 1;
      _ != _ && _(_, _);
    },
    _ = (_, _) => {
      _.key === `Enter` && (_(_), _.currentTarget.blur());
    },
    [_, _] = _.useState(void 0);
  return (0, _.jsx)(`div`, {
    className: _,
    ref: _,
    children: _.map((_, _) =>
      (0, _.jsxs)(
        `div`,
        {
          ref: _.current[_],
          children: [
            _ == _ &&
              (0, _.jsx)(_, {
                width: _,
              }),
            (0, _.jsx)(`div`, {
              ref: _.current[_],
              className: _,
              children:
                _ == _ &&
                (0, _.jsxs)(`div`, {
                  className: _(`OfpXVyFy5Fo-`, _),
                  children: [
                    (0, _.jsx)(`img`, {
                      className: _(`SZCLgazwykY-`, `g3MCfqYh-Wk-`),
                      src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC`,
                    }),
                    (0, _.jsx)(`input`, {
                      className: _(
                        `Z2hFr9c9Bx8-`,
                        `F7c1qF6I3Vk-`,
                        `g3MCfqYh-Wk-`,
                      ),
                      type: `text`,
                      value: (_ > _ ? _ - 1 : _) + 1,
                      disabled: !0,
                    }),
                    _(_, _),
                  ],
                }),
            }),
            (0, _.jsxs)(`div`, {
              className: _(
                _,
                _,
                _ && `hJ8eUERcJ1g-`,
                _ == _ && `RSxJyqlJePw-`,
                _ == _ && `CSyJhiym-Wc-`,
              ),
              onAnimationEnd: () => _(void 0),
              children: [
                (0, _.jsx)(`img`, {
                  className: _(_, _, _ && `CdaHiMxsOyE-`),
                  src: _,
                  onMouseDown: _ ? void 0 : (_) => _(_, _),
                }),
                (0, _.jsx)(`input`, {
                  className: _(_, _ && `F7c1qF6I3Vk-`),
                  type: `text`,
                  value: _ == _ ? _ : _ + 1,
                  disabled: _ || _ == _,
                  onChange: (_) => _(_.target.value),
                  onKeyDown: (_) => _(_, _),
                  onFocus: (_) => {
                    (_(_), _(_.target.value));
                  },
                  onBlur: () => _(_),
                }),
                _(_, _),
                _ != _ &&
                  !!(_ || _) &&
                  (0, _.jsxs)(`div`, {
                    className: `PZ2dh9brop4-`,
                    children: [
                      !!_ &&
                        (0, _.jsx)(`div`, {
                          className: `EJE6Uh9cQZA-`,
                          onClick: (_) => _(_, _),
                          children: (0, _.jsx)(_, {}),
                        }),
                      !!_ &&
                        (0, _.jsx)(`img`, {
                          className: `EJE6Uh9cQZA-`,
                          src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==`,
                          onClick: (_) => _(_, _),
                        }),
                    ],
                  }),
              ],
            }),
            _ == _.length &&
              _ == _.length - 1 &&
              (0, _.jsx)(_, {
                width: _,
              }),
          ],
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let { width: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      style: {
        width: _,
      },
    }),
  });
}
