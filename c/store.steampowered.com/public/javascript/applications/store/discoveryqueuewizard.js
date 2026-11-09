import { _ } from "./rolldown-runtime.js";
import { _, _, _ } from "./libraries.js";
import { _ } from "./storelink.js";
import { _, _, _, _, _, _, _, _, _ } from "./saletags.js";
import { _ } from "./usehotkeys.js";
import { _ } from "./ostype.js";
import { _ } from "./ajaxhooks.js";
import { _ } from "./throbber.js";
import { _ } from "./trailertitlebar.js";
import { _ } from "./creatorhomestore.js";
import "./steammessages_salerewards_pb.js";
import { _, _ } from "./saleclaim.js";
import { _, _ } from "./playerstore.js";
import { _ } from "./storeitemhooks.js";
import { _ } from "./friendsstore.js";
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
} from "./trailerdefines.js";
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
import { _, _, _, _ } from "./discoveryqueuestore.js";
import { _ } from "./clanstore.js";
import { _ } from "./steamavatar.js";
import { _ } from "./personanameandstatus.js";
import { _, _, _ } from "./apprelevancestore.js";
var _ = _(_()),
  _ = `NerpSqWj84M-`,
  _ = `SOzTsKYY9Yg-`,
  _ = _(),
  _ = ({ nPercent: _, size: _ = 120, strokeWidth: _ = 20 }) => {
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
  _ = new _(`AppRelevance`).Debug;
function _(_, _) {
  let _ = (0, _.useMemo)(
    () => _.Get().GetRecommendingCuratorsForApp(_) || [],
    [_],
  );
  return _({
    queryKey: [`RecommendingCurators`, _],
    queryFn: () =>
      Promise.all(_?.map((_) => _.LoadClanInfoForClanAccountID(_))),
    enabled: !!_ && _ && _.length > 0,
  });
}
function _(_) {
  let {
      appID: _,
      bShowAvatars: _,
      storeItem: _,
      bHideDescription: _,
      bShowCuratorInfo: _,
      bShowCreatorInfo: _,
    } = _,
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(),
    _ = _({
      queryKey: [`SimilarPlayedAppsLoad`, _],
      queryFn: () =>
        _.Get().QueueMultipleAppRequests(
          _.data.arrSimilarPlayedApps?.map((_) => _.appid),
          {
            include_basic_info: !0,
            include_assets: !0,
          },
        ),
      enabled: _.isSuccess,
    }),
    _ = _(_, _),
    _ = (0, _.useMemo)(() => {
      let _ = [];
      return (
        _ &&
          ((_ = _.concat(
            _.GetAllFranchiseCreatorClans().map((_) => ({
              nAccountID: _,
              type: `franchise`,
            })),
          )),
          (_ = _.concat(
            _.GetAllDeveloperCreatorClans().map((_) => ({
              nAccountID: _,
              type: `developer`,
            })),
          )),
          (_ = _.concat(
            _.GetAllPublisherCreatorClans().map((_) => ({
              nAccountID: _,
              type: `publisher`,
            })),
          )),
          (_ = _.filter((_) => _.Get().BIsFollowingCurator(_.nAccountID)))),
        _
      );
    }, [_]),
    _ = _({
      queryKey: [`FollowedCreators`, _],
      queryFn: () =>
        _.LoadClanInfoForClanAccountID(_[0].nAccountID).then((_) => ({
          clanInfo: _,
          type: _[0].type,
        })),
      enabled: !!_ && _ && _.length > 0,
    }),
    _ = _({
      queryKey: [`PlayerSummaries`, _, _],
      queryFn: async () => {
        let _ = [],
          _ = [],
          _ = [],
          _ = _ ? 10 : 1;
        for (
          let _ = 0;
          _ < _.data.accountids_recommended?.length && _ < _;
          _++
        ) {
          let _ = _.InitFromAccountID(
            _.data.accountids_recommended[_],
            _.EUNIVERSE,
          );
          _.push(_.ConvertTo64BitString());
        }
        for (let _ = 0; _ < _.data.in_wishlist?.length && _ < _; _++) {
          let _ = new _(_.data.in_wishlist[_].steamid);
          _.push(_.ConvertTo64BitString());
        }
        for (let _ = 0; _ < _.data.owns?.length && _ < _; _++) {
          let _ = new _(_.data.owns[_].steamid);
          _.push(_.ConvertTo64BitString());
        }
        return {
          rgRecommendedFriends: _,
          rgWishlistFriends: _,
          rgOwnedFriends: _,
        };
      },
      enabled: _.isSuccess && _.isSuccess,
    });
  if (
    !_ ||
    _.isLoading ||
    _.isLoading ||
    _.isLoading ||
    _.isLoading ||
    _.isLoading ||
    _.isLoading ||
    _.isLoading
  )
    return (0, _.jsx)(_, {
      size: `medium`,
      position: `center`,
    });
  let _ = [];
  _.isSuccess &&
    _.data.arrSimilarPlayedApps &&
    _.data.arrSimilarPlayedApps.slice(0, 2).forEach((_) => {
      let _ = _.Get().GetApp(_.appid);
      _
        ? _.push(
            (0, _.jsx)(
              _,
              {
                lifetimePlaytime: _.playtimeForever,
                storeItem: _,
              },
              _.appid,
            ),
          )
        : console.error(`Failed to load store data `, _);
    });
  let _ = _.GetItemIDs().findIndex((_) => _.appid === _),
    _ = _.data?.bRecommendedByIR,
    _ = _.length > 0,
    _ = _.data?.owns?.length,
    _ = _.data?.in_wishlist?.length,
    _ = _.data?.accountids_recommended?.length,
    _ = 0;
  return (
    _ > 0 && _++,
    _ > 0 && _++,
    _ > 0 && _++,
    _ && _++,
    _ >= 0 && _++,
    _.length > 0 && _++,
    _ && _?.data?.length > 0 && _++,
    _ && _.data && _++,
    _(`FriendsOwned: `, _, ` FriendsWishlisted: `, _, `cRecommended: `, _),
    (0, _.jsxs)(_.Fragment, {
      children: [
        _ > 0 &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(`div`, {
                className: `Hw5Md-rtn-k-`,
                children: _(`#DiscoveryQueue_WhyRelevant`),
              }),
              (0, _.jsxs)(`div`, {
                role: `list`,
                className: `M9g7Z8vAw60-`,
                children: [
                  _ &&
                    (0, _.jsx)(_, {
                      header: _(`#DiscoveryQueue_SimilarGames`),
                      children: (0, _.jsx)(`div`, {
                        className: `d7rsPMqqO4s-`,
                        children: _,
                      }),
                    }),
                  _ &&
                    _?.data?.length > 0 &&
                    (0, _.jsx)(_, {
                      header: _(`#ContentHub_Recommendation_Curators`),
                      children: (0, _.jsx)(`div`, {
                        className: _(`d7rsPMqqO4s-`, `GQ2d2HGUoPA-`),
                        children: _.data.filter(Boolean).map((_) =>
                          (0, _.jsx)(
                            _,
                            {
                              curator: _,
                            },
                            `curator_` + _.clanAccountID,
                          ),
                        ),
                      }),
                    }),
                  _ &&
                    !!_.data &&
                    (0, _.jsx)(_, {
                      creatorInfo: _.data,
                    }),
                  _ >= 0 &&
                    (0, _.jsx)(_, {
                      header: _(
                        `#DiscoveryQueue_TopSellers`,
                        _(_ + 1),
                        (0, _.jsx)(`span`, {
                          className: `wdv04oGNxck-`,
                        }),
                      ),
                    }),
                  _ &&
                    !_ &&
                    (0, _.jsx)(_, {
                      header: _(`#DiscoveryQueue_RecommendedByIR`),
                    }),
                  (0, _.jsx)(_, {
                    bShowAvatars: _,
                    count: _.data?.accountids_recommended?.length,
                    locToken: `#DiscoveryQueue_FriendsRecommended`,
                    arrSteamIDs: _.data?.rgRecommendedFriends,
                  }),
                  (0, _.jsx)(_, {
                    bShowAvatars: _,
                    count: _.data?.owns?.length,
                    locToken: `#DiscoveryQueue_FriendsOwned`,
                    arrSteamIDs: _.data?.rgOwnedFriends,
                  }),
                  (0, _.jsx)(_, {
                    bShowAvatars: _,
                    count: _.data?.in_wishlist?.length,
                    locToken: `#DiscoveryQueue_FriendsWishlisted`,
                    arrSteamIDs: _.data?.rgWishlistFriends,
                  }),
                ],
              }),
            ],
          }),
        !_ || _ == 0
          ? (0, _.jsx)(`div`, {
              className: _(_, _ && void 0),
              children: _.GetShortDescription(),
            })
          : (0, _.jsx)(`div`, {
              "aria-label": _.GetShortDescription(),
            }),
      ],
    })
  );
}
function _(_) {
  let { creatorInfo: _ } = _;
  if (!_) return null;
  let _;
  switch (_.type) {
    case `publisher`:
      _ = `#ContentHub_Recommendation_FollowedPublisher`;
      break;
    case `developer`:
      _ = `#ContentHub_Recommendation_FollowedDeveloper`;
      break;
    case `franchise`:
      _ = `#ContentHub_Recommendation_FollowedFranchise`;
  }
  return _
    ? (0, _.jsx)(_, {
        header: _(
          _,
          (0, _.jsx)(`span`, {
            className: _,
            children: _.clanInfo?.group_name,
          }),
        ),
      })
    : null;
}
function _(_) {
  let { curator: _ } = _,
    { creatorHome: _ } = _(_?.clanAccountID);
  return !_ || !_
    ? null
    : (0, _.jsx)(_, {
        href: _.GetCreatorHomeURL(null),
        children: (0, _.jsx)(`img`, {
          src: _.avatar_medium_url,
        }),
      });
}
function _(_) {
  let { lifetimePlaytime: _, storeItem: _ } = _,
    _ = _(_);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      _: _,
      bHidePrice: !0,
      hoverProps: {
        direction: `overlay`,
        nBodyAlignment: 1,
        style: {
          minWidth: `320px`,
          zIndex: 5e3,
        },
      },
      children: (0, _.jsx)(`img`, {
        className: _,
        alt: _.GetName(),
        src: _.GetAssets().GetSmallCapsuleURL(),
      }),
    }),
  });
}
function _(_) {
  let { arrSteamIDs: _, count: _, locToken: _, bShowAvatars: _ } = _;
  return _
    ? _ == 1 && !_
      ? (0, _.jsx)(_, {
          header: _(
            _ + `_Single`,
            (0, _.jsx)(_, {
              steamid: _[0],
            }),
          ),
        })
      : (0, _.jsx)(_, {
          header: _(
            _,
            _,
            (0, _.jsx)(`span`, {
              className: _,
            }),
          ),
          children:
            _ &&
            _.length > 0 &&
            (0, _.jsx)(`div`, {
              className: `nd1w3QliCfE-`,
              children:
                _ == 1
                  ? (0, _.jsx)(_, {
                      steamid: _[0],
                    })
                  : (0, _.jsx)(_, {
                      arrSteamIDs: _,
                    }),
            }),
        })
    : null;
}
function _(_) {
  let { steamid: _ } = _,
    { data: _ } = _(_);
  return !_ || !_.m_bInitialized
    ? null
    : (0, _.jsx)(`span`, {
        "data-miniprofile": `s` + _.m_steamid.ConvertTo64BitString(),
        className: _,
        children: _.m_strPlayerName,
      });
}
function _(_) {
  let { arrSteamIDs: _ } = _,
    _ = _(_);
  return (0, _.jsx)(_.Fragment, {
    children: _.map(
      ({ data: _ }) =>
        _ &&
        (0, _.jsx)(
          _,
          {
            "data-miniprofile": `s` + _.m_steamid.ConvertTo64BitString(),
            persona: _,
            size: `Small`,
            statusPosition: `right`,
          },
          _.m_steamid.ConvertTo64BitString(),
        ),
    ),
  });
}
function _(_) {
  let { steamid: _ } = _,
    { data: _ } = _(_);
  return _
    ? (0, _.jsxs)(_, {
        className: _,
        "data-miniprofile": `s` + _,
        children: [
          (0, _.jsx)(_, {
            persona: _,
            size: `Small`,
            statusPosition: `right`,
          }),
          (0, _.jsx)(_, {
            className: _,
            persona: _,
            eFriendRelationship: 3,
            bIsSelf: !1,
            strNickname: null,
            bParenthesizeNicknames: !1,
            bCompactView: !1,
            bNoMask: !0,
          }),
        ],
      })
    : null;
}
function _(_) {
  let { children: _, header: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: void 0,
            children: _,
          }),
          _,
        ],
      }),
    ],
  });
}
new _(`DiscoveryQueueApp`).Debug;
function _(_) {
  let {
      appID: _,
      nItemHeight: _,
      nItemWidth: _,
      selected: _,
      fnFocused: _,
      eStoreDiscoveryQueueType: _,
      storePageFilter: _,
      bPreferDemoStorePage: _,
      elVideo: _,
      elDetails: _,
      appAriaIDs: _,
    } = _,
    [_] = _(_, _),
    _ = _(),
    _ = _()?.ownerWindow || window,
    _ = _(_, _, _, _),
    { bIsIgnored: _, fnUpdateIgnored: _ } = _(_),
    { bIsWishlisted: _, fnUpdateWishlist: _ } = _(_),
    _ = _.useRef(void 0);
  if (
    (_.useEffect(() => {
      _ &&
        _.current &&
        _.current.focus({
          preventScroll: !0,
        });
    }, [_]),
    !_)
  )
    return (console.warn(`Error: missing store item for appid `, _), null);
  let _ = {
    width: _ || void 0,
    height: _ || void 0,
  };
  return (0, _.jsxs)(_, {
    "aria-labelledby": _(
      _.nameId,
      _.tagsId,
      _.reviewId,
      _.relevanceId,
      _.buttonsId,
    ),
    ref: _,
    style: _,
    className: _(_, _ && `vyD3DBFIFUc-`),
    onOptionsActionDescription: _(
      _
        ? `#DiscoveryQueue_RemoveFromWishlist`
        : `#DiscoveryQueue_AddToWishlist`,
    ),
    onOptionsButton: _,
    onOKActionDescription: _(`#DiscoveryQueue_ViewStorePage`),
    onOKButton: () => {
      _.location.href = _;
    },
    onSecondaryActionDescription: _(
      _ ? `#DiscoveryQueue_Undo` : `#DiscoveryQueue_IgnoreLink`,
    ),
    onSecondaryButton: _,
    fnScrollIntoViewHandler: () => (_(), !0),
    children: [
      (0, _.jsx)(`div`, {
        className: _(_, _ && `_3ZYr-Efwvg8-`),
        children: (0, _.jsxs)(`div`, {
          className: _(_, _ && `_3ZYr-Efwvg8-`),
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _(`#DiscoveryQueue_Ignored`),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _(`#DiscoveryQueue_IgnoredConfirmation`),
            }),
            (0, _.jsxs)(_, {
              className: _(_, _),
              onClick: _,
              children: [
                _ &&
                  (0, _.jsx)(_, {
                    button: _._,
                    type: _.Light,
                    size: _.Medium,
                  }),
                _(`#DiscoveryQueue_Undo`),
              ],
            }),
          ],
        }),
      }),
      _,
      _,
    ],
  });
}
function _(_, _, _, _) {
  let _ = _();
  return _.useMemo(() => {
    if (!_) return;
    let _ = _(_),
      _ = _ >= 0 ? `?inqueue=` + _ + (_ ? `_` + _ : ``) : ``,
      _ = _(_, _.GetStorePageURL(_) + _);
    return _(_);
  }, [_, _, _, _, _]);
}
function _(_) {
  let {
      appID: _,
      bShowMinimizedDisplay: _,
      eStoreDiscoveryQueueType: _,
      storePageFilter: _,
      bPreferDemoStorePage: _,
      appAriaIDs: _,
    } = _,
    [_] = _(_, _),
    _ = _(_),
    { bIsIgnored: _, fnUpdateIgnored: _ } = _(_),
    { bIsWishlisted: _, fnUpdateWishlist: _ } = _(_),
    _ = _(_, _, _, _),
    _ = _(),
    _ = _;
  if (!_) return;
  let _ = _.GetAssets().GetLibraryCapsuleURL(),
    _ = _.GetAssets().GetHeaderURL();
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ &&
            (0, _.jsxs)(`a`, {
              className: _(`_-6qCNJHr4Z0-`),
              href: _,
              children: [
                (0, _.jsx)(`img`, {
                  className: `Q3mOh913Yuw-`,
                  src: _,
                }),
                _ &&
                  (0, _.jsx)(`img`, {
                    className: `k5tHhP269dw-`,
                    src: _,
                  }),
              ],
            }),
          (0, _.jsxs)(`div`, {
            _: _.nameId,
            className: _,
            children: [
              (0, _.jsx)(`a`, {
                className: _(_),
                href: _,
                children: _.GetName(),
              }),
              (0, _.jsx)(_, {
                bSingleLineMode: !0,
                _: _,
              }),
            ],
          }),
          (0, _.jsx)(_, {
            rgTagIDs: _.GetTagIDs(),
            ariaLabelID: _.tagsId,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            _: _.reviewId,
            children: (0, _.jsx)(_, {
              bShowTooltip: !0,
              bTruncateTotalReviews: _,
              _: _,
            }),
          }),
          (0, _.jsx)(`div`, {
            _: _.relevanceId,
            className: _,
            children: (0, _.jsx)(_, {
              bHideDescription: _,
              bShowAvatars: !_,
              storeItem: _,
              appID: _,
            }),
          }),
        ],
      }),
      !_ &&
        (0, _.jsx)(`div`, {
          className: `Ud5K2f6NQFA-`,
          children: (0, _.jsx)(`div`, {
            _: _.buttonsId,
            className: `sRPPHGX-rq4-`,
            children: (0, _.jsxs)(`div`, {
              className: `kjR6Qum8rRo-`,
              children: [
                _.BHasDemo() &&
                  (0, _.jsx)(_, {
                    _: _,
                    className: _(
                      `BxLuFJsRaUQ-`,
                      `VE8INnFzaCw-`,
                      `enD9-bmgGhA-`,
                    ),
                  }),
                (0, _.jsxs)(`a`, {
                  className: _(`BxLuFJsRaUQ-`, `VE8INnFzaCw-`),
                  href: _,
                  children: [
                    _ &&
                      (0, _.jsx)(_, {
                        button: _._,
                        type: _.Light,
                        size: _.Medium,
                        additionalClassName: `a-wHbIOxF8U-`,
                      }),
                    ` `,
                    _(`#DiscoveryQueue_ViewStorePage`),
                  ],
                }),
                (0, _.jsx)(_, {
                  toolTipContent: _(
                    _ ? `#RemoveFromWishlist_ttip` : `#AddToWishlist_ttip`,
                  ),
                  children: (0, _.jsxs)(_, {
                    "aria-label": _(
                      _ ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
                    ),
                    focusable: !0,
                    className: _(`BxLuFJsRaUQ-`, _ && `_3ZYr-Efwvg8-`),
                    onClick: _,
                    children: [
                      _ &&
                        (0, _.jsx)(_, {
                          button: _._,
                          type: _.Light,
                          size: _.Medium,
                          additionalClassName: `a-wHbIOxF8U-`,
                        }),
                      _ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
                    ],
                  }),
                }),
                (0, _.jsx)(_, {
                  toolTipContent: _(`#SaleTrailerCarousel_IgnoreLink_ttip`),
                  children: (0, _.jsx)(_, {
                    "aria-label": _(`#DiscoveryQueue_IgnoreLink`),
                    focusable: !0,
                    className: _(`BxLuFJsRaUQ-`, _ && `_3ZYr-Efwvg8-`),
                    onClick: _,
                    children: (0, _.jsx)(_, {}),
                  }),
                }),
              ],
            }),
          }),
        }),
    ],
  });
}
function _(_) {
  let { rgTagIDs: _, ariaLabelID: _ } = _,
    _ = [..._(_)].slice(0, 8);
  return (0, _.jsx)(`div`, {
    _: _,
    role: `list`,
    className: _,
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          className: _,
          tagID: _,
        },
        _,
      ),
    ),
  });
}
function _() {
  return {
    nameId: _.useId(),
    tagsId: _.useId(),
    reviewId: _.useId(),
    relevanceId: _.useId(),
    buttonsId: _.useId(),
  };
}
var _ = new _(`DiscoveryQueueWizard`).Debug,
  _ = 1,
  _ = 1400,
  _ = `discoveryqueue2022`;
async function _(_, _, _, _) {
  let _ = [],
    _ = !1;
  try {
    let { appids: _, exhausted: _ } = await _.Get().GetDiscoveryQueueAppsOfType(
      _,
      _,
      _,
    );
    ((_ = [..._]),
      (_ = _),
      _ && _.findIndex((_) => _ === _) === -1 && _.unshift(_),
      await _.Get().QueueMultipleAppRequests(_, {
        ..._,
        ..._,
      }));
  } catch (_) {
    console.error(`Failed getting discovery queue apps`, _);
  }
  return {
    appids: _,
    exhausted: _,
  };
}
function _(_) {
  let [_, _] = _.useState(!1),
    _ = _();
  return (
    (0, _.useEffect)(() => {
      (_.Init(_), _(!0));
    }, [_]),
    _
      ? (0, _.jsx)(_, {
          ..._,
        })
      : null
  );
}
function _(_) {
  let {
      eStoreDiscoveryQueueType: _,
      fnCloseModal: _,
      includeAppID: _,
      storePageFilter: _,
      bPreferDemoStorePage: _,
      bShowAOAutoPlayWarning: _,
    } = _,
    [_, _] = _.useState(0),
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(0),
    _ = _()?.ownerWindow || window,
    _ = _(_),
    [_, _] = _.useState(0),
    _ = _();
  (_(`ArrowLeft`, () => _(!1), !0, !0),
    _(`Left`, () => _(!1), !0, !0),
    _(`ArrowRight`, () => _(!0), !0, !0),
    _(`Right`, () => _(!0), !0, !0),
    _(`Escape`, () => _?.(), !0, !0),
    _(`Esc`, () => _?.(), !0, !0));
  let _ = _.useMemo(() => _.innerWidth < _, [_]),
    { fnGetDiscoveryQueue: _, rgAppIDs: _ } = _(_, _, _);
  (_.useEffect(() => {
    (_(!0), _.Get().HintLoad());
  }, []),
    _.useEffect(() => {
      let _ = _[_];
      _ != _ && (_ && _ != _ && _.AddImpression(_, _), _(_));
    }, [_, _, _, _, _]));
  let _ = (_) => {
    let _ = _(_ + (_ ? 1 : -1), 0, _.length - 1);
    _ != _ && (_(_), _(`New selected index: `, _, ` Prev selected index: `, _));
  };
  (_.useEffect(() => {
    _?.length &&
      _[_] !== _ &&
      (_((_) => _ + 1),
      _.Get()
        .SkipDiscoveryQueueItem(_[_], _, _)
        .then(() => _((_) => _ - 1)));
  }, [_, _, _, _]),
    _.useEffect(() => {
      _.length != _ && (_(_.length), _.length > _ && _[_] == _ && _(_ + 1));
    }, [_, _, _]));
  let [_] = _.useState(new Map()),
    _ = _(_, _),
    _ = !_() && _ > 0,
    _ = !_() && _ < _.length - 1,
    {
      refContainer: _,
      bIsDragging: _,
      nDragOffset: _,
      nDragSelectedOffsetIndex: _,
      handleTouchStart: _,
      handleTouchMove: _,
      handleTouchEnd: _,
    } = _((_) => _(_), _.length),
    _ = (_) => {
      _.target == _.currentTarget && (_?.(), _.stopPropagation());
    },
    _ = (_) => _(_ + _, _) && (_(_, -1, 1) || _),
    _ = _(_.STORE_BASE_URL + `explore?dq=widget`),
    _ = !_() && !_() && _ === 0,
    _ = _(_.STORE_BASE_URL + `explore/next/0`),
    _ = _[_] !== _,
    { nQueueStart: _, nCount: _ } = _(_, _);
  return (0, _.jsx)(_, {
    feature: _,
    children: (0, _.jsx)(_, {
      role: `dialog`,
      focusable: !1,
      "flow-children": `column`,
      className: _,
      navEntryPreferPosition: _.LAST,
      onCancelButton: () => _?.(),
      onCancelActionDescription: _(`#Button_Close`),
      children: (0, _.jsxs)(`div`, {
        className: _,
        onClick: _,
        children: [
          _.length > 0 &&
            (0, _.jsx)(_, {
              "flow-children": `row`,
              className: `Wp-fkK6n2-I-`,
              children: _,
            }),
          (0, _.jsxs)(_, {
            "flow-children": `row`,
            className: _,
            children: [
              (0, _.jsx)(_, {
                className: void 0,
                children: _(
                  `#DiscoveryQueue_LearnMore_Default`,
                  (0, _.jsx)(_, {
                    className: _,
                    href: _(_),
                  }),
                ),
              }),
              _ &&
                (0, _.jsx)(_, {
                  className: void 0,
                  children: _(
                    `#DiscoveryQueue_ClassicQueue_Link`,
                    (0, _.jsx)(_, {
                      className: `naQ5--hS5ms-`,
                      href: _(_),
                    }),
                  ),
                }),
              (0, _.jsx)(_, {
                className: _,
                children: (0, _.jsx)(_, {
                  focusable: !0,
                  className: _,
                  onClick: _,
                  "aria-label": _(`#Button_Close`),
                  onActivate: () => _ && _(),
                  children: (0, _.jsx)(_, {}),
                }),
              }),
            ],
          }),
          (0, _.jsx)(_, {
            role: `button`,
            "aria-label": _(`#Carousel_Next`),
            onClick: () => _(!1),
            className: _(_, _, _ && `_4dyYanLcAPg-`),
            children: (0, _.jsx)(_, {
              angle: 180,
            }),
          }),
          (0, _.jsx)(_, {
            role: `button`,
            "aria-label": _(`#Carousel_Prev`),
            onClick: () => _(!0),
            className: _(_, _, _ && `_4dyYanLcAPg-`),
            children: (0, _.jsx)(_, {
              angle: 0,
            }),
          }),
          (0, _.jsx)(_, {
            ref: _,
            className: _,
            focusable: !1,
            onTouchStart: _,
            onTouchMove: _,
            onTouchEnd: _,
            children: [-2, -1, 0, 1, 2].map((_) =>
              (0, _.jsx)(
                `div`,
                {
                  className: _({
                    [_]: !0,
                    [_]: _,
                    [_]: _(_),
                    [_]: _ == -2,
                    [_]: _ == -1,
                    [_]: _ == 0,
                    [_]: _ == 1,
                    [_]: _ == 2,
                    [_]: _ + _ == 0,
                  }),
                  style: {
                    "--dragOffsetX": `${_}px`,
                  },
                  children:
                    _(_) &&
                    (0, _.jsx)(_, {
                      eStoreDiscoveryQueueType: _,
                      storePageFilter: _,
                      rgAppIDs: _,
                      index: _ + _,
                      bShowMinimizedDisplay: _,
                      selectedIndex: _,
                      bPreferDemoStorePage: !!_,
                      mapViewedAppCount: _,
                      fnCloseModal: _,
                      fnLoadNextQueue: () => _(!1),
                      fnAdvance: _,
                      bSkipAppRequestPending: _ != 0,
                      showAOAutoPlayWarning: !!_,
                    }),
                },
                _ + _,
              ),
            ),
          }),
          (0, _.jsx)(_, {
            className: _(!_ && `x7yACsfXkig-`),
            showPriorAsActive: !0,
            count: _,
            selectedIndex: _ - _,
          }),
        ],
      }),
    }),
  });
}
function _(_, _) {
  let _ = 0;
  for (let _ = 0; _ < _; _++) _[_] == _ && (_ = _ + 1);
  let _ = 0;
  for (let _ = _; _ < _.length; _++)
    if (_[_] == _) {
      _ = _;
      break;
    } else _ == _.length - 1 && (_ = _.length);
  let _ = _ - _;
  return {
    nQueueStart: _,
    nQueueEnd: _,
    nCount: _,
  };
}
function _(_, _) {
  let _ = _.useRef(null),
    [_, _] = _.useState(0),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(0),
    _ = _.useRef(0);
  return {
    refContainer: _,
    bIsDragging: _,
    nDragOffset: _,
    nDragSelectedOffsetIndex: _,
    handleTouchStart: (_) => {
      (_(!0), (_.current = _.touches[0].clientX), _(0), _(0));
    },
    handleTouchMove: (_) => {
      if (!_) return;
      let _ = _.touches[0].clientX - _.current;
      (_(_), _(_ > 50 ? 1 : _ < -50 ? -1 : 0));
    },
    handleTouchEnd: () => {
      _ &&
        (_(!1),
        _ > 50
          ? _((_) => Math.max(_ - 1, 0))
          : _ < -50 && _((_) => Math.min(_ + 1, _ - 1)),
        _(0),
        _(0));
    },
  };
}
function _(_) {
  let {
      eStoreDiscoveryQueueType: _,
      storePageFilter: _,
      rgAppIDs: _,
      index: _,
      bShowMinimizedDisplay: _,
      selectedIndex: _,
      bPreferDemoStorePage: _,
      mapViewedAppCount: _,
      fnCloseModal: _,
      fnLoadNextQueue: _,
      fnAdvance: _,
      bSkipAppRequestPending: _,
      showAOAutoPlayWarning: _,
    } = _,
    [_, _] = _.useState(!1),
    _ = _(),
    _ = () => {
      _ != _ && _(_ > _);
    },
    _ = _ === _,
    _ = _.useRef(_);
  if (
    (_.useEffect(() => {
      let _ = _.current;
      if (((_.current = _), _ && !_)) {
        _(!0);
        let _ = setTimeout(() => _(!1), 500);
        return () => {
          clearTimeout(_);
        };
      }
    }, [_]),
    _[_] == _)
  ) {
    let _ = 0;
    for (let _ = _ - 1; _ >= 0; _--) _[_] == _ && (_ += 1);
    let _ = 0;
    for (let _ = _ - 1; _ >= 0 && _[_] !== _; _--) _++;
    return (
      _.has(_) || _.set(_, _.Get().GetTotalSkippedAppsForDiscoveryQueue(_, _)),
      (0, _.createElement)(_, {
        ..._,
        key: _,
        selected: _,
        lastCard: _ == _.length - 1,
        fnLoadNextQueue: _,
        fnCloseModal: _,
        summaryCardIndex: _,
        eStoreDiscoveryQueueType: _,
        viewedAppCount: (_.get(_) || 0) + _,
        fnFocused: _,
        fnAdvance: () => _(!0),
        bSkipAppRequestPending: _,
      })
    );
  }
  let _ = _ || _.current || _;
  return (0, _.jsx)(_, {
    appAriaIDs: _,
    eStoreDiscoveryQueueType: _,
    storePageFilter: _,
    selected: _,
    appID: _[_],
    bPreferDemoStorePage: _,
    fnFocused: _,
    elVideo: (0, _.jsx)(_, {
      appID: _[_],
      focused: _,
      showAOAutoPlayWarning: _,
      fnComplete: void 0,
    }),
    elDetails: (0, _.jsx)(_, {
      appID: _[_],
      bShowMinimizedDisplay: _,
      eStoreDiscoveryQueueType: _,
      storePageFilter: _,
      bPreferDemoStorePage: _,
      appAriaIDs: _,
    }),
  });
}
function _(_, _, _) {
  let [_, _] = _.useState([]),
    _ = _(`DiscoveryQueueWizard`);
  return {
    fnGetDiscoveryQueue: async (_) => {
      let { appids: _ } = await _(_, !_, _ && _, _);
      if (_ && !_.length) {
        let { appids: _ } = await _(_, !0, void 0, _);
        _ = _;
      }
      if (!_?.token?.reason) {
        let _ = [...(_ ?? []), ..._, _];
        _(_);
      }
      _(`Loaded new discovery queue apps: `, _);
    },
    rgAppIDs: _,
  };
}
function _(_) {
  let {
      eStoreDiscoveryQueueType: _,
      fnCloseModal: _,
      summaryCardIndex: _,
      lastCard: _,
      selected: _,
      fnLoadNextQueue: _,
      storePageFilter: _,
      fnDisplaySummaryReward: _,
      viewedAppCount: _,
      fnFocused: _,
      fnAdvance: _,
      bSkipAppRequestPending: _,
    } = _,
    [_, _] = _.useState(!1),
    _ = _(),
    _ = _(2, _.LANGUAGE, !1),
    [_, _] = _.useState(0),
    [_, _] = _.useState(0),
    { data: _ } = _();
  _.useEffect(() => {
    _ &&
      !_ &&
      _ &&
      _.Get()
        .HintLoad()
        .then(() => {
          _.Get()
            .LoadSkippedApps(_, _)
            .then((_) => {
              (_(_.reduce((_, _) => (_.has(_) ? _ + 1 : _), 0)),
                _(
                  _.reduce(
                    (_, _) => (_.Get().BIsGameIgnored(_) ? _ + 1 : _),
                    0,
                  ),
                ),
                _(!0));
            });
        });
  }, [_, _, _, _, _]);
  let [_, _] = _.useState(!1),
    _ = _(_, _),
    _ = _(`DiscoveryQueueSummary`),
    _ = async () => {
      _ ? _ || (_(!0), await _(), _?.token?.reason || _(!1)) : _();
    };
  return (0, _.jsxs)(_, {
    selected: _,
    fnFocused: _,
    fnOnContinue: _,
    fnCloseModal: _,
    bLoaded: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#DiscoveryQueue_SummaryTitle`),
          }),
          !_ &&
            _ &&
            _.data?.definition &&
            (0, _.jsx)(_, {
              bSkipAppRequestPending: _,
              summaryCardIdx: _,
            }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#DiscoveryQueue_YourStats`),
          }),
          (0, _.jsxs)(_, {
            "flow-children": `row`,
            className: _,
            children: [
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(`#DiscoveryQueue_ViewedCaps`),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(_),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(`#DiscoveryQueue_Titles`),
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(`#DiscoveryQueue_WishlistedCaps`),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(_),
                  }),
                  (0, _.jsx)(_, {
                    className: _(_, _),
                    href: _(_.STORE_BASE_URL + `wishlist`),
                    children: _(`#DiscoveryQueue_ViewWishlist`),
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(`#DiscoveryQueue_IgnoredCaps`),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(_),
                  }),
                  (0, _.jsx)(_, {
                    className: _(_, _),
                    href: _(_.STORE_BASE_URL + `account/notinterested`),
                    children: _(`#DiscoveryQueue_ViewIgnored`),
                  }),
                ],
              }),
            ],
          }),
          !_ &&
            (0, _.jsxs)(_, {
              className: `V-tCdhirF0E-`,
              children: [
                (0, _.jsx)(_, {
                  className: _(`BxLuFJsRaUQ-`, `_5spq1pOe-Sg-`),
                  onClick: _,
                  children: _(`#ActionButtonLabelDone`),
                }),
                !_ &&
                  (0, _.jsx)(_, {
                    className: _(
                      _ && `RJg7ZyjyMZk-`,
                      `BxLuFJsRaUQ-`,
                      `VE8INnFzaCw-`,
                      `_5spq1pOe-Sg-`,
                    ),
                    onClick: _,
                    children: _(_ ? `#Loading` : `#Button_Continue`),
                  }),
              ],
            }),
        ],
      }),
      !_ &&
        (0, _.jsx)(_.Fragment, {
          children: !!_ && _(_ + 1),
        }),
    ],
  });
}
function _(_) {
  let {
      children: _,
      selected: _,
      fnOnContinue: _,
      fnCloseModal: _,
      fnFocused: _,
      bLoaded: _,
    } = _,
    _ = _(_.STORE_BASE_URL + `wishlist`),
    _ = _()?.ownerWindow || window,
    _ = () => {
      _.location.href = _(_);
    },
    _ = _.useRef(void 0);
  return (
    _.useEffect(() => {
      _ &&
        _.current &&
        _.current.focus({
          preventScroll: !0,
        });
    }, [_]),
    (0, _.jsx)(_, {
      ref: _,
      "aria-live": `polite`,
      className: _(void 0, _, _ && `vyD3DBFIFUc-`),
      onOptionsActionDescription: _(`#DiscoveryQueue_ViewWishlist`),
      onOptionsButton: _,
      onOKActionDescription: _(`#Button_Continue`),
      onOKButton: () => {
        _();
      },
      onCancelActionDescription: _(`#ActionButtonLabelDone`),
      onCancelButton: () => _ && _(),
      fnScrollIntoViewHandler: () => (_(), !0),
      children: _
        ? _
        : (0, _.jsx)(_, {
            className: void 0,
            msDelayAppear: 200,
            size: `large`,
            position: `center`,
          }),
    })
  );
}
function _() {
  return (0, _.jsx)(_, {
    className: _,
    children: (0, _.jsx)(_, {
      size: `large`,
      position: `center`,
    }),
  });
}
function _(_) {
  let { bSkipAppRequestPending: _, summaryCardIdx: _ } = _;
  return _
    ? (0, _.jsx)(_, {})
    : (0, _.jsx)(_, {
        summaryCardIdx: _,
      });
}
function _(_) {
  let { summaryCardIdx: _ } = _,
    _ = _(2, _.LANGUAGE, !1, _.toString()),
    [_] = _(_?.data?.current_def?.appid, {}),
    _ = _();
  if (!_?.data?.current_def || !_?.GetName().length) return (0, _.jsx)(_, {});
  let _ = _.data.num_items_earned,
    _ = _.data.current_def.num_items_per_def,
    _ = _ - _,
    _ = (_ / _) * 100;
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        nPercent: _,
        size: 70,
        strokeWidth: 12,
      }),
      (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(
              `#DiscoveryQueue_SaleStatus_Title${_ ? `` : `_Complete`}`,
              _(_),
              _.GetName(),
            ),
          }),
          _ > 0 &&
            (0, _.jsx)(`div`, {
              className: `u6sC2PhNZss-`,
              children: _(`#DiscoveryQueue_SaleStatus_Desc`, _(_), _.GetName()),
            }),
          !_ &&
            (0, _.jsx)(`a`, {
              href: _(_.COMMUNITY_BASE_URL + `my/itemcollection`),
              children: _(`#DiscoveryQueue_SaleStatus_Link`),
            }),
        ],
      }),
    ],
  });
}
export { _ as default };
