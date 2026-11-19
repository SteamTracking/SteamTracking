import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import {
  $a as t,
  A as n,
  Bn as r,
  F as i,
  Fn as a,
  Ga as o,
  Ia as s,
  It as c,
  Jr as l,
  Ka as u,
  Ki as d,
  Ln as f,
  Ma as p,
  Oa as m,
  Pn as h,
  Ra as g,
  Sa as _,
  Wt as v,
  _t as y,
  at as b,
  en as x,
  eo as S,
  et as C,
  fi as w,
  h as ee,
  i as T,
  ka as te,
  l as E,
  ln as D,
  nn as O,
  oi as ne,
  pn as k,
  rn as re,
  rt as ie,
  s as ae,
} from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import {
  Bo as oe,
  Hi as se,
  M as ce,
  Ro as le,
  Rs as ue,
  Vo as de,
  at as fe,
  ot as pe,
  tn as me,
  zo as he,
} from "./chunk~6780060d19.js?contenthash=qoFfnAP9";
import { t as A } from "./chunk~7f38fefeac.js?contenthash=B2NENpWg";
import { Mr as ge, a as _e } from "./chunk~1fa4b8f2ff.js?contenthash=DQ8gxgDF";
import {
  At as ve,
  Et as ye,
  Nt as be,
  a as xe,
  vt as Se,
} from "./chunk~fac4c69429.js?contenthash=CKwkyCQ9";
import { Yn as Ce } from "./chunk~6b8ddcaac8.js?contenthash=BqRs3VIz";
import { t as we } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { i as Te, r as j } from "./chunk~19394a4118.js?contenthash=DfD1Klfi";
import { d as Ee } from "./chunk~6efc40bd45.js?contenthash=CtXRYpRt";
import { Q as De, rt as M } from "./library.js?contenthash=CVZWwsCP";
import { t as N } from "./chunk~c55d6473b2.js?contenthash=B3r-jvgF";
import {
  i as Oe,
  n as P,
  t as ke,
} from "./chunk~b980797e15.js?contenthash=DrhO3T5K";
import {
  G as F,
  W as Ae,
  k as je,
  ot as Me,
  st as Ne,
} from "./chunk~9658266888.js?contenthash=DTS-x4AO";
var Pe = 1024,
  Fe = 2048;
function Ie(e) {
  let t = `offline`;
  return (
    e &&
      (e.is_ingame
        ? (t = `ingame`)
        : e.m_broadcastAccountId
          ? (t = `watchingbroadcast`)
          : e.is_online && (t = `online`),
      e.is_awayOrSnooze && (t += ` awayOrSnooze`)),
    t
  );
}
var I = class {
  m_steamid;
  m_bInitialized = !1;
  m_ePersonaState = 0;
  m_unGamePlayedAppID = 0;
  m_gameid = `0`;
  m_unPersonaStateFlags = 0;
  m_strPlayerName = ``;
  m_strAvatarHash = Te;
  m_strAccountName = ``;
  m_rtLastSeenOnline = 0;
  m_strGameExtraInfo = ``;
  m_unGameServerIP = 0;
  m_unGameServerPort = 0;
  m_game_lobby_id = ``;
  m_bPlayerNamePending = !1;
  m_bAvatarPending = !1;
  m_broadcastId = void 0;
  m_broadcastAccountId = void 0;
  m_broadcastAppId = void 0;
  m_broadcastViewerCount = void 0;
  m_strBroadcastTitle = void 0;
  m_bCommunityBanned = void 0;
  m_eGamingDeviceType = 0;
  m_mapRichPresence = u.map();
  m_bNameInitialized = !1;
  m_bStatusInitialized = !1;
  m_strProfileURL = void 0;
  constructor(e) {
    (o(this), (this.m_steamid = e));
  }
  Reset() {
    ((this.m_ePersonaState = 0),
      (this.m_unGamePlayedAppID = 0),
      (this.m_gameid = `0`),
      (this.m_strGameExtraInfo = ``),
      (this.m_unGameServerIP = 0),
      (this.m_unGameServerPort = 0),
      (this.m_game_lobby_id = ``),
      this.m_mapRichPresence.clear(),
      (this.m_broadcastId = void 0),
      (this.m_broadcastAccountId = void 0),
      (this.m_broadcastAppId = void 0),
      (this.m_broadcastViewerCount = void 0),
      (this.m_strBroadcastTitle = void 0),
      (this.m_eGamingDeviceType = 0));
  }
  GetAccountID() {
    return this.m_steamid.GetAccountID();
  }
  GetSteamIDAsString() {
    return this.m_steamid.ConvertTo64BitString();
  }
  get is_online() {
    return this.m_ePersonaState != 0 && this.m_ePersonaState != 7;
  }
  get is_ingame() {
    return (
      this.is_online && (this.m_unGamePlayedAppID != 0 || this.m_gameid != `0`)
    );
  }
  get is_watchingbroadcast() {
    return !!this.m_broadcastAccountId;
  }
  get is_in_nonsteam_game() {
    return this.m_unGamePlayedAppID == 0 && this.m_gameid != `0`;
  }
  get is_in_joinable_game() {
    return (
      this.has_joinable_game_flag ||
      this.is_in_valid_lobby ||
      this.has_server_ip
    );
  }
  get has_joinable_game_flag() {
    return !!((this.m_unPersonaStateFlags ?? 0) & 2);
  }
  get connect_string() {
    return this.m_mapRichPresence.get(`connect`);
  }
  get is_in_valid_lobby() {
    return this.m_game_lobby_id != null && this.m_game_lobby_id != `0`;
  }
  get has_server_ip() {
    return this.m_unGameServerIP != 0;
  }
  get is_awayOrSnooze() {
    return this.m_ePersonaState == 3 || this.m_ePersonaState == 4;
  }
  HasStateFlag(e) {
    return ((this.m_unPersonaStateFlags ?? 0) & e) != 0;
  }
  get last_seen_online() {
    return this.m_rtLastSeenOnline;
  }
  ClearStateOnDisconnect() {
    this.m_ePersonaState != 0 && this.Reset();
  }
  get is_golden() {
    return this.HasStateFlag(4);
  }
  GetCurrentGameName() {
    return this.m_strGameExtraInfo
      ? this.m_strGameExtraInfo
      : this.m_unGamePlayedAppID
        ? N.GetAppInfo(this.m_unGamePlayedAppID).name
        : ``;
  }
  GetCurrentGameIconURL() {
    return this.m_unGamePlayedAppID
      ? N.GetAppInfo(this.m_unGamePlayedAppID).icon_url
      : ``;
  }
  BIsAppInfoReady() {
    return (
      !this.m_unGamePlayedAppID ||
      N.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
    );
  }
  HasCurrentGameRichPresence() {
    return this.m_mapRichPresence.has(`steam_display`);
  }
  HasRichPresenceForViewGameInfo() {
    return !!(
      this.m_mapRichPresence.has(`status`) ||
      this.m_mapRichPresence.has(`connect`) ||
      this.m_mapRichPresence.has(`connect_private`)
    );
  }
  GetCurrentGameRichPresence() {
    if (this.HasCurrentGameRichPresence()) {
      let e = N.GetRichPresenceLoc(this.m_unGamePlayedAppID);
      if (e) {
        let t = this.m_mapRichPresence.get(`steam_display`);
        return e.Localize(t, this.m_mapRichPresence);
      }
    } else if (this.HasStateFlag(8))
      return y(`#PersonaStateRemotePlayTogether`);
    return ``;
  }
  GetCurrentGameStatus() {
    return (
      this.GetCurrentGameRichPresence() ||
      this.m_mapRichPresence.get(`status`) ||
      ``
    );
  }
  GetOfflineStatusUpdateRate() {
    if (this.last_seen_online == 0) return 3e4;
    let e = 3600,
      t = 1e3,
      n = N.CMInterface.GetServerRTime32() - this.last_seen_online;
    return ((t *= n > 86400 ? e : n > 2 * e ? 60 : 15), t);
  }
  GetOfflineStatusTime() {
    if (this.last_seen_online == 0) return y(`#PersonaStateOffline`);
    let e = this.GetOfflineStatusUpdateRate();
    (!p.IN_MOBILE || e <= 60) && x(e);
    let t = N.CMInterface.GetServerRTime32() - this.last_seen_online;
    return t < 60
      ? y(`#PersonaStateLastSeen_JustNow`)
      : y(`#PersonaStateLastSeen`, v(t));
  }
  GetLocalizedOnlineStatus() {
    switch (this.m_ePersonaState) {
      case 0:
      case 7:
        return this.GetOfflineStatusTime();
      case 1:
        return y(`#PersonaStateOnline`);
      case 2:
        return y(`#PersonaStateBusy`);
      case 3:
        return y(`#PersonaStateAway`);
      case 4:
        return y(`#PersonaStateSnooze`);
      case 5:
        return y(`#PersonaStateLookingToTrade`);
      case 6:
        return y(`#PersonaStateLookingToPlay`);
      default:
        return ``;
    }
  }
  get has_public_party_beacon() {
    return this.m_mapRichPresence.has(`__beacon`) && this.is_ingame;
  }
  get player_group() {
    return this.m_mapRichPresence.has(`steam_player_group`)
      ? this.m_mapRichPresence.get(`steam_player_group`)
      : ``;
  }
  get player_group_size() {
    return this.m_mapRichPresence.has(`steam_player_group_size`)
      ? Number.parseInt(this.m_mapRichPresence.get(`steam_player_group_size`))
      : 0;
  }
  get online_state() {
    return this.is_online
      ? this.is_ingame
        ? `in-game`
        : this.m_broadcastAccountId
          ? `watchingbroadcast`
          : `online`
      : `offline`;
  }
  BHasAvatarSet() {
    return this.m_strAvatarHash != Te;
  }
  get avatar_url() {
    return j(this.m_strAvatarHash);
  }
  get avatar_url_medium() {
    return j(this.m_strAvatarHash, `medium`);
  }
  get avatar_url_full() {
    return j(this.m_strAvatarHash, `full`);
  }
  static SortStatusComparator(e, t, n) {
    if (t.has_public_party_beacon) {
      if (!n.has_public_party_beacon) return -1;
    } else if (n.has_public_party_beacon) return 1;
    else if (t.is_ingame) {
      if (!n.is_ingame) return -1;
      if (e) {
        if (t.is_awayOrSnooze) {
          if (!n.is_awayOrSnooze) return 1;
        } else if (n.is_awayOrSnooze) return -1;
      } else return 0;
    } else if (n.is_ingame) return 1;
    if (t.is_online) {
      if (!n.is_online) return -1;
    } else if (n.is_online) return 1;
    if (e) {
      if (t.is_awayOrSnooze) {
        if (!n.is_awayOrSnooze) return 1;
      } else if (n.is_awayOrSnooze) return -1;
    }
    return 0;
  }
  GetCommunityProfileURL() {
    return this.m_strProfileURL
      ? `${p.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
      : `${p.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
  }
};
(k([u], I.prototype, `m_bInitialized`, void 0),
  k([u], I.prototype, `m_ePersonaState`, void 0),
  k([u], I.prototype, `m_unGamePlayedAppID`, void 0),
  k([u], I.prototype, `m_gameid`, void 0),
  k([u], I.prototype, `m_unPersonaStateFlags`, void 0),
  k([u], I.prototype, `m_strPlayerName`, void 0),
  k([u], I.prototype, `m_strAvatarHash`, void 0),
  k([u], I.prototype, `m_strAccountName`, void 0),
  k([u], I.prototype, `m_rtLastSeenOnline`, void 0),
  k([u], I.prototype, `m_strGameExtraInfo`, void 0),
  k([u], I.prototype, `m_unGameServerIP`, void 0),
  k([u], I.prototype, `m_unGameServerPort`, void 0),
  k([u], I.prototype, `m_game_lobby_id`, void 0),
  k([u], I.prototype, `m_bPlayerNamePending`, void 0),
  k([u], I.prototype, `m_bAvatarPending`, void 0),
  k([u], I.prototype, `m_broadcastId`, void 0),
  k([u], I.prototype, `m_broadcastAccountId`, void 0),
  k([u], I.prototype, `m_broadcastAppId`, void 0),
  k([u], I.prototype, `m_broadcastViewerCount`, void 0),
  k([u], I.prototype, `m_strBroadcastTitle`, void 0),
  k([u], I.prototype, `m_bCommunityBanned`, void 0),
  k([u], I.prototype, `m_eGamingDeviceType`, void 0),
  k([u], I.prototype, `m_bNameInitialized`, void 0));
var L = e(S()),
  R = we();
function Le(e) {
  let {
      rgSources: t,
      onIncrementalError: n,
      onError: r,
      strAltText: i,
      ref: a,
      ...o
    } = e,
    [s, c] = L.useState(0),
    l = L.useMemo(() => JSON.stringify(t), [t]),
    [u, d] = L.useState(l);
  u != l && (d(l), c(0));
  let f = L.useMemo(() => {
      let n = ``;
      return (
        t && t.length > s && (n = t[s]),
        (n ||=
          (console.warn(`MultiSourceImage created with no image src`, e, s),
          `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=`)),
        n
      );
    }, [t, s, e]),
    p = L.useCallback(
      (e) => {
        n?.(e, t[s], s);
        let i = s + 1;
        (i >= t.length && r && r(e), i < t.length && c(i));
      },
      [s, r, n, t],
    ),
    m = L.useRef(null);
  return (
    L.useImperativeHandle(
      a,
      () => ({ imgRef: m, nSourceIndex: s, nSourceLength: t.length }),
      [m, s, t],
    ),
    L.useEffect(() => {
      let e = m.current;
      e?.complete && e.naturalWidth == 0 && (e.src = e.src);
    }, []),
    (0, R.jsx)(`img`, { ref: m, ...o, src: f, onError: p, alt: i }, u)
  );
}
function Re(e = !1) {
  let [t, n] = (0, L.useState)(!1),
    r = (0, L.useRef)(null),
    i = b(
      (e) => {
        if (((r.current = e), !e)) {
          n(!1);
          return;
        }
        let t = () => {
          n(T(e));
        };
        return (
          e.addEventListener(`fullscreenchange`, t),
          () => {
            e.removeEventListener(`fullscreenchange`, t);
          }
        );
      },
      [n],
    ),
    a = (0, L.useCallback)(() => {
      if (!r.current) return;
      let t = r.current;
      T(t) ? E(t) : ze(t, e);
    }, [r, e]);
  return [
    i,
    (0, L.useMemo)(() => ({ bFullscreen: t, fnToggleFullscreen: a }), [t, a]),
  ];
}
function ze(e, t) {
  if (!e || T(e) || n(e) || !t) return;
  let r = e.getElementsByTagName(`video`);
  if (r.length == 0) return;
  let i = r[0];
  i.webkitSetPresentationMode && i.webkitSetPresentationMode(`fullscreen`);
}
(0, L.createContext)(void 0);
function z(e) {
  return e ? e instanceof HTMLDialogElement : !1;
}
function Be(e) {
  return e ? e.hasAttribute(`popover`) : !1;
}
var Ve = (0, L.createContext)(void 0);
function He(e) {
  let {
      iosVideoFallback: t,
      supportsTheater: n,
      supportsFullscreen: r,
      children: i,
    } = e,
    a = (0, L.useRef)(null),
    o = (0, L.useRef)(null),
    [s, c] = (0, L.useState)(`none`);
  (ge(s == `theater`), (n = !!n), (r = !!r));
  let l = b(
      (e) => {
        if (((o.current = e), !e)) return;
        let t = () => {
          c((t) => (T(e) ? `fullscreen` : t == `fullscreen` ? `none` : t));
        };
        return (
          e.addEventListener(`fullscreenchange`, t),
          () => e.removeEventListener(`fullscreenchange`, t)
        );
      },
      [c],
    ),
    u = b(
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
          i = new D();
        return (
          z(e)
            ? (i.AddEventListener(e, `close`, t),
              i.AddEventListener(e, `click`, n))
            : Be(e)
              ? i.AddEventListener(e, `beforetoggle`, r)
              : w(!1, `Was expecting a dialog or popover`),
          () => i.Unregister()
        );
      },
      [c],
    ),
    d = (0, L.useCallback)(
      (e) => {
        let n = o.current,
          r = a.current;
        (n &&
          (e != `fullscreen` && T(n) && E(n), e == `fullscreen` && ze(n, !!t)),
          z(r) &&
            (e != `theater` && r.open && r.close(),
            e == `theater` && r.showModal()),
          Be(r) &&
            (e != `theater` && r.matches(`:popover-open`) && r.hidePopover(),
            e == `theater` && r.showPopover()),
          c(e));
      },
      [t],
    );
  (0, L.useEffect)(() => {
    s == `theater` && !n && d(`none`);
  }, [d, s, n]);
  let f = (0, L.useMemo)(
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
  return (0, R.jsx)(Ve.Provider, { value: f, children: i });
}
function B() {
  return (0, L.useContext)(Ve);
}
function V(e, t) {
  return (0, L.useCallback)(() => {
    e && (e.strMode == t ? e.fnSetMode(`none`) : e.fnSetMode(t));
  }, [e, t]);
}
var Ue = `hPeepTEP2A0-`,
  We = `RzxfM12jbio-`,
  Ge = `kQJ64kMGQbg-`,
  Ke = `_74WMutU3Gxc-`,
  qe = (0, L.createContext)({});
function Je(e) {
  let {
      autoplayEnabled: t,
      setAutoplayEnabled: n,
      playerVolume: r,
      setPlayerVolume: i,
      audioMuted: a,
      setAudioMuted: o,
      children: s,
    } = e,
    c = (0, L.useMemo)(
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
  return (0, R.jsx)(qe.Provider, { value: c, children: s });
}
function H() {
  return (0, L.useContext)(qe);
}
var Ye = 5,
  Xe = (function (e) {
    return (
      (e[(e.None = 0)] = `None`),
      (e[(e.Play = 1)] = `Play`),
      (e[(e.Pause = 2)] = `Pause`),
      e
    );
  })({}),
  U = class {
    m_elVideo = null;
    m_player = null;
    m_listeners = new D();
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
    m_eFailureReason = P.Invalid;
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
        (this.m_player = new ke(this.m_elVideo)),
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
        (this.m_eFailureReason = e.detail || P.PlaybackError));
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
        (et(this.m_player, this.m_strStatsURL, this.m_eFailureReason),
        (this.m_bSentStats = !0));
    }
  };
(k([u], U.prototype, `m_bPaused`, void 0),
  k([u], U.prototype, `m_bUserInputNeeded`, void 0),
  k([u], U.prototype, `m_bMuted`, void 0),
  k([u], U.prototype, `m_nVolume`, void 0),
  k([u], U.prototype, `m_eFailureReason`, void 0),
  k([u], U.prototype, `m_maxDimensions`, void 0),
  k([u], U.prototype, `m_bPlaybackStarted`, void 0),
  k([u], U.prototype, `m_bBuffering`, void 0),
  k([u], U.prototype, `m_bHasCaptions`, void 0),
  k([u], U.prototype, `m_bShowingCaption`, void 0),
  k([u], U.prototype, `m_nPlaybackTime`, void 0),
  k([u], U.prototype, `m_nVideoStartTime`, void 0),
  k([u], U.prototype, `m_nVideoDuration`, void 0),
  k([u], U.prototype, `m_nBufferedEndTime`, void 0),
  k([s.bound], U.prototype, `OnVideoPlaying`, null),
  k([l], U.prototype, `OnVideoPause`, null),
  k([s.bound], U.prototype, `OnVideoTimeUpdate`, null),
  k([l], U.prototype, `OnVolumeChange`, null),
  k([l], U.prototype, `OnVideoEnd`, null),
  k([l], U.prototype, `OnVideoValveEnded`, null),
  k([l], U.prototype, `OnDownloadFailed`, null),
  k([l], U.prototype, `OnUserInputNeeded`, null),
  k([s.bound], U.prototype, `OnMetadataChanged`, null),
  k([s.bound], U.prototype, `OnCaptionsChange`, null),
  k([l], U.prototype, `UserInputReceived`, null),
  k([s.bound], U.prototype, `SetMuteInternal`, null),
  k([l], U.prototype, `SendStats`, null));
function Ze(e, t, n, r, i, a, o) {
  let s = H(),
    c = (0, L.useRef)(void 0);
  c.current ||= new U(s);
  let l = b(
    (i) => {
      if (i) return (c.current.Start(i, e, t, n, r), () => c.current.Stop());
    },
    [c, e, t, r],
  );
  return (
    (0, L.useEffect)(() => {
      c.current.UpdatePersistState(s);
    }, [s]),
    (0, L.useEffect)(() => {
      c.current.SetPlaybackEndCallback(i);
    }, [i]),
    (0, L.useEffect)(() => {
      c.current.SetOnPlayPauseChangeCallback(a);
    }, [a]),
    (0, L.useEffect)(() => {
      (c.current.SetOnMuteChangeCallback(o), o && o(c.current.GetMuted()));
    }, [o]),
    [l, c.current]
  );
}
function Qe(e, t) {
  ((t = !!t),
    (0, L.useEffect)(() => {
      e.SetMuteWhenAutoplayBlocked(t);
    }, [e, t]));
}
function $e(e, t) {
  let n = (0, L.useRef)(!1),
    r = (0, L.useRef)(!1),
    i = (0, L.useRef)(!1);
  return (
    (0, L.useEffect)(() => {
      n.current != t &&
        (t ? ((r.current = e.IsPaused()), e.Pause()) : r.current || e.Play(),
        (n.current = t));
    }, [t, n, r, e]),
    t || (i.current = !0),
    !i.current
  );
}
function et(e, t, n) {
  if (!navigator || navigator.sendBeacon === void 0) return;
  let r = e.GetDASHPlayerStats().GetPlayerStatsSummary(),
    i = e.GetAndCloseWatchedIntervals();
  if (i.reduce((e, t) => e + (t[1] - t[0]), 0) < Ye && n == P.Invalid) return;
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
var tt = `A5RRwjvEUvY-`,
  nt = `-H-CbOmskAk-`,
  rt = `BhmPQ-Xd2d8-`,
  it = `_7zvFUI6bX2k-`,
  at = `uacZ-90MOII-`,
  ot = `k9Sm1n-4mwI-`,
  st = `EE0MOLi31qY-`,
  ct = `_7GE4TR2MB3I-`,
  lt = `pQYV6KivA1I-`,
  ut = `pEu8vzuL1UY-`,
  dt = `ntDKWvpd0tk-`,
  ft = `m9RGLw-x46M-`;
function pt() {
  return b((e) => {
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
var mt = (0, L.forwardRef)(function (e, t) {
    let { children: n, ...r } = e,
      i = pt(),
      a = ie(i, t);
    return (0, R.jsx)(`div`, { ref: a, ...r, children: n });
  }),
  W = 2e3,
  ht = 500,
  gt = 4e3,
  G = -1,
  K = L.createContext(void 0);
function _t() {
  return (0, L.useContext)(K);
}
function q(e, t, n) {
  return (0, L.useMemo)(
    () => ({ m_bMenuVisible: e, m_fnSetMenuVisible: t, m_refMenuLayer: n }),
    [e, t, n],
  );
}
function vt() {
  let e = _t();
  return e ? e.m_bMenuVisible : !1;
}
function yt() {
  let e = _t();
  w(e, `Missing controls context`);
  let t = e.m_fnSetMenuVisible;
  return ((0, L.useEffect)(() => (t(!0), () => t(!1)), [t]), e.m_refMenuLayer);
}
function bt(e, t) {
  let [n, r] = St(e);
  return [n || t, r];
}
function J(e) {
  return e.pointerType == `touch` ? gt : W;
}
function xt() {
  return ht;
}
function St(e) {
  let [t, n] = Tt(),
    r = (0, L.useRef)(void 0),
    i = (0, L.useRef)(!1),
    a = (0, L.useRef)({ element: void 0, bKeepControls: !1 }),
    o = (0, L.useCallback)(
      (e) => {
        if (e.target == a.current.element) return;
        let t = Ct(e);
        a.current = { element: e.target, bKeepControls: t };
      },
      [a],
    ),
    s = (0, L.useCallback)(
      (e) => {
        a.current.bKeepControls || i.current ? n(!0, 0) : n(!0, e);
      },
      [a, i, n],
    );
  (Y(e),
    Et(
      e,
      (0, L.useCallback)(
        (e) => {
          ((i.current = e), s(W));
        },
        [i, s],
      ),
    ),
    Dt(
      e,
      (0, L.useCallback)(() => {
        s(W);
      }, [s]),
    ));
  let c = (0, L.useCallback)(
      (e) => {
        e.pointerType != `touch` && (o(e), s(J(e)));
      },
      [s, o],
    ),
    l = (0, L.useCallback)(
      (e) => {
        e.pointerType != `touch` && (o(e), s(J(e)));
      },
      [o, s],
    ),
    u = (0, L.useCallback)(
      (e) => {
        e.pointerType != `touch` &&
          ((a.current = { element: void 0, bKeepControls: !1 }), s(xt()));
      },
      [a, s],
    ),
    d = (0, L.useCallback)(
      (e) => {
        r.current = e.currentTarget;
      },
      [r],
    ),
    f = (0, L.useCallback)(
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
      onPointerUp: (0, L.useCallback)(
        (e) => {
          let t = r.current;
          ((r.current = void 0), e.currentTarget == t && s(J(e)));
        },
        [s],
      ),
      onPointerCancel: f,
    },
  ];
}
function Ct(e) {
  let t = e.target,
    n = e.currentTarget;
  for (; t && t != n;) {
    if (t.dataset?.keepcontrols == `true`) return !0;
    t = t.parentElement;
  }
  return !1;
}
function wt(e) {
  let t = (0, L.useRef)(G);
  return {
    onPointerDown: (0, L.useCallback)(
      (e) => {
        (e.pointerType !== `mouse` || e.button == 0) &&
          (e.currentTarget.setPointerCapture(e.pointerId),
          (t.current = e.pointerId));
      },
      [t],
    ),
    onPointerCancel: (0, L.useCallback)(
      (e) => {
        t.current == e.pointerId && (t.current = G);
      },
      [t],
    ),
    onPointerUp: (0, L.useCallback)(
      (n) => {
        if (t.current != n.pointerId) return;
        (n.currentTarget.releasePointerCapture(n.pointerId), (t.current = G));
        let r = n.currentTarget.getBoundingClientRect(),
          { clientX: i, clientY: a } = n;
        i >= r.left && i <= r.right && a >= r.top && a <= r.bottom && e(n);
      },
      [t, e],
    ),
  };
}
function Tt() {
  let [e, t] = (0, L.useState)(!1),
    n = (0, L.useRef)(void 0),
    r = (0, L.useCallback)(
      (e, r) => {
        ((n.current &&= (window.clearTimeout(n.current), void 0)),
          t(e),
          e && r != 0 && (n.current = window.setTimeout(() => t(!1), r)));
      },
      [t],
    );
  return (
    (0, L.useEffect)(
      () => () => {
        n.current && window.clearTimeout(n.current);
      },
      [],
    ),
    [e, r]
  );
}
function Et(e, t) {
  let n = (0, L.useRef)(!0),
    r = Y(e);
  (0, L.useEffect)(() => {
    let e = n.current;
    ((n.current = !1), (!e || r) && t(r));
  }, [r, t, n]);
}
function Dt(e, t) {
  let n = (0, L.useRef)(!0),
    r = M(() => e.GetMuted());
  (0, L.useEffect)(() => {
    let e = n.current;
    ((n.current = !1), !e && t());
  }, [r, t, n]);
}
function Ot(e) {
  let [t, n] = M(() => [e.GetMuted(), e.GetVolume()]);
  return [
    t,
    n,
    (0, L.useCallback)(
      (t) => {
        (e.SetMute(!1), e.SetVolume(t));
      },
      [e],
    ),
    (0, L.useCallback)(() => e.SetMute(!t), [t, e]),
  ];
}
function kt(e) {
  return M(() => [
    e.GetPlaybackTime(),
    e.GetTimelineDuration(),
    e.GetBufferedEndTime(),
  ]);
}
function At(e) {
  return M(() => e.GetFailureReason());
}
function Y(e) {
  return M(() => e.IsPaused());
}
function jt(e) {
  return (0, L.useCallback)(() => {
    e.TogglePlayPause();
  }, [e]);
}
function Mt(e, t) {
  (0, L.useEffect)(() => {
    let n = g(() => {
      let n = e.GetMaxVideoDimensions();
      t(n ? { nWidth: n.nWidth, nHeight: n.nHeight } : null);
    });
    return () => n();
  }, [e, t]);
}
function Nt(e) {
  return M(() => e.HasPlaybackStarted());
}
function Pt(e) {
  return M(() => ({
    bHasCaptions: e.HasCaptions(),
    bShowingCaption: e.IsShowingCaption(),
  }));
}
var Ft = `cOcEiRe-dIg-`,
  It = `QkF4JCVWpWw-`,
  Lt = `_8RH876Wgr7A-`,
  Rt = `b0G5PgYKHAM-`,
  zt = `_68B-8ItOIlc-`,
  Bt = `GsDewiltMCM-`,
  Vt = `BffT7IQWKYg-`,
  Ht = `aejFKWIp7Dg-`,
  Ut = `eBjRkRA8NpA-`,
  Wt = `RrXwg35xzWc-`,
  Gt = `_98b2uQrBfN4-`,
  Kt = `LCeQJ5hJTnk-`,
  qt = `OPuK3adv80Y-`,
  Jt = `qFZtjvdCOxo-`,
  Yt = `vzX4l4uGgUg-`,
  Xt = `HOEA4Jz0kQU-`,
  Zt = `AAuicaihzn0-`,
  X = {};
((X.arabic = () =>
  O(
    () => import(`./chunk~2fd190db63.js?contenthash=C2POerCJ`),
    [],
    import.meta.url,
  )),
  (X.brazilian = () =>
    O(
      () => import(`./chunk~02701c65ef.js?contenthash=x6XrepDr`),
      [],
      import.meta.url,
    )),
  (X.bulgarian = () =>
    O(
      () => import(`./chunk~0488537070.js?contenthash=-hJXGgRJ`),
      [],
      import.meta.url,
    )),
  (X.czech = () =>
    O(
      () => import(`./chunk~c416f5d055.js?contenthash=CSjgiD37`),
      [],
      import.meta.url,
    )),
  (X.danish = () =>
    O(
      () => import(`./chunk~3e14b663a6.js?contenthash=B2deRnQN`),
      [],
      import.meta.url,
    )),
  (X.dutch = () =>
    O(
      () => import(`./chunk~17f07b18d6.js?contenthash=B_-vRIj6`),
      [],
      import.meta.url,
    )),
  (X.english = () =>
    O(
      () => import(`./chunk~ec56dec169.js?contenthash=DqiLY0xy`),
      [],
      import.meta.url,
    )),
  (X.finnish = () =>
    O(
      () => import(`./chunk~7b7702acfb.js?contenthash=DY6b7D3A`),
      [],
      import.meta.url,
    )),
  (X.french = () =>
    O(
      () => import(`./chunk~9f1e43d6b7.js?contenthash=D1VV591R`),
      [],
      import.meta.url,
    )),
  (X.german = () =>
    O(
      () => import(`./chunk~7cfeee80db.js?contenthash=CkL05CQ0`),
      [],
      import.meta.url,
    )),
  (X.greek = () =>
    O(
      () => import(`./chunk~fa4645642d.js?contenthash=DhAEM-Mj`),
      [],
      import.meta.url,
    )),
  (X.hungarian = () =>
    O(
      () => import(`./chunk~68954bcf20.js?contenthash=DFOk5TRy`),
      [],
      import.meta.url,
    )),
  (X.indonesian = () =>
    O(
      () => import(`./chunk~64330cde2b.js?contenthash=DyoHvf21`),
      [],
      import.meta.url,
    )),
  (X.italian = () =>
    O(
      () => import(`./chunk~f07b17c799.js?contenthash=D5Kw79sK`),
      [],
      import.meta.url,
    )),
  (X.japanese = () =>
    O(
      () => import(`./chunk~7feb1f6f2c.js?contenthash=B8DG9ZYu`),
      [],
      import.meta.url,
    )),
  (X.koreana = () =>
    O(
      () => import(`./chunk~2150fc5061.js?contenthash=Cz2N0fr4`),
      [],
      import.meta.url,
    )),
  (X.latam = () =>
    O(
      () => import(`./chunk~89990396ab.js?contenthash=B1MSZkH1`),
      [],
      import.meta.url,
    )),
  (X.malay = () =>
    O(
      () => import(`./chunk~c20997bd07.js?contenthash=D4SewkRE`),
      [],
      import.meta.url,
    )),
  (X.norwegian = () =>
    O(
      () => import(`./chunk~9377fcf3ad.js?contenthash=BZVpBxiY`),
      [],
      import.meta.url,
    )),
  (X.polish = () =>
    O(
      () => import(`./chunk~cb0641ecfa.js?contenthash=DtuY7MsU`),
      [],
      import.meta.url,
    )),
  (X.portuguese = () =>
    O(
      () => import(`./chunk~6fe5298474.js?contenthash=Cmo8DWmA`),
      [],
      import.meta.url,
    )),
  (X.romanian = () =>
    O(
      () => import(`./chunk~d89a0e3f8e.js?contenthash=DW3IdI7Q`),
      [],
      import.meta.url,
    )),
  (X.russian = () =>
    O(
      () => import(`./chunk~5e4f352b29.js?contenthash=WOM5FQe2`),
      [],
      import.meta.url,
    )),
  (X.sc_schinese = () =>
    O(
      () => import(`./chunk~88b76c65fd.js?contenthash=dg6rAsqb`),
      [],
      import.meta.url,
    )),
  (X.schinese = () =>
    O(
      () => import(`./chunk~ff602c5e9c.js?contenthash=DioRsE6P`),
      [],
      import.meta.url,
    )),
  (X.spanish = () =>
    O(
      () => import(`./chunk~7dc12dcf43.js?contenthash=CcjLBHCK`),
      [],
      import.meta.url,
    )),
  (X.swedish = () =>
    O(
      () => import(`./chunk~1d83fa4d82.js?contenthash=BN2b9wrK`),
      [],
      import.meta.url,
    )),
  (X.tchinese = () =>
    O(
      () => import(`./chunk~6ab6462128.js?contenthash=BwaBQy9t`),
      [],
      import.meta.url,
    )),
  (X.thai = () =>
    O(
      () => import(`./chunk~71066e4a64.js?contenthash=BQ4SHgH-`),
      [],
      import.meta.url,
    )),
  (X.turkish = () =>
    O(
      () => import(`./chunk~9bf04eef9e.js?contenthash=DMz6odIX`),
      [],
      import.meta.url,
    )),
  (X.ukrainian = () =>
    O(
      () => import(`./chunk~fa926d2e65.js?contenthash=6gG-XE60`),
      [],
      import.meta.url,
    )),
  (X.vietnamese = () =>
    O(
      () => import(`./chunk~1b91b8ed8b.js?contenthash=BkQnwFs-`),
      [],
      import.meta.url,
    )));
async function Qt(e) {
  if (X[e]) return await X[e]();
}
var Z = re(Qt);
function $t(e) {
  switch (e) {
    case 1:
      return Z.Localize(`#StoreTrailer_Title_Category_Gameplay`);
    case 2:
      return Z.Localize(`#StoreTrailer_Title_Category_Teaser`);
    case 3:
      return Z.Localize(`#StoreTrailer_Title_Category_Cinematic`);
    case 4:
      return Z.Localize(`#StoreTrailer_Title_Category_Update`);
    case 5:
      return Z.Localize(`#StoreTrailer_Title_Category_Accolades`);
    case 6:
      return Z.Localize(`#StoreTrailer_Title_Category_Interview`);
  }
  return Z.Localize(`#StoreTrailer_Title_Category_Unknown`);
}
var en = e(t(), 1),
  tn = `12px`,
  nn = `LzRinklSJ-4-`,
  rn = `_2uk-hbrhKFI-`,
  an = `Y9S-qDK8XPE-`,
  on = 4,
  sn = parseInt(tn);
function cn(e) {
  let { refButton: t, onClose: n, scroll: r, children: i } = e,
    a = (0, L.useRef)(null),
    [o, s] = (0, L.useState)({ nLeft: 0, nTop: 0 }),
    c = yt(),
    l = b(
      (e) => {
        if (((a.current = e), !e)) return;
        let r = (r) => {
          let i = ae(e, r.target),
            a = ae(t.current, r.target);
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
    ((0, L.useLayoutEffect)(() => {
      if (!a.current || !t.current || !c.current) return;
      let e = a.current.getBoundingClientRect(),
        n = c.current.getBoundingClientRect(),
        r = t.current.getBoundingClientRect(),
        i = n.right - n.left,
        o = r.right - r.left,
        l = r.left - n.left + o / 2,
        u = e.right - e.left,
        d = _(l - u / 2, 0 + on, i - u - on),
        f = e.bottom - e.top,
        p = r.top - sn - f - n.top;
      s({ nLeft: d, nTop: p });
    }, [a, t, c]),
    !c.current || !i)
  )
    return null;
  let u = { left: o.nLeft, top: o.nTop },
    d = A(nn, !!r && `kaHR0KlvcO4-`),
    f = (0, R.jsx)(`div`, {
      ref: l,
      style: u,
      className: d,
      role: `menu`,
      children: i,
    });
  return en.createPortal(f, c.current);
}
function ln(e) {
  return (0, R.jsx)(`div`, { className: an, role: `separator` });
}
function un(e) {
  let { onClick: t, checked: n, children: r } = e,
    [i, a] = ve(),
    o = A(rn, n && `vi2dzrdIGJY-`),
    s = `#2d73ff`,
    c = `#00ccff`;
  return (
    i && ((s = `#eeeeee`), (c = `#ffffff`)),
    (0, R.jsxs)(`div`, {
      className: o,
      role: `menuitemcheckbox`,
      "aria-checked": n,
      tabIndex: 0,
      onClick: t,
      onKeyDown: (e) => {
        (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), t());
      },
      ...a,
      children: [r, n && (0, R.jsx)(ue, { color: s, highlightColor: c })],
    })
  );
}
function dn(e) {
  let { player: t, refButton: n, onClose: r } = e,
    i = H(),
    a = t.GetVideoRepresentations().map((e) => {
      let n = () => {
          (t.SetVideoRepresentation(e), r());
        },
        i = pn(e);
      return (0, R.jsx)(
        un,
        { onClick: n, checked: e.selected, children: i },
        e.id,
      );
    }),
    o = a.length > 1,
    s = !!i.m_fnSetAutoplayEnabled,
    c = o || !s;
  return (0, R.jsxs)(cn, {
    refButton: n,
    onClose: r,
    children: [
      c && a,
      s && c && (0, R.jsx)(ln, {}),
      s && (0, R.jsx)(fn, { onClose: r }),
    ],
  });
}
function fn(e) {
  let { onClose: t } = e,
    n = H(),
    r = n.m_bAutoplayEnabled == 1,
    i = (0, L.useCallback)(() => {
      (n.m_fnSetAutoplayEnabled && n.m_fnSetAutoplayEnabled(!r), t());
    }, [r, n, t]);
  return (
    L.use(Z.Ready()),
    (0, R.jsx)(un, {
      onClick: i,
      checked: r,
      children: Z.Localize(`#StoreTrailer_AutoPlayVideos`),
    })
  );
}
function pn(e) {
  return Oe(e)
    ? Z.Localize(`#TrailerPlayer_Quality_Auto`)
    : e.height == 2160
      ? `2160p (4k)`
      : `${e.height}p`;
}
function mn(e) {
  let { player: t, refButton: n, onClose: i } = e,
    a = d(r.LANGUAGE),
    o = (0, L.useMemo)(() => {
      let e = [...t.GetCaptionRepresentations()],
        n = e.findIndex((e) => e.m_eLanguage == a);
      return (n > 0 && ne(e, n, 0), e);
    }, [a, t]),
    s = [];
  for (let e of o)
    (s.push(
      (0, R.jsx)(
        un,
        {
          onClick: () => {
            (t.SetCaptionRepresentation(e.m_eLanguage), i());
          },
          checked: !1,
          children: e.m_strLabel,
        },
        e.m_eLanguage,
      ),
    ),
      e.m_eLanguage == a && s.push((0, R.jsx)(ln, {})));
  return s.length == 0
    ? null
    : (0, R.jsx)(cn, { refButton: n, onClose: i, scroll: !0, children: s });
}
var hn = 4,
  gn = 130,
  Q = L.forwardRef(function (e, t) {
    let {
        tooltip: n,
        onActivate: r,
        size: i,
        children: a,
        disableTooltip: o,
      } = e,
      s = vt(),
      c = wt(r);
    return (0, R.jsx)(xe, {
      toolTipContent: n,
      direction: `top`,
      usePointerEvents: !0,
      bDisabled: s || o,
      children: (0, R.jsx)(`div`, {
        ref: t,
        className: Ft,
        ...c,
        "data-keepcontrols": !0,
        children: a,
      }),
    });
  });
function $(e) {
  let { player: t } = e,
    [n, r] = kt(t),
    i = c(n, !1),
    a = c(r, !1);
  return (0, R.jsxs)(`div`, {
    className: It,
    children: [
      (0, R.jsx)(`span`, { children: i }),
      (0, R.jsx)(`span`, { className: Lt, children: `/` }),
      (0, R.jsx)(`span`, { children: a }),
    ],
  });
}
function _n(e) {
  let t = B(),
    n = V(t, `theater`);
  if (!t || !t.bSupportsTheater) return null;
  L.use(Z.Ready());
  let r = t.strMode == `theater`,
    i = r ? (0, R.jsx)(Me, {}) : (0, R.jsx)(Ne, {}),
    a = Z.Localize(
      r
        ? `#TrailerPlayer_ExitTheater_Tooltip`
        : `#TrailerPlayer_EnterTheater_Tooltip`,
    );
  return (0, R.jsx)(Q, { onActivate: n, tooltip: a, children: i });
}
function vn(e) {
  let t = B(),
    n = V(t, `fullscreen`);
  if (!t || !t.bSupportsFullscreen) return null;
  L.use(Z.Ready());
  let r = t.strMode == `fullscreen`,
    i = r ? (0, R.jsx)(me, {}) : (0, R.jsx)(je, {}),
    a = Z.Localize(
      r
        ? `#TrailerPlayer_ExitFullScreen_Tooltip`
        : `#TrailerPlayer_FullScreen_Tooltip`,
    );
  return (0, R.jsx)(Q, { onActivate: n, tooltip: a, children: i });
}
function yn(e) {
  let { player: t } = e,
    [n, r] = (0, L.useState)(!1),
    i = (0, L.useCallback)(() => r(!1), [r]),
    o = (0, L.useRef)(null),
    s = a(),
    c = (0, L.useCallback)(() => {
      r((e) => !e);
    }, [r]),
    l = A(Rt, n && `cXAaD-hLPZ0-`);
  return (
    L.use(Z.Ready()),
    (0, R.jsxs)(R.Fragment, {
      children: [
        (0, R.jsx)(Q, {
          ref: o,
          onActivate: c,
          tooltip: Z.Localize(`#TrailerPlayer_Settings_Tooltip`),
          disableTooltip: s,
          children: (0, R.jsx)(se, { className: l }),
        }),
        n && (0, R.jsx)(dn, { player: t, refButton: o, onClose: i }),
      ],
    })
  );
}
function bn(e) {
  let { player: t } = e,
    [n, r] = (0, L.useState)(!1),
    i = (0, L.useCallback)(() => r(!1), [r]),
    a = (0, L.useRef)(null),
    { bHasCaptions: o, bShowingCaption: s } = Pt(t),
    c = (0, L.useCallback)(() => {
      s ? t.DisableCaptions() : r((e) => !e);
    }, [r, t, s]);
  return (
    L.use(Z.Ready()),
    o
      ? (0, R.jsxs)(R.Fragment, {
          children: [
            (0, R.jsxs)(Q, {
              ref: a,
              onActivate: c,
              tooltip: Z.Localize(`#TrailerPlayer_Captions_Tooltip`),
              children: [s && (0, R.jsx)(pe, {}), !s && (0, R.jsx)(fe, {})],
            }),
            n && (0, R.jsx)(mn, { player: t, refButton: a, onClose: i }),
          ],
        })
      : null
  );
}
function xn(e) {
  let { player: t, showHoverThumb: n, onTouchSeek: r } = e;
  L.use(Z.Ready());
  let i = (0, L.useRef)(null),
    [a, o, s] = kt(t),
    [l, u] = En(t, r),
    d = Sn();
  vt() && (u = null);
  let f = wn(t);
  u || (f = void 0);
  let p = { display: `none` };
  u && ((p.left = u.nTickOffset), (p.display = `block`));
  let h = m(a, 0, o, 0, 100),
    g = m(s, 0, o, 0, 100),
    _ = { width: `${h.toFixed(1)}%` },
    v = { width: `${g.toFixed(1)}%` },
    y = (e) => {
      e.key === `Home`
        ? (e.preventDefault(), t.Seek(0))
        : e.key === `End` &&
          (e.preventDefault(), t.Seek(t.GetTimelineDuration()));
    },
    b = A(zt, u && `OXlEV5w6w1E-`);
  return (0, R.jsxs)(`div`, {
    ref: d,
    className: b,
    "data-keepcontrols": !!u,
    role: `slider`,
    tabIndex: 0,
    "aria-label": Z.Localize(`#TrailerPlayer_Seek_Label`),
    "aria-valuemin": 0,
    "aria-valuemax": Math.round(o),
    "aria-valuenow": Math.round(a),
    "aria-valuetext": `${c(a, !1)} / ${c(o, !1)}`,
    onClick: f,
    onKeyDown: y,
    onPointerMove: l.onPointerMove,
    onPointerLeave: l.onPointerLeave,
    onPointerDown: l.onPointerDown,
    onLostPointerCapture: l.onLostPointerCapture,
    children: [
      (0, R.jsxs)(`div`, {
        ref: i,
        className: Bt,
        onPointerEnter: l.onPointerEnter,
        children: [
          (0, R.jsx)(`div`, { className: A(Vt, Ht), style: v }),
          (0, R.jsx)(`div`, { className: A(Vt, Ut), style: _ }),
          (0, R.jsx)(`div`, { className: A(Wt), style: p }),
        ],
      }),
      (0, R.jsx)(Cn, { refTimeline: i, hoverState: u, showHoverThumb: n }),
    ],
  });
}
function Sn() {
  return b((e) => {
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
function Cn(e) {
  let { refTimeline: t, hoverState: n, showHoverThumb: r } = e,
    i = (0, L.useRef)(null),
    [a, o] = (0, L.useState)({ nHoverLeft: 0, bFitsInParent: !1 });
  if (
    ((0, L.useLayoutEffect)(() => {
      if (!n || !i.current || !t.current) return;
      let e = t.current.getBoundingClientRect(),
        r = i.current.getBoundingClientRect(),
        a = e.right - e.left,
        s = r.right - r.left,
        c = _(n.nTickOffset - s / 2, 0 + hn, a - s - hn),
        l = ee(
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
    let e = gn / l.nThumbnailHeight;
    c = {
      width: `${l.nThumbnailWidth * e}px`,
      height: `${l.nThumbnailHeight * e}px`,
      backgroundImage: `url(${l.strTileURL})`,
      backgroundPosition: `-${l.x * e}px -${l.y * e}px`,
      backgroundSize: `${l.nImageWidth * e}px ${l.nImageHeight * e}px`,
      backgroundRepeat: `no-repeat`,
    };
  }
  return (0, R.jsxs)(`div`, {
    ref: i,
    style: s,
    className: Gt,
    children: [
      !!l && (0, R.jsx)(`div`, { style: c, className: `nCXGrQlbkbg-` }),
      (0, R.jsx)(`span`, {
        className: Kt,
        children: Ce(n.nPlaybackSeconds, !0),
      }),
    ],
  });
}
function wn(e) {
  return (0, L.useCallback)(
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
function Tn(e, t, n) {
  let r = n - t.left,
    i = t.right - t.left;
  r = _(r, 0, i);
  let a = r / i,
    o = Math.floor(e.GetTimelineDuration() * a),
    s = e.GetThumbnail(o);
  return s ? { nTickOffset: r, nPlaybackSeconds: o, thumbnail: s } : null;
}
function En(e, t) {
  let [n, r] = (0, L.useState)(null),
    i = (0, L.useRef)(null),
    a = (0, L.useRef)(null);
  return [
    {
      onPointerEnter: (0, L.useCallback)(
        (t) => {
          if (t.pointerType != `mouse` && t.pointerType != `pen`) return;
          i.current = t.currentTarget;
          let n = Tn(e, i.current.getBoundingClientRect(), t.clientX);
          r(n);
        },
        [i, r, e],
      ),
      onPointerMove: (0, L.useCallback)(
        (n) => {
          let o = i.current;
          if (((o ||= a.current), !o)) return;
          let s = Tn(e, o.getBoundingClientRect(), n.clientX);
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
      onPointerLeave: (0, L.useCallback)(
        (e) => {
          i.current && ((i.current = null), r((e) => null));
        },
        [r],
      ),
      onPointerDown: (0, L.useCallback)(
        (n) => {
          ((a.current = n.currentTarget),
            a.current.setPointerCapture(n.pointerId),
            (document.body.style.userSelect = `none`));
          let i = Tn(e, a.current.getBoundingClientRect(), n.clientX);
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
      onLostPointerCapture: (0, L.useCallback)(
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
function Dn(e) {
  let { player: t } = e,
    n = At(t);
  L.use(Z.Ready());
  let r = ``;
  return (
    n == P.UnsupportedMediaType
      ? (r = Z.Localize(`#TrailerPlayer_Error_UnsupportedCodec`))
      : n != P.Invalid && (r = Z.Localize(`#TrailerPlayer_Error_Playback`)),
    r
      ? (0, R.jsx)(`div`, {
          className: qt,
          children: (0, R.jsx)(`span`, { children: r }),
        })
      : null
  );
}
function On(e) {
  let { player: t } = e,
    [n, r, i, o] = Ot(t);
  L.use(Z.Ready());
  let s = a(),
    c = n ? (0, R.jsx)(de, {}) : (0, R.jsx)(le, {}),
    l = Z.Localize(
      n ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
    );
  return (0, R.jsx)(Q, {
    onActivate: o,
    tooltip: l,
    disableTooltip: s,
    children: c,
  });
}
function kn(e) {
  let { player: t } = e,
    n = Y(t);
  L.use(Z.Ready());
  let r = n ? (0, R.jsx)(F, {}) : (0, R.jsx)(Ae, {}),
    i = Z.Localize(
      n ? `#TrailerPlayer_Play_Tooltip` : `#TrailerPlayer_Pause_Tooltip`,
    ),
    a = jt(t);
  return (0, R.jsx)(Q, { onActivate: a, tooltip: i, children: r });
}
function An(e) {
  let { category: t, title: n } = e,
    r = $t(t);
  return (0, R.jsxs)(`div`, {
    className: Jt,
    children: [
      (0, R.jsx)(`span`, { className: Yt, children: r }),
      (0, R.jsx)(`span`, { className: Xt }),
      (0, R.jsx)(`span`, { className: Zt, children: n }),
    ],
  });
}
function jn(e, t, n) {
  let r = Nt(t),
    [i, a] = (0, L.useState)(``),
    o = (0, L.useRef)(0);
  ((0, L.useEffect)(() => {
    r &&
      !n &&
      i == `` &&
      (a(`active`), (o.current = window.setTimeout(() => a(`complete`), 4e3)));
  }, [r, n, i, o, a]),
    (0, L.useEffect)(() => {
      n && (a(`complete`), window.clearTimeout(o.current));
    }, [n]),
    (0, L.useEffect)(() => () => window.clearTimeout(o.current), []));
  let s = (0, L.useRef)(!1);
  return (
    i == `complete` && !n && (s.current = !0),
    e == `once` && s.current ? !1 : i == `active` || n
  );
}
var Mn = 200,
  Nn = 5e3;
function Pn(e) {
  let { player: t, category: n, title: r, focus: i } = e,
    a = (0, L.useRef)(null),
    o = (0, L.useRef)(null),
    [s, c] = bt(t, !1),
    [l, u] = (0, L.useState)(!1),
    d = q(l, u, a);
  s ||= l;
  let f = Fn(t),
    p = be(!!i),
    m = A(rt, s && `YnJEGhfB0wI-`);
  return (0, R.jsx)(K.Provider, {
    value: d,
    children: (0, R.jsxs)(`div`, {
      ref: p,
      className: m,
      ...c,
      onKeyDown: f,
      tabIndex: 0,
      children: [
        (0, R.jsxs)(`div`, {
          className: it,
          children: [
            (0, R.jsx)(Rn, { player: t, enabled: s && !l }),
            (0, R.jsx)(Bn, {}),
            (0, R.jsxs)(mt, {
              ref: o,
              className: st,
              children: [
                (0, R.jsx)(xn, { player: t, showHoverThumb: !0 }),
                (0, R.jsxs)(`div`, {
                  className: ct,
                  children: [
                    (0, R.jsxs)(`div`, {
                      className: lt,
                      children: [
                        (0, R.jsx)(kn, { player: t }),
                        (0, R.jsx)(Vn, { player: t, refControlsHover: o }),
                        (0, R.jsx)($, { player: t }),
                      ],
                    }),
                    (0, R.jsxs)(`div`, {
                      className: ut,
                      children: [
                        (0, R.jsx)(bn, { player: t }),
                        (0, R.jsx)(yn, { player: t }),
                        (0, R.jsx)(_n, {}),
                        (0, R.jsx)(vn, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, R.jsx)(Ln, {
          player: t,
          controlsVisible: s,
          category: n,
          title: r,
        }),
        (0, R.jsx)(`div`, { ref: a, className: ft }),
      ],
    }),
  });
}
function Fn(e) {
  let t = V(B(), `fullscreen`);
  return (0, L.useCallback)(
    (n) => {
      n.repeat ||
        (n.code == `Space`
          ? (e.TogglePlayPause(), n.preventDefault())
          : n.code == `ArrowLeft`
            ? e.SeekRelative(-5)
            : n.code == `ArrowRight`
              ? e.SeekRelative(Nn / 1e3)
              : n.key == `f` || n.key == `F`
                ? (t(), n.preventDefault())
                : (n.key == `m` || n.key == `M`) &&
                  (e.SetMute(!e.GetMuted()), n.preventDefault()));
    },
    [e, t],
  );
}
function In(e, t) {
  let n = (0, L.useRef)(null),
    r = (0, L.useRef)(1),
    i = (0, L.useRef)(0),
    [a, o] = (0, L.useState)([]),
    s = (0, L.useCallback)(
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
            : (i.current = window.setTimeout(l, Mn))
          : l();
      },
      [n, i, e, o, t],
    ),
    c = (0, L.useCallback)(
      (e) => {
        o((t) => t.filter((t) => t.nID != e));
      },
      [o],
    );
  return (
    (0, L.useEffect)(
      () => () => {
        (window.clearTimeout(i.current), (i.current = 0));
      },
      [i],
    ),
    { refBackground: n, inputEvents: wt(s), clickEvents: a, fnRemoveEvent: c }
  );
}
function Ln(e) {
  let { player: t, controlsVisible: n, category: r, title: i } = e,
    a = jn(`once`, t, n);
  if (r == 0 || !i) return null;
  let o = A(ot, a && `YnJEGhfB0wI-`);
  return (0, R.jsx)(`div`, {
    className: o,
    children: (0, R.jsx)(An, { category: r, title: i }),
  });
}
function Rn(e) {
  let { player: t, enabled: n } = e,
    {
      refBackground: r,
      inputEvents: i,
      clickEvents: a,
      fnRemoveEvent: o,
    } = In(t, V(B(), `fullscreen`)),
    s = A(tt, n && `T3UUyZ88ees-`);
  return (0, R.jsx)(`div`, {
    ref: r,
    className: s,
    ...i,
    children: a.map((e) =>
      (0, R.jsx)(zn, { event: e, removeEvent: o }, `icon_${e.nID}`),
    ),
  });
}
function zn(e) {
  let { event: t, removeEvent: n } = e,
    r = t.nID,
    i = (0, L.useCallback)(() => {
      n(r);
    }, [r, n]),
    a = null;
  return (
    t.eState == Xe.Play
      ? (a = (0, R.jsx)(F, {}))
      : t.eState == Xe.Pause && (a = (0, R.jsx)(Ae, {})),
    (0, R.jsx)(`div`, { className: nt, onAnimationEnd: i, children: a })
  );
}
function Bn(e) {
  return (0, R.jsx)(`div`, { className: at });
}
function Vn(e) {
  let { player: t, refControlsHover: n } = e,
    [r, i, a, o] = Ot(t),
    [s, c] = Hn(n),
    l;
  l =
    r || i === 0
      ? (0, R.jsx)(de, {})
      : i < 0.3
        ? (0, R.jsx)(he, {})
        : i < 0.6
          ? (0, R.jsx)(oe, {})
          : (0, R.jsx)(le, {});
  let u = Z.Localize(
    r ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
  );
  return (0, R.jsxs)(`div`, {
    className: dt,
    onMouseEnter: c,
    "data-keepcontrols": !0,
    children: [
      (0, R.jsx)(Q, { onActivate: o, tooltip: u, children: l }),
      s &&
        (0, R.jsx)(`div`, {
          className: `KiYQJsCfGxI-`,
          children: (0, R.jsx)(_e, {
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
function Hn(e) {
  let [t, n] = (0, L.useState)(!1),
    r = (0, L.useCallback)(() => n(!0), [n]);
  return (
    ye(e, `mouseleave`, (e) => {
      e.target == e.currentTarget && n(!1);
    }),
    [t, r]
  );
}
var Un = `WRCisr6uZYw-`,
  Wn = `gbdFcNy5G4k-`,
  Gn = `lX5nIJvBefY-`,
  Kn = `iAXbsgjjZHI-`,
  qn = `-EEbXf-3XVE-`,
  Jn = `iFREa-vsmpo-`,
  Yn = `AP1io-MKcDs-`,
  Xn = `Bxu-c02i-fA-`,
  Zn = `pYxY-oYjIxc-`,
  Qn = `xbX-APAH9aY-`,
  $n = `RjlRnmjZiYM-`,
  er = 3e3,
  tr = 1e3;
function nr(e) {
  let { player: t, category: n, title: r } = e,
    i = (0, L.useRef)(null),
    [a, o] = rr(i, t, !1),
    s = (0, L.useRef)(null),
    [c, l] = (0, L.useState)(!1),
    u = q(c, l, s);
  a ||= c;
  let [d, f] = cr(t),
    p = A(Wn, a && `CjbQpCvOpk4-`),
    m = A(Jn, !!d && `X3KS6LYOx9o-`);
  return (0, R.jsx)(K.Provider, {
    value: u,
    children: (0, R.jsxs)(`div`, {
      className: Un,
      ...o,
      children: [
        (0, R.jsxs)(`div`, {
          ref: i,
          className: p,
          children: [
            (0, R.jsx)(sr, { thumbnail: d }),
            (0, R.jsx)(or, {}),
            (0, R.jsx)(`div`, {
              className: m,
              children: (0, R.jsx)(lr, { player: t }),
            }),
            (0, R.jsxs)(`div`, {
              className: Xn,
              children: [
                (0, R.jsx)(xn, {
                  player: t,
                  onTouchSeek: f,
                  showHoverThumb: !1,
                }),
                (0, R.jsxs)(`div`, {
                  className: Zn,
                  children: [
                    (0, R.jsx)(`div`, {
                      className: Qn,
                      children: (0, R.jsx)($, { player: t }),
                    }),
                    (0, R.jsxs)(`div`, {
                      className: $n,
                      children: [
                        (0, R.jsx)(On, { player: t }),
                        (0, R.jsx)(bn, { player: t }),
                        (0, R.jsx)(yn, { player: t }),
                        (0, R.jsx)(vn, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, R.jsx)(ar, {
          player: t,
          controlsVisible: a,
          category: n,
          title: r,
        }),
        (0, R.jsx)(`div`, { ref: s, className: void 0 }),
      ],
    }),
  });
}
function rr(e, t, n) {
  let [r, i] = ir(e, t);
  return ((r ||= n), [r, i]);
}
function ir(e, t) {
  let [n, r] = Tt(),
    i = (0, L.useRef)(null),
    a = (0, L.useRef)(!0),
    o = Y(t);
  return (
    (0, L.useEffect)(() => {
      let e = a.current;
      ((a.current = !1), (!e || o) && r(!0, o ? 0 : tr));
    }, [o, r, a]),
    [
      n,
      {
        onPointerDown: (0, L.useCallback)(
          (e) => {
            i.current = e.target;
          },
          [i],
        ),
        onPointerCancel: (0, L.useCallback)(
          (e) => {
            i.current = null;
          },
          [i],
        ),
        onPointerUp: (0, L.useCallback)(
          (t) => {
            let a = i.current;
            if (((i.current = null), a == null)) return;
            let s = o ? 0 : er;
            t.target != a || e.current != a ? r(!0, s) : r(!n, s);
          },
          [r, e, o, n],
        ),
      },
    ]
  );
}
function ar(e) {
  let { player: t, controlsVisible: n, category: r, title: i } = e,
    a = jn(`standard`, t, n);
  if (r == 0 || !i) return null;
  let o = A(qn, a && !n && `lwGDx-ob6f4-`, n && `FEfadjF0-XY-`);
  return (0, R.jsx)(`div`, {
    className: o,
    children: (0, R.jsx)(An, { category: r, title: i }),
  });
}
function or(e) {
  return (0, R.jsx)(`div`, { className: Gn });
}
function sr(e) {
  let { thumbnail: t } = e,
    [n, r] = (0, L.useState)(null),
    i = (0, L.useCallback)(
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
  return (0, R.jsx)(`div`, {
    ref: i,
    className: Kn,
    children: (0, R.jsx)(`div`, { style: a, className: void 0 }),
  });
}
function cr(e) {
  let [t, n] = (0, L.useState)(null),
    r = (0, L.useRef)(!1),
    i = (0, L.useRef)(null);
  return [
    t,
    L.useCallback(
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
function lr(e) {
  let { player: t } = e,
    n = Y(t),
    r = wt(jt(t)),
    i = n ? (0, R.jsx)(F, {}) : (0, R.jsx)(Ae, {});
  return (0, R.jsx)(`div`, { className: Yn, ...r, children: i });
}
var ur = `_3uW6UUMmrCg-`,
  dr = `fqgqcMMEHV0-`,
  fr = `_6koTzpHyyWw-`,
  pr = `wz7DrfLBweo-`,
  mr = `qHxUvsFtfPA-`,
  hr = `Mq-yAxjkoj4-`,
  gr = `v15xRo4R128-`,
  _r = `_5mPY672VSPM-`,
  vr = `rlgvACT4pJc-`,
  yr = 3e3,
  br = 1500;
function xr(e) {
  let { player: t, category: n, title: r } = e,
    [i, a] = Sr(t, !1),
    o = Y(t),
    s = Cr(t, a),
    c = jt(t),
    [l, u, d, f] = Ot(t),
    p = (0, L.useCallback)(() => {
      (f(), a());
    }, [f, a]),
    m = (0, L.useCallback)(
      (e) => {
        !t.IsPaused() && e.currentTarget == e.target && t.TogglePlayPause();
      },
      [t],
    ),
    h = (0, L.useRef)(null),
    [g, _] = (0, L.useState)(!1),
    v = q(g, _, h),
    y = l ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
    b = o ? `#TrailerPlayer_Play_Tooltip` : `#TrailerPlayer_Pause_Tooltip`,
    x = A(dr, i && `wXx6UBVpmP0-`);
  return (0, R.jsx)(K.Provider, {
    value: v,
    children: (0, R.jsxs)(ce, {
      className: ur,
      focusable: !0,
      onClick: m,
      onOKActionDescription: Z.Localize(b),
      onOKButton: c,
      onSecondaryButton: p,
      onSecondaryActionDescription: Z.Localize(y),
      onButtonDown: s,
      children: [
        (0, R.jsxs)(`div`, {
          className: x,
          children: [
            (0, R.jsx)(Tr, {}),
            (0, R.jsxs)(`div`, {
              className: mr,
              children: [
                (0, R.jsx)(xn, { player: t, showHoverThumb: !1 }),
                (0, R.jsxs)(`div`, {
                  className: hr,
                  children: [
                    (0, R.jsxs)(`div`, {
                      className: gr,
                      children: [
                        (0, R.jsx)(kn, { player: t }),
                        (0, R.jsx)($, { player: t }),
                      ],
                    }),
                    (0, R.jsx)(`div`, {
                      className: _r,
                      children: (0, R.jsx)(On, { player: t }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, R.jsx)(wr, {
          player: t,
          controlsVisible: i,
          category: n,
          title: r,
        }),
        (0, R.jsx)(`div`, { ref: h, className: void 0 }),
      ],
    }),
  });
}
function Sr(e, t) {
  let [n, r] = Tt(),
    i = (0, L.useRef)(!0),
    a = Y(e);
  return (
    (0, L.useEffect)(() => {
      let e = i.current;
      ((i.current = !1), (!e || a) && r(!0, a ? 0 : br));
    }, [a, r, i]),
    [
      n,
      (0, L.useCallback)(() => {
        r(!0, yr);
      }, [r]),
    ]
  );
}
function Cr(e, t) {
  return (0, L.useCallback)(
    (n) => {
      if (n.detail.button == Se.TRIGGER_LEFT && e) {
        let r = Math.max(0, e.GetPlaybackTime() - 10);
        (e.Seek(r), t(), n.preventDefault(), n.stopPropagation());
      } else if (n.detail.button == Se.TRIGGER_RIGHT && e) {
        let r = Math.min(e.GetTimelineDuration(), e.GetPlaybackTime() + 10);
        (e.Seek(r), t(), n.preventDefault(), n.stopPropagation());
      }
    },
    [e, t],
  );
}
function wr(e) {
  let { player: t, controlsVisible: n, category: r, title: i } = e,
    a = jn(`standard`, t, n);
  if (r == 0 || !i) return null;
  let o = A(fr, a && `wXx6UBVpmP0-`);
  return (0, R.jsx)(`div`, {
    className: o,
    children: (0, R.jsx)(`div`, {
      className: pr,
      children: (0, R.jsx)(An, { category: r, title: i }),
    }),
  });
}
function Tr(e) {
  return (0, R.jsx)(`div`, { className: vr });
}
var Er = 500,
  Dr = `responsive_menu_ignore_touch`;
function Or(e) {
  return B()
    ? (0, R.jsx)(L.Suspense, {
        children: (0, R.jsx)(kr, { ...e, localContext: !1 }),
      })
    : (0, R.jsx)(L.Suspense, {
        children: (0, R.jsx)(He, {
          iosVideoFallback: !0,
          supportsTheater: !1,
          supportsFullscreen: !0,
          children: (0, R.jsx)(kr, { ...e, localContext: !0 }),
        }),
      });
}
function kr(e) {
  let {
    ref: t,
    dashManifests: n,
    hlsManifest: r,
    captionManifest: i,
    screenshot: a,
    forcePause: o,
    onPlaybackStart: s,
    onPlaybackEnd: c,
    onPlayPauseChange: l,
    onMuteChange: u,
    uiMode: d,
    altText: f,
    title: p,
    category: m,
    statsURL: h,
    muteWhenAutoplayBlocked: g,
    localContext: _,
    focus: v,
  } = e;
  ((p ||= ``), (m ||= 0));
  let [y, b] = Ze(n, r, i, h, c, l, u);
  (Ar(t, b), Qe(b, !!g));
  let [x, S] = jr(b),
    C = B(),
    w = _ && C ? C.refFullscreen : null,
    ee = ie(x, w),
    T = $e(b, !!o),
    te = T ? void 0 : y,
    E = {};
  S && ((E.width = `${S.nWidth}px`), (E.height = `${S.nHeight}px`));
  let D = M(() => b.IsBuffering());
  (L.useEffect(() => {
    D || (s && s());
  }, [D, s]),
    L.use(Z.Ready()));
  let O = A(Ue, Dr);
  return (0, R.jsxs)(`div`, {
    ref: ee,
    className: O,
    "data-trailer-player": !0,
    children: [
      (0, R.jsx)(`video`, {
        ref: te,
        style: E,
        controls: !1,
        playsInline: !0,
        "aria-label": f,
        crossOrigin: `anonymous`,
      }),
      (0, R.jsx)(Mr, { player: b, uiMode: d, category: m, title: p, focus: v }),
      (0, R.jsx)(Nr, { player: b }),
      !T && (0, R.jsx)(Pr, { player: b, screenshot: a }),
      !T && (0, R.jsx)(Dn, { player: b }),
    ],
  });
}
function Ar(e, t) {
  (0, L.useImperativeHandle)(
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
function jr(e) {
  let t = (0, L.useRef)(null),
    n = (0, L.useRef)(null),
    r = (0, L.useRef)(null),
    a = i(),
    o = (0, L.useCallback)(() => {
      let e = n.current,
        i = t.current;
      if (!e || !i) return;
      let [o, s] = te(i.nWidth, i.nHeight, e.nWidth, e.nHeight);
      ((o = e.nWidth - o < 2 ? e.nWidth : Math.ceil(o)),
        (s = e.nHeight - s < 2 ? e.nHeight : Math.ceil(s)));
      let c = r.current;
      (c && c.nWidth == o && c.nHeight == s) ||
        ((r.current = { nWidth: o, nHeight: s }), a());
    }, [t, n, r, a]);
  Mt(
    e,
    (0, L.useCallback)(
      (e) => {
        ((t.current = e), o());
      },
      [t, o],
    ),
  );
  let s = (0, L.useCallback)(
    (e) => {
      ((n.current = {
        nWidth: e.contentRect.width,
        nHeight: e.contentRect.height,
      }),
        o());
    },
    [n, o],
  );
  return [Ee(s), r.current];
}
function Mr(e) {
  let { player: t, uiMode: n, category: r, title: i, focus: o } = e,
    s = h(),
    c = a();
  return (
    (n && n != `auto`) || (n = f() || c ? `touch` : s ? `gamepad` : `desktop`),
    n == `touch`
      ? (0, R.jsx)(nr, { player: t, category: r, title: i })
      : n == `gamepad`
        ? (0, R.jsx)(xr, { player: t, category: r, title: i })
        : (0, R.jsx)(Pn, { player: t, category: r, title: i, focus: o })
  );
}
function Nr(e) {
  let { player: t } = e,
    [n, r] = (0, L.useState)(`norender`),
    i = M(() => t.IsBuffering());
  ((0, L.useEffect)(() => {
    if (!i) return;
    let e = window.setTimeout(() => r(`fadein`), 1e3);
    return () => {
      e && window.clearTimeout(e);
    };
  }, [i, r]),
    (0, L.useEffect)(() => {
      if (i) return;
      r(`fadeout`);
      let e = window.setTimeout(() => r(`norender`), 300);
      return () => window.clearTimeout(e);
    }, [i, r]));
  let a = n != `norender`,
    o = A(We, n == `fadein` && `ZxF0VUYsuGU-`);
  return (0, R.jsx)(`div`, {
    className: o,
    children: a && (0, R.jsx)(De, { size: `large`, position: `center` }),
  });
}
function Pr(e) {
  let { player: t, screenshot: n } = e,
    r = M(() => t.GetUserInputNeeded()),
    i = C(r, Er),
    [a, o] = (0, L.useState)(!1),
    s = L.useCallback(() => {
      (t.UserInputReceived(), o(!0));
    }, [t]);
  if (
    (L.useEffect(() => {
      if (!a) return;
      let e = setTimeout(() => o(!1), 500);
      return () => clearTimeout(e);
    }, [a]),
    !i)
  )
    return null;
  L.use(Z.Ready());
  let c = {};
  return (
    n && (c.backgroundImage = `url('${n}')`),
    (0, R.jsx)(`div`, {
      style: c,
      className: Ge,
      role: `button`,
      tabIndex: 0,
      "aria-label": Z.Localize(`#TrailerPlayer_Play_Tooltip`),
      onClick: s,
      onKeyDown: (e) => {
        (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), s());
      },
      children: (0, R.jsx)(`div`, {
        className: A(Ke, a && `_5fVtqw5G7SE-`),
        children: (0, R.jsx)(F, {}),
      }),
    })
  );
}
function Fr(...e) {
  return e.join(` `);
}
export {
  Je as a,
  I as c,
  Fe as d,
  Z as i,
  Ie as l,
  Or as n,
  Re as o,
  $t as r,
  Le as s,
  Fr as t,
  Pe as u,
};
