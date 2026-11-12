function _(_) {
  let _ = _?.private_data?.persona_state ?? 0;
  return _ != 0 && _ != 7;
}
function _(_) {
  let _ = _?.private_data?.game_id;
  return _(_) && !!_ && _ != `0`;
}
function _(_) {
  return !!_?.private_data?.watching_broadcast_accountid;
}
function _(_) {
  let _ = _?.private_data?.persona_state;
  return _ == 3 || _ == 4;
}
function _(_) {
  return _(_)
    ? _(_)
      ? `in-game`
      : _(_)
        ? `watchingbroadcast`
        : `online`
    : `offline`;
}
function _(_) {
  let _;
  return (
    (_ = _(_)
      ? `ingame`
      : _(_)
        ? `watchingbroadcast`
        : _(_)
          ? `online`
          : `offline`),
    _(_) && (_ += ` awayOrSnooze`),
    _
  );
}
function _(_, _) {
  return ((_?.private_data?.persona_state_flags ?? 0) & _) != 0;
}
function _(_) {
  return _?.private_data?.game_device_type;
}
function _(_) {
  return _(_) == 544;
}
function _(_) {
  return _(_) == 545;
}
function _(_) {
  return _?.public_data?.persona_name ?? ``;
}
function _(_) {
  return _?.private_data?.game_extra_info ?? ``;
}
function _(_) {
  let _ = Math.floor(_ / 60);
  if (_ < 60) return `${_}m`;
  let _ = Math.floor(_ / 60);
  return _ < 24 ? `${_}h` : `${Math.floor(_ / 24)}d`;
}
function _(_) {
  let _ =
    _?.private_data?.last_seen_online || _?.private_data?.last_logoff_time || 0;
  if (_ == 0) return _.Localize(`#PersonaStateOffline`);
  let _ = Math.floor(Date.now() / 1e3) - _;
  return _ < 60
    ? _.Localize(`#PersonaStateLastSeen_JustNow`)
    : _.Localize(`#PersonaStateLastSeen`, _(_));
}
function _(_) {
  switch (_?.private_data?.persona_state ?? 0) {
    case 0:
    case 7:
      return _(_);
    case 1:
      return _.Localize(`#PersonaStateOnline`);
    case 2:
      return _.Localize(`#PersonaStateBusy`);
    case 3:
      return _.Localize(`#PersonaStateAway`);
    case 4:
      return _.Localize(`#PersonaStateSnooze`);
    case 5:
      return _.Localize(`#PersonaStateLookingToTrade`);
    case 6:
      return _.Localize(`#PersonaStateLookingToPlay`);
    default:
      return ``;
  }
}
function _(_) {
  return _?.private_data?.watching_broadcast_appid;
}
