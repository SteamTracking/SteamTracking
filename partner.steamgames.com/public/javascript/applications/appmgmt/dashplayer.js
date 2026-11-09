/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $t as e,
  Ct as t,
  N as n,
  S as r,
  Y as i,
  ct as a,
  ft as o,
  i as s,
  k as c,
  nt as l,
  on as u,
  wt as d,
  x as f,
} from "./mobx.esm.js";
import { Ft as p, Rt as m, _t as h, a as ee, t as te, vt as g } from "./src.js";
import { Nn as ne, Xa as re, ia as _, oa as v } from "./dialogs.js";
import { t as ie } from "./axios.js";
import "./steamid.js";
import { r as ae } from "./numberformats.js";
var y = u(ie(), 1),
  b = new p(`video`);
b.Info;
var x = b.Debug,
  S = b.Error;
b.Warning;
function C(e) {
  let t = Math.floor(e / 3600),
    n = Math.floor(e / 60) % 60,
    r = Math.floor(e) % 60,
    i = r.toString();
  r < 10 && (i = `0` + i);
  let a = n.toString();
  return (
    n < 10 && t > 0 && (a = `0` + a), (t > 0 ? t + `:` : ``) + a + `:` + i
  );
}
function oe() {
  let e = !1;
  try {
    e = MediaSource.isTypeSupported(`video/mp4;codecs="avc1.4d4032,mp4a.40.2"`);
  } catch {}
  return e;
}
function se() {
  let e = document
    .createElement(`video`)
    .canPlayType(
      `application/vnd.apple.mpegurl;codecs="avc1.64001f,mp4a.40.02"`,
    );
  return e === `probably` || e === `maybe`;
}
var ce = 5,
  w = -1,
  T = 3,
  E = 3,
  D = 1e6,
  le = 1024,
  ue = class {
    steamid = ``;
    host = ``;
    playback_position = 0;
    playback_speed = 1;
    video_res = 0;
    audio_rate = 0;
    audio_ch = 0;
    bw_avg = 0;
    bw_required = 0;
    broadcast_accountid = 0;
    useragent = ``;
    sessionid = ``;
    broadcast_origin = ``;
  },
  de = class extends ue {
    video_buffer = 0;
    audio_buffer = 0;
    seconds_delta = 0;
    bytes_received = 0;
    frames_dropped = 0;
    frames_decoded = 0;
    failed_segments = 0;
    bw_min = 0;
    bw_max = 0;
    seg_time_avg = 0;
    seg_time_min = 0;
    seg_time_max = 0;
    initial_vid_res = 0;
    ttff = 0;
    seg_duration = 0;
  },
  fe = class extends ue {
    last_segment_response = 0;
    audio_stalled = !1;
    active_downloads = 0;
    vid_down_progress = 0;
    segment_stalled = 0;
    segment1_bytes = 0;
    segment1_time = 0;
    segment2_bytes = 0;
    segment2_time = 0;
    segment3_bytes = 0;
    segment3_time = 0;
  },
  O = class {
    m_steamIDBroadcast = ``;
    m_steamIDViewer = ``;
    m_broadcastID = ``;
    m_ulViewerToken = ``;
    m_host = ``;
    m_strBroadcastOrigin = ``;
    m_strStatsLink = ``;
    m_strStalledLink = ``;
    m_strEventLogLink = ``;
    m_allTimeSnapshot = new k(0);
    m_rgSnapShots = Array(new k(0));
    m_bAtLeastOneUserRepresentation = !1;
    m_videoResolution = 0;
    m_audioRate = 0;
    m_audioChannel = 0;
    m_strBufferingVideoResolution = `0x0@0`;
    m_nPlaybackVideoResolution = 0;
    m_strPlaybackVideoResolution = `0x0`;
    m_htmlVideoResolution = 0;
    m_strHtmlVideoDisplay = ``;
    m_nAudioBandwidth = 0;
    m_nVideoBandwidth = 0;
    m_nBandwidthRequired = 0;
    m_nCurBandwidthVideo = 0;
    m_nAudioBufferedMS = 0;
    m_nVideoBufferedMS = 0;
    m_nActiveDownloads = 0;
    m_nVideoDownloadProgress = 0;
    m_videoBufferedRanges = null;
    m_audioBufferedRanges = null;
    m_nSegmentDurationMS = 0;
    m_nPlaybackRate = 0;
    m_nPerfTimeCreated = 0;
    m_nTimeToFirstFrameMS = w;
    m_fpsMonitor = new A();
    constructor() {
      f(this);
    }
    StartingPlayback() {
      this.m_nPerfTimeCreated = performance.now();
    }
    GetBytesReceivedToDisplay() {
      return ae(this.m_allTimeSnapshot.m_nBytesReceived, 1);
    }
    GetBufferingResolutionToDisplay() {
      return this.m_strBufferingVideoResolution;
    }
    GetPlaybackResolutionToDisplay() {
      return this.m_strPlaybackVideoResolution;
    }
    GetHTMLVideoResolutionToDisplay() {
      return this.m_strHtmlVideoDisplay;
    }
    GetDroppedFramesToDisplay() {
      return (
        this.m_allTimeSnapshot.m_nFramesDropped +
        `/` +
        this.m_allTimeSnapshot.m_nFramesDecoded
      );
    }
    GetStalledEventsToDisplay() {
      return String(this.m_allTimeSnapshot.m_nStallEvents);
    }
    GetFailedDownloadsToDisplay() {
      return String(this.m_allTimeSnapshot.m_nFailedSegments);
    }
    GetNumBufferedVideoRanges() {
      return this.m_videoBufferedRanges ? this.m_videoBufferedRanges.length : 0;
    }
    GetNumBufferedAudioRanges() {
      return this.m_audioBufferedRanges ? this.m_audioBufferedRanges.length : 0;
    }
    GetBufferedVideoSegmentForDisplay(e) {
      return this.m_videoBufferedRanges && e < this.m_videoBufferedRanges.length
        ? C(this.m_videoBufferedRanges.start(e)) +
            ` - ` +
            C(this.m_videoBufferedRanges.end(e))
        : v(`#DASHPlayerStats_VideoNoRangeInformation`);
    }
    GetBufferedAudioSegmentForDisplay(e) {
      return this.m_audioBufferedRanges && e < this.m_audioBufferedRanges.length
        ? C(this.m_audioBufferedRanges.start(e)) +
            ` - ` +
            C(this.m_audioBufferedRanges.end(e))
        : v(`#DASHPlayerStats_AudioNoRangeInformation`);
    }
    GetBandwidthStatsToDisplay() {
      if (this.m_rgSnapShots.length < 2)
        return (
          (this.m_allTimeSnapshot.m_nBandwidthMin / D).toFixed(E) +
          ` / ` +
          (this.m_allTimeSnapshot.m_nBandwidthMax / D).toFixed(E) +
          ` / ` +
          (this.m_allTimeSnapshot.GetAverageBandwidth() / D).toFixed(E)
        );
      {
        let e = this.m_rgSnapShots[this.m_rgSnapShots.length - 2],
          t = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
        return (
          (
            (t.m_nBandwidthMin == 0
              ? e.m_nBandwidthMin
              : Math.min(e.m_nBandwidthMin, t.m_nBandwidthMin)) / D
          ).toFixed(E) +
          ` / ` +
          (Math.max(e.m_nBandwidthMax, t.m_nBandwidthMax) / D).toFixed(E) +
          ` / ` +
          (e.GetAverageBandwidthFromTwo(t) / D).toFixed(E)
        );
      }
    }
    GetDownloadTimeStatsToDisplay() {
      if (this.m_rgSnapShots.length < 2)
        return (
          (this.m_allTimeSnapshot.m_nSegmentDownloadTimeMinMS / 1e3).toFixed(
            E,
          ) +
          ` / ` +
          (this.m_allTimeSnapshot.m_nSegmentDownloadTimeMaxMS / 1e3).toFixed(
            E,
          ) +
          ` / ` +
          (this.m_allTimeSnapshot.GetAverageDownloadTime() / 1e3).toFixed(E)
        );
      {
        let e = this.m_rgSnapShots[this.m_rgSnapShots.length - 2],
          t = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
        return (
          (
            (t.m_nSegmentDownloadTimeMinMS == 0
              ? e.m_nSegmentDownloadTimeMinMS
              : Math.min(
                  e.m_nSegmentDownloadTimeMinMS,
                  t.m_nSegmentDownloadTimeMinMS,
                )) / 1e3
          ).toFixed(E) +
          ` / ` +
          (
            Math.max(
              e.m_nSegmentDownloadTimeMaxMS,
              t.m_nSegmentDownloadTimeMaxMS,
            ) / 1e3
          ).toFixed(E) +
          ` / ` +
          (e.GetAverageDownloadTimeFromTwo(t) / 1e3).toFixed(E)
        );
      }
    }
    BHasFrameInformation() {
      return this.m_allTimeSnapshot.m_nFramesDecoded > 0;
    }
    GetBandwidthRequiredToDisplay() {
      return (this.m_nBandwidthRequired / D).toFixed(E);
    }
    GetBandwithVideoToDisplay() {
      return (this.m_nCurBandwidthVideo / D).toFixed(E);
    }
    GetContentServerToDisplay() {
      return this.m_host;
    }
    GetVideoBufferedToDisplay() {
      return (this.m_nVideoBufferedMS / 1e3).toFixed(T);
    }
    GetAudioBufferedToDisplay() {
      return (this.m_nAudioBufferedMS / 1e3).toFixed(T);
    }
    GetActiveDownloadsToDisplay() {
      return String(this.m_nActiveDownloads);
    }
    GetVideoDownloadProgressToDisplay() {
      return this.m_nVideoDownloadProgress
        ? String(Math.round(this.m_nVideoDownloadProgress * 100)) + `%`
        : `100%`;
    }
    GetTimeToFirstFrameToDisplay() {
      return this.m_nTimeToFirstFrameMS == w
        ? `Unknown`
        : String(this.m_nTimeToFirstFrameMS);
    }
    GetPersistentFrameDropsForDisplay() {
      return String(this.m_fpsMonitor.BIsDroppingFrames());
    }
    GetCurrentFPSForDisplay() {
      return this.m_fpsMonitor.BHasCurrentFPS()
        ? this.m_fpsMonitor.GetCurrentFPS().toFixed(1)
        : v(`#DASHPlayerStats_Tracking`);
    }
    GetPlaybackRateForDisplay() {
      return this.m_nPlaybackRate.toFixed(1) + `x`;
    }
    GetFPSMonitor() {
      return this.m_fpsMonitor;
    }
    SetHTMLVideoPlayerDisplay(e, t, n, r) {
      (this.m_htmlVideoResolution != r &&
        ((this.m_htmlVideoResolution = r),
        (this.m_strHtmlVideoDisplay = n + `x` + r)),
        this.m_nPlaybackVideoResolution != t &&
          ((this.m_nPlaybackVideoResolution = t),
          (this.m_strPlaybackVideoResolution = e + `x` + t)));
    }
    SetVideoPlaybackResolution(e, t, n) {
      (this.m_videoResolution == 0 &&
        ((this.m_allTimeSnapshot.m_nInitialVideoResolution = t),
        (this.m_rgSnapShots[
          this.m_rgSnapShots.length - 1
        ].m_nInitialVideoResolution = t)),
        (this.m_strBufferingVideoResolution = e + `x` + t + `@` + n),
        (this.m_videoResolution = t));
    }
    SetRepresentation(e) {
      if (e) {
        if (e.nAudioSamplingRate)
          ((this.m_audioRate = Math.round(e.nBandwidth / 1e3)),
            (this.m_audioChannel = e.nAudioChannels || 0),
            (this.m_nAudioBandwidth = e.nBandwidth || 0));
        else if (e.nWidth && e.nHeight) {
          let t = e.nFrameRate || 0;
          (this.SetVideoPlaybackResolution(e.nWidth, e.nHeight, t),
            (this.m_nVideoBandwidth = e.nBandwidth || 0));
        }
        this.m_nBandwidthRequired =
          this.m_nAudioBandwidth + this.m_nVideoBandwidth;
      }
    }
    MarkAtLeastOneUserRepresentation() {
      this.m_bAtLeastOneUserRepresentation = !0;
    }
    SetCurrentVideoBandwidth(e) {
      this.m_nCurBandwidthVideo = e;
    }
    SetSegmentDurationMS(e) {
      this.m_nSegmentDurationMS = e;
    }
    SetBroadcasterAndViewerInfo(e, t, n, r) {
      ((this.m_steamIDBroadcast = e),
        (this.m_steamIDViewer = t),
        (this.m_broadcastID = n),
        (this.m_ulViewerToken = r));
    }
    SetAnalyticLinks(e, t, n) {
      ((this.m_strStatsLink = e),
        (this.m_strStalledLink = t),
        (this.m_strEventLogLink = n));
    }
    SetVideoInitializationURL(e) {
      let t = new URL(e);
      ((this.m_host = t.hostname),
        (this.m_strBroadcastOrigin =
          t.searchParams.get(`broadcast_origin`) || ``));
      let n = this.m_strBroadcastOrigin.indexOf(`:`);
      n !== -1 &&
        (this.m_strBroadcastOrigin = this.m_strBroadcastOrigin.substr(0, n));
    }
    SetAudioRate(e) {
      this.m_audioRate = e;
    }
    CaptureFrequentlyUpdatingInformation(e, t) {
      let n = this.ExtractFrameInfo(e);
      (this.LogFrameInfo(n), this.LogBufferDuration(t, e));
    }
    LogDownload(e, t) {
      (this.m_allTimeSnapshot.SegmentReceived(e, t),
        this.m_rgSnapShots[this.m_rgSnapShots.length - 1].SegmentReceived(
          e,
          t,
        ));
    }
    LogSegmentDownloadFailure(e, t) {
      ((this.m_allTimeSnapshot.m_nFailedSegments += 1),
        (this.m_rgSnapShots[this.m_rgSnapShots.length - 1].m_nFailedSegments +=
          1),
        (this.m_allTimeSnapshot.m_nLastSegementDownloadStatus = t),
        (this.m_rgSnapShots[
          this.m_rgSnapShots.length - 1
        ].m_nLastSegementDownloadStatus = t),
        this.LogDownload(0, e));
    }
    LogVideoError(e) {}
    LogVideoOnCanPlay() {
      this.m_nTimeToFirstFrameMS === w &&
        (this.m_nTimeToFirstFrameMS = Math.ceil(
          performance.now() - this.m_nPerfTimeCreated,
        ));
    }
    LogErrorEvent(e, t) {}
    ReportVideoStalled(e, t) {
      if (
        ((this.m_allTimeSnapshot.m_nStallEvents += 1),
        this.m_strStalledLink.length == 0)
      )
        return;
      let n = this.FindBehindSegmentLoader(e, t);
      if (!n) {
        x(`DASHStats: Did not find any audio or video loaders`);
        return;
      }
      this.m_rgSnapShots[this.m_rgSnapShots.length - 1].m_nStallEvents += 1;
      let r = new fe();
      (this.GatherCommonStats(
        r,
        t,
        n.GetBandwidthRequired(),
        n.GetAvgDownloadRate(),
      ),
        (r.last_segment_response =
          this.m_rgSnapShots[
            this.m_rgSnapShots.length - 1
          ].m_nLastSegementDownloadStatus),
        (r.audio_stalled = n.ContainsAudio()),
        this.CaptureActiveDownloads(e),
        (r.active_downloads = this.m_nActiveDownloads),
        (r.vid_down_progress = this.m_nVideoDownloadProgress));
      let i = n.GetDownloadHistory(),
        a = 0;
      for (let e = i.length - 1; e >= 0 && a < T; --e)
        (++a,
          (r[`segment` + a + `_bytes`] = i[e].cubData),
          (r[`segment` + a + `_time`] = Math.round(i[e].nDownloadMS) / 1e3));
      this.SendReportToServer(r, this.m_strStalledLink);
    }
    FindBehindSegmentLoader(e, t) {
      let n = !1,
        r = !1,
        i = t.currentTime,
        a = null,
        o = null;
      for (let t of e)
        ((o = t.ContainsAudio() ? t : o),
          (a = t.ContainsVideo() ? t : o),
          t.BHasEnoughBuffered(i) &&
            ((r ||= t.ContainsAudio()), (n ||= t.ContainsVideo())));
      return ((r ||= o == null), !n || (n && r) ? a : o);
    }
    ExtractFrameInfo(e) {
      let t = 0,
        n = 0;
      if (e.getVideoPlaybackQuality)
        try {
          let r = e.getVideoPlaybackQuality();
          ((n = r.totalVideoFrames), (t = r.droppedVideoFrames));
        } catch (e) {
          x(
            `Browser does not support HTMLVideoElement.getVideoPlaybackQuality()`,
            e instanceof Error ? e.message : ``,
          );
        }
      else
        e.webkitDecodedFrames
          ? ((n = e.webkitDecodedFrames), (t = e.webkitDroppedFrames))
          : e.webkitDecodedFrameCount &&
            ((n = e.webkitDecodedFrameCount), (t = e.webkitDroppedFrameCount));
      return { framesDecoded: n, framesDropped: t };
    }
    LogFrameInfo(e) {
      ((this.m_allTimeSnapshot.m_nFramesDecoded = e.framesDecoded),
        (this.m_allTimeSnapshot.m_nFramesDropped = e.framesDropped));
      let t = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
      if (this.m_rgSnapShots.length == 1)
        ((t.m_nFramesDecoded = e.framesDecoded),
          (t.m_nFramesDropped = e.framesDropped));
      else {
        let n = this.m_rgSnapShots[this.m_rgSnapShots.length - 2];
        ((t.m_nFramesDecoded = e.framesDecoded - n.m_nFramesDecoded),
          (t.m_nFramesDropped = e.framesDropped - n.m_nFramesDropped));
      }
    }
    LogBufferDuration(e, t) {
      this.m_nActiveDownloads = 0;
      for (let n of e)
        (n.ContainsAudio()
          ? ((this.m_nAudioBufferedMS = n.GetAmountBufferedMS(t.currentTime)),
            (this.m_audioBufferedRanges = n.GetSourceBufferTimeRanges()))
          : n.ContainsVideo() &&
            ((this.m_nVideoBufferedMS = n.GetAmountBufferedMS(t.currentTime)),
            (this.m_videoBufferedRanges = n.GetSourceBufferTimeRanges())),
          (this.m_nActiveDownloads += n.GetActiveDownloads()),
          n.ContainsVideo() &&
            (this.m_nVideoDownloadProgress = n.GetActiveDownloadProgress()));
      this.m_nPlaybackRate = t.playbackRate;
    }
    CaptureActiveDownloads(e) {
      this.m_nActiveDownloads = 0;
      for (let t of e)
        ((this.m_nActiveDownloads += t.GetActiveDownloads()),
          t.ContainsVideo() &&
            (this.m_nVideoDownloadProgress = t.GetActiveDownloadProgress()));
    }
    ReportPlayerStats(e, t) {
      if (this.m_strStatsLink.length == 0) return;
      let n = this.ExtractFrameInfo(t);
      if (
        n.framesDecoded == this.m_allTimeSnapshot.m_nFramesDecoded &&
        this.m_rgSnapShots[this.m_rgSnapShots.length - 1].m_nBytesReceived == 0
      ) {
        this.CreateNewEmptySnapshot(t.videoHeight);
        return;
      }
      (this.LogFrameInfo(n), this.LogBufferDuration(e, t));
      let r = new de(),
        i = this.m_rgSnapShots[this.m_rgSnapShots.length - 1];
      ((r.frames_decoded = i.m_nFramesDecoded),
        (r.frames_dropped = i.m_nFramesDropped),
        (r.bytes_received = i.m_nBytesReceived),
        (r.seconds_delta = Math.round((Date.now() - i.m_timeMS) / 1e3)),
        (r.failed_segments = i.m_nFailedSegments),
        (r.bw_min = i.m_nBandwidthMin),
        (r.bw_max = i.m_nBandwidthMax),
        (r.audio_buffer = Math.round(this.m_nAudioBufferedMS / 1e3)),
        (r.video_buffer = Math.round(this.m_nVideoBufferedMS / 1e3)),
        (r.seg_time_avg = Math.round(i.GetAverageDownloadTime()) / 1e3),
        (r.seg_time_min = Math.round(i.m_nSegmentDownloadTimeMinMS) / 1e3),
        (r.seg_time_max = Math.round(i.m_nSegmentDownloadTimeMaxMS) / 1e3),
        (r.initial_vid_res = i.m_nInitialVideoResolution),
        (r.ttff = this.m_nTimeToFirstFrameMS),
        (r.seg_duration = this.m_nSegmentDurationMS),
        this.GatherCommonStats(
          r,
          t,
          this.m_nBandwidthRequired,
          i.GetAverageBandwidth(),
        ),
        this.CreateNewEmptySnapshot(t.videoHeight),
        this.SendReportToServer(r, this.m_strStatsLink));
    }
    GetPlayerStatsSummary() {
      return {
        nTimeToFirstFrameMS:
          this.m_nTimeToFirstFrameMS > 0 ? this.m_nTimeToFirstFrameMS : 0,
        nBytesReceived: this.m_allTimeSnapshot.m_nBytesReceived,
        nAvgBandwidthBitSec: Math.round(
          this.m_allTimeSnapshot.GetAverageBandwidth(),
        ),
        nAvgSegmentDownloadMS: Math.ceil(
          this.m_allTimeSnapshot.GetAverageDownloadTime(),
        ),
        nFailedSegmentDownloads: this.m_allTimeSnapshot.m_nFailedSegments,
        nPlaybackStalls: this.m_allTimeSnapshot.m_nStallEvents,
        nFramesDropped: this.m_allTimeSnapshot.m_nFramesDropped,
        nLastVideoHeight: this.m_videoResolution,
        bUserSelectedRepresentation: this.m_bAtLeastOneUserRepresentation,
      };
    }
    async SendReportToServer(e, t) {
      let n = new URL(t),
        r = new FormData();
      for (let t of Object.keys(e)) r.append(t, e[t]);
      let i = n.searchParams.get(`l`);
      (i && r.append(`l`, i),
        (i = n.searchParams.get(`e`)),
        i && r.append(`e`, i),
        (i = n.searchParams.get(`h`)),
        i && r.append(`h`, i),
        x(`CDASHStats Sending Report to Server`, e),
        y.default.post(t, r).catch((e) => {
          x(`Failed to upload stats: `, e);
        }));
    }
    CreateNewEmptySnapshot(e) {
      (this.m_rgSnapShots.length >= ce && this.m_rgSnapShots.shift(),
        this.m_rgSnapShots.push(new k(e)));
    }
    GatherCommonStats(e, t, n, r) {
      ((e.steamid = this.m_steamIDViewer),
        (e.host = this.m_host),
        (e.playback_position = Math.round(t.currentTime)),
        (e.video_res = this.m_videoResolution),
        (e.audio_rate = this.m_audioRate),
        (e.audio_ch = this.m_audioChannel),
        (e.bw_required = n),
        (e.bw_avg = Math.round(r)),
        (e.broadcast_accountid = this.m_steamIDBroadcast
          ? new te(this.m_steamIDBroadcast).GetAccountID()
          : 0),
        (e.useragent = window.navigator.userAgent),
        (e.sessionid = i()),
        (e.broadcast_origin = this.m_strBroadcastOrigin));
    }
  };
(c([r], O.prototype, `m_allTimeSnapshot`, void 0),
  c([r], O.prototype, `m_strBufferingVideoResolution`, void 0),
  c([r], O.prototype, `m_strPlaybackVideoResolution`, void 0),
  c([r], O.prototype, `m_strHtmlVideoDisplay`, void 0),
  c([r], O.prototype, `m_nBandwidthRequired`, void 0),
  c([r], O.prototype, `m_nCurBandwidthVideo`, void 0),
  c([r], O.prototype, `m_nAudioBufferedMS`, void 0),
  c([r], O.prototype, `m_nVideoBufferedMS`, void 0),
  c([r], O.prototype, `m_nActiveDownloads`, void 0),
  c([r], O.prototype, `m_nVideoDownloadProgress`, void 0),
  c([r], O.prototype, `m_videoBufferedRanges`, void 0),
  c([r], O.prototype, `m_audioBufferedRanges`, void 0),
  c([r], O.prototype, `m_nPlaybackRate`, void 0),
  c([s], O.prototype, `SetVideoPlaybackResolution`, null),
  c([s], O.prototype, `SetRepresentation`, null),
  c([s], O.prototype, `SetCurrentVideoBandwidth`, null),
  c([s], O.prototype, `CaptureFrequentlyUpdatingInformation`, null),
  c([s], O.prototype, `LogDownload`, null),
  c([s], O.prototype, `LogSegmentDownloadFailure`, null),
  c([s], O.prototype, `LogFrameInfo`, null),
  c([s], O.prototype, `LogBufferDuration`, null));
var k = class {
  m_timeMS = Date.now();
  m_nBytesReceived = 0;
  m_nInitialVideoResolution = 0;
  m_nFailedSegments = 0;
  m_nStallEvents = 0;
  m_nEntries = 0;
  m_nSegmentDownloadTimeTotalMS = 0;
  m_nSegmentDownloadTimeMaxMS = 0;
  m_nSegmentDownloadTimeMinMS = 0;
  m_nBandwidthTotal = 0;
  m_nBandwidthMin = 0;
  m_nBandwidthMax = 0;
  m_nLastSegementDownloadStatus = 200;
  m_nFramesDecoded = 0;
  m_nFramesDropped = 0;
  constructor(e) {
    (f(this), (this.m_nInitialVideoResolution = e));
  }
  GetAverageBandwidth() {
    return this.m_nBandwidthTotal / Math.max(1, this.m_nEntries);
  }
  GetAverageDownloadTime() {
    return this.m_nSegmentDownloadTimeTotalMS / Math.max(1, this.m_nEntries);
  }
  GetAverageBandwidthFromTwo(e) {
    return (
      (e.m_nBandwidthTotal + this.m_nBandwidthTotal) /
      Math.max(1, e.m_nEntries + this.m_nEntries)
    );
  }
  GetAverageDownloadTimeFromTwo(e) {
    return (
      (e.m_nSegmentDownloadTimeTotalMS + this.m_nSegmentDownloadTimeTotalMS) /
      Math.max(1, e.m_nEntries + this.m_nEntries)
    );
  }
  SegmentReceived(e, t) {
    if (((this.m_nBytesReceived += e), e < le)) return;
    let n = Math.round((e * 8 * 1e3) / Math.max(t, 1));
    (this.m_nEntries == 0
      ? ((this.m_nSegmentDownloadTimeMinMS = t), (this.m_nBandwidthMin = n))
      : ((this.m_nSegmentDownloadTimeMinMS = Math.min(
          t,
          this.m_nSegmentDownloadTimeMinMS,
        )),
        (this.m_nBandwidthMin = Math.min(n, this.m_nBandwidthMin))),
      (this.m_nBandwidthMax = Math.max(n, this.m_nBandwidthMax)),
      (this.m_nSegmentDownloadTimeMaxMS = Math.max(
        t,
        this.m_nSegmentDownloadTimeMaxMS,
      )),
      (this.m_nBandwidthTotal += n),
      (this.m_nSegmentDownloadTimeTotalMS += t),
      (this.m_nEntries += 1));
  }
};
(c([r], k.prototype, `m_nBytesReceived`, void 0),
  c([r], k.prototype, `m_nFailedSegments`, void 0),
  c([r], k.prototype, `m_nStallEvents`, void 0),
  c([r], k.prototype, `m_nSegmentDownloadTimeMaxMS`, void 0),
  c([r], k.prototype, `m_nSegmentDownloadTimeMinMS`, void 0),
  c([r], k.prototype, `m_nBandwidthMin`, void 0),
  c([r], k.prototype, `m_nBandwidthMax`, void 0),
  c([r], k.prototype, `m_nFramesDecoded`, void 0),
  c([r], k.prototype, `m_nFramesDropped`, void 0),
  c([s], k.prototype, `SegmentReceived`, null));
var pe = class {
    bDropReading = !1;
    nTotalDecodedFrames = 0;
    reset(e, t) {
      ((this.bDropReading = e), (this.nTotalDecodedFrames = t));
    }
  },
  A = class {
    constructor() {
      f(this);
    }
    k_nTestFrequencyMS = 1e3;
    k_nSlidingWindow = 6;
    k_nDroppedFramesThreshold = 1;
    k_nFailThreshold = 3;
    k_nIgnoreReadingAroundResizeMS = 2e3;
    m_schTracker = new h();
    m_rgResultsWindow = [];
    m_nLastResizeMS = 0;
    m_lastFrameInfo = { framesDecoded: 0, framesDropped: 0 };
    m_bDroppingFrameDetected = !1;
    m_nCurrentFPS = 0;
    m_fnRequestDecoded = null;
    StartTracking(e) {
      (this.m_schTracker.Schedule(this.k_nTestFrequencyMS, this.TakeReading),
        (this.m_fnRequestDecoded = e),
        (this.m_lastFrameInfo = this.m_fnRequestDecoded()),
        (this.m_bDroppingFrameDetected = !1));
    }
    BHasCurrentFPS() {
      return this.m_nCurrentFPS != 0;
    }
    GetCurrentFPS() {
      return this.m_nCurrentFPS;
    }
    BIsDroppingFrames() {
      return this.m_bDroppingFrameDetected;
    }
    SetWindowResized() {
      this.m_nLastResizeMS = Date.now();
    }
    BIsInResizeTimeWindow() {
      return (
        !!this.m_nLastResizeMS &&
        Date.now() - this.m_nLastResizeMS < this.k_nIgnoreReadingAroundResizeMS
      );
    }
    Close() {
      (this.m_schTracker.Cancel(),
        (this.m_rgResultsWindow = []),
        (this.m_bDroppingFrameDetected = !1));
    }
    LogResizeAction() {
      this.m_nLastResizeMS = Date.now();
    }
    TakeReading() {
      if (!this.m_fnRequestDecoded) return;
      this.m_schTracker.Schedule(this.k_nTestFrequencyMS, this.TakeReading);
      let e = !1,
        t = this.m_fnRequestDecoded();
      (this.BIsInResizeTimeWindow() ||
        (e =
          this.m_lastFrameInfo.framesDropped > 0 &&
          t.framesDropped - this.m_lastFrameInfo.framesDropped >
            this.k_nDroppedFramesThreshold),
        this.AppendReading(e, t.framesDecoded),
        (this.m_bDroppingFrameDetected = this.ComputeDroppingFrames()),
        (this.m_nCurrentFPS =
          t.framesDecoded -
          this.m_lastFrameInfo.framesDecoded -
          (t.framesDropped - this.m_lastFrameInfo.framesDropped)),
        (this.m_lastFrameInfo = t));
    }
    ComputeDroppingFrames() {
      return (
        this.m_rgResultsWindow.length == this.k_nSlidingWindow &&
        this.m_rgResultsWindow.filter((e) => e.bDropReading).length >=
          this.k_nFailThreshold
      );
    }
    AppendReading(e, t) {
      let n;
      ((n =
        this.m_rgResultsWindow.length >= this.k_nSlidingWindow
          ? this.m_rgResultsWindow.shift()
          : new pe()),
        n.reset(e, t),
        this.m_rgResultsWindow.push(n));
    }
  };
(c([r], A.prototype, `m_bDroppingFrameDetected`, void 0),
  c([r], A.prototype, `m_nCurrentFPS`, void 0),
  c([s.bound], A.prototype, `TakeReading`, null));
function me(e, t) {
  let n = e.getElementsByTagName(`MPD`);
  return !n || n.length != 1 ? null : n[0];
}
function j(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    let r = e.children[n];
    if (r.tagName == t) return r;
  }
  return null;
}
function he(e, t) {
  let n = e.getAttribute(t);
  if (!n) return null;
  let r = new Date(n);
  return Object.prototype.toString.call(r) === `[object Date]` ? r : null;
}
function M(e, t) {
  let n = e.getAttribute(t);
  if (!n) return null;
  let r = 0,
    i = n.match(/(\d*)H/);
  return (
    i && (r += parseFloat(i[1]) * 60 * 60),
    (i = n.match(/(\d*)M/)),
    i && (r += parseFloat(i[1]) * 60),
    (i = n.match(/(\d*\.?\d*)S/)),
    i && (r += parseFloat(i[1])),
    r
  );
}
function ge(e, t) {
  let n = e.getAttribute(t);
  return n
    ? ((n = n.toLowerCase()), n == `true` || (n != `false` && null))
    : null;
}
function N(e, t) {
  let n = e.getAttribute(t);
  return n ? parseInt(n) : null;
}
function P(e, t) {
  return e.getAttribute(t) || ``;
}
function F(e, t, n) {
  let r = N(e, `timescale`);
  if ((t.bContainsThumbnails && (r ??= 1), !r)) return null;
  let i = {
    nTimeScale: r,
    nDuration: N(e, `duration`) || 0,
    nStartNumber: N(e, `startNumber`) || 0,
    strMedia: P(e, `media`),
    strInitialization: P(e, `initialization`),
  };
  return !i.nDuration ||
    !i.nStartNumber ||
    !i.strMedia ||
    (!t.bContainsThumbnails && !i.strInitialization)
    ? null
    : ((i.strMedia = z(i.strMedia, n)),
      (i.strInitialization = z(i.strInitialization, n)),
      i);
}
function I(e, t, n) {
  return (
    (e = e.replace(`$RepresentationID$`, t)),
    (e = e.replace(`$Number$`, n.toString())),
    (e = e.replace(
      /\$Number%(\d+)d\$/g,
      (e, t) => (
        (t = Number.parseInt(t)),
        (Array(t).join(`0`) + n.toString()).slice(-t)
      ),
    )),
    e
  );
}
function L(e) {
  return ne(e);
}
function R(e, t) {
  let n = e;
  n.endsWith(`/`) || (n += `/`);
  let r = +!!t.startsWith(`/`);
  return n + t.substring(r);
}
function _e(e) {
  if (!L(e)) return ``;
  let t = new URL(e),
    n = t.pathname;
  return (
    (n.indexOf(`.mpd`) >= 0 || n.endsWith(`/`)) &&
      (n = n.substring(0, n.lastIndexOf(`/`))),
    R(t.origin, n) + `/`
  );
}
function z(e, t) {
  return !e || L(e) || !L(t) ? e : R(t, e);
}
function B(e) {
  return e.rgRoles.length == 0 || e.rgRoles.findIndex((e) => e == `main`) >= 0;
}
function V(e) {
  if (!e) return 0;
  let t = e.segmentTemplate;
  return t.nTimeScale == 1e3 ? t.nDuration : (t.nDuration / t.nTimeScale) * 1e3;
}
function H(e, t, n) {
  n -= e.GetStartTime() * 1e3;
  let r = V(t),
    i = U(e, r, n);
  return Math.floor(i / r) + t.segmentTemplate.nStartNumber;
}
function ve(e, t) {
  return (t - e.segmentTemplate.nStartNumber) * (V(e) / 1e3);
}
function ye(e, t) {
  if (e.IsLiveContent()) return Number.MAX_VALUE;
  let n = (e.GetEndTime() - e.GetStartTime()) * 1e3,
    r = V(t),
    i = U(e, r, n);
  return Math.ceil(i / r) + t.segmentTemplate.nStartNumber - 1;
}
function U(e, t, n) {
  return n + ((e.GetStartTime() * 1e3) % t);
}
function be(e) {
  let t = e.segmentTemplate.strInitialization;
  return I(t, e.strID, 0);
}
function xe(e, t) {
  let n = e.segmentTemplate.strMedia;
  return I(n, e.strID, t);
}
function Se(e, t, n) {
  if (!e.IsLiveContent()) return 0;
  let r = V(t),
    i = n - t.segmentTemplate.nStartNumber,
    a = e.GetDurationSinceStarted();
  return (i + 1) * r - a;
}
function Ce(e) {
  return [`image/jpeg`, `image/jpg`, `image/avif`, `image/webp`].includes(e);
}
var we = class {
    m_strType = `static`;
    m_nMinBufferTime = 0;
    m_dtAvailabilityStartTime = null;
    m_dtPublishTime = null;
    m_nMinimumUpdatePeriod = 0;
    m_nTimeShiftBufferDepth = 0;
    m_nMediaPresentationDuration = 0;
    m_strBaseURL = ``;
    m_strStatsLink = ``;
    m_strStalledLink = ``;
    m_strEventLogLink = ``;
    m_rgPeriods = [];
    m_tsLiveContentStart = 0;
    GetType() {
      return this.m_strType;
    }
    GetMinimumUpdatePeriod() {
      return this.m_nMinimumUpdatePeriod;
    }
    GetPeriods() {
      return this.m_rgPeriods;
    }
    GetBaseURL() {
      return this.m_strBaseURL;
    }
    GetTimeShiftBufferDepth() {
      return this.m_nTimeShiftBufferDepth;
    }
    GetMinBufferTime() {
      return this.m_nMinBufferTime;
    }
    GetAvailabilityStartTime() {
      return this.IsLiveContent() && this.m_dtAvailabilityStartTime
        ? this.m_dtAvailabilityStartTime
        : new Date(0);
    }
    GetTimedTextAdaptionSet(e) {
      return e < 0 || e > this.m_rgPeriods.length
        ? []
        : this.m_rgPeriods[e].rgAdaptationSets.filter((e) => e.bIsTimedText);
    }
    IsLiveContent() {
      return this.GetType() == `dynamic`;
    }
    GetAdaptationByTrackID(e) {
      if (this.m_rgPeriods.length == 0) return null;
      let t = this.m_rgPeriods[0];
      for (let n of t.rgAdaptationSets) if (e == n.strID) return n;
      return null;
    }
    GetMainVideoAdaption() {
      if (this.m_rgPeriods.length == 0) return null;
      let e = this.m_rgPeriods[0];
      for (let t of e.rgAdaptationSets) if (B(t) && t.bContainsVideo) return t;
      return null;
    }
    GetMainAudioAdaption() {
      if (this.m_rgPeriods.length == 0) return null;
      let e = this.m_rgPeriods[0];
      for (let t of e.rgAdaptationSets) if (B(t) && t.bContainsAudio) return t;
      return null;
    }
    GetThumbnailAdaptation() {
      if (this.m_rgPeriods.length == 0) return null;
      let e = this.m_rgPeriods[0];
      for (let t of e.rgAdaptationSets) if (t.bContainsThumbnails) return t;
      return null;
    }
    GetThumbnailDurationMS() {
      let e = this.GetThumbnailAdaptation();
      if (!e || e.rgRepresentations.length == 0) return 0;
      let t = e.rgRepresentations[0];
      return !t.nTileWidthCount || !t.nTileHeightCount
        ? 0
        : V(t) / (t.nTileWidthCount * t.nTileHeightCount);
    }
    GetStartTime() {
      return !this.IsLiveContent() && this.m_rgPeriods.length > 0
        ? this.m_rgPeriods[0].nStart
        : 0;
    }
    GetEndTime() {
      if (!this.IsLiveContent()) {
        if (this.m_rgPeriods.length > 0 && this.m_rgPeriods[0].nDuration)
          return this.GetStartTime() + this.m_rgPeriods[0].nDuration;
        if (this.m_nMediaPresentationDuration > 0)
          return this.GetStartTime() + this.m_nMediaPresentationDuration;
      }
      return Number.MAX_VALUE;
    }
    GetLowestRepresentation(e) {
      let t = this.GetAdaptationByTrackID(e);
      if (!t) return null;
      let n = t.rgRepresentations[0];
      for (let e of t.rgRepresentations) e.nBandwidth < n.nBandwidth && (n = e);
      return n;
    }
    GetStatsLink() {
      return this.m_strStatsLink;
    }
    GetStalledLink() {
      return this.m_strStalledLink;
    }
    GetEventLink() {
      return this.m_strEventLogLink;
    }
    GetThumbnail(e) {
      let t = this.GetThumbnailAdaptation();
      if (!t || t.rgRepresentations.length == 0) return null;
      let n = t.rgRepresentations[0],
        r = H(this, n, e);
      if (
        n.nTileWidthCount === void 0 ||
        n.nTileHeightCount === void 0 ||
        n.nWidth === void 0 ||
        n.nHeight === void 0
      )
        return null;
      let i = V(n),
        a = i * (r - n.segmentTemplate.nStartNumber),
        o = i / (n.nTileWidthCount * n.nTileHeightCount),
        s = Math.floor((e - a) / o),
        c = Math.floor(s / n.nTileWidthCount),
        l = s % n.nTileWidthCount;
      if (l + 1 > n.nTileHeightCount)
        return (
          x(`Asking for a thumbnail that is off the end of the tile sheet`),
          null
        );
      let u = n.nWidth / n.nTileWidthCount,
        d = n.nHeight / n.nTileHeightCount;
      return {
        strTileURL: I(n.segmentTemplate.strMedia, n.strID, r),
        x: l * u,
        y: c * d,
        nThumbnailWidth: u,
        nThumbnailHeight: d,
        nImageWidth: n.nWidth,
        nImageHeight: n.nHeight,
      };
    }
    StartLiveContentNow(e) {
      this.m_tsLiveContentStart = performance.now() - e;
    }
    GetDurationSinceStarted() {
      return performance.now() - this.m_tsLiveContentStart;
    }
    ParseRepresentation(e, t, n, r, i) {
      let a = null,
        o = j(e, `SegmentTemplate`);
      if (o) {
        let e = F(o, t, r);
        e && (a = e);
      } else n && (a = { ...n });
      if (!a) return (x(`MPD - No segment template for representation`), null);
      let s = {
        strID: P(e, `id`),
        strMimeType: P(e, `mimeType`),
        strCodecs: P(e, `codecs`),
        nBandwidth: N(e, `bandwidth`) || 0,
        segmentTemplate: a,
      };
      if ((!s.strMimeType && i && (s.strMimeType = i), t.bContainsVideo)) {
        if (
          ((s.nWidth = N(e, `width`) || 0),
          (s.nHeight = N(e, `height`) || 0),
          (s.nFrameRate = N(e, `frameRate`) || 0),
          x(
            `representation: ${s.nWidth}w x ${s.nHeight}h x ${s.nFrameRate} fps`,
          ),
          !s.strID || !s.strMimeType || !s.strCodecs || !s.nBandwidth)
        )
          return (x(`MPD - Representation Video Data Missing`), null);
      } else if (t.bContainsAudio) {
        s.nAudioSamplingRate = N(e, `audioSamplingRate`) || 0;
        let t = j(e, `AudioChannelConfiguration`);
        if (
          (t && (s.nAudioChannels = N(t, `value`) || 0),
          (s.nAudioChannels ||= 2),
          !s.strID ||
            !s.strMimeType ||
            !s.strCodecs ||
            !s.nAudioSamplingRate ||
            !s.nAudioChannels)
        )
          return (x(`MPD - Representation Audio Data Missing`), null);
      } else if (t.bContainsThumbnails) {
        if (!Ce(s.strMimeType))
          return (
            x(
              `MPD - Representation Thumbnail MimeType not supported`,
              s.strMimeType,
            ),
            null
          );
        ((s.nWidth = N(e, `width`) || 0), (s.nHeight = N(e, `height`) || 0));
        let t = j(e, `EssentialProperty`);
        if (!t)
          return (
            x(`MPD - Representation Thumbnail missing EssentialProperty`), null
          );
        let n = P(t, `schemeIdUri`);
        if (!n || n != `http://dashif.org/guidelines/thumbnail_tile`)
          return (x(`MPD - Representation Thumbnail has invalid schema`), null);
        let r = (P(t, `value`) || ``).split(`x`);
        if (r.length != 2 || !d(r[0]) || !d(r[1]))
          return (
            x(`MPD - Representation Thumbnail has invalid tile property`), null
          );
        ((s.nTileWidthCount = parseInt(r[0])),
          (s.nTileHeightCount = parseInt(r[1])));
      }
      return s;
    }
    ParseAdaptationSetVTT(e, t) {
      e.rgRoles.push(`subtitle`);
      let r = t.getElementsByTagName(`Role`);
      for (let t = 0; t < r.length; t++) {
        let n = P(r[t], `value`);
        n && n != `subtitle` && e.rgRoles.push(n);
      }
      let i = t.getElementsByTagName(`Representation`);
      for (let t = 0; t < i.length; t++) {
        let r = i[t],
          a = {
            strID: P(r, `id`),
            nBandwidth: N(r, `bandwidth`) || 0,
            strClosedCaptionFile: ``,
            strMimeType: `text/vtt`,
            segmentTemplate: {
              nTimeScale: 0,
              nDuration: 0,
              nStartNumber: 0,
              strMedia: ``,
              strInitialization: ``,
            },
          },
          o = j(r, `BaseURL`),
          s = o ? o.textContent : ``;
        if (!s) {
          x(`Closed Caption File has no BaseURL for (id): ` + a.strID);
          continue;
        }
        ((a.strClosedCaptionFile = I(s, a.strID, 0)),
          a.strClosedCaptionFile.startsWith(`http`) ||
            (a.strClosedCaptionFile =
              this.m_strBaseURL + a.strClosedCaptionFile));
        let c = n();
        if (c == `community`) {
          let e = new URL(a.strClosedCaptionFile).pathname.split(`/video/`)[1];
          a.strClosedCaptionFile = e
            ? l.COMMUNITY_BASE_URL + `vtt/video/` + e
            : ``;
        } else if (c == `store`) {
          let e = new URL(a.strClosedCaptionFile).pathname.split(`/video/`)[1];
          a.strClosedCaptionFile = e ? l.STORE_BASE_URL + `vtt/video/` + e : ``;
        }
        a.strClosedCaptionFile && e.rgRepresentations.push(a);
      }
    }
    BParse(e, t) {
      let n = new DOMParser().parseFromString(e, `application/xml`),
        r = me(n, `MPD`);
      if (!r) return !1;
      let i = r.getAttribute(`type`);
      if (
        ((this.m_nMinBufferTime = M(r, `minBufferTime`) || 0), i == `dynamic`)
      ) {
        if (
          ((this.m_strType = `dynamic`),
          (this.m_dtAvailabilityStartTime = he(r, `availabilityStartTime`)),
          (this.m_dtPublishTime = he(r, `publishTime`)),
          (this.m_nMinimumUpdatePeriod = M(r, `minimumUpdatePeriod`) || 0),
          (this.m_nTimeShiftBufferDepth = M(r, `timeShiftBufferDepth`) || 0),
          !this.m_dtAvailabilityStartTime ||
            !this.m_dtPublishTime ||
            !this.m_nMinimumUpdatePeriod ||
            !this.m_nMinBufferTime)
        )
          return (x(`MPD - Missing Dynamic Manifest Times`), !1);
      } else if (i == `static`) {
        if (
          ((this.m_strType = `static`),
          (this.m_nMediaPresentationDuration =
            M(r, `mediaPresentationDuration`) || 0),
          !this.m_nMinBufferTime || !this.m_nMediaPresentationDuration)
        )
          return (x(`MPD - Missing Buffer Time or Presentation Duration`), !1);
      } else return (x(`MPD - Unknown type`), !1);
      let a = j(r, `BaseURL`);
      this.m_strBaseURL = a && a.textContent ? a.textContent : _e(t);
      let o = j(r, `Analytics`);
      o &&
        ((this.m_strStatsLink = P(o, `statslink`)),
        (this.m_strStalledLink = P(o, `stalledlink`)),
        (this.m_strEventLogLink = P(o, `eventlink`)));
      let s = n.getElementsByTagName(`Period`);
      if (s.length == 0) return (x(`MPD - Missing Periods`), !1);
      let c = s[0],
        l = P(c, `id`),
        u = M(c, `start`);
      if (!l || u === null) return (x(`MPD - Missing Period Information`), !1);
      let d = {
        strID: l,
        nStart: u,
        nDuration: M(c, `duration`) || 0,
        rgAdaptationSets: [],
      };
      ((this.m_rgPeriods = []), this.m_rgPeriods.push(d));
      let f = c.getElementsByTagName(`AdaptationSet`);
      for (let e = 0; e < f.length; e++) {
        let t = f[e],
          n = P(t, `description`),
          r = P(t, `lang`),
          i = {
            bSegmentAlignment: ge(t, `segmentAlignment`) || !1,
            bIsTimedText: P(t, `mimeType`) == `text/vtt`,
            strLanguage: P(t, `lang`),
            bContainsVideo: !1,
            bContainsAudio: !1,
            bContainsThumbnails: !1,
            strDescription: n || r,
            strForceSub: P(t, `forceSub`),
            strID: P(t, `id`),
            rgRoles: [],
            rgRepresentations: [],
          };
        d.rgAdaptationSets.push(i);
        let a = t.getElementsByTagName(`ContentComponent`);
        for (let e = 0; e < a.length; e++) {
          let t = P(a[e], `contentType`);
          (t == `video` && (i.bContainsVideo = !0),
            t == `audio` && (i.bContainsAudio = !0),
            t == `image` && (i.bContainsThumbnails = !0));
        }
        if (a.length == 0) {
          let e = P(t, `contentType`);
          (e == `video` && (i.bContainsVideo = !0),
            e == `audio` && (i.bContainsAudio = !0),
            e == `image` && (i.bContainsThumbnails = !0));
        }
        if (i.bIsTimedText) {
          this.ParseAdaptationSetVTT(i, t);
          continue;
        }
        if (!i.bContainsThumbnails && !i.bSegmentAlignment)
          return (
            x(`MPD - Only segment aligned dash manifests is supported`), !1
          );
        let o = t.getElementsByTagName(`Role`);
        for (let e = 0; e < o.length; e++) {
          let t = P(o[e], `value`);
          t && i.rgRoles.push(t);
        }
        let s = null,
          c = j(t, `SegmentTemplate`);
        if (c) {
          let e = F(c, i, this.m_strBaseURL);
          if (!e)
            return (x(`MPD - Failed to parse found Adaptation template`), !1);
          s = e;
        }
        let l = P(t, `mimeType`),
          u = t.getElementsByTagName(`Representation`);
        for (let e = 0; e < u.length; e++) {
          let t = u[e],
            n = this.ParseRepresentation(t, i, s, this.m_strBaseURL, l);
          if (!n) return !1;
          i.rgRepresentations.push(n);
        }
      }
      return !0;
    }
    BUpdate(e) {
      let t = new DOMParser().parseFromString(e, `application/xml`),
        n = me(t, `MPD`);
      if (!n) return !1;
      if (this.IsLiveContent()) {
        switch (P(n, `type`)) {
          case `dynamic`:
            break;
          case `static`:
            (x(`Converting MPD from dynamic to static`),
              (this.m_strType = `static`),
              (this.m_nMediaPresentationDuration =
                M(n, `mediaPresentationDuration`) || 0),
              (this.m_nMinBufferTime = M(n, `minBufferTime`) || 0),
              (this.m_dtAvailabilityStartTime = null),
              (this.m_dtPublishTime = null));
        }
        let e = t.getElementsByTagName(`Period`);
        if (e.length == 0) return !1;
        let r = e[0].getElementsByTagName(`AdaptationSet`);
        for (let e = 0; e < r.length; e++) {
          let t = r[e],
            n = P(t, `id`),
            i = this.GetAdaptationByTrackID(n);
          if (i) {
            let e = null,
              n = j(t, `SegmentTemplate`);
            if (n) {
              let t = F(n, i, this.m_strBaseURL);
              if (!t)
                return (
                  x(`MPD - Failed to parse found Adaptation template`), !1
                );
              e = t;
            }
            let r = P(t, `mimeType`),
              a = t.getElementsByTagName(`Representation`);
            if (a.length > 1)
              for (let t = 0; t < a.length; t++) {
                let n = a[t],
                  o = this.ParseRepresentation(n, i, e, this.m_strBaseURL, r);
                if (!o) return (x(`MPD - Failed to parse representation`), !1);
                let s = null;
                for (let e of i.rgRepresentations)
                  if (o.strID == e.strID) {
                    s = e;
                    break;
                  }
                s
                  ? (s.segmentTemplate.strMedia = o.segmentTemplate.strMedia)
                  : i.rgRepresentations.push(o);
              }
            break;
          }
        }
      }
      let r = j(n, `Analytics`);
      return (
        r &&
          ((this.m_strStatsLink = P(r, `statslink`)),
          (this.m_strStalledLink = P(r, `stalledlink`)),
          (this.m_strEventLogLink = P(r, `eventlink`))),
        !0
      );
    }
  },
  W = (function (e) {
    return (
      (e[(e.None = 0)] = `None`),
      (e[(e.Append = 1)] = `Append`),
      (e[(e.Remove = 2)] = `Remove`),
      e
    );
  })({});
function Te(e) {
  return e && e.name == `QuotaExceededError`;
}
var Ee = class {
    m_eBufferUpdate = 0;
    m_sourceBuffer = null;
    Attach(e) {
      ((this.m_sourceBuffer = e), (this.m_eBufferUpdate = 0));
    }
    Detach() {
      ((this.m_sourceBuffer = null), (this.m_eBufferUpdate = 0));
    }
    HasAttachedBuffer() {
      return this.m_sourceBuffer != null;
    }
    GetBufferState() {
      return this.m_eBufferUpdate;
    }
    GetSourceBufferTimeRanges() {
      return this.m_sourceBuffer ? this.m_sourceBuffer.buffered : null;
    }
    GetBufferedStartSec() {
      return !this.m_sourceBuffer ||
        !this.m_sourceBuffer.buffered ||
        this.m_sourceBuffer.buffered.length == 0
        ? 0
        : this.m_sourceBuffer.buffered.start(0);
    }
    GetBufferedEndSec() {
      return !this.m_sourceBuffer ||
        !this.m_sourceBuffer.buffered ||
        this.m_sourceBuffer.buffered.length == 0
        ? 0
        : this.m_sourceBuffer.buffered.end(0);
    }
    BufferUpdateComplete() {
      this.m_eBufferUpdate = 0;
    }
    MarkAsRemoving() {
      this.m_eBufferUpdate = 2;
    }
    GetAmountBufferedInPlayerMS(e) {
      if (!this.m_sourceBuffer) return 0;
      let t = this.m_sourceBuffer.buffered;
      if (t.length == 0) return 0;
      (e < t.start(0) && (e = t.start(0)), e > t.end(0) && (e = t.end(0)));
      let n = t.end(0) - e;
      return Math.floor(n * 1e3);
    }
    AppendBuffer(t) {
      (e(this.m_sourceBuffer != null, `Invalid source buffer`),
        e(
          this.m_eBufferUpdate == 0,
          `Appending to source buffer with operation in flight`,
        ));
      try {
        (this.m_sourceBuffer.appendBuffer(t), (this.m_eBufferUpdate = 1));
      } catch (e) {
        return e;
      }
      return null;
    }
    Remove(t, n) {
      (e(this.m_sourceBuffer != null, `Invalid source buffer`),
        e(
          this.m_eBufferUpdate == 0,
          `Removing from source buffer with operation in flight`,
        ),
        this.m_sourceBuffer.remove(t, n),
        (this.m_eBufferUpdate = 2));
    }
    RemoveAll() {
      let e = 0;
      if (this.m_sourceBuffer) {
        let t = this.m_sourceBuffer.buffered;
        for (let n = 0; n < t.length; n++) e < t.end(n) && (e = t.end(n));
      }
      return e == 0 || !this.m_sourceBuffer
        ? !1
        : (this.m_sourceBuffer.remove(0, e + 1),
          (this.m_eBufferUpdate = 2),
          !0);
    }
  },
  De = 500,
  Oe = 3e3,
  ke = 9e3,
  Ae = 4,
  je = 15e3,
  Me = -1,
  Ne = 30,
  G = 6,
  Pe = 1,
  Fe = 10,
  K = class {
    m_callbacks;
    m_mpd;
    m_adaptation;
    m_mediaSource = null;
    m_sourceBuffer = new Ee();
    m_nTrackBufferMS = 0;
    m_representation = null;
    m_rgBufferedSegments = [];
    m_mapInitSegments = new Map();
    m_strLastFedInitSegmentRep = ``;
    m_nNextSegment = 0;
    m_bRemoveBufferState = !1;
    m_bSeekInProgress = !1;
    m_bSourceBufferQuotaExceeded = !1;
    m_schNextDownload = new h();
    m_xhrDownload = null;
    m_listeners = new g();
    m_rgDownloadLog = [];
    m_nCurDownloadProgress = 0;
    m_nCurDownloadBitrate = 0;
    m_stats;
    m_nNumConsecutiveDownloadGones = 0;
    constructor(e, t, n, r) {
      ((this.m_callbacks = e),
        (this.m_mpd = t),
        (this.m_adaptation = n),
        (this.m_stats = r));
    }
    SetMediaSource(e) {
      this.m_mediaSource = e;
    }
    SetBufferMS(e) {
      this.m_nTrackBufferMS = e;
    }
    GetRepresentationsCount() {
      return this.m_adaptation.rgRepresentations.length;
    }
    GetRepresentationByID(e) {
      for (let t of this.m_adaptation.rgRepresentations)
        if (t.strID == e) return t;
      return null;
    }
    GetNumConsecutiveDownloadGones() {
      return this.m_nNumConsecutiveDownloadGones;
    }
    ContainsVideo() {
      return this.m_adaptation.bContainsVideo;
    }
    ContainsAudio() {
      return this.m_adaptation.bContainsAudio;
    }
    GetAdaptation() {
      return this.m_adaptation;
    }
    GetBandwidthRequired() {
      return this.m_representation?.nBandwidth || 0;
    }
    GetCurrentSegmentDurationMS() {
      return V(this.m_representation);
    }
    GetCurrentSegmentInitializationURL() {
      return this.m_representation ? be(this.m_representation) : ``;
    }
    BIsCurrentRepresentation(e) {
      return (
        !!this.m_representation && e && e.strID == this.m_representation.strID
      );
    }
    GetSourceBufferTimeRanges() {
      return this.m_sourceBuffer.GetSourceBufferTimeRanges();
    }
    GetEstimatedAudioRate() {
      return !this.m_representation || !this.ContainsAudio()
        ? 0
        : this.m_representation.nBandwidth;
    }
    GetDebugName() {
      let e = [];
      return (
        this.ContainsVideo()
          ? e.push(`Video`)
          : this.ContainsAudio() && e.push(`Audio`),
        e.join(` & `) +
          `:` +
          this.m_callbacks.GetCurrentPlayTime().toFixed(3).toString()
      );
    }
    GetMaxSegment() {
      return this.m_representation ? ye(this.m_mpd, this.m_representation) : 0;
    }
    GetBufferedStart() {
      return this.m_sourceBuffer.GetBufferedStartSec();
    }
    GetBufferedEnd() {
      let e = this.m_rgBufferedSegments.length;
      if (e == 0) return 0;
      let t = this.m_rgBufferedSegments[e - 1];
      return t.nStartPTS + t.nDurationMS / 1e3;
    }
    GetAmountBufferedMS(e) {
      let t = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(e);
      for (let n of this.m_rgBufferedSegments)
        !n.data || n.nStartPTS < e || (t += n.nDurationMS);
      return t;
    }
    IsSegmentBuffered(e) {
      return (
        this.m_rgBufferedSegments.findIndex((t) => t.nSegmentIndex == e) >= 0
      );
    }
    ChangeRepresentation(e, t) {
      if (!(this.m_adaptation.rgRepresentations.indexOf(e) < 0)) {
        if (this.m_representation != e) {
          if (this.ContainsVideo()) {
            let t = e.nHeight || 0,
              n = Math.ceil(e.nBandwidth / 1e3);
            x(
              `${this.GetDebugName()} changing representation to ${t}p at ${n}KB for segment ${this.m_nNextSegment}`,
            );
          }
          ((this.m_representation = e),
            this.m_stats.SetRepresentation(e),
            this.CreateSourceBuffferIfNeeded(e));
        }
        t && this.UpgradeBufferedVideo();
      }
    }
    CreateSourceBuffferIfNeeded(e) {
      if (this.m_sourceBuffer.HasAttachedBuffer()) return;
      if (!this.m_mediaSource) {
        S(`Create buffer called before media source set`);
        return;
      }
      let t = e.strMimeType + `;codecs=` + e.strCodecs;
      try {
        let e = this.m_mediaSource.addSourceBuffer(t);
        (this.m_sourceBuffer.Attach(e),
          x(t),
          this.m_listeners.AddEventListener(
            e,
            `updateend`,
            this.OnSourceBufferUpdateEnd,
          ),
          this.m_listeners.AddEventListener(
            e,
            `error`,
            this.OnSourceBufferError,
          ),
          this.m_listeners.AddEventListener(
            e,
            `abort`,
            this.OnSourceBufferAbort,
          ));
      } catch (e) {
        if (e instanceof DOMException && e.name === `NotSupportedError`)
          this.OnMediaUnsupportedError(t);
        else throw e;
      }
    }
    Close() {
      (this.m_listeners.Unregister(),
        this.m_sourceBuffer.Detach(),
        this.ForceStopDownloads(),
        this.m_mapInitSegments.clear(),
        (this.m_strLastFedInitSegmentRep = ``),
        (this.m_bSourceBufferQuotaExceeded = !1),
        (this.m_bRemoveBufferState = !1),
        (this.m_mediaSource = null),
        (this.m_nTrackBufferMS = 0),
        (this.m_representation = null),
        (this.m_rgBufferedSegments = []),
        (this.m_nNextSegment = 0),
        (this.m_bSeekInProgress = !1),
        (this.m_rgDownloadLog = []),
        (this.m_callbacks = null),
        (this.m_mpd = null),
        (this.m_adaptation = null),
        (this.m_stats = null));
    }
    GetActiveDownloads() {
      return +!!this.m_xhrDownload;
    }
    GetActiveDownloadProgress() {
      return this.GetActiveDownloads() ? this.m_nCurDownloadProgress : 0;
    }
    OnSourceBufferUpdateEnd() {
      let e = this.m_callbacks.GetCurrentPlayTime(),
        t = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(e);
      x(
        `${this.GetDebugName()} OnSourceBufferUpdateEnd: [playback=${e}][remaining=${t}][start=${this.m_sourceBuffer.GetBufferedStartSec()}][end=${this.m_sourceBuffer.GetBufferedEndSec()}]`,
      );
      let n = this.m_sourceBuffer.GetBufferState();
      (this.m_sourceBuffer.BufferUpdateComplete(),
        n == W.Append && this.m_callbacks.OnSegmentBuffered(this),
        this.m_bSeekInProgress &&
          n == W.Remove &&
          !this.m_bRemoveBufferState &&
          this.ContinueSeek(),
        this.UpdateBuffer());
    }
    DebugSpewBufferedSegments() {
      if (!this.m_representation) return;
      let e = this.m_callbacks.GetCurrentPlayTime(),
        t = `[`,
        n = H(this.m_mpd, this.m_representation, e * 1e3);
      for (let e of this.m_rgBufferedSegments)
        ((t += e.representation.strID),
          e.nSegmentIndex == n && (t += `|`),
          (t += `,`));
      ((t += `]`), console.warn(t));
    }
    OnMediaUnsupportedError(e) {
      (console.log(`OnMediaUnsupportedError`, this.GetDebugName(), e),
        this.m_callbacks.OnMediaUnsupportedError(this, e));
    }
    OnSourceBufferError(e) {
      (console.log(`OnSourceBufferError`, this.GetDebugName(), e),
        this.m_callbacks.OnMediaSourceError(this));
    }
    OnSourceBufferAbort(e) {
      console.log(`OnSourceBufferAbort`, this.GetDebugName(), e);
    }
    ScheduleNextDownload() {
      if ((this.m_schNextDownload.Cancel(), this.m_xhrDownload)) {
        x(
          `${this.GetDebugName()} ScheduleNextDownload - download already going`,
        );
        return;
      }
      if (this.m_bSeekInProgress) {
        x(`${this.GetDebugName()} ScheduleNextDownload - seeking`);
        return;
      }
      if (this.m_nNextSegment > this.GetMaxSegment()) {
        x(`${this.GetDebugName()} ScheduleNextDownload - reached max segment`);
        return;
      }
      if (!this.m_representation) {
        S(
          `${this.GetDebugName()} ScheduleNextDownload - Called without a representation`,
        );
        return;
      }
      if (!this.m_mapInitSegments.has(this.m_representation.strID)) {
        (x(
          `${this.GetDebugName()} ScheduleNextDownload - downloading init segment for ${this.m_representation.strID}`,
        ),
          this.DownloadInitSegment(this.m_representation));
        return;
      }
      let e = Se(this.m_mpd, this.m_representation, this.m_nNextSegment);
      if (e > 0) {
        (x(`${this.GetDebugName()} ScheduleNextDownload - segment in future`),
          this.m_schNextDownload.Schedule(e, this.ScheduleNextDownload));
        return;
      }
      let t = this.m_callbacks.GetCurrentPlayTime(),
        n = this.m_callbacks.GetPlaybackRate();
      if (this.IsSegmentBuffered(this.m_nNextSegment)) {
        (x(
          `${this.GetDebugName()} ScheduleNextDownload - buffered segment upgrade - downloading now`,
        ),
          this.DownloadNextSegment());
        return;
      }
      let r = this.GetAmountBufferedMS(t);
      if ((n > 1 && (r /= n), r < Ne * 1e3)) {
        (x(
          `${this.GetDebugName()} ScheduleNextDownload - have ${r} buffered, desire ${Ne * 1e3} - downloading now`,
        ),
          this.DownloadNextSegment());
        return;
      }
      let i = V(this.m_representation) * 1.1,
        a = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(
          this.m_callbacks.GetCurrentPlayTime(),
        );
      (x(
        `${this.GetDebugName()} ScheduleNextDownload - buffered, schedule later [sleep=${i}ms][buffer=${a}]`,
      ),
        this.m_schNextDownload.Schedule(i, this.ScheduleNextDownload));
    }
    DownloadInitSegment(e) {
      this.m_schNextDownload.Cancel();
      let t = be(e);
      this.DownloadSegment(e, Me, t);
    }
    DownloadNextSegment() {
      if ((this.m_schNextDownload.Cancel(), this.m_nNextSegment < 0)) {
        console.error(
          `Attempting to download negative segment:`,
          this.m_nNextSegment,
        );
        return;
      }
      if (!this.m_representation) {
        console.error(
          `Download next called without a representation`,
          this.m_nNextSegment,
        );
        return;
      }
      let e = xe(this.m_representation, this.m_nNextSegment);
      this.DownloadSegment(this.m_representation, this.m_nNextSegment, e);
    }
    async DownloadSegment(t, n, r, i = performance.now()) {
      (e(
        this.m_xhrDownload === null,
        `Trying to download another segment while a download is already in flight`,
      ),
        this.m_schNextDownload.Cancel());
      let a = this.m_callbacks.GetCDNAuthURLParameter(),
        o = r;
      (a && (o = r + a), x(`${this.GetDebugName()} Downloading: ` + o));
      let s = null,
        c = performance.now(),
        l = y.default.CancelToken.source(),
        u;
      try {
        ((this.m_nCurDownloadProgress = 0), (this.m_xhrDownload = l));
        let e = {
          cancelToken: this.m_xhrDownload.token,
          timeout: je,
          responseType: `arraybuffer`,
          onDownloadProgress: (e) => {
            ((this.m_nCurDownloadProgress = e.loaded / e.total),
              (this.m_nCurDownloadBitrate =
                (e.loaded * 8 * 1e3) / Math.max(1, performance.now() - c)));
          },
        };
        s = await y.default.get(o, e);
      } catch (e) {
        ((u = e), y.default.isAxiosError(e) && e.response && (s = e.response));
      }
      if (!this.m_xhrDownload || this.m_xhrDownload != l) {
        x(`Throwing away cancelled download: ${o}`);
        return;
      }
      u && x(`${this.GetDebugName()} Failed to download segment: ${o}`, u);
      let d = performance.now(),
        f = Math.floor(performance.now() - c),
        p = s ? s.status : 0;
      if (((this.m_xhrDownload = null), this.m_bSeekInProgress)) {
        (x(`${this.GetDebugName()} Throwing away download due to seek: ${o}`),
          this.ContinueSeek());
        return;
      }
      if (!s || s.status != 200) {
        this.m_stats.LogSegmentDownloadFailure(f, s ? s.status : 444);
        let e = De;
        if (d - i > ke) {
          if (this.m_callbacks.GetTimeoutAfterFailedDownload()) {
            (x(
              `${this.GetDebugName()} HTTP download failed.. stopping loader: ${d - i}ms`,
            ),
              this.DownloadFailed());
            return;
          }
          e = Oe;
        }
        if (p == 410) {
          ((this.m_nNumConsecutiveDownloadGones += 1),
            x(
              `${this.GetDebugName()} HTTP download gone.. informing the player: ${d - i}ms`,
            ),
            this.DownloadGone());
          return;
        }
        this.m_schNextDownload.Schedule(e, () =>
          this.DownloadSegment(t, n, r, i),
        );
        return;
      }
      this.m_nNumConsecutiveDownloadGones = 0;
      let m = new Uint8Array(s.data);
      if (n == Me) this.m_mapInitSegments.set(t.strID, m);
      else {
        let e = this.m_rgBufferedSegments.find((e) => e.nSegmentIndex == n);
        if (!this.BAdvanceNextSegment(n, e)) {
          (x(
            `${this.GetDebugName()} Downloaded unexpected segment compared to buffers.. stopping playback`,
          ),
            this.DownloadFailed());
          return;
        }
        if (e) ((e.representation = t), (e.data = m));
        else {
          let e = ve(t, n),
            r = this.m_mpd.GetEndTime(),
            i = V(t);
          ((i = Math.min((r - e) * 1e3, i)),
            this.m_rgBufferedSegments.push({
              representation: t,
              nSegmentIndex: n,
              nStartPTS: e,
              nDurationMS: i,
              data: m,
            }));
        }
        (this.LogDownload(c, m.length),
          this.UpdateBuffer(),
          this.m_callbacks.OnSegmentDownloaded(this));
      }
      (x(`HTTP ${p} (${f}ms, ${Math.floor(m.length / 1e3)}k): ${o}`),
        this.ScheduleNextDownload());
    }
    BAdvanceNextSegment(e, t) {
      let n = this.m_rgBufferedSegments.length;
      if (
        (n == 0 && t) ||
        (!t && n > 0 && this.m_rgBufferedSegments[n - 1].nSegmentIndex != e - 1)
      )
        return !1;
      if (!t) return ((this.m_nNextSegment = e + 1), !0);
      let r = this.m_rgBufferedSegments.find(
        (t) => t.nSegmentIndex > e && this.BCanUpgradeBufferedSegment(t),
      );
      return r
        ? ((this.m_nNextSegment = r.nSegmentIndex), !0)
        : ((this.m_nNextSegment =
            this.m_rgBufferedSegments[n - 1].nSegmentIndex + 1),
          !0);
    }
    DownloadFailed() {
      this.m_callbacks.OnSegmentDownloadFailed(this);
    }
    DownloadGone() {
      this.m_callbacks.OnSegmentDownloadGone(this);
    }
    CurrentTimeChanged() {
      this.UpdateBuffer();
    }
    UpdateBuffer() {
      if (this.m_sourceBuffer.GetBufferState() != W.None) return;
      if (this.m_bRemoveBufferState) {
        this.RemoveAllBuffers();
        return;
      }
      if (!this.m_sourceBuffer.HasAttachedBuffer()) {
        x(`No source buffer?`);
        return;
      }
      if (!this.m_representation) {
        S(`Update buffer - no representation?`);
        return;
      }
      let e = this.m_callbacks.GetCurrentPlayTime(),
        t = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(e) / 1e3,
        n = H(this.m_mpd, this.m_representation, e * 1e3),
        r = this.m_rgBufferedSegments.find(
          (e) => e.data && e.nSegmentIndex >= n,
        ),
        i = r && (t < G || r.nStartPTS - e < G);
      if (!this.m_bSourceBufferQuotaExceeded && i && r) {
        let e = r.data,
          t = r.representation.strID;
        if (this.m_strLastFedInitSegmentRep != t) {
          let n = this.m_mapInitSegments.get(t);
          if (!n) {
            (S(
              `${this.GetDebugName()} Missing init segment for representation=${t}`,
            ),
              this.m_callbacks.OnMediaSourceError(this));
            return;
          }
          ((e = n), (r = void 0));
        }
        let n = this.m_sourceBuffer.AppendBuffer(e);
        if (
          ((this.m_bSourceBufferQuotaExceeded = Te(n)),
          n && !this.m_bSourceBufferQuotaExceeded)
        ) {
          x(`${this.GetDebugName()} MSE Buffer - Exception`, n);
          return;
        }
        if (!n) {
          r ? (r.data = null) : (this.m_strLastFedInitSegmentRep = t);
          return;
        }
      }
      let a = this.m_bSourceBufferQuotaExceeded ? Pe : Fe,
        o = this.m_sourceBuffer.GetBufferedStartSec(),
        s = this.m_sourceBuffer.GetBufferedEndSec() - o,
        c = e - o;
      if (s && c >= a) {
        let t = H(this.m_mpd, this.m_representation, (e - a) * 1e3),
          n = ve(this.m_representation, t) - 0.01;
        if (n > o) {
          (this.m_sourceBuffer.Remove(0, n),
            (this.m_rgBufferedSegments = this.m_rgBufferedSegments.filter(
              (e) => e.nSegmentIndex >= t,
            )),
            (this.m_bSourceBufferQuotaExceeded = !1),
            x(
              `${this.GetDebugName()} Trim MSE buffer before ${n} (segment=${t})`,
            ));
          return;
        }
      }
    }
    RemoveAllBuffers() {
      ((this.m_bRemoveBufferState = !1),
        (this.m_bSourceBufferQuotaExceeded = !1));
      let e = !1;
      (this.m_sourceBuffer.HasAttachedBuffer() &&
        (e = this.m_sourceBuffer.RemoveAll()),
        this.m_sourceBuffer.MarkAsRemoving(),
        e || this.OnSourceBufferUpdateEnd());
    }
    ForceStopDownloads() {
      (this.m_schNextDownload.Cancel(),
        (this.m_xhrDownload &&= (this.m_xhrDownload.cancel(), null)));
    }
    ForceRestartDownload() {
      (this.ForceStopDownloads(), this.ScheduleNextDownload());
    }
    Seek(e) {
      let t = this.m_sourceBuffer.GetBufferedStartSec(),
        n = this.m_sourceBuffer.GetBufferedEndSec(),
        r = e >= t && e < n;
      if (
        (t == 0 && n == 0 && (r = !1),
        x(
          `${this.GetDebugName()} making an ${r ? `source buffer` : `out of source buffer`} seek to ${e}`,
        ),
        !this.m_bSeekInProgress && r)
      ) {
        this.ScheduleNextDownload();
        return;
      }
      if (!this.m_representation) {
        S(`Seek without representation?`);
        return;
      }
      let i = H(this.m_mpd, this.m_representation, e * 1e3),
        a = this.m_rgBufferedSegments.findIndex(
          (e) => e.data && e.nSegmentIndex == i,
        );
      if (a >= 0)
        ((this.m_rgBufferedSegments = this.m_rgBufferedSegments.slice(a)),
          x(
            `Partially buffered seek To Next Segment: ` +
              this.m_nNextSegment +
              ` at approx. ` +
              C(
                ((this.m_nNextSegment - 1) *
                  this.GetCurrentSegmentDurationMS()) /
                  1e3,
              ) +
              ` seconds.`,
          ));
      else {
        (this.ForceStopDownloads(), (this.m_rgBufferedSegments = []));
        let t = H(this.m_mpd, this.m_representation, e * 1e3);
        ((this.m_nNextSegment = Math.min(t, this.GetMaxSegment())),
          x(
            `Seek To Next Segment: ` +
              this.m_nNextSegment +
              ` at approx. ` +
              C(
                ((this.m_nNextSegment - 1) *
                  this.GetCurrentSegmentDurationMS()) /
                  1e3,
              ) +
              ` seconds.`,
          ));
      }
      ((this.m_bSeekInProgress = !0),
        (this.m_bRemoveBufferState = !0),
        this.UpdateBuffer());
    }
    ContinueSeek() {
      this.m_bSeekInProgress &&
        (this.m_sourceBuffer.GetBufferState() == W.Remove ||
          this.m_bRemoveBufferState ||
          ((this.m_bSeekInProgress = !1), this.ScheduleNextDownload()));
    }
    UpgradeBufferedVideo() {
      if (!this.m_representation) return;
      let e = V(this.m_representation),
        t = this.m_callbacks.GetCurrentPlayTime() * 1e3,
        n = H(this.m_mpd, this.m_representation, t + e),
        r = this.m_rgBufferedSegments.find(
          (e) => e.nSegmentIndex >= n && this.BCanUpgradeBufferedSegment(e),
        );
      r &&
        this.m_nNextSegment != r.nSegmentIndex &&
        (x(
          `Upgrading buffered segment ${r.nSegmentIndex} from rep ${r.representation.strID} to ${this.m_representation.strID}`,
        ),
        this.ForceStopDownloads(),
        (this.m_nNextSegment = r.nSegmentIndex),
        this.ScheduleNextDownload());
    }
    BCanUpgradeBufferedSegment(e) {
      if (!this.m_representation) return !1;
      let t = this.m_representation.nHeight || 0;
      return (e.representation.nHeight || 0) < t;
    }
    BHasEnoughBuffered(e) {
      if (this.m_bSeekInProgress) return !1;
      if (
        !this.m_xhrDownload &&
        !this.m_schNextDownload.IsScheduled() &&
        this.m_nNextSegment > this.GetMaxSegment()
      )
        return !0;
      let t = this.m_sourceBuffer.GetAmountBufferedInPlayerMS(e);
      if (t > this.m_nTrackBufferMS) return !0;
      let n = this.GetAmountBufferedMS(e);
      return t >= G * 1e3 && n >= this.m_nTrackBufferMS;
    }
    LogDownload(e, t) {
      this.m_rgDownloadLog.length >= Ae && this.m_rgDownloadLog.shift();
      let n = performance.now() - e;
      n <= 0 ||
        (this.m_rgDownloadLog.push({ cubData: t, nDownloadMS: n }),
        this.m_stats.LogDownload(t, n));
    }
    GetDownloadHistory() {
      return this.m_rgDownloadLog;
    }
    GetAvgDownloadRate() {
      let e = 0,
        t = 0;
      for (let n of this.m_rgDownloadLog)
        ((e += n.nDownloadMS), (t += n.cubData));
      return e <= 0
        ? this.m_nCurDownloadBitrate && this.GetActiveDownloads() > 0
          ? this.m_nCurDownloadBitrate
          : 0
        : (t * 8 * 1e3) / e;
    }
    GetAvgDownloadRateSampleCount() {
      return this.m_rgDownloadLog.length;
    }
  };
(c([m], K.prototype, `OnSourceBufferUpdateEnd`, null),
  c([m], K.prototype, `OnMediaUnsupportedError`, null),
  c([m], K.prototype, `OnSourceBufferError`, null),
  c([m], K.prototype, `OnSourceBufferAbort`, null),
  c([m], K.prototype, `ScheduleNextDownload`, null),
  c([m], K.prototype, `DownloadInitSegment`, null),
  c([m], K.prototype, `DownloadNextSegment`, null),
  c([m], K.prototype, `DownloadFailed`, null),
  c([m], K.prototype, `DownloadGone`, null),
  c([m], K.prototype, `CurrentTimeChanged`, null));
var q = `auto`;
function J(e) {
  return e.id == q;
}
var Ie = 3e4,
  Le = 8e3,
  Re = 30,
  ze = 6e4,
  Be = 5,
  Ve = 300,
  He = 250,
  Ue = 0.55,
  We = 30,
  Ge = 10,
  Ke = 4.5,
  qe = 1,
  Y = 1.1,
  X = 1,
  Je = 3,
  Ye = 250,
  Xe = (function (e) {
    return (
      (e[(e.Invalid = 0)] = `Invalid`),
      (e[(e.StreamGone = 1)] = `StreamGone`),
      (e[(e.PlaybackError = 2)] = `PlaybackError`),
      (e[(e.UnsupportedMediaType = 3)] = `UnsupportedMediaType`),
      e
    );
  })({}),
  Ze = (function (e) {
    return (
      (e[(e.Absolute = 0)] = `Absolute`),
      (e[(e.FromAvailableStart = 1)] = `FromAvailableStart`),
      e
    );
  })({});
function Z(t) {
  e(t, `MPD assert failed`);
}
var Q = class {
  m_elVideo;
  m_strMPD = ``;
  m_strHLS = ``;
  m_strCaptions = ``;
  m_strCDNAuthURLParameters = ``;
  m_bTimeoutAfterFailedDownload = !0;
  m_bAlwaysStartWithSubtitles = !1;
  m_bMuteOnAutoplayBlocked = !1;
  m_schUpdateMPD = new h();
  m_xhrUpdateMPD = null;
  m_xhrCaptionManifest = null;
  m_mpd = null;
  m_bUseHLSManifest = !1;
  m_strVideoAdaptationID = ``;
  m_strAudioAdaptationID = ``;
  m_rgLoaders = [];
  m_mediaSource = null;
  m_nTrackBufferMS = 0;
  m_nLimitFPS = 0;
  m_bIsBuffering = !0;
  m_seekingToTime = null;
  m_listeners = new g();
  m_resizeObserver = null;
  m_schPlayerResizeDelay = new h();
  m_nPlayerHeightForAuto = 0;
  m_bFirstPlay = !0;
  m_bPlaybackStarted = !1;
  m_bPlaybackEnded = !1;
  m_nLastPlaytimeLoaders = 0;
  m_nTimedText = 0;
  m_strActiveTextTrack = null;
  m_schReportPlayerTrigger = new h();
  m_bStatsViewVisible = !1;
  m_schCaptureDisplayStatsTrigger = new h();
  m_videoRepSelected = null;
  m_rgCaptions = null;
  m_stats = new O();
  m_bClosing = !1;
  m_hlsTimeOffset = 0;
  m_bUserPlayChoice = !0;
  m_bUserLiveEdgeChoice = !0;
  m_schFirstFrameThrottler = new h();
  m_bookMarkAdapter = null;
  m_schBookmarkUpdater = new h();
  m_watchedIntervals = new rt();
  constructor(e) {
    (f(this),
      (this.m_elVideo = e),
      this.m_schReportPlayerTrigger.Schedule(Re * 1e3, this.ReportPlayerStats));
  }
  BInitialized() {
    return !!this.m_strMPD;
  }
  CalcVideoStartRelativeToSystemClock(e) {
    Z(this.m_mpd);
    let t =
      (e ? new Date(e).getTime() : Date.now()) -
      this.m_mpd.GetAvailabilityStartTime().getTime();
    (this.m_mpd.StartLiveContentNow(t), x(`server time: ` + e));
  }
  GetMPDURL() {
    return this.m_strMPD;
  }
  GetHLSURL() {
    return this.m_strHLS;
  }
  IsPlayingHLS() {
    return this.m_bUseHLSManifest;
  }
  SetTimeoutAfterFailedDownload(e) {
    this.m_bTimeoutAfterFailedDownload = e;
  }
  SetAlwaysStartWithSubtitles(e) {
    this.m_bAlwaysStartWithSubtitles = e;
  }
  SetMuteOnAutoplayBlocked(e) {
    this.m_bMuteOnAutoplayBlocked = e;
  }
  async PlayMPD(t, n, r, i) {
    if (this.m_bClosing) {
      e(!1, `PlayMPD called on a closed CDASHPlayer`);
      return;
    }
    ((t = Array.isArray(t) ? t : [t]),
      this.m_stats.StartingPlayback(),
      (this.m_strCDNAuthURLParameters = i || ``));
    let a = null;
    for (let e of t) {
      let [t, n] = await this.DownloadMPD(e, this.m_strCDNAuthURLParameters);
      if (!n) {
        let e =
          t == 3
            ? `Failed to download MPD: 410 Gone`
            : `Timed out downloading MPD`;
        this.CloseWithError(2, e);
        return;
      }
      let r = new we();
      if (!r.BParse(n.data, e)) {
        this.CloseWithError(2, `Failed to parse MPD file`, this.m_strMPD);
        return;
      }
      let i = $e(r),
        o = et(i);
      if (
        ((a = {
          strMPD: e,
          mpd: r,
          strServerTime: n.headers.date,
          strCanPlay: i,
          bCanPlay: o,
        }),
        o)
      )
        break;
    }
    if (!a) this.CloseWithError(2, `Invalid manifest`);
    else {
      if (((this.m_strMPD = a.strMPD), (this.m_mpd = a.mpd), !a.bCanPlay)) {
        if (!n || !tt(this.m_elVideo)) {
          (this.OnMediaUnsupportedError(), this.Close());
          return;
        }
        ((this.m_strHLS = n), (this.m_bUseHLSManifest = !0));
      }
      (r && (await this.DownloadCaptionManifest(r)),
        this.DispatchEvent(`valve-metadatachanged`),
        this.IsLiveContent() &&
          (this.m_mpd.GetMinimumUpdatePeriod() > 0 &&
            this.m_schUpdateMPD.Schedule(
              this.m_mpd.GetMinimumUpdatePeriod() * 1e3,
              this.UpdateMPD,
            ),
          this.CalcVideoStartRelativeToSystemClock(a.strServerTime)),
        this.IsLiveContent() || this.m_watchedIntervals.Enable(),
        this.m_bUseHLSManifest
          ? ((this.m_elVideo.src = this.m_strHLS),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              `loadedmetadata`,
              this.OnLoadedMetadataForHLS,
            ),
            this.m_listeners.AddEventListener(
              document,
              `visibilitychange`,
              this.OnVisibilityChangeForHLS,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              `canplay`,
              this.OnVideoCanPlayHLS,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              `play`,
              this.OnVideoPlay,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              `seeking`,
              this.OnVideoSeeking,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              `seeked`,
              this.OnVideoSeeked,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              `pause`,
              this.OnVideoPause,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo,
              `ended`,
              this.OnEndedForHLS,
            ),
            this.m_listeners.AddEventListener(
              this.m_elVideo.textTracks,
              `change`,
              this.CheckActiveTextTrack,
            ),
            console.assert(this.BInitialized()))
          : this.BCreateLoaders()
            ? (this.InitVideoControl(),
              this.InitTimedText(),
              console.assert(this.BInitialized()))
            : this.CloseWithError(2, `Failed to create segment loaders`));
    }
  }
  InitTimedText() {
    Z(this.m_mpd);
    let e = [];
    if (this.m_rgCaptions) e = this.m_rgCaptions;
    else
      for (let t of this.m_mpd.GetTimedTextAdaptionSet(0))
        t.rgRepresentations.length != 0 &&
          t.rgRepresentations[0].strClosedCaptionFile &&
          t.strLanguage in _ &&
          e.push({
            m_strURL: t.rgRepresentations[0].strClosedCaptionFile,
            m_strLanguageBCP47: t.strLanguage,
          });
    this.m_nTimedText = 0;
    let t = o(l.LANGUAGE);
    for (let n of e) {
      let e = document.createElement(`track`);
      ((e.kind = `captions`),
        (e.label = nt(n.m_strLanguageBCP47)),
        (e.srclang = n.m_strLanguageBCP47),
        (e.src = n.m_strURL),
        (this.m_bAlwaysStartWithSubtitles || t != 0) &&
          _[n.m_strLanguageBCP47] == t &&
          (e.default = !0),
        this.m_elVideo.appendChild(e),
        (this.m_nTimedText += 1));
    }
  }
  SetSubtitles(e) {
    for (let t = 0; t < this.m_elVideo.textTracks.length; t++) {
      let n = this.m_elVideo.textTracks[t];
      n.mode = _[n.language] == e ? `showing` : `disabled`;
    }
  }
  CheckActiveTextTrack() {
    let e = ``;
    for (let t = 0; t < this.m_elVideo.textTracks.length; t++) {
      let n = this.m_elVideo.textTracks[t];
      n.mode == `showing` && (e = n.language);
    }
    e !== this.m_strActiveTextTrack &&
      ((this.m_strActiveTextTrack = e),
      this.DispatchEvent(`valve-captionschange`));
  }
  OnLoadedMetadataForHLS() {
    this.m_bUseHLSManifest &&
      ((this.m_bIsBuffering = !1),
      this.BeginPlaybackHLS(),
      this.CheckActiveTextTrack(),
      this.DispatchEvent(`valve-bufferupdate`));
  }
  OnVisibilityChangeForHLS() {
    this.m_bUseHLSManifest &&
      document.visibilityState === `visible` &&
      (this.m_elVideo.src = this.m_strHLS);
  }
  OnEndedForHLS() {
    this.m_bUseHLSManifest && this.EndPlayback();
  }
  EndPlayback() {
    (this.Pause(),
      !this.m_bPlaybackEnded &&
        ((this.m_bPlaybackEnded = !0),
        this.m_watchedIntervals.OnEnded(this.m_elVideo),
        this.DispatchEvent(`valve-ended`)));
  }
  Close() {
    if (
      ((this.m_bClosing = !0),
      this.m_listeners.Unregister(),
      this.m_schPlayerResizeDelay.Cancel(),
      (this.m_nPlayerHeightForAuto = 0),
      (this.m_resizeObserver &&= (this.m_resizeObserver.disconnect(), null)),
      this.StopDownloads(),
      this.m_elVideo.pause(),
      this.m_mediaSource)
    ) {
      try {
        this.m_mediaSource.readyState != `closed` &&
          this.m_mediaSource.endOfStream();
      } catch {}
      this.m_mediaSource = null;
    }
    ((this.m_bIsBuffering = !0),
      (this.m_strMPD = ``),
      (this.m_mpd = null),
      (this.m_strCaptions = ``),
      (this.m_bUseHLSManifest = !1),
      (this.m_strVideoAdaptationID = ``),
      (this.m_strAudioAdaptationID = ``),
      (this.m_nTrackBufferMS = 0),
      (this.m_nLimitFPS = 0),
      (this.m_seekingToTime = null),
      (this.m_bStatsViewVisible = !1),
      (this.m_videoRepSelected = null),
      (this.m_rgCaptions = null),
      this.m_stats && this.m_stats.GetFPSMonitor().Close(),
      (this.m_stats = new O()),
      (this.m_bFirstPlay = !0),
      (this.m_bPlaybackStarted = !1),
      (this.m_bPlaybackEnded = !1),
      (this.m_nLastPlaytimeLoaders = 0),
      (this.m_strActiveTextTrack = null),
      this.m_watchedIntervals.Clear(),
      console.assert(!this.BInitialized()));
  }
  StopDownloads() {
    ((this.m_xhrUpdateMPD &&= (this.m_xhrUpdateMPD.cancel(), null)),
      (this.m_xhrCaptionManifest &&=
        (this.m_xhrCaptionManifest.cancel(), null)),
      this.m_schUpdateMPD.Cancel(),
      this.m_schReportPlayerTrigger.Cancel(),
      this.m_schCaptureDisplayStatsTrigger.Cancel(),
      this.m_schFirstFrameThrottler.Cancel(),
      this.m_schBookmarkUpdater.Cancel(),
      this.m_elVideo.playbackRate != X && (this.m_elVideo.playbackRate = X));
    for (let e of this.m_rgLoaders) e.Close();
    ((this.m_rgLoaders = []), (this.m_bIsBuffering = !0));
  }
  IsBuffering() {
    return this.m_bIsBuffering;
  }
  IsLiveContent() {
    return this.m_mpd ? this.m_mpd.IsLiveContent() : !1;
  }
  async DownloadMPD(t, n) {
    if (((n ||= ``), this.m_xhrUpdateMPD))
      return (e(!1, `Multiple MPD download requests`), [2, null]);
    let r = performance.now();
    for (; performance.now() - r < Ie;) {
      let e = null;
      try {
        this.m_xhrUpdateMPD = y.default.CancelToken.source();
        let r = t + n;
        e = await y.default.get(r, { cancelToken: this.m_xhrUpdateMPD.token });
      } catch {}
      if (((this.m_xhrUpdateMPD = null), this.m_bClosing)) return [4, null];
      if (e && e.status == 200) return [1, e];
      if (e && e.status == 410) return [3, null];
      (x(`Failed to download, will retry: ` + this.m_strMPD), await re(200));
    }
    return (x(`Failed to download: ` + this.m_strMPD), [2, null]);
  }
  async UpdateMPD() {
    (Z(this.m_mpd), x(`Updating MPD in player from: ` + this.m_strMPD));
    let [e, t] = await this.DownloadMPD(
      this.m_strMPD,
      this.m_strCDNAuthURLParameters,
    );
    t
      ? this.m_mpd.BUpdate(t.data)
        ? (this.IsLiveContent() &&
            this.CalcVideoStartRelativeToSystemClock(t.headers.date),
          this.m_stats.SetAnalyticLinks(
            this.m_mpd.GetStatsLink(),
            this.m_mpd.GetStalledLink(),
            this.m_mpd.GetEventLink(),
          ),
          this.m_mpd.GetMinimumUpdatePeriod() > 0 &&
            this.m_schUpdateMPD.Schedule(
              this.m_mpd.GetMinimumUpdatePeriod() * 1e3,
              this.UpdateMPD,
            ),
          this.DispatchEvent(`valve-metadatachanged`))
        : this.CloseWithError(2, `Failed to parse on Update the MPD file`)
      : e == 3 && this.CloseWithError(2, `Failed to download MPD: 410 Gone`);
  }
  async DownloadCaptionManifest(e) {
    let t = null;
    try {
      ((this.m_xhrCaptionManifest = y.default.CancelToken.source()),
        (t = await y.default.get(e, {
          cancelToken: this.m_xhrCaptionManifest.token,
        })));
    } catch {
      return;
    }
    if (((this.m_xhrCaptionManifest = null), !t || t.status != 200)) return;
    let n = typeof t.data == `string` ? JSON.parse(t.data) : t.data;
    if (n && Array.isArray(n.captions)) {
      this.m_rgCaptions = [];
      for (let t of n.captions) {
        if (!t.url || !t.lang || !(t.lang in _)) continue;
        let n = new URL(t.url, e).href;
        this.m_rgCaptions.push({ m_strURL: n, m_strLanguageBCP47: t.lang });
      }
      this.m_strCaptions = e;
    }
  }
  CloseWithError(e, ...t) {
    this.m_bClosing ||
      (this.DispatchEvent(`valve-downloadfailed`, e), this.Close(), x(...t));
  }
  BCreateLoaders() {
    Z(this.m_mpd);
    let e = this.m_mpd.GetPeriods();
    if (e.length == 0) return !1;
    let t = e[0];
    ((this.m_strVideoAdaptationID = ``), (this.m_strAudioAdaptationID = ``));
    for (let e of t.rgAdaptationSets) {
      let t = null;
      if (
        (!this.m_strVideoAdaptationID &&
          e.bContainsVideo &&
          B(e) &&
          ((t = e), (this.m_strVideoAdaptationID = e.strID)),
        !this.m_strAudioAdaptationID &&
          e.bContainsAudio &&
          B(e) &&
          ((t = e), (this.m_strAudioAdaptationID = e.strID)),
        t)
      ) {
        let e = new K(this, this.m_mpd, t, this.m_stats);
        this.m_rgLoaders.push(e);
      }
    }
    return this.m_strVideoAdaptationID.length > 0;
  }
  InitVideoControl() {
    let e = new MediaSource(),
      t = URL.createObjectURL(e);
    (this.m_elVideo.pause(),
      (this.m_elVideo.srcObject = null),
      (this.m_elVideo.src = t),
      (this.m_mediaSource = e),
      this.m_listeners.AddEventListener(
        e,
        `sourceopen`,
        this.OnMediaSourceOpen,
      ),
      this.m_listeners.AddEventListener(
        e,
        `sourceended`,
        this.OnMediaSourceEnded,
      ),
      this.m_listeners.AddEventListener(
        e,
        `sourceclose`,
        this.OnMediaSourceClose,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `waiting`,
        this.OnVideoWaiting,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `error`,
        this.OnVideoError,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `canplay`,
        this.OnVideoCanPlay,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `pause`,
        this.OnVideoPause,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `resize`,
        this.OnVideoResize,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `valve-bufferupdate`,
        this.OnVideoTimeUpdate,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `timeupdate`,
        this.OnVideoTimeUpdate,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `play`,
        this.OnVideoPlay,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `seeking`,
        this.OnVideoSeeking,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `seeked`,
        this.OnVideoSeeked,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo.textTracks,
        `change`,
        this.CheckActiveTextTrack,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `loadedmetadata`,
        this.OnLoadedMetadata,
      ),
      (this.m_nPlayerHeightForAuto = this.GetVideoPlayerHeight()),
      (this.m_resizeObserver = ee(this.m_elVideo, this.OnPlayerResize)));
  }
  OnPlayerResize(e, t) {
    (this.m_schPlayerResizeDelay.Cancel(),
      this.m_schPlayerResizeDelay.Schedule(Ye, () => {
        this.GetVideoPlayerHeight() != this.m_nPlayerHeightForAuto &&
          ((this.m_nPlayerHeightForAuto = this.GetVideoPlayerHeight()),
          this.UpdateVideoRepresentation(!0));
      }));
  }
  OnMediaSourceOpen(t) {
    (e(this.m_mediaSource, `Missing Media Source`), x(`OnMediaSourceOpen`));
    for (let e of this.m_rgLoaders) e.SetMediaSource(this.m_mediaSource);
    this.BeginPlayback();
  }
  HandleMediaSourceError(e) {
    !this.m_bClosing && e.target == this.m_mediaSource && this.StopDownloads();
  }
  OnMediaSourceEnded(e) {
    (x(`OnMediaSourceEnded`, e), this.HandleMediaSourceError(e));
  }
  OnMediaSourceClose(e) {
    (x(`OnMediaSourceClose`, e), this.HandleMediaSourceError(e));
  }
  OnVideoWaiting(e) {
    if (this.m_mpd) {
      if (this.IsAtEnd())
        (x(
          `pausing playback due to OnVideoWaiting (endTime=${this.m_mpd.GetEndTime()}, currentPlaytime=${this.GetCurrentPlayTime()} )`,
        ),
          this.EndPlayback());
      else if (
        !this.BIsPlayerBufferedBetween(
          this.m_elVideo.currentTime,
          this.m_elVideo.currentTime + 0.5,
        ) &&
        !this.m_seekingToTime &&
        this.BInitialized()
      ) {
        if (this.m_elVideo.buffered.length > 1) {
          let e = this.m_elVideo.currentTime,
            t = this.m_elVideo.buffered;
          for (let n = 0; n < t.length; ++n)
            if (
              (x(
                `OnVideoWaiting buffer ` +
                  n +
                  ` start:` +
                  t.start(n) +
                  ` end: ` +
                  t.end(n) +
                  ` playerTime: ` +
                  e,
              ),
              t.start(n) <= e && e <= t.end(n))
            ) {
              (x(`OnVideoWaiting - time splitting, jumping to buffer ` + n),
                this.Seek(t.start(n)));
              return;
            }
        }
        if (
          (this.m_stats.ReportVideoStalled(this.m_rgLoaders, this.m_elVideo),
          (this.m_bIsBuffering = !0),
          this.DispatchEvent(`valve-bufferupdate`),
          this.m_videoRepSelected === null)
        ) {
          let e = !0,
            t = this.GetVideoLoader();
          if (t) {
            let n = this.GetCurrentVideoAdaptation(),
              r = n ? this.m_mpd.GetLowestRepresentation(n.strID) : null;
            (r &&
              !t.BIsCurrentRepresentation(r) &&
              (t.ChangeRepresentation(r, !1),
              x(
                `OnVideoWaiting - Stalled, forced restart download at resolution: ` +
                  r.nWidth +
                  `x` +
                  r.nHeight +
                  `@` +
                  r.nFrameRate +
                  ` instead`,
              ),
              (e = !1)),
              this.Seek(this.m_elVideo.currentTime));
          }
          e &&
            x(
              `OnVideoWaiting - Stalled, already at lowest resolution. No action taken. BHasLoader: ` +
                (t != null),
            );
        } else {
          let e = this.m_videoRepSelected;
          x(
            `OnVideoWaiting - Stalled, user explicitly chose a resolution: ${e.nWidth}x${e.nHeight}@${e.nFrameRate}`,
          );
        }
      }
    }
  }
  OnVideoPause(e) {
    (this.m_bUseHLSManifest ||
      (this.OnVideoBufferProgress(),
      this.m_stats.GetFPSMonitor().Close(),
      this.SendUpdateToBookmarkServiceIfNeeded()),
      this.m_watchedIntervals.OnPause(this.m_elVideo));
  }
  OnVideoResize(e) {
    this.m_stats.GetFPSMonitor().SetWindowResized();
  }
  OnVideoError(e) {
    x(`OnVideoError`);
  }
  OnVideoCanPlay(e) {
    (this.m_bIsBuffering || (this.m_bUserPlayChoice && this.PlayOnElement()),
      this.m_stats.LogVideoOnCanPlay());
  }
  OnVideoCanPlayHLS() {
    this.m_stats.LogVideoOnCanPlay();
  }
  OnLoadedMetadata() {
    this.CheckActiveTextTrack();
  }
  GetCurrentPlayTime() {
    if (!this.BInitialized()) return 0;
    if (this.m_seekingToTime) {
      if (!this.m_bPlaybackStarted && this.m_seekingToTime.eSeekType == 1)
        return 0;
      let e =
        this.m_seekingToTime.eSeekType == 1
          ? this.GetAvailableVideoStartTime()
          : 0;
      return this.m_seekingToTime.nTime + e;
    }
    return this.m_bUseHLSManifest && this.m_mpd && this.m_mpd.IsLiveContent()
      ? (this.m_elVideo.currentTime > 0 &&
          this.m_hlsTimeOffset === 0 &&
          (this.m_hlsTimeOffset =
            this.GetBufferedLiveEdgeTime() - this.m_elVideo.currentTime),
        this.m_elVideo.currentTime + this.m_hlsTimeOffset)
      : this.m_elVideo.currentTime;
  }
  GetBufferedEndTime() {
    if (this.m_rgLoaders.length == 0) return 0;
    let e = 2 ** 53 - 1;
    for (let t of this.m_rgLoaders) e = Math.min(t.GetBufferedEnd(), e);
    return e;
  }
  OnVideoTimeUpdate() {
    if (!this.BInitialized()) return;
    let e = this.m_elVideo.currentTime;
    if (
      e < this.m_nLastPlaytimeLoaders ||
      e - this.m_nLastPlaytimeLoaders > 0.5
    ) {
      for (let e of this.m_rgLoaders) e.CurrentTimeChanged();
      this.m_nLastPlaytimeLoaders = e;
    }
    if (this.m_bUserLiveEdgeChoice && this.IsLiveContent()) {
      let e = this.GetBufferedLiveEdgeTime();
      if (
        this.m_elVideo.playbackRate == X &&
        this.m_elVideo.currentTime <= e - Ke &&
        this.BIsPlayerBufferedBetween(this.m_elVideo.currentTime, e)
      ) {
        let t = e - this.m_elVideo.currentTime;
        ((this.m_elVideo.playbackRate = Y),
          x(
            `User is behind by ` +
              t.toFixed(2) +
              ` seconds, increasing playback speed to catch-up to live edge.`,
          ));
      } else
        this.m_elVideo.playbackRate == Y &&
          this.m_elVideo.currentTime >= e - qe &&
          ((this.m_elVideo.playbackRate = X),
          x(`User is caught up, returning to normal playrate`));
    } else {
      let e = this.GetAvailableVideoStartTime(),
        t = this.GetBufferedLiveEdgeTime() - e;
      this.GetCurrentPlayTime() - e >= t && this.EndPlayback();
    }
  }
  SetBookmarkAdapter(e) {
    this.m_bookMarkAdapter = e;
  }
  SendUpdateToBookmarkServiceIfNeeded() {
    if (this.m_bookMarkAdapter) {
      let e = this.m_elVideo.currentTime;
      e = e >= 0 ? e : 0;
      let t = this.GetCurrentVideoAdaptation(),
        n = t && t.strID ? t.strID : ``,
        r = this.GetCurrentAudioAdaptationfunction(),
        i = r && r.strID ? r.strID : ``;
      (this.m_bookMarkAdapter.SetBookmark(e, n, i, ``),
        this.IsPaused()
          ? this.m_schBookmarkUpdater.Cancel()
          : this.m_schBookmarkUpdater.Schedule(
              ze,
              this.SendUpdateToBookmarkServiceIfNeeded,
            ));
    }
  }
  OnVideoPlay() {
    (this.m_bUseHLSManifest ||
      (this.SendUpdateToBookmarkServiceIfNeeded(),
      this.m_stats
        .GetFPSMonitor()
        .StartTracking(() => this.m_stats.ExtractFrameInfo(this.m_elVideo))),
      this.m_watchedIntervals.OnPlay(this.m_elVideo),
      (this.m_bPlaybackEnded = !1));
  }
  OnVideoSeeking() {
    this.m_watchedIntervals.OnSeeking(this.m_elVideo);
  }
  OnVideoSeeked() {
    (this.m_watchedIntervals.OnSeeked(this.m_elVideo),
      (this.m_bPlaybackEnded = !1));
  }
  BIsPlayerBufferedBetween(e, t) {
    return (
      this.m_elVideo.buffered.length > 0 &&
      e >= this.m_elVideo.buffered.start(0) &&
      t <= this.m_elVideo.buffered.end(0)
    );
  }
  GetLiveContentStartTime() {
    return this.m_mpd ? this.m_mpd.GetAvailabilityStartTime() : new Date(0);
  }
  GetTimeTextAdaptions(e) {
    return this.m_mpd ? this.m_mpd.GetTimedTextAdaptionSet(e) : [];
  }
  GetAvailableVideoStartTime() {
    if (!this.m_mpd) return 0;
    let e = 0;
    if (this.IsLiveContent()) {
      let n = Math.floor(this.m_mpd.GetDurationSinceStarted() / 1e3),
        r = this.GetBufferedLiveEdgeTime(),
        i = this.m_mpd.GetTimeShiftBufferDepth();
      ((e = i ? n - i + Ge : 0), (e = t(e, 0, r)));
    } else e = this.m_mpd.GetStartTime();
    return e;
  }
  GetBufferedLiveEdgeTime() {
    if (!this.m_mpd) return 0;
    let e = 0;
    return (
      (e = this.IsLiveContent()
        ? Math.floor(
            (this.m_mpd.GetDurationSinceStarted() - this.m_nTrackBufferMS) /
              1e3,
          )
        : this.m_mpd.GetEndTime()),
      e
    );
  }
  IsPaused() {
    return !this.m_bUserPlayChoice;
  }
  IsAtEnd() {
    return (
      !this.IsLiveContent() &&
      this.m_mpd &&
      this.m_mpd.GetEndTime() > 0 &&
      this.m_mpd.GetEndTime() - this.GetCurrentPlayTime() < 1
    );
  }
  SetUserPlayChoice(e) {
    ((this.m_bUserPlayChoice = e), this.DispatchEvent(`valve-userpausechange`));
  }
  Play() {
    this.BInitialized() &&
      (this.SetUserPlayChoice(!0), this.Seek(this.GetCurrentPlayTime()));
  }
  Pause() {
    ((this.m_bUserLiveEdgeChoice = !1),
      this.m_elVideo.playbackRate == Y && (this.m_elVideo.playbackRate = X),
      this.SetUserPlayChoice(!1),
      this.m_elVideo.pause());
  }
  GetPlaybackRate() {
    return this.m_elVideo.paused ? 0 : this.m_elVideo.playbackRate;
  }
  GetTimeoutAfterFailedDownload() {
    return this.m_bTimeoutAfterFailedDownload;
  }
  GetCDNAuthURLParameter() {
    return this.m_strCDNAuthURLParameters;
  }
  OnSegmentDownloaded(e) {
    (x(e.GetDebugName() + ` OnSegmentDownloaded`),
      this.UpdateVideoRepresentation(!1),
      this.OnVideoBufferProgress(),
      e == this.GetVideoLoader() &&
        this.m_stats.SetCurrentVideoBandwidth(e.GetAvgDownloadRate()));
  }
  OnSegmentBuffered(e) {
    this.OnVideoBufferProgress();
  }
  async PlayOnElement() {
    let e = this.m_bFirstPlay;
    this.m_bFirstPlay = !1;
    let t;
    try {
      await this.m_elVideo.play();
    } catch (e) {
      ((t = e), x(`Failed to play video`, e));
    }
    let n = this.BHasTimedText() || this.m_bMuteOnAutoplayBlocked;
    if ($(t) && !this.m_elVideo.muted && n) {
      (x(`Trying to play again, this time muted with subtitles`),
        (t = void 0),
        (this.m_elVideo.muted = !0),
        this.SetSubtitles(o(l.LANGUAGE)));
      try {
        await this.m_elVideo.play();
      } catch (e) {
        ((t = e), x(`Failed to play video when muted`, e));
      }
    }
    e && $(t) && this.DispatchEvent(`valve-userinputneeded`);
  }
  OnVideoBufferProgress() {
    if (!this.IsBuffering()) return;
    let e = this.m_rgLoaders.length > 0,
      t = this.GetPlaybackStartTime(0);
    for (let n of this.m_rgLoaders) {
      if (!n.BHasEnoughBuffered(t)) {
        e = !1;
        break;
      }
      t = Math.max(t, n.GetBufferedStart());
    }
    e &&
      ((this.m_bIsBuffering = !1),
      (this.m_seekingToTime = null),
      this.m_elVideo.currentTime == t
        ? this.m_elVideo.paused &&
          this.m_bUserPlayChoice &&
          this.PlayOnElement()
        : (this.m_elVideo.currentTime = t),
      this.DispatchEvent(`valve-bufferupdate`));
  }
  OnSegmentDownloadFailed(e, t) {
    (this.StopDownloads(), this.DispatchEvent(`valve-downloadfailed`, t));
  }
  OnSegmentDownloadGone(e) {
    this.m_bIsBuffering && e.GetNumConsecutiveDownloadGones() <= Je
      ? this.Seek(
          this.GetCurrentPlayTime() + e.GetCurrentSegmentDurationMS() / 1e3,
        )
      : (x(
          `OnSegmentDownloadGone: too many consecutive 'gone', erroring the download: ` +
            e.GetNumConsecutiveDownloadGones(),
        ),
        this.OnSegmentDownloadFailed(e, 1));
  }
  OnMediaUnsupportedError() {
    this.DispatchEvent(`valve-downloadfailed`, 3);
  }
  OnMediaSourceError() {
    this.DispatchEvent(`valve-playbackerror`);
  }
  GetCurrentAudioAdaptationfunction() {
    return this.m_mpd
      ? this.m_mpd.GetAdaptationByTrackID(this.m_strAudioAdaptationID)
      : null;
  }
  GetCurrentVideoAdaptation() {
    return this.m_mpd
      ? this.m_mpd.GetAdaptationByTrackID(this.m_strVideoAdaptationID)
      : null;
  }
  GetVideoLoader() {
    for (let e of this.m_rgLoaders) if (e.ContainsVideo()) return e;
    return null;
  }
  GetAudioLoader() {
    for (let e of this.m_rgLoaders) if (e.ContainsAudio()) return e;
    return null;
  }
  SetTrackBufferMS(e) {
    this.m_nTrackBufferMS = e;
    for (let t of this.m_rgLoaders) t.SetBufferMS(e);
  }
  BeginPlaybackHLS() {
    ((this.m_bPlaybackStarted = !0),
      (this.m_seekingToTime = null),
      x(`Starting HLS playback at 0`),
      this.Seek(0));
  }
  BeginPlayback() {
    Z(this.m_mpd);
    let e = this.GetVideoLoader();
    if (!e || this.m_bUseHLSManifest) {
      x(`No video loader for playback?`);
      return;
    }
    let t = this.DetermineBestVideoRepresentation();
    for (let e of this.m_rgLoaders)
      if (e.ContainsVideo()) {
        e.ChangeRepresentation(t, !1);
        let n = e.GetCurrentSegmentDurationMS();
        this.m_schFirstFrameThrottler.Schedule(
          n / 2,
          this.VerifyFirstSegmentDownloadProgress,
        );
      } else if (e.ContainsAudio()) {
        let t =
          e.GetAdaptation().rgRepresentations.length > 0
            ? e.GetAdaptation().rgRepresentations[0]
            : null;
        t && e.ChangeRepresentation(t, !1);
      }
    this.m_bPlaybackStarted = !0;
    let n = 0;
    if (this.IsLiveContent()) {
      let t = e.GetCurrentSegmentDurationMS(),
        r = this.m_mpd.GetMinBufferTime() * 1e3,
        i = Math.max(t, r);
      this.SetTrackBufferMS(i);
      let a = this.GetBufferedLiveEdgeTime();
      ((n = this.GetPlaybackStartTime(a)),
        x(
          `Begin playback of live content [this.buffer=${this.m_nTrackBufferMS}][nStartTime=${n}][nLiveEdge=${a}]`,
        ));
    } else
      (this.SetTrackBufferMS(Le),
        (n = this.GetPlaybackStartTime(0)),
        this.m_bookMarkAdapter &&
          ((n = this.m_bookMarkAdapter.GetBeginPlaytime()),
          this.m_mpd.GetEndTime() - n < Be && (n = 0)),
        x(
          `Begin playback of non-live content [this.buffer=${this.m_nTrackBufferMS}][nStartTime=${n}]`,
        ));
    ((this.m_seekingToTime = null),
      x(`Starting playback at ` + n),
      this.m_stats.SetSegmentDurationMS(e.GetCurrentSegmentDurationMS()),
      this.m_stats.SetAnalyticLinks(
        this.m_mpd.GetStatsLink(),
        this.m_mpd.GetStalledLink(),
        this.m_mpd.GetEventLink(),
      ),
      this.m_stats.SetVideoInitializationURL(
        e.GetCurrentSegmentInitializationURL(),
      ),
      this.Seek(n));
  }
  VerifyFirstSegmentDownloadProgress() {
    let e = this.GetVideoLoader();
    if (
      this.m_videoRepSelected === null &&
      e &&
      e.GetDownloadHistory().length == 0 &&
      e.GetActiveDownloads() > 0 &&
      e.GetActiveDownloadProgress() < Ue
    ) {
      let t = this.DetermineBestVideoRepresentation();
      t &&
        !e.BIsCurrentRepresentation(t) &&
        (e.ChangeRepresentation(t, !1),
        e.ForceRestartDownload(),
        x(
          `Video download progressing too slowly, choosing ` +
            t.nWidth +
            `x` +
            t.nHeight +
            `@` +
            t.nFrameRate +
            ` instead`,
        ));
    }
  }
  DetermineBestVideoRepresentation() {
    let t = this.GetVideoLoader();
    e(t, `Missing video loader`);
    let n = this.GetAudioLoader(),
      r = n && n != t ? n.GetEstimatedAudioRate() : 0,
      i = t.GetAvgDownloadRateSampleCount() > 0 ? t.GetAvgDownloadRate() : -1,
      a = Qe(this.m_nPlayerHeightForAuto),
      o = t.GetRepresentationsCount() - 1,
      s = t.GetAdaptation().rgRepresentations[o];
    for (let e = o - 1; e >= 0; e--) {
      let n = t.GetAdaptation().rgRepresentations[e],
        o = (n.nBandwidth + r) * this.m_elVideo.playbackRate * 1.15;
      if (i > 0 && i < o) {
        x(`Video select: Skipping ${e} due to rate: [avg=${i}][required=${o}]`);
        continue;
      }
      let c = n.nFrameRate || 0;
      if (this.IsLiveContent() && c > We) {
        let t = this.m_stats.GetFPSMonitor(),
          n = t.BHasCurrentFPS() && Math.ceil(t.GetCurrentFPS()) < 29;
        if (t.BIsDroppingFrames() || n) {
          x(
            `Video select: Skipping ${e} due to dropping frames and high FPS representation: [fps:${c}]`,
          );
          continue;
        }
      }
      if (this.m_nLimitFPS > 0 && c > this.m_nLimitFPS) {
        x(`Video select: Skipping ${e} due to frame rate limit`);
        continue;
      }
      let l = s.nHeight || 0,
        u = n.nHeight || 0;
      if (a > 0 && l > 0 && u > 0 && u > a) {
        x(`Video select: Stopped at ${l} due to player dimensions`);
        break;
      }
      s = n;
    }
    return s;
  }
  UpdateVideoRepresentation(e) {
    if (this.m_videoRepSelected) return;
    let t = this.GetVideoLoader();
    if (!t || this.IsBuffering()) return;
    let n = this.DetermineBestVideoRepresentation();
    t.ChangeRepresentation(n, e);
  }
  GetPlaybackStartTime(t) {
    if (!this.m_seekingToTime) return t;
    e(this.m_bPlaybackStarted, `Missing mpd info to calculate seek time`);
    let n =
      this.m_seekingToTime.eSeekType == 1
        ? this.GetAvailableVideoStartTime()
        : 0;
    return this.m_seekingToTime.nTime + n;
  }
  CanSeek() {
    return !0;
  }
  SeekAndPlay(e) {
    return (this.SetUserPlayChoice(!0), this.Seek(e));
  }
  Seek(e, n = 0) {
    if (!this.m_bPlaybackStarted)
      return ((this.m_seekingToTime = { nTime: e, eSeekType: n }), e);
    n == 1 && (e += this.GetAvailableVideoStartTime());
    let r = this.GetAvailableVideoStartTime(),
      i = this.GetBufferedLiveEdgeTime(),
      a = e;
    ((e = t(e, r, i)),
      e != a && x(`Seek time ${a} was clamped to the range ${r} to ${i}`),
      (this.m_bUserLiveEdgeChoice = e >= i - 5));
    let o = this.m_elVideo.paused;
    if ((o || this.m_elVideo.pause(), this.m_bUseHLSManifest))
      ((this.m_elVideo.currentTime = e - this.m_hlsTimeOffset),
        this.PlayOnElement(),
        this.DispatchEvent(`valve-bufferupdate`));
    else {
      ((this.m_bIsBuffering = !0),
        (this.m_seekingToTime = { nTime: e, eSeekType: 0 }));
      for (let t of this.m_rgLoaders) t.Seek(e);
      (this.DispatchEvent(`valve-bufferupdate`),
        o && this.OnVideoBufferProgress());
    }
    return e;
  }
  JumpTime(e) {
    return ((e += this.GetCurrentPlayTime()), this.Seek(e));
  }
  GetVideoPlayerHeight() {
    return this.m_elVideo.clientHeight;
  }
  DispatchEvent(e, t = null) {
    let n = new CustomEvent(e, { cancelable: !0, bubbles: !0, detail: t });
    this.m_elVideo.dispatchEvent(n);
  }
  IsMuted() {
    return this.m_elVideo.muted;
  }
  SetMuted(e) {
    this.m_elVideo.muted = e;
  }
  SetVolume(e) {
    ((e = t(e, 0, 1)), (this.m_elVideo.volume = e));
  }
  GetVolume() {
    return this.m_elVideo.volume;
  }
  GetDASHPlayerStats() {
    return this.m_stats;
  }
  GetAndCloseWatchedIntervals() {
    return (
      this.m_watchedIntervals.CloseCurrentInterval(this.m_elVideo),
      this.m_watchedIntervals.GetIntervals()
    );
  }
  ReportPlayerStats() {
    (this.m_stats.ReportPlayerStats(this.m_rgLoaders, this.m_elVideo),
      this.m_schReportPlayerTrigger.Schedule(Ve * 1e3, this.ReportPlayerStats));
  }
  SetStatsViewIsVisible(e) {
    (e && !this.m_bStatsViewVisible
      ? (this.CaptureStatsForDisplay(),
        this.m_schCaptureDisplayStatsTrigger.Schedule(
          He,
          this.CaptureStatsForDisplay,
        ))
      : !e &&
        this.m_bStatsViewVisible &&
        this.m_schCaptureDisplayStatsTrigger.Cancel(),
      (this.m_bStatsViewVisible = e));
  }
  CaptureStatsForDisplay() {
    (this.m_stats.SetHTMLVideoPlayerDisplay(
      this.m_elVideo.videoWidth,
      this.m_elVideo.videoHeight,
      this.m_elVideo.clientWidth,
      this.m_elVideo.clientHeight,
    ),
      this.m_stats.CaptureFrequentlyUpdatingInformation(
        this.m_elVideo,
        this.m_rgLoaders,
      ),
      this.m_schCaptureDisplayStatsTrigger.Schedule(
        He,
        this.CaptureStatsForDisplay,
      ));
  }
  GetVideoRepresentations() {
    let e = [];
    if (
      (e.push({
        id: q,
        displayName: `Auto`,
        selected: this.m_videoRepSelected === null,
      }),
      this.m_bUseHLSManifest)
    )
      return e;
    let t = this.GetCurrentVideoAdaptation();
    if (t)
      for (let n of t.rgRepresentations) {
        let t =
            !!this.m_videoRepSelected &&
            this.m_videoRepSelected.strID == n.strID,
          r = n.nFrameRate || 0,
          i = n.nWidth || 0,
          a = n.nHeight || 0;
        r > 50 && r < 70 ? (r = 60) : r > 25 && r < 35 && (r = 30);
        let o = `${n.nWidth}x${n.nHeight} @ ${r}fps`;
        e.push({
          id: n.strID,
          displayName: o,
          selected: t,
          width: i,
          height: a,
          fps: r,
        });
      }
    return (
      e.sort((e, t) =>
        e.id == t.id
          ? 0
          : J(e)
            ? -1
            : J(t)
              ? 1
              : e.width === t.width
                ? t.fps - e.fps
                : t.width - e.width,
      ),
      e
    );
  }
  SetVideoRepresentation(e) {
    let t = !0,
      n = this.GetVideoLoader();
    if (n && e && !J(e)) {
      let r = n.GetRepresentationByID(e.id);
      r &&
        ((t = !1),
        (this.m_videoRepSelected === null ||
          this.m_videoRepSelected.strID != r.strID) &&
          ((this.m_videoRepSelected = r),
          n.ChangeRepresentation(r, !0),
          this.Seek(this.GetCurrentPlayTime()),
          this.m_stats.MarkAtLeastOneUserRepresentation()));
    }
    t && (this.m_videoRepSelected = null);
  }
  GetThumbnail(e) {
    if (!this.m_mpd) return null;
    ((e += this.GetAvailableVideoStartTime()),
      (e += Math.floor(this.m_mpd.GetThumbnailDurationMS() / 1e3)));
    let n = this.GetAvailableVideoStartTime(),
      r = this.GetBufferedLiveEdgeTime();
    return ((e = t(e, n, r)), this.m_mpd.GetThumbnail(e * 1e3));
  }
  BHasTimedText() {
    return this.m_nTimedText > 0;
  }
  IsShowingCaption() {
    return !!this.m_strActiveTextTrack;
  }
  GetCaptionRepresentations() {
    if (!this.m_mpd) return [];
    let e = [];
    for (let t of this.m_elVideo.textTracks)
      e.push({ m_eLanguage: _[t.language], m_strLabel: t.label });
    return e;
  }
  GetMaxWidthAndHeight() {
    if (!this.m_mpd) return null;
    let e = this.m_mpd.GetMainVideoAdaption();
    if (!e || e.rgRepresentations.length == 0) return null;
    let t = e.rgRepresentations[0];
    return { nWidth: t.nWidth || 0, nHeight: t.nHeight || 0 };
  }
};
(c([r], Q.prototype, `m_nTimedText`, void 0),
  c([s], Q.prototype, `InitTimedText`, null),
  c([m], Q.prototype, `CheckActiveTextTrack`, null),
  c([m], Q.prototype, `OnLoadedMetadataForHLS`, null),
  c([m], Q.prototype, `OnVisibilityChangeForHLS`, null),
  c([m], Q.prototype, `OnEndedForHLS`, null),
  c([m], Q.prototype, `UpdateMPD`, null),
  c([m], Q.prototype, `OnPlayerResize`, null),
  c([m], Q.prototype, `OnMediaSourceOpen`, null),
  c([m], Q.prototype, `HandleMediaSourceError`, null),
  c([m], Q.prototype, `OnMediaSourceEnded`, null),
  c([m], Q.prototype, `OnMediaSourceClose`, null),
  c([m], Q.prototype, `OnVideoWaiting`, null),
  c([m], Q.prototype, `OnVideoPause`, null),
  c([m], Q.prototype, `OnVideoResize`, null),
  c([m], Q.prototype, `OnVideoError`, null),
  c([m], Q.prototype, `OnVideoCanPlay`, null),
  c([m], Q.prototype, `OnVideoCanPlayHLS`, null),
  c([m], Q.prototype, `OnLoadedMetadata`, null),
  c([m], Q.prototype, `GetCurrentPlayTime`, null),
  c([m], Q.prototype, `GetBufferedEndTime`, null),
  c([m], Q.prototype, `OnVideoTimeUpdate`, null),
  c([m], Q.prototype, `SendUpdateToBookmarkServiceIfNeeded`, null),
  c([m], Q.prototype, `OnVideoPlay`, null),
  c([m], Q.prototype, `OnVideoSeeking`, null),
  c([m], Q.prototype, `OnVideoSeeked`, null),
  c([m], Q.prototype, `GetPlaybackRate`, null),
  c([m], Q.prototype, `GetTimeoutAfterFailedDownload`, null),
  c([m], Q.prototype, `GetCDNAuthURLParameter`, null),
  c([m], Q.prototype, `OnSegmentDownloaded`, null),
  c([m], Q.prototype, `OnSegmentBuffered`, null),
  c([m], Q.prototype, `PlayOnElement`, null),
  c([m], Q.prototype, `OnSegmentDownloadFailed`, null),
  c([m], Q.prototype, `OnSegmentDownloadGone`, null),
  c([m], Q.prototype, `OnMediaUnsupportedError`, null),
  c([m], Q.prototype, `OnMediaSourceError`, null),
  c([m], Q.prototype, `VerifyFirstSegmentDownloadProgress`, null),
  c([m], Q.prototype, `ReportPlayerStats`, null),
  c([s.bound], Q.prototype, `CaptureStatsForDisplay`, null));
function Qe(e) {
  return e < 410 ? 480 : e < 600 ? 720 : e < 910 ? 1080 : 2 ** 53 - 1;
}
function $e(e) {
  let t = ``,
    n = ``,
    r = ``,
    i = e.GetMainVideoAdaption();
  return (
    i &&
      i.rgRepresentations.length > 0 &&
      ((t = i.rgRepresentations[0].strMimeType),
      (n = i.rgRepresentations[0].strCodecs || ``)),
    (i = e.GetMainAudioAdaption()),
    i &&
      i.rgRepresentations.length > 0 &&
      (r = i.rgRepresentations[0].strCodecs || ``),
    !t || !n ? `` : r ? `${t}; codecs="${n}, ${r}` : `${t}; codecs="${n}`
  );
}
function et(e) {
  let t = !1;
  try {
    t = MediaSource.isTypeSupported(e);
  } catch {}
  return t;
}
function tt(e) {
  let t = e.canPlayType(
    `application/vnd.apple.mpegurl;codecs="avc1.64001f, mp4a.40.02"`,
  );
  return t === `probably` || t === `maybe`;
}
function $(e) {
  return !!e && e instanceof Error && e.name == `NotAllowedError`;
}
function nt(e) {
  return e in _ ? v(`#Language_` + a(_[e])) : ``;
}
var rt = class {
  m_bEnabled = !1;
  m_rgIntervals = [];
  m_nWatchStart = void 0;
  Enable() {
    this.m_bEnabled = !0;
  }
  GetIntervals() {
    return this.m_rgIntervals;
  }
  CloseCurrentInterval(e) {
    this.StopInterval(e);
  }
  Clear() {
    ((this.m_bEnabled = !1),
      (this.m_rgIntervals = []),
      (this.m_nWatchStart = void 0));
  }
  OnPlay(e) {
    this.StartInterval(e);
  }
  OnPause(e) {
    this.StopInterval(e);
  }
  OnSeeking(e) {
    this.StopInterval(e);
  }
  OnSeeked(e) {
    e.paused || this.StartInterval(e);
  }
  OnEnded(e) {
    this.StopInterval(e);
  }
  StartInterval(e) {
    this.m_bEnabled &&
      this.m_nWatchStart === void 0 &&
      (this.m_nWatchStart = e.currentTime);
  }
  StopInterval(e) {
    if (!this.m_bEnabled || this.m_nWatchStart === void 0) return;
    let t = e.currentTime;
    (this.MergeInterval([this.m_nWatchStart, t]),
      (this.m_nWatchStart = void 0));
  }
  MergeInterval(e) {
    ((e[0] = Math.floor(e[0])), (e[1] = Math.ceil(e[1])));
    let t = 0;
    for (
      ;
      t < this.m_rgIntervals.length && !(e[0] <= this.m_rgIntervals[t][1]);
      t++
    );
    let [n, r] = e,
      i;
    for (i = t; i < this.m_rgIntervals.length; i++) {
      let e = this.m_rgIntervals[i];
      if (e[0] > r) break;
      ((n = Math.min(n, e[0])), (r = Math.max(r, e[1])));
    }
    let a = i - t;
    this.m_rgIntervals.splice(t, a, [n, r]);
  }
};
export {
  q as a,
  se as c,
  J as i,
  C as l,
  Xe as n,
  O as o,
  Ze as r,
  oe as s,
  Q as t,
};
