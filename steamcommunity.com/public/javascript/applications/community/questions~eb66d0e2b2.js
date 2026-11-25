/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./chunk~f025431ab0.js";
import { Pt as n, at as r, k as i } from "./chunk~01cfc309bf.js";
import { t as a } from "./chunk~eefd71512b.js";
import { t as o } from "./chunk~92931c6310.js";
import { f as s, i as c } from "./chunk~0111fcd096.js";
import { r as l, u } from "./chunk~ec644f97c6.js";
import { t as d } from "./chunk~d382bdf2cf.js";
import {
  Df as ee,
  Jl as te,
  Jo as f,
  Ki as ne,
  Kl as re,
  Lf as p,
  Lh as m,
  Qd as h,
  Rh as ie,
  Sc as ae,
  Tm as oe,
  Uo as se,
  Vi as ce,
  _t as le,
  ap as ue,
  as as de,
  bu as g,
  cd as _,
  cm as v,
  dl as fe,
  gf as pe,
  hf as me,
  hm as y,
  hs as b,
  mm as x,
  pm as S,
} from "./main.js";
import { t as he } from "./chunk~85f65a382b.js";
var C = e(n()),
  ge = [
    `mousemove`,
    `keypress`,
    `scroll`,
    `wheel`,
    `focusin`,
    `touchstart`,
    `touchmove`,
  ],
  _e = 2e3,
  w = class e {
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
      this.m_timer = window.setTimeout(t, _e);
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
      for (let t of ge) e.addEventListener(t, this.ResetFidgetTimer);
      return ((this.m_bAreEventListenersRegistered = !0), !0);
    }
    BUnregisterEventListeners() {
      if (!this.m_bAreEventListenersRegistered) return !1;
      let e = window;
      for (let t of ge) e.removeEventListener(t, this.ResetFidgetTimer);
      return ((this.m_bAreEventListenersRegistered = !1), !1);
    }
  };
ee([ie], w.prototype, `ResetFidgetTimer`, null);
function ve() {
  C.useEffect(() => {
    let e = w.Get().BRegisterEventListeners();
    return () => {
      e && w.Get().BUnregisterEventListeners();
    };
  }, []);
}
function ye(e) {
  let t = C.useRef(null),
    n = C.useCallback(() => {
      t.current &&= (t.current(), null);
    }, []);
  return (
    _(w.Get().GetCallbackList(), n),
    C.useEffect(() => () => {
      t.current = null;
    }),
    C.useCallback(
      (...n) => {
        w.Get().BIsUserFidgeting()
          ? (t.current = () => e(...n))
          : ((t.current = null), e(...n));
      },
      [e],
    )
  );
}
var T = e(i()),
  E = class e {
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
      let t = this.m_mapQAndAChangeCallbackList.get(e);
      return (
        t || ((t = new m()), this.m_mapQAndAChangeCallbackList.set(e, t)), t
      );
    }
    GetQuestionCallbackList(e) {
      let t = this.m_mapQuestionCallbackList.get(e);
      return (
        t || ((t = new m()), this.m_mapQuestionCallbackList.set(e, t)), t
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
      if (!y.logged_in || !v()) return 15;
      let t =
          x.COMMUNITY_BASE_URL +
          `questions/` +
          S.VANITY_ID +
          `/ajaxgetqandasforgroup`,
        n = {},
        r = null;
      try {
        let i = await T.default.get(t, { params: n, cancelToken: e?.token });
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
      let i = p(r);
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
      if (!y.logged_in || !v()) return 15;
      let n =
          x.COMMUNITY_BASE_URL +
          `questions/` +
          S.VANITY_ID +
          `/ajaxcreateqanda`,
        r = new FormData();
      (r.append(`sessionid`, v()), r.append(`name`, e));
      let i = null;
      try {
        let e = await T.default.post(n, r, {
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
      let a = p(i);
      return (
        console.error(`Could not create Q&A`, e, a.strErrorMsg, a),
        i?.response?.data?.success ?? 2
      );
    }
    async RenameSession(e, t, n) {
      if (!y.logged_in || !v()) return 15;
      let r =
          x.COMMUNITY_BASE_URL +
          `questions/` +
          S.VANITY_ID +
          `/ajaxrenameqanda/` +
          e,
        i = new FormData();
      (i.append(`sessionid`, v()), i.append(`name`, t));
      let a = null;
      try {
        let o = await T.default.post(r, i, {
          withCredentials: !0,
          cancelToken: n?.token,
        });
        if (o?.status == 200 && o.data?.success == 1) {
          let n = this.m_mapQAndASessions.get(e);
          return (
            n && ((n.strName = t), this.GetQAndACallbackList(e).Dispatch(n)),
            this.m_dashboardCallbackList.Dispatch(this.GetAllSessions()),
            1
          );
        }
        a = { response: o };
      } catch (e) {
        a = e;
      }
      let o = p(a);
      return (
        console.error(`Could not rename Q&A`, e, t, o.strErrorMsg, o),
        a?.response?.data?.success ?? 2
      );
    }
    async DeleteSession(e, t) {
      if (!y.logged_in || !v()) return 15;
      let n =
          x.COMMUNITY_BASE_URL +
          `questions/` +
          S.VANITY_ID +
          `/ajaxdeleteqanda/` +
          e,
        r = new FormData();
      r.append(`sessionid`, v());
      let i = null;
      try {
        let a = await T.default.post(n, r, {
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
      let a = p(i);
      return (
        console.error(`Could not delete Q&A`, e, a.strErrorMsg, a),
        i?.response?.data?.success ?? 2
      );
    }
    async LoadSession(e, t, n) {
      let r = this.m_mapQAndASessions.get(e),
        i =
          y.logged_in &&
          (!r ||
            r.bUserCanModerate ||
            this.m_rgPendingQuestionGIDs.length > 0 ||
            t)
            ? `/ajaxgetqandasessionforuser/`
            : `/ajaxgetqandasession/`,
        a = x.COMMUNITY_BASE_URL + `questions/` + S.VANITY_ID + i + e,
        o = {},
        s = null;
      try {
        let t = await T.default.get(a, { params: o, cancelToken: n?.token });
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
        s = { response: t };
      } catch (e) {
        s = e;
      }
      let c = p(s);
      return (
        console.error(`Could not load Q&A`, e, c.strErrorMsg, c),
        s?.response?.data?.success ?? 2
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
        !v() ||
        !this.m_mapQAndASessions.get(e)?.bUserCanAskQuestions
      )
        return 15;
      let r =
          x.COMMUNITY_BASE_URL +
          `questions/` +
          S.VANITY_ID +
          `/ajaxaskquestion/` +
          e,
        i = new FormData();
      (i.append(`sessionid`, v()), i.append(`question`, t));
      let a = null;
      try {
        let t = await T.default.post(r, i, {
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
      let o = p(a);
      return (
        console.error(`Could not upload question`, e, t, o.strErrorMsg, o),
        a?.response?.data?.success ?? 2
      );
    }
    async ModerateQuestion(e, t, n, r) {
      if (
        !y.logged_in ||
        !v() ||
        !this.m_mapQAndASessions.get(e)?.bUserCanModerate
      )
        return 15;
      if (n != 1 && n != 3) return 8;
      if (this.m_mapQuestions.get(t).eState == n) return 1;
      let i =
          x.COMMUNITY_BASE_URL +
          `questions/` +
          S.VANITY_ID +
          `/ajaxmoderatequestion/` +
          e,
        a = new FormData();
      (a.append(`sessionid`, v()),
        a.append(`gidquestion`, t),
        a.append(`action`, n == 1 ? `show` : `hide`));
      let o = null;
      try {
        let t = await T.default.post(i, a, {
          withCredentials: !0,
          cancelToken: r?.token,
        });
        if (t?.status == 200 && t.data?.success == 1)
          return (this.LoadSession(e, !0, r), 1);
        o = { response: t };
      } catch (e) {
        o = e;
      }
      let s = p(o);
      return (
        console.error(`Could not moderate question`, e, t, n, s.strErrorMsg, s),
        o?.response?.data?.success ?? 2
      );
    }
    async AnswerQuestion(e, t, n, r) {
      if (
        !y.logged_in ||
        !v() ||
        !this.m_mapQAndASessions.get(e)?.bUserCanAskQuestions
      )
        return 15;
      let i =
          x.COMMUNITY_BASE_URL +
          `questions/` +
          S.VANITY_ID +
          `/ajaxanswerquestion/` +
          e,
        a = new FormData();
      (a.append(`sessionid`, v()),
        a.append(`gidquestion`, t),
        a.append(`answer`, n));
      let o = null;
      try {
        let t = await T.default.post(i, a, {
          withCredentials: !0,
          cancelToken: r?.token,
        });
        if (t?.status == 200 && t.data?.success == 1)
          return (this.LoadSession(e, !0, r), 1);
        o = { response: t };
      } catch (e) {
        o = e;
      }
      let s = p(o);
      return (
        console.error(`Could not upload answer`, e, t, n, s.strErrorMsg, s),
        o?.response?.data?.success ?? 2
      );
    }
    async VoteOnQuestion(e, t, n, r) {
      if (
        !y.logged_in ||
        !v() ||
        !this.m_mapQAndASessions.get(e)?.bUserCanAskQuestions
      )
        return 15;
      let i = this.m_mapQuestions.get(t);
      if (!i) return 42;
      if (n === i.bUserUpVoted) return 1;
      let a = i.nVoteCount,
        o = a + (n ? 1 : -1);
      ((i = { ...i, nVoteCount: o, bUserUpVoted: n }),
        this.m_mapQuestions.set(t, i),
        this.GetQuestionCallbackList(t).Dispatch(i));
      let s =
          x.COMMUNITY_BASE_URL +
          `questions/` +
          S.VANITY_ID +
          `/ajaxvoteforquestion/` +
          e,
        c = new FormData();
      (c.append(`sessionid`, v()),
        c.append(`gidquestion`, t),
        c.append(`up`, n ? `1` : `0`));
      let l = null;
      try {
        let e = await T.default.post(s, c, {
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
      let u = p(l);
      return (
        console.error(`Could not upload vote`, e, t, n, u.strErrorMsg, u),
        l?.response?.data?.success ?? 2
      );
    }
  };
function be(e) {
  let t = o(`useQAndASession`),
    n = C.useCallback(
      async (n) =>
        E.Get().GetSession(e)?.bUserCanAskQuestions &&
        (await E.Get().AskNewQuestion(e, n, t)),
      [e, t],
    ),
    r = C.useCallback(
      (n, r) =>
        E.Get().GetSession(e)?.bUserCanAskQuestions &&
        E.Get().VoteOnQuestion(e, n, r, t),
      [e, t],
    ),
    i = C.useCallback(
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
          switch (E.Get().GetQuestion(t)?.eState) {
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
              E.Get().GetQuestion(t).nVoteCount -
              E.Get().GetQuestion(e).nVoteCount,
          ),
          c.sort(
            (e, t) =>
              E.Get().GetQuestion(t).rtAnswerTime -
              E.Get().GetQuestion(e).rtAnswerTime,
          ),
          l.sort(
            (e, t) =>
              E.Get().GetQuestion(t).rtPostTime -
              E.Get().GetQuestion(e).rtPostTime,
          ),
          u.sort(
            (e, t) =>
              E.Get().GetQuestion(t).rtPostTime -
              E.Get().GetQuestion(e).rtPostTime,
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
    [a, s] = C.useState(() => i(E.Get().GetSession(e))),
    c = C.useCallback((e) => s(i(e)), [i]);
  return (
    _(E.Get().GetQAndACallbackList(e), c),
    C.useEffect(() => {
      a.bIsLoaded || E.Get().LoadSession(e);
    }, [a.bIsLoaded, e]),
    a
  );
}
var D = null;
function xe(e) {
  let t = o(`useReloadFunction`),
    [n, r] = C.useState(!1),
    i = C.useCallback(() => {
      r(!0);
      let n = E.Get().LoadSession(e, !1, t);
      return (n.then(() => r(!1)), n);
    }, [e, t]),
    a = ye(i);
  return (
    C.useEffect(
      () =>
        D
          ? () => {}
          : ((D = window.setInterval(a, 1e4)), () => window.clearInterval(D)),
      [a],
    ),
    C.useMemo(() => ({ fnReload: i, bIsReloading: n }), [i, n])
  );
}
function Se(e) {
  let [t, n] = C.useState(E.Get().GetQuestion(e));
  _(E.Get().GetQuestionCallbackList(e), n);
  let [r, i] = C.useState(!!t);
  return [t, !!t || r];
}
function Ce(e) {
  let t = o(`useQuestionModeratorActions`),
    n = C.useCallback(
      (n, r) =>
        E.Get().GetSession(e)?.bUserCanModerate &&
        E.Get().AnswerQuestion(e, n, r, t),
      [e, t],
    ),
    r = C.useCallback(
      (n, r) =>
        E.Get().GetSession(e)?.bUserCanModerate &&
        E.Get().ModerateQuestion(e, n, r, t),
      [e, t],
    );
  return C.useMemo(
    () => ({ fnAnswerQuestion: n, fnModerateQuestion: r }),
    [n, r],
  );
}
function we() {
  let [e, t] = C.useState(E.Get().GetAllSessions());
  return (
    _(E.Get().GetDashboardCallbackList(), t),
    C.useEffect(() => {
      e.length == 0 && E.Get().LoadAllSessions();
    }, [e.length]),
    e
  );
}
function Te() {
  let e = o(`useCreateQAndAFn`);
  return C.useCallback((t) => E.Get().CreateNewSession(t, e), [e]);
}
function Ee() {
  let e = o(`useRenameQAndAFn`);
  return C.useCallback((t, n) => E.Get().RenameSession(t, n, e), [e]);
}
function De() {
  let e = o(`useDeleteQAndAFn`);
  return C.useCallback((t) => E.Get().DeleteSession(t, e), [e]);
}
var Oe = t({
    Answer: () => ot,
    AnswerCheck: () => U,
    AnswerText: () => st,
    AnswerTitle: () => H,
    AnsweredSectionHeader: () => F,
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
    ModeratorInstructions: () => P,
    ModeratorSection: () => lt,
    NameInput: () => X,
    NoQuestions: () => Ge,
    PersonaName: () => Xe,
    PostTime: () => V,
    Prompt: () => ht,
    QAColumns: () => A,
    QADashboardCtn: () => dt,
    QAFullPageView: () => O,
    QAHeader: () => Me,
    QAMainCtn: () => j,
    QAModeratorColumn: () => M,
    QAName: () => k,
    QASplitColumns: () => N,
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
  O = `XxT5V45htpY-`,
  k = `h-RxFCB6bAs-`,
  A = `HECwy-TVT6c-`,
  j = `_5yVQYMxy-JU-`,
  M = `B7Qs2tR7S98-`,
  N = `jikb8cKLdwg-`,
  P = `WbU1h886dW4-`,
  F = `cua4C9nfXwM-`,
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
    QAFullPageView: O,
    QAName: k,
    QAColumns: A,
    QAMainCtn: j,
    QAModeratorColumn: M,
    QASplitColumns: N,
    ModeratorInstructions: P,
    AnsweredSectionHeader: F,
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
  Q = r();
function St(e) {
  let t = we();
  return (0, Q.jsxs)(`div`, {
    className: dt,
    children: [
      (0, Q.jsx)(Ct, {}),
      (0, Q.jsxs)(`div`, {
        className: g(G, vt),
        children: [
          (0, Q.jsx)(`div`, {
            className: Y,
            children: h(`#QAndA_Column_Name`),
          }),
          (0, Q.jsx)(`div`, { className: K, children: h(`#QAndA_Column_GID`) }),
          (0, Q.jsx)(`div`, {
            className: q,
            children: h(`#QAndA_Column_QuestionCount`),
          }),
          (0, Q.jsx)(`div`, {
            className: J,
            children: h(`#QAndA_Column_DeleteButtons`),
          }),
        ],
      }),
      t.map((e) => (0, Q.jsx)(Et, { qanda: e }, e.gidSession)),
    ],
  });
}
function Ct(e) {
  let t = C.useCallback(
    () =>
      ne((0, Q.jsx)(Tt, {}), window, {
        strTitle: h(`#QAndA_CreateQAndA_Title`),
      }),
    [],
  );
  return (0, Q.jsxs)(`div`, {
    className: ft,
    children: [
      (0, Q.jsx)(`div`, { className: pt, children: h(`#QAndA_Dashboard`) }),
      (0, Q.jsx)(`div`, {
        className: mt,
        children: (0, Q.jsx)(f, {
          onClick: t,
          children: h(`#QAndA_CreateQAndA_Button`),
        }),
      }),
    ],
  });
}
var wt = 120;
function Tt(e) {
  let t = Te(),
    [n, r] = C.useState(``);
  return (0, Q.jsx)(ce, {
    strTitle: h(`#QAndA_CreateQAndA_Title`),
    strDescription: h(`#QAndA_CreateQAndA_Instructions`),
    strOKButtonText: h(`#Button_Create`),
    onOK: () => t(n),
    bOKDisabled: n.length == 0,
    closeModal: e.closeModal,
    className: yt,
    children: (0, Q.jsx)(se, {
      type: `text`,
      className: X,
      value: n,
      placeholder: h(`#QAndA_EnterNamePrompt`),
      onFocus: (e) => e.target.select(),
      onChange: (e) => r(e.currentTarget.value),
      maxLength: wt,
    }),
  });
}
function Et(e) {
  let { qanda: t } = e,
    n =
      x.COMMUNITY_BASE_URL +
      `questions/` +
      S.VANITY_ID +
      `/view/` +
      t.gidSession,
    r = C.useCallback(
      (e) => {
        (e.stopPropagation(),
          e.preventDefault(),
          ne((0, Q.jsx)(Ot, { qanda: t }), window, {
            strTitle: h(`#QAndA_CreateQAndA_Title`),
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
          children: (0, Q.jsx)(te, {}),
        }),
      }),
    ],
  });
}
function Dt(e) {
  let { qanda: t } = e,
    [n, r] = C.useState(!1),
    [i, a] = C.useState(t.strName),
    o = Ee(),
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
            children: h(`#QAndA_EnterNamePrompt`),
          }),
    d = (0, Q.jsxs)(`div`, {
      className: X,
      children: [
        (0, Q.jsx)(se, {
          type: `text`,
          className: X,
          value: i,
          placeholder: h(`#QAndA_EnterNamePrompt`),
          onFocus: (e) => e.target.select(),
          onChange: (e) => a(e.currentTarget.value),
          maxLength: wt,
        }),
        (0, Q.jsx)(de, {
          onClick: l,
          className: I,
          children: h(`#Button_Save`),
        }),
      ],
    });
  return (0, Q.jsx)(`div`, {
    className: g(Y, n && `drUbIttMg3s-`),
    onClick: c,
    children: n ? d : u,
  });
}
function Ot(e) {
  let { qanda: t } = e,
    n = De();
  return (0, Q.jsxs)(ce, {
    strTitle: h(`#QAndA_Column_DeleteButtons`),
    strDescription: h(`#QAndA_DeleteQAndA_Instructions`),
    onOK: () => n(t.gidSession),
    closeModal: e.closeModal,
    className: bt,
    children: [
      (0, Q.jsx)(`div`, {
        className: Z,
        children: h(`#QAndA_Column_Name`) + `: ` + t.strName,
      }),
      (0, Q.jsx)(`div`, {
        className: Z,
        children:
          h(`#QAndA_Column_QuestionCount`) + `: ` + t.rgQuestionGIDs.length,
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
    [s, c] = Se(n);
  if (!s) return null;
  let l = o - s.rtPostTime,
    d = l < ue.PerDay ? pe(l) : me(s.rtPostTime),
    ee = i ? () => a(n, !s.bUserUpVoted) : null,
    te = i ? (s.bUserUpVoted ? nt : tt) : it,
    f = g(
      Ke,
      s.eState == 3 && `izbX9Bk-ctQ-`,
      s.eState == 1 && void 0,
      s.eState == 0 && void 0,
      s.eState == 2 && void 0,
    );
  return (0, Q.jsxs)(`div`, {
    className: f,
    children: [
      (0, Q.jsxs)(`div`, {
        className: g(Je, `questionCtn`),
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
                        ? h(`#QAndA_VoteRemoveTooltip`)
                        : h(`#QAndA_VoteTooltip`)),
                    children: (0, Q.jsxs)(`div`, {
                      className: g(te, et),
                      onClick: ee,
                      children: [
                        (0, Q.jsx)(re, { className: rt }),
                        (0, Q.jsx)(`div`, {
                          className: void 0,
                          children: le(Number(s.nVoteCount)),
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
                  children: (0, Q.jsx)(u, {
                    rtFullDate: s.rtPostTime,
                    className: V,
                    stylesmodule: Oe,
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
    i = t.rtAnswerTime && (r < ue.PerDay ? pe(r) : me(t.rtAnswerTime));
  return t.strAnswerText
    ? (0, Q.jsxs)(`div`, {
        className: ot,
        children: [
          (0, Q.jsxs)(`div`, {
            className: H,
            children: [
              (0, Q.jsx)(`div`, {
                className: U,
                children: (0, Q.jsx)(ae, { color: `#67c1f5` }),
              }),
              h(`#QAndA_ModeratorAnswerTitle`),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: st,
            children: [` `, t.strAnswerText, ` `],
          }),
          (0, Q.jsx)(`div`, {
            className: B,
            children: (0, Q.jsx)(u, {
              rtFullDate: t.rtAnswerTime,
              className: V,
              stylesmodule: Oe,
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
            children: (0, Q.jsx)(ae, { color: `#67c1f5` }),
          }),
          h(`#QAndA_AlreadyAnsweredTitle`),
        ],
      });
}
function At(e) {
  let t = oe.InitFromAccountID(e.accountID, x.EUNIVERSE).ConvertTo64BitString(),
    { isLoading: n, data: r } = d(e.accountID);
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
    { fnAnswerQuestion: i, fnModerateQuestion: a } = Ce(t),
    o = () => a(n, 1),
    s = () => a(n, 3),
    c = () => i(n, ``),
    l = r == 0 || r == 3,
    u = r != 3,
    d = r == 1;
  return (0, Q.jsxs)(`div`, {
    className: lt,
    children: [
      h(`#QAndA_ModeratorLabel`),
      (0, Q.jsx)(`div`, {
        className: W,
        children: (0, Q.jsx)(It, {
          strPrompt: h(`#QAndA_AnswerPrompt`),
          fnSubmit: (e) => i(n, e),
        }),
      }),
      (0, Q.jsxs)(`div`, {
        className: W,
        children: [
          h(`#QAndA_ModeratorOtherOptionsLabel`),
          (0, Q.jsx)(b, {
            toolTipContent: h(`#QAndA_ModerateApproveButton_ttip`),
            children: (0, Q.jsx)(f, {
              onClick: o,
              className: I,
              disabled: !l,
              children: h(`#QAndA_ModerateApproveButton`),
            }),
          }),
          (0, Q.jsx)(b, {
            toolTipContent: h(`#QAndA_ModerateHideButton_ttip`),
            children: (0, Q.jsx)(f, {
              onClick: s,
              className: I,
              disabled: !u,
              children: h(`#QAndA_ModerateHideButton`),
            }),
          }),
          (0, Q.jsx)(b, {
            toolTipContent: h(`#QAndA_QuickAnswerButton_ttip`),
            children: (0, Q.jsx)(f, {
              onClick: c,
              className: I,
              disabled: !d,
              children: h(`#QAndA_QuickAnswerButton`),
            }),
          }),
        ],
      }),
    ],
  });
}
function Mt(e) {
  let { gidSession: t } = e;
  ve();
  let { strName: n, bUserCanModerate: r } = be(t);
  return (0, Q.jsxs)(`div`, {
    className: O,
    children: [
      (0, Q.jsx)(`div`, {
        className: k,
        children: h(`#QAndA_Header`) + (n?.length > 0 ? `: ` + n : ``),
      }),
      (0, Q.jsxs)(`div`, {
        className: A,
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
    } = be(t),
    a = c(10);
  return n
    ? (0, Q.jsxs)(`div`, {
        className: g(M, N),
        children: [
          (0, Q.jsx)(l, {
            title: h(`#QAndA_ModeratorViewHeader`),
            className: P,
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
          (0, Q.jsx)(l, {
            title: h(`#QAndA_HiddenQuestionsHeader`),
            className: F,
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
  ve();
  let {
      bIsLoaded: r,
      bUserCanAskQuestions: i,
      bUserCanModerate: o,
      fnAskQuestion: s,
      fnVoteOnQuestion: l,
      rgModeratedQuestionGIDs: u,
      rgAnsweredQuestionGIDs: d,
      rgNewQuestionGIDs: ee,
    } = be(t),
    { fnReload: te, bIsReloading: ne } = xe(t),
    re = c(10),
    p = o && n,
    { fnModerateQuestion: m } = Ce(t);
  return (0, Q.jsxs)(`div`, {
    className: g(j, n && `jikb8cKLdwg-`),
    children: [
      (0, Q.jsxs)(`div`, {
        className: g(Me, p && `YASLZpdIsfU-`),
        children: [
          (0, Q.jsx)(f, {
            onClick: te,
            disabled: !r,
            className: g(I, ke, ne && `_7zP2DXBFo3Y-`),
            children: (0, Q.jsx)(`div`, {
              className: void 0,
              children: (0, Q.jsx)(fe, {}),
            }),
          }),
          p
            ? (0, Q.jsxs)(Q.Fragment, {
                children: [
                  h(`#QAndA_ModeratorLabelHeader`),
                  (0, Q.jsx)(b, {
                    toolTipContent: h(`#QAndA_ModerateHideAllButton_ttip`),
                    children: (0, Q.jsx)(f, {
                      onClick: async () => {
                        for (let e of [ee, u, d])
                          for (let t of e) await m(t, 3);
                      },
                      className: I,
                      children: h(`#QAndA_ModerateHideAllButton`),
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
            children: h(`#QAndA_NoQuestionsYet`),
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
                          bUserCanModerate: p,
                          bUserCanVote: i,
                          fnVoteOnQuestion: l,
                          rtNow: re,
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
                      children: h(`#QAndA_AnsweredQuestionsHeader`),
                    }),
                    (0, Q.jsx)(`div`, {
                      className: `_42oBi1K5Go4-`,
                      children: d.map((e) =>
                        (0, Q.jsx)(
                          $,
                          {
                            gidSession: t,
                            gidQuestion: e,
                            bUserCanModerate: p,
                            bUserCanVote: i,
                            fnVoteOnQuestion: l,
                            rtNow: re,
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
  let [t, n] = C.useState(!1),
    r = o(`QuestionBox`);
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsx)(`div`, {
        className: L,
        children: h(`#QAndA_HeaderDescription`),
      }),
      (0, Q.jsx)(It, {
        strPrompt: h(`#QAndA_QuestionPrompt`),
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
        className: g(Ne, t && `l0ZS73yFCCg-`),
        children: h(`#QAndA_QuestionWasPosted`),
      }),
    ],
  });
}
function It(e) {
  let { strPrompt: t, fnSubmit: n } = e,
    [r, i] = C.useState(``),
    [o, s] = C.useState(!1);
  return (0, Q.jsx)(Q.Fragment, {
    children: (0, Q.jsxs)(`div`, {
      className: Le,
      children: [
        (0, Q.jsx)(se, {
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
            (0, Q.jsx)(f, {
              onClick: async () => {
                (s(!0), (await n(r)) == 1 && i(``), s(!1));
              },
              disabled: o || !r,
              className: I,
              children: h(`#QAndA_SubmitCommentButton`),
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
      (0, Q.jsx)(`div`, { className: Re, children: h(`#QAndA_LogInPrompt`) }),
      !y.logged_in &&
        (0, Q.jsx)(f, {
          onClick: he,
          className: g(`JOMsuYcfEgE-`, `KtfZY3EXbm4-`),
          children: h(`#Login_SignIn`),
        }),
    ],
  });
}
export { Mt as n, Pt as r, St as t };
