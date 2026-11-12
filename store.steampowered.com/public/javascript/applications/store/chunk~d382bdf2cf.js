/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, lt as n, st as r } from "./chunk~01cfc309bf.js";
import { r as i } from "./chunk~0278ae6236.js";
import { t as a } from "./chunk~a35e3605eb.js";
import { t as o } from "./chunk~cc40f6af5e.js";
import { Vy as s, cx as c, ly as l, xx as u } from "./main.js";
var d = e(t());
function f(e) {
  let t = l(),
    n = d.useContext(m);
  return r(h(n, t, e));
}
function p(e) {
  let t = l(),
    r = d.useContext(m);
  return n({ queries: e.map((e) => h(r, t, e)) });
}
var m = d.createContext({
  loadPersonaState: async (e, t) => {
    if (e == null) return null;
    let n = await _(t).load(
      s.InitFromAccountID(e, c.EUNIVERSE).ConvertTo64BitString(),
    );
    return v(s.InitFromAccountID(e, c.EUNIVERSE), n);
  },
});
function h(e, t, n) {
  let r = typeof n == `string` ? new s(n).GetAccountID() : n;
  return {
    queryKey: [`PlayerSummary`, r],
    queryFn: () => e.loadPersonaState(r, t),
    enabled: !!r,
  };
}
var g;
function _(e) {
  return (g ??= o(e));
}
function v(e, t) {
  let n = new a(e),
    r = t?.public_data,
    o = t?.private_data;
  return (
    (n.m_bInitialized = !!t),
    (n.m_ePersonaState = o?.persona_state ?? 0),
    (n.m_strAvatarHash = r?.sha_digest_avatar ? u(r.sha_digest_avatar) : i),
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
export { f as n, p as t };
