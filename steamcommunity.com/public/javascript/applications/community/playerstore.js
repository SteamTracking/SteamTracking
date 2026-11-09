/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { K as t, Pt as n } from "./libraries.js";
import { t as r } from "./playerlinkdetailsdataloader.js";
import { r as i } from "./personautils.js";
import { t as a } from "./persona.js";
import { Sm as o, dm as s, eh as c, qp as l } from "./main.js";
var u = e(n());
function d(e) {
  let n = l(),
    r = u.useContext(p);
  return t(m(r, n, e));
}
function f(e) {
  let t = u.useRef(void 0),
    n = d(e);
  return n.data
    ? n
    : ((t.current ||= new a(
        typeof e == `string` ? new o(e) : o.InitFromAccountID(e, s.EUNIVERSE),
      )),
      { ...n, data: t.current });
}
var p = u.createContext({
  loadPersonaState: async (e, t) => {
    if (e == null) return null;
    let n = await g(t).load(
      o.InitFromAccountID(e, s.EUNIVERSE).ConvertTo64BitString(),
    );
    return _(o.InitFromAccountID(e, s.EUNIVERSE), n);
  },
});
function m(e, t, n) {
  let r = typeof n == `string` ? new o(n).GetAccountID() : n;
  return {
    queryKey: [`PlayerSummary`, r],
    queryFn: () => e.loadPersonaState(r, t),
    enabled: !!r,
  };
}
var h;
function g(e) {
  return (h ??= r(e));
}
function _(e, t) {
  let n = new a(e),
    r = t?.public_data,
    o = t?.private_data;
  return (
    (n.m_bInitialized = !!t),
    (n.m_ePersonaState = o?.persona_state ?? 0),
    (n.m_strAvatarHash = r?.sha_digest_avatar ? c(r.sha_digest_avatar) : i),
    (n.m_strPlayerName = r?.persona_name ?? e.ConvertTo64BitString()),
    (n.m_strAccountName = o?.account_name),
    o?.persona_state_flags &&
      (n.m_unPersonaStateFlags = o?.persona_state_flags),
    o?.game_id && (n.m_gameid = o?.game_id),
    o?.game_server_ip_address &&
      (n.m_unGameServerIP = o?.game_server_ip_address),
    o?.lobby_steam_id && (n.m_game_lobby_id = o?.lobby_steam_id),
    o?.game_extra_info && (n.m_strGameExtraInfo = o?.game_extra_info),
    r?.profile_url && (n.m_strProfileURL = r.profile_url),
    n
  );
}
export { f as n, d as t };
