import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _ } from "./libraries.js";
import { _ } from "./stringutils.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./steammessages_familygroups_pb.js";
var _ = _(_()),
  _ = (_, _) =>
    _ === void 0
      ? [`get_family_group_for_user `, _]
      : [`get_family_group_for_user `, _, _],
  _ = (_) => [`get_family_group`, _],
  _ = (_) => [`get_family_history`, _],
  _ = (_) => [`get_users_sharing_device`, _],
  _ = (_) => [`recent_playtime_sessions`, _];
function _(_, _, _) {
  return _
    ? [`get_purchase_requests`, _, _, _]
    : _
      ? [`get_purchase_requests`, _, _]
      : [`get_purchase_requests`, _];
}
function _(_, _) {
  if (_ != 1) throw _;
}
var _ = _.createContext({
  staleTimeMs: 1 / 0,
});
function _(_) {
  let { staleTimeMs: _, children: _ } = _,
    _ = _.useMemo(
      () => ({
        staleTimeMs: _ ?? 3e3,
      }),
      [_],
    );
  return _.createElement(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
function _(_ = !1) {
  return _(_(), _);
}
function _(_, _ = !1) {
  let _ = _(),
    _ = (0, _.useContext)(_).staleTimeMs;
  return _({
    queryKey: _(_, _),
    queryFn: async () => {
      let _ = _.Init(_);
      (_.Body().set_steamid(_), _.Body().set_include_family_group_response(_));
      let _ = await _.GetFamilyGroupForUser(_, _);
      return (_(_.GetEResult(), `GetFamilyGroupForUser`), _.Body());
    },
    staleTime: _,
    enabled: !!_,
    placeholderData: _ ? void 0 : new _(),
  });
}
function _(_) {
  let _ = _(),
    _ = (0, _.useContext)(_).staleTimeMs;
  return _({
    queryKey: _(_),
    queryFn: async () => {
      if (_) {
        let _ = _.Init(_);
        _.Body().set_family_groupid(_);
        let _ = await _.GetFamilyGroup(_, _);
        return (_(_.GetEResult(), `GetFamilyGroup`), _.Body());
      }
      throw 42;
    },
    staleTime: _,
  });
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      _.Body().set_name(_);
      let _ = await _.CreateFamilyGroup(_, _);
      return (_(_.GetEResult(), `CreateFamilyGroup`), _.Body());
    },
    onSuccess: () => {
      _.invalidateQueries({
        queryKey: _(_),
      });
    },
  });
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _();
  return _({
    mutationFn: async () => {
      let _ = _.Init(_);
      _.Body().set_family_groupid(_);
      let _ = await _.DeleteFamilyGroup(_, _);
      return (_(_.GetEResult(), `DeleteFamilyGroup`), _.Body());
    },
    onSuccess: () => {
      (_.invalidateQueries({
        queryKey: _(_),
      }),
        _.invalidateQueries({
          queryKey: _(_),
        }),
        _.invalidateQueries({
          queryKey: _(_),
        }));
    },
  });
}
function _(_) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      (_.Body().set_family_groupid(_), _.Body().set_name(_));
      let _ = await _.ModifyFamilyGroupDetails(_, _);
      return (_(_.GetEResult(), `ModifyFamilyGroupDetails`), _.Body());
    },
    onSuccess: () => {
      (_.invalidateQueries({
        queryKey: _(_),
      }),
        _.invalidateQueries({
          queryKey: _(_),
        }));
    },
  });
}
function _(_, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async () => {
      let _ = _.Init(_);
      (_.Body().set_family_groupid(_),
        _.Body().set_receiver_steamid(_),
        _.Body().set_receiver_role(_));
      let _ = await _.InviteToFamilyGroup(_, _);
      return (_(_.GetEResult(), `InviteToFamilyGroup`), _.Body());
    },
    onSuccess: () => {
      (_.invalidateQueries({
        queryKey: _(_),
      }),
        _.invalidateQueries({
          queryKey: _(_),
        }),
        _.invalidateQueries({
          queryKey: _(_),
        }));
    },
  });
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _();
  return _({
    mutationFn: async () => {
      let _ = _.Init(_);
      _.Body().set_family_groupid(_);
      let _ = await _.JoinFamilyGroup(_, _);
      return (_(_.GetEResult(), `JoinFamilyGroup`), _.Body());
    },
    onSuccess: () => {
      (_.invalidateQueries({
        queryKey: _(_),
      }),
        _.invalidateQueries({
          queryKey: _(_),
        }),
        _.invalidateQueries({
          queryKey: _(_),
        }));
    },
  });
}
function _(_, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async () => {
      let _ = _.Init(_);
      (_.Body().set_family_groupid(_), _.Body().set_steamid_to_cancel(_));
      let _ = await _.CancelFamilyGroupInvite(_, _);
      return (_(_.GetEResult(), `CancelFamilyGroupInvite`), _.Body());
    },
    onSuccess: () => {
      (_.invalidateQueries({
        queryKey: _(_),
      }),
        _.invalidateQueries({
          queryKey: _(_),
        }),
        _.invalidateQueries({
          queryKey: _(_),
        }));
    },
  });
}
function _(_, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async () => {
      let _ = _.Init(_);
      (_.Body().set_family_groupid(_), _.Body().set_steamid_to_remove(_));
      let _ = await _.RemoveFromFamilyGroup(_, _);
      return (_(_.GetEResult(), `RemoveFromFamilyGroup`), _.Body());
    },
    onSuccess: () => {
      (_.invalidateQueries({
        queryKey: _(_),
      }),
        _.invalidateQueries({
          queryKey: _(_),
        }),
        _.invalidateQueries({
          queryKey: _(_),
        }));
    },
  });
}
function _(_) {
  let _ = _();
  return _({
    queryKey: _(_),
    queryFn: async () => {
      let _ = _(`clientsessionid`),
        _ = _ && BigInt(`0x` + _).toString(),
        _ = _.Init(_);
      (_.Body().set_family_groupid(_),
        _.Body().set_client_instance_id(_ ?? void 0));
      let _ = await _.GetUsersSharingDevice(_, _);
      return (_(_.GetEResult(), `GetUsersSharingDevice`), _.Body());
    },
  });
}
function _(_) {
  let _ = _();
  return _(_)
    .data?.members()
    .find((_) => _.steamid() == _)
    ?.role();
}
function _(_, _) {
  let _ = _(),
    _ = _();
  return _({
    queryKey: _(_, _),
    queryFn: async () => {
      let _ = _.Init(_);
      (_.Body().set_family_groupid(_),
        _ !== void 0 && _.Body().set_rt_include_completed_since(_));
      let _ = await _.GetPurchaseRequests(_, _);
      return (_(_.GetEResult(), `GetPurchaseRequests`), _.Body());
    },
  });
}
function _(_, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async () => {
      let _ = _.Init(_);
      (_.Body().set_family_groupid(_),
        _.Body().set_request_id(_),
        _.Body().set_action(_));
      let _ = await _.RespondToRequestedPurchase(_, _);
      return (_(_.GetEResult(), `RespondToRequestedPurchase`), _.Body());
    },
    onSuccess: () => {
      (_.invalidateQueries({
        queryKey: _(_),
      }),
        _.invalidateQueries({
          queryKey: _(_),
        }));
    },
  });
}
var _ = (0, _.createContext)({
  errorMessage: null,
  setErrorMessage: (_) => {},
});
function _(_, _) {
  return _;
}
var _ = (function (_) {
    return (
      (_[(_.k_EFamilyQueryNone = 0)] = `k_EFamilyQueryNone`),
      (_[(_.k_EFamilyQueryLoadFamily = 1)] = `k_EFamilyQueryLoadFamily`),
      (_[(_.k_EFamilyQueryJoinFamily = 2)] = `k_EFamilyQueryJoinFamily`),
      (_[(_.k_EFamilyQueryDeclineInvite = 3)] = `k_EFamilyQueryDeclineInvite`),
      (_[(_.k_EFamilyQueryInviteToFamily = 4)] =
        `k_EFamilyQueryInviteToFamily`),
      (_[(_.k_EFamilyQueryCreateFamily = 5)] = `k_EFamilyQueryCreateFamily`),
      (_[(_.k_EFamilyQueryDeleteFamily = 6)] = `k_EFamilyQueryDeleteFamily`),
      (_[(_.k_EFamilyQueryModifyFamily = 7)] = `k_EFamilyQueryModifyFamily`),
      (_[(_.k_EFamilyQueryRemoveFromFamily = 8)] =
        `k_EFamilyQueryRemoveFromFamily`),
      (_[(_.k_EFamilyQueryGetUsersSharingDevice = 9)] =
        `k_EFamilyQueryGetUsersSharingDevice`),
      (_[(_.k_EFamilyQueryPurchaseRequest = 10)] =
        `k_EFamilyQueryPurchaseRequest`),
      (_[(_.k_EFamilyQueryGetPurchaseRequests = 11)] =
        `k_EFamilyQueryGetPurchaseRequests`),
      (_[(_.k_EFamilyQueryDeclinePurchaseRequest = 12)] =
        `k_EFamilyQueryDeclinePurchaseRequest`),
      (_[(_.k_EFamilyQueryLoadHistory = 13)] = `k_EFamilyQueryLoadHistory`),
      (_[(_.k_EFamilyQueryLoadCart = 14)] = `k_EFamilyQueryLoadCart`),
      (_[(_.k_EFamilyQuerySetCooldownOverrides = 15)] =
        `k_EFamilyQuerySetCooldownOverrides`),
      (_[(_.k_EFamilyQueryResendInvite = 16)] = `k_EFamilyQueryResendInvite`),
      _
    );
  })({}),
  _ = {
    8: `#FamilyManagement_ErrorInternalServerError`,
    2: `#FamilyManagement_ErrorInternalServerError`,
    10: `#FamilyManagement_ErrorInternalServerError`,
    37: `#FamilyManagement_ErrorInternalServerError`,
    15: `#FamilyManagement_AccessDenied`,
    42: `#FamilyManagement_ErrorNoMatch`,
    43: `#FamilyManagement_ErrorAccountDisabled`,
    11: `#FamilyManagement_ErrorNoActiveInvite`,
    45: `#FamilyManagement_PartnerAccountCannotJoinAsChild`,
    129: `#FamilyManagement_ErrorFamilySizeLimitExceeded`,
    25: `#FamilyManagement_ErrorLimitExceeded`,
    96: `#FamilyManagement_ErrorAccountActivityLimitExceeded`,
    112: `#FamilyManagement_LimitedAccount_CreateFamily`,
    84: {
      5: `#FamilyManagement_RateLimitExceeded_CreateFamily`,
    },
    83: {
      5: `#FamilyManagement_RegionLocked_CreateFamily`,
      2: `#FamilyManagement_RegionLocked_JoinFamily`,
    },
    31: {
      2: `#FamilyManagement_Household_JoinFamily`,
    },
    95: {
      5: `#FamilyManagement_ErrorAccountLimitExceeded_CreateFamily`,
      2: `#FamilyManagement_ErrorAccountLimitExceeded_JoinFamily`,
      8: `#FamilyManagement_ErrorAccountLimitExceeded_RemoveFromFamily`,
    },
    29: {
      2: `#FamilyManagement_ErrorDuplicateRequest_JoinFamily`,
      4: `#FamilyManagement_ErrorDuplicateRequest_InviteToFamily`,
      8: `#FamilyManagement_ErrorDuplicateRequest_RemoveFromFamily`,
    },
    40: {
      4: `#FamilyManagement_ErrorFailed_NoAdditionalDetails`,
    },
  };
function _(_, _, _, _) {
  let _ = ``;
  if (_ in _) {
    let _ = _[_];
    if (typeof _ == `string`) _ = _(_, ..._);
    else {
      let _ = _;
      _ in _ && (_ = _(_[_], ..._));
    }
  }
  return _(_(_, _), _);
}
function _() {
  let { setErrorMessage: _ } = (0, _.useContext)(_);
  return {
    setErrorMessage: _,
  };
}
function _(_, _, _) {
  let { setErrorMessage: _ } = _(),
    { isError: _, error: _ } = _,
    _ = _();
  (0, _.useEffect)(() => {
    if (_) {
      let _ = _,
        _ = [];
      if (_ === 25 || _ === 96) {
        let _;
        (_.isSuccess && _.data && (_ = _.data.cooldown_seconds_remaining()),
          _.push(_(_)));
      }
      _(_(_, _, _, _));
    }
  }, [_, _, _, _, _, _.isSuccess, _.data]);
}
function _(_) {
  return _
    ? _(Date.now() / 1e3 + _, {
        month: `long`,
        day: `numeric`,
        year: `numeric`,
        weekday: void 0,
      })
    : _(`#FamilyManagement_LoadingPlaceholder`);
}
function _(_, _) {
  let { setErrorMessage: _ } = _();
  (0, _.useEffect)(() => {
    _.isError && _(_(_));
  }, [_, _.isError, _]);
}
function _(_) {
  let _ = _();
  return _({
    queryKey: _(_),
    queryFn: async () => {
      let _ = _.Init(_);
      _.Body().set_family_groupid(_);
      let _ = await _.GetChangeLog(_, _);
      return (_(_.GetEResult(), `GetFamilyGroupChangeLog`), _.Body().changes());
    },
    staleTime: 0,
  });
}
function _(_, _) {
  return `${_.STORE_BASE_URL}cart/purchaserequest/${_}/${_}`;
}
function _(_, _, _, _) {
  return [
    `get_shared_library_apps`,
    _,
    _?.bIncludeOwn,
    _?.bIncludeExcluded,
    _?.bIncludeNonGames,
    _?.for_account_id,
    _,
    _,
  ];
}
function _(_, _) {
  let _ = _(),
    { settings: _, mapAppsAllowed: _ } = _(_).data,
    _ = _(),
    _ = _(),
    {
      bIncludeOwn: _,
      bIncludeExcluded: _,
      bIncludeNonGames: _,
      for_account_id: _,
    } = _ ?? {},
    _ = _?.enabled === void 0 || _.enabled,
    _ = _(_, _, _, _),
    _ = (_) => !_(_.appid(), _, _, _);
  return _({
    queryKey: _,
    queryFn: async () => {
      let _ = _.Init(_);
      if (
        (_.Body().set_family_groupid(_),
        _.Body().set_include_own(_),
        _.Body().set_include_excluded(_),
        _.Body().set_language(_.LANGUAGE),
        _.Body().set_include_non_games(_),
        _)
      ) {
        let _ = _.InitFromAccountID(_, _.EUNIVERSE);
        _.Body().set_steamid(_.ConvertTo64BitString());
      }
      let _ = await _.GetSharedLibraryApps(_, _);
      return (
        _(_.GetEResult(), `GetSharedLibraryApps`),
        _.Body()
          .apps()
          .filter(_)
          .map((_) => _.toObject())
      );
    },
    enabled: !!_ && _,
    placeholderData: _,
    select: _?.select,
  });
}
function _(_, _) {
  let _ = _(),
    _ = _(),
    { settings: _ } = _(_).data ?? {},
    _ = _(_, _, _, _());
  return (0, _.useCallback)(() => {
    _.invalidateQueries({
      queryKey: _,
    });
  }, [_, _]);
}
function _(_, _) {
  let _ = _.sort_as || _.name,
    _ = _.sort_as || _.name;
  return _(_, _);
}
function _(_, _) {
  return _.rt_time_acquired - _.rt_time_acquired || _(_, _);
}
function _(_, _, _) {
  if (!_ && _.length === 0) return !0;
  let _ = _.name?.toLocaleLowerCase(),
    _ = _.toLocaleLowerCase(),
    _ = _?.includes(_) || _.appid?.toString() == _,
    _ = !0;
  if (_.content_descriptors) {
    for (let _ of _)
      if (!_.content_descriptors.includes(_)) {
        _ = !1;
        break;
      }
  }
  return _ && _;
}
function _(_, _, _, _ = []) {
  let _ = (0, _.useMemo)(() => _?.filter((_) => _(_, _, _)) || [], [_, _, _]),
    _ = (0, _.useCallback)(
      (_, _) => {
        let _ = _;
        switch (_) {
          case `alpha-asc`:
            _ = _;
            break;
          case `alpha-desc`:
            _ = (_, _) => _(_, _);
            break;
          case `date_acquired-asc`:
            _ = (_, _) => _(_, _);
            break;
          case `date_acquired-desc`:
            _ = _;
        }
        return _(_, _);
      },
      [_],
    );
  return (0, _.useMemo)(() => _.slice().sort(_), [_, _]);
}
function _(_, _) {
  let _ = _(),
    _ = _(),
    _ = _();
  return _({
    mutationFn: async (_) => {
      let _ = _.Init(_);
      (_.Body().set_family_groupid(_),
        _.Body().set_invite_id(_),
        _.Body().set_nonce(_));
      let _ = await _.ConfirmJoinFamilyGroup(_, _);
      return (_(_.GetEResult(), `ConfirmJoinFamilyGroup`), _.Body());
    },
    onSuccess: () => {
      (_.invalidateQueries({
        queryKey: _(_),
      }),
        _.invalidateQueries({
          queryKey: _(_),
        }),
        _.invalidateQueries({
          queryKey: _(_),
        }));
    },
  });
}
function _(_, _, _) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: async () => {
      let _ = _.Init(_);
      (_.Body().set_family_groupid(_),
        _.Body().set_invite_id(_),
        _.Body().set_nonce(_));
      let _ = await _.ConfirmInviteToFamilyGroup(_, _);
      return (_(_.GetEResult(), `ConfirmInviteToFamilyGroup`), _.Body());
    },
    onSuccess: () => {
      (_.invalidateQueries({
        queryKey: _(_),
      }),
        _.invalidateQueries({
          queryKey: _(_),
        }));
    },
  });
}
function _(_) {
  let _ = [];
  _.sort((_, _) => _.time_start - _.time_start);
  let _ = new Map();
  for (let _ of _) {
    let _ = _.get(_.appid);
    _ === void 0
      ? _.set(_.appid, _)
      : _.time_start <= _.time_end
        ? (_.time_end = Math.max(_.time_end, _.time_end))
        : (_.push(_), _.set(_.appid, _));
  }
  for (let _ of _.values()) _.push(_);
  return (_.sort((_, _) => _.time_start - _.time_start), _);
}
function _(_) {
  let _ = _();
  return _({
    queryKey: _(_),
    queryFn: async () => {
      let _ = _.Init(_);
      _.Body().set_steamid(_);
      let _ = await _.GetRecentPlaytimeSessionsForChild(_, _);
      return (
        _(_.GetEResult(), `GetRecentPlaytimeSessionsForChild`),
        _(_.Body().toObject().sessions || [])
      );
    },
  });
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _();
  return _({
    mutationFn: async () => {
      let _ = _.Init(_);
      _.Body().set_family_groupid(_);
      let _ = await _.UndeleteFamilyGroup(_, _);
      return (_(_.GetEResult(), `UndeleteFamilyGroup`), _);
    },
    onSuccess: () => {
      (_.invalidateQueries({
        queryKey: _(_),
      }),
        _.invalidateQueries({
          queryKey: _(_),
        }),
        _.invalidateQueries({
          queryKey: _(_),
        }));
    },
  });
}
function _(_, _) {
  return _.members().find((_) => _.steamid() == _);
}
