/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { B as t, Lt as n, P as r, ft as i } from "./libraries.js";
import { X as a } from "./partnerevent.js";
import { t as o } from "./meetsteamclanid.js";
import { t as s } from "./storeurl.js";
import {
  Av as c,
  Hc as l,
  Hu as u,
  Jx as d,
  Pc as f,
  Sb as p,
  Ub as m,
  jc as h,
  rl as g,
  rx as _,
} from "./main.js";
var v = e(n(), 1),
  y = i(),
  b = (function (e) {
    return (
      (e.k_eView = `view`),
      (e.k_eViewWebSiteHub = `websitehub`),
      (e.k_eCommunityView = `communityview`),
      (e.k_eCommunityEdit = `edit`),
      (e.k_eCommunityEditBroadcast = `editBroadcast`),
      (e.k_eCommunityAdminPage = `admin`),
      (e.k_eCommunityPublish = `publish`),
      (e.k_eCommunityMigrate = `migrate`),
      (e.k_eCommunityPreview = `preview`),
      (e.k_eCommunityPreviewSale = `previewsale`),
      (e.k_eCommunityAnnouncementHub = `community_announcehub`),
      (e.k_eStoreView = `storeview`),
      (e.k_eStoreNewsHub = `newshub`),
      (e.k_eStoreOwnerPage = `store`),
      (e.k_eStoreSalePage = `sale`),
      (e.k_eStoreHardwarePreview = `hardwarepreview`),
      (e.k_eStoreUsersNewsHub = `usernewshub`),
      e
    );
  })({}),
  x =
    /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
function S(e) {
  return e.match(x)?.[1];
}
function C(e, t) {
  if (!t) return !1;
  let n = S(window.location.href) == `news`;
  switch ((t.GetEventType(), t.appid, e)) {
    case `view`:
      return n && !k();
    case `communityview`:
    case `edit`:
    case `editBroadcast`:
    case `publish`:
    case `migrate`:
    case `preview`:
    case `previewsale`:
    case `community_announcehub`:
      return !1;
    case `admin`:
      return !1;
    case `websitehub`:
      return n;
    case `storeview`:
      return n && !k();
    case `newshub`:
    case `store`:
    case `usernewshub`:
      return n;
    case `sale`:
      return !1;
    case `hardwarepreview`:
      return !1;
    default:
      return (d(!1, `Unknown route specified for link: ` + e), !1);
  }
}
function w(e) {
  let t =
    m.COMMUNITY_BASE_URL +
    `gid/` +
    e.clanSteamID.ConvertTo64BitString() +
    `/announcements/share/` +
    e.AnnouncementGID;
  return {
    strFacebookUrl: t + `?site=facebook&t=` + Math.random(),
    strTwitterUrl: t + `?site=twitter`,
    strRedditUrl: t + `?site=reddit`,
  };
}
function T(e) {
  return j(e, `sale`, `absolute`);
}
function E(e) {
  return j(e, `storeview`, `absolute`);
}
function D(e, t, n) {
  if (n) return (e ? `/games/` + _.VANITY_ID : `/groups/` + _.VANITY_ID) + `/`;
  let r = e ? `ogg/` + e : `gid/` + t.ConvertTo64BitString();
  return m.COMMUNITY_BASE_URL + r + `/`;
}
function O() {
  return `news`;
}
function k() {
  return !1;
}
function A(e) {
  return e.clanSteamID.GetAccountID() === 45479024 && !1;
}
function j(e, t, n) {
  let { data: r } = c(e?.appid ? { appid: e.appid } : void 0);
  if (e) return M(e, r, t, n);
}
function M(e, t, n, r) {
  let i = r === `relative`,
    c = i ? `/` : m.STORE_BASE_URL,
    l = D(e.appid, e.clanSteamID, i);
  n === `view` ? (n = `storeview`) : n === `websitehub` && (n = `newshub`);
  let u = e.GID ? e.GID : ``,
    f = e.AnnouncementGID ? e.AnnouncementGID : ``,
    p = e.BIsOGGEvent() && e.appid && t && e.BHasSaleUpdateLandingPageVanity(),
    h = e.GetEventType() == 36;
  switch (n) {
    case `publish`:
      return (
        l +
        (e.bOldAnnouncement
          ? `partnerevents/migrate_announcement/` + f
          : `partnerevents/publish/` + u + `?tab=publishing`)
      );
    case `edit`:
      return (
        l +
        (e.bOldAnnouncement
          ? `partnerevents/migrate_announcement/` + f
          : `partnerevents/edit/` + u)
      );
    case `editBroadcast`:
      return (
        l +
        (e.bOldAnnouncement
          ? `partnerevents/migrate_announcement/` + f
          : `partnerevents/edit/` + u) +
        `?tab=broadcast`
      );
    case `migrate`:
      return l + `partnerevents/migrate_announcement/` + f;
    case `preview`:
      return h
        ? l + `partnerevents/previewsale/` + u
        : l +
            (e.bOldAnnouncement
              ? `partnerevents/preview_old_announcement/` + f
              : `partnerevents/preview/` + u);
    case `previewsale`:
      return l + `partnerevents/previewsale/` + u;
    case `admin`:
      return h
        ? `${c}curator/${e.clanSteamID.GetAccountID()}/admin/creatorhome_link`
        : l + `partnerevents`;
    case `community_announcehub`:
      return l + `announcements`;
    case `newshub`: {
      let t = e.appid
        ? `app/${e.appid}`
        : `group/${e.clanSteamID.GetAccountID()}`;
      return c + `${O()}/${t}`;
    }
    case `store`:
      return (
        c +
        (e.appid ? `app/` + e.appid : `curator/` + e.clanSteamID.GetAccountID())
      );
    case `sale`:
      return e.jsondata.bSaleEnabled
        ? p
          ? `${s(t)}/${e.GetSaleUpdateLandingPageVanity()}`
          : h
            ? `${c}curator/${e.clanSteamID.GetAccountID()}`
            : c +
              a(
                e.clanSteamID.GetAccountID(),
                e.GetSaleVanity(),
                !!e.jsondata.sale_vanity_id_valve_approved_for_sale_subpath,
              )
        : c;
    case `hardwarepreview`:
      return A(e) ? `${c}hardware_v2/${f}?beta=1` : c;
    case `communityview`:
      return l + `announcements/detail/` + f;
    case `storeview`:
      if (e.clanSteamID.GetAccountID() == o())
        return `${m.STORE_BASE_URL}meetsteam/${u}`;
      if (p) return `${s(t)}/${e.GetSaleUpdateLandingPageVanity()}`;
      if (h) return `${c}curator/${e.clanSteamID.GetAccountID()}`;
      {
        let t = e.appid
            ? `app/${e.appid}`
            : `group/${e.clanSteamID.GetAccountID()}`,
          n = k() ? `view_v2` : `view`,
          r = e.bOldAnnouncement ? `old_view/${f}` : `${n}/${u}`;
        return `${c}${O()}/${t}/${r}`;
      }
    case `usernewshub`:
      return `${c}${O()}/`;
    default:
      return (d(!1, `Unknown route specified for link`), ``);
  }
}
function N(e, t, n) {
  return j(e, t, n === `forceAbsolute` || !C(t, e) ? `absolute` : `relative`);
}
function P(e) {
  let { eventModel: t, route: n, bPopup: i = !0 } = e,
    a = C(n, t),
    o = j(t, n, a ? `relative` : `absolute`);
  return (
    v.useEffect(() => {
      o && (i ? window.open(o) : window.location.assign(o));
    }, [i, o]),
    a && o ? (0, y.jsx)(r, { push: !0, to: o }) : null
  );
}
function F(e, t, n) {
  let r = D(e, t, !1);
  switch (n) {
    case `admin`:
      return r + `partnerevents`;
    default:
      return ``;
  }
}
function I(e) {
  let { eventModel: n, preferredFocus: r } = e,
    { bCanUseLink: i } = v.useContext(h),
    a = u(),
    o = t(),
    s = i && C(e.route, n),
    c = j(n, e.route, s ? `relative` : `absolute`),
    d = !s && c ? l(c) : c,
    m = s || !d ? d : f(d, a),
    _ = j(n, `websitehub`, `absolute`),
    b = e.route == `websitehub` ? `` : p.Localize(`#EventBrowse_MoreEventsBtn`),
    x = v.useCallback(() => {
      _ && window.location.assign(_);
    }, [_]);
  return n
    ? s
      ? (0, y.jsx)(g, {
          style: e.style,
          className: e.className,
          href: o.createHref({ pathname: m }),
          onClick: (t) => {
            m && (e.onClick?.(t), o.push(m), t.preventDefault());
          },
          onOptionsActionDescription: b,
          onOptionsButton: b ? x : void 0,
          preferredFocus: r,
          children: e.children,
        })
      : (0, y.jsx)(g, {
          href: m,
          style: e.style,
          className: e.className,
          onClick: e.onClick,
          preferredFocus: r,
          onOptionsActionDescription: b,
          onOptionsButton: b ? x : void 0,
          children: e.children,
        })
    : null;
}
export {
  O as a,
  N as c,
  T as d,
  F as i,
  w as l,
  b as n,
  M as o,
  I as r,
  P as s,
  k as t,
  E as u,
};
