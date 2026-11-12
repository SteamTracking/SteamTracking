var _ = _(_(), 1),
  _ = _(),
  _ = class {
    m_eCurLang = _(_.LANGUAGE);
    m_rgHasData = _([], 32, !1);
    m_bHasLocalizationContext = !1;
    m_callback = new _();
    constructor() {
      _(this);
    }
    GetCallback() {
      return this.m_callback;
    }
    GetCurEditLanguage() {
      return this.m_eCurLang;
    }
    SetCurEditLanguage(_) {
      return (
        this.m_eCurLang != _ &&
        ((this.m_eCurLang = _), this.GetCallback().Dispatch(_), !0)
      );
    }
    SetHasLanguage(_) {
      _.forEach((_, _) => {
        this.m_rgHasData[_] != _ && (this.m_rgHasData[_] = _);
      });
    }
    BHasLanguageData(_) {
      return this.m_rgHasData[_];
    }
    GetHasLocalizationContext() {
      return this.m_bHasLocalizationContext;
    }
    SetHasLocalizationContext(_) {
      _ != this.m_bHasLocalizationContext &&
        (this.m_bHasLocalizationContext = _);
    }
  };
(_([_], _.prototype, `m_eCurLang`, void 0),
  _([_], _.prototype, `m_rgHasData`, void 0),
  _([_], _.prototype, `m_bHasLocalizationContext`, void 0),
  _([_], _.prototype, `GetCurEditLanguage`, null),
  _([_], _.prototype, `SetCurEditLanguage`, null),
  _([_.bound], _.prototype, `SetHasLanguage`, null),
  _([_], _.prototype, `BHasLanguageData`, null));
var _ = (0, _.createContext)(null);
function _(_) {
  let _ = (0, _.useMemo)(() => new _(), []);
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.children,
  });
}
function _() {
  let _ = (0, _.useContext)(_);
  if (!_)
    throw Error(`useEditorLocStore must be used inside EditorLocStoreProvider`);
  return _;
}
function _() {
  let _ = _();
  return _(() => _.GetCurEditLanguage());
}
function _(_) {
  let { rgStrings: _, setStrings: _, ..._ } = _,
    _ = _(),
    _ = _[_] ?? ``;
  return (0, _.jsx)(_, {
    value: _,
    onTextChange: (_) => {
      let _ = [..._(_)];
      ((_[_] = _), _(_));
    },
    ..._,
  });
}
function _(_) {
  let {
      fnFilterLanguage: _,
      fnLangHasData: _,
      fnLastUpdateRTime: _,
      fnIsLangSupported: _,
      fnOnLanguageChanged: _,
      selectedLang: _,
      bDisabled: _,
      strTooltip: _,
    } = _,
    _ = (0, _.useCallback)(() => {
      let _ = [];
      _.bAllowUnsetOption &&
        _.push(
          (0, _.jsx)(
            `option`,
            {
              value: -1,
              children: _.Localize(`#language_selection_none`),
            },
            `langpicker_unset`,
          ),
        );
      let _ = [],
        _ = _.realms || [_.k_ESteamRealmGlobal];
      for (let _ of _.GetLanguageListForRealms(_)) {
        if (_ && !_(_)) continue;
        let _ = _(_),
          _ = _.Localize(`#Language_` + _),
          _ = !!(_ && _(_));
        _.push({
          eLang: _,
          sLocName: _,
          bSupported: _,
        });
      }
      _.sort((_, _) =>
        _.bSupported == _.bSupported
          ? _.sLocName.localeCompare(_.sLocName)
          : _.bSupported
            ? -1
            : 1,
      );
      let _ = !1;
      for (let _ of _) {
        _.bSupported != _ &&
          (_.push(
            (0, _.jsx)(
              `option`,
              {
                className: _,
                disabled: !0,
                children: _.Localize(
                  _.bSupported
                    ? `#LanguageGroup_Supported`
                    : `#LanguageGroup_Unsupported`,
                ),
              },
              _.bSupported ? `SupportedGroup` : `UnsupportedGroup`,
            ),
          ),
          (_ = _.bSupported));
        let _ = _ && _(_.eLang),
          _ = _ && _(_.eLang),
          _ = _.sLocName;
        (_ &&
          _ !== 0 &&
          ((_ += ` `),
          (_ += _.Localize(
            `#Language_Last_Update`,
            _(_) +
              ` @ ` +
              _(_, {
                bForce24HourClock: !1,
              }),
          ))),
          _.push(
            (0, _.jsx)(
              `option`,
              {
                value: _.eLang,
                className: _(
                  {
                    [_]: _,
                  },
                  (_.bSupported, void 0),
                ),
                children: _,
              },
              `langpicker` + _.eLang + (_ ? `_hasdata` : ``),
            ),
          ));
      }
      return _;
    }, [_, _, _, _, _.bAllowUnsetOption, _.realms]),
    _ = (0, _.useCallback)(
      (_) => {
        let _ = Number.parseInt(_.currentTarget.value);
        _ != _ && _ && _(_);
      },
      [_, _],
    ),
    _ = _();
  return (0, _.jsx)(_, {
    toolTipContent: _,
    children: (0, _.jsx)(`select`, {
      value: _,
      onChange: _,
      disabled: _,
      children: _,
    }),
  });
}
function _(_) {
  let { rgStrings: _ } = _,
    _ = _(),
    [_] = _(() => [_.GetCurEditLanguage()]),
    _ = (0, _.useMemo)(
      () => (_ ? (_) => !!_[_]?.trim() : _.BHasLanguageData),
      [_, _],
    );
  return (0, _.jsx)(_, {
    selectedLang: _,
    fnLangHasData: _,
    fnOnLanguageChanged: _.SetCurEditLanguage,
  });
}
var _ = [3, 4];
function _(_, _) {
  if (_ || !_(_?.survey)) return [];
  let _ = new Set(_?.survey?.descriptors?.map((_) => _._) ?? []);
  return _.filter((_) => _.has(_));
}
function _(_) {
  return _.includes(5) ? [..._] : [];
}
function _(_, _) {
  return _.some((_) => !_.includes(_));
}
function _(_, _) {
  return _ || !_(_?.survey)
    ? []
    : (_?.survey?.categories ?? []).filter(
        (_) => !!_.get(_)?.bCannotEditAfterSubmission,
      );
}
function _(_) {
  return [`ContentSurveys`, _];
}
function _(_) {
  let { nAppID: _, activeSurvey: _, workingSurvey: _, FetchSurveys: _ } = _,
    { data: _ } = _({
      queryKey: _(_),
      queryFn: _,
      initialData: {
        activeSurvey: _,
        workingSurvey: _,
      },
      staleTime: 1 / 0,
    });
  return _;
}
function _(_) {
  let _ = _();
  return _.useCallback(() => {
    _.invalidateQueries({
      queryKey: _(_),
    });
  }, [_, _]);
}
var _ = class extends Error {};
function _(_) {
  switch (_) {
    case 10:
      return _.Localize(`#ContentSurvey_ChildApp_Error_Busy`);
    case 8:
      return _.Localize(`#ContentSurvey_ChildApp_Error_NoParent`);
    case 42:
      return _.Localize(`#ContentSurvey_ChildApp_Error_ParentUnpublished`);
    case 29:
      return _.Localize(`#ContentSurvey_ChildApp_Error_AlreadyInheriting`);
    case 104:
    case 11:
      return _.Localize(`#ContentSurvey_ChildApp_Error_NotAllowed`);
    case 15:
      return _.Localize(`#ContentSurvey_ChildApp_Error_AccessDenied`);
  }
}
function _(_) {
  if (_)
    return _ instanceof _
      ? _.message
      : _.message
        ? _.Localize(`#ContentSurvey_Overview_ActionFailed`, _.message)
        : _.Localize(`#ContentSurvey_Overview_ActionFailedGeneric`);
}
function _(_, _) {
  if (_.success == 1) return;
  let _ = _?.(_.success);
  throw _ ? new _(_) : Error(_.strError);
}
function _(_, _, _, _) {
  let _ = _(_);
  return _({
    mutationKey: [`SaveContentSurvey`, _],
    onSuccess: (_, _) => {
      (_?.(_), _());
    },
    mutationFn: async (_) => {
      if (_(_, _(_.rgContentDescriptors)))
        throw Error(_.Localize(`#ContentSurvey_Save_CannotRemoveAdultContent`));
      let _ = await _(_);
      return (_(_), _);
    },
  });
}
function _(_, _) {
  let _ = _(_);
  return _({
    mutationKey: [`PublishContentSurvey`, _],
    mutationFn: async (_) => _(await _(_)),
    onSuccess: () => _(),
  });
}
function _(_, _) {
  return _({
    mutationKey: [`DiscardContentSurvey`, _],
    mutationFn: async () => _(await _()),
    onSuccess: () => window.location.reload(),
  });
}
function _(_, _, _) {
  return _({
    mutationKey: [`StartContentSurveyFromParent`, _, _],
    mutationFn: async () => _(await _(), _),
    onSuccess: () => window.location.reload(),
  });
}
function _(_, _, _) {
  let {
      nAppID: _,
      workingSurvey: _,
      activeSurvey: _,
      bCanEditRestrictedCategories: _,
      SaveDraft: _,
      PublishDraft: _,
      DiscardDraft: _,
      InheritParentSurvey: _,
      CopyParentSurvey: _,
    } = _,
    _ = _(_, _, _(_, _), _),
    _ = _(_, _),
    _ = _(_, _),
    _ = _(_, `inherit`, _),
    _ = _(_, `copy`, _),
    { mutate: _ } = _,
    { mutate: _, reset: _ } = _,
    { mutate: _ } = _,
    { mutate: _ } = _,
    { mutate: _ } = _,
    [_, _] = _.useState(),
    _ = _.useCallback(
      (_, _) => {
        (_(),
          _(`save`),
          _(_, {
            onSuccess: () => _?.(),
          }));
      },
      [_, _],
    ),
    _ = _.useCallback((_, _) => _(_(_), _), [_, _]),
    _ = _.useCallback(
      (_) => {
        (_(`publish`), _(_));
      },
      [_],
    ),
    _ = _.useCallback(() => {
      (_(`discard`), _());
    }, [_]),
    _ = _.useCallback(() => {
      (_(`parent`), _());
    }, [_]),
    _ = _.useCallback(() => {
      (_(`parent`), _());
    }, [_]),
    _ = _(_, _),
    _ = (!!_ || !!_.data) && !_.isSuccess,
    _ = _(_?.survey) || _.isSuccess;
  return _.useMemo(
    () => ({
      strWorkingSurveyID: _.data ? _.data.strSurveyID : _?.surveyid,
      bHasUnpublishedWork: _,
      bNotStarted: !_ && !_,
      bReadOnly: !_ && _,
      ratingsGenerated: _.data ? _.data.ratings : _?.survey?.ratings,
      bSaving: _.isPending,
      bPublishing: _.isPending,
      bDiscarding: _.isPending || _.isSuccess,
      bPublished: _.isSuccess,
      strError: _(
        _ == `publish`
          ? _.error
          : _ == `discard`
            ? _.error
            : _ == `parent`
              ? (_.error ?? _.error)
              : _ == `save`
                ? _.error
                : null,
      ),
      Save: _,
      SaveEdits: _,
      Publish: _,
      Discard: _,
      bStartingFromParent:
        _.isPending || _.isSuccess || _.isPending || _.isSuccess,
      InheritFromParent: _,
      CopyFromParent: _,
    }),
    [
      _.data,
      _.isPending,
      _.error,
      _.isPending,
      _.isSuccess,
      _.error,
      _.isPending,
      _.isSuccess,
      _.error,
      _.isPending,
      _.isSuccess,
      _.error,
      _.isPending,
      _.isSuccess,
      _.error,
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
    ],
  );
}
var _ = _.createContext({
    surveyFlow: {
      bHasUnpublishedWork: !1,
      bNotStarted: !1,
      bReadOnly: !1,
      bSaving: !1,
      bPublishing: !1,
      bDiscarding: !1,
      bPublished: !1,
      Save: (_) => {
        _(!1, `SurveyEditorContext not setup before use`);
      },
      SaveEdits: (_) => {
        _(!1, `SurveyEditorContext not setup before use`);
      },
      Publish: () => {
        _(!1, `SurveyEditorContext not setup before use`);
      },
      Discard: () => {
        _(!1, `SurveyEditorContext not setup before use`);
      },
      bStartingFromParent: !1,
      InheritFromParent: () => {
        _(!1, `SurveyEditorContext not setup before use`);
      },
      CopyFromParent: () => {
        _(!1, `SurveyEditorContext not setup before use`);
      },
    },
    mapSectionStates: new Map(),
    rgSectionsOutstanding: [],
    StartDraft: (_) => {
      _(!1, `SurveyEditorContext not setup before use`);
    },
    GetSurveyEdits: () => _([]),
    rgLockedContentDescriptors: [],
    rgLockedQuestionnaireCategories: [],
    rgContentSurveyList: [],
    setContentSurveyList: (_) => {
      _(!1, `SurveyEditorContext not setup before use`);
    },
    mapQuestionData: _,
    rgContentDescriptors: [],
    setContentDescriptors: (_) => {
      _(!1, `SurveyEditorContext not setup before use`);
    },
    rgMatureTags: [],
    setMatureTags: (_) => {
      _(!1, `SurveyEditorContext not setup before use`);
    },
    rgCustomerMatureContentDesc: _([]),
    setCustomerMatureContentDesc: (_) => {
      _(!1, `SurveyEditorContext not setup before use`);
    },
    strReviewerDescription: ``,
    setReviewerDescription: (_) => {
      _(!1, `SurveyEditorContext not setup before use`);
    },
    aiSurvey: {},
    setAISurvey: (_) => {
      _(!1, `SurveyEditorContext not setup before use`);
    },
    rgCustomerAINotes: [],
    setCustomerAINotes: (_) => {
      _(!1, `SurveyEditorContext not setup before use`);
    },
    rgOfficialRatings: [],
    setOfficialRatings: (_) => {
      _(!1, `SurveyEditorContext not setup before use`);
    },
    rgOfficialRatingsSaved: [],
    bOfficialRatingsDirty: !1,
    rgOfficialRatingsAgreed: [],
    setOfficialRatingsAgreed: (_) => {
      _(!1, `SurveyEditorContext not setup before use`);
    },
    bCanEditRestrictedCategories: !1,
    rgStoreCategories: [],
  }),
  _ = [];
function _(_) {
  if (_.workingSurvey) return _.workingSurvey.survey;
  if (_.activeSurvey) return _.activeSurvey.survey;
}
function _(_) {
  let { children: _, bCanEditRestrictedCategories: _ } = _,
    _ = _.rgStoreCategories ?? _,
    _ = _(_),
    _ = _.useMemo(() => _(_), [_]),
    [_, _] = _.useState(() => _.rgContentSurveyList),
    [_, _] = _.useState(() => _.rgContentDescriptors),
    [_, _] = _.useState(() => _.rgMatureTags),
    [_, _] = _.useState(() => _.rgCustomerMatureContentDesc),
    [_, _] = _.useState(() => _.strReviewerDescription),
    [_, _] = _.useState(() => _.rgCustomerAINotes),
    [_, _] = _.useState(() => _.aiSurvey),
    [_, _] = _.useState(() => _.rgOfficialRatings),
    [_, _] = _.useState(() => _.rgOfficialRatings.map((_) => _.eAgency)),
    [_, _] = _.useState(() => _),
    [_, _] = _.useState(() => new Set()),
    _ = _(_.workingSurvey, _.activeSurvey),
    [_, _] = _.useState(!1),
    _ = !!_?.survey?.started_from_scratch || _,
    _ = _.useCallback((_) => {
      (_(_), _((_) => new Set([..._, ..._.rgSectionsReviewed])));
    }, []),
    _ = _,
    _ = _.useCallback(
      (_) => ({
        rgContentSurveyList: _,
        rgContentDescriptors: _,
        rgMatureTags: _,
        rgCustomerMatureContentDesc: _,
        rgCustomerAINotes: _,
        strReviewerDescription: _,
        aiSurvey: _,
        rgOfficialRatings: _,
        bStartedFromScratch: _,
        rgSectionsReviewed: _ === void 0 ? [] : [_],
      }),
      [_, _, _, _, _, _, _, _, _],
    ),
    _ = _(_, _, _),
    _ = _.useMemo(() => _(_), [_]),
    _ = _.activeSurvey?.survey?.timestamp_finished || void 0,
    _ = _?.survey?.timestamp_started || void 0,
    _ = _(_.activeSurvey?.survey),
    _ = _.useMemo(
      () =>
        _({
          edits: _(),
          editsSaved: _,
          mapReviewTimes: _,
          setSectionsReviewedNow: _,
          mapQuestionData: _,
          rtPublished: _,
          rtDraftCreated: _,
          bPublishedForceNoRatingGeneration: _,
          bStartedFromScratch: _,
          rgStoreCategories: _,
        }),
      [_, _, _, _, _, _, _, _, _, _],
    ),
    _ = _.useMemo(() => _(_), [_]),
    _ = _.useMemo(
      () => _(_.activeSurvey, _.bCanEditRestrictedCategories),
      [_.activeSurvey, _.bCanEditRestrictedCategories],
    ),
    _ = _.useMemo(
      () => _(_.activeSurvey, _.bCanEditRestrictedCategories),
      [_.activeSurvey, _.bCanEditRestrictedCategories],
    ),
    _ = _.useCallback(
      (_) => {
        let _ = _(),
          _ = _ ? _ : _(_, _.rgOfficialRatings, _);
        (_(_.rgContentSurveyList),
          _(_.rgContentDescriptors),
          _(_.rgMatureTags),
          _(_.rgCustomerMatureContentDesc),
          _(_.rgCustomerAINotes),
          _(_.strReviewerDescription),
          _(_.aiSurvey),
          _(_.rgOfficialRatings),
          _(!_),
          _.SaveEdits(_));
      },
      [_, _, _, _],
    ),
    _ = _.useMemo(
      () => ({
        surveyFlow: _,
        mapSectionStates: _,
        rgSectionsOutstanding: _,
        StartDraft: _,
        GetSurveyEdits: _,
        rgLockedContentDescriptors: _,
        rgLockedQuestionnaireCategories: _,
        rtLastSubmitTime: _ ? void 0 : _,
        rgContentSurveyList: _,
        setContentSurveyList: _,
        mapQuestionData: _,
        rgContentDescriptors: _,
        setContentDescriptors: _,
        rgMatureTags: _,
        setMatureTags: _,
        rgCustomerMatureContentDesc: _,
        setCustomerMatureContentDesc: _,
        strReviewerDescription: _,
        setReviewerDescription: _,
        rgCustomerAINotes: _,
        setCustomerAINotes: _,
        aiSurvey: _,
        setAISurvey: _,
        rgOfficialRatings: _,
        setOfficialRatings: _,
        rgOfficialRatingsSaved: _.rgOfficialRatings,
        bOfficialRatingsDirty: !_(_, _.rgOfficialRatings),
        rgOfficialRatingsAgreed: _,
        setOfficialRatingsAgreed: _,
        bCanEditRestrictedCategories: !!_,
        rgStoreCategories: _,
      }),
      [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
    );
  return (0, _.jsxs)(_.Provider, {
    value: _,
    children: [_, ` `],
  });
}
function _() {
  return _.useContext(_);
}
var _ = `tab`,
  _ = `question`,
  _ = _.createContext({
    strTabActive: _.Overview,
    GoToTab: () => {},
    eQuestionHighlighted: void 0,
    GoToQuestion: () => {},
    ClearQuestionHighlight: () => {},
  });
function _(_) {
  let { children: _ } = _,
    [_, _] = _.useState(_),
    [_, _] = _.useState(_),
    _ = _.useCallback((_) => {
      (_(_),
        _(void 0),
        _(_, void 0),
        window.scrollTo({
          top: 0,
        }));
    }, []),
    _ = _.useCallback((_) => {
      let _ = _(_);
      _ && (_(_), _(_), _(_, _));
    }, []),
    _ = _.useCallback(() => {
      (_(void 0), _(void 0));
    }, []),
    _ = _.useMemo(
      () => ({
        strTabActive: _,
        GoToTab: _,
        eQuestionHighlighted: _,
        GoToQuestion: _,
        ClearQuestionHighlight: _,
      }),
      [_, _, _, _, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  return _.useContext(_);
}
function _() {
  let _ = new URLSearchParams(location.search ?? ``).get(_),
    _ = Object.values(_);
  return _ && _.includes(_) ? _ : _.Overview;
}
function _() {
  let _ = new URLSearchParams(location.search ?? ``).get(_),
    _ = Number(_);
  return _ && _.has(_) ? _ : void 0;
}
function _(_, _) {
  let _ = new URL(window.location.href);
  (_ === _.Overview ? _.searchParams.delete(_) : _.searchParams.set(_, _),
    _(_, _),
    _(_));
}
function _(_) {
  let _ = new URL(window.location.href);
  (_(_, _), _(_));
}
function _(_, _) {
  _ === void 0 ? _.searchParams.delete(_) : _.searchParams.set(_, String(_));
}
function _(_) {
  _.href !== window.location.href && _((_) => _, _);
}
var _ = `uB8ON0O8Z4c-`,
  _ = `KEcr4vtaBCY-`;
function _(_) {
  let { surveyCtn: _ } = _,
    { surveyFlow: _, rgSectionsOutstanding: _ } = _(),
    { GoToTab: _ } = _();
  if (!_.bHasUnpublishedWork) return null;
  let _ = _[0],
    _ = _ === void 0,
    _ = _
      ? (0, _.jsx)(_, {
          disabled: _.bSaving || _.bDiscarding,
          onClick: () => _(_.Publish),
          children: _.Localize(`#ContentSurvey_Overview_Publish_Review_Button`),
        })
      : (0, _.jsx)(_, {
          disabled: _.bDiscarding,
          onClick: () => _(_(_)?.strTabKey ?? _.Overview),
          children: _.Localize(`#ContentSurvey_Overview_ResumeButton`),
        });
  return (0, _.jsxs)(_, {
    className: _,
    borderColor: `amber-9`,
    radius: `sm`,
    padding: `5`,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
      }),
      (0, _.jsxs)(_, {
        direction: `row`,
        gap: `6`,
        align: `center`,
        children: [
          (0, _.jsxs)(_, {
            direction: `column`,
            flexGrow: `1`,
            children: [
              (0, _.jsx)(_, {
                size: `5`,
                color: `amber-9`,
                children: _.Localize(
                  _
                    ? `#ContentSurvey_Overview_Publish_Header`
                    : `#ContentSurvey_Overview_InProgress_Header`,
                ),
              }),
              (0, _.jsx)(_, {
                surveyCtn: _,
              }),
            ],
          }),
          _,
        ],
      }),
      (0, _.jsx)(_, {
        _: `p`,
        color: `amber-11`,
        marginTop: `4`,
        children: _.Localize(
          _
            ? `#ContentSurvey_Overview_Publish_Description`
            : `#ContentSurvey_Overview_InProgress_Description`,
        ),
      }),
    ],
  });
}
function _(_) {
  let { survey: _, bLastEditedBySupport: _ } = _.surveyCtn,
    _ = _?.timestamp_updated || _?.timestamp_started;
  return !_ && !_?.accountid
    ? null
    : (0, _.jsxs)(_.Fragment, {
        children: [
          _ &&
            (0, _.jsx)(_, {
              children: _.Localize(`#ContentSurvey_Overview_LastSaved`, _(_)),
            }),
          !!_?.accountid &&
            (0, _.jsx)(_, {
              children: _.LocalizeReact(
                `#ContentSurvey_Overview_By`,
                (0, _.jsx)(_, {
                  nAccountID: _.accountid,
                  bIsActorSupport: _,
                }),
              ),
            }),
        ],
      });
}
var _ = `ufg-1Bat-Fo-`,
  _ = `TwsBDb3o63k-`,
  _ = `R0wKGE9XVUk-`;
function _(_) {
  let { workingSurvey: _, activeSurvey: _ } = _,
    {
      surveyFlow: _,
      rgContentDescriptors: _,
      rgOfficialRatingsSaved: _,
      rgSectionsOutstanding: _,
    } = _(),
    _ = _(),
    _ = _.bHasUnpublishedWork && _.length > 0,
    _ = _.is_support,
    _ = _(_, _),
    _ = _.ratingsGenerated ?? _?.survey?.ratings,
    _ = _(_),
    _ = _(_),
    _ = _?.survey?.descriptors?.map((_) => _._) ?? [],
    _ =
      _.bPublished && _
        ? _(_, _, _, _, _)
        : _(_, _?.survey?.ratings, _?.survey?.all_ratings, _, _),
    _ = _.bHasUnpublishedWork && !_ ? _(_, _, _, _, _) : [],
    _ = _.bReadOnly && _.length == 0;
  if (_.length == 0 && _.length == 0 && !_ && !_) return null;
  let _ = _.length > 0 || _,
    _ = _.length > 0 || _,
    _ = {
      titleToken: `#ContentSurvey_SavedRatings_Published_Title`,
      descToken: _
        ? `#ContentSurvey_SavedRatings_Published_None`
        : `#ContentSurvey_SavedRatings_Published_Desc`,
      rgRegions: _,
      missingToken: `#ContentSurvey_SavedRatings_Published_NoRegion`,
      bPublished: !0,
    },
    _ = {
      titleToken: `#ContentSurvey_SavedRatings_Draft_Title`,
      descToken: _
        ? `#ContentSurvey_SavedRatings_Draft_Pending`
        : `#ContentSurvey_SavedRatings_Draft_Desc`,
      rgRegions: _,
      missingToken: `#ContentSurvey_SavedRatings_Draft_NoRegion`,
    };
  return (0, _.jsx)(_, {
    columns: `1fr 1fr`,
    gap: `4`,
    marginTop: `7`,
    children:
      _ && _
        ? (0, _.jsx)(_, {
            left: _,
            right: _,
          })
        : (0, _.jsx)(_, {
            column: _ ? _ : _,
          }),
  });
}
function _(_) {
  let { titleToken: _, descToken: _ } = _.column;
  return (0, _.jsxs)(_, {
    marginBottom: `3`,
    children: [
      (0, _.jsx)(_, {
        size: `4`,
        className: _(_, _),
        children: _.Localize(_),
      }),
      (0, _.jsx)(_, {
        _: `p`,
        children: _.Localize(_),
      }),
    ],
  });
}
function _(_) {
  let { column: _ } = _;
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `4`,
    children: [
      (0, _.jsx)(_, {
        column: _,
      }),
      _.rgRegions.map((_) =>
        (0, _.jsx)(
          _,
          {
            region: _,
            bPublished: _.bPublished,
          },
          _.strRegion,
        ),
      ),
    ],
  });
}
function _(_) {
  let { left: _, right: _ } = _,
    _ = new Map(_.rgRegions.map((_) => [_.strRegion, _])),
    _ = new Map(_.rgRegions.map((_) => [_.strRegion, _])),
    _ = Array.from(new Set([..._.keys(), ..._.keys()])).sort((_, _) =>
      _.localeCompare(_),
    ),
    _ = _.rgRegions.length > 0 && _.rgRegions.length > 0,
    _ = (_, _, _) =>
      _
        ? (0, _.jsx)(_, {
            region: _,
            bPublished: _.bPublished,
          })
        : _
          ? (0, _.jsx)(_, {
              strRegion: _.strRegion,
              bInternalOnly: _.bInternalOnly,
              descToken: _.missingToken,
            })
          : (0, _.jsx)(_, {});
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        column: _,
      }),
      (0, _.jsx)(_, {
        column: _,
      }),
      _.map((_) => {
        let _ = _.get(_),
          _ = _.get(_);
        return (0, _.jsxs)(
          _.Fragment,
          {
            children: [_(_, _, _), _(_, _, _)],
          },
          _,
        );
      }),
    ],
  });
}
function _(_) {
  let { strRegion: _, bInternalOnly: _, descToken: _ } = _;
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `2`,
    children: [
      (0, _.jsxs)(_, {
        size: `4`,
        className: _(_, {
          [_]: _,
        }),
        children: [_ && `(VO) `, _],
      }),
      (0, _.jsx)(_, {
        padding: `4`,
        radius: `sm`,
        flexGrow: `1`,
        align: `center`,
        justify: `center`,
        className: void 0,
        children: (0, _.jsx)(_, {
          children: _.Localize(_),
        }),
      }),
    ],
  });
}
function _(_) {
  let { region: _, bPublished: _ } = _,
    { GoToTab: _ } = _();
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
      _.rating &&
        (0, _.jsx)(_, {
          children: _.rating.bGenerated
            ? _.Localize(`#ContentSurvey_SavedRatings_FromSurvey`)
            : _(
                _.Localize(
                  _
                    ? `#ContentSurvey_SavedRatings_Published_FromBoard`
                    : `#ContentSurvey_SavedRatings_FromBoard`,
                ),
                (0, _.jsx)(_, {
                  onClick: () => _(_.Official),
                }),
              ),
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
            _.eAgeVerification &&
              (0, _.jsx)(_, {
                _: `p`,
                children: _.Localize(
                  _.eAgeVerification == `rating`
                    ? `#ContentSurvey_SavedRatings_AgeVerification_Rating`
                    : `#ContentSurvey_SavedRatings_AgeVerification_AdultContent`,
                ),
              }),
          ],
        }),
      }),
      _.ratingOverridden &&
        (0, _.jsx)(_, {
          rating: _.ratingOverridden,
        }),
    ],
  });
}
function _(_) {
  let { rating: _ } = _;
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `2`,
    className: _,
    children: [
      (0, _.jsx)(_, {
        children: _.Localize(`#ContentSurvey_SavedRatings_Overridden`),
      }),
      (0, _.jsx)(_, {
        ..._,
      }),
    ],
  });
}
function _(_) {
  let _ = _?.inherited_surveyid;
  return !!_ && _ != `0`;
}
function _(_, _, _, _) {
  return _ || _(_, _)
    ? `own`
    : _(_?.survey)
      ? `inheriting`
      : _(_?.survey)
        ? `own`
        : _.nParentAppID
          ? _.bParentReadFailed
            ? `parentunreadable`
            : _.bParentPublished
              ? `choose`
              : `parentunpublished`
          : `noparent`;
}
function _(_) {
  return _(_.eChildAppType);
}
function _(_) {
  switch (_) {
    case `demo`:
      return _.Localize(`#ContentSurvey_ChildApp_Kind_Demo`);
    case `game`:
      return _.Localize(`#ContentSurvey_ChildApp_Kind_Game`);
    case `other`:
      return _.Localize(`#ContentSurvey_ChildApp_Kind_Other`);
  }
  return _.Localize(`#ContentSurvey_ChildApp_Kind_DLC`);
}
function _(_) {
  return _.strParentAppName || String(_.nParentAppID);
}
function _(_) {
  let { childApp: _ } = _,
    { surveyFlow: _ } = _(),
    [_, _, _] = _(),
    _ = _(_),
    _ = _(_);
  return !_.nParentAppID || !_.bParentPublished
    ? null
    : (0, _.jsxs)(_, {
        direction: `row`,
        gap: `6`,
        align: `center`,
        background: `dull-9`,
        padding: `5`,
        radius: `sm`,
        children: [
          (0, _.jsxs)(_, {
            direction: `column`,
            flexGrow: `1`,
            children: [
              (0, _.jsx)(_, {
                size: `4`,
                children: _.Localize(`#ContentSurvey_ChildApp_Revert_Title`),
              }),
              (0, _.jsx)(_, {
                _: `p`,
                children: _.Localize(
                  `#ContentSurvey_ChildApp_Revert_Desc`,
                  _,
                  _,
                ),
              }),
            ],
          }),
          (0, _.jsx)(_, {
            variant: `outline`,
            loading: _.bStartingFromParent,
            disabled: _.bSaving || _.bPublishing || _.bDiscarding,
            onClick: _,
            children: _.Localize(`#ContentSurvey_ChildApp_Revert_Button`),
          }),
          _ &&
            (0, _.jsx)(_, {
              onClose: _,
              navID: `ContentSurveyChildAppRevert`,
              strTitle: _.Localize(
                `#ContentSurvey_ChildApp_Revert_Confirm_Title`,
              ),
              children: (0, _.jsxs)(_, {
                direction: `column`,
                gap: `4`,
                children: [
                  (0, _.jsx)(_, {
                    _: `p`,
                    children: _.Localize(
                      `#ContentSurvey_ChildApp_Revert_Confirm_Desc`,
                      _,
                      _,
                    ),
                  }),
                  (0, _.jsxs)(_, {
                    direction: `row`,
                    gap: `3`,
                    justify: `end`,
                    children: [
                      (0, _.jsx)(_, {
                        variant: `outline`,
                        onClick: _,
                        children: _.Localize(
                          `#ContentSurvey_ChildApp_Revert_Confirm_Cancel`,
                        ),
                      }),
                      (0, _.jsx)(_, {
                        onClick: () => {
                          (_(), _.InheritFromParent());
                        },
                        children: _.Localize(
                          `#ContentSurvey_ChildApp_Revert_Confirm_Accept`,
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
var _ = _.createContext({
  PromptStartDraft: () => {},
  PromptStartDraftForEdit: () => {},
});
function _(_) {
  let { children: _ } = _,
    { surveyFlow: _, StartDraft: _ } = _(),
    [_, _] = _.useState(null),
    _ = _.useMemo(
      () => ({
        PromptStartDraft: () => _(`choice`),
        PromptStartDraftForEdit: () => {
          (_(`edit`), _.bSaving || _(!0));
        },
      }),
      [_, _.bSaving],
    );
  return (0, _.jsxs)(_.Provider, {
    value: _,
    children: [
      _,
      _ == `choice` &&
        (0, _.jsx)(_, {
          onClose: () => _(null),
        }),
      _ == `edit` &&
        (0, _.jsx)(_, {
          onClose: () => _(null),
        }),
    ],
  });
}
function _() {
  return _.useContext(_);
}
function _(_) {
  let { onClose: _ } = _,
    { StartDraft: _ } = _(),
    _ = (_) => {
      (_(), _(_));
    };
  return (0, _.jsx)(_, {
    onClose: _,
    navID: `ContentSurveyStartDraft`,
    strTitle: _.Localize(`#ContentSurvey_StartDraft_Title`),
    children: (0, _.jsxs)(_, {
      direction: `column`,
      gap: `4`,
      maxWidth: `800px`,
      children: [
        (0, _.jsx)(_, {
          _: `p`,
          children: _.Localize(`#ContentSurvey_StartDraft_Description`),
        }),
        (0, _.jsx)(_, {
          titleToken: `#ContentSurvey_StartDraft_Copy_Title`,
          descToken: `#ContentSurvey_StartDraft_Copy_Desc`,
          onClick: () => _(!0),
        }),
        (0, _.jsx)(_, {
          titleToken: `#ContentSurvey_StartDraft_Empty_Title`,
          descToken: `#ContentSurvey_StartDraft_Empty_Desc`,
          bSecondary: !0,
          onClick: () => _(!1),
        }),
        (0, _.jsx)(_, {
          direction: `row`,
          justify: `end`,
          children: (0, _.jsx)(_, {
            variant: `ghost`,
            onClick: _,
            children: _.Localize(`#ContentSurvey_StartDraft_Cancel`),
          }),
        }),
      ],
    }),
  });
}
function _(_) {
  let { onClose: _ } = _;
  return (0, _.jsxs)(_, {
    onClose: _,
    navID: `ContentSurveyStartDraftForEdit`,
    strTitle: _.Localize(`#ContentSurvey_StartDraft_Edit_Title`),
    children: [
      (0, _.jsx)(_, {
        _: `p`,
        children: _.Localize(`#ContentSurvey_StartDraft_Edit_Draft`),
      }),
      (0, _.jsx)(_, {
        _: `p`,
        children: _.Localize(`#ContentSurvey_StartDraft_Edit_Publish`),
      }),
      (0, _.jsx)(_, {
        direction: `row`,
        justify: `end`,
        children: (0, _.jsx)(_, {
          onClick: _,
          children: _.Localize(`#Button_OK`),
        }),
      }),
    ],
  });
}
function _(_) {
  let { titleToken: _, descToken: _, bSecondary: _, onClick: _ } = _;
  return (0, _.jsx)(_, {
    strTitle: _.Localize(_),
    strDescription: _.Localize(_),
    bSecondary: _,
    onClick: _,
  });
}
var _ = `NUSn-RUg8Cw-`,
  _ = `_1XZNwZPUhzo-`,
  _ = `-sKW-vUD5Sg-`,
  _ = `WICokEYochA-`,
  _ = `e-3MrGdSN8E-`,
  _ = `yuoBVXZFfrU-`,
  _ = `tObugcgTM4I-`;
function _(_) {
  let {
      workingSurvey: _,
      activeSurvey: _,
      mapSurveyVersions: _,
      cSurveys: _,
    } = _,
    { surveyFlow: _ } = _(),
    _ = _.bHasUnpublishedWork,
    _ =
      _ && _.surveyid == _.strWorkingSurveyID
        ? _
        : {
            surveyid: _.strWorkingSurveyID,
          };
  function _(_) {
    return (
      (_.surveyid ? _?.[_.surveyid] : void 0) ?? (_ === void 0 ? void 0 : _ + 1)
    );
  }
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        strTitle: _.Localize(`#ContentSurvey_subtitle`),
        strDescription: _.Localize(`#ContentSurvey_Overview_P1`),
        children: [
          (0, _.jsx)(_, {
            size: `4`,
            _: `p`,
            children: _.Localize(`#ContentSurvey_Overview_P3`),
          }),
          (0, _.jsx)(_, {
            size: `4`,
            _: `p`,
            children: _.Localize(`#ContentSurvey_Overview_P2`),
          }),
          (0, _.jsx)(_, {
            size: `4`,
            _: `p`,
            children: _.Localize(`#ContentSurvey_Overview_P4`),
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            titleToken: `#ContentSurvey_Overview_Status_Title`,
          }),
          (0, _.jsxs)(_, {
            direction: `column`,
            gap: `4`,
            children: [
              _?.survey &&
                (0, _.jsx)(_, {
                  surveyCtn: _,
                  nVersion: _(_),
                  bHasActiveSurvey: !0,
                }),
              _
                ? (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_, {
                        surveyCtn: _,
                        nVersion: _(_),
                        bHasActiveSurvey: !!_?.survey,
                      }),
                      (0, _.jsx)(_, {
                        surveyCtn: _,
                      }),
                    ],
                  })
                : (0, _.jsx)(_, {}),
              _.bPublished &&
                (0, _.jsx)(_, {
                  _: `p`,
                  children: _.Localize(`#ContentSurvey_Overview_Published`),
                }),
              _.strError &&
                (0, _.jsx)(_, {
                  _: `p`,
                  size: `4`,
                  className: `R0wKGE9XVUk-`,
                  children: _.strError,
                }),
              _.childApp &&
                (0, _.jsx)(_, {
                  childApp: _.childApp,
                }),
              (0, _.jsx)(_, {
                ..._,
              }),
            ],
          }),
          (0, _.jsx)(_, {
            ..._,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { strSurveyHistoryURL: _, cSurveys: _ } = _;
  return !_ || !_
    ? null
    : (0, _.jsx)(_, {
        _: `p`,
        children: (0, _.jsx)(_, {
          href: _,
          children: _.Localize(`#ContentSurvey_History_Link`, _),
        }),
      });
}
function _() {
  let { surveyFlow: _ } = _(),
    { PromptStartDraft: _ } = _();
  return (0, _.jsxs)(_, {
    direction: `row`,
    gap: `6`,
    align: `center`,
    background: `dull-9`,
    padding: `5`,
    radius: `sm`,
    children: [
      (0, _.jsxs)(_, {
        direction: `column`,
        flexGrow: `1`,
        children: [
          (0, _.jsx)(_, {
            size: `4`,
            children: _.Localize(`#ContentSurvey_Overview_Settled_Header`),
          }),
          (0, _.jsx)(_, {
            _: `p`,
            children: _.Localize(`#ContentSurvey_Overview_Settled_Description`),
          }),
        ],
      }),
      (0, _.jsx)(_, {
        loading: _.bSaving,
        onClick: _,
        children: _.Localize(`#ContentSurvey_StartDraft_Button`),
      }),
    ],
  });
}
function _(_) {
  let { surveyCtn: _, nVersion: _, bHasActiveSurvey: _ } = _,
    { surveyFlow: _, rgSectionsOutstanding: _ } = _(),
    _ = _(_.survey),
    _ = _.Localize(
      _
        ? `#ContentSurvey_Overview_Row_Status_Active`
        : `#ContentSurvey_Overview_Row_Status_Progress`,
    ),
    _ = _ ? !_(_.survey) : _.length == 0,
    _ =
      ((_ ? _.survey?.ratings : _.ratingsGenerated)?.ratings?.length ?? 0) > 0,
    _ = _ && (_ || _);
  return (0, _.jsxs)(_, {
    direction: `column`,
    background: `dull-4`,
    padding: `3`,
    gap: `3`,
    children: [
      (0, _.jsxs)(_, {
        direction: `row`,
        gap: `6`,
        children: [
          (0, _.jsxs)(_, {
            direction: `column`,
            children: [
              (0, _.jsx)(_, {
                size: `4`,
                children: _
                  ? _.LocalizeReact(
                      `#ContentSurvey_Overview_Row_Title`,
                      _,
                      (0, _.jsx)(`span`, {
                        className: _ ? _ : _,
                        children: _,
                      }),
                    )
                  : _.LocalizeReact(
                      `#ContentSurvey_Overview_Row_Title_NoVersion`,
                      (0, _.jsx)(`span`, {
                        className: _ ? _ : _,
                        children: _,
                      }),
                    ),
              }),
              _ &&
                _.survey &&
                (0, _.jsx)(_, {
                  surveyCtn: _,
                }),
            ],
          }),
          (0, _.jsxs)(_, {
            direction: `row`,
            gap: `5`,
            flexGrow: `1`,
            justify: `end`,
            children: [
              (0, _.jsx)(_, {
                locName: _.Localize(
                  `#ContentSurvey_Overview_Check_SurveyComplete`,
                ),
                bChecked: _,
                bInProgress: !_,
              }),
              (0, _.jsx)(_, {
                locName: _.Localize(
                  `#ContentSurvey_Overview_Check_RatingsGenerated`,
                ),
                bChecked: _,
                bInProgress: !_,
              }),
              (0, _.jsx)(_, {
                locName: _.Localize(
                  `#ContentSurvey_Overview_Check_RatingsPublished`,
                ),
                bChecked: _ && _,
                bInProgress: !_,
              }),
            ],
          }),
        ],
      }),
      !_ &&
        _.surveyid &&
        (0, _.jsx)(_, {
          direction: `row`,
          justify: `end`,
          children: (0, _.jsx)(_, {
            bHasActiveSurvey: _,
          }),
        }),
    ],
  });
}
function _(_) {
  let { bHasActiveSurvey: _ } = _,
    { surveyFlow: _ } = _(),
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        variant: `dark`,
        loading: _.bDiscarding,
        disabled: _.bSaving || _.bPublishing,
        onClick: () => _(!0),
        children: _.Localize(`#ContentSurvey_Overview_Discard_Button`),
      }),
      _ &&
        (0, _.jsx)(_, {
          onClose: () => _(!1),
          navID: `ContentSurveyDiscardDraft`,
          strTitle: _.Localize(`#ContentSurvey_Overview_Discard_Confirm_Title`),
          children: (0, _.jsxs)(_, {
            direction: `column`,
            gap: `4`,
            children: [
              (0, _.jsx)(_, {
                _: `p`,
                children: _.Localize(
                  _
                    ? `#ContentSurvey_Overview_Discard_Confirm_Description`
                    : `#ContentSurvey_Overview_Discard_Confirm_DescriptionNoActive`,
                ),
              }),
              (0, _.jsxs)(_, {
                direction: `row`,
                gap: `3`,
                justify: `end`,
                children: [
                  (0, _.jsx)(_, {
                    variant: `outline`,
                    onClick: () => _(!1),
                    children: _.Localize(
                      `#ContentSurvey_Overview_Discard_Confirm_Cancel`,
                    ),
                  }),
                  (0, _.jsx)(_, {
                    onClick: () => {
                      (_(!1), _.Discard());
                    },
                    children: _.Localize(
                      `#ContentSurvey_Overview_Discard_Confirm_Accept`,
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
  let { survey: _, bLastEditedBySupport: _ } = _.surveyCtn;
  return _
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          _.timestamp_finished &&
            (0, _.jsx)(_, {
              children: _.Localize(
                `#ContentSurvey_Overview_LastPublished`,
                _(_.timestamp_finished),
              ),
            }),
          !!_.accountid &&
            (0, _.jsx)(_, {
              children: _.LocalizeReact(
                `#ContentSurvey_Overview_By`,
                (0, _.jsx)(_, {
                  nAccountID: _.accountid,
                  bIsActorSupport: _,
                }),
              ),
            }),
        ],
      })
    : null;
}
function _(_) {
  let { locName: _, bChecked: _, bInProgress: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _({
      [_]: !0,
      [_]: !_,
      [_]: _ && _,
      [_]: _ && !_,
    }),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
      }),
      _,
    ],
  });
}
var _ = `ipzwqSFXbXY-`;
function _(_) {
  let { children: _ } = _;
  return (0, _.jsx)(`span`, {
    className: _,
    children: _,
  });
}
var _ = `.${_}`;
function _(_) {
  let { eSection: _ } = _,
    { surveyFlow: _, mapSectionStates: _ } = _(),
    { GoToTab: _ } = _(),
    _ = _.get(_),
    _ = _.bSaving || _.bPublishing || _.bDiscarding,
    _ = _(_),
    _ = _.Localize(_.strNameToken),
    _ = () => _.Save(_, () => _(_.strTabKey)),
    _;
  return (
    (_ = _?.bAnswerMissing
      ? (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              disabled: !0,
              onClick: _,
              children: _.Localize(`#ContentSurvey_Section_SaveAndContinue`, _),
            }),
            (0, _.jsxs)(_, {
              marginTop: `3`,
              children: [
                (0, _.jsx)(_, {
                  color: `yellow-9`,
                  _: `div`,
                  children: _.Localize(`#ContentSurvey_Section_ReviewAbove`),
                }),
                (0, _.jsx)(_, {
                  _: `div`,
                  children: _.Localize(`#ContentSurvey_Section_AnswerRequired`),
                }),
              ],
            }),
          ],
        })
      : _?.bDirty
        ? (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                loading: _.bSaving,
                disabled: _,
                onClick: _,
                children: _.Localize(
                  `#ContentSurvey_Section_SaveAndContinue`,
                  _,
                ),
              }),
              (0, _.jsx)(_, {
                _: `p`,
                children: _.Localize(`#ContentSurvey_Section_Save_Desc`),
              }),
            ],
          })
        : _?.bReviewed
          ? (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  children: (0, _.jsx)(_, {
                    variant: `outline`,
                    disabled: _,
                    onClick: () => _(_.strTabKey),
                    children: _.Localize(`#ContentSurvey_Section_Continue`, _),
                  }),
                }),
                (0, _.jsx)(_, {
                  _: `p`,
                  children: _.Localize(`#ContentSurvey_Section_Reviewed`),
                }),
              ],
            })
          : (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  loading: _.bSaving,
                  disabled: _,
                  onClick: _,
                  children: _.Localize(
                    _?.bHasAnswers
                      ? `#ContentSurvey_Section_AnswersCorrect`
                      : `#ContentSurvey_Section_NothingApplies`,
                    _,
                  ),
                }),
                (0, _.jsx)(_, {
                  _: `p`,
                  children: _.Localize(`#ContentSurvey_Section_Review_Desc`),
                }),
              ],
            })),
    (0, _.jsxs)(_, {
      direction: `column`,
      align: `start`,
      background: `dull-9`,
      marginTop: `7`,
      padding: `5`,
      radius: `sm`,
      children: [
        _,
        _.strError &&
          (0, _.jsx)(_, {
            _: `p`,
            color: `text-red`,
            children: _.strError,
          }),
      ],
    })
  );
}
function _(_) {
  let { mapQuestionData: _, rtLastSubmitTime: _ } = _();
  return _(_.get(_), _);
}
function _(_) {
  return _(_._)
    ? (0, _.jsx)(_, {
        accentColor: `lime`,
        children: (0, _.jsx)(_, {
          toolTipContent: _.Localize(
            `#StoreAdmin_Ratings_Questionaire_New_ttip`,
          ),
          children: (0, _.jsx)(_, {
            background: `accent-9`,
            paddingLeft: `2`,
            paddingRight: `2`,
            radius: `sm`,
            inline: !0,
            children: (0, _.jsx)(_, {
              color: `dull-1`,
              size: `2`,
              weight: `heavy`,
              children: _.Localize(`#StoreAdmin_Ratings_Questionaire_New`),
            }),
          }),
        }),
      })
    : null;
}
function _() {
  let { mapSectionStates: _ } = _(),
    _ = _(_);
  return _ == 0
    ? null
    : (0, _.jsxs)(_, {
        direction: `column`,
        gap: `1`,
        background: `dull-9`,
        padding: `4`,
        radius: `sm`,
        marginTop: `3`,
        children: [
          (0, _.jsx)(_, {
            size: `4`,
            contrast: `title`,
            children: _.LocalizePlural(`#ContentSurvey_NewQuestions_Banner`, _),
          }),
          (0, _.jsx)(_, {
            _: `p`,
            children: _.Localize(`#ContentSurvey_NewQuestions_Banner_Desc`),
          }),
        ],
      });
}
function _(_, _, _, _, _) {
  if (_) {
    let _ = [..._];
    (_ &&
      _.forEach((_) => {
        _.includes(_) || _.push(_);
      }),
      _ &&
        _.forEach((_) => {
          _.includes(_) && (_ = _.filter((_) => _ !== _));
        }),
      _.sort((_, _) =>
        typeof _ == `number` && typeof _ == `number`
          ? _ - _
          : String(_).localeCompare(String(_)),
      ),
      _(_));
  }
}
var _ = `_-3eUbK1-1JY-`;
function _(_) {
  let { _: _ } = _,
    {
      rgContentSurveyList: _,
      setContentSurveyList: _,
      rgLockedQuestionnaireCategories: _,
      rgStoreCategories: _,
    } = _(),
    _ = !_.includes(_),
    _ = _.includes(_),
    _ = _(_, _),
    _ = _ ? void 0 : _(_, _);
  return (0, _.jsxs)(_, {
    _: _,
    children: [
      (0, _.jsxs)(_, {
        checked: _,
        disabled: !_,
        onChange: (_) => {
          _(_, _ ? [_] : void 0, _ ? void 0 : [_], _, _);
        },
        children: [
          _(_),
          _ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                `\xA0`,
                (0, _.jsx)(_, {
                  bComplete: _,
                }),
              ],
            }),
          (0, _.jsx)(_, {
            _: _,
          }),
          !_ &&
            (0, _.jsx)(`div`, {
              children: _.Localize(
                `#StoreAdmin_Ratings_Questionaire_NotModifiable`,
              ),
            }),
        ],
      }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `UUTUhBS-SRc-`,
          children: _.Localize(_),
        }),
    ],
  });
}
function _(_) {
  let { _: _, children: _ } = _,
    { eQuestionHighlighted: _, ClearQuestionHighlight: _ } = _(),
    _ = _ === _,
    _ = (0, _.useRef)(null);
  return (
    (0, _.useEffect)(() => {
      _ &&
        _.current?.scrollIntoView({
          block: `center`,
        });
    }, [_]),
    (0, _.jsx)(`div`, {
      ref: _,
      className: _ ? _ : void 0,
      onAnimationEnd: _ ? _ : void 0,
      children: _,
    })
  );
}
function _(_) {
  let { group: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.strTitleToken &&
        (0, _.jsx)(_, {
          titleToken: _.strTitleToken,
          descToken: _.strDescToken,
        }),
      (0, _.jsx)(_, {
        children: _.rgQuestions.map((_) =>
          (0, _.jsx)(
            _,
            {
              _: _._,
            },
            _._,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let _ = _(_.eSection)?.rgGroups ?? [];
  return (0, _.jsx)(_.Fragment, {
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          group: _,
        },
        _.strTitleToken ?? _.rgQuestions[0]?._,
      ),
    ),
  });
}
function _(_) {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        strTitle: _.Localize(`#ContentSurvey_Tab_General`),
        strDescription: _.Localize(`#ContentSurvey_General_Desc`),
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            eSection: 2,
          }),
          (0, _.jsx)(_, {
            eSection: 2,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { rgContentSurveyList: _ } = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        strTitle: _.Localize(`#ContentSurvey_Tab_Violence`),
        strDescription: _.Localize(`#ContentSurvey_Violence_Desc`),
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            eSection: 3,
          }),
          (0, _.jsx)(_, {
            eSection: 3,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { rgContentSurveyList: _ } = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        strTitle: _.Localize(`#ContentSurvey_Tab_Drugs`),
        strDescription: _.Localize(`#ContentSurvey_Drugs_Desc`),
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            eSection: 4,
          }),
          (0, _.jsx)(_, {
            eSection: 4,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { rgContentSurveyList: _ } = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        strTitle: _.Localize(`#ContentSurvey_Tab_NudityAndSex`),
        strDescription: _.Localize(`#ContentSurvey_Nudity_Desc`),
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            eSection: 5,
          }),
          (0, _.jsx)(_, {
            eSection: 5,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { enabledID: _, disabledID: _ } = _,
    _ = _(),
    _ = null;
  _.rgContentSurveyList.includes(_)
    ? (_ = _)
    : _.rgContentSurveyList.includes(_) && (_ = _);
  let { rgContentSurveyList: _, setContentSurveyList: _ } = _;
  return (0, _.jsx)(_, {
    options: [_, _],
    value: _,
    onValueChange: (_) => {
      if (!_.includes(_)) {
        let _ = _.filter((_) => _ != _ && _ != _);
        (_.push(_), _.sort(), _(_));
      }
    },
    getOptionLabel: (_) => _.Localize(`#StoreAdmin_Ratings_Questionaire_` + _),
  });
}
function _(_) {
  let { _: _, question: _ } = _,
    {
      rgContentSurveyList: _,
      setContentSurveyList: _,
      rgLockedQuestionnaireCategories: _,
    } = _(),
    _ = _(_),
    _ = !_.includes(_),
    [_, _] = (0, _.useState)(!1),
    _ = _.includes(_) ? !0 : _ && !_ ? null : !1;
  return (0, _.jsxs)(_, {
    direction: `column`,
    children: [
      (0, _.jsxs)(_, {
        _: `div`,
        marginBottom: `2`,
        children: [
          _.Localize(_),
          ` `,
          (0, _.jsx)(_, {
            _: _,
          }),
          !_ &&
            (0, _.jsx)(`div`, {
              children: _.Localize(
                `#StoreAdmin_Ratings_Questionaire_NotModifiable`,
              ),
            }),
        ],
      }),
      (0, _.jsx)(_, {
        background: `dull-6`,
        padding: `3`,
        radius: `sm`,
        children: (0, _.jsx)(_, {
          options: [!0, !1],
          value: _,
          disabled: !_,
          onValueChange: (_) => {
            (_(!_), _(_, _ ? [_] : void 0, _ ? void 0 : [_], _, _));
          },
          getOptionLabel: (_) =>
            _.Localize(_ ? `#ContentSurvey_Yes` : `#ContentSurvey_No`),
        }),
      }),
    ],
  });
}
function _(_) {
  let {
      titleToken: _,
      descToken: _,
      value: _,
      bSingleLine: _,
      bRequired: _,
      nMaxLength: _,
      setValue: _,
    } = _,
    _ = (_) => _(_ === void 0 ? _ : _.substring(0, _));
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsxs)(_, {
        size: `4`,
        children: [
          _.isValidElement(_) || !_.startsWith(`#`) ? _ : _.Localize(_),
          _ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                `\xA0`,
                (0, _.jsx)(_, {
                  bComplete: _(_),
                }),
              ],
            }),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          _: `span`,
          children:
            _.isValidElement(_) || !_.startsWith(`#`) ? _ : _.Localize(_),
        }),
      (0, _.jsxs)(_, {
        marginTop: `2`,
        children: [
          _
            ? (0, _.jsx)(_, {
                value: _,
                onTextChange: _,
                maxLength: _,
              })
            : (0, _.jsx)(_, {
                resize: `vertical`,
                value: _,
                onTextChange: _,
                maxLength: _,
              }),
          _ !== void 0 &&
            (0, _.jsx)(_, {
              cchCurrent: _.length,
              cchMax: _,
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { cchCurrent: _, cchMax: _ } = _;
  return (0, _.jsx)(_, {
    justify: `end`,
    marginTop: `1`,
    children: (0, _.jsx)(_, {
      size: `1`,
      color: _ >= _ ? `text-red` : void 0,
      children: `${_} / ${_}`,
    }),
  });
}
function _(_) {
  let { inputField: _, ..._ } = _,
    { aiSurvey: _, setAISurvey: _ } = _();
  return (0, _.jsx)(_, {
    ..._,
    value: _[_] ?? ``,
    nMaxLength: _,
    setValue: (_) => {
      let _ = {
        ..._,
      };
      ((_[_] = _), _(_));
    },
  });
}
function _(_) {
  let { rgContentSurveyList: _ } = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        strTitle: _.Localize(`#ContentSurvey_Tab_AI`),
        strDescription: _.Localize(
          `#StoreAdmin_Ratings_Questionaire_UseAnyAI_1`,
        ),
        children: [
          (0, _.jsx)(_, {
            size: `4`,
            _: `p`,
            children: _.Localize(`#StoreAdmin_Ratings_Questionaire_UseAnyAI_2`),
          }),
          (0, _.jsx)(_, {
            background: `dull-7`,
            padding: `3`,
            radius: `sm`,
            children: (0, _.jsx)(_, {
              enabledID: 38,
              disabledID: 50,
            }),
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        children: [
          _.includes(38) &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {}),
                (0, _.jsx)(_, {}),
                _.includes(40) && (0, _.jsx)(_, {}),
              ],
            }),
          (0, _.jsx)(_, {
            eSection: 6,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { rgCustomerAINotes: _, setCustomerAINotes: _ } = _(),
    _ = _(_);
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(_, {
        titleToken: `#App_ContentDescriptors_AI_StoreMessage_Header`,
        descToken: `#App_ContentDescriptors_AI_StoreMessage_Description_1`,
        bRequiredComplete: _,
      }),
      (0, _.jsx)(_, {
        _: `p`,
        children: _(
          _.Localize(`#App_ContentDescriptors_AI_StoreMessage_Description_2`),
          (0, _.jsx)(`b`, {}),
        ),
      }),
      (0, _.jsxs)(_, {
        direction: `column`,
        gap: `2`,
        children: [
          (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              rgStrings: _,
            }),
          }),
          (0, _.jsx)(_, {
            rows: 6,
            resize: `vertical`,
            setStrings: _,
            rgStrings: _,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let _ = _();
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(_, {
        titleToken: `#App_ContentDescriptors_AI_RealTime_Header`,
        descToken: `#App_ContentDescriptors_AI_Intro2`,
      }),
      (0, _.jsx)(_, {
        _: `p`,
        children: _.Localize(`#App_ContentDescriptors_AI_Intro3`),
      }),
      (0, _.jsx)(_, {
        _: 40,
        question: `#App_ContentDescriptors_AI_RealTime_Description_1`,
      }),
      _.rgContentSurveyList.includes(40) &&
        (0, _.jsxs)(_, {
          gap: `6`,
          direction: `column`,
          marginTop: `4`,
          className: `_5Vk018jqF1w-`,
          children: [
            (0, _.jsxs)(_, {
              children: [
                (0, _.jsxs)(_, {
                  _: `p`,
                  children: [
                    _.Localize(
                      `#StoreAdmin_Ratings_Questionaire_AI_RealtimePrompt`,
                    ),
                    `\xA0`,
                    (0, _.jsx)(_, {
                      bComplete: _(_.rgContentSurveyList),
                    }),
                  ],
                }),
                (0, _.jsx)(_, {
                  group: _,
                }),
              ],
            }),
            (0, _.jsx)(_, {
              bRequired: !0,
              titleToken: `#StoreAdmin_Ratings_Questionaire_AI_Content_Title`,
              descToken: `#StoreAdmin_Ratings_Questionaire_AI_Content_Subtitle`,
              inputField: `desc_code_generated`,
            }),
            (0, _.jsx)(_, {
              bRequired: !0,
              titleToken: `#StoreAdmin_Ratings_Questionaire_AI_Copyright_Title`,
              descToken: `#StoreAdmin_Ratings_Questionaire_AI_Copyright_Subtitle`,
              inputField: `desc_copyright_infringement_guarantee`,
            }),
            (0, _.jsx)(_, {
              bRequired: !0,
              titleToken: _(
                _.Localize(
                  `#StoreAdmin_Ratings_Questionaire_AI_Moderation_Title`,
                ),
                (0, _.jsx)(`a`, {
                  href: _.PARTNER_BASE_URL + `doc/gettingstarted/onboarding#5`,
                  target: `_blank`,
                  rel: `noreferrer`,
                }),
              ),
              descToken: `#StoreAdmin_Ratings_Questionaire_AI_Moderation_Subtitle`,
              inputField: `desc_content_moderation_strategy`,
            }),
            (0, _.jsx)(_, {
              bRequired: !0,
              titleToken: `#StoreAdmin_Ratings_Questionaire_AI_ExternalService_Name`,
              descToken: `#StoreAdmin_Ratings_Questionaire_AI_DescribeToPlayers_Subtitle`,
              inputField: `external_service_name`,
              bSingleLine: !0,
            }),
            (0, _.jsx)(_, {
              bRequired: !0,
              titleToken: `#StoreAdmin_Ratings_Questionaire_AI_ExternalService_AvailableToPlayers`,
              inputField: `desc_external_service_how_content_available_to_players`,
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let _ = _();
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(_, {
        titleToken: `#App_ContentDescriptors_AI_ExternalService_Header`,
      }),
      (0, _.jsx)(_, {
        _: 49,
        question: `#App_ContentDescriptors_AI_ExternalService_Description_1`,
      }),
      _.rgContentSurveyList.includes(49) &&
        (0, _.jsxs)(_, {
          gap: `6`,
          direction: `column`,
          marginTop: `4`,
          className: `_5Vk018jqF1w-`,
          children: [
            (0, _.jsx)(_, {
              _: `span`,
              children: _.Localize(
                `#StoreAdmin_Ratings_Questionaire_AI_ExternalServicePrompt`,
              ),
            }),
            (0, _.jsx)(_, {
              bRequired: !0,
              titleToken: `#StoreAdmin_Ratings_Questionaire_AI_ExternalService_URL`,
              descToken: `#StoreAdmin_Ratings_Questionaire_AI_DescribeToPlayers_Subtitle`,
              inputField: `external_service_url`,
              bSingleLine: !0,
            }),
            (0, _.jsx)(_, {
              bRequired: !0,
              titleToken: `#StoreAdmin_Ratings_Questionaire_AI_ExternalService_Monetization_Title`,
              descToken: _(
                _.Localize(
                  `#StoreAdmin_Ratings_Questionaire_AI_ExternalService_Monetization_Subtitle`,
                ),
                (0, _.jsx)(`a`, {
                  href:
                    _.PARTNER_BASE_URL + `doc/gettingstarted/contentsurvey#6`,
                  target: `_blank`,
                  rel: `noreferrer`,
                }),
                (0, _.jsx)(`a`, {
                  href: _.PARTNER_BASE_URL + `doc/features/microtransactions`,
                  target: `_blank`,
                  rel: `noreferrer`,
                }),
                (0, _.jsx)(`a`, {
                  href: _.PARTNER_BASE_URL + `doc/store/pricing/subscriptions`,
                  target: `_blank`,
                  rel: `noreferrer`,
                }),
                (0, _.jsx)(`a`, {
                  href: _.PARTNER_BASE_URL + `doc/store/application/dlc`,
                  target: `_blank`,
                  rel: `noreferrer`,
                }),
              ),
              inputField: `desc_external_service_monetization`,
            }),
          ],
        }),
    ],
  });
}
async function _(_) {
  let _ = new URLSearchParams();
  (_.set(`filter`, `examplesforcontentdescriptors`),
    _.set(`ignore_preferences`, `1`),
    _.set(`category1`, `992,994,998`),
    _.set(`json`, `1`));
  for (let _ of _) _.append(`descids[]`, String(_));
  let _ = `${_.STORE_BASE_URL}search/results/?${_.toString()}`,
    _ = await fetch(_, {
      method: `GET`,
      credentials: `include`,
      headers: {
        Accept: `application/json`,
      },
    });
  if (!_._)
    throw Error(`Failed to fetch content descriptor examples: ${_.status}`);
  let _ = await _.json();
  if (!_(_)) throw Error(`Invalid response shape`);
  return _;
}
function _(_) {
  return (
    typeof _?.desc == `string` &&
    Array.isArray(_?.items) &&
    _.items.every(
      (_) => typeof _?.name == `string` && typeof _?.logo == `string`,
    )
  );
}
function _(_) {
  return _({
    queryKey: [`useContentDescriptorExamples`, _],
    queryFn: () => _(_),
    enabled: _.length > 0,
  });
}
var _ = `Z-h6J2sr8tg-`,
  _ = `hfiBrqZ9EOQ-`,
  _ = `P8Z-wjopv4k-`,
  _ = `mkJotCo14ig-`,
  _ = `st6TkuMg43o-`;
function _(_) {
  let { title: _, desc: _, _: _, addIdList: _, removeIdList: _ } = _,
    {
      rgContentDescriptors: _,
      setContentDescriptors: _,
      rgLockedContentDescriptors: _,
    } = _(),
    _ = _.includes(_),
    _ = _ ?? [_],
    _ = _ ?? [_],
    _ = !_ || !_.some((_) => _.includes(_) && !_.includes(_)),
    [_, _, _] = _();
  return (0, _.jsxs)(_, {
    marginTop: `6`,
    children: [
      (0, _.jsx)(_, {
        checked: _,
        disabled: !_,
        onChange: (_) => {
          _(_, _ ? _ : void 0, _ ? void 0 : _, _, _);
        },
        children: (0, _.jsx)(_, {
          contrast: `title`,
          children: _.Localize(_),
        }),
      }),
      (0, _.jsxs)(_, {
        direction: `column`,
        align: `start`,
        marginTop: `2`,
        gap: `2`,
        className: _,
        children: [
          (0, _.jsx)(_, {
            _: `div`,
            children: _.Localize(_),
          }),
          !_ &&
            (0, _.jsx)(_, {
              _: `div`,
              children: _.Localize(
                `#ContentSurvey_ContentDescriptor_CannotRemove`,
              ),
            }),
          (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              size: `1`,
              color: `dull`,
              onClick: _,
              children: _.Localize(`#ContentDescriptors_Examples`),
            }),
          }),
          _ &&
            (0, _.jsx)(_, {
              title: _,
              _: _,
              closeModal: _,
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { _: _, closeModal: _, title: _ } = _;
  return (0, _.jsxs)(_, {
    onClose: _,
    strTitle: _.Localize(`#ContentDescriptors_Examples_Desc`, _.Localize(_)),
    children: [
      (0, _.jsx)(_, {
        direction: `column`,
        gap: `1`,
        className: _,
        children: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            _: _,
          }),
        }),
      }),
      (0, _.jsx)(_, {
        justify: `end`,
        gap: `3`,
        align: `center`,
        marginTop: `3`,
        children: (0, _.jsx)(_, {
          onClick: _,
          children: _.Localize(`#Button_OK`),
        }),
      }),
    ],
  });
}
function _(_) {
  let { _: _ } = _,
    { data: _, isLoading: _, error: _ } = _([_]);
  return _
    ? (0, _.jsx)(_, {
        string: _.Localize(`#ContentDescriptors_PleaseWaitDialog_Desc`),
      })
    : _
      ? (0, _.jsx)(`div`, {
          children: _.Localize(`#Error_ErrorCommunicatingWithNetwork`),
        })
      : !_ || !_.items || _.items.length == 0
        ? (0, _.jsx)(`div`, {
            children: _.Localize(`#ContentDescriptors_NoExamples`),
          })
        : (0, _.jsx)(_.Fragment, {
            children: _.items.map((_) =>
              (0, _.jsxs)(
                `div`,
                {
                  className: _,
                  children: [
                    (0, _.jsx)(`img`, {
                      className: _,
                      src: _.logo,
                      alt: _.name,
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: _.name,
                    }),
                  ],
                },
                _.name,
              ),
            ),
          });
}
var _ = `sKlkWKlkAeo-`,
  _ = `PrJr-48hVx0-`;
function _(_) {
  let { rgSelectableMatureTags: _ } = _,
    { rgMatureTags: _, setMatureTags: _ } = _();
  return (0, _.jsxs)(`div`, {
    className: _(_, _),
    children: [
      (0, _.jsx)(`div`, {
        children: _.Localize(`#App_ContentDescriptors_StoreTags_Specify`),
      }),
      (0, _.jsx)(_, {
        direction: `row`,
        children: _.map((_) =>
          (0, _.jsx)(
            `span`,
            {
              className: _,
              children: (0, _.jsx)(_, {
                checked: _.includes(_),
                onChange: (_) => {
                  _(!0, _ ? [_] : void 0, _ ? void 0 : [_], _, _);
                },
                children: _(_),
              }),
            },
            _,
          ),
        ),
      }),
      (0, _.jsx)(`div`, {
        children: _.Localize(`#App_ContentDescriptors_StoreTags_Desc`),
      }),
    ],
  });
}
var _ = `bC0edwDIqhk-`,
  _ = [5, 1, 2, 3, 4];
function _(_) {
  let { rgContentDescriptors: _ } = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        strTitle: _.Localize(`#ContentSurvey_Tab_MatureContent`),
        strDescription: _.Localize(`#ContentSurvey_MatureContent_Desc`),
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            marginTop: `6`,
            children: (0, _.jsx)(_, {
              _: `p`,
              size: `4`,
              children: _.Localize(`#ContentDescriptor_Mature_Intro`),
            }),
          }),
          (0, _.jsx)(_, {
            title: `#ContentDescriptor_AnyMature_Name`,
            desc: `#ContentDescriptor_AnyMature_PartnerDesc`,
            _: 5,
            removeIdList: _,
          }),
          (0, _.jsx)(_, {
            title: `#ContentDescriptor_Violence_Name`,
            desc: `#ContentDescriptor_Violence_PartnerDesc`,
            _: 2,
            addIdList: [5, 2],
          }),
          _.includes(2) &&
            (0, _.jsx)(_, {
              rgSelectableMatureTags: [1, 2],
            }),
          (0, _.jsx)(_, {
            title: `#ContentDescriptor_Sex_Name`,
            desc: `#ContentDescriptor_Sex_PartnerDesc`,
            _: 1,
            addIdList: [5, 1],
            removeIdList: [1, 4, 3],
          }),
          (0, _.jsx)(_, {
            title: `#ContentDescriptor_GratuitousSex_Name`,
            desc: `#ContentDescriptor_GratuitousSex_PartnerDesc`,
            _: 4,
            addIdList: [5, 1, 4],
            removeIdList: [4, 3],
          }),
          _.includes(4) &&
            (0, _.jsx)(_, {
              rgSelectableMatureTags: [3, 4],
            }),
          (0, _.jsx)(_, {
            title: `#ContentDescriptor_StrongSex_Name`,
            desc: `#ContentDescriptor_StrongSex_PartnerDesc`,
            _: 3,
            addIdList: [5, 1, 4, 3],
          }),
          _.includes(3) && (0, _.jsx)(_, {}),
          _.includes(5) && (0, _.jsx)(_, {}),
          (0, _.jsx)(_, {
            eSection: 1,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: _(_, _),
    children: [
      (0, _.jsx)(`div`, {
        children: _.Localize(
          `#App_ContentDescriptors_Survey_AOSexualContent_Notice`,
        ),
      }),
      (0, _.jsxs)(`ul`, {
        children: [
          (0, _.jsx)(`li`, {
            children: _.Localize(
              `#App_ContentDescriptors_Survey_AOSexualContent_Point1`,
            ),
          }),
          (0, _.jsx)(`li`, {
            children: _.Localize(
              `#App_ContentDescriptors_Survey_AOSexualContent_Point2`,
            ),
          }),
          (0, _.jsx)(`li`, {
            children: _.Localize(
              `#App_ContentDescriptors_Survey_AOSexualContent_Point3`,
            ),
          }),
          (0, _.jsx)(`li`, {
            children: _(
              _.Localize(
                `#App_ContentDescriptors_Survey_AOSexualContent_Point4`,
              ),
              (0, _.jsx)(`a`, {
                href: `https://www.justice.gov/criminal-ceos/18-usc-2257-2257a-certifications`,
                target: `_blank`,
                rel: `noreferrer`,
              }),
            ),
          }),
          (0, _.jsx)(`li`, {
            children: _.Localize(
              `#App_ContentDescriptors_Survey_AOSexualContent_Point5`,
            ),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let {
      rgCustomerMatureContentDesc: _,
      setCustomerMatureContentDesc: _,
      strReviewerDescription: _,
      setReviewerDescription: _,
    } = _(),
    _ = _(_),
    _ = _(_);
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsxs)(_, {
            size: `4`,
            marginTop: `7`,
            children: [
              _.Localize(`#App_ContentDescriptors_Mature_Survey_Title`),
              `\xA0`,
              (0, _.jsx)(_, {
                bComplete: _,
              }),
            ],
          }),
          (0, _.jsx)(_, {
            _: `p`,
            children: _.Localize(
              `#App_ContentDescriptors_SurveyCustomerNotes_Desc`,
            ),
          }),
          (0, _.jsx)(_, {
            _: `p`,
            children: _(
              _.Localize(`#App_ContentDescriptors_SurveyCustomerNotes_Desc_2`),
              (0, _.jsx)(`b`, {}),
            ),
          }),
          (0, _.jsxs)(_, {
            direction: `column`,
            gap: `2`,
            children: [
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  rgStrings: _,
                }),
              }),
              (0, _.jsx)(_, {
                rows: 6,
                resize: `vertical`,
                setStrings: _,
                rgStrings: _,
              }),
            ],
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsxs)(_, {
            size: `4`,
            marginTop: `4`,
            children: [
              _.Localize(`#App_ContentDescriptors_SurveyNotes`),
              `\xA0`,
              (0, _.jsx)(_, {
                bComplete: _,
              }),
            ],
          }),
          (0, _.jsx)(_, {
            _: `p`,
            children: _.Localize(`#App_ContentDescriptors_SurveyNotes_Desc_1`),
          }),
          (0, _.jsx)(_, {
            _: `p`,
            children: _(
              _.Localize(`#App_ContentDescriptors_SurveyNotes_Desc_2`),
              (0, _.jsx)(`b`, {}),
            ),
          }),
          (0, _.jsx)(_, {
            rows: 6,
            resize: `vertical`,
            value: _,
            onTextChange: _,
          }),
        ],
      }),
    ],
  });
}
var _ = `QBh7Dn8Xl3E-`,
  _ = `BP9Vaq-fYwQ-`,
  _ = `UAMRgJ-KDI0-`,
  _ = `RyOsaXCZ1h8-`;
function _(_) {
  let { activeSurvey: _, bAppHasSteamChinaToolsEnabled: _ } = _,
    {
      surveyFlow: _,
      rgOfficialRatings: _,
      setOfficialRatings: _,
      rgOfficialRatingsAgreed: _,
      setOfficialRatingsAgreed: _,
    } = _(),
    _ = _(),
    _ = _.ratingsGenerated ?? _?.survey?.ratings,
    _ = _(_, _),
    _ = (0, _.useCallback)((_) => _([..._, _]), [_, _]),
    _ = (0, _.useCallback)((_, _) => _(_ ? _(_, _) : _(_, _)), [_, _]),
    _ = (0, _.useCallback)(
      (_) => {
        (_(_, void 0), _(_.filter((_) => _ != _)));
      },
      [_, _, _],
    );
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        strTitle: _.Localize(`#StoreAdmin_Ratings_OtherRatingAgencies`),
        strDescription: _.Localize(`#ContentSurvey_Official_Desc`),
        children: [
          (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                size: `4`,
                _: `p`,
                color: `orange-11`,
                children: _.Localize(
                  `#StoreAdmin_Ratings_OtherRatingAgencies_Note2`,
                ),
              }),
              (0, _.jsx)(_, {
                size: `4`,
                _: `p`,
                color: `orange-11`,
                children: _.Localize(
                  `#StoreAdmin_Ratings_OtherRatingAgencies_Note3`,
                ),
              }),
            ],
          }),
          (0, _.jsx)(_, {}),
        ],
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            direction: `column`,
            gap: `3`,
            marginTop: `6`,
            children: _(_, !!_).map((_) =>
              (0, _.jsx)(
                _,
                {
                  agency: _,
                  rating: _(_, _.eAgency),
                  bAgreed: _.includes(_.eAgency),
                  bBanned: _.has(_.region),
                  rgContentCategories: _?.content_categories,
                  SetRating: (_) => _(_.eAgency, _),
                  OnAgreeToDisclaimer: () => _(_.eAgency),
                  OnDelete: () => _(_.eAgency),
                },
                _.key,
              ),
            ),
          }),
          (0, _.jsx)(_, {}),
        ],
      }),
    ],
  });
}
function _(_, _) {
  let _ = new Set();
  for (let _ of _?.ratings ?? []) {
    let _ = _.banned && _.rating_agency ? _(_, _.rating_agency) : void 0;
    _ && !_(_) && _.add(_.region);
  }
  return _;
}
function _() {
  let { surveyFlow: _, rgOfficialRatings: _, bOfficialRatingsDirty: _ } = _(),
    { GoToTab: _ } = _();
  return !_.bHasUnpublishedWork || _.length > 0 || _
    ? null
    : (0, _.jsxs)(_, {
        direction: `column`,
        align: `start`,
        gap: `2`,
        marginTop: `4`,
        children: [
          (0, _.jsx)(_, {
            size: `4`,
            _: `p`,
            children: _.Localize(`#ContentSurvey_Official_Skip_Desc`),
          }),
          (0, _.jsx)(_, {
            onClick: () => _(_.Publish),
            children: _.Localize(`#ContentSurvey_Official_Skip_Button`),
          }),
        ],
      });
}
function _() {
  let { surveyFlow: _, bOfficialRatingsDirty: _ } = _(),
    _ = _.bSaving || _.bPublishing || _.bDiscarding;
  return (0, _.jsxs)(_, {
    direction: `column`,
    align: `start`,
    gap: `2`,
    marginTop: `7`,
    background: `dull-9`,
    padding: `5`,
    radius: `sm`,
    children: [
      (0, _.jsx)(_, {
        loading: _.bSaving,
        disabled: _ || !_,
        onClick: () => _.Save(),
        children: _.Localize(`#ContentSurvey_Section_Save`),
      }),
      (0, _.jsx)(_, {
        _: `p`,
        children: _.Localize(
          _
            ? `#ContentSurvey_Official_Save_Desc`
            : `#ContentSurvey_Official_Saved`,
        ),
      }),
      _.strError &&
        (0, _.jsx)(_, {
          _: `p`,
          size: `4`,
          className: `R0wKGE9XVUk-`,
          children: _.strError,
        }),
    ],
  });
}
function _(_) {
  let {
      agency: _,
      rating: _,
      bAgreed: _,
      bBanned: _,
      rgContentCategories: _,
      SetRating: _,
      OnAgreeToDisclaimer: _,
      OnDelete: _,
    } = _,
    { eAgency: _ } = _,
    [_, _] = (0, _.useState)(),
    _ = _ ?? _;
  return (0, _.jsxs)(_, {
    direction: `column`,
    background: `dull-4`,
    padding: `4`,
    gap: `3`,
    children: [
      _
        ? (0, _.jsxs)(_, {
            direction: `row`,
            align: `center`,
            children: [
              (0, _.jsx)(_, {
                size: `5`,
                children: _.title,
              }),
              (0, _.jsx)(_, {
                size: `4`,
                marginLeft: `2`,
                children: _.region,
              }),
            ],
          })
        : (0, _.jsxs)(`button`, {
            type: `button`,
            className: _,
            onClick: () => {
              let _ = _(_);
              _ ? _(_) : _(_);
            },
            children: [
              (0, _.jsx)(_, {
                size: `5`,
                children: _.title,
              }),
              (0, _.jsx)(_, {
                size: `4`,
                marginLeft: `2`,
                children: _.region,
              }),
              (0, _.jsxs)(`span`, {
                className: _,
                children: [
                  (0, _.jsx)(_, {
                    children: _.Localize(`#ContentSurvey_Official_Edit`),
                  }),
                  (0, _.jsx)(_, {}),
                ],
              }),
            ],
          }),
      _ &&
        !_ &&
        (0, _.jsx)(_, {
          agency: _,
          rating: _,
          SetRating: (_) => (_ ? _(_) : _(_)),
          OnAgreeToDisclaimer: () => {
            (!_ && _ && _(_), _(void 0), _());
          },
        }),
      _ &&
        _ &&
        (0, _.jsxs)(_, {
          direction: `row`,
          gap: `9`,
          align: `start`,
          children: [
            (0, _.jsx)(_, {
              direction: `column`,
              gap: `4`,
              flexGrow: `1`,
              children: (0, _.jsx)(_, {
                agency: _,
                rating: _,
                SetRating: _,
              }),
            }),
            (0, _.jsx)(_, {
              agency: _,
              rating: _,
              bBanned: _,
              rgContentCategories: _,
            }),
          ],
        }),
      _ &&
        (0, _.jsx)(_, {
          justify: `end`,
          children: (0, _.jsx)(_, {
            variant: `outline`,
            onClick: () => {
              (_(void 0), _ && _());
            },
            children: _.Localize(`#ContentSurvey_Official_Delete`),
          }),
        }),
    ],
  });
}
function _(_) {
  let { agency: _, rating: _, SetRating: _, OnAgreeToDisclaimer: _ } = _,
    _ = _(_),
    _ = _.Localize(`#StoreAdmin_Ratings_Disclaimer`, _.title);
  return (0, _.jsxs)(_, {
    direction: `column`,
    align: `start`,
    gap: `4`,
    padding: `4`,
    paddingLeft: `6`,
    children: [
      _
        ? (0, _.jsx)(_, {
            children: _,
          })
        : (0, _.jsx)(_, {
            checked: !1,
            align: `start`,
            onChange: _,
            children: (0, _.jsx)(_, {
              children: _,
            }),
          }),
      _ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              agency: _,
              rating: _,
              SetRating: _,
              bQuietWhenEmpty: !0,
              bHideLabel: !0,
              bErrorAbove: !0,
              strDescription: _.Localize(
                `#ContentSurvey_Official_RatingID_Prompt`,
                _.title,
              ),
            }),
            (0, _.jsx)(_, {
              disabled: !_(_),
              onClick: _,
              children: _.Localize(`#ContentSurvey_Official_RatingID_Continue`),
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let { agency: _, rating: _, SetRating: _ } = _,
    _ = _(),
    _ = _.eAgency == 1,
    _ = _(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.ratings.length > 0 &&
        (0, _.jsx)(_, {
          strLabel: _.Localize(`#StoreAdmin_Ratings_List_Rating`),
          bRequiredComplete: _(_, _),
          children: (0, _.jsx)(_, {
            options: _.ratings.map((_) => _.rating ?? ``),
            selectedValue: _.strRating || null,
            placeholder: _.Localize(
              `#StoreAdmin_Ratings_List_Rating_Placeholder`,
            ),
            getOptionLabel: (_) => _(_, _),
            onSelectionChange: (_) =>
              _({
                ..._,
                strRating: _ || ``,
              }),
            clearable: !0,
          }),
        }),
      (0, _.jsx)(_, {
        agency: _,
        rating: _,
        SetRating: _,
      }),
      (0, _.jsx)(_, {
        strLabel: _.Localize(`#StoreAdmin_Ratings_List_Descriptors`),
        children: (0, _.jsx)(_, {
          rows: 5,
          value: _.strDescriptors,
          onTextChange: (_) =>
            _({
              ..._,
              strDescriptors: _,
            }),
        }),
      }),
      _(_).length > 0 &&
        (0, _.jsx)(_, {
          strLabel: _.Localize(`#ContentSurvey_Official_DescriptorImages`),
          children: (0, _.jsx)(_, {
            agency: _,
            rgSelected: _.rgDescriptorImages,
            OnChange: (_) =>
              _({
                ..._,
                rgDescriptorImages: _,
              }),
          }),
        }),
      _ &&
        (0, _.jsx)(_, {
          strLabel: _.Localize(`#StoreAdmin_Ratings_List_InteractiveElements`),
          children: (0, _.jsx)(_, {
            rows: 5,
            value: _.strInteractiveElements,
            onTextChange: (_) =>
              _({
                ..._,
                strInteractiveElements: _,
              }),
          }),
        }),
      _ &&
        (0, _.jsx)(_, {
          strLabel: _.Localize(`#StoreAdmin_Ratings_List_Access`),
          children: (0, _.jsx)(_, {
            borderColor: `dull-7`,
            padding: `2`,
            children: (0, _.jsx)(_, {
              children:
                _ > 0
                  ? _.Localize(`#ContentSurvey_Official_AgeGate`, _)
                  : _.Localize(`#ContentSurvey_Official_AgeGate_None`),
            }),
          }),
        }),
      _ &&
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              checked: _.bDisplayOnlineInteractionsNotice,
              onChange: (_) =>
                _({
                  ..._,
                  bDisplayOnlineInteractionsNotice: _,
                }),
              children: _.Localize(`#StoreAdmin_Ratings_DisplayNotice`),
            }),
            (0, _.jsx)(_, {
              checked: _.bDisplayOnlineMusicNotice,
              onChange: (_) =>
                _({
                  ..._,
                  bDisplayOnlineMusicNotice: _,
                }),
              children: _.Localize(
                `#StoreAdmin_Ratings_DisplayOnlineMusicNotice`,
              ),
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let {
    agency: _,
    rating: _,
    SetRating: _,
    bQuietWhenEmpty: _,
    strDescription: _,
    bHideLabel: _,
    bErrorAbove: _,
  } = _;
  if (!_(_)) return null;
  let _ =
    !_(_) &&
    (!!_.strRatingID || !_) &&
    (0, _.jsx)(_, {
      color: `text-red`,
      children: _.strRatingID
        ? _.Localize(`#ContentSurvey_Official_RatingID_Invalid`, _.title)
        : _.Localize(`#ContentSurvey_Official_RatingID_Required`),
    });
  return (0, _.jsxs)(_, {
    strLabel: _ ? void 0 : _.Localize(`#StoreAdmin_Ratings_RatingID_Label`),
    children: [
      _ && _,
      (0, _.jsxs)(_, {
        direction: `row`,
        gap: `3`,
        align: `center`,
        children: [
          (0, _.jsx)(_, {
            maxWidth: `140px`,
            children: (0, _.jsx)(_, {
              value: _.strRatingID,
              maxLength: 10,
              placeholder: _.Localize(
                `#StoreAdmin_Ratings_RatingID_Placeholder`,
              ),
              onTextChange: (_) =>
                _({
                  ..._,
                  strRatingID: _,
                }),
            }),
          }),
          !_ && _,
          _ &&
            (0, _.jsx)(_, {
              children: _,
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { strLabel: _, bRequiredComplete: _, children: _ } = _;
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `2`,
    children: [
      _ &&
        (0, _.jsxs)(_, {
          weight: `medium`,
          children: [
            _,
            _ !== void 0 &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  `\xA0`,
                  (0, _.jsx)(_, {
                    bComplete: _,
                  }),
                ],
              }),
          ],
        }),
      _,
    ],
  });
}
function _(_) {
  let { agency: _, rgSelected: _, OnChange: _ } = _;
  return (0, _.jsx)(_, {
    direction: `row`,
    gap: `2`,
    className: _,
    children: _(_).map((_) => {
      let _ = _(_);
      if (!_) return null;
      let _ = _.includes(_);
      return (0, _.jsx)(
        `button`,
        {
          type: `button`,
          title: _.strAlt,
          "aria-pressed": _,
          className: _(_, _ && `XSZxKFApucg-`),
          onClick: () => _(_(_, _, _)),
          children: (0, _.jsx)(`img`, {
            src: _.strURL,
            alt: _.strAlt,
          }),
        },
        _,
      );
    }),
  });
}
function _(_) {
  let { agency: _, rating: _, bBanned: _, rgContentCategories: _ } = _;
  return _?.strRating.length == 0
    ? (0, _.jsx)(_, {
        padding: `4`,
        radius: `sm`,
        minWidth: `400px`,
      })
    : (0, _.jsx)(_.Fragment, {
        children: (0, _.jsxs)(_, {
          direction: `column`,
          gap: `2`,
          children: [
            (0, _.jsx)(_, {
              weight: `medium`,
              children: _.Localize(`#StoreAdmin_Ratings_Preview`),
            }),
            (0, _.jsxs)(_, {
              background: `dull-2`,
              padding: `4`,
              radius: `sm`,
              minWidth: `400px`,
              children: [
                _ &&
                  (0, _.jsx)(_, {
                    strRegion: _.region,
                  }),
                (0, _.jsx)(_, {
                  agency: _,
                  strRating: _.strRating,
                  nRequiredAge: _.nRequiredAge,
                  rgDescriptors: _(_.strDescriptors),
                  rgDescriptorImages: _.rgDescriptorImages,
                  bDisplayOnlineMusicNotice: _.bDisplayOnlineMusicNotice,
                  bDisplayOnlineInteractionsNotice:
                    _.bDisplayOnlineInteractionsNotice,
                  rgInteractiveElements: _(_.strInteractiveElements),
                  rgContentCategories: _,
                }),
              ],
            }),
          ],
        }),
      });
}
var _ = new Map();
function _(_) {
  if (!window.SSR?.clientAssets?.moduleMap?.[_._]) return null;
  let _ = _.get(_._);
  return (
    _ || ((_ = _.lazy(_._)), _.set(_._, _)),
    (0, _.jsx)(_.Suspense, {
      children: (0, _.jsx)(_, {
        _: _._,
      }),
    })
  );
}
var _ = [
  {
    eAction: `inheritdiscarddraft`,
    strSummaryToken: `#ContentSurvey_ChildApps_DiscardDraft`,
    strDialogTitleToken: `#ContentSurvey_ChildApps_DiscardDraft_Title`,
    strDialogDescToken: `#ContentSurvey_ChildApps_DiscardDraft_Desc`,
    bDestructive: !0,
  },
  {
    eAction: `inherit`,
    strSummaryToken: `#ContentSurvey_ChildApps_Inherit`,
    strDialogTitleToken: `#ContentSurvey_ChildApps_Inherit_Title`,
    strDialogDescToken: `#ContentSurvey_ChildApps_Inherit_Desc`,
  },
  {
    eAction: `keepsown`,
    strSummaryToken: `#ContentSurvey_ChildApps_KeepsOwn`,
    strDialogTitleToken: `#ContentSurvey_ChildApps_KeepsOwn_Title`,
    strDialogDescToken: `#ContentSurvey_ChildApps_KeepsOwn_Desc`,
  },
  {
    eAction: `nosurvey`,
    strSummaryToken: `#ContentSurvey_ChildApps_NoSurvey`,
    strDialogTitleToken: `#ContentSurvey_ChildApps_NoSurvey_Title`,
    strDialogDescToken: `#ContentSurvey_ChildApps_NoSurvey_Desc`,
  },
];
function _(_) {
  return _.map((_) => ({
    ..._,
    cChildApps: _.find((_) => _.eAction == _.eAction)?.cChildApps ?? 0,
  })).filter((_) => _.cChildApps > 0);
}
function _(_) {
  return _.strName || String(_.nAppID);
}
function _(_) {
  let { nAppID: _, FetchChildApps: _ } = _,
    { surveyFlow: _ } = _(),
    _ = _(_.rgChildAppCounts ?? []);
  return _.length == 0 || !_.bHasUnpublishedWork
    ? null
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            titleToken: `#ContentSurvey_ChildApps_Title`,
            descToken: `#ContentSurvey_ChildApps_Desc`,
          }),
          (0, _.jsx)(_, {
            direction: `column`,
            gap: `3`,
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  group: _,
                  nAppID: _,
                  FetchChildApps: _,
                },
                _.eAction,
              ),
            ),
          }),
        ],
      });
}
function _(_) {
  let { group: _, nAppID: _, FetchChildApps: _ } = _,
    [_, _, _] = _();
  return (0, _.jsxs)(_, {
    direction: `row`,
    gap: `4`,
    align: `center`,
    background: `dull-4`,
    padding: `4`,
    radius: `sm`,
    children: [
      (0, _.jsx)(_, {
        direction: `column`,
        flexGrow: `1`,
        children: (0, _.jsx)(_, {
          _: `p`,
          color: _.bDestructive ? `text-red` : void 0,
          weight: _.bDestructive ? `medium` : void 0,
          children: _.LocalizePlural(_.strSummaryToken, _.cChildApps),
        }),
      }),
      (0, _.jsx)(_, {
        variant: `outline`,
        onClick: _,
        children: _.Localize(`#ContentSurvey_ChildApps_SeeMore`),
      }),
      _ &&
        (0, _.jsx)(_, {
          group: _,
          nAppID: _,
          FetchChildApps: _,
          onClose: _,
        }),
    ],
  });
}
function _(_) {
  let { group: _, nAppID: _, FetchChildApps: _, onClose: _ } = _,
    {
      data: _,
      isLoading: _,
      error: _,
    } = _({
      queryKey: [`ContentSurveyChildApps`, _, _.eAction],
      queryFn: () => _(_.eAction),
      staleTime: 1 / 0,
    });
  return (0, _.jsx)(_, {
    onClose: _,
    navID: `ContentSurveyChildAppInheritance`,
    strTitle: _.Localize(_.strDialogTitleToken),
    children: (0, _.jsxs)(_, {
      direction: `column`,
      gap: `4`,
      style: {
        maxWidth: 800,
      },
      children: [
        (0, _.jsx)(_, {
          _: `p`,
          children: _.Localize(_.strDialogDescToken),
        }),
        _ &&
          (0, _.jsx)(_, {
            string: _.Localize(`#ContentSurvey_ChildApps_Loading`),
          }),
        !!_ &&
          (0, _.jsx)(_, {
            _: `p`,
            color: `text-red`,
            children: _.Localize(`#ContentSurvey_ChildApps_LoadFailed`),
          }),
        (0, _.jsx)(_, {
          direction: `column`,
          gap: `2`,
          children: _?.map((_) =>
            (0, _.jsxs)(
              _,
              {
                direction: `row`,
                gap: `3`,
                justify: `between`,
                children: [
                  (0, _.jsx)(_, {
                    children: _(_),
                  }),
                  (0, _.jsx)(_, {
                    children: _.Localize(
                      `#ContentSurvey_ChildApps_AppMeta`,
                      _(_.eAppKind),
                      String(_.nAppID),
                    ),
                  }),
                ],
              },
              _.nAppID,
            ),
          ),
        }),
      ],
    }),
  });
}
var _ = new Set([38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]),
  _ = [1, 4, 3];
function _(_, _) {
  let _ = _(_);
  if (_.length == 0 || _.some((_) => !_.has(_))) return [];
  let _ = [];
  return (
    _.includes(2) && _.push(3),
    _.some((_) => _.includes(_)) && _.push(5),
    _.length == 0 && _.push(2),
    _
  );
}
var _ = `Bwmo0TfDk6c-`;
function _(_) {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        strTitle: _.Localize(`#ContentSurvey_Tab_Publish`),
        strDescription: _.Localize(`#ContentSurvey_Publish_Desc`),
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {}),
          (0, _.jsx)(_, {
            nAppID: _.nAppID,
            rgChildAppCounts: _.rgChildAppCounts,
            FetchChildApps: _.FetchChildApps,
          }),
          (0, _.jsx)(_, {
            ..._,
          }),
          (0, _.jsx)(_, {
            ..._,
          }),
        ],
      }),
    ],
  });
}
function _() {
  let {
      surveyFlow: _,
      rgSectionsOutstanding: _,
      bOfficialRatingsDirty: _,
      rgOfficialRatingsSaved: _,
      rgContentDescriptors: _,
      rgContentSurveyList: _,
    } = _(),
    _ = _(),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    _ = _ ? [] : _(_, _),
    _ = () => {
      (_(!0), _.length == 0 && _.Publish(_));
    },
    _ = _.every((_) => _(_, _)),
    _ = _.length == 0 && !_ && _;
  return _.bPublished
    ? (0, _.jsxs)(_, {
        background: `dull-9`,
        padding: `5`,
        radius: `sm`,
        marginTop: `6`,
        children: [
          (0, _.jsx)(_, {
            size: `5`,
            color: `green-9`,
            children: _.Localize(`#ContentSurvey_Publish_Done_Header`),
          }),
          (0, _.jsx)(_, {
            _: `p`,
            children: _.Localize(`#ContentSurvey_Overview_Published`),
          }),
        ],
      })
    : (0, _.jsx)(_, {
        background: `dull-9`,
        padding: `5`,
        radius: `sm`,
        marginTop: `6`,
        border: ``,
        children: (0, _.jsxs)(_, {
          direction: `column`,
          align: `start`,
          children: [
            _
              ? (0, _.jsx)(_, {
                  size: `5`,
                  color: `green-9`,
                  children: _.Localize(
                    `#ContentSurvey_Overview_Publish_Header`,
                  ),
                })
              : (0, _.jsx)(_, {
                  size: `5`,
                  color: `amber-9`,
                  children: _.Localize(
                    `#ContentSurvey_Overview_InProgress_Header`,
                  ),
                }),
            (0, _.jsx)(_, {
              size: `4`,
              _: `p`,
              children: _.Localize(
                _
                  ? `#ContentSurvey_Publish_Ready_Desc`
                  : `#ContentSurvey_Overview_InProgress_Description`,
              ),
            }),
            _
              ? (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_, {
                      size: `4`,
                      _: `p`,
                      children: _.Localize(
                        `#ContentSurvey_Overview_Publish_Warning`,
                      ),
                    }),
                    (0, _.jsxs)(_, {
                      gap: `4`,
                      align: `center`,
                      wrap: `wrap`,
                      children: [
                        (0, _.jsx)(_, {
                          loading: _.bPublishing,
                          disabled: _.bSaving || _.bDiscarding,
                          onClick: _,
                          children: _.Localize(
                            `#ContentSurvey_Overview_Publish_Button`,
                          ),
                        }),
                        (0, _.jsx)(_, {
                          _: `5UxQEWRBCf`,
                          _: () => _(`5UxQEWRBCf`),
                          _: [_, _],
                        }),
                      ],
                    }),
                    _ &&
                      _.length > 0 &&
                      (0, _.jsx)(_, {
                        rgSections: _,
                      }),
                  ],
                })
              : (0, _.jsx)(_, {
                  rgSections: _,
                  bOfficialRatingsDirty: _,
                }),
            _.strError &&
              (0, _.jsx)(_, {
                _: `p`,
                size: `4`,
                className: `R0wKGE9XVUk-`,
                children: _.strError,
              }),
          ],
        }),
      });
}
function _(_) {
  let { rgSections: _, bOfficialRatingsDirty: _ } = _;
  return _.length > 0
    ? (0, _.jsx)(_, {
        rgSections: _,
      })
    : (0, _.jsx)(_, {
        strDescToken: _
          ? `#ContentSurvey_Publish_Outstanding_OfficialRatings`
          : `#ContentSurvey_Publish_Outstanding_OfficialRatings_NoRating`,
      });
}
function _(_) {
  let { rgSections: _ } = _,
    { GoToTab: _ } = _(),
    _ = _(_)
      .map((_) => _.Localize(_))
      .join(`, `);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        _: `p`,
        size: `4`,
        className: _,
        children: _.Localize(`#ContentSurvey_Overview_Publish_Outstanding`, _),
      }),
      (0, _.jsx)(_, {
        onClick: () => _(_(_[0])?.strTabKey ?? _.Overview),
        children: _.Localize(`#ContentSurvey_Overview_ResumeButton`),
      }),
    ],
  });
}
function _(_) {
  let { rgSections: _ } = _,
    { GoToTab: _ } = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        size: `4`,
        _: `p`,
        color: `text-red`,
        children: _.Localize(`#ContentSurvey_Publish_MatureContentUnexplained`),
      }),
      (0, _.jsx)(_, {
        gap: `3`,
        wrap: `wrap`,
        children: _.map((_) => {
          let _ = _(_);
          return (
            _ &&
            (0, _.jsx)(
              _,
              {
                onClick: () => _(_.strTabKey),
                children: _.Localize(
                  `#ContentSurvey_Publish_MatureContentUnexplained_Button`,
                  _.Localize(_.strNameToken),
                ),
              },
              _,
            )
          );
        }),
      }),
    ],
  });
}
function _(_) {
  let { strDescToken: _ } = _,
    { GoToTab: _ } = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        _: `p`,
        size: `4`,
        className: _,
        children: _.Localize(_),
      }),
      (0, _.jsx)(_, {
        onClick: () => _(_.Official),
        children: _.Localize(
          `#ContentSurvey_Publish_Outstanding_OfficialRatings_Button`,
        ),
      }),
    ],
  });
}
function _(_) {
  let { activeSurvey: _ } = _,
    { GetSurveyEdits: _, surveyFlow: _ } = _(),
    _ = _(),
    _ = !!_?.survey,
    _ = _(_, _(_?.survey), _());
  if (_.length == 0) return null;
  if (!_.bHasUnpublishedWork)
    return (0, _.jsx)(_, {
      rgGroups: _,
      titleToken: `#ContentSurvey_Publish_Compare_Title_Published`,
      descToken: `#ContentSurvey_Publish_Compare_Desc_Published`,
    });
  let _ = _.filter(_);
  return _.length == 0
    ? (0, _.jsx)(_, {
        rgGroups: _,
        titleToken: `#ContentSurvey_Publish_Compare_Title_NoChanges`,
        descToken: `#ContentSurvey_Publish_Compare_Desc_NoChanges`,
      })
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            titleToken: `#ContentSurvey_Publish_Compare_Title`,
            descToken: _
              ? `#ContentSurvey_Publish_Compare_Desc`
              : `#ContentSurvey_Publish_Compare_Desc_NoPublished`,
          }),
          (0, _.jsxs)(_, {
            columns: `1fr 4fr`,
            gap: `2`,
            children: [
              (0, _.jsx)(`div`, {}),
              (0, _.jsxs)(_, {
                direction: `row`,
                gap: `2`,
                children: [
                  _ &&
                    (0, _.jsx)(_, {
                      width: `100%`,
                      children: _.Localize(
                        `#ContentSurvey_Publish_Compare_Published`,
                      ),
                    }),
                  (0, _.jsx)(_, {
                    width: `100%`,
                    children: _.Localize(
                      `#ContentSurvey_Publish_Compare_Draft`,
                    ),
                  }),
                ],
              }),
              _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    group: _,
                    bHasPublished: _,
                  },
                  _.strNameToken,
                ),
              ),
            ],
          }),
        ],
      });
}
function _(_) {
  let { rgGroups: _, titleToken: _, descToken: _ } = _,
    _ = _.filter((_) => _.rgDraft.length > 0);
  return _.length == 0
    ? null
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            titleToken: _,
            descToken: _,
          }),
          (0, _.jsx)(_, {
            direction: `column`,
            gap: `5`,
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  direction: `column`,
                  gap: `2`,
                  children: (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, _.jsx)(_, {
                        size: `3`,
                        children: _.Localize(_.strNameToken),
                      }),
                      (0, _.jsx)(_, {
                        rgSettings: _.rgDraft,
                      }),
                    ],
                  }),
                },
                _.strNameToken,
              ),
            ),
          }),
        ],
      });
}
function _(_) {
  let { group: _, bHasPublished: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        size: `3`,
        children: _.Localize(_.strNameToken),
      }),
      (0, _.jsxs)(_, {
        direction: `row`,
        gap: `2`,
        children: [
          _ &&
            (0, _.jsx)(_, {
              rgSettings: _.rgPublished,
              eChange: `removed`,
            }),
          (0, _.jsx)(_, {
            rgSettings: _.rgDraft,
            eChange: _ ? `added` : void 0,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { rgSettings: _, eChange: _ } = _;
  return (0, _.jsx)(_, {
    direction: `column`,
    gap: `2`,
    background: `dull-4`,
    padding: `4`,
    radius: `sm`,
    width: `100%`,
    children:
      _.length > 0
        ? _.map((_) =>
            (0, _.jsxs)(
              _,
              {
                _: `div`,
                children: [
                  _.strName,
                  _ &&
                    _.bChanged &&
                    (0, _.jsx)(_, {
                      color: _ == `added` ? `text-green` : `text-red`,
                      children:
                        ` ` +
                        _.Localize(
                          _ == `added`
                            ? `#ContentSurvey_Publish_Compare_Added`
                            : `#ContentSurvey_Publish_Compare_Removed`,
                        ),
                    }),
                ],
              },
              _.strName,
            ),
          )
        : (0, _.jsx)(_, {
            _: `p`,
            children: _.Localize(`#ContentSurvey_Publish_Compare_Nothing`),
          }),
  });
}
function _() {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        strTitle: _.Localize(`#ContentSurvey_Welcome_Title`),
        strDescription: _.Localize(`#ContentSurvey_Welcome_Desc`),
        children: [
          (0, _.jsx)(_, {
            size: `4`,
            _: `p`,
            children: _.Localize(`#ContentSurvey_Overview_P1`),
          }),
          (0, _.jsx)(_, {
            size: `4`,
            _: `p`,
            children: _.Localize(`#ContentSurvey_Overview_P2`),
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            titleToken: `#ContentSurvey_Welcome_HowItWorks_Title`,
            descToken: `#ContentSurvey_Welcome_HowItWorks_Desc`,
          }),
          (0, _.jsxs)(_, {
            direction: `column`,
            gap: `4`,
            children: [
              (0, _.jsx)(_, {
                titleToken: `#ContentSurvey_Welcome_Required_Title`,
                descToken: `#ContentSurvey_Welcome_Required_Desc`,
              }),
              (0, _.jsx)(_, {
                titleToken: `#ContentSurvey_Welcome_Draft_Title`,
                descToken: `#ContentSurvey_Welcome_Draft_Desc`,
              }),
              (0, _.jsx)(_, {
                titleToken: `#ContentSurvey_Welcome_Publish_Title`,
                descToken: `#ContentSurvey_Welcome_Publish_Desc`,
              }),
            ],
          }),
          (0, _.jsx)(_, {}),
        ],
      }),
    ],
  });
}
function _(_) {
  let { titleToken: _, descToken: _ } = _;
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `1`,
    background: `dull-4`,
    padding: `4`,
    radius: `sm`,
    children: [
      (0, _.jsx)(_, {
        size: `3`,
        children: _.Localize(_),
      }),
      (0, _.jsx)(_, {
        _: `p`,
        children: _.Localize(_),
      }),
    ],
  });
}
function _() {
  let { surveyFlow: _ } = _();
  return (0, _.jsxs)(_, {
    direction: `column`,
    align: `start`,
    gap: `3`,
    marginTop: `7`,
    background: `dull-9`,
    padding: `5`,
    radius: `sm`,
    children: [
      (0, _.jsx)(_, {
        size: `4`,
        children: _.Localize(`#ContentSurvey_Welcome_Start_Title`),
      }),
      (0, _.jsx)(_, {
        _: `p`,
        children: _.Localize(`#ContentSurvey_Welcome_Start_Desc`),
      }),
      (0, _.jsx)(_, {
        loading: _.bSaving,
        onClick: () => _.Save(),
        children: _.Localize(`#ContentSurvey_Overview_StartButton`),
      }),
      _.strError &&
        (0, _.jsx)(_, {
          _: `p`,
          size: `4`,
          className: `R0wKGE9XVUk-`,
          children: _.strError,
        }),
    ],
  });
}
function _(_) {
  let { childApp: _, eState: _ } = _;
  switch (_) {
    case `noparent`:
      return (0, _.jsx)(_, {
        childApp: _,
      });
    case `parentunreadable`:
      return (0, _.jsx)(_, {
        childApp: _,
      });
    case `parentunpublished`:
      return (0, _.jsx)(_, {
        childApp: _,
      });
    case `inheriting`:
      return (0, _.jsx)(_, {
        childApp: _,
      });
    case `choose`:
      return (0, _.jsx)(_, {
        childApp: _,
      });
  }
  return null;
}
function _(_) {
  let { childApp: _ } = _;
  return (0, _.jsx)(_, {
    _: `p`,
    children: (0, _.jsx)(`a`, {
      href: _.strParentSurveyURL,
      children: _.Localize(`#ContentSurvey_ChildApp_ParentSurveyLink`, _(_)),
    }),
  });
}
function _(_) {
  let { strTitle: _, strDescription: _, children: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        strTitle: _,
        strDescription: _,
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          direction: `column`,
          gap: `3`,
          marginTop: `7`,
          background: `dull-9`,
          padding: `5`,
          radius: `sm`,
          children: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let _ = _(_.childApp);
  return (0, _.jsx)(_, {
    strTitle: _.Localize(`#ContentSurvey_ChildApp_NoParent_Title`, _),
    strDescription: _.Localize(`#ContentSurvey_ChildApp_NoParent_Desc`, _),
    children: (0, _.jsx)(_, {
      _: `p`,
      children: _.Localize(`#ContentSurvey_ChildApp_NoParent_Support`, _),
    }),
  });
}
function _(_) {
  let { childApp: _ } = _,
    _ = _(_);
  return (0, _.jsxs)(_, {
    strTitle: _.Localize(`#ContentSurvey_ChildApp_ParentUnreadable_Title`),
    strDescription: _.Localize(
      `#ContentSurvey_ChildApp_ParentUnreadable_Desc`,
      _,
      _(_),
    ),
    children: [
      (0, _.jsx)(_, {
        _: `p`,
        children: _.Localize(`#ContentSurvey_ChildApp_ParentUnreadable_Next`),
      }),
      (0, _.jsx)(_, {
        childApp: _,
      }),
    ],
  });
}
function _(_) {
  let { childApp: _ } = _,
    _ = _(_),
    _ = _(_);
  return (0, _.jsxs)(_, {
    strTitle: _.Localize(`#ContentSurvey_ChildApp_ParentUnpublished_Title`, _),
    strDescription: _.Localize(
      `#ContentSurvey_ChildApp_ParentUnpublished_Desc`,
      _,
      _,
    ),
    children: [
      (0, _.jsx)(_, {
        _: `p`,
        children: _.Localize(
          `#ContentSurvey_ChildApp_ParentUnpublished_Next`,
          _,
          _,
        ),
      }),
      (0, _.jsx)(_, {
        childApp: _,
      }),
    ],
  });
}
function _(_) {
  let { childApp: _ } = _,
    _ = _(_),
    _ = _(_),
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        strTitle: _.Localize(`#ContentSurvey_ChildApp_Inheriting_Title`, _, _),
        strDescription: _.Localize(
          `#ContentSurvey_ChildApp_Inheriting_Desc`,
          _,
          _,
        ),
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsxs)(_, {
            direction: `column`,
            gap: `3`,
            marginTop: `7`,
            background: `dull-9`,
            padding: `5`,
            radius: `sm`,
            children: [
              (0, _.jsx)(_, {
                _: `p`,
                weight: `heavy`,
                children: _.Localize(
                  `#ContentSurvey_ChildApp_Inheriting_NoAction`,
                ),
              }),
              (0, _.jsx)(_, {
                childApp: _,
              }),
            ],
          }),
          (0, _.jsxs)(_, {
            direction: `column`,
            marginTop: `7`,
            children: [
              (0, _.jsx)(_, {
                checked: _,
                onChange: _,
                children: _.Localize(
                  `#ContentSurvey_ChildApp_Inheriting_Different`,
                  _,
                ),
              }),
              _ &&
                (0, _.jsx)(_, {
                  childApp: _,
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { childApp: _ } = _,
    { surveyFlow: _ } = _(),
    _ = _(_),
    _ = _(_),
    _ = _.bStartingFromParent || _.bSaving;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        strTitle: _.Localize(`#ContentSurvey_ChildApp_Choose_Title`, _),
        strDescription: _.Localize(`#ContentSurvey_ChildApp_Choose_Desc`, _),
        children: (0, _.jsx)(_, {
          size: `4`,
          _: `p`,
          children: _.Localize(`#ContentSurvey_Overview_P1`),
        }),
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsxs)(_, {
            direction: `column`,
            gap: `1`,
            marginTop: `7`,
            background: `dull-4`,
            padding: `4`,
            radius: `sm`,
            children: [
              (0, _.jsx)(_, {
                size: `4`,
                children: _.Localize(
                  `#ContentSurvey_ChildApp_Choose_Callout`,
                  _,
                  _,
                ),
              }),
              (0, _.jsx)(_, {
                _: `p`,
                children: _.Localize(
                  `#ContentSurvey_ChildApp_Choose_Callout_Desc`,
                  _,
                ),
              }),
              (0, _.jsx)(_, {
                childApp: _,
              }),
            ],
          }),
          (0, _.jsx)(_, {
            marginTop: `4`,
            direction: `column`,
            children: (0, _.jsx)(_, {
              strTitle: _.Localize(`#ContentSurvey_ChildApp_Inherit_Title`),
              strDescription: _.Localize(
                `#ContentSurvey_ChildApp_Inherit_Desc`,
                _,
                _,
              ),
              strButton: _.Localize(`#ContentSurvey_ChildApp_Inherit_Button`),
              bDisabled: _,
              onClick: _.InheritFromParent,
            }),
          }),
          (0, _.jsx)(_, {
            childApp: _,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { childApp: _ } = _,
    { surveyFlow: _, StartDraft: _ } = _(),
    _ = _(_),
    _ = _(_),
    _ = _.bStartingFromParent || _.bSaving;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        titleToken: `#ContentSurvey_ChildApp_NewSurvey_Title`,
      }),
      (0, _.jsx)(_, {
        _: `p`,
        children: _.Localize(`#ContentSurvey_ChildApp_NewSurvey_Desc`, _, _),
      }),
      (0, _.jsxs)(_, {
        direction: `column`,
        gap: `4`,
        marginTop: `4`,
        children: [
          (0, _.jsx)(_, {
            strTitle: _.Localize(`#ContentSurvey_ChildApp_Copy_Title`),
            strDescription: _.Localize(`#ContentSurvey_ChildApp_Copy_Desc`, _),
            strButton: _.Localize(`#ContentSurvey_ChildApp_Copy_Button`),
            bSecondary: !0,
            bDisabled: _,
            onClick: _.CopyFromParent,
          }),
          (0, _.jsx)(_, {
            strTitle: _.Localize(`#ContentSurvey_ChildApp_Scratch_Title`),
            strDescription: _.Localize(
              `#ContentSurvey_ChildApp_Scratch_Desc`,
              _,
            ),
            strButton: _.Localize(`#ContentSurvey_ChildApp_Scratch_Button`),
            bSecondary: !0,
            bDisabled: _,
            onClick: () => _(!1),
          }),
          _.strError &&
            (0, _.jsx)(_, {
              _: `p`,
              color: `text-red`,
              children: _.strError,
            }),
        ],
      }),
    ],
  });
}
var _ = `button, input, select, textarea, label, [contenteditable="true"], [role="button"], [role="checkbox"], [role="radio"], [role="switch"], [role="combobox"], [role="menuitem"]`,
  _ = `dialog, [role="dialog"], [role="alertdialog"]`,
  _ = [`Enter`, ` `, `Backspace`, `Delete`];
function _(_) {
  let _ = _.target instanceof Element ? _.target : null;
  if (!_ || _.closest(`a[href]`) || _.closest(_) || _.closest(_)) return null;
  let _ = _.closest(_);
  return _ instanceof HTMLElement ? _ : null;
}
function _(_) {
  return _.ctrlKey || _.metaKey || _.altKey
    ? !1
    : _.key.length == 1 || _.includes(_.key);
}
function _(_) {
  let { children: _ } = _,
    { surveyFlow: _ } = _(),
    { PromptStartDraftForEdit: _ } = _(),
    { bReadOnly: _ } = _,
    _ = _.useRef(null),
    _ = _.useRef(null);
  _.useEffect(() => {
    let _ = _.current;
    !_ && _ && ((_.current = null), _.isConnected && (_.focus(), _.click()));
  }, [_]);
  let _ = (_) => {
    if (!(_.target instanceof Node) || !_.current?.contains(_.target)) return;
    let _ = _(_);
    _ && (_.preventDefault(), _.stopPropagation(), (_.current = _), _());
  };
  return (0, _.jsxs)(`div`, {
    children: [
      _ && (0, _.jsx)(_, {}),
      (0, _.jsx)(`div`, {
        ref: _,
        onClickCapture: _ ? _ : void 0,
        onKeyDownCapture: _ ? (_) => _(_) && _(_) : void 0,
        onPasteCapture: _ ? _ : void 0,
        children: _,
      }),
    ],
  });
}
function _() {
  let { PromptStartDraft: _ } = _(),
    { surveyFlow: _ } = _();
  return (0, _.jsxs)(_, {
    direction: `row`,
    gap: `6`,
    align: `center`,
    background: `dull-9`,
    padding: `4`,
    radius: `sm`,
    children: [
      (0, _.jsxs)(_, {
        direction: `column`,
        flexGrow: `1`,
        children: [
          (0, _.jsx)(_, {
            size: `4`,
            contrast: `title`,
            children: _.Localize(`#ContentSurvey_ReadOnly_Banner`),
          }),
          (0, _.jsx)(_, {
            _: `p`,
            children: _.Localize(`#ContentSurvey_ReadOnly_Banner_Desc`),
          }),
        ],
      }),
      (0, _.jsx)(_, {
        loading: _.bSaving,
        onClick: _,
        children: _.Localize(`#ContentSurvey_StartDraft_Button`),
      }),
    ],
  });
}
_.Component;
var _ = class extends _.Component {
  render() {
    return (0, _.jsx)(`div`, {
      children: (0, _.jsx)(`pre`, {
        children: JSON.stringify(this.props.data, null, 2),
      }),
    });
  }
};
function _(_) {
  let _ = _();
  return (0, _.jsx)(_, {
    data: _,
  });
}
function _(_, _) {
  let _ = _.useCallback(
    (_) => {
      (_.preventDefault(), (_.returnValue = _));
    },
    [_],
  );
  (_(window, `beforeunload`, _ ? _ : void 0),
    _.useEffect(() => {
      if (!_ || !window.navigation) return;
      let _ = (_) => {
        (_.navigationType != `push` && _.navigationType != `traverse`) ||
          _.hashChange ||
          _.downloadRequest !== null ||
          !_.cancelable ||
          window.confirm(_) ||
          _.preventDefault();
      };
      return (
        window.navigation.addEventListener(`navigate`, _),
        () => window.navigation.removeEventListener(`navigate`, _)
      );
    }, [_, _]));
}
function _() {
  let { mapSectionStates: _, bOfficialRatingsDirty: _ } = _();
  return (
    _(
      _ || [..._.values()].some((_) => _.bDirty),
      _.Localize(`#ContentSurvey_UnsavedChanges`),
    ),
    null
  );
}
function _(_) {
  let { nAppID: _, strAppName: _, rgRatingAgencies: _ } = _,
    _ = {
      ..._,
      ..._(_),
    };
  return (0, _.jsx)(_, {
    rgRatingAgencies: _ ?? [],
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        children: (0, _.jsx)(`div`, {
          className: _(_, _),
          children: (0, _.jsx)(_, {
            ..._,
            children: (0, _.jsx)(_, {
              children: (0, _.jsxs)(_, {
                children: [
                  (0, _.jsx)(_, {}),
                  (0, _.jsx)(_, {
                    nAppID: _,
                    strAppName: _,
                    strSubtitle: _.Localize(`#ContentSurvey_title`),
                  }),
                  (0, _.jsx)(_, {
                    ..._,
                  }),
                ],
              }),
            }),
          }),
        }),
      }),
    }),
  });
}
function _(_) {
  let { childApp: _, workingSurvey: _, activeSurvey: _ } = _,
    { surveyFlow: _ } = _();
  if (_) {
    let _ = _(_, _, _, _.bHasUnpublishedWork);
    if (_ != `own`)
      return (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          childApp: _,
          eState: _,
        }),
      });
  }
  return _.bNotStarted
    ? (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {}),
      })
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {}),
          (0, _.jsx)(_, {
            marginTop: `3`,
            children: (0, _.jsx)(_, {
              ..._,
            }),
          }),
        ],
      });
}
function _(_, _) {
  if (_?.bDirty)
    return {
      elStatus: (0, _.jsx)(_, {
        statusType: `caution`,
        bShowStatusBox: _,
        children: _.Localize(`#ContentSurvey_status_unsaved`),
      }),
      strToolTip: _.Localize(`#ContentSurvey_status_unsaved_ttip`),
    };
  if (_?.bReviewed && _ && _.bRequiredAnswerMissing)
    return {
      elStatus: (0, _.jsx)(_, {
        statusType: `caution`,
        bShowStatusBox: _,
        children: _.Localize(`#ContentSurvey_status_sectionIncomplete`),
      }),
      strToolTip: _.Localize(`#ContentSurvey_status_sectionIncomplete_ttip`),
      bReportsIncomplete: !0,
    };
  if (_?.bReviewed)
    return {
      elStatus: (0, _.jsx)(_, {
        statusType: `success`,
        bShowStatusBox: _,
        children: _.Localize(`#ContentSurvey_status_reviewed`),
      }),
    };
  let _ = _?.rgQuestionsNew.length ?? 0;
  return _ > 0
    ? {
        elStatus: (0, _.jsx)(_, {
          statusType: `caution`,
          bShowStatusBox: _,
          children: _.LocalizePlural(`#ContentSurvey_status_newquestions`, _),
        }),
        strToolTip: _.LocalizePlural(
          `#ContentSurvey_status_newquestions_ttip`,
          _,
        ),
      }
    : {
        elStatus: (0, _.jsx)(_, {
          statusType: `incomplete`,
          bShowStatusBox: _,
          children: _.Localize(`#ContentSurvey_status_incomplete`),
        }),
        strToolTip: _.Localize(`#ContentSurvey_status_incomplete_ttip`),
      };
}
function _(_) {
  return _
    ? _.Localize(`#ContentSurvey_Overview_LastPublished`, _(_))
    : _.Localize(`#ContentSurvey_status_unpublished`);
}
function _(_) {
  return _ == 0
    ? _.Localize(`#ContentSurvey_Official_status_Optional_None`)
    : _.LocalizePlural(`#ContentSurvey_Official_status_Optional_Selected`, _);
}
function _(_) {
  switch (_) {
    case 1:
      return (0, _.jsx)(_, {});
    case 2:
      return (0, _.jsx)(_, {});
    case 3:
      return (0, _.jsx)(_, {});
    case 4:
      return (0, _.jsx)(_, {});
    case 5:
      return (0, _.jsx)(_, {});
    case 6:
      return (0, _.jsx)(_, {});
  }
  return null;
}
function _(_) {
  let {
      mapSectionStates: _,
      surveyFlow: _,
      rtLastSubmitTime: _,
      rgOfficialRatings: _,
      bOfficialRatingsDirty: _,
      GetSurveyEdits: _,
    } = _(),
    { strTabActive: _, GoToTab: _ } = _(),
    _ = _(),
    _ = !_.bReadOnly,
    _ = _ && _.some((_) => !_(_, _)),
    _ = _.map((_) => {
      let _ = _.get(_.eSection),
        { elStatus: _, strToolTip: _, bReportsIncomplete: _ } = _(_, _),
        _ = _.Localize(_.strNameToken);
      return {
        name: _?.bDirty ? _ + ` *` : _,
        key: _.strTabKey,
        status: (0, _.jsxs)(`div`, {
          children: [
            _,
            _ &&
              _?.bRequiredAnswerMissing &&
              !_ &&
              (0, _.jsx)(_, {
                statusType: `caution`,
                children: _.Localize(`#ContentSurvey_status_sectionIncomplete`),
              }),
            (0, _.jsx)(_, {
              statusType: `info`,
              children: _.Localize(
                `#ContentSurvey_status_topicsSelected`,
                _?.cAnswers ?? 0,
              ),
            }),
          ],
        }),
        statusToolTip: _,
        contents: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            children: _(_.eSection),
          }),
        }),
      };
    }),
    _ = [
      {
        name: _.Localize(`#ContentSurvey_Tab_Overview`),
        key: _.Overview,
        status: (0, _.jsx)(_, {
          statusType: `info`,
          bShowStatusBox: _,
          children: _(_),
        }),
        contents: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            ..._,
          }),
        }),
      },
      ..._,
      {
        name: _.Localize(`#ContentSurvey_Tab_Official`) + (_ ? ` *` : ``),
        key: _.Official,
        status: (0, _.jsxs)(`div`, {
          children: [
            _ &&
              (0, _.jsx)(_, {
                statusType: `caution`,
                children: _.Localize(`#ContentSurvey_status_unsaved`),
              }),
            _ &&
              (0, _.jsx)(_, {
                statusType: `caution`,
                children: _.Localize(`#ContentSurvey_status_sectionIncomplete`),
              }),
            !_ &&
              (0, _.jsx)(_, {
                statusType: `info`,
                children: _(_.length),
              }),
          ],
        }),
        statusToolTip: _
          ? _.Localize(`#ContentSurvey_status_unsaved_ttip`)
          : _
            ? _.Localize(`#ContentSurvey_status_sectionIncomplete_ttip`)
            : void 0,
        contents: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              ..._,
            }),
          }),
        }),
      },
    ];
  return (
    (_.bHasUnpublishedWork || _.bPublished) &&
      _.push({
        name: _.Localize(`#ContentSurvey_Tab_Publish`),
        key: _.Publish,
        status: (0, _.jsx)(_, {
          statusType: _.bPublished ? `success` : `caution`,
          bShowStatusBox: _,
          children: _.Localize(
            _.bPublished
              ? `#ContentSurvey_status_published`
              : `#ContentSurvey_status_unpublished`,
          ),
        }),
        contents: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            ..._,
          }),
        }),
      }),
    _.is_support &&
      _.push({
        name: `(VO) Export`,
        key: _.Export,
        status: (0, _.jsx)(_, {
          statusType: `danger`,
          children: `Valve Only`,
        }),
        contents: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            nAppID: _.nAppID,
            edits: _(),
          }),
        }),
      }),
    _.is_support &&
      _.push({
        name: `(VO) Debug`,
        key: _.Debug,
        status: (0, _.jsx)(_, {
          statusType: `danger`,
          children: `Valve Only`,
        }),
        contents: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {}),
        }),
      }),
    (0, _.jsx)(_, {
      tabs: _,
      bVerticalTabs: !0,
      bSticky: !0,
      bChecklistMode: !0,
      bDisableRouting: !0,
      controlledTab: _,
      OnTabChanged: (_) => _(_),
      classNameTabContent: _(_, _),
    })
  );
}
var _ = _({
  Component: _,
  Actions: {
    SaveSurveyChanges: _(
      `dYv2piXLaDZAIlm6rAEUnPXB4Sz6v2xXBpyOTL7cMh0`,
      `SaveSurveyChanges`,
    ),
    FinishSurveyChanges: _(
      `dYv2piXLaDZAIlm6rAEUnPXB4Sz6v2xXBpyOTL7cMh0`,
      `FinishSurveyChanges`,
    ),
    DiscardSurveyChanges: _(
      `dYv2piXLaDZAIlm6rAEUnPXB4Sz6v2xXBpyOTL7cMh0`,
      `DiscardSurveyChanges`,
    ),
    FetchSurveys: _(
      `dYv2piXLaDZAIlm6rAEUnPXB4Sz6v2xXBpyOTL7cMh0`,
      `FetchSurveys`,
    ),
    FetchChildAppsForAction: _(
      `dYv2piXLaDZAIlm6rAEUnPXB4Sz6v2xXBpyOTL7cMh0`,
      `FetchChildAppsForAction`,
    ),
    InheritParentSurvey: _(
      `dYv2piXLaDZAIlm6rAEUnPXB4Sz6v2xXBpyOTL7cMh0`,
      `InheritParentSurvey`,
    ),
    CopyParentSurvey: _(
      `dYv2piXLaDZAIlm6rAEUnPXB4Sz6v2xXBpyOTL7cMh0`,
      `CopyParentSurvey`,
    ),
  },
});
function _() {
  let _ = _.useLoaderData(),
    _ = (0, _.useCallback)((_) => _.Actions.SaveSurveyChanges(_), []),
    _ = (0, _.useCallback)((_) => _.Actions.FinishSurveyChanges(_), []),
    _ = (0, _.useCallback)(() => _.Actions.DiscardSurveyChanges(), []),
    _ = (0, _.useCallback)(() => _.Actions.InheritParentSurvey(), []),
    _ = (0, _.useCallback)(() => _.Actions.CopyParentSurvey(), []),
    _ = (0, _.useCallback)(() => _.Actions.FetchSurveys(), []),
    _ = (0, _.useCallback)((_) => _.Actions.FetchChildAppsForAction(_), []);
  return _.success == 1
    ? (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            ..._,
            SaveDraft: _,
            PublishDraft: _,
            DiscardDraft: _,
            FetchSurveys: _,
            InheritParentSurvey: _,
            CopyParentSurvey: _,
            FetchChildApps: _,
          }),
        }),
      })
    : (0, _.jsx)(_, {
        eError: _(_.success),
        nAppID: _.nAppID,
        ePage: `edit`,
        strError: _.strError,
      });
}
export { _ as route };
