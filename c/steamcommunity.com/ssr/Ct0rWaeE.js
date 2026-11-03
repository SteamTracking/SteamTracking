var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `UNowfeldbNg-`,
  _ = `hIuyWTKvAow-`,
  _ = `tYCWuqm2E-A-`,
  _ = `_4ExMYuP4ajQ-`,
  _ = `UEWCsjQUwf4-`,
  _ = `Yd0pZ1PLSk0-`,
  _ = `T0szdMMjqYs-`,
  _ = `kjJIGFdaMmQ-`,
  _ = `_61MokN1NYBE-`,
  _ = `CNVbvjQ6ajc-`,
  _ = `dFQsz3Wt3-0-`,
  _ = `MF-NOtRcYFc-`,
  _ = `Sw3NXcvOA4Y-`,
  _ = `Frzkb5XE-n8-`,
  _ = `o14JIlvi52E-`,
  _ = `N2xb8hd8IUY-`,
  _ = `G-Hg05Q3k74-`,
  _ = `okqHAoX2fxk-`,
  _ = `eJ8bRcenpT8-`,
  _ = `otbpD5L-0AE-`,
  _ = `HP0gIdHVPOI-`,
  _ = `cFH83xfcYkA-`,
  _ = _();
function _(_) {
  let { details: _ } = _,
    { data: _ } = _(_.creator),
    _ = _(_) + `/myworkshopfiles/?appid=${_.consumer_appid}`,
    _ = _?.public_data?.persona_name;
  return !_ || !_
    ? (0, _.jsx)(`div`, {
        className: _,
        children: `\xA0`,
      })
    : (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          focusable: !1,
          href: _,
          children: _.Localize(`#Workshop_Browse_Author_Link`, _),
        }),
      });
}
function _(_) {
  let { details: _, bEnlarged: _ } = _,
    _ = (0, _.useContext)(_),
    _ = _(_.publishedfileid),
    _ = _(),
    _ = _.logged_in && _(_.file_type),
    _ = _(_.consumer_appid, 1, _.file_type, _.publishedfileid),
    _ = _ && _.cansubscribefrombrowseview,
    _ = (0, _.jsx)(_, {
      details: _,
    }),
    _ = (0, _.jsxs)(_.Fragment, {
      children: [
        _.star_rating == _.k_NotEnoughRatings &&
          _.Localize(`#Workshop_ItemDetails_NotEnoughRatings`),
        (_.star_rating ?? 0) > _.k_NotEnoughRatings &&
          _.LocalizePlural(
            `#Workshop_ItemDetails_NumRatings`,
            _.total_votes ?? 0,
            _(_.total_votes ?? 0),
          ),
      ],
    }),
    { preferences: _ } = _(),
    _ = !!_.data?.reported,
    _ = !!_.data?.vote_for,
    _ = !!_.data?.vote_against,
    _ = _?.data?.ignored.has(_.creator),
    _ =
      (_.bDimVotedUp && _) ||
      (_.bDimVotedDown && _) ||
      (_.bDimReported && _) ||
      (_.bDimSubscribed && _ && _.data) ||
      (_.bDimIgnoredCreator && _),
    _ = _();
  return (0, _.jsxs)(_, {
    className: (0, _.default)(_, _ && `hQAQZRtPRUc-`, _ && `_4689JT-he2o-`),
    children: [
      (0, _.jsx)(_, {
        hoverContent: _,
        popoverProps: {
          placement: `right-start`,
          width: `content`,
        },
        nDelayShowMS: 250,
        bTooltipMode: !0,
        children: (0, _.jsx)(_, {
          className: (0, _.default)(_, _ && `hQAQZRtPRUc-`),
          details: _,
          forcedWidth: _ ? 1024 : void 0,
        }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                details: _,
                className: _,
              }),
              _ &&
                (0, _.jsx)(_, {
                  details: _,
                  className: `TArgjJMgAxI-`,
                }),
              (0, _.jsx)(_, {
                details: _,
                className: _,
              }),
              (0, _.jsx)(_, {
                details: _,
                className: _,
              }),
              (0, _.jsx)(_, {
                details: _,
                className: _,
              }),
              _ &&
                (0, _.jsx)(_, {
                  className: `I4wDZC7HFQ0-`,
                }),
              _ &&
                (0, _.jsx)(_, {
                  className: `hs0g5InegGM-`,
                }),
              _ &&
                (0, _.jsx)(_, {
                  className: `hfgNPx20Ie4-`,
                }),
              _ &&
                (0, _.jsx)(_, {
                  className: `ZqNGeDS-pVc-`,
                }),
            ],
          }),
          (0, _.jsx)(_, {
            toolTipContent: _,
            direction: `top`,
            nBodyAlignment: 0,
            nDelayShowMS: 250,
            children: (0, _.jsx)(_, {
              details: _,
              className: _,
            }),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              focusable: !1,
              href: _.Details(_.publishedfileid),
              children: _.title,
            }),
          }),
          (0, _.jsx)(_, {
            details: _,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              _ &&
                !_ &&
                (0, _.jsx)(_, {
                  details: _,
                  className: `-YJTG5mf4Mw-`,
                }),
              !_ &&
                (0, _.jsx)(_, {
                  details: _,
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
var _ = (function (_) {
  return (
    (_[(_.k_RatingsData = 0)] = `k_RatingsData`),
    (_[(_.k_SubscriberData = 1)] = `k_SubscriberData`),
    (_[(_.k_LastUpdated = 2)] = `k_LastUpdated`),
    (_[(_.k_TimeCreated = 3)] = `k_TimeCreated`),
    (_[(_.k_PlaytimeData = 4)] = `k_PlaytimeData`),
    _
  );
})({});
function _(_) {
  let { details: _, rgAdditionalInfo: _ } = _,
    _ = (0, _.useContext)(_),
    _ = _(_.publishedfileid),
    _ = _(),
    _ = _.logged_in && _(_.file_type),
    _ = _(_.consumer_appid, 1, _.file_type, _.publishedfileid),
    _ = _ && _.cansubscribefrombrowseview,
    _ = (0, _.jsx)(_, {
      details: _,
    }),
    _ = (0, _.jsxs)(_.Fragment, {
      children: [
        _.star_rating == _.k_NotEnoughRatings &&
          _.Localize(`#Workshop_ItemDetails_NotEnoughRatings`),
        (_.star_rating ?? 0) > _.k_NotEnoughRatings &&
          _.LocalizePlural(
            `#Workshop_ItemDetails_NumRatings`,
            _.total_votes ?? 0,
            _(_.total_votes ?? 0),
          ),
      ],
    }),
    { preferences: _ } = _(),
    _ = !!_.data?.reported,
    _ = !!_.data?.vote_for,
    _ = !!_.data?.vote_against,
    _ = _?.data?.ignored.has(_.creator),
    _ =
      (_.bDimVotedUp && _) ||
      (_.bDimVotedDown && _) ||
      (_.bDimReported && _) ||
      (_.bDimSubscribed && _ && _.data) ||
      (_.bDimIgnoredCreator && _),
    _ = _();
  return (0, _.jsx)(_, {
    hoverContent: _,
    popoverProps: {
      placement: `right-start`,
      width: `content`,
    },
    nDelayShowMS: 250,
    bTooltipMode: !0,
    children: (0, _.jsxs)(_, {
      className: (0, _.default)(_, _ && `_4689JT-he2o-`),
      children: [
        (0, _.jsx)(_, {
          className: (0, _.default)(_),
          details: _,
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(_, {
                      className: _,
                      truncate: !0,
                      children: (0, _.jsx)(_, {
                        focusable: !1,
                        href: _.Details(_.publishedfileid),
                        children: _.title,
                      }),
                    }),
                    (0, _.jsx)(_, {
                      details: _,
                    }),
                  ],
                }),
                (0, _.jsxs)(_, {
                  direction: `row`,
                  className: _,
                  children: [
                    (0, _.jsx)(_, {
                      toolTipContent: _,
                      direction: `top`,
                      nBodyAlignment: 0,
                      nDelayShowMS: 250,
                      children: (0, _.jsx)(_, {
                        details: _,
                        className: _,
                      }),
                    }),
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        (0, _.jsx)(_, {
                          details: _,
                          className: _,
                        }),
                        _ &&
                          (0, _.jsx)(_, {
                            details: _,
                            className: `TArgjJMgAxI-`,
                          }),
                        (0, _.jsx)(_, {
                          details: _,
                          className: _,
                        }),
                        (0, _.jsx)(_, {
                          details: _,
                          className: _,
                        }),
                        (0, _.jsx)(_, {
                          details: _,
                          className: _,
                        }),
                        _ &&
                          (0, _.jsx)(_, {
                            className: `I4wDZC7HFQ0-`,
                          }),
                        _ &&
                          (0, _.jsx)(_, {
                            className: `hs0g5InegGM-`,
                          }),
                        _ &&
                          (0, _.jsx)(_, {
                            className: `hfgNPx20Ie4-`,
                          }),
                        _ &&
                          (0, _.jsx)(_, {
                            className: `ZqNGeDS-pVc-`,
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsx)(_, {
              details: _,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _?.map((_) => {
                switch (_) {
                  case 0:
                    return _;
                  case 3:
                    return (
                      _.Localize(`#Workshop_ItemDetails_TimestampCreated`) +
                      ` ` +
                      _(_.time_created ?? 0)
                    );
                  case 2:
                    return (
                      _.Localize(`#Workshop_ItemDetails_TimestampUpdated`) +
                      ` ` +
                      _(_.time_updated ?? 0)
                    );
                  case 1:
                    return (
                      _.Localize(
                        `#Workshop_ItemDetails_Stats_CurrentSubscribers`,
                      ) +
                      ` ` +
                      _(_.lifetime_subscriptions ?? 0)
                    );
                  case 4:
                    return (
                      _.Localize(
                        `#Workshop_ItemDetails_Stats_LifetimePlaytimeSessions`,
                      ) +
                      ` ` +
                      _(
                        _.lifetime_playtime_sessions
                          ? parseInt(_.lifetime_playtime_sessions)
                          : 0,
                      )
                    );
                }
              }),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                _ &&
                  !_ &&
                  (0, _.jsx)(_, {
                    details: _,
                    className: `-YJTG5mf4Mw-`,
                  }),
                !_ &&
                  (0, _.jsx)(_, {
                    details: _,
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
  let { details: _ } = _,
    { onBrowseHandler: _ } = _(),
    _ = _(_.tags ?? [], _.file_type),
    _ = (_) => {
      _.tag &&
        _({
          required_tags: [_.tag],
          excluded_tags: [],
        });
    };
  return _.length == 0
    ? null
    : (0, _.jsx)(_, {
        className: _,
        gap: `1`,
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              size: `1`,
              color: `dull`,
              onClick: () => _(_),
              children: _.display_name ?? _.name,
            },
            _._,
          ),
        ),
      });
}
function _(_) {
  let { details: _, strAppName: _ } = _,
    _ = _(_);
  _.length != 0 && (_ += `...`);
  let _ = (0, _.jsx)(_, {
      details: _,
    }),
    _ = _(),
    _ = _.logged_in && _(_.file_type);
  return (0, _.jsx)(_, {
    hoverContent: _,
    popoverProps: {
      placement: `right-start`,
      width: `content`,
    },
    nDelayShowMS: 250,
    bTooltipMode: !0,
    children: (0, _.jsxs)(_, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          className: _,
          details: _,
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(_, {
                      className: _,
                      truncate: !0,
                      children: (0, _.jsx)(_, {
                        focusable: !1,
                        href: _.Details(_.publishedfileid),
                        children: _.title,
                      }),
                    }),
                    (0, _.jsx)(_, {
                      details: _,
                    }),
                  ],
                }),
                (0, _.jsxs)(_, {
                  direction: `row`,
                  className: _,
                  children: [
                    (0, _.jsx)(_, {
                      details: _,
                      className: _,
                    }),
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        _ &&
                          (0, _.jsx)(_, {
                            details: _,
                          }),
                        (0, _.jsx)(_, {
                          details: _,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _,
            }),
            !!_?.length &&
              (0, _.jsx)(`div`, {
                className: `QQKaIv4Bs5E-`,
                children: _,
              }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                !_ &&
                  _ &&
                  (0, _.jsx)(_, {
                    details: _,
                    className: `-YJTG5mf4Mw-`,
                  }),
                !_ &&
                  (0, _.jsx)(_, {
                    details: _,
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
  let { details: _ } = _,
    _ = _(_);
  _.length != 0 && (_ += `...`);
  let { numChildItems: _, numChildCollections: _ } = _(_),
    _ = (0, _.jsx)(_, {
      details: _,
    }),
    _ = _();
  return (0, _.jsx)(_, {
    hoverContent: _,
    popoverProps: {
      placement: `right-start`,
      width: `content`,
    },
    nDelayShowMS: 250,
    bTooltipMode: !0,
    children: (0, _.jsxs)(_, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          className: _,
          details: _,
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(_, {
                      className: _,
                      truncate: !0,
                      children: (0, _.jsx)(_, {
                        focusable: !1,
                        href: _.Details(_.publishedfileid),
                        children: _.title,
                      }),
                    }),
                    (0, _.jsx)(_, {
                      details: _,
                    }),
                  ],
                }),
                (0, _.jsxs)(_, {
                  direction: `row`,
                  className: _,
                  children: [
                    (0, _.jsx)(_, {
                      details: _,
                      className: _,
                    }),
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        (0, _.jsx)(_, {
                          details: _,
                        }),
                        (0, _.jsx)(_, {
                          details: _,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _,
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                _ != 0 &&
                  (0, _.jsx)(`div`, {
                    children: _.LocalizePlural(
                      `#Workshop_Collection_NumChildItems`,
                      _,
                      _(_),
                    ),
                  }),
                _ != 0 &&
                  (0, _.jsx)(`div`, {
                    children: _.LocalizePlural(
                      `#Workshop_Collection_NumChildCollections`,
                      _,
                      _(_),
                    ),
                  }),
              ],
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children:
                !_ &&
                (0, _.jsx)(_, {
                  details: _,
                }),
            }),
          ],
        }),
      ],
    }),
  });
}
export { _, _, _, _, _, _ };
