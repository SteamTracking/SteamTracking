/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $t as e,
  A as t,
  Q as n,
  S as r,
  T as i,
  _t as a,
  kt as o,
  nt as s,
  on as c,
  rt as l,
} from "./mobx.esm.js";
import { t as u } from "./src.js";
import { Gi as d, Ki as f, oa as p, pn as m } from "./dialogs.js";
import { h, y as g } from "./storebrowsequerycontext.js";
import {
  B as _,
  F as v,
  G as y,
  I as b,
  L as x,
  Pi as S,
  R as C,
  U as w,
  V as T,
  W as E,
  Wn as D,
  lt as O,
  q as k,
  ut as A,
  z as j,
} from "./saletags.js";
import { r as M } from "./storenaveventcontext.js";
import "./react-router.js";
import { i as N } from "./utils.js";
import { t as P } from "./reactqueryroot.js";
import "./steammessages_clan_pb.js";
import { r as F } from "./appidutils.js";
import { l as I } from "./localization2.js";
import { t as L } from "./debugglobal.js";
import "./steamid.js";
import { o as R } from "./creatorhomestore.js";
import { t as z } from "./loadingspinner.js";
var B = c(o(), 1),
  V = a();
function H(e) {
  let { appid: t, className: n, bTextMode: r } = e,
    i = F(t),
    { data: a } = h(i),
    { data: o } = g(i);
  return (0, V.jsx)(U, {
    appid: t,
    bIsFree: !!a?.is_free,
    bIsComingSoon: !!o?.is_coming_soon,
    bTextMode: r,
    className: n,
  });
}
function U(e) {
  let [n, r] = B.useState(!1),
    i = M(),
    { appid: a, bIsFree: o, bIsComingSoon: s, className: c, bTextMode: u } = e,
    h = F(a),
    { bIsOwned: g } = S(h),
    _ = A(a),
    { mutateAsync: v } = O(a, !_, I(i)),
    { elDialogElement: y, fnShowLogonDialog: b } = k(),
    x = async () => {
      l.logged_in ? n || (r(!0), await v(), r(!1)) : b();
    };
  if (g || (!s && o)) return o ? (0, V.jsx)(W, { possibleDemoAppID: a }) : null;
  let C = null;
  return (
    n && !u
      ? (C = (0, V.jsx)(z, { size: 18 }))
      : _
        ? _ && (C = u ? p(`#OnWishlist`) : (0, V.jsx)(d, {}))
        : (C = u ? p(`#wishlist_add_to_wishlist`) : (0, V.jsx)(f, {})),
    (0, V.jsxs)(V.Fragment, {
      children: [
        (0, V.jsx)(m, {
          toolTipContent: p(`#AddToWishlist_ttip`),
          children: (0, V.jsx)(`div`, {
            className: t(D, c),
            onClick: x,
            children: C,
          }),
        }),
        y,
      ],
    })
  );
}
function W(e) {
  let { possibleDemoAppID: t, className: n } = e,
    r = F(t),
    { data: i } = h(r);
  return i && (i.type == 1 || i.type == 12) && i.related_items?.parent_appid
    ? (0, V.jsx)(G, {
        parentAppID: i.related_items?.parent_appid,
        className: n,
      })
    : null;
}
function G(e) {
  let { parentAppID: t, className: n } = e,
    r = F(t),
    { data: i } = h(r),
    { data: a } = g(r);
  return !i || !a
    ? null
    : (0, V.jsx)(U, {
        appid: t,
        bIsComingSoon: !!a.is_coming_soon,
        bIsFree: !!i.is_free,
        className: n,
      });
}
var K = new WeakSet();
function q(e = P) {
  if (typeof window > `u` || typeof document > `u` || K.has(e)) return;
  let t = n(`groupvanityinfo`, `application_config`);
  (t !== void 0 || document.readyState == `complete`) &&
    (K.add(e), J(t) && w(e, t));
}
function J(e) {
  let t = e;
  return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
    ? typeof t[0].clanAccountID == `number` &&
        (typeof t[0].appid == `number` || typeof t[0].vanity_url == `string`)
    : !1;
}
function Y(e) {
  return typeof e == `string` ? parseInt(e) : e;
}
function X(e) {
  return typeof e == `string` ? Number.parseInt(e) : e;
}
var Z = new (class {
  m_queryClient = P;
  m_boxCacheVersion = r.box(0);
  m_bWatchingCache = !1;
  m_bBumpScheduled = !1;
  Init() {
    this.LazyInit();
  }
  LazyInit() {
    (q(this.m_queryClient),
      this.m_bWatchingCache ||
        ((this.m_bWatchingCache = !0),
        this.m_queryClient.getQueryCache().subscribe((e) => {
          (e?.type == `added` ||
            e?.type == `updated` ||
            e?.type == `removed`) &&
            v(e.query?.queryKey) &&
            this.ScheduleCacheVersionBump();
        })));
  }
  ScheduleCacheVersionBump() {
    this.m_bBumpScheduled ||
      ((this.m_bBumpScheduled = !0),
      queueMicrotask(() => {
        ((this.m_bBumpScheduled = !1),
          i(() =>
            this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1),
          ));
      }));
  }
  ReadCache() {
    return (this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient);
  }
  AddGroupVanities(e) {
    (this.LazyInit(), J(e) && w(this.m_queryClient, e));
  }
  BHasClanInfoLoaded(t) {
    return (
      e(t.BIsValid(), `Clan SteamID is not valid when ClanInfo`),
      e(
        t.BIsClanAccount(),
        `Clan SteamID is not a clan account id when requesting clan info `,
      ),
      this.BHasClanInfoLoadedByAccountID(t.GetAccountID())
    );
  }
  BHasClanInfoLoadedByAccountID(e) {
    return !!j(X(e), this.ReadCache());
  }
  RegisterClanData(e) {
    (this.LazyInit(), w(this.m_queryClient, e));
  }
  async LoadOGGClanInfoForAppID(t) {
    return (
      this.LazyInit(),
      (t = Y(t)),
      e(t != 0, `LoadOGGClanInfoForAppID called with appid of zero`),
      t == 0 ? null : x(t, this.m_queryClient).catch(() => null)
    );
  }
  async LoadOGGClanInfoForIdentifier(e) {
    return (this.LazyInit(), C(e, this.m_queryClient, `store`));
  }
  async LoadOGGClanInfoForGroupVanity(e) {
    return (this.LazyInit(), C(e, this.m_queryClient, `group`));
  }
  async LoadClanInfoForClanSteamID(e) {
    return this.LoadClanInfoForClanAccountID(e.GetAccountID());
  }
  async LoadClanInfoForClanAccountID(e) {
    return (this.LazyInit(), b(X(e), this.m_queryClient));
  }
  GetOGGClanInfo(e) {
    let t = this.ReadCache();
    return typeof e == `string` ? T(e, t) : _(e, t);
  }
  GetClanSteamIDForAppID(e) {
    let t = _(Y(e), this.ReadCache());
    return t ? u.InitFromClanID(t.clanAccountID, s.EUNIVERSE) : void 0;
  }
  GetClanVanityForAppID(e) {
    return _(Y(e), this.ReadCache())?.vanity_url;
  }
  GetClanVanityForClanSteamID(e) {
    return j(e.GetAccountID(), this.ReadCache())?.vanity_url;
  }
  HasLoadedClanAccountID(e) {
    return this.BHasClanInfoLoadedByAccountID(e);
  }
  GetClanMemberCount(e) {
    return _(Y(e), this.ReadCache())?.member_count ?? 0;
  }
  GetClanInfoByClanAccountID(t) {
    return (
      e(
        !!t,
        `Unepxected clanid when requesting information. GetClanInfoByClanAccountID `,
      ),
      j(X(t), this.ReadCache())
    );
  }
  GetCreatorStoreURL(e) {
    let t = R.GetCreatorHome(e);
    if (t) return t.GetCreatorHomeURL(`developer`);
    let n = this.GetClanInfoByClanAccountID(e.GetAccountID());
    return (
      s.COMMUNITY_BASE_URL +
      (n.vanity_url
        ? `groups/` + n.vanity_url
        : `gid/` + e.ConvertTo64BitString())
    );
  }
})();
L(`g_ClanStore`, Z);
function Q() {
  let e = N();
  return (q(e), e);
}
function $(e) {
  Q();
  let { data: t, isPending: n } = E(e ? X(e) : void 0);
  return [!!e && n, t ?? void 0];
}
function ee(e) {
  Q();
  let t = e ? Y(e) : void 0,
    { data: n, isPending: r } = y(t);
  return { bLoadingClanInfo: !!t && r, clanInfo: n ?? null };
}
export { H as a, U as i, $ as n, ee as r, Z as t };
