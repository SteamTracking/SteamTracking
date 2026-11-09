/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  K as e,
  M as t,
  Y as n,
  _t as r,
  k as i,
  kt as a,
  on as o,
  rt as s,
  vt as c,
} from "./mobx.esm.js";
import { Rt as l, _t as u } from "./src.js";
import { t as d } from "./reactqueryroot.js";
import { t as f } from "./axios.js";
import { t as p } from "./axiosutils.js";
import { a as m, i as h, r as g } from "./steammessages_community_pb.js";
var _ = o(f(), 1);
function v(e) {
  return d;
}
function y() {
  return new Set();
}
function b(e) {
  return [`PartnerEventReadState`, e];
}
function x(t, n) {
  let r = n ?? v(`BEventHasBeenRead`);
  return r ? C(r.getQueryData(b(e.accountid)) ?? y(), t) : !1;
}
function S(t, n) {
  if (t.length == 0) return;
  let r = n ?? v(`MarkEventsAsRead`);
  r &&
    r.setQueryData(b(e.accountid), (e) => {
      let n = new Set(e);
      return t.forEach((e) => n.add(e)), n;
    });
}
function C(e, t) {
  return t !== void 0 && e.has(t);
}
var w = 60,
  T = 30,
  E = class {
    m_CMInterface;
    m_setShownEvents = new Set();
    m_setReadEvents = new Set();
    m_rgPendingUpload = [];
    m_schUpload = new u();
    m_bUploading = !1;
    constructor(e) {
      this.m_CMInterface = e;
    }
    RecordEventShown(e, t) {
      e &&
        !e.bOldAnnouncement &&
        e.GID &&
        this.MarkEventShown(e.GID, e.clanSteamID.GetAccountID(), t);
    }
    RecordEventRead(e, t, n) {
      e &&
        !e.bOldAnnouncement &&
        e.GID &&
        (x(e.GID, n) ||
          (S([e.GID], n),
          this.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t)));
    }
    MarkEventShown(e, t, n) {
      let r = this.MakeKey(e, n);
      if (this.m_setShownEvents.has(r)) return !1;
      this.m_setShownEvents.add(r);
      let i = new h();
      return (
        i.set_event_gid(e),
        i.set_clanid(t),
        i.set_display_location(n),
        i.set_mark_shown(!0),
        this.QueueForUpload(i),
        !0
      );
    }
    MarkEventRead(e, t, n) {
      let r = this.MakeKey(e, n);
      if (this.m_setReadEvents.has(r)) return !1;
      this.m_setReadEvents.add(r);
      let i = new h();
      return (
        i.set_event_gid(e),
        i.set_clanid(t),
        i.set_display_location(n),
        i.set_mark_read(!0),
        this.QueueForUpload(i),
        !0
      );
    }
    MakeKey(e, t) {
      return `${e}_${t}`;
    }
    QueueForUpload(e) {
      this.m_rgPendingUpload.push(e), this.ScheduleUpload();
    }
    ScheduleUpload() {
      this.m_bUploading ||
        (this.m_rgPendingUpload.length >= T
          ? this.UploadPendingData()
          : this.m_schUpload.IsScheduled() ||
            this.m_schUpload.Schedule(w * 1e3, this.UploadPendingData));
    }
    async Flush() {
      if (!this.m_bUploading) return this.UploadPendingData();
    }
    async UploadPendingData() {
      if (this.m_bUploading) return;
      this.m_schUpload.Cancel();
      let e = this.m_rgPendingUpload.splice(0, T);
      if (e.length == 0) return;
      let r = !1;
      if (this.m_CMInterface) {
        let t = c.Init(g);
        for (let n of e) t.Body().add_markings(n);
        this.m_bUploading = !0;
        let n = await m.MarkPartnerEventsForUser(
          this.m_CMInterface.GetServiceTransport(),
          t,
        );
        (this.m_bUploading = !1), (r = n.GetEResult() == 1);
      } else {
        if (!s.logged_in) return;
        let i = e.map((e) => e.toObject()),
          a = t() + `actions/ajaxmarkpartnerevents`,
          o = new FormData();
        o.append(`sessionid`, n()), o.append(`request`, JSON.stringify(i));
        try {
          r =
            (await _.default.post(a, o, { withCredentials: !0 })).data
              .success == 1;
        } catch (e) {
          let t = p(e);
          console.error(
            `CPartnerEventUserTracking.UploadPendingData error ` +
              t.strErrorMsg,
            t,
          );
        }
      }
      r
        ? this.m_rgPendingUpload.length > 0 && this.ScheduleUpload()
        : (console.log(`Saving news event state failed. Will try again soon!`),
          (this.m_rgPendingUpload = this.m_rgPendingUpload.concat(e)),
          this.m_schUpload.Schedule(w * 1e3, this.UploadPendingData));
    }
  };
i([l], E.prototype, `UploadPendingData`, null);
var D;
function O() {
  return (D ||= new E()), D;
}
var k = o(a(), 1),
  A = r(),
  j = k.createContext(void 0);
function M(e) {
  let [t] = k.useState(() => new E());
  return (0, A.jsx)(j.Provider, { value: t, children: e.children });
}
function N() {
  return k.useContext(j) || O();
}
export { N as n, M as t };
