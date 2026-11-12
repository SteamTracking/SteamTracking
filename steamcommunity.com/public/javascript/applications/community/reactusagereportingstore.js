/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Ch as e,
  Rh as t,
  Sh as n,
  bh as r,
  kf as i,
  nh as a,
  qu as o,
  sp as s,
  wh as c,
  xh as l,
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
      let t = a.Init(r);
      (t.Body().set_product(this.m_strProduct),
        t.Body().set_version(this.m_strVersion),
        this.m_mapRoutes.forEach((n, r) => {
          let i = new e();
          (i.set_route(r), i.set_count(n), t.Body().add_routes(i));
        }),
        this.m_mapComponents.forEach((e, r) => {
          let i = new n();
          (i.set_component(r), i.set_count(e), t.Body().add_components(i));
        }),
        this.m_mapActions.forEach((e, n) => {
          let r = new l();
          (r.set_action(n), r.set_count(e), t.Body().add_actions(r));
        }),
        this.m_mapRoutes.clear(),
        this.m_mapComponents.clear(),
        this.m_mapActions.clear(),
        (this.m_reportCount = 0),
        c.ReportReactUsage(this.m_transport, t));
    }
    get version() {
      return this.m_strVersion;
    }
    get product() {
      return this.m_strProduct;
    }
  };
i([t], p.prototype, `CheckSend`, null);
var m = new p();
export { m as t };
