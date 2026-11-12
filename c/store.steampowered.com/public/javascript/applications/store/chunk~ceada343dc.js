import { _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~593a6b8ddc.js";
import { _, _, _, _ } from "./main.js";
function _(_) {
  let _ = _.GetELanguageFallback(_);
  return _ == _ ? `${_}` : `${_}_${_}`;
}
function _(_) {
  return _ ? _(new _(_.clanSteamID64), _.event) : null;
}
async function _(_, _) {
  let _ = new URLSearchParams();
  (_.clanAccountID && _.set(`clan_accountid`, String(_.clanAccountID)),
    _.appid && _.set(`appid`, String(_.appid)),
    _.eventGID && _.set(`event_gid`, _.eventGID),
    _.announcementGID && _.set(`announcement_gid`, _.announcementGID),
    _.set(`lang_list`, _(_)),
    _.set(`last_modified_time`, `0`),
    _.set(`origin`, window.location.origin));
  let _ = _.STORE_BASE_URL + `events/ajaxgetpartnerevent?` + _.toString(),
    _ = await fetch(_);
  if (!_._) throw Error(`${_} answered ${_.status}`);
  let _ = await _.json();
  return _.success !== 1 || !_.event?.clan_steamid
    ? null
    : {
        clanSteamID64: _.event.clan_steamid,
        event: _.event,
      };
}
function _(_, _) {
  return [
    `LinkedPartnerEvent`,
    _.clanAccountID,
    _.appid,
    _.eventGID,
    _.announcementGID,
    _,
  ];
}
function _(_) {
  return (
    !!_ &&
    (!!_.clanAccountID || !!_.appid) &&
    (!!_.eventGID || !!_.announcementGID)
  );
}
function _(_, _) {
  let _ = _(_);
  return {
    queryKey: _(_ ?? {}, _),
    queryFn: () => _(_ ?? {}, _),
    select: _,
    enabled: _,
    staleTime: 36e5,
    retry: !1,
  };
}
function _(_) {
  let _ = _(_.LANGUAGE);
  return _(_(_, _));
}
var _ = 1778623200;
function _(_, _) {
  let _ = !1;
  return (
    _ && _.GetEventType() == 36
      ? (_ = !0)
      : _ && _ && _.is_creator_home && (_ = _(_, _)),
    _
  );
}
function _(_, _) {
  return !!_ && !!_.is_creator_home && (_.createTime ?? 0) > _;
}
