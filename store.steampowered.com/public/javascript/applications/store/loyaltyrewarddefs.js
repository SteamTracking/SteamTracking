/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, dt as n, ft as r, st as i } from "./chunk~01cfc309bf.js";
import {
  Ms as a,
  Qn as o,
  Rn as s,
  Vs as c,
  er as l,
  j as u,
  qt as ee,
  zn as d,
} from "./chunk~6b8ddcaac8.js";
import { at as f, ct as p } from "./chunk~f57d770d64.js";
import { d as m, u as te } from "./chunk~8c66e1c7a5.js";
import { t as h } from "./chunk~f0141d9521.js";
import { n as ne, r as re } from "./chunk~673650a653.js";
import { o as g, r as _, t as ie } from "./chunk~5adf866415.js";
import { c as ae } from "./chunk~ffe4581a06.js";
import { t as oe } from "./chunk~f4c928a27a.js";
import { t as v } from "./chunk~eefd71512b.js";
import {
  $ as se,
  B as ce,
  C as le,
  D as ue,
  E as de,
  F as y,
  G as fe,
  I as pe,
  K as me,
  L as he,
  M as ge,
  N as _e,
  O as ve,
  P as ye,
  Q as be,
  R as xe,
  T as Se,
  W as Ce,
  Y as b,
  _ as we,
  a as Te,
  b as Ee,
  et as x,
  g as S,
  j as De,
  k as Oe,
  nt as ke,
  r as Ae,
  t as je,
  tt as Me,
  v as C,
  w as Ne,
  x as Pe,
  y as Fe,
  z as w,
} from "./chunk~a19d1add1e.js";
import { l as Ie } from "./chunk~6cf3fe3e07.js";
import {
  a as Le,
  h as Re,
  i as ze,
  l as Be,
  m as Ve,
  n as He,
  o as Ue,
  p as We,
  r as Ge,
  s as Ke,
  t as qe,
  u as Je,
} from "./chunk~618fb52a90.js";
import { r as Ye, t as T } from "./chunk~e70aabe4d7.js";
import { r as Xe } from "./chunk~38061b7abb.js";
import { m as Ze, n as Qe } from "./chunk~7dcf2f426f.js";
import { r as $e } from "./chunk~21cdc464a1.js";
import { h as et } from "./chunk~4e18b7e430.js";
import {
  $y as tt,
  Ay as nt,
  Bc as E,
  Cr as rt,
  Jl as it,
  Jy as D,
  Kc as O,
  Ny as at,
  Pv as k,
  Px as ot,
  TS as st,
  Tx as ct,
  Us as lt,
  Vc as A,
  Vr as ut,
  Vy as j,
  Wb as dt,
  Yl as ft,
  Yv as pt,
  Yy as M,
  Zl as mt,
  ac as ht,
  es as gt,
  eu as _t,
  oc as N,
  ol as vt,
  qb as P,
  ru as yt,
  sb as bt,
  uv as xt,
  vu as St,
  wc as F,
  yS as I,
} from "./main.js";
var L = e(t(), 1),
  R = r();
function z(e) {
  return (0, R.jsxs)(`a`, {
    href: e.strURL,
    className: y.Box,
    "data-modal-content-sizetofit": !!e.bSizeToFit,
    "data-appid": e.appid,
    "data-publishedfileid": e.publishedfileid,
    children: [
      (0, R.jsx)(ce, { strURL: e.strPreviewURL }),
      (0, R.jsxs)(pe, {
        children: [
          (0, R.jsx)(w, { children: e.strTitle }),
          (0, R.jsx)(`div`, {
            children: (0, R.jsx)(`span`, {
              className: y.Type,
              children: e.strType,
            }),
          }),
          e.author && (0, R.jsx)(_e, { children: e.author }),
          (0, R.jsx)(xe, { children: e.strDescription }),
        ],
      }),
    ],
  });
}
var Ct = class extends x {
    m_LinkFilter = ct;
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
  wt = `[ː:]([a-zA-Z0-9_]+)[ː:]`,
  Tt = class extends x {
    m_EmoteRegex = new RegExp(wt);
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
          (super.AppendNode(L.createElement(Te, { emoticon: r }, [])),
            (n = e.input.substring(e.index + r.length + 2)),
            (e = this.m_EmoteRegex.exec(n)));
        }
      }
      n.length > 0 && super.AppendText(n, t);
    }
  },
  Et = class extends x {
    m_parentNode = void 0;
    constructor(e, t) {
      (super(e), (this.m_parentNode = t));
    }
    AppendText(e, t = !1) {
      let n = e;
      (this.m_parentNode &&
        this.m_parentNode.tag == `img` &&
        !Dt(n) &&
        (n = O(n)),
        super.AppendText(n, t));
    }
  };
function Dt(e) {
  let t = e.trim();
  return (
    t.startsWith(`{STEAM_CLAN_IMAGE}`) || t.startsWith(`{STEAM_CLAN_LOC_IMAGE}`)
  );
}
var Ot =
  /^(#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-z-]+\([^;{}]*\)|[a-z]+)$/i;
function kt(e) {
  return e ? Ot.test(e.trim()) : !1;
}
function B(e, t) {
  return kt(e) ? e : t;
}
var V = `NiXfRuagfO4-`;
function At(e) {
  let { inputType: t, id: n, bApplyUserContentPref: r } = e,
    i = t == `bundle` ? `bundle` : t == `sub` ? `sub` : `game`,
    a = o(n, i),
    { data: s } = k(a),
    { data: c, isPending: l } = pt(r ? a : void 0);
  if (!s) return null;
  if (r) {
    if (l) return null;
    if (c?.filter_failure == 40 || c?.filter_failure == 50) {
      let e = `#StoreCapsule_App_Excluded`;
      switch (t) {
        case `sub`:
          e = `#StoreCapsule_Package_Excluded`;
          break;
        case `bundle`:
          e = `#StoreCapsule_Bundle_Excluded`;
      }
      return (0, R.jsx)(`div`, {
        className: F(V, `AppSummaryWidgetCtn`),
        children: M(
          e,
          (0, R.jsx)(`a`, { href: P.STORE_BASE_URL + `account/preferences/` }),
        ),
      });
    }
  }
  return (0, R.jsx)(`div`, {
    className: F(V, `AppSummaryWidgetCtn`),
    children: (0, R.jsx)(oe, {
      id: n,
      type: i,
      bShowDemoButton: s.type == 1,
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
    c = xt();
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
        let o = await e.ensureQueryData(T(e, t, n, r, i, a));
        if ((o && s.push(o), a != f.full)) {
          let a = await e.ensureQueryData(T(e, t, n, r, i, f.full));
          a && s.push(a);
        }
      }
      if (!o && s.length == 0) {
        let r = await e.ensureQueryData(Ye(e, t, n));
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
    o = a === null,
    {
      data: l,
      isPending: u,
      isError: d,
    } = ee(
      o
        ? void 0
        : {
            clanAccountID: a ?? void 0,
            appid: t,
            eventGID: r,
            announcementGID: n,
          },
    ),
    f = c(t || l?.appid || void 0),
    { data: p } = k(f);
  if (o || d || l === null) return s(i);
  if (u || !l) return (0, R.jsx)(v, {});
  let m = I(P.LANGUAGE),
    te = l.GetNameWithFallback(m),
    h = l.GetSubTitleWithSummaryFallback(m),
    g = p?.name,
    _ = bt(l.GetStartTimeAndDateUnixSeconds());
  return (0, R.jsxs)(re, {
    eventModel: l,
    route: ne.k_eView,
    className: y.Box,
    "data-modal-content-sizetofit": !0,
    "data-appid": t,
    children: [
      (0, R.jsx)(Lt, { ...e, event: l }),
      (0, R.jsxs)(pe, {
        children: [
          (0, R.jsxs)(_e, {
            children: [
              D(
                l.type == 28
                  ? `#EventDisplay_Share_Announcement`
                  : `#EventDisplay_Share_Event`,
                g ?? ``,
              ),
              (0, R.jsx)(he, { children: _ }),
            ],
          }),
          (0, R.jsx)(w, {
            children: (0, R.jsx)(`div`, { className: y.Type, children: te }),
          }),
          (0, R.jsx)(xe, { children: h }),
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
    i = Mt(t, `capsule`, I(P.LANGUAGE), f.capsule_main) ?? [];
  return (
    i && n && (i = n(i)),
    (0, R.jsx)(h, {
      className: y.Preview,
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
    n = A(P.STORE_BASE_URL).toLocaleLowerCase(),
    r = A(P.COMMUNITY_BASE_URL).toLocaleLowerCase();
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
  if (r > 0 && yt(n))
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
    { data: r, isLoading: i } = te(n),
    { data: o, isLoading: s } = a(n);
  if (!t) return null;
  if (!(i || s)) return !o || !r || !u(e, r) ? null : (o.appids ?? []);
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
        : j.InitFromClanID(e.clanAccountID, P.EUNIVERSE)
      : new j(e.strClanSteamID64);
  return (0, R.jsx)(It, {
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
      return (0, R.jsx)(qt, {
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
    { data: n } = ge(t),
    r = P.COMMUNITY_BASE_URL + `sharedfiles/filedetails/?id=`,
    i = n ?? {
      sharedfileid: t,
      title: D(`#Loading`),
      description: ``,
      type: ``,
      previewurl: ``,
      appid: 0,
      url: r + t,
    },
    a = ot(i.url) ? r + i.url : i.url,
    o = i.personnaname !== void 0 && i.personnaname.length > 0;
  return (0, R.jsx)(z, {
    strURL: a,
    strTitle: i.title,
    strPreviewURL: i.previewurl,
    strType: i.type,
    strDescription: i.description,
    author:
      o &&
      tt(`#EventEditor_Author`, (0, R.jsx)(ye, { children: i.personnaname })),
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
    [n, r] = L.useState(!0),
    { data: i } = dn(t);
  if (n) {
    let e = () => r(!1);
    return (0, R.jsxs)(`div`, {
      className: nn,
      role: `button`,
      tabIndex: 0,
      onClick: e,
      onKeyDown: (t) => {
        (t.key === `Enter` || t.key === ` `) && (t.preventDefault(), e());
      },
      children: [
        i?.thumbnail_url &&
          (0, R.jsx)(`img`, {
            className: `FFbDls5-Ssk-`,
            src: i.thumbnail_url,
            alt: i.title,
          }),
        (0, R.jsx)(`img`, { className: en, alt: `` }),
        (0, R.jsxs)(`div`, {
          className: rn,
          children: [
            (0, R.jsxs)(`div`, {
              className: an,
              children: [
                (0, R.jsx)(`span`, {
                  className: on,
                  children: D(`#EventDisplay_Sketchfab`),
                }),
                i?.title && (0, R.jsxs)(`div`, { children: [i.title, `\xA0`] }),
              ],
            }),
            i?.author_name &&
              (0, R.jsx)(`div`, {
                className: `-r4s23p52-0-`,
                children: i.author_name,
              }),
          ],
        }),
      ],
    });
  }
  return (0, R.jsx)(`div`, {
    className: tn,
    children: (0, R.jsx)(`iframe`, {
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
    a = `${P.MEDIA_CDN_COMMUNITY_URL}images/items/${r}/${i}`;
  return (0, R.jsx)(`div`, {
    className: gn,
    children: (0, R.jsx)(ut, {
      toolTipContent: n.community_item_data.item_description,
      children: (0, R.jsx)(`img`, {
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
  return P.EREALM === st.k_ESteamRealmChina;
}
var Cn = new Map();
function wn() {
  let e = P.EREALM,
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
              fnBBComponent: De,
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
  return L.useMemo(() => Tn(e), [e]);
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
      return (0, R.jsx)(`iframe`, {
        className: Je,
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
    if (e && e.length > 1) return (0, R.jsx)(fn, { modelID: e });
  }
  return s(e, t?.event);
}
function kn(e, t) {
  let n = Qt(e);
  return n === void 0 ? s(e, t?.event) : (0, R.jsx)($t, { sharedFileID: n });
}
function An(e, t) {
  let n = Vt(e);
  return n
    ? (0, R.jsx)(jn, {
        eventModel: t?.event,
        inputID: n.id,
        inputType: n.strItemType,
        fallbackUrl: e,
      })
    : s(e, t?.event);
}
function jn(e) {
  let { inputID: t, inputType: n, eventModel: r, fallbackUrl: i } = e,
    a = l(t, n),
    { data: o } = k(a),
    c = Wt(r),
    u;
  return (
    c === null
      ? (u = !0)
      : c && o && (u = Gt(c, o.appid ? [o.appid] : (o.included_appids ?? []))),
    u === void 0
      ? null
      : u
        ? (0, R.jsx)(At, { id: t, inputType: n, bApplyUserContentPref: !0 })
        : s(i, r)
  );
}
function Mn(e, t) {
  let n = hn(e);
  return n
    ? (0, R.jsx)(`div`, {
        className: F(Be),
        children: (0, R.jsx)(_n, { defid: n, url: e }),
      })
    : s(e, t?.event);
}
function Nn(e, t) {
  return X() ? null : Z(e, (0, R.jsx)(N, {}), `@`, t);
}
function Pn(e, t) {
  return X() ? null : Z(e, (0, R.jsx)(N, {}), `#`, t);
}
function Fn(e, t) {
  return X() ? null : Z(e, (0, R.jsx)(ht, {}), void 0, t);
}
function In(e, t) {
  return Z(e, (0, R.jsx)(lt, {}), void 0, t);
}
function Z(e, t, n, r) {
  let i,
    a = e.endsWith(`/`) ? e.length - 1 : e.length,
    o = e.lastIndexOf(`/`, a - 1);
  (o != -1 && o + 1 < e.length && (i = e.substring(o + 1, a)),
    n && i && (i = n + i));
  let c = s(e, r?.event, i ?? e);
  return (0, R.jsxs)(`div`, {
    className: Re,
    children: [(0, R.jsx)(`div`, { className: Ve, children: t }), c],
  });
}
function Ln(e) {
  switch (e) {
    case `button`:
      return F(Ue, `LinkButton`);
    case `pill`:
      return F(Ke, `LinkPill`);
    default:
      return F(Le, `Link`);
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
  let t = be(C(e.args) || C(e.args, `href`)),
    n = C(e.args, `style`),
    r = C(e.args, `id`),
    i = B(C(e.args, `buttoncolor`) || C(e.args, `bgcolor`), void 0),
    a = B(C(e.args, `labelcolor`) || C(e.args, `color`), void 0),
    o = Ln(n),
    s = e.context.event,
    c = p(t, e.language, s?.rtime32_last_modified),
    l = En(zn(e.children, t) ? `` : (t ?? ``));
  if (l && t) return l.fnBBComponent(t, { event: e.context.event });
  if (c === void 0 || c == null) return e.children || ``;
  t = typeof c == `string` ? c : c[1];
  let u = Rn(n, i, a);
  return typeof t == `string` && t.length > 0 && t[0] == `#`
    ? (0, R.jsx)(vt, { className: o, href: t, style: u, children: e.children })
    : t == `steam://settings/account`
      ? (0, R.jsx)(rt, {
          className: o,
          href: `steam://settings/account`,
          children: e.children,
        })
      : (0, R.jsx)(d, {
          className: o,
          url: t,
          event: e.context.event,
          id: r,
          style: u,
          children: e.children,
        });
}
function Vn(e) {
  let t = C(e.args, `href`),
    n = En(t);
  return n
    ? n.fnBBComponent(t, { event: e.context.event })
    : (0, R.jsx)(Bn, { ...e });
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
    [c, l] = (0, L.useState)(!1),
    u = (0, L.useMemo)(() => ({ appid: n }), [n]);
  switch (t) {
    case `button`:
    case `pill`:
      return (0, R.jsxs)(R.Fragment, {
        children: [
          (0, R.jsxs)(`button`, {
            type: `button`,
            className: F({ [Hn]: t == `pill`, [Un]: t == `button` }),
            onClick: () => l(!0),
            style: { color: r, backgroundColor: i },
            children: [(0, R.jsx)(gt, {}), a || D(`#EventEmail_WatchNow`)],
          }),
          (0, R.jsx)(Qe, {
            id: u,
            bShowModal: c,
            trailerBaseID: o,
            hideModal: () => l(!1),
          }),
        ],
      });
    default:
    case `full`:
      return (0, R.jsx)(Gn, { ...e });
  }
}
function Gn(e) {
  let { appid: t, trailerBaseID: n } = e,
    r = c(t),
    { data: i } = k(r),
    [a, o] = (0, L.useState)(() =>
      !t || !n ? D(`#TrailerPlayer_ID_NotProvided`) : null,
    ),
    s = _t(r),
    l = (0, L.useMemo)(
      () => (s ? s.find((e) => e.trailer_base_id === n) : null),
      [s, n],
    );
  return (
    (0, L.useEffect)(() => {
      (i?.unvailable_for_country_restriction &&
        o(D(`#TrailerPlayer_CouldNotLoad`, t, n)),
        s &&
          !l &&
          o(D(`#TrailerPlayer_CouldNotLoad`, e.appid, e.trailerBaseID)));
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
        ? (0, R.jsx)(`div`, { className: g, children: a })
        : null
      : l
        ? (0, R.jsx)(Kn, { trailerToPlay: l })
        : (0, R.jsx)(v, { string: D(`#Loading`), size: `small` })
  );
}
function Kn(e) {
  let { trailerToPlay: t } = e,
    {
      rgDashTrailers: n,
      rgHlsTrailers: r,
      strCaptionManufest: i,
    } = (0, L.useMemo)(() => {
      let { rgDashTrailers: e, rgHlsTrailers: n } = mt(t);
      return { rgDashTrailers: e, rgHlsTrailers: n, strCaptionManufest: it(t) };
    }, [t]);
  return n?.length == 0
    ? null
    : (0, R.jsx)(`div`, {
        className: Ze,
        children: (0, R.jsx)(Xe, {
          dashManifests: n || [],
          hlsManifest: (r.length > 0 && r?.[0]) || ``,
          screenshot: ft(t),
          altText: t.trailer_name,
          muteWhenAutoplayBlocked: !0,
          captionManifest: i,
        }),
      });
}
function qn(e) {
  let t = dt(),
    n = ae(940),
    r = String(C(e.args, `autoadvance`)).toLowerCase() === `true`;
  return (0, R.jsx)($e, {
    hideArrows: !n,
    hidePips: t,
    visibleElements: 1,
    useTestScrollbar: !1,
    bLazyRenderChildren: !0,
    screenIsWide: n,
    bAutoAdvance: r,
    className: We,
    children: e.children,
  });
}
var Jn = `FQV2hlT8BYs-`;
function Yn(e) {
  let { strURL: t, children: n } = e;
  return (typeof t == `string` ? !E(t) : t.some((e) => !E(e)))
    ? (0, R.jsx)(Xn, { children: n })
    : (0, R.jsx)(R.Fragment, { children: n });
}
function Xn(e) {
  let { children: t } = e;
  return Ie()
    ? (0, R.jsx)(R.Fragment, { children: t })
    : (0, R.jsx)(`div`, {
        className: Jn,
        children: M(
          `#Image_Externally_Hosted_Hidden`,
          (0, R.jsx)(`a`, {
            href: P.STORE_BASE_URL + `account/cookiepreferences`,
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
        { Constructor: S(Fe, He), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [
        `h2`,
        { Constructor: S(Ee, Ge), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [
        `h3`,
        { Constructor: S(Pe, ze), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [`quote`, { Constructor: S(ue, qe), autocloses: !1 }],
      [`list`, { Constructor: le, autocloses: !1, skipInternalNewline: !0 }],
      [`olist`, { Constructor: Se, autocloses: !1, skipInternalNewline: !0 }],
      [`*`, { Constructor: Ne, autocloses: !0, skipInternalNewline: !0 }],
      [`p`, { Constructor: de, autocloses: !1, skipFollowingNewline: !0 }],
      [`img`, { Constructor: $n, autocloses: !1 }],
      [`previewyoutube`, { Constructor: ve, autocloses: !1 }],
      [`looping_media`, { Constructor: Ce, autocloses: !1 }],
      [`video`, { Constructor: me, autocloses: !1 }],
      [`youtubeorvideo`, { Constructor: Oe, autocloses: !1 }],
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
    r = C(e.args, `src`) || e.children?.toString();
  ((r ||= C(e.args)), (r = be(r ?? ``) || void 0));
  let i = C(e.args, `style`) === `inline`,
    a = p(r, e.language, n?.rtime32_last_modified);
  if (a == null) return null;
  if (typeof a == `string`) {
    r = a;
    let e;
    return (
      (e = !E(r)),
      n?.BHasTag(`auto_rssfeed`) && (e = !1),
      t
        ? (0, R.jsx)(ie, {
            className: F({ [b]: i }),
            src: r,
            crossOrigin: e ? `anonymous` : void 0,
          })
        : ((r = O(r)),
          (0, R.jsx)(Yn, {
            strURL: r,
            children: (0, R.jsx)(_, {
              className: F({ [b]: i }),
              src: r,
              crossOrigin: e ? `anonymous` : void 0,
            }),
          }))
    );
  }
  return (0, R.jsx)(Yn, {
    strURL: a,
    children: (0, R.jsx)(h, { rgSources: a }),
  });
}
function er(e) {
  let t = C(e.args);
  if (t == null || t == null || t.length == 0) return ``;
  let n = e.children?.toString(),
    r = [];
  return (
    r.push(
      `${P.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${P.LANGUAGE}/${t}`,
    ),
    P.LANGUAGE != `english` &&
      r.push(`${P.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${t}`),
    (0, R.jsx)(h, { rgSources: r, alt: n })
  );
}
function tr(e) {
  let t = $(e.args, `appid`, e.context.event?.appid ?? 0),
    n = $(e.args, `trailerid`, 0),
    r = C(e.args, `style`)?.toLocaleLowerCase() ?? Q.k_TrailerAsFull;
  r = Object.values(Q).includes(r) ? r : Q.k_TrailerAsFull;
  let i = B(e.args.color, `black`),
    a = B(e.args.bgcolor, `white`),
    o = fe(e.args);
  return (0, R.jsx)(Wn, {
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
  let t = C(e.args, `name`),
    n = C(e.args, `title`),
    r = C(e.args, `company`),
    i = C(e.args, `photo`);
  return e.context.bShowShortSpeakerInfo
    ? (0, R.jsx)(Ae, {
        name: t,
        title: n,
        company: r,
        photo: i,
        bio: e.children,
      })
    : (0, R.jsx)(je, {
        name: t,
        title: n,
        company: r,
        photo: i,
        bio: e.children,
      });
}
function $(e, t, n) {
  let r = C(e, t);
  return r === void 0 || r == null ? n : Number.parseInt(r);
}
var rr = null;
function ir() {
  return (
    (rr ??= new Map([
      ...Array.from(we.entries()),
      ...Array.from(Qn().entries()),
    ])),
    rr
  );
}
var ar = L.createContext(null);
function or() {
  return L.useContext(ar) ?? ir();
}
function sr(e) {
  let t = or(),
    n = L.useMemo(
      () =>
        new Map([
          ...Array.from(t.entries()),
          ...Array.from(e.dictionary.entries()),
        ]),
      [t, e.dictionary],
    );
  return (0, R.jsx)(ar.Provider, { value: n, children: e.children });
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
    s = L.useCallback(
      (e) => new Et(new Tt(new Ct(new ke(new Me()), e, o, { event: r })), e),
      [r, o],
    ),
    c = or();
  return L.useMemo(() => new se(c, s, n || P.LANGUAGE), [c, s, n]).ParseBBCode(
    t,
    { showErrorInfo: i, event: r, bShowShortSpeakerInfo: a, bbcode: t },
  );
}
async function lr(e, t) {
  let { rgDefIDs: n, strCategory: r, itemClass: i } = t,
    a = await et.QueryRewardItems(e, {
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
  let e = St();
  return e
    ? e.GetAnonymousServiceTransport()
    : ((ur ||= nt(new at(P.WEBAPI_BASE_URL))),
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
    (0, L.useEffect)(() => {
      a?.forEach((e) => {
        e.defid !== void 0 && r.setQueryData(mr(e.defid), e);
      });
    }, [a, r]),
    a
  );
}
export { Mt as a, z as c, $ as i, sr as n, At as o, cr as r, B as s, yr as t };
