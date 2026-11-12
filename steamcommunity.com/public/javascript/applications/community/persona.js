/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { L as e, R as t, k as n } from "./chunk~01cfc309bf.js";
import { n as r, r as i } from "./chunk~0278ae6236.js";
import { t as a } from "./chunk~c55d6473b2.js";
import { ef as o, hm as s, kf as c, vf as l } from "./main.js";
function u(e) {
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
var d = class {
  m_steamid;
  m_bInitialized = !1;
  m_ePersonaState = 0;
  m_unGamePlayedAppID = 0;
  m_gameid = `0`;
  m_unPersonaStateFlags = 0;
  m_strPlayerName = ``;
  m_strAvatarHash = i;
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
  m_mapRichPresence = t.map();
  m_bNameInitialized = !1;
  m_bStatusInitialized = !1;
  m_strProfileURL = void 0;
  constructor(t) {
    (e(this), (this.m_steamid = t));
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
        ? a.GetAppInfo(this.m_unGamePlayedAppID).name
        : ``;
  }
  GetCurrentGameIconURL() {
    return this.m_unGamePlayedAppID
      ? a.GetAppInfo(this.m_unGamePlayedAppID).icon_url
      : ``;
  }
  BIsAppInfoReady() {
    return (
      !this.m_unGamePlayedAppID ||
      a.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
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
      let e = a.GetRichPresenceLoc(this.m_unGamePlayedAppID);
      if (e) {
        let t = this.m_mapRichPresence.get(`steam_display`);
        return e.Localize(t, this.m_mapRichPresence);
      }
    } else if (this.HasStateFlag(8))
      return o(`#PersonaStateRemotePlayTogether`);
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
      n = a.CMInterface.GetServerRTime32() - this.last_seen_online;
    return ((t *= n > 86400 ? e : n > 2 * e ? 60 : 15), t);
  }
  GetOfflineStatusTime() {
    if (this.last_seen_online == 0) return o(`#PersonaStateOffline`);
    let e = this.GetOfflineStatusUpdateRate();
    (!s.IN_MOBILE || e <= 60) && n(e);
    let t = a.CMInterface.GetServerRTime32() - this.last_seen_online;
    return t < 60
      ? o(`#PersonaStateLastSeen_JustNow`)
      : o(`#PersonaStateLastSeen`, l(t));
  }
  GetLocalizedOnlineStatus() {
    switch (this.m_ePersonaState) {
      case 0:
      case 7:
        return this.GetOfflineStatusTime();
      case 1:
        return o(`#PersonaStateOnline`);
      case 2:
        return o(`#PersonaStateBusy`);
      case 3:
        return o(`#PersonaStateAway`);
      case 4:
        return o(`#PersonaStateSnooze`);
      case 5:
        return o(`#PersonaStateLookingToTrade`);
      case 6:
        return o(`#PersonaStateLookingToPlay`);
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
    return this.m_strAvatarHash != i;
  }
  get avatar_url() {
    return r(this.m_strAvatarHash);
  }
  get avatar_url_medium() {
    return r(this.m_strAvatarHash, `medium`);
  }
  get avatar_url_full() {
    return r(this.m_strAvatarHash, `full`);
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
      ? `${s.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
      : `${s.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
  }
};
(c([t], d.prototype, `m_bInitialized`, void 0),
  c([t], d.prototype, `m_ePersonaState`, void 0),
  c([t], d.prototype, `m_unGamePlayedAppID`, void 0),
  c([t], d.prototype, `m_gameid`, void 0),
  c([t], d.prototype, `m_unPersonaStateFlags`, void 0),
  c([t], d.prototype, `m_strPlayerName`, void 0),
  c([t], d.prototype, `m_strAvatarHash`, void 0),
  c([t], d.prototype, `m_strAccountName`, void 0),
  c([t], d.prototype, `m_rtLastSeenOnline`, void 0),
  c([t], d.prototype, `m_strGameExtraInfo`, void 0),
  c([t], d.prototype, `m_unGameServerIP`, void 0),
  c([t], d.prototype, `m_unGameServerPort`, void 0),
  c([t], d.prototype, `m_game_lobby_id`, void 0),
  c([t], d.prototype, `m_bPlayerNamePending`, void 0),
  c([t], d.prototype, `m_bAvatarPending`, void 0),
  c([t], d.prototype, `m_broadcastId`, void 0),
  c([t], d.prototype, `m_broadcastAccountId`, void 0),
  c([t], d.prototype, `m_broadcastAppId`, void 0),
  c([t], d.prototype, `m_broadcastViewerCount`, void 0),
  c([t], d.prototype, `m_strBroadcastTitle`, void 0),
  c([t], d.prototype, `m_bCommunityBanned`, void 0),
  c([t], d.prototype, `m_eGamingDeviceType`, void 0),
  c([t], d.prototype, `m_bNameInitialized`, void 0));
export { u as n, d as t };
