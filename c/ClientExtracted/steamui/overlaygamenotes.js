import { _ } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { _, _ } from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import { _, _, _ } from "./chunk~1fa4b8f2ff.js?contenthash=DQ8gxgDF";
import { _ } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { _ } from "./library.js?contenthash=CVZWwsCP";
import { _, _, _, _, _, _ } from "./chunk~5ad53110ba.js?contenthash=1ilwDMsN";
var _ = _(_()),
  _ = _();
function _() {
  let { data: _, isLoading: _ } = _(),
    _ = _.useMemo(
      () => _?.slice().sort((_, _) => _.last_modified - _.last_modified),
      [_],
    );
  return _
    ? (0, _.jsx)(_, {
        msDelayAppear: 300,
      })
    : (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(`h1`, {
            children: _(`#UserGameNotes_NotesList`),
          }),
          (0, _.jsx)(`ul`, {
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  game: _,
                },
                _.appid || _.shortcut_name,
              ),
            ),
          }),
        ],
      });
}
function _(_) {
  let { game: _ } = _;
  return (0, _.jsx)(`li`, {
    children: (0, _.jsx)(_, {
      _: _(
        _.appid
          ? {
              appid: _.appid,
            }
          : {
              shortcut: _.shortcut_name,
            },
      ),
      children: _.appid
        ? (0, _.jsx)(_, {
            appid: _.appid,
          })
        : _.shortcut_name,
    }),
  });
}
function _(_) {
  let { appid: _ } = _;
  return _(_)?.name;
}
function _(_) {
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(_, {
        path: _.List(),
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        path: _.AppNotes(`:appid`, `:noteid?`),
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        path: _.ShortcutNotes(`:shortcut_name`, `:noteid?`),
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          _: `${_(_.noteParent)}`,
        }),
      }),
    ],
  });
}
export { _ as default };
