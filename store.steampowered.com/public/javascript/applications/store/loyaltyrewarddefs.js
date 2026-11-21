/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, dt as n, ft as r, st as i } from "./chunk~01cfc309bf.js";
import {
  Ds as a,
  Gt as o,
  In as s,
  Is as c,
  Ln as l,
  Qn as u,
  Xn as d,
  j as ee,
} from "./chunk~6b8ddcaac8.js";
import { at as f, ct as p } from "./chunk~f57d770d64.js";
import { d as m, u as h } from "./chunk~8c66e1c7a5.js";
import { t as g } from "./chunk~f0141d9521.js";
import { n as te, r as ne } from "./chunk~673650a653.js";
import { o as _, r as v, t as re } from "./chunk~5adf866415.js";
import { l as ie } from "./chunk~4eed35ad1f.js";
import { t as ae } from "./chunk~f4c928a27a.js";
import { t as y } from "./chunk~eefd71512b.js";
import {
  $ as oe,
  B as se,
  C as ce,
  D as le,
  E as ue,
  F as b,
  G as de,
  I as fe,
  K as pe,
  L as me,
  M as he,
  N as ge,
  O as _e,
  P as ve,
  Q as ye,
  R as be,
  T as xe,
  W as Se,
  Y as x,
  _ as Ce,
  a as we,
  b as Te,
  et as S,
  g as C,
  j as Ee,
  k as De,
  nt as Oe,
  r as ke,
  t as Ae,
  tt as je,
  v as w,
  w as Me,
  x as Ne,
  y as Pe,
  z as T,
} from "./chunk~a19d1add1e.js";
import { l as Fe } from "./chunk~6cf3fe3e07.js";
import {
  a as Ie,
  h as Le,
  i as Re,
  l as ze,
  m as Be,
  n as Ve,
  o as He,
  p as Ue,
  r as We,
  s as Ge,
  t as Ke,
  u as qe,
} from "./chunk~618fb52a90.js";
import { r as Je, t as E } from "./chunk~e70aabe4d7.js";
import { r as Ye } from "./chunk~38061b7abb.js";
import { m as Xe, n as Ze } from "./chunk~7dcf2f426f.js";
import { r as Qe } from "./chunk~21cdc464a1.js";
import { h as $e } from "./chunk~4e18b7e430.js";
import {
  $b as et,
  Ar as tt,
  Du as nt,
  Hy as rt,
  Nc as D,
  OS as O,
  PS as it,
  Px as at,
  Qs as ot,
  Uv as k,
  Ux as st,
  Xc as A,
  Xy as j,
  Yc as M,
  Yr as ct,
  cb as lt,
  fu as ut,
  gb as dt,
  hc as N,
  hl as ft,
  ib as P,
  iu as pt,
  iy as mt,
  ls as ht,
  lu as gt,
  mc as _t,
  nx as F,
  ou as vt,
  rb as I,
  ru as yt,
  tl as L,
  yv as bt,
  zy as xt,
} from "./main.js";
var R = e(t(), 1),
  z = r();
function B(e) {
  return (0, z.jsxs)(`a`, {
    href: e.strURL,
    className: b.Box,
    "data-modal-content-sizetofit": !!e.bSizeToFit,
    "data-appid": e.appid,
    "data-publishedfileid": e.publishedfileid,
    children: [
      (0, z.jsx)(se, { strURL: e.strPreviewURL }),
      (0, z.jsxs)(fe, {
        children: [
          (0, z.jsx)(T, { children: e.strTitle }),
          (0, z.jsx)(`div`, {
            children: (0, z.jsx)(`span`, {
              className: b.Type,
              children: e.strType,
            }),
          }),
          e.author && (0, z.jsx)(ge, { children: e.author }),
          (0, z.jsx)(be, { children: e.strDescription }),
        ],
      }),
    ],
  });
}
var St = class extends S {
    m_LinkFilter = at;
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
          (i || super.AppendNode(s(r)),
            (n = e.input.substring(e.index + r.length)),
            (e = this.m_LinkFilter.exec(n)));
        }
      }
      n.length > 0 && super.AppendText(n, t);
    }
  },
  Ct = `[ː:]([a-zA-Z0-9_]+)[ː:]`,
  wt = class extends S {
    m_EmoteRegex = new RegExp(Ct);
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
          (super.AppendNode(R.createElement(we, { emoticon: r }, [])),
            (n = e.input.substring(e.index + r.length + 2)),
            (e = this.m_EmoteRegex.exec(n)));
        }
      }
      n.length > 0 && super.AppendText(n, t);
    }
  },
  Tt = class extends S {
    m_parentNode = void 0;
    constructor(e, t) {
      (super(e), (this.m_parentNode = t));
    }
    AppendText(e, t = !1) {
      let n = e;
      (this.m_parentNode &&
        this.m_parentNode.tag == `img` &&
        !Et(n) &&
        (n = L(n)),
        super.AppendText(n, t));
    }
  };
function Et(e) {
  let t = e.trim();
  return (
    t.startsWith(`{STEAM_CLAN_IMAGE}`) || t.startsWith(`{STEAM_CLAN_LOC_IMAGE}`)
  );
}
var Dt =
  /^(#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-z-]+\([^;{}]*\)|[a-z]+)$/i;
function Ot(e) {
  return e ? Dt.test(e.trim()) : !1;
}
function V(e, t) {
  return Ot(e) ? e : t;
}
var kt = `NiXfRuagfO4-`;
function At(e) {
  let { inputType: t, id: n, bApplyUserContentPref: r } = e,
    i = t == `bundle` ? `bundle` : t == `sub` ? `sub` : `game`,
    a = d(n, i),
    { data: o } = k(a),
    { data: s, isPending: c } = mt(r ? a : void 0);
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
      return (0, z.jsx)(`div`, {
        className: D(kt, `AppSummaryWidgetCtn`),
        children: P(
          e,
          (0, z.jsx)(`a`, { href: F.STORE_BASE_URL + `account/preferences/` }),
        ),
      });
    }
  }
  return (0, z.jsx)(`div`, {
    className: D(kt, `AppSummaryWidgetCtn`),
    children: (0, z.jsx)(ae, {
      id: n,
      type: i,
      bShowDemoButton: o.type == 1,
      bAllowTwoLinesForHeader: !0,
      bPreferAssetWithoutOverride: !1,
    }),
  });
}
var H =
    /(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
  U =
    /(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i,
  W =
    /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i;
function jt(e, t) {
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
function Mt(e, t, r, a, o) {
  let s = n(),
    c = bt();
  return i(Pt(s, c, e, t, r, a, o)).data ?? void 0;
}
function Nt(e, t, n, r, i) {
  return [`useEventImageForSizeAsArrayWithFallback`, e?.GID, t, n, r, i];
}
function Pt(e, t, n, r, i, a, o) {
  return {
    queryKey: Nt(n, r, i, a, o),
    enabled: n && !!n.GID,
    queryFn: async () => {
      if (!n) return null;
      let s = [];
      if (!n.BImageNeedScreenshotFallback(r, i)) {
        let o = await e.ensureQueryData(E(e, t, n, r, i, a));
        if ((o && s.push(o), a != f.full)) {
          let a = await e.ensureQueryData(E(e, t, n, r, i, f.full));
          a && s.push(a);
        }
      }
      if (!o && s.length == 0) {
        let r = await e.ensureQueryData(Je(e, t, n));
        r && s.push(r);
      }
      return s;
    },
  };
}
function Ft({ clanSteamID: e, strVanity: t, strGroupVanity: n }) {
  let r = t !== void 0 || n !== void 0,
    { data: i, isPending: a } = m(
      r ? (t ?? n ?? ``) : ``,
      t === void 0 ? `group` : `store`,
    );
  if (!r) return e?.GetAccountID();
  if (!a) return i?.clanAccountID ?? null;
}
function It(e) {
  let { appid: t, announcementGID: n, eventGID: r, strURL: i } = e,
    a = Ft(e),
    l = a === null,
    {
      data: u,
      isPending: d,
      isError: ee,
    } = o(
      l
        ? void 0
        : {
            clanAccountID: a ?? void 0,
            appid: t,
            eventGID: r,
            announcementGID: n,
          },
    ),
    f = c(t || u?.appid || void 0),
    { data: p } = k(f);
  if (l || ee || u === null) return s(i);
  if (d || !u) return (0, z.jsx)(y, {});
  let m = O(F.LANGUAGE),
    h = u.GetNameWithFallback(m),
    g = u.GetSubTitleWithSummaryFallback(m),
    _ = p?.name,
    v = dt(u.GetStartTimeAndDateUnixSeconds());
  return (0, z.jsxs)(ne, {
    eventModel: u,
    route: te.k_eView,
    className: b.Box,
    "data-modal-content-sizetofit": !0,
    "data-appid": t,
    children: [
      (0, z.jsx)(Lt, { ...e, event: u }),
      (0, z.jsxs)(fe, {
        children: [
          (0, z.jsxs)(ge, {
            children: [
              I(
                u.type == 28
                  ? `#EventDisplay_Share_Announcement`
                  : `#EventDisplay_Share_Event`,
                _ ?? ``,
              ),
              (0, z.jsx)(me, { children: v }),
            ],
          }),
          (0, z.jsx)(T, {
            children: (0, z.jsx)(`div`, { className: b.Type, children: h }),
          }),
          (0, z.jsx)(be, { children: g }),
        ],
      }),
    ],
  });
}
function Lt(e) {
  let {
      event: t,
      fnFilterImageURLsForKnownFailures: n,
      fnImageFailureCallback: r,
    } = e,
    i = Mt(t, `capsule`, O(F.LANGUAGE), f.capsule_main) ?? [];
  return (
    i && n && (i = n(i)),
    (0, z.jsx)(g, {
      className: b.Preview,
      rgSources: i ?? [],
      onIncrementalError: (e, t, n) => r && r(t),
    })
  );
}
var G =
    /(?:steampowered\.com|store\.steamchina\.com|store[\w-]*\.(?:[\w.-]+\.)?(?:steam\.dev|valve\.org)|valve\.org\/store)\/(app|bundle|sub)\/(\d+)/i,
  Rt = [`store.steampowered.com`, `store.steamchina.com`],
  zt = [`steampowered.com`, `steamcommunity.com`],
  K = [`steamchina.com`],
  Bt = [`steam.dev`, `valve.org`];
function q(e, t) {
  return t.some((t) => e == t || e.endsWith(`.${t}`));
}
function J(e) {
  let t = A(e).toLocaleLowerCase(),
    n = A(F.STORE_BASE_URL).toLocaleLowerCase(),
    r = A(F.COMMUNITY_BASE_URL).toLocaleLowerCase();
  return t == n || t == r
    ? !0
    : Rt.includes(n)
      ? q(t, q(n, K) ? K : zt)
      : q(t, [...zt, ...K, ...Bt]);
}
function Vt(e) {
  if (J(e)) return Ht(e);
}
function Ht(e) {
  let t = new RegExp(G).exec(e);
  if (!t || t.length <= 2) return;
  let n = t[1].toLowerCase(),
    r = Number(t[2]);
  if (r > 0 && ut(n))
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
function Ut(e) {
  return !!e && (e.GetEventType() == 36 || e.GetEventType() == 20);
}
function Wt(e) {
  let t = Ut(e),
    n = t ? e.clanSteamID.GetAccountID() : void 0,
    { data: r, isLoading: i } = h(n),
    { data: o, isLoading: s } = a(n);
  if (!t) return null;
  if (!(i || s)) return !o || !r || !ee(e, r) ? null : (o.appids ?? []);
}
function Gt(e, t) {
  return e === null || (t.length > 0 && t.every((t) => e.includes(t)));
}
function Kt(e, t) {
  let n = Wt(t);
  if (e.appid === void 0) return !0;
  if (!(e.appid > 0)) return !1;
  if (n !== void 0) return Gt(n, [e.appid]);
}
function qt({ link: e, strURL: t, eventModel: n, bAnnouncement: r }) {
  let i = Kt(e, n);
  if (i === void 0) return null;
  if (!i) return s(t, n);
  let a =
    e.strClanSteamID64 === void 0
      ? e.clanAccountID === void 0
        ? void 0
        : j.InitFromClanID(e.clanAccountID, F.EUNIVERSE)
      : new j(e.strClanSteamID64);
  return (0, z.jsx)(It, {
    appid: e.appid,
    clanSteamID: a,
    strVanity: e.strOGGVanity,
    strGroupVanity: e.strGroupVanity,
    eventGID: r ? void 0 : e.eventGID,
    announcementGID: r ? e.eventGID : void 0,
    strURL: t,
  });
}
function Y(e, t, n, r = !1) {
  if (J(t)) {
    let i = jt(e, t);
    if (i)
      return (0, z.jsx)(qt, {
        link: i,
        strURL: t,
        eventModel: n?.event,
        bAnnouncement: r,
      });
  }
  return s(t, n?.event);
}
function Jt(e, t) {
  return Y(U, e, t);
}
function Yt(e, t) {
  return Y(H, e, t);
}
function Xt(e, t) {
  return Y(W, e, t, !0);
}
var Zt = /community.+sharedfiles\/filedetails\/\?id=\d+/i;
function Qt(e) {
  if (!Zt.test(e)) return;
  let t = e.split(`?`);
  if (t.length == 2) return new URLSearchParams(t[1]).get(`id`) ?? void 0;
}
function $t(e) {
  let { sharedFileID: t } = e,
    { data: n } = he(t),
    r = F.COMMUNITY_BASE_URL + `sharedfiles/filedetails/?id=`,
    i = n ?? {
      sharedfileid: t,
      title: I(`#Loading`),
      description: ``,
      type: ``,
      previewurl: ``,
      appid: 0,
      url: r + t,
    },
    a = st(i.url) ? r + i.url : i.url,
    o = i.personnaname !== void 0 && i.personnaname.length > 0;
  return (0, z.jsx)(B, {
    strURL: a,
    strTitle: i.title,
    strPreviewURL: i.previewurl,
    strType: i.type,
    strDescription: i.description,
    author:
      o &&
      lt(`#EventEditor_Author`, (0, z.jsx)(ve, { children: i.personnaname })),
    publishedfileid: t,
    appid: i.appid,
    bSizeToFit: i.bSizeToFit,
  });
}
var en = `x-q4pa21GtQ-`,
  tn = `jjfjy77nkEg-`,
  nn = `xk1sG-uqpwY-`,
  rn = `XZqUhfrxufg-`,
  an = `h4V9nI3kyqU-`,
  on = `gCqj4CIOecY-`,
  sn = /sketchfab\.com\/(?:models\/(?:[^/\s]+-)?)([a-z0-9]{32})/i;
function cn(e) {
  return [`sketchfab_oembed`, e];
}
function ln(e) {
  return `https://sketchfab.com/oembed?url=https://sketchfab.com/models/${encodeURIComponent(e)}`;
}
function un(e) {
  return {
    queryKey: cn(e),
    queryFn: async () => {
      let t = await fetch(ln(e));
      if (t.status === 404) return null;
      if (!t.ok) throw Error(`sketchfab oembed returned ${t.status}`);
      return await t.json();
    },
    enabled: !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function dn(e) {
  return i(un(e));
}
function fn(e) {
  let { modelID: t } = e,
    [n, r] = R.useState(!0),
    { data: i } = dn(t);
  if (n) {
    let e = () => r(!1);
    return (0, z.jsxs)(`div`, {
      className: nn,
      role: `button`,
      tabIndex: 0,
      onClick: e,
      onKeyDown: (t) => {
        (t.key === `Enter` || t.key === ` `) && (t.preventDefault(), e());
      },
      children: [
        i?.thumbnail_url &&
          (0, z.jsx)(`img`, {
            className: `FFbDls5-Ssk-`,
            src: i.thumbnail_url,
            alt: i.title,
          }),
        (0, z.jsx)(`img`, { className: en, alt: `` }),
        (0, z.jsxs)(`div`, {
          className: rn,
          children: [
            (0, z.jsxs)(`div`, {
              className: an,
              children: [
                (0, z.jsx)(`span`, {
                  className: on,
                  children: I(`#EventDisplay_Sketchfab`),
                }),
                i?.title && (0, z.jsxs)(`div`, { children: [i.title, `\xA0`] }),
              ],
            }),
            i?.author_name &&
              (0, z.jsx)(`div`, {
                className: `-r4s23p52-0-`,
                children: i.author_name,
              }),
          ],
        }),
      ],
    });
  }
  return (0, z.jsx)(`div`, {
    className: tn,
    children: (0, z.jsx)(`iframe`, {
      className: tn,
      title: i?.title ?? t,
      src: `https://sketchfab.com/models/${encodeURIComponent(t)}/embed?autostart=1`,
      frameBorder: 0,
      allowFullScreen: !0,
    }),
  });
}
var pn =
  /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.[\w.-]+\.steam\.dev|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
function mn(e) {
  let t = pn.exec(e),
    n = t ? Number(t[1]) : 0;
  return n > 0 ? n : void 0;
}
function hn(e) {
  return J(e) ? mn(e) : void 0;
}
var gn = `_8mFolns3-hw-`;
function _n(e) {
  let { defid: t } = e,
    n = vr(t);
  if (!n || !n.community_item_data) return null;
  let r = n.appid,
    i = n.community_item_data.item_image_large,
    a = `${F.MEDIA_CDN_COMMUNITY_URL}images/items/${r}/${i}`;
  return (0, z.jsx)(`div`, {
    className: gn,
    children: (0, z.jsx)(ct, {
      toolTipContent: n.community_item_data.item_description,
      children: (0, z.jsx)(`img`, {
        src: a,
        alt: n.community_item_data.item_title,
      }),
    }),
  });
}
var vn = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
  yn = /twitter\.com\/(\w+)(\/?)$/i,
  bn = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
  xn = /twitch\.tv\/(\w+)(\/?)$/i,
  Sn =
    /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i;
function X() {
  return F.EREALM === it.k_ESteamRealmChina;
}
var Cn = new Map();
function wn() {
  let e = F.EREALM,
    t = Cn.get(e);
  return (
    t ||
      ((t = X()
        ? [
            { urlRegExp: new RegExp(G), fnBBComponent: An },
            { urlRegExp: new RegExp(H), fnBBComponent: Yt },
            { urlRegExp: new RegExp(U), fnBBComponent: Jt },
            { urlRegExp: new RegExp(W), fnBBComponent: Xt },
            { urlRegExp: new RegExp(Sn), fnBBComponent: In },
          ]
        : [
            {
              urlRegExp: new RegExp(/youtu.be|youtube.com/i),
              fnBBComponent: Ee,
            },
            { urlRegExp: new RegExp(Zt), fnBBComponent: kn },
            { urlRegExp: new RegExp(G), fnBBComponent: An },
            { urlRegExp: new RegExp(H), fnBBComponent: Yt },
            { urlRegExp: new RegExp(U), fnBBComponent: Jt },
            { urlRegExp: new RegExp(W), fnBBComponent: Xt },
            { urlRegExp: new RegExp(vn), fnBBComponent: Dn },
            { urlRegExp: new RegExp(sn), fnBBComponent: On },
            { urlRegExp: new RegExp(yn), fnBBComponent: Nn },
            { urlRegExp: new RegExp(bn), fnBBComponent: Pn },
            { urlRegExp: new RegExp(xn), fnBBComponent: Fn },
            { urlRegExp: new RegExp(Sn), fnBBComponent: In },
            { urlRegExp: new RegExp(pn), fnBBComponent: Mn },
          ]),
      Cn.set(e, t)),
    t
  );
}
function Tn(e) {
  return wn().find((t) => !!t.urlRegExp.exec(e));
}
function En(e) {
  return R.useMemo(() => Tn(e), [e]);
}
function Dn(e, t) {
  if (X()) return null;
  let n = new RegExp(vn).exec(e);
  if (n && n.length > 1) {
    let e = n[1];
    if (e?.length > 0) {
      let n =
        `https://medal.tv/clip/` +
        e +
        `/?autoplay=0&donate=0` +
        (t && t.event ? `&steamappid=` + t.event.appid : ``);
      return (0, z.jsx)(`iframe`, {
        className: qe,
        src: n,
        title: e,
        frameBorder: 0,
        allow: `autoplay`,
      });
    }
  }
  return s(e, t?.event);
}
function On(e, t) {
  let n = new RegExp(sn).exec(e);
  if (n && n.length > 1) {
    let e = n[1];
    if (e && e.length > 1) return (0, z.jsx)(fn, { modelID: e });
  }
  return s(e, t?.event);
}
function kn(e, t) {
  let n = Qt(e);
  return n === void 0 ? s(e, t?.event) : (0, z.jsx)($t, { sharedFileID: n });
}
function An(e, t) {
  let n = Vt(e);
  return n
    ? (0, z.jsx)(jn, {
        eventModel: t?.event,
        inputID: n.id,
        inputType: n.strItemType,
        fallbackUrl: e,
      })
    : s(e, t?.event);
}
function jn(e) {
  let { inputID: t, inputType: n, eventModel: r, fallbackUrl: i } = e,
    a = u(t, n),
    { data: o } = k(a),
    c = Wt(r),
    l;
  return (
    c === null
      ? (l = !0)
      : c && o && (l = Gt(c, o.appid ? [o.appid] : (o.included_appids ?? []))),
    l === void 0
      ? null
      : l
        ? (0, z.jsx)(At, { id: t, inputType: n, bApplyUserContentPref: !0 })
        : s(i, r)
  );
}
function Mn(e, t) {
  let n = hn(e);
  return n
    ? (0, z.jsx)(`div`, {
        className: D(ze),
        children: (0, z.jsx)(_n, { defid: n, url: e }),
      })
    : s(e, t?.event);
}
function Nn(e, t) {
  return X() ? null : Z(e, (0, z.jsx)(N, {}), `@`, t);
}
function Pn(e, t) {
  return X() ? null : Z(e, (0, z.jsx)(N, {}), `#`, t);
}
function Fn(e, t) {
  return X() ? null : Z(e, (0, z.jsx)(_t, {}), void 0, t);
}
function In(e, t) {
  return Z(e, (0, z.jsx)(ot, {}), void 0, t);
}
function Z(e, t, n, r) {
  let i,
    a = e.endsWith(`/`) ? e.length - 1 : e.length,
    o = e.lastIndexOf(`/`, a - 1);
  (o != -1 && o + 1 < e.length && (i = e.substring(o + 1, a)),
    n && i && (i = n + i));
  let c = s(e, r?.event, i ?? e);
  return (0, z.jsxs)(`div`, {
    className: Le,
    children: [(0, z.jsx)(`div`, { className: Be, children: t }), c],
  });
}
function Ln(e) {
  switch (e) {
    case `button`:
      return D(He, `LinkButton`);
    case `pill`:
      return D(Ge, `LinkPill`);
    default:
      return D(Ie, `Link`);
  }
}
function Rn(e, t, n) {
  let r;
  return (
    (e == `button` || e == `pill`) && t && (r = { backgroundColor: t }),
    (e == `button` || e == `pill`) && n && (r = { ...(r ?? {}), color: n }),
    r
  );
}
function zn(e, t) {
  let n = (
    typeof e == `string`
      ? e
      : Array.isArray(e) && e.length == 1 && typeof e[0] == `string`
        ? e[0]
        : void 0
  )?.trim();
  return !n || !t || n != t.trim();
}
function Bn(e) {
  let t = ye(w(e.args) || w(e.args, `href`)),
    n = w(e.args, `style`),
    r = w(e.args, `id`),
    i = V(w(e.args, `buttoncolor`) || w(e.args, `bgcolor`), void 0),
    a = V(w(e.args, `labelcolor`) || w(e.args, `color`), void 0),
    o = Ln(n),
    s = e.context.event,
    c = p(t, e.language, s?.rtime32_last_modified),
    u = En(zn(e.children, t) ? `` : (t ?? ``));
  if (u && t) return u.fnBBComponent(t, { event: e.context.event });
  if (c === void 0 || c == null) return e.children || ``;
  t = typeof c == `string` ? c : c[1];
  let d = Rn(n, i, a);
  return typeof t == `string` && t.length > 0 && t[0] == `#`
    ? (0, z.jsx)(ft, { className: o, href: t, style: d, children: e.children })
    : t == `steam://settings/account`
      ? (0, z.jsx)(tt, {
          className: o,
          href: `steam://settings/account`,
          children: e.children,
        })
      : (0, z.jsx)(l, {
          className: o,
          url: t,
          event: e.context.event,
          id: r,
          style: d,
          children: e.children,
        });
}
function Vn(e) {
  let t = w(e.args, `href`),
    n = En(t);
  return n
    ? n.fnBBComponent(t, { event: e.context.event })
    : (0, z.jsx)(Bn, { ...e });
}
var Hn = `v87a6zGhXmo-`,
  Un = `XkrNZp-zaXw-`,
  Q = (function (e) {
    return (
      (e.k_TrailerAsButton = `button`),
      (e.k_TrailerAsPill = `pill`),
      (e.k_TrailerAsFull = `full`),
      (e.k_TrailerAsPoster = `poster`),
      (e.k_TrailerAsMicro = `micro`),
      e
    );
  })({});
function Wn(e) {
  let {
      embedStyle: t,
      appid: n,
      color: r,
      bgcolor: i,
      children: a,
      trailerBaseID: o,
      subtitles: s,
    } = e,
    [c, l] = (0, R.useState)(!1),
    u = (0, R.useMemo)(() => ({ appid: n }), [n]);
  switch (t) {
    case `button`:
    case `pill`:
      return (0, z.jsxs)(z.Fragment, {
        children: [
          (0, z.jsxs)(`button`, {
            type: `button`,
            className: D({ [Hn]: t == `pill`, [Un]: t == `button` }),
            onClick: () => l(!0),
            style: { color: r, backgroundColor: i },
            children: [(0, z.jsx)(ht, {}), a || I(`#EventEmail_WatchNow`)],
          }),
          (0, z.jsx)(Ze, {
            id: u,
            bShowModal: c,
            trailerBaseID: o,
            hideModal: () => l(!1),
          }),
        ],
      });
    default:
    case `full`:
      return (0, z.jsx)(Gn, { ...e });
  }
}
function Gn(e) {
  let { appid: t, trailerBaseID: n } = e,
    r = c(t),
    { data: i } = k(r),
    [a, o] = (0, R.useState)(() =>
      !t || !n ? I(`#TrailerPlayer_ID_NotProvided`) : null,
    ),
    s = gt(r),
    l = (0, R.useMemo)(
      () => (s ? s.find((e) => e.trailer_base_id === n) : null),
      [s, n],
    );
  return (
    (0, R.useEffect)(() => {
      (i?.unvailable_for_country_restriction &&
        o(I(`#TrailerPlayer_CouldNotLoad`, t, n)),
        s &&
          !l &&
          o(I(`#TrailerPlayer_CouldNotLoad`, e.appid, e.trailerBaseID)));
    }, [
      t,
      e.appid,
      e.trailerBaseID,
      i?.unvailable_for_country_restriction,
      n,
      l,
      s,
    ]),
    a
      ? e.bIsPreviewMode
        ? (0, z.jsx)(`div`, { className: _, children: a })
        : null
      : l
        ? (0, z.jsx)(Kn, { trailerToPlay: l })
        : (0, z.jsx)(y, { string: I(`#Loading`), size: `small` })
  );
}
function Kn(e) {
  let { trailerToPlay: t } = e,
    {
      rgDashTrailers: n,
      rgHlsTrailers: r,
      strCaptionManufest: i,
    } = (0, R.useMemo)(() => {
      let { rgDashTrailers: e, rgHlsTrailers: n } = vt(t);
      return { rgDashTrailers: e, rgHlsTrailers: n, strCaptionManufest: yt(t) };
    }, [t]);
  return n?.length == 0
    ? null
    : (0, z.jsx)(`div`, {
        className: Xe,
        children: (0, z.jsx)(Ye, {
          dashManifests: n || [],
          hlsManifest: (r.length > 0 && r?.[0]) || ``,
          screenshot: pt(t),
          altText: t.trailer_name,
          muteWhenAutoplayBlocked: !0,
          captionManifest: i,
        }),
      });
}
function qn(e) {
  let t = et(),
    n = ie(940),
    r = String(w(e.args, `autoadvance`)).toLowerCase() === `true`;
  return (0, z.jsx)(Qe, {
    hideArrows: !n,
    hidePips: t,
    visibleElements: 1,
    useTestScrollbar: !1,
    bLazyRenderChildren: !0,
    screenIsWide: n,
    bAutoAdvance: r,
    className: Ue,
    children: e.children,
  });
}
var Jn = `FQV2hlT8BYs-`;
function Yn(e) {
  let { strURL: t, children: n } = e;
  return (typeof t == `string` ? !M(t) : t.some((e) => !M(e)))
    ? (0, z.jsx)(Xn, { children: n })
    : (0, z.jsx)(z.Fragment, { children: n });
}
function Xn(e) {
  let { children: t } = e;
  return Fe()
    ? (0, z.jsx)(z.Fragment, { children: t })
    : (0, z.jsx)(`div`, {
        className: Jn,
        children: P(
          `#Image_Externally_Hosted_Hidden`,
          (0, z.jsx)(`a`, {
            href: F.STORE_BASE_URL + `account/cookiepreferences`,
          }),
        ),
      });
}
var Zn = null;
function Qn() {
  return (
    (Zn ??= new Map([
      [`url`, { Constructor: Bn, autocloses: !1 }],
      [`dynamiclink`, { Constructor: Vn, autocloses: !1 }],
      [
        `h1`,
        { Constructor: C(Pe, Ve), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [
        `h2`,
        { Constructor: C(Te, We), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [
        `h3`,
        { Constructor: C(Ne, Re), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [`quote`, { Constructor: C(le, Ke), autocloses: !1 }],
      [`list`, { Constructor: ce, autocloses: !1, skipInternalNewline: !0 }],
      [`olist`, { Constructor: xe, autocloses: !1, skipInternalNewline: !0 }],
      [`*`, { Constructor: Me, autocloses: !0, skipInternalNewline: !0 }],
      [`p`, { Constructor: ue, autocloses: !1, skipFollowingNewline: !0 }],
      [`img`, { Constructor: $n, autocloses: !1 }],
      [`previewyoutube`, { Constructor: _e, autocloses: !1 }],
      [`looping_media`, { Constructor: Se, autocloses: !1 }],
      [`video`, { Constructor: pe, autocloses: !1 }],
      [`youtubeorvideo`, { Constructor: De, autocloses: !1 }],
      [`trailer`, { Constructor: tr, autocloses: !1 }],
      [
        `speaker`,
        {
          Constructor: nr,
          autocloses: !1,
          skipInternalNewline: !0,
          allowWrapTextForCopying: !0,
        },
      ],
      [`docimg`, { Constructor: er, autocloses: !1 }],
      [`carousel`, { Constructor: qn, autocloses: !1 }],
    ])),
    Zn
  );
}
function $n(e) {
  let { showErrorInfo: t, event: n } = e.context,
    r = w(e.args, `src`) || e.children?.toString();
  ((r ||= w(e.args)), (r = ye(r ?? ``) || void 0));
  let i = w(e.args, `style`) === `inline`,
    a = p(r, e.language, n?.rtime32_last_modified);
  if (a == null) return null;
  if (typeof a == `string`) {
    r = a;
    let e;
    return (
      (e = !M(r)),
      n?.BHasTag(`auto_rssfeed`) && (e = !1),
      t
        ? (0, z.jsx)(re, {
            className: D({ [x]: i }),
            src: r,
            crossOrigin: e ? `anonymous` : void 0,
          })
        : ((r = L(r)),
          (0, z.jsx)(Yn, {
            strURL: r,
            children: (0, z.jsx)(v, {
              className: D({ [x]: i }),
              src: r,
              crossOrigin: e ? `anonymous` : void 0,
            }),
          }))
    );
  }
  return (0, z.jsx)(Yn, {
    strURL: a,
    children: (0, z.jsx)(g, { rgSources: a }),
  });
}
function er(e) {
  let t = w(e.args);
  if (t == null || t == null || t.length == 0) return ``;
  let n = e.children?.toString(),
    r = [];
  return (
    r.push(
      `${F.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${F.LANGUAGE}/${t}`,
    ),
    F.LANGUAGE != `english` &&
      r.push(`${F.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${t}`),
    (0, z.jsx)(g, { rgSources: r, alt: n })
  );
}
function tr(e) {
  let t = $(e.args, `appid`, e.context.event?.appid ?? 0),
    n = $(e.args, `trailerid`, 0),
    r = w(e.args, `style`)?.toLocaleLowerCase() ?? Q.k_TrailerAsFull;
  r = Object.values(Q).includes(r) ? r : Q.k_TrailerAsFull;
  let i = V(e.args.color, `black`),
    a = V(e.args.bgcolor, `white`),
    o = de(e.args);
  return (0, z.jsx)(Wn, {
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
function nr(e) {
  let t = w(e.args, `name`),
    n = w(e.args, `title`),
    r = w(e.args, `company`),
    i = w(e.args, `photo`);
  return e.context.bShowShortSpeakerInfo
    ? (0, z.jsx)(ke, {
        name: t,
        title: n,
        company: r,
        photo: i,
        bio: e.children,
      })
    : (0, z.jsx)(Ae, {
        name: t,
        title: n,
        company: r,
        photo: i,
        bio: e.children,
      });
}
function $(e, t, n) {
  let r = w(e, t);
  return r === void 0 || r == null ? n : Number.parseInt(r);
}
var rr = null;
function ir() {
  return (
    (rr ??= new Map([
      ...Array.from(Ce.entries()),
      ...Array.from(Qn().entries()),
    ])),
    rr
  );
}
var ar = R.createContext(null);
function or() {
  return R.useContext(ar) ?? ir();
}
function sr(e) {
  let t = or(),
    n = R.useMemo(
      () =>
        new Map([
          ...Array.from(t.entries()),
          ...Array.from(e.dictionary.entries()),
        ]),
      [t, e.dictionary],
    );
  return (0, z.jsx)(ar.Provider, { value: n, children: e.children });
}
function cr(e) {
  let {
      text: t,
      languageOverride: n,
      event: r,
      showErrorInfo: i,
      bShowShortSpeakerInfo: a,
    } = e,
    o = wn(),
    s = R.useCallback(
      (e) => new Tt(new wt(new St(new Oe(new je()), e, o, { event: r })), e),
      [r, o],
    ),
    c = or();
  return R.useMemo(() => new oe(c, s, n || F.LANGUAGE), [c, s, n]).ParseBBCode(
    t,
    { showErrorInfo: i, event: r, bShowShortSpeakerInfo: a, bbcode: t },
  );
}
async function lr(e, t) {
  let { rgDefIDs: n, strCategory: r, itemClass: i } = t,
    a = await $e.QueryRewardItems(e, {
      definitionids: n,
      community_item_classes: i ? [i] : void 0,
      filter_match_any_category_tags: r ? [r] : void 0,
    });
  if (!a.BSuccess())
    throw Error(`LoyaltyRewards.QueryRewardItems answered ` + a.GetEResult());
  return a.Body().toObject().definitions ?? [];
}
var ur;
function dr() {
  let e = nt();
  return e
    ? e.GetAnonymousServiceTransport()
    : ((ur ||= xt(new rt(F.WEBAPI_BASE_URL))),
      ur.GetAnonymousServiceTransport());
}
async function fr(e) {
  return lr(dr(), e);
}
var pr = 36e5;
function mr(e) {
  return [`LoyaltyRewardDef`, e];
}
function hr(e, t) {
  return [`LoyaltyRewardDefsByCategoryAndClass`, e, t];
}
function gr(e) {
  return {
    queryKey: mr(e),
    queryFn: async () => {
      let t = await fr({ rgDefIDs: [e] }),
        n = t.length == 1 ? t[0] : void 0;
      if (!n)
        throw Error(
          `Asked for point shop item ${e} and got ${t.length} items back, wanted exactly one.`,
        );
      return n;
    },
    enabled: e > 0,
    staleTime: pr,
    retry: !1,
  };
}
function _r(e, t) {
  return {
    queryKey: hr(e, t),
    queryFn: () => fr({ strCategory: e, itemClass: t }),
    enabled: !!(e && t),
    staleTime: pr,
    retry: !1,
  };
}
function vr(e) {
  let { data: t } = i(gr(e));
  return t;
}
function yr(e, t) {
  let r = n(),
    { data: a } = i(_r(e, t));
  return (
    (0, R.useEffect)(() => {
      a?.forEach((e) => {
        e.defid !== void 0 && r.setQueryData(mr(e.defid), e);
      });
    }, [a, r]),
    a
  );
}
export { Mt as a, B as c, $ as i, sr as n, At as o, cr as r, V as s, yr as t };
