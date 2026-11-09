_();
var _ = `Pmnq1rOzOUE-`,
  _ = `-gmo0nuxq4Q-`,
  _ = _();
function _(_) {
  let _ = _(
    {
      ..._,
      className: _.className,
    },
    _,
  );
  return (0, _.jsx)(`img`, {
    ..._,
  });
}
var _ = [
    ..._,
    {
      prop: `objectFit`,
      responsive: !0,
      className: _,
      cssProperty: `--object-fit`,
    },
    {
      prop: `objectPosition`,
      responsive: !0,
      className: _,
      cssProperty: `--object-position`,
    },
  ],
  _ = [`r18`, `x18`],
  _ = `_-6QLnkfy7Ek-`,
  _ = `X25Xbx9f0Nk-`,
  _ = `NLQWJ1Q123Q-`,
  _ = `NugbRHDmWlQ-`,
  _ = `omNQQqH3Nvc-`;
function _(_) {
  let { rating: _ } = _,
    { strType: _, strRating: _ } = _;
  if (_ === `pending`)
    return (0, _.jsxs)(`div`, {
      className: _(_, `GameRating`),
      children: [
        (0, _.jsx)(_, {
          direction: `row`,
          justify: `between`,
          className: _,
          children: _.Localize(`#GameRating_Pending`),
        }),
        (0, _.jsx)(_, {
          strType: _,
        }),
      ],
    });
  let _ = _ === `crl` ? [_(_)] : _.rgDescriptors,
    _ = _.bOnlineMusicNotRated || _.bOnlineInteractionsNotRated;
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `3`,
    className: _,
    children: [
      _ === `dejus`
        ? _.nRequiredAge > 0 &&
          (0, _.jsx)(_, {
            size: `3`,
            contrast: `title`,
            className: _(`K2Qb5vlU86E-`, `RequiredAge`),
            children: _.Localize(`#GameRating_Age_DEJUS`, _.nRequiredAge),
          })
        : _.bBanned && (0, _.jsx)(_, {}),
      !_.bBanned &&
        (0, _.jsxs)(_, {
          direction: `row`,
          gap: `3`,
          className: void 0,
          children: [
            (0, _.jsx)(`div`, {
              className: `_8pcH-VShBN8-`,
              children: (0, _.jsx)(_, {
                rating: _,
              }),
            }),
            (0, _.jsxs)(_, {
              direction: `column`,
              gap: `2`,
              children: [
                _.length > 0 &&
                  (0, _.jsx)(_, {
                    _: `p`,
                    contrast: `body`,
                    className: `NugbRHDmWlQ-`,
                    children: _.join(`
`),
                  }),
                (0, _.jsx)(_, {
                  rating: _,
                }),
                _ &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      _.bOnlineMusicNotRated &&
                        (0, _.jsx)(_, {
                          _: `p`,
                          contrast: `body`,
                          className: `NugbRHDmWlQ-`,
                          children: _.Localize(`#GameRating_OnlineMusicNotice`),
                        }),
                      _.bOnlineInteractionsNotRated &&
                        (0, _.jsx)(_, {
                          _: `p`,
                          contrast: `body`,
                          className: `NugbRHDmWlQ-`,
                          children: _.Localize(
                            `#GameRating_OnlineInteractionsNotice`,
                          ),
                        }),
                    ],
                  }),
                (0, _.jsx)(_, {
                  rating: _,
                }),
              ],
            }),
          ],
        }),
      (0, _.jsx)(_, {
        strType: _,
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(_, {
    direction: `row`,
    justify: `between`,
    className: _,
    children: _.LocalizeReact(
      `#GameRating_ContentClassification`,
      (0, _.jsx)(`span`, {
        className: _,
        children: _.Localize(`#GameRating_Banned`),
      }),
    ),
  });
}
function _(_) {
  let {
    strType: _,
    strRating: _,
    strImageURL: _,
    strImageTarget: _,
  } = _.rating;
  if (_ === `0`)
    return (0, _.jsx)(`div`, {
      className: _,
      children: _.Localize(`#GameRating_AllAges`),
    });
  if (!_) return null;
  let _ = _(_, _);
  return _
    ? (0, _.jsx)(_, {
        href: _,
        onOKActionDescription: _,
        children: (0, _.jsx)(_, {
          src: _,
          alt: _,
        }),
      })
    : (0, _.jsx)(_, {
        src: _,
        alt: _,
      });
}
function _(_) {
  let _ = (_.rating.rgDescriptorImages ?? [])
    .map((_) => _(_))
    .filter((_) => _ !== void 0);
  return _.length === 0
    ? null
    : (0, _.jsx)(_, {
        direction: `row`,
        wrap: `wrap`,
        align: `start`,
        gap: `1`,
        children: _.map((_, _) =>
          (0, _.jsx)(
            _,
            {
              src: _.strURL,
              alt: _.strAlt,
              title: _.strAlt,
            },
            _,
          ),
        ),
      });
}
function _(_) {
  let {
      strType: _,
      rgRatingInteractiveElements: _,
      rgSurveyInteractiveElements: _,
    } = _.rating,
    _ = _ === _,
    _ = _ ? _ : _;
  return _.length === 0
    ? null
    : (0, _.jsx)(_, {
        strTitle: _.Localize(
          _
            ? `#GameRating_InteractiveElements_Title`
            : `#GameRating_ContentCategory_InteractiveElements`,
        ),
        rgElements: _,
      });
}
function _(_) {
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(_, {
        _: `p`,
        contrast: `note`,
        children: _.strTitle,
      }),
      (0, _.jsx)(_, {
        _: `p`,
        contrast: `body`,
        className: _,
        children: _.rgElements.join(_.Localize(`#GameRating_ListDelimiter`)),
      }),
    ],
  });
}
function _(_) {
  let _ = _(_.strType);
  return _
    ? (0, _.jsx)(_, {
        contrast: `body`,
        size: `2`,
        className: `Agency`,
        children: _.Localize(`#GameRating_RatingBy`, _),
      })
    : null;
}
function _(_) {
  return (0, _.jsx)(_, {
    rating: _(_),
  });
}
function _(_) {
  let { agency: _, strRating: _, rgContentCategories: _ } = _,
    _ = _(_);
  return {
    strType: _.key,
    strRating: _,
    bBanned: !1,
    nRequiredAge: _.key == `dejus` ? _.nRequiredAge : 0,
    rgDescriptors: _.length > 0 ? [] : _.rgDescriptors,
    rgDescriptorImages: _,
    bOnlineMusicNotRated: _.bDisplayOnlineMusicNotice,
    bOnlineInteractionsNotRated: _.bDisplayOnlineInteractionsNotice,
    rgRatingInteractiveElements: _(_.rgInteractiveElements ?? []),
    rgSurveyInteractiveElements: _(_ ?? []),
    strImageURL: _(_, _) || void 0,
    strImageTarget: _.info_url,
  };
}
function _(_) {
  return _.agency.key == `cero`
    ? _.rgDescriptorImages?.length
      ? _.rgDescriptorImages
      : _(_.rgDescriptors)
    : [];
}
function _(_) {
  let { strRegion: _ } = _;
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `2`,
    children: [
      (0, _.jsx)(_, {}),
      (0, _.jsx)(_, {
        _: `p`,
        children: _.Localize(`#GameRating_Banned_Desc`, _),
      }),
    ],
  });
}
var _ = [3, 4],
  _ = [`oflc`, `steam_australia`],
  _ = [`bbfc`, `oflc`];
function _(_) {
  return _.some((_) => _.includes(_))
    ? _.map((_) => _(_)?.region).filter((_) => !!_)
    : [];
}
function _(_, _) {
  return _.includes(_) && _.includes(_.toLowerCase());
}
function _(_) {
  return !!_;
}
function _(_, _) {
  let _ = _.rating_agency ? _(_.rating_agency) : void 0;
  if (_ && _(_.rating))
    return {
      agency: _,
      bGenerated: !1,
      strRating: _.rating ?? ``,
      nRequiredAge: _.required_age ?? 0,
      rgDescriptors: _.aux_data?.descriptors ?? [],
      rgDescriptorImages: _.aux_data?.descriptor_images ?? [],
      bDisplayOnlineMusicNotice: !!_.aux_data?.esrb_online_music_not_rated,
      bDisplayOnlineInteractionsNotice:
        !!_.aux_data?.esrb_online_interactions_not_rated,
      rgInteractiveElements: _.aux_data?.interactive_elements ?? [],
      rgContentCategories: _,
    };
}
function _(_, _, _, _) {
  let _ = new Map(),
    _ = _?.content_categories ?? [],
    _ = (_) => {
      let _ = _.get(_);
      return (
        _ ||
          ((_ = {
            strRegion: _,
            bBanned: !1,
            bInternalOnly: !1,
          }),
          _.set(_, _)),
        _
      );
    };
  for (let _ of _?.ratings ?? []) {
    let _ = _.rating_agency ? _(_.rating_agency) : void 0,
      _ = !!_ && _(_);
    if (!_ || (_ && !_)) continue;
    let _ = _(_.region);
    ((_.bBanned = _.bBanned || !!_.banned),
      (_.bInternalOnly = _.bInternalOnly || _),
      !_.banned &&
        _(_.rating) &&
        (_.rating = {
          agency: _,
          bGenerated: !0,
          strRating: _.rating ?? ``,
          nRequiredAge: _.required_age ?? 0,
          rgDescriptors: _.descriptors ?? [],
          rgDescriptorImages: [],
          bDisplayOnlineMusicNotice: !1,
          bDisplayOnlineInteractionsNotice: !1,
          rgInteractiveElements: [],
          rgContentCategories: _,
        }));
  }
  for (let _ of _ ?? []) {
    if (_.source != 1) continue;
    let _ = _(_, _);
    if (_) {
      let _ = _(_.agency.region);
      (_.rating?.bGenerated && (_.ratingOverridden = _.rating),
        (_.rating = _),
        (_.bInternalOnly = !1));
    }
  }
  for (let _ of _.values())
    _.rating &&
      _(_.rating.agency.key, _.rating.strRating) &&
      (_.eAgeVerification = `rating`);
  for (let _ of _(_ ?? [])) {
    let _ = _(_);
    _.eAgeVerification ??= `adultcontent`;
  }
  return Array.from(_.values())
    .filter((_) => _.bBanned || !!_.rating || !!_.eAgeVerification)
    .sort((_, _) => _.strRegion.localeCompare(_.strRegion));
}
