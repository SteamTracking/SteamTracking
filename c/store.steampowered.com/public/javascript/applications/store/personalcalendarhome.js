import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _ } from "./microtrailerdisplay.js";
import { _, _ } from "./carouselarrows.js";
import { _ } from "./lazyrenderchildren.js";
import { _, _ } from "./seemorebutton.js";
import { _ } from "./storegamehover.js";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./main.js";
import { _, _ } from "./personalcalendarstore.js";
import { _ } from "./assetutils.js";
var _ = _(_(), 1),
  _ = `nHdn-Ea4zSg-`,
  _ = `_37RLKwjtCwE-`,
  _ = `U-HkHHn6qDk-`,
  _ = `IdjQXo6E9yc-`,
  _ = `sGDLZ2AYREY-`,
  _ = `maxz19gKOQc-`,
  _ = `CAnATFwmik4-`,
  _ = `N83ri6QShHM-`,
  _ = `-UQT03dsikU-`,
  _ = `e217oOT2n-w-`,
  _ = `ojxRGZ9ipx0-`,
  _ = `DgabeNaTSbY-`,
  _ = `_1P6OIcWhV5A-`,
  _ = _(),
  _ = {
    name: `personalcalendarPrefs`,
    options: {
      path: `/personalcalendar`,
      secure: !0,
      maxAge: 31536e6,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  };
function _(_) {
  let { bShowNewBadge: _, bHasFooterActionLegend: _, onSeeMore: _ } = _,
    _ = _(_),
    _ = _ ? JSON.parse(_) : void 0,
    _ = _(940),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = new Date().getDay(),
    _ = 13 + _,
    _ = 22 - _,
    _ = _(0, _, _),
    _ = _(_, _, !0, !0).flat(),
    _ = _(`${_.STORE_BASE_URL}personalcalendar`, _, _),
    { bShowSeeMoreHint: _, panelProps: _ } = _(_),
    _ = _.Localize(`#PersonalCalendar_Explore`),
    _ = _.useCallback(() => _?.(_), [_, _]);
  if (!_.data)
    return (0, _.jsx)(_, {
      className: _,
    });
  let _ = _.data.arrAppInfos;
  return (
    _ &&
      ((_ = _.filter((_) => !_.bHideOwned || !_.bIsOwned)),
      (_ = _.filter((_) => !_.bHideEarlyAccess || !_.bIsEarlyAccess)),
      (_ = _.filter((_) => {
        switch (_.eWishlistDisplay) {
          case 0:
            return !0;
          case 1:
            return _.bIsWishlisted;
          case 2:
            return !_.bIsWishlisted;
          default:
            return !0;
        }
      }))),
    (0, _.jsxs)(_, {
      className: _,
      navEntryPreferPosition: _.PREFERRED_CHILD,
      ..._,
      onOptionsButton: _ ? _ : _.onOptionsButton,
      onOptionsActionDescription: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    _ &&
                      (0, _.jsx)(`span`, {
                        className: `x8jWPgfdVoI-`,
                        children: _.Localize(`#NewBadge`),
                      }),
                    _.Localize(`#PersonalCalendar_Title`),
                  ],
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _.Localize(`#PersonalCalendar_Subtitle`),
                }),
              ],
            }),
            !_ &&
              (0, _.jsx)(_, {
                calendarURL: _,
                location: `desktop`,
              }),
            _ &&
              !_ &&
              (0, _.jsx)(_, {
                label: _,
                shown: _,
              }),
          ],
        }),
        (0, _.jsx)(_, {
          visibleElements: 5,
          hideArrows: !1,
          disableEdgeWrap: !0,
          hidePips: _,
          screenIsWide: _,
          startingSlide: 10,
          className: _ ? void 0 : `fiveElementEightGap`,
          children: _.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                bInitialFocus: _ === 10,
                nTimestamp: _,
                nNextTimestamp: _ < _.length - 1 ? _[_ + 1] : _ + 86400,
                arrAppInfos: _,
                nRankThreshold: _?.nResultsToShow ?? 100,
              },
              _,
            ),
          ),
        }),
        !_ &&
          (0, _.jsx)(_, {
            calendarURL: _,
            location: `mobile`,
          }),
      ],
    })
  );
}
function _(_) {
  let { calendarURL: _, location: _ } = _;
  return (0, _.jsx)(`div`, {
    className: `see_more_link ${_ == `mobile` ? `see_more_mobile` : `see_more_desktop`} home_section_button`,
    children: (0, _.jsx)(`a`, {
      href: _,
      className: `btn_small btn_medium btnv6_white_transparent`,
      children: (0, _.jsx)(`span`, {
        children: _.Localize(`#PersonalCalendar_Explore`),
      }),
    }),
  });
}
function _(_) {
  let {
      nTimestamp: _,
      nNextTimestamp: _,
      bInitialFocus: _,
      arrAppInfos: _,
      nRankThreshold: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _(`${_.STORE_BASE_URL}personalcalendar`, _, _),
    _ = {
      weekday: `short`,
    },
    _ = {
      day: `numeric`,
      month: `numeric`,
    },
    _ = new Date(_ * 1e3),
    _ = new Date(),
    _ =
      _.getDate() === _.getDate() &&
      _.getMonth() === _.getMonth() &&
      _.getFullYear() === _.getFullYear(),
    _ = _ > _,
    _ = _.toLocaleDateString(_(), _),
    _ = _.toLocaleString(_(), _),
    _ = _.filter((_) => _.nReleaseDate > _ && _.nReleaseDate < _).sort(
      (_, _) =>
        _.bIsWishlisted && !_.bIsWishlisted
          ? -1
          : _.bIsWishlisted && !_.bIsWishlisted
            ? 1
            : _.nRank - _.nRank,
    ),
    _ = _ ?? 100,
    _ = _.filter((_) => _.nRank <= _).length - 2,
    _ = _.length == 0,
    [_, _] = _.useState(!1),
    _ = _(),
    _ = _.useRef(null);
  return (
    _.useEffect(() => {
      if (_ && _ && _.current) {
        let _ = _.current.closest(`.carousel__slide`),
          _ = _.current.closest(`.carousel__slider-tray-wrapper`);
        _ && _ && (_.scrollLeft = _.offsetLeft);
      }
    }, [_, _]),
    (0, _.jsxs)(_, {
      className: _(_, _ && `_8XPG-IbvHHs-`, _ && `N3v3VnhKgU8-`, _ && void 0),
      "flow-children": `column`,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            !_ &&
              (0, _.jsx)(`div`, {
                className: `FeN6na6SvAg-`,
                children: _,
              }),
            !_ &&
              (0, _.jsx)(`div`, {
                className: `bLQQ-syFWHg-`,
                children: _,
              }),
            _ &&
              (0, _.jsx)(`div`, {
                className: `lGsGMjZ-9IE-`,
                children: _.Localize(`#Time_Today`),
              }),
          ],
        }),
        (0, _.jsx)(_, {
          className: _,
          "flow-children": `column`,
          navEntryPreferPosition: _.MAINTAIN_Y,
          preferredFocus: _ && !_,
          ref: _,
          onFocusWithin: () => _(!0),
          children: (0, _.jsxs)(_.Fragment, {
            children: [
              _.slice(0, 2).map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    nAppID: _.nAppID,
                  },
                  _.nAppID,
                ),
              ),
              _ &&
                (0, _.jsx)(`div`, {
                  className: `MDx-yf8h-Ww-`,
                  children: _(
                    _.Localize(`#PersonalCalendar_EmptyDay`),
                    (0, _.jsx)(`a`, {
                      href: _,
                    }),
                  ),
                }),
            ],
          }),
        }),
        !_ &&
          _ > 0 &&
          (0, _.jsx)(_, {
            href: _,
            className: `rsPEubiF9HI-`,
            children: _.Localize(`#PersonalCalendar_More`, _),
          }),
      ],
    })
  );
}
function _(_) {
  let _ = _({
      appid: _.nAppID,
    }),
    _ = _(940),
    _ = _(),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    _ = _.useRef(null),
    _ = _.data === null ? void 0 : _.data,
    _ = _(_, _ || _ ? `main_capsule` : `hero_capsule`),
    { data: _ } = _(),
    _ = _?.preferences?.disable_microtrailers,
    _ = _ || _;
  return (
    _.useEffect(() => {
      if (
        (_.current &&
          _.current.setAttribute(`data-ds-appid`, _.nAppID.toString() ?? ``),
        window.GDynamicStore && window._)
      ) {
        let _ = window._(_.current);
        window.GDynamicStore.DecorateDynamicItems(_);
      }
    }, [_.nAppID, _]),
    (0, _.jsx)(_, {
      feature: `personalcalendar-homepage`,
      children: (0, _.jsx)(_, {
        onGamepadFocus: () => _(!0),
        onGamepadBlur: () => _(!1),
        children: (0, _.jsx)(_, {
          _: {
            appid: _.nAppID,
          },
          hoverClassName: _,
          disableScreenshots: !0,
          children: (0, _.jsx)(_, {
            appID: _.nAppID,
            children: (0, _.jsxs)(_, {
              ref: _,
              className: _(_, _ && `T5zU104tmR0-`),
              onMouseOver: () => _(!0),
              onMouseOut: () => _(!1),
              children: [
                (0, _.jsx)(`img`, {
                  className: _,
                  src: _,
                  alt: ``,
                }),
                _ &&
                  _ &&
                  (0, _.jsx)(_, {
                    _: {
                      appid: _.nAppID,
                    },
                    nIntervalMS: 1e3,
                  }),
                !_ &&
                  (0, _.jsx)(_, {
                    _: {
                      appid: _.nAppID,
                    },
                    active: _,
                    bIsHoverMode: !0,
                  }),
              ],
            }),
          }),
        }),
      }),
    })
  );
}
function _(_) {
  let _ = _(_._) ?? [],
    [_, _] = _.useState(0);
  return (
    _(() => {
      _.length > 0 && _((_ + 1) % _.length);
    }, _.nIntervalMS),
    !_?.length || _ == -1
      ? null
      : (0, _.jsx)(`div`, {
          className: _,
          children: _.map((_, _) =>
            (0, _.jsx)(
              `img`,
              {
                className: _(_, _ == _ && `B638L5YAOi8-`),
                src: _.BASE_URL_SHARED_CDN + `/store_item_assets/` + _.filename,
                alt: ``,
              },
              _.filename,
            ),
          ),
        })
  );
}
function _(_) {
  return _.logged_in
    ? (0, _.jsx)(_, {
        placeholderHeight: 390,
        rootMargin: `100% 0px 100% 0px`,
        children: (0, _.jsx)(_, {
          ..._,
        }),
      })
    : null;
}
export { _ as default };
