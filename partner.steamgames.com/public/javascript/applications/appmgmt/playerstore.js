/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  At as t,
  C as n,
  S as r,
  rt as i,
  sn as a,
  xt as o,
} from "./chunk~de7f2df91c.js";
import { t as s } from "./chunk~25a6634263.js";
import { a as c, t as l } from "./chunk~68b7e78d68.js";
import { Ba as u, La as d, ua as f } from "./chunk~1fa4b8f2ff.js";
import { n as p } from "./chunk~f8b6a4beb3.js";
import { t as m } from "./chunk~ede3e357a2.js";
import { t as h } from "./chunk~9aa05d2c7d.js";
import { t as g } from "./chunk~4406a7b793.js";
import "./chunk~a6b9ae1345.js";
import { n as _, t as v } from "./chunk~0278ae6236.js";
import { c as y } from "./chunk~f25232ab1e.js";
import { t as b } from "./chunk~c55d6473b2.js";
var x = a(t()),
  S = class {
    m_steamid;
    m_bInitialized = !1;
    m_ePersonaState = 0;
    m_unGamePlayedAppID = 0;
    m_gameid = `0`;
    m_unPersonaStateFlags = 0;
    m_strPlayerName = ``;
    m_strAvatarHash = _;
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
    m_mapRichPresence = n.map();
    m_bNameInitialized = !1;
    m_bStatusInitialized = !1;
    m_strProfileURL = void 0;
    constructor(e) {
      (r(this), (this.m_steamid = e));
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
        this.is_online &&
        (this.m_unGamePlayedAppID != 0 || this.m_gameid != `0`)
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
          ? b.GetAppInfo(this.m_unGamePlayedAppID).name
          : ``;
    }
    GetCurrentGameIconURL() {
      return this.m_unGamePlayedAppID
        ? b.GetAppInfo(this.m_unGamePlayedAppID).icon_url
        : ``;
    }
    BIsAppInfoReady() {
      return (
        !this.m_unGamePlayedAppID ||
        b.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
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
        let e = b.GetRichPresenceLoc(this.m_unGamePlayedAppID);
        if (e) {
          let t = this.m_mapRichPresence.get(`steam_display`);
          return e.Localize(t, this.m_mapRichPresence);
        }
      } else if (this.HasStateFlag(8))
        return f(`#PersonaStateRemotePlayTogether`);
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
        n = b.CMInterface.GetServerRTime32() - this.last_seen_online;
      return ((t *= n > 86400 ? e : n > 2 * e ? 60 : 15), t);
    }
    GetOfflineStatusTime() {
      if (this.last_seen_online == 0) return f(`#PersonaStateOffline`);
      let e = this.GetOfflineStatusUpdateRate();
      (!i.IN_MOBILE || e <= 60) && u(e);
      let t = b.CMInterface.GetServerRTime32() - this.last_seen_online;
      return t < 60
        ? f(`#PersonaStateLastSeen_JustNow`)
        : f(`#PersonaStateLastSeen`, d(t));
    }
    GetLocalizedOnlineStatus() {
      switch (this.m_ePersonaState) {
        case 0:
        case 7:
          return this.GetOfflineStatusTime();
        case 1:
          return f(`#PersonaStateOnline`);
        case 2:
          return f(`#PersonaStateBusy`);
        case 3:
          return f(`#PersonaStateAway`);
        case 4:
          return f(`#PersonaStateSnooze`);
        case 5:
          return f(`#PersonaStateLookingToTrade`);
        case 6:
          return f(`#PersonaStateLookingToPlay`);
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
      return this.m_strAvatarHash != _;
    }
    get avatar_url() {
      return v(this.m_strAvatarHash);
    }
    get avatar_url_medium() {
      return v(this.m_strAvatarHash, `medium`);
    }
    get avatar_url_full() {
      return v(this.m_strAvatarHash, `full`);
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
        ? `${i.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
        : `${i.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
    }
  };
(e([n], S.prototype, `m_bInitialized`, void 0),
  e([n], S.prototype, `m_ePersonaState`, void 0),
  e([n], S.prototype, `m_unGamePlayedAppID`, void 0),
  e([n], S.prototype, `m_gameid`, void 0),
  e([n], S.prototype, `m_unPersonaStateFlags`, void 0),
  e([n], S.prototype, `m_strPlayerName`, void 0),
  e([n], S.prototype, `m_strAvatarHash`, void 0),
  e([n], S.prototype, `m_strAccountName`, void 0),
  e([n], S.prototype, `m_rtLastSeenOnline`, void 0),
  e([n], S.prototype, `m_strGameExtraInfo`, void 0),
  e([n], S.prototype, `m_unGameServerIP`, void 0),
  e([n], S.prototype, `m_unGameServerPort`, void 0),
  e([n], S.prototype, `m_game_lobby_id`, void 0),
  e([n], S.prototype, `m_bPlayerNamePending`, void 0),
  e([n], S.prototype, `m_bAvatarPending`, void 0),
  e([n], S.prototype, `m_broadcastId`, void 0),
  e([n], S.prototype, `m_broadcastAccountId`, void 0),
  e([n], S.prototype, `m_broadcastAppId`, void 0),
  e([n], S.prototype, `m_broadcastViewerCount`, void 0),
  e([n], S.prototype, `m_strBroadcastTitle`, void 0),
  e([n], S.prototype, `m_bCommunityBanned`, void 0),
  e([n], S.prototype, `m_eGamingDeviceType`, void 0),
  e([n], S.prototype, `m_bNameInitialized`, void 0));
var C = a(g(), 1);
function w(e, t) {
  return new C.default(
    async (t) => {
      let n = [...t],
        r = await y.GetPlayerLinkDetails(e, { steamids: n }),
        i = new Map();
      return (
        r
          .Body()
          .accounts()
          .forEach((e) => {
            let t = e.toObject();
            i.set(t.public_data.steamid, t);
          }),
        n.map((e) => i.get(e) ?? null)
      );
    },
    { maxBatchSize: 100, cache: !1, ...t },
  );
}
function T(e) {
  return l(`PlayerLinkDetails`, () => w(e));
}
function E(e) {
  let t = p(),
    n = x.useContext(A);
  return m(j(n, t, e));
}
function D(e) {
  let t = x.useRef(void 0),
    n = E(e);
  return n.data
    ? n
    : ((t.current ||= new S(
        typeof e == `string` ? new s(e) : s.InitFromAccountID(e, i.EUNIVERSE),
      )),
      { ...n, data: t.current });
}
function O(e) {
  let t = p(),
    n = x.useContext(A);
  return c({ queries: e.map((e) => j(n, t, e)) });
}
function k(e) {
  return h.getQueryData([`PlayerSummary`, e]);
}
var A = x.createContext({
  loadPersonaState: async (e, t) => {
    if (e == null) return null;
    let n = await N(t).load(
      s.InitFromAccountID(e, i.EUNIVERSE).ConvertTo64BitString(),
    );
    return P(s.InitFromAccountID(e, i.EUNIVERSE), n);
  },
});
function j(e, t, n) {
  let r = typeof n == `string` ? new s(n).GetAccountID() : n;
  return {
    queryKey: [`PlayerSummary`, r],
    queryFn: () => e.loadPersonaState(r, t),
    enabled: !!r,
  };
}
var M;
function N(e) {
  return (M ??= w(e));
}
function P(e, t) {
  let n = new S(e),
    r = t?.public_data,
    i = t?.private_data;
  return (
    (n.m_bInitialized = !!t),
    (n.m_ePersonaState = i?.persona_state ?? 0),
    (n.m_strAvatarHash = r?.sha_digest_avatar ? o(r.sha_digest_avatar) : _),
    (n.m_strPlayerName = r?.persona_name ?? e.ConvertTo64BitString()),
    (n.m_strAccountName = i?.account_name),
    i?.persona_state_flags &&
      (n.m_unPersonaStateFlags = i?.persona_state_flags),
    i?.game_id && (n.m_gameid = i?.game_id),
    i?.game_server_ip_address &&
      (n.m_unGameServerIP = i?.game_server_ip_address),
    i?.lobby_steam_id && (n.m_game_lobby_id = i?.lobby_steam_id),
    i?.game_extra_info && (n.m_strGameExtraInfo = i?.game_extra_info),
    r?.profile_url && (n.m_strProfileURL = r.profile_url),
    n
  );
}
export { T as a, D as i, O as n, E as r, k as t };
