/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { G as e, K as t, at as n } from "./chunk~01cfc309bf.js";
import {
  c as r,
  d as i,
  f as a,
  i as o,
  l as s,
  m as c,
  n as l,
  o as u,
  p as d,
  r as f,
  s as p,
  t as m,
} from "./chunk~93de6fa506.js";
import {
  A as h,
  M as g,
  N as _,
  P as v,
  S as y,
  j as b,
  nm as x,
  sh as S,
} from "./main.js";
var C = `get_reported_content`,
  w = `get_reported_content_by_id`,
  T = `get_reported_content_audit_log`,
  E = (e) => [C, JSON.stringify(e)],
  D = (e) => [w, e],
  O = (e) => [T, e];
async function k(e, t) {
  return Promise.all([
    e.invalidateQueries({ queryKey: [C], exact: !1 }),
    e.invalidateQueries({ queryKey: D(t) }),
    e.invalidateQueries({ queryKey: O(t) }),
  ]);
}
function A(e, t) {
  return {
    queryKey: E(t),
    enabled: v(t),
    queryFn: async () => {
      let n = S.Init(o);
      n.Body().set_coordinates(c.fromObject(t));
      let r = await a.GetReportedContent(e, n);
      if (!r.BSuccess())
        throw Error(`Failed in GetReportedContent, EResult: ` + r.GetEResult());
      return r.Body().toObject();
    },
  };
}
function j(e) {
  let n = x();
  return t(A(n, e));
}
function M(e) {
  return { subject_type: 3, published_file_id: e };
}
function N(e) {
  return E(M(e));
}
function P(e, t, n = !1) {
  return {
    queryKey: [...D(t), n],
    enabled: !!t,
    queryFn: async () => {
      let r = S.Init(f);
      (r.Body().set_reported_content_id(t),
        n && r.Body().set_include_reporter_account_status(!0));
      let i = await a.GetReportedContentByID(e, r);
      if (!i.BSuccess())
        throw Error(
          `Failed in GetReportedContentByID, EResult: ` + i.GetEResult(),
        );
      return i.Body().toObject();
    },
  };
}
function F(e, n = !1) {
  let r = x();
  return t(P(r, e, n));
}
function I(e, t) {
  return {
    queryKey: O(t),
    queryFn: async () => {
      if (!t) return;
      let n = S.Init(l);
      return (
        n.Body().set_reported_content_id(t),
        (await a.GetAuditLogByID(e, n)).Body().toObject()
      );
    },
  };
}
function L(e) {
  let n = x();
  return t(I(n, e));
}
function R(t) {
  let r = x(),
    i = n();
  return e({
    mutationFn: async (e) => {
      let n = S.Init(m);
      (n.Body().set_reported_content_id(t),
        n.Body().set_new_level(e.eNewLevel),
        e.eReason && n.Body().set_reason(e.eReason),
        e.strNote && n.Body().set_note(e.strNote));
      let i = await a.EscalateSubjectByID(r, n);
      if (i.GetEResult() !== 1)
        throw Error(`Failed to escalate subject: ${i.GetEMsg()}`);
    },
    onSuccess: async () => {
      await Promise.all([
        k(i, t),
        i.invalidateQueries({ queryKey: [`get_claimed`] }),
        i.invalidateQueries({ queryKey: [`get_subject_overview`] }),
      ]);
    },
  });
}
function z() {
  let t = x(),
    r = n();
  return e({
    mutationFn: async (e) => {
      let n = S.Init(s);
      n.Body().set_reported_content_id(e.reportedContentID);
      let r = await a.SustainModerationByID(t, n);
      if (!r.BSuccess()) throw Error(`EResult ` + r.GetEResult());
    },
    onSuccess: async (e, t) => {
      (await k(r, t.reportedContentID),
        await r.invalidateQueries({ queryKey: [`get_claimed`] }));
    },
  });
}
function B(t) {
  let i = n(),
    o = x();
  return e({
    mutationKey: [`release_subject`, ...t],
    mutationFn: async () => {
      let e = S.Init(r);
      for (let n of t) {
        let t = new d();
        (t.set_reported_content_id(n), e.Body().add_subjects_to_release(t));
      }
      let n = await a.ReleaseSubjects(o, e);
      if (!n.BSuccess()) throw Error(`EResult ` + n.GetEResult());
    },
    onSuccess: async () => {
      await Promise.all([
        i.invalidateQueries({ queryKey: [`get_claimed`] }),
        i.invalidateQueries({ queryKey: [`get_subject_overview`] }),
        ...t.map((e) => k(i, e)),
      ]);
    },
  });
}
function V(t, r) {
  let i = x(),
    o = n();
  return e({
    mutationFn: async () => {
      let e = S.Init(p);
      (e.Body().set_reported_content_id(t), e.Body().set_details(r));
      let n = await a.OwnerDisputeModeration(i, e);
      if (!n.BSuccess()) throw Error(`EResult ` + n.GetEResult());
    },
    onSuccess: async () => {
      await k(o, t);
    },
  });
}
function H(t, r) {
  let o = n(),
    s = x();
  return e({
    mutationFn: async () => {
      let e = S.Init(i);
      (e.Body().set_reported_content_id(t),
        e.Body().set_owner_dispute_details(r));
      let n = await a.UpdateSubjectByID(s, e);
      if (!n.BSuccess()) throw Error(`EResult ` + n.GetEResult());
    },
    onSuccess: async () => {
      await k(o, t);
    },
  });
}
function U(e, t) {
  return {
    queryKey: [`reporterstats`, t],
    queryFn: async () => {
      let n = S.Init(u);
      n.Body().set_steamid(t);
      let r = await a.GetReporterStats(e, n);
      if (!r.BSuccess()) throw Error(`EResult ` + r.GetEResult());
      return r.Body().toObject();
    },
  };
}
function W(e) {
  let n = x();
  return t(U(n, e));
}
function G(t, r, i) {
  let a = x(),
    o = n();
  return e({
    mutationFn: async (e) => {
      let n = S.Init(h);
      (n.Body().set_steamid(t),
        n.Body().set_comment_thread_id(r),
        n.Body().set_gidcomment(i),
        n.Body().set_reason(e.reason),
        n.Body().set_note(e.message));
      for (let t of e.sanctions) {
        let e = new b();
        (e.set_sanction(t.sanction),
          t.days && e.set_days(t.days),
          n.Body().add_sanctions(e));
      }
      let o = await _.SanctionComment(a, n);
      if (!o.BSuccess())
        throw Error(
          `SanctionComment failed. EResult: ${o.GetEResult()} (${o.GetErrorMessage()})`,
        );
    },
    onSuccess: async () => {
      await o.invalidateQueries({ queryKey: [`get_claimed`] });
    },
  });
}
function K(t, r, i) {
  let a = x(),
    o = n();
  return e({
    mutationFn: async () => {
      let e = S.Init(y);
      (e.Body().set_steamid(t),
        e.Body().set_comment_thread_id(r),
        e.Body().set_gidcomment(i),
        e.Body().set_report_action(1),
        e.Body().set_resolve(!0),
        await g.UpdateCommentReportState(a, e));
    },
    onSuccess: async () => {
      await o.invalidateQueries({ queryKey: [`get_claimed`] });
    },
  });
}
export {
  L as a,
  B as c,
  W as d,
  G as f,
  K as i,
  j as l,
  H as m,
  N as n,
  V as o,
  z as p,
  k as r,
  R as s,
  M as t,
  F as u,
};
