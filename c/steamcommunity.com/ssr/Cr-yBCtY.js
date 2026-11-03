var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `_6eeyI5GdLuE-`,
  _ = `oWiiaaI9fkw-`,
  _ = `scA-GBbRsPY-`,
  _ = `fDVXoViRTZo-`,
  _ = `M8XqCyWK3D8-`,
  _ = `I2YQ9xth4Xw-`,
  _ = `oVXBwcVlkPo-`,
  _ = `_6ItDAUoePg4-`,
  _ = `_2z6k50vGJ-A-`,
  _ = `kx3XQJqkhPg-`,
  _ = `_6ViPtnvZoK4-`,
  _ = `OPg4qyEtLZw-`,
  _ = `OTIPmkyPaFs-`,
  _ = `_2koaVKcU7Tc-`,
  _ = `T8HzJ3QBNOc-`,
  _ = `UMRF8cKyCcM-`,
  _ = `_3ac-5rgZBsE-`,
  _ = `_7pYvJm0lCAA-`,
  _ = `za-N5FU3llE-`,
  _ = `DO1MjLyve-E-`,
  _ = `ZmRMNb-He7c-`,
  _ = `_5CceBD1-9Kg-`,
  _ = `uOiDfb20CKk-`,
  _ = `Lpc4vq9SDgQ-`,
  _ = `gFSdAS--WPM-`,
  _ = `JZB5XG39ySI-`,
  _ = `npbJI4-frMU-`,
  _ = `-I4l6onSmQc-`,
  _ = `cSl7Vd6a-Es-`,
  _ = `JptcMEODeH0-`,
  _ = `mVLn2-uf-cM-`,
  _ = `-uAkjiYoPHk-`,
  _ = `P1TBqOKwxcs-`,
  _ = `mH2s1Tu6wP8-`,
  _ = `NO2bjhzH16U-`,
  _ = `Ng-XNTIHCBo-`,
  _ = `PALVkJ75x-E-`,
  _ = `licK9svwE9g-`,
  _ = `rUAq16oV4IQ-`,
  _ = `_8FPWf5lMr10-`,
  _ = `zRfFu-JZ0ZE-`,
  _ = `_4byJmcfiCyk-`,
  _ = `JnRpQcV2qgY-`,
  _ = `pkDO-9qkfZ4-`,
  _ = `v6f5WFVHWHg-`,
  _ = `Ze1N757DZPE-`,
  _ = `mXSd7cWuN74-`,
  _ = `_2u8M7hDdjWk-`,
  _ = `_7T8TrJXG5y0-`,
  _ = _();
function _(_) {
  let { children: _, onClear: _, color: _ = `dull`, icon: _ } = _;
  return (0, _.jsxs)(_, {
    onClick: _,
    color: _,
    size: `1`,
    children: [
      _,
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      (0, _.jsx)(_, {
        className: _,
      }),
    ],
  });
}
function _(_) {
  let { onBrowseHandler: _ } = _(),
    {
      category: _,
      tag: _,
      bRequired: _,
      rgRequiredTags: _,
      rgExcludedTags: _,
    } = _,
    _ = (0, _.useCallback)(() => {
      if (_) {
        let _ = _.filter(
          (_) => _.toLocaleLowerCase() !== _.name.toLocaleLowerCase(),
        );
        _({
          required_tags: _,
          page: 1,
        });
      } else {
        let _ = _.filter(
          (_) => _.toLocaleLowerCase() !== _.name.toLocaleLowerCase(),
        );
        _({
          excluded_tags: _,
          page: 1,
        });
      }
    }, [_, _, _, _.name, _]),
    _ =
      _.length == 0
        ? _.display_name
        : _.Localize(`#Workshop_SearchResults_Tag`, _, _.display_name ?? ``),
    _ = _
      ? (0, _.jsx)(_, {
          className: (0, _.default)(_, _),
        })
      : (0, _.jsx)(_, {
          className: (0, _.default)(_, _),
        });
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      onClear: _,
      icon: _,
      children: _,
    }),
  });
}
function _(_) {
  let { rgTagCategories: _, rgRequiredTags: _, rgExcludedTags: _ } = _;
  if (_.length == 0 && _.length == 0) return null;
  let _ = [];
  for (let _ = 0; _ < _.length; ++_) {
    let _ = _[_],
      _ = _(_);
    for (let _ = 0; _ < _.tags.length; ++_) {
      let _ = _.tags[_];
      _.findIndex((_) => _.name.toLocaleLowerCase() == _.toLocaleLowerCase()) !=
        -1 &&
        _.push({
          tag: _,
          category: _,
          bRequired: !0,
        }),
        _.findIndex(
          (_) => _.name.toLocaleLowerCase() == _.toLocaleLowerCase(),
        ) != -1 &&
          _.push({
            tag: _,
            category: _,
            bRequired: !1,
          });
    }
  }
  return _.length == 0
    ? null
    : (0, _.jsx)(_.Fragment, {
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              tag: _.tag,
              category: _.category,
              rgRequiredTags: _,
              rgExcludedTags: _,
              bRequired: _.bRequired,
            },
            _.tag._,
          ),
        ),
      });
}
function _(_, _) {
  return !_ || ((_.timestamp_start || 0) == 0 && (_.timestamp_end || 0) == 0)
    ? null
    : _.timestamp_start != 0 && _.timestamp_end != 0
      ? _.Localize(
          _ + `_Between`,
          _(_.timestamp_start || 0, {
            timeZone: `UTC`,
          }),
          _(_.timestamp_end || 0, {
            timeZone: `UTC`,
          }),
        )
      : _.timestamp_start == 0
        ? _.Localize(
            _ + `_Before`,
            _(_.timestamp_end || 0, {
              timeZone: `UTC`,
            }),
          )
        : _.Localize(
            _ + `_After`,
            _(_.timestamp_start || 0, {
              timeZone: `UTC`,
            }),
          );
}
function _(_) {
  let { onBrowseHandler: _ } = _(),
    _ = _(`#Workshop_DateFilter_TimeCreated`, _.date_range_created),
    _ = _(`#Workshop_DateFilter_TimeUpdated`, _.date_range_updated);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          onClear: () =>
            _({
              date_range_created: void 0,
              page: 1,
            }),
          children: _,
        }),
      _ &&
        (0, _.jsx)(_, {
          onClear: () =>
            _({
              date_range_updated: void 0,
              page: 1,
            }),
          children: _,
        }),
    ],
  });
}
function _(_) {
  let { leading: _, rgParameters: _ } = _;
  return !_ && _.length == 0
    ? null
    : (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(_, {
          dullColor: {
            8: `rgba(0,0,0,0.3)`,
          },
          children: [
            _,
            _.length != 0 &&
              (0, _.jsx)(_, {
                className: `M8XqCyWK3D8-`,
                "flow-children": `geometric`,
                focusableIfEmpty: !0,
                children: _,
              }),
          ],
        }),
      });
}
export {
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
};
