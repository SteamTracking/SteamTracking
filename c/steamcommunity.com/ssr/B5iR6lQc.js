var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `FARNJOhoPVw-`,
  _ = `ElNPWiho-mM-`,
  _ = `Mf04Mo5zORY-`,
  _ = `snLzX5LThtA-`,
  _ = `IJ1w5GUmBkU-`,
  _ = `G1UlW-HtkuA-`,
  _ = `BnJse4Jtj94-`,
  _ = `_9JBx6tfYpwc-`,
  _ = `Mf5YrU7S1dM-`,
  _ = `yJQP5CPJ-kQ-`,
  _ = _();
function _(_) {
  let { dataTitle: _, dataValue: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let { details: _, onSelectTag: _ } = _,
    { onBrowseHandler: _ } = _(),
    _ = _(_.tags ?? [], _.file_type),
    _ = (_) => {
      _.name &&
        (_(),
        _({
          required_tags: [_.name],
          excluded_tags: [],
        }));
    };
  return _.length == 0
    ? null
    : (0, _.jsxs)(_, {
        direction: `column`,
        paddingTop: `3`,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#Workshop_ItemDetails_Tags_Title`),
          }),
          (0, _.jsx)(_, {
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
          }),
        ],
      });
}
function _(_) {
  let { details: _ } = _,
    {
      numChildItems: _,
      numChildCollections: _,
      rgChildIDs: _,
      rgChildCollectionIDs: _,
    } = _(_),
    [_, _] = (0, _.useState)(0),
    _ = _(
      (0, _.useCallback)(
        (_) => {
          let _ = Math.floor(_.contentRect.width / 102) - 1;
          _(_);
        },
        [102],
      ),
    ),
    [_, _] = (0, _.useState)(0),
    _ = _(
      (0, _.useCallback)(
        (_) => {
          let _ = Math.floor(_.contentRect.width / 102) - 1;
          _(_);
        },
        [102],
      ),
    ),
    _ = _.LocalizePlural(`#Workshop_Collection_NumChildItems`, _, _(_));
  _.file_type == 0 &&
    (_ = _.Localize(`#Workshop_ItemDetails_ItemDependencies`));
  let _ = _.LocalizePlural(`#Workshop_Collection_NumChildCollections`, _, _(_));
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.length != 0 &&
        (0, _.jsx)(_.Fragment, {
          children: (0, _.jsxs)(`div`, {
            className: `_2VK8hAwlDEs-`,
            children: [
              (0, _.jsx)(`div`, {
                className: `G1UlW-HtkuA-`,
                children: _,
              }),
              (0, _.jsxs)(_, {
                className: `K9zqQ-ov-0s-`,
                direction: `row`,
                gap: `1`,
                ref: _,
                children: [
                  _.slice(0, _).map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        publishedfileid: _,
                        className: `SiYGAgf68UA-`,
                        imageClassName: `gYa60zhNWGg-`,
                        forcedWidth: 100,
                      },
                      _,
                    ),
                  ),
                  _ < _ &&
                    (0, _.jsx)(`div`, {
                      className: `mthASJ0xzwI-`,
                      children: _.Localize(
                        `#Workshop_Collection_ViewMore`,
                        _(_ - _),
                      ),
                    }),
                ],
              }),
            ],
          }),
        }),
      _.length != 0 &&
        (0, _.jsx)(_.Fragment, {
          children: (0, _.jsxs)(`div`, {
            className: `_2VK8hAwlDEs-`,
            children: [
              (0, _.jsx)(`div`, {
                className: `G1UlW-HtkuA-`,
                children: _,
              }),
              (0, _.jsxs)(_, {
                className: `K9zqQ-ov-0s-`,
                direction: `row`,
                gap: `1`,
                ref: _,
                children: [
                  _.slice(0, _).map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        publishedfileid: _,
                        className: `SiYGAgf68UA-`,
                        imageClassName: `gYa60zhNWGg-`,
                        forcedWidth: 100,
                      },
                      _,
                    ),
                  ),
                  _ < _ &&
                    (0, _.jsx)(`div`, {
                      className: `mthASJ0xzwI-`,
                      children: _.Localize(
                        `#Workshop_Collection_ViewMore`,
                        _(_ - _),
                      ),
                    }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
function _(_) {
  let { appid: _ } = _,
    _ = _(`${_.STORE_BASE_URL}app/${_}/`),
    { data: _ } = _({
      appid: _,
    }),
    { data: _ } = _({
      appid: _,
    });
  if (!_ || !_) return null;
  let _ = _(_, `small_capsule`);
  return (0, _.jsx)(_, {
    href: _,
    children: (0, _.jsx)(_, {
      src: _,
      alt: _.name ?? ``,
    }),
  });
}
function _(_) {
  let { details: _ } = _,
    _ = _(_.publishedfileid),
    _ = (0, _.useMemo)(
      () => _.data?.filter((_) => _.relationship == 1) ?? [],
      [_.data],
    );
  return _.length == 0
    ? null
    : (0, _.jsx)(_.Fragment, {
        children: (0, _.jsxs)(_, {
          controller: `sharedfiles`,
          method: `filedetails`,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _.Localize(`#Workshop_ItemDetails_RequiredDLC_Desc`),
            }),
            (0, _.jsx)(_, {
              className: _,
              direction: `row`,
              gap: `1`,
              wrap: `wrap`,
              children: _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    appid: _.appid ?? 0,
                  },
                  _.appid,
                ),
              ),
            }),
          ],
        }),
      });
}
function _(_) {
  let { details: _, onClose: _, adminAppID: _, controls: _ } = _,
    { onBrowseHandler: _ } = _(),
    _ = _.publishedfileid,
    _ = _(_, !0, _),
    _ = _(_.file_type),
    _ = _({
      include_images: !1,
    }),
    _ = (0, _.useMemo)(() => {
      if (!_.data?.file_description) return ``;
      let _ = _.data?.file_type == 9 ? 1e3 : 500;
      if (_.data.file_description.length > _) {
        let _ = [..._.data.file_description].slice(0, _).join(``) + `...`;
        return _.ParseBBCode(_, null);
      }
      return _.data.file_description;
    }, [_.data?.file_description, _.data?.file_type, _]),
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useCallback)((_) => {
      let _ = _.target.scrollHeight > _.target.clientHeight;
      _(_);
    }, []),
    _ = _(_),
    _ = () => {
      _({
        section: `readytouseitems`,
        childpublishedfileid: _.publishedfileid,
      }),
        _();
    },
    _ = !0;
  switch (_.file_type) {
    case 2:
    case 9:
    case 10:
      _ = !1;
  }
  return (0, _.jsxs)(_, {
    className: _,
    direction: `column`,
    children: [
      (0, _.jsx)(_, {
        className: _,
        onActivate: _,
        children: (0, _.jsx)(_, {}),
      }),
      _.data &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)(_, {
              className: `_12HeSvxAVxw-`,
              direction: {
                initial: `column`,
                _: `row`,
              },
              gap: `5`,
              children: [
                _.data &&
                  _ &&
                  (0, _.jsx)(_, {
                    details: _.data,
                    className: `PG8eWT98j-E-`,
                  }),
                (0, _.jsxs)(_, {
                  className: `ZF1OEu-0zDw-`,
                  direction: `column`,
                  gap: `1`,
                  children: [
                    (0, _.jsxs)(_, {
                      className: `ICgWfpvzXq0-`,
                      justify: `between`,
                      children: [
                        (0, _.jsx)(_, {
                          size: {
                            initial: `5`,
                            _: `6`,
                            _: `7`,
                          },
                          weight: `heavy`,
                          children: (0, _.jsx)(_, {
                            href: _.Details(_.publishedfileid),
                            children: _.title,
                          }),
                        }),
                        _.file_type != 1 &&
                          (0, _.jsxs)(_, {
                            direction: `column`,
                            align: `end`,
                            className: `_0WLDCeFS89w-`,
                            children: [
                              (0, _.jsx)(_, {
                                details: _,
                                className: `K3iOPiZMgPo-`,
                              }),
                              _.star_rating == _.k_NotEnoughRatings &&
                                _.Localize(
                                  `#Workshop_ItemDetails_NotEnoughRatings`,
                                ),
                              (0, _.jsx)(_, {
                                size: {
                                  initial: `3`,
                                  _: `4`,
                                },
                                children:
                                  (_.star_rating ?? 0) > _.k_NotEnoughRatings &&
                                  _.LocalizePlural(
                                    `#Workshop_ItemDetails_NumRatings`,
                                    _.total_votes ?? 0,
                                    _(_.total_votes ?? 0),
                                  ),
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, _.jsx)(_, {
                      details: _,
                    }),
                    (0, _.jsxs)(_, {
                      direction: `row`,
                      gap: `8`,
                      paddingTop: `3`,
                      className: `B0grrs7WUy0-`,
                      children: [
                        (0, _.jsxs)(`div`, {
                          className: `uKb55YlDtVY-`,
                          children: [
                            (0, _.jsx)(_, {
                              dataTitle: _.Localize(
                                `#Workshop_ItemDetails_TimestampCreated`,
                              ),
                              dataValue: _(_.time_created ?? 0),
                            }),
                            _.time_created != _.time_updated &&
                              (0, _.jsx)(_, {
                                dataTitle: _.Localize(
                                  `#Workshop_ItemDetails_TimestampUpdated`,
                                ),
                                dataValue: _(_.time_updated ?? 0),
                              }),
                            _.file_type == 0 &&
                              _.file_size &&
                              (0, _.jsx)(_, {
                                dataTitle: _.Localize(
                                  `#Workshop_ItemDetails_FileSize`,
                                ),
                                dataValue: _(_.file_size, {
                                  nDigitsAfterDecimal: 3,
                                }),
                              }),
                          ],
                        }),
                        (0, _.jsxs)(`div`, {
                          className: `uKb55YlDtVY-`,
                          children: [
                            _.views != 0 &&
                              (0, _.jsx)(_, {
                                dataTitle: _.Localize(
                                  `#Workshop_ItemDetails_Stats_UniqueVisitors`,
                                ),
                                dataValue: _(_.views ?? 0),
                              }),
                            _.subscriptions != 0 &&
                              (0, _.jsx)(_, {
                                dataTitle: _.Localize(
                                  `#Workshop_ItemDetails_Stats_CurrentSubscribers`,
                                ),
                                dataValue: _(_.subscriptions ?? 0),
                              }),
                            _.favorited != 0 &&
                              (0, _.jsx)(_, {
                                dataTitle: _.Localize(
                                  `#Workshop_ItemDetails_Stats_CurrentFavorites`,
                                ),
                                dataValue: _(_.favorited ?? 0),
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsx)(_, {
                      details: _,
                      onSelectTag: _,
                    }),
                    (0, _.jsx)(_, {
                      gap: `1`,
                      direction: `column`,
                      paddingTop: `3`,
                      className: (0, _.default)(
                        `_3xNZB2yM8Qc-`,
                        _ && `WNFzFMvJ3V4-`,
                      ),
                      ref: _,
                      children:
                        _ &&
                        (0, _.jsx)(`div`, {
                          className: (0, _.default)(
                            `huRHJiZfYko-`,
                            `IrN0YbAnJsw-`,
                          ),
                          children: (0, _.jsx)(_, {
                            size: {
                              initial: `3`,
                              _: `4`,
                            },
                            children: _,
                          }),
                        }),
                    }),
                    (0, _.jsxs)(_, {
                      gap: `1`,
                      direction: `column`,
                      paddingTop: `3`,
                      className: `zzv0VHl-hZg-`,
                      children: [
                        (0, _.jsx)(_, {
                          details: _.data ?? _,
                        }),
                        (0, _.jsx)(_, {
                          details: _.data ?? _,
                        }),
                        (0, _.jsx)(_, {
                          details: _,
                          onClick: _,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsx)(_, {
              className: `vLpNamDBSBE-`,
              direction: `row`,
              gap: `3`,
              children:
                _ === void 0
                  ? (0, _.jsxs)(_.Fragment, {
                      children: [
                        _ &&
                          (0, _.jsx)(_, {
                            direction: `row`,
                            gap: `1`,
                            children: (0, _.jsx)(_, {
                              details: _.data ?? _,
                              size: `2`,
                            }),
                          }),
                        (0, _.jsxs)(_, {
                          direction: `row`,
                          gap: `1`,
                          children: [
                            (0, _.jsx)(_, {
                              details: _,
                              size: `2`,
                            }),
                            (0, _.jsx)(_, {
                              details: _,
                              size: `2`,
                            }),
                          ],
                        }),
                        (0, _.jsx)(_, {
                          details: _,
                          size: `2`,
                        }),
                        (0, _.jsx)(_, {
                          details: _,
                          size: `2`,
                        }),
                        (0, _.jsx)(_, {
                          details: _.data,
                          size: `2`,
                          className: `E2ONW5pdzp8-`,
                          classNameReaction: `bFR2YZzwFQ8-`,
                        }),
                      ],
                    })
                  : _,
            }),
          ],
        }),
      !_.data &&
        (0, _.jsx)(_, {
          justify: `center`,
          align: `center`,
          flexGrow: `1`,
          children: (0, _.jsx)(_, {
            size: `5`,
          }),
        }),
    ],
  });
}
function _(_) {
  let { rgDetails: _ } = _,
    { quickViewIndex: _, setQuickViewIndex: _, closeQuickView: _ } = _();
  if (_ < 0) return null;
  let _ = _[_];
  return (0, _.jsxs)(_.Root, {
    onClose: _,
    className: _,
    children: [
      (0, _.jsx)(_, {
        className: _,
        onActivate: _,
      }),
      (0, _.jsxs)(_, {
        className: _,
        gap: `5`,
        direction: `row`,
        children: [
          (0, _.jsx)(_, {
            color: `accent`,
            variant: `ghost`,
            disabled: _ == 0,
            onClick: () => _(_ - 1),
            size: `3`,
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(
            _,
            {
              details: _,
              onClose: _,
            },
            _.publishedfileid,
          ),
          (0, _.jsx)(_, {
            color: `accent`,
            variant: `ghost`,
            disabled: _ == _.length - 1,
            onClick: () => _(_ + 1),
            size: `3`,
            children: (0, _.jsx)(_, {}),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { rgPublishedFileIDs: _, adminAppID: _, renderControls: _ } = _,
    { quickViewIndex: _, setQuickViewIndex: _, closeQuickView: _ } = _(),
    _ = _[_];
  return _
    ? (0, _.jsxs)(_.Root, {
        onClose: _,
        className: _,
        children: [
          (0, _.jsx)(_, {
            className: _,
            onActivate: _,
          }),
          (0, _.jsxs)(_, {
            className: _,
            gap: `5`,
            direction: `row`,
            children: [
              (0, _.jsx)(_, {
                color: `accent`,
                variant: `ghost`,
                disabled: _ == 0,
                onClick: () => _(_ - 1),
                size: `3`,
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsx)(
                _,
                {
                  publishedfileid: _,
                  adminAppID: _,
                  controls: _?.(_),
                  onClose: _,
                },
                _,
              ),
              (0, _.jsx)(_, {
                color: `accent`,
                variant: `ghost`,
                disabled: _ == _.length - 1,
                onClick: () => _(_ + 1),
                size: `3`,
                children: (0, _.jsx)(_, {}),
              }),
            ],
          }),
        ],
      })
    : null;
}
function _(_) {
  let { publishedfileid: _, adminAppID: _, controls: _, onClose: _ } = _,
    _ = _(_, !0, _);
  return _.data
    ? (0, _.jsx)(_, {
        details: _.data,
        onClose: _,
        adminAppID: _,
        controls: _,
      })
    : (0, _.jsx)(_, {
        className: _,
        justify: `center`,
        align: `center`,
        flexGrow: `1`,
        children: _.isError
          ? _.Localize(`#Workshop_Error_ItemGeneral`)
          : (0, _.jsx)(_, {
              size: `5`,
            }),
      });
}
export { _, _ };
