/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { G as e, W as t, it as n } from "./chunk~01cfc309bf.js";
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
  Xp as b,
  j as x,
  th as S,
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
function j(t) {
  let n = b();
  return e(A(n, t));
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
function F(t, n = !1) {
  let r = b();
  return e(P(r, t, n));
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
function L(t) {
  let n = b();
  return e(I(n, t));
}
function R(e) {
  let r = b(),
    i = n();
  return t({
    mutationFn: async (t) => {
      let n = S.Init(m);
      (n.Body().set_reported_content_id(e),
        n.Body().set_new_level(t.eNewLevel),
        t.eReason && n.Body().set_reason(t.eReason),
        t.strNote && n.Body().set_note(t.strNote));
      let i = await a.EscalateSubjectByID(r, n);
      if (i.GetEResult() !== 1)
        throw Error(`Failed to escalate subject: ${i.GetEMsg()}`);
    },
    onSuccess: async () => {
      await Promise.all([
        k(i, e),
        i.invalidateQueries({ queryKey: [`get_claimed`] }),
        i.invalidateQueries({ queryKey: [`get_subject_overview`] }),
      ]);
    },
  });
}
function z() {
  let e = b(),
    r = n();
  return t({
    mutationFn: async (t) => {
      let n = S.Init(s);
      n.Body().set_reported_content_id(t.reportedContentID);
      let r = await a.SustainModerationByID(e, n);
      if (!r.BSuccess()) throw Error(`EResult ` + r.GetEResult());
    },
    onSuccess: async (e, t) => {
      (await k(r, t.reportedContentID),
        await r.invalidateQueries({ queryKey: [`get_claimed`] }));
    },
  });
}
function B(e) {
  let i = n(),
    o = b();
  return t({
    mutationKey: [`release_subject`, ...e],
    mutationFn: async () => {
      let t = S.Init(r);
      for (let n of e) {
        let e = new d();
        (e.set_reported_content_id(n), t.Body().add_subjects_to_release(e));
      }
      let n = await a.ReleaseSubjects(o, t);
      if (!n.BSuccess()) throw Error(`EResult ` + n.GetEResult());
    },
    onSuccess: async () => {
      await Promise.all([
        i.invalidateQueries({ queryKey: [`get_claimed`] }),
        i.invalidateQueries({ queryKey: [`get_subject_overview`] }),
        ...e.map((e) => k(i, e)),
      ]);
    },
  });
}
function V(e, r) {
  let i = b(),
    o = n();
  return t({
    mutationFn: async () => {
      let t = S.Init(p);
      (t.Body().set_reported_content_id(e), t.Body().set_details(r));
      let n = await a.OwnerDisputeModeration(i, t);
      if (!n.BSuccess()) throw Error(`EResult ` + n.GetEResult());
    },
    onSuccess: async () => {
      await k(o, e);
    },
  });
}
function H(e, r) {
  let o = n(),
    s = b();
  return t({
    mutationFn: async () => {
      let t = S.Init(i);
      (t.Body().set_reported_content_id(e),
        t.Body().set_owner_dispute_details(r));
      let n = await a.UpdateSubjectByID(s, t);
      if (!n.BSuccess()) throw Error(`EResult ` + n.GetEResult());
    },
    onSuccess: async () => {
      await k(o, e);
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
function W(t) {
  let n = b();
  return e(U(n, t));
}
function G(e, r, i) {
  let a = b(),
    o = n();
  return t({
    mutationFn: async (t) => {
      let n = S.Init(h);
      (n.Body().set_steamid(e),
        n.Body().set_comment_thread_id(r),
        n.Body().set_gidcomment(i),
        n.Body().set_reason(t.reason),
        n.Body().set_note(t.message));
      for (let e of t.sanctions) {
        let t = new x();
        (t.set_sanction(e.sanction),
          e.days && t.set_days(e.days),
          n.Body().add_sanctions(t));
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
function K(e, r, i) {
  let a = b(),
    o = n();
  return t({
    mutationFn: async () => {
      let t = S.Init(y);
      (t.Body().set_steamid(e),
        t.Body().set_comment_thread_id(r),
        t.Body().set_gidcomment(i),
        t.Body().set_report_action(1),
        t.Body().set_resolve(!0),
        await g.UpdateCommentReportState(a, t));
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
