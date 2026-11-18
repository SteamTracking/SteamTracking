/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e } from "./chunk~f025431ab0.js";
import {
  D as t,
  E as n,
  Ft as r,
  K as i,
  L as a,
  M as o,
  R as s,
  at as c,
  bt as l,
  j as u,
  ot as d,
  w as f,
  wt as p,
} from "./chunk~01cfc309bf.js";
import {
  Ao as m,
  Fn as h,
  Gn as g,
  Go as _,
  Ji as v,
  Jn as y,
  Ki as b,
  Kn as x,
  Ko as ee,
  Ln as S,
  Pn as C,
  Po as te,
  Qn as ne,
  Rn as re,
  So as ie,
  Un as ae,
  Vn as oe,
  Wn as se,
  Yn as ce,
  Zn as le,
  Zo as ue,
  go as de,
  nr as fe,
  qn as pe,
  rr as me,
  tr as he,
  vo as ge,
  wo as _e,
  xo as ve,
  yi as ye,
  zn as be,
  zr as xe,
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
  $u as xt,
  Af as St,
  Bc as Ct,
  Ec as wt,
  Ed as Tt,
  Eu as E,
  Fo as Et,
  Fs as Dt,
  Gd as Ot,
  Gf as kt,
  Hs as At,
  Id as jt,
  Io as Mt,
  Is as Nt,
  Iu as Pt,
  Kd as Ft,
  Km as It,
  Ld as Lt,
  Lu as Rt,
  Nd as zt,
  Nf as D,
  No as Bt,
  Oc as Vt,
  Od as Ht,
  Os as Ut,
  Ou as Wt,
  Pf as Gt,
  Pi as Kt,
  Pl as qt,
  Po as Jt,
  Pp as Yt,
  Qd as Xt,
  Qf as Zt,
  Ri as Qt,
  Rs as $t,
  Sm as en,
  Tf as tn,
  Ud as nn,
  Uh as O,
  Up as rn,
  Vs as an,
  Wa as on,
  Wd as sn,
  Wf as cn,
  Wp as ln,
  Ws as un,
  Xf as dn,
  Xl as fn,
  Xr as pn,
  Xu as mn,
  Yd as hn,
  Zf as gn,
  Zh as _n,
  Zi as vn,
  _h as yn,
  _m as bn,
  _u as xn,
  ac as Sn,
  ad as Cn,
  af as wn,
  bh as Tn,
  cf as En,
  dc as Dn,
  fc as On,
  gd as kn,
  gf as An,
  gh as jn,
  gp as Mn,
  hd as Nn,
  hf as Pn,
  if as k,
  ig as Fn,
  ii as In,
  in as Ln,
  jd as Rn,
  jm as zn,
  kc as Bn,
  la as Vn,
  lm as A,
  nh as Hn,
  nu as Un,
  op as Wn,
  ph as Gn,
  pl as Kn,
  qp as qn,
  rd as Jn,
  ru as Yn,
  sf as Xn,
  td as Zn,
  tp as j,
  ts as Qn,
  ua as $n,
  uc as er,
  ud as tr,
  vm as nr,
  wf as rr,
  xh as ir,
  xs as ar,
  ya as or,
  ym as sr,
  zu as cr,
} from "./main.js";
var M = d(),
  lr = e(n(), 1),
  N = e(r(), 1),
  ur = N.createContext({ bCanUseLink: !1 }),
  dr = (function (e) {
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
  fr =
    /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
function pr(e) {
  return e.match(fr)?.[1];
}
function mr(e, t) {
  if (!t) return !1;
  let n = pr(window.location.href),
    r = t.GetEventType() == 36,
    i =
      (t.appid ? `games` : `groups`) == n &&
      ((t.appid && t.appid === sr.APPID) ||
        (!t.appid && t.clanSteamID.GetAccountID() === sr.CLANACCOUNTID));
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
      return (Fn(!1, `Unknown route specified for link: ` + e), !1);
  }
}
function hr(e) {
  let t =
    A.COMMUNITY_BASE_URL +
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
function gr(e) {
  return Sr(e, `sale`, `absolute`);
}
function _r(e) {
  return Sr(e, `storeview`, `absolute`);
}
function vr(e, t, n) {
  if (n)
    return (e ? `/games/` + sr.VANITY_ID : `/groups/` + sr.VANITY_ID) + `/`;
  let r = e ? `ogg/` + e : `gid/` + t.ConvertTo64BitString();
  return A.COMMUNITY_BASE_URL + r + `/`;
}
function yr() {
  return `news`;
}
function br() {
  return !1;
}
function xr(e) {
  return e.clanSteamID.GetAccountID() === 45479024 && !1;
}
function Sr(e, t, n) {
  let { data: r } = Yt(e?.appid ? { appid: e.appid } : void 0);
  if (e) return Cr(e, r, t, n);
}
function Cr(e, t, n, r) {
  let i = r === `relative`,
    a = i ? `/` : A.STORE_BASE_URL,
    o = vr(e.appid, e.clanSteamID, i);
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
      return a + `${yr()}/${t}`;
    }
    case `store`:
      return (
        a +
        (e.appid ? `app/` + e.appid : `curator/` + e.clanSteamID.GetAccountID())
      );
    case `sale`:
      return e.jsondata.bSaleEnabled
        ? l
          ? `${ie(t)}/${e.GetSaleUpdateLandingPageVanity()}`
          : u
            ? `${a}curator/${e.clanSteamID.GetAccountID()}`
            : a +
              _e(
                e.clanSteamID.GetAccountID(),
                e.GetSaleVanity(),
                !!e.jsondata.sale_vanity_id_valve_approved_for_sale_subpath,
              )
        : a;
    case `hardwarepreview`:
      return xr(e) ? `${a}hardware_v2/${c}?beta=1` : a;
    case `communityview`:
      return o + `announcements/detail/` + c;
    case `storeview`:
      if (e.clanSteamID.GetAccountID() == Se())
        return `${A.STORE_BASE_URL}meetsteam/${s}`;
      if (l) return `${ie(t)}/${e.GetSaleUpdateLandingPageVanity()}`;
      if (u) return `${a}curator/${e.clanSteamID.GetAccountID()}`;
      {
        let t = e.appid
            ? `app/${e.appid}`
            : `group/${e.clanSteamID.GetAccountID()}`,
          n = br() ? `view_v2` : `view`,
          r = e.bOldAnnouncement ? `old_view/${c}` : `${n}/${s}`;
        return `${a}${yr()}/${t}/${r}`;
      }
    case `usernewshub`:
      return `${a}${yr()}/`;
    default:
      return (Fn(!1, `Unknown route specified for link`), ``);
  }
}
function wr(e, t, n) {
  return Sr(e, t, n === `forceAbsolute` || !mr(t, e) ? `absolute` : `relative`);
}
function Tr(e) {
  let { eventModel: t, route: n, bPopup: r = !0 } = e,
    i = mr(n, t),
    a = Sr(t, n, i ? `relative` : `absolute`);
  return (
    N.useEffect(() => {
      a && (r ? window.open(a) : window.location.assign(a));
    }, [r, a]),
    i && a ? (0, M.jsx)(l, { push: !0, to: a }) : null
  );
}
function Er(e, t, n) {
  let r = vr(e, t, !1);
  switch (n) {
    case `admin`:
      return r + `partnerevents`;
    default:
      return ``;
  }
}
function Dr(e) {
  let { eventModel: t, preferredFocus: n } = e,
    { bCanUseLink: r } = N.useContext(ur),
    i = In(),
    a = p(),
    o = r && mr(e.route, t),
    s = Sr(t, e.route, o ? `relative` : `absolute`),
    c = !o && s ? $t(s) : s,
    l = o || !c ? c : pn(c, i),
    u = Sr(t, `websitehub`, `absolute`),
    d =
      e.route == `websitehub` ? `` : rr.Localize(`#EventBrowse_MoreEventsBtn`),
    f = N.useCallback(() => {
      u && window.location.assign(u);
    }, [u]);
  return t
    ? o
      ? (0, M.jsx)(cr, {
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
      : (0, M.jsx)(cr, {
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
var Or = N.createContext(!1),
  kr = `100% 0px 100% 0px`,
  Ar = `SaleSection_`;
function jr() {
  return window.innerWidth ?? 1920;
}
function Mr() {
  return jr() >= 940;
}
function Nr() {
  Ln();
  let [e, t] = (0, N.useState)(() => jr());
  return (
    (0, N.useEffect)(() => {
      let e = () => {
        t(jr());
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
function Pr(e = 940) {
  return Nr() >= e;
}
function Fr(e) {
  let t = Nr(),
    n = t >= ((0, N.useContext)(Or) ? 911 : 940),
    r = xe(e);
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
function Ir(e) {
  let t = xe(e);
  return Mr()
    ? t.nMaxItemsPerRow
    : Math.min(
        Math.max(Math.floor(window.innerWidth / t.nItemMinimumWidth), 1),
        t.nMaxItemsPerRow,
      );
}
function Lr(e) {
  return (0, M.jsxs)(`a`, {
    href: e.strURL,
    className: Be.Box,
    "data-modal-content-sizetofit": !!e.bSizeToFit,
    "data-appid": e.appid,
    "data-publishedfileid": e.publishedfileid,
    children: [
      (0, M.jsx)(Ge, { strURL: e.strPreviewURL }),
      (0, M.jsxs)(ze, {
        children: [
          (0, M.jsx)(Ee, { children: e.strTitle }),
          (0, M.jsx)(`div`, {
            children: (0, M.jsx)(`span`, {
              className: Be.Type,
              children: e.strType,
            }),
          }),
          e.author && (0, M.jsx)(Ze, { children: e.author }),
          (0, M.jsx)(Le, { children: e.strDescription }),
        ],
      }),
    ],
  });
}
var Rr = class extends at {
    m_LinkFilter = Gn;
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
  zr = `[ː:]([a-zA-Z0-9_]+)[ː:]`,
  Br = class extends at {
    m_EmoteRegex = new RegExp(zr);
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
          (super.AppendNode(N.createElement(Qe, { emoticon: r }, [])),
            (n = e.input.substring(e.index + r.length + 2)),
            (e = this.m_EmoteRegex.exec(n)));
        }
      }
      n.length > 0 && super.AppendText(n, t);
    }
  },
  Vr = class extends at {
    m_parentNode = void 0;
    constructor(e, t) {
      (super(e), (this.m_parentNode = t));
    }
    AppendText(e, t = !1) {
      let n = e;
      (this.m_parentNode &&
        this.m_parentNode.tag == `img` &&
        !Hr(n) &&
        (n = an(n)),
        super.AppendText(n, t));
    }
  };
function Hr(e) {
  let t = e.trim();
  return (
    t.startsWith(`{STEAM_CLAN_IMAGE}`) || t.startsWith(`{STEAM_CLAN_LOC_IMAGE}`)
  );
}
var Ur =
  /^(#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-z-]+\([^;{}]*\)|[a-z]+)$/i;
function Wr(e) {
  return e ? Ur.test(e.trim()) : !1;
}
function Gr(e, t) {
  return Wr(e) ? e : t;
}
var Kr = `NiXfRuagfO4-`;
function qr(e) {
  let { inputType: t, id: n, bApplyUserContentPref: r } = e,
    i = t == `bundle` ? `bundle` : t == `sub` ? `sub` : `game`,
    a = b(n, i),
    { data: o } = Yt(a),
    { data: s, isPending: c } = ln(r ? a : void 0);
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
      return (0, M.jsx)(`div`, {
        className: E(Kr, `AppSummaryWidgetCtn`),
        children: wn(
          e,
          (0, M.jsx)(`a`, { href: A.STORE_BASE_URL + `account/preferences/` }),
        ),
      });
    }
  }
  return (0, M.jsx)(`div`, {
    className: E(Kr, `AppSummaryWidgetCtn`),
    children: (0, M.jsx)(ye, {
      id: n,
      type: i,
      bShowDemoButton: o.type == 1,
      bAllowTwoLinesForHeader: !0,
      bPreferAssetWithoutOverride: !1,
    }),
  });
}
var Jr =
    /(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
  Yr =
    /(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i,
  Xr =
    /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i;
function Zr(e, t) {
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
function Qr(e, t, n, r, a) {
  let o = c(),
    s = Mn();
  return i(ei(o, s, e, t, n, r, a)).data ?? void 0;
}
function $r(e, t, n, r, i) {
  return [`useEventImageForSizeAsArrayWithFallback`, e?.GID, t, n, r, i];
}
function ei(e, t, n, r, i, a, o) {
  return {
    queryKey: $r(n, r, i, a, o),
    enabled: n && !!n.GID,
    queryFn: async () => {
      if (!n) return null;
      let s = [];
      if (!n.BImageNeedScreenshotFallback(r, i)) {
        let o = await e.ensureQueryData(be(e, t, n, r, i, a));
        if ((o && s.push(o), a != m.full)) {
          let a = await e.ensureQueryData(be(e, t, n, r, i, m.full));
          a && s.push(a);
        }
      }
      if (!o && s.length == 0) {
        let r = await e.ensureQueryData(oe(e, t, n));
        r && s.push(r);
      }
      return s;
    },
  };
}
function ti(e) {
  let t = Xt.GetELanguageFallback(e);
  return e == t ? `${e}` : `${e}_${t}`;
}
function ni(e) {
  return e ? re(new zn(e.clanSteamID64), e.event) : null;
}
async function ri(e, t) {
  let n = new URLSearchParams();
  (e.clanAccountID && n.set(`clan_accountid`, String(e.clanAccountID)),
    e.appid && n.set(`appid`, String(e.appid)),
    e.eventGID && n.set(`event_gid`, e.eventGID),
    e.announcementGID && n.set(`announcement_gid`, e.announcementGID),
    n.set(`lang_list`, ti(t)),
    n.set(`last_modified_time`, `0`),
    n.set(`origin`, window.location.origin));
  let r = A.STORE_BASE_URL + `events/ajaxgetpartnerevent?` + n.toString(),
    i = await fetch(r);
  if (!i.ok) throw Error(`${r} answered ${i.status}`);
  let a = await i.json();
  return a.success !== 1 || !a.event?.clan_steamid
    ? null
    : { clanSteamID64: a.event.clan_steamid, event: a.event };
}
function ii(e, t) {
  return [
    `LinkedPartnerEvent`,
    e.clanAccountID,
    e.appid,
    e.eventGID,
    e.announcementGID,
    t,
  ];
}
function ai(e) {
  return (
    !!e &&
    (!!e.clanAccountID || !!e.appid) &&
    (!!e.eventGID || !!e.announcementGID)
  );
}
function oi(e, t) {
  let n = ai(e);
  return {
    queryKey: ii(e ?? {}, t),
    queryFn: () => ri(e ?? {}, t),
    select: ni,
    enabled: n,
    staleTime: 36e5,
    retry: !1,
  };
}
function si(e) {
  let t = Hn(A.LANGUAGE);
  return i(oi(e, t));
}
function ci({ clanSteamID: e, strVanity: t, strGroupVanity: n }) {
  let r = t !== void 0 || n !== void 0,
    { data: i, isPending: a } = Ce(
      r ? (t ?? n ?? ``) : ``,
      t === void 0 ? `group` : `store`,
    );
  if (!r) return e?.GetAccountID();
  if (!a) return i?.clanAccountID ?? null;
}
function li(e) {
  let { appid: t, announcementGID: n, eventGID: r, strURL: i } = e,
    a = ci(e),
    o = a === null,
    {
      data: s,
      isPending: c,
      isError: l,
    } = si(
      o
        ? void 0
        : {
            clanAccountID: a ?? void 0,
            appid: t,
            eventGID: r,
            announcementGID: n,
          },
    ),
    u = ue(t || s?.appid || void 0),
    { data: d } = Yt(u);
  if (o || l || s === null) return T(i);
  if (c || !s) return (0, M.jsx)(Te, {});
  let f = Hn(A.LANGUAGE),
    p = s.GetNameWithFallback(f),
    m = s.GetSubTitleWithSummaryFallback(f),
    h = d?.name,
    g = Pn(s.GetStartTimeAndDateUnixSeconds());
  return (0, M.jsxs)(Dr, {
    eventModel: s,
    route: dr.k_eView,
    className: Be.Box,
    "data-modal-content-sizetofit": !0,
    "data-appid": t,
    children: [
      (0, M.jsx)(ui, { ...e, event: s }),
      (0, M.jsxs)(ze, {
        children: [
          (0, M.jsxs)(Ze, {
            children: [
              k(
                s.type == 28
                  ? `#EventDisplay_Share_Announcement`
                  : `#EventDisplay_Share_Event`,
                h ?? ``,
              ),
              (0, M.jsx)(Ve, { children: g }),
            ],
          }),
          (0, M.jsx)(Ee, {
            children: (0, M.jsx)(`div`, { className: Be.Type, children: p }),
          }),
          (0, M.jsx)(Le, { children: m }),
        ],
      }),
    ],
  });
}
function ui(e) {
  let {
      event: t,
      fnFilterImageURLsForKnownFailures: n,
      fnImageFailureCallback: r,
    } = e,
    i = Qr(t, `capsule`, Hn(A.LANGUAGE), m.capsule_main) ?? [];
  return (
    i && n && (i = n(i)),
    (0, M.jsx)(We, {
      className: Be.Preview,
      rgSources: i ?? [],
      onIncrementalError: (e, t, n) => r && r(t),
    })
  );
}
var di =
    /(?:steampowered\.com|store\.steamchina\.com|store[\w-]*\.(?:[\w.-]+\.)?(?:steam\.dev|valve\.org)|valve\.org\/store)\/(app|bundle|sub)\/(\d+)/i,
  fi = [`store.steampowered.com`, `store.steamchina.com`],
  pi = [`steampowered.com`, `steamcommunity.com`],
  mi = [`steamchina.com`],
  hi = [`steam.dev`, `valve.org`];
function gi(e, t) {
  return t.some((t) => e == t || e.endsWith(`.${t}`));
}
function _i(e) {
  let t = Nt(e).toLocaleLowerCase(),
    n = Nt(A.STORE_BASE_URL).toLocaleLowerCase(),
    r = Nt(A.COMMUNITY_BASE_URL).toLocaleLowerCase();
  return t == n || t == r
    ? !0
    : fi.includes(n)
      ? gi(t, gi(n, mi) ? mi : pi)
      : gi(t, [...pi, ...mi, ...hi]);
}
function vi(e) {
  if (_i(e)) return yi(e);
}
function yi(e) {
  let t = new RegExp(di).exec(e);
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
function bi(e) {
  return !!e && (e.GetEventType() == 36 || e.GetEventType() == 20);
}
function xi(e) {
  let t = bi(e),
    n = t ? e.clanSteamID.GetAccountID() : void 0,
    { data: r, isLoading: i } = we(n),
    { data: a, isLoading: o } = _(n);
  if (!t) return null;
  if (!(i || o)) return !a || !r || !Uf(e, r) ? null : (a.appids ?? []);
}
function Si(e, t) {
  return e === null || (t.length > 0 && t.every((t) => e.includes(t)));
}
function Ci(e, t) {
  let n = xi(t);
  if (e.appid === void 0) return !0;
  if (!(e.appid > 0)) return !1;
  if (n !== void 0) return Si(n, [e.appid]);
}
function wi({ link: e, strURL: t, eventModel: n, bAnnouncement: r }) {
  let i = Ci(e, n);
  if (i === void 0) return null;
  if (!i) return T(t, n);
  let a =
    e.strClanSteamID64 === void 0
      ? e.clanAccountID === void 0
        ? void 0
        : zn.InitFromClanID(e.clanAccountID, A.EUNIVERSE)
      : new zn(e.strClanSteamID64);
  return (0, M.jsx)(li, {
    appid: e.appid,
    clanSteamID: a,
    strVanity: e.strOGGVanity,
    strGroupVanity: e.strGroupVanity,
    eventGID: r ? void 0 : e.eventGID,
    announcementGID: r ? e.eventGID : void 0,
    strURL: t,
  });
}
function Ti(e, t, n, r = !1) {
  if (_i(t)) {
    let i = Zr(e, t);
    if (i)
      return (0, M.jsx)(wi, {
        link: i,
        strURL: t,
        eventModel: n?.event,
        bAnnouncement: r,
      });
  }
  return T(t, n?.event);
}
function Ei(e, t) {
  return Ti(Yr, e, t);
}
function Di(e, t) {
  return Ti(Jr, e, t);
}
function Oi(e, t) {
  return Ti(Xr, e, t, !0);
}
var ki = /community.+sharedfiles\/filedetails\/\?id=\d+/i;
function Ai(e) {
  if (!ki.test(e)) return;
  let t = e.split(`?`);
  if (t.length == 2) return new URLSearchParams(t[1]).get(`id`) ?? void 0;
}
function ji(e) {
  let { sharedFileID: t } = e,
    { data: n } = Ne(t),
    r = A.COMMUNITY_BASE_URL + `sharedfiles/filedetails/?id=`,
    i = n ?? {
      sharedfileid: t,
      title: k(`#Loading`),
      description: ``,
      type: ``,
      previewurl: ``,
      appid: 0,
      url: r + t,
    },
    a = yn(i.url) ? r + i.url : i.url,
    o = i.personnaname !== void 0 && i.personnaname.length > 0;
  return (0, M.jsx)(Lr, {
    strURL: a,
    strTitle: i.title,
    strPreviewURL: i.previewurl,
    strType: i.type,
    strDescription: i.description,
    author:
      o &&
      En(`#EventEditor_Author`, (0, M.jsx)(Me, { children: i.personnaname })),
    publishedfileid: t,
    appid: i.appid,
    bSizeToFit: i.bSizeToFit,
  });
}
var Mi = `x-q4pa21GtQ-`,
  Ni = `jjfjy77nkEg-`,
  Pi = `xk1sG-uqpwY-`,
  Fi = `XZqUhfrxufg-`,
  Ii = `h4V9nI3kyqU-`,
  Li = `gCqj4CIOecY-`,
  Ri = /sketchfab\.com\/(?:models\/(?:[^/\s]+-)?)([a-z0-9]{32})/i;
function zi(e) {
  return [`sketchfab_oembed`, e];
}
function Bi(e) {
  return `https://sketchfab.com/oembed?url=https://sketchfab.com/models/${encodeURIComponent(e)}`;
}
function Vi(e) {
  return {
    queryKey: zi(e),
    queryFn: async () => {
      let t = await fetch(Bi(e));
      if (t.status === 404) return null;
      if (!t.ok) throw Error(`sketchfab oembed returned ${t.status}`);
      return await t.json();
    },
    enabled: !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function Hi(e) {
  return i(Vi(e));
}
function Ui(e) {
  let { modelID: t } = e,
    [n, r] = N.useState(!0),
    { data: i } = Hi(t);
  if (n) {
    let e = () => r(!1);
    return (0, M.jsxs)(`div`, {
      className: Pi,
      role: `button`,
      tabIndex: 0,
      onClick: e,
      onKeyDown: (t) => {
        (t.key === `Enter` || t.key === ` `) && (t.preventDefault(), e());
      },
      children: [
        i?.thumbnail_url &&
          (0, M.jsx)(`img`, {
            className: `FFbDls5-Ssk-`,
            src: i.thumbnail_url,
            alt: i.title,
          }),
        (0, M.jsx)(`img`, { className: Mi, alt: `` }),
        (0, M.jsxs)(`div`, {
          className: Fi,
          children: [
            (0, M.jsxs)(`div`, {
              className: Ii,
              children: [
                (0, M.jsx)(`span`, {
                  className: Li,
                  children: k(`#EventDisplay_Sketchfab`),
                }),
                i?.title && (0, M.jsxs)(`div`, { children: [i.title, `\xA0`] }),
              ],
            }),
            i?.author_name &&
              (0, M.jsx)(`div`, {
                className: `-r4s23p52-0-`,
                children: i.author_name,
              }),
          ],
        }),
      ],
    });
  }
  return (0, M.jsx)(`div`, {
    className: Ni,
    children: (0, M.jsx)(`iframe`, {
      className: Ni,
      title: i?.title ?? t,
      src: `https://sketchfab.com/models/${encodeURIComponent(t)}/embed?autostart=1`,
      frameBorder: 0,
      allowFullScreen: !0,
    }),
  });
}
var Wi =
  /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.[\w.-]+\.steam\.dev|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
function Gi(e) {
  let t = Wi.exec(e),
    n = t ? Number(t[1]) : 0;
  return n > 0 ? n : void 0;
}
function Ki(e) {
  return _i(e) ? Gi(e) : void 0;
}
var qi = `_8mFolns3-hw-`;
function Ji(e) {
  let { defid: t } = e,
    n = Bf(t);
  if (!n || !n.community_item_data) return null;
  let r = n.appid,
    i = n.community_item_data.item_image_large,
    a = `${A.MEDIA_CDN_COMMUNITY_URL}images/items/${r}/${i}`;
  return (0, M.jsx)(`div`, {
    className: qi,
    children: (0, M.jsx)(ar, {
      toolTipContent: n.community_item_data.item_description,
      children: (0, M.jsx)(`img`, {
        src: a,
        alt: n.community_item_data.item_title,
      }),
    }),
  });
}
var Yi = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
  Xi = /twitter\.com\/(\w+)(\/?)$/i,
  Zi = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
  Qi = /twitch\.tv\/(\w+)(\/?)$/i,
  $i =
    /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i;
function ea() {
  return A.EREALM === It.k_ESteamRealmChina;
}
var ta = new Map();
function na() {
  let e = A.EREALM,
    t = ta.get(e);
  return (
    t ||
      ((t = ea()
        ? [
            { urlRegExp: new RegExp(di), fnBBComponent: ca },
            { urlRegExp: new RegExp(Jr), fnBBComponent: Di },
            { urlRegExp: new RegExp(Yr), fnBBComponent: Ei },
            { urlRegExp: new RegExp(Xr), fnBBComponent: Oi },
            { urlRegExp: new RegExp($i), fnBBComponent: ma },
          ]
        : [
            {
              urlRegExp: new RegExp(/youtu.be|youtube.com/i),
              fnBBComponent: je,
            },
            { urlRegExp: new RegExp(ki), fnBBComponent: sa },
            { urlRegExp: new RegExp(di), fnBBComponent: ca },
            { urlRegExp: new RegExp(Jr), fnBBComponent: Di },
            { urlRegExp: new RegExp(Yr), fnBBComponent: Ei },
            { urlRegExp: new RegExp(Xr), fnBBComponent: Oi },
            { urlRegExp: new RegExp(Yi), fnBBComponent: aa },
            { urlRegExp: new RegExp(Ri), fnBBComponent: oa },
            { urlRegExp: new RegExp(Xi), fnBBComponent: da },
            { urlRegExp: new RegExp(Zi), fnBBComponent: fa },
            { urlRegExp: new RegExp(Qi), fnBBComponent: pa },
            { urlRegExp: new RegExp($i), fnBBComponent: ma },
            { urlRegExp: new RegExp(Wi), fnBBComponent: ua },
          ]),
      ta.set(e, t)),
    t
  );
}
function ra(e) {
  return na().find((t) => !!t.urlRegExp.exec(e));
}
function ia(e) {
  return N.useMemo(() => ra(e), [e]);
}
function aa(e, t) {
  if (ea()) return null;
  let n = new RegExp(Yi).exec(e);
  if (n && n.length > 1) {
    let e = n[1];
    if (e?.length > 0) {
      let n =
        `https://medal.tv/clip/` +
        e +
        `/?autoplay=0&donate=0` +
        (t && t.event ? `&steamappid=` + t.event.appid : ``);
      return (0, M.jsx)(`iframe`, {
        className: ne,
        src: n,
        title: e,
        frameBorder: 0,
        allow: `autoplay`,
      });
    }
  }
  return T(e, t?.event);
}
function oa(e, t) {
  let n = new RegExp(Ri).exec(e);
  if (n && n.length > 1) {
    let e = n[1];
    if (e && e.length > 1) return (0, M.jsx)(Ui, { modelID: e });
  }
  return T(e, t?.event);
}
function sa(e, t) {
  let n = Ai(e);
  return n === void 0 ? T(e, t?.event) : (0, M.jsx)(ji, { sharedFileID: n });
}
function ca(e, t) {
  let n = vi(e);
  return n
    ? (0, M.jsx)(la, {
        eventModel: t?.event,
        inputID: n.id,
        inputType: n.strItemType,
        fallbackUrl: e,
      })
    : T(e, t?.event);
}
function la(e) {
  let { inputID: t, inputType: n, eventModel: r, fallbackUrl: i } = e,
    a = v(t, n),
    { data: o } = Yt(a),
    s = xi(r),
    c;
  return (
    s === null
      ? (c = !0)
      : s && o && (c = Si(s, o.appid ? [o.appid] : (o.included_appids ?? []))),
    c === void 0
      ? null
      : c
        ? (0, M.jsx)(qr, { id: t, inputType: n, bApplyUserContentPref: !0 })
        : T(i, r)
  );
}
function ua(e, t) {
  let n = Ki(e);
  return n
    ? (0, M.jsx)(`div`, {
        className: E(le),
        children: (0, M.jsx)(Ji, { defid: n, url: e }),
      })
    : T(e, t?.event);
}
function da(e, t) {
  return ea() ? null : ha(e, (0, M.jsx)(Yn, {}), `@`, t);
}
function fa(e, t) {
  return ea() ? null : ha(e, (0, M.jsx)(Yn, {}), `#`, t);
}
function pa(e, t) {
  return ea() ? null : ha(e, (0, M.jsx)(Un, {}), void 0, t);
}
function ma(e, t) {
  return ha(e, (0, M.jsx)(qt, {}), void 0, t);
}
function ha(e, t, n, r) {
  let i,
    a = e.endsWith(`/`) ? e.length - 1 : e.length,
    o = e.lastIndexOf(`/`, a - 1);
  (o != -1 && o + 1 < e.length && (i = e.substring(o + 1, a)),
    n && i && (i = n + i));
  let s = T(e, r?.event, i ?? e);
  return (0, M.jsxs)(`div`, {
    className: me,
    children: [(0, M.jsx)(`div`, { className: fe, children: t }), s],
  });
}
function ga(e) {
  switch (e) {
    case `button`:
      return E(y, `LinkButton`);
    case `pill`:
      return E(ce, `LinkPill`);
    default:
      return E(pe, `Link`);
  }
}
function _a(e, t, n) {
  let r = ``;
  return (
    e == `button` && t && (r += `background-color: ${t};`),
    e == `pill` && n && (r += `color: ${n};`),
    r.length == 0 ? void 0 : r
  );
}
function va(e, t, n) {
  let r;
  return (
    (e == `button` || e == `pill`) && t && (r = { backgroundColor: t }),
    (e == `button` || e == `pill`) && n && (r = { ...(r ?? {}), color: n }),
    r
  );
}
function ya(e, t) {
  let n = (
    typeof e == `string`
      ? e
      : Array.isArray(e) && e.length == 1 && typeof e[0] == `string`
        ? e[0]
        : void 0
  )?.trim();
  return !n || !t || n != t.trim();
}
function ba(e) {
  let t = lt(w(e.args) || w(e.args, `href`)),
    n = w(e.args, `style`),
    r = w(e.args, `id`),
    i = Gr(w(e.args, `buttoncolor`) || w(e.args, `bgcolor`), void 0),
    a = Gr(w(e.args, `labelcolor`) || w(e.args, `color`), void 0),
    o = ga(n),
    s = e.context.event,
    c = te(t, e.language, s?.rtime32_last_modified),
    l = ia(ya(e.children, t) ? `` : (t ?? ``));
  if (l && t) return l.fnBBComponent(t, { event: e.context.event });
  if (c === void 0 || c == null) return e.children || ``;
  t = typeof c == `string` ? c : c[1];
  let u = va(n, i, a);
  return typeof t == `string` && t.length > 0 && t[0] == `#`
    ? (0, M.jsx)(cr, { className: o, href: t, style: u, children: e.children })
    : t == `steam://settings/account`
      ? (0, M.jsx)(Ut, {
          className: o,
          href: `steam://settings/account`,
          children: e.children,
        })
      : (0, M.jsx)(Ye, {
          className: o,
          url: t,
          event: e.context.event,
          id: r,
          style: u,
          children: e.children,
        });
}
function xa(e) {
  let t = w(e.args, `href`),
    n = ia(t);
  return n
    ? n.fnBBComponent(t, { event: e.context.event })
    : (0, M.jsx)(ba, { ...e });
}
var Sa = `hPeepTEP2A0-`,
  Ca = `RzxfM12jbio-`,
  wa = `kQJ64kMGQbg-`,
  Ta = `_74WMutU3Gxc-`,
  Ea = (0, N.createContext)({});
function Da(e) {
  let {
      autoplayEnabled: t,
      setAutoplayEnabled: n,
      playerVolume: r,
      setPlayerVolume: i,
      audioMuted: a,
      setAudioMuted: o,
      children: s,
    } = e,
    c = (0, N.useMemo)(
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
  return (0, M.jsx)(Ea.Provider, { value: c, children: s });
}
function Oa() {
  return (0, N.useContext)(Ea);
}
var ka = 5,
  Aa = (function (e) {
    return (
      (e[(e.None = 0)] = `None`),
      (e[(e.Play = 1)] = `Play`),
      (e[(e.Pause = 2)] = `Pause`),
      e
    );
  })({}),
  P = class {
    m_elVideo = null;
    m_player = null;
    m_listeners = new St();
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
      (a(this), (this.m_persistState = e || {}));
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
        (Pa(this.m_player, this.m_strStatsURL, this.m_eFailureReason),
        (this.m_bSentStats = !0));
    }
  };
(D([s], P.prototype, `m_bPaused`, void 0),
  D([s], P.prototype, `m_bUserInputNeeded`, void 0),
  D([s], P.prototype, `m_bMuted`, void 0),
  D([s], P.prototype, `m_nVolume`, void 0),
  D([s], P.prototype, `m_eFailureReason`, void 0),
  D([s], P.prototype, `m_maxDimensions`, void 0),
  D([s], P.prototype, `m_bPlaybackStarted`, void 0),
  D([s], P.prototype, `m_bBuffering`, void 0),
  D([s], P.prototype, `m_bHasCaptions`, void 0),
  D([s], P.prototype, `m_bShowingCaption`, void 0),
  D([s], P.prototype, `m_nPlaybackTime`, void 0),
  D([s], P.prototype, `m_nVideoStartTime`, void 0),
  D([s], P.prototype, `m_nVideoDuration`, void 0),
  D([s], P.prototype, `m_nBufferedEndTime`, void 0),
  D([u.bound], P.prototype, `OnVideoPlaying`, null),
  D([O], P.prototype, `OnVideoPause`, null),
  D([u.bound], P.prototype, `OnVideoTimeUpdate`, null),
  D([O], P.prototype, `OnVolumeChange`, null),
  D([O], P.prototype, `OnVideoEnd`, null),
  D([O], P.prototype, `OnVideoValveEnded`, null),
  D([O], P.prototype, `OnDownloadFailed`, null),
  D([O], P.prototype, `OnUserInputNeeded`, null),
  D([u.bound], P.prototype, `OnMetadataChanged`, null),
  D([u.bound], P.prototype, `OnCaptionsChange`, null),
  D([O], P.prototype, `UserInputReceived`, null),
  D([u.bound], P.prototype, `SetMuteInternal`, null),
  D([O], P.prototype, `SendStats`, null));
function ja(e, t, n, r, i, a, o) {
  let s = Oa(),
    c = (0, N.useRef)(void 0);
  c.current ||= new P(s);
  let l = Lt(
    (i) => {
      if (i) return (c.current.Start(i, e, t, n, r), () => c.current.Stop());
    },
    [c, e, t, r],
  );
  return (
    (0, N.useEffect)(() => {
      c.current.UpdatePersistState(s);
    }, [s]),
    (0, N.useEffect)(() => {
      c.current.SetPlaybackEndCallback(i);
    }, [i]),
    (0, N.useEffect)(() => {
      c.current.SetOnPlayPauseChangeCallback(a);
    }, [a]),
    (0, N.useEffect)(() => {
      (c.current.SetOnMuteChangeCallback(o), o && o(c.current.GetMuted()));
    }, [o]),
    [l, c.current]
  );
}
function Ma(e, t) {
  ((t = !!t),
    (0, N.useEffect)(() => {
      e.SetMuteWhenAutoplayBlocked(t);
    }, [e, t]));
}
function Na(e, t) {
  let n = (0, N.useRef)(!1),
    r = (0, N.useRef)(!1),
    i = (0, N.useRef)(!1);
  return (
    (0, N.useEffect)(() => {
      n.current != t &&
        (t ? ((r.current = e.IsPaused()), e.Pause()) : r.current || e.Play(),
        (n.current = t));
    }, [t, n, r, e]),
    t || (i.current = !0),
    !i.current
  );
}
function Pa(e, t, n) {
  if (!navigator || navigator.sendBeacon === void 0) return;
  let r = e.GetDASHPlayerStats().GetPlayerStatsSummary(),
    i = e.GetAndCloseWatchedIntervals();
  if (i.reduce((e, t) => e + (t[1] - t[0]), 0) < ka && n == mt.Invalid) return;
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
function Fa(e, t) {
  if (!e || xt(e) || tr(e) || !t) return;
  let n = e.getElementsByTagName(`video`);
  if (n.length == 0) return;
  let r = n[0];
  r.webkitSetPresentationMode && r.webkitSetPresentationMode(`fullscreen`);
}
(0, N.createContext)(void 0);
function Ia(e) {
  return e ? e instanceof HTMLDialogElement : !1;
}
function La(e) {
  return e ? e.hasAttribute(`popover`) : !1;
}
var Ra = (0, N.createContext)(void 0);
function za(e) {
  let {
      iosVideoFallback: t,
      supportsTheater: n,
      supportsFullscreen: r,
      children: i,
    } = e,
    a = (0, N.useRef)(null),
    o = (0, N.useRef)(null),
    [s, c] = (0, N.useState)(`none`);
  (un(s == `theater`), (n = !!n), (r = !!r));
  let l = Lt(
      (e) => {
        if (((o.current = e), !e)) return;
        let t = () => {
          c((t) => (xt(e) ? `fullscreen` : t == `fullscreen` ? `none` : t));
        };
        return (
          e.addEventListener(`fullscreenchange`, t),
          () => e.removeEventListener(`fullscreenchange`, t)
        );
      },
      [c],
    ),
    u = Lt(
      (e) => {
        if (((a.current = e), !e)) return;
        let t = () => {
            c((e) => (e == `theater` ? `none` : e));
          },
          n = (t) => {
            t.currentTarget == t.target && Ia(e) && e.close();
          },
          r = (e) => {
            e.newState == `close` && t();
          },
          i = new St();
        return (
          Ia(e)
            ? (i.AddEventListener(e, `close`, t),
              i.AddEventListener(e, `click`, n))
            : La(e)
              ? i.AddEventListener(e, `beforetoggle`, r)
              : Fn(!1, `Was expecting a dialog or popover`),
          () => i.Unregister()
        );
      },
      [c],
    ),
    d = (0, N.useCallback)(
      (e) => {
        let n = o.current,
          r = a.current;
        (n &&
          (e != `fullscreen` && xt(n) && Jn(n),
          e == `fullscreen` && Fa(n, !!t)),
          Ia(r) &&
            (e != `theater` && r.open && r.close(),
            e == `theater` && r.showModal()),
          La(r) &&
            (e != `theater` && r.matches(`:popover-open`) && r.hidePopover(),
            e == `theater` && r.showPopover()),
          c(e));
      },
      [t],
    );
  (0, N.useEffect)(() => {
    s == `theater` && !n && d(`none`);
  }, [d, s, n]);
  let f = (0, N.useMemo)(
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
  return (0, M.jsx)(Ra.Provider, { value: f, children: i });
}
function Ba() {
  return (0, N.useContext)(Ra);
}
function Va(e, t) {
  return (0, N.useCallback)(() => {
    e && (e.strMode == t ? e.fnSetMode(`none`) : e.fnSetMode(t));
  }, [e, t]);
}
var Ha = `A5RRwjvEUvY-`,
  Ua = `-H-CbOmskAk-`,
  Wa = `BhmPQ-Xd2d8-`,
  Ga = `_7zvFUI6bX2k-`,
  Ka = `uacZ-90MOII-`,
  qa = `k9Sm1n-4mwI-`,
  Ja = `EE0MOLi31qY-`,
  Ya = `_7GE4TR2MB3I-`,
  Xa = `pQYV6KivA1I-`,
  Za = `pEu8vzuL1UY-`,
  Qa = `ntDKWvpd0tk-`,
  $a = `m9RGLw-x46M-`;
function eo() {
  return Lt((e) => {
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
var to = (0, N.forwardRef)(function (e, t) {
    let { children: n, ...r } = e,
      i = eo(),
      a = jt(i, t);
    return (0, M.jsx)(`div`, { ref: a, ...r, children: n });
  }),
  no = 2e3,
  ro = 500,
  io = 4e3,
  ao = -1,
  oo = N.createContext(void 0);
function so() {
  return (0, N.useContext)(oo);
}
function co(e, t, n) {
  return (0, N.useMemo)(
    () => ({ m_bMenuVisible: e, m_fnSetMenuVisible: t, m_refMenuLayer: n }),
    [e, t, n],
  );
}
function lo() {
  let e = so();
  return e ? e.m_bMenuVisible : !1;
}
function uo() {
  let e = so();
  Fn(e, `Missing controls context`);
  let t = e.m_fnSetMenuVisible;
  return ((0, N.useEffect)(() => (t(!0), () => t(!1)), [t]), e.m_refMenuLayer);
}
function fo(e, t) {
  let [n, r] = ho(e);
  return [n || t, r];
}
function po(e) {
  return e.pointerType == `touch` ? io : no;
}
function mo() {
  return ro;
}
function ho(e) {
  let [t, n] = vo(),
    r = (0, N.useRef)(void 0),
    i = (0, N.useRef)(!1),
    a = (0, N.useRef)({ element: void 0, bKeepControls: !1 }),
    o = (0, N.useCallback)(
      (e) => {
        if (e.target == a.current.element) return;
        let t = go(e);
        a.current = { element: e.target, bKeepControls: t };
      },
      [a],
    ),
    s = (0, N.useCallback)(
      (e) => {
        a.current.bKeepControls || i.current ? n(!0, 0) : n(!0, e);
      },
      [a, i, n],
    );
  (F(e),
    yo(
      e,
      (0, N.useCallback)(
        (e) => {
          ((i.current = e), s(no));
        },
        [i, s],
      ),
    ),
    bo(
      e,
      (0, N.useCallback)(() => {
        s(no);
      }, [s]),
    ));
  let c = (0, N.useCallback)(
      (e) => {
        e.pointerType != `touch` && (o(e), s(po(e)));
      },
      [s, o],
    ),
    l = (0, N.useCallback)(
      (e) => {
        e.pointerType != `touch` && (o(e), s(po(e)));
      },
      [o, s],
    ),
    u = (0, N.useCallback)(
      (e) => {
        e.pointerType != `touch` &&
          ((a.current = { element: void 0, bKeepControls: !1 }), s(mo()));
      },
      [a, s],
    ),
    d = (0, N.useCallback)(
      (e) => {
        r.current = e.currentTarget;
      },
      [r],
    ),
    f = (0, N.useCallback)(
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
      onPointerUp: (0, N.useCallback)(
        (e) => {
          let t = r.current;
          ((r.current = void 0), e.currentTarget == t && s(po(e)));
        },
        [s],
      ),
      onPointerCancel: f,
    },
  ];
}
function go(e) {
  let t = e.target,
    n = e.currentTarget;
  for (; t && t != n;) {
    if (t.dataset?.keepcontrols == `true`) return !0;
    t = t.parentElement;
  }
  return !1;
}
function _o(e) {
  let t = (0, N.useRef)(ao);
  return {
    onPointerDown: (0, N.useCallback)(
      (e) => {
        (e.pointerType !== `mouse` || e.button == 0) &&
          (e.currentTarget.setPointerCapture(e.pointerId),
          (t.current = e.pointerId));
      },
      [t],
    ),
    onPointerCancel: (0, N.useCallback)(
      (e) => {
        t.current == e.pointerId && (t.current = ao);
      },
      [t],
    ),
    onPointerUp: (0, N.useCallback)(
      (n) => {
        if (t.current != n.pointerId) return;
        (n.currentTarget.releasePointerCapture(n.pointerId), (t.current = ao));
        let r = n.currentTarget.getBoundingClientRect(),
          { clientX: i, clientY: a } = n;
        i >= r.left && i <= r.right && a >= r.top && a <= r.bottom && e(n);
      },
      [t, e],
    ),
  };
}
function vo() {
  let [e, t] = (0, N.useState)(!1),
    n = (0, N.useRef)(void 0),
    r = (0, N.useCallback)(
      (e, r) => {
        ((n.current &&= (window.clearTimeout(n.current), void 0)),
          t(e),
          e && r != 0 && (n.current = window.setTimeout(() => t(!1), r)));
      },
      [t],
    );
  return (
    (0, N.useEffect)(
      () => () => {
        n.current && window.clearTimeout(n.current);
      },
      [],
    ),
    [e, r]
  );
}
function yo(e, t) {
  let n = (0, N.useRef)(!0),
    r = F(e);
  (0, N.useEffect)(() => {
    let e = n.current;
    ((n.current = !1), (!e || r) && t(r));
  }, [r, t, n]);
}
function bo(e, t) {
  let n = (0, N.useRef)(!0),
    r = f(() => e.GetMuted());
  (0, N.useEffect)(() => {
    let e = n.current;
    ((n.current = !1), !e && t());
  }, [r, t, n]);
}
function xo(e) {
  let [t, n] = f(() => [e.GetMuted(), e.GetVolume()]);
  return [
    t,
    n,
    (0, N.useCallback)(
      (t) => {
        (e.SetMute(!1), e.SetVolume(t));
      },
      [e],
    ),
    (0, N.useCallback)(() => e.SetMute(!t), [t, e]),
  ];
}
function So(e) {
  return f(() => [
    e.GetPlaybackTime(),
    e.GetTimelineDuration(),
    e.GetBufferedEndTime(),
  ]);
}
function Co(e) {
  return f(() => e.GetFailureReason());
}
function F(e) {
  return f(() => e.IsPaused());
}
function wo(e) {
  return (0, N.useCallback)(() => {
    e.TogglePlayPause();
  }, [e]);
}
function To(e, t) {
  (0, N.useEffect)(() => {
    let n = o(() => {
      let n = e.GetMaxVideoDimensions();
      t(n ? { nWidth: n.nWidth, nHeight: n.nHeight } : null);
    });
    return () => n();
  }, [e, t]);
}
function Eo(e) {
  return f(() => e.HasPlaybackStarted());
}
function Do(e) {
  return f(() => ({
    bHasCaptions: e.HasCaptions(),
    bShowingCaption: e.IsShowingCaption(),
  }));
}
var Oo = `cOcEiRe-dIg-`,
  ko = `QkF4JCVWpWw-`,
  Ao = `_8RH876Wgr7A-`,
  jo = `b0G5PgYKHAM-`,
  Mo = `_68B-8ItOIlc-`,
  No = `GsDewiltMCM-`,
  Po = `BffT7IQWKYg-`,
  Fo = `aejFKWIp7Dg-`,
  Io = `eBjRkRA8NpA-`,
  Lo = `RrXwg35xzWc-`,
  Ro = `_98b2uQrBfN4-`,
  zo = `LCeQJ5hJTnk-`,
  Bo = `OPuK3adv80Y-`,
  Vo = `qFZtjvdCOxo-`,
  Ho = `vzX4l4uGgUg-`,
  Uo = `HOEA4Jz0kQU-`,
  Wo = `AAuicaihzn0-`,
  I = {};
((I.arabic = () =>
  j(() => import(`./chunk~15fc297361.js`), [], import.meta.url)),
  (I.brazilian = () =>
    j(() => import(`./chunk~271b0bde8a.js`), [], import.meta.url)),
  (I.bulgarian = () =>
    j(() => import(`./chunk~1cb30bbf4f.js`), [], import.meta.url)),
  (I.czech = () =>
    j(() => import(`./chunk~cbcc556ab5.js`), [], import.meta.url)),
  (I.danish = () =>
    j(() => import(`./chunk~5c75804a95.js`), [], import.meta.url)),
  (I.dutch = () =>
    j(() => import(`./chunk~8c0c792670.js`), [], import.meta.url)),
  (I.english = () =>
    j(() => import(`./chunk~e7d89a4199.js`), [], import.meta.url)),
  (I.finnish = () =>
    j(() => import(`./chunk~06f7875ba1.js`), [], import.meta.url)),
  (I.french = () =>
    j(() => import(`./chunk~3e87475e99.js`), [], import.meta.url)),
  (I.german = () =>
    j(() => import(`./chunk~914182d6d9.js`), [], import.meta.url)),
  (I.greek = () =>
    j(() => import(`./chunk~7176660b7d.js`), [], import.meta.url)),
  (I.hungarian = () =>
    j(() => import(`./chunk~87b3222571.js`), [], import.meta.url)),
  (I.indonesian = () =>
    j(() => import(`./chunk~5510fc6d67.js`), [], import.meta.url)),
  (I.italian = () =>
    j(() => import(`./chunk~643e72814a.js`), [], import.meta.url)),
  (I.japanese = () =>
    j(() => import(`./chunk~dfdc60a744.js`), [], import.meta.url)),
  (I.koreana = () =>
    j(() => import(`./chunk~3b423a4cf9.js`), [], import.meta.url)),
  (I.latam = () =>
    j(() => import(`./chunk~1e2e824c4a.js`), [], import.meta.url)),
  (I.malay = () =>
    j(() => import(`./chunk~3770e3453d.js`), [], import.meta.url)),
  (I.norwegian = () =>
    j(() => import(`./chunk~d4c8a21b7c.js`), [], import.meta.url)),
  (I.polish = () =>
    j(() => import(`./chunk~4d4be3bbe6.js`), [], import.meta.url)),
  (I.portuguese = () =>
    j(() => import(`./chunk~0145d99c18.js`), [], import.meta.url)),
  (I.romanian = () =>
    j(() => import(`./chunk~de571667db.js`), [], import.meta.url)),
  (I.russian = () =>
    j(() => import(`./chunk~8d38d8594a.js`), [], import.meta.url)),
  (I.sc_schinese = () =>
    j(() => import(`./chunk~57306d4383.js`), [], import.meta.url)),
  (I.schinese = () =>
    j(() => import(`./chunk~54799c0222.js`), [], import.meta.url)),
  (I.spanish = () =>
    j(() => import(`./chunk~853e04c5a4.js`), [], import.meta.url)),
  (I.swedish = () =>
    j(() => import(`./chunk~93b2fc55fc.js`), [], import.meta.url)),
  (I.tchinese = () =>
    j(() => import(`./chunk~72ca3fead7.js`), [], import.meta.url)),
  (I.thai = () =>
    j(() => import(`./chunk~9fe0450caa.js`), [], import.meta.url)),
  (I.turkish = () =>
    j(() => import(`./chunk~e65ab760ae.js`), [], import.meta.url)),
  (I.ukrainian = () =>
    j(() => import(`./chunk~4787f8286c.js`), [], import.meta.url)),
  (I.vietnamese = () =>
    j(() => import(`./chunk~31d1f07f01.js`), [], import.meta.url)));
async function Go(e) {
  if (I[e]) return await I[e]();
}
var L = tn(Go);
function Ko(e) {
  switch (e) {
    case 1:
      return L.Localize(`#StoreTrailer_Title_Category_Gameplay`);
    case 2:
      return L.Localize(`#StoreTrailer_Title_Category_Teaser`);
    case 3:
      return L.Localize(`#StoreTrailer_Title_Category_Cinematic`);
    case 4:
      return L.Localize(`#StoreTrailer_Title_Category_Update`);
    case 5:
      return L.Localize(`#StoreTrailer_Title_Category_Accolades`);
    case 6:
      return L.Localize(`#StoreTrailer_Title_Category_Interview`);
  }
  return L.Localize(`#StoreTrailer_Title_Category_Unknown`);
}
var qo = `12px`,
  Jo = `LzRinklSJ-4-`,
  Yo = `_2uk-hbrhKFI-`,
  Xo = `Y9S-qDK8XPE-`,
  Zo = 4,
  Qo = parseInt(qo);
function $o(e) {
  let { refButton: t, onClose: n, scroll: r, children: i } = e,
    a = (0, N.useRef)(null),
    [o, s] = (0, N.useState)({ nLeft: 0, nTop: 0 }),
    c = uo(),
    l = Lt(
      (e) => {
        if (((a.current = e), !e)) return;
        let r = (r) => {
          let i = Zn(e, r.target),
            a = Zn(t.current, r.target);
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
    ((0, N.useLayoutEffect)(() => {
      if (!a.current || !t.current || !c.current) return;
      let e = a.current.getBoundingClientRect(),
        n = c.current.getBoundingClientRect(),
        r = t.current.getBoundingClientRect(),
        i = n.right - n.left,
        o = r.right - r.left,
        l = r.left - n.left + o / 2,
        u = e.right - e.left,
        d = jn(l - u / 2, 0 + Zo, i - u - Zo),
        f = e.bottom - e.top,
        p = r.top - Qo - f - n.top;
      s({ nLeft: d, nTop: p });
    }, [a, t, c]),
    !c.current || !i)
  )
    return null;
  let u = { left: o.nLeft, top: o.nTop },
    d = E(Jo, !!r && `kaHR0KlvcO4-`),
    f = (0, M.jsx)(`div`, {
      ref: l,
      style: u,
      className: d,
      role: `menu`,
      children: i,
    });
  return lr.createPortal(f, c.current);
}
function es(e) {
  return (0, M.jsx)(`div`, { className: Xo, role: `separator` });
}
function ts(e) {
  let { onClick: t, checked: n, children: r } = e,
    [i, a] = Rn(),
    o = E(Yo, n && `vi2dzrdIGJY-`),
    s = `#2d73ff`,
    c = `#00ccff`;
  return (
    i && ((s = `#eeeeee`), (c = `#ffffff`)),
    (0, M.jsxs)(`div`, {
      className: o,
      role: `menuitemcheckbox`,
      "aria-checked": n,
      tabIndex: 0,
      onClick: t,
      onKeyDown: (e) => {
        (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), t());
      },
      ...a,
      children: [r, n && (0, M.jsx)(Vt, { color: s, highlightColor: c })],
    })
  );
}
function ns(e) {
  let { player: t, refButton: n, onClose: r } = e,
    i = Oa(),
    a = t.GetVideoRepresentations().map((e) => {
      let n = () => {
          (t.SetVideoRepresentation(e), r());
        },
        i = is(e);
      return (0, M.jsx)(
        ts,
        { onClick: n, checked: e.selected, children: i },
        e.id,
      );
    }),
    o = a.length > 1,
    s = !!i.m_fnSetAutoplayEnabled,
    c = o || !s;
  return (0, M.jsxs)($o, {
    refButton: n,
    onClose: r,
    children: [
      c && a,
      s && c && (0, M.jsx)(es, {}),
      s && (0, M.jsx)(rs, { onClose: r }),
    ],
  });
}
function rs(e) {
  let { onClose: t } = e,
    n = Oa(),
    r = n.m_bAutoplayEnabled == 1,
    i = (0, N.useCallback)(() => {
      (n.m_fnSetAutoplayEnabled && n.m_fnSetAutoplayEnabled(!r), t());
    }, [r, n, t]);
  return (
    N.use(L.Ready()),
    (0, M.jsx)(ts, {
      onClick: i,
      checked: r,
      children: L.Localize(`#StoreTrailer_AutoPlayVideos`),
    })
  );
}
function is(e) {
  return vt(e)
    ? L.Localize(`#TrailerPlayer_Quality_Auto`)
    : e.height == 2160
      ? `2160p (4k)`
      : `${e.height}p`;
}
function as(e) {
  let { player: t, refButton: n, onClose: r } = e,
    i = Hn(A.LANGUAGE),
    a = (0, N.useMemo)(() => {
      let e = [...t.GetCaptionRepresentations()],
        n = e.findIndex((e) => e.m_eLanguage == i);
      return (n > 0 && _n(e, n, 0), e);
    }, [i, t]),
    o = [];
  for (let e of a)
    (o.push(
      (0, M.jsx)(
        ts,
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
      e.m_eLanguage == i && o.push((0, M.jsx)(es, {})));
  return o.length == 0
    ? null
    : (0, M.jsx)($o, { refButton: n, onClose: r, scroll: !0, children: o });
}
var os = 4,
  ss = 130,
  R = N.forwardRef(function (e, t) {
    let {
        tooltip: n,
        onActivate: r,
        size: i,
        children: a,
        disableTooltip: o,
      } = e,
      s = lo(),
      c = _o(r);
    return (0, M.jsx)(ar, {
      toolTipContent: n,
      direction: `top`,
      usePointerEvents: !0,
      bDisabled: s || o,
      children: (0, M.jsx)(`div`, {
        ref: t,
        className: Oo,
        ...c,
        "data-keepcontrols": !0,
        children: a,
      }),
    });
  });
function cs(e) {
  let { player: t } = e,
    [n, r] = So(t),
    i = An(n, !1),
    a = An(r, !1);
  return (0, M.jsxs)(`div`, {
    className: ko,
    children: [
      (0, M.jsx)(`span`, { children: i }),
      (0, M.jsx)(`span`, { className: Ao, children: `/` }),
      (0, M.jsx)(`span`, { children: a }),
    ],
  });
}
function ls(e) {
  let t = Ba(),
    n = Va(t, `theater`);
  if (!t || !t.bSupportsTheater) return null;
  N.use(L.Ready());
  let r = t.strMode == `theater`,
    i = r ? (0, M.jsx)(ht, {}) : (0, M.jsx)(_t, {}),
    a = L.Localize(
      r
        ? `#TrailerPlayer_ExitTheater_Tooltip`
        : `#TrailerPlayer_EnterTheater_Tooltip`,
    );
  return (0, M.jsx)(R, { onActivate: n, tooltip: a, children: i });
}
function us(e) {
  let t = Ba(),
    n = Va(t, `fullscreen`);
  if (!t || !t.bSupportsFullscreen) return null;
  N.use(L.Ready());
  let r = t.strMode == `fullscreen`,
    i = r ? (0, M.jsx)(or, {}) : (0, M.jsx)(dt, {}),
    a = L.Localize(
      r
        ? `#TrailerPlayer_ExitFullScreen_Tooltip`
        : `#TrailerPlayer_FullScreen_Tooltip`,
    );
  return (0, M.jsx)(R, { onActivate: n, tooltip: a, children: i });
}
function ds(e) {
  let { player: t } = e,
    [n, r] = (0, N.useState)(!1),
    i = (0, N.useCallback)(() => r(!1), [r]),
    a = (0, N.useRef)(null),
    o = gn(),
    s = (0, N.useCallback)(() => {
      r((e) => !e);
    }, [r]),
    c = E(jo, n && `cXAaD-hLPZ0-`);
  return (
    N.use(L.Ready()),
    (0, M.jsxs)(M.Fragment, {
      children: [
        (0, M.jsx)(R, {
          ref: a,
          onActivate: s,
          tooltip: L.Localize(`#TrailerPlayer_Settings_Tooltip`),
          disableTooltip: o,
          children: (0, M.jsx)(on, { className: c }),
        }),
        n && (0, M.jsx)(ns, { player: t, refButton: a, onClose: i }),
      ],
    })
  );
}
function fs(e) {
  let { player: t } = e,
    [n, r] = (0, N.useState)(!1),
    i = (0, N.useCallback)(() => r(!1), [r]),
    a = (0, N.useRef)(null),
    { bHasCaptions: o, bShowingCaption: s } = Do(t),
    c = (0, N.useCallback)(() => {
      s ? t.DisableCaptions() : r((e) => !e);
    }, [r, t, s]);
  return (
    N.use(L.Ready()),
    o
      ? (0, M.jsxs)(M.Fragment, {
          children: [
            (0, M.jsxs)(R, {
              ref: a,
              onActivate: c,
              tooltip: L.Localize(`#TrailerPlayer_Captions_Tooltip`),
              children: [s && (0, M.jsx)($n, {}), !s && (0, M.jsx)(Vn, {})],
            }),
            n && (0, M.jsx)(as, { player: t, refButton: a, onClose: i }),
          ],
        })
      : null
  );
}
function ps(e) {
  let { player: t, showHoverThumb: n, onTouchSeek: r } = e;
  N.use(L.Ready());
  let i = (0, N.useRef)(null),
    [a, o, s] = So(t),
    [c, l] = vs(t, r),
    u = ms();
  lo() && (l = null);
  let d = gs(t);
  l || (d = void 0);
  let f = { display: `none` };
  l && ((f.left = l.nTickOffset), (f.display = `block`));
  let p = Tn(a, 0, o, 0, 100),
    m = Tn(s, 0, o, 0, 100),
    h = { width: `${p.toFixed(1)}%` },
    g = { width: `${m.toFixed(1)}%` },
    _ = (e) => {
      e.key === `Home`
        ? (e.preventDefault(), t.Seek(0))
        : e.key === `End` &&
          (e.preventDefault(), t.Seek(t.GetTimelineDuration()));
    },
    v = E(Mo, l && `OXlEV5w6w1E-`);
  return (0, M.jsxs)(`div`, {
    ref: u,
    className: v,
    "data-keepcontrols": !!l,
    role: `slider`,
    tabIndex: 0,
    "aria-label": L.Localize(`#TrailerPlayer_Seek_Label`),
    "aria-valuemin": 0,
    "aria-valuemax": Math.round(o),
    "aria-valuenow": Math.round(a),
    "aria-valuetext": `${An(a, !1)} / ${An(o, !1)}`,
    onClick: d,
    onKeyDown: _,
    onPointerMove: c.onPointerMove,
    onPointerLeave: c.onPointerLeave,
    onPointerDown: c.onPointerDown,
    onLostPointerCapture: c.onLostPointerCapture,
    children: [
      (0, M.jsxs)(`div`, {
        ref: i,
        className: No,
        onPointerEnter: c.onPointerEnter,
        children: [
          (0, M.jsx)(`div`, { className: E(Po, Fo), style: g }),
          (0, M.jsx)(`div`, { className: E(Po, Io), style: h }),
          (0, M.jsx)(`div`, { className: E(Lo), style: f }),
        ],
      }),
      (0, M.jsx)(hs, { refTimeline: i, hoverState: l, showHoverThumb: n }),
    ],
  });
}
function ms() {
  return Lt((e) => {
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
function hs(e) {
  let { refTimeline: t, hoverState: n, showHoverThumb: r } = e,
    i = (0, N.useRef)(null),
    [a, o] = (0, N.useState)({ nHoverLeft: 0, bFitsInParent: !1 });
  if (
    ((0, N.useLayoutEffect)(() => {
      if (!n || !i.current || !t.current) return;
      let e = t.current.getBoundingClientRect(),
        r = i.current.getBoundingClientRect(),
        a = e.right - e.left,
        s = r.right - r.left,
        c = jn(n.nTickOffset - s / 2, 0 + os, a - s - os),
        l = Cn(
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
    let e = ss / l.nThumbnailHeight;
    c = {
      width: `${l.nThumbnailWidth * e}px`,
      height: `${l.nThumbnailHeight * e}px`,
      backgroundImage: `url(${l.strTileURL})`,
      backgroundPosition: `-${l.x * e}px -${l.y * e}px`,
      backgroundSize: `${l.nImageWidth * e}px ${l.nImageHeight * e}px`,
      backgroundRepeat: `no-repeat`,
    };
  }
  return (0, M.jsxs)(`div`, {
    ref: i,
    style: s,
    className: Ro,
    children: [
      !!l && (0, M.jsx)(`div`, { style: c, className: `nCXGrQlbkbg-` }),
      (0, M.jsx)(`span`, {
        className: zo,
        children: rt(n.nPlaybackSeconds, !0),
      }),
    ],
  });
}
function gs(e) {
  return (0, N.useCallback)(
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
function _s(e, t, n) {
  let r = n - t.left,
    i = t.right - t.left;
  r = jn(r, 0, i);
  let a = r / i,
    o = Math.floor(e.GetTimelineDuration() * a),
    s = e.GetThumbnail(o);
  return s ? { nTickOffset: r, nPlaybackSeconds: o, thumbnail: s } : null;
}
function vs(e, t) {
  let [n, r] = (0, N.useState)(null),
    i = (0, N.useRef)(null),
    a = (0, N.useRef)(null);
  return [
    {
      onPointerEnter: (0, N.useCallback)(
        (t) => {
          if (t.pointerType != `mouse` && t.pointerType != `pen`) return;
          i.current = t.currentTarget;
          let n = _s(e, i.current.getBoundingClientRect(), t.clientX);
          r(n);
        },
        [i, r, e],
      ),
      onPointerMove: (0, N.useCallback)(
        (n) => {
          let o = i.current;
          if (((o ||= a.current), !o)) return;
          let s = _s(e, o.getBoundingClientRect(), n.clientX);
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
      onPointerLeave: (0, N.useCallback)(
        (e) => {
          i.current && ((i.current = null), r((e) => null));
        },
        [r],
      ),
      onPointerDown: (0, N.useCallback)(
        (n) => {
          ((a.current = n.currentTarget),
            a.current.setPointerCapture(n.pointerId),
            (document.body.style.userSelect = `none`));
          let i = _s(e, a.current.getBoundingClientRect(), n.clientX);
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
      onLostPointerCapture: (0, N.useCallback)(
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
function ys(e) {
  let { player: t } = e,
    n = Co(t);
  N.use(L.Ready());
  let r = ``;
  return (
    n == mt.UnsupportedMediaType
      ? (r = L.Localize(`#TrailerPlayer_Error_UnsupportedCodec`))
      : n != mt.Invalid && (r = L.Localize(`#TrailerPlayer_Error_Playback`)),
    r
      ? (0, M.jsx)(`div`, {
          className: Bo,
          children: (0, M.jsx)(`span`, { children: r }),
        })
      : null
  );
}
function bs(e) {
  let { player: t } = e,
    [n, r, i, a] = xo(t);
  N.use(L.Ready());
  let o = gn(),
    s = n ? (0, M.jsx)(Mt, {}) : (0, M.jsx)(Bt, {}),
    c = L.Localize(
      n ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
    );
  return (0, M.jsx)(R, {
    onActivate: a,
    tooltip: c,
    disableTooltip: o,
    children: s,
  });
}
function xs(e) {
  let { player: t } = e,
    n = F(t);
  N.use(L.Ready());
  let r = n ? (0, M.jsx)(ft, {}) : (0, M.jsx)(pt, {}),
    i = L.Localize(
      n ? `#TrailerPlayer_Play_Tooltip` : `#TrailerPlayer_Pause_Tooltip`,
    ),
    a = wo(t);
  return (0, M.jsx)(R, { onActivate: a, tooltip: i, children: r });
}
function Ss(e) {
  let { category: t, title: n } = e,
    r = Ko(t);
  return (0, M.jsxs)(`div`, {
    className: Vo,
    children: [
      (0, M.jsx)(`span`, { className: Ho, children: r }),
      (0, M.jsx)(`span`, { className: Uo }),
      (0, M.jsx)(`span`, { className: Wo, children: n }),
    ],
  });
}
function Cs(e, t, n) {
  let r = Eo(t),
    [i, a] = (0, N.useState)(``),
    o = (0, N.useRef)(0);
  ((0, N.useEffect)(() => {
    r &&
      !n &&
      i == `` &&
      (a(`active`), (o.current = window.setTimeout(() => a(`complete`), 4e3)));
  }, [r, n, i, o, a]),
    (0, N.useEffect)(() => {
      n && (a(`complete`), window.clearTimeout(o.current));
    }, [n]),
    (0, N.useEffect)(() => () => window.clearTimeout(o.current), []));
  let s = (0, N.useRef)(!1);
  return (
    i == `complete` && !n && (s.current = !0),
    e == `once` && s.current ? !1 : i == `active` || n
  );
}
var ws = 200,
  Ts = 5e3;
function Es(e) {
  let { player: t, category: n, title: r, focus: i } = e,
    a = (0, N.useRef)(null),
    o = (0, N.useRef)(null),
    [s, c] = fo(t, !1),
    [l, u] = (0, N.useState)(!1),
    d = co(l, u, a);
  s ||= l;
  let f = Ds(t),
    p = zt(!!i),
    m = E(Wa, s && `YnJEGhfB0wI-`);
  return (0, M.jsx)(oo.Provider, {
    value: d,
    children: (0, M.jsxs)(`div`, {
      ref: p,
      className: m,
      ...c,
      onKeyDown: f,
      tabIndex: 0,
      children: [
        (0, M.jsxs)(`div`, {
          className: Ga,
          children: [
            (0, M.jsx)(As, { player: t, enabled: s && !l }),
            (0, M.jsx)(Ms, {}),
            (0, M.jsxs)(to, {
              ref: o,
              className: Ja,
              children: [
                (0, M.jsx)(ps, { player: t, showHoverThumb: !0 }),
                (0, M.jsxs)(`div`, {
                  className: Ya,
                  children: [
                    (0, M.jsxs)(`div`, {
                      className: Xa,
                      children: [
                        (0, M.jsx)(xs, { player: t }),
                        (0, M.jsx)(Ns, { player: t, refControlsHover: o }),
                        (0, M.jsx)(cs, { player: t }),
                      ],
                    }),
                    (0, M.jsxs)(`div`, {
                      className: Za,
                      children: [
                        (0, M.jsx)(fs, { player: t }),
                        (0, M.jsx)(ds, { player: t }),
                        (0, M.jsx)(ls, {}),
                        (0, M.jsx)(us, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, M.jsx)(ks, {
          player: t,
          controlsVisible: s,
          category: n,
          title: r,
        }),
        (0, M.jsx)(`div`, { ref: a, className: $a }),
      ],
    }),
  });
}
function Ds(e) {
  let t = Va(Ba(), `fullscreen`);
  return (0, N.useCallback)(
    (n) => {
      n.repeat ||
        (n.code == `Space`
          ? (e.TogglePlayPause(), n.preventDefault())
          : n.code == `ArrowLeft`
            ? e.SeekRelative(-5)
            : n.code == `ArrowRight`
              ? e.SeekRelative(Ts / 1e3)
              : n.key == `f` || n.key == `F`
                ? (t(), n.preventDefault())
                : (n.key == `m` || n.key == `M`) &&
                  (e.SetMute(!e.GetMuted()), n.preventDefault()));
    },
    [e, t],
  );
}
function Os(e, t) {
  let n = (0, N.useRef)(null),
    r = (0, N.useRef)(1),
    i = (0, N.useRef)(0),
    [a, o] = (0, N.useState)([]),
    s = (0, N.useCallback)(
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
            : (i.current = window.setTimeout(l, ws))
          : l();
      },
      [n, i, e, o, t],
    ),
    c = (0, N.useCallback)(
      (e) => {
        o((t) => t.filter((t) => t.nID != e));
      },
      [o],
    );
  return (
    (0, N.useEffect)(
      () => () => {
        (window.clearTimeout(i.current), (i.current = 0));
      },
      [i],
    ),
    { refBackground: n, inputEvents: _o(s), clickEvents: a, fnRemoveEvent: c }
  );
}
function ks(e) {
  let { player: t, controlsVisible: n, category: r, title: i } = e,
    a = Cs(`once`, t, n);
  if (r == 0 || !i) return null;
  let o = E(qa, a && `YnJEGhfB0wI-`);
  return (0, M.jsx)(`div`, {
    className: o,
    children: (0, M.jsx)(Ss, { category: r, title: i }),
  });
}
function As(e) {
  let { player: t, enabled: n } = e,
    {
      refBackground: r,
      inputEvents: i,
      clickEvents: a,
      fnRemoveEvent: o,
    } = Os(t, Va(Ba(), `fullscreen`)),
    s = E(Ha, n && `T3UUyZ88ees-`);
  return (0, M.jsx)(`div`, {
    ref: r,
    className: s,
    ...i,
    children: a.map((e) =>
      (0, M.jsx)(js, { event: e, removeEvent: o }, `icon_${e.nID}`),
    ),
  });
}
function js(e) {
  let { event: t, removeEvent: n } = e,
    r = t.nID,
    i = (0, N.useCallback)(() => {
      n(r);
    }, [r, n]),
    a = null;
  return (
    t.eState == Aa.Play
      ? (a = (0, M.jsx)(ft, {}))
      : t.eState == Aa.Pause && (a = (0, M.jsx)(pt, {})),
    (0, M.jsx)(`div`, { className: Ua, onAnimationEnd: i, children: a })
  );
}
function Ms(e) {
  return (0, M.jsx)(`div`, { className: Ka });
}
function Ns(e) {
  let { player: t, refControlsHover: n } = e,
    [r, i, a, o] = xo(t),
    [s, c] = Ps(n),
    l;
  l =
    r || i === 0
      ? (0, M.jsx)(Mt, {})
      : i < 0.3
        ? (0, M.jsx)(Jt, {})
        : i < 0.6
          ? (0, M.jsx)(Et, {})
          : (0, M.jsx)(Bt, {});
  let u = L.Localize(
    r ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
  );
  return (0, M.jsxs)(`div`, {
    className: Qa,
    onMouseEnter: c,
    "data-keepcontrols": !0,
    children: [
      (0, M.jsx)(R, { onActivate: o, tooltip: u, children: l }),
      s &&
        (0, M.jsx)(`div`, {
          className: `KiYQJsCfGxI-`,
          children: (0, M.jsx)(Kt, {
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
function Ps(e) {
  let [t, n] = (0, N.useState)(!1),
    r = (0, N.useCallback)(() => n(!0), [n]);
  return (
    Ht(e, `mouseleave`, (e) => {
      e.target == e.currentTarget && n(!1);
    }),
    [t, r]
  );
}
var Fs = `WRCisr6uZYw-`,
  Is = `gbdFcNy5G4k-`,
  Ls = `lX5nIJvBefY-`,
  Rs = `iAXbsgjjZHI-`,
  zs = `-EEbXf-3XVE-`,
  Bs = `iFREa-vsmpo-`,
  Vs = `AP1io-MKcDs-`,
  Hs = `Bxu-c02i-fA-`,
  Us = `pYxY-oYjIxc-`,
  Ws = `xbX-APAH9aY-`,
  Gs = `RjlRnmjZiYM-`,
  Ks = 3e3,
  qs = 1e3;
function Js(e) {
  let { player: t, category: n, title: r } = e,
    i = (0, N.useRef)(null),
    [a, o] = Ys(i, t, !1),
    s = (0, N.useRef)(null),
    [c, l] = (0, N.useState)(!1),
    u = co(c, l, s);
  a ||= c;
  let [d, f] = ec(t),
    p = E(Is, a && `CjbQpCvOpk4-`),
    m = E(Bs, !!d && `X3KS6LYOx9o-`);
  return (0, M.jsx)(oo.Provider, {
    value: u,
    children: (0, M.jsxs)(`div`, {
      className: Fs,
      ...o,
      children: [
        (0, M.jsxs)(`div`, {
          ref: i,
          className: p,
          children: [
            (0, M.jsx)($s, { thumbnail: d }),
            (0, M.jsx)(Qs, {}),
            (0, M.jsx)(`div`, {
              className: m,
              children: (0, M.jsx)(tc, { player: t }),
            }),
            (0, M.jsxs)(`div`, {
              className: Hs,
              children: [
                (0, M.jsx)(ps, {
                  player: t,
                  onTouchSeek: f,
                  showHoverThumb: !1,
                }),
                (0, M.jsxs)(`div`, {
                  className: Us,
                  children: [
                    (0, M.jsx)(`div`, {
                      className: Ws,
                      children: (0, M.jsx)(cs, { player: t }),
                    }),
                    (0, M.jsxs)(`div`, {
                      className: Gs,
                      children: [
                        (0, M.jsx)(bs, { player: t }),
                        (0, M.jsx)(fs, { player: t }),
                        (0, M.jsx)(ds, { player: t }),
                        (0, M.jsx)(us, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, M.jsx)(Zs, {
          player: t,
          controlsVisible: a,
          category: n,
          title: r,
        }),
        (0, M.jsx)(`div`, { ref: s, className: void 0 }),
      ],
    }),
  });
}
function Ys(e, t, n) {
  let [r, i] = Xs(e, t);
  return ((r ||= n), [r, i]);
}
function Xs(e, t) {
  let [n, r] = vo(),
    i = (0, N.useRef)(null),
    a = (0, N.useRef)(!0),
    o = F(t);
  return (
    (0, N.useEffect)(() => {
      let e = a.current;
      ((a.current = !1), (!e || o) && r(!0, o ? 0 : qs));
    }, [o, r, a]),
    [
      n,
      {
        onPointerDown: (0, N.useCallback)(
          (e) => {
            i.current = e.target;
          },
          [i],
        ),
        onPointerCancel: (0, N.useCallback)(
          (e) => {
            i.current = null;
          },
          [i],
        ),
        onPointerUp: (0, N.useCallback)(
          (t) => {
            let a = i.current;
            if (((i.current = null), a == null)) return;
            let s = o ? 0 : Ks;
            t.target != a || e.current != a ? r(!0, s) : r(!n, s);
          },
          [r, e, o, n],
        ),
      },
    ]
  );
}
function Zs(e) {
  let { player: t, controlsVisible: n, category: r, title: i } = e,
    a = Cs(`standard`, t, n);
  if (r == 0 || !i) return null;
  let o = E(zs, a && !n && `lwGDx-ob6f4-`, n && `FEfadjF0-XY-`);
  return (0, M.jsx)(`div`, {
    className: o,
    children: (0, M.jsx)(Ss, { category: r, title: i }),
  });
}
function Qs(e) {
  return (0, M.jsx)(`div`, { className: Ls });
}
function $s(e) {
  let { thumbnail: t } = e,
    [n, r] = (0, N.useState)(null),
    i = (0, N.useCallback)(
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
  return (0, M.jsx)(`div`, {
    ref: i,
    className: Rs,
    children: (0, M.jsx)(`div`, { style: a, className: void 0 }),
  });
}
function ec(e) {
  let [t, n] = (0, N.useState)(null),
    r = (0, N.useRef)(!1),
    i = (0, N.useRef)(null);
  return [
    t,
    N.useCallback(
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
function tc(e) {
  let { player: t } = e,
    n = F(t),
    r = _o(wo(t)),
    i = n ? (0, M.jsx)(ft, {}) : (0, M.jsx)(pt, {});
  return (0, M.jsx)(`div`, { className: Vs, ...r, children: i });
}
var nc = `_3uW6UUMmrCg-`,
  rc = `fqgqcMMEHV0-`,
  ic = `_6koTzpHyyWw-`,
  ac = `wz7DrfLBweo-`,
  oc = `qHxUvsFtfPA-`,
  sc = `Mq-yAxjkoj4-`,
  cc = `v15xRo4R128-`,
  lc = `_5mPY672VSPM-`,
  uc = `rlgvACT4pJc-`,
  dc = 3e3,
  fc = 1500;
function pc(e) {
  let { player: t, category: n, title: r } = e,
    [i, a] = mc(t, !1),
    o = F(t),
    s = hc(t, a),
    c = wo(t),
    [l, u, d, f] = xo(t),
    p = (0, N.useCallback)(() => {
      (f(), a());
    }, [f, a]),
    m = (0, N.useCallback)(
      (e) => {
        !t.IsPaused() && e.currentTarget == e.target && t.TogglePlayPause();
      },
      [t],
    ),
    h = (0, N.useRef)(null),
    [g, _] = (0, N.useState)(!1),
    v = co(g, _, h),
    y = l ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
    b = o ? `#TrailerPlayer_Play_Tooltip` : `#TrailerPlayer_Pause_Tooltip`,
    x = E(rc, i && `wXx6UBVpmP0-`);
  return (0, M.jsx)(oo.Provider, {
    value: v,
    children: (0, M.jsxs)(Wt, {
      className: nc,
      focusable: !0,
      onClick: m,
      onOKActionDescription: L.Localize(b),
      onOKButton: c,
      onSecondaryButton: p,
      onSecondaryActionDescription: L.Localize(y),
      onButtonDown: s,
      children: [
        (0, M.jsxs)(`div`, {
          className: x,
          children: [
            (0, M.jsx)(_c, {}),
            (0, M.jsxs)(`div`, {
              className: oc,
              children: [
                (0, M.jsx)(ps, { player: t, showHoverThumb: !1 }),
                (0, M.jsxs)(`div`, {
                  className: sc,
                  children: [
                    (0, M.jsxs)(`div`, {
                      className: cc,
                      children: [
                        (0, M.jsx)(xs, { player: t }),
                        (0, M.jsx)(cs, { player: t }),
                      ],
                    }),
                    (0, M.jsx)(`div`, {
                      className: lc,
                      children: (0, M.jsx)(bs, { player: t }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, M.jsx)(gc, {
          player: t,
          controlsVisible: i,
          category: n,
          title: r,
        }),
        (0, M.jsx)(`div`, { ref: h, className: void 0 }),
      ],
    }),
  });
}
function mc(e, t) {
  let [n, r] = vo(),
    i = (0, N.useRef)(!0),
    a = F(e);
  return (
    (0, N.useEffect)(() => {
      let e = i.current;
      ((i.current = !1), (!e || a) && r(!0, a ? 0 : fc));
    }, [a, r, i]),
    [
      n,
      (0, N.useCallback)(() => {
        r(!0, dc);
      }, [r]),
    ]
  );
}
function hc(e, t) {
  return (0, N.useCallback)(
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
function gc(e) {
  let { player: t, controlsVisible: n, category: r, title: i } = e,
    a = Cs(`standard`, t, n);
  if (r == 0 || !i) return null;
  let o = E(ic, a && `wXx6UBVpmP0-`);
  return (0, M.jsx)(`div`, {
    className: o,
    children: (0, M.jsx)(`div`, {
      className: ac,
      children: (0, M.jsx)(Ss, { category: r, title: i }),
    }),
  });
}
function _c(e) {
  return (0, M.jsx)(`div`, { className: uc });
}
var vc = 500,
  yc = `responsive_menu_ignore_touch`;
function bc(e) {
  return Ba()
    ? (0, M.jsx)(N.Suspense, {
        children: (0, M.jsx)(xc, { ...e, localContext: !1 }),
      })
    : (0, M.jsx)(N.Suspense, {
        children: (0, M.jsx)(za, {
          iosVideoFallback: !0,
          supportsTheater: !1,
          supportsFullscreen: !0,
          children: (0, M.jsx)(xc, { ...e, localContext: !0 }),
        }),
      });
}
function xc(e) {
  let {
    ref: t,
    dashManifests: n,
    hlsManifest: r,
    captionManifest: i,
    screenshot: a,
    forcePause: o,
    onPlaybackStart: s,
    onPlaybackEnd: c,
    onPlayPauseChange: l,
    onMuteChange: u,
    uiMode: d,
    altText: p,
    title: m,
    category: h,
    statsURL: g,
    muteWhenAutoplayBlocked: _,
    localContext: v,
    focus: y,
  } = e;
  ((m ||= ``), (h ||= 0));
  let [b, x] = ja(n, r, i, g, c, l, u);
  (Sc(t, x), Ma(x, !!_));
  let [ee, S] = Cc(x),
    C = Ba(),
    te = v && C ? C.refFullscreen : null,
    ne = jt(ee, te),
    re = Na(x, !!o),
    ie = re ? void 0 : b,
    ae = {};
  S && ((ae.width = `${S.nWidth}px`), (ae.height = `${S.nHeight}px`));
  let oe = f(() => x.IsBuffering());
  (N.useEffect(() => {
    oe || (s && s());
  }, [oe, s]),
    N.use(L.Ready()));
  let se = E(Sa, yc);
  return (0, M.jsxs)(`div`, {
    ref: ne,
    className: se,
    "data-trailer-player": !0,
    children: [
      (0, M.jsx)(`video`, {
        ref: ie,
        style: ae,
        controls: !1,
        playsInline: !0,
        "aria-label": p,
        crossOrigin: `anonymous`,
      }),
      (0, M.jsx)(wc, { player: x, uiMode: d, category: h, title: m, focus: y }),
      (0, M.jsx)(Tc, { player: x }),
      !re && (0, M.jsx)(Ec, { player: x, screenshot: a }),
      !re && (0, M.jsx)(ys, { player: x }),
    ],
  });
}
function Sc(e, t) {
  (0, N.useImperativeHandle)(
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
function Cc(e) {
  let t = (0, N.useRef)(null),
    n = (0, N.useRef)(null),
    r = (0, N.useRef)(null),
    i = Nn(),
    a = (0, N.useCallback)(() => {
      let e = n.current,
        a = t.current;
      if (!e || !a) return;
      let [o, s] = ir(a.nWidth, a.nHeight, e.nWidth, e.nHeight);
      ((o = e.nWidth - o < 2 ? e.nWidth : Math.ceil(o)),
        (s = e.nHeight - s < 2 ? e.nHeight : Math.ceil(s)));
      let c = r.current;
      (c && c.nWidth == o && c.nHeight == s) ||
        ((r.current = { nWidth: o, nHeight: s }), i());
    }, [t, n, r, i]);
  To(
    e,
    (0, N.useCallback)(
      (e) => {
        ((t.current = e), a());
      },
      [t, a],
    ),
  );
  let o = (0, N.useCallback)(
    (e) => {
      ((n.current = {
        nWidth: e.contentRect.width,
        nHeight: e.contentRect.height,
      }),
        a());
    },
    [n, a],
  );
  return [Rt(o), r.current];
}
function wc(e) {
  let { player: t, uiMode: n, category: r, title: i, focus: a } = e,
    o = dn(),
    s = gn();
  return (
    (n && n != `auto`) || (n = Zt() || s ? `touch` : o ? `gamepad` : `desktop`),
    n == `touch`
      ? (0, M.jsx)(Js, { player: t, category: r, title: i })
      : n == `gamepad`
        ? (0, M.jsx)(pc, { player: t, category: r, title: i })
        : (0, M.jsx)(Es, { player: t, category: r, title: i, focus: a })
  );
}
function Tc(e) {
  let { player: t } = e,
    [n, r] = (0, N.useState)(`norender`),
    i = f(() => t.IsBuffering());
  ((0, N.useEffect)(() => {
    if (!i) return;
    let e = window.setTimeout(() => r(`fadein`), 1e3);
    return () => {
      e && window.clearTimeout(e);
    };
  }, [i, r]),
    (0, N.useEffect)(() => {
      if (i) return;
      r(`fadeout`);
      let e = window.setTimeout(() => r(`norender`), 300);
      return () => window.clearTimeout(e);
    }, [i, r]));
  let a = n != `norender`,
    o = E(Ca, n == `fadein` && `ZxF0VUYsuGU-`);
  return (0, M.jsx)(`div`, {
    className: o,
    children: a && (0, M.jsx)(Te, { size: `large`, position: `center` }),
  });
}
function Ec(e) {
  let { player: t, screenshot: n } = e,
    r = f(() => t.GetUserInputNeeded()),
    i = Tt(r, vc),
    [a, o] = (0, N.useState)(!1),
    s = N.useCallback(() => {
      (t.UserInputReceived(), o(!0));
    }, [t]);
  if (
    (N.useEffect(() => {
      if (!a) return;
      let e = setTimeout(() => o(!1), 500);
      return () => clearTimeout(e);
    }, [a]),
    !i)
  )
    return null;
  N.use(L.Ready());
  let c = {};
  return (
    n && (c.backgroundImage = `url('${n}')`),
    (0, M.jsx)(`div`, {
      style: c,
      className: wa,
      role: `button`,
      tabIndex: 0,
      "aria-label": L.Localize(`#TrailerPlayer_Play_Tooltip`),
      onClick: s,
      onKeyDown: (e) => {
        (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), s());
      },
      children: (0, M.jsx)(`div`, {
        className: E(Ta, a && `_5fVtqw5G7SE-`),
        children: (0, M.jsx)(ft, {}),
      }),
    })
  );
}
var Dc = `v87a6zGhXmo-`,
  Oc = `XkrNZp-zaXw-`;
function kc(...e) {
  return e.join(` `);
}
var Ac = `_7OxSOadMubQ-`,
  jc = `_5tpsR11QFTo-`,
  Mc = `_4av218OCtYs-`,
  Nc = `RylL--hTWB0-`,
  Pc = `mGOBKozFlf0-`,
  Fc = `kTZDgZ5dX-8-`,
  Ic = `WDTUiOfZjRM-`,
  Lc = `bgTVZST3FaE-`,
  Rc = `B4zxAgrjjQU-`,
  zc = `ZQJlDRLSD2I-`,
  Bc = `NxfxOoNRnJc-`,
  Vc = `_6hGeFUDe5X0-`,
  Hc = `rs5MCL6BI2A-`,
  Uc = `iRWZX4LtE-Q-`,
  Wc = `_5yccD-xlOTc-`;
function Gc(e) {
  let { name: t, trailerCategory: n, trailerDisplay: r, mouseOver: i } = e,
    [a, o] = N.useState(!1);
  if (
    (N.useEffect(() => {
      r != 0 && o(!0);
    }, [r]),
    N.useEffect(() => {
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
  let s = r == 1 ? rr.Localize(`#StoreTrailer_Title_TrailerPreview`) : Ko(n);
  return (0, M.jsx)(`div`, {
    className: E({ [Hc]: !0, [Wc]: a }),
    children: rr.LocalizeReact(
      `#StoreTrailer_Title_Combiner`,
      (0, M.jsx)(`span`, { className: Uc, children: s }),
      t,
    ),
  });
}
function Kc(e) {
  let { id: t, bPopOutTrailerPlayback: n } = e,
    { data: r } = rn(t),
    i = tt(t),
    { data: a } = Yt(t),
    [o, s] = (0, N.useState)(!1),
    [c, l] = (0, N.useState)(!1),
    u = Wn(),
    d = r?.highlights?.filter((e) => !u || e.all_ages),
    f = d && d?.length > 0 ? d[0] : void 0,
    p = N.useCallback(() => {
      f && (n ? l(!0) : s((e) => !e));
    }, [f, n]);
  if (!a)
    return (0, M.jsx)(`div`, {
      className: E(jc, Ac),
      children: (0, M.jsx)(Te, { size: `medium` }),
    });
  let m = f
    ? (0, M.jsx)(Qc, { trailer: f, bPlayVideo: o, fnTogglePlayTrailer: p })
    : null;
  return !f && !i?.length
    ? null
    : (0, M.jsxs)(`div`, {
        className: E(jc, Ac),
        children: [
          (0, M.jsx)(qc, {
            elFeaturedInCenter: m,
            trailer: f,
            id: t,
            name: a.name || ``,
          }),
          n
            ? (0, M.jsx)(Yc, { id: t, bShowModal: c, hideModal: () => l(!1) })
            : (0, M.jsx)(Jc, {
                name: a.name || ``,
                trailer: f,
                bPlayVideo: o,
                fnTogglePlayTrailer: p,
                bControls: !0,
              }),
        ],
      });
}
function qc(e) {
  let {
      elFeaturedInCenter: t,
      id: n,
      name: r,
      trailer: i,
      featureElementclassName: a,
      bUseTrailerAsFirstThumb: o,
      bNoScreenShotModals: s,
    } = e,
    [c, l] = N.useState(void 0),
    [u, d] = ee(),
    f = tt(n),
    p = (0, N.useRef)(null),
    [m, h] = (0, N.useState)(0);
  if (!n) return null;
  let g = t || (c !== void 0 && c !== -1) ? c : 0,
    _ = [],
    v = [];
  if (
    (o &&
      i &&
      (_.push(
        (0, M.jsx)(
          Qc,
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
        (0, M.jsx)(
          Jc,
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
          (0, M.jsx)(
            `div`,
            {
              className: E({ [Ic]: !0, [Fc]: !s }),
              onMouseEnter: () => l(a),
              children: s
                ? (0, M.jsx)(`img`, { src: t, alt: r })
                : (0, M.jsx)(`button`, {
                    type: `button`,
                    className: Lc,
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
                    children: (0, M.jsx)(`img`, { src: t, alt: r }),
                  }),
            },
            n + `_small_` + t,
          ),
        ),
          v.push(
            (0, M.jsx)(
              `div`,
              {
                className: Pc,
                children: (0, M.jsx)(`img`, { src: i, alt: r }),
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
  return (0, M.jsxs)(M.Fragment, {
    children: [
      d,
      (0, M.jsx)(`div`, {
        className: a || `_4av218OCtYs-`,
        children:
          t && (g === -1 || g === void 0)
            ? (0, M.jsx)(M.Fragment, { children: t })
            : (0, M.jsx)(M.Fragment, { children: g !== void 0 && v[g] }),
      }),
      y.length > 0 &&
        (0, M.jsxs)(`div`, {
          className: `zPYR9--wLLQ-`,
          onMouseLeave: () => l(-1),
          children: [
            y,
            b.map((e, t) =>
              (0, M.jsx)(
                `div`,
                { className: `WDTUiOfZjRM-` },
                `app_${qn(n)}_${t}`,
              ),
            ),
          ],
        }),
    ],
  });
}
function Jc(e) {
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
    ((0, N.useEffect)(() => {
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
  let c = E(Bc, a && `B4zxAgrjjQU-`);
  return (0, M.jsxs)(`div`, {
    className: c,
    onClick: o,
    role: `presentation`,
    children: [
      (0, M.jsx)(Gc, {
        name: n,
        trailerCategory: r.trailer_category,
        trailerDisplay: 1,
        mouseOver: !1,
      }),
      !!(a && r.microtrailer) &&
        (0, M.jsx)(`video`, {
          className: `YL-tCU7ggsU-`,
          ref: t,
          controls: i,
          autoPlay: !0,
          loop: !0,
          muted: !0,
          poster: s != null && s > 0 ? void 0 : r.screenshot_full,
          children: r.microtrailer?.map((e) =>
            A.IN_CLIENT && e.type == `video/mp4`
              ? null
              : (0, M.jsx)(
                  `source`,
                  { src: Ot(r, e.filename || ``), type: e.type },
                  e.filename,
                ),
          ),
        }),
      i &&
        (0, M.jsx)(`button`, {
          type: `button`,
          className: `wrm1TrwYv0M-`,
          "aria-label": k(`#Button_Close`),
          children: (0, M.jsx)(xn, {}),
        }),
    ],
  });
}
function Yc(e) {
  return e.bShowModal ? (0, M.jsx)(Xc, { ...e }) : null;
}
function Xc(e) {
  let { id: t, bShowModal: n, trailerBaseID: r, hideModal: i } = e,
    { data: a } = Yt(t),
    o = hn(t),
    s = (0, N.useMemo)(() => {
      if (o && o.length != 0) {
        if (r) {
          let e = o.find((e) => e.trailer_base_id == r);
          if (e) return e;
        }
        return o[0];
      }
    }, [o, r]),
    c = N.useId(),
    l = N.useId(),
    {
      rgDashTrailers: u,
      rgHlsTrailers: d,
      strCaptionManufest: f,
      strScreenshot: p,
    } = (0, N.useMemo)(() => {
      if (!s)
        return {
          rgDashTrailers: [],
          rgHlsTrailers: [],
          strCaptionManufest: ``,
          strScreenshot: ``,
        };
      let { rgDashTrailers: e, rgHlsTrailers: t } = Ft(s);
      return {
        rgDashTrailers: e,
        rgHlsTrailers: t,
        strCaptionManufest: nn(s),
        strScreenshot: sn(s),
      };
    }, [s]);
  return !s || !s.adaptive_trailers || u.length == 0
    ? null
    : (0, M.jsx)(At, {
        active: n,
        children: (0, M.jsxs)(vn, {
          "aria-labelledby": kc(c, l),
          bAllowFullSize: !0,
          bOKDisabled: !0,
          closeModal: i,
          children: [
            (0, M.jsx)(`div`, {
              className: Vc,
              children: (0, M.jsx)(bc, {
                dashManifests: u,
                hlsManifest: d[0] || ``,
                screenshot: p,
                altText: s.trailer_name,
                muteWhenAutoplayBlocked: !0,
                captionManifest: f,
              }),
            }),
            (0, M.jsx)(`div`, {
              id: c,
              style: { display: `none` },
              children: a?.name || ``,
            }),
            (0, M.jsx)(`div`, {
              id: l,
              style: { display: `none` },
              children: s.trailer_name,
            }),
          ],
        }),
      });
}
function Zc(e) {
  let { appid: t, trailerBaseID: n, bShowModal: r, hideModal: i } = e,
    a = (0, N.useMemo)(() => ({ appid: t }), [t]);
  return (0, M.jsx)(Yc, {
    id: a,
    trailerBaseID: n,
    bShowModal: r,
    hideModal: i,
  });
}
function Qc(e) {
  let {
    trailer: t,
    fnTogglePlayTrailer: n,
    bPlayVideo: r,
    onMouseEnter: i,
    onMouseLeave: a,
  } = e;
  return (0, M.jsxs)(`div`, {
    className: E({ [Nc]: !r, [Rc]: r, [Ic]: !0 }),
    onClick: n,
    onMouseEnter: i,
    onMouseLeave: a,
    role: `presentation`,
    children: [
      (0, M.jsx)(`img`, { src: sn(t), alt: t.trailer_name }),
      (0, M.jsx)(`button`, {
        type: `button`,
        className: zc,
        "aria-label": k(`#Playback_Play_Tooltip`),
        children: (0, M.jsx)(Kn, {}),
      }),
    ],
  });
}
var $c = (function (e) {
  return (
    (e.k_TrailerAsButton = `button`),
    (e.k_TrailerAsPill = `pill`),
    (e.k_TrailerAsFull = `full`),
    (e.k_TrailerAsPoster = `poster`),
    (e.k_TrailerAsMicro = `micro`),
    e
  );
})({});
function el(e) {
  let {
      embedStyle: t,
      appid: n,
      color: r,
      bgcolor: i,
      children: a,
      trailerBaseID: o,
      subtitles: s,
    } = e,
    [c, l] = (0, N.useState)(!1),
    u = (0, N.useMemo)(() => ({ appid: n }), [n]);
  switch (t) {
    case `button`:
    case `pill`:
      return (0, M.jsxs)(M.Fragment, {
        children: [
          (0, M.jsxs)(`button`, {
            type: `button`,
            className: E({ [Dc]: t == `pill`, [Oc]: t == `button` }),
            onClick: () => l(!0),
            style: { color: r, backgroundColor: i },
            children: [(0, M.jsx)(Kn, {}), a || k(`#EventEmail_WatchNow`)],
          }),
          (0, M.jsx)(Yc, {
            id: u,
            bShowModal: c,
            trailerBaseID: o,
            hideModal: () => l(!1),
          }),
        ],
      });
    default:
    case `full`:
      return (0, M.jsx)(tl, { ...e });
  }
}
function tl(e) {
  let { appid: t, trailerBaseID: n } = e,
    r = ue(t),
    { data: i } = Yt(r),
    [a, o] = (0, N.useState)(() =>
      !t || !n ? k(`#TrailerPlayer_ID_NotProvided`) : null,
    ),
    s = hn(r),
    c = (0, N.useMemo)(
      () => (s ? s.find((e) => e.trailer_base_id === n) : null),
      [s, n],
    );
  return (
    (0, N.useEffect)(() => {
      (i?.unvailable_for_country_restriction &&
        o(k(`#TrailerPlayer_CouldNotLoad`, t, n)),
        s &&
          !c &&
          o(k(`#TrailerPlayer_CouldNotLoad`, e.appid, e.trailerBaseID)));
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
        ? (0, M.jsx)(`div`, { className: ve, children: a })
        : null
      : c
        ? (0, M.jsx)(nl, { trailerToPlay: c })
        : (0, M.jsx)(Te, { string: k(`#Loading`), size: `small` })
  );
}
function nl(e) {
  let { trailerToPlay: t } = e,
    {
      rgDashTrailers: n,
      rgHlsTrailers: r,
      strCaptionManufest: i,
    } = (0, N.useMemo)(() => {
      let { rgDashTrailers: e, rgHlsTrailers: n } = Ft(t);
      return { rgDashTrailers: e, rgHlsTrailers: n, strCaptionManufest: nn(t) };
    }, [t]);
  return n?.length == 0
    ? null
    : (0, M.jsx)(`div`, {
        className: Vc,
        children: (0, M.jsx)(bc, {
          dashManifests: n || [],
          hlsManifest: (r.length > 0 && r?.[0]) || ``,
          screenshot: sn(t),
          altText: t.trailer_name,
          muteWhenAutoplayBlocked: !0,
          captionManifest: i,
        }),
      });
}
function rl(e, t) {
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
function il(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? rl(Object(n), !0).forEach(function (t) {
          V(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : rl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function z(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function al(e, t) {
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
    t && al(e.prototype, t),
    n && al(e, n),
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
    t && sl(e, t));
}
function ol(e) {
  return (ol = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function sl(e, t) {
  return (sl = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        return ((e.__proto__ = t), e);
      })(e, t);
}
function cl() {
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
function ll(e, t) {
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
    i = ll(e, t);
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
function ul(e, t) {
  if (t && (typeof t == `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return G(e);
}
function K(e) {
  var t = cl();
  return function () {
    var n,
      r = ol(e);
    if (t) {
      var i = ol(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return ul(this, n);
  };
}
function dl(e) {
  return fl(e) || pl(e) || ml(e) || gl();
}
function fl(e) {
  if (Array.isArray(e)) return hl(e);
}
function pl(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function ml(e, t) {
  if (e) {
    if (typeof e == `string`) return hl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? hl(e, t)
          : void 0
    );
  }
}
function hl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function gl() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _l(e, t) {
  return ((t = { exports: {} }), e(t, t.exports), t.exports);
}
function vl() {}
function yl() {}
function q(e) {
  return e
    .map(function (e) {
      return !1 === e ? null : e;
    })
    .join(` `)
    .replace(/\s+/g, ` `)
    .trim();
}
function bl(e, t) {
  return ((100 / e) * t) / t;
}
function xl(e, t) {
  return (100 * e) / t;
}
function J(e) {
  return `${e}%`;
}
function Sl(e, t, n) {
  if (e === t) return !0;
  var r = Q[Xl(e)],
    i = Q[Xl(t)];
  return !(!r || r !== i) && r(e, t, n);
}
function Cl(e) {
  return function (t, n, r) {
    if (!r) return e(t, n, []);
    for (var i, a = r.length; (i = r[--a]);)
      if (i[0] === t && i[1] === n) return !0;
    return e(t, n, r);
  };
}
function wl(e, t, n) {
  var r = e.length;
  if (r !== t.length) return !1;
  for (n.push([e, t]); r--;) if (!Sl(e[r], t[r], n)) return !1;
  return !0;
}
function Tl(e, t, n) {
  if (typeof e.equal == `function`) return (n.push([e, t]), e.equal(t, n));
  var r = El(e),
    i = El(t),
    a = r.length;
  if (a !== i.length) return !1;
  for (r.sort(), i.sort(); a--;) if (r[a] !== i[a]) return !1;
  for (n.push([e, t]), a = r.length; a--;) {
    var o = r[a];
    if (!Sl(e[o], t[o], n)) return !1;
  }
  return !0;
}
function El(e) {
  var t = [];
  for (var n in e) n !== `constructor` && t.push(n);
  return t;
}
function Dl(e) {
  return !!e && typeof e == `object`;
}
function Ol(e) {
  var t = Object.prototype.toString.call(e);
  return t === `[object RegExp]` || t === `[object Date]` || kl(e);
}
function kl(e) {
  return e.$$typeof === $l;
}
function Al(e) {
  return Array.isArray(e) ? [] : {};
}
function jl(e, t) {
  return !1 !== t.clone && t.isMergeableObject(e) ? zl(Al(e), e, t) : e;
}
function Ml(e, t, n) {
  return e.concat(t).map(function (e) {
    return jl(e, n);
  });
}
function Nl(e, t) {
  if (!t.customMerge) return zl;
  var n = t.customMerge(e);
  return typeof n == `function` ? n : zl;
}
function Pl(e) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(e).filter(function (t) {
        return Object.propertyIsEnumerable.call(e, t);
      })
    : [];
}
function Fl(e) {
  return Object.keys(e).concat(Pl(e));
}
function Il(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Ll(e, t) {
  return (
    Il(e, t) &&
    !(
      Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)
    )
  );
}
function Rl(e, t, n) {
  var r = {};
  return (
    n.isMergeableObject(e) &&
      Fl(e).forEach(function (t) {
        r[t] = jl(e[t], n);
      }),
    Fl(t).forEach(function (i) {
      Ll(e, i) ||
        (r[i] =
          Il(e, i) && n.isMergeableObject(t[i])
            ? Nl(i, n)(e[i], t[i], n)
            : jl(t[i], n));
    }),
    r
  );
}
function zl(e, t, n) {
  (((n ||= {}).arrayMerge = n.arrayMerge || Ml),
    (n.isMergeableObject = n.isMergeableObject || Ql),
    (n.cloneUnlessOtherwiseSpecified = jl));
  var r = Array.isArray(t);
  return r === Array.isArray(e)
    ? r
      ? n.arrayMerge(e, t, n)
      : Rl(e, t, n)
    : jl(t, n);
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
          (a.state = t(il({}, n.state))),
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
              return !Zl(t, this.state) || !Zl(e, this.props);
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
              this.setState(t(il({}, this.context.state)));
            },
          },
          {
            key: `render`,
            value: function () {
              var t = this,
                n = this.props,
                r = n.children,
                i = W(n, cu),
                a = eu(this.state, i, Kl);
              return N.createElement(
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
    })(N.Component);
  return (
    V(n, `contextType`, tu),
    V(n, `propTypes`, { children: Z.children }),
    V(n, `defaultProps`, { children: null }),
    n
  );
}
var Bl = `SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`;
yl.resetWarningCache = vl;
var Vl = function () {
    function e(e, t, n, r, i, a) {
      if (a !== Bl) {
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
      checkPropTypes: yl,
      resetWarningCache: vl,
    };
    return ((n.PropTypes = n), n);
  },
  X = _l(function (e) {
    e.exports = Vl();
  }),
  Hl = `loading`,
  Ul = `success`,
  Wl = `error`,
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
  Gl = function (e) {
    var t = e.min,
      n = e.max,
      r = e.x;
    return Math.min(n, Math.max(t, r));
  },
  Kl = {
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
  ql = { buttonBack: `buttonBack___1mlaL` },
  Jl = [
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
  Yl = (function (e) {
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
                i = W(e, Jl),
                a = q([ql.buttonBack, `carousel__back-button`, n]),
                o = t.setDisabled(
                  this.props.disabled,
                  this.props.currentSlide,
                  r,
                );
              return N.createElement(
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
  })(N.Component);
(V(Yl, `propTypes`, {
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
  V(Yl, `defaultProps`, {
    className: null,
    disabled: null,
    onClick: null,
    infinite: !1,
  }));
var Xl = _l(function (e, t) {
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
Xl.types;
var Q = {};
((Q.number = function (e, t) {
  return e !== e && t !== t;
}),
  (Q.function = function (e, t, n) {
    return (
      e.toString() === t.toString() &&
      Q.object(e, t, n) &&
      Sl(e.prototype, t.prototype)
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
  (Q.arguments = Q[`bit-array`] = Q.array = Cl(wl)),
  (Q.object = Cl(Tl)));
var Zl = Sl,
  Ql = function (e) {
    return Dl(e) && !Ol(e);
  },
  $l =
    typeof Symbol == `function` && Symbol.for
      ? Symbol.for(`react.element`)
      : 60103;
zl.all = function (e, t) {
  if (!Array.isArray(e)) throw Error(`first argument should be an array`);
  return e.reduce(function (e, n) {
    return zl(e, n, t);
  }, {});
};
var eu = zl,
  tu = N.createContext(),
  nu = function e(t) {
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
  ru = { masterSpinnerFinished: !1 },
  iu = (function () {
    function e(t) {
      (z(this, e),
        (this.state = nu(eu(ru, t, Kl))),
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
            ((this.state = nu(eu(this.state, e, Kl))),
              this.updateSubscribers(t));
          },
        },
        {
          key: `getStoreState`,
          value: function () {
            return eu({}, this.state, Kl);
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
  au = [
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
  ou = (function (e) {
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
        slideSize: bl(e.totalSlides, e.visibleSlides),
        slideTraySize: xl(e.totalSlides, e.visibleSlides),
        step: e.step,
        dragStep: e.dragStep,
        totalSlides: e.totalSlides,
        touchEnabled: e.touchEnabled,
        dragEnabled: e.dragEnabled,
        visibleSlides: e.visibleSlides,
        infinite: e.infinite,
        isIntrinsicHeight: e.isIntrinsicHeight,
      };
      return ((r.carouselStore = new iu(i)), r);
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
                ((n.slideSize = bl(
                  this.props.totalSlides,
                  this.props.visibleSlides,
                )),
                (n.slideTraySize = xl(
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
                W(e, au)),
              r = q([`carousel`, this.props.className]);
            return N.createElement(
              t,
              H({ className: r }, n),
              N.createElement(
                tu.Provider,
                { value: this.carouselStore },
                this.props.children,
              ),
            );
          },
        },
      ]),
      t
    );
  })(N.Component),
  su =
    (V(ou, `propTypes`, {
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
    V(ou, `defaultProps`, {
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
    ou);
tu.Consumer;
var cu = [`children`],
  lu = Y(Yl, function (e) {
    return {
      currentSlide: e.currentSlide,
      step: e.step,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
      infinite: e.infinite,
    };
  }),
  uu = { buttonFirst: `buttonFirst___2rhFr` },
  du = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `totalSlides`,
  ],
  fu = (function (e) {
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
              i = (e.onClick, e.totalSlides, W(e, du)),
              a = q([uu.buttonFirst, `carousel__first-button`, t]),
              o = r === null ? n === 0 : r;
            return N.createElement(
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
  })(N.Component);
Y(
  (V(fu, `propTypes`, {
    carouselStore: X.object.isRequired,
    children: Z.children.isRequired,
    className: X.string,
    currentSlide: X.number.isRequired,
    disabled: X.bool,
    onClick: X.func,
    totalSlides: X.number.isRequired,
  }),
  V(fu, `defaultProps`, { className: null, disabled: null, onClick: null }),
  fu),
  function (e) {
    return { currentSlide: e.currentSlide, totalSlides: e.totalSlides };
  },
);
var pu = { buttonLast: `buttonLast___2yuh0` },
  mu = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `totalSlides`,
    `visibleSlides`,
  ],
  hu = (function (e) {
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
              o = W(e, mu),
              s = q([pu.buttonLast, `carousel__last-button`, t]),
              c = r === null ? n >= i - a : r;
            return N.createElement(
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
  })(N.Component);
Y(
  (V(hu, `propTypes`, {
    carouselStore: X.object.isRequired,
    children: Z.children.isRequired,
    className: X.string,
    currentSlide: X.number.isRequired,
    disabled: X.bool,
    onClick: X.func,
    totalSlides: X.number.isRequired,
    visibleSlides: X.number.isRequired,
  }),
  V(hu, `defaultProps`, { className: null, disabled: null, onClick: null }),
  hu),
  function (e) {
    return {
      currentSlide: e.currentSlide,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
    };
  },
);
var gu = { buttonNext: `buttonNext___2mOCa` },
  _u = [
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
  vu = (function (e) {
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
                c = W(e, _u),
                l = q([gu.buttonNext, `carousel__next-button`, n]),
                u = t.setDisabled(i, r, o, a, s);
              return N.createElement(
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
  })(N.PureComponent),
  yu = Y(
    (V(vu, `propTypes`, {
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
    V(vu, `defaultProps`, {
      className: null,
      disabled: null,
      onClick: null,
      infinite: !1,
    }),
    vu),
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
  bu = { buttonNext: `buttonNext___3Lm3s` },
  xu = [
    `carouselStore`,
    `children`,
    `childrenPaused`,
    `childrenPlaying`,
    `className`,
    `isPlaying`,
    `onClick`,
  ],
  Su = (function (e) {
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
              a = (e.onClick, W(e, xu)),
              o = q([bu.buttonNext, `carousel__play-button`, r]);
            return N.createElement(
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
  })(N.PureComponent);
Y(
  (V(Su, `propTypes`, {
    carouselStore: X.object.isRequired,
    children: X.node,
    childrenPaused: X.node,
    childrenPlaying: X.node,
    className: X.string,
    isPlaying: X.bool.isRequired,
    onClick: X.func,
  }),
  V(Su, `defaultProps`, {
    children: null,
    childrenPaused: null,
    childrenPlaying: null,
    className: null,
    onClick: null,
  }),
  Su),
  function (e) {
    return { isPlaying: e.isPlaying };
  },
);
var Cu = { dot: `dot___3c3SI` },
  wu = [
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
  Tu = (function (e) {
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
              s = W(e, wu),
              c = a >= n && a < n + o,
              l = typeof i == `boolean` ? i : c,
              u = typeof r == `boolean` ? r : !0 === c,
              d = q([
                Cu.dot,
                l && Cu.dotSelected,
                `carousel__dot`,
                `carousel__dot--${a}`,
                l && `carousel__dot--selected`,
                t,
              ]);
            return N.createElement(
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
  })(N.Component),
  Eu = Y(
    (V(Tu, `propTypes`, {
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
    V(Tu, `defaultProps`, {
      children: null,
      className: null,
      disabled: null,
      onClick: null,
      selected: null,
    }),
    Tu),
    function (e) {
      return {
        currentSlide: e.currentSlide,
        totalSlides: e.totalSlides,
        visibleSlides: e.visibleSlides,
      };
    },
  ),
  Du = {},
  Ou = [`renderDots`],
  ku = [
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
  Au = (function (e) {
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
              return (s.renderDots, o(W(s, Ou)));
            }
            for (var c = [], l = 0; l < n; l += 1) {
              var u = l >= t && l < t + r,
                d = a ? l === t : u,
                f = l >= n - r ? n - r : l;
              c.push(
                N.createElement(
                  Eu,
                  { key: l, slide: f, selected: d, disabled: !!i && d },
                  N.createElement(
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
                W(e, ku)),
              i = q([Du.DotGroup, `carousel__dot-group`, n]);
            return N.createElement(
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
  })(N.Component);
Y(
  (V(Au, `propTypes`, {
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
  V(Au, `defaultProps`, {
    children: null,
    className: null,
    dotNumbers: !1,
    disableActiveDots: !0,
    showAsSelectedForCurrentSlideOnly: !1,
    renderDots: null,
  }),
  Au),
  function (e) {
    return {
      currentSlide: e.currentSlide,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
    };
  },
);
var ju = { image: `image___xtQGH` },
  Mu = [`src`, `alt`],
  Nu = [
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
  Pu = (function (e) {
    function t(e) {
      var r;
      return (
        z(this, t),
        (r = n.call(this, e)),
        (r.state = { imageStatus: Hl }),
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
                (this.setState({ imageStatus: Hl }),
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
              (this.setState({ imageStatus: Ul }),
                this.props.hasMasterSpinner &&
                  this.props.carouselStore.masterSpinnerSuccess(this.props.src),
                this.props.onLoad && this.props.onLoad(e));
            },
          },
          {
            key: `handleImageError`,
            value: function (e) {
              (this.setState({ imageStatus: Wl }),
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
                  ju.image,
                  ju.imageLoading,
                  `carousel__image`,
                  this.props.isBgImage && `carousel__image--with-background`,
                  `carousel__image--loading`,
                  this.props.className,
                ]);
              return N.createElement(
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
                  ju.image,
                  ju.imageError,
                  `carousel__image`,
                  this.props.isBgImage && `carousel__image--with-background`,
                  `carousel__image--error`,
                  this.props.className,
                ]);
              return N.createElement(
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
                  ju.image,
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
                  (o = W(e, Mu)),
                  (a = H({}, n, {
                    backgroundImage: `url("${s}")`,
                    backgroundSize: `cover`,
                  })));
              }
              return N.createElement(
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
                  W(e, Nu));
              switch (this.state.imageStatus) {
                case Hl:
                  return this.renderLoading(t);
                case Ul:
                  return this.renderSuccess(t);
                case Wl:
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
  })(N.Component);
(V(Pu, `propTypes`, {
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
  V(Pu, `defaultProps`, {
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
var Fu = Y(Pu, function (e) {
    return { hasMasterSpinner: e.hasMasterSpinner, orientation: e.orientation };
  }),
  Iu = { spinner: `spinner___27VUp`, spin: `spin___S3UuE` },
  Lu = [`className`],
  Ru = (function (e) {
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
              n = W(e, Lu),
              r = q([Iu.spinner, `carousel__spinner`, t]);
            return N.createElement(`div`, H({ className: r }, n));
          },
        },
      ]),
      t
    );
  })(N.PureComponent),
  zu =
    (V(Ru, `propTypes`, { className: X.string }),
    V(Ru, `defaultProps`, { className: null }),
    Ru),
  Bu = {
    container: `container___2O72F`,
    overlay: `overlay___IV4qY`,
    hover: `hover___MYy31`,
    zoom: `zoom___3kqYk`,
    loading: `loading___1pvNI`,
    imageLoadingSpinnerContainer: `imageLoadingSpinnerContainer___3UIPD`,
  },
  Vu = [
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
  Hu,
  Uu = 2,
  Wu = 3;
Y(
  ((Hu = (function (e) {
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
                this.setState({ isHovering: !0, scale: Uu });
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
                (dl(e.targetTouches).forEach(function (e) {
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
                var r = dl(e.targetTouches)
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
                  s.distance = t.distanceBetweenTwoTouches(il({}, s));
                  var c = t.midpointBetweenTwoTouches(il({}, s));
                  ((s.cx = c.x), (s.cy = c.y));
                  var l = {
                    x1: r[0].clientX,
                    y1: r[0].clientY,
                    x2: r[1].clientX,
                    y2: r[1].clientY,
                  };
                  l.distance = t.distanceBetweenTwoTouches(il({}, l));
                  var u = t.midpointBetweenTwoTouches(il({}, l));
                  ((l.cx = u.x), (l.cy = u.y));
                  var d = J(
                      Gl({
                        min: 0,
                        max: 100,
                        x: ((l.cx - i.left) / i.width) * 100,
                      }),
                    ),
                    f = J(
                      Gl({
                        min: 0,
                        max: 100,
                        x: ((l.cy - i.top) / i.height) * 100,
                      }),
                    ),
                    p = function (e) {
                      return Gl({
                        min: 1,
                        max: Wu,
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
                (dl(e.changedTouches).forEach(function (e) {
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
                return N.createElement(
                  `div`,
                  {
                    className: q([
                      Bu.imageLoadingSpinnerContainer,
                      `carousel__image-loading-spinner-container`,
                    ]),
                  },
                  e && e(),
                  !e && N.createElement(zu, null),
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
                u = W(e, Vu),
                d = q([Bu.container, i]),
                f = q([Bu.image, `carousel__zoom-image`, a]),
                p = q([
                  Bu.overlay,
                  `carousel__zoom-image-overlay`,
                  this.state.isHovering && Bu.hover,
                  this.state.isZooming && Bu.zoom,
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
                N.createElement(
                  l,
                  H({ className: d }, u),
                  N.createElement(
                    Fu,
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
                  N.createElement(Fu, {
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
  })(N.Component)),
  V(Hu, `propTypes`, {
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
  V(Hu, `defaultProps`, {
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
  Hu),
  function () {
    return {};
  },
);
var Gu = {
    slide: `slide___3-Nqo`,
    slideHorizontal: `slideHorizontal___1NzNV`,
    slideInner: `slideInner___2mfX9`,
    focusRing: `focusRing___1airF`,
  },
  Ku = [
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
  qu = (function (e) {
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
              ? N.createElement(`div`, {
                  className: [Gu.focusRing, `carousel__slide-focus-ring`].join(
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
              g = W(t, Ku),
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
                Gu.slide,
                u === `horizontal` && Gu.slideHorizontal,
                `carousel__slide`,
                this.state.focused && `carousel__slide--focused`,
                b && a,
                b && `carousel__slide--visible`,
                !b && i,
                !b && `carousel__slide--hidden`,
                r,
              ]),
              ee = q([Gu.slideInner, `carousel__inner-slide`, o]);
            return N.createElement(
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
              N.createElement(
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
  })(N.PureComponent),
  Ju = Y(
    (V(qu, `propTypes`, {
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
    V(qu, `defaultProps`, {
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
    qu),
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
  Yu = (function () {
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
  Xu =
    `ariaLabel.carouselStore.children.className.classNameAnimation.classNameTray.classNameTrayWrap.currentSlide.disableAnimation.disableKeyboard.dragEnabled.hasMasterSpinner.interval.isPageScrollLocked.isPlaying.lockOnWindowScroll.masterSpinnerFinished.moveThreshold.naturalSlideHeight.naturalSlideWidth.onMasterSpinner.orientation.playDirection.privateUnDisableAnimation.slideSize.slideTraySize.spinner.style.totalSlides.touchEnabled.trayProps.trayTag.visibleSlides.isIntrinsicHeight`.split(
      `.`,
    ),
  Zu = [
    `dragStep`,
    `step`,
    `infinite`,
    `preventVerticalScrollOnTouch`,
    `preventingVerticalScroll`,
    `horizontalPixelThreshold`,
    `verticalPixelThreshold`,
  ],
  Qu = [
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
  $u = (function (e) {
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
              var e = new Yu();
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
                i = Gl({ min: 0, max: r, x: this.props.currentSlide + n });
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
                  N.createElement(
                    `div`,
                    {
                      className: q([
                        $.masterSpinnerContainer,
                        `carousel__master-spinner-container`,
                      ]),
                    },
                    r && r(),
                    !r && N.createElement(zu, null),
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
                x = W(t, Xu),
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
                  W(x, Zu)),
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
                  W(_, Qu));
              return N.createElement(
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
                N.createElement(
                  `div`,
                  { className: re, style: S },
                  N.createElement(
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
  })(N.Component),
  ed = Y(
    (V($u, `propTypes`, {
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
    V($u, `defaultProps`, {
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
    $u),
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
  td = `HRbFcf6y6hE-`,
  nd = `-ZUk3xT7ZlY-`,
  rd = `KLUTL0g4Wbo-`,
  id = `glnkf1Fqlvc-`,
  ad = `loez15u80yI-`,
  od = `bTrailerCarouselAutoAdvance`,
  sd,
  cd = new Set();
function ld() {
  if (sd === void 0) {
    let e = bn(od);
    sd = !e || e.toLowerCase() === `true`;
  }
  return sd;
}
function ud(e) {
  (nr(od, String(e), 3650), (sd = e), cd.forEach((e) => e()));
}
function dd(e) {
  return (cd.add(e), () => cd.delete(e));
}
function fd() {
  return [N.useSyncExternalStore(dd, ld, () => !0), ud];
}
function pd(e) {
  let [t, n] = fd();
  return (0, M.jsx)(`div`, {
    className: E(ad, e.bPhoneOnly && `fvIP8xIxKbo-`),
    children: (0, M.jsx)(Qn, {
      className: id,
      controlled: !0,
      checked: t,
      label: k(`#SaleTrailerCarousel_AutoAdvanceEnabled`),
      onChange: n,
    }),
  });
}
var md = 1e4;
function hd(e) {
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
    [l] = fd(),
    u = r === void 0 ? md : r,
    [d, f] = N.useState(u),
    p = o !== void 0,
    m = gd(o);
  (kn(
    () => {
      let e = d - 30;
      e <= 0 ? (i(), f(u)) : f(Math.max(e, 0));
    },
    30,
    [u],
    a && l && !p && u > 0 && d > 0,
  ),
    N.useEffect(() => {
      f(u);
    }, [n, u, l]));
  let h = `${100 - (d / u) * 100}%`,
    g = !a || !l ? `off` : p ? `paused` : `running`;
  return (
    N.useEffect(() => {
      let e = c?.current;
      e &&
        (e.style.setProperty(`--auto-advance-ratio`, h),
        (e.dataset.autoAdvance = g));
    }, [c, h, g]),
    (0, M.jsxs)(`div`, {
      className: t,
      children: [
        (0, M.jsxs)(`div`, {
          className: E(td, (!a || !l) && `X8q-iPdWKKw-`, p && `_3E-10Et-w2o-`),
          children: [
            (0, M.jsx)(`div`, {
              className: nd,
              children: !p || !m ? Xn(s, Math.ceil(d / 1e3)) : m,
            }),
            (0, M.jsx)(`div`, {
              className: rd,
              style: { "--auto-advance-ratio": h },
            }),
          ],
        }),
        (0, M.jsx)(pd, {}),
      ],
    })
  );
}
function gd(e) {
  switch (e) {
    case 4:
      return k(`#SaleTrailerCarousel_AutoAdvanceVideoPaused`);
    case 3:
    case 5:
      return k(`#SaleTrailerCarousel_AutoAdvanceHover`);
  }
}
function _d() {
  let [e, t] = N.useState(!1),
    [n, r] = N.useState(!1);
  N.useEffect(() => {
    let e = () => t(document.hidden);
    return (
      document.addEventListener(`visibilitychange`, e),
      () => document.removeEventListener(`visibilitychange`, e)
    );
  }, []);
  let i = N.useCallback((e) => r(!e.isIntersecting), []);
  return {
    bTabHidden: e,
    bOffscreen: n,
    refIntersection: Pt(i, { threshold: 0.5 }),
  };
}
var vd = `_--jO3lLROzo-`,
  yd = `DyOrE-LFQDQ-`,
  bd = `_538FwVlPb0E-`,
  xd = `bYSGIkS6GvM-`,
  Sd = `eROFrrQM5Ew-`,
  Cd = `bKYQmUBfOtY-`,
  wd = `Udbg33O1Kjs-`,
  Td = `ux4DPxJOkL8-`,
  Ed = `-LFP33ltPBY-`,
  Dd = `_4uWRflget-8-`,
  Od = `IxjyotVSZiA-`,
  kd = `cD9zjaueru0-`,
  Ad = `_6KPsWUgnjok-`,
  jd = `RiCuzM-PsMk-`,
  Md = `_8kxQAkw3gko-`,
  Nd = `CKl3kyOE6XE-`,
  Pd = `_4CFowarbZF0-`,
  Fd = `I5j74q712SQ-`,
  Id = `FStnZRH332A-`,
  Ld = `eqYBsdUkt5U-`,
  Rd = 9;
function zd(e, t) {
  let n = N.useRef(0);
  if (e <= Rd)
    return {
      rgPills: Array.from({ length: e }, (e, t) => ({ nPage: t })),
      strClassName: Fd,
      bWindowed: !1,
      nPages: e,
      nSelectedPage: t,
    };
  let r = n.current;
  return (
    t < r ? (r = t) : t >= r + Rd && (r = t - Rd + 1),
    (r = Math.min(Math.max(r, 0), e - Rd)),
    (n.current = r),
    {
      rgPills: Array.from({ length: Rd }, (e, t) => ({ nPage: r + t })),
      strClassName: Fd,
      bWindowed: !0,
      nPages: e,
      nSelectedPage: t,
    }
  );
}
function Bd(e) {
  let { pillWindow: t, children: n } = e;
  return (0, M.jsxs)(`div`, {
    className: Pd,
    children: [
      (0, M.jsx)(`div`, { className: t.strClassName, children: n }),
      t.bWindowed &&
        (0, M.jsx)(`span`, {
          className: `xAhUZDLR-Fs-`,
          children: k(
            `#Sale_Carousel_PageOfPages`,
            ut(t.nSelectedPage + 1),
            ut(t.nPages),
          ),
        }),
    ],
  });
}
function Vd() {
  return Id;
}
function Hd(e) {
  let { bSelected: t, bCountdown: n } = e,
    r = t && n;
  return (0, M.jsx)(`span`, {
    className: E(Ld, t && `bY2thn3lfUw-`, r && `D6a-33r-4xk-`),
    children: r && (0, M.jsx)(`span`, { className: `NItUkZKCFW8-` }),
  });
}
function Ud(e) {
  let { count: t, selectedIndex: n, fnNavigate: r, bCountdown: i } = e,
    a = zd(t, n);
  return (0, M.jsx)(Wt, {
    "flow-children": `row`,
    className: E(Nd, Md),
    children: (0, M.jsx)(Bd, {
      pillWindow: a,
      children: a.rgPills.map((e) =>
        (0, M.jsx)(
          `div`,
          {
            className: Vd(),
            onClick: r ? () => r(e.nPage) : void 0,
            children: (0, M.jsx)(Hd, {
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
var Wd = `_1MsO62M-piw-`,
  Gd = `QZKBcFqGSTo-`,
  Kd = 0.6;
function qd(e, t, n) {
  let r = N.useRef(t);
  r.current = t;
  let i = !!t;
  N.useEffect(() => {
    if (!i || !e || typeof IntersectionObserver > `u`) return;
    let t = Array.from(e.children);
    if (!t.length) return;
    let n = Math.round(e.scrollLeft / e.clientWidth),
      a = new IntersectionObserver(
        (e) => {
          for (let i of e) {
            if (!i.isIntersecting || i.intersectionRatio < Kd) continue;
            let e = t.indexOf(i.target);
            e < 0 || e === n || ((n = e), r.current?.(e));
          }
        },
        { root: e, threshold: Kd },
      );
    for (let e of t) a.observe(e);
    return () => a.disconnect();
  }, [e, i, n]);
}
function Jd(e, t, n, r) {
  let i = e.getBoundingClientRect(),
    a = t.getBoundingClientRect();
  return n ? i.right - r - a.right : a.left - (i.left + r);
}
function Yd(e) {
  return Array.from(e.children).filter((e) => e.getClientRects().length > 0);
}
var Xd = 10;
function Zd(e, t, n) {
  let [r, i] = N.useState(0),
    [a, o] = N.useState(t);
  return (
    N.useEffect(() => {
      if (!n || !e) return;
      let t = 0,
        r = () => {
          t = 0;
          let n = Yd(e);
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
                  let n = Jd(e, t, c, l);
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
            Jd(e, t, c, l) <= Xd && (u = n);
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
      N.useCallback(
        (t) => {
          let n = e ? Yd(e)[t] : void 0;
          if (!e || !n) return;
          let r = getComputedStyle(e),
            i = r.direction === `rtl`,
            a = Jd(e, n, i, parseFloat(r.scrollPaddingInlineStart) || 0);
          e.scrollBy({ left: i ? -a : a, behavior: `smooth` });
        },
        [e],
      ),
      a,
    ]
  );
}
function Qd(e) {
  let { nSlideIndex: t, nStartingSlideIndex: n, ref: r, children: i } = e;
  return n === void 0
    ? i
    : (0, M.jsx)(`div`, { ref: t === n ? r : void 0, children: i });
}
function $d(e) {
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
    l = N.useRef(null),
    u = N.useRef(null),
    d = dn(),
    f = N.Children.count(r),
    [p, m] = N.useState(null),
    h = N.useCallback((e) => {
      ((l.current = e), m(e));
    }, []);
  qd(p, c, f);
  let g = N.useContext(Or) && !d && f > 1,
    [_, v, y] = Zd(p, f, g);
  N.useLayoutEffect(() => {
    l.current &&
      u.current &&
      (l.current.scrollLeft +=
        u.current.getBoundingClientRect().left -
        l.current.getBoundingClientRect().left);
  }, [s]);
  let b = N.Children.map(r, (e, t) =>
      i
        ? (0, M.jsx)(C, {
            rootMargin: `0px 50% 0px 50%`,
            horizontal: !0,
            placeholderWidth: a ?? 1,
            placeholderHeight: 1,
            holdGamepadFocus: d,
            children: (0, M.jsx)(Qd, {
              nSlideIndex: t,
              nStartingSlideIndex: s,
              ref: u,
              children: e,
            }),
          })
        : (0, M.jsx)(Qd, {
            nSlideIndex: t,
            nStartingSlideIndex: s,
            ref: u,
            children: e,
          }),
    ),
    x = (0, M.jsx)(Wt, {
      "flow-children": `row`,
      style: { gap: n ? n + `px` : void 0 },
      className: E(
        { SaleSectionCarouselPadding: t },
        `ScrollSnapCarousel`,
        `SaleSectionCarousel`,
        Wd,
        g && `DE3YQ2XTqZE-`,
        e.className,
      ),
      ref: h,
      children: b,
    }),
    ee = g
      ? (0, M.jsxs)(`div`, {
          className: E(Gd, `PillScrollRowCtn`),
          children: [
            x,
            (0, M.jsx)(Ud, { count: y, selectedIndex: _, fnNavigate: v }),
          ],
        })
      : x;
  return i
    ? (0, M.jsx)(C, {
        rootMargin: `50% 0px 50% 0px`,
        horizontal: !1,
        placeholderWidth: 1,
        placeholderHeight: o ?? 1,
        children: ee,
      })
    : ee;
}
var ef = e(t());
function tf(e, t) {
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
function nf(e) {
  let {
      eDirection: t,
      onNavIntent: n,
      className: r,
      style: i,
      children: a,
    } = e,
    o = N.useContext(tu),
    s = N.useRef(n);
  s.current = n;
  let c = N.useRef(!1),
    l = N.useRef(!1),
    u = N.useCallback(() => {
      let e = tf(o.state, t);
      e !== void 0 && s.current?.(e, t);
    }, [o, t]),
    d = !!n;
  N.useEffect(() => {
    if (!d) return;
    let e = o.state.currentSlide,
      t = () => {
        let t = o.state.currentSlide;
        t !== e && ((e = t), (c.current || l.current) && u());
      };
    return (o.subscribe(t), () => o.unsubscribe(t));
  }, [d, o, u]);
  let f = t === `next` ? yu : lu;
  return n
    ? (0, M.jsx)(f, {
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
    : (0, M.jsx)(f, {
        className: r,
        style: i,
        "aria-label": e[`aria-label`],
        children: a,
      });
}
var rf = Y(
  class extends N.Component {
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
      return (0, M.jsxs)(`div`, {
        className: wd,
        children: [
          e &&
            (0, M.jsx)(nf, {
              eDirection: `previous`,
              onNavIntent: r,
              className: E(`iqx2UWGqqKU-`, `oKffwUnx6co-`, `_--jO3lLROzo-`),
              children: (0, M.jsx)(Kf, {
                arrowFill: t,
                arrowStyle: n,
                direction: `left`,
              }),
            }),
          (0, M.jsxs)(`div`, {
            className: Dd,
            children: [
              (0, M.jsx)(`div`, { className: Od }),
              (0, M.jsx)(`div`, {
                className: kd,
                style: { insetInlineStart: s + `%`, insetInlineEnd: c + `%` },
              }),
              (0, M.jsx)(`div`, {
                className: Td,
                style: { insetInlineStart: `0%`, width: l + `%` },
                children: (0, M.jsx)(nf, {
                  eDirection: `previous`,
                  onNavIntent: r,
                  className: E(vd, Ed),
                  style: { color: `red` },
                  children: (0, M.jsx)(`div`, {}),
                }),
              }),
              (0, M.jsx)(`div`, {
                className: Td,
                style: { insetInlineEnd: `0%`, width: u + `%` },
                children: (0, M.jsx)(nf, {
                  eDirection: `next`,
                  onNavIntent: r,
                  className: E(vd, Ed),
                  children: (0, M.jsx)(`div`, {}),
                }),
              }),
            ],
          }),
          e &&
            (0, M.jsx)(nf, {
              eDirection: `next`,
              onNavIntent: r,
              className: E(`iqx2UWGqqKU-`, `O2Vg9rmPwSE-`, `_--jO3lLROzo-`),
              children: (0, M.jsx)(Kf, {
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
function af(e) {
  let { bForceSimpleCarousel: t, screenIsWide: n, children: r } = e,
    i = dn();
  return (n || i) && !t
    ? (0, M.jsx)(of, { ...e, children: r })
    : (0, M.jsx)($d, { ...e, children: r });
}
function of(e) {
  let t = dn(),
    n = N.useContext(Or),
    [r, i] = N.useState(!1),
    { bTabHidden: a, bOffscreen: o, refIntersection: s } = _d(),
    c = () => N.Children.count(e.children),
    l = () => Math.min(c(), e.visibleElements),
    u = () =>
      N.Children.map(e.children, (n, r) => {
        let i =
          e.bLazyRenderChildren && !t
            ? (0, M.jsx)(C, {
                rootMargin: `0px 100% 0px 100%`,
                horizontal: !0,
                placeholderWidth: e.lazyRenderPlaceholderWidth ?? 1,
                placeholderHeight: e.lazyRenderPlaceholderHeight ?? 1,
                children: n,
              })
            : n;
        return (0, M.jsx)(
          Ju,
          {
            className: Ad,
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
  r && !Zt() ? (_ = 5) : a ? (_ = 1) : o && (_ = 2);
  let v = 4 / 3,
    y = !0;
  e.slideAspectRatio && ((v = e.slideAspectRatio), (y = !1));
  let b = `items_in_row_${e.visibleElements}`;
  return (0, M.jsx)(Wt, {
    "flow-children": `row`,
    className: E(yd, e.className, b),
    navKey: e.navKey,
    ref: s,
    onMouseEnter: () => i(!0),
    onMouseLeave: () => i(!1),
    children: (0, M.jsxs)(su, {
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
        (0, M.jsx)(uf, {
          bHideArrows: m,
          onSlide: e.onSlide,
          onNavIntent: e.onNavIntent,
          arrowFill: e.arrowFill,
          arrowStyle: e.arrowStyle,
          children: u(),
        }),
        !h &&
          (e.useTestScrollbar && !n
            ? (0, M.jsx)(rf, {
                showArrows: m,
                onNavIntent: e.onNavIntent,
                carouselStore: null,
              })
            : (0, M.jsx)(`div`, {
                className: (0, ef.default)({
                  "I8j65FBXdOY-": !0,
                  "_8kxQAkw3gko-": n,
                  "uhUggqIYXBc-": e.className?.includes(`template-carousel`),
                }),
                children: (0, M.jsx)(sf, {
                  ...e,
                  nPageSize: f,
                  children: e.children,
                }),
              })),
        g && (0, M.jsx)(lf, { pauseReason: _ }),
      ],
    }),
  });
}
function sf(e) {
  let { nPageSize: t } = e,
    n = N.useContext(tu),
    r = N.useContext(Or),
    [i, a] = N.useState(n.state.currentSlide);
  N.useEffect(
    () =>
      n.subscribe(() => {
        a(n.state.currentSlide);
      }),
    [n],
  );
  let o = Math.ceil(i / t),
    s = zd(Math.ceil(N.Children.count(e.children) / t), o);
  return r
    ? (0, M.jsx)(Bd, {
        pillWindow: s,
        children: s.rgPills.map((e) =>
          (0, M.jsx)(
            Eu,
            {
              slide: e.nPage * t,
              className: Vd(),
              children: (0, M.jsx)(Hd, { bSelected: e.nPage === o }),
            },
            e.nPage,
          ),
        ),
      })
    : (0, M.jsx)(M.Fragment, {
        children: N.Children.map(e.children, (n, r) => {
          if (r % t !== 0) return null;
          let i = o * t === r;
          return (0, M.jsx)(
            Eu,
            {
              slide: r,
              className: Cd,
              children: (0, M.jsx)(qf, { ...e, bIsActive: i }),
            },
            r,
          );
        }),
      });
}
function cf(e) {
  e.current &&= (window.clearTimeout(e.current), null);
}
function lf(e) {
  let { pauseReason: t } = e,
    n = N.useContext(tu),
    [r, i] = N.useState(n.state.currentSlide),
    [a, o] = N.useState(!0),
    s = N.useRef(null),
    c = N.useRef(n.state.currentSlide);
  N.useEffect(() => {
    let e = () => {
      let e = n.state.currentSlide;
      e !== c.current &&
        ((c.current = e),
        i(e),
        s.current === e ? (s.current = null) : s.current === null && o(!1));
    };
    return (n.subscribe(e), () => n.unsubscribe(e));
  }, [n]);
  let l = N.useCallback(() => {
    let { currentSlide: e, visibleSlides: t, totalSlides: r } = n.state,
      i = 0;
    (e + t < r && (i = Math.min(e + t, r - t)),
      i !== e && ((s.current = i), n.setStoreState({ currentSlide: i })));
  }, [n]);
  return (0, M.jsx)(hd, {
    className: Sd,
    enabled: a,
    currentItemKey: r,
    autoAdvanceMsec: md,
    fnAdvance: l,
    pauseReason: t,
    countdownToken: `#Carousel_AutoAdvanceNextInSeconds`,
  });
}
function uf(e) {
  let {
      bHideArrows: t,
      children: n,
      onSlide: r,
      onNavIntent: i,
      arrowFill: a,
      arrowStyle: o,
    } = e,
    s = N.useContext(tu),
    c = N.useRef(s.state.currentSlide),
    [l, u] = N.useState(null),
    d = N.useRef(null);
  N.useEffect(() => {
    let e = () => {
      let e = c.current,
        t = s.state.currentSlide;
      (r && r(t),
        u(t > e ? `Right` : t < e ? `Left` : null),
        cf(d),
        (d.current = window.setTimeout(() => {
          d.current && (u(null), cf(d));
        }, 1e3)),
        (c.current = t));
    };
    return (
      s.subscribe(e),
      () => {
        (s.unsubscribe(e), cf(d));
      }
    );
  }, [s]);
  let f = !!l && `CarouselSliding` + l;
  return (0, M.jsxs)(`div`, {
    className: E(bd, `SliderBody`, f),
    children: [
      !t &&
        (0, M.jsx)(nf, {
          eDirection: `previous`,
          onNavIntent: i,
          className: E(
            `_6KbJ1ZwTIeY-`,
            `oKffwUnx6co-`,
            `_--jO3lLROzo-`,
            `CarouselBtnLeft`,
          ),
          "aria-label": k(`#Carousel_Prev`),
          children: (0, M.jsx)(Kf, {
            arrowFill: a,
            arrowStyle: o,
            direction: `left`,
          }),
        }),
      (0, M.jsx)(ed, {
        className: yt.GetScrollableClassname(),
        classNameTray: xd,
        classNameAnimation: jd,
        role: `list`,
        children: (0, M.jsx)(Qt, { children: n }),
      }),
      !t &&
        (0, M.jsx)(nf, {
          eDirection: `next`,
          onNavIntent: i,
          className: E(
            `_6KbJ1ZwTIeY-`,
            `O2Vg9rmPwSE-`,
            `_--jO3lLROzo-`,
            `CarouselBtnRight`,
          ),
          "aria-label": k(`#Carousel_Next`),
          children: (0, M.jsx)(Kf, {
            arrowFill: a,
            arrowStyle: o,
            direction: `right`,
          }),
        }),
    ],
  });
}
function df(e) {
  let t = dn(),
    n = Pr(940),
    r = String(w(e.args, `autoadvance`)).toLowerCase() === `true`;
  return (0, M.jsx)(af, {
    hideArrows: !n,
    hidePips: t,
    visibleElements: 1,
    useTestScrollbar: !1,
    bLazyRenderChildren: !0,
    screenIsWide: n,
    bAutoAdvance: r,
    className: he,
    children: e.children,
  });
}
var ff = `FQV2hlT8BYs-`;
function pf(e) {
  let { strURL: t, children: n } = e;
  return (typeof t == `string` ? !Dt(t) : t.some((e) => !Dt(e)))
    ? (0, M.jsx)(mf, { children: n })
    : (0, M.jsx)(M.Fragment, { children: n });
}
function mf(e) {
  let { children: t } = e;
  return Ae()
    ? (0, M.jsx)(M.Fragment, { children: t })
    : (0, M.jsx)(`div`, {
        className: ff,
        children: wn(
          `#Image_Externally_Hosted_Hidden`,
          (0, M.jsx)(`a`, {
            href: A.STORE_BASE_URL + `account/cookiepreferences`,
          }),
        ),
      });
}
var hf = null;
function gf() {
  return (
    (hf ??= new Map([
      [`url`, { Constructor: ba, autocloses: !1 }],
      [`dynamiclink`, { Constructor: xa, autocloses: !1 }],
      [
        `h1`,
        { Constructor: et(Oe, se), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [
        `h2`,
        { Constructor: et($e, g), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [
        `h3`,
        { Constructor: et(Re, x), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [`quote`, { Constructor: et(qe, ae), autocloses: !1 }],
      [`list`, { Constructor: ke, autocloses: !1, skipInternalNewline: !0 }],
      [`olist`, { Constructor: Je, autocloses: !1, skipInternalNewline: !0 }],
      [`*`, { Constructor: Ie, autocloses: !0, skipInternalNewline: !0 }],
      [`p`, { Constructor: De, autocloses: !1, skipFollowingNewline: !0 }],
      [`img`, { Constructor: _f, autocloses: !1 }],
      [`previewyoutube`, { Constructor: Pe, autocloses: !1 }],
      [`looping_media`, { Constructor: Ke, autocloses: !1 }],
      [`video`, { Constructor: Xe, autocloses: !1 }],
      [`youtubeorvideo`, { Constructor: Fe, autocloses: !1 }],
      [`trailer`, { Constructor: yf, autocloses: !1 }],
      [
        `speaker`,
        {
          Constructor: bf,
          autocloses: !1,
          skipInternalNewline: !0,
          allowWrapTextForCopying: !0,
        },
      ],
      [`docimg`, { Constructor: vf, autocloses: !1 }],
      [`carousel`, { Constructor: df, autocloses: !1 }],
    ])),
    hf
  );
}
function _f(e) {
  let { showErrorInfo: t, event: n } = e.context,
    r = w(e.args, `src`) || e.children?.toString();
  ((r ||= w(e.args)), (r = lt(r ?? ``) || void 0));
  let i = w(e.args, `style`) === `inline`,
    a = te(r, e.language, n?.rtime32_last_modified);
  if (a == null) return null;
  if (typeof a == `string`) {
    r = a;
    let e;
    return (
      (e = !Dt(r)),
      n?.BHasTag(`auto_rssfeed`) && (e = !1),
      t
        ? (0, M.jsx)(de, {
            className: E({ [ct]: i }),
            src: r,
            crossOrigin: e ? `anonymous` : void 0,
          })
        : ((r = an(r)),
          (0, M.jsx)(pf, {
            strURL: r,
            children: (0, M.jsx)(ge, {
              className: E({ [ct]: i }),
              src: r,
              crossOrigin: e ? `anonymous` : void 0,
            }),
          }))
    );
  }
  return (0, M.jsx)(pf, {
    strURL: a,
    children: (0, M.jsx)(We, { rgSources: a }),
  });
}
function vf(e) {
  let t = w(e.args);
  if (t == null || t == null || t.length == 0) return ``;
  let n = e.children?.toString(),
    r = [];
  return (
    r.push(
      `${A.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${A.LANGUAGE}/${t}`,
    ),
    A.LANGUAGE != `english` &&
      r.push(`${A.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${t}`),
    (0, M.jsx)(We, { rgSources: r, alt: n })
  );
}
function yf(e) {
  let t = xf(e.args, `appid`, e.context.event?.appid ?? 0),
    n = xf(e.args, `trailerid`, 0),
    r = w(e.args, `style`)?.toLocaleLowerCase() ?? $c.k_TrailerAsFull;
  r = Object.values($c).includes(r) ? r : $c.k_TrailerAsFull;
  let i = Gr(e.args.color, `black`),
    a = Gr(e.args.bgcolor, `white`),
    o = He(e.args);
  return (0, M.jsx)(el, {
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
function bf(e) {
  let t = w(e.args, `name`),
    n = w(e.args, `title`),
    r = w(e.args, `company`),
    i = w(e.args, `photo`);
  return e.context.bShowShortSpeakerInfo
    ? (0, M.jsx)(S, {
        name: t,
        title: n,
        company: r,
        photo: i,
        bio: e.children,
      })
    : (0, M.jsx)(h, {
        name: t,
        title: n,
        company: r,
        photo: i,
        bio: e.children,
      });
}
function xf(e, t, n) {
  let r = w(e, t);
  return r === void 0 || r == null ? n : Number.parseInt(r);
}
var Sf = null;
function Cf() {
  return (
    (Sf ??= new Map([
      ...Array.from(Ue.entries()),
      ...Array.from(gf().entries()),
    ])),
    Sf
  );
}
var wf = N.createContext(null);
function Tf() {
  return N.useContext(wf) ?? Cf();
}
function Ef(e) {
  let t = Tf(),
    n = N.useMemo(
      () =>
        new Map([
          ...Array.from(t.entries()),
          ...Array.from(e.dictionary.entries()),
        ]),
      [t, e.dictionary],
    );
  return (0, M.jsx)(wf.Provider, { value: n, children: e.children });
}
function Df(e) {
  let {
      text: t,
      languageOverride: n,
      event: r,
      showErrorInfo: i,
      bShowShortSpeakerInfo: a,
    } = e,
    o = na(),
    s = N.useCallback(
      (e) => new Vr(new Br(new Rr(new it(new ot()), e, o, { event: r })), e),
      [r, o],
    ),
    c = Tf();
  return N.useMemo(() => new st(c, s, n || A.LANGUAGE), [c, s, n]).ParseBBCode(
    t,
    { showErrorInfo: i, event: r, bShowShortSpeakerInfo: a, bbcode: t },
  );
}
function Of(e) {
  let {
      strTag: t,
      args: n,
      rawargs: r,
      language: i = Hn(A.LANGUAGE),
      children: a,
      ...o
    } = e,
    s = Tf().get(t);
  return s
    ? (0, M.jsx)(s.Constructor, {
        context: o,
        tagname: t,
        args: n,
        language: i,
        rawargs: r,
        children: a,
      })
    : (0, M.jsxs)(M.Fragment, { children: [`[${t}]`, a, `[/${t}]`] });
}
var kf = (function (e) {
    return (
      (e.k_ECutArrowStyle = `single`),
      (e.k_EDoubleArrowStyle = `double`),
      (e.k_EThickChevron = `chevron`),
      (e.k_EFilledArrow = `filled`),
      (e.k_EPointyArrow = `pointy`),
      e
    );
  })({}),
  Af = (function (e) {
    return (
      (e.k_EPillCrumb = `pill`),
      (e.k_ECircularCrumb = `circle`),
      (e.k_ESquareCrumb = `square`),
      e
    );
  })({});
async function jf(e, t) {
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
var Mf;
function Nf() {
  let e = cn();
  return e
    ? e.GetAnonymousServiceTransport()
    : ((Mf ||= kt(new en(A.WEBAPI_BASE_URL))),
      Mf.GetAnonymousServiceTransport());
}
async function Pf(e) {
  return jf(Nf(), e);
}
var Ff = 36e5;
function If(e) {
  return [`LoyaltyRewardDef`, e];
}
function Lf(e, t) {
  return [`LoyaltyRewardDefsByCategoryAndClass`, e, t];
}
function Rf(e) {
  return {
    queryKey: If(e),
    queryFn: async () => {
      let t = await Pf({ rgDefIDs: [e] }),
        n = t.length == 1 ? t[0] : void 0;
      if (!n)
        throw Error(
          `Asked for point shop item ${e} and got ${t.length} items back, wanted exactly one.`,
        );
      return n;
    },
    enabled: e > 0,
    staleTime: Ff,
    retry: !1,
  };
}
function zf(e, t) {
  return {
    queryKey: Lf(e, t),
    queryFn: () => Pf({ strCategory: e, itemClass: t }),
    enabled: !!(e && t),
    staleTime: Ff,
    retry: !1,
  };
}
function Bf(e) {
  let { data: t } = i(Rf(e));
  return t;
}
function Vf(e, t) {
  let n = c(),
    { data: r } = i(zf(e, t));
  return (
    (0, N.useEffect)(() => {
      r?.forEach((e) => {
        e.defid !== void 0 && n.setQueryData(If(e.defid), e);
      });
    }, [r, n]),
    r
  );
}
var Hf = 1778623200;
function Uf(e, t) {
  let n = !1;
  return (
    e && e.GetEventType() == 36
      ? (n = !0)
      : e && t && t.is_creator_home && (n = Wf(e, t)),
    n
  );
}
function Wf(e, t) {
  return !!t && !!t.is_creator_home && (e.createTime ?? 0) > Hf;
}
function Gf(e) {
  return Uf(e, we(e.clanSteamID.GetAccountID()).data);
}
function Kf(e) {
  let { arrowFill: t, arrowStyle: n, direction: r } = e;
  switch (n) {
    default:
    case kf.k_ECutArrowStyle: {
      let e = r == `right` ? 0 : 180;
      return (0, M.jsx)(wt, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case kf.k_EDoubleArrowStyle: {
      let e = r == `right` ? 180 : 0;
      return (0, M.jsx)(Bn, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case kf.k_EThickChevron: {
      let e = r == `right` ? 0 : 180;
      return (0, M.jsx)(fn, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case kf.k_EFilledArrow: {
      let e = r == `right` ? 90 : 270;
      return (0, M.jsx)(Ct, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case kf.k_EPointyArrow:
      return (0, M.jsx)(Sn, {
        fill: t || `white`,
        role: `presentation`,
        direction: r || `left`,
      });
  }
}
function qf(e) {
  let {
      bIsActive: t,
      breadcrumbActiveColor: n,
      breadcrumbColor: r,
      breadcrumbStyle: i,
    } = e,
    a = t ? n || `#FFFFFF` : r || `#606974`;
  switch (i) {
    default:
    case Af.k_EPillCrumb:
      return (0, M.jsx)(Dn, { fill: a, role: `presentation` });
    case Af.k_ECircularCrumb:
      return (0, M.jsx)(er, { fill: a, role: `presentation` });
    case Af.k_ESquareCrumb:
      return (0, M.jsx)(On, { fill: a, role: `presentation` });
  }
}
export {
  gr as $,
  qr as A,
  Fr as B,
  ga as C,
  ti as D,
  ia as E,
  Mr as F,
  dr as G,
  Or as H,
  Ir as I,
  yr as J,
  Dr as K,
  kr as L,
  Vr as M,
  Rr as N,
  si as O,
  Lr as P,
  _r as Q,
  Ar as R,
  Da as S,
  ra as T,
  xr as U,
  Nr as V,
  br as W,
  wr as X,
  Tr as Y,
  hr as Z,
  Gc as _,
  Vf as a,
  bc as b,
  Ef as c,
  xf as d,
  ur as et,
  af as f,
  Zc as g,
  Kc as h,
  Gf as i,
  Gr as j,
  Qr as k,
  Df as l,
  _d as m,
  qf as n,
  kf as o,
  hd as p,
  Er as q,
  Uf as r,
  Af as s,
  Kf as t,
  Of as u,
  Mc as v,
  _a as w,
  L as x,
  Ac as y,
  Pr as z,
};
