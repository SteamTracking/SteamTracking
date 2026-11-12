/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $ as e,
  At as t,
  C as n,
  E as r,
  en as i,
  rt as a,
} from "./chunk~de7f2df91c.js";
import { t as o } from "./chunk~25a6634263.js";
import {
  B as s,
  F as c,
  H as l,
  I as u,
  L as d,
  P as f,
  R as p,
  U as m,
  W as h,
  z as g,
} from "./chunk~6b8ddcaac8.js";
import { i as _ } from "./chunk~8fb30ea08b.js";
import { t as v } from "./chunk~9aa05d2c7d.js";
import "./chunk~b7c2818157.js";
import { t as y } from "./chunk~f3a565e188.js";
import "./chunk~a6b9ae1345.js";
import { a as b } from "./chunk~7b4b9eb713.js";
t();
var x = new WeakSet();
function S(t = v) {
  if (typeof window > `u` || typeof document > `u` || x.has(t)) return;
  let n = e(`groupvanityinfo`, `application_config`);
  (n !== void 0 || document.readyState == `complete`) &&
    (x.add(t), C(n) && l(t, n));
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
  m_queryClient = v;
  m_boxCacheVersion = n.box(0);
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
            f(e.query?.queryKey) &&
            this.ScheduleCacheVersionBump();
        })));
  }
  ScheduleCacheVersionBump() {
    this.m_bBumpScheduled ||
      ((this.m_bBumpScheduled = !0),
      queueMicrotask(() => {
        ((this.m_bBumpScheduled = !1),
          r(() =>
            this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1),
          ));
      }));
  }
  ReadCache() {
    return (this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient);
  }
  AddGroupVanities(e) {
    (this.LazyInit(), C(e) && l(this.m_queryClient, e));
  }
  BHasClanInfoLoaded(e) {
    return (
      i(e.BIsValid(), `Clan SteamID is not valid when ClanInfo`),
      i(
        e.BIsClanAccount(),
        `Clan SteamID is not a clan account id when requesting clan info `,
      ),
      this.BHasClanInfoLoadedByAccountID(e.GetAccountID())
    );
  }
  BHasClanInfoLoadedByAccountID(e) {
    return !!p(T(e), this.ReadCache());
  }
  RegisterClanData(e) {
    (this.LazyInit(), l(this.m_queryClient, e));
  }
  async LoadOGGClanInfoForAppID(e) {
    return (
      this.LazyInit(),
      (e = w(e)),
      i(e != 0, `LoadOGGClanInfoForAppID called with appid of zero`),
      e == 0 ? null : u(e, this.m_queryClient).catch(() => null)
    );
  }
  async LoadOGGClanInfoForIdentifier(e) {
    return (this.LazyInit(), d(e, this.m_queryClient, `store`));
  }
  async LoadOGGClanInfoForGroupVanity(e) {
    return (this.LazyInit(), d(e, this.m_queryClient, `group`));
  }
  async LoadClanInfoForClanSteamID(e) {
    return this.LoadClanInfoForClanAccountID(e.GetAccountID());
  }
  async LoadClanInfoForClanAccountID(e) {
    return (this.LazyInit(), c(T(e), this.m_queryClient));
  }
  GetOGGClanInfo(e) {
    let t = this.ReadCache();
    return typeof e == `string` ? s(e, t) : g(e, t);
  }
  GetClanSteamIDForAppID(e) {
    let t = g(w(e), this.ReadCache());
    return t ? o.InitFromClanID(t.clanAccountID, a.EUNIVERSE) : void 0;
  }
  GetClanVanityForAppID(e) {
    return g(w(e), this.ReadCache())?.vanity_url;
  }
  GetClanVanityForClanSteamID(e) {
    return p(e.GetAccountID(), this.ReadCache())?.vanity_url;
  }
  HasLoadedClanAccountID(e) {
    return this.BHasClanInfoLoadedByAccountID(e);
  }
  GetClanMemberCount(e) {
    return g(w(e), this.ReadCache())?.member_count ?? 0;
  }
  GetClanInfoByClanAccountID(e) {
    return (
      i(
        !!e,
        `Unepxected clanid when requesting information. GetClanInfoByClanAccountID `,
      ),
      p(T(e), this.ReadCache())
    );
  }
  GetCreatorStoreURL(e) {
    let t = b.GetCreatorHome(e);
    if (t) return t.GetCreatorHomeURL(`developer`);
    let n = this.GetClanInfoByClanAccountID(e.GetAccountID());
    return (
      a.COMMUNITY_BASE_URL +
      (n.vanity_url
        ? `groups/` + n.vanity_url
        : `gid/` + e.ConvertTo64BitString())
    );
  }
})();
y(`g_ClanStore`, E);
function D() {
  let e = _();
  return (S(e), e);
}
function O(e) {
  D();
  let { data: t, isPending: n } = m(e ? T(e) : void 0);
  return [!!e && n, t ?? void 0];
}
function k(e) {
  D();
  let t = e ? w(e) : void 0,
    { data: n, isPending: r } = h(t);
  return { bLoadingClanInfo: !!t && r, clanInfo: n ?? null };
}
export { O as n, k as r, E as t };
