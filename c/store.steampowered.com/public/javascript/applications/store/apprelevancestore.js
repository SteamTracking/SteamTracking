import { _ } from "./rolldown-runtime.js";
import { _, _, _, _ } from "./libraries.js";
import { _, _ } from "./steammessages_user_reviews_pb.js";
import { _, _, _, _ } from "./main.js";
import { _ } from "./storequery.js";
var _ = _(_()),
  _ = _(_());
function _(_) {
  return [`AppRelevanceStore`, `FriendsRecommended`, _];
}
function _(_) {
  let _ = _();
  return _({
    queryKey: _(_),
    queryFn: () => _(_, _),
    enabled: _.logged_in,
  });
}
function _() {
  let _ = _();
  return _.useCallback(
    (_, _) => {
      _.setQueryData(_(_), _);
    },
    [_],
  );
}
function _(_) {
  return _({
    queryKey: [`AppRelevanceStore`, `StoreRelevance`, _],
    queryFn: () => _(_),
    enabled: _.logged_in,
  });
}
function _() {
  return _(`App Relevance Store Top Sellers`, {
    sort: 11,
    start: 0,
    count: 100,
  });
}
function _() {
  let { data: _ } = _();
  return _;
}
async function _(_, _) {
  let _ = _.Init(_);
  _.Body().set_appid(_);
  let _ = await _.GetFriendsRecommendedApp(_, _),
    _ = _.GetEResult();
  if (_ == 1) return _.Body().toObject();
  throw `Error ${_} failed to call GetFriendsRecommendedApp ${_}`;
}
async function _(_) {
  let _ = {
      appid: _,
    },
    _ = {
      arrSimilarPlayedApps: [],
      bRecommendedByIR: !1,
    },
    _ = (
      await _.default.get(
        `${_.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
        {
          params: _,
          withCredentials: !0,
          timeout: 1e4,
        },
      )
    ).data;
  return (
    _ &&
      _.success == 1 &&
      (_.results.similar_played_apps &&
        (_.arrSimilarPlayedApps = _.results.similar_played_apps.map((_) => ({
          appid: _.appid,
          playtimeForever: _.playtime_forever,
        }))),
      _.results.recommended_by_ir && (_.bRecommendedByIR = !0)),
    _
  );
}
