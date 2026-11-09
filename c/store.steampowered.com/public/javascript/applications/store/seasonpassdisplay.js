import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _ } from "./storelink.js";
import { _ } from "./storeurl.js";
import { _ } from "./heading.js";
import { _, _ } from "./textlink.js";
import { _, _ } from "./storepagebbcoderenderer.js";
import { _ } from "./storeitemhooks.js";
import { _, _ } from "./partnereventstore.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
import { _ } from "./eventinfinitescrollmodal.js";
var _ = _(_()),
  _ = `vZHzprwxhsg-`,
  _ = `CptO57fOS6U-`,
  _ = `PBHL2qey-s8-`,
  _ = _(),
  _ = {
    include_assets: !0,
    include_basic_info: !0,
  };
function _(_) {
  let { appid: _ } = _,
    [_] = _(_, _),
    _ = _(),
    _ = _?.GetAssets();
  return !_ || !_ || !_
    ? null
    : (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsxs)(`a`, {
            href: _(_.GetStorePageURL(), _),
            children: [
              (0, _.jsx)(`img`, {
                src: _.GetSmallCapsuleURL(),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [_.GetShortDescription(), ` `],
              }),
            ],
          }),
        }),
      });
}
var _ = `XCSfP0iDbaQ-`,
  _ = `wZYYf-C8qCk-`,
  _ = `orYooiMnaz8-`;
function _(_) {
  let { appid: _ } = _,
    _ = _(_),
    { data: _ } = _(_);
  return _?.season_pass
    ? (0, _.jsx)(_, {
        season_pass: _.season_pass,
      })
    : null;
}
function _(_) {
  let { season_pass: _ } = _;
  if (!_ || !_.milestones || _.milestones.length == 0) return null;
  let _ = _.milestones.every((_) => !!_.shipped);
  return (0, _.jsx)(_, {
    feature: `seasonpassproductpage`,
    children: (0, _.jsxs)(_, {
      marginTop: `5`,
      children: [
        (0, _.jsx)(_, {
          level: `2`,
          size: `2`,
          weight: `heavy`,
          contrast: `title`,
          marginBottom: `2`,
          children: _(`#SeasonPass_Header`),
        }),
        !_ &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                _: `p`,
                size: `4`,
                contrast: `body`,
                marginBottom: `2`,
                children: _(`#SeasonPass_Incomplete_Desc`),
              }),
              (0, _.jsx)(_, {
                _: `p`,
                size: `4`,
                contrast: `body`,
                marginBottom: `2`,
                children: _(
                  `#SeasonPass_Incomplete_Desc2`,
                  (0, _.jsx)(_, {
                    href: `${_.STORE_BASE_URL}account/notificationsettings`,
                    contrast: `title`,
                  }),
                ),
              }),
            ],
          }),
        _.milestones
          .sort((_, _) =>
            _.shipped && _.shipped
              ? (_.rtime_complete ?? 0) - (_.rtime_complete ?? 0)
              : _.shipped
                ? -1
                : _.shipped
                  ? 1
                  : _(_) - _(_),
          )
          .map((_) =>
            (0, _.jsx)(
              _,
              {
                baseGameAppID: _.appid,
                milestone: _,
              },
              `ms_` + _.milestone_id,
            ),
          ),
      ],
    }),
  });
}
function _(_) {
  let _ = _.dates ?? [];
  return _[_.length - 1]?.rtime ?? 0;
}
function _(_) {
  let { milestone: _, baseGameAppID: _ } = _,
    _ = (_.milestone_desc?.length ?? 0) > 0;
  return (0, _.jsxs)(_, {
    className: _,
    marginBottom: `2`,
    children: [
      (0, _.jsxs)(_, {
        className: _(_, !!_.shipped && `W-wx69qVbdY-`),
        justify: `between`,
        align: `center`,
        padding: `3`,
        children: [
          (0, _.jsxs)(_, {
            size: `4`,
            weight: `medium`,
            color: _.shipped ? `lime-11` : void 0,
            contrast: `title`,
            children: [
              !!_.shipped && `✓`,
              `\xA0`,
              _.GetTokenWithFallback(_.title ?? []),
            ],
          }),
          (0, _.jsx)(_, {
            milestone: _,
          }),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          milestone: _,
          baseGameAppID: _,
        }),
    ],
  });
}
function _(_) {
  let { milestone: _, baseGameAppID: _ } = _,
    _ = _.GetTokenWithFallback(_.milestone_desc ?? []),
    _ = _.appid || _.coming_soon_appid;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _
        ? (0, _.jsx)(_, {
            appid: _,
          })
        : null,
      (0, _.jsx)(_, {
        padding: `4`,
        children: (0, _.jsxs)(_, {
          _: `div`,
          size: `4`,
          color: `greyneutral-12`,
          children: [
            (0, _.jsx)(_, {
              text: _,
            }),
            !!_.shipped &&
              (0, _.jsx)(_, {
                milestone: _,
                baseGameAppID: _,
              }),
          ],
        }),
      }),
    ],
  });
}
function _(_) {
  let { milestone: _ } = _;
  if (_.shipped)
    return (0, _.jsx)(_, {
      milestone: _,
    });
  let _ = _.dates ?? [],
    _ = _[0]?.rtime ?? 0,
    _ = _.filter((_, _) => _ == 0 || (_.rtime ?? 0) < _);
  return (0, _.jsx)(_, {
    _: `div`,
    size: `3`,
    weight: `light`,
    color: `greyneutral-12`,
    align: `end`,
    children: _(
      `#SeasonPass_Release_Date`,
      (0, _.jsx)(`br`, {}),
      [..._].reverse().map((_, _) => {
        let _ = _(_.coming_soon_display_type, _.rtime ?? 0, void 0, !0);
        return (0, _.jsx)(
          `div`,
          {
            className: _ + 1 < _.length ? _ : void 0,
            children: _,
          },
          `dd` + _.rtime + _.coming_soon_display_type,
        );
      }),
    ),
  });
}
function _(_) {
  let { milestone: _ } = _,
    _ = _(_.appid),
    { data: _ } = _(_),
    _ = _?.steam_release_date || _.rtime_complete || 0;
  return (0, _.jsx)(_, {
    _: `div`,
    size: `2`,
    weight: `light`,
    color: `lime-11`,
    align: `end`,
    children: _(`#SeasonPass_Released_Date`, (0, _.jsx)(`br`, {}), _(_)),
  });
}
function _(_) {
  let { milestone: _, baseGameAppID: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        size: `4`,
        color: `greyneutral-4`,
        marginY: `3`,
      }),
      (0, _.jsx)(`div`, {
        children: _(
          _.appid ? `#SeasonPass_DLC_Status` : `#SeasonPass_Event_Status`,
        ),
      }),
      (0, _.jsxs)(_, {
        gap: `2`,
        children: [
          !!_.appid &&
            (0, _.jsx)(_, {
              milestone: _,
            }),
          !!_.event_gid &&
            (0, _.jsx)(_, {
              milestone: _,
              baseGameAppID: _,
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { milestone: _ } = _,
    _ = _(_.appid),
    { data: _ } = _(_);
  return (0, _.jsx)(_, {
    href: _(_) || `${_.STORE_BASE_URL}app/${_.appid}`,
    underline: `always`,
    contrast: `title`,
    children: _(`#SeasonPass_ShowStore`),
  });
}
function _(_) {
  let { milestone: _, baseGameAppID: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _(_.event_gid ?? ``);
  return _
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            underline: `always`,
            contrast: `title`,
            onClick: (_) => {
              (_.preventDefault(), _.stopPropagation(), _(!0));
            },
            children: _(`#SeasonPass_ReadEvent`),
          }),
          !!_ &&
            (0, _.jsx)(_, {
              appid: _,
              eventModel: _,
              announcementGID: _.AnnouncementGID,
              closeModal: () => _(!1),
              partnerEventStore: _,
              bShowOnlyInitialEvent: !0,
              showAppHeader: !0,
              trackingLocation: 3,
            }),
        ],
      })
    : (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}news/app/${_}/view/${_.event_gid}`,
        underline: `always`,
        contrast: `title`,
        children: _(`#SeasonPass_ReadEvent`),
      });
}
export { _ as SeasonPassDisplayFromStoreBrowse, _ as default };
