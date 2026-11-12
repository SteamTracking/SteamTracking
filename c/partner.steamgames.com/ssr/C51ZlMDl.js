var _ = _(_(), 1),
  _ = _(),
  _ = [`Section`, `Question`, `Answer`];
function _(_) {
  let [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(null),
    _ = _(),
    _ = _(_, _.edits),
    _ = _(_),
    _ = _ !== null && _.includes(_),
    _ = _ ? _.filter((_) => _.eLanguage === void 0 || _.eLanguage == _) : _,
    _ = _ ? _ : _.filter((_) => _.bPoliced);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        strTitle: `(VO) Export`,
        strDescription: _
          ? `Every box the partner ticked and everything they wrote, in one place.`
          : `The ticked questions the review team checks, and the partner's notes for the review team.`,
        children: (0, _.jsxs)(_, {
          marginTop: `4`,
          gap: `3`,
          align: `center`,
          children: [
            (0, _.jsx)(_, {
              onClick: async () => {
                let { CImportExportUtils: _ } = await _(
                  async () => {
                    let { CImportExportUtils: _ } = await import(`./chunk.js`);
                    return {
                      CImportExportUtils: _,
                    };
                  },
                  [],
                  import.meta.url,
                );
                _.WriteCSVToFile(
                  _.map((_) => [_.strSection, _.strQuestion, _.strAnswer]),
                  `content_survey_${_.nAppID}.csv`,
                  !0,
                  _,
                );
              },
              disabled: _.length == 0,
              children: `Download CSV`,
            }),
            (0, _.jsx)(_, {
              variant: `outline`,
              onClick: () => _(!_),
              children: _
                ? `Show review questions only`
                : `See all (${_.length})`,
            }),
            _.length > 1 &&
              (0, _.jsx)(_, {
                options: _,
                selectedValue: _ ? _ : null,
                getOptionLabel: _,
                placeholder: `All languages`,
                onSelectionChange: _,
                clearable: !0,
              }),
          ],
        }),
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          marginTop: `5`,
          children:
            _.length == 0
              ? (0, _.jsx)(_, {
                  _: `p`,
                  children: _
                    ? `Nothing has been ticked or written in this survey.`
                    : `None of the questions the review team checks are ticked.`,
                })
              : (0, _.jsx)(_, {
                  rgRows: _,
                }),
        }),
      }),
    ],
  });
}
function _(_) {
  let _ = [];
  for (let _ of _.rgRows) {
    let _ = _._(-1);
    _?.strSection == _.strSection
      ? _.rgRows.push(_)
      : _.push({
          strSection: _.strSection,
          rgRows: [_],
        });
  }
  return (0, _.jsx)(_, {
    direction: `column`,
    gap: `6`,
    children: _.map((_, _) =>
      (0, _.jsxs)(
        _,
        {
          children: [
            (0, _.jsx)(_, {
              size: `4`,
              marginBottom: `3`,
              className: _,
              children: _.strSection,
            }),
            (0, _.jsx)(_, {
              columns: `minmax( 0, 1fr ) minmax( 0, 2fr )`,
              gapX: `5`,
              gapY: `3`,
              children: _.rgRows.map((_, _) =>
                (0, _.jsxs)(
                  _.Fragment,
                  {
                    children: [
                      (0, _.jsx)(_, {
                        children: _.strQuestion,
                      }),
                      (0, _.jsx)(_, {
                        whiteSpace: `pre-line`,
                        children: _.strAnswer,
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
