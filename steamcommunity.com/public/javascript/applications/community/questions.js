/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./rolldown-runtime.js";
import { A as n, Pt as r, ot as i } from "./libraries.js";
import { t as a } from "./throbber.js";
import { t as o } from "./ajaxhooks.js";
import { f as s, i as c } from "./eventdevfeaturestore.js";
import { s as l } from "./localdateandtime.js";
import { t as u } from "./playerstore.js";
import {
  Cc as d,
  Ef as ee,
  Et as te,
  If as f,
  Ji as p,
  Nh as m,
  Ph as ne,
  Sm as re,
  Ui as ie,
  Wo as ae,
  Yl as oe,
  Yo as h,
  Zd as g,
  am as _,
  dm as v,
  fl as se,
  fm as y,
  gs as b,
  hf as ce,
  ip as le,
  mf as ue,
  os as de,
  ql as fe,
  sd as x,
  um as S,
  xu as C,
} from "./main.js";
import { r as pe } from "./collapseablesection.js";
import { t as me } from "./partnereventslogin.js";
var w = e(r()),
  he = [
    `mousemove`,
    `keypress`,
    `scroll`,
    `wheel`,
    `focusin`,
    `touchstart`,
    `touchmove`,
  ],
  ge = 2e3,
  T = class e {
    m_callbackList = new m();
    m_timer = null;
    m_bAreEventListenersRegistered = !1;
    static s_Singleton;
    static Get() {
      return ((e.s_Singleton ||= new e()), e.s_Singleton);
    }
    constructor() {}
    ResetFidgetTimer(e) {
      this.m_timer && window.clearTimeout(this.m_timer);
      let t = () => {
        ((this.m_timer = null), this.m_callbackList.Dispatch());
      };
      this.m_timer = window.setTimeout(t, ge);
    }
    BIsUserFidgeting() {
      return !!this.m_timer;
    }
    GetCallbackList() {
      return this.m_callbackList;
    }
    BRegisterEventListeners() {
      if (this.m_bAreEventListenersRegistered) return !1;
      let e = window;
      for (let t of he) e.addEventListener(t, this.ResetFidgetTimer);
      return ((this.m_bAreEventListenersRegistered = !0), !0);
    }
    BUnregisterEventListeners() {
      if (!this.m_bAreEventListenersRegistered) return !1;
      let e = window;
      for (let t of he) e.removeEventListener(t, this.ResetFidgetTimer);
      return ((this.m_bAreEventListenersRegistered = !1), !1);
    }
  };
ee([ne], T.prototype, `ResetFidgetTimer`, null);
function _e() {
  w.useEffect(() => {
    let e = T.Get().BRegisterEventListeners();
    return () => {
      e && T.Get().BUnregisterEventListeners();
    };
  }, []);
}
function ve(e) {
  let t = w.useRef(null),
    n = w.useCallback(() => {
      t.current &&= (t.current(), null);
    }, []);
  return (
    x(T.Get().GetCallbackList(), n),
    w.useEffect(() => () => {
      t.current = null;
    }),
    w.useCallback(
      (...n) => {
        T.Get().BIsUserFidgeting()
          ? (t.current = () => e(...n))
          : ((t.current = null), e(...n));
      },
      [e],
    )
  );
}
var E = e(n()),
  D = class e {
    m_mapQAndASessions = new Map();
    m_mapQAndAChangeCallbackList = new Map();
    m_dashboardCallbackList = new m();
    m_mapQuestions = new Map();
    m_mapQuestionCallbackList = new Map();
    m_rgPendingQuestionGIDs = [];
    static s_Singleton;
    static Get() {
      return ((e.s_Singleton ||= new e()), e.s_Singleton);
    }
    constructor() {}
    GetQAndACallbackList(e) {
      return (
        this.m_mapQAndAChangeCallbackList.has(e) ||
          this.m_mapQAndAChangeCallbackList.set(e, new m()),
        this.m_mapQAndAChangeCallbackList.get(e)
      );
    }
    GetQuestionCallbackList(e) {
      return (
        this.m_mapQuestionCallbackList.has(e) ||
          this.m_mapQuestionCallbackList.set(e, new m()),
        this.m_mapQuestionCallbackList.get(e)
      );
    }
    GetDashboardCallbackList() {
      return this.m_dashboardCallbackList;
    }
    GetSession(e) {
      return this.m_mapQAndASessions.get(e);
    }
    GetAllSessions() {
      return Array.from(this.m_mapQAndASessions.values());
    }
    GetQuestion(e) {
      return this.m_mapQuestions.get(e);
    }
    async LoadAllSessions(e) {
      if (!y.logged_in || !_()) return 15;
      let t =
          v.COMMUNITY_BASE_URL +
          `questions/` +
          S.VANITY_ID +
          `/ajaxgetqandasforgroup`,
        n = {},
        r = null;
      try {
        let i = await E.default.get(t, { params: n, cancelToken: e?.token });
        if (
          (console.log(i),
          i?.status == 200 && i.data?.success == 1 && i.data.qandas)
        ) {
          for (let e of i.data.qandas)
            this.m_mapQAndASessions.set(e.gidSession, e);
          return (
            this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()), 1
          );
        }
        r = { response: i };
      } catch (e) {
        r = e;
      }
      let i = f(r);
      return (
        console.error(
          `Could not load question and answer sessions for group`,
          i.strErrorMsg,
          i,
        ),
        r?.response?.data?.success ?? 2
      );
    }
    async CreateNewSession(e, t) {
      if (!y.logged_in || !_()) return 15;
      let n =
          v.COMMUNITY_BASE_URL +
          `questions/` +
          S.VANITY_ID +
          `/ajaxcreateqanda`,
        r = new FormData();
      (r.append(`sessionid`, _()), r.append(`name`, e));
      let i = null;
      try {
        let e = await E.default.post(n, r, {
          withCredentials: !0,
          cancelToken: t?.token,
        });
        if (e?.status == 200 && e.data?.success == 1 && e.data.qanda)
          return (
            this.m_mapQAndASessions.set(e.data.qanda.gidSession, e.data.qanda),
            this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
            1
          );
        i = { response: e };
      } catch (e) {
        i = e;
      }
      let a = f(i);
      return (
        console.error(`Could not create Q&A`, e, a.strErrorMsg, a),
        i?.response?.data?.success ?? 2
      );
    }
    async RenameSession(e, t, n) {
      if (!y.logged_in || !_()) return 15;
      let r =
          v.COMMUNITY_BASE_URL +
          `questions/` +
          S.VANITY_ID +
          `/ajaxrenameqanda/` +
          e,
        i = new FormData();
      (i.append(`sessionid`, _()), i.append(`name`, t));
      let a = null;
      try {
        let o = await E.default.post(r, i, {
          withCredentials: !0,
          cancelToken: n?.token,
        });
        if (o?.status == 200 && o.data?.success == 1)
          return (
            (this.m_mapQAndASessions.get(e).strName = t),
            this.GetQAndACallbackList(e).Dispatch(
              this.m_mapQAndASessions.get(e),
            ),
            this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
            1
          );
        a = { response: o };
      } catch (e) {
        a = e;
      }
      let o = f(a);
      return (
        console.error(`Could not rename Q&A`, e, t, o.strErrorMsg, o),
        a?.response?.data?.success ?? 2
      );
    }
    async DeleteSession(e, t) {
      if (!y.logged_in || !_()) return 15;
      let n =
          v.COMMUNITY_BASE_URL +
          `questions/` +
          S.VANITY_ID +
          `/ajaxdeleteqanda/` +
          e,
        r = new FormData();
      r.append(`sessionid`, _());
      let i = null;
      try {
        let a = await E.default.post(n, r, {
          withCredentials: !0,
          cancelToken: t?.token,
        });
        if (a?.status == 200 && a.data?.success == 1)
          return (
            this.m_mapQAndASessions.delete(e),
            this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
            1
          );
        i = { response: a };
      } catch (e) {
        i = e;
      }
      let a = f(i);
      return (
        console.error(`Could not delete Q&A`, e, a.strErrorMsg, a),
        i?.response?.data?.success ?? 2
      );
    }
    async LoadSession(e, t, n) {
      let r =
          y.logged_in &&
          (!this.m_mapQAndASessions.has(e) ||
            this.m_mapQAndASessions.get(e).bUserCanModerate ||
            this.m_rgPendingQuestionGIDs.length > 0 ||
            t)
            ? `/ajaxgetqandasessionforuser/`
            : `/ajaxgetqandasession/`,
        i = v.COMMUNITY_BASE_URL + `questions/` + S.VANITY_ID + r + e,
        a = {},
        o = null;
      try {
        let t = await E.default.get(i, { params: a, cancelToken: n?.token });
        if (
          t?.status == 200 &&
          t.data?.success == 1 &&
          t.data.qanda &&
          t.data.questions
        ) {
          for (let e of t.data.questions) {
            let t = e.gidQuestion,
              n = this.m_mapQuestions.get(t)?.bUserUpVoted ?? e.bUserUpVoted,
              r = { ...e, bUserUpVoted: n };
            (this.m_mapQuestions.set(t, r),
              this.GetQuestionCallbackList(t).Dispatch(r));
          }
          let n =
              this.m_mapQAndASessions.get(e)?.bUserCanModerate ??
              t.data.qanda.bUserCanModerate,
            r =
              this.m_mapQAndASessions.get(e)?.bUserCanAskQuestions ??
              t.data.qanda.bUserCanAskQuestions,
            i = {
              ...t.data.qanda,
              bUserCanModerate: n,
              bUserCanAskQuestions: r,
            };
          return (
            this.m_mapQAndASessions.set(e, i),
            this.GetQAndACallbackList(e).Dispatch(i),
            this.UpdatePendingQuestionList(t.data.qanda.rgQuestionGIDs),
            1
          );
        }
        o = { response: t };
      } catch (e) {
        o = e;
      }
      let s = f(o);
      return (
        console.error(`Could not load Q&A`, e, s.strErrorMsg, s),
        o?.response?.data?.success ?? 2
      );
    }
    UpdatePendingQuestionList(e) {
      let t = new Set();
      for (let n of e) {
        let e = this.m_mapQuestions.get(n);
        e.posterAccountID == y.accountid &&
          e.eState == 1 &&
          t.add(e.gidQuestion);
      }
      if (this.m_rgPendingQuestionGIDs.length > 0) {
        let n = new Set(e);
        for (let e of this.m_rgPendingQuestionGIDs)
          n.has(e) && this.m_mapQuestions.get(e)?.eState == 1 && t.add(e);
      }
      this.m_rgPendingQuestionGIDs = Array.from(t);
    }
    async AskNewQuestion(e, t, n) {
      if (
        !y.logged_in ||
        !_() ||
        !this.m_mapQAndASessions.get(e)?.bUserCanAskQuestions
      )
        return 15;
      let r =
          v.COMMUNITY_BASE_URL +
          `questions/` +
          S.VANITY_ID +
          `/ajaxaskquestion/` +
          e,
        i = new FormData();
      (i.append(`sessionid`, _()), i.append(`question`, t));
      let a = null;
      try {
        let t = await E.default.post(r, i, {
          withCredentials: !0,
          cancelToken: n?.token,
        });
        if (t?.status == 200 && t.data?.success == 1)
          return (
            this.m_rgPendingQuestionGIDs.push(t.data.gidQuestion),
            this.LoadSession(e, !0, n),
            1
          );
        a = { response: t };
      } catch (e) {
        a = e;
      }
      let o = f(a);
      return (
        console.error(`Could not upload question`, e, t, o.strErrorMsg, o),
        a?.response?.data?.success ?? 2
      );
    }
    async ModerateQuestion(e, t, n, r) {
      if (
        !y.logged_in ||
        !_() ||
        !this.m_mapQAndASessions.get(e)?.bUserCanModerate
      )
        return 15;
      if (n != 1 && n != 3) return 8;
      if (this.m_mapQuestions.get(t).eState == n) return 1;
      let i =
          v.COMMUNITY_BASE_URL +
          `questions/` +
          S.VANITY_ID +
          `/ajaxmoderatequestion/` +
          e,
        a = new FormData();
      (a.append(`sessionid`, _()),
        a.append(`gidquestion`, t),
        a.append(`action`, n == 1 ? `show` : `hide`));
      let o = null;
      try {
        let t = await E.default.post(i, a, {
          withCredentials: !0,
          cancelToken: r?.token,
        });
        if (t?.status == 200 && t.data?.success == 1)
          return (this.LoadSession(e, !0, r), 1);
        o = { response: t };
      } catch (e) {
        o = e;
      }
      let s = f(o);
      return (
        console.error(`Could not moderate question`, e, t, n, s.strErrorMsg, s),
        o?.response?.data?.success ?? 2
      );
    }
    async AnswerQuestion(e, t, n, r) {
      if (
        !y.logged_in ||
        !_() ||
        !this.m_mapQAndASessions.get(e)?.bUserCanAskQuestions
      )
        return 15;
      let i =
          v.COMMUNITY_BASE_URL +
          `questions/` +
          S.VANITY_ID +
          `/ajaxanswerquestion/` +
          e,
        a = new FormData();
      (a.append(`sessionid`, _()),
        a.append(`gidquestion`, t),
        a.append(`answer`, n));
      let o = null;
      try {
        let t = await E.default.post(i, a, {
          withCredentials: !0,
          cancelToken: r?.token,
        });
        if (t?.status == 200 && t.data?.success == 1)
          return (this.LoadSession(e, !0, r), 1);
        o = { response: t };
      } catch (e) {
        o = e;
      }
      let s = f(o);
      return (
        console.error(`Could not upload answer`, e, t, n, s.strErrorMsg, s),
        o?.response?.data?.success ?? 2
      );
    }
    async VoteOnQuestion(e, t, n, r) {
      if (
        !y.logged_in ||
        !_() ||
        !this.m_mapQAndASessions.get(e)?.bUserCanAskQuestions
      )
        return 15;
      if (n === this.m_mapQuestions.get(t).bUserUpVoted) return 1;
      let i = this.m_mapQuestions.get(t),
        a = i.nVoteCount,
        o = a + (n ? 1 : -1);
      ((i = { ...i, nVoteCount: o, bUserUpVoted: n }),
        this.m_mapQuestions.set(t, i),
        this.GetQuestionCallbackList(t).Dispatch(i));
      let s =
          v.COMMUNITY_BASE_URL +
          `questions/` +
          S.VANITY_ID +
          `/ajaxvoteforquestion/` +
          e,
        c = new FormData();
      (c.append(`sessionid`, _()),
        c.append(`gidquestion`, t),
        c.append(`up`, n ? `1` : `0`));
      let l = null;
      try {
        let e = await E.default.post(s, c, {
          withCredentials: !0,
          cancelToken: r?.token,
        });
        if (e?.status == 200 && e.data?.success == 1) return 1;
        l = { response: e };
      } catch (e) {
        l = e;
      }
      ((i = { ...i, nVoteCount: a, bUserUpVoted: !n }),
        this.m_mapQuestions.set(t, i),
        this.GetQuestionCallbackList(t).Dispatch(i));
      let u = f(l);
      return (
        console.error(`Could not upload vote`, e, t, n, u.strErrorMsg, u),
        l?.response?.data?.success ?? 2
      );
    }
  };
function O(e) {
  let t = o(`useQAndASession`),
    n = w.useCallback(
      async (n) =>
        D.Get().GetSession(e)?.bUserCanAskQuestions &&
        (await D.Get().AskNewQuestion(e, n, t)),
      [e, t],
    ),
    r = w.useCallback(
      (n, r) =>
        D.Get().GetSession(e)?.bUserCanAskQuestions &&
        D.Get().VoteOnQuestion(e, n, r, t),
      [e, t],
    ),
    i = w.useCallback(
      (e) => {
        let t = !!e,
          i = e?.strName,
          a = e?.bUserCanModerate,
          o = e?.bUserCanAskQuestions,
          s = [],
          c = [],
          l = [],
          u = [];
        for (let t of e?.rgQuestionGIDs ?? [])
          switch (D.Get().GetQuestion(t)?.eState) {
            case 1:
              s.push(t);
              break;
            case 2:
              c.push(t);
              break;
            case 0:
              l.push(t);
              break;
            case 3:
              u.push(t);
          }
        return (
          s.sort(
            (e, t) =>
              D.Get().GetQuestion(t).nVoteCount -
              D.Get().GetQuestion(e).nVoteCount,
          ),
          c.sort(
            (e, t) =>
              D.Get().GetQuestion(t).rtAnswerTime -
              D.Get().GetQuestion(e).rtAnswerTime,
          ),
          l.sort(
            (e, t) =>
              D.Get().GetQuestion(t).rtPostTime -
              D.Get().GetQuestion(e).rtPostTime,
          ),
          u.sort(
            (e, t) =>
              D.Get().GetQuestion(t).rtPostTime -
              D.Get().GetQuestion(e).rtPostTime,
          ),
          {
            bIsLoaded: t,
            strName: i,
            bUserCanModerate: a,
            bUserCanAskQuestions: o,
            fnAskQuestion: n,
            fnVoteOnQuestion: r,
            rgModeratedQuestionGIDs: s,
            rgAnsweredQuestionGIDs: c,
            rgNewQuestionGIDs: l,
            rgHiddenQuestionGIDs: u,
          }
        );
      },
      [n, r],
    ),
    [a, s] = w.useState(() => i(D.Get().GetSession(e))),
    c = w.useCallback((e) => s(i(e)), [i]);
  return (
    x(D.Get().GetQAndACallbackList(e), c),
    w.useEffect(() => {
      a.bIsLoaded || D.Get().LoadSession(e);
    }, [a.bIsLoaded, e]),
    a
  );
}
var k = null;
function ye(e) {
  let t = o(`useReloadFunction`),
    [n, r] = w.useState(!1),
    i = w.useCallback(() => {
      r(!0);
      let n = D.Get().LoadSession(e, !1, t);
      return (n.then(() => r(!1)), n);
    }, [e, t]),
    a = ve(i);
  return (
    w.useEffect(
      () =>
        k
          ? () => {}
          : ((k = window.setInterval(a, 1e4)), () => window.clearInterval(k)),
      [a],
    ),
    w.useMemo(() => ({ fnReload: i, bIsReloading: n }), [i, n])
  );
}
function be(e) {
  let [t, n] = w.useState(D.Get().GetQuestion(e));
  x(D.Get().GetQuestionCallbackList(e), n);
  let [r, i] = w.useState(!!t);
  return [t, !!t || r];
}
function xe(e) {
  let t = o(`useQuestionModeratorActions`),
    n = w.useCallback(
      (n, r) =>
        D.Get().GetSession(e)?.bUserCanModerate &&
        D.Get().AnswerQuestion(e, n, r, t),
      [e, t],
    ),
    r = w.useCallback(
      (n, r) =>
        D.Get().GetSession(e)?.bUserCanModerate &&
        D.Get().ModerateQuestion(e, n, r, t),
      [e, t],
    );
  return w.useMemo(
    () => ({ fnAnswerQuestion: n, fnModerateQuestion: r }),
    [n, r],
  );
}
function Se() {
  let [e, t] = w.useState(D.Get().GetAllSessions());
  return (
    x(D.Get().GetDashboardCallbackList(), t),
    w.useEffect(() => {
      e.length == 0 && D.Get().LoadAllSessions();
    }, [e.length]),
    e
  );
}
function Ce() {
  let e = o(`useCreateQAndAFn`);
  return w.useCallback((t) => D.Get().CreateNewSession(t, e), [e]);
}
function we() {
  let e = o(`useRenameQAndAFn`);
  return w.useCallback((t, n) => D.Get().RenameSession(t, n, e), [e]);
}
function Te() {
  let e = o(`useDeleteQAndAFn`);
  return w.useCallback((t) => D.Get().DeleteSession(t, e), [e]);
}
var Ee = t({
    Answer: () => ot,
    AnswerCheck: () => U,
    AnswerText: () => st,
    AnswerTitle: () => H,
    AnsweredSectionHeader: () => Oe,
    ButtonCtn: () => ze,
    CreateQAndADialog: () => yt,
    DashboardColumnHeaders: () => vt,
    DashboardHeader: () => ft,
    DashboardHeaderButtonCtn: () => mt,
    DashboardHeaderTitle: () => pt,
    DashboardRow: () => G,
    DateAndTime: () => at,
    DeleteButton: () => _t,
    DeleteInfo: () => Z,
    DeleteQAndADialog: () => bt,
    Description: () => L,
    Editing: () => gt,
    GIDSession: () => K,
    Hidden: () => qe,
    InputButton: () => I,
    InputCtn: () => Le,
    InsetShadowTop: () => He,
    InsetShadowTopCtn: () => R,
    LogInPrompt: () => Re,
    ModerationHeader: () => ct,
    ModeratorInstructions: () => F,
    ModeratorSection: () => lt,
    NameInput: () => X,
    NoQuestions: () => Ge,
    PersonaName: () => Xe,
    PostTime: () => V,
    Prompt: () => ht,
    QAColumns: () => j,
    QADashboardCtn: () => dt,
    QAFullPageView: () => De,
    QAHeader: () => Me,
    QAMainCtn: () => M,
    QAModeratorColumn: () => N,
    QAName: () => A,
    QASplitColumns: () => P,
    QATitle: () => Ie,
    QATitleRow: () => Fe,
    QAndADeleteColumn: () => J,
    QAndAName: () => Y,
    Question: () => Ke,
    QuestionACK: () => Ne,
    QuestionAndVotes: () => Qe,
    QuestionCount: () => q,
    QuestionCtn: () => Je,
    QuestionList: () => z,
    QuestionStats: () => B,
    QuestionText: () => Ze,
    QuestionTitle: () => $e,
    QuestionsCtn: () => Ve,
    QuestionsHeader: () => Ue,
    QuestionsTitle: () => We,
    RateIcon: () => rt,
    Reload: () => ke,
    Reloading: () => Ae,
    SaveSpinner: () => Be,
    SignInButton: () => je,
    ToolLabel: () => ut,
    ToolRow: () => W,
    UserAvatar: () => Ye,
    Visible: () => Pe,
    Vote_CannotVote: () => it,
    Vote_Positive: () => nt,
    Vote_Ready: () => tt,
    Votes: () => et,
    default: () => xt,
  }),
  De = `XxT5V45htpY-`,
  A = `h-RxFCB6bAs-`,
  j = `HECwy-TVT6c-`,
  M = `_5yVQYMxy-JU-`,
  N = `B7Qs2tR7S98-`,
  P = `jikb8cKLdwg-`,
  F = `WbU1h886dW4-`,
  Oe = `cua4C9nfXwM-`,
  I = `KtfZY3EXbm4-`,
  ke = `-Q501kcuUlo-`,
  Ae = `_7zP2DXBFo3Y-`,
  je = `JOMsuYcfEgE-`,
  Me = `tnkl4wvxTNk-`,
  Ne = `hXO95r7-l-E-`,
  Pe = `l0ZS73yFCCg-`,
  Fe = `PxMQWGmavKs-`,
  Ie = `sTEXlUW1ClI-`,
  L = `vcATfshKglI-`,
  Le = `KJYoqAIyin0-`,
  Re = `JPV6UEmUgTQ-`,
  ze = `_5Ul4W3-Av4A-`,
  Be = `MHDRZEocQLo-`,
  Ve = `awgY6uPRTBU-`,
  R = `ABJnXuG8KVo-`,
  He = `_6yYapol9P0A-`,
  Ue = `QvQLSJcquRQ-`,
  We = `_6JJ2hb6WTCM-`,
  z = `_42oBi1K5Go4-`,
  Ge = `Fi89Grx-mDg-`,
  Ke = `_30qfo93SakM-`,
  qe = `izbX9Bk-ctQ-`,
  Je = `V-ndU0glwFg-`,
  Ye = `LvPLz--xXKo-`,
  Xe = `n1gHQqfqkVo-`,
  Ze = `gsF3HHmI2S4-`,
  Qe = `D3btI5M54U8-`,
  $e = `w9MlFyi6pQ0-`,
  B = `_6EPpOh6TVHU-`,
  V = `_3FCmzH2eOLk-`,
  et = `VIdMTmOGyQA-`,
  tt = `_7ABtMQEuexE-`,
  nt = `_1BtqzuhOPeY-`,
  rt = `TSn9XCAvKxY-`,
  it = `_0hDL88y-pvY-`,
  at = `RpJnWBxBiuw-`,
  ot = `MI-jSULeyjo-`,
  H = `YjoikkoUkhA-`,
  U = `b2dIoEHfJak-`,
  st = `RcKgaFvMsag-`,
  ct = `YASLZpdIsfU-`,
  lt = `r3oMTnouCLQ-`,
  W = `_6hd3tYheIGo-`,
  ut = `U5wUENHBZtQ-`,
  dt = `V-C8hg6M86c-`,
  ft = `cOc-gYcnt5w-`,
  pt = `fOFppILvNGE-`,
  mt = `Nit9L7vqK7Y-`,
  G = `ZHApIjEkJdM-`,
  K = `jj5d7c4p2cA-`,
  q = `FLBIu-r2yjI-`,
  J = `_5JoliqMtzGM-`,
  Y = `WEXbxajwBRM-`,
  ht = `ARbmBP6rcFE-`,
  gt = `drUbIttMg3s-`,
  X = `_0VcTWS88DzY-`,
  _t = `NsaNyuoyhFw-`,
  vt = `VAI29oEDpy8-`,
  yt = `veCcj9FEXWY-`,
  bt = `Xf2SPob2HOo-`,
  Z = `QZMnS8crC6E-`,
  xt = {
    QAFullPageView: De,
    QAName: A,
    QAColumns: j,
    QAMainCtn: M,
    QAModeratorColumn: N,
    QASplitColumns: P,
    ModeratorInstructions: F,
    AnsweredSectionHeader: Oe,
    InputButton: I,
    Reload: ke,
    Reloading: Ae,
    SignInButton: je,
    QAHeader: Me,
    QuestionACK: Ne,
    Visible: Pe,
    QATitleRow: Fe,
    QATitle: Ie,
    Description: L,
    InputCtn: Le,
    LogInPrompt: Re,
    ButtonCtn: ze,
    SaveSpinner: Be,
    QuestionsCtn: Ve,
    InsetShadowTopCtn: R,
    InsetShadowTop: He,
    QuestionsHeader: Ue,
    QuestionsTitle: We,
    QuestionList: z,
    NoQuestions: Ge,
    Question: Ke,
    Hidden: qe,
    QuestionCtn: Je,
    UserAvatar: Ye,
    PersonaName: Xe,
    QuestionText: Ze,
    QuestionAndVotes: Qe,
    QuestionTitle: $e,
    QuestionStats: B,
    PostTime: V,
    Votes: et,
    Vote_Ready: tt,
    Vote_Positive: nt,
    RateIcon: rt,
    Vote_CannotVote: it,
    DateAndTime: at,
    Answer: ot,
    AnswerTitle: H,
    AnswerCheck: U,
    AnswerText: st,
    ModerationHeader: ct,
    ModeratorSection: lt,
    ToolRow: W,
    ToolLabel: ut,
    QADashboardCtn: dt,
    DashboardHeader: ft,
    DashboardHeaderTitle: pt,
    DashboardHeaderButtonCtn: mt,
    DashboardRow: G,
    GIDSession: K,
    QuestionCount: q,
    QAndADeleteColumn: J,
    QAndAName: Y,
    Prompt: ht,
    Editing: gt,
    NameInput: X,
    DeleteButton: _t,
    DashboardColumnHeaders: vt,
    CreateQAndADialog: yt,
    DeleteQAndADialog: bt,
    DeleteInfo: Z,
  },
  Q = i();
function St(e) {
  let t = Se();
  return (0, Q.jsxs)(`div`, {
    className: dt,
    children: [
      (0, Q.jsx)(Ct, {}),
      (0, Q.jsxs)(`div`, {
        className: C(G, vt),
        children: [
          (0, Q.jsx)(`div`, {
            className: Y,
            children: g(`#QAndA_Column_Name`),
          }),
          (0, Q.jsx)(`div`, { className: K, children: g(`#QAndA_Column_GID`) }),
          (0, Q.jsx)(`div`, {
            className: q,
            children: g(`#QAndA_Column_QuestionCount`),
          }),
          (0, Q.jsx)(`div`, {
            className: J,
            children: g(`#QAndA_Column_DeleteButtons`),
          }),
        ],
      }),
      t.map((e) => (0, Q.jsx)(Et, { qanda: e }, e.gidSession)),
    ],
  });
}
function Ct(e) {
  let t = w.useCallback(
    () =>
      p((0, Q.jsx)(Tt, {}), window, {
        strTitle: g(`#QAndA_CreateQAndA_Title`),
      }),
    [],
  );
  return (0, Q.jsxs)(`div`, {
    className: ft,
    children: [
      (0, Q.jsx)(`div`, { className: pt, children: g(`#QAndA_Dashboard`) }),
      (0, Q.jsx)(`div`, {
        className: mt,
        children: (0, Q.jsx)(h, {
          onClick: t,
          children: g(`#QAndA_CreateQAndA_Button`),
        }),
      }),
    ],
  });
}
var wt = 120;
function Tt(e) {
  let t = Ce(),
    [n, r] = w.useState(``);
  return (0, Q.jsx)(ie, {
    strTitle: g(`#QAndA_CreateQAndA_Title`),
    strDescription: g(`#QAndA_CreateQAndA_Instructions`),
    strOKButtonText: g(`#Button_Create`),
    onOK: () => t(n),
    bOKDisabled: n.length == 0,
    closeModal: e.closeModal,
    className: yt,
    children: (0, Q.jsx)(ae, {
      type: `text`,
      className: X,
      value: n,
      placeholder: g(`#QAndA_EnterNamePrompt`),
      onFocus: (e) => e.target.select(),
      onChange: (e) => r(e.currentTarget.value),
      maxLength: wt,
    }),
  });
}
function Et(e) {
  let { qanda: t } = e,
    n =
      v.COMMUNITY_BASE_URL +
      `questions/` +
      S.VANITY_ID +
      `/view/` +
      t.gidSession,
    r = w.useCallback(
      (e) => {
        (e.stopPropagation(),
          e.preventDefault(),
          p((0, Q.jsx)(Ot, { qanda: t }), window, {
            strTitle: g(`#QAndA_CreateQAndA_Title`),
          }));
      },
      [t],
    );
  return (0, Q.jsxs)(`a`, {
    className: G,
    href: n,
    children: [
      (0, Q.jsx)(Dt, { qanda: t }),
      (0, Q.jsx)(`div`, { className: K, children: t.gidSession }),
      (0, Q.jsx)(`div`, { className: q, children: t.rgQuestionGIDs.length }),
      (0, Q.jsx)(`div`, {
        className: J,
        children: (0, Q.jsx)(`div`, {
          className: _t,
          onClick: r,
          children: (0, Q.jsx)(oe, {}),
        }),
      }),
    ],
  });
}
function Dt(e) {
  let { qanda: t } = e,
    [n, r] = w.useState(!1),
    [i, a] = w.useState(t.strName),
    o = we(),
    c = (e) => {
      (e.stopPropagation(), e.preventDefault(), n || r(!0));
    },
    l = (e) => {
      (e.stopPropagation(),
        e.preventDefault(),
        s(i, t.strName) == 0 ? r(!1) : o(t.gidSession, i).then(() => r(!1)));
    },
    u =
      t.strName.length > 0
        ? t.strName
        : (0, Q.jsx)(`span`, {
            className: ht,
            children: g(`#QAndA_EnterNamePrompt`),
          }),
    d = (0, Q.jsxs)(`div`, {
      className: X,
      children: [
        (0, Q.jsx)(ae, {
          type: `text`,
          className: X,
          value: i,
          placeholder: g(`#QAndA_EnterNamePrompt`),
          onFocus: (e) => e.target.select(),
          onChange: (e) => a(e.currentTarget.value),
          maxLength: wt,
        }),
        (0, Q.jsx)(de, {
          onClick: l,
          className: I,
          children: g(`#Button_Save`),
        }),
      ],
    });
  return (0, Q.jsx)(`div`, {
    className: C(Y, n && `drUbIttMg3s-`),
    onClick: c,
    children: n ? d : u,
  });
}
function Ot(e) {
  let { qanda: t } = e,
    n = Te();
  return (0, Q.jsxs)(ie, {
    strTitle: g(`#QAndA_Column_DeleteButtons`),
    strDescription: g(`#QAndA_DeleteQAndA_Instructions`),
    onOK: () => n(t.gidSession),
    closeModal: e.closeModal,
    className: bt,
    children: [
      (0, Q.jsx)(`div`, {
        className: Z,
        children: g(`#QAndA_Column_Name`) + `: ` + t.strName,
      }),
      (0, Q.jsx)(`div`, {
        className: Z,
        children:
          g(`#QAndA_Column_QuestionCount`) + `: ` + t.rgQuestionGIDs.length,
      }),
    ],
  });
}
function $(e) {
  let {
      gidSession: t,
      gidQuestion: n,
      bUserCanModerate: r,
      bUserCanVote: i,
      fnVoteOnQuestion: a,
      rtNow: o,
    } = e,
    [s, c] = be(n);
  if (!s) return null;
  let u = o - s.rtPostTime,
    d = u < le.PerDay ? ce(u) : ue(s.rtPostTime),
    ee = i ? () => a(n, !s.bUserUpVoted) : null,
    f = i ? (s.bUserUpVoted ? nt : tt) : it,
    p = C(
      Ke,
      s.eState == 3 && `izbX9Bk-ctQ-`,
      s.eState == 1 && void 0,
      s.eState == 0 && void 0,
      s.eState == 2 && void 0,
    );
  return (0, Q.jsxs)(`div`, {
    className: p,
    children: [
      (0, Q.jsxs)(`div`, {
        className: C(Je, `questionCtn`),
        children: [
          (0, Q.jsx)(At, { accountID: s.posterAccountID }),
          (0, Q.jsxs)(`div`, {
            className: Ze,
            children: [
              (0, Q.jsxs)(`div`, {
                className: Qe,
                children: [
                  (0, Q.jsx)(`div`, {
                    className: $e,
                    children: s.strQuestionText,
                  }),
                  (0, Q.jsx)(b, {
                    toolTipContent:
                      i &&
                      (s.bUserUpVoted
                        ? g(`#QAndA_VoteRemoveTooltip`)
                        : g(`#QAndA_VoteTooltip`)),
                    children: (0, Q.jsxs)(`div`, {
                      className: C(f, et),
                      onClick: ee,
                      children: [
                        (0, Q.jsx)(fe, { className: rt }),
                        (0, Q.jsx)(`div`, {
                          className: void 0,
                          children: te(Number(s.nVoteCount)),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, Q.jsx)(`div`, {
                className: B,
                children: (0, Q.jsx)(`div`, {
                  className: V,
                  children: (0, Q.jsx)(l, {
                    rtFullDate: s.rtPostTime,
                    className: V,
                    stylesmodule: Ee,
                    children: d,
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
      s.rtAnswerTime && (0, Q.jsx)(kt, { question: s, rtNow: o }),
      r && (0, Q.jsx)(jt, { gidSession: t, gidQuestion: n, eState: s?.eState }),
    ],
  });
}
function kt(e) {
  let { question: t, rtNow: n } = e,
    r = t.rtAnswerTime && n - t.rtAnswerTime,
    i = t.rtAnswerTime && (r < le.PerDay ? ce(r) : ue(t.rtAnswerTime));
  return t.strAnswerText
    ? (0, Q.jsxs)(`div`, {
        className: ot,
        children: [
          (0, Q.jsxs)(`div`, {
            className: H,
            children: [
              (0, Q.jsx)(`div`, {
                className: U,
                children: (0, Q.jsx)(d, { color: `#67c1f5` }),
              }),
              g(`#QAndA_ModeratorAnswerTitle`),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: st,
            children: [` `, t.strAnswerText, ` `],
          }),
          (0, Q.jsx)(`div`, {
            className: B,
            children: (0, Q.jsx)(l, {
              rtFullDate: t.rtAnswerTime,
              className: V,
              stylesmodule: Ee,
              children: i,
            }),
          }),
        ],
      })
    : (0, Q.jsxs)(`div`, {
        className: H,
        children: [
          (0, Q.jsx)(`div`, {
            className: U,
            children: (0, Q.jsx)(d, { color: `#67c1f5` }),
          }),
          g(`#QAndA_AlreadyAnsweredTitle`),
        ],
      });
}
function At(e) {
  let t = re.InitFromAccountID(e.accountID, v.EUNIVERSE).ConvertTo64BitString(),
    { isLoading: n, data: r } = u(e.accountID);
  return n
    ? null
    : (0, Q.jsx)(`a`, {
        href: r.GetCommunityProfileURL(),
        className: Xe,
        "data-miniprofile": `s` + t,
        children: r?.m_strPlayerName ?? t,
      });
}
function jt(e) {
  let { gidSession: t, gidQuestion: n, eState: r } = e,
    { fnAnswerQuestion: i, fnModerateQuestion: a } = xe(t),
    o = () => a(n, 1),
    s = () => a(n, 3),
    c = () => i(n, ``),
    l = r == 0 || r == 3,
    u = r != 3,
    d = r == 1;
  return (0, Q.jsxs)(`div`, {
    className: lt,
    children: [
      g(`#QAndA_ModeratorLabel`),
      (0, Q.jsx)(`div`, {
        className: W,
        children: (0, Q.jsx)(It, {
          strPrompt: g(`#QAndA_AnswerPrompt`),
          fnSubmit: (e) => i(n, e),
        }),
      }),
      (0, Q.jsxs)(`div`, {
        className: W,
        children: [
          g(`#QAndA_ModeratorOtherOptionsLabel`),
          (0, Q.jsx)(b, {
            toolTipContent: g(`#QAndA_ModerateApproveButton_ttip`),
            children: (0, Q.jsx)(h, {
              onClick: o,
              className: I,
              disabled: !l,
              children: g(`#QAndA_ModerateApproveButton`),
            }),
          }),
          (0, Q.jsx)(b, {
            toolTipContent: g(`#QAndA_ModerateHideButton_ttip`),
            children: (0, Q.jsx)(h, {
              onClick: s,
              className: I,
              disabled: !u,
              children: g(`#QAndA_ModerateHideButton`),
            }),
          }),
          (0, Q.jsx)(b, {
            toolTipContent: g(`#QAndA_QuickAnswerButton_ttip`),
            children: (0, Q.jsx)(h, {
              onClick: c,
              className: I,
              disabled: !d,
              children: g(`#QAndA_QuickAnswerButton`),
            }),
          }),
        ],
      }),
    ],
  });
}
function Mt(e) {
  let { gidSession: t } = e;
  _e();
  let { strName: n, bUserCanModerate: r } = O(t);
  return (0, Q.jsxs)(`div`, {
    className: De,
    children: [
      (0, Q.jsx)(`div`, {
        className: A,
        children: g(`#QAndA_Header`) + (n?.length > 0 ? `: ` + n : ``),
      }),
      (0, Q.jsxs)(`div`, {
        className: j,
        children: [
          (0, Q.jsx)(Pt, { gidSession: t, bHalfOfFullPage: r }),
          r && (0, Q.jsx)(Nt, { gidSession: t }),
        ],
      }),
    ],
  });
}
function Nt(e) {
  let { gidSession: t } = e,
    {
      bUserCanModerate: n,
      rgNewQuestionGIDs: r,
      rgHiddenQuestionGIDs: i,
    } = O(t),
    a = c(10);
  return n
    ? (0, Q.jsxs)(`div`, {
        className: C(N, P),
        children: [
          (0, Q.jsx)(pe, {
            title: g(`#QAndA_ModeratorViewHeader`),
            className: F,
            children: (0, Q.jsx)(`div`, {
              className: z,
              children: r.map((e) =>
                (0, Q.jsx)(
                  $,
                  {
                    gidSession: t,
                    gidQuestion: e,
                    bUserCanModerate: n,
                    bUserCanVote: !1,
                    rtNow: a,
                  },
                  e,
                ),
              ),
            }),
          }),
          (0, Q.jsx)(pe, {
            title: g(`#QAndA_HiddenQuestionsHeader`),
            className: Oe,
            bStartMinimized: !0,
            children: (0, Q.jsx)(`div`, {
              className: z,
              children: i.map((e) =>
                (0, Q.jsx)(
                  $,
                  {
                    gidSession: t,
                    gidQuestion: e,
                    bUserCanModerate: n,
                    bUserCanVote: !1,
                    rtNow: a,
                  },
                  e,
                ),
              ),
            }),
          }),
        ],
      })
    : null;
}
function Pt(e) {
  let { gidSession: t, bHalfOfFullPage: n } = e;
  _e();
  let {
      bIsLoaded: r,
      bUserCanAskQuestions: i,
      bUserCanModerate: o,
      fnAskQuestion: s,
      fnVoteOnQuestion: l,
      rgModeratedQuestionGIDs: u,
      rgAnsweredQuestionGIDs: d,
      rgNewQuestionGIDs: ee,
    } = O(t),
    { fnReload: te, bIsReloading: f } = ye(t),
    p = c(10),
    m = o && n,
    { fnModerateQuestion: ne } = xe(t);
  return (0, Q.jsxs)(`div`, {
    className: C(M, n && `jikb8cKLdwg-`),
    children: [
      (0, Q.jsxs)(`div`, {
        className: C(Me, m && `YASLZpdIsfU-`),
        children: [
          (0, Q.jsx)(h, {
            onClick: te,
            disabled: !r,
            className: C(I, ke, f && `_7zP2DXBFo3Y-`),
            children: (0, Q.jsx)(`div`, {
              className: void 0,
              children: (0, Q.jsx)(se, {}),
            }),
          }),
          m
            ? (0, Q.jsxs)(Q.Fragment, {
                children: [
                  g(`#QAndA_ModeratorLabelHeader`),
                  (0, Q.jsx)(b, {
                    toolTipContent: g(`#QAndA_ModerateHideAllButton_ttip`),
                    children: (0, Q.jsx)(h, {
                      onClick: async () => {
                        for (let e of [ee, u, d])
                          for (let t of e) await ne(t, 3);
                      },
                      className: I,
                      children: g(`#QAndA_ModerateHideAllButton`),
                    }),
                  }),
                ],
              })
            : i
              ? (0, Q.jsx)(Ft, { fnAskQuestion: s })
              : r && (0, Q.jsx)(Lt, {}),
        ],
      }),
      u.length + d.length == 0
        ? (0, Q.jsx)(`div`, {
            className: Ge,
            children: g(`#QAndA_NoQuestionsYet`),
          })
        : (0, Q.jsxs)(`div`, {
            className: Ve,
            children: [
              (0, Q.jsx)(`div`, {
                className: R,
                children: (0, Q.jsx)(`div`, { className: He }),
              }),
              (0, Q.jsx)(`div`, {
                className: z,
                children: r
                  ? u.map((e) =>
                      (0, Q.jsx)(
                        $,
                        {
                          gidSession: t,
                          gidQuestion: e,
                          bUserCanModerate: m,
                          bUserCanVote: i,
                          fnVoteOnQuestion: l,
                          rtNow: p,
                        },
                        e,
                      ),
                    )
                  : (0, Q.jsx)(a, { position: `center` }),
              }),
              d.length > 0 &&
                (0, Q.jsxs)(Q.Fragment, {
                  children: [
                    (0, Q.jsx)(`div`, {
                      className: `cua4C9nfXwM-`,
                      children: g(`#QAndA_AnsweredQuestionsHeader`),
                    }),
                    (0, Q.jsx)(`div`, {
                      className: `_42oBi1K5Go4-`,
                      children: d.map((e) =>
                        (0, Q.jsx)(
                          $,
                          {
                            gidSession: t,
                            gidQuestion: e,
                            bUserCanModerate: m,
                            bUserCanVote: i,
                            fnVoteOnQuestion: l,
                            rtNow: p,
                          },
                          e,
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
function Ft(e) {
  let [t, n] = w.useState(!1),
    r = o(`QuestionBox`);
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsx)(`div`, {
        className: L,
        children: g(`#QAndA_HeaderDescription`),
      }),
      (0, Q.jsx)(It, {
        strPrompt: g(`#QAndA_QuestionPrompt`),
        fnSubmit: async (t) => {
          let i = await e.fnAskQuestion(t);
          return (
            i == 1 &&
              !r.token.reason &&
              (n(!0),
              window.setTimeout(() => {
                r.token.reason || n(!1);
              }, 1e3)),
            i
          );
        },
      }),
      (0, Q.jsx)(`div`, {
        className: C(Ne, t && `l0ZS73yFCCg-`),
        children: g(`#QAndA_QuestionWasPosted`),
      }),
    ],
  });
}
function It(e) {
  let { strPrompt: t, fnSubmit: n } = e,
    [r, i] = w.useState(``),
    [o, s] = w.useState(!1);
  return (0, Q.jsx)(Q.Fragment, {
    children: (0, Q.jsxs)(`div`, {
      className: Le,
      children: [
        (0, Q.jsx)(ae, {
          type: `text`,
          placeholder: t,
          maxLength: 512,
          value: r,
          onChange: (e) => i(e.target.value),
        }),
        (0, Q.jsxs)(`div`, {
          className: ze,
          children: [
            o &&
              (0, Q.jsx)(`div`, {
                className: `MHDRZEocQLo-`,
                children: (0, Q.jsx)(a, { size: `small`, position: `center` }),
              }),
            (0, Q.jsx)(h, {
              onClick: async () => {
                (s(!0), (await n(r)) == 1 && i(``), s(!1));
              },
              disabled: o || !r,
              className: I,
              children: g(`#QAndA_SubmitCommentButton`),
            }),
          ],
        }),
      ],
    }),
  });
}
function Lt(e) {
  return (0, Q.jsxs)(`div`, {
    className: L,
    children: [
      (0, Q.jsx)(`div`, { className: Re, children: g(`#QAndA_LogInPrompt`) }),
      !y.logged_in &&
        (0, Q.jsx)(h, {
          onClick: me,
          className: C(`JOMsuYcfEgE-`, `KtfZY3EXbm4-`),
          children: g(`#Login_SignIn`),
        }),
    ],
  });
}
export { Mt as n, Pt as r, St as t };
