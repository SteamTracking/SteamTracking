/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { i as e, n as t } from "./chunk~f025431ab0.js";
import {
  $ as n,
  $n as r,
  A as i,
  Bn as a,
  Cr as o,
  G as s,
  Gn as c,
  J as l,
  Jt as u,
  L as d,
  Ln as f,
  N as p,
  Pt as m,
  Qn as h,
  W as g,
  Xn as _,
  Yn as v,
  Zn as y,
  _t as ee,
  er as b,
  h as x,
  hn as S,
  it as te,
  lt as ne,
  nr as C,
  o as w,
  qn as re,
  qt as ie,
  rr as ae,
  s as oe,
  st as se,
  tr as T,
  u as ce,
  v as le,
} from "./chunk~d3515eca4e.js";
import {
  $ as ue,
  A as de,
  B as fe,
  Bs as pe,
  C as me,
  Ct as he,
  D as ge,
  E as _e,
  F as ve,
  Fr as ye,
  G as be,
  Gr as xe,
  H as Se,
  I as Ce,
  J as we,
  Jn as Te,
  K as Ee,
  L as De,
  M as Oe,
  N as ke,
  Nn as E,
  O as Ae,
  P as je,
  Pn as Me,
  Q as Ne,
  R as Pe,
  S as Fe,
  St as Ie,
  T as Le,
  Tt as D,
  U as Re,
  V as ze,
  Wt as Be,
  X as Ve,
  Y as He,
  Z as Ue,
  _ as We,
  _i as Ge,
  _r as Ke,
  _t as qe,
  a as Je,
  ar as Ye,
  at as Xe,
  b as Ze,
  bt as Qe,
  c as $e,
  cs as et,
  ct as tt,
  d as nt,
  dt as rt,
  et as it,
  f as at,
  fi as ot,
  ft as st,
  g as ct,
  gt as lt,
  hi as ut,
  hr as dt,
  i as ft,
  ic as O,
  it as pt,
  j as mt,
  k as ht,
  lt as gt,
  mi as _t,
  n as vt,
  or as k,
  os as yt,
  ot as bt,
  p as xt,
  pc as St,
  pt as Ct,
  q as wt,
  qr as Tt,
  qs as Et,
  r as Dt,
  rc as Ot,
  rn as kt,
  rr as At,
  rt as jt,
  s as Mt,
  ss as Nt,
  st as Pt,
  t as Ft,
  u as It,
  ut as Lt,
  v as Rt,
  vc as zt,
  vo as A,
  vt as Bt,
  w as Vt,
  wo as Ht,
  x as Ut,
  xt as Wt,
  y as Gt,
  yt as Kt,
  z as qt,
} from "./chunk~e464778a03.js";
import { a as j, n as Jt } from "./chunk~0ef0cd2c00.js";
import {
  _ as M,
  a as Yt,
  b as Xt,
  c as Zt,
  d as Qt,
  f as $t,
  h as N,
  i as en,
  l as tn,
  m as nn,
  n as rn,
  o as an,
  p as on,
  r as P,
  s as sn,
  u as cn,
  v as F,
  x as ln,
  y as I,
} from "./chunk~4c84692d6e.js";
import "./chunk~198b531c82.js";
var un = `steam_`,
  dn = (function (e) {
    return (
      (e[(e.White = 0)] = `White`),
      (e[(e.Red = 1)] = `Red`),
      (e[(e.Orange = 2)] = `Orange`),
      (e[(e.Yellow = 3)] = `Yellow`),
      (e[(e.Green = 4)] = `Green`),
      (e[(e.Blue = 5)] = `Blue`),
      (e[(e.Purple = 6)] = `Purple`),
      (e[(e.Brown = 7)] = `Brown`),
      (e[(e.Gray = 8)] = `Gray`),
      e
    );
  })({});
function fn(e) {
  switch (e) {
    default:
    case 0:
      return `#DCDEDF`;
    case 1:
      return `#FB7C7C`;
    case 2:
      return `#FBB17C`;
    case 3:
      return `#FBDF7C`;
    case 4:
      return `#9DFB7C`;
    case 5:
      return `#7CD5FB`;
    case 6:
      return `#A57CFB`;
    case 7:
      return `#C18C5B`;
    case 8:
      return `#B8BCBF`;
  }
}
function pn(e) {
  return Object.keys(e).filter((e) => !Number.isNaN(e));
}
var mn = pn(dn).map((e) => dn[e]),
  hn = class e {
    m_mapSteamTimelineMarkers = new Map();
    GetMarkerByID(e) {
      let t = e.toLowerCase().startsWith(`steam_`)
          ? e.slice(6).toLowerCase()
          : e.toLowerCase(),
        n = this.m_mapSteamTimelineMarkers.get(t);
      if (n) return n;
      let r = parseInt(t);
      return typeof r == `number` && r >= 0 && r <= 99
        ? { func: (e) => ue({ nNumber: r }), color: 8 }
        : yn();
    }
    GetAllUseableMarkerID() {
      return Array.from(this.m_mapSteamTimelineMarkers.keys()).map(
        (e) => un + e,
      );
    }
    static s_Singleton;
    static Get() {
      return (
        e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
        e.s_Singleton
      );
    }
    AddMarker(e, t, n) {
      let r = n ?? 0;
      this.m_mapSteamTimelineMarkers.set(e, { func: t, color: r });
      for (let n of mn) {
        let r = `${e}_${dn[n]}`.toLowerCase();
        this.m_mapSteamTimelineMarkers.set(r, { func: t, color: n });
      }
    }
    Init() {
      (this.AddMarker(`explosion`, ze, 8),
        this.AddMarker(`attack`, Ut, 8),
        this.AddMarker(`defend`, De, 8),
        this.AddMarker(`combat`, ke, 8),
        this.AddMarker(`chest`, de, 8),
        this.AddMarker(`view`, Qe, 8),
        ee() ? this.AddMarker(`death`, Ie, 8) : this.AddMarker(`death`, Ce, 8),
        this.AddMarker(`x`, Ie, 8),
        this.AddMarker(`plus`, jt, 8),
        this.AddMarker(`minus`, Ne, 8),
        this.AddMarker(`info`, we, 8),
        this.AddMarker(`bolt`, Fe, 8),
        this.AddMarker(`caution`, ge, 8),
        this.AddMarker(`completed`, je, 8),
        this.AddMarker(`checkmark`, ht, 8),
        this.AddMarker(`effect`, fe, 8),
        this.AddMarker(`purchase`, pt, 8),
        this.AddMarker(`ribbon`, bt, 8),
        this.AddMarker(`scroll`, gt, 8),
        this.AddMarker(`crown`, ve, 8),
        this.AddMarker(`starburst`, Ct, 8),
        this.AddMarker(`flag`, Re, 8),
        this.AddMarker(`cart`, _e, 8),
        this.AddMarker(`timer`, lt, 8),
        this.AddMarker(`chat`, Ae, 8),
        this.AddMarker(`wrench`, Se, 8),
        this.AddMarker(`transfer`, qe, 8),
        this.AddMarker(`edit`, qt, 8),
        this.AddMarker(`bookmark`, me, 8),
        this.AddMarker(`invalid`, He, 8),
        this.AddMarker(`star`, st, 8),
        this.AddMarker(`circle`, mt, 8),
        this.AddMarker(`square`, rt, 8),
        this.AddMarker(`triangle`, Bt, 8),
        this.AddMarker(`heart`, wt, 8),
        this.AddMarker(`diamond`, Pe, 8),
        this.AddMarker(`gem`, be, 8),
        this.AddMarker(`group`, Ee, 8),
        this.AddMarker(`pair`, it, 8),
        this.AddMarker(`single`, Kt, 8),
        this.AddMarker(`trophy`, Gt, 8),
        this.AddMarker(`achievement`, Gt, 8),
        this.AddMarker(`screenshot`, tt, 8),
        this.AddMarker(`bug`, Vt, 8),
        this.AddMarker(`fix`, Se, 8),
        this.AddMarker(`person`, Kt, 8),
        this.AddMarker(`question`, Xe, 8));
    }
  };
function gn(e) {
  return hn.Get().GetMarkerByID(e);
}
function _n() {
  return { func: Ue, color: 5 };
}
function vn() {
  return { func: Gt, color: 0 };
}
function yn() {
  return { func: Ue, color: 8 };
}
function bn(e) {
  return e && e.toLowerCase().startsWith(`steam_`);
}
var xn = (function (e) {
    return (
      (e[(e.None = 0)] = `None`),
      (e[(e.DownloadFailed = 1)] = `DownloadFailed`),
      (e[(e.PlaybackError = 2)] = `PlaybackError`),
      (e[(e.MediaTypeError = 3)] = `MediaTypeError`),
      e
    );
  })({}),
  L = class {
    m_elVideo = null;
    m_player = null;
    m_listeners = new i();
    m_nDownloadFailureCount = 0;
    m_bInitailized = !1;
    m_bPaused = !1;
    m_bAtEnd = !1;
    m_strMediaTypeError = null;
    m_ePlayerError = 0;
    m_bUserInputNeeded = !1;
    m_bMuted = !1;
    m_bSeekReadyToPlay = !1;
    m_bVideoElementPlaying = !1;
    m_nPlaybackSpeed = 1;
    m_bIsWaiting = !0;
    m_bAutoPlay;
    m_bLoadedMetadata = !1;
    m_nPlaybackTime = 0;
    m_nVideoStartTime = 0;
    m_nVideoDuration = 0;
    m_nVolume = 1;
    m_eSeekType = et.Absolute;
    constructor(e) {
      (g(this), (this.m_bAutoPlay = !!e));
    }
    IsPaused() {
      return this.m_bPaused;
    }
    IsAtEnd() {
      return this.m_bAtEnd;
    }
    BSeekReadyToPlay() {
      return this.m_bSeekReadyToPlay;
    }
    GetMediaTypeError() {
      return this.m_strMediaTypeError;
    }
    GetPlaybackError() {
      return this.m_ePlayerError;
    }
    GetUserInputNeeded() {
      return this.m_bUserInputNeeded;
    }
    GetPlaybackTime() {
      return this.m_eSeekType === et.Absolute
        ? this.m_nPlaybackTime
        : this.m_nPlaybackTime - this.m_nVideoStartTime;
    }
    GetTimelineDuration() {
      return this.m_eSeekType === et.Absolute
        ? this.m_nVideoDuration
        : this.m_nVideoDuration - this.m_nVideoStartTime;
    }
    GetVolume() {
      return this.m_nVolume;
    }
    GetMuted() {
      return this.m_bMuted;
    }
    GetMPDURL() {
      return this.m_player?.GetMPDURL();
    }
    GetVideoElementCurrentTime() {
      return this.m_elVideo?.currentTime;
    }
    BVideoElementPlaying() {
      return this.m_bVideoElementPlaying;
    }
    BVideoElementWaiting() {
      return this.m_bIsWaiting;
    }
    GetVideoHeight() {
      return this.m_elVideo?.clientHeight || 0;
    }
    GetVideoWidth() {
      return this.m_elVideo?.clientWidth || 0;
    }
    GetLoadedMetadata() {
      return this.m_bLoadedMetadata;
    }
    Start(e, t, n, r = et.Absolute) {
      (this.Stop(),
        (this.m_bAtEnd = !1),
        (this.m_elVideo = e),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-userpausechange`,
          this.OnUserPauseChange,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `playing`,
          this.OnVideoPlaying,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `pause`,
          this.OnVideoPause,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `timeupdate`,
          this.OnVideoTimeUpdate,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `ended`,
          this.OnVideoEnd,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-ended`,
          this.OnVideoEnd,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-bufferupdate`,
          this.OnVideoTimeUpdate,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-downloadfailed`,
          this.OnDownloadFailed,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-playbackerror`,
          this.OnPlaybackError,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-userinputneeded`,
          this.OnUserInputNeeded,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `waiting`,
          this.OnVideoWaiting,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `volumechange`,
          this.OnVolumeChange,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `canplay`,
          this.OnCanPlay,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `seeking`,
          this.OnSeeking,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `loadedmetadata`,
          this.OnLoadedMetadata,
        ),
        (this.m_player = new yt(this.m_elVideo)),
        this.m_player.SetUserPlayChoice(this.m_bAutoPlay),
        this.m_player.PlayMPD(t),
        (this.m_bMuted = Tn(`muted`)),
        (this.m_nVolume = Tn(`volume`)),
        this.m_player.SetMuted(this.m_bMuted),
        this.m_player.SetVolume(this.m_nVolume),
        (this.m_bSeekReadyToPlay = !1),
        (this.m_eSeekType = r));
      let i = `seeking_${t}_${n.toFixed(3)}`;
      (F(`CGameRecordingVideo:: perf mark ${i}`),
        performance.mark(i),
        this.m_player.Seek(n, this.m_eSeekType),
        (this.m_bPaused = this.m_player.IsPaused()),
        (this.m_bInitailized = !0));
    }
    Stop() {
      (this.m_listeners.Unregister(),
        this.m_player && this.m_player.Close(),
        (this.m_elVideo = null),
        (this.m_player = null),
        (this.m_bInitailized = !1),
        (this.m_bPaused = !1),
        (this.m_bAtEnd = !1),
        (this.m_bSeekReadyToPlay = !1),
        (this.m_bVideoElementPlaying = !1),
        (this.m_ePlayerError = 0),
        (this.m_bUserInputNeeded = !1),
        (this.m_nPlaybackTime = 0),
        (this.m_nVideoStartTime = 0),
        (this.m_nVideoDuration = 0),
        (this.m_bLoadedMetadata = !1),
        (this.m_bIsWaiting = !0));
    }
    async UpdateMPD() {
      await this.m_player?.UpdateMPD();
    }
    IsInitialized() {
      return this.m_bInitailized;
    }
    OnCanPlay() {
      ((this.m_bSeekReadyToPlay = !0), (this.m_bAtEnd = !1));
    }
    OnUserPauseChange() {
      this.m_bPaused = this.m_player.IsPaused();
    }
    OnVideoPlaying() {
      ((this.m_bVideoElementPlaying = !0),
        (this.m_bIsWaiting = !1),
        this.SetPlaybackSpeed(this.m_nPlaybackSpeed),
        M(`video playing`));
    }
    OnVideoPause() {
      ((this.m_bVideoElementPlaying = !1), M(`video paused`));
    }
    OnVideoTimeUpdate() {
      ((this.m_nVideoStartTime = this.m_player.GetAvailableVideoStartTime()),
        (this.m_nVideoDuration = this.m_player.GetBufferedLiveEdgeTime()),
        (this.m_nPlaybackTime = this.m_player.GetCurrentPlayTime()));
    }
    OnVideoEnd() {
      ((this.m_bVideoElementPlaying = !1),
        (this.m_bAtEnd = !0),
        M(`video ended`));
    }
    OnSeeking() {
      (M(`video on seeking`),
        (this.m_bVideoElementPlaying = !1),
        (this.m_bIsWaiting = !0),
        (this.m_bAtEnd = !1));
    }
    OnLoadedMetadata() {
      this.m_bLoadedMetadata = !0;
    }
    async OnDownloadFailed(e) {
      (e.detail || Nt.PlaybackError) == Nt.UnsupportedMediaType
        ? (I(`media type error`), (this.m_ePlayerError = 3))
        : (I(`video download failed`, e.detail),
          this.m_nDownloadFailureCount < 2
            ? (await this.m_player?.UpdateMPD(), this.m_nDownloadFailureCount++)
            : (this.m_ePlayerError = 1));
    }
    OnPlaybackError() {
      ((this.m_bVideoElementPlaying = !1),
        I(`video playback error`),
        (this.m_ePlayerError = 2));
    }
    OnUserInputNeeded() {
      ((this.m_bUserInputNeeded = !0),
        !this.m_bMuted &&
          this.m_elVideo.autoplay &&
          (Xt(`Failed to autoplay video. Muting and trying again.`),
          this.SetMute(!0),
          this.Play()));
    }
    OnVolumeChange() {
      M(`volume change`);
    }
    OnVideoWaiting() {
      ((this.m_bIsWaiting = !0),
        (this.m_bVideoElementPlaying = !1),
        this.GetTimelineDuration() - this.GetPlaybackTime() < 1 &&
          (this.m_bAtEnd = !0));
    }
    UserInputReceived() {
      this.IsInitialized() &&
        ((this.m_bUserInputNeeded = !1), this.m_player.SeekAndPlay(0));
    }
    SetVolume(e) {
      ((this.m_nVolume = e),
        En(`volume`, e),
        e > 0 ? this.SetMute(!1, !0) : this.SetMute(!0, !0),
        this.IsInitialized() && this.m_player.SetVolume(e));
    }
    SetMute(e, t) {
      (this.IsInitialized() && this.m_player.SetMuted(e),
        (this.m_bMuted = e),
        t && En(`muted`, e));
    }
    TogglePlayPause() {
      this.IsInitialized() &&
        (this.m_player.IsPaused() ? this.Play() : this.Pause());
    }
    Play() {
      this.IsInitialized() && this.m_player.Play();
    }
    Pause() {
      this.IsInitialized() && (this.m_player.Pause(), (this.m_bIsWaiting = !1));
    }
    SetPlaybackSpeed(e) {
      ((this.m_nPlaybackSpeed = e),
        this.IsInitialized() && (this.m_elVideo.playbackRate = e));
    }
    GetPlaybackSpeed() {
      return this.m_nPlaybackSpeed;
    }
    Seek(e) {
      if (!this.IsInitialized()) return;
      let t = `seeking_${this.m_player.GetMPDURL()}_${e.toFixed(3)}`;
      ((this.m_bAtEnd = !1),
        (this.m_bSeekReadyToPlay = !1),
        performance.mark(t),
        F(`CGameRecordingVideo:: perf mark ${t}`),
        F(`CGameRecordingVideo::Seek to ${e}`),
        (this.m_nPlaybackTime = e),
        this.m_player.Seek(e, this.m_eSeekType));
    }
  };
(p([s], L.prototype, `m_bInitailized`, void 0),
  p([s], L.prototype, `m_bPaused`, void 0),
  p([s], L.prototype, `m_bAtEnd`, void 0),
  p([s], L.prototype, `m_strMediaTypeError`, void 0),
  p([s], L.prototype, `m_ePlayerError`, void 0),
  p([s], L.prototype, `m_bUserInputNeeded`, void 0),
  p([s], L.prototype, `m_bMuted`, void 0),
  p([s], L.prototype, `m_bSeekReadyToPlay`, void 0),
  p([s], L.prototype, `m_bVideoElementPlaying`, void 0),
  p([s], L.prototype, `m_nPlaybackSpeed`, void 0),
  p([s], L.prototype, `m_bIsWaiting`, void 0),
  p([s], L.prototype, `m_bLoadedMetadata`, void 0),
  p([s], L.prototype, `m_nPlaybackTime`, void 0),
  p([s], L.prototype, `m_nVideoStartTime`, void 0),
  p([s], L.prototype, `m_nVideoDuration`, void 0),
  p([s], L.prototype, `m_nVolume`, void 0),
  p([s], L.prototype, `m_eSeekType`, void 0),
  p([d], L.prototype, `Start`, null),
  p([d], L.prototype, `Stop`, null),
  p([f], L.prototype, `OnCanPlay`, null),
  p([f], L.prototype, `OnUserPauseChange`, null),
  p([f], L.prototype, `OnVideoPlaying`, null),
  p([f], L.prototype, `OnVideoPause`, null),
  p([f], L.prototype, `OnVideoTimeUpdate`, null),
  p([f], L.prototype, `OnVideoEnd`, null),
  p([f], L.prototype, `OnSeeking`, null),
  p([f], L.prototype, `OnLoadedMetadata`, null),
  p([f], L.prototype, `OnDownloadFailed`, null),
  p([f], L.prototype, `OnPlaybackError`, null),
  p([f], L.prototype, `OnUserInputNeeded`, null),
  p([f], L.prototype, `OnVolumeChange`, null),
  p([f], L.prototype, `OnVideoWaiting`, null),
  p([f], L.prototype, `UserInputReceived`, null));
function Sn(e, t) {
  return ne((n) => (t(n), () => e()), [t]);
}
var Cn;
function wn() {
  if (!Cn) {
    let e = window.localStorage.getItem(`gameRecordingPlayer`) || `{}`,
      t;
    try {
      t = JSON.parse(e);
    } catch {
      t = {};
    }
    Cn = { muted: t.muted || !1, volume: t.volume || 1 };
  }
  return Cn;
}
function Tn(e) {
  return wn()[e];
}
function En(e, t) {
  let n = wn();
  n[e] = t;
  let r = JSON.stringify(n);
  window.localStorage.setItem(`gameRecordingPlayer`, r);
}
var R = e(o(), 1),
  Dn = (function (e) {
    return (
      (e.NotRunning = `NotRunning`),
      (e.NotRecording = `NotRecording`),
      (e.ManualRecording = `ManualRecording`),
      (e.BackgroundRecording = `BackgroundRecording`),
      e
    );
  })({});
function On(e) {
  let { app: t } = We(e);
  if (!t) return `NotRecording`;
  switch (t.recording_type) {
    default:
    case 0:
    case 1:
      return `NotRecording`;
    case 2:
      return `ManualRecording`;
    case 3:
      return `BackgroundRecording`;
  }
}
var z = Jt(),
  kn = (function (e) {
    return (
      (e.Overlay = `Overlay`),
      (e.Clips = `Clips`),
      (e.Background = `Background`),
      (e.CommunityClip = `Community`),
      (e.ChatClip = `Chat`),
      (e.Partner = `Partner`),
      e
    );
  })({}),
  An = 3 * rn,
  jn = 5 * rn,
  Mn = rn + 2e3,
  Nn = 1e3,
  B = class {
    m_gameRecordingVideo = null;
    m_timelineLoader = null;
    m_fnUnregisterLoader = null;
    m_rgListeners = [];
    m_videoRef;
    m_bHidePlayer = !1;
    m_fnGetManifest;
    m_strRecordingID = null;
    m_nPendingSeekSec = -1;
    m_playbackDefinition = null;
    m_pendingStop = null;
    m_durationMS = P(null);
    m_lastRecordingGlobalMS = P(null);
    m_bWasLiveEdge = !1;
    m_nGlobalTimelinePlaybackMS = null;
    m_nGlobalTimelinePlaybackSec = null;
    m_fnUnregisterAutorun = [];
    m_eGameRecordingMode;
    m_rgSeekPerf = [];
    m_eRecordingState = Dn.NotRecording;
    m_eRecordingSetting = `Never`;
    m_bGamepadMode = !1;
    m_bControlsVisible = !0;
    m_fnRenderGlyph = void 0;
    m_previousHighlightEntry = null;
    m_nextHighlightEntry = null;
    m_displayHighlightEntry = null;
    m_nRelativeTimeForDisplay = void 0;
    m_rgClipOffsets = [];
    m_phasePreview = void 0;
    constructor(e, t, n, r, i, a, o, s) {
      (g(this),
        (this.m_fnGetManifest = t),
        (this.m_gameRecordingVideo = new L(!0)),
        (this.m_eGameRecordingMode = n),
        (this.m_bGamepadMode = i),
        (this.m_playbackDefinition = o),
        r != null && (this.m_bControlsVisible = r),
        n === `Overlay` && (this.m_bHidePlayer = !0),
        s && this.SetClipOffsets(s),
        (this.m_fnRenderGlyph = a),
        this.m_fnUnregisterAutorun.push(
          l(
            () => ({
              bIsAtEnd: this.m_gameRecordingVideo.IsAtEnd(),
              bIsPaused: this.m_gameRecordingVideo.IsPaused(),
            }),
            (e) => {
              e.bIsAtEnd && !e.bIsPaused && this.PlayNextTimelineRecording();
            },
            { fireImmediately: !0 },
          ),
        ),
        this.m_fnUnregisterAutorun.push(
          l(
            () => this.m_gameRecordingVideo.GetPlaybackTime(),
            (e) => {
              if (
                this.m_pendingStop &&
                this.m_pendingStop.m_strRecordingID == this.m_strRecordingID &&
                this.m_pendingStop.m_nOffsetMS <= e * 1e3
              ) {
                if (this.m_playbackDefinition?.m_nLoopDurationMS) {
                  this.StartPlaybackForRange();
                  return;
                }
                (this.m_gameRecordingVideo.Pause(),
                  (this.m_pendingStop = null));
              }
            },
            { fireImmediately: !0 },
          ),
        ),
        this.m_fnUnregisterAutorun.push(
          l(
            () => ({
              playback: this.m_gameRecordingVideo.GetPlaybackTime(),
              bVideoPlaying: this.m_gameRecordingVideo.BVideoElementPlaying(),
            }),
            (e) => {
              if (e.bVideoPlaying) {
                let t =
                  this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                    this.m_strRecordingID,
                    e.playback * 1e3,
                    0,
                  );
                if (t)
                  (this.UpdateGlobalPlayTime(t.nGlobalOffsetMS),
                    t.nGlobalOffsetMS > this.GetLiveEdgeMS().valMS &&
                      this.m_eGameRecordingMode === `Overlay` &&
                      this.m_gameRecordingVideo.GetPlaybackSpeed() > 1 &&
                      (console.log(
                        ` hitting live edge, slow down the playback `,
                      ),
                      this.m_gameRecordingVideo.SetPlaybackSpeed(1)));
                else {
                  let e = this.GetLiveEdgeMS();
                  isNaN(e.valMS) ||
                    (this.SetPlaytimeFromGlobalMS(e), this.FocusGlobalMS(e));
                }
              }
            },
            { fireImmediately: !0 },
          ),
        ),
        this.m_fnUnregisterAutorun.push(
          l(
            () => ({
              globalPlaybackMS: this.m_nGlobalTimelinePlaybackMS,
              bVideoPaused: this.m_gameRecordingVideo.IsPaused(),
              bHidePlayer: this.m_bHidePlayer,
            }),
            (e) => {
              this.m_timelineLoader?.BInitialized() &&
                (e.bHidePlayer
                  ? this.SetEntriesForLiveEdge()
                  : (!this.m_previousHighlightEntry ||
                      !this.m_nextHighlightEntry ||
                      (this.m_nextHighlightEntry?.globalMS &&
                        e.globalPlaybackMS >=
                          this.m_nextHighlightEntry.globalMS.valMS) ||
                      (this.m_previousHighlightEntry?.globalMS &&
                        e.globalPlaybackMS <=
                          this.m_previousHighlightEntry.globalMS.valMS) ||
                      (e.bVideoPaused &&
                        this.m_previousHighlightEntry?.globalMS &&
                        e.globalPlaybackMS >=
                          this.m_previousHighlightEntry.globalMS.valMS +
                            1e3)) &&
                    (this.CalculatePreviousHighlightEntry(
                      e.globalPlaybackMS,
                      e.bVideoPaused,
                    ),
                    this.CalculateNextHighlightEntry(
                      e.globalPlaybackMS,
                      e.bVideoPaused,
                    )));
            },
            { fireImmediately: !0 },
          ),
        ),
        this.m_fnUnregisterAutorun.push(
          l(
            () => this.m_gameRecordingVideo.BSeekReadyToPlay(),
            (e) => {
              if (e) {
                let e = `seeking_${this.GetManifestFromRecordingID(this.m_strRecordingID)}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`;
                try {
                  let t = `measure_${this.m_strRecordingID}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`,
                    n = performance.measure(t, e);
                  (F(
                    `CGameRecordingVideo:: perf measure ${e} duration ${n.duration}`,
                  ),
                    n && this.m_rgSeekPerf.push(n.duration));
                } catch (t) {
                  F(`CGameRecordingVideo:: cant measure ${e}, error: ${t}`);
                }
              }
            },
            { fireImmediately: !0 },
          ),
        ),
        this.SetLoader(e));
    }
    AddEventListener(e) {
      return (this.m_rgListeners.push(e), () => a(this.m_rgListeners, e));
    }
    FireEvent(e, ...t) {
      for (let n of this.m_rgListeners) {
        let r = n[e];
        r instanceof Function && r.apply(n, t);
      }
    }
    dispose() {
      (this.m_fnUnregisterAutorun.forEach((e) => e()),
        (this.m_fnUnregisterLoader &&= (this.m_fnUnregisterLoader(), null)));
    }
    SetVideoElement(e) {
      if (e) {
        if (this.m_videoRef === e) return;
        if (((this.m_videoRef = e), this.m_strRecordingID)) {
          let e = this.m_nPendingSeekSec > 0 ? this.m_nPendingSeekSec : 0;
          ((this.m_nPendingSeekSec = -1),
            this.ChangePlaybackRecording(this.m_strRecordingID, e));
        } else this.TryPlayInitialTimelineVideo();
      } else (this.m_gameRecordingVideo.Stop(), (this.m_videoRef = null));
    }
    OnInvalidateRecording(e, t) {
      let n = this.m_fnGetManifest(t);
      this.m_gameRecordingVideo.GetMPDURL() == n &&
        (F(`Recording invalidated for ${t}. Reloading MPD`),
        this.m_gameRecordingVideo.UpdateMPD());
    }
    OnLoaderInitialized() {
      ((this.m_durationMS = this.m_timelineLoader.GetGlobalTimelineEndMS()),
        (this.m_lastRecordingGlobalMS =
          this.m_timelineLoader.GetEndOfRecordingsMS()),
        (this.m_bWasLiveEdge = !0),
        this.TryPlayInitialTimelineVideo());
      let e = Dt(this.m_timelineLoader.GetGameID());
      this.SetClipOffsets(e);
    }
    OnInvalidate(e) {
      if (
        ((this.m_durationMS = this.m_timelineLoader.GetGlobalTimelineEndMS()),
        (this.m_lastRecordingGlobalMS =
          this.m_timelineLoader.GetEndOfRecordingsMS()),
        this.m_bHidePlayer && this.m_timelineLoader.IsActiveTimeline(e))
      )
        this.SetEntriesForLiveEdge();
      else {
        if (this.m_previousHighlightEntry && this.m_nextHighlightEntry) {
          let t = this.m_timelineLoader.GetTimelineMetadataIndex(e),
            n = this.m_timelineLoader.GetTimelineMetadataIndex(
              this.m_previousHighlightEntry.timelineID,
            ),
            r = this.m_timelineLoader.GetTimelineMetadataIndex(
              this.m_nextHighlightEntry.timelineID,
            );
          if (t < n || t > r) return;
        }
        (this.CalculatePreviousHighlightEntry(
          this.m_nGlobalTimelinePlaybackMS,
          this.GetGameRecordingVideo().IsPaused(),
        ),
          this.CalculateNextHighlightEntry(
            this.m_nGlobalTimelinePlaybackMS,
            this.GetGameRecordingVideo().IsPaused(),
          ));
      }
    }
    OnTimelineLoaded(e) {
      (this.m_previousHighlightEntry &&
        this.m_previousHighlightEntry.timelineID === e &&
        this.CalculatePreviousHighlightEntry(
          this.m_nGlobalTimelinePlaybackMS,
          this.GetGameRecordingVideo().IsPaused(),
        ),
        this.m_nextHighlightEntry &&
          this.m_nextHighlightEntry.timelineID === e &&
          this.CalculateNextHighlightEntry(
            this.m_nGlobalTimelinePlaybackMS,
            this.GetGameRecordingVideo().IsPaused(),
          ));
    }
    SetEntriesForLiveEdge() {
      let e = this.GetLiveEdgeMS();
      (this.CalculatePreviousHighlightEntry(e.valMS, !0),
        (this.m_nextHighlightEntry = null));
    }
    CalculatePreviousHighlightEntry(e, t) {
      let n = t ? 1 : Nn * this.m_gameRecordingVideo.GetPlaybackSpeed(),
        r = this.m_timelineLoader.GetClosestPreviousEntryInGlobalTimeline(
          e - n,
        );
      this.m_previousHighlightEntry =
        r.timelineState === `loaded` && !r.entry
          ? this.m_timelineLoader.GetClosestPreviousEntryInGlobalTimeline(e)
          : r;
    }
    CalculateNextHighlightEntry(e, t) {
      let n = this.m_timelineLoader.GetClosestNextEntryInGlobalTimeline(e);
      if (n.timelineState === `loaded` && !n.entry) {
        let n = t ? 1 : Nn * this.m_gameRecordingVideo.GetPlaybackSpeed();
        this.m_nextHighlightEntry =
          this.m_timelineLoader.GetClosestNextEntryInGlobalTimeline(e - n);
      } else this.m_nextHighlightEntry = n;
    }
    GetPreviousHighlightEntry() {
      return this.m_previousHighlightEntry;
    }
    GetNextHighlightEntry() {
      return this.m_nextHighlightEntry;
    }
    GetDisplayHighlightEntry() {
      return this.m_displayHighlightEntry;
    }
    SetDisplayHighlightEntry(e, t) {
      this.m_displayHighlightEntry = { entry: e, duration: t };
    }
    GetPhasePreview() {
      return this.m_phasePreview;
    }
    SetPhasePreview(e) {
      this.m_phasePreview = e;
    }
    GetRelativeTimeForDisplay() {
      return this.m_nRelativeTimeForDisplay;
    }
    ClearRelativeTimeDisplay() {
      this.m_nRelativeTimeForDisplay = void 0;
    }
    GetClipOffsets() {
      return this.m_rgClipOffsets;
    }
    SetClipOffsets(e) {
      if (!this.m_timelineLoader?.BInitialized()) return;
      let t = [];
      (e &&
        e.length &&
        e.forEach((e) => {
          let n = this.m_timelineLoader.GetGlobalOffsetDataForTimeline(
            e.start_timeline_id,
            0,
          );
          if (!n) return;
          let r = n.nGlobalOffsetMS + parseInt(e.start_offset_ms);
          t.push({
            strClipID: e.clip_id,
            nGlobalOffsetMS: r,
            nDurationMS: parseInt(e.duration_ms),
          });
        }),
        (this.m_rgClipOffsets = t));
    }
    GetTotalMS() {
      return this.m_durationMS;
    }
    GetIsActiveTimeline(e) {
      return this.m_timelineLoader.IsActiveTimeline(e);
    }
    BIsVideoElementPaused() {
      return this.m_gameRecordingVideo.IsPaused();
    }
    BInitialized() {
      return this.m_timelineLoader.BInitialized();
    }
    GetHidePlayer() {
      return this.m_bHidePlayer;
    }
    SetHidePlayer(e) {
      (e && (this.m_strRecordingID = null), (this.m_bHidePlayer = e));
    }
    BPlayerInitialized() {
      return this.m_gameRecordingVideo.IsInitialized();
    }
    GetGameRecordingVideo() {
      return this.m_gameRecordingVideo;
    }
    GetGameID() {
      return this.m_timelineLoader.GetGameID();
    }
    GetClipID() {
      return this.m_timelineLoader.GetClipID();
    }
    GetRecordingState() {
      return this.m_eRecordingState;
    }
    SetRecordingState(e) {
      this.m_eRecordingState = e;
    }
    GetLoader() {
      return this.m_timelineLoader;
    }
    SetLoader(e) {
      this.m_timelineLoader != e &&
        (this.m_fnUnregisterLoader && this.m_fnUnregisterLoader(),
        (this.m_timelineLoader = e),
        (this.m_fnUnregisterLoader =
          this.m_timelineLoader.AddEventListener(this)),
        e.BInitialized() && this.OnLoaderInitialized());
    }
    SetGetManifest(e) {
      this.m_fnGetManifest = e;
    }
    GetRecordingID() {
      return this.m_strRecordingID;
    }
    GetRecordingSetting() {
      return this.m_eRecordingSetting;
    }
    SetRecordingSetting(e) {
      this.m_eRecordingSetting = e;
    }
    GetRecordingMode() {
      return this.m_eGameRecordingMode;
    }
    ShouldModeShowClipControls() {
      switch (this.m_eGameRecordingMode) {
        case `Overlay`:
        case `Clips`:
        case `Background`:
          return !0;
        default:
          return !1;
      }
    }
    CanModeAddMarker() {
      switch (this.m_eGameRecordingMode) {
        case `Overlay`:
        case `Clips`:
        case `Background`:
          return !0;
        default:
          return !1;
      }
    }
    GetPlaybackStats() {
      if (!this.m_rgSeekPerf.length) return null;
      let e = this.m_rgSeekPerf.length,
        t = this.m_rgSeekPerf.reduce((e, t) => e + t) / e;
      return {
        nMean: t,
        nStdDev: Math.sqrt(
          this.m_rgSeekPerf.map((e) => (e - t) ** 2).reduce((e, t) => e + t) /
            e,
        ),
        nMax: Math.max(...this.m_rgSeekPerf),
        nMin: Math.min(...this.m_rgSeekPerf),
        nLength: e,
        nLastVal: this.m_rgSeekPerf[e - 1],
      };
    }
    async StartPlaybackForRange() {
      let e =
        this.m_timelineLoader.GetGlobalOffsetDataForTimeline(
          this.m_playbackDefinition.m_strTimelineID,
          0,
        )?.nGlobalOffsetMS || 0;
      e += this.m_playbackDefinition.m_nTimelineStartMS;
      let t;
      if (
        ((t = this.m_playbackDefinition.m_strEntryID
          ? await this.m_timelineLoader.FindRecordingAndOffsetForEntry(
              this.m_playbackDefinition.m_strEntryID,
            )
          : this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
              e,
            )),
        t)
      ) {
        if (this.m_playbackDefinition.m_nLoopDurationMS) {
          let t = e + this.m_playbackDefinition.m_nLoopDurationMS,
            n =
              this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                t,
              );
          this.m_pendingStop = {
            m_strRecordingID: n.strRecordingID,
            m_nOffsetMS: n.nRecordingOffsetMS,
          };
        }
        (this.UpdateGlobalPlayTime(e),
          this.ChangePlaybackRecording(
            t.strRecordingID,
            t.nRecordingOffsetMS / 1e3,
          ));
      }
    }
    TryPlayInitialTimelineVideo() {
      if (this.m_timelineLoader.BInitialized() && !this.m_bHidePlayer) {
        if (this.m_playbackDefinition) this.StartPlaybackForRange();
        else if (this.m_eGameRecordingMode === `Overlay`) {
          let e = this.GetLiveEdgeMS(),
            t = this.m_timelineLoader.GetFirstRecordingOfLastTimelineSession(),
            n = this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
              t,
              0,
              0,
            );
          n && e.valMS < n.nGlobalOffsetMS
            ? (this.UpdateGlobalPlayTime(n.nGlobalOffsetMS),
              this.ChangePlaybackRecording(t, 0))
            : isNaN(e.valMS) || this.SetPlaytimeFromGlobalMS(e, !1, !0);
        } else if (this.m_eGameRecordingMode === `Background`) {
          let e =
            this.m_timelineLoader.GetFirstRecordingOfLastTimelineSession();
          this.SetPlaytimeFromRecordingOffset(e, 0);
        } else {
          let e = this.m_timelineLoader.GetFirstRecording();
          this.SetPlaytimeFromRecordingOffset(e, 0);
        }
      }
    }
    GetTotalSeconds() {
      return Math.floor(
        this.m_timelineLoader.GetGlobalTimelineEndMS().valMS / 1e3,
      );
    }
    GetCurrentPlaybackGlobalMS(e = 0) {
      let t = Math.floor(this.m_gameRecordingVideo.GetPlaybackTime() * 1e3) + e;
      return this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
        this.m_strRecordingID,
        t,
        0,
      );
    }
    GetIsLiveEdge() {
      let e = this.GetGlobalMSPlaytime().valMS || 0;
      return this.m_eGameRecordingMode === `Overlay`
        ? this.m_lastRecordingGlobalMS
          ? this.m_bWasLiveEdge
          : !1
        : this.GetTotalMS().valMS - e < 1;
    }
    GetLiveEdgeBufferWindowStartMS() {
      if (
        this.m_eGameRecordingMode === `Overlay` &&
        this.m_lastRecordingGlobalMS
      ) {
        let e = Math.max(0, this.m_lastRecordingGlobalMS.valMS - An - 1e3);
        return P(e);
      }
      return this.GetTotalMS();
    }
    GetLiveEdgeMS() {
      if (
        this.m_eGameRecordingMode === `Overlay` &&
        this.m_lastRecordingGlobalMS
      ) {
        let e = Math.max(0, this.m_lastRecordingGlobalMS.valMS - Mn);
        return P(e);
      }
      return P(Math.max(0, this.GetTotalMS().valMS - 1));
    }
    GetTimelineAndOffsetRelativeToCurrentPlayback(e = 0) {
      return (
        this.GetCurrentPlaybackGlobalMS(e) ||
        (I(
          `failed to find offset for ${this.m_strRecordingID} at ${Math.floor(this.m_gameRecordingVideo.GetPlaybackTime() * 1e3)} MS`,
        ),
        null)
      );
    }
    SeekDeltaMS(e) {
      let t = this.GetGlobalMSPlaytime();
      if (!this.m_strRecordingID) {
        let n =
          e > 0
            ? this.GetClosestNextRecordingForGlobalMS(t)
            : this.GetClosestPreviousRecordingForGlobalMS(t);
        if (n) {
          let t = e > 0 ? e : Math.max(parseInt(n.duration_ms) + e, 0);
          this.SetPlaytimeFromRecordingOffset(n.recording_id, t, e < 0);
          return;
        }
      }
      let n =
          this.m_eGameRecordingMode === `Overlay`
            ? this.GetLiveEdgeMS().valMS
            : this.GetTotalMS().valMS,
        r = S(t.valMS + e, 0, n - 1e3);
      this.SetPlaytimeFromGlobalMS(P(r));
    }
    ConvertGlobaOffsetToRecordingAndRelativeOffset(e) {
      return this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
        e,
      );
    }
    PlayNextTimelineRecording(e) {
      if (this.m_playbackDefinition?.m_nLoopDurationMS) {
        this.StartPlaybackForRange();
        return;
      }
      let t;
      ((t = this.m_strRecordingID
        ? this.m_timelineLoader.GetNextRecording(this.m_strRecordingID)
        : this.m_timelineLoader.GetClosestNextRecordingInGlobalTimeline(
            P(this.m_nGlobalTimelinePlaybackMS),
          )?.recording_id),
        t
          ? this.SetPlaytimeFromRecordingOffset(t, 0)
          : (this.m_gameRecordingVideo.Pause(),
            e && this.TryPlayInitialTimelineVideo()));
    }
    GetClipsAtGlobalMS(e) {
      return (
        this.m_rgClipOffsets.filter(
          (t) =>
            t.nGlobalOffsetMS <= e.valMS &&
            t.nGlobalOffsetMS + t.nDurationMS >= e.valMS,
        ) || []
      );
    }
    GetClosestPreviousRecordingForGlobalMS(e) {
      return this.m_timelineLoader.GetClosestPreviousRecordingInGlobalTimeline(
        e,
      );
    }
    GetClosestNextRecordingForGlobalMS(e) {
      return this.m_timelineLoader.GetClosestNextRecordingInGlobalTimeline(e);
    }
    SetPlaytimeFromRecordingOffset(e, t, n, r) {
      let i = t;
      n &&
        (i = this.m_timelineLoader.ConvertRecordingTimeMStoPreTrimTimeMS(e, t));
      let a = this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
        e,
        i,
        0,
      );
      a &&
        (this.UpdateGlobalPlayTime(a.nGlobalOffsetMS),
        this.ChangePlaybackRecording(e, i / 1e3, r));
    }
    GetManifestFromRecordingID(e) {
      return this.m_fnGetManifest(e);
    }
    ChangePlaybackRecording(e, t = 0, n) {
      this.m_bHidePlayer = !1;
      let r = this.m_gameRecordingVideo.IsPaused();
      if (
        this.m_strRecordingID === e &&
        this.m_gameRecordingVideo.IsInitialized()
      ) {
        this.m_gameRecordingVideo.Seek(t);
        return;
      }
      if ((this.m_gameRecordingVideo.Stop(), (this.m_strRecordingID = e), !e))
        return;
      if (!this.m_videoRef) {
        this.m_nPendingSeekSec = t;
        return;
      }
      let i = this.GetManifestFromRecordingID(e),
        a = this.m_timelineLoader.BRecordingHasZeroOffset(e)
          ? et.Absolute
          : et.FromAvailableStart;
      (this.m_gameRecordingVideo.Start(this.m_videoRef, i, t, a),
        (n || r) && this.m_gameRecordingVideo.Pause());
    }
    StopPlayback() {
      this.m_gameRecordingVideo.Stop();
    }
    TogglePlayPause() {
      this.m_gameRecordingVideo.IsPaused() ||
      !this.m_gameRecordingVideo.IsInitialized()
        ? (this.m_nGlobalTimelinePlaybackMS >
            (this.m_lastRecordingGlobalMS?.valMS ?? 0) &&
            this.TryPlayInitialTimelineVideo(),
          this.m_gameRecordingVideo.GetTimelineDuration() -
            this.m_gameRecordingVideo.GetPlaybackTime() <
          0.05
            ? this.PlayNextTimelineRecording(!0)
            : this.m_gameRecordingVideo.Play())
        : this.m_gameRecordingVideo.Pause();
    }
    GetGlobalMSPlaytime() {
      return P(this.m_nGlobalTimelinePlaybackMS);
    }
    GetGlobalPlaytimeSec() {
      return this.m_nGlobalTimelinePlaybackSec;
    }
    UpdateGlobalPlayTime(e) {
      if (
        ((this.m_nGlobalTimelinePlaybackMS = e),
        (this.m_nGlobalTimelinePlaybackSec = Math.floor(e / 1e3)),
        this.m_lastRecordingGlobalMS &&
          this.m_lastRecordingGlobalMS.valMS !== null)
      ) {
        let e = this.m_bWasLiveEdge ? jn : An;
        this.m_bWasLiveEdge =
          this.m_lastRecordingGlobalMS.valMS -
            (this.GetGlobalMSPlaytime()?.valMS || 0) <
          e;
      }
    }
    HandleSeekToPreviousRecording(e, t, n) {
      let r = this.GetClosestPreviousRecordingForGlobalMS(e);
      if (r) {
        let e = parseInt(r.duration_ms),
          i = Math.max(e - 5e3, e * 0.75);
        (n || (this.m_nRelativeTimeForDisplay = i / 1e3),
          this.UpdateGlobalPlayTime(
            this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
              r.recording_id,
              i,
              0,
            ).nGlobalOffsetMS,
          ),
          this.ChangePlaybackRecording(r?.recording_id, i / 1e3, t));
      } else
        (n || (this.m_nRelativeTimeForDisplay = 0),
          this.UpdateGlobalPlayTime(0),
          this.ChangePlaybackRecording(this.m_strRecordingID, 0, t));
    }
    HandleSeekToNextRecording(e, t, n) {
      let r = this.GetClosestNextRecordingForGlobalMS(e);
      r
        ? (n || (this.m_nRelativeTimeForDisplay = 0),
          this.UpdateGlobalPlayTime(
            this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
              r.recording_id,
              0,
              0,
            ).nGlobalOffsetMS,
          ),
          this.ChangePlaybackRecording(r?.recording_id, 0, t))
        : (n || (this.m_nRelativeTimeForDisplay = this.GetTotalMS().valMS),
          this.ChangePlaybackRecording(
            this.m_strRecordingID,
            this.GetTotalMS().valMS / 1e3,
            t,
          ));
    }
    SetPlaytimeFromGlobalMS(e, t, n, r) {
      this.m_pendingStop = null;
      let i =
        this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
          e.valMS,
        );
      i
        ? (n || (this.m_nRelativeTimeForDisplay = e.valMS),
          this.UpdateGlobalPlayTime(e.valMS),
          this.ChangePlaybackRecording(
            i?.strRecordingID,
            i?.nRecordingOffsetMS / 1e3,
            t,
          ))
        : r
          ? this.ChangePlaybackRecording(
              i?.strRecordingID,
              i?.nRecordingOffsetMS / 1e3,
              t,
            )
          : e.valMS > this.m_nGlobalTimelinePlaybackMS
            ? this.HandleSeekToNextRecording(e, t, n)
            : this.HandleSeekToPreviousRecording(e, t, n);
    }
    ConvertGlobalOffsetToTimelineRelativeOffset(e) {
      return this.m_timelineLoader.GetTimelineOffsetFromGlobal(e, 0);
    }
    MakeRelativeToTimelineEndIfActive(e, t) {
      return this.m_timelineLoader.MakeRelativeToTimelineEndIfActive(e, t);
    }
    GetTimelineDuration(e) {
      if (!this.m_timelineLoader.BInitialized()) return null;
      let t = this.m_timelineLoader.GetTimelineMetadata(e);
      return t ? parseInt(t.metadata.duration_ms) : null;
    }
    GetTimelineFirstRecordingOffset(e) {
      if (!this.m_timelineLoader.BInitialized()) return null;
      let t = this.m_timelineLoader.GetTimelineMetadata(e);
      if (!t) return null;
      let n = t.metadata.recordings;
      return n.length ? parseInt(n[0].start_offset_ms) : null;
    }
    async AddUserMarkerAtGlobalMS(e, t, n) {
      let r = this.m_timelineLoader.GetTimelineOffsetFromGlobal(e.valMS, 0);
      if (r) {
        let e = this.m_timelineLoader.GetGameID(),
          { fnCreateUserTimelineMarkers: i } = $e(),
          a = this.m_timelineLoader.GetTimelineStartBeforeGlobalZeroMS(
            r.strTimelineID,
          );
        D.ReportTrackedAction(t);
        let o = `steam_marker`,
          s = await i(e, this.GetClipID(), {
            timeline_id: r.strTimelineID,
            entry_id: ``,
            time: `` + Math.floor(r.nTimelineOffsetMS.valMS + a),
            type: 5,
            marker_icon: o,
            marker_priority: 0,
          });
        s.eResult == 1 &&
          (this.m_timelineLoader.AddUserMarker(
            r.strTimelineID,
            Math.floor(r.nTimelineOffsetMS.valMS),
            o,
            s.entry_id,
          ),
          n && n(s.entry_id, r.strTimelineID));
      }
    }
    async RemoveUserMarker(e, t) {
      let { fnRemoveUserTimelineMarker: n } = $e();
      return (await n(
        this.m_timelineLoader.GetGameID(),
        this.GetClipID(),
        e,
        t,
      )) == 1
        ? (this.m_timelineLoader.RemoveUserMarker(e, t), !0)
        : (M(`Failed to delete user marker for timeline ${e} entry ${t}`), !1);
    }
    async UpdateUserMarker(e, t, n, r) {
      let { fnUpdateUserTimelineMarkers: i } = $e(),
        a = this.m_timelineLoader.GetGameID(),
        o = {
          timeline_id: e,
          entry_id: t.id,
          time: t.time,
          type: 5,
          marker_icon: t.icon,
          marker_priority: t.priority,
          range_title: n,
          marker_description: r,
        };
      if ((await i(a, this.GetClipID(), o)) == 1) {
        let i = {
          strIcon: t.icon,
          name: n,
          description: r,
          nTimelineOffsetMS: parseInt(t.time),
        };
        return (this.m_timelineLoader.UpdateUserMarker(e, t.id, i), !0);
      }
      return !1;
    }
    FocusGlobalMS(e) {
      this.FireEvent(`OnFocusGlobalMS`, e);
    }
    SetPlaybackStop(e) {
      let t = this.ConvertGlobaOffsetToRecordingAndRelativeOffset(e.valMS);
      t &&
        (this.m_pendingStop = {
          m_strRecordingID: t.strRecordingID,
          m_nOffsetMS: t.nRecordingOffsetMS,
        });
    }
    ClearPlaybackStop() {
      this.m_pendingStop = null;
    }
    GenerateClipNameFromTimeline(e, t, n, r) {
      return this.m_timelineLoader.GenerateClipNameFromTimeline(e, t, n, r);
    }
    GetRenderGlyph() {
      if (this.m_bGamepadMode) return this.m_fnRenderGlyph;
    }
    SetRenderGlyph(e) {
      this.m_fnRenderGlyph = e;
    }
    GetGamepadMode() {
      return this.m_bGamepadMode;
    }
    SetGamepadMode(e) {
      this.m_bGamepadMode = e;
    }
    GetControlsVisible() {
      return this.m_bControlsVisible;
    }
    SetControlsVisible(e) {
      e != null && (this.m_bControlsVisible = e);
    }
  };
(p([s], B.prototype, `m_bHidePlayer`, void 0),
  p([s], B.prototype, `m_strRecordingID`, void 0),
  p([s], B.prototype, `m_durationMS`, void 0),
  p([s], B.prototype, `m_lastRecordingGlobalMS`, void 0),
  p([s], B.prototype, `m_nGlobalTimelinePlaybackMS`, void 0),
  p([s], B.prototype, `m_nGlobalTimelinePlaybackSec`, void 0),
  p([s], B.prototype, `m_rgSeekPerf`, void 0),
  p([s], B.prototype, `m_eRecordingState`, void 0),
  p([s], B.prototype, `m_eRecordingSetting`, void 0),
  p([s], B.prototype, `m_bGamepadMode`, void 0),
  p([s], B.prototype, `m_bControlsVisible`, void 0),
  p([s], B.prototype, `m_fnRenderGlyph`, void 0),
  p([s], B.prototype, `m_previousHighlightEntry`, void 0),
  p([s], B.prototype, `m_nextHighlightEntry`, void 0),
  p([s], B.prototype, `m_displayHighlightEntry`, void 0),
  p([s], B.prototype, `m_nRelativeTimeForDisplay`, void 0),
  p([s.ref], B.prototype, `m_rgClipOffsets`, void 0),
  p([s.ref], B.prototype, `m_phasePreview`, void 0),
  p([f], B.prototype, `SetVideoElement`, null),
  p([f], B.prototype, `OnInvalidateRecording`, null),
  p([d], B.prototype, `OnLoaderInitialized`, null),
  p([f], B.prototype, `OnInvalidate`, null),
  p([f], B.prototype, `OnTimelineLoaded`, null),
  p([f], B.prototype, `GetLiveEdgeMS`, null),
  p([f], B.prototype, `StopPlayback`, null),
  p([f], B.prototype, `TogglePlayPause`, null),
  p([d], B.prototype, `UpdateGlobalPlayTime`, null));
var Pn = R.createContext({ timelinePlaybackCoordinator: null });
function Fn(e) {
  let {
      children: t,
      mode: n,
      fnGetManifest: r,
      loader: i,
      recordingState: a,
      controlsVisible: o,
      gamepadMode: s,
      renderGlyph: c,
      recordingSetting: l,
      playbackDefinition: u,
      clipSummaries: d,
    } = e,
    [f] = R.useState(() => new B(i, r, n, o, s, c, u, d));
  ((0, R.useEffect)(() => {
    f.SetLoader(i);
  }, [f, i]),
    (0, R.useEffect)(() => {
      f.SetRecordingState(a);
    }, [f, a]),
    (0, R.useEffect)(() => {
      f.SetRecordingSetting(l);
    }, [f, l]),
    (0, R.useEffect)(() => {
      f.SetGetManifest(r);
    }, [f, r]),
    (0, R.useEffect)(() => {
      f.SetControlsVisible(o);
    }, [f, o]),
    (0, R.useEffect)(() => {
      f.SetGamepadMode(s);
    }, [f, s]),
    (0, R.useEffect)(() => {
      f.SetRenderGlyph(c);
    }, [f, c]),
    (0, R.useEffect)(() => {
      f.SetClipOffsets(d);
    }, [f, d]),
    (0, R.useEffect)(() => () => f.dispose(), [f]));
  let p = R.useMemo(() => ({ timelinePlaybackCoordinator: f }), [f]);
  return (0, z.jsx)(Pn.Provider, { value: p, children: t });
}
function V() {
  return (0, R.useContext)(Pn).timelinePlaybackCoordinator;
}
function In() {
  let e = V();
  return [j(() => e?.GetPhasePreview() || null), (t) => e?.SetPhasePreview(t)];
}
var Ln = `-z6QUhW0BuI-`,
  Rn = `EQ4TcbQ23mE-`,
  zn = `_1SMhCEq4AkI-`,
  Bn = `kkFDcE4F2W8-`,
  Vn = `YscTTqT4K6I-`,
  Hn = `T4Y0jki8FF0-`;
function Un(e) {
  let {
    entry: t,
    strMarkerIcon: n,
    onClick: r,
    onMouseEnter: i,
    onMouseLeave: a,
    onContextMenu: o,
    classNames: s,
    style: c,
    faded: l,
    bSelectedMarker: u,
  } = e;
  return (0, z.jsx)(`div`, {
    style: c ?? {},
    className: A(s, { [Rn]: !0, [Ln]: u, [Bn]: l }),
    onClick: (e) => {
      r && r(e);
    },
    onContextMenu: o,
    onMouseEnter: i,
    onMouseLeave: a,
    children: (0, z.jsx)(Wn, { entry: t, strMarkerIcon: n }),
  });
}
function Wn(e) {
  let { entry: t, strMarkerIcon: n } = e,
    r = V().GetGameID();
  return Zt(t)
    ? (0, z.jsx)(Gn, { achievementEntry: t, strGameID: r })
    : Qt(t)
      ? (0, z.jsx)(Jn, {})
      : bn(n)
        ? (0, z.jsx)(Kn, { entry: t, strMarkerIcon: n })
        : (0, z.jsx)(Yn, { strMarkerIcon: n, strGameID: r });
}
function Gn(e) {
  let { achievementEntry: t, strGameID: n } = e,
    r = new vt(n),
    i = xt(r.GetAppID(), t.achievement_name),
    a,
    o;
  if (i) ((a = `white`), (o = (0, z.jsx)(`img`, { src: i.iconURL })));
  else {
    let e = vn();
    ((a = fn(e.color)), (o = e.func({})));
  }
  return (0, z.jsx)(`div`, { className: Vn, style: { color: a }, children: o });
}
function Kn(e) {
  let { entry: t, strMarkerIcon: n } = e,
    r,
    i;
  N(t) ? ((r = _n()), (i = zn)) : (r = gn(n));
  let a = fn(r.color);
  return (0, z.jsx)(Zn, {
    color: a,
    children: (0, z.jsx)(`div`, { className: i, children: r.func({}) }),
  });
}
function qn(e) {
  let { icon: t, className: n } = e;
  return gn(t).func({ className: n });
}
function Jn(e) {
  let t = gn(`steam_invalid`),
    n = fn(t.color);
  return (0, z.jsx)(Zn, {
    color: n,
    children: (0, z.jsx)(`div`, { children: t.func({}) }),
  });
}
function Yn(e) {
  let { strMarkerIcon: t, strGameID: n } = e;
  return (0, z.jsx)(Zn, { children: (0, z.jsx)(Xn, { icon: t, gameID: n }) });
}
function Xn(e) {
  let { icon: t, gameID: n, className: r } = e,
    i = new vt(n).GetAppID(),
    a = Rt(i, t);
  if (bn(t)) return (0, z.jsx)(qn, { ...e });
  if (a === null) return null;
  if (a === void 0) {
    let e = yn();
    return (0, z.jsx)(`div`, { className: r, children: e.func({}) });
  }
  if (`strImageURL` in a)
    return (0, z.jsx)(`img`, {
      src: a.strImageURL,
      alt: ``,
      className: A(r, Hn),
    });
  let o = ``;
  return (
    (o = typeof a == `string` ? a : new XMLSerializer().serializeToString(a)),
    (0, z.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 36 36`,
      className: A(r, Hn),
      children: (0, z.jsx)(`g`, { dangerouslySetInnerHTML: { __html: o } }),
    })
  );
}
function Zn(e) {
  let { children: t, color: n } = e;
  return (0, z.jsx)(`div`, {
    className: void 0,
    children: (0, z.jsx)(`div`, {
      className: Vn,
      style: n ? { color: n } : null,
      children: t,
    }),
  });
}
var Qn = `bDOiLLvSs2Y-`,
  $n = `kcQuGr4J3rc-`,
  er = `j-2U-sbnQJU-`,
  tr = `_6l4s8j-Bcq8-`,
  nr = `_8YeucRtc8oU-`,
  rr = `ZAjnqtDcso0-`,
  ir = `vhGz8D5Y1Bk-`,
  ar = `OMn6m4jRit8-`,
  or = `H-FSa2NK0ko-`,
  sr = `EkzDm2rgmn4-`,
  cr = `_7rO2L4URLVo-`,
  lr = `UMVMer37ORc-`,
  ur = `cyiE161LN-s-`,
  dr = `Vert6EPn2bo-`,
  fr = `-BKlW5DP2XE-`,
  pr = `wvlXf51vGb4-`,
  mr = `S7iF3xbHMfk-`,
  hr = `SPq-vUvAUJ0-`,
  gr = `p3cd5ToZ5HI-`,
  _r = { nBeforeMS: 0, nAfterMS: 12e3 },
  H = R.createContext({
    globalStartMS: void 0,
    globalEndMS: void 0,
    setRange: null,
    setStartMS: null,
    setEndMS: null,
    globalPreviewStartMS: void 0,
    globalPreviewEndMS: void 0,
    setPreviewRange: null,
    clearPreviewSelection: null,
    selectionZoomCount: 0,
    eInitMethod: void 0,
    startMetrics: void 0,
    endMetrics: void 0,
    zoomIntoSelection: null,
    zoomOutSelection: null,
  });
function vr() {
  let e = (0, R.useContext)(H);
  return { nGlobalStartMS: e.globalStartMS, nGlobalEndMS: e.globalEndMS };
}
function yr() {
  return (0, R.useContext)(H).globalStartMS;
}
function br() {
  return (0, R.useContext)(H).globalEndMS;
}
function xr() {
  return (0, R.useContext)(H).setRange;
}
function Sr() {
  return (0, R.useContext)(H).setStartMS;
}
function Cr() {
  return (0, R.useContext)(H).setEndMS;
}
function wr() {
  let e = (0, R.useContext)(H);
  return {
    selectedMarker: e.selectedMarker,
    setSelectedMarker: e.setSelectedMarker,
  };
}
function Tr() {
  let e = (0, R.useContext)(H);
  return !isNaN(e.globalStartMS?.valMS) && !isNaN(e.globalEndMS?.valMS);
}
function Er() {
  return (0, R.useContext)(H).clearSelection;
}
function Dr() {
  let e = xr(),
    t = Sr(),
    n = Cr(),
    r = vr(),
    i = kr(),
    a = Or();
  return R.useCallback(
    (o, s, c, l) => {
      if (c === void 0 && l === void 0) return;
      let u = r.nGlobalStartMS !== void 0 || r.nGlobalEndMS !== void 0,
        d = c || r.nGlobalStartMS,
        f = l || r.nGlobalEndMS;
      d &&
        f &&
        f.valMS <= d.valMS &&
        (c === void 0 ? (d = void 0) : (f = void 0));
      let p = _r.nBeforeMS + _r.nAfterMS;
      (d === void 0 && (d = P(f.valMS - p)),
        f === void 0 && (f = P(d.valMS + p)));
      let m = d != r.nGlobalStartMS,
        h = f != r.nGlobalEndMS;
      (m && h ? e(s, d, f) : m ? t(s, d) : h && n(s, f),
        !u && m && h && i == 0 && a());
    },
    [r, e, t, n, i, a],
  );
}
function Or() {
  return (0, R.useContext)(H).zoomIntoSelection;
}
function kr() {
  return (0, R.useContext)(H).selectionZoomCount;
}
function Ar(e) {
  let t = (0, R.useContext)(H),
    n = t.selectionZoomCount,
    r = t.globalStartMS,
    i = t.globalEndMS,
    a = (0, R.useRef)(n),
    o = (0, R.useRef)(null);
  ((o.current = e),
    (0, R.useEffect)(() => {
      if (!o.current) return;
      let e = !isNaN(r?.valMS) && !isNaN(i?.valMS);
      (a.current == n && e) ||
        ((a.current = n), e && n ? o.current(r, i) : o.current(null, null));
    }, [n, r, i, a, o]));
}
var jr = 5e3,
  Mr = 3e5,
  Nr = 1e3,
  Pr = 10,
  Fr = 10,
  U = (function (e) {
    return (
      (e.Playhead = `Playhead`),
      (e.RangeLeft = `RangeLeft`),
      (e.RangeRight = `RangeRight`),
      (e.Highlight = `Highlight`),
      e
    );
  })({}),
  Ir = class {
    m_fnUnregisterFromLoader;
    m_loader;
    m_maskBounds = [-1, -1];
    m_eventTarget;
    constructor(e, t) {
      (g(this), (this.m_loader = e), (this.m_eventTarget = t));
    }
    Init() {
      ((this.m_fnUnregisterFromLoader = this.m_loader.AddEventListener(this)),
        this.m_loader.BInitialized() && this.OnLoaderInitialized());
    }
    GetGameID() {
      return this.m_loader.GetGameID();
    }
    BInitialized() {
      return this.m_loader.BInitialized();
    }
    IsActiveRecording(e) {
      return this.m_loader.IsActiveRecording(e);
    }
    IsActiveTimeline(e) {
      return this.m_loader.IsActiveTimeline(e);
    }
    GetStateDescriptionAtGlobalMS(e) {
      return this.m_loader.GetStateDescriptionAtGlobalMS(P(e));
    }
    GetTimelineOffsetFromGlobal(e, t) {
      return this.m_loader.GetTimelineOffsetFromGlobal(e, t);
    }
    GetTimelineStartTime(e) {
      let t = this.m_loader.GetTimelineMetadata(e);
      return t?.metadata ? t.metadata.date_recorded : null;
    }
    BEmpty() {
      return !1;
    }
    GetTimelines() {
      return this.m_loader.GetTimelines();
    }
    GetGlobalTimelineEndMS() {
      return this.m_loader.GetGlobalTimelineEndMS();
    }
    GetTimelineDataOrStartLoad(e) {
      return this.m_loader.GetTimelineDataOrStartLoad(e);
    }
    GetTimelineStartBeforeGlobalZeroMS(e) {
      return this.m_loader.GetTimelineStartBeforeGlobalZeroMS(e);
    }
    MakeRelativeToTimelineEndIfActive(e, t) {
      return this.m_loader.MakeRelativeToTimelineEndIfActive(e, t);
    }
    FindRangeEventsAtGlobalMS(e) {
      return this.m_loader.FindRangeEventsAtGlobalMS(e);
    }
    Close() {
      ((this.m_fnUnregisterFromLoader &&=
        (this.m_fnUnregisterFromLoader(), void 0)),
        (this.m_loader = null));
    }
    OnLoaderInitialized() {
      this.m_eventTarget.OnLoaderInitialized &&
        this.m_eventTarget.OnLoaderInitialized();
    }
    OnInvalidate(e) {
      this.m_eventTarget.OnInvalidate && this.m_eventTarget.OnInvalidate(e);
    }
    OnTimelineLoaded(e) {
      this.m_eventTarget.OnTimelineLoaded &&
        this.m_eventTarget.OnTimelineLoaded(e);
    }
    OnInvalidateRecording(e, t) {
      this.m_eventTarget.OnInvalidateRecording &&
        this.m_eventTarget.OnInvalidateRecording(e, t);
    }
  },
  W = class {
    m_playbackCoordinator;
    m_fnUnregisterPlaybackCoordinator;
    m_refTimelineParentCtn;
    m_timelineMask;
    m_durationMS = 0;
    m_mapTimelineClips = s.map([], { deep: !1 });
    m_scrollLeftPX = 0;
    m_scrollWindowWidth = null;
    m_scrollWindowOffsetPX = null;
    m_bAutoScrollPaused = !1;
    m_autoScrollPauseTimeout = null;
    m_msVisible = 0;
    m_bCustomZoom = !1;
    m_bUserClipping = !1;
    m_prevLeftAndVisible = null;
    m_rgTimelineOffsets = [];
    m_mapTimelineEntries = s.map([], { deep: !1 });
    m_bInitialized = !1;
    m_eThumbnailComponent = null;
    m_nGlobalRelativeThumbnailPositionPX = void 0;
    m_thumbnailHighlightEntry = void 0;
    m_phaseToHighlight = void 0;
    constructor(e, t, n) {
      (g(this),
        (this.m_playbackCoordinator = t),
        (this.m_timelineMask = new Ir(e, this)),
        (this.m_fnUnregisterPlaybackCoordinator = t.AddEventListener(this)),
        this.UpdateClipSummaries(n),
        this.m_timelineMask.Init());
    }
    BInitialized() {
      return this.m_bInitialized;
    }
    OnLoaderInitialized() {
      ((this.m_durationMS = this.m_timelineMask.GetGlobalTimelineEndMS().valMS),
        this.OnInvalidate(),
        this.InitDefaultsIfReady());
    }
    InitDefaultsIfReady() {
      !this.m_bInitialized &&
        this.m_scrollWindowWidth &&
        this.m_timelineMask.BInitialized() &&
        ((this.m_bInitialized = !0),
        (this.m_msVisible = this.ComputeDefaultMSVisible()),
        this.ScrollToCenteredGlobalMS(
          this.m_playbackCoordinator.GetGlobalMSPlaytime().valMS,
        ));
    }
    OnTimelineLoaded(e) {
      (F(`OnTimelineLoaded`, e),
        this.FindTimelineOffsets(e)
          ? this.ComputeEntriesForTimeline(e)
          : M(`Missing timeline offset metadata for`, e));
    }
    OnInvalidate(e) {
      F(`on invalidate`, e);
      let t = this.m_timelineMask.GetGlobalTimelineEndMS().valMS,
        n = t - this.m_durationMS,
        r = this.m_durationMS <= 0,
        i;
      this.m_durationMS = t;
      let a = this.IsTempZoom() || this.m_bCustomZoom || this.m_bUserClipping;
      if (n > 0 && r) this.m_msVisible = this.ComputeDefaultMSVisible();
      else if (n > 0 && !this.m_bAutoScrollPaused && !a)
        this.m_msVisible = this.ComputeDefaultMSVisible();
      else if (n < 0 && this.m_msVisible > t)
        ((this.m_msVisible = this.ComputeDefaultMSVisible()),
          this.ScrollToOffset(0));
      else if (n < 0) {
        let e = this.FindClosestTimelineStartForOffsetPX(this.m_scrollLeftPX);
        if (e) {
          let t = this.ConvertGlobalMSToGlobalPXOffset(e.globalOffsetMS),
            n = this.ConvertDeltaPXToDurationMS(this.m_scrollLeftPX - t);
          i = { strTimelineID: e.timelineID, nTimelineOffsetMS: n };
        }
      }
      let o = this.m_timelineMask.GetTimelines(),
        s = 0;
      if (this.BInitialized() && e) {
        let t = o.findIndex((t) => t.metadata.timeline_id === e);
        t >= 0 && (s = t);
      }
      if (
        ((this.m_rgTimelineOffsets = o.map((e, t) =>
          t >= s ? this.ComputeTimelineOffset(e) : this.m_rgTimelineOffsets[t],
        )),
        i)
      ) {
        let e = this.FindTimelineOffsets(i.strTimelineID);
        if (e) {
          let t = e.globalOffsetMS + i.nTimelineOffsetMS,
            n = S(
              this.ConvertGlobalMSToGlobalPXOffset(t),
              0,
              this.GetMaxScrollLeftPX(),
            );
          this.ScrollToOffset(n);
        }
      }
      o.forEach((e, t) => {
        t >= s && this.ComputeEntriesForTimeline(e.metadata.timeline_id);
      });
    }
    OnFocusGlobalMS(e) {
      this.ScrollToCenteredGlobalMS(e.valMS);
    }
    GetGameID() {
      return this.m_timelineMask.GetGameID();
    }
    SetTimelineParentCtnRef(e) {
      this.m_refTimelineParentCtn = e;
    }
    GetTimelineParentCtnRef() {
      return this.m_refTimelineParentCtn;
    }
    SetThumbnailComponent(e) {
      ((this.m_eThumbnailComponent = e),
        e || (this.m_nGlobalRelativeThumbnailPositionPX = void 0),
        e !== `Highlight` && (this.m_thumbnailHighlightEntry = null));
    }
    GetThumbnailComponent() {
      return this.m_eThumbnailComponent;
    }
    SetThumbnailPosition(e) {
      this.m_nGlobalRelativeThumbnailPositionPX = e;
    }
    GetThumbnailPosition() {
      return this.m_nGlobalRelativeThumbnailPositionPX;
    }
    SetThumbnailEntry(e) {
      this.m_thumbnailHighlightEntry = e;
    }
    GetThumbnailEntry() {
      return this.m_eThumbnailComponent === `Highlight`
        ? this.m_thumbnailHighlightEntry
        : null;
    }
    Close() {
      (this.m_timelineMask.Close(),
        (this.m_timelineMask = null),
        this.m_fnUnregisterPlaybackCoordinator &&
          this.m_fnUnregisterPlaybackCoordinator(),
        (this.m_fnUnregisterPlaybackCoordinator = null),
        (this.m_bInitialized = !1),
        this.m_autoScrollPauseTimeout && this.ClearAutoScrollPauseTimeout());
    }
    ComputeDefaultMSVisible() {
      let e = this.GetTimelineMarginWidth() * 2,
        t = Fr * (this.m_rgTimelineOffsets.length - 1),
        n = Math.max(1, this.m_scrollWindowWidth - t - e),
        r = Math.ceil(
          ((e + t) * this.m_durationMS) / (this.m_scrollWindowWidth - (e + t)),
        ),
        i = Nr * n;
      return Math.min(this.m_durationMS + r, i);
    }
    ZoomIn(e, t) {
      let n = 1e3;
      if (this.m_msVisible <= n) return;
      let r = this.m_msVisible - this.m_msVisible / 1.1 ** e,
        i = r * t,
        a = this.ConvertPXOffsetToGlobalMS(this.m_scrollLeftPX),
        o = Math.max(this.m_msVisible - r, n);
      ((this.m_msVisible = o),
        (this.m_bCustomZoom = !0),
        this.ScrollToOffset(this.ConvertGlobalMSToGlobalPXOffset(a + i)));
    }
    ZoomOut(e, t) {
      let n =
        this.m_durationMS +
        this.ConvertDeltaPXToDurationMS(
          Fr * (this.m_rgTimelineOffsets.length - 1) +
            this.GetTimelineMarginWidth() * 2,
        );
      if (this.m_msVisible >= n) return;
      let r = this.m_msVisible * 1.1 ** e - this.m_msVisible,
        i = r * t,
        a = this.ConvertPXOffsetToGlobalMS(this.m_scrollLeftPX),
        o = Math.min(this.m_msVisible + r, n);
      ((this.m_msVisible = o),
        (this.m_bCustomZoom = !0),
        this.ScrollToOffset(this.ConvertGlobalMSToGlobalPXOffset(a - i)));
    }
    IsTempZoom() {
      return !!this.m_prevLeftAndVisible;
    }
    SetTempZoomScale(e, t) {
      let n = Math.max(e, 0),
        r = Math.min(t, this.m_durationMS);
      ((this.m_prevLeftAndVisible = [this.m_scrollLeftPX, this.m_msVisible]),
        (this.m_msVisible = r - n));
      let i = this.ConvertGlobalMSToGlobalPXOffset(n);
      this.ScrollToOffset(i);
    }
    ClearTempZoomScale() {
      if (!this.m_prevLeftAndVisible) return;
      let [e, t] = this.m_prevLeftAndVisible;
      ((this.m_prevLeftAndVisible = null),
        this.ScrollToOffset(e),
        (this.m_msVisible = t));
    }
    SetUserIsClipping(e) {
      this.m_bUserClipping = e;
    }
    GetTimelineGapWidth() {
      return Fr;
    }
    GetTimelineMarginWidth() {
      return 12;
    }
    UpdateClipSummaries(e = []) {
      (this.m_mapTimelineClips.clear(),
        e.forEach((e) => {
          let t = e.start_timeline_id;
          this.m_mapTimelineClips.has(t) || this.m_mapTimelineClips.set(t, []);
          let n = {
            clipID: e.clip_id,
            msDuration: parseInt(e.duration_ms),
            msTimelineOffset: parseInt(e.start_offset_ms),
            timelineID: t,
          };
          this.m_mapTimelineClips.get(t).push(n);
        }));
    }
    BEmpty() {
      return this.m_timelineMask.BEmpty();
    }
    ComputeTimelineOffset(e) {
      let t = isNaN(parseInt(e.metadata.duration_ms))
          ? 0
          : parseInt(e.metadata.duration_ms),
        n = e.metadata.recordings.map((e) => {
          let n = parseInt(e.start_offset_ms),
            r = parseInt(e.duration_ms);
          return (
            isNaN(r) &&
              this.m_timelineMask.IsActiveRecording(e.recording_id) &&
              (r = t - n),
            {
              recordingID: e.recording_id,
              timelineOffsetMS: n,
              nDurationMS: r,
              bIsActive: this.m_timelineMask.IsActiveRecording(e.recording_id),
              recordingType: e.recording_type,
            }
          );
        }),
        r = (e.metadata.phases || []).map((e) => ({
          timelineOffsetMS: parseInt(e.background_timeline_offset),
          nDurationMS: parseInt(e.duration_ms),
          phase: e,
        }));
      return {
        timelineID: e.metadata.timeline_id,
        globalOffsetMS: e.nGlobalOffsetMS.valMS,
        nDurationMS: t,
        recordingOffsets: n,
        phaseOffsets: r,
      };
    }
    GetCurrentZoomScale() {
      return this.m_msVisible / (this.m_scrollWindowWidth || 1) || 1;
    }
    GetClipsForTimeline(e) {
      return this.m_mapTimelineClips.get(e) || [];
    }
    ComputeEntriesForTimeline(e) {
      let t = this.m_timelineMask.GetTimelineDataOrStartLoad(e);
      t &&
        t.m_strState == `loaded` &&
        this.m_mapTimelineEntries.set(e, {
          rgGameModes: t.m_rgGameModeChanges,
          rgHighlights: t.m_rgEntries,
        });
    }
    GetVisibleTimelineGameModes(e) {
      return this.m_mapTimelineEntries.get(e)?.rgGameModes;
    }
    GetVisibleTimelineHighlights(e) {
      return this.m_mapTimelineEntries.get(e)?.rgHighlights;
    }
    GetStateDescriptionAtGlobalMS(e) {
      return this.m_timelineMask.GetStateDescriptionAtGlobalMS(e);
    }
    FindRangeEventsAtGlobalMS(e) {
      return this.m_timelineMask.FindRangeEventsAtGlobalMS(e);
    }
    GetTimelineOffsetMS(e) {
      return this.m_timelineMask.GetTimelineStartBeforeGlobalZeroMS(e);
    }
    ScrollToCenteredGlobalMS(e) {
      let t = this.ConvertGlobalMSToGlobalPXOffset(e);
      this.ScrollToOffsetCentered(t);
    }
    ScrollToOffset(e) {
      this.m_scrollLeftPX = S(e, 0, this.GetMaxScrollLeftPX());
    }
    ScrollToOffsetCentered(e) {
      let t = Math.max(0, e - 0.5 * this.m_scrollWindowWidth);
      this.ScrollToOffset(t);
    }
    ScrollBy(e) {
      let t = this.m_scrollLeftPX + e;
      this.ScrollToOffset(t);
    }
    GetAutoScrollPaused() {
      return this.m_bAutoScrollPaused;
    }
    SetAutoScrollPaused(e) {
      (this.ClearAutoScrollPauseTimeout(), (this.m_bAutoScrollPaused = e));
    }
    GetAutoScrollPauseTimeout() {
      return this.m_autoScrollPauseTimeout;
    }
    ClearAutoScrollPauseTimeout() {
      (this.m_autoScrollPauseTimeout &&
        clearTimeout(this.m_autoScrollPauseTimeout),
        (this.m_autoScrollPauseTimeout = null));
    }
    SetAutoScrollPauseTimeout(e = jr) {
      (this.ClearAutoScrollPauseTimeout(),
        (this.m_autoScrollPauseTimeout = window.setTimeout(() => {
          this.SetAutoScrollPaused(!1);
        }, e)));
    }
    ScrollToEnd() {
      this.ScrollToOffset(this.GetMaxScrollLeftPX());
    }
    SetScrollWindowWidth(e) {
      ((this.m_scrollWindowWidth = e),
        this.m_timelineMask.BInitialized() &&
          (this.ScrollToOffset(this.m_scrollLeftPX),
          this.InitDefaultsIfReady()));
    }
    SetScrollWindowOffset(e) {
      this.m_scrollWindowOffsetPX = e;
    }
    GetScrollWindowOffset() {
      return this.m_scrollWindowOffsetPX;
    }
    GetScrollableWidthPX() {
      if (!this.m_rgTimelineOffsets?.length) return 0;
      let e = this.m_rgTimelineOffsets.length - 1,
        t = this.m_rgTimelineOffsets[e];
      return (
        e * Fr +
        this.ConvertDurationMSToDeltaPX(t.globalOffsetMS + t.nDurationMS)
      );
    }
    GetOverscanWidth() {
      return (this.GetScrollWindowWidth() * Pr) / 100;
    }
    GetScrollWindowWidth() {
      return this.m_scrollWindowWidth;
    }
    GetMaxScrollLeftPX() {
      return Math.max(
        0,
        this.GetScrollableWidthPX() -
          this.GetScrollWindowWidth() +
          2 * this.GetTimelineMarginWidth(),
      );
    }
    BReachedMaxScroll() {
      return (
        Math.ceil(this.m_scrollLeftPX) === Math.ceil(this.GetMaxScrollLeftPX())
      );
    }
    BReachedMinScroll() {
      return this.m_scrollLeftPX === 0;
    }
    GetVisualWindowStartPX() {
      return this.m_scrollLeftPX;
    }
    GetVisualWidth() {
      return Math.min(
        this.m_scrollWindowWidth,
        this.GetScrollableWidthPX() + 2 * this.GetTimelineMarginWidth(),
      );
    }
    GetVirtualWindowStartPX() {
      return Math.max(this.m_scrollLeftPX - this.GetOverscanWidth(), 0);
    }
    GetVirtualWindowWidthPX() {
      let e = S(this.m_scrollLeftPX, 0, this.GetOverscanWidth()),
        t = Math.min(
          this.GetScrollableWidthPX() -
            (this.m_scrollLeftPX + this.m_scrollWindowWidth),
          this.GetOverscanWidth(),
        );
      return e + this.m_scrollWindowWidth + t;
    }
    GetVirtualWindowEndPX() {
      return this.GetVirtualWindowStartPX() + this.GetVirtualWindowWidthPX();
    }
    GetVisibleTimelines() {
      let e =
          this.FindIndexOfClosestTimelineEndForOffsetPX(
            this.GetVirtualWindowStartPX(),
          ) + 1,
        t = this.FindIndexOfClosestTimelineStartForOffsetPX(
          this.GetVirtualWindowEndPX(),
        );
      return this.m_rgTimelineOffsets.slice(e, t + 1).map((e) => {
        let t = Math.max(
            e.globalOffsetMS,
            this.ConvertPXOffsetToGlobalMS(this.GetVirtualWindowStartPX()),
          ),
          n = Math.min(
            e.nDurationMS - (t - e.globalOffsetMS),
            this.ConvertDeltaPXToDurationMS(this.GetVirtualWindowWidthPX()),
          ),
          r = this.ConvertGlobalMSToGlobalPXOffset(t),
          i = this.ConvertDurationMSToDeltaPX(n),
          a = this.ConvertGlobalMSToGlobalPXOffset(e.globalOffsetMS),
          o = this.ConvertDurationMSToDeltaPX(e.nDurationMS);
        return {
          ...e,
          pxStart: a,
          pxDuration: o,
          msVisibleStart: t,
          msVisibleDuration: n,
          pxVisibleStart: r,
          pxVisibleDuration: i,
        };
      });
    }
    GetVisibleRecordings() {
      let e = [];
      return (
        this.GetVisibleTimelines().forEach((t) => {
          t.recordingOffsets.forEach((n) => {
            let r = t.pxStart + this.GetPXForDuration(n.timelineOffsetMS),
              i = r + this.GetPXForDuration(n.nDurationMS);
            i < this.GetVirtualWindowStartPX() ||
              r > this.GetVirtualWindowEndPX() ||
              e.push({
                recordingID: n.recordingID,
                nStartPX: r,
                nEndPX: i,
                bIsActive: n.bIsActive,
                recordingType: n.recordingType,
              });
          });
        }),
        e
      );
    }
    GetVisibleClips() {
      let e = [];
      return (
        this.GetVisibleTimelines().forEach((t) => {
          let n = this.ConvertGlobalMSToGlobalPXOffset(t.globalOffsetMS);
          this.GetClipsForTimeline(t.timelineID).forEach((r) => {
            let i = n + this.GetPXForDuration(r.msTimelineOffset),
              a = Math.min(
                this.GetVirtualWindowEndPX(),
                this.ConvertGlobalMSToGlobalPXOffset(
                  t.globalOffsetMS + r.msTimelineOffset + r.msDuration,
                ),
              );
            a < this.GetVirtualWindowStartPX() ||
              i > this.GetVirtualWindowEndPX() ||
              e.push({ clipID: r.clipID, pxClipStart: i, pxClipEnd: a });
          });
        }),
        e
      );
    }
    GetPXForDuration(e) {
      return e / this.GetCurrentZoomScale();
    }
    GetVisibleTimelinesInWindow() {
      let e =
          this.FindIndexOfClosestTimelineEndForOffsetPX(this.m_scrollLeftPX) +
          1,
        t = this.FindIndexOfClosestTimelineStartForOffsetPX(
          this.m_scrollLeftPX + this.m_scrollWindowWidth,
        );
      return this.m_rgTimelineOffsets.slice(e, t + 1);
    }
    GetVisibleWindowRelativeTimelines() {
      return this.GetVisibleTimelinesInWindow().map((e) => {
        let t = this.m_scrollLeftPX,
          n = this.GetVirtualWindowEndPX() - this.GetOverscanWidth(),
          r = this.ConvertGlobalMSToGlobalPXOffset(e.globalOffsetMS),
          i = r + this.ConvertDurationMSToDeltaPX(e.nDurationMS),
          a = Math.max(r, t),
          o = Math.min(i, n);
        return {
          timelineID: e.timelineID,
          nVisibleStartPX: a,
          nEndPX: o,
          nTimelineStartMS: this.ConvertPXToTimelineRelativeMS(t),
          nGlobalStartMS: this.ConvertPXOffsetToGlobalMS(t),
        };
      });
    }
    ConvertPXToTimelineRelativeMS(e, t = `start`) {
      let n = this.ConvertPXOffsetToGlobalMS(e),
        r = this.m_timelineMask.GetTimelineOffsetFromGlobal(n, 0);
      return t == `end-if-active` &&
        r.strTimelineID &&
        this.m_timelineMask.IsActiveTimeline(r.strTimelineID)
        ? this.m_timelineMask.MakeRelativeToTimelineEndIfActive(
            r.strTimelineID,
            r.nTimelineOffsetMS.valMS,
          )
        : r.nTimelineOffsetMS.valMS;
    }
    GetTimeRecorded(e) {
      return this.m_timelineMask.GetTimelineStartTime(e);
    }
    ConvertGlobalMSToClipOrNone(e) {
      if (!this.m_timelineMask) return null;
      let t = this.m_timelineMask.GetTimelineOffsetFromGlobal(e, 0);
      if (!t) return null;
      let { nTimelineOffsetMS: n, strTimelineID: r } = t;
      return r && this.m_mapTimelineClips.has(r)
        ? this.m_mapTimelineClips
            .get(r)
            .find(
              (e) =>
                e.msTimelineOffset <= n.valMS &&
                e.msTimelineOffset + e.msDuration >= n.valMS,
            )
        : null;
    }
    ConvertGlobalMSToScrollWindowPXOffset(e) {
      return this.ConvertGlobalMSToGlobalPXOffset(e) - this.m_scrollLeftPX;
    }
    ConvertGlobalMSToGlobalPXOffset(e, t = -1) {
      t < 0 && (t = c(this.m_rgTimelineOffsets, (t) => e - t.globalOffsetMS));
      let n = t * Fr;
      return this.ConvertDurationMSToDeltaPX(e) + n;
    }
    ConvertPXOffsetToGlobalMS(e, t = !0) {
      if (this.BPositionInGap(e)) {
        if (!t) return null;
        let n = this.FindClosestTimelineEndForOffsetPX(e);
        return n ? n.globalOffsetMS + n.nDurationMS : 0;
      }
      let n = this.FindClosestTimelineStartForOffsetPX(e);
      if (!n) return null;
      let r = this.ConvertGlobalMSToGlobalPXOffset(n.globalOffsetMS),
        i = this.ConvertDeltaPXToDurationMS(e - r);
      return n.globalOffsetMS + i;
    }
    FindClosestTimelineEndForOffsetPX(e) {
      let t = this.FindIndexOfClosestTimelineEndForOffsetPX(e);
      return t < 0 ? null : this.m_rgTimelineOffsets[t];
    }
    FindClosestTimelineStartForOffsetPX(e) {
      let t = this.FindIndexOfClosestTimelineStartForOffsetPX(e);
      return t < 0 ? null : this.m_rgTimelineOffsets[t];
    }
    FindIndexOfClosestTimelineEndForOffsetPX(e) {
      return c(
        this.m_rgTimelineOffsets,
        (t) =>
          e -
          (this.ConvertGlobalMSToGlobalPXOffset(t.globalOffsetMS) +
            this.ConvertDurationMSToDeltaPX(t.nDurationMS)),
      );
    }
    FindIndexOfClosestTimelineStartForOffsetPX(e) {
      return c(
        this.m_rgTimelineOffsets,
        (t) => e - this.ConvertGlobalMSToGlobalPXOffset(t.globalOffsetMS),
      );
    }
    FindTimelineOffsets(e) {
      return this.m_rgTimelineOffsets.find((t) => t.timelineID === e);
    }
    BPositionInGap(e) {
      let t = this.FindIndexOfClosestTimelineEndForOffsetPX(e);
      if (t < 0) return !1;
      let n = t + 1;
      if (n >= this.m_rgTimelineOffsets.length) return !1;
      let r = this.m_rgTimelineOffsets[t],
        i = this.m_rgTimelineOffsets[n],
        a = this.ConvertGlobalMSToGlobalPXOffset(r.globalOffsetMS);
      return (
        e < this.ConvertGlobalMSToGlobalPXOffset(i.globalOffsetMS) && e !== a
      );
    }
    ConvertDurationMSToDeltaPX(e) {
      return e / this.GetCurrentZoomScale();
    }
    ConvertDeltaPXToDurationMS(e) {
      return e * this.GetCurrentZoomScale();
    }
    SetPhaseToHighlight(e) {
      this.m_phaseToHighlight = e;
    }
    GetPhaseToHighlight() {
      return this.m_phaseToHighlight;
    }
  };
(p([s], W.prototype, `m_durationMS`, void 0),
  p([s], W.prototype, `m_scrollLeftPX`, void 0),
  p([s], W.prototype, `m_scrollWindowWidth`, void 0),
  p([s], W.prototype, `m_scrollWindowOffsetPX`, void 0),
  p([s], W.prototype, `m_bAutoScrollPaused`, void 0),
  p([s], W.prototype, `m_autoScrollPauseTimeout`, void 0),
  p([s], W.prototype, `m_msVisible`, void 0),
  p([s.ref], W.prototype, `m_rgTimelineOffsets`, void 0),
  p([s], W.prototype, `m_bInitialized`, void 0),
  p([s], W.prototype, `m_eThumbnailComponent`, void 0),
  p([s], W.prototype, `m_nGlobalRelativeThumbnailPositionPX`, void 0),
  p([s], W.prototype, `m_thumbnailHighlightEntry`, void 0),
  p([s], W.prototype, `m_phaseToHighlight`, void 0),
  p([d], W.prototype, `OnLoaderInitialized`, null),
  p([d], W.prototype, `InitDefaultsIfReady`, null),
  p([d], W.prototype, `OnInvalidate`, null),
  p([d], W.prototype, `ZoomIn`, null),
  p([d], W.prototype, `ZoomOut`, null),
  p([d], W.prototype, `SetTempZoomScale`, null),
  p([d], W.prototype, `ClearTempZoomScale`, null),
  p([d], W.prototype, `UpdateClipSummaries`, null),
  p([f], W.prototype, `BReachedMaxScroll`, null),
  p([f], W.prototype, `BReachedMinScroll`, null));
var Lr = R.createContext(null);
function Rr(e) {
  let {
      loader: t,
      playbackCoordinator: n,
      children: r,
      clipSummaries: i,
      refTimelineParentCtn: a,
    } = e,
    [o, s] = (0, R.useState)(null);
  return (
    (0, R.useEffect)(() => {
      if (!t) return;
      let e = new W(t, n, i);
      return (s(e), () => e.Close());
    }, [t]),
    (0, R.useEffect)(() => {
      o && o.UpdateClipSummaries(i);
    }, [o, i]),
    (0, R.useEffect)(() => {
      o && a && o.SetTimelineParentCtnRef(a.current);
    }, [o, a]),
    Br(o),
    zr(o),
    o ? (0, z.jsx)(Lr.Provider, { value: o, children: r }) : null
  );
}
function zr(e) {
  Ar(
    R.useCallback(
      (t, n) => {
        if (!e) return;
        if (!t || !n) {
          e.ClearTempZoomScale();
          return;
        }
        let r = Math.floor((n.valMS - t.valMS) * 0.1),
          i = n.valMS - t.valMS;
        i < Mr * 0.9 && (r = Math.floor((Mr - i) / 2));
        let a = t.valMS - r,
          o = n.valMS + r;
        e.SetTempZoomScale(a, o);
      },
      [e],
    ),
  );
}
function Br(e) {
  let t = Tr();
  (0, R.useEffect)(() => {
    e && e.SetUserIsClipping(t);
  }, [e, t]);
}
function G() {
  return (0, R.useContext)(Lr);
}
var Vr = `BAvp4rqoXrI-`,
  Hr = `MvaB420caso-`,
  Ur = `KHooprC7Eh8-`,
  Wr = `S49EhbfI3MU-`,
  Gr = `_5URRAlchke4-`,
  Kr = 20,
  qr = [1e3, 5e3, 3e4, 6e4, 15e4, 3e5, 9e5, 18e5],
  Jr = R.memo(function (e) {
    let t = G(),
      n = j(() => t.GetVisibleTimelines());
    return (0, z.jsx)(z.Fragment, {
      children: n.map((e) =>
        (0, z.jsx)(
          Yr,
          {
            msVisibleStart: e.msVisibleStart,
            pxVisibleDuration: e.pxVisibleDuration,
            pxVisibleStart: e.pxVisibleStart,
            msTimelineStart: e.globalOffsetMS,
          },
          e.timelineID,
        ),
      ),
    });
  }),
  Yr = R.memo(function (e) {
    let {
        msVisibleStart: t,
        msTimelineStart: n,
        pxVisibleDuration: r,
        pxVisibleStart: i,
      } = e,
      { msTickSpacing: a, pxTickSpacing: o } = Zr(),
      s = G(),
      c = Math.ceil((t - n) / a),
      l = n + c * a,
      u = s.ConvertGlobalMSToGlobalPXOffset(l),
      d = (0, R.useMemo)(() => {
        let e = Math.ceil(r / o),
          t = [];
        for (let n = 0; n < e; n++) {
          let e = l + a * n,
            r = u + n * o,
            i = `${e}`;
          t.push({ key: i, offsetPX: r, iTimelineRelativeTick: c + n });
        }
        return t;
      }, [r, o, l, a, u, c]);
    return d
      ? (0, z.jsxs)(z.Fragment, {
          children: [
            (0, z.jsx)(`div`, {
              className: Vr,
              style: { transform: `translateX(${i}px)`, width: r },
            }),
            d.map((e) =>
              (0, z.jsx)(
                Xr,
                {
                  timelineRelativeIndex: e.iTimelineRelativeTick,
                  globalOffsetPX: e.offsetPX,
                },
                e.key,
              ),
            ),
          ],
        })
      : null;
  });
function Xr(e) {
  let { globalOffsetPX: t, timelineRelativeIndex: n } = e,
    r = n % Kr === 0 ? Wr : Gr;
  return (0, z.jsx)(`div`, {
    className: Hr,
    style: { transform: `translateX(${t}px)` },
    children: (0, z.jsx)(`div`, { className: A(Ur, r) }),
  });
}
function Zr() {
  let e = G(),
    t = j(() => e.GetCurrentZoomScale()),
    n = (e) => Math.abs(300 - e / t),
    r = qr.reduce((e, t) => (n(e) - n(t) < 0 ? e : t)) / Kr;
  return { msTickSpacing: r, pxTickSpacing: r / t };
}
var Qr = `pOdfi3iG-Qk-`,
  $r = `RgeHxBkcuYI-`,
  ei = `bEIIxIyUIRw-`,
  ti = `vfkh8xz76sA-`,
  ni = `Z4wMZP9AtrA-`;
function ri(e, t) {
  return !(e.nStart >= t.nEnd || e.nEnd <= t.nStart);
}
var ii = class {
    m_reservations = [];
    m_nIconWidth;
    constructor(e) {
      this.m_nIconWidth = e;
    }
    BAllowIcon(e) {
      let t = {
          nStart: e - this.m_nIconWidth / 2,
          nEnd: e + this.m_nIconWidth / 2,
        },
        n = 0;
      for (; n < this.m_reservations.length; n++) {
        let e = this.m_reservations[n];
        if (e.nStart >= t.nEnd) break;
        if (ri(t, e)) return !1;
      }
      return (this.m_reservations.splice(n, 0, t), !0);
    }
  },
  ai = (0, R.createContext)({});
function K() {
  return (0, R.useContext)(ai);
}
var oi = `DzuECh3SiO8-`,
  si = `OzJbKH40jVQ-`,
  ci = `CcS1u3HYQgY-`,
  li = `Q2--kfqg0oc-`,
  ui = `GBjFGdfE0Qc-`,
  di = `tg-75b6-Ee4-`,
  fi = `-BFT24TRL3c-`,
  pi = `_2B3LwZM5S-w-`;
function mi(e) {
  let [t, n] = (0, R.useState)(() => !!e),
    [r, i] = (0, R.useState)(!1),
    [a, o] = (0, R.useState)(!1),
    [s, c] = (0, R.useState)(null),
    [l, u] = (0, R.useState)(null),
    [d, f] = (0, R.useState)(null),
    [p, m] = (0, R.useState)(null),
    [h, g] = (0, R.useState)(null);
  return {
    bLoading: t,
    bError: r,
    bSuccess: a,
    strError: s,
    strSuccess: l,
    elSuccess: p,
    elError: d,
    strThrobber: h,
    fnSetLoading: n,
    fnSetError: i,
    fnSetSuccess: o,
    fnSetStrError: c,
    fnSetStrSuccess: u,
    fnSetElSuccess: m,
    fnSetElError: f,
    fnSetThrobber: g,
  };
}
function hi(e) {
  let { strDialogTitle: t, state: n, closeModal: r, strThrobber: i } = e,
    {
      bLoading: a,
      bError: o,
      bSuccess: s,
      strError: c,
      strSuccess: l,
      elSuccess: u,
      elError: d,
      strThrobber: f,
    } = n;
  return o || c || d
    ? (0, z.jsxs)(Be, {
        strTitle: t,
        bAlertDialog: !0,
        closeModal: r,
        className: pi,
        children: [
          !!c &&
            (0, z.jsx)(`div`, {
              className: `wizbFzhGtBc-`,
              children: c || w(`#Error_ErrorCommunicatingWithNetwork`),
            }),
          !!d && d,
        ],
      })
    : s || l || u
      ? (0, z.jsx)(Be, {
          strTitle: t,
          strDescription: l || w(`#EventDisplay_Share_Success`),
          bAlertDialog: !0,
          closeModal: r,
          className: pi,
          children: (0, z.jsx)(z.Fragment, { children: !!u && u }),
        })
      : (0, z.jsx)(Be, {
          strTitle: t,
          className: pi,
          bProgressDialog: !0,
          closeModal: () => {},
          children: (0, z.jsx)(he, {
            string: i || f || w(`#Loading`),
            size: `medium`,
            position: `center`,
          }),
        });
}
function gi(e) {
  let {
      closeModal: t,
      strTimelineID: n,
      entry: r,
      playbackCoordinator: i,
      fnClearSelection: a,
    } = e,
    [o, s] = R.useState(r.title || ``),
    [c, l] = R.useState(r.description || ``),
    u = mi();
  return u.bLoading
    ? (0, z.jsx)(hi, {
        state: u,
        strDialogTitle: w(`#Marker_Dialog`),
        closeModal: t,
      })
    : (0, z.jsxs)(Be, {
        strTitle: w(`#Marker_Dialog`),
        strMiddleButtonText: w(`#Marker_Action_Delete`),
        onCancel: t,
        onOK: async () => {
          (u.fnSetLoading(!0),
            (await i.UpdateUserMarker(n, r, o, c))
              ? t()
              : (u.fnSetError(!0), u.fnSetStrError(w(`#Marker_UpdateFailed`))));
        },
        children: [
          (0, z.jsx)(kt, {
            type: `text`,
            value: o,
            onChange: (e) => s(e.currentTarget.value),
            label: w(`#Marker_Title`),
          }),
          (0, z.jsx)(kt, {
            type: `text`,
            value: c,
            onChange: (e) => l(e.currentTarget.value),
            label: w(`#Marker_Description`),
          }),
        ],
      });
}
var q = `YwXy-p3jOGA-`,
  J = `DYV4-rbHkCQ-`,
  _i = `NodVylkJJmk-`,
  vi = `NBLBqJkBBNA-`,
  yi = `muIMDgnfzVw-`,
  bi = class {
    m_bCreationWasTemporary;
    m_fnCreate;
    m_creationResult;
    m_bCleanedUp = !1;
    m_nClipLengthSeconds;
    m_strSuggestedClipName;
    m_strGameID;
    m_strSrcClipID;
    m_eInitMethod;
    m_startMetrics;
    m_endMetrics;
    constructor(e, t, n, r, i, a, o, s) {
      ((this.m_fnCreate = e),
        (this.m_nClipLengthSeconds = t),
        (this.m_strSuggestedClipName = n),
        (this.m_strGameID = r),
        (this.m_strSrcClipID = i),
        (this.m_eInitMethod = a),
        (this.m_startMetrics = o),
        (this.m_endMetrics = s));
    }
    Request() {
      return {
        create: this.create,
        cleanup: this.cleanup,
        bExistingClip: !1,
        nClipLengthSeconds: this.m_nClipLengthSeconds,
        strSuggestedClipName: this.m_strSuggestedClipName,
        gameID: new vt(this.m_strGameID),
        strSrcClipID: this.m_strSrcClipID,
        eInitMethod: this.m_eInitMethod,
        startMetrics: this.m_startMetrics,
        endMetrics: this.m_endMetrics,
      };
    }
    async create(e, t) {
      return (
        this.m_creationResult ||
          ((this.m_creationResult = await this.m_fnCreate(e, t)),
          (this.m_bCreationWasTemporary = e),
          nt(
            new vt(this.m_strGameID),
            this.m_eInitMethod,
            this.m_nClipLengthSeconds,
            this.m_startMetrics,
            this.m_endMetrics,
          )),
        Promise.resolve(this.m_creationResult)
      );
    }
    async cleanup() {
      if (this.m_bCleanedUp)
        throw Error(`cleanup called twice on clip creation`);
      if (
        ((this.m_bCleanedUp = !0),
        this.m_creationResult?.clipSummary && this.m_bCreationWasTemporary)
      ) {
        let { fnDeleteClip: e } = ft();
        await e(this.m_creationResult.clipSummary.clip_id);
      }
    }
  };
(p([f], bi.prototype, `create`, null), p([f], bi.prototype, `cleanup`, null));
function xi(e, t, n, r, i, a, o, s, c, l, u) {
  return new bi(
    (s, c) => Si(e, t, n, r, i, a, o, s, c),
    s / 1e3,
    n,
    e,
    t,
    c,
    l,
    u,
  ).Request();
}
async function Si(e, t, n, r, i, a, o, s, c) {
  let { fnSaveClip: l } = Je();
  M(`start ${r} @ ${i} upto ${a} @ ${o}`);
  try {
    let u = await l(
        e,
        t,
        n,
        { timeline_id: r, offset_ms: `` + i },
        { timeline_id: a, offset_ms: `` + o },
        s,
        c,
      ),
      { clipSummary: d, result: f } = u;
    return (
      M(d ? `Clip ${d.clip_id} created` : `Clip was not created: ${f}`), u
    );
  } catch (e) {
    I(e);
  }
  return { result: 2 };
}
function Ci(e, t, n, r) {
  let i = n + 1,
    a = i + r - 2;
  return xi(
    e,
    void 0,
    void 0,
    t,
    i,
    t,
    a,
    a - i,
    7,
    { latestRangeMethod: 7, originalRangeMethod: 7, relativeMS: 0 },
    { latestRangeMethod: 7, originalRangeMethod: 7, relativeMS: 0 },
  ).create(!1);
}
var wi = `u-2dfrrZjSE-`,
  Ti = R.createContext({
    bInContainer: !1,
    bContainerFocus: !1,
    nMouseClientXPX: null,
    globalMouseXPX: null,
    scrollWindowMouseXPX: null,
    fnRegisterMouseEvent: null,
    bContextMenuOpen: !1,
    setContextMenuOpen: () => {},
  });
function Ei(e) {
  let { children: t } = e,
    [n, r] = (0, R.useState)(!1),
    [i, a] = (0, R.useState)(!1),
    [o, s] = (0, R.useState)(!1),
    [c, l] = (0, R.useState)(),
    u = (0, R.useRef)(void 0),
    d = G(),
    f = j(() => d.GetScrollableWidthPX()),
    p = j(() => d.GetVisualWindowStartPX()),
    m = j(() => d.GetScrollWindowWidth()),
    h = j(() => d.GetScrollWindowOffset()),
    g = j(() => d.GetTimelineMarginWidth()),
    _ = R.useMemo(() => {
      if (u.current) {
        let e = p - h - g;
        return en(S(c + e, 0, f));
      }
      return en(0);
    }, [g, c, h, p, f]),
    v = R.useMemo(() => {
      if (u.current) {
        let e = u.current.getBoundingClientRect(),
          t = f > m ? h : e.x;
        return Yt(S(c - t, 0, m));
      }
      return Yt(0);
    }, [c, h, m, f]),
    y = (0, R.useCallback)(
      (e, t) => (
        u.current && u.current.addEventListener(e, t),
        () => u.current?.removeEventListener(e, t)
      ),
      [],
    ),
    ee = (0, R.useCallback)(() => r(!0), []),
    b = (0, R.useCallback)(() => r(!1), []),
    x = (0, R.useCallback)((e) => l(e.clientX), []),
    te = (0, R.useCallback)((e) => a(!0), []),
    ne = (0, R.useCallback)((e) => a(!1), []);
  (0, R.useEffect)(() => {
    let e = Ot(u.current);
    return (
      e.addEventListener(`mousemove`, x),
      () => e.removeEventListener(`mousemove`, x)
    );
  }, [x]);
  let C = (0, R.useMemo)(
    () => ({
      bContainerFocus: i,
      bInContainer: n,
      nMouseClientXPX: c,
      globalMouseXPX: _,
      scrollWindowMouseXPX: v,
      fnRegisterMouseEvent: y,
      bContextMenuOpen: o,
      setContextMenuOpen: s,
    }),
    [i, n, o, c, _, v, y],
  );
  return (0, z.jsx)(Ti.Provider, {
    value: C,
    children: (0, z.jsx)(`div`, {
      ref: u,
      onMouseOver: te,
      onFocus: te,
      onMouseOut: ne,
      onBlur: ne,
      onMouseEnter: ee,
      onMouseLeave: b,
      className: wi,
      children: t,
    }),
  });
}
function Y() {
  return (0, R.useContext)(Ti);
}
function Di() {
  return Y().globalMouseXPX;
}
function Oi() {
  return Y().scrollWindowMouseXPX;
}
function ki() {
  return Y().bInContainer;
}
function Ai() {
  return Y().bContainerFocus;
}
function ji() {
  let e = Y();
  return [e.bContextMenuOpen, e.setContextMenuOpen];
}
function Mi(e, t) {
  let n = Y().fnRegisterMouseEvent,
    r = (0, R.useRef)(void 0),
    i = (0, R.useCallback)(() => {
      r.current = n(e, t);
    }, [n, t, e]),
    a = (0, R.useCallback)(() => {
      r.current && r.current();
    }, []);
  (0, R.useEffect)(() => (i(), () => a()), [i, a]);
}
function Ni() {
  let e = G(),
    t = V(),
    n = Dr(),
    r = j(() => !t.ShouldModeShowClipControls()),
    i = ct(),
    { onMarkerCreated: a, onNavigateToClip: o } = K(),
    [s, c] = ji();
  return R.useCallback(
    (s, l, u, d) =>
      r || i
        ? null
        : At(
            (0, z.jsx)(Pi, {
              isCurrentPlayback: u,
              nGlobalOffsetMS: l,
              playbackCoordinator: t,
              timelineView: e,
              fnSetSelectionClipRange: n,
              onMarkerCreated: a,
              onNavigateToClip: o,
              onContextMenuOpenChange: c,
            }),
            s,
            d,
          ),
    [r, i, t, e, n, a, o, c],
  );
}
function Pi(e) {
  let {
      playbackCoordinator: t,
      timelineView: n,
      nGlobalOffsetMS: r,
      fnSetSelectionClipRange: i,
      isCurrentPlayback: a,
      onMarkerCreated: o,
      onNavigateToClip: s,
      onContextMenuOpenChange: l,
    } = e,
    u = j(() => t.GetClipsAtGlobalMS(r)),
    d = Li(n);
  (0, R.useEffect)(() => (l(!0), () => l(!1)), [l]);
  let f = (() => {
      let { strTimelineID: e, nTimelineOffsetMS: n } =
        t.ConvertGlobalOffsetToTimelineRelativeOffset(r.valMS);
      if (!e) return null;
      let i = t.GetLoader().GetTimelineData(e);
      if (!i) return null;
      let a = c(i.m_rgPhases, (e) => n.valMS - parseInt(e.time));
      if (a < 0) return null;
      let o = i.m_rgPhases[a];
      return n.valMS >= parseInt(o.time) &&
        n.valMS <= parseInt(o.time) + parseInt(o.duration)
        ? { strTimelineID: e, phase: o }
        : null;
    })(),
    p = (e) => {
      (t.AddUserMarkerAtGlobalMS(
        r,
        `/GameRecording/AddMarker/TimelineCtxMenu`,
        (t, n) => {
          o && o(t, n, e);
        },
      ),
        t.SetPlaytimeFromGlobalMS(r),
        t.FocusGlobalMS(r));
    },
    m = () => {
      (i(t, 4, r, void 0), t.SetPlaytimeFromGlobalMS(r), t.FocusGlobalMS(r));
    },
    h = () => {
      (i(t, 4, void 0, r), t.SetPlaytimeFromGlobalMS(r), t.FocusGlobalMS(r));
    },
    g = () => {
      u.length > 0 &&
        (D.ReportTrackedAction(
          `/GameRecording/Tooltip/ViewClip/TimelineCtxMenu`,
        ),
        s && s(u[0].strClipID));
    },
    _ = () => {
      let { strTimelineID: e, nTimelineOffsetMS: n } =
        t.ConvertGlobalOffsetToTimelineRelativeOffset(r.valMS);
      (t.GetLoader().GetTimelineStartBeforeGlobalZeroMS(e),
        at(t.GetGameID(), e, n, t.GetClipID()));
    },
    v = () => {
      if (!f) return;
      let { phase: e, strTimelineID: n } = f;
      Ci(t.GetGameID(), n, parseInt(e.time), parseInt(e.duration));
    },
    y = (e) => n.SetPhaseToHighlight(e);
  return (
    (0, R.useEffect)(() => () => n.SetPhaseToHighlight(null), [n]),
    (0, z.jsxs)(Ye, {
      refInstance: d,
      children: [
        (0, z.jsx)(k, {
          onSelected: p,
          className: q,
          children: (0, z.jsxs)(`div`, {
            className: A(J, _i),
            children: [
              (0, z.jsx)(Ue, {}),
              w(
                a
                  ? `#Playback_UserSelectionControls_AddUserMarker`
                  : `#TimelineDialog_AddMarker`,
              ),
            ],
          }),
        }),
        (0, z.jsx)(k, {
          onSelected: _,
          className: q,
          children: (0, z.jsxs)(`div`, {
            className: A(J, vi),
            children: [
              (0, z.jsx)(Le, {}),
              w(
                a
                  ? `#Playback_UserSelectionControls_TakeScreenshot`
                  : `#TimelineDialog_TakeScreenshot`,
              ),
            ],
          }),
        }),
        (0, z.jsx)(k, {
          onSelected: m,
          className: q,
          children: (0, z.jsxs)(`div`, {
            className: A(J, yi),
            children: [
              (0, z.jsx)(Lt, { direction: `left` }),
              w(
                a
                  ? `#Playback_UserSelectionControls_SetClipStart`
                  : `#TimelineContext_SetClipStart`,
              ),
            ],
          }),
        }),
        (0, z.jsx)(k, {
          onSelected: h,
          className: q,
          children: (0, z.jsxs)(`div`, {
            className: A(J, yi),
            children: [
              (0, z.jsx)(Lt, { direction: `right` }),
              w(
                a
                  ? `#Playback_UserSelectionControls_SetClipEnd`
                  : `#TimelineContext_SetClipEnd`,
              ),
            ],
          }),
        }),
        !!f &&
          (0, z.jsx)(k, {
            onSelected: v,
            className: `YwXy-p3jOGA-`,
            onMouseOver: () => y([f.strTimelineID, f.phase.time]),
            onMouseLeave: () => y(null),
            children: (0, z.jsxs)(`div`, {
              className: A(`DYV4-rbHkCQ-`, `cTZ4oCV0rfc-`),
              children: [(0, z.jsx)(Oe, {}), w(`#TimelineDialog_ClipPhase`)],
            }),
          }),
        u.length > 0 &&
          (0, z.jsx)(k, {
            onSelected: g,
            className: `YwXy-p3jOGA-`,
            children: (0, z.jsxs)(`div`, {
              className: A(`DYV4-rbHkCQ-`, `opmNw-e94ys-`),
              children: [(0, z.jsx)(Ge, {}), w(`#TimelineDialog_ViewClip`)],
            }),
          }),
      ],
    })
  );
}
function Fi() {
  let e = V(),
    t = Dr(),
    n = j(() => !e.ShouldModeShowClipControls()),
    r = ct(),
    { onMarkerCreated: i } = K();
  return R.useCallback(
    (a, o) => {
      n ||
        r ||
        At(
          (0, z.jsx)(Ii, {
            onMarkerCreated: i,
            playbackCoordinator: e,
            fnSetSelectionClipRange: t,
          }),
          a,
          o,
        );
    },
    [n, r, i, e, t],
  );
}
function Ii(e) {
  let { playbackCoordinator: t, fnSetSelectionClipRange: n } = e,
    r = (0, R.useRef)(void 0),
    { onMarkerCreated: i } = K();
  return (0, z.jsxs)(Ye, {
    refInstance: r,
    children: [
      (0, z.jsx)(k, {
        onSelected: (e) => {
          let n = (t, n) => {
              i && i(t, n, e);
            },
            r = t.GetGlobalMSPlaytime();
          (t.AddUserMarkerAtGlobalMS(
            r,
            `/GameRecording/AddMarker/VideoCtxMenu`,
            n,
          ),
            t.SetPlaytimeFromGlobalMS(r),
            t.FocusGlobalMS(r));
        },
        className: q,
        children: (0, z.jsxs)(`div`, {
          className: A(J, _i),
          children: [
            (0, z.jsx)(Ze, {}),
            w(`#Playback_UserSelectionControls_AddUserMarker`),
          ],
        }),
      }),
      (0, z.jsx)(k, {
        onSelected: () => {
          let e = t.GetGlobalMSPlaytime(),
            { strTimelineID: n, nTimelineOffsetMS: r } =
              t.ConvertGlobalOffsetToTimelineRelativeOffset(e.valMS);
          (t.GetLoader().GetTimelineStartBeforeGlobalZeroMS(n),
            at(t.GetGameID(), n, r, t.GetClipID()));
        },
        className: q,
        children: (0, z.jsxs)(`div`, {
          className: A(J, vi),
          children: [
            (0, z.jsx)(Le, {}),
            w(`#Playback_UserSelectionControls_TakeScreenshot`),
          ],
        }),
      }),
      (0, z.jsx)(k, {
        onSelected: () => {
          let e = t.GetGlobalMSPlaytime();
          (n(t, 4, e, void 0),
            t.SetPlaytimeFromGlobalMS(e),
            t.FocusGlobalMS(e));
        },
        className: q,
        children: (0, z.jsxs)(`div`, {
          className: A(J, yi),
          children: [
            (0, z.jsx)(Lt, { direction: `left` }),
            w(`#Playback_UserSelectionControls_SetClipStart`),
          ],
        }),
      }),
      (0, z.jsx)(k, {
        onSelected: () => {
          let e = t.GetGlobalMSPlaytime();
          (n(t, 4, void 0, e),
            t.SetPlaytimeFromGlobalMS(e),
            t.FocusGlobalMS(e));
        },
        className: q,
        children: (0, z.jsxs)(`div`, {
          className: A(J, yi),
          children: [
            (0, z.jsx)(Lt, { direction: `right` }),
            w(`#Playback_UserSelectionControls_SetClipEnd`),
          ],
        }),
      }),
    ],
  });
}
function Li(e) {
  let t = j(() => e.GetAutoScrollPauseTimeout()),
    n = j(() => e.GetVisualWindowStartPX()),
    r = (0, R.useRef)(void 0),
    i = (0, R.useRef)(void 0);
  return (
    (0, R.useEffect)(() => {
      r.current && i.current ? i.current.Hide() : (r.current = !0);
    }, [n]),
    (0, R.useEffect)(() => {
      e.SetAutoScrollPaused(!0);
    }, [e]),
    (0, R.useEffect)(() => {
      t && e.ClearAutoScrollPauseTimeout();
    }, [t, e]),
    i
  );
}
function Ri() {
  let e = G(),
    t = V(),
    { setSelectedMarker: n } = wr(),
    r = Er(),
    { onNavigateToClip: i, onNavigateToScreenshot: a } = K(),
    o = ct(),
    s = j(() => !t.ShouldModeShowClipControls());
  return R.useCallback(
    (c, l, u) => {
      s ||
        At(
          (0, z.jsx)(zi, {
            markerInfo: l,
            playbackCoordinator: t,
            timelineView: e,
            setSelectedMarker: n,
            onNavigateToClip: i,
            onNavigateToScreenshot: a,
            bLowDiskSpace: o,
            clearRange: r,
          }),
          c,
          u,
        );
    },
    [s, o, t, e, n, i, a, r],
  );
}
function zi(e) {
  let {
      playbackCoordinator: t,
      timelineView: n,
      markerInfo: r,
      setSelectedMarker: i,
      clearRange: a,
      bLowDiskSpace: o,
      onNavigateToClip: s,
      onNavigateToScreenshot: c,
    } = e,
    l = j(() => n.ConvertGlobalMSToClipOrNone(r.nGlobalMS.valMS)),
    u = j(() =>
      t.ConvertGlobaOffsetToRecordingAndRelativeOffset(r.nGlobalMS.valMS),
    ),
    d = Li(n),
    f = (e) => {
      let n = Bi,
        a = Vi;
      on(r.entry) && ((n = 0), (a = parseInt(r.entry.duration)));
      let [o, s] = t
        .GetLoader()
        .CreateGlobalRangeForTimeline(r.strTimelineID, r.nGlobalMS.valMS, n, a);
      (t.SetPlaytimeFromGlobalMS(P(o)),
        i?.(r.entry.id, r.strTimelineID, o, s),
        D.ReportTrackedAction(
          `/GameRecording/HighlightCtxMenu/ClipFromHighlight`,
        ),
        e.stopPropagation());
    },
    p = () => {
      l &&
        (D.ReportTrackedAction(
          `/GameRecording/MarkerCtxMenu/ViewClip/${r.entry.type}`,
        ),
        s && s(l.clipID));
    },
    m = (e) => {
      if (!N(r.entry)) return;
      D.ReportTrackedAction(
        `/GameRecording/HighlightCtxMenu/Marker/Edit/${r.entry.type}`,
      );
      let n = (0, z.jsx)(gi, {
        entry: r.entry,
        playbackCoordinator: t,
        fnClearSelection: a,
        strTimelineID: r.strTimelineID,
      });
      (Te(n, O(e)), e.stopPropagation(), e.preventDefault());
    },
    h = (e) => {
      N(r.entry) &&
        (D.ReportTrackedAction(
          `/GameRecording/HighlightCtxMenu/Marker/Delete/${r.entry.type}`,
        ),
        t.RemoveUserMarker(r.strTimelineID, r.entry.id));
    },
    g = () => {
      nn(r.entry) &&
        r.entry?.handle &&
        (D.ReportTrackedAction(`/GameRecording/HighlightCtxMenu/Screenshot`),
        c(n.GetGameID(), r.entry.handle));
    },
    _ = [];
  return (
    N(r.entry) &&
      _.push(
        (0, z.jsx)(
          k,
          {
            onSelected: m,
            className: oi,
            children: (0, z.jsxs)(`div`, {
              className: A(si, ci),
              children: [(0, z.jsx)(qt, {}), w(`#Marker_Action_Edit`)],
            }),
          },
          `edit`,
        ),
      ),
    u?.strRecordingID &&
      !o &&
      _.push(
        (0, z.jsx)(
          k,
          {
            onSelected: f,
            className: oi,
            children: (0, z.jsxs)(`div`, {
              className: A(si, li),
              children: [(0, z.jsx)(Pt, {}), w(`#TimelineDialog_ClipVideo`)],
            }),
          },
          `clip`,
        ),
      ),
    nn(r.entry) &&
      _.push(
        (0, z.jsx)(
          k,
          {
            onSelected: g,
            className: oi,
            children: (0, z.jsxs)(`div`, {
              className: A(si, di),
              children: [
                (0, z.jsx)(tt, {}),
                w(`#TimelineDialog_ViewScreenshot`),
              ],
            }),
          },
          `view_screenshot`,
        ),
      ),
    l &&
      p &&
      _.push(
        (0, z.jsx)(
          k,
          {
            onSelected: p,
            className: oi,
            children: (0, z.jsxs)(`div`, {
              className: A(si, fi),
              children: [(0, z.jsx)(Wt, {}), w(`#TimelineDialog_ViewClip`)],
            }),
          },
          `view_clip`,
        ),
      ),
    N(r.entry) &&
      _.push(
        (0, z.jsx)(
          k,
          {
            onSelected: h,
            className: oi,
            children: (0, z.jsxs)(`div`, {
              className: A(si, ui),
              children: [(0, z.jsx)(ut, {}), w(`#Marker_Action_Delete`)],
            }),
          },
          `delete`,
        ),
      ),
    _.length ? (0, z.jsx)(Ye, { refInstance: d, children: _ }) : null
  );
}
var Bi = 5e3,
  Vi = 3e3,
  Hi = 5e3;
function Ui(e) {
  let {
      markerInfo: t,
      view: n,
      coordinator: r,
      gameID: i,
      clipID: a,
      timelineID: o,
      faded: s,
    } = e,
    c = t.nGlobalMS,
    l = j(() => n.ConvertGlobalMSToGlobalPXOffset(c.valMS)),
    u = j(() => {
      let e = n.GetThumbnailComponent();
      return e && e !== U.Highlight;
    }),
    d = Ri(),
    { selectedMarker: f } = wr(),
    p = t.entry?.id == f?.strEntryID && t.strTimelineID == f?.strTimelineID,
    { ref: m, ...h } = Gi(n, t),
    g = R.useCallback(
      (e) => {
        let i = c.valMS - Hi,
          a = n.FindTimelineOffsets(o),
          s = Math.max(i, a.globalOffsetMS);
        (r.SetPlaytimeFromGlobalMS(P(s)),
          r.SetDisplayHighlightEntry(t.entry),
          e.stopPropagation(),
          D.ReportTrackedAction(`/GameRecording/Marker/Click/${t.entry.type}`));
      },
      [r, c.valMS, o, n, t],
    ),
    _ = (e) => {
      (d(e, t, { bDisableMouseOverlay: !0, bForcePopup: !0, bAlwaysOnTop: !0 }),
        e.stopPropagation());
    },
    v = { transform: `translateX( calc( ${l}px - 50% ))` };
  return (0, z.jsxs)(`div`, {
    className: A(Qr, u && `fKVXzdV7f4k-`, s && `NF7Pk6zJyl4-`),
    style: v,
    ref: m,
    onContextMenu: _,
    ...h,
    children: [
      (0, z.jsx)(
        `div`,
        {
          className: A($r),
          children: (0, z.jsx)(
            Un,
            {
              classNames: ei,
              entry: t.entry,
              strMarkerIcon: t.strMarkerIcon,
              faded: s,
              onClick: g,
              bSelectedMarker: p,
            },
            t.entry.id,
          ),
        },
        c.valMS,
      ),
      (0, z.jsx)(`div`, {
        className: ti,
        children: (0, z.jsx)(`div`, { className: A(ni) }),
      }),
    ],
  });
}
var Wi = 150;
function Gi(e, t) {
  let n = R.useRef(void 0),
    r = R.useRef(void 0),
    i = R.useCallback(
      (t) => {
        if (!n.current) return;
        let i = n.current.getBoundingClientRect();
        if (t.clientY >= i.top && t.clientY <= i.bottom) {
          if (i.left - t.clientX > 1 || t.clientX - i.right > 1) {
            (e.SetThumbnailComponent(null),
              r.current && r.current(),
              (r.current = null));
            return;
          }
          return;
        }
        let a = i.left + 0.5 * i.width;
        (t.clientX < a - Wi || t.clientX > a + Wi) &&
          (e.SetThumbnailComponent(null),
          r.current && r.current(),
          (r.current = null));
      },
      [e],
    ),
    a = R.useCallback(
      (n) => {
        if (
          (e.SetThumbnailComponent(U.Highlight),
          e.SetThumbnailEntry(t),
          !r.current)
        ) {
          let e = O(n);
          (e.addEventListener(`mousemove`, i),
            (r.current = () => e.removeEventListener(`mousemove`, i)));
        }
        n.stopPropagation();
      },
      [i, t, e],
    ),
    o = R.useCallback(
      (t) => {
        let i = n.current.getBoundingClientRect(),
          a = i.left,
          o = i.right;
        t.clientX - a < 1 || o - t.clientX < 1
          ? (e.SetThumbnailComponent(null),
            r.current && r.current(),
            (r.current = null))
          : (Et(n.current, t.relatedTarget) ||
              (t.clientY - i.top > 1 &&
                i.bottom - t.clientY > 1 &&
                t.clientX - i.left > 1 &&
                i.right - t.clientX > 1 &&
                (e.SetThumbnailComponent(null),
                r.current && r.current(),
                (r.current = null))),
            t.stopPropagation());
      },
      [e],
    );
  return (
    R.useEffect(() => () => r.current && r.current(), []),
    { ref: n, onMouseOver: a, onMouseLeave: o }
  );
}
var Ki = 16;
function qi(e) {
  switch (e.type) {
    case `achievement`:
      return 9e3;
    default:
      return e.priority;
  }
}
var Ji = R.memo(function (e) {
    let t = G(),
      n = j(() => t.GetVisibleTimelines());
    return (0, z.jsx)(z.Fragment, {
      children: n.map((e) => (0, z.jsx)(Zi, { timeline: e }, e.timelineID)),
    });
  }),
  Yi = { screenshot: 0, event: 0, achievement: 1, usermarker: 2 };
function Xi(e, t) {
  if (Yi[e.type] !== Yi[t.type]) return Yi[t.type] - Yi[e.type];
  let n = qi(e),
    r = qi(t);
  return n == r
    ? e.time == t.time
      ? e.id.localeCompare(t.id)
      : parseInt(e.time) - parseInt(t.time)
    : r - n;
}
var Zi = R.memo(function (e) {
  let { timeline: t } = e,
    n = G(),
    r = V(),
    i = j(() => n.GetVisibleTimelineHighlights(t.timelineID) || [])
      .slice()
      .sort(Xi),
    a = j(() => n.GetTimelineOffsetMS(t.timelineID)),
    o = t.globalOffsetMS - a,
    s = r.GetGameID(),
    c = r.GetClipID(),
    l = new ii(n.GetCurrentZoomScale() * Ki);
  return i.map((e, i) => {
    if ($i(e) !== `highlight`) return null;
    let a = `${e.type}_${e.id}_${t.timelineID}_${i}`,
      u = Qi(t.timelineID, o, e),
      d = l.BAllowIcon(u.nGlobalMS.valMS);
    return (0, z.jsx)(
      Ui,
      {
        gameID: s,
        clipID: c,
        view: n,
        coordinator: r,
        faded: !d,
        timelineID: t.timelineID,
        markerInfo: u,
      },
      a,
    );
  });
});
function Qi(e, t, n) {
  if (
    ![`event`, `usermarker`, `screenshot`, `achievement`, `error`].includes(
      n.type,
    )
  )
    return (
      F(
        `Unexpected timeline entry type ${n.type}, returning empty highlight marker`,
      ),
      null
    );
  let r = n,
    i = Zt(r);
  return {
    entry: r,
    strMarkerIcon: i ? `steam_achievement` : r.icon,
    nMarkerPriority: qi(r),
    strTimelineID: e,
    strTitle: (!i && r.title) || ``,
    strDescription: (!i && r.description) || ``,
    nGlobalMS: P(parseInt(r.time) + t),
  };
}
function $i(e) {
  switch (e.type) {
    case `usermarker`:
    case `achievement`:
    case `screenshot`:
    case `error`:
      return `highlight`;
    case `event`:
      return parseInt(e.duration) > 0 ? `range_highlight` : `highlight`;
    default:
      return `none`;
  }
}
var ea = `-X0PMxvY3QE-`,
  ta = `cbzcIa1ocN4-`,
  na = `MMJtgRs0Os4-`,
  ra = `m6U62VPiE5I-`,
  ia = `KT1NiRNa2wQ-`;
function aa(e) {
  let { view: t, entry: n, nGlobalEntryEndMS: r, nGlobalTLStartMS: i } = e,
    a = V(),
    o = P(parseInt(n.time) + i.valMS),
    s = j(() => {
      let e = t.ConvertGlobalMSToGlobalPXOffset(o.valMS),
        n = t.GetVirtualWindowStartPX();
      return n < e ? e : n;
    }),
    c = j(() => {
      let e = t.ConvertGlobalMSToGlobalPXOffset(r.valMS),
        n = t.GetVirtualWindowEndPX();
      return n < e ? n : e;
    }),
    l = !!a.GetClipID(),
    u = { transform: `translateX( ${s}px )`, width: c - s },
    d = A({
      [ia]: n.mode === sn.Invalid,
      [na]: n.mode === sn.Staging,
      [ra]: n.mode === sn.Menus,
      [ta]: n.mode === sn.Playing,
    });
  return (0, z.jsx)(
    `div`,
    { className: A(ea, d, l && `dM-k3XLATgY-`), style: u },
    n.id,
  );
}
var oa = R.memo(function (e) {
    let t = G(),
      n = j(() => t.GetVisibleTimelines());
    return (0, z.jsx)(z.Fragment, {
      children: n.map((e) => (0, z.jsx)(sa, { timeline: e }, e.timelineID)),
    });
  }),
  sa = R.memo(function (e) {
    let { timelineID: t, globalOffsetMS: n, nDurationMS: r } = e.timeline,
      i = G(),
      a = j(() => {
        let e = i.GetVisibleTimelineGameModes(t);
        return !e || e.length === 0
          ? [{ time: `0`, type: `gamemode`, mode: sn.Invalid, id: `synthetic` }]
          : e;
      }),
      o = P(n + r),
      s = n - i.GetTimelineOffsetMS(t),
      c = [];
    for (let e = 0; e < a.length; e++) {
      let n = P(e < a.length - 1 ? parseInt(a[e + 1].time) + s : o.valMS - 1);
      c.push(
        (0, z.jsx)(
          aa,
          {
            view: i,
            entry: a[e],
            nGlobalEntryEndMS: n,
            nGlobalTLStartMS: P(s),
          },
          `gameMode_${t}_${e}`,
        ),
      );
    }
    return (0, z.jsx)(z.Fragment, { children: c });
  }),
  ca = `XVi5a5ZkmMc-`,
  la = `-nn0AHNIP3k-`,
  ua = `-IpQtGedcoc-`,
  da = `LsIeUCU634s-`,
  fa = `QNUH0lZ0VfY-`,
  pa = `wQLCIzL88LU-`,
  ma = `JtIym43tUFo-`,
  ha = `a23JQkVm40o-`,
  ga = 500,
  _a = (0, R.memo)(function (e) {
    let t = V(),
      n = j(() => t.GetHidePlayer()),
      [r, i] = (0, R.useState)({ bDragActive: !1, bPausedOnDragStart: !1 }),
      a = G(),
      o = j(() => {
        if (
          a.GetAutoScrollPaused() ||
          a.BReachedMaxScroll() ||
          a.BReachedMinScroll() ||
          t.BIsVideoElementPaused()
        )
          return !1;
        let e = t.GetGlobalMSPlaytime();
        return (
          a.ConvertGlobalMSToGlobalPXOffset(e.valMS) <
          a.GetMaxScrollLeftPX() + 0.5 * a.GetScrollWindowWidth()
        );
      });
    return n
      ? (0, z.jsx)(ya, { setDragActive: i })
      : o
        ? (0, z.jsx)(va, { view: a, setDragActive: i })
        : (0, z.jsx)(ba, { dragState: r, setDragActive: i });
  });
function va(e) {
  let { view: t, setDragActive: n } = e,
    r = j(() => t.GetVisualWindowStartPX() + t.GetScrollWindowWidth() / 2);
  return (0, z.jsx)(Ea, {
    playheadPosition: r,
    children: (0, z.jsx)(xa, { setDragActive: n, bDragActive: !1 }),
  });
}
var ya = (0, R.memo)(function (e) {
    let { setDragActive: t } = e,
      n = G(),
      r = j(() => n.GetScrollableWidthPX()),
      i = zt(100),
      a = (0, R.useCallback)(
        (e) => {
          n.GetAutoScrollPaused() || i(() => n.ScrollToOffset(e));
        },
        [i, n],
      );
    return (
      (0, R.useEffect)(() => n.ScrollToEnd(), [n]),
      (0, R.useEffect)(() => a(r), [r, a]),
      (0, z.jsx)(Ea, {
        playheadPosition: r,
        children: (0, z.jsx)(xa, { setDragActive: t, bDragActive: !1 }),
      })
    );
  }),
  ba = (0, R.memo)(function (e) {
    let { dragState: t, setDragActive: n } = e,
      { bDragActive: r, bPausedOnDragStart: i } = t,
      a = V(),
      o = G(),
      s = Di(),
      c = wa(Oi(), o, r, s, a);
    return (
      (0, R.useEffect)(() => {
        if (!r) return;
        o.SetThumbnailPosition(c);
        let e = o.ConvertPXOffsetToGlobalMS(c, !1);
        if (!e) return;
        let t = a.GetLiveEdgeMS();
        a.SetPlaytimeFromGlobalMS(t.valMS < e ? t : P(e), i, !0, !0);
      }, [c, i, r, a, o]),
      (0, z.jsx)(`div`, {
        className: A(fa, r && `FOu6nwXsE7c-`),
        children: (0, z.jsx)(Ea, {
          className: r ? ma : void 0,
          playheadPosition: c,
          children: (0, z.jsx)(xa, { setDragActive: n, bDragActive: r }),
        }),
      })
    );
  }),
  xa = (0, R.memo)(function (e) {
    let { setDragActive: t, bDragActive: n } = e,
      r = G(),
      i = (e) => {
        (n || r.SetThumbnailComponent(U.Playhead), e.stopPropagation());
      },
      a = (e) => {
        (n || r.SetThumbnailComponent(null), e.stopPropagation());
      };
    return (0, z.jsx)(`div`, {
      className: ha,
      onMouseOver: i,
      onMouseOut: a,
      onFocus: i,
      onBlur: a,
      children: (0, z.jsx)(Sa, { setDragActive: t }),
    });
  }),
  Sa = R.memo(function (e) {
    let { setDragActive: t } = e,
      n = V(),
      r = Ni(),
      i = G(),
      a = j(() => {
        let e = i.GetThumbnailComponent();
        return e === U.RangeLeft || e === U.RangeRight;
      }),
      o = (0, R.useCallback)(
        (e) => {
          if (e.button != 0) return;
          let r = O(e),
            a,
            o,
            s = () => {
              let e = n.GetGameRecordingVideo().IsPaused();
              (t({ bDragActive: !0, bPausedOnDragStart: e }),
                i.SetThumbnailComponent(U.Playhead),
                a());
            };
          (r.addEventListener(`mousemove`, s),
            (a = () => r.removeEventListener(`mousemove`, s)));
          let c = () => {
            (t({ bDragActive: !1, bPausedOnDragStart: !1 }),
              i.SetThumbnailComponent(null),
              a(),
              o());
          };
          (r.addEventListener(`mouseup`, c),
            (o = () => r.removeEventListener(`mouseup`, c)));
        },
        [n, t, i],
      ),
      s = (0, R.useCallback)(
        (e) => {
          let t = n.GetGlobalMSPlaytime();
          (r(e, t, !0, {
            bDisableMouseOverlay: !0,
            bForcePopup: !0,
            bAlwaysOnTop: !0,
          }),
            e.stopPropagation(),
            e.preventDefault());
        },
        [n, r],
      );
    return (0, z.jsx)(`div`, {
      className: A(da, a && `Twzqk-0-bXc-`),
      onMouseDown: o,
      onContextMenu: s,
      children: (0, z.jsx)(Ca, {}),
    });
  });
function Ca(e) {
  return (0, z.jsxs)(`svg`, {
    ...e,
    width: `12`,
    height: `32`,
    viewBox: `0 0 12 24`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, z.jsx)(`rect`, {
        x: `5`,
        y: `4`,
        width: `2`,
        height: `40`,
        fill: `currentColor`,
      }),
      (0, z.jsx)(`path`, {
        d: `M6 6L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 6Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function wa(e, t, n, r, i) {
  let a = (0, R.useRef)(void 0),
    o = j(() => t.GetScrollableWidthPX()),
    s = j(() => t.GetScrollWindowWidth()),
    [c, l] = (0, R.useState)(0),
    u = (0, R.useRef)(void 0),
    d = (0, R.useRef)(void 0),
    { clearPlaybackAnimation: f, startPlaybackAnimation: p } = Ta(i, t, l);
  (0, R.useEffect)(
    () => () => {
      (u.current &&
        (cancelAnimationFrame(u.current),
        (u.current = null),
        (d.current = null)),
        f());
    },
    [f],
  );
  let m = R.useCallback(
    (e, t, n, r, i) => {
      if (i(t))
        (l(S(t.GetVisualWindowStartPX() + n, 0, t.GetScrollableWidthPX())),
          cancelAnimationFrame(u.current),
          (u.current = null),
          (d.current = null));
      else {
        if (
          ((u.current &&= requestAnimationFrame((e) => m(e, t, n, r, i))),
          d.current)
        ) {
          let n = ((e - d.current) / ga) * r;
          (t.ScrollBy(n), l((e) => S(e + n, 0, t.GetScrollableWidthPX())));
        }
        d.current = e;
      }
    },
    [l],
  );
  return (
    (0, R.useEffect)(() => {
      let i = s * (1 - Sc),
        c = s * Sc;
      if (
        (u.current &&
          (cancelAnimationFrame(u.current),
          (u.current = null),
          (d.current = null)),
        !n)
      )
        p();
      else if ((f(), e.valPX < c && !t.BReachedMinScroll())) {
        if (e.valPX <= a.current) {
          let n = e.valPX - c,
            r = S(Math.abs(n / c), 0, 1) * n;
          u.current = requestAnimationFrame((n) =>
            m(n, t, e.valPX, r, t.BReachedMinScroll),
          );
        }
        a.current = e.valPX;
      } else if (e.valPX > i && !t.BReachedMaxScroll()) {
        if (e.valPX >= a.current) {
          let n = e.valPX - i,
            r = S(Math.abs(n / (s - i)), 0, 1) * n;
          u.current = requestAnimationFrame((n) =>
            m(n, t, e.valPX, r, t.BReachedMaxScroll),
          );
        }
        a.current = e.valPX;
      } else l(S(r.valPX, 0, o));
    }, [n, f, r.valPX, s, o, m, e.valPX, p, t]),
    c
  );
}
function Ta(e, t, n) {
  let r = (0, R.useRef)(void 0),
    i = e.GetGameRecordingVideo(),
    a = (0, R.useRef)(void 0),
    o = (0, R.useRef)(void 0),
    s = (0, R.useRef)(void 0),
    c = (0, R.useRef)(void 0),
    l = (0, R.useCallback)(() => {
      if (!r.current) return;
      let u = e.GetGlobalMSPlaytime();
      if (u.valMS >= 0) {
        let e = i.BVideoElementPlaying(),
          r = i.GetVideoElementCurrentTime(),
          l = t.GetScrollableWidthPX(),
          d = t.GetCurrentZoomScale();
        if (a.current !== u.valMS || (c.current && c.current != d)) {
          let e = t.ConvertGlobalMSToGlobalPXOffset(u.valMS),
            r = Math.min(l, e);
          (n(r), (s.current = r));
        } else if (
          a.current &&
          a.current === u.valMS &&
          r &&
          o.current &&
          o.current !== r &&
          e
        ) {
          let e = a.current + (r - o.current) * 1e3,
            i = t.ConvertGlobalMSToGlobalPXOffset(e);
          (s.current && s.current < i && n(Math.min(l, i)), (s.current = i));
        }
        (e || ((o.current = null), (a.current = u.valMS)),
          e &&
            a.current !== u.valMS &&
            ((o.current = r), (a.current = u.valMS)),
          (c.current = d));
      }
      r.current = requestAnimationFrame(l);
    }, [e, n, t, i]);
  return {
    clearPlaybackAnimation: (0, R.useCallback)(() => {
      (r.current && cancelAnimationFrame(r.current),
        (r.current = null),
        (a.current = null),
        (o.current = null),
        (s.current = null));
    }, []),
    startPlaybackAnimation: (0, R.useCallback)(() => {
      r.current ||= requestAnimationFrame(l);
    }, [l]),
  };
}
function Ea(e) {
  let { className: t, playheadPosition: n, children: r } = e;
  return (0, z.jsx)(`div`, {
    className: A(pa, t),
    style: { transform: `translateX( calc(${n}px - 50% ))` },
    children: r,
  });
}
var Da = t({
    AddMarker: () => io,
    Button: () => X,
    CreateClipButton: () => oo,
    DeleteMarker: () => co,
    Description: () => Va,
    DescriptionBlock: () => za,
    Duration: () => _o,
    EditMarker: () => so,
    GoToClip: () => ao,
    GoToClipFromMarker: () => lo,
    Header: () => La,
    Hide: () => ja,
    Highlight: () => Ya,
    Icon: () => Ra,
    ImageAndInfoBoxContainer: () => Ma,
    ImageContainer: () => Na,
    ImageHighlightBlock: () => ho,
    ImageHighlightPosition: () => mo,
    InfoBoxContainer: () => Ia,
    NoRecordedContent: () => Fa,
    Overlay: () => Ua,
    Playhead: () => Za,
    RangeIcon: () => vo,
    RangeLeft: () => Qa,
    RangeRight: () => $a,
    StateDescription: () => no,
    ThumbnailContainerOffset: () => ka,
    ThumbnailContents: () => Aa,
    ThumbnailHitBoxPadding: () => Ha,
    ThumbnailImage: () => Pa,
    ThumbnailTooltip: () => Ja,
    TimeDisplayContainer: () => Xa,
    Timestamp: () => eo,
    Title: () => Ba,
    TooltipButtons: () => ro,
    TooltipChildren: () => Ga,
    TooltipContainer: () => po,
    TooltipContents: () => Wa,
    TooltipHitBox: () => fo,
    TooltipImage: () => Ka,
    TooltipImageCtn: () => qa,
    TooltipInteractionRegion: () => to,
    TooltipOffset: () => Oa,
    TooltipRangeContainer: () => go,
    ViewScreenshot: () => uo,
    default: () => yo,
    thumbnailWidth: () => `320`,
  }),
  Oa = `M-05lIt-Rm8-`,
  ka = `demzX-Fs4-4-`,
  Aa = `NcHGwBV4SNQ-`,
  ja = `ap-Q4oooopI-`,
  Ma = `_9zxrJRU-CaI-`,
  Na = `eQvnQVTk-sI-`,
  Pa = `tN6d6cDs7Do-`,
  Fa = `B0nXthAtEI8-`,
  Ia = `KxFaAst23zY-`,
  La = `aiwhhTjZ6Pk-`,
  Ra = `_9HkA8d7x9kg-`,
  za = `wCw8FA-GNZw-`,
  Ba = `_3-l3Dnlgyfo-`,
  Va = `_00G4k2IDvBQ-`,
  Ha = `UYDbMZ6G3WU-`,
  Ua = `RAeRf-oNWq8-`,
  Wa = `Vc6eo-Q-cRw-`,
  Ga = `u2eqeMJHtic-`,
  Ka = `_-6Xh-VqwYeg-`,
  qa = `TkM9nyNO0Xs-`,
  Ja = `mdK6jpS4jRU-`,
  Ya = `VrSRUKXDErM-`,
  Xa = `PYo3kx2RfSs-`,
  Za = `_1UvMCudnsIs-`,
  Qa = `vx9pJ002RM0-`,
  $a = `BgeUu9u9wW8-`,
  eo = `qP9-v-34gEw-`,
  to = `VTDf1a6CPQI-`,
  no = `iHtJ7ZAsX5A-`,
  ro = `k9NX76-rrPo-`,
  X = `zB0JoG7vSrU-`,
  io = `Qmw3lo2yg3Y-`,
  ao = `lzzqqN6opQo-`,
  oo = `NcXSUT9Wrrk-`,
  so = `h-9-LkDvmE4-`,
  co = `ZtdjDDcQX4Q-`,
  lo = `ncTrqKkwHVg-`,
  uo = `WaQJkS8Zl-8-`,
  fo = `a2muS1tYn9s-`,
  po = `_8PD3oDSkC5Y-`,
  mo = `BmRL3GyDFyw-`,
  ho = `_1k7fgO2abtE-`,
  go = `E9tORfFSTjw-`,
  _o = `HjxSSeO2NmQ-`,
  vo = `zjZlS00iLU4-`,
  yo = {
    thumbnailWidth: `320`,
    TooltipOffset: Oa,
    ThumbnailContainerOffset: ka,
    ThumbnailContents: Aa,
    Hide: ja,
    ImageAndInfoBoxContainer: Ma,
    ImageContainer: Na,
    ThumbnailImage: Pa,
    NoRecordedContent: Fa,
    InfoBoxContainer: Ia,
    Header: La,
    Icon: Ra,
    DescriptionBlock: za,
    Title: Ba,
    Description: Va,
    ThumbnailHitBoxPadding: Ha,
    Overlay: Ua,
    TooltipContents: Wa,
    TooltipChildren: Ga,
    TooltipImage: Ka,
    TooltipImageCtn: qa,
    ThumbnailTooltip: Ja,
    Highlight: Ya,
    TimeDisplayContainer: Xa,
    Playhead: Za,
    RangeLeft: Qa,
    RangeRight: $a,
    Timestamp: eo,
    TooltipInteractionRegion: to,
    StateDescription: no,
    TooltipButtons: ro,
    Button: X,
    AddMarker: io,
    GoToClip: ao,
    CreateClipButton: oo,
    EditMarker: so,
    DeleteMarker: co,
    GoToClipFromMarker: lo,
    ViewScreenshot: uo,
    TooltipHitBox: fo,
    TooltipContainer: po,
    ImageHighlightPosition: mo,
    ImageHighlightBlock: ho,
    TooltipRangeContainer: go,
    Duration: _o,
    RangeIcon: vo,
  };
function bo(e, t) {
  return (
    e.strRecordingID === t.strRecordingID &&
    e.strClipID === t.strClipID &&
    e.nRecordingOffsetMS === t.nRecordingOffsetMS &&
    e.nRecordingStartOffsetMS === t.nRecordingStartOffsetMS &&
    e.cPxMajorAxis === t.cPxMajorAxis &&
    e.bPreciseTiming == t.bPreciseTiming
  );
}
var xo = class e {
  k_QueueWaitUntilRequestMS = 10;
  k_nMaxBatchSize = 50;
  m_nMaxCacheSize = 18e5 / rn;
  m_LRUTrackerSet = new Set();
  m_mapPromises = new Map();
  m_mapThumbnailImages = new Map();
  m_rgPendingRequest = [];
  m_PendingInfoPromise;
  m_PendingInfoResolve = void 0;
  m_PendingTimer = void 0;
  k_AlreadyResolvedOK = Promise.resolve(!0);
  m_rgThumbnailPerf = [];
  constructor() {
    g(this);
  }
  AddPerfMeasure(e) {
    this.m_rgThumbnailPerf.push(e);
  }
  GetPerfMeasures() {
    if (!this.m_rgThumbnailPerf.length) return null;
    let e = this.m_rgThumbnailPerf.length,
      t = this.m_rgThumbnailPerf.reduce((e, t) => e + t) / e;
    return {
      nMean: t,
      nStdDev: Math.sqrt(
        this.m_rgThumbnailPerf
          .map((e) => (e - t) ** 2)
          .reduce((e, t) => e + t) / e,
      ),
      nMax: Math.max(...this.m_rgThumbnailPerf),
      nMin: Math.min(...this.m_rgThumbnailPerf),
      nLength: e,
      nLastVal: this.m_rgThumbnailPerf[e - 1],
    };
  }
  GetKey(e, t, n, r, i, a, o) {
    let s = i + r;
    return `${e}_${t}_${n}_${o ? s : s - (s % rn)}_${a}_${o}`;
  }
  GetThumbnailData(e) {
    let t = this.m_mapThumbnailImages.get(e);
    return (
      t &&
        (this.m_LRUTrackerSet.has(e) && this.m_LRUTrackerSet.delete(e),
        this.m_LRUTrackerSet.add(e)),
      t
    );
  }
  SetThumbnailData(e, t) {
    if (
      (this.m_LRUTrackerSet.has(e) && this.m_LRUTrackerSet.delete(e),
      this.m_LRUTrackerSet.add(e),
      this.m_mapThumbnailImages.set(e, t),
      this.m_LRUTrackerSet.size >= this.m_nMaxCacheSize)
    ) {
      let e = this.m_LRUTrackerSet.keys().next().value;
      (this.m_LRUTrackerSet.delete(e), this.m_mapThumbnailImages.delete(e));
    }
  }
  ClearThumbnailData() {
    (this.m_LRUTrackerSet.clear(), this.m_mapThumbnailImages.clear());
  }
  GetThumbnail(e, t, n, r, i, a, o) {
    if (!t) return;
    let s = this.GetKey(e, t, n, r, i, a, o);
    return this.GetThumbnailData(s);
  }
  GetOrQueueThumbnail(t, n, r, i, a, o, s) {
    if (!n) return;
    let c = this.GetKey(t, n, r, i, a, o, s),
      l = this.GetThumbnailData(c);
    if (!l) {
      let u = `thumbnail_${t}_${o}_${s}`;
      (performance.mark(u),
        this.QueueThumbnailRequest(t, n, r, i, a, o, s).then(() => {
          try {
            let t = performance.measure(`measure_${u}`, u);
            t && e.Get().AddPerfMeasure(t.duration);
          } catch (e) {
            F(`CThumbnailCache:: cant measure ${u}, error: ${e}`);
          }
        }),
        (l = this.GetThumbnailData(c)));
    }
    return l;
  }
  QueueThumbnailRequest(e, t, n, r, i, a, o) {
    let s = this.GetKey(e, t, n, r, i, a, o),
      c = this.GetThumbnailData(s);
    if (c && (c.data || c.bIsLoading)) return this.k_AlreadyResolvedOK;
    (this.SetThumbnailData(s, { data: null, bIsLoading: !0 }),
      this.m_PendingInfoPromise &&
        (this.m_rgPendingRequest[0].strRecordingID != t ||
          this.m_rgPendingRequest.length > this.k_nMaxBatchSize) &&
        (this.m_PendingTimer && window.clearTimeout(this.m_PendingTimer),
        this.FlushPendingInfo()),
      (this.m_PendingInfoPromise &&
        this.m_rgPendingRequest[0].strRecordingID == t) ||
        ((this.m_PendingInfoPromise = new Promise(
          (e) => (this.m_PendingInfoResolve = e),
        )),
        (this.m_PendingTimer = window.setTimeout(
          () => this.FlushPendingInfo(),
          this.k_QueueWaitUntilRequestMS,
        ))));
    let l = {
      gameID: e,
      strRecordingID: t,
      strClipID: n,
      nRecordingOffsetMS: r,
      nRecordingStartOffsetMS: i,
      cPxMajorAxis: a,
      bPreciseTiming: o,
    };
    return (
      this.m_rgPendingRequest.some((e) => bo(e, l)) ||
        (this.m_rgPendingRequest.push(l),
        this.m_mapPromises.set(s, this.m_PendingInfoPromise)),
      this.m_PendingInfoPromise
    );
  }
  async FlushPendingInfo() {
    if (this.m_PendingInfoResolve === void 0) return;
    let e = this.m_PendingInfoResolve,
      t = this.m_rgPendingRequest;
    ((this.m_PendingInfoPromise = void 0),
      (this.m_PendingInfoResolve = void 0),
      (this.m_rgPendingRequest = []),
      (this.m_PendingTimer = void 0),
      await this.InternalLoadMultipleThumbnails(t),
      e());
  }
  async InternalLoadMultipleThumbnails(e) {
    e.sort((e, t) => e.nRecordingOffsetMS - t.nRecordingOffsetMS);
    try {
      let t = e.map((e) => e.nRecordingOffsetMS * 1e3),
        n = await It(
          e[0].strRecordingID,
          e[0].strClipID,
          void 0,
          t,
          e[0].cPxMajorAxis,
          e[0].bPreciseTiming,
        );
      re(
        n?.length == t.length,
        `CThumbnailCache.InternalLoadMultipleThumbnails request ${t.length} and got back ${n?.length}`,
      );
      for (let r = 0; r < t.length && r < n?.length; ++r) {
        let t = e[r],
          i = this.GetKey(
            t.gameID,
            t.strRecordingID,
            t.strClipID,
            t.nRecordingOffsetMS,
            t.nRecordingStartOffsetMS,
            t.cPxMajorAxis,
            t.bPreciseTiming,
          ),
          a = n ? n[r].image_data() : null;
        this.SetThumbnailData(i, { data: a, bIsLoading: !1 });
      }
    } catch (t) {
      I(`Failed to load multiple request thumbnails`, t);
      for (let t = 0; t < e.length; ++t) {
        let n = e[t],
          r = this.GetKey(
            n.gameID,
            n.strRecordingID,
            n.strClipID,
            n.nRecordingOffsetMS,
            n.nRecordingStartOffsetMS,
            n.cPxMajorAxis,
            e[0].bPreciseTiming,
          );
        this.SetThumbnailData(r, { data: null, bIsLoading: !1 });
      }
    }
  }
  async LoadThumbnail(e, t, n, r, i, a, o) {
    let s = this.GetKey(e, t, n, r, i, a, o),
      c = this.GetThumbnailData(s);
    return c && c.data
      ? !0
      : (this.m_mapPromises.has(s) ||
          this.m_mapPromises.set(
            s,
            this.InternalLoadThumbnail(e, t, n, r, i, a, o),
          ),
        this.m_mapPromises.get(s));
  }
  async InternalLoadThumbnail(e, t, n, r, i, a, o) {
    let s = this.GetKey(e, t, n, r, i, a, o);
    try {
      let e = await It(t, n, void 0, [r * 1e3], a, o);
      if (e?.length > 0) {
        let t = e ? e[0].image_data() : null;
        return (this.SetThumbnailData(s, { data: t, bIsLoading: !1 }), !0);
      }
      ln(`ThumbnailImage: got empty jpeg ${e.length} list back ${t} @ ${r}`);
    } catch (e) {
      (I(`ThumbnailImage: Fail to load thumbnail ${t} @ ${r} with ${e}`),
        this.SetThumbnailData(s, { data: null, bIsLoading: !1 }));
    }
    return !1;
  }
  static s_Singleton;
  static Get() {
    return ((e.s_Singleton ||= new e()), e.s_Singleton);
  }
};
p([s], xo.prototype, `m_mapThumbnailImages`, void 0);
function So(e) {
  let t = (0, R.useRef)(null),
    n = St(),
    r = Ft(`useThumbnailAsURL`);
  return (
    (0, R.useEffect)(() => {
      if (e && !r?.token?.reason) {
        let r = new Blob([e], { type: `image/jpeg` }),
          i = URL.createObjectURL(r);
        ((t.current = i), n());
      }
      return () => {
        t.current &&= (URL.revokeObjectURL(t.current), void 0);
      };
    }, [r?.token?.reason, e, n]),
    t.current
  );
}
function Co() {
  return xo.Get().GetPerfMeasures();
}
function wo(e, t, n, r, i, a, o) {
  return So(j(() => xo.Get().GetOrQueueThumbnail(e, n, t, r, i, a, o))?.data);
}
var To = 320,
  Eo = R.forwardRef(function (e, t) {
    let { globalMS: n, children: r, imgClassName: i, className: a, ...o } = e,
      s = V(),
      c = s.GetGameID(),
      l = s.GetClipID(),
      u = j(() => s.GetRecordingMode()),
      d = j(() => s.ConvertGlobaOffsetToRecordingAndRelativeOffset(n));
    Tr();
    let f = d?.nRecordingOffsetMS,
      p = wo(c, l, d?.strRecordingID, f, d?.nStartOffsetMS, To, !1),
      [m, h] = (0, R.useState)();
    return (
      (0, R.useEffect)(() => {
        p && h(p);
      }, [p]),
      (0, z.jsxs)(`div`, {
        ref: t,
        className: A(ka, Da[u], a),
        ...o,
        children: [
          (0, z.jsxs)(`div`, {
            className: A(Aa, d?.strRecordingID && !m && `ap-Q4oooopI-`, Da[u]),
            children: [
              (0, z.jsx)(`div`, {
                className: Ma,
                children: (0, z.jsxs)(`div`, {
                  className: Na,
                  children: [
                    d?.strRecordingID
                      ? (0, z.jsx)(`img`, { className: Pa, src: m })
                      : (0, z.jsx)(`div`, {
                          className: Fa,
                          children: w(`#GameRecording_PlayerNoContent`),
                        }),
                    (0, z.jsx)(Do, {}),
                  ],
                }),
              }),
              (0, z.jsx)(`div`, { className: A(Ga), children: r }),
            ],
          }),
          (0, z.jsx)(`div`, { className: A(Ha) }),
        ],
      })
    );
  });
function Do() {
  let e = G(),
    t = j(() => e.GetGameID()),
    n = j(() => e.GetThumbnailComponent()),
    r = j(() => e.GetThumbnailEntry());
  if (!r || n !== U.Highlight) return null;
  if (Zt(r.entry))
    return (0, z.jsx)(Oo, {
      thumbnailEntry: r,
      achievementEntry: r.entry,
      strGameID: t,
    });
  let i = ``,
    a = ``;
  return (
    Qt(r.entry)
      ? (a = w(r.entry.description) || `#GameRecording_UnknownError`)
      : N(r.entry)
        ? ((i = r.entry.title ? r.entry.title : w(`#Marker_UserMarker_Title`)),
          (a = r.entry.description || ``))
        : $t(r.entry) &&
          ((i = r.entry.title || ``), (a = r.entry.description || ``)),
    !i && !a
      ? null
      : (0, z.jsx)(ko, { title: i, description: a, thumbnailEntry: r })
  );
}
function Oo(e) {
  let { strGameID: t, thumbnailEntry: n, achievementEntry: r } = e,
    i = new vt(t),
    a = xt(i.GetAppID(), r.achievement_name);
  return a
    ? (0, z.jsx)(ko, {
        title: a.name ?? ``,
        description: a.description ?? ``,
        thumbnailEntry: n,
      })
    : null;
}
function ko(e) {
  let { title: t, description: n, thumbnailEntry: r } = e;
  return (0, z.jsxs)(`div`, {
    className: Ia,
    children: [
      (0, z.jsxs)(`div`, {
        className: La,
        children: [
          (0, z.jsx)(`div`, {
            className: Ra,
            children: (0, z.jsx)(Wn, {
              entry: r.entry,
              strMarkerIcon: r.strMarkerIcon,
            }),
          }),
          t && (0, z.jsx)(`div`, { className: `_3-l3Dnlgyfo-`, children: t }),
        ],
      }),
      (0, z.jsx)(`div`, {
        className: za,
        children:
          n && (0, z.jsx)(`div`, { className: `_00G4k2IDvBQ-`, children: n }),
      }),
    ],
  });
}
var Ao = R.forwardRef(function (e, t) {
  let { globalPX: n, onMouseEnter: r, onMouseLeave: i } = e,
    a = G(),
    o = j(() => a.ConvertPXOffsetToGlobalMS(n, !1)),
    s = j(() => a.GetThumbnailComponent()),
    c = V(),
    l = j(() => c.GetRecordingMode());
  return (0, z.jsxs)(Eo, {
    className: A(Ja, Da[l], Da[s]),
    globalMS: o,
    ref: t,
    onMouseEnter: r,
    onMouseLeave: i,
    children: [
      (0, z.jsx)(No, { globalMS: o }),
      (0, z.jsx)(jo, { globalMS: o }),
      (0, z.jsxs)(`div`, {
        className: to,
        children: [
          s === U.Highlight
            ? (0, z.jsx)(Po, {})
            : (0, z.jsx)(Fo, { globalPX: n }),
          (0, z.jsx)(Io, { globalMS: o }),
        ],
      }),
    ],
  });
});
function jo(e) {
  let { globalMS: t } = e,
    n = G(),
    r = j(() => n.GetStateDescriptionAtGlobalMS(t));
  return r?.title
    ? (0, z.jsx)(`div`, { className: no, children: r.title })
    : null;
}
function Mo(e, t) {
  return e.priority - t.priority;
}
function No(e) {
  let { globalMS: t } = e,
    { setSelectedMarker: n } = wr(),
    r = G(),
    i = V(),
    a = j(() => r.FindRangeEventsAtGlobalMS(t)),
    o = a.length > 3 ? a.sort(Mo).slice(0, 3) : a,
    s = (e, r) => {
      let a = parseInt(r.duration),
        { nTimelineOffsetMS: o, strTimelineID: s } =
          i.ConvertGlobalOffsetToTimelineRelativeOffset(t),
        c = t - o.valMS + parseInt(r.time),
        [l, u] = i.GetLoader().CreateGlobalRangeForTimeline(s, c, 0, a);
      (i.SetPlaytimeFromGlobalMS(P(l)),
        n?.(r.id, s, l, u),
        D.ReportTrackedAction(`/GameRecording/Tooltip/ClipFromRangeEvent`),
        e.stopPropagation());
    };
  return (0, z.jsx)(z.Fragment, {
    children: o.map((e, t) =>
      (0, z.jsxs)(
        `div`,
        {
          className: go,
          onClick: (t) => s(t, e),
          children: [
            e.icon &&
              (0, z.jsx)(Xn, {
                gameID: i.GetGameID(),
                icon: e.icon,
                className: `zjZlS00iLU4-`,
              }),
            (0, z.jsx)(`div`, { className: Ba, children: e.title }),
            (0, z.jsx)(`div`, {
              className: _o,
              children: x(parseInt(e.duration) / 1e3, !1),
            }),
          ],
        },
        `${e.time}_${t}`,
      ),
    ),
  });
}
function Po() {
  let e = V(),
    t = j(() => e.GetRecordingMode()),
    n = G(),
    r = j(() => n.GetThumbnailEntry());
  if (!r) return null;
  let i = n.GetTimelineOffsetMS(r.strTimelineID),
    a = parseInt(r.entry.time),
    o = an(a - i),
    s = e.MakeRelativeToTimelineEndIfActive(r.strTimelineID, o.valMS),
    c = ``;
  if (on(r.entry)) {
    let e = s + parseInt(r.entry.duration);
    if (s < 0) {
      let t = x(Math.abs(s / 1e3), !1, !1),
        n = x(Math.abs(e / 1e3), !1, !1);
      c = w(`#Duration_WrittenNegation`, t + ` - ` + n);
    } else {
      let t = x(s / 1e3, !1, !1),
        n = x(e / 1e3, !1, !1);
      c = t + ` - ` + n;
    }
  } else c = x(s / 1e3, !1, !0);
  return (0, z.jsx)(`div`, { className: A(Xa, Ya, Da[t]), children: c });
}
function Fo(e) {
  let { globalPX: t } = e,
    n = G(),
    r = j(() => n.ConvertPXToTimelineRelativeMS(t, `end-if-active`));
  return r
    ? (0, z.jsx)(`div`, { className: Xa, children: x(r / 1e3, !1, !0) })
    : null;
}
function Io(e) {
  let { globalMS: t } = e,
    n = G(),
    r = j(() => n.GetGameID()),
    i = j(() => n.GetThumbnailComponent()),
    a = j(() => n.GetThumbnailEntry()),
    o = [
      (0, z.jsx)(Ho, { globalMS: t }, `add_marker`),
      (0, z.jsx)(Uo, { globalMS: t }, `view_clip`),
    ];
  return (
    i == U.Highlight &&
      a &&
      (Qt(a.entry) || Zt(a.entry) || $t(a.entry)
        ? (o = [
            (0, z.jsx)(Lo, { markerInfo: a }, `create_marker_clip`),
            (0, z.jsx)(Ro, { markerInfo: a }, `view_clip`),
          ])
        : nn(a.entry)
          ? (o = [
              (0, z.jsx)(Lo, { markerInfo: a }, `create_marker_clip`),
              (0, z.jsx)(Vo, { entry: a.entry, gameID: r }, `view_screen`),
              (0, z.jsx)(Ro, { markerInfo: a }, `view_clip`),
            ])
          : N(a.entry) &&
            (o = [
              (0, z.jsx)(Bo, { markerInfo: a }, `edit_user`),
              (0, z.jsx)(Lo, { markerInfo: a }, `create_marker_clip`),
              (0, z.jsx)(zo, { markerInfo: a }, `delete_user`),
              (0, z.jsx)(Ro, { markerInfo: a }, `view_clip`),
            ])),
    (0, z.jsx)(`div`, { className: ro, children: o })
  );
}
function Lo(e) {
  let { setSelectedMarker: t } = wr(),
    { markerInfo: n } = e,
    r = V(),
    i = j(() => r.ShouldModeShowClipControls()),
    a = j(() =>
      r.ConvertGlobaOffsetToRecordingAndRelativeOffset(n.nGlobalMS.valMS),
    ),
    o = ct(),
    s = Or();
  return !a?.strRecordingID || !i
    ? null
    : (0, z.jsx)(E, {
        toolTipContent: w(
          o ? `#RecordingState_Clip_LowDiskSpace` : `#TimelineDialog_ClipVideo`,
        ),
        direction: `top`,
        bTopmost: !0,
        children: (0, z.jsx)(`div`, {
          className: A(X, oo),
          onClick: (e) => {
            let i = Bi,
              a = Vi;
            on(n.entry) && ((i = 0), (a = parseInt(n.entry.duration)));
            let [o, c] = r
              .GetLoader()
              .CreateGlobalRangeForTimeline(
                n.strTimelineID,
                n.nGlobalMS.valMS,
                i,
                a,
              );
            (r.SetPlaytimeFromGlobalMS(P(o)),
              t?.(n.entry.id, n.strTimelineID, o, c),
              s(),
              D.ReportTrackedAction(`/GameRecording/Tooltip/ClipFromHighlight`),
              e.stopPropagation());
          },
          children: (0, z.jsx)(Pt, {}),
        }),
      });
}
function Ro(e) {
  let { markerInfo: t } = e,
    n = G(),
    r = j(() => n.ConvertGlobalMSToClipOrNone(t.nGlobalMS.valMS)),
    { onNavigateToClip: i } = K();
  return r
    ? (0, z.jsx)(E, {
        toolTipContent: w(`#TimelineDialog_ViewClip`),
        direction: `top`,
        bTopmost: !0,
        children: (0, z.jsx)(`div`, {
          className: A(X, lo),
          onClick: () => {
            r &&
              (D.ReportTrackedAction(
                `/GameRecording/Tooltip/ViewClip/${t.entry.type}`,
              ),
              i(r.clipID));
          },
          children: (0, z.jsx)(Ge, {}),
        }),
      })
    : null;
}
function zo(e) {
  let { markerInfo: t } = e,
    n = V(),
    r = G();
  return (0, z.jsx)(E, {
    toolTipContent: w(`#Marker_Action_Delete`),
    direction: `top`,
    bTopmost: !0,
    children: (0, z.jsx)(`div`, {
      className: A(X, co),
      onClick: (e) => {
        N(t.entry) &&
          (D.ReportTrackedAction(
            `/GameRecording/Marker/Delete/${t.entry.type}`,
          ),
          n.RemoveUserMarker(t.strTimelineID, t.entry.id),
          r.SetThumbnailComponent(null));
      },
      children: (0, z.jsx)(ut, {}),
    }),
  });
}
function Bo(e) {
  let { markerInfo: t } = e,
    n = V(),
    r = Er();
  return (0, z.jsx)(E, {
    toolTipContent: w(`#Marker_Action_Edit`),
    direction: `top`,
    bTopmost: !0,
    children: (0, z.jsx)(`div`, {
      className: A(X, so),
      onClick: (e) => {
        if (!N(t.entry)) return;
        D.ReportTrackedAction(`/GameRecording/Marker/Edit/${t.entry.type}`);
        let i = (0, z.jsx)(gi, {
          entry: t.entry,
          playbackCoordinator: n,
          fnClearSelection: r,
          strTimelineID: t.strTimelineID,
        });
        (Te(i, O(e)), e.stopPropagation(), e.preventDefault());
      },
      children: (0, z.jsx)(qt, {}),
    }),
  });
}
function Vo(e) {
  let { entry: t, gameID: n } = e,
    r = t.handle,
    { onNavigateToScreenshot: i } = K();
  return (0, z.jsx)(E, {
    toolTipContent: w(`#TimelineDialog_ViewScreenshot`),
    direction: `top`,
    bTopmost: !0,
    children: (0, z.jsx)(`div`, {
      className: A(X, uo),
      onClick: () => {
        r &&
          (D.ReportTrackedAction(`/GameRecording/Tooltip/Screenshot`), i(n, r));
      },
      children: (0, z.jsx)(tt, {}),
    }),
  });
}
function Ho(e) {
  let { globalMS: t } = e,
    n = V();
  return j(() => n.ConvertGlobaOffsetToRecordingAndRelativeOffset(t))
    ?.strRecordingID
    ? (0, z.jsx)(E, {
        toolTipContent: w(`#TimelineDialog_AddMarker`),
        direction: `top`,
        children: (0, z.jsx)(`div`, {
          className: A(X, io),
          onClick: () => {
            (n.AddUserMarkerAtGlobalMS(
              P(t),
              `/GameRecording/AddMarker/Thumbnail`,
              null,
            ),
              n.SetPlaytimeFromGlobalMS(P(t)));
          },
          children: (0, z.jsx)(Ue, {}),
        }),
      })
    : null;
}
function Uo(e) {
  let { globalMS: t } = e,
    n = G(),
    r = j(() => n.ConvertGlobalMSToClipOrNone(t)),
    { onNavigateToClip: i } = K();
  return r
    ? (0, z.jsx)(E, {
        toolTipContent: w(`#TimelineDialog_ViewClip`),
        direction: `top`,
        children: (0, z.jsx)(`div`, {
          className: A(X, ao),
          onClick: () => {
            r &&
              (D.ReportTrackedAction(
                `/GameRecording/Tooltip/ViewClip/timeline`,
              ),
              i(r.clipID));
          },
          children: (0, z.jsx)(Ge, {}),
        }),
      })
    : null;
}
var Wo = R.memo(function (e) {
    let t = Y(),
      n = Ai(),
      r = G(),
      i = V(),
      a = Ni(),
      o = (0, R.useCallback)(
        (e) => {
          if (!n) return;
          let t = e.currentTarget.getBoundingClientRect(),
            a = S(e.clientX - t.x, 0, t.width),
            o = r.ConvertPXOffsetToGlobalMS(a, !1);
          o && i.SetPlaytimeFromGlobalMS(P(o), void 0, void 0, !0);
        },
        [n, i, r],
      ),
      s = (0, R.useCallback)(
        (e) => {
          if (!n) return;
          let t = e.currentTarget.getBoundingClientRect(),
            i = S(e.clientX - t.x, 0, t.width),
            o = r.ConvertPXOffsetToGlobalMS(i, !1);
          o &&
            (a(e, P(o), !1, {
              bDisableMouseOverlay: !0,
              bForcePopup: !0,
              bAlwaysOnTop: !0,
            }),
            e.preventDefault(),
            e.stopPropagation());
        },
        [n, r, a],
      );
    return (
      Mi(`click`, o),
      Mi(`contextmenu`, s),
      (0, z.jsx)(Go, { globalMouseXPX: t.globalMouseXPX.valPX || 0 })
    );
  }),
  Go = R.memo(function (e) {
    let { globalMouseXPX: t } = e,
      n = ki(),
      r = G(),
      i = Ai(),
      a = j(() => {
        if (r.GetThumbnailComponent()) return r.GetThumbnailPosition();
      }),
      [o, s] = (0, R.useState)(),
      [c, l] = (0, R.useState)();
    return (
      (0, R.useEffect)(() => {
        isNaN(a) ? !c && n && s(t) : s(a);
      }, [c, n, i, t, a]),
      (0, z.jsx)(`div`, {
        className: ca,
        style: { transform: `translateX( calc(${o}px - 50%))` },
        children: (0, z.jsx)(Ko, {
          globalPX: o,
          setInteractingWithThumbnail: l,
          bInteractingWithThumbnail: c,
        }),
      })
    );
  });
function Ko(e) {
  let {
      globalPX: t,
      setInteractingWithThumbnail: n,
      bInteractingWithThumbnail: r,
    } = e,
    i = G(),
    a = V(),
    o = j(() => a.GetRecordingMode() === `Overlay`),
    s = j(() => i.ConvertPXOffsetToGlobalMS(t, !1)),
    c = j(() => i.GetTimelineParentCtnRef()),
    l = (0, R.useRef)(void 0),
    u = (0, R.useRef)(void 0),
    d = (0, R.useRef)(void 0),
    f = j(() => i.GetThumbnailComponent()),
    p = Ai(),
    m = Me({
      toolTipContent: (0, z.jsx)(Ao, {
        globalPX: t,
        ref: l,
        onMouseEnter: () => n(!0),
        onMouseLeave: (e) => n(!1),
      }),
      direction: o ? `bottom` : `top`,
      nDelayShowMS: 0,
      nBodyDistance: 0,
      nAllowOffscreenPx: 0,
    }),
    { setHovered: h, setTarget: g } = m.stateHandlers,
    _ = (0, R.useCallback)(() => {
      (h(!1),
        n(!1),
        d.current && d.current(),
        (d.current = null),
        i.GetAutoScrollPaused() && i.SetAutoScrollPauseTimeout(),
        i.SetThumbnailComponent(null));
    }, [n, h, i]),
    v = (0, R.useCallback)(
      (e, t) => {
        if (!u.current || !l.current) return;
        let n = u.current.getBoundingClientRect(),
          r = n.left,
          i = n.right,
          a = n.top,
          s = n.bottom;
        if (l.current) {
          let e = l.current.getBoundingClientRect();
          o ? (s = e.bottom) : (a = e.top);
        }
        (e <= r || e >= i || t <= a || t >= s) && _();
      },
      [o, _],
    ),
    y = (0, R.useCallback)(
      (e) => {
        let t = i.GetThumbnailComponent();
        (t && t !== U.Highlight) || v(e.clientX, e.clientY);
      },
      [v, i],
    ),
    ee = (0, R.useCallback)(
      (e) => {
        v(e.clientX, e.clientY);
      },
      [v],
    );
  (Mi(
    `mouseenter`,
    (0, R.useCallback)(() => {
      (h(!0), g(u.current));
      let e = Ot(u.current);
      e &&
        !d.current &&
        (e.addEventListener(`mousemove`, y),
        e.addEventListener(`mouseup`, ee),
        (d.current = () => {
          (e.removeEventListener(`mousemove`, y),
            e.removeEventListener(`mouseup`, ee));
        }));
    }, [y, ee, h, g]),
  ),
    (0, R.useEffect)(() => {
      let e = (e) => {
        let t = i.GetThumbnailComponent();
        (t && t === U.Playhead) ||
          t === U.RangeLeft ||
          t === U.RangeRight ||
          (l.current && !Et(l.current, e.relatedTarget) && _());
      };
      return (
        c && c.addEventListener(`mouseleave`, e),
        () => c && c.removeEventListener(`mouseleave`, e)
      );
    }, [_, c, i]),
    (0, R.useEffect)(() => _, [_]));
  let b = (p || r) && s && !f;
  return (0, z.jsxs)(`div`, {
    ref: u,
    className: la,
    children: [
      (0, z.jsx)(Ca, { className: A(ua, b && `_52Luj95k6TU-`) }),
      !!s && m.tooltip,
    ],
  });
}
var qo = `hmHZe5aDrq8-`,
  Jo = `VE-8JY5P2Qo-`,
  Yo = `bvHF-aIx6oc-`,
  Xo = `EFP0lnhKJeo-`,
  Zo = `MkCCKg4MUdU-`,
  Qo = `_1xOfco9qmxw-`,
  $o = `fXvcT3pVP7Q-`,
  es = `_2ytscAh4R6M-`,
  ts = 500,
  ns = (0, R.memo)(function () {
    let [e, t] = (0, R.useState)(`none`),
      n = xr(),
      r = yr(),
      i = br();
    return !n || !r || !i
      ? null
      : (0, z.jsx)(`div`, {
          className: qo,
          children: (0, z.jsx)(rs, {
            activeControlState: e,
            setActiveControlState: t,
          }),
        });
  }),
  rs = (0, R.memo)(function (e) {
    let { activeControlState: t, setActiveControlState: n } = e,
      [r, i] = (0, R.useState)(),
      [a, o] = (0, R.useState)(),
      s = yr(),
      c = br(),
      l = G(),
      u = j(() => l.ConvertGlobalMSToGlobalPXOffset(s.valMS)),
      d = j(() => l.ConvertGlobalMSToGlobalPXOffset(c.valMS)),
      f = (0, R.useCallback)(
        (e) => {
          (i(e), l.SetAutoScrollPauseTimeout());
        },
        [l],
      ),
      p = (0, R.useCallback)(
        (e) => {
          (o(e), l.SetAutoScrollPauseTimeout());
        },
        [l],
      ),
      m = (0, R.useCallback)(
        (e) => {
          t === `none` && e.stopPropagation();
        },
        [t],
      ),
      h = (0, R.useCallback)(
        (e) => {
          t === `none` && e.stopPropagation();
        },
        [t],
      );
    return (0, z.jsx)(`div`, {
      className: A(Jo, t !== `none` && `r9kdAFASyBY-`),
      onMouseOver: m,
      onMouseOut: h,
      onFocus: m,
      onBlur: h,
      children: (0, z.jsxs)(`div`, {
        className: Qo,
        children: [
          (0, z.jsx)(os, {
            isActive: t === `left`,
            setControlState: n,
            setRangeControlPX: f,
            pxOffset: r,
          }),
          (0, z.jsx)(fs, {
            startOffsetPX: (t === `left` && r) || u,
            endOffsetPX: (t === `right` && a) || d,
            className: Xo,
          }),
          (0, z.jsx)(cs, {
            isActive: t === `right`,
            setControlState: n,
            setRangeControlPX: p,
            pxOffset: a,
          }),
        ],
      }),
    });
  });
function is(e, t, n) {
  let r = t.GetVisualWindowStartPX() - t.GetTimelineMarginWidth(),
    i = r + t.GetVisualWidth(),
    a = Math.max(0, r + 3),
    o = Math.min(t.GetScrollableWidthPX(), i - 3);
  n(S(e, a, o));
}
function as(e, t, n, r, i, a) {
  let o = (0, R.useRef)(void 0),
    s = (0, R.useRef)(!1),
    c = (0, R.useRef)(void 0),
    l = (0, R.useRef)(void 0),
    u = j(() => t.GetScrollableWidthPX()),
    d = j(() => t.GetScrollWindowWidth());
  (0, R.useEffect)(
    () => () => {
      c.current &&
        (cancelAnimationFrame(c.current),
        (c.current = null),
        (l.current = null));
    },
    [],
  );
  let f = R.useCallback(
    (e, t, n, r, i) => {
      if (i(t))
        (a(S(t.GetVisualWindowStartPX() + n, 0, t.GetScrollableWidthPX())),
          cancelAnimationFrame(c.current),
          (c.current = null),
          (l.current = null));
      else {
        if (
          ((c.current &&= requestAnimationFrame((e) => f(e, t, n, r, i))),
          l.current)
        ) {
          let n = ((e - l.current) / ts) * r;
          (t.ScrollBy(n), a((e) => S(e + n, 0, t.GetScrollableWidthPX())));
        }
        l.current = e;
      }
    },
    [a],
  );
  (0, R.useEffect)(() => {
    c.current &&
      (cancelAnimationFrame(c.current), (c.current = null), (l.current = null));
    let p = d * (1 - Sc),
      m = d * Sc,
      h = t.ConvertGlobalMSToGlobalPXOffset(n.valMS),
      g = t.ConvertGlobalMSToScrollWindowPXOffset(n.valMS);
    if (r.valPX > h) (a(h), i(`right`), t.SetThumbnailComponent(U.RangeRight));
    else {
      if (e.valPX < m && !t.BReachedMinScroll()) {
        if (e.valPX > o.current) s.current = !0;
        else if (e.valPX < o.current || !s.current) {
          let n = Math.min(m, g),
            r = e.valPX - n,
            i = S(Math.abs(r / n), 0, 1) * r;
          ((c.current = requestAnimationFrame((n) =>
            f(n, t, e.valPX, i, t.BReachedMinScroll),
          )),
            (s.current = !1));
        }
        is(r.valPX, t, a);
      } else if (e.valPX > p && g > p && !t.BReachedMaxScroll()) {
        if (e.valPX < o.current) s.current = !0;
        else if (e.valPX > o.current || !s.current) {
          let r = (e) => {
              let t = e.ConvertGlobalMSToScrollWindowPXOffset(n.valMS);
              return e.BReachedMaxScroll() || t <= p;
            },
            i = e.valPX - p,
            a = S(Math.abs(i / (d - p)), 0, 1) * i;
          ((c.current = requestAnimationFrame((n) => f(n, t, e.valPX, a, r))),
            (s.current = !1));
        }
        is(r.valPX, t, a);
      } else a(S(r.valPX, 0, u));
      o.current = e.valPX;
    }
  }, [r.valPX, n.valMS, e.valPX, i, t, a, u, f, d]);
}
var os = (0, R.memo)(function (e) {
  let {
      isActive: t,
      setControlState: n,
      setRangeControlPX: r,
      pxOffset: i,
    } = e,
    a = yr();
  return t
    ? (0, z.jsx)(ss, { setControlState: n, setRangeControlPX: r, pxOffset: i })
    : (0, z.jsx)(ds, {
        offsetMS: a.valMS,
        direction: `left`,
        setControlState: n,
        setRangeControlPX: r,
      });
});
function ss(e) {
  let { setControlState: t, setRangeControlPX: n, pxOffset: r } = e,
    i = Sr(),
    a = br(),
    o = G(),
    s = Di();
  return (
    as(Oi(), o, a, s, t, n),
    (0, R.useEffect)(() => {
      isNaN(r) ||
        (o.SetThumbnailPosition(r), i(5, P(o.ConvertPXOffsetToGlobalMS(r))));
    }, [r, i, o]),
    (0, z.jsx)(ps, { offsetPX: r, direction: `left` })
  );
}
var cs = (0, R.memo)(function (e) {
  let {
      isActive: t,
      setControlState: n,
      setRangeControlPX: r,
      pxOffset: i,
    } = e,
    a = br();
  return t
    ? (0, z.jsx)(ls, { setControlState: n, setRangeControlPX: r, pxOffset: i })
    : (0, z.jsx)(ds, {
        offsetMS: a.valMS,
        direction: `right`,
        setControlState: n,
        setRangeControlPX: r,
      });
});
function ls(e) {
  let { setControlState: t, setRangeControlPX: n, pxOffset: r } = e,
    i = Cr(),
    a = yr(),
    o = G(),
    s = Di();
  return (
    us(Oi(), o, a, s, t, n),
    (0, R.useEffect)(() => {
      isNaN(r) ||
        (o.SetThumbnailPosition(r), i(5, P(o.ConvertPXOffsetToGlobalMS(r))));
    }, [r, i, o]),
    (0, z.jsx)(ps, { offsetPX: r, direction: `right` })
  );
}
function us(e, t, n, r, i, a) {
  let o = (0, R.useRef)(void 0),
    s = (0, R.useRef)(!1),
    c = (0, R.useRef)(void 0),
    l = (0, R.useRef)(void 0),
    u = j(() => t.GetScrollableWidthPX()),
    d = j(() => t.GetScrollWindowWidth());
  (0, R.useEffect)(
    () => () => {
      c.current &&
        (cancelAnimationFrame(c.current),
        (c.current = null),
        (l.current = null));
    },
    [],
  );
  let f = R.useCallback(
    (e, t, n, r, i) => {
      if (i(t))
        (a(S(t.GetVisualWindowStartPX() + n, 0, t.GetScrollableWidthPX())),
          cancelAnimationFrame(c.current),
          (c.current = null),
          (l.current = null));
      else {
        if (
          ((c.current &&= requestAnimationFrame((e) => f(e, t, n, r, i))),
          l.current)
        ) {
          let n = ((e - l.current) / ts) * r;
          (t.ScrollBy(n), a((e) => S(e + n, 0, t.GetScrollableWidthPX())));
        }
        l.current = e;
      }
    },
    [a],
  );
  (0, R.useEffect)(() => {
    c.current &&
      (cancelAnimationFrame(c.current), (c.current = null), (l.current = null));
    let p = d * (1 - Sc),
      m = d * Sc,
      h = t.ConvertGlobalMSToGlobalPXOffset(n.valMS),
      g = t.ConvertGlobalMSToScrollWindowPXOffset(n.valMS);
    if (r.valPX < h) (a(h), i(`left`), t.SetThumbnailComponent(U.RangeLeft));
    else {
      if (e.valPX > p && !t.BReachedMaxScroll()) {
        if (e.valPX < o.current) s.current = !0;
        else if (e.valPX > o.current || !s.current) {
          let n = Math.max(p, g),
            r = e.valPX - n,
            i = S(Math.abs(r / (d - n)), 0, 1) * r;
          ((c.current = requestAnimationFrame((n) =>
            f(n, t, e.valPX, i, t.BReachedMaxScroll),
          )),
            (s.current = !1));
        }
        is(r.valPX, t, a);
      } else if (
        e.valPX < m &&
        g < m &&
        e.valPX <= o.current &&
        !t.BReachedMinScroll()
      ) {
        if (e.valPX > o.current) s.current = !0;
        else if (e.valPX < o.current || !s.current) {
          let r = e.valPX - m,
            i = S(Math.abs(r / m), 0, 1) * r,
            a = (e) =>
              e.ConvertGlobalMSToScrollWindowPXOffset(n.valMS) > m ||
              e.BReachedMinScroll();
          ((c.current = requestAnimationFrame((n) => f(n, t, e.valPX, i, a))),
            (s.current = !1));
        }
        is(r.valPX, t, a);
      } else a(S(r.valPX, 0, u));
      o.current = e.valPX;
    }
  }, [n.valMS, e.valPX, i, t, a, u, d, r.valPX, f]);
}
function ds(e) {
  let {
      offsetMS: t,
      direction: n,
      setControlState: r,
      setRangeControlPX: i,
    } = e,
    a = G(),
    o = j(() => a.ConvertGlobalMSToGlobalPXOffset(t));
  (0, R.useEffect)(
    () => (
      i(void 0),
      () => {
        i(o);
      }
    ),
    [o, i],
  );
  let s = (0, R.useCallback)(
      (e) => {
        let t = O(e),
          i,
          o,
          s = () => {
            (r(n),
              a.SetThumbnailComponent(
                n === `left` ? U.RangeLeft : U.RangeRight,
              ),
              i());
          };
        (t.addEventListener(`mousemove`, s),
          (i = () => t.removeEventListener(`mousemove`, s)));
        let c = () => {
          (r(`none`), a.SetThumbnailComponent(null), i(), o());
        };
        (t.addEventListener(`mouseup`, c),
          (o = () => t.removeEventListener(`mouseup`, c)));
      },
      [n, r, a],
    ),
    c = (e) => {
      a.SetThumbnailComponent(n === `left` ? U.RangeLeft : U.RangeRight);
    },
    l = (e) => {
      a.SetThumbnailComponent(null);
    };
  return (0, z.jsx)(`div`, {
    className: Yo,
    onMouseDown: s,
    onMouseOver: c,
    onFocus: c,
    onMouseOut: l,
    onBlur: l,
    children: (0, z.jsx)(ps, { offsetPX: o, direction: n }),
  });
}
var fs = (0, R.memo)(function (e) {
    let { startOffsetPX: t, endOffsetPX: n, className: r } = e;
    if (isNaN(t) || isNaN(n)) return null;
    let i = { width: n - t || 0, transform: `translateX(${t}px)` };
    return (0, z.jsx)(`div`, { className: A(es, r), style: i });
  }),
  ps = (0, R.memo)(function (e) {
    let { direction: t, offsetPX: n } = e,
      r = { transform: `translateX( calc( ${n}px - 50%) )` },
      i = G(),
      a = j(() => i.GetThumbnailComponent() === U.Playhead);
    return (0, z.jsx)(`div`, {
      style: r,
      className: A($o),
      children: (0, z.jsx)(`div`, {
        className: A(Zo, t === `left` && void 0, a && `o23F9bJf68E-`),
        children: (0, z.jsx)(ms, { innerFill: `#171d25`, direction: t }),
      }),
    });
  });
function ms(e) {
  return (0, z.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 3 36`,
    fill: `none`,
    style: { transform: `rotate(${e.direction === `right` ? 180 : 0}deg)` },
    children: [
      (0, z.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 0)`,
      }),
      (0, z.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 10)`,
      }),
      (0, z.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 20)`,
      }),
      (0, z.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 30)`,
      }),
    ],
  });
}
var hs = `peJfRpya9Fs-`,
  gs = 100,
  _s = R.memo(function (e) {
    let t = G(),
      n = j(() => t.GetVisibleWindowRelativeTimelines()),
      r = V().GetRecordingMode(),
      i = [],
      a = ``;
    for (let e of n) {
      let n = t.GetTimeRecorded(e.timelineID),
        r = le(n);
      r != a && (i.push({ timeline: e, strLabel: r }), (a = r));
    }
    for (let e = i.length - 2; e >= 0; e--) {
      let t = i[e];
      i[e + 1].timeline.nVisibleStartPX - t.timeline.nVisibleStartPX >= gs ||
        i.splice(e, 1);
    }
    return (0, z.jsx)(z.Fragment, {
      children: i.map((e) =>
        (0, z.jsx)(
          vs,
          {
            startPX: e.timeline.nVisibleStartPX,
            label: e.strLabel,
            recordingMode: r,
          },
          e.timeline.timelineID,
        ),
      ),
    });
  });
function vs(e) {
  let { label: t, startPX: n, recordingMode: r } = e,
    i = r == kn.Overlay;
  return (0, z.jsx)(`div`, {
    className: A(hs, i && `r-oc0eIT1Lw-`),
    style: { transform: `translateX(${n}px)` },
    children: t,
  });
}
var ys = `rpb9NP30tgc-`,
  bs = `JCH5UEpUzxo-`,
  xs = (0, R.memo)(function (e) {
    let t = G(),
      n = j(() => t.GetVisibleRecordings());
    return (0, z.jsx)(z.Fragment, {
      children: n.map((e) =>
        (0, z.jsx)(
          Ss,
          {
            startPX: e.nStartPX,
            endPX: e.nEndPX,
            isActive: e.bIsActive,
            recordingType: e.recordingType,
          },
          e.recordingID,
        ),
      ),
    });
  });
function Ss(e) {
  let { isActive: t, endPX: n, startPX: r, recordingType: i } = e,
    a = { width: n - r || 0, transform: `translateX(${r}px)` },
    o = Tr(),
    s = i === 4,
    c = i === 2;
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(`div`, {
        className: A(
          ys,
          s && `xg0PXeGNr6o-`,
          c && `DlYcvPsKhnQ-`,
          o && `pbiBKOrHy28-`,
        ),
        style: a,
      }),
      t && (0, z.jsx)(Cs, { endPX: n }),
    ],
  });
}
function Cs(e) {
  let { endPX: t } = e,
    n = V(),
    r = G(),
    i = j(() => n.GetRecordingMode() === `Overlay`),
    a = On(n.GetGameID()),
    o = j(() => n.GetIsLiveEdge() && !n.GetHidePlayer()),
    s = j(() => {
      let e = n.GetLiveEdgeBufferWindowStartMS();
      return r.ConvertGlobalMSToGlobalPXOffset(e.valMS);
    });
  if (!i || a !== Dn.BackgroundRecording) return null;
  let c = { width: t - s || 0, transform: `translateX(${s}px)` };
  return (0, z.jsx)(`div`, { className: A(bs, o && `ObPDU8jrJGI-`), style: c });
}
var ws = `etyWD-mczjA-`,
  Ts = (0, R.memo)(function (e) {
    let t = G(),
      n = j(() => t.GetVisibleClips());
    return (0, z.jsx)(z.Fragment, {
      children: n.map((e) =>
        (0, z.jsx)(
          Es,
          { startPX: e.pxClipStart, endPX: e.pxClipEnd },
          e.clipID,
        ),
      ),
    });
  }),
  Es = (0, R.memo)(function (e) {
    let { endPX: t, startPX: n } = e,
      r = { width: t - n || 0, transform: `translateX(${n}px)` };
    return (0, z.jsx)(`div`, { className: ws, style: r });
  }),
  Ds = `r7Pr1Bv8r30-`,
  Os = `V3xSKJyklXQ-`,
  ks = `nT24tktVM-s-`,
  As = `a9purv61CPI-`,
  js = `O-J-KNmIhN8-`,
  Ms = `lMpHX8arl8s-`,
  Ns = `hMUPhnvIP90-`,
  Ps = `M5wPU20T76E-`,
  Fs = `H3EDFnaZgvI-`,
  Is = `iAKyxjjcF38-`,
  Ls = `pEzP-JpCCcQ-`,
  Rs = `hBDI48p9XRY-`,
  zs = `PZt-x5Tu8rg-`,
  Bs = `_57e4oWLUba0-`,
  Vs = `diJRy3nTnTM-`;
function Hs() {
  let e = On(V().GetGameID());
  return e === Dn.NotRecording || e === Dn.NotRunning
    ? null
    : (0, z.jsx)(Us, {});
}
function Us(e) {
  let t = V(),
    n = j(() => t.GetIsLiveEdge() && !t.GetHidePlayer()),
    r = R.useCallback(() => {
      (t.SetHidePlayer(!1), t.GetGameRecordingVideo().Play());
      let e = t.GetLiveEdgeMS();
      (t.SetPlaytimeFromGlobalMS(e), t.FocusGlobalMS(e));
    }, [t]);
  return (0, z.jsx)(E, {
    className: zs,
    toolTipContent: w(n ? `#Playback_AtLatest` : `#Playback_JumpToLatest`),
    direction: `bottom`,
    children: (0, z.jsx)(dt, {
      onClick: r,
      className: A(Bs, n && `FuL7350j26I-`),
      children: (0, z.jsx)(Ve, { className: A(Vs) }),
    }),
  });
}
var Ws = (0, R.forwardRef)(function (e, t) {
    let n = G();
    return j(() => !n.BEmpty())
      ? (0, z.jsx)(Ks, { ...e, timelineView: n, ref: t })
      : (0, z.jsx)(Gs, { ref: t });
  }),
  Gs = (0, R.forwardRef)(function (e, t) {
    return (0, z.jsx)(`div`, { ref: t, className: A(Os, e.className) });
  }),
  Ks = (0, R.forwardRef)(function (e, t) {
    let n = V(),
      { children: r, className: i, timelineView: a, disableZoom: o } = e,
      [s, c] = (0, R.useState)(),
      l = R.useCallback(
        (e) => {
          let t = e.target.getBoundingClientRect();
          (a.SetScrollWindowOffset(t.x), a.SetScrollWindowWidth(t.width), c(t));
        },
        [a],
      ),
      u = te(l),
      d = R.useCallback(
        (e) => {
          if (e.ctrlKey && !o) {
            let t = s ? (e.clientX - s.x) / s.width : 0.5;
            e.deltaY > 0
              ? a.ZoomOut(e.deltaY / 100, t)
              : a.ZoomIn(-e.deltaY / 100, t);
          } else a.ScrollBy(e.deltaY);
        },
        [o, s, a],
      );
    return (
      nc(n, a),
      (0, z.jsxs)(`div`, {
        ref: t,
        onWheel: d,
        onMouseOver: () => a.SetAutoScrollPaused(!0),
        onFocus: () => {},
        onMouseLeave: () => a.SetAutoScrollPauseTimeout(),
        children: [
          (0, z.jsxs)(`div`, {
            className: ks,
            children: [
              (0, z.jsxs)(`div`, {
                ref: u,
                className: A(Ds, i),
                children: [r, (0, z.jsx)(qs, { timelineView: a })],
              }),
              n.GetRecordingMode() === kn.Overlay && (0, z.jsx)(Hs, {}),
            ],
          }),
          (0, z.jsx)(`div`, {
            className: Ns,
            children: !n.GetGamepadMode() && (0, z.jsx)(Js, {}),
          }),
        ],
      })
    );
  });
function qs(e) {
  let { timelineView: t } = e,
    n = j(() => t.GetVisualWindowStartPX()),
    r = j(() => t.BReachedMaxScroll());
  return (0, z.jsxs)(`div`, {
    className: As,
    children: [
      (0, z.jsx)(`div`, { className: A(js, n === 0 && `geyoRt0NNcM-`) }),
      (0, z.jsx)(`div`, { className: A(Ms, r && `geyoRt0NNcM-`) }),
    ],
  });
}
function Js() {
  let [e, t] = (0, R.useState)({ scrollBarWidth: 0, scrollBarXOffset: 0 }),
    n = R.useCallback((e) => {
      let n = e.target.getBoundingClientRect();
      t({ scrollBarWidth: n.width, scrollBarXOffset: n.x });
    }, []),
    r = G(),
    i = j(() => r.GetScrollableWidthPX() + 2 * r.GetTimelineMarginWidth()),
    a = j(() => r.GetVisualWidth()),
    o = (0, R.useMemo)(
      () => (a * e.scrollBarWidth) / i || 0,
      [a, e.scrollBarWidth, i],
    ),
    s = te(n);
  return (0, z.jsxs)(`div`, {
    className: A(
      Ps,
      Math.round(o) === Math.round(e.scrollBarWidth) && `cyfpsKb1Pow-`,
    ),
    ref: s,
    children: [
      (0, z.jsx)(Ys, { timelineView: r, scrollSize: e }),
      (0, z.jsx)(ec, {
        scrollSize: e,
        timelineView: r,
        timelineWidth: i,
        thumbWidth: o,
      }),
    ],
  });
}
function Ys(e) {
  let { timelineView: t, scrollSize: n } = e,
    r = V(),
    i = Xs(t, n),
    a = j(() => t.GetTimelineMarginWidth()),
    o = j(() => t.GetScrollableWidthPX()),
    s = (0, R.useCallback)(
      (e) => {
        let t = e + a;
        return S((t * n.scrollBarWidth) / o, 0, n.scrollBarWidth);
      },
      [n.scrollBarWidth, a, o],
    );
  return (0, z.jsxs)(`div`, {
    className: Fs,
    ...i,
    children: [
      (0, z.jsx)(Zs, {
        timelineView: t,
        playbackCoordinator: r,
        fnConvertGlobalPXToTrackPX: s,
        scrollBarWidth: n.scrollBarWidth,
      }),
      (0, z.jsx)($s, { timelineView: t, fnConvertGlobalPXToTrackPX: s }),
    ],
  });
}
function Xs(e, t) {
  let n = (0, R.useRef)(void 0),
    r = (0, R.useRef)(void 0),
    i = j(() => e.GetScrollableWidthPX()),
    a = (0, R.useCallback)(
      (e) => en((i * e) / t.scrollBarWidth),
      [t.scrollBarWidth, i],
    ),
    o = (0, R.useCallback)(() => {
      if (!n.current) return;
      let t = e.GetScrollWindowWidth(),
        i = e.GetVisualWindowStartPX() + t / 2;
      if (n.current.valPX > i - t * 0.1 && n.current.valPX < i + t * 0.1)
        return;
      let a = e.GetScrollableWidthPX() * 0.005,
        s = n.current.valPX - i;
      if (Math.abs(s) > a) {
        let t = s > 0 ? a : -a;
        (e.ScrollToOffsetCentered(i + t),
          (r.current = requestAnimationFrame(() => o())));
      } else e.ScrollToOffsetCentered(n.current.valPX);
    }, [e]),
    s = (0, R.useCallback)(
      (e) => {
        ((n.current = a(e.clientX - t.scrollBarXOffset)),
          (r.current = requestAnimationFrame(() => o())));
      },
      [a, o, t.scrollBarXOffset],
    ),
    c = (0, R.useCallback)(() => {
      r.current && cancelAnimationFrame(r.current);
    }, []),
    l = (0, R.useCallback)(
      (e) => {
        n.current = a(e.clientX - t.scrollBarXOffset);
      },
      [a, t.scrollBarXOffset],
    );
  return (
    (0, R.useEffect)(
      () => () => {
        r.current && cancelAnimationFrame(r.current);
      },
      [],
    ),
    { onMouseDown: s, onMouseMove: l, onMouseUp: c, onMouseLeave: c }
  );
}
function Zs(e) {
  let {
      timelineView: t,
      playbackCoordinator: n,
      fnConvertGlobalPXToTrackPX: r,
      scrollBarWidth: i,
    } = e,
    a = j(() => n.GetHidePlayer()),
    o = j(() => {
      let e = n.GetGlobalMSPlaytime();
      if (e && t.BInitialized()) {
        let n = Math.floor(t.ConvertGlobalMSToGlobalPXOffset(e.valMS));
        return r(n);
      }
      return null;
    });
  return o
    ? (0, z.jsx)(`div`, {
        className: Is,
        onClick: () => {
          let e = n.GetGlobalMSPlaytime();
          (a && (e = n.GetLiveEdgeMS()), t.ScrollToCenteredGlobalMS(e.valMS));
        },
        style: { transform: `translateX(${a ? i : o}px)` },
        children: (0, z.jsx)(Qs, {}),
      })
    : null;
}
function Qs() {
  return (0, z.jsx)(`svg`, {
    width: `52`,
    height: `31`,
    viewBox: `0 0 52 31`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, z.jsx)(`path`, {
      d: `M26 31L51.1147 0.25H0.885263L26 31Z`,
      fill: `#D9D9D9`,
    }),
  });
}
function $s(e) {
  let { timelineView: t, fnConvertGlobalPXToTrackPX: n } = e,
    r = Tr(),
    i = vr(),
    a = j(() => {
      if (r && t.BInitialized()) {
        let e = Math.floor(
            t.ConvertGlobalMSToGlobalPXOffset(i.nGlobalStartMS.valMS),
          ),
          r = Math.floor(
            t.ConvertGlobalMSToGlobalPXOffset(i.nGlobalEndMS.valMS),
          );
        if (!isNaN(e) && !isNaN(r))
          return { rangeStartPX: n(e), rangeEndPX: n(r) };
      }
      return null;
    });
  return a
    ? (0, z.jsx)(`div`, {
        className: Ls,
        onClick: () => {
          t.ScrollToCenteredGlobalMS(i.nGlobalStartMS.valMS);
        },
        style: {
          width: a.rangeEndPX - a.rangeStartPX,
          transform: `translateX(${a.rangeStartPX}px)`,
        },
      })
    : null;
}
function ec(e) {
  let { scrollSize: t, timelineWidth: n, thumbWidth: r, timelineView: i } = e,
    { thumbPositionPX: a, onMouseDown: o, bHiglightThumb: s } = tc(t, n, r, i);
  return (0, z.jsx)(`div`, {
    className: A(Rs, s && `jBCmf-dRAeA-`),
    style: { width: r, transform: `translateX(${a}px)` },
    onMouseDown: o,
  });
}
function tc(e, t, n, r) {
  let [i, a] = (0, R.useState)(!1),
    [o, s] = (0, R.useState)(0),
    c = j(() => {
      let i = r.BInitialized(),
        a = r.GetVisualWindowStartPX();
      return i ? S((a * e.scrollBarWidth) / t, 0, e.scrollBarWidth - n) : 0;
    }),
    [l, u] = (0, R.useState)(!1),
    d = (0, R.useRef)(void 0);
  (0, R.useEffect)(() => {
    if (r.GetAutoScrollPaused())
      return (
        u(!0),
        (d.current = window.setTimeout(() => {
          u(!1);
        }, 500)),
        () => window.clearTimeout(d.current)
      );
  }, [c, r]);
  let f = (0, R.useCallback)(
      (t) => {
        (s(c), a(!0));
        let n = t.nativeEvent.offsetX,
          i = r.GetTimelineParentCtnRef() ?? O(t),
          o,
          l,
          u,
          d = (t) => {
            s(t.clientX - e.scrollBarXOffset - n);
          };
        (i.addEventListener(`mousemove`, d),
          (o = () => i.removeEventListener(`mousemove`, d)));
        let f = () => {
          (a(!1), o(), l(), u());
        };
        (i.addEventListener(`mouseup`, f),
          i.addEventListener(`mouseleave`, f),
          (l = () => i.removeEventListener(`mouseup`, f)),
          (u = () => i.removeEventListener(`mouseleave`, f)));
      },
      [c, e.scrollBarXOffset, r],
    ),
    p = (0, R.useMemo)(
      () => (i ? S(o, 0, e.scrollBarWidth - n) : c),
      [o, i, c, e.scrollBarWidth, n],
    );
  return (
    (0, R.useEffect)(() => {
      if (i) {
        let n = (t * p) / e.scrollBarWidth;
        r.ScrollToOffset(n);
      }
    }, [i, e.scrollBarWidth, p, r, t]),
    { thumbPositionPX: p, onMouseDown: f, bHiglightThumb: l }
  );
}
function nc(e, t) {
  let n = j(
    () =>
      !t.GetAutoScrollPaused() &&
      e.GetGameRecordingVideo().BVideoElementPlaying(),
  );
  (0, R.useEffect)(() => {
    if (!n) return () => {};
    let r = !1,
      i = e.GetGlobalMSPlaytime(),
      a = Date.now(),
      o = (n) => {
        let s = Date.now(),
          c = s - a;
        t.ScrollToCenteredGlobalMS(i.valMS + c);
        let l = e.GetGlobalMSPlaytime();
        (l.valMS !== i.valMS && ((i = l), (a = s)),
          r || requestAnimationFrame(o));
      };
    return (requestAnimationFrame(o), () => (r = !0));
  }, [e, t, n]);
}
n();
var Z = class {
  m_tours = {};
  m_strActiveTour = ``;
  m_storage = void 0;
  m_bReady = !1;
  constructor() {
    g(this);
  }
  async Init(e) {
    if (this.m_storage) return;
    this.m_storage = e;
    let t = await ic(e);
    (Object.keys(t || {}).forEach((e) => {
      let n = !!t[e];
      this.m_tours[e] = { ...(this.m_tours[e] || { stops: {} }), bSeen: n };
    }),
      (this.m_bReady = !0));
  }
  UpdateStop(e, t, n, r) {
    (this.m_tours[e] || (this.m_tours[e] = { bSeen: !1, stops: {} }),
      (this.m_tours[e].stops[t] = { options: n, elem: r }));
  }
  BHasSeenTour(e) {
    return !this.m_bReady || (this.m_tours[e] && this.m_tours[e].bSeen);
  }
  GetTrackedStops(e) {
    return this.m_tours[e]?.stops || {};
  }
  ActivateTour(e) {
    (this.m_strActiveTour &&
      this.m_strActiveTour !== e &&
      this.DismissTour(this.m_strActiveTour),
      (this.m_strActiveTour = e));
  }
  DismissTour(e) {
    this.m_tours[e] &&
      (this.MarkTourSeen(e),
      (this.m_tours[e].bSeen = !0),
      this.m_strActiveTour === e && (this.m_strActiveTour = ``));
  }
  MarkTourSeen(e) {
    return ac(this.m_storage, e, Date.now());
  }
  MarkTourUnseen(e) {
    return ac(this.m_storage, e, void 0);
  }
};
(p([s], Z.prototype, `m_tours`, void 0),
  p([s], Z.prototype, `m_strActiveTour`, void 0),
  p([s], Z.prototype, `m_bReady`, void 0),
  p([d.bound], Z.prototype, `UpdateStop`, null),
  p([d], Z.prototype, `ActivateTour`, null),
  p([d], Z.prototype, `DismissTour`, null));
var rc = `tour_history`;
async function ic(e) {
  let t = await e.GetObject(rc);
  return !t || typeof t != `object` ? {} : t;
}
async function ac(e, t, n) {
  let r = await ic(e);
  return e.StoreObject(rc, { ...r, [t]: n });
}
var oc = new Z();
function sc() {
  let e = Tt();
  return (
    (0, R.useEffect)(() => {
      oc.Init(e);
    }, [e]),
    oc
  );
}
function cc(e) {
  let t = sc(),
    { bShowTour: n, stopElems: r } = j(() => ({
      bShowTour: !t.BHasSeenTour(e),
      stopElems: t.GetTrackedStops(e),
    }));
  return {
    bShowTour: n,
    stopElems: r,
    onInteraction: (0, R.useCallback)(() => t.MarkTourSeen(e), [t, e]),
    onDismiss: (0, R.useCallback)(() => t.DismissTour(e), [t, e]),
    onActivate: (0, R.useCallback)(() => t.ActivateTour(e), [t, e]),
    updateStop: t.UpdateStop,
  };
}
function lc(e) {
  let { name: t, tour: n, options: r, children: i } = e,
    { updateStop: a } = cc(n),
    o = (0, R.useCallback)((e) => a(n, t, r, e), [a, n, t]),
    s = R.Children.only(i),
    c = se(o, s.props.ref);
  return (0, R.cloneElement)(R.Children.only(i), { ref: c });
}
var uc = `ntKPAM1NZ9k-`,
  dc = `JXv-qDT9fmY-`,
  fc = `Rg3Qyz2aIKM-`;
function pc(e) {
  let t = G(),
    n = j(() => t.GetVisibleTimelines());
  return (0, z.jsx)(z.Fragment, {
    children: n.flatMap((e) =>
      e.phaseOffsets.map((t, n) =>
        (0, R.createElement)(mc, {
          ...t,
          timeline: e,
          key: `${e.timelineID}_${n}`,
        }),
      ),
    ),
  });
}
function mc(e) {
  let { timelineOffsetMS: t, nDurationMS: n, phase: r, timeline: i } = e;
  return (0, z.jsxs)(hc, {
    ...e,
    children: [(0, z.jsx)(_c, {}), (0, z.jsx)(gc, {}), (0, z.jsx)(_c, {})],
  });
}
function hc(e) {
  let {
      children: t,
      timeline: n,
      timelineOffsetMS: r,
      nDurationMS: i,
      phase: a,
    } = e,
    o = G(),
    s = V(),
    c = Di()?.valPX || -1,
    l = ki(),
    [u] = ji(),
    {
      pxStart: d,
      pxWidth: f,
      bHighlight: p,
    } = j(() => {
      let e = o.GetPhaseToHighlight();
      return {
        pxStart: o.ConvertGlobalMSToGlobalPXOffset(n.globalOffsetMS + r),
        pxWidth: o.ConvertDurationMSToDeltaPX(i),
        bHighlight:
          e && e[0] === n.timelineID && e[1] === a.background_timeline_offset,
      };
    }),
    m = (l || u) && c >= d && c <= d + f,
    [h, g] = In(),
    _ = () => {
      let e = s.GetLoader(),
        t = e.GetTimelineData(n.timelineID),
        i = e.GetTimelineMetadata(n.timelineID),
        a = t.m_rgPhases.find((e) => parseInt(e.time) === r);
      a && g({ entry: a, timeline: i });
    },
    v = () => g(void 0);
  return (0, z.jsx)(`div`, {
    className: A(uc, m && `_7iKrpiRqfb4-`, p && `-VGOLVELQNE-`),
    style: { transform: `translateX( ${d}px )`, width: `${f}px` },
    onMouseOver: _,
    onMouseLeave: v,
    onFocus: _,
    onBlur: v,
    children: t,
  });
}
function gc(e) {
  return (0, z.jsx)(`div`, { className: dc });
}
function _c(e) {
  return (0, z.jsx)(`div`, { className: fc });
}
var vc = `YTX0fQkY6BM-`;
function yc(e) {
  let t = G(),
    n = j(() => t.GetVisibleTimelines());
  return (0, z.jsx)(z.Fragment, {
    children: n.map((e) => (0, z.jsx)(bc, { timeline: e }, e.timelineID)),
  });
}
function bc(e) {
  let { timeline: t } = e,
    n = G(),
    r = j(() => n.GetVisibleTimelineHighlights(t.timelineID) || []),
    i = j(() => n.GetTimelineOffsetMS(t.timelineID)),
    a = t.globalOffsetMS - i;
  return (0, z.jsx)(z.Fragment, {
    children: r
      .filter((e) => $i(e) === `range_highlight`)
      .map((e) =>
        (0, z.jsx)(
          xc,
          { entry: e, timeline: t, timelineView: n, timelineOffset: a },
          e.id,
        ),
      ),
  });
}
function xc(e) {
  let { timelineView: t, entry: n, timelineOffset: r } = e,
    i = r + parseInt(n.time),
    { pxStart: a, pxWidth: o } = j(() => ({
      pxStart: t.ConvertGlobalMSToGlobalPXOffset(i),
      pxWidth: t.ConvertDurationMSToDeltaPX(parseInt(n.duration)),
    })),
    s = { width: `${o}px`, transform: `translateX( ${a}px )` };
  return (0, z.jsx)(`svg`, {
    className: vc,
    style: s,
    children: (0, z.jsx)(`line`, {
      x1: `0`,
      x2: o,
      y1: `0`,
      y2: `0`,
      fill: `none`,
      stroke: `#ffc82c`,
      "stroke-width": `3`,
      "stroke-dasharray": `3 6`,
      "stroke-dashoffset": `0`,
      "stroke-linecap": `square`,
    }),
  });
}
var Sc = 0.08;
function Cc(e) {
  let {
      loader: t,
      className: n,
      clipSummaries: r,
      refTimelineParentCtn: i,
      disableZoom: a,
    } = e,
    o = j(() => t.BInitialized()),
    s = V();
  if (!o) return (0, z.jsx)(`div`, { className: Qn });
  let c = A($n, s.GetGamepadMode() && `xP7qeNW99Qo-`, n);
  return (0, z.jsx)(Rr, {
    loader: t,
    clipSummaries: r,
    playbackCoordinator: s,
    refTimelineParentCtn: i,
    children: (0, z.jsxs)(`div`, {
      className: c,
      dir: `ltr`,
      children: [
        (0, z.jsx)(Ec, {}),
        (0, z.jsx)(Dc, {}),
        (0, z.jsx)(lc, {
          tour: `recording_timeline`,
          name: `timeline`,
          options: { position: `left`, offset: 20 },
          children: (0, z.jsx)(Ws, {
            className: er,
            disableZoom: a,
            children: (0, z.jsx)(wc, {}),
          }),
        }),
      ],
    }),
  });
}
var wc = (0, R.memo)(function (e) {
  let t = G();
  return j(() => t.BInitialized()) ? (0, z.jsx)(Tc, {}) : null;
});
function Tc() {
  let e = G(),
    t = j(() => e.GetScrollableWidthPX()),
    n = j(() => e.GetVisualWindowStartPX()),
    r = j(() => e.GetTimelineMarginWidth());
  return (0, z.jsxs)(`div`, {
    className: tr,
    style: {
      minWidth: t || 0,
      marginRight: r,
      marginLeft: r,
      transform: `translateX(${-n}px)`,
    },
    children: [
      (0, z.jsx)(Q, {
        id: `recordings`,
        className: ir,
        children: (0, z.jsx)(xs, {}),
      }),
      (0, z.jsx)(Q, {
        id: `clips`,
        className: ar,
        children: (0, z.jsx)(Ts, {}),
      }),
      (0, z.jsx)(Q, {
        id: `game_modes`,
        className: or,
        children: (0, z.jsx)(oa, {}),
      }),
      (0, z.jsx)(Q, {
        id: `date_decorators`,
        className: sr,
        children: (0, z.jsx)(_s, {}),
      }),
      (0, z.jsx)(Q, {
        id: `ticks`,
        className: cr,
        children: (0, z.jsx)(Jr, {}),
      }),
      (0, z.jsxs)(Ei, {
        children: [
          (0, z.jsx)(Q, {
            id: `highlights`,
            className: lr,
            children: (0, z.jsx)(Ji, {}),
          }),
          (0, z.jsx)(Q, {
            id: `range_selection`,
            className: dr,
            children: (0, z.jsx)(ns, {}),
          }),
          (0, z.jsx)(Q, {
            id: `seek_scrub`,
            className: fr,
            children: (0, z.jsx)(Wo, {}),
          }),
          (0, z.jsx)(Q, {
            id: `play_head`,
            className: pr,
            children: (0, z.jsx)(_a, {}),
          }),
          (0, z.jsx)(Q, {
            id: `phases`,
            className: gr,
            children: (0, z.jsx)(pc, {}),
          }),
          (0, z.jsx)(Q, {
            id: `range_highlights`,
            className: ur,
            children: (0, z.jsx)(yc, {}),
          }),
        ],
      }),
    ],
  });
}
function Q(e) {
  let { children: t, id: n, className: r } = e;
  return (0, z.jsx)(`div`, {
    id: n,
    className: A(r, nr),
    children: (0, z.jsx)(`div`, { className: rr, children: t }),
  });
}
function Ec(e) {
  let t = V().GetRenderGlyph();
  return t ? t(ye.TRIGGER_LEFT, !1, !1, mr) : null;
}
function Dc(e) {
  let t = V().GetRenderGlyph();
  return t ? t(ye.TRIGGER_RIGHT, !1, !1, hr) : null;
}
var $ = e(ae(), 1),
  Oc = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.representation_name || v(e.M()),
        $.Message.initialize(this, t, 0, -1, [11], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            representation_name: { n: 2, br: h.readString, bw: C.writeString },
            horizontal_resolution: {
              n: 3,
              br: h.readUint32,
              bw: C.writeUint32,
            },
            vertical_resolution: { n: 4, br: h.readUint32, bw: C.writeUint32 },
            frame_rate: { n: 5, br: h.readDouble, bw: C.writeDouble },
            bandwidth: { n: 6, br: h.readUint32, bw: C.writeUint32 },
            audio_sample_rate: { n: 7, br: h.readUint32, bw: C.writeUint32 },
            frame_rate_string: { n: 8, br: h.readString, bw: C.writeString },
            codec: { n: 9, br: h.readString, bw: C.writeString },
            audio_channel_config: {
              n: 10,
              br: h.readUint32,
              bw: C.writeUint32,
            },
            segment_info: { n: 11, c: jc, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMsgVideoGameRecordingRepresentation`;
    }
  },
  kc = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.component_name || v(e.M()),
        $.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            component_name: { n: 1, br: h.readString, bw: C.writeString },
            contents: { n: 2, br: h.readUint32, bw: C.writeUint32 },
            segment_size: { n: 3, br: h.readUint32, bw: C.writeUint32 },
            file_type: { n: 4, br: h.readString, bw: C.writeString },
            representations: { n: 5, c: Oc, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMsgVideoGameRecordingComponent`;
    }
  },
  Ac = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || v(e.M()),
        $.Message.initialize(this, t, 0, -1, [7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: h.readUint64String, bw: C.writeUint64String },
            app_id: { n: 2, br: h.readUint32, bw: C.writeUint32 },
            num_segments: { n: 3, br: h.readUint32, bw: C.writeUint32 },
            length_milliseconds: { n: 4, br: h.readUint32, bw: C.writeUint32 },
            segment_duration_timescale: {
              n: 5,
              br: h.readUint32,
              bw: C.writeUint32,
            },
            segment_duration: { n: 6, br: h.readUint32, bw: C.writeUint32 },
            components: { n: 7, c: kc, r: !0, q: !0 },
            start_time_ms: { n: 8, br: h.readUint32, bw: C.writeUint32 },
            start_offset_in_timeline_ms: {
              n: 9,
              br: h.readUint32,
              bw: C.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMsgVideoGameRecordingDef`;
    }
  },
  jc = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.segment_number || v(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            segment_number: { n: 1, br: h.readUint32, bw: C.writeUint32 },
            segment_size_bytes: {
              n: 2,
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
            component_name: { n: 3, br: h.readString, bw: C.writeString },
            representation_name: { n: 4, br: h.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingSegmentInfo`;
    }
  },
  Mc = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.segment_info || v(e.M()),
        $.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            segment_info: { n: 1, c: jc },
            url_host: { n: 2, br: h.readString, bw: C.writeString },
            url_path: { n: 3, br: h.readString, bw: C.writeString },
            use_https: { n: 4, br: h.readBool, bw: C.writeBool },
            request_headers: { n: 5, c: Nc, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingSegmentUploadInfo`;
    }
  },
  Nc = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || v(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: h.readString, bw: C.writeString },
            value: { n: 2, br: h.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders`;
    }
  },
  Pc = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.video_manager_clip_id || v(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            video_manager_clip_id: {
              n: 1,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            video_manager_video_id: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            server_timeline_id: {
              n: 3,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            manifest_url: { n: 4, br: h.readString, bw: C.writeString },
            duration_ms: { n: 5, br: h.readUint32, bw: C.writeUint32 },
            start_offset_ms: { n: 6, br: h.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideoManagerClipID`;
    }
  },
  Fc = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || v(e.M()),
        $.Message.initialize(this, t, 0, -1, [9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: {
              n: 1,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            gameid: { n: 2, br: h.readUint64String, bw: C.writeUint64String },
            date_recorded: { n: 4, br: h.readUint32, bw: C.writeUint32 },
            total_file_size_bytes: {
              n: 7,
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
            video_ids: { n: 9, c: Pc, r: !0, q: !0 },
            owner_steamid: {
              n: 10,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
            upload_complete: { n: 11, br: h.readBool, bw: C.writeBool },
            duration_ms: { n: 12, br: h.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingClip`;
    }
  },
  Ic = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip || v(e.M()),
        $.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip: { n: 2, c: Fc },
            video_def: { n: 3, c: Ac, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_CreateShareClip_Request`;
    }
  },
  Lc = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip || v(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { clip: { n: 1, c: Fc } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_CreateShareClip_Response`;
    }
  },
  Rc = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || v(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeleteSharedClip_Request`;
    }
  },
  zc = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), $.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeleteSharedClip_Response`;
    }
  },
  Bc = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || v(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: {
              n: 2,
              br: h.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetSingleSharedClip_Request`;
    }
  },
  Vc = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip || v(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { clip: { n: 1, c: Fc } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetSingleSharedClip_Response`;
    }
  },
  Hc = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || v(e.M()),
        $.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: {
              n: 1,
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
            component_name: { n: 2, br: h.readString, bw: C.writeString },
            representation_name: { n: 3, br: h.readString, bw: C.writeString },
            segments_to_store: { n: 4, c: jc, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_BeginGameRecordingSegmentsUpload_Request`;
    }
  },
  Uc = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.segments_needed || v(e.M()),
        $.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            segments_needed: { n: 1, c: Mc, r: !0, q: !0 },
            call_again: { n: 2, br: h.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_BeginGameRecordingSegmentsUpload_Response`;
    }
  },
  Wc = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || v(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: {
              n: 1,
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
            component_name: { n: 2, br: h.readString, bw: C.writeString },
            representation_name: { n: 3, br: h.readString, bw: C.writeString },
            first_segment_number: { n: 4, br: h.readUint32, bw: C.writeUint32 },
            num_segments: { n: 5, br: h.readUint32, bw: C.writeUint32 },
            upload_result: { n: 6, br: h.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_CommitGameRecordingSegmentsUpload_Request`;
    }
  },
  Gc = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), $.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_CommitGameRecordingSegmentsUpload_Response`;
    }
  },
  Kc = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || v(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: {
              n: 1,
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request`;
    }
  },
  qc = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.segments_needed || v(e.M()),
        $.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { segments_needed: { n: 1, c: Mc, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response`;
    }
  },
  Jc = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || v(e.M()),
        $.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: {
              n: 1,
              br: h.readUint64String,
              bw: C.writeUint64String,
            },
            segments_uploaded: { n: 2, c: jc, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= r(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingCommitSegmentUploads_Request`;
    }
  },
  Yc = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), $.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingCommitSegmentUploads_Response`;
    }
  },
  Xc;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`GameRecordingClip.CreateShareClip#1`, u(Ic, t, n), Lc, {
      ePrivilege: 1,
    });
  }
  e.CreateShareClip = t;
  function n(e, t, n) {
    return e.SendMsg(`GameRecordingClip.DeleteSharedClip#1`, u(Rc, t, n), zc, {
      ePrivilege: 1,
    });
  }
  e.DeleteSharedClip = n;
  function r(e, t, n) {
    return e.SendMsg(
      `GameRecordingClip.GetSingleSharedClip#1`,
      u(Bc, t, n),
      Vc,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`community`],
      },
    );
  }
  e.GetSingleSharedClip = r;
})((Xc ||= {}));
var Zc;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `VideoClip.BeginGameRecordingSegmentsUpload#1`,
      u(Hc, t, n),
      Uc,
      { ePrivilege: 1 },
    );
  }
  e.BeginGameRecordingSegmentsUpload = t;
  function n(e, t, n) {
    return e.SendMsg(
      `VideoClip.CommitGameRecordingSegmentsUpload#1`,
      u(Wc, t, n),
      Gc,
      { ePrivilege: 1 },
    );
  }
  e.CommitGameRecordingSegmentsUpload = n;
  function r(e, t, n) {
    return e.SendMsg(
      `VideoClip.GetNextBatchOfSegmentsToUpload#1`,
      u(Kc, t, n),
      qc,
      { ePrivilege: 1 },
    );
  }
  e.GetNextBatchOfSegmentsToUpload = r;
  function i(e, t, n) {
    return e.SendMsg(`VideoClip.CommitSegmentUploads#1`, u(Jc, t, n), Yc, {
      ePrivilege: 1,
    });
  }
  e.CommitSegmentUploads = i;
})((Zc ||= {}));
var Qc = `N0YgUOFrVbA-`,
  $c = `_3Eoh-g18Nso-`,
  el = `_4yH-1J11WBI-`,
  tl = `UtiBqyUvEI4-`,
  nl = `_9jWTglZ-prg-`,
  rl = `miEfWFJ-lNg-`;
function il(e) {
  let { previewURL: t } = e,
    [n, r] = R.useState(!1);
  return n
    ? (0, z.jsx)(al, { ...e })
    : (0, z.jsxs)(`div`, {
        className: el,
        onClick: () => {
          r(!0);
        },
        children: [
          (0, z.jsx)(`img`, { className: tl, src: t }),
          (0, z.jsx)(`div`, {
            className: nl,
            children: (0, z.jsx)(ot, { className: rl }),
          }),
        ],
      });
}
function al(e) {
  let { clipID: t } = e,
    n = sl(t);
  return n.data
    ? (0, z.jsx)(ll, { clip: n.data, mode: kn.ChatClip })
    : (0, z.jsx)(`div`, { style: { color: `white` }, children: `Loading...` });
}
function ol(e, t) {
  return {
    timeline_id: t.server_timeline_id,
    game_id: e.clip_id,
    date_recorded: e.date_recorded,
    duration_ms: e.duration_ms.toFixed(0),
    recordings: [],
  };
}
function sl(e) {
  let t = xe();
  return Ht({
    queryKey: [`grclip`, e],
    queryFn: async () => {
      let n = ie.Init(Bc);
      n.Body().set_clip_id(e);
      let r = await Xc.GetSingleSharedClip(t, n);
      if (r.GetEResult() != 1)
        throw (
          I(`GetSingleSharedClip failed`),
          r.DEBUG_LogToConsole(),
          Error(`Failed to load clip with result: ${r.GetEResult()}`)
        );
      let i = r.Body().toObject().clip,
        a = [];
      if (i.video_ids.length == 0)
        throw (
          I(`No video ids in clip`, e),
          r.DEBUG_LogToConsole(),
          Error(`No video ids in clip`)
        );
      let o;
      for (let e of i.video_ids)
        ((o && o.timeline_id == e.server_timeline_id) ||
          ((o = ol(i, e)), a.push(o)),
          o.recordings.push({
            recording_id: e.video_manager_video_id,
            start_offset_ms: e.start_offset_ms.toFixed(0),
            duration_ms: e.duration_ms.toFixed(0),
            recording_type: 4,
            cdn_manifest_url: e.manifest_url,
          }));
      return { clip_id: i.clip_id, game_id: i.gameid, timelines: a };
    },
  });
}
function cl(e) {
  let t = R.useMemo(() => Mt(e), [e]),
    n = R.useCallback(
      (t) => {
        for (let n of e.timelines)
          for (let e of n.recordings)
            if (e.recording_id == t) return e.cdn_manifest_url;
      },
      [e],
    );
  return (
    R.useEffect(() => () => t && t.release(), [t]),
    { loader: t.loader, fnGetManifest: n }
  );
}
function ll(e) {
  let { clip: t, mode: n } = e,
    { loader: r, fnGetManifest: i } = cl(t);
  return (0, z.jsx)(z.Fragment, {
    children: (0, z.jsx)(Fn, {
      loader: r,
      fnGetManifest: i,
      mode: n,
      children: (0, z.jsxs)(`div`, {
        className: Qc,
        children: [
          (0, z.jsx)(`div`, {
            className: $c,
            children: (0, z.jsx)(Nl, {
              positionAbsolute: !1,
              autoPlay: n != kn.ChatClip,
            }),
          }),
          (0, z.jsx)(Cc, { loader: r }),
        ],
      }),
    }),
  });
}
var ul = `KQ-hi7DkQBE-`,
  dl = `_52aYqduz6h4-`,
  fl = `coOj1PrCK88-`,
  pl = `LIhvCT2g-YI-`,
  ml = `bExNzJrLl-M-`,
  hl = `dyICc0VY3A4-`,
  gl = `_6wAbDaUvkxg-`,
  _l = `2000ms`,
  vl = `LaqVy9--mt8-`,
  yl = `lLAtYwwfC6c-`,
  bl = `_4lkIuOprDls-`,
  xl = `fZFkKWffS5M-`,
  Sl = `gtWJUpDp-gM-`,
  Cl = parseInt(_l);
function wl() {
  let e = V(),
    t = j(() => e.GetDisplayHighlightEntry()),
    [n, r] = (0, R.useState)(null),
    i = R.useRef(0);
  return (
    (0, R.useEffect)(() => {
      if (!t?.entry || tn(t.entry) || cn(t.entry)) r(null);
      else
        return (
          r(t.entry),
          (i.current = window.setTimeout(
            () => {
              e.SetDisplayHighlightEntry(null);
            },
            t.duration ? t.duration : Cl,
          )),
          () => window.clearTimeout(i.current)
        );
    }, [t, e]),
    n ? (0, z.jsx)(Tl, { entry: n }) : null
  );
}
function Tl(e) {
  let { entry: t } = e,
    n = V(),
    r = j(() => n.GetGameID()),
    i = n.GetGameRecordingVideo(),
    a = j(() => n.GetRecordingID()),
    o = j(() => i.IsInitialized()),
    s = i.GetVideoHeight(),
    c = i.GetVideoWidth(),
    l = a && o && s > 0 && c > 0 ? { height: s, width: c } : {},
    u;
  return (
    Zt(t)
      ? (u = (0, z.jsx)(El, { entry: t, strGameID: r }))
      : N(t)
        ? (u = (0, z.jsx)(
            Dl,
            {
              entry: t,
              strMarkerIcon: t.icon,
              title: t.title ? t.title : w(`#Marker_UserMarker_Title`),
              description: t.description || ``,
            },
            t.id,
          ))
        : nn(t)
          ? (u = (0, z.jsx)(
              Dl,
              {
                entry: t,
                strMarkerIcon: t.icon,
                title: w(`#MediaManager_ItemType_Screenshot`),
                description: ``,
              },
              t.id,
            ))
          : $t(t) &&
            (u = (0, z.jsx)(
              Dl,
              {
                entry: t,
                strMarkerIcon: t.icon,
                title: t.title || ``,
                description: t.description || ``,
              },
              t.id,
            )),
    (0, z.jsx)(`div`, { className: vl, style: l, children: u })
  );
}
function El(e) {
  let { entry: t, strGameID: n } = e,
    r = new vt(n),
    i = xt(r.GetAppID(), t.achievement_name);
  return i
    ? (0, z.jsx)(
        Dl,
        {
          entry: t,
          strMarkerIcon: `steam_achievement`,
          title: i.name ?? ``,
          description: i.description ?? ``,
        },
        t.id,
      )
    : null;
}
function Dl(e) {
  let { entry: t, strMarkerIcon: n, title: r, description: i } = e;
  return (0, z.jsx)(`div`, {
    className: yl,
    children: (0, z.jsxs)(`div`, {
      className: bl,
      children: [
        (0, z.jsx)(`div`, {
          className: xl,
          children: (0, z.jsx)(Wn, { entry: t, strMarkerIcon: n }),
        }),
        (0, z.jsxs)(`div`, {
          className: Sl,
          children: [
            r && (0, z.jsx)(`div`, { className: `_2T-PgLx6Dr4-`, children: r }),
            i && (0, z.jsx)(`div`, { className: `bBDKWYyxu48-`, children: i }),
          ],
        }),
      ],
    }),
  });
}
var Ol = `2000ms`,
  kl = `OvcOkaeZMu8-`,
  Al = `_-5QSadyUEvk-`,
  jl = parseInt(Ol);
function Ml() {
  let e = V(),
    t = e.GetGameRecordingVideo(),
    n = j(() => e.GetRecordingID()),
    r = j(() => t.IsInitialized()),
    i = t.GetVideoHeight(),
    a = t.GetVideoWidth(),
    o = n && r && i > 0 && a > 0 ? { height: i, width: a } : {},
    s = R.useRef(0),
    c = j(() => e.GetRelativeTimeForDisplay()),
    l = j(() => e.GetGameRecordingVideo().IsInitialized()),
    u = (0, R.useMemo)(() => {
      if (isNaN(c) || !l) return null;
      let t = e.ConvertGlobalOffsetToTimelineRelativeOffset(c);
      if (t && e.GetIsActiveTimeline(t.strTimelineID)) {
        let n = e.MakeRelativeToTimelineEndIfActive(
          t.strTimelineID,
          t.nTimelineOffsetMS.valMS,
        );
        return ce(n / 1e3, !1, !0);
      }
      return null;
    }, [l, c, e]);
  return (
    (0, R.useEffect)(() => {
      if (!isNaN(c))
        return (
          (s.current = window.setTimeout(() => {
            e.ClearRelativeTimeDisplay();
          }, jl)),
          () => window.clearTimeout(s.current)
        );
    }, [c, e]),
    isNaN(c)
      ? null
      : (0, z.jsx)(`div`, {
          className: kl,
          style: o,
          children: (0, z.jsx)(`div`, { className: Al, children: u }, u),
        })
  );
}
function Nl(e) {
  let {
      disableSound: t,
      positionAbsolute: n = !0,
      refVideoResize: r,
      style: i,
      fullscreen: a,
    } = e,
    o = V(),
    s = Sn(o.StopPlayback, o.SetVideoElement),
    c = o.GetGameRecordingVideo(),
    l = j(() => o.GetRecordingID()),
    u = j(() => c.GetPlaybackError()),
    d = j(() => o.GetRecordingMode() === `Overlay`),
    f = Pl(),
    p = Tr(),
    h = u || !l,
    g = R.useRef(void 0),
    _ = se(s, r),
    v = Fi();
  function y() {
    l && o.TogglePlayPause();
  }
  function ee() {
    l && a && a.fnToggleFullscreen();
  }
  let b = R.useCallback(
      (e) => {
        h ||
          v(e, { bDisableMouseOverlay: !0, bForcePopup: !0, bAlwaysOnTop: !0 });
      },
      [h, v],
    ),
    x = !m.IN_STEAMUI && !!e.autoPlay,
    S = A(
      ul,
      h && `_3P0prb9XLTM-`,
      n && `YECphMawhtQ-`,
      p && `gzjiwBe8B5g-`,
      d && `NluAI6IOvZc-`,
      f && `_6MZt8I3nnWM-`,
    );
  return (0, z.jsxs)(`div`, {
    ref: g,
    className: S,
    onClick: y,
    onContextMenu: b,
    style: i,
    onDoubleClick: ee,
    children: [
      (0, z.jsx)(`video`, {
        ref: _,
        controls: !1,
        muted: t,
        autoPlay: x,
        playsInline: x,
      }),
      (0, z.jsx)(Rl, { player: c }),
      (0, z.jsx)(Fl, {}),
      (0, z.jsx)(Il, {}),
      (0, z.jsx)(Ll, {}),
      !l && (0, z.jsx)(zl, {}),
      (0, z.jsx)(wl, {}),
      (0, z.jsx)(Ml, {}),
    ],
  });
}
function Pl() {
  let e = V(),
    t = j(() => e.GetGlobalMSPlaytime()),
    { nGlobalEndMS: n, nGlobalStartMS: r } = vr(),
    i = e.GetGameRecordingVideo();
  return j(() => i.GetPlaybackError()) || !t || !r || !n
    ? !1
    : t.valMS >= r.valMS && t.valMS <= n.valMS;
}
function Fl() {
  let e = V(),
    t = pe.Get().IsDebugLogEnabled(`GR`),
    n = j(() => e.GetPlaybackStats());
  return !t || !n
    ? null
    : (0, z.jsxs)(`div`, {
        className: ml,
        children: [
          (0, z.jsxs)(`div`, {
            children: [
              (0, z.jsx)(`span`, { children: `Average Seek MS: ` }),
              (0, z.jsx)(`span`, { children: n.nMean.toFixed(3) }),
            ],
          }),
          (0, z.jsxs)(`div`, {
            children: [
              (0, z.jsx)(`span`, { children: `StdDev Seek MS: ` }),
              (0, z.jsx)(`span`, { children: n.nStdDev.toFixed(3) }),
            ],
          }),
          (0, z.jsxs)(`div`, {
            children: [
              (0, z.jsx)(`span`, { children: `Slowest Seek MS: ` }),
              (0, z.jsx)(`span`, { children: n.nMax.toFixed(3) }),
            ],
          }),
          (0, z.jsxs)(`div`, {
            children: [
              (0, z.jsx)(`span`, { children: `Fastest Seek MS: ` }),
              (0, z.jsx)(`span`, { children: n.nMin.toFixed(3) }),
            ],
          }),
          (0, z.jsxs)(`div`, {
            children: [
              (0, z.jsx)(`span`, { children: `# Seeks: ` }),
              (0, z.jsx)(`span`, { children: n.nLength }),
            ],
          }),
          (0, z.jsxs)(`div`, {
            children: [
              (0, z.jsx)(`span`, { children: `Last Val: ` }),
              (0, z.jsx)(`span`, { children: n.nLastVal.toFixed(3) }),
            ],
          }),
        ],
      });
}
function Il() {
  let e = pe.Get().IsDebugLogEnabled(`GR`),
    t = V();
  j(() => {
    t.GetGlobalMSPlaytime();
  });
  let n = Co();
  return !e || !n
    ? null
    : (0, z.jsxs)(`div`, {
        className: hl,
        children: [
          (0, z.jsxs)(`div`, {
            children: [
              (0, z.jsx)(`span`, { children: `Avg Thumbnail Load MS: ` }),
              (0, z.jsx)(`span`, { children: n.nMean.toFixed(3) }),
            ],
          }),
          (0, z.jsxs)(`div`, {
            children: [
              (0, z.jsx)(`span`, { children: `StdDev Thumbnail Load MS: ` }),
              (0, z.jsx)(`span`, { children: n.nStdDev.toFixed(3) }),
            ],
          }),
          (0, z.jsxs)(`div`, {
            children: [
              (0, z.jsx)(`span`, { children: `Slowest Thumbnail Load MS: ` }),
              (0, z.jsx)(`span`, { children: n.nMax.toFixed(3) }),
            ],
          }),
          (0, z.jsxs)(`div`, {
            children: [
              (0, z.jsx)(`span`, { children: `Fastest Thumbnail Load MS: ` }),
              (0, z.jsx)(`span`, { children: n.nMin.toFixed(3) }),
            ],
          }),
          (0, z.jsxs)(`div`, {
            children: [
              (0, z.jsx)(`span`, { children: `# Loaded: ` }),
              (0, z.jsx)(`span`, { children: n.nLength }),
            ],
          }),
          (0, z.jsxs)(`div`, {
            children: [
              (0, z.jsx)(`span`, { children: `Last Load: ` }),
              (0, z.jsx)(`span`, { children: n.nLastVal.toFixed(3) }),
            ],
          }),
        ],
      });
}
function Ll() {
  let e = V(),
    t = e.GetGameRecordingVideo(),
    n = t.GetVideoHeight(),
    r = j(() => t.BVideoElementWaiting()),
    i = j(() => t.IsPaused()),
    a = j(() => t.GetPlaybackError()),
    o = j(() => t.IsInitialized());
  return !j(() => e.GetRecordingID()) || (o && !r) || a || i
    ? null
    : (0, z.jsx)(`div`, {
        className: gl,
        style: { height: n },
        children: (0, z.jsx)(_t, {}),
      });
}
function Rl(e) {
  let { player: t } = e,
    n = j(() => t.GetPlaybackError()),
    r = ``;
  switch (n) {
    case xn.DownloadFailed:
    case xn.PlaybackError:
    case xn.MediaTypeError:
      r = `#GameRecording_PlayerError_Generic`;
  }
  return r
    ? (0, z.jsx)(`div`, {
        className: dl,
        children: (0, z.jsx)(`div`, { className: void 0, children: w(r) }),
      })
    : null;
}
function zl() {
  let e = V(),
    t = j(() => e.GetGamepadMode()),
    { onNavigateToClip: n, onNavigateToFAQ: r } = K(),
    i = j(() => e.GetGlobalMSPlaytime()),
    a = e.GetClosestPreviousRecordingForGlobalMS(i),
    o = e.GetClosestNextRecordingForGlobalMS(i),
    s = j(() => e.GetClipsAtGlobalMS(i)),
    c = (0, R.useCallback)(
      (t) => {
        if (a) {
          let n = Math.max(parseInt(a.duration_ms) - 500, 0);
          (e.SetPlaytimeFromRecordingOffset(a.recording_id, n, !0, !0),
            t.stopPropagation());
        }
      },
      [e, a],
    ),
    l = (0, R.useCallback)(
      (t) => {
        o &&
          (e.SetPlaytimeFromRecordingOffset(o.recording_id, 0),
          t.stopPropagation());
      },
      [e, o],
    ),
    u = (0, R.useCallback)(
      (e) => {
        s.length > 0 &&
          (D.ReportTrackedAction(
            `/GameRecording/Tooltip/ViewClip/PlayerNoContent`,
          ),
          n(s[0].strClipID),
          e.stopPropagation());
      },
      [s, n],
    );
  return (0, z.jsxs)(`div`, {
    className: dl,
    children: [
      (0, z.jsx)(`div`, {
        className: fl,
        children: w(`#GameRecording_PlayerNoContent`),
      }),
      (0, z.jsx)(`div`, {
        className: pl,
        children: oe(
          `#GameRecording_PlayerNoContentDescription`,
          (0, z.jsx)(Ke, { href: `#`, onClick: r }),
        ),
      }),
      !t &&
        (0, z.jsxs)(`div`, {
          className: `pvmcYqcba9M-`,
          children: [
            (0, z.jsx)(E, {
              direction: `bottom`,
              toolTipContent: w(
                a
                  ? `#GameRecording_PlayerNoContentJumpPrevious_tooltip`
                  : `#GameRecording_PlayerNoContentJumpNoContent_tooltip`,
              ),
              children: (0, z.jsx)(dt, {
                className: A(`tZ0QBApivQk-`, void 0, !a && `anur1mdo7JE-`),
                onClick: c,
                onActivate: c,
                children: w(`#GameRecording_PlayerNoContentJumpPrevious`),
              }),
            }),
            s.length > 0 &&
              (0, z.jsx)(E, {
                direction: `bottom`,
                toolTipContent: w(
                  `#GameRecording_PlayerNoContentSeeClip_tooltip`,
                ),
                children: (0, z.jsx)(dt, {
                  onClick: u,
                  onActivate: u,
                  className: A(`tZ0QBApivQk-`, void 0),
                  children: w(`#GameRecording_PlayerNoContentSeeClip`),
                }),
              }),
            (0, z.jsx)(E, {
              direction: `bottom`,
              toolTipContent: w(
                o
                  ? `#GameRecording_PlayerNoContentJumpNext_tooltip`
                  : `#GameRecording_PlayerNoContentJumpNoContent_tooltip`,
              ),
              children: (0, z.jsx)(dt, {
                className: A(`tZ0QBApivQk-`, void 0, !o && `anur1mdo7JE-`),
                onClick: l,
                onActivate: l,
                children: w(`#GameRecording_PlayerNoContentJumpNext`),
              }),
            }),
          ],
        }),
    ],
  });
}
export { il as default, cl as useTimelineLoaderForCommunityClip };
