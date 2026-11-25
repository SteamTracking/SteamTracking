import { _ } from "./chunk~f025431ab0.js";
import { _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _, _, _, _, _, _ } from "./main.js";
function _(_) {
  let { appid: _, profileUrl: _, dlc: _ } = _,
    _ = _
      ? `${_}/achievements/${_}`
      : `${_.COMMUNITY_BASE_URL}achievements/${_}`;
  return _ === void 0 ? _ : `${_}?dlc=${_}`;
}
function _(_) {
  return _(_);
}
var _ = _(_(), 1),
  _ = `CK7wluN09Eo-`,
  _ = `dc7pWlMQLmU-`,
  _ = `gKxbRyrbiIU-`,
  _ = {};
((_.arabic = () =>
  _(() => import(`./chunk~9465be5be3.js`), [], import.meta.url)),
  (_.brazilian = () =>
    _(() => import(`./chunk~2027cf6ba7.js`), [], import.meta.url)),
  (_.bulgarian = () =>
    _(() => import(`./chunk~68086bdbd2.js`), [], import.meta.url)),
  (_.czech = () =>
    _(() => import(`./chunk~395548bcfb.js`), [], import.meta.url)),
  (_.danish = () =>
    _(() => import(`./chunk~f5cd104b90.js`), [], import.meta.url)),
  (_.dutch = () =>
    _(() => import(`./chunk~b9b23c4881.js`), [], import.meta.url)),
  (_.english = () =>
    _(() => import(`./chunk~30012300b3.js`), [], import.meta.url)),
  (_.finnish = () =>
    _(() => import(`./chunk~85dbf37835.js`), [], import.meta.url)),
  (_.french = () =>
    _(() => import(`./chunk~7310bd1e9f.js`), [], import.meta.url)),
  (_.german = () =>
    _(() => import(`./chunk~faafba15c1.js`), [], import.meta.url)),
  (_.greek = () =>
    _(() => import(`./chunk~3344aa5ba1.js`), [], import.meta.url)),
  (_.hungarian = () =>
    _(() => import(`./chunk~e4e799e129.js`), [], import.meta.url)),
  (_.indonesian = () =>
    _(() => import(`./chunk~2c42a49fc3.js`), [], import.meta.url)),
  (_.italian = () =>
    _(() => import(`./chunk~c4e900cbd8.js`), [], import.meta.url)),
  (_.japanese = () =>
    _(() => import(`./chunk~4d9917879e.js`), [], import.meta.url)),
  (_.koreana = () =>
    _(() => import(`./chunk~87dcf8f3e0.js`), [], import.meta.url)),
  (_.latam = () =>
    _(() => import(`./chunk~b2f33036b0.js`), [], import.meta.url)),
  (_.malay = () =>
    _(() => import(`./chunk~1af5cd205c.js`), [], import.meta.url)),
  (_.norwegian = () =>
    _(() => import(`./chunk~621e94d76e.js`), [], import.meta.url)),
  (_.polish = () =>
    _(() => import(`./chunk~538bc539b9.js`), [], import.meta.url)),
  (_.portuguese = () =>
    _(() => import(`./chunk~c422b65626.js`), [], import.meta.url)),
  (_.romanian = () =>
    _(() => import(`./chunk~db8db31702.js`), [], import.meta.url)),
  (_.russian = () =>
    _(() => import(`./chunk~ced2be1757.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./chunk~c6041e7242.js`), [], import.meta.url)),
  (_.schinese = () =>
    _(() => import(`./chunk~78dc5c618e.js`), [], import.meta.url)),
  (_.spanish = () =>
    _(() => import(`./chunk~219e0af30d.js`), [], import.meta.url)),
  (_.swedish = () =>
    _(() => import(`./chunk~c0138fb192.js`), [], import.meta.url)),
  (_.tchinese = () =>
    _(() => import(`./chunk~5bf062d8db.js`), [], import.meta.url)),
  (_.thai = () =>
    _(() => import(`./chunk~b394970be5.js`), [], import.meta.url)),
  (_.turkish = () =>
    _(() => import(`./chunk~9f9803f307.js`), [], import.meta.url)),
  (_.ukrainian = () =>
    _(() => import(`./chunk~068f0b42dc.js`), [], import.meta.url)),
  (_.vietnamese = () =>
    _(() => import(`./chunk~56c8ff51ea.js`), [], import.meta.url)));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
function _(_) {
  return _ !== void 0 && _ < 10;
}
function _(_, _) {
  return new Intl.DateTimeFormat(_(), {
    year: `numeric`,
    month: `short`,
    day: `numeric`,
    hour: `numeric`,
    minute: `numeric`,
    hourCycle: _ ? `h23` : void 0,
  }).format(new Date(_ * 1e3));
}
function _(_, _) {
  return _.Localize(`#Achievements_PercentFormat`, _.toLocaleString(_(), _));
}
function _(_) {
  return _ === void 0
    ? ``
    : _(_, {
        maximumFractionDigits: 1,
        minimumFractionDigits: 1,
      });
}
function _(_) {
  return _.Localize(`#Achievements_Tooltip_GlobalUnlockPercent`, _(_));
}
function _(_, _) {
  return _
    ? {
        name: _.Localize(`#AchievementSpoilerName`),
        description: _.Localize(`#AchievementSpoilerDescription`),
      }
    : {
        name: _.name ?? ``,
        description: _.description ?? ``,
      };
}
var _ = `steamQueryPersist`,
  _ = _.createContext(void 0);
_.Provider;
function _(_) {
  let { area: _, maxAgeSeconds: _, meta: _, ..._ } = _,
    _ = _.useContext(_),
    _ = _.useMemo(() => _(_, _, _), [_, _, _]);
  return _({
    ..._,
    meta: _,
    persister: _?.GetPersister(_),
  });
}
function _(_, _, _) {
  return {
    ..._,
    [_]: {
      area: _,
      maxAgeSeconds: _,
    },
  };
}
function _(_, ..._) {
  return [`achievements`, _, ..._];
}
var _ = (_) => _(_, `schema_v2`);
async function _(_, _, _, _) {
  return (await _?.(_)) ?? _(_, _, _);
}
async function _(_, _, _) {
  let _ = await _.GetGameAchievements(_, {
    appid: _,
    language: _,
  });
  if (_.GetEResult() === 42)
    return {
      appid: _,
      language: _,
      groups: [],
      schema_hash: 0,
      schema_version: 0,
    };
  if (_(_)) throw new _();
  if (_.GetEResult() !== 1)
    throw (
      console.error(`Received error from GetGameAchievements`, _.GetEResult()),
      Error(`Error from GetGameAchievements: ${_.GetEResult()}`)
    );
  let _ = {};
  return (
    (_[0] = {
      _: 0,
      archived: !1,
      developeronly: !1,
      ispublic: !0,
      dlcappid: 0,
      order: -1,
      achievements: [],
    }),
    _.Body().groups().toString(),
    _.Body()
      .groups()
      .forEach((_) => {
        let _ = _.groupid();
        _[_] = {
          _: _,
          name: _.localized_name(),
          archived: _.archived() ?? !1,
          ispublic: _.ispublic() ?? !0,
          developeronly: _.developeronly() ?? !1,
          dlcappid: _.dlcappid() ?? 0,
          order: _.order() ?? 0,
          achievements: [],
        };
      }),
    _.Body()
      .toObject()
      ?.achievements?.forEach((_) => {
        let _ = _.groupid ?? 0;
        _[_].achievements.push({
          internal_key: _.internal_key ?? 0,
          api_name: _.internal_name ?? ``,
          name: _.localized_name,
          description: _.localized_desc,
          hidden: _.hidden ?? !1,
          archived: _.archived ?? !1,
          icon_achieved: _.icon || void 0,
          icon_unachieved: _.icon_gray || void 0,
          groupid: _.groupid ?? 0,
          min_progress: _.min_progress_int ?? _.min_progress_float,
          max_progress: _.max_progress_int ?? _.max_progress_float,
        });
      }),
    {
      appid: _,
      language: _,
      groups: Object.values(_)
        .filter((_) => _.achievements.length > 0)
        .sort((_, _) => _.order - _.order),
      schema_hash: _.Body()?.schema_hash() ?? 0,
      schema_version: _.Body()?.schema_version() ?? 0,
    }
  );
}
var _ = (_) => _(_, `globalpercentages`);
async function _(_, _) {
  let _ = await _.GetGlobalAchievementPercentages(_, {
    appid: _,
  });
  if (_.GetEResult() === 42)
    return {
      percentages: {},
    };
  if (_(_)) throw new _();
  if (_.GetEResult() !== 1)
    throw (
      console.error(
        `Received error from GetGlobalAchievementPercentages`,
        _.GetEResult(),
      ),
      Error(`Error from GetGlobalAchievementPercentages: ${_.GetEResult()}`)
    );
  return {
    percentages: _.Body()
      .achievements()
      .reduce((_, _) => {
        let _ = _.internal_key();
        return (_ === void 0 || (_[_] = _.player_percent_unlocked() ?? 0.1), _);
      }, {}),
  };
}
function _(_, _) {
  return _(_, `user_achievements`, _);
}
function _(_, _) {
  return _(_, `local_user_achievements`, _);
}
function _(_, _, _, _) {
  return {
    appid: _,
    steamid: _,
    achievements: (_?.achievements() ?? []).reduce((_, _) => {
      let _ = _.internal_key();
      return (
        (_[_] = {
          internal_key: _,
          unlocked: _.unlocked(),
          unlock_time: _.unlock_time(),
          progress: _.progress_int() ?? _.progress_float(),
        }),
        _
      );
    }, {}),
    groups: (_?.groups() ?? []).reduce((_, _) => {
      let _ = _.groupid(),
        _ = _.is_completed(),
        _ = _.time_completed();
      return (
        (_[_] = {
          groupid: _,
          is_achievable: _.is_achievable(),
          completed_achievements: _.completed_achievements() ?? 0,
          is_completed: _ !== void 0 && _,
          time_completed: _ || void 0,
        }),
        _
      );
    }, {}),
    schema_hash: _,
  };
}
function _(_, _) {
  if (!_) return _;
  let _ = {
    ..._.groups,
  };
  for (let _ of Object.values(_.groups)) {
    let _ = _.groups[_.groupid];
    _[_.groupid] = {
      ..._,
      is_completed: (_?.is_completed ?? !1) || _.is_completed,
      time_completed: _?.time_completed ?? _.time_completed,
    };
  }
  let _ = {
    ..._.achievements,
  };
  for (let _ of Object.values(_.achievements))
    _[_.internal_key]?.unlocked || (_[_.internal_key] = _);
  return {
    ..._,
    achievements: _,
    groups: _,
  };
}
var _ = class extends Error {
  constructor() {
    super(`Achievements request: server unreachable`);
  }
};
function _(_) {
  let _ = _.Hdr().transport_error();
  return _ === 2 || _ === 3 || _.GetEResult() === 3;
}
async function _(_, _, _) {
  if (_ == `` || _ == `0`) return _(_, _, void 0, 0);
  let _ = await _.GetUserAchievements(_, {
    appid: _,
    steamid: _,
  });
  if (_.GetEResult() === 15 || _.GetEResult() === 18) return _(_, _, void 0, 0);
  if (_(_)) throw new _();
  if (_.GetEResult() !== 1)
    throw (
      console.error(`Received error from GetUserAchievements`, _.GetEResult()),
      Error(`Error from GetUserAchievements: ${_.GetEResult()}`)
    );
  return _(_, _, _.Body(), _.Body()?.schema_hash() ?? 0);
}
var _ = _(),
  _ = (0, _.createContext)({});
function _() {
  return (0, _.useContext)(_);
}
function _(_) {
  return _?.bNoRetryOnError
    ? {
        retry: !1,
        retryOnMount: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }
    : {};
}
function _(_, _) {
  return !(_ instanceof _) && _ < 3;
}
function _(_, _) {
  return `${_.BASE_URL_SHARED_CDN}community_assets/images/apps/${_}/${_}`;
}
function _(_, _, _) {
  return {
    ..._,
    icon_achieved: _.icon_achieved ? _(_, _.icon_achieved) : void 0,
    icon_unachieved: _.icon_unachieved ? _(_, _.icon_unachieved) : void 0,
  };
}
function _(_, _) {
  return {
    ..._,
    groups: _.groups.map((_) => ({
      ..._,
      name: _._ === 0 ? _.Localize(`#Achievements_Set_BaseGame`) : _.name,
      achievements: _.achievements.map((_) => _(_.appid, _, _)),
    })),
  };
}
function _(_, _, _) {
  return {
    queryKey: _(_),
    queryFn: () => _(_, _, _.LANGUAGE, _),
    staleTime: 864e5,
    retry: _,
    area: `achievements`,
  };
}
function _(_, _) {
  let _ = _(),
    { fnGetAchievementIconURL: _ = _, fnFetchLocalGameAchievements: _ } = _(),
    _ = (0, _.useCallback)((_) => _(_, _), [_]);
  return _({
    ..._(_, _, _),
    select: _,
    ..._(_),
  });
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => _(_, _),
    staleTime: 864e5,
    retry: _,
    area: `achievements`,
  };
}
function _(_, _) {
  return _({
    ..._(_(), _),
    ..._(_),
  });
}
function _(_, _) {
  let { data: _ } = _(_);
  if (_) return _.percentages[_] ?? void 0;
}
function _(_, _, _) {
  return {
    queryKey: _(_, _),
    queryFn: async () => _(_, _, _),
    staleTime: 6e5,
    retry: _,
    area: `achievements`,
  };
}
function _(_, _, _) {
  let { fnFetchLocalUserAchievements: _ } = _(),
    _ = !!_ && !!_,
    _ = _({
      queryKey: _(_, _),
      queryFn: async () => (await _(_, _)) ?? null,
      enabled: _,
      staleTime: 1 / 0,
    }),
    _ = _.data,
    _ = _.dataUpdatedAt,
    _ = _ && _.isPending;
  return (0, _.useMemo)(
    () =>
      _ && _.data === void 0
        ? {
            ..._,
            status: `pending`,
            isPending: !0,
            isLoading: !0,
            isError: !1,
            error: null,
          }
        : _
          ? {
              ..._,
              data: _(_.data, _),
              dataUpdatedAt: Math.max(_.dataUpdatedAt, _),
              ...(_.isPending && {
                status: `success`,
                isPending: !1,
                isLoading: !1,
                isSuccess: !0,
              }),
            }
          : _,
    [_, _, _, _],
  );
}
function _(_, _) {
  return _(_, _, _(_(_(), _, _)));
}
function _(_) {
  if (_ !== void 0)
    return {
      "--icon-size": _ == `fill` ? `100%` : `${_}px`,
    };
}
function _(_) {
  let {
      imgURL: _,
      glow: _,
      pauseAnimation: _,
      hidden: _,
      alt: _,
      hideNativeTooltip: _ = !1,
      className: _,
      size: _,
      ..._
    } = _,
    [_, _] = _.useState(!1),
    _ = _.useCallback((_) => {
      _ &&
        (_.complete
          ? _(!0)
          : (_.onload = () => {
              _(!0);
            }));
    }, []),
    _ = _ && (_ || _),
    _ = _(_);
  return (0, _.jsxs)(`div`, {
    className: _(_, _, _ && `QitWOKeXzIo-`),
    style: _,
    ..._,
    children: [
      _ &&
        (0, _.jsx)(`div`, {
          className: `pZot2CAG0rQ-`,
          children: (0, _.jsx)(`div`, {
            className: `tzerkVxSWek-`,
            children: (0, _.jsx)(`div`, {
              className: `rl2nPtOHt2k-`,
            }),
          }),
        }),
      _
        ? (0, _.jsx)(`div`, {
            className: _(_, _ && `HTU-WDYrxMw-`),
            children: `?`,
          })
        : (0, _.jsx)(`img`, {
            ref: _,
            className: _(_, _ && `HTU-WDYrxMw-`),
            src: _ == `` ? void 0 : _,
            loading: `lazy`,
            alt: _,
            title: _ ? void 0 : _,
          }),
    ],
  });
}
function _(_) {
  let {
      achievement: _,
      globalUnlockPercentage: _,
      unlocked: _,
      forceVisible: _ = !1,
      hidden: _,
      ..._
    } = _,
    _ = _ ?? (!_ && !_ && _.hidden),
    _ = (_ ? _.icon_achieved : _.icon_unachieved) ?? ``,
    _ = _ && _(_),
    _ = _ ? _.Localize(`#AchievementSpoilerName`) : (_.name ?? ` `);
  return (0, _.jsx)(_, {
    hidden: _,
    imgURL: _,
    glow: _,
    alt: _,
    ..._,
  });
}
