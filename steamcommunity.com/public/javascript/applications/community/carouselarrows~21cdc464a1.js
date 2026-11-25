/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e } from "./chunk~f025431ab0.js";
import {
  A as t,
  C as n,
  Ct as r,
  E as i,
  G as a,
  I as o,
  L as s,
  Pt as c,
  T as l,
  at as u,
  it as d,
  j as f,
  yt as p,
} from "./chunk~01cfc309bf.js";
import {
  $n as m,
  Cn as h,
  Cs as g,
  Dn as _,
  En as v,
  Ko as y,
  On as b,
  Sn as x,
  Uo as ee,
  Vo as S,
  Wi as C,
  Yo as te,
  _a as ne,
  _n as re,
  _s as ie,
  bn as ae,
  fi as oe,
  fn as se,
  gn as ce,
  hn as le,
  ln as ue,
  mn as de,
  ns as fe,
  on as pe,
  os as me,
  qo as he,
  sn as ge,
  un as _e,
  vn as ve,
  vs as ye,
  ya as be,
  yn as xe,
} from "./chunk~3f4314f3b4.js";
import { C as Se, D as Ce, E as we } from "./chunk~437071091c.js";
import { t as Te } from "./chunk~eefd71512b.js";
import {
  $ as Ee,
  A as De,
  C as Oe,
  D as ke,
  G as Ae,
  I as je,
  J as Me,
  L as Ne,
  M as Pe,
  N as Fe,
  O as Ie,
  Q as Le,
  S as w,
  T as Re,
  X as ze,
  Y as Be,
  Z as Ve,
  at as He,
  b as Ue,
  ct as T,
  dt as We,
  et as Ge,
  it as Ke,
  j as qe,
  k as Je,
  lt as Ye,
  ot as Xe,
  q as Ze,
  v as Qe,
  w as $e,
  y as et,
} from "./chunk~05a38bc848.js";
import { i as tt, n as nt } from "./chunk~2e61cac879.js";
import { s as rt } from "./chunk~0111fcd096.js";
import { i as it, n as at, r as ot, t as st } from "./chunk~d6c6ad29fc.js";
import { S as ct, W as lt } from "./chunk~af1574091f.js";
import { t as ut } from "./chunk~9d71b14b50.js";
import {
  R as dt,
  X as ft,
  Y as pt,
  a as mt,
  ct as ht,
  i as gt,
  lt as _t,
  s as vt,
} from "./chunk~95ecbf576c.js";
import { t as yt } from "./chunk~395a1fb77b.js";
import { o as bt } from "./chunk~4e18b7e430.js";
import {
  $d as xt,
  $h as St,
  $s as Ct,
  $u as wt,
  Ad as Tt,
  Ao as Et,
  As as Dt,
  Au as Ot,
  Bd as kt,
  Bm as At,
  Cc as jt,
  Dd as Mt,
  Df as E,
  Do as Nt,
  Fs as Pt,
  Gf as Ft,
  Gi as It,
  Is as Lt,
  Kf as Rt,
  Kh as zt,
  Ld as Bt,
  Lp as Vt,
  Mi as Ht,
  Ms as Ut,
  Nu as Wt,
  Of as Gt,
  Oi as Kt,
  Ol as qt,
  Oo as Jt,
  Op as D,
  Pc as Yt,
  Qd as O,
  Qr as Xt,
  Ra as Zt,
  Rd as Qt,
  Rf as $t,
  Rh as k,
  Rp as en,
  Rs as tn,
  Sc as nn,
  Sd as rn,
  Ss as an,
  Su as on,
  Td as sn,
  Tm as cn,
  Ud as ln,
  Vp as un,
  Wf as dn,
  Wl as fn,
  Wr as pn,
  Wu as mn,
  Xl as hn,
  Xm as gn,
  Yf as A,
  Yo as _n,
  Yu as vn,
  Zl as yn,
  Zt as bn,
  Zu as xn,
  ac as Sn,
  bc as Cn,
  bd as wn,
  bu as j,
  dh as Tn,
  dm as En,
  du as Dn,
  ep as On,
  fm as kn,
  gm as An,
  hh as jn,
  hs as Mn,
  ia as Nn,
  ic as Pn,
  id as Fn,
  jd as In,
  ju as Ln,
  ko as Rn,
  ks as zn,
  ld as Bn,
  lf as Vn,
  mh as Hn,
  nf as Un,
  oc as Wn,
  pa as Gn,
  pm as Kn,
  qu as qn,
  ra as Jn,
  rm as M,
  sh as Yn,
  sl as Xn,
  tf as Zn,
  ud as Qn,
  uf as $n,
  uh as er,
  up as tr,
  vf as nr,
  wf as rr,
  yf as ir,
  zd as ar,
  zf as or,
} from "./main.js";
var N = u(),
  sr = e(l(), 1),
  P = e(c(), 1),
  cr = P.createContext({ bCanUseLink: !1 }),
  lr = (function (e) {
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
  ur =
    /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
function dr(e) {
  return e.match(ur)?.[1];
}
function fr(e, t) {
  if (!t) return !1;
  let n = dr(window.location.href),
    r = t.GetEventType() == 36,
    i =
      (t.appid ? `games` : `groups`) == n &&
      ((t.appid && t.appid === Kn.APPID) ||
        (!t.appid && t.clanSteamID.GetAccountID() === Kn.CLANACCOUNTID));
  switch (e) {
    case `view`:
      return i || !1;
    case `communityview`:
    case `edit`:
    case `editBroadcast`:
    case `publish`:
    case `migrate`:
    case `preview`:
    case `previewsale`:
    case `community_announcehub`:
      return i;
    case `admin`:
      return !r && i;
    case `websitehub`:
      return i || !1;
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
      return (St(!1, `Unknown route specified for link: ` + e), !1);
  }
}
function pr(e) {
  let t =
    M.COMMUNITY_BASE_URL +
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
function mr(e) {
  return br(e, `sale`, `absolute`);
}
function hr(e) {
  return br(e, `storeview`, `absolute`);
}
function gr(e, t, n) {
  if (n)
    return (e ? `/games/` + Kn.VANITY_ID : `/groups/` + Kn.VANITY_ID) + `/`;
  let r = e ? `ogg/` + e : `gid/` + t.ConvertTo64BitString();
  return M.COMMUNITY_BASE_URL + r + `/`;
}
function _r() {
  return `news`;
}
function vr() {
  return !1;
}
function yr(e) {
  return e.clanSteamID.GetAccountID() === 45479024 && !1;
}
function br(e, t, n) {
  let { data: r } = D(e?.appid ? { appid: e.appid } : void 0);
  if (e) return xr(e, r, t, n);
}
function xr(e, t, n, r) {
  let i = r === `relative`,
    a = i ? `/` : M.STORE_BASE_URL,
    o = gr(e.appid, e.clanSteamID, i);
  n === `view`
    ? (n = `communityview`)
    : n === `websitehub` && (n = `community_announcehub`);
  let s = e.GID ? e.GID : ``,
    c = e.AnnouncementGID ? e.AnnouncementGID : ``,
    l = e.BIsOGGEvent() && e.appid && t && e.BHasSaleUpdateLandingPageVanity(),
    u = e.GetEventType() == 36;
  switch (n) {
    case `publish`:
      return (
        o +
        (e.bOldAnnouncement
          ? `partnerevents/migrate_announcement/` + c
          : `partnerevents/publish/` + s + `?tab=publishing`)
      );
    case `edit`:
      return (
        o +
        (e.bOldAnnouncement
          ? `partnerevents/migrate_announcement/` + c
          : `partnerevents/edit/` + s)
      );
    case `editBroadcast`:
      return (
        o +
        (e.bOldAnnouncement
          ? `partnerevents/migrate_announcement/` + c
          : `partnerevents/edit/` + s) +
        `?tab=broadcast`
      );
    case `migrate`:
      return o + `partnerevents/migrate_announcement/` + c;
    case `preview`:
      return u
        ? o + `partnerevents/previewsale/` + s
        : o +
            (e.bOldAnnouncement
              ? `partnerevents/preview_old_announcement/` + c
              : `partnerevents/preview/` + s);
    case `previewsale`:
      return o + `partnerevents/previewsale/` + s;
    case `admin`:
      return u
        ? `${a}curator/${e.clanSteamID.GetAccountID()}/admin/creatorhome_link`
        : o + `partnerevents`;
    case `community_announcehub`:
      return o + `announcements`;
    case `newshub`: {
      let t = e.appid
        ? `app/${e.appid}`
        : `group/${e.clanSteamID.GetAccountID()}`;
      return a + `${_r()}/${t}`;
    }
    case `store`:
      return (
        a +
        (e.appid ? `app/` + e.appid : `curator/` + e.clanSteamID.GetAccountID())
      );
    case `sale`:
      return e.jsondata.bSaleEnabled
        ? l
          ? `${he(t)}/${e.GetSaleUpdateLandingPageVanity()}`
          : u
            ? `${a}curator/${e.clanSteamID.GetAccountID()}`
            : a +
              te(
                e.clanSteamID.GetAccountID(),
                e.GetSaleVanity(),
                !!e.jsondata.sale_vanity_id_valve_approved_for_sale_subpath,
              )
        : a;
    case `hardwarepreview`:
      return yr(e) ? `${a}hardware_v2/${c}?beta=1` : a;
    case `communityview`:
      return o + `announcements/detail/` + c;
    case `storeview`:
      if (e.clanSteamID.GetAccountID() == Se())
        return `${M.STORE_BASE_URL}meetsteam/${s}`;
      if (l) return `${he(t)}/${e.GetSaleUpdateLandingPageVanity()}`;
      if (u) return `${a}curator/${e.clanSteamID.GetAccountID()}`;
      {
        let t = e.appid
            ? `app/${e.appid}`
            : `group/${e.clanSteamID.GetAccountID()}`,
          n = vr() ? `view_v2` : `view`,
          r = e.bOldAnnouncement ? `old_view/${c}` : `${n}/${s}`;
        return `${a}${_r()}/${t}/${r}`;
      }
    case `usernewshub`:
      return `${a}${_r()}/`;
    default:
      return (St(!1, `Unknown route specified for link`), ``);
  }
}
function Sr(e, t, n) {
  return br(e, t, n === `forceAbsolute` || !fr(t, e) ? `absolute` : `relative`);
}
function Cr(e) {
  let { eventModel: t, route: n, bPopup: r = !0 } = e,
    i = fr(n, t),
    a = br(t, n, i ? `relative` : `absolute`);
  return (
    P.useEffect(() => {
      a && (r ? window.open(a) : window.location.assign(a));
    }, [r, a]),
    i && a ? (0, N.jsx)(p, { push: !0, to: a }) : null
  );
}
function wr(e, t, n) {
  let r = gr(e, t, !1);
  switch (n) {
    case `admin`:
      return r + `partnerevents`;
    default:
      return ``;
  }
}
function Tr(e) {
  let { eventModel: t, preferredFocus: n } = e,
    { bCanUseLink: i } = P.useContext(cr),
    a = Xt(),
    o = r(),
    s = i && fr(e.route, t),
    c = br(t, e.route, s ? `relative` : `absolute`),
    l = !s && c ? Ut(c) : c,
    u = s || !l ? l : pn(l, a),
    d = br(t, `websitehub`, `absolute`),
    f =
      e.route == `websitehub` ? `` : nr.Localize(`#EventBrowse_MoreEventsBtn`),
    p = P.useCallback(() => {
      d && window.location.assign(d);
    }, [d]);
  return t
    ? s
      ? (0, N.jsx)(Wt, {
          style: e.style,
          className: e.className,
          href: o.createHref({ pathname: u }),
          onClick: (t) => {
            u && (e.onClick?.(t), o.push(u), t.preventDefault());
          },
          onOptionsActionDescription: f,
          onOptionsButton: f ? p : void 0,
          preferredFocus: n,
          children: e.children,
        })
      : (0, N.jsx)(Wt, {
          href: u,
          style: e.style,
          className: e.className,
          onClick: e.onClick,
          preferredFocus: n,
          onOptionsActionDescription: f,
          onOptionsButton: f ? p : void 0,
          children: e.children,
        })
    : null;
}
var Er = P.createContext(!1),
  Dr = `100% 0px 100% 0px`,
  Or = `SaleSection_`;
(0, P.createContext)(!1);
function kr() {
  return window.innerWidth ?? 1920;
}
function Ar() {
  return kr() >= 940;
}
function jr() {
  bn();
  let [e, t] = (0, P.useState)(() => kr());
  return (
    (0, P.useEffect)(() => {
      let e = () => {
        t(kr());
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
function Mr(e = 940) {
  return jr() >= e;
}
function Nr(e) {
  let t = jr(),
    n = t >= ((0, P.useContext)(Er) ? 911 : 940),
    r = oe(e);
  return n
    ? { nMaxCapsulesPerRow: r.nMaxItemsPerRow, bScreenIsWide: n }
    : {
        nMaxCapsulesPerRow: Math.min(
          Math.max(Math.floor(t / r.nItemMinimumWidth), 1),
          r.nMaxItemsPerRow,
        ),
        bScreenIsWide: n,
      };
}
function Pr(e) {
  let t = oe(e);
  return Ar()
    ? t.nMaxItemsPerRow
    : Math.min(
        Math.max(Math.floor(window.innerWidth / t.nItemMinimumWidth), 1),
        t.nMaxItemsPerRow,
      );
}
function Fr(e) {
  return (0, N.jsxs)(`a`, {
    href: e.strURL,
    className: Be.Box,
    "data-modal-content-sizetofit": !!e.bSizeToFit,
    "data-appid": e.appid,
    "data-publishedfileid": e.publishedfileid,
    children: [
      (0, N.jsx)(Ge, { strURL: e.strPreviewURL }),
      (0, N.jsxs)(ze, {
        children: [
          (0, N.jsx)(Ee, { children: e.strTitle }),
          (0, N.jsx)(`div`, {
            children: (0, N.jsx)(`span`, {
              className: Be.Type,
              children: e.strType,
            }),
          }),
          e.author && (0, N.jsx)(Ze, { children: e.author }),
          (0, N.jsx)(Le, { children: e.strDescription }),
        ],
      }),
    ],
  });
}
var Ir = class extends at {
    m_LinkFilter = Yn;
    m_parentNode = void 0;
    m_mapHostToComponent;
    m_globalStoreLink;
    constructor(e, t, n, r) {
      (super(e),
        (this.m_parentNode = t),
        (this.m_mapHostToComponent = n),
        (this.m_globalStoreLink = r));
    }
    AppendText(e, t = !1) {
      let n = e;
      if (
        (t || this.m_parentNode?.tag == `*`) &&
        (this.m_parentNode == null || this.m_parentNode.tag != `img`)
      ) {
        let e = this.m_LinkFilter.exec(n);
        for (; e;) {
          if (e.index > 0) {
            let n = e.input.substring(0, e.index);
            super.AppendText(n, t);
          }
          let r = e[0],
            i = !1;
          if (this.m_mapHostToComponent) {
            for (let e = 0; e < this.m_mapHostToComponent.length; ++e)
              if (this.m_mapHostToComponent[e].urlRegExp.exec(r)) {
                ((i = !0),
                  super.AppendNode(
                    this.m_mapHostToComponent[e].fnBBComponent(
                      r,
                      this.m_globalStoreLink,
                    ),
                  ));
                break;
              }
          }
          (i || super.AppendNode(T(r)),
            (n = e.input.substring(e.index + r.length)),
            (e = this.m_LinkFilter.exec(n)));
        }
      }
      n.length > 0 && super.AppendText(n, t);
    }
  },
  Lr = `[ː:]([a-zA-Z0-9_]+)[ː:]`,
  Rr = class extends at {
    m_EmoteRegex = new RegExp(Lr);
    AppendText(e, t = !1) {
      let n = e;
      if (e.length >= 3) {
        let e = this.m_EmoteRegex.exec(n);
        for (; e;) {
          if (e.index > 0) {
            let n = e.input.substring(0, e.index);
            super.AppendText(n, t);
          }
          let r = e[1];
          (super.AppendNode(P.createElement(Qe, { emoticon: r }, [])),
            (n = e.input.substring(e.index + r.length + 2)),
            (e = this.m_EmoteRegex.exec(n)));
        }
      }
      n.length > 0 && super.AppendText(n, t);
    }
  },
  zr = class extends at {
    m_parentNode = void 0;
    constructor(e, t) {
      (super(e), (this.m_parentNode = t));
    }
    AppendText(e, t = !1) {
      let n = e;
      (this.m_parentNode &&
        this.m_parentNode.tag == `img` &&
        !Br(n) &&
        (n = Pt(n)),
        super.AppendText(n, t));
    }
  };
function Br(e) {
  let t = e.trim();
  return (
    t.startsWith(`{STEAM_CLAN_IMAGE}`) || t.startsWith(`{STEAM_CLAN_LOC_IMAGE}`)
  );
}
var Vr =
  /^(#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-z-]+\([^;{}]*\)|[a-z]+)$/i;
function Hr(e) {
  return e ? Vr.test(e.trim()) : !1;
}
function Ur(e, t) {
  return Hr(e) ? e : t;
}
var Wr = `NiXfRuagfO4-`;
function Gr(e) {
  let { inputType: t, id: n, bApplyUserContentPref: r } = e,
    i = t == `bundle` ? `bundle` : t == `sub` ? `sub` : `game`,
    a = ne(n, i),
    { data: o } = D(a),
    { data: s, isPending: c } = en(r ? a : void 0);
  if (!o) return null;
  if (r) {
    if (c) return null;
    if (s?.filter_failure == 40 || s?.filter_failure == 50) {
      let e = `#StoreCapsule_App_Excluded`;
      switch (t) {
        case `sub`:
          e = `#StoreCapsule_Package_Excluded`;
          break;
        case `bundle`:
          e = `#StoreCapsule_Bundle_Excluded`;
      }
      return (0, N.jsx)(`div`, {
        className: j(Wr, `AppSummaryWidgetCtn`),
        children: xt(
          e,
          (0, N.jsx)(`a`, { href: M.STORE_BASE_URL + `account/preferences/` }),
        ),
      });
    }
  }
  return (0, N.jsx)(`div`, {
    className: j(Wr, `AppSummaryWidgetCtn`),
    children: (0, N.jsx)(C, {
      id: n,
      type: i,
      bShowDemoButton: o.type == 1,
      bAllowTwoLinesForHeader: !0,
      bPreferAssetWithoutOverride: !1,
    }),
  });
}
var Kr =
    /(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
  qr =
    /(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i,
  Jr =
    /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i;
function Yr(e, t) {
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
function Xr(e, t, n, r, i) {
  let o = d(),
    s = tr();
  return a(Qr(o, s, e, t, n, r, i)).data ?? void 0;
}
function Zr(e, t, n, r, i) {
  return [`useEventImageForSizeAsArrayWithFallback`, e?.GID, t, n, r, i];
}
function Qr(e, t, n, r, i, a, o) {
  return {
    queryKey: Zr(n, r, i, a, o),
    enabled: n && !!n.GID,
    queryFn: async () => {
      if (!n) return null;
      let s = [];
      if (!n.BImageNeedScreenshotFallback(r, i)) {
        let o = await e.ensureQueryData(_e(e, t, n, r, i, a));
        if ((o && s.push(o), a != fe.full)) {
          let a = await e.ensureQueryData(_e(e, t, n, r, i, fe.full));
          a && s.push(a);
        }
      }
      if (!o && s.length == 0) {
        let r = await e.ensureQueryData(se(e, t, n));
        r && s.push(r);
      }
      return s;
    },
  };
}
function $r({ clanSteamID: e, strVanity: t, strGroupVanity: n }) {
  let r = t !== void 0 || n !== void 0,
    { data: i, isPending: a } = Ce(
      r ? (t ?? n ?? ``) : ``,
      t === void 0 ? `group` : `store`,
    );
  if (!r) return e?.GetAccountID();
  if (!a) return i?.clanAccountID ?? null;
}
function ei(e) {
  let { appid: t, announcementGID: n, eventGID: r, strURL: i } = e,
    a = $r(e),
    o = a === null,
    {
      data: s,
      isPending: c,
      isError: l,
    } = m(
      o
        ? void 0
        : {
            clanAccountID: a ?? void 0,
            appid: t,
            eventGID: r,
            announcementGID: n,
          },
    ),
    u = g(t || s?.appid || void 0),
    { data: d } = D(u);
  if (o || l || s === null) return T(i);
  if (c || !s) return (0, N.jsx)(Te, {});
  let f = gn(M.LANGUAGE),
    p = s.GetNameWithFallback(f),
    h = s.GetSubTitleWithSummaryFallback(f),
    _ = d?.name,
    v = Vn(s.GetStartTimeAndDateUnixSeconds());
  return (0, N.jsxs)(Tr, {
    eventModel: s,
    route: lr.k_eView,
    className: Be.Box,
    "data-modal-content-sizetofit": !0,
    "data-appid": t,
    children: [
      (0, N.jsx)(ti, { ...e, event: s }),
      (0, N.jsxs)(ze, {
        children: [
          (0, N.jsxs)(Ze, {
            children: [
              O(
                s.type == 28
                  ? `#EventDisplay_Share_Announcement`
                  : `#EventDisplay_Share_Event`,
                _ ?? ``,
              ),
              (0, N.jsx)(Ve, { children: v }),
            ],
          }),
          (0, N.jsx)(Ee, {
            children: (0, N.jsx)(`div`, { className: Be.Type, children: p }),
          }),
          (0, N.jsx)(Le, { children: h }),
        ],
      }),
    ],
  });
}
function ti(e) {
  let {
      event: t,
      fnFilterImageURLsForKnownFailures: n,
      fnImageFailureCallback: r,
    } = e,
    i = Xr(t, `capsule`, gn(M.LANGUAGE), fe.capsule_main) ?? [];
  return (
    i && n && (i = n(i)),
    (0, N.jsx)(We, {
      className: Be.Preview,
      rgSources: i ?? [],
      onIncrementalError: (e, t, n) => r && r(t),
    })
  );
}
var ni =
    /(?:steampowered\.com|store\.steamchina\.com|store[\w-]*\.(?:[\w.-]+\.)?(?:steam\.dev|valve\.org)|valve\.org\/store)\/(app|bundle|sub)\/(\d+)/i,
  ri = [`store.steampowered.com`, `store.steamchina.com`],
  ii = [`steampowered.com`, `steamcommunity.com`],
  ai = [`steamchina.com`],
  oi = [`steam.dev`, `valve.org`];
function si(e, t) {
  return t.some((t) => e == t || e.endsWith(`.${t}`));
}
function ci(e) {
  let t = Dt(e).toLocaleLowerCase(),
    n = Dt(M.STORE_BASE_URL).toLocaleLowerCase(),
    r = Dt(M.COMMUNITY_BASE_URL).toLocaleLowerCase();
  return t == n || t == r
    ? !0
    : ri.includes(n)
      ? si(t, si(n, ai) ? ai : ii)
      : si(t, [...ii, ...ai, ...oi]);
}
function li(e) {
  if (ci(e)) return ui(e);
}
function ui(e) {
  let t = new RegExp(ni).exec(e);
  if (!t || t.length <= 2) return;
  let n = t[1].toLowerCase(),
    r = Number(t[2]);
  if (r > 0 && Gt(n))
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
function di(e) {
  return !!e && (e.GetEventType() == 36 || e.GetEventType() == 20);
}
function fi(e) {
  let t = di(e),
    n = t ? e.clanSteamID.GetAccountID() : void 0,
    { data: r, isLoading: i } = we(n),
    { data: a, isLoading: o } = ie(n);
  if (!t) return null;
  if (!(i || o)) return !a || !r || !Ff(e, r) ? null : (a.appids ?? []);
}
function pi(e, t) {
  return e === null || (t.length > 0 && t.every((t) => e.includes(t)));
}
function mi(e, t) {
  let n = fi(t);
  if (e.appid === void 0) return !0;
  if (!(e.appid > 0)) return !1;
  if (n !== void 0) return pi(n, [e.appid]);
}
function hi({ link: e, strURL: t, eventModel: n, bAnnouncement: r }) {
  let i = mi(e, n);
  if (i === void 0) return null;
  if (!i) return T(t, n);
  let a =
    e.strClanSteamID64 === void 0
      ? e.clanAccountID === void 0
        ? void 0
        : cn.InitFromClanID(e.clanAccountID, M.EUNIVERSE)
      : new cn(e.strClanSteamID64);
  return (0, N.jsx)(ei, {
    appid: e.appid,
    clanSteamID: a,
    strVanity: e.strOGGVanity,
    strGroupVanity: e.strGroupVanity,
    eventGID: r ? void 0 : e.eventGID,
    announcementGID: r ? e.eventGID : void 0,
    strURL: t,
  });
}
function gi(e, t, n, r = !1) {
  if (ci(t)) {
    let i = Yr(e, t);
    if (i)
      return (0, N.jsx)(hi, {
        link: i,
        strURL: t,
        eventModel: n?.event,
        bAnnouncement: r,
      });
  }
  return T(t, n?.event);
}
function _i(e, t) {
  return gi(qr, e, t);
}
function vi(e, t) {
  return gi(Kr, e, t);
}
function yi(e, t) {
  return gi(Jr, e, t, !0);
}
var bi = /community.+sharedfiles\/filedetails\/\?id=\d+/i;
function xi(e) {
  if (!bi.test(e)) return;
  let t = e.split(`?`);
  if (t.length == 2) return new URLSearchParams(t[1]).get(`id`) ?? void 0;
}
function Si(e) {
  let { sharedFileID: t } = e,
    { data: n } = Ne(t),
    r = M.COMMUNITY_BASE_URL + `sharedfiles/filedetails/?id=`,
    i = n ?? {
      sharedfileid: t,
      title: O(`#Loading`),
      description: ``,
      type: ``,
      previewurl: ``,
      appid: 0,
      url: r + t,
    },
    a = Tn(i.url) ? r + i.url : i.url,
    o = i.personnaname !== void 0 && i.personnaname.length > 0;
  return (0, N.jsx)(Fr, {
    strURL: a,
    strTitle: i.title,
    strPreviewURL: i.previewurl,
    strType: i.type,
    strDescription: i.description,
    author:
      o &&
      Un(`#EventEditor_Author`, (0, N.jsx)(Me, { children: i.personnaname })),
    publishedfileid: t,
    appid: i.appid,
    bSizeToFit: i.bSizeToFit,
  });
}
var Ci = `x-q4pa21GtQ-`,
  wi = `jjfjy77nkEg-`,
  Ti = `xk1sG-uqpwY-`,
  Ei = `XZqUhfrxufg-`,
  Di = `h4V9nI3kyqU-`,
  Oi = `gCqj4CIOecY-`,
  ki = /sketchfab\.com\/(?:models\/(?:[^/\s]+-)?)([a-z0-9]{32})/i;
function Ai(e) {
  return [`sketchfab_oembed`, e];
}
function ji(e) {
  return `https://sketchfab.com/oembed?url=https://sketchfab.com/models/${encodeURIComponent(e)}`;
}
function Mi(e) {
  return {
    queryKey: Ai(e),
    queryFn: async () => {
      let t = await fetch(ji(e));
      if (t.status === 404) return null;
      if (!t.ok) throw Error(`sketchfab oembed returned ${t.status}`);
      return await t.json();
    },
    enabled: !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function Ni(e) {
  return a(Mi(e));
}
function Pi(e) {
  let { modelID: t } = e,
    [n, r] = P.useState(!0),
    { data: i } = Ni(t);
  if (n) {
    let e = () => r(!1);
    return (0, N.jsxs)(`div`, {
      className: Ti,
      role: `button`,
      tabIndex: 0,
      onClick: e,
      onKeyDown: (t) => {
        (t.key === `Enter` || t.key === ` `) && (t.preventDefault(), e());
      },
      children: [
        i?.thumbnail_url &&
          (0, N.jsx)(`img`, {
            className: `FFbDls5-Ssk-`,
            src: i.thumbnail_url,
            alt: i.title,
          }),
        (0, N.jsx)(`img`, { className: Ci, alt: `` }),
        (0, N.jsxs)(`div`, {
          className: Ei,
          children: [
            (0, N.jsxs)(`div`, {
              className: Di,
              children: [
                (0, N.jsx)(`span`, {
                  className: Oi,
                  children: O(`#EventDisplay_Sketchfab`),
                }),
                i?.title && (0, N.jsxs)(`div`, { children: [i.title, `\xA0`] }),
              ],
            }),
            i?.author_name &&
              (0, N.jsx)(`div`, {
                className: `-r4s23p52-0-`,
                children: i.author_name,
              }),
          ],
        }),
      ],
    });
  }
  return (0, N.jsx)(`div`, {
    className: wi,
    children: (0, N.jsx)(`iframe`, {
      className: wi,
      title: i?.title ?? t,
      src: `https://sketchfab.com/models/${encodeURIComponent(t)}/embed?autostart=1`,
      frameBorder: 0,
      allowFullScreen: !0,
    }),
  });
}
var Fi =
  /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.[\w.-]+\.steam\.dev|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
function Ii(e) {
  let t = Fi.exec(e),
    n = t ? Number(t[1]) : 0;
  return n > 0 ? n : void 0;
}
function Li(e) {
  return ci(e) ? Ii(e) : void 0;
}
var Ri = `_8mFolns3-hw-`;
function zi(e) {
  let { defid: t } = e,
    n = Mf(t);
  if (!n || !n.community_item_data) return null;
  let r = n.appid,
    i = n.community_item_data.item_image_large,
    a = `${M.MEDIA_CDN_COMMUNITY_URL}images/items/${r}/${i}`;
  return (0, N.jsx)(`div`, {
    className: Ri,
    children: (0, N.jsx)(Mn, {
      toolTipContent: n.community_item_data.item_description,
      children: (0, N.jsx)(`img`, {
        src: a,
        alt: n.community_item_data.item_title,
      }),
    }),
  });
}
var Bi = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
  Vi = /twitter\.com\/(\w+)(\/?)$/i,
  Hi = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
  Ui = /twitch\.tv\/(\w+)(\/?)$/i,
  Wi =
    /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i;
function Gi() {
  return M.EREALM === At.k_ESteamRealmChina;
}
var Ki = new Map();
function qi() {
  let e = M.EREALM,
    t = Ki.get(e);
  return (
    t ||
      ((t = Gi()
        ? [
            { urlRegExp: new RegExp(ni), fnBBComponent: $i },
            { urlRegExp: new RegExp(Kr), fnBBComponent: vi },
            { urlRegExp: new RegExp(qr), fnBBComponent: _i },
            { urlRegExp: new RegExp(Jr), fnBBComponent: yi },
            { urlRegExp: new RegExp(Wi), fnBBComponent: aa },
          ]
        : [
            {
              urlRegExp: new RegExp(/youtu.be|youtube.com/i),
              fnBBComponent: je,
            },
            { urlRegExp: new RegExp(bi), fnBBComponent: Qi },
            { urlRegExp: new RegExp(ni), fnBBComponent: $i },
            { urlRegExp: new RegExp(Kr), fnBBComponent: vi },
            { urlRegExp: new RegExp(qr), fnBBComponent: _i },
            { urlRegExp: new RegExp(Jr), fnBBComponent: yi },
            { urlRegExp: new RegExp(Bi), fnBBComponent: Xi },
            { urlRegExp: new RegExp(ki), fnBBComponent: Zi },
            { urlRegExp: new RegExp(Vi), fnBBComponent: na },
            { urlRegExp: new RegExp(Hi), fnBBComponent: ra },
            { urlRegExp: new RegExp(Ui), fnBBComponent: ia },
            { urlRegExp: new RegExp(Wi), fnBBComponent: aa },
            { urlRegExp: new RegExp(Fi), fnBBComponent: ta },
          ]),
      Ki.set(e, t)),
    t
  );
}
function Ji(e) {
  return qi().find((t) => !!t.urlRegExp.exec(e));
}
function Yi(e) {
  return P.useMemo(() => Ji(e), [e]);
}
function Xi(e, t) {
  if (Gi()) return null;
  let n = new RegExp(Bi).exec(e);
  if (n && n.length > 1) {
    let e = n[1];
    if (e?.length > 0) {
      let n =
        `https://medal.tv/clip/` +
        e +
        `/?autoplay=0&donate=0` +
        (t && t.event ? `&steamappid=` + t.event.appid : ``);
      return (0, N.jsx)(`iframe`, {
        className: h,
        src: n,
        title: e,
        frameBorder: 0,
        allow: `autoplay`,
      });
    }
  }
  return T(e, t?.event);
}
function Zi(e, t) {
  let n = new RegExp(ki).exec(e);
  if (n && n.length > 1) {
    let e = n[1];
    if (e && e.length > 1) return (0, N.jsx)(Pi, { modelID: e });
  }
  return T(e, t?.event);
}
function Qi(e, t) {
  let n = xi(e);
  return n === void 0 ? T(e, t?.event) : (0, N.jsx)(Si, { sharedFileID: n });
}
function $i(e, t) {
  let n = li(e);
  return n
    ? (0, N.jsx)(ea, {
        eventModel: t?.event,
        inputID: n.id,
        inputType: n.strItemType,
        fallbackUrl: e,
      })
    : T(e, t?.event);
}
function ea(e) {
  let { inputID: t, inputType: n, eventModel: r, fallbackUrl: i } = e,
    a = be(t, n),
    { data: o } = D(a),
    s = fi(r),
    c;
  return (
    s === null
      ? (c = !0)
      : s && o && (c = pi(s, o.appid ? [o.appid] : (o.included_appids ?? []))),
    c === void 0
      ? null
      : c
        ? (0, N.jsx)(Gr, { id: t, inputType: n, bApplyUserContentPref: !0 })
        : T(i, r)
  );
}
function ta(e, t) {
  let n = Li(e);
  return n
    ? (0, N.jsx)(`div`, {
        className: j(x),
        children: (0, N.jsx)(zi, { defid: n, url: e }),
      })
    : T(e, t?.event);
}
function na(e, t) {
  return Gi() ? null : oa(e, (0, N.jsx)(yn, {}), `@`, t);
}
function ra(e, t) {
  return Gi() ? null : oa(e, (0, N.jsx)(yn, {}), `#`, t);
}
function ia(e, t) {
  return Gi() ? null : oa(e, (0, N.jsx)(hn, {}), void 0, t);
}
function aa(e, t) {
  return oa(e, (0, N.jsx)(qt, {}), void 0, t);
}
function oa(e, t, n, r) {
  let i,
    a = e.endsWith(`/`) ? e.length - 1 : e.length,
    o = e.lastIndexOf(`/`, a - 1);
  (o != -1 && o + 1 < e.length && (i = e.substring(o + 1, a)),
    n && i && (i = n + i));
  let s = T(e, r?.event, i ?? e);
  return (0, N.jsxs)(`div`, {
    className: b,
    children: [(0, N.jsx)(`div`, { className: _, children: t }), s],
  });
}
function sa(e) {
  switch (e) {
    case `button`:
      return j(xe, `LinkButton`);
    case `pill`:
      return j(ae, `LinkPill`);
    default:
      return j(ve, `Link`);
  }
}
function ca(e, t, n) {
  let r = ``;
  return (
    e == `button` && t && (r += `background-color: ${t};`),
    e == `pill` && n && (r += `color: ${n};`),
    r.length == 0 ? void 0 : r
  );
}
function la(e, t, n) {
  let r;
  return (
    (e == `button` || e == `pill`) && t && (r = { backgroundColor: t }),
    (e == `button` || e == `pill`) && n && (r = { ...(r ?? {}), color: n }),
    r
  );
}
function ua(e, t) {
  let n = (
    typeof e == `string`
      ? e
      : Array.isArray(e) && e.length == 1 && typeof e[0] == `string`
        ? e[0]
        : void 0
  )?.trim();
  return !n || !t || n != t.trim();
}
function da(e) {
  let t = lt(w(e.args) || w(e.args, `href`)),
    n = w(e.args, `style`),
    r = w(e.args, `id`),
    i = Ur(w(e.args, `buttoncolor`) || w(e.args, `bgcolor`), void 0),
    a = Ur(w(e.args, `labelcolor`) || w(e.args, `color`), void 0),
    o = sa(n),
    s = e.context.event,
    c = me(t, e.language, s?.rtime32_last_modified),
    l = Yi(ua(e.children, t) ? `` : (t ?? ``));
  if (l && t) return l.fnBBComponent(t, { event: e.context.event });
  if (c === void 0 || c == null) return e.children || ``;
  t = typeof c == `string` ? c : c[1];
  let u = la(n, i, a);
  return typeof t == `string` && t.length > 0 && t[0] == `#`
    ? (0, N.jsx)(Wt, { className: o, href: t, style: u, children: e.children })
    : t == `steam://settings/account`
      ? (0, N.jsx)(an, {
          className: o,
          href: `steam://settings/account`,
          children: e.children,
        })
      : (0, N.jsx)(Ye, {
          className: o,
          url: t,
          event: e.context.event,
          id: r,
          style: u,
          children: e.children,
        });
}
function fa(e) {
  let t = w(e.args, `href`),
    n = Yi(t);
  return n
    ? n.fnBBComponent(t, { event: e.context.event })
    : (0, N.jsx)(da, { ...e });
}
var pa = `hPeepTEP2A0-`,
  ma = `RzxfM12jbio-`,
  ha = `kQJ64kMGQbg-`,
  ga = `_74WMutU3Gxc-`,
  _a = (0, P.createContext)({});
function va(e) {
  let {
      autoplayEnabled: t,
      setAutoplayEnabled: n,
      playerVolume: r,
      setPlayerVolume: i,
      audioMuted: a,
      setAudioMuted: o,
      children: s,
    } = e,
    c = (0, P.useMemo)(
      () => ({
        m_bAutoplayEnabled: t,
        m_fnSetAutoplayEnabled: n,
        m_nPlayerVolume: r,
        m_fnSetPlayerVolume: i,
        m_bAudioMuted: a,
        m_fnSetAudioMuted: o,
      }),
      [t, n, r, i, a, o],
    );
  return (0, N.jsx)(_a.Provider, { value: c, children: s });
}
function ya() {
  return (0, P.useContext)(_a);
}
var ba = 5,
  xa = (function (e) {
    return (
      (e[(e.None = 0)] = `None`),
      (e[(e.Play = 1)] = `Play`),
      (e[(e.Pause = 2)] = `Pause`),
      e
    );
  })({}),
  F = class {
    m_elVideo = null;
    m_player = null;
    m_listeners = new rr();
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
    m_eFailureReason = mt.Invalid;
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
      (o(this), (this.m_persistState = e || {}));
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
      (this.Stop(),
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
        (this.m_player = new gt(this.m_elVideo)),
        this.m_player.SetTimeoutAfterFailedDownload(!1));
      let a =
        this.m_persistState.m_bAudioMuted !== void 0 &&
        this.m_persistState.m_bAudioMuted;
      this.SetMute(a, !0);
      let o =
        this.m_persistState.m_nPlayerVolume === void 0
          ? 1
          : this.m_persistState.m_nPlayerVolume;
      (this.SetVolume(o, !0),
        this.m_player.SetMuteOnAutoplayBlocked(this.m_bMuteWhenAutoplayBlocked),
        this.m_player.PlayMPD(t, n, r));
    }
    Stop() {
      (this.SendStats(),
        this.m_listeners.Unregister(),
        this.m_player && this.m_player.Close(),
        (this.m_elVideo = null),
        (this.m_player = null),
        (this.m_bPaused = !1),
        (this.m_bUserInputNeeded = !1),
        (this.m_nPlaybackTime = 0),
        (this.m_nVideoStartTime = 0),
        (this.m_nVideoDuration = 0),
        (this.m_nBufferedEndTime = 0));
    }
    IsInitialized() {
      return !!this.m_player && !!this.m_elVideo;
    }
    OnVideoPlaying() {
      let e = this.m_bPaused;
      ((this.m_bPaused = !1),
        (this.m_bUserInputNeeded = !1),
        e && this.m_fnOnPlayPauseChange && this.m_fnOnPlayPauseChange(!0));
    }
    OnVideoPause() {
      let e = this.m_bPaused;
      ((this.m_bPaused = !0),
        !e && this.m_fnOnPlayPauseChange && this.m_fnOnPlayPauseChange(!1));
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
      (console.log(`video download failed`, e.detail),
        (this.m_eFailureReason = e.detail || mt.PlaybackError));
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
      ((this.m_bMuteWhenAutoplayBlocked = e),
        this.IsInitialized() && this.m_player.SetMuteOnAutoplayBlocked(e));
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
        (Ta(this.m_player, this.m_strStatsURL, this.m_eFailureReason),
        (this.m_bSentStats = !0));
    }
  };
(E([s], F.prototype, `m_bPaused`, void 0),
  E([s], F.prototype, `m_bUserInputNeeded`, void 0),
  E([s], F.prototype, `m_bMuted`, void 0),
  E([s], F.prototype, `m_nVolume`, void 0),
  E([s], F.prototype, `m_eFailureReason`, void 0),
  E([s], F.prototype, `m_maxDimensions`, void 0),
  E([s], F.prototype, `m_bPlaybackStarted`, void 0),
  E([s], F.prototype, `m_bBuffering`, void 0),
  E([s], F.prototype, `m_bHasCaptions`, void 0),
  E([s], F.prototype, `m_bShowingCaption`, void 0),
  E([s], F.prototype, `m_nPlaybackTime`, void 0),
  E([s], F.prototype, `m_nVideoStartTime`, void 0),
  E([s], F.prototype, `m_nVideoDuration`, void 0),
  E([s], F.prototype, `m_nBufferedEndTime`, void 0),
  E([t.bound], F.prototype, `OnVideoPlaying`, null),
  E([k], F.prototype, `OnVideoPause`, null),
  E([t.bound], F.prototype, `OnVideoTimeUpdate`, null),
  E([k], F.prototype, `OnVolumeChange`, null),
  E([k], F.prototype, `OnVideoEnd`, null),
  E([k], F.prototype, `OnVideoValveEnded`, null),
  E([k], F.prototype, `OnDownloadFailed`, null),
  E([k], F.prototype, `OnUserInputNeeded`, null),
  E([t.bound], F.prototype, `OnMetadataChanged`, null),
  E([t.bound], F.prototype, `OnCaptionsChange`, null),
  E([k], F.prototype, `UserInputReceived`, null),
  E([t.bound], F.prototype, `SetMuteInternal`, null),
  E([k], F.prototype, `SendStats`, null));
function Sa(e, t, n, r, i, a, o) {
  let s = ya(),
    c = (0, P.useRef)(void 0);
  c.current ||= new F(s);
  let l = In(
    (i) => {
      if (i) return (c.current.Start(i, e, t, n, r), () => c.current.Stop());
    },
    [c, e, t, r],
  );
  return (
    (0, P.useEffect)(() => {
      c.current.UpdatePersistState(s);
    }, [s]),
    (0, P.useEffect)(() => {
      c.current.SetPlaybackEndCallback(i);
    }, [i]),
    (0, P.useEffect)(() => {
      c.current.SetOnPlayPauseChangeCallback(a);
    }, [a]),
    (0, P.useEffect)(() => {
      (c.current.SetOnMuteChangeCallback(o), o && o(c.current.GetMuted()));
    }, [o]),
    [l, c.current]
  );
}
function Ca(e, t) {
  ((t = !!t),
    (0, P.useEffect)(() => {
      e.SetMuteWhenAutoplayBlocked(t);
    }, [e, t]));
}
function wa(e, t) {
  let n = (0, P.useRef)(!1),
    r = (0, P.useRef)(!1),
    i = (0, P.useRef)(!1);
  return (
    (0, P.useEffect)(() => {
      n.current != t &&
        (t ? ((r.current = e.IsPaused()), e.Pause()) : r.current || e.Play(),
        (n.current = t));
    }, [t, n, r, e]),
    t || (i.current = !0),
    !i.current
  );
}
function Ta(e, t, n) {
  if (!navigator || navigator.sendBeacon === void 0) return;
  let r = e.GetDASHPlayerStats().GetPlayerStatsSummary(),
    i = e.GetAndCloseWatchedIntervals();
  if (i.reduce((e, t) => e + (t[1] - t[0]), 0) < ba && n == mt.Invalid) return;
  let a = {
      strManifest: e.IsPlayingHLS() ? e.GetHLSURL() : e.GetMPDURL(),
      watched: i,
      eFailureReason: n,
      ...r,
    },
    o = JSON.stringify(a),
    s = new FormData();
  (s.append(`stats`, o), navigator.sendBeacon(t, s));
}
function Ea(e, t) {
  if (!e || qn(e) || Fn(e) || !t) return;
  let n = e.getElementsByTagName(`video`);
  if (n.length == 0) return;
  let r = n[0];
  r.webkitSetPresentationMode && r.webkitSetPresentationMode(`fullscreen`);
}
(0, P.createContext)(void 0);
function Da(e) {
  return e ? e instanceof HTMLDialogElement : !1;
}
function Oa(e) {
  return e ? e.hasAttribute(`popover`) : !1;
}
var ka = (0, P.createContext)(void 0);
function Aa(e) {
  let {
      iosVideoFallback: t,
      supportsTheater: n,
      supportsFullscreen: r,
      children: i,
    } = e,
    a = (0, P.useRef)(null),
    o = (0, P.useRef)(null),
    [s, c] = (0, P.useState)(`none`);
  (tn(s == `theater`), (n = !!n), (r = !!r));
  let l = In(
      (e) => {
        if (((o.current = e), !e)) return;
        let t = () => {
          c((t) => (qn(e) ? `fullscreen` : t == `fullscreen` ? `none` : t));
        };
        return (
          e.addEventListener(`fullscreenchange`, t),
          () => e.removeEventListener(`fullscreenchange`, t)
        );
      },
      [c],
    ),
    u = In(
      (e) => {
        if (((a.current = e), !e)) return;
        let t = () => {
            c((e) => (e == `theater` ? `none` : e));
          },
          n = (t) => {
            t.currentTarget == t.target && Da(e) && e.close();
          },
          r = (e) => {
            e.newState == `close` && t();
          },
          i = new rr();
        return (
          Da(e)
            ? (i.AddEventListener(e, `close`, t),
              i.AddEventListener(e, `click`, n))
            : Oa(e)
              ? i.AddEventListener(e, `beforetoggle`, r)
              : St(!1, `Was expecting a dialog or popover`),
          () => i.Unregister()
        );
      },
      [c],
    ),
    d = (0, P.useCallback)(
      (e) => {
        let n = o.current,
          r = a.current;
        (n &&
          (e != `fullscreen` && qn(n) && xn(n),
          e == `fullscreen` && Ea(n, !!t)),
          Da(r) &&
            (e != `theater` && r.open && r.close(),
            e == `theater` && r.showModal()),
          Oa(r) &&
            (e != `theater` && r.matches(`:popover-open`) && r.hidePopover(),
            e == `theater` && r.showPopover()),
          c(e));
      },
      [t],
    );
  (0, P.useEffect)(() => {
    s == `theater` && !n && d(`none`);
  }, [d, s, n]);
  let f = (0, P.useMemo)(
    () => ({
      refFullscreen: l,
      refTheater: u,
      strMode: s,
      bSupportsTheater: n,
      bSupportsFullscreen: r,
      fnSetMode: d,
    }),
    [l, u, s, n, r, d],
  );
  return (0, N.jsx)(ka.Provider, { value: f, children: i });
}
function ja() {
  return (0, P.useContext)(ka);
}
function Ma(e, t) {
  return (0, P.useCallback)(() => {
    e && (e.strMode == t ? e.fnSetMode(`none`) : e.fnSetMode(t));
  }, [e, t]);
}
var Na = `A5RRwjvEUvY-`,
  Pa = `-H-CbOmskAk-`,
  Fa = `BhmPQ-Xd2d8-`,
  Ia = `_7zvFUI6bX2k-`,
  La = `uacZ-90MOII-`,
  Ra = `k9Sm1n-4mwI-`,
  za = `EE0MOLi31qY-`,
  Ba = `_7GE4TR2MB3I-`,
  Va = `pQYV6KivA1I-`,
  Ha = `pEu8vzuL1UY-`,
  Ua = `ntDKWvpd0tk-`,
  Wa = `m9RGLw-x46M-`;
function Ga() {
  return In((e) => {
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
        (e.removeEventListener(`transitionstart`, t),
          e.removeEventListener(`transitionend`, n),
          e.removeEventListener(`transitioncancel`, n));
      }
    );
  }, []);
}
var Ka = (0, P.forwardRef)(function (e, t) {
    let { children: n, ...r } = e,
      i = Ga(),
      a = Tt(i, t);
    return (0, N.jsx)(`div`, { ref: a, ...r, children: n });
  }),
  qa = 2e3,
  Ja = 500,
  Ya = 4e3,
  Xa = -1,
  Za = P.createContext(void 0);
function Qa() {
  return (0, P.useContext)(Za);
}
function $a(e, t, n) {
  return (0, P.useMemo)(
    () => ({ m_bMenuVisible: e, m_fnSetMenuVisible: t, m_refMenuLayer: n }),
    [e, t, n],
  );
}
function eo() {
  let e = Qa();
  return e ? e.m_bMenuVisible : !1;
}
function to() {
  let e = Qa();
  St(e, `Missing controls context`);
  let t = e.m_fnSetMenuVisible;
  return ((0, P.useEffect)(() => (t(!0), () => t(!1)), [t]), e.m_refMenuLayer);
}
function no(e, t) {
  let [n, r] = ao(e);
  return [n || t, r];
}
function ro(e) {
  return e.pointerType == `touch` ? Ya : qa;
}
function io() {
  return Ja;
}
function ao(e) {
  let [t, n] = co(),
    r = (0, P.useRef)(void 0),
    i = (0, P.useRef)(!1),
    a = (0, P.useRef)({ element: void 0, bKeepControls: !1 }),
    o = (0, P.useCallback)(
      (e) => {
        if (e.target == a.current.element) return;
        let t = oo(e);
        a.current = { element: e.target, bKeepControls: t };
      },
      [a],
    ),
    s = (0, P.useCallback)(
      (e) => {
        a.current.bKeepControls || i.current ? n(!0, 0) : n(!0, e);
      },
      [a, i, n],
    );
  (I(e),
    lo(
      e,
      (0, P.useCallback)(
        (e) => {
          ((i.current = e), s(qa));
        },
        [i, s],
      ),
    ),
    uo(
      e,
      (0, P.useCallback)(() => {
        s(qa);
      }, [s]),
    ));
  let c = (0, P.useCallback)(
      (e) => {
        e.pointerType != `touch` && (o(e), s(ro(e)));
      },
      [s, o],
    ),
    l = (0, P.useCallback)(
      (e) => {
        e.pointerType != `touch` && (o(e), s(ro(e)));
      },
      [o, s],
    ),
    u = (0, P.useCallback)(
      (e) => {
        e.pointerType != `touch` &&
          ((a.current = { element: void 0, bKeepControls: !1 }), s(io()));
      },
      [a, s],
    ),
    d = (0, P.useCallback)(
      (e) => {
        r.current = e.currentTarget;
      },
      [r],
    ),
    f = (0, P.useCallback)(
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
      onPointerUp: (0, P.useCallback)(
        (e) => {
          let t = r.current;
          ((r.current = void 0), e.currentTarget == t && s(ro(e)));
        },
        [s],
      ),
      onPointerCancel: f,
    },
  ];
}
function oo(e) {
  let t = e.target,
    n = e.currentTarget;
  for (; t && t != n;) {
    if (t.dataset?.keepcontrols == `true`) return !0;
    t = t.parentElement;
  }
  return !1;
}
function so(e) {
  let t = (0, P.useRef)(Xa);
  return {
    onPointerDown: (0, P.useCallback)(
      (e) => {
        (e.pointerType !== `mouse` || e.button == 0) &&
          (e.currentTarget.setPointerCapture(e.pointerId),
          (t.current = e.pointerId));
      },
      [t],
    ),
    onPointerCancel: (0, P.useCallback)(
      (e) => {
        t.current == e.pointerId && (t.current = Xa);
      },
      [t],
    ),
    onPointerUp: (0, P.useCallback)(
      (n) => {
        if (t.current != n.pointerId) return;
        (n.currentTarget.releasePointerCapture(n.pointerId), (t.current = Xa));
        let r = n.currentTarget.getBoundingClientRect(),
          { clientX: i, clientY: a } = n;
        i >= r.left && i <= r.right && a >= r.top && a <= r.bottom && e(n);
      },
      [t, e],
    ),
  };
}
function co() {
  let [e, t] = (0, P.useState)(!1),
    n = (0, P.useRef)(void 0),
    r = (0, P.useCallback)(
      (e, r) => {
        ((n.current &&= (window.clearTimeout(n.current), void 0)),
          t(e),
          e && r != 0 && (n.current = window.setTimeout(() => t(!1), r)));
      },
      [t],
    );
  return (
    (0, P.useEffect)(
      () => () => {
        n.current && window.clearTimeout(n.current);
      },
      [],
    ),
    [e, r]
  );
}
function lo(e, t) {
  let n = (0, P.useRef)(!0),
    r = I(e);
  (0, P.useEffect)(() => {
    let e = n.current;
    ((n.current = !1), (!e || r) && t(r));
  }, [r, t, n]);
}
function uo(e, t) {
  let r = (0, P.useRef)(!0),
    i = n(() => e.GetMuted());
  (0, P.useEffect)(() => {
    let e = r.current;
    ((r.current = !1), !e && t());
  }, [i, t, r]);
}
function fo(e) {
  let [t, r] = n(() => [e.GetMuted(), e.GetVolume()]);
  return [
    t,
    r,
    (0, P.useCallback)(
      (t) => {
        (e.SetMute(!1), e.SetVolume(t));
      },
      [e],
    ),
    (0, P.useCallback)(() => e.SetMute(!t), [t, e]),
  ];
}
function po(e) {
  return n(() => [
    e.GetPlaybackTime(),
    e.GetTimelineDuration(),
    e.GetBufferedEndTime(),
  ]);
}
function mo(e) {
  return n(() => e.GetFailureReason());
}
function I(e) {
  return n(() => e.IsPaused());
}
function ho(e) {
  return (0, P.useCallback)(() => {
    e.TogglePlayPause();
  }, [e]);
}
function go(e, t) {
  (0, P.useEffect)(() => {
    let n = f(() => {
      let n = e.GetMaxVideoDimensions();
      t(n ? { nWidth: n.nWidth, nHeight: n.nHeight } : null);
    });
    return () => n();
  }, [e, t]);
}
function _o(e) {
  return n(() => e.HasPlaybackStarted());
}
function vo(e) {
  return n(() => ({
    bHasCaptions: e.HasCaptions(),
    bShowingCaption: e.IsShowingCaption(),
  }));
}
var yo = `cOcEiRe-dIg-`,
  bo = `QkF4JCVWpWw-`,
  xo = `_8RH876Wgr7A-`,
  So = `b0G5PgYKHAM-`,
  Co = `_68B-8ItOIlc-`,
  wo = `GsDewiltMCM-`,
  To = `BffT7IQWKYg-`,
  Eo = `aejFKWIp7Dg-`,
  Do = `eBjRkRA8NpA-`,
  Oo = `RrXwg35xzWc-`,
  ko = `_98b2uQrBfN4-`,
  Ao = `LCeQJ5hJTnk-`,
  jo = `OPuK3adv80Y-`,
  Mo = `qFZtjvdCOxo-`,
  No = `vzX4l4uGgUg-`,
  Po = `HOEA4Jz0kQU-`,
  Fo = `AAuicaihzn0-`,
  L = {};
((L.arabic = () =>
  A(() => import(`./chunk~15fc297361.js`), [], import.meta.url)),
  (L.brazilian = () =>
    A(() => import(`./chunk~271b0bde8a.js`), [], import.meta.url)),
  (L.bulgarian = () =>
    A(() => import(`./chunk~1cb30bbf4f.js`), [], import.meta.url)),
  (L.czech = () =>
    A(() => import(`./chunk~cbcc556ab5.js`), [], import.meta.url)),
  (L.danish = () =>
    A(() => import(`./chunk~5c75804a95.js`), [], import.meta.url)),
  (L.dutch = () =>
    A(() => import(`./chunk~8c0c792670.js`), [], import.meta.url)),
  (L.english = () =>
    A(() => import(`./chunk~e7d89a4199.js`), [], import.meta.url)),
  (L.finnish = () =>
    A(() => import(`./chunk~06f7875ba1.js`), [], import.meta.url)),
  (L.french = () =>
    A(() => import(`./chunk~3e87475e99.js`), [], import.meta.url)),
  (L.german = () =>
    A(() => import(`./chunk~914182d6d9.js`), [], import.meta.url)),
  (L.greek = () =>
    A(() => import(`./chunk~7176660b7d.js`), [], import.meta.url)),
  (L.hungarian = () =>
    A(() => import(`./chunk~87b3222571.js`), [], import.meta.url)),
  (L.indonesian = () =>
    A(() => import(`./chunk~5510fc6d67.js`), [], import.meta.url)),
  (L.italian = () =>
    A(() => import(`./chunk~643e72814a.js`), [], import.meta.url)),
  (L.japanese = () =>
    A(() => import(`./chunk~dfdc60a744.js`), [], import.meta.url)),
  (L.koreana = () =>
    A(() => import(`./chunk~3b423a4cf9.js`), [], import.meta.url)),
  (L.latam = () =>
    A(() => import(`./chunk~1e2e824c4a.js`), [], import.meta.url)),
  (L.malay = () =>
    A(() => import(`./chunk~3770e3453d.js`), [], import.meta.url)),
  (L.norwegian = () =>
    A(() => import(`./chunk~d4c8a21b7c.js`), [], import.meta.url)),
  (L.polish = () =>
    A(() => import(`./chunk~4d4be3bbe6.js`), [], import.meta.url)),
  (L.portuguese = () =>
    A(() => import(`./chunk~0145d99c18.js`), [], import.meta.url)),
  (L.romanian = () =>
    A(() => import(`./chunk~de571667db.js`), [], import.meta.url)),
  (L.russian = () =>
    A(() => import(`./chunk~8d38d8594a.js`), [], import.meta.url)),
  (L.sc_schinese = () =>
    A(() => import(`./chunk~57306d4383.js`), [], import.meta.url)),
  (L.schinese = () =>
    A(() => import(`./chunk~54799c0222.js`), [], import.meta.url)),
  (L.spanish = () =>
    A(() => import(`./chunk~853e04c5a4.js`), [], import.meta.url)),
  (L.swedish = () =>
    A(() => import(`./chunk~93b2fc55fc.js`), [], import.meta.url)),
  (L.tchinese = () =>
    A(() => import(`./chunk~72ca3fead7.js`), [], import.meta.url)),
  (L.thai = () =>
    A(() => import(`./chunk~9fe0450caa.js`), [], import.meta.url)),
  (L.turkish = () =>
    A(() => import(`./chunk~e65ab760ae.js`), [], import.meta.url)),
  (L.ukrainian = () =>
    A(() => import(`./chunk~4787f8286c.js`), [], import.meta.url)),
  (L.vietnamese = () =>
    A(() => import(`./chunk~31d1f07f01.js`), [], import.meta.url)));
async function Io(e) {
  if (L[e]) return await L[e]();
}
var R = ir(Io);
function Lo(e) {
  switch (e) {
    case 1:
      return R.Localize(`#StoreTrailer_Title_Category_Gameplay`);
    case 2:
      return R.Localize(`#StoreTrailer_Title_Category_Teaser`);
    case 3:
      return R.Localize(`#StoreTrailer_Title_Category_Cinematic`);
    case 4:
      return R.Localize(`#StoreTrailer_Title_Category_Update`);
    case 5:
      return R.Localize(`#StoreTrailer_Title_Category_Accolades`);
    case 6:
      return R.Localize(`#StoreTrailer_Title_Category_Interview`);
  }
  return R.Localize(`#StoreTrailer_Title_Category_Unknown`);
}
var Ro = `12px`,
  zo = `LzRinklSJ-4-`,
  Bo = `_2uk-hbrhKFI-`,
  Vo = `Y9S-qDK8XPE-`,
  Ho = 4,
  Uo = parseInt(Ro);
function Wo(e) {
  let { refButton: t, onClose: n, scroll: r, children: i } = e,
    a = (0, P.useRef)(null),
    [o, s] = (0, P.useState)({ nLeft: 0, nTop: 0 }),
    c = to(),
    l = In(
      (e) => {
        if (((a.current = e), !e)) return;
        let r = (r) => {
          let i = vn(e, r.target),
            a = vn(t.current, r.target);
          !i && !a && n();
        };
        if (e.ownerDocument.defaultView)
          return (
            e.ownerDocument.defaultView.addEventListener(`mouseup`, r),
            () => e.ownerDocument.defaultView?.removeEventListener(`mouseup`, r)
          );
      },
      [a, n, t],
    );
  if (
    ((0, P.useLayoutEffect)(() => {
      if (!a.current || !t.current || !c.current) return;
      let e = a.current.getBoundingClientRect(),
        n = c.current.getBoundingClientRect(),
        r = t.current.getBoundingClientRect(),
        i = n.right - n.left,
        o = r.right - r.left,
        l = r.left - n.left + o / 2,
        u = e.right - e.left,
        d = er(l - u / 2, 0 + Ho, i - u - Ho),
        f = e.bottom - e.top,
        p = r.top - Uo - f - n.top;
      s({ nLeft: d, nTop: p });
    }, [a, t, c]),
    !c.current || !i)
  )
    return null;
  let u = { left: o.nLeft, top: o.nTop },
    d = j(zo, !!r && `kaHR0KlvcO4-`),
    f = (0, N.jsx)(`div`, {
      ref: l,
      style: u,
      className: d,
      role: `menu`,
      children: i,
    });
  return sr.createPortal(f, c.current);
}
function Go(e) {
  return (0, N.jsx)(`div`, { className: Vo, role: `separator` });
}
function Ko(e) {
  let { onClick: t, checked: n, children: r } = e,
    [i, a] = sn(),
    o = j(Bo, n && `vi2dzrdIGJY-`),
    s = `#2d73ff`,
    c = `#00ccff`;
  return (
    i && ((s = `#eeeeee`), (c = `#ffffff`)),
    (0, N.jsxs)(`div`, {
      className: o,
      role: `menuitemcheckbox`,
      "aria-checked": n,
      tabIndex: 0,
      onClick: t,
      onKeyDown: (e) => {
        (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), t());
      },
      ...a,
      children: [r, n && (0, N.jsx)(nn, { color: s, highlightColor: c })],
    })
  );
}
function qo(e) {
  let { player: t, refButton: n, onClose: r } = e,
    i = ya(),
    a = t.GetVideoRepresentations().map((e) => {
      let n = () => {
          (t.SetVideoRepresentation(e), r());
        },
        i = Yo(e);
      return (0, N.jsx)(
        Ko,
        { onClick: n, checked: e.selected, children: i },
        e.id,
      );
    }),
    o = a.length > 1,
    s = !!i.m_fnSetAutoplayEnabled,
    c = o || !s;
  return (0, N.jsxs)(Wo, {
    refButton: n,
    onClose: r,
    children: [
      c && a,
      s && c && (0, N.jsx)(Go, {}),
      s && (0, N.jsx)(Jo, { onClose: r }),
    ],
  });
}
function Jo(e) {
  let { onClose: t } = e,
    n = ya(),
    r = n.m_bAutoplayEnabled == 1,
    i = (0, P.useCallback)(() => {
      (n.m_fnSetAutoplayEnabled && n.m_fnSetAutoplayEnabled(!r), t());
    }, [r, n, t]);
  return (
    P.use(R.Ready()),
    (0, N.jsx)(Ko, {
      onClick: i,
      checked: r,
      children: R.Localize(`#StoreTrailer_AutoPlayVideos`),
    })
  );
}
function Yo(e) {
  return vt(e)
    ? R.Localize(`#TrailerPlayer_Quality_Auto`)
    : e.height == 2160
      ? `2160p (4k)`
      : `${e.height}p`;
}
function Xo(e) {
  let { player: t, refButton: n, onClose: r } = e,
    i = gn(M.LANGUAGE),
    a = (0, P.useMemo)(() => {
      let e = [...t.GetCaptionRepresentations()],
        n = e.findIndex((e) => e.m_eLanguage == i);
      return (n > 0 && zt(e, n, 0), e);
    }, [i, t]),
    o = [];
  for (let e of a)
    (o.push(
      (0, N.jsx)(
        Ko,
        {
          onClick: () => {
            (t.SetCaptionRepresentation(e.m_eLanguage), r());
          },
          checked: !1,
          children: e.m_strLabel,
        },
        e.m_eLanguage,
      ),
    ),
      e.m_eLanguage == i && o.push((0, N.jsx)(Go, {})));
  return o.length == 0
    ? null
    : (0, N.jsx)(Wo, { refButton: n, onClose: r, scroll: !0, children: o });
}
var Zo = 4,
  Qo = 130,
  $o = P.forwardRef(function (e, t) {
    let {
        tooltip: n,
        onActivate: r,
        size: i,
        children: a,
        disableTooltip: o,
      } = e,
      s = eo(),
      c = so(r);
    return (0, N.jsx)(Mn, {
      toolTipContent: n,
      direction: `top`,
      usePointerEvents: !0,
      bDisabled: s || o,
      children: (0, N.jsx)(`div`, {
        ref: t,
        className: yo,
        ...c,
        "data-keepcontrols": !0,
        children: a,
      }),
    });
  });
function es(e) {
  let { player: t } = e,
    [n, r] = po(t),
    i = $n(n, !1),
    a = $n(r, !1);
  return (0, N.jsxs)(`div`, {
    className: bo,
    children: [
      (0, N.jsx)(`span`, { children: i }),
      (0, N.jsx)(`span`, { className: xo, children: `/` }),
      (0, N.jsx)(`span`, { children: a }),
    ],
  });
}
function ts(e) {
  let t = ja(),
    n = Ma(t, `theater`);
  if (!t || !t.bSupportsTheater) return null;
  P.use(R.Ready());
  let r = t.strMode == `theater`,
    i = r ? (0, N.jsx)(ht, {}) : (0, N.jsx)(_t, {}),
    a = R.Localize(
      r
        ? `#TrailerPlayer_ExitTheater_Tooltip`
        : `#TrailerPlayer_EnterTheater_Tooltip`,
    );
  return (0, N.jsx)($o, { onActivate: n, tooltip: a, children: i });
}
function ns(e) {
  let t = ja(),
    n = Ma(t, `fullscreen`);
  if (!t || !t.bSupportsFullscreen) return null;
  P.use(R.Ready());
  let r = t.strMode == `fullscreen`,
    i = r ? (0, N.jsx)(Gn, {}) : (0, N.jsx)(dt, {}),
    a = R.Localize(
      r
        ? `#TrailerPlayer_ExitFullScreen_Tooltip`
        : `#TrailerPlayer_FullScreen_Tooltip`,
    );
  return (0, N.jsx)($o, { onActivate: n, tooltip: a, children: i });
}
function rs(e) {
  let { player: t } = e,
    [n, r] = (0, P.useState)(!1),
    i = (0, P.useCallback)(() => r(!1), [r]),
    a = (0, P.useRef)(null),
    o = Ft(),
    s = (0, P.useCallback)(() => {
      r((e) => !e);
    }, [r]),
    c = j(So, n && `cXAaD-hLPZ0-`);
  return (
    P.use(R.Ready()),
    (0, N.jsxs)(N.Fragment, {
      children: [
        (0, N.jsx)($o, {
          ref: a,
          onActivate: s,
          tooltip: R.Localize(`#TrailerPlayer_Settings_Tooltip`),
          disableTooltip: o,
          children: (0, N.jsx)(Zt, { className: c }),
        }),
        n && (0, N.jsx)(qo, { player: t, refButton: a, onClose: i }),
      ],
    })
  );
}
function is(e) {
  let { player: t } = e,
    [n, r] = (0, P.useState)(!1),
    i = (0, P.useCallback)(() => r(!1), [r]),
    a = (0, P.useRef)(null),
    { bHasCaptions: o, bShowingCaption: s } = vo(t),
    c = (0, P.useCallback)(() => {
      s ? t.DisableCaptions() : r((e) => !e);
    }, [r, t, s]);
  return (
    P.use(R.Ready()),
    o
      ? (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsxs)($o, {
              ref: a,
              onActivate: c,
              tooltip: R.Localize(`#TrailerPlayer_Captions_Tooltip`),
              children: [s && (0, N.jsx)(Nn, {}), !s && (0, N.jsx)(Jn, {})],
            }),
            n && (0, N.jsx)(Xo, { player: t, refButton: a, onClose: i }),
          ],
        })
      : null
  );
}
function as(e) {
  let { player: t, showHoverThumb: n, onTouchSeek: r } = e;
  P.use(R.Ready());
  let i = (0, P.useRef)(null),
    [a, o, s] = po(t),
    [c, l] = us(t, r),
    u = os();
  eo() && (l = null);
  let d = cs(t);
  l || (d = void 0);
  let f = { display: `none` };
  l && ((f.left = l.nTickOffset), (f.display = `block`));
  let p = Hn(a, 0, o, 0, 100),
    m = Hn(s, 0, o, 0, 100),
    h = { width: `${p.toFixed(1)}%` },
    g = { width: `${m.toFixed(1)}%` },
    _ = (e) => {
      e.key === `Home`
        ? (e.preventDefault(), t.Seek(0))
        : e.key === `End` &&
          (e.preventDefault(), t.Seek(t.GetTimelineDuration()));
    },
    v = j(Co, l && `OXlEV5w6w1E-`);
  return (0, N.jsxs)(`div`, {
    ref: u,
    className: v,
    "data-keepcontrols": !!l,
    role: `slider`,
    tabIndex: 0,
    "aria-label": R.Localize(`#TrailerPlayer_Seek_Label`),
    "aria-valuemin": 0,
    "aria-valuemax": Math.round(o),
    "aria-valuenow": Math.round(a),
    "aria-valuetext": `${$n(a, !1)} / ${$n(o, !1)}`,
    onClick: d,
    onKeyDown: _,
    onPointerMove: c.onPointerMove,
    onPointerLeave: c.onPointerLeave,
    onPointerDown: c.onPointerDown,
    onLostPointerCapture: c.onLostPointerCapture,
    children: [
      (0, N.jsxs)(`div`, {
        ref: i,
        className: wo,
        onPointerEnter: c.onPointerEnter,
        children: [
          (0, N.jsx)(`div`, { className: j(To, Eo), style: g }),
          (0, N.jsx)(`div`, { className: j(To, Do), style: h }),
          (0, N.jsx)(`div`, { className: j(Oo), style: f }),
        ],
      }),
      (0, N.jsx)(ss, { refTimeline: i, hoverState: l, showHoverThumb: n }),
    ],
  });
}
function os() {
  return In((e) => {
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
        (e.removeEventListener(`touchstart`, t),
          e.removeEventListener(`touchend`, n));
      }
    );
  }, []);
}
function ss(e) {
  let { refTimeline: t, hoverState: n, showHoverThumb: r } = e,
    i = (0, P.useRef)(null),
    [a, o] = (0, P.useState)({ nHoverLeft: 0, bFitsInParent: !1 });
  if (
    ((0, P.useLayoutEffect)(() => {
      if (!n || !i.current || !t.current) return;
      let e = t.current.getBoundingClientRect(),
        r = i.current.getBoundingClientRect(),
        a = e.right - e.left,
        s = r.right - r.left,
        c = er(n.nTickOffset - s / 2, 0 + Zo, a - s - Zo),
        l = wt(
          i.current.ownerDocument.documentElement,
          i.current,
          `data-trailer-player`,
        ),
        u = !0;
      if (l) {
        let e = l.getBoundingClientRect();
        u = r.top > e.top;
      }
      o((e) =>
        e.nHoverLeft == c && e.bFitsInParent == u
          ? e
          : { nHoverLeft: c, bFitsInParent: u },
      );
    }, [n, i, t, o]),
    !n)
  )
    return null;
  let s = {
      left: a.nHoverLeft,
      visibility: a.bFitsInParent ? `visible` : `hidden`,
    },
    c,
    l = r ? n.thumbnail : null;
  if (l) {
    let e = Qo / l.nThumbnailHeight;
    c = {
      width: `${l.nThumbnailWidth * e}px`,
      height: `${l.nThumbnailHeight * e}px`,
      backgroundImage: `url(${l.strTileURL})`,
      backgroundPosition: `-${l.x * e}px -${l.y * e}px`,
      backgroundSize: `${l.nImageWidth * e}px ${l.nImageHeight * e}px`,
      backgroundRepeat: `no-repeat`,
    };
  }
  return (0, N.jsxs)(`div`, {
    ref: i,
    style: s,
    className: ko,
    children: [
      !!l && (0, N.jsx)(`div`, { style: c, className: `nCXGrQlbkbg-` }),
      (0, N.jsx)(`span`, {
        className: Ao,
        children: rt(n.nPlaybackSeconds, !0),
      }),
    ],
  });
}
function cs(e) {
  return (0, P.useCallback)(
    (t) => {
      let n = t.currentTarget.getBoundingClientRect(),
        r = (t.pageX - n.left) / (n.right - n.left);
      (e.Seek(r * e.GetTimelineDuration()),
        t.preventDefault(),
        t.stopPropagation());
    },
    [e],
  );
}
function ls(e, t, n) {
  let r = n - t.left,
    i = t.right - t.left;
  r = er(r, 0, i);
  let a = r / i,
    o = Math.floor(e.GetTimelineDuration() * a),
    s = e.GetThumbnail(o);
  return s ? { nTickOffset: r, nPlaybackSeconds: o, thumbnail: s } : null;
}
function us(e, t) {
  let [n, r] = (0, P.useState)(null),
    i = (0, P.useRef)(null),
    a = (0, P.useRef)(null);
  return [
    {
      onPointerEnter: (0, P.useCallback)(
        (t) => {
          if (t.pointerType != `mouse` && t.pointerType != `pen`) return;
          i.current = t.currentTarget;
          let n = ls(e, i.current.getBoundingClientRect(), t.clientX);
          r(n);
        },
        [i, r, e],
      ),
      onPointerMove: (0, P.useCallback)(
        (n) => {
          let o = i.current;
          if (((o ||= a.current), !o)) return;
          let s = ls(e, o.getBoundingClientRect(), n.clientX);
          (r(s),
            a.current &&
              t &&
              t(
                s
                  ? {
                      thumbnail: s.thumbnail,
                      nPlaybackSeconds: s.nPlaybackSeconds,
                    }
                  : null,
              ));
        },
        [i, a, e, r, t],
      ),
      onPointerLeave: (0, P.useCallback)(
        (e) => {
          i.current && ((i.current = null), r((e) => null));
        },
        [r],
      ),
      onPointerDown: (0, P.useCallback)(
        (n) => {
          ((a.current = n.currentTarget),
            a.current.setPointerCapture(n.pointerId),
            (document.body.style.userSelect = `none`));
          let i = ls(e, a.current.getBoundingClientRect(), n.clientX);
          (r(i),
            t &&
              t(
                i
                  ? {
                      thumbnail: i.thumbnail,
                      nPlaybackSeconds: i.nPlaybackSeconds,
                    }
                  : null,
              ));
        },
        [a, t, e],
      ),
      onLostPointerCapture: (0, P.useCallback)(
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
function ds(e) {
  let { player: t } = e,
    n = mo(t);
  P.use(R.Ready());
  let r = ``;
  return (
    n == mt.UnsupportedMediaType
      ? (r = R.Localize(`#TrailerPlayer_Error_UnsupportedCodec`))
      : n != mt.Invalid && (r = R.Localize(`#TrailerPlayer_Error_Playback`)),
    r
      ? (0, N.jsx)(`div`, {
          className: jo,
          children: (0, N.jsx)(`span`, { children: r }),
        })
      : null
  );
}
function fs(e) {
  let { player: t } = e,
    [n, r, i, a] = fo(t);
  P.use(R.Ready());
  let o = Ft(),
    s = n ? (0, N.jsx)(Et, {}) : (0, N.jsx)(Nt, {}),
    c = R.Localize(
      n ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
    );
  return (0, N.jsx)($o, {
    onActivate: a,
    tooltip: c,
    disableTooltip: o,
    children: s,
  });
}
function ps(e) {
  let { player: t } = e,
    n = I(t);
  P.use(R.Ready());
  let r = n ? (0, N.jsx)(ft, {}) : (0, N.jsx)(pt, {}),
    i = R.Localize(
      n ? `#TrailerPlayer_Play_Tooltip` : `#TrailerPlayer_Pause_Tooltip`,
    ),
    a = ho(t);
  return (0, N.jsx)($o, { onActivate: a, tooltip: i, children: r });
}
function ms(e) {
  let { category: t, title: n } = e,
    r = Lo(t);
  return (0, N.jsxs)(`div`, {
    className: Mo,
    children: [
      (0, N.jsx)(`span`, { className: No, children: r }),
      (0, N.jsx)(`span`, { className: Po }),
      (0, N.jsx)(`span`, { className: Fo, children: n }),
    ],
  });
}
function hs(e, t, n) {
  let r = _o(t),
    [i, a] = (0, P.useState)(``),
    o = (0, P.useRef)(0);
  ((0, P.useEffect)(() => {
    r &&
      !n &&
      i == `` &&
      (a(`active`), (o.current = window.setTimeout(() => a(`complete`), 4e3)));
  }, [r, n, i, o, a]),
    (0, P.useEffect)(() => {
      n && (a(`complete`), window.clearTimeout(o.current));
    }, [n]),
    (0, P.useEffect)(() => () => window.clearTimeout(o.current), []));
  let s = (0, P.useRef)(!1);
  return (
    i == `complete` && !n && (s.current = !0),
    e == `once` && s.current ? !1 : i == `active` || n
  );
}
var gs = 200,
  _s = 5e3;
function vs(e) {
  let { player: t, category: n, title: r, focus: i } = e,
    a = (0, P.useRef)(null),
    o = (0, P.useRef)(null),
    [s, c] = no(t, !1),
    [l, u] = (0, P.useState)(!1),
    d = $a(l, u, a);
  s ||= l;
  let f = ys(t),
    p = Mt(!!i),
    m = j(Fa, s && `YnJEGhfB0wI-`);
  return (0, N.jsx)(Za.Provider, {
    value: d,
    children: (0, N.jsxs)(`div`, {
      ref: p,
      className: m,
      ...c,
      onKeyDown: f,
      tabIndex: 0,
      children: [
        (0, N.jsxs)(`div`, {
          className: Ia,
          children: [
            (0, N.jsx)(Ss, { player: t, enabled: s && !l }),
            (0, N.jsx)(ws, {}),
            (0, N.jsxs)(Ka, {
              ref: o,
              className: za,
              children: [
                (0, N.jsx)(as, { player: t, showHoverThumb: !0 }),
                (0, N.jsxs)(`div`, {
                  className: Ba,
                  children: [
                    (0, N.jsxs)(`div`, {
                      className: Va,
                      children: [
                        (0, N.jsx)(ps, { player: t }),
                        (0, N.jsx)(Ts, { player: t, refControlsHover: o }),
                        (0, N.jsx)(es, { player: t }),
                      ],
                    }),
                    (0, N.jsxs)(`div`, {
                      className: Ha,
                      children: [
                        (0, N.jsx)(is, { player: t }),
                        (0, N.jsx)(rs, { player: t }),
                        (0, N.jsx)(ts, {}),
                        (0, N.jsx)(ns, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, N.jsx)(xs, {
          player: t,
          controlsVisible: s,
          category: n,
          title: r,
        }),
        (0, N.jsx)(`div`, { ref: a, className: Wa }),
      ],
    }),
  });
}
function ys(e) {
  let t = Ma(ja(), `fullscreen`);
  return (0, P.useCallback)(
    (n) => {
      n.repeat ||
        (n.code == `Space`
          ? (e.TogglePlayPause(), n.preventDefault())
          : n.code == `ArrowLeft`
            ? e.SeekRelative(-5)
            : n.code == `ArrowRight`
              ? e.SeekRelative(_s / 1e3)
              : n.key == `f` || n.key == `F`
                ? (t(), n.preventDefault())
                : (n.key == `m` || n.key == `M`) &&
                  (e.SetMute(!e.GetMuted()), n.preventDefault()));
    },
    [e, t],
  );
}
function bs(e, t) {
  let n = (0, P.useRef)(null),
    r = (0, P.useRef)(1),
    i = (0, P.useRef)(0),
    [a, o] = (0, P.useState)([]),
    s = (0, P.useCallback)(
      (a) => {
        if (a.target != n.current) return;
        let s = e.TogglePlayPauseState(),
          c = r.current++;
        o((e) => [{ nID: c, eState: s }, ...e]);
        let l = () => {
          ((i.current = 0), e.TogglePlayPause());
        };
        a.pointerType == `mouse`
          ? i.current
            ? (window.clearTimeout(i.current), (i.current = 0), t())
            : (i.current = window.setTimeout(l, gs))
          : l();
      },
      [n, i, e, o, t],
    ),
    c = (0, P.useCallback)(
      (e) => {
        o((t) => t.filter((t) => t.nID != e));
      },
      [o],
    );
  return (
    (0, P.useEffect)(
      () => () => {
        (window.clearTimeout(i.current), (i.current = 0));
      },
      [i],
    ),
    { refBackground: n, inputEvents: so(s), clickEvents: a, fnRemoveEvent: c }
  );
}
function xs(e) {
  let { player: t, controlsVisible: n, category: r, title: i } = e,
    a = hs(`once`, t, n);
  if (r == 0 || !i) return null;
  let o = j(Ra, a && `YnJEGhfB0wI-`);
  return (0, N.jsx)(`div`, {
    className: o,
    children: (0, N.jsx)(ms, { category: r, title: i }),
  });
}
function Ss(e) {
  let { player: t, enabled: n } = e,
    {
      refBackground: r,
      inputEvents: i,
      clickEvents: a,
      fnRemoveEvent: o,
    } = bs(t, Ma(ja(), `fullscreen`)),
    s = j(Na, n && `T3UUyZ88ees-`);
  return (0, N.jsx)(`div`, {
    ref: r,
    className: s,
    ...i,
    children: a.map((e) =>
      (0, N.jsx)(Cs, { event: e, removeEvent: o }, `icon_${e.nID}`),
    ),
  });
}
function Cs(e) {
  let { event: t, removeEvent: n } = e,
    r = t.nID,
    i = (0, P.useCallback)(() => {
      n(r);
    }, [r, n]),
    a = null;
  return (
    t.eState == xa.Play
      ? (a = (0, N.jsx)(ft, {}))
      : t.eState == xa.Pause && (a = (0, N.jsx)(pt, {})),
    (0, N.jsx)(`div`, { className: Pa, onAnimationEnd: i, children: a })
  );
}
function ws(e) {
  return (0, N.jsx)(`div`, { className: La });
}
function Ts(e) {
  let { player: t, refControlsHover: n } = e,
    [r, i, a, o] = fo(t),
    [s, c] = Es(n),
    l;
  l =
    r || i === 0
      ? (0, N.jsx)(Et, {})
      : i < 0.3
        ? (0, N.jsx)(Jt, {})
        : i < 0.6
          ? (0, N.jsx)(Rn, {})
          : (0, N.jsx)(Nt, {});
  let u = R.Localize(
    r ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
  );
  return (0, N.jsxs)(`div`, {
    className: Ua,
    onMouseEnter: c,
    "data-keepcontrols": !0,
    children: [
      (0, N.jsx)($o, { onActivate: o, tooltip: u, children: l }),
      s &&
        (0, N.jsx)(`div`, {
          className: `KiYQJsCfGxI-`,
          children: (0, N.jsx)(Kt, {
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
function Es(e) {
  let [t, n] = (0, P.useState)(!1),
    r = (0, P.useCallback)(() => n(!0), [n]);
  return (
    rn(e, `mouseleave`, (e) => {
      e.target == e.currentTarget && n(!1);
    }),
    [t, r]
  );
}
var Ds = `WRCisr6uZYw-`,
  Os = `gbdFcNy5G4k-`,
  ks = `lX5nIJvBefY-`,
  As = `iAXbsgjjZHI-`,
  js = `-EEbXf-3XVE-`,
  Ms = `iFREa-vsmpo-`,
  Ns = `AP1io-MKcDs-`,
  Ps = `Bxu-c02i-fA-`,
  Fs = `pYxY-oYjIxc-`,
  Is = `xbX-APAH9aY-`,
  Ls = `RjlRnmjZiYM-`,
  Rs = 3e3,
  zs = 1e3;
function Bs(e) {
  let { player: t, category: n, title: r } = e,
    i = (0, P.useRef)(null),
    [a, o] = Vs(i, t, !1),
    s = (0, P.useRef)(null),
    [c, l] = (0, P.useState)(!1),
    u = $a(c, l, s);
  a ||= c;
  let [d, f] = Ks(t),
    p = j(Os, a && `CjbQpCvOpk4-`),
    m = j(Ms, !!d && `X3KS6LYOx9o-`);
  return (0, N.jsx)(Za.Provider, {
    value: u,
    children: (0, N.jsxs)(`div`, {
      className: Ds,
      ...o,
      children: [
        (0, N.jsxs)(`div`, {
          ref: i,
          className: p,
          children: [
            (0, N.jsx)(Gs, { thumbnail: d }),
            (0, N.jsx)(Ws, {}),
            (0, N.jsx)(`div`, {
              className: m,
              children: (0, N.jsx)(qs, { player: t }),
            }),
            (0, N.jsxs)(`div`, {
              className: Ps,
              children: [
                (0, N.jsx)(as, {
                  player: t,
                  onTouchSeek: f,
                  showHoverThumb: !1,
                }),
                (0, N.jsxs)(`div`, {
                  className: Fs,
                  children: [
                    (0, N.jsx)(`div`, {
                      className: Is,
                      children: (0, N.jsx)(es, { player: t }),
                    }),
                    (0, N.jsxs)(`div`, {
                      className: Ls,
                      children: [
                        (0, N.jsx)(fs, { player: t }),
                        (0, N.jsx)(is, { player: t }),
                        (0, N.jsx)(rs, { player: t }),
                        (0, N.jsx)(ns, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, N.jsx)(Us, {
          player: t,
          controlsVisible: a,
          category: n,
          title: r,
        }),
        (0, N.jsx)(`div`, { ref: s, className: void 0 }),
      ],
    }),
  });
}
function Vs(e, t, n) {
  let [r, i] = Hs(e, t);
  return ((r ||= n), [r, i]);
}
function Hs(e, t) {
  let [n, r] = co(),
    i = (0, P.useRef)(null),
    a = (0, P.useRef)(!0),
    o = I(t);
  return (
    (0, P.useEffect)(() => {
      let e = a.current;
      ((a.current = !1), (!e || o) && r(!0, o ? 0 : zs));
    }, [o, r, a]),
    [
      n,
      {
        onPointerDown: (0, P.useCallback)(
          (e) => {
            i.current = e.target;
          },
          [i],
        ),
        onPointerCancel: (0, P.useCallback)(
          (e) => {
            i.current = null;
          },
          [i],
        ),
        onPointerUp: (0, P.useCallback)(
          (t) => {
            let a = i.current;
            if (((i.current = null), a == null)) return;
            let s = o ? 0 : Rs;
            t.target != a || e.current != a ? r(!0, s) : r(!n, s);
          },
          [r, e, o, n],
        ),
      },
    ]
  );
}
function Us(e) {
  let { player: t, controlsVisible: n, category: r, title: i } = e,
    a = hs(`standard`, t, n);
  if (r == 0 || !i) return null;
  let o = j(js, a && !n && `lwGDx-ob6f4-`, n && `FEfadjF0-XY-`);
  return (0, N.jsx)(`div`, {
    className: o,
    children: (0, N.jsx)(ms, { category: r, title: i }),
  });
}
function Ws(e) {
  return (0, N.jsx)(`div`, { className: ks });
}
function Gs(e) {
  let { thumbnail: t } = e,
    [n, r] = (0, P.useState)(null),
    i = (0, P.useCallback)(
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
  return (0, N.jsx)(`div`, {
    ref: i,
    className: As,
    children: (0, N.jsx)(`div`, { style: a, className: void 0 }),
  });
}
function Ks(e) {
  let [t, n] = (0, P.useState)(null),
    r = (0, P.useRef)(!1),
    i = (0, P.useRef)(null);
  return [
    t,
    P.useCallback(
      (t) => {
        let a = t ? t.thumbnail : null;
        (!e.IsPaused() && a && ((r.current = !0), e.Pause()),
          !a && r.current && (e.Play(), (r.current = !1)),
          i.current && !a && e.Seek(i.current.nPlaybackSeconds),
          (i.current = t),
          n(a));
      },
      [e, n, r],
    ),
  ];
}
function qs(e) {
  let { player: t } = e,
    n = I(t),
    r = so(ho(t)),
    i = n ? (0, N.jsx)(ft, {}) : (0, N.jsx)(pt, {});
  return (0, N.jsx)(`div`, { className: Ns, ...r, children: i });
}
var Js = `_3uW6UUMmrCg-`,
  Ys = `fqgqcMMEHV0-`,
  Xs = `_6koTzpHyyWw-`,
  Zs = `wz7DrfLBweo-`,
  Qs = `qHxUvsFtfPA-`,
  $s = `Mq-yAxjkoj4-`,
  ec = `v15xRo4R128-`,
  tc = `_5mPY672VSPM-`,
  nc = `rlgvACT4pJc-`,
  rc = 3e3,
  ic = 1500;
function ac(e) {
  let { player: t, category: n, title: r } = e,
    [i, a] = oc(t, !1),
    o = I(t),
    s = sc(t, a),
    c = ho(t),
    [l, u, d, f] = fo(t),
    p = (0, P.useCallback)(() => {
      (f(), a());
    }, [f, a]),
    m = (0, P.useCallback)(
      (e) => {
        !t.IsPaused() && e.currentTarget == e.target && t.TogglePlayPause();
      },
      [t],
    ),
    h = (0, P.useRef)(null),
    [g, _] = (0, P.useState)(!1),
    v = $a(g, _, h),
    y = l ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
    b = o ? `#TrailerPlayer_Play_Tooltip` : `#TrailerPlayer_Pause_Tooltip`,
    x = j(Ys, i && `wXx6UBVpmP0-`);
  return (0, N.jsx)(Za.Provider, {
    value: v,
    children: (0, N.jsxs)(on, {
      className: Js,
      focusable: !0,
      onClick: m,
      onOKActionDescription: R.Localize(b),
      onOKButton: c,
      onSecondaryButton: p,
      onSecondaryActionDescription: R.Localize(y),
      onButtonDown: s,
      children: [
        (0, N.jsxs)(`div`, {
          className: x,
          children: [
            (0, N.jsx)(lc, {}),
            (0, N.jsxs)(`div`, {
              className: Qs,
              children: [
                (0, N.jsx)(as, { player: t, showHoverThumb: !1 }),
                (0, N.jsxs)(`div`, {
                  className: $s,
                  children: [
                    (0, N.jsxs)(`div`, {
                      className: ec,
                      children: [
                        (0, N.jsx)(ps, { player: t }),
                        (0, N.jsx)(es, { player: t }),
                      ],
                    }),
                    (0, N.jsx)(`div`, {
                      className: tc,
                      children: (0, N.jsx)(fs, { player: t }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, N.jsx)(cc, {
          player: t,
          controlsVisible: i,
          category: n,
          title: r,
        }),
        (0, N.jsx)(`div`, { ref: h, className: void 0 }),
      ],
    }),
  });
}
function oc(e, t) {
  let [n, r] = co(),
    i = (0, P.useRef)(!0),
    a = I(e);
  return (
    (0, P.useEffect)(() => {
      let e = i.current;
      ((i.current = !1), (!e || a) && r(!0, a ? 0 : ic));
    }, [a, r, i]),
    [
      n,
      (0, P.useCallback)(() => {
        r(!0, rc);
      }, [r]),
    ]
  );
}
function sc(e, t) {
  return (0, P.useCallback)(
    (n) => {
      if (n.detail.button == mn.TRIGGER_LEFT && e) {
        let r = Math.max(0, e.GetPlaybackTime() - 10);
        (e.Seek(r), t(), n.preventDefault(), n.stopPropagation());
      } else if (n.detail.button == mn.TRIGGER_RIGHT && e) {
        let r = Math.min(e.GetTimelineDuration(), e.GetPlaybackTime() + 10);
        (e.Seek(r), t(), n.preventDefault(), n.stopPropagation());
      }
    },
    [e, t],
  );
}
function cc(e) {
  let { player: t, controlsVisible: n, category: r, title: i } = e,
    a = hs(`standard`, t, n);
  if (r == 0 || !i) return null;
  let o = j(Xs, a && `wXx6UBVpmP0-`);
  return (0, N.jsx)(`div`, {
    className: o,
    children: (0, N.jsx)(`div`, {
      className: Zs,
      children: (0, N.jsx)(ms, { category: r, title: i }),
    }),
  });
}
function lc(e) {
  return (0, N.jsx)(`div`, { className: nc });
}
var uc = 500,
  dc = `responsive_menu_ignore_touch`;
function fc(e) {
  return ja()
    ? (0, N.jsx)(P.Suspense, {
        children: (0, N.jsx)(pc, { ...e, localContext: !1 }),
      })
    : (0, N.jsx)(P.Suspense, {
        children: (0, N.jsx)(Aa, {
          iosVideoFallback: !0,
          supportsTheater: !1,
          supportsFullscreen: !0,
          children: (0, N.jsx)(pc, { ...e, localContext: !0 }),
        }),
      });
}
function pc(e) {
  let {
    ref: t,
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
  ((m ||= ``), (h ||= 0));
  let [b, x] = Sa(r, i, a, g, l, u, d);
  (mc(t, x), Ca(x, !!_));
  let [ee, S] = hc(x),
    C = ja(),
    te = v && C ? C.refFullscreen : null,
    ne = Tt(ee, te),
    re = wa(x, !!s),
    ie = re ? void 0 : b,
    ae = {};
  S && ((ae.width = `${S.nWidth}px`), (ae.height = `${S.nHeight}px`));
  let oe = n(() => x.IsBuffering());
  (P.useEffect(() => {
    oe || (c && c());
  }, [oe, c]),
    P.use(R.Ready()));
  let se = j(pa, dc);
  return (0, N.jsxs)(`div`, {
    ref: ne,
    className: se,
    "data-trailer-player": !0,
    children: [
      (0, N.jsx)(`video`, {
        ref: ie,
        style: ae,
        controls: !1,
        playsInline: !0,
        "aria-label": p,
        crossOrigin: `anonymous`,
      }),
      (0, N.jsx)(gc, { player: x, uiMode: f, category: h, title: m, focus: y }),
      (0, N.jsx)(_c, { player: x }),
      !re && (0, N.jsx)(vc, { player: x, screenshot: o }),
      !re && (0, N.jsx)(ds, { player: x }),
    ],
  });
}
function mc(e, t) {
  (0, P.useImperativeHandle)(
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
function hc(e) {
  let t = (0, P.useRef)(null),
    n = (0, P.useRef)(null),
    r = (0, P.useRef)(null),
    i = Bn(),
    a = (0, P.useCallback)(() => {
      let e = n.current,
        a = t.current;
      if (!e || !a) return;
      let [o, s] = jn(a.nWidth, a.nHeight, e.nWidth, e.nHeight);
      ((o = e.nWidth - o < 2 ? e.nWidth : Math.ceil(o)),
        (s = e.nHeight - s < 2 ? e.nHeight : Math.ceil(s)));
      let c = r.current;
      (c && c.nWidth == o && c.nHeight == s) ||
        ((r.current = { nWidth: o, nHeight: s }), i());
    }, [t, n, r, i]);
  go(
    e,
    (0, P.useCallback)(
      (e) => {
        ((t.current = e), a());
      },
      [t, a],
    ),
  );
  let o = (0, P.useCallback)(
    (e) => {
      ((n.current = {
        nWidth: e.contentRect.width,
        nHeight: e.contentRect.height,
      }),
        a());
    },
    [n, a],
  );
  return [Ln(o), r.current];
}
function gc(e) {
  let { player: t, uiMode: n, category: r, title: i, focus: a } = e,
    o = dn(),
    s = Ft();
  return (
    (n && n != `auto`) || (n = Rt() || s ? `touch` : o ? `gamepad` : `desktop`),
    n == `touch`
      ? (0, N.jsx)(Bs, { player: t, category: r, title: i })
      : n == `gamepad`
        ? (0, N.jsx)(ac, { player: t, category: r, title: i })
        : (0, N.jsx)(vs, { player: t, category: r, title: i, focus: a })
  );
}
function _c(e) {
  let { player: t } = e,
    [r, i] = (0, P.useState)(`norender`),
    a = n(() => t.IsBuffering());
  ((0, P.useEffect)(() => {
    if (!a) return;
    let e = window.setTimeout(() => i(`fadein`), 1e3);
    return () => {
      e && window.clearTimeout(e);
    };
  }, [a, i]),
    (0, P.useEffect)(() => {
      if (a) return;
      i(`fadeout`);
      let e = window.setTimeout(() => i(`norender`), 300);
      return () => window.clearTimeout(e);
    }, [a, i]));
  let o = r != `norender`,
    s = j(ma, r == `fadein` && `ZxF0VUYsuGU-`);
  return (0, N.jsx)(`div`, {
    className: s,
    children: o && (0, N.jsx)(Te, { size: `large`, position: `center` }),
  });
}
function vc(e) {
  let { player: t, screenshot: r } = e,
    i = n(() => t.GetUserInputNeeded()),
    a = wn(i, uc),
    [o, s] = (0, P.useState)(!1),
    c = P.useCallback(() => {
      (t.UserInputReceived(), s(!0));
    }, [t]);
  if (
    (P.useEffect(() => {
      if (!o) return;
      let e = setTimeout(() => s(!1), 500);
      return () => clearTimeout(e);
    }, [o]),
    !a)
  )
    return null;
  P.use(R.Ready());
  let l = {};
  return (
    r && (l.backgroundImage = `url('${r}')`),
    (0, N.jsx)(`div`, {
      style: l,
      className: ha,
      role: `button`,
      tabIndex: 0,
      "aria-label": R.Localize(`#TrailerPlayer_Play_Tooltip`),
      onClick: c,
      onKeyDown: (e) => {
        (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), c());
      },
      children: (0, N.jsx)(`div`, {
        className: j(ga, o && `_5fVtqw5G7SE-`),
        children: (0, N.jsx)(ft, {}),
      }),
    })
  );
}
var yc = `v87a6zGhXmo-`,
  bc = `XkrNZp-zaXw-`;
function xc(...e) {
  return e.join(` `);
}
var Sc = `_7OxSOadMubQ-`,
  Cc = `_5tpsR11QFTo-`,
  wc = `_4av218OCtYs-`,
  Tc = `RylL--hTWB0-`,
  Ec = `mGOBKozFlf0-`,
  Dc = `kTZDgZ5dX-8-`,
  Oc = `WDTUiOfZjRM-`,
  kc = `bgTVZST3FaE-`,
  Ac = `B4zxAgrjjQU-`,
  jc = `ZQJlDRLSD2I-`,
  Mc = `NxfxOoNRnJc-`,
  Nc = `_6hGeFUDe5X0-`,
  Pc = `rs5MCL6BI2A-`,
  Fc = `iRWZX4LtE-Q-`,
  Ic = `_5yccD-xlOTc-`;
function Lc(e) {
  let { name: t, trailerCategory: n, trailerDisplay: r, mouseOver: i } = e,
    [a, o] = P.useState(!1);
  if (
    (P.useEffect(() => {
      r != 0 && o(!0);
    }, [r]),
    P.useEffect(() => {
      if (i) {
        o(!0);
        return;
      }
      if (!a) return;
      let e = setTimeout(() => o(!1), 3e3);
      return () => clearTimeout(e);
    }, [a, i]),
    n == null || r == 0)
  )
    return;
  let s = r == 1 ? nr.Localize(`#StoreTrailer_Title_TrailerPreview`) : Lo(n);
  return (0, N.jsx)(`div`, {
    className: j({ [Pc]: !0, [Ic]: a }),
    children: nr.LocalizeReact(
      `#StoreTrailer_Title_Combiner`,
      (0, N.jsx)(`span`, { className: Fc, children: s }),
      t,
    ),
  });
}
function Rc(e) {
  let { id: t, bPopOutTrailerPlayback: n } = e,
    { data: r } = Vt(t),
    i = tt(t),
    { data: a } = D(t),
    [o, s] = (0, P.useState)(!1),
    [c, l] = (0, P.useState)(!1),
    u = On(),
    d = r?.highlights?.filter((e) => !u || e.all_ages),
    f = d && d?.length > 0 ? d[0] : void 0,
    p = P.useCallback(() => {
      f && (n ? l(!0) : s((e) => !e));
    }, [f, n]);
  if (!a)
    return (0, N.jsx)(`div`, {
      className: j(Cc, Sc),
      children: (0, N.jsx)(Te, { size: `medium` }),
    });
  let m = f
    ? (0, N.jsx)(Wc, { trailer: f, bPlayVideo: o, fnTogglePlayTrailer: p })
    : null;
  return !f && !i?.length
    ? null
    : (0, N.jsxs)(`div`, {
        className: j(Cc, Sc),
        children: [
          (0, N.jsx)(zc, {
            elFeaturedInCenter: m,
            trailer: f,
            id: t,
            name: a.name || ``,
          }),
          n
            ? (0, N.jsx)(Vc, { id: t, bShowModal: c, hideModal: () => l(!1) })
            : (0, N.jsx)(Bc, {
                name: a.name || ``,
                trailer: f,
                bPlayVideo: o,
                fnTogglePlayTrailer: p,
                bControls: !0,
              }),
        ],
      });
}
function zc(e) {
  let {
      elFeaturedInCenter: t,
      id: n,
      name: r,
      trailer: i,
      featureElementclassName: a,
      bUseTrailerAsFirstThumb: o,
      bNoScreenShotModals: s,
    } = e,
    [c, l] = P.useState(void 0),
    [u, d] = ye(),
    f = tt(n),
    p = (0, P.useRef)(null),
    [m, h] = (0, P.useState)(0);
  if (!n) return null;
  let g = t || (c !== void 0 && c !== -1) ? c : 0,
    _ = [],
    v = [];
  if (
    (o &&
      i &&
      (_.push(
        (0, N.jsx)(
          Wc,
          {
            trailer: i,
            bPlayVideo: !1,
            fnTogglePlayTrailer: () => {},
            onMouseEnter: () => l(0),
            onMouseLeave: () => {
              let e = p.current;
              e && h(e.currentTime);
            },
          },
          `trail_thumb_`,
        ),
      ),
      v.push(
        (0, N.jsx)(
          Bc,
          {
            ref: p,
            name: r,
            trailer: i,
            bControls: !1,
            bPlayVideo: !0,
            startTime: m,
            fnTogglePlayTrailer: () => {},
          },
          `trail_inline`,
        ),
      )),
    f?.forEach((e, n) => {
      if ((t || n > 0) && _.length < 3) {
        let t = nt(e, `thumb`),
          i = nt(e, `600x338`),
          a = _.length;
        (_.push(
          (0, N.jsx)(
            `div`,
            {
              className: j({ [Oc]: !0, [Dc]: !s }),
              onMouseEnter: () => l(a),
              children: s
                ? (0, N.jsx)(`img`, { src: t, alt: r })
                : (0, N.jsx)(`button`, {
                    type: `button`,
                    className: kc,
                    onClick: () => {
                      let e = [...(f || [])];
                      if (e.length > 0) {
                        for (let t = 0; t < n; ++t) {
                          let t = e.shift();
                          t && e.push(t);
                        }
                        u(e.map((e) => nt(e, `full`)));
                      }
                    },
                    children: (0, N.jsx)(`img`, { src: t, alt: r }),
                  }),
            },
            n + `_small_` + t,
          ),
        ),
          v.push(
            (0, N.jsx)(
              `div`,
              {
                className: Ec,
                children: (0, N.jsx)(`img`, { src: i, alt: r }),
              },
              n + `_big_` + t,
            ),
          ));
      }
    }),
    !t && (!v || v.length == 0))
  )
    return null;
  let y = _.slice(0, 3),
    b = Array.from({ length: Math.max(0, 3 - y.length) });
  return (0, N.jsxs)(N.Fragment, {
    children: [
      d,
      (0, N.jsx)(`div`, {
        className: a || `_4av218OCtYs-`,
        children:
          t && (g === -1 || g === void 0)
            ? (0, N.jsx)(N.Fragment, { children: t })
            : (0, N.jsx)(N.Fragment, { children: g !== void 0 && v[g] }),
      }),
      y.length > 0 &&
        (0, N.jsxs)(`div`, {
          className: `zPYR9--wLLQ-`,
          onMouseLeave: () => l(-1),
          children: [
            y,
            b.map((e, t) =>
              (0, N.jsx)(
                `div`,
                { className: `WDTUiOfZjRM-` },
                `app_${un(n)}_${t}`,
              ),
            ),
          ],
        }),
    ],
  });
}
function Bc(e) {
  let {
    ref: t,
    name: n,
    trailer: r,
    bControls: i,
    bPlayVideo: a,
    fnTogglePlayTrailer: o,
    startTime: s,
  } = e;
  if (
    ((0, P.useEffect)(() => {
      let e = t?.current;
      if (s != null && s > 0 && e) {
        let t = () => {
          e.currentTime = s || 0;
        };
        return (
          e.addEventListener(`loadedmetadata`, t),
          () => {
            e.removeEventListener(`loadedmetadata`, t);
          }
        );
      }
    }, [t, s]),
    !r)
  )
    return null;
  let c = j(Mc, a && `B4zxAgrjjQU-`);
  return (0, N.jsxs)(`div`, {
    className: c,
    onClick: o,
    role: `presentation`,
    children: [
      (0, N.jsx)(Lc, {
        name: n,
        trailerCategory: r.trailer_category,
        trailerDisplay: 1,
        mouseOver: !1,
      }),
      !!(a && r.microtrailer) &&
        (0, N.jsx)(`video`, {
          className: `YL-tCU7ggsU-`,
          ref: t,
          controls: i,
          autoPlay: !0,
          loop: !0,
          muted: !0,
          poster: s != null && s > 0 ? void 0 : r.screenshot_full,
          children: r.microtrailer?.map((e) =>
            M.IN_CLIENT && e.type == `video/mp4`
              ? null
              : (0, N.jsx)(
                  `source`,
                  { src: ar(r, e.filename || ``), type: e.type },
                  e.filename,
                ),
          ),
        }),
      i &&
        (0, N.jsx)(`button`, {
          type: `button`,
          className: `wrm1TrwYv0M-`,
          "aria-label": O(`#Button_Close`),
          children: (0, N.jsx)(Dn, {}),
        }),
    ],
  });
}
function Vc(e) {
  return e.bShowModal ? (0, N.jsx)(Hc, { ...e }) : null;
}
function Hc(e) {
  let { id: t, bShowModal: n, trailerBaseID: r, hideModal: i } = e,
    { data: a } = D(t),
    o = ln(t),
    s = (0, P.useMemo)(() => {
      if (o && o.length != 0) {
        if (r) {
          let e = o.find((e) => e.trailer_base_id == r);
          if (e) return e;
        }
        return o[0];
      }
    }, [o, r]),
    c = P.useId(),
    l = P.useId(),
    {
      rgDashTrailers: u,
      rgHlsTrailers: d,
      strCaptionManufest: f,
      strScreenshot: p,
    } = (0, P.useMemo)(() => {
      if (!s)
        return {
          rgDashTrailers: [],
          rgHlsTrailers: [],
          strCaptionManufest: ``,
          strScreenshot: ``,
        };
      let { rgDashTrailers: e, rgHlsTrailers: t } = kt(s);
      return {
        rgDashTrailers: e,
        rgHlsTrailers: t,
        strCaptionManufest: Bt(s),
        strScreenshot: Qt(s),
      };
    }, [s]);
  return !s || !s.adaptive_trailers || u.length == 0
    ? null
    : (0, N.jsx)(Lt, {
        active: n,
        children: (0, N.jsxs)(It, {
          "aria-labelledby": xc(c, l),
          bAllowFullSize: !0,
          bOKDisabled: !0,
          closeModal: i,
          children: [
            (0, N.jsx)(`div`, {
              className: Nc,
              children: (0, N.jsx)(fc, {
                dashManifests: u,
                hlsManifest: d[0] || ``,
                screenshot: p,
                altText: s.trailer_name,
                muteWhenAutoplayBlocked: !0,
                captionManifest: f,
              }),
            }),
            (0, N.jsx)(`div`, {
              id: c,
              style: { display: `none` },
              children: a?.name || ``,
            }),
            (0, N.jsx)(`div`, {
              id: l,
              style: { display: `none` },
              children: s.trailer_name,
            }),
          ],
        }),
      });
}
function Uc(e) {
  let { appid: t, trailerBaseID: n, bShowModal: r, hideModal: i } = e,
    a = (0, P.useMemo)(() => ({ appid: t }), [t]);
  return (0, N.jsx)(Vc, {
    id: a,
    trailerBaseID: n,
    bShowModal: r,
    hideModal: i,
  });
}
function Wc(e) {
  let {
    trailer: t,
    fnTogglePlayTrailer: n,
    bPlayVideo: r,
    onMouseEnter: i,
    onMouseLeave: a,
  } = e;
  return (0, N.jsxs)(`div`, {
    className: j({ [Tc]: !r, [Ac]: r, [Oc]: !0 }),
    onClick: n,
    onMouseEnter: i,
    onMouseLeave: a,
    role: `presentation`,
    children: [
      (0, N.jsx)(`img`, { src: Qt(t), alt: t.trailer_name }),
      (0, N.jsx)(`button`, {
        type: `button`,
        className: jc,
        "aria-label": O(`#Playback_Play_Tooltip`),
        children: (0, N.jsx)(Xn, {}),
      }),
    ],
  });
}
var Gc = (function (e) {
  return (
    (e.k_TrailerAsButton = `button`),
    (e.k_TrailerAsPill = `pill`),
    (e.k_TrailerAsFull = `full`),
    (e.k_TrailerAsPoster = `poster`),
    (e.k_TrailerAsMicro = `micro`),
    e
  );
})({});
function Kc(e) {
  let {
      embedStyle: t,
      appid: n,
      color: r,
      bgcolor: i,
      children: a,
      trailerBaseID: o,
      subtitles: s,
    } = e,
    [c, l] = (0, P.useState)(!1),
    u = (0, P.useMemo)(() => ({ appid: n }), [n]);
  switch (t) {
    case `button`:
    case `pill`:
      return (0, N.jsxs)(N.Fragment, {
        children: [
          (0, N.jsxs)(`button`, {
            type: `button`,
            className: j({ [yc]: t == `pill`, [bc]: t == `button` }),
            onClick: () => l(!0),
            style: { color: r, backgroundColor: i },
            children: [(0, N.jsx)(Xn, {}), a || O(`#EventEmail_WatchNow`)],
          }),
          (0, N.jsx)(Vc, {
            id: u,
            bShowModal: c,
            trailerBaseID: o,
            hideModal: () => l(!1),
          }),
        ],
      });
    default:
    case `full`:
      return (0, N.jsx)(qc, { ...e });
  }
}
function qc(e) {
  let { appid: t, trailerBaseID: n } = e,
    r = g(t),
    { data: i } = D(r),
    [a, o] = (0, P.useState)(() =>
      !t || !n ? O(`#TrailerPlayer_ID_NotProvided`) : null,
    ),
    s = ln(r),
    c = (0, P.useMemo)(
      () => (s ? s.find((e) => e.trailer_base_id === n) : null),
      [s, n],
    );
  return (
    (0, P.useEffect)(() => {
      (i?.unvailable_for_country_restriction &&
        o(O(`#TrailerPlayer_CouldNotLoad`, t, n)),
        s &&
          !c &&
          o(O(`#TrailerPlayer_CouldNotLoad`, e.appid, e.trailerBaseID)));
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
        ? (0, N.jsx)(`div`, { className: y, children: a })
        : null
      : c
        ? (0, N.jsx)(Jc, { trailerToPlay: c })
        : (0, N.jsx)(Te, { string: O(`#Loading`), size: `small` })
  );
}
function Jc(e) {
  let { trailerToPlay: t } = e,
    {
      rgDashTrailers: n,
      rgHlsTrailers: r,
      strCaptionManufest: i,
    } = (0, P.useMemo)(() => {
      let { rgDashTrailers: e, rgHlsTrailers: n } = kt(t);
      return { rgDashTrailers: e, rgHlsTrailers: n, strCaptionManufest: Bt(t) };
    }, [t]);
  return n?.length == 0
    ? null
    : (0, N.jsx)(`div`, {
        className: Nc,
        children: (0, N.jsx)(fc, {
          dashManifests: n || [],
          hlsManifest: (r.length > 0 && r?.[0]) || ``,
          screenshot: Qt(t),
          altText: t.trailer_name,
          muteWhenAutoplayBlocked: !0,
          captionManifest: i,
        }),
      });
}
function Yc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Xc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Yc(Object(n), !0).forEach(function (t) {
          V(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Yc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function z(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function Zc(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r));
  }
}
function B(e, t, n) {
  return (
    t && Zc(e.prototype, t),
    n && Zc(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function V(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function H() {
  return (H = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
}
function U(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && $c(e, t));
}
function Qc(e) {
  return (Qc = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function $c(e, t) {
  return ($c = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
}
function el() {
  if (typeof Reflect > `u` || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == `function`) return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function tl(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
  return i;
}
function W(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = tl(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])));
  }
  return i;
}
function G(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function nl(e, t) {
  if (t && (typeof t == `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return G(e);
}
function K(e) {
  var t = el();
  return function () {
    var n,
      r = Qc(e);
    if (t) {
      var i = Qc(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return nl(this, n);
  };
}
function rl(e) {
  return il(e) || al(e) || ol(e) || cl();
}
function il(e) {
  if (Array.isArray(e)) return sl(e);
}
function al(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function ol(e, t) {
  if (e) {
    if (typeof e == `string`) return sl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? sl(e, t)
          : void 0
    );
  }
}
function sl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function cl() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ll(e, t) {
  return ((t = { exports: {} }), e(t, t.exports), t.exports);
}
function ul() {}
function dl() {}
function q(e) {
  return e
    .map(function (e) {
      return !1 === e ? null : e;
    })
    .join(` `)
    .replace(/\s+/g, ` `)
    .trim();
}
function fl(e, t) {
  return ((100 / e) * t) / t;
}
function pl(e, t) {
  return (100 * e) / t;
}
function J(e) {
  return `${e}%`;
}
function ml(e, t, n) {
  if (e === t) return !0;
  var r = Q[Hl(e)],
    i = Q[Hl(t)];
  return !(!r || r !== i) && r(e, t, n);
}
function hl(e) {
  return function (t, n, r) {
    if (!r) return e(t, n, []);
    for (var i, a = r.length; (i = r[--a]);)
      if (i[0] === t && i[1] === n) return !0;
    return e(t, n, r);
  };
}
function gl(e, t, n) {
  var r = e.length;
  if (r !== t.length) return !1;
  for (n.push([e, t]); r--;) if (!ml(e[r], t[r], n)) return !1;
  return !0;
}
function _l(e, t, n) {
  if (typeof e.equal == `function`) return (n.push([e, t]), e.equal(t, n));
  var r = vl(e),
    i = vl(t),
    a = r.length;
  if (a !== i.length) return !1;
  for (r.sort(), i.sort(); a--;) if (r[a] !== i[a]) return !1;
  for (n.push([e, t]), a = r.length; a--;) {
    var o = r[a];
    if (!ml(e[o], t[o], n)) return !1;
  }
  return !0;
}
function vl(e) {
  var t = [];
  for (var n in e) n !== `constructor` && t.push(n);
  return t;
}
function yl(e) {
  return !!e && typeof e == `object`;
}
function bl(e) {
  var t = Object.prototype.toString.call(e);
  return t === `[object RegExp]` || t === `[object Date]` || xl(e);
}
function xl(e) {
  return e.$$typeof === Gl;
}
function Sl(e) {
  return Array.isArray(e) ? [] : {};
}
function Cl(e, t) {
  return !1 !== t.clone && t.isMergeableObject(e) ? jl(Sl(e), e, t) : e;
}
function wl(e, t, n) {
  return e.concat(t).map(function (e) {
    return Cl(e, n);
  });
}
function Tl(e, t) {
  if (!t.customMerge) return jl;
  var n = t.customMerge(e);
  return typeof n == `function` ? n : jl;
}
function El(e) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(e).filter(function (t) {
        return Object.propertyIsEnumerable.call(e, t);
      })
    : [];
}
function Dl(e) {
  return Object.keys(e).concat(El(e));
}
function Ol(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function kl(e, t) {
  return (
    Ol(e, t) &&
    !(
      Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)
    )
  );
}
function Al(e, t, n) {
  var r = {};
  return (
    n.isMergeableObject(e) &&
      Dl(e).forEach(function (t) {
        r[t] = Cl(e[t], n);
      }),
    Dl(t).forEach(function (i) {
      kl(e, i) ||
        (r[i] =
          Ol(e, i) && n.isMergeableObject(t[i])
            ? Tl(i, n)(e[i], t[i], n)
            : Cl(t[i], n));
    }),
    r
  );
}
function jl(e, t, n) {
  (((n ||= {}).arrayMerge = n.arrayMerge || wl),
    (n.isMergeableObject = n.isMergeableObject || Wl),
    (n.cloneUnlessOtherwiseSpecified = Cl));
  var r = Array.isArray(t);
  return r === Array.isArray(e)
    ? r
      ? n.arrayMerge(e, t, n)
      : Al(e, t, n)
    : Cl(t, n);
}
function Y(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : function () {
            return {};
          },
    n = (function (n) {
      function r(e, n) {
        var a;
        return (
          z(this, r),
          (a = i.call(this, e, n)),
          (a.state = t(Xc({}, n.state))),
          (a.updateStateProps = a.updateStateProps.bind(G(a))),
          a
        );
      }
      U(r, n);
      var i = K(r);
      return (
        B(r, [
          {
            key: `componentDidMount`,
            value: function () {
              this.context.subscribe(this.updateStateProps);
            },
          },
          {
            key: `shouldComponentUpdate`,
            value: function (e, t) {
              return !Ul(t, this.state) || !Ul(e, this.props);
            },
          },
          {
            key: `componentWillUnmount`,
            value: function () {
              this.context.unsubscribe(this.updateStateProps);
            },
          },
          {
            key: `updateStateProps`,
            value: function () {
              this.setState(t(Xc({}, this.context.state)));
            },
          },
          {
            key: `render`,
            value: function () {
              var t = this,
                n = this.props,
                r = n.children,
                i = W(n, eu),
                a = Kl(this.state, i, Rl);
              return P.createElement(
                e,
                H(
                  {
                    ref: function (e) {
                      t.instance = e;
                    },
                  },
                  a,
                  {
                    carouselStore: {
                      getStoreState: this.context.getStoreState,
                      masterSpinnerError: this.context.masterSpinnerError,
                      masterSpinnerSuccess: this.context.masterSpinnerSuccess,
                      setStoreState: this.context.setStoreState,
                      subscribeMasterSpinner:
                        this.context.subscribeMasterSpinner,
                      unsubscribeAllMasterSpinner:
                        this.context.unsubscribeAllMasterSpinner,
                      unsubscribeMasterSpinner:
                        this.context.unsubscribeMasterSpinner,
                    },
                  },
                ),
                r,
              );
            },
          },
        ]),
        r
      );
    })(P.Component);
  return (
    V(n, `contextType`, ql),
    V(n, `propTypes`, { children: Z.children }),
    V(n, `defaultProps`, { children: null }),
    n
  );
}
var Ml = `SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`;
dl.resetWarningCache = ul;
var Nl = function () {
    function e(e, t, n, r, i, a) {
      if (a !== Ml) {
        var o = Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
        );
        throw ((o.name = `Invariant Violation`), o);
      }
    }
    function t() {
      return e;
    }
    e.isRequired = e;
    var n = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: dl,
      resetWarningCache: ul,
    };
    return ((n.PropTypes = n), n);
  },
  X = ll(function (e) {
    e.exports = Nl();
  }),
  Pl = `loading`,
  Fl = `success`,
  Il = `error`,
  Z = {
    children: X.oneOfType([X.arrayOf(X.node), X.node]),
    direction: X.oneOf([`forward`, `backward`]),
    height: function (e, t) {
      var n = e[t];
      return e.orientation !== `vertical` ||
        (n !== null && typeof n == `number`)
        ? null
        : Error(
            `Missing required property '${t}' when orientation is vertical.  You must supply a number representing the height in pixels`,
          );
    },
    orientation: X.oneOf([`horizontal`, `vertical`]),
    isBgImage: function (e, t) {
      return !0 === e[t] && e.tag === `img`
        ? Error(
            `HTML img elements should not have a backgroundImage.  Please use ${t} for other block-level HTML tags, like div, a, section, etc...`,
          )
        : null;
    },
  },
  Ll = function (e) {
    var t = e.min,
      n = e.max,
      r = e.x;
    return Math.min(n, Math.max(t, r));
  },
  Rl = {
    arrayMerge: function (e, t) {
      return t;
    },
    clone: !1,
    customMerge: function (e) {
      if (
        e === `$$typeof` ||
        e === `_owner` ||
        e === `_store` ||
        e === `ref` ||
        e === `key`
      )
        return function (e, t) {
          return t;
        };
    },
  },
  zl = { buttonBack: `buttonBack___1mlaL` },
  Bl = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `step`,
    `totalSlides`,
    `visibleSlides`,
    `infinite`,
  ],
  Vl = (function (e) {
    function t(e) {
      var r;
      return (
        z(this, t),
        (r = n.call(this, e)),
        (r.handleOnClick = r.handleOnClick.bind(G(r))),
        r
      );
    }
    U(t, e);
    var n = K(t);
    return (
      B(
        t,
        [
          {
            key: `handleOnClick`,
            value: function (e) {
              var t = this.props,
                n = t.carouselStore,
                r = t.currentSlide,
                i = t.onClick,
                a = t.step,
                o = t.infinite,
                s = t.visibleSlides,
                c = t.totalSlides - s,
                l = Math.max(r - a, 0);
              (o && (l = r === 0 ? c : l),
                n.setStoreState(
                  { currentSlide: l, isPlaying: !1 },
                  i !== null && i.call(this, e),
                ));
            },
          },
          {
            key: `render`,
            value: function () {
              var e = this.props,
                n = (e.carouselStore, e.className),
                r =
                  (e.currentSlide,
                  e.disabled,
                  e.onClick,
                  e.step,
                  e.totalSlides,
                  e.visibleSlides,
                  e.infinite),
                i = W(e, Bl),
                a = q([zl.buttonBack, `carousel__back-button`, n]),
                o = t.setDisabled(
                  this.props.disabled,
                  this.props.currentSlide,
                  r,
                );
              return P.createElement(
                `button`,
                H(
                  {
                    type: `button`,
                    "aria-label": `previous`,
                    className: a,
                    onClick: this.handleOnClick,
                    disabled: o,
                  },
                  i,
                ),
                this.props.children,
              );
            },
          },
        ],
        [
          {
            key: `setDisabled`,
            value: function (e, t, n) {
              return e === null ? t === 0 && !n : e;
            },
          },
        ],
      ),
      t
    );
  })(P.Component);
(V(Vl, `propTypes`, {
  carouselStore: X.object.isRequired,
  children: Z.children.isRequired,
  className: X.string,
  currentSlide: X.number.isRequired,
  disabled: X.bool,
  onClick: X.func,
  step: X.number.isRequired,
  totalSlides: X.number.isRequired,
  visibleSlides: X.number.isRequired,
  infinite: X.bool,
}),
  V(Vl, `defaultProps`, {
    className: null,
    disabled: null,
    onClick: null,
    infinite: !1,
  }));
var Hl = ll(function (e, t) {
  var n = {}.toString,
    r = typeof window < `u` ? window.Node : Function;
  e.exports = t = function (e) {
    var t = typeof e;
    if (t != `object`) return t;
    if (((t = i[n.call(e)]), t == `object`))
      return e instanceof Map ? `map` : e instanceof Set ? `set` : `object`;
    if (t) return t;
    if (e instanceof r)
      switch (e.nodeType) {
        case 1:
          return `element`;
        case 3:
          return `text-node`;
        case 9:
          return `document`;
        case 11:
          return `document-fragment`;
        default:
          return `dom-node`;
      }
  };
  var i = (t.types = {
    "[object Function]": `function`,
    "[object Date]": `date`,
    "[object RegExp]": `regexp`,
    "[object Arguments]": `arguments`,
    "[object Array]": `array`,
    "[object Set]": `set`,
    "[object String]": `string`,
    "[object Null]": `null`,
    "[object Undefined]": `undefined`,
    "[object Number]": `number`,
    "[object Boolean]": `boolean`,
    "[object Object]": `object`,
    "[object Map]": `map`,
    "[object Text]": `text-node`,
    "[object Uint8Array]": `bit-array`,
    "[object Uint16Array]": `bit-array`,
    "[object Uint32Array]": `bit-array`,
    "[object Uint8ClampedArray]": `bit-array`,
    "[object Error]": `error`,
    "[object FormData]": `form-data`,
    "[object File]": `file`,
    "[object Blob]": `blob`,
  });
});
Hl.types;
var Q = {};
((Q.number = function (e, t) {
  return e !== e && t !== t;
}),
  (Q.function = function (e, t, n) {
    return (
      e.toString() === t.toString() &&
      Q.object(e, t, n) &&
      ml(e.prototype, t.prototype)
    );
  }),
  (Q.date = function (e, t) {
    return +e == +t;
  }),
  (Q.regexp = function (e, t) {
    return e.toString() === t.toString();
  }),
  (Q.element = function (e, t) {
    return e.outerHTML === t.outerHTML;
  }),
  (Q.textnode = function (e, t) {
    return e.textContent === t.textContent;
  }),
  (Q.arguments = Q[`bit-array`] = Q.array = hl(gl)),
  (Q.object = hl(_l)));
var Ul = ml,
  Wl = function (e) {
    return yl(e) && !bl(e);
  },
  Gl =
    typeof Symbol == `function` && Symbol.for
      ? Symbol.for(`react.element`)
      : 60103;
jl.all = function (e, t) {
  if (!Array.isArray(e)) throw Error(`first argument should be an array`);
  return e.reduce(function (e, n) {
    return jl(e, n, t);
  }, {});
};
var Kl = jl,
  ql = P.createContext(),
  Jl = function e(t) {
    return (
      Object.freeze(t),
      Object.getOwnPropertyNames(t).forEach(function (n) {
        !t.hasOwnProperty(n) ||
          t[n] === null ||
          (typeof t[n] != `object` && typeof t[n] != `function`) ||
          Object.isFrozen(t[n]) ||
          e(t[n]);
      }),
      t
    );
  },
  Yl = { masterSpinnerFinished: !1 },
  Xl = (function () {
    function e(t) {
      (z(this, e),
        (this.state = Jl(Kl(Yl, t, Rl))),
        (this.subscriptions = []),
        (this.masterSpinnerSubscriptions = {}),
        (this.setStoreState = this.setStoreState.bind(this)),
        (this.getStoreState = this.getStoreState.bind(this)),
        (this.subscribe = this.subscribe.bind(this)),
        (this.unsubscribe = this.unsubscribe.bind(this)),
        (this.updateSubscribers = this.updateSubscribers.bind(this)),
        (this.subscribeMasterSpinner = this.subscribeMasterSpinner.bind(this)),
        (this.unsubscribeMasterSpinner =
          this.unsubscribeMasterSpinner.bind(this)),
        (this.unsubscribeAllMasterSpinner =
          this.unsubscribeAllMasterSpinner.bind(this)),
        (this.masterSpinnerSuccess = this.masterSpinnerSuccess.bind(this)),
        (this.masterSpinnerError = this.masterSpinnerError.bind(this)));
    }
    return (
      B(e, [
        {
          key: `setStoreState`,
          value: function (e, t) {
            ((this.state = Jl(Kl(this.state, e, Rl))),
              this.updateSubscribers(t));
          },
        },
        {
          key: `getStoreState`,
          value: function () {
            return Kl({}, this.state, Rl);
          },
        },
        {
          key: `subscribe`,
          value: function (e) {
            this.subscriptions.push(e);
          },
        },
        {
          key: `unsubscribe`,
          value: function (e) {
            var t = this.subscriptions.indexOf(e);
            t !== -1 && this.subscriptions.splice(t, 1);
          },
        },
        {
          key: `updateSubscribers`,
          value: function (e) {
            (this.subscriptions.forEach(function (e) {
              return e();
            }),
              typeof e == `function` && e(this.getStoreState()));
          },
        },
        {
          key: `subscribeMasterSpinner`,
          value: function (e) {
            Object.keys(this.masterSpinnerSubscriptions).indexOf(e) === -1 &&
              (this.masterSpinnerSubscriptions[e] = {
                success: !1,
                error: !1,
                complete: !1,
              });
          },
        },
        {
          key: `unsubscribeMasterSpinner`,
          value: function (e) {
            return (
              Object.keys(this.masterSpinnerSubscriptions).indexOf(e) !== -1 &&
              (this.setMasterSpinnerFinished(),
              delete this.masterSpinnerSubscriptions[e])
            );
          },
        },
        {
          key: `unsubscribeAllMasterSpinner`,
          value: function () {
            ((this.masterSpinnerSubscriptions = {}),
              this.setMasterSpinnerFinished());
          },
        },
        {
          key: `masterSpinnerSuccess`,
          value: function (e) {
            ((this.masterSpinnerSubscriptions[e].success = !0),
              (this.masterSpinnerSubscriptions[e].complete = !0),
              this.setMasterSpinnerFinished());
          },
        },
        {
          key: `masterSpinnerError`,
          value: function (e) {
            ((this.masterSpinnerSubscriptions[e].error = !0),
              (this.masterSpinnerSubscriptions[e].complete = !0),
              this.setMasterSpinnerFinished());
          },
        },
        {
          key: `setMasterSpinnerFinished`,
          value: function () {
            this.setStoreState({
              masterSpinnerFinished: this.isMasterSpinnerFinished(),
            });
          },
        },
        {
          key: `isMasterSpinnerFinished`,
          value: function () {
            var e = this;
            return (
              Object.keys(this.masterSpinnerSubscriptions).filter(function (t) {
                return !0 !== e.masterSpinnerSubscriptions[t].complete;
              }).length === 0
            );
          },
        },
      ]),
      e
    );
  })(),
  Zl = [
    `children`,
    `className`,
    `currentSlide`,
    `disableAnimation`,
    `disableKeyboard`,
    `hasMasterSpinner`,
    `interval`,
    `isPageScrollLocked`,
    `isPlaying`,
    `lockOnWindowScroll`,
    `naturalSlideHeight`,
    `naturalSlideWidth`,
    `orientation`,
    `playDirection`,
    `step`,
    `dragStep`,
    `tag`,
    `totalSlides`,
    `touchEnabled`,
    `dragEnabled`,
    `visibleSlides`,
    `infinite`,
    `isIntrinsicHeight`,
  ],
  Ql = (function (e) {
    function t(e) {
      var r;
      if (
        (z(this, t),
        (r = n.call(this, e)),
        e.isIntrinsicHeight && e.orientation !== `horizontal`)
      )
        throw Error(
          `isIntrinsicHeight can only be used in "horizontal" orientation. See Readme for more information.`,
        );
      var i = {
        currentSlide: e.currentSlide,
        disableAnimation: e.disableAnimation,
        disableKeyboard: e.disableKeyboard,
        hasMasterSpinner: e.hasMasterSpinner,
        imageErrorCount: 0,
        imageSuccessCount: 0,
        interval: e.interval,
        isPageScrollLocked: e.isPageScrollLocked,
        isPlaying: e.isPlaying,
        lockOnWindowScroll: e.lockOnWindowScroll,
        masterSpinnerThreshold: 0,
        naturalSlideHeight: e.naturalSlideHeight,
        naturalSlideWidth: e.naturalSlideWidth,
        orientation: e.orientation,
        playDirection: e.playDirection,
        privateUnDisableAnimation: !1,
        slideSize: fl(e.totalSlides, e.visibleSlides),
        slideTraySize: pl(e.totalSlides, e.visibleSlides),
        step: e.step,
        dragStep: e.dragStep,
        totalSlides: e.totalSlides,
        touchEnabled: e.touchEnabled,
        dragEnabled: e.dragEnabled,
        visibleSlides: e.visibleSlides,
        infinite: e.infinite,
        isIntrinsicHeight: e.isIntrinsicHeight,
      };
      return ((r.carouselStore = new Xl(i)), r);
    }
    U(t, e);
    var n = K(t);
    return (
      B(t, [
        {
          key: `componentDidUpdate`,
          value: function (e) {
            var t = this,
              n = {};
            ([
              `currentSlide`,
              `disableAnimation`,
              `disableKeyboard`,
              `hasMasterSpinner`,
              `interval`,
              `isPlaying`,
              `naturalSlideHeight`,
              `naturalSlideWidth`,
              `lockOnWindowScroll`,
              `orientation`,
              `playDirection`,
              `step`,
              `dragStep`,
              `totalSlides`,
              `touchEnabled`,
              `dragEnabled`,
              `visibleSlides`,
            ].forEach(function (r) {
              e[r] !== t.props[r] && (n[r] = t.props[r]);
            }),
              this.props.currentSlide !== e.currentSlide &&
                !this.props.disableAnimation &&
                ((n.disableAnimation = !0), (n.privateUnDisableAnimation = !0)),
              (this.props.totalSlides === e.totalSlides &&
                this.props.visibleSlides === e.visibleSlides) ||
                ((n.slideSize = fl(
                  this.props.totalSlides,
                  this.props.visibleSlides,
                )),
                (n.slideTraySize = pl(
                  this.props.totalSlides,
                  this.props.visibleSlides,
                ))),
              this.carouselStore.state.currentSlide >= this.props.totalSlides &&
                (n.currentSlide = Math.max(this.props.totalSlides - 1, 0)),
              Object.keys(n).length > 0 && this.carouselStore.setStoreState(n));
          },
        },
        {
          key: `componentWillUnmount`,
          value: function () {
            this.carouselStore.unsubscribeAllMasterSpinner();
          },
        },
        {
          key: `getStore`,
          value: function () {
            return this.carouselStore;
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t =
                (e.children,
                e.className,
                e.currentSlide,
                e.disableAnimation,
                e.disableKeyboard,
                e.hasMasterSpinner,
                e.interval,
                e.isPageScrollLocked,
                e.isPlaying,
                e.lockOnWindowScroll,
                e.naturalSlideHeight,
                e.naturalSlideWidth,
                e.orientation,
                e.playDirection,
                e.step,
                e.dragStep,
                e.tag),
              n =
                (e.totalSlides,
                e.touchEnabled,
                e.dragEnabled,
                e.visibleSlides,
                e.infinite,
                e.isIntrinsicHeight,
                W(e, Zl)),
              r = q([`carousel`, this.props.className]);
            return P.createElement(
              t,
              H({ className: r }, n),
              P.createElement(
                ql.Provider,
                { value: this.carouselStore },
                this.props.children,
              ),
            );
          },
        },
      ]),
      t
    );
  })(P.Component),
  $l =
    (V(Ql, `propTypes`, {
      children: Z.children.isRequired,
      className: X.string,
      currentSlide: X.number,
      disableAnimation: X.bool,
      disableKeyboard: X.bool,
      hasMasterSpinner: X.bool,
      interval: X.number,
      isPageScrollLocked: X.bool,
      isPlaying: X.bool,
      lockOnWindowScroll: X.bool,
      naturalSlideHeight: X.number.isRequired,
      naturalSlideWidth: X.number.isRequired,
      orientation: Z.orientation,
      playDirection: Z.direction,
      step: X.number,
      dragStep: X.number,
      tag: X.string,
      totalSlides: X.number.isRequired,
      touchEnabled: X.bool,
      dragEnabled: X.bool,
      visibleSlides: X.number,
      infinite: X.bool,
      isIntrinsicHeight: X.bool,
    }),
    V(Ql, `defaultProps`, {
      className: null,
      currentSlide: 0,
      disableAnimation: !1,
      disableKeyboard: !1,
      hasMasterSpinner: !1,
      interval: 5e3,
      isPageScrollLocked: !1,
      isPlaying: !1,
      lockOnWindowScroll: !1,
      orientation: `horizontal`,
      playDirection: `forward`,
      step: 1,
      dragStep: 1,
      tag: `div`,
      touchEnabled: !0,
      dragEnabled: !0,
      visibleSlides: 1,
      infinite: !1,
      isIntrinsicHeight: !1,
    }),
    Ql);
ql.Consumer;
var eu = [`children`],
  tu = Y(Vl, function (e) {
    return {
      currentSlide: e.currentSlide,
      step: e.step,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
      infinite: e.infinite,
    };
  }),
  nu = { buttonFirst: `buttonFirst___2rhFr` },
  ru = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `totalSlides`,
  ],
  iu = (function (e) {
    function t() {
      var e;
      return (
        z(this, t),
        (e = n.call(this)),
        (e.handleOnClick = e.handleOnClick.bind(G(e))),
        e
      );
    }
    U(t, e);
    var n = K(t);
    return (
      B(t, [
        {
          key: `handleOnClick`,
          value: function (e) {
            var t = this.props,
              n = t.carouselStore,
              r = t.onClick;
            n.setStoreState(
              { currentSlide: 0, isPlaying: !1 },
              r !== null && r.call(this, e),
            );
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = (e.carouselStore, e.className),
              n = e.currentSlide,
              r = e.disabled,
              i = (e.onClick, e.totalSlides, W(e, ru)),
              a = q([nu.buttonFirst, `carousel__first-button`, t]),
              o = r === null ? n === 0 : r;
            return P.createElement(
              `button`,
              H(
                {
                  type: `button`,
                  "aria-label": `first`,
                  className: a,
                  onClick: this.handleOnClick,
                  disabled: o,
                },
                i,
              ),
              this.props.children,
            );
          },
        },
      ]),
      t
    );
  })(P.Component);
Y(
  (V(iu, `propTypes`, {
    carouselStore: X.object.isRequired,
    children: Z.children.isRequired,
    className: X.string,
    currentSlide: X.number.isRequired,
    disabled: X.bool,
    onClick: X.func,
    totalSlides: X.number.isRequired,
  }),
  V(iu, `defaultProps`, { className: null, disabled: null, onClick: null }),
  iu),
  function (e) {
    return { currentSlide: e.currentSlide, totalSlides: e.totalSlides };
  },
);
var au = { buttonLast: `buttonLast___2yuh0` },
  ou = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `totalSlides`,
    `visibleSlides`,
  ],
  su = (function (e) {
    function t() {
      var e;
      return (
        z(this, t),
        (e = n.call(this)),
        (e.handleOnClick = e.handleOnClick.bind(G(e))),
        e
      );
    }
    U(t, e);
    var n = K(t);
    return (
      B(t, [
        {
          key: `handleOnClick`,
          value: function (e) {
            var t = this.props,
              n = t.carouselStore,
              r = t.onClick,
              i = t.totalSlides,
              a = t.visibleSlides;
            n.setStoreState(
              { currentSlide: i - a, isPlaying: !1 },
              r !== null && r.call(this, e),
            );
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = (e.carouselStore, e.className),
              n = e.currentSlide,
              r = e.disabled,
              i = (e.onClick, e.totalSlides),
              a = e.visibleSlides,
              o = W(e, ou),
              s = q([au.buttonLast, `carousel__last-button`, t]),
              c = r === null ? n >= i - a : r;
            return P.createElement(
              `button`,
              H(
                {
                  type: `button`,
                  "aria-label": `last`,
                  className: s,
                  onClick: this.handleOnClick,
                  disabled: c,
                },
                o,
              ),
              this.props.children,
            );
          },
        },
      ]),
      t
    );
  })(P.Component);
Y(
  (V(su, `propTypes`, {
    carouselStore: X.object.isRequired,
    children: Z.children.isRequired,
    className: X.string,
    currentSlide: X.number.isRequired,
    disabled: X.bool,
    onClick: X.func,
    totalSlides: X.number.isRequired,
    visibleSlides: X.number.isRequired,
  }),
  V(su, `defaultProps`, { className: null, disabled: null, onClick: null }),
  su),
  function (e) {
    return {
      currentSlide: e.currentSlide,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
    };
  },
);
var cu = { buttonNext: `buttonNext___2mOCa` },
  lu = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `step`,
    `totalSlides`,
    `visibleSlides`,
    `infinite`,
  ],
  uu = (function (e) {
    function t(e) {
      var r;
      return (
        z(this, t),
        (r = n.call(this, e)),
        (r.handleOnClick = r.handleOnClick.bind(G(r))),
        r
      );
    }
    U(t, e);
    var n = K(t);
    return (
      B(
        t,
        [
          {
            key: `handleOnClick`,
            value: function (e) {
              var t = this.props,
                n = t.currentSlide,
                r = t.onClick,
                i = t.step,
                a = t.carouselStore,
                o = t.infinite,
                s = t.totalSlides - t.visibleSlides,
                c = i + n,
                l = Math.min(c, s);
              (o && (l = s === n ? 0 : l),
                a.setStoreState(
                  { currentSlide: l, isPlaying: !1 },
                  r !== null && r.call(this, e),
                ));
            },
          },
          {
            key: `render`,
            value: function () {
              var e = this.props,
                n = (e.carouselStore, e.className),
                r = e.currentSlide,
                i = e.disabled,
                a = (e.onClick, e.step, e.totalSlides),
                o = e.visibleSlides,
                s = e.infinite,
                c = W(e, lu),
                l = q([cu.buttonNext, `carousel__next-button`, n]),
                u = t.setDisabled(i, r, o, a, s);
              return P.createElement(
                `button`,
                H(
                  {
                    type: `button`,
                    "aria-label": `next`,
                    className: l,
                    onClick: this.handleOnClick,
                    disabled: u,
                  },
                  c,
                ),
                this.props.children,
              );
            },
          },
        ],
        [
          {
            key: `setDisabled`,
            value: function (e, t, n, r, i) {
              return e === null ? t >= r - n && !i : e;
            },
          },
        ],
      ),
      t
    );
  })(P.PureComponent),
  du = Y(
    (V(uu, `propTypes`, {
      carouselStore: X.object.isRequired,
      children: Z.children.isRequired,
      className: X.string,
      currentSlide: X.number.isRequired,
      disabled: X.bool,
      onClick: X.func,
      step: X.number.isRequired,
      totalSlides: X.number.isRequired,
      visibleSlides: X.number.isRequired,
      infinite: X.bool,
    }),
    V(uu, `defaultProps`, {
      className: null,
      disabled: null,
      onClick: null,
      infinite: !1,
    }),
    uu),
    function (e) {
      return {
        currentSlide: e.currentSlide,
        step: e.step,
        totalSlides: e.totalSlides,
        visibleSlides: e.visibleSlides,
        infinite: e.infinite,
      };
    },
  ),
  fu = { buttonNext: `buttonNext___3Lm3s` },
  pu = [
    `carouselStore`,
    `children`,
    `childrenPaused`,
    `childrenPlaying`,
    `className`,
    `isPlaying`,
    `onClick`,
  ],
  mu = (function (e) {
    function t(e) {
      var r;
      return (
        z(this, t),
        (r = n.call(this, e)),
        (r.handleOnClick = r.handleOnClick.bind(G(r))),
        r
      );
    }
    U(t, e);
    var n = K(t);
    return (
      B(t, [
        {
          key: `handleOnClick`,
          value: function (e) {
            var t = this.props.onClick;
            this.props.carouselStore.setStoreState(
              { isPlaying: !this.props.isPlaying },
              t !== null && t.call(this, e),
            );
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = (e.carouselStore, e.children, e.childrenPaused),
              n = e.childrenPlaying,
              r = e.className,
              i = e.isPlaying,
              a = (e.onClick, W(e, pu)),
              o = q([fu.buttonNext, `carousel__play-button`, r]);
            return P.createElement(
              `button`,
              H(
                {
                  type: `button`,
                  "aria-label": `play`,
                  className: o,
                  onClick: this.handleOnClick,
                },
                a,
              ),
              i && n,
              !i && t,
              this.props.children,
            );
          },
        },
      ]),
      t
    );
  })(P.PureComponent);
Y(
  (V(mu, `propTypes`, {
    carouselStore: X.object.isRequired,
    children: X.node,
    childrenPaused: X.node,
    childrenPlaying: X.node,
    className: X.string,
    isPlaying: X.bool.isRequired,
    onClick: X.func,
  }),
  V(mu, `defaultProps`, {
    children: null,
    childrenPaused: null,
    childrenPlaying: null,
    className: null,
    onClick: null,
  }),
  mu),
  function (e) {
    return { isPlaying: e.isPlaying };
  },
);
var hu = { dot: `dot___3c3SI` },
  gu = [
    `carouselStore`,
    `children`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `selected`,
    `slide`,
    `totalSlides`,
    `visibleSlides`,
  ],
  _u = (function (e) {
    function t(e) {
      var r;
      return (
        z(this, t),
        (r = n.call(this, e)),
        (r.handleOnClick = r.handleOnClick.bind(G(r))),
        r
      );
    }
    U(t, e);
    var n = K(t);
    return (
      B(t, [
        {
          key: `handleOnClick`,
          value: function (e) {
            var t = this.props,
              n = t.carouselStore,
              r = t.onClick,
              i = t.slide,
              a = t.totalSlides,
              o = t.visibleSlides,
              s = i >= a - o ? a - o : i;
            n.setStoreState(
              { currentSlide: s, isPlaying: !1 },
              r !== null && r.call(this, e),
            );
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = (e.carouselStore, e.children, e.className),
              n = e.currentSlide,
              r = e.disabled,
              i = (e.onClick, e.selected),
              a = e.slide,
              o = (e.totalSlides, e.visibleSlides),
              s = W(e, gu),
              c = a >= n && a < n + o,
              l = typeof i == `boolean` ? i : c,
              u = typeof r == `boolean` ? r : !0 === c,
              d = q([
                hu.dot,
                l && hu.dotSelected,
                `carousel__dot`,
                `carousel__dot--${a}`,
                l && `carousel__dot--selected`,
                t,
              ]);
            return P.createElement(
              `button`,
              H(
                {
                  "aria-label": `slide dot`,
                  type: `button`,
                  onClick: this.handleOnClick,
                  className: d,
                  disabled: u,
                },
                s,
              ),
              this.props.children,
            );
          },
        },
      ]),
      t
    );
  })(P.Component),
  vu = Y(
    (V(_u, `propTypes`, {
      carouselStore: X.object.isRequired,
      children: Z.children,
      className: X.string,
      currentSlide: X.number.isRequired,
      disabled: X.bool,
      onClick: X.func,
      selected: X.bool,
      slide: X.number.isRequired,
      totalSlides: X.number.isRequired,
      visibleSlides: X.number.isRequired,
    }),
    V(_u, `defaultProps`, {
      children: null,
      className: null,
      disabled: null,
      onClick: null,
      selected: null,
    }),
    _u),
    function (e) {
      return {
        currentSlide: e.currentSlide,
        totalSlides: e.totalSlides,
        visibleSlides: e.visibleSlides,
      };
    },
  ),
  yu = {},
  bu = [`renderDots`],
  xu = [
    `carouselStore`,
    `children`,
    `className`,
    `currentSlide`,
    `dotNumbers`,
    `totalSlides`,
    `visibleSlides`,
    `disableActiveDots`,
    `showAsSelectedForCurrentSlideOnly`,
    `renderDots`,
  ],
  Su = (function (e) {
    function t() {
      return (z(this, t), n.apply(this, arguments));
    }
    U(t, e);
    var n = K(t);
    return (
      B(t, [
        {
          key: `renderDots`,
          value: function () {
            var e = this.props,
              t = e.currentSlide,
              n = e.totalSlides,
              r = e.visibleSlides,
              i = e.disableActiveDots,
              a = e.showAsSelectedForCurrentSlideOnly,
              o = e.renderDots;
            if (o) {
              var s = this.props;
              return (s.renderDots, o(W(s, bu)));
            }
            for (var c = [], l = 0; l < n; l += 1) {
              var u = l >= t && l < t + r,
                d = a ? l === t : u,
                f = l >= n - r ? n - r : l;
              c.push(
                P.createElement(
                  vu,
                  { key: l, slide: f, selected: d, disabled: !!i && d },
                  P.createElement(
                    `span`,
                    { className: q[`carousel__dot-group-dot`] },
                    this.props.dotNumbers && l + 1,
                  ),
                ),
              );
            }
            return c;
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = (e.carouselStore, e.children),
              n = e.className,
              r =
                (e.currentSlide,
                e.dotNumbers,
                e.totalSlides,
                e.visibleSlides,
                e.disableActiveDots,
                e.showAsSelectedForCurrentSlideOnly,
                e.renderDots,
                W(e, xu)),
              i = q([yu.DotGroup, `carousel__dot-group`, n]);
            return P.createElement(
              `div`,
              H({ className: i }, r),
              this.renderDots(),
              t,
            );
          },
        },
      ]),
      t
    );
  })(P.Component);
Y(
  (V(Su, `propTypes`, {
    children: Z.children,
    className: X.string,
    currentSlide: X.number.isRequired,
    carouselStore: X.object.isRequired,
    totalSlides: X.number.isRequired,
    visibleSlides: X.number.isRequired,
    dotNumbers: X.bool,
    disableActiveDots: X.bool,
    showAsSelectedForCurrentSlideOnly: X.bool,
    renderDots: X.func,
  }),
  V(Su, `defaultProps`, {
    children: null,
    className: null,
    dotNumbers: !1,
    disableActiveDots: !0,
    showAsSelectedForCurrentSlideOnly: !1,
    renderDots: null,
  }),
  Su),
  function (e) {
    return {
      currentSlide: e.currentSlide,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
    };
  },
);
var Cu = { image: `image___xtQGH` },
  wu = [`src`, `alt`],
  Tu = [
    `carouselStore`,
    `children`,
    `className`,
    `hasMasterSpinner`,
    `isBgImage`,
    `onError`,
    `onLoad`,
    `renderError`,
    `renderLoading`,
    `style`,
    `tag`,
  ],
  Eu = (function (e) {
    function t(e) {
      var r;
      return (
        z(this, t),
        (r = n.call(this, e)),
        (r.state = { imageStatus: Pl }),
        (r.handleImageLoad = r.handleImageLoad.bind(G(r))),
        (r.handleImageError = r.handleImageError.bind(G(r))),
        (r.image = null),
        r
      );
    }
    U(t, e);
    var n = K(t);
    return (
      B(
        t,
        [
          {
            key: `componentDidMount`,
            value: function () {
              (t.subscribeMasterSpinner(this.props), this.initImage());
            },
          },
          {
            key: `componentDidUpdate`,
            value: function (e) {
              e.src !== this.props.src &&
                (t.unsubscribeMasterSpinner(e),
                t.subscribeMasterSpinner(this.props),
                this.initImage());
            },
          },
          {
            key: `componentWillUnmount`,
            value: function () {
              (t.unsubscribeMasterSpinner(this.props),
                this.image.removeEventListener(`load`, this.handleImageLoad),
                this.image.removeEventListener(`error`, this.handleImageError),
                (this.image = null));
            },
          },
          {
            key: `initImage`,
            value: function () {
              if (
                (this.setState({ imageStatus: Pl }),
                (this.image = document.createElement(`img`)),
                this.image.addEventListener(`load`, this.handleImageLoad, !1),
                this.image.addEventListener(`error`, this.handleImageError, !1),
                (this.image.src = this.props.src),
                this.image.readyState || this.image.complete)
              ) {
                var e = this.image.src;
                ((this.image.src = `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==`),
                  (this.image.src = e));
              }
            },
          },
          {
            key: `handleImageLoad`,
            value: function (e) {
              (this.setState({ imageStatus: Fl }),
                this.props.hasMasterSpinner &&
                  this.props.carouselStore.masterSpinnerSuccess(this.props.src),
                this.props.onLoad && this.props.onLoad(e));
            },
          },
          {
            key: `handleImageError`,
            value: function (e) {
              (this.setState({ imageStatus: Il }),
                this.props.hasMasterSpinner &&
                  this.props.carouselStore.masterSpinnerError(this.props.src),
                this.props.onError && this.props.onError(e));
            },
          },
          {
            key: `tempTag`,
            value: function () {
              return this.props.tag === `img` ? `div` : this.props.tag;
            },
          },
          {
            key: `customRender`,
            value: function (e) {
              return typeof this.props[e] == `function`
                ? this.props[e]()
                : this.props.children;
            },
          },
          {
            key: `renderLoading`,
            value: function (e) {
              var t = this.tempTag(),
                n = q([
                  Cu.image,
                  Cu.imageLoading,
                  `carousel__image`,
                  this.props.isBgImage && `carousel__image--with-background`,
                  `carousel__image--loading`,
                  this.props.className,
                ]);
              return P.createElement(
                t,
                H({ className: n }, e),
                this.customRender(`renderLoading`),
              );
            },
          },
          {
            key: `renderError`,
            value: function (e) {
              var t = this.tempTag(),
                n = q([
                  Cu.image,
                  Cu.imageError,
                  `carousel__image`,
                  this.props.isBgImage && `carousel__image--with-background`,
                  `carousel__image--error`,
                  this.props.className,
                ]);
              return P.createElement(
                t,
                H({ className: n }, e),
                this.customRender(`renderError`),
              );
            },
          },
          {
            key: `renderSuccess`,
            value: function (e) {
              var t = this.props,
                n = t.style,
                r = t.tag,
                i = q([
                  Cu.image,
                  `carousel__image`,
                  this.props.isBgImage && `carousel__image--with-background`,
                  `carousel__image--success`,
                  this.props.className,
                ]),
                a = H({}, n),
                o = e;
              if (r !== `img`) {
                var s = e.src;
                (e.alt,
                  (o = W(e, wu)),
                  (a = H({}, n, {
                    backgroundImage: `url("${s}")`,
                    backgroundSize: `cover`,
                  })));
              }
              return P.createElement(
                r,
                H({ className: i, style: a }, o),
                this.props.children,
              );
            },
          },
          {
            key: `render`,
            value: function () {
              var e = this.props,
                t =
                  (e.carouselStore,
                  e.children,
                  e.className,
                  e.hasMasterSpinner,
                  e.isBgImage,
                  e.onError,
                  e.onLoad,
                  e.renderError,
                  e.renderLoading,
                  e.style,
                  e.tag,
                  W(e, Tu));
              switch (this.state.imageStatus) {
                case Pl:
                  return this.renderLoading(t);
                case Fl:
                  return this.renderSuccess(t);
                case Il:
                  return this.renderError(t);
                default:
                  throw Error(`unknown value for this.state.imageStatus`);
              }
            },
          },
        ],
        [
          {
            key: `subscribeMasterSpinner`,
            value: function (e) {
              e.hasMasterSpinner &&
                e.carouselStore.subscribeMasterSpinner(e.src);
            },
          },
          {
            key: `unsubscribeMasterSpinner`,
            value: function (e) {
              e.hasMasterSpinner &&
                e.carouselStore.unsubscribeMasterSpinner(e.src);
            },
          },
        ],
      ),
      t
    );
  })(P.Component);
(V(Eu, `propTypes`, {
  alt: X.string,
  carouselStore: X.object.isRequired,
  children: Z.children,
  className: X.string,
  hasMasterSpinner: X.bool.isRequired,
  isBgImage: Z.isBgImage,
  onError: X.func,
  onLoad: X.func,
  renderError: X.func,
  renderLoading: X.func,
  src: X.string.isRequired,
  style: X.object,
  tag: X.string,
}),
  V(Eu, `defaultProps`, {
    alt: ``,
    children: null,
    className: null,
    isBgImage: !1,
    onError: null,
    onLoad: null,
    renderError: null,
    renderLoading: null,
    style: null,
    tag: `img`,
  }));
var Du = Y(Eu, function (e) {
    return { hasMasterSpinner: e.hasMasterSpinner, orientation: e.orientation };
  }),
  Ou = { spinner: `spinner___27VUp`, spin: `spin___S3UuE` },
  ku = [`className`],
  Au = (function (e) {
    function t() {
      return (z(this, t), n.apply(this, arguments));
    }
    U(t, e);
    var n = K(t);
    return (
      B(t, [
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = e.className,
              n = W(e, ku),
              r = q([Ou.spinner, `carousel__spinner`, t]);
            return P.createElement(`div`, H({ className: r }, n));
          },
        },
      ]),
      t
    );
  })(P.PureComponent),
  ju =
    (V(Au, `propTypes`, { className: X.string }),
    V(Au, `defaultProps`, { className: null }),
    Au),
  Mu = {
    container: `container___2O72F`,
    overlay: `overlay___IV4qY`,
    hover: `hover___MYy31`,
    zoom: `zoom___3kqYk`,
    loading: `loading___1pvNI`,
    imageLoadingSpinnerContainer: `imageLoadingSpinnerContainer___3UIPD`,
  },
  Nu = [
    `alt`,
    `bgImageProps`,
    `bgImageTag`,
    `carouselStore`,
    `className`,
    `imageClassName`,
    `overlayClassName`,
    `isPinchZoomEnabled`,
    `spinner`,
    `src`,
    `srcZoomed`,
    `tag`,
  ],
  Pu,
  Fu = 2,
  Iu = 3;
Y(
  ((Pu = (function (e) {
    function t(e) {
      var r;
      return (
        z(this, t),
        (r = n.call(this, e)),
        (r.state = {
          isImageLoading: !0,
          isImageLoadingError: !0,
          isHovering: !1,
          isZooming: !1,
          x: null,
          y: null,
          scale: 1,
        }),
        (r.tpCache = {}),
        (r.handleImageComplete = r.handleImageComplete.bind(G(r))),
        (r.handleImageLoadError = r.handleImageLoadError.bind(G(r))),
        (r.handleOnMouseMove = r.handleOnMouseMove.bind(G(r))),
        (r.handleOnMouseOut = r.handleOnMouseOut.bind(G(r))),
        (r.handleOnMouseOver = r.handleOnMouseOver.bind(G(r))),
        (r.handleOnTouchEnd = r.handleOnTouchEnd.bind(G(r))),
        (r.handleOnTouchMove = r.handleOnTouchMove.bind(G(r))),
        (r.handleOnTouchStart = r.handleOnTouchStart.bind(G(r))),
        r
      );
    }
    U(t, e);
    var n = K(t);
    return (
      B(
        t,
        [
          {
            key: `componentDidUpdate`,
            value: function (e, t) {
              (!1 === t.isZooming &&
                !0 === this.state.isZooming &&
                this.props.carouselStore.setStoreState({
                  isPageScrollLocked: !0,
                }),
                !0 === t.isZooming &&
                  !1 === this.state.isZooming &&
                  this.props.carouselStore.setStoreState({
                    isPageScrollLocked: !1,
                  }));
            },
          },
          {
            key: `handleImageComplete`,
            value: function (e) {
              (this.setState({ isImageLoading: !1 }),
                this.props && this.props.onLoad && this.props.onLoad(e));
            },
          },
          {
            key: `handleImageLoadError`,
            value: function (e) {
              (this.setState({ isImageLoadingError: !0, isImageLoading: !1 }),
                this.props && this.props.onError && this.props.onError(e));
            },
          },
          {
            key: `handleOnMouseOver`,
            value: function () {
              this.state.isZooming ||
                this.setState({ isHovering: !0, scale: Fu });
            },
          },
          {
            key: `handleOnMouseOut`,
            value: function () {
              this.state.isZooming ||
                this.setState({ isHovering: !1, scale: 1 });
            },
          },
          {
            key: `handleOnMouseMove`,
            value: function (e) {
              if (!this.state.isZooming) {
                var t = J((e.nativeEvent.offsetX / e.target.offsetWidth) * 100),
                  n = J((e.nativeEvent.offsetY / e.target.offsetHeight) * 100);
                this.setState({ x: t, y: n });
              }
            },
          },
          {
            key: `handleOnTouchStart`,
            value: function (e) {
              var t = this;
              this.props.isPinchZoomEnabled &&
                (rl(e.targetTouches).forEach(function (e) {
                  t.tpCache[e.identifier] = {
                    clientX: e.clientX,
                    clientY: e.clientY,
                  };
                }),
                this.setState(function (e) {
                  return {
                    isZooming: e.isZooming || Object.keys(t.tpCache).length > 1,
                  };
                }));
            },
          },
          {
            key: `handleOnTouchMove`,
            value: function (e) {
              var n = this;
              if (this.state.isZooming) {
                e.persist();
                var r = rl(e.targetTouches)
                  .filter(function (e) {
                    return n.tpCache[e.identifier];
                  })
                  .slice(0, 2);
                if (r.length === 2) {
                  e.stopPropagation();
                  var i = e.target.getBoundingClientRect(),
                    a = r[0].identifier,
                    o = r[1].identifier,
                    s = {
                      x1: this.tpCache[a].clientX,
                      y1: this.tpCache[a].clientY,
                      x2: this.tpCache[o].clientX,
                      y2: this.tpCache[o].clientY,
                    };
                  s.distance = t.distanceBetweenTwoTouches(Xc({}, s));
                  var c = t.midpointBetweenTwoTouches(Xc({}, s));
                  ((s.cx = c.x), (s.cy = c.y));
                  var l = {
                    x1: r[0].clientX,
                    y1: r[0].clientY,
                    x2: r[1].clientX,
                    y2: r[1].clientY,
                  };
                  l.distance = t.distanceBetweenTwoTouches(Xc({}, l));
                  var u = t.midpointBetweenTwoTouches(Xc({}, l));
                  ((l.cx = u.x), (l.cy = u.y));
                  var d = J(
                      Ll({
                        min: 0,
                        max: 100,
                        x: ((l.cx - i.left) / i.width) * 100,
                      }),
                    ),
                    f = J(
                      Ll({
                        min: 0,
                        max: 100,
                        x: ((l.cy - i.top) / i.height) * 100,
                      }),
                    ),
                    p = function (e) {
                      return Ll({
                        min: 1,
                        max: Iu,
                        x: e.scale + (l.distance - s.distance) / 100,
                      });
                    };
                  this.setState(function (e) {
                    return { isZooming: p(e) !== 1, scale: p(e), x: d, y: f };
                  });
                }
              }
            },
          },
          {
            key: `handleOnTouchEnd`,
            value: function (e) {
              var t = this;
              this.props.isPinchZoomEnabled &&
                (rl(e.changedTouches).forEach(function (e) {
                  delete t.tpCache[e.identifier];
                }),
                Object.keys(this.tpCache).length === 0 &&
                  this.setState({ isZooming: !1 }));
            },
          },
          {
            key: `renderLoading`,
            value: function () {
              if (this.state.isImageLoading) {
                var e = this.props.spinner;
                return P.createElement(
                  `div`,
                  {
                    className: q([
                      Mu.imageLoadingSpinnerContainer,
                      `carousel__image-loading-spinner-container`,
                    ]),
                  },
                  e && e(),
                  !e && P.createElement(ju, null),
                );
              }
              return null;
            },
          },
          {
            key: `render`,
            value: function () {
              var e = this.props,
                t = e.alt,
                n = e.bgImageProps,
                r = e.bgImageTag,
                i = (e.carouselStore, e.className),
                a = e.imageClassName,
                o = e.overlayClassName,
                s = (e.isPinchZoomEnabled, e.spinner, e.src),
                c = e.srcZoomed,
                l = e.tag,
                u = W(e, Nu),
                d = q([Mu.container, i]),
                f = q([Mu.image, `carousel__zoom-image`, a]),
                p = q([
                  Mu.overlay,
                  `carousel__zoom-image-overlay`,
                  this.state.isHovering && Mu.hover,
                  this.state.isZooming && Mu.zoom,
                  this.state.isHovering &&
                    `carousel__zoom-image-overlay--hovering`,
                  this.state.isZooming &&
                    `carousel__zoom-image-overlay--zooming`,
                  o,
                ]),
                m = {};
              return (
                (this.state.isHovering || this.state.isZooming) &&
                  ((m.transformOrigin = `${this.state.x} ${this.state.y}`),
                  (m.transform = `scale(${this.state.scale})`)),
                P.createElement(
                  l,
                  H({ className: d }, u),
                  P.createElement(
                    Du,
                    H(
                      {
                        alt: t,
                        className: f,
                        tag: r,
                        src: s,
                        onLoad: this.handleImageComplete,
                        onError: this.handleImageLoadError,
                      },
                      n,
                    ),
                  ),
                  P.createElement(Du, {
                    className: p,
                    tag: `div`,
                    src: c || s,
                    style: m,
                    isBgImage: !0,
                    onFocus: this.handleOnMouseOver,
                    onMouseOver: this.handleOnMouseOver,
                    onBlur: this.handleOnMouseOut,
                    onMouseOut: this.handleOnMouseOut,
                    onMouseMove: this.handleOnMouseMove,
                    onTouchStart: this.handleOnTouchStart,
                    onTouchEnd: this.handleOnTouchEnd,
                    onTouchMove: this.handleOnTouchMove,
                  }),
                  this.renderLoading(),
                )
              );
            },
          },
        ],
        [
          {
            key: `midpointBetweenTwoTouches`,
            value: function (e) {
              var t = e.x1,
                n = e.y1;
              return { x: (t + e.x2) / 2, y: (n + e.y2) / 2 };
            },
          },
          {
            key: `distanceBetweenTwoTouches`,
            value: function (e) {
              var t = e.x1,
                n = e.y1,
                r = e.x2,
                i = e.y2;
              return Math.sqrt((r - t) ** 2 + (i - n) ** 2);
            },
          },
        ],
      ),
      t
    );
  })(P.Component)),
  V(Pu, `propTypes`, {
    alt: X.string,
    bgImageProps: X.object,
    bgImageTag: X.string,
    carouselStore: X.object.isRequired,
    className: X.string,
    imageClassName: X.string,
    overlayClassName: X.string,
    spinner: X.func,
    onLoad: X.func,
    onError: X.func,
    src: X.string.isRequired,
    srcZoomed: X.string,
    tag: X.string,
    isPinchZoomEnabled: X.bool,
  }),
  V(Pu, `defaultProps`, {
    alt: void 0,
    bgImageProps: {},
    bgImageTag: `div`,
    className: null,
    imageClassName: null,
    overlayClassName: null,
    isPinchZoomEnabled: !0,
    spinner: null,
    onLoad: null,
    onError: null,
    srcZoomed: null,
    tag: `div`,
  }),
  Pu),
  function () {
    return {};
  },
);
var Lu = {
    slide: `slide___3-Nqo`,
    slideHorizontal: `slideHorizontal___1NzNV`,
    slideInner: `slideInner___2mfX9`,
    focusRing: `focusRing___1airF`,
  },
  Ru = [
    `ariaLabel`,
    `carouselStore`,
    `children`,
    `className`,
    `classNameHidden`,
    `classNameVisible`,
    `currentSlide`,
    `index`,
    `innerClassName`,
    `innerTag`,
    `naturalSlideHeight`,
    `naturalSlideWidth`,
    `onBlur`,
    `onFocus`,
    `orientation`,
    `slideSize`,
    `style`,
    `tag`,
    `totalSlides`,
    `visibleSlides`,
    `isIntrinsicHeight`,
  ],
  zu = (function (e) {
    function t(e) {
      var r;
      return (
        z(this, t),
        (r = n.call(this, e)),
        (r.handleOnFocus = r.handleOnFocus.bind(G(r))),
        (r.handleOnBlur = r.handleOnBlur.bind(G(r))),
        (r.state = { focused: !1 }),
        r
      );
    }
    U(t, e);
    var n = K(t);
    return (
      B(t, [
        {
          key: `isVisible`,
          value: function () {
            var e = this.props,
              t = e.currentSlide,
              n = e.index,
              r = e.visibleSlides;
            return n >= t && n < t + r;
          },
        },
        {
          key: `handleOnFocus`,
          value: function (e) {
            var t = this,
              n = this.props.onFocus;
            this.setState({ focused: !0 }, function () {
              n !== null && n.call(t, e);
            });
          },
        },
        {
          key: `handleOnBlur`,
          value: function (e) {
            var t = this,
              n = this.props.onBlur;
            this.setState({ focused: !1 }, function () {
              n !== null && n.call(t, e);
            });
          },
        },
        {
          key: `renderFocusRing`,
          value: function () {
            return this.state.focused
              ? P.createElement(`div`, {
                  className: [Lu.focusRing, `carousel__slide-focus-ring`].join(
                    ` `,
                  ),
                })
              : null;
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this,
              t = this.props,
              n = t.ariaLabel,
              r = (t.carouselStore, t.children, t.className),
              i = t.classNameHidden,
              a = t.classNameVisible,
              o = (t.currentSlide, t.index, t.innerClassName),
              s = t.innerTag,
              c = t.naturalSlideHeight,
              l = t.naturalSlideWidth,
              u = (t.onBlur, t.onFocus, t.orientation),
              d = t.slideSize,
              f = t.style,
              p = t.tag,
              m = t.totalSlides,
              h = (t.visibleSlides, t.isIntrinsicHeight),
              g = W(t, Ru),
              _ = {};
            u === `horizontal`
              ? ((_.width = J(d)), (_.paddingBottom = J((100 * c) / (l * m))))
              : ((_.width = J(100)), (_.paddingBottom = J((100 * c) / l)));
            var v = {};
            h &&
              (u === `horizontal` ? (_.height = `unset`) : (_.width = `unset`),
              (_.paddingBottom = `unset`),
              (v.position = `unset`));
            var y = H({}, _, f),
              b = this.isVisible(),
              x = q([
                Lu.slide,
                u === `horizontal` && Lu.slideHorizontal,
                `carousel__slide`,
                this.state.focused && `carousel__slide--focused`,
                b && a,
                b && `carousel__slide--visible`,
                !b && i,
                !b && `carousel__slide--hidden`,
                r,
              ]),
              ee = q([Lu.slideInner, `carousel__inner-slide`, o]);
            return P.createElement(
              p,
              H(
                {
                  ref: function (t) {
                    e.tagRef = t;
                  },
                  "aria-selected": this.isVisible(),
                  "aria-label": n,
                  role: this.props.role,
                  onFocus: this.handleOnFocus,
                  onBlur: this.handleOnBlur,
                  className: x,
                  style: y,
                },
                g,
              ),
              P.createElement(
                s,
                {
                  ref: function (t) {
                    e.innerTagRef = t;
                  },
                  className: ee,
                  style: v,
                },
                this.props.children,
                this.renderFocusRing(),
              ),
            );
          },
        },
      ]),
      t
    );
  })(P.PureComponent),
  Bu = Y(
    (V(zu, `propTypes`, {
      ariaLabel: X.string,
      carouselStore: X.object,
      children: Z.children,
      className: X.string,
      classNameHidden: X.string,
      classNameVisible: X.string,
      currentSlide: X.number.isRequired,
      index: X.number.isRequired,
      innerClassName: X.string,
      innerTag: X.string,
      naturalSlideHeight: X.number.isRequired,
      naturalSlideWidth: X.number.isRequired,
      onBlur: X.func,
      onFocus: X.func,
      orientation: Z.orientation.isRequired,
      slideSize: X.number.isRequired,
      role: X.string,
      style: X.object,
      tag: X.string,
      totalSlides: X.number.isRequired,
      visibleSlides: X.number.isRequired,
      isIntrinsicHeight: X.bool,
    }),
    V(zu, `defaultProps`, {
      ariaLabel: `slide`,
      carouselStore: null,
      children: null,
      className: null,
      classNameHidden: null,
      classNameVisible: null,
      innerClassName: null,
      innerTag: `div`,
      onBlur: null,
      onFocus: null,
      role: `option`,
      style: {},
      tag: `div`,
      isIntrinsicHeight: !1,
    }),
    zu),
    function (e) {
      return {
        currentSlide: e.currentSlide,
        naturalSlideHeight: e.naturalSlideHeight,
        naturalSlideWidth: e.naturalSlideWidth,
        orientation: e.orientation,
        slideSize: e.slideSize,
        totalSlides: e.totalSlides,
        visibleSlides: e.visibleSlides,
        isIntrinsicHeight: e.isIntrinsicHeight,
      };
    },
  ),
  Vu = (function () {
    function e() {
      z(this, e);
    }
    return (
      B(
        e,
        [
          {
            key: `parents`,
            value: function (e, t) {
              return e.parentNode === null
                ? t
                : this.parents(e.parentNode, t.concat([e]));
            },
          },
          {
            key: `scrollParent`,
            value: function (t) {
              for (
                var n = this.parents(t.parentNode, []), r = 0;
                r < n.length;
                r += 1
              )
                if (e.scroll(n[r])) return n[r];
              return document.scrollingElement || document.documentElement;
            },
          },
          {
            key: `getScrollParent`,
            value: function (t) {
              return e.isNodeValid(t) ? this.scrollParent(t) : null;
            },
          },
        ],
        [
          {
            key: `style`,
            value: function (e, t) {
              return getComputedStyle(e, null).getPropertyValue(t);
            },
          },
          {
            key: `overflow`,
            value: function (t) {
              return (
                e.style(t, `overflow`) +
                e.style(t, `overflow-y`) +
                e.style(t, `overflow-x`)
              );
            },
          },
          {
            key: `scroll`,
            value: function (t) {
              return /(auto|scroll)/.test(e.overflow(t));
            },
          },
          {
            key: `isNodeValid`,
            value: function (e) {
              return e instanceof HTMLElement || e instanceof SVGElement;
            },
          },
        ],
      ),
      e
    );
  })(),
  $ = {
    horizontalSlider: `horizontalSlider___281Ls`,
    touchDisabled: `touchDisabled___2qs4y`,
    horizontalSliderTray: `horizontalSliderTray___1L-0W`,
    verticalSlider: `verticalSlider___34ZFD`,
    verticalSliderTray: `verticalSliderTray___267D8`,
    verticalTray: `verticalTray___12Key`,
    verticalSlideTrayWrap: `verticalSlideTrayWrap___2nO7o`,
    sliderTray: `sliderTray___-vHFQ`,
    sliderAnimation: `sliderAnimation___300FY`,
    masterSpinnerContainer: `masterSpinnerContainer___1Z6hB`,
  },
  Hu =
    `ariaLabel.carouselStore.children.className.classNameAnimation.classNameTray.classNameTrayWrap.currentSlide.disableAnimation.disableKeyboard.dragEnabled.hasMasterSpinner.interval.isPageScrollLocked.isPlaying.lockOnWindowScroll.masterSpinnerFinished.moveThreshold.naturalSlideHeight.naturalSlideWidth.onMasterSpinner.orientation.playDirection.privateUnDisableAnimation.slideSize.slideTraySize.spinner.style.totalSlides.touchEnabled.trayProps.trayTag.visibleSlides.isIntrinsicHeight`.split(
      `.`,
    ),
  Uu = [
    `dragStep`,
    `step`,
    `infinite`,
    `preventVerticalScrollOnTouch`,
    `preventingVerticalScroll`,
    `horizontalPixelThreshold`,
    `verticalPixelThreshold`,
  ],
  Wu = [
    `className`,
    `onClickCapture`,
    `onMouseDown`,
    `onTouchCancel`,
    `onTouchEnd`,
    `onTouchMove`,
    `onTouchStart`,
    `ref`,
    `style`,
  ],
  Gu = (function (e) {
    function t(e) {
      var r;
      return (
        z(this, t),
        (r = n.call(this, e)),
        (r.getSliderRef = r.getSliderRef.bind(G(r))),
        (r.handleDocumentScroll = r.handleDocumentScroll.bind(G(r))),
        (r.handleOnClickCapture = r.handleOnClickCapture.bind(G(r))),
        (r.handleOnKeyDown = r.handleOnKeyDown.bind(G(r))),
        (r.handleOnMouseDown = r.handleOnMouseDown.bind(G(r))),
        (r.handleOnMouseMove = r.handleOnMouseMove.bind(G(r))),
        (r.handleOnMouseUp = r.handleOnMouseUp.bind(G(r))),
        (r.handleOnTouchCancel = r.handleOnTouchCancel.bind(G(r))),
        (r.handleOnTouchEnd = r.handleOnTouchEnd.bind(G(r))),
        (r.handleOnTouchMove = r.handleOnTouchMove.bind(G(r))),
        (r.handleOnTouchStart = r.handleOnTouchStart.bind(G(r))),
        (r.playBackward = r.playBackward.bind(G(r))),
        (r.playForward = r.playForward.bind(G(r))),
        (r.callCallback = r.callCallback.bind(G(r))),
        (r.blockWindowScroll = r.blockWindowScroll.bind(G(r))),
        (r.state = {
          cancelNextClick: !1,
          deltaX: 0,
          deltaY: 0,
          isBeingMouseDragged: !1,
          isBeingTouchDragged: !1,
          preventingVerticalScroll: !1,
          startX: 0,
          startY: 0,
        }),
        (r.interval = null),
        (r.isDocumentScrolling = null),
        (r.moveTimer = null),
        (r.originalOverflow = null),
        (r.scrollParent = null),
        (r.scrollStopTimer = null),
        r
      );
    }
    U(t, e);
    var n = K(t);
    return (
      B(
        t,
        [
          {
            key: `componentDidMount`,
            value: function () {
              (this.props.lockOnWindowScroll &&
                window.addEventListener(
                  `scroll`,
                  this.handleDocumentScroll,
                  !1,
                ),
                (this.props.touchEnabled ||
                  this.props.preventVerticalScrollOnTouch) &&
                  window.addEventListener(
                    `touchmove`,
                    this.blockWindowScroll,
                    !1,
                  ),
                document.documentElement.addEventListener(
                  `mouseleave`,
                  this.handleOnMouseUp,
                  !1,
                ),
                document.documentElement.addEventListener(
                  `mousemove`,
                  this.handleOnMouseMove,
                  !1,
                ),
                document.documentElement.addEventListener(
                  `mouseup`,
                  this.handleOnMouseUp,
                  !1,
                ),
                this.props.isPlaying && this.play());
            },
          },
          {
            key: `componentDidUpdate`,
            value: function (e) {
              (!e.isPlaying && this.props.isPlaying && this.play(),
                e.isPlaying && !this.props.isPlaying && this.stop(),
                !e.isPageScrollLocked &&
                  this.props.isPageScrollLocked &&
                  this.lockScroll(),
                e.isPageScrollLocked &&
                  !this.props.isPageScrollLocked &&
                  this.unlockScroll(),
                !1 === e.privateUnDisableAnimation &&
                  !0 === this.props.privateUnDisableAnimation &&
                  this.props.carouselStore.setStoreState({
                    privateUnDisableAnimation: !1,
                    disableAnimation: !1,
                  }));
            },
          },
          {
            key: `componentWillUnmount`,
            value: function () {
              (document.documentElement.removeEventListener(
                `mouseleave`,
                this.handleOnMouseUp,
                !1,
              ),
                document.documentElement.removeEventListener(
                  `mousemove`,
                  this.handleOnMouseMove,
                  !1,
                ),
                document.documentElement.removeEventListener(
                  `mouseup`,
                  this.handleOnMouseUp,
                  !1,
                ),
                window.removeEventListener(
                  `scroll`,
                  this.handleDocumentScroll,
                  !1,
                ),
                window.removeEventListener(
                  `touchmove`,
                  this.blockWindowScroll,
                  !1,
                ),
                this.stop(),
                window.cancelAnimationFrame.call(window, this.moveTimer),
                window.clearTimeout(this.scrollStopTimer),
                (this.isDocumentScrolling = null),
                (this.moveTimer = null),
                (this.scrollStopTimer = null));
            },
          },
          {
            key: `getSliderRef`,
            value: function (e) {
              if (((this.sliderTrayElement = e), e && window)) {
                var t = e.closest(`.carousel`);
                t &&
                  (this.rtl =
                    window
                      .getComputedStyle(t, null)
                      .getPropertyValue(`direction`) === `rtl`);
              }
            },
          },
          {
            key: `fakeOnDragStart`,
            value: function (e) {
              var t = e.screenX,
                n = e.screenY,
                r = e.touchDrag,
                i = r !== void 0 && r,
                a = e.mouseDrag,
                o = a !== void 0 && a;
              (this.props.carouselStore.setStoreState({ isPlaying: !1 }),
                window.cancelAnimationFrame.call(window, this.moveTimer),
                this.props.orientation === `vertical` &&
                  this.props.carouselStore.setStoreState({
                    isPageScrollLocked: !0,
                  }),
                this.setState({
                  isBeingTouchDragged: i,
                  isBeingMouseDragged: o,
                  startX: t,
                  startY: n,
                }));
            },
          },
          {
            key: `fakeOnDragMove`,
            value: function (e, t) {
              var n = this;
              (window.cancelAnimationFrame.call(window, this.moveTimer),
                (this.moveTimer = window.requestAnimationFrame.call(
                  window,
                  function () {
                    n.setState(function (r) {
                      return {
                        deltaX: (e - r.startX) * (n.rtl ? -1 : 1),
                        deltaY: t - r.startY,
                        preventingVerticalScroll:
                          Math.abs(t - r.startY) <=
                            n.props.verticalPixelThreshold &&
                          Math.abs(e - r.startX) >=
                            n.props.horizontalPixelThreshold,
                      };
                    });
                  },
                )));
            },
          },
          {
            key: `fakeOnDragEnd`,
            value: function () {
              (window.cancelAnimationFrame.call(window, this.moveTimer),
                this.computeCurrentSlide(),
                this.props.orientation === `vertical` &&
                  this.props.carouselStore.setStoreState({
                    isPageScrollLocked: !1,
                  }),
                this.setState({
                  deltaX: 0,
                  deltaY: 0,
                  isBeingTouchDragged: !1,
                  isBeingMouseDragged: !1,
                }),
                (this.isDocumentScrolling =
                  !this.props.lockOnWindowScroll && null));
            },
          },
          {
            key: `callCallback`,
            value: function (e, t) {
              var n = this.props.trayProps;
              n && typeof n[e] == `function` && (t.persist(), n[e](t));
            },
          },
          {
            key: `handleOnMouseDown`,
            value: function (e) {
              if (!this.props.dragEnabled)
                return void this.callCallback(`onMouseDown`, e);
              (e.preventDefault(),
                this.fakeOnDragStart({
                  screenX: e.screenX,
                  screenY: e.screenY,
                  mouseDrag: !0,
                }),
                this.callCallback(`onMouseDown`, e));
            },
          },
          {
            key: `handleOnMouseMove`,
            value: function (e) {
              this.state.isBeingMouseDragged &&
                (this.setState({ cancelNextClick: !0 }),
                e.preventDefault(),
                this.fakeOnDragMove(e.screenX, e.screenY));
            },
          },
          {
            key: `handleOnMouseUp`,
            value: function (e) {
              this.state.isBeingMouseDragged &&
                (e.preventDefault(), this.fakeOnDragEnd());
            },
          },
          {
            key: `handleOnClickCapture`,
            value: function (e) {
              if (!this.state.cancelNextClick)
                return void this.callCallback(`onClickCapture`, e);
              (e.preventDefault(),
                this.setState({ cancelNextClick: !1 }),
                this.callCallback(`onClickCapture`, e));
            },
          },
          {
            key: `handleOnTouchStart`,
            value: function (e) {
              if (!this.props.touchEnabled)
                return void this.callCallback(`onTouchStart`, e);
              this.props.orientation === `vertical` && e.preventDefault();
              var t = e.targetTouches[0];
              (this.fakeOnDragStart({
                screenX: t.screenX,
                screenY: t.screenY,
                touchDrag: !0,
              }),
                this.callCallback(`onTouchStart`, e));
            },
          },
          {
            key: `handleDocumentScroll`,
            value: function () {
              var e = this;
              this.props.touchEnabled &&
                ((this.isDocumentScrolling = !0),
                window.clearTimeout(this.scrollStopTimer),
                (this.scrollStopTimer = window.setTimeout(function () {
                  e.isDocumentScrolling = !1;
                }, 66)));
            },
          },
          {
            key: `handleOnTouchMove`,
            value: function (e) {
              if (
                !this.props.touchEnabled ||
                (this.props.lockOnWindowScroll && this.isDocumentScrolling)
              )
                return void this.callCallback(`onTouchMove`, e);
              var t = e.targetTouches[0];
              t &&
                (this.fakeOnDragMove(t.screenX, t.screenY),
                this.callCallback(`onTouchMove`, e));
            },
          },
          {
            key: `forward`,
            value: function () {
              var e = this.props,
                t = e.currentSlide,
                n = e.step,
                r = e.totalSlides,
                i = e.visibleSlides;
              return Math.min(t + n, r - i);
            },
          },
          {
            key: `backward`,
            value: function () {
              var e = this.props,
                t = e.currentSlide,
                n = e.step;
              return Math.max(t - n, 0);
            },
          },
          {
            key: `handleOnKeyDown`,
            value: function (e) {
              var t = e.keyCode,
                n = this.props,
                r = n.carouselStore,
                i = n.currentSlide,
                a = n.disableKeyboard,
                o = n.totalSlides,
                s = n.visibleSlides,
                c = {};
              !0 === a ||
                o <= s ||
                (t === 37 &&
                  (e.preventDefault(),
                  this.focus(),
                  (c.currentSlide = Math.max(0, i - 1)),
                  (c.isPlaying = !1)),
                t === 39 &&
                  (e.preventDefault(),
                  this.focus(),
                  (c.currentSlide = Math.min(o - s, i + 1)),
                  (c.isPlaying = !1)),
                r.setStoreState(c));
            },
          },
          {
            key: `playForward`,
            value: function () {
              var e = this.props,
                t = e.carouselStore,
                n = e.currentSlide;
              t.setStoreState({
                currentSlide: this.forward() === n ? 0 : this.forward(),
              });
            },
          },
          {
            key: `playBackward`,
            value: function () {
              var e = this.props,
                t = e.carouselStore,
                n = e.currentSlide,
                r = e.totalSlides,
                i = e.visibleSlides;
              t.setStoreState({
                currentSlide: this.backward() === n ? r - i : this.backward(),
              });
            },
          },
          {
            key: `play`,
            value: function () {
              var e = this.props.playDirection;
              this.interval = setInterval(
                e === `forward` ? this.playForward : this.playBackward,
                this.props.interval,
              );
            },
          },
          {
            key: `stop`,
            value: function () {
              (window.clearInterval(this.interval), (this.interval = null));
            },
          },
          {
            key: `lockScroll`,
            value: function () {
              var e = new Vu();
              ((this.scrollParent = e.getScrollParent(this.sliderTrayElement)),
                this.scrollParent &&
                  ((this.originalOverflow =
                    this.originalOverflow || this.scrollParent.style.overflow),
                  (this.scrollParent.style.overflow = `hidden`)));
            },
          },
          {
            key: `unlockScroll`,
            value: function () {
              this.scrollParent &&=
                ((this.scrollParent.style.overflow = this.originalOverflow),
                (this.originalOverflow = null),
                null);
            },
          },
          {
            key: `blockWindowScroll`,
            value: function (e) {
              this.state.preventingVerticalScroll &&
                (e.preventDefault(), e.stopImmediatePropagation());
            },
          },
          {
            key: `computeCurrentSlide`,
            value: function () {
              var e = t.slideSizeInPx(
                  this.props.orientation,
                  this.sliderTrayElement.clientWidth,
                  this.sliderTrayElement.clientHeight,
                  this.props.totalSlides,
                ),
                n = t.slidesMoved(
                  this.props.moveThreshold,
                  this.props.orientation,
                  this.state.deltaX,
                  this.state.deltaY,
                  e,
                  this.props.dragStep,
                ),
                r =
                  this.props.totalSlides -
                  Math.min(this.props.totalSlides, this.props.visibleSlides),
                i = Ll({ min: 0, max: r, x: this.props.currentSlide + n });
              (this.props.infinite &&
                (this.props.currentSlide >= r && n > 0 && (i = 0),
                this.props.currentSlide === 0 && n < 0 && (i = r)),
                this.props.carouselStore.setStoreState({ currentSlide: i }));
            },
          },
          {
            key: `focus`,
            value: function () {
              this.sliderElement.focus();
            },
          },
          {
            key: `handleOnTouchEnd`,
            value: function (e) {
              (this.endTouchMove(), this.callCallback(`onTouchEnd`, e));
            },
          },
          {
            key: `handleOnTouchCancel`,
            value: function (e) {
              (this.endTouchMove(), this.callCallback(`onTouchCancel`, e));
            },
          },
          {
            key: `endTouchMove`,
            value: function () {
              this.props.touchEnabled && this.fakeOnDragEnd();
            },
          },
          {
            key: `renderMasterSpinner`,
            value: function () {
              var e = this.props,
                t = e.hasMasterSpinner,
                n = e.masterSpinnerFinished,
                r = e.spinner;
              return t && !n
                ? (typeof this.props.onMasterSpinner == `function` &&
                    this.props.onMasterSpinner(),
                  P.createElement(
                    `div`,
                    {
                      className: q([
                        $.masterSpinnerContainer,
                        `carousel__master-spinner-container`,
                      ]),
                    },
                    r && r(),
                    !r && P.createElement(ju, null),
                  ))
                : null;
            },
          },
          {
            key: `render`,
            value: function () {
              var e = this,
                t = this.props,
                n = t.ariaLabel,
                r = (t.carouselStore, t.children),
                i = t.className,
                a = t.classNameAnimation,
                o = t.classNameTray,
                s = t.classNameTrayWrap,
                c = t.currentSlide,
                l = t.disableAnimation,
                u =
                  (t.disableKeyboard,
                  t.dragEnabled,
                  t.hasMasterSpinner,
                  t.interval,
                  t.isPageScrollLocked,
                  t.isPlaying,
                  t.lockOnWindowScroll,
                  t.masterSpinnerFinished,
                  t.moveThreshold,
                  t.naturalSlideHeight),
                d = t.naturalSlideWidth,
                f = (t.onMasterSpinner, t.orientation),
                p = (t.playDirection, t.privateUnDisableAnimation, t.slideSize),
                m = t.slideTraySize,
                h = (t.spinner, t.style),
                g = (t.totalSlides, t.touchEnabled),
                _ = t.trayProps,
                v = t.trayTag,
                y = t.visibleSlides,
                b = t.isIntrinsicHeight,
                x = W(t, Hu),
                ee = H({}, h),
                S = {};
              f === `vertical` &&
                ((S.height = 0),
                (S.paddingBottom = J((100 * u * y) / d)),
                (S.width = J(100)));
              var C = {},
                te = J(p * c * -1);
              ((this.state.isBeingTouchDragged ||
                this.state.isBeingMouseDragged ||
                l) &&
                (C.transition = `none`),
                b && ((C.display = `flex`), (C.alignItems = `stretch`)),
                f === `vertical`
                  ? ((C.transform = `translateY(${te}) translateY(${this.state.deltaY}px)`),
                    (C.width = J(100)),
                    (C.flexDirection = `column`))
                  : ((C.width = J(m)),
                    (C.transform = `translateX(${te}) translateX(${this.state.deltaX}px)`),
                    (C.flexDirection = `row`)));
              var ne = q([
                  f === `vertical` ? $.verticalSlider : $.horizontalSlider,
                  !g && $.touchDisabled,
                  `carousel__slider`,
                  f === `vertical`
                    ? `carousel__slider--vertical`
                    : `carousel__slider--horizontal`,
                  i,
                ]),
                re = q([
                  $.sliderTrayWrap,
                  `carousel__slider-tray-wrapper`,
                  f === `vertical`
                    ? $.verticalSlideTrayWrap
                    : $.horizontalTrayWrap,
                  f === `vertical`
                    ? `carousel__slider-tray-wrap--vertical`
                    : `carousel__slider-tray-wrap--horizontal`,
                  s,
                ]),
                ie = q([
                  $.sliderTray,
                  a || $.sliderAnimation,
                  `carousel__slider-tray`,
                  f === `vertical` ? $.verticalTray : $.horizontalTray,
                  f === `vertical`
                    ? `carousel__slider-tray--vertical`
                    : `carousel__slider-tray--horizontal`,
                  o,
                ]),
                ae =
                  (x.dragStep,
                  x.step,
                  x.infinite,
                  x.preventVerticalScrollOnTouch,
                  x.preventingVerticalScroll,
                  x.horizontalPixelThreshold,
                  x.verticalPixelThreshold,
                  W(x, Uu)),
                oe =
                  (_.className,
                  _.onClickCapture,
                  _.onMouseDown,
                  _.onTouchCancel,
                  _.onTouchEnd,
                  _.onTouchMove,
                  _.onTouchStart,
                  _.ref,
                  _.style,
                  W(_, Wu));
              return P.createElement(
                `div`,
                H(
                  {
                    ref: function (t) {
                      e.sliderElement = t;
                    },
                    className: ne,
                    "aria-live": `polite`,
                    "aria-label": n,
                    role: this.props.role,
                    style: ee,
                    onKeyDown: this.handleOnKeyDown,
                  },
                  ae,
                ),
                P.createElement(
                  `div`,
                  { className: re, style: S },
                  P.createElement(
                    v,
                    H(
                      {
                        ref: this.getSliderRef,
                        className: ie,
                        style: C,
                        onTouchStart: this.handleOnTouchStart,
                        onTouchMove: this.handleOnTouchMove,
                        onTouchEnd: this.handleOnTouchEnd,
                        onTouchCancel: this.handleOnTouchCancel,
                        onMouseDown: this.handleOnMouseDown,
                        onClickCapture: this.handleOnClickCapture,
                      },
                      oe,
                    ),
                    r,
                  ),
                  this.renderMasterSpinner(),
                ),
              );
            },
          },
        ],
        [
          {
            key: `slideSizeInPx`,
            value: function (e, t, n, r) {
              return (e === `horizontal` ? t : n) / r;
            },
          },
          {
            key: `slidesMoved`,
            value: function (e, t, n, r, i, a) {
              var o = t === `horizontal` ? n : r,
                s = Math.abs(Math.round(o / i)),
                c = Math.abs(o) >= i * e ? a : 0,
                l = Math.max(c, s);
              if (o < 0) return l;
              var u = -l;
              return u === 0 ? 0 : u;
            },
          },
        ],
      ),
      t
    );
  })(P.Component),
  Ku = Y(
    (V(Gu, `propTypes`, {
      ariaLabel: X.string,
      carouselStore: X.object.isRequired,
      children: X.node.isRequired,
      className: X.string,
      classNameAnimation: X.string,
      classNameTray: X.string,
      classNameTrayWrap: X.string,
      currentSlide: X.number.isRequired,
      disableAnimation: X.bool,
      disableKeyboard: X.bool,
      dragEnabled: X.bool.isRequired,
      dragStep: X.number,
      hasMasterSpinner: X.bool.isRequired,
      infinite: X.bool,
      interval: X.number.isRequired,
      isPageScrollLocked: X.bool.isRequired,
      isPlaying: X.bool.isRequired,
      lockOnWindowScroll: X.bool.isRequired,
      preventVerticalScrollOnTouch: X.bool,
      horizontalPixelThreshold: X.number,
      verticalPixelThreshold: X.number,
      masterSpinnerFinished: X.bool.isRequired,
      moveThreshold: X.number,
      naturalSlideHeight: X.number.isRequired,
      naturalSlideWidth: X.number.isRequired,
      onMasterSpinner: X.func,
      orientation: Z.orientation.isRequired,
      playDirection: Z.direction.isRequired,
      privateUnDisableAnimation: X.bool,
      role: X.string,
      slideSize: X.number.isRequired,
      slideTraySize: X.number.isRequired,
      spinner: X.func,
      step: X.number.isRequired,
      style: X.object,
      totalSlides: X.number.isRequired,
      touchEnabled: X.bool.isRequired,
      trayProps: X.shape({
        className: X.string,
        onClickCapture: X.func,
        onMouseDown: X.func,
        onTouchCancel: X.func,
        onTouchEnd: X.func,
        onTouchMove: X.func,
        onTouchStart: X.func,
        ref: X.shape({}),
        style: X.string,
      }),
      trayTag: X.string,
      visibleSlides: X.number,
      isIntrinsicHeight: X.bool,
    }),
    V(Gu, `defaultProps`, {
      ariaLabel: `slider`,
      className: null,
      classNameAnimation: null,
      classNameTray: null,
      classNameTrayWrap: null,
      disableAnimation: !1,
      disableKeyboard: !1,
      dragStep: 1,
      infinite: !1,
      preventVerticalScrollOnTouch: !0,
      horizontalPixelThreshold: 15,
      verticalPixelThreshold: 10,
      moveThreshold: 0.1,
      onMasterSpinner: null,
      privateUnDisableAnimation: !1,
      role: `listbox`,
      spinner: null,
      style: {},
      trayProps: {},
      trayTag: `div`,
      visibleSlides: 1,
      isIntrinsicHeight: !1,
    }),
    Gu),
    function (e) {
      return {
        currentSlide: e.currentSlide,
        disableAnimation: e.disableAnimation,
        privateUnDisableAnimation: e.privateUnDisableAnimation,
        disableKeyboard: e.disableKeyboard,
        dragEnabled: e.dragEnabled,
        hasMasterSpinner: e.hasMasterSpinner,
        infinite: e.infinite,
        interval: e.interval,
        isPageScrollLocked: e.isPageScrollLocked,
        isPlaying: e.isPlaying,
        lockOnWindowScroll: e.lockOnWindowScroll,
        preventingVerticalScroll: e.preventingVerticalScroll,
        masterSpinnerFinished: e.masterSpinnerFinished,
        naturalSlideHeight: e.naturalSlideHeight,
        naturalSlideWidth: e.naturalSlideWidth,
        orientation: e.orientation,
        playDirection: e.playDirection,
        slideSize: e.slideSize,
        slideTraySize: e.slideTraySize,
        step: e.step,
        dragStep: e.dragStep,
        totalSlides: e.totalSlides,
        touchEnabled: e.touchEnabled,
        visibleSlides: e.visibleSlides,
        isIntrinsicHeight: e.isIntrinsicHeight,
      };
    },
  ),
  qu = `HRbFcf6y6hE-`,
  Ju = `-ZUk3xT7ZlY-`,
  Yu = `KLUTL0g4Wbo-`,
  Xu = `glnkf1Fqlvc-`,
  Zu = `loez15u80yI-`,
  Qu = `bTrailerCarouselAutoAdvance`,
  $u,
  ed = new Set();
function td() {
  if ($u === void 0) {
    let e = En(Qu);
    $u = !e || e.toLowerCase() === `true`;
  }
  return $u;
}
function nd(e) {
  (kn(Qu, String(e), 3650), ($u = e), ed.forEach((e) => e()));
}
function rd(e) {
  return (ed.add(e), () => ed.delete(e));
}
function id() {
  return [P.useSyncExternalStore(rd, td, () => !0), nd];
}
function ad(e) {
  let [t, n] = id();
  return (0, N.jsx)(`div`, {
    className: j(Zu, e.bPhoneOnly && `fvIP8xIxKbo-`),
    children: (0, N.jsx)(_n, {
      className: Xu,
      controlled: !0,
      checked: t,
      label: O(`#SaleTrailerCarousel_AutoAdvanceEnabled`),
      onChange: n,
    }),
  });
}
var od = 1e4;
function sd(e) {
  let {
      className: t,
      currentItemKey: n,
      autoAdvanceMsec: r,
      fnAdvance: i,
      enabled: a,
      pauseReason: o,
      countdownToken: s = `#SaleTrailerCarousel_NextGameInSeconds`,
      progressTarget: c,
    } = e,
    [l] = id(),
    u = r === void 0 ? od : r,
    [d, f] = P.useState(u),
    p = o !== void 0,
    m = cd(o);
  (Qn(
    () => {
      let e = d - 30;
      e <= 0 ? (i(), f(u)) : f(Math.max(e, 0));
    },
    30,
    [u],
    a && l && !p && u > 0 && d > 0,
  ),
    P.useEffect(() => {
      f(u);
    }, [n, u, l]));
  let h = `${100 - (d / u) * 100}%`,
    g = !a || !l ? `off` : p ? `paused` : `running`;
  return (
    P.useEffect(() => {
      let e = c?.current;
      e &&
        (e.style.setProperty(`--auto-advance-ratio`, h),
        (e.dataset.autoAdvance = g));
    }, [c, h, g]),
    (0, N.jsxs)(`div`, {
      className: t,
      children: [
        (0, N.jsxs)(`div`, {
          className: j(qu, (!a || !l) && `X8q-iPdWKKw-`, p && `_3E-10Et-w2o-`),
          children: [
            (0, N.jsx)(`div`, {
              className: Ju,
              children: !p || !m ? Zn(s, Math.ceil(d / 1e3)) : m,
            }),
            (0, N.jsx)(`div`, {
              className: Yu,
              style: { "--auto-advance-ratio": h },
            }),
          ],
        }),
        (0, N.jsx)(ad, {}),
      ],
    })
  );
}
function cd(e) {
  switch (e) {
    case 4:
      return O(`#SaleTrailerCarousel_AutoAdvanceVideoPaused`);
    case 3:
    case 5:
      return O(`#SaleTrailerCarousel_AutoAdvanceHover`);
  }
}
function ld() {
  let [e, t] = P.useState(!1),
    [n, r] = P.useState(!1);
  P.useEffect(() => {
    let e = () => t(document.hidden);
    return (
      document.addEventListener(`visibilitychange`, e),
      () => document.removeEventListener(`visibilitychange`, e)
    );
  }, []);
  let i = P.useCallback((e) => r(!e.isIntersecting), []);
  return {
    bTabHidden: e,
    bOffscreen: n,
    refIntersection: Ot(i, { threshold: 0.5 }),
  };
}
var ud = `_--jO3lLROzo-`,
  dd = `DyOrE-LFQDQ-`,
  fd = `_538FwVlPb0E-`,
  pd = `bYSGIkS6GvM-`,
  md = `eROFrrQM5Ew-`,
  hd = `bKYQmUBfOtY-`,
  gd = `Udbg33O1Kjs-`,
  _d = `ux4DPxJOkL8-`,
  vd = `-LFP33ltPBY-`,
  yd = `_4uWRflget-8-`,
  bd = `IxjyotVSZiA-`,
  xd = `cD9zjaueru0-`,
  Sd = `_6KPsWUgnjok-`,
  Cd = `RiCuzM-PsMk-`,
  wd = `_8kxQAkw3gko-`,
  Td = `CKl3kyOE6XE-`,
  Ed = `_4CFowarbZF0-`,
  Dd = `I5j74q712SQ-`,
  Od = `FStnZRH332A-`,
  kd = `eqYBsdUkt5U-`,
  Ad = 9;
function jd(e, t) {
  let n = P.useRef(0);
  if (e <= Ad)
    return {
      rgPills: Array.from({ length: e }, (e, t) => ({ nPage: t })),
      strClassName: Dd,
      bWindowed: !1,
      nPages: e,
      nSelectedPage: t,
    };
  let r = n.current;
  return (
    t < r ? (r = t) : t >= r + Ad && (r = t - Ad + 1),
    (r = Math.min(Math.max(r, 0), e - Ad)),
    (n.current = r),
    {
      rgPills: Array.from({ length: Ad }, (e, t) => ({ nPage: r + t })),
      strClassName: Dd,
      bWindowed: !0,
      nPages: e,
      nSelectedPage: t,
    }
  );
}
function Md(e) {
  let { pillWindow: t, children: n } = e;
  return (0, N.jsxs)(`div`, {
    className: Ed,
    children: [
      (0, N.jsx)(`div`, { className: t.strClassName, children: n }),
      t.bWindowed &&
        (0, N.jsx)(`span`, {
          className: `xAhUZDLR-Fs-`,
          children: O(
            `#Sale_Carousel_PageOfPages`,
            ut(t.nSelectedPage + 1),
            ut(t.nPages),
          ),
        }),
    ],
  });
}
function Nd() {
  return Od;
}
function Pd(e) {
  let { bSelected: t, bCountdown: n } = e,
    r = t && n;
  return (0, N.jsx)(`span`, {
    className: j(kd, t && `bY2thn3lfUw-`, r && `D6a-33r-4xk-`),
    children: r && (0, N.jsx)(`span`, { className: `NItUkZKCFW8-` }),
  });
}
function Fd(e) {
  let { count: t, selectedIndex: n, fnNavigate: r, bCountdown: i } = e,
    a = jd(t, n);
  return (0, N.jsx)(on, {
    "flow-children": `row`,
    className: j(Td, wd),
    children: (0, N.jsx)(Md, {
      pillWindow: a,
      children: a.rgPills.map((e) =>
        (0, N.jsx)(
          `div`,
          {
            className: Nd(),
            onClick: r ? () => r(e.nPage) : void 0,
            children: (0, N.jsx)(Pd, {
              bSelected: e.nPage === n,
              bCountdown: i,
            }),
          },
          e.nPage,
        ),
      ),
    }),
  });
}
var Id = `_1MsO62M-piw-`,
  Ld = `QZKBcFqGSTo-`,
  Rd = 0.6;
function zd(e, t, n) {
  let r = P.useRef(t);
  r.current = t;
  let i = !!t;
  P.useEffect(() => {
    if (!i || !e || typeof IntersectionObserver > `u`) return;
    let t = Array.from(e.children);
    if (!t.length) return;
    let n = Math.round(e.scrollLeft / e.clientWidth),
      a = new IntersectionObserver(
        (e) => {
          for (let i of e) {
            if (!i.isIntersecting || i.intersectionRatio < Rd) continue;
            let e = t.indexOf(i.target);
            e < 0 || e === n || ((n = e), r.current?.(e));
          }
        },
        { root: e, threshold: Rd },
      );
    for (let e of t) a.observe(e);
    return () => a.disconnect();
  }, [e, i, n]);
}
function Bd(e, t, n, r) {
  let i = e.getBoundingClientRect(),
    a = t.getBoundingClientRect();
  return n ? i.right - r - a.right : a.left - (i.left + r);
}
function Vd(e) {
  return Array.from(e.children).filter((e) => e.getClientRects().length > 0);
}
var Hd = 10;
function Ud(e, t, n) {
  let [r, i] = P.useState(0),
    [a, o] = P.useState(t);
  return (
    P.useEffect(() => {
      if (!n || !e) return;
      let t = 0,
        r = () => {
          t = 0;
          let n = Vd(e);
          o(n.length);
          let r = e.scrollWidth - e.clientWidth,
            a = r > 0 && Math.abs(e.scrollLeft) >= r - 2,
            s = getComputedStyle(e),
            c = s.direction === `rtl`,
            l = parseFloat(s.scrollPaddingInlineStart) || 0;
          if (
            (e.toggleAttribute(
              `data-more-after`,
              Math.abs(e.scrollLeft) < r - 2,
            ),
            e.toggleAttribute(
              `data-more-before`,
              a &&
                n.some((t) => {
                  let n = Bd(e, t, c, l);
                  return n < -2 && n + t.getBoundingClientRect().width > 2;
                }),
            ),
            a)
          ) {
            i(n.length - 1);
            return;
          }
          let u = 0;
          (n.forEach((t, n) => {
            Bd(e, t, c, l) <= Hd && (u = n);
          }),
            i(u));
        },
        a = () => {
          t ||= requestAnimationFrame(r);
        };
      e.addEventListener(`scroll`, a, { passive: !0 });
      let s = new ResizeObserver(a);
      s.observe(e);
      for (let t of Array.from(e.children)) s.observe(t);
      return (
        r(),
        () => {
          (e.removeEventListener(`scroll`, a),
            s.disconnect(),
            t && cancelAnimationFrame(t));
        }
      );
    }, [e, t, n]),
    [
      r,
      P.useCallback(
        (t) => {
          let n = e ? Vd(e)[t] : void 0;
          if (!e || !n) return;
          let r = getComputedStyle(e),
            i = r.direction === `rtl`,
            a = Bd(e, n, i, parseFloat(r.scrollPaddingInlineStart) || 0);
          e.scrollBy({ left: i ? -a : a, behavior: `smooth` });
        },
        [e],
      ),
      a,
    ]
  );
}
function Wd(e) {
  let { nSlideIndex: t, nStartingSlideIndex: n, ref: r, children: i } = e;
  return n === void 0
    ? i
    : (0, N.jsx)(`div`, { ref: t === n ? r : void 0, children: i });
}
function Gd(e) {
  let {
      padded: t,
      gap: n,
      children: r,
      bLazyRenderChildren: i,
      lazyRenderPlaceholderWidth: a,
      lazyRenderPlaceholderHeight: o,
      startingSlide: s,
      onSlide: c,
    } = e,
    l = P.useRef(null),
    u = P.useRef(null),
    d = dn(),
    f = P.Children.count(r),
    [p, m] = P.useState(null),
    h = P.useCallback((e) => {
      ((l.current = e), m(e));
    }, []);
  zd(p, c, f);
  let g = P.useContext(Er) && !d && f > 1,
    [_, v, y] = Ud(p, f, g);
  P.useLayoutEffect(() => {
    l.current &&
      u.current &&
      (l.current.scrollLeft +=
        u.current.getBoundingClientRect().left -
        l.current.getBoundingClientRect().left);
  }, [s]);
  let b = P.Children.map(r, (e, t) =>
      i
        ? (0, N.jsx)(pe, {
            rootMargin: `0px 50% 0px 50%`,
            horizontal: !0,
            placeholderWidth: a ?? 1,
            placeholderHeight: 1,
            holdGamepadFocus: d,
            children: (0, N.jsx)(Wd, {
              nSlideIndex: t,
              nStartingSlideIndex: s,
              ref: u,
              children: e,
            }),
          })
        : (0, N.jsx)(Wd, {
            nSlideIndex: t,
            nStartingSlideIndex: s,
            ref: u,
            children: e,
          }),
    ),
    x = (0, N.jsx)(on, {
      "flow-children": `row`,
      style: { gap: n ? n + `px` : void 0 },
      className: j(
        { SaleSectionCarouselPadding: t },
        `ScrollSnapCarousel`,
        `SaleSectionCarousel`,
        Id,
        g && `DE3YQ2XTqZE-`,
        e.className,
      ),
      ref: h,
      children: b,
    }),
    ee = g
      ? (0, N.jsxs)(`div`, {
          className: j(Ld, `PillScrollRowCtn`),
          children: [
            x,
            (0, N.jsx)(Fd, { count: y, selectedIndex: _, fnNavigate: v }),
          ],
        })
      : x;
  return i
    ? (0, N.jsx)(pe, {
        rootMargin: `50% 0px 50% 0px`,
        horizontal: !1,
        placeholderWidth: 1,
        placeholderHeight: o ?? 1,
        children: ee,
      })
    : ee;
}
var Kd = e(i());
function qd(e, t) {
  let {
      currentSlide: n,
      step: r,
      totalSlides: i,
      visibleSlides: a,
      infinite: o,
    } = e,
    s = i - a,
    c;
  return (
    (c =
      t === `next`
        ? o && n === s
          ? 0
          : Math.min(n + r, s)
        : o && n === 0
          ? s
          : Math.max(n - r, 0)),
    c === n ? void 0 : c
  );
}
function Jd(e) {
  let {
      eDirection: t,
      onNavIntent: n,
      className: r,
      style: i,
      children: a,
    } = e,
    o = P.useContext(ql),
    s = P.useRef(n);
  s.current = n;
  let c = P.useRef(!1),
    l = P.useRef(!1),
    u = P.useCallback(() => {
      let e = qd(o.state, t);
      e !== void 0 && s.current?.(e, t);
    }, [o, t]),
    d = !!n;
  P.useEffect(() => {
    if (!d) return;
    let e = o.state.currentSlide,
      t = () => {
        let t = o.state.currentSlide;
        t !== e && ((e = t), (c.current || l.current) && u());
      };
    return (o.subscribe(t), () => o.unsubscribe(t));
  }, [d, o, u]);
  let f = t === `next` ? du : tu;
  return n
    ? (0, N.jsx)(f, {
        className: r,
        style: i,
        "aria-label": e[`aria-label`],
        onMouseEnter: () => {
          ((c.current = !0), u());
        },
        onMouseLeave: () => {
          c.current = !1;
        },
        onFocus: () => {
          ((l.current = !0), u());
        },
        onBlur: () => {
          l.current = !1;
        },
        children: a,
      })
    : (0, N.jsx)(f, {
        className: r,
        style: i,
        "aria-label": e[`aria-label`],
        children: a,
      });
}
var Yd = Y(
  class extends P.Component {
    render() {
      let {
          showArrows: e,
          arrowFill: t,
          arrowStyle: n,
          onNavIntent: r,
        } = this.props,
        i = this.props.visibleSlides,
        a = this.props.totalSlides,
        o = this.props.currentSlide;
      if (i >= a) return null;
      let s = (100 * o) / a,
        c = 100 * (1 - Math.min(o + i, a) / a),
        l = s + (50 * i) / a,
        u = 100 - l;
      return (0, N.jsxs)(`div`, {
        className: gd,
        children: [
          e &&
            (0, N.jsx)(Jd, {
              eDirection: `previous`,
              onNavIntent: r,
              className: j(`iqx2UWGqqKU-`, `oKffwUnx6co-`, `_--jO3lLROzo-`),
              children: (0, N.jsx)(Rf, {
                arrowFill: t,
                arrowStyle: n,
                direction: `left`,
              }),
            }),
          (0, N.jsxs)(`div`, {
            className: yd,
            children: [
              (0, N.jsx)(`div`, { className: bd }),
              (0, N.jsx)(`div`, {
                className: xd,
                style: { insetInlineStart: s + `%`, insetInlineEnd: c + `%` },
              }),
              (0, N.jsx)(`div`, {
                className: _d,
                style: { insetInlineStart: `0%`, width: l + `%` },
                children: (0, N.jsx)(Jd, {
                  eDirection: `previous`,
                  onNavIntent: r,
                  className: j(ud, vd),
                  style: { color: `red` },
                  children: (0, N.jsx)(`div`, {}),
                }),
              }),
              (0, N.jsx)(`div`, {
                className: _d,
                style: { insetInlineEnd: `0%`, width: u + `%` },
                children: (0, N.jsx)(Jd, {
                  eDirection: `next`,
                  onNavIntent: r,
                  className: j(ud, vd),
                  children: (0, N.jsx)(`div`, {}),
                }),
              }),
            ],
          }),
          e &&
            (0, N.jsx)(Jd, {
              eDirection: `next`,
              onNavIntent: r,
              className: j(`iqx2UWGqqKU-`, `O2Vg9rmPwSE-`, `_--jO3lLROzo-`),
              children: (0, N.jsx)(Rf, {
                arrowFill: t,
                arrowStyle: n,
                direction: `right`,
              }),
            }),
        ],
      });
    }
  },
  (e) => ({
    currentSlide: e.currentSlide,
    totalSlides: e.totalSlides,
    visibleSlides: e.visibleSlides,
  }),
);
function Xd(e) {
  let { bForceSimpleCarousel: t, screenIsWide: n, children: r } = e,
    i = dn();
  return (n || i) && !t
    ? (0, N.jsx)(Zd, { ...e, children: r })
    : (0, N.jsx)(Gd, { ...e, children: r });
}
function Zd(e) {
  let t = dn(),
    n = P.useContext(Er),
    [r, i] = P.useState(!1),
    { bTabHidden: a, bOffscreen: o, refIntersection: s } = ld(),
    c = () => P.Children.count(e.children),
    l = () => Math.min(c(), e.visibleElements),
    u = () =>
      P.Children.map(e.children, (n, r) => {
        let i =
          e.bLazyRenderChildren && !t
            ? (0, N.jsx)(pe, {
                rootMargin: `0px 100% 0px 100%`,
                horizontal: !0,
                placeholderWidth: e.lazyRenderPlaceholderWidth ?? 1,
                placeholderHeight: e.lazyRenderPlaceholderHeight ?? 1,
                children: n,
              })
            : n;
        return (0, N.jsx)(
          Bu,
          {
            className: Sd,
            index: r,
            role: `listitem`,
            "aria-label": void 0,
            children: i,
          },
          `slide_` + r,
        );
      }),
    d = c(),
    f = l();
  if (!d || !f) return null;
  let p = f < d,
    m = e.hideArrows || !p,
    h = !p || e.hidePips,
    g = !!e.bAutoAdvance && p && !t,
    _;
  r && !Rt() ? (_ = 5) : a ? (_ = 1) : o && (_ = 2);
  let v = 4 / 3,
    y = !0;
  e.slideAspectRatio && ((v = e.slideAspectRatio), (y = !1));
  let b = `items_in_row_${e.visibleElements}`;
  return (0, N.jsx)(on, {
    "flow-children": `row`,
    className: j(dd, e.className, b),
    navKey: e.navKey,
    ref: s,
    onMouseEnter: () => i(!0),
    onMouseLeave: () => i(!1),
    children: (0, N.jsxs)($l, {
      visibleSlides: e.visibleElements,
      totalSlides: c(),
      naturalSlideWidth: 100 * v,
      naturalSlideHeight: 100,
      step: e.visibleElements,
      infinite: !e.disableEdgeWrap,
      isIntrinsicHeight: y,
      dragEnabled: !1,
      touchEnabled: !1,
      lockOnWindowScroll: !0,
      orientation: `horizontal`,
      disableKeyboard: !0,
      currentSlide: e.startingSlide,
      children: [
        (0, N.jsx)(tf, {
          bHideArrows: m,
          onSlide: e.onSlide,
          onNavIntent: e.onNavIntent,
          arrowFill: e.arrowFill,
          arrowStyle: e.arrowStyle,
          children: u(),
        }),
        !h &&
          (e.useTestScrollbar && !n
            ? (0, N.jsx)(Yd, {
                showArrows: m,
                onNavIntent: e.onNavIntent,
                carouselStore: null,
              })
            : (0, N.jsx)(`div`, {
                className: (0, Kd.default)({
                  "I8j65FBXdOY-": !0,
                  "_8kxQAkw3gko-": n,
                  "uhUggqIYXBc-": e.className?.includes(`template-carousel`),
                }),
                children: (0, N.jsx)(Qd, {
                  ...e,
                  nPageSize: f,
                  children: e.children,
                }),
              })),
        g && (0, N.jsx)(ef, { pauseReason: _ }),
      ],
    }),
  });
}
function Qd(e) {
  let { nPageSize: t } = e,
    n = P.useContext(ql),
    r = P.useContext(Er),
    [i, a] = P.useState(n.state.currentSlide);
  P.useEffect(
    () =>
      n.subscribe(() => {
        a(n.state.currentSlide);
      }),
    [n],
  );
  let o = Math.ceil(i / t),
    s = jd(Math.ceil(P.Children.count(e.children) / t), o);
  return r
    ? (0, N.jsx)(Md, {
        pillWindow: s,
        children: s.rgPills.map((e) =>
          (0, N.jsx)(
            vu,
            {
              slide: e.nPage * t,
              className: Nd(),
              children: (0, N.jsx)(Pd, { bSelected: e.nPage === o }),
            },
            e.nPage,
          ),
        ),
      })
    : (0, N.jsx)(N.Fragment, {
        children: P.Children.map(e.children, (n, r) => {
          if (r % t !== 0) return null;
          let i = o * t === r;
          return (0, N.jsx)(
            vu,
            {
              slide: r,
              className: hd,
              children: (0, N.jsx)(zf, { ...e, bIsActive: i }),
            },
            r,
          );
        }),
      });
}
function $d(e) {
  e.current &&= (window.clearTimeout(e.current), null);
}
function ef(e) {
  let { pauseReason: t } = e,
    n = P.useContext(ql),
    [r, i] = P.useState(n.state.currentSlide),
    [a, o] = P.useState(!0),
    s = P.useRef(null),
    c = P.useRef(n.state.currentSlide);
  P.useEffect(() => {
    let e = () => {
      let e = n.state.currentSlide;
      e !== c.current &&
        ((c.current = e),
        i(e),
        s.current === e ? (s.current = null) : s.current === null && o(!1));
    };
    return (n.subscribe(e), () => n.unsubscribe(e));
  }, [n]);
  let l = P.useCallback(() => {
    let { currentSlide: e, visibleSlides: t, totalSlides: r } = n.state,
      i = 0;
    (e + t < r && (i = Math.min(e + t, r - t)),
      i !== e && ((s.current = i), n.setStoreState({ currentSlide: i })));
  }, [n]);
  return (0, N.jsx)(sd, {
    className: md,
    enabled: a,
    currentItemKey: r,
    autoAdvanceMsec: od,
    fnAdvance: l,
    pauseReason: t,
    countdownToken: `#Carousel_AutoAdvanceNextInSeconds`,
  });
}
function tf(e) {
  let {
      bHideArrows: t,
      children: n,
      onSlide: r,
      onNavIntent: i,
      arrowFill: a,
      arrowStyle: o,
    } = e,
    s = P.useContext(ql),
    c = P.useRef(s.state.currentSlide),
    [l, u] = P.useState(null),
    d = P.useRef(null);
  P.useEffect(() => {
    let e = () => {
      let e = c.current,
        t = s.state.currentSlide;
      (r && r(t),
        u(t > e ? `Right` : t < e ? `Left` : null),
        $d(d),
        (d.current = window.setTimeout(() => {
          d.current && (u(null), $d(d));
        }, 1e3)),
        (c.current = t));
    };
    return (
      s.subscribe(e),
      () => {
        (s.unsubscribe(e), $d(d));
      }
    );
  }, [s]);
  let f = !!l && `CarouselSliding` + l;
  return (0, N.jsxs)(`div`, {
    className: j(fd, `SliderBody`, f),
    children: [
      !t &&
        (0, N.jsx)(Jd, {
          eDirection: `previous`,
          onNavIntent: i,
          className: j(
            `_6KbJ1ZwTIeY-`,
            `oKffwUnx6co-`,
            `_--jO3lLROzo-`,
            `CarouselBtnLeft`,
          ),
          "aria-label": O(`#Carousel_Prev`),
          children: (0, N.jsx)(Rf, {
            arrowFill: a,
            arrowStyle: o,
            direction: `left`,
          }),
        }),
      (0, N.jsx)(Ku, {
        className: yt.GetScrollableClassname(),
        classNameTray: pd,
        classNameAnimation: Cd,
        role: `list`,
        children: (0, N.jsx)(Ht, { children: n }),
      }),
      !t &&
        (0, N.jsx)(Jd, {
          eDirection: `next`,
          onNavIntent: i,
          className: j(
            `_6KbJ1ZwTIeY-`,
            `O2Vg9rmPwSE-`,
            `_--jO3lLROzo-`,
            `CarouselBtnRight`,
          ),
          "aria-label": O(`#Carousel_Next`),
          children: (0, N.jsx)(Rf, {
            arrowFill: a,
            arrowStyle: o,
            direction: `right`,
          }),
        }),
    ],
  });
}
function nf(e) {
  let t = dn(),
    n = Mr(940),
    r = String(w(e.args, `autoadvance`)).toLowerCase() === `true`;
  return (0, N.jsx)(Xd, {
    hideArrows: !n,
    hidePips: t,
    visibleElements: 1,
    useTestScrollbar: !1,
    bLazyRenderChildren: !0,
    screenIsWide: n,
    bAutoAdvance: r,
    className: v,
    children: e.children,
  });
}
var rf = `FQV2hlT8BYs-`;
function af(e) {
  let { strURL: t, children: n } = e;
  return (typeof t == `string` ? !zn(t) : t.some((e) => !zn(e)))
    ? (0, N.jsx)(of, { children: n })
    : (0, N.jsx)(N.Fragment, { children: n });
}
function of(e) {
  let { children: t } = e;
  return Ae()
    ? (0, N.jsx)(N.Fragment, { children: t })
    : (0, N.jsx)(`div`, {
        className: rf,
        children: xt(
          `#Image_Externally_Hosted_Hidden`,
          (0, N.jsx)(`a`, {
            href: M.STORE_BASE_URL + `account/cookiepreferences`,
          }),
        ),
      });
}
var sf = null;
function cf() {
  return (
    (sf ??= new Map([
      [`url`, { Constructor: da, autocloses: !1 }],
      [`dynamiclink`, { Constructor: fa, autocloses: !1 }],
      [
        `h1`,
        { Constructor: et(Oe, le), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [
        `h2`,
        { Constructor: et($e, ce), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [
        `h3`,
        { Constructor: et(Re, re), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [`quote`, { Constructor: et(qe, de), autocloses: !1 }],
      [`list`, { Constructor: ke, autocloses: !1, skipInternalNewline: !0 }],
      [`olist`, { Constructor: Je, autocloses: !1, skipInternalNewline: !0 }],
      [`*`, { Constructor: Ie, autocloses: !0, skipInternalNewline: !0 }],
      [`p`, { Constructor: De, autocloses: !1, skipFollowingNewline: !0 }],
      [`img`, { Constructor: lf, autocloses: !1 }],
      [`previewyoutube`, { Constructor: Pe, autocloses: !1 }],
      [`looping_media`, { Constructor: Ke, autocloses: !1 }],
      [`video`, { Constructor: Xe, autocloses: !1 }],
      [`youtubeorvideo`, { Constructor: Fe, autocloses: !1 }],
      [`trailer`, { Constructor: df, autocloses: !1 }],
      [
        `speaker`,
        {
          Constructor: ff,
          autocloses: !1,
          skipInternalNewline: !0,
          allowWrapTextForCopying: !0,
        },
      ],
      [`docimg`, { Constructor: uf, autocloses: !1 }],
      [`carousel`, { Constructor: nf, autocloses: !1 }],
    ])),
    sf
  );
}
function lf(e) {
  let { showErrorInfo: t, event: n } = e.context,
    r = w(e.args, `src`) || e.children?.toString();
  ((r ||= w(e.args)), (r = lt(r ?? ``) || void 0));
  let i = w(e.args, `style`) === `inline`,
    a = me(r, e.language, n?.rtime32_last_modified);
  if (a == null) return null;
  if (typeof a == `string`) {
    r = a;
    let e;
    return (
      (e = !zn(r)),
      n?.BHasTag(`auto_rssfeed`) && (e = !1),
      t
        ? (0, N.jsx)(S, {
            className: j({ [ct]: i }),
            src: r,
            crossOrigin: e ? `anonymous` : void 0,
          })
        : ((r = Pt(r)),
          (0, N.jsx)(af, {
            strURL: r,
            children: (0, N.jsx)(ee, {
              className: j({ [ct]: i }),
              src: r,
              crossOrigin: e ? `anonymous` : void 0,
            }),
          }))
    );
  }
  return (0, N.jsx)(af, {
    strURL: a,
    children: (0, N.jsx)(We, { rgSources: a }),
  });
}
function uf(e) {
  let t = w(e.args);
  if (t == null || t == null || t.length == 0) return ``;
  let n = e.children?.toString(),
    r = [];
  return (
    r.push(
      `${M.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${M.LANGUAGE}/${t}`,
    ),
    M.LANGUAGE != `english` &&
      r.push(`${M.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${t}`),
    (0, N.jsx)(We, { rgSources: r, alt: n })
  );
}
function df(e) {
  let t = pf(e.args, `appid`, e.context.event?.appid ?? 0),
    n = pf(e.args, `trailerid`, 0),
    r = w(e.args, `style`)?.toLocaleLowerCase() ?? Gc.k_TrailerAsFull;
  r = Object.values(Gc).includes(r) ? r : Gc.k_TrailerAsFull;
  let i = Ur(e.args.color, `black`),
    a = Ur(e.args.bgcolor, `white`),
    o = He(e.args);
  return (0, N.jsx)(Kc, {
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
function ff(e) {
  let t = w(e.args, `name`),
    n = w(e.args, `title`),
    r = w(e.args, `company`),
    i = w(e.args, `photo`);
  return e.context.bShowShortSpeakerInfo
    ? (0, N.jsx)(ue, {
        name: t,
        title: n,
        company: r,
        photo: i,
        bio: e.children,
      })
    : (0, N.jsx)(ge, {
        name: t,
        title: n,
        company: r,
        photo: i,
        bio: e.children,
      });
}
function pf(e, t, n) {
  let r = w(e, t);
  return r === void 0 || r == null ? n : Number.parseInt(r);
}
var mf = null;
function hf() {
  return (
    (mf ??= new Map([
      ...Array.from(Ue.entries()),
      ...Array.from(cf().entries()),
    ])),
    mf
  );
}
var gf = P.createContext(null);
function _f() {
  return P.useContext(gf) ?? hf();
}
function vf(e) {
  let t = _f(),
    n = P.useMemo(
      () =>
        new Map([
          ...Array.from(t.entries()),
          ...Array.from(e.dictionary.entries()),
        ]),
      [t, e.dictionary],
    );
  return (0, N.jsx)(gf.Provider, { value: n, children: e.children });
}
function yf(e) {
  let {
      text: t,
      languageOverride: n,
      event: r,
      showErrorInfo: i,
      bShowShortSpeakerInfo: a,
    } = e,
    o = qi(),
    s = P.useCallback(
      (e) => new zr(new Rr(new Ir(new it(new ot()), e, o, { event: r })), e),
      [r, o],
    ),
    c = _f();
  return P.useMemo(() => new st(c, s, n || M.LANGUAGE), [c, s, n]).ParseBBCode(
    t,
    { showErrorInfo: i, event: r, bShowShortSpeakerInfo: a, bbcode: t },
  );
}
function bf(e) {
  let {
      strTag: t,
      args: n,
      rawargs: r,
      language: i = gn(M.LANGUAGE),
      children: a,
      ...o
    } = e,
    s = _f().get(t);
  return s
    ? (0, N.jsx)(s.Constructor, {
        context: o,
        tagname: t,
        args: n,
        language: i,
        rawargs: r,
        children: a,
      })
    : (0, N.jsxs)(N.Fragment, { children: [`[${t}]`, a, `[/${t}]`] });
}
var xf = (function (e) {
    return (
      (e.k_ECutArrowStyle = `single`),
      (e.k_EDoubleArrowStyle = `double`),
      (e.k_EThickChevron = `chevron`),
      (e.k_EFilledArrow = `filled`),
      (e.k_EPointyArrow = `pointy`),
      e
    );
  })({}),
  Sf = (function (e) {
    return (
      (e.k_EPillCrumb = `pill`),
      (e.k_ECircularCrumb = `circle`),
      (e.k_ESquareCrumb = `square`),
      e
    );
  })({});
async function Cf(e, t) {
  let { rgDefIDs: n, strCategory: r, itemClass: i } = t,
    a = await bt.QueryRewardItems(e, {
      definitionids: n,
      community_item_classes: i ? [i] : void 0,
      filter_match_any_category_tags: r ? [r] : void 0,
    });
  if (!a.BSuccess())
    throw Error(`LoyaltyRewards.QueryRewardItems answered ` + a.GetEResult());
  return a.Body().toObject().definitions ?? [];
}
var wf;
function Tf() {
  let e = $t();
  return e
    ? e.GetAnonymousServiceTransport()
    : ((wf ||= or(new An(M.WEBAPI_BASE_URL))),
      wf.GetAnonymousServiceTransport());
}
async function Ef(e) {
  return Cf(Tf(), e);
}
var Df = 36e5;
function Of(e) {
  return [`LoyaltyRewardDef`, e];
}
function kf(e, t) {
  return [`LoyaltyRewardDefsByCategoryAndClass`, e, t];
}
function Af(e) {
  return {
    queryKey: Of(e),
    queryFn: async () => {
      let t = await Ef({ rgDefIDs: [e] }),
        n = t.length == 1 ? t[0] : void 0;
      if (!n)
        throw Error(
          `Asked for point shop item ${e} and got ${t.length} items back, wanted exactly one.`,
        );
      return n;
    },
    enabled: e > 0,
    staleTime: Df,
    retry: !1,
  };
}
function jf(e, t) {
  return {
    queryKey: kf(e, t),
    queryFn: () => Ef({ strCategory: e, itemClass: t }),
    enabled: !!(e && t),
    staleTime: Df,
    retry: !1,
  };
}
function Mf(e) {
  let { data: t } = a(Af(e));
  return t;
}
function Nf(e, t) {
  let n = d(),
    { data: r } = a(jf(e, t));
  return (
    (0, P.useEffect)(() => {
      r?.forEach((e) => {
        e.defid !== void 0 && n.setQueryData(Of(e.defid), e);
      });
    }, [r, n]),
    r
  );
}
var Pf = 1778623200;
function Ff(e, t) {
  let n = !1;
  return (
    e && e.GetEventType() == 36
      ? (n = !0)
      : e && t && t.is_creator_home && (n = If(e, t)),
    n
  );
}
function If(e, t) {
  return !!t && !!t.is_creator_home && (e.createTime ?? 0) > Pf;
}
function Lf(e) {
  return Ff(e, we(e.clanSteamID.GetAccountID()).data);
}
function Rf(e) {
  let { arrowFill: t, arrowStyle: n, direction: r } = e;
  switch (n) {
    default:
    case xf.k_ECutArrowStyle: {
      let e = r == `right` ? 0 : 180;
      return (0, N.jsx)(Cn, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case xf.k_EDoubleArrowStyle: {
      let e = r == `right` ? 180 : 0;
      return (0, N.jsx)(jt, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case xf.k_EThickChevron: {
      let e = r == `right` ? 0 : 180;
      return (0, N.jsx)(fn, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case xf.k_EFilledArrow: {
      let e = r == `right` ? 90 : 270;
      return (0, N.jsx)(Yt, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case xf.k_EPointyArrow:
      return (0, N.jsx)(Ct, {
        fill: t || `white`,
        role: `presentation`,
        direction: r || `left`,
      });
  }
}
function zf(e) {
  let {
      bIsActive: t,
      breadcrumbActiveColor: n,
      breadcrumbColor: r,
      breadcrumbStyle: i,
    } = e,
    a = t ? n || `#FFFFFF` : r || `#606974`;
  switch (i) {
    default:
    case Sf.k_EPillCrumb:
      return (0, N.jsx)(Sn, { fill: a, role: `presentation` });
    case Sf.k_ECircularCrumb:
      return (0, N.jsx)(Pn, { fill: a, role: `presentation` });
    case Sf.k_ESquareCrumb:
      return (0, N.jsx)(Wn, { fill: a, role: `presentation` });
  }
}
export {
  zr as A,
  Er as B,
  sa as C,
  Xr as D,
  Yi as E,
  Dr as F,
  wr as G,
  vr as H,
  Or as I,
  Sr as J,
  _r as K,
  Mr as L,
  Fr as M,
  Ar as N,
  Gr as O,
  Pr as P,
  cr as Q,
  Nr as R,
  va as S,
  Ji as T,
  lr as U,
  yr as V,
  Tr as W,
  hr as X,
  pr as Y,
  mr as Z,
  Lc as _,
  Nf as a,
  fc as b,
  vf as c,
  pf as d,
  Xd as f,
  Uc as g,
  Rc as h,
  Lf as i,
  Ir as j,
  Ur as k,
  yf as l,
  ld as m,
  zf as n,
  xf as o,
  sd as p,
  Cr as q,
  Ff as r,
  Sf as s,
  Rf as t,
  bf as u,
  wc as v,
  ca as w,
  R as x,
  Sc as y,
  jr as z,
};
