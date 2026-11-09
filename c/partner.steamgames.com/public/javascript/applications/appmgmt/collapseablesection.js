import { _, _, _, _, _, _, _, _ } from "./mobx.esm.js";
import { _, _ } from "./src.js";
import { _, _, _, _, _ } from "./dialogs.js";
import { _ } from "./react-router.js";
import { _ } from "./servicetransportprovider.js";
import { _ } from "./utils.js";
import { _ } from "./useQuery.js";
import { _ } from "./reactqueryroot.js";
import { _ } from "./dataloader.js";
import { _ } from "./axios.js";
import { _ } from "./axiosutils.js";
import { _ } from "./partnereventshared.module.js";
import "./steamid.js";
import { _, _ } from "./steammessages_player_pb.js";
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
function _(_) {
  return _.getQueryData([_, _]);
}
var _ = `-POP4zTRo6U-`,
  _ = `dzdTC1QVCoU-`,
  _ = `p3qQHic3po0-`,
  _ = _();
function _(_) {
  let {
      title: _,
      tooltip: _,
      getMinimized: _,
      toggleMinimized: _,
      className: _,
      children: _,
      elAdditionalButtons: _,
    } = _,
    _ = _(() => _());
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`div`, {
        className: _(_, _, _, `SectionTitleHeader`),
        children: [
          (0, _.jsxs)(`div`, {
            className: _(_, `EventEditorTextTitle`),
            children: [
              _,
              !!_ &&
                (0, _.jsx)(_, {
                  tooltip: _,
                }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              _,
              (0, _.jsx)(_, {
                bIsMinimized: _,
                fnToggleMinimize: _,
              }),
            ],
          }),
        ],
      }),
      !_ &&
        (0, _.jsx)(_, {
          children: _,
        }),
    ],
  });
}
function _(_) {
  let [_, _] = _.useState(!!_.bStartMinimized);
  return (0, _.jsx)(_, {
    ..._,
    getMinimized: () => _,
    toggleMinimized: () => _(!_),
    children: _.children,
  });
}
function _(_) {
  let { bIsMinimized: _, fnToggleMinimize: _ } = _,
    _ = _ ? `#Section_Maximize_Tooltip` : `#Section_Minimize_Tooltip`;
  return (0, _.jsx)(_, {
    "data-tooltip-text": _(_),
    onClick: _,
    children: _.bIsMinimized ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
  });
}
export { _, _, _, _, _, _, _ };
