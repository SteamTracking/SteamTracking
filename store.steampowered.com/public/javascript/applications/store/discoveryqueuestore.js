/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, Ot as n, kt as r } from "./chunk~01cfc309bf.js";
import { n as i, t as a } from "./chunk~e867464c75.js";
import {
  $x as o,
  Dy as s,
  Kb as c,
  My as l,
  Pl as u,
  Qy as d,
  Vl as f,
  bx as p,
  dt as m,
  ft as h,
  kx as g,
  ky as _,
  lx as v,
  qb as y,
} from "./main.js";
var b = e(t());
function x(e, t) {
  let n = e.toString();
  if (
    t?.strContentHubType != `newreleases` &&
    t?.strContentHubType != `upcoming`
  ) {
    let e = t?.nSaleTagID,
      r = t?.strContentHubType,
      i = t?.strContentHubCategory,
      a = t?.nContentHubTagID,
      o = t?.bDiscountsOnly,
      s = t?.bPrioritizeDiscounts,
      c = t?.strOptInName,
      l = t?.nOptInTagID,
      u = t?.nPruneTagID;
    e
      ? (n += `_` + e)
      : r &&
        ((n += `_` + r),
        r === `category` && i
          ? (n += `_` + i)
          : r === `tags` && a && (n += `_` + a),
        o ? (n += `_d`) : s && (n += `_p`),
        c && l && u && (n += `_` + c));
  }
  return n;
}
function S(e) {
  return i(JSON.stringify(e));
}
function C(e) {
  return JSON.parse(a(e));
}
var w = class e {
  m_transport;
  m_mapDiscoveryQueues = new Map();
  m_mapSkippedApps = new Map();
  m_mapSkippedAppCount = new Map();
  m_mapInClientCompleted = new Map();
  m_mapInClientCompletedCallback = new Map();
  m_setExhuasted = new Set();
  m_mapExhuastedCallback = new Map();
  GetTotalSkippedAppsForDiscoveryQueue(e, t) {
    let n = x(e, t);
    return this.m_mapDiscoveryQueues.get(n)?.skipped ?? 0;
  }
  GetNumAppsSeenForDiscoveryQueue(e, t) {
    let n = x(e, t);
    return this.m_mapSkippedAppCount.get(n) || 0;
  }
  GetSkippedAppKey(e, t, n) {
    return `${e}_${x(t, n)}`;
  }
  GetInClientCompletedQueues(e, t) {
    let n = x(e, t);
    return this.m_mapInClientCompleted.get(n) || 0;
  }
  GetInClientCompletedQueuesCallback(e, t) {
    let n = x(e, t);
    return (
      this.m_mapInClientCompletedCallback.has(n) ||
        this.m_mapInClientCompletedCallback.set(n, new o()),
      this.m_mapInClientCompletedCallback.get(n)
    );
  }
  GetExhaustedCallback(e, t) {
    let n = x(e, t);
    return (
      this.m_mapExhuastedCallback.has(n) ||
        this.m_mapExhuastedCallback.set(n, c(!1)),
      this.m_mapExhuastedCallback.get(n)
    );
  }
  BIsExhausted(e, t) {
    let n = x(e, t);
    return this.m_setExhuasted.has(n);
  }
  async LoadDiscoveryQueue(e, t, n) {
    let r = x(e, n);
    if (!this.m_transport) return 2;
    try {
      let i = m(this.m_transport, e, t, n);
      t && (await d.invalidateQueries({ queryKey: i.queryKey }));
      let a = await d.fetchQuery(i);
      return (
        this.m_mapDiscoveryQueues.set(r, a),
        a.exhausted
          ? (this.m_setExhuasted.add(r),
            this.GetExhaustedCallback(e, n).Set(!0))
          : (this.m_setExhuasted.delete(r),
            this.GetExhaustedCallback(e, n).Set(!1)),
        this.m_mapSkippedAppCount.set(r, a.skipped || 0),
        1
      );
    } catch (t) {
      return (
        console.warn(
          `Error`,
          t,
          `failed to get discovery queue type`,
          e,
          `key`,
          r,
        ),
        2
      );
    }
  }
  async GetDiscoveryQueueAppsOfType(e, t, n) {
    let r = x(e, n);
    return (
      (!t && this.m_mapDiscoveryQueues.has(r)) ||
        (await this.LoadDiscoveryQueue(e, t, n)),
      {
        appids: this.m_mapDiscoveryQueues.get(r).appids,
        exhausted: !!this.m_mapDiscoveryQueues.get(r).exhausted,
      }
    );
  }
  async SkipDiscoveryQueueItem(e, t, n) {
    let r = this.GetSkippedAppKey(e, t, n);
    if (!this.m_mapSkippedApps.has(r)) {
      let i = x(t, n),
        a = this.m_mapDiscoveryQueues.get(i)?.appids,
        o = a?.[a.length - 1] == e;
      (this.m_mapSkippedApps.set(r, !0),
        this.m_mapSkippedAppCount.set(
          i,
          (this.m_mapSkippedAppCount.get(i) || 0) + 1,
        ));
      let s = g.Init(_);
      if (
        (s.Body().set_appid(e),
        s.Body().set_queue_type(t),
        (n?.nSaleTagID || n?.strContentHubType) &&
          s.Body().set_store_page_filter(h(n, !0)),
        !this.m_transport)
      ) {
        (console.warn(`Error`, `no transport`, `failed to skip appid `, e),
          this.m_mapSkippedApps.delete(r));
        return;
      }
      let c = (
        await l.SkipDiscoveryQueueItem(this.m_transport, s)
      ).GetEResult();
      c != 1 && c != 29
        ? (console.warn(`Error`, c, `failed to skip appid `, e),
          this.m_mapSkippedApps.delete(r))
        : o && this.MarkDiscoveryQueueCompleted(t, n);
    }
  }
  MarkDiscoveryQueueCompleted(e, t) {
    let n = x(e, t);
    if (this.m_mapInClientCompleted.has(n)) {
      let r = this.m_mapInClientCompleted.get(n) + 1;
      (this.m_mapInClientCompleted.set(n, r),
        this.GetInClientCompletedQueuesCallback(e, t).Dispatch(r));
    } else
      (this.m_mapInClientCompleted.set(n, 0),
        this.GetInClientCompletedQueuesCallback(e, t).Dispatch(0));
  }
  async LoadSkippedApps(e, t) {
    x(e, t);
    let n = g.Init(s);
    if (
      (n.Body().set_steamid(p.steamid),
      n.Body().set_queue_type(e),
      (t?.nSaleTagID || t?.strContentHubType) &&
        n.Body().set_store_page_filter(h(t, !0)),
      !this.m_transport)
    )
      return (
        console.warn(
          `Failed to retrieve skipped apps for discovery queue, no transport.`,
          e,
          t,
        ),
        []
      );
    let r = await l.GetDiscoveryQueueSkippedApps(this.m_transport, n);
    return r.GetEResult() === 1
      ? r.Body().appids() || []
      : (console.warn(
          `Failed to retrieve skipped apps for discovery queue.`,
          e,
          t,
          r.GetEResult(),
        ),
        []);
  }
  static s_DiscoveryQueueStore = null;
  static Init(t) {
    e.Get().m_transport = t;
  }
  static BHasTransport() {
    return !!e.Get().m_transport;
  }
  static Get() {
    return (
      (this.s_DiscoveryQueueStore ||= new e()), this.s_DiscoveryQueueStore
    );
  }
  constructor() {
    n(this);
  }
};
y([r], w.prototype, `m_mapDiscoveryQueues`, void 0);
function T(e, t) {
  let [n, r] = (0, b.useState)(w.Get().GetInClientCompletedQueues(e, t));
  return (u(w.Get().GetInClientCompletedQueuesCallback(e, t), r), n);
}
function E(e, t) {
  return f(w.Get().GetExhaustedCallback(e, t));
}
function D(e, t) {
  let n = b.useMemo(() => v(`discovery_queue_name`, `application_config`), []);
  return typeof n == `string` && n.length > 0 ? n : ``;
}
export { T as a, D as i, w as n, E as o, C as r, S as t };
