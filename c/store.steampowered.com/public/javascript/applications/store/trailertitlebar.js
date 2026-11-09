import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _, _, _ } from "./libraries.js";
import { _ } from "./throbber.js";
import { _ } from "./stringutils.js";
import { _, _, _ } from "./dashplayer.js";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./main.js";
var _ = _(_()),
  _ = _();
function _(_) {
  return (0, _.jsx)(`svg`, {
    className: `SVGIcon_Button`,
    width: `36`,
    height: `36`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M31.3137 19.5299L10.0583 32.3788C9.77894 32.5477 9.45165 32.6083 9.13395 32.5496C8.81603 32.4909 8.52835 32.3169 8.32083 32.0582C8.11354 31.7995 8 31.4723 8 31.1346V5.4368C8 5.09914 8.11354 4.77196 8.32083 4.51325C8.52833 4.25455 8.81604 4.08049 9.13395 4.02181C9.45165 3.96313 9.77896 4.02377 10.0583 4.19261L31.3137 17.0415C31.593 17.2103 31.8068 17.4769 31.9172 17.7942C32.0276 18.1116 32.0276 18.4598 31.9172 18.7772C31.8068 19.0945 31.593 19.3611 31.3137 19.5299Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    className: `SVGIcon_Button`,
    width: `36`,
    height: `36`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M14.3333 30C14.3333 30.5523 13.8856 31 13.3333 31H8C7.44772 31 7 30.5523 7 30V6C7 5.44772 7.44772 5 8 5H13.3333C13.8856 5 14.3333 5.44772 14.3333 6V30ZM29 6C29 5.44772 28.5523 5 28 5H22.6667C22.1144 5 21.6667 5.44772 21.6667 6V30C21.6667 30.5523 22.1144 31 22.6667 31H28C28.5523 31 29 30.5523 29 30V6Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    className: `SVGIcon_Button`,
    width: `36`,
    height: `36`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M4 4H14V8H8V14H4V4ZM22 4V8H28V14H32V4H22ZM28 28H22V32H32V22H28V28ZM8 22H4V32H14V28H8V22Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    width: `128`,
    height: `128`,
    viewBox: `0 0 128 128`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M12 88H116V40H12V88ZM128 94C128 97.3137 125.314 100 122 100H6C2.78979 100 0.168429 97.4789 0.0078125 94.3086L0 94V34C0 30.6863 2.68629 28 6 28H122C125.314 28 128 30.6863 128 34V94Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    width: `128`,
    height: `128`,
    viewBox: `0 0 128 128`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M12 88H116V40H12V88ZM128 94C128 97.3137 125.314 100 122 100H6C2.78979 100 0.168429 97.4789 0.0078125 94.3086L0 94V34C0 30.6863 2.68629 28 6 28H122C125.314 28 128 30.6863 128 34V94Z`,
      fill: `currentColor`,
    }),
  });
}
var _ = `hPeepTEP2A0-`,
  _ = `RzxfM12jbio-`,
  _ = `kQJ64kMGQbg-`,
  _ = `_74WMutU3Gxc-`,
  _ = (0, _.createContext)({});
function _(_) {
  let {
      autoplayEnabled: _,
      setAutoplayEnabled: _,
      playerVolume: _,
      setPlayerVolume: _,
      audioMuted: _,
      setAudioMuted: _,
      children: _,
    } = _,
    _ = (0, _.useMemo)(
      () => ({
        m_bAutoplayEnabled: _,
        m_fnSetAutoplayEnabled: _,
        m_nPlayerVolume: _,
        m_fnSetPlayerVolume: _,
        m_bAudioMuted: _,
        m_fnSetAudioMuted: _,
      }),
      [_, _, _, _, _, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  return (0, _.useContext)(_);
}
var _ = 5,
  _ = (function (_) {
    return (
      (_[(_.None = 0)] = `None`),
      (_[(_.Play = 1)] = `Play`),
      (_[(_.Pause = 2)] = `Pause`),
      _
    );
  })({}),
  _ = class {
    m_elVideo = null;
    m_player = null;
    m_listeners = new _();
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
    m_eFailureReason = _.Invalid;
    m_maxDimensions = null;
    m_bPlaybackStarted = !1;
    m_bBuffering = !0;
    m_bHasCaptions = !1;
    m_bShowingCaption = !1;
    m_nPlaybackTime = 0;
    m_nVideoStartTime = 0;
    m_nVideoDuration = 0;
    m_nBufferedEndTime = 0;
    constructor(_) {
      _(this), (this.m_persistState = _ || {});
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
    Start(_, _, _, _, _) {
      this.Stop(),
        (this.m_strStatsURL = _ || ``),
        (this.m_elVideo = _),
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
        (this.m_player = new _(this.m_elVideo)),
        this.m_player.SetTimeoutAfterFailedDownload(!1);
      let _ =
        this.m_persistState.m_bAudioMuted !== void 0 &&
        this.m_persistState.m_bAudioMuted;
      this.SetMute(_, !0);
      let _ =
        this.m_persistState.m_nPlayerVolume === void 0
          ? 1
          : this.m_persistState.m_nPlayerVolume;
      this.SetVolume(_, !0),
        this.m_player.SetMuteOnAutoplayBlocked(this.m_bMuteWhenAutoplayBlocked),
        this.m_player.PlayMPD(_, _, _);
    }
    Stop() {
      this.SendStats(),
        this.m_listeners.Unregister(),
        this.m_player && this.m_player.Close(),
        (this.m_elVideo = null),
        (this.m_player = null),
        (this.m_bPaused = !1),
        (this.m_bUserInputNeeded = !1),
        (this.m_nPlaybackTime = 0),
        (this.m_nVideoStartTime = 0),
        (this.m_nVideoDuration = 0),
        (this.m_nBufferedEndTime = 0);
    }
    IsInitialized() {
      return !!this.m_player && !!this.m_elVideo;
    }
    OnVideoPlaying() {
      let _ = this.m_bPaused;
      (this.m_bPaused = !1),
        (this.m_bUserInputNeeded = !1),
        _ && this.m_fnOnPlayPauseChange && this.m_fnOnPlayPauseChange(!0);
    }
    OnVideoPause() {
      let _ = this.m_bPaused;
      (this.m_bPaused = !0),
        !_ && this.m_fnOnPlayPauseChange && this.m_fnOnPlayPauseChange(!1);
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
    OnDownloadFailed(_) {
      console.log(`video download failed`, _.detail),
        (this.m_eFailureReason = _.detail || _.PlaybackError);
    }
    OnUserInputNeeded() {
      this.m_bUserInputNeeded = !0;
    }
    OnMetadataChanged() {
      if (!this.IsInitialized()) return;
      let _ = this.m_player.GetMaxWidthAndHeight();
      _ &&
        ((this.m_maxDimensions &&
          this.m_maxDimensions.nWidth == _.nWidth &&
          this.m_maxDimensions.nHeight == _.nHeight) ||
          (this.m_maxDimensions = _));
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
    SetVolume(_, _ = !1) {
      this.IsInitialized() &&
        ((this.m_nVolume = _),
        this.m_player.SetVolume(_),
        !_ &&
          this.m_persistState.m_fnSetPlayerVolume &&
          this.m_persistState.m_fnSetPlayerVolume(_));
    }
    SetMute(_, _ = !1) {
      this.IsInitialized() &&
        (this.SetMuteInternal(_),
        this.m_player.SetMuted(_),
        !_ &&
          this.m_persistState.m_fnSetAudioMuted &&
          this.m_persistState.m_fnSetAudioMuted(_));
    }
    SetMuteInternal(_) {
      this.m_bMuted != _ &&
        ((this.m_bMuted = _),
        this.m_fnOnMuteChange && this.m_fnOnMuteChange(_));
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
    Seek(_) {
      this.IsInitialized() && this.m_player.Seek(this.m_nVideoStartTime + _);
    }
    SeekRelative(_) {
      this.IsInitialized() && this.m_player.Seek(this.m_nPlaybackTime + _);
    }
    UpdatePersistState(_) {
      this.m_persistState != _ &&
        ((this.m_persistState = _),
        this.IsInitialized() &&
          (_.m_nPlayerVolume !== void 0 &&
            this.SetVolume(_.m_nPlayerVolume, !0),
          _.m_bAudioMuted !== void 0 && this.SetMute(_.m_bAudioMuted, !0)));
    }
    SetMuteWhenAutoplayBlocked(_) {
      (this.m_bMuteWhenAutoplayBlocked = _),
        this.IsInitialized() && this.m_player.SetMuteOnAutoplayBlocked(_);
    }
    SetPlaybackEndCallback(_) {
      this.m_fnOnPlaybackEnd = _;
    }
    SetOnPlayPauseChangeCallback(_) {
      this.m_fnOnPlayPauseChange = _;
    }
    SetOnMuteChangeCallback(_) {
      this.m_fnOnMuteChange = _;
    }
    GetThumbnail(_) {
      return this.IsInitialized() ? this.m_player.GetThumbnail(_) : null;
    }
    GetVideoRepresentations() {
      return this.IsInitialized()
        ? this.m_player.GetVideoRepresentations()
        : [];
    }
    SetVideoRepresentation(_) {
      this.IsInitialized() && this.m_player.SetVideoRepresentation(_);
    }
    GetCaptionRepresentations() {
      return this.IsInitialized()
        ? this.m_player.GetCaptionRepresentations()
        : [];
    }
    SetCaptionRepresentation(_) {
      this.IsInitialized() && this.m_player.SetSubtitles(_);
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
        (_(this.m_player, this.m_strStatsURL, this.m_eFailureReason),
        (this.m_bSentStats = !0));
    }
  };
_([_], _.prototype, `m_bPaused`, void 0),
  _([_], _.prototype, `m_bUserInputNeeded`, void 0),
  _([_], _.prototype, `m_bMuted`, void 0),
  _([_], _.prototype, `m_nVolume`, void 0),
  _([_], _.prototype, `m_eFailureReason`, void 0),
  _([_], _.prototype, `m_maxDimensions`, void 0),
  _([_], _.prototype, `m_bPlaybackStarted`, void 0),
  _([_], _.prototype, `m_bBuffering`, void 0),
  _([_], _.prototype, `m_bHasCaptions`, void 0),
  _([_], _.prototype, `m_bShowingCaption`, void 0),
  _([_], _.prototype, `m_nPlaybackTime`, void 0),
  _([_], _.prototype, `m_nVideoStartTime`, void 0),
  _([_], _.prototype, `m_nVideoDuration`, void 0),
  _([_], _.prototype, `m_nBufferedEndTime`, void 0),
  _([_.bound], _.prototype, `OnVideoPlaying`, null),
  _([_], _.prototype, `OnVideoPause`, null),
  _([_.bound], _.prototype, `OnVideoTimeUpdate`, null),
  _([_], _.prototype, `OnVolumeChange`, null),
  _([_], _.prototype, `OnVideoEnd`, null),
  _([_], _.prototype, `OnVideoValveEnded`, null),
  _([_], _.prototype, `OnDownloadFailed`, null),
  _([_], _.prototype, `OnUserInputNeeded`, null),
  _([_.bound], _.prototype, `OnMetadataChanged`, null),
  _([_.bound], _.prototype, `OnCaptionsChange`, null),
  _([_], _.prototype, `UserInputReceived`, null),
  _([_.bound], _.prototype, `SetMuteInternal`, null),
  _([_], _.prototype, `SendStats`, null);
function _(_, _, _, _, _, _, _) {
  let _ = _(),
    _ = (0, _.useRef)(void 0);
  _.current ||= new _(_);
  let _ = _(
    (_) => {
      if (_) return _.current.Start(_, _, _, _, _), () => _.current.Stop();
    },
    [_, _, _, _],
  );
  return (
    (0, _.useEffect)(() => {
      _.current.UpdatePersistState(_);
    }, [_]),
    (0, _.useEffect)(() => {
      _.current.SetPlaybackEndCallback(_);
    }, [_]),
    (0, _.useEffect)(() => {
      _.current.SetOnPlayPauseChangeCallback(_);
    }, [_]),
    (0, _.useEffect)(() => {
      _.current.SetOnMuteChangeCallback(_), _ && _(_.current.GetMuted());
    }, [_]),
    [_, _.current]
  );
}
function _(_, _) {
  (_ = !!_),
    (0, _.useEffect)(() => {
      _.SetMuteWhenAutoplayBlocked(_);
    }, [_, _]);
}
function _(_, _) {
  let _ = (0, _.useRef)(!1),
    _ = (0, _.useRef)(!1),
    _ = (0, _.useRef)(!1);
  return (
    (0, _.useEffect)(() => {
      _.current != _ &&
        (_ ? ((_.current = _.IsPaused()), _.Pause()) : _.current || _.Play(),
        (_.current = _));
    }, [_, _, _, _]),
    _ || (_.current = !0),
    !_.current
  );
}
function _(_, _, _) {
  if (!navigator || navigator.sendBeacon === void 0) return;
  let _ = _.GetDASHPlayerStats().GetPlayerStatsSummary(),
    _ = _.GetAndCloseWatchedIntervals();
  if (_.reduce((_, _) => _ + (_[1] - _[0]), 0) < _ && _ == _.Invalid) return;
  let _ = {
      strManifest: _.IsPlayingHLS() ? _.GetHLSURL() : _.GetMPDURL(),
      watched: _,
      eFailureReason: _,
      ..._,
    },
    _ = JSON.stringify(_),
    _ = new FormData();
  _.append(`stats`, _), navigator.sendBeacon(_, _);
}
function _(_, _) {
  if (!_ || _(_) || _(_) || !_) return;
  let _ = _.getElementsByTagName(`video`);
  if (_.length == 0) return;
  let _ = _[0];
  _.webkitSetPresentationMode && _.webkitSetPresentationMode(`fullscreen`);
}
(0, _.createContext)(void 0);
function _(_) {
  return _ ? _ instanceof HTMLDialogElement : !1;
}
function _(_) {
  return _ ? _.hasAttribute(`popover`) : !1;
}
var _ = (0, _.createContext)(void 0);
function _(_) {
  let {
      iosVideoFallback: _,
      supportsTheater: _,
      supportsFullscreen: _,
      children: _,
    } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(`none`);
  _(_ == `theater`), (_ = !!_), (_ = !!_);
  let _ = _(
      (_) => {
        if (((_.current = _), !_)) return;
        let _ = () => {
          _((_) => (_(_) ? `fullscreen` : _ == `fullscreen` ? `none` : _));
        };
        return (
          _.addEventListener(`fullscreenchange`, _),
          () => _.removeEventListener(`fullscreenchange`, _)
        );
      },
      [_],
    ),
    _ = _(
      (_) => {
        if (((_.current = _), !_)) return;
        let _ = () => {
            _((_) => (_ == `theater` ? `none` : _));
          },
          _ = (_) => {
            _.currentTarget == _.target && _(_) && _.close();
          },
          _ = (_) => {
            _.newState == `close` && _();
          },
          _ = new _();
        return (
          _(_)
            ? (_.AddEventListener(_, `close`, _),
              _.AddEventListener(_, `click`, _))
            : _(_)
              ? _.AddEventListener(_, `beforetoggle`, _)
              : _(!1, `Was expecting a dialog or popover`),
          () => _.Unregister()
        );
      },
      [_],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        let _ = _.current,
          _ = _.current;
        _ &&
          (_ != `fullscreen` && _(_) && _(_), _ == `fullscreen` && _(_, !!_)),
          _(_) &&
            (_ != `theater` && _.open && _.close(),
            _ == `theater` && _.showModal()),
          _(_) &&
            (_ != `theater` && _.matches(`:popover-open`) && _.hidePopover(),
            _ == `theater` && _.showPopover()),
          _(_);
      },
      [_],
    );
  (0, _.useEffect)(() => {
    _ == `theater` && !_ && _(`none`);
  }, [_, _, _]);
  let _ = (0, _.useMemo)(
    () => ({
      refFullscreen: _,
      refTheater: _,
      strMode: _,
      bSupportsTheater: _,
      bSupportsFullscreen: _,
      fnSetMode: _,
    }),
    [_, _, _, _, _, _],
  );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _(_) {
  let { drop: _, children: _ } = _;
  return _
    ? (0, _.jsx)(_.Provider, {
        value: void 0,
        children: _,
      })
    : _;
}
function _() {
  return (0, _.useContext)(_);
}
function _(_, _) {
  return (0, _.useCallback)(() => {
    _ && (_.strMode == _ ? _.fnSetMode(`none`) : _.fnSetMode(_));
  }, [_, _]);
}
var _ = `A5RRwjvEUvY-`,
  _ = `-H-CbOmskAk-`,
  _ = `BhmPQ-Xd2d8-`,
  _ = `_7zvFUI6bX2k-`,
  _ = `uacZ-90MOII-`,
  _ = `k9Sm1n-4mwI-`,
  _ = `EE0MOLi31qY-`,
  _ = `_7GE4TR2MB3I-`,
  _ = `pQYV6KivA1I-`,
  _ = `pEu8vzuL1UY-`,
  _ = `ntDKWvpd0tk-`,
  _ = `m9RGLw-x46M-`;
function _() {
  return _((_) => {
    if (!_) return;
    let _ = (_) => {
        _.target == _ && (_.style.pointerEvents = `none`);
      },
      _ = (_) => {
        _.target == _ && (_.style.pointerEvents = `auto`);
      };
    return (
      _.addEventListener(`transitionstart`, _),
      _.addEventListener(`transitionend`, _),
      _.addEventListener(`transitioncancel`, _),
      () => {
        _.removeEventListener(`transitionstart`, _),
          _.removeEventListener(`transitionend`, _),
          _.removeEventListener(`transitioncancel`, _);
      }
    );
  }, []);
}
var _ = (0, _.forwardRef)(function (_, _) {
    let { children: _, ..._ } = _,
      _ = _(),
      _ = _(_, _);
    return (0, _.jsx)(`div`, {
      ref: _,
      ..._,
      children: _,
    });
  }),
  _ = 2e3,
  _ = 500,
  _ = 4e3,
  _ = -1,
  _ = _.createContext(void 0);
function _() {
  return (0, _.useContext)(_);
}
function _(_, _, _) {
  return (0, _.useMemo)(
    () => ({
      m_bMenuVisible: _,
      m_fnSetMenuVisible: _,
      m_refMenuLayer: _,
    }),
    [_, _, _],
  );
}
function _() {
  let _ = _();
  return _ ? _.m_bMenuVisible : !1;
}
function _() {
  let _ = _();
  _(_, `Missing controls context`);
  let _ = _.m_fnSetMenuVisible;
  return (0, _.useEffect)(() => (_(!0), () => _(!1)), [_]), _.m_refMenuLayer;
}
function _(_, _) {
  let [_, _] = _(_);
  return [_ || _, _];
}
function _(_) {
  return _.pointerType == `touch` ? _ : _;
}
function _() {
  return _;
}
function _(_) {
  let [_, _] = _(),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(!1),
    _ = (0, _.useRef)({
      element: void 0,
      bKeepControls: !1,
    }),
    _ = (0, _.useCallback)(
      (_) => {
        if (_.target == _.current.element) return;
        let _ = _(_);
        _.current = {
          element: _.target,
          bKeepControls: _,
        };
      },
      [_],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _.current.bKeepControls || _.current ? _(!0, 0) : _(!0, _);
      },
      [_, _, _],
    );
  _(_),
    _(
      _,
      (0, _.useCallback)(
        (_) => {
          (_.current = _), _(_);
        },
        [_, _],
      ),
    ),
    _(
      _,
      (0, _.useCallback)(() => {
        _(_);
      }, [_]),
    );
  let _ = (0, _.useCallback)(
      (_) => {
        _.pointerType != `touch` && (_(_), _(_(_)));
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _.pointerType != `touch` && (_(_), _(_(_)));
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _.pointerType != `touch` &&
          ((_.current = {
            element: void 0,
            bKeepControls: !1,
          }),
          _(_()));
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _.current = _.currentTarget;
      },
      [_],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _.current = void 0;
      },
      [_],
    );
  return [
    _,
    {
      onPointerEnter: _,
      onPointerMove: _,
      onPointerLeave: _,
      onPointerDown: _,
      onPointerUp: (0, _.useCallback)(
        (_) => {
          let _ = _.current;
          (_.current = void 0), _.currentTarget == _ && _(_(_));
        },
        [_],
      ),
      onPointerCancel: _,
    },
  ];
}
function _(_) {
  let _ = _.target,
    _ = _.currentTarget;
  for (; _ && _ != _; ) {
    if (_.dataset?.keepcontrols == `true`) return !0;
    _ = _.parentElement;
  }
  return !1;
}
function _(_) {
  let _ = (0, _.useRef)(_);
  return {
    onPointerDown: (0, _.useCallback)(
      (_) => {
        (_.pointerType !== `mouse` || _.button == 0) &&
          (_.currentTarget.setPointerCapture(_.pointerId),
          (_.current = _.pointerId));
      },
      [_],
    ),
    onPointerCancel: (0, _.useCallback)(
      (_) => {
        _.current == _.pointerId && (_.current = _);
      },
      [_],
    ),
    onPointerUp: (0, _.useCallback)(
      (_) => {
        if (_.current != _.pointerId) return;
        _.currentTarget.releasePointerCapture(_.pointerId), (_.current = _);
        let _ = _.currentTarget.getBoundingClientRect(),
          { clientX: _, clientY: _ } = _;
        _ >= _.left && _ <= _.right && _ >= _.top && _ <= _.bottom && _(_);
      },
      [_, _],
    ),
  };
}
function _() {
  let [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useCallback)(
      (_, _) => {
        (_.current &&= (window.clearTimeout(_.current), void 0)),
          _(_),
          _ && _ != 0 && (_.current = window.setTimeout(() => _(!1), _));
      },
      [_],
    );
  return (
    (0, _.useEffect)(
      () => () => {
        _.current && window.clearTimeout(_.current);
      },
      [],
    ),
    [_, _]
  );
}
function _(_, _) {
  let _ = (0, _.useRef)(!0),
    _ = _(_);
  (0, _.useEffect)(() => {
    let _ = _.current;
    (_.current = !1), (!_ || _) && _(_);
  }, [_, _, _]);
}
function _(_, _) {
  let _ = (0, _.useRef)(!0),
    _ = _(() => _.GetMuted());
  (0, _.useEffect)(() => {
    let _ = _.current;
    (_.current = !1), !_ && _();
  }, [_, _, _]);
}
function _(_) {
  let [_, _] = _(() => [_.GetMuted(), _.GetVolume()]);
  return [
    _,
    _,
    (0, _.useCallback)(
      (_) => {
        _.SetMute(!1), _.SetVolume(_);
      },
      [_],
    ),
    (0, _.useCallback)(() => _.SetMute(!_), [_, _]),
  ];
}
function _(_) {
  return _(() => [
    _.GetPlaybackTime(),
    _.GetTimelineDuration(),
    _.GetBufferedEndTime(),
  ]);
}
function _(_) {
  return _(() => _.GetFailureReason());
}
function _(_) {
  return _(() => _.IsPaused());
}
function _(_) {
  return (0, _.useCallback)(() => {
    _.TogglePlayPause();
  }, [_]);
}
function _(_, _) {
  (0, _.useEffect)(() => {
    let _ = _(() => {
      let _ = _.GetMaxVideoDimensions();
      _(
        _
          ? {
              nWidth: _.nWidth,
              nHeight: _.nHeight,
            }
          : null,
      );
    });
    return () => _();
  }, [_, _]);
}
function _(_) {
  return _(() => _.HasPlaybackStarted());
}
function _(_) {
  return _(() => ({
    bHasCaptions: _.HasCaptions(),
    bShowingCaption: _.IsShowingCaption(),
  }));
}
var _ = `cOcEiRe-dIg-`,
  _ = `QkF4JCVWpWw-`,
  _ = `_8RH876Wgr7A-`,
  _ = `b0G5PgYKHAM-`,
  _ = `_68B-8ItOIlc-`,
  _ = `GsDewiltMCM-`,
  _ = `BffT7IQWKYg-`,
  _ = `aejFKWIp7Dg-`,
  _ = `eBjRkRA8NpA-`,
  _ = `RrXwg35xzWc-`,
  _ = `_98b2uQrBfN4-`,
  _ = `LCeQJ5hJTnk-`,
  _ = `OPuK3adv80Y-`,
  _ = `qFZtjvdCOxo-`,
  _ = `vzX4l4uGgUg-`,
  _ = `HOEA4Jz0kQU-`,
  _ = `AAuicaihzn0-`;
function _(_) {
  switch (_) {
    case 1:
      return _.Localize(`#StoreTrailer_Title_Category_Gameplay`);
    case 2:
      return _.Localize(`#StoreTrailer_Title_Category_Teaser`);
    case 3:
      return _.Localize(`#StoreTrailer_Title_Category_Cinematic`);
    case 4:
      return _.Localize(`#StoreTrailer_Title_Category_Update`);
    case 5:
      return _.Localize(`#StoreTrailer_Title_Category_Accolades`);
    case 6:
      return _.Localize(`#StoreTrailer_Title_Category_Interview`);
  }
  return _.Localize(`#StoreTrailer_Title_Category_Unknown`);
}
var _ = _(_(), 1),
  _ = `12px`,
  _ = `LzRinklSJ-4-`,
  _ = `_2uk-hbrhKFI-`,
  _ = `Y9S-qDK8XPE-`,
  _ = 4,
  _ = parseInt(_);
function _(_) {
  let { refButton: _, onClose: _, scroll: _, children: _ } = _,
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)({
      nLeft: 0,
      nTop: 0,
    }),
    _ = _(),
    _ = _(
      (_) => {
        if (((_.current = _), !_)) return;
        let _ = (_) => {
          let _ = _(_, _.target),
            _ = _(_.current, _.target);
          !_ && !_ && _();
        };
        if (_.ownerDocument.defaultView)
          return (
            _.ownerDocument.defaultView.addEventListener(`mouseup`, _),
            () => _.ownerDocument.defaultView?.removeEventListener(`mouseup`, _)
          );
      },
      [_, _, _],
    );
  if (
    ((0, _.useLayoutEffect)(() => {
      if (!_.current || !_.current || !_.current) return;
      let _ = _.current.getBoundingClientRect(),
        _ = _.current.getBoundingClientRect(),
        _ = _.current.getBoundingClientRect(),
        _ = _.right - _.left,
        _ = _.right - _.left,
        _ = _.left - _.left + _ / 2,
        _ = _.right - _.left,
        _ = _(_ - _ / 2, 0 + _, _ - _ - _),
        _ = _.bottom - _.top,
        _ = _.top - _ - _ - _.top;
      _({
        nLeft: _,
        nTop: _,
      });
    }, [_, _, _]),
    !_.current || !_)
  )
    return null;
  let _ = {
      left: _.nLeft,
      top: _.nTop,
    },
    _ = _(_, !!_ && `kaHR0KlvcO4-`),
    _ = (0, _.jsx)(`div`, {
      ref: _,
      style: _,
      className: _,
      role: `menu`,
      children: _,
    });
  return _.createPortal(_, _.current);
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    role: `separator`,
  });
}
function _(_) {
  let { onClick: _, checked: _, children: _ } = _,
    [_, _] = _(),
    _ = _(_, _ && `vi2dzrdIGJY-`),
    _ = `#2d73ff`,
    _ = `#00ccff`;
  return (
    _ && ((_ = `#eeeeee`), (_ = `#ffffff`)),
    (0, _.jsxs)(`div`, {
      className: _,
      role: `menuitemcheckbox`,
      "aria-checked": _,
      tabIndex: 0,
      onClick: _,
      onKeyDown: (_) => {
        (_.key === `Enter` || _.key === ` `) && (_.preventDefault(), _());
      },
      ..._,
      children: [
        _,
        _ &&
          (0, _.jsx)(_, {
            color: _,
            highlightColor: _,
          }),
      ],
    })
  );
}
function _(_) {
  let { player: _, refButton: _, onClose: _ } = _,
    _ = _(),
    _ = _.GetVideoRepresentations().map((_) => {
      let _ = () => {
          _.SetVideoRepresentation(_), _();
        },
        _ = _(_);
      return (0, _.jsx)(
        _,
        {
          onClick: _,
          checked: _.selected,
          children: _,
        },
        _._,
      );
    }),
    _ = _.length > 1,
    _ = !!_.m_fnSetAutoplayEnabled,
    _ = _ || !_;
  return (0, _.jsxs)(_, {
    refButton: _,
    onClose: _,
    children: [
      _ && _,
      _ && _ && (0, _.jsx)(_, {}),
      _ &&
        (0, _.jsx)(_, {
          onClose: _,
        }),
    ],
  });
}
function _(_) {
  let { onClose: _ } = _,
    _ = _(),
    _ = _.m_bAutoplayEnabled == 1,
    _ = (0, _.useCallback)(() => {
      _.m_fnSetAutoplayEnabled && _.m_fnSetAutoplayEnabled(!_), _();
    }, [_, _, _]);
  return (
    _.use(_.Ready()),
    (0, _.jsx)(_, {
      onClick: _,
      checked: _,
      children: _.Localize(`#StoreTrailer_AutoPlayVideos`),
    })
  );
}
function _(_) {
  return _(_)
    ? _.Localize(`#TrailerPlayer_Quality_Auto`)
    : _.height == 2160
      ? `2160p (4k)`
      : `${_.height}p`;
}
function _(_) {
  let { player: _, refButton: _, onClose: _ } = _,
    _ = _(_.LANGUAGE),
    _ = (0, _.useMemo)(() => {
      let _ = [..._.GetCaptionRepresentations()],
        _ = _.findIndex((_) => _.m_eLanguage == _);
      return _ > 0 && _(_, _, 0), _;
    }, [_, _]),
    _ = [];
  for (let _ of _)
    _.push(
      (0, _.jsx)(
        _,
        {
          onClick: () => {
            _.SetCaptionRepresentation(_.m_eLanguage), _();
          },
          checked: !1,
          children: _.m_strLabel,
        },
        _.m_eLanguage,
      ),
    ),
      _.m_eLanguage == _ && _.push((0, _.jsx)(_, {}));
  return _.length == 0
    ? null
    : (0, _.jsx)(_, {
        refButton: _,
        onClose: _,
        scroll: !0,
        children: _,
      });
}
var _ = 4,
  _ = 130,
  _ = _.forwardRef(function (_, _) {
    let {
        tooltip: _,
        onActivate: _,
        size: _,
        children: _,
        disableTooltip: _,
      } = _,
      _ = _(),
      _ = _(_);
    return (0, _.jsx)(_, {
      toolTipContent: _,
      direction: `top`,
      usePointerEvents: !0,
      bDisabled: _ || _,
      children: (0, _.jsx)(`div`, {
        ref: _,
        className: _,
        ..._,
        "data-keepcontrols": !0,
        children: _,
      }),
    });
  });
function _(_) {
  let { player: _ } = _,
    [_, _] = _(_),
    _ = _(_, !1),
    _ = _(_, !1);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`span`, {
        children: _,
      }),
      (0, _.jsx)(`span`, {
        className: _,
        children: `/`,
      }),
      (0, _.jsx)(`span`, {
        children: _,
      }),
    ],
  });
}
function _(_) {
  let _ = _(),
    _ = _(_, `theater`);
  if (!_ || !_.bSupportsTheater) return null;
  _.use(_.Ready());
  let _ = _.strMode == `theater`,
    _ = _ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
    _ = _.Localize(
      _
        ? `#TrailerPlayer_ExitTheater_Tooltip`
        : `#TrailerPlayer_EnterTheater_Tooltip`,
    );
  return (0, _.jsx)(_, {
    onActivate: _,
    tooltip: _,
    children: _,
  });
}
function _(_) {
  let _ = _(),
    _ = _(_, `fullscreen`);
  if (!_ || !_.bSupportsFullscreen) return null;
  _.use(_.Ready());
  let _ = _.strMode == `fullscreen`,
    _ = _ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
    _ = _.Localize(
      _
        ? `#TrailerPlayer_ExitFullScreen_Tooltip`
        : `#TrailerPlayer_FullScreen_Tooltip`,
    );
  return (0, _.jsx)(_, {
    onActivate: _,
    tooltip: _,
    children: _,
  });
}
function _(_) {
  let { player: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useCallback)(() => _(!1), [_]),
    _ = (0, _.useRef)(null),
    _ = _(),
    _ = (0, _.useCallback)(() => {
      _((_) => !_);
    }, [_]),
    _ = _(_, _ && `cXAaD-hLPZ0-`);
  return (
    _.use(_.Ready()),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          ref: _,
          onActivate: _,
          tooltip: _.Localize(`#TrailerPlayer_Settings_Tooltip`),
          disableTooltip: _,
          children: (0, _.jsx)(_, {
            className: _,
          }),
        }),
        _ &&
          (0, _.jsx)(_, {
            player: _,
            refButton: _,
            onClose: _,
          }),
      ],
    })
  );
}
function _(_) {
  let { player: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useCallback)(() => _(!1), [_]),
    _ = (0, _.useRef)(null),
    { bHasCaptions: _, bShowingCaption: _ } = _(_),
    _ = (0, _.useCallback)(() => {
      _ ? _.DisableCaptions() : _((_) => !_);
    }, [_, _, _]);
  return (
    _.use(_.Ready()),
    _
      ? (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)(_, {
              ref: _,
              onActivate: _,
              tooltip: _.Localize(`#TrailerPlayer_Captions_Tooltip`),
              children: [_ && (0, _.jsx)(_, {}), !_ && (0, _.jsx)(_, {})],
            }),
            _ &&
              (0, _.jsx)(_, {
                player: _,
                refButton: _,
                onClose: _,
              }),
          ],
        })
      : null
  );
}
function _(_) {
  let { player: _, showHoverThumb: _, onTouchSeek: _ } = _;
  _.use(_.Ready());
  let _ = (0, _.useRef)(null),
    [_, _, _] = _(_),
    [_, _] = _(_, _),
    _ = _();
  _() && (_ = null);
  let _ = _(_);
  _ || (_ = void 0);
  let _ = {
    display: `none`,
  };
  _ && ((_.left = _.nTickOffset), (_.display = `block`));
  let _ = _(_, 0, _, 0, 100),
    _ = _(_, 0, _, 0, 100),
    _ = {
      width: `${_.toFixed(1)}%`,
    },
    _ = {
      width: `${_.toFixed(1)}%`,
    },
    _ = (_) => {
      _.key === `Home`
        ? (_.preventDefault(), _.Seek(0))
        : _.key === `End` &&
          (_.preventDefault(), _.Seek(_.GetTimelineDuration()));
    },
    _ = _(_, _ && `OXlEV5w6w1E-`);
  return (0, _.jsxs)(`div`, {
    ref: _,
    className: _,
    "data-keepcontrols": !!_,
    role: `slider`,
    tabIndex: 0,
    "aria-label": _.Localize(`#TrailerPlayer_Seek_Label`),
    "aria-valuemin": 0,
    "aria-valuemax": Math.round(_),
    "aria-valuenow": Math.round(_),
    "aria-valuetext": `${_(_, !1)} / ${_(_, !1)}`,
    onClick: _,
    onKeyDown: _,
    onPointerMove: _.onPointerMove,
    onPointerLeave: _.onPointerLeave,
    onPointerDown: _.onPointerDown,
    onLostPointerCapture: _.onLostPointerCapture,
    children: [
      (0, _.jsxs)(`div`, {
        ref: _,
        className: _,
        onPointerEnter: _.onPointerEnter,
        children: [
          (0, _.jsx)(`div`, {
            className: _(_, _),
            style: _,
          }),
          (0, _.jsx)(`div`, {
            className: _(_, _),
            style: _,
          }),
          (0, _.jsx)(`div`, {
            className: _(_),
            style: _,
          }),
        ],
      }),
      (0, _.jsx)(_, {
        refTimeline: _,
        hoverState: _,
        showHoverThumb: _,
      }),
    ],
  });
}
function _() {
  return _((_) => {
    if (!_) return;
    let _ = (_) => {
        _.stopPropagation();
      },
      _ = (_) => {
        _.stopPropagation();
      };
    return (
      _.addEventListener(`touchstart`, _, {
        passive: !1,
      }),
      _.addEventListener(`touchend`, _, {
        passive: !1,
      }),
      () => {
        _.removeEventListener(`touchstart`, _),
          _.removeEventListener(`touchend`, _);
      }
    );
  }, []);
}
function _(_) {
  let { refTimeline: _, hoverState: _, showHoverThumb: _ } = _,
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)({
      nHoverLeft: 0,
      bFitsInParent: !1,
    });
  if (
    ((0, _.useLayoutEffect)(() => {
      if (!_ || !_.current || !_.current) return;
      let _ = _.current.getBoundingClientRect(),
        _ = _.current.getBoundingClientRect(),
        _ = _.right - _.left,
        _ = _.right - _.left,
        _ = _(_.nTickOffset - _ / 2, 0 + _, _ - _ - _),
        _ = _(
          _.current.ownerDocument.documentElement,
          _.current,
          `data-trailer-player`,
        ),
        _ = !0;
      if (_) {
        let _ = _.getBoundingClientRect();
        _ = _.top > _.top;
      }
      _((_) =>
        _.nHoverLeft == _ && _.bFitsInParent == _
          ? _
          : {
              nHoverLeft: _,
              bFitsInParent: _,
            },
      );
    }, [_, _, _, _]),
    !_)
  )
    return null;
  let _ = {
      left: _.nHoverLeft,
      visibility: _.bFitsInParent ? `visible` : `hidden`,
    },
    _,
    _ = _ ? _.thumbnail : null;
  if (_) {
    let _ = _ / _.nThumbnailHeight;
    _ = {
      width: `${_.nThumbnailWidth * _}px`,
      height: `${_.nThumbnailHeight * _}px`,
      backgroundImage: `url(${_.strTileURL})`,
      backgroundPosition: `-${_._ * _}px -${_._ * _}px`,
      backgroundSize: `${_.nImageWidth * _}px ${_.nImageHeight * _}px`,
      backgroundRepeat: `no-repeat`,
    };
  }
  return (0, _.jsxs)(`div`, {
    ref: _,
    style: _,
    className: _,
    children: [
      !!_ &&
        (0, _.jsx)(`div`, {
          style: _,
          className: `nCXGrQlbkbg-`,
        }),
      (0, _.jsx)(`span`, {
        className: _,
        children: _(_.nPlaybackSeconds, !0),
      }),
    ],
  });
}
function _(_) {
  return (0, _.useCallback)(
    (_) => {
      let _ = _.currentTarget.getBoundingClientRect(),
        _ = (_.pageX - _.left) / (_.right - _.left);
      _.Seek(_ * _.GetTimelineDuration()),
        _.preventDefault(),
        _.stopPropagation();
    },
    [_],
  );
}
function _(_, _, _) {
  let _ = _ - _.left,
    _ = _.right - _.left;
  _ = _(_, 0, _);
  let _ = _ / _,
    _ = Math.floor(_.GetTimelineDuration() * _),
    _ = _.GetThumbnail(_);
  return _
    ? {
        nTickOffset: _,
        nPlaybackSeconds: _,
        thumbnail: _,
      }
    : null;
}
function _(_, _) {
  let [_, _] = (0, _.useState)(null),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null);
  return [
    {
      onPointerEnter: (0, _.useCallback)(
        (_) => {
          if (_.pointerType != `mouse` && _.pointerType != `pen`) return;
          _.current = _.currentTarget;
          let _ = _(_, _.current.getBoundingClientRect(), _.clientX);
          _(_);
        },
        [_, _, _],
      ),
      onPointerMove: (0, _.useCallback)(
        (_) => {
          let _ = _.current;
          if (((_ ||= _.current), !_)) return;
          let _ = _(_, _.getBoundingClientRect(), _.clientX);
          _(_),
            _.current &&
              _ &&
              _(
                _
                  ? {
                      thumbnail: _.thumbnail,
                      nPlaybackSeconds: _.nPlaybackSeconds,
                    }
                  : null,
              );
        },
        [_, _, _, _, _],
      ),
      onPointerLeave: (0, _.useCallback)(
        (_) => {
          _.current && ((_.current = null), _((_) => null));
        },
        [_],
      ),
      onPointerDown: (0, _.useCallback)(
        (_) => {
          (_.current = _.currentTarget),
            _.current.setPointerCapture(_.pointerId),
            (document.body.style.userSelect = `none`);
          let _ = _(_, _.current.getBoundingClientRect(), _.clientX);
          _(_),
            _ &&
              _(
                _
                  ? {
                      thumbnail: _.thumbnail,
                      nPlaybackSeconds: _.nPlaybackSeconds,
                    }
                  : null,
              );
        },
        [_, _, _],
      ),
      onLostPointerCapture: (0, _.useCallback)(
        (_) => {
          _.current &&
            ((_.current = null),
            (document.body.style.userSelect = ``),
            _.current || _(null),
            _ && _(null));
        },
        [_, _, _, _],
      ),
    },
    _,
  ];
}
function _(_) {
  let { player: _ } = _,
    _ = _(_);
  _.use(_.Ready());
  let _ = ``;
  return (
    _ == _.UnsupportedMediaType
      ? (_ = _.Localize(`#TrailerPlayer_Error_UnsupportedCodec`))
      : _ != _.Invalid && (_ = _.Localize(`#TrailerPlayer_Error_Playback`)),
    _
      ? (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(`span`, {
            children: _,
          }),
        })
      : null
  );
}
function _(_) {
  let { player: _ } = _,
    [_, _, _, _] = _(_);
  _.use(_.Ready());
  let _ = _(),
    _ = _ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
    _ = _.Localize(
      _ ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
    );
  return (0, _.jsx)(_, {
    onActivate: _,
    tooltip: _,
    disableTooltip: _,
    children: _,
  });
}
function _(_) {
  let { player: _ } = _,
    _ = _(_);
  _.use(_.Ready());
  let _ = _ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
    _ = _.Localize(
      _ ? `#TrailerPlayer_Play_Tooltip` : `#TrailerPlayer_Pause_Tooltip`,
    ),
    _ = _(_);
  return (0, _.jsx)(_, {
    onActivate: _,
    tooltip: _,
    children: _,
  });
}
function _(_) {
  let { category: _, title: _ } = _,
    _ = _(_);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`span`, {
        className: _,
        children: _,
      }),
      (0, _.jsx)(`span`, {
        className: _,
      }),
      (0, _.jsx)(`span`, {
        className: _,
        children: _,
      }),
    ],
  });
}
function _(_, _, _) {
  let _ = _(_),
    [_, _] = (0, _.useState)(``),
    _ = (0, _.useRef)(0);
  (0, _.useEffect)(() => {
    _ &&
      !_ &&
      _ == `` &&
      (_(`active`), (_.current = window.setTimeout(() => _(`complete`), 4e3)));
  }, [_, _, _, _, _]),
    (0, _.useEffect)(() => {
      _ && (_(`complete`), window.clearTimeout(_.current));
    }, [_]),
    (0, _.useEffect)(() => () => window.clearTimeout(_.current), []);
  let _ = (0, _.useRef)(!1);
  return (
    _ == `complete` && !_ && (_.current = !0),
    _ == `once` && _.current ? !1 : _ == `active` || _
  );
}
var _ = 200,
  _ = 5e3;
function _(_) {
  let { player: _, category: _, title: _, focus: _ } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    [_, _] = _(_, !1),
    [_, _] = (0, _.useState)(!1),
    _ = _(_, _, _);
  _ ||= _;
  let _ = _(_),
    _ = _(!!_),
    _ = _(_, _ && `YnJEGhfB0wI-`);
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsxs)(`div`, {
      ref: _,
      className: _,
      ..._,
      onKeyDown: _,
      tabIndex: 0,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              player: _,
              enabled: _ && !_,
            }),
            (0, _.jsx)(_, {}),
            (0, _.jsxs)(_, {
              ref: _,
              className: _,
              children: [
                (0, _.jsx)(_, {
                  player: _,
                  showHoverThumb: !0,
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        (0, _.jsx)(_, {
                          player: _,
                        }),
                        (0, _.jsx)(_, {
                          player: _,
                          refControlsHover: _,
                        }),
                        (0, _.jsx)(_, {
                          player: _,
                        }),
                      ],
                    }),
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        (0, _.jsx)(_, {
                          player: _,
                        }),
                        (0, _.jsx)(_, {
                          player: _,
                        }),
                        (0, _.jsx)(_, {}),
                        (0, _.jsx)(_, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, _.jsx)(_, {
          player: _,
          controlsVisible: _,
          category: _,
          title: _,
        }),
        (0, _.jsx)(`div`, {
          ref: _,
          className: _,
        }),
      ],
    }),
  });
}
function _(_) {
  let _ = _(_(), `fullscreen`);
  return (0, _.useCallback)(
    (_) => {
      _.repeat ||
        (_.code == `Space`
          ? (_.TogglePlayPause(), _.preventDefault())
          : _.code == `ArrowLeft`
            ? _.SeekRelative(-5)
            : _.code == `ArrowRight`
              ? _.SeekRelative(_ / 1e3)
              : _.key == `f` || _.key == `F`
                ? (_(), _.preventDefault())
                : (_.key == `m` || _.key == `M`) &&
                  (_.SetMute(!_.GetMuted()), _.preventDefault()));
    },
    [_, _],
  );
}
function _(_, _) {
  let _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(1),
    _ = (0, _.useRef)(0),
    [_, _] = (0, _.useState)([]),
    _ = (0, _.useCallback)(
      (_) => {
        if (_.target != _.current) return;
        let _ = _.TogglePlayPauseState(),
          _ = _.current++;
        _((_) => [
          {
            nID: _,
            eState: _,
          },
          ..._,
        ]);
        let _ = () => {
          (_.current = 0), _.TogglePlayPause();
        };
        _.pointerType == `mouse`
          ? _.current
            ? (window.clearTimeout(_.current), (_.current = 0), _())
            : (_.current = window.setTimeout(_, _))
          : _();
      },
      [_, _, _, _, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _((_) => _.filter((_) => _.nID != _));
      },
      [_],
    );
  return (
    (0, _.useEffect)(
      () => () => {
        window.clearTimeout(_.current), (_.current = 0);
      },
      [_],
    ),
    {
      refBackground: _,
      inputEvents: _(_),
      clickEvents: _,
      fnRemoveEvent: _,
    }
  );
}
function _(_) {
  let { player: _, controlsVisible: _, category: _, title: _ } = _,
    _ = _(`once`, _, _);
  if (_ == 0 || !_) return null;
  let _ = _(_, _ && `YnJEGhfB0wI-`);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      category: _,
      title: _,
    }),
  });
}
function _(_) {
  let { player: _, enabled: _ } = _,
    {
      refBackground: _,
      inputEvents: _,
      clickEvents: _,
      fnRemoveEvent: _,
    } = _(_, _(_(), `fullscreen`)),
    _ = _(_, _ && `T3UUyZ88ees-`);
  return (0, _.jsx)(`div`, {
    ref: _,
    className: _,
    ..._,
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          event: _,
          removeEvent: _,
        },
        `icon_${_.nID}`,
      ),
    ),
  });
}
function _(_) {
  let { event: _, removeEvent: _ } = _,
    _ = _.nID,
    _ = (0, _.useCallback)(() => {
      _(_);
    }, [_, _]),
    _ = null;
  return (
    _.eState == _.Play
      ? (_ = (0, _.jsx)(_, {}))
      : _.eState == _.Pause && (_ = (0, _.jsx)(_, {})),
    (0, _.jsx)(`div`, {
      className: _,
      onAnimationEnd: _,
      children: _,
    })
  );
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
  });
}
function _(_) {
  let { player: _, refControlsHover: _ } = _,
    [_, _, _, _] = _(_),
    [_, _] = _(_),
    _;
  _ =
    _ || _ === 0
      ? (0, _.jsx)(_, {})
      : _ < 0.3
        ? (0, _.jsx)(_, {})
        : _ < 0.6
          ? (0, _.jsx)(_, {})
          : (0, _.jsx)(_, {});
  let _ = _.Localize(
    _ ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
  );
  return (0, _.jsxs)(`div`, {
    className: _,
    onMouseEnter: _,
    "data-keepcontrols": !0,
    children: [
      (0, _.jsx)(_, {
        onActivate: _,
        tooltip: _,
        children: _,
      }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `KiYQJsCfGxI-`,
          children: (0, _.jsx)(_, {
            min: 0,
            max: 1,
            value: _ ? 0 : _,
            step: 0.01,
            onChange: _,
            dpadStep: 0.1,
          }),
        }),
    ],
  });
}
function _(_) {
  let [_, _] = (0, _.useState)(!1),
    _ = (0, _.useCallback)(() => _(!0), [_]);
  return (
    _(_, `mouseleave`, (_) => {
      _.target == _.currentTarget && _(!1);
    }),
    [_, _]
  );
}
var _ = `WRCisr6uZYw-`,
  _ = `gbdFcNy5G4k-`,
  _ = `lX5nIJvBefY-`,
  _ = `iAXbsgjjZHI-`,
  _ = `-EEbXf-3XVE-`,
  _ = `iFREa-vsmpo-`,
  _ = `AP1io-MKcDs-`,
  _ = `Bxu-c02i-fA-`,
  _ = `pYxY-oYjIxc-`,
  _ = `xbX-APAH9aY-`,
  _ = `RjlRnmjZiYM-`,
  _ = 3e3,
  _ = 1e3;
function _(_) {
  let { player: _, category: _, title: _ } = _,
    _ = (0, _.useRef)(null),
    [_, _] = _(_, _, !1),
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(!1),
    _ = _(_, _, _);
  _ ||= _;
  let [_, _] = _(_),
    _ = _(_, _ && `CjbQpCvOpk4-`),
    _ = _(_, !!_ && `X3KS6LYOx9o-`);
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      ..._,
      children: [
        (0, _.jsxs)(`div`, {
          ref: _,
          className: _,
          children: [
            (0, _.jsx)(_, {
              thumbnail: _,
            }),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                player: _,
              }),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  player: _,
                  onTouchSeek: _,
                  showHoverThumb: !1,
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: (0, _.jsx)(_, {
                        player: _,
                      }),
                    }),
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        (0, _.jsx)(_, {
                          player: _,
                        }),
                        (0, _.jsx)(_, {
                          player: _,
                        }),
                        (0, _.jsx)(_, {
                          player: _,
                        }),
                        (0, _.jsx)(_, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, _.jsx)(_, {
          player: _,
          controlsVisible: _,
          category: _,
          title: _,
        }),
        (0, _.jsx)(`div`, {
          ref: _,
          className: void 0,
        }),
      ],
    }),
  });
}
function _(_, _, _) {
  let [_, _] = _(_, _);
  return (_ ||= _), [_, _];
}
function _(_, _) {
  let [_, _] = _(),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(!0),
    _ = _(_);
  return (
    (0, _.useEffect)(() => {
      let _ = _.current;
      (_.current = !1), (!_ || _) && _(!0, _ ? 0 : _);
    }, [_, _, _]),
    [
      _,
      {
        onPointerDown: (0, _.useCallback)(
          (_) => {
            _.current = _.target;
          },
          [_],
        ),
        onPointerCancel: (0, _.useCallback)(
          (_) => {
            _.current = null;
          },
          [_],
        ),
        onPointerUp: (0, _.useCallback)(
          (_) => {
            let _ = _.current;
            if (((_.current = null), _ == null)) return;
            let _ = _ ? 0 : _;
            _.target != _ || _.current != _ ? _(!0, _) : _(!_, _);
          },
          [_, _, _, _],
        ),
      },
    ]
  );
}
function _(_) {
  let { player: _, controlsVisible: _, category: _, title: _ } = _,
    _ = _(`standard`, _, _);
  if (_ == 0 || !_) return null;
  let _ = _(_, _ && !_ && `lwGDx-ob6f4-`, _ && `FEfadjF0-XY-`);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      category: _,
      title: _,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
  });
}
function _(_) {
  let { thumbnail: _ } = _,
    [_, _] = (0, _.useState)(null),
    _ = (0, _.useCallback)(
      (_) => {
        if (!_) {
          _(null);
          return;
        }
        let _ = _.getBoundingClientRect(),
          _ = _.right - _.left,
          _ = _.bottom - _.top;
        _({
          width: _,
          height: _,
        });
      },
      [_],
    );
  if (!_) return null;
  let _ = {
    display: `none`,
  };
  if (_) {
    let _ = _.width / _.nThumbnailWidth,
      _ = _.height / _.nThumbnailHeight,
      _ = Math.min(_, _);
    _ = {
      width: `${_.nThumbnailWidth * _}px`,
      height: `${_.nThumbnailHeight * _}px`,
      backgroundImage: `url(${_.strTileURL})`,
      backgroundPosition: `-${_._ * _}px -${_._ * _}px`,
      backgroundSize: `${_.nImageWidth * _}px ${_.nImageHeight * _}px`,
      backgroundRepeat: `no-repeat`,
    };
  }
  return (0, _.jsx)(`div`, {
    ref: _,
    className: _,
    children: (0, _.jsx)(`div`, {
      style: _,
      className: void 0,
    }),
  });
}
function _(_) {
  let [_, _] = (0, _.useState)(null),
    _ = (0, _.useRef)(!1),
    _ = (0, _.useRef)(null);
  return [
    _,
    _.useCallback(
      (_) => {
        let _ = _ ? _.thumbnail : null;
        !_.IsPaused() && _ && ((_.current = !0), _.Pause()),
          !_ && _.current && (_.Play(), (_.current = !1)),
          _.current && !_ && _.Seek(_.current.nPlaybackSeconds),
          (_.current = _),
          _(_);
      },
      [_, _, _],
    ),
  ];
}
function _(_) {
  let { player: _ } = _,
    _ = _(_),
    _ = _(_(_)),
    _ = _ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {});
  return (0, _.jsx)(`div`, {
    className: _,
    ..._,
    children: _,
  });
}
var _ = `_3uW6UUMmrCg-`,
  _ = `fqgqcMMEHV0-`,
  _ = `_6koTzpHyyWw-`,
  _ = `wz7DrfLBweo-`,
  _ = `qHxUvsFtfPA-`,
  _ = `Mq-yAxjkoj4-`,
  _ = `v15xRo4R128-`,
  _ = `_5mPY672VSPM-`,
  _ = `rlgvACT4pJc-`,
  _ = 3e3,
  _ = 1500;
function _(_) {
  let { player: _, category: _, title: _ } = _,
    [_, _] = _(_, !1),
    _ = _(_),
    _ = _(_, _),
    _ = _(_),
    [_, _, _, _] = _(_),
    _ = (0, _.useCallback)(() => {
      _(), _();
    }, [_, _]),
    _ = (0, _.useCallback)(
      (_) => {
        !_.IsPaused() && _.currentTarget == _.target && _.TogglePlayPause();
      },
      [_],
    ),
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(!1),
    _ = _(_, _, _),
    _ = _ ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
    _ = _ ? `#TrailerPlayer_Play_Tooltip` : `#TrailerPlayer_Pause_Tooltip`,
    _ = _(_, _ && `wXx6UBVpmP0-`);
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsxs)(_, {
      className: _,
      focusable: !0,
      onClick: _,
      onOKActionDescription: _.Localize(_),
      onOKButton: _,
      onSecondaryButton: _,
      onSecondaryActionDescription: _.Localize(_),
      onButtonDown: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {}),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  player: _,
                  showHoverThumb: !1,
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        (0, _.jsx)(_, {
                          player: _,
                        }),
                        (0, _.jsx)(_, {
                          player: _,
                        }),
                      ],
                    }),
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: (0, _.jsx)(_, {
                        player: _,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, _.jsx)(_, {
          player: _,
          controlsVisible: _,
          category: _,
          title: _,
        }),
        (0, _.jsx)(`div`, {
          ref: _,
          className: void 0,
        }),
      ],
    }),
  });
}
function _(_, _) {
  let [_, _] = _(),
    _ = (0, _.useRef)(!0),
    _ = _(_);
  return (
    (0, _.useEffect)(() => {
      let _ = _.current;
      (_.current = !1), (!_ || _) && _(!0, _ ? 0 : _);
    }, [_, _, _]),
    [
      _,
      (0, _.useCallback)(() => {
        _(!0, _);
      }, [_]),
    ]
  );
}
function _(_, _) {
  return (0, _.useCallback)(
    (_) => {
      if (_.detail.button == _.TRIGGER_LEFT && _) {
        let _ = Math.max(0, _.GetPlaybackTime() - 10);
        _.Seek(_), _(), _.preventDefault(), _.stopPropagation();
      } else if (_.detail.button == _.TRIGGER_RIGHT && _) {
        let _ = Math.min(_.GetTimelineDuration(), _.GetPlaybackTime() + 10);
        _.Seek(_), _(), _.preventDefault(), _.stopPropagation();
      }
    },
    [_, _],
  );
}
function _(_) {
  let { player: _, controlsVisible: _, category: _, title: _ } = _,
    _ = _(`standard`, _, _);
  if (_ == 0 || !_) return null;
  let _ = _(_, _ && `wXx6UBVpmP0-`);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {
        category: _,
        title: _,
      }),
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
  });
}
var _ = 500,
  _ = `responsive_menu_ignore_touch`;
function _(_) {
  return _()
    ? (0, _.jsx)(_.Suspense, {
        children: (0, _.jsx)(_, {
          ..._,
          localContext: !1,
        }),
      })
    : (0, _.jsx)(_.Suspense, {
        children: (0, _.jsx)(_, {
          iosVideoFallback: !0,
          supportsTheater: !1,
          supportsFullscreen: !0,
          children: (0, _.jsx)(_, {
            ..._,
            localContext: !0,
          }),
        }),
      });
}
function _(_) {
  let {
    ref: _,
    dashManifests: _,
    hlsManifest: _,
    captionManifest: _,
    screenshot: _,
    forcePause: _,
    onPlaybackStart: _,
    onPlaybackEnd: _,
    onPlayPauseChange: _,
    onMuteChange: _,
    uiMode: _,
    altText: _,
    title: _,
    category: _,
    statsURL: _,
    muteWhenAutoplayBlocked: _,
    localContext: _,
    focus: _,
  } = _;
  (_ ||= ``), (_ ||= 0);
  let [_, _] = _(_, _, _, _, _, _, _);
  _(_, _), _(_, !!_);
  let [_, _] = _(_),
    _ = _(),
    _ = _ && _ ? _.refFullscreen : null,
    _ = _(_, _),
    _ = _(_, !!_),
    _ = _ ? void 0 : _,
    _ = {};
  _ && ((_.width = `${_.nWidth}px`), (_.height = `${_.nHeight}px`));
  let _ = _(() => _.IsBuffering());
  _.useEffect(() => {
    _ || (_ && _());
  }, [_, _]),
    _.use(_.Ready());
  let _ = _(_, _);
  return (0, _.jsxs)(`div`, {
    ref: _,
    className: _,
    "data-trailer-player": !0,
    children: [
      (0, _.jsx)(`video`, {
        ref: _,
        style: _,
        controls: !1,
        playsInline: !0,
        "aria-label": _,
        crossOrigin: `anonymous`,
      }),
      (0, _.jsx)(_, {
        player: _,
        uiMode: _,
        category: _,
        title: _,
        focus: _,
      }),
      (0, _.jsx)(_, {
        player: _,
      }),
      !_ &&
        (0, _.jsx)(_, {
          player: _,
          screenshot: _,
        }),
      !_ &&
        (0, _.jsx)(_, {
          player: _,
        }),
    ],
  });
}
function _(_, _) {
  (0, _.useImperativeHandle)(
    _,
    () => ({
      Play() {
        _.Play();
      },
      Pause() {
        _.Pause();
      },
      IsPaused() {
        return _.IsPaused();
      },
      SeekToStart() {
        _.Seek(0);
      },
      GetVolume() {
        return _.GetVolume();
      },
      SetVolume(_, _) {
        _.SetVolume(_, _);
      },
    }),
    [_],
  );
}
function _(_) {
  let _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = _(),
    _ = (0, _.useCallback)(() => {
      let _ = _.current,
        _ = _.current;
      if (!_ || !_) return;
      let [_, _] = _(_.nWidth, _.nHeight, _.nWidth, _.nHeight);
      (_ = _.nWidth - _ < 2 ? _.nWidth : Math.ceil(_)),
        (_ = _.nHeight - _ < 2 ? _.nHeight : Math.ceil(_));
      let _ = _.current;
      (_ && _.nWidth == _ && _.nHeight == _) ||
        ((_.current = {
          nWidth: _,
          nHeight: _,
        }),
        _());
    }, [_, _, _, _]);
  _(
    _,
    (0, _.useCallback)(
      (_) => {
        (_.current = _), _();
      },
      [_, _],
    ),
  );
  let _ = (0, _.useCallback)(
    (_) => {
      (_.current = {
        nWidth: _.contentRect.width,
        nHeight: _.contentRect.height,
      }),
        _();
    },
    [_, _],
  );
  return [_(_), _.current];
}
function _(_) {
  let { player: _, uiMode: _, category: _, title: _, focus: _ } = _,
    _ = _(),
    _ = _();
  return (
    (_ && _ != `auto`) || (_ = _() || _ ? `touch` : _ ? `gamepad` : `desktop`),
    _ == `touch`
      ? (0, _.jsx)(_, {
          player: _,
          category: _,
          title: _,
        })
      : _ == `gamepad`
        ? (0, _.jsx)(_, {
            player: _,
            category: _,
            title: _,
          })
        : (0, _.jsx)(_, {
            player: _,
            category: _,
            title: _,
            focus: _,
          })
  );
}
function _(_) {
  let { player: _ } = _,
    [_, _] = (0, _.useState)(`norender`),
    _ = _(() => _.IsBuffering());
  (0, _.useEffect)(() => {
    if (!_) return;
    let _ = window.setTimeout(() => _(`fadein`), 1e3);
    return () => {
      _ && window.clearTimeout(_);
    };
  }, [_, _]),
    (0, _.useEffect)(() => {
      if (_) return;
      _(`fadeout`);
      let _ = window.setTimeout(() => _(`norender`), 300);
      return () => window.clearTimeout(_);
    }, [_, _]);
  let _ = _ != `norender`,
    _ = _(_, _ == `fadein` && `ZxF0VUYsuGU-`);
  return (0, _.jsx)(`div`, {
    className: _,
    children:
      _ &&
      (0, _.jsx)(_, {
        size: `large`,
        position: `center`,
      }),
  });
}
function _(_) {
  let { player: _, screenshot: _ } = _,
    _ = _(() => _.GetUserInputNeeded()),
    _ = _(_, _),
    [_, _] = (0, _.useState)(!1),
    _ = _.useCallback(() => {
      _.UserInputReceived(), _(!0);
    }, [_]);
  if (
    (_.useEffect(() => {
      if (!_) return;
      let _ = setTimeout(() => _(!1), 500);
      return () => clearTimeout(_);
    }, [_]),
    !_)
  )
    return null;
  _.use(_.Ready());
  let _ = {};
  return (
    _ && (_.backgroundImage = `url('${_}')`),
    (0, _.jsx)(`div`, {
      style: _,
      className: _,
      role: `button`,
      tabIndex: 0,
      "aria-label": _.Localize(`#TrailerPlayer_Play_Tooltip`),
      onClick: _,
      onKeyDown: (_) => {
        (_.key === `Enter` || _.key === ` `) && (_.preventDefault(), _());
      },
      children: (0, _.jsx)(`div`, {
        className: _(_, _ && `_5fVtqw5G7SE-`),
        children: (0, _.jsx)(_, {}),
      }),
    })
  );
}
function _(..._) {
  return _.join(` `);
}
var _ = `rs5MCL6BI2A-`,
  _ = `iRWZX4LtE-Q-`,
  _ = `_5yccD-xlOTc-`;
function _(_) {
  let { name: _, trailerCategory: _, trailerDisplay: _, mouseOver: _ } = _,
    [_, _] = _.useState(!1);
  if (
    (_.useEffect(() => {
      _ != 0 && _(!0);
    }, [_]),
    _.useEffect(() => {
      if (_) {
        _(!0);
        return;
      }
      if (!_) return;
      let _ = setTimeout(() => _(!1), 3e3);
      return () => clearTimeout(_);
    }, [_, _]),
    _ == null || _ == 0)
  )
    return;
  let _ = _ == 1 ? _.Localize(`#StoreTrailer_Title_TrailerPreview`) : _(_);
  return (0, _.jsx)(`div`, {
    className: _({
      [_]: !0,
      [_]: _,
    }),
    children: _.LocalizeReact(
      `#StoreTrailer_Title_Combiner`,
      (0, _.jsx)(`span`, {
        className: _,
        children: _,
      }),
      _,
    ),
  });
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
