/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./chunk~f025431ab0.js";
import { A as n, Ft as r, ot as i } from "./chunk~01cfc309bf.js";
import { t as a } from "./chunk~eefd71512b.js";
import { t as o } from "./chunk~92931c6310.js";
import { f as s, i as c } from "./chunk~0111fcd096.js";
import { r as l, u } from "./chunk~ec644f97c6.js";
import { t as d } from "./chunk~d382bdf2cf.js";
import {
  Ct as ee,
  Eu as f,
  Hh as p,
  Nf as te,
  Oc as m,
  Qi as h,
  Ql as ne,
  Sf as re,
  Uf as g,
  Uh as ie,
  Yo as ae,
  _l as oe,
  bm as _,
  dp as se,
  ds as ce,
  es as v,
  eu as le,
  if as y,
  jm as ue,
  md as b,
  mm as x,
  qi as de,
  xf as fe,
  xm as S,
  xs as C,
  ym as w,
} from "./main.js";
import { t as pe } from "./chunk~85f65a382b.js";
var T = e(r()),
  me = [
    `mousemove`,
    `keypress`,
    `scroll`,
    `wheel`,
    `focusin`,
    `touchstart`,
    `touchmove`,
  ],
  he = 2e3,
  E = class e {
    m_callbackList = new p();
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
      this.m_timer = window.setTimeout(t, he);
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
      for (let t of me) e.addEventListener(t, this.ResetFidgetTimer);
      return ((this.m_bAreEventListenersRegistered = !0), !0);
    }
    BUnregisterEventListeners() {
      if (!this.m_bAreEventListenersRegistered) return !1;
      let e = window;
      for (let t of me) e.removeEventListener(t, this.ResetFidgetTimer);
      return ((this.m_bAreEventListenersRegistered = !1), !1);
    }
  };
te([ie], E.prototype, `ResetFidgetTimer`, null);
function ge() {
  T.useEffect(() => {
    let e = E.Get().BRegisterEventListeners();
    return () => {
      e && E.Get().BUnregisterEventListeners();
    };
  }, []);
}
function _e(e) {
  let t = T.useRef(null),
    n = T.useCallback(() => {
      t.current &&= (t.current(), null);
    }, []);
  return (
    b(E.Get().GetCallbackList(), n),
    T.useEffect(() => () => {
      t.current = null;
    }),
    T.useCallback(
      (...n) => {
        E.Get().BIsUserFidgeting()
          ? (t.current = () => e(...n))
          : ((t.current = null), e(...n));
      },
      [e],
    )
  );
}
var D = e(n()),
  O = class e {
    m_mapQAndASessions = new Map();
    m_mapQAndAChangeCallbackList = new Map();
    m_dashboardCallbackList = new p();
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
        t || ((t = new p()), this.m_mapQAndAChangeCallbackList.set(e, t)), t
      );
    }
    GetQuestionCallbackList(e) {
      let t = this.m_mapQuestionCallbackList.get(e);
      return (
        t || ((t = new p()), this.m_mapQuestionCallbackList.set(e, t)), t
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
      if (!S.logged_in || !x()) return 15;
      let t =
          _.COMMUNITY_BASE_URL +
          `questions/` +
          w.VANITY_ID +
          `/ajaxgetqandasforgroup`,
        n = {},
        r = null;
      try {
        let i = await D.default.get(t, { params: n, cancelToken: e?.token });
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
      let i = g(r);
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
      if (!S.logged_in || !x()) return 15;
      let n =
          _.COMMUNITY_BASE_URL +
          `questions/` +
          w.VANITY_ID +
          `/ajaxcreateqanda`,
        r = new FormData();
      (r.append(`sessionid`, x()), r.append(`name`, e));
      let i = null;
      try {
        let e = await D.default.post(n, r, {
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
      let a = g(i);
      return (
        console.error(`Could not create Q&A`, e, a.strErrorMsg, a),
        i?.response?.data?.success ?? 2
      );
    }
    async RenameSession(e, t, n) {
      if (!S.logged_in || !x()) return 15;
      let r =
          _.COMMUNITY_BASE_URL +
          `questions/` +
          w.VANITY_ID +
          `/ajaxrenameqanda/` +
          e,
        i = new FormData();
      (i.append(`sessionid`, x()), i.append(`name`, t));
      let a = null;
      try {
        let o = await D.default.post(r, i, {
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
      let o = g(a);
      return (
        console.error(`Could not rename Q&A`, e, t, o.strErrorMsg, o),
        a?.response?.data?.success ?? 2
      );
    }
    async DeleteSession(e, t) {
      if (!S.logged_in || !x()) return 15;
      let n =
          _.COMMUNITY_BASE_URL +
          `questions/` +
          w.VANITY_ID +
          `/ajaxdeleteqanda/` +
          e,
        r = new FormData();
      r.append(`sessionid`, x());
      let i = null;
      try {
        let a = await D.default.post(n, r, {
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
      let a = g(i);
      return (
        console.error(`Could not delete Q&A`, e, a.strErrorMsg, a),
        i?.response?.data?.success ?? 2
      );
    }
    async LoadSession(e, t, n) {
      let r = this.m_mapQAndASessions.get(e),
        i =
          S.logged_in &&
          (!r ||
            r.bUserCanModerate ||
            this.m_rgPendingQuestionGIDs.length > 0 ||
            t)
            ? `/ajaxgetqandasessionforuser/`
            : `/ajaxgetqandasession/`,
        a = _.COMMUNITY_BASE_URL + `questions/` + w.VANITY_ID + i + e,
        o = {},
        s = null;
      try {
        let t = await D.default.get(a, { params: o, cancelToken: n?.token });
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
      let c = g(s);
      return (
        console.error(`Could not load Q&A`, e, c.strErrorMsg, c),
        s?.response?.data?.success ?? 2
      );
    }
    UpdatePendingQuestionList(e) {
      let t = new Set();
      for (let n of e) {
        let e = this.m_mapQuestions.get(n);
        e.posterAccountID == S.accountid &&
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
        !S.logged_in ||
        !x() ||
        !this.m_mapQAndASessions.get(e)?.bUserCanAskQuestions
      )
        return 15;
      let r =
          _.COMMUNITY_BASE_URL +
          `questions/` +
          w.VANITY_ID +
          `/ajaxaskquestion/` +
          e,
        i = new FormData();
      (i.append(`sessionid`, x()), i.append(`question`, t));
      let a = null;
      try {
        let t = await D.default.post(r, i, {
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
      let o = g(a);
      return (
        console.error(`Could not upload question`, e, t, o.strErrorMsg, o),
        a?.response?.data?.success ?? 2
      );
    }
    async ModerateQuestion(e, t, n, r) {
      if (
        !S.logged_in ||
        !x() ||
        !this.m_mapQAndASessions.get(e)?.bUserCanModerate
      )
        return 15;
      if (n != 1 && n != 3) return 8;
      if (this.m_mapQuestions.get(t).eState == n) return 1;
      let i =
          _.COMMUNITY_BASE_URL +
          `questions/` +
          w.VANITY_ID +
          `/ajaxmoderatequestion/` +
          e,
        a = new FormData();
      (a.append(`sessionid`, x()),
        a.append(`gidquestion`, t),
        a.append(`action`, n == 1 ? `show` : `hide`));
      let o = null;
      try {
        let t = await D.default.post(i, a, {
          withCredentials: !0,
          cancelToken: r?.token,
        });
        if (t?.status == 200 && t.data?.success == 1)
          return (this.LoadSession(e, !0, r), 1);
        o = { response: t };
      } catch (e) {
        o = e;
      }
      let s = g(o);
      return (
        console.error(`Could not moderate question`, e, t, n, s.strErrorMsg, s),
        o?.response?.data?.success ?? 2
      );
    }
    async AnswerQuestion(e, t, n, r) {
      if (
        !S.logged_in ||
        !x() ||
        !this.m_mapQAndASessions.get(e)?.bUserCanAskQuestions
      )
        return 15;
      let i =
          _.COMMUNITY_BASE_URL +
          `questions/` +
          w.VANITY_ID +
          `/ajaxanswerquestion/` +
          e,
        a = new FormData();
      (a.append(`sessionid`, x()),
        a.append(`gidquestion`, t),
        a.append(`answer`, n));
      let o = null;
      try {
        let t = await D.default.post(i, a, {
          withCredentials: !0,
          cancelToken: r?.token,
        });
        if (t?.status == 200 && t.data?.success == 1)
          return (this.LoadSession(e, !0, r), 1);
        o = { response: t };
      } catch (e) {
        o = e;
      }
      let s = g(o);
      return (
        console.error(`Could not upload answer`, e, t, n, s.strErrorMsg, s),
        o?.response?.data?.success ?? 2
      );
    }
    async VoteOnQuestion(e, t, n, r) {
      if (
        !S.logged_in ||
        !x() ||
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
          _.COMMUNITY_BASE_URL +
          `questions/` +
          w.VANITY_ID +
          `/ajaxvoteforquestion/` +
          e,
        c = new FormData();
      (c.append(`sessionid`, x()),
        c.append(`gidquestion`, t),
        c.append(`up`, n ? `1` : `0`));
      let l = null;
      try {
        let e = await D.default.post(s, c, {
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
      let u = g(l);
      return (
        console.error(`Could not upload vote`, e, t, n, u.strErrorMsg, u),
        l?.response?.data?.success ?? 2
      );
    }
  };
function k(e) {
  let t = o(`useQAndASession`),
    n = T.useCallback(
      async (n) =>
        O.Get().GetSession(e)?.bUserCanAskQuestions &&
        (await O.Get().AskNewQuestion(e, n, t)),
      [e, t],
    ),
    r = T.useCallback(
      (n, r) =>
        O.Get().GetSession(e)?.bUserCanAskQuestions &&
        O.Get().VoteOnQuestion(e, n, r, t),
      [e, t],
    ),
    i = T.useCallback(
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
          switch (O.Get().GetQuestion(t)?.eState) {
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
              O.Get().GetQuestion(t).nVoteCount -
              O.Get().GetQuestion(e).nVoteCount,
          ),
          c.sort(
            (e, t) =>
              O.Get().GetQuestion(t).rtAnswerTime -
              O.Get().GetQuestion(e).rtAnswerTime,
          ),
          l.sort(
            (e, t) =>
              O.Get().GetQuestion(t).rtPostTime -
              O.Get().GetQuestion(e).rtPostTime,
          ),
          u.sort(
            (e, t) =>
              O.Get().GetQuestion(t).rtPostTime -
              O.Get().GetQuestion(e).rtPostTime,
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
    [a, s] = T.useState(() => i(O.Get().GetSession(e))),
    c = T.useCallback((e) => s(i(e)), [i]);
  return (
    b(O.Get().GetQAndACallbackList(e), c),
    T.useEffect(() => {
      a.bIsLoaded || O.Get().LoadSession(e);
    }, [a.bIsLoaded, e]),
    a
  );
}
var ve = null;
function ye(e) {
  let t = o(`useReloadFunction`),
    [n, r] = T.useState(!1),
    i = T.useCallback(() => {
      r(!0);
      let n = O.Get().LoadSession(e, !1, t);
      return (n.then(() => r(!1)), n);
    }, [e, t]),
    a = _e(i);
  return (
    T.useEffect(
      () =>
        ve
          ? () => {}
          : ((ve = window.setInterval(a, 1e4)), () => window.clearInterval(ve)),
      [a],
    ),
    T.useMemo(() => ({ fnReload: i, bIsReloading: n }), [i, n])
  );
}
function be(e) {
  let [t, n] = T.useState(O.Get().GetQuestion(e));
  b(O.Get().GetQuestionCallbackList(e), n);
  let [r, i] = T.useState(!!t);
  return [t, !!t || r];
}
function xe(e) {
  let t = o(`useQuestionModeratorActions`),
    n = T.useCallback(
      (n, r) =>
        O.Get().GetSession(e)?.bUserCanModerate &&
        O.Get().AnswerQuestion(e, n, r, t),
      [e, t],
    ),
    r = T.useCallback(
      (n, r) =>
        O.Get().GetSession(e)?.bUserCanModerate &&
        O.Get().ModerateQuestion(e, n, r, t),
      [e, t],
    );
  return T.useMemo(
    () => ({ fnAnswerQuestion: n, fnModerateQuestion: r }),
    [n, r],
  );
}
function Se() {
  let [e, t] = T.useState(O.Get().GetAllSessions());
  return (
    b(O.Get().GetDashboardCallbackList(), t),
    T.useEffect(() => {
      e.length == 0 && O.Get().LoadAllSessions();
    }, [e.length]),
    e
  );
}
function Ce() {
  let e = o(`useCreateQAndAFn`);
  return T.useCallback((t) => O.Get().CreateNewSession(t, e), [e]);
}
function we() {
  let e = o(`useRenameQAndAFn`);
  return T.useCallback((t, n) => O.Get().RenameSession(t, n, e), [e]);
}
function Te() {
  let e = o(`useDeleteQAndAFn`);
  return T.useCallback((t) => O.Get().DeleteSession(t, e), [e]);
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
    ModeratorInstructions: () => De,
    ModeratorSection: () => lt,
    NameInput: () => X,
    NoQuestions: () => Ge,
    PersonaName: () => Xe,
    PostTime: () => V,
    Prompt: () => ht,
    QAColumns: () => M,
    QADashboardCtn: () => dt,
    QAFullPageView: () => A,
    QAHeader: () => Me,
    QAMainCtn: () => N,
    QAModeratorColumn: () => P,
    QAName: () => j,
    QASplitColumns: () => F,
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
  A = `XxT5V45htpY-`,
  j = `h-RxFCB6bAs-`,
  M = `HECwy-TVT6c-`,
  N = `_5yVQYMxy-JU-`,
  P = `B7Qs2tR7S98-`,
  F = `jikb8cKLdwg-`,
  De = `WbU1h886dW4-`,
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
    QAFullPageView: A,
    QAName: j,
    QAColumns: M,
    QAMainCtn: N,
    QAModeratorColumn: P,
    QASplitColumns: F,
    ModeratorInstructions: De,
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
        className: f(G, vt),
        children: [
          (0, Q.jsx)(`div`, {
            className: Y,
            children: y(`#QAndA_Column_Name`),
          }),
          (0, Q.jsx)(`div`, { className: K, children: y(`#QAndA_Column_GID`) }),
          (0, Q.jsx)(`div`, {
            className: q,
            children: y(`#QAndA_Column_QuestionCount`),
          }),
          (0, Q.jsx)(`div`, {
            className: J,
            children: y(`#QAndA_Column_DeleteButtons`),
          }),
        ],
      }),
      t.map((e) => (0, Q.jsx)(Et, { qanda: e }, e.gidSession)),
    ],
  });
}
function Ct(e) {
  let t = T.useCallback(
    () =>
      h((0, Q.jsx)(Tt, {}), window, {
        strTitle: y(`#QAndA_CreateQAndA_Title`),
      }),
    [],
  );
  return (0, Q.jsxs)(`div`, {
    className: ft,
    children: [
      (0, Q.jsx)(`div`, { className: pt, children: y(`#QAndA_Dashboard`) }),
      (0, Q.jsx)(`div`, {
        className: mt,
        children: (0, Q.jsx)(v, {
          onClick: t,
          children: y(`#QAndA_CreateQAndA_Button`),
        }),
      }),
    ],
  });
}
var wt = 120;
function Tt(e) {
  let t = Ce(),
    [n, r] = T.useState(``);
  return (0, Q.jsx)(de, {
    strTitle: y(`#QAndA_CreateQAndA_Title`),
    strDescription: y(`#QAndA_CreateQAndA_Instructions`),
    strOKButtonText: y(`#Button_Create`),
    onOK: () => t(n),
    bOKDisabled: n.length == 0,
    closeModal: e.closeModal,
    className: yt,
    children: (0, Q.jsx)(ae, {
      type: `text`,
      className: X,
      value: n,
      placeholder: y(`#QAndA_EnterNamePrompt`),
      onFocus: (e) => e.target.select(),
      onChange: (e) => r(e.currentTarget.value),
      maxLength: wt,
    }),
  });
}
function Et(e) {
  let { qanda: t } = e,
    n =
      _.COMMUNITY_BASE_URL +
      `questions/` +
      w.VANITY_ID +
      `/view/` +
      t.gidSession,
    r = T.useCallback(
      (e) => {
        (e.stopPropagation(),
          e.preventDefault(),
          h((0, Q.jsx)(Ot, { qanda: t }), window, {
            strTitle: y(`#QAndA_CreateQAndA_Title`),
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
          children: (0, Q.jsx)(le, {}),
        }),
      }),
    ],
  });
}
function Dt(e) {
  let { qanda: t } = e,
    [n, r] = T.useState(!1),
    [i, a] = T.useState(t.strName),
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
            children: y(`#QAndA_EnterNamePrompt`),
          }),
    d = (0, Q.jsxs)(`div`, {
      className: X,
      children: [
        (0, Q.jsx)(ae, {
          type: `text`,
          className: X,
          value: i,
          placeholder: y(`#QAndA_EnterNamePrompt`),
          onFocus: (e) => e.target.select(),
          onChange: (e) => a(e.currentTarget.value),
          maxLength: wt,
        }),
        (0, Q.jsx)(ce, {
          onClick: l,
          className: I,
          children: y(`#Button_Save`),
        }),
      ],
    });
  return (0, Q.jsx)(`div`, {
    className: f(Y, n && `drUbIttMg3s-`),
    onClick: c,
    children: n ? d : u,
  });
}
function Ot(e) {
  let { qanda: t } = e,
    n = Te();
  return (0, Q.jsxs)(de, {
    strTitle: y(`#QAndA_Column_DeleteButtons`),
    strDescription: y(`#QAndA_DeleteQAndA_Instructions`),
    onOK: () => n(t.gidSession),
    closeModal: e.closeModal,
    className: bt,
    children: [
      (0, Q.jsx)(`div`, {
        className: Z,
        children: y(`#QAndA_Column_Name`) + `: ` + t.strName,
      }),
      (0, Q.jsx)(`div`, {
        className: Z,
        children:
          y(`#QAndA_Column_QuestionCount`) + `: ` + t.rgQuestionGIDs.length,
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
  let l = o - s.rtPostTime,
    d = l < se.PerDay ? re(l) : fe(s.rtPostTime),
    p = i ? () => a(n, !s.bUserUpVoted) : null,
    te = i ? (s.bUserUpVoted ? nt : tt) : it,
    m = f(
      Ke,
      s.eState == 3 && `izbX9Bk-ctQ-`,
      s.eState == 1 && void 0,
      s.eState == 0 && void 0,
      s.eState == 2 && void 0,
    );
  return (0, Q.jsxs)(`div`, {
    className: m,
    children: [
      (0, Q.jsxs)(`div`, {
        className: f(Je, `questionCtn`),
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
                  (0, Q.jsx)(C, {
                    toolTipContent:
                      i &&
                      (s.bUserUpVoted
                        ? y(`#QAndA_VoteRemoveTooltip`)
                        : y(`#QAndA_VoteTooltip`)),
                    children: (0, Q.jsxs)(`div`, {
                      className: f(te, et),
                      onClick: p,
                      children: [
                        (0, Q.jsx)(ne, { className: rt }),
                        (0, Q.jsx)(`div`, {
                          className: void 0,
                          children: ee(Number(s.nVoteCount)),
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
    i = t.rtAnswerTime && (r < se.PerDay ? re(r) : fe(t.rtAnswerTime));
  return t.strAnswerText
    ? (0, Q.jsxs)(`div`, {
        className: ot,
        children: [
          (0, Q.jsxs)(`div`, {
            className: H,
            children: [
              (0, Q.jsx)(`div`, {
                className: U,
                children: (0, Q.jsx)(m, { color: `#67c1f5` }),
              }),
              y(`#QAndA_ModeratorAnswerTitle`),
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
            children: (0, Q.jsx)(m, { color: `#67c1f5` }),
          }),
          y(`#QAndA_AlreadyAnsweredTitle`),
        ],
      });
}
function At(e) {
  let t = ue.InitFromAccountID(e.accountID, _.EUNIVERSE).ConvertTo64BitString(),
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
      y(`#QAndA_ModeratorLabel`),
      (0, Q.jsx)(`div`, {
        className: W,
        children: (0, Q.jsx)(It, {
          strPrompt: y(`#QAndA_AnswerPrompt`),
          fnSubmit: (e) => i(n, e),
        }),
      }),
      (0, Q.jsxs)(`div`, {
        className: W,
        children: [
          y(`#QAndA_ModeratorOtherOptionsLabel`),
          (0, Q.jsx)(C, {
            toolTipContent: y(`#QAndA_ModerateApproveButton_ttip`),
            children: (0, Q.jsx)(v, {
              onClick: o,
              className: I,
              disabled: !l,
              children: y(`#QAndA_ModerateApproveButton`),
            }),
          }),
          (0, Q.jsx)(C, {
            toolTipContent: y(`#QAndA_ModerateHideButton_ttip`),
            children: (0, Q.jsx)(v, {
              onClick: s,
              className: I,
              disabled: !u,
              children: y(`#QAndA_ModerateHideButton`),
            }),
          }),
          (0, Q.jsx)(C, {
            toolTipContent: y(`#QAndA_QuickAnswerButton_ttip`),
            children: (0, Q.jsx)(v, {
              onClick: c,
              className: I,
              disabled: !d,
              children: y(`#QAndA_QuickAnswerButton`),
            }),
          }),
        ],
      }),
    ],
  });
}
function Mt(e) {
  let { gidSession: t } = e;
  ge();
  let { strName: n, bUserCanModerate: r } = k(t);
  return (0, Q.jsxs)(`div`, {
    className: A,
    children: [
      (0, Q.jsx)(`div`, {
        className: j,
        children: y(`#QAndA_Header`) + (n?.length > 0 ? `: ` + n : ``),
      }),
      (0, Q.jsxs)(`div`, {
        className: M,
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
    } = k(t),
    a = c(10);
  return n
    ? (0, Q.jsxs)(`div`, {
        className: f(P, F),
        children: [
          (0, Q.jsx)(l, {
            title: y(`#QAndA_ModeratorViewHeader`),
            className: De,
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
            title: y(`#QAndA_HiddenQuestionsHeader`),
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
  ge();
  let {
      bIsLoaded: r,
      bUserCanAskQuestions: i,
      bUserCanModerate: o,
      fnAskQuestion: s,
      fnVoteOnQuestion: l,
      rgModeratedQuestionGIDs: u,
      rgAnsweredQuestionGIDs: d,
      rgNewQuestionGIDs: ee,
    } = k(t),
    { fnReload: p, bIsReloading: te } = ye(t),
    m = c(10),
    h = o && n,
    { fnModerateQuestion: ne } = xe(t);
  return (0, Q.jsxs)(`div`, {
    className: f(N, n && `jikb8cKLdwg-`),
    children: [
      (0, Q.jsxs)(`div`, {
        className: f(Me, h && `YASLZpdIsfU-`),
        children: [
          (0, Q.jsx)(v, {
            onClick: p,
            disabled: !r,
            className: f(I, ke, te && `_7zP2DXBFo3Y-`),
            children: (0, Q.jsx)(`div`, {
              className: void 0,
              children: (0, Q.jsx)(oe, {}),
            }),
          }),
          h
            ? (0, Q.jsxs)(Q.Fragment, {
                children: [
                  y(`#QAndA_ModeratorLabelHeader`),
                  (0, Q.jsx)(C, {
                    toolTipContent: y(`#QAndA_ModerateHideAllButton_ttip`),
                    children: (0, Q.jsx)(v, {
                      onClick: async () => {
                        for (let e of [ee, u, d])
                          for (let t of e) await ne(t, 3);
                      },
                      className: I,
                      children: y(`#QAndA_ModerateHideAllButton`),
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
            children: y(`#QAndA_NoQuestionsYet`),
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
                          bUserCanModerate: h,
                          bUserCanVote: i,
                          fnVoteOnQuestion: l,
                          rtNow: m,
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
                      children: y(`#QAndA_AnsweredQuestionsHeader`),
                    }),
                    (0, Q.jsx)(`div`, {
                      className: `_42oBi1K5Go4-`,
                      children: d.map((e) =>
                        (0, Q.jsx)(
                          $,
                          {
                            gidSession: t,
                            gidQuestion: e,
                            bUserCanModerate: h,
                            bUserCanVote: i,
                            fnVoteOnQuestion: l,
                            rtNow: m,
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
  let [t, n] = T.useState(!1),
    r = o(`QuestionBox`);
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsx)(`div`, {
        className: L,
        children: y(`#QAndA_HeaderDescription`),
      }),
      (0, Q.jsx)(It, {
        strPrompt: y(`#QAndA_QuestionPrompt`),
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
        className: f(Ne, t && `l0ZS73yFCCg-`),
        children: y(`#QAndA_QuestionWasPosted`),
      }),
    ],
  });
}
function It(e) {
  let { strPrompt: t, fnSubmit: n } = e,
    [r, i] = T.useState(``),
    [o, s] = T.useState(!1);
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
            (0, Q.jsx)(v, {
              onClick: async () => {
                (s(!0), (await n(r)) == 1 && i(``), s(!1));
              },
              disabled: o || !r,
              className: I,
              children: y(`#QAndA_SubmitCommentButton`),
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
      (0, Q.jsx)(`div`, { className: Re, children: y(`#QAndA_LogInPrompt`) }),
      !S.logged_in &&
        (0, Q.jsx)(v, {
          onClick: pe,
          className: f(`JOMsuYcfEgE-`, `KtfZY3EXbm4-`),
          children: y(`#Login_SignIn`),
        }),
    ],
  });
}
export { Mt as n, Pt as r, St as t };
