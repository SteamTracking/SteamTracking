/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  Lt as t,
  dt as n,
  ot as r,
  st as i,
  yt as a,
} from "./chunk~01cfc309bf.js";
import { u as o } from "./chunk~e867464c75.js";
import {
  C as s,
  Jy as c,
  P as l,
  Vy as ee,
  cx as u,
  et as d,
  j as f,
  ly as p,
  py as m,
  sb as h,
  tx as g,
  ut as _,
  yx as v,
} from "./main.js";
import {
  _ as y,
  a as b,
  c as x,
  d as te,
  f as S,
  g as ne,
  h as C,
  i as w,
  l as T,
  m as E,
  n as D,
  o as O,
  p as k,
  r as re,
  s as ie,
  t as ae,
  u as oe,
  v as se,
  y as A,
} from "./chunk~ec93a260ba.js";
var j = e(t()),
  M = (e, t) =>
    t === void 0
      ? [`get_family_group_for_user `, e]
      : [`get_family_group_for_user `, e, t],
  N = (e) => [`get_family_group`, e],
  P = (e) => [`get_family_history`, e],
  F = (e) => [`get_users_sharing_device`, e],
  I = (e) => [`recent_playtime_sessions`, e];
function L(e, t, n) {
  return n
    ? [`get_purchase_requests`, e, t, n]
    : t
      ? [`get_purchase_requests`, e, t]
      : [`get_purchase_requests`, e];
}
function R(e, t) {
  if (e != 1) throw e;
}
var z = j.createContext({ staleTimeMs: 1 / 0 });
function B(e) {
  let { staleTimeMs: t, children: n } = e,
    r = j.useMemo(() => ({ staleTimeMs: t ?? 3e3 }), [t]);
  return j.createElement(z.Provider, { value: r }, n);
}
function V(e = !1) {
  return H(m(), e);
}
function H(e, t = !1) {
  let n = p(),
    r = (0, j.useContext)(z).staleTimeMs;
  return i({
    queryKey: M(e, t),
    queryFn: async () => {
      let r = v.Init(ie);
      (r.Body().set_steamid(e), r.Body().set_include_family_group_response(t));
      let i = await A.GetFamilyGroupForUser(n, r);
      return (R(i.GetEResult(), `GetFamilyGroupForUser`), i.Body());
    },
    staleTime: r,
    enabled: !!e,
    placeholderData: e ? void 0 : new x(),
  });
}
function U(e) {
  let t = p(),
    n = (0, j.useContext)(z).staleTimeMs;
  return i({
    queryKey: N(e),
    queryFn: async () => {
      if (e) {
        let n = v.Init(T);
        n.Body().set_family_groupid(e);
        let r = await A.GetFamilyGroup(t, n);
        return (R(r.GetEResult(), `GetFamilyGroup`), r.Body());
      }
      throw 42;
    },
    staleTime: n,
  });
}
function W() {
  let e = p(),
    t = n(),
    i = m();
  return r({
    mutationFn: async (t) => {
      let n = v.Init(w);
      n.Body().set_name(t);
      let r = await A.CreateFamilyGroup(e, n);
      return (R(r.GetEResult(), `CreateFamilyGroup`), r.Body());
    },
    onSuccess: () => {
      t.invalidateQueries({ queryKey: M(i) });
    },
  });
}
function G(e) {
  let t = p(),
    i = n(),
    a = m();
  return r({
    mutationFn: async () => {
      let n = v.Init(b);
      n.Body().set_family_groupid(e);
      let r = await A.DeleteFamilyGroup(t, n);
      return (R(r.GetEResult(), `DeleteFamilyGroup`), r.Body());
    },
    onSuccess: () => {
      (i.invalidateQueries({ queryKey: M(a) }),
        i.invalidateQueries({ queryKey: N(e) }),
        i.invalidateQueries({ queryKey: P(e) }));
    },
  });
}
function K(e) {
  let t = p(),
    i = n();
  return r({
    mutationFn: async (n) => {
      let r = v.Init(C);
      (r.Body().set_family_groupid(e), r.Body().set_name(n));
      let i = await A.ModifyFamilyGroupDetails(t, r);
      return (R(i.GetEResult(), `ModifyFamilyGroupDetails`), i.Body());
    },
    onSuccess: () => {
      (i.invalidateQueries({ queryKey: N(e) }),
        i.invalidateQueries({ queryKey: P(e) }));
    },
  });
}
function ce(e, t, i) {
  let a = p(),
    o = n();
  return r({
    mutationFn: async () => {
      let n = v.Init(k);
      (n.Body().set_family_groupid(e),
        n.Body().set_receiver_steamid(t),
        n.Body().set_receiver_role(i));
      let r = await A.InviteToFamilyGroup(a, n);
      return (R(r.GetEResult(), `InviteToFamilyGroup`), r.Body());
    },
    onSuccess: () => {
      (o.invalidateQueries({ queryKey: M(t) }),
        o.invalidateQueries({ queryKey: N(e) }),
        o.invalidateQueries({ queryKey: P(e) }));
    },
  });
}
function le(e) {
  let t = p(),
    i = m(),
    a = n();
  return r({
    mutationFn: async () => {
      let n = v.Init(E);
      n.Body().set_family_groupid(e);
      let r = await A.JoinFamilyGroup(t, n);
      return (R(r.GetEResult(), `JoinFamilyGroup`), r.Body());
    },
    onSuccess: () => {
      (a.invalidateQueries({ queryKey: M(i) }),
        a.invalidateQueries({ queryKey: N(e) }),
        a.invalidateQueries({ queryKey: P(e) }));
    },
  });
}
function ue(e, t) {
  let i = p(),
    a = n();
  return r({
    mutationFn: async () => {
      let n = v.Init(ae);
      (n.Body().set_family_groupid(e), n.Body().set_steamid_to_cancel(t));
      let r = await A.CancelFamilyGroupInvite(i, n);
      return (R(r.GetEResult(), `CancelFamilyGroupInvite`), r.Body());
    },
    onSuccess: () => {
      (a.invalidateQueries({ queryKey: M(t) }),
        a.invalidateQueries({ queryKey: N(e) }),
        a.invalidateQueries({ queryKey: P(e) }));
    },
  });
}
function q(e, t) {
  let i = p(),
    a = n();
  return r({
    mutationFn: async () => {
      let n = v.Init(ne);
      (n.Body().set_family_groupid(e), n.Body().set_steamid_to_remove(t));
      let r = await A.RemoveFromFamilyGroup(i, n);
      return (R(r.GetEResult(), `RemoveFromFamilyGroup`), r.Body());
    },
    onSuccess: () => {
      (a.invalidateQueries({ queryKey: M(t) }),
        a.invalidateQueries({ queryKey: N(e) }),
        a.invalidateQueries({ queryKey: P(e) }));
    },
  });
}
function de(e) {
  let t = p();
  return i({
    queryKey: F(e),
    queryFn: async () => {
      let n = g(`clientsessionid`),
        r = n && BigInt(`0x` + n).toString(),
        i = v.Init(S);
      (i.Body().set_family_groupid(e),
        i.Body().set_client_instance_id(r ?? void 0));
      let a = await A.GetUsersSharingDevice(t, i);
      return (R(a.GetEResult(), `GetUsersSharingDevice`), a.Body());
    },
  });
}
function fe(e) {
  let t = m();
  return U(e)
    .data?.members()
    .find((e) => e.steamid() == t)
    ?.role();
}
function pe(e, t) {
  let n = p(),
    r = m();
  return i({
    queryKey: L(e, r),
    queryFn: async () => {
      let r = v.Init(oe);
      (r.Body().set_family_groupid(e),
        t !== void 0 && r.Body().set_rt_include_completed_since(t));
      let i = await A.GetPurchaseRequests(n, r);
      return (R(i.GetEResult(), `GetPurchaseRequests`), i.Body());
    },
  });
}
function me(e, t, i) {
  let a = p(),
    o = n();
  return r({
    mutationFn: async () => {
      let n = v.Init(y);
      (n.Body().set_family_groupid(e),
        n.Body().set_request_id(t),
        n.Body().set_action(i));
      let r = await A.RespondToRequestedPurchase(a, n);
      return (R(r.GetEResult(), `RespondToRequestedPurchase`), r.Body());
    },
    onSuccess: () => {
      (o.invalidateQueries({ queryKey: L(e) }),
        o.invalidateQueries({ queryKey: P(e) }));
    },
  });
}
var J = (0, j.createContext)({
  errorMessage: null,
  setErrorMessage: (e) => {},
});
function he(e, t) {
  return e;
}
var ge = (function (e) {
    return (
      (e[(e.k_EFamilyQueryNone = 0)] = `k_EFamilyQueryNone`),
      (e[(e.k_EFamilyQueryLoadFamily = 1)] = `k_EFamilyQueryLoadFamily`),
      (e[(e.k_EFamilyQueryJoinFamily = 2)] = `k_EFamilyQueryJoinFamily`),
      (e[(e.k_EFamilyQueryDeclineInvite = 3)] = `k_EFamilyQueryDeclineInvite`),
      (e[(e.k_EFamilyQueryInviteToFamily = 4)] =
        `k_EFamilyQueryInviteToFamily`),
      (e[(e.k_EFamilyQueryCreateFamily = 5)] = `k_EFamilyQueryCreateFamily`),
      (e[(e.k_EFamilyQueryDeleteFamily = 6)] = `k_EFamilyQueryDeleteFamily`),
      (e[(e.k_EFamilyQueryModifyFamily = 7)] = `k_EFamilyQueryModifyFamily`),
      (e[(e.k_EFamilyQueryRemoveFromFamily = 8)] =
        `k_EFamilyQueryRemoveFromFamily`),
      (e[(e.k_EFamilyQueryGetUsersSharingDevice = 9)] =
        `k_EFamilyQueryGetUsersSharingDevice`),
      (e[(e.k_EFamilyQueryPurchaseRequest = 10)] =
        `k_EFamilyQueryPurchaseRequest`),
      (e[(e.k_EFamilyQueryGetPurchaseRequests = 11)] =
        `k_EFamilyQueryGetPurchaseRequests`),
      (e[(e.k_EFamilyQueryDeclinePurchaseRequest = 12)] =
        `k_EFamilyQueryDeclinePurchaseRequest`),
      (e[(e.k_EFamilyQueryLoadHistory = 13)] = `k_EFamilyQueryLoadHistory`),
      (e[(e.k_EFamilyQueryLoadCart = 14)] = `k_EFamilyQueryLoadCart`),
      (e[(e.k_EFamilyQuerySetCooldownOverrides = 15)] =
        `k_EFamilyQuerySetCooldownOverrides`),
      (e[(e.k_EFamilyQueryResendInvite = 16)] = `k_EFamilyQueryResendInvite`),
      e
    );
  })({}),
  Y = {
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
    84: { 5: `#FamilyManagement_RateLimitExceeded_CreateFamily` },
    83: {
      5: `#FamilyManagement_RegionLocked_CreateFamily`,
      2: `#FamilyManagement_RegionLocked_JoinFamily`,
    },
    31: { 2: `#FamilyManagement_Household_JoinFamily` },
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
    40: { 4: `#FamilyManagement_ErrorFailed_NoAdditionalDetails` },
  };
function _e(e, t, n, r) {
  let i = ``;
  if (e in Y) {
    let t = Y[e];
    if (typeof t == `string`) i = c(t, ...r);
    else {
      let e = t;
      n in e && (i = c(e[n], ...r));
    }
  }
  return he(c(t, i), e);
}
function X() {
  let { setErrorMessage: e } = (0, j.useContext)(J);
  return { setErrorMessage: e };
}
function ve(e, t, n) {
  let { setErrorMessage: r } = X(),
    { isError: i, error: a } = e,
    o = V();
  (0, j.useEffect)(() => {
    if (i) {
      let e = a,
        i = [];
      if (e === 25 || e === 96) {
        let e;
        (o.isSuccess && o.data && (e = o.data.cooldown_seconds_remaining()),
          i.push(ye(e)));
      }
      r(_e(e, t, n, i));
    }
  }, [r, i, a, t, n, o.isSuccess, o.data]);
}
function ye(e) {
  return e
    ? h(Date.now() / 1e3 + e, {
        month: `long`,
        day: `numeric`,
        year: `numeric`,
        weekday: void 0,
      })
    : c(`#FamilyManagement_LoadingPlaceholder`);
}
function be(e, t) {
  let { setErrorMessage: n } = X();
  (0, j.useEffect)(() => {
    e.isError && n(c(t));
  }, [n, e.isError, t]);
}
function xe(e) {
  let t = p();
  return i({
    queryKey: P(e),
    queryFn: async () => {
      let n = v.Init(O);
      n.Body().set_family_groupid(e);
      let r = await A.GetChangeLog(t, n);
      return (R(r.GetEResult(), `GetFamilyGroupChangeLog`), r.Body().changes());
    },
    staleTime: 0,
  });
}
function Se(e, t) {
  return `${u.STORE_BASE_URL}cart/purchaserequest/${e}/${t}`;
}
function Z(e, t, n, r) {
  return [
    `get_shared_library_apps`,
    e,
    t?.bIncludeOwn,
    t?.bIncludeExcluded,
    t?.bIncludeNonGames,
    t?.for_account_id,
    n,
    r,
  ];
}
function Ce(e, t) {
  let n = m(),
    { settings: r, mapAppsAllowed: o } = l(n).data,
    c = f(),
    d = p(),
    {
      bIncludeOwn: h,
      bIncludeExcluded: g,
      bIncludeNonGames: _,
      for_account_id: y,
    } = t ?? {},
    b = t?.enabled === void 0 || t.enabled,
    x = Z(e, t, r, c),
    S = (e) => !s(e.appid(), c, r, o);
  return i({
    queryKey: x,
    queryFn: async () => {
      let t = v.Init(te);
      if (
        (t.Body().set_family_groupid(e),
        t.Body().set_include_own(h),
        t.Body().set_include_excluded(g),
        t.Body().set_language(u.LANGUAGE),
        t.Body().set_include_non_games(_),
        y)
      ) {
        let e = ee.InitFromAccountID(y, u.EUNIVERSE);
        t.Body().set_steamid(e.ConvertTo64BitString());
      }
      let n = await A.GetSharedLibraryApps(d, t);
      return (
        R(n.GetEResult(), `GetSharedLibraryApps`),
        n
          .Body()
          .apps()
          .filter(S)
          .map((e) => e.toObject())
      );
    },
    enabled: !!r && b,
    placeholderData: a,
    select: t?.select,
  });
}
function we(e, t) {
  let r = n(),
    i = m(),
    { settings: a } = l(i).data ?? {},
    o = Z(e, t, a, f());
  return (0, j.useCallback)(() => {
    r.invalidateQueries({ queryKey: o });
  }, [r, o]);
}
function Q(e, t) {
  let n = e.sort_as || e.name,
    r = t.sort_as || t.name;
  return o(n, r);
}
function $(e, t) {
  return t.rt_time_acquired - e.rt_time_acquired || Q(e, t);
}
function Te(e, t, n) {
  if (!e && t.length === 0) return !0;
  let r = n.name?.toLocaleLowerCase(),
    i = e.toLocaleLowerCase(),
    a = r?.includes(i) || n.appid?.toString() == i,
    o = !0;
  if (n.content_descriptors) {
    for (let e of t)
      if (!n.content_descriptors.includes(e)) {
        o = !1;
        break;
      }
  }
  return a && o;
}
function Ee(e, t, n, r = []) {
  let i = (0, j.useMemo)(() => e?.filter((e) => Te(n, r, e)) || [], [e, n, r]),
    a = (0, j.useCallback)(
      (e, n) => {
        let r = Q;
        switch (t) {
          case `alpha-asc`:
            r = Q;
            break;
          case `alpha-desc`:
            r = (e, t) => Q(t, e);
            break;
          case `date_acquired-asc`:
            r = (e, t) => $(t, e);
            break;
          case `date_acquired-desc`:
            r = $;
        }
        return r(e, n);
      },
      [t],
    );
  return (0, j.useMemo)(() => i.slice().sort(a), [i, a]);
}
function De(e, t) {
  let i = p(),
    a = n(),
    o = m();
  return r({
    mutationFn: async (n) => {
      let r = v.Init(re);
      (r.Body().set_family_groupid(e),
        r.Body().set_invite_id(t),
        r.Body().set_nonce(n));
      let a = await A.ConfirmJoinFamilyGroup(i, r);
      return (R(a.GetEResult(), `ConfirmJoinFamilyGroup`), a.Body());
    },
    onSuccess: () => {
      (a.invalidateQueries({ queryKey: M(o) }),
        a.invalidateQueries({ queryKey: N(e) }),
        a.invalidateQueries({ queryKey: P(e) }));
    },
  });
}
function Oe(e, t, i) {
  let a = p(),
    o = n();
  return r({
    mutationFn: async () => {
      let n = v.Init(D);
      (n.Body().set_family_groupid(e),
        n.Body().set_invite_id(t),
        n.Body().set_nonce(i));
      let r = await A.ConfirmInviteToFamilyGroup(a, n);
      return (R(r.GetEResult(), `ConfirmInviteToFamilyGroup`), r.Body());
    },
    onSuccess: () => {
      (o.invalidateQueries({ queryKey: N(e) }),
        o.invalidateQueries({ queryKey: P(e) }));
    },
  });
}
function ke(e) {
  let t = [];
  e.sort((e, t) => e.time_start - t.time_start);
  let n = new Map();
  for (let r of e) {
    let e = n.get(r.appid);
    e === void 0
      ? n.set(r.appid, r)
      : r.time_start <= e.time_end
        ? (e.time_end = Math.max(e.time_end, r.time_end))
        : (t.push(e), n.set(r.appid, r));
  }
  for (let e of n.values()) t.push(e);
  return (t.sort((e, t) => e.time_start - t.time_start), t);
}
function Ae(e) {
  let t = p();
  return i({
    queryKey: I(e),
    queryFn: async () => {
      let n = v.Init(d);
      n.Body().set_steamid(e);
      let r = await _.GetRecentPlaytimeSessionsForChild(t, n);
      return (
        R(r.GetEResult(), `GetRecentPlaytimeSessionsForChild`),
        ke(r.Body().toObject().sessions || [])
      );
    },
  });
}
function je(e) {
  let t = p(),
    i = m(),
    a = n();
  return r({
    mutationFn: async () => {
      let n = v.Init(se);
      n.Body().set_family_groupid(e);
      let r = await A.UndeleteFamilyGroup(t, n);
      return (R(r.GetEResult(), `UndeleteFamilyGroup`), r);
    },
    onSuccess: () => {
      (a.invalidateQueries({ queryKey: M(i) }),
        a.invalidateQueries({ queryKey: N(e) }),
        a.invalidateQueries({ queryKey: P(e) }));
    },
  });
}
function Me(e, t) {
  return e.members().find((e) => e.steamid() == t);
}
export {
  me as C,
  Ee as D,
  Ce as E,
  je as O,
  q as S,
  X as T,
  K as _,
  Se as a,
  be as b,
  Oe as c,
  G as d,
  U as f,
  ce as g,
  we as h,
  Me as i,
  de as k,
  De as l,
  xe as m,
  J as n,
  le as o,
  V as p,
  B as r,
  ue as s,
  ge as t,
  W as u,
  pe as v,
  fe as w,
  Ae as x,
  ve as y,
};
