import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_()),
  _ = _(_()),
  _ = _(_()),
  _ = `nicknames`;
function _(_) {
  let _ = _(),
    { data: _, isLoading: _ } = _({
      queryKey: [_],
      queryFn: async () => {
        let _ = new Map();
        if (_.logged_in) {
          let _ = _.Init(_),
            _ = (await _.GetNicknameList(_, _)).Body().toObject();
          _?.nicknames &&
            _.nicknames.length > 0 &&
            _.nicknames.forEach((_) => {
              _.accountid && _.nickname && _.set(_.accountid, _.nickname);
            });
        }
        return _;
      },
    });
  return _ ? _.get(_) : null;
}
async function _(_) {
  if (!_ || _.length == 0) return [];
  let _ = _() == `community` ? _.COMMUNITY_BASE_URL : _.STORE_BASE_URL;
  if (_.length == 1) {
    let _ = {
        accountid: _[0],
        origin: self.origin,
      },
      _ = await _.default.get(`${_}actions/ajaxgetavatarpersona`, {
        params: _,
      });
    if (!_ || _.status != 200 || _.data?.success != 1 || !_.data?.userinfo)
      throw `Load single avatar/persona failed ${_(_).strErrorMsg}`;
    return [_.data.userinfo];
  }
  {
    let _ = {
        accountids: _.join(`,`),
        origin: self.origin,
      },
      _ = await _.default.get(`${_}actions/ajaxgetmultiavatarpersona`, {
        params: _,
      });
    if (!_ || _.status != 200 || _.data?.success != 1 || !_.data?.userinfos)
      throw `Load single avatar/persona failed ${_(_).strErrorMsg}`;
    let _ = new Map();
    return (
      _.data.userinfos.forEach((_) =>
        _.set(new _(_.steamid).GetAccountID(), _),
      ),
      _.map((_) => _.get(_))
    );
  }
}
var _ = new _.default((_) => _(_), {
    cache: !1,
  }),
  _ = `avatarandpersonas`;
function _(_) {
  return [_, _];
}
function _(_) {
  let { data: _, isLoading: _ } = _({
    queryKey: _(_),
    queryFn: () => _.load(_),
  });
  return [_, _];
}
function _(_) {
  let _ = _(),
    { data: _, isLoading: _ } = _({
      queryKey: [_, _],
      queryFn: async () => {
        let _ = await _.loadMany(_);
        return (
          _.forEach((_) => {
            if (_ instanceof Error) return;
            let _ = [_, new _(_.steamid).GetAccountID()];
            _.setQueryData(_, _);
          }),
          _
        );
      },
      enabled: _?.length > 0,
    }),
    _ = (0, _.useMemo)(() => {
      let _ = [];
      return (
        _?.forEach((_) => {
          _ instanceof Error || _.push(_);
        }),
        _
      );
    }, [_]);
  return _ ? null : _;
}
