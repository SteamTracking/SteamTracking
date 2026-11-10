/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, dt as n, ft as r, st as i } from "./libraries.js";
import { i as a, t as o } from "./clanimagemodels.js";
import { V as s } from "./storelink.js";
import { Oa as c } from "./saletags.js";
import { d as l, u } from "./claninfo.js";
import { t as d } from "./multisourceimage.js";
import { n as ee, r as te } from "./eventlink.js";
import { o as ne, r as f, t as re } from "./image.js";
import { d as ie, p } from "./salestoreitemutils.js";
import { t as m } from "./salepreviewwidgets.js";
import { t as ae } from "./throbber.js";
import { n as oe, t as h } from "./linkfilter.js";
import {
  A as se,
  B as g,
  C as ce,
  E as le,
  F as _,
  H as ue,
  M as de,
  R as v,
  S as y,
  T as fe,
  V as pe,
  _ as me,
  a as he,
  b as ge,
  d as _e,
  f as ve,
  h as ye,
  i as b,
  j as be,
  l as xe,
  m as Se,
  n as x,
  o as Ce,
  p as we,
  r as Te,
  s as Ee,
  u as De,
  v as Oe,
  w as ke,
  x as S,
  y as C,
  z as Ae,
} from "./basicbbcodeparser.js";
import { r as je, u as Me } from "./carouselarrows.js";
import { l as Ne } from "./youtubeplayer.js";
import {
  a as Pe,
  h as Fe,
  i as Ie,
  l as Le,
  m as Re,
  n as ze,
  o as Be,
  p as Ve,
  r as He,
  s as Ue,
  t as We,
  u as Ge,
} from "./eventbbcodeparser.module.js";
import { i as Ke, r as qe, t as Je } from "./presenterpopup.js";
import { r as Ye, t as Xe } from "./eventimageurlwithfallback.js";
import { r as Ze, t as Qe } from "./creatorhomegamelock.js";
import { r as $e } from "./trailertitlebar.js";
import { m as et, n as tt } from "./salehilightplayerembed.js";
import { h as nt } from "./steammessages_loyalty_rewards_pb.js";
import {
  $o as rt,
  Av as w,
  Ax as it,
  Bb as at,
  Bc as T,
  Cc as E,
  Ey as ot,
  Gc as D,
  Gl as st,
  Gv as ct,
  Gy as O,
  Hs as lt,
  Jl as ut,
  Jx as dt,
  Kl as ft,
  Ly as k,
  Ub as A,
  Wy as j,
  Yy as pt,
  Zl as mt,
  ac as ht,
  eu as gt,
  hS as _t,
  hu as vt,
  ic as yt,
  ky as bt,
  ov as xt,
  rb as St,
  rl as Ct,
  xS as wt,
  xr as Tt,
  xx as Et,
  zc as M,
  zr as Dt,
} from "./main.js";
var N = e(t(), 1),
  P = r();
function F(e) {
  return (0, P.jsxs)(`a`, {
    href: e.strURL,
    className: S.Box,
    "data-modal-content-sizetofit": !!e.bSizeToFit,
    "data-appid": e.appid,
    "data-publishedfileid": e.publishedfileid,
    children: [
      (0, P.jsx)(le, { strURL: e.strPreviewURL }),
      (0, P.jsxs)(y, {
        children: [
          (0, P.jsx)(fe, { children: e.strTitle }),
          (0, P.jsx)(`div`, {
            children: (0, P.jsx)(`span`, {
              className: S.Type,
              children: e.strType,
            }),
          }),
          e.author && (0, P.jsx)(C, { children: e.author }),
          (0, P.jsx)(ke, { children: e.strDescription }),
        ],
      }),
    ],
  });
}
var Ot = class extends g {
    m_LinkFilter = Et;
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
          (i || super.AppendNode(h(r)),
            (n = e.input.substring(e.index + r.length)),
            (e = this.m_LinkFilter.exec(n)));
        }
      }
      n.length > 0 && super.AppendText(n, t);
    }
  },
  kt = `[ː:]([a-zA-Z0-9_]+)[ː:]`,
  At = class extends g {
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
          (super.AppendNode(N.createElement(Ke, { emoticon: r }, [])),
            (n = e.input.substring(e.index + r.length + 2)),
            (e = this.m_EmoteRegex.exec(n)));
        }
      }
      n.length > 0 && super.AppendText(n, t);
    }
  },
  jt = class extends g {
    m_parentNode = void 0;
    constructor(e, t) {
      (super(e), (this.m_parentNode = t));
    }
    AppendText(e, t = !1) {
      let n = e;
      (this.m_parentNode &&
        this.m_parentNode.tag == `img` &&
        !Mt(n) &&
        (n = D(n)),
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
    { data: o } = w(a),
    { data: s, isPending: c } = ct(r ? a : void 0);
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
        className: E(L, `AppSummaryWidgetCtn`),
        children: O(
          e,
          (0, P.jsx)(`a`, { href: A.STORE_BASE_URL + `account/preferences/` }),
        ),
      });
    }
  }
  return (0, P.jsx)(`div`, {
    className: E(L, `AppSummaryWidgetCtn`),
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
    c = xt();
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
        let s = await e.ensureQueryData(Xe(e, t, n, r, i, a));
        if ((s && c.push(s), a != o.full)) {
          let a = await e.ensureQueryData(Xe(e, t, n, r, i, o.full));
          a && c.push(a);
        }
      }
      if (!s)
        try {
          let r = await e.ensureQueryData(Ye(e, t, n));
          r && c.push(r);
        } catch (e) {
          if (
            (dt(
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
    } = Ze(
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
    { data: ne } = w(d);
  if (o || u || c === null) return h(i);
  if (l || !c) return (0, P.jsx)(ae, {});
  let f = _t(A.LANGUAGE),
    re = c.GetNameWithFallback(f),
    ie = c.GetSubTitleWithSummaryFallback(f),
    p = ne?.name,
    m = St(c.GetStartTimeAndDateUnixSeconds());
  return (0, P.jsxs)(te, {
    eventModel: c,
    route: ee.k_eView,
    className: S.Box,
    "data-modal-content-sizetofit": !0,
    "data-appid": t,
    children: [
      (0, P.jsx)(Bt, { ...e, event: c }),
      (0, P.jsxs)(y, {
        children: [
          (0, P.jsxs)(C, {
            children: [
              j(
                c.type == 28
                  ? `#EventDisplay_Share_Announcement`
                  : `#EventDisplay_Share_Event`,
                p ?? ``,
              ),
              (0, P.jsx)(ce, { children: m }),
            ],
          }),
          (0, P.jsx)(fe, {
            children: (0, P.jsx)(`div`, { className: S.Type, children: re }),
          }),
          (0, P.jsx)(ke, { children: ie }),
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
    i = H(t, `capsule`, _t(A.LANGUAGE), o.capsule_main) ?? [];
  return (
    i && n && (i = n(i)),
    (0, P.jsx)(d, {
      className: S.Preview,
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
  let t = T(e).toLocaleLowerCase(),
    n = T(A.STORE_BASE_URL).toLocaleLowerCase(),
    r = T(A.COMMUNITY_BASE_URL).toLocaleLowerCase();
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
  if (r > 0 && gt(n))
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
  if (!(i || o)) return !a || !r || !Qe(e, r) ? null : (a.appids ?? []);
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
  if (!i) return h(t, n);
  let a =
    e.strClanSteamID64 === void 0
      ? e.clanAccountID === void 0
        ? void 0
        : k.InitFromClanID(e.clanAccountID, A.EUNIVERSE)
      : new k(e.strClanSteamID64);
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
  return h(t, n?.event);
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
    { data: n } = Oe(t),
    r = A.COMMUNITY_BASE_URL + `sharedfiles/filedetails/?id=`,
    i = n ?? {
      sharedfileid: t,
      title: j(`#Loading`),
      description: ``,
      type: ``,
      previewurl: ``,
      appid: 0,
      url: r + t,
    },
    a = it(i.url) ? r + i.url : i.url,
    o = i.personnaname !== void 0 && i.personnaname.length > 0;
  return (0, P.jsx)(F, {
    strURL: a,
    strTitle: i.title,
    strPreviewURL: i.previewurl,
    strType: i.type,
    strDescription: i.description,
    author:
      o &&
      pt(`#EventEditor_Author`, (0, P.jsx)(ge, { children: i.personnaname })),
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
                  children: j(`#EventDisplay_Sketchfab`),
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
    a = `${A.MEDIA_CDN_COMMUNITY_URL}images/items/${r}/${i}`;
  return (0, P.jsx)(`div`, {
    className: vn,
    children: (0, P.jsx)(Dt, {
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
  return A.EREALM === wt.k_ESteamRealmChina;
}
var Tn = new Map();
function En() {
  let e = A.EREALM,
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
              fnBBComponent: me,
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
        className: Ge,
        src: n,
        title: e,
        frameBorder: 0,
        allow: `autoplay`,
      });
    }
  }
  return h(e, t?.event);
}
function An(e, t) {
  let n = new RegExp(ln).exec(e);
  if (n && n.length > 1) {
    let e = n[1];
    if (e && e.length > 1) return (0, P.jsx)(mn, { modelID: e });
  }
  return h(e, t?.event);
}
function jn(e, t) {
  let n = en(e);
  return n === void 0 ? h(e, t?.event) : (0, P.jsx)(tn, { sharedFileID: n });
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
    : h(e, t?.event);
}
function Nn(e) {
  let { inputID: t, inputType: n, eventModel: r, fallbackUrl: i } = e,
    a = p(t, n),
    { data: o } = w(a),
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
        : h(i, r)
  );
}
function Pn(e, t) {
  let n = _n(e);
  return n
    ? (0, P.jsx)(`div`, {
        className: E(Le),
        children: (0, P.jsx)(yn, { defid: n, url: e }),
      })
    : h(e, t?.event);
}
function Fn(e, t) {
  return Y() ? null : X(e, (0, P.jsx)(ht, {}), `@`, t);
}
function In(e, t) {
  return Y() ? null : X(e, (0, P.jsx)(ht, {}), `#`, t);
}
function Ln(e, t) {
  return Y() ? null : X(e, (0, P.jsx)(yt, {}), void 0, t);
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
  let s = h(e, r?.event, i ?? e);
  return (0, P.jsxs)(`div`, {
    className: Fe,
    children: [(0, P.jsx)(`div`, { className: Re, children: t }), s],
  });
}
function zn(e) {
  switch (e) {
    case `button`:
      return E(Be, `LinkButton`);
    case `pill`:
      return E(Ue, `LinkPill`);
    default:
      return E(Pe, `Link`);
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
  let t = v(b(e.args) || b(e.args, `href`)),
    n = b(e.args, `style`),
    r = b(e.args, `id`),
    i = I(b(e.args, `buttoncolor`) || b(e.args, `bgcolor`), void 0),
    o = I(b(e.args, `labelcolor`) || b(e.args, `color`), void 0),
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
      ? (0, P.jsx)(Tt, {
          className: s,
          href: `steam://settings/account`,
          children: e.children,
        })
      : (0, P.jsx)(oe, {
          className: s,
          url: t,
          event: e.context.event,
          id: r,
          style: d,
          children: e.children,
        });
}
function Hn(e) {
  let t = b(e.args, `href`),
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
            className: E({ [Un]: t == `pill`, [Wn]: t == `button` }),
            onClick: () => l(!0),
            style: { color: r, backgroundColor: i },
            children: [(0, P.jsx)(rt, {}), a || j(`#EventEmail_WatchNow`)],
          }),
          (0, P.jsx)(tt, {
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
    { data: i } = w(r),
    [a, o] = (0, N.useState)(() =>
      !t || !n ? j(`#TrailerPlayer_ID_NotProvided`) : null,
    ),
    c = mt(r),
    l = (0, N.useMemo)(
      () => (c ? c.find((e) => e.trailer_base_id === n) : null),
      [c, n],
    );
  return (
    (0, N.useEffect)(() => {
      (i?.unvailable_for_country_restriction &&
        o(j(`#TrailerPlayer_CouldNotLoad`, t, n)),
        c &&
          !l &&
          o(j(`#TrailerPlayer_CouldNotLoad`, e.appid, e.trailerBaseID)));
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
        : (0, P.jsx)(ae, { string: j(`#Loading`), size: `small` })
  );
}
function qn(e) {
  let { trailerToPlay: t } = e,
    {
      rgDashTrailers: n,
      rgHlsTrailers: r,
      strCaptionManufest: i,
    } = (0, N.useMemo)(() => {
      let { rgDashTrailers: e, rgHlsTrailers: n } = ut(t);
      return { rgDashTrailers: e, rgHlsTrailers: n, strCaptionManufest: st(t) };
    }, [t]);
  return n?.length == 0
    ? null
    : (0, P.jsx)(`div`, {
        className: et,
        children: (0, P.jsx)($e, {
          dashManifests: n || [],
          hlsManifest: (r.length > 0 && r?.[0]) || ``,
          screenshot: ft(t),
          altText: t.trailer_name,
          muteWhenAutoplayBlocked: !0,
          captionManifest: i,
        }),
      });
}
function Jn(e) {
  let t = at(),
    n = Me(940),
    r = String(b(e.args, `autoadvance`)).toLowerCase() === `true`;
  return (0, P.jsx)(je, {
    hideArrows: !n,
    hidePips: t,
    visibleElements: 1,
    useTestScrollbar: !1,
    bLazyRenderChildren: !0,
    screenIsWide: n,
    bAutoAdvance: r,
    className: Ve,
    children: e.children,
  });
}
var Yn = `FQV2hlT8BYs-`;
function Xn(e) {
  let { strURL: t, children: n } = e;
  return (typeof t == `string` ? !M(t) : t.some((e) => !M(e)))
    ? (0, P.jsx)(Zn, { children: n })
    : (0, P.jsx)(P.Fragment, { children: n });
}
function Zn(e) {
  let { children: t } = e;
  return Ne()
    ? (0, P.jsx)(P.Fragment, { children: t })
    : (0, P.jsx)(`div`, {
        className: Yn,
        children: O(
          `#Image_Externally_Hosted_Hidden`,
          (0, P.jsx)(`a`, {
            href: A.STORE_BASE_URL + `account/cookiepreferences`,
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
        { Constructor: x(he, ze), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [
        `h2`,
        { Constructor: x(Ce, He), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [
        `h3`,
        { Constructor: x(Ee, Ie), autocloses: !1, skipFollowingNewline: !0 },
      ],
      [`quote`, { Constructor: x(we, We), autocloses: !1 }],
      [`list`, { Constructor: xe, autocloses: !1, skipInternalNewline: !0 }],
      [`olist`, { Constructor: _e, autocloses: !1, skipInternalNewline: !0 }],
      [`*`, { Constructor: De, autocloses: !0, skipInternalNewline: !0 }],
      [`p`, { Constructor: ve, autocloses: !1, skipFollowingNewline: !0 }],
      [`img`, { Constructor: er, autocloses: !1 }],
      [`previewyoutube`, { Constructor: Se, autocloses: !1 }],
      [`looping_media`, { Constructor: se, autocloses: !1 }],
      [`video`, { Constructor: de, autocloses: !1 }],
      [`youtubeorvideo`, { Constructor: ye, autocloses: !1 }],
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
    r = b(e.args, `src`) || e.children?.toString();
  ((r ||= b(e.args)), (r = v(r ?? ``) || void 0));
  let i = b(e.args, `style`) === `inline`,
    o = a(r, e.language, n?.rtime32_last_modified);
  if (o == null) return null;
  if (typeof o == `string`) {
    r = o;
    let e;
    return (
      (e = !M(r)),
      n?.BHasTag(`auto_rssfeed`) && (e = !1),
      t
        ? (0, P.jsx)(re, {
            className: E({ [_]: i }),
            src: r,
            crossOrigin: e ? `anonymous` : void 0,
          })
        : ((r = D(r)),
          (0, P.jsx)(Xn, {
            strURL: r,
            children: (0, P.jsx)(f, {
              className: E({ [_]: i }),
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
  let t = b(e.args);
  if (t == null || t == null || t.length == 0) return ``;
  let n = e.children?.toString(),
    r = [];
  return (
    r.push(
      `${A.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${A.LANGUAGE}/${t}`,
    ),
    A.LANGUAGE != `english` &&
      r.push(`${A.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${t}`),
    (0, P.jsx)(d, { rgSources: r, alt: n })
  );
}
function nr(e) {
  let t = $(e.args, `appid`, e.context.event?.appid ?? 0),
    n = $(e.args, `trailerid`, 0),
    r = b(e.args, `style`)?.toLocaleLowerCase() ?? Q.k_TrailerAsFull;
  r = Object.values(Q).includes(r) ? r : Q.k_TrailerAsFull;
  let i = I(e.args.color, `black`),
    a = I(e.args.bgcolor, `white`),
    o = be(e.args);
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
  let t = b(e.args, `name`),
    n = b(e.args, `title`),
    r = b(e.args, `company`),
    i = b(e.args, `photo`);
  return e.context.bShowShortSpeakerInfo
    ? (0, P.jsx)(qe, {
        name: t,
        title: n,
        company: r,
        photo: i,
        bio: e.children,
      })
    : (0, P.jsx)(Je, {
        name: t,
        title: n,
        company: r,
        photo: i,
        bio: e.children,
      });
}
function $(e, t, n) {
  let r = b(e, t);
  return r === void 0 || r == null ? n : Number.parseInt(r);
}
var ir = null;
function ar() {
  return (
    (ir ??= new Map([
      ...Array.from(Te.entries()),
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
      (e) => new jt(new At(new Ot(new ue(new pe()), e, o, { event: r })), e),
      [r, o],
    ),
    c = sr();
  return N.useMemo(() => new Ae(c, s, n || A.LANGUAGE), [c, s, n]).ParseBBCode(
    t,
    { showErrorInfo: i, event: r, bShowShortSpeakerInfo: a, bbcode: t },
  );
}
async function ur(e, t) {
  let { rgDefIDs: n, strCategory: r, itemClass: i } = t,
    a = await nt.QueryRewardItems(e, {
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
  let e = vt();
  return e
    ? e.GetAnonymousServiceTransport()
    : ((dr ||= ot(new bt(A.WEBAPI_BASE_URL))),
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
