/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, dt as n, ft as r, st as i } from "./libraries.js";
import { i as a, t as o } from "./clanimagemodels.js";
import { V as s } from "./storelink.js";
import { Er as c } from "./saletags.js";
import { d as l, u } from "./claninfo.js";
import { t as d } from "./multisourceimage.js";
import { n as ee, r as te } from "./eventlink.js";
import { o as ne, r as f, t as re } from "./image.js";
import { d as ie, p } from "./salestoreitemutils.js";
import { t as m } from "./salepreviewwidgets.js";
import { t as h } from "./throbber.js";
import { n as ae, t as g } from "./linkfilter.js";
import {
  A as oe,
  B as _,
  C as se,
  E as ce,
  F as v,
  H as le,
  M as ue,
  R as y,
  S as b,
  T as de,
  V as fe,
  _ as pe,
  a as me,
  b as he,
  d as ge,
  f as _e,
  h as ve,
  i as x,
  j as ye,
  l as be,
  m as xe,
  n as S,
  o as Se,
  p as Ce,
  r as we,
  s as Te,
  u as Ee,
  v as De,
  w as Oe,
  x as C,
  y as w,
  z as ke,
} from "./basicbbcodeparser.js";
import { r as Ae, u as je } from "./carouselarrows.js";
import { l as Me } from "./youtubeplayer.js";
import {
  a as Ne,
  h as Pe,
  i as Fe,
  l as Ie,
  m as Le,
  n as Re,
  o as ze,
  p as Be,
  r as Ve,
  s as He,
  t as Ue,
  u as We,
} from "./eventbbcodeparser.module.js";
import { i as Ge, r as Ke, t as qe } from "./presenterpopup.js";
import { r as Je, t as Ye } from "./eventimageurlwithfallback.js";
import { r as Xe, t as Ze } from "./creatorhomegamelock.js";
import { r as Qe } from "./trailertitlebar.js";
import { m as $e, n as et } from "./salehilightplayerembed.js";
import { h as tt } from "./steammessages_loyalty_rewards_pb.js";
import {
  $l as nt,
  Gl as rt,
  Hb as T,
  Iy as E,
  Jy as it,
  Oy as at,
  Qo as ot,
  Rc as D,
  Rr as st,
  Sc as O,
  Ty as ct,
  Uy as k,
  Vs as lt,
  Wc as A,
  Wl as ut,
  Wv as dt,
  Wy as ft,
  Xl as pt,
  av as mt,
  bS as ht,
  br as gt,
  bx as _t,
  ic as vt,
  kv as j,
  kx as yt,
  mS as bt,
  mu as xt,
  nb as St,
  nl as Ct,
  ql as wt,
  qx as Tt,
  rc as Et,
  zb as Dt,
  zc as M,
} from "./main.js";
var N = e(t(), 1),
  P = r();
function F(e) {
  return (0, P.jsxs)(`a`, {
    href: e.strURL,
    className: C.Box,
    "data-modal-content-sizetofit": !!e.bSizeToFit,
    "data-appid": e.appid,
    "data-publishedfileid": e.publishedfileid,
    children: [
      (0, P.jsx)(ce, { strURL: e.strPreviewURL }),
      (0, P.jsxs)(b, {
        children: [
          (0, P.jsx)(de, { children: e.strTitle }),
          (0, P.jsx)(`div`, {
            children: (0, P.jsx)(`span`, {
              className: C.Type,
              children: e.strType,
            }),
          }),
          e.author && (0, P.jsx)(w, { children: e.author }),
          (0, P.jsx)(Oe, { children: e.strDescription }),
        ],
      }),
    ],
  });
}
var Ot = class extends _ {
    m_LinkFilter = _t;
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
          (i || super.AppendNode(g(r)),
            (n = e.input.substring(e.index + r.length)),
            (e = this.m_LinkFilter.exec(n)));
        }
      }
      n.length > 0 && super.AppendText(n, t);
    }
  },
  kt = `[ː:]([a-zA-Z0-9_]+)[ː:]`,
  At = class extends _ {
    m_EmoteRegex = new RegExp(kt);
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
          (super.AppendNode(N.createElement(Ge, { emoticon: r }, [])),
            (n = e.input.substring(e.index + r.length + 2)),
            (e = this.m_EmoteRegex.exec(n)));
        }
      }
      n.length > 0 && super.AppendText(n, t);
    }
  },
  jt = class extends _ {
    m_parentNode = void 0;
    constructor(e, t) {
      (super(e), (this.m_parentNode = t));
    }
    AppendText(e, t = !1) {
      let n = e;
      (this.m_parentNode &&
        this.m_parentNode.tag == `img` &&
        !Mt(n) &&
        (n = A(n)),
        super.AppendText(n, t));
    }
  };
function Mt(e) {
  let t = e.trim();
  return (
    t.startsWith(`{STEAM_CLAN_IMAGE}`) || t.startsWith(`{STEAM_CLAN_LOC_IMAGE}`)
  );
}
var Nt =
  /^(#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-z-]+\([^;{}]*\)|[a-z]+)$/i;
function Pt(e) {
  return e ? Nt.test(e.trim()) : !1;
}
function I(e, t) {
  return Pt(e) ? e : t;
}
var L = `NiXfRuagfO4-`;
function R(e) {
  let { inputType: t, id: n, bApplyUserContentPref: r } = e,
    i = t == `bundle` ? `bundle` : t == `sub` ? `sub` : `game`,
    a = ie(n, i),
    { data: o } = j(a),
    { data: s, isPending: c } = dt(r ? a : void 0);
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
      return (0, P.jsx)(`div`, {
        className: O(L, `AppSummaryWidgetCtn`),
        children: ft(
          e,
          (0, P.jsx)(`a`, { href: T.STORE_BASE_URL + `account/preferences/` }),
        ),
      });
    }
  }
  return (0, P.jsx)(`div`, {
    className: O(L, `AppSummaryWidgetCtn`),
    children: (0, P.jsx)(m, {
      id: n,
      type: i,
      bShowDemoButton: o.type == 1,
      bAllowTwoLinesForHeader: !0,
      bPreferAssetWithoutOverride: !1,
    }),
  });
}
var z =
    /(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
  B =
    /(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i,
  V =
    /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i;
function Ft(e, t) {
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
function H(e, t, r, a, o) {
  let s = n(),
    c = mt();
  return i(Lt(s, c, e, t, r, a, o)).data ?? void 0;
}
function It(e, t, n, r, i) {
  return [`useEventImageForSizeAsArrayWithFallback`, e?.GID, t, n, r, i];
}
function Lt(e, t, n, r, i, a, s) {
  return {
    queryKey: It(n, r, i, a, s),
    enabled: n && !!n.GID,
    queryFn: async () => {
      if (!n) return null;
      let c = [];
      if (!n.BImageNeedScreenshotFallback(r, i)) {
        let s = await e.ensureQueryData(Ye(e, t, n, r, i, a));
        if ((s && c.push(s), a != o.full)) {
          let a = await e.ensureQueryData(Ye(e, t, n, r, i, o.full));
          a && c.push(a);
        }
      }
      if (!s)
        try {
          let r = await e.ensureQueryData(Je(e, t, n));
          r && c.push(r);
        } catch (e) {
          if (
            (Tt(
              !1,
              `Failed to get fallback art/screenshot for event ${n?.GID} from clan ${n?.clanSteamID.GetAccountID()}`,
            ),
            c.length == 0)
          )
            throw e;
        }
      return c;
    },
  };
}
function Rt({ clanSteamID: e, strVanity: t, strGroupVanity: n }) {
  let r = t !== void 0 || n !== void 0,
    { data: i, isPending: a } = l(
      r ? (t ?? n ?? ``) : ``,
      t === void 0 ? `group` : `store`,
    );
  if (!r) return e?.GetAccountID();
  if (!a) return i?.clanAccountID ?? null;
}
function zt(e) {
  let { appid: t, announcementGID: n, eventGID: r, strURL: i } = e,
    a = Rt(e),
    o = a === null,
    {
      data: c,
      isPending: l,
      isError: u,
    } = Xe(
      o
        ? void 0
        : {
            clanAccountID: a ?? void 0,
            appid: t,
            eventGID: r,
            announcementGID: n,
          },
    ),
    d = s(t || c?.appid || void 0),
    { data: ne } = j(d);
  if (o || u || c === null) return g(i);
  if (l || !c) return (0, P.jsx)(h, {});
  let f = bt(T.LANGUAGE),
    re = c.GetNameWithFallback(f),
    ie = c.GetSubTitleWithSummaryFallback(f),
    p = ne?.name,
    m = St(c.GetStartTimeAndDateUnixSeconds());
  return (0, P.jsxs)(te, {
    eventModel: c,
    route: ee.k_eView,
    className: C.Box,
    "data-modal-content-sizetofit": !0,
    "data-appid": t,
    children: [
      (0, P.jsx)(Bt, { ...e, event: c }),
      (0, P.jsxs)(b, {
        children: [
          (0, P.jsxs)(w, {
            children: [
              k(
                c.type == 28
                  ? `#EventDisplay_Share_Announcement`
                  : `#EventDisplay_Share_Event`,
                p ?? ``,
              ),
              (0, P.jsx)(se, { children: m }),
            ],
          }),
          (0, P.jsx)(de, {
            children: (0, P.jsx)(`div`, { className: C.Type, children: re }),
          }),
          (0, P.jsx)(Oe, { children: ie }),
        ],
      }),
    ],
  });
}
function Bt(e) {
  let {
      event: t,
      fnFilterImageURLsForKnownFailures: n,
      fnImageFailureCallback: r,
    } = e,
    i = H(t, `capsule`, bt(T.LANGUAGE), o.capsule_main) ?? [];
  return (
    i && n && (i = n(i)),
    (0, P.jsx)(d, {
      className: C.Preview,
      rgSources: i ?? [],
      onIncrementalError: (e, t, n) => r && r(t),
    })
  );
}
var U =
    /(?:steampowered\.com|store\.steamchina\.com|store[\w-]*\.(?:[\w.-]+\.)?(?:steam\.dev|valve\.org)|valve\.org\/store)\/(app|bundle|sub)\/(\d+)/i,
  Vt = [`store.steampowered.com`, `store.steamchina.com`],
  W = [`steampowered.com`, `steamcommunity.com`],
  G = [`steamchina.com`],
  Ht = [`steam.dev`, `valve.org`];
function K(e, t) {
  return t.some((t) => e == t || e.endsWith(`.${t}`));
}
function q(e) {
  let t = M(e).toLocaleLowerCase(),
    n = M(T.STORE_BASE_URL).toLocaleLowerCase(),
    r = M(T.COMMUNITY_BASE_URL).toLocaleLowerCase();
  return t == n || t == r
    ? !0
    : Vt.includes(n)
      ? K(t, K(n, G) ? G : W)
      : K(t, [...W, ...G, ...Ht]);
}
function Ut(e) {
  if (q(e)) return Wt(e);
}
function Wt(e) {
  let t = new RegExp(U).exec(e);
  if (!t || t.length <= 2) return;
  let n = t[1].toLowerCase(),
    r = Number(t[2]);
  if (r > 0 && nt(n))
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
function Gt(e) {
  return !!e && (e.GetEventType() == 36 || e.GetEventType() == 20);
}
function Kt(e) {
  let t = Gt(e),
    n = t ? e.clanSteamID.GetAccountID() : void 0,
    { data: r, isLoading: i } = u(n),
    { data: a, isLoading: o } = c(n);
  if (!t) return null;
  if (!(i || o)) return !a || !r || !Ze(e, r) ? null : (a.appids ?? []);
}
function qt(e, t) {
  return e === null || (t.length > 0 && t.every((t) => e.includes(t)));
}
function Jt(e, t) {
  let n = Kt(t);
  if (e.appid === void 0) return !0;
  if (!(e.appid > 0)) return !1;
  if (n !== void 0) return qt(n, [e.appid]);
}
function Yt({ link: e, strURL: t, eventModel: n, bAnnouncement: r }) {
  let i = Jt(e, n);
  if (i === void 0) return null;
  if (!i) return g(t, n);
  let a =
    e.strClanSteamID64 === void 0
      ? e.clanAccountID === void 0
        ? void 0
        : E.InitFromClanID(e.clanAccountID, T.EUNIVERSE)
      : new E(e.strClanSteamID64);
  return (0, P.jsx)(zt, {
    appid: e.appid,
    clanSteamID: a,
    strVanity: e.strOGGVanity,
    strGroupVanity: e.strGroupVanity,
    eventGID: r ? void 0 : e.eventGID,
    announcementGID: r ? e.eventGID : void 0,
    strURL: t,
  });
}
function J(e, t, n, r = !1) {
  if (q(t)) {
    let i = Ft(e, t);
    if (i)
      return (0, P.jsx)(Yt, {
        link: i,
        strURL: t,
        eventModel: n?.event,
        bAnnouncement: r,
      });
  }
  return g(t, n?.event);
}
function Xt(e, t) {
  return J(B, e, t);
}
function Zt(e, t) {
  return J(z, e, t);
}
function Qt(e, t) {
  return J(V, e, t, !0);
}
var $t = /community.+sharedfiles\/filedetails\/\?id=\d+/i;
function en(e) {
  if (!$t.test(e)) return;
  let t = e.split(`?`);
  if (t.length == 2) return new URLSearchParams(t[1]).get(`id`) ?? void 0;
}
function tn(e) {
  let { sharedFileID: t } = e,
    { data: n } = De(t),
    r = T.COMMUNITY_BASE_URL + `sharedfiles/filedetails/?id=`,
    i = n ?? {
      sharedfileid: t,
      title: k(`#Loading`),
      description: ``,
      type: ``,
      previewurl: ``,
      appid: 0,
      url: r + t,
    },
    a = yt(i.url) ? r + i.url : i.url,
    o = i.personnaname !== void 0 && i.personnaname.length > 0;
  return (0, P.jsx)(F, {
    strURL: a,
    strTitle: i.title,
    strPreviewURL: i.previewurl,
    strType: i.type,
    strDescription: i.description,
    author:
      o &&
      it(`#EventEditor_Author`, (0, P.jsx)(he, { children: i.personnaname })),
    publishedfileid: t,
    appid: i.appid,
    bSizeToFit: i.bSizeToFit,
  });
}
var nn = `x-q4pa21GtQ-`,
  rn = `jjfjy77nkEg-`,
  an = `xk1sG-uqpwY-`,
  on = `XZqUhfrxufg-`,
  sn = `h4V9nI3kyqU-`,
  cn = `gCqj4CIOecY-`,
  ln = /sketchfab\.com\/(?:models\/(?:[^/\s]+-)?)([a-z0-9]{32})/i;
function un(e) {
  return [`sketchfab_oembed`, e];
}
function dn(e) {
  return `https://sketchfab.com/oembed?url=https://sketchfab.com/models/${encodeURIComponent(e)}`;
}
function fn(e) {
  return {
    queryKey: un(e),
    queryFn: async () => {
      let t = await fetch(dn(e));
      if (t.status === 404) return null;
      if (!t.ok) throw Error(`sketchfab oembed returned ${t.status}`);
      return await t.json();
    },
    enabled: !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function pn(e) {
  return i(fn(e));
}
function mn(e) {
  let { modelID: t } = e,
    [n, r] = N.useState(!0),
    { data: i } = pn(t);
  if (n) {
    let e = () => r(!1);
    return (0, P.jsxs)(`div`, {
      className: an,
      role: `button`,
      tabIndex: 0,
      onClick: e,
      onKeyDown: (t) => {
        (t.key === `Enter` || t.key === ` `) && (t.preventDefault(), e());
      },
      children: [
        i?.thumbnail_url &&
          (0, P.jsx)(`img`, {
            className: `FFbDls5-Ssk-`,
            src: i.thumbnail_url,
            alt: i.title,
          }),
        (0, P.jsx)(`img`, { className: nn, alt: `` }),
        (0, P.jsxs)(`div`, {
          className: on,
          children: [
            (0, P.jsxs)(`div`, {
              className: sn,
              children: [
                (0, P.jsx)(`span`, {
                  className: cn,
                  children: k(`#EventDisplay_Sketchfab`),
                }),
                i?.title && (0, P.jsxs)(`div`, { children: [i.title, `\xA0`] }),
              ],
            }),
            i?.author_name &&
              (0, P.jsx)(`div`, {
                className: `-r4s23p52-0-`,
                children: i.author_name,
              }),
          ],
        }),
      ],
    });
  }
  return (0, P.jsx)(`div`, {
    className: rn,
    children: (0, P.jsx)(`iframe`, {
      className: rn,
      title: i?.title ?? t,
      src: `https://sketchfab.com/models/${encodeURIComponent(t)}/embed?autostart=1`,
      frameBorder: 0,
      allowFullScreen: !0,
    }),
  });
}
var hn =
  /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.[\w.-]+\.steam\.dev|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
function gn(e) {
  let t = hn.exec(e),
    n = t ? Number(t[1]) : 0;
  return n > 0 ? n : void 0;
}
function _n(e) {
  return q(e) ? gn(e) : void 0;
}
var vn = `_8mFolns3-hw-`;
function yn(e) {
  let { defid: t } = e,
    n = yr(t);
  if (!n || !n.community_item_data) return null;
  let r = n.appid,
    i = n.community_item_data.item_image_large,
    a = `${T.MEDIA_CDN_COMMUNITY_URL}images/items/${r}/${i}`;
  return (0, P.jsx)(`div`, {
    className: vn,
    children: (0, P.jsx)(st, {
      toolTipContent: n.community_item_data.item_description,
      children: (0, P.jsx)(`img`, {
        src: a,
        alt: n.community_item_data.item_title,
      }),
    }),
  });
}
var bn = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
  xn = /twitter\.com\/(\w+)(\/?)$/i,
  Sn = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
  Cn = /twitch\.tv\/(\w+)(\/?)$/i,
  wn =
    /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i;
function Y() {
  return T.EREALM === ht.k_ESteamRealmChina;
}
var Tn = new Map();
function En() {
  let e = T.EREALM,
    t = Tn.get(e);
  return (
    t ||
      ((t = Y()
        ? [
            { urlRegExp: new RegExp(U), fnBBComponent: Mn },
            { urlRegExp: new RegExp(z), fnBBComponent: Zt },
            { urlRegExp: new RegExp(B), fnBBComponent: Xt },
            { urlRegExp: new RegExp(V), fnBBComponent: Qt },
            { urlRegExp: new RegExp(wn), fnBBComponent: Rn },
          ]
        : [
            {
              urlRegExp: new RegExp(/youtu.be|youtube.com/i),
              fnBBComponent: pe,
            },
            { urlRegExp: new RegExp($t), fnBBComponent: jn },
            { urlRegExp: new RegExp(U), fnBBComponent: Mn },
            { urlRegExp: new RegExp(z), fnBBComponent: Zt },
            { urlRegExp: new RegExp(B), fnBBComponent: Xt },
            { urlRegExp: new RegExp(V), fnBBComponent: Qt },
            { urlRegExp: new RegExp(bn), fnBBComponent: kn },
            { urlRegExp: new RegExp(ln), fnBBComponent: An },
            { urlRegExp: new RegExp(xn), fnBBComponent: Fn },
            { urlRegExp: new RegExp(Sn), fnBBComponent: In },
            { urlRegExp: new RegExp(Cn), fnBBComponent: Ln },
            { urlRegExp: new RegExp(wn), fnBBComponent: Rn },
            { urlRegExp: new RegExp(hn), fnBBComponent: Pn },
          ]),
      Tn.set(e, t)),
    t
  );
}
function Dn(e) {
  return En().find((t) => !!t.urlRegExp.exec(e));
}
function On(e) {
  return N.useMemo(() => Dn(e), [e]);
}
function kn(e, t) {
  if (Y()) return null;
  let n = new RegExp(bn).exec(e);
  if (n && n.length > 1) {
    let e = n[1];
    if (e?.length > 0) {
      let n =
        `https://medal.tv/clip/` +
        e +
        `/?autoplay=0&donate=0` +
        (t && t.event ? `&steamappid=` + t.event.appid : ``);
      return (0, P.jsx)(`iframe`, {
        className: We,
        src: n,
        title: e,
        frameBorder: 0,
        allow: `autoplay`,
      });
    }
  }
  return g(e, t?.event);
}
function An(e, t) {
  let n = new RegExp(ln).exec(e);
  if (n && n.length > 1) {
    let e = n[1];
    if (e && e.length > 1) return (0, P.jsx)(mn, { modelID: e });
  }
  return g(e, t?.event);
}
function jn(e, t) {
  let n = en(e);
  return n === void 0 ? g(e, t?.event) : (0, P.jsx)(tn, { sharedFileID: n });
}
function Mn(e, t) {
  let n = Ut(e);
  return n
    ? (0, P.jsx)(Nn, {
        eventModel: t?.event,
        inputID: n.id,
        inputType: n.strItemType,
        fallbackUrl: e,
      })
    : g(e, t?.event);
}
function Nn(e) {
  let { inputID: t, inputType: n, eventModel: r, fallbackUrl: i } = e,
    a = p(t, n),
    { data: o } = j(a),
    s = Kt(r),
    c;
  return (
    s === null
      ? (c = !0)
      : s && o && (c = qt(s, o.appid ? [o.appid] : (o.included_appids ?? []))),
    c === void 0
      ? null
      : c
        ? (0, P.jsx)(R, { id: t, inputType: n, bApplyUserContentPref: !0 })
        : g(i, r)
  );
}
function Pn(e, t) {
  let n = _n(e);
  return n
    ? (0, P.jsx)(`div`, {
        className: O(Ie),
        children: (0, P.jsx)(yn, { defid: n, url: e }),
      })
    : g(e, t?.event);
}
function Fn(e, t) {
  return Y() ? null : X(e, (0, P.jsx)(vt, {}), `@`, t);
}
function In(e, t) {
  return Y() ? null : X(e, (0, P.jsx)(vt, {}), `#`, t);
}
function Ln(e, t) {
  return Y() ? null : X(e, (0, P.jsx)(Et, {}), void 0, t);
}
function Rn(e, t) {
  return X(e, (0, P.jsx)(lt, {}), void 0, t);
}
function X(e, t, n, r) {
  let i,
    a = e.endsWith(`/`) ? e.length - 1 : e.length,
    o = e.lastIndexOf(`/`, a - 1);
  (o != -1 && o + 1 < e.length && (i = e.substring(o + 1, a)),
    n && i && (i = n + i));
  let s = g(e, r?.event, i ?? e);
  return (0, P.jsxs)(`div`, {
    className: Pe,
    children: [(0, P.jsx)(`div`, { className: Le, children: t }), s],
  });
}
function zn(e) {
  switch (e) {
    case `button`:
      return O(ze, `LinkButton`);
    case `pill`:
      return O(He, `LinkPill`);
    default:
      return O(Ne, `Link`);
  }
}
function Bn(e, t, n) {
  let r;
  return (
    (e == `button` || e == `pill`) && t && (r = { backgroundColor: t }),
    (e == `button` || e == `pill`) && n && (r = { ...(r ?? {}), color: n }),
    r
  );
}
function Vn(e, t) {
  let n = (
    typeof e == `string`
      ? e
      : Array.isArray(e) && e.length == 1 && typeof e[0] == `string`
        ? e[0]
        : void 0
  )?.trim();
  return !n || !t || n != t.trim();
}
function Z(e) {
  let t = y(x(e.args) || x(e.args, `href`)),
    n = x(e.args, `style`),
    r = x(e.args, `id`),
    i = I(x(e.args, `buttoncolor`) || x(e.args, `bgcolor`), void 0),
    o = I(x(e.args, `labelcolor`) || x(e.args, `color`), void 0),
    s = zn(n),
    c = e.context.event,
    l = a(t, e.language, c?.rtime32_last_modified),
    u = On(Vn(e.children, t) ? `` : (t ?? ``));
  if (u && t) return u.fnBBComponent(t, { event: e.context.event });
  if (l === void 0 || l == null) return e.children || ``;
  t = typeof l == `string` ? l : l[1];
  let d = Bn(n, i, o);
  return typeof t == `string` && t.length > 0 && t[0] == `#`
    ? (0, P.jsx)(Ct, { className: s, href: t, style: d, children: e.children })
    : t == `steam://settings/account`
      ? (0, P.jsx)(gt, {
          className: s,
          href: `steam://settings/account`,
          children: e.children,
        })
      : (0, P.jsx)(ae, {
          className: s,
          url: t,
          event: e.context.event,
          id: r,
          style: d,
          children: e.children,
        });
}
function Hn(e) {
  let t = x(e.args, `href`),
    n = On(t);
  return n
    ? n.fnBBComponent(t, { event: e.context.event })
    : (0, P.jsx)(Z, { ...e });
}
var Un = `v87a6zGhXmo-`,
  Wn = `XkrNZp-zaXw-`,
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
function Gn(e) {
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
      return (0, P.jsxs)(P.Fragment, {
        children: [
          (0, P.jsxs)(`button`, {
            type: `button`,
            className: O({ [Un]: t == `pill`, [Wn]: t == `button` }),
            onClick: () => l(!0),
            style: { color: r, backgroundColor: i },
            children: [(0, P.jsx)(ot, {}), a || k(`#EventEmail_WatchNow`)],
          }),
          (0, P.jsx)(et, {
            id: u,
            bShowModal: c,
            trailerBaseID: o,
            hideModal: () => l(!1),
          }),
        ],
      });
    default:
    case `full`:
      return (0, P.jsx)(Kn, { ...e });
  }
}
function Kn(e) {
  let { appid: t, trailerBaseID: n } = e,
    r = s(t),
    { data: i } = j(r),
    [a, o] = (0, N.useState)(() =>
      !t || !n ? k(`#TrailerPlayer_ID_NotProvided`) : null,
    ),
    c = pt(r),
    l = (0, N.useMemo)(
      () => (c ? c.find((e) => e.trailer_base_id === n) : null),
      [c, n],
    );
  return (
    (0, N.useEffect)(() => {
      (i?.unvailable_for_country_restriction &&
        o(k(`#TrailerPlayer_CouldNotLoad`, t, n)),
        c &&
          !l &&
          o(k(`#TrailerPlayer_CouldNotLoad`, e.appid, e.trailerBaseID)));
    }, [
      t,
      e.appid,
      e.trailerBaseID,
      i?.unvailable_for_country_restriction,
      n,
      l,
      c,
    ]),
    a
      ? e.bIsPreviewMode
        ? (0, P.jsx)(`div`, { className: ne, children: a })
        : null
      : l
        ? (0, P.jsx)(qn, { trailerToPlay: l })
        : (0, P.jsx)(h, { string: k(`#Loading`), size: `small` })
  );
}
function qn(e) {
  let { trailerToPlay: t } = e,
    {
      rgDashTrailers: n,
      rgHlsTrailers: r,
      strCaptionManufest: i,
    } = (0, N.useMemo)(() => {
      let { rgDashTrailers: e, rgHlsTrailers: n } = wt(t);
      return { rgDashTrailers: e, rgHlsTrailers: n, strCaptionManufest: ut(t) };
    }, [t]);
  return n?.length == 0
    ? null
    : (0, P.jsx)(`div`, {
        className: $e,
        children: (0, P.jsx)(Qe, {
          dashManifests: n || [],
          hlsManifest: (r.length > 0 && r?.[0]) || ``,
          screenshot: rt(t),
          altText: t.trailer_name,
          muteWhenAutoplayBlocked: !0,
          captionManifest: i,
        }),
      });
}
function Jn(e) {
  let t = Dt(),
    n = je(940),
    r = String(x(e.args, `autoadvance`)).toLowerCase() === `true`;
  return (0, P.jsx)(Ae, {
    hideArrows: !n,
    hidePips: t,
    visibleElements: 1,
    useTestScrollbar: !1,
    bLazyRenderChildren: !0,
    screenIsWide: n,
    bAutoAdvance: r,
    className: Be,
    children: e.children,
  });
}
var Yn = `FQV2hlT8BYs-`;
function Xn(e) {
  let { strURL: t, children: n } = e;
  return (typeof t == `string` ? !D(t) : t.some((e) => !D(e)))
    ? (0, P.jsx)(Zn, { children: n })
    : (0, P.jsx)(P.Fragment, { children: n });
}
function Zn(e) {
  let { children: t } = e;
  return Me()
    ? (0, P.jsx)(P.Fragment, { children: t })
    : (0, P.jsx)(`div`, {
        className: Yn,
        children: ft(
          `#Image_Externally_Hosted_Hidden`,
          (0, P.jsx)(`a`, {
            href: T.STORE_BASE_URL + `account/cookiepreferences`,
          }),
        ),
      });
}
var Qn = null;
function $n() {
  return (
    (Qn ??= new Map([
      [`url`, { Constructor: Z, autocloses: !1 }],
      [`dynamiclink`, { Constructor: Hn, autocloses: !1 }],
      [
        `h1`,
        { Constructor: S(me, Re), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [
        `h2`,
        { Constructor: S(Se, Ve), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [
        `h3`,
        { Constructor: S(Te, Fe), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [`quote`, { Constructor: S(Ce, Ue), autocloses: !1 }],
      [`list`, { Constructor: be, autocloses: !1, skipInternalNewline: !0 }],
      [`olist`, { Constructor: ge, autocloses: !1, skipInternalNewline: !0 }],
      [`*`, { Constructor: Ee, autocloses: !0, skipInternalNewline: !0 }],
      [`p`, { Constructor: _e, autocloses: !1, skipFollowingNewline: !0 }],
      [`img`, { Constructor: er, autocloses: !1 }],
      [`previewyoutube`, { Constructor: xe, autocloses: !1 }],
      [`looping_media`, { Constructor: oe, autocloses: !1 }],
      [`video`, { Constructor: ue, autocloses: !1 }],
      [`youtubeorvideo`, { Constructor: ve, autocloses: !1 }],
      [`trailer`, { Constructor: nr, autocloses: !1 }],
      [
        `speaker`,
        {
          Constructor: rr,
          autocloses: !1,
          skipInternalNewline: !0,
          allowWrapTextForCopying: !0,
        },
      ],
      [`docimg`, { Constructor: tr, autocloses: !1 }],
      [`carousel`, { Constructor: Jn, autocloses: !1 }],
    ])),
    Qn
  );
}
function er(e) {
  let { showErrorInfo: t, event: n } = e.context,
    r = x(e.args, `src`) || e.children?.toString();
  ((r ||= x(e.args)), (r = y(r ?? ``) || void 0));
  let i = x(e.args, `style`) === `inline`,
    o = a(r, e.language, n?.rtime32_last_modified);
  if (o == null) return null;
  if (typeof o == `string`) {
    r = o;
    let e;
    return (
      (e = !D(r)),
      n?.BHasTag(`auto_rssfeed`) && (e = !1),
      t
        ? (0, P.jsx)(re, {
            className: O({ [v]: i }),
            src: r,
            crossOrigin: e ? `anonymous` : void 0,
          })
        : ((r = A(r)),
          (0, P.jsx)(Xn, {
            strURL: r,
            children: (0, P.jsx)(f, {
              className: O({ [v]: i }),
              src: r,
              crossOrigin: e ? `anonymous` : void 0,
            }),
          }))
    );
  }
  return (0, P.jsx)(Xn, {
    strURL: o,
    children: (0, P.jsx)(d, { rgSources: o }),
  });
}
function tr(e) {
  let t = x(e.args);
  if (t == null || t == null || t.length == 0) return ``;
  let n = e.children?.toString(),
    r = [];
  return (
    r.push(
      `${T.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${T.LANGUAGE}/${t}`,
    ),
    T.LANGUAGE != `english` &&
      r.push(`${T.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${t}`),
    (0, P.jsx)(d, { rgSources: r, alt: n })
  );
}
function nr(e) {
  let t = $(e.args, `appid`, e.context.event?.appid ?? 0),
    n = $(e.args, `trailerid`, 0),
    r = x(e.args, `style`)?.toLocaleLowerCase() ?? Q.k_TrailerAsFull;
  r = Object.values(Q).includes(r) ? r : Q.k_TrailerAsFull;
  let i = I(e.args.color, `black`),
    a = I(e.args.bgcolor, `white`),
    o = ye(e.args);
  return (0, P.jsx)(Gn, {
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
function rr(e) {
  let t = x(e.args, `name`),
    n = x(e.args, `title`),
    r = x(e.args, `company`),
    i = x(e.args, `photo`);
  return e.context.bShowShortSpeakerInfo
    ? (0, P.jsx)(Ke, {
        name: t,
        title: n,
        company: r,
        photo: i,
        bio: e.children,
      })
    : (0, P.jsx)(qe, {
        name: t,
        title: n,
        company: r,
        photo: i,
        bio: e.children,
      });
}
function $(e, t, n) {
  let r = x(e, t);
  return r === void 0 || r == null ? n : Number.parseInt(r);
}
var ir = null;
function ar() {
  return (
    (ir ??= new Map([
      ...Array.from(we.entries()),
      ...Array.from($n().entries()),
    ])),
    ir
  );
}
var or = N.createContext(null);
function sr() {
  return N.useContext(or) ?? ar();
}
function cr(e) {
  let t = sr(),
    n = N.useMemo(
      () =>
        new Map([
          ...Array.from(t.entries()),
          ...Array.from(e.dictionary.entries()),
        ]),
      [t, e.dictionary],
    );
  return (0, P.jsx)(or.Provider, { value: n, children: e.children });
}
function lr(e) {
  let {
      text: t,
      languageOverride: n,
      event: r,
      showErrorInfo: i,
      bShowShortSpeakerInfo: a,
    } = e,
    o = En(),
    s = N.useCallback(
      (e) => new jt(new At(new Ot(new le(new fe()), e, o, { event: r })), e),
      [r, o],
    ),
    c = sr();
  return N.useMemo(() => new ke(c, s, n || T.LANGUAGE), [c, s, n]).ParseBBCode(
    t,
    { showErrorInfo: i, event: r, bShowShortSpeakerInfo: a, bbcode: t },
  );
}
async function ur(e, t) {
  let { rgDefIDs: n, strCategory: r, itemClass: i } = t,
    a = await tt.QueryRewardItems(e, {
      definitionids: n,
      community_item_classes: i ? [i] : void 0,
      filter_match_any_category_tags: r ? [r] : void 0,
    });
  if (!a.BSuccess())
    throw Error(`LoyaltyRewards.QueryRewardItems answered ` + a.GetEResult());
  return a.Body().toObject().definitions ?? [];
}
var dr;
function fr() {
  let e = xt();
  return e
    ? e.GetAnonymousServiceTransport()
    : ((dr ||= ct(new at(T.WEBAPI_BASE_URL))),
      dr.GetAnonymousServiceTransport());
}
async function pr(e) {
  return ur(fr(), e);
}
var mr = 36e5;
function hr(e) {
  return [`LoyaltyRewardDef`, e];
}
function gr(e, t) {
  return [`LoyaltyRewardDefsByCategoryAndClass`, e, t];
}
function _r(e) {
  return {
    queryKey: hr(e),
    queryFn: async () => {
      let t = await pr({ rgDefIDs: [e] }),
        n = t.length == 1 ? t[0] : void 0;
      if (!n)
        throw Error(
          `Asked for point shop item ${e} and got ${t.length} items back, wanted exactly one.`,
        );
      return n;
    },
    enabled: e > 0,
    staleTime: mr,
    retry: !1,
  };
}
function vr(e, t) {
  return {
    queryKey: gr(e, t),
    queryFn: () => pr({ strCategory: e, itemClass: t }),
    enabled: !!(e && t),
    staleTime: mr,
    retry: !1,
  };
}
function yr(e) {
  let { data: t } = i(_r(e));
  return t;
}
function br(e, t) {
  let r = n(),
    { data: a } = i(vr(e, t));
  return (
    (0, N.useEffect)(() => {
      a?.forEach((e) => {
        e.defid !== void 0 && r.setQueryData(hr(e.defid), e);
      });
    }, [a, r]),
    a
  );
}
export { H as a, F as c, $ as i, cr as n, R as o, lr as r, I as s, br as t };
