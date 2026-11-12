import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _, _, _, _, _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _ } from "./chunk~3f4314f3b4.js";
import { _ } from "./chunk~eefd71512b.js";
import { _ } from "./chunk~92931c6310.js";
import { _ } from "./chunk~0111fcd096.js";
import { _, _ } from "./chunk~ec644f97c6.js";
import { _, _, _ } from "./chunk~91ae5e1167.js";
import { _ } from "./chunk~d382bdf2cf.js";
import { _, _, _, _ } from "./chunk~2bb3c0c267.js";
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
} from "./main.js";
import { _, _, _, _, _, _, _, _, _, _, _, _ } from "./chunk~f17215eefb.js";
import "./chunk~bf4b546728.js";
import { _, _, _, _, _, _, _ } from "./chunk~cbfff8c814.js";
var _ = _(_()),
  _ = _(),
  _ = (function (_) {
    return (
      (_.k_eView = `view`),
      (_.k_eCommunityView = `communityview`),
      (_.k_eCommunityEdit = `edit`),
      (_.k_eCommunityDashboard = `dashboard`),
      (_.k_eCommunityPreview = `preview`),
      _
    );
  })({}),
  _ = (_) => {
    let { route: _, faqid: _ } = _,
      _ = _(_, _);
    return _.bForceRedirect
      ? (0, _.jsx)(_, {
          push: !0,
          _: _,
        })
      : _.bForceAnchor
        ? (0, _.jsx)(`a`, {
            href: _.COMMUNITY_BASE_URL.slice(0, -1) + _,
            className: _.className,
            children: _.children,
          })
        : (0, _.jsx)(_, {
            _: _,
            className: _.className,
            children: _.children,
          });
  };
function _(_, _) {
  let _ = `/faqs/` + _.VANITY_ID + `/`;
  switch (_) {
    case `view`:
    case `communityview`:
      _ += `view/` + _(_);
      break;
    case `edit`:
      _ += `edit/` + _(_);
      break;
    case `dashboard`:
      _ += `dashboard`;
      break;
    case `preview`:
      _ += `preview/` + _(_);
  }
  return _;
}
var _ = `-MPSvXdlKko-`,
  _ = `cWORcGrq8Es-`,
  _ = `m6ZdpHgjsqc-`,
  _ = `e6REIYO7KFM-`,
  _ = `_3i4xgyPXOJ4-`,
  _ = `_6q07lEIV9WY-`,
  _ = `AIUe9Gi45d4-`,
  _ = `-z-7-ErTm9g-`,
  _ = `JDfrmBEZqt0-`,
  _ = `-cvi16WJn34-`,
  _ = `ub8sEXgmuvQ-`,
  _ = `V-TyNh8QFJ4-`,
  _ = `QDo-e1DBIlg-`,
  _ = `Xi5qpSzb8OM-`,
  _ = `z7uVZ-8L0hk-`,
  _ = `mBUkTcPh-cc-`,
  _ = `tB8ue3FBvKo-`,
  _ = `_0S-13uXvMfM-`,
  _ = `JF3b8RUSLKk-`,
  _ = `bB57r4QqpPw-`,
  _ = `KrdfO1R-kzI-`,
  _ = `TxWVgTS0TjA-`,
  _ = `wuiS6vB9C44-`,
  _ = `iPKa0MqEIN4-`,
  _ = `FKq-V9NUbMU-`,
  _ = `UKn9j1s-T0g-`,
  _ = `-HyDiAbxcCQ-`,
  _ = `fzBA-zORfUk-`,
  _ = `Y8KHdIPPyhE-`,
  _ = `y3pIr0FbFxU-`,
  _ = `UinHRqPsVUQ-`,
  _ = `KiThcBvchow-`,
  _ = `pdvoaPVQ-YM-`,
  _ = `z5IAmxaH35M-`,
  _ = `apTgBdnUovI-`,
  _ = `title`,
  _ = `content`;
function _(_, _) {
  let _ = new _();
  for (let _ = 0; _ < 32; ++_)
    (_.BHasSomeTextForLanguage(_) || _ == 0) &&
      (_.SetLocalization(_, _, _.GetDraftTitle(_) ?? ``),
      _.SetLocalization(_, _, _.GetDraftContent(_) ?? ``));
  return _;
}
function _(_, _, _) {
  let _ = new Set(),
    _ = _.GetSortedTokenList();
  return (
    _(() => {
      _.forEach((_) => {
        (_.forEach((_) => {
          let _ = _.GetLocalization(_, _) || ``;
          if (_ === _) {
            let _ = _.GetDraftTitle(_);
            (_ || (_ && _.length > 0)) && _.SetDraftTitle(_, _);
          }
          if (_ === _) {
            let _ = _.GetDraftContent(_);
            (_ || (_ && _.length > 0)) && _.SetDraftContent(_, _);
          }
        }),
          _.add(_));
      });
    }),
    Array.from(_)
  );
}
var _ = (_) => {
    let { draft: _, eLanguage: _ } = _;
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          draft: _,
          eLanguage: _,
        }),
        (0, _.jsx)(_, {
          strToolTip: _(`#FAQEditor_Loc_Import_ttip`),
          strLabel: _(`#EventEditor_Loc_Import_Short`),
          fnOnImportLocData: (_, _) => _(_, _, _),
        }),
      ],
    });
  },
  _ = (_) => {
    let { draft: _ } = _;
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          onClick: (_) => {
            _(
              (0, _.jsx)(_, {
                direction: `export`,
                draft: _,
                children: ` `,
              }),
              _(_),
            );
          },
          children: _(`#EventEditor_Loc_Export_Short`),
        }),
        (0, _.jsx)(`div`, {
          className: _,
          onClick: (_) => {
            _(
              (0, _.jsx)(_, {
                direction: `import`,
                draft: _,
                children: ` `,
              }),
              _(_),
            );
          },
          children: _(`#EventEditor_Loc_Import_Short`),
        }),
      ],
    });
  },
  _ = (_) => {
    let { closeModal: _, direction: _, draft: _ } = _,
      [_, _] = _.useState(!1),
      [_, _] = _.useState([]);
    _ || _.length;
    let _ = async () => {
        _(!0);
        try {
          _ == `import`
            ? await _.Get().ImportNonEnglishDraftsFromCrowdin(_.GetFAQID(), _)
            : await _.Get().ExportEnglishDraftToCrowdin(_.GetFAQID());
        } catch (_) {
          console.error(_);
        }
        _(!1);
      },
      _ = _(
        _ == `import`
          ? `#EventEditor_Loc_CrowdinIntegration_ImportTitle`
          : `#EventEditor_Loc_CrowdinIntegration_ExportTitle`,
      ),
      _ = _(
        _ == `import`
          ? `#EventEditor_Loc_Import_Crowdin_Confirm`
          : `#EventEditor_Loc_Export_Crowdin_Confirm`,
      ),
      _ =
        _ == `import`
          ? (0, _.jsx)(_, {
              draft: _,
              rgAllLanguages: _,
              rgLanguagesSelected: _,
              fnSelectLanguages: _,
            })
          : null;
    return (0, _.jsx)(_, {
      className: _,
      closeModal: _,
      strTitle: _,
      strDescription: _,
      onOK: _,
      bOKDisabled: _,
      children: _
        ? (0, _.jsx)(_, {
            position: `center`,
          })
        : _,
    });
  },
  _ = (_) => {
    let { draft: _, eLanguage: _ } = _;
    return (0, _.jsx)(_, {
      toolTipContent: _(`#FAQEditor_Loc_Export_ttip`),
      children: (0, _.jsx)(`div`, {
        className: _,
        onClick: (_) => {
          _(
            (0, _.jsx)(_, {
              strTitle: _(`#EventEditor_Loc_Export`),
              bAlertDialog: !0,
              children: (0, _.jsx)(_, {
                fnGetLocData: () => _(_, _),
                bShowXML: !0,
                bShowCSV: !0,
                strFileNamePrefix: `faq`,
                lang: _,
              }),
            }),
            _(_),
          );
        },
        children: _(`#EventEditor_Loc_Export_Short`),
      }),
    });
  },
  _ = [
    0, 9, 8, 12, 14, 21, 2, 3, 20, 24, 13, 17, 16, 5, 6, 7, 15, 23, 11, 4, 19,
    25, 18, 1, 10, 28, 26, 22, 27, 29, 30, 31,
  ],
  _ = [
    23, 6, 7, 19, 13, 14, 15, 2, 1, 24, 18, 3, 10, 4, 16, 12, 11, 22, 20, 8, 5,
    27, 17, 9, 21, 26, 28, 30, 31,
  ],
  _ = (_) => {
    let {
        draft: _,
        rgAllLanguages: _,
        rgLanguagesSelected: _,
        fnSelectLanguages: _,
      } = _,
      _ = (_, _) => {
        let _ = _.includes(_);
        if (_ && !_) {
          let _ = _.slice();
          (_.push(_), _(_));
        } else if (!_ && _) {
          let _ = _.filter((_) => _ !== _);
          _(_);
        }
      },
      _ = (_) => {
        _(_ ? _.slice() : []);
      },
      _ = _.sort((_, _) => _[_] - _[_]).map((_) =>
        (0, _.jsx)(
          _,
          {
            draft: _,
            eLang: _,
            bInitialState: _.includes(_),
            fnOnChecked: _,
          },
          `langrow` + _ + _.GetFAQID(),
        ),
      );
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _(`#FAQCrowdin_LanguageHeader`),
            }),
            (0, _.jsx)(`div`, {
              className: void 0,
              children: _(`#FAQCrowdin_DraftTimestampHeader`),
            }),
          ],
        }),
        (0, _.jsx)(_, {
          className: _,
          label: _(`#FAQCrowdin_SelectAllCheckboxes`),
          onChange: _,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children:
            _ ??
            (0, _.jsx)(`div`, {
              children: _(`#FAQCrowdin_NoDraftFound`),
            }),
        }),
      ],
    });
  },
  _ = (_) => {
    let { draft: _, eLang: _, bInitialState: _, fnOnChecked: _ } = _,
      _ = _.GetLastSavedDraftVersion(_),
      _ = _
        ? _.InitFromAccountID(Number.parseInt(_.author_account_id), _.EUNIVERSE)
        : null,
      { data: _ } = _(_?.GetAccountID()),
      _ = _
        ? _(
            `#FAQCrowdin_SavedAtTimeByAuthor`,
            _(_.timestamp) +
              ` @ ` +
              _(_.timestamp, {
                bForce24HourClock: !1,
              }),
            _?.m_strPlayerName ?? _.author_account_id,
          )
        : _(`#FAQCrowdin_NoDraftFound`),
      _ = (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#Language_` + _(_)),
          }),
          (0, _.jsx)(`div`, {
            className: void 0,
            children: _,
          }),
        ],
      });
    return (0, _.jsx)(_, {
      className: _,
      label: _,
      checked: _,
      onChange: (_) => _(_, _),
    });
  };
function _(_) {
  let [_, _] = _(),
    [_, _] = _.useState(0),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(null),
    _ = _(`CrowdinImportDialog`),
    _ = _.useRef([]),
    _ = async () => {
      _(!0);
      for (let _ = 0; _ < _.length; _++) {
        _(_);
        let _ = _[_],
          _ = [];
        for (let _ = 0; _ < _.length; _ += 5) {
          let _ = _.slice(_, _ + 5);
          _.push(_.Get().ImportNonEnglishDraftsFromCrowdin(_.faq_id, _, _));
        }
        (await Promise.all(_),
          _.Get().BHasLiveEnglishVersion(_.faq_id)
            ? ((_.current[_] = _.Get().GetNonEnglishDraftsToPublish(_.faq_id)),
              console.log(
                `Going to publish FAQ`,
                _.faq_id,
                _.current[_].map((_) => _(_)),
              ))
            : console.log(`No live english version for:`, _.faq_id));
      }
      for (let _ = 0; _ < _.current.length; _++) {
        let _ = _[_],
          _ = _.current[_];
        if (_?.length > 0) {
          _(_);
          let _ = await _.Get().PublishDraftByLanguage(_.faq_id, _);
          if (_.token.reason) return;
          if (_ != 1) {
            _(_(`#FAQDashboard_PublishFailed`));
            return;
          }
        }
      }
      (_(!0), _(!1));
    };
  if (_)
    return (0, _.jsx)(_, {
      strTitle: _(`#FAQDashboard_CrowdinToolTitle`),
      strDescription: _,
      bAlertDialog: !0,
      bDestructiveWarning: !0,
      closeModal: _.closeModal,
    });
  if (_)
    return (0, _.jsx)(_, {
      strTitle: _(`#FAQDashboard_CrowdinToolTitle`),
      strDescription: _(`#FAQDashboard_PublishComplete`),
      bAlertDialog: !0,
      closeModal: _.closeModal,
    });
  let _ = (100 * (_ + 0.5)) / _.length,
    _ = _[_].internal_name;
  return (0, _.jsx)(_, {
    title: _(`#FAQDashboard_CrowdinToolTitle`),
    ..._,
    onCancel: () => _.cancel(`CrowdinImportDialog cancelled`),
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsxs)(_, {
          children: [
            _(`#FAQDashboard_CrowdinToolInstructionsWithCount`, _.length),
            (0, _.jsx)(`div`, {
              className: _,
              children: _(`#FAQDashboard_CrowdinToolWarning`),
            }),
          ],
        }),
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              onClick: _,
              disabled: _,
              children: _(`#FAQDashboard_UpdateAllFAQsButton`),
            }),
            _ &&
              (0, _.jsx)(_, {
                nProgressPct: _,
                strCurrentLabel: _,
              }),
            _.current.length > 0 &&
              (0, _.jsx)(_, {
                rgUpdatedLanguagesForAllFAQs: _.current,
              }),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  let { nProgressPct: _, strCurrentLabel: _ } = _;
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          style: {
            width: _ + `%`,
          },
        }),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#FAQDashboard_CrowdinToolProgress`, _),
      }),
    ],
  });
}
function _(_) {
  let { rgUpdatedLanguagesForAllFAQs: _ } = _,
    [_, _] = _();
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#FAQDashboard_CrowdinToolResultsLabel`),
      }),
      _.map((_, _) => {
        let _ = _[_];
        if (_.length == 0) return null;
        let _ = _.map((_) => _(_)).join(`,`);
        return (0, _.jsx)(
          `div`,
          {
            children: (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  toolTipContent: _.internal_name,
                  strTooltipClassname: _,
                  nAllowOffscreenPx: 4e4,
                  className: _,
                  children: _.url_code + `: `,
                }),
                (0, _.jsx)(_, {
                  toolTipContent: _,
                  strTooltipClassname: _,
                  nAllowOffscreenPx: 4e4,
                  direction: `left`,
                  className: _,
                  children: _,
                }),
              ],
            }),
          },
          _.faq_id,
        );
      }),
    ],
  });
}
var _ = `NBUvJ8CE384-`,
  _ = (_) => {
    let { rtTimestamp: _, bShowAsWarning: _ } = _;
    if (!_)
      return (0, _.jsx)(`div`, {
        className: _,
        children: _(`#FAQDashboard_TimeNever`),
      });
    let _ = Date.now() / 1e3 - _,
      _ = _ < 86400 ? _(_, !1, !0) : _(_);
    return (0, _.jsx)(_, {
      className: _ && `egvO-S9VIG4-`,
      rtFullDate: _,
      stylesmodule: _,
      children: _,
    });
  },
  _ = _((_) => {
    let [_, _] = _(),
      [_, _] = _.useState(1),
      _ = _.map((_) => {
        let _ =
            _.per_language_info.find((_) => _.language == 0)
              ?.last_update_timestamp || 0,
          _ = Array.from(
            _.per_language_info.filter(
              (_) => _.language != 0 && _.last_update_timestamp >= _,
            ),
          ).length,
          _ = Array.from(
            _.per_language_info.filter((_) => _.last_update_timestamp < _),
          ).length,
          _ = Array.from(
            _.per_language_info.filter(
              (_) => _.last_publish_timestamp >= _.last_update_timestamp,
            ),
          ).length,
          _ = Array.from(
            _.per_language_info.filter(
              (_) => _.last_publish_timestamp < _.last_update_timestamp,
            ),
          ).length;
        return [
          _.faq_id,
          _.internal_name,
          _,
          _,
          _,
          _,
          _,
          _.visible_in_global_realm,
          _.visible_in_china_realm,
        ];
      }).sort((_, _) => (_ == 1 ? _(_[1], _[1]) : _[_] - _[_]));
    return (
      (0, _.useEffect)(() => {
        _.Get().RemoveAllDirtyDrafts();
      }, []),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {
              eCurrentSortColumn: _,
              SetSortColumn: _,
            }),
            _.length == 0 &&
              (0, _.jsx)(`div`, {
                className: `LIGmEcGSWS0-`,
                children: _(`#FAQDashboard_Empty`),
              }),
            _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  rgColumns: _,
                },
                _[0],
              ),
            ),
            !_ &&
              (0, _.jsx)(_, {
                position: `center`,
                size: `xlarge`,
              }),
          ],
        }),
      })
    );
  }),
  _ = (_) => {
    let _ = _.useCallback(
        () =>
          _((0, _.jsx)(_, {}), window, {
            strTitle: _(`#FAQDashboard_CreateFAQButton`),
          }),
        [],
      ),
      _ = _.useCallback(
        () =>
          _(
            (0, _.jsx)(_, {
              bDisableBackgroundDismiss: !0,
            }),
            window,
            {
              strTitle: _(`#FAQDashboard_CrowdinToolTitle`),
            },
          ),
        [],
      );
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _(`#FAQDashboard_Header`),
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              onClick: _,
              children: _(`#FAQDashboard_CrowdinToolButton`),
            }),
            (0, _.jsx)(_, {
              onClick: _,
              children: _(`#FAQDashboard_CreateFAQButton`),
            }),
          ],
        }),
      ],
    });
  },
  _ = (_) => {
    let [_, _] = _.useState(``);
    return (0, _.jsxs)(_, {
      onOK: () => {
        _.Get().CreateFAQ(_);
      },
      bOKDisabled: _.length == 0,
      closeModal: _.closeModal,
      className: _,
      children: [
        (0, _.jsx)(_, {
          children: _(`#FAQDashboard_CreateFAQButton`),
        }),
        (0, _.jsx)(_, {
          children: (0, _.jsxs)(_, {
            children: [
              _(`#FAQDashboard_CreateFAQInstructions`),
              (0, _.jsx)(`input`, {
                type: `text`,
                className: _,
                value: _,
                placeholder: _(`#FAQDashboard_NamePlaceHolder`),
                onFocus: (_) => _.target.select(),
                onChange: (_) => _(_.currentTarget.value),
                maxLength: 120,
              }),
            ],
          }),
        }),
      ],
    });
  },
  _ = (_) =>
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          strLabelLocToken: `#FAQDashboard_NameColumn`,
          bIsNameColumn: !0,
          eThisColumn: 1,
          ..._,
        }),
        (0, _.jsx)(_, {
          strLabelLocToken: `#FAQDashboard_DraftTimetampColumn`,
          eThisColumn: 2,
          ..._,
        }),
        (0, _.jsx)(_, {
          strLabelLocToken: `#FAQDashboard_UpdatedLanguagesColumn`,
          eThisColumn: 3,
          ..._,
        }),
        (0, _.jsx)(_, {
          strLabelLocToken: `#FAQDashboard_StaleLanguagesColumn`,
          eThisColumn: 4,
          ..._,
        }),
        (0, _.jsx)(_, {
          strLabelLocToken: `#FAQDashboard_PublishedLanguagesColumn`,
          eThisColumn: 5,
          ..._,
        }),
        (0, _.jsx)(_, {
          strLabelLocToken: `#FAQDashboard_NeedPublishColumn`,
          eThisColumn: 6,
          ..._,
        }),
        (0, _.jsx)(_, {
          strLabelLocToken: `#FAQDashboard_VisibilityColumn`,
          eThisColumn: 7,
          ..._,
        }),
        (0, _.jsx)(_, {
          strLabelLocToken: `#FAQDashboard_SteamChinaVisibilityColumn`,
          eThisColumn: 8,
          ..._,
        }),
      ],
    }),
  _ = (_) => {
    let {
        strLabelLocToken: _,
        bIsNameColumn: _,
        eThisColumn: _,
        eCurrentSortColumn: _,
        SetSortColumn: _,
      } = _,
      _ = _(_, _, _ ? _ : _, _ == _ && `_2WRHjrJZHEM-`);
    return (0, _.jsxs)(_, {
      toolTipContent: _(_ + `_ttip`),
      direction: `top`,
      className: _,
      onClick: () => _(_),
      children: [
        _(_),
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {}),
        }),
      ],
    });
  },
  _ = (_) => {
    let { nCount: _, nTotal: _, nGoal: _ } = _;
    return (0, _.jsx)(`div`, {
      className: _ == _ ? _ : _,
      children: _ + ` / ` + _,
    });
  },
  _ = (_) => {
    let { bIsVisible: _ } = _;
    return (0, _.jsx)(`div`, {
      className: _ ? _ : _,
      children: _(_ ? `#FAQDashboard_Visible` : `#FAQDashboard_Invisible`),
    });
  },
  _ = (_) => {
    let [_, _, _, _, _, _, _, _, _] = _.rgColumns,
      _ = _ + _,
      _ = _ + _;
    return (0, _.jsxs)(_, {
      route: _.k_eCommunityEdit,
      faqid: _,
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _(_, _),
          children: (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
        }),
        (0, _.jsx)(`div`, {
          className: _(_, _),
          children: (0, _.jsx)(_, {
            rtTimestamp: _,
          }),
        }),
        (0, _.jsx)(`div`, {
          className: _(_, _),
          children: (0, _.jsx)(_, {
            nCount: _,
            nTotal: _,
            nGoal: _,
          }),
        }),
        (0, _.jsx)(`div`, {
          className: _(_, _),
          children: (0, _.jsx)(_, {
            nCount: _,
            nTotal: _,
            nGoal: 0,
          }),
        }),
        (0, _.jsx)(`div`, {
          className: _(_, _),
          children: (0, _.jsx)(_, {
            nCount: _,
            nTotal: _,
            nGoal: _,
          }),
        }),
        (0, _.jsx)(`div`, {
          className: _(_, _),
          children: (0, _.jsx)(_, {
            nCount: _,
            nTotal: _,
            nGoal: 0,
          }),
        }),
        (0, _.jsx)(`div`, {
          className: _(_, _),
          children: (0, _.jsx)(_, {
            bIsVisible: _,
          }),
        }),
        (0, _.jsx)(`div`, {
          className: _(_, _),
          children: (0, _.jsx)(_, {
            bIsVisible: _,
          }),
        }),
      ],
    });
  },
  _ = (_) => (
    _.useEffect(
      () => (
        (window.onbeforeunload = () =>
          _.Get()
            .GetLoadedDraftObjs()
            ?.filter((_) => _.BNeedsSaving())?.length > 0
            ? _(`#EventEditor_UnsavedChanges`)
            : null),
        () => {
          window.onbeforeunload = () => {};
        }
      ),
      [],
    ),
    (0, _.jsx)(_, {
      message: (_) =>
        _.Get()
          .GetLoadedDraftObjs()
          ?.filter((_) => _.BNeedsSaving())?.length > 0 &&
        (_.pathname == _.DashboardFAQ(_.VANITY_ID) ||
          _.pathname?.startsWith(_.ViewFAQ(_.VANITY_ID, ``).slice(0, -1)))
          ? _(`#EventEditor_UnsavedChanges`)
          : !0,
    })
  ),
  _ = `_5U-wyIj4ywo-`,
  _ = `XM1YgomE4w0-`,
  _ = `_7H-8PdGT-o4-`,
  _ = `SU46TyPU5jI-`,
  _ = `_6-C9N7YQUn4-`,
  _ = `_0G0C7uElOA0-`,
  _ = `XBtRFvNIcDc-`,
  _ = `_68OZGlEN4jA-`,
  _ = `EbZ5bPgE88A-`,
  _ = `DWeSEuXZscA-`,
  _ = `u6ODiONWujc-`,
  _ = `vnHjs00M4YY-`,
  _ = `gvU9pno4fv8-`,
  _ = `Wqfu7vSr7TU-`,
  _ = `QbUjyUopYvQ-`,
  _ = `syeh3T1FQhc-`,
  _ = (_) =>
    (0, _.jsx)(_, {
      toolTipContent: _(`#FAQEditor_DeleteAction_ttip`),
      children: (0, _.jsx)(`div`, {
        className: _(_, _),
        onClick: (_) => {
          _(
            (0, _.jsx)(_, {
              draft: _.draft,
            }),
            _(_),
          );
        },
        children: _(`#FAQEditor_DeleteAction`),
      }),
    }),
  _ = (_) => {
    let { draft: _ } = _,
      _ = () => _.closeModal && _.closeModal(),
      [_, _] = _.useState(!1),
      [_, _] = _.useState(void 0),
      _ = (0, _.jsx)(`div`, {
        children: _(`#FAQEditor_DeleteDesc`),
      });
    return (
      _
        ? (_ = (0, _.jsx)(_, {
            position: `center`,
            size: `medium`,
            string: _(`#FAQEditor_DeletingInProgress`),
          }))
        : _ &&
          (_ = (0, _.jsx)(`div`, {
            children: _(
              `Error_Description`,
              _,
              _(`#Error_GenericFailureDescription`),
            ),
          })),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          onEscKeypress: _,
          children: (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                children: _(`#FAQEditor_DeleteAction`),
              }),
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  children: _,
                }),
              }),
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  onCancel: _,
                  bOKDisabled: !!(_ || _),
                  strOKText: _(`#FAQEditor_DeleteAction`),
                  strCancelText: _ || _ ? _(`#Button_OK`) : void 0,
                  onOK: async () => {
                    (_(!0),
                      _.Get()
                        .DeleteFAQ(_.GetFAQID())
                        .then((_) => {
                          if (_ == 1) {
                            let _ =
                              _.COMMUNITY_BASE_URL.substr(
                                0,
                                _.COMMUNITY_BASE_URL.length - 1,
                              ) + _(_.k_eCommunityDashboard);
                            window.location.href = _;
                          }
                          _(_);
                        })
                        .catch((_) => {
                          let _ = _(_);
                          (console.error(
                            `FAQDeleteDialog: hit error: ` + _.strErrorMsg,
                            _,
                          ),
                            _(2));
                        })
                        .finally(() => _(!1)));
                  },
                }),
              }),
            ],
          }),
        }),
      })
    );
  },
  _ = _((_) => {
    let { draft: _, bDisabled: _ } = _,
      _ = _.BNeedsSaving();
    return (0, _.jsx)(_, {
      toolTipContent: _(
        _ ? `#FAQPublish_SaveRequire_ttip` : `#FAQPublish_Publish_ttip`,
      ),
      children: (0, _.jsx)(`div`, {
        className: _(_, _ && `rPlDZ1xmEm8-`),
        onClick: (_) => {
          _ ||
            _(
              _
                ? (0, _.jsx)(_, {
                    strDescription: _(`#FAQPublish_SaveRequire_ttip`),
                  })
                : (0, _.jsx)(_, {
                    draft: _.draft,
                  }),
              _(_),
            );
        },
        children: _(`#FAQPublish_Publish`),
      }),
    });
  }),
  _ = (_) => {
    let { draft: _ } = _,
      _ = () => _.closeModal && _.closeModal(),
      [_, _] = _.useState(!1),
      [_, _] = _.useState(void 0),
      [_, _] = _.useState(void 0),
      [_, _] = _(_.GetFAQID()),
      [_, _] = _.useState([]),
      _ = null;
    if (!_)
      _ = (0, _.jsx)(_, {
        size: `small`,
        position: `center`,
        string: _(`#FAQPublish_PublishWait`),
      });
    else if (_)
      _ = (0, _.jsx)(_, {
        position: `center`,
        size: `medium`,
        string: _(`#FAQPublish_Publishing`),
      });
    else if (_)
      _ = (0, _.jsx)(`div`, {
        children: _(`#FAQPublish_Success`),
      });
    else if (_)
      _ = (0, _.jsx)(`div`, {
        children: _(
          `#Error_Description`,
          _,
          _(`#Error_GenericFailureDescription`),
        ),
      });
    else if (!_)
      _ = (0, _.jsx)(`div`, {
        children: _(`#FAQPublish_LoadError`),
      });
    else {
      let _ = _.per_language_info
        ?.filter((_) => _.last_publish_timestamp < _.last_update_timestamp)
        .map((_) => _.language);
      _ = (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`div`, {
            children: _(`#FAQPublish_Desc`),
          }),
          (0, _.jsx)(`br`, {}),
          (0, _.jsx)(`div`, {
            children: _(`#FAQPublish_Desc2`),
          }),
          (0, _.jsx)(`br`, {}),
          (0, _.jsx)(_, {
            draft: _,
            rgAllLanguages: _,
            rgLanguagesSelected: _,
            fnSelectLanguages: _,
          }),
        ],
      });
    }
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        onEscKeypress: _,
        children: (0, _.jsxs)(_, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              children: _(`#FAQPublish_Publish`),
            }),
            (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {
                children: _,
              }),
            }),
            (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {
                onCancel: _,
                bOKDisabled: !!(_ || _ || _ || _.length == 0),
                strOKText: _(`#FAQPublish_Publish`),
                strCancelText: _ || _ || _ ? _(`#Button_OK`) : void 0,
                onOK: async () => {
                  (_(!0),
                    _.Get()
                      .PublishDraftByLanguage(_.GetFAQID(), _)
                      .then((_) => {
                        (_ == 1 && _(!0), _(_));
                      })
                      .catch((_) => {
                        let _ = _(_);
                        (console.error(
                          `FAQPublishDialog: hit error: ` + _.strErrorMsg,
                          _,
                        ),
                          _(2));
                      })
                      .finally(() => _(!1)));
                },
              }),
            }),
          ],
        }),
      }),
    });
  },
  _ = (_) =>
    (0, _.jsx)(_, {
      toolTipContent: _(`#FAQEditor_ChangeVisible_ttip`),
      children: (0, _.jsx)(`div`, {
        className: _,
        onClick: (_) => {
          _(
            (0, _.jsx)(_, {
              draft: _.draft,
            }),
            _(_),
          );
        },
        children: _(`#FAQEditor_EditVisible`),
      }),
    }),
  _ = (_) => {
    let { draft: _ } = _,
      _ = () => _.closeModal && _.closeModal(),
      [_, _] = _.useState(!1),
      [_, _] = _.useState(void 0),
      [_, _] = _.useState(void 0),
      _ = _.Get().GetFAQArticleSummary(_.GetFAQID()),
      [_, _] = _.useState(_.visible_in_global_realm),
      [_, _] = _.useState(_.visible_in_china_realm),
      _ = (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(`div`, {
            children: _(`#FAQEditor_ChangeVisible_Desc`),
          }),
          (0, _.jsx)(_, {
            label: _(`#FAQEditor_VisibleInGlobal`),
            checked: _,
            onChange: (_) => _(_),
          }),
          (0, _.jsx)(_, {
            label: _(`#FAQEditor_VisibleInChina`),
            checked: _,
            tooltip: _(`#FAQEditor_VisibleInChina_ttip`),
            onChange: (_) => _(_),
          }),
        ],
      });
    return (
      _
        ? (_ = (0, _.jsx)(_, {
            position: `center`,
            size: `medium`,
            string: _(`#FAQEditor_ChangeVisible_InProgress`),
          }))
        : _
          ? (_ = (0, _.jsx)(`div`, {
              children: _(`#FAQEditor_ChangeVisible_Success`),
            }))
          : _ &&
            (_ = (0, _.jsx)(`div`, {
              children: _(
                `Error_Description`,
                _,
                _(`#Error_GenericFailureDescription`),
              ),
            })),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          onEscKeypress: _,
          children: (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                children: _(`#FAQEditor_ChangeVisible`),
              }),
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  children: _,
                }),
              }),
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  onCancel: _,
                  bOKDisabled: !!(_ || _ || _),
                  strOKText: _(`#FAQEditor_ChangeVisible`),
                  strCancelText: _ || _ || _ ? _(`#Button_OK`) : void 0,
                  onOK: async () => {
                    (_(!0),
                      _.Get()
                        .UpdateVisibility(_.GetFAQID(), _, _)
                        .then((_) => {
                          (_ == 1 && _(!0), _(_));
                        })
                        .catch((_) => {
                          let _ = _(_);
                          (console.error(
                            `FAQChangeVisibilityDialog: hit error: ` +
                              _.strErrorMsg,
                            _,
                          ),
                            _(2));
                        })
                        .finally(() => _(!1)));
                  },
                }),
              }),
            ],
          }),
        }),
      })
    );
  },
  _ = `blM4bFZXLIk-`,
  _ = `CRU83TBl7pk-`,
  _ = `_1uNROKtIFbo-`,
  _ = `_5LM9I10plNM-`,
  _ = `uGWno2xQB0Y-`,
  _ = `BgdZCSG01tM-`,
  _ = `r1aa-W9tGrs-`,
  _ = `WR5KmKIWLW0-`,
  _ = `PL0l75ONAgc-`,
  _ = `_8iKjymJM5Mk-`,
  _ = `_2MeFppaz7Kg-`,
  _ = `_2yPR2ZgXFns-`,
  _ = `cCEUdVcX5R8-`,
  _ = `yiNao4kxF-k-`,
  _ = _((_) => {
    let { draft: _, eLanguage: _ } = _,
      _ = _.GetFAQID(),
      [_, _] = _(_);
    if (!_) return null;
    let _ = _?.per_language_info?.find(
        (_) => _.language == 0,
      )?.last_update_timestamp,
      _ = _?.per_language_info?.some(
        (_) => _.last_publish_timestamp < _.last_update_timestamp,
      ),
      _ = _?.per_language_info
        ?.slice()
        .sort((_, _) => _[_.language] - _[_.language])
        ?.map((_) =>
          (0, _.jsx)(
            _,
            {
              info: _,
              rtEnglishUpdateTime: _,
            },
            _.language,
          ),
        );
    return (0, _.jsx)(_, {
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(`div`, {
                className: _,
                children: [_(`#FAQDashboard_VisibilityColumn`), ` `],
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, _.jsxs)(`div`, {
                        className: _(_, _),
                        children: [
                          _(`#FAQDashboard_VisibleInGlobalRealmLabel`),
                          `\xA0`,
                          (0, _.jsx)(_, {
                            bIsVisible: _.visible_in_global_realm,
                          }),
                        ],
                      }),
                      (0, _.jsxs)(`div`, {
                        className: _(_, _),
                        children: [
                          _(`#FAQDashboard_VisibleInChinaRealmLabel`),
                          `\xA0`,
                          (0, _.jsx)(_, {
                            bIsVisible: _.visible_in_china_realm,
                          }),
                        ],
                      }),
                      (0, _.jsx)(`div`, {
                        className: _,
                        children: (0, _.jsx)(_, {
                          draft: _,
                        }),
                      }),
                    ],
                  }),
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      _
                        ? (0, _.jsx)(`div`, {
                            className: _,
                            children: _(`#FAQStatus_DraftVersionsDesc`),
                          })
                        : (0, _.jsx)(`div`, {
                            className: _,
                            children: _(`#FAQStatus_NothingToPublish`),
                          }),
                      (0, _.jsx)(`div`, {
                        className: _,
                        children: (0, _.jsx)(_, {
                          draft: _,
                          bDisabled: !_,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _(`#FAQDashboard_LocalizationSection`),
              }),
              _.is_support &&
                (0, _.jsx)(_, {
                  draft: _,
                }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(`#FAQDashboard_LocalizationSectionDesc`),
                  }),
                  (0, _.jsx)(_, {
                    draft: _,
                    eLanguage: _,
                  }),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(`#EventEditor_Loc_CrowdinIntegration_Desc`),
                  }),
                  (0, _.jsx)(_, {
                    draft: _,
                  }),
                ],
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _(`#FAQStatus_LocalizedVersionStatusHeader`),
              }),
              (0, _.jsxs)(`table`, {
                className: _,
                children: [
                  (0, _.jsx)(`thead`, {
                    children: (0, _.jsxs)(`tr`, {
                      children: [
                        (0, _.jsx)(`th`, {
                          children: _(`#LanguageTitle`),
                        }),
                        (0, _.jsx)(`th`, {
                          children: _(`#FAQStatus_LastUpdated`),
                        }),
                        (0, _.jsx)(`th`, {
                          children: _(`#FAQStatus_LastPublished`),
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)(`tbody`, {
                    children: _,
                  }),
                ],
              }),
            ],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              draft: _,
            }),
          }),
        ],
      }),
    });
  }),
  _ = _((_) => {
    let { draft: _ } = _;
    _(_.GetFAQID());
    let _ = _(_.CLANSTEAMID, _.GetFAQID()),
      [_, _] = (0, _.useState)(-1),
      [_, _] = (0, _.useState)(!1);
    return (
      _.isSuccess &&
        _.data.crowdin_file_id &&
        `${_.data.crowdin_project_id}${_.data.crowdin_file_id}`,
      null
    );
  }),
  _ = _((_) => {
    let { info: _, rtEnglishUpdateTime: _ } = _,
      _ = !!_ && _ > _.last_update_timestamp,
      _ = _.last_update_timestamp > _.last_publish_timestamp;
    return (0, _.jsxs)(`tr`, {
      children: [
        (0, _.jsx)(`td`, {
          children: _(`#Language_` + _(_.language)),
        }),
        (0, _.jsx)(`td`, {
          children: (0, _.jsx)(_, {
            rtTimestamp: _.last_update_timestamp,
            bShowAsWarning: _,
          }),
        }),
        (0, _.jsx)(`td`, {
          children: (0, _.jsx)(_, {
            rtTimestamp: _.last_publish_timestamp,
            bShowAsWarning: _,
          }),
        }),
      ],
    });
  });
function _(_) {
  let _ = _();
  return _({
    mutationKey: [`fetch_faq_translation`, _],
    mutationFn: async (_) => {
      let _ = _.Init(_);
      return (
        _.Body().set_faq_id(_),
        _.Body().set_language(_),
        _.Body().set_steamid(_.CLANSTEAMID),
        (await _.FetchLocalizationFromCrowdIn(_, _)).GetEResult()
      );
    },
  });
}
function _(_, _) {
  let _ = _();
  return _({
    queryKey: [`get_faq_crowdin_metadata`, _, _],
    queryFn: async () => {
      let _ = _.Init(_);
      return (
        _.Body().set_faq_id(_),
        _.Body().set_steamid(_),
        (await _.GetCrowdInMetadata(_, _)).Body().toObject()
      );
    },
  });
}
var _ = _((_) => {
    let { draft: _ } = _,
      _ = _.BNeedsSaving();
    return (0, _.jsx)(`div`, {
      className: `btn_green_steamui btn_medium`,
      onClick: (_) =>
        _(
          (0, _.jsx)(_, {
            draft: _.draft,
          }),
          _(_),
        ),
      children: (0, _.jsxs)(`span`, {
        children: [
          !_ &&
            (0, _.jsx)(`img`, {
              className: `FIGxwNiJB6c-`,
              src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEFERTQyQ0E1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEFERTQyQ0I1Q0EyMTFFNTgwMzNBQUE0RTk3QjgyMDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQURFNDJDODVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQURFNDJDOTVDQTIxMUU1ODAzM0FBQTRFOTdCODIwOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prxq/1gAAAGJSURBVHjaYvz//z/DQAImhgEG9HTASiDeiiEKigI64Pj/CLAJiBlhcvSwXPc/JjgLxIIgeUYaJ0JBIL4NxMJY5B4BcTitHXAeiA3wyL+kZSJcQMByEEimVbxn/ScM8mmVCK2IsHwhTD2104AwNHFx4VFzAYgNaVUQ7SFg+Q8gdqZVSTifiEQHsvwdvpKQGYiDyIj3HCLiPRubXnSBBVDFE2iV6PA5IAlN0woiLJcG4h8ELD+PzwwYwxiH5sNALIzHgNsELH8DxEKEHCAGxB/xGPIEiNWwaF5PRNDrEQpFEHGZCIO+ArEjksZKIvTEE5OGQEQyEP/7TxwAJThDItRNIjYRwxgGQPz2P3XAEVKyMHJRLAvEu4FYnYLC6D3UnK/ktAkfA7EeEB+kwAEOpFiOr024mIygjyWn9sQn2UOC5VPJrb4JKcglwvLDlLQfiFHkDcR/cVj+CIjZaO0AfNlUidIWFCmKZYD4GpLlgdRowpHaJGMH4v1AfBGIM6nRiqF1v2Dw944BAgwAsWqnpJAiSOIAAAAASUVORK5CYII=`,
            }),
          _(_ ? `#Button_Save` : `#Button_Saved`),
        ],
      }),
    });
  }),
  _ = (_) => {
    let { draft: _, closeModal: _ } = _,
      [_, _] = _.useState(!0),
      [_, _] = _.useState(void 0);
    _.useEffect(() => {
      (async () => {
        _(!0);
        try {
          let _ = await _.SaveDrafts();
          _(_);
        } catch (_) {
          (_(2),
            console.log(
              `FAQSaveProgressDialog hit exception ` + _(_).strErrorMsg,
            ));
        } finally {
          _(!1);
        }
      })();
    }, [_]);
    let _ = _.useId();
    return (0, _.jsxs)(_, {
      "aria-labelledby": _,
      bAllowFullSize: !0,
      onCancel: _,
      closeModal: _,
      children: [
        (0, _.jsx)(_, {
          _: _,
          children: _
            ? (0, _.jsx)(`div`, {
                children: _(`#FAQSave_Saving`),
              })
            : (0, _.jsxs)(`div`, {
                children: [
                  _(_ == 1 ? `#FAQSave_SaveSuccess` : `#FAQSave_Error`),
                  ` `,
                ],
              }),
        }),
        (0, _.jsx)(_, {
          children: _
            ? (0, _.jsx)(_, {
                size: `medium`,
                position: `center`,
              })
            : (0, _.jsx)(`div`, {
                children:
                  _ == 1
                    ? (0, _.jsx)(`div`, {
                        children: _(`#FAQSave_SaveSuccess_desc`),
                      })
                    : (0, _.jsx)(`div`, {
                        children: _(
                          `#Error_Description`,
                          _,
                          _(`#Error_GenericFailureDescription`),
                        ),
                      }),
              }),
        }),
        (0, _.jsx)(_, {
          children:
            !_ &&
            (0, _.jsx)(_, {
              onClick: _,
              children: _(`#Button_OK`),
            }),
        }),
      ],
    });
  },
  _ = `mZQqPWZ36ck-`,
  _ = `sZZCyY-6QMg-`,
  _ = _((_) => {
    let { draft: _, bPreview: _ } = _,
      _ = _.BHasPublished();
    return (0, _.jsx)(_, {
      children: (0, _.jsxs)(`div`, {
        className: _({
          [_]: !0,
          [_]: !_ && !_,
          [_]: !_ && _,
          [void 0]: _,
        }),
        children: [
          (0, _.jsx)(_, {
            route: _ ? _.k_eCommunityEdit : _.k_eCommunityDashboard,
            faqid: _.GetFAQID(),
            className: _,
            children: _(
              _ ? `#FAQEditor_EditFAQ` : `#EventDisplay_EventsDashBtn`,
            ),
          }),
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: _(
                  _
                    ? `#FAQEditor_InternalName_Preview`
                    : `#FAQEditor_InternalName`,
                ),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  _.GetFAQInternalName(),
                  (0, _.jsx)(`img`, {
                    src: _,
                    onClick: (_) =>
                      _(
                        (0, _.jsx)(_, {
                          draft: _,
                        }),
                        _(_),
                      ),
                  }),
                ],
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                selectedLang: _.Get().GetCurEditLanguage(),
                fnOnLanguageChanged: _.Get().SetCurEditLanguage,
                fnLangHasData: _.BHasSomeTextForLanguage,
                fnIsLangSupported: (_) => !0,
                fnLastUpdateRTime: _.GetLastTimeLanguageUpdated,
                realms: [_.k_ESteamRealmGlobal, _.k_ESteamRealmChina],
              }),
              !_ &&
                (0, _.jsx)(_, {
                  route: _.k_eCommunityPreview,
                  faqid: _.GetFAQID(),
                  className: `ugkEbNZ8MZc-`,
                  children: _(`#Button_Preview`),
                }),
            ],
          }),
        ],
      }),
    });
  }),
  _ = (_) => {
    let { closeModal: _, draft: _ } = _,
      [_, _] = _.useState(_.GetFAQInternalName() || ``),
      [_, _] = _.useState(!1),
      [_, _] = _.useState(1),
      [_, _] = _.useState(!1);
    return (0, _.jsxs)(_, {
      title: _(`#FAQEditor_ChangeInternalName`),
      bAllowFullSize: !0,
      onCancel: _,
      closeModal: _,
      children: [
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(`div`, {
              children: _(`#FAQEditor_ChangeInternalName_desc`),
            }),
            (0, _.jsx)(`input`, {
              type: `text`,
              value: _,
              placeholder: _(`#FAQEditor_ChangeInternalName`),
              onFocus: (_) => _.target.select(),
              onChange: (_) => _(_.currentTarget.value),
              maxLength: 240,
              disabled: _,
            }),
            !(!_ || _) &&
              (0, _.jsx)(_, {
                string: _(`#Updating`),
                position: `center`,
                size: `medium`,
              }),
            _ &&
              (0, _.jsx)(`span`, {
                children:
                  _ == 1
                    ? _(`#EventDisplay_Share_Success`)
                    : _(
                        `#Error_Description`,
                        _,
                        _(`#Error_GenericFailureDescription`),
                      ),
              }),
          ],
        }),
        (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            bOKDisabled: _.trim().length == 0 || _,
            onCancel: _,
            strCancelText: _(_ ? `#Button_Close` : `#Button_Cancel`),
            onOK: async () => {
              (_(!0),
                _.Get()
                  .UpdateInternalName(_.GetFAQID(), _)
                  .then((_) => _(_))
                  .finally(() => {
                    _(!0);
                  }));
            },
          }),
        }),
      ],
    });
  },
  _ = _((_) => {
    let { draft: _, eLanguage: _ } = _,
      _ = _.GetFAQID(),
      [_, _] = _(_),
      _ = _ && _.per_language_info.find((_) => _.language == _),
      _ =
        _ &&
        ((_.EREALM == _.k_ESteamRealmGlobal && _.visible_in_global_realm) ||
          (_.EREALM == _.k_ESteamRealmChina && _.visible_in_china_realm)) &&
        !!_?.last_publish_timestamp;
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(`div`, {
        className: _(_),
        children: (0, _.jsxs)(`div`, {
          className: _,
          style: {
            width: `unset`,
            justifyContent: `center`,
          },
          children: [
            (0, _.jsx)(_, {
              draft: _,
            }),
            !!_ &&
              (0, _.jsx)(`div`, {
                className: `ugkEbNZ8MZc-`,
                children: (0, _.jsx)(`a`, {
                  href: _.HELP_BASE_URL + `faqs/view/` + _.url_code,
                  children: _(`#FAQEditir_ViewLiveFAQ`),
                }),
              }),
          ],
        }),
      }),
    });
  }),
  _ = _((_) => {
    let { faqid: _ } = _,
      [_, _] = _(_),
      _ = _.useRef(void 0);
    if (!_)
      return (0, _.jsx)(_, {
        position: `center`,
        size: `xlarge`,
        string: _(`#Loading`),
      });
    if (!_)
      return (0, _.jsx)(_, {
        strError: _(`#FAQEditor_NoFAQFound`),
      });
    let _ = _.Get().GetCurEditLanguage();
    return (0, _.jsxs)(`div`, {
      children: [
        (0, _.jsx)(_, {
          draft: _,
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                draft: _,
                eLanguage: _,
              }),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsxs)(`div`, {
                  className: _(_, _),
                  children: [
                    (0, _.jsxs)(`div`, {
                      className: _(_, _),
                      children: [
                        (0, _.jsx)(_, {
                          draft: _,
                          eLanguage: _,
                        }),
                        (0, _.jsx)(_, {
                          bbcodeEditorRef: _,
                          draft: _,
                          eLanguage: _,
                        }),
                      ],
                    }),
                    (0, _.jsx)(_, {
                      draft: _,
                      bbcodeEditorRef: _,
                      className: _(_, _),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        (0, _.jsx)(_, {
          draft: _,
          eLanguage: _,
        }),
      ],
    });
  }),
  _ = (_) => {
    let _ = (0, _.useMemo)(() => new _(_.CLANSTEAMID), []);
    if (!_.CAN_UPLOAD_IMAGES) return null;
    let { draft: _, bbcodeEditorRef: _ } = _;
    return (0, _.jsx)(_, {
      children: (0, _.jsxs)(`div`, {
        className: _.className,
        children: [
          (0, _.jsx)(`div`, {
            children: _(`#FAQEditor_ImageTitle`),
          }),
          (0, _.jsx)(_, {
            bShowLightBox: !0,
            appid: void 0,
            clanSteamID: _,
            imageInsertCallBack: (_, _) => _.current && _(_?.current, _, _),
            fnSetImageURL: () => {},
            rgRealmList: _.GetIncludedRealmList(),
            fnLangHasData: _.BHasSomeTextForLanguage,
            fnGetImageHash: (_, _) => {
              if (_.includes(_)) {
                let _ = _.GetAllLocalizedGroupImages();
                return _ && _.length > _ && _[_] != null ? _[_] : null;
              }
              return null;
            },
            partnerEventStore: _,
          }),
        ],
      }),
    });
  },
  _ = _((_) => {
    let { draft: _, eLanguage: _ } = _;
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _(`#FAQEditor_TitleLabel`),
        }),
        (0, _.jsx)(`input`, {
          type: `text`,
          className: _,
          value: _.GetDraftTitle(_) || ``,
          placeholder: _(`#FAQEditor_TitlePlaceHolder`),
          onFocus: (_) => _.target.select(),
          onChange: (_) => _.SetDraftTitle(_, _.currentTarget.value),
          maxLength: 120,
        }),
      ],
    });
  }),
  _ = _((_) => {
    let { draft: _, eLanguage: _, bbcodeEditorRef: _ } = _;
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _(`#FAQEditor_ContentLabel`),
        }),
        (0, _.jsx)(_, {
          ref: _,
          fnGetCurText: () => _.GetDraftContent(_) || ``,
          fnOnTextChange: (_) => _.SetDraftContent(_, _.currentTarget.value),
          fnSetText: (_) => _.SetDraftContent(_, _),
          strPlaceholder: _(`#FAQEditor_ContentPlaceHolder`),
          bSupportHTMLImport: !0,
          showFormatHelp: `PartnerEvents`,
          className: _,
          classNameForTextArea: _,
        }),
      ],
    });
  }),
  _ = (_) =>
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _.strError,
        }),
        (0, _.jsx)(_, {
          route: _.k_eCommunityDashboard,
          className: _,
          children: _(`#FAQEditor_GoToDashboard`),
        }),
      ],
    }),
  _ = `a2UdikiVkck-`,
  _ = `YDzLB1AUc00-`,
  _ = `_8dRokwI7qvo-`,
  _ = `-LwR-Y49Qjs-`,
  _ = `V1UdW6-ZPLQ-`,
  _ = `skUGxU3Soa4-`,
  _ = `Q59fS8HNVXE-`,
  _ = `zv8yZjEH8OA-`,
  _ = `jY2BfYME35c-`,
  _ = `QM-CrfV266o-`,
  _ = (_) => {
    let {
        title: _,
        content: _,
        bIsPreview: _,
        elSideBars: _,
        version: _,
        language: _,
      } = _,
      _ = _();
    return (
      _.useEffect(() => {
        let _ = _?.hash?.substr(+(_?.hash?.substr(0, 1) === `#`));
        _ &&
          document.getElementById(_)?.scrollIntoView({
            block: `start`,
            behavior: `smooth`,
          });
      }, [_]),
      (0, _.jsxs)(`div`, {
        className: _(_, _.LANGUAGE),
        children: [
          (0, _.jsx)(`a`, {
            className: _,
            href: `${_.HELP_BASE_URL}`,
            children: _(`#FAQViewer_SteamSupport`),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(`div`, {
                className: _(_),
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                  }),
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, _.jsx)(`div`, {
                        className: _,
                        role: `heading`,
                        "aria-level": 1,
                        children: _,
                      }),
                      (0, _.jsx)(`div`, {
                        className: _,
                        children: (0, _.jsx)(_, {
                          text: _,
                          bShowErrorInfo: _,
                          version: _ || `0`,
                          language: _,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(`div`, {
                  className: _,
                  children: _,
                }),
              }),
            ],
          }),
        ],
      })
    );
  },
  _ = (_) =>
    (0, _.jsx)(`div`, {
      className: _,
      children: _.children,
    }),
  _ = `wT3kSyT1vtw-`,
  _ = `fhSy32c8EWo-`,
  _ = `zktSK2ybNbU-`,
  _ = `VTYYqUrNc1w-`,
  _ = `nC9n0kLtumQ-`,
  _ = `tJUYbVsoqiw-`,
  _ = (_) => {
    let { faqContent: _ } = _,
      [_, _] = _(_.faq_id, _.version, _.language);
    return _.Get().BHasFAQEdit()
      ? (0, _.jsxs)(`div`, {
          className: _(_, _),
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _(`#FAQViewer_AdminLinks`),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _(
                `#FAQViewer_Admin_LastUpdate`,
                _?.author_account_id
                  ? (0, _.jsx)(_, {
                      accountID: Number.parseInt(_.author_account_id),
                    })
                  : _(`#FAQViewer_UnknownUser`),
                (0, _.jsx)(`span`, {
                  children:
                    _(_.timestamp) +
                    `@` +
                    _(_.timestamp, {
                      bForce24HourClock: !1,
                    }),
                }),
              ),
            }),
            (0, _.jsx)(_, {
              faqContent: _,
            }),
            (0, _.jsx)(_, {
              faqid: _.faq_id,
              route: _.k_eCommunityEdit,
              bForceAnchor: !0,
              children: _(`#FAQViewer_GotoEditor`),
            }),
          ],
        })
      : null;
  },
  _ = (_) => {
    let { faqContent: _ } = _,
      [_, _] = _(_.faq_id);
    if (!_ || !_ || _.GetLastTimeLanguageUpdated(_.language) <= _.timestamp)
      return null;
    let _ = _.GetLastSavedDraftVersion(_.language);
    return (0, _.jsx)(`div`, {
      className: _,
      children: _(
        `#FAQViewer_DraftNewer`,
        (0, _.jsx)(_, {
          accountID: Number.parseInt(_.author_account_id),
        }),
        (0, _.jsx)(`span`, {
          children:
            _(_.timestamp) +
            `@` +
            _(_.timestamp, {
              bForce24HourClock: !1,
            }),
        }),
      ),
    });
  },
  _ = (_) =>
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsxs)(`div`, {
          className: _(_, _),
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                role: `presentation`,
              }),
            }),
            (0, _.jsxs)(`div`, {
              className: void 0,
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _(`#FAQViewer_SideBar_ProblemWithSteam_Title`),
                }),
                (0, _.jsx)(`div`, {
                  children: _(`#FAQViewer_SideBar_ProblemWithSteam_Desc`),
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(`a`, {
                    href: _.HELP_BASE_URL,
                    className: _,
                    children: _(`#FAQViewer_SideBar_ProblemWithSteam_Link`),
                  }),
                }),
              ],
            }),
          ],
        }),
        !_() &&
          (0, _.jsxs)(`div`, {
            className: _(`fhSy32c8EWo-`, `dSiEYPQQjIk-`),
            children: [
              (0, _.jsx)(`div`, {
                className: `VTYYqUrNc1w-`,
                children: (0, _.jsx)(_, {
                  role: `presentation`,
                }),
              }),
              (0, _.jsxs)(`div`, {
                className: void 0,
                children: [
                  (0, _.jsx)(`div`, {
                    className: `nC9n0kLtumQ-`,
                    children: _(`#FAQViewer_SideBar_CommunityHelp_Title`),
                  }),
                  (0, _.jsx)(`div`, {
                    children: _(`#FAQViewer_SideBar_CommunityHelp_Desc`),
                  }),
                  (0, _.jsx)(`div`, {
                    className: `tJUYbVsoqiw-`,
                    children: (0, _.jsx)(`a`, {
                      href: _.COMMUNITY_BASE_URL + `discussions`,
                      className: `ugkEbNZ8MZc-`,
                      children: _(`#FAQViewer_SideBar_CommunityHelp_Link`),
                    }),
                  }),
                ],
              }),
            ],
          }),
      ],
    }),
  _ = `iYNJzFiKEY4-`,
  _ = `Pm89DunmatY-`,
  _ = `CtPNwBTPQMI-`,
  _ = (_) => {
    let { faqid: _ } = _,
      [_, _] = _(_, _(_.LANGUAGE));
    return _
      ? _
        ? (0, _.jsx)(_, {
            title: _.title,
            content: _.content,
            version: _.version,
            elSideBars: [
              (0, _.jsx)(
                _,
                {
                  faqContent: _,
                },
                `sidebar`,
              ),
              (0, _.jsx)(
                _,
                {
                  faqContent: _,
                },
                `adminbar`,
              ),
            ],
          })
        : (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              strError: _(`#FAQViewer_NoFAQFound`),
            }),
          })
      : (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            position: `center`,
            size: `xlarge`,
            string: _(`#Loading`),
          }),
        });
  },
  _ = (_) => {
    let _ =
      _.COMMUNITY_BASE_URL +
      (_.APPID ? `app/` + (_.VANITY_ID ?? _.APPID) : `gid/` + _.CLANSTEAMID);
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _.strError,
        }),
        (0, _.jsx)(`a`, {
          className: _,
          href: _,
          children: _(`#FAQViewer_GoToHomepage`),
        }),
      ],
    });
  },
  _ = _((_) => {
    let { faqid: _ } = _,
      [_, _] = _(_),
      _ = _.Get().GetCurEditLanguage();
    return _
      ? _
        ? (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                draft: _,
                bPreview: !0,
              }),
              (0, _.jsx)(_, {
                title: _.GetDraftTitleWithFallback(_, _.EREALM),
                content: _.GetDraftContentWithFallback(_, _.EREALM),
                version: `` + _.GetLastTimeLanguageUpdated(_),
                language: _,
              }),
              (0, _.jsx)(_, {
                draft: _,
                eLanguage: _,
              }),
            ],
          })
        : (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              strError: _(`#FAQViewer_NoFAQFound`),
            }),
          })
      : (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            position: `center`,
            size: `xlarge`,
            string: _(`#Loading`),
          }),
        });
  }),
  _ = {
    ViewFAQ: (_, _) => `/faqs/${_}/view/${_}*`,
    EditFAQ: (_, _) => `/faqs/${_}/edit/${_}*`,
    DashboardFAQ: (_) => `/faqs/${_}/dashboard`,
    PreviewFAQ: (_, _) => `/faqs/${_}/preview/${_}*`,
  },
  _ = _((_) =>
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {}),
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              path: _.ViewFAQ(`:vanity_str`, `:faqid`),
              render: (_) =>
                (0, _.jsx)(_, {
                  config: {
                    "faqs-root": () => {
                      let { faqid: _ } = _.match.params,
                        _ = _(_);
                      return (0, _.jsx)(_, {
                        faqid: _,
                      });
                    },
                  },
                }),
            }),
            (0, _.jsx)(_, {
              path: _.EditFAQ(`:vanity_str`, `:faqid`),
              render: (_) =>
                (0, _.jsx)(_, {
                  config: {
                    "faqs-root": () => {
                      let { faqid: _ } = _.match.params;
                      if (_) {
                        let _ = _(_);
                        return _
                          ? (0, _.jsx)(_, {
                              faqid: _,
                            })
                          : (0, _.jsx)(_, {
                              push: !0,
                              _: _(_.k_eCommunityDashboard),
                            });
                      }
                      return (0, _.jsx)(_, {});
                    },
                  },
                }),
            }),
            (0, _.jsx)(_, {
              path: _.DashboardFAQ(`:vanity_str`),
              render: (_) =>
                (0, _.jsx)(_, {
                  config: {
                    "faqs-root": () => (0, _.jsx)(_, {}),
                  },
                }),
            }),
            (0, _.jsx)(_, {
              path: _.PreviewFAQ(`:vanity_str`, `:faqid`),
              render: (_) =>
                (0, _.jsx)(_, {
                  config: {
                    "faqs-root": () => {
                      let { faqid: _ } = _.match.params,
                        _ = _(_);
                      return (0, _.jsx)(_, {
                        faqid: _,
                      });
                    },
                  },
                }),
            }),
            (0, _.jsx)(_, {
              component: _,
            }),
          ],
        }),
      ],
    }),
  );
export { _ as FAQRoutes, _ as default };
