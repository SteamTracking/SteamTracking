/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { At as t, Lt as n, jt as r, kt as i, tt as a } from "./libraries.js";
import { d as o, f as s } from "./salecapsuleutils.js";
import { n as c } from "./partnereventstore.js";
import {
  Fu as l,
  Gx as u,
  Iy as d,
  Jb as f,
  Mb as p,
  ax as m,
  qx as h,
  rx as g,
  xl as _,
  yu as v,
} from "./main.js";
import { t as y } from "./clanstore.js";
var b = e(a()),
  x = e(n());
function S(e) {
  e.list_jsondata && typeof e.list_jsondata == `string`
    ? (e.list_jsondata = JSON.parse(e.list_jsondata))
    : (h(
        !e.list_jsondata,
        `Found unexpected ListDetails_t.list_jsondata type: ` +
          typeof e.list_jsondata,
      ),
      (e.list_jsondata = {}));
}
function C(e, t) {
  (t.localized_flat_title = u([], 32, null)),
    (t.localized_flat_blurb = u([], 32, null)),
    (t.localized_flat_link = u([], 32, null)),
    t.title !== `0` && (t.localized_flat_title[e] = t.title),
    t.blurb !== `0` && (t.localized_flat_blurb[e] = t.blurb),
    t.link !== `0` && (t.localized_flat_link[e] = t.link),
    t.title_localization.forEach((e) => {
      e.localized_string?.length > 0 &&
        (t.localized_flat_title[e.language] = e.localized_string);
    }),
    t.blurb_localization.forEach((e) => {
      e.localized_string?.length > 0 &&
        (t.localized_flat_blurb[e.language] = e.localized_string);
    }),
    t.link_localization.forEach((e) => {
      e.localized_string?.length > 0 &&
        (t.localized_flat_link[e.language] = e.localized_string);
    });
}
var w = class e {
  m_mapList = new Map();
  m_mapEventGIDToLists = new Map();
  m_mapListIDToClanAccount = new Map();
  GetListDetails(e) {
    return this.m_mapList.get(e);
  }
  GetAllSaleCurationLists(e) {
    return this.m_mapEventGIDToLists.get(e) || [];
  }
  GetClanAccountFromListID(e) {
    return this.m_mapListIDToClanAccount.get(e);
  }
  async LoadListDetails(e, t, n) {
    if (this.m_mapList.has(t)) return this.m_mapList.get(t);
    let r =
        g.STORE_BASE_URL +
        `curator/` +
        e.GetAccountID() +
        `/admin/ajaxgetlistdetails`,
      i = { listid: t };
    try {
      let a = await b.default.get(r, { params: i, cancelToken: n?.token });
      if (a?.data?.success == 1) {
        let n = { ...a.data.list_details };
        return (
          h(t == n?.listid, `Wanted` + t + `but got` + n?.listid),
          S(n),
          C(a.data.curation_language, n),
          this.m_mapList.set(t, n),
          this.m_mapListIDToClanAccount.set(t, e.GetAccountID()),
          n
        );
      }
    } catch (e) {
      let t = l(e);
      console.error(
        `CCuratorListStore.LoadListDetails: error on load: ` + t.strErrorMsg,
        t,
      );
    }
    return null;
  }
  async LoadMyFollowedSaleCurationLists(e, t, n) {
    if (
      !m.logged_in ||
      (v.Get().BIsLoaded() && v.Get().GetFollowedCuratorCount() == 0)
    )
      return [];
    let r = g.STORE_BASE_URL + `curators/ajaxgetmycuratorsalelists`,
      i = {
        clan_account_id: e.GetAccountID(),
        clan_event_gid: t,
        origin: self.origin,
        curator_clan_account_followed: v.Get().BIsLoaded()
          ? v.Get().GetFollowedCuratorsAccountID().join(`,`)
          : void 0,
      };
    return this.InternalLoadSaleCuratorLists(
      r,
      i,
      `CCuratorListStore.LoadMyFollowedSaleCurationLists`,
      e,
      t,
      n,
    );
  }
  async LoadAllSaleCurationLists(e, t, n) {
    if (this.m_mapEventGIDToLists.has(t))
      return this.m_mapEventGIDToLists.get(t);
    let r = g.STORE_BASE_URL + `curators/ajaxfindcuratorlists`,
      i = {
        clan_account_id: e.GetAccountID(),
        clan_event_gid: t,
        origin: self.origin,
      };
    return this.InternalLoadSaleCuratorLists(
      r,
      i,
      `CCuratorListStore.LoadAllSaleCurationLists`,
      e,
      t,
      n,
    );
  }
  async InternalLoadSaleCuratorLists(e, t, n, i, a, o) {
    try {
      let n = await b.default.get(e, { params: t, cancelToken: o?.token });
      if (n?.data?.success == 1) {
        let e = [];
        return (
          r(() => {
            n.data.matches &&
              n.data.matches.forEach((t) => {
                t.multi_detail_lists.forEach((n) => {
                  this.m_mapListIDToClanAccount.set(
                    n.listid,
                    t.clan_account_id,
                  ),
                    S(n),
                    C(t.curation_language, n),
                    this.m_mapList.set(n.listid, n),
                    e.push(n);
                });
              }),
              this.m_mapEventGIDToLists.set(a, e);
          }),
          e
        );
      }
    } catch (e) {
      let t = l(e);
      console.error(n + `: error on load: ` + t.strErrorMsg, t);
    }
    return [];
  }
  static s_Singleton;
  static Get() {
    return (e.s_Singleton ||= new e()), e.s_Singleton;
  }
  constructor() {
    i(this);
    let e = f(`curatorlistdata`, `application_config`);
    this.ValidateStoreDefault(e) &&
      r(() => {
        e.forEach((e) => {
          e.multi_detail_lists.forEach((t) => {
            S(t), C(e.curation_language, t), this.m_mapList.set(t.listid, t);
          });
        });
      });
  }
  ValidateStoreDefault(e) {
    let t = e;
    return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
      ? typeof t[0].curation_language == `number` &&
          t[0].multi_detail_lists &&
          Array.isArray(t[0].multi_detail_lists) &&
          typeof t[0].multi_detail_lists[0].listid == `string` &&
          typeof t[0].multi_detail_lists[0].list_type == `number` &&
          typeof t[0].multi_detail_lists[0].list_state == `number`
      : t && Array.isArray(t) && t.length == 0;
  }
};
p([t], w.prototype, `m_mapList`, void 0);
function T(e, t) {
  let n = _();
  return (
    (0, x.useEffect)(() => {
      if (w.Get().GetListDetails(t) || !e) return;
      let r = b.default.CancelToken.source();
      return (
        (async () => {
          let i = await w.Get().LoadListDetails(e, t);
          if (!r.token.reason) {
            if (i?.apps?.length) {
              let e = [];
              for (let t of i.apps) {
                let n = t?.recommended_app?.appid;
                n && e.push({ id: n, type: `game` });
              }
              o(e, { ...s, include_assets: !0, include_release: !0 }), n();
            } else console.error(`Found no list data`);
          }
        })(),
        () => r.cancel(`unmounting CuratorList`)
      );
    }, [e, t, n]),
    w.Get().GetListDetails(t)
  );
}
function E(e) {
  let t = e && y.GetClanInfoByClanAccountID(e),
    [n, r] = (0, x.useState)(!!t);
  return (
    (0, x.useEffect)(() => {
      if (n && e) {
        let t = d.InitFromClanID(e, g.EUNIVERSE);
        y.LoadClanInfoForClanSteamID(t).finally(() => {
          r(!0);
        });
      }
    }, [n, e]),
    t
  );
}
function D(e) {
  return !!e?.sale_clan_event_gid && !!e?.sale_clan_steamid;
}
function O(e) {
  let t = _(),
    n = D(e) ? e.sale_clan_event_gid : null,
    r = n && c.GetClanEventModel(n);
  return (
    (0, x.useEffect)(() => {
      if (r || !D(e)) return;
      let i = b.default.CancelToken.source();
      return (
        (async () => {
          c.Init(),
            await c.LoadPartnerEventFromClanEventGIDAndClanSteamID(
              new d(e.sale_clan_steamid),
              n,
              0,
            ),
            !i.token.reason && t();
        })(),
        () => i.cancel(`unmounting CuratorList`)
      );
    }, [e, n, r, t]),
    r
  );
}
export { T as a, E as i, w as n, O as r, D as t };
