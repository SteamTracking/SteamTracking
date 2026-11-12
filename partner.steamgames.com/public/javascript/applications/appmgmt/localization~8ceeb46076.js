/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  W as t,
  en as n,
  rt as r,
  sn as i,
  vt as a,
} from "./chunk~de7f2df91c.js";
import { s as o } from "./chunk~25a6634263.js";
import {
  Dn as s,
  Fn as c,
  Nn as l,
  On as u,
  Pn as d,
  Ya as f,
  hn as p,
} from "./chunk~1fa4b8f2ff.js";
import { l as m, r as h, s as g, t as _ } from "./chunk~9a06851bec.js";
import { E as v } from "./chunk~44f252525d.js";
var y = i(e());
function b(e, t = ``, n = null) {
  return T.InstrumentLink(e, t, n);
}
function x(e, n, r) {
  let i = h();
  return y.useMemo(() => {
    let a = l(e).toLowerCase(),
      o = l(t.COMMUNITY_BASE_URL).toLowerCase(),
      s = l(t.STORE_BASE_URL).toLowerCase();
    return a === o || a === s ? _(i, e, n, r) : e;
  }, [i, e, n, r]);
}
function S(e, t, n = null) {
  let r = w(t, n),
    i = t ? g.GetCuratorClanIDParam(t) : null;
  return g.AddNavParamToURL(e, r, i);
}
function C(e, t, n, r = null) {
  let i = S(e, t, r);
  if (n && Object.keys(n).length > 0)
    try {
      let e = new URL(m(i)),
        t = new URLSearchParams(e.search);
      return (
        Object.entries(n).forEach(([e, n]) => {
          t.set(e, encodeURIComponent(n ?? ``));
        }),
        e.origin + e.pathname + `?` + t.toString() + e.hash
      );
    } catch {}
  return i;
}
function w(e, t = null) {
  return e?.domain ? T.GetLinkParam(e, t) : r.SNR;
}
var T = class e {
    static sm_strDomain;
    static sm_strController;
    static sm_strMethod;
    static sm_strSubmethod;
    static sm_strComputedLinkPrefix;
    static SetNavEventParams(t, n, r = null, i = null) {
      ((e.sm_strDomain = t),
        (e.sm_strController = n),
        (e.sm_strMethod = r),
        (e.sm_strSubmethod = i),
        (e.sm_strComputedLinkPrefix = null));
    }
    static GetDefaultParams() {
      let t = { domain: e.sm_strDomain, controller: e.sm_strController };
      return (
        e.sm_strMethod && (t.method = e.sm_strMethod),
        e.sm_strSubmethod && (t.submethod = e.sm_strSubmethod),
        t
      );
    }
    static InstrumentLink(t, n, r = null) {
      let i = e.GetLinkParam(n, r),
        a = typeof n == `string` ? null : g.GetCuratorClanIDParam(n);
      return g.AddNavParamToURL(t, i, a);
    }
    static GetLinkParam(t, n = null) {
      let r;
      if (typeof t != `string`) {
        if (t.domain) return g.GetSNRLinkParam(t, n);
        r = t.feature || ``;
      }
      let i;
      if (!e.sm_strComputedLinkPrefix && !e.ComputeStaticLinkPrefix())
        return null;
      i = e.sm_strComputedLinkPrefix;
      let a = g.EncodeEventComponent(r);
      return (a && ((i += `_` + a), n && (i += `_` + n)), i);
    }
    static ComputeStaticLinkPrefix() {
      return e.sm_strDomain
        ? ((e.sm_strComputedLinkPrefix = g.ComputeLinkPrefix(
            e.sm_strDomain,
            e.sm_strController,
            e.sm_strMethod,
            e.sm_strSubmethod,
          )),
          !0)
        : (n(
            !1,
            `CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!`,
          ),
          !1);
    }
  },
  E = a();
function D(e) {
  let t = e?.jsondata?.read_more_link;
  if (!t) return;
  let n = l(t).toLocaleLowerCase();
  return n ? [n] : void 0;
}
function O(e, t) {
  return s(e, D(t));
}
function k(e, n) {
  if (!e) return ``;
  if (!s(e)) return c(e);
  let r = O(e, n) ? u(e) : e;
  return (t.IN_CLIENT ? `steam://openurl_external/` : ``) + r;
}
function A(e, t, n) {
  let r = e.toLowerCase().startsWith(`http`) ? e : `http://` + e;
  return (0, E.jsx)(j, { url: r, event: t, children: n || e });
}
var j = (e) => {
    let { url: t, event: n, className: r, style: i } = e,
      a = x(t);
    a = k(a, n);
    let c = s(a) ? `noopener nofollow` : void 0,
      l =
        typeof e.children == `string` &&
        e.children.length > 0 &&
        t &&
        !t.startsWith(`steam://`)
          ? d(t)
          : void 0;
    return (0, E.jsx)(p, {
      toolTipContent: l,
      direction: `top`,
      children: (0, E.jsx)(o, {
        className: r,
        href: a,
        rel: c,
        id: e.id,
        style: i,
        children: e.children,
      }),
    });
  },
  M = {};
((M.arabic = () =>
  f(() => import(`./chunk~2db238c0f4.js`), [], import.meta.url)),
  (M.brazilian = () =>
    f(() => import(`./chunk~3044d234ba.js`), [], import.meta.url)),
  (M.bulgarian = () =>
    f(() => import(`./chunk~01db69dc19.js`), [], import.meta.url)),
  (M.czech = () =>
    f(() => import(`./chunk~f4d9ad7041.js`), [], import.meta.url)),
  (M.danish = () =>
    f(() => import(`./chunk~1eca88ee2f.js`), [], import.meta.url)),
  (M.dutch = () =>
    f(() => import(`./chunk~ceb7dcfb8b.js`), [], import.meta.url)),
  (M.english = () =>
    f(() => import(`./chunk~456d0392b7.js`), [], import.meta.url)),
  (M.finnish = () =>
    f(() => import(`./chunk~01ed01ea05.js`), [], import.meta.url)),
  (M.french = () =>
    f(() => import(`./chunk~3126638495.js`), [], import.meta.url)),
  (M.german = () =>
    f(() => import(`./chunk~d728c5ec5f.js`), [], import.meta.url)),
  (M.greek = () =>
    f(() => import(`./chunk~501aa82e4e.js`), [], import.meta.url)),
  (M.hungarian = () =>
    f(() => import(`./chunk~963ceb2486.js`), [], import.meta.url)),
  (M.indonesian = () =>
    f(() => import(`./chunk~6f8f401629.js`), [], import.meta.url)),
  (M.italian = () =>
    f(() => import(`./chunk~525d1d36ed.js`), [], import.meta.url)),
  (M.japanese = () =>
    f(() => import(`./chunk~4bfc8cee08.js`), [], import.meta.url)),
  (M.koreana = () =>
    f(() => import(`./chunk~17e4249e14.js`), [], import.meta.url)),
  (M.latam = () =>
    f(() => import(`./chunk~c94c5a350a.js`), [], import.meta.url)),
  (M.malay = () =>
    f(() => import(`./chunk~4bdb31b089.js`), [], import.meta.url)),
  (M.norwegian = () =>
    f(() => import(`./chunk~e559c7ccb5.js`), [], import.meta.url)),
  (M.polish = () =>
    f(() => import(`./chunk~41a1e8083b.js`), [], import.meta.url)),
  (M.portuguese = () =>
    f(() => import(`./chunk~888ba42df4.js`), [], import.meta.url)),
  (M.romanian = () =>
    f(() => import(`./chunk~5d85cdff8f.js`), [], import.meta.url)),
  (M.russian = () =>
    f(() => import(`./chunk~1c942615a6.js`), [], import.meta.url)),
  (M.sc_schinese = () =>
    f(() => import(`./chunk~028c81a906.js`), [], import.meta.url)),
  (M.schinese = () =>
    f(() => import(`./chunk~b4f7f522af.js`), [], import.meta.url)),
  (M.spanish = () =>
    f(() => import(`./chunk~fe8f55d5c6.js`), [], import.meta.url)),
  (M.swedish = () =>
    f(() => import(`./chunk~0110674332.js`), [], import.meta.url)),
  (M.tchinese = () =>
    f(() => import(`./chunk~567830f83a.js`), [], import.meta.url)),
  (M.thai = () =>
    f(() => import(`./chunk~297d834957.js`), [], import.meta.url)),
  (M.turkish = () =>
    f(() => import(`./chunk~486ca1332b.js`), [], import.meta.url)),
  (M.ukrainian = () =>
    f(() => import(`./chunk~f6d66a3b64.js`), [], import.meta.url)),
  (M.vietnamese = () =>
    f(() => import(`./chunk~99cbd54bf9.js`), [], import.meta.url)));
async function N(e) {
  if (M[e]) return await M[e]();
}
var P = v(N);
export {
  T as a,
  C as c,
  k as i,
  w as l,
  A as n,
  b as o,
  j as r,
  S as s,
  P as t,
  x as u,
};
