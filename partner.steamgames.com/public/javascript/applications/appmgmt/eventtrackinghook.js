/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  G as t,
  Pt as n,
  S as r,
  W as i,
  a,
  n as o,
  nt as s,
  y as c,
} from "./chunk~de7f2df91c.js";
import { Pt as l, pt as u } from "./chunk~bd90a5fce7.js";
import { t as d } from "./chunk~9aa05d2c7d.js";
import { t as f } from "./chunk~f4e4ed5c17.js";
import { t as p } from "./chunk~c55709d290.js";
import { a as m, i as h, r as g } from "./chunk~ca0c999570.js";
var _ = n(f(), 1);
function v(e) {
  return d;
}
function y() {
  return new Set();
}
function b(e) {
  return [`PartnerEventReadState`, e];
}
function x(e, t) {
  let n = t ?? v(`BEventHasBeenRead`);
  return n ? C(n.getQueryData(b(c.accountid)) ?? y(), e) : !1;
}
function S(e, t) {
  if (e.length == 0) return;
  let n = t ?? v(`MarkEventsAsRead`);
  n &&
    n.setQueryData(b(c.accountid), (t) => {
      let n = new Set(t);
      return (e.forEach((e) => n.add(e)), n);
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
      (this.m_rgPendingUpload.push(e), this.ScheduleUpload());
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
      let n = this.m_rgPendingUpload.splice(0, T);
      if (n.length == 0) return;
      let i = !1;
      if (this.m_CMInterface) {
        let e = t.Init(g);
        for (let t of n) e.Body().add_markings(t);
        this.m_bUploading = !0;
        let r = await m.MarkPartnerEventsForUser(
          this.m_CMInterface.GetServiceTransport(),
          e,
        );
        ((this.m_bUploading = !1), (i = r.GetEResult() == 1));
      } else {
        if (!e.logged_in) return;
        let t = n.map((e) => e.toObject()),
          o = a() + `actions/ajaxmarkpartnerevents`,
          s = new FormData();
        (s.append(`sessionid`, r()), s.append(`request`, JSON.stringify(t)));
        try {
          i =
            (await _.default.post(o, s, { withCredentials: !0 })).data
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
      i
        ? this.m_rgPendingUpload.length > 0 && this.ScheduleUpload()
        : (console.log(`Saving news event state failed. Will try again soon!`),
          (this.m_rgPendingUpload = this.m_rgPendingUpload.concat(n)),
          this.m_schUpload.Schedule(w * 1e3, this.UploadPendingData));
    }
  };
o([l], E.prototype, `UploadPendingData`, null);
var D;
function O() {
  return ((D ||= new E()), D);
}
var k = n(s(), 1),
  A = i(),
  j = k.createContext(void 0);
function M(e) {
  let [t] = k.useState(() => new E());
  return (0, A.jsx)(j.Provider, { value: t, children: e.children });
}
function N() {
  return k.useContext(j) || O();
}
export { N as n, M as t };
