import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _, _ } from "./rewarditemdisplay.js";
import { _ } from "./storeitemhooks.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_());
function _() {
  let [_, _] = (0, _.useState)(() =>
    _(`profile-itemcollection`, `itemcollection_config`),
  );
  return _;
}
var _ = `HIX9b7ATPfU-`,
  _ = `NerpSqWj84M-`,
  _ = `SOzTsKYY9Yg-`,
  _ = _();
function _({ nPercent: _, indeterminate: _, animate: _, className: _ }) {
  return (0, _.jsx)(`div`, {
    className: _(_, _ && `EWofGQ-jYRU-`, _ && `OXJZ1DT0EbQ-`, _),
    style: {
      "--percent": _ / 100,
    },
  });
}
var _ = ({ nPercent: _, size: _ = 120, strokeWidth: _ = 20 }) => {
    let _ = (_ - _) / 2,
      _ = 2 * Math._ * _,
      _ = _ - (_ / 100) * _,
      _ = _ == 100;
    return (0, _.jsx)(`div`, {
      className: _({
        [_]: !0,
        [_]: _,
      }),
      children: (0, _.jsxs)(`svg`, {
        width: _,
        height: _,
        style: {
          transform: `rotate(-90deg)`,
        },
        children: [
          (0, _.jsx)(`circle`, {
            _: _ / 2,
            _: _ / 2,
            _,
            stroke: `#0c131d`,
            strokeWidth: _,
            fill: `none`,
          }),
          (0, _.jsx)(`circle`, {
            _: _ / 2,
            _: _ / 2,
            _,
            stroke: `#1a9fff`,
            strokeWidth: _,
            fill: `none`,
            strokeDasharray: _,
            strokeDashoffset: _,
            style: {
              transition: `stroke-dashoffset 0.3s ease-in-out`,
            },
          }),
        ],
      }),
    });
  },
  _ = `ha-XQILFXYY-`,
  _ = `_2BL8nwTqoNM-`,
  _ = `a9nWQ3wjOMk-`,
  _ = `_9qrqHMjDofc-`,
  _ = `_8m9N0BgOkCc-`,
  _ = `_-0AYX0qn8gM-`,
  _ = `X7PlTNfr-tY-`,
  _ = `HGunfrmkXgE-`,
  _ = `iu8dHdbu--I-`,
  _ = `NJYY1I5U6Vs-`,
  _ = `phu9ZoS-OFM-`,
  _ = `j4B05iMCQlU-`,
  _ = `ZjJBrqCz0xk-`,
  _ = `RXC4bXk2ICY-`,
  _ = `_51unuBWfZMU-`,
  _ = `uxPpsekviAo-`,
  _ = `_55b2ZGoKERw-`,
  _ = `oDzIRW7YLXc-`,
  _ = `ajZuW4-YluQ-`,
  _ = `XNrDXIV3Blw-`,
  _ = `-vWnBg-Q4cg-`,
  _ = `vox3BAQIp3k-`,
  _ = `uOGK6MO3Z5I-`;
function _(_) {
  let {
      strProfileName: _,
      strSteamId: _,
      bViewingOwnProfile: _,
      rgCommunityItemDefs: _,
      rgUserCommunityItems: _,
      nAppID: _,
      rgRewardItems: _,
      rgUserItemRewarded: _,
      oRewardDefinition: _,
    } = _(),
    _ = (0, _.useMemo)(() => {
      let _ = new Set();
      _.forEach((_) => {
        _.add(`${_.appid}_${_.item_type}`);
      });
      let _ = new Set();
      _?.forEach((_) => {
        _.add(_.community_item_type);
      });
      let _ = new Map();
      return (
        _.filter(
          (_) =>
            _.active && !_.deleted && !_.has(_.item_type) && _.item_class != 1,
        )
          .sort((_, _) => {
            let _ = _.has(`${_.appid}_${_.item_type}`),
              _ = _.has(`${_.appid}_${_.item_type}`);
            return (_ && _) || (!_ && !_)
              ? _.item_type - _.item_type
              : _
                ? -1
                : 1;
          })
          .forEach((_) => {
            _.has(_.item_class) || _.set(_.item_class, []),
              _.get(_.item_class).push({
                ..._,
                user_has_item: _.has(`${_.appid}_${_.item_type}`),
              });
          }),
        _
      );
    }, [_, _, _]),
    _ = (0, _.useMemo)(() => {
      if (_.has(3)) {
        let _ = _.get(3).filter(
          (_) => (
            JSON.parse(_.item_key_values), _.item_movie_webm && _.item_movie_mp4
          ),
        );
        if (_.length) return _(_), _[0];
      }
      return null;
    }, [_]),
    _ = (0, _.useMemo)(() => {
      let _ = new Map();
      return (
        _.forEach((_) => {
          _.set(_.item_type, _);
        }),
        _
      );
    }, [_]),
    _ = (0, _.useMemo)(() => Array.from(_.keys()).sort((_, _) => _ - _), [_]),
    [_, _, _] = _.useMemo(() => {
      let _ = _?.filter((_) => {
          let _ = _.get(_.item_type);
          return !_ || (_.item_class != 2 && _.item_class != 1);
        }),
        _ = _.filter((_) => _.item_class != 2 && _.item_class != 1),
        _ = _.length || 0,
        _ = _.length || 0;
      return [_ ? Math.floor((_ * 100) / _) : 0, _, _];
    }, [_, _, _]);
  return (0, _.jsx)(_, {
    feature: `itemcollections`,
    children: (0, _.jsx)(_, {
      appID: _,
      children: (0, _.jsxs)(_, {
        className: _,
        children: [
          _ &&
            (0, _.jsx)(`div`, {
              className: `ZTNO-ybI-Z0-`,
              children: (0, _.jsxs)(`video`, {
                preload: `auto`,
                playsInline: !0,
                muted: !0,
                autoPlay: !0,
                loop: !0,
                poster: `${_.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_.item_image_large}`,
                children: [
                  (0, _.jsx)(`source`, {
                    src: `${_.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_.item_movie_webm}`,
                    type: `video/webm`,
                  }),
                  !_.IN_CLIENT &&
                    (0, _.jsx)(`source`, {
                      src: `${_.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_.item_movie_mp4}`,
                      type: `video/mp4`,
                    }),
                ],
              }),
            }),
          (0, _.jsx)(_, {
            nAppID: _,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`span`, {
                children: _(`#ItemCollection_Collected`, _, _),
              }),
              (0, _.jsx)(_, {
                className: _,
                animate: !0,
                nPercent: _,
                indeterminate: !1,
              }),
            ],
          }),
          !!_ &&
            (0, _.jsx)(`div`, {
              className: _(`_-0AYX0qn8gM-`, `X7PlTNfr-tY-`, `xz2InerLPSo-`),
              children: (0, _.jsx)(_, {
                oRewardDefinition: _,
                bViewingOwnProfile: _,
                rgRewardItems: _,
                rgUserItemRewarded: _,
                rgCommunityItemDefs: _,
              }),
            }),
          (0, _.jsxs)(`div`, {
            className: _(_, _),
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _(`#ItemCollection_ForPoints_Title`),
              }),
              _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    nAppID: _,
                    itemClass: _,
                    rgItems: _.get(_),
                    bViewingOwnProfile: _,
                    bHideItemStore: _ == 2,
                  },
                  `item_class_` + _,
                ),
              ),
            ],
          }),
        ],
      }),
    }),
  });
}
function _(_) {
  let {
      oRewardDefinition: _,
      rgRewardItems: _,
      rgUserItemRewarded: _,
      rgCommunityItemDefs: _,
      bViewingOwnProfile: _,
    } = _,
    _ = (0, _.useMemo)(() => {
      let _ = new Set();
      _?.forEach((_) => {
        _.add(
          `${_.item_definition.appid}_${_.item_definition.community_item_type}`,
        );
      });
      let _ = new Set();
      _.forEach((_) => {
        _.add(`${_.appid}_${_.community_item_type}`);
      });
      let _ = new Map();
      return (
        _.filter((_) => _.active)
          .filter((_) => _.has(`${_.appid}_${_.item_type}`))
          .sort((_, _) => {
            let _ = _.has(`${_.appid}_${_.item_type}`),
              _ = _.has(`${_.appid}_${_.item_type}`);
            return (_ && _) || (!_ && !_)
              ? _.item_type - _.item_type
              : _
                ? -1
                : 1;
          })
          .forEach((_) => {
            let _ = _.has(`${_.appid}_${_.item_type}`);
            _.has(_.item_class) || _.set(_.item_class, []),
              _.get(_.item_class).push({
                ..._,
                user_has_item: _,
              });
          }),
        _
      );
    }, [_, _, _]);
  return (0, _.jsxs)(_, {
    navEntryPreferPosition: _.LAST,
    preferredFocus: !0,
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#ItemCollection_ForFree_Title`),
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _(`#ItemCollection_ForFree_Discovery`),
              }),
              (0, _.jsx)(`p`, {
                children: _(_.rtime_start_time, _.rtime_end_time),
              }),
              (0, _.jsxs)(`p`, {
                children: [
                  _(`#ItemCollection_ForFree_Discovery_desc`),
                  (0, _.jsx)(`br`, {}),
                  _(
                    `#ItemCollection_ForFree_Discovery_desc2`,
                    (0, _.jsx)(_, {
                      href: `${_.STORE_BASE_URL}explore?dq=widget`,
                    }),
                  ),
                ],
              }),
            ],
          }),
          Array.from(_.keys()).map((_) =>
            (0, _.jsx)(
              _,
              {
                bViewingOwnProfile: _,
                nAppID: _.appid,
                itemClass: _,
                rgItems: _.get(_),
                bHideItemStore: !0,
              },
              `free_item_class_` + _,
            ),
          ),
        ],
      }),
    ],
  });
}
function _(_) {
  let { rgItems: _, itemClass: _, nAppID: _, bViewingOwnProfile: _ } = _,
    _ = (0, _.useMemo)(() => _.filter((_) => _.user_has_item).length, [_]),
    _ = _.length ? Math.floor((_ * 100) / _.length) : 0;
  return (0, _.jsxs)(_, {
    navEntryPreferPosition: _.LAST,
    preferredFocus: !0,
    className: _(_),
    children: [
      (0, _.jsx)(_, {
        ..._,
      }),
      (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            className: _,
            children: _(`#Sale_Section_PointShop_class_` + _),
          }),
          (0, _.jsx)(`div`, {
            className: _,
          }),
          (0, _.jsx)(_, {
            ..._,
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsxs)(_, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                nPercent: _,
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    children: _(`#ItemCollection_Collected_Item`, _, _.length),
                  }),
                  (0, _.jsx)(`div`, {
                    children: _(`#ItemCollection_Collected_Line`),
                  }),
                ],
              }),
            ],
          }),
          _.map((_) =>
            (0, _.jsx)(
              _,
              {
                item: _,
              },
              `item_` + _.item_type,
            ),
          ),
        ],
      }),
    ],
  });
}
function _(_) {
  let { itemClass: _, nAppID: _ } = _;
  return _ === 2
    ? (0, _.jsx)(_, {
        className: _,
        children: _(`#ItemCollection_GameCards_Title`),
      })
    : null;
}
function _(_) {
  let { itemClass: _, nAppID: _, bViewingOwnProfile: _, bHideItemStore: _ } = _;
  return _ == 2 && _
    ? (0, _.jsx)(_, {
        href: `${_.COMMUNITY_BASE_URL}my/gamecards/${_}`,
        className: _,
        children: _(`#ItemCollection_Visit_Badge`),
      })
    : _
      ? null
      : (0, _.jsx)(_, {
          href: `${_.STORE_BASE_URL}points/shop/app/${_}`,
          className: _,
          children: _(`#ItemCollection_Visit`),
        });
}
function _(_) {
  let { item: _ } = _,
    [_, _] = _(),
    _ = _.user_has_item || _,
    _ = !_,
    _ =
      (_ || _.item_class == 2 || _.item_class == 8) && _.item_class != 4
        ? _.item_image_small
        : void 0;
  return (0, _.jsx)(_, {
    ..._,
    onFocus: () => _.onPointerEnter(),
    onBlur: () => _.onPointerLeave(),
    focusable: !0,
    className: _,
    children: (0, _.jsx)(_, {
      appid: _.appid,
      item_image_large: _.item_image_large,
      item_image_small: _,
      item_title: _.item_title,
      item_movie_mp4: _ ? _.item_movie_mp4_small : void 0,
      item_movie_webm: _ ? _.item_movie_webm_small : void 0,
      className: _({
        [_]: !0,
        [_]: _,
      }),
      videoClassName: _,
    }),
  });
}
var _ = {
  include_assets: !0,
};
function _(_) {
  let { nAppID: _ } = _,
    [_] = _(_, _);
  return _
    ? (0, _.jsx)(_, {
        className: _,
        children: (0, _.jsxs)(_, {
          children: [
            (0, _.jsxs)(_, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  className: _,
                  children: _.GetName(),
                }),
                (0, _.jsx)(_, {
                  className: _,
                  children: _(`#ItemCollection_Title`),
                }),
              ],
            }),
            (0, _.jsx)(_, {
              children: _(`#ItemCollection_EventSubTitle`),
            }),
          ],
        }),
      })
    : null;
}
var _ = _;
export { _ as default };
