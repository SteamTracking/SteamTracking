import { _ } from "./libraries.js";
import "./playerstore.js";
import { _, _ } from "./steammessages_friendslist_pb.js";
import { _, _, _, _, _, _, _ } from "./main.js";
function _() {
  let _ = _(),
    _ = _();
  return _(_(_, _));
}
function _(_, _) {
  return {
    queryKey: [`GetFriendsList`, _],
    queryFn: async () => {
      let _ = _.Init(_),
        _ = await _.GetFriendsList(_, _),
        _ = [];
      for (let _ of _.Body().friendslist()?.friends() ?? []) {
        let _ = _.ulfriendid();
        _ &&
          (_.efriendrelationship() == 3 || _.efriendrelationship() == 6) &&
          new _(_).BIsIndividualAccount() &&
          _.push(_);
      }
      return _;
    },
  };
}
function _() {
  let _ = _(),
    _ = _();
  return _({
    queryKey: [`GetIgnoredAccounts`, _],
    queryFn: async () => {
      let _ = _.Init(_);
      return (await _.GetFriendsList(_, _))
        .Body()
        .friendslist()
        ?.friends()
        ?.filter((_) => {
          let _ = new _(_.ulfriendid());
          return (
            (_.efriendrelationship() == 5 || _.efriendrelationship() == 6) &&
            _.BIsIndividualAccount()
          );
        })
        .map((_) => _.ulfriendid());
    },
  });
}
function _(_ = {}) {
  let _ = _(),
    _ = _();
  return _({
    ..._(_, _),
    ..._,
  });
}
function _(_, _) {
  return {
    queryKey: [`GetFriendNicknameList`, _],
    queryFn: async () => {
      let _ = _.Init(_);
      return (await _.GetNicknameList(_, _)).Body().toObject();
    },
  };
}
function _(_ = {}) {
  return _({
    ..._,
    select: (_) => _(_.nicknames),
  });
}
function _(_) {
  let _ = new Map();
  for (let _ of _ ?? [])
    _.accountid !== void 0 &&
      _.nickname !== void 0 &&
      _.set(_.accountid, _.nickname);
  return _;
}
async function _(_, _) {
  let _ = _.Init(_);
  _.Body().set_appid(_);
  let _ = await _.GetFriendsGameplayInfo(_, _);
  return (
    _.BSuccess() ||
      console.warn(`Failed to get gameplay info: ${_.GetEResult()}`),
    _.Body().toObject()
  );
}
function _(_, _ = {}) {
  let _ = _(),
    _ = _();
  return _({
    queryKey: [`GameplayInfo_${_}_${_}`],
    queryFn: async () => await _(_, _),
    ..._,
  });
}
export { _, _, _, _ };
