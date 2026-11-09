const __vite__mapDeps = (
  _,
  _ = __vite__mapDeps,
  _ = _._ ||
    (_._ = [
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
      "./assets/chunk.css",
    ]),
) => _.map((_) => _[_]);
var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { appid: _ } = _,
    { data: _ } = _({
      appid: _,
    }),
    { data: _ } = _({
      appid: _,
    });
  if (!_?.community_icon)
    return (0, _.jsx)(_, {
      width: `100%`,
      height: `100%`,
    });
  let _ = _(_, `community_icon`);
  return (0, _.jsx)(_, {
    width: `100%`,
    height: `100%`,
    src: _,
    alt: _?.name ?? ``,
  });
}
function _(_) {
  let _ = _().AppArtwork;
  return _
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {
        ..._,
      });
}
function _(_) {
  let { appid: _, variant: _ } = _;
  return _ == `icon`
    ? (0, _.jsx)(_, {
        appid: _,
      })
    : _ == `capsule`
      ? (0, _.jsx)(_, {
          _: {
            appid: _,
          },
          bPreferLibrary: !0,
          bPreferAssetWithoutOverride: !0,
          bNoShadow: !0,
        })
      : _ == `header`
        ? (0, _.jsx)(_, {
            _: {
              appid: _,
            },
            bPreferAssetWithoutOverride: !0,
            imageType: `header`,
            bNoShadow: !0,
          })
        : null;
}
var _ = `s5yKVlQqjbQ-`,
  _ = `pLLO-d06swU-`,
  _ = `EQqxstseYOM-`,
  _ = `kOwz1TxZItw-`,
  _ = `EWHsFoWxpxI-`,
  _ = `fHEslSXNXvI-`,
  _ = `niiare5kn6k-`,
  _ = `Ie1L2mhLL20-`,
  _ = `_570S1mNvERY-`,
  _ = `lAD-yzjgCCg-`,
  _ = `Tfcuyo4gYZU-`,
  _ = `sDEuDLeKC9U-`,
  _ = `_42StosQ-KgY-`,
  _ = `lrB9658hIq8-`,
  _ = `Y0RPXoWbo1I-`,
  _ = `q1GVlrZ4VlY-`,
  _ = `O06DeYGId1Y-`,
  _ = `RaAZgO5OqVE-`,
  _ = `_86Myrv02NDg-`,
  _ = `BaP0pYKSPG4-`,
  _ = `blue-8`,
  _ = `plum-10`,
  _ = `amber-10`,
  _ = {
    initial: `4`,
    _: `5`,
  },
  _ = {
    initial: `3`,
    _: `4`,
  };
function _(_) {
  let { achievements: _, sets: _, isDlc: _ = !1 } = _,
    _ = _ ? _ : _,
    _ = _
      ? `#Achievements_Summary_FromDLCAcrossSets`
      : `#Achievements_Summary_FromBaseGameAcrossSets`;
  return (0, _.jsxs)(_, {
    direction: `row`,
    gap: `3`,
    align: `center`,
    children: [
      (0, _.jsx)(_, {
        height: `14px`,
        children: (0, _.jsx)(_, {
          orientation: `vertical`,
          size: `4`,
          color: `greyneutral-8`,
        }),
      }),
      (0, _.jsxs)(_, {
        direction: `row`,
        gap: `1`,
        align: `center`,
        children: [
          (0, _.jsx)(_, {
            size: _,
            contrast: `description`,
            whiteSpace: `nowrap`,
            children: _(
              _.LocalizePlural(_, _(_), _(_)),
              (0, _.jsx)(_, {
                color: _,
              }),
              (0, _.jsx)(_, {
                color: _,
              }),
            ),
          }),
          (0, _.jsx)(_, {
            complete: _,
            isDlc: _,
            showCount: !1,
            size: `20px`,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { appid: _ } = _,
    { targetsteamid: _, viewersteamid: _ } = _(),
    { data: _ } = _(_, _);
  if (!_) return null;
  let _ = _.achievable.total > 0,
    _ = _ ? _.groups_achievable : _.groups,
    { total: _, dlc: _, rare: _ } = _ ? _.achievable : _.achievements,
    { base: _, dlc: _ } = _;
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `3`,
    children: [
      (0, _.jsxs)(_, {
        direction: `column`,
        gap: `2`,
        className: _,
        padding: {
          initial: `3`,
          _: `5`,
        },
        flexGrow: `1`,
        children: [
          (0, _.jsxs)(_, {
            direction: `row`,
            wrap: `wrap`,
            gap: `3`,
            align: `baseline`,
            children: [
              (0, _.jsx)(_, {
                size: _,
                weight: `heavy`,
                contrast: `title`,
                whiteSpace: `nowrap`,
                children: _.LocalizePlural(
                  `#Achievements_Summary_AchievementTotal`,
                  _(_),
                ),
              }),
              _ > 0 &&
                (0, _.jsx)(_, {
                  size: _,
                  color: _,
                  whiteSpace: `nowrap`,
                  children: _.LocalizePlural(
                    `#Achievements_Summary_RareCount`,
                    _(_),
                  ),
                }),
            ],
          }),
          _.has_groups &&
            (0, _.jsx)(_, {
              overflow: `hidden`,
              children: (0, _.jsxs)(_, {
                direction: `row`,
                wrap: `wrap`,
                gap: `3`,
                align: `center`,
                className: `BFtWJSaNM2Q-`,
                children: [
                  (0, _.jsx)(_, {
                    achievements: _ - _,
                    sets: _,
                  }),
                  _ > 0 &&
                    (0, _.jsx)(_, {
                      achievements: _,
                      sets: _,
                      isDlc: !0,
                    }),
                ],
              }),
            }),
        ],
      }),
      _ == _ &&
        _ !== void 0 &&
        !_ &&
        (0, _.jsxs)(_, {
          direction: `row`,
          gap: `3`,
          justify: `start`,
          align: `center`,
          children: [
            (0, _.jsx)(_, {
              contrast: `description`,
              children: _.Localize(`#Achievements_Summary_NotOwned`),
            }),
            (0, _.jsx)(_, {
              display: {
                initial: `contents`,
                _: `none`,
              },
              children: (0, _.jsx)(_, {
                appid: _,
                textLink: !0,
              }),
            }),
          ],
        }),
    ],
  });
}
function _(_, _) {
  let { viewersteamid: _, useOwnPlaytime: _ } = _(),
    _ = _(_, !0),
    _ = _?.(_);
  if (_ && _ !== void 0 && _ === _) return _;
  if (_.isLoading || !_.data || _ === void 0) return;
  let _;
  if (
    ((_ =
      _.data.your_info?.steamid == _
        ? _.data.your_info
        : [
            ...(_.data.in_game ?? []),
            ...(_.data.played_recently ?? []),
            ...(_.data.played_ever ?? []),
            ...(_.data.owns ?? []),
          ].find((_) => _.steamid == _)),
    _)
  )
    return {
      minutesForever: _.minutes_played_forever ?? 0,
      minutesRecent: _.minutes_played ?? 0,
    };
}
function _(_) {
  let { appid: _, targetsteamid: _, viewersteamid: _ } = _(),
    _ = _(_, _),
    { data: _ } = _(_, _),
    _ = _?.minutesRecent ?? 0,
    _ = _?.minutesForever ?? 0;
  if (!_) return null;
  let {
      achievable: _,
      unlocked: _,
      groups_achievable: _,
      groups_completed: _,
    } = _,
    _ = _(_),
    _ = _.dlc > 0,
    _ = _.Localize(
      _
        ? `#Achievements_Playtime_AchievementsTooltip_WithDLC`
        : `#Achievements_Playtime_AchievementsTooltip`,
    ),
    _ = (0, _.jsx)(_, {
      orientation: `vertical`,
      marginX: `1`,
      color: `text-body-note`,
    });
  return (0, _.jsx)(_, {
    overflow: `hidden`,
    children: (0, _.jsxs)(_, {
      direction: `row`,
      wrap: `wrap`,
      ..._,
      className: _,
      children: [
        _ &&
          _.has_groups &&
          (0, _.jsx)(_, {
            toolTipContent: _.Localize(`#Achievements_Playtime_SetsTooltip`),
            usePointerEvents: !0,
            children: (0, _.jsxs)(_, {
              direction: `row`,
              ..._,
              children: [
                _,
                (0, _.jsx)(_, {
                  size: `2`,
                  contrast: `subtitle`,
                  whiteSpace: `nowrap`,
                  children: _.Localize(
                    `#Achievements_Playtime_SetsCompletedCount`,
                    _(_.total),
                    _(_.total),
                  ),
                }),
              ],
            }),
          }),
        _ &&
          (0, _.jsx)(_, {
            toolTipContent: _,
            usePointerEvents: !0,
            children: (0, _.jsxs)(_, {
              direction: `row`,
              ..._,
              children: [
                _,
                (0, _.jsx)(_, {
                  size: `2`,
                  contrast: `subtitle`,
                  whiteSpace: `nowrap`,
                  children: _.Localize(
                    `#Achievements_Playtime_AchievementsUnlockedCount`,
                    _(_.total),
                    _(_.total),
                  ),
                }),
              ],
            }),
          }),
        _ > 0 &&
          (0, _.jsxs)(_, {
            direction: `row`,
            ..._,
            children: [
              _,
              (0, _.jsxs)(_, {
                direction: `row`,
                ..._,
                wrap: `wrap`,
                children: [
                  (0, _.jsxs)(_, {
                    size: `2`,
                    contrast: `subtitle`,
                    whiteSpace: `nowrap`,
                    children: [
                      _.Localize(`#Achievements_Playtime_Total`, _(_)),
                      ` -`,
                    ],
                  }),
                  (0, _.jsx)(_, {
                    size: `2`,
                    contrast: `subtitle`,
                    whiteSpace: `nowrap`,
                    children: _.Localize(`#Achievements_Playtime_Recent`, _(_)),
                  }),
                ],
              }),
            ],
          }),
      ],
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    contrast: `description`,
    size: `3`,
    weight: `heavy`,
    truncate: !0,
    ..._,
  });
}
function _(_) {
  let { size: _ = `normal`, ..._ } = _;
  return (0, _.jsx)(_, {
    contrast: `title`,
    size: _ == `normal` ? `5` : `4`,
    weight: `heavy`,
    truncate: !0,
    lineClamp: 1,
    ..._,
  });
}
function _(_, _) {
  for (let _ of _.groups)
    for (let _ of _.achievements) if (_.internal_key === _) return _;
}
function _(_) {
  let { hideGroupRibbon: _ = !1 } = _,
    { appid: _, targetsteamid: _, viewersteamid: _ } = _(),
    { bForce24HourClock: _ } = _(),
    { data: _ } = _(_),
    { data: _ } = _(_, _),
    { data: _ } = _(_, _),
    { data: _ } = _(_, _ ?? ``),
    _ = _() == `initial`;
  if (!_ || !_ || !_) return null;
  let _ = Object.values(_?.achievements ?? [])
    .filter((_) => _.unlocked)
    .reduce(
      (_, _) => (_ === void 0 || _.unlock_time > _.unlock_time ? _ : _),
      void 0,
    );
  if (_ === void 0) return null;
  let _ = _(_, _.internal_key),
    _ = _?.groupid ?? 0,
    _ = _.groups.find((_) => _._ == _),
    _ = _.groups[_].is_completed,
    _ = _?.achievements?.[_.internal_key]?.unlocked ?? !1,
    _ = !!_?.hidden && !_,
    _ = _.has_groups;
  return _ && _
    ? (0, _.jsx)(_, {
        direction: `column`,
        gap: `2`,
        flexGrow: `1`,
        minWidth: `0`,
        children: (0, _.jsxs)(_, {
          columns: _ ? `minmax(0, 1fr)` : `max-content minmax(0, 1fr)`,
          gap: `2`,
          children: [
            !_ &&
              (0, _.jsx)(_, {
                minWidth: `max-content`,
                children: (0, _.jsx)(_, {
                  theme: `light`,
                  isComplete: !0,
                  isDlc: !!_?.dlcappid,
                  size: `48px`,
                  shine: !0,
                  className: `mus3nxANNXo-`,
                }),
              }),
            (0, _.jsxs)(_, {
              direction: `column`,
              gap: `0`,
              justify: `around`,
              children: [
                (0, _.jsx)(_, {
                  children: _.Localize(
                    _
                      ? `#Achievements_Header_LatestSet`
                      : `#Achievements_Header_LatestCompletedSet`,
                  ),
                }),
                (0, _.jsx)(_, {
                  size: `small`,
                  children: _?.name,
                }),
                _.groups[_].time_completed !== void 0 &&
                  (0, _.jsx)(_, {
                    contrast: `description`,
                    truncate: !0,
                    children: _
                      ? _(_.groups[_].time_completed, _)
                      : _.Localize(
                          `#Achievements_Header_SetCompletedOnDate`,
                          _(_.groups[_].time_completed, _),
                        ),
                  }),
              ],
            }),
          ],
        }),
      })
    : (0, _.jsx)(_, {
        direction: `column`,
        gap: `2`,
        flexGrow: `1`,
        minWidth: `0`,
        children: (0, _.jsxs)(_, {
          columns: `max-content minmax(0, 1fr)`,
          gap: `2`,
          children: [
            (0, _.jsx)(_, {
              minWidth: `max-content`,
              children: (0, _.jsx)(
                _,
                {
                  appid: _,
                  achievement: _,
                  progress: _,
                  unlocked: !0,
                  hidden: _,
                },
                _.api_name,
              ),
            }),
            (0, _.jsxs)(_, {
              direction: `column`,
              gap: `0`,
              justify: `around`,
              children: [
                (0, _.jsx)(_, {
                  children: _.Localize(
                    `#Achievements_Header_LatestAchievement`,
                  ),
                }),
                (0, _.jsx)(_, {
                  size: `small`,
                  children: _ ? _.Localize(`#AchievementSpoilerName`) : _?.name,
                }),
                _
                  ? (0, _.jsx)(_, {
                      contrast: `description`,
                      truncate: !0,
                      children: _.LocalizeReact(
                        `#Achievements_Header_InSet`,
                        (0, _.jsx)(_, {
                          contrast: `subtitle`,
                          children: _?.name,
                        }),
                      ),
                    })
                  : _(_.unlock_time) &&
                    (0, _.jsx)(_, {
                      contrast: `description`,
                      truncate: !0,
                      children: _
                        ? _(_.unlock_time, _)
                        : _.Localize(
                            `#Achievements_Row_UnlockedOnDate`,
                            _(_.unlock_time, _),
                          ),
                    }),
              ],
            }),
          ],
        }),
      });
}
var _ = 3;
function _(_) {
  let { isDlc: _ = !1, children: _ } = _,
    { appid: _, targetsteamid: _ } = _(),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_, _),
    _ = (_?.groups ?? [])
      .filter((_) => !!_.dlcappid == _ && _(_, _) && _(_, _, _).isCompleted)
      .sort(
        (_, _) =>
          (_?.groups[_._]?.time_completed ?? 0) -
          (_?.groups[_._]?.time_completed ?? 0),
      )
      .map((_) => _.name ?? ``),
    _ = (0, _.jsxs)(_, {
      columns: `auto auto`,
      gapX: `1`,
      gapY: `1`,
      alignItems: `center`,
      radius: `sm`,
      paddingX: `3`,
      paddingY: `2`,
      className: _,
      children: [
        (0, _.jsx)(_, {
          gridColumn: `1/-1`,
          children: (0, _.jsx)(_, {
            color: `dull-1`,
            weight: `medium`,
            size: `2`,
            children: _.Localize(`#Achievements_Header_CompletedSetsTitle`),
          }),
        }),
        _.slice(0, _).map((_, _) =>
          (0, _.jsxs)(
            _.Fragment,
            {
              children: [
                (0, _.jsx)(_, {
                  isComplete: !0,
                  isDlc: _,
                  size: `1.5em`,
                }),
                (0, _.jsx)(_, {
                  color: `dull-1`,
                  size: `2`,
                  whiteSpace: `nowrap`,
                  children: _,
                }),
              ],
            },
            _,
          ),
        ),
        _.length > _ &&
          (0, _.jsx)(_, {
            gridColumn: `2`,
            children: (0, _.jsx)(_, {
              color: `dull-1`,
              size: `2`,
              children: _.Localize(
                `#Achievements_Header_CompletedSetsMore`,
                _(_.length - _),
              ),
            }),
          }),
      ],
    });
  return (0, _.jsx)(_, {
    toolTipContent: _.length ? _ : null,
    direction: `top`,
    usePointerEvents: !0,
    children: _,
  });
}
function _(_) {
  let { children: _ } = _,
    { appid: _, targetsteamid: _ } = _(),
    { data: _ } = _(_, _),
    _ = _();
  if (!_?.groups_completed.total)
    return (0, _.jsx)(_.Fragment, {
      children: _,
    });
  let _ = _.groups_completed.total >= _.groups_achievable.total,
    _ = _ == `initial` || _ == `xs`;
  return (0, _.jsx)(_, {
    appid: _,
    steamid: _,
    className: _ ? _ : void 0,
    backgroundClassName: _(_, _ && `gLnTov-GYMM-`),
    noStars: !_,
    children: _,
  });
}
function _(_) {
  let { showUnachievable: _ = !1 } = _,
    { appid: _, targetsteamid: _ } = _(),
    { data: _ } = _(_, _),
    _ = _();
  if (!_) return null;
  let _ = _ == `initial` || _ == `xs`,
    _ = _ ? `32px` : `40px`,
    { total: _ } = _.achievable,
    { total: _, rare: _ } = _.unlocked,
    { percentUnlockedStr: _ } = _(_, _),
    _ = _.unlocked.total > 0,
    _ = _.groups_completed.total >= _.groups_achievable.total,
    _ = _ && _.groups.total > 1,
    _ =
      _.groups_completed.total > 0 &&
      (0, _.jsxs)(_, {
        direction: `row`,
        gap: `2`,
        position: `relative`,
        children: [
          _.groups_completed.base > 0 &&
            (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  complete: _.groups_completed.base,
                  showCount: _.has_groups,
                  size: _,
                  shine: !0,
                  sparkles: !0,
                }),
              }),
            }),
          _.groups_completed.dlc > 0 &&
            (0, _.jsx)(_, {
              isDlc: !0,
              children: (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  complete: _.groups_completed.dlc,
                  isDlc: !0,
                  showCount: !0,
                  size: _,
                  shine: !0,
                  sparkles: !0,
                }),
              }),
            }),
        ],
      }),
    _ = _ && _;
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      padding: {
        initial: `3`,
        _: `4`,
      },
      flexGrow: `1`,
      className: _,
      children: (0, _.jsxs)(_, {
        columns: {
          initial: `1fr`,
          _: `minmax(0, 1fr) minmax(200px, 33%)`,
        },
        rows: {
          initial: `auto`,
          _: `1fr`,
        },
        gap: {
          initial: `4`,
          _: `6`,
        },
        children: [
          (0, _.jsxs)(_, {
            direction: `row`,
            gap: `3`,
            align: `start`,
            flexGrow: `3`,
            flexBasis: `0`,
            gridColumn: _ ? void 0 : `1/-1`,
            alignSelf: `center`,
            children: [
              !_ && _,
              (0, _.jsxs)(_, {
                direction: `column`,
                gap: `2`,
                flexGrow: `1`,
                flexBasis: `0`,
                alignSelf: `baseline`,
                children: [
                  (0, _.jsxs)(_, {
                    direction: `row`,
                    justify: `between`,
                    align: `baseline`,
                    gap: `3`,
                    children: [
                      (0, _.jsxs)(_, {
                        className: _,
                        children: [
                          (0, _.jsx)(_, {
                            contrast: `title`,
                            size: `4`,
                            children: _(
                              _.Localize(
                                `#Achievements_Header_UnlockedCount`,
                                _(_),
                                _(_),
                                _,
                              ),
                              (0, _.jsx)(_, {
                                contrast: `description`,
                              }),
                            ),
                          }),
                          _.has_groups &&
                            (0, _.jsxs)(_, {
                              contrast: `description`,
                              size: `4`,
                              children: [
                                ` `,
                                _.LocalizePlural(
                                  `#Achievements_Header_AcrossSets`,
                                  _(_.groups_achievable.total),
                                ),
                              ],
                            }),
                        ],
                      }),
                      _ > 0 &&
                        !_ &&
                        (0, _.jsx)(_, {
                          size: `4`,
                          color: _,
                          whiteSpace: `nowrap`,
                          children: _.LocalizePlural(
                            `#Achievements_RareCount`,
                            _(_),
                          ),
                        }),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    appid: _,
                    steamid: _,
                    showUnachievable: _,
                    legend: {
                      countContrast: _ ? `body` : void 0,
                    },
                  }),
                ],
              }),
            ],
          }),
          _ &&
            (0, _.jsxs)(_, {
              direction: `row`,
              gap: `3`,
              align: `center`,
              children: [
                _,
                _ &&
                  (0, _.jsx)(_, {
                    alignSelf: `stretch`,
                    direction: `column`,
                    justify: `center`,
                    children: (0, _.jsx)(_, {
                      height: `90%`,
                      children: (0, _.jsx)(_, {
                        orientation: `vertical`,
                        size: `4`,
                        color: `greyneutral-8`,
                      }),
                    }),
                  }),
                (0, _.jsx)(_, {
                  flexGrow: `1`,
                  minWidth: `0`,
                  children: (0, _.jsx)(_, {
                    hideGroupRibbon: !!_,
                  }),
                }),
              ],
            }),
          _ && !_ && (0, _.jsx)(_, {}),
        ],
      }),
    }),
  });
}
function _(_) {
  let { appid: _ } = _,
    { targetsteamid: _ } = _(),
    _ = _(_, _),
    { data: _ } = _(_, _);
  return _?.groups_achievable.total == 0 ||
    (_?.unlocked.total == 0 && _?.minutesForever == 0 && _?.minutesRecent == 0)
    ? (0, _.jsx)(_, {
        appid: _,
      })
    : (0, _.jsx)(_, {});
}
function _(_) {
  let { icons: _, rows: _, columns: _, iconSize: _ = 64 } = _,
    _ = `achievement-icons-${_.useId().replace(/\W/g, ``)}`;
  if (_.length == 0) return null;
  let _ = _ * _,
    _ = _ * _,
    _ = Array.from(
      {
        length: _ * _,
      },
      (_, _) => _[_ % _.length],
    );
  return (0, _.jsx)(`div`, {
    className: _,
    style: {
      "--tile-width": `${_}px`,
    },
    children: (0, _.jsxs)(`svg`, {
      className: _,
      "aria-hidden": `true`,
      children: [
        (0, _.jsx)(`defs`, {
          children: (0, _.jsx)(`pattern`, {
            _: _,
            patternUnits: `userSpaceOnUse`,
            width: _,
            height: _,
            children: _.map((_, _) =>
              (0, _.jsx)(
                `image`,
                {
                  href: _,
                  _: (_ % _) * _,
                  _: Math.floor(_ / _) * _,
                  width: _,
                  height: _,
                },
                _,
              ),
            ),
          }),
        }),
        (0, _.jsx)(`rect`, {
          width: `100%`,
          height: `100%`,
          fill: `url("#${_}")`,
        }),
      ],
    }),
  });
}
function _(_) {
  let {
    icons: _,
    noStars: _ = !1,
    className: _,
    background: _,
    dlcRatio: _,
  } = _;
  return (0, _.jsxs)(_, {
    className: _(_, _),
    background: _,
    children: [
      (0, _.jsx)(_, {
        icons: _,
        rows: 7,
        columns: 10,
      }),
      !_ &&
        (0, _.jsx)(_, {
          dlcRatio: _,
        }),
    ],
  });
}
function _(_) {
  let { dlcRatio: _ = 0 } = _,
    _ = [
      [0.025, 0.8947],
      [0.075, 0.7895],
      [0.125, 0.5789],
      [0.175, 0.9474],
      [0.225, 0.3684],
      [0.275, 0.3158],
      [0.325, 1],
      [0.375, 0.1579],
      [0.425, 0.7368],
      [0.475, 0.002],
      [0.525, 0.4737],
      [0.575, 0.2632],
      [0.625, 0.8421],
      [0.675, 0.4211],
      [0.725, 0.6842],
      [0.775, 0.1053],
      [0.825, 0.0526],
      [0.875, 0.6316],
      [0.925, 0.2105],
      [0.975, 0.5263],
    ];
  return (0, _.jsx)(_, {
    className: _,
    children: _.map((_, _) =>
      (0, _.jsx)(
        _,
        {
          delay: _[0],
          scale: _[1],
          color: _ / _.length < _ ? _ : _,
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let { delay: _, scale: _, color: _ } = _,
    _ = {
      "--delay": `${_}`,
      "--scale": `${_}`,
    };
  return (0, _.jsx)(_, {
    style: _,
    className: _,
    width: `16`,
    height: `16`,
    fill: `var(--color-${_})`,
  });
}
function _(_) {
  let {
      appid: _,
      steamid: _,
      children: _,
      groupid: _,
      className: _,
      backgroundClassName: _,
      ..._
    } = _,
    { data: _ } = _(_),
    { data: _ } = _(_, _),
    _ = _(_, _);
  if (!_ || !_)
    return (0, _.jsx)(_, {
      className: _,
      children: _,
    });
  let _ = _.groups
      .filter((_) => _ === void 0 || _._ == _)
      .filter((_) => _(_, void 0, _).isCompleted)
      .map((_) => _.groups[_._])
      .filter((_) => _ !== void 0),
    _ = new Set(_.map((_) => _.groupid)),
    _ = _.groups.filter((_) => _.has(_._)),
    _ = _.flatMap(
      (_) => _.achievements.map((_) => _.icon_achieved) ?? [],
    ).filter((_) => _ !== void 0),
    _ = _.length > 0 ? _.filter((_) => !!_.dlcappid).length / _.length : 0;
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      _.length > 0 &&
        (0, _.jsx)(_, {
          icons: _,
          dlcRatio: _,
          className: _,
          ..._,
        }),
      _,
    ],
  });
}
function _() {
  let {
    appid: _,
    hasGlobalLeaderboards: _,
    hasUserLeaderboards: _,
    openGlobalLeaderboards: _,
    openUserLeaderboards: _,
    targetsteamid: _,
    profileUrl: _,
  } = _();
  if (!_ && !_) return null;
  if (_ && _) {
    if (_)
      return (0, _.jsx)(_, {
        onClick: _,
        children: _.Localize(`#Achievements_Links_Leaderboards`),
      });
    {
      let _ = `${_}/stats/${_}/?tab=leaderboards`;
      return (0, _.jsx)(_, {
        href: _,
        children: _.Localize(`#Achievements_Links_Leaderboards`),
      });
    }
  }
  if (_) {
    if (_)
      return (0, _.jsx)(_, {
        onClick: _,
        children: _.Localize(`#Achievements_Links_Leaderboards`),
      });
    {
      let _ = `/stats/${_}/leaderboards/`;
      return (0, _.jsx)(_, {
        href: _,
        children: _.Localize(`#Achievements_Links_Leaderboards`),
      });
    }
  }
  return null;
}
var _ = new Set([
  240, 300, 302, 440, 500, 550, 630, 810, 870, 880, 886, 1520, 7470, 17510,
  18500, 18900, 23510, 24240, 24500, 32150, 37800, 47540, 56400, 91700, 94590,
  201830, 214360, 231430,
]);
function _(_) {
  let { appid: _, profileUrl: _ } = _();
  return !_ || !_.has(_)
    ? null
    : (0, _.jsx)(_, {
        href: `${_}/stats/${_}/?tab=stats`,
        children: _.Localize(`#Achievements_Links_Stats`),
      });
}
function _() {
  let _ = _.Localize(`#Achievements_Links_BetaFeedback`);
  return (0, _.jsx)(_, {
    href: `https://steamcommunity.com/groups/SteamClientBeta/discussions/`,
    whiteSpace: `nowrap`,
    children: _,
  });
}
function _(_) {
  let { appid: _, textLink: _ } = _,
    _ = _(),
    { targetsteamid: _, isPanel: _ } = _(),
    _ = _(_, `${_.STORE_BASE_URL}app/${_}/`),
    { data: _ } = _(_, _);
  if (_(_)) return null;
  let _ = _.Localize(`#Achievements_Links_StorePage`);
  return _ && !_
    ? (0, _.jsx)(_, {
        href: _,
        whiteSpace: `nowrap`,
        children: _,
      })
    : (0, _.jsx)(_, {
        href: _,
        children: _,
      });
}
function _(_) {
  let {
      appid: _,
      targetsteamid: _,
      viewersteamid: _,
      headerContent: _,
      headerProps: _,
      headerVariant: _,
      isPanel: _,
      useAppName: _,
    } = _(),
    { bShowStoreLinks: _ = !0 } = _(),
    { data: _ } = _(_),
    _ = _({
      appid: _,
    }),
    { strStoreURL: _ } = _(_?.data),
    _ = _(),
    _ = _?.(_) ?? _.data?.name,
    { data: _ } = _(_, _);
  if (
    (_ !== void 0 &&
      _.achievable.total > 0 &&
      _.unlocked.total == _.achievable.total &&
      _.groups_completed.total,
    !_)
  )
    return null;
  let { groups: _ } = _,
    _ = {
      aspectRatio: `1/1`,
      maxHeight: `30px`,
      minHeight: `16px`,
    };
  _ ||
    (_ = {
      aspectRatio: `2/3`,
      maxHeight: `120px`,
      minHeight: `120px`,
    });
  let _ = {
      aspectRatio: {
        initial: _.aspectRatio,
        _: `1/1`,
        _: `2/3`,
      },
      maxHeight: {
        initial: _.maxHeight,
        _: `30px`,
        _: `300px`,
      },
      minHeight: {
        initial: _.minHeight,
        _: `16px`,
        _: `219px`,
      },
    },
    _ = _ == `compact`,
    _ = `capsule`;
  (_ || _ == `sm` || (_ && (_ == `initial` || _ == `xs`))) && (_ = `icon`);
  let _ = (0, _.jsx)(_, {
      appid: _,
      variant: _,
    }),
    _ =
      _ && _
        ? (0, _.jsx)(`a`, {
            className: _,
            href: _,
            children: _,
          })
        : (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
    _ =
      _ && _
        ? (0, _.jsx)(_, {
            href: _,
            children: _,
          })
        : _,
    _ = _ !== void 0 && _ !== _,
    _ = (0, _.jsxs)(_, {
      gridArea: `title`,
      gap: {
        initial: `1`,
        _: `4`,
      },
      alignSelf: _ ? `center` : `end`,
      align: `start`,
      flexGrow: `1`,
      direction: {
        initial: `column`,
        _: `row`,
      },
      children: [
        (0, _.jsxs)(_, {
          flexGrow: `1`,
          direction: `column`,
          gap: `1`,
          children: [
            _ &&
              _ &&
              (0, _.jsxs)(_, {
                direction: `row`,
                gap: `1`,
                align: `center`,
                className: void 0,
                overflow: `hidden`,
                children: [
                  (0, _.jsx)(_, {
                    steamid: _,
                    size: `X-Small`,
                  }),
                  (0, _.jsx)(_, {
                    className: `_1xigZ9qJ584-`,
                    size: `3`,
                    children: _.LocalizeReact(
                      `#Achievements_Header_FriendsAchievements`,
                      (0, _.jsx)(_, {
                        steamid: _,
                        showStatus: !1,
                      }),
                    ),
                  }),
                ],
              }),
            (0, _.jsx)(_, {
              size: {
                initial: `5`,
                _: `7`,
              },
              weight: `heavy`,
              contrast: `title`,
              children: _,
            }),
            (0, _.jsx)(_, {
              gap: `1`,
              align: `start`,
            }),
          ],
        }),
        (0, _.jsxs)(_, {
          gap: `4`,
          direction: `row`,
          align: `center`,
          children: [
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {
              display: {
                initial: `none`,
                _: `contents`,
              },
              children: (0, _.jsx)(_, {
                appid: _,
              }),
            }),
          ],
        }),
      ],
    });
  return _ && _
    ? (0, _.jsxs)(_, {
        direction: `column`,
        gap: `2`,
        position: `relative`,
        style: {
          isolation: `isolate`,
        },
        children: [
          _,
          (0, _.jsx)(_, {
            gap: `4`,
            columns: `1fr`,
            areas: `"title"`,
            padding: `4`,
            ..._,
            className: _(_, _?.className),
            children: _,
          }),
        ],
      })
    : _
      ? (0, _.jsxs)(_, {
          direction: `column`,
          gap: `2`,
          position: `relative`,
          style: {
            isolation: `isolate`,
          },
          children: [
            _,
            (0, _.jsxs)(_, {
              gap: `4`,
              columns: `max-content 1fr`,
              areas: `"capsule title"`,
              padding: `4`,
              ..._,
              className: _(_, _?.className),
              children: [
                (0, _.jsx)(_, {
                  gridArea: `capsule`,
                  height: `32px`,
                  aspectRatio: `1/1`,
                  alignSelf: `center`,
                  children: _,
                }),
                _,
              ],
            }),
          ],
        })
      : (0, _.jsxs)(_, {
          direction: `column`,
          gap: `2`,
          position: `relative`,
          ..._,
          style: {
            isolation: `isolate`,
          },
          children: [
            _,
            (0, _.jsxs)(_, {
              gap: `4`,
              columns: `max-content 1fr`,
              position: `relative`,
              areas: {
                initial: `"capsule title" "header header"`,
                _: `"capsule title" "header header"`,
                _: `"capsule title" "capsule header"`,
              },
              children: [
                (0, _.jsx)(_, {
                  gridArea: `capsule`,
                  height: `100%`,
                  ..._,
                  marginLeft: {
                    initial: `2`,
                    _: `2`,
                    _: `0`,
                  },
                  children: _,
                }),
                _,
                (0, _.jsx)(_, {
                  gridArea: `header`,
                  children: (0, _.jsx)(_, {
                    appid: _,
                    groups: _,
                  }),
                }),
              ],
            }),
          ],
        });
}
var _ = `greyneutral-11`;
function _(_) {
  let { appid: _, steamid: _, groupid: _, className: _, children: _ } = _,
    { data: _ } = _(_, _),
    _ = _();
  if (!_?.groups[_]?.is_completed)
    return (0, _.jsx)(_, {
      className: _,
      children: _,
    });
  let _ = _ == `initial` || _ == `xs`;
  return (0, _.jsx)(_, {
    appid: _,
    steamid: _,
    groupid: _,
    className: _,
    backgroundClassName: _(_, _ && `H2efSREQ3Qs-`),
    noStars: !0,
    children: _,
  });
}
function _(_) {
  let { groupid: _, className: _, children: _ } = _,
    { appid: _, targetsteamid: _ } = _();
  return _ === void 0
    ? (0, _.jsx)(_, {
        className: _,
        children: _,
      })
    : (0, _.jsx)(_, {
        appid: _,
        steamid: _,
        groupid: _,
        className: _,
        children: _,
      });
}
function _(_) {
  let { group: _, groupSummary: _, collapsed: _, setCollapsed: _ } = _,
    {
      _: _,
      name: _,
      dlcappid: _,
      ispublic: _,
      developeronly: _,
      archived: _,
    } = _,
    { appid: _, targetsteamid: _, viewersteamid: _ } = _(),
    _ = _.achievements.unlocked,
    _ = _.achievements.total,
    { percentUnlocked: _, percentUnlockedStr: _ } = _(_, _),
    _ = !!_,
    _ = _.isCompleted,
    { data: _ } = _(
      _
        ? {
            appid: _,
          }
        : void 0,
    ),
    _ = !_ || (_ && _.success != 1) ? _ : _,
    _ = _.isAchievable,
    _ = _ || _.isCompleted,
    _ = _(
      _,
      !_ && !_ && `ceBxPHeFdnI-`,
      _ && `gll5nH8jh6w-`,
      !_ && `MP7hJEX2K4E-`,
      !_ && `cq6OdkuQav0-`,
      _ && `VG8bqILshb0-`,
    ),
    _ = (0, _.jsxs)(_.Fragment, {
      children: [
        _ &&
          (0, _.jsxs)(_, {
            contrast: `description`,
            children: [_.Localize(`#Achievements_Set_DLCLabel`), ` `],
          }),
        _,
      ],
    }),
    _ = (0, _.useRef)(null),
    _;
  return (
    _ &&
      (_ = {
        onOptionsButton: () => _.current?.click(),
        actionDescriptionMap: {
          [_.OPTIONS]: _.Localize(`#Achievements_Links_StorePage`),
        },
      }),
    (0, _.jsx)(_, {
      groupid: _,
      className: _,
      children: (0, _.jsxs)(_, {
        direction: `row`,
        padding: `2`,
        gap: `2`,
        justify: `between`,
        align: `center`,
        className: _,
        navProps: _,
        onClick: (_) => {
          _.target.closest(`a`) || _(!_);
        },
        children: [
          _ &&
            (0, _.jsx)(_, {
              isDlc: _,
              isComplete: _.isCompleted,
              variant: `flat`,
            }),
          _ &&
            (0, _.jsx)(_, {
              style: {
                maxHeight: `215px`,
                maxWidth: `410px`,
                height: `62px`,
                aspectRatio: `92/43`,
              },
              children: (0, _.jsx)(_, {
                appid: _,
                ref: _,
                children: (0, _.jsx)(_, {
                  appid: _,
                  parentAppID: _,
                  variant: `header`,
                }),
              }),
            }),
          (0, _.jsxs)(_, {
            direction: `column`,
            justify: `between`,
            gap: `1`,
            flexGrow: `1`,
            children: [
              (0, _.jsxs)(_, {
                direction: `row`,
                justify: `between`,
                flexGrow: `1`,
                align: `center`,
                children: [
                  _
                    ? (0, _.jsxs)(_, {
                        direction: `row`,
                        gap: `1`,
                        align: `center`,
                        children: [
                          (0, _.jsx)(_, {
                            contrast: `subtitle`,
                            weight: `medium`,
                            size: `4`,
                            children: _,
                          }),
                          (0, _.jsx)(_, {}),
                        ],
                      })
                    : (0, _.jsx)(_, {
                        contrast: `title`,
                        weight: `medium`,
                        size: `4`,
                        children: _,
                      }),
                  !_ &&
                    (0, _.jsxs)(_, {
                      direction: `row`,
                      gap: `1`,
                      align: `center`,
                      style: {
                        color: `var(--color-amber-11)`,
                      },
                      children: [
                        (0, _.jsx)(_, {
                          className: `ReLwkldCr8M-`,
                          children: (0, _.jsx)(_, {
                            color: `currentColor`,
                          }),
                        }),
                        (0, _.jsx)(_, {
                          color: `amber-11`,
                          children: _.Localize(
                            _
                              ? `#Achievements_Set_DeveloperOnly`
                              : `#Achievements_Set_Unreleased`,
                          ),
                        }),
                      ],
                    }),
                ],
              }),
              _
                ? (0, _.jsxs)(_, {
                    direction: {
                      initial: `column`,
                      _: `row`,
                    },
                    gap: {
                      initial: `1`,
                      _: `2`,
                    },
                    justify: _ ? `start` : `end`,
                    align: {
                      initial: `stretch`,
                      _: `center`,
                    },
                    flexGrow: `1`,
                    children: [
                      (0, _.jsxs)(_, {
                        direction: `row`,
                        gap: `1`,
                        align: `center`,
                        children: [
                          _ != _ &&
                            _ !== void 0 &&
                            (0, _.jsx)(_, {
                              steamid: _,
                            }),
                          (0, _.jsx)(_, {
                            contrast: _ ? `subtitle` : `title`,
                            whiteSpace: `nowrap`,
                            children: _.Localize(
                              `#Achievements_Set_UnlockedCount`,
                              _(_),
                              _(_),
                              _,
                            ),
                          }),
                        ],
                      }),
                      !_ &&
                        (0, _.jsx)(_, {
                          className: _(`M1JxpzEQvJg-`, _ && `_41OACOFeyeU-`),
                          percent: _ * 100,
                        }),
                    ],
                  })
                : _ &&
                  (0, _.jsx)(_, {
                    children: (0, _.jsx)(_, {
                      appid: _,
                      underline: `hover`,
                      contrast: `description`,
                      children: _.Localize(
                        `#Achievements_Set_AvailableInStore`,
                      ),
                    }),
                  }),
            ],
          }),
          (0, _.jsx)(_, {
            direction: `column`,
            justify: `around`,
            padding: `1`,
            children: (0, _.jsx)(_, {
              className: _,
              children: (0, _.jsx)(_, {
                direction: _ ? `left` : `down`,
              }),
            }),
          }),
        ],
      }),
    })
  );
}
function _(_) {
  let { fill: _ } = _;
  return (0, _.jsx)(_, {
    direction: `top`,
    toolTipContent: _.Localize(`#Achievements_Archived_Tooltip`),
    style: {
      height: `1lh`,
    },
    children: (0, _.jsxs)(_, {
      color: _,
      weight: `medium`,
      children: [
        (0, _.jsx)(_, {
          align: `center`,
          style: {
            verticalAlign: `middle`,
          },
          children: (0, _.jsx)(_, {
            display: `inline-flex`,
            height: `20px`,
            width: `20px`,
          }),
        }),
        ` `,
        _.Localize(`#Achievements_Archived_Label`),
      ],
    }),
  });
}
function _(_) {
  let _ = _({
    appid: _,
  });
  return _(_?.data).strStoreURL;
}
function _(_) {
  let { appid: _, ..._ } = _,
    _ = _(_);
  return (0, _.jsx)(_, {
    href: _,
    ..._,
  });
}
function _(_) {
  let { appid: _, ref: _, children: _ } = _,
    _ = _(_);
  return (0, _.jsx)(`a`, {
    ref: _,
    href: _,
    className: _,
    children: _,
  });
}
function _(_, _, _) {
  let { achievements: _ } = _,
    _ = new Set(
      _
        ? Object.values(_.achievements)
            .filter((_) => _.unlocked)
            .map((_) => _.internal_key)
        : [],
    );
  return _.reduce(
    (_, _) => (
      _.has(_.internal_key)
        ? _.unlocked.push(_)
        : (_(_, _, _) || _(_, void 0, _)) &&
          (_.hidden ? _.hidden.push(_) : _.locked.push(_)),
      _
    ),
    {
      unlocked: [],
      locked: [],
      hidden: [],
    },
  );
}
function _(_) {
  let {
      groups: _,
      userAchievements: _,
      compareAchievements: _,
      globalPercentages: _,
      ownsAnything: _,
      typeFilter: _,
      filter: _,
      isCollapsed: _,
      revealedHiddenGroups: _,
    } = _,
    _ = [],
    _ = _.length > 1 || _[0]?._ !== 0;
  for (let _ of _) {
    if (_.groupid !== void 0 && _.groupid != _._) continue;
    let _ = _._,
      _ = _(_, _, _),
      _ = _(_, _);
    if (
      (_.push({
        key: `h${_}`,
        type: `header`,
        group: _,
        groupSummary: _,
        collapsed: _,
        showHeader: _,
      }),
      !_)
    ) {
      let _ = _(_, _, _),
        _ = _ && (_.state === void 0 || _.state == `unlocked`),
        _ = _.state === void 0 || _.state == `locked`,
        _ = _ && _.hidden.length > 0,
        _ = [];
      (_ &&
        _.push({
          section: `unlocked`,
          achievements: _.unlocked,
          sort: `date`,
          title: _.Localize(
            `#Achievements_Table_UnlockedTitle`,
            _(_.unlocked.length),
          ),
          dividerWhenEmpty: _ || _,
        }),
        _ &&
          _.push({
            section: `locked`,
            achievements: _.locked,
            sort: `globalrate`,
            title: _.Localize(
              _
                ? `#Achievements_Table_LockedTitle`
                : `#Achievements_Table_AllTitle`,
              _(_.locked.length),
            ),
            dividerWhenEmpty: _,
          }),
        _ &&
          _.push({
            section: `hidden`,
            achievements: _.hidden,
            sort: `globalrate`,
            title: _.Localize(
              `#Achievements_Table_HiddenTitle`,
              _(_.hidden.length),
            ),
            dividerWhenEmpty: !1,
          }));
      let _ = !0,
        _ = () => {
          let _ = {
            groupid: _,
            first: _,
          };
          return ((_ = !1), _);
        },
        _ = `none`;
      _.forEach(
        (
          {
            section: _,
            achievements: _,
            sort: _,
            title: _,
            dividerWhenEmpty: _,
          },
          _,
        ) => {
          if (_ == `hidden` && !_.has(_)) {
            (_.push({
              key: `s${_}:${_}`,
              type: `section`,
              placement: _(),
              title: _.Localize(`#Achievements_Hidden_Heading`),
              dividerWhenEmpty: !1,
              isEmpty: !1,
              gapAbove: _,
            }),
              _.push({
                key: `hs${_}`,
                type: `hiddensummary`,
                placement: _(),
                groupid: _,
                count: _.length,
              }),
              (_ = `table`));
            return;
          }
          let _ = _(_.filter(_), _, _, _),
            _ = _.length == 0;
          (_.push({
            key: `s${_}:${_}`,
            type: `section`,
            placement: _(),
            title: _,
            dividerWhenEmpty: _,
            isEmpty: _,
            gapAbove: _,
          }),
            (_ = _ && _ ? `divider` : `table`),
            _.forEach((_, _) =>
              _.push({
                key: `r${_}:${_.internal_key}`,
                type: `row`,
                placement: _(),
                achievement: _,
                tableindex: _,
                isLast: _ == _.length - 1 && _ == _.length - 1,
                groupArchived: _.archived,
              }),
            ),
            _.length > _.length &&
              _.push({
                key: `f${_}:${_}`,
                type: `filtered`,
                placement: _(),
                count: _.length - _.length,
              }));
        },
      );
    }
    _.push({
      key: `e${_}`,
      type: `footer`,
      groupid: _,
      collapsed: _,
    });
  }
  return _;
}
function _() {
  let { isPanel: _, headerVariant: _ } = _();
  if (!(_ && _ != `compact`)) return `greyneutral-4`;
}
function _(_) {
  let { placement: _, children: _, ..._ } = _,
    _ = _(),
    _ = {
      initial: `2`,
      _: `4`,
    };
  return (
    _ || (_ = `2`),
    (0, _.jsx)(_, {
      background: _,
      paddingX: _,
      paddingTop: _?.first ? `4` : void 0,
      ..._,
      children: _,
    })
  );
}
function _(_) {
  let { children: _ } = _,
    { isPinned: _ } = _(),
    _ = _();
  return (0, _.jsx)(_, {
    background: _,
    className: _ ? _ : void 0,
    children: _,
  });
}
function _(_) {
  let { typeFilter: _, compareTo: _ } = _,
    {
      appid: _,
      targetsteamid: _,
      viewersteamid: _,
      isPanel: _,
      filter: _,
      showGlobalRate: _,
      expandDlc: _,
    } = _(),
    _ = _(),
    { data: _ } = _(_),
    { data: _, isPending: _ } = _(_, _ ?? ``),
    { data: _ } = _(_, _ ?? ``),
    { data: _ } = _(_),
    { data: _ } = _(_, _),
    _ = _(_, _ ?? []),
    [_, _] = (0, _.useState)(new Map()),
    [_, _] = (0, _.useState)(new Set()),
    _ = (0, _.useCallback)((_, _) => _((_) => new Map(_).set(_, _)), []),
    _ = (0, _.useCallback)((_) => _((_) => new Set(_).add(_)), []),
    _ = (0, _.useMemo)(() => {
      let _ = _.toLocaleLowerCase();
      return (_) =>
        (_?.name ?? ``).toLocaleLowerCase().includes(_) ||
        (_?.description ?? ``).toLocaleLowerCase().includes(_);
    }, [_]),
    _ = _(_),
    _ = (0, _.useMemo)(
      () =>
        _
          ? _({
              groups: _.groups.filter((_) => _(_, _, _)),
              userAchievements: _,
              compareAchievements: _,
              globalPercentages: _,
              ownsAnything: _,
              typeFilter: _,
              filter: _,
              isCollapsed: (_, _) => {
                let _ = _.get(_._);
                return _ === void 0
                  ? _ === void 0
                    ? _ &&
                      _.ispublic &&
                      !_.isAchievable &&
                      !_.isCompleted &&
                      _ !== void 0
                    : !_.dlcappid || (_ !== `all` && _ !== _.dlcappid)
                  : _;
              },
              revealedHiddenGroups: _,
            })
          : [],
      [_, _, _, _, _, _, _, _, _, _, _],
    ),
    [_, _] = (0, _.useState)(56),
    _ = (0, _.useRef)(null);
  (0, _.useEffect)(() => {
    if (!_.current) return;
    let _ = parseInt(
      window.getComputedStyle(_.current).getPropertyValue(`--icon-size`),
    );
    isNaN(_) || _(_ + (_ ? 25 : 2));
  }, [_]);
  let _ = (0, _.useRef)(null),
    _ = (0, _.useCallback)(() => {
      let _ = _.current?.Node();
      _?.BFocusWithin() && _.ForceMeasureFocusRing();
    }, []),
    _ = _(_),
    _ = _(_, _),
    _ = _ == _ && _ !== void 0,
    _ = (0, _.useCallback)(
      (_) => {
        let _ = _[_];
        switch (_.type) {
          case `header`:
            return (0, _.jsx)(_, {
              children:
                _.showHeader &&
                (0, _.jsx)(_, {
                  group: _.group,
                  groupSummary: _.groupSummary,
                  collapsed: _.collapsed,
                  setCollapsed: (_) => _(_.group._, _),
                }),
            });
          case `section`:
            return (0, _.jsx)(_, {
              placement: _.placement,
              className: _(
                _.gapAbove == `table` && `yIcVVz0KvxU-`,
                _.gapAbove == `divider` && `_26On4soke-0-`,
              ),
              children: (0, _.jsx)(_, {
                title: _.title,
                dividerWhenEmpty: _.dividerWhenEmpty,
                isEmpty: _.isEmpty,
              }),
            });
          case `row`:
            return (0, _.jsx)(_, {
              placement: _.placement,
              children: (0, _.jsx)(_, {
                appid: _,
                achievement: _.achievement,
                progress: _?.achievements[_.achievement.internal_key],
                unlockedForSelf:
                  _?.achievements?.[_.achievement.internal_key]?.unlocked ?? !1,
                globalUnlockPercentage:
                  _?.percentages[_.achievement.internal_key] ?? void 0,
                showProgress: _,
                compareTo: _,
                compareProgress: _,
                tableindex: _.tableindex,
                isLast: _.isLast,
                groupArchived: _.groupArchived,
              }),
            });
          case `hiddensummary`:
            return (0, _.jsx)(_, {
              placement: _.placement,
              className: _,
              children: (0, _.jsx)(_, {
                count: _.count,
                onReveal: () => _(_.groupid),
              }),
            });
          case `filtered`:
            return (0, _.jsx)(_, {
              placement: _.placement,
              children: (0, _.jsx)(_, {
                count: _.count,
              }),
            });
          case `footer`: {
            let _ = `5`;
            return (
              _.collapsed && (_ = `3`),
              (0, _.jsx)(_, {
                paddingBottom: _,
                children:
                  !_.collapsed &&
                  (0, _.jsx)(_, {
                    paddingBottom: {
                      initial: `2`,
                      _: `4`,
                    },
                  }),
              })
            );
          }
        }
      },
      [_, _, _, _, _, _, _, _, _, _],
    ),
    _ = (0, _.useCallback)((_) => _[_].key, [_]);
  return !_ || (_ !== void 0 && _) || _.length == 0
    ? null
    : (0, _.jsx)(_, {
        navKey: `AchievementsList`,
        navRef: _,
        ref: _,
        className: _(_, _ && `J1gNXqOLM6A-`),
        hintVirtualizeType: _ ? `element` : `window`,
        bNativeScrollIntoView: !0,
        bBrowserScrollAnchoring: !0,
        nRows: _.length,
        nItemHeight: _,
        nRowGap: 0,
        overscan: 10,
        renderItem: _,
        getItemKey: _,
        bDynamic: !0,
        measureElement: (_, _) => {
          if (_ && _.contentRect.height > 0) return _.contentRect.height;
          let _ = _?.getBoundingClientRect();
          return _ && _.height > 0 ? _.height : _;
        },
      });
}
function _(_) {
  let { typeFilter: _, setTypeFilter: _ } = _,
    _ = (0, _.useCallback)(
      (_) => {
        _((_) => ({
          ..._,
          state: _,
        }));
      },
      [_],
    ),
    _ = _({
      onSelectionChange: _,
      selectedValue: _.state,
      rgOptions: [void 0, `unlocked`, `locked`],
    }),
    _ = (0, _.useCallback)(
      (_) =>
        _ === void 0
          ? _.Localize(`#Achievements_Filter_AllAchievements`)
          : _ == `unlocked`
            ? _.Localize(`#Achievements_Filter_UnlockedAchievements`)
            : _ == `locked`
              ? _.Localize(`#Achievements_Filter_LockedAchievements`)
              : ``,
      [],
    );
  return (0, _.jsxs)(_.Root, {
    state: _,
    clearable: !0,
    children: [
      (0, _.jsx)(_.Trigger, {
        render: (0, _.jsx)(_, {
          variant: `bare`,
          hasValue: !0,
          borderColor: _.state ? `blue-9` : void 0,
          cursor: `pointer`,
          tabIndex: 0,
          afterContent: (0, _.jsx)(_, {}),
        }),
        children: (0, _.jsx)(_, {
          weight: `regular`,
          truncate: !0,
          contrast: `title`,
          children: _(_.state),
        }),
      }),
      (0, _.jsxs)(_.Options, {
        children: [
          (0, _.jsx)(
            _.Option,
            {
              value: void 0,
              children: _(void 0),
            },
            void 0,
          ),
          (0, _.jsx)(_, {
            size: `4`,
          }),
          (0, _.jsx)(
            _.Option,
            {
              value: `unlocked`,
              children: _(`unlocked`),
            },
            `unlocked`,
          ),
          (0, _.jsx)(
            _.Option,
            {
              value: `locked`,
              children: _(`locked`),
            },
            `locked`,
          ),
        ],
      }),
    ],
  });
}
function _(_) {
  let { groups: _, typeFilter: _, setTypeFilter: _ } = _,
    _ = (0, _.useCallback)(
      (_) => {
        _((_) => ({
          ..._,
          groupid: _,
        }));
      },
      [_],
    ),
    _ = (0, _.useMemo)(() => _.reduce((_, _) => ((_[_._] = _), _), {}), [_]),
    _ = _({
      onSelectionChange: _,
      selectedValue: _.groupid,
      rgOptions: [void 0, ..._.map((_) => _._)],
    }),
    _ = (0, _.useCallback)(
      (_) => {
        if (_ === void 0)
          return _.Localize(`#Achievements_Filter_AllSets`, _(_.length));
        let _ = _[_];
        return _.dlcappid
          ? (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  color: `purple-11`,
                  weight: `heavy`,
                  children: _.Localize(`#Achievements_Filter_DLCTag`),
                }),
                ` `,
                _.name ?? ``,
              ],
            })
          : (_.name ?? ``);
      },
      [_, _],
    );
  return (0, _.jsxs)(_.Root, {
    state: _,
    clearable: !0,
    children: [
      (0, _.jsx)(_.Trigger, {
        render: (0, _.jsx)(_, {
          variant: `bare`,
          hasValue: !0,
          borderColor: _.groupid === void 0 ? void 0 : `blue-9`,
          cursor: `pointer`,
          tabIndex: 0,
          afterContent: (0, _.jsx)(_, {}),
        }),
        children: (0, _.jsx)(_, {
          weight: `regular`,
          truncate: !0,
          contrast: `title`,
          children: _(_.groupid),
        }),
      }),
      (0, _.jsxs)(_.Options, {
        children: [
          (0, _.jsx)(
            _.Option,
            {
              value: void 0,
              children: _(void 0),
            },
            void 0,
          ),
          (0, _.jsx)(_, {
            size: `4`,
          }),
          _.map((_) =>
            (0, _.jsx)(
              _.Option,
              {
                value: _._,
                children: _(_._),
              },
              _._,
            ),
          ),
        ],
      }),
    ],
  });
}
function _(_) {
  let { typeFilter: _, setTypeFilter: _, ..._ } = _,
    {
      appid: _,
      filter: _,
      setFilter: _,
      showGlobalRate: _,
      setShowGlobalRate: _,
      targetsteamid: _,
    } = _(),
    { data: _ } = _(_),
    { data: _ } = _(_, _),
    { data: _ } = _(_, _ ?? ``),
    _ = _(_),
    _ = _();
  if (!_) return null;
  let _ = _(_),
    _ = _.groups.filter((_) => _(_, _)),
    _ = _?.has_groups == 1,
    _ = !_.isError || _.data !== void 0;
  return (0, _.jsxs)(_, {
    direction: `row`,
    wrap: {
      initial: `wrap`,
      _: `nowrap`,
    },
    gap: `4`,
    justify: `between`,
    align: `center`,
    children: [
      (0, _.jsxs)(_, {
        direction: `row`,
        gap: `4`,
        align: `center`,
        wrap: `nowrap`,
        minWidth: `max-content`,
        flexGrow: `1`,
        flexBasis: {
          initial: `100%`,
          _: `auto`,
        },
        paddingLeft: {
          initial: `2`,
          _: `0`,
        },
        children: [
          _ &&
            (0, _.jsxs)(_, {
              direction: `row`,
              gap: `2`,
              align: `center`,
              wrap: `nowrap`,
              children: [
                (0, _.jsx)(_, {
                  contrast: `title`,
                  children: _.Localize(`#Achievements_Toolbar_ShowGlobalStats`),
                }),
                (0, _.jsx)(_, {
                  value: _,
                  onChange: (_) => _(_),
                }),
              ],
            }),
          _.available &&
            (0, _.jsxs)(_, {
              direction: `row`,
              gap: `2`,
              align: `center`,
              wrap: `nowrap`,
              children: [
                (0, _.jsx)(_, {
                  contrast: `title`,
                  children: _.Localize(`#Achievements_Toolbar_PinAchievements`),
                }),
                (0, _.jsx)(_, {
                  value: _.showPinning,
                  onChange: (_) => _.setShowPinning(_),
                }),
              ],
            }),
        ],
      }),
      (0, _.jsxs)(_, {
        direction: `row`,
        gap: `4`,
        align: `end`,
        children: [
          _ &&
            (0, _.jsx)(_, {
              minWidth: `15%`,
              children: (0, _.jsx)(_, {
                typeFilter: _,
                setTypeFilter: _,
              }),
            }),
          _ &&
            (0, _.jsx)(_, {
              minWidth: `15%`,
              children: (0, _.jsx)(_, {
                groups: _,
                typeFilter: _,
                setTypeFilter: _,
              }),
            }),
        ],
      }),
      (0, _.jsx)(_, {
        minWidth: {
          initial: `100px`,
          _: `15%`,
        },
        flexGrow: {
          initial: `1`,
          _: `0`,
        },
        children: (0, _.jsx)(_, {
          variant: `inset`,
          placeholder: _.Localize(`#Achievements_Toolbar_SearchPlaceholder`),
          afterContent: (0, _.jsx)(_, {}),
          value: _,
          onTextChange: _,
          clearable: !0,
        }),
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    ..._(_),
  });
}
var _ = 3,
  _ = {
    initial: `center`,
    _: `start`,
  };
function _(_) {
  return `${Math.min(Math.max(_.unContentWidth, _.unTargetWidth), 350)}px`;
}
function _(_) {
  let { steamid: _, size: _ = `Small` } = _;
  return (0, _.jsxs)(_, {
    direction: `row`,
    gap: `1`,
    align: `center`,
    minWidth: `0`,
    children: [
      (0, _.jsx)(_, {
        steamid: _,
        size: _,
      }),
      (0, _.jsx)(_, {
        steamid: _,
        showStatus: !1,
      }),
    ],
  });
}
function _(_) {
  let { friendids: _ } = _;
  return _ === void 0 || _.length == 0
    ? null
    : _.length == 1
      ? (0, _.jsx)(_, {
          direction: `row`,
          justify: _,
          minWidth: `0`,
          children: (0, _.jsx)(_, {
            steamid: _[0],
            size: `X-Small`,
          }),
        })
      : (0, _.jsxs)(_, {
          direction: `row`,
          gap: `1`,
          align: `center`,
          justify: _,
          children: [
            (0, _.jsx)(_, {
              direction: `row`,
              align: `center`,
              children: _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    steamid: _,
                  },
                  _,
                ),
              ),
            }),
            _.LocalizePlural(
              `#Achievements_Compare_SelectedFriendCount`,
              _(_.length),
            ),
          ],
        });
}
function _(_) {
  let {
      rgOptions: _,
      selectedValue: _,
      onSelectionChange: _,
      placeholder: _,
    } = _,
    _ = _({
      onSelectionChange: _,
      selectedValue: _,
      rgOptions: _,
      maxSelected: _,
    });
  return (0, _.jsxs)(_.Root, {
    state: _,
    clearable: !1,
    popoverWidth: _,
    children: [
      (0, _.jsx)(_.Trigger, {
        children:
          _.length > 0
            ? (0, _.jsx)(_.Value, {
                children: (0, _.jsx)(_, {
                  friendids: _,
                }),
              })
            : (0, _.jsx)(_.Placeholder, {
                children: (0, _.jsx)(_, {
                  contrast: `title`,
                  truncate: !0,
                  align: _,
                  children: _,
                }),
              }),
      }),
      (0, _.jsx)(_.Options, {
        children: _.rgOptions.map((_) =>
          (0, _.jsx)(
            _.Option,
            {
              value: _,
              children: (0, _.jsx)(_, {
                steamid: _,
              }),
            },
            _,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let {
      rgOptions: _,
      selectedValue: _,
      onSelectionChange: _,
      placeholder: _,
      filter: _,
    } = _,
    _ = _({
      onSelectionChange: _,
      selectedValue: _,
      rgOptions: _,
      filter: _,
      filterPlaceholder: _.Localize(
        `#Achievements_Compare_FriendPickerFilterPlaceholder`,
      ),
      maxSelected: _,
    });
  return (0, _.jsxs)(_.Root, {
    state: _,
    clearable: !1,
    popoverWidth: _,
    children: [
      (0, _.jsx)(_.Trigger, {
        children:
          _.length > 0
            ? (0, _.jsx)(_.Value, {
                children: (0, _.jsx)(_, {
                  friendids: _,
                }),
              })
            : (0, _.jsx)(_.Placeholder, {
                children: (0, _.jsx)(_, {
                  contrast: `title`,
                  truncate: !0,
                  align: _,
                  children: _,
                }),
              }),
      }),
      (0, _.jsx)(_.Options, {
        children: _.rgFilteredOptions.map((_) =>
          (0, _.jsx)(
            _.Option,
            {
              value: _,
              children: (0, _.jsx)(_, {
                steamid: _,
              }),
            },
            _,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let {
      appid: _,
      selectedValue: _,
      onSelectionChange: _,
      comboboxThreshold: _ = 10,
    } = _,
    _ = _(_),
    _ = _().data?.preferences()?.parenthesize_nicknames() ?? !1,
    _ = (0, _.useMemo)(
      () => _.reduce((_, _) => ((_[_.steamid] = _), _), {}),
      [_],
    ),
    _ = (0, _.useMemo)(() => _.map((_) => _.steamid), [_]),
    _ = _.Localize(`#Achievements_Compare_FriendPickerPlaceholder`),
    _ = (0, _.useCallback)(
      (_, _) => {
        let _ = _.toLocaleLowerCase(),
          _ = _[_];
        return (
          !!_?.name?.toLocaleLowerCase().includes(_) ||
          !!_?.nickname?.toLocaleLowerCase().includes(_)
        );
      },
      [_],
    ),
    _ = {
      rgOptions: _,
      selectedValue: _ ?? [],
      onSelectionChange: (_) => {
        let _ = _.map((_) => _[_]).sort((_, _) => _(_, _, _));
        _(_.map((_) => _.steamid));
      },
      placeholder: _,
    };
  return _.length < _
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {
        ..._,
        filter: _,
      });
}
var _ = `a5keGglfofQ-`,
  _ = `mEnTyHOvee4-`;
function _(_, _) {
  let { data: _ } = _(_),
    _;
  return (
    _?.public_data?.profile_url
      ? (_ = `${_.COMMUNITY_BASE_URL}id/${_.public_data.profile_url}/${_}`)
      : _?.public_data?.steamid &&
        (_ = `${_.COMMUNITY_BASE_URL}profiles/${_.public_data.steamid}/${_}`),
    _
  );
}
function _(_) {
  let { steamid: _, appid: _ } = _,
    { data: _ } = _(_),
    { fnOpenFriendAchievements: _ } = _(),
    _ = _(_, !0),
    _ = _({
      appid: _,
      profileUrl: _(_, _),
    });
  return (0, _.jsx)(_, {
    direction: `row`,
    justify: `start`,
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(`a`, {
        href: _,
        onClick:
          _ &&
          ((_) => {
            (_.preventDefault(), _(_, _));
          }),
        className: _(_, _),
        children: (0, _.jsxs)(_, {
          direction: `row`,
          gap: `1`,
          align: `center`,
          className: _,
          overflow: `hidden`,
          children: [
            (0, _.jsx)(_, {
              steamid: _,
              size: `X-Small`,
            }),
            (0, _.jsx)(_, {
              steamid: _,
              showStatus: !0,
            }),
          ],
        }),
      }),
    }),
  });
}
function _(_) {
  let { appid: _, friends: _ } = _,
    _ = _(),
    _ = Math.min(_ == `initial` ? 1 : _ == `xs` ? 2 : 4, _.length),
    _ = 4 * Math.floor(_.length / _);
  return (0, _.jsx)(_, {
    gapX: `6`,
    gapY: `4`,
    columns: `repeat(${_}, minmax(0, 1fr))`,
    rows: `repeat(${_}, max-content)`,
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          appid: _,
          friend: _,
        },
        _.steamid,
      ),
    ),
  });
}
function _(_) {
  let { friend: _, appid: _ } = _,
    { data: _ } = _(_, _.steamid);
  if (!_) return null;
  let { total: _, rare: _ } = _.achievements,
    { total: _, rare: _ } = _.unlocked,
    { base: _, dlc: _ } = _.groups_completed,
    { groups_completed: _ } = _,
    { percentUnlockedStr: _ } = _(_, _);
  return (
    (_ / (_ || 1)) * 100,
    (0, _.jsxs)(_, {
      rows: `subgrid`,
      gridRow: `span 4`,
      gapY: `1`,
      children: [
        (0, _.jsx)(_, {
          steamid: _.steamid,
          appid: _,
        }),
        (0, _.jsxs)(_, {
          direction: `row`,
          justify: `between`,
          children: [
            (0, _.jsx)(_, {
              toolTipContent: _.Localize(
                `#Achievements_Compare_UnlockedCountTooltip`,
              ),
              direction: `top`,
              usePointerEvents: !0,
              children: (0, _.jsx)(_, {
                contrast: `subtitle`,
                align: `start`,
                children: _.Localize(
                  `#Achievements_Compare_UnlockedCount`,
                  _(_),
                  _(_),
                  _,
                ),
              }),
            }),
            _ > 0 &&
              (0, _.jsx)(_, {
                toolTipContent: _.Localize(`#AchievementRareTooltip`),
                direction: `top`,
                usePointerEvents: !0,
                children: (0, _.jsx)(_, {
                  color: `amber-10`,
                  children: _.LocalizePlural(`#Achievements_RareCount`, _(_)),
                }),
              }),
          ],
        }),
        (0, _.jsx)(_, {
          appid: _,
          steamid: _.steamid,
        }),
        (0, _.jsxs)(_, {
          direction: `row`,
          gap: `2`,
          align: `center`,
          justify: `between`,
          children: [
            _.total > 0 &&
              (0, _.jsx)(_, {
                height: `24px`,
                aspectRatio: `1/1`,
                children: (0, _.jsx)(_, {
                  toolTipContent: _.Localize(
                    `#Achievements_Compare_CompletedSetsTooltip`,
                  ),
                  direction: `top`,
                  usePointerEvents: !0,
                  children: (0, _.jsxs)(_, {
                    direction: `row`,
                    gap: `1`,
                    flexGrow: `1`,
                    children: [
                      _ > 0 &&
                        (0, _.jsx)(_, {
                          textSize: `4`,
                          size: `24px`,
                          complete: _,
                          maxComplete: 1,
                          isDlc: !1,
                          showCount: _.has_groups,
                        }),
                      _ > 0 &&
                        (0, _.jsx)(_, {
                          textSize: `4`,
                          size: `24px`,
                          complete: _,
                          maxComplete: 1,
                          isDlc: !0,
                          showCount: !0,
                        }),
                    ],
                  }),
                }),
              }),
            !!_.minutes_played_forever &&
              (0, _.jsx)(_, {
                size: `4`,
                weight: `heavy`,
                contrast: `subtitle`,
                children: _.Localize(
                  `#Achievements_Compare_PlaytimePlayed`,
                  _(_.minutes_played_forever),
                ),
              }),
          ],
        }),
      ],
    })
  );
}
function _(_) {
  let { appid: _, selectedValue: _, onSelectionChange: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    _ = _(_),
    { data: _ } = _(_, _),
    { targetsteamid: _ } = _(),
    _ = _(_).find((_) => _.steamid == _),
    _ = _?.minutes_played_forever ?? 0;
  if (!_ || (!_.owned && _ == 0)) return null;
  let _ = (_) => {
      (_(_), _(_ ? [_] : []));
    },
    _ = _(_?.unlocked.total ?? 0),
    _ = _(_?.achievements.total ?? 0),
    _ =
      _ > 0
        ? _.Localize(`#Achievements_Compare_SelfSummary`, _(_), _, _)
        : _.Localize(`#Achievements_Compare_SelfSummary_NoPlaytime`, _, _),
    _ = [
      _ ?? {
        steamid: _,
      },
      _,
    ].filter((_) => _.steamid !== void 0);
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `2`,
    paddingX: {
      initial: `2`,
      _: `4`,
    },
    paddingY: `4`,
    className: _,
    children: [
      (0, _.jsxs)(_, {
        direction: `row`,
        gap: `2`,
        align: `center`,
        justify: {
          initial: `center`,
          _: `between`,
        },
        wrap: {
          initial: `wrap`,
          _: `nowrap`,
        },
        children: [
          (0, _.jsx)(_, {
            align: {
              initial: `center`,
              _: `start`,
            },
            contrast: `subtitle`,
            children: _,
          }),
          (0, _.jsx)(_, {
            cursor: `pointer`,
            onClick: () => _(!_),
            className: void 0,
            children: (0, _.jsx)(_, {
              variant: `dark`,
              checked: _,
              onChange: (_) => _(_),
              children: _.Localize(
                `#Achievements_Compare_CompareToYourProgress`,
              ),
            }),
          }),
        ],
      }),
      _ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              size: `4`,
              color: `accent-7 50%`,
            }),
            (0, _.jsx)(_, {
              appid: _,
              friends: _,
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let { appid: _, selectedValue: _, friends: _ } = _,
    _ = _(_),
    _ = _().data?.preferences()?.parenthesize_nicknames() ?? !1,
    _ = (0, _.useMemo)(
      () =>
        _?.map((_) => _.find((_) => _.steamid == _))
          .filter((_) => _ !== void 0)
          .sort((_, _) => _(_, _, _)),
      [_, _, _],
    );
  if (_.length == 0 || (_?.length ?? 0) == 0) return null;
  let _ = [_, ...(_ ?? [])].filter((_) => _ !== void 0);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        size: `4`,
        color: `accent-7 50%`,
      }),
      (0, _.jsx)(_, {
        appid: _,
        friends: _,
      }),
    ],
  });
}
function _(_) {
  let { appid: _ } = _,
    _ = _(_),
    _ = _(_(), `friendsthatplay/${_}`),
    _ = _(
      _.LocalizePlural(
        `#Achievements_Friends_FriendsWhoPlayCount`,
        _(_.length),
      ),
      (0, _.jsx)(_, {
        whiteSpace: `nowrap`,
        contrast: `title`,
      }),
    );
  return (0, _.jsx)(_, {
    href: _,
    align: `center`,
    underline: `hover`,
    whiteSpace: `nowrap`,
    contrast: `subtitle`,
    children: _,
  });
}
function _(_) {
  let { appid: _, selectedValue: _ } = _,
    _ = _(_),
    _ = (0, _.useDeferredValue)(_),
    _ = (_?.length ?? 0) > 0;
  return (
    _?.length,
    _.length == 0
      ? null
      : (0, _.jsxs)(_, {
          direction: `column`,
          gap: `2`,
          paddingX: `4`,
          paddingY: `4`,
          className: _(_ ? _ : _),
          textAlign: `end`,
          justify: `center`,
          children: [
            (0, _.jsxs)(_, {
              direction: `row`,
              gap: `2`,
              align: `center`,
              justify: {
                initial: `center`,
                _: `between`,
              },
              wrap: {
                initial: `wrap`,
                _: `nowrap`,
              },
              children: [
                (0, _.jsx)(_, {
                  direction: `row`,
                  wrap: `wrap`,
                  maxHeight: `28px`,
                  gap: `2`,
                  align: `center`,
                  overflow: `hidden`,
                  children: (0, _.jsx)(_, {
                    direction: `row`,
                    minHeight: `28px`,
                    align: `center`,
                    children: (0, _.jsx)(_, {
                      appid: _,
                    }),
                  }),
                }),
                (0, _.jsx)(_, {
                  direction: {
                    initial: `column`,
                    _: `row`,
                  },
                  flexBasis: {
                    initial: `100%`,
                    _: `auto`,
                  },
                  flexShrink: `1`,
                  minWidth: `100px`,
                  maxWidth: {
                    initial: `100%`,
                    _: `min(350px, 100%)`,
                  },
                  children: (0, _.jsx)(_, {
                    ..._,
                  }),
                }),
              ],
            }),
            (0, _.jsx)(_, {
              appid: _,
              friends: _,
              selectedValue: _ ?? void 0,
            }),
          ],
        })
  );
}
var _ = `_02eeIVJX-LQ-`,
  _ = `nEtnig-jqtg-`,
  _ = [],
  _ = (0, _.lazy)(() =>
    _(
      () =>
        import(`./chunk.js`).then((_) => ({
          default: _.PinnedAchievementsList,
        })),
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22,
      ]),
      import.meta.url,
    ),
  );
function _(_) {
  return _()
    ? (0, _.jsx)(_.Suspense, {
        fallback: null,
        children: (0, _.jsx)(_, {
          ..._,
        }),
      })
    : null;
}
var _ = new Set([440, 550, 630, 810, 870, 886, 23510, 231430]);
function _(_) {
  let {
      appid: _,
      targetsteamid: _,
      asPanel: _ = !1,
      overlayPinned: _ = !1,
      ref: _,
      pinnedAchievements: _,
      setPinnedAchievements: _,
      showPinning: _,
      setShowPinning: _,
      openGlobalLeaderboards: _,
      openUserLeaderboards: _,
      headerContent: _,
      headerProps: _,
      headerVariant: _,
      expandDlc: _,
      useAppName: _,
      useOwnPlaytime: _,
    } = _,
    _ = _(),
    _ = _(_),
    _ = _(_, _ ?? ``),
    { useIsConnectedToSteam: _ } = _(),
    _ = _?.() ?? !0,
    _ = _(_),
    _ = _(_.data, _),
    { data: _ } = _({
      appid: _,
    }),
    _ = _.has(_) || (_?.categories?.feature_categoryids?.includes(25) ?? !1),
    _ = _ != 500 && _ != 550 && _,
    _ = _ == 500 || _ == 550 || _,
    [_, _] = (0, _.useState)([]),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(``),
    [_, _] = (0, _.useState)({
      type: void 0,
      _: void 0,
    }),
    _ = (0, _.useDeferredValue)(_ ? _ : _),
    [_, _] = (0, _.useState)(new Set()),
    _ = _(),
    _ = (0, _.useMemo)(
      () => ({
        appid: _,
        targetsteamid: _,
        viewersteamid: _,
        revealedAchievements: _,
        setRevealedAchievements: _,
        filter: _,
        setFilter: _,
        showGlobalRate: _,
        setShowGlobalRate: _,
        isPanel: _,
        isOverlayPinned: _,
        hasGlobalLeaderboards: _,
        hasUserLeaderboards: _,
        profileUrl: _,
        openGlobalLeaderboards: _,
        openUserLeaderboards: _,
        headerContent: _,
        headerProps: _,
        headerVariant: _,
        expandDlc: _,
        useAppName: _,
        useOwnPlaytime: _,
      }),
      [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    );
  if ([_, _].some((_) => _.data === void 0 && _.error instanceof _))
    return (0, _.jsx)(_, {
      justify: `center`,
      paddingY: `6`,
      children: (0, _.jsx)(_, {
        contrast: `subtitle`,
        children: _.Localize(`#Achievements_Page_Offline`),
      }),
    });
  if (_.data?.groups == null) return null;
  let _ = _(54),
    _ = _ == `compact`,
    _;
  _ &&
    !_ &&
    _ &&
    (_ =
      _ == _
        ? (0, _.jsx)(_, {
            appid: _,
            selectedValue: _,
            onSelectionChange: _,
          })
        : (0, _.jsx)(_, {
            appid: _,
            selectedValue: _,
            onSelectionChange: _,
          }));
  let _ = _ && !_ && !_,
    _ = _
      ? {
          maxHeight: `100%`,
          overflow: `auto`,
          paddingX: `4`,
          paddingTop: _ ? `1` : void 0,
          navProps: {
            scrollRegionToStartOrEnd: !0,
          },
        }
      : {},
    _ =
      !_ || _
        ? {}
        : {
            marginTop: `4`,
          },
    _ = _(_, _ && `_02eeIVJX-LQ-`),
    _ = (0, _.jsx)(_, {
      className: _,
      children: (0, _.jsx)(_, {
        ..._,
      }),
    }),
    _ = (0, _.jsxs)(_, {
      style: _,
      direction: `column`,
      gap: _ ? `4` : `5`,
      width: `100%`,
      ref: _,
      className: _(_ && `_6N4LhsCSQEU-`, _ && `jcq1HF3-Bck-`),
      ..._,
      children: [
        !_ && _,
        _ &&
          (0, _.jsx)(_, {
            className: _,
            children: _,
          }),
        (0, _.jsxs)(_, {
          direction: `column`,
          gap: `5`,
          children: [
            (0, _.jsx)(_, {
              className: _ ? _ : void 0,
              children: (0, _.jsx)(_, {
                typeFilter: _,
                setTypeFilter: _,
              }),
            }),
            (0, _.jsx)(_, {
              compareTo: _,
            }),
            (0, _.jsx)(_, {
              typeFilter: _,
              compareTo: _,
            }),
          ],
        }),
      ],
    });
  return (0, _.jsx)(_, {
    value: _,
    children: (0, _.jsx)(_, {
      pinnedAchievements: _,
      setPinnedAchievements: _,
      showPinning: _,
      setShowPinning: _,
      children: (0, _.jsx)(_.Suspense, {
        fallback: (0, _.jsx)(_, {}),
        children: _
          ? (0, _.jsxs)(_, {
              direction: `column`,
              gap: `5`,
              width: `100%`,
              maxHeight: `100%`,
              minHeight: `0`,
              style: _,
              children: [_, _],
            })
          : _,
      }),
    }),
  });
}
var _ = `gZeb98c6EMo-`,
  _ = `i6vwJ1yWo-w-`,
  _ = `_2Krzv6cIDzk-`,
  _ = _({
    Component: _,
  });
function _(_) {
  let { scenarios: _, current: _ } = _.options;
  return (0, _.jsxs)(`form`, {
    method: `get`,
    className: _,
    children: [
      (0, _.jsxs)(`select`, {
        name: `simulate`,
        defaultValue: _,
        children: [
          (0, _.jsx)(`option`, {
            value: ``,
            children: `no simulation`,
          }),
          _.map((_) =>
            (0, _.jsx)(
              `option`,
              {
                value: _,
                children: _,
              },
              _,
            ),
          ),
        ],
      }),
      (0, _.jsx)(`button`, {
        type: `submit`,
        children: `simulate`,
      }),
    ],
  });
}
function _() {
  let _ = _.useLoaderData();
  _(!(`error` in _), `Rendered Achievements with error`);
  let { appid: _, targetSteamId: _, expandDlc: _, simulation: _ } = _,
    _ = _(_),
    _ = _(_.data, _),
    _ = _({
      appid: _,
    }),
    _ =
      _ &&
      (0, _.jsx)(_, {
        options: _,
      }),
    _ = (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          width: `100vw`,
          style: {
            left: `50%`,
            top: `0`,
            transform: `translateX(-50%)`,
            overflowY: `hidden`,
          },
          height: `100%`,
          position: `absolute`,
          children: (0, _.jsx)(_, {
            _: {
              appid: _,
            },
            className: _,
            imageClassName: _,
            useAssetsWithoutOverride: !0,
          }),
        }),
        _ !== void 0 &&
          (0, _.jsx)(_, {
            className: `_0iA8K37upgg-`,
            children: (0, _.jsx)(_, {
              steamid: _,
              breadcrumbs: [
                {
                  href: `${_}/games`,
                  label: _.Localize(`#profile_games_list`),
                },
                {
                  href: `${_}/achievements/${_}`,
                  label: _.Localize(
                    `#profile_achievements_breadcrumb`,
                    _.data?.name ?? ``,
                  ),
                  hideOnMobile: !0,
                },
              ],
              children: _,
            }),
          }),
      ],
    });
  return (0, _.jsx)(_.Fragment, {
    children: (0, _.jsx)(_, {
      direction: `column`,
      style: {
        overflowX: `clip`,
      },
      children: (0, _.jsx)(_, {
        paddingBottom: `7`,
        paddingX: `2`,
        alignSelf: `center`,
        maxWidth: `1200px`,
        width: `100%`,
        children: (0, _.jsx)(
          _,
          {
            appid: _,
            targetsteamid: _,
            expandDlc: _,
            headerContent: _,
            headerProps: {
              paddingBottom: `5`,
            },
          },
          _,
        ),
      }),
    }),
  });
}
export { _ as route };
