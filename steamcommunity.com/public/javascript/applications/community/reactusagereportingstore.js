/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Dh as e,
  Eh as t,
  Hh as n,
  Mf as r,
  Oh as i,
  Th as a,
  Xu as o,
  oh as s,
  up as c,
  wh as l,
} from "./main.js";
var u = new o(`ReactUsageReporting`).Debug,
  d = 100,
  f = c.PerMinute * 1e3,
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
      let n = s.Init(l);
      (n.Body().set_product(this.m_strProduct),
        n.Body().set_version(this.m_strVersion),
        this.m_mapRoutes.forEach((t, r) => {
          let i = new e();
          (i.set_route(r), i.set_count(t), n.Body().add_routes(i));
        }),
        this.m_mapComponents.forEach((e, r) => {
          let i = new t();
          (i.set_component(r), i.set_count(e), n.Body().add_components(i));
        }),
        this.m_mapActions.forEach((e, t) => {
          let r = new a();
          (r.set_action(t), r.set_count(e), n.Body().add_actions(r));
        }),
        this.m_mapRoutes.clear(),
        this.m_mapComponents.clear(),
        this.m_mapActions.clear(),
        (this.m_reportCount = 0),
        i.ReportReactUsage(this.m_transport, n));
    }
    get version() {
      return this.m_strVersion;
    }
    get product() {
      return this.m_strProduct;
    }
  };
r([n], p.prototype, `CheckSend`, null);
var m = new p();
export { m as t };
