/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  At as t,
  Ct as n,
  It as r,
  Lt as i,
  ft as a,
  kt as o,
  u as s,
  wt as c,
} from "./libraries.js";
import { t as l } from "./throbber.js";
import { r as u } from "./stringutils.js";
import { n as d, r as f, t as p } from "./dashplayer.js";
import {
  Al as m,
  Bb as h,
  Bl as g,
  Cu as _,
  Di as v,
  Du as y,
  Ei as b,
  Ex as x,
  Fl as ee,
  Hb as S,
  Jr as C,
  Ln as te,
  Mb as w,
  Mu as T,
  Mx as E,
  Nl as D,
  Nx as O,
  Ol as ne,
  Ou as re,
  Rr as ie,
  Rx as k,
  Sc as A,
  Ti as ae,
  Tu as oe,
  Wx as se,
  _l as ce,
  do as le,
  el as ue,
  ex as de,
  hi as fe,
  hn as pe,
  ii as me,
  kb as he,
  kc as ge,
  mS as _e,
  qr as ve,
  qx as ye,
  rb as j,
  vt as M,
  wi as be,
  xb as xe,
  xl as Se,
  zb as Ce,
  zl as we,
} from "./main.js";
var N = e(i()),
  P = a();
function F(e) {
  return (0, P.jsx)(`svg`, {
    className: `SVGIcon_Button`,
    width: `36`,
    height: `36`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    ...e,
    children: (0, P.jsx)(`path`, {
      d: `M31.3137 19.5299L10.0583 32.3788C9.77894 32.5477 9.45165 32.6083 9.13395 32.5496C8.81603 32.4909 8.52835 32.3169 8.32083 32.0582C8.11354 31.7995 8 31.4723 8 31.1346V5.4368C8 5.09914 8.11354 4.77196 8.32083 4.51325C8.52833 4.25455 8.81604 4.08049 9.13395 4.02181C9.45165 3.96313 9.77896 4.02377 10.0583 4.19261L31.3137 17.0415C31.593 17.2103 31.8068 17.4769 31.9172 17.7942C32.0276 18.1116 32.0276 18.4598 31.9172 18.7772C31.8068 19.0945 31.593 19.3611 31.3137 19.5299Z`,
      fill: `currentColor`,
    }),
  });
}
function I(e) {
  return (0, P.jsx)(`svg`, {
    className: `SVGIcon_Button`,
    width: `36`,
    height: `36`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    ...e,
    children: (0, P.jsx)(`path`, {
      d: `M14.3333 30C14.3333 30.5523 13.8856 31 13.3333 31H8C7.44772 31 7 30.5523 7 30V6C7 5.44772 7.44772 5 8 5H13.3333C13.8856 5 14.3333 5.44772 14.3333 6V30ZM29 6C29 5.44772 28.5523 5 28 5H22.6667C22.1144 5 21.6667 5.44772 21.6667 6V30C21.6667 30.5523 22.1144 31 22.6667 31H28C28.5523 31 29 30.5523 29 30V6Z`,
      fill: `currentColor`,
    }),
  });
}
function Te(e) {
  return (0, P.jsx)(`svg`, {
    className: `SVGIcon_Button`,
    width: `36`,
    height: `36`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    ...e,
    children: (0, P.jsx)(`path`, {
      d: `M4 4H14V8H8V14H4V4ZM22 4V8H28V14H32V4H22ZM28 28H22V32H32V22H28V28ZM8 22H4V32H14V28H8V22Z`,
      fill: `currentColor`,
    }),
  });
}
function Ee(e) {
  return (0, P.jsx)(`svg`, {
    width: `128`,
    height: `128`,
    viewBox: `0 0 128 128`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, P.jsx)(`path`, {
      d: `M12 88H116V40H12V88ZM128 94C128 97.3137 125.314 100 122 100H6C2.78979 100 0.168429 97.4789 0.0078125 94.3086L0 94V34C0 30.6863 2.68629 28 6 28H122C125.314 28 128 30.6863 128 34V94Z`,
      fill: `currentColor`,
    }),
  });
}
function De(e) {
  return (0, P.jsx)(`svg`, {
    width: `128`,
    height: `128`,
    viewBox: `0 0 128 128`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, P.jsx)(`path`, {
      d: `M12 88H116V40H12V88ZM128 94C128 97.3137 125.314 100 122 100H6C2.78979 100 0.168429 97.4789 0.0078125 94.3086L0 94V34C0 30.6863 2.68629 28 6 28H122C125.314 28 128 30.6863 128 34V94Z`,
      fill: `currentColor`,
    }),
  });
}
var Oe = `hPeepTEP2A0-`,
  ke = `RzxfM12jbio-`,
  Ae = `kQJ64kMGQbg-`,
  je = `_74WMutU3Gxc-`,
  Me = (0, N.createContext)({});
function Ne(e) {
  let {
      autoplayEnabled: t,
      setAutoplayEnabled: n,
      playerVolume: r,
      setPlayerVolume: i,
      audioMuted: a,
      setAudioMuted: o,
      children: s,
    } = e,
    c = (0, N.useMemo)(
      () => ({
        m_bAutoplayEnabled: t,
        m_fnSetAutoplayEnabled: n,
        m_nPlayerVolume: r,
        m_fnSetPlayerVolume: i,
        m_bAudioMuted: a,
        m_fnSetAudioMuted: o,
      }),
      [t, n, r, i, a, o],
    );
  return (0, P.jsx)(Me.Provider, { value: c, children: s });
}
function L() {
  return (0, N.useContext)(Me);
}
var Pe = 5,
  Fe = (function (e) {
    return (
      (e[(e.None = 0)] = `None`),
      (e[(e.Play = 1)] = `Play`),
      (e[(e.Pause = 2)] = `Pause`),
      e
    );
  })({}),
  R = class {
    m_elVideo = null;
    m_player = null;
    m_listeners = new he();
    m_persistState = {};
    m_fnOnPlaybackEnd;
    m_fnOnPlayPauseChange;
    m_fnOnMuteChange;
    m_bMuteWhenAutoplayBlocked = !1;
    m_strStatsURL = ``;
    m_bSentStats = !1;
    m_bPaused = !1;
    m_bUserInputNeeded = !1;
    m_bMuted = !1;
    m_nVolume = 1;
    m_eFailureReason = d.Invalid;
    m_maxDimensions = null;
    m_bPlaybackStarted = !1;
    m_bBuffering = !0;
    m_bHasCaptions = !1;
    m_bShowingCaption = !1;
    m_nPlaybackTime = 0;
    m_nVideoStartTime = 0;
    m_nVideoDuration = 0;
    m_nBufferedEndTime = 0;
    constructor(e) {
      (o(this), (this.m_persistState = e || {}));
    }
    IsPaused() {
      return this.m_bPaused;
    }
    GetUserInputNeeded() {
      return this.m_bUserInputNeeded;
    }
    GetPlaybackTime() {
      return this.m_nPlaybackTime;
    }
    GetBufferedEndTime() {
      return this.m_nBufferedEndTime;
    }
    GetTimelineDuration() {
      return this.m_nVideoDuration;
    }
    GetVolume() {
      return this.m_nVolume;
    }
    GetMuted() {
      return this.m_bMuted;
    }
    GetMaxVideoDimensions() {
      return this.m_maxDimensions;
    }
    HasPlaybackStarted() {
      return this.m_bPlaybackStarted;
    }
    IsBuffering() {
      return this.m_bBuffering;
    }
    HasCaptions() {
      return this.m_bHasCaptions;
    }
    IsShowingCaption() {
      return this.m_bShowingCaption;
    }
    Start(e, t, n, r, i) {
      (this.Stop(),
        (this.m_strStatsURL = i || ``),
        (this.m_elVideo = e),
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
          `volumechange`,
          this.OnVolumeChange,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `ended`,
          this.OnVideoEnd,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-ended`,
          this.OnVideoValveEnded,
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
          `valve-userinputneeded`,
          this.OnUserInputNeeded,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-metadatachanged`,
          this.OnMetadataChanged,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-captionschange`,
          this.OnCaptionsChange,
        ),
        this.m_listeners.AddEventListener(window, `pagehide`, this.SendStats),
        (this.m_player = new p(this.m_elVideo)),
        this.m_player.SetTimeoutAfterFailedDownload(!1));
      let a =
        this.m_persistState.m_bAudioMuted !== void 0 &&
        this.m_persistState.m_bAudioMuted;
      this.SetMute(a, !0);
      let o =
        this.m_persistState.m_nPlayerVolume === void 0
          ? 1
          : this.m_persistState.m_nPlayerVolume;
      (this.SetVolume(o, !0),
        this.m_player.SetMuteOnAutoplayBlocked(this.m_bMuteWhenAutoplayBlocked),
        this.m_player.PlayMPD(t, n, r));
    }
    Stop() {
      (this.SendStats(),
        this.m_listeners.Unregister(),
        this.m_player && this.m_player.Close(),
        (this.m_elVideo = null),
        (this.m_player = null),
        (this.m_bPaused = !1),
        (this.m_bUserInputNeeded = !1),
        (this.m_nPlaybackTime = 0),
        (this.m_nVideoStartTime = 0),
        (this.m_nVideoDuration = 0),
        (this.m_nBufferedEndTime = 0));
    }
    IsInitialized() {
      return !!this.m_player && !!this.m_elVideo;
    }
    OnVideoPlaying() {
      let e = this.m_bPaused;
      ((this.m_bPaused = !1),
        (this.m_bUserInputNeeded = !1),
        e && this.m_fnOnPlayPauseChange && this.m_fnOnPlayPauseChange(!0));
    }
    OnVideoPause() {
      let e = this.m_bPaused;
      ((this.m_bPaused = !0),
        !e && this.m_fnOnPlayPauseChange && this.m_fnOnPlayPauseChange(!1));
    }
    OnVideoTimeUpdate() {
      this.IsInitialized() &&
        ((this.m_nVideoStartTime = this.m_player.GetAvailableVideoStartTime()),
        (this.m_nVideoDuration =
          this.m_player.GetBufferedLiveEdgeTime() - this.m_nVideoStartTime),
        (this.m_nPlaybackTime =
          this.m_player.GetCurrentPlayTime() - this.m_nVideoStartTime),
        (this.m_nBufferedEndTime =
          this.m_player.GetBufferedEndTime() - this.m_nVideoStartTime),
        (this.m_bBuffering = this.m_player.IsBuffering()),
        this.m_bBuffering || (this.m_bPlaybackStarted = !0));
    }
    OnVolumeChange() {
      this.IsInitialized() && this.SetMuteInternal(this.m_player.IsMuted());
    }
    OnVideoEnd() {}
    OnVideoValveEnded() {
      this.m_fnOnPlaybackEnd && this.m_fnOnPlaybackEnd();
    }
    OnDownloadFailed(e) {
      (console.log(`video download failed`, e.detail),
        (this.m_eFailureReason = e.detail || d.PlaybackError));
    }
    OnUserInputNeeded() {
      this.m_bUserInputNeeded = !0;
    }
    OnMetadataChanged() {
      if (!this.IsInitialized()) return;
      let e = this.m_player.GetMaxWidthAndHeight();
      e &&
        ((this.m_maxDimensions &&
          this.m_maxDimensions.nWidth == e.nWidth &&
          this.m_maxDimensions.nHeight == e.nHeight) ||
          (this.m_maxDimensions = e));
    }
    OnCaptionsChange() {
      this.IsInitialized() &&
        ((this.m_bHasCaptions = this.m_player.BHasTimedText()),
        (this.m_bShowingCaption = this.m_player.IsShowingCaption()));
    }
    UserInputReceived() {
      this.IsInitialized() &&
        ((this.m_bUserInputNeeded = !1), this.m_player.SeekAndPlay(0));
    }
    SetVolume(e, t = !1) {
      this.IsInitialized() &&
        ((this.m_nVolume = e),
        this.m_player.SetVolume(e),
        !t &&
          this.m_persistState.m_fnSetPlayerVolume &&
          this.m_persistState.m_fnSetPlayerVolume(e));
    }
    SetMute(e, t = !1) {
      this.IsInitialized() &&
        (this.SetMuteInternal(e),
        this.m_player.SetMuted(e),
        !t &&
          this.m_persistState.m_fnSetAudioMuted &&
          this.m_persistState.m_fnSetAudioMuted(e));
    }
    SetMuteInternal(e) {
      this.m_bMuted != e &&
        ((this.m_bMuted = e),
        this.m_fnOnMuteChange && this.m_fnOnMuteChange(e));
    }
    TogglePlayPauseState() {
      return this.IsInitialized() ? (this.m_player.IsPaused() ? 1 : 2) : 0;
    }
    TogglePlayPause() {
      return this.IsInitialized()
        ? this.m_player.IsPaused()
          ? (this.Play(), 1)
          : (this.Pause(), 2)
        : 0;
    }
    Play() {
      this.IsInitialized() &&
        (this.m_player.IsAtEnd() && this.m_player.Seek(0),
        this.m_player.Play());
    }
    Pause() {
      this.IsInitialized() && this.m_player.Pause();
    }
    Seek(e) {
      this.IsInitialized() && this.m_player.Seek(this.m_nVideoStartTime + e);
    }
    SeekRelative(e) {
      this.IsInitialized() && this.m_player.Seek(this.m_nPlaybackTime + e);
    }
    UpdatePersistState(e) {
      this.m_persistState != e &&
        ((this.m_persistState = e),
        this.IsInitialized() &&
          (e.m_nPlayerVolume !== void 0 &&
            this.SetVolume(e.m_nPlayerVolume, !0),
          e.m_bAudioMuted !== void 0 && this.SetMute(e.m_bAudioMuted, !0)));
    }
    SetMuteWhenAutoplayBlocked(e) {
      ((this.m_bMuteWhenAutoplayBlocked = e),
        this.IsInitialized() && this.m_player.SetMuteOnAutoplayBlocked(e));
    }
    SetPlaybackEndCallback(e) {
      this.m_fnOnPlaybackEnd = e;
    }
    SetOnPlayPauseChangeCallback(e) {
      this.m_fnOnPlayPauseChange = e;
    }
    SetOnMuteChangeCallback(e) {
      this.m_fnOnMuteChange = e;
    }
    GetThumbnail(e) {
      return this.IsInitialized() ? this.m_player.GetThumbnail(e) : null;
    }
    GetVideoRepresentations() {
      return this.IsInitialized()
        ? this.m_player.GetVideoRepresentations()
        : [];
    }
    SetVideoRepresentation(e) {
      this.IsInitialized() && this.m_player.SetVideoRepresentation(e);
    }
    GetCaptionRepresentations() {
      return this.IsInitialized()
        ? this.m_player.GetCaptionRepresentations()
        : [];
    }
    SetCaptionRepresentation(e) {
      this.IsInitialized() && this.m_player.SetSubtitles(e);
    }
    DisableCaptions() {
      this.IsInitialized() && this.m_player.SetSubtitles(-1);
    }
    GetFailureReason() {
      return this.m_eFailureReason;
    }
    SendStats() {
      !this.m_bSentStats &&
        this.m_player &&
        this.m_strStatsURL &&
        (ze(this.m_player, this.m_strStatsURL, this.m_eFailureReason),
        (this.m_bSentStats = !0));
    }
  };
(w([t], R.prototype, `m_bPaused`, void 0),
  w([t], R.prototype, `m_bUserInputNeeded`, void 0),
  w([t], R.prototype, `m_bMuted`, void 0),
  w([t], R.prototype, `m_nVolume`, void 0),
  w([t], R.prototype, `m_eFailureReason`, void 0),
  w([t], R.prototype, `m_maxDimensions`, void 0),
  w([t], R.prototype, `m_bPlaybackStarted`, void 0),
  w([t], R.prototype, `m_bBuffering`, void 0),
  w([t], R.prototype, `m_bHasCaptions`, void 0),
  w([t], R.prototype, `m_bShowingCaption`, void 0),
  w([t], R.prototype, `m_nPlaybackTime`, void 0),
  w([t], R.prototype, `m_nVideoStartTime`, void 0),
  w([t], R.prototype, `m_nVideoDuration`, void 0),
  w([t], R.prototype, `m_nBufferedEndTime`, void 0),
  w([n.bound], R.prototype, `OnVideoPlaying`, null),
  w([k], R.prototype, `OnVideoPause`, null),
  w([n.bound], R.prototype, `OnVideoTimeUpdate`, null),
  w([k], R.prototype, `OnVolumeChange`, null),
  w([k], R.prototype, `OnVideoEnd`, null),
  w([k], R.prototype, `OnVideoValveEnded`, null),
  w([k], R.prototype, `OnDownloadFailed`, null),
  w([k], R.prototype, `OnUserInputNeeded`, null),
  w([n.bound], R.prototype, `OnMetadataChanged`, null),
  w([n.bound], R.prototype, `OnCaptionsChange`, null),
  w([k], R.prototype, `UserInputReceived`, null),
  w([n.bound], R.prototype, `SetMuteInternal`, null),
  w([k], R.prototype, `SendStats`, null));
function Ie(e, t, n, r, i, a, o) {
  let s = L(),
    c = (0, N.useRef)(void 0);
  c.current ||= new R(s);
  let l = g(
    (i) => {
      if (i) return (c.current.Start(i, e, t, n, r), () => c.current.Stop());
    },
    [c, e, t, r],
  );
  return (
    (0, N.useEffect)(() => {
      c.current.UpdatePersistState(s);
    }, [s]),
    (0, N.useEffect)(() => {
      c.current.SetPlaybackEndCallback(i);
    }, [i]),
    (0, N.useEffect)(() => {
      c.current.SetOnPlayPauseChangeCallback(a);
    }, [a]),
    (0, N.useEffect)(() => {
      (c.current.SetOnMuteChangeCallback(o), o && o(c.current.GetMuted()));
    }, [o]),
    [l, c.current]
  );
}
function Le(e, t) {
  ((t = !!t),
    (0, N.useEffect)(() => {
      e.SetMuteWhenAutoplayBlocked(t);
    }, [e, t]));
}
function Re(e, t) {
  let n = (0, N.useRef)(!1),
    r = (0, N.useRef)(!1),
    i = (0, N.useRef)(!1);
  return (
    (0, N.useEffect)(() => {
      n.current != t &&
        (t ? ((r.current = e.IsPaused()), e.Pause()) : r.current || e.Play(),
        (n.current = t));
    }, [t, n, r, e]),
    t || (i.current = !0),
    !i.current
  );
}
function ze(e, t, n) {
  if (!navigator || navigator.sendBeacon === void 0) return;
  let r = e.GetDASHPlayerStats().GetPlayerStatsSummary(),
    i = e.GetAndCloseWatchedIntervals();
  if (i.reduce((e, t) => e + (t[1] - t[0]), 0) < Pe && n == d.Invalid) return;
  let a = {
      strManifest: e.IsPlayingHLS() ? e.GetHLSURL() : e.GetMPDURL(),
      watched: i,
      eFailureReason: n,
      ...r,
    },
    o = JSON.stringify(a),
    s = new FormData();
  (s.append(`stats`, o), navigator.sendBeacon(t, s));
}
function Be(e, t) {
  if (!e || _(e) || T(e) || !t) return;
  let n = e.getElementsByTagName(`video`);
  if (n.length == 0) return;
  let r = n[0];
  r.webkitSetPresentationMode && r.webkitSetPresentationMode(`fullscreen`);
}
(0, N.createContext)(void 0);
function z(e) {
  return e ? e instanceof HTMLDialogElement : !1;
}
function Ve(e) {
  return e ? e.hasAttribute(`popover`) : !1;
}
var B = (0, N.createContext)(void 0);
function He(e) {
  let {
      iosVideoFallback: t,
      supportsTheater: n,
      supportsFullscreen: r,
      children: i,
    } = e,
    a = (0, N.useRef)(null),
    o = (0, N.useRef)(null),
    [s, c] = (0, N.useState)(`none`);
  (te(s == `theater`), (n = !!n), (r = !!r));
  let l = g(
      (e) => {
        if (((o.current = e), !e)) return;
        let t = () => {
          c((t) => (_(e) ? `fullscreen` : t == `fullscreen` ? `none` : t));
        };
        return (
          e.addEventListener(`fullscreenchange`, t),
          () => e.removeEventListener(`fullscreenchange`, t)
        );
      },
      [c],
    ),
    u = g(
      (e) => {
        if (((a.current = e), !e)) return;
        let t = () => {
            c((e) => (e == `theater` ? `none` : e));
          },
          n = (t) => {
            t.currentTarget == t.target && z(e) && e.close();
          },
          r = (e) => {
            e.newState == `close` && t();
          },
          i = new he();
        return (
          z(e)
            ? (i.AddEventListener(e, `close`, t),
              i.AddEventListener(e, `click`, n))
            : Ve(e)
              ? i.AddEventListener(e, `beforetoggle`, r)
              : ye(!1, `Was expecting a dialog or popover`),
          () => i.Unregister()
        );
      },
      [c],
    ),
    d = (0, N.useCallback)(
      (e) => {
        let n = o.current,
          r = a.current;
        (n &&
          (e != `fullscreen` && _(n) && y(n), e == `fullscreen` && Be(n, !!t)),
          z(r) &&
            (e != `theater` && r.open && r.close(),
            e == `theater` && r.showModal()),
          Ve(r) &&
            (e != `theater` && r.matches(`:popover-open`) && r.hidePopover(),
            e == `theater` && r.showPopover()),
          c(e));
      },
      [t],
    );
  (0, N.useEffect)(() => {
    s == `theater` && !n && d(`none`);
  }, [d, s, n]);
  let f = (0, N.useMemo)(
    () => ({
      refFullscreen: l,
      refTheater: u,
      strMode: s,
      bSupportsTheater: n,
      bSupportsFullscreen: r,
      fnSetMode: d,
    }),
    [l, u, s, n, r, d],
  );
  return (0, P.jsx)(B.Provider, { value: f, children: i });
}
function Ue(e) {
  let { drop: t, children: n } = e;
  return t ? (0, P.jsx)(B.Provider, { value: void 0, children: n }) : n;
}
function V() {
  return (0, N.useContext)(B);
}
function H(e, t) {
  return (0, N.useCallback)(() => {
    e && (e.strMode == t ? e.fnSetMode(`none`) : e.fnSetMode(t));
  }, [e, t]);
}
var We = `A5RRwjvEUvY-`,
  Ge = `-H-CbOmskAk-`,
  Ke = `BhmPQ-Xd2d8-`,
  qe = `_7zvFUI6bX2k-`,
  Je = `uacZ-90MOII-`,
  Ye = `k9Sm1n-4mwI-`,
  Xe = `EE0MOLi31qY-`,
  Ze = `_7GE4TR2MB3I-`,
  Qe = `pQYV6KivA1I-`,
  $e = `pEu8vzuL1UY-`,
  et = `ntDKWvpd0tk-`,
  tt = `m9RGLw-x46M-`;
function nt() {
  return g((e) => {
    if (!e) return;
    let t = (t) => {
        t.target == e && (e.style.pointerEvents = `none`);
      },
      n = (t) => {
        t.target == e && (e.style.pointerEvents = `auto`);
      };
    return (
      e.addEventListener(`transitionstart`, t),
      e.addEventListener(`transitionend`, n),
      e.addEventListener(`transitioncancel`, n),
      () => {
        (e.removeEventListener(`transitionstart`, t),
          e.removeEventListener(`transitionend`, n),
          e.removeEventListener(`transitioncancel`, n));
      }
    );
  }, []);
}
var rt = (0, N.forwardRef)(function (e, t) {
    let { children: n, ...r } = e,
      i = nt(),
      a = we(i, t);
    return (0, P.jsx)(`div`, { ref: a, ...r, children: n });
  }),
  U = 2e3,
  it = 500,
  at = 4e3,
  W = -1,
  G = N.createContext(void 0);
function ot() {
  return (0, N.useContext)(G);
}
function K(e, t, n) {
  return (0, N.useMemo)(
    () => ({ m_bMenuVisible: e, m_fnSetMenuVisible: t, m_refMenuLayer: n }),
    [e, t, n],
  );
}
function st() {
  let e = ot();
  return e ? e.m_bMenuVisible : !1;
}
function ct() {
  let e = ot();
  ye(e, `Missing controls context`);
  let t = e.m_fnSetMenuVisible;
  return ((0, N.useEffect)(() => (t(!0), () => t(!1)), [t]), e.m_refMenuLayer);
}
function lt(e, t) {
  let [n, r] = dt(e);
  return [n || t, r];
}
function q(e) {
  return e.pointerType == `touch` ? at : U;
}
function ut() {
  return it;
}
function dt(e) {
  let [t, n] = Y(),
    r = (0, N.useRef)(void 0),
    i = (0, N.useRef)(!1),
    a = (0, N.useRef)({ element: void 0, bKeepControls: !1 }),
    o = (0, N.useCallback)(
      (e) => {
        if (e.target == a.current.element) return;
        let t = ft(e);
        a.current = { element: e.target, bKeepControls: t };
      },
      [a],
    ),
    s = (0, N.useCallback)(
      (e) => {
        a.current.bKeepControls || i.current ? n(!0, 0) : n(!0, e);
      },
      [a, i, n],
    );
  (Z(e),
    pt(
      e,
      (0, N.useCallback)(
        (e) => {
          ((i.current = e), s(U));
        },
        [i, s],
      ),
    ),
    mt(
      e,
      (0, N.useCallback)(() => {
        s(U);
      }, [s]),
    ));
  let c = (0, N.useCallback)(
      (e) => {
        e.pointerType != `touch` && (o(e), s(q(e)));
      },
      [s, o],
    ),
    l = (0, N.useCallback)(
      (e) => {
        e.pointerType != `touch` && (o(e), s(q(e)));
      },
      [o, s],
    ),
    u = (0, N.useCallback)(
      (e) => {
        e.pointerType != `touch` &&
          ((a.current = { element: void 0, bKeepControls: !1 }), s(ut()));
      },
      [a, s],
    ),
    d = (0, N.useCallback)(
      (e) => {
        r.current = e.currentTarget;
      },
      [r],
    ),
    f = (0, N.useCallback)(
      (e) => {
        r.current = void 0;
      },
      [r],
    );
  return [
    t,
    {
      onPointerEnter: c,
      onPointerMove: l,
      onPointerLeave: u,
      onPointerDown: d,
      onPointerUp: (0, N.useCallback)(
        (e) => {
          let t = r.current;
          ((r.current = void 0), e.currentTarget == t && s(q(e)));
        },
        [s],
      ),
      onPointerCancel: f,
    },
  ];
}
function ft(e) {
  let t = e.target,
    n = e.currentTarget;
  for (; t && t != n;) {
    if (t.dataset?.keepcontrols == `true`) return !0;
    t = t.parentElement;
  }
  return !1;
}
function J(e) {
  let t = (0, N.useRef)(W);
  return {
    onPointerDown: (0, N.useCallback)(
      (e) => {
        (e.pointerType !== `mouse` || e.button == 0) &&
          (e.currentTarget.setPointerCapture(e.pointerId),
          (t.current = e.pointerId));
      },
      [t],
    ),
    onPointerCancel: (0, N.useCallback)(
      (e) => {
        t.current == e.pointerId && (t.current = W);
      },
      [t],
    ),
    onPointerUp: (0, N.useCallback)(
      (n) => {
        if (t.current != n.pointerId) return;
        (n.currentTarget.releasePointerCapture(n.pointerId), (t.current = W));
        let r = n.currentTarget.getBoundingClientRect(),
          { clientX: i, clientY: a } = n;
        i >= r.left && i <= r.right && a >= r.top && a <= r.bottom && e(n);
      },
      [t, e],
    ),
  };
}
function Y() {
  let [e, t] = (0, N.useState)(!1),
    n = (0, N.useRef)(void 0),
    r = (0, N.useCallback)(
      (e, r) => {
        ((n.current &&= (window.clearTimeout(n.current), void 0)),
          t(e),
          e && r != 0 && (n.current = window.setTimeout(() => t(!1), r)));
      },
      [t],
    );
  return (
    (0, N.useEffect)(
      () => () => {
        n.current && window.clearTimeout(n.current);
      },
      [],
    ),
    [e, r]
  );
}
function pt(e, t) {
  let n = (0, N.useRef)(!0),
    r = Z(e);
  (0, N.useEffect)(() => {
    let e = n.current;
    ((n.current = !1), (!e || r) && t(r));
  }, [r, t, n]);
}
function mt(e, t) {
  let n = (0, N.useRef)(!0),
    r = s(() => e.GetMuted());
  (0, N.useEffect)(() => {
    let e = n.current;
    ((n.current = !1), !e && t());
  }, [r, t, n]);
}
function X(e) {
  let [t, n] = s(() => [e.GetMuted(), e.GetVolume()]);
  return [
    t,
    n,
    (0, N.useCallback)(
      (t) => {
        (e.SetMute(!1), e.SetVolume(t));
      },
      [e],
    ),
    (0, N.useCallback)(() => e.SetMute(!t), [t, e]),
  ];
}
function ht(e) {
  return s(() => [
    e.GetPlaybackTime(),
    e.GetTimelineDuration(),
    e.GetBufferedEndTime(),
  ]);
}
function gt(e) {
  return s(() => e.GetFailureReason());
}
function Z(e) {
  return s(() => e.IsPaused());
}
function _t(e) {
  return (0, N.useCallback)(() => {
    e.TogglePlayPause();
  }, [e]);
}
function vt(e, t) {
  (0, N.useEffect)(() => {
    let n = c(() => {
      let n = e.GetMaxVideoDimensions();
      t(n ? { nWidth: n.nWidth, nHeight: n.nHeight } : null);
    });
    return () => n();
  }, [e, t]);
}
function yt(e) {
  return s(() => e.HasPlaybackStarted());
}
function bt(e) {
  return s(() => ({
    bHasCaptions: e.HasCaptions(),
    bShowingCaption: e.IsShowingCaption(),
  }));
}
var xt = `cOcEiRe-dIg-`,
  St = `QkF4JCVWpWw-`,
  Ct = `_8RH876Wgr7A-`,
  wt = `b0G5PgYKHAM-`,
  Tt = `_68B-8ItOIlc-`,
  Et = `GsDewiltMCM-`,
  Dt = `BffT7IQWKYg-`,
  Ot = `aejFKWIp7Dg-`,
  kt = `eBjRkRA8NpA-`,
  At = `RrXwg35xzWc-`,
  jt = `_98b2uQrBfN4-`,
  Mt = `LCeQJ5hJTnk-`,
  Nt = `OPuK3adv80Y-`,
  Pt = `qFZtjvdCOxo-`,
  Ft = `vzX4l4uGgUg-`,
  It = `HOEA4Jz0kQU-`,
  Lt = `AAuicaihzn0-`;
function Rt(e) {
  switch (e) {
    case 1:
      return M.Localize(`#StoreTrailer_Title_Category_Gameplay`);
    case 2:
      return M.Localize(`#StoreTrailer_Title_Category_Teaser`);
    case 3:
      return M.Localize(`#StoreTrailer_Title_Category_Cinematic`);
    case 4:
      return M.Localize(`#StoreTrailer_Title_Category_Update`);
    case 5:
      return M.Localize(`#StoreTrailer_Title_Category_Accolades`);
    case 6:
      return M.Localize(`#StoreTrailer_Title_Category_Interview`);
  }
  return M.Localize(`#StoreTrailer_Title_Category_Unknown`);
}
var zt = e(r(), 1),
  Bt = `12px`,
  Vt = `LzRinklSJ-4-`,
  Ht = `_2uk-hbrhKFI-`,
  Ut = `Y9S-qDK8XPE-`,
  Wt = 4,
  Gt = parseInt(Bt);
function Kt(e) {
  let { refButton: t, onClose: n, scroll: r, children: i } = e,
    a = (0, N.useRef)(null),
    [o, s] = (0, N.useState)({ nLeft: 0, nTop: 0 }),
    c = ct(),
    l = g(
      (e) => {
        if (((a.current = e), !e)) return;
        let r = (r) => {
          let i = oe(e, r.target),
            a = oe(t.current, r.target);
          !i && !a && n();
        };
        if (e.ownerDocument.defaultView)
          return (
            e.ownerDocument.defaultView.addEventListener(`mouseup`, r),
            () => e.ownerDocument.defaultView?.removeEventListener(`mouseup`, r)
          );
      },
      [a, n, t],
    );
  if (
    ((0, N.useLayoutEffect)(() => {
      if (!a.current || !t.current || !c.current) return;
      let e = a.current.getBoundingClientRect(),
        n = c.current.getBoundingClientRect(),
        r = t.current.getBoundingClientRect(),
        i = n.right - n.left,
        o = r.right - r.left,
        l = r.left - n.left + o / 2,
        u = e.right - e.left,
        d = x(l - u / 2, 0 + Wt, i - u - Wt),
        f = e.bottom - e.top,
        p = r.top - Gt - f - n.top;
      s({ nLeft: d, nTop: p });
    }, [a, t, c]),
    !c.current || !i)
  )
    return null;
  let u = { left: o.nLeft, top: o.nTop },
    d = A(Vt, !!r && `kaHR0KlvcO4-`),
    f = (0, P.jsx)(`div`, {
      ref: l,
      style: u,
      className: d,
      role: `menu`,
      children: i,
    });
  return zt.createPortal(f, c.current);
}
function qt(e) {
  return (0, P.jsx)(`div`, { className: Ut, role: `separator` });
}
function Jt(e) {
  let { onClick: t, checked: n, children: r } = e,
    [i, a] = D(),
    o = A(Ht, n && `vi2dzrdIGJY-`),
    s = `#2d73ff`,
    c = `#00ccff`;
  return (
    i && ((s = `#eeeeee`), (c = `#ffffff`)),
    (0, P.jsxs)(`div`, {
      className: o,
      role: `menuitemcheckbox`,
      "aria-checked": n,
      tabIndex: 0,
      onClick: t,
      onKeyDown: (e) => {
        (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), t());
      },
      ...a,
      children: [r, n && (0, P.jsx)(le, { color: s, highlightColor: c })],
    })
  );
}
function Yt(e) {
  let { player: t, refButton: n, onClose: r } = e,
    i = L(),
    a = t.GetVideoRepresentations().map((e) => {
      let n = () => {
          (t.SetVideoRepresentation(e), r());
        },
        i = Zt(e);
      return (0, P.jsx)(
        Jt,
        { onClick: n, checked: e.selected, children: i },
        e.id,
      );
    }),
    o = a.length > 1,
    s = !!i.m_fnSetAutoplayEnabled,
    c = o || !s;
  return (0, P.jsxs)(Kt, {
    refButton: n,
    onClose: r,
    children: [
      c && a,
      s && c && (0, P.jsx)(qt, {}),
      s && (0, P.jsx)(Xt, { onClose: r }),
    ],
  });
}
function Xt(e) {
  let { onClose: t } = e,
    n = L(),
    r = n.m_bAutoplayEnabled == 1,
    i = (0, N.useCallback)(() => {
      (n.m_fnSetAutoplayEnabled && n.m_fnSetAutoplayEnabled(!r), t());
    }, [r, n, t]);
  return (
    N.use(M.Ready()),
    (0, P.jsx)(Jt, {
      onClick: i,
      checked: r,
      children: M.Localize(`#StoreTrailer_AutoPlayVideos`),
    })
  );
}
function Zt(e) {
  return f(e)
    ? M.Localize(`#TrailerPlayer_Quality_Auto`)
    : e.height == 2160
      ? `2160p (4k)`
      : `${e.height}p`;
}
function Qt(e) {
  let { player: t, refButton: n, onClose: r } = e,
    i = _e(S.LANGUAGE),
    a = (0, N.useMemo)(() => {
      let e = [...t.GetCaptionRepresentations()],
        n = e.findIndex((e) => e.m_eLanguage == i);
      return (n > 0 && se(e, n, 0), e);
    }, [i, t]),
    o = [];
  for (let e of a)
    (o.push(
      (0, P.jsx)(
        Jt,
        {
          onClick: () => {
            (t.SetCaptionRepresentation(e.m_eLanguage), r());
          },
          checked: !1,
          children: e.m_strLabel,
        },
        e.m_eLanguage,
      ),
    ),
      e.m_eLanguage == i && o.push((0, P.jsx)(qt, {})));
  return o.length == 0
    ? null
    : (0, P.jsx)(Kt, { refButton: n, onClose: r, scroll: !0, children: o });
}
var $t = 4,
  en = 130,
  Q = N.forwardRef(function (e, t) {
    let {
        tooltip: n,
        onActivate: r,
        size: i,
        children: a,
        disableTooltip: o,
      } = e,
      s = st(),
      c = J(r);
    return (0, P.jsx)(ie, {
      toolTipContent: n,
      direction: `top`,
      usePointerEvents: !0,
      bDisabled: s || o,
      children: (0, P.jsx)(`div`, {
        ref: t,
        className: xt,
        ...c,
        "data-keepcontrols": !0,
        children: a,
      }),
    });
  });
function tn(e) {
  let { player: t } = e,
    [n, r] = ht(t),
    i = j(n, !1),
    a = j(r, !1);
  return (0, P.jsxs)(`div`, {
    className: St,
    children: [
      (0, P.jsx)(`span`, { children: i }),
      (0, P.jsx)(`span`, { className: Ct, children: `/` }),
      (0, P.jsx)(`span`, { children: a }),
    ],
  });
}
function nn(e) {
  let t = V(),
    n = H(t, `theater`);
  if (!t || !t.bSupportsTheater) return null;
  N.use(M.Ready());
  let r = t.strMode == `theater`,
    i = r ? (0, P.jsx)(Ee, {}) : (0, P.jsx)(De, {}),
    a = M.Localize(
      r
        ? `#TrailerPlayer_ExitTheater_Tooltip`
        : `#TrailerPlayer_EnterTheater_Tooltip`,
    );
  return (0, P.jsx)(Q, { onActivate: n, tooltip: a, children: i });
}
function $(e) {
  let t = V(),
    n = H(t, `fullscreen`);
  if (!t || !t.bSupportsFullscreen) return null;
  N.use(M.Ready());
  let r = t.strMode == `fullscreen`,
    i = r ? (0, P.jsx)(me, {}) : (0, P.jsx)(Te, {}),
    a = M.Localize(
      r
        ? `#TrailerPlayer_ExitFullScreen_Tooltip`
        : `#TrailerPlayer_FullScreen_Tooltip`,
    );
  return (0, P.jsx)(Q, { onActivate: n, tooltip: a, children: i });
}
function rn(e) {
  let { player: t } = e,
    [n, r] = (0, N.useState)(!1),
    i = (0, N.useCallback)(() => r(!1), [r]),
    a = (0, N.useRef)(null),
    o = h(),
    s = (0, N.useCallback)(() => {
      r((e) => !e);
    }, [r]),
    c = A(wt, n && `cXAaD-hLPZ0-`);
  return (
    N.use(M.Ready()),
    (0, P.jsxs)(P.Fragment, {
      children: [
        (0, P.jsx)(Q, {
          ref: a,
          onActivate: s,
          tooltip: M.Localize(`#TrailerPlayer_Settings_Tooltip`),
          disableTooltip: o,
          children: (0, P.jsx)(fe, { className: c }),
        }),
        n && (0, P.jsx)(Yt, { player: t, refButton: a, onClose: i }),
      ],
    })
  );
}
function an(e) {
  let { player: t } = e,
    [n, r] = (0, N.useState)(!1),
    i = (0, N.useCallback)(() => r(!1), [r]),
    a = (0, N.useRef)(null),
    { bHasCaptions: o, bShowingCaption: s } = bt(t),
    c = (0, N.useCallback)(() => {
      s ? t.DisableCaptions() : r((e) => !e);
    }, [r, t, s]);
  return (
    N.use(M.Ready()),
    o
      ? (0, P.jsxs)(P.Fragment, {
          children: [
            (0, P.jsxs)(Q, {
              ref: a,
              onActivate: c,
              tooltip: M.Localize(`#TrailerPlayer_Captions_Tooltip`),
              children: [s && (0, P.jsx)(C, {}), !s && (0, P.jsx)(ve, {})],
            }),
            n && (0, P.jsx)(Qt, { player: t, refButton: a, onClose: i }),
          ],
        })
      : null
  );
}
function on(e) {
  let { player: t, showHoverThumb: n, onTouchSeek: r } = e;
  N.use(M.Ready());
  let i = (0, N.useRef)(null),
    [a, o, s] = ht(t),
    [c, l] = dn(t, r),
    u = sn();
  st() && (l = null);
  let d = ln(t);
  l || (d = void 0);
  let f = { display: `none` };
  l && ((f.left = l.nTickOffset), (f.display = `block`));
  let p = E(a, 0, o, 0, 100),
    m = E(s, 0, o, 0, 100),
    h = { width: `${p.toFixed(1)}%` },
    g = { width: `${m.toFixed(1)}%` },
    _ = (e) => {
      e.key === `Home`
        ? (e.preventDefault(), t.Seek(0))
        : e.key === `End` &&
          (e.preventDefault(), t.Seek(t.GetTimelineDuration()));
    },
    v = A(Tt, l && `OXlEV5w6w1E-`);
  return (0, P.jsxs)(`div`, {
    ref: u,
    className: v,
    "data-keepcontrols": !!l,
    role: `slider`,
    tabIndex: 0,
    "aria-label": M.Localize(`#TrailerPlayer_Seek_Label`),
    "aria-valuemin": 0,
    "aria-valuemax": Math.round(o),
    "aria-valuenow": Math.round(a),
    "aria-valuetext": `${j(a, !1)} / ${j(o, !1)}`,
    onClick: d,
    onKeyDown: _,
    onPointerMove: c.onPointerMove,
    onPointerLeave: c.onPointerLeave,
    onPointerDown: c.onPointerDown,
    onLostPointerCapture: c.onLostPointerCapture,
    children: [
      (0, P.jsxs)(`div`, {
        ref: i,
        className: Et,
        onPointerEnter: c.onPointerEnter,
        children: [
          (0, P.jsx)(`div`, { className: A(Dt, Ot), style: g }),
          (0, P.jsx)(`div`, { className: A(Dt, kt), style: h }),
          (0, P.jsx)(`div`, { className: A(At), style: f }),
        ],
      }),
      (0, P.jsx)(cn, { refTimeline: i, hoverState: l, showHoverThumb: n }),
    ],
  });
}
function sn() {
  return g((e) => {
    if (!e) return;
    let t = (e) => {
        e.stopPropagation();
      },
      n = (e) => {
        e.stopPropagation();
      };
    return (
      e.addEventListener(`touchstart`, t, { passive: !1 }),
      e.addEventListener(`touchend`, n, { passive: !1 }),
      () => {
        (e.removeEventListener(`touchstart`, t),
          e.removeEventListener(`touchend`, n));
      }
    );
  }, []);
}
function cn(e) {
  let { refTimeline: t, hoverState: n, showHoverThumb: r } = e,
    i = (0, N.useRef)(null),
    [a, o] = (0, N.useState)({ nHoverLeft: 0, bFitsInParent: !1 });
  if (
    ((0, N.useLayoutEffect)(() => {
      if (!n || !i.current || !t.current) return;
      let e = t.current.getBoundingClientRect(),
        r = i.current.getBoundingClientRect(),
        a = e.right - e.left,
        s = r.right - r.left,
        c = x(n.nTickOffset - s / 2, 0 + $t, a - s - $t),
        l = re(
          i.current.ownerDocument.documentElement,
          i.current,
          `data-trailer-player`,
        ),
        u = !0;
      if (l) {
        let e = l.getBoundingClientRect();
        u = r.top > e.top;
      }
      o((e) =>
        e.nHoverLeft == c && e.bFitsInParent == u
          ? e
          : { nHoverLeft: c, bFitsInParent: u },
      );
    }, [n, i, t, o]),
    !n)
  )
    return null;
  let s = {
      left: a.nHoverLeft,
      visibility: a.bFitsInParent ? `visible` : `hidden`,
    },
    c,
    l = r ? n.thumbnail : null;
  if (l) {
    let e = en / l.nThumbnailHeight;
    c = {
      width: `${l.nThumbnailWidth * e}px`,
      height: `${l.nThumbnailHeight * e}px`,
      backgroundImage: `url(${l.strTileURL})`,
      backgroundPosition: `-${l.x * e}px -${l.y * e}px`,
      backgroundSize: `${l.nImageWidth * e}px ${l.nImageHeight * e}px`,
      backgroundRepeat: `no-repeat`,
    };
  }
  return (0, P.jsxs)(`div`, {
    ref: i,
    style: s,
    className: jt,
    children: [
      !!l && (0, P.jsx)(`div`, { style: c, className: `nCXGrQlbkbg-` }),
      (0, P.jsx)(`span`, {
        className: Mt,
        children: u(n.nPlaybackSeconds, !0),
      }),
    ],
  });
}
function ln(e) {
  return (0, N.useCallback)(
    (t) => {
      let n = t.currentTarget.getBoundingClientRect(),
        r = (t.pageX - n.left) / (n.right - n.left);
      (e.Seek(r * e.GetTimelineDuration()),
        t.preventDefault(),
        t.stopPropagation());
    },
    [e],
  );
}
function un(e, t, n) {
  let r = n - t.left,
    i = t.right - t.left;
  r = x(r, 0, i);
  let a = r / i,
    o = Math.floor(e.GetTimelineDuration() * a),
    s = e.GetThumbnail(o);
  return s ? { nTickOffset: r, nPlaybackSeconds: o, thumbnail: s } : null;
}
function dn(e, t) {
  let [n, r] = (0, N.useState)(null),
    i = (0, N.useRef)(null),
    a = (0, N.useRef)(null);
  return [
    {
      onPointerEnter: (0, N.useCallback)(
        (t) => {
          if (t.pointerType != `mouse` && t.pointerType != `pen`) return;
          i.current = t.currentTarget;
          let n = un(e, i.current.getBoundingClientRect(), t.clientX);
          r(n);
        },
        [i, r, e],
      ),
      onPointerMove: (0, N.useCallback)(
        (n) => {
          let o = i.current;
          if (((o ||= a.current), !o)) return;
          let s = un(e, o.getBoundingClientRect(), n.clientX);
          (r(s),
            a.current &&
              t &&
              t(
                s
                  ? {
                      thumbnail: s.thumbnail,
                      nPlaybackSeconds: s.nPlaybackSeconds,
                    }
                  : null,
              ));
        },
        [i, a, e, r, t],
      ),
      onPointerLeave: (0, N.useCallback)(
        (e) => {
          i.current && ((i.current = null), r((e) => null));
        },
        [r],
      ),
      onPointerDown: (0, N.useCallback)(
        (n) => {
          ((a.current = n.currentTarget),
            a.current.setPointerCapture(n.pointerId),
            (document.body.style.userSelect = `none`));
          let i = un(e, a.current.getBoundingClientRect(), n.clientX);
          (r(i),
            t &&
              t(
                i
                  ? {
                      thumbnail: i.thumbnail,
                      nPlaybackSeconds: i.nPlaybackSeconds,
                    }
                  : null,
              ));
        },
        [a, t, e],
      ),
      onLostPointerCapture: (0, N.useCallback)(
        (e) => {
          a.current &&
            ((a.current = null),
            (document.body.style.userSelect = ``),
            i.current || r(null),
            t && t(null));
        },
        [a, i, t, r],
      ),
    },
    n,
  ];
}
function fn(e) {
  let { player: t } = e,
    n = gt(t);
  N.use(M.Ready());
  let r = ``;
  return (
    n == d.UnsupportedMediaType
      ? (r = M.Localize(`#TrailerPlayer_Error_UnsupportedCodec`))
      : n != d.Invalid && (r = M.Localize(`#TrailerPlayer_Error_Playback`)),
    r
      ? (0, P.jsx)(`div`, {
          className: Nt,
          children: (0, P.jsx)(`span`, { children: r }),
        })
      : null
  );
}
function pn(e) {
  let { player: t } = e,
    [n, r, i, a] = X(t);
  N.use(M.Ready());
  let o = h(),
    s = n ? (0, P.jsx)(v, {}) : (0, P.jsx)(be, {}),
    c = M.Localize(
      n ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
    );
  return (0, P.jsx)(Q, {
    onActivate: a,
    tooltip: c,
    disableTooltip: o,
    children: s,
  });
}
function mn(e) {
  let { player: t } = e,
    n = Z(t);
  N.use(M.Ready());
  let r = n ? (0, P.jsx)(F, {}) : (0, P.jsx)(I, {}),
    i = M.Localize(
      n ? `#TrailerPlayer_Play_Tooltip` : `#TrailerPlayer_Pause_Tooltip`,
    ),
    a = _t(t);
  return (0, P.jsx)(Q, { onActivate: a, tooltip: i, children: r });
}
function hn(e) {
  let { category: t, title: n } = e,
    r = Rt(t);
  return (0, P.jsxs)(`div`, {
    className: Pt,
    children: [
      (0, P.jsx)(`span`, { className: Ft, children: r }),
      (0, P.jsx)(`span`, { className: It }),
      (0, P.jsx)(`span`, { className: Lt, children: n }),
    ],
  });
}
function gn(e, t, n) {
  let r = yt(t),
    [i, a] = (0, N.useState)(``),
    o = (0, N.useRef)(0);
  ((0, N.useEffect)(() => {
    r &&
      !n &&
      i == `` &&
      (a(`active`), (o.current = window.setTimeout(() => a(`complete`), 4e3)));
  }, [r, n, i, o, a]),
    (0, N.useEffect)(() => {
      n && (a(`complete`), window.clearTimeout(o.current));
    }, [n]),
    (0, N.useEffect)(() => () => window.clearTimeout(o.current), []));
  let s = (0, N.useRef)(!1);
  return (
    i == `complete` && !n && (s.current = !0),
    e == `once` && s.current ? !1 : i == `active` || n
  );
}
var _n = 200,
  vn = 5e3;
function yn(e) {
  let { player: t, category: n, title: r, focus: i } = e,
    a = (0, N.useRef)(null),
    o = (0, N.useRef)(null),
    [s, c] = lt(t, !1),
    [l, u] = (0, N.useState)(!1),
    d = K(l, u, a);
  s ||= l;
  let f = bn(t),
    p = ee(!!i),
    m = A(Ke, s && `YnJEGhfB0wI-`);
  return (0, P.jsx)(G.Provider, {
    value: d,
    children: (0, P.jsxs)(`div`, {
      ref: p,
      className: m,
      ...c,
      onKeyDown: f,
      tabIndex: 0,
      children: [
        (0, P.jsxs)(`div`, {
          className: qe,
          children: [
            (0, P.jsx)(Cn, { player: t, enabled: s && !l }),
            (0, P.jsx)(Tn, {}),
            (0, P.jsxs)(rt, {
              ref: o,
              className: Xe,
              children: [
                (0, P.jsx)(on, { player: t, showHoverThumb: !0 }),
                (0, P.jsxs)(`div`, {
                  className: Ze,
                  children: [
                    (0, P.jsxs)(`div`, {
                      className: Qe,
                      children: [
                        (0, P.jsx)(mn, { player: t }),
                        (0, P.jsx)(En, { player: t, refControlsHover: o }),
                        (0, P.jsx)(tn, { player: t }),
                      ],
                    }),
                    (0, P.jsxs)(`div`, {
                      className: $e,
                      children: [
                        (0, P.jsx)(an, { player: t }),
                        (0, P.jsx)(rn, { player: t }),
                        (0, P.jsx)(nn, {}),
                        (0, P.jsx)($, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, P.jsx)(Sn, {
          player: t,
          controlsVisible: s,
          category: n,
          title: r,
        }),
        (0, P.jsx)(`div`, { ref: a, className: tt }),
      ],
    }),
  });
}
function bn(e) {
  let t = H(V(), `fullscreen`);
  return (0, N.useCallback)(
    (n) => {
      n.repeat ||
        (n.code == `Space`
          ? (e.TogglePlayPause(), n.preventDefault())
          : n.code == `ArrowLeft`
            ? e.SeekRelative(-5)
            : n.code == `ArrowRight`
              ? e.SeekRelative(vn / 1e3)
              : n.key == `f` || n.key == `F`
                ? (t(), n.preventDefault())
                : (n.key == `m` || n.key == `M`) &&
                  (e.SetMute(!e.GetMuted()), n.preventDefault()));
    },
    [e, t],
  );
}
function xn(e, t) {
  let n = (0, N.useRef)(null),
    r = (0, N.useRef)(1),
    i = (0, N.useRef)(0),
    [a, o] = (0, N.useState)([]),
    s = (0, N.useCallback)(
      (a) => {
        if (a.target != n.current) return;
        let s = e.TogglePlayPauseState(),
          c = r.current++;
        o((e) => [{ nID: c, eState: s }, ...e]);
        let l = () => {
          ((i.current = 0), e.TogglePlayPause());
        };
        a.pointerType == `mouse`
          ? i.current
            ? (window.clearTimeout(i.current), (i.current = 0), t())
            : (i.current = window.setTimeout(l, _n))
          : l();
      },
      [n, i, e, o, t],
    ),
    c = (0, N.useCallback)(
      (e) => {
        o((t) => t.filter((t) => t.nID != e));
      },
      [o],
    );
  return (
    (0, N.useEffect)(
      () => () => {
        (window.clearTimeout(i.current), (i.current = 0));
      },
      [i],
    ),
    { refBackground: n, inputEvents: J(s), clickEvents: a, fnRemoveEvent: c }
  );
}
function Sn(e) {
  let { player: t, controlsVisible: n, category: r, title: i } = e,
    a = gn(`once`, t, n);
  if (r == 0 || !i) return null;
  let o = A(Ye, a && `YnJEGhfB0wI-`);
  return (0, P.jsx)(`div`, {
    className: o,
    children: (0, P.jsx)(hn, { category: r, title: i }),
  });
}
function Cn(e) {
  let { player: t, enabled: n } = e,
    {
      refBackground: r,
      inputEvents: i,
      clickEvents: a,
      fnRemoveEvent: o,
    } = xn(t, H(V(), `fullscreen`)),
    s = A(We, n && `T3UUyZ88ees-`);
  return (0, P.jsx)(`div`, {
    ref: r,
    className: s,
    ...i,
    children: a.map((e) =>
      (0, P.jsx)(wn, { event: e, removeEvent: o }, `icon_${e.nID}`),
    ),
  });
}
function wn(e) {
  let { event: t, removeEvent: n } = e,
    r = t.nID,
    i = (0, N.useCallback)(() => {
      n(r);
    }, [r, n]),
    a = null;
  return (
    t.eState == Fe.Play
      ? (a = (0, P.jsx)(F, {}))
      : t.eState == Fe.Pause && (a = (0, P.jsx)(I, {})),
    (0, P.jsx)(`div`, { className: Ge, onAnimationEnd: i, children: a })
  );
}
function Tn(e) {
  return (0, P.jsx)(`div`, { className: Je });
}
function En(e) {
  let { player: t, refControlsHover: n } = e,
    [r, i, a, o] = X(t),
    [s, c] = Dn(n),
    l;
  l =
    r || i === 0
      ? (0, P.jsx)(v, {})
      : i < 0.3
        ? (0, P.jsx)(ae, {})
        : i < 0.6
          ? (0, P.jsx)(b, {})
          : (0, P.jsx)(be, {});
  let u = M.Localize(
    r ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
  );
  return (0, P.jsxs)(`div`, {
    className: et,
    onMouseEnter: c,
    "data-keepcontrols": !0,
    children: [
      (0, P.jsx)(Q, { onActivate: o, tooltip: u, children: l }),
      s &&
        (0, P.jsx)(`div`, {
          className: `KiYQJsCfGxI-`,
          children: (0, P.jsx)(pe, {
            min: 0,
            max: 1,
            value: r ? 0 : i,
            step: 0.01,
            onChange: a,
            dpadStep: 0.1,
          }),
        }),
    ],
  });
}
function Dn(e) {
  let [t, n] = (0, N.useState)(!1),
    r = (0, N.useCallback)(() => n(!0), [n]);
  return (
    m(e, `mouseleave`, (e) => {
      e.target == e.currentTarget && n(!1);
    }),
    [t, r]
  );
}
var On = `WRCisr6uZYw-`,
  kn = `gbdFcNy5G4k-`,
  An = `lX5nIJvBefY-`,
  jn = `iAXbsgjjZHI-`,
  Mn = `-EEbXf-3XVE-`,
  Nn = `iFREa-vsmpo-`,
  Pn = `AP1io-MKcDs-`,
  Fn = `Bxu-c02i-fA-`,
  In = `pYxY-oYjIxc-`,
  Ln = `xbX-APAH9aY-`,
  Rn = `RjlRnmjZiYM-`,
  zn = 3e3,
  Bn = 1e3;
function Vn(e) {
  let { player: t, category: n, title: r } = e,
    i = (0, N.useRef)(null),
    [a, o] = Hn(i, t, !1),
    s = (0, N.useRef)(null),
    [c, l] = (0, N.useState)(!1),
    u = K(c, l, s);
  a ||= c;
  let [d, f] = qn(t),
    p = A(kn, a && `CjbQpCvOpk4-`),
    m = A(Nn, !!d && `X3KS6LYOx9o-`);
  return (0, P.jsx)(G.Provider, {
    value: u,
    children: (0, P.jsxs)(`div`, {
      className: On,
      ...o,
      children: [
        (0, P.jsxs)(`div`, {
          ref: i,
          className: p,
          children: [
            (0, P.jsx)(Kn, { thumbnail: d }),
            (0, P.jsx)(Gn, {}),
            (0, P.jsx)(`div`, {
              className: m,
              children: (0, P.jsx)(Jn, { player: t }),
            }),
            (0, P.jsxs)(`div`, {
              className: Fn,
              children: [
                (0, P.jsx)(on, {
                  player: t,
                  onTouchSeek: f,
                  showHoverThumb: !1,
                }),
                (0, P.jsxs)(`div`, {
                  className: In,
                  children: [
                    (0, P.jsx)(`div`, {
                      className: Ln,
                      children: (0, P.jsx)(tn, { player: t }),
                    }),
                    (0, P.jsxs)(`div`, {
                      className: Rn,
                      children: [
                        (0, P.jsx)(pn, { player: t }),
                        (0, P.jsx)(an, { player: t }),
                        (0, P.jsx)(rn, { player: t }),
                        (0, P.jsx)($, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, P.jsx)(Wn, {
          player: t,
          controlsVisible: a,
          category: n,
          title: r,
        }),
        (0, P.jsx)(`div`, { ref: s, className: void 0 }),
      ],
    }),
  });
}
function Hn(e, t, n) {
  let [r, i] = Un(e, t);
  return ((r ||= n), [r, i]);
}
function Un(e, t) {
  let [n, r] = Y(),
    i = (0, N.useRef)(null),
    a = (0, N.useRef)(!0),
    o = Z(t);
  return (
    (0, N.useEffect)(() => {
      let e = a.current;
      ((a.current = !1), (!e || o) && r(!0, o ? 0 : Bn));
    }, [o, r, a]),
    [
      n,
      {
        onPointerDown: (0, N.useCallback)(
          (e) => {
            i.current = e.target;
          },
          [i],
        ),
        onPointerCancel: (0, N.useCallback)(
          (e) => {
            i.current = null;
          },
          [i],
        ),
        onPointerUp: (0, N.useCallback)(
          (t) => {
            let a = i.current;
            if (((i.current = null), a == null)) return;
            let s = o ? 0 : zn;
            t.target != a || e.current != a ? r(!0, s) : r(!n, s);
          },
          [r, e, o, n],
        ),
      },
    ]
  );
}
function Wn(e) {
  let { player: t, controlsVisible: n, category: r, title: i } = e,
    a = gn(`standard`, t, n);
  if (r == 0 || !i) return null;
  let o = A(Mn, a && !n && `lwGDx-ob6f4-`, n && `FEfadjF0-XY-`);
  return (0, P.jsx)(`div`, {
    className: o,
    children: (0, P.jsx)(hn, { category: r, title: i }),
  });
}
function Gn(e) {
  return (0, P.jsx)(`div`, { className: An });
}
function Kn(e) {
  let { thumbnail: t } = e,
    [n, r] = (0, N.useState)(null),
    i = (0, N.useCallback)(
      (e) => {
        if (!e) {
          r(null);
          return;
        }
        let t = e.getBoundingClientRect(),
          n = t.right - t.left,
          i = t.bottom - t.top;
        r({ width: n, height: i });
      },
      [r],
    );
  if (!t) return null;
  let a = { display: `none` };
  if (n) {
    let e = n.width / t.nThumbnailWidth,
      r = n.height / t.nThumbnailHeight,
      i = Math.min(e, r);
    a = {
      width: `${t.nThumbnailWidth * i}px`,
      height: `${t.nThumbnailHeight * i}px`,
      backgroundImage: `url(${t.strTileURL})`,
      backgroundPosition: `-${t.x * i}px -${t.y * i}px`,
      backgroundSize: `${t.nImageWidth * i}px ${t.nImageHeight * i}px`,
      backgroundRepeat: `no-repeat`,
    };
  }
  return (0, P.jsx)(`div`, {
    ref: i,
    className: jn,
    children: (0, P.jsx)(`div`, { style: a, className: void 0 }),
  });
}
function qn(e) {
  let [t, n] = (0, N.useState)(null),
    r = (0, N.useRef)(!1),
    i = (0, N.useRef)(null);
  return [
    t,
    N.useCallback(
      (t) => {
        let a = t ? t.thumbnail : null;
        (!e.IsPaused() && a && ((r.current = !0), e.Pause()),
          !a && r.current && (e.Play(), (r.current = !1)),
          i.current && !a && e.Seek(i.current.nPlaybackSeconds),
          (i.current = t),
          n(a));
      },
      [e, n, r],
    ),
  ];
}
function Jn(e) {
  let { player: t } = e,
    n = Z(t),
    r = J(_t(t)),
    i = n ? (0, P.jsx)(F, {}) : (0, P.jsx)(I, {});
  return (0, P.jsx)(`div`, { className: Pn, ...r, children: i });
}
var Yn = `_3uW6UUMmrCg-`,
  Xn = `fqgqcMMEHV0-`,
  Zn = `_6koTzpHyyWw-`,
  Qn = `wz7DrfLBweo-`,
  $n = `qHxUvsFtfPA-`,
  er = `Mq-yAxjkoj4-`,
  tr = `v15xRo4R128-`,
  nr = `_5mPY672VSPM-`,
  rr = `rlgvACT4pJc-`,
  ir = 3e3,
  ar = 1500;
function or(e) {
  let { player: t, category: n, title: r } = e,
    [i, a] = sr(t, !1),
    o = Z(t),
    s = cr(t, a),
    c = _t(t),
    [l, u, d, f] = X(t),
    p = (0, N.useCallback)(() => {
      (f(), a());
    }, [f, a]),
    m = (0, N.useCallback)(
      (e) => {
        !t.IsPaused() && e.currentTarget == e.target && t.TogglePlayPause();
      },
      [t],
    ),
    h = (0, N.useRef)(null),
    [g, _] = (0, N.useState)(!1),
    v = K(g, _, h),
    y = l ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
    b = o ? `#TrailerPlayer_Play_Tooltip` : `#TrailerPlayer_Pause_Tooltip`,
    x = A(Xn, i && `wXx6UBVpmP0-`);
  return (0, P.jsx)(G.Provider, {
    value: v,
    children: (0, P.jsxs)(ge, {
      className: Yn,
      focusable: !0,
      onClick: m,
      onOKActionDescription: M.Localize(b),
      onOKButton: c,
      onSecondaryButton: p,
      onSecondaryActionDescription: M.Localize(y),
      onButtonDown: s,
      children: [
        (0, P.jsxs)(`div`, {
          className: x,
          children: [
            (0, P.jsx)(ur, {}),
            (0, P.jsxs)(`div`, {
              className: $n,
              children: [
                (0, P.jsx)(on, { player: t, showHoverThumb: !1 }),
                (0, P.jsxs)(`div`, {
                  className: er,
                  children: [
                    (0, P.jsxs)(`div`, {
                      className: tr,
                      children: [
                        (0, P.jsx)(mn, { player: t }),
                        (0, P.jsx)(tn, { player: t }),
                      ],
                    }),
                    (0, P.jsx)(`div`, {
                      className: nr,
                      children: (0, P.jsx)(pn, { player: t }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, P.jsx)(lr, {
          player: t,
          controlsVisible: i,
          category: n,
          title: r,
        }),
        (0, P.jsx)(`div`, { ref: h, className: void 0 }),
      ],
    }),
  });
}
function sr(e, t) {
  let [n, r] = Y(),
    i = (0, N.useRef)(!0),
    a = Z(e);
  return (
    (0, N.useEffect)(() => {
      let e = i.current;
      ((i.current = !1), (!e || a) && r(!0, a ? 0 : ar));
    }, [a, r, i]),
    [
      n,
      (0, N.useCallback)(() => {
        r(!0, ir);
      }, [r]),
    ]
  );
}
function cr(e, t) {
  return (0, N.useCallback)(
    (n) => {
      if (n.detail.button == ce.TRIGGER_LEFT && e) {
        let r = Math.max(0, e.GetPlaybackTime() - 10);
        (e.Seek(r), t(), n.preventDefault(), n.stopPropagation());
      } else if (n.detail.button == ce.TRIGGER_RIGHT && e) {
        let r = Math.min(e.GetTimelineDuration(), e.GetPlaybackTime() + 10);
        (e.Seek(r), t(), n.preventDefault(), n.stopPropagation());
      }
    },
    [e, t],
  );
}
function lr(e) {
  let { player: t, controlsVisible: n, category: r, title: i } = e,
    a = gn(`standard`, t, n);
  if (r == 0 || !i) return null;
  let o = A(Zn, a && `wXx6UBVpmP0-`);
  return (0, P.jsx)(`div`, {
    className: o,
    children: (0, P.jsx)(`div`, {
      className: Qn,
      children: (0, P.jsx)(hn, { category: r, title: i }),
    }),
  });
}
function ur(e) {
  return (0, P.jsx)(`div`, { className: rr });
}
var dr = 500,
  fr = `responsive_menu_ignore_touch`;
function pr(e) {
  return V()
    ? (0, P.jsx)(N.Suspense, {
        children: (0, P.jsx)(mr, { ...e, localContext: !1 }),
      })
    : (0, P.jsx)(N.Suspense, {
        children: (0, P.jsx)(He, {
          iosVideoFallback: !0,
          supportsTheater: !1,
          supportsFullscreen: !0,
          children: (0, P.jsx)(mr, { ...e, localContext: !0 }),
        }),
      });
}
function mr(e) {
  let {
    ref: t,
    dashManifests: n,
    hlsManifest: r,
    captionManifest: i,
    screenshot: a,
    forcePause: o,
    onPlaybackStart: c,
    onPlaybackEnd: l,
    onPlayPauseChange: u,
    onMuteChange: d,
    uiMode: f,
    altText: p,
    title: m,
    category: h,
    statsURL: g,
    muteWhenAutoplayBlocked: _,
    localContext: v,
    focus: y,
  } = e;
  ((m ||= ``), (h ||= 0));
  let [b, x] = Ie(n, r, i, g, l, u, d);
  (hr(t, x), Le(x, !!_));
  let [ee, S] = gr(x),
    C = V(),
    te = v && C ? C.refFullscreen : null,
    w = we(ee, te),
    T = Re(x, !!o),
    E = T ? void 0 : b,
    D = {};
  S && ((D.width = `${S.nWidth}px`), (D.height = `${S.nHeight}px`));
  let O = s(() => x.IsBuffering());
  (N.useEffect(() => {
    O || (c && c());
  }, [O, c]),
    N.use(M.Ready()));
  let ne = A(Oe, fr);
  return (0, P.jsxs)(`div`, {
    ref: w,
    className: ne,
    "data-trailer-player": !0,
    children: [
      (0, P.jsx)(`video`, {
        ref: E,
        style: D,
        controls: !1,
        playsInline: !0,
        "aria-label": p,
        crossOrigin: `anonymous`,
      }),
      (0, P.jsx)(_r, { player: x, uiMode: f, category: h, title: m, focus: y }),
      (0, P.jsx)(vr, { player: x }),
      !T && (0, P.jsx)(yr, { player: x, screenshot: a }),
      !T && (0, P.jsx)(fn, { player: x }),
    ],
  });
}
function hr(e, t) {
  (0, N.useImperativeHandle)(
    e,
    () => ({
      Play() {
        t.Play();
      },
      Pause() {
        t.Pause();
      },
      IsPaused() {
        return t.IsPaused();
      },
      SeekToStart() {
        t.Seek(0);
      },
      GetVolume() {
        return t.GetVolume();
      },
      SetVolume(e, n) {
        t.SetVolume(e, n);
      },
    }),
    [t],
  );
}
function gr(e) {
  let t = (0, N.useRef)(null),
    n = (0, N.useRef)(null),
    r = (0, N.useRef)(null),
    i = Se(),
    a = (0, N.useCallback)(() => {
      let e = n.current,
        a = t.current;
      if (!e || !a) return;
      let [o, s] = O(a.nWidth, a.nHeight, e.nWidth, e.nHeight);
      ((o = e.nWidth - o < 2 ? e.nWidth : Math.ceil(o)),
        (s = e.nHeight - s < 2 ? e.nHeight : Math.ceil(s)));
      let c = r.current;
      (c && c.nWidth == o && c.nHeight == s) ||
        ((r.current = { nWidth: o, nHeight: s }), i());
    }, [t, n, r, i]);
  vt(
    e,
    (0, N.useCallback)(
      (e) => {
        ((t.current = e), a());
      },
      [t, a],
    ),
  );
  let o = (0, N.useCallback)(
    (e) => {
      ((n.current = {
        nWidth: e.contentRect.width,
        nHeight: e.contentRect.height,
      }),
        a());
    },
    [n, a],
  );
  return [ue(o), r.current];
}
function _r(e) {
  let { player: t, uiMode: n, category: r, title: i, focus: a } = e,
    o = Ce(),
    s = h();
  return (
    (n && n != `auto`) || (n = de() || s ? `touch` : o ? `gamepad` : `desktop`),
    n == `touch`
      ? (0, P.jsx)(Vn, { player: t, category: r, title: i })
      : n == `gamepad`
        ? (0, P.jsx)(or, { player: t, category: r, title: i })
        : (0, P.jsx)(yn, { player: t, category: r, title: i, focus: a })
  );
}
function vr(e) {
  let { player: t } = e,
    [n, r] = (0, N.useState)(`norender`),
    i = s(() => t.IsBuffering());
  ((0, N.useEffect)(() => {
    if (!i) return;
    let e = window.setTimeout(() => r(`fadein`), 1e3);
    return () => {
      e && window.clearTimeout(e);
    };
  }, [i, r]),
    (0, N.useEffect)(() => {
      if (i) return;
      r(`fadeout`);
      let e = window.setTimeout(() => r(`norender`), 300);
      return () => window.clearTimeout(e);
    }, [i, r]));
  let a = n != `norender`,
    o = A(ke, n == `fadein` && `ZxF0VUYsuGU-`);
  return (0, P.jsx)(`div`, {
    className: o,
    children: a && (0, P.jsx)(l, { size: `large`, position: `center` }),
  });
}
function yr(e) {
  let { player: t, screenshot: n } = e,
    r = s(() => t.GetUserInputNeeded()),
    i = ne(r, dr),
    [a, o] = (0, N.useState)(!1),
    c = N.useCallback(() => {
      (t.UserInputReceived(), o(!0));
    }, [t]);
  if (
    (N.useEffect(() => {
      if (!a) return;
      let e = setTimeout(() => o(!1), 500);
      return () => clearTimeout(e);
    }, [a]),
    !i)
  )
    return null;
  N.use(M.Ready());
  let l = {};
  return (
    n && (l.backgroundImage = `url('${n}')`),
    (0, P.jsx)(`div`, {
      style: l,
      className: Ae,
      role: `button`,
      tabIndex: 0,
      "aria-label": M.Localize(`#TrailerPlayer_Play_Tooltip`),
      onClick: c,
      onKeyDown: (e) => {
        (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), c());
      },
      children: (0, P.jsx)(`div`, {
        className: A(je, a && `_5fVtqw5G7SE-`),
        children: (0, P.jsx)(F, {}),
      }),
    })
  );
}
function br(...e) {
  return e.join(` `);
}
var xr = `rs5MCL6BI2A-`,
  Sr = `iRWZX4LtE-Q-`,
  Cr = `_5yccD-xlOTc-`;
function wr(e) {
  let { name: t, trailerCategory: n, trailerDisplay: r, mouseOver: i } = e,
    [a, o] = N.useState(!1);
  if (
    (N.useEffect(() => {
      r != 0 && o(!0);
    }, [r]),
    N.useEffect(() => {
      if (i) {
        o(!0);
        return;
      }
      if (!a) return;
      let e = setTimeout(() => o(!1), 3e3);
      return () => clearTimeout(e);
    }, [a, i]),
    n == null || r == 0)
  )
    return;
  let s = r == 1 ? xe.Localize(`#StoreTrailer_Title_TrailerPreview`) : Rt(n);
  return (0, P.jsx)(`div`, {
    className: A({ [xr]: !0, [Cr]: a }),
    children: xe.LocalizeReact(
      `#StoreTrailer_Title_Combiner`,
      (0, P.jsx)(`span`, { className: Sr, children: s }),
      t,
    ),
  });
}
export {
  nn as a,
  ut as c,
  He as d,
  V as f,
  F as g,
  L as h,
  $ as i,
  Y as l,
  Ne as m,
  br as n,
  ft as o,
  H as p,
  pr as r,
  q as s,
  wr as t,
  Ue as u,
};
