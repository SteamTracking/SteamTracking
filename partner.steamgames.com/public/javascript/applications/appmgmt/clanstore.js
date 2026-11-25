/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Dt as e, T as t, k as n, nt as r } from "./chunk~de7f2df91c.js";
import {
  _t as i,
  dt as a,
  ft as o,
  ht as s,
  lt as c,
  mt as l,
  pt as u,
  ut as d,
  vt as f,
  yt as p,
} from "./chunk~6b8ddcaac8.js";
import { i as m } from "./chunk~8fb30ea08b.js";
import { t as h } from "./chunk~9aa05d2c7d.js";
import { a as g } from "./chunk~7b4b9eb713.js";
import { S as _, T as v } from "./chunk~96e60d7578.js";
import { t as y } from "./chunk~25a6634263.js";
import "./chunk~a6b9ae1345.js";
import { t as b } from "./chunk~f3a565e188.js";
r();
var x = new WeakSet();
function S(e = h) {
  if (typeof window > `u` || typeof document > `u` || x.has(e)) return;
  let n = t(`groupvanityinfo`, `application_config`);
  (n !== void 0 || document.readyState == `complete`) &&
    (x.add(e), C(n) && i(e, n));
}
function C(e) {
  let t = e;
  return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
    ? typeof t[0].clanAccountID == `number` &&
        (typeof t[0].appid == `number` || typeof t[0].vanity_url == `string`)
    : !1;
}
function w(e) {
  return typeof e == `string` ? parseInt(e) : e;
}
function T(e) {
  return typeof e == `string` ? Number.parseInt(e) : e;
}
var E = new (class {
  m_queryClient = h;
  m_boxCacheVersion = _.box(0);
  m_bWatchingCache = !1;
  m_bBumpScheduled = !1;
  Init() {
    this.LazyInit();
  }
  LazyInit() {
    (S(this.m_queryClient),
      this.m_bWatchingCache ||
        ((this.m_bWatchingCache = !0),
        this.m_queryClient.getQueryCache().subscribe((e) => {
          (e?.type == `added` ||
            e?.type == `updated` ||
            e?.type == `removed`) &&
            c(e.query?.queryKey) &&
            this.ScheduleCacheVersionBump();
        })));
  }
  ScheduleCacheVersionBump() {
    this.m_bBumpScheduled ||
      ((this.m_bBumpScheduled = !0),
      queueMicrotask(() => {
        ((this.m_bBumpScheduled = !1),
          v(() =>
            this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1),
          ));
      }));
  }
  ReadCache() {
    return (this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient);
  }
  AddGroupVanities(e) {
    (this.LazyInit(), C(e) && i(this.m_queryClient, e));
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
    return !!u(T(e), this.ReadCache());
  }
  RegisterClanData(e) {
    (this.LazyInit(), i(this.m_queryClient, e));
  }
  async LoadOGGClanInfoForAppID(t) {
    return (
      this.LazyInit(),
      (t = w(t)),
      e(t != 0, `LoadOGGClanInfoForAppID called with appid of zero`),
      t == 0 ? null : a(t, this.m_queryClient).catch(() => null)
    );
  }
  async LoadOGGClanInfoForIdentifier(e) {
    return (this.LazyInit(), o(e, this.m_queryClient, `store`));
  }
  async LoadOGGClanInfoForGroupVanity(e) {
    return (this.LazyInit(), o(e, this.m_queryClient, `group`));
  }
  async LoadClanInfoForClanSteamID(e) {
    return this.LoadClanInfoForClanAccountID(e.GetAccountID());
  }
  async LoadClanInfoForClanAccountID(e) {
    return (this.LazyInit(), d(T(e), this.m_queryClient));
  }
  GetOGGClanInfo(e) {
    let t = this.ReadCache();
    return typeof e == `string` ? s(e, t) : l(e, t);
  }
  GetClanSteamIDForAppID(e) {
    let t = l(w(e), this.ReadCache());
    return t ? y.InitFromClanID(t.clanAccountID, n.EUNIVERSE) : void 0;
  }
  GetClanVanityForAppID(e) {
    return l(w(e), this.ReadCache())?.vanity_url;
  }
  GetClanVanityForClanSteamID(e) {
    return u(e.GetAccountID(), this.ReadCache())?.vanity_url;
  }
  HasLoadedClanAccountID(e) {
    return this.BHasClanInfoLoadedByAccountID(e);
  }
  GetClanMemberCount(e) {
    return l(w(e), this.ReadCache())?.member_count ?? 0;
  }
  GetClanInfoByClanAccountID(t) {
    return (
      e(
        !!t,
        `Unepxected clanid when requesting information. GetClanInfoByClanAccountID `,
      ),
      u(T(t), this.ReadCache())
    );
  }
  GetCreatorStoreURL(e) {
    let t = g.GetCreatorHome(e);
    if (t) return t.GetCreatorHomeURL(`developer`);
    let r = this.GetClanInfoByClanAccountID(e.GetAccountID());
    return (
      n.COMMUNITY_BASE_URL +
      (r.vanity_url
        ? `groups/` + r.vanity_url
        : `gid/` + e.ConvertTo64BitString())
    );
  }
})();
b(`g_ClanStore`, E);
function D() {
  let e = m();
  return (S(e), e);
}
function O(e) {
  D();
  let { data: t, isPending: n } = f(e ? T(e) : void 0);
  return [!!e && n, t ?? void 0];
}
function k(e) {
  D();
  let t = e ? w(e) : void 0,
    { data: n, isPending: r } = p(t);
  return { bLoadingClanInfo: !!t && r, clanInfo: n ?? null };
}
export { O as n, k as r, E as t };
