var _ = _(_(), 1),
  _ = _(),
  _ = (_) =>
    (0, _.jsx)(_, {
      icon: !0,
      ..._,
    }),
  _ = `oaNi99lQw-c-`,
  _ = `tPx-rqsSefg-`;
function _(_) {
  let _ = [];
  return (
    _.cAdded &&
      _.push(
        _.Localize(`#ContentSurvey_History_Changes_Added`, String(_.cAdded)),
      ),
    _.cRemoved &&
      _.push(
        _.Localize(
          `#ContentSurvey_History_Changes_Removed`,
          String(_.cRemoved),
        ),
      ),
    _.cChanged &&
      _.push(
        _.Localize(
          `#ContentSurvey_History_Changes_Changed`,
          String(_.cChanged),
        ),
      ),
    _.length > 0
      ? _.join(`, `)
      : _.Localize(`#ContentSurvey_History_Changes_None`)
  );
}
function _(_) {
  let _ = new Map();
  for (let _ of _.rgDiff) {
    let _ = _.get(_.strSection);
    _ ? _.push(_) : _.set(_.strSection, [_]);
  }
  return (0, _.jsx)(_, {
    direction: `column`,
    gap: `5`,
    children: Array.from(_, ([_, _]) =>
      (0, _.jsxs)(
        _,
        {
          children: [
            (0, _.jsx)(_, {
              size: `3`,
              marginBottom: `3`,
              className: _,
              children: _,
            }),
            (0, _.jsx)(_, {
              columns: `minmax( 0, 1fr ) minmax( 0, 2fr )`,
              gapX: `5`,
              gapY: `3`,
              children: _.map((_, _) =>
                (0, _.jsxs)(
                  _.Fragment,
                  {
                    children: [
                      (0, _.jsx)(_, {
                        children: _.strQuestion,
                      }),
                      (0, _.jsx)(_, {
                        _: `div`,
                        whiteSpace: `pre-line`,
                        children: (0, _.jsx)(_, {
                          row: _,
                        }),
                      }),
                    ],
                  },
                  _,
                ),
              ),
            }),
          ],
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let _ = _.rgRows.map((_) => ({
    strSection: _.strSection,
    strQuestion: _.strQuestion,
    eChange: `unchanged`,
    strOld: _.strAnswer,
    strNew: _.strAnswer,
  }));
  return (0, _.jsx)(_, {
    rgDiff: _,
  });
}
function _(_) {
  let { row: _ } = _;
  switch (_.eChange) {
    case `added`:
      return (0, _.jsx)(`ins`, {
        className: _,
        children: _.strNew,
      });
    case `removed`:
      return (0, _.jsx)(`del`, {
        className: _,
        children: _.strOld,
      });
    case `changed`:
      return (0, _.jsx)(_.Fragment, {
        children: (_.rgTextDiff ?? []).map((_, _) =>
          _.eChange == `added`
            ? (0, _.jsx)(
                `ins`,
                {
                  className: _,
                  children: _.strText,
                },
                _,
              )
            : _.eChange == `removed`
              ? (0, _.jsx)(
                  `del`,
                  {
                    className: _,
                    children: _.strText,
                  },
                  _,
                )
              : (0, _.jsx)(
                  _.Fragment,
                  {
                    children: _.strText,
                  },
                  _,
                ),
        ),
      });
    default:
      return (0, _.jsx)(_.Fragment, {
        children: _.strNew,
      });
  }
}
var _ = _(
  _((_, _) => {
    var _ = -1,
      _ = 1,
      _ = 0;
    function _(_, _, _, _, _) {
      if (_ === _) return _ ? [[_, _]] : [];
      if (_ != null) {
        var _ = _(_, _, _);
        if (_) return _;
      }
      var _ = _(_, _),
        _ = _.substring(0, _);
      ((_ = _.substring(_)), (_ = _.substring(_)), (_ = _(_, _)));
      var _ = _.substring(_.length - _);
      ((_ = _.substring(0, _.length - _)), (_ = _.substring(0, _.length - _)));
      var _ = _(_, _);
      return (
        _ && _.unshift([_, _]), _ && _.push([_, _]), _(_, _), _ && _(_), _
      );
    }
    function _(_, _) {
      var _;
      if (!_) return [[_, _]];
      if (!_) return [[_, _]];
      var _ = _.length > _.length ? _ : _,
        _ = _.length > _.length ? _ : _,
        _ = _.indexOf(_);
      if (_ !== -1)
        return (
          (_ = [
            [_, _.substring(0, _)],
            [_, _],
            [_, _.substring(_ + _.length)],
          ]),
          _.length > _.length && (_[0][0] = _[2][0] = _),
          _
        );
      if (_.length === 1)
        return [
          [_, _],
          [_, _],
        ];
      var _ = _(_, _);
      if (_) {
        var _ = _[0],
          _ = _[1],
          _ = _[2],
          _ = _[3],
          _ = _[4],
          _ = _(_, _),
          _ = _(_, _);
        return _.concat([[_, _]], _);
      }
      return _(_, _);
    }
    function _(_, _) {
      for (
        var _ = _.length,
          _ = _.length,
          _ = Math.ceil((_ + _) / 2),
          _ = _,
          _ = 2 * _,
          _ = Array(_),
          _ = Array(_),
          _ = 0;
        _ < _;
        _++
      )
        ((_[_] = -1), (_[_] = -1));
      ((_[_ + 1] = 0), (_[_ + 1] = 0));
      for (
        var _ = _ - _, _ = _ % 2 != 0, _ = 0, _ = 0, _ = 0, _ = 0, _ = 0;
        _ < _;
        _++
      ) {
        for (var _ = -_ + _; _ <= _ - _; _ += 2) {
          for (
            var _ = _ + _,
              _ =
                _ === -_ || (_ !== _ && _[_ - 1] < _[_ + 1])
                  ? _[_ + 1]
                  : _[_ - 1] + 1,
              _ = _ - _;
            _ < _ && _ < _ && _.charAt(_) === _.charAt(_);
          )
            (_++, _++);
          if (((_[_] = _), _ > _)) _ += 2;
          else if (_ > _) _ += 2;
          else if (_) {
            var _ = _ + _ - _;
            if (_ >= 0 && _ < _ && _[_] !== -1) {
              var _ = _ - _[_];
              if (_ >= _) return _(_, _, _, _);
            }
          }
        }
        for (var _ = -_ + _; _ <= _ - _; _ += 2) {
          for (
            var _ = _ + _,
              _ =
                _ === -_ || (_ !== _ && _[_ - 1] < _[_ + 1])
                  ? _[_ + 1]
                  : _[_ - 1] + 1,
              _ = _ - _;
            _ < _ && _ < _ && _.charAt(_ - _ - 1) === _.charAt(_ - _ - 1);
          )
            (_++, _++);
          if (((_[_] = _), _ > _)) _ += 2;
          else if (_ > _) _ += 2;
          else if (!_) {
            var _ = _ + _ - _;
            if (_ >= 0 && _ < _ && _[_] !== -1) {
              var _ = _[_],
                _ = _ + _ - _;
              if (((_ = _ - _), _ >= _)) return _(_, _, _, _);
            }
          }
        }
      }
      return [
        [_, _],
        [_, _],
      ];
    }
    function _(_, _, _, _) {
      var _ = _.substring(0, _),
        _ = _.substring(0, _),
        _ = _.substring(_),
        _ = _.substring(_),
        _ = _(_, _),
        _ = _(_, _);
      return _.concat(_);
    }
    function _(_, _) {
      if (!_ || !_ || _.charAt(0) !== _.charAt(0)) return 0;
      for (var _ = 0, _ = Math.min(_.length, _.length), _ = _, _ = 0; _ < _;)
        (_.substring(_, _) == _.substring(_, _) ? ((_ = _), (_ = _)) : (_ = _),
          (_ = Math.floor((_ - _) / 2 + _)));
      return (_(_.charCodeAt(_ - 1)) && _--, _);
    }
    function _(_, _) {
      var _ = _.length,
        _ = _.length;
      if (_ == 0 || _ == 0) return 0;
      _ > _ ? (_ = _.substring(_ - _)) : _ < _ && (_ = _.substring(0, _));
      var _ = Math.min(_, _);
      if (_ == _) return _;
      for (var _ = 0, _ = 1; ;) {
        var _ = _.substring(_ - _),
          _ = _.indexOf(_);
        if (_ == -1) return _;
        ((_ += _),
          (_ == 0 || _.substring(_ - _) == _.substring(0, _)) &&
            ((_ = _), _++));
      }
    }
    function _(_, _) {
      if (!_ || !_ || _.slice(-1) !== _.slice(-1)) return 0;
      for (var _ = 0, _ = Math.min(_.length, _.length), _ = _, _ = 0; _ < _;)
        (_.substring(_.length - _, _.length - _) ==
        _.substring(_.length - _, _.length - _)
          ? ((_ = _), (_ = _))
          : (_ = _),
          (_ = Math.floor((_ - _) / 2 + _)));
      return (_(_.charCodeAt(_.length - _)) && _--, _);
    }
    function _(_, _) {
      var _ = _.length > _.length ? _ : _,
        _ = _.length > _.length ? _ : _;
      if (_.length < 4 || _.length * 2 < _.length) return null;
      function _(_, _, _) {
        for (
          var _ = _.substring(_, _ + Math.floor(_.length / 4)),
            _ = -1,
            _ = ``,
            _,
            _,
            _,
            _;
          (_ = _.indexOf(_, _ + 1)) !== -1;
        ) {
          var _ = _(_.substring(_), _.substring(_)),
            _ = _(_.substring(0, _), _.substring(0, _));
          _.length < _ + _ &&
            ((_ = _.substring(_ - _, _) + _.substring(_, _ + _)),
            (_ = _.substring(0, _ - _)),
            (_ = _.substring(_ + _)),
            (_ = _.substring(0, _ - _)),
            (_ = _.substring(_ + _)));
        }
        return _.length * 2 >= _.length ? [_, _, _, _, _] : null;
      }
      var _ = _(_, _, Math.ceil(_.length / 4)),
        _ = _(_, _, Math.ceil(_.length / 2)),
        _;
      if (!_ && !_) return null;
      _ = _ ? (_ && _[4].length > _[4].length ? _ : _) : _;
      var _, _, _, _;
      _.length > _.length
        ? ((_ = _[0]), (_ = _[1]), (_ = _[2]), (_ = _[3]))
        : ((_ = _[0]), (_ = _[1]), (_ = _[2]), (_ = _[3]));
      var _ = _[4];
      return [_, _, _, _, _];
    }
    function _(_) {
      for (
        var _ = !1, _ = [], _ = 0, _ = null, _ = 0, _ = 0, _ = 0, _ = 0, _ = 0;
        _ < _.length;
      )
        (_[_][0] == _
          ? ((_[_++] = _), (_ = _), (_ = _), (_ = 0), (_ = 0), (_ = _[_][1]))
          : (_[_][0] == _ ? (_ += _[_][1].length) : (_ += _[_][1].length),
            _ &&
              _.length <= Math.max(_, _) &&
              _.length <= Math.max(_, _) &&
              (_.splice(_[_ - 1], 0, [_, _]),
              (_[_[_ - 1] + 1][0] = _),
              _--,
              _--,
              (_ = _ > 0 ? _[_ - 1] : -1),
              (_ = 0),
              (_ = 0),
              (_ = 0),
              (_ = 0),
              (_ = null),
              (_ = !0))),
          _++);
      for (_ && _(_), _(_), _ = 1; _ < _.length;) {
        if (_[_ - 1][0] == _ && _[_][0] == _) {
          var _ = _[_ - 1][1],
            _ = _[_][1],
            _ = _(_, _),
            _ = _(_, _);
          (_ >= _
            ? (_ >= _.length / 2 || _ >= _.length / 2) &&
              (_.splice(_, 0, [_, _.substring(0, _)]),
              (_[_ - 1][1] = _.substring(0, _.length - _)),
              (_[_ + 1][1] = _.substring(_)),
              _++)
            : (_ >= _.length / 2 || _ >= _.length / 2) &&
              (_.splice(_, 0, [_, _.substring(0, _)]),
              (_[_ - 1][0] = _),
              (_[_ - 1][1] = _.substring(0, _.length - _)),
              (_[_ + 1][0] = _),
              (_[_ + 1][1] = _.substring(_)),
              _++),
            _++);
        }
        _++;
      }
    }
    var _ = /[^a-zA-Z0-9]/,
      _ = /\s/,
      _ = /[\r\n]/,
      _ = /\n\r?\n$/,
      _ = /^\r?\n\r?\n/;
    function _(_) {
      function _(_, _) {
        if (!_ || !_) return 6;
        var _ = _.charAt(_.length - 1),
          _ = _.charAt(0),
          _ = _.match(_),
          _ = _.match(_),
          _ = _ && _.match(_),
          _ = _ && _.match(_),
          _ = _ && _.match(_),
          _ = _ && _.match(_),
          _ = _ && _.match(_),
          _ = _ && _.match(_);
        return _ || _
          ? 5
          : _ || _
            ? 4
            : _ && !_ && _
              ? 3
              : _ || _
                ? 2
                : _ || _
                  ? 1
                  : 0;
      }
      for (var _ = 1; _ < _.length - 1;) {
        if (_[_ - 1][0] == _ && _[_ + 1][0] == _) {
          var _ = _[_ - 1][1],
            _ = _[_][1],
            _ = _[_ + 1][1],
            _ = _(_, _);
          if (_) {
            var _ = _.substring(_.length - _);
            ((_ = _.substring(0, _.length - _)),
              (_ = _ + _.substring(0, _.length - _)),
              (_ = _ + _));
          }
          for (
            var _ = _, _ = _, _ = _, _ = _(_, _) + _(_, _);
            _.charAt(0) === _.charAt(0);
          ) {
            ((_ += _.charAt(0)),
              (_ = _.substring(1) + _.charAt(0)),
              (_ = _.substring(1)));
            var _ = _(_, _) + _(_, _);
            _ >= _ && ((_ = _), (_ = _), (_ = _), (_ = _));
          }
          _[_ - 1][1] != _ &&
            (_ ? (_[_ - 1][1] = _) : (_.splice(_ - 1, 1), _--),
            (_[_][1] = _),
            _ ? (_[_ + 1][1] = _) : (_.splice(_ + 1, 1), _--));
        }
        _++;
      }
    }
    function _(_, _) {
      _.push([_, ``]);
      for (var _ = 0, _ = 0, _ = 0, _ = ``, _ = ``, _; _ < _.length;)
        if (_ < _.length - 1 && !_[_][1]) _.splice(_, 1);
        else
          switch (_[_][0]) {
            case _:
              (_++, (_ += _[_][1]), _++);
              break;
            case _:
              (_++, (_ += _[_][1]), _++);
              break;
            case _:
              var _ = _ - _ - _ - 1;
              if (_) {
                if (_ >= 0 && _(_[_][1])) {
                  var _ = _[_][1].slice(-1);
                  if (
                    ((_[_][1] = _[_][1].slice(0, -1)),
                    (_ = _ + _),
                    (_ = _ + _),
                    !_[_][1])
                  ) {
                    (_.splice(_, 1), _--);
                    var _ = _ - 1;
                    (_[_] && _[_][0] === _ && (_++, (_ = _[_][1] + _), _--),
                      _[_] && _[_][0] === _ && (_++, (_ = _[_][1] + _), _--),
                      (_ = _));
                  }
                }
                if (_(_[_][1])) {
                  var _ = _[_][1].charAt(0);
                  ((_[_][1] = _[_][1].slice(1)), (_ += _), (_ += _));
                }
              }
              if (_ < _.length - 1 && !_[_][1]) {
                _.splice(_, 1);
                break;
              }
              if (_.length > 0 || _.length > 0) {
                _.length > 0 &&
                  _.length > 0 &&
                  ((_ = _(_, _)),
                  _ !== 0 &&
                    (_ >= 0
                      ? (_[_][1] += _.substring(0, _))
                      : (_.splice(0, 0, [_, _.substring(0, _)]), _++),
                    (_ = _.substring(_)),
                    (_ = _.substring(_))),
                  (_ = _(_, _)),
                  _ !== 0 &&
                    ((_[_][1] = _.substring(_.length - _) + _[_][1]),
                    (_ = _.substring(0, _.length - _)),
                    (_ = _.substring(0, _.length - _))));
                var _ = _ + _;
                _.length === 0 && _.length === 0
                  ? (_.splice(_ - _, _), (_ -= _))
                  : _.length === 0
                    ? (_.splice(_ - _, _, [_, _]), (_ = _ - _ + 1))
                    : _.length === 0
                      ? (_.splice(_ - _, _, [_, _]), (_ = _ - _ + 1))
                      : (_.splice(_ - _, _, [_, _], [_, _]), (_ = _ - _ + 2));
              }
              (_ !== 0 && _[_ - 1][0] === _
                ? ((_[_ - 1][1] += _[_][1]), _.splice(_, 1))
                : _++,
                (_ = 0),
                (_ = 0),
                (_ = ``),
                (_ = ``));
          }
      _[_.length - 1][1] === `` && _.pop();
      var _ = !1;
      for (_ = 1; _ < _.length - 1;)
        (_[_ - 1][0] === _ &&
          _[_ + 1][0] === _ &&
          (_[_][1].substring(_[_][1].length - _[_ - 1][1].length) ===
          _[_ - 1][1]
            ? ((_[_][1] =
                _[_ - 1][1] +
                _[_][1].substring(0, _[_][1].length - _[_ - 1][1].length)),
              (_[_ + 1][1] = _[_ - 1][1] + _[_ + 1][1]),
              _.splice(_ - 1, 1),
              (_ = !0))
            : _[_][1].substring(0, _[_ + 1][1].length) == _[_ + 1][1] &&
              ((_[_ - 1][1] += _[_ + 1][1]),
              (_[_][1] = _[_][1].substring(_[_ + 1][1].length) + _[_ + 1][1]),
              _.splice(_ + 1, 1),
              (_ = !0))),
          _++);
      _ && _(_, _);
    }
    function _(_) {
      return _ >= 55296 && _ <= 56319;
    }
    function _(_) {
      return _ >= 56320 && _ <= 57343;
    }
    function _(_) {
      return _(_.charCodeAt(0));
    }
    function _(_) {
      return _(_.charCodeAt(_.length - 1));
    }
    function _(_) {
      for (var _ = [], _ = 0; _ < _.length; _++)
        _[_][1].length > 0 && _.push(_[_]);
      return _;
    }
    function _(_, _, _, _) {
      return _(_) || _(_)
        ? null
        : _([
            [_, _],
            [_, _],
            [_, _],
            [_, _],
          ]);
    }
    function _(_, _, _) {
      var _ =
          typeof _ == `number`
            ? {
                index: _,
                length: 0,
              }
            : _.oldRange,
        _ = typeof _ == `number` ? null : _.newRange,
        _ = _.length,
        _ = _.length;
      if (_.length === 0 && (_ === null || _.length === 0)) {
        var _ = _.index,
          _ = _.slice(0, _),
          _ = _.slice(_),
          _ = _ ? _.index : null;
        editBefore: {
          var _ = _ + _ - _;
          if ((_ !== null && _ !== _) || _ < 0 || _ > _) break editBefore;
          var _ = _.slice(0, _),
            _ = _.slice(_);
          if (_ !== _) break editBefore;
          var _ = Math.min(_, _),
            _ = _.slice(0, _),
            _ = _.slice(0, _);
          if (_ !== _) break editBefore;
          var _ = _.slice(_),
            _ = _.slice(_);
          return _(_, _, _, _);
        }
        editAfter: {
          if (_ !== null && _ !== _) break editAfter;
          var _ = _,
            _ = _.slice(0, _),
            _ = _.slice(_);
          if (_ !== _) break editAfter;
          var _ = Math.min(_ - _, _ - _),
            _ = _.slice(_.length - _),
            _ = _.slice(_.length - _);
          if (_ !== _) break editAfter;
          var _ = _.slice(0, _.length - _),
            _ = _.slice(0, _.length - _);
          return _(_, _, _, _);
        }
      }
      if (_.length > 0 && _ && _.length === 0)
        replaceRange: {
          var _ = _.slice(0, _.index),
            _ = _.slice(_.index + _.length),
            _ = _.length,
            _ = _.length;
          if (_ < _ + _) break replaceRange;
          var _ = _.slice(0, _),
            _ = _.slice(_ - _);
          if (_ !== _ || _ !== _) break replaceRange;
          var _ = _.slice(_, _ - _),
            _ = _.slice(_, _ - _);
          return _(_, _, _, _);
        }
      return null;
    }
    function _(_, _, _, _) {
      return _(_, _, _, _, !0);
    }
    ((_.INSERT = _), (_.DELETE = _), (_.EQUAL = _), (_.exports = _));
  })(),
  1,
);
function _(_, _, _) {
  let _ = _(_, _);
  if (_) {
    let _ = _.Localize(`#ContentSurvey_History_Column_InternalNotes`);
    _.push({
      strSection: _,
      strQuestion: ``,
      strAnswer: _,
      bSingleValue: !0,
    });
  }
  return _;
}
function _(_) {
  let _ = `${_.strSection}\u0000${_.strQuestion}\u0000${_.eLanguage ?? ``}`;
  return _.bSingleValue ? _ : `${_}\u0000${_.strAnswer}`;
}
function _(_, _) {
  return (0, _.default)(_, _, void 0, !0).map(([_, _]) => ({
    eChange:
      _ == _.default.INSERT
        ? `added`
        : _ == _.default.DELETE
          ? `removed`
          : `unchanged`,
    strText: _,
  }));
}
function _(_, _) {
  let _ = new Map();
  _.forEach((_, _) => {
    let _ = _(_),
      _ = _.get(_);
    _ ? _.push(_) : _.set(_, [_]);
  });
  let _ = _.map((_) => _.get(_(_))?.shift()),
    _ = new Set(_.filter((_) => _ !== void 0)),
    _ = [],
    _ = 0,
    _ = (_) => {
      for (; _ < _; _++)
        if (!_.has(_)) {
          let _ = _[_];
          _.push({
            strSection: _.strSection,
            strQuestion: _.strQuestion,
            eChange: `removed`,
            strOld: _.strAnswer,
          });
        }
    };
  return (
    _.forEach((_, _) => {
      let _ = _[_];
      if (_ === void 0) {
        _.push({
          strSection: _.strSection,
          strQuestion: _.strQuestion,
          eChange: `added`,
          strNew: _.strAnswer,
        });
        return;
      }
      (_(_), (_ = Math.max(_, _ + 1)));
      let _ = _[_].strAnswer,
        _ = _ != _.strAnswer;
      _.push({
        strSection: _.strSection,
        strQuestion: _.strQuestion,
        eChange: _ ? `changed` : `unchanged`,
        strOld: _,
        strNew: _.strAnswer,
        rgTextDiff: _ ? _(_, _.strAnswer) : void 0,
      });
    }),
    _(_.length),
    _
  );
}
function _(_) {
  return {
    cAdded: _.filter((_) => _.eChange == `added`).length,
    cRemoved: _.filter((_) => _.eChange == `removed`).length,
    cChanged: _.filter((_) => _.eChange == `changed`).length,
  };
}
function _(_) {
  let { rgSurveys: _, bShowInternalNotes: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _.filter((_) => !!_.edits);
  return _.length < 2
    ? null
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            variant: `outline`,
            onClick: () => _(!0),
            children: _.Localize(`#ContentSurvey_History_Compare_Button`),
          }),
          _ &&
            (0, _.jsx)(_, {
              rgSurveys: _,
              bShowInternalNotes: _,
              onClose: () => _(!1),
            }),
        ],
      });
}
function _(_) {
  return _.Localize(
    `#ContentSurvey_History_Compare_VersionLabel`,
    String(_.nVersion),
    _(_.eState),
  );
}
function _(_) {
  let { rgSurveys: _, bShowInternalNotes: _, onClose: _ } = _,
    [_, _] = (0, _.useState)(_[1]),
    [_, _] = (0, _.useState)(_[0]),
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    _ = (0, _.useMemo)(
      () =>
        _(
          _(_, _.edits, _ ? _.strInternalNotes : void 0),
          _(_, _.edits, _ ? _.strInternalNotes : void 0),
        ),
      [_, _, _, _],
    ),
    _ = _.filter((_) => _.eChange != `unchanged`),
    _ = _ ? _ : _;
  return (0, _.jsx)(_, {
    onClose: _,
    navID: `ContentSurveyCompareVersions`,
    wideMode: !0,
    strTitle: _.Localize(`#ContentSurvey_History_Compare_Title`),
    children: (0, _.jsxs)(_, {
      direction: `column`,
      gap: `4`,
      children: [
        (0, _.jsx)(_, {
          _: `p`,
          children: _.Localize(`#ContentSurvey_History_Compare_Desc`),
        }),
        (0, _.jsxs)(_, {
          gap: `3`,
          align: `center`,
          wrap: `wrap`,
          children: [
            (0, _.jsx)(_, {
              children: _.Localize(`#ContentSurvey_History_Compare_From`),
            }),
            (0, _.jsx)(_, {
              options: _,
              selectedValue: _,
              getOptionLabel: _,
              onSelectionChange: (_) => _ && _(_),
            }),
            (0, _.jsx)(_, {
              children: _.Localize(`#ContentSurvey_History_Compare_To`),
            }),
            (0, _.jsx)(_, {
              options: _,
              selectedValue: _,
              getOptionLabel: _,
              onSelectionChange: (_) => _ && _(_),
            }),
            (0, _.jsx)(_, {
              variant: `outline`,
              onClick: () => _(!_),
              children: _.Localize(
                _
                  ? `#ContentSurvey_History_Compare_ShowChanges`
                  : `#ContentSurvey_History_Compare_ShowAll`,
              ),
            }),
          ],
        }),
        (0, _.jsx)(_, {
          _: `p`,
          weight: `medium`,
          children: _(_(_)),
        }),
        _.length > 0 &&
          (0, _.jsx)(_, {
            rgDiff: _,
          }),
      ],
    }),
  });
}
var _ = 6;
function _(_) {
  let { strNotes: _ } = _,
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(null);
  return (
    (0, _.useEffect)(() => {
      let _ = _.current;
      _ && !_ && _(_.scrollHeight > _.clientHeight + 1);
    }, [_, _]),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          _: `div`,
          ref: _,
          whiteSpace: `pre-line`,
          lineClamp: _ ? void 0 : _,
          children: _,
        }),
        (_ || _) &&
          (0, _.jsx)(_, {
            marginTop: `2`,
            children: (0, _.jsx)(_, {
              onClick: () => _(!_),
              children: _.Localize(
                _
                  ? `#ContentSurvey_History_Notes_ShowLess`
                  : `#ContentSurvey_History_Notes_ShowAll`,
              ),
            }),
          }),
      ],
    })
  );
}
var _ = `jzKttXE5o20-`,
  _ = `gM7GSJaagSA-`,
  _ = `rYo3OkLjsGg-`,
  _ = `_5FDRfHo7Z6g-`;
function _(_) {
  let {
    nAppID: _,
    strAppName: _,
    rgSurveys: _,
    strHistoryURL: _,
    strEditURL: _,
    bShowInternalNotes: _,
    rgRatingAgencies: _,
  } = _;
  return (0, _.jsx)(_, {
    rgRatingAgencies: _ ?? [],
    children: (0, _.jsx)(_, {
      children: (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsx)(_, {
            nAppID: _,
            strAppName: _,
            strSubtitle: _.Localize(`#ContentSurvey_History_Title`),
          }),
          (0, _.jsx)(_, {
            background: `dull-9`,
            padding: `6`,
            children: (0, _.jsx)(_, {
              size: `4`,
              _: `p`,
              children: _.Localize(`#ContentSurvey_History_Desc`),
            }),
          }),
          (0, _.jsxs)(_, {
            children: [
              (0, _.jsxs)(_, {
                marginTop: `5`,
                gap: `5`,
                align: `center`,
                justify: `between`,
                children: [
                  (0, _.jsx)(_, {
                    href: _,
                    children: _.Localize(`#ContentSurvey_History_ToEditor`),
                  }),
                  (0, _.jsx)(_, {
                    rgSurveys: _,
                    bShowInternalNotes: _,
                  }),
                ],
              }),
              _.length == 0
                ? (0, _.jsx)(_, {
                    marginTop: `5`,
                    children: (0, _.jsx)(_, {
                      _: `p`,
                      children: _.Localize(`#ContentSurvey_History_Empty`),
                    }),
                  })
                : (0, _.jsx)(_, {
                    marginTop: `5`,
                    children: (0, _.jsxs)(`table`, {
                      className: _,
                      children: [
                        (0, _.jsx)(`thead`, {
                          children: (0, _.jsxs)(`tr`, {
                            children: [
                              (0, _.jsx)(`th`, {
                                children: _.Localize(
                                  `#ContentSurvey_History_Column_Version`,
                                ),
                              }),
                              (0, _.jsx)(`th`, {
                                children: _.Localize(
                                  `#ContentSurvey_History_Column_ID`,
                                ),
                              }),
                              (0, _.jsx)(`th`, {
                                children: _.Localize(
                                  `#ContentSurvey_History_Column_Status`,
                                ),
                              }),
                              (0, _.jsx)(`th`, {
                                children: _.Localize(
                                  `#ContentSurvey_History_Column_Dates`,
                                ),
                              }),
                              (0, _.jsx)(`th`, {
                                children: _.Localize(
                                  `#ContentSurvey_History_Column_Actor`,
                                ),
                              }),
                              (0, _.jsx)(`th`, {
                                children: _.Localize(
                                  `#ContentSurvey_History_Column_Changes`,
                                ),
                              }),
                              (0, _.jsx)(`th`, {
                                children: _.Localize(
                                  `#ContentSurvey_History_Column_Notes`,
                                ),
                              }),
                              _ &&
                                (0, _.jsx)(`th`, {
                                  className: `-dAEQF8QbCI-`,
                                  children: _.Localize(
                                    `#ContentSurvey_History_Column_InternalNotes`,
                                  ),
                                }),
                            ],
                          }),
                        }),
                        (0, _.jsx)(`tbody`, {
                          children: _.map((_, _) =>
                            (0, _.jsx)(
                              _,
                              {
                                survey: _,
                                surveyPrevious: _[_ + 1],
                                strHistoryURL: _,
                                bShowInternalNotes: _,
                              },
                              _.strSurveyID,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
            ],
          }),
        ],
      }),
    }),
  });
}
function _(_) {
  let {
      survey: _,
      surveyPrevious: _,
      strHistoryURL: _,
      bShowInternalNotes: _,
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    _ = (0, _.useMemo)(
      () =>
        !_.edits || !_?.edits
          ? void 0
          : _(
              _(_, _.edits, _ ? _.strInternalNotes : void 0),
              _(_, _.edits, _ ? _.strInternalNotes : void 0),
            ).filter((_) => _.eChange != `unchanged`),
      [_, _, _, _],
    );
  (0, _.useEffect)(() => {
    if (!_) return;
    let _ = (_) => {
      _.key == `Escape` &&
        !(_.target instanceof Element && _.target.closest(`dialog`)) &&
        _(!1);
    };
    return (
      window.addEventListener(`keydown`, _),
      () => window.removeEventListener(`keydown`, _)
    );
  }, [_]);
  let _ = _ ? 8 : 7;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`tr`, {
        children: [
          (0, _.jsx)(`td`, {
            className: _,
            children: (0, _.jsx)(_, {
              href: `${_}/${_.strSurveyID}`,
              children: _.nVersion,
            }),
          }),
          (0, _.jsx)(`td`, {
            className: _,
            children: _.strSurveyID,
          }),
          (0, _.jsx)(`td`, {
            className: _,
            children: _(_.eState),
          }),
          (0, _.jsx)(`td`, {
            className: _,
            children: (0, _.jsx)(_, {
              survey: _,
            }),
          }),
          (0, _.jsx)(`td`, {
            className: _,
            children: (0, _.jsx)(_, {
              nAccountID: _.nAccountID,
              bIsActorSupport: _.bLastEditedBySupport,
            }),
          }),
          (0, _.jsx)(`td`, {
            className: _,
            children: (0, _.jsx)(_, {
              survey: _,
              surveyPrevious: _,
              rgChanges: _,
              bShowChanges: _,
              setShowChanges: _,
            }),
          }),
          (0, _.jsx)(`td`, {
            className: _,
            children: (0, _.jsx)(_, {
              strNotes: _.strDeveloperNotes,
            }),
          }),
          _ &&
            (0, _.jsx)(`td`, {
              className: `_5FDRfHo7Z6g-`,
              children: (0, _.jsx)(_, {
                strNotes: _.strInternalNotes ?? ``,
              }),
            }),
        ],
      }),
      _ &&
        _ &&
        _.length > 0 &&
        (0, _.jsx)(`tr`, {
          children: (0, _.jsx)(`td`, {
            colSpan: _,
            className: `AxjfvJAZiAQ-`,
            children: (0, _.jsxs)(_, {
              gap: `4`,
              align: `start`,
              children: [
                (0, _.jsx)(_, {
                  flexGrow: `1`,
                  children: (0, _.jsx)(_, {
                    rgDiff: _,
                  }),
                }),
                (0, _.jsx)(_, {
                  color: `dull`,
                  onClick: () => _(!1),
                  title: _.Localize(`#ContentSurvey_History_Changes_Hide`),
                  children: (0, _.jsx)(_, {}),
                }),
              ],
            }),
          }),
        }),
    ],
  });
}
function _(_) {
  let {
    survey: _,
    surveyPrevious: _,
    rgChanges: _,
    bShowChanges: _,
    setShowChanges: _,
  } = _;
  return !_ && _.edits
    ? (0, _.jsx)(_, {
        children: _.Localize(`#ContentSurvey_History_Changes_First`),
      })
    : _
      ? (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              _: `div`,
              children: _(_(_)),
            }),
            _.length > 0 &&
              (0, _.jsx)(_, {
                onClick: () => _(!_),
                children: _.Localize(
                  _
                    ? `#ContentSurvey_History_Changes_Hide`
                    : `#ContentSurvey_History_Changes_Show`,
                ),
              }),
          ],
        })
      : null;
}
function _(_) {
  let { survey: _ } = _,
    _ = [
      [`#ContentSurvey_History_Column_Started`, _.rtStarted],
      [`#ContentSurvey_History_Column_Updated`, _.rtUpdated],
      [`#ContentSurvey_History_Column_Published`, _.rtPublished],
    ];
  return (0, _.jsx)(_, {
    direction: `column`,
    gap: `2`,
    children: _.filter(([, _]) => _ > 0).map(([_, _]) =>
      (0, _.jsxs)(
        _,
        {
          children: [
            (0, _.jsx)(_, {
              _: `div`,
              size: `1`,
              contrast: `description`,
              children: _.Localize(_),
            }),
            (0, _.jsx)(_, {
              _: `div`,
              children: _(_),
            }),
          ],
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let {
    nAppID: _,
    strAppName: _,
    strSurveyID: _,
    nVersion: _,
    survey: _,
    strHistoryURL: _,
    rgRatingAgencies: _,
    bLastEditedBySupport: _,
  } = _;
  return (0, _.jsx)(_, {
    rgRatingAgencies: _ ?? [],
    children: (0, _.jsx)(_, {
      children: (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsx)(_, {
            nAppID: _,
            strAppName: _,
            rgCrumbs: [
              {
                name: _.Localize(`#ContentSurvey_History_Title`),
                url: _,
              },
            ],
            strSubtitle: _.Localize(`#ContentSurvey_History_Survey_Title`),
          }),
          (0, _.jsx)(_, {
            background: `dull-9`,
            padding: `6`,
            children: (0, _.jsx)(_, {
              size: `4`,
              _: `p`,
              children: _.Localize(`#ContentSurvey_History_Survey_Desc`),
            }),
          }),
          (0, _.jsxs)(_, {
            children: [
              _
                ? (0, _.jsx)(_, {
                    survey: _,
                    nVersion: _,
                    bLastEditedBySupport: _,
                  })
                : (0, _.jsx)(_, {
                    marginTop: `5`,
                    children: (0, _.jsx)(_, {
                      _: `p`,
                      children: _.Localize(
                        `#ContentSurvey_History_Survey_NotFound`,
                        _,
                      ),
                    }),
                  }),
              (0, _.jsx)(_, {
                marginTop: `7`,
                children: (0, _.jsx)(_, {
                  href: _,
                  children: _.Localize(`#ContentSurvey_History_Back`),
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function _(_) {
  let { survey: _, nVersion: _, bLastEditedBySupport: _ } = _,
    _ = _(),
    _ = _(
      _,
      _.ratings,
      _.all_ratings,
      _.descriptors?.map((_) => _._),
      _.is_support,
    ),
    _ = _(_, _(_), _.is_support ? _.internal_notes : void 0);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        marginTop: `5`,
        children: (0, _.jsx)(`table`, {
          className: _,
          children: (0, _.jsxs)(`tbody`, {
            children: [
              (0, _.jsx)(_, {
                strLabel: _.Localize(`#ContentSurvey_History_Column_Version`),
                children: _,
              }),
              (0, _.jsx)(_, {
                strLabel: _.Localize(`#ContentSurvey_History_Column_ID`),
                children: _.surveyid,
              }),
              (0, _.jsx)(_, {
                strLabel: _.Localize(`#ContentSurvey_History_Column_Status`),
                children: _.state !== void 0 && _(_.state),
              }),
              (0, _.jsx)(_, {
                strLabel: _.Localize(`#ContentSurvey_History_Column_Started`),
                children: _(_.timestamp_started ?? 0),
              }),
              (0, _.jsx)(_, {
                strLabel: _.Localize(`#ContentSurvey_History_Column_Updated`),
                children: _(_.timestamp_updated ?? 0),
              }),
              !!_.timestamp_finished &&
                (0, _.jsx)(_, {
                  strLabel: _.Localize(
                    `#ContentSurvey_History_Column_Published`,
                  ),
                  children: _(_.timestamp_finished),
                }),
              (0, _.jsx)(_, {
                strLabel: _.Localize(`#ContentSurvey_History_Column_Actor`),
                children: (0, _.jsx)(_, {
                  nAccountID: _.accountid ?? 0,
                  bIsActorSupport: _,
                }),
              }),
            ],
          }),
        }),
      }),
      (0, _.jsx)(_, {
        titleToken: `#ContentSurvey_History_Survey_Answers`,
      }),
      _.length > 0
        ? (0, _.jsx)(_, {
            rgRows: _,
          })
        : (0, _.jsx)(_, {
            _: `p`,
            children: _.Localize(`#ContentSurvey_History_Survey_NoAnswers`),
          }),
      _.length > 0 &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              titleToken: `#ContentSurvey_History_Ratings`,
              descToken: `#ContentSurvey_History_Ratings_Desc`,
            }),
            (0, _.jsx)(`div`, {
              className: `ThfoLsCRBOY-`,
              children: _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    region: _,
                  },
                  _.strRegion,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let { strLabel: _, children: _ } = _;
  return (0, _.jsxs)(`tr`, {
    children: [
      (0, _.jsx)(`th`, {
        children: _,
      }),
      (0, _.jsx)(`td`, {
        children: _,
      }),
    ],
  });
}
function _(_) {
  let { region: _ } = _;
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `2`,
    children: [
      (0, _.jsxs)(_, {
        size: `4`,
        className: _(_, {
          [_]: _.bInternalOnly,
        }),
        children: [_.bInternalOnly && `(VO) `, _.strRegion],
      }),
      (0, _.jsx)(_, {
        padding: `4`,
        radius: `sm`,
        flexGrow: `1`,
        background: _.bInternalOnly ? void 0 : `dull-4`,
        className: _.bInternalOnly ? _ : void 0,
        children: (0, _.jsxs)(_, {
          direction: `column`,
          gap: `3`,
          children: [
            _.bBanned &&
              (0, _.jsx)(_, {
                strRegion: _.strRegion,
              }),
            _.rating &&
              (0, _.jsx)(_, {
                ..._.rating,
              }),
          ],
        }),
      }),
    ],
  });
}
var _ = _({
  Component: _,
});
function _() {
  let _ = _.useLoaderData();
  if (_.success != 1)
    return (0, _.jsx)(_, {
      eError: _(_.success),
      nAppID: _.nAppID,
      ePage: `history`,
      strError: _.strError,
    });
  let _ = `/contentsurvey/history/${_.nAppID}`;
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      children: _.strSurveyID
        ? (0, _.jsx)(_, {
            nAppID: _.nAppID,
            strAppName: _.strAppName,
            strSurveyID: _.strSurveyID,
            nVersion: _.nVersion ?? 0,
            survey: _.survey,
            strHistoryURL: _,
            rgRatingAgencies: _.rgRatingAgencies,
            bLastEditedBySupport: _.bLastEditedBySupport,
          })
        : (0, _.jsx)(_, {
            nAppID: _.nAppID,
            strAppName: _.strAppName,
            rgSurveys: _.rgSurveys ?? [],
            strHistoryURL: _,
            strEditURL: `/contentsurvey/edit/${_.nAppID}`,
            bShowInternalNotes: _.bShowInternalNotes,
            rgRatingAgencies: _.rgRatingAgencies,
          }),
    }),
  });
}
export { _ as route };
