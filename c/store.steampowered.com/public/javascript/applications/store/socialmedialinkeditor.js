import { _ } from "./rolldown-runtime.js";
import { _, _, _, _ } from "./libraries.js";
import { _ } from "./throbber.js";
import { _, _, _, _, _, _, _, _ } from "./reorderablelist.module.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./main.js";
import "./cross.js";
var _ = _(_()),
  _ = _(_());
function _() {
  let _ = _({
    queryKey: [`useSocialMediaSupports`],
    queryFn: async () => {
      let _ = `${_.COMMUNITY_BASE_URL}sale/ajaxgetsocialmediaeditsettings`,
        _ = {
          origin: self.origin,
        },
        _ = await _.default.get(_, {
          params: _,
        });
      return _?.status == 200 && _.data?.success == 1
        ? _.data
        : (console.error(`useSocialMediaSupports:`, _?.status),
          {
            success: 2,
          });
    },
  });
  return _.isLoading ? null : _.data;
}
var _ = `ZlgE-RXiZVA-`,
  _ = `YLQlq21lYYY-`,
  _ = `UuWHe0byT9Y-`,
  _ = `ksCbmUv2cR4-`,
  _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC`,
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
  _.useEffect(() => {
    _();
  }, []),
    _.useEffect(() => () => _.cancel(`ReorderableList unmounting`), [_]);
  let _ = (_, _) => {
      let _ = _.current[_]?.current;
      if (!_) {
        console.error(`start element grab missing element at index ` + _);
        return;
      }
      _(!0), _(_), _(void 0), _(_);
      let _ = _.clientX - _.getBoundingClientRect().left;
      _(_);
      let _ = _.clientY - _.getBoundingClientRect().top;
      _(_),
        (_.style.position = `fixed`),
        (_.style.left = _.clientX - _ + `px`),
        (_.style.top = _.clientY - _ + `px`),
        (_.style.zIndex = `1`);
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
      _
        ? ((_.style.position = ``), (_.style.zIndex = ``))
        : console.error(`end element drag missing element`),
        _(!1),
        _(-1),
        _(void 0),
        _(void 0);
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
        _(_ ?? _.current.length), _(_);
      },
      [_, _, _],
    );
  _(window, `mousemove`, _ ? _ : void 0),
    _(window, `mouseup`, _ ? _ : void 0),
    _.useEffect(() => {
      for (let _ = _.current.length; _ < _.length; _++)
        _.current.push(_.createRef()), _.current.push(_.createRef());
    }, [_.length]);
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
                    _(_), _(_.target.value);
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
function _(_) {
  let {
      rgSocialMediaItems: _,
      fnSetItems: _,
      rgSupportedSocialMediaTypes: _,
      rgValidationData: _,
    } = _,
    _ = _.useMemo(
      () =>
        _.filter(
          (_) =>
            _.findIndex((_) => _.type === _.type) === -1 ||
            _.type === `qq` ||
            _.type === `qqlink`,
        )
          .map((_) => ({
            label: _(`#StoreAdmin_SocialMedia_Type_${_.type}`),
            data: _.type,
          }))
          .sort((_, _) => (_.label < _.label ? -1 : 1)),
      [_, _],
    ),
    _ = (_) => {
      let _ = _.slice();
      _.splice(_, 1), _(_);
    },
    _ = (_, _) => {
      let _ = _.slice();
      _(_, _, _), _(_);
    },
    _ = (_, _) => {
      let _ = _.map((_, _) =>
        _ === _
          ? {
              ..._,
              link: _,
            }
          : _,
      );
      _(_);
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        options: _,
        onAddLink: (_) => {
          let _ = _.slice();
          _.push({
            type: _,
            link: ``,
          }),
            _(_);
        },
      }),
      (0, _.jsx)(_, {
        items: _,
        onDelete: _,
        onMove: _,
        render: (_, _) =>
          (0, _.jsx)(
            _,
            {
              item: _,
              onUpdateLink: (_) => _(_, _),
              validationData: _[_.type],
            },
            _.type,
          ),
      }),
    ],
  });
}
function _(_) {
  let { options: _, onAddLink: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      strDefaultLabel: _(`#StoreAdmin_SocialMedia_Add`),
      controlled: !0,
      rgOptions: _,
      onChange: (_) => {
        let _ = _.data;
        _ && _(_);
      },
      selectedOption: null,
    }),
  });
}
function _(_, _) {
  let _ = !0,
    _ = ``;
  return (
    _.prefix
      ? ((_ =
          _.type === `mastodon`
            ? _(
                `#StoreAdmin_SocialMedia_ValidationMastodon`,
                _.prefix.join(`, `),
              )
            : _(
                `#StoreAdmin_SocialMedia_ValidationPrefix`,
                _.prefix.join(`, `),
              )),
        _.link &&
          ((_ = !1),
          _.prefix.forEach((_) => {
            _.link.startsWith(_) && (_ = !0);
          })))
      : _.number
        ? ((_ = _(`#StoreAdmin_SocialMedia_ValidationNumber`)),
          _.link && (_ = /^\d+$/.test(_.link)))
        : _.text
          ? (_ = _(`#StoreAdmin_SocialMedia_ValidationText`))
          : _.regex &&
            _.type === `tumblr` &&
            (_ = _(`#StoreAdmin_SocialMedia_ValidationTumblr`)),
    {
      bValid: _,
      strTooltip: _,
    }
  );
}
function _(_) {
  let { item: _, onUpdateLink: _, validationData: _ } = _,
    _;
  _ = _.number
    ? _(`#StoreAdmin_SocialMedia_EnterNumber`)
    : _.text
      ? _(`#StoreAdmin_SocialMedia_EnterName`)
      : _(`#StoreAdmin_SocialMedia_EnterLink`);
  let { bValid: _, strTooltip: _ } = _(_, _);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#StoreAdmin_SocialMedia_Type_${_.type}`),
      }),
      (0, _.jsx)(_, {
        className: _,
        type: `text`,
        value: _.link,
        placeholder: _,
        onChange: (_) => _(_.target.value),
      }),
      _ &&
        (0, _.jsx)(_, {
          className: `vIGgULQ6INU-`,
          toolTipContent: _,
          children: `(?)`,
        }),
      !_ &&
        (0, _.jsx)(`div`, {
          className: `TDokO-aV6BA-`,
          children: _,
        }),
    ],
  });
}
function _(_) {
  let { clanAccountID: _, page_config: _ } = _,
    _ = _(),
    [_, _] = (0, _.useState)(() => _?.social_media ?? []),
    [_, _] = (0, _.useState)(() => _?.social_media ?? []);
  return _
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`br`, {}),
          (0, _.jsx)(`h4`, {
            children: _(`#CreatorHome_SocialMedia_Title`),
          }),
          (0, _.jsx)(`p`, {
            children: _(`#CreatorHome_SocialMedia_Desc`),
          }),
          (0, _.jsxs)(`blockquote`, {
            children: [
              (0, _.jsx)(_, {
                rgValidationData: _.rgValidationData,
                rgSupportedSocialMediaTypes: _.rgSupportedSocialMediaTypes,
                rgSocialMediaItems: _,
                fnSetItems: (_) => {
                  _(_);
                  let _ = _.rgValidationData,
                    _ = _.filter((_) => !!_.link).filter(
                      (_) => _(_, _[_.type]).bValid,
                    );
                  _(_);
                },
              }),
              _?.length > 0 &&
                (0, _.jsx)(`input`, {
                  type: `hidden`,
                  name: `social_media`,
                  value: JSON.stringify(_),
                }),
              (0, _.jsx)(`a`, {
                className: `btnv6_blue_hoverfade btn_medium`,
                href: `#`,
                onClick: (_) => {
                  _.preventDefault(),
                    window.g_StoreLocHelper?.SaveFields([`tagline`]),
                    window.UpdateCuratorFromForm?.(
                      document.getElementById(`listform`),
                    );
                },
                children: (0, _.jsx)(`span`, {
                  children: _(`#Button_Save`),
                }),
              }),
            ],
          }),
        ],
      })
    : (0, _.jsx)(_, {
        string: _(`#Loading`),
        position: `center`,
      });
}
export { _ as default };
