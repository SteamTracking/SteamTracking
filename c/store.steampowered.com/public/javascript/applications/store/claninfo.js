import { _, _ } from "./libraries.js";
import { _, _ } from "./main.js";
async function _(_) {
  return _(
    `${_.COMMUNITY_BASE_URL}ogg/${_}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function _(_) {
  let _ = _.InitFromClanID(_, _.EUNIVERSE);
  return _(
    `${_.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function _(_) {
  return _(
    `${_.COMMUNITY_BASE_URL}groups/${_}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function _(_) {
  return _(
    `${_.COMMUNITY_BASE_URL}games/${_}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function _(_) {
  let _ = await fetch(_, {
    method: `GET`,
  });
  if (_.status == 404) return null;
  if (!_._) throw Error(`Server returned ${_.status}`);
  let _ = await _.json();
  return _.success == 1 ? _ : null;
}
function _(_) {
  return [`clantoclaninfo`, _];
}
function _(_) {
  return [`apptoclanid`, _];
}
function _(_, _ = `group`) {
  return [`vanitytoclanid`, _, _?.toLocaleLowerCase()];
}
function _(_) {
  let _ = _?.[0];
  return _ == `clantoclaninfo` || _ == `apptoclanid` || _ == `vanitytoclanid`;
}
var _ = new WeakSet();
function _(_) {
  if (!_.has(_)) {
    _.add(_);
    for (let _ of [[`clantoclaninfo`], [`apptoclanid`], [`vanitytoclanid`]])
      _.setQueryDefaults(_, {
        staleTime: 1 / 0,
        gcTime: 1 / 0,
        retry: !1,
      });
  }
}
var _ = new WeakMap();
function _(_) {
  if (!_) return null;
  let _ = _.get(_);
  return (
    _ ||
      ((_ = {
        ..._,
        clanSteamID: _.clanSteamIDString
          ? new _(_.clanSteamIDString)
          : _.InitFromClanID(_.clanAccountID, _.EUNIVERSE),
      }),
      _.set(_, _)),
    _
  );
}
function _(_) {
  let { msg: _, success: _, ..._ } = _;
  return {
    ..._,
    rss_language: _.rss_language ? _.rss_language : 0,
  };
}
function _(_, _) {
  if (!_) return null;
  _(_);
  let _ = _(_);
  return (
    _.setQueryData(_(_.clanAccountID), _),
    _.appid && _.setQueryData(_(_.appid), _.clanAccountID),
    _.vanity_url && _.setQueryData(_(_.vanity_url, `group`), _.clanAccountID),
    _
  );
}
function _(_, _) {
  for (let _ of _) _(_, _);
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_, _) {
  return (
    _(_),
    {
      queryKey: _(_ ?? null),
      queryFn: async () => (_ ? _(_, await _(_)) : null),
      enabled: _ !== void 0,
      select: _,
    }
  );
}
function _(_, _) {
  return (
    _(_),
    {
      queryKey: _(_),
      queryFn: async () => _(_, await _(_))?.clanAccountID ?? null,
      enabled: !!_,
    }
  );
}
function _(_, _, _ = `group`) {
  return (
    _(_),
    {
      queryKey: _(_, _),
      queryFn: async () => {
        if (_ == `store`) {
          let _ = _.getQueryData(_(_, `group`));
          if (_) return _;
        }
        return (
          _(_, _ == `store` ? await _(_) : await _(_))?.clanAccountID ?? null
        );
      },
      enabled: !!_,
    }
  );
}
function _(_) {
  return _.isPending ? void 0 : (_.data ?? null);
}
function _(_, _ = `group`) {
  let _ = _(),
    _ = _(_(_, _, _));
  return _(_ ? _(_) : void 0);
}
function _(_, _) {
  if (_) return _(_.getQueryData(_(_))) ?? void 0;
}
function _(_, _) {
  if (_) return _(_.getQueryData(_(_)), _);
}
function _(_, _, _) {
  if (!_) return;
  let _ = _ ? [_] : [`store`, `group`];
  for (let _ of _) {
    let _ = _(_.getQueryData(_(_, _)), _);
    if (_) return _;
  }
}
async function _(_, _) {
  return _ ? _(await _.fetchQuery(_(_, _))) : null;
}
async function _(_, _) {
  return _ ? _(await _.fetchQuery(_(_, _)), _) : null;
}
async function _(_, _, _ = `group`) {
  return _ ? _(await _.fetchQuery(_(_, _, _)), _) : null;
}
