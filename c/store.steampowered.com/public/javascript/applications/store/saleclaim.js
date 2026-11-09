import { _ } from "./rolldown-runtime.js";
import { _, _, _, _ } from "./libraries.js";
import { _ } from "./steammessages_quest_pb.js";
import { _ } from "./steammessages_salerewards_pb.js";
import { _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_(), 1),
  _ = {
    bCanClaimNewItem: !1,
    bAlreadyClaimedCurrentItem: !1,
  };
async function _(_, _) {
  let _ = await _.CanClaimItem(_, {
    language: _,
  });
  if (_.GetEResult() != 1)
    throw Error(`SaleItemRewards.CanClaimItem answered ` + _.GetEResult());
  let _ = _.Body().toObject(),
    _ = _.reward_item?.defid ? _.reward_item : void 0;
  return {
    bCanClaimNewItem: !!_.can_claim,
    bAlreadyClaimedCurrentItem: !!_,
    appid: _?.appid,
    community_item_type: _?.community_item_type,
    community_item_class: _?.community_item_class,
    rtNextClaimTime: (_.next_claim_time ?? 0) > 0 ? _.next_claim_time : void 0,
  };
}
async function _(_, _) {
  let _ = await _.ClaimItem(_, {
    language: _,
  });
  if (_.GetEResult() == 29) return _(_, _);
  if (_.GetEResult() != 1)
    throw Error(`SaleItemRewards.ClaimItem answered ` + _.GetEResult());
  let _ = _.Body().toObject().reward_item;
  return {
    bCanClaimNewItem: !1,
    bAlreadyClaimedCurrentItem: !0,
    appid: _?.appid,
    community_item_type: _?.community_item_type,
    community_item_class: _?.community_item_class,
    rtNextClaimTime:
      (_.Body().next_claim_time() ?? 0) > 0
        ? _.Body().next_claim_time()
        : void 0,
  };
}
async function _(_, _) {
  let _ = await _.ActivateProfileModifierItem(_, {
    communityitemid: _.communityitemid,
    appid: _.appid,
    activate: !0,
  });
  if (_.GetEResult() != 1)
    throw Error(`Quest.ActivateProfileModifierItem answered ` + _.GetEResult());
  return _.GetEResult();
}
async function _(_, _, _, _) {
  return (
    await _.GetCurrentDefinition(_, {
      sale_def_type: _,
      language: _,
      include_community_item_def: _,
    })
  )
    .Body()
    .toObject();
}
async function _(_, _, _, _) {
  return (
    await _.GetClaimedSaleRewards(_, {
      sale_def_type: _,
      language: _,
      include_community_item_def: _,
    })
  )
    .Body()
    .toObject();
}
var _;
function _() {
  let _ = _();
  if (_) return _.GetServiceTransport();
  if (!_) {
    let _ = _(`loyalty_webapi_token`, `application_config`);
    _ = _(_ ? new _(_.WEBAPI_BASE_URL, _) : _());
  }
  return _.GetServiceTransport();
}
async function _(_) {
  return _(_(), _);
}
async function _(_) {
  return _(_(), _);
}
async function _(_) {
  return _(_(), _);
}
var _ = 3e5,
  _ = !1,
  _ = null,
  _ = {
    appid: 2243810,
    community_item_type: 2,
    community_item_class: 11,
  };
function _(_) {
  return [`SaleItemCanClaim`, _];
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: () => _(_),
    enabled: !_,
    staleTime: 1 / 0,
    retry: !1,
  };
}
function _() {
  let _ = _.LANGUAGE,
    _ = _(),
    { data: _, isLoading: _ } = _(_(_)),
    _ = _?.rtNextClaimTime;
  return (
    (0, _.useEffect)(() => {
      let _ = 0;
      if (_) {
        let _ = () => {
          let _ = _ * 1e3 - Date.now();
          _ <= 0
            ? _.invalidateQueries({
                queryKey: _(_),
              })
            : (_ = window.setTimeout(_, _ > _ ? _ / 2 : _));
        };
        _();
      }
      return () => window.clearTimeout(_);
    }, [_, _, _]),
    {
      ...(_ ?? _),
      bLoading: _,
    }
  );
}
function _() {
  let _ = _(),
    { mutateAsync: _ } = _({
      mutationFn: () => {
        if (_) {
          let _ = _;
          return ((_ = null), Promise.resolve(_));
        }
        return _
          ? Promise.resolve(_.getQueryData(_(_.LANGUAGE)) ?? _)
          : _(_.LANGUAGE);
      },
      onSuccess: (_) => _.setQueryData(_(_.LANGUAGE), _),
    });
  return {
    fnClaimItem: (0, _.useCallback)(() => _(), [_]),
  };
}
function _() {
  return _({
    mutationFn: (_) => _(_),
  });
}
function _() {
  let _ = _();
  return {
    fnSetClaimState: (0, _.useCallback)(
      (_) => {
        ((_ = !0),
          (_ = _.bCanClaimNewItem
            ? {
                bAlreadyClaimedCurrentItem: !0,
                bCanClaimNewItem: !1,
                rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                ..._,
              }
            : null),
          _.setQueryData(_(_.LANGUAGE), _));
      },
      [_],
    ),
  };
}
function _(_, _, _) {
  return [`SaleRewardsGetDefinition`, _, _, _];
}
function _(_, _, _, _) {
  return {
    queryKey: _(_, _, _),
    queryFn: () => _(_, _, _, _),
    staleTime: 1 / 0,
  };
}
function _(_, _, _) {
  let _ = _();
  return _(_(_, _, _, _));
}
function _(_, _, _, _) {
  return [`GetClaimedSaleRewards`, _, _, !!_, _];
}
function _(_, _, _, _, _) {
  return {
    queryKey: _(_, _, _, _),
    queryFn: () => _(_, _, _, _),
    staleTime: 1 / 0,
  };
}
function _(_, _, _, _) {
  let _ = _();
  return _(_(_, _, _, _, _));
}
