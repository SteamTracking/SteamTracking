var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { events: _, clanAccountID: _, onViewAll: _, children: _ } = _,
    { data: _ } = _(_);
  return !_.length || !_
    ? null
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(`div`, {
          className: _(_, `OtherEventsCtn`),
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: _(_, `EventSectionTitle`),
                  children: _(`#EventBrowse_MoreEventsTitle`, _.group_name),
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: `\xA0`,
                }),
                _
                  ? (0, _.jsx)(_, {
                      focusable: !0,
                      className: _,
                      onActivate: _,
                      children: _(`#EventBrowse_MoreEventsBtn`),
                    })
                  : (0, _.jsx)(_, {
                      eventModel: _[0],
                      route: _.k_eViewWebSiteHub,
                      className: _,
                      children: _(`#EventBrowse_MoreEventsBtn`),
                    }),
              ],
            }),
            (0, _.jsx)(_, {
              className: _,
              "flow-children": `row`,
              navEntryPreferPosition: _.PREFERRED_CHILD,
              children: _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    event: _,
                  },
                  _.AnnouncementGID,
                ),
              ),
            }),
            _,
          ],
        }),
      });
}
function _(_) {
  let { appid: _, creatorHome: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _
          ? (0, _.jsx)(_, {
              appid: _,
            })
          : null,
        _,
      ],
    }),
  });
}
function _(_) {
  let { appid: _ } = _,
    { data: _ } = _({
      appid: _,
    });
  if (!_) return null;
  let _ = _(_.type ?? 0);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`span`, {
        className: _,
        children: _(`#CreatorHome_ThisGame`),
      }),
      (0, _.jsx)(`div`, {
        className: _(_, `AppSummaryWidgetCtn`),
        children: (0, _.jsx)(_, {
          _: _,
          type: _,
          bPreferAssetWithoutOverride: !1,
        }),
      }),
    ],
  });
}
var _ = _((_) => {
  let {
      event: _,
      lang: _,
      nOverrideStartTime: _,
      nOverrideEndTime: _,
      reminder: _,
      editorInfo: _,
      meetSteamInfo: _,
    } = _,
    _ = _(),
    _ = _.appid,
    _ = _.clanSteamID,
    _ = _ || _.GetStartTimeAndDateUnixSeconds(),
    { data: _, isPending: _ } = _(
      _
        ? {
            appid: _,
          }
        : void 0,
    ),
    { data: _, isPending: _ } = _(_.GetAccountID());
  return _ || (_ && _)
    ? null
    : (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (_?.is_ogg ?? !!_)
              ? (0, _.jsx)(_, {
                  appid: _?.appid || _,
                })
              : (0, _.jsx)(_, {
                  clanSteamID: _,
                }),
            (0, _.jsx)(_, {
              event: _,
              className: _,
              nOverrideEndTime: _,
              nOverrideStartTime: _,
            }),
            _ &&
              _.type !== 28 &&
              _ < _ &&
              (0, _.jsx)(`div`, {
                className: `t4-K8DBhAJs-`,
                children: _,
              }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _(`#EventDisplay_RightColumnTitle_EventType`),
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [_.GetCategoryAsString(), ` `],
                }),
              ],
            }),
            _,
            !!_.jsondata.meet_steam_groups && _,
          ],
        }),
      });
});
function _(_) {
  let { appid: _ } = _;
  _(_ && _ != 0, `Expected Appid In Game Info Section`);
  let { data: _, isPending: _ } = _(
    _
      ? {
          appid: _,
        }
      : void 0,
  );
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.some((_) => _ === _)
          ? _(`#EventDisplay_RightColumnTitle_Blog`)
          : _(`#EventDisplay_RightColumnTitle_Game`),
      }),
      (0, _.jsx)(_, {
        imageType: `header`,
        capsule: {
          _: _,
          type: `game`,
        },
        bHidePriceIfOwned: !0,
        bHideStatusBanners: !0,
        bPreferAssetWithoutOverride: !1,
      }),
      (0, _.jsxs)(`div`, {
        className: _(_),
        children: [
          _ &&
            (0, _.jsx)(_, {
              appid: _,
              bIsFree: !!_.is_free,
              bIsComingSoon: !!_.is_coming_soon,
              className: `nno5fijFz7w-`,
            }),
          _ &&
            (0, _.jsx)(_, {
              size: `small`,
              position: `center`,
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { clanSteamID: _ } = _,
    _ = _.GetAccountID(),
    { data: _ } = _(_),
    { data: _ } = _(_);
  if (!_) return null;
  let _ = _
    ? _(_, `developer`)
    : _.COMMUNITY_BASE_URL +
      (_.vanity_url
        ? `groups/` + _.vanity_url
        : `gid/` + _.ConvertTo64BitString());
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.group_name,
      }),
      (0, _.jsx)(_, {
        href: _(_),
        children: (0, _.jsx)(`div`, {
          className: _,
          style: {
            backgroundImage: `url(${_.avatar_full_url})`,
          },
        }),
      }),
    ],
  });
}
var _ = `Ndflj1nJfRY-`,
  _ = `ZrSmkNaFyEw-`,
  _ = `dhRSAI-azAI-`,
  _ = `_8zomCVqGSBc-`,
  _ = `BLP-S-u7xD8-`,
  _ = `nON0slFnAQc-`;
function _(_) {
  let {
      summary: _,
      bEventIsInModerationQueue: _,
      bIsAllowedInLibrary: _,
      bCompact: _,
      bExpanded: _,
      header: _,
    } = _,
    {
      total_showm: _ = 0,
      total_read: _ = 0,
      library_overview_shown: _ = 0,
      library_overview_read: _ = 0,
      app_details_spotlight_shown: _ = 0,
      app_details_spotlight_read: _ = 0,
      app_details_activity_shown: _ = 0,
      app_details_activity_read: _ = 0,
      store_app_page_shown: _ = 0,
      store_app_page_read: _ = 0,
      community_hub_shown: _ = 0,
      community_hub_read: _ = 0,
      news_hub_shown: _ = 0,
      news_hub_read: _ = 0,
    } = _;
  return _ + _ == 0
    ? null
    : (0, _.jsxs)(`div`, {
        className: _(_ ? _ : _),
        children: [
          (0, _.jsxs)(`div`, {
            className: _(_),
            children: [
              _,
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, _.jsx)(`span`, {
                        className: void 0,
                        children: _(
                          `#EventDashBoard_SummaryStats_TotalImpressions`,
                        ),
                      }),
                      (0, _.jsx)(`span`, {
                        className: _,
                        children: _(_),
                      }),
                    ],
                  }),
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, _.jsx)(`span`, {
                        className: void 0,
                        children: _(`#EventDashBoard_SummaryStats_TotalViews`),
                      }),
                      (0, _.jsx)(`span`, {
                        className: _,
                        children: _(_),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          !!(_ && _) &&
            (0, _.jsxs)(`div`, {
              className: `O2gOdW8JUcE-`,
              children: [
                (0, _.jsx)(`div`, {
                  className: `P-2yD1kyGxI-`,
                  children: _(`#EventDashBoard_ModerationQueueWarning`),
                }),
                (0, _.jsx)(`a`, {
                  href:
                    _.PARTNER_BASE_URL + `doc/marketing/event_tools/moderation`,
                  children: _(`#EventDashBoard_Location_ModerationTitle`),
                }),
              ],
            }),
          _ &&
            (0, _.jsxs)(`div`, {
              className: _(`uVkjsIMuM-M-`),
              children: [
                _ &&
                  (0, _.jsxs)(`div`, {
                    className: _(`_6U5QqlEXWXU-`, _ && `rbs7OLWgPi8-`),
                    children: [
                      (0, _.jsxs)(`div`, {
                        className: `BsvL6RXjtmY-`,
                        children: [
                          (0, _.jsx)(`span`, {
                            children: _(`#EventDashBoard_Location_LibraryHome`),
                          }),
                          (0, _.jsxs)(`span`, {
                            className: `pBaron7hil4-`,
                            children: [
                              `( `,
                              _(`#EventDashBoard_Location_WaitingModeraion`),
                              ` )`,
                            ],
                          }),
                        ],
                      }),
                      (0, _.jsxs)(`div`, {
                        className: `_0jKM7b8TZL8-`,
                        children: [
                          (0, _.jsx)(`span`, {
                            children: _(
                              `#EventDashBoard_Summary_LibraryHome_Shown`,
                            ),
                          }),
                          (0, _.jsx)(`span`, {
                            children: _(_),
                          }),
                        ],
                      }),
                      (0, _.jsxs)(`div`, {
                        className: `_0jKM7b8TZL8-`,
                        children: [
                          (0, _.jsx)(`span`, {
                            children: _(
                              `#EventDashBoard_Summary_LibraryHome_Read`,
                            ),
                          }),
                          (0, _.jsx)(`span`, {
                            children: _(_),
                          }),
                        ],
                      }),
                      (0, _.jsxs)(`div`, {
                        className: `BsvL6RXjtmY-`,
                        children: [
                          (0, _.jsx)(`span`, {
                            children: _(
                              `#EventDashBoard_Location_LibraryDetail`,
                            ),
                          }),
                          (0, _.jsxs)(`span`, {
                            className: `pBaron7hil4-`,
                            children: [
                              `( `,
                              _(`#EventDashBoard_Location_WaitingModeraion`),
                              ` )`,
                            ],
                          }),
                        ],
                      }),
                      _ > 0 &&
                        (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsxs)(`div`, {
                              className: `_0jKM7b8TZL8-`,
                              children: [
                                (0, _.jsx)(`span`, {
                                  children: _(
                                    `#EventDashBoard_Summary_AppDetailSpotlight_Shown`,
                                  ),
                                }),
                                (0, _.jsx)(`span`, {
                                  children: _(_),
                                }),
                              ],
                            }),
                            (0, _.jsxs)(`div`, {
                              className: `_0jKM7b8TZL8-`,
                              children: [
                                (0, _.jsx)(`span`, {
                                  children: _(
                                    `#EventDashBoard_Summary_AppDetailSpotlight_Read`,
                                  ),
                                }),
                                (0, _.jsx)(`span`, {
                                  children: _(_),
                                }),
                              ],
                            }),
                          ],
                        }),
                      (0, _.jsxs)(`div`, {
                        className: `_0jKM7b8TZL8-`,
                        children: [
                          (0, _.jsx)(`span`, {
                            children: _(
                              `#EventDashBoard_Summary_AppDetailActivity_Shown`,
                            ),
                          }),
                          (0, _.jsx)(`span`, {
                            children: _(_),
                          }),
                        ],
                      }),
                      (0, _.jsxs)(`div`, {
                        className: `_0jKM7b8TZL8-`,
                        children: [
                          (0, _.jsx)(`span`, {
                            children: _(
                              `#EventDashBoard_Summary_AppDetailActivity_Read`,
                            ),
                          }),
                          (0, _.jsx)(`span`, {
                            children: _(_),
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, _.jsxs)(`div`, {
                  className: `-EoPt2DFMmw-`,
                  children: [
                    (0, _.jsx)(`div`, {
                      className: `BsvL6RXjtmY-`,
                      children: (0, _.jsx)(`span`, {
                        children: _(`#EventDashBoard_Location_StoreDetail`),
                      }),
                    }),
                    (0, _.jsxs)(`div`, {
                      className: `_0jKM7b8TZL8-`,
                      children: [
                        (0, _.jsx)(`span`, {
                          children: _(
                            `#EventDashBoard_Summary_StoreAppPage_Shown`,
                          ),
                        }),
                        (0, _.jsx)(`span`, {
                          children: _(_),
                        }),
                      ],
                    }),
                    (0, _.jsxs)(`div`, {
                      className: `_0jKM7b8TZL8-`,
                      children: [
                        (0, _.jsx)(`span`, {
                          children: _(
                            `#EventDashBoard_Summary_StoreAppPage_Read`,
                          ),
                        }),
                        (0, _.jsx)(`span`, {
                          children: _(_),
                        }),
                      ],
                    }),
                    (0, _.jsx)(`div`, {
                      className: `BsvL6RXjtmY-`,
                      children: (0, _.jsx)(`span`, {
                        children: _(`#EventDashBoard_Location_CommunityDetail`),
                      }),
                    }),
                    (0, _.jsxs)(`div`, {
                      className: `_0jKM7b8TZL8-`,
                      children: [
                        (0, _.jsx)(`span`, {
                          children: _(
                            `#EventDashBoard_Summary_Community_Shown`,
                          ),
                        }),
                        (0, _.jsx)(`span`, {
                          children: _(_),
                        }),
                      ],
                    }),
                    (0, _.jsxs)(`div`, {
                      className: `_0jKM7b8TZL8-`,
                      children: [
                        (0, _.jsx)(`span`, {
                          children: _(`#EventDashBoard_Summary_Community_Read`),
                        }),
                        (0, _.jsx)(`span`, {
                          children: _(_),
                        }),
                      ],
                    }),
                    (0, _.jsx)(`div`, {
                      className: `BsvL6RXjtmY-`,
                      children: (0, _.jsx)(`span`, {
                        children: _(`#EventDashBoard_Location_NewsHubDetail`),
                      }),
                    }),
                    (0, _.jsxs)(`div`, {
                      className: `_0jKM7b8TZL8-`,
                      children: [
                        (0, _.jsx)(`span`, {
                          children: _(`#EventDashBoard_Summary_NewsHub_Shown`),
                        }),
                        (0, _.jsx)(`span`, {
                          children: _(_),
                        }),
                      ],
                    }),
                    (0, _.jsxs)(`div`, {
                      className: `_0jKM7b8TZL8-`,
                      children: [
                        (0, _.jsx)(`span`, {
                          children: _(`#EventDashBoard_Summary_NewsHub_Read`),
                        }),
                        (0, _.jsx)(`span`, {
                          children: _(_),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        ],
      });
}
var _ = _(function (_) {
    let { event: _, bIsOGG: _, summary: _ } = _,
      _ = _();
    return (0, _.jsxs)(_, {
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`span`, {
                  children: _(`#EventEditor_Comments`),
                }),
                (0, _.jsx)(`span`, {
                  children: _(_.nCommentCount),
                }),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`span`, {
                  children: _(`#EventEditor_UpVotes`),
                }),
                (0, _.jsx)(`span`, {
                  children: _.nVotesUp ? _(_.nVotesUp) : 0,
                }),
              ],
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`span`, {
                  children: _(`#EventEditor_DownVotes`),
                }),
                (0, _.jsx)(`span`, {
                  children: _.nVotesDown ? _(_.nVotesDown) : 0,
                }),
              ],
            }),
          ],
        }),
        _ &&
          (0, _.jsxs)(`div`, {
            className: `zdR0VZ5x5qs-`,
            children: [
              _(`#EventDashBoard_SummaryStats_Admin_Title`),
              (0, _.jsx)(_, {
                summary: _,
                bIsAllowedInLibrary: _,
                bEventIsInModerationQueue: _(_, _),
                bCompact: !0,
                bExpanded: !0,
              }),
            ],
          }),
      ],
    });
  }),
  _ = {};
((_.arabic = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.filipino = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.sc_schinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./chunk.js`), [], import.meta.url)));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
function _(_) {
  let { appid: _ } = _,
    { data: _ } = _(
      _
        ? {
            appid: _,
          }
        : void 0,
    );
  return !_ || !_.logged_in || _?.type != 12
    ? null
    : (0, _.jsx)(_, {
        appid: _,
      });
}
function _(_) {
  return _(_.appid) === !1
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`span`, {
            className: _,
            children: _.Localize(`#PartnerEvents_PlaytestOnly_Header`),
          }),
          (0, _.jsx)(`span`, {
            className: _,
            children: _.Localize(`#PartnerEvents_PlaytestOnly_Detail`),
          }),
        ],
      })
    : null;
}
var _ = _((_) => {
    let {
        event: _,
        lang: _,
        banner: _,
        titleBar: _,
        body: _,
        postbody: _,
        footer: _,
      } = _,
      _ = _(_, `background`, _),
      { data: _ } = _(
        _.appid
          ? {
              appid: _.appid,
            }
          : void 0,
      ),
      { data: _ } = _(_.clanSteamID.GetAccountID()),
      _ = _.BIsImageSafeForAllAges(`background`, _, {
        bAppHasAgeSafeScreenshots: (_?.all_ages_screenshots?.length ?? 0) > 0,
        clanInfo: _ ?? void 0,
      }),
      _ = `lang_` + _(_),
      _ = !!_ && _.BImageNeedScreenshotFallback(`background`, _);
    return (0, _.jsxs)(_, {
      scrollIntoViewType: _.NoTransformSparseContent,
      className: _(
        _,
        _,
        _,
        _ ? _ : _,
        !_ && `_8GSuvhbRfMw-`,
        _ && `_-1Y19afJCos-`,
      ),
      children: [
        _,
        _,
        (0, _.jsx)(_, {
          appid: _.appid,
        }),
        (0, _.jsx)(_, {
          strImageURL: _,
        }),
        (0, _.jsx)(_, {
          strImageURL: _,
          body: _,
          postbody: _,
        }),
        !!_ &&
          (0, _.jsx)(_, {
            children: _,
          }),
      ],
    });
  }),
  _ = (_) => {
    let { strImageURL: _ } = _;
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children:
            _ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(`div`, {
                  className: `rAdqfiD5GOc-`,
                  style: {
                    backgroundColor: `rgb(37, 41, 46)`,
                    backgroundImage: `url(${_})`,
                  },
                }),
                (0, _.jsx)(`div`, {
                  className: `pJRtaRA7vak-`,
                  style: {
                    backgroundColor: `rgb(37, 41, 46)`,
                    backgroundImage: `url(${_})`,
                  },
                }),
              ],
            }),
        }),
        _ &&
          (0, _.jsx)(`div`, {
            className: `wOW5S9yDG34-`,
          }),
      ],
    });
  },
  _ = (_) => {
    let { body: _, postbody: _, strImageURL: _ } = _;
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                !!_ &&
                  (0, _.jsx)(`div`, {
                    className: `Byz-onoI480-`,
                    style: {
                      backgroundImage: `url(${_})`,
                    },
                  }),
                (0, _.jsx)(_, {
                  children: _,
                }),
              ],
            }),
            !!_ &&
              (0, _.jsx)(_, {
                children: _,
              }),
          ],
        }),
      ],
    });
  };
function _(_) {
  let {
    GetMySteamAwardNominations: _,
    NominateForSteamAward: _,
    GetMySteamAwardVotes: _,
    SetSteamAwardVote: _,
  } = _;
  if (_ && _ && _ && _)
    return {
      GetMySteamAwardNominations: _,
      NominateForSteamAward: _,
      GetMySteamAwardVotes: _,
      SetSteamAwardVote: _,
    };
}
function _(_) {
  let { loaderData: _, actions: _ } = _,
    _ = _.useMemo(() => _.FromJSON(_.strEventModelJSON), [_.strEventModelJSON]),
    _ = _.useMemo(
      () => _.rgAdjacentEventModelJSON.map((_) => _.FromJSON(_)),
      [_.rgAdjacentEventModelJSON],
    ),
    _ = !!_.editorPermissions;
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        rtServerNow: _.rtServerNow,
        bHoldSeed: _.bTimeOverridden,
        children: (0, _.jsx)(_, {
          location: 0,
          children: (0, _.jsx)(_, {
            nVisibilityID: _.nMeetSteamVisibilityID,
            children: (0, _.jsxs)(_, {
              resolutions: _.localizedImages,
              children: [
                (0, _.jsx)(_, {
                  event: _,
                }),
                (0, _.jsx)(_, {
                  event: _,
                  lang: _.elanguage,
                  titleBar: (0, _.jsx)(_, {
                    event: _,
                    bViewerCanSeeHidden: _,
                  }),
                  body: (0, _.jsx)(_, {
                    event: _,
                    lang: _.elanguage,
                    strHubName: _.strHubName,
                    editorStats: _.editorStats,
                    steamAwards: _.steamAwards,
                    actions: _,
                  }),
                  postbody: (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_, {
                        event: _,
                        permissions: _.editorPermissions,
                      }),
                      (0, _.jsx)(_, {
                        events: _,
                        clanAccountID: _.clanAccountID,
                      }),
                    ],
                  }),
                  footer: (0, _.jsx)(_, {
                    appid: _.appid,
                    creatorHome: (0, _.jsx)(_, {
                      appid: _.appid,
                      bSmallFormat: !0,
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function _(_) {
  let { event: _ } = _,
    _ = _(),
    _ = _();
  return (
    _.useEffect(() => {
      (_.RecordEventRead(_, 8, _), _.Flush());
    }, [_, _, _]),
    null
  );
}
function _(_) {
  let { event: _, permissions: _ } = _;
  return _
    ? (0, _.jsx)(_, {
        eventModel: _,
        permissions: _,
      })
    : null;
}
function _(_) {
  let {
      event: _,
      lang: _,
      strHubName: _,
      editorStats: _,
      steamAwards: _,
      actions: _,
    } = _,
    _ = _(_, _.k_eStoreNewsHub, `forceAbsolute`),
    _ = _(_, _.k_eStoreUsersNewsHub, `forceAbsolute`),
    { data: _ } = _(_.clanSteamID.GetAccountID()),
    _ = _.GetSaleURL(_ ? _(_, `developer`) : void 0),
    _ = _(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            crumbs: [
              {
                name: _.Localize(`#BreadCrumbs_AllEvents`),
                url: _ ?? ``,
              },
              {
                name: _.Localize(`#BreadCrumbs_GameEvents`, _),
                url: _ ?? ``,
              },
            ],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _.GetNameWithFallback(_),
          }),
          _.BHasSubTitle(_) &&
            (0, _.jsx)(`div`, {
              className: `bBI-hvNZ2j4-`,
              children: _.GetSubTitle(_),
            }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _(_, `EventDetail`),
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              _ &&
                _ &&
                (0, _.jsx)(_, {
                  event: _,
                  widgets: _,
                  actions: _,
                }),
              (0, _.jsxs)(`div`, {
                className: _(`EventDetailsBody`, _),
                children: [
                  (0, _.jsx)(_, {
                    dictionary: _(),
                    children: (0, _.jsx)(_, {
                      text: _.GetDescriptionWithFallback(_) ?? ``,
                      event: _,
                      languageOverride: _,
                    }),
                  }),
                  !!(_.jsondata.bSaleEnabled && _.jsondata.sale_vanity_id) &&
                    _ &&
                    (0, _.jsx)(_, {
                      event: _,
                      language: _,
                      strSaleURL: _,
                    }),
                  _.jsondata.associated_appid
                    ? (0, _.jsx)(_, {
                        _: _.jsondata.associated_appid,
                        inputType: `game`,
                        bApplyUserContentPref: !1,
                      })
                    : null,
                ],
              }),
              (0, _.jsx)(_, {
                event: _,
              }),
              !!_.jsondata.read_more_link &&
                (0, _.jsx)(`div`, {
                  className: `c3TGgFxobZw-`,
                  children: (0, _.jsx)(_, {
                    className: `m-U1DKR49wc-`,
                    href: _.jsondata.read_more_link,
                    children: _.Localize(
                      `#EventEmail_Button_ClickForMoreDetails`,
                    ),
                  }),
                }),
              (0, _.jsx)(`span`, {
                className: _,
              }),
              !!_.appid &&
                (0, _.jsx)(_, {
                  appid: _.appid,
                }),
              _.GID &&
                _.jsondata.sale_social_media_items &&
                (0, _.jsx)(_, {
                  gidClanEvent: _.GID,
                  rgSocial: _.jsondata.sale_social_media_items,
                }),
            ],
          }),
          (0, _.jsx)(_, {
            event: _,
            lang: _,
            reminder: (0, _.jsx)(_, {
              eventModel: _,
              lang: _,
            }),
            editorInfo:
              _ &&
              (0, _.jsx)(_, {
                event: _,
                bIsOGG: _.bIsOGG,
                summary: _.summary,
              }),
          }),
        ],
      }),
      (0, _.jsx)(_, {
        event: _,
        actions: _,
      }),
    ],
  });
}
function _(_) {
  let { event: _, widgets: _, actions: _ } = _,
    _ = _(),
    _ = _.BIsEventActionEnabled(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.nomination &&
        (0, _.jsx)(_, {
          unAppID: _.appid,
          widget: _.nomination,
          actions: _,
          bNominationsOpen: _(_, _),
        }),
      _.vote &&
        (0, _.jsx)(_, {
          unAppID: _.appid,
          widget: _.vote,
          actions: _,
          bVotesOpen: _,
        }),
    ],
  });
}
function _(_) {
  let { event: _, actions: _ } = _,
    _ = _.clanSteamID.GetAccountID(),
    { data: _ } = _(_),
    { myVote: _, Vote: _ } = _(_.AnnouncementGID, _, _),
    { elDialogElement: _, fnShowLogonDialog: _ } = _(),
    _ = _(),
    _ = _.useRef(void 0);
  _.current === void 0 && _ !== void 0 && (_.current = _);
  let _ = _.nVotesUp - _.nVotesDown + _(_) - _(_.current),
    _ = _(_.GetDiscussionURL(_?.vanity_url));
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        nVoteCount: _(_, 0, 2 ** 53 - 1),
        nCommentCount: _.nCommentCount,
        myVote: _ ?? void 0,
        onVote: (_) => (_.logged_in ? _(_) : _()),
        strDiscussionURL: _,
        bShowDiscussion:
          _.EREALM != _.k_ESteamRealmChina && !_.BIsUnlistedEvent(),
        share:
          !_ &&
          (0, _.jsx)(_, {
            eventModel: _,
          }),
      }),
      _,
    ],
  });
}
