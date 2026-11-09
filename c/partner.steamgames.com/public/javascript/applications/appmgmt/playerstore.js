import { _, _, _, _, _, _, _ } from "./mobx.esm.js";
import { _ } from "./src.js";
import { _, _ } from "./usedataloader.client.js";
import { _, _, _ } from "./dialogs.js";
import { _ } from "./servicetransportprovider.js";
import { _ } from "./useQuery.js";
import { _ } from "./reactqueryroot.js";
import { _ } from "./dataloader.js";
import "./steamid.js";
import { _, _ } from "./personautils.js";
import { _ } from "./steammessages_player_pb.js";
import { _ } from "./appinfostore.js";
var _ = _(_()),
  _ = class {
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
    m_mapRichPresence = _.map();
    m_bNameInitialized = !1;
    m_bStatusInitialized = !1;
    m_strProfileURL = void 0;
    constructor(_) {
      _(this), (this.m_steamid = _);
    }
    Reset() {
      (this.m_ePersonaState = 0),
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
        (this.m_eGamingDeviceType = 0);
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
    HasStateFlag(_) {
      return ((this.m_unPersonaStateFlags ?? 0) & _) != 0;
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
          ? _.GetAppInfo(this.m_unGamePlayedAppID).name
          : ``;
    }
    GetCurrentGameIconURL() {
      return this.m_unGamePlayedAppID
        ? _.GetAppInfo(this.m_unGamePlayedAppID).icon_url
        : ``;
    }
    BIsAppInfoReady() {
      return (
        !this.m_unGamePlayedAppID ||
        _.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
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
        let _ = _.GetRichPresenceLoc(this.m_unGamePlayedAppID);
        if (_) {
          let _ = this.m_mapRichPresence.get(`steam_display`);
          return _.Localize(_, this.m_mapRichPresence);
        }
      } else if (this.HasStateFlag(8))
        return _(`#PersonaStateRemotePlayTogether`);
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
      let _ = 3600,
        _ = 1e3,
        _ = _.CMInterface.GetServerRTime32() - this.last_seen_online;
      return (_ *= _ > 86400 ? _ : _ > 2 * _ ? 60 : 15), _;
    }
    GetOfflineStatusTime() {
      if (this.last_seen_online == 0) return _(`#PersonaStateOffline`);
      let _ = this.GetOfflineStatusUpdateRate();
      (!_.IN_MOBILE || _ <= 60) && _(_);
      let _ = _.CMInterface.GetServerRTime32() - this.last_seen_online;
      return _ < 60
        ? _(`#PersonaStateLastSeen_JustNow`)
        : _(`#PersonaStateLastSeen`, _(_));
    }
    GetLocalizedOnlineStatus() {
      switch (this.m_ePersonaState) {
        case 0:
        case 7:
          return this.GetOfflineStatusTime();
        case 1:
          return _(`#PersonaStateOnline`);
        case 2:
          return _(`#PersonaStateBusy`);
        case 3:
          return _(`#PersonaStateAway`);
        case 4:
          return _(`#PersonaStateSnooze`);
        case 5:
          return _(`#PersonaStateLookingToTrade`);
        case 6:
          return _(`#PersonaStateLookingToPlay`);
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
      return _(this.m_strAvatarHash);
    }
    get avatar_url_medium() {
      return _(this.m_strAvatarHash, `medium`);
    }
    get avatar_url_full() {
      return _(this.m_strAvatarHash, `full`);
    }
    static SortStatusComparator(_, _, _) {
      if (_.has_public_party_beacon) {
        if (!_.has_public_party_beacon) return -1;
      } else if (_.has_public_party_beacon) return 1;
      else if (_.is_ingame) {
        if (!_.is_ingame) return -1;
        if (_) {
          if (_.is_awayOrSnooze) {
            if (!_.is_awayOrSnooze) return 1;
          } else if (_.is_awayOrSnooze) return -1;
        } else return 0;
      } else if (_.is_ingame) return 1;
      if (_.is_online) {
        if (!_.is_online) return -1;
      } else if (_.is_online) return 1;
      if (_) {
        if (_.is_awayOrSnooze) {
          if (!_.is_awayOrSnooze) return 1;
        } else if (_.is_awayOrSnooze) return -1;
      }
      return 0;
    }
    GetCommunityProfileURL() {
      return this.m_strProfileURL
        ? `${_.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
        : `${_.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
    }
  };
_([_], _.prototype, `m_bInitialized`, void 0),
  _([_], _.prototype, `m_ePersonaState`, void 0),
  _([_], _.prototype, `m_unGamePlayedAppID`, void 0),
  _([_], _.prototype, `m_gameid`, void 0),
  _([_], _.prototype, `m_unPersonaStateFlags`, void 0),
  _([_], _.prototype, `m_strPlayerName`, void 0),
  _([_], _.prototype, `m_strAvatarHash`, void 0),
  _([_], _.prototype, `m_strAccountName`, void 0),
  _([_], _.prototype, `m_rtLastSeenOnline`, void 0),
  _([_], _.prototype, `m_strGameExtraInfo`, void 0),
  _([_], _.prototype, `m_unGameServerIP`, void 0),
  _([_], _.prototype, `m_unGameServerPort`, void 0),
  _([_], _.prototype, `m_game_lobby_id`, void 0),
  _([_], _.prototype, `m_bPlayerNamePending`, void 0),
  _([_], _.prototype, `m_bAvatarPending`, void 0),
  _([_], _.prototype, `m_broadcastId`, void 0),
  _([_], _.prototype, `m_broadcastAccountId`, void 0),
  _([_], _.prototype, `m_broadcastAppId`, void 0),
  _([_], _.prototype, `m_broadcastViewerCount`, void 0),
  _([_], _.prototype, `m_strBroadcastTitle`, void 0),
  _([_], _.prototype, `m_bCommunityBanned`, void 0),
  _([_], _.prototype, `m_eGamingDeviceType`, void 0),
  _([_], _.prototype, `m_bNameInitialized`, void 0);
var _ = _(_(), 1);
function _(_, _) {
  return new _.default(
    async (_) => {
      let _ = [..._],
        _ = await _.GetPlayerLinkDetails(_, {
          steamids: _,
        }),
        _ = new Map();
      return (
        _.Body()
          .accounts()
          .forEach((_) => {
            let _ = _.toObject();
            _.set(_.public_data.steamid, _);
          }),
        _.map((_) => _.get(_) ?? null)
      );
    },
    {
      maxBatchSize: 100,
      cache: !1,
      ..._,
    },
  );
}
function _(_) {
  return _(`PlayerLinkDetails`, () => _(_));
}
function _(_) {
  let _ = _(),
    _ = _.useContext(_);
  return _(_(_, _, _));
}
function _(_) {
  let _ = _.useRef(void 0),
    _ = _(_);
  return _.data
    ? _
    : ((_.current ||= new _(
        typeof _ == `string` ? new _(_) : _.InitFromAccountID(_, _.EUNIVERSE),
      )),
      {
        ..._,
        data: _.current,
      });
}
function _(_) {
  let _ = _(),
    _ = _.useContext(_);
  return _({
    queries: _.map((_) => _(_, _, _)),
  });
}
function _(_) {
  return _.getQueryData([`PlayerSummary`, _]);
}
var _ = _.createContext({
  loadPersonaState: async (_, _) => {
    if (_ == null) return null;
    let _ = await _(_).load(
      _.InitFromAccountID(_, _.EUNIVERSE).ConvertTo64BitString(),
    );
    return _(_.InitFromAccountID(_, _.EUNIVERSE), _);
  },
});
function _(_, _, _) {
  let _ = typeof _ == `string` ? new _(_).GetAccountID() : _;
  return {
    queryKey: [`PlayerSummary`, _],
    queryFn: () => _.loadPersonaState(_, _),
    enabled: !!_,
  };
}
var _;
function _(_) {
  return (_ ??= _(_));
}
function _(_, _) {
  let _ = new _(_),
    _ = _?.public_data,
    _ = _?.private_data;
  return (
    (_.m_bInitialized = !!_),
    (_.m_ePersonaState = _?.persona_state ?? 0),
    (_.m_strAvatarHash = _?.sha_digest_avatar ? _(_.sha_digest_avatar) : _),
    (_.m_strPlayerName = _?.persona_name ?? _.ConvertTo64BitString()),
    (_.m_strAccountName = _?.account_name),
    _?.persona_state_flags &&
      (_.m_unPersonaStateFlags = _?.persona_state_flags),
    _?.game_id && (_.m_gameid = _?.game_id),
    _?.game_server_ip_address &&
      (_.m_unGameServerIP = _?.game_server_ip_address),
    _?.lobby_steam_id && (_.m_game_lobby_id = _?.lobby_steam_id),
    _?.game_extra_info && (_.m_strGameExtraInfo = _?.game_extra_info),
    _?.profile_url && (_.m_strProfileURL = _.profile_url),
    _
  );
}
export { _, _, _, _, _ };
