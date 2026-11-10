/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, dt as n, ot as r, st as i } from "./libraries.js";
import { r as a } from "./steammessages_quest_pb.js";
import { r as o } from "./steammessages_salerewards_pb.js";
import {
  Ey as s,
  Oy as c,
  Ub as l,
  Xb as u,
  ay as d,
  hu as f,
  ky as p,
} from "./main.js";
var m = e(t(), 1),
  h = { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 };
async function g(e, t) {
  let n = await o.CanClaimItem(e, { language: t });
  if (n.GetEResult() != 1)
    throw Error(`SaleItemRewards.CanClaimItem answered ` + n.GetEResult());
  let r = n.Body().toObject(),
    i = r.reward_item?.defid ? r.reward_item : void 0;
  return {
    bCanClaimNewItem: !!r.can_claim,
    bAlreadyClaimedCurrentItem: !!i,
    appid: i?.appid,
    community_item_type: i?.community_item_type,
    community_item_class: i?.community_item_class,
    rtNextClaimTime: (r.next_claim_time ?? 0) > 0 ? r.next_claim_time : void 0,
  };
}
async function _(e, t) {
  let n = await o.ClaimItem(e, { language: t });
  if (n.GetEResult() == 29) return g(e, t);
  if (n.GetEResult() != 1)
    throw Error(`SaleItemRewards.ClaimItem answered ` + n.GetEResult());
  let r = n.Body().toObject().reward_item;
  return {
    bCanClaimNewItem: !1,
    bAlreadyClaimedCurrentItem: !0,
    appid: r?.appid,
    community_item_type: r?.community_item_type,
    community_item_class: r?.community_item_class,
    rtNextClaimTime:
      (n.Body().next_claim_time() ?? 0) > 0
        ? n.Body().next_claim_time()
        : void 0,
  };
}
async function v(e, t) {
  let n = await a.ActivateProfileModifierItem(e, {
    communityitemid: t.communityitemid,
    appid: t.appid,
    activate: !0,
  });
  if (n.GetEResult() != 1)
    throw Error(`Quest.ActivateProfileModifierItem answered ` + n.GetEResult());
  return n.GetEResult();
}
async function y(e, t, n, r) {
  return (
    await o.GetCurrentDefinition(e, {
      sale_def_type: t,
      language: n,
      include_community_item_def: r,
    })
  )
    .Body()
    .toObject();
}
async function b(e, t, n, r) {
  return (
    await o.GetClaimedSaleRewards(e, {
      sale_def_type: t,
      language: n,
      include_community_item_def: r,
    })
  )
    .Body()
    .toObject();
}
var x;
function S() {
  let e = f();
  if (e) return e.GetServiceTransport();
  if (!x) {
    let e = u(`loyalty_webapi_token`, `application_config`);
    x = s(e ? new p(l.WEBAPI_BASE_URL, e) : c());
  }
  return x.GetServiceTransport();
}
async function C(e) {
  return g(S(), e);
}
async function w(e) {
  return _(S(), e);
}
async function T(e) {
  return v(S(), e);
}
var E = 3e5,
  D = !1,
  O = null,
  k = { appid: 2243810, community_item_type: 2, community_item_class: 11 };
function A(e) {
  return [`SaleItemCanClaim`, e];
}
function j(e) {
  return {
    queryKey: A(e),
    queryFn: () => C(e),
    enabled: !D,
    staleTime: 1 / 0,
    retry: !1,
  };
}
function M() {
  let e = l.LANGUAGE,
    t = n(),
    { data: r, isLoading: a } = i(j(e)),
    o = r?.rtNextClaimTime;
  return (
    (0, m.useEffect)(() => {
      let n = 0;
      if (o) {
        let r = () => {
          let i = o * 1e3 - Date.now();
          i <= 0
            ? t.invalidateQueries({ queryKey: A(e) })
            : (n = window.setTimeout(r, i > E ? i / 2 : i));
        };
        r();
      }
      return () => window.clearTimeout(n);
    }, [o, e, t]),
    { ...(r ?? h), bLoading: a }
  );
}
function N() {
  let e = n(),
    { mutateAsync: t } = r({
      mutationFn: () => {
        if (O) {
          let e = O;
          return ((O = null), Promise.resolve(e));
        }
        return D
          ? Promise.resolve(e.getQueryData(A(l.LANGUAGE)) ?? h)
          : w(l.LANGUAGE);
      },
      onSuccess: (t) => e.setQueryData(A(l.LANGUAGE), t),
    });
  return { fnClaimItem: (0, m.useCallback)(() => t(), [t]) };
}
function P() {
  return r({ mutationFn: (e) => T(e) });
}
function F() {
  let e = n();
  return {
    fnSetClaimState: (0, m.useCallback)(
      (t) => {
        ((D = !0),
          (O = t.bCanClaimNewItem
            ? {
                bAlreadyClaimedCurrentItem: !0,
                bCanClaimNewItem: !1,
                rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                ...k,
              }
            : null),
          e.setQueryData(A(l.LANGUAGE), t));
      },
      [e],
    ),
  };
}
function I(e, t, n) {
  return [`SaleRewardsGetDefinition`, e, t, n];
}
function L(e, t, n, r) {
  return {
    queryKey: I(t, n, r),
    queryFn: () => y(e, t, n, r),
    staleTime: 1 / 0,
  };
}
function R(e, t, n) {
  let r = d();
  return i(L(r, e, t, n));
}
function z(e, t, n, r) {
  return [`GetClaimedSaleRewards`, e, t, !!n, r];
}
function B(e, t, n, r, i) {
  return {
    queryKey: z(t, n, r, i),
    queryFn: () => b(e, t, n, r),
    staleTime: 1 / 0,
  };
}
function V(e, t, n, r) {
  let a = d();
  return i(B(a, e, t, n, r));
}
export { M as a, N as i, V as n, F as o, R as r, P as t };
