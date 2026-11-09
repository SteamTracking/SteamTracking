var _ = _(_(), 1),
  _ = {};
((_.arabic = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.sc_schinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./chunk.js`), [], import.meta.url)));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
function _(_) {
  return _ !== void 0 && _ < 10;
}
function _(_) {
  return (_?.groups_achievable?.total ?? 0) != 0;
}
function _(_, _, _) {
  return _.achievements.some((_) => (!_.archived && !_.archived) || _(_, _, _));
}
function _(_, _, _) {
  return (
    _?.achievements[_.internal_key]?.unlocked == 1 ||
    (_?.some((_) => _?.achievements[_.internal_key]?.unlocked == 1) ?? !1)
  );
}
function _(_, _) {
  if (Array.isArray(_)) return _.length > 1 || (_.length == 1 && _[0] !== 0);
  {
    let _ = _.groups.filter((_) => _(_, _));
    return _.length > 1 || (_.length == 1 && _[0]._ !== 0);
  }
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
function _(_, _) {
  let _ = _ > 0 ? _ / _ : 0;
  return {
    percentUnlocked: _,
    percentUnlockedStr: _(_ * 100, {
      maximumFractionDigits: +(_ > 100),
    }),
  };
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
function _(_) {
  return _ >= 1789196.4;
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
function _() {
  return {
    total: 0,
    base: 0,
    dlc: 0,
  };
}
function _() {
  return {
    total: 0,
    base: 0,
    dlc: 0,
    rare: 0,
  };
}
function _(_, _) {
  (_.total++, _ ? _.dlc++ : _.base++);
}
function _(_, _, _, _) {
  ((_.total += _), (_.rare += _), _ ? (_.dlc += _) : (_.base += _));
}
function _(_, _, _) {
  return (
    _.archived || !_.archived || _?.achievements[_.internal_key]?.unlocked == 1
  );
}
function _(_, _, _) {
  let _ = 0,
    _ = 0,
    _ = 0,
    _ = 0;
  for (let _ of _.achievements) {
    if (!_(_, _, _)) continue;
    let _ = _(_?.percentages?.[_.internal_key]),
      _ = _?.achievements[_.internal_key]?.unlocked == 1;
    (_++, (_ += +!!_), (_ += +!!_), (_ += _ && _ ? 1 : 0));
  }
  let _ = _?.groups?.[_._],
    _ = _?.is_completed == 1 || (_ !== void 0 && _ > 0 && _ == _);
  return {
    isDlc: !!_.dlcappid,
    achievements: {
      total: _,
      rare: _,
      unlocked: _,
      unlockedRare: _,
    },
    isCompleted: _,
    hasNewAchievements: _ && _ < _,
    isAchievable: _?.is_achievable == 1,
  };
}
function _(_, _, _) {
  let _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _();
  for (let _ of _.groups) {
    if (!_(_, _)) continue;
    let _ = _(_, _, _),
      { isDlc: _, achievements: _ } = _;
    (_(_, _.total, _.rare, _), _(_, _));
    let _ = !_.archived && _.isAchievable;
    (_(_, _ ? _.total : _.unlocked, _ ? _.rare : _.unlockedRare, _),
      _(_, _.unlocked, _.unlockedRare, _),
      (_.isAchievable || _.isCompleted) && (_(_, _), _.isCompleted && _(_, _)));
  }
  return {
    achievements: _,
    achievable: _,
    unlocked: _,
    groups: _,
    groups_achievable: _,
    groups_completed: _,
    has_groups: _(_, _),
  };
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
  return _.map((_) => _.data);
}
function _(_, _) {
  let _ = _(),
    _ = (0, _.useMemo)(
      () =>
        _.map((_) => {
          let { area: _, ..._ } = _(_, _, _);
          return _;
        }),
      [_, _, _],
    );
  return _({
    queries: _,
    combine: _,
  });
}
function _(_, _) {
  let _ = _(),
    _ = _(_),
    _ = _(_),
    _ = _({
      ..._(_, _, _ ?? ``),
      enabled: !!_,
    }),
    _ = _(_, _ ?? ``, _),
    _ = !!_,
    _ = _.data,
    _ = _ ? _.data : void 0,
    _ = _ != null && (!_ || _ !== void 0),
    _ = () => (_ ? _(_, _.data, _) : void 0),
    _ = _({
      queryKey: _(
        _,
        `summary`,
        _ ?? ``,
        _.dataUpdatedAt,
        _.dataUpdatedAt,
        _ ? _.dataUpdatedAt : 0,
      ),
      queryFn: () => {
        let _ = _();
        if (_ === void 0) throw Error(`No achievements schema to summarize`);
        return _;
      },
      initialData: _,
      staleTime: 1 / 0,
      gcTime: 6e4,
      enabled: _,
    }),
    _ = _ ? [_, _] : [_],
    _ = _.find((_) => _.data === void 0),
    _ = _?.isPending ?? !1,
    _ = _.find((_) => _.isError),
    _ = _ ? void 0 : _.data;
  return {
    isPending: _,
    isError: !_ && _ === void 0,
    error: _?.error ?? null,
    data: _,
  };
}
var _ = `Q3WpK6X3W0o-`,
  _ = `ilohFR8t85g-`,
  _ = `baoabtDhz7Y-`,
  _ = `V3UcU547o9g-`,
  _ = `lDp-l-8FD9A-`,
  _ = `_8ULQdRr0jAM-`;
function _(_) {
  let {
      size: _ = `36`,
      isComplete: _,
      isDlc: _ = !1,
      variant: _ = `flat`,
      theme: _ = `dark`,
      shine: _ = !1,
      className: _,
    } = _,
    _ = _ == `36` ? `${_}px` : _,
    _ = _ && _,
    _ = _(
      _,
      _ && `MUtWTyVi5os-`,
      _ && `OWB8JqlRzmQ-`,
      _ == `inset` && `Sis3Z3dadx0-`,
      _ == `floating` && void 0,
      _ == `light` && `_4hrQ9mu48U8-`,
      _,
    );
  return (0, _.jsx)(_, {
    aspectRatio: `2/3`,
    height: _,
    className: _,
    children: (0, _.jsx)(_, {
      inset: _ == `inset`,
      gradient: _ == `floating`,
      shineClassName: _ ? _ : void 0,
    }),
  });
}
function _(_) {
  let {
      complete: _,
      maxComplete: _ = 3,
      showCount: _ = `overmax`,
      containerClassName: _,
      textSize: _ = `5`,
      size: _ = `36`,
      isDlc: _ = !1,
      shine: _ = !1,
      sparkles: _ = !1,
      className: _,
    } = _,
    _ = _ == `36` ? `${_}px` : _,
    _ = Math.min(_, _, 3);
  return (0, _.jsxs)(_, {
    direction: `row`,
    gap: `0`,
    align: `center`,
    className: _,
    children: [
      (_ == 1 || (_ == `overmax` && _ > _ && _ != 0)) &&
        (0, _.jsx)(_, {
          marginRight: `1`,
          size: _,
          color: _ ? `plum-10` : `blue-9`,
          weight: `medium`,
          children: _,
        }),
      (0, _.jsxs)(`span`, {
        className: _(_, _ && `OWB8JqlRzmQ-`),
        style: {
          "--award-base": _,
        },
        children: [
          Array.from(Array(_).keys()).map((_) =>
            (0, _.jsx)(
              `span`,
              {
                className: _(_, _ > 0 && `MQ3fvXFHgDc-`, _),
                style: {
                  "--shine-index": _,
                },
                children: (0, _.jsx)(_, {
                  dlc: _,
                  cutout: _[_],
                  shineClassName: _ ? _ : void 0,
                }),
              },
              _,
            ),
          ),
          _ && (0, _.jsx)(_, {}),
        ],
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
    "aria-hidden": `true`,
    children: [
      [35, 20, 0, 12],
      [80, 60, 0.3, 9],
      [55, 85, 0.55, 11],
      [95, 15, 0.8, 8],
    ].map(([_, _, _, _], _) => {
      let _ = {
        "--sparkle-x": `${_}%`,
        "--sparkle-y": `${_}%`,
        "--sparkle-delay": `${_}`,
        "--sparkle-size": `${_}px`,
      };
      return (0, _.jsx)(
        _,
        {
          style: _,
          className: _,
        },
        _,
      );
    }),
  });
}
var _ = [
    void 0,
    {
      scale: 1 / 0.875,
      overlap: 0.3,
    },
    {
      scale: 0.875 / 0.75,
      overlap: 0.3,
    },
  ],
  _ = `Ipalm5ENV44-`,
  _ = `BM82JvGmy1Q-`;
function _(_) {
  let {
      appid: _,
      steamid: _,
      showUnachievable: _ = !1,
      legend: _ = !1,
      className: _,
    } = _,
    _ = _(_, _, _),
    [_, _] = (0, _.useState)(void 0),
    _ = (0, _.jsx)(_, {
      segments: _,
      highlighted: _.find((_) => _.group._ == _),
      unlockedClassName: (_) =>
        _(
          _.unlockedClassName,
          _ !== void 0 && _ != _.group._ && `OkFlRZIwL-8-`,
        ),
      className: _,
    }),
    _ = _(_.map((_) => _.group._));
  if (!_ || !_) return _;
  let { maxRows: _ = 4, countContrast: _ = `note` } = _ === !0 ? {} : _;
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `1`,
    className: _,
    children: [
      _,
      (0, _.jsx)(_, {
        segments: _,
        highlighted: _,
        setHighlighted: _,
        maxRows: _,
        countContrast: _,
      }),
    ],
  });
}
var _ = {
    fontSize: `var(--text-size-2)`,
    lineHeight: `var(--line-height-2)`,
  },
  _ = `calc(var(--spacing-1) + var(--line-height-2))`;
function _(_) {
  let {
    segments: _,
    highlighted: _,
    setHighlighted: _,
    maxRows: _,
    countContrast: _,
  } = _;
  return (0, _.jsx)(_, {
    overflow: `auto`,
    maxHeight: `calc(${_} * ${_})`,
    children: (0, _.jsx)(_, {
      direction: `row`,
      wrap: `wrap`,
      align: `baseline`,
      children: _.map((_) =>
        (0, _.jsxs)(
          _,
          {
            paddingTop: `1`,
            paddingRight: `4`,
            cursor: `default`,
            style: _,
            onMouseEnter: () => _(_.group._),
            onMouseLeave: () => _(void 0),
            children: [
              (0, _.jsx)(_, {
                contrast:
                  _ === void 0 || _ == _.group._ ? `title` : `description`,
                weight: `medium`,
                size: `2`,
                children: _.group.name,
              }),
              (0, _.jsxs)(_, {
                contrast: _ == _.group._ ? `subtitle` : _,
                size: `2`,
                whiteSpace: `nowrap`,
                children: [
                  `\xA0`,
                  _(_.unlocked),
                  `/`,
                  _(_.unlocked + _.locked),
                ],
              }),
            ],
          },
          _.group._,
        ),
      ),
    }),
  });
}
function _(_) {
  let { groups: _, className: _ } = _,
    _ = (0, _.useMemo)(
      () =>
        _(
          _.map((_) => ({
            group: _,
            unlocked: _.unlocked,
            total: _.total,
          })),
        ),
      [_],
    );
  return (0, _.jsx)(_, {
    segments: _,
    highlighted: void 0,
    unlockedClassName: (_) => _.unlockedClassName,
    className: _,
  });
}
function _(_, _, _) {
  let { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_, _);
  return (0, _.useMemo)(() => {
    let _ = [];
    for (let _ of _?.groups ?? []) {
      if (!_(_, _)) continue;
      let { achievements: _, isAchievable: _, isCompleted: _ } = _(_, _, _);
      (_ || _ || _) &&
        _.push({
          group: _,
          unlocked: _.unlocked,
          total: _.total,
          isCompleted: _,
        });
    }
    return _(_);
  }, [_, _, _, _]);
}
function _(_) {
  let _ = [];
  for (let { group: _, unlocked: _, total: _, isCompleted: _ = !1 } of _)
    _.push({
      group: _,
      unlocked: _,
      locked: _ - _,
      isCompleted: _,
      unlockedClassName: _(_, !!_.dlcappid && `_0XQXm1s6RWA-`),
    });
  return _;
}
function _(_) {
  let { segments: _, highlighted: _, unlockedClassName: _, className: _ } = _,
    _ = _.reduce((_, _) => _ + _.unlocked, 0),
    _ = _.reduce((_, _) => _ + _.locked, 0),
    _ = (0, _.useMemo)(() => {
      if (!_) return [];
      let _ = _ + _ || 1,
        _ = _.slice(0, _.indexOf(_)).reduce((_, _) => _ + _.unlocked, 0),
        _ = _(_.unlocked),
        _ = _(_.unlocked + _.locked),
        _ = (_ + _.unlocked / 2) / _;
      return [
        _.isCompleted
          ? {
              center: _,
              className: _,
              title: _.Localize(`#Achievements_Progress_SetCompleteCallout`),
              text: _.Localize(
                `#Achievements_Progress_SetCompleteCountCallout`,
                _,
                _,
              ),
              completed: !0,
              isDlc: !!_.group.dlcappid,
            }
          : {
              center: _,
              className: _(
                _.unlockedClassName,
                _.unlocked == 0 && `j4BO9cYqm-8-`,
              ),
              title: _.group.name ?? ``,
              text: _.Localize(
                `#Achievements_Progress_SetUnlockedCountCallout`,
                _,
                _,
              ),
              completed: !1,
              isDlc: !!_.group.dlcappid,
            },
      ];
    }, [_, _, _, _]),
    _ = [..._.map((_) => _.unlocked), _].map((_) => `${_}fr`).join(` `);
  return (0, _.jsxs)(_, {
    position: _.length ? `relative` : void 0,
    className: _,
    children: [
      _.length > 0 &&
        (0, _.jsx)(_, {
          labels: _,
        }),
      (0, _.jsxs)(_, {
        columns: _,
        background: `dull-1`,
        height: `10px`,
        radius: `lg`,
        overflow: `hidden`,
        children: [
          _.map((_) =>
            (0, _.jsx)(
              _,
              {
                className: _(_),
              },
              _.group._,
            ),
          ),
          (0, _.jsx)(_, {}),
        ],
      }),
    ],
  });
}
function _(_) {
  let { labels: _ } = _,
    _ = (0, _.useRef)([]),
    [_, _] = (0, _.useState)([]);
  return (
    (0, _.useLayoutEffect)(() => {
      let _ =
          _.current[0]?.parentElement?.getBoundingClientRect() ?? new DOMRect(),
        _ = _.map((_, _) => _.current[_]?.offsetWidth ?? 0),
        _ = {
          min: -_.left,
          max: document.documentElement.clientWidth - _.left,
        };
      _(
        _(
          _.map((_) => _.center * _.width),
          _,
          4,
          _,
        ),
      );
    }, [_]),
    _.map((_, _) =>
      (0, _.jsx)(
        _,
        {
          ref: (_) => {
            _.current[_] = _;
          },
          left: `${_.center * 100}%`,
          offset: _[_],
          className: _.className,
          children: (0, _.jsxs)(_, {
            gap: `2`,
            direction: `row`,
            align: `center`,
            children: [
              _.completed &&
                (0, _.jsx)(_, {
                  isComplete: !0,
                  isDlc: _.isDlc,
                  size: `2em`,
                }),
              (0, _.jsxs)(_, {
                direction: `column`,
                children: [
                  (0, _.jsx)(_, {
                    color: _.completed ? `dull-1` : void 0,
                    contrast: _.completed ? void 0 : `title`,
                    weight: `heavy`,
                    size: `2`,
                    children: _.title,
                  }),
                  (0, _.jsx)(_, {
                    color: _.completed ? `dull-1` : void 0,
                    contrast: _.completed ? void 0 : `title`,
                    size: `2`,
                    children: _.text,
                  }),
                ],
              }),
            ],
          }),
        },
        _.title,
      ),
    )
  );
}
function _(_) {
  let { left: _, offset: _ = 0, className: _, children: _, ref: _ } = _,
    _ = `calc(50% - ${_}px)`,
    _ = (_) => `clamp(6px, calc(${_} + ${_ * 6}px), calc(100% - 6px))`;
  return (0, _.jsxs)(_, {
    ref: _,
    className: _,
    position: `absolute`,
    zIndex: `1`,
    radius: `sm`,
    paddingX: `3`,
    paddingY: `2`,
    style: {
      left: _,
      bottom: `calc(100% + 6px)`,
      transform: `translateX(calc(-50% + ${_}px))`,
      whiteSpace: `nowrap`,
      pointerEvents: `none`,
    },
    children: [
      _,
      (0, _.jsx)(_, {
        position: `absolute`,
        style: {
          background: `inherit`,
          top: `calc(100% - 2px)`,
          left: `-6px`,
          right: `-6px`,
          height: `8px`,
          clipPath: `polygon(${_(-1)} 0, ${_(1)} 0, ${_} 100%)`,
        },
      }),
    ],
  });
}
function _(_, _, _, _) {
  let _ = _.map(() => 0),
    _ = (_) => _[_] + _[_] - _[_] / 2,
    _ = (_) => _[_] + _[_] + _[_] / 2;
  for (let _ = 1; _ < _.length; _++) {
    let _ = _(_ - 1) + _ - _(_);
    _ > 0 && ((_[_ - 1] -= _ / 2), (_[_] += _ / 2));
  }
  for (let _ = _.length - 1; _ >= 0; _--) {
    let _ = _ == _.length - 1 ? _.max : _(_ + 1) - _;
    _[_] -= Math.max(0, _(_) - _);
  }
  for (let _ = 0; _ < _.length; _++) {
    let _ = _ == 0 ? _.min : _(_ - 1) + _;
    _[_] += Math.max(0, _ - _(_));
  }
  return _;
}
var _ = `UgnsnraQ9xg-`;
function _({ nPercent: _, indeterminate: _, animate: _, className: _ }) {
  return (0, _.jsx)(`div`, {
    className: _(_, _ && `j1AULZk7M7M-`, _ && `yaUfUCP-O9s-`, _),
    style: {
      "--percent": _ / 100,
    },
  });
}
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
