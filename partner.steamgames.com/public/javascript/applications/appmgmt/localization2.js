/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $t as e,
  U as t,
  _t as n,
  kt as r,
  nt as i,
  on as a,
} from "./mobx.esm.js";
import { l as o } from "./src.js";
import {
  An as s,
  Ga as c,
  Mn as l,
  Tn as u,
  fn as d,
  jn as f,
  wn as p,
} from "./dialogs.js";
import { l as m, r as h, s as g, t as _ } from "./storenaveventcontext.js";
import { D as v } from "./react-router.js";
var y = a(r());
function b(e, t = ``, n = null) {
  return T.InstrumentLink(e, t, n);
}
function x(e, n, r) {
  let i = h();
  return y.useMemo(() => {
    let a = s(e).toLowerCase(),
      o = s(t.COMMUNITY_BASE_URL).toLowerCase(),
      c = s(t.STORE_BASE_URL).toLowerCase();
    return a === o || a === c ? _(i, e, n, r) : e;
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
  return e?.domain ? T.GetLinkParam(e, t) : i.SNR;
}
var T = class t {
    static sm_strDomain;
    static sm_strController;
    static sm_strMethod;
    static sm_strSubmethod;
    static sm_strComputedLinkPrefix;
    static SetNavEventParams(e, n, r = null, i = null) {
      ((t.sm_strDomain = e),
        (t.sm_strController = n),
        (t.sm_strMethod = r),
        (t.sm_strSubmethod = i),
        (t.sm_strComputedLinkPrefix = null));
    }
    static GetDefaultParams() {
      let e = { domain: t.sm_strDomain, controller: t.sm_strController };
      return (
        t.sm_strMethod && (e.method = t.sm_strMethod),
        t.sm_strSubmethod && (e.submethod = t.sm_strSubmethod),
        e
      );
    }
    static InstrumentLink(e, n, r = null) {
      let i = t.GetLinkParam(n, r),
        a = typeof n == `string` ? null : g.GetCuratorClanIDParam(n);
      return g.AddNavParamToURL(e, i, a);
    }
    static GetLinkParam(e, n = null) {
      let r;
      if (typeof e != `string`) {
        if (e.domain) return g.GetSNRLinkParam(e, n);
        r = e.feature || ``;
      }
      let i;
      if (!t.sm_strComputedLinkPrefix && !t.ComputeStaticLinkPrefix())
        return null;
      i = t.sm_strComputedLinkPrefix;
      let a = g.EncodeEventComponent(r);
      return (a && ((i += `_` + a), n && (i += `_` + n)), i);
    }
    static ComputeStaticLinkPrefix() {
      return t.sm_strDomain
        ? ((t.sm_strComputedLinkPrefix = g.ComputeLinkPrefix(
            t.sm_strDomain,
            t.sm_strController,
            t.sm_strMethod,
            t.sm_strSubmethod,
          )),
          !0)
        : (e(
            !1,
            `CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!`,
          ),
          !1);
    }
  },
  E = n();
function D(e) {
  let t = e?.jsondata?.read_more_link;
  if (!t) return;
  let n = s(t).toLocaleLowerCase();
  return n ? [n] : void 0;
}
function O(e, t) {
  return p(e, D(t));
}
function k(e, n) {
  if (!e) return ``;
  if (!p(e)) return l(e);
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
    let s = p(a) ? `noopener nofollow` : void 0,
      c =
        typeof e.children == `string` &&
        e.children.length > 0 &&
        t &&
        !t.startsWith(`steam://`)
          ? f(t)
          : void 0;
    return (0, E.jsx)(d, {
      toolTipContent: c,
      direction: `top`,
      children: (0, E.jsx)(o, {
        className: r,
        href: a,
        rel: s,
        id: e.id,
        style: i,
        children: e.children,
      }),
    });
  },
  M = {};
((M.arabic = () =>
  c(() => import(`./saletech_arabic.js`), [], import.meta.url)),
  (M.brazilian = () =>
    c(() => import(`./saletech_brazilian.js`), [], import.meta.url)),
  (M.bulgarian = () =>
    c(() => import(`./saletech_bulgarian.js`), [], import.meta.url)),
  (M.czech = () => c(() => import(`./saletech_czech.js`), [], import.meta.url)),
  (M.danish = () =>
    c(() => import(`./saletech_danish.js`), [], import.meta.url)),
  (M.dutch = () => c(() => import(`./saletech_dutch.js`), [], import.meta.url)),
  (M.english = () =>
    c(() => import(`./saletech_english.js`), [], import.meta.url)),
  (M.finnish = () =>
    c(() => import(`./saletech_finnish.js`), [], import.meta.url)),
  (M.french = () =>
    c(() => import(`./saletech_french.js`), [], import.meta.url)),
  (M.german = () =>
    c(() => import(`./saletech_german.js`), [], import.meta.url)),
  (M.greek = () => c(() => import(`./saletech_greek.js`), [], import.meta.url)),
  (M.hungarian = () =>
    c(() => import(`./saletech_hungarian.js`), [], import.meta.url)),
  (M.indonesian = () =>
    c(() => import(`./saletech_indonesian.js`), [], import.meta.url)),
  (M.italian = () =>
    c(() => import(`./saletech_italian.js`), [], import.meta.url)),
  (M.japanese = () =>
    c(() => import(`./saletech_japanese.js`), [], import.meta.url)),
  (M.koreana = () =>
    c(() => import(`./saletech_koreana.js`), [], import.meta.url)),
  (M.latam = () => c(() => import(`./saletech_latam.js`), [], import.meta.url)),
  (M.malay = () => c(() => import(`./saletech_malay.js`), [], import.meta.url)),
  (M.norwegian = () =>
    c(() => import(`./saletech_norwegian.js`), [], import.meta.url)),
  (M.polish = () =>
    c(() => import(`./saletech_polish.js`), [], import.meta.url)),
  (M.portuguese = () =>
    c(() => import(`./saletech_portuguese.js`), [], import.meta.url)),
  (M.romanian = () =>
    c(() => import(`./saletech_romanian.js`), [], import.meta.url)),
  (M.russian = () =>
    c(() => import(`./saletech_russian.js`), [], import.meta.url)),
  (M.sc_schinese = () =>
    c(() => import(`./saletech_sc_schinese.js`), [], import.meta.url)),
  (M.schinese = () =>
    c(() => import(`./saletech_schinese.js`), [], import.meta.url)),
  (M.spanish = () =>
    c(() => import(`./saletech_spanish.js`), [], import.meta.url)),
  (M.swedish = () =>
    c(() => import(`./saletech_swedish.js`), [], import.meta.url)),
  (M.tchinese = () =>
    c(() => import(`./saletech_tchinese.js`), [], import.meta.url)),
  (M.thai = () => c(() => import(`./saletech_thai.js`), [], import.meta.url)),
  (M.turkish = () =>
    c(() => import(`./saletech_turkish.js`), [], import.meta.url)),
  (M.ukrainian = () =>
    c(() => import(`./saletech_ukrainian.js`), [], import.meta.url)),
  (M.vietnamese = () =>
    c(() => import(`./saletech_vietnamese.js`), [], import.meta.url)));
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
