/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Dn as e,
  G as t,
  Ln as n,
  N as r,
  Pt as i,
  Sn as a,
  W as o,
  Y as s,
  _ as c,
  qn as l,
  qt as u,
} from "./chunk~d3515eca4e.js";
import { n as d } from "./chunk~e464778a03.js";
import {
  _ as f,
  g as p,
  t as m,
  v as h,
  x as g,
  y as _,
} from "./chunk~4c84692d6e.js";
import { t as v } from "./chunk~198b531c82.js";
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
    o(this);
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
    ((this.m_transport = e),
      (this.m_fnGetAchievementInfo = t),
      i.IN_STEAMUI &&
        (v.RegisterForNotifyTimelineChanged(this.OnTimelineChanged),
        v.RegisterForNotifyRecordingSessionChanged(
          this.OnRecordingSessionChanged,
        ),
        v.RegisterForNotifyTimelineEntryChanged(this.OnTimelineEntryChanged),
        v.RegisterForNotifyTimelineEntryRemoved(this.OnTimelineEntryRemoved),
        v.RegisterForNotifyClipCreated(this.OnClipCreated),
        v.RegisterForNotifyExportProgress(this.OnExportProgress),
        v.RegisterForNotifyLowDiskSpace(this.OnLowDiskSpace),
        v.RegisterForNotifyStateChanged(this.OnStateChanged),
        await Promise.all([
          this.LoadAppsWithBackgroundVideo(),
          this.CheckEnoughDiskSpace(),
          this.UpdateState(),
        ])));
  }
  async UpdateState() {
    let e = await v.GetState({});
    if (!e.BSuccess()) {
      console.warn(`Failed to initialize game recording state`);
      return;
    }
    let t = e.Body().toObject();
    this.m_bEnableH265Recording = t?.is_h265_enabled ?? !1;
  }
  OnStateChanged() {
    return (this.UpdateState(), 1);
  }
  GetAppsWithBackgroundVideo() {
    return this.m_rgAppsWithBackgroundVideo;
  }
  IsGameRecordingH265Enabled() {
    return this.m_bEnableH265Recording;
  }
  GetTimelineLoaderForGame(e) {
    l(e, `Invalid GameID: ` + e);
    let t = this.m_mapTimelineLoaders.get(e);
    if (!t) {
      let n = new m();
      (n.LoadTimelinesForBackgroundVideo(e),
        (t = { loader: n, nRefCount: 0 }),
        this.m_mapTimelineLoaders.set(e, t));
    }
    return (
      t.nRefCount++,
      f(
        `CGameRecordingStore::GetTimelineLoaderForGame incrementing refCount ${t.nRefCount} for ${e}` +
          (t.nRefCount == 1 ? ` and it was created` : ``),
      ),
      {
        loader: t.loader,
        release: () => {
          (t.nRefCount--,
            f(
              `CGameRecordingStore::GetTimelineLoaderForGame reducing refCount ${t.nRefCount} for ${e}` +
                (t.nRefCount <= 0 ? ` will delete` : ``),
            ),
            t.nRefCount <= 0 && this.m_mapTimelineLoaders.delete(e));
        },
      }
    );
  }
  GetTimelineLoaderForClip(e) {
    l(e, `Invalid ClipID: ` + e);
    let t = this.m_mapClipLoaders.get(e);
    if (!t) {
      let n = new m();
      (n.LoadTimelinesForClip(e),
        (t = { loader: n, nRefCount: 0 }),
        this.m_mapClipLoaders.set(e, t));
    }
    return (
      t.nRefCount++,
      {
        loader: t.loader,
        release: () => {
          (t.nRefCount--,
            t.nRefCount <= 0 && this.m_mapTimelineLoaders.delete(e));
        },
      }
    );
  }
  GetTimelineLoaderForSharedClip(e) {
    l(e, `Invalid clip`);
    let t = this.m_mapSharedClipLoaders.get(e.clip_id);
    if (!t) {
      let n = new m();
      (n.LoadTimelinesForSharedClip(e),
        (t = { loader: n, nRefCount: 0 }),
        this.m_mapClipLoaders.set(e.clip_id, t));
    }
    return (
      t.nRefCount++,
      {
        loader: t.loader,
        release: () => {
          (t.nRefCount--,
            t.nRefCount <= 0 && this.m_mapTimelineLoaders.delete(e.clip_id));
        },
      }
    );
  }
  OnTimelineChanged(e) {
    (p() && e.DEBUG_LogToConsole(),
      this.ReloadAppsWithBackgroundVideoIfNecessary(e));
    let t = e.Body().notification_type(),
      n = e.Body().timeline_id(),
      r = e.Body().game_id();
    switch (t) {
      case 1:
      case 4: {
        let t = this.GetTimelineLoaderForGame(r);
        (this.m_mapActiveTimelines.set(n, t),
          t.loader.AddRunningTimeline(n, r, e.Body().start_time()));
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
    (r === 1 || r === 2) && this.LoadAppsWithBackgroundVideo();
    let i = this.m_mapTimelineLoaders.get(n);
    return (i && i.loader.RecordingSessionChanged(t), 1);
  }
  OnTimelineEntryChanged(e) {
    if (!e.Body().entry(!1))
      return (l(!1, `OnTimelineEntryChanged received an invalid protobuf`), 1);
    let { entry: t } = e.Body().toObject();
    if (!t)
      return (
        l(
          !1,
          `OnTimelineEntryChanged received an invalid protobuf after conversion`,
        ),
        1
      );
    let n = this.m_mapActiveTimelines.get(t.timeline_id);
    if (n) {
      let e = n.loader;
      if (e.BIsTimelineRunning(t.timeline_id))
        return (e.AddRunningTimelineEntry(t), 1);
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
    return (this.InternalAddClipSummary(t), f(`New clip saved:`, t), 1);
  }
  async UploadClip(e, t, n, r) {
    let a = await v.UploadClipToSteam({
        clip_id: e,
        title: t,
        desc: n,
        visibility: r,
      }),
      o;
    if (a.GetEResult() == 1) {
      let e = a.Body().summary().toObject();
      (this.InternalAddClipSummary(e),
        (o = `${i.COMMUNITY_BASE_URL}sharedfiles/filedetails/?id=${e.published_file_id}`));
    }
    return { eResult: a.GetEResult(), strURL: o };
  }
  async LoadAppsWithBackgroundVideo() {
    try {
      let e = await v.GetAppsWithBackgroundVideo({});
      if (!e.BSuccess()) {
        this.m_bLoadingAppsWithBackgroundVideo = !1;
        return;
      }
      (h(`Loaded ${e.Body().apps().length} apps with timelines`),
        s(() => {
          ((this.m_bLoadingAppsWithBackgroundVideo = !1),
            (this.m_rgAppsWithBackgroundVideo = e
              .Body()
              .toObject()
              .apps.sort(
                (e, t) => t.most_recent_start_time - e.most_recent_start_time,
              )));
        }));
    } catch (e) {
      (_(`Failed to load apps with timelines`, e),
        (this.m_bLoadingAppsWithBackgroundVideo = !1));
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
    (this.m_clips.set(e.clip_id, e),
      this.m_clipsGroupByGame.has(e.game_id) ||
        this.m_clipsGroupByGame.set(e.game_id, []),
      this.m_clipsGroupByGame.get(e.game_id).push(e));
  }
  async SaveClip(e, t, n, r, i, a, o) {
    let s = await v.SaveClip({
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
        f(`Saved clip`, e),
        (this.m_strLastClipID = e.clip_id),
        { clipSummary: e, result: 1 }
      );
    }
    return (g(`Failed to save clip`), { result: s.GetEResult() });
  }
  async DeleteClip(e) {
    let t = await v.DeleteClip({ clip_id: e });
    if (t.GetEResult() == 1) {
      let t = this.m_clips.get(e);
      this.m_clips.delete(e);
      let n = this.m_clipsGroupByGame.get(t.game_id),
        r = n.findIndex((t) => t.clip_id == e);
      (n.splice(r, 1), f(`Deleted clip`, e));
    } else g(`Failed to delete clip`, e);
    return t.GetEResult();
  }
  async ExportClip(e, t, n, r) {
    if (this.m_currentlyExportingClip)
      return (
        g(`Export in progress, cannot start another one`, e), y.ConverterBusy
      );
    (this.m_clipExportProgress.set(e, {
      exportPath: t,
      progress: 0,
      resultStatus: 22,
    }),
      (this.m_currentlyExportingClip = e));
    let i = await v.ExportClip({
        clip_id: e,
        export_mp4_path: t,
        settings: n,
        use_unique_filename: r,
      }),
      a = i.GetEResult() == 1 ? i.Body().result() : y.Failed;
    return (
      a == y.Success
        ? (f(`Exporting clip ${e} to ${t}`),
          (this.m_currentlyExportingClip = null),
          this.m_clipExportProgress.set(e, {
            exportPath: t,
            progress: 1,
            resultStatus: 1,
          }))
        : (g(`Failed to export clip`, e),
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
    let i = await v.TakeScreenshot({
      game_id: e,
      timeline_id: t,
      timeline_offset_ms: Math.floor(n).toString(),
      source_clip_id: r,
    });
    return i.GetEResult() == 1
      ? (i.Body().toObject(),
        { handle: parseInt(i.Body().screenshot_id()), result: 1 })
      : (g(`Failed to take screenshot`), { result: i.GetEResult() });
  }
  async LazyLoadClips() {
    if (!this.m_bClipLoadingTriggered)
      try {
        this.m_bClipLoadingTriggered = !0;
        let e = await v.GetClips({});
        s(() => {
          (e
            .Body()
            .clip()
            .forEach((e) => this.InternalAddClipSummary(e.toObject())),
            (this.m_bLoadingClips = !1));
        });
      } catch (e) {
        (_(`Failed to load clips`, e), (this.m_bLoadingClips = !1));
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
      let t = new d(e);
      return (
        this.m_clipsGroupByGame
          .get(t.ConvertTo64BitString())
          ?.map((e) => e.clip_id) || []
      );
    }
    let t = [];
    return (this.m_clips.forEach((e) => t.push(e.clip_id)), t);
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
    return (h(`Start manual recording`), v.StartRecording({ game_id: e }));
  }
  async StopRecording(e) {
    h(`Stop manual recording`);
    let t = await v.StopRecording({ game_id: e });
    if (t.BSuccess()) {
      let e = t.Body().summary().toObject();
      this.InternalAddClipSummary(e);
    }
  }
  async SwitchRecordedGame(e) {
    return (
      h(`Switch recorded game: ` + e),
      v.SwitchBackgroundRecordingGame({ game_id: e })
    );
  }
  async CreateUserTimelineMarkers(e, t, n) {
    let r = await v.UserAddTimelineEntry({ game_id: e, clip_id: t, entry: n });
    return (
      r.GetEResult() == 1
        ? f(`User Marker Created: `, n)
        : g(
            `Failed to create User Marker at ${n.time} for game ${e} with error code ${r.GetEResult()}`,
          ),
      { eResult: r.GetEResult(), entry_id: r.Body().entry_id() }
    );
  }
  async UpdateUserTimelineMarkers(e, t, n) {
    let r = await v.UserUpdateTimelineEntry({
      game_id: e,
      clip_id: t,
      entry: n,
    });
    return (
      r.GetEResult() == 1
        ? f(`User Marker Updated: `, n)
        : g(
            `Failed to Update existing User Marker ${n.entry_id} at ${n.time} time under timeline ${n.timeline_id} for game ${e} with error code ${r.GetEResult()}`,
          ),
      r.GetEResult()
    );
  }
  async RemoveUserTimelineMarker(e, t, n, r) {
    let i = await v.UserRemoveTimelineEntry({
      game_id: e,
      clip_id: t,
      entry_id: r,
      timeline_id: n,
    });
    return (
      i.GetEResult() == 1
        ? f(`User Marker remove at ` + r)
        : g(
            `Failed to remove User Marker id ${r} for game ${e} on timeline ${n} with error code ${i.GetEResult()}`,
          ),
      i.GetEResult()
    );
  }
  async LoadThumbnails(e, t, n, r, i, a) {
    return (
      await v.GetThumbnails({
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
    return t ? t.name || c(t.date_recorded) : ``;
  }
  ManuallyDeleteRecordingForApps(e) {
    v.ManuallyDeleteRecordingsForApps({ game_ids: e });
  }
  async GetTotalDiskSpaceUsage(e, t) {
    let n = +!t,
      r = await v.GetTotalDiskSpaceUsage({ folder_path: e, type: n });
    if (r.BSuccess()) {
      let e = r.Body().size();
      return Number(e);
    }
    return 0;
  }
  async GetAvailableDiskSpace() {
    let e = await v.GetAvailableDiskSpace({});
    return e.BSuccess() ? e.Body().size() : 0;
  }
  ReportClipShare(t, n, r, i, a) {
    (h(`ReportClipShare ${JSON.stringify(t)} ${n} ${r} ${i} ${a}`),
      e.ReportClipShare(this.m_transport, {
        gameid: t.ConvertTo64BitString(),
        share_method: n,
        seconds: r,
        bytes: i.toString(),
        eresult: a,
      }));
  }
  ReportClipRange(t, n, r, i, o) {
    h(`ReportClipRange`, JSON.stringify(t), n, r, i, o);
    let s = u.Init(a);
    (s.Body().set_gameid(t.ConvertTo64BitString()),
      s.Body().set_original_range_method(n),
      s.Body().set_seconds(r),
      s.Body().start().set_original_range_method(i.originalRangeMethod),
      s.Body().start().set_latest_range_method(i.latestRangeMethod),
      s.Body().start().set_delta_ms(Math.ceil(i.relativeMS)),
      s.Body().end().set_original_range_method(o.originalRangeMethod),
      s.Body().end().set_latest_range_method(o.latestRangeMethod),
      s.Body().end().set_delta_ms(Math.ceil(o.relativeMS)),
      e.ReportClipRange(this.m_transport, s));
  }
  GetRecordingState() {
    return this.m_recordingState;
  }
  BEnoughDiskSpace() {
    return this.m_bEnoughDiskSpace;
  }
  OnLowDiskSpace(e) {
    return ((this.m_bEnoughDiskSpace = !1), 1);
  }
  async CheckEnoughDiskSpace() {
    let e = await v.GetEnoughDiskSpace({});
    e.BSuccess()
      ? (this.m_bEnoughDiskSpace = e.Body().enough_space())
      : g(`Failed to get recording drive free space ${e.GetEResult()}`);
  }
  async GetRecordingHighlights(e, t) {
    return (
      (await v.GetAndTrimPostGameHighlights({ game_id: e, created_after: t }))
        .Body()
        .events() || []
    ).map((e) => e.toObject());
  }
};
(r([t.shallow], S.prototype, `m_rgAppsWithBackgroundVideo`, void 0),
  r([t], S.prototype, `m_bLoadingClips`, void 0),
  r([t], S.prototype, `m_bLoadingAppsWithBackgroundVideo`, void 0),
  r([t], S.prototype, `m_clips`, void 0),
  r([t], S.prototype, `m_clipsGroupByGame`, void 0),
  r([t], S.prototype, `m_clipExportProgress`, void 0),
  r([t], S.prototype, `m_currentlyExportingClip`, void 0),
  r([t], S.prototype, `m_recordingState`, void 0),
  r([t], S.prototype, `m_bEnoughDiskSpace`, void 0),
  r([n], S.prototype, `OnStateChanged`, null),
  r([n], S.prototype, `GetTimelineLoaderForGame`, null),
  r([n], S.prototype, `GetTimelineLoaderForClip`, null),
  r([n], S.prototype, `GetTimelineLoaderForSharedClip`, null),
  r([n], S.prototype, `OnTimelineChanged`, null),
  r([n], S.prototype, `OnRecordingSessionChanged`, null),
  r([n], S.prototype, `OnTimelineEntryChanged`, null),
  r([n], S.prototype, `OnTimelineEntryRemoved`, null),
  r([n], S.prototype, `OnClipCreated`, null),
  r([n], S.prototype, `UploadClip`, null),
  r([n], S.prototype, `SaveClip`, null),
  r([n], S.prototype, `DeleteClip`, null),
  r([n], S.prototype, `ExportClip`, null),
  r([n], S.prototype, `UpdateClipExportPath`, null),
  r([n], S.prototype, `OnExportProgress`, null),
  r([n], S.prototype, `TakeScreenshot`, null),
  r([n], S.prototype, `RegisterManualRecordingCallback`, null),
  r([n], S.prototype, `StartRecording`, null),
  r([n], S.prototype, `StopRecording`, null),
  r([n], S.prototype, `SwitchRecordedGame`, null),
  r([n], S.prototype, `CreateUserTimelineMarkers`, null),
  r([n], S.prototype, `UpdateUserTimelineMarkers`, null),
  r([n], S.prototype, `RemoveUserTimelineMarker`, null),
  r([n], S.prototype, `LoadThumbnails`, null),
  r([n], S.prototype, `GetAchievementInfo`, null),
  r([n], S.prototype, `OnLowDiskSpace`, null));
export { S as CGameRecordingStore, S as default, b as k_strGRFAQ };
