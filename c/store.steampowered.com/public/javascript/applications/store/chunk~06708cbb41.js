import { _ } from "./chunk~f025431ab0.js";
import { _, _ } from "./chunk~01cfc309bf.js";
import { _, _ } from "./main.js";
var _ = _(_()),
  _ = class _ {
    static s_PersonalCalendarStore;
    static Get() {
      return (
        _.s_PersonalCalendarStore ||
          ((_.s_PersonalCalendarStore = new _()),
          _.s_PersonalCalendarStore.Init(),
          (window.g_SubscriptionStore = _.s_PersonalCalendarStore)),
        _.s_PersonalCalendarStore
      );
    }
    async GetCalendarRecommendations(_, _, _) {
      let _ = new Date();
      (_.setDate(_.getDate() + _), _.setHours(0, 0, 0, 0));
      let _ = new Date();
      (_.setDate(_.getDate() - _), _.setHours(0, 0, 0, 0));
      let _ = await _.fetchQuery(_(_, _, _));
      return (
        (_.arrAppInfos = _.arrAppInfos.filter(
          (_) =>
            _.nReleaseDate >= _.getTime() / 1e3 &&
            _.nReleaseDate < _.getTime() / 1e3,
        )),
        _
      );
    }
    Init() {}
  };
function _(_, _, _) {
  return _(_(_, _, _));
}
function _(_, _, _) {
  return {
    queryKey: [`personalcalendar`, _, _, _],
    queryFn: async () => {
      let _ = {
          tag: _,
          days_backward: _,
          days_forward: _,
        },
        _ = await _.default.get(`${_.STORE_BASE_URL}personalcalendardata`, {
          params: _,
          timeout: 2e4,
          withCredentials: !0,
        });
      return {
        arrAppInfos: _.data.arrAppInfos,
        strResultMessage: _.data.strResultMessage,
        bUsesWishlistedGames: _.data.bUsesWishlistedGames,
      };
    },
    placeholderData: (_) => _,
  };
}
function _(_, _, _, _) {
  let _ = new Date();
  if ((_.setDate(_.getDate() - _), _)) {
    let _ = _.getDay() % 7;
    (_.setDate(_.getDate() - _), _.setHours(0, 0, 0, 0));
  } else _.setHours(0, 0, 0, 0);
  let _ = [],
    _ = new Date(_),
    _ = Math.ceil((_ + _) / 7);
  for (let _ = 0; _ < _; _++) {
    _.push([]);
    for (let _ = 0; _ < 7; _++)
      ((!_ || (_.getDay() != 0 && _.getDay() != 6)) &&
        _[_].push(Math.floor(_.getTime() / 1e3)),
        _.setDate(_.getDate() + 1),
        _.setHours(0, 0, 0, 0));
  }
  return _;
}
