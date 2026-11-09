import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _ } from "./playerlinkdetailsdataloader.js";
import { _ } from "./personautils.js";
import { _ } from "./persona.js";
import { _, _, _, _ } from "./main.js";
var _ = _(_());
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
export { _, _ };
