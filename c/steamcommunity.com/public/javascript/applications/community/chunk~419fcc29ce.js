import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~af36c62e9f.js";
import { _ } from "./chunk~a7c5e71e12.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_()),
  _ = `JdaHHph2WEE-`,
  _ = `vHIf80HPz1I-`,
  _ = `tznxZcQ-M7s-`,
  _ = `BNOS1NagB3Q-`,
  _ = `A138rxmOEMc-`,
  _ = `c4fVpC8TPgw-`,
  _ = `rxJ4rAc7kGU-`,
  _ = `CLEr6-7ZEOU-`,
  _ = `_71xAssygPiI-`,
  _ = `Y2-frr1loDg-`,
  _ = `bhXVcywYnew-`,
  _ = `GgkRnsfpCow-`,
  _ = `XvVBNHmVaeQ-`,
  _ = `_1CQKcLT5xe0-`,
  _ = `_66NCrBN2GQg-`,
  _ = `_2Rvl-pkrrEM-`,
  _ = `qPEUXE973Pg-`,
  _ = `WeNTqIr4ViU-`,
  _ = `_8n-80ldseBI-`,
  _ = `_1oWdNOpnzQ8-`,
  _ = `rk3AyZUUqg8-`,
  _ = `Zy5KmJxsPBE-`,
  _ = `Z6wvpAwZe1o-`,
  _ = `PU7Ky5WGGPY-`,
  _ = `_8HF2GkWbNoc-`,
  _ = _(_());
function _() {
  let _ = (0, _.useMemo)(
      () => _(`personalapps`, `application_config`) || [],
      [],
    ),
    _ = (0, _.useMemo)(() => _(`popularapps`, `application_config`) || [], []),
    _ = [..._, ..._];
  return _.length
    ? {
        isLoading:
          _(_, {
            include_assets: !0,
          }) === 1,
        data: {
          personalAppIds: _,
          popularAppIds: _,
        },
      }
    : {
        isLoading: !1,
        data: {
          personalAppIds: _,
          popularAppIds: _,
        },
      };
}
async function _(_) {
  let _ = `${_.COMMUNITY_BASE_URL}actions/SearchApps/${_}`;
  return (await _.default.get(_)).data;
}
var _ = _();
function _() {
  let _ = (0, _.useRef)(void 0);
  return (
    (0, _.useEffect)(() => {
      _.current && _.current.TakeFocus();
    }, []),
    (0, _.jsxs)(_, {
      navRef: _,
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _(`#Community_Home_Header_Title`),
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _(`#Community_Home_Header_Subtitle`),
                }),
              ],
            }),
            (0, _.jsx)(_, {
              className: _,
              href: `${_.COMMUNITY_BASE_URL}search/users/`,
              children: _(`#Community_Home_Header_AddFriend_Button`),
            }),
          ],
        }),
        (0, _.jsx)(_, {}),
        (0, _.jsx)(_, {}),
      ],
    })
  );
}
function _() {
  let [_, _] = (0, _.useState)(``),
    [_, _] = (0, _.useState)([]),
    [_, _] = (0, _.useState)(!1),
    _ = _();
  return _.isLoading
    ? null
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(_, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                appShortcuts: _.data.personalAppIds,
                sectionTitle: _(`#Community_Home_Header_GameHubs_ForYou`),
                withDivider: _.data.popularAppIds.length > 0,
              }),
              (0, _.jsx)(_, {
                appShortcuts: _.data.popularAppIds,
                sectionTitle: _(`#Community_Home_Header_GameHubs_Popular`),
              }),
            ],
          }),
          (0, _.jsxs)(_, {
            onFocus: () => _(!0),
            onBlur: (_) => {
              _.currentTarget.contains(_.relatedTarget) || _(!1);
            },
            className: _,
            children: [
              (0, _.jsxs)(_, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: (0, _.jsx)(_, {
                      onChange: async (_) => {
                        _(_.target.value);
                        let _ = await _(_.target.value);
                        _(_);
                      },
                      value: _,
                      className: _,
                      placeholder: _(
                        `#Community_Home_Header_FindGame_Placeholder`,
                      ),
                    }),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: (0, _.jsx)(_, {}),
                  }),
                ],
              }),
              _ &&
                (0, _.jsx)(_, {
                  className: `OR4eoZumqTI-`,
                  children: _.map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        href: `${_.COMMUNITY_BASE_URL}app/${_.appid}`,
                        className: `-F05C2uuY7c-`,
                        children: _.name,
                      },
                      _.appid,
                    ),
                  ),
                }),
            ],
          }),
        ],
      });
}
function _(_) {
  let { appShortcuts: _, sectionTitle: _, withDivider: _ } = _;
  return !_ || !_.length
    ? null
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          (0, _.jsx)(`div`, {
            "flow-children": `row`,
            className: _(_, _ ? _ : null),
            children: _.map((_, _) =>
              (0, _.jsx)(
                _,
                {
                  appId: _,
                },
                _,
              ),
            ),
          }),
        ],
      });
}
function _(_) {
  let _ = _.Get().GetApp(_.appId);
  return _
    ? (0, _.jsx)(_, {
        className: _,
        href: `${_.COMMUNITY_BASE_URL}app/${_.appId}`,
        children: (0, _.jsx)(`img`, {
          className: _,
          src: _.GetAssets().GetLibraryCapsuleURL(),
        }),
      })
    : null;
}
var _ = `subsection`,
  _ = `browsefilter`;
function _() {
  let _ = _(),
    _ = _(_, _),
    _ = _(_, _);
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(_, {
        activeTab: _,
        activeSort: _,
      }),
      (0, _.jsx)(_, {
        activeTab: _,
        activeSort: _,
      }),
    ],
  });
}
function _(_) {
  let { activeTab: _, activeSort: _ } = _,
    _ = _.useRef(void 0);
  return (
    _.useEffect(() => {
      let _ = document.getElementById(_);
      if (_ && _?.current) {
        let _ = _.offsetLeft + _.clientWidth;
        _ > window.innerWidth && _.current.scrollBy(_ - window.innerWidth, 0);
      }
    }, [_?.current]),
    (0, _.jsx)(_, {
      "flow-children": `row`,
      className: _,
      ref: _,
      children: [
        {
          label: `#Community_Home_Header_Filter_All`,
          _: ``,
        },
        {
          label: `#Community_Home_Header_Filter_Screenshots`,
          _: `screenshots`,
        },
        {
          label: `#Community_Home_Header_Filter_Artwork`,
          _: `images`,
        },
        {
          label: `#Community_Home_Header_Filter_Broadcasts`,
          _: `broadcasts`,
        },
        {
          label: `#Community_Home_Header_Filter_Videos`,
          _: `videos`,
        },
        {
          label: `#Community_Home_Header_Filter_Workshop`,
          _: `workshop`,
        },
        {
          label: `#Community_Home_Header_Filter_News`,
          _: `news`,
        },
        {
          label: `#Community_Home_Header_Filter_Guides`,
          _: `guides`,
        },
        {
          label: `#Community_Home_Header_Filter_Reviews`,
          _: `reviews`,
        },
      ].map((_, _) => {
        let _ = _ ? _ === _._ : _ === 0,
          _ = _._ ? `${_}=${_._}` : ``,
          _ = _ ? `${_}=${_}` : ``,
          _ = `${_.COMMUNITY_BASE_URL}${_ || _ ? `?` : ``}${_}${_ ? `&` : ``}${_}`;
        return (0, _.jsx)(
          _,
          {
            _: _._,
            href: _,
            className: _(_, _ ? _ : null),
            children: _(_.label),
          },
          _._,
        );
      }),
    })
  );
}
function _(_) {
  let { activeTab: _, activeSort: _ } = _;
  return (0, _.jsxs)(_, {
    "flow-children": `row`,
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {}),
      }),
      [
        {
          label: `#Community_Home_Header_BrowseFilter_Popular`,
          _: ``,
        },
        {
          label: `#Community_Home_Header_BrowseFilter_Recent`,
          _: `mostrecent`,
        },
      ].map((_, _) => {
        let _ = _ ? _ === _._ : _ === 0,
          _ = _ ? `${_}=${_}` : ``,
          _ = _._ ? `${_}=${_._}` : ``,
          _ = `${_.COMMUNITY_BASE_URL}${_ || _ ? `?` : ``}${_}${_ ? `&` : ``}${_}`;
        return (0, _.jsx)(
          _,
          {
            href: _,
            className: _(_, _ ? _ : null),
            children: _(_.label),
          },
          _._,
        );
      }),
    ],
  });
}
export { _ as default };
