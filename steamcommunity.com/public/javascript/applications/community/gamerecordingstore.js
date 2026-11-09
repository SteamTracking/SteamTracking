/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { B as e, L as t, R as n } from "./libraries.js";
import {
  Ef as r,
  Ph as i,
  Qm as a,
  Yh as o,
  bh as s,
  dm as c,
  hh as l,
  pf as u,
} from "./main.js";
import {
  a as d,
  c as f,
  i as p,
  l as m,
  n as h,
  o as g,
  r as _,
  s as v,
} from "./gamerecordingclip.js";
var y = (function (e) {
    return (
      (e[(e.Invalid = 0)] = `Invalid`),
      (e[(e.Success = 1)] = `Success`),
      (e[(e.Failed = 2)] = `Failed`),
      (e[(e.InvalidParam = 3)] = `InvalidParam`),
      (e[(e.InputNotFound = 4)] = `InputNotFound`),
      (e[(e.ErrorReadingInput = 5)] = `ErrorReadingInput`),
      (e[(e.ErrorWritingOuput = 6)] = `ErrorWritingOuput`),
      (e[(e.NoHardwareEncoder = 7)] = `NoHardwareEncoder`),
      (e[(e.UnsupportedSourceCodec = 8)] = `UnsupportedSourceCodec`),
      (e[(e.UnsupportedTargetCodec = 9)] = `UnsupportedTargetCodec`),
      (e[(e.DiskFull = 10)] = `DiskFull`),
      (e[(e.ResolutionTooLarge = 11)] = `ResolutionTooLarge`),
      (e[(e.ConverterBusy = 12)] = `ConverterBusy`),
      e
    );
  })({}),
  b = `23B7-49AD-4A28-9590`;
function x(e, t) {
  switch (e) {
    case 1:
      return !t;
    case 3:
      return t;
    case 2:
    case 4:
    case 5:
    case 6:
      return !0;
    default:
      return !0;
  }
}
var S = class {
  constructor() {
    t(this);
  }
  m_rgAppsWithBackgroundVideo = [];
  m_mapTimelineLoaders = new Map();
  m_mapClipLoaders = new Map();
  m_mapSharedClipLoaders = new Map();
  m_mapActiveTimelines = new Map();
  m_mapManualRecordingCallbacks = new Map();
  m_fnGetAchievementInfo;
  m_strLastClipID;
  m_bEnableH265Recording = !1;
  m_transport;
  m_bLoadingClips = !0;
  m_bLoadingAppsWithBackgroundVideo = !0;
  m_bClipLoadingTriggered = !1;
  m_clips = new Map();
  m_clipsGroupByGame = new Map();
  m_clipExportProgress = new Map();
  m_currentlyExportingClip = null;
  m_recordingState = null;
  m_bEnoughDiskSpace = !1;
  async Init(e, t) {
    (this.m_transport = e),
      (this.m_fnGetAchievementInfo = t),
      c.IN_STEAMUI &&
        (p.RegisterForNotifyTimelineChanged(this.OnTimelineChanged),
        p.RegisterForNotifyRecordingSessionChanged(
          this.OnRecordingSessionChanged,
        ),
        p.RegisterForNotifyTimelineEntryChanged(this.OnTimelineEntryChanged),
        p.RegisterForNotifyTimelineEntryRemoved(this.OnTimelineEntryRemoved),
        p.RegisterForNotifyClipCreated(this.OnClipCreated),
        p.RegisterForNotifyExportProgress(this.OnExportProgress),
        p.RegisterForNotifyLowDiskSpace(this.OnLowDiskSpace),
        p.RegisterForNotifyStateChanged(this.OnStateChanged),
        await Promise.all([
          this.LoadAppsWithBackgroundVideo(),
          this.CheckEnoughDiskSpace(),
          this.UpdateState(),
        ]));
  }
  async UpdateState() {
    let e = await p.GetState({});
    if (!e.BSuccess()) {
      console.warn(`Failed to initialize game recording state`);
      return;
    }
    let t = e.Body().toObject();
    this.m_bEnableH265Recording = t?.is_h265_enabled ?? !1;
  }
  OnStateChanged() {
    return this.UpdateState(), 1;
  }
  GetAppsWithBackgroundVideo() {
    return this.m_rgAppsWithBackgroundVideo;
  }
  IsGameRecordingH265Enabled() {
    return this.m_bEnableH265Recording;
  }
  GetTimelineLoaderForGame(e) {
    o(e, `Invalid GameID: ` + e);
    let t = this.m_mapTimelineLoaders.get(e);
    if (!t) {
      let n = new h();
      n.LoadTimelinesForBackgroundVideo(e),
        (t = { loader: n, nRefCount: 0 }),
        this.m_mapTimelineLoaders.set(e, t);
    }
    return (
      t.nRefCount++,
      g(
        `CGameRecordingStore::GetTimelineLoaderForGame incrementing refCount ${t.nRefCount} for ${e}` +
          (t.nRefCount == 1 ? ` and it was created` : ``),
      ),
      {
        loader: t.loader,
        release: () => {
          t.nRefCount--,
            g(
              `CGameRecordingStore::GetTimelineLoaderForGame reducing refCount ${t.nRefCount} for ${e}` +
                (t.nRefCount <= 0 ? ` will delete` : ``),
            ),
            t.nRefCount <= 0 && this.m_mapTimelineLoaders.delete(e);
        },
      }
    );
  }
  GetTimelineLoaderForClip(e) {
    o(e, `Invalid ClipID: ` + e);
    let t = this.m_mapClipLoaders.get(e);
    if (!t) {
      let n = new h();
      n.LoadTimelinesForClip(e),
        (t = { loader: n, nRefCount: 0 }),
        this.m_mapClipLoaders.set(e, t);
    }
    return (
      t.nRefCount++,
      {
        loader: t.loader,
        release: () => {
          t.nRefCount--,
            t.nRefCount <= 0 && this.m_mapTimelineLoaders.delete(e);
        },
      }
    );
  }
  GetTimelineLoaderForSharedClip(e) {
    o(e, `Invalid clip`);
    let t = this.m_mapSharedClipLoaders.get(e.clip_id);
    if (!t) {
      let n = new h();
      n.LoadTimelinesForSharedClip(e),
        (t = { loader: n, nRefCount: 0 }),
        this.m_mapClipLoaders.set(e.clip_id, t);
    }
    return (
      t.nRefCount++,
      {
        loader: t.loader,
        release: () => {
          t.nRefCount--,
            t.nRefCount <= 0 && this.m_mapTimelineLoaders.delete(e.clip_id);
        },
      }
    );
  }
  OnTimelineChanged(e) {
    d() && e.DEBUG_LogToConsole(),
      this.ReloadAppsWithBackgroundVideoIfNecessary(e);
    let t = e.Body().notification_type(),
      n = e.Body().timeline_id(),
      r = e.Body().game_id();
    switch (t) {
      case 1:
      case 4: {
        let t = this.GetTimelineLoaderForGame(r);
        this.m_mapActiveTimelines.set(n, t),
          t.loader.AddRunningTimeline(n, r, e.Body().start_time());
        break;
      }
      case 2: {
        let t = this.m_mapActiveTimelines.get(n);
        t &&
          (t.loader.RunningTimelineStopped(n, e.Body().duration_ms()),
          t.release());
        break;
      }
      case 3: {
        let e = this.m_mapTimelineLoaders.get(r);
        e && e.loader.TimelineDeleted(n);
        break;
      }
    }
    return 1;
  }
  OnRecordingSessionChanged(e) {
    let t = e.Body().toObject(),
      n = t.game_id,
      r = t.notification_type;
    switch (
      (this.m_mapManualRecordingCallbacks.has(n) &&
        this.m_mapManualRecordingCallbacks.get(n)(t),
      r)
    ) {
      case 1:
        this.m_recordingState = { m_gameID: n };
        break;
      case 2:
        this.m_recordingState = null;
    }
    let i = this.m_mapTimelineLoaders.get(n);
    return i && i.loader.RecordingSessionChanged(t), 1;
  }
  OnTimelineEntryChanged(e) {
    if (!e.Body().entry(!1))
      return o(!1, `OnTimelineEntryChanged received an invalid protobuf`), 1;
    let { entry: t } = e.Body().toObject();
    if (!t)
      return (
        o(
          !1,
          `OnTimelineEntryChanged received an invalid protobuf after conversion`,
        ),
        1
      );
    let n = this.m_mapActiveTimelines.get(t.timeline_id);
    if (n) {
      let e = n.loader;
      if (e.BIsTimelineRunning(t.timeline_id))
        return e.AddRunningTimelineEntry(t), 1;
    }
    if (e.Body().game_id()) {
      let n = this.m_mapTimelineLoaders.get(e.Body().game_id());
      if (n)
        return (
          n.loader.AddEventToTimeline(
            t.timeline_id,
            parseInt(t.time),
            t.marker_icon,
            t.entry_id,
            t.marker_priority,
            t.range_title,
            t.marker_description,
            parseInt(t.range_duration),
          ),
          1
        );
    }
    return 1;
  }
  OnTimelineEntryRemoved(e) {
    let { entry_id: t, timeline_id: n, game_id: r } = e.Body().toObject();
    if (r) {
      let e = this.m_mapTimelineLoaders.get(r);
      e && e.loader.RemoveTimelineEvent(n, t);
    }
    return 1;
  }
  OnClipCreated(e) {
    let t = e.Body().summary().toObject();
    return this.InternalAddClipSummary(t), g(`New clip saved:`, t), 1;
  }
  async UploadClip(e, t, n, r) {
    let i = await p.UploadClipToSteam({
        clip_id: e,
        title: t,
        desc: n,
        visibility: r,
      }),
      a;
    if (i.GetEResult() == 1) {
      let e = i.Body().summary().toObject();
      this.InternalAddClipSummary(e),
        (a = `${c.COMMUNITY_BASE_URL}sharedfiles/filedetails/?id=${e.published_file_id}`);
    }
    return { eResult: i.GetEResult(), strURL: a };
  }
  async LoadAppsWithBackgroundVideo() {
    try {
      let t = await p.GetAppsWithBackgroundVideo({});
      if (!t.BSuccess()) {
        this.m_bLoadingAppsWithBackgroundVideo = !1;
        return;
      }
      v(`Loaded ${t.Body().apps().length} apps with timelines`),
        e(() => {
          (this.m_bLoadingAppsWithBackgroundVideo = !1),
            (this.m_rgAppsWithBackgroundVideo = t
              .Body()
              .toObject()
              .apps.sort(
                (e, t) => t.most_recent_start_time - e.most_recent_start_time,
              ));
        });
    } catch (e) {
      f(`Failed to load apps with timelines`, e),
        (this.m_bLoadingAppsWithBackgroundVideo = !1);
    }
  }
  ReloadAppsWithBackgroundVideoIfNecessary(e) {
    if (!this.m_rgAppsWithBackgroundVideo) return;
    let t = e.Body().game_id();
    x(
      e.Body().notification_type(),
      this.m_rgAppsWithBackgroundVideo.findIndex((e) => e.game_id == t) >= 0,
    ) && this.LoadAppsWithBackgroundVideo();
  }
  InternalAddClipSummary(e) {
    if (this.m_clips.has(e.clip_id) && this.m_clipsGroupByGame.has(e.game_id)) {
      let t = this.m_clipsGroupByGame.get(e.game_id);
      this.m_clipsGroupByGame.set(
        e.game_id,
        t.filter((t) => t.clip_id != e.clip_id),
      );
    }
    this.m_clips.set(e.clip_id, e),
      this.m_clipsGroupByGame.has(e.game_id) ||
        this.m_clipsGroupByGame.set(e.game_id, []),
      this.m_clipsGroupByGame.get(e.game_id).push(e);
  }
  async SaveClip(e, t, n, r, i, a, o) {
    let s = await p.SaveClip({
      game_id: e,
      start: r,
      end: i,
      name: n,
      src_clip_id: t,
      temporary: a,
      force_thumbnail: o,
    });
    if (s.GetEResult() == 1) {
      let e = s.Body().summary().toObject();
      return (
        this.InternalAddClipSummary(e),
        g(`Saved clip`, e),
        (this.m_strLastClipID = e.clip_id),
        { clipSummary: e, result: 1 }
      );
    }
    return m(`Failed to save clip`), { result: s.GetEResult() };
  }
  async DeleteClip(e) {
    let t = await p.DeleteClip({ clip_id: e });
    if (t.GetEResult() == 1) {
      let t = this.m_clips.get(e);
      this.m_clips.delete(e);
      let n = this.m_clipsGroupByGame.get(t.game_id),
        r = n.findIndex((t) => t.clip_id == e);
      n.splice(r, 1), g(`Deleted clip`, e);
    } else m(`Failed to delete clip`, e);
    return t.GetEResult();
  }
  async ExportClip(e, t, n, r) {
    if (this.m_currentlyExportingClip)
      return (
        m(`Export in progress, cannot start another one`, e), y.ConverterBusy
      );
    this.m_clipExportProgress.set(e, {
      exportPath: t,
      progress: 0,
      resultStatus: 22,
    }),
      (this.m_currentlyExportingClip = e);
    let i = await p.ExportClip({
        clip_id: e,
        export_mp4_path: t,
        settings: n,
        use_unique_filename: r,
      }),
      a = i.GetEResult() == 1 ? i.Body().result() : y.Failed;
    return (
      a == y.Success
        ? (g(`Exporting clip ${e} to ${t}`),
          (this.m_currentlyExportingClip = null),
          this.m_clipExportProgress.set(e, {
            exportPath: t,
            progress: 1,
            resultStatus: 1,
          }))
        : (m(`Failed to export clip`, e),
          this.m_clipExportProgress.set(e, {
            exportPath: t,
            progress: 0,
            resultStatus: 2,
          }),
          (this.m_currentlyExportingClip = null)),
      a
    );
  }
  UpdateClipExportPath(e, t) {
    let n = this.m_clipExportProgress.get(e);
    n && this.m_clipExportProgress.set(e, { ...n, exportPath: t });
  }
  OnExportProgress(e) {
    let t = e.Body().clip_id();
    if (
      !t ||
      !this.m_clipExportProgress.has(t) ||
      this.m_currentlyExportingClip !== t
    )
      return 8;
    let n = this.m_clipExportProgress.get(t);
    return (
      this.m_clipExportProgress.set(t, { ...n, progress: e.Body().progress() }),
      1
    );
  }
  GetClipExportProgress(e) {
    return this.m_clipExportProgress.get(e);
  }
  GetCurrentExportingClip() {
    return this.m_currentlyExportingClip;
  }
  async TakeScreenshot(e, t, n, r) {
    let i = await p.TakeScreenshot({
      game_id: e,
      timeline_id: t,
      timeline_offset_ms: Math.floor(n).toString(),
      source_clip_id: r,
    });
    return i.GetEResult() == 1
      ? (i.Body().toObject(),
        { handle: parseInt(i.Body().screenshot_id()), result: 1 })
      : (m(`Failed to take screenshot`), { result: i.GetEResult() });
  }
  async LazyLoadClips() {
    if (!this.m_bClipLoadingTriggered)
      try {
        this.m_bClipLoadingTriggered = !0;
        let t = await p.GetClips({});
        e(() => {
          t
            .Body()
            .clip()
            .forEach((e) => this.InternalAddClipSummary(e.toObject())),
            (this.m_bLoadingClips = !1);
        });
      } catch (e) {
        f(`Failed to load clips`, e), (this.m_bLoadingClips = !1);
      }
  }
  BLoadingClips() {
    return this.m_bLoadingClips;
  }
  BLoadingAppsWithBackgroundVideo() {
    return this.m_bLoadingAppsWithBackgroundVideo;
  }
  GetClipIDs(e) {
    if ((this.LazyLoadClips(), e)) {
      let t = new _(e);
      return (
        this.m_clipsGroupByGame
          .get(t.ConvertTo64BitString())
          ?.map((e) => e.clip_id) || []
      );
    }
    let t = [];
    return this.m_clips.forEach((e) => t.push(e.clip_id)), t;
  }
  GetClipSummary(e) {
    if ((this.LazyLoadClips(), this.m_clips.has(e))) return this.m_clips.get(e);
  }
  GetClipSummaries(e) {
    return (
      this.LazyLoadClips(),
      e
        .map((e) => {
          if (this.m_clips.has(e)) return this.m_clips.get(e);
        })
        .filter(Boolean)
    );
  }
  GetClipSummariesForGame(e) {
    return (
      this.LazyLoadClips(),
      this.m_clipsGroupByGame.has(e)
        ? [...this.m_clipsGroupByGame.get(e)]
        : null
    );
  }
  RegisterManualRecordingCallback(e, t) {
    return (
      this.m_mapManualRecordingCallbacks.delete(e),
      this.m_mapManualRecordingCallbacks.set(e, t),
      () => {
        this.m_mapManualRecordingCallbacks.delete(e);
      }
    );
  }
  async StartRecording(e) {
    return v(`Start manual recording`), p.StartRecording({ game_id: e });
  }
  async StopRecording(e) {
    v(`Stop manual recording`);
    let t = await p.StopRecording({ game_id: e });
    if (t.BSuccess()) {
      let e = t.Body().summary().toObject();
      this.InternalAddClipSummary(e);
    }
  }
  async SwitchRecordedGame(e) {
    return (
      v(`Switch recorded game: ` + e),
      p.SwitchBackgroundRecordingGame({ game_id: e })
    );
  }
  async CreateUserTimelineMarkers(e, t, n) {
    let r = await p.UserAddTimelineEntry({ game_id: e, clip_id: t, entry: n });
    return (
      r.GetEResult() == 1
        ? g(`User Marker Created: `, n)
        : m(
            `Failed to create User Marker at ${n.time} for game ${e} with error code ${r.GetEResult()}`,
          ),
      { eResult: r.GetEResult(), entry_id: r.Body().entry_id() }
    );
  }
  async UpdateUserTimelineMarkers(e, t, n) {
    let r = await p.UserUpdateTimelineEntry({
      game_id: e,
      clip_id: t,
      entry: n,
    });
    return (
      r.GetEResult() == 1
        ? g(`User Marker Updated: `, n)
        : m(
            `Failed to Update existing User Marker ${n.entry_id} at ${n.time} time under timeline ${n.timeline_id} for game ${e} with error code ${r.GetEResult()}`,
          ),
      r.GetEResult()
    );
  }
  async RemoveUserTimelineMarker(e, t, n, r) {
    let i = await p.UserRemoveTimelineEntry({
      game_id: e,
      clip_id: t,
      entry_id: r,
      timeline_id: n,
    });
    return (
      i.GetEResult() == 1
        ? g(`User Marker remove at ` + r)
        : m(
            `Failed to remove User Marker id ${r} for game ${e} on timeline ${n} with error code ${i.GetEResult()}`,
          ),
      i.GetEResult()
    );
  }
  async LoadThumbnails(e, t, n, r, i, a) {
    return (
      await p.GetThumbnails({
        recording_id: e,
        clip_id: t,
        timeline_id: n,
        start_offset_us: r.map((e) => Math.floor(e).toString()),
        major_axis: i,
        time_precision: +!a,
      })
    )
      .Body()
      .thumbnails();
  }
  GetAchievementInfo(e, t) {
    return this.m_fnGetAchievementInfo?.(e, t);
  }
  GetLastClip() {
    if (this.m_strLastClipID) return this.m_clips.get(this.m_strLastClipID);
  }
  GetBestClipTitle(e) {
    let t = this.GetClipSummary(e);
    return t ? t.name || u(t.date_recorded) : ``;
  }
  ManuallyDeleteRecordingForApps(e) {
    p.ManuallyDeleteRecordingsForApps({ game_ids: e });
  }
  async GetTotalDiskSpaceUsage(e, t) {
    let n = +!t,
      r = await p.GetTotalDiskSpaceUsage({ folder_path: e, type: n });
    if (r.BSuccess()) {
      let e = r.Body().size();
      return Number(e);
    }
    return 0;
  }
  async GetAvailableDiskSpace() {
    let e = await p.GetAvailableDiskSpace({});
    return e.BSuccess() ? e.Body().size() : 0;
  }
  ReportClipShare(e, t, n, r, i) {
    v(`ReportClipShare ${JSON.stringify(e)} ${t} ${n} ${r} ${i}`),
      s.ReportClipShare(this.m_transport, {
        gameid: e.ConvertTo64BitString(),
        share_method: t,
        seconds: n,
        bytes: r.toString(),
        eresult: i,
      });
  }
  ReportClipRange(e, t, n, r, i) {
    v(`ReportClipRange`, JSON.stringify(e), t, n, r, i);
    let o = a.Init(l);
    o.Body().set_gameid(e.ConvertTo64BitString()),
      o.Body().set_original_range_method(t),
      o.Body().set_seconds(n),
      o.Body().start().set_original_range_method(r.originalRangeMethod),
      o.Body().start().set_latest_range_method(r.latestRangeMethod),
      o.Body().start().set_delta_ms(Math.ceil(r.relativeMS)),
      o.Body().end().set_original_range_method(i.originalRangeMethod),
      o.Body().end().set_latest_range_method(i.latestRangeMethod),
      o.Body().end().set_delta_ms(Math.ceil(i.relativeMS)),
      s.ReportClipRange(this.m_transport, o);
  }
  GetRecordingState() {
    return this.m_recordingState;
  }
  BEnoughDiskSpace() {
    return this.m_bEnoughDiskSpace;
  }
  OnLowDiskSpace(e) {
    return (this.m_bEnoughDiskSpace = !1), 1;
  }
  async CheckEnoughDiskSpace() {
    let e = await p.GetEnoughDiskSpace({});
    e.BSuccess()
      ? (this.m_bEnoughDiskSpace = e.Body().enough_space())
      : m(`Failed to get recording drive free space ${e.GetEResult()}`);
  }
  async GetRecordingHighlights(e, t) {
    return (
      (await p.GetAndTrimPostGameHighlights({ game_id: e, created_after: t }))
        .Body()
        .events() || []
    ).map((e) => e.toObject());
  }
};
r([n.shallow], S.prototype, `m_rgAppsWithBackgroundVideo`, void 0),
  r([n], S.prototype, `m_bLoadingClips`, void 0),
  r([n], S.prototype, `m_bLoadingAppsWithBackgroundVideo`, void 0),
  r([n], S.prototype, `m_clips`, void 0),
  r([n], S.prototype, `m_clipsGroupByGame`, void 0),
  r([n], S.prototype, `m_clipExportProgress`, void 0),
  r([n], S.prototype, `m_currentlyExportingClip`, void 0),
  r([n], S.prototype, `m_recordingState`, void 0),
  r([n], S.prototype, `m_bEnoughDiskSpace`, void 0),
  r([i], S.prototype, `OnStateChanged`, null),
  r([i], S.prototype, `GetTimelineLoaderForGame`, null),
  r([i], S.prototype, `GetTimelineLoaderForClip`, null),
  r([i], S.prototype, `GetTimelineLoaderForSharedClip`, null),
  r([i], S.prototype, `OnTimelineChanged`, null),
  r([i], S.prototype, `OnRecordingSessionChanged`, null),
  r([i], S.prototype, `OnTimelineEntryChanged`, null),
  r([i], S.prototype, `OnTimelineEntryRemoved`, null),
  r([i], S.prototype, `OnClipCreated`, null),
  r([i], S.prototype, `UploadClip`, null),
  r([i], S.prototype, `SaveClip`, null),
  r([i], S.prototype, `DeleteClip`, null),
  r([i], S.prototype, `ExportClip`, null),
  r([i], S.prototype, `UpdateClipExportPath`, null),
  r([i], S.prototype, `OnExportProgress`, null),
  r([i], S.prototype, `TakeScreenshot`, null),
  r([i], S.prototype, `RegisterManualRecordingCallback`, null),
  r([i], S.prototype, `StartRecording`, null),
  r([i], S.prototype, `StopRecording`, null),
  r([i], S.prototype, `SwitchRecordedGame`, null),
  r([i], S.prototype, `CreateUserTimelineMarkers`, null),
  r([i], S.prototype, `UpdateUserTimelineMarkers`, null),
  r([i], S.prototype, `RemoveUserTimelineMarker`, null),
  r([i], S.prototype, `LoadThumbnails`, null),
  r([i], S.prototype, `GetAchievementInfo`, null),
  r([i], S.prototype, `OnLowDiskSpace`, null);
export { S as CGameRecordingStore, S as default, b as k_strGRFAQ };
