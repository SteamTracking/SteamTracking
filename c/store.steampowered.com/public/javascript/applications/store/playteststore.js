import { _ } from "./rolldown-runtime.js";
import { _, _, _, _ } from "./libraries.js";
import { _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_()),
  _ = `PlaytestInvites`;
function _() {
  let _ = _();
  return _({
    queryKey: [_],
    queryFn: async () => {
      let _ = _.Init(_),
        _ = await _.GetInvites(_, _);
      if (_.GetEResult() != 1)
        throw Error(
          `Error from usePlaytestInvite: ${_.GetEResult()} ${_.GetErrorMessage()}`,
        );
      return _.Body()?.toObject().invites ?? [];
    },
  });
}
function _(_) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      _.Body().add_invite_ids(_), _.Body().set_status(_.bAccept ? 3 : 2);
      let _ = await _.UpdateInvites(_, _);
      if (_.GetEResult() != 1)
        throw {
          result: _.GetEResult(),
          message: `Error from UpdatePlaytestInvite: ${_.GetErrorMessage()} ( ${_.GetEResult()} )`,
        };
    },
    onSuccess: (_, _) => {
      _.setQueryData([_], (_) =>
        _.map((_) =>
          _.invite_id === _
            ? {
                ..._,
                status: _.bAccept ? 3 : 2,
              }
            : _,
        ),
      );
    },
    onError: () => {
      _.invalidateQueries({
        queryKey: [_],
      });
    },
  });
}
function _(_) {
  return [`PlaytestUserStatus`, _];
}
function _(_) {
  let _ = _();
  return _({
    queryKey: _(_),
    queryFn: async () => {
      if (_.logged_in) {
        let _ = _.Init(_);
        _ && _.Body().set_appid(_);
        let _ = await _.GetUserStatus(_, _);
        if (_.GetEResult() != 1)
          throw Error(
            `Error from usePlaytestUserStatus: ${_.GetEResult()} ${_.GetErrorMessage()}`,
          );
        return _.Body()?.toObject().results ?? [];
      }
      return [];
    },
    staleTime: 6e5,
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
export { _, _, _, _ };
