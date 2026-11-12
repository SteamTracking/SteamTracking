import { _, _ } from "./chunk~f025431ab0.js";
import { _, _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~eefd71512b.js";
import { _ } from "./chunk~92931c6310.js";
import { _, _ } from "./chunk~0111fcd096.js";
import { _, _ } from "./chunk~ec644f97c6.js";
import { _ } from "./chunk~d382bdf2cf.js";
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
} from "./main.js";
import { _ } from "./chunk~85f65a382b.js";
var _ = _(_()),
  _ = [
    `mousemove`,
    `keypress`,
    `scroll`,
    `wheel`,
    `focusin`,
    `touchstart`,
    `touchmove`,
  ],
  _ = 2e3,
  _ = class _ {
    m_callbackList = new _();
    m_timer = null;
    m_bAreEventListenersRegistered = !1;
    static s_Singleton;
    static Get() {
      return ((_.s_Singleton ||= new _()), _.s_Singleton);
    }
    constructor() {}
    ResetFidgetTimer(_) {
      this.m_timer && window.clearTimeout(this.m_timer);
      let _ = () => {
        ((this.m_timer = null), this.m_callbackList.Dispatch());
      };
      this.m_timer = window.setTimeout(_, _);
    }
    BIsUserFidgeting() {
      return !!this.m_timer;
    }
    GetCallbackList() {
      return this.m_callbackList;
    }
    BRegisterEventListeners() {
      if (this.m_bAreEventListenersRegistered) return !1;
      let _ = window;
      for (let _ of _) _.addEventListener(_, this.ResetFidgetTimer);
      return ((this.m_bAreEventListenersRegistered = !0), !0);
    }
    BUnregisterEventListeners() {
      if (!this.m_bAreEventListenersRegistered) return !1;
      let _ = window;
      for (let _ of _) _.removeEventListener(_, this.ResetFidgetTimer);
      return ((this.m_bAreEventListenersRegistered = !1), !1);
    }
  };
_([_], _.prototype, `ResetFidgetTimer`, null);
function _() {
  _.useEffect(() => {
    let _ = _.Get().BRegisterEventListeners();
    return () => {
      _ && _.Get().BUnregisterEventListeners();
    };
  }, []);
}
function _(_) {
  let _ = _.useRef(null),
    _ = _.useCallback(() => {
      _.current &&= (_.current(), null);
    }, []);
  return (
    _(_.Get().GetCallbackList(), _),
    _.useEffect(() => () => {
      _.current = null;
    }),
    _.useCallback(
      (..._) => {
        _.Get().BIsUserFidgeting()
          ? (_.current = () => _(..._))
          : ((_.current = null), _(..._));
      },
      [_],
    )
  );
}
var _ = _(_()),
  _ = class _ {
    m_mapQAndASessions = new Map();
    m_mapQAndAChangeCallbackList = new Map();
    m_dashboardCallbackList = new _();
    m_mapQuestions = new Map();
    m_mapQuestionCallbackList = new Map();
    m_rgPendingQuestionGIDs = [];
    static s_Singleton;
    static Get() {
      return ((_.s_Singleton ||= new _()), _.s_Singleton);
    }
    constructor() {}
    GetQAndACallbackList(_) {
      let _ = this.m_mapQAndAChangeCallbackList.get(_);
      return (
        _ || ((_ = new _()), this.m_mapQAndAChangeCallbackList.set(_, _)), _
      );
    }
    GetQuestionCallbackList(_) {
      let _ = this.m_mapQuestionCallbackList.get(_);
      return (
        _ || ((_ = new _()), this.m_mapQuestionCallbackList.set(_, _)), _
      );
    }
    GetDashboardCallbackList() {
      return this.m_dashboardCallbackList;
    }
    GetSession(_) {
      return this.m_mapQAndASessions.get(_);
    }
    GetAllSessions() {
      return Array.from(this.m_mapQAndASessions.values());
    }
    GetQuestion(_) {
      return this.m_mapQuestions.get(_);
    }
    async LoadAllSessions(_) {
      if (!_.logged_in || !_()) return 15;
      let _ =
          _.COMMUNITY_BASE_URL +
          `questions/` +
          _.VANITY_ID +
          `/ajaxgetqandasforgroup`,
        _ = {},
        _ = null;
      try {
        let _ = await _.default.get(_, {
          params: _,
          cancelToken: _?.token,
        });
        if (
          (console.log(_),
          _?.status == 200 && _.data?.success == 1 && _.data.qandas)
        ) {
          for (let _ of _.data.qandas)
            this.m_mapQAndASessions.set(_.gidSession, _);
          return (
            this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()), 1
          );
        }
        _ = {
          response: _,
        };
      } catch (_) {
        _ = _;
      }
      let _ = _(_);
      return (
        console.error(
          `Could not load question and answer sessions for group`,
          _.strErrorMsg,
          _,
        ),
        _?.response?.data?.success ?? 2
      );
    }
    async CreateNewSession(_, _) {
      if (!_.logged_in || !_()) return 15;
      let _ =
          _.COMMUNITY_BASE_URL +
          `questions/` +
          _.VANITY_ID +
          `/ajaxcreateqanda`,
        _ = new FormData();
      (_.append(`sessionid`, _()), _.append(`name`, _));
      let _ = null;
      try {
        let _ = await _.default.post(_, _, {
          withCredentials: !0,
          cancelToken: _?.token,
        });
        if (_?.status == 200 && _.data?.success == 1 && _.data.qanda)
          return (
            this.m_mapQAndASessions.set(_.data.qanda.gidSession, _.data.qanda),
            this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
            1
          );
        _ = {
          response: _,
        };
      } catch (_) {
        _ = _;
      }
      let _ = _(_);
      return (
        console.error(`Could not create Q&A`, _, _.strErrorMsg, _),
        _?.response?.data?.success ?? 2
      );
    }
    async RenameSession(_, _, _) {
      if (!_.logged_in || !_()) return 15;
      let _ =
          _.COMMUNITY_BASE_URL +
          `questions/` +
          _.VANITY_ID +
          `/ajaxrenameqanda/` +
          _,
        _ = new FormData();
      (_.append(`sessionid`, _()), _.append(`name`, _));
      let _ = null;
      try {
        let _ = await _.default.post(_, _, {
          withCredentials: !0,
          cancelToken: _?.token,
        });
        if (_?.status == 200 && _.data?.success == 1) {
          let _ = this.m_mapQAndASessions.get(_);
          return (
            _ && ((_.strName = _), this.GetQAndACallbackList(_).Dispatch(_)),
            this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
            1
          );
        }
        _ = {
          response: _,
        };
      } catch (_) {
        _ = _;
      }
      let _ = _(_);
      return (
        console.error(`Could not rename Q&A`, _, _, _.strErrorMsg, _),
        _?.response?.data?.success ?? 2
      );
    }
    async DeleteSession(_, _) {
      if (!_.logged_in || !_()) return 15;
      let _ =
          _.COMMUNITY_BASE_URL +
          `questions/` +
          _.VANITY_ID +
          `/ajaxdeleteqanda/` +
          _,
        _ = new FormData();
      _.append(`sessionid`, _());
      let _ = null;
      try {
        let _ = await _.default.post(_, _, {
          withCredentials: !0,
          cancelToken: _?.token,
        });
        if (_?.status == 200 && _.data?.success == 1)
          return (
            this.m_mapQAndASessions.delete(_),
            this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
            1
          );
        _ = {
          response: _,
        };
      } catch (_) {
        _ = _;
      }
      let _ = _(_);
      return (
        console.error(`Could not delete Q&A`, _, _.strErrorMsg, _),
        _?.response?.data?.success ?? 2
      );
    }
    async LoadSession(_, _, _) {
      let _ = this.m_mapQAndASessions.get(_),
        _ =
          _.logged_in &&
          (!_ ||
            _.bUserCanModerate ||
            this.m_rgPendingQuestionGIDs.length > 0 ||
            _)
            ? `/ajaxgetqandasessionforuser/`
            : `/ajaxgetqandasession/`,
        _ = _.COMMUNITY_BASE_URL + `questions/` + _.VANITY_ID + _ + _,
        _ = {},
        _ = null;
      try {
        let _ = await _.default.get(_, {
          params: _,
          cancelToken: _?.token,
        });
        if (
          _?.status == 200 &&
          _.data?.success == 1 &&
          _.data.qanda &&
          _.data.questions
        ) {
          for (let _ of _.data.questions) {
            let _ = _.gidQuestion,
              _ = this.m_mapQuestions.get(_)?.bUserUpVoted ?? _.bUserUpVoted,
              _ = {
                ..._,
                bUserUpVoted: _,
              };
            (this.m_mapQuestions.set(_, _),
              this.GetQuestionCallbackList(_).Dispatch(_));
          }
          let _ =
              this.m_mapQAndASessions.get(_)?.bUserCanModerate ??
              _.data.qanda.bUserCanModerate,
            _ =
              this.m_mapQAndASessions.get(_)?.bUserCanAskQuestions ??
              _.data.qanda.bUserCanAskQuestions,
            _ = {
              ..._.data.qanda,
              bUserCanModerate: _,
              bUserCanAskQuestions: _,
            };
          return (
            this.m_mapQAndASessions.set(_, _),
            this.GetQAndACallbackList(_).Dispatch(_),
            this.UpdatePendingQuestionList(_.data.qanda.rgQuestionGIDs),
            1
          );
        }
        _ = {
          response: _,
        };
      } catch (_) {
        _ = _;
      }
      let _ = _(_);
      return (
        console.error(`Could not load Q&A`, _, _.strErrorMsg, _),
        _?.response?.data?.success ?? 2
      );
    }
    UpdatePendingQuestionList(_) {
      let _ = new Set();
      for (let _ of _) {
        let _ = this.m_mapQuestions.get(_);
        _.posterAccountID == _.accountid &&
          _.eState == 1 &&
          _.add(_.gidQuestion);
      }
      if (this.m_rgPendingQuestionGIDs.length > 0) {
        let _ = new Set(_);
        for (let _ of this.m_rgPendingQuestionGIDs)
          _.has(_) && this.m_mapQuestions.get(_)?.eState == 1 && _.add(_);
      }
      this.m_rgPendingQuestionGIDs = Array.from(_);
    }
    async AskNewQuestion(_, _, _) {
      if (
        !_.logged_in ||
        !_() ||
        !this.m_mapQAndASessions.get(_)?.bUserCanAskQuestions
      )
        return 15;
      let _ =
          _.COMMUNITY_BASE_URL +
          `questions/` +
          _.VANITY_ID +
          `/ajaxaskquestion/` +
          _,
        _ = new FormData();
      (_.append(`sessionid`, _()), _.append(`question`, _));
      let _ = null;
      try {
        let _ = await _.default.post(_, _, {
          withCredentials: !0,
          cancelToken: _?.token,
        });
        if (_?.status == 200 && _.data?.success == 1)
          return (
            this.m_rgPendingQuestionGIDs.push(_.data.gidQuestion),
            this.LoadSession(_, !0, _),
            1
          );
        _ = {
          response: _,
        };
      } catch (_) {
        _ = _;
      }
      let _ = _(_);
      return (
        console.error(`Could not upload question`, _, _, _.strErrorMsg, _),
        _?.response?.data?.success ?? 2
      );
    }
    async ModerateQuestion(_, _, _, _) {
      if (
        !_.logged_in ||
        !_() ||
        !this.m_mapQAndASessions.get(_)?.bUserCanModerate
      )
        return 15;
      if (_ != 1 && _ != 3) return 8;
      if (this.m_mapQuestions.get(_).eState == _) return 1;
      let _ =
          _.COMMUNITY_BASE_URL +
          `questions/` +
          _.VANITY_ID +
          `/ajaxmoderatequestion/` +
          _,
        _ = new FormData();
      (_.append(`sessionid`, _()),
        _.append(`gidquestion`, _),
        _.append(`action`, _ == 1 ? `show` : `hide`));
      let _ = null;
      try {
        let _ = await _.default.post(_, _, {
          withCredentials: !0,
          cancelToken: _?.token,
        });
        if (_?.status == 200 && _.data?.success == 1)
          return (this.LoadSession(_, !0, _), 1);
        _ = {
          response: _,
        };
      } catch (_) {
        _ = _;
      }
      let _ = _(_);
      return (
        console.error(`Could not moderate question`, _, _, _, _.strErrorMsg, _),
        _?.response?.data?.success ?? 2
      );
    }
    async AnswerQuestion(_, _, _, _) {
      if (
        !_.logged_in ||
        !_() ||
        !this.m_mapQAndASessions.get(_)?.bUserCanAskQuestions
      )
        return 15;
      let _ =
          _.COMMUNITY_BASE_URL +
          `questions/` +
          _.VANITY_ID +
          `/ajaxanswerquestion/` +
          _,
        _ = new FormData();
      (_.append(`sessionid`, _()),
        _.append(`gidquestion`, _),
        _.append(`answer`, _));
      let _ = null;
      try {
        let _ = await _.default.post(_, _, {
          withCredentials: !0,
          cancelToken: _?.token,
        });
        if (_?.status == 200 && _.data?.success == 1)
          return (this.LoadSession(_, !0, _), 1);
        _ = {
          response: _,
        };
      } catch (_) {
        _ = _;
      }
      let _ = _(_);
      return (
        console.error(`Could not upload answer`, _, _, _, _.strErrorMsg, _),
        _?.response?.data?.success ?? 2
      );
    }
    async VoteOnQuestion(_, _, _, _) {
      if (
        !_.logged_in ||
        !_() ||
        !this.m_mapQAndASessions.get(_)?.bUserCanAskQuestions
      )
        return 15;
      let _ = this.m_mapQuestions.get(_);
      if (!_) return 42;
      if (_ === _.bUserUpVoted) return 1;
      let _ = _.nVoteCount,
        _ = _ + (_ ? 1 : -1);
      ((_ = {
        ..._,
        nVoteCount: _,
        bUserUpVoted: _,
      }),
        this.m_mapQuestions.set(_, _),
        this.GetQuestionCallbackList(_).Dispatch(_));
      let _ =
          _.COMMUNITY_BASE_URL +
          `questions/` +
          _.VANITY_ID +
          `/ajaxvoteforquestion/` +
          _,
        _ = new FormData();
      (_.append(`sessionid`, _()),
        _.append(`gidquestion`, _),
        _.append(`up`, _ ? `1` : `0`));
      let _ = null;
      try {
        let _ = await _.default.post(_, _, {
          withCredentials: !0,
          cancelToken: _?.token,
        });
        if (_?.status == 200 && _.data?.success == 1) return 1;
        _ = {
          response: _,
        };
      } catch (_) {
        _ = _;
      }
      ((_ = {
        ..._,
        nVoteCount: _,
        bUserUpVoted: !_,
      }),
        this.m_mapQuestions.set(_, _),
        this.GetQuestionCallbackList(_).Dispatch(_));
      let _ = _(_);
      return (
        console.error(`Could not upload vote`, _, _, _, _.strErrorMsg, _),
        _?.response?.data?.success ?? 2
      );
    }
  };
function _(_) {
  let _ = _(`useQAndASession`),
    _ = _.useCallback(
      async (_) =>
        _.Get().GetSession(_)?.bUserCanAskQuestions &&
        (await _.Get().AskNewQuestion(_, _, _)),
      [_, _],
    ),
    _ = _.useCallback(
      (_, _) =>
        _.Get().GetSession(_)?.bUserCanAskQuestions &&
        _.Get().VoteOnQuestion(_, _, _, _),
      [_, _],
    ),
    _ = _.useCallback(
      (_) => {
        let _ = !!_,
          _ = _?.strName,
          _ = _?.bUserCanModerate,
          _ = _?.bUserCanAskQuestions,
          _ = [],
          _ = [],
          _ = [],
          _ = [];
        for (let _ of _?.rgQuestionGIDs ?? [])
          switch (_.Get().GetQuestion(_)?.eState) {
            case 1:
              _.push(_);
              break;
            case 2:
              _.push(_);
              break;
            case 0:
              _.push(_);
              break;
            case 3:
              _.push(_);
          }
        return (
          _.sort(
            (_, _) =>
              _.Get().GetQuestion(_).nVoteCount -
              _.Get().GetQuestion(_).nVoteCount,
          ),
          _.sort(
            (_, _) =>
              _.Get().GetQuestion(_).rtAnswerTime -
              _.Get().GetQuestion(_).rtAnswerTime,
          ),
          _.sort(
            (_, _) =>
              _.Get().GetQuestion(_).rtPostTime -
              _.Get().GetQuestion(_).rtPostTime,
          ),
          _.sort(
            (_, _) =>
              _.Get().GetQuestion(_).rtPostTime -
              _.Get().GetQuestion(_).rtPostTime,
          ),
          {
            bIsLoaded: _,
            strName: _,
            bUserCanModerate: _,
            bUserCanAskQuestions: _,
            fnAskQuestion: _,
            fnVoteOnQuestion: _,
            rgModeratedQuestionGIDs: _,
            rgAnsweredQuestionGIDs: _,
            rgNewQuestionGIDs: _,
            rgHiddenQuestionGIDs: _,
          }
        );
      },
      [_, _],
    ),
    [_, _] = _.useState(() => _(_.Get().GetSession(_))),
    _ = _.useCallback((_) => _(_(_)), [_]);
  return (
    _(_.Get().GetQAndACallbackList(_), _),
    _.useEffect(() => {
      _.bIsLoaded || _.Get().LoadSession(_);
    }, [_.bIsLoaded, _]),
    _
  );
}
var _ = null;
function _(_) {
  let _ = _(`useReloadFunction`),
    [_, _] = _.useState(!1),
    _ = _.useCallback(() => {
      _(!0);
      let _ = _.Get().LoadSession(_, !1, _);
      return (_.then(() => _(!1)), _);
    }, [_, _]),
    _ = _(_);
  return (
    _.useEffect(
      () =>
        _
          ? () => {}
          : ((_ = window.setInterval(_, 1e4)), () => window.clearInterval(_)),
      [_],
    ),
    _.useMemo(
      () => ({
        fnReload: _,
        bIsReloading: _,
      }),
      [_, _],
    )
  );
}
function _(_) {
  let [_, _] = _.useState(_.Get().GetQuestion(_));
  _(_.Get().GetQuestionCallbackList(_), _);
  let [_, _] = _.useState(!!_);
  return [_, !!_ || _];
}
function _(_) {
  let _ = _(`useQuestionModeratorActions`),
    _ = _.useCallback(
      (_, _) =>
        _.Get().GetSession(_)?.bUserCanModerate &&
        _.Get().AnswerQuestion(_, _, _, _),
      [_, _],
    ),
    _ = _.useCallback(
      (_, _) =>
        _.Get().GetSession(_)?.bUserCanModerate &&
        _.Get().ModerateQuestion(_, _, _, _),
      [_, _],
    );
  return _.useMemo(
    () => ({
      fnAnswerQuestion: _,
      fnModerateQuestion: _,
    }),
    [_, _],
  );
}
function _() {
  let [_, _] = _.useState(_.Get().GetAllSessions());
  return (
    _(_.Get().GetDashboardCallbackList(), _),
    _.useEffect(() => {
      _.length == 0 && _.Get().LoadAllSessions();
    }, [_.length]),
    _
  );
}
function _() {
  let _ = _(`useCreateQAndAFn`);
  return _.useCallback((_) => _.Get().CreateNewSession(_, _), [_]);
}
function _() {
  let _ = _(`useRenameQAndAFn`);
  return _.useCallback((_, _) => _.Get().RenameSession(_, _, _), [_]);
}
function _() {
  let _ = _(`useDeleteQAndAFn`);
  return _.useCallback((_) => _.Get().DeleteSession(_, _), [_]);
}
var _ = _({
    Answer: () => _,
    AnswerCheck: () => _,
    AnswerText: () => _,
    AnswerTitle: () => _,
    AnsweredSectionHeader: () => _,
    ButtonCtn: () => _,
    CreateQAndADialog: () => _,
    DashboardColumnHeaders: () => _,
    DashboardHeader: () => _,
    DashboardHeaderButtonCtn: () => _,
    DashboardHeaderTitle: () => _,
    DashboardRow: () => _,
    DateAndTime: () => _,
    DeleteButton: () => _,
    DeleteInfo: () => _,
    DeleteQAndADialog: () => _,
    Description: () => _,
    Editing: () => _,
    GIDSession: () => _,
    Hidden: () => _,
    InputButton: () => _,
    InputCtn: () => _,
    InsetShadowTop: () => _,
    InsetShadowTopCtn: () => _,
    LogInPrompt: () => _,
    ModerationHeader: () => _,
    ModeratorInstructions: () => _,
    ModeratorSection: () => _,
    NameInput: () => _,
    NoQuestions: () => _,
    PersonaName: () => _,
    PostTime: () => _,
    Prompt: () => _,
    QAColumns: () => _,
    QADashboardCtn: () => _,
    QAFullPageView: () => _,
    QAHeader: () => _,
    QAMainCtn: () => _,
    QAModeratorColumn: () => _,
    QAName: () => _,
    QASplitColumns: () => _,
    QATitle: () => _,
    QATitleRow: () => _,
    QAndADeleteColumn: () => _,
    QAndAName: () => _,
    Question: () => _,
    QuestionACK: () => _,
    QuestionAndVotes: () => _,
    QuestionCount: () => _,
    QuestionCtn: () => _,
    QuestionList: () => _,
    QuestionStats: () => _,
    QuestionText: () => _,
    QuestionTitle: () => _,
    QuestionsCtn: () => _,
    QuestionsHeader: () => _,
    QuestionsTitle: () => _,
    RateIcon: () => _,
    Reload: () => _,
    Reloading: () => _,
    SaveSpinner: () => _,
    SignInButton: () => _,
    ToolLabel: () => _,
    ToolRow: () => _,
    UserAvatar: () => _,
    Visible: () => _,
    Vote_CannotVote: () => _,
    Vote_Positive: () => _,
    Vote_Ready: () => _,
    Votes: () => _,
    default: () => _,
  }),
  _ = `XxT5V45htpY-`,
  _ = `h-RxFCB6bAs-`,
  _ = `HECwy-TVT6c-`,
  _ = `_5yVQYMxy-JU-`,
  _ = `B7Qs2tR7S98-`,
  _ = `jikb8cKLdwg-`,
  _ = `WbU1h886dW4-`,
  _ = `cua4C9nfXwM-`,
  _ = `KtfZY3EXbm4-`,
  _ = `-Q501kcuUlo-`,
  _ = `_7zP2DXBFo3Y-`,
  _ = `JOMsuYcfEgE-`,
  _ = `tnkl4wvxTNk-`,
  _ = `hXO95r7-l-E-`,
  _ = `l0ZS73yFCCg-`,
  _ = `PxMQWGmavKs-`,
  _ = `sTEXlUW1ClI-`,
  _ = `vcATfshKglI-`,
  _ = `KJYoqAIyin0-`,
  _ = `JPV6UEmUgTQ-`,
  _ = `_5Ul4W3-Av4A-`,
  _ = `MHDRZEocQLo-`,
  _ = `awgY6uPRTBU-`,
  _ = `ABJnXuG8KVo-`,
  _ = `_6yYapol9P0A-`,
  _ = `QvQLSJcquRQ-`,
  _ = `_6JJ2hb6WTCM-`,
  _ = `_42oBi1K5Go4-`,
  _ = `Fi89Grx-mDg-`,
  _ = `_30qfo93SakM-`,
  _ = `izbX9Bk-ctQ-`,
  _ = `V-ndU0glwFg-`,
  _ = `LvPLz--xXKo-`,
  _ = `n1gHQqfqkVo-`,
  _ = `gsF3HHmI2S4-`,
  _ = `D3btI5M54U8-`,
  _ = `w9MlFyi6pQ0-`,
  _ = `_6EPpOh6TVHU-`,
  _ = `_3FCmzH2eOLk-`,
  _ = `VIdMTmOGyQA-`,
  _ = `_7ABtMQEuexE-`,
  _ = `_1BtqzuhOPeY-`,
  _ = `TSn9XCAvKxY-`,
  _ = `_0hDL88y-pvY-`,
  _ = `RpJnWBxBiuw-`,
  _ = `MI-jSULeyjo-`,
  _ = `YjoikkoUkhA-`,
  _ = `b2dIoEHfJak-`,
  _ = `RcKgaFvMsag-`,
  _ = `YASLZpdIsfU-`,
  _ = `r3oMTnouCLQ-`,
  _ = `_6hd3tYheIGo-`,
  _ = `U5wUENHBZtQ-`,
  _ = `V-C8hg6M86c-`,
  _ = `cOc-gYcnt5w-`,
  _ = `fOFppILvNGE-`,
  _ = `Nit9L7vqK7Y-`,
  _ = `ZHApIjEkJdM-`,
  _ = `jj5d7c4p2cA-`,
  _ = `FLBIu-r2yjI-`,
  _ = `_5JoliqMtzGM-`,
  _ = `WEXbxajwBRM-`,
  _ = `ARbmBP6rcFE-`,
  _ = `drUbIttMg3s-`,
  _ = `_0VcTWS88DzY-`,
  _ = `NsaNyuoyhFw-`,
  _ = `VAI29oEDpy8-`,
  _ = `veCcj9FEXWY-`,
  _ = `Xf2SPob2HOo-`,
  _ = `QZMnS8crC6E-`,
  _ = {
    QAFullPageView: _,
    QAName: _,
    QAColumns: _,
    QAMainCtn: _,
    QAModeratorColumn: _,
    QASplitColumns: _,
    ModeratorInstructions: _,
    AnsweredSectionHeader: _,
    InputButton: _,
    Reload: _,
    Reloading: _,
    SignInButton: _,
    QAHeader: _,
    QuestionACK: _,
    Visible: _,
    QATitleRow: _,
    QATitle: _,
    Description: _,
    InputCtn: _,
    LogInPrompt: _,
    ButtonCtn: _,
    SaveSpinner: _,
    QuestionsCtn: _,
    InsetShadowTopCtn: _,
    InsetShadowTop: _,
    QuestionsHeader: _,
    QuestionsTitle: _,
    QuestionList: _,
    NoQuestions: _,
    Question: _,
    Hidden: _,
    QuestionCtn: _,
    UserAvatar: _,
    PersonaName: _,
    QuestionText: _,
    QuestionAndVotes: _,
    QuestionTitle: _,
    QuestionStats: _,
    PostTime: _,
    Votes: _,
    Vote_Ready: _,
    Vote_Positive: _,
    RateIcon: _,
    Vote_CannotVote: _,
    DateAndTime: _,
    Answer: _,
    AnswerTitle: _,
    AnswerCheck: _,
    AnswerText: _,
    ModerationHeader: _,
    ModeratorSection: _,
    ToolRow: _,
    ToolLabel: _,
    QADashboardCtn: _,
    DashboardHeader: _,
    DashboardHeaderTitle: _,
    DashboardHeaderButtonCtn: _,
    DashboardRow: _,
    GIDSession: _,
    QuestionCount: _,
    QAndADeleteColumn: _,
    QAndAName: _,
    Prompt: _,
    Editing: _,
    NameInput: _,
    DeleteButton: _,
    DashboardColumnHeaders: _,
    CreateQAndADialog: _,
    DeleteQAndADialog: _,
    DeleteInfo: _,
  },
  _ = _();
function _(_) {
  let _ = _();
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {}),
      (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#QAndA_Column_Name`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#QAndA_Column_GID`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#QAndA_Column_QuestionCount`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#QAndA_Column_DeleteButtons`),
          }),
        ],
      }),
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            qanda: _,
          },
          _.gidSession,
        ),
      ),
    ],
  });
}
function _(_) {
  let _ = _.useCallback(
    () =>
      _((0, _.jsx)(_, {}), window, {
        strTitle: _(`#QAndA_CreateQAndA_Title`),
      }),
    [],
  );
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#QAndA_Dashboard`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          onClick: _,
          children: _(`#QAndA_CreateQAndA_Button`),
        }),
      }),
    ],
  });
}
var _ = 120;
function _(_) {
  let _ = _(),
    [_, _] = _.useState(``);
  return (0, _.jsx)(_, {
    strTitle: _(`#QAndA_CreateQAndA_Title`),
    strDescription: _(`#QAndA_CreateQAndA_Instructions`),
    strOKButtonText: _(`#Button_Create`),
    onOK: () => _(_),
    bOKDisabled: _.length == 0,
    closeModal: _.closeModal,
    className: _,
    children: (0, _.jsx)(_, {
      type: `text`,
      className: _,
      value: _,
      placeholder: _(`#QAndA_EnterNamePrompt`),
      onFocus: (_) => _.target.select(),
      onChange: (_) => _(_.currentTarget.value),
      maxLength: _,
    }),
  });
}
function _(_) {
  let { qanda: _ } = _,
    _ =
      _.COMMUNITY_BASE_URL +
      `questions/` +
      _.VANITY_ID +
      `/view/` +
      _.gidSession,
    _ = _.useCallback(
      (_) => {
        (_.stopPropagation(),
          _.preventDefault(),
          _(
            (0, _.jsx)(_, {
              qanda: _,
            }),
            window,
            {
              strTitle: _(`#QAndA_CreateQAndA_Title`),
            },
          ));
      },
      [_],
    );
  return (0, _.jsxs)(`a`, {
    className: _,
    href: _,
    children: [
      (0, _.jsx)(_, {
        qanda: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.gidSession,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.rgQuestionGIDs.length,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          onClick: _,
          children: (0, _.jsx)(_, {}),
        }),
      }),
    ],
  });
}
function _(_) {
  let { qanda: _ } = _,
    [_, _] = _.useState(!1),
    [_, _] = _.useState(_.strName),
    _ = _(),
    _ = (_) => {
      (_.stopPropagation(), _.preventDefault(), _ || _(!0));
    },
    _ = (_) => {
      (_.stopPropagation(),
        _.preventDefault(),
        _(_, _.strName) == 0 ? _(!1) : _(_.gidSession, _).then(() => _(!1)));
    },
    _ =
      _.strName.length > 0
        ? _.strName
        : (0, _.jsx)(`span`, {
            className: _,
            children: _(`#QAndA_EnterNamePrompt`),
          }),
    _ = (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          type: `text`,
          className: _,
          value: _,
          placeholder: _(`#QAndA_EnterNamePrompt`),
          onFocus: (_) => _.target.select(),
          onChange: (_) => _(_.currentTarget.value),
          maxLength: _,
        }),
        (0, _.jsx)(_, {
          onClick: _,
          className: _,
          children: _(`#Button_Save`),
        }),
      ],
    });
  return (0, _.jsx)(`div`, {
    className: _(_, _ && `drUbIttMg3s-`),
    onClick: _,
    children: _ ? _ : _,
  });
}
function _(_) {
  let { qanda: _ } = _,
    _ = _();
  return (0, _.jsxs)(_, {
    strTitle: _(`#QAndA_Column_DeleteButtons`),
    strDescription: _(`#QAndA_DeleteQAndA_Instructions`),
    onOK: () => _(_.gidSession),
    closeModal: _.closeModal,
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#QAndA_Column_Name`) + `: ` + _.strName,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children:
          _(`#QAndA_Column_QuestionCount`) + `: ` + _.rgQuestionGIDs.length,
      }),
    ],
  });
}
function _(_) {
  let {
      gidSession: _,
      gidQuestion: _,
      bUserCanModerate: _,
      bUserCanVote: _,
      fnVoteOnQuestion: _,
      rtNow: _,
    } = _,
    [_, _] = _(_);
  if (!_) return null;
  let _ = _ - _.rtPostTime,
    _ = _ < _.PerDay ? _(_) : _(_.rtPostTime),
    _ = _ ? () => _(_, !_.bUserUpVoted) : null,
    _ = _ ? (_.bUserUpVoted ? _ : _) : _,
    _ = _(
      _,
      _.eState == 3 && `izbX9Bk-ctQ-`,
      _.eState == 1 && void 0,
      _.eState == 0 && void 0,
      _.eState == 2 && void 0,
    );
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _(_, `questionCtn`),
        children: [
          (0, _.jsx)(_, {
            accountID: _.posterAccountID,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _.strQuestionText,
                  }),
                  (0, _.jsx)(_, {
                    toolTipContent:
                      _ &&
                      (_.bUserUpVoted
                        ? _(`#QAndA_VoteRemoveTooltip`)
                        : _(`#QAndA_VoteTooltip`)),
                    children: (0, _.jsxs)(`div`, {
                      className: _(_, _),
                      onClick: _,
                      children: [
                        (0, _.jsx)(_, {
                          className: _,
                        }),
                        (0, _.jsx)(`div`, {
                          className: void 0,
                          children: _(Number(_.nVoteCount)),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(_, {
                    rtFullDate: _.rtPostTime,
                    className: _,
                    stylesmodule: _,
                    children: _,
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
      _.rtAnswerTime &&
        (0, _.jsx)(_, {
          question: _,
          rtNow: _,
        }),
      _ &&
        (0, _.jsx)(_, {
          gidSession: _,
          gidQuestion: _,
          eState: _?.eState,
        }),
    ],
  });
}
function _(_) {
  let { question: _, rtNow: _ } = _,
    _ = _.rtAnswerTime && _ - _.rtAnswerTime,
    _ = _.rtAnswerTime && (_ < _.PerDay ? _(_) : _(_.rtAnswerTime));
  return _.strAnswerText
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {
                  color: `#67c1f5`,
                }),
              }),
              _(`#QAndA_ModeratorAnswerTitle`),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [` `, _.strAnswerText, ` `],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              rtFullDate: _.rtAnswerTime,
              className: _,
              stylesmodule: _,
              children: _,
            }),
          }),
        ],
      })
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              color: `#67c1f5`,
            }),
          }),
          _(`#QAndA_AlreadyAnsweredTitle`),
        ],
      });
}
function _(_) {
  let _ = _.InitFromAccountID(_.accountID, _.EUNIVERSE).ConvertTo64BitString(),
    { isLoading: _, data: _ } = _(_.accountID);
  return _
    ? null
    : (0, _.jsx)(`a`, {
        href: _.GetCommunityProfileURL(),
        className: _,
        "data-miniprofile": `s` + _,
        children: _?.m_strPlayerName ?? _,
      });
}
function _(_) {
  let { gidSession: _, gidQuestion: _, eState: _ } = _,
    { fnAnswerQuestion: _, fnModerateQuestion: _ } = _(_),
    _ = () => _(_, 1),
    _ = () => _(_, 3),
    _ = () => _(_, ``),
    _ = _ == 0 || _ == 3,
    _ = _ != 3,
    _ = _ == 1;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _(`#QAndA_ModeratorLabel`),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          strPrompt: _(`#QAndA_AnswerPrompt`),
          fnSubmit: (_) => _(_, _),
        }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _(`#QAndA_ModeratorOtherOptionsLabel`),
          (0, _.jsx)(_, {
            toolTipContent: _(`#QAndA_ModerateApproveButton_ttip`),
            children: (0, _.jsx)(_, {
              onClick: _,
              className: _,
              disabled: !_,
              children: _(`#QAndA_ModerateApproveButton`),
            }),
          }),
          (0, _.jsx)(_, {
            toolTipContent: _(`#QAndA_ModerateHideButton_ttip`),
            children: (0, _.jsx)(_, {
              onClick: _,
              className: _,
              disabled: !_,
              children: _(`#QAndA_ModerateHideButton`),
            }),
          }),
          (0, _.jsx)(_, {
            toolTipContent: _(`#QAndA_QuickAnswerButton_ttip`),
            children: (0, _.jsx)(_, {
              onClick: _,
              className: _,
              disabled: !_,
              children: _(`#QAndA_QuickAnswerButton`),
            }),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { gidSession: _ } = _;
  _();
  let { strName: _, bUserCanModerate: _ } = _(_);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#QAndA_Header`) + (_?.length > 0 ? `: ` + _ : ``),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            gidSession: _,
            bHalfOfFullPage: _,
          }),
          _ &&
            (0, _.jsx)(_, {
              gidSession: _,
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { gidSession: _ } = _,
    {
      bUserCanModerate: _,
      rgNewQuestionGIDs: _,
      rgHiddenQuestionGIDs: _,
    } = _(_),
    _ = _(10);
  return _
    ? (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsx)(_, {
            title: _(`#QAndA_ModeratorViewHeader`),
            className: _,
            children: (0, _.jsx)(`div`, {
              className: _,
              children: _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    gidSession: _,
                    gidQuestion: _,
                    bUserCanModerate: _,
                    bUserCanVote: !1,
                    rtNow: _,
                  },
                  _,
                ),
              ),
            }),
          }),
          (0, _.jsx)(_, {
            title: _(`#QAndA_HiddenQuestionsHeader`),
            className: _,
            bStartMinimized: !0,
            children: (0, _.jsx)(`div`, {
              className: _,
              children: _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    gidSession: _,
                    gidQuestion: _,
                    bUserCanModerate: _,
                    bUserCanVote: !1,
                    rtNow: _,
                  },
                  _,
                ),
              ),
            }),
          }),
        ],
      })
    : null;
}
function _(_) {
  let { gidSession: _, bHalfOfFullPage: _ } = _;
  _();
  let {
      bIsLoaded: _,
      bUserCanAskQuestions: _,
      bUserCanModerate: _,
      fnAskQuestion: _,
      fnVoteOnQuestion: _,
      rgModeratedQuestionGIDs: _,
      rgAnsweredQuestionGIDs: _,
      rgNewQuestionGIDs: _,
    } = _(_),
    { fnReload: _, bIsReloading: _ } = _(_),
    _ = _(10),
    _ = _ && _,
    { fnModerateQuestion: _ } = _(_);
  return (0, _.jsxs)(`div`, {
    className: _(_, _ && `jikb8cKLdwg-`),
    children: [
      (0, _.jsxs)(`div`, {
        className: _(_, _ && `YASLZpdIsfU-`),
        children: [
          (0, _.jsx)(_, {
            onClick: _,
            disabled: !_,
            className: _(_, _, _ && `_7zP2DXBFo3Y-`),
            children: (0, _.jsx)(`div`, {
              className: void 0,
              children: (0, _.jsx)(_, {}),
            }),
          }),
          _
            ? (0, _.jsxs)(_.Fragment, {
                children: [
                  _(`#QAndA_ModeratorLabelHeader`),
                  (0, _.jsx)(_, {
                    toolTipContent: _(`#QAndA_ModerateHideAllButton_ttip`),
                    children: (0, _.jsx)(_, {
                      onClick: async () => {
                        for (let _ of [_, _, _]) for (let _ of _) await _(_, 3);
                      },
                      className: _,
                      children: _(`#QAndA_ModerateHideAllButton`),
                    }),
                  }),
                ],
              })
            : _
              ? (0, _.jsx)(_, {
                  fnAskQuestion: _,
                })
              : _ && (0, _.jsx)(_, {}),
        ],
      }),
      _.length + _.length == 0
        ? (0, _.jsx)(`div`, {
            className: _,
            children: _(`#QAndA_NoQuestionsYet`),
          })
        : (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(`div`, {
                  className: _,
                }),
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _
                  ? _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          gidSession: _,
                          gidQuestion: _,
                          bUserCanModerate: _,
                          bUserCanVote: _,
                          fnVoteOnQuestion: _,
                          rtNow: _,
                        },
                        _,
                      ),
                    )
                  : (0, _.jsx)(_, {
                      position: `center`,
                    }),
              }),
              _.length > 0 &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(`div`, {
                      className: `cua4C9nfXwM-`,
                      children: _(`#QAndA_AnsweredQuestionsHeader`),
                    }),
                    (0, _.jsx)(`div`, {
                      className: `_42oBi1K5Go4-`,
                      children: _.map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            gidSession: _,
                            gidQuestion: _,
                            bUserCanModerate: _,
                            bUserCanVote: _,
                            fnVoteOnQuestion: _,
                            rtNow: _,
                          },
                          _,
                        ),
                      ),
                    }),
                  ],
                }),
            ],
          }),
    ],
  });
}
function _(_) {
  let [_, _] = _.useState(!1),
    _ = _(`QuestionBox`);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#QAndA_HeaderDescription`),
      }),
      (0, _.jsx)(_, {
        strPrompt: _(`#QAndA_QuestionPrompt`),
        fnSubmit: async (_) => {
          let _ = await _.fnAskQuestion(_);
          return (
            _ == 1 &&
              !_.token.reason &&
              (_(!0),
              window.setTimeout(() => {
                _.token.reason || _(!1);
              }, 1e3)),
            _
          );
        },
      }),
      (0, _.jsx)(`div`, {
        className: _(_, _ && `l0ZS73yFCCg-`),
        children: _(`#QAndA_QuestionWasPosted`),
      }),
    ],
  });
}
function _(_) {
  let { strPrompt: _, fnSubmit: _ } = _,
    [_, _] = _.useState(``),
    [_, _] = _.useState(!1);
  return (0, _.jsx)(_.Fragment, {
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          type: `text`,
          placeholder: _,
          maxLength: 512,
          value: _,
          onChange: (_) => _(_.target.value),
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            _ &&
              (0, _.jsx)(`div`, {
                className: `MHDRZEocQLo-`,
                children: (0, _.jsx)(_, {
                  size: `small`,
                  position: `center`,
                }),
              }),
            (0, _.jsx)(_, {
              onClick: async () => {
                (_(!0), (await _(_)) == 1 && _(``), _(!1));
              },
              disabled: _ || !_,
              className: _,
              children: _(`#QAndA_SubmitCommentButton`),
            }),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#QAndA_LogInPrompt`),
      }),
      !_.logged_in &&
        (0, _.jsx)(_, {
          onClick: _,
          className: _(`JOMsuYcfEgE-`, `KtfZY3EXbm4-`),
          children: _(`#Login_SignIn`),
        }),
    ],
  });
}
