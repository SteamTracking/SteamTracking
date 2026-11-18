/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Dh as e,
  Eh as t,
  Nf as n,
  Oh as r,
  Th as i,
  Uh as a,
  Zu as o,
  dp as s,
  kh as c,
  sh as l,
} from "./main.js";
var u = new o(`ReactUsageReporting`).Debug,
  d = 100,
  f = s.PerMinute * 1e3,
  p = class {
    m_strProduct;
    m_strVersion;
    m_transport = null;
    m_mapRoutes = new Map();
    m_mapComponents = new Map();
    m_mapActions = new Map();
    m_reportCount = 0;
    m_bInitialized = !1;
    Init(e, t, n) {
      ((this.m_bInitialized = !0),
        (this.m_strProduct = e),
        (this.m_strVersion = t),
        (this.m_transport = n),
        this.ScheduleSend());
    }
    ScheduleSend() {
      setTimeout(() => this.CheckSend(), f);
    }
    CheckSend() {
      (this.m_reportCount > 0 && this.SendMetrics(), this.ScheduleSend());
    }
    ReportInternal(e, t) {
      (t.set(e, (t.get(e) ?? 0) + 1),
        this.m_reportCount++,
        this.ShouldSendMetricsImmediately() && this.SendMetrics());
    }
    ReportRouteMatch(e) {
      (u(`Route match: ` + e), this.ReportInternal(e, this.m_mapRoutes));
    }
    ReportTrackedComponent(e) {
      (u(`Tracked component: ` + e),
        this.ReportInternal(e, this.m_mapComponents));
    }
    ReportTrackedAction(e) {
      (u(`User action: ` + e), this.ReportInternal(e, this.m_mapActions));
    }
    ShouldSendMetricsImmediately() {
      return this.m_reportCount >= d;
    }
    SendMetrics() {
      if (!this.m_bInitialized) return;
      let n = l.Init(i);
      (n.Body().set_product(this.m_strProduct),
        n.Body().set_version(this.m_strVersion),
        this.m_mapRoutes.forEach((e, t) => {
          let i = new r();
          (i.set_route(t), i.set_count(e), n.Body().add_routes(i));
        }),
        this.m_mapComponents.forEach((t, r) => {
          let i = new e();
          (i.set_component(r), i.set_count(t), n.Body().add_components(i));
        }),
        this.m_mapActions.forEach((e, r) => {
          let i = new t();
          (i.set_action(r), i.set_count(e), n.Body().add_actions(i));
        }),
        this.m_mapRoutes.clear(),
        this.m_mapComponents.clear(),
        this.m_mapActions.clear(),
        (this.m_reportCount = 0),
        c.ReportReactUsage(this.m_transport, n));
    }
    get version() {
      return this.m_strVersion;
    }
    get product() {
      return this.m_strProduct;
    }
  };
n([a], p.prototype, `CheckSend`, null);
var m = new p();
export { m as t };
