import { _, _ } from "./libraries.js";
import { _ } from "./clanimagemodels.js";
import { _ } from "./claninfo.js";
import { _, _, _, _, _, _, _ } from "./main.js";
function _(_) {
  let _ = _(),
    _ = _();
  return _(_(_, _, _)).data ?? void 0;
}
function _(_, _, _) {
  return {
    queryKey: _(_),
    enabled: !!_?.GID,
    queryFn: async () => {
      if (!_) return null;
      let _ = _.appid
          ? await _.ensureQueryData(
              _(_, {
                appid: _.appid,
              }),
            )
          : null,
        _ = await _.ensureQueryData(_(_.clanSteamID.GetAccountID(), _));
      if (_.appid) {
        if (_) {
          if (_.all_ages_screenshots && _.all_ages_screenshots.length > 0) {
            let _ = Number(
              _.bOldAnnouncement
                ? _.AnnouncementGID
                : _.GID == null
                  ? 0
                  : _.GID,
            );
            return (
              (_ %= _.all_ages_screenshots.length),
              `${_.STORE_ITEM_BASE_URL}${_.all_ages_screenshots[_].filename}`
            );
          }
        } else return ``;
      }
      return _.GetEventType() != 36 &&
        _ &&
        ((_.is_creator_home && !_.is_ogg) || _.is_curator)
        ? (_.avatar_full_url ?? null)
        : null;
    },
  };
}
function _(_) {
  return [`useFallbackArtworkScreenshot`, _?.GID];
}
function _(_, _, _, _ = _.full, _ = !0) {
  let _ = _(),
    _ = _();
  return _(_(_, _, _, _, _, _, _)).data ?? void 0;
}
function _(_, _, _, _ = _.full, _ = !0) {
  return [`useEventImageURLWithFallback`, _?.GID, _, _, _, _];
}
function _(_, _, _, _, _, _ = _.full, _ = !0) {
  return {
    queryKey: _(_, _, _, _, _),
    enabled: !!_?.GID,
    initialData: () => _(_, _, _, _, _),
    queryFn: async () => {
      if (!_) return null;
      let _ = _(_, _, _, _, _);
      if (_) return _;
      let _ = await _.ensureQueryData(_(_.clanSteamID.GetAccountID(), _));
      if (_ == `capsule`) {
        let _ = _.appid;
        if (!_ && _ && ((_.is_creator_home && !_.is_ogg) || _.is_curator)) {
          if (_.jsondata?.referenced_appids?.length)
            _ = _.jsondata.referenced_appids[0];
          else return _.avatar_full_url ?? null;
        }
        let _ = await _.ensureQueryData(
          _(_, {
            appid: _,
          }),
        );
        return _
          ? (_(_, `main_capsule`) ?? null)
          : _?.avatar_full_url
            ? _.avatar_full_url
            : `${_.STORE_ITEM_BASE_URL}steam/apps/${_}/header.jpg`;
      }
      return _ == `background` &&
        _ &&
        ((_.is_creator_home && !_.is_ogg) || _.is_curator)
        ? (_.creator_page_bg_url ?? null)
        : await _.ensureQueryData(_(_, _, _));
    },
  };
}
function _(_, _, _, _ = _.full, _ = !0) {
  if (!_) return;
  let _ = _.GetImageURL(_, _, _);
  if (_ && _.trim().length > 0) return _;
  let _ = _.GetELanguageFallback(_);
  if (_ != _) {
    let _ = _.GetImageURL(_, _, _);
    if (_ && _.trim().length > 0) return _;
  }
  if (_ == `capsule`) {
    let _ = _.GetImageFromBeginningOfDescription(_, Number.MAX_VALUE);
    if (_ && (_ || _(_))) return _;
  }
}
export { _, _, _, _ };
