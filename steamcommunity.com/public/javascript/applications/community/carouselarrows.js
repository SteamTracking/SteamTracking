/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e } from "./rolldown-runtime.js";
import {
  Ct as t,
  D as n,
  E as r,
  K as i,
  L as a,
  M as o,
  Pt as s,
  R as c,
  at as l,
  bt as u,
  j as d,
  ot as f,
  w as p,
} from "./libraries.js";
import {
  Ao as m,
  Cn as h,
  Dn as g,
  Ei as _,
  En as v,
  Fn as y,
  In as b,
  Ln as x,
  Mn as ee,
  On as S,
  Qr as C,
  Tn as te,
  To as ne,
  Ya as re,
  Za as ie,
  _n as ae,
  eo as oe,
  hn as se,
  jn as ce,
  kn as le,
  lo as ue,
  mn as de,
  po as fe,
  ro as pe,
  to as me,
  vn as he,
  vr as ge,
  wi as _e,
  wn as ve,
  wo as ye,
  xn as be,
  yn as xe,
} from "./vodquery.js";
import { C as Se, D as Ce, E as we } from "./clanstore.js";
import { t as Te } from "./throbber.js";
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
} from "./emoticonbutton.js";
import { i as tt, n as nt } from "./storeassets.js";
import { s as rt } from "./eventdevfeaturestore.js";
import { i as it, n as at, r as ot, t as st } from "./reactbbcodeparser.js";
import { S as ct, W as lt } from "./bbcodes.module.js";
import {
  R as ut,
  X as dt,
  Y as ft,
  a as pt,
  ct as mt,
  i as ht,
  lt as gt,
  s as _t,
} from "./simplesuccesserror.js";
import { t as vt } from "./visibilitytracker.js";
import { o as yt } from "./steammessages_loyalty_rewards_pb.js";
import {
  $f as bt,
  Ad as xt,
  Ao as St,
  As as Ct,
  Au as wt,
  Cc as Tt,
  Cf as Et,
  Cs as Dt,
  Cu as Ot,
  Df as kt,
  Ed as At,
  Ef as E,
  Fc as jt,
  Fi as Mt,
  Fp as Nt,
  Gd as Pt,
  Gf as Ft,
  Gl as It,
  Hd as Lt,
  Hh as Rt,
  Id as zt,
  Is as Bt,
  Jf as D,
  Ju as Vt,
  Ku as Ht,
  Ld as Ut,
  Lf as Wt,
  Lm as Gt,
  Ls as Kt,
  Mu as qt,
  Ns as Jt,
  Oo as Yt,
  Ph as O,
  Pp as Xt,
  Qd as Zt,
  Ql as Qt,
  Qu as $t,
  Rd as en,
  Rf as tn,
  Rp as nn,
  Sm as rn,
  Tp as an,
  Uf as on,
  Uu as sn,
  Wf as cn,
  Xo as ln,
  Xu as un,
  Yh as dn,
  Zd as k,
  Zl as fn,
  Zr as pn,
  _f as mn,
  aa as hn,
  ac as gn,
  ai as _n,
  cd as vn,
  cf as yn,
  ch as bn,
  cl as xn,
  cm as Sn,
  cp as Cn,
  dh as wn,
  ec as Tn,
  ef as En,
  em as A,
  fh as Dn,
  fu as On,
  gs as kn,
  ia as An,
  ih as jn,
  jo as Mn,
  js as Nn,
  kd as Pn,
  kl as Fn,
  ko as In,
  ku as Ln,
  ld as Rn,
  lf as zn,
  lm as Bn,
  ma as Vn,
  oc as Hn,
  on as Un,
  pm as Wn,
  qi as Gn,
  qm as Kn,
  rd as qn,
  sc as Jn,
  sh as Yn,
  tf as Xn,
  um as Zn,
  vf as Qn,
  wc as $n,
  wd as er,
  xc as tr,
  xd as nr,
  xu as j,
  yd as rr,
  za as ir,
  zd as ar,
  zi as or,
  zs as sr,
} from "./main.js";
var M = f(),
  cr = e(r(), 1),
  N = e(s(), 1),
  lr = N.createContext({ bCanUseLink: !1 }),
  ur = (function (e) {
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
  dr =
    /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
function fr(e) {
  return e.match(dr)?.[1];
}
function pr(e, t) {
  if (!t) return !1;
  let n = fr(window.location.href),
    r = t.GetEventType() == 36,
    i =
      (t.appid ? `games` : `groups`) == n &&
      ((t.appid && t.appid === Zn.APPID) ||
        (!t.appid && t.clanSteamID.GetAccountID() === Zn.CLANACCOUNTID));
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
      return dn(!1, `Unknown route specified for link: ` + e), !1;
  }
}
function mr(e) {
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
function hr(e) {
  return xr(e, `sale`, `absolute`);
}
function gr(e) {
  return xr(e, `storeview`, `absolute`);
}
function _r(e, t, n) {
  if (n)
    return (e ? `/games/` + Zn.VANITY_ID : `/groups/` + Zn.VANITY_ID) + `/`;
  let r = e ? `ogg/` + e : `gid/` + t.ConvertTo64BitString();
  return A.COMMUNITY_BASE_URL + r + `/`;
}
function vr() {
  return `news`;
}
function yr() {
  return !1;
}
function br(e) {
  return e.clanSteamID.GetAccountID() === 45479024 && !1;
}
function xr(e, t, n) {
  let { data: r } = an(e?.appid ? { appid: e.appid } : void 0);
  if (e) return Sr(e, r, t, n);
}
function Sr(e, t, n, r) {
  let i = r === `relative`,
    a = i ? `/` : A.STORE_BASE_URL,
    o = _r(e.appid, e.clanSteamID, i);
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
      return a + `${vr()}/${t}`;
    }
    case `store`:
      return (
        a +
        (e.appid ? `app/` + e.appid : `curator/` + e.clanSteamID.GetAccountID())
      );
    case `sale`:
      return e.jsondata.bSaleEnabled
        ? l
          ? `${me(t)}/${e.GetSaleUpdateLandingPageVanity()}`
          : u
            ? `${a}curator/${e.clanSteamID.GetAccountID()}`
            : a +
              pe(
                e.clanSteamID.GetAccountID(),
                e.GetSaleVanity(),
                !!e.jsondata.sale_vanity_id_valve_approved_for_sale_subpath,
              )
        : a;
    case `hardwarepreview`:
      return br(e) ? `${a}hardware_v2/${c}?beta=1` : a;
    case `communityview`:
      return o + `announcements/detail/` + c;
    case `storeview`:
      if (e.clanSteamID.GetAccountID() == Se())
        return `${A.STORE_BASE_URL}meetsteam/${s}`;
      if (l) return `${me(t)}/${e.GetSaleUpdateLandingPageVanity()}`;
      if (u) return `${a}curator/${e.clanSteamID.GetAccountID()}`;
      {
        let t = e.appid
            ? `app/${e.appid}`
            : `group/${e.clanSteamID.GetAccountID()}`,
          n = yr() ? `view_v2` : `view`,
          r = e.bOldAnnouncement ? `old_view/${c}` : `${n}/${s}`;
        return `${a}${vr()}/${t}/${r}`;
      }
    case `usernewshub`:
      return `${a}${vr()}/`;
    default:
      return dn(!1, `Unknown route specified for link`), ``;
  }
}
function Cr(e, t, n) {
  return xr(e, t, n === `forceAbsolute` || !pr(t, e) ? `absolute` : `relative`);
}
function wr(e) {
  let { eventModel: t, route: n, bPopup: r = !0 } = e,
    i = pr(n, t),
    a = xr(t, n, i ? `relative` : `absolute`);
  return (
    N.useEffect(() => {
      a && (r ? window.open(a) : window.location.assign(a));
    }, [r, a]),
    i && a ? (0, M.jsx)(u, { push: !0, to: a }) : null
  );
}
function Tr(e, t, n) {
  let r = _r(e, t, !1);
  switch (n) {
    case `admin`:
      return r + `partnerevents`;
    default:
      return ``;
  }
}
function Er(e) {
  let { eventModel: n, preferredFocus: r } = e,
    { bCanUseLink: i } = N.useContext(lr),
    a = _n(),
    o = t(),
    s = i && pr(e.route, n),
    c = xr(n, e.route, s ? `relative` : `absolute`),
    l = !s && c ? Jt(c) : c,
    u = s || !l ? l : pn(l, a),
    d = xr(n, `websitehub`, `absolute`),
    f =
      e.route == `websitehub` ? `` : mn.Localize(`#EventBrowse_MoreEventsBtn`),
    p = N.useCallback(() => {
      d && window.location.assign(d);
    }, [d]);
  return n
    ? s
      ? (0, M.jsx)(qt, {
          style: e.style,
          className: e.className,
          href: o.createHref({ pathname: u }),
          onClick: (t) => {
            u && (e.onClick?.(t), o.push(u), t.preventDefault());
          },
          onOptionsActionDescription: f,
          onOptionsButton: f ? p : void 0,
          preferredFocus: r,
          children: e.children,
        })
      : (0, M.jsx)(qt, {
          href: u,
          style: e.style,
          className: e.className,
          onClick: e.onClick,
          preferredFocus: r,
          onOptionsActionDescription: f,
          onOptionsButton: f ? p : void 0,
          children: e.children,
        })
    : null;
}
var Dr = `100% 0px 100% 0px`,
  Or = `SaleSection_`;
function kr() {
  return window.innerWidth ?? 1920;
}
function Ar() {
  return kr() >= 940;
}
function jr() {
  Un();
  let [e, t] = (0, N.useState)(() => kr());
  return (
    (0, N.useEffect)(() => {
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
    n = t >= 940,
    r = ge(e);
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
  let t = ge(e);
  return Ar()
    ? t.nMaxItemsPerRow
    : Math.min(
        Math.max(Math.floor(window.innerWidth / t.nItemMinimumWidth), 1),
        t.nMaxItemsPerRow,
      );
}
function Fr(e) {
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
var Ir = class extends at {
    m_LinkFilter = jn;
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
          i || super.AppendNode(T(r)),
            (n = e.input.substring(e.index + r.length)),
            (e = this.m_LinkFilter.exec(n));
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
        for (; e; ) {
          if (e.index > 0) {
            let n = e.input.substring(0, e.index);
            super.AppendText(n, t);
          }
          let r = e[1];
          super.AppendNode(N.createElement(Qe, { emoticon: r }, [])),
            (n = e.input.substring(e.index + r.length + 2)),
            (e = this.m_EmoteRegex.exec(n));
        }
      }
      n.length > 0 && super.AppendText(n, t);
    }
  },
  zr = class extends at {
    m_parentNode = void 0;
    constructor(e, t) {
      super(e), (this.m_parentNode = t);
    }
    AppendText(e, t = !1) {
      let n = e;
      this.m_parentNode &&
        this.m_parentNode.tag == `img` &&
        !Br(n) &&
        (n = Bt(n)),
        super.AppendText(n, t);
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
    a = _e(n, i),
    { data: o } = an(a),
    { data: s, isPending: c } = Nt(r ? a : void 0);
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
        className: j(Wr, `AppSummaryWidgetCtn`),
        children: Zt(
          e,
          (0, M.jsx)(`a`, { href: A.STORE_BASE_URL + `account/preferences/` }),
        ),
      });
    }
  }
  return (0, M.jsx)(`div`, {
    className: j(Wr, `AppSummaryWidgetCtn`),
    children: (0, M.jsx)(C, {
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
function Xr(e, t, n, r, a) {
  let o = l(),
    s = Cn();
  return i(Qr(o, s, e, t, n, r, a)).data ?? void 0;
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
        let o = await e.ensureQueryData(xe(e, t, n, r, i, a));
        if ((o && s.push(o), a != ue.full)) {
          let a = await e.ensureQueryData(xe(e, t, n, r, i, ue.full));
          a && s.push(a);
        }
      }
      if (!o)
        try {
          let r = await e.ensureQueryData(be(e, t, n));
          r && s.push(r);
        } catch (e) {
          if (
            (dn(
              !1,
              `Failed to get fallback art/screenshot for event ${n?.GID} from clan ${n?.clanSteamID.GetAccountID()}`,
            ),
            s.length == 0)
          )
            throw e;
        }
      return s;
    },
  };
}
function $r(e) {
  let t = Pt.GetELanguageFallback(e);
  return e == t ? `${e}` : `${e}_${t}`;
}
function ei(e) {
  return e ? he(new rn(e.clanSteamID64), e.event) : null;
}
async function ti(e, t) {
  let n = new URLSearchParams();
  e.clanAccountID && n.set(`clan_accountid`, String(e.clanAccountID)),
    e.appid && n.set(`appid`, String(e.appid)),
    e.eventGID && n.set(`event_gid`, e.eventGID),
    e.announcementGID && n.set(`announcement_gid`, e.announcementGID),
    n.set(`lang_list`, $r(t)),
    n.set(`last_modified_time`, `0`),
    n.set(`origin`, window.location.origin);
  let r = A.STORE_BASE_URL + `events/ajaxgetpartnerevent?` + n.toString(),
    i = await fetch(r);
  if (!i.ok) throw Error(`${r} answered ${i.status}`);
  let a = await i.json();
  return a.success !== 1 || !a.event?.clan_steamid
    ? null
    : { clanSteamID64: a.event.clan_steamid, event: a.event };
}
function ni(e, t) {
  return [
    `LinkedPartnerEvent`,
    e.clanAccountID,
    e.appid,
    e.eventGID,
    e.announcementGID,
    t,
  ];
}
function ri(e) {
  return (
    !!e &&
    (!!e.clanAccountID || !!e.appid) &&
    (!!e.eventGID || !!e.announcementGID)
  );
}
function ii(e, t) {
  let n = ri(e);
  return {
    queryKey: ni(e ?? {}, t),
    queryFn: () => ti(e ?? {}, t),
    select: ei,
    enabled: n,
    staleTime: 36e5,
    retry: !1,
  };
}
function ai(e) {
  let t = Kn(A.LANGUAGE);
  return i(ii(e, t));
}
function oi({ clanSteamID: e, strVanity: t, strGroupVanity: n }) {
  let r = t !== void 0 || n !== void 0,
    { data: i, isPending: a } = Ce(
      r ? (t ?? n ?? ``) : ``,
      t === void 0 ? `group` : `store`,
    );
  if (!r) return e?.GetAccountID();
  if (!a) return i?.clanAccountID ?? null;
}
function si(e) {
  let { appid: t, announcementGID: n, eventGID: r, strURL: i } = e,
    a = oi(e),
    o = a === null,
    {
      data: s,
      isPending: c,
      isError: l,
    } = ai(
      o
        ? void 0
        : {
            clanAccountID: a ?? void 0,
            appid: t,
            eventGID: r,
            announcementGID: n,
          },
    ),
    u = m(t || s?.appid || void 0),
    { data: d } = an(u);
  if (o || l || s === null) return T(i);
  if (c || !s) return (0, M.jsx)(Te, {});
  let f = Kn(A.LANGUAGE),
    p = s.GetNameWithFallback(f),
    h = s.GetSubTitleWithSummaryFallback(f),
    g = d?.name,
    _ = yn(s.GetStartTimeAndDateUnixSeconds());
  return (0, M.jsxs)(Er, {
    eventModel: s,
    route: ur.k_eView,
    className: Be.Box,
    "data-modal-content-sizetofit": !0,
    "data-appid": t,
    children: [
      (0, M.jsx)(ci, { ...e, event: s }),
      (0, M.jsxs)(ze, {
        children: [
          (0, M.jsxs)(Ze, {
            children: [
              k(
                s.type == 28
                  ? `#EventDisplay_Share_Announcement`
                  : `#EventDisplay_Share_Event`,
                g ?? ``,
              ),
              (0, M.jsx)(Ve, { children: _ }),
            ],
          }),
          (0, M.jsx)(Ee, {
            children: (0, M.jsx)(`div`, { className: Be.Type, children: p }),
          }),
          (0, M.jsx)(Le, { children: h }),
        ],
      }),
    ],
  });
}
function ci(e) {
  let {
      event: t,
      fnFilterImageURLsForKnownFailures: n,
      fnImageFailureCallback: r,
    } = e,
    i = Xr(t, `capsule`, Kn(A.LANGUAGE), ue.capsule_main) ?? [];
  return (
    i && n && (i = n(i)),
    (0, M.jsx)(We, {
      className: Be.Preview,
      rgSources: i ?? [],
      onIncrementalError: (e, t, n) => r && r(t),
    })
  );
}
var li =
    /(?:steampowered\.com|store\.steamchina\.com|store[\w-]*\.(?:[\w.-]+\.)?(?:steam\.dev|valve\.org)|valve\.org\/store)\/(app|bundle|sub)\/(\d+)/i,
  ui = [`store.steampowered.com`, `store.steamchina.com`],
  di = [`steampowered.com`, `steamcommunity.com`],
  fi = [`steamchina.com`],
  pi = [`steam.dev`, `valve.org`];
function mi(e, t) {
  return t.some((t) => e == t || e.endsWith(`.${t}`));
}
function hi(e) {
  let t = Nn(e).toLocaleLowerCase(),
    n = Nn(A.STORE_BASE_URL).toLocaleLowerCase(),
    r = Nn(A.COMMUNITY_BASE_URL).toLocaleLowerCase();
  return t == n || t == r
    ? !0
    : ui.includes(n)
      ? mi(t, mi(n, fi) ? fi : di)
      : mi(t, [...di, ...fi, ...pi]);
}
function gi(e) {
  if (hi(e)) return _i(e);
}
function _i(e) {
  let t = new RegExp(li).exec(e);
  if (!t || t.length <= 2) return;
  let n = t[1].toLowerCase(),
    r = Number(t[2]);
  if (r > 0 && kt(n))
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
function vi(e) {
  return !!e && (e.GetEventType() == 36 || e.GetEventType() == 20);
}
function yi(e) {
  let t = vi(e),
    n = t ? e.clanSteamID.GetAccountID() : void 0,
    { data: r, isLoading: i } = we(n),
    { data: a, isLoading: o } = ye(n);
  if (!t) return null;
  if (!(i || o)) return !a || !r || !gf(e, r) ? null : (a.appids ?? []);
}
function bi(e, t) {
  return e === null || (t.length > 0 && t.every((t) => e.includes(t)));
}
function xi(e, t) {
  let n = yi(t);
  if (e.appid === void 0) return !0;
  if (!(e.appid > 0)) return !1;
  if (n !== void 0) return bi(n, [e.appid]);
}
function Si({ link: e, strURL: t, eventModel: n, bAnnouncement: r }) {
  let i = xi(e, n);
  if (i === void 0) return null;
  if (!i) return T(t, n);
  let a =
    e.strClanSteamID64 === void 0
      ? e.clanAccountID === void 0
        ? void 0
        : rn.InitFromClanID(e.clanAccountID, A.EUNIVERSE)
      : new rn(e.strClanSteamID64);
  return (0, M.jsx)(si, {
    appid: e.appid,
    clanSteamID: a,
    strVanity: e.strOGGVanity,
    strGroupVanity: e.strGroupVanity,
    eventGID: r ? void 0 : e.eventGID,
    announcementGID: r ? e.eventGID : void 0,
    strURL: t,
  });
}
function Ci(e, t, n, r = !1) {
  if (hi(t)) {
    let i = Yr(e, t);
    if (i)
      return (0, M.jsx)(Si, {
        link: i,
        strURL: t,
        eventModel: n?.event,
        bAnnouncement: r,
      });
  }
  return T(t, n?.event);
}
function wi(e, t) {
  return Ci(qr, e, t);
}
function Ti(e, t) {
  return Ci(Kr, e, t);
}
function Ei(e, t) {
  return Ci(Jr, e, t, !0);
}
var Di = /community.+sharedfiles\/filedetails\/\?id=\d+/i;
function Oi(e) {
  if (!Di.test(e)) return;
  let t = e.split(`?`);
  if (t.length == 2) return new URLSearchParams(t[1]).get(`id`) ?? void 0;
}
function ki(e) {
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
    a = bn(i.url) ? r + i.url : i.url,
    o = i.personnaname !== void 0 && i.personnaname.length > 0;
  return (0, M.jsx)(Fr, {
    strURL: a,
    strTitle: i.title,
    strPreviewURL: i.previewurl,
    strType: i.type,
    strDescription: i.description,
    author:
      o &&
      Xn(`#EventEditor_Author`, (0, M.jsx)(Me, { children: i.personnaname })),
    publishedfileid: t,
    appid: i.appid,
    bSizeToFit: i.bSizeToFit,
  });
}
var Ai = `x-q4pa21GtQ-`,
  ji = `jjfjy77nkEg-`,
  Mi = `xk1sG-uqpwY-`,
  Ni = `XZqUhfrxufg-`,
  Pi = `h4V9nI3kyqU-`,
  Fi = `gCqj4CIOecY-`,
  Ii = /sketchfab\.com\/(?:models\/(?:[^/\s]+-)?)([a-z0-9]{32})/i;
function Li(e) {
  return [`sketchfab_oembed`, e];
}
function Ri(e) {
  return `https://sketchfab.com/oembed?url=https://sketchfab.com/models/${encodeURIComponent(e)}`;
}
function zi(e) {
  return {
    queryKey: Li(e),
    queryFn: async () => {
      let t = await fetch(Ri(e));
      if (t.status === 404) return null;
      if (!t.ok) throw Error(`sketchfab oembed returned ${t.status}`);
      return await t.json();
    },
    enabled: !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function Bi(e) {
  return i(zi(e));
}
function Vi(e) {
  let { modelID: t } = e,
    [n, r] = N.useState(!0),
    { data: i } = Bi(t);
  if (n) {
    let e = () => r(!1);
    return (0, M.jsxs)(`div`, {
      className: Mi,
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
        (0, M.jsx)(`img`, { className: Ai, alt: `` }),
        (0, M.jsxs)(`div`, {
          className: Ni,
          children: [
            (0, M.jsxs)(`div`, {
              className: Pi,
              children: [
                (0, M.jsx)(`span`, {
                  className: Fi,
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
    className: ji,
    children: (0, M.jsx)(`iframe`, {
      className: ji,
      title: i?.title ?? t,
      src: `https://sketchfab.com/models/${encodeURIComponent(t)}/embed?autostart=1`,
      frameBorder: 0,
      allowFullScreen: !0,
    }),
  });
}
var Hi =
  /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.[\w.-]+\.steam\.dev|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
function Ui(e) {
  let t = Hi.exec(e),
    n = t ? Number(t[1]) : 0;
  return n > 0 ? n : void 0;
}
function Wi(e) {
  return hi(e) ? Ui(e) : void 0;
}
var Gi = `_8mFolns3-hw-`;
function Ki(e) {
  let { defid: t } = e,
    n = pf(t);
  if (!n || !n.community_item_data) return null;
  let r = n.appid,
    i = n.community_item_data.item_image_large,
    a = `${A.MEDIA_CDN_COMMUNITY_URL}images/items/${r}/${i}`;
  return (0, M.jsx)(`div`, {
    className: Gi,
    children: (0, M.jsx)(kn, {
      toolTipContent: n.community_item_data.item_description,
      children: (0, M.jsx)(`img`, {
        src: a,
        alt: n.community_item_data.item_title,
      }),
    }),
  });
}
var qi = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
  Ji = /twitter\.com\/(\w+)(\/?)$/i,
  Yi = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
  Xi = /twitch\.tv\/(\w+)(\/?)$/i,
  Zi =
    /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i;
function Qi() {
  return A.EREALM === Gt.k_ESteamRealmChina;
}
var $i = new Map();
function ea() {
  let e = A.EREALM,
    t = $i.get(e);
  return (
    t ||
      ((t = Qi()
        ? [
            { urlRegExp: new RegExp(li), fnBBComponent: oa },
            { urlRegExp: new RegExp(Kr), fnBBComponent: Ti },
            { urlRegExp: new RegExp(qr), fnBBComponent: wi },
            { urlRegExp: new RegExp(Jr), fnBBComponent: Ei },
            { urlRegExp: new RegExp(Zi), fnBBComponent: fa },
          ]
        : [
            {
              urlRegExp: new RegExp(/youtu.be|youtube.com/i),
              fnBBComponent: je,
            },
            { urlRegExp: new RegExp(Di), fnBBComponent: aa },
            { urlRegExp: new RegExp(li), fnBBComponent: oa },
            { urlRegExp: new RegExp(Kr), fnBBComponent: Ti },
            { urlRegExp: new RegExp(qr), fnBBComponent: wi },
            { urlRegExp: new RegExp(Jr), fnBBComponent: Ei },
            { urlRegExp: new RegExp(qi), fnBBComponent: ra },
            { urlRegExp: new RegExp(Ii), fnBBComponent: ia },
            { urlRegExp: new RegExp(Ji), fnBBComponent: la },
            { urlRegExp: new RegExp(Yi), fnBBComponent: ua },
            { urlRegExp: new RegExp(Xi), fnBBComponent: da },
            { urlRegExp: new RegExp(Zi), fnBBComponent: fa },
            { urlRegExp: new RegExp(Hi), fnBBComponent: ca },
          ]),
      $i.set(e, t)),
    t
  );
}
function ta(e) {
  return ea().find((t) => !!t.urlRegExp.exec(e));
}
function na(e) {
  return N.useMemo(() => ta(e), [e]);
}
function ra(e, t) {
  if (Qi()) return null;
  let n = new RegExp(qi).exec(e);
  if (n && n.length > 1) {
    let e = n[1];
    if (e?.length > 0) {
      let n =
        `https://medal.tv/clip/` +
        e +
        `/?autoplay=0&donate=0` +
        (t && t.event ? `&steamappid=` + t.event.appid : ``);
      return (0, M.jsx)(`iframe`, {
        className: ee,
        src: n,
        title: e,
        frameBorder: 0,
        allow: `autoplay`,
      });
    }
  }
  return T(e, t?.event);
}
function ia(e, t) {
  let n = new RegExp(Ii).exec(e);
  if (n && n.length > 1) {
    let e = n[1];
    if (e && e.length > 1) return (0, M.jsx)(Vi, { modelID: e });
  }
  return T(e, t?.event);
}
function aa(e, t) {
  let n = Oi(e);
  return n === void 0 ? T(e, t?.event) : (0, M.jsx)(ki, { sharedFileID: n });
}
function oa(e, t) {
  let n = gi(e);
  return n
    ? (0, M.jsx)(sa, {
        eventModel: t?.event,
        inputID: n.id,
        inputType: n.strItemType,
        fallbackUrl: e,
      })
    : T(e, t?.event);
}
function sa(e) {
  let { inputID: t, inputType: n, eventModel: r, fallbackUrl: i } = e,
    a = _(t, n),
    { data: o } = an(a),
    s = yi(r),
    c;
  return (
    s === null
      ? (c = !0)
      : s && o && (c = bi(s, o.appid ? [o.appid] : (o.included_appids ?? []))),
    c === void 0
      ? null
      : c
        ? (0, M.jsx)(Gr, { id: t, inputType: n, bApplyUserContentPref: !0 })
        : T(i, r)
  );
}
function ca(e, t) {
  let n = Wi(e);
  return n
    ? (0, M.jsx)(`div`, {
        className: j(ce),
        children: (0, M.jsx)(Ki, { defid: n, url: e }),
      })
    : T(e, t?.event);
}
function la(e, t) {
  return Qi() ? null : pa(e, (0, M.jsx)(Qt, {}), `@`, t);
}
function ua(e, t) {
  return Qi() ? null : pa(e, (0, M.jsx)(Qt, {}), `#`, t);
}
function da(e, t) {
  return Qi() ? null : pa(e, (0, M.jsx)(fn, {}), void 0, t);
}
function fa(e, t) {
  return pa(e, (0, M.jsx)(Fn, {}), void 0, t);
}
function pa(e, t, n, r) {
  let i,
    a = e.endsWith(`/`) ? e.length - 1 : e.length,
    o = e.lastIndexOf(`/`, a - 1);
  o != -1 && o + 1 < e.length && (i = e.substring(o + 1, a)),
    n && i && (i = n + i);
  let s = T(e, r?.event, i ?? e);
  return (0, M.jsxs)(`div`, {
    className: x,
    children: [(0, M.jsx)(`div`, { className: b, children: t }), s],
  });
}
function ma(e) {
  switch (e) {
    case `button`:
      return j(S, `LinkButton`);
    case `pill`:
      return j(le, `LinkPill`);
    default:
      return j(g, `Link`);
  }
}
function ha(e, t, n) {
  let r = ``;
  return (
    e == `button` && t && (r += `background-color: ${t};`),
    e == `pill` && n && (r += `color: ${n};`),
    r.length == 0 ? void 0 : r
  );
}
function ga(e, t, n) {
  let r;
  return (
    (e == `button` || e == `pill`) && t && (r = { backgroundColor: t }),
    (e == `button` || e == `pill`) && n && (r = { ...(r ?? {}), color: n }),
    r
  );
}
function _a(e, t) {
  let n = (
    typeof e == `string`
      ? e
      : Array.isArray(e) && e.length == 1 && typeof e[0] == `string`
        ? e[0]
        : void 0
  )?.trim();
  return !n || !t || n != t.trim();
}
function va(e) {
  let t = lt(w(e.args) || w(e.args, `href`)),
    n = w(e.args, `style`),
    r = w(e.args, `id`),
    i = Ur(w(e.args, `buttoncolor`) || w(e.args, `bgcolor`), void 0),
    a = Ur(w(e.args, `labelcolor`) || w(e.args, `color`), void 0),
    o = ma(n),
    s = e.context.event,
    c = fe(t, e.language, s?.rtime32_last_modified),
    l = na(_a(e.children, t) ? `` : (t ?? ``));
  if (l && t) return l.fnBBComponent(t, { event: e.context.event });
  if (c === void 0 || c == null) return e.children || ``;
  t = typeof c == `string` ? c : c[1];
  let u = ga(n, i, a);
  return typeof t == `string` && t.length > 0 && t[0] == `#`
    ? (0, M.jsx)(qt, { className: o, href: t, style: u, children: e.children })
    : t == `steam://settings/account`
      ? (0, M.jsx)(Dt, {
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
function ya(e) {
  let t = w(e.args, `href`),
    n = na(t);
  return n
    ? n.fnBBComponent(t, { event: e.context.event })
    : (0, M.jsx)(va, { ...e });
}
var ba = `hPeepTEP2A0-`,
  xa = `RzxfM12jbio-`,
  Sa = `kQJ64kMGQbg-`,
  Ca = `_74WMutU3Gxc-`,
  wa = (0, N.createContext)({});
function Ta(e) {
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
  return (0, M.jsx)(wa.Provider, { value: c, children: s });
}
function Ea() {
  return (0, N.useContext)(wa);
}
var Da = 5,
  Oa = (function (e) {
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
    m_listeners = new Et();
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
    m_eFailureReason = pt.Invalid;
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
      a(this), (this.m_persistState = e || {});
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
        (this.m_player = new ht(this.m_elVideo)),
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
        (this.m_eFailureReason = e.detail || pt.PlaybackError);
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
        (Ma(this.m_player, this.m_strStatsURL, this.m_eFailureReason),
        (this.m_bSentStats = !0));
    }
  };
E([c], P.prototype, `m_bPaused`, void 0),
  E([c], P.prototype, `m_bUserInputNeeded`, void 0),
  E([c], P.prototype, `m_bMuted`, void 0),
  E([c], P.prototype, `m_nVolume`, void 0),
  E([c], P.prototype, `m_eFailureReason`, void 0),
  E([c], P.prototype, `m_maxDimensions`, void 0),
  E([c], P.prototype, `m_bPlaybackStarted`, void 0),
  E([c], P.prototype, `m_bBuffering`, void 0),
  E([c], P.prototype, `m_bHasCaptions`, void 0),
  E([c], P.prototype, `m_bShowingCaption`, void 0),
  E([c], P.prototype, `m_nPlaybackTime`, void 0),
  E([c], P.prototype, `m_nVideoStartTime`, void 0),
  E([c], P.prototype, `m_nVideoDuration`, void 0),
  E([c], P.prototype, `m_nBufferedEndTime`, void 0),
  E([d.bound], P.prototype, `OnVideoPlaying`, null),
  E([O], P.prototype, `OnVideoPause`, null),
  E([d.bound], P.prototype, `OnVideoTimeUpdate`, null),
  E([O], P.prototype, `OnVolumeChange`, null),
  E([O], P.prototype, `OnVideoEnd`, null),
  E([O], P.prototype, `OnVideoValveEnded`, null),
  E([O], P.prototype, `OnDownloadFailed`, null),
  E([O], P.prototype, `OnUserInputNeeded`, null),
  E([d.bound], P.prototype, `OnMetadataChanged`, null),
  E([d.bound], P.prototype, `OnCaptionsChange`, null),
  E([O], P.prototype, `UserInputReceived`, null),
  E([d.bound], P.prototype, `SetMuteInternal`, null),
  E([O], P.prototype, `SendStats`, null);
function ka(e, t, n, r, i, a, o) {
  let s = Ea(),
    c = (0, N.useRef)(void 0);
  c.current ||= new P(s);
  let l = xt(
    (i) => {
      if (i) return c.current.Start(i, e, t, n, r), () => c.current.Stop();
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
      c.current.SetOnMuteChangeCallback(o), o && o(c.current.GetMuted());
    }, [o]),
    [l, c.current]
  );
}
function Aa(e, t) {
  (t = !!t),
    (0, N.useEffect)(() => {
      e.SetMuteWhenAutoplayBlocked(t);
    }, [e, t]);
}
function ja(e, t) {
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
function Ma(e, t, n) {
  if (!navigator || navigator.sendBeacon === void 0) return;
  let r = e.GetDASHPlayerStats().GetPlayerStatsSummary(),
    i = e.GetAndCloseWatchedIntervals();
  if (i.reduce((e, t) => e + (t[1] - t[0]), 0) < Da && n == pt.Invalid) return;
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
function Na(e, t) {
  if (!e || Ht(e) || qn(e) || !t) return;
  let n = e.getElementsByTagName(`video`);
  if (n.length == 0) return;
  let r = n[0];
  r.webkitSetPresentationMode && r.webkitSetPresentationMode(`fullscreen`);
}
(0, N.createContext)(void 0);
function Pa(e) {
  return e ? e instanceof HTMLDialogElement : !1;
}
function Fa(e) {
  return e ? e.hasAttribute(`popover`) : !1;
}
var Ia = (0, N.createContext)(void 0);
function La(e) {
  let {
      iosVideoFallback: t,
      supportsTheater: n,
      supportsFullscreen: r,
      children: i,
    } = e,
    a = (0, N.useRef)(null),
    o = (0, N.useRef)(null),
    [s, c] = (0, N.useState)(`none`);
  sr(s == `theater`), (n = !!n), (r = !!r);
  let l = xt(
      (e) => {
        if (((o.current = e), !e)) return;
        let t = () => {
          c((t) => (Ht(e) ? `fullscreen` : t == `fullscreen` ? `none` : t));
        };
        return (
          e.addEventListener(`fullscreenchange`, t),
          () => e.removeEventListener(`fullscreenchange`, t)
        );
      },
      [c],
    ),
    u = xt(
      (e) => {
        if (((a.current = e), !e)) return;
        let t = () => {
            c((e) => (e == `theater` ? `none` : e));
          },
          n = (t) => {
            t.currentTarget == t.target && Pa(e) && e.close();
          },
          r = (e) => {
            e.newState == `close` && t();
          },
          i = new Et();
        return (
          Pa(e)
            ? (i.AddEventListener(e, `close`, t),
              i.AddEventListener(e, `click`, n))
            : Fa(e)
              ? i.AddEventListener(e, `beforetoggle`, r)
              : dn(!1, `Was expecting a dialog or popover`),
          () => i.Unregister()
        );
      },
      [c],
    ),
    d = (0, N.useCallback)(
      (e) => {
        let n = o.current,
          r = a.current;
        n &&
          (e != `fullscreen` && Ht(n) && un(n),
          e == `fullscreen` && Na(n, !!t)),
          Pa(r) &&
            (e != `theater` && r.open && r.close(),
            e == `theater` && r.showModal()),
          Fa(r) &&
            (e != `theater` && r.matches(`:popover-open`) && r.hidePopover(),
            e == `theater` && r.showPopover()),
          c(e);
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
  return (0, M.jsx)(Ia.Provider, { value: f, children: i });
}
function Ra() {
  return (0, N.useContext)(Ia);
}
function za(e, t) {
  return (0, N.useCallback)(() => {
    e && (e.strMode == t ? e.fnSetMode(`none`) : e.fnSetMode(t));
  }, [e, t]);
}
var Ba = `A5RRwjvEUvY-`,
  Va = `-H-CbOmskAk-`,
  Ha = `BhmPQ-Xd2d8-`,
  Ua = `_7zvFUI6bX2k-`,
  Wa = `uacZ-90MOII-`,
  Ga = `k9Sm1n-4mwI-`,
  Ka = `EE0MOLi31qY-`,
  qa = `_7GE4TR2MB3I-`,
  Ja = `pQYV6KivA1I-`,
  Ya = `pEu8vzuL1UY-`,
  Xa = `ntDKWvpd0tk-`,
  Za = `m9RGLw-x46M-`;
function Qa() {
  return xt((e) => {
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
var $a = (0, N.forwardRef)(function (e, t) {
    let { children: n, ...r } = e,
      i = Qa(),
      a = Pn(i, t);
    return (0, M.jsx)(`div`, { ref: a, ...r, children: n });
  }),
  eo = 2e3,
  to = 500,
  no = 4e3,
  ro = -1,
  io = N.createContext(void 0);
function ao() {
  return (0, N.useContext)(io);
}
function oo(e, t, n) {
  return (0, N.useMemo)(
    () => ({ m_bMenuVisible: e, m_fnSetMenuVisible: t, m_refMenuLayer: n }),
    [e, t, n],
  );
}
function so() {
  let e = ao();
  return e ? e.m_bMenuVisible : !1;
}
function co() {
  let e = ao();
  dn(e, `Missing controls context`);
  let t = e.m_fnSetMenuVisible;
  return (0, N.useEffect)(() => (t(!0), () => t(!1)), [t]), e.m_refMenuLayer;
}
function lo(e, t) {
  let [n, r] = po(e);
  return [n || t, r];
}
function uo(e) {
  return e.pointerType == `touch` ? no : eo;
}
function fo() {
  return to;
}
function po(e) {
  let [t, n] = go(),
    r = (0, N.useRef)(void 0),
    i = (0, N.useRef)(!1),
    a = (0, N.useRef)({ element: void 0, bKeepControls: !1 }),
    o = (0, N.useCallback)(
      (e) => {
        if (e.target == a.current.element) return;
        let t = mo(e);
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
  F(e),
    _o(
      e,
      (0, N.useCallback)(
        (e) => {
          (i.current = e), s(eo);
        },
        [i, s],
      ),
    ),
    vo(
      e,
      (0, N.useCallback)(() => {
        s(eo);
      }, [s]),
    );
  let c = (0, N.useCallback)(
      (e) => {
        e.pointerType != `touch` && (o(e), s(uo(e)));
      },
      [s, o],
    ),
    l = (0, N.useCallback)(
      (e) => {
        e.pointerType != `touch` && (o(e), s(uo(e)));
      },
      [o, s],
    ),
    u = (0, N.useCallback)(
      (e) => {
        e.pointerType != `touch` &&
          ((a.current = { element: void 0, bKeepControls: !1 }), s(fo()));
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
          (r.current = void 0), e.currentTarget == t && s(uo(e));
        },
        [s],
      ),
      onPointerCancel: f,
    },
  ];
}
function mo(e) {
  let t = e.target,
    n = e.currentTarget;
  for (; t && t != n; ) {
    if (t.dataset?.keepcontrols == `true`) return !0;
    t = t.parentElement;
  }
  return !1;
}
function ho(e) {
  let t = (0, N.useRef)(ro);
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
        t.current == e.pointerId && (t.current = ro);
      },
      [t],
    ),
    onPointerUp: (0, N.useCallback)(
      (n) => {
        if (t.current != n.pointerId) return;
        n.currentTarget.releasePointerCapture(n.pointerId), (t.current = ro);
        let r = n.currentTarget.getBoundingClientRect(),
          { clientX: i, clientY: a } = n;
        i >= r.left && i <= r.right && a >= r.top && a <= r.bottom && e(n);
      },
      [t, e],
    ),
  };
}
function go() {
  let [e, t] = (0, N.useState)(!1),
    n = (0, N.useRef)(void 0),
    r = (0, N.useCallback)(
      (e, r) => {
        (n.current &&= (window.clearTimeout(n.current), void 0)),
          t(e),
          e && r != 0 && (n.current = window.setTimeout(() => t(!1), r));
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
function _o(e, t) {
  let n = (0, N.useRef)(!0),
    r = F(e);
  (0, N.useEffect)(() => {
    let e = n.current;
    (n.current = !1), (!e || r) && t(r);
  }, [r, t, n]);
}
function vo(e, t) {
  let n = (0, N.useRef)(!0),
    r = p(() => e.GetMuted());
  (0, N.useEffect)(() => {
    let e = n.current;
    (n.current = !1), !e && t();
  }, [r, t, n]);
}
function yo(e) {
  let [t, n] = p(() => [e.GetMuted(), e.GetVolume()]);
  return [
    t,
    n,
    (0, N.useCallback)(
      (t) => {
        e.SetMute(!1), e.SetVolume(t);
      },
      [e],
    ),
    (0, N.useCallback)(() => e.SetMute(!t), [t, e]),
  ];
}
function bo(e) {
  return p(() => [
    e.GetPlaybackTime(),
    e.GetTimelineDuration(),
    e.GetBufferedEndTime(),
  ]);
}
function xo(e) {
  return p(() => e.GetFailureReason());
}
function F(e) {
  return p(() => e.IsPaused());
}
function So(e) {
  return (0, N.useCallback)(() => {
    e.TogglePlayPause();
  }, [e]);
}
function Co(e, t) {
  (0, N.useEffect)(() => {
    let n = o(() => {
      let n = e.GetMaxVideoDimensions();
      t(n ? { nWidth: n.nWidth, nHeight: n.nHeight } : null);
    });
    return () => n();
  }, [e, t]);
}
function wo(e) {
  return p(() => e.HasPlaybackStarted());
}
function To(e) {
  return p(() => ({
    bHasCaptions: e.HasCaptions(),
    bShowingCaption: e.IsShowingCaption(),
  }));
}
var Eo = `cOcEiRe-dIg-`,
  Do = `QkF4JCVWpWw-`,
  Oo = `_8RH876Wgr7A-`,
  ko = `b0G5PgYKHAM-`,
  Ao = `_68B-8ItOIlc-`,
  jo = `GsDewiltMCM-`,
  Mo = `BffT7IQWKYg-`,
  No = `aejFKWIp7Dg-`,
  Po = `eBjRkRA8NpA-`,
  Fo = `RrXwg35xzWc-`,
  Io = `_98b2uQrBfN4-`,
  Lo = `LCeQJ5hJTnk-`,
  Ro = `OPuK3adv80Y-`,
  zo = `qFZtjvdCOxo-`,
  Bo = `vzX4l4uGgUg-`,
  Vo = `HOEA4Jz0kQU-`,
  Ho = `AAuicaihzn0-`,
  I = {};
(I.arabic = () =>
  D(() => import(`./video_players_arabic.js`), [], import.meta.url)),
  (I.brazilian = () =>
    D(() => import(`./video_players_brazilian.js`), [], import.meta.url)),
  (I.bulgarian = () =>
    D(() => import(`./video_players_bulgarian.js`), [], import.meta.url)),
  (I.czech = () =>
    D(() => import(`./video_players_czech.js`), [], import.meta.url)),
  (I.danish = () =>
    D(() => import(`./video_players_danish.js`), [], import.meta.url)),
  (I.dutch = () =>
    D(() => import(`./video_players_dutch.js`), [], import.meta.url)),
  (I.english = () =>
    D(() => import(`./video_players_english.js`), [], import.meta.url)),
  (I.finnish = () =>
    D(() => import(`./video_players_finnish.js`), [], import.meta.url)),
  (I.french = () =>
    D(() => import(`./video_players_french.js`), [], import.meta.url)),
  (I.german = () =>
    D(() => import(`./video_players_german.js`), [], import.meta.url)),
  (I.greek = () =>
    D(() => import(`./video_players_greek.js`), [], import.meta.url)),
  (I.hungarian = () =>
    D(() => import(`./video_players_hungarian.js`), [], import.meta.url)),
  (I.indonesian = () =>
    D(() => import(`./video_players_indonesian.js`), [], import.meta.url)),
  (I.italian = () =>
    D(() => import(`./video_players_italian.js`), [], import.meta.url)),
  (I.japanese = () =>
    D(() => import(`./video_players_japanese.js`), [], import.meta.url)),
  (I.koreana = () =>
    D(() => import(`./video_players_koreana.js`), [], import.meta.url)),
  (I.latam = () =>
    D(() => import(`./video_players_latam.js`), [], import.meta.url)),
  (I.malay = () =>
    D(() => import(`./video_players_malay.js`), [], import.meta.url)),
  (I.norwegian = () =>
    D(() => import(`./video_players_norwegian.js`), [], import.meta.url)),
  (I.polish = () =>
    D(() => import(`./video_players_polish.js`), [], import.meta.url)),
  (I.portuguese = () =>
    D(() => import(`./video_players_portuguese.js`), [], import.meta.url)),
  (I.romanian = () =>
    D(() => import(`./video_players_romanian.js`), [], import.meta.url)),
  (I.russian = () =>
    D(() => import(`./video_players_russian.js`), [], import.meta.url)),
  (I.sc_schinese = () =>
    D(() => import(`./video_players_sc_schinese.js`), [], import.meta.url)),
  (I.schinese = () =>
    D(() => import(`./video_players_schinese.js`), [], import.meta.url)),
  (I.spanish = () =>
    D(() => import(`./video_players_spanish.js`), [], import.meta.url)),
  (I.swedish = () =>
    D(() => import(`./video_players_swedish.js`), [], import.meta.url)),
  (I.tchinese = () =>
    D(() => import(`./video_players_tchinese.js`), [], import.meta.url)),
  (I.thai = () =>
    D(() => import(`./video_players_thai.js`), [], import.meta.url)),
  (I.turkish = () =>
    D(() => import(`./video_players_turkish.js`), [], import.meta.url)),
  (I.ukrainian = () =>
    D(() => import(`./video_players_ukrainian.js`), [], import.meta.url)),
  (I.vietnamese = () =>
    D(() => import(`./video_players_vietnamese.js`), [], import.meta.url));
async function Uo(e) {
  if (I[e]) return await I[e]();
}
var L = Qn(Uo);
function Wo(e) {
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
var Go = `12px`,
  Ko = `LzRinklSJ-4-`,
  qo = `_2uk-hbrhKFI-`,
  Jo = `Y9S-qDK8XPE-`,
  Yo = 4,
  Xo = parseInt(Go);
function Zo(e) {
  let { refButton: t, onClose: n, scroll: r, children: i } = e,
    a = (0, N.useRef)(null),
    [o, s] = (0, N.useState)({ nLeft: 0, nTop: 0 }),
    c = co(),
    l = xt(
      (e) => {
        if (((a.current = e), !e)) return;
        let r = (r) => {
          let i = Vt(e, r.target),
            a = Vt(t.current, r.target);
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
        d = Yn(l - u / 2, 0 + Yo, i - u - Yo),
        f = e.bottom - e.top,
        p = r.top - Xo - f - n.top;
      s({ nLeft: d, nTop: p });
    }, [a, t, c]),
    !c.current || !i)
  )
    return null;
  let u = { left: o.nLeft, top: o.nTop },
    d = j(Ko, !!r && `kaHR0KlvcO4-`),
    f = (0, M.jsx)(`div`, {
      ref: l,
      style: u,
      className: d,
      role: `menu`,
      children: i,
    });
  return cr.createPortal(f, c.current);
}
function Qo(e) {
  return (0, M.jsx)(`div`, { className: Jo, role: `separator` });
}
function $o(e) {
  let { onClick: t, checked: n, children: r } = e,
    [i, a] = er(),
    o = j(qo, n && `vi2dzrdIGJY-`),
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
      children: [r, n && (0, M.jsx)(Tt, { color: s, highlightColor: c })],
    })
  );
}
function es(e) {
  let { player: t, refButton: n, onClose: r } = e,
    i = Ea(),
    a = t.GetVideoRepresentations().map((e) => {
      let n = () => {
          t.SetVideoRepresentation(e), r();
        },
        i = ns(e);
      return (0, M.jsx)(
        $o,
        { onClick: n, checked: e.selected, children: i },
        e.id,
      );
    }),
    o = a.length > 1,
    s = !!i.m_fnSetAutoplayEnabled,
    c = o || !s;
  return (0, M.jsxs)(Zo, {
    refButton: n,
    onClose: r,
    children: [
      c && a,
      s && c && (0, M.jsx)(Qo, {}),
      s && (0, M.jsx)(ts, { onClose: r }),
    ],
  });
}
function ts(e) {
  let { onClose: t } = e,
    n = Ea(),
    r = n.m_bAutoplayEnabled == 1,
    i = (0, N.useCallback)(() => {
      n.m_fnSetAutoplayEnabled && n.m_fnSetAutoplayEnabled(!r), t();
    }, [r, n, t]);
  return (
    N.use(L.Ready()),
    (0, M.jsx)($o, {
      onClick: i,
      checked: r,
      children: L.Localize(`#StoreTrailer_AutoPlayVideos`),
    })
  );
}
function ns(e) {
  return _t(e)
    ? L.Localize(`#TrailerPlayer_Quality_Auto`)
    : e.height == 2160
      ? `2160p (4k)`
      : `${e.height}p`;
}
function rs(e) {
  let { player: t, refButton: n, onClose: r } = e,
    i = Kn(A.LANGUAGE),
    a = (0, N.useMemo)(() => {
      let e = [...t.GetCaptionRepresentations()],
        n = e.findIndex((e) => e.m_eLanguage == i);
      return n > 0 && Rt(e, n, 0), e;
    }, [i, t]),
    o = [];
  for (let e of a)
    o.push(
      (0, M.jsx)(
        $o,
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
      e.m_eLanguage == i && o.push((0, M.jsx)(Qo, {}));
  return o.length == 0
    ? null
    : (0, M.jsx)(Zo, { refButton: n, onClose: r, scroll: !0, children: o });
}
var is = 4,
  as = 130,
  R = N.forwardRef(function (e, t) {
    let {
        tooltip: n,
        onActivate: r,
        size: i,
        children: a,
        disableTooltip: o,
      } = e,
      s = so(),
      c = ho(r);
    return (0, M.jsx)(kn, {
      toolTipContent: n,
      direction: `top`,
      usePointerEvents: !0,
      bDisabled: s || o,
      children: (0, M.jsx)(`div`, {
        ref: t,
        className: Eo,
        ...c,
        "data-keepcontrols": !0,
        children: a,
      }),
    });
  });
function os(e) {
  let { player: t } = e,
    [n, r] = bo(t),
    i = zn(n, !1),
    a = zn(r, !1);
  return (0, M.jsxs)(`div`, {
    className: Do,
    children: [
      (0, M.jsx)(`span`, { children: i }),
      (0, M.jsx)(`span`, { className: Oo, children: `/` }),
      (0, M.jsx)(`span`, { children: a }),
    ],
  });
}
function ss(e) {
  let t = Ra(),
    n = za(t, `theater`);
  if (!t || !t.bSupportsTheater) return null;
  N.use(L.Ready());
  let r = t.strMode == `theater`,
    i = r ? (0, M.jsx)(mt, {}) : (0, M.jsx)(gt, {}),
    a = L.Localize(
      r
        ? `#TrailerPlayer_ExitTheater_Tooltip`
        : `#TrailerPlayer_EnterTheater_Tooltip`,
    );
  return (0, M.jsx)(R, { onActivate: n, tooltip: a, children: i });
}
function cs(e) {
  let t = Ra(),
    n = za(t, `fullscreen`);
  if (!t || !t.bSupportsFullscreen) return null;
  N.use(L.Ready());
  let r = t.strMode == `fullscreen`,
    i = r ? (0, M.jsx)(Vn, {}) : (0, M.jsx)(ut, {}),
    a = L.Localize(
      r
        ? `#TrailerPlayer_ExitFullScreen_Tooltip`
        : `#TrailerPlayer_FullScreen_Tooltip`,
    );
  return (0, M.jsx)(R, { onActivate: n, tooltip: a, children: i });
}
function ls(e) {
  let { player: t } = e,
    [n, r] = (0, N.useState)(!1),
    i = (0, N.useCallback)(() => r(!1), [r]),
    a = (0, N.useRef)(null),
    o = cn(),
    s = (0, N.useCallback)(() => {
      r((e) => !e);
    }, [r]),
    c = j(ko, n && `cXAaD-hLPZ0-`);
  return (
    N.use(L.Ready()),
    (0, M.jsxs)(M.Fragment, {
      children: [
        (0, M.jsx)(R, {
          ref: a,
          onActivate: s,
          tooltip: L.Localize(`#TrailerPlayer_Settings_Tooltip`),
          disableTooltip: o,
          children: (0, M.jsx)(ir, { className: c }),
        }),
        n && (0, M.jsx)(es, { player: t, refButton: a, onClose: i }),
      ],
    })
  );
}
function us(e) {
  let { player: t } = e,
    [n, r] = (0, N.useState)(!1),
    i = (0, N.useCallback)(() => r(!1), [r]),
    a = (0, N.useRef)(null),
    { bHasCaptions: o, bShowingCaption: s } = To(t),
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
              children: [s && (0, M.jsx)(hn, {}), !s && (0, M.jsx)(An, {})],
            }),
            n && (0, M.jsx)(rs, { player: t, refButton: a, onClose: i }),
          ],
        })
      : null
  );
}
function ds(e) {
  let { player: t, showHoverThumb: n, onTouchSeek: r } = e;
  N.use(L.Ready());
  let i = (0, N.useRef)(null),
    [a, o, s] = bo(t),
    [c, l] = gs(t, r),
    u = fs();
  so() && (l = null);
  let d = ms(t);
  l || (d = void 0);
  let f = { display: `none` };
  l && ((f.left = l.nTickOffset), (f.display = `block`));
  let p = wn(a, 0, o, 0, 100),
    m = wn(s, 0, o, 0, 100),
    h = { width: `${p.toFixed(1)}%` },
    g = { width: `${m.toFixed(1)}%` },
    _ = (e) => {
      e.key === `Home`
        ? (e.preventDefault(), t.Seek(0))
        : e.key === `End` &&
          (e.preventDefault(), t.Seek(t.GetTimelineDuration()));
    },
    v = j(Ao, l && `OXlEV5w6w1E-`);
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
    "aria-valuetext": `${zn(a, !1)} / ${zn(o, !1)}`,
    onClick: d,
    onKeyDown: _,
    onPointerMove: c.onPointerMove,
    onPointerLeave: c.onPointerLeave,
    onPointerDown: c.onPointerDown,
    onLostPointerCapture: c.onLostPointerCapture,
    children: [
      (0, M.jsxs)(`div`, {
        ref: i,
        className: jo,
        onPointerEnter: c.onPointerEnter,
        children: [
          (0, M.jsx)(`div`, { className: j(Mo, No), style: g }),
          (0, M.jsx)(`div`, { className: j(Mo, Po), style: h }),
          (0, M.jsx)(`div`, { className: j(Fo), style: f }),
        ],
      }),
      (0, M.jsx)(ps, { refTimeline: i, hoverState: l, showHoverThumb: n }),
    ],
  });
}
function fs() {
  return xt((e) => {
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
function ps(e) {
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
        c = Yn(n.nTickOffset - s / 2, 0 + is, a - s - is),
        l = $t(
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
    let e = as / l.nThumbnailHeight;
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
    className: Io,
    children: [
      !!l && (0, M.jsx)(`div`, { style: c, className: `nCXGrQlbkbg-` }),
      (0, M.jsx)(`span`, {
        className: Lo,
        children: rt(n.nPlaybackSeconds, !0),
      }),
    ],
  });
}
function ms(e) {
  return (0, N.useCallback)(
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
function hs(e, t, n) {
  let r = n - t.left,
    i = t.right - t.left;
  r = Yn(r, 0, i);
  let a = r / i,
    o = Math.floor(e.GetTimelineDuration() * a),
    s = e.GetThumbnail(o);
  return s ? { nTickOffset: r, nPlaybackSeconds: o, thumbnail: s } : null;
}
function gs(e, t) {
  let [n, r] = (0, N.useState)(null),
    i = (0, N.useRef)(null),
    a = (0, N.useRef)(null);
  return [
    {
      onPointerEnter: (0, N.useCallback)(
        (t) => {
          if (t.pointerType != `mouse` && t.pointerType != `pen`) return;
          i.current = t.currentTarget;
          let n = hs(e, i.current.getBoundingClientRect(), t.clientX);
          r(n);
        },
        [i, r, e],
      ),
      onPointerMove: (0, N.useCallback)(
        (n) => {
          let o = i.current;
          if (((o ||= a.current), !o)) return;
          let s = hs(e, o.getBoundingClientRect(), n.clientX);
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
      onPointerLeave: (0, N.useCallback)(
        (e) => {
          i.current && ((i.current = null), r((e) => null));
        },
        [r],
      ),
      onPointerDown: (0, N.useCallback)(
        (n) => {
          (a.current = n.currentTarget),
            a.current.setPointerCapture(n.pointerId),
            (document.body.style.userSelect = `none`);
          let i = hs(e, a.current.getBoundingClientRect(), n.clientX);
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
function _s(e) {
  let { player: t } = e,
    n = xo(t);
  N.use(L.Ready());
  let r = ``;
  return (
    n == pt.UnsupportedMediaType
      ? (r = L.Localize(`#TrailerPlayer_Error_UnsupportedCodec`))
      : n != pt.Invalid && (r = L.Localize(`#TrailerPlayer_Error_Playback`)),
    r
      ? (0, M.jsx)(`div`, {
          className: Ro,
          children: (0, M.jsx)(`span`, { children: r }),
        })
      : null
  );
}
function vs(e) {
  let { player: t } = e,
    [n, r, i, a] = yo(t);
  N.use(L.Ready());
  let o = cn(),
    s = n ? (0, M.jsx)(Mn, {}) : (0, M.jsx)(Yt, {}),
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
function ys(e) {
  let { player: t } = e,
    n = F(t);
  N.use(L.Ready());
  let r = n ? (0, M.jsx)(dt, {}) : (0, M.jsx)(ft, {}),
    i = L.Localize(
      n ? `#TrailerPlayer_Play_Tooltip` : `#TrailerPlayer_Pause_Tooltip`,
    ),
    a = So(t);
  return (0, M.jsx)(R, { onActivate: a, tooltip: i, children: r });
}
function bs(e) {
  let { category: t, title: n } = e,
    r = Wo(t);
  return (0, M.jsxs)(`div`, {
    className: zo,
    children: [
      (0, M.jsx)(`span`, { className: Bo, children: r }),
      (0, M.jsx)(`span`, { className: Vo }),
      (0, M.jsx)(`span`, { className: Ho, children: n }),
    ],
  });
}
function xs(e, t, n) {
  let r = wo(t),
    [i, a] = (0, N.useState)(``),
    o = (0, N.useRef)(0);
  (0, N.useEffect)(() => {
    r &&
      !n &&
      i == `` &&
      (a(`active`), (o.current = window.setTimeout(() => a(`complete`), 4e3)));
  }, [r, n, i, o, a]),
    (0, N.useEffect)(() => {
      n && (a(`complete`), window.clearTimeout(o.current));
    }, [n]),
    (0, N.useEffect)(() => () => window.clearTimeout(o.current), []);
  let s = (0, N.useRef)(!1);
  return (
    i == `complete` && !n && (s.current = !0),
    e == `once` && s.current ? !1 : i == `active` || n
  );
}
var Ss = 200,
  Cs = 5e3;
function ws(e) {
  let { player: t, category: n, title: r, focus: i } = e,
    a = (0, N.useRef)(null),
    o = (0, N.useRef)(null),
    [s, c] = lo(t, !1),
    [l, u] = (0, N.useState)(!1),
    d = oo(l, u, a);
  s ||= l;
  let f = Ts(t),
    p = At(!!i),
    m = j(Ha, s && `YnJEGhfB0wI-`);
  return (0, M.jsx)(io.Provider, {
    value: d,
    children: (0, M.jsxs)(`div`, {
      ref: p,
      className: m,
      ...c,
      onKeyDown: f,
      tabIndex: 0,
      children: [
        (0, M.jsxs)(`div`, {
          className: Ua,
          children: [
            (0, M.jsx)(Os, { player: t, enabled: s && !l }),
            (0, M.jsx)(As, {}),
            (0, M.jsxs)($a, {
              ref: o,
              className: Ka,
              children: [
                (0, M.jsx)(ds, { player: t, showHoverThumb: !0 }),
                (0, M.jsxs)(`div`, {
                  className: qa,
                  children: [
                    (0, M.jsxs)(`div`, {
                      className: Ja,
                      children: [
                        (0, M.jsx)(ys, { player: t }),
                        (0, M.jsx)(js, { player: t, refControlsHover: o }),
                        (0, M.jsx)(os, { player: t }),
                      ],
                    }),
                    (0, M.jsxs)(`div`, {
                      className: Ya,
                      children: [
                        (0, M.jsx)(us, { player: t }),
                        (0, M.jsx)(ls, { player: t }),
                        (0, M.jsx)(ss, {}),
                        (0, M.jsx)(cs, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, M.jsx)(Ds, {
          player: t,
          controlsVisible: s,
          category: n,
          title: r,
        }),
        (0, M.jsx)(`div`, { ref: a, className: Za }),
      ],
    }),
  });
}
function Ts(e) {
  let t = za(Ra(), `fullscreen`);
  return (0, N.useCallback)(
    (n) => {
      n.repeat ||
        (n.code == `Space`
          ? (e.TogglePlayPause(), n.preventDefault())
          : n.code == `ArrowLeft`
            ? e.SeekRelative(-5)
            : n.code == `ArrowRight`
              ? e.SeekRelative(Cs / 1e3)
              : n.key == `f` || n.key == `F`
                ? (t(), n.preventDefault())
                : (n.key == `m` || n.key == `M`) &&
                  (e.SetMute(!e.GetMuted()), n.preventDefault()));
    },
    [e, t],
  );
}
function Es(e, t) {
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
          (i.current = 0), e.TogglePlayPause();
        };
        a.pointerType == `mouse`
          ? i.current
            ? (window.clearTimeout(i.current), (i.current = 0), t())
            : (i.current = window.setTimeout(l, Ss))
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
        window.clearTimeout(i.current), (i.current = 0);
      },
      [i],
    ),
    { refBackground: n, inputEvents: ho(s), clickEvents: a, fnRemoveEvent: c }
  );
}
function Ds(e) {
  let { player: t, controlsVisible: n, category: r, title: i } = e,
    a = xs(`once`, t, n);
  if (r == 0 || !i) return null;
  let o = j(Ga, a && `YnJEGhfB0wI-`);
  return (0, M.jsx)(`div`, {
    className: o,
    children: (0, M.jsx)(bs, { category: r, title: i }),
  });
}
function Os(e) {
  let { player: t, enabled: n } = e,
    {
      refBackground: r,
      inputEvents: i,
      clickEvents: a,
      fnRemoveEvent: o,
    } = Es(t, za(Ra(), `fullscreen`)),
    s = j(Ba, n && `T3UUyZ88ees-`);
  return (0, M.jsx)(`div`, {
    ref: r,
    className: s,
    ...i,
    children: a.map((e) =>
      (0, M.jsx)(ks, { event: e, removeEvent: o }, `icon_${e.nID}`),
    ),
  });
}
function ks(e) {
  let { event: t, removeEvent: n } = e,
    r = t.nID,
    i = (0, N.useCallback)(() => {
      n(r);
    }, [r, n]),
    a = null;
  return (
    t.eState == Oa.Play
      ? (a = (0, M.jsx)(dt, {}))
      : t.eState == Oa.Pause && (a = (0, M.jsx)(ft, {})),
    (0, M.jsx)(`div`, { className: Va, onAnimationEnd: i, children: a })
  );
}
function As(e) {
  return (0, M.jsx)(`div`, { className: Wa });
}
function js(e) {
  let { player: t, refControlsHover: n } = e,
    [r, i, a, o] = yo(t),
    [s, c] = Ms(n),
    l;
  l =
    r || i === 0
      ? (0, M.jsx)(Mn, {})
      : i < 0.3
        ? (0, M.jsx)(In, {})
        : i < 0.6
          ? (0, M.jsx)(St, {})
          : (0, M.jsx)(Yt, {});
  let u = L.Localize(
    r ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
  );
  return (0, M.jsxs)(`div`, {
    className: Xa,
    onMouseEnter: c,
    "data-keepcontrols": !0,
    children: [
      (0, M.jsx)(R, { onActivate: o, tooltip: u, children: l }),
      s &&
        (0, M.jsx)(`div`, {
          className: `KiYQJsCfGxI-`,
          children: (0, M.jsx)(Mt, {
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
function Ms(e) {
  let [t, n] = (0, N.useState)(!1),
    r = (0, N.useCallback)(() => n(!0), [n]);
  return (
    nr(e, `mouseleave`, (e) => {
      e.target == e.currentTarget && n(!1);
    }),
    [t, r]
  );
}
var Ns = `WRCisr6uZYw-`,
  Ps = `gbdFcNy5G4k-`,
  Fs = `lX5nIJvBefY-`,
  Is = `iAXbsgjjZHI-`,
  Ls = `-EEbXf-3XVE-`,
  Rs = `iFREa-vsmpo-`,
  zs = `AP1io-MKcDs-`,
  Bs = `Bxu-c02i-fA-`,
  Vs = `pYxY-oYjIxc-`,
  Hs = `xbX-APAH9aY-`,
  Us = `RjlRnmjZiYM-`,
  Ws = 3e3,
  Gs = 1e3;
function Ks(e) {
  let { player: t, category: n, title: r } = e,
    i = (0, N.useRef)(null),
    [a, o] = qs(i, t, !1),
    s = (0, N.useRef)(null),
    [c, l] = (0, N.useState)(!1),
    u = oo(c, l, s);
  a ||= c;
  let [d, f] = Qs(t),
    p = j(Ps, a && `CjbQpCvOpk4-`),
    m = j(Rs, !!d && `X3KS6LYOx9o-`);
  return (0, M.jsx)(io.Provider, {
    value: u,
    children: (0, M.jsxs)(`div`, {
      className: Ns,
      ...o,
      children: [
        (0, M.jsxs)(`div`, {
          ref: i,
          className: p,
          children: [
            (0, M.jsx)(Zs, { thumbnail: d }),
            (0, M.jsx)(Xs, {}),
            (0, M.jsx)(`div`, {
              className: m,
              children: (0, M.jsx)($s, { player: t }),
            }),
            (0, M.jsxs)(`div`, {
              className: Bs,
              children: [
                (0, M.jsx)(ds, {
                  player: t,
                  onTouchSeek: f,
                  showHoverThumb: !1,
                }),
                (0, M.jsxs)(`div`, {
                  className: Vs,
                  children: [
                    (0, M.jsx)(`div`, {
                      className: Hs,
                      children: (0, M.jsx)(os, { player: t }),
                    }),
                    (0, M.jsxs)(`div`, {
                      className: Us,
                      children: [
                        (0, M.jsx)(vs, { player: t }),
                        (0, M.jsx)(us, { player: t }),
                        (0, M.jsx)(ls, { player: t }),
                        (0, M.jsx)(cs, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, M.jsx)(Ys, {
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
function qs(e, t, n) {
  let [r, i] = Js(e, t);
  return (r ||= n), [r, i];
}
function Js(e, t) {
  let [n, r] = go(),
    i = (0, N.useRef)(null),
    a = (0, N.useRef)(!0),
    o = F(t);
  return (
    (0, N.useEffect)(() => {
      let e = a.current;
      (a.current = !1), (!e || o) && r(!0, o ? 0 : Gs);
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
            let s = o ? 0 : Ws;
            t.target != a || e.current != a ? r(!0, s) : r(!n, s);
          },
          [r, e, o, n],
        ),
      },
    ]
  );
}
function Ys(e) {
  let { player: t, controlsVisible: n, category: r, title: i } = e,
    a = xs(`standard`, t, n);
  if (r == 0 || !i) return null;
  let o = j(Ls, a && !n && `lwGDx-ob6f4-`, n && `FEfadjF0-XY-`);
  return (0, M.jsx)(`div`, {
    className: o,
    children: (0, M.jsx)(bs, { category: r, title: i }),
  });
}
function Xs(e) {
  return (0, M.jsx)(`div`, { className: Fs });
}
function Zs(e) {
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
    className: Is,
    children: (0, M.jsx)(`div`, { style: a, className: void 0 }),
  });
}
function Qs(e) {
  let [t, n] = (0, N.useState)(null),
    r = (0, N.useRef)(!1),
    i = (0, N.useRef)(null);
  return [
    t,
    N.useCallback(
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
function $s(e) {
  let { player: t } = e,
    n = F(t),
    r = ho(So(t)),
    i = n ? (0, M.jsx)(dt, {}) : (0, M.jsx)(ft, {});
  return (0, M.jsx)(`div`, { className: zs, ...r, children: i });
}
var ec = `_3uW6UUMmrCg-`,
  tc = `fqgqcMMEHV0-`,
  nc = `_6koTzpHyyWw-`,
  rc = `wz7DrfLBweo-`,
  ic = `qHxUvsFtfPA-`,
  ac = `Mq-yAxjkoj4-`,
  oc = `v15xRo4R128-`,
  sc = `_5mPY672VSPM-`,
  cc = `rlgvACT4pJc-`,
  lc = 3e3,
  uc = 1500;
function dc(e) {
  let { player: t, category: n, title: r } = e,
    [i, a] = fc(t, !1),
    o = F(t),
    s = pc(t, a),
    c = So(t),
    [l, u, d, f] = yo(t),
    p = (0, N.useCallback)(() => {
      f(), a();
    }, [f, a]),
    m = (0, N.useCallback)(
      (e) => {
        !t.IsPaused() && e.currentTarget == e.target && t.TogglePlayPause();
      },
      [t],
    ),
    h = (0, N.useRef)(null),
    [g, _] = (0, N.useState)(!1),
    v = oo(g, _, h),
    y = l ? `#TrailerPlayer_Unmute_Tooltip` : `#TrailerPlayer_Mute_Tooltip`,
    b = o ? `#TrailerPlayer_Play_Tooltip` : `#TrailerPlayer_Pause_Tooltip`,
    x = j(tc, i && `wXx6UBVpmP0-`);
  return (0, M.jsx)(io.Provider, {
    value: v,
    children: (0, M.jsxs)(Ot, {
      className: ec,
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
            (0, M.jsx)(hc, {}),
            (0, M.jsxs)(`div`, {
              className: ic,
              children: [
                (0, M.jsx)(ds, { player: t, showHoverThumb: !1 }),
                (0, M.jsxs)(`div`, {
                  className: ac,
                  children: [
                    (0, M.jsxs)(`div`, {
                      className: oc,
                      children: [
                        (0, M.jsx)(ys, { player: t }),
                        (0, M.jsx)(os, { player: t }),
                      ],
                    }),
                    (0, M.jsx)(`div`, {
                      className: sc,
                      children: (0, M.jsx)(vs, { player: t }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, M.jsx)(mc, {
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
function fc(e, t) {
  let [n, r] = go(),
    i = (0, N.useRef)(!0),
    a = F(e);
  return (
    (0, N.useEffect)(() => {
      let e = i.current;
      (i.current = !1), (!e || a) && r(!0, a ? 0 : uc);
    }, [a, r, i]),
    [
      n,
      (0, N.useCallback)(() => {
        r(!0, lc);
      }, [r]),
    ]
  );
}
function pc(e, t) {
  return (0, N.useCallback)(
    (n) => {
      if (n.detail.button == sn.TRIGGER_LEFT && e) {
        let r = Math.max(0, e.GetPlaybackTime() - 10);
        e.Seek(r), t(), n.preventDefault(), n.stopPropagation();
      } else if (n.detail.button == sn.TRIGGER_RIGHT && e) {
        let r = Math.min(e.GetTimelineDuration(), e.GetPlaybackTime() + 10);
        e.Seek(r), t(), n.preventDefault(), n.stopPropagation();
      }
    },
    [e, t],
  );
}
function mc(e) {
  let { player: t, controlsVisible: n, category: r, title: i } = e,
    a = xs(`standard`, t, n);
  if (r == 0 || !i) return null;
  let o = j(nc, a && `wXx6UBVpmP0-`);
  return (0, M.jsx)(`div`, {
    className: o,
    children: (0, M.jsx)(`div`, {
      className: rc,
      children: (0, M.jsx)(bs, { category: r, title: i }),
    }),
  });
}
function hc(e) {
  return (0, M.jsx)(`div`, { className: cc });
}
var gc = 500,
  _c = `responsive_menu_ignore_touch`;
function vc(e) {
  return Ra()
    ? (0, M.jsx)(N.Suspense, {
        children: (0, M.jsx)(yc, { ...e, localContext: !1 }),
      })
    : (0, M.jsx)(N.Suspense, {
        children: (0, M.jsx)(La, {
          iosVideoFallback: !0,
          supportsTheater: !1,
          supportsFullscreen: !0,
          children: (0, M.jsx)(yc, { ...e, localContext: !0 }),
        }),
      });
}
function yc(e) {
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
    altText: f,
    title: m,
    category: h,
    statsURL: g,
    muteWhenAutoplayBlocked: _,
    localContext: v,
    focus: y,
  } = e;
  (m ||= ``), (h ||= 0);
  let [b, x] = ka(n, r, i, g, c, l, u);
  bc(t, x), Aa(x, !!_);
  let [ee, S] = xc(x),
    C = Ra(),
    te = v && C ? C.refFullscreen : null,
    ne = Pn(ee, te),
    re = ja(x, !!o),
    ie = re ? void 0 : b,
    ae = {};
  S && ((ae.width = `${S.nWidth}px`), (ae.height = `${S.nHeight}px`));
  let oe = p(() => x.IsBuffering());
  N.useEffect(() => {
    oe || (s && s());
  }, [oe, s]),
    N.use(L.Ready());
  let se = j(ba, _c);
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
        "aria-label": f,
        crossOrigin: `anonymous`,
      }),
      (0, M.jsx)(Sc, { player: x, uiMode: d, category: h, title: m, focus: y }),
      (0, M.jsx)(Cc, { player: x }),
      !re && (0, M.jsx)(wc, { player: x, screenshot: a }),
      !re && (0, M.jsx)(_s, { player: x }),
    ],
  });
}
function bc(e, t) {
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
function xc(e) {
  let t = (0, N.useRef)(null),
    n = (0, N.useRef)(null),
    r = (0, N.useRef)(null),
    i = vn(),
    a = (0, N.useCallback)(() => {
      let e = n.current,
        a = t.current;
      if (!e || !a) return;
      let [o, s] = Dn(a.nWidth, a.nHeight, e.nWidth, e.nHeight);
      (o = e.nWidth - o < 2 ? e.nWidth : Math.ceil(o)),
        (s = e.nHeight - s < 2 ? e.nHeight : Math.ceil(s));
      let c = r.current;
      (c && c.nWidth == o && c.nHeight == s) ||
        ((r.current = { nWidth: o, nHeight: s }), i());
    }, [t, n, r, i]);
  Co(
    e,
    (0, N.useCallback)(
      (e) => {
        (t.current = e), a();
      },
      [t, a],
    ),
  );
  let o = (0, N.useCallback)(
    (e) => {
      (n.current = {
        nWidth: e.contentRect.width,
        nHeight: e.contentRect.height,
      }),
        a();
    },
    [n, a],
  );
  return [wt(o), r.current];
}
function Sc(e) {
  let { player: t, uiMode: n, category: r, title: i, focus: a } = e,
    o = on(),
    s = cn();
  return (
    (n && n != `auto`) || (n = Ft() || s ? `touch` : o ? `gamepad` : `desktop`),
    n == `touch`
      ? (0, M.jsx)(Ks, { player: t, category: r, title: i })
      : n == `gamepad`
        ? (0, M.jsx)(dc, { player: t, category: r, title: i })
        : (0, M.jsx)(ws, { player: t, category: r, title: i, focus: a })
  );
}
function Cc(e) {
  let { player: t } = e,
    [n, r] = (0, N.useState)(`norender`),
    i = p(() => t.IsBuffering());
  (0, N.useEffect)(() => {
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
    }, [i, r]);
  let a = n != `norender`,
    o = j(xa, n == `fadein` && `ZxF0VUYsuGU-`);
  return (0, M.jsx)(`div`, {
    className: o,
    children: a && (0, M.jsx)(Te, { size: `large`, position: `center` }),
  });
}
function wc(e) {
  let { player: t, screenshot: n } = e,
    r = p(() => t.GetUserInputNeeded()),
    i = rr(r, gc),
    [a, o] = (0, N.useState)(!1),
    s = N.useCallback(() => {
      t.UserInputReceived(), o(!0);
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
      className: Sa,
      role: `button`,
      tabIndex: 0,
      "aria-label": L.Localize(`#TrailerPlayer_Play_Tooltip`),
      onClick: s,
      onKeyDown: (e) => {
        (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), s());
      },
      children: (0, M.jsx)(`div`, {
        className: j(Ca, a && `_5fVtqw5G7SE-`),
        children: (0, M.jsx)(dt, {}),
      }),
    })
  );
}
var Tc = `v87a6zGhXmo-`,
  Ec = `XkrNZp-zaXw-`;
function Dc(...e) {
  return e.join(` `);
}
var Oc = `_7OxSOadMubQ-`,
  kc = `_5tpsR11QFTo-`,
  Ac = `_4av218OCtYs-`,
  jc = `RylL--hTWB0-`,
  Mc = `mGOBKozFlf0-`,
  Nc = `kTZDgZ5dX-8-`,
  Pc = `WDTUiOfZjRM-`,
  Fc = `bgTVZST3FaE-`,
  Ic = `B4zxAgrjjQU-`,
  Lc = `ZQJlDRLSD2I-`,
  Rc = `NxfxOoNRnJc-`,
  zc = `_6hGeFUDe5X0-`,
  Bc = `rs5MCL6BI2A-`,
  Vc = `iRWZX4LtE-Q-`,
  Hc = `_5yccD-xlOTc-`;
function Uc(e) {
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
  let s = r == 1 ? mn.Localize(`#StoreTrailer_Title_TrailerPreview`) : Wo(n);
  return (0, M.jsx)(`div`, {
    className: j({ [Bc]: !0, [Hc]: a }),
    children: mn.LocalizeReact(
      `#StoreTrailer_Title_Combiner`,
      (0, M.jsx)(`span`, { className: Vc, children: s }),
      t,
    ),
  });
}
function Wc(e) {
  let { id: t, bPopOutTrailerPlayback: n } = e,
    { data: r } = Xt(t),
    i = tt(t),
    { data: a } = an(t),
    [o, s] = (0, N.useState)(!1),
    [c, l] = (0, N.useState)(!1),
    u = bt(),
    d = r?.highlights?.filter((e) => !u || e.all_ages),
    f = d && d?.length > 0 ? d[0] : void 0,
    p = N.useCallback(() => {
      f && (n ? l(!0) : s((e) => !e));
    }, [f, n]);
  if (!a)
    return (0, M.jsx)(`div`, {
      className: j(kc, Oc),
      children: (0, M.jsx)(Te, { size: `medium` }),
    });
  let m = f
    ? (0, M.jsx)(Xc, { trailer: f, bPlayVideo: o, fnTogglePlayTrailer: p })
    : null;
  return !f && !i?.length
    ? null
    : (0, M.jsxs)(`div`, {
        className: j(kc, Oc),
        children: [
          (0, M.jsx)(Gc, {
            elFeaturedInCenter: m,
            trailer: f,
            id: t,
            name: a.name || ``,
          }),
          n
            ? (0, M.jsx)(qc, { id: t, bShowModal: c, hideModal: () => l(!1) })
            : (0, M.jsx)(Kc, {
                name: a.name || ``,
                trailer: f,
                bPlayVideo: o,
                fnTogglePlayTrailer: p,
                bControls: !0,
              }),
        ],
      });
}
function Gc(e) {
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
    [u, d] = ne(),
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
          Xc,
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
          Kc,
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
        _.push(
          (0, M.jsx)(
            `div`,
            {
              className: j({ [Pc]: !0, [Nc]: !s }),
              onMouseEnter: () => l(a),
              children: s
                ? (0, M.jsx)(`img`, { src: t, alt: r })
                : (0, M.jsx)(`button`, {
                    type: `button`,
                    className: Fc,
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
                className: Mc,
                children: (0, M.jsx)(`img`, { src: i, alt: r }),
              },
              n + `_big_` + t,
            ),
          );
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
                `app_${nn(n)}_${t}`,
              ),
            ),
          ],
        }),
    ],
  });
}
function Kc(e) {
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
  let c = j(Rc, a && `B4zxAgrjjQU-`);
  return (0, M.jsxs)(`div`, {
    className: c,
    onClick: o,
    role: `presentation`,
    children: [
      (0, M.jsx)(Uc, {
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
                  { src: en(r, e.filename || ``), type: e.type },
                  e.filename,
                ),
          ),
        }),
      i &&
        (0, M.jsx)(`button`, {
          type: `button`,
          className: `wrm1TrwYv0M-`,
          "aria-label": k(`#Button_Close`),
          children: (0, M.jsx)(On, {}),
        }),
    ],
  });
}
function qc(e) {
  return e.bShowModal ? (0, M.jsx)(Jc, { ...e }) : null;
}
function Jc(e) {
  let { id: t, bShowModal: n, trailerBaseID: r, hideModal: i } = e,
    { data: a } = an(t),
    o = Lt(t),
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
      let { rgDashTrailers: e, rgHlsTrailers: t } = ar(s);
      return {
        rgDashTrailers: e,
        rgHlsTrailers: t,
        strCaptionManufest: zt(s),
        strScreenshot: Ut(s),
      };
    }, [s]);
  return !s || !s.adaptive_trailers || u.length == 0
    ? null
    : (0, M.jsx)(Kt, {
        active: n,
        children: (0, M.jsxs)(Gn, {
          "aria-labelledby": Dc(c, l),
          bAllowFullSize: !0,
          bOKDisabled: !0,
          closeModal: i,
          children: [
            (0, M.jsx)(`div`, {
              className: zc,
              children: (0, M.jsx)(vc, {
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
function Yc(e) {
  let { appid: t, trailerBaseID: n, bShowModal: r, hideModal: i } = e,
    a = (0, N.useMemo)(() => ({ appid: t }), [t]);
  return (0, M.jsx)(qc, {
    id: a,
    trailerBaseID: n,
    bShowModal: r,
    hideModal: i,
  });
}
function Xc(e) {
  let {
    trailer: t,
    fnTogglePlayTrailer: n,
    bPlayVideo: r,
    onMouseEnter: i,
    onMouseLeave: a,
  } = e;
  return (0, M.jsxs)(`div`, {
    className: j({ [jc]: !r, [Ic]: r, [Pc]: !0 }),
    onClick: n,
    onMouseEnter: i,
    onMouseLeave: a,
    role: `presentation`,
    children: [
      (0, M.jsx)(`img`, { src: Ut(t), alt: t.trailer_name }),
      (0, M.jsx)(`button`, {
        type: `button`,
        className: Lc,
        "aria-label": k(`#Playback_Play_Tooltip`),
        children: (0, M.jsx)(xn, {}),
      }),
    ],
  });
}
var Zc = (function (e) {
  return (
    (e.k_TrailerAsButton = `button`),
    (e.k_TrailerAsPill = `pill`),
    (e.k_TrailerAsFull = `full`),
    (e.k_TrailerAsPoster = `poster`),
    (e.k_TrailerAsMicro = `micro`),
    e
  );
})({});
function Qc(e) {
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
            className: j({ [Tc]: t == `pill`, [Ec]: t == `button` }),
            onClick: () => l(!0),
            style: { color: r, backgroundColor: i },
            children: [(0, M.jsx)(xn, {}), a || k(`#EventEmail_WatchNow`)],
          }),
          (0, M.jsx)(qc, {
            id: u,
            bShowModal: c,
            trailerBaseID: o,
            hideModal: () => l(!1),
          }),
        ],
      });
    default:
    case `full`:
      return (0, M.jsx)($c, { ...e });
  }
}
function $c(e) {
  let { appid: t, trailerBaseID: n } = e,
    r = m(t),
    { data: i } = an(r),
    [a, o] = (0, N.useState)(() =>
      !t || !n ? k(`#TrailerPlayer_ID_NotProvided`) : null,
    ),
    s = Lt(r),
    c = (0, N.useMemo)(
      () => (s ? s.find((e) => e.trailer_base_id === n) : null),
      [s, n],
    );
  return (
    (0, N.useEffect)(() => {
      i?.unvailable_for_country_restriction &&
        o(k(`#TrailerPlayer_CouldNotLoad`, t, n)),
        s &&
          !c &&
          o(k(`#TrailerPlayer_CouldNotLoad`, e.appid, e.trailerBaseID));
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
        ? (0, M.jsx)(`div`, { className: oe, children: a })
        : null
      : c
        ? (0, M.jsx)(el, { trailerToPlay: c })
        : (0, M.jsx)(Te, { string: k(`#Loading`), size: `small` })
  );
}
function el(e) {
  let { trailerToPlay: t } = e,
    {
      rgDashTrailers: n,
      rgHlsTrailers: r,
      strCaptionManufest: i,
    } = (0, N.useMemo)(() => {
      let { rgDashTrailers: e, rgHlsTrailers: n } = ar(t);
      return { rgDashTrailers: e, rgHlsTrailers: n, strCaptionManufest: zt(t) };
    }, [t]);
  return n?.length == 0
    ? null
    : (0, M.jsx)(`div`, {
        className: zc,
        children: (0, M.jsx)(vc, {
          dashManifests: n || [],
          hlsManifest: (r.length > 0 && r?.[0]) || ``,
          screenshot: Ut(t),
          altText: t.trailer_name,
          muteWhenAutoplayBlocked: !0,
          captionManifest: i,
        }),
      });
}
function tl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function nl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? tl(Object(n), !0).forEach(function (t) {
          V(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : tl(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function z(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function rl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function B(e, t, n) {
  return (
    t && rl(e.prototype, t),
    n && rl(e, n),
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
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && al(e, t);
}
function il(e) {
  return (il = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function al(e, t) {
  return (al = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
}
function ol() {
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
function sl(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i;
}
function W(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = sl(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
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
function cl(e, t) {
  if (t && (typeof t == `object` || typeof t == `function`)) return t;
  if (t !== void 0)
    throw TypeError(`Derived constructors may only return object or undefined`);
  return G(e);
}
function K(e) {
  var t = ol();
  return function () {
    var n,
      r = il(e);
    if (t) {
      var i = il(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return cl(this, n);
  };
}
function ll(e) {
  return ul(e) || dl(e) || fl(e) || ml();
}
function ul(e) {
  if (Array.isArray(e)) return pl(e);
}
function dl(e) {
  if (
    (typeof Symbol < `u` && e[Symbol.iterator] != null) ||
    e[`@@iterator`] != null
  )
    return Array.from(e);
}
function fl(e, t) {
  if (e) {
    if (typeof e == `string`) return pl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      n === `Object` && e.constructor && (n = e.constructor.name),
      n === `Map` || n === `Set`
        ? Array.from(e)
        : n === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? pl(e, t)
          : void 0
    );
  }
}
function pl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ml() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hl(e, t) {
  return (t = { exports: {} }), e(t, t.exports), t.exports;
}
function gl() {}
function _l() {}
function q(e) {
  return e
    .map(function (e) {
      return !1 === e ? null : e;
    })
    .join(` `)
    .replace(/\s+/g, ` `)
    .trim();
}
function vl(e, t) {
  return ((100 / e) * t) / t;
}
function yl(e, t) {
  return (100 * e) / t;
}
function J(e) {
  return `${e}%`;
}
function bl(e, t, n) {
  if (e === t) return !0;
  var r = Q[Jl(e)],
    i = Q[Jl(t)];
  return !(!r || r !== i) && r(e, t, n);
}
function xl(e) {
  return function (t, n, r) {
    if (!r) return e(t, n, []);
    for (var i, a = r.length; (i = r[--a]); )
      if (i[0] === t && i[1] === n) return !0;
    return e(t, n, r);
  };
}
function Sl(e, t, n) {
  var r = e.length;
  if (r !== t.length) return !1;
  for (n.push([e, t]); r--; ) if (!bl(e[r], t[r], n)) return !1;
  return !0;
}
function Cl(e, t, n) {
  if (typeof e.equal == `function`) return n.push([e, t]), e.equal(t, n);
  var r = wl(e),
    i = wl(t),
    a = r.length;
  if (a !== i.length) return !1;
  for (r.sort(), i.sort(); a--; ) if (r[a] !== i[a]) return !1;
  for (n.push([e, t]), a = r.length; a--; ) {
    var o = r[a];
    if (!bl(e[o], t[o], n)) return !1;
  }
  return !0;
}
function wl(e) {
  var t = [];
  for (var n in e) n !== `constructor` && t.push(n);
  return t;
}
function Tl(e) {
  return !!e && typeof e == `object`;
}
function El(e) {
  var t = Object.prototype.toString.call(e);
  return t === `[object RegExp]` || t === `[object Date]` || Dl(e);
}
function Dl(e) {
  return e.$$typeof === Zl;
}
function Ol(e) {
  return Array.isArray(e) ? [] : {};
}
function kl(e, t) {
  return !1 !== t.clone && t.isMergeableObject(e) ? Ll(Ol(e), e, t) : e;
}
function Al(e, t, n) {
  return e.concat(t).map(function (e) {
    return kl(e, n);
  });
}
function jl(e, t) {
  if (!t.customMerge) return Ll;
  var n = t.customMerge(e);
  return typeof n == `function` ? n : Ll;
}
function Ml(e) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(e).filter(function (t) {
        return Object.propertyIsEnumerable.call(e, t);
      })
    : [];
}
function Nl(e) {
  return Object.keys(e).concat(Ml(e));
}
function Pl(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Fl(e, t) {
  return (
    Pl(e, t) &&
    !(
      Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)
    )
  );
}
function Il(e, t, n) {
  var r = {};
  return (
    n.isMergeableObject(e) &&
      Nl(e).forEach(function (t) {
        r[t] = kl(e[t], n);
      }),
    Nl(t).forEach(function (i) {
      Fl(e, i) ||
        (r[i] =
          Pl(e, i) && n.isMergeableObject(t[i])
            ? jl(i, n)(e[i], t[i], n)
            : kl(t[i], n));
    }),
    r
  );
}
function Ll(e, t, n) {
  ((n ||= {}).arrayMerge = n.arrayMerge || Al),
    (n.isMergeableObject = n.isMergeableObject || Xl),
    (n.cloneUnlessOtherwiseSpecified = kl);
  var r = Array.isArray(t);
  return r === Array.isArray(e)
    ? r
      ? n.arrayMerge(e, t, n)
      : Il(e, t, n)
    : kl(t, n);
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
          (a.state = t(nl({}, n.state))),
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
              return !Yl(t, this.state) || !Yl(e, this.props);
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
              this.setState(t(nl({}, this.context.state)));
            },
          },
          {
            key: `render`,
            value: function () {
              var t = this,
                n = this.props,
                r = n.children,
                i = W(n, ou),
                a = Ql(this.state, i, Wl);
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
    V(n, `contextType`, $l),
    V(n, `propTypes`, { children: Z.children }),
    V(n, `defaultProps`, { children: null }),
    n
  );
}
var Rl = `SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`;
_l.resetWarningCache = gl;
var zl = function () {
    function e(e, t, n, r, i, a) {
      if (a !== Rl) {
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
      checkPropTypes: _l,
      resetWarningCache: gl,
    };
    return (n.PropTypes = n), n;
  },
  X = hl(function (e) {
    e.exports = zl();
  }),
  Bl = `loading`,
  Vl = `success`,
  Hl = `error`,
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
  Ul = function (e) {
    var t = e.min,
      n = e.max,
      r = e.x;
    return Math.min(n, Math.max(t, r));
  },
  Wl = {
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
  Gl = { buttonBack: `buttonBack___1mlaL` },
  Kl = [
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
  ql = (function (e) {
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
              o && (l = r === 0 ? c : l),
                n.setStoreState(
                  { currentSlide: l, isPlaying: !1 },
                  i !== null && i.call(this, e),
                );
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
                i = W(e, Kl),
                a = q([Gl.buttonBack, `carousel__back-button`, n]),
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
V(ql, `propTypes`, {
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
  V(ql, `defaultProps`, {
    className: null,
    disabled: null,
    onClick: null,
    infinite: !1,
  });
var Jl = hl(function (e, t) {
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
Jl.types;
var Q = {};
(Q.number = function (e, t) {
  return e !== e && t !== t;
}),
  (Q.function = function (e, t, n) {
    return (
      e.toString() === t.toString() &&
      Q.object(e, t, n) &&
      bl(e.prototype, t.prototype)
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
  (Q.arguments = Q[`bit-array`] = Q.array = xl(Sl)),
  (Q.object = xl(Cl));
var Yl = bl,
  Xl = function (e) {
    return Tl(e) && !El(e);
  },
  Zl =
    typeof Symbol == `function` && Symbol.for
      ? Symbol.for(`react.element`)
      : 60103;
Ll.all = function (e, t) {
  if (!Array.isArray(e)) throw Error(`first argument should be an array`);
  return e.reduce(function (e, n) {
    return Ll(e, n, t);
  }, {});
};
var Ql = Ll,
  $l = N.createContext(),
  eu = function e(t) {
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
  tu = { masterSpinnerFinished: !1 },
  nu = (function () {
    function e(t) {
      z(this, e),
        (this.state = eu(Ql(tu, t, Wl))),
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
        (this.masterSpinnerError = this.masterSpinnerError.bind(this));
    }
    return (
      B(e, [
        {
          key: `setStoreState`,
          value: function (e, t) {
            (this.state = eu(Ql(this.state, e, Wl))), this.updateSubscribers(t);
          },
        },
        {
          key: `getStoreState`,
          value: function () {
            return Ql({}, this.state, Wl);
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
            this.subscriptions.forEach(function (e) {
              return e();
            }),
              typeof e == `function` && e(this.getStoreState());
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
            (this.masterSpinnerSubscriptions = {}),
              this.setMasterSpinnerFinished();
          },
        },
        {
          key: `masterSpinnerSuccess`,
          value: function (e) {
            (this.masterSpinnerSubscriptions[e].success = !0),
              (this.masterSpinnerSubscriptions[e].complete = !0),
              this.setMasterSpinnerFinished();
          },
        },
        {
          key: `masterSpinnerError`,
          value: function (e) {
            (this.masterSpinnerSubscriptions[e].error = !0),
              (this.masterSpinnerSubscriptions[e].complete = !0),
              this.setMasterSpinnerFinished();
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
  ru = [
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
  iu = (function (e) {
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
        slideSize: vl(e.totalSlides, e.visibleSlides),
        slideTraySize: yl(e.totalSlides, e.visibleSlides),
        step: e.step,
        dragStep: e.dragStep,
        totalSlides: e.totalSlides,
        touchEnabled: e.touchEnabled,
        dragEnabled: e.dragEnabled,
        visibleSlides: e.visibleSlides,
        infinite: e.infinite,
        isIntrinsicHeight: e.isIntrinsicHeight,
      };
      return (r.carouselStore = new nu(i)), r;
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
            [
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
                ((n.slideSize = vl(
                  this.props.totalSlides,
                  this.props.visibleSlides,
                )),
                (n.slideTraySize = yl(
                  this.props.totalSlides,
                  this.props.visibleSlides,
                ))),
              this.carouselStore.state.currentSlide >= this.props.totalSlides &&
                (n.currentSlide = Math.max(this.props.totalSlides - 1, 0)),
              Object.keys(n).length > 0 && this.carouselStore.setStoreState(n);
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
                W(e, ru)),
              r = q([`carousel`, this.props.className]);
            return N.createElement(
              t,
              H({ className: r }, n),
              N.createElement(
                $l.Provider,
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
  au =
    (V(iu, `propTypes`, {
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
    V(iu, `defaultProps`, {
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
    iu);
$l.Consumer;
var ou = [`children`],
  su = Y(ql, function (e) {
    return {
      currentSlide: e.currentSlide,
      step: e.step,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
      infinite: e.infinite,
    };
  }),
  cu = { buttonFirst: `buttonFirst___2rhFr` },
  lu = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `totalSlides`,
  ],
  uu = (function (e) {
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
              i = (e.onClick, e.totalSlides, W(e, lu)),
              a = q([cu.buttonFirst, `carousel__first-button`, t]),
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
  (V(uu, `propTypes`, {
    carouselStore: X.object.isRequired,
    children: Z.children.isRequired,
    className: X.string,
    currentSlide: X.number.isRequired,
    disabled: X.bool,
    onClick: X.func,
    totalSlides: X.number.isRequired,
  }),
  V(uu, `defaultProps`, { className: null, disabled: null, onClick: null }),
  uu),
  function (e) {
    return { currentSlide: e.currentSlide, totalSlides: e.totalSlides };
  },
);
var du = { buttonLast: `buttonLast___2yuh0` },
  fu = [
    `carouselStore`,
    `className`,
    `currentSlide`,
    `disabled`,
    `onClick`,
    `totalSlides`,
    `visibleSlides`,
  ],
  pu = (function (e) {
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
              o = W(e, fu),
              s = q([du.buttonLast, `carousel__last-button`, t]),
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
  (V(pu, `propTypes`, {
    carouselStore: X.object.isRequired,
    children: Z.children.isRequired,
    className: X.string,
    currentSlide: X.number.isRequired,
    disabled: X.bool,
    onClick: X.func,
    totalSlides: X.number.isRequired,
    visibleSlides: X.number.isRequired,
  }),
  V(pu, `defaultProps`, { className: null, disabled: null, onClick: null }),
  pu),
  function (e) {
    return {
      currentSlide: e.currentSlide,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
    };
  },
);
var mu = { buttonNext: `buttonNext___2mOCa` },
  hu = [
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
  gu = (function (e) {
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
              o && (l = s === n ? 0 : l),
                a.setStoreState(
                  { currentSlide: l, isPlaying: !1 },
                  r !== null && r.call(this, e),
                );
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
                c = W(e, hu),
                l = q([mu.buttonNext, `carousel__next-button`, n]),
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
  _u = Y(
    (V(gu, `propTypes`, {
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
    V(gu, `defaultProps`, {
      className: null,
      disabled: null,
      onClick: null,
      infinite: !1,
    }),
    gu),
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
  vu = { buttonNext: `buttonNext___3Lm3s` },
  yu = [
    `carouselStore`,
    `children`,
    `childrenPaused`,
    `childrenPlaying`,
    `className`,
    `isPlaying`,
    `onClick`,
  ],
  bu = (function (e) {
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
              a = (e.onClick, W(e, yu)),
              o = q([vu.buttonNext, `carousel__play-button`, r]);
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
  (V(bu, `propTypes`, {
    carouselStore: X.object.isRequired,
    children: X.node,
    childrenPaused: X.node,
    childrenPlaying: X.node,
    className: X.string,
    isPlaying: X.bool.isRequired,
    onClick: X.func,
  }),
  V(bu, `defaultProps`, {
    children: null,
    childrenPaused: null,
    childrenPlaying: null,
    className: null,
    onClick: null,
  }),
  bu),
  function (e) {
    return { isPlaying: e.isPlaying };
  },
);
var xu = { dot: `dot___3c3SI` },
  Su = [
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
  Cu = (function (e) {
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
              s = W(e, Su),
              c = a >= n && a < n + o,
              l = typeof i == `boolean` ? i : c,
              u = typeof r == `boolean` ? r : !0 === c,
              d = q([
                xu.dot,
                l && xu.dotSelected,
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
  wu = Y(
    (V(Cu, `propTypes`, {
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
    V(Cu, `defaultProps`, {
      children: null,
      className: null,
      disabled: null,
      onClick: null,
      selected: null,
    }),
    Cu),
    function (e) {
      return {
        currentSlide: e.currentSlide,
        totalSlides: e.totalSlides,
        visibleSlides: e.visibleSlides,
      };
    },
  ),
  Tu = {},
  Eu = [`renderDots`],
  Du = [
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
  Ou = (function (e) {
    function t() {
      return z(this, t), n.apply(this, arguments);
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
              return s.renderDots, o(W(s, Eu));
            }
            for (var c = [], l = 0; l < n; l += 1) {
              var u = l >= t && l < t + r,
                d = a ? l === t : u,
                f = l >= n - r ? n - r : l;
              c.push(
                N.createElement(
                  wu,
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
                W(e, Du)),
              i = q([Tu.DotGroup, `carousel__dot-group`, n]);
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
  (V(Ou, `propTypes`, {
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
  V(Ou, `defaultProps`, {
    children: null,
    className: null,
    dotNumbers: !1,
    disableActiveDots: !0,
    showAsSelectedForCurrentSlideOnly: !1,
    renderDots: null,
  }),
  Ou),
  function (e) {
    return {
      currentSlide: e.currentSlide,
      totalSlides: e.totalSlides,
      visibleSlides: e.visibleSlides,
    };
  },
);
var ku = { image: `image___xtQGH` },
  Au = [`src`, `alt`],
  ju = [
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
  Mu = (function (e) {
    function t(e) {
      var r;
      return (
        z(this, t),
        (r = n.call(this, e)),
        (r.state = { imageStatus: Bl }),
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
              t.subscribeMasterSpinner(this.props), this.initImage();
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
              t.unsubscribeMasterSpinner(this.props),
                this.image.removeEventListener(`load`, this.handleImageLoad),
                this.image.removeEventListener(`error`, this.handleImageError),
                (this.image = null);
            },
          },
          {
            key: `initImage`,
            value: function () {
              if (
                (this.setState({ imageStatus: Bl }),
                (this.image = document.createElement(`img`)),
                this.image.addEventListener(`load`, this.handleImageLoad, !1),
                this.image.addEventListener(`error`, this.handleImageError, !1),
                (this.image.src = this.props.src),
                this.image.readyState || this.image.complete)
              ) {
                var e = this.image.src;
                (this.image.src = `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==`),
                  (this.image.src = e);
              }
            },
          },
          {
            key: `handleImageLoad`,
            value: function (e) {
              this.setState({ imageStatus: Vl }),
                this.props.hasMasterSpinner &&
                  this.props.carouselStore.masterSpinnerSuccess(this.props.src),
                this.props.onLoad && this.props.onLoad(e);
            },
          },
          {
            key: `handleImageError`,
            value: function (e) {
              this.setState({ imageStatus: Hl }),
                this.props.hasMasterSpinner &&
                  this.props.carouselStore.masterSpinnerError(this.props.src),
                this.props.onError && this.props.onError(e);
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
                  ku.image,
                  ku.imageLoading,
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
                  ku.image,
                  ku.imageError,
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
                  ku.image,
                  `carousel__image`,
                  this.props.isBgImage && `carousel__image--with-background`,
                  `carousel__image--success`,
                  this.props.className,
                ]),
                a = H({}, n),
                o = e;
              if (r !== `img`) {
                var s = e.src;
                e.alt,
                  (o = W(e, Au)),
                  (a = H({}, n, {
                    backgroundImage: `url("${s}")`,
                    backgroundSize: `cover`,
                  }));
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
                  W(e, ju));
              switch (this.state.imageStatus) {
                case Bl:
                  return this.renderLoading(t);
                case Vl:
                  return this.renderSuccess(t);
                case Hl:
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
V(Mu, `propTypes`, {
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
  V(Mu, `defaultProps`, {
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
  });
var Nu = Y(Mu, function (e) {
    return { hasMasterSpinner: e.hasMasterSpinner, orientation: e.orientation };
  }),
  Pu = { spinner: `spinner___27VUp`, spin: `spin___S3UuE` },
  Fu = [`className`],
  Iu = (function (e) {
    function t() {
      return z(this, t), n.apply(this, arguments);
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
              n = W(e, Fu),
              r = q([Pu.spinner, `carousel__spinner`, t]);
            return N.createElement(`div`, H({ className: r }, n));
          },
        },
      ]),
      t
    );
  })(N.PureComponent),
  Lu =
    (V(Iu, `propTypes`, { className: X.string }),
    V(Iu, `defaultProps`, { className: null }),
    Iu),
  Ru = {
    container: `container___2O72F`,
    overlay: `overlay___IV4qY`,
    hover: `hover___MYy31`,
    zoom: `zoom___3kqYk`,
    loading: `loading___1pvNI`,
    imageLoadingSpinnerContainer: `imageLoadingSpinnerContainer___3UIPD`,
  },
  zu = [
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
  Bu,
  Vu = 2,
  Hu = 3;
Y(
  ((Bu = (function (e) {
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
              !1 === t.isZooming &&
                !0 === this.state.isZooming &&
                this.props.carouselStore.setStoreState({
                  isPageScrollLocked: !0,
                }),
                !0 === t.isZooming &&
                  !1 === this.state.isZooming &&
                  this.props.carouselStore.setStoreState({
                    isPageScrollLocked: !1,
                  });
            },
          },
          {
            key: `handleImageComplete`,
            value: function (e) {
              this.setState({ isImageLoading: !1 }),
                this.props && this.props.onLoad && this.props.onLoad(e);
            },
          },
          {
            key: `handleImageLoadError`,
            value: function (e) {
              this.setState({ isImageLoadingError: !0, isImageLoading: !1 }),
                this.props && this.props.onError && this.props.onError(e);
            },
          },
          {
            key: `handleOnMouseOver`,
            value: function () {
              this.state.isZooming ||
                this.setState({ isHovering: !0, scale: Vu });
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
                (ll(e.targetTouches).forEach(function (e) {
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
                var r = ll(e.targetTouches)
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
                  s.distance = t.distanceBetweenTwoTouches(nl({}, s));
                  var c = t.midpointBetweenTwoTouches(nl({}, s));
                  (s.cx = c.x), (s.cy = c.y);
                  var l = {
                    x1: r[0].clientX,
                    y1: r[0].clientY,
                    x2: r[1].clientX,
                    y2: r[1].clientY,
                  };
                  l.distance = t.distanceBetweenTwoTouches(nl({}, l));
                  var u = t.midpointBetweenTwoTouches(nl({}, l));
                  (l.cx = u.x), (l.cy = u.y);
                  var d = J(
                      Ul({
                        min: 0,
                        max: 100,
                        x: ((l.cx - i.left) / i.width) * 100,
                      }),
                    ),
                    f = J(
                      Ul({
                        min: 0,
                        max: 100,
                        x: ((l.cy - i.top) / i.height) * 100,
                      }),
                    ),
                    p = function (e) {
                      return Ul({
                        min: 1,
                        max: Hu,
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
                (ll(e.changedTouches).forEach(function (e) {
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
                      Ru.imageLoadingSpinnerContainer,
                      `carousel__image-loading-spinner-container`,
                    ]),
                  },
                  e && e(),
                  !e && N.createElement(Lu, null),
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
                u = W(e, zu),
                d = q([Ru.container, i]),
                f = q([Ru.image, `carousel__zoom-image`, a]),
                p = q([
                  Ru.overlay,
                  `carousel__zoom-image-overlay`,
                  this.state.isHovering && Ru.hover,
                  this.state.isZooming && Ru.zoom,
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
                    Nu,
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
                  N.createElement(Nu, {
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
  V(Bu, `propTypes`, {
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
  V(Bu, `defaultProps`, {
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
  Bu),
  function () {
    return {};
  },
);
var Uu = {
    slide: `slide___3-Nqo`,
    slideHorizontal: `slideHorizontal___1NzNV`,
    slideInner: `slideInner___2mfX9`,
    focusRing: `focusRing___1airF`,
  },
  Wu = [
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
  Gu = (function (e) {
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
                  className: [Uu.focusRing, `carousel__slide-focus-ring`].join(
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
              g = W(t, Wu),
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
                Uu.slide,
                u === `horizontal` && Uu.slideHorizontal,
                `carousel__slide`,
                this.state.focused && `carousel__slide--focused`,
                b && a,
                b && `carousel__slide--visible`,
                !b && i,
                !b && `carousel__slide--hidden`,
                r,
              ]),
              ee = q([Uu.slideInner, `carousel__inner-slide`, o]);
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
  Ku = Y(
    (V(Gu, `propTypes`, {
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
    V(Gu, `defaultProps`, {
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
    Gu),
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
  qu = (function () {
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
  Ju =
    `ariaLabel.carouselStore.children.className.classNameAnimation.classNameTray.classNameTrayWrap.currentSlide.disableAnimation.disableKeyboard.dragEnabled.hasMasterSpinner.interval.isPageScrollLocked.isPlaying.lockOnWindowScroll.masterSpinnerFinished.moveThreshold.naturalSlideHeight.naturalSlideWidth.onMasterSpinner.orientation.playDirection.privateUnDisableAnimation.slideSize.slideTraySize.spinner.style.totalSlides.touchEnabled.trayProps.trayTag.visibleSlides.isIntrinsicHeight`.split(
      `.`,
    ),
  Yu = [
    `dragStep`,
    `step`,
    `infinite`,
    `preventVerticalScrollOnTouch`,
    `preventingVerticalScroll`,
    `horizontalPixelThreshold`,
    `verticalPixelThreshold`,
  ],
  Xu = [
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
  Zu = (function (e) {
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
              this.props.lockOnWindowScroll &&
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
                this.props.isPlaying && this.play();
            },
          },
          {
            key: `componentDidUpdate`,
            value: function (e) {
              !e.isPlaying && this.props.isPlaying && this.play(),
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
                  });
            },
          },
          {
            key: `componentWillUnmount`,
            value: function () {
              document.documentElement.removeEventListener(
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
                (this.scrollStopTimer = null);
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
              this.props.carouselStore.setStoreState({ isPlaying: !1 }),
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
                });
            },
          },
          {
            key: `fakeOnDragMove`,
            value: function (e, t) {
              var n = this;
              window.cancelAnimationFrame.call(window, this.moveTimer),
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
                ));
            },
          },
          {
            key: `fakeOnDragEnd`,
            value: function () {
              window.cancelAnimationFrame.call(window, this.moveTimer),
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
                  !this.props.lockOnWindowScroll && null);
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
              e.preventDefault(),
                this.fakeOnDragStart({
                  screenX: e.screenX,
                  screenY: e.screenY,
                  mouseDrag: !0,
                }),
                this.callCallback(`onMouseDown`, e);
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
              e.preventDefault(),
                this.setState({ cancelNextClick: !1 }),
                this.callCallback(`onClickCapture`, e);
            },
          },
          {
            key: `handleOnTouchStart`,
            value: function (e) {
              if (!this.props.touchEnabled)
                return void this.callCallback(`onTouchStart`, e);
              this.props.orientation === `vertical` && e.preventDefault();
              var t = e.targetTouches[0];
              this.fakeOnDragStart({
                screenX: t.screenX,
                screenY: t.screenY,
                touchDrag: !0,
              }),
                this.callCallback(`onTouchStart`, e);
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
              window.clearInterval(this.interval), (this.interval = null);
            },
          },
          {
            key: `lockScroll`,
            value: function () {
              var e = new qu();
              (this.scrollParent = e.getScrollParent(this.sliderTrayElement)),
                this.scrollParent &&
                  ((this.originalOverflow =
                    this.originalOverflow || this.scrollParent.style.overflow),
                  (this.scrollParent.style.overflow = `hidden`));
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
                i = Ul({ min: 0, max: r, x: this.props.currentSlide + n });
              this.props.infinite &&
                (this.props.currentSlide >= r && n > 0 && (i = 0),
                this.props.currentSlide === 0 && n < 0 && (i = r)),
                this.props.carouselStore.setStoreState({ currentSlide: i });
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
              this.endTouchMove(), this.callCallback(`onTouchEnd`, e);
            },
          },
          {
            key: `handleOnTouchCancel`,
            value: function (e) {
              this.endTouchMove(), this.callCallback(`onTouchCancel`, e);
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
                    !r && N.createElement(Lu, null),
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
                x = W(t, Ju),
                ee = H({}, h),
                S = {};
              f === `vertical` &&
                ((S.height = 0),
                (S.paddingBottom = J((100 * u * y) / d)),
                (S.width = J(100)));
              var C = {},
                te = J(p * c * -1);
              (this.state.isBeingTouchDragged ||
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
                    (C.flexDirection = `row`));
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
                  W(x, Yu)),
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
                  W(_, Xu));
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
  Qu = Y(
    (V(Zu, `propTypes`, {
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
    V(Zu, `defaultProps`, {
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
    Zu),
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
  $u = `HRbFcf6y6hE-`,
  ed = `-ZUk3xT7ZlY-`,
  td = `KLUTL0g4Wbo-`,
  nd = `glnkf1Fqlvc-`,
  rd = `loez15u80yI-`,
  id = `bTrailerCarouselAutoAdvance`,
  ad = 1e4;
function od(e) {
  let {
      className: t,
      currentItemKey: n,
      autoAdvanceMsec: r,
      fnAdvance: i,
      enabled: a,
      pauseReason: o,
      countdownToken: s = `#SaleTrailerCarousel_NextGameInSeconds`,
    } = e,
    c = N.useMemo(() => {
      let e = Sn(id);
      return !e || e?.toLowerCase() === `true`;
    }, []),
    [l, u] = N.useState(c),
    d = r === void 0 ? ad : r,
    [f, p] = N.useState(d),
    m = o !== void 0,
    h = sd(o);
  Rn(
    () => {
      let e = f - 30;
      e <= 0 ? (i(), p(d)) : p(Math.max(e, 0));
    },
    30,
    [d],
    a && l && !m && d > 0 && f > 0,
  );
  let g = N.useCallback(
    (e) => {
      Bn(id, String(e), 3650), u(e), p(d);
    },
    [d],
  );
  return (
    N.useEffect(() => {
      p(d);
    }, [n, d]),
    (0, M.jsxs)(`div`, {
      className: t,
      children: [
        (0, M.jsxs)(`div`, {
          className: j($u, (!a || !l) && `X8q-iPdWKKw-`, m && `_3E-10Et-w2o-`),
          children: [
            (0, M.jsx)(`div`, {
              className: ed,
              children: !m || !h ? En(s, Math.ceil(f / 1e3)) : h,
            }),
            (0, M.jsx)(`div`, {
              className: td,
              style: { "--auto-advance-ratio": `${100 - (f / d) * 100}%` },
            }),
          ],
        }),
        (0, M.jsx)(`div`, {
          className: j(rd),
          children: (0, M.jsx)(ln, {
            className: nd,
            controlled: !0,
            checked: l,
            label: k(`#SaleTrailerCarousel_AutoAdvanceEnabled`),
            onChange: g,
          }),
        }),
      ],
    })
  );
}
function sd(e) {
  switch (e) {
    case 4:
      return k(`#SaleTrailerCarousel_AutoAdvanceVideoPaused`);
    case 3:
    case 5:
      return k(`#SaleTrailerCarousel_AutoAdvanceHover`);
  }
}
function cd() {
  let [e, t] = N.useState(!1),
    [n, r] = N.useState(!1);
  N.useEffect(() => {
    let e = () => t(document.hidden);
    return (
      document.addEventListener(`visibilitychange`, e),
      () => document.removeEventListener(`visibilitychange`, e)
    );
  }, []);
  let i = N.useCallback((e) => r(!e.isIntersecting), []),
    a = N.useMemo(() => ({ threshold: 0.5 }), []);
  return { bTabHidden: e, bOffscreen: n, refIntersection: Ln(i, a) };
}
var ld = `_--jO3lLROzo-`,
  ud = `DyOrE-LFQDQ-`,
  dd = `_538FwVlPb0E-`,
  fd = `bYSGIkS6GvM-`,
  pd = `eROFrrQM5Ew-`,
  md = `bKYQmUBfOtY-`,
  hd = `Udbg33O1Kjs-`,
  gd = `ux4DPxJOkL8-`,
  _d = `-LFP33ltPBY-`,
  vd = `_4uWRflget-8-`,
  yd = `IxjyotVSZiA-`,
  bd = `cD9zjaueru0-`,
  xd = `_6KPsWUgnjok-`,
  Sd = `RiCuzM-PsMk-`,
  Cd = `_1MsO62M-piw-`,
  wd = 0.6;
function Td(e, t, n) {
  let r = N.useRef(t);
  r.current = t;
  let i = !!t;
  N.useEffect(() => {
    let t = e.current;
    if (!i || !t || typeof IntersectionObserver > `u`) return;
    let n = Array.from(t.children);
    if (!n.length) return;
    let a = Math.round(t.scrollLeft / t.clientWidth),
      o = new IntersectionObserver(
        (e) => {
          for (let t of e) {
            if (!t.isIntersecting || t.intersectionRatio < wd) continue;
            let e = n.indexOf(t.target);
            e < 0 || e === a || ((a = e), r.current?.(e));
          }
        },
        { root: t, threshold: wd },
      );
    for (let e of n) o.observe(e);
    return () => o.disconnect();
  }, [e, i, n]);
}
function Ed(e) {
  let { nSlideIndex: t, nStartingSlideIndex: n, ref: r, children: i } = e;
  return n === void 0
    ? i
    : (0, M.jsx)(`div`, { ref: t === n ? r : void 0, children: i });
}
function Dd(e) {
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
    d = on();
  Td(l, c, N.Children.count(r)),
    N.useLayoutEffect(() => {
      l.current &&
        u.current &&
        (l.current.scrollLeft +=
          u.current.getBoundingClientRect().left -
          l.current.getBoundingClientRect().left);
    }, [s]);
  let f = N.Children.map(r, (e, t) =>
      i
        ? (0, M.jsx)(de, {
            rootMargin: `0px 50% 0px 50%`,
            horizontal: !0,
            placeholderWidth: a ?? 1,
            placeholderHeight: 1,
            holdGamepadFocus: d,
            children: (0, M.jsx)(Ed, {
              nSlideIndex: t,
              nStartingSlideIndex: s,
              ref: u,
              children: e,
            }),
          })
        : (0, M.jsx)(Ed, {
            nSlideIndex: t,
            nStartingSlideIndex: s,
            ref: u,
            children: e,
          }),
    ),
    p = (0, M.jsx)(Ot, {
      "flow-children": `row`,
      style: { gap: n ? n + `px` : void 0 },
      className: j(
        { SaleSectionCarouselPadding: t },
        `ScrollSnapCarousel`,
        `SaleSectionCarousel`,
        Cd,
        e.className,
      ),
      ref: l,
      children: f,
    });
  return i
    ? (0, M.jsx)(de, {
        rootMargin: `50% 0px 50% 0px`,
        horizontal: !1,
        placeholderWidth: 1,
        placeholderHeight: o ?? 1,
        children: p,
      })
    : p;
}
var Od = e(n()),
  kd = Y(
    class extends N.Component {
      render() {
        let { showArrows: e, arrowFill: t, arrowStyle: n } = this.props,
          r = this.props.visibleSlides,
          i = this.props.totalSlides,
          a = this.props.currentSlide;
        if (r >= i) return null;
        let o = (100 * a) / i,
          s = 100 * (1 - Math.min(a + r, i) / i),
          c = o + (50 * r) / i,
          l = 100 - c;
        return (0, M.jsxs)(`div`, {
          className: hd,
          children: [
            e &&
              (0, M.jsx)(su, {
                className: j(`iqx2UWGqqKU-`, `oKffwUnx6co-`, `_--jO3lLROzo-`),
                children: (0, M.jsx)(yf, {
                  arrowFill: t,
                  arrowStyle: n,
                  direction: `left`,
                }),
              }),
            (0, M.jsxs)(`div`, {
              className: vd,
              children: [
                (0, M.jsx)(`div`, { className: yd }),
                (0, M.jsx)(`div`, {
                  className: bd,
                  style: { insetInlineStart: o + `%`, insetInlineEnd: s + `%` },
                }),
                (0, M.jsx)(`div`, {
                  className: gd,
                  style: { insetInlineStart: `0%`, width: c + `%` },
                  children: (0, M.jsx)(su, {
                    className: j(ld, _d),
                    style: { color: `red` },
                    children: (0, M.jsx)(`div`, {}),
                  }),
                }),
                (0, M.jsx)(`div`, {
                  className: gd,
                  style: { insetInlineEnd: `0%`, width: l + `%` },
                  children: (0, M.jsx)(_u, {
                    className: j(ld, _d),
                    children: (0, M.jsx)(`div`, {}),
                  }),
                }),
              ],
            }),
            e &&
              (0, M.jsx)(_u, {
                className: j(`iqx2UWGqqKU-`, `O2Vg9rmPwSE-`, `_--jO3lLROzo-`),
                children: (0, M.jsx)(yf, {
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
function Ad(e) {
  let { bForceSimpleCarousel: t, screenIsWide: n, children: r } = e,
    i = on();
  return (n || i) && !t
    ? (0, M.jsx)(jd, { ...e, children: r })
    : (0, M.jsx)(Dd, { ...e, children: r });
}
function jd(e) {
  let t = on(),
    [n, r] = N.useState(!1),
    { bTabHidden: i, bOffscreen: a, refIntersection: o } = cd(),
    s = () => N.Children.count(e.children),
    c = () => Math.min(s(), e.visibleElements),
    l = () =>
      N.Children.map(e.children, (n, r) => {
        let i = e.bLazyRenderChildren
          ? (0, M.jsx)(de, {
              rootMargin: `0px 100% 0px 100%`,
              horizontal: !0,
              placeholderWidth: e.lazyRenderPlaceholderWidth ?? 1,
              placeholderHeight: e.lazyRenderPlaceholderHeight ?? 1,
              holdGamepadFocus: t,
              children: n,
            })
          : n;
        return (0, M.jsx)(
          Ku,
          {
            className: xd,
            index: r,
            role: `listitem`,
            "aria-label": void 0,
            children: i,
          },
          `slide_` + r,
        );
      }),
    u = s(),
    d = c();
  if (!u || !d) return null;
  let f = d < u,
    p = e.hideArrows || !f,
    m = !f || e.hidePips,
    h = !!e.bAutoAdvance && f && !t,
    g;
  n && !Ft() ? (g = 5) : i ? (g = 1) : a && (g = 2);
  let _ = 4 / 3,
    v = !0;
  e.slideAspectRatio && ((_ = e.slideAspectRatio), (v = !1));
  let y = `items_in_row_${e.visibleElements}`;
  return (0, M.jsx)(Ot, {
    "flow-children": `row`,
    className: j(ud, e.className, y),
    navKey: e.navKey,
    ref: o,
    onMouseEnter: () => r(!0),
    onMouseLeave: () => r(!1),
    children: (0, M.jsxs)(au, {
      visibleSlides: e.visibleElements,
      totalSlides: s(),
      naturalSlideWidth: 100 * _,
      naturalSlideHeight: 100,
      step: e.visibleElements,
      infinite: !e.disableEdgeWrap,
      isIntrinsicHeight: v,
      dragEnabled: !1,
      touchEnabled: !1,
      lockOnWindowScroll: !0,
      orientation: `horizontal`,
      disableKeyboard: !0,
      currentSlide: e.startingSlide,
      children: [
        (0, M.jsx)(Id, {
          bHideArrows: p,
          onSlide: e.onSlide,
          arrowFill: e.arrowFill,
          arrowStyle: e.arrowStyle,
          children: l(),
        }),
        !m &&
          (e.useTestScrollbar
            ? (0, M.jsx)(kd, { showArrows: p, carouselStore: null })
            : (0, M.jsx)(`div`, {
                className: (0, Od.default)({
                  "I8j65FBXdOY-": !0,
                  "uhUggqIYXBc-": e.className?.includes(`template-carousel`),
                }),
                children: (0, M.jsx)(Md, {
                  ...e,
                  nPageSize: d,
                  children: e.children,
                }),
              })),
        h && (0, M.jsx)(Pd, { pauseReason: g }),
      ],
    }),
  });
}
function Md(e) {
  let { nPageSize: t } = e,
    n = N.useContext($l),
    [r, i] = N.useState(n.state.currentSlide);
  return (
    N.useEffect(
      () =>
        n.subscribe(() => {
          i(n.state.currentSlide);
        }),
      [n],
    ),
    (0, M.jsx)(M.Fragment, {
      children: N.Children.map(e.children, (n, i) => {
        if (i % t !== 0) return null;
        let a = r >= i && r < i + t;
        return (0, M.jsx)(
          wu,
          {
            slide: i,
            className: md,
            children: (0, M.jsx)(bf, { ...e, bIsActive: a }),
          },
          i,
        );
      }),
    })
  );
}
function Nd(e) {
  e.current &&= (window.clearTimeout(e.current), null);
}
function Pd(e) {
  let { pauseReason: t } = e,
    n = N.useContext($l),
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
    return n.subscribe(e), () => n.unsubscribe(e);
  }, [n]);
  let l = N.useCallback(() => {
    let { currentSlide: e, visibleSlides: t, totalSlides: r } = n.state,
      i = 0;
    e + t < r && (i = Math.min(e + t, r - t)),
      i !== e && ((s.current = i), n.setStoreState({ currentSlide: i }));
  }, [n]);
  return (0, M.jsx)(od, {
    className: pd,
    enabled: a,
    currentItemKey: r,
    autoAdvanceMsec: ad,
    fnAdvance: l,
    pauseReason: t,
    countdownToken: `#Carousel_AutoAdvanceNextInSeconds`,
  });
}
function Fd(e) {
  return e.totalSlides ? (200 * e.currentSlide) / e.totalSlides + `%` : `0%`;
}
function Id(e) {
  let {
      bHideArrows: t,
      children: n,
      onSlide: r,
      arrowFill: i,
      arrowStyle: a,
    } = e,
    o = N.useContext($l),
    s = N.useRef(o.state.currentSlide),
    [c, l] = N.useState(null),
    [u, d] = N.useState(Fd(o.state)),
    f = N.useRef(null);
  N.useEffect(() => {
    let e = () => {
      let e = s.current,
        t = o.state.currentSlide;
      d(Fd(o.state)),
        r && r(t),
        l(t > e ? `Right` : t < e ? `Left` : null),
        Nd(f),
        (f.current = window.setTimeout(() => {
          f.current && (l(null), Nd(f));
        }, 1e3)),
        (s.current = t);
    };
    return (
      o.subscribe(e),
      () => {
        o.unsubscribe(e), Nd(f);
      }
    );
  }, [o]);
  let p = !!c && `CarouselSliding` + c;
  return (0, M.jsxs)(`div`, {
    className: j(dd, `SliderBody`, p),
    style: { "--carousel-rtl-tray-offset": u },
    children: [
      !t &&
        (0, M.jsx)(su, {
          className: j(
            `_6KbJ1ZwTIeY-`,
            `oKffwUnx6co-`,
            `_--jO3lLROzo-`,
            `CarouselBtnLeft`,
          ),
          "aria-label": k(`#Carousel_Prev`),
          children: (0, M.jsx)(yf, {
            arrowFill: i,
            arrowStyle: a,
            direction: `left`,
          }),
        }),
      (0, M.jsx)(Qu, {
        className: vt.GetScrollableClassname(),
        classNameTray: fd,
        classNameAnimation: Sd,
        role: `list`,
        children: (0, M.jsx)(or, { children: n }),
      }),
      !t &&
        (0, M.jsx)(_u, {
          className: j(
            `_6KbJ1ZwTIeY-`,
            `O2Vg9rmPwSE-`,
            `_--jO3lLROzo-`,
            `CarouselBtnRight`,
          ),
          "aria-label": k(`#Carousel_Next`),
          children: (0, M.jsx)(yf, {
            arrowFill: i,
            arrowStyle: a,
            direction: `right`,
          }),
        }),
    ],
  });
}
function Ld(e) {
  let t = on(),
    n = Mr(940),
    r = String(w(e.args, `autoadvance`)).toLowerCase() === `true`;
  return (0, M.jsx)(Ad, {
    hideArrows: !n,
    hidePips: t,
    visibleElements: 1,
    useTestScrollbar: !1,
    bLazyRenderChildren: !0,
    screenIsWide: n,
    bAutoAdvance: r,
    className: y,
    children: e.children,
  });
}
var Rd = `FQV2hlT8BYs-`;
function zd(e) {
  let { strURL: t, children: n } = e;
  return (typeof t == `string` ? !Ct(t) : t.some((e) => !Ct(e)))
    ? (0, M.jsx)(Bd, { children: n })
    : (0, M.jsx)(M.Fragment, { children: n });
}
function Bd(e) {
  let { children: t } = e;
  return Ae()
    ? (0, M.jsx)(M.Fragment, { children: t })
    : (0, M.jsx)(`div`, {
        className: Rd,
        children: Zt(
          `#Image_Externally_Hosted_Hidden`,
          (0, M.jsx)(`a`, {
            href: A.STORE_BASE_URL + `account/cookiepreferences`,
          }),
        ),
      });
}
var Vd = null;
function Hd() {
  return (
    (Vd ??= new Map([
      [`url`, { Constructor: va, autocloses: !1 }],
      [`dynamiclink`, { Constructor: ya, autocloses: !1 }],
      [
        `h1`,
        { Constructor: et(Oe, ve), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [
        `h2`,
        { Constructor: et($e, te), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [
        `h3`,
        { Constructor: et(Re, v), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [`quote`, { Constructor: et(qe, h), autocloses: !1 }],
      [`list`, { Constructor: ke, autocloses: !1, skipInternalNewline: !0 }],
      [`olist`, { Constructor: Je, autocloses: !1, skipInternalNewline: !0 }],
      [`*`, { Constructor: Ie, autocloses: !0, skipInternalNewline: !0 }],
      [`p`, { Constructor: De, autocloses: !1, skipFollowingNewline: !0 }],
      [`img`, { Constructor: Ud, autocloses: !1 }],
      [`previewyoutube`, { Constructor: Pe, autocloses: !1 }],
      [`looping_media`, { Constructor: Ke, autocloses: !1 }],
      [`video`, { Constructor: Xe, autocloses: !1 }],
      [`youtubeorvideo`, { Constructor: Fe, autocloses: !1 }],
      [`trailer`, { Constructor: Gd, autocloses: !1 }],
      [
        `speaker`,
        {
          Constructor: Kd,
          autocloses: !1,
          skipInternalNewline: !0,
          allowWrapTextForCopying: !0,
        },
      ],
      [`docimg`, { Constructor: Wd, autocloses: !1 }],
      [`carousel`, { Constructor: Ld, autocloses: !1 }],
    ])),
    Vd
  );
}
function Ud(e) {
  let { showErrorInfo: t, event: n } = e.context,
    r = w(e.args, `src`) || e.children?.toString();
  (r ||= w(e.args)), (r = lt(r ?? ``) || void 0);
  let i = w(e.args, `style`) === `inline`,
    a = fe(r, e.language, n?.rtime32_last_modified);
  if (a == null) return null;
  if (typeof a == `string`) {
    r = a;
    let e;
    return (
      (e = !Ct(r)),
      n?.BHasTag(`auto_rssfeed`) && (e = !1),
      t
        ? (0, M.jsx)(re, {
            className: j({ [ct]: i }),
            src: r,
            crossOrigin: e ? `anonymous` : void 0,
          })
        : ((r = Bt(r)),
          (0, M.jsx)(zd, {
            strURL: r,
            children: (0, M.jsx)(ie, {
              className: j({ [ct]: i }),
              src: r,
              crossOrigin: e ? `anonymous` : void 0,
            }),
          }))
    );
  }
  return (0, M.jsx)(zd, {
    strURL: a,
    children: (0, M.jsx)(We, { rgSources: a }),
  });
}
function Wd(e) {
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
function Gd(e) {
  let t = qd(e.args, `appid`, e.context.event?.appid ?? 0),
    n = qd(e.args, `trailerid`, 0),
    r = w(e.args, `style`)?.toLocaleLowerCase() ?? Zc.k_TrailerAsFull;
  r = Object.values(Zc).includes(r) ? r : Zc.k_TrailerAsFull;
  let i = Ur(e.args.color, `black`),
    a = Ur(e.args.bgcolor, `white`),
    o = He(e.args);
  return (0, M.jsx)(Qc, {
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
function Kd(e) {
  let t = w(e.args, `name`),
    n = w(e.args, `title`),
    r = w(e.args, `company`),
    i = w(e.args, `photo`);
  return e.context.bShowShortSpeakerInfo
    ? (0, M.jsx)(ae, {
        name: t,
        title: n,
        company: r,
        photo: i,
        bio: e.children,
      })
    : (0, M.jsx)(se, {
        name: t,
        title: n,
        company: r,
        photo: i,
        bio: e.children,
      });
}
function qd(e, t, n) {
  let r = w(e, t);
  return r === void 0 || r == null ? n : Number.parseInt(r);
}
var Jd = null;
function Yd() {
  return (
    (Jd ??= new Map([
      ...Array.from(Ue.entries()),
      ...Array.from(Hd().entries()),
    ])),
    Jd
  );
}
var Xd = N.createContext(null);
function Zd() {
  return N.useContext(Xd) ?? Yd();
}
function Qd(e) {
  let t = Zd(),
    n = N.useMemo(
      () =>
        new Map([
          ...Array.from(t.entries()),
          ...Array.from(e.dictionary.entries()),
        ]),
      [t, e.dictionary],
    );
  return (0, M.jsx)(Xd.Provider, { value: n, children: e.children });
}
function $d(e) {
  let {
      text: t,
      languageOverride: n,
      event: r,
      showErrorInfo: i,
      bShowShortSpeakerInfo: a,
    } = e,
    o = ea(),
    s = N.useCallback(
      (e) => new zr(new Rr(new Ir(new it(new ot()), e, o, { event: r })), e),
      [r, o],
    ),
    c = Zd();
  return N.useMemo(() => new st(c, s, n || A.LANGUAGE), [c, s, n]).ParseBBCode(
    t,
    { showErrorInfo: i, event: r, bShowShortSpeakerInfo: a, bbcode: t },
  );
}
function ef(e) {
  let {
      strTag: t,
      args: n,
      rawargs: r,
      language: i = Kn(A.LANGUAGE),
      children: a,
      ...o
    } = e,
    s = Zd().get(t);
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
var tf = (function (e) {
    return (
      (e.k_ECutArrowStyle = `single`),
      (e.k_EDoubleArrowStyle = `double`),
      (e.k_EThickChevron = `chevron`),
      (e.k_EFilledArrow = `filled`),
      (e.k_EPointyArrow = `pointy`),
      e
    );
  })({}),
  nf = (function (e) {
    return (
      (e.k_EPillCrumb = `pill`),
      (e.k_ECircularCrumb = `circle`),
      (e.k_ESquareCrumb = `square`),
      e
    );
  })({});
async function rf(e, t) {
  let { rgDefIDs: n, strCategory: r, itemClass: i } = t,
    a = await yt.QueryRewardItems(e, {
      definitionids: n,
      community_item_classes: i ? [i] : void 0,
      filter_match_any_category_tags: r ? [r] : void 0,
    });
  if (!a.BSuccess())
    throw Error(`LoyaltyRewards.QueryRewardItems answered ` + a.GetEResult());
  return a.Body().toObject().definitions ?? [];
}
var af;
function of() {
  let e = Wt();
  return e
    ? e.GetAnonymousServiceTransport()
    : ((af ||= tn(new Wn(A.WEBAPI_BASE_URL))),
      af.GetAnonymousServiceTransport());
}
async function sf(e) {
  return rf(of(), e);
}
var cf = 36e5;
function lf(e) {
  return [`LoyaltyRewardDef`, e];
}
function uf(e, t) {
  return [`LoyaltyRewardDefsByCategoryAndClass`, e, t];
}
function df(e) {
  return {
    queryKey: lf(e),
    queryFn: async () => {
      let t = await sf({ rgDefIDs: [e] }),
        n = t.length == 1 ? t[0] : void 0;
      if (!n)
        throw Error(
          `Asked for point shop item ${e} and got ${t.length} items back, wanted exactly one.`,
        );
      return n;
    },
    enabled: e > 0,
    staleTime: cf,
    retry: !1,
  };
}
function ff(e, t) {
  return {
    queryKey: uf(e, t),
    queryFn: () => sf({ strCategory: e, itemClass: t }),
    enabled: !!(e && t),
    staleTime: cf,
    retry: !1,
  };
}
function pf(e) {
  let { data: t } = i(df(e));
  return t;
}
function mf(e, t) {
  let n = l(),
    { data: r } = i(ff(e, t));
  return (
    (0, N.useEffect)(() => {
      r?.forEach((e) => {
        e.defid !== void 0 && n.setQueryData(lf(e.defid), e);
      });
    }, [r, n]),
    r
  );
}
var hf = 1778623200;
function gf(e, t) {
  let n = !1;
  return (
    e && e.GetEventType() == 36
      ? (n = !0)
      : e && t && t.is_creator_home && (n = _f(e, t)),
    n
  );
}
function _f(e, t) {
  return !!t && !!t.is_creator_home && (e.createTime ?? 0) > hf;
}
function vf(e) {
  return gf(e, we(e.clanSteamID.GetAccountID()).data);
}
function yf(e) {
  let { arrowFill: t, arrowStyle: n, direction: r } = e;
  switch (n) {
    default:
    case tf.k_ECutArrowStyle: {
      let e = r == `right` ? 0 : 180;
      return (0, M.jsx)(tr, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case tf.k_EDoubleArrowStyle: {
      let e = r == `right` ? 180 : 0;
      return (0, M.jsx)($n, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case tf.k_EThickChevron: {
      let e = r == `right` ? 0 : 180;
      return (0, M.jsx)(It, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case tf.k_EFilledArrow: {
      let e = r == `right` ? 90 : 270;
      return (0, M.jsx)(jt, {
        fill: t || `white`,
        role: `presentation`,
        angle: e,
      });
    }
    case tf.k_EPointyArrow:
      return (0, M.jsx)(Tn, {
        fill: t || `white`,
        role: `presentation`,
        direction: r || `left`,
      });
  }
}
function bf(e) {
  let {
      bIsActive: t,
      breadcrumbActiveColor: n,
      breadcrumbColor: r,
      breadcrumbStyle: i,
    } = e,
    a = t ? n || `#FFFFFF` : r || `#606974`;
  switch (i) {
    default:
    case nf.k_EPillCrumb:
      return (0, M.jsx)(Hn, { fill: a, role: `presentation` });
    case nf.k_ECircularCrumb:
      return (0, M.jsx)(gn, { fill: a, role: `presentation` });
    case nf.k_ESquareCrumb:
      return (0, M.jsx)(Jn, { fill: a, role: `presentation` });
  }
}
export {
  lr as $,
  Gr as A,
  Nr as B,
  ma as C,
  $r as D,
  na as E,
  Ar as F,
  Er as G,
  br as H,
  Pr as I,
  wr as J,
  Tr as K,
  Dr as L,
  zr as M,
  Ir as N,
  ai as O,
  Fr as P,
  hr as Q,
  Or as R,
  Ta as S,
  ta as T,
  yr as U,
  jr as V,
  ur as W,
  mr as X,
  Cr as Y,
  gr as Z,
  Uc as _,
  mf as a,
  vc as b,
  Qd as c,
  qd as d,
  Ad as f,
  Yc as g,
  Wc as h,
  vf as i,
  Ur as j,
  Xr as k,
  $d as l,
  cd as m,
  bf as n,
  tf as o,
  od as p,
  vr as q,
  gf as r,
  nf as s,
  yf as t,
  ef as u,
  Ac as v,
  ha as w,
  L as x,
  Oc as y,
  Mr as z,
};
