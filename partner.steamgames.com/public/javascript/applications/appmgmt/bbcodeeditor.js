/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $t as e,
  A as t,
  Ct as n,
  Dt as r,
  Et as i,
  Gt as a,
  Ht as o,
  Jt as s,
  Kt as c,
  R as l,
  S as u,
  T as d,
  U as f,
  Ut as p,
  V as m,
  Wt as h,
  Xt as g,
  Y as _,
  Yt as v,
  _t as y,
  ft as b,
  gt as x,
  i as ee,
  k as S,
  kt as te,
  nt as C,
  o as ne,
  on as re,
  qt as w,
  rt as ie,
  tt as ae,
  vt as oe,
  wt as se,
  x as ce,
  yt as T,
  z as le,
} from "./mobx.esm.js";
import {
  $ as ue,
  At as de,
  F as fe,
  Lt as pe,
  Mt as me,
  Pt as he,
  Rt as E,
  U as ge,
  Ut as _e,
  Z as ve,
  et as ye,
  l as be,
  mt as xe,
  ot as Se,
  r as Ce,
  s as we,
  t as D,
  tt as Te,
  ut as O,
  vt as Ee,
  z as De,
} from "./src.js";
import { l as Oe, n as ke, r as Ae, s as je } from "./uploadutils.js";
import {
  A as Me,
  An as Ne,
  Ba as Pe,
  Bn as Fe,
  Bt as Ie,
  Ca as Le,
  D as Re,
  Dt as ze,
  Et as Be,
  Fn as Ve,
  Ga as k,
  H as He,
  Ha as Ue,
  Ii as We,
  In as Ge,
  It as Ke,
  Ji as qe,
  La as Je,
  Li as Ye,
  Mn as Xe,
  On as Ze,
  Ra as Qe,
  Rt as $e,
  Sa as et,
  Tt as tt,
  Vt as nt,
  Wa as rt,
  Wr as it,
  Wt as at,
  Xt as ot,
  Z as st,
  Zt as ct,
  b as lt,
  bn as ut,
  c as dt,
  ea as ft,
  f as pt,
  fa as mt,
  j as ht,
  ki as gt,
  m as _t,
  n as vt,
  oa as A,
  p as yt,
  pn as bt,
  pr as xt,
  s as St,
  sa as Ct,
  tn as wt,
  u as Tt,
  un as Et,
  wt as Dt,
} from "./dialogs.js";
import {
  O as Ot,
  T as kt,
  h as j,
  i as At,
  w as jt,
} from "./storebrowsequerycontext.js";
import {
  $n as Mt,
  K as Nt,
  Li as Pt,
  P as Ft,
  Q as It,
  W as Lt,
  er as Rt,
} from "./saletags.js";
import { r as zt, u as Bt } from "./storenaveventcontext.js";
import { C as M, D as Vt, E as Ht, c as Ut, w as N } from "./react-router.js";
import { r as Wt } from "./servicetransportprovider.js";
import { i as Gt } from "./utils.js";
import { t as Kt } from "./useQuery.js";
import {
  _ as qt,
  a as Jt,
  c as Yt,
  d as Xt,
  f as Zt,
  g as Qt,
  h as $t,
  i as en,
  l as tn,
  m as nn,
  o as rn,
  r as an,
  s as on,
  t as sn,
  u as cn,
} from "./eventimageurlwithfallback.js";
import {
  G as ln,
  H as un,
  U as dn,
  W as fn,
  X as pn,
  i as mn,
  q as hn,
} from "./storeitem.js";
import { r as gn } from "./appidutils.js";
import { i as _n } from "./emoticonstorecontext.js";
import {
  _ as vn,
  f as yn,
  h as bn,
  u as xn,
  v as Sn,
  y as Cn,
} from "./salestoreitemutils.js";
import { t as wn } from "./useclienthints.js";
import { r as Tn } from "./modals.js";
import { t as En } from "./axios.js";
import { t as Dn } from "./ajaxhooks.js";
import { t as On } from "./axiosutils.js";
import { t as P } from "./throbber.js";
import { t as kn } from "./stringutils.js";
import { n as F, r as An, s as jn } from "./localization2.js";
import { m as Mn } from "./partnereventshared.module.js";
import {
  B as Nn,
  C as Pn,
  D as I,
  E as Fn,
  F as In,
  G as Ln,
  H as Rn,
  I as zn,
  J as Bn,
  K as Vn,
  L as Hn,
  M as Un,
  N as Wn,
  O as Gn,
  R as Kn,
  S as qn,
  T as Jn,
  U as Yn,
  V as Xn,
  W as Zn,
  Y as Qn,
  _ as $n,
  b as er,
  f as tr,
  g as L,
  h as nr,
  k as rr,
  l as ir,
  m as ar,
  p as or,
  q as sr,
  t as cr,
  u as lr,
  v as ur,
  w as dr,
  x as fr,
  y as pr,
  z as mr,
} from "./emoticonbutton.js";
import { B as hr, b as gr } from "./bbcodes.module.js";
import {
  C as R,
  E as _r,
  S as vr,
  k as yr,
  n as br,
  v as xr,
  w as Sr,
} from "./partnereventutils.js";
import "./steamid.js";
import "./steammessages_community_pb.js";
import { t as Cr } from "./multisourceimage.js";
import { t as wr } from "./meetsteamclanid.js";
import {
  I as Tr,
  L as Er,
  T as Dr,
  X as Or,
  Y as kr,
} from "./shared_svg_gamerecordings.js";
import { i as Ar, n as jr, t as Mr } from "./dashplayer.js";
import { r as Nr, t as Pr } from "./browserapi.js";
import { n as Fr } from "./storeitemcache.js";
import "./steammessages_player_pb.js";
import { r as Ir } from "./playerstore.js";
import "./reorderablelist.module.js";
import {
  f as Lr,
  h as Rr,
  n as zr,
  o as Br,
  p as Vr,
  r as Hr,
} from "./genericimageupload.js";
var z = re(te(), 1);
function Ur() {
  return window.innerWidth ?? 1920;
}
function Wr() {
  wn();
  let [e, t] = (0, z.useState)(() => Ur());
  return (
    (0, z.useEffect)(() => {
      let e = () => {
        t(Ur());
      };
      return (
        e(),
        window.addEventListener(`resize`, e),
        () => window.removeEventListener(`resize`, e)
      );
    }, []),
    e
  );
}
function Gr(e = 940) {
  return Wr() >= e;
}
var B = y();
function Kr(e) {
  return (0, B.jsxs)(`a`, {
    href: e.strURL,
    className: Hn.Box,
    "data-modal-content-sizetofit": !!e.bSizeToFit,
    "data-appid": e.appid,
    "data-publishedfileid": e.publishedfileid,
    children: [
      (0, B.jsx)(Rn, { strURL: e.strPreviewURL }),
      (0, B.jsxs)(Kn, {
        children: [
          (0, B.jsx)(Xn, { children: e.strTitle }),
          (0, B.jsx)(`div`, {
            children: (0, B.jsx)(`span`, {
              className: Hn.Type,
              children: e.strType,
            }),
          }),
          e.author && (0, B.jsx)(In, { children: e.author }),
          (0, B.jsx)(Nn, { children: e.strDescription }),
        ],
      }),
    ],
  });
}
var qr = re(Ht(), 1),
  Jr = class extends sr {
    m_LinkFilter = Bt;
    m_parentNode = void 0;
    m_mapHostToComponent;
    m_globalStoreLink;
    constructor(e, t, n, r) {
      super(e),
        (this.m_parentNode = t),
        (this.m_mapHostToComponent = n),
        (this.m_globalStoreLink = r);
    }
    AppendText(e, t = !1) {
      let n = e;
      if (
        (t || this.m_parentNode?.tag == `*`) &&
        (this.m_parentNode == null || this.m_parentNode.tag != `img`)
      ) {
        let e = this.m_LinkFilter.exec(n);
        for (; e; ) {
          if (e.index > 0) {
            let n = e.input.substring(0, e.index);
            super.AppendText(n, t);
          }
          let r = e[0],
            i = !1;
          if (this.m_mapHostToComponent) {
            for (let e = 0; e < this.m_mapHostToComponent.length; ++e)
              if (this.m_mapHostToComponent[e].urlRegExp.exec(r)) {
                (i = !0),
                  super.AppendNode(
                    this.m_mapHostToComponent[e].fnBBComponent(
                      r,
                      this.m_globalStoreLink,
                    ),
                  );
                break;
              }
          }
          i || super.AppendNode(F(r)),
            (n = e.input.substring(e.index + r.length)),
            (e = this.m_LinkFilter.exec(n));
        }
      }
      n.length > 0 && super.AppendText(n, t);
    }
  },
  Yr = `[ː:]([a-zA-Z0-9_]+)[ː:]`,
  Xr = class extends sr {
    m_EmoteRegex = new RegExp(Yr);
    AppendText(e, t = !1) {
      let n = e;
      if (e.length >= 3) {
        let e = this.m_EmoteRegex.exec(n);
        for (; e; ) {
          if (e.index > 0) {
            let n = e.input.substring(0, e.index);
            super.AppendText(n, t);
          }
          let r = e[1];
          super.AppendNode(z.createElement(or, { emoticon: r }, [])),
            (n = e.input.substring(e.index + r.length + 2)),
            (e = this.m_EmoteRegex.exec(n));
        }
      }
      n.length > 0 && super.AppendText(n, t);
    }
  },
  Zr = class extends sr {
    m_parentNode = void 0;
    constructor(e, t) {
      super(e), (this.m_parentNode = t);
    }
    AppendText(e, t = !1) {
      let n = e;
      this.m_parentNode &&
        this.m_parentNode.tag == `img` &&
        !Qr(n) &&
        (n = Ve(n)),
        super.AppendText(n, t);
    }
  };
function Qr(e) {
  let t = e.trim();
  return (
    t.startsWith(`{STEAM_CLAN_IMAGE}`) || t.startsWith(`{STEAM_CLAN_LOC_IMAGE}`)
  );
}
var $r =
  /^(#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-z-]+\([^;{}]*\)|[a-z]+)$/i;
function ei(e) {
  return e ? $r.test(e.trim()) : !1;
}
function ti(e, t) {
  return ei(e) ? e : t;
}
var ni = `NiXfRuagfO4-`;
function ri(e) {
  let { inputType: n, id: r, bApplyUserContentPref: i } = e,
    a = n == `bundle` ? `bundle` : n == `sub` ? `sub` : `game`,
    o = xn(r, a),
    { data: s } = j(o),
    { data: c, isPending: l } = kt(i ? o : void 0);
  if (!s) return null;
  if (i) {
    if (l) return null;
    if (c?.filter_failure == 40 || c?.filter_failure == 50) {
      let e = `#StoreCapsule_App_Excluded`;
      switch (n) {
        case `sub`:
          e = `#StoreCapsule_Package_Excluded`;
          break;
        case `bundle`:
          e = `#StoreCapsule_Bundle_Excluded`;
      }
      return (0, B.jsx)(`div`, {
        className: t(ni, `AppSummaryWidgetCtn`),
        children: Ct(
          e,
          (0, B.jsx)(`a`, { href: f.STORE_BASE_URL + `account/preferences/` }),
        ),
      });
    }
  }
  return (0, B.jsx)(`div`, {
    className: t(ni, `AppSummaryWidgetCtn`),
    children: (0, B.jsx)(qt, {
      id: r,
      type: a,
      bShowDemoButton: s.type == 1,
      bAllowTwoLinesForHeader: !0,
      bPreferAssetWithoutOverride: !1,
    }),
  });
}
var ii =
    /(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
  ai =
    /(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i,
  oi =
    /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i;
function si(e, t) {
  let n = new RegExp(e).exec(t);
  if (!n || n.length <= 3) return;
  let r = n[3];
  if (r)
    switch (n[1]) {
      case `gid`:
        return { eventGID: r, strClanSteamID64: n[2] };
      case `group`:
        return { eventGID: r, clanAccountID: Number.parseInt(n[2]) };
      case `groups`:
        return { eventGID: r, strGroupVanity: n[2] };
      default:
        return isNaN(+n[2])
          ? { eventGID: r, strOGGVanity: n[2] }
          : { eventGID: r, appid: Number(n[2]) };
    }
}
var ci = z.createContext({ bCanUseLink: !1 }),
  li = (function (e) {
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
  ui =
    /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
function di(e) {
  return e.match(ui)?.[1];
}
function fi(t, n) {
  if (!n) return !1;
  switch ((di(window.location.href), n.GetEventType(), n.appid, t)) {
    case `view`:
      return !1;
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
      return !1;
    case `storeview`:
      return !1;
    case `newshub`:
    case `store`:
    case `usernewshub`:
      return !1;
    case `sale`:
      return !1;
    case `hardwarepreview`:
      return !1;
    default:
      return e(!1, `Unknown route specified for link: ` + t), !1;
  }
}
function pi(e) {
  let t =
    f.COMMUNITY_BASE_URL +
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
function mi(e) {
  return yi(e, `storeview`, `absolute`);
}
function hi(e, t, n) {
  if (n)
    return (e ? `/games/` + ae.VANITY_ID : `/groups/` + ae.VANITY_ID) + `/`;
  let r = e ? `ogg/` + e : `gid/` + t.ConvertTo64BitString();
  return f.COMMUNITY_BASE_URL + r + `/`;
}
function gi() {
  return `news`;
}
function _i() {
  return !1;
}
function vi(e) {
  return e.clanSteamID.GetAccountID() === 45479024 && !1;
}
function yi(e, t, n) {
  let { data: r } = j(e?.appid ? { appid: e.appid } : void 0);
  if (e) return bi(e, r, t, n);
}
function bi(t, n, r, i) {
  let a = i === `relative`,
    o = a ? `/` : f.STORE_BASE_URL,
    s = hi(t.appid, t.clanSteamID, a);
  r === `view` ? (r = `storeview`) : r === `websitehub` && (r = `newshub`);
  let c = t.GID ? t.GID : ``,
    l = t.AnnouncementGID ? t.AnnouncementGID : ``,
    u = t.BIsOGGEvent() && t.appid && n && t.BHasSaleUpdateLandingPageVanity(),
    d = t.GetEventType() == 36;
  switch (r) {
    case `publish`:
      return (
        s +
        (t.bOldAnnouncement
          ? `partnerevents/migrate_announcement/` + l
          : `partnerevents/publish/` + c + `?tab=publishing`)
      );
    case `edit`:
      return (
        s +
        (t.bOldAnnouncement
          ? `partnerevents/migrate_announcement/` + l
          : `partnerevents/edit/` + c)
      );
    case `editBroadcast`:
      return (
        s +
        (t.bOldAnnouncement
          ? `partnerevents/migrate_announcement/` + l
          : `partnerevents/edit/` + c) +
        `?tab=broadcast`
      );
    case `migrate`:
      return s + `partnerevents/migrate_announcement/` + l;
    case `preview`:
      return d
        ? s + `partnerevents/previewsale/` + c
        : s +
            (t.bOldAnnouncement
              ? `partnerevents/preview_old_announcement/` + l
              : `partnerevents/preview/` + c);
    case `previewsale`:
      return s + `partnerevents/previewsale/` + c;
    case `admin`:
      return d
        ? `${o}curator/${t.clanSteamID.GetAccountID()}/admin/creatorhome_link`
        : s + `partnerevents`;
    case `community_announcehub`:
      return s + `announcements`;
    case `newshub`: {
      let e = t.appid
        ? `app/${t.appid}`
        : `group/${t.clanSteamID.GetAccountID()}`;
      return o + `${gi()}/${e}`;
    }
    case `store`:
      return (
        o +
        (t.appid ? `app/` + t.appid : `curator/` + t.clanSteamID.GetAccountID())
      );
    case `sale`:
      return t.jsondata.bSaleEnabled
        ? u
          ? `${It(n)}/${t.GetSaleUpdateLandingPageVanity()}`
          : d
            ? `${o}curator/${t.clanSteamID.GetAccountID()}`
            : o +
              xr(
                t.clanSteamID.GetAccountID(),
                t.GetSaleVanity(),
                !!t.jsondata.sale_vanity_id_valve_approved_for_sale_subpath,
              )
        : o;
    case `hardwarepreview`:
      return vi(t) ? `${o}hardware_v2/${l}?beta=1` : o;
    case `communityview`:
      return s + `announcements/detail/` + l;
    case `storeview`:
      if (t.clanSteamID.GetAccountID() == wr())
        return `${f.STORE_BASE_URL}meetsteam/${c}`;
      if (u) return `${It(n)}/${t.GetSaleUpdateLandingPageVanity()}`;
      if (d) return `${o}curator/${t.clanSteamID.GetAccountID()}`;
      {
        let e = t.appid
            ? `app/${t.appid}`
            : `group/${t.clanSteamID.GetAccountID()}`,
          n = _i() ? `view_v2` : `view`,
          r = t.bOldAnnouncement ? `old_view/${l}` : `${n}/${c}`;
        return `${o}${gi()}/${e}/${r}`;
      }
    case `usernewshub`:
      return `${o}${gi()}/`;
    default:
      return e(!1, `Unknown route specified for link`), ``;
  }
}
function xi(e, t, n) {
  return yi(e, t, n === `forceAbsolute` || !fi(t, e) ? `absolute` : `relative`);
}
function Si(e, t, n) {
  let r = hi(e, t, !1);
  switch (n) {
    case `admin`:
      return r + `partnerevents`;
    default:
      return ``;
  }
}
function Ci(e) {
  let { eventModel: t, preferredFocus: n } = e,
    { bCanUseLink: r } = z.useContext(ci),
    i = zt(),
    a = Ut(),
    o = r && fi(e.route, t),
    s = yi(t, e.route, o ? `relative` : `absolute`),
    c = !o && s ? Xe(s) : s,
    l = o || !c ? c : jn(c, i),
    u = yi(t, `websitehub`, `absolute`),
    d =
      e.route == `websitehub` ? `` : Je.Localize(`#EventBrowse_MoreEventsBtn`),
    f = z.useCallback(() => {
      u && window.location.assign(u);
    }, [u]);
  return t
    ? o
      ? (0, B.jsx)(be, {
          style: e.style,
          className: e.className,
          href: a.createHref({ pathname: l }),
          onClick: (t) => {
            l && (e.onClick?.(t), a.push(l), t.preventDefault());
          },
          onOptionsActionDescription: d,
          onOptionsButton: d ? f : void 0,
          preferredFocus: n,
          children: e.children,
        })
      : (0, B.jsx)(be, {
          href: l,
          style: e.style,
          className: e.className,
          onClick: e.onClick,
          preferredFocus: n,
          onOptionsActionDescription: d,
          onOptionsButton: d ? f : void 0,
          children: e.children,
        })
    : null;
}
function wi(e, t, n, r, i) {
  let a = Gt(),
    o = At();
  return Kt(Ei(a, o, e, t, n, r, i)).data ?? void 0;
}
function Ti(e, t, n, r, i) {
  return [`useEventImageForSizeAsArrayWithFallback`, e?.GID, t, n, r, i];
}
function Ei(t, n, r, i, a, o, s) {
  return {
    queryKey: Ti(r, i, a, o, s),
    enabled: r && !!r.GID,
    queryFn: async () => {
      if (!r) return null;
      let c = [];
      if (!r.BImageNeedScreenshotFallback(i, a)) {
        let e = await t.ensureQueryData(sn(t, n, r, i, a, o));
        if ((e && c.push(e), o != vr.full)) {
          let e = await t.ensureQueryData(sn(t, n, r, i, a, vr.full));
          e && c.push(e);
        }
      }
      if (!s)
        try {
          let e = await t.ensureQueryData(an(t, n, r));
          e && c.push(e);
        } catch (t) {
          if (
            (e(
              !1,
              `Failed to get fallback art/screenshot for event ${r?.GID} from clan ${r?.clanSteamID.GetAccountID()}`,
            ),
            c.length == 0)
          )
            throw t;
        }
      return c;
    },
  };
}
function Di(e) {
  let t = ft.GetELanguageFallback(e);
  return e == t ? `${e}` : `${e}_${t}`;
}
function Oi(e) {
  return e ? br(new D(e.clanSteamID64), e.event) : null;
}
async function ki(e, t) {
  let n = new URLSearchParams();
  e.clanAccountID && n.set(`clan_accountid`, String(e.clanAccountID)),
    e.appid && n.set(`appid`, String(e.appid)),
    e.eventGID && n.set(`event_gid`, e.eventGID),
    e.announcementGID && n.set(`announcement_gid`, e.announcementGID),
    n.set(`lang_list`, Di(t)),
    n.set(`last_modified_time`, `0`),
    n.set(`origin`, window.location.origin);
  let r = f.STORE_BASE_URL + `events/ajaxgetpartnerevent?` + n.toString(),
    i = await fetch(r);
  if (!i.ok) throw Error(`${r} answered ${i.status}`);
  let a = await i.json();
  return a.success !== 1 || !a.event?.clan_steamid
    ? null
    : { clanSteamID64: a.event.clan_steamid, event: a.event };
}
function Ai(e, t) {
  return [
    `LinkedPartnerEvent`,
    e.clanAccountID,
    e.appid,
    e.eventGID,
    e.announcementGID,
    t,
  ];
}
function ji(e) {
  return (
    !!e &&
    (!!e.clanAccountID || !!e.appid) &&
    (!!e.eventGID || !!e.announcementGID)
  );
}
function Mi(e, t) {
  let n = ji(e);
  return {
    queryKey: Ai(e ?? {}, t),
    queryFn: () => ki(e ?? {}, t),
    select: Oi,
    enabled: n,
    staleTime: 36e5,
    retry: !1,
  };
}
function Ni(e) {
  let t = b(f.LANGUAGE);
  return Kt(Mi(e, t));
}
function Pi({ clanSteamID: e, strVanity: t, strGroupVanity: n }) {
  let r = t !== void 0 || n !== void 0,
    { data: i, isPending: a } = Nt(
      r ? (t ?? n ?? ``) : ``,
      t === void 0 ? `group` : `store`,
    );
  if (!r) return e?.GetAccountID();
  if (!a) return i?.clanAccountID ?? null;
}
function Fi(e) {
  let { appid: t, announcementGID: n, eventGID: r, strURL: i } = e,
    a = Pi(e),
    o = a === null,
    {
      data: s,
      isPending: c,
      isError: l,
    } = Ni(
      o
        ? void 0
        : {
            clanAccountID: a ?? void 0,
            appid: t,
            eventGID: r,
            announcementGID: n,
          },
    ),
    u = gn(t || s?.appid || void 0),
    { data: d } = j(u);
  if (o || l || s === null) return F(i);
  if (c || !s) return (0, B.jsx)(P, {});
  let p = b(f.LANGUAGE),
    m = s.GetNameWithFallback(p),
    h = s.GetSubTitleWithSummaryFallback(p),
    g = d?.name,
    _ = et(s.GetStartTimeAndDateUnixSeconds());
  return (0, B.jsxs)(Ci, {
    eventModel: s,
    route: li.k_eView,
    className: Hn.Box,
    "data-modal-content-sizetofit": !0,
    "data-appid": t,
    children: [
      (0, B.jsx)(Ii, { ...e, event: s }),
      (0, B.jsxs)(Kn, {
        children: [
          (0, B.jsxs)(In, {
            children: [
              A(
                s.type == 28
                  ? `#EventDisplay_Share_Announcement`
                  : `#EventDisplay_Share_Event`,
                g ?? ``,
              ),
              (0, B.jsx)(mr, { children: _ }),
            ],
          }),
          (0, B.jsx)(Xn, {
            children: (0, B.jsx)(`div`, { className: Hn.Type, children: m }),
          }),
          (0, B.jsx)(Nn, { children: h }),
        ],
      }),
    ],
  });
}
function Ii(e) {
  let {
      event: t,
      fnFilterImageURLsForKnownFailures: n,
      fnImageFailureCallback: r,
    } = e,
    i = wi(t, `capsule`, b(f.LANGUAGE), vr.capsule_main) ?? [];
  return (
    i && n && (i = n(i)),
    (0, B.jsx)(Cr, {
      className: Hn.Preview,
      rgSources: i ?? [],
      onIncrementalError: (e, t, n) => r && r(t),
    })
  );
}
var Li =
    /(?:steampowered\.com|store\.steamchina\.com|store[\w-]*\.(?:[\w.-]+\.)?(?:steam\.dev|valve\.org)|valve\.org\/store)\/(app|bundle|sub)\/(\d+)/i,
  Ri = [`store.steampowered.com`, `store.steamchina.com`],
  zi = [`steampowered.com`, `steamcommunity.com`],
  Bi = [`steamchina.com`],
  Vi = [`steam.dev`, `valve.org`];
function Hi(e, t) {
  return t.some((t) => e == t || e.endsWith(`.${t}`));
}
function Ui(e) {
  let t = Ne(e).toLocaleLowerCase(),
    n = Ne(f.STORE_BASE_URL).toLocaleLowerCase(),
    r = Ne(f.COMMUNITY_BASE_URL).toLocaleLowerCase();
  return t == n || t == r
    ? !0
    : Ri.includes(n)
      ? Hi(t, Hi(n, Bi) ? Bi : zi)
      : Hi(t, [...zi, ...Bi, ...Vi]);
}
function Wi(e) {
  if (Ui(e)) return Gi(e);
}
function Gi(e) {
  let t = new RegExp(Li).exec(e);
  if (!t || t.length <= 2) return;
  let n = t[1].toLowerCase(),
    r = Number(t[2]);
  if (r > 0 && mn(n))
    return {
      id: r,
      strItemType: n,
      storeItemKey:
        n == `sub`
          ? { packageid: r }
          : n == `bundle`
            ? { bundleid: r }
            : { appid: r },
    };
}
function Ki(e) {
  return !!e && (e.GetEventType() == 36 || e.GetEventType() == 20);
}
function qi(e) {
  let t = Ki(e),
    n = t ? e.clanSteamID.GetAccountID() : void 0,
    { data: r, isLoading: i } = Lt(n),
    { data: a, isLoading: o } = Ft(n);
  if (!t) return null;
  if (!(i || o)) return !a || !r || !Hu(e, r) ? null : (a.appids ?? []);
}
function Ji(e, t) {
  return e === null || (t.length > 0 && t.every((t) => e.includes(t)));
}
function Yi(e, t) {
  let n = qi(t);
  if (e.appid === void 0) return !0;
  if (!(e.appid > 0)) return !1;
  if (n !== void 0) return Ji(n, [e.appid]);
}
function Xi({ link: e, strURL: t, eventModel: n, bAnnouncement: r }) {
  let i = Yi(e, n);
  if (i === void 0) return null;
  if (!i) return F(t, n);
  let a =
    e.strClanSteamID64 === void 0
      ? e.clanAccountID === void 0
        ? void 0
        : D.InitFromClanID(e.clanAccountID, f.EUNIVERSE)
      : new D(e.strClanSteamID64);
  return (0, B.jsx)(Fi, {
    appid: e.appid,
    clanSteamID: a,
    strVanity: e.strOGGVanity,
    strGroupVanity: e.strGroupVanity,
    eventGID: r ? void 0 : e.eventGID,
    announcementGID: r ? e.eventGID : void 0,
    strURL: t,
  });
}
function Zi(e, t, n, r = !1) {
  if (Ui(t)) {
    let i = si(e, t);
    if (i)
      return (0, B.jsx)(Xi, {
        link: i,
        strURL: t,
        eventModel: n?.event,
        bAnnouncement: r,
      });
  }
  return F(t, n?.event);
}
function Qi(e, t) {
  return Zi(ai, e, t);
}
function $i(e, t) {
  return Zi(ii, e, t);
}
function ea(e, t) {
  return Zi(oi, e, t, !0);
}
var ta = /community.+sharedfiles\/filedetails\/\?id=\d+/i;
function na(e) {
  if (!ta.test(e)) return;
  let t = e.split(`?`);
  if (t.length == 2) return new URLSearchParams(t[1]).get(`id`) ?? void 0;
}
function ra(e) {
  let { sharedFileID: t } = e,
    { data: n } = rr(t),
    r = f.COMMUNITY_BASE_URL + `sharedfiles/filedetails/?id=`,
    i = n ?? {
      sharedfileid: t,
      title: A(`#Loading`),
      description: ``,
      type: ``,
      previewurl: ``,
      appid: 0,
      url: r + t,
    },
    a = se(i.url) ? r + i.url : i.url,
    o = i.personnaname !== void 0 && i.personnaname.length > 0;
  return (0, B.jsx)(Kr, {
    strURL: a,
    strTitle: i.title,
    strPreviewURL: i.previewurl,
    strType: i.type,
    strDescription: i.description,
    author:
      o &&
      mt(`#EventEditor_Author`, (0, B.jsx)(zn, { children: i.personnaname })),
    publishedfileid: t,
    appid: i.appid,
    bSizeToFit: i.bSizeToFit,
  });
}
var ia = `x-q4pa21GtQ-`,
  aa = `jjfjy77nkEg-`,
  oa = `xk1sG-uqpwY-`,
  sa = `XZqUhfrxufg-`,
  ca = `h4V9nI3kyqU-`,
  la = `gCqj4CIOecY-`,
  ua = /sketchfab\.com\/(?:models\/(?:[^/\s]+-)?)([a-z0-9]{32})/i;
function da(e) {
  return [`sketchfab_oembed`, e];
}
function fa(e) {
  return `https://sketchfab.com/oembed?url=https://sketchfab.com/models/${encodeURIComponent(e)}`;
}
function pa(e) {
  return {
    queryKey: da(e),
    queryFn: async () => {
      let t = await fetch(fa(e));
      if (t.status === 404) return null;
      if (!t.ok) throw Error(`sketchfab oembed returned ${t.status}`);
      return await t.json();
    },
    enabled: !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function ma(e) {
  return Kt(pa(e));
}
function ha(e) {
  let { modelID: t } = e,
    [n, r] = z.useState(!0),
    { data: i } = ma(t);
  if (n) {
    let e = () => r(!1);
    return (0, B.jsxs)(`div`, {
      className: oa,
      role: `button`,
      tabIndex: 0,
      onClick: e,
      onKeyDown: (t) => {
        (t.key === `Enter` || t.key === ` `) && (t.preventDefault(), e());
      },
      children: [
        i?.thumbnail_url &&
          (0, B.jsx)(`img`, {
            className: `FFbDls5-Ssk-`,
            src: i.thumbnail_url,
            alt: i.title,
          }),
        (0, B.jsx)(`img`, { className: ia, alt: `` }),
        (0, B.jsxs)(`div`, {
          className: sa,
          children: [
            (0, B.jsxs)(`div`, {
              className: ca,
              children: [
                (0, B.jsx)(`span`, {
                  className: la,
                  children: A(`#EventDisplay_Sketchfab`),
                }),
                i?.title && (0, B.jsxs)(`div`, { children: [i.title, `\xA0`] }),
              ],
            }),
            i?.author_name &&
              (0, B.jsx)(`div`, {
                className: `-r4s23p52-0-`,
                children: i.author_name,
              }),
          ],
        }),
      ],
    });
  }
  return (0, B.jsx)(`div`, {
    className: aa,
    children: (0, B.jsx)(`iframe`, {
      className: aa,
      title: i?.title ?? t,
      src: `https://sketchfab.com/models/${encodeURIComponent(t)}/embed?autostart=1`,
      frameBorder: 0,
      allowFullScreen: !0,
    }),
  });
}
var ga =
  /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.[\w.-]+\.steam\.dev|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
function _a(e) {
  let t = ga.exec(e),
    n = t ? Number(t[1]) : 0;
  return n > 0 ? n : void 0;
}
function va(e) {
  return Ui(e) ? _a(e) : void 0;
}
var ya = `_8mFolns3-hw-`;
function ba(e) {
  let { defid: t } = e,
    n = Bu(t);
  if (!n || !n.community_item_data) return null;
  let r = n.appid,
    i = n.community_item_data.item_image_large,
    a = `${f.MEDIA_CDN_COMMUNITY_URL}images/items/${r}/${i}`;
  return (0, B.jsx)(`div`, {
    className: ya,
    children: (0, B.jsx)(bt, {
      toolTipContent: n.community_item_data.item_description,
      children: (0, B.jsx)(`img`, {
        src: a,
        alt: n.community_item_data.item_title,
      }),
    }),
  });
}
var xa = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
  Sa = /twitter\.com\/(\w+)(\/?)$/i,
  Ca = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
  wa = /twitch\.tv\/(\w+)(\/?)$/i,
  Ta =
    /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i;
function Ea() {
  return f.EREALM === x.k_ESteamRealmChina;
}
var Da = new Map();
function Oa() {
  let e = f.EREALM,
    t = Da.get(e);
  return (
    t ||
      ((t = Ea()
        ? [
            { urlRegExp: new RegExp(Li), fnBBComponent: Pa },
            { urlRegExp: new RegExp(ii), fnBBComponent: $i },
            { urlRegExp: new RegExp(ai), fnBBComponent: Qi },
            { urlRegExp: new RegExp(oi), fnBBComponent: ea },
            { urlRegExp: new RegExp(Ta), fnBBComponent: Ba },
          ]
        : [
            {
              urlRegExp: new RegExp(/youtu.be|youtube.com/i),
              fnBBComponent: Gn,
            },
            { urlRegExp: new RegExp(ta), fnBBComponent: Na },
            { urlRegExp: new RegExp(Li), fnBBComponent: Pa },
            { urlRegExp: new RegExp(ii), fnBBComponent: $i },
            { urlRegExp: new RegExp(ai), fnBBComponent: Qi },
            { urlRegExp: new RegExp(oi), fnBBComponent: ea },
            { urlRegExp: new RegExp(xa), fnBBComponent: ja },
            { urlRegExp: new RegExp(ua), fnBBComponent: Ma },
            { urlRegExp: new RegExp(Sa), fnBBComponent: La },
            { urlRegExp: new RegExp(Ca), fnBBComponent: Ra },
            { urlRegExp: new RegExp(wa), fnBBComponent: za },
            { urlRegExp: new RegExp(Ta), fnBBComponent: Ba },
            { urlRegExp: new RegExp(ga), fnBBComponent: Ia },
          ]),
      Da.set(e, t)),
    t
  );
}
function ka(e) {
  return Oa().find((t) => !!t.urlRegExp.exec(e));
}
function Aa(e) {
  return z.useMemo(() => ka(e), [e]);
}
function ja(e, t) {
  if (Ea()) return null;
  let n = new RegExp(xa).exec(e);
  if (n && n.length > 1) {
    let e = n[1];
    if (e?.length > 0) {
      let n =
        `https://medal.tv/clip/` +
        e +
        `/?autoplay=0&donate=0` +
        (t && t.event ? `&steamappid=` + t.event.appid : ``);
      return (0, B.jsx)(`iframe`, {
        className: Zt,
        src: n,
        title: e,
        frameBorder: 0,
        allow: `autoplay`,
      });
    }
  }
  return F(e, t?.event);
}
function Ma(e, t) {
  let n = new RegExp(ua).exec(e);
  if (n && n.length > 1) {
    let e = n[1];
    if (e && e.length > 1) return (0, B.jsx)(ha, { modelID: e });
  }
  return F(e, t?.event);
}
function Na(e, t) {
  let n = na(e);
  return n === void 0 ? F(e, t?.event) : (0, B.jsx)(ra, { sharedFileID: n });
}
function Pa(e, t) {
  let n = Wi(e);
  return n
    ? (0, B.jsx)(Fa, {
        eventModel: t?.event,
        inputID: n.id,
        inputType: n.strItemType,
        fallbackUrl: e,
      })
    : F(e, t?.event);
}
function Fa(e) {
  let { inputID: t, inputType: n, eventModel: r, fallbackUrl: i } = e,
    a = yn(t, n),
    { data: o } = j(a),
    s = qi(r),
    c;
  return (
    s === null
      ? (c = !0)
      : s && o && (c = Ji(s, o.appid ? [o.appid] : (o.included_appids ?? []))),
    c === void 0
      ? null
      : c
        ? (0, B.jsx)(ri, { id: t, inputType: n, bApplyUserContentPref: !0 })
        : F(i, r)
  );
}
function Ia(e, n) {
  let r = va(e);
  return r
    ? (0, B.jsx)(`div`, {
        className: t(Xt),
        children: (0, B.jsx)(ba, { defid: r, url: e }),
      })
    : F(e, n?.event);
}
function La(e, t) {
  return Ea() ? null : Va(e, (0, B.jsx)(Ye, {}), `@`, t);
}
function Ra(e, t) {
  return Ea() ? null : Va(e, (0, B.jsx)(Ye, {}), `#`, t);
}
function za(e, t) {
  return Ea() ? null : Va(e, (0, B.jsx)(We, {}), void 0, t);
}
function Ba(e, t) {
  return Va(e, (0, B.jsx)(gt, {}), void 0, t);
}
function Va(e, t, n, r) {
  let i,
    a = e.endsWith(`/`) ? e.length - 1 : e.length,
    o = e.lastIndexOf(`/`, a - 1);
  o != -1 && o + 1 < e.length && (i = e.substring(o + 1, a)),
    n && i && (i = n + i);
  let s = F(e, r?.event, i ?? e);
  return (0, B.jsxs)(`div`, {
    className: Qt,
    children: [(0, B.jsx)(`div`, { className: $t, children: t }), s],
  });
}
function Ha(e) {
  switch (e) {
    case `button`:
      return t(tn, `LinkButton`);
    case `pill`:
      return t(cn, `LinkPill`);
    default:
      return t(Yt, `Link`);
  }
}
function Ua(e, t, n) {
  let r;
  return (
    (e == `button` || e == `pill`) && t && (r = { backgroundColor: t }),
    (e == `button` || e == `pill`) && n && (r = { ...(r ?? {}), color: n }),
    r
  );
}
function Wa(e, t) {
  let n = (
    typeof e == `string`
      ? e
      : Array.isArray(e) && e.length == 1 && typeof e[0] == `string`
        ? e[0]
        : void 0
  )?.trim();
  return !n || !t || n != t.trim();
}
function Ga(e) {
  let t = hr(L(e.args) || L(e.args, `href`)),
    n = L(e.args, `style`),
    r = L(e.args, `id`),
    i = ti(L(e.args, `buttoncolor`) || L(e.args, `bgcolor`), void 0),
    a = ti(L(e.args, `labelcolor`) || L(e.args, `color`), void 0),
    o = Ha(n),
    s = e.context.event,
    c = Sr(t, e.language, s?.rtime32_last_modified),
    l = Aa(Wa(e.children, t) ? `` : (t ?? ``));
  if (l && t) return l.fnBBComponent(t, { event: e.context.event });
  if (c === void 0 || c == null) return e.children || ``;
  t = typeof c == `string` ? c : c[1];
  let u = Ua(n, i, a);
  return typeof t == `string` && t.length > 0 && t[0] == `#`
    ? (0, B.jsx)(be, { className: o, href: t, style: u, children: e.children })
    : t == `steam://settings/account`
      ? (0, B.jsx)(ut, {
          className: o,
          href: `steam://settings/account`,
          children: e.children,
        })
      : (0, B.jsx)(An, {
          className: o,
          url: t,
          event: e.context.event,
          id: r,
          style: u,
          children: e.children,
        });
}
function Ka(e) {
  let t = L(e.args, `href`),
    n = Aa(t);
  return n
    ? n.fnBBComponent(t, { event: e.context.event })
    : (0, B.jsx)(Ga, { ...e });
}
var qa = `hPeepTEP2A0-`,
  Ja = `RzxfM12jbio-`,
  Ya = `kQJ64kMGQbg-`,
  Xa = `_74WMutU3Gxc-`,
  Za = (0, z.createContext)({});
function Qa() {
  return (0, z.useContext)(Za);
}
var $a = 5,
  eo = (function (e) {
    return (
      (e[(e.None = 0)] = `None`),
      (e[(e.Play = 1)] = `Play`),
      (e[(e.Pause = 2)] = `Pause`),
      e
    );
  })({}),
  V = class {
    m_elVideo = null;
    m_player = null;
    m_listeners = new Ee();
    m_persistState = {};
    m_fnOnPlaybackEnd;
    m_fnOnPlayPauseChange;
    m_fnOnMuteChange;
    m_bMuteWhenAutoplayBlocked = !1;
    m_strStatsURL = ``;
    m_bSentStats = !1;
    m_bPaused = !1;
    m_bUserInputNeeded = !1;
    m_bMuted = !1;
    m_nVolume = 1;
    m_eFailureReason = jr.Invalid;
    m_maxDimensions = null;
    m_bPlaybackStarted = !1;
    m_bBuffering = !0;
    m_bHasCaptions = !1;
    m_bShowingCaption = !1;
    m_nPlaybackTime = 0;
    m_nVideoStartTime = 0;
    m_nVideoDuration = 0;
    m_nBufferedEndTime = 0;
    constructor(e) {
      ce(this), (this.m_persistState = e || {});
    }
    IsPaused() {
      return this.m_bPaused;
    }
    GetUserInputNeeded() {
      return this.m_bUserInputNeeded;
    }
    GetPlaybackTime() {
      return this.m_nPlaybackTime;
    }
    GetBufferedEndTime() {
      return this.m_nBufferedEndTime;
    }
    GetTimelineDuration() {
      return this.m_nVideoDuration;
    }
    GetVolume() {
      return this.m_nVolume;
    }
    GetMuted() {
      return this.m_bMuted;
    }
    GetMaxVideoDimensions() {
      return this.m_maxDimensions;
    }
    HasPlaybackStarted() {
      return this.m_bPlaybackStarted;
    }
    IsBuffering() {
      return this.m_bBuffering;
    }
    HasCaptions() {
      return this.m_bHasCaptions;
    }
    IsShowingCaption() {
      return this.m_bShowingCaption;
    }
    Start(e, t, n, r, i) {
      this.Stop(),
        (this.m_strStatsURL = i || ``),
        (this.m_elVideo = e),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `playing`,
          this.OnVideoPlaying,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `pause`,
          this.OnVideoPause,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `timeupdate`,
          this.OnVideoTimeUpdate,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `volumechange`,
          this.OnVolumeChange,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `ended`,
          this.OnVideoEnd,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-ended`,
          this.OnVideoValveEnded,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-bufferupdate`,
          this.OnVideoTimeUpdate,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-downloadfailed`,
          this.OnDownloadFailed,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-userinputneeded`,
          this.OnUserInputNeeded,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-metadatachanged`,
          this.OnMetadataChanged,
        ),
        this.m_listeners.AddEventListener(
          this.m_elVideo,
          `valve-captionschange`,
          this.OnCaptionsChange,
        ),
        this.m_listeners.AddEventListener(window, `pagehide`, this.SendStats),
        (this.m_player = new Mr(this.m_elVideo)),
        this.m_player.SetTimeoutAfterFailedDownload(!1);
      let a =
        this.m_persistState.m_bAudioMuted !== void 0 &&
        this.m_persistState.m_bAudioMuted;
      this.SetMute(a, !0);
      let o =
        this.m_persistState.m_nPlayerVolume === void 0
          ? 1
          : this.m_persistState.m_nPlayerVolume;
      this.SetVolume(o, !0),
        this.m_player.SetMuteOnAutoplayBlocked(this.m_bMuteWhenAutoplayBlocked),
        this.m_player.PlayMPD(t, n, r);
    }
    Stop() {
      this.SendStats(),
        this.m_listeners.Unregister(),
        this.m_player && this.m_player.Close(),
        (this.m_elVideo = null),
        (this.m_player = null),
        (this.m_bPaused = !1),
        (this.m_bUserInputNeeded = !1),
        (this.m_nPlaybackTime = 0),
        (this.m_nVideoStartTime = 0),
        (this.m_nVideoDuration = 0),
        (this.m_nBufferedEndTime = 0);
    }
    IsInitialized() {
      return !!this.m_player && !!this.m_elVideo;
    }
    OnVideoPlaying() {
      let e = this.m_bPaused;
      (this.m_bPaused = !1),
        (this.m_bUserInputNeeded = !1),
        e && this.m_fnOnPlayPauseChange && this.m_fnOnPlayPauseChange(!0);
    }
    OnVideoPause() {
      let e = this.m_bPaused;
      (this.m_bPaused = !0),
        !e && this.m_fnOnPlayPauseChange && this.m_fnOnPlayPauseChange(!1);
    }
    OnVideoTimeUpdate() {
      this.IsInitialized() &&
        ((this.m_nVideoStartTime = this.m_player.GetAvailableVideoStartTime()),
        (this.m_nVideoDuration =
          this.m_player.GetBufferedLiveEdgeTime() - this.m_nVideoStartTime),
        (this.m_nPlaybackTime =
          this.m_player.GetCurrentPlayTime() - this.m_nVideoStartTime),
        (this.m_nBufferedEndTime =
          this.m_player.GetBufferedEndTime() - this.m_nVideoStartTime),
        (this.m_bBuffering = this.m_player.IsBuffering()),
        this.m_bBuffering || (this.m_bPlaybackStarted = !0));
    }
    OnVolumeChange() {
      this.IsInitialized() && this.SetMuteInternal(this.m_player.IsMuted());
    }
    OnVideoEnd() {}
    OnVideoValveEnded() {
      this.m_fnOnPlaybackEnd && this.m_fnOnPlaybackEnd();
    }
    OnDownloadFailed(e) {
      console.log(`video download failed`, e.detail),
        (this.m_eFailureReason = e.detail || jr.PlaybackError);
    }
    OnUserInputNeeded() {
      this.m_bUserInputNeeded = !0;
    }
    OnMetadataChanged() {
      if (!this.IsInitialized()) return;
      let e = this.m_player.GetMaxWidthAndHeight();
      e &&
        ((this.m_maxDimensions &&
          this.m_maxDimensions.nWidth == e.nWidth &&
          this.m_maxDimensions.nHeight == e.nHeight) ||
          (this.m_maxDimensions = e));
    }
    OnCaptionsChange() {
      this.IsInitialized() &&
        ((this.m_bHasCaptions = this.m_player.BHasTimedText()),
        (this.m_bShowingCaption = this.m_player.IsShowingCaption()));
    }
    UserInputReceived() {
      this.IsInitialized() &&
        ((this.m_bUserInputNeeded = !1), this.m_player.SeekAndPlay(0));
    }
    SetVolume(e, t = !1) {
      this.IsInitialized() &&
        ((this.m_nVolume = e),
        this.m_player.SetVolume(e),
        !t &&
          this.m_persistState.m_fnSetPlayerVolume &&
          this.m_persistState.m_fnSetPlayerVolume(e));
    }
    SetMute(e, t = !1) {
      this.IsInitialized() &&
        (this.SetMuteInternal(e),
        this.m_player.SetMuted(e),
        !t &&
          this.m_persistState.m_fnSetAudioMuted &&
          this.m_persistState.m_fnSetAudioMuted(e));
    }
    SetMuteInternal(e) {
      this.m_bMuted != e &&
        ((this.m_bMuted = e),
        this.m_fnOnMuteChange && this.m_fnOnMuteChange(e));
    }
    TogglePlayPauseState() {
      return this.IsInitialized() ? (this.m_player.IsPaused() ? 1 : 2) : 0;
    }
    TogglePlayPause() {
      return this.IsInitialized()
        ? this.m_player.IsPaused()
          ? (this.Play(), 1)
          : (this.Pause(), 2)
        : 0;
    }
    Play() {
      this.IsInitialized() &&
        (this.m_player.IsAtEnd() && this.m_player.Seek(0),
        this.m_player.Play());
    }
    Pause() {
      this.IsInitialized() && this.m_player.Pause();
    }
    Seek(e) {
      this.IsInitialized() && this.m_player.Seek(this.m_nVideoStartTime + e);
    }
    SeekRelative(e) {
      this.IsInitialized() && this.m_player.Seek(this.m_nPlaybackTime + e);
    }
    UpdatePersistState(e) {
      this.m_persistState != e &&
        ((this.m_persistState = e),
        this.IsInitialized() &&
          (e.m_nPlayerVolume !== void 0 &&
            this.SetVolume(e.m_nPlayerVolume, !0),
          e.m_bAudioMuted !== void 0 && this.SetMute(e.m_bAudioMuted, !0)));
    }
    SetMuteWhenAutoplayBlocked(e) {
      (this.m_bMuteWhenAutoplayBlocked = e),
        this.IsInitialized() && this.m_player.SetMuteOnAutoplayBlocked(e);
    }
    SetPlaybackEndCallback(e) {
      this.m_fnOnPlaybackEnd = e;
    }
    SetOnPlayPauseChangeCallback(e) {
      this.m_fnOnPlayPauseChange = e;
    }
    SetOnMuteChangeCallback(e) {
      this.m_fnOnMuteChange = e;
    }
    GetThumbnail(e) {
      return this.IsInitialized() ? this.m_player.GetThumbnail(e) : null;
    }
    GetVideoRepresentations() {
      return this.IsInitialized()
        ? this.m_player.GetVideoRepresentations()
        : [];
    }
    SetVideoRepresentation(e) {
      this.IsInitialized() && this.m_player.SetVideoRepresentation(e);
    }
    GetCaptionRepresentations() {
      return this.IsInitialized()
        ? this.m_player.GetCaptionRepresentations()
        : [];
    }
    SetCaptionRepresentation(e) {
      this.IsInitialized() && this.m_player.SetSubtitles(e);
    }
    DisableCaptions() {
      this.IsInitialized() && this.m_player.SetSubtitles(-1);
    }
    GetFailureReason() {
      return this.m_eFailureReason;
    }
    SendStats() {
      !this.m_bSentStats &&
        this.m_player &&
        this.m_strStatsURL &&
        (io(this.m_player, this.m_strStatsURL, this.m_eFailureReason),
        (this.m_bSentStats = !0));
    }
  };
S([u], V.prototype, `m_bPaused`, void 0),
  S([u], V.prototype, `m_bUserInputNeeded`, void 0),
  S([u], V.prototype, `m_bMuted`, void 0),
  S([u], V.prototype, `m_nVolume`, void 0),
  S([u], V.prototype, `m_eFailureReason`, void 0),
  S([u], V.prototype, `m_maxDimensions`, void 0),
  S([u], V.prototype, `m_bPlaybackStarted`, void 0),
  S([u], V.prototype, `m_bBuffering`, void 0),
  S([u], V.prototype, `m_bHasCaptions`, void 0),
  S([u], V.prototype, `m_bShowingCaption`, void 0),
  S([u], V.prototype, `m_nPlaybackTime`, void 0),
  S([u], V.prototype, `m_nVideoStartTime`, void 0),
  S([u], V.prototype, `m_nVideoDuration`, void 0),
  S([u], V.prototype, `m_nBufferedEndTime`, void 0),
  S([ee.bound], V.prototype, `OnVideoPlaying`, null),
  S([E], V.prototype, `OnVideoPause`, null),
  S([ee.bound], V.prototype, `OnVideoTimeUpdate`, null),
  S([E], V.prototype, `OnVolumeChange`, null),
  S([E], V.prototype, `OnVideoEnd`, null),
  S([E], V.prototype, `OnVideoValveEnded`, null),
  S([E], V.prototype, `OnDownloadFailed`, null),
  S([E], V.prototype, `OnUserInputNeeded`, null),
  S([ee.bound], V.prototype, `OnMetadataChanged`, null),
  S([ee.bound], V.prototype, `OnCaptionsChange`, null),
  S([E], V.prototype, `UserInputReceived`, null),
  S([ee.bound], V.prototype, `SetMuteInternal`, null),
  S([E], V.prototype, `SendStats`, null);
function to(e, t, n, r, i, a, o) {
  let s = Qa(),
    c = (0, z.useRef)(void 0);
  c.current ||= new V(s);
  let l = me(
    (i) => {
      if (i) return c.current.Start(i, e, t, n, r), () => c.current.Stop();
    },
    [c, e, t, r],
  );
  return (
    (0, z.useEffect)(() => {
      c.current.UpdatePersistState(s);
    }, [s]),
    (0, z.useEffect)(() => {
      c.current.SetPlaybackEndCallback(i);
    }, [i]),
    (0, z.useEffect)(() => {
      c.current.SetOnPlayPauseChangeCallback(a);
    }, [a]),
    (0, z.useEffect)(() => {
      c.current.SetOnMuteChangeCallback(o), o && o(c.current.GetMuted());
    }, [o]),
    [l, c.current]
  );
}
function no(e, t) {
  (t = !!t),
    (0, z.useEffect)(() => {
      e.SetMuteWhenAutoplayBlocked(t);
    }, [e, t]);
}
function ro(e, t) {
  let n = (0, z.useRef)(!1),
    r = (0, z.useRef)(!1),
    i = (0, z.useRef)(!1);
  return (
    (0, z.useEffect)(() => {
      n.current != t &&
        (t ? ((r.current = e.IsPaused()), e.Pause()) : r.current || e.Play(),
        (n.current = t));
    }, [t, n, r, e]),
    t || (i.current = !0),
    !i.current
  );
}
function io(e, t, n) {
  if (!navigator || navigator.sendBeacon === void 0) return;
  let r = e.GetDASHPlayerStats().GetPlayerStatsSummary(),
    i = e.GetAndCloseWatchedIntervals();
  if (i.reduce((e, t) => e + (t[1] - t[0]), 0) < $a && n == jr.Invalid) return;
  let a = {
      strManifest: e.IsPlayingHLS() ? e.GetHLSURL() : e.GetMPDURL(),
      watched: i,
      eFailureReason: n,
      ...r,
    },
    o = JSON.stringify(a),
    s = new FormData();
  s.append(`stats`, o), navigator.sendBeacon(t, s);
}
function ao(e, t) {
  if (!e || ve(e) || xe(e) || !t) return;
  let n = e.getElementsByTagName(`video`);
  if (n.length == 0) return;
  let r = n[0];
  r.webkitSetPresentationMode && r.webkitSetPresentationMode(`fullscreen`);
}
(0, z.createContext)(void 0);
function oo(e) {
  return e ? e instanceof HTMLDialogElement : !1;
}
function so(e) {
  return e ? e.hasAttribute(`popover`) : !1;
}
var co = (0, z.createContext)(void 0);
function lo(t) {
  let {
      iosVideoFallback: n,
      supportsTheater: r,
      supportsFullscreen: i,
      children: a,
    } = t,
    o = (0, z.useRef)(null),
    s = (0, z.useRef)(null),
    [c, l] = (0, z.useState)(`none`);
  lt(c == `theater`), (r = !!r), (i = !!i);
  let u = me(
      (e) => {
        if (((s.current = e), !e)) return;
        let t = () => {
          l((t) => (ve(e) ? `fullscreen` : t == `fullscreen` ? `none` : t));
        };
        return (
          e.addEventListener(`fullscreenchange`, t),
          () => e.removeEventListener(`fullscreenchange`, t)
        );
      },
      [l],
    ),
    d = me(
      (t) => {
        if (((o.current = t), !t)) return;
        let n = () => {
            l((e) => (e == `theater` ? `none` : e));
          },
          r = (e) => {
            e.currentTarget == e.target && oo(t) && t.close();
          },
          i = (e) => {
            e.newState == `close` && n();
          },
          a = new Ee();
        return (
          oo(t)
            ? (a.AddEventListener(t, `close`, n),
              a.AddEventListener(t, `click`, r))
            : so(t)
              ? a.AddEventListener(t, `beforetoggle`, i)
              : e(!1, `Was expecting a dialog or popover`),
          () => a.Unregister()
        );
      },
      [l],
    ),
    f = (0, z.useCallback)(
      (e) => {
        let t = s.current,
          r = o.current;
        t &&
          (e != `fullscreen` && ve(t) && Te(t),
          e == `fullscreen` && ao(t, !!n)),
          oo(r) &&
            (e != `theater` && r.open && r.close(),
            e == `theater` && r.showModal()),
          so(r) &&
            (e != `theater` && r.matches(`:popover-open`) && r.hidePopover(),
            e == `theater` && r.showPopover()),
          l(e);
      },
      [n],
    );
  (0, z.useEffect)(() => {
    c == `theater` && !r && f(`none`);
  }, [f, c, r]);
  let p = (0, z.useMemo)(
    () => ({
      refFullscreen: u,
      refTheater: d,
      strMode: c,
      bSupportsTheater: r,
      bSupportsFullscreen: i,
      fnSetMode: f,
    }),
    [u, d, c, r, i, f],
  );
  return (0, B.jsx)(co.Provider, { value: p, children: a });
}
function uo() {
  return (0, z.useContext)(co);
}
function fo(e, t) {
  return (0, z.useCallback)(() => {
    e && (e.strMode == t ? e.fnSetMode(`none`) : e.fnSetMode(t));
  }, [e, t]);
}
var po = `A5RRwjvEUvY-`,
  mo = `-H-CbOmskAk-`,
  ho = `BhmPQ-Xd2d8-`,
  go = `_7zvFUI6bX2k-`,
  _o = `uacZ-90MOII-`,
  vo = `k9Sm1n-4mwI-`,
  yo = `EE0MOLi31qY-`,
  bo = `_7GE4TR2MB3I-`,
  xo = `pQYV6KivA1I-`,
  So = `pEu8vzuL1UY-`,
  Co = `ntDKWvpd0tk-`,
  wo = `m9RGLw-x46M-`;
function To() {
  return me((e) => {
    if (!e) return;
    let t = (t) => {
        t.target == e && (e.style.pointerEvents = `none`);
      },
      n = (t) => {
        t.target == e && (e.style.pointerEvents = `auto`);
      };
    return (
      e.addEventListener(`transitionstart`, t),
      e.addEventListener(`transitionend`, n),
      e.addEventListener(`transitioncancel`, n),
      () => {
        e.removeEventListener(`transitionstart`, t),
          e.removeEventListener(`transitionend`, n),
          e.removeEventListener(`transitioncancel`, n);
      }
    );
  }, []);
}
var Eo = (0, z.forwardRef)(function (e, t) {
    let { children: n, ...r } = e,
      i = To(),
      a = de(i, t);
    return (0, B.jsx)(`div`, { ref: a, ...r, children: n });
  }),
  Do = 2e3,
  Oo = 500,
  ko = 4e3,
  Ao = -1,
  jo = z.createContext(void 0);
function Mo() {
  return (0, z.useContext)(jo);
}
function No(e, t, n) {
  return (0, z.useMemo)(
    () => ({ m_bMenuVisible: e, m_fnSetMenuVisible: t, m_refMenuLayer: n }),
    [e, t, n],
  );
}
function Po() {
  let e = Mo();
  return e ? e.m_bMenuVisible : !1;
}
function Fo() {
  let t = Mo();
  e(t, `Missing controls context`);
  let n = t.m_fnSetMenuVisible;
  return (0, z.useEffect)(() => (n(!0), () => n(!1)), [n]), t.m_refMenuLayer;
}
function Io(e, t) {
  let [n, r] = zo(e);
  return [n || t, r];
}
function Lo(e) {
  return e.pointerType == `touch` ? ko : Do;
}
function Ro() {
  return Oo;
}
function zo(e) {
  let [t, n] = Ho(),
    r = (0, z.useRef)(void 0),
    i = (0, z.useRef)(!1),
    a = (0, z.useRef)({ element: void 0, bKeepControls: !1 }),
    o = (0, z.useCallback)(
      (e) => {
        if (e.target == a.current.element) return;
        let t = Bo(e);
        a.current = { element: e.target, bKeepControls: t };
      },
      [a],
    ),
    s = (0, z.useCallback)(
      (e) => {
        a.current.bKeepControls || i.current ? n(!0, 0) : n(!0, e);
      },
      [a, i, n],
    );
  Jo(e),
    Uo(
      e,
      (0, z.useCallback)(
        (e) => {
          (i.current = e), s(Do);
        },
        [i, s],
      ),
    ),
    Wo(
      e,
      (0, z.useCallback)(() => {
        s(Do);
      }, [s]),
    );
  let c = (0, z.useCallback)(
      (e) => {
        e.pointerType != `touch` && (o(e), s(Lo(e)));
      },
      [s, o],
    ),
    l = (0, z.useCallback)(
      (e) => {
        e.pointerType != `touch` && (o(e), s(Lo(e)));
      },
      [o, s],
    ),
    u = (0, z.useCallback)(
      (e) => {
        e.pointerType != `touch` &&
          ((a.current = { element: void 0, bKeepControls: !1 }), s(Ro()));
      },
      [a, s],
    ),
    d = (0, z.useCallback)(
      (e) => {
        r.current = e.currentTarget;
      },
      [r],
    ),
    f = (0, z.useCallback)(
      (e) => {
        r.current = void 0;
      },
      [r],
    );
  return [
    t,
    {
      onPointerEnter: c,
      onPointerMove: l,
      onPointerLeave: u,
      onPointerDown: d,
      onPointerUp: (0, z.useCallback)(
        (e) => {
          let t = r.current;
          (r.current = void 0), e.currentTarget == t && s(Lo(e));
        },
        [s],
      ),
      onPointerCancel: f,
    },
  ];
}
function Bo(e) {
  let t = e.target,
    n = e.currentTarget;
  for (; t && t != n; ) {
    if (t.dataset?.keepcontrols == `true`) return !0;
    t = t.parentElement;
  }
  return !1;
}
function Vo(e) {
  let t = (0, z.useRef)(Ao);
  return {
    onPointerDown: (0, z.useCallback)(
      (e) => {
        (e.pointerType !== `mouse` || e.button == 0) &&
          (e.currentTarget.setPointerCapture(e.pointerId),
          (t.current = e.pointerId));
      },
      [t],
    ),
    onPointerCancel: (0, z.useCallback)(
      (e) => {
        t.current == e.pointerId && (t.current = Ao);
      },
      [t],
    ),
    onPointerUp: (0, z.useCallback)(
      (n) => {
        if (t.current != n.pointerId) return;
        n.currentTarget.releasePointerCapture(n.pointerId), (t.current = Ao);
        let r = n.currentTarget.getBoundingClientRect(),
          { clientX: i, clientY: a } = n;
        i >= r.left && i <= r.right && a >= r.top && a <= r.bottom && e(n);
      },
      [t, e],
    ),
  };
}
function Ho() {
  let [e, t] = (0, z.useState)(!1),
    n = (0, z.useRef)(void 0),
    r = (0, z.useCallback)(
      (e, r) => {
        (n.current &&= (window.clearTimeout(n.current), void 0)),
          t(e),
          e && r != 0 && (n.current = window.setTimeout(() => t(!1), r));
      },
      [t],
    );
  return (
    (0, z.useEffect)(
      () => () => {
        n.current && window.clearTimeout(n.current);
      },
      [],
    ),
    [e, r]
  );
}
function Uo(e, t) {
  let n = (0, z.useRef)(!0),
    r = Jo(e);
  (0, z.useEffect)(() => {
    let e = n.current;
    (n.current = !1), (!e || r) && t(r);
  }, [r, t, n]);
}
function Wo(e, t) {
  let n = (0, z.useRef)(!0),
    r = N(() => e.GetMuted());
  (0, z.useEffect)(() => {
    let e = n.current;
    (n.current = !1), !e && t();
  }, [r, t, n]);
}
function Go(e) {
  let [t, n] = N(() => [e.GetMuted(), e.GetVolume()]);
  return [
    t,
    n,
    (0, z.useCallback)(
      (t) => {
        e.SetMute(!1), e.SetVolume(t);
      },
      [e],
    ),
    (0, z.useCallback)(() => e.SetMute(!t), [t, e]),
  ];
}
function Ko(e) {
  return N(() => [
    e.GetPlaybackTime(),
    e.GetTimelineDuration(),
    e.GetBufferedEndTime(),
  ]);
}
function qo(e) {
  return N(() => e.GetFailureReason());
}
function Jo(e) {
  return N(() => e.IsPaused());
}
function Yo(e) {
  return (0, z.useCallback)(() => {
    e.TogglePlayPause();
  }, [e]);
}
function Xo(e, t) {
  (0, z.useEffect)(() => {
    let n = ne(() => {
      let n = e.GetMaxVideoDimensions();
      t(n ? { nWidth: n.nWidth, nHeight: n.nHeight } : null);
    });
    return () => n();
  }, [e, t]);
}
function Zo(e) {
  return N(() => e.HasPlaybackStarted());
}
function Qo(e) {
  return N(() => ({
    bHasCaptions: e.HasCaptions(),
    bShowingCaption: e.IsShowingCaption(),
  }));
}
var $o = `cOcEiRe-dIg-`,
  es = `QkF4JCVWpWw-`,
  ts = `_8RH876Wgr7A-`,
  ns = `b0G5PgYKHAM-`,
  rs = `_68B-8ItOIlc-`,
  is = `GsDewiltMCM-`,
  as = `BffT7IQWKYg-`,
  os = `aejFKWIp7Dg-`,
  ss = `eBjRkRA8NpA-`,
  cs = `RrXwg35xzWc-`,
  ls = `_98b2uQrBfN4-`,
  us = `LCeQJ5hJTnk-`,
  ds = `OPuK3adv80Y-`,
  fs = `qFZtjvdCOxo-`,
  ps = `vzX4l4uGgUg-`,
  ms = `HOEA4Jz0kQU-`,
  hs = `AAuicaihzn0-`,
  H = {};
(H.arabic = () =>
  k(() => import(`./video_players_arabic.js`), [], import.meta.url)),
  (H.brazilian = () =>
    k(() => import(`./video_players_brazilian.js`), [], import.meta.url)),
  (H.bulgarian = () =>
    k(() => import(`./video_players_bulgarian.js`), [], import.meta.url)),
  (H.czech = () =>
    k(() => import(`./video_players_czech.js`), [], import.meta.url)),
  (H.danish = () =>
    k(() => import(`./video_players_danish.js`), [], import.meta.url)),
  (H.dutch = () =>
    k(() => import(`./video_players_dutch.js`), [], import.meta.url)),
  (H.english = () =>
    k(() => import(`./video_players_english.js`), [], import.meta.url)),
  (H.finnish = () =>
    k(() => import(`./video_players_finnish.js`), [], import.meta.url)),
  (H.french = () =>
    k(() => import(`./video_players_french.js`), [], import.meta.url)),
  (H.german = () =>
    k(() => import(`./video_players_german.js`), [], import.meta.url)),
  (H.greek = () =>
    k(() => import(`./video_players_greek.js`), [], import.meta.url)),
  (H.hungarian = () =>
    k(() => import(`./video_players_hungarian.js`), [], import.meta.url)),
  (H.indonesian = () =>
    k(() => import(`./video_players_indonesian.js`), [], import.meta.url)),
  (H.italian = () =>
    k(() => import(`./video_players_italian.js`), [], import.meta.url)),
  (H.japanese = () =>
    k(() => import(`./video_players_japanese.js`), [], import.meta.url)),
  (H.koreana = () =>
    k(() => import(`./video_players_koreana.js`), [], import.meta.url)),
  (H.latam = () =>
    k(() => import(`./video_players_latam.js`), [], import.meta.url)),
  (H.malay = () =>
    k(() => import(`./video_players_malay.js`), [], import.meta.url)),
  (H.norwegian = () =>
    k(() => import(`./video_players_norwegian.js`), [], import.meta.url)),
  (H.polish = () =>
    k(() => import(`./video_players_polish.js`), [], import.meta.url)),
  (H.portuguese = () =>
    k(() => import(`./video_players_portuguese.js`), [], import.meta.url)),
  (H.romanian = () =>
    k(() => import(`./video_players_romanian.js`), [], import.meta.url)),
  (H.russian = () =>
    k(() => import(`./video_players_russian.js`), [], import.meta.url)),
  (H.sc_schinese = () =>
    k(() => import(`./video_players_sc_schinese.js`), [], import.meta.url)),
  (H.schinese = () =>
    k(() => import(`./video_players_schinese.js`), [], import.meta.url)),
  (H.spanish = () =>
    k(() => import(`./video_players_spanish.js`), [], import.meta.url)),
  (H.swedish = () =>
    k(() => import(`./video_players_swedish.js`), [], import.meta.url)),
  (H.tchinese = () =>
    k(() => import(`./video_players_tchinese.js`), [], import.meta.url)),
  (H.thai = () =>
    k(() => import(`./video_players_thai.js`), [], import.meta.url)),
  (H.turkish = () =>
    k(() => import(`./video_players_turkish.js`), [], import.meta.url)),
  (H.ukrainian = () =>
    k(() => import(`./video_players_ukrainian.js`), [], import.meta.url)),
  (H.vietnamese = () =>
    k(() => import(`./video_players_vietnamese.js`), [], import.meta.url));
async function gs(e) {
  if (H[e]) return await H[e]();
}
var U = Vt(gs);
function _s(e) {
  switch (e) {
    case 1:
      return U.Localize(`#StoreTrailer_Title_Category_Gameplay`);
    case 2:
      return U.Localize(`#StoreTrailer_Title_Category_Teaser`);
    case 3:
      return U.Localize(`#StoreTrailer_Title_Category_Cinematic`);
    case 4:
      return U.Localize(`#StoreTrailer_Title_Category_Update`);
    case 5:
      return U.Localize(`#StoreTrailer_Title_Category_Accolades`);
    case 6:
      return U.Localize(`#StoreTrailer_Title_Category_Interview`);
  }
  return U.Localize(`#StoreTrailer_Title_Category_Unknown`);
}
var vs = `12px`,
  ys = `LzRinklSJ-4-`,
  bs = `_2uk-hbrhKFI-`,
  xs = `Y9S-qDK8XPE-`,
  Ss = 4,
  Cs = parseInt(vs);
function ws(e) {
  let { refButton: r, onClose: i, scroll: a, children: o } = e,
    s = (0, z.useRef)(null),
    [c, l] = (0, z.useState)({ nLeft: 0, nTop: 0 }),
    u = Fo(),
    d = me(
      (e) => {
        if (((s.current = e), !e)) return;
        let t = (t) => {
          let n = ue(e, t.target),
            a = ue(r.current, t.target);
          !n && !a && i();
        };
        if (e.ownerDocument.defaultView)
          return (
            e.ownerDocument.defaultView.addEventListener(`mouseup`, t),
            () => e.ownerDocument.defaultView?.removeEventListener(`mouseup`, t)
          );
      },
      [s, i, r],
    );
  if (
    ((0, z.useLayoutEffect)(() => {
      if (!s.current || !r.current || !u.current) return;
      let e = s.current.getBoundingClientRect(),
        t = u.current.getBoundingClientRect(),
        i = r.current.getBoundingClientRect(),
        a = t.right - t.left,
        o = i.right - i.left,
        c = i.left - t.left + o / 2,
        d = e.right - e.left,
        f = n(c - d / 2, 0 + Ss, a - d - Ss),
        p = e.bottom - e.top,
        m = i.top - Cs - p - t.top;
      l({ nLeft: f, nTop: m });
    }, [s, r, u]),
    !u.current || !o)
  )
    return null;
  let f = { left: c.nLeft, top: c.nTop },
    p = t(ys, !!a && `kaHR0KlvcO4-`),
    m = (0, B.jsx)(`div`, {
      ref: d,
      style: f,
      className: p,
      role: `menu`,
      children: o,
    });
  return qr.createPortal(m, u.current);
}
function Ts(e) {
  return (0, B.jsx)(`div`, { className: xs, role: `separator` });
}
function Es(e) {
  let { onClick: n, checked: r, children: i } = e,
    [a, o] = Ue(),
    s = t(bs, r && `vi2dzrdIGJY-`),
    c = `#2d73ff`,
    l = `#00ccff`;
  return (
    a && ((c = `#eeeeee`), (l = `#ffffff`)),
    (0, B.jsxs)(`div`, {
      className: s,
      role: `menuitemcheckbox`,
      "aria-checked": r,
      tabIndex: 0,
      onClick: n,
      onKeyDown: (e) => {
        (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), n());
      },
      ...o,
      children: [i, r && (0, B.jsx)(xt, { color: c, highlightColor: l })],
    })
  );
}
function Ds(e) {
  let { player: t, refButton: n, onClose: r } = e,
    i = Qa(),
    a = t.GetVideoRepresentations().map((e) => {
      let n = () => {
          t.SetVideoRepresentation(e), r();
        },
        i = ks(e);
      return (0, B.jsx)(
        Es,
        { onClick: n, checked: e.selected, children: i },
        e.id,
      );
    }),
    o = a.length > 1,
    s = !!i.m_fnSetAutoplayEnabled,
    c = o || !s;
  return (0, B.jsxs)(ws, {
    refButton: n,
    onClose: r,
    children: [
      c && a,
      s && c && (0, B.jsx)(Ts, {}),
      s && (0, B.jsx)(Os, { onClose: r }),
    ],
  });
}
function Os(e) {
  let { onClose: t } = e,
    n = Qa(),
    r = n.m_bAutoplayEnabled == 1,
    i = (0, z.useCallback)(() => {
      n.m_fnSetAutoplayEnabled && n.m_fnSetAutoplayEnabled(!r), t();
    }, [r, n, t]);
  return (
    z.use(U.Ready()),
    (0, B.jsx)(Es, {
      onClick: i,
      checked: r,
      children: U.Localize(`#StoreTrailer_AutoPlayVideos`),
    })
  );
}
function ks(e) {
  return Ar(e)
    ? U.Localize(`#TrailerPlayer_Quality_Auto`)
    : e.height == 2160
      ? `2160p (4k)`
      : `${e.height}p`;
}
function As(e) {
  let { player: t, refButton: n, onClose: r } = e,
    i = b(f.LANGUAGE),
    a = (0, z.useMemo)(() => {
      let e = [...t.GetCaptionRepresentations()],
        n = e.findIndex((e) => e.m_eLanguage == i);
      return n > 0 && _e(e, n, 0), e;
    }, [i, t]),
    o = [];
  for (let e of a)
    o.push(
      (0, B.jsx)(
        Es,
        {
          onClick: () => {
            t.SetCaptionRepresentation(e.m_eLanguage), r();
          },
          checked: !1,
          children: e.m_strLabel,
        },
        e.m_eLanguage,
      ),
    ),
      e.m_eLanguage == i && o.push((0, B.jsx)(Ts, {}));
  return o.length == 0
    ? null
    : (0, B.jsx)(ws, { refButton: n, onClose: r, scroll: !0, children: o });
}
var js = 4,
  Ms = 130,
  W = z.forwardRef(function (e, t) {
    let {
        tooltip: n,
        onActivate: r,
        size: i,
        children: a,
        disableTooltip: o,
      } = e,
      s = Po(),
      c = Vo(r);
    return (0, B.jsx)(bt, {
      toolTipContent: n,
      direction: `top`,
      usePointerEvents: !0,
      bDisabled: s || o,
      children: (0, B.jsx)(`div`, {
        ref: t,
        className: $o,
        ...c,
        "data-keepcontrols": !0,
        children: a,
      }),
    });
  });
function Ns(e) {
  let { player: t } = e,
    [n, r] = Ko(t),
    i = Le(n, !1),
    a = Le(r, !1);
  return (0, B.jsxs)(`div`, {
    className: es,
    children: [
      (0, B.jsx)(`span`, { children: i }),
      (0, B.jsx)(`span`, { className: ts, children: `/` }),
      (0, B.jsx)(`span`, { children: a }),
    ],
  });
}
function Ps(e) {
  let t = uo(),
    n = fo(t, `theater`);
  if (!t || !t.bSupportsTheater) return null;
  z.use(U.Ready());
  let r = t.strMode == `theater`,
    i = r ? (0, B.jsx)(kr, {}) : (0, B.jsx)(Or, {}),
    a = U.Localize(
      r
        ? `#TrailerPlayer_ExitTheater_Tooltip`
        : `#TrailerPlayer_EnterTheater_Tooltip`,
    );
  return (0, B.jsx)(W, { onActivate: n, tooltip: a, children: i });
}
function Fs(e) {
  let t = uo(),
    n = fo(t, `fullscreen`);
  if (!t || !t.bSupportsFullscreen) return null;
  z.use(U.Ready());
  let r = t.strMode == `fullscreen`,
    i = r ? (0, B.jsx)(He, {}) : (0, B.jsx)(Dr, {}),
    a = U.Localize(
      r
        ? `#TrailerPlayer_ExitFullScreen_Tooltip`
        : `#TrailerPlayer_FullScreen_Tooltip`,
    );
  return (0, B.jsx)(W, { onActivate: n, tooltip: a, children: i });
}
function Is(e) {
  let { player: n } = e,
    [r, i] = (0, z.useState)(!1),
    a = (0, z.useCallback)(() => i(!1), [i]),
    o = (0, z.useRef)(null),
    s = le(),
    c = (0, z.useCallback)(() => {
      i((e) => !e);
    }, [i]),
    l = t(ns, r && `cXAaD-hLPZ0-`);
  return (
    z.use(U.Ready()),
    (0, B.jsxs)(B.Fragment, {
      children: [
        (0, B.jsx)(W, {
          ref: o,
          onActivate: c,
          tooltip: U.Localize(`#TrailerPlayer_Settings_Tooltip`),
          disableTooltip: s,
          children: (0, B.jsx)(st, { className: l }),
        }),
        r && (0, B.jsx)(Ds, { player: n, refButton: o, onClose: a }),
      ],
    })
  );
}
function Ls(e) {
  let { player: t } = e,
    [n, r] = (0, z.useState)(!1),
    i = (0, z.useCallback)(() => r(!1), [r]),
    a = (0, z.useRef)(null),
    { bHasCaptions: o, bShowingCaption: s } = Qo(t),
    c = (0, z.useCallback)(() => {
      s ? t.DisableCaptions() : r((e) => !e);
    }, [r, t, s]);
  return (
    z.use(U.Ready()),
    o
      ? (0, B.jsxs)(B.Fragment, {
          children: [
            (0, B.jsxs)(W, {
              ref: a,
              onActivate: c,
              tooltip: U.Localize(`#TrailerPlayer_Captions_Tooltip`),
              children: [s && (0, B.jsx)(ht, {}), !s && (0, B.jsx)(Me, {})],
            }),
            n && (0, B.jsx)(As, { player: t, refButton: a, onClose: i }),
          ],
        })
      : null
  );
}
function Rs(e) {
  let { player: n, showHoverThumb: r, onTouchSeek: a } = e;
  z.use(U.Ready());
  let o = (0, z.useRef)(null),
    [s, c, l] = Ko(n),
    [u, d] = Us(n, a),
    f = zs();
  Po() && (d = null);
  let p = Vs(n);
  d || (p = void 0);
  let m = { display: `none` };
  d && ((m.left = d.nTickOffset), (m.display = `block`));
  let h = i(s, 0, c, 0, 100),
    g = i(l, 0, c, 0, 100),
    _ = { width: `${h.toFixed(1)}%` },
    v = { width: `${g.toFixed(1)}%` },
    y = (e) => {
      e.key === `Home`
        ? (e.preventDefault(), n.Seek(0))
        : e.key === `End` &&
          (e.preventDefault(), n.Seek(n.GetTimelineDuration()));
    },
    b = t(rs, d && `OXlEV5w6w1E-`);
  return (0, B.jsxs)(`div`, {
    ref: f,
    className: b,
    "data-keepcontrols": !!d,
    role: `slider`,
    tabIndex: 0,
    "aria-label": U.Localize(`#TrailerPlayer_Seek_Label`),
    "aria-valuemin": 0,
    "aria-valuemax": Math.round(c),
    "aria-valuenow": Math.round(s),
    "aria-valuetext": `${Le(s, !1)} / ${Le(c, !1)}`,
    onClick: p,
    onKeyDown: y,
    onPointerMove: u.onPointerMove,
    onPointerLeave: u.onPointerLeave,
    onPointerDown: u.onPointerDown,
    onLostPointerCapture: u.onLostPointerCapture,
    children: [
      (0, B.jsxs)(`div`, {
        ref: o,
        className: is,
        onPointerEnter: u.onPointerEnter,
        children: [
          (0, B.jsx)(`div`, { className: t(as, os), style: v }),
          (0, B.jsx)(`div`, { className: t(as, ss), style: _ }),
          (0, B.jsx)(`div`, { className: t(cs), style: m }),
        ],
      }),
      (0, B.jsx)(Bs, { refTimeline: o, hoverState: d, showHoverThumb: r }),
    ],
  });
}
function zs() {
  return me((e) => {
    if (!e) return;
    let t = (e) => {
        e.stopPropagation();
      },
      n = (e) => {
        e.stopPropagation();
      };
    return (
      e.addEventListener(`touchstart`, t, { passive: !1 }),
      e.addEventListener(`touchend`, n, { passive: !1 }),
      () => {
        e.removeEventListener(`touchstart`, t),
          e.removeEventListener(`touchend`, n);
      }
    );
  }, []);
}
function Bs(e) {
  let { refTimeline: t, hoverState: r, showHoverThumb: i } = e,
    a = (0, z.useRef)(null),
    [o, s] = (0, z.useState)({ nHoverLeft: 0, bFitsInParent: !1 });
  if (
    ((0, z.useLayoutEffect)(() => {
      if (!r || !a.current || !t.current) return;
      let e = t.current.getBoundingClientRect(),
        i = a.current.getBoundingClientRect(),
        o = e.right - e.left,
        c = i.right - i.left,
        l = n(r.nTickOffset - c / 2, 0 + js, o - c - js),
        u = Se(
          a.current.ownerDocument.documentElement,
          a.current,
          `data-trailer-player`,
        ),
        d = !0;
      if (u) {
        let e = u.getBoundingClientRect();
        d = i.top > e.top;
      }
      s((e) =>
        e.nHoverLeft == l && e.bFitsInParent == d
          ? e
          : { nHoverLeft: l, bFitsInParent: d },
      );
    }, [r, a, t, s]),
    !r)
  )
    return null;
  let c = {
      left: o.nHoverLeft,
      visibility: o.bFitsInParent ? `visible` : `hidden`,
    },
    l,
    u = i ? r.thumbnail : null;
  if (u) {
    let e = Ms / u.nThumbnailHeight;
    l = {
      width: `${u.nThumbnailWidth * e}px`,
      height: `${u.nThumbnailHeight * e}px`,
      backgroundImage: `url(${u.strTileURL})`,
      backgroundPosition: `-${u.x * e}px -${u.y * e}px`,
      backgroundSize: `${u.nImageWidth * e}px ${u.nImageHeight * e}px`,
      backgroundRepeat: `no-repeat`,
    };
  }
  return (0, B.jsxs)(`div`, {
    ref: a,
    style: c,
    className: ls,
    children: [
      !!u && (0, B.jsx)(`div`, { style: l, className: `nCXGrQlbkbg-` }),
      (0, B.jsx)(`span`, {
        className: us,
        children: kn(r.nPlaybackSeconds, !0),
      }),
    ],
  });
}
function Vs(e) {
  return (0, z.useCallback)(
    (t) => {
      let n = t.currentTarget.getBoundingClientRect(),
        r = (t.pageX - n.left) / (n.right - n.left);
      e.Seek(r * e.GetTimelineDuration()),
        t.preventDefault(),
        t.stopPropagation();
    },
    [e],
  );
}
function Hs(e, t, r) {
  let i = r - t.left,
    a = t.right - t.left;
  i = n(i, 0, a);
  let o = i / a,
    s = Math.floor(e.GetTimelineDuration() * o),
    c = e.GetThumbnail(s);
  return c ? { nTickOffset: i, nPlaybackSeconds: s, thumbnail: c } : null;
}
function Us(e, t) {
  let [n, r] = (0, z.useState)(null),
    i = (0, z.useRef)(null),
    a = (0, z.useRef)(null);
  return [
    {
      onPointerEnter: (0, z.useCallback)(
        (t) => {
          if (t.pointerType != `mouse` && t.pointerType != `pen`) return;
          i.current = t.currentTarget;
          let n = Hs(e, i.current.getBoundingClientRect(), t.clientX);
          r(n);
        },
        [i, r, e],
      ),
      onPointerMove: (0, z.useCallback)(
        (n) => {
          let o = i.current;
          if (((o ||= a.current), !o)) return;
          let s = Hs(e, o.getBoundingClientRect(), n.clientX);
          r(s),
            a.current &&
              t &&
              t(
                s
                  ? {
                      thumbnail: s.thumbnail,
                      nPlaybackSeconds: s.nPlaybackSeconds,
                    }
                  : null,
              );
        },
        [i, a, e, r, t],
      ),
      onPointerLeave: (0, z.useCallback)(
        (e) => {
          i.current && ((i.current = null), r((e) => null));
        },
        [r],
      ),
      onPointerDown: (0, z.useCallback)(
        (n) => {
          (a.current = n.currentTarget),
            a.current.setPointerCapture(n.pointerId),
            (document.body.style.userSelect = `none`);
          let i = Hs(e, a.current.getBoundingClientRect(), n.clientX);
          r(i),
            t &&
              t(
                i
                  ? {
                      thumbnail: i.thumbnail,
                      nPlaybackSeconds: i.nPlaybackSeconds,
                    }
                  : null,
              );
        },
        [a, t, e],
      ),
      onLostPointerCapture: (0, z.useCallback)(
        (e) => {
          a.current &&
            ((a.current = null),
            (document.body.style.userSelect = ``),
            i.current || r(null),
            t && t(null));
        },
        [a, i, t, r],
      ),
    },
    n,
  ];
}
function Ws(e) {
  let { player: t } = e,
    n = qo(t);
  z.use(U.Ready());
  let r = ``;
  return (
    n == jr.UnsupportedMediaType
      ? (r = U.Localize(`#TrailerPlayer_Error_UnsupportedCodec`))
      : n != jr.Invalid && (r = U.Localize(`#TrailerPlayer_Error_Playback`)),
    r
      ? (0, B.jsx)(`div`, {
          className: ds,
          children: (0, B.jsx)(`span`, { children: r }),
        })
      : null
  );
}
function Gs(e) {
  let { player: t } = e,
    [n, r, i, a] = Go(t);
  z.use(U.Ready());
  let o = le(),
    s = n ? (0, B.jsx)(ze, {}) : (0, B.jsx)(Dt, {}),
    c = U.Localize(
      n ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
    );
  return (0, B.jsx)(W, {
    onActivate: a,
    tooltip: c,
    disableTooltip: o,
    children: s,
  });
}
function Ks(e) {
  let { player: t } = e,
    n = Jo(t);
  z.use(U.Ready());
  let r = n ? (0, B.jsx)(Er, {}) : (0, B.jsx)(Tr, {}),
    i = U.Localize(
      n ? `#TrailerPlayer_Play_Tooltip` : `#TrailerPlayer_Pause_Tooltip`,
    ),
    a = Yo(t);
  return (0, B.jsx)(W, { onActivate: a, tooltip: i, children: r });
}
function qs(e) {
  let { category: t, title: n } = e,
    r = _s(t);
  return (0, B.jsxs)(`div`, {
    className: fs,
    children: [
      (0, B.jsx)(`span`, { className: ps, children: r }),
      (0, B.jsx)(`span`, { className: ms }),
      (0, B.jsx)(`span`, { className: hs, children: n }),
    ],
  });
}
function Js(e, t, n) {
  let r = Zo(t),
    [i, a] = (0, z.useState)(``),
    o = (0, z.useRef)(0);
  (0, z.useEffect)(() => {
    r &&
      !n &&
      i == `` &&
      (a(`active`), (o.current = window.setTimeout(() => a(`complete`), 4e3)));
  }, [r, n, i, o, a]),
    (0, z.useEffect)(() => {
      n && (a(`complete`), window.clearTimeout(o.current));
    }, [n]),
    (0, z.useEffect)(() => () => window.clearTimeout(o.current), []);
  let s = (0, z.useRef)(!1);
  return (
    i == `complete` && !n && (s.current = !0),
    e == `once` && s.current ? !1 : i == `active` || n
  );
}
var Ys = 200,
  Xs = 5e3;
function Zs(e) {
  let { player: n, category: r, title: i, focus: a } = e,
    o = (0, z.useRef)(null),
    s = (0, z.useRef)(null),
    [c, l] = Io(n, !1),
    [u, d] = (0, z.useState)(!1),
    f = No(u, d, o);
  c ||= u;
  let p = Qs(n),
    m = rt(!!a),
    h = t(ho, c && `YnJEGhfB0wI-`);
  return (0, B.jsx)(jo.Provider, {
    value: f,
    children: (0, B.jsxs)(`div`, {
      ref: m,
      className: h,
      ...l,
      onKeyDown: p,
      tabIndex: 0,
      children: [
        (0, B.jsxs)(`div`, {
          className: go,
          children: [
            (0, B.jsx)(tc, { player: n, enabled: c && !u }),
            (0, B.jsx)(rc, {}),
            (0, B.jsxs)(Eo, {
              ref: s,
              className: yo,
              children: [
                (0, B.jsx)(Rs, { player: n, showHoverThumb: !0 }),
                (0, B.jsxs)(`div`, {
                  className: bo,
                  children: [
                    (0, B.jsxs)(`div`, {
                      className: xo,
                      children: [
                        (0, B.jsx)(Ks, { player: n }),
                        (0, B.jsx)(ic, { player: n, refControlsHover: s }),
                        (0, B.jsx)(Ns, { player: n }),
                      ],
                    }),
                    (0, B.jsxs)(`div`, {
                      className: So,
                      children: [
                        (0, B.jsx)(Ls, { player: n }),
                        (0, B.jsx)(Is, { player: n }),
                        (0, B.jsx)(Ps, {}),
                        (0, B.jsx)(Fs, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, B.jsx)(ec, {
          player: n,
          controlsVisible: c,
          category: r,
          title: i,
        }),
        (0, B.jsx)(`div`, { ref: o, className: wo }),
      ],
    }),
  });
}
function Qs(e) {
  let t = fo(uo(), `fullscreen`);
  return (0, z.useCallback)(
    (n) => {
      n.repeat ||
        (n.code == `Space`
          ? (e.TogglePlayPause(), n.preventDefault())
          : n.code == `ArrowLeft`
            ? e.SeekRelative(-5)
            : n.code == `ArrowRight`
              ? e.SeekRelative(Xs / 1e3)
              : n.key == `f` || n.key == `F`
                ? (t(), n.preventDefault())
                : (n.key == `m` || n.key == `M`) &&
                  (e.SetMute(!e.GetMuted()), n.preventDefault()));
    },
    [e, t],
  );
}
function $s(e, t) {
  let n = (0, z.useRef)(null),
    r = (0, z.useRef)(1),
    i = (0, z.useRef)(0),
    [a, o] = (0, z.useState)([]),
    s = (0, z.useCallback)(
      (a) => {
        if (a.target != n.current) return;
        let s = e.TogglePlayPauseState(),
          c = r.current++;
        o((e) => [{ nID: c, eState: s }, ...e]);
        let l = () => {
          (i.current = 0), e.TogglePlayPause();
        };
        a.pointerType == `mouse`
          ? i.current
            ? (window.clearTimeout(i.current), (i.current = 0), t())
            : (i.current = window.setTimeout(l, Ys))
          : l();
      },
      [n, i, e, o, t],
    ),
    c = (0, z.useCallback)(
      (e) => {
        o((t) => t.filter((t) => t.nID != e));
      },
      [o],
    );
  return (
    (0, z.useEffect)(
      () => () => {
        window.clearTimeout(i.current), (i.current = 0);
      },
      [i],
    ),
    { refBackground: n, inputEvents: Vo(s), clickEvents: a, fnRemoveEvent: c }
  );
}
function ec(e) {
  let { player: n, controlsVisible: r, category: i, title: a } = e,
    o = Js(`once`, n, r);
  if (i == 0 || !a) return null;
  let s = t(vo, o && `YnJEGhfB0wI-`);
  return (0, B.jsx)(`div`, {
    className: s,
    children: (0, B.jsx)(qs, { category: i, title: a }),
  });
}
function tc(e) {
  let { player: n, enabled: r } = e,
    {
      refBackground: i,
      inputEvents: a,
      clickEvents: o,
      fnRemoveEvent: s,
    } = $s(n, fo(uo(), `fullscreen`)),
    c = t(po, r && `T3UUyZ88ees-`);
  return (0, B.jsx)(`div`, {
    ref: i,
    className: c,
    ...a,
    children: o.map((e) =>
      (0, B.jsx)(nc, { event: e, removeEvent: s }, `icon_${e.nID}`),
    ),
  });
}
function nc(e) {
  let { event: t, removeEvent: n } = e,
    r = t.nID,
    i = (0, z.useCallback)(() => {
      n(r);
    }, [r, n]),
    a = null;
  return (
    t.eState == eo.Play
      ? (a = (0, B.jsx)(Er, {}))
      : t.eState == eo.Pause && (a = (0, B.jsx)(Tr, {})),
    (0, B.jsx)(`div`, { className: mo, onAnimationEnd: i, children: a })
  );
}
function rc(e) {
  return (0, B.jsx)(`div`, { className: _o });
}
function ic(e) {
  let { player: t, refControlsHover: n } = e,
    [r, i, a, o] = Go(t),
    [s, c] = ac(n),
    l;
  l =
    r || i === 0
      ? (0, B.jsx)(ze, {})
      : i < 0.3
        ? (0, B.jsx)(tt, {})
        : i < 0.6
          ? (0, B.jsx)(Be, {})
          : (0, B.jsx)(Dt, {});
  let u = U.Localize(
    r ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
  );
  return (0, B.jsxs)(`div`, {
    className: Co,
    onMouseEnter: c,
    "data-keepcontrols": !0,
    children: [
      (0, B.jsx)(W, { onActivate: o, tooltip: u, children: l }),
      s &&
        (0, B.jsx)(`div`, {
          className: `KiYQJsCfGxI-`,
          children: (0, B.jsx)(vt, {
            min: 0,
            max: 1,
            value: r ? 0 : i,
            step: 0.01,
            onChange: a,
            dpadStep: 0.1,
          }),
        }),
    ],
  });
}
function ac(e) {
  let [t, n] = (0, z.useState)(!1),
    r = (0, z.useCallback)(() => n(!0), [n]);
  return (
    Pe(e, `mouseleave`, (e) => {
      e.target == e.currentTarget && n(!1);
    }),
    [t, r]
  );
}
var oc = `WRCisr6uZYw-`,
  sc = `gbdFcNy5G4k-`,
  cc = `lX5nIJvBefY-`,
  lc = `iAXbsgjjZHI-`,
  uc = `-EEbXf-3XVE-`,
  dc = `iFREa-vsmpo-`,
  fc = `AP1io-MKcDs-`,
  pc = `Bxu-c02i-fA-`,
  mc = `pYxY-oYjIxc-`,
  hc = `xbX-APAH9aY-`,
  gc = `RjlRnmjZiYM-`,
  _c = 3e3,
  vc = 1e3;
function yc(e) {
  let { player: n, category: r, title: i } = e,
    a = (0, z.useRef)(null),
    [o, s] = bc(a, n, !1),
    c = (0, z.useRef)(null),
    [l, u] = (0, z.useState)(!1),
    d = No(l, u, c);
  o ||= l;
  let [f, p] = Tc(n),
    m = t(sc, o && `CjbQpCvOpk4-`),
    h = t(dc, !!f && `X3KS6LYOx9o-`);
  return (0, B.jsx)(jo.Provider, {
    value: d,
    children: (0, B.jsxs)(`div`, {
      className: oc,
      ...s,
      children: [
        (0, B.jsxs)(`div`, {
          ref: a,
          className: m,
          children: [
            (0, B.jsx)(wc, { thumbnail: f }),
            (0, B.jsx)(Cc, {}),
            (0, B.jsx)(`div`, {
              className: h,
              children: (0, B.jsx)(Ec, { player: n }),
            }),
            (0, B.jsxs)(`div`, {
              className: pc,
              children: [
                (0, B.jsx)(Rs, {
                  player: n,
                  onTouchSeek: p,
                  showHoverThumb: !1,
                }),
                (0, B.jsxs)(`div`, {
                  className: mc,
                  children: [
                    (0, B.jsx)(`div`, {
                      className: hc,
                      children: (0, B.jsx)(Ns, { player: n }),
                    }),
                    (0, B.jsxs)(`div`, {
                      className: gc,
                      children: [
                        (0, B.jsx)(Gs, { player: n }),
                        (0, B.jsx)(Ls, { player: n }),
                        (0, B.jsx)(Is, { player: n }),
                        (0, B.jsx)(Fs, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, B.jsx)(Sc, {
          player: n,
          controlsVisible: o,
          category: r,
          title: i,
        }),
        (0, B.jsx)(`div`, { ref: c, className: void 0 }),
      ],
    }),
  });
}
function bc(e, t, n) {
  let [r, i] = xc(e, t);
  return (r ||= n), [r, i];
}
function xc(e, t) {
  let [n, r] = Ho(),
    i = (0, z.useRef)(null),
    a = (0, z.useRef)(!0),
    o = Jo(t);
  return (
    (0, z.useEffect)(() => {
      let e = a.current;
      (a.current = !1), (!e || o) && r(!0, o ? 0 : vc);
    }, [o, r, a]),
    [
      n,
      {
        onPointerDown: (0, z.useCallback)(
          (e) => {
            i.current = e.target;
          },
          [i],
        ),
        onPointerCancel: (0, z.useCallback)(
          (e) => {
            i.current = null;
          },
          [i],
        ),
        onPointerUp: (0, z.useCallback)(
          (t) => {
            let a = i.current;
            if (((i.current = null), a == null)) return;
            let s = o ? 0 : _c;
            t.target != a || e.current != a ? r(!0, s) : r(!n, s);
          },
          [r, e, o, n],
        ),
      },
    ]
  );
}
function Sc(e) {
  let { player: n, controlsVisible: r, category: i, title: a } = e,
    o = Js(`standard`, n, r);
  if (i == 0 || !a) return null;
  let s = t(uc, o && !r && `lwGDx-ob6f4-`, r && `FEfadjF0-XY-`);
  return (0, B.jsx)(`div`, {
    className: s,
    children: (0, B.jsx)(qs, { category: i, title: a }),
  });
}
function Cc(e) {
  return (0, B.jsx)(`div`, { className: cc });
}
function wc(e) {
  let { thumbnail: t } = e,
    [n, r] = (0, z.useState)(null),
    i = (0, z.useCallback)(
      (e) => {
        if (!e) {
          r(null);
          return;
        }
        let t = e.getBoundingClientRect(),
          n = t.right - t.left,
          i = t.bottom - t.top;
        r({ width: n, height: i });
      },
      [r],
    );
  if (!t) return null;
  let a = { display: `none` };
  if (n) {
    let e = n.width / t.nThumbnailWidth,
      r = n.height / t.nThumbnailHeight,
      i = Math.min(e, r);
    a = {
      width: `${t.nThumbnailWidth * i}px`,
      height: `${t.nThumbnailHeight * i}px`,
      backgroundImage: `url(${t.strTileURL})`,
      backgroundPosition: `-${t.x * i}px -${t.y * i}px`,
      backgroundSize: `${t.nImageWidth * i}px ${t.nImageHeight * i}px`,
      backgroundRepeat: `no-repeat`,
    };
  }
  return (0, B.jsx)(`div`, {
    ref: i,
    className: lc,
    children: (0, B.jsx)(`div`, { style: a, className: void 0 }),
  });
}
function Tc(e) {
  let [t, n] = (0, z.useState)(null),
    r = (0, z.useRef)(!1),
    i = (0, z.useRef)(null);
  return [
    t,
    z.useCallback(
      (t) => {
        let a = t ? t.thumbnail : null;
        !e.IsPaused() && a && ((r.current = !0), e.Pause()),
          !a && r.current && (e.Play(), (r.current = !1)),
          i.current && !a && e.Seek(i.current.nPlaybackSeconds),
          (i.current = t),
          n(a);
      },
      [e, n, r],
    ),
  ];
}
function Ec(e) {
  let { player: t } = e,
    n = Jo(t),
    r = Vo(Yo(t)),
    i = n ? (0, B.jsx)(Er, {}) : (0, B.jsx)(Tr, {});
  return (0, B.jsx)(`div`, { className: fc, ...r, children: i });
}
var Dc = `_3uW6UUMmrCg-`,
  Oc = `fqgqcMMEHV0-`,
  kc = `_6koTzpHyyWw-`,
  Ac = `wz7DrfLBweo-`,
  jc = `qHxUvsFtfPA-`,
  Mc = `Mq-yAxjkoj4-`,
  Nc = `v15xRo4R128-`,
  Pc = `_5mPY672VSPM-`,
  Fc = `rlgvACT4pJc-`,
  Ic = 3e3,
  Lc = 1500;
function Rc(e) {
  let { player: n, category: r, title: i } = e,
    [a, o] = zc(n, !1),
    s = Jo(n),
    c = Bc(n, o),
    l = Yo(n),
    [u, d, f, p] = Go(n),
    m = (0, z.useCallback)(() => {
      p(), o();
    }, [p, o]),
    h = (0, z.useCallback)(
      (e) => {
        !n.IsPaused() && e.currentTarget == e.target && n.TogglePlayPause();
      },
      [n],
    ),
    g = (0, z.useRef)(null),
    [_, v] = (0, z.useState)(!1),
    y = No(_, v, g),
    b = u ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
    x = s ? `#TrailerPlayer_Play_Tooltip` : `#TrailerPlayer_Pause_Tooltip`,
    ee = t(Oc, a && `wXx6UBVpmP0-`);
  return (0, B.jsx)(jo.Provider, {
    value: y,
    children: (0, B.jsxs)(Qe, {
      className: Dc,
      focusable: !0,
      onClick: h,
      onOKActionDescription: U.Localize(x),
      onOKButton: l,
      onSecondaryButton: m,
      onSecondaryActionDescription: U.Localize(b),
      onButtonDown: c,
      children: [
        (0, B.jsxs)(`div`, {
          className: ee,
          children: [
            (0, B.jsx)(Hc, {}),
            (0, B.jsxs)(`div`, {
              className: jc,
              children: [
                (0, B.jsx)(Rs, { player: n, showHoverThumb: !1 }),
                (0, B.jsxs)(`div`, {
                  className: Mc,
                  children: [
                    (0, B.jsxs)(`div`, {
                      className: Nc,
                      children: [
                        (0, B.jsx)(Ks, { player: n }),
                        (0, B.jsx)(Ns, { player: n }),
                      ],
                    }),
                    (0, B.jsx)(`div`, {
                      className: Pc,
                      children: (0, B.jsx)(Gs, { player: n }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, B.jsx)(Vc, {
          player: n,
          controlsVisible: a,
          category: r,
          title: i,
        }),
        (0, B.jsx)(`div`, { ref: g, className: void 0 }),
      ],
    }),
  });
}
function zc(e, t) {
  let [n, r] = Ho(),
    i = (0, z.useRef)(!0),
    a = Jo(e);
  return (
    (0, z.useEffect)(() => {
      let e = i.current;
      (i.current = !1), (!e || a) && r(!0, a ? 0 : Lc);
    }, [a, r, i]),
    [
      n,
      (0, z.useCallback)(() => {
        r(!0, Ic);
      }, [r]),
    ]
  );
}
function Bc(e, t) {
  return (0, z.useCallback)(
    (n) => {
      if (n.detail.button == he.TRIGGER_LEFT && e) {
        let r = Math.max(0, e.GetPlaybackTime() - 10);
        e.Seek(r), t(), n.preventDefault(), n.stopPropagation();
      } else if (n.detail.button == he.TRIGGER_RIGHT && e) {
        let r = Math.min(e.GetTimelineDuration(), e.GetPlaybackTime() + 10);
        e.Seek(r), t(), n.preventDefault(), n.stopPropagation();
      }
    },
    [e, t],
  );
}
function Vc(e) {
  let { player: n, controlsVisible: r, category: i, title: a } = e,
    o = Js(`standard`, n, r);
  if (i == 0 || !a) return null;
  let s = t(kc, o && `wXx6UBVpmP0-`);
  return (0, B.jsx)(`div`, {
    className: s,
    children: (0, B.jsx)(`div`, {
      className: Ac,
      children: (0, B.jsx)(qs, { category: i, title: a }),
    }),
  });
}
function Hc(e) {
  return (0, B.jsx)(`div`, { className: Fc });
}
var Uc = 500,
  Wc = `responsive_menu_ignore_touch`;
function Gc(e) {
  return uo()
    ? (0, B.jsx)(z.Suspense, {
        children: (0, B.jsx)(Kc, { ...e, localContext: !1 }),
      })
    : (0, B.jsx)(z.Suspense, {
        children: (0, B.jsx)(lo, {
          iosVideoFallback: !0,
          supportsTheater: !1,
          supportsFullscreen: !0,
          children: (0, B.jsx)(Kc, { ...e, localContext: !0 }),
        }),
      });
}
function Kc(e) {
  let {
    ref: n,
    dashManifests: r,
    hlsManifest: i,
    captionManifest: a,
    screenshot: o,
    forcePause: s,
    onPlaybackStart: c,
    onPlaybackEnd: l,
    onPlayPauseChange: u,
    onMuteChange: d,
    uiMode: f,
    altText: p,
    title: m,
    category: h,
    statsURL: g,
    muteWhenAutoplayBlocked: _,
    localContext: v,
    focus: y,
  } = e;
  (m ||= ``), (h ||= 0);
  let [b, x] = to(r, i, a, g, l, u, d);
  qc(n, x), no(x, !!_);
  let [ee, S] = Jc(x),
    te = uo(),
    C = v && te ? te.refFullscreen : null,
    ne = de(ee, C),
    re = ro(x, !!s),
    w = re ? void 0 : b,
    ie = {};
  S && ((ie.width = `${S.nWidth}px`), (ie.height = `${S.nHeight}px`));
  let ae = N(() => x.IsBuffering());
  z.useEffect(() => {
    ae || (c && c());
  }, [ae, c]),
    z.use(U.Ready());
  let oe = t(qa, Wc);
  return (0, B.jsxs)(`div`, {
    ref: ne,
    className: oe,
    "data-trailer-player": !0,
    children: [
      (0, B.jsx)(`video`, {
        ref: w,
        style: ie,
        controls: !1,
        playsInline: !0,
        "aria-label": p,
        crossOrigin: `anonymous`,
      }),
      (0, B.jsx)(Yc, { player: x, uiMode: f, category: h, title: m, focus: y }),
      (0, B.jsx)(Xc, { player: x }),
      !re && (0, B.jsx)(Zc, { player: x, screenshot: o }),
      !re && (0, B.jsx)(Ws, { player: x }),
    ],
  });
}
function qc(e, t) {
  (0, z.useImperativeHandle)(
    e,
    () => ({
      Play() {
        t.Play();
      },
      Pause() {
        t.Pause();
      },
      IsPaused() {
        return t.IsPaused();
      },
      SeekToStart() {
        t.Seek(0);
      },
      GetVolume() {
        return t.GetVolume();
      },
      SetVolume(e, n) {
        t.SetVolume(e, n);
      },
    }),
    [t],
  );
}
function Jc(e) {
  let t = (0, z.useRef)(null),
    n = (0, z.useRef)(null),
    i = (0, z.useRef)(null),
    a = fe(),
    o = (0, z.useCallback)(() => {
      let e = n.current,
        o = t.current;
      if (!e || !o) return;
      let [s, c] = r(o.nWidth, o.nHeight, e.nWidth, e.nHeight);
      (s = e.nWidth - s < 2 ? e.nWidth : Math.ceil(s)),
        (c = e.nHeight - c < 2 ? e.nHeight : Math.ceil(c));
      let l = i.current;
      (l && l.nWidth == s && l.nHeight == c) ||
        ((i.current = { nWidth: s, nHeight: c }), a());
    }, [t, n, i, a]);
  Xo(
    e,
    (0, z.useCallback)(
      (e) => {
        (t.current = e), o();
      },
      [t, o],
    ),
  );
  let s = (0, z.useCallback)(
    (e) => {
      (n.current = {
        nWidth: e.contentRect.width,
        nHeight: e.contentRect.height,
      }),
        o();
    },
    [n, o],
  );
  return [we(s), i.current];
}
function Yc(e) {
  let { player: t, uiMode: n, category: r, title: i, focus: a } = e,
    o = l(),
    s = le();
  return (
    (n && n != `auto`) || (n = m() || s ? `touch` : o ? `gamepad` : `desktop`),
    n == `touch`
      ? (0, B.jsx)(yc, { player: t, category: r, title: i })
      : n == `gamepad`
        ? (0, B.jsx)(Rc, { player: t, category: r, title: i })
        : (0, B.jsx)(Zs, { player: t, category: r, title: i, focus: a })
  );
}
function Xc(e) {
  let { player: n } = e,
    [r, i] = (0, z.useState)(`norender`),
    a = N(() => n.IsBuffering());
  (0, z.useEffect)(() => {
    if (!a) return;
    let e = window.setTimeout(() => i(`fadein`), 1e3);
    return () => {
      e && window.clearTimeout(e);
    };
  }, [a, i]),
    (0, z.useEffect)(() => {
      if (a) return;
      i(`fadeout`);
      let e = window.setTimeout(() => i(`norender`), 300);
      return () => window.clearTimeout(e);
    }, [a, i]);
  let o = r != `norender`,
    s = t(Ja, r == `fadein` && `ZxF0VUYsuGU-`);
  return (0, B.jsx)(`div`, {
    className: s,
    children: o && (0, B.jsx)(P, { size: `large`, position: `center` }),
  });
}
function Zc(e) {
  let { player: n, screenshot: r } = e,
    i = N(() => n.GetUserInputNeeded()),
    a = ge(i, Uc),
    [o, s] = (0, z.useState)(!1),
    c = z.useCallback(() => {
      n.UserInputReceived(), s(!0);
    }, [n]);
  if (
    (z.useEffect(() => {
      if (!o) return;
      let e = setTimeout(() => s(!1), 500);
      return () => clearTimeout(e);
    }, [o]),
    !a)
  )
    return null;
  z.use(U.Ready());
  let l = {};
  return (
    r && (l.backgroundImage = `url('${r}')`),
    (0, B.jsx)(`div`, {
      style: l,
      className: Ya,
      role: `button`,
      tabIndex: 0,
      "aria-label": U.Localize(`#TrailerPlayer_Play_Tooltip`),
      onClick: c,
      onKeyDown: (e) => {
        (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), c());
      },
      children: (0, B.jsx)(`div`, {
        className: t(Xa, o && `_5fVtqw5G7SE-`),
        children: (0, B.jsx)(Er, {}),
      }),
    })
  );
}
var Qc = `v87a6zGhXmo-`,
  $c = `XkrNZp-zaXw-`;
function el(...e) {
  return e.join(` `);
}
var tl = `_7OxSOadMubQ-`,
  nl = `_5tpsR11QFTo-`,
  rl = `RylL--hTWB0-`,
  il = `mGOBKozFlf0-`,
  al = `kTZDgZ5dX-8-`,
  ol = `WDTUiOfZjRM-`,
  sl = `bgTVZST3FaE-`,
  cl = `B4zxAgrjjQU-`,
  ll = `ZQJlDRLSD2I-`,
  ul = `NxfxOoNRnJc-`,
  dl = `_6hGeFUDe5X0-`,
  fl = `rs5MCL6BI2A-`,
  pl = `iRWZX4LtE-Q-`,
  ml = `_5yccD-xlOTc-`;
function hl(e) {
  let { name: n, trailerCategory: r, trailerDisplay: i, mouseOver: a } = e,
    [o, s] = z.useState(!1);
  if (
    (z.useEffect(() => {
      i != 0 && s(!0);
    }, [i]),
    z.useEffect(() => {
      if (a) {
        s(!0);
        return;
      }
      if (!o) return;
      let e = setTimeout(() => s(!1), 3e3);
      return () => clearTimeout(e);
    }, [o, a]),
    r == null || i == 0)
  )
    return;
  let c = i == 1 ? Je.Localize(`#StoreTrailer_Title_TrailerPreview`) : _s(r);
  return (0, B.jsx)(`div`, {
    className: t({ [fl]: !0, [ml]: o }),
    children: Je.LocalizeReact(
      `#StoreTrailer_Title_Combiner`,
      (0, B.jsx)(`span`, { className: pl, children: c }),
      n,
    ),
  });
}
function gl(e) {
  let { id: n, bPopOutTrailerPlayback: r } = e,
    { data: i } = jt(n),
    a = Rt(n),
    { data: o } = j(n),
    [s, c] = (0, z.useState)(!1),
    [l, u] = (0, z.useState)(!1),
    d = pn(),
    f = i?.highlights?.filter((e) => !d || e.all_ages),
    p = f && f?.length > 0 ? f[0] : void 0,
    m = z.useCallback(() => {
      p && (r ? u(!0) : c((e) => !e));
    }, [p, r]);
  if (!o)
    return (0, B.jsx)(`div`, {
      className: t(nl, tl),
      children: (0, B.jsx)(P, { size: `medium` }),
    });
  let h = p
    ? (0, B.jsx)(xl, { trailer: p, bPlayVideo: s, fnTogglePlayTrailer: m })
    : null;
  return !p && !a?.length
    ? null
    : (0, B.jsxs)(`div`, {
        className: t(nl, tl),
        children: [
          (0, B.jsx)(_l, {
            elFeaturedInCenter: h,
            trailer: p,
            id: n,
            name: o.name || ``,
          }),
          r
            ? (0, B.jsx)(yl, { id: n, bShowModal: l, hideModal: () => u(!1) })
            : (0, B.jsx)(vl, {
                name: o.name || ``,
                trailer: p,
                bPlayVideo: s,
                fnTogglePlayTrailer: m,
                bControls: !0,
              }),
        ],
      });
}
function _l(e) {
  let {
      elFeaturedInCenter: n,
      id: r,
      name: i,
      trailer: a,
      featureElementclassName: o,
      bUseTrailerAsFirstThumb: s,
      bNoScreenShotModals: c,
    } = e,
    [l, u] = z.useState(void 0),
    [d, f] = Sn(),
    p = Rt(r),
    m = (0, z.useRef)(null),
    [h, g] = (0, z.useState)(0);
  if (!r) return null;
  let _ = n || (l !== void 0 && l !== -1) ? l : 0,
    v = [],
    y = [];
  if (
    (s &&
      a &&
      (v.push(
        (0, B.jsx)(
          xl,
          {
            trailer: a,
            bPlayVideo: !1,
            fnTogglePlayTrailer: () => {},
            onMouseEnter: () => u(0),
            onMouseLeave: () => {
              let e = m.current;
              e && g(e.currentTime);
            },
          },
          `trail_thumb_`,
        ),
      ),
      y.push(
        (0, B.jsx)(
          vl,
          {
            ref: m,
            name: i,
            trailer: a,
            bControls: !1,
            bPlayVideo: !0,
            startTime: h,
            fnTogglePlayTrailer: () => {},
          },
          `trail_inline`,
        ),
      )),
    p?.forEach((e, r) => {
      if ((n || r > 0) && v.length < 3) {
        let n = Mt(e, `thumb`),
          a = Mt(e, `600x338`),
          o = v.length;
        v.push(
          (0, B.jsx)(
            `div`,
            {
              className: t({ [ol]: !0, [al]: !c }),
              onMouseEnter: () => u(o),
              children: c
                ? (0, B.jsx)(`img`, { src: n, alt: i })
                : (0, B.jsx)(`button`, {
                    type: `button`,
                    className: sl,
                    onClick: () => {
                      let e = [...(p || [])];
                      if (e.length > 0) {
                        for (let t = 0; t < r; ++t) {
                          let t = e.shift();
                          t && e.push(t);
                        }
                        d(e.map((e) => Mt(e, `full`)));
                      }
                    },
                    children: (0, B.jsx)(`img`, { src: n, alt: i }),
                  }),
            },
            r + `_small_` + n,
          ),
        ),
          y.push(
            (0, B.jsx)(
              `div`,
              {
                className: il,
                children: (0, B.jsx)(`img`, { src: a, alt: i }),
              },
              r + `_big_` + n,
            ),
          );
      }
    }),
    !n && (!y || y.length == 0))
  )
    return null;
  let b = v.slice(0, 3),
    x = Array.from({ length: Math.max(0, 3 - b.length) });
  return (0, B.jsxs)(B.Fragment, {
    children: [
      f,
      (0, B.jsx)(`div`, {
        className: o || `_4av218OCtYs-`,
        children:
          n && (_ === -1 || _ === void 0)
            ? (0, B.jsx)(B.Fragment, { children: n })
            : (0, B.jsx)(B.Fragment, { children: _ !== void 0 && y[_] }),
      }),
      b.length > 0 &&
        (0, B.jsxs)(`div`, {
          className: `zPYR9--wLLQ-`,
          onMouseLeave: () => u(-1),
          children: [
            b,
            x.map((e, t) =>
              (0, B.jsx)(
                `div`,
                { className: `WDTUiOfZjRM-` },
                `app_${Ot(r)}_${t}`,
              ),
            ),
          ],
        }),
    ],
  });
}
function vl(e) {
  let {
    ref: n,
    name: r,
    trailer: i,
    bControls: a,
    bPlayVideo: o,
    fnTogglePlayTrailer: s,
    startTime: c,
  } = e;
  if (
    ((0, z.useEffect)(() => {
      let e = n?.current;
      if (c != null && c > 0 && e) {
        let t = () => {
          e.currentTime = c || 0;
        };
        return (
          e.addEventListener(`loadedmetadata`, t),
          () => {
            e.removeEventListener(`loadedmetadata`, t);
          }
        );
      }
    }, [n, c]),
    !i)
  )
    return null;
  let l = t(ul, o && `B4zxAgrjjQU-`);
  return (0, B.jsxs)(`div`, {
    className: l,
    onClick: s,
    role: `presentation`,
    children: [
      (0, B.jsx)(hl, {
        name: r,
        trailerCategory: i.trailer_category,
        trailerDisplay: 1,
        mouseOver: !1,
      }),
      !!(o && i.microtrailer) &&
        (0, B.jsx)(`video`, {
          className: `YL-tCU7ggsU-`,
          ref: n,
          controls: a,
          autoPlay: !0,
          loop: !0,
          muted: !0,
          poster: c != null && c > 0 ? void 0 : i.screenshot_full,
          children: i.microtrailer?.map((e) =>
            f.IN_CLIENT && e.type == `video/mp4`
              ? null
              : (0, B.jsx)(
                  `source`,
                  { src: fn(i, e.filename || ``), type: e.type },
                  e.filename,
                ),
          ),
        }),
      a &&
        (0, B.jsx)(`button`, {
          type: `button`,
          className: `wrm1TrwYv0M-`,
          "aria-label": A(`#Button_Close`),
          children: (0, B.jsx)(qe, {}),
        }),
    ],
  });
}
function yl(e) {
  return e.bShowModal ? (0, B.jsx)(bl, { ...e }) : null;
}
function bl(e) {
  let { id: t, bShowModal: n, trailerBaseID: r, hideModal: i } = e,
    { data: a } = j(t),
    o = hn(t),
    s = (0, z.useMemo)(() => {
      if (o && o.length != 0) {
        if (r) {
          let e = o.find((e) => e.trailer_base_id == r);
          if (e) return e;
        }
        return o[0];
      }
    }, [o, r]),
    c = z.useId(),
    l = z.useId(),
    {
      rgDashTrailers: u,
      rgHlsTrailers: d,
      strCaptionManufest: f,
      strScreenshot: p,
    } = (0, z.useMemo)(() => {
      if (!s)
        return {
          rgDashTrailers: [],
          rgHlsTrailers: [],
          strCaptionManufest: ``,
          strScreenshot: ``,
        };
      let { rgDashTrailers: e, rgHlsTrailers: t } = ln(s);
      return {
        rgDashTrailers: e,
        rgHlsTrailers: t,
        strCaptionManufest: un(s),
        strScreenshot: dn(s),
      };
    }, [s]);
  return !s || !s.adaptive_trailers || u.length == 0
    ? null
    : (0, B.jsx)(Tn, {
        active: n,
        children: (0, B.jsxs)(Tt, {
          "aria-labelledby": el(c, l),
          bAllowFullSize: !0,
          bOKDisabled: !0,
          closeModal: i,
          children: [
            (0, B.jsx)(`div`, {
              className: dl,
              children: (0, B.jsx)(Gc, {
                dashManifests: u,
                hlsManifest: d[0] || ``,
                screenshot: p,
                altText: s.trailer_name,
                muteWhenAutoplayBlocked: !0,
                captionManifest: f,
              }),
            }),
            (0, B.jsx)(`div`, {
              id: c,
              style: { display: `none` },
              children: a?.name || ``,
            }),
            (0, B.jsx)(`div`, {
              id: l,
              style: { display: `none` },
              children: s.trailer_name,
            }),
          ],
        }),
      });
}
function xl(e) {
  let {
    trailer: n,
    fnTogglePlayTrailer: r,
    bPlayVideo: i,
    onMouseEnter: a,
    onMouseLeave: o,
  } = e;
  return (0, B.jsxs)(`div`, {
    className: t({ [rl]: !i, [cl]: i, [ol]: !0 }),
    onClick: r,
    onMouseEnter: a,
    onMouseLeave: o,
    role: `presentation`,
    children: [
      (0, B.jsx)(`img`, { src: dn(n), alt: n.trailer_name }),
      (0, B.jsx)(`button`, {
        type: `button`,
        className: ll,
        "aria-label": A(`#Playback_Play_Tooltip`),
        children: (0, B.jsx)(it, {}),
      }),
    ],
  });
}
var Sl = (function (e) {
  return (
    (e.k_TrailerAsButton = `button`),
    (e.k_TrailerAsPill = `pill`),
    (e.k_TrailerAsFull = `full`),
    (e.k_TrailerAsPoster = `poster`),
    (e.k_TrailerAsMicro = `micro`),
    e
  );
})({});
function Cl(e) {
  let {
      embedStyle: n,
      appid: r,
      color: i,
      bgcolor: a,
      children: o,
      trailerBaseID: s,
      subtitles: c,
    } = e,
    [l, u] = (0, z.useState)(!1),
    d = (0, z.useMemo)(() => ({ appid: r }), [r]);
  switch (n) {
    case `button`:
    case `pill`:
      return (0, B.jsxs)(B.Fragment, {
        children: [
          (0, B.jsxs)(`button`, {
            type: `button`,
            className: t({ [Qc]: n == `pill`, [$c]: n == `button` }),
            onClick: () => u(!0),
            style: { color: i, backgroundColor: a },
            children: [(0, B.jsx)(it, {}), o || A(`#EventEmail_WatchNow`)],
          }),
          (0, B.jsx)(yl, {
            id: d,
            bShowModal: l,
            trailerBaseID: s,
            hideModal: () => u(!1),
          }),
        ],
      });
    default:
    case `full`:
      return (0, B.jsx)(wl, { ...e });
  }
}
function wl(e) {
  let { appid: t, trailerBaseID: n } = e,
    r = gn(t),
    { data: i } = j(r),
    [a, o] = (0, z.useState)(() =>
      !t || !n ? A(`#TrailerPlayer_ID_NotProvided`) : null,
    ),
    s = hn(r),
    c = (0, z.useMemo)(
      () => (s ? s.find((e) => e.trailer_base_id === n) : null),
      [s, n],
    );
  return (
    (0, z.useEffect)(() => {
      i?.unvailable_for_country_restriction &&
        o(A(`#TrailerPlayer_CouldNotLoad`, t, n)),
        s &&
          !c &&
          o(A(`#TrailerPlayer_CouldNotLoad`, e.appid, e.trailerBaseID));
    }, [
      t,
      e.appid,
      e.trailerBaseID,
      i?.unvailable_for_country_restriction,
      n,
      c,
      s,
    ]),
    a
      ? e.bIsPreviewMode
        ? (0, B.jsx)(`div`, { className: Cn, children: a })
        : null
      : c
        ? (0, B.jsx)(Tl, { trailerToPlay: c })
        : (0, B.jsx)(P, { string: A(`#Loading`), size: `small` })
  );
}
function Tl(e) {
  let { trailerToPlay: t } = e,
    {
      rgDashTrailers: n,
      rgHlsTrailers: r,
      strCaptionManufest: i,
    } = (0, z.useMemo)(() => {
      let { rgDashTrailers: e, rgHlsTrailers: n } = ln(t);
      return { rgDashTrailers: e, rgHlsTrailers: n, strCaptionManufest: un(t) };
    }, [t]);
  return n?.length == 0
    ? null
    : (0, B.jsx)(`div`, {
        className: dl,
        children: (0, B.jsx)(Gc, {
          dashManifests: n || [],
          hlsManifest: (r.length > 0 && r?.[0]) || ``,
          screenshot: dn(t),
          altText: t.trailer_name,
          muteWhenAutoplayBlocked: !0,
          captionManifest: i,
        }),
      });
}
function El(e) {
  let t = l(),
    n = Gr(940),
    r = String(L(e.args, `autoadvance`)).toLowerCase() === `true`;
  return (0, B.jsx)(_n, {
    hideArrows: !n,
    hidePips: t,
    visibleElements: 1,
    useTestScrollbar: !1,
    bLazyRenderChildren: !0,
    screenIsWide: n,
    bAutoAdvance: r,
    className: nn,
    children: e.children,
  });
}
var Dl = `FQV2hlT8BYs-`;
function Ol(e) {
  let { strURL: t, children: n } = e;
  return (typeof t == `string` ? !Ze(t) : t.some((e) => !Ze(e)))
    ? (0, B.jsx)(kl, { children: n })
    : (0, B.jsx)(B.Fragment, { children: n });
}
function kl(e) {
  let { children: t } = e;
  return Wn()
    ? (0, B.jsx)(B.Fragment, { children: t })
    : (0, B.jsx)(`div`, {
        className: Dl,
        children: Ct(
          `#Image_Externally_Hosted_Hidden`,
          (0, B.jsx)(`a`, {
            href: f.STORE_BASE_URL + `account/cookiepreferences`,
          }),
        ),
      });
}
var Al = null;
function jl() {
  return (
    (Al ??= new Map([
      [`url`, { Constructor: Ga, autocloses: !1 }],
      [`dynamiclink`, { Constructor: Ka, autocloses: !1 }],
      [
        `h1`,
        { Constructor: ar($n, Jt), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [
        `h2`,
        { Constructor: ar(ur, rn), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [
        `h3`,
        { Constructor: ar(pr, on), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [`quote`, { Constructor: ar(dr, en), autocloses: !1 }],
      [`list`, { Constructor: er, autocloses: !1, skipInternalNewline: !0 }],
      [`olist`, { Constructor: qn, autocloses: !1, skipInternalNewline: !0 }],
      [`*`, { Constructor: fr, autocloses: !0, skipInternalNewline: !0 }],
      [`p`, { Constructor: Pn, autocloses: !1, skipFollowingNewline: !0 }],
      [`img`, { Constructor: Ml, autocloses: !1 }],
      [`previewyoutube`, { Constructor: Jn, autocloses: !1 }],
      [`looping_media`, { Constructor: Yn, autocloses: !1 }],
      [`video`, { Constructor: Ln, autocloses: !1 }],
      [`youtubeorvideo`, { Constructor: Fn, autocloses: !1 }],
      [`trailer`, { Constructor: Pl, autocloses: !1 }],
      [
        `speaker`,
        {
          Constructor: Fl,
          autocloses: !1,
          skipInternalNewline: !0,
          allowWrapTextForCopying: !0,
        },
      ],
      [`docimg`, { Constructor: Nl, autocloses: !1 }],
      [`carousel`, { Constructor: El, autocloses: !1 }],
    ])),
    Al
  );
}
function Ml(e) {
  let { showErrorInfo: n, event: r } = e.context,
    i = L(e.args, `src`) || e.children?.toString();
  (i ||= L(e.args)), (i = hr(i ?? ``) || void 0);
  let a = L(e.args, `style`) === `inline`,
    o = Sr(i, e.language, r?.rtime32_last_modified);
  if (o == null) return null;
  if (typeof o == `string`) {
    i = o;
    let e;
    return (
      (e = !Ze(i)),
      r?.BHasTag(`auto_rssfeed`) && (e = !1),
      n
        ? (0, B.jsx)(bn, {
            className: t({ [gr]: a }),
            src: i,
            crossOrigin: e ? `anonymous` : void 0,
          })
        : ((i = Ve(i)),
          (0, B.jsx)(Ol, {
            strURL: i,
            children: (0, B.jsx)(vn, {
              className: t({ [gr]: a }),
              src: i,
              crossOrigin: e ? `anonymous` : void 0,
            }),
          }))
    );
  }
  return (0, B.jsx)(Ol, {
    strURL: o,
    children: (0, B.jsx)(Cr, { rgSources: o }),
  });
}
function Nl(e) {
  let t = L(e.args);
  if (t == null || t == null || t.length == 0) return ``;
  let n = e.children?.toString(),
    r = [];
  return (
    r.push(
      `${f.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${f.LANGUAGE}/${t}`,
    ),
    f.LANGUAGE != `english` &&
      r.push(`${f.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${t}`),
    (0, B.jsx)(Cr, { rgSources: r, alt: n })
  );
}
function Pl(e) {
  let t = Il(e.args, `appid`, e.context.event?.appid ?? 0),
    n = Il(e.args, `trailerid`, 0),
    r = L(e.args, `style`)?.toLocaleLowerCase() ?? Sl.k_TrailerAsFull;
  r = Object.values(Sl).includes(r) ? r : Sl.k_TrailerAsFull;
  let i = ti(e.args.color, `black`),
    a = ti(e.args.bgcolor, `white`),
    o = Zn(e.args);
  return (0, B.jsx)(Cl, {
    appid: t,
    trailerBaseID: n,
    bIsPreviewMode: e.context.showErrorInfo,
    embedStyle: r,
    color: i,
    bgcolor: a,
    subtitles: o.rgVideoTracks,
    children: e.children,
  });
}
function Fl(e) {
  let t = L(e.args, `name`),
    n = L(e.args, `title`),
    r = L(e.args, `company`),
    i = L(e.args, `photo`);
  return e.context.bShowShortSpeakerInfo
    ? (0, B.jsx)(tr, {
        name: t,
        title: n,
        company: r,
        photo: i,
        bio: e.children,
      })
    : (0, B.jsx)(lr, {
        name: t,
        title: n,
        company: r,
        photo: i,
        bio: e.children,
      });
}
function Il(e, t, n) {
  let r = L(e, t);
  return r === void 0 || r == null ? n : Number.parseInt(r);
}
var Ll = null;
function Rl() {
  return (
    (Ll ??= new Map([
      ...Array.from(nr.entries()),
      ...Array.from(jl().entries()),
    ])),
    Ll
  );
}
var zl = z.createContext(null);
function Bl() {
  return z.useContext(zl) ?? Rl();
}
function Vl(e) {
  let t = Bl(),
    n = z.useMemo(
      () =>
        new Map([
          ...Array.from(t.entries()),
          ...Array.from(e.dictionary.entries()),
        ]),
      [t, e.dictionary],
    );
  return (0, B.jsx)(zl.Provider, { value: n, children: e.children });
}
function Hl(e) {
  let {
      text: t,
      languageOverride: n,
      event: r,
      showErrorInfo: i,
      bShowShortSpeakerInfo: a,
    } = e,
    o = Oa(),
    s = z.useCallback(
      (e) => new Zr(new Xr(new Jr(new Qn(new Bn()), e, o, { event: r })), e),
      [r, o],
    ),
    c = Bl();
  return z
    .useMemo(() => new Vn(c, s, n || f.LANGUAGE), [c, s, n])
    .ParseBBCode(t, {
      showErrorInfo: i,
      event: r,
      bShowShortSpeakerInfo: a,
      bbcode: t,
    });
}
var G = re(g(), 1),
  Ul = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: a.readFixed64String,
              bw: v.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetSummary_Request`;
    }
  },
  Wl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.summary || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            summary: { n: 1, c: Gl },
            timestamp_updated: { n: 2, br: a.readUint32, bw: v.writeUint32 },
            auditid_highwater: {
              n: 3,
              br: a.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetSummary_Response`;
    }
  },
  Gl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.points || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            points: { n: 1, br: a.readInt64String, bw: v.writeInt64String },
            points_earned: {
              n: 2,
              br: a.readInt64String,
              bw: v.writeInt64String,
            },
            points_spent: {
              n: 3,
              br: a.readInt64String,
              bw: v.writeInt64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetSummary_Response_Summary`;
    }
  },
  Kl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.amount || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            amount: { n: 1, br: a.readInt64String, bw: v.writeInt64String },
            ecurrency: { n: 2, br: a.readUint32, bw: v.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetPointsForSpend_Request`;
    }
  },
  ql = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.points || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            points: { n: 1, br: a.readInt64String, bw: v.writeInt64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetPointsForSpend_Response`;
    }
  },
  Jl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.defid || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            defid: { n: 1, br: a.readUint32, bw: v.writeUint32 },
            expected_points_cost: {
              n: 2,
              br: a.readInt64String,
              bw: v.writeInt64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPoints_Request`;
    }
  },
  Yl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.defid || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            defid: { n: 1, br: a.readUint32, bw: v.writeUint32 },
            num_levels: { n: 2, d: 1, br: a.readInt32, bw: v.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForBadgeLevel_Request`;
    }
  },
  Xl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.defid || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            defid: { n: 1, br: a.readUint32, bw: v.writeUint32 },
            communityitemid: {
              n: 2,
              br: a.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsToUpgradeItem_Request`;
    }
  },
  Zl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.communityitemid || o(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            communityitemid: {
              n: 1,
              br: a.readUint64String,
              bw: v.writeUint64String,
            },
            bundle_community_item_ids: {
              n: 2,
              r: !0,
              q: !0,
              br: a.readUint64String,
              pbr: a.readPackedUint64String,
              bw: v.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPoints_Response`;
    }
  },
  Ql = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.customization_type || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            customization_type: { n: 1, br: a.readEnum, bw: v.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForProfileCustomization_Request`;
    }
  },
  $l = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.purchaseid || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            purchaseid: {
              n: 1,
              br: a.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForProfileCustomization_Response`;
    }
  },
  eu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.customization_type || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            customization_type: { n: 1, br: a.readEnum, bw: v.writeEnum },
            new_level: { n: 2, br: a.readUint32, bw: v.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request`;
    }
  },
  tu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), G.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response`;
    }
  },
  nu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.serial_number || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serial_number: { n: 1, br: a.readString, bw: v.writeString },
            controller_code: { n: 2, br: a.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RegisterForSteamDeckRewards_Request`;
    }
  },
  ru = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.granted_profile_modifier || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            granted_profile_modifier: { n: 1, br: a.readBool, bw: v.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RegisterForSteamDeckRewards_Response`;
    }
  },
  iu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.target_type || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            target_type: { n: 1, br: a.readEnum, bw: v.writeEnum },
            targetid: { n: 2, br: a.readUint64String, bw: v.writeUint64String },
            reactionid: { n: 3, br: a.readUint32, bw: v.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_AddReaction_Request`;
    }
  },
  au = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), G.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_AddReaction_Response`;
    }
  },
  ou = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.target_type || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            target_type: { n: 1, br: a.readEnum, bw: v.writeEnum },
            targetid: { n: 2, br: a.readUint64String, bw: v.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactions_Request`;
    }
  },
  su = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reactionids || o(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reactionids: {
              n: 1,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactions_Response`;
    }
  },
  cu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: a.readFixed64String,
              bw: v.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionsSummaryForUser_Request`;
    }
  },
  lu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.total || o(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2, 3, 4, 5, 6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total: { n: 1, c: uu, r: !0, q: !0 },
            user_reviews: { n: 2, c: uu, r: !0, q: !0 },
            ugc: { n: 3, c: uu, r: !0, q: !0 },
            profile: { n: 4, c: uu, r: !0, q: !0 },
            forum_topics: { n: 5, c: uu, r: !0, q: !0 },
            comments: { n: 6, c: uu, r: !0, q: !0 },
            total_given: { n: 7, br: a.readUint32, bw: v.writeUint32 },
            total_received: { n: 8, br: a.readUint32, bw: v.writeUint32 },
            total_points_given: {
              n: 9,
              br: a.readInt64String,
              bw: v.writeInt64String,
            },
            total_points_received: {
              n: 10,
              br: a.readInt64String,
              bw: v.writeInt64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionsSummaryForUser_Response`;
    }
  },
  uu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reactionid || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reactionid: { n: 1, br: a.readEnum, bw: v.writeEnum },
            given: { n: 2, br: a.readUint32, bw: v.writeUint32 },
            received: { n: 3, br: a.readUint32, bw: v.writeUint32 },
            points_given: {
              n: 4,
              br: a.readInt64String,
              bw: v.writeInt64String,
            },
            points_received: {
              n: 5,
              br: a.readInt64String,
              bw: v.writeInt64String,
            },
            purchaseable: { n: 6, br: a.readBool, bw: v.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown`;
    }
  },
  du = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.elanguage || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { elanguage: { n: 1, br: a.readInt32, bw: v.writeInt32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionConfig_Request`;
    }
  },
  fu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reactions || o(e.M()),
        G.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { reactions: { n: 3, c: pu, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionConfig_Response`;
    }
  },
  pu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reactionid || o(e.M()),
        G.Message.initialize(this, t, 0, -1, [4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reactionid: { n: 1, br: a.readEnum, bw: v.writeEnum },
            points_cost: { n: 2, br: a.readUint32, bw: v.writeUint32 },
            points_transferred: { n: 3, br: a.readUint32, bw: v.writeUint32 },
            valid_target_types: {
              n: 4,
              r: !0,
              q: !0,
              br: a.readEnum,
              pbr: a.readPackedEnum,
              bw: v.writeRepeatedEnum,
            },
            valid_ugc_types: {
              n: 5,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
            purchaseable: { n: 6, br: a.readBool, bw: v.writeBool },
            localized_title: { n: 7, br: a.readString, bw: v.writeString },
            localized_desc: { n: 8, br: a.readString, bw: v.writeString },
            available_until: { n: 9, br: a.readUint32, bw: v.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig`;
    }
  },
  mu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), G.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetProfileCustomizationsConfig_Request`;
    }
  },
  hu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.points_cost || o(e.M()),
        G.Message.initialize(this, t, 0, -1, [3, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            points_cost: { n: 1, br: a.readUint32, bw: v.writeUint32 },
            upgrade_points_cost: { n: 2, br: a.readUint32, bw: v.writeUint32 },
            purchasable_customization_types: {
              n: 3,
              r: !0,
              q: !0,
              br: a.readEnum,
              pbr: a.readPackedEnum,
              bw: v.writeRepeatedEnum,
            },
            upgradable_customization_types: {
              n: 4,
              r: !0,
              q: !0,
              br: a.readEnum,
              pbr: a.readPackedEnum,
              bw: v.writeRepeatedEnum,
            },
            max_slots_per_type: { n: 5, br: a.readUint32, bw: v.writeUint32 },
            max_upgradable_level: { n: 6, br: a.readUint32, bw: v.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetProfileCustomizationsConfig_Response`;
    }
  },
  gu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), G.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetEligibleApps_Request`;
    }
  },
  _u = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.apps || o(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: vu, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetEligibleApps_Response`;
    }
  },
  vu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: a.readUint32, bw: v.writeUint32 },
            has_items_anyone_can_purchase: {
              n: 2,
              br: a.readBool,
              bw: v.writeBool,
            },
            event_app: { n: 3, br: a.readBool, bw: v.writeBool },
            hero_carousel_image: { n: 4, br: a.readString, bw: v.writeString },
            owned: { n: 5, br: a.readBool, bw: v.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetEligibleApps_Response_EligibleApp`;
    }
  },
  yu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || o(e.M()),
        G.Message.initialize(this, t, 0, -1, [15], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: a.readUint32, bw: v.writeUint32 },
            defid: { n: 2, br: a.readUint32, bw: v.writeUint32 },
            type: { n: 3, br: a.readEnum, bw: v.writeEnum },
            community_item_class: { n: 4, br: a.readInt32, bw: v.writeInt32 },
            community_item_type: { n: 5, br: a.readUint32, bw: v.writeUint32 },
            point_cost: { n: 6, br: a.readInt64String, bw: v.writeInt64String },
            timestamp_created: { n: 7, br: a.readUint32, bw: v.writeUint32 },
            timestamp_updated: { n: 8, br: a.readUint32, bw: v.writeUint32 },
            timestamp_available: { n: 9, br: a.readUint32, bw: v.writeUint32 },
            timestamp_available_end: {
              n: 14,
              br: a.readUint32,
              bw: v.writeUint32,
            },
            quantity: { n: 10, br: a.readInt64String, bw: v.writeInt64String },
            internal_description: {
              n: 11,
              br: a.readString,
              bw: v.writeString,
            },
            active: { n: 12, br: a.readBool, bw: v.writeBool },
            community_item_data: { n: 13, c: bu },
            bundle_defids: {
              n: 15,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
            usable_duration: { n: 16, br: a.readUint32, bw: v.writeUint32 },
            bundle_discount: { n: 17, br: a.readUint32, bw: v.writeUint32 },
            timestamp_free_until: {
              n: 18,
              br: a.readUint32,
              bw: v.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `LoyaltyRewardDefinition`;
    }
  },
  bu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.item_name || o(e.M()),
        G.Message.initialize(this, t, 0, -1, [9], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_name: { n: 1, br: a.readString, bw: v.writeString },
            item_title: { n: 2, br: a.readString, bw: v.writeString },
            item_description: { n: 3, br: a.readString, bw: v.writeString },
            item_image_small: { n: 4, br: a.readString, bw: v.writeString },
            item_image_large: { n: 5, br: a.readString, bw: v.writeString },
            item_movie_webm: { n: 6, br: a.readString, bw: v.writeString },
            item_movie_mp4: { n: 7, br: a.readString, bw: v.writeString },
            item_movie_webm_small: {
              n: 10,
              br: a.readString,
              bw: v.writeString,
            },
            item_movie_mp4_small: {
              n: 11,
              br: a.readString,
              bw: v.writeString,
            },
            animated: { n: 8, br: a.readBool, bw: v.writeBool },
            badge_data: { n: 9, c: xu, r: !0, q: !0 },
            profile_theme_id: { n: 12, br: a.readString, bw: v.writeString },
            tiled: { n: 13, br: a.readBool, bw: v.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `LoyaltyRewardDefinition_CommunityItemData`;
    }
  },
  xu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.level || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            level: { n: 1, br: a.readInt32, bw: v.writeInt32 },
            image: { n: 2, br: a.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `LoyaltyRewardDefinition_BadgeData`;
    }
  },
  Su = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.bonusid || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            bonusid: { n: 1, br: a.readUint64String, bw: v.writeUint64String },
            appid: { n: 2, br: a.readUint32, bw: v.writeUint32 },
            active: { n: 3, br: a.readBool, bw: v.writeBool },
            points: { n: 4, br: a.readInt32, bw: v.writeInt32 },
            timestamp_start: { n: 5, br: a.readUint32, bw: v.writeUint32 },
            timestamp_end: { n: 6, br: a.readUint32, bw: v.writeUint32 },
            internal_description: { n: 7, br: a.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `LoyaltyRewardPurchaseBonus`;
    }
  },
  Cu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), G.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetActivePurchaseBonuses_Request`;
    }
  },
  wu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.bonuses || o(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { bonuses: { n: 1, c: Su, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetActivePurchaseBonuses_Response`;
    }
  },
  Tu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appids || o(e.M()),
        G.Message.initialize(
          this,
          t,
          0,
          -1,
          [1, 3, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20],
          null,
        );
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
            time_available: { n: 2, br: a.readUint32, bw: v.writeUint32 },
            community_item_classes: {
              n: 3,
              r: !0,
              q: !0,
              br: a.readInt32,
              pbr: a.readPackedInt32,
              bw: v.writeRepeatedInt32,
            },
            language: { n: 4, br: a.readString, bw: v.writeString },
            count: { n: 5, br: a.readInt32, bw: v.writeInt32 },
            cursor: { n: 6, br: a.readString, bw: v.writeString },
            sort: { n: 7, d: 1, br: a.readEnum, bw: v.writeEnum },
            sort_descending: { n: 8, d: !0, br: a.readBool, bw: v.writeBool },
            reward_types: {
              n: 9,
              r: !0,
              q: !0,
              br: a.readEnum,
              pbr: a.readPackedEnum,
              bw: v.writeRepeatedEnum,
            },
            excluded_community_item_classes: {
              n: 10,
              r: !0,
              q: !0,
              br: a.readInt32,
              pbr: a.readPackedInt32,
              bw: v.writeRepeatedInt32,
            },
            definitionids: {
              n: 11,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
            filters: {
              n: 12,
              r: !0,
              q: !0,
              br: a.readEnum,
              pbr: a.readPackedEnum,
              bw: v.writeRepeatedEnum,
            },
            filter_match_all_category_tags: {
              n: 13,
              r: !0,
              q: !0,
              br: a.readString,
              bw: v.writeRepeatedString,
            },
            filter_match_any_category_tags: {
              n: 14,
              r: !0,
              q: !0,
              br: a.readString,
              bw: v.writeRepeatedString,
            },
            contains_definitionids: {
              n: 15,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
            include_direct_purchase_disabled: {
              n: 16,
              br: a.readBool,
              bw: v.writeBool,
            },
            excluded_content_descriptors: {
              n: 17,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
            excluded_appids: {
              n: 18,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
            excluded_store_tagids: {
              n: 19,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
            store_tagids: {
              n: 20,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
            search_term: { n: 21, br: a.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_QueryRewardItems_Request`;
    }
  },
  Eu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.definitions || o(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            definitions: { n: 1, c: yu, r: !0, q: !0 },
            total_count: { n: 2, br: a.readInt32, bw: v.writeInt32 },
            count: { n: 3, br: a.readInt32, bw: v.writeInt32 },
            next_cursor: { n: 4, br: a.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_QueryRewardItems_Response`;
    }
  },
  Du = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.requests || o(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { requests: { n: 1, c: Tu, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_BatchedQueryRewardItems_Request`;
    }
  },
  Ou = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.responses || o(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { responses: { n: 1, c: ku, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_BatchedQueryRewardItems_Response`;
    }
  },
  ku = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.eresult || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            eresult: { n: 1, br: a.readInt32, bw: v.writeInt32 },
            response: { n: 2, c: Eu },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_BatchedQueryRewardItems_Response_Response`;
    }
  },
  Au = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: a.readFixed64String,
              bw: v.writeFixed64String,
            },
            language: { n: 2, br: a.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetEquippedProfileItems_Request`;
    }
  },
  ju = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.active_definitions || o(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            active_definitions: { n: 1, c: yu, r: !0, q: !0 },
            inactive_definitions: { n: 2, c: yu, r: !0, q: !0 },
            bundle_definitions: { n: 3, c: yu, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetEquippedProfileItems_Response`;
    }
  },
  Mu;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`LoyaltyRewards.GetPointsForSpend#1`, T(Kl, t, n), ql, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetPointsForSpend = t;
  function n(e, t, n) {
    return e.SendMsg(`LoyaltyRewards.GetSummary#1`, T(Ul, t, n), Wl, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetSummary = n;
  function r(e, t, n) {
    return e.SendMsg(`LoyaltyRewards.RedeemPoints#1`, T(Jl, t, n), Zl, {
      ePrivilege: 1,
    });
  }
  e.RedeemPoints = r;
  function i(e, t, n) {
    return e.SendMsg(
      `LoyaltyRewards.RedeemPointsForBadgeLevel#1`,
      T(Yl, t, n),
      Zl,
      { ePrivilege: 1 },
    );
  }
  e.RedeemPointsForBadgeLevel = i;
  function a(e, t, n) {
    return e.SendMsg(
      `LoyaltyRewards.RedeemPointsToUpgradeItem#1`,
      T(Xl, t, n),
      Zl,
      { ePrivilege: 1 },
    );
  }
  e.RedeemPointsToUpgradeItem = a;
  function o(e, t, n) {
    return e.SendMsg(
      `LoyaltyRewards.RedeemPointsForProfileCustomization#1`,
      T(Ql, t, n),
      $l,
      { ePrivilege: 1 },
    );
  }
  e.RedeemPointsForProfileCustomization = o;
  function s(e, t, n) {
    return e.SendMsg(
      `LoyaltyRewards.RedeemPointsForProfileCustomizationUpgrade#1`,
      T(eu, t, n),
      tu,
      { ePrivilege: 1 },
    );
  }
  e.RedeemPointsForProfileCustomizationUpgrade = s;
  function c(e, t, n) {
    return e.SendMsg(
      `LoyaltyRewards.RegisterForSteamDeckRewards#1`,
      T(nu, t, n),
      ru,
      { ePrivilege: 1 },
    );
  }
  e.RegisterForSteamDeckRewards = c;
  function l(e, t, n) {
    return e.SendMsg(`LoyaltyRewards.AddReaction#1`, T(iu, t, n), au, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.AddReaction = l;
  function u(e, t, n) {
    return e.SendMsg(`LoyaltyRewards.GetReactions#1`, T(ou, t, n), su, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetReactions = u;
  function d(e, t, n) {
    return e.SendMsg(
      `LoyaltyRewards.GetReactionsSummaryForUser#1`,
      T(cu, t, n),
      lu,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetReactionsSummaryForUser = d;
  function f(e, t, n) {
    return e.SendMsg(`LoyaltyRewards.GetReactionConfig#1`, T(du, t, n), fu, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetReactionConfig = f;
  function p(e, t, n) {
    return e.SendMsg(
      `LoyaltyRewards.GetProfileCustomizationsConfig#1`,
      T(mu, t, n),
      hu,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetProfileCustomizationsConfig = p;
  function m(e, t, n) {
    return e.SendMsg(`LoyaltyRewards.GetEligibleApps#1`, T(gu, t, n), _u, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetEligibleApps = m;
  function h(e, t, n) {
    return e.SendMsg(
      `LoyaltyRewards.GetActivePurchaseBonuses#1`,
      T(Cu, t, n),
      wu,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetActivePurchaseBonuses = h;
  function g(e, t, n) {
    return e.SendMsg(`LoyaltyRewards.QueryRewardItems#1`, T(Tu, t, n), Eu, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.QueryRewardItems = g;
  function _(e, t, n) {
    return e.SendMsg(
      `LoyaltyRewards.BatchedQueryRewardItems#1`,
      T(Du, t, n),
      Ou,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.BatchedQueryRewardItems = _;
  function v(e, t, n) {
    return e.SendMsg(
      `LoyaltyRewards.GetEquippedProfileItems#1`,
      T(Au, t, n),
      ju,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetEquippedProfileItems = v;
})((Mu ||= {}));
async function Nu(e, t) {
  let { rgDefIDs: n, strCategory: r, itemClass: i } = t,
    a = await Mu.QueryRewardItems(e, {
      definitionids: n,
      community_item_classes: i ? [i] : void 0,
      filter_match_any_category_tags: r ? [r] : void 0,
    });
  if (!a.BSuccess())
    throw Error(`LoyaltyRewards.QueryRewardItems answered ` + a.GetEResult());
  return a.Body().toObject().definitions ?? [];
}
var Pu;
function Fu() {
  let e = Fr();
  return e
    ? e.GetAnonymousServiceTransport()
    : ((Pu ||= Pr(new Nr(f.WEBAPI_BASE_URL))),
      Pu.GetAnonymousServiceTransport());
}
async function Iu(e) {
  return Nu(Fu(), e);
}
var Lu = 36e5;
function Ru(e) {
  return [`LoyaltyRewardDef`, e];
}
function zu(e) {
  return {
    queryKey: Ru(e),
    queryFn: async () => {
      let t = await Iu({ rgDefIDs: [e] }),
        n = t.length == 1 ? t[0] : void 0;
      if (!n)
        throw Error(
          `Asked for point shop item ${e} and got ${t.length} items back, wanted exactly one.`,
        );
      return n;
    },
    enabled: e > 0,
    staleTime: Lu,
    retry: !1,
  };
}
function Bu(e) {
  let { data: t } = Kt(zu(e));
  return t;
}
var Vu = 1778623200;
function Hu(e, t) {
  let n = !1;
  return (
    e && e.GetEventType() == 36
      ? (n = !0)
      : e && t && t.is_creator_home && (n = Uu(e, t)),
    n
  );
}
function Uu(e, t) {
  return !!t && !!t.is_creator_home && (e.createTime ?? 0) > Vu;
}
var K = re(En()),
  Wu = class {
    constructor() {
      ce(this);
    }
    m_mapClanToImages = new Map();
    m_mapClanImageLoadPromises = new Map();
    m_imageListChangeCallback = new Map();
    m_mapClanImageLoadState = new Map();
    m_mapImageIDToResolution = new Map();
    BHasImageResolution(e) {
      return this.m_mapImageIDToResolution.has(e.imageid);
    }
    GetImageResolution(e) {
      return this.m_mapImageIDToResolution.get(e.imageid);
    }
    SetImageResolution(e, t) {
      this.m_mapImageIDToResolution.set(e.imageid, t);
    }
    GetImageListCallbackForClanAccountIDInternal(e) {
      return (
        this.m_imageListChangeCallback.has(e) ||
          this.m_imageListChangeCallback.set(e, new pe()),
        this.m_imageListChangeCallback.get(e)
      );
    }
    GetImageListCallbackForClanAccountID(e) {
      return this.GetImageListCallbackForClanAccountIDInternal(e);
    }
    m_vecClanImageDragListener = [];
    AddClanImageDragListener(e) {
      this.m_vecClanImageDragListener.indexOf(e) == -1 &&
        this.m_vecClanImageDragListener.push(e);
    }
    RemoveClanImageDragListener(e) {
      let t = this.m_vecClanImageDragListener.indexOf(e);
      t != -1 && this.m_vecClanImageDragListener.splice(t, 1);
    }
    GetClanImageDragListener() {
      return this.m_vecClanImageDragListener;
    }
    BHasLoadedClanImages(e) {
      return this.m_mapClanToImages.has(e.GetAccountID());
    }
    async LoadClanImages(e, t, n) {
      let r = e.GetAccountID();
      if (t || !this.m_mapClanImageLoadPromises.has(r)) {
        let i = this.InternalLoadClanImages(e, t, n);
        this.m_mapClanImageLoadPromises.set(r, i);
      }
      return this.m_mapClanImageLoadPromises.get(r);
    }
    async InternalLoadClanImages(t, n, r) {
      let i = t.GetAccountID();
      if (
        (e(t && i != 0, `ClanSteamID missing:` + t),
        t && (!this.m_mapClanToImages.has(i) || n))
      ) {
        let e = {},
          n,
          a =
            C.COMMUNITY_BASE_URL +
            `/gid/` +
            t.ConvertTo64BitString() +
            `/getimages/`;
        if (
          ((n = await K.default.get(a, {
            params: e,
            withCredentials: !0,
            cancelToken: r,
          })),
          n)
        ) {
          for (let e of n.data.images) e.clanAccountID = i;
          d(() => {
            this.m_mapClanImageLoadState.set(i, { loaded: !0 }),
              this.m_mapClanToImages.set(i, n.data.images),
              this.GetImageListCallbackForClanAccountIDInternal(i).Dispatch(
                n.data.images,
              );
          });
        }
      }
      return this.m_mapClanToImages.get(i);
    }
    GetLoadState(e) {
      return this.m_mapClanImageLoadState.get(e.GetAccountID());
    }
    GetClanImages(e) {
      return this.GetClanImagesByAccount(e.GetAccountID());
    }
    GetClanImagesByAccount(e) {
      return this.m_mapClanToImages.get(e) || [];
    }
    GetFilteredClanImages(e, t) {
      let n = q.GetClanImages(e);
      return this.GetFilteredClanImagesList(n, t);
    }
    GetFilteredClanImagesList(e, t) {
      if (t && t.trim().length > 0) {
        t = t.trim().toLowerCase();
        let n = [];
        for (let r of e)
          r.file_name && r.file_name.toLowerCase().indexOf(t) >= 0 && n.push(r);
        return n;
      }
      return e;
    }
    GetClanImageByID(e, t) {
      let n = e.GetAccountID(),
        r = this.m_mapClanToImages.get(n);
      return r ? r.find((e) => e.imageid == t) : void 0;
    }
    GetClanImageByURL(e, t) {
      let n = e.GetAccountID(),
        r = this.m_mapClanToImages.get(n);
      return r ? r.find((e) => e.thumb_url == t || e.url == t) : void 0;
    }
    GetClanImageByFile(e, t) {
      let n = e.GetAccountID(),
        r = this.m_mapClanToImages.get(n);
      return r ? r.find((e) => e.file_name == t.name) : void 0;
    }
    GetClanImageByImageHash(e, t) {
      let n = e.GetAccountID(),
        r = this.m_mapClanToImages.get(n);
      return r ? r.find((e) => e.image_hash == t) : void 0;
    }
    async DeleteClanImageByID(e, t) {
      let n = { sessionid: _(), imageid: t },
        r = e.GetAccountID(),
        i = await K.default.get(
          C.COMMUNITY_BASE_URL +
            `/gid/` +
            e.ConvertTo64BitString() +
            `/deleteimage/`,
          { params: n },
        );
      if (!i || i.status != 200 || i.data.success != 1) return i.data;
      let a = this.m_mapClanToImages.get(r);
      if (a) {
        let e = a.findIndex((e, n, r) => e.imageid == t);
        e >= 0 &&
          (a.splice(e, 1),
          this.GetImageListCallbackForClanAccountIDInternal(r).Dispatch([
            ...a,
          ]));
      }
      return i.data;
    }
    async DeleteClanImage(e, t) {
      return this.DeleteClanImageByID(e, t.imageid);
    }
  };
S([u], Wu.prototype, `m_mapClanToImages`, void 0),
  S([u], Wu.prototype, `m_mapClanImageLoadState`, void 0);
var q = new Wu();
function Gu(e) {
  let t = D.InitFromClanID(e, C.EUNIVERSE),
    n = Dn(`useLoadClanImages`),
    [r, i] = (0, z.useState)(() => q.BHasLoadedClanImages(t));
  return (
    (0, z.useEffect)(() => {
      let t = D.InitFromClanID(e, C.EUNIVERSE);
      return (
        q.BHasLoadedClanImages(t) ||
          q.LoadClanImages(t, !1, n.token).then(() => i(!0)),
        () => n.cancel()
      );
    }, [e, n]),
    r
  );
}
var Ku = `_0ayR5P4snOQ-`,
  qu = `CTubiAgon4c-`,
  Ju = `_4Y5F2iyNmd4-`,
  Yu = `_7zJSazZLpTI-`,
  Xu = `xFTxNDMXZvw-`,
  Zu = class extends z.Component {
    m_strLastSearch;
    m_rgCurrentMatches = [];
    m_mapMatchByKey = new Map();
    containerRef = z.createRef();
    constructor(e) {
      super(e),
        (this.m_hMobxSearchDisposer = ne(async () => {
          await this.UpdateSearchResults(this.props.strSearch),
            this.forceUpdate();
        })),
        (this.state = { selectedIndex: void 0 });
    }
    OnKeyDown(e) {
      this.BHandleKeyPress(e.keyCode) && e.preventDefault();
    }
    BHandleKeyPress(e) {
      switch (e) {
        case 38:
          this.SetSelectedIndexDelta(-1);
          break;
        case 40:
          this.SetSelectedIndexDelta(1);
          break;
        case 36:
          this.SetSelectedIndex(0);
          break;
        case 33:
          this.SetSelectedIndexDelta(-this.GetPageSize());
          break;
        case 35:
          this.SetSelectedIndex(-1);
          break;
        case 34:
          this.SetSelectedIndexDelta(this.GetPageSize());
          break;
        case 13:
        case 9:
          if (this.state.selectedIndex !== void 0)
            this.ChooseSuggestion(
              this.m_rgCurrentMatches[this.state.selectedIndex],
            );
          else return this.props.onSuggestionSelected(this.props.strSearch), !1;
          break;
        case 27:
          this.props.onSuggestionSelected(this.props.strSearch);
          break;
        default:
          return !1;
      }
      return !0;
    }
    GetPageSize() {
      let e = this.containerRef.current,
        t = e && e.firstElementChild,
        n = this.m_rgCurrentMatches.length;
      if ((n > this.getMaxMatches() && (n = this.getMaxMatches()), t && n)) {
        let e = t.scrollHeight / n,
          r = t.clientHeight / e;
        return Math.max(1, Math.floor(r));
      }
      return 5;
    }
    ChooseSuggestion(e) {
      this.props.onSuggestionSelected(
        this.props.strSearch,
        e ? this.getSelection(e) : void 0,
      );
    }
    SetSelectedIndexDelta(e) {
      this.state.selectedIndex === void 0
        ? this.SetSelectedIndex(e === 1 ? 0 : e)
        : this.SetSelectedIndex(this.state.selectedIndex + e);
    }
    SetSelectedIndex(e) {
      if (!this.m_rgCurrentMatches.length) return;
      let t = this.m_rgCurrentMatches.length;
      t > this.getMaxMatches() && (t = this.getMaxMatches()),
        (e %= t),
        e < 0 && (e += t),
        this.setState({ selectedIndex: e });
    }
    FindKeyIndex(e) {
      if (!this.m_mapMatchByKey.size && this.m_rgCurrentMatches.length)
        for (let e = 0; e < this.m_rgCurrentMatches.length; e++)
          this.m_mapMatchByKey.set(this.getKey(this.m_rgCurrentMatches[e]), e);
      return this.m_mapMatchByKey.get(e);
    }
    OnClickSuggestion(e) {
      let t = this.FindKeyIndex(e);
      t !== void 0 && this.ChooseSuggestion(this.m_rgCurrentMatches[t]);
    }
    OnMouseOverSuggestion(e) {
      let t = this.FindKeyIndex(e);
      t !== void 0 && this.SetSelectedIndex(t);
    }
    BindSelectedElement(e) {
      if (!e) return;
      let t = this.containerRef.current,
        n = e.containerRef.current,
        r = t && t.firstElementChild;
      n &&
        r &&
        (r.scrollTop + r.clientHeight < n.offsetTop ||
          n.offsetTop < r.scrollTop) &&
        n.scrollIntoView();
    }
    async UpdateSearchResults(e) {
      (this.m_rgCurrentMatches = await this.performSearch(e)),
        (this.m_strLastSearch = e),
        this.m_mapMatchByKey.clear(),
        this.m_rgCurrentMatches.length
          ? !this.state || this.state.selectedIndex === void 0
            ? (this.props.nMinimumSearchLengthBeforeAutoSelection === void 0 ||
                e.length >=
                  this.props.nMinimumSearchLengthBeforeAutoSelection) &&
              this.setState({ selectedIndex: 0 })
            : this.state.selectedIndex >= this.m_rgCurrentMatches.length &&
              this.setState({ selectedIndex: 0 })
          : this.state &&
            this.state.selectedIndex !== void 0 &&
            this.setState({ selectedIndex: void 0 });
    }
    m_hMobxSearchDisposer;
    componentWillUnmount() {
      this.m_hMobxSearchDisposer &&= (this.m_hMobxSearchDisposer(), void 0);
    }
    async componentDidUpdate(e) {
      this.m_strLastSearch != this.props.strSearch &&
        (await this.UpdateSearchResults(this.props.strSearch),
        this.forceUpdate());
    }
    render() {
      let e = [];
      if (this.m_rgCurrentMatches.length) {
        let t = this.getMaxMatches();
        for (let n = 0; n < Math.min(t, this.m_rgCurrentMatches.length); n++) {
          let t = this.m_rgCurrentMatches[n],
            r = this.getKey(t),
            i = n === this.state.selectedIndex;
          e.push(
            (0, B.jsx)(
              Qu,
              {
                matchKey: r,
                fnOnClick: this.OnClickSuggestion,
                fnOnMouseOver: this.OnMouseOverSuggestion,
                bIsSelected: i,
                ref: i ? this.BindSelectedElement : void 0,
                children: this.renderMatch(t),
              },
              r,
            ),
          );
        }
        this.m_rgCurrentMatches.length > t &&
          e.push(
            this.renderTooManyMatchesMessage(
              this.m_rgCurrentMatches.length - t,
            ),
          );
      } else {
        let t = this.renderNoMatchMessage();
        if (!t) return null;
        e.push(t);
      }
      return (0, B.jsx)(`div`, {
        className: Ku,
        ref: this.containerRef,
        children: (0, B.jsxs)(`div`, {
          className: qu,
          tabIndex: 0,
          onKeyDown: this.OnKeyDown,
          children: [this.renderHeader(), e],
        }),
      });
    }
  };
S([E], Zu.prototype, `OnKeyDown`, null),
  S([E], Zu.prototype, `OnClickSuggestion`, null),
  S([E], Zu.prototype, `OnMouseOverSuggestion`, null),
  S([E], Zu.prototype, `BindSelectedElement`, null);
var Qu = class extends z.PureComponent {
  containerRef = z.createRef();
  OnMouseOver(e) {
    this.props.fnOnMouseOver(this.props.matchKey);
  }
  OnClick(e) {
    this.props.fnOnClick(this.props.matchKey);
  }
  render() {
    return (0, B.jsx)(`div`, {
      className: t(Ju, Yu, this.props.bIsSelected ? Xu : ``),
      onMouseEnter: this.OnMouseOver,
      onClick: this.OnClick,
      ref: this.containerRef,
      children: this.props.children,
    });
  }
};
S([E], Qu.prototype, `OnMouseOver`, null),
  S([E], Qu.prototype, `OnClick`, null);
var $u = `ARyrUoFBJKQ-`,
  ed = class extends Zu {
    performSearch(e) {
      return this.props.emoticonStore.SearchEmoticons(e, 10, !1);
    }
    getSelection(e) {
      return e.name;
    }
    getKey(e) {
      return e.name;
    }
    renderMatch(e) {
      return (0, B.jsxs)(`div`, {
        className: t(void 0, e.recent ? `Recent` : ``),
        children: [
          (0, B.jsxs)(`div`, {
            className: $u,
            children: [
              (0, B.jsx)(or, { emoticon: e.name }),
              e.new && (0, B.jsx)(ir, {}),
            ],
          }),
          `:`,
          e.name,
          `:`,
        ],
      });
    }
    renderNoMatchMessage() {
      return null;
    }
    renderTooManyMatchesMessage(e) {
      return null;
    }
    renderHeader() {
      return null;
    }
    getMaxMatches() {
      return Number.MAX_VALUE;
    }
  },
  td = `hgRTS5e4dgI-`,
  nd = class extends Zu {
    performSearch(e) {
      let t = [];
      return (
        this.props.supportBBCodes.forEach((n) => {
          n.indexOf(e) >= 0 && t.push({ name: n });
        }),
        t
      );
    }
    getSelection(e) {
      return `[` + e.name + `][/` + e.name + `]`;
    }
    getKey(e) {
      return e.name;
    }
    renderMatch(e) {
      return (0, B.jsxs)(
        `div`,
        {
          className: t(void 0),
          children: [
            (0, B.jsx)(`div`, { className: td, children: e.name }),
            `[`,
            e.name,
            `]...[/`,
            e.name,
            `]`,
          ],
        },
        e.name,
      );
    }
    renderNoMatchMessage() {
      return (0, B.jsx)(
        `div`,
        { className: t(Yu, void 0), children: A(`#Bbcode_No_Match`) },
        `nomatches`,
      );
    }
    renderTooManyMatchesMessage(e) {
      return null;
    }
    renderHeader() {
      return null;
    }
    getMaxMatches() {
      return Number.MAX_VALUE;
    }
  },
  J = class extends z.Component {
    descTextAreaRef = z.createRef();
    m_MentionDialog;
    m_bDisabled = !0;
    m_iMentionSearchStartOffset;
    m_iMentionSearchCancelledOffset;
    constructor(e) {
      super(e),
        (this.state = {
          mentionSearch: void 0,
          activeSuggestSearchType: void 0,
        });
    }
    BindMentionDialog(e) {
      this.m_MentionDialog = e ?? void 0;
    }
    OnKeyDown(e) {
      this.state.activeSuggestSearchType &&
      this.m_MentionDialog &&
      !e.shiftKey &&
      !e.ctrlKey &&
      this.m_MentionDialog.BHandleKeyPress(e.keyCode)
        ? e.preventDefault()
        : (e.keyCode == 8 || e.keyCode == 46) &&
          (this.m_iMentionSearchCancelledOffset = void 0);
    }
    FindMatchOpener(e, t, n) {
      for (let r = n - 1; r >= 0; r--)
        if (t[r] == e) return r;
        else if (
          t[r] == ` ` ||
          t[r] ==
            `
`
        )
          break;
    }
    ReplaceSuggestedText(e, t) {
      let n = this.descTextAreaRef.current;
      if (!n) return;
      let r = n.selectionStart,
        i = n.value,
        a = this.FindMatchOpener(e, i, r);
      if (
        (a === void 0 && e == `@` && (a = this.FindMatchOpener(`＠`, i, r)),
        a !== void 0)
      ) {
        let e = i.substr(0, a);
        (e += t), (r >= i.length || i[r] != ` `) && (e += ` `);
        let o = e.length;
        (e += i.substr(r)),
          (n.value = e),
          (n.selectionStart = n.selectionEnd = o),
          this.props.fnSetText(e),
          this.FocusTextInput();
      }
    }
    OnFocus(e) {
      this.UpdateAutoSearchState();
    }
    OnKeyPress(e) {
      this.UpdateAutoSearchState();
    }
    OnClick(e) {
      this.UpdateAutoSearchState();
    }
    ClearMentionSearchState() {
      (this.m_iMentionSearchStartOffset = void 0),
        this.state.activeSuggestSearchType &&
          this.setState({
            activeSuggestSearchType: void 0,
            mentionSearch: void 0,
          });
    }
    OnEmoticonSuggestionSelected(e, t) {
      t
        ? (this.ReplaceSuggestedText(`:`, `:` + t + `:`),
          this.ClearMentionSearchState())
        : ((this.m_iMentionSearchCancelledOffset =
            this.m_iMentionSearchStartOffset),
          this.ClearMentionSearchState());
    }
    OnBBCodeSuggestionSelected(e, t) {
      t
        ? (this.ReplaceSuggestedText(`[`, t), this.ClearMentionSearchState())
        : ((this.m_iMentionSearchCancelledOffset =
            this.m_iMentionSearchStartOffset),
          this.ClearMentionSearchState());
    }
    FocusTextInput() {
      this.descTextAreaRef.current && this.descTextAreaRef.current.focus();
    }
    UpdateAutoSearchState() {
      let e = this.descTextAreaRef.current;
      if (!e || this.m_bDisabled) return;
      if (e.selectionStart != e.selectionEnd || !e.selectionStart) {
        this.ClearMentionSearchState();
        return;
      }
      let t = e.selectionStart,
        n = e.value,
        r,
        i;
      for (let e = t - 1; e >= 0; e--) {
        let t = e > 0 ? n[e - 1] : void 0;
        if (this.props.emoticonStore && n[e] == `:` && n.length > 2) {
          (t &&
            t != ` ` &&
            t !=
              `
` &&
            t != `:`) ||
            ((r = e), (i = `Emoticon`));
          break;
        }
        if (n[e] == `[` && (e + 1 > n.length || n[e + 1] != `/`)) {
          (t &&
            t != ` ` &&
            t !=
              `
` &&
            t != `]`) ||
            ((r = e), (i = `BBCode`));
          break;
        }
        if (
          n[e] == ` ` ||
          n[e] ==
            `
`
        )
          break;
      }
      if (r === void 0 || r === this.m_iMentionSearchCancelledOffset) {
        this.ClearMentionSearchState();
        return;
      }
      let a = n.substr(r + 1, t - r - 1);
      (this.m_iMentionSearchStartOffset = r),
        this.setState({ activeSuggestSearchType: i, mentionSearch: a });
    }
    GetTextAreaRef() {
      return this.descTextAreaRef;
    }
    GetTextAreaCurrent() {
      return this.descTextAreaRef.current;
    }
    render() {
      let {
          emoticonStore: e,
          supportBBCodes: t,
          fnSetText: n,
          ...r
        } = this.props,
        i;
      switch (this.state.activeSuggestSearchType) {
        case `Emoticon`:
          e &&
            (i = (0, B.jsx)(ed, {
              emoticonStore: e,
              strSearch: this.state.mentionSearch,
              nMinimumSearchLengthBeforeAutoSelection: 2,
              onSuggestionSelected: this.OnEmoticonSuggestionSelected,
              ref: this.BindMentionDialog,
            }));
          break;
        case `BBCode`:
          i = (0, B.jsx)(nd, {
            supportBBCodes: t,
            strSearch: this.state.mentionSearch,
            nMinimumSearchLengthBeforeAutoSelection: 2,
            onSuggestionSelected: this.OnBBCodeSuggestionSelected,
            ref: this.BindMentionDialog,
          });
      }
      return (0, B.jsxs)(z.Fragment, {
        children: [
          i,
          (0, B.jsx)(`textarea`, {
            ...r,
            ref: this.descTextAreaRef,
            onKeyDown: this.OnKeyDown,
            onKeyUp: this.OnKeyPress,
            onFocus: this.OnFocus,
            onClick: this.OnClick,
          }),
        ],
      });
    }
  };
S([E], J.prototype, `BindMentionDialog`, null),
  S([E], J.prototype, `OnKeyDown`, null),
  S([E], J.prototype, `OnFocus`, null),
  S([E], J.prototype, `OnKeyPress`, null),
  S([E], J.prototype, `OnClick`, null),
  S([E], J.prototype, `OnEmoticonSuggestionSelected`, null),
  S([E], J.prototype, `OnBBCodeSuggestionSelected`, null),
  S([E], J.prototype, `FocusTextInput`, null),
  S([E], J.prototype, `GetTextAreaRef`, null),
  S([E], J.prototype, `GetTextAreaCurrent`, null);
var rd = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.bincremental || o(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            bincremental: { n: 1, br: a.readBool, bw: v.writeBool },
            friends: { n: 2, c: id, r: !0, q: !0 },
            max_friend_count: { n: 3, br: a.readUint32, bw: v.writeUint32 },
            active_friend_count: { n: 4, br: a.readUint32, bw: v.writeUint32 },
            friends_limit_hit: { n: 5, br: a.readBool, bw: v.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMsgClientFriendsList`;
    }
  },
  id = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.ulfriendid || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ulfriendid: {
              n: 1,
              br: a.readFixed64String,
              bw: v.writeFixed64String,
            },
            efriendrelationship: { n: 2, br: a.readUint32, bw: v.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMsgClientFriendsList_Friend`;
    }
  },
  ad = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.groupid || o(e.M()),
        G.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            groupid: { n: 1, br: a.readUint32, bw: v.writeUint32 },
            name: { n: 2, br: a.readString, bw: v.writeString },
            accountid_members: {
              n: 3,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFriendsListCategory`;
    }
  },
  od = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), G.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFriendsList_GetCategories_Request`;
    }
  },
  sd = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.categories || o(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { categories: { n: 1, c: ad, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFriendsList_GetCategories_Response`;
    }
  },
  cd = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.accountid || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: a.readUint32, bw: v.writeUint32 },
            clanid: { n: 2, br: a.readUint32, bw: v.writeUint32 },
            chat_group_id: {
              n: 3,
              br: a.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFriendsListFavoriteEntry`;
    }
  },
  ld = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), G.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFriendsList_GetFavorites_Request`;
    }
  },
  ud = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.favorites || o(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { favorites: { n: 1, c: cd, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFriendsList_GetFavorites_Response`;
    }
  },
  dd = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.favorites || o(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { favorites: { n: 1, c: cd, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFriendsList_SetFavorites_Request`;
    }
  },
  fd = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), G.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFriendsList_SetFavorites_Response`;
    }
  },
  pd = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.favorites || o(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { favorites: { n: 1, c: cd, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFriendsList_FavoritesChanged_Notification`;
    }
  },
  md = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), G.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFriendsList_GetFriendsList_Request`;
    }
  },
  hd = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.friendslist || o(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { friendslist: { n: 1, c: rd } } }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFriendsList_GetFriendsList_Response`;
    }
  },
  gd;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`FriendsList.GetCategories#1`, T(od, t, n), sd, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetCategories = t;
  function n(e, t, n) {
    return e.SendMsg(`FriendsList.GetFriendsList#1`, T(md, t, n), hd, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetFriendsList = n;
  function r(e, t, n) {
    return e.SendMsg(`FriendsList.GetFavorites#1`, T(ld, t, n), ud, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetFavorites = r;
  function i(e, t, n) {
    return e.SendMsg(`FriendsList.SetFavorites#1`, T(dd, t, n), fd, {
      ePrivilege: 1,
    });
  }
  e.SetFavorites = i;
})((gd ||= {}));
var _d;
(function (e) {
  e.FavoritesChangedHandler = {
    name: `FriendsListClient.FavoritesChanged#1`,
    request: pd,
  };
})((_d ||= {}));
function vd() {
  let e = Wt(),
    t = Pt();
  return Kt(yd(e, t));
}
function yd(e, t) {
  return {
    queryKey: [`GetFriendsList`, t],
    queryFn: async () => {
      let t = oe.Init(md),
        n = await gd.GetFriendsList(e, t),
        r = [];
      for (let e of n.Body().friendslist()?.friends() ?? []) {
        let t = e.ulfriendid();
        t &&
          (e.efriendrelationship() == 3 || e.efriendrelationship() == 6) &&
          new D(t).BIsIndividualAccount() &&
          r.push(t);
      }
      return r;
    },
  };
}
var bd = `nIUbxO5p4A8-`,
  xd = `_0VP7ctGOadU-`,
  Sd = `siVkCB-BeMc-`,
  Cd = `wrPMc1ko4O0-`,
  wd = `sa1-P2tbrtc-`,
  Td = `_3QeIZHH9LCM-`,
  Ed = `REbb7We6KRY-`,
  Dd = `DgynSAJA0e0-`,
  Od = `WJB2hOx55Ic-`,
  kd = `Px4wClOhj8g-`,
  Ad = `hluYSsWwKs8-`,
  jd = `AALKXsdrG-s-`,
  Md = `LR7E8btmRt0-`,
  Nd = `Mc05zduSJmM-`,
  Pd = `_7IgH0aB0drE-`,
  Fd = `ZLkF2UoZt5M-`,
  Id = `-KEQzYsMyLo-`,
  Ld = `quOQjx4gLwQ-`,
  Rd = `_1ZQxfdsiPgM-`,
  zd = `NpcSqQhn8sA-`,
  Bd = `i0pjDy4li-A-`,
  Vd = `fwAY6BoxoKI-`,
  Hd = `d-SkXlSVK18-`,
  Ud = (e) => {
    let { clanSteamID: t, fnImageSelectCallBack: n } = e,
      [r, i] = (0, z.useState)(``),
      a = Gu(e.clanSteamID.GetAccountID()),
      o = () => e.closeModal && e.closeModal(),
      s = q.GetFilteredClanImages(t, r),
      c = (e) => {
        n(e), o();
      };
    return (0, B.jsx)(Ce, {
      children: (0, B.jsx)(_t, {
        onEscKeypress: o,
        children: (0, B.jsxs)(at, {
          children: [
            (0, B.jsx)(ct, { children: A(`#ClanImageChooser_Title`) }),
            (0, B.jsx)($e, {
              children: (0, B.jsxs)(Ie, {
                children: [
                  (0, B.jsx)(`p`, { children: A(`#ClanImageChooser_Desc`) }),
                  (0, B.jsx)(Ke, {
                    placeholder: A(`#ClanImageChooser_Search`),
                    value: r,
                    onChange: (e) => i(e.currentTarget.value),
                  }),
                  (0, B.jsx)(`div`, {
                    className: Rd,
                    children: a
                      ? (0, B.jsx)(P, { size: `medium`, string: A(`#Loading`) })
                      : s.length > 0
                        ? s.map((e) =>
                            (0, B.jsx)(
                              Wd,
                              {
                                clanImage: e,
                                searchStringHilight: r,
                                fnImageClick: c,
                              },
                              `ci` + e.image_hash,
                            ),
                          )
                        : r.trim().length == 0
                          ? (0, B.jsx)(`div`, {
                              children: A(`#ClanImageChooser_None`),
                            })
                          : (0, B.jsx)(`div`, {
                              children: A(
                                `#EventCalendar_GameSearch_NoneFound`,
                              ),
                            }),
                  }),
                ],
              }),
            }),
            (0, B.jsx)(ot, {
              children: (0, B.jsx)(nt, {
                onClick: o,
                children: A(`#Button_Cancel`),
              }),
            }),
          ],
        }),
      }),
    });
  },
  Wd = (e) => {
    let { clanImage: t, searchStringHilight: n, fnImageClick: r } = e,
      i = t.file_name ? t.file_name : ``,
      a = Gd(n, i, String(t.imageid), zd);
    return (0, B.jsxs)(`div`, {
      className: Bd,
      children: [
        (0, B.jsx)(`div`, {
          className: Vd,
          style: { backgroundImage: `url( '${t.thumb_url}' )` },
          onDoubleClick: () => r(t),
        }),
        (0, B.jsx)(`div`, { className: Hd, title: i, children: a }),
      ],
    });
  };
function Gd(e, t, n, r) {
  let i = [];
  if (e.length > 0) {
    let a = t.toLocaleLowerCase();
    for (let o = 0; o < t.length; ) {
      let s = a.indexOf(e, o);
      if (s < 0) {
        i.push(
          (0, B.jsx)(`span`, { children: t.substring(o) }, n + `_` + String(o)),
        );
        break;
      }
      o < s &&
        i.push(
          (0, B.jsx)(
            `span`,
            { children: t.substring(o, s) },
            n + `_` + String(o),
          ),
        ),
        i.push(
          (0, B.jsx)(
            `span`,
            { className: r, children: t.substr(s, e.length) },
            n + `_` + String(o),
          ),
        ),
        (o = s + e.length);
    }
  } else i.push((0, B.jsx)(`span`, { children: t }, n + `_null`));
  return i;
}
function Kd(e, t, n) {
  let r = Rr(t.width, n),
    i = Rr(t.height, n);
  return {
    sKey: `${e}_${r}x${i}`,
    width: r,
    height: i,
    bEnforceDimensions: !t.bDisableEnforceDimensions,
    artworkType: e,
    bHiddenFromDropdown: e === `hero`,
    bDeprecated: (n ?? 0) >= 1,
    fnGetLabelText() {
      return this.artworkType == `spotlight`
        ? A(`#EventEditor_ArtworkType_store_spotlight`)
        : A(`#EventEditor_ArtworkType_` + this.artworkType);
    },
  };
}
function qd(t) {
  return t?.flatMap((t) => {
    let n = Vr[t];
    if (
      (e(!!n, `Artwork Type not in Map ${t}`),
      typeof n.width == `number` && typeof n.height == `number`)
    )
      return [Kd(t, n)];
    {
      let e = Math.max(
        Array.isArray(n.width) ? n.width.length : 1,
        Array.isArray(n.height) ? n.height.length : 1,
      );
      return Array.from({ length: e }, (e, r) => Kd(t, n, r));
    }
  });
}
var Y = class extends zr {
  m_filesToUpload = u.array();
  m_filesCompleted = u.array();
  m_clanImagesV2;
  m_clanSteamID;
  m_rgImageOptions;
  m_localizedImageGroupPrimaryImage;
  m_lastError = void 0;
  constructor(e, t, n, r) {
    super(),
      ce(this),
      (this.m_clanSteamID = e),
      (this.m_rgImageOptions = qd(t)),
      (this.m_localizedImageGroupPrimaryImage = n),
      (this.m_clanImagesV2 = r ?? !1);
  }
  GetClanSteamID() {
    return this.m_clanSteamID;
  }
  async AddImage(e, t = 0) {
    let { language: n } = Hr(e.name, t);
    return this.AddImageForLanguage(e, n);
  }
  async AddImageForLanguage(e, t) {
    if (!ke(e.type) && !(ie.is_support && Ae(e.type))) return !1;
    let n = await je(e, Ae(e.type));
    if (!n) return !1;
    let r = new Br(
      e,
      e.name,
      t,
      this.m_rgImageOptions,
      n.src,
      Oe(n),
      n,
      this.m_localizedImageGroupPrimaryImage,
    );
    return (this.m_filesToUpload = [...this.m_filesToUpload, r]), !0;
  }
  async AddExistingClanImage(e, t = 0) {
    let n = R.GetHashAndExt(e);
    if (!n) return !1;
    let r = R.GenerateEditableURLFromHashAndExt(this.m_clanSteamID, n),
      i = await (0, K.default)({ url: r, method: `GET`, responseType: `blob` }),
      a = ye(i.data, e.file_name);
    return await this.AddImage(a, t);
  }
  DeleteUploadImageByIndex(e) {
    this.m_filesToUpload.splice(e, 1),
      (this.m_filesToUpload = [...this.m_filesToUpload]);
  }
  DeleteUploadImage(e) {
    let t = this.m_filesToUpload.findIndex(
      (t) => e.file == t.file && e.uploadTime == t.uploadTime,
    );
    t >= 0 && this.DeleteUploadImageByIndex(t);
  }
  ClearImages() {
    this.m_filesToUpload = u.array();
  }
  GetFilesUploaded() {
    return this.m_filesCompleted;
  }
  GetLastErrorFile() {
    return this.m_lastError;
  }
  GetCompletedFiles() {
    return this.m_filesCompleted.length;
  }
  GetTotalFiles() {
    return this.m_filesToUpload.length;
  }
  GetFilesToUpload() {
    return this.m_filesToUpload.map((e) => e.file);
  }
  GetUploadImages() {
    return this.m_filesToUpload;
  }
  BHasError() {
    return this.m_lastError != null;
  }
  BAllDone() {
    return (
      this.m_filesCompleted.length > 0 &&
      this.m_filesCompleted.length == this.m_filesToUpload.length
    );
  }
  BIsFileCompleted(e) {
    return this.m_filesCompleted.indexOf(e) != -1;
  }
  RetryAllFailedUploads() {
    this.CancelAllUploads(), this.UploadAllImages();
  }
  async handleUploadRefresh(e) {
    await q.LoadClanImages(this.m_clanSteamID, !0, e);
  }
  BGetUploadsAreInSerial() {
    return !1;
  }
  async UploadSingleImage(e, t, n, r) {
    let i = e.file,
      a = e.GetCurrentImageOption(),
      o = e.GetResizeDimension(),
      s = new FormData();
    s.append(`clanimage`, i, t),
      s.append(`sessionid`, _()),
      this.m_clanImagesV2 && s.append(`clan_images_v2`, `1`),
      a?.artworkType && s.append(`arttype`, a.artworkType),
      o &&
        o.length > 0 &&
        s.append(`resize`, o.map((e) => e.width + `x` + e.height).join(`,`));
    let c = `/uploadimage/`,
      l = this.m_localizedImageGroupPrimaryImage;
    l &&
      ((c = `/ajaxuploadlocalizedimage/`),
      s.append(`origimagehash`, l.image_hash),
      l.thumbnail_hash && s.append(`thumbhash`, l.thumbnail_hash),
      s.append(`extension`, `` + l.file_type),
      s.append(`language`, `` + n));
    let u = t.split(`.`).pop()?.toLocaleLowerCase();
    (u == `webm` || u == `mp4`) &&
      (s.append(`video_width`, `` + e.width),
      s.append(`video_height`, `` + e.height));
    let d =
        C.COMMUNITY_BASE_URL +
        `/gid/` +
        this.m_clanSteamID.ConvertTo64BitString() +
        c,
      f = {
        cancelToken: r,
        withCredentials: !0,
        headers: { "Content-Type": `multipart/form-data` },
      },
      p,
      m = !0;
    try {
      (p = await K.default.post(d, s, f)), this.m_filesCompleted.push(i);
    } catch (e) {
      (m = !1),
        (this.m_lastError = {
          file: i,
          status: e.response ? e.response.status : 500,
          message: On(e).strErrorMsg,
        }),
        (p = e.response);
    }
    return (
      l || (await this.handleUploadRefresh(r)), { bSuccess: m, result: p.data }
    );
  }
};
S([u], Y.prototype, `m_filesToUpload`, void 0),
  S([u], Y.prototype, `m_filesCompleted`, void 0),
  S([u], Y.prototype, `m_lastError`, void 0),
  S([E], Y.prototype, `AddImage`, null),
  S([E], Y.prototype, `AddExistingClanImage`, null),
  S([E], Y.prototype, `DeleteUploadImageByIndex`, null),
  S([E], Y.prototype, `DeleteUploadImage`, null),
  S([E], Y.prototype, `ClearImages`, null);
var Jd = class extends Y {
  constructor(e, t, n) {
    super(e, t, n, !1);
  }
};
function Yd(e, t, n) {
  let r = De(t instanceof Array ? t : [t]),
    i = e.ConvertTo64BitString();
  return z.useMemo(() => new Jd(e, r, n), [i, r]);
}
var Xd = M((t) => {
    let {
        clanSteamID: n,
        inputClanImage: r,
        nWidth: i,
        nHeight: a,
        setImage: o,
      } = t,
      s = z.useMemo(() => ({ width: i, height: a }), [i, a]),
      [c, l] = z.useState(void 0),
      [u, d] = z.useState(!!r),
      [f, p] = z.useState(!1),
      m = Yd(n, `dummy`),
      h = z.useCallback(
        async (e) => {
          if (
            (m.ClearImages(), e && (d(!0), await m.AddExistingClanImage(e, 0)))
          ) {
            l(e);
            let t = m.GetUploadImages()[0].IsValidAssetType(s);
            t.error.length != 0 ||
              t.needsCrop ||
              (r && r.image_hash == e.image_hash) ||
              o(e);
          }
          d(!1);
        },
        [m, r, o, s],
      );
    z.useEffect(() => {
      h(r);
    }, [h, r]);
    let g = (e) => {
        let t = new D(ae.CLANSTEAMID);
        yt(
          (0, B.jsx)(Ud, {
            clanSteamID: t,
            fnImageSelectCallBack: (e) => h(e),
          }),
          O(e) ?? window,
        );
      },
      _ = (e) => {
        let t = O(e) ?? window,
          n = m.GetUploadImages()[0];
        yt(
          (0, B.jsx)(Lr, {
            ownerWin: t,
            uploadFile: n,
            forceResolution: { width: i, height: a },
            fileType: 3,
          }),
          t,
        );
      },
      v = async () => {
        p(!0);
        try {
          let t = await m.UploadAllImages(s),
            r = Object.values(t);
          if (r && r.length > 0) {
            e(
              r.length == 1,
              `ClanImagePickForCertainSize expected size 1, got ` + r.length,
            );
            let t = r[0].bSuccess ? r[0].uploadResult : void 0,
              i = R.GetHashAndExt(t ?? null),
              a = R.GetThumbHashAndExt(t ?? null);
            if (t?.image_hash && t.file_type !== void 0 && i && a) {
              let e = R.GenerateURLFromHashAndExt(n, i),
                r = R.GenerateURLFromHashAndExt(n, a),
                s = {
                  imageid: -11231412,
                  image_hash: t.image_hash,
                  thumbnail_hash: t.thumbnail_hash,
                  file_type: t.file_type,
                  file_name: t.file_name,
                  clanAccountID: n.GetAccountID(),
                  url: e,
                  thumb_url: r,
                  uploaded_time: Date.now() / 1e3,
                };
              l(s), o(s);
            }
          }
        } finally {
          p(!1);
        }
      },
      y = ``,
      b = !1,
      x;
    if (m && m.GetFilesToUpload().length > 0) {
      x = m.GetUploadImages()[0];
      let e = x.IsValidAssetType(s);
      (y = e.error), (b = e.needsCrop);
    }
    return (0, B.jsxs)(B.Fragment, {
      children: [
        u
          ? (0, B.jsx)(P, { size: `medium`, string: A(`#Loading`) })
          : c &&
            (0, B.jsx)(`div`, {
              className: `_9Z5REaLWRq4-`,
              style: {
                backgroundImage: `url( '${x ? x.dataUrl : c.url}' )`,
                height: `${a}px`,
                width: `${i}px`,
              },
            }),
        !!y && (0, B.jsx)(`p`, { children: y }),
        b && (0, B.jsx)(nt, { onClick: _, children: A(`#BBCode_ResizeImage`) }),
        x &&
          x.bCropped &&
          (0, B.jsxs)(B.Fragment, {
            children: [
              (0, B.jsx)(`div`, {
                children: A(`#ClanImagePickAndResize_UploadStatus`, x.status),
              }),
              f
                ? (0, B.jsx)(P, { string: A(`#Uploading`), size: `small` })
                : (0, B.jsx)(nt, {
                    onClick: v,
                    children: A(`#ClanImagePickAndResize_UploadImage`),
                  }),
            ],
          }),
        (0, B.jsx)(nt, {
          onClick: g,
          children: A(`#BBCode_ChooseImage`, i, a),
        }),
      ],
    });
  }),
  Zd,
  Qd = class extends z.Component {
    static {
      Zd = this;
    }
    m_cancelSignal = K.default.CancelToken.source();
    static s_formattingHelp = new Map();
    constructor(e) {
      super(e),
        (this.state = {
          formattingHelp: {
            __html: Zd.s_formattingHelp.get(e.formatType) ?? ``,
          },
        });
    }
    componentDidMount() {
      this.AjaxGetFormattingHelp().catch((e) => {
        this.setState(On(e));
      });
    }
    componentWillUnmount() {
      this.m_cancelSignal.cancel(`FormattingHelpWidget component unmounted`);
    }
    static GetHelpURL(e, t) {
      return (
        C.COMMUNITY_BASE_URL +
        `comment/` +
        e +
        `/formattinghelp` +
        (t ? `?ajax=1` : ``)
      );
    }
    async AjaxGetFormattingHelp() {
      if (this.state.formattingHelp.__html == ``) {
        let e = { sessionid: _() },
          t;
        (t = await K.default.get(Zd.GetHelpURL(this.props.formatType, !0), {
          params: e,
          cancelToken: this.m_cancelSignal.token,
        })),
          Zd.s_formattingHelp.set(this.props.formatType, t.data),
          this.setState({ formattingHelp: { __html: t.data } });
      }
    }
    render() {
      return this.state.strErrorMsg
        ? (0, B.jsxs)(`div`, {
            children: [
              this.state.strErrorMsg,
              (0, B.jsx)(`br`, {}),
              this.state.errorCode,
            ],
          })
        : this.state.formattingHelp.__html == ``
          ? (0, B.jsx)(P, {})
          : (0, B.jsx)(St, {
              strTitle: A(`#EventEditor_FormattingHelp_GetHelpLink`),
              strDescription: ``,
              closeModal: this.props.closeModal,
              onOK: this.props.closeModal,
              onCancel: this.props.closeModal,
              bAlertDialog: !0,
              className: `ModernBBStyles`,
              children: (0, B.jsx)(`div`, {
                dangerouslySetInnerHTML: this.state.formattingHelp,
              }),
            });
    }
  };
Qd = Zd = S([M], Qd);
var $d,
  ef = class extends z.Component {
    descAutoTextAreaRef = z.createRef();
    constructor(e) {
      super(e), (this.state = { bShowDragTarget: !1 });
    }
    componentDidMount() {
      q.AddClanImageDragListener(this.ClanImageDragListener);
    }
    componentWillUnmount() {
      q.RemoveClanImageDragListener(this.ClanImageDragListener);
    }
    ClanImageDragListener(e, t) {
      this.state.bShowDragTarget != t && this.setState({ bShowDragTarget: t });
    }
    onFocus(e) {
      e && e.target.select();
    }
    InsertText(e) {
      X.replaceSelection(this.GetTextAreaRef()?.current, e);
    }
    OnTextAreaDropListener(e) {
      if (
        (e.preventDefault(),
        e.stopPropagation(),
        e.dataTransfer.items && e.dataTransfer.items[0])
      ) {
        let t = e.dataTransfer.getData(`text`);
        if (t && t.length > 0) {
          for (let e of [R.GetBaseURL(), R.GetBaseURLV2()])
            if (t.startsWith(e)) {
              let n = `[img]` + _r + `/` + t.substr(e.length) + `[/img]`;
              X.replaceSelection(this.GetTextAreaRef()?.current, n);
              break;
            }
        }
      }
    }
    GetTextAreaRef() {
      return this.descAutoTextAreaRef.current?.GetTextAreaRef();
    }
    render() {
      return (0, B.jsxs)(z.Fragment, {
        children: [
          (0, B.jsx)(Z, {
            pathToImages:
              C.COMMUNITY_CDN_URL + `public/images/sharedfiles/guides/`,
            fnTextareaRef: this.GetTextAreaRef,
            emoticonStore: this.props.emoticonStore,
            supportBBCodes: this.props.limitBBCode
              ? this.props.limitBBCode
              : yr,
            bSupportHTMLImport: this.props.bSupportHTMLImport,
            showFormatHelp: this.props.showFormatHelp,
            bEmbeddedInDialog: this.props.bEmbeddedInDialog,
            clanSteamID: this.props.clanSteamID,
          }),
          (0, B.jsx)(`div`, {
            className: t(
              xd,
              Ld,
              this.state.bShowDragTarget ? bd : ``,
              this.props.className ? this.props.className : ``,
            ),
            children: (0, B.jsx)(J, {
              cols: 90,
              rows: this.props.nOverridesRows || 22,
              maxLength: 64e3,
              className: t(
                Cd,
                this.props.classNameForTextArea
                  ? this.props.classNameForTextArea
                  : ``,
              ),
              placeholder: this.props.strPlaceholder,
              ref: this.descAutoTextAreaRef,
              value: this.props.fnGetCurText(),
              onChange: this.props.fnOnTextChange,
              onDrop: this.OnTextAreaDropListener,
              emoticonStore: this.props.emoticonStore,
              fnSetText: this.props.fnSetText,
              supportBBCodes: this.props.limitBBCode
                ? this.props.limitBBCode
                : yr,
            }),
          }),
        ],
      });
    }
  };
S([E], ef.prototype, `ClanImageDragListener`, null),
  S([E], ef.prototype, `onFocus`, null),
  S([E], ef.prototype, `OnTextAreaDropListener`, null),
  S([E], ef.prototype, `GetTextAreaRef`, null),
  (ef = S([M], ef));
var X = class e {
    static BIsFireFox() {
      return !!new RegExp(/Firefox\/([0-9\.]+)(?:\s|$)/i).exec(
        navigator.userAgent,
      );
    }
    static replaceSelection(t, n) {
      if (!t) return;
      let r = t.selectionStart;
      t.focus(),
        e.InsertTextAtSelect(n, t),
        t.setSelectionRange(r, r + n.length);
    }
    static getSelectedString(e) {
      return e
        ? e.value.substr(e.selectionStart, e.selectionEnd - e.selectionStart)
        : ``;
    }
    static wrapBBCode(t, n, r) {
      if (!r) return;
      let i = e.getSelectedString(r),
        a = ``;
      (a =
        i.indexOf(t) == 0 && i.lastIndexOf(n) == i.length - n.length
          ? i.substr(t.length, i.length - t.length - n.length)
          : t + i + n),
        e.replaceSelection(r, a);
    }
    static append(t, n) {
      n &&
        (n.focus(),
        n.setSelectionRange(n.value.length, n.value.length),
        e.InsertTextAtSelect(t, n));
    }
    static ClearTextArea(e) {
      if (e) {
        e.focus();
        let t = e.value.length;
        if (t !== 0) {
          e.setRangeText
            ? e.setRangeText(``, 0, t, `preserve`)
            : (e.value = ``);
          let n = new Event(`input`, { bubbles: !0 });
          e.dispatchEvent(n);
        }
        e.focus();
      }
    }
    static overwrite(t, n) {
      n && (e.ClearTextArea(n), e.InsertTextAtSelect(t, n));
    }
    static InsertTextAtSelect(e, t) {
      let n = t.selectionStart,
        r = t.selectionEnd;
      if (n !== null && r !== null) {
        t.setRangeText
          ? t.setRangeText(e, n, r, `preserve`)
          : (t.value = t.value.slice(0, n) + e + t.value.slice(r));
        let i = new Event(`input`, { bubbles: !0 });
        t.dispatchEvent(i), (t.selectionStart = t.selectionEnd = n + e.length);
      }
      t.focus();
    }
  },
  Z = class extends z.Component {
    m_linkPopupRef = z.createRef();
    onBold() {
      X.wrapBBCode(`[b]`, `[/b]`, this.props.fnTextareaRef()?.current);
    }
    onItalics() {
      X.wrapBBCode(`[i]`, `[/i]`, this.props.fnTextareaRef()?.current);
    }
    onUnderline() {
      X.wrapBBCode(`[u]`, `[/u]`, this.props.fnTextareaRef()?.current);
    }
    onStrikeThrough() {
      X.wrapBBCode(
        `[strike]`,
        `[/strike]`,
        this.props.fnTextareaRef()?.current,
      );
    }
    onHeader() {
      X.wrapBBCode(`[h1]`, `[/h1]`, this.props.fnTextareaRef()?.current);
    }
    onHeader2() {
      X.wrapBBCode(`[h2]`, `[/h2]`, this.props.fnTextareaRef()?.current);
    }
    onHeader3() {
      X.wrapBBCode(`[h3]`, `[/h3]`, this.props.fnTextareaRef()?.current);
    }
    onUnorderedList() {
      this.handleList(`list`);
    }
    onOrderedList() {
      this.handleList(`olist`);
    }
    handleList(e) {
      let t = this.props.fnTextareaRef()?.current;
      if (!t) return;
      let n =
          `[` +
          e +
          `]
`,
        r = `[/` + e + `]`;
      if (t.selectionStart == t.selectionEnd)
        X.wrapBBCode(
          n + `[*]`,
          `
` + r,
          t,
        );
      else {
        let e =
          n +
          X.getSelectedString(t)
            .split(`
`)
            .map((e) => (e.match(/\*+\s/) ? `[*]` : `[*] `) + e)
            .join(`
`) +
          `
` +
          r;
        X.replaceSelection(t, e);
      }
    }
    OnAddLink(e) {
      let t = this.props.fnTextareaRef();
      t && pt((0, B.jsx)(tf, { textareaRef: t }), O(e) ?? window);
    }
    ShowHelpDialog(e) {
      this.props.showFormatHelp &&
        pt(
          (0, B.jsx)(Qd, { formatType: this.props.showFormatHelp }),
          O(e) ?? window,
        );
    }
    OnConvertHTMLToBBCodeDialog(e) {
      let t = this.props.fnTextareaRef();
      if (!t) return;
      let n = O(e) ?? window;
      pt((0, B.jsx)(sf, { ownerWindow: n, textareaRef: t }), n);
    }
    OnOpenYoutubeDialog(e) {
      let t = this.props.fnTextareaRef();
      if (!t) return;
      let n = C.IMG_URL + `applications/community/`;
      pt((0, B.jsx)($, { textareaRef: t, pathToImages: n }), O(e) ?? window);
    }
    OnOpenImageDialog(e) {
      let t = this.props.fnTextareaRef();
      t && pt((0, B.jsx)(nf, { textareaRef: t }), O(e) ?? window);
    }
    OnOpenSpeakerDialog(e) {
      let t = this.props.fnTextareaRef(),
        n = this.props.clanSteamID;
      t &&
        n &&
        yt((0, B.jsx)(rf, { clanSteamID: n, textareaRef: t }), O(e) ?? window);
    }
    OnEmoticonSelected(e, t = !1) {
      let n = `\u02D0${e}\u02D0`;
      X.replaceSelection(this.props.fnTextareaRef()?.current, n),
        this.props.fnTextareaRef()?.current?.focus();
    }
    BSupports(e) {
      return this.props.supportBBCodes.findIndex((t) => t == e) >= 0;
    }
    render() {
      let {
          showFormatHelp: e,
          bEmbeddedInDialog: n,
          bSupportHTMLImport: r,
          pathToImages: i,
        } = this.props,
        a;
      return (
        e &&
          (a = n
            ? (0, B.jsx)(`span`, {
                className: t(`ttip`, void 0),
                children: (0, B.jsx)(bt, {
                  toolTipContent: A(`#EventEditor_FormattingHelp_GetHelpLink`),
                  children: (0, B.jsxs)(`a`, {
                    href: Qd.GetHelpURL(e, !1),
                    target: C.IN_CLIENT ? void 0 : `_blank`,
                    children: [
                      (0, B.jsx)(`img`, { src: i + `/action_help.png` }),
                      ` `,
                      A(`#EventEditor_FormattingHelp_GetHelpLink`),
                    ],
                  }),
                }),
              })
            : (0, B.jsx)(`span`, {
                onClick: this.ShowHelpDialog,
                className: t(`ttip`, void 0),
                children: (0, B.jsxs)(bt, {
                  toolTipContent: A(`#EventEditor_FormattingHelp_GetHelpLink`),
                  children: [
                    (0, B.jsx)(`img`, { src: i + `/action_help.png` }),
                    ` `,
                    A(`#EventEditor_FormattingHelp_GetHelpLink`),
                  ],
                }),
              })),
        (0, B.jsxs)(`div`, {
          className: Dd,
          children: [
            this.BSupports(`b`) &&
              (0, B.jsx)(Q, {
                onClick: this.onBold,
                tooltip: A(`#Editor_Bold`),
                imgURL: this.props.pathToImages + `/format_bold.png`,
              }),
            this.BSupports(`u`) &&
              (0, B.jsx)(Q, {
                onClick: this.onUnderline,
                tooltip: A(`#Editor_Underline`),
                imgURL: this.props.pathToImages + `/format_underline.png`,
              }),
            this.BSupports(`i`) &&
              (0, B.jsx)(Q, {
                onClick: this.onItalics,
                tooltip: A(`#Editor_Italics`),
                imgURL: this.props.pathToImages + `/format_italic.png`,
              }),
            this.BSupports(`strike`) &&
              (0, B.jsx)(Q, {
                onClick: this.onStrikeThrough,
                tooltip: A(`#Editor_StrikeThrough`),
                imgURL: this.props.pathToImages + `/format_strike.png`,
              }),
            !(!this.BSupports(`url`) || n) &&
              (0, B.jsx)(Q, {
                onClick: this.OnAddLink,
                tooltip: A(`#Editor_Link`),
                imgURL: this.props.pathToImages + `/format_link.png`,
              }),
            this.BSupports(`list`) &&
              (0, B.jsx)(Q, {
                onClick: this.onUnorderedList,
                tooltip: A(`#Editor_Unordered`),
                imgURL: this.props.pathToImages + `/format_bullet.png`,
              }),
            this.BSupports(`olist`) &&
              (0, B.jsx)(Q, {
                onClick: this.onOrderedList,
                tooltip: A(`#Editor_Ordered`),
                imgURL: this.props.pathToImages + `/format_numbered.png`,
              }),
            this.BSupports(`h1`) &&
              (0, B.jsx)(Q, {
                onClick: this.onHeader,
                tooltip: A(`#Editor_Header`),
                imgURL: this.props.pathToImages + `/format_header1.png`,
              }),
            this.BSupports(`h2`) &&
              (0, B.jsx)(Q, {
                onClick: this.onHeader2,
                tooltip: A(`#Editor_Header2`),
                imgURL: this.props.pathToImages + `/format_header2.png`,
              }),
            this.BSupports(`h3`) &&
              (0, B.jsx)(Q, {
                onClick: this.onHeader3,
                tooltip: A(`#Editor_Header3`),
                imgURL: this.props.pathToImages + `/format_header3.png`,
              }),
            this.BSupports(`previewyoutube`) &&
              (0, B.jsx)(Q, {
                onClick: this.OnOpenYoutubeDialog,
                tooltip: A(`#EventEditor_InsertYouTube`),
                imgURL: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYyNjlFOEM1MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYyNjlFOEM2MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjI2OUU4QzMyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjI2OUU4QzQyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4IrEPeAAABJ0lEQVR42mL8//8/AzmABUScEOZJI1HfLBaoppmk2sh4Ql/r/69HD0jSxCanwMD07eVzhl9ADgz/ZmJikMjOY2CUlEIRR8YgPYzbBLhQQoeJl4/B7uY9hv9//jC8XLWc4UFfD8OPZ08xbGX6CSSQ8XdgKH/79o3h+69fDHwBwQy6ew8ySOYXMfxiZERRx/ILPTqA/K9fv8K5f4EG3Pn5i+EfSB2SWpaf6G6A2vgP6NSrWzYz3J8zk0Hk9SsGVka0ePzLxs7w9ydC+3+gpn29PQzv9uxiEHz7mkEY6ESQPb+QHMbMwcHAwiotw/Dj3h2E6L+/DIyrljKIgCMLGMoMmCmLQ0qagdnh66fn/xgYfP+B9BCJv79/lw5KcrPISKqzGMlN5AABBgBSmY83jVsiQAAAAABJRU5ErkJggg==`,
              }),
            (0, B.jsx)(`span`, {
              className: `ttip`,
              children:
                this.props.emoticonStore &&
                (0, B.jsx)(bt, {
                  toolTipContent: A(`#Editor_Emoticon`),
                  children: (0, B.jsx)(cr, {
                    title: ` `,
                    className: t(`_5LFNlKLTFJM-`),
                    disabled: !1,
                    OnEmoticonSelected: this.OnEmoticonSelected,
                    rtLastAckedNewEmoticons: Number.MAX_VALUE,
                    emoticonStore: this.props.emoticonStore,
                    useImg: this.props.pathToImages + `/format_emote.png`,
                    contextOptions: {
                      bOverlapHorizontal: !0,
                      bDisablePopTop: !0,
                    },
                  }),
                }),
            }),
            !(!this.BSupports(`img`) || n) &&
              (0, B.jsx)(Q, {
                onClick: this.OnOpenImageDialog,
                tooltip: A(`#EventEditor_InsertImage`),
                imgURL: this.props.pathToImages + `/insert_img.png`,
              }),
            !!(
              ie.is_support &&
              this.props.clanSteamID &&
              this.BSupports(`speaker`)
            ) &&
              (0, B.jsx)(Q, {
                onClick: this.OnOpenSpeakerDialog,
                tooltip: A(`#EventEditor_AddSpeaker`),
                imgURL: this.props.pathToImages + `/insert_img.png`,
              }),
            !(!r || n) &&
              (0, B.jsx)(Q, {
                onClick: this.OnConvertHTMLToBBCodeDialog,
                className: void 0,
                tooltip: A(`#EventEditor_ImportFromHTML_ttip`),
                children: A(`#EventEditor_ImportHTML`),
              }),
            a,
          ],
        })
      );
    }
  };
S([E], Z.prototype, `onBold`, null),
  S([E], Z.prototype, `onItalics`, null),
  S([E], Z.prototype, `onUnderline`, null),
  S([E], Z.prototype, `onStrikeThrough`, null),
  S([E], Z.prototype, `onHeader`, null),
  S([E], Z.prototype, `onHeader2`, null),
  S([E], Z.prototype, `onHeader3`, null),
  S([E], Z.prototype, `onUnorderedList`, null),
  S([E], Z.prototype, `onOrderedList`, null),
  S([E], Z.prototype, `OnAddLink`, null),
  S([E], Z.prototype, `ShowHelpDialog`, null),
  S([E], Z.prototype, `OnConvertHTMLToBBCodeDialog`, null),
  S([E], Z.prototype, `OnOpenYoutubeDialog`, null),
  S([E], Z.prototype, `OnOpenImageDialog`, null),
  S([E], Z.prototype, `OnOpenSpeakerDialog`, null),
  S([E], Z.prototype, `OnEmoticonSelected`, null),
  (Z = S([M], Z));
function Q(e) {
  return (0, B.jsx)(`span`, {
    onClick: e.onClick,
    className: e.className,
    children: (0, B.jsxs)(bt, {
      toolTipContent: e.tooltip,
      className: `ttip`,
      children: [
        !!e.imgURL && (0, B.jsx)(`img`, { src: e.imgURL }),
        e.children,
      ],
    }),
  });
}
var $ = class extends z.Component {
  state = { youtubeInput: ``, alignment: I.left };
  OnYoutubeInsertLink() {
    let e = this.state.youtubeInput && Un(this.state.youtubeInput);
    if (!e) alert(A(`#EventEditor_InsertYouTube_NoURL`));
    else {
      if (this.state.alignment == I.summary) {
        let t =
          `https://www.youtube.com/watch?v=` +
          e.strVideoID +
          (e.nStartSeconds ? `&t=` + e.nStartSeconds : ``);
        X.wrapBBCode(t, ``, this.props.textareaRef.current);
      } else {
        let t =
          `[previewyoutube=` + e.strVideoID + `;` + this.state.alignment + `]`;
        X.wrapBBCode(t, `[/previewyoutube]`, this.props.textareaRef.current);
      }
      this.setState({ youtubeInput: ``, alignment: I.left });
    }
  }
  OnUrlChange(e) {
    this.state.youtubeInput != e.target.value &&
      this.setState({ youtubeInput: e.target.value });
  }
  OnLeftSelected() {
    this.setState({ alignment: I.left });
  }
  OnRightSelected() {
    this.setState({ alignment: I.right });
  }
  OnFullSelected() {
    this.setState({ alignment: I.full });
  }
  OnSummarySelected() {
    this.setState({ alignment: I.summary });
  }
  OnOuterDivClickPassDown(e) {}
  render() {
    return (0, B.jsx)(St, {
      strTitle: A(`#EventEditor_InsertYouTube`),
      strDescription: ``,
      closeModal: this.props.closeModal,
      onCancel: this.props.closeModal,
      onOK: this.OnYoutubeInsertLink,
      strOKButtonText: A(`#EventEditor_InsertYouTube`),
      className: Ld,
      children: (0, B.jsxs)(`div`, {
        className: Od,
        children: [
          (0, B.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, B.jsxs)(`label`, {
              children: [
                (0, B.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: A(`#EventEditor_InsertYouTube_URL`),
                }),
                (0, B.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, B.jsx)(`input`, {
                    className: `DialogInput DialogTextInputBase`,
                    ref: (e) => {
                      e?.focus();
                    },
                    type: `text`,
                    value: this.state.youtubeInput,
                    onChange: this.OnUrlChange,
                    placeholder: A(`#EventEditor_InsertYouTube_Placholder`),
                  }),
                }),
              ],
            }),
          }),
          (0, B.jsxs)(`div`, {
            className: `DialogInputLabelGroup`,
            children: [
              (0, B.jsx)(`div`, {
                className: `DialogLabel`,
                children: A(`#EventEditor_InsertYouTube_Position`),
              }),
              (0, B.jsxs)(`div`, {
                className: kd,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, B.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    id: I.left,
                    value: I.left,
                    checked: this.state.alignment == I.left,
                    onChange: this.OnLeftSelected,
                  }),
                  (0, B.jsx)(`label`, {
                    htmlFor: I.left,
                    children: (0, B.jsx)(`span`, {
                      children: A(`#EventEditor_InsertYouTube_Left`),
                    }),
                  }),
                ],
              }),
              (0, B.jsxs)(`div`, {
                className: kd,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, B.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    id: I.right,
                    value: I.right,
                    checked: this.state.alignment == I.right,
                    onChange: this.OnRightSelected,
                  }),
                  (0, B.jsx)(`label`, {
                    htmlFor: I.right,
                    children: (0, B.jsx)(`span`, {
                      children: A(`#EventEditor_InsertYouTube_Right`),
                    }),
                  }),
                ],
              }),
              (0, B.jsxs)(`div`, {
                className: kd,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, B.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    id: I.full,
                    value: I.full,
                    checked: this.state.alignment == I.full,
                    onChange: this.OnFullSelected,
                  }),
                  (0, B.jsx)(`label`, {
                    htmlFor: I.full,
                    children: (0, B.jsx)(`span`, {
                      children: A(`#EventEditor_InsertYouTube_Full`),
                    }),
                  }),
                ],
              }),
              (0, B.jsxs)(`div`, {
                className: kd,
                onClick: this.OnOuterDivClickPassDown,
                children: [
                  (0, B.jsx)(`input`, {
                    type: `radio`,
                    name: `YouTubePreviewInsertType`,
                    id: I.summary,
                    value: I.summary,
                    checked: this.state.alignment == I.summary,
                    onChange: this.OnSummarySelected,
                  }),
                  (0, B.jsx)(`label`, {
                    htmlFor: I.summary,
                    children: (0, B.jsx)(`span`, {
                      children: A(`#EventEditor_InsertYouTube_Summary`),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  }
};
S([E], $.prototype, `OnYoutubeInsertLink`, null),
  S([E], $.prototype, `OnUrlChange`, null),
  S([E], $.prototype, `OnLeftSelected`, null),
  S([E], $.prototype, `OnRightSelected`, null),
  S([E], $.prototype, `OnFullSelected`, null),
  S([E], $.prototype, `OnSummarySelected`, null),
  S([E], $.prototype, `OnOuterDivClickPassDown`, null),
  ($ = S([M], $));
var tf = class extends z.Component {
  static {
    $d = this;
  }
  state = { textToDisplay: ``, strURL: `` };
  static m_regExp = new RegExp(/\[url=([^\]]*)\]([^\[\]]+)\[\/url\]/i);
  LoadFromTextArea() {
    let { textareaRef: e } = this.props;
    if (e && e.current) {
      let t = X.getSelectedString(e.current),
        n = $d.m_regExp.exec(t);
      n
        ? this.setState({ strURL: n[1], textToDisplay: n[2] })
        : this.setState({ textToDisplay: t });
    }
  }
  componentDidMount() {
    this.LoadFromTextArea();
  }
  onLinkTitleUpdate(e) {
    this.setState({ textToDisplay: e.target.value });
  }
  onLinkURLUpdate(e) {
    this.setState({ strURL: e.target.value });
  }
  onInsertLink() {
    let { strURL: e, textToDisplay: t } = this.state,
      n = `[url=` + e + `]` + t + `[/url]`;
    X.replaceSelection(this.props.textareaRef.current, n);
  }
  render() {
    return (0, B.jsx)(St, {
      strTitle: A(`#Editor_Link`),
      strDescription: ``,
      closeModal: this.props.closeModal,
      onOK: this.onInsertLink,
      onCancel: this.props.closeModal,
      strOKButtonText: A(`#EventEditor_InsertLinkURL`),
      className: Ld,
      children: (0, B.jsxs)(`div`, {
        className: Sd,
        children: [
          (0, B.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, B.jsxs)(`label`, {
              children: [
                (0, B.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: A(`#EventEditor_LinkDescription`),
                }),
                (0, B.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, B.jsx)(`input`, {
                    type: `text`,
                    onChange: this.onLinkTitleUpdate,
                    value: this.state.textToDisplay,
                    className: `DialogInput DialogTextInputBase`,
                  }),
                }),
              ],
            }),
          }),
          (0, B.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, B.jsxs)(`label`, {
              children: [
                (0, B.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: A(`#EventEditor_LinkURL`),
                }),
                (0, B.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, B.jsx)(`input`, {
                    type: `text`,
                    onChange: this.onLinkURLUpdate,
                    value: this.state.strURL,
                    className: `DialogInput DialogTextInputBase`,
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  }
};
S([E], tf.prototype, `onLinkTitleUpdate`, null),
  S([E], tf.prototype, `onLinkURLUpdate`, null),
  S([E], tf.prototype, `onInsertLink`, null),
  (tf = $d = S([M], tf));
var nf = class extends z.Component {
  refFirstInput = z.createRef();
  state = { imgURL: ``, anchorURL: `` };
  componentDidMount() {
    this.refFirstInput.current?.focus();
  }
  OnImageInsert() {
    let { anchorURL: e, imgURL: t } = this.state,
      n = ``,
      r = ``;
    e && e.length > 0 && ((n += `[url=` + e + `]`), (r = `[/url]` + r)),
      (n += `[img]` + t),
      (r = `[/img]` + r),
      X.wrapBBCode(n, r, this.props.textareaRef.current);
  }
  OnImageURLChange(e) {
    this.state.imgURL != e.target.value &&
      this.setState({ imgURL: e.target.value });
  }
  OnAnchorURLChange(e) {
    this.state.anchorURL != e.target.value &&
      this.setState({ anchorURL: e.target.value });
  }
  render() {
    let { imgURL: e, anchorURL: t } = this.state;
    return (0, B.jsx)(St, {
      strTitle: A(`#EventEditor_InsertImage_Title`),
      strDescription: ``,
      closeModal: this.props.closeModal,
      onCancel: this.props.closeModal,
      onOK: this.OnImageInsert,
      strOKButtonText: A(`#EventEditor_InsertImage_Title`),
      className: Ld,
      children: (0, B.jsxs)(`div`, {
        className: Sd,
        children: [
          (0, B.jsx)(`p`, { children: A(`#EventEditor_InsertImage_Desc`) }),
          (0, B.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, B.jsxs)(`label`, {
              children: [
                (0, B.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: A(`#EventEditor_InsertImage_URL`),
                }),
                (0, B.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, B.jsx)(`input`, {
                    className: `DialogInput DialogTextInputBase`,
                    type: `text`,
                    value: e,
                    onChange: this.OnImageURLChange,
                    placeholder: A(`#EventEditor_InsertImage_Placeholder`),
                    ref: this.refFirstInput,
                  }),
                }),
              ],
            }),
          }),
          (0, B.jsx)(`div`, {
            className: `DialogInputLabelGroup`,
            children: (0, B.jsxs)(`label`, {
              children: [
                (0, B.jsx)(`div`, {
                  className: `DialogLabel`,
                  children: A(`#EventEditor_InsertImage_Anchor`),
                }),
                (0, B.jsx)(`div`, {
                  className: `DialogInput_Wrapper`,
                  children: (0, B.jsx)(`input`, {
                    className: `DialogInput DialogTextInputBase`,
                    type: `text`,
                    value: t,
                    onChange: this.OnAnchorURLChange,
                    placeholder: A(`#EventEditor_InsertImage_Placeholder`),
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  }
};
S([E], nf.prototype, `OnImageInsert`, null),
  S([E], nf.prototype, `OnImageURLChange`, null),
  S([E], nf.prototype, `OnAnchorURLChange`, null),
  (nf = S([M], nf));
var rf = (e) => {
  let [t, n] = z.useState(``),
    [r, i] = z.useState(``),
    [a, o] = z.useState(``),
    [s, c] = z.useState(``),
    [l, u] = z.useState(void 0),
    [d, f] = z.useState(void 0),
    { data: p } = vd(),
    { isLoading: m, data: h } = Ir(d?.GetAccountID()),
    g = () => {
      let n = `[speaker name="${t.trim()}"`;
      if (
        (r.trim().length > 0 && (n += ` title="${r}"`),
        a.trim().length > 0 && (n += ` company="${a}"`),
        l)
      ) {
        let e = _r + `/` + l.clanAccountID + `/` + R.GetHashAndExt(l);
        n += ` photo="${e}"`;
      }
      d && (n += ` steamid="${d.ConvertTo64BitString()}"`),
        (n += `]${s}[/speaker]`),
        X.replaceSelection(e.textareaRef.current, n);
    },
    _ = t.trim().length != 0 && s.trim().length != 0;
  return (0, B.jsx)(St, {
    strTitle: A(`#EventEditor_AddSpeaker`),
    strDescription: A(`#EventEditor_AddSpeaker_Desc`),
    closeModal: e.closeModal,
    onCancel: e.closeModal,
    bOKDisabled: !_,
    onOK: g,
    className: Ld,
    children: (0, B.jsxs)(`div`, {
      className: jd,
      children: [
        (0, B.jsx)(Ke, {
          type: `text`,
          label: A(`#EventEditor_AddSpeaker_Name`),
          value: t,
          onChange: (e) => n(e.target.value),
          focusOnMount: !0,
        }),
        (0, B.jsxs)(`div`, {
          className: Md,
          children: [
            (0, B.jsx)(Ke, {
              type: `text`,
              label: A(`#EventEditor_AddSpeaker_Title`),
              value: r,
              onChange: (e) => i(e.target.value),
            }),
            (0, B.jsx)(Ke, {
              type: `text`,
              label: A(`#EventEditor_AddSpeaker_Company`),
              value: a,
              onChange: (e) => o(e.target.value),
            }),
          ],
        }),
        (0, B.jsx)(bt, {
          toolTipContent: A(`#EventEditor_AssociateSteamAccount_ttip`),
          children: (0, B.jsxs)(`div`, {
            className: `DialogLabel`,
            children: [A(`#EventEditor_AssociateSteamAccount`), ` (?)`],
          }),
        }),
        (0, B.jsxs)(`div`, {
          children: [
            m && (0, B.jsx)(P, { string: A(`#Loading`), size: `small` }),
            d &&
              h &&
              (0, B.jsxs)(`a`, {
                href:
                  C.COMMUNITY_BASE_URL + `profiles/` + d.ConvertTo64BitString(),
                target: `_blank`,
                children: [
                  h
                    ? (0, B.jsx)(`img`, {
                        style: { marginRight: `8px` },
                        src: h.avatar_url,
                      })
                    : null,
                  h ? h.m_strPlayerName : null,
                ],
              }),
            (0, B.jsxs)(`div`, {
              className: Nd,
              children: [
                (0, B.jsx)(nt, {
                  onClick: () => f(new D(ie.steamid)),
                  children: A(`#EventEditor_SteamAccount_addme`),
                }),
                (0, B.jsx)(nt, {
                  onClick: (e) =>
                    Ge((0, B.jsx)(af, { friends: p ?? [], setSteamID: f }), e),
                  children: A(`#EventEditor_SteamAccount_addfriend`),
                }),
                (0, B.jsx)(nt, {
                  onClick: () => f(void 0),
                  children: A(`#EventEditor_SteamAccount_clear`),
                }),
              ],
            }),
          ],
        }),
        (0, B.jsxs)(`div`, {
          className: Pd,
          children: [
            (0, B.jsx)(`div`, {
              className: `DialogLabel`,
              children: A(`#EventEditor_ChoosePhoto`),
            }),
            (0, B.jsx)(Xd, {
              clanSteamID: e.clanSteamID,
              inputClanImage: l,
              setImage: u,
              nWidth: 184,
              nHeight: 184,
            }),
          ],
        }),
        (0, B.jsxs)(`div`, {
          className: Fd,
          children: [
            (0, B.jsx)(`div`, {
              className: `DialogLabel`,
              children: A(`#EventEditor_AddSpeaker_About`),
            }),
            (0, B.jsx)(Re, {
              value: s,
              onChange: (e) => c(e.target.value),
              rows: 8,
              cols: 80,
              nMinHeight: 40,
              placeholder: A(`#EventEditor_AddSpeaker_About_Placeholder`),
            }),
          ],
        }),
        (0, B.jsxs)(`div`, {
          className: Id,
          children: [
            (0, B.jsx)(`div`, {
              className: `DialogLabel`,
              children: A(`#Button_Preview`),
            }),
            (0, B.jsx)(lr, {
              company: a,
              name: t,
              title: r,
              bioString: s,
              photo: l ? l.url : void 0,
            }),
          ],
        }),
      ],
    }),
  });
};
function af(e) {
  let { friends: t, setSteamID: n } = e;
  return (0, B.jsx)(`div`, {
    className: Ad,
    children: t.map((e) => (0, B.jsx)(of, { steamid: e, setSteamID: n }, e)),
  });
}
function of(e) {
  let { steamid: t, setSteamID: n } = e,
    { data: r } = Ir(t);
  return (0, B.jsx)(Fe, {
    onSelected: () => n(new D(t)),
    children: (0, B.jsxs)(`div`, {
      style: { display: `flex`, alignItems: `center` },
      children: [
        r &&
          (0, B.jsx)(`img`, { className: `SZCLgazwykY-`, src: r.avatar_url }),
        r?.m_strPlayerName,
      ],
    }),
  });
}
var sf = class extends z.Component {
  m_isMounted = !1;
  m_bAppend = !1;
  constructor(e) {
    super(e), (this.state = { bPreserveNewLines: !1, strHTMLData: `` });
  }
  componentDidMount() {
    this.m_isMounted = !0;
  }
  componentWillUnmount() {
    this.m_isMounted = !1;
  }
  OnConvertAndOverriteHTML() {
    (this.m_bAppend = !1), this.ConvertBBCode();
  }
  OnConvertAndAppendHTML() {
    (this.m_bAppend = !0), this.ConvertBBCode();
  }
  async ConvertHtmlToBBCode(e, t) {
    let n = new URLSearchParams();
    return (
      n.append(`content`, e),
      n.append(`preserve_newlines`, t ? `1` : `0`),
      (
        await K.default.post(
          C.COMMUNITY_BASE_URL + `/actions/ConvertHTMLToBBCode`,
          n,
        )
      ).data.content
    );
  }
  ConvertBBCode() {
    this.setState({ bConverting: !0 }),
      this.ConvertHtmlToBBCode(
        this.state.strHTMLData,
        this.state.bPreserveNewLines,
      )
        .then((e) => {
          this.m_isMounted &&
            (this.m_bAppend
              ? X.append(e, this.props.textareaRef.current)
              : X.overwrite(e, this.props.textareaRef.current),
            this.setState({ bConverting: !1, bFinishedConverting: !0 }));
        })
        .catch((e) => {
          yt(
            (0, B.jsx)(dt, {
              strTitle: A(`#EventEditor_ConvertHTML_Error`),
              strDescription: A(
                `#EventEditor_ConvertHTML_Error_Desc`,
                e.response && e.response.data ? e.response.data.msg : e,
              ),
              bAlertDialog: !0,
              bDestructiveWarning: !0,
            }),
            this.props.ownerWindow,
            { strTitle: A(`#EventEditor_ConvertHTML_Error`) },
          );
        });
  }
  OnCheckboxChange(e) {
    let t = e.target.checked;
    t != this.state.bPreserveNewLines &&
      this.setState({ bPreserveNewLines: t });
  }
  OnTextAreaChange(e) {
    this.setState({ strHTMLData: e.currentTarget.value });
  }
  render() {
    let { closeModal: e } = this.props;
    return this.state.bConverting
      ? (0, B.jsx)(St, {
          strTitle: A(`#EventEditor_ImportFromHTML`),
          strDescription: A(`#EventEditor_ImportFromHTML_ConversionInProgress`),
          closeModal: e,
          bAlertDialog: !0,
          onOK: e,
          onCancel: e,
          children: (0, B.jsx)(P, {}),
        })
      : this.state.bFinishedConverting
        ? (0, B.jsx)(St, {
            strTitle: A(`#EventEditor_ImportFromHTML`),
            strDescription: A(`#EventEditor_ImportFromHTML_ConvertFinished`),
            closeModal: e,
            bAlertDialog: !0,
            onOK: e,
            onCancel: e,
          })
        : (0, B.jsx)(Tt, {
            title: A(`#EventEditor_ImportFromHTML`),
            onOK: this.OnConvertAndOverriteHTML,
            onCancel: e,
            className: Ld,
            children: (0, B.jsxs)($e, {
              children: [
                (0, B.jsx)(Ie, {
                  children: (0, B.jsxs)(`div`, {
                    className: t(Mn, wd),
                    children: [
                      (0, B.jsx)(`div`, {
                        className: Mn,
                        children: mt(
                          `#EventEditor_ImportFromHTML_ConvertDescription`,
                          (0, B.jsx)(`a`, {
                            target: C.IN_CLIENT ? void 0 : `_blank`,
                            href: `https://partner.steamgames.com/doc/marketing/event_tools/import`,
                            children: A(
                              `#EventEditor_ImportFromHTML_ConvertLearn`,
                            ),
                          }),
                        ),
                      }),
                      (0, B.jsx)(`textarea`, {
                        value: this.state.strHTMLData,
                        placeholder: A(
                          `#EventEditor_ImportFromHTML_Instruction`,
                        ),
                        className: Td,
                        onChange: this.OnTextAreaChange,
                        ref: (e) => {
                          e?.focus();
                        },
                      }),
                      (0, B.jsxs)(`div`, {
                        className: Ed,
                        children: [
                          (0, B.jsx)(`input`, {
                            id: `ImportFromHTMLNewLines`,
                            type: `checkbox`,
                            checked: this.state.bPreserveNewLines,
                            onChange: this.OnCheckboxChange,
                          }),
                          (0, B.jsxs)(`label`, {
                            htmlFor: `ImportFromHTMLNewLines`,
                            children: [
                              A(`#EventEditor_ImportFromHTML_PreserveNewlines`),
                              (0, B.jsx)(Et, {
                                tooltip: A(
                                  `#EventEditor_ImportFromHTML_PreserveNewlines_Hint`,
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, B.jsx)(`div`, {
                        children: A(
                          `#EventEditor_ImportFromHTML_ConvertToBBCode`,
                        ),
                      }),
                    ],
                  }),
                }),
                (0, B.jsx)(ot, {
                  children: (0, B.jsx)(wt, {
                    onCancel: () => e?.(),
                    strOKText: A(`#Button_Overwrite`),
                    onUpdate: this.OnConvertAndAppendHTML,
                    strUpdateText: A(`#Button_Append`),
                  }),
                }),
              ],
            }),
          });
  }
};
S([E], sf.prototype, `OnConvertAndOverriteHTML`, null),
  S([E], sf.prototype, `OnConvertAndAppendHTML`, null),
  S([E], sf.prototype, `OnCheckboxChange`, null),
  S([E], sf.prototype, `OnTextAreaChange`, null),
  (sf = S([M], sf));
export {
  gi as _,
  yu as a,
  mi as b,
  Hl as c,
  Di as d,
  Ni as f,
  Si as g,
  Ci as h,
  Tu as i,
  Il as l,
  li as m,
  qd as n,
  Mu as o,
  wi as p,
  Hu as r,
  Vl as s,
  ef as t,
  gl as u,
  xi as v,
  Gr as x,
  pi as y,
};
