/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Ef as e,
  Ph as t,
  Qm as n,
  Wu as r,
  _h as i,
  bh as a,
  gh as o,
  ip as s,
  vh as c,
  yh as l,
} from "./main.js";
var u = new r(`ReactUsageReporting`).Debug,
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
      (t.has(e) || t.set(e, 0),
        t.set(e, t.get(e) + 1),
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
      let e = n.Init(o);
      (e.Body().set_product(this.m_strProduct),
        e.Body().set_version(this.m_strVersion),
        this.m_mapRoutes.forEach((t, n) => {
          let r = new l();
          (r.set_route(n), r.set_count(t), e.Body().add_routes(r));
        }),
        this.m_mapComponents.forEach((t, n) => {
          let r = new c();
          (r.set_component(n), r.set_count(t), e.Body().add_components(r));
        }),
        this.m_mapActions.forEach((t, n) => {
          let r = new i();
          (r.set_action(n), r.set_count(t), e.Body().add_actions(r));
        }),
        this.m_mapRoutes.clear(),
        this.m_mapComponents.clear(),
        this.m_mapActions.clear(),
        (this.m_reportCount = 0),
        a.ReportReactUsage(this.m_transport, e));
    }
    get version() {
      return this.m_strVersion;
    }
    get product() {
      return this.m_strProduct;
    }
  };
e([t], p.prototype, `CheckSend`, null);
var m = new p();
export { m as t };
