import { _ } from "./chunk~f025431ab0.js";
import { _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _ } from "./chunk~e867464c75.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_());
function _(_, _) {
  let _ = _.toString();
  if (
    _?.strContentHubType != `newreleases` &&
    _?.strContentHubType != `upcoming`
  ) {
    let _ = _?.nSaleTagID,
      _ = _?.strContentHubType,
      _ = _?.strContentHubCategory,
      _ = _?.nContentHubTagID,
      _ = _?.bDiscountsOnly,
      _ = _?.bPrioritizeDiscounts,
      _ = _?.strOptInName,
      _ = _?.nOptInTagID,
      _ = _?.nPruneTagID;
    _
      ? (_ += `_` + _)
      : _ &&
        ((_ += `_` + _),
        _ === `category` && _
          ? (_ += `_` + _)
          : _ === `tags` && _ && (_ += `_` + _),
        _ ? (_ += `_d`) : _ && (_ += `_p`),
        _ && _ && _ && (_ += `_` + _));
  }
  return _;
}
function _(_) {
  return _(JSON.stringify(_));
}
function _(_) {
  return JSON.parse(_(_));
}
var _ = class _ {
  m_transport;
  m_mapDiscoveryQueues = new Map();
  m_mapSkippedApps = new Map();
  m_mapSkippedAppCount = new Map();
  m_mapInClientCompleted = new Map();
  m_mapInClientCompletedCallback = new Map();
  m_setExhuasted = new Set();
  m_mapExhuastedCallback = new Map();
  GetTotalSkippedAppsForDiscoveryQueue(_, _) {
    let _ = _(_, _);
    return this.m_mapDiscoveryQueues.get(_)?.skipped ?? 0;
  }
  GetNumAppsSeenForDiscoveryQueue(_, _) {
    let _ = _(_, _);
    return this.m_mapSkippedAppCount.get(_) || 0;
  }
  GetSkippedAppKey(_, _, _) {
    return `${_}_${_(_, _)}`;
  }
  GetInClientCompletedQueues(_, _) {
    let _ = _(_, _);
    return this.m_mapInClientCompleted.get(_) || 0;
  }
  GetInClientCompletedQueuesCallback(_, _) {
    let _ = _(_, _);
    return (
      this.m_mapInClientCompletedCallback.has(_) ||
        this.m_mapInClientCompletedCallback.set(_, new _()),
      this.m_mapInClientCompletedCallback.get(_)
    );
  }
  GetExhaustedCallback(_, _) {
    let _ = _(_, _);
    return (
      this.m_mapExhuastedCallback.has(_) ||
        this.m_mapExhuastedCallback.set(_, _(!1)),
      this.m_mapExhuastedCallback.get(_)
    );
  }
  BIsExhausted(_, _) {
    let _ = _(_, _);
    return this.m_setExhuasted.has(_);
  }
  async LoadDiscoveryQueue(_, _, _) {
    let _ = _(_, _);
    if (!this.m_transport) return 2;
    try {
      let _ = _(this.m_transport, _, _, _);
      _ &&
        (await _.invalidateQueries({
          queryKey: _.queryKey,
        }));
      let _ = await _.fetchQuery(_);
      return (
        this.m_mapDiscoveryQueues.set(_, _),
        _.exhausted
          ? (this.m_setExhuasted.add(_),
            this.GetExhaustedCallback(_, _).Set(!0))
          : (this.m_setExhuasted.delete(_),
            this.GetExhaustedCallback(_, _).Set(!1)),
        this.m_mapSkippedAppCount.set(_, _.skipped || 0),
        1
      );
    } catch (_) {
      return (
        console.warn(
          `Error`,
          _,
          `failed to get discovery queue type`,
          _,
          `key`,
          _,
        ),
        2
      );
    }
  }
  async GetDiscoveryQueueAppsOfType(_, _, _) {
    let _ = _(_, _);
    return (
      (!_ && this.m_mapDiscoveryQueues.has(_)) ||
        (await this.LoadDiscoveryQueue(_, _, _)),
      {
        appids: this.m_mapDiscoveryQueues.get(_).appids,
        exhausted: !!this.m_mapDiscoveryQueues.get(_).exhausted,
      }
    );
  }
  async SkipDiscoveryQueueItem(_, _, _) {
    let _ = this.GetSkippedAppKey(_, _, _);
    if (!this.m_mapSkippedApps.has(_)) {
      let _ = _(_, _),
        _ = this.m_mapDiscoveryQueues.get(_)?.appids,
        _ = _?.[_.length - 1] == _;
      (this.m_mapSkippedApps.set(_, !0),
        this.m_mapSkippedAppCount.set(
          _,
          (this.m_mapSkippedAppCount.get(_) || 0) + 1,
        ));
      let _ = _.Init(_);
      if (
        (_.Body().set_appid(_),
        _.Body().set_queue_type(_),
        (_?.nSaleTagID || _?.strContentHubType) &&
          _.Body().set_store_page_filter(_(_, !0)),
        !this.m_transport)
      ) {
        (console.warn(`Error`, `no transport`, `failed to skip appid `, _),
          this.m_mapSkippedApps.delete(_));
        return;
      }
      let _ = (
        await _.SkipDiscoveryQueueItem(this.m_transport, _)
      ).GetEResult();
      _ != 1 && _ != 29
        ? (console.warn(`Error`, _, `failed to skip appid `, _),
          this.m_mapSkippedApps.delete(_))
        : _ && this.MarkDiscoveryQueueCompleted(_, _);
    }
  }
  MarkDiscoveryQueueCompleted(_, _) {
    let _ = _(_, _);
    if (this.m_mapInClientCompleted.has(_)) {
      let _ = this.m_mapInClientCompleted.get(_) + 1;
      (this.m_mapInClientCompleted.set(_, _),
        this.GetInClientCompletedQueuesCallback(_, _).Dispatch(_));
    } else
      (this.m_mapInClientCompleted.set(_, 0),
        this.GetInClientCompletedQueuesCallback(_, _).Dispatch(0));
  }
  async LoadSkippedApps(_, _) {
    _(_, _);
    let _ = _.Init(_);
    if (
      (_.Body().set_steamid(_.steamid),
      _.Body().set_queue_type(_),
      (_?.nSaleTagID || _?.strContentHubType) &&
        _.Body().set_store_page_filter(_(_, !0)),
      !this.m_transport)
    )
      return (
        console.warn(
          `Failed to retrieve skipped apps for discovery queue, no transport.`,
          _,
          _,
        ),
        []
      );
    let _ = await _.GetDiscoveryQueueSkippedApps(this.m_transport, _);
    return _.GetEResult() === 1
      ? _.Body().appids() || []
      : (console.warn(
          `Failed to retrieve skipped apps for discovery queue.`,
          _,
          _,
          _.GetEResult(),
        ),
        []);
  }
  static s_DiscoveryQueueStore = null;
  static Init(_) {
    _.Get().m_transport = _;
  }
  static BHasTransport() {
    return !!_.Get().m_transport;
  }
  static Get() {
    return (
      (this.s_DiscoveryQueueStore ||= new _()), this.s_DiscoveryQueueStore
    );
  }
  constructor() {
    _(this);
  }
};
_([_], _.prototype, `m_mapDiscoveryQueues`, void 0);
function _(_, _) {
  let [_, _] = (0, _.useState)(_.Get().GetInClientCompletedQueues(_, _));
  return (_(_.Get().GetInClientCompletedQueuesCallback(_, _), _), _);
}
function _(_, _) {
  return _(_.Get().GetExhaustedCallback(_, _));
}
function _(_, _) {
  let _ = _.useMemo(() => _(`discovery_queue_name`, `application_config`), []);
  return typeof _ == `string` && _.length > 0 ? _ : ``;
}
