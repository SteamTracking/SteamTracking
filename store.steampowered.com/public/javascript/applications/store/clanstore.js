/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { At as t, Lt as n, dt as r, jt as i } from "./libraries.js";
import {
  a,
  i as o,
  l as s,
  n as c,
  o as l,
  r as u,
  s as d,
  t as f,
  u as p,
} from "./claninfo.js";
import { l as m } from "./creatorhomestore.js";
import "./steammessages_clan_pb.js";
import {
  Jx as h,
  Ly as g,
  Ry as _,
  Su as v,
  Xb as y,
  ix as b,
} from "./main.js";
var x = e(n()),
  S = new WeakSet();
function C(e = _) {
  if (typeof window > `u` || typeof document > `u` || S.has(e)) return;
  let t = y(`groupvanityinfo`, `application_config`);
  (t !== void 0 || document.readyState == `complete`) &&
    (S.add(e), w(t) && s(e, t));
}
function w(e) {
  let t = e;
  return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
    ? typeof t[0].clanAccountID == `number` &&
        (typeof t[0].appid == `number` || typeof t[0].vanity_url == `string`)
    : !1;
}
function T(e) {
  return typeof e == `string` ? parseInt(e) : e;
}
function E(e) {
  return typeof e == `string` ? Number.parseInt(e) : e;
}
var D = new (class {
  m_queryClient = _;
  m_boxCacheVersion = t.box(0);
  m_bWatchingCache = !1;
  m_bBumpScheduled = !1;
  Init() {
    this.LazyInit();
  }
  LazyInit() {
    (C(this.m_queryClient),
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
          i(() =>
            this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1),
          ));
      }));
  }
  ReadCache() {
    return (this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient);
  }
  AddGroupVanities(e) {
    (this.LazyInit(), w(e) && s(this.m_queryClient, e));
  }
  BHasClanInfoLoaded(e) {
    return (
      h(e.BIsValid(), `Clan SteamID is not valid when ClanInfo`),
      h(
        e.BIsClanAccount(),
        `Clan SteamID is not a clan account id when requesting clan info `,
      ),
      this.BHasClanInfoLoadedByAccountID(e.GetAccountID())
    );
  }
  BHasClanInfoLoadedByAccountID(e) {
    return !!a(E(e), this.ReadCache());
  }
  RegisterClanData(e) {
    (this.LazyInit(), s(this.m_queryClient, e));
  }
  async LoadOGGClanInfoForAppID(e) {
    return (
      this.LazyInit(),
      (e = T(e)),
      h(e != 0, `LoadOGGClanInfoForAppID called with appid of zero`),
      e == 0 ? null : u(e, this.m_queryClient).catch(() => null)
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
    return (this.LazyInit(), c(E(e), this.m_queryClient));
  }
  GetOGGClanInfo(e) {
    let t = this.ReadCache();
    return typeof e == `string` ? d(e, t) : l(e, t);
  }
  GetClanSteamIDForAppID(e) {
    let t = l(T(e), this.ReadCache());
    return t ? g.InitFromClanID(t.clanAccountID, b.EUNIVERSE) : void 0;
  }
  GetClanVanityForAppID(e) {
    return l(T(e), this.ReadCache())?.vanity_url;
  }
  GetClanVanityForClanSteamID(e) {
    return a(e.GetAccountID(), this.ReadCache())?.vanity_url;
  }
  HasLoadedClanAccountID(e) {
    return this.BHasClanInfoLoadedByAccountID(e);
  }
  GetClanMemberCount(e) {
    return l(T(e), this.ReadCache())?.member_count ?? 0;
  }
  GetClanInfoByClanAccountID(e) {
    return (
      h(
        !!e,
        `Unepxected clanid when requesting information. GetClanInfoByClanAccountID `,
      ),
      a(E(e), this.ReadCache())
    );
  }
  GetCreatorStoreURL(e) {
    let t = m.GetCreatorHome(e);
    if (t) return t.GetCreatorHomeURL(`developer`);
    let n = this.GetClanInfoByClanAccountID(e.GetAccountID());
    return (
      b.COMMUNITY_BASE_URL +
      (n.vanity_url
        ? `groups/` + n.vanity_url
        : `gid/` + e.ConvertTo64BitString())
    );
  }
})();
v(`g_ClanStore`, D);
function O() {
  let e = r();
  return (C(e), e);
}
function k(e) {
  O();
  let { data: t, isPending: n } = p(e ? E(e) : void 0);
  return [!!e && n, t ?? void 0];
}
function A(e) {
  let t = O();
  (0, x.useEffect)(() => {
    e &&
      c(E(e), t).catch((t) =>
        console.error(`Failed to hint load clan info ${e}`, t),
      );
  }, [e, t]);
}
export { k as n, A as r, D as t };
