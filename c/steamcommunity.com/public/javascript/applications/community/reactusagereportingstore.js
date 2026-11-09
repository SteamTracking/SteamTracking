import { _, _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = new _(`ReactUsageReporting`).Debug,
  _ = 100,
  _ = _.PerMinute * 1e3,
  _ = class {
    m_strProduct;
    m_strVersion;
    m_transport = null;
    m_mapRoutes = new Map();
    m_mapComponents = new Map();
    m_mapActions = new Map();
    m_reportCount = 0;
    m_bInitialized = !1;
    Init(_, _, _) {
      ((this.m_bInitialized = !0),
        (this.m_strProduct = _),
        (this.m_strVersion = _),
        (this.m_transport = _),
        this.ScheduleSend());
    }
    ScheduleSend() {
      setTimeout(() => this.CheckSend(), _);
    }
    CheckSend() {
      (this.m_reportCount > 0 && this.SendMetrics(), this.ScheduleSend());
    }
    ReportInternal(_, _) {
      (_.has(_) || _.set(_, 0),
        _.set(_, _.get(_) + 1),
        this.m_reportCount++,
        this.ShouldSendMetricsImmediately() && this.SendMetrics());
    }
    ReportRouteMatch(_) {
      (_(`Route match: ` + _), this.ReportInternal(_, this.m_mapRoutes));
    }
    ReportTrackedComponent(_) {
      (_(`Tracked component: ` + _),
        this.ReportInternal(_, this.m_mapComponents));
    }
    ReportTrackedAction(_) {
      (_(`User action: ` + _), this.ReportInternal(_, this.m_mapActions));
    }
    ShouldSendMetricsImmediately() {
      return this.m_reportCount >= _;
    }
    SendMetrics() {
      if (!this.m_bInitialized) return;
      let _ = _.Init(_);
      (_.Body().set_product(this.m_strProduct),
        _.Body().set_version(this.m_strVersion),
        this.m_mapRoutes.forEach((_, _) => {
          let _ = new _();
          (_.set_route(_), _.set_count(_), _.Body().add_routes(_));
        }),
        this.m_mapComponents.forEach((_, _) => {
          let _ = new _();
          (_.set_component(_), _.set_count(_), _.Body().add_components(_));
        }),
        this.m_mapActions.forEach((_, _) => {
          let _ = new _();
          (_.set_action(_), _.set_count(_), _.Body().add_actions(_));
        }),
        this.m_mapRoutes.clear(),
        this.m_mapComponents.clear(),
        this.m_mapActions.clear(),
        (this.m_reportCount = 0),
        _.ReportReactUsage(this.m_transport, _));
    }
    get version() {
      return this.m_strVersion;
    }
    get product() {
      return this.m_strProduct;
    }
  };
_([_], _.prototype, `CheckSend`, null);
var _ = new _();
