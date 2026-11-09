import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _ } from "./image.js";
import { _, _, _ } from "./youtubeplayer.js";
import { _, _, _, _, _, _ } from "./main.js";
var _ = _(_()),
  _ = `slvPA8f0gLM-`,
  _ = `kcXPMd3IHiw-`,
  _ = _(),
  _ = (_) => {
    let _ = [`maxresdefault`, `mqdefault`, `default`],
      [_, _] = _.useState(0);
    _.useEffect(() => _(0), [_.video]);
    let _ = _.useRef(void 0);
    if (_.altImgWithFallback && _.altImgWithFallback.length > 0)
      return (0, _.jsx)(_, {
        className: _.className,
        srcs: _.altImgWithFallback,
      });
    if (_.altImg)
      return (0, _.jsx)(`img`, {
        src: _.altImg,
        className: _.className,
      });
    {
      let _ = `https://img.youtube.com/vi/` + _.video + `/` + _[_] + `.jpg`,
        _ = () => {
          _ + 1 < _.length && _(_ + 1);
        };
      return (0, _.jsx)(`img`, {
        ref: _,
        onLoad: () => {
          _.current && _.current.naturalHeight < 91 && _();
        },
        onError: _,
        src: _,
        className: _(_, _.className),
      });
    }
  },
  _ = (_) => {
    let [_, _] = _.useState(!1);
    _(!!_.preloadYoutubeScripts);
    let _ = _(`youtube`);
    return !_ || !_
      ? (0, _.jsxs)(`div`, {
          className: _(`YoutubePreviewContainer`, _, _.imageClassnames),
          onClick: _
            ? (_) => {
                _.onPlayerActivated && _.onPlayerActivated(),
                  _(!0),
                  _.stopPropagation(),
                  _.preventDefault();
              }
            : void 0,
          children: [
            (0, _.jsx)(_, {
              className: `YoutubePreviewImage`,
              altImgWithFallback: _.altImgWithFallback,
              altImg: _.altImg,
              video: _.video,
            }),
            _ &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(`div`, {
                    className: `YoutubePreviewPlay`,
                    children: (0, _.jsx)(_, {}),
                  }),
                  (0, _.jsx)(`div`, {
                    className: `VideoHintText`,
                    children: _(`#EventCalendar_WatchYouTubeVideo`),
                  }),
                ],
              }),
          ],
        })
      : (0, _.jsx)(_, {
          ..._,
          classnames: _(_, _.classnames),
        });
  },
  _ = `qeblZrFO1wc-`;
function _(_) {
  let { crumbs: _, className: _, bHideLastArrow: _ } = _;
  return !_ || _.length == 0
    ? null
    : (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsx)(_, {
            className: `blockbg`,
            "flow-children": `row`,
            children: _.map((_, _) => {
              let _ = [];
              return (
                _.url.startsWith(`http`)
                  ? _.push(
                      (0, _.jsx)(
                        _,
                        {
                          href: _.url,
                          children: _.name,
                        },
                        `anchor_` + _.name,
                      ),
                    )
                  : _.push(
                      (0, _.jsx)(
                        _,
                        {
                          _: _.url,
                          children: _.name,
                        },
                        `link_` + _.name,
                      ),
                    ),
                (!_ || _ < _.length - 1) &&
                  _.push(
                    (0, _.jsx)(
                      `span`,
                      {
                        children: `\xA0> `,
                      },
                      _.name + `span`,
                    ),
                  ),
                _
              );
            }),
          }),
          (0, _.jsx)(`div`, {
            style: {
              clear: `left`,
            },
          }),
        ],
      });
}
export { _, _, _, _ };
