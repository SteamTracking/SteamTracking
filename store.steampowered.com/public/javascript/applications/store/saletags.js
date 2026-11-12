/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e, r as t, t as n } from "./chunk~f025431ab0.js";
import {
  It as r,
  Lt as i,
  Pt as a,
  Z as o,
  dt as s,
  f as c,
  ft as l,
  lt as u,
  nt as d,
  ot as f,
  st as p,
  tt as m,
} from "./chunk~01cfc309bf.js";
import { t as h } from "./chunk~68b7e78d68.js";
import { u as g } from "./chunk~8c66e1c7a5.js";
import { n as _, r as v, t as y } from "./chunk~4c13037b22.js";
import "./chunk~8681f5c764.js";
import { a as b, n as x, r as S } from "./chunk~2f085f1384.js";
import { t as C } from "./chunk~cd94ddba57.js";
import { t as w } from "./chunk~92931c6310.js";
import { i as T, t as E } from "./chunk~af36c62e9f.js";
import { t as D } from "./chunk~eefd71512b.js";
import { a as O } from "./chunk~e867464c75.js";
import { i as k } from "./chunk~2f8c67b4de.js";
import { n as ee } from "./chunk~0278ae6236.js";
import { n as te, t as ne } from "./chunk~90b9831ad2.js";
import { n as A, r as re } from "./chunk~f162f235ea.js";
import {
  $b as ie,
  $r as ae,
  $t as oe,
  $v as se,
  $y as ce,
  Ar as le,
  Bi as ue,
  Br as de,
  Bs as fe,
  Bt as pe,
  Bu as me,
  Ct as he,
  Cu as ge,
  Db as j,
  Dc as _e,
  Dl as ve,
  Dr as ye,
  Eb as M,
  Ec as be,
  Er as xe,
  Ex as Se,
  Fa as Ce,
  Fb as we,
  Fc as Te,
  Gr as Ee,
  Gs as De,
  Hc as Oe,
  Hs as ke,
  Hv as Ae,
  Hx as je,
  Ic as Me,
  In as Ne,
  Is as Pe,
  Jt as Fe,
  Ju as Ie,
  Jv as Le,
  Jy as N,
  Kb as Re,
  Ks as ze,
  Ku as Be,
  Kv as Ve,
  Lb as He,
  Lc as Ue,
  Li as We,
  Ls as Ge,
  Mn as Ke,
  Mv as qe,
  Nb as Je,
  Nn as Ye,
  Nr as Xe,
  Nv as Ze,
  Ob as Qe,
  Or as $e,
  Ox as et,
  Po as tt,
  Pv as nt,
  Qb as rt,
  Qi as it,
  Ql as at,
  Qt as ot,
  Rc as st,
  Ri as ct,
  Rs as lt,
  Sl as ut,
  Sr as dt,
  St as ft,
  TS as pt,
  Td as mt,
  Tl as ht,
  Tt as gt,
  Uc as _t,
  Us as vt,
  Uv as yt,
  Ux as bt,
  Vc as xt,
  Vl as St,
  Vr as Ct,
  Vv as wt,
  Wb as Tt,
  Wi as Et,
  Ws as Dt,
  Xb as Ot,
  Xc as kt,
  Xi as At,
  Xt as jt,
  Xu as Mt,
  Yt as Nt,
  Zt as Pt,
  _l as Ft,
  _n as It,
  aS as Lt,
  an as Rt,
  bS as zt,
  bd as Bt,
  bl as Vt,
  bn as Ht,
  bx as Ut,
  cl as Wt,
  cn as Gt,
  cv as Kt,
  cx as P,
  dd as qt,
  eS as Jt,
  ei as Yt,
  en as Xt,
  fd as Zt,
  fn as Qt,
  fx as $t,
  gc as en,
  gd as tn,
  gv as nn,
  gx as rn,
  hS as an,
  iS as on,
  il as sn,
  ir as cn,
  jc as ln,
  jt as un,
  jv as dn,
  kc as fn,
  kn as pn,
  kv as mn,
  ly as hn,
  mb as gn,
  mu as _n,
  nS as vn,
  nn as yn,
  nr as bn,
  nu as xn,
  oS as Sn,
  ol as Cn,
  pv as wn,
  qb as F,
  ql as Tn,
  qt as En,
  qu as Dn,
  qv as On,
  rS as kn,
  ro as An,
  sS as jn,
  sl as Mn,
  sr as Nn,
  tS as Pn,
  tn as Fn,
  ua as In,
  uc as Ln,
  un as Rn,
  ur as zn,
  uv as Bn,
  ux as Vn,
  vc as Hn,
  vo as Un,
  vx as Wn,
  wc as I,
  wl as Gn,
  wt as Kn,
  wv as qn,
  xl as L,
  xn as Jn,
  yS as Yn,
  yc as Xn,
  yx as Zn,
  zb as Qn,
  zo as $n,
  zs as er,
  zt as tr,
  zv as nr,
} from "./main.js";
var rr = class extends Error {
    eResult;
    constructor(e, t) {
      (super(t ? `EResult ${e}: ${t}` : `EResult ${e}`), (this.eResult = e));
    }
  },
  R = e(i(), 1);
function ir(e) {
  let { data: t } = nt(e);
  return (0, R.useMemo)(
    () => (t ? (t.item_type == 0 ? [t.appid] : t.included_appids || []) : []),
    [t],
  );
}
function ar(e) {
  if (!e?.length) return [];
  let t = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
  return Array.from(new Set(t));
}
function or(e) {
  let { data: t } = nt({ appid: e });
  return t?.appid || e;
}
function sr(e) {
  let { data: t } = nt(e);
  return (0, R.useMemo)(() => {
    if (t && t.related_items && t.related_items.parent_appid)
      return { appid: t.related_items.parent_appid };
  }, [t]);
}
function cr(e) {
  return (0, R.useMemo)(() => (e ? { appid: e } : void 0), [e]);
}
function lr(e) {
  return (0, R.useMemo)(() => (e ? { packageid: e } : void 0), [e]);
}
var z = l();
async function ur(e, t) {
  let n = qt(P.STORE_BASE_URL, t, Vn.country_code);
  return (await (await fetch(n)).json()).rgOwnedApps || [];
}
async function dr(e, t, n) {
  return (await ur(e, t)).includes(n);
}
function fr() {
  let e = hn(),
    t = Ot.accountid;
  return p(pr(e, t));
}
function pr(e, t) {
  return {
    queryKey: _r(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await ur(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function mr(e, t, n) {
  return {
    queryKey: [`AccountOwnsApp`, t, n],
    queryFn: async () => (t ? await dr(e, t, n) : !1),
    staleTime: 6e5,
  };
}
function hr(e) {
  let t = hn(),
    n = Ot.accountid,
    { data: r } = p(mr(t, n, e));
  return r === void 0 ? void 0 : r;
}
function gr(e) {
  let t = s(),
    n = Ot.accountid;
  return R.useCallback(
    (r) => {
      t.setQueryData(_r(n), (t) =>
        t ? new Set([...t.values(), ...r]) : e ? new Set(r) : void 0,
      );
    },
    [t, n, e],
  );
}
function _r(e) {
  return [`AccountOwnedApps`, e ?? 0];
}
function vr(e) {
  let { data: t } = nt(e && `appid` in e ? void 0 : e),
    { data: n } = fr(),
    r;
  return (
    e && `appid` in e ? (r = [e.appid]) : t && (r = t.included_appids),
    r === void 0 || n === void 0 || r.length == 0
      ? { bIsOwned: void 0, unAppID: void 0 }
      : { bIsOwned: !r.some((e) => !n.has(e)), unAppID: r[0] }
  );
}
async function yr(e) {
  let t = { get_appids: !0, l: F.LANGUAGE },
    n = new URLSearchParams(t).toString(),
    r = `${F.STORE_BASE_URL}curator/${e}/ajaxgetcreatorhomeinfo/?${n}`,
    i = await fetch(r, { method: `GET` });
  if (!i.ok) throw Error(`Server returned ${i.status}`);
  let a = await i.json();
  return a.success == 1 ? a : null;
}
function br(e) {
  return p(xr(e));
}
function xr(e) {
  return {
    queryKey: Sr(e),
    queryFn: async () => {
      let t = await yr(e);
      if (t) {
        let { success: e, err_msg: n, warning: r, warning_msg: i, ...a } = t;
        return a;
      }
      return null;
    },
    enabled: !!e,
  };
}
function Sr(e) {
  return [`creatorhomebyaccount`, e];
}
function Cr(e, t) {
  if (e.vanity) {
    switch (t) {
      case `publisher`:
        return `${F.STORE_BASE_URL}publisher/${e.vanity}/`;
      case `franchise`:
        return `${F.STORE_BASE_URL}franchise/${e.vanity}/`;
    }
    return `${F.STORE_BASE_URL}developer/${e.vanity}/`;
  }
  return `${F.STORE_BASE_URL}curator/${e.creator_clan_id}/`;
}
var wr = `qkhMGgZoiEA-`,
  Tr = `dR7N9Ozyb6k-`,
  Er = `_8j-XyEfRwfE-`;
function Dr(e) {
  let { children: t, ...n } = e;
  return (0, z.jsx)(Mn, {
    className: wr,
    type: `button`,
    ...n,
    children: (0, z.jsx)(`span`, { children: t }),
  });
}
function Or(e) {
  let { children: t, ...n } = e;
  return (0, z.jsx)(Mn, {
    className: Er,
    type: `button`,
    ...n,
    children: (0, z.jsx)(`span`, { children: t }),
  });
}
function kr(e) {
  let { children: t, ...n } = e;
  return (0, z.jsx)(Cn, {
    className: Er,
    ...n,
    children: (0, z.jsx)(`span`, { children: t }),
  });
}
function Ar(e) {
  let { children: t, ...n } = e;
  return (0, z.jsx)(Mn, {
    className: Tr,
    type: `button`,
    ...n,
    children: (0, z.jsx)(`span`, { children: t }),
  });
}
var jr = e(r()),
  Mr = e(a(), 1),
  Nr = e(m()),
  Pr = `_8Wp5WbqAbJA-`,
  Fr = `K2PjXmYWvSg-`,
  Ir = `UYfcYZDtfbs-`,
  Lr = `O-TsWDon65A-`,
  Rr = `E8DrK8oV4Hs-`,
  zr = `XTfMA1ObAn4-`,
  Br = `-Rv33oXsbT0-`,
  Vr = `MN6Xv-pm6i8-`,
  Hr = `uvLRAREPa4E-`,
  Ur = `bdPmPtfuqIY-`,
  Wr = `JCVuyoKAC-k-`,
  Gr = `kjiBcsaqA8o-`,
  Kr = `UFAsjplGzxc-`,
  qr = `vL-XYGsLedM-`,
  Jr = `aCttqIa8NC4-`,
  Yr = `-rXzhlz0w3Q-`,
  Xr = `R9ivMzB3Gic-`,
  Zr = `W9-byrNtR9Q-`,
  Qr = `llT8dhJgnqw-`,
  $r = `kxs4VtommH4-`,
  ei = `ncKEDk26SHQ-`,
  ti = `VGzHGCF3I5o-`,
  ni = `fNtXEMzHz58-`,
  ri = `jrHvWWIOlw4-`,
  ii = `FOKKfGVYUDk-`,
  ai = `OClIuwfiMKQ-`,
  oi = `ZLlm68-AqhM-`,
  si = `raYV6Y-MQ7I-`,
  ci = `IWFCYfhR05U-`,
  li = `KtOQKgU1W5w-`,
  ui = `jXpKqo3-cWA-`,
  di = `_-7gyAR9oUx4-`,
  fi = `GcBGxmj4uvE-`,
  pi = `QwN0eH2k0O0-`,
  mi = `sgCiKk3DUeg-`,
  hi = `N86EuolnWHc-`,
  gi = `A8oyzoRvWQ8-`,
  _i = `V7rq-SSC9xQ-`,
  vi = `pNXxwljIaD8-`,
  yi = `lsjYiHotCwA-`,
  bi = `iVV26V5rbpU-`,
  xi = `XosTQwEOBO0-`,
  Si = `ITE-CUK3U10-`,
  Ci = `wPxkst62n-Q-`,
  wi = `gxtdwNjsesg-`,
  Ti = `y1XjkIvVj6A-`,
  Ei = `BZ9dZKOmXqE-`,
  Di = `zMMJGDB8n-o-`,
  Oi = `XPrPiD27WdE-`,
  ki = `R0sGSaFdUWo-`,
  Ai = `PON8X0ze5G8-`,
  ji = `rfhpla0PGMA-`,
  Mi = `OySWwOLLxFc-`,
  Ni = `tkR3-aHpyI4-`,
  Pi = `yyrI0Nka69I-`,
  Fi = `D3fuhd6kG6I-`,
  Ii = `Xk-QP-zS-18-`,
  Li = `I9cM1cZTYqc-`,
  Ri = `LkW8eRLttsM-`,
  zi = `_4KL8m0wDedE-`,
  Bi = `E3GBmOK5lMc-`,
  Vi = `lOHW8g-YyoY-`,
  Hi = `RQzfcqJK1Eg-`,
  Ui = `_0MLgqm-W-nA-`,
  Wi = `iwrzh-mg8hE-`,
  Gi = `oZCOhIQDgxo-`,
  Ki = `-G-r65tUoo0-`,
  qi = `qVhohSfcErA-`,
  Ji = `GqNlebj1uds-`,
  Yi = `oqhyMK1Krt0-`,
  Xi = `GRw4r5TpD5s-`,
  Zi = `mspnwaz0EAg-`,
  Qi = `_06Z7Ej-J6OU-`,
  $i = `lO9B4Ti6gBk-`,
  ea = `lkVpo86MFuI-`,
  ta = `chTH6btujQ0-`,
  na = `_96v5CHkkJJY-`,
  ra = `GxypNLhVZWE-`,
  ia = `_-4JZsb8K2FY-`,
  aa = `BD3vXqZ-6yI-`,
  oa = `l9by-6sJDpM-`,
  sa = `LCYi5cxHqgI-`,
  ca = `ZuMhm9DQqbw-`,
  la = `eASrfjoxe3o-`,
  ua = `ppO76q5Y-Zg-`,
  da = `WWolAsqP274-`,
  fa = `mP8HbLoIUo0-`,
  pa = `BuCaaYRb4Cg-`,
  ma = `bYNmqkeEJGc-`,
  ha = `_4xLBehMPMIU-`,
  ga = `XiCMCQH8z2U-`,
  _a = `_3wT3W-azVyE-`,
  va = `EpyWQfQU-D4-`,
  ya = `FDvyBhD2AA0-`,
  ba = `RIck6AI1vX8-`,
  xa = `Sndyr6iqn8g-`,
  Sa = `qUsoY9s6daM-`,
  Ca = `tUIs-i3NWoU-`,
  wa = `_8o-dkC5O1co-`,
  Ta = `v7ul8g8zqHs-`,
  Ea = `-cW4bgqyLAo-`,
  Da = `aN31caRmRcQ-`,
  Oa = `tobj1evrU4w-`,
  ka = `NqZ9uMSo13A-`,
  Aa = `RAahmG4F6sc-`;
function ja(e) {
  return e?.is_coming_soon
    ? Ma(
        e.coming_soon_display,
        e.steam_release_date,
        e.custom_release_date_message,
      )
    : e?.steam_release_date
      ? Et(e.steam_release_date)
      : ``;
}
function Ma(e, t, n) {
  switch (e) {
    case `date_full`:
      return Et(t);
    case `date_month`:
      return We(new Date(t * 1e3));
    case `date_quarter`:
      return ct(new Date(t * 1e3));
    case `date_year`:
      return ue(new Date(t * 1e3));
    case `text_comingsoon`:
      return n || M.Localize(`#Store_ComingSoon_ComingSoon`);
    case `text_tba`:
      return n || M.Localize(`#Store_ComingSoon_TBA`);
    default:
      return ``;
  }
}
function Na(e) {
  if (!e) return ``;
  if (e && e.is_coming_soon) {
    if (e.coming_soon_display) return xn(e);
    if (e.custom_release_date_message) return e.custom_release_date_message;
    let t = e.steam_release_date;
    return t
      ? e.is_abridged_release_date
        ? We(new Date(t * 1e3))
        : Et(t)
      : ``;
  }
  let t = e.steam_release_date;
  return ((t ||= e.original_release_date), t ? Et(t) : ``);
}
function Pa(e, t = !1) {
  if (e.is_coming_soon && !t) return 0;
  let n = e.steam_release_date;
  return ((n ||= e.original_release_date), n);
}
var Fa = 7;
function Ia(e, t) {
  if (!e) return !1;
  let n = Pa(e);
  return n ? !e.is_coming_soon && n + Fa * At.PerDay > t : !1;
}
function La(e, t) {
  return !!(e && e.is_coming_soon && t && t.packageid);
}
function Ra(e, t) {
  return !!(e && t && t.packageid);
}
async function za(e, t) {
  throw new rr(20, `Owned packages must be seeded by the page`);
}
function Ba() {
  let e = hn(),
    t = Ot.accountid;
  return p(Va(e, t));
}
function Va(e, t) {
  return {
    queryKey: Ua(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await za(e, t);
      return new Set(n);
    },
    retry: !1,
    staleTime: 1 / 0,
  };
}
function Ha(e) {
  let t = s(),
    n = Ot.accountid;
  return R.useCallback(
    (r) => {
      t.setQueryData(Ua(n), (t) =>
        t ? new Set([...t.values(), ...r]) : e ? new Set(r) : void 0,
      );
    },
    [t, n, e],
  );
}
function Ua(e) {
  return [`AccountOwnedPackages`, e ?? 0];
}
function Wa(e) {
  let t = hn(),
    n = gr(),
    r = Ha();
  return f({
    mutationFn: () => Ga(t, e),
    onSuccess(e) {
      let [
        t,
        { packageids_added: i, appids_added: a, purchase_result_detail: o },
      ] = e;
      (a && n(a), i && r(i));
    },
  });
}
async function Ga(e, t) {
  let n = Zn.Init(Gt);
  n.Body().set_item_id(Wn.fromObject(t));
  let r = await Rn.AddFreeLicense(e, n);
  return [r.GetEResult(), r.Body().toObject()];
}
var Ka = `PFP2RDjCi0w-`,
  qa = `Cbfoq6WaXq4-`,
  Ja = `_4lcICEhYuQw-`,
  Ya = `unoV6P6DXbM-`,
  Xa = `p8d03I0RAAs-`,
  Za = `brHZRAeRCnw-`,
  Qa = `hATzo-Hjaaw-`,
  $a = `_7vEy4qHpqHo-`,
  eo = `KoUJweWUwjY-`,
  to = `XAGO1LWGig0-`,
  no = `uN9-XHR7odQ-`,
  ro = `CnbkzZzYDxs-`,
  io = `_8UjVVV-S-j8-`,
  ao = `k0yt-Gxhbs4-`,
  oo = `io6uTUtzW-A-`,
  so = `_58-zzK2uRws-`,
  co = `mGygcOFcFcQ-`,
  lo = `mW8gl4NPYGg-`,
  uo = `X9907eDQcow-`,
  fo = `GwjmtMACpAo-`,
  po = `S8JsHzHuIMA-`,
  mo = `_4nNWbL6J2cI-`,
  ho = `Djw7Ta0NL0Q-`,
  go = `u-mW6oZelJ4-`,
  _o = `j0BUhYRjGwM-`,
  vo = `I-L7P5K0HUM-`,
  yo = `VYzpavMEA5M-`,
  bo = `iXn31HpcmTo-`;
function xo(e) {
  let { id: t, bTruncateTotalReviews: n, bShowTooltip: r } = e,
    { data: i } = Ae(t),
    { data: a } = nt(t),
    o = sr(t),
    { data: s } = nt(o),
    { data: c } = tn();
  if (!i || !a || (a.type == 1 && !v(s))) return null;
  let l = i.summary_unfiltered || i.summary_filtered,
    u = `#ReviewScore_UserReviewScoreAria`,
    d = !1,
    f = M.Localize(`#Language_` + F.LANGUAGE);
  if (
    (So(c?.preferences?.review_score_preference) &&
      (i.summary_language_specific
        ? ((d = !0),
          (u = `#ReviewScore_UserReviewScoreAria_LanguageSpecific`),
          (l = i.summary_language_specific))
        : (l = i.summary_filtered)),
    !l || !l.review_score)
  )
    return null;
  let p = ho;
  p =
    l.review_score > 0 && l.review_score < 5
      ? go
      : l.review_score == 5
        ? _o
        : vo;
  let m = `${F.STORE_BASE_URL}app/${a.appid}/#app_reviews_hash`,
    h = (0, z.jsxs)(`div`, {
      className: I(mo, p),
      children: [
        (0, z.jsx)(`div`, {
          className: yo,
          "aria-label": M.Localize(u, l.review_score_label, f),
          children: l.review_score_label,
        }),
        (0, z.jsxs)(`div`, {
          className: po,
          "aria-label": M.Localize(
            `#GameHover_UserReviewCount`,
            l.review_count.toLocaleString(it()),
          ),
          children: [
            `(`,
            n
              ? `(` + l.review_count.toLocaleString(it()) + `)`
              : d
                ? M.Localize(
                    `#GameHover_UserReviewCount_Lang`,
                    l.review_count.toLocaleString(it()),
                    f,
                  )
                : M.Localize(
                    `#GameHover_UserReviewCount`,
                    l.review_count.toLocaleString(it()),
                  ),
            `)`,
          ],
        }),
        !n &&
          (0, z.jsxs)(`div`, {
            className: `ZBPprMOYoMs-`,
            children: [` `, M.Localize(`#GameHover_UserReviewsHeader`)],
          }),
      ],
    }),
    g = `#ReviewScore_PercentPositive`;
  if (a.item_type === 2) g = `#ReviewScore_PercentPositive_bundle`;
  else if (a.item_type === 0)
    switch (a.type) {
      case 6:
        g = `#ReviewScore_PercentPositive_software`;
        break;
      case 7:
        g = `#ReviewScore_PercentPositive_video`;
        break;
      case 10:
        g = `#ReviewScore_PercentPositive_hardware`;
        break;
      case 8:
        g = `#ReviewScore_PercentPositive_series`;
    }
  return (0, z.jsx)(tU, {
    url: m,
    className: I(fo, `ReviewScore`),
    children:
      r && l.percent_positive != null && l.review_count != null && g
        ? (0, z.jsx)(Ct, {
            bTopmost: !0,
            toolTipContent: M.Localize(g, l.percent_positive, l.review_count),
            children: h,
          })
        : h,
  });
}
function So(e) {
  return e === void 0 || e === 0 || e === 2;
}
async function Co(e, t) {
  let n = qt(P.STORE_BASE_URL, t, Vn.country_code);
  return (await (await fetch(n)).json()).rgWishlist || [];
}
function wo() {
  let e = hn(),
    t = Ot.accountid;
  return p(To(e, t));
}
function To(e, t) {
  return {
    queryKey: Oo(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await Co(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function Eo(e) {
  let { data: t } = wo();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function Do() {
  let e = s(),
    t = Ot.accountid;
  return (n, r) => {
    e.setQueryData(Oo(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function Oo(e) {
  return [`AccountWishlistApps`, e ?? 0];
}
function ko(e, t, n) {
  let r = Do(),
    i = Vn.accountid;
  return f({
    mutationKey: [`useUpdateWishlist`, e, i, t],
    mutationFn: async () => {
      if (e == null) return;
      let r =
          P.STORE_BASE_URL +
          `api/` +
          (t ? `addtowishlist` : `removefromwishlist`),
        i = new FormData();
      (i.append(`appid`, `` + e),
        i.append(`sessionid`, rt()),
        n && i.append(`snr`, n));
      let a = await fetch(r, {
        method: `POST`,
        body: i,
        credentials: `include`,
      });
      if (!a.ok)
        throw Error(
          `Wishlist ${t ? `add` : `remove`} of appid ${e} failed (${a.status})`,
        );
    },
    onMutate: () => {
      e != null && r(t ? [e] : void 0, t ? void 0 : [e]);
    },
    onError: () => {
      e != null && r(t ? void 0 : [e], t ? [e] : void 0);
    },
    onSuccess: () => {
      Zt();
    },
  });
}
function Ao(e) {
  let {
      id: t,
      snr: n,
      classOverride: r,
      styleOverride: i,
      bShowInGamepadUI: a,
    } = e,
    { data: o } = nt(t),
    { elDialogElement: s, fnShowLogonDialog: c } = mB(),
    [l, u] = (0, R.useState)(() => {
      if (o && (o.type == 1 || o.type == 12) && o.related_items?.parent_appid)
        return o.related_items?.parent_appid;
      if (t && `appid` in t) return t.appid;
    }),
    d = cr(l),
    f = Eo(l),
    { bIsOwned: p } = vr(d),
    [m, h] = (0, R.useState)(!1),
    g = w(`GameHoverWishlistButton`),
    { mutateAsync: _ } = ko(l, !f, n);
  (0, R.useEffect)(() => {
    t &&
      `appid` in t &&
      (o?.type == 1 || o?.type == 12) &&
      u(o.related_items?.parent_appid || t.appid);
  }, [o, t]);
  let v = (0, R.useCallback)(
    async (e) => {
      Vn.logged_in
        ? (e.preventDefault(),
          e.stopPropagation(),
          h(!0),
          await _(),
          g.token.reason || h(!1))
        : c();
    },
    [g.token.reason, c, _],
  );
  return p && o?.type != 10
    ? null
    : (0, z.jsxs)(ln, {
        className: I(eo, a && `B7tWNVp-vns-`, r),
        onActivate: v,
        style: i,
        children: [
          f ? (0, z.jsx)(Hn, {}) : (0, z.jsx)(Xn, {}),
          (0, z.jsx)(`div`, {
            className: I(to, m && `u8yceEMO9LM-`, `WishlistButtonText`),
            children: M.Localize(
              f ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
            ),
          }),
          s,
        ],
      });
}
var jo = class e {
  m_mapAppResults = new Map();
  m_mapAppCallbackList = new Map();
  m_mapAppResultsPromises = new Map();
  GetCompatabilityResultForApp(e) {
    return this.m_mapAppResults.get(e);
  }
  BHasCompatabilityResultForApp(e) {
    return this.m_mapAppResults.has(e);
  }
  GetCallbackForAppList(e) {
    return (
      this.m_mapAppCallbackList.has(e) ||
        this.m_mapAppCallbackList.set(e, new je()),
      this.m_mapAppCallbackList.get(e)
    );
  }
  AddCompatabilityResult(e) {
    e.appid &&
      (this.m_mapAppResults.set(e.appid, e),
      this.GetCallbackForAppList(e.appid).Dispatch(e));
  }
  async LoadAppCompabitilityResult(e) {
    return this.m_mapAppResults.has(e)
      ? !0
      : (this.m_mapAppResultsPromises.has(e) ||
          this.m_mapAppResultsPromises.set(
            e,
            this.InternalLoadAppCompatability(e),
          ),
        this.m_mapAppResultsPromises.get(e));
  }
  async InternalLoadAppCompatability(e) {
    let t = null;
    try {
      let n = { nAppID: e, l: P.LANGUAGE, cc: P.COUNTRY },
        r = P.STORE_BASE_URL + `saleaction/ajaxgetdeckappcompatibilityreport`,
        i = await Nr.default.get(r, { params: n, withCredentials: !0 });
      if (i?.status == 200 && i.data?.success == 1 && i.data?.results)
        return (this.AddCompatabilityResult(i.data.results), !0);
      t = me(i);
    } catch (e) {
      t = me(e);
    }
    return (
      console.error(
        `CDeckVerifiedDetailsStore.InternalLoadAppCompatability failed: ` +
          t?.strErrorMsg,
        t,
      ),
      !1
    );
  }
  static s_Singleton;
  static Get() {
    return ((e.s_Singleton ||= new e()), e.s_Singleton);
  }
  constructor() {
    if (document.getElementById(`application_config`)) {
      let t = ie(`hardwarecompatibility`, `application_config`);
      e.ValidateCompatabilityResult(t) && this.AddCompatabilityResult(t);
    }
  }
  static ValidateCompatabilityResult(e) {
    let t = e;
    return (
      t &&
      typeof t.appid == `number` &&
      typeof t.resolved_category == `number` &&
      typeof t.resolved_items == `object`
    );
  }
};
He([bt], jo.prototype, `LoadAppCompabitilityResult`, null);
function Mo(e) {
  let [t, n] = R.useState(jo.Get().GetCompatabilityResultForApp(e));
  return (
    Gn(jo.Get().GetCallbackForAppList(e), n),
    R.useEffect(() => {
      jo.Get().BHasCompatabilityResultForApp(e) ||
        jo
          .Get()
          .LoadAppCompabitilityResult(e)
          .then(() => n(jo.Get().GetCompatabilityResultForApp(e)));
    }, [e]),
    t
  );
}
var B = (function (e) {
  return (
    (e[(e.A = 0)] = `A`),
    (e[(e.B = 1)] = `B`),
    (e[(e.X = 2)] = `X`),
    (e[(e.Y = 3)] = `Y`),
    (e[(e.Left = 4)] = `Left`),
    (e[(e.Right = 5)] = `Right`),
    (e[(e.Up = 6)] = `Up`),
    (e[(e.Down = 7)] = `Down`),
    (e[(e.HomeMenu = 8)] = `HomeMenu`),
    (e[(e.QuickMenu = 9)] = `QuickMenu`),
    (e[(e.Select = 10)] = `Select`),
    (e[(e.Start = 11)] = `Start`),
    (e[(e.LeftBumper = 12)] = `LeftBumper`),
    (e[(e.RightBumper = 13)] = `RightBumper`),
    (e[(e.LeftTrigger = 14)] = `LeftTrigger`),
    (e[(e.RightTrigger = 15)] = `RightTrigger`),
    (e[(e.LeftStick = 16)] = `LeftStick`),
    (e[(e.LeftStickClick = 17)] = `LeftStickClick`),
    (e[(e.RightStick = 18)] = `RightStick`),
    (e[(e.RightStickClick = 19)] = `RightStickClick`),
    (e[(e.LeftTrackpad = 20)] = `LeftTrackpad`),
    (e[(e.LeftTrackpadClick = 21)] = `LeftTrackpadClick`),
    (e[(e.RightTrackpad = 22)] = `RightTrackpad`),
    (e[(e.RightTrackpadClick = 23)] = `RightTrackpadClick`),
    (e[(e.RearLeftUpper = 24)] = `RearLeftUpper`),
    (e[(e.RearLeftLower = 25)] = `RearLeftLower`),
    (e[(e.RearRightUpper = 26)] = `RearRightUpper`),
    (e[(e.RearRightLower = 27)] = `RearRightLower`),
    e
  );
})({});
function No(e) {
  switch (e) {
    case L.OK:
      return 0;
    case L.CANCEL:
      return 1;
    case L.SECONDARY:
      return 2;
    case L.OPTIONS:
      return 3;
    case L.DIR_LEFT:
      return 4;
    case L.DIR_RIGHT:
      return 5;
    case L.DIR_UP:
      return 6;
    case L.DIR_DOWN:
      return 7;
    case L.STEAM_GUIDE:
      return 8;
    case L.STEAM_QUICK_MENU:
      return 9;
    case L.SELECT:
      return 10;
    case L.START:
      return 11;
    case L.BUMPER_LEFT:
      return 12;
    case L.BUMPER_RIGHT:
      return 13;
    case L.TRIGGER_LEFT:
      return 14;
    case L.TRIGGER_RIGHT:
      return 15;
    case L.REAR_LEFT_UPPER:
      return 24;
    case L.REAR_LEFT_LOWER:
      return 25;
    case L.REAR_RIGHT_UPPER:
      return 26;
    case L.REAR_RIGHT_LOWER:
      return 27;
    default:
      return 0;
  }
}
var Po = class e {
  m_boundActions = new Map();
  m_defaultActions = new Map();
  m_globalActionsSubscriptions = [];
  m_actionDescriptionChangedCallbackRegistrations = [];
  static Log = new ut(`ActionDescription`).Debug;
  m_nodeForCurrentDescriptions;
  InitContext(e) {
    let t = new we();
    return (
      t.Push(
        e.FocusChangedCallbacks.Register(this.OnFocusNavigationChanged)
          .Unregister,
      ),
      t.Push(
        e.NavTreeActivatedOrReactivatedCallbacks.Register(
          this.OnActiveNavTreeChanged,
        ).Unregister,
      ),
      t.GetUnregisterFunc()
    );
  }
  BFromActiveNavTree(e, t) {
    let n = t?.Tree;
    return ((n ||= e?.Tree), n && n.Controller.IsActiveFocusNavTree(n));
  }
  OnFocusNavigationChanged(e, t, n) {
    this.BFromActiveNavTree(t, n) && this.UpdateForFocusedNode(n);
  }
  OnActiveNavTreeChanged(e) {
    if (!e.Controller.IsActiveFocusNavTree(e)) return;
    let t = e.GetLastFocusedNode() ?? e.Root;
    t != this.m_nodeForCurrentDescriptions && this.UpdateForFocusedNode(t);
  }
  UpdateForFocusedNode(e) {
    if (
      ((this.m_nodeForCurrentDescriptions = e),
      this.m_actionDescriptionChangedCallbackRegistrations.forEach((e) =>
        e.Unregister(),
      ),
      (this.m_actionDescriptionChangedCallbackRegistrations = []),
      e)
    ) {
      let t = () =>
        this.SetActionDescriptionsFromMap(
          e.GetActiveActionDescriptions() ?? {},
        );
      t();
      for (let n = e; n != null; n = n.Parent)
        this.m_actionDescriptionChangedCallbackRegistrations.push(
          n.ActionDescriptionChangedCallbackList.Register(() => t()),
        );
    } else this.SetActionDescriptionsFromMap({ [L.OK]: null });
  }
  GetActionDescription(t) {
    let n;
    return (
      this.m_boundActions.has(t)
        ? (n = this.m_boundActions.get(t))
        : this.m_defaultActions.has(t) && (n = this.m_defaultActions.get(t)),
      e.Log(`GetActionDescription`, n),
      n
    );
  }
  GetActionDescriptions() {
    let e = Object.values(B).filter((e) => typeof e == `number`),
      t = {};
    for (let n of e) t[n] = this.GetActionDescription(n);
    return t;
  }
  Notify() {
    let e = this.GetActionDescriptions();
    this.m_globalActionsSubscriptions.forEach((t) => t(e));
  }
  IsDefaultAction(e) {
    return this.GetActionDescription(e) === this.m_defaultActions.get(e);
  }
  SetDefaultAction(e, t) {
    return (
      t === void 0
        ? this.m_defaultActions.delete(e)
        : this.m_defaultActions.set(e, t),
      !this.m_boundActions.has(e)
    );
  }
  SetDefaultActionsFromMap(e) {
    let t = !1;
    for (let n in e) {
      let r = parseInt(n);
      this.SetDefaultAction(r, e[r]) && (t = !0);
    }
    t && this.Notify();
  }
  ClearActions() {
    (e.Log(`ClearActionDescriptions`),
      this.m_boundActions.clear(),
      this.Notify());
  }
  SetActionsFromMap(e) {
    let t = !1,
      n = Array.from(this.m_boundActions.keys());
    for (let r of n) e[r] === void 0 && this.SetAction(r, void 0) && (t = !0);
    for (let n in e) {
      let r = parseInt(n);
      this.SetAction(r, e[r]) && (t = !0);
    }
    t && this.Notify();
  }
  SetActionDescriptionsFromMap(e) {
    let t = {};
    for (let n in e) {
      let r = parseInt(n),
        i = No(r);
      t[i] = e[r];
    }
    this.SetActionsFromMap(t);
  }
  SetAction(t, n) {
    if ((e.Log(`SetActionDescription`, t, n), n === void 0)) {
      if (!this.m_boundActions.has(t)) return !1;
      this.m_boundActions.delete(t);
    } else {
      if (Vt(this.m_boundActions.get(t), n)) return !1;
      this.m_boundActions.set(t, n);
    }
    return !0;
  }
  SubscribeToActions(e) {
    return (
      this.m_globalActionsSubscriptions.push(e),
      e(this.GetActionDescriptions()),
      () => {
        let t = this.m_globalActionsSubscriptions?.indexOf(e);
        this.m_globalActionsSubscriptions && t != null && t >= 0
          ? this.m_globalActionsSubscriptions.splice(t, 1)
          : console.error(
              `Unsubscribing an actions handler that was already unsubscribed`,
            );
      }
    );
  }
};
(He([bt], Po.prototype, `OnFocusNavigationChanged`, null),
  He([bt], Po.prototype, `OnActiveNavTreeChanged`, null),
  He([bt], Po.prototype, `SetActionDescriptionsFromMap`, null));
var Fo = `-h3mdabpWCk-`,
  Io = `z7OUnz8a2LE-`,
  Lo = `-JC2DTwjTLY-`,
  Ro = `gBGbg1Aq4kE-`,
  zo = `S0TPsOpik3c-`,
  Bo = `_6t-T9facds8-`,
  Vo = `_9ltdnbqRBVs-`,
  Ho = `KMiaP3xxJic-`,
  Uo = `-f6--J8iYK8-`,
  Wo = `tlFgqgPT5b8-`,
  Go = `LR3Stix-A4Y-`,
  Ko = `zxsM3zpa9JU-`,
  qo = `c3ZsONtZeOk-`,
  Jo = `uboNutS5k7k-`,
  Yo = `_31u9Wgg0oro-`,
  Xo = `m9cG66kvPgg-`,
  Zo = `WGUFkBLPn8E-`,
  Qo = `WFe7p-8r4T4-`,
  $o = `_5sgfQl5H11I-`,
  es = `ifxfOQVR6MY-`,
  ts = `nPQe387f344-`,
  ns = `Z8zypUObkYE-`,
  rs = `_1GTC22hSCmY-`,
  is = `toY0I97PWjg-`,
  as = `_1ArCdbgfzNY-`,
  os = `IBiSpw0atyM-`,
  ss = `mDOopKELMBg-`,
  cs = `C8-HMz-fVag-`,
  ls = `lDDPCoGwJAU-`,
  us = `QvYBOAdgkPk-`,
  ds = `ZAn1-qmM-Iw-`,
  fs = `dNQ1ofH4Cbs-`,
  ps = `rmDLW23h1zQ-`,
  ms = `ahykWXj-Rak-`,
  hs = `TxQs7xIpj2A-`,
  gs = `xWg9uSQknuo-`,
  _s = `_2csr6Pw04gI-`,
  vs = `CT05Js5REus-`,
  ys = `CAlqxCfPEko-`,
  bs = `hH8fUDD712k-`,
  xs = `c1DR5MyoXPo-`,
  Ss = `KnF9XvfALGs-`,
  Cs = `voFKnm6BHlI-`,
  ws = `XRBn-My-JYo-`,
  Ts = `MnMGQkxU8KU-`,
  Es = `BPpr5dZdGc4-`,
  V = `QeQ6K92V-ik-`,
  H = `jlNNNIYiAYQ-`,
  Ds = `dXUGCsJI9Qw-`,
  Os = `N88ag1lENrA-`,
  ks = `-m9XoDI2d0Q-`,
  As = `IulAmRs78UQ-`,
  js = `X86r8MkR480-`,
  Ms = (function (e) {
    return (
      (e[(e.Knockout = 0)] = `Knockout`),
      (e[(e.Light = 1)] = `Light`),
      (e[(e.Dark = 2)] = `Dark`),
      e
    );
  })({}),
  Ns = (function (e) {
    return (
      (e[(e.Small = 0)] = `Small`),
      (e[(e.Medium = 1)] = `Medium`),
      (e[(e.Large = 2)] = `Large`),
      e
    );
  })({});
function Ps(e) {
  switch (e) {
    case 0:
      return ks;
    case 1:
      return As;
    case 2:
      return js;
    default:
      return As;
  }
}
function Fs(e) {
  switch (e) {
    case 0:
      return Os;
    case 1:
      return Ds;
    case 2:
      return Es;
    default:
      return Ds;
  }
}
function Is(e) {
  let t = I(
      e.size == null ? Ps(1) : Ps(e.size),
      e.type == null ? Fs(1) : Fs(e.type),
      e.additionalClassName,
    ),
    n = e.type == 0;
  switch (e.button) {
    case B.A:
      return (0, z.jsx)(Ls, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_A`),
      });
    case B.B:
      return (0, z.jsx)(Rs, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_B`),
      });
    case B.X:
      return (0, z.jsx)(zs, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_X`),
      });
    case B.Y:
      return (0, z.jsx)(Bs, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_Y`),
      });
    case B.Left:
      return (0, z.jsx)(Us, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_DpadLeft`),
      });
    case B.Right:
      return (0, z.jsx)(Ws, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_DpadRight`),
      });
    case B.Up:
      return (0, z.jsx)(Vs, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_DpadUp`),
      });
    case B.Down:
      return (0, z.jsx)(Hs, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_DpadDown`),
      });
    case B.HomeMenu:
      return (0, z.jsx)(Gs, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_Steam`),
      });
    case B.QuickMenu:
      return (0, z.jsx)(Ks, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_QAM`),
      });
    case B.Select:
      return (0, z.jsx)(qs, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_View`),
      });
    case B.Start:
      return (0, z.jsx)(Js, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_Menu`),
      });
    case B.LeftBumper:
      return (0, z.jsx)(Ys, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_L1`),
      });
    case B.RightBumper:
      return (0, z.jsx)(Xs, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_R1`),
      });
    case B.LeftTrigger:
      return (0, z.jsx)(Zs, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_L2`),
      });
    case B.RightTrigger:
      return (0, z.jsx)(Qs, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_R2`),
      });
    case B.LeftStick:
      return (0, z.jsx)(nc, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_LS`),
      });
    case B.RightStick:
      return (0, z.jsx)(tc, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_RS`),
      });
    case B.LeftStickClick:
      return (0, z.jsx)($s, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_L3`),
      });
    case B.RightStickClick:
      return (0, z.jsx)(ec, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_R3`),
      });
    case B.LeftTrackpad:
      return (0, z.jsx)(sc, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_LPad`),
      });
    case B.RightTrackpad:
      return (0, z.jsx)(lc, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_RPad`),
      });
    case B.LeftTrackpadClick:
      return (0, z.jsx)(cc, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_LPad_Click`),
      });
    case B.RightTrackpadClick:
      return (0, z.jsx)(uc, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_RPad_Click`),
      });
    case B.RearLeftUpper:
      return (0, z.jsx)(rc, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_L4`),
      });
    case B.RearRightUpper:
      return (0, z.jsx)(ac, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_R4`),
      });
    case B.RearLeftLower:
      return (0, z.jsx)(ic, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_L5`),
      });
    case B.RearRightLower:
      return (0, z.jsx)(oc, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_R5`),
      });
    default:
      return (0, z.jsx)(dc, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_Default`),
      });
  }
}
function Ls({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM21.2697 24H24.1317L19.2717 11.4H16.6077L11.8917 24H14.6457L15.4737 21.552H20.4057L21.2697 24ZM16.1937 19.446L17.9217 14.406L19.6857 19.446H16.1937Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`circle`, {
            className: V,
            cx: `18`,
            cy: `18`,
            r: `18`,
            fill: `currentColor`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M24.1317 24H21.2697L20.4057 21.552H15.4737L14.6457 24H11.8917L16.6077 11.4H19.2717L24.1317 24ZM17.9217 14.406L16.1937 19.446H19.6857L17.9217 14.406Z`,
          }),
        ],
      });
}
function Rs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM23.173 20.382C23.173 18.81 22.369 17.778 20.761 17.286C21.349 16.974 21.775 16.584 22.039 16.116C22.303 15.648 22.435 15.132 22.435 14.568C22.435 13.56 22.081 12.78 21.373 12.228C20.665 11.676 19.573 11.4 18.097 11.4H13.435V24H18.601C19.993 24 21.103 23.682 21.931 23.046C22.759 22.41 23.173 21.522 23.173 20.382ZM16.117 16.674V13.596H17.881C19.165 13.596 19.807 14.082 19.807 15.054C19.807 15.57 19.645 15.972 19.321 16.26C18.997 16.536 18.535 16.674 17.935 16.674H16.117ZM19.843 21.372C19.507 21.672 19.003 21.822 18.331 21.822H16.117V18.582H18.403C19.039 18.582 19.525 18.72 19.861 18.996C20.197 19.26 20.365 19.656 20.365 20.184C20.365 20.676 20.191 21.072 19.843 21.372Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`circle`, {
            className: V,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M20.761 17.286C22.369 17.778 23.173 18.81 23.173 20.382C23.173 21.522 22.759 22.41 21.931 23.046C21.103 23.682 19.993 24 18.601 24H13.435V11.4H18.097C19.573 11.4 20.665 11.676 21.373 12.228C22.081 12.78 22.435 13.56 22.435 14.568C22.435 15.132 22.303 15.648 22.039 16.116C21.775 16.584 21.349 16.974 20.761 17.286ZM16.117 13.596V16.674H17.935C18.535 16.674 18.997 16.536 19.321 16.26C19.645 15.972 19.807 15.57 19.807 15.054C19.807 14.082 19.165 13.596 17.881 13.596H16.117ZM18.331 21.822C19.003 21.822 19.507 21.672 19.843 21.372C20.191 21.072 20.365 20.676 20.365 20.184C20.365 19.656 20.197 19.26 19.861 18.996C19.525 18.72 19.039 18.582 18.403 18.582H16.117V21.822H18.331Z`,
          }),
        ],
      });
}
function zs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM23.7101 11.4H20.3621L17.8601 15.45L15.3581 11.4H12.1001L16.4021 17.484L11.9201 24H15.0881L17.9141 19.41L20.8661 24H24.1061L19.2821 17.394L23.7101 11.4Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`circle`, {
            className: V,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M20.3621 11.4H23.7101L19.2821 17.394L24.1061 24H20.8661L17.9141 19.41L15.0881 24H11.9201L16.4021 17.484L12.1001 11.4H15.3581L17.8601 15.45L20.3621 11.4Z`,
          }),
        ],
      });
}
function Bs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM16.69 24H19.318V18.996L23.71 11.4H20.848L18.094 16.44L15.358 11.4H12.298L16.69 18.978V24Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`circle`, {
            className: V,
            cx: `18`,
            cy: `18`,
            r: `18`,
            fill: `currentColor`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M19.318 24H16.69V18.978L12.298 11.4H15.358L18.094 16.44L20.848 11.4H23.71L19.318 18.996V24Z`,
          }),
        ],
      });
}
function Vs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM25 20.1998L19.5555 14.7554V27.1998H16.4444V14.7554L11 20.1998L8.66663 17.8665L18 8.66661L27.3333 17.8665L25 20.1998Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`circle`, {
            className: V,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M19.5555 14.7554L25 20.1998L27.3333 17.8665L18 8.66661L8.66663 17.8665L11 20.1998L16.4444 14.7554V27.1998H19.5555V14.7554Z`,
          }),
        ],
      });
}
function Hs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM10.9999 15.6666L16.4444 21.1111L16.4444 8.66663H19.5555L19.5555 21.1111L24.9999 15.6666L27.3333 18L17.9999 27.1998L8.66659 18L10.9999 15.6666Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`circle`, {
            className: V,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M16.4444 21.1111L10.9999 15.6666L8.66659 18L17.9999 27.1998L27.3333 18L24.9999 15.6666L19.5555 21.1111L19.5555 8.66663L16.4444 8.66663L16.4444 21.1111Z`,
          }),
        ],
      });
}
function Us({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.2664 10.9332L14.8219 16.3777H27.2664V19.4888H14.8219L20.2664 24.9332L17.933 27.2665L8.73314 17.9332L17.933 8.59988L20.2664 10.9332Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`circle`, {
            className: V,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M14.8219 16.3777L20.2664 10.9333L17.933 8.59994L8.73314 17.9332L17.933 27.2666L20.2664 24.9333L14.8219 19.4888L27.2664 19.4888L27.2664 16.3777L14.8219 16.3777Z`,
          }),
        ],
      });
}
function Ws({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM15.7332 24.9332L21.1776 19.4888H8.73315V16.3777H21.1776L15.7332 10.9332L18.0665 8.59991L27.2664 17.9333L18.0665 27.2666L15.7332 24.9332Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`circle`, {
            className: V,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M21.1776 19.4887L15.7332 24.9332L18.0665 27.2665L27.2664 17.9332L18.0665 8.59985L15.7332 10.9332L21.1776 16.3776L8.73315 16.3776L8.73315 19.4887L21.1776 19.4887Z`,
          }),
        ],
      });
}
function Gs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 100 36`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          d: `M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36H82C91.9411 36 100 27.9411 100 18C100 8.05888 91.9411 0 82 0H18ZM21.8011 11.5C22.6531 11.5 23.4391 11.62 24.1591 11.86C24.8791 12.1 25.4851 12.394 25.9771 12.742L24.8611 14.722C24.4171 14.41 23.9191 14.158 23.3671 13.966C22.8271 13.774 22.3111 13.678 21.8191 13.678C21.2191 13.678 20.7511 13.804 20.4151 14.056C20.0791 14.296 19.9111 14.632 19.9111 15.064C19.9111 15.496 20.1091 15.838 20.5051 16.09C20.9011 16.33 21.5071 16.594 22.3231 16.882C23.1631 17.182 23.8351 17.458 24.3391 17.71C24.8431 17.962 25.2811 18.334 25.6531 18.826C26.0371 19.306 26.2291 19.924 26.2291 20.68C26.2291 21.484 26.0191 22.18 25.5991 22.768C25.1911 23.356 24.6151 23.812 23.8711 24.136C23.1271 24.448 22.2751 24.604 21.3151 24.604C20.5351 24.604 19.7371 24.502 18.9211 24.298C18.1171 24.082 17.4091 23.794 16.7971 23.434L17.6251 21.238C18.2011 21.55 18.8071 21.802 19.4431 21.994C20.0911 22.174 20.7271 22.264 21.3511 22.264C22.0351 22.264 22.5451 22.132 22.8811 21.868C23.2291 21.604 23.4031 21.256 23.4031 20.824C23.4031 20.392 23.2171 20.056 22.8451 19.816C22.4731 19.576 21.9031 19.33 21.1351 19.078C20.2711 18.802 19.5751 18.538 19.0471 18.286C18.5191 18.022 18.0631 17.644 17.6791 17.152C17.3071 16.648 17.1211 15.994 17.1211 15.19C17.1211 14.446 17.3131 13.798 17.6971 13.246C18.0931 12.682 18.6451 12.25 19.3531 11.95C20.0611 11.65 20.8771 11.5 21.8011 11.5ZM35.2486 24.388H32.6026V14.056H28.7866V11.788H39.0646V14.056H35.2486V24.388ZM50.8108 11.788H42.3148V24.388H50.8108V22.102H44.9608V19.15H50.0008V16.882H44.9608V14.038H50.8108V11.788ZM65.8582 24.388H62.9962L62.1322 21.94H57.2002L56.3722 24.388H53.6182L58.3342 11.788H60.9982L65.8582 24.388ZM59.6482 14.794L57.9202 19.834H61.4122L59.6482 14.794ZM79.7729 11.788L75.8489 20.734L71.6009 11.788H69.0629V24.388H71.4749V16.468L74.9309 24.028H76.5329L79.9169 16.378V24.388H82.4549V11.788H79.7729Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 100 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M0 18C0 8.05888 8.05888 0 18 0H82C91.9411 0 100 8.05888 100 18C100 27.9411 91.9411 36 82 36H18C8.05888 36 0 27.9411 0 18Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M21.8011 11.5C22.6531 11.5 23.4391 11.62 24.1591 11.86C24.8791 12.1 25.4851 12.394 25.9771 12.742L24.8611 14.722C24.4171 14.41 23.9191 14.158 23.3671 13.966C22.8271 13.774 22.3111 13.678 21.8191 13.678C21.2191 13.678 20.7511 13.804 20.4151 14.056C20.0791 14.296 19.9111 14.632 19.9111 15.064C19.9111 15.496 20.1091 15.838 20.5051 16.09C20.9011 16.33 21.5071 16.594 22.3231 16.882C23.1631 17.182 23.8351 17.458 24.3391 17.71C24.8431 17.962 25.2811 18.334 25.6531 18.826C26.0371 19.306 26.2291 19.924 26.2291 20.68C26.2291 21.484 26.0191 22.18 25.5991 22.768C25.1911 23.356 24.6151 23.812 23.8711 24.136C23.1271 24.448 22.2751 24.604 21.3151 24.604C20.5351 24.604 19.7371 24.502 18.9211 24.298C18.1171 24.082 17.4091 23.794 16.7971 23.434L17.6251 21.238C18.2011 21.55 18.8071 21.802 19.4431 21.994C20.0911 22.174 20.7271 22.264 21.3511 22.264C22.0351 22.264 22.5451 22.132 22.8811 21.868C23.2291 21.604 23.4031 21.256 23.4031 20.824C23.4031 20.392 23.2171 20.056 22.8451 19.816C22.4731 19.576 21.9031 19.33 21.1351 19.078C20.2711 18.802 19.5751 18.538 19.0471 18.286C18.5191 18.022 18.0631 17.644 17.6791 17.152C17.3071 16.648 17.1211 15.994 17.1211 15.19C17.1211 14.446 17.3131 13.798 17.6971 13.246C18.0931 12.682 18.6451 12.25 19.3531 11.95C20.0611 11.65 20.8771 11.5 21.8011 11.5Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M35.2486 24.388H32.6026V14.056H28.7866V11.788H39.0646V14.056H35.2486V24.388Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M42.3148 11.788H50.8108V14.038H44.9608V16.882H50.0008V19.15H44.9608V22.102H50.8108V24.388H42.3148V11.788Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M65.8582 24.388H62.9962L62.1322 21.94H57.2002L56.3722 24.388H53.6182L58.3342 11.788H60.9982L65.8582 24.388ZM59.6482 14.794L57.9202 19.834H61.4122L59.6482 14.794Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M75.8489 20.734L79.7729 11.788H82.4549V24.388H79.9169V16.378L76.5329 24.028H74.9309L71.4749 16.468V24.388H69.0629V11.788H71.6009L75.8489 20.734Z`,
          }),
        ],
      });
}
function Ks({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 81 36`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36H61C70.9411 36 79 27.9411 79 18C79 8.05888 70.9411 0 61 0H18ZM21.5 22.5C23.9853 22.5 26 20.4853 26 18C26 15.5147 23.9853 13.5 21.5 13.5C19.0147 13.5 17 15.5147 17 18C17 20.4853 19.0147 22.5 21.5 22.5ZM44 18C44 20.4853 41.9853 22.5 39.5 22.5C37.0147 22.5 35 20.4853 35 18C35 15.5147 37.0147 13.5 39.5 13.5C41.9853 13.5 44 15.5147 44 18ZM57.5 22.5C59.9853 22.5 62 20.4853 62 18C62 15.5147 59.9853 13.5 57.5 13.5C55.0147 13.5 53 15.5147 53 18C53 20.4853 55.0147 22.5 57.5 22.5Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 81 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M0 18C0 8.05888 8.05888 0 18 0H61C70.9411 0 79 8.05888 79 18C79 27.9411 70.9411 36 61 36H18C8.05888 36 0 27.9411 0 18Z`,
          }),
          (0, z.jsx)(`circle`, {
            className: H,
            fill: `currentColor`,
            cx: `21.5`,
            cy: `18`,
            r: `4.5`,
          }),
          (0, z.jsx)(`circle`, {
            className: H,
            fill: `currentColor`,
            cx: `39.5`,
            cy: `18`,
            r: `4.5`,
          }),
          (0, z.jsx)(`circle`, {
            className: H,
            fill: `currentColor`,
            cx: `57.5`,
            cy: `18`,
            r: `4.5`,
          }),
        ],
      });
}
function qs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M12 6C5.37258 6 0 11.3726 0 18C0 24.6274 5.37258 30 12 30H36C42.6274 30 48 24.6274 48 18C48 11.3726 42.6274 6 36 6H12ZM31 11H17V25H31V11Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`rect`, {
            className: V,
            fill: `currentColor`,
            y: `6`,
            width: `48`,
            height: `24`,
            rx: `12`,
          }),
          (0, z.jsx)(`rect`, {
            className: H,
            fill: `currentColor`,
            x: `17`,
            y: `11`,
            width: `14`,
            height: `14`,
          }),
        ],
      });
}
function Js({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M12 6C5.37258 6 0 11.3726 0 18C0 24.6274 5.37258 30 12 30H36C42.6274 30 48 24.6274 48 18C48 11.3726 42.6274 6 36 6H12ZM31 11H17V13.8H31V11ZM17 22.2H31V25H17V22.2ZM31 16.6H17V19.4H31V16.6Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`rect`, {
            className: V,
            fill: `currentColor`,
            y: `6`,
            width: `48`,
            height: `24`,
            rx: `12`,
          }),
          (0, z.jsx)(`rect`, {
            className: H,
            fill: `currentColor`,
            x: `17`,
            y: `11`,
            width: `14`,
            height: `2.8`,
          }),
          (0, z.jsx)(`rect`, {
            className: H,
            fill: `currentColor`,
            x: `17`,
            y: `22.2`,
            width: `14`,
            height: `2.8`,
          }),
          (0, z.jsx)(`rect`, {
            className: H,
            fill: `currentColor`,
            x: `17`,
            y: `16.6`,
            width: `14`,
            height: `2.8`,
          }),
        ],
      });
}
function Ys({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M7.5 0C3.35786 0 0 4.47715 0 10V30C0 31.1046 0.671574 32 1.5 32H34.5C35.3284 32 36 31.1046 36 30V2C36 0.895431 35.3284 0 34.5 0H7.5ZM9.36182 23H17.8218V20.624H12.0078V10.4H9.36182V23ZM25.7635 20.714V10.4H23.7296L19.5896 12.452L20.4356 14.432L23.0816 13.316V20.714H20.1115V23H28.1576V20.714H25.7635Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M0 10C0 4.47715 3.35786 0 7.5 0H34.5C35.3284 0 36 0.895431 36 2V30C36 31.1046 35.3284 32 34.5 32H1.5C0.671574 32 0 31.1046 0 30V10Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M17.8218 23H9.36182V10.4H12.0078V20.624H17.8218V23Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M25.7635 10.4V20.714H28.1576V23H20.1116V20.714H23.0816V13.316L20.4356 14.432L19.5896 12.452L23.7296 10.4H25.7635Z`,
          }),
        ],
      });
}
function Xs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M28.5 0C32.6421 0 36 4.47715 36 10V30C36 31.1046 35.3284 32 34.5 32H1.5C0.671573 32 0 31.1046 0 30V2C0 0.895431 0.671573 0 1.5 0H28.5ZM15.8185 23H18.7525L15.7825 18.23C16.5505 17.894 17.1445 17.402 17.5645 16.754C17.9965 16.106 18.2125 15.296 18.2125 14.324C18.2125 13.088 17.8045 12.128 16.9885 11.444C16.1725 10.748 14.9005 10.4 13.1725 10.4H8.45654V23H11.1025V18.752H12.9745H13.2805L15.8185 23ZM11.1025 16.484V12.65H13.0105C13.8385 12.65 14.4385 12.806 14.8105 13.118C15.1945 13.418 15.3865 13.874 15.3865 14.486C15.3865 15.11 15.1885 15.602 14.7925 15.962C14.4085 16.31 13.8685 16.484 13.1725 16.484H11.1025ZM26.6688 20.714V10.4H24.6348L20.4948 12.452L21.3408 14.432L23.9868 13.316V20.714H21.0168V23H29.0628V20.714H26.6688Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M36 10C36 4.47715 32.6421 0 28.5 0H1.5C0.671574 0 0 0.895431 0 2V30C0 31.1046 0.671574 32 1.5 32H34.5C35.3284 32 36 31.1046 36 30V10Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M18.7525 23H15.8185L13.2805 18.752H12.9745H11.1025V23H8.45654V10.4H13.1725C14.9005 10.4 16.1725 10.748 16.9885 11.444C17.8045 12.128 18.2125 13.088 18.2125 14.324C18.2125 15.296 17.9965 16.106 17.5645 16.754C17.1445 17.402 16.5505 17.894 15.7825 18.23L18.7525 23ZM11.1025 12.65V16.484H13.1725C13.8685 16.484 14.4085 16.31 14.7925 15.962C15.1885 15.602 15.3865 15.11 15.3865 14.486C15.3865 13.874 15.1945 13.418 14.8105 13.118C14.4385 12.806 13.8385 12.65 13.0105 12.65H11.1025Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M26.6688 10.4V20.714H29.0628V23H21.0168V20.714H23.9868V13.316L21.3408 14.432L20.4948 12.452L24.6348 10.4H26.6688Z`,
          }),
        ],
      });
}
function Zs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M7.5 32C3.35786 32 0 27.5228 0 22V2C0 0.895431 0.671574 0 1.5 0H34.5C35.3284 0 36 0.895431 36 2V30C36 31.1046 35.3284 32 34.5 32H7.5ZM29.0743 20.714H23.0083L25.6183 18.554C26.6623 17.69 27.4363 16.91 27.9403 16.214C28.4443 15.506 28.6963 14.72 28.6963 13.856C28.6963 12.68 28.2583 11.774 27.3823 11.138C26.5063 10.502 25.3423 10.184 23.8903 10.184C23.0743 10.184 22.3063 10.298 21.5863 10.526C20.8783 10.754 20.2483 11.06 19.6963 11.444L20.5963 13.388C20.9683 13.136 21.4003 12.926 21.8923 12.758C22.3963 12.59 22.9123 12.506 23.4403 12.506C24.1483 12.506 24.7243 12.668 25.1683 12.992C25.6243 13.304 25.8523 13.772 25.8523 14.396C25.8523 14.78 25.7623 15.134 25.5823 15.458C25.4023 15.782 25.1623 16.088 24.8623 16.376C24.5743 16.664 24.1543 17.042 23.6023 17.51L23.2963 17.78L19.6603 20.804V23H29.0743V20.714ZM9.32458 23H17.7846V20.624H11.9706V10.4H9.32458V23Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M0 22C0 27.5228 3.35786 32 7.5 32H34.5C35.3284 32 36 31.1046 36 30V2C36 0.895432 35.3284 0 34.5 0H1.5C0.671574 0 0 0.895432 0 2V22Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M17.7846 23H9.32458V10.4H11.9706V20.624H17.7846V23Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M23.0083 20.714H29.0743V23H19.6603V20.804L23.2963 17.78L23.6023 17.51C24.1543 17.042 24.5743 16.664 24.8623 16.376C25.1623 16.088 25.4023 15.782 25.5823 15.458C25.7623 15.134 25.8523 14.78 25.8523 14.396C25.8523 13.772 25.6243 13.304 25.1683 12.992C24.7243 12.668 24.1483 12.506 23.4403 12.506C22.9123 12.506 22.3963 12.59 21.8923 12.758C21.4003 12.926 20.9683 13.136 20.5963 13.388L19.6963 11.444C20.2483 11.06 20.8783 10.754 21.5863 10.526C22.3063 10.298 23.0743 10.184 23.8903 10.184C25.3423 10.184 26.5063 10.502 27.3823 11.138C28.2583 11.774 28.6963 12.68 28.6963 13.856C28.6963 14.72 28.4443 15.506 27.9403 16.214C27.4363 16.91 26.6623 17.69 25.6183 18.554L23.0083 20.714Z`,
          }),
        ],
      });
}
function Qs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M28.5 32C32.6421 32 36 27.5228 36 22V2C36 0.895431 35.3284 0 34.5 0H1.5C0.671573 0 0 0.895431 0 2V30C0 31.1046 0.671573 32 1.5 32H28.5ZM28.9796 20.714H22.9136L25.5236 18.554C26.5676 17.69 27.3416 16.91 27.8456 16.214C28.3496 15.506 28.6016 14.72 28.6016 13.856C28.6016 12.68 28.1636 11.774 27.2876 11.138C26.4116 10.502 25.2476 10.184 23.7956 10.184C22.9796 10.184 22.2116 10.298 21.4916 10.526C20.7836 10.754 20.1536 11.06 19.6016 11.444L20.5016 13.388C20.8736 13.136 21.3056 12.926 21.7976 12.758C22.3016 12.59 22.8176 12.506 23.3456 12.506C24.0536 12.506 24.6296 12.668 25.0736 12.992C25.5296 13.304 25.7576 13.772 25.7576 14.396C25.7576 14.78 25.6676 15.134 25.4876 15.458C25.3076 15.782 25.0676 16.088 24.7676 16.376C24.4796 16.664 24.0596 17.042 23.5076 17.51L23.2016 17.78L19.5656 20.804V23H28.9796V20.714ZM14.7813 23H17.7153L14.7453 18.23C15.5133 17.894 16.1073 17.402 16.5273 16.754C16.9593 16.106 17.1753 15.296 17.1753 14.324C17.1753 13.088 16.7673 12.128 15.9513 11.444C15.1353 10.748 13.8633 10.4 12.1353 10.4H7.41931V23H10.0653V18.752H11.9373H12.2433L14.7813 23ZM10.0653 16.484V12.65H11.9733C12.8013 12.65 13.4013 12.806 13.7733 13.118C14.1573 13.418 14.3493 13.874 14.3493 14.486C14.3493 15.11 14.1513 15.602 13.7553 15.962C13.3713 16.31 12.8313 16.484 12.1353 16.484H10.0653Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M36 22C36 27.5228 32.6421 32 28.5 32H1.5C0.671574 32 0 31.1046 0 30V2C0 0.895432 0.671574 0 1.5 0H34.5C35.3284 0 36 0.895432 36 2V22Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M17.7153 23H14.7813L12.2433 18.752H11.9373H10.0653V23H7.41931V10.4H12.1353C13.8633 10.4 15.1353 10.748 15.9513 11.444C16.7673 12.128 17.1753 13.088 17.1753 14.324C17.1753 15.296 16.9593 16.106 16.5273 16.754C16.1073 17.402 15.5133 17.894 14.7453 18.23L17.7153 23ZM10.0653 12.65V16.484H12.1353C12.8313 16.484 13.3713 16.31 13.7553 15.962C14.1513 15.602 14.3493 15.11 14.3493 14.486C14.3493 13.874 14.1573 13.418 13.7733 13.118C13.4013 12.806 12.8013 12.65 11.9733 12.65H10.0653Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M22.9136 20.714H28.9796V23H19.5656V20.804L23.2016 17.78L23.5076 17.51C24.0596 17.042 24.4796 16.664 24.7676 16.376C25.0676 16.088 25.3076 15.782 25.4876 15.458C25.6676 15.134 25.7576 14.78 25.7576 14.396C25.7576 13.772 25.5296 13.304 25.0736 12.992C24.6296 12.668 24.0536 12.506 23.3456 12.506C22.8176 12.506 22.3016 12.59 21.7976 12.758C21.3056 12.926 20.8736 13.136 20.5016 13.388L19.6016 11.444C20.1536 11.06 20.7836 10.754 21.4916 10.526C22.2116 10.298 22.9796 10.184 23.7956 10.184C25.2476 10.184 26.4116 10.502 27.2876 11.138C28.1636 11.774 28.6016 12.68 28.6016 13.856C28.6016 14.72 28.3496 15.506 27.8456 16.214C27.3416 16.91 26.5676 17.69 25.5236 18.554L22.9136 20.714Z`,
          }),
        ],
      });
}
function $s({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`path`, {
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, z.jsx)(`path`, {
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, z.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M18 30.75C27.9411 30.75 36 25.7132 36 19.5C36 13.2868 27.9411 8.25 18 8.25C8.05887 8.25 0 13.2868 0 19.5C0 25.7132 8.05887 30.75 18 30.75ZM25.4679 14.284C24.7852 13.7613 23.7879 13.5 22.4759 13.5C21.6972 13.5 20.9666 13.6173 20.2839 13.852C19.6119 14.0867 19.0092 14.4227 18.4759 14.86L19.4679 16.364C19.8199 16.0973 20.2146 15.8893 20.6519 15.74C21.0999 15.58 21.5639 15.5 22.0439 15.5C22.6732 15.5 23.1639 15.6227 23.5159 15.868C23.8786 16.1133 24.0599 16.4387 24.0599 16.844C24.0599 17.2813 23.8679 17.6227 23.4839 17.868C23.1106 18.1027 22.6146 18.22 21.9959 18.22H20.6999V19.996H22.1399C23.7079 19.996 24.4919 20.508 24.4919 21.532C24.4919 22.0547 24.2839 22.4653 23.8679 22.764C23.4626 23.0627 22.8972 23.212 22.1719 23.212C21.0306 23.212 20.0439 22.876 19.2119 22.204L18.2039 23.932C18.7052 24.3373 19.3186 24.652 20.0439 24.876C20.7799 25.1 21.5532 25.212 22.3639 25.212C23.2172 25.212 23.9959 25.068 24.6999 24.78C25.4039 24.4813 25.9586 24.0653 26.3639 23.532C26.7692 22.988 26.9719 22.364 26.9719 21.66C26.9719 20.892 26.7479 20.2787 26.2999 19.82C25.8626 19.3507 25.2866 19.0413 24.5719 18.892V18.844C25.1799 18.6093 25.6492 18.2733 25.9799 17.836C26.3212 17.388 26.4919 16.8813 26.4919 16.316C26.4919 15.484 26.1506 14.8067 25.4679 14.284ZM9.48901 24.956H17.009V22.844H11.841V13.756H9.48901V24.956Z`,
          }),
        ],
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`ellipse`, {
            className: V,
            fill: `currentColor`,
            cx: `18`,
            cy: `19.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M17.009 24.956H9.48901V13.756H11.841V22.844H17.009V24.956Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M22.4759 13.5C23.7879 13.5 24.7852 13.7613 25.4679 14.284C26.1506 14.8067 26.4919 15.484 26.4919 16.316C26.4919 16.8813 26.3212 17.388 25.9799 17.836C25.6492 18.2733 25.1799 18.6093 24.5719 18.844V18.892C25.2866 19.0413 25.8626 19.3507 26.2999 19.82C26.7479 20.2787 26.9719 20.892 26.9719 21.66C26.9719 22.364 26.7692 22.988 26.3639 23.532C25.9586 24.0653 25.4039 24.4813 24.6999 24.78C23.9959 25.068 23.2172 25.212 22.3639 25.212C21.5532 25.212 20.7799 25.1 20.0439 24.876C19.3186 24.652 18.7052 24.3373 18.2039 23.932L19.2119 22.204C20.0439 22.876 21.0306 23.212 22.1719 23.212C22.8972 23.212 23.4626 23.0627 23.8679 22.764C24.2839 22.4653 24.4919 22.0547 24.4919 21.532C24.4919 20.508 23.7079 19.996 22.1399 19.996H20.6999V18.22H21.9959C22.6146 18.22 23.1106 18.1027 23.4839 17.868C23.8679 17.6227 24.0599 17.2813 24.0599 16.844C24.0599 16.4387 23.8786 16.1133 23.5159 15.868C23.1639 15.6227 22.6732 15.5 22.0439 15.5C21.5639 15.5 21.0999 15.58 20.6519 15.74C20.2146 15.8893 19.8199 16.0973 19.4679 16.364L18.4759 14.86C19.0092 14.4227 19.6119 14.0867 20.2839 13.852C20.9666 13.6173 21.6972 13.5 22.4759 13.5Z`,
          }),
        ],
      });
}
function ec({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`path`, {
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, z.jsx)(`path`, {
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, z.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M18 30.75C27.9411 30.75 36 25.7132 36 19.5C36 13.2868 27.9411 8.25 18 8.25C8.05887 8.25 0 13.2868 0 19.5C0 25.7132 8.05887 30.75 18 30.75ZM26.5882 14.284C25.9056 13.7613 24.9082 13.5 23.5962 13.5C22.8176 13.5 22.0869 13.6173 21.4043 13.852C20.7323 14.0867 20.1296 14.4227 19.5963 14.86L20.5882 16.364C20.9403 16.0973 21.3349 15.8893 21.7723 15.74C22.2202 15.58 22.6842 15.5 23.1642 15.5C23.7936 15.5 24.2843 15.6227 24.6362 15.868C24.9989 16.1133 25.1803 16.4387 25.1803 16.844C25.1803 17.2813 24.9883 17.6227 24.6043 17.868C24.2309 18.1027 23.7349 18.22 23.1162 18.22H21.8203V19.996H23.2603C24.8283 19.996 25.6122 20.508 25.6122 21.532C25.6122 22.0547 25.4042 22.4653 24.9883 22.764C24.5829 23.0627 24.0176 23.212 23.2923 23.212C22.1509 23.212 21.1643 22.876 20.3323 22.204L19.3242 23.932C19.8256 24.3373 20.4389 24.652 21.1642 24.876C21.9002 25.1 22.6736 25.212 23.4842 25.212C24.3376 25.212 25.1162 25.068 25.8202 24.78C26.5243 24.4813 27.0789 24.0653 27.4842 23.532C27.8896 22.988 28.0923 22.364 28.0923 21.66C28.0923 20.892 27.8682 20.2787 27.4202 19.82C26.9829 19.3507 26.4069 19.0413 25.6922 18.892V18.844C26.3002 18.6093 26.7696 18.2733 27.1003 17.836C27.4416 17.388 27.6122 16.8813 27.6122 16.316C27.6122 15.484 27.2709 14.8067 26.5882 14.284ZM15.544 24.956H18.152L15.512 20.716C16.1947 20.4173 16.7227 19.98 17.096 19.404C17.48 18.828 17.672 18.108 17.672 17.244C17.672 16.1453 17.3093 15.292 16.584 14.684C15.8587 14.0653 14.728 13.756 13.192 13.756H9V24.956H11.352V21.18H13.016H13.288L15.544 24.956ZM11.352 19.164V15.756H13.048C13.784 15.756 14.3173 15.8947 14.648 16.172C14.9893 16.4387 15.16 16.844 15.16 17.388C15.16 17.9427 14.984 18.38 14.632 18.7C14.2907 19.0093 13.8107 19.164 13.192 19.164H11.352Z`,
          }),
        ],
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`ellipse`, {
            className: V,
            fill: `currentColor`,
            cx: `18`,
            cy: `19.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M18.152 24.956H15.544L13.288 21.18H13.016H11.352V24.956H9V13.756H13.192C14.728 13.756 15.8587 14.0653 16.584 14.684C17.3093 15.292 17.672 16.1453 17.672 17.244C17.672 18.108 17.48 18.828 17.096 19.404C16.7227 19.98 16.1947 20.4173 15.512 20.716L18.152 24.956ZM11.352 15.756V19.164H13.192C13.8107 19.164 14.2907 19.0093 14.632 18.7C14.984 18.38 15.16 17.9427 15.16 17.388C15.16 16.844 14.9893 16.4387 14.648 16.172C14.3173 15.8947 13.784 15.756 13.048 15.756H11.352Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M23.5962 13.5C24.9082 13.5 25.9056 13.7613 26.5882 14.284C27.2709 14.8067 27.6122 15.484 27.6122 16.316C27.6122 16.8813 27.4416 17.388 27.1003 17.836C26.7696 18.2733 26.3002 18.6093 25.6922 18.844V18.892C26.4069 19.0413 26.9829 19.3507 27.4202 19.82C27.8682 20.2787 28.0923 20.892 28.0923 21.66C28.0923 22.364 27.8896 22.988 27.4842 23.532C27.0789 24.0653 26.5243 24.4813 25.8202 24.78C25.1162 25.068 24.3376 25.212 23.4843 25.212C22.6736 25.212 21.9003 25.1 21.1643 24.876C20.4389 24.652 19.8256 24.3373 19.3243 23.932L20.3323 22.204C21.1643 22.876 22.1509 23.212 23.2923 23.212C24.0176 23.212 24.5829 23.0627 24.9882 22.764C25.4042 22.4653 25.6122 22.0547 25.6122 21.532C25.6122 20.508 24.8283 19.996 23.2603 19.996H21.8203V18.22H23.1163C23.7349 18.22 24.2309 18.1027 24.6043 17.868C24.9883 17.6227 25.1803 17.2813 25.1803 16.844C25.1803 16.4387 24.9989 16.1133 24.6363 15.868C24.2843 15.6227 23.7936 15.5 23.1643 15.5C22.6842 15.5 22.2203 15.58 21.7723 15.74C21.3349 15.8893 20.9403 16.0973 20.5883 16.364L19.5963 14.86C20.1296 14.4227 20.7323 14.0867 21.4043 13.852C22.0869 13.6173 22.8176 13.5 23.5962 13.5Z`,
          }),
        ],
      });
}
function tc({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M18 24.75C27.9411 24.75 36 19.7132 36 13.5C36 7.2868 27.9411 2.25 18 2.25C8.05887 2.25 0 7.2868 0 13.5C0 19.7132 8.05887 24.75 18 24.75ZM20.8833 18.9875H23.6775L20.849 14.4447C21.5804 14.1247 22.1461 13.6561 22.5461 13.039C22.9575 12.4218 23.1633 11.6504 23.1633 10.7247C23.1633 9.54755 22.7747 8.63326 21.9975 7.98183C21.2204 7.31898 20.009 6.98755 18.3633 6.98755H13.8718V18.9875H16.3918V14.9418H18.1747H18.4661L20.8833 18.9875ZM16.3918 12.7818V9.13041H18.209C18.9975 9.13041 19.569 9.27898 19.9233 9.57612C20.289 9.86183 20.4718 10.2961 20.4718 10.879C20.4718 11.4733 20.2833 11.9418 19.9061 12.2847C19.5404 12.6161 19.0261 12.7818 18.3633 12.7818H16.3918Z`,
          }),
          (0, z.jsx)(`path`, {
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`ellipse`, {
            className: V,
            fill: `currentColor`,
            cx: `18`,
            cy: `13.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M23.6775 18.9875H20.8833L18.4661 14.9418H18.1747H16.3918V18.9875H13.8718V6.98755H18.3633C20.009 6.98755 21.2204 7.31898 21.9975 7.98184C22.7747 8.63326 23.1633 9.54755 23.1633 10.7247C23.1633 11.6504 22.9575 12.4218 22.5461 13.039C22.1461 13.6561 21.5804 14.1247 20.849 14.4447L23.6775 18.9875ZM16.3918 9.13041V12.7818H18.3633C19.0261 12.7818 19.5404 12.6161 19.9061 12.2847C20.2833 11.9418 20.4718 11.4733 20.4718 10.879C20.4718 10.2961 20.289 9.86183 19.9233 9.57612C19.569 9.27898 18.9975 9.13041 18.209 9.13041H16.3918Z`,
          }),
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      });
}
function nc({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M18 24.75C27.9411 24.75 36 19.7132 36 13.5C36 7.2868 27.9411 2.25 18 2.25C8.05887 2.25 0 7.2868 0 13.5C0 19.7132 8.05887 24.75 18 24.75ZM14 19H23V16.7371H16.8149V7H14V19Z`,
          }),
          (0, z.jsx)(`path`, {
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`ellipse`, {
            className: V,
            fill: `currentColor`,
            cx: `18`,
            cy: `13.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M23 19H14V7H16.8149V16.7371H23V19Z`,
          }),
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      });
}
function rc({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM8.62341 24.75H17.0834V22.374H11.2694V12.15H8.62341V24.75ZM27.3111 19.854V12.15H24.8631L18.6891 20.16V21.888H24.6291V24.75H27.3111V21.888H29.1291V19.854H27.3111ZM21.2631 19.854L24.7371 15.3V19.854H21.2631Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M17.0834 24.75H8.62341V12.15H11.2694V22.374H17.0834V24.75Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M27.3111 12.15V19.854H29.1291V21.888H27.3111V24.75H24.6291V21.888H18.6891V20.16L24.8631 12.15H27.3111ZM24.7371 15.3L21.2631 19.854H24.7371V15.3Z`,
          }),
        ],
      });
}
function ic({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM8.23669 24.75H16.6967V22.374H10.8827V12.15H8.23669V24.75ZM27.3744 14.4V12.15H19.3284V18.648L21.0024 19.566C21.3744 19.266 21.7524 19.044 22.1364 18.9C22.5204 18.744 22.9404 18.666 23.3964 18.666C24.0084 18.666 24.4884 18.828 24.8364 19.152C25.1964 19.476 25.3764 19.944 25.3764 20.556C25.3764 21.252 25.1424 21.786 24.6744 22.158C24.2064 22.53 23.5464 22.716 22.6944 22.716C21.5664 22.716 20.5404 22.404 19.6164 21.78L18.6804 23.796C19.1484 24.192 19.7364 24.498 20.4444 24.714C21.1524 24.93 21.9144 25.038 22.7304 25.038C23.8344 25.038 24.7884 24.852 25.5924 24.48C26.4084 24.096 27.0264 23.562 27.4464 22.878C27.8784 22.194 28.0944 21.396 28.0944 20.484C28.0944 19.26 27.7524 18.33 27.0684 17.694C26.3964 17.046 25.4964 16.722 24.3684 16.722C23.9244 16.722 23.4804 16.776 23.0364 16.884C22.6044 16.98 22.2144 17.136 21.8664 17.352V14.4H27.3744Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M16.6967 24.75H8.23669V12.15H10.8827V22.374H16.6967V24.75Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M27.3744 12.15V14.4H21.8664V17.352C22.2144 17.136 22.6044 16.98 23.0364 16.884C23.4804 16.776 23.9244 16.722 24.3684 16.722C25.4964 16.722 26.3964 17.046 27.0684 17.694C27.7524 18.33 28.0944 19.26 28.0944 20.484C28.0944 21.396 27.8784 22.194 27.4464 22.878C27.0264 23.562 26.4084 24.096 25.5924 24.48C24.7884 24.852 23.8344 25.038 22.7304 25.038C21.9144 25.038 21.1524 24.93 20.4444 24.714C19.7364 24.498 19.1484 24.192 18.6804 23.796L19.6164 21.78C20.5404 22.404 21.5664 22.716 22.6944 22.716C23.5464 22.716 24.2064 22.53 24.6744 22.158C25.1424 21.786 25.3764 21.252 25.3764 20.556C25.3764 19.944 25.1964 19.476 24.8364 19.152C24.4884 18.828 24.0084 18.666 23.3964 18.666C22.9404 18.666 22.5204 18.744 22.1364 18.9C21.7524 19.044 21.3744 19.266 21.0024 19.566L19.3284 18.648V12.15H27.3744Z`,
          }),
        ],
      });
}
function ac({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM14.5176 24.75H17.4516L14.4816 19.98C15.2496 19.644 15.8436 19.152 16.2636 18.504C16.6956 17.856 16.9116 17.046 16.9116 16.074C16.9116 14.838 16.5036 13.878 15.6876 13.194C14.8716 12.498 13.5996 12.15 11.8716 12.15H7.15564V24.75H9.80164V20.502H11.6736H11.9796L14.5176 24.75ZM9.80164 18.234V14.4H11.7096C12.5376 14.4 13.1376 14.556 13.5096 14.868C13.8936 15.168 14.0856 15.624 14.0856 16.236C14.0856 16.86 13.8876 17.352 13.4916 17.712C13.1076 18.06 12.5676 18.234 11.8716 18.234H9.80164ZM27.6539 19.854V12.15H25.2059L19.0319 20.16V21.888H24.9719V24.75H27.6539V21.888H29.4719V19.854H27.6539ZM21.6059 19.854L25.0799 15.3V19.854H21.6059Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M17.4516 24.75H14.5176L11.9796 20.502H11.6736H9.80164V24.75H7.15564V12.15H11.8716C13.5996 12.15 14.8716 12.498 15.6876 13.194C16.5036 13.878 16.9116 14.838 16.9116 16.074C16.9116 17.046 16.6956 17.856 16.2636 18.504C15.8436 19.152 15.2496 19.644 14.4816 19.98L17.4516 24.75ZM9.80164 14.4V18.234H11.8716C12.5676 18.234 13.1076 18.06 13.4916 17.712C13.8876 17.352 14.0856 16.86 14.0856 16.236C14.0856 15.624 13.8936 15.168 13.5096 14.868C13.1376 14.556 12.5376 14.4 11.7096 14.4H9.80164Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M27.6539 12.15V19.854H29.4719V21.888H27.6539V24.75H24.9719V21.888H19.0319V20.16L25.2059 12.15H27.6539ZM25.0799 15.3L21.6059 19.854H25.0799V15.3Z`,
          }),
        ],
      });
}
function oc({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM14.6934 24.75H17.6274L14.6574 19.98C15.4254 19.644 16.0194 19.152 16.4394 18.504C16.8714 17.856 17.0874 17.046 17.0874 16.074C17.0874 14.838 16.6794 13.878 15.8634 13.194C15.0474 12.498 13.7754 12.15 12.0474 12.15H7.33142V24.75H9.97742V20.502H11.8494H12.1554L14.6934 24.75ZM9.97742 18.234V14.4H11.8854C12.7134 14.4 13.3134 14.556 13.6854 14.868C14.0694 15.168 14.2614 15.624 14.2614 16.236C14.2614 16.86 14.0634 17.352 13.6674 17.712C13.2834 18.06 12.7434 18.234 12.0474 18.234H9.97742ZM28.2797 14.4V12.15H20.2337V18.648L21.9077 19.566C22.2797 19.266 22.6577 19.044 23.0417 18.9C23.4257 18.744 23.8457 18.666 24.3017 18.666C24.9137 18.666 25.3937 18.828 25.7417 19.152C26.1017 19.476 26.2817 19.944 26.2817 20.556C26.2817 21.252 26.0477 21.786 25.5797 22.158C25.1117 22.53 24.4517 22.716 23.5997 22.716C22.4717 22.716 21.4457 22.404 20.5217 21.78L19.5857 23.796C20.0537 24.192 20.6417 24.498 21.3497 24.714C22.0577 24.93 22.8197 25.038 23.6357 25.038C24.7397 25.038 25.6937 24.852 26.4977 24.48C27.3137 24.096 27.9317 23.562 28.3517 22.878C28.7837 22.194 28.9997 21.396 28.9997 20.484C28.9997 19.26 28.6577 18.33 27.9737 17.694C27.3017 17.046 26.4017 16.722 25.2737 16.722C24.8297 16.722 24.3857 16.776 23.9417 16.884C23.5097 16.98 23.1197 17.136 22.7717 17.352V14.4H28.2797Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M17.6274 24.75H14.6934L12.1554 20.502H11.8494H9.97742V24.75H7.33142V12.15H12.0474C13.7754 12.15 15.0474 12.498 15.8634 13.194C16.6794 13.878 17.0874 14.838 17.0874 16.074C17.0874 17.046 16.8714 17.856 16.4394 18.504C16.0194 19.152 15.4254 19.644 14.6574 19.98L17.6274 24.75ZM9.97742 14.4V18.234H12.0474C12.7434 18.234 13.2834 18.06 13.6674 17.712C14.0634 17.352 14.2614 16.86 14.2614 16.236C14.2614 15.624 14.0694 15.168 13.6854 14.868C13.3134 14.556 12.7134 14.4 11.8854 14.4H9.97742Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M28.2797 12.15V14.4H22.7717V17.352C23.1197 17.136 23.5097 16.98 23.9417 16.884C24.3857 16.776 24.8297 16.722 25.2737 16.722C26.4017 16.722 27.3017 17.046 27.9737 17.694C28.6577 18.33 28.9997 19.26 28.9997 20.484C28.9997 21.396 28.7837 22.194 28.3517 22.878C27.9317 23.562 27.3137 24.096 26.4977 24.48C25.6937 24.852 24.7397 25.038 23.6357 25.038C22.8197 25.038 22.0577 24.93 21.3497 24.714C20.6417 24.498 20.0537 24.192 19.5857 23.796L20.5217 21.78C21.4457 22.404 22.4717 22.716 23.5997 22.716C24.4517 22.716 25.1117 22.53 25.5797 22.158C26.0477 21.786 26.2817 21.252 26.2817 20.556C26.2817 19.944 26.1017 19.476 25.7417 19.152C25.3937 18.828 24.9137 18.666 24.3017 18.666C23.8457 18.666 23.4257 18.744 23.0417 18.9C22.6577 19.044 22.2797 19.266 21.9077 19.566L20.2337 18.648V12.15H28.2797Z`,
          }),
        ],
      });
}
function sc({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M5.73583 3C3.6326 3 1.88863 4.6288 1.74515 6.72713L0.292161 27.9771C0.134133 30.2883 1.96629 32.25 4.28284 32.25H31.7172C34.0337 32.25 35.8659 30.2883 35.7078 27.9771L34.2548 6.72713C34.1114 4.6288 32.3674 3 30.2642 3H5.73583ZM14.8236 24.0625H23.2836V21.6865H17.4696V11.4625H14.8236V24.0625Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M1.74515 6.72713C1.88863 4.6288 3.6326 3 5.73584 3H30.2642C32.3674 3 34.1114 4.6288 34.2548 6.72713L35.7078 27.9771C35.8659 30.2883 34.0337 32.25 31.7172 32.25H4.28284C1.96629 32.25 0.134134 30.2883 0.292162 27.9771L1.74515 6.72713Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M23.2836 24.0625H14.8236V11.4625H17.4696V21.6865H23.2836V24.0625Z`,
          }),
        ],
      });
}
function cc({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M6.6282 8C4.52356 8 2.77893 9.6309 2.63727 11.7308L1.28806 31.7308C1.13224 34.0406 2.96389 36 5.27899 36H30.7211C33.0362 36 34.8679 34.0406 34.7121 31.7308L33.3629 11.7308C33.2212 9.63091 31.4766 8 29.3719 8H6.6282ZM14.8237 28.0625H23.2837V25.6865H17.4697V15.4625H14.8237V28.0625Z`,
          }),
          (0, z.jsx)(`path`, {
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M2.63721 11.7308C2.77887 9.6309 4.5235 8 6.62814 8H29.3719C31.4765 8 33.2211 9.63091 33.3628 11.7308L34.712 31.7308C34.8678 34.0406 33.0362 36 30.7211 36H5.27893C2.96382 36 1.13218 34.0406 1.288 31.7308L2.63721 11.7308Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M23.2836 28.0625H14.8236V15.4625H17.4696V25.6865H23.2836V28.0625Z`,
          }),
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      });
}
function lc({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M5.7359 3C3.63266 3 1.88869 4.6288 1.74521 6.72713L0.292222 27.9771C0.134194 30.2883 1.96635 32.25 4.2829 32.25H31.7172C34.0338 32.25 35.8659 30.2883 35.7079 27.9771L34.2549 6.72713C34.1114 4.6288 32.3675 3 30.2642 3H5.7359ZM20.7179 24.0625H23.6519L20.6819 19.2925C21.4499 18.9565 22.0439 18.4645 22.4639 17.8165C22.8959 17.1685 23.1119 16.3585 23.1119 15.3865C23.1119 14.1505 22.7039 13.1905 21.8879 12.5065C21.0719 11.8105 19.7999 11.4625 18.0719 11.4625H13.3559V24.0625H16.0019V19.8145H17.8739H18.1799L20.7179 24.0625ZM16.0019 17.5465V13.7125H17.9099C18.7379 13.7125 19.3379 13.8685 19.7099 14.1805C20.0939 14.4805 20.2859 14.9365 20.2859 15.5485C20.2859 16.1725 20.0879 16.6645 19.6919 17.0245C19.3079 17.3725 18.7679 17.5465 18.0719 17.5465H16.0019Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M1.74515 6.72713C1.88863 4.6288 3.6326 3 5.73584 3H30.2642C32.3674 3 34.1114 4.6288 34.2548 6.72713L35.7078 27.9771C35.8659 30.2883 34.0337 32.25 31.7172 32.25H4.28284C1.96629 32.25 0.134134 30.2883 0.292162 27.9771L1.74515 6.72713Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M23.6518 24.0625H20.7178L18.1798 19.8145H17.8738H16.0018V24.0625H13.3558V11.4625H18.0718C19.7998 11.4625 21.0718 11.8105 21.8878 12.5065C22.7038 13.1905 23.1118 14.1505 23.1118 15.3865C23.1118 16.3585 22.8958 17.1685 22.4638 17.8165C22.0438 18.4645 21.4498 18.9565 20.6818 19.2925L23.6518 24.0625ZM16.0018 13.7125V17.5465H18.0718C18.7678 17.5465 19.3078 17.3725 19.6918 17.0245C20.0878 16.6645 20.2858 16.1725 20.2858 15.5485C20.2858 14.9365 20.0938 14.4805 19.7098 14.1805C19.3378 13.8685 18.7378 13.7125 17.9098 13.7125H16.0018Z`,
          }),
        ],
      });
}
function uc({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M6.6282 8C4.52356 8 2.77893 9.6309 2.63727 11.7308L1.28806 31.7308C1.13224 34.0406 2.96389 36 5.27899 36H30.7211C33.0362 36 34.8679 34.0406 34.7121 31.7308L33.3629 11.7308C33.2212 9.63091 31.4766 8 29.3719 8H6.6282ZM20.7179 28.0625H23.6519L20.6819 23.2925C21.4499 22.9565 22.0439 22.4645 22.4639 21.8165C22.8959 21.1685 23.1119 20.3585 23.1119 19.3865C23.1119 18.1505 22.7039 17.1905 21.8879 16.5065C21.0719 15.8105 19.7999 15.4625 18.0719 15.4625H13.3559V28.0625H16.0019V23.8145H17.8739H18.1799L20.7179 28.0625ZM16.0019 21.5465V17.7125H17.9099C18.7379 17.7125 19.3379 17.8685 19.7099 18.1805C20.0939 18.4805 20.2859 18.9365 20.2859 19.5485C20.2859 20.1725 20.0879 20.6645 19.6919 21.0245C19.3079 21.3725 18.7679 21.5465 18.0719 21.5465H16.0019Z`,
          }),
          (0, z.jsx)(`path`, {
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M2.63721 11.7308C2.77887 9.6309 4.5235 8 6.62814 8H29.3719C31.4765 8 33.2211 9.63091 33.3628 11.7308L34.712 31.7308C34.8678 34.0406 33.0362 36 30.7211 36H5.27893C2.96382 36 1.13218 34.0406 1.288 31.7308L2.63721 11.7308Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M23.6518 28.0625H20.7178L18.1798 23.8145H17.8738H16.0018V28.0625H13.3558V15.4625H18.0718C19.7998 15.4625 21.0718 15.8105 21.8878 16.5065C22.7038 17.1905 23.1118 18.1505 23.1118 19.3865C23.1118 20.3585 22.8958 21.1685 22.4638 21.8165C22.0438 22.4645 21.4498 22.9565 20.6818 23.2925L23.6518 28.0625ZM16.0018 17.7125V21.5465H18.0718C18.7678 21.5465 19.3078 21.3725 19.6918 21.0245C20.0878 20.6645 20.2858 20.1725 20.2858 19.5485C20.2858 18.9365 20.0938 18.4805 19.7098 18.1805C19.3378 17.8685 18.7378 17.7125 17.9098 17.7125H16.0018Z`,
          }),
          (0, z.jsx)(`path`, {
            className: V,
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      });
}
function dc({ bIsKnockout: e, ...t }) {
  return e
    ? (0, z.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, z.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.4999 10.8201C19.7519 10.4974 18.8719 10.3361 17.8599 10.3361C16.9799 10.3361 16.1219 10.4681 15.2859 10.7321C14.4499 10.9961 13.7166 11.3407 13.0859 11.7661L14.0759 13.9881C15.0586 13.2547 16.1073 12.8881 17.2219 12.8881C17.9699 12.8881 18.5493 13.0494 18.9599 13.3721C19.3853 13.6801 19.5979 14.1201 19.5979 14.6921C19.5979 15.1027 19.4953 15.4474 19.2899 15.7261C19.0846 16.0047 18.7693 16.3201 18.3439 16.6721C17.8893 17.0681 17.5153 17.4347 17.2219 17.7721C16.9286 18.1094 16.6793 18.5641 16.4739 19.1361C16.2686 19.7081 16.1659 20.4047 16.1659 21.2261H18.8499C18.8499 20.6541 18.9453 20.1554 19.1359 19.7301C19.3266 19.2901 19.5539 18.9234 19.8179 18.6301C20.0966 18.3221 20.4633 17.9701 20.9179 17.5741C21.3579 17.1781 21.7026 16.8407 21.9519 16.5621C22.2159 16.2834 22.4359 15.9461 22.6119 15.5501C22.7879 15.1541 22.8759 14.6994 22.8759 14.1861C22.8759 13.4234 22.6706 12.7561 22.2599 12.1841C21.8493 11.5974 21.2626 11.1427 20.4999 10.8201ZM18.7839 23.2721C18.4759 22.9494 18.0653 22.7881 17.5519 22.7881C17.0386 22.7881 16.6279 22.9494 16.3199 23.2721C16.0119 23.5801 15.8579 23.9907 15.8579 24.5041C15.8579 25.0467 16.0119 25.4794 16.3199 25.8021C16.6279 26.1101 17.0386 26.2641 17.5519 26.2641C18.0653 26.2641 18.4759 26.1101 18.7839 25.8021C19.0919 25.4794 19.2459 25.0467 19.2459 24.5041C19.2459 23.9907 19.0919 23.5801 18.7839 23.2721Z`,
        }),
      })
    : (0, z.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, z.jsx)(`circle`, {
            className: V,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M17.8599 10.3361C18.8719 10.3361 19.7519 10.4974 20.4999 10.8201C21.2626 11.1427 21.8493 11.5974 22.2599 12.1841C22.6706 12.7561 22.8759 13.4234 22.8759 14.1861C22.8759 14.6994 22.7879 15.1541 22.6119 15.5501C22.4359 15.9461 22.2159 16.2834 21.9519 16.5621C21.7026 16.8407 21.3579 17.1781 20.9179 17.5741C20.4633 17.9701 20.0966 18.3221 19.8179 18.6301C19.5539 18.9234 19.3266 19.2901 19.1359 19.7301C18.9453 20.1554 18.8499 20.6541 18.8499 21.2261H16.1659C16.1659 20.4047 16.2686 19.7081 16.4739 19.1361C16.6793 18.5641 16.9286 18.1094 17.2219 17.7721C17.5153 17.4347 17.8893 17.0681 18.3439 16.6721C18.7693 16.3201 19.0846 16.0047 19.2899 15.7261C19.4953 15.4474 19.5979 15.1027 19.5979 14.6921C19.5979 14.1201 19.3853 13.6801 18.9599 13.3721C18.5493 13.0494 17.9699 12.8881 17.2219 12.8881C16.1073 12.8881 15.0586 13.2547 14.0759 13.9881L13.0859 11.7661C13.7166 11.3407 14.4499 10.9961 15.2859 10.7321C16.1219 10.4681 16.9799 10.3361 17.8599 10.3361ZM17.5519 22.7881C18.0653 22.7881 18.4759 22.9494 18.7839 23.2721C19.0919 23.5801 19.2459 23.9907 19.2459 24.5041C19.2459 25.0467 19.0919 25.4794 18.7839 25.8021C18.4759 26.1101 18.0653 26.2641 17.5519 26.2641C17.0386 26.2641 16.6279 26.1101 16.3199 25.8021C16.0119 25.4794 15.8579 25.0467 15.8579 24.5041C15.8579 23.9907 16.0119 23.5801 16.3199 23.2721C16.6279 22.9494 17.0386 22.7881 17.5519 22.7881Z`,
          }),
        ],
      });
}
var fc = `_5YxPcG58GcM-`,
  pc = `AYShSUpazpQ-`,
  mc = `HjTriTNInOs-`;
function hc(e) {
  let {
      tabs: t,
      bDisableRouting: n,
      startingTab: r,
      controlledTab: i,
      OnTabChanged: a,
      classNameCtn: o,
      classNameTab: s,
      focusRingHasBorderRadius: c,
      classNameTabContent: l,
      preferredFocus: u,
      bVerticalTabs: d,
      bSticky: f,
      bChecklistMode: p,
    } = e,
    m = Jn(),
    h = Ht(),
    [g, _] = (0, R.useState)(
      () => r || (!n && E(m, `tab`) ? (E(m, `tab`) ?? ``) : ``),
    );
  (0, R.useEffect)(() => {
    if (!e.bDisableRouting && m) {
      let e = E(m, `tab`);
      e && _(e);
    }
  }, [m, e.bDisableRouting, _]);
  let v = R.useCallback(
      (e) => {
        (_(e.key),
          n || T(h, `tab`, e.key),
          a?.(e.key),
          e.onClick && e.onClick(e));
      },
      [n, h, a],
    ),
    y = t.filter((e) => !e.hidden);
  if (!y.length) return null;
  let b = i ?? g,
    x = y.find((e) => e.key === b) || y[0],
    S = u ? (r ?? y[0].key) : void 0,
    C = (0, z.jsxs)(z.Fragment, {
      children: [
        (0, z.jsx)(ln, {
          className: I(
            fc,
            d && `iBLrw-7gAIM-`,
            p && `dLhmGXBhTkM-`,
            f && `ShXw34CXvuE-`,
            o,
          ),
          navEntryPreferPosition: u ? Ft.PREFERRED_CHILD : Ft.FIRST,
          children: y.map((e, t) =>
            (0, z.jsx)(
              gc,
              {
                tab: e,
                OnTabClick: v,
                classNameTab: s,
                focusRingHasBorderRadius: c,
                active: e.key === x.key,
                preferredFocus: S === e.key,
              },
              e.key,
            ),
          ),
        }),
        x && (0, z.jsx)(ln, { className: l, children: x.contents }),
      ],
    });
  return d ? (0, z.jsx)(ln, { className: I(mc), children: C }) : C;
}
function gc(e) {
  let {
    tab: t,
    OnTabClick: n,
    classNameTab: r,
    focusRingHasBorderRadius: i,
    active: a,
    preferredFocus: o,
  } = e;
  return (0, z.jsx)(dt, {
    condition: !!(t.statusToolTip || t.tooltip),
    wrap: (e) =>
      (0, z.jsx)(Ct, {
        toolTipContent: t.statusToolTip || t.tooltip,
        children: e,
      }),
    children: (0, z.jsxs)(ln, {
      className: I(pc, a && `Tw-TchJW1T8-`, a && `ActiveTab`, r),
      onActivate: () => n(t),
      preferredFocus: o,
      focusRingHasBorderRadius: i,
      children: [
        !!t.vo_warning &&
          (0, z.jsx)(Ct, {
            toolTipContent: t.vo_warning,
            children: (0, z.jsx)(`div`, {
              className: `OpvmjD098-U-`,
              children: N(`#EventEditor_VOWarning`),
            }),
          }),
        t.status,
        t.name,
      ],
    }),
  });
}
var _c = class e extends Mr.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || Jt(e.M()),
        Mr.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: kn.readUint32, bw: jn.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= on(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return Sn(e.M(), t, n);
    }
    static fromObject(t) {
      return vn(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Mr.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Pn(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Mr.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      Lt(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Mr.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Request`;
    }
  },
  vc = class e extends Mr.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.frame_rates || Jt(e.M()),
        Mr.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { frame_rates: { n: 1, c: yc, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= on(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return Sn(e.M(), t, n);
    }
    static fromObject(t) {
      return vn(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Mr.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Pn(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Mr.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      Lt(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Mr.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Response`;
    }
  },
  yc = class e extends Mr.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clusterid || Jt(e.M()),
        Mr.Message.initialize(this, t, 0, -1, [8], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clusterid: {
              n: 1,
              br: kn.readUint64String,
              bw: jn.writeUint64String,
            },
            report_days: { n: 4, br: kn.readUint32, bw: jn.writeUint32 },
            report_count: {
              n: 5,
              br: kn.readUint64String,
              bw: jn.writeUint64String,
            },
            mean_frame_rate: { n: 6, br: kn.readDouble, bw: jn.writeDouble },
            frame_rate_histogram: {
              n: 8,
              r: !0,
              q: !0,
              br: kn.readDouble,
              pbr: kn.readPackedDouble,
              bw: jn.writeRepeatedDouble,
            },
            histogram_report_count: {
              n: 9,
              br: kn.readUint64String,
              bw: jn.writeUint64String,
            },
            last_updated: { n: 10, br: kn.readUint32, bw: jn.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= on(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return Sn(e.M(), t, n);
    }
    static fromObject(t) {
      return vn(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Mr.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Pn(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Mr.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      Lt(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Mr.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Response_FrameRate`;
    }
  },
  bc;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `GamePerformanceStats.GetGameFrameRateStats#1`,
      Ut(_c, t, n),
      vc,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`, `store`, `community`],
      },
    );
  }
  e.GetGameFrameRateStats = t;
})((bc ||= {}));
function xc(e) {
  let t = hn(),
    { data: n } = p({
      queryKey: [`performancestats_` + e],
      queryFn: async () => {
        if (!e) return null;
        let n = Zn.Init(_c);
        n.Body().set_appid(e);
        let r = await bc.GetGameFrameRateStats(t, n);
        return r.BSuccess() ? r.Body().toObject() : null;
      },
    });
  return n ?? void 0;
}
function Sc(e, t = !0) {
  return p({
    queryKey: [`GetControllersUsed`],
    queryFn: async () => {
      let e;
      try {
        let t = `${P.STORE_BASE_URL}account/ajaxgetcontrollersused`,
          n = await Nr.default.get(t, { withCredentials: !0 });
        if (n?.status === 200 && n?.data?.success === 1) return n.data.data;
        e = me(n);
      } catch (t) {
        e = me(t);
      }
      return (console.error(`usePlayerHardwareUsed failed:`, e), null);
    },
    select: e,
    enabled: t && !!Vn.accountid,
  });
}
function Cc(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = Cc(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function U() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Cc(e)) && (r && (r += ` `), (r += t));
  return r;
}
var wc =
  `dangerouslySetInnerHTML.onCopy.onCopyCapture.onCut.onCutCapture.onPaste.onPasteCapture.onCompositionEnd.onCompositionEndCapture.onCompositionStart.onCompositionStartCapture.onCompositionUpdate.onCompositionUpdateCapture.onFocus.onFocusCapture.onBlur.onBlurCapture.onChange.onChangeCapture.onBeforeInput.onBeforeInputCapture.onInput.onInputCapture.onReset.onResetCapture.onSubmit.onSubmitCapture.onInvalid.onInvalidCapture.onLoad.onLoadCapture.onError.onErrorCapture.onKeyDown.onKeyDownCapture.onKeyPress.onKeyPressCapture.onKeyUp.onKeyUpCapture.onAbort.onAbortCapture.onCanPlay.onCanPlayCapture.onCanPlayThrough.onCanPlayThroughCapture.onDurationChange.onDurationChangeCapture.onEmptied.onEmptiedCapture.onEncrypted.onEncryptedCapture.onEnded.onEndedCapture.onLoadedData.onLoadedDataCapture.onLoadedMetadata.onLoadedMetadataCapture.onLoadStart.onLoadStartCapture.onPause.onPauseCapture.onPlay.onPlayCapture.onPlaying.onPlayingCapture.onProgress.onProgressCapture.onRateChange.onRateChangeCapture.onSeeked.onSeekedCapture.onSeeking.onSeekingCapture.onStalled.onStalledCapture.onSuspend.onSuspendCapture.onTimeUpdate.onTimeUpdateCapture.onVolumeChange.onVolumeChangeCapture.onWaiting.onWaitingCapture.onAuxClick.onAuxClickCapture.onClick.onClickCapture.onContextMenu.onContextMenuCapture.onDoubleClick.onDoubleClickCapture.onDrag.onDragCapture.onDragEnd.onDragEndCapture.onDragEnter.onDragEnterCapture.onDragExit.onDragExitCapture.onDragLeave.onDragLeaveCapture.onDragOver.onDragOverCapture.onDragStart.onDragStartCapture.onDrop.onDropCapture.onMouseDown.onMouseDownCapture.onMouseEnter.onMouseLeave.onMouseMove.onMouseMoveCapture.onMouseOut.onMouseOutCapture.onMouseOver.onMouseOverCapture.onMouseUp.onMouseUpCapture.onSelect.onSelectCapture.onTouchCancel.onTouchCancelCapture.onTouchEnd.onTouchEndCapture.onTouchMove.onTouchMoveCapture.onTouchStart.onTouchStartCapture.onPointerDown.onPointerDownCapture.onPointerMove.onPointerMoveCapture.onPointerUp.onPointerUpCapture.onPointerCancel.onPointerCancelCapture.onPointerEnter.onPointerEnterCapture.onPointerLeave.onPointerLeaveCapture.onPointerOver.onPointerOverCapture.onPointerOut.onPointerOutCapture.onGotPointerCapture.onGotPointerCaptureCapture.onLostPointerCapture.onLostPointerCaptureCapture.onScroll.onScrollCapture.onWheel.onWheelCapture.onAnimationStart.onAnimationStartCapture.onAnimationEnd.onAnimationEndCapture.onAnimationIteration.onAnimationIterationCapture.onTransitionEnd.onTransitionEndCapture`.split(
    `.`,
  );
function Tc(e) {
  return typeof e == `string` && wc.includes(e);
}
var Ec =
  `aria-activedescendant.aria-atomic.aria-autocomplete.aria-busy.aria-checked.aria-colcount.aria-colindex.aria-colspan.aria-controls.aria-current.aria-describedby.aria-details.aria-disabled.aria-errormessage.aria-expanded.aria-flowto.aria-haspopup.aria-hidden.aria-invalid.aria-keyshortcuts.aria-label.aria-labelledby.aria-level.aria-live.aria-modal.aria-multiline.aria-multiselectable.aria-orientation.aria-owns.aria-placeholder.aria-posinset.aria-pressed.aria-readonly.aria-relevant.aria-required.aria-roledescription.aria-rowcount.aria-rowindex.aria-rowspan.aria-selected.aria-setsize.aria-sort.aria-valuemax.aria-valuemin.aria-valuenow.aria-valuetext.className.color.height.id.lang.max.media.method.min.name.style.target.width.role.tabIndex.accentHeight.accumulate.additive.alignmentBaseline.allowReorder.alphabetic.amplitude.arabicForm.ascent.attributeName.attributeType.autoReverse.azimuth.baseFrequency.baselineShift.baseProfile.bbox.begin.bias.by.calcMode.capHeight.clip.clipPath.clipPathUnits.clipRule.colorInterpolation.colorInterpolationFilters.colorProfile.colorRendering.contentScriptType.contentStyleType.cursor.cx.cy.d.decelerate.descent.diffuseConstant.direction.display.divisor.dominantBaseline.dur.dx.dy.edgeMode.elevation.enableBackground.end.exponent.externalResourcesRequired.fill.fillOpacity.fillRule.filter.filterRes.filterUnits.floodColor.floodOpacity.focusable.fontFamily.fontSize.fontSizeAdjust.fontStretch.fontStyle.fontVariant.fontWeight.format.from.fx.fy.g1.g2.glyphName.glyphOrientationHorizontal.glyphOrientationVertical.glyphRef.gradientTransform.gradientUnits.hanging.horizAdvX.horizOriginX.href.ideographic.imageRendering.in2.in.intercept.k1.k2.k3.k4.k.kernelMatrix.kernelUnitLength.kerning.keyPoints.keySplines.keyTimes.lengthAdjust.letterSpacing.lightingColor.limitingConeAngle.local.markerEnd.markerHeight.markerMid.markerStart.markerUnits.markerWidth.mask.maskContentUnits.maskUnits.mathematical.mode.numOctaves.offset.opacity.operator.order.orient.orientation.origin.overflow.overlinePosition.overlineThickness.paintOrder.panose1.pathLength.patternContentUnits.patternTransform.patternUnits.pointerEvents.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.r.radius.refX.refY.renderingIntent.repeatCount.repeatDur.requiredExtensions.requiredFeatures.restart.result.rotate.rx.ry.seed.shapeRendering.slope.spacing.specularConstant.specularExponent.speed.spreadMethod.startOffset.stdDeviation.stemh.stemv.stitchTiles.stopColor.stopOpacity.strikethroughPosition.strikethroughThickness.string.stroke.strokeDasharray.strokeDashoffset.strokeLinecap.strokeLinejoin.strokeMiterlimit.strokeOpacity.strokeWidth.surfaceScale.systemLanguage.tableValues.targetX.targetY.textAnchor.textDecoration.textLength.textRendering.to.transform.u1.u2.underlinePosition.underlineThickness.unicode.unicodeBidi.unicodeRange.unitsPerEm.vAlphabetic.values.vectorEffect.version.vertAdvY.vertOriginX.vertOriginY.vHanging.vIdeographic.viewTarget.visibility.vMathematical.widths.wordSpacing.writingMode.x1.x2.x.xChannelSelector.xHeight.xlinkActuate.xlinkArcrole.xlinkHref.xlinkRole.xlinkShow.xlinkTitle.xlinkType.xmlBase.xmlLang.xmlns.xmlnsXlink.xmlSpace.y1.y2.y.yChannelSelector.z.zoomAndPan.ref.key.angle`.split(
    `.`,
  );
function Dc(e) {
  return typeof e == `string` && Ec.includes(e);
}
function Oc(e) {
  return typeof e == `string` && e.startsWith(`data-`);
}
function kc(e) {
  var t = Object.entries(e).filter((e) => {
    var [t] = e;
    return Dc(t) || Oc(t);
  });
  return Object.fromEntries(t);
}
function Ac(e) {
  if (e == null) return null;
  if (
    (0, R.isValidElement)(e) &&
    typeof e.props == `object` &&
    e.props !== null
  ) {
    var t = e.props;
    return kc(t);
  }
  return typeof e == `object` && !Array.isArray(e) ? kc(e) : null;
}
function jc(e) {
  var t = Object.entries(e).filter((e) => {
    var [t] = e;
    return Dc(t) || Oc(t) || Tc(t);
  });
  return Object.fromEntries(t);
}
function Mc(e) {
  return e == null
    ? null
    : (0, R.isValidElement)(e)
      ? jc(e.props)
      : typeof e == `object` && !Array.isArray(e)
        ? jc(e)
        : null;
}
var Nc = [
  `children`,
  `width`,
  `height`,
  `viewBox`,
  `className`,
  `style`,
  `title`,
  `desc`,
];
function Pc() {
  return (
    (Pc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Pc.apply(null, arguments)
  );
}
function Fc(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Ic(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Ic(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Lc = (0, R.forwardRef)((e, t) => {
    var {
        children: n,
        width: r,
        height: i,
        viewBox: a,
        className: o,
        style: s,
        title: c,
        desc: l,
      } = e,
      u = Fc(e, Nc),
      d = a || { width: r, height: i, x: 0, y: 0 },
      f = U(`recharts-surface`, o);
    return R.createElement(
      `svg`,
      Pc({}, jc(u), {
        className: f,
        width: r,
        height: i,
        style: s,
        viewBox: `${d.x} ${d.y} ${d.width} ${d.height}`,
        ref: t,
      }),
      R.createElement(`title`, null, c),
      R.createElement(`desc`, null, l),
      n,
    );
  }),
  Rc = [`children`, `className`];
function zc() {
  return (
    (zc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zc.apply(null, arguments)
  );
}
function Bc(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Vc(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Vc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Hc = R.forwardRef((e, t) => {
    var { children: n, className: r } = e,
      i = Bc(e, Rc),
      a = U(`recharts-layer`, r);
    return R.createElement(`g`, zc({ className: a }, jc(i), { ref: t }), n);
  }),
  Uc = (0, R.createContext)(null),
  Wc = () => (0, R.useContext)(Uc);
function W(e) {
  return function () {
    return e;
  };
}
var Gc = Math.cos,
  Kc = Math.sin,
  qc = Math.sqrt,
  Jc = Math.PI;
Jc / 2;
var Yc = 2 * Jc,
  Xc = Math.PI,
  Zc = 2 * Xc,
  Qc = 1e-6,
  $c = Zc - Qc;
function el(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function tl(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
  if (t > 15) return el;
  let n = 10 ** t;
  return function (e) {
    this._ += e[0];
    for (let t = 1, r = e.length; t < r; ++t)
      this._ += Math.round(arguments[t] * n) / n + e[t];
  };
}
var nl = class {
  constructor(e) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ``),
      (this._append = e == null ? el : tl(e)));
  }
  moveTo(e, t) {
    this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(e, t) {
    this._append`L${(this._x1 = +e)},${(this._y1 = +t)}`;
  }
  quadraticCurveTo(e, t, n, r) {
    this._append`Q${+e},${+t},${(this._x1 = +n)},${(this._y1 = +r)}`;
  }
  bezierCurveTo(e, t, n, r, i, a) {
    this._append`C${+e},${+t},${+n},${+r},${(this._x1 = +i)},${(this._y1 = +a)}`;
  }
  arcTo(e, t, n, r, i) {
    if (((e = +e), (t = +t), (n = +n), (r = +r), (i = +i), i < 0))
      throw Error(`negative radius: ${i}`);
    let a = this._x1,
      o = this._y1,
      s = n - e,
      c = r - t,
      l = a - e,
      u = o - t,
      d = l * l + u * u;
    if (this._x1 === null) this._append`M${(this._x1 = e)},${(this._y1 = t)}`;
    else if (d > Qc) {
      if (!(Math.abs(u * s - c * l) > Qc) || !i)
        this._append`L${(this._x1 = e)},${(this._y1 = t)}`;
      else {
        let f = n - a,
          p = r - o,
          m = s * s + c * c,
          h = f * f + p * p,
          g = Math.sqrt(m),
          _ = Math.sqrt(d),
          v = i * Math.tan((Xc - Math.acos((m + d - h) / (2 * g * _))) / 2),
          y = v / _,
          b = v / g;
        (Math.abs(y - 1) > Qc && this._append`L${e + y * l},${t + y * u}`,
          this._append`A${i},${i},0,0,${+(u * f > l * p)},${(this._x1 = e + b * s)},${(this._y1 = t + b * c)}`);
      }
    }
  }
  arc(e, t, n, r, i, a) {
    if (((e = +e), (t = +t), (n = +n), (a = !!a), n < 0))
      throw Error(`negative radius: ${n}`);
    let o = n * Math.cos(r),
      s = n * Math.sin(r),
      c = e + o,
      l = t + s,
      u = 1 ^ a,
      d = a ? r - i : i - r;
    (this._x1 === null
      ? this._append`M${c},${l}`
      : (Math.abs(this._x1 - c) > Qc || Math.abs(this._y1 - l) > Qc) &&
        this._append`L${c},${l}`,
      n &&
        (d < 0 && (d = (d % Zc) + Zc),
        d > $c
          ? this._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${(this._x1 = c)},${(this._y1 = l)}`
          : d > Qc &&
            this._append`A${n},${n},0,${+(d >= Xc)},${u},${(this._x1 = e + n * Math.cos(i))},${(this._y1 = t + n * Math.sin(i))}`));
  }
  rect(e, t, n, r) {
    this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}h${(n = +n)}v${+r}h${-n}Z`;
  }
  toString() {
    return this._;
  }
};
nl.prototype;
function rl(e) {
  let t = 3;
  return (
    (e.digits = function (n) {
      if (!arguments.length) return t;
      if (n == null) t = null;
      else {
        let e = Math.floor(n);
        if (!(e >= 0)) throw RangeError(`invalid digits: ${n}`);
        t = e;
      }
      return e;
    }),
    () => new nl(t)
  );
}
Array.prototype.slice;
function il(e) {
  return typeof e == `object` && `length` in e ? e : Array.from(e);
}
function al(e) {
  this._context = e;
}
al.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
    }
  },
};
function ol(e) {
  return new al(e);
}
function sl(e) {
  return e[0];
}
function cl(e) {
  return e[1];
}
function ll(e, t) {
  var n = W(!0),
    r = null,
    i = ol,
    a = null,
    o = rl(s);
  ((e = typeof e == `function` ? e : e === void 0 ? sl : W(e)),
    (t = typeof t == `function` ? t : t === void 0 ? cl : W(t)));
  function s(s) {
    var c,
      l = (s = il(s)).length,
      u,
      d = !1,
      f;
    for (r ?? (a = i((f = o()))), c = 0; c <= l; ++c)
      (!(c < l && n((u = s[c]), c, s)) === d &&
        ((d = !d) ? a.lineStart() : a.lineEnd()),
        d && a.point(+e(u, c, s), +t(u, c, s)));
    if (f) return ((a = null), f + `` || null);
  }
  return (
    (s.x = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : W(+t)), s)
        : e;
    }),
    (s.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : W(+e)), s)
        : t;
    }),
    (s.defined = function (e) {
      return arguments.length
        ? ((n = typeof e == `function` ? e : W(!!e)), s)
        : n;
    }),
    (s.curve = function (e) {
      return arguments.length ? ((i = e), r != null && (a = i(r)), s) : i;
    }),
    (s.context = function (e) {
      return arguments.length
        ? (e == null ? (r = a = null) : (a = i((r = e))), s)
        : r;
    }),
    s
  );
}
function ul(e, t, n) {
  var r = null,
    i = W(!0),
    a = null,
    o = ol,
    s = null,
    c = rl(l);
  ((e = typeof e == `function` ? e : e === void 0 ? sl : W(+e)),
    (t = typeof t == `function` ? t : W(t === void 0 ? 0 : +t)),
    (n = typeof n == `function` ? n : n === void 0 ? cl : W(+n)));
  function l(l) {
    var u,
      d,
      f,
      p = (l = il(l)).length,
      m,
      h = !1,
      g,
      _ = Array(p),
      v = Array(p);
    for (a ?? (s = o((g = c()))), u = 0; u <= p; ++u) {
      if (!(u < p && i((m = l[u]), u, l)) === h) {
        if ((h = !h)) ((d = u), s.areaStart(), s.lineStart());
        else {
          for (s.lineEnd(), s.lineStart(), f = u - 1; f >= d; --f)
            s.point(_[f], v[f]);
          (s.lineEnd(), s.areaEnd());
        }
      }
      h &&
        ((_[u] = +e(m, u, l)),
        (v[u] = +t(m, u, l)),
        s.point(r ? +r(m, u, l) : _[u], n ? +n(m, u, l) : v[u]));
    }
    if (g) return ((s = null), g + `` || null);
  }
  function u() {
    return ll().defined(i).curve(o).context(a);
  }
  return (
    (l.x = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : W(+t)), (r = null), l)
        : e;
    }),
    (l.x0 = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : W(+t)), l)
        : e;
    }),
    (l.x1 = function (e) {
      return arguments.length
        ? ((r = e == null ? null : typeof e == `function` ? e : W(+e)), l)
        : r;
    }),
    (l.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : W(+e)), (n = null), l)
        : t;
    }),
    (l.y0 = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : W(+e)), l)
        : t;
    }),
    (l.y1 = function (e) {
      return arguments.length
        ? ((n = e == null ? null : typeof e == `function` ? e : W(+e)), l)
        : n;
    }),
    (l.lineX0 = l.lineY0 =
      function () {
        return u().x(e).y(t);
      }),
    (l.lineY1 = function () {
      return u().x(e).y(n);
    }),
    (l.lineX1 = function () {
      return u().x(r).y(t);
    }),
    (l.defined = function (e) {
      return arguments.length
        ? ((i = typeof e == `function` ? e : W(!!e)), l)
        : i;
    }),
    (l.curve = function (e) {
      return arguments.length ? ((o = e), a != null && (s = o(a)), l) : o;
    }),
    (l.context = function (e) {
      return arguments.length
        ? (e == null ? (a = s = null) : (s = o((a = e))), l)
        : a;
    }),
    l
  );
}
var dl = class {
  constructor(e, t) {
    ((this._context = e), (this._x = t));
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  }
  point(e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + e) / 2),
              this._y0,
              this._x0,
              t,
              e,
              t,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + t) / 2),
              e,
              this._y0,
              e,
              t,
            );
    }
    ((this._x0 = e), (this._y0 = t));
  }
};
function fl(e) {
  return new dl(e, !0);
}
function pl(e) {
  return new dl(e, !1);
}
var ml = {
    draw(e, t) {
      let n = qc(t / Jc);
      (e.moveTo(n, 0), e.arc(0, 0, n, 0, Yc));
    },
  },
  hl = {
    draw(e, t) {
      let n = qc(t / 5) / 2;
      (e.moveTo(-3 * n, -n),
        e.lineTo(-n, -n),
        e.lineTo(-n, -3 * n),
        e.lineTo(n, -3 * n),
        e.lineTo(n, -n),
        e.lineTo(3 * n, -n),
        e.lineTo(3 * n, n),
        e.lineTo(n, n),
        e.lineTo(n, 3 * n),
        e.lineTo(-n, 3 * n),
        e.lineTo(-n, n),
        e.lineTo(-3 * n, n),
        e.closePath());
    },
  },
  gl = qc(1 / 3),
  _l = gl * 2,
  vl = {
    draw(e, t) {
      let n = qc(t / _l),
        r = n * gl;
      (e.moveTo(0, -n),
        e.lineTo(r, 0),
        e.lineTo(0, n),
        e.lineTo(-r, 0),
        e.closePath());
    },
  },
  yl = {
    draw(e, t) {
      let n = qc(t),
        r = -n / 2;
      e.rect(r, r, n, n);
    },
  },
  bl = 0.8908130915292852,
  xl = Kc(Jc / 10) / Kc((7 * Jc) / 10),
  Sl = Kc(Yc / 10) * xl,
  Cl = -Gc(Yc / 10) * xl,
  wl = {
    draw(e, t) {
      let n = qc(t * bl),
        r = Sl * n,
        i = Cl * n;
      (e.moveTo(0, -n), e.lineTo(r, i));
      for (let t = 1; t < 5; ++t) {
        let a = (Yc * t) / 5,
          o = Gc(a),
          s = Kc(a);
        (e.lineTo(s * n, -o * n), e.lineTo(o * r - s * i, s * r + o * i));
      }
      e.closePath();
    },
  },
  Tl = qc(3),
  El = {
    draw(e, t) {
      let n = -qc(t / (Tl * 3));
      (e.moveTo(0, n * 2),
        e.lineTo(-Tl * n, -n),
        e.lineTo(Tl * n, -n),
        e.closePath());
    },
  },
  Dl = -0.5,
  Ol = qc(3) / 2,
  kl = 1 / qc(12),
  Al = (kl / 2 + 1) * 3,
  jl = {
    draw(e, t) {
      let n = qc(t / Al),
        r = n / 2,
        i = n * kl,
        a = r,
        o = n * kl + n,
        s = -a,
        c = o;
      (e.moveTo(r, i),
        e.lineTo(a, o),
        e.lineTo(s, c),
        e.lineTo(Dl * r - Ol * i, Ol * r + Dl * i),
        e.lineTo(Dl * a - Ol * o, Ol * a + Dl * o),
        e.lineTo(Dl * s - Ol * c, Ol * s + Dl * c),
        e.lineTo(Dl * r + Ol * i, Dl * i - Ol * r),
        e.lineTo(Dl * a + Ol * o, Dl * o - Ol * a),
        e.lineTo(Dl * s + Ol * c, Dl * c - Ol * s),
        e.closePath());
    },
  };
function Ml(e, t) {
  let n = null,
    r = rl(i);
  ((e = typeof e == `function` ? e : W(e || ml)),
    (t = typeof t == `function` ? t : W(t === void 0 ? 64 : +t)));
  function i() {
    let i;
    if (
      ((n ||= i = r()),
      e.apply(this, arguments).draw(n, +t.apply(this, arguments)),
      i)
    )
      return ((n = null), i + `` || null);
  }
  return (
    (i.type = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : W(t)), i)
        : e;
    }),
    (i.size = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : W(+e)), i)
        : t;
    }),
    (i.context = function (e) {
      return arguments.length ? ((n = e ?? null), i) : n;
    }),
    i
  );
}
function Nl() {}
function Pl(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6,
  );
}
function Fl(e) {
  this._context = e;
}
Fl.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        Pl(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        ((this._point = 3),
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6,
          ));
      default:
        Pl(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function Il(e) {
  return new Fl(e);
}
function Ll(e) {
  this._context = e;
}
Ll.prototype = {
  areaStart: Nl,
  areaEnd: Nl,
  lineStart: function () {
    ((this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 1:
        (this._context.moveTo(this._x2, this._y2), this._context.closePath());
        break;
      case 2:
        (this._context.moveTo(
          (this._x2 + 2 * this._x3) / 3,
          (this._y2 + 2 * this._y3) / 3,
        ),
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3,
          ),
          this._context.closePath());
        break;
      case 3:
        (this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4));
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), (this._x2 = e), (this._y2 = t));
        break;
      case 1:
        ((this._point = 2), (this._x3 = e), (this._y3 = t));
        break;
      case 2:
        ((this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + e) / 6,
            (this._y0 + 4 * this._y1 + t) / 6,
          ));
        break;
      default:
        Pl(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function Rl(e) {
  return new Ll(e);
}
function zl(e) {
  this._context = e;
}
zl.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var n = (this._x0 + 4 * this._x1 + e) / 6,
          r = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
        break;
      case 3:
        this._point = 4;
      default:
        Pl(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function Bl(e) {
  return new zl(e);
}
function Vl(e) {
  this._context = e;
}
Vl.prototype = {
  areaStart: Nl,
  areaEnd: Nl,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    ((e = +e),
      (t = +t),
      this._point
        ? this._context.lineTo(e, t)
        : ((this._point = 1), this._context.moveTo(e, t)));
  },
};
function Hl(e) {
  return new Vl(e);
}
function Ul(e) {
  return e < 0 ? -1 : 1;
}
function Wl(e, t, n) {
  var r = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (r || (i < 0 && -0)),
    o = (n - e._y1) / (i || (r < 0 && -0)),
    s = (a * i + o * r) / (r + i);
  return (
    (Ul(a) + Ul(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0
  );
}
function Gl(e, t) {
  var n = e._x1 - e._x0;
  return n ? ((3 * (e._y1 - e._y0)) / n - t) / 2 : t;
}
function Kl(e, t, n) {
  var r = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    s = (a - r) / 3;
  e._context.bezierCurveTo(r + s, i + s * t, a - s, o - s * n, a, o);
}
function ql(e) {
  this._context = e;
}
ql.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Kl(this, this._t0, Gl(this, this._t0));
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    var n = NaN;
    if (((e = +e), (t = +t), e !== this._x1 || t !== this._y1)) {
      switch (this._point) {
        case 0:
          ((this._point = 1),
            this._line
              ? this._context.lineTo(e, t)
              : this._context.moveTo(e, t));
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          ((this._point = 3), Kl(this, Gl(this, (n = Wl(this, e, t))), n));
          break;
        default:
          Kl(this, this._t0, (n = Wl(this, e, t)));
      }
      ((this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = n));
    }
  },
};
function Jl(e) {
  this._context = new Yl(e);
}
(Jl.prototype = Object.create(ql.prototype)).point = function (e, t) {
  ql.prototype.point.call(this, t, e);
};
function Yl(e) {
  this._context = e;
}
Yl.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function (e, t, n, r, i, a) {
    this._context.bezierCurveTo(t, e, r, n, a, i);
  },
};
function Xl(e) {
  return new ql(e);
}
function Zl(e) {
  return new Jl(e);
}
function Ql(e) {
  this._context = e;
}
Ql.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = []), (this._y = []));
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      n = e.length;
    if (n) {
      if (
        (this._line
          ? this._context.lineTo(e[0], t[0])
          : this._context.moveTo(e[0], t[0]),
        n === 2)
      )
        this._context.lineTo(e[1], t[1]);
      else
        for (var r = $l(e), i = $l(t), a = 0, o = 1; o < n; ++a, ++o)
          this._context.bezierCurveTo(
            r[0][a],
            i[0][a],
            r[1][a],
            i[1][a],
            e[o],
            t[o],
          );
    }
    ((this._line || (this._line !== 0 && n === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null));
  },
  point: function (e, t) {
    (this._x.push(+e), this._y.push(+t));
  },
};
function $l(e) {
  var t,
    n = e.length - 1,
    r,
    i = Array(n),
    a = Array(n),
    o = Array(n);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
    ((i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]));
  for (
    i[n - 1] = 2, a[n - 1] = 7, o[n - 1] = 8 * e[n - 1] + e[n], t = 1;
    t < n;
    ++t
  )
    ((r = i[t] / a[t - 1]), (a[t] -= r), (o[t] -= r * o[t - 1]));
  for (i[n - 1] = o[n - 1] / a[n - 1], t = n - 2; t >= 0; --t)
    i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[n - 1] = (e[n] + i[n - 1]) / 2, t = 0; t < n - 1; ++t)
    a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function eu(e) {
  return new Ql(e);
}
function tu(e, t) {
  ((this._context = e), (this._t = t));
}
tu.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = this._y = NaN), (this._point = 0));
  },
  lineEnd: function () {
    (0 < this._t &&
      this._t < 1 &&
      this._point === 2 &&
      this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
      this._line >= 0 &&
        ((this._t = 1 - this._t), (this._line = 1 - this._line)));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        if (this._t <= 0)
          (this._context.lineTo(this._x, t), this._context.lineTo(e, t));
        else {
          var n = this._x * (1 - this._t) + e * this._t;
          (this._context.lineTo(n, this._y), this._context.lineTo(n, t));
        }
    }
    ((this._x = e), (this._y = t));
  },
};
function nu(e) {
  return new tu(e, 0.5);
}
function ru(e) {
  return new tu(e, 0);
}
function iu(e) {
  return new tu(e, 1);
}
function au(e, t) {
  if ((o = e.length) > 1)
    for (var n = 1, r, i, a = e[t[0]], o, s = a.length; n < o; ++n)
      for (i = a, a = e[t[n]], r = 0; r < s; ++r)
        a[r][1] += a[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
}
function ou(e) {
  for (var t = e.length, n = Array(t); --t >= 0;) n[t] = t;
  return n;
}
function su(e, t) {
  return e[t];
}
function cu(e) {
  let t = [];
  return ((t.key = e), t);
}
function lu() {
  var e = W([]),
    t = ou,
    n = au,
    r = su;
  function i(i) {
    var a = Array.from(e.apply(this, arguments), cu),
      o,
      s = a.length,
      c = -1,
      l;
    for (let e of i)
      for (o = 0, ++c; o < s; ++o)
        (a[o][c] = [0, +r(e, a[o].key, c, i)]).data = e;
    for (o = 0, l = il(t(a)); o < s; ++o) a[l[o]].index = o;
    return (n(a, l), a);
  }
  return (
    (i.keys = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : W(Array.from(t))), i)
        : e;
    }),
    (i.value = function (e) {
      return arguments.length
        ? ((r = typeof e == `function` ? e : W(+e)), i)
        : r;
    }),
    (i.order = function (e) {
      return arguments.length
        ? ((t = e == null ? ou : typeof e == `function` ? e : W(Array.from(e))),
          i)
        : t;
    }),
    (i.offset = function (e) {
      return arguments.length ? ((n = e ?? au), i) : n;
    }),
    i
  );
}
function uu(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = n = 0; n < r; ++n) o += e[n][i][1] || 0;
      if (o) for (n = 0; n < r; ++n) e[n][i][1] /= o;
    }
    au(e, t);
  }
}
function du(e, t) {
  if ((i = e.length) > 0) {
    for (var n = 0, r = e[t[0]], i, a = r.length; n < a; ++n) {
      for (var o = 0, s = 0; o < i; ++o) s += e[o][n][1] || 0;
      r[n][1] += r[n][0] = -s / 2;
    }
    au(e, t);
  }
}
function fu(e, t) {
  if ((o = e.length) > 0 && (a = (i = e[t[0]]).length) > 0) {
    for (var n = 0, r = 1, i, a, o; r < a; ++r) {
      for (var s = 0, c = 0, l = 0; s < o; ++s) {
        for (
          var u = e[t[s]],
            d = u[r][1] || 0,
            f = (d - (u[r - 1][1] || 0)) / 2,
            p = 0;
          p < s;
          ++p
        ) {
          var m = e[t[p]],
            h = m[r][1] || 0,
            g = m[r - 1][1] || 0;
          f += h - g;
        }
        ((c += d), (l += f * d));
      }
      ((i[r - 1][1] += i[r - 1][0] = n), c && (n -= l / c));
    }
    ((i[r - 1][1] += i[r - 1][0] = n), au(e, t));
  }
}
var pu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e === `__proto__`;
    }
    e.isUnsafeProperty = t;
  }),
  mu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      switch (typeof e) {
        case `number`:
        case `symbol`:
          return !1;
        case `string`:
          return e.includes(`.`) || e.includes(`[`) || e.includes(`]`);
      }
    }
    e.isDeepKey = t;
  }),
  hu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `string` || typeof e == `symbol`
        ? e
        : Object.is(e?.valueOf?.(), -0)
          ? `-0`
          : String(e);
    }
    e.toKey = t;
  }),
  gu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      let t = [],
        n = e.length;
      if (n === 0) return t;
      let r = 0,
        i = ``,
        a = ``,
        o = !1;
      for (e.charCodeAt(0) === 46 && (t.push(``), r++); r < n;) {
        let s = e[r];
        (a
          ? s === `\\` && r + 1 < n
            ? (r++, (i += e[r]))
            : s === a
              ? (a = ``)
              : (i += s)
          : o
            ? s === `"` || s === `'`
              ? (a = s)
              : s === `]`
                ? ((o = !1), t.push(i), (i = ``))
                : (i += s)
            : s === `[`
              ? ((o = !0), (i &&= (t.push(i), ``)))
              : s === `.`
                ? (i &&= (t.push(i), ``))
                : (i += s),
          r++);
      }
      return (i && t.push(i), t);
    }
    e.toPath = t;
  }),
  _u = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = pu(),
      n = mu(),
      r = hu(),
      i = gu();
    function a(e, s, c) {
      if (e == null) return c;
      switch (typeof s) {
        case `string`: {
          if (t.isUnsafeProperty(s)) return c;
          let r = e[s];
          return r === void 0 ? (n.isDeepKey(s) ? a(e, i.toPath(s), c) : c) : r;
        }
        case `number`:
        case `symbol`: {
          typeof s == `number` && (s = r.toKey(s));
          let t = e[s];
          return t === void 0 ? c : t;
        }
        default: {
          if (Array.isArray(s)) return o(e, s, c);
          if (
            ((s = Object.is(s?.valueOf(), -0) ? `-0` : String(s)),
            t.isUnsafeProperty(s))
          )
            return c;
          let n = e[s];
          return n === void 0 ? c : n;
        }
      }
    }
    function o(e, n, r) {
      if (n.length === 0) return r;
      let i = e;
      for (let e = 0; e < n.length; e++) {
        if (i == null || t.isUnsafeProperty(n[e])) return r;
        i = i[n[e]];
      }
      return i === void 0 ? r : i;
    }
    e.get = a;
  }),
  vu = n((e, t) => {
    t.exports = _u().get;
  }),
  yu = e(vu()),
  bu = (e) => (e === 0 ? 0 : e > 0 ? 1 : -1),
  xu = (e) => typeof e == `number` && e != +e,
  Su = (e) => typeof e == `string` && e.indexOf(`%`) === e.length - 1,
  G = (e) => (typeof e == `number` || e instanceof Number) && !xu(e),
  Cu = (e) => G(e) || typeof e == `string`,
  wu = 0,
  Tu = (e) => {
    var t = ++wu;
    return `${e || ``}${t}`;
  },
  Eu = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      r = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    if (!G(e) && typeof e != `string`) return n;
    var i;
    if (Su(e)) {
      if (t == null) return n;
      var a = e.indexOf(`%`);
      i = (t * parseFloat(e.slice(0, a))) / 100;
    } else i = +e;
    return (xu(i) && (i = n), r && t != null && i > t && (i = t), i);
  },
  Du = (e) => {
    if (!Array.isArray(e)) return !1;
    for (var t = e.length, n = {}, r = 0; r < t; r++)
      if (!n[e[r]]) n[e[r]] = !0;
      else return !0;
    return !1;
  };
function Ou(e, t, n) {
  return G(e) && G(t) ? e + n * (t - e) : t;
}
function ku(e, t, n) {
  if (e && e.length)
    return e.find(
      (e) => e && (typeof t == `function` ? t(e) : (0, yu.default)(e, t)) === n,
    );
}
var Au = (e) => e == null,
  ju = (e) => (Au(e) ? e : `${e.charAt(0).toUpperCase()}${e.slice(1)}`),
  Mu = [`type`, `size`, `sizeType`];
function Nu() {
  return (
    (Nu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Nu.apply(null, arguments)
  );
}
function Pu(e, t) {
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
function Fu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Pu(Object(n), !0).forEach(function (t) {
          Iu(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Pu(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Iu(e, t, n) {
  return (
    (t = Lu(t)) in e
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
function Lu(e) {
  var t = Ru(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ru(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function zu(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Bu(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Bu(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Vu = {
    symbolCircle: ml,
    symbolCross: hl,
    symbolDiamond: vl,
    symbolSquare: yl,
    symbolStar: wl,
    symbolTriangle: El,
    symbolWye: jl,
  },
  Hu = Math.PI / 180,
  Uu = (e) => Vu[`symbol${ju(e)}`] || ml,
  Wu = (e, t, n) => {
    if (t === `area`) return e;
    switch (n) {
      case `cross`:
        return (5 * e * e) / 9;
      case `diamond`:
        return (0.5 * e * e) / Math.sqrt(3);
      case `square`:
        return e * e;
      case `star`:
        var r = 18 * Hu;
        return (
          1.25 * e * e * (Math.tan(r) - Math.tan(r * 2) * Math.tan(r) ** 2)
        );
      case `triangle`:
        return (Math.sqrt(3) * e * e) / 4;
      case `wye`:
        return ((21 - 10 * Math.sqrt(3)) * e * e) / 8;
      default:
        return (Math.PI * e * e) / 4;
    }
  },
  Gu = (e, t) => {
    Vu[`symbol${ju(e)}`] = t;
  },
  Ku = (e) => {
    var { type: t = `circle`, size: n = 64, sizeType: r = `area` } = e,
      i = Fu(Fu({}, zu(e, Mu)), {}, { type: t, size: n, sizeType: r }),
      a = `circle`;
    typeof t == `string` && (a = t);
    var o = () => {
        var e = Uu(a),
          t = Ml()
            .type(e)
            .size(Wu(n, r, a))();
        if (t !== null) return t;
      },
      { className: s, cx: c, cy: l } = i,
      u = jc(i);
    return c === +c && l === +l && n === +n
      ? R.createElement(
          `path`,
          Nu({}, u, {
            className: U(`recharts-symbols`, s),
            transform: `translate(${c}, ${l})`,
            d: o(),
          }),
        )
      : null;
  };
Ku.registerSymbol = Gu;
var qu = (e, t) => {
    if (!e || typeof e == `function` || typeof e == `boolean`) return null;
    var n = e;
    if (
      ((0, R.isValidElement)(e) && (n = e.props),
      typeof n != `object` && typeof n != `function`)
    )
      return null;
    var r = {};
    return (
      Object.keys(n).forEach((e) => {
        Tc(e) && (r[e] = t || ((t) => n[e](n, t)));
      }),
      r
    );
  },
  Ju = (e, t, n) => (r) => (e(t, n, r), null),
  Yu = (e, t, n) => {
    if (e === null || (typeof e != `object` && typeof e != `function`))
      return null;
    var r = null;
    return (
      Object.keys(e).forEach((i) => {
        var a = e[i];
        Tc(i) && typeof a == `function` && ((r ||= {}), (r[i] = Ju(a, t, n)));
      }),
      r
    );
  },
  Xu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e, t) {
      let n = new Map();
      for (let r = 0; r < e.length; r++) {
        let i = e[r],
          a = t(i);
        n.has(a) || n.set(a, i);
      }
      return Array.from(n.values());
    }
    e.uniqBy = t;
  }),
  Zu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e;
    }
    e.identity = t;
  }),
  Qu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Number.isSafeInteger(e) && e >= 0;
    }
    e.isLength = t;
  }),
  $u = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Qu();
    function n(e) {
      return e != null && typeof e != `function` && t.isLength(e.length);
    }
    e.isArrayLike = n;
  }),
  ed = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `object` && !!e;
    }
    e.isObjectLike = t;
  }),
  td = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = $u(),
      n = ed();
    function r(e) {
      return n.isObjectLike(e) && t.isArrayLike(e);
    }
    e.isArrayLikeObject = r;
  }),
  nd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = _u();
    function n(e) {
      return function (n) {
        return t.get(n, e);
      };
    }
    e.property = n;
  }),
  rd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e !== null && (typeof e == `object` || typeof e == `function`);
    }
    e.isObject = t;
  }),
  id = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e == null || (typeof e != `object` && typeof e != `function`);
    }
    e.isPrimitive = t;
  }),
  ad = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e, t) {
      return e === t || (Number.isNaN(e) && Number.isNaN(t));
    }
    e.eq = t;
  }),
  od = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = sd(),
      n = rd(),
      r = id(),
      i = ad();
    function a(e, n, r) {
      return typeof r == `function`
        ? o(
            e,
            n,
            function e(t, n, i, a, s, c) {
              let l = r(t, n, i, a, s, c);
              return l === void 0 ? o(t, n, e, c) : !!l;
            },
            new Map(),
          )
        : t.isMatch(e, n);
    }
    function o(e, t, r, a) {
      if (t === e) return !0;
      switch (typeof t) {
        case `object`:
          return s(e, t, r, a);
        case `function`:
          return Object.keys(t).length > 0 ? o(e, { ...t }, r, a) : i.eq(e, t);
        default:
          return n.isObject(e) ? typeof t != `string` || t === `` : i.eq(e, t);
      }
    }
    function s(e, t, n, i) {
      if (t == null) return !0;
      if (Array.isArray(t)) return l(e, t, n, i);
      if (t instanceof Map) return c(e, t, n, i);
      if (t instanceof Set) return u(e, t, n, i);
      let a = Object.keys(t);
      if (e == null) return a.length === 0;
      if (a.length === 0) return !0;
      if (i && i.has(t)) return i.get(t) === e;
      i && i.set(t, e);
      try {
        for (let o = 0; o < a.length; o++) {
          let s = a[o];
          if (
            (!r.isPrimitive(e) && !(s in e)) ||
            (t[s] === void 0 && e[s] !== void 0) ||
            (t[s] === null && e[s] !== null) ||
            !n(e[s], t[s], s, e, t, i)
          )
            return !1;
        }
        return !0;
      } finally {
        i && i.delete(t);
      }
    }
    function c(e, t, n, r) {
      if (t.size === 0) return !0;
      if (!(e instanceof Map)) return !1;
      for (let [i, a] of t.entries())
        if (n(e.get(i), a, i, e, t, r) === !1) return !1;
      return !0;
    }
    function l(e, t, n, r) {
      if (t.length === 0) return !0;
      if (!Array.isArray(e)) return !1;
      let i = new Set();
      for (let a = 0; a < t.length; a++) {
        let o = t[a],
          s = !1;
        for (let c = 0; c < e.length; c++) {
          if (i.has(c)) continue;
          let l = e[c],
            u = !1;
          if ((n(l, o, a, e, t, r) && (u = !0), u)) {
            (i.add(c), (s = !0));
            break;
          }
        }
        if (!s) return !1;
      }
      return !0;
    }
    function u(e, t, n, r) {
      return t.size === 0 || (e instanceof Set && l([...e], [...t], n, r));
    }
    ((e.isMatchWith = a), (e.isSetMatch = u));
  }),
  sd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = od();
    function n(e, n) {
      return t.isMatchWith(e, n, () => void 0);
    }
    e.isMatch = n;
  }),
  cd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Object.getOwnPropertySymbols(e).filter((t) =>
        Object.prototype.propertyIsEnumerable.call(e, t),
      );
    }
    e.getSymbols = t;
  }),
  ld = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e == null
        ? e === void 0
          ? `[object Undefined]`
          : `[object Null]`
        : Object.prototype.toString.call(e);
    }
    e.getTag = t;
  }),
  ud = n((e) => {
    (Object.defineProperty(e, Symbol.toStringTag, { value: `Module` }),
      (e.argumentsTag = `[object Arguments]`),
      (e.arrayBufferTag = `[object ArrayBuffer]`),
      (e.arrayTag = `[object Array]`),
      (e.bigInt64ArrayTag = `[object BigInt64Array]`),
      (e.bigUint64ArrayTag = `[object BigUint64Array]`),
      (e.booleanTag = `[object Boolean]`),
      (e.dataViewTag = `[object DataView]`),
      (e.dateTag = `[object Date]`),
      (e.errorTag = `[object Error]`),
      (e.float32ArrayTag = `[object Float32Array]`),
      (e.float64ArrayTag = `[object Float64Array]`),
      (e.functionTag = `[object Function]`),
      (e.int16ArrayTag = `[object Int16Array]`),
      (e.int32ArrayTag = `[object Int32Array]`),
      (e.int8ArrayTag = `[object Int8Array]`),
      (e.mapTag = `[object Map]`),
      (e.numberTag = `[object Number]`),
      (e.objectTag = `[object Object]`),
      (e.regexpTag = `[object RegExp]`),
      (e.setTag = `[object Set]`),
      (e.stringTag = `[object String]`),
      (e.symbolTag = `[object Symbol]`),
      (e.uint16ArrayTag = `[object Uint16Array]`),
      (e.uint32ArrayTag = `[object Uint32Array]`),
      (e.uint8ArrayTag = `[object Uint8Array]`),
      (e.uint8ClampedArrayTag = `[object Uint8ClampedArray]`));
  }),
  dd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return ArrayBuffer.isView(e) && !(e instanceof DataView);
    }
    e.isTypedArray = t;
  }),
  fd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = cd(),
      n = ld(),
      r = ud(),
      i = id(),
      a = dd();
    function o(e, t) {
      return s(e, void 0, e, new Map(), t);
    }
    function s(e, t, n, r = new Map(), o = void 0) {
      let u = o?.(e, t, n, r);
      if (u !== void 0) return u;
      if (i.isPrimitive(e)) return e;
      if (r.has(e)) return r.get(e);
      if (Array.isArray(e)) {
        let t = Array(e.length);
        r.set(e, t);
        for (let i = 0; i < e.length; i++) t[i] = s(e[i], i, n, r, o);
        return (
          Object.hasOwn(e, `index`) && (t.index = e.index),
          Object.hasOwn(e, `input`) && (t.input = e.input),
          t
        );
      }
      if (e instanceof Date) return new Date(e.getTime());
      if (e instanceof RegExp) {
        let t = new RegExp(e.source, e.flags);
        return ((t.lastIndex = e.lastIndex), t);
      }
      if (e instanceof Map) {
        let t = new Map();
        r.set(e, t);
        for (let [i, a] of e) t.set(i, s(a, i, n, r, o));
        return t;
      }
      if (e instanceof Set) {
        let t = new Set();
        r.set(e, t);
        for (let i of e) t.add(s(i, void 0, n, r, o));
        return t;
      }
      if (typeof Buffer < `u` && Buffer.isBuffer(e)) return e.subarray();
      if (a.isTypedArray(e)) {
        let t = new (Object.getPrototypeOf(e).constructor)(e.length);
        r.set(e, t);
        for (let i = 0; i < e.length; i++) t[i] = s(e[i], i, n, r, o);
        return t;
      }
      if (
        e instanceof ArrayBuffer ||
        (typeof SharedArrayBuffer < `u` && e instanceof SharedArrayBuffer)
      )
        return e.slice(0);
      if (e instanceof DataView) {
        let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
        return (r.set(e, t), c(t, e, n, r, o), t);
      }
      if (typeof File < `u` && e instanceof File) {
        let t = new File([e], e.name, { type: e.type });
        return (r.set(e, t), c(t, e, n, r, o), t);
      }
      if (e instanceof Blob) {
        let t = new Blob([e], { type: e.type });
        return (r.set(e, t), c(t, e, n, r, o), t);
      }
      if (e instanceof Error) {
        let t = new e.constructor();
        return (
          r.set(e, t),
          (t.message = e.message),
          (t.name = e.name),
          (t.stack = e.stack),
          (t.cause = e.cause),
          c(t, e, n, r, o),
          t
        );
      }
      if (typeof e == `object` && l(e)) {
        let t = Object.create(Object.getPrototypeOf(e));
        return (r.set(e, t), c(t, e, n, r, o), t);
      }
      return e;
    }
    function c(e, n, r = e, i, a) {
      let o = [...Object.keys(n), ...t.getSymbols(n)];
      for (let t = 0; t < o.length; t++) {
        let c = o[t],
          l = Object.getOwnPropertyDescriptor(e, c);
        (l == null || l.writable) && (e[c] = s(n[c], c, r, i, a));
      }
    }
    function l(e) {
      switch (n.getTag(e)) {
        case r.argumentsTag:
        case r.arrayTag:
        case r.arrayBufferTag:
        case r.dataViewTag:
        case r.booleanTag:
        case r.dateTag:
        case r.float32ArrayTag:
        case r.float64ArrayTag:
        case r.int8ArrayTag:
        case r.int16ArrayTag:
        case r.int32ArrayTag:
        case r.mapTag:
        case r.numberTag:
        case r.objectTag:
        case r.regexpTag:
        case r.setTag:
        case r.stringTag:
        case r.symbolTag:
        case r.uint8ArrayTag:
        case r.uint8ClampedArrayTag:
        case r.uint16ArrayTag:
        case r.uint32ArrayTag:
          return !0;
        default:
          return !1;
      }
    }
    ((e.cloneDeepWith = o), (e.cloneDeepWithImpl = s), (e.copyProperties = c));
  }),
  pd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = fd();
    function n(e) {
      return t.cloneDeepWithImpl(e, void 0, e, new Map(), void 0);
    }
    e.cloneDeep = n;
  }),
  md = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = sd(),
      n = pd();
    function r(e) {
      return ((e = n.cloneDeep(e)), (n) => t.isMatch(n, e));
    }
    e.matches = r;
  }),
  hd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = fd(),
      n = ud();
    function r(e, r) {
      return t.cloneDeepWith(e, (i, a, o, s) => {
        let c = r?.(i, a, o, s);
        if (c !== void 0) return c;
        if (typeof e == `object`)
          switch (Object.prototype.toString.call(e)) {
            case n.numberTag:
            case n.stringTag:
            case n.booleanTag: {
              let n = new e.constructor(e?.valueOf());
              return (t.copyProperties(n, e), n);
            }
            case n.argumentsTag: {
              let n = {};
              return (
                t.copyProperties(n, e),
                (n.length = e.length),
                (n[Symbol.iterator] = e[Symbol.iterator]),
                n
              );
            }
            default:
              return;
          }
      });
    }
    e.cloneDeepWith = r;
  }),
  gd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = hd();
    function n(e) {
      return t.cloneDeepWith(e);
    }
    e.cloneDeep = n;
  }),
  _d = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = /^(?:0|[1-9]\d*)$/;
    function n(e, n = 2 ** 53 - 1) {
      switch (typeof e) {
        case `number`:
          return Number.isInteger(e) && e >= 0 && e < n;
        case `symbol`:
          return !1;
        case `string`:
          return t.test(e);
      }
    }
    e.isIndex = n;
  }),
  vd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = ld();
    function n(e) {
      return (
        typeof e == `object` && !!e && t.getTag(e) === `[object Arguments]`
      );
    }
    e.isArguments = n;
  }),
  yd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = mu(),
      n = _d(),
      r = vd(),
      i = gu();
    function a(e, a) {
      let o;
      if (
        ((o = Array.isArray(a)
          ? a
          : typeof a == `string` && t.isDeepKey(a) && e?.[a] == null
            ? i.toPath(a)
            : [a]),
        o.length === 0)
      )
        return !1;
      let s = e;
      for (let e = 0; e < o.length; e++) {
        let t = o[e];
        if (
          (s == null || !Object.hasOwn(s, t)) &&
          !(
            (Array.isArray(s) || r.isArguments(s)) &&
            n.isIndex(t) &&
            t < s.length
          )
        )
          return !1;
        s = s[t];
      }
      return !0;
    }
    e.has = a;
  }),
  bd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = sd(),
      n = hu(),
      r = gd(),
      i = _u(),
      a = yd();
    function o(e, o) {
      switch (typeof e) {
        case `object`:
          Object.is(e?.valueOf(), -0) && (e = `-0`);
          break;
        case `number`:
          e = n.toKey(e);
      }
      return (
        (o = r.cloneDeep(o)),
        function (n) {
          let r = i.get(n, e);
          return r === void 0
            ? a.has(n, e)
            : o === void 0
              ? r === void 0
              : t.isMatch(r, o);
        }
      );
    }
    e.matchesProperty = o;
  }),
  xd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Zu(),
      n = nd(),
      r = md(),
      i = bd();
    function a(e) {
      if (e == null) return t.identity;
      switch (typeof e) {
        case `function`:
          return e;
        case `object`:
          return Array.isArray(e) && e.length === 2
            ? i.matchesProperty(e[0], e[1])
            : r.matches(e);
        case `string`:
        case `symbol`:
        case `number`:
          return n.property(e);
      }
    }
    e.iteratee = a;
  }),
  Sd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Xu(),
      n = Zu(),
      r = td(),
      i = xd();
    function a(e, a = n.identity) {
      return r.isArrayLikeObject(e)
        ? t.uniqBy(Array.from(e), i.iteratee(a))
        : [];
    }
    e.uniqBy = a;
  }),
  Cd = e(
    n((e, t) => {
      t.exports = Sd().uniqBy;
    })(),
  );
function wd(e, t, n) {
  return t === !0
    ? (0, Cd.default)(e, n)
    : typeof t == `function`
      ? (0, Cd.default)(e, t)
      : e;
}
var Td = n((e) => {
    var t = i(),
      n = c();
    function r(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var a = typeof Object.is == `function` ? Object.is : r,
      o = n.useSyncExternalStore,
      s = t.useRef,
      l = t.useEffect,
      u = t.useMemo,
      d = t.useDebugValue;
    e.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
      var c = s(null);
      if (c.current === null) {
        var f = { hasValue: !1, value: null };
        c.current = f;
      } else f = c.current;
      c = u(
        function () {
          function e(e) {
            if (!o) {
              if (((o = !0), (s = e), (e = r(e)), i !== void 0 && f.hasValue)) {
                var t = f.value;
                if (i(t, e)) return (c = t);
              }
              return (c = e);
            }
            if (((t = c), a(s, e))) return t;
            var n = r(e);
            return i !== void 0 && i(t, n) ? ((s = e), t) : ((s = e), (c = n));
          }
          var o = !1,
            s,
            c,
            l = n === void 0 ? null : n;
          return [
            function () {
              return e(t());
            },
            l === null
              ? void 0
              : function () {
                  return e(l());
                },
          ];
        },
        [t, n, r, i],
      );
      var p = o(e, c[0], c[1]);
      return (
        l(
          function () {
            ((f.hasValue = !0), (f.value = p));
          },
          [p],
        ),
        d(p),
        p
      );
    };
  }),
  Ed = n((e, t) => {
    t.exports = Td();
  })(),
  Dd = (0, R.createContext)(null),
  Od = (e) => e,
  K = () => {
    var e = (0, R.useContext)(Dd);
    return e ? e.store.dispatch : Od;
  },
  kd = () => {},
  Ad = () => kd,
  jd = (e, t) => e === t;
function q(e) {
  var t = (0, R.useContext)(Dd);
  return (0, Ed.useSyncExternalStoreWithSelector)(
    t ? t.subscription.addNestedSub : Ad,
    t ? t.store.getState : kd,
    t ? t.store.getState : kd,
    t ? e : kd,
    jd,
  );
}
function Md(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function Nd(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != `object`) throw TypeError(t);
}
function Pd(
  e,
  t = `expected all items to be functions, instead received the following types: `,
) {
  if (!e.every((e) => typeof e == `function`)) {
    let n = e
      .map((e) =>
        typeof e == `function` ? `function ${e.name || `unnamed`}()` : typeof e,
      )
      .join(`, `);
    throw TypeError(`${t}[${n}]`);
  }
}
var Fd = (e) => (Array.isArray(e) ? e : [e]);
function Id(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    Pd(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    t
  );
}
function Ld(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var Rd = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  zd = typeof WeakRef < `u` ? WeakRef : Rd,
  Bd = 0,
  Vd = 1;
function Hd() {
  return { s: Bd, v: void 0, o: null, p: null };
}
function Ud(e, t = {}) {
  let n = Hd(),
    { resultEqualityCheck: r } = t,
    i,
    a = 0;
  function o() {
    let t = n,
      { length: o } = arguments;
    for (let e = 0, n = o; e < n; e++) {
      let n = arguments[e];
      if (typeof n == `function` || (typeof n == `object` && n)) {
        let e = t.o;
        e === null && (t.o = e = new WeakMap());
        let r = e.get(n);
        r === void 0 ? ((t = Hd()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = Hd()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === Vd) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = i?.deref?.() ?? i;
      (e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new zd(c)
            : c));
    }
    return ((s.s = Vd), (s.v = c), c);
  }
  return (
    (o.clearCache = () => {
      ((n = Hd()), o.resetResultsCount());
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function Wd(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      (typeof o == `object` && ((a = o), (o = e.pop())),
        Md(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`,
        ));
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = Ud,
          argsMemoizeOptions: u = [],
          devModeChecks: d = {},
        } = { ...n, ...a },
        f = Fd(c),
        p = Fd(u),
        m = Id(e),
        h = s(
          function () {
            return (t++, o.apply(null, arguments));
          },
          ...f,
        ),
        g = l(
          function () {
            r++;
            let e = Ld(m, arguments);
            return ((i = h.apply(null, e)), i);
          },
          ...p,
        );
      return Object.assign(g, {
        resultFunc: o,
        memoizedResultFunc: h,
        dependencies: m,
        dependencyRecomputations: () => r,
        resetDependencyRecomputations: () => {
          r = 0;
        },
        lastResult: () => i,
        recomputations: () => t,
        resetRecomputations: () => {
          t = 0;
        },
        memoize: s,
        argsMemoize: l,
      });
    };
  return (Object.assign(r, { withTypes: () => r }), r);
}
var J = Wd(Ud),
  Gd = Object.assign(
    (e, t = J) => {
      Nd(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {}),
      );
    },
    { withTypes: () => Gd },
  ),
  Kd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `symbol`
        ? 1
        : e === null
          ? 2
          : e === void 0
            ? 3
            : e === e
              ? 0
              : 4;
    }
    e.compareValues = (e, n, r) => {
      if (e !== n) {
        let i = t(e),
          a = t(n);
        if (i === a && i === 0) {
          if (e < n) return r === `desc` ? 1 : -1;
          if (e > n) return r === `desc` ? -1 : 1;
        }
        return r === `desc` ? a - i : i - a;
      }
      return 0;
    };
  }),
  qd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `symbol` || e instanceof Symbol;
    }
    e.isSymbol = t;
  }),
  Jd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = qd(),
      n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      r = /^\w*$/;
    function i(e, i) {
      return Array.isArray(e)
        ? !1
        : typeof e == `number` ||
            typeof e == `boolean` ||
            e == null ||
            t.isSymbol(e)
          ? !0
          : (typeof e == `string` && (r.test(e) || !n.test(e))) ||
            (i != null && Object.hasOwn(i, e));
    }
    e.isKey = i;
  }),
  Yd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Kd(),
      n = Jd(),
      r = gu();
    function i(e, i, a, o) {
      if (e == null) return [];
      ((a = o ? void 0 : a),
        Array.isArray(e) || (e = Object.values(e)),
        Array.isArray(i) || (i = i == null ? [null] : [i]),
        i.length === 0 && (i = [null]),
        Array.isArray(a) || (a = a == null ? [] : [a]),
        (a = a.map((e) => String(e))));
      let s = (e, t) => {
          let n = e;
          for (let e = 0; e < t.length && n != null; ++e) n = n[t[e]];
          return n;
        },
        c = (e, t) =>
          t == null || e == null
            ? t
            : typeof e == `object` && `key` in e
              ? Object.hasOwn(t, e.key)
                ? t[e.key]
                : s(t, e.path)
              : typeof e == `function`
                ? e(t)
                : Array.isArray(e)
                  ? s(t, e)
                  : typeof t == `object`
                    ? t[e]
                    : t,
        l = i.map(
          (e) => (
            Array.isArray(e) && e.length === 1 && (e = e[0]),
            e == null ||
            typeof e == `function` ||
            Array.isArray(e) ||
            n.isKey(e)
              ? e
              : { key: e, path: r.toPath(e) }
          ),
        );
      return e
        .map((e) => ({ original: e, criteria: l.map((t) => c(t, e)) }))
        .slice()
        .sort((e, n) => {
          for (let r = 0; r < l.length; r++) {
            let i = t.compareValues(e.criteria[r], n.criteria[r], a[r]);
            if (i !== 0) return i;
          }
          return 0;
        })
        .map((e) => e.original);
    }
    e.orderBy = i;
  }),
  Xd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e, t = 1) {
      let n = [],
        r = Math.floor(t),
        i = (e, t) => {
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            Array.isArray(o) && t < r ? i(o, t + 1) : n.push(o);
          }
        };
      return (i(e, 0), n);
    }
    e.flatten = t;
  }),
  Zd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = _d(),
      n = $u(),
      r = rd(),
      i = ad();
    function a(e, a, o) {
      return r.isObject(o) &&
        ((typeof a == `number` &&
          n.isArrayLike(o) &&
          t.isIndex(a) &&
          a < o.length) ||
          (typeof a == `string` && a in o))
        ? i.eq(o[a], e)
        : !1;
    }
    e.isIterateeCall = a;
  }),
  Qd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Yd(),
      n = Xd(),
      r = Zd();
    function i(e, ...i) {
      let a = i.length;
      return (
        a > 1 && r.isIterateeCall(e, i[0], i[1])
          ? (i = [])
          : a > 2 && r.isIterateeCall(i[0], i[1], i[2]) && (i = [i[0]]),
        t.orderBy(e, n.flatten(i), [`asc`])
      );
    }
    e.sortBy = i;
  }),
  $d = e(
    n((e, t) => {
      t.exports = Qd().sortBy;
    })(),
  ),
  ef = (e) => e.legend.settings,
  tf = (e) => e.legend.size,
  nf = J([(e) => e.legend.payload, ef], (e, t) => {
    var { itemSorter: n } = t,
      r = e.flat(1);
    return n ? (0, $d.default)(r, n) : r;
  }),
  rf = 1;
function af() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    [t, n] = (0, R.useState)({ height: 0, left: 0, top: 0, width: 0 });
  return [
    t,
    (0, R.useCallback)(
      (e) => {
        if (e != null) {
          var r = e.getBoundingClientRect(),
            i = { height: r.height, left: r.left, top: r.top, width: r.width };
          (Math.abs(i.height - t.height) > rf ||
            Math.abs(i.left - t.left) > rf ||
            Math.abs(i.top - t.top) > rf ||
            Math.abs(i.width - t.width) > rf) &&
            n({ height: i.height, left: i.left, top: i.top, width: i.width });
        }
      },
      [t.width, t.height, t.top, t.left, ...e],
    ),
  ];
}
function of(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var sf = (typeof Symbol == `function` && Symbol.observable) || `@@observable`,
  cf = () => Math.random().toString(36).substring(7).split(``).join(`.`),
  lf = {
    INIT: `@@redux/INIT${cf()}`,
    REPLACE: `@@redux/REPLACE${cf()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${cf()}`,
  };
function uf(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function df(e, t, n) {
  if (typeof e != `function`) throw Error(of(2));
  if (
    (typeof t == `function` && typeof n == `function`) ||
    (typeof n == `function` && typeof arguments[3] == `function`)
  )
    throw Error(of(0));
  if (
    (typeof t == `function` && n === void 0 && ((n = t), (t = void 0)),
    n !== void 0)
  ) {
    if (typeof n != `function`) throw Error(of(1));
    return n(df)(e, t);
  }
  let r = e,
    i = t,
    a = new Map(),
    o = a,
    s = 0,
    c = !1;
  function l() {
    o === a &&
      ((o = new Map()),
      a.forEach((e, t) => {
        o.set(t, e);
      }));
  }
  function u() {
    if (c) throw Error(of(3));
    return i;
  }
  function d(e) {
    if (typeof e != `function`) throw Error(of(4));
    if (c) throw Error(of(5));
    let t = !0;
    l();
    let n = s++;
    return (
      o.set(n, e),
      function () {
        if (t) {
          if (c) throw Error(of(6));
          ((t = !1), l(), o.delete(n), (a = null));
        }
      }
    );
  }
  function f(e) {
    if (!uf(e)) throw Error(of(7));
    if (e.type === void 0) throw Error(of(8));
    if (typeof e.type != `string`) throw Error(of(17));
    if (c) throw Error(of(9));
    try {
      ((c = !0), (i = r(i, e)));
    } finally {
      c = !1;
    }
    return (
      (a = o).forEach((e) => {
        e();
      }),
      e
    );
  }
  function p(e) {
    if (typeof e != `function`) throw Error(of(10));
    ((r = e), f({ type: lf.REPLACE }));
  }
  function m() {
    let e = d;
    return {
      subscribe(t) {
        if (typeof t != `object` || !t) throw Error(of(11));
        function n() {
          let e = t;
          e.next && e.next(u());
        }
        return (n(), { unsubscribe: e(n) });
      },
      [sf]() {
        return this;
      },
    };
  }
  return (
    f({ type: lf.INIT }),
    { dispatch: f, subscribe: d, getState: u, replaceReducer: p, [sf]: m }
  );
}
function ff(e) {
  Object.keys(e).forEach((t) => {
    let n = e[t];
    if (n(void 0, { type: lf.INIT }) === void 0) throw Error(of(12));
    if (n(void 0, { type: lf.PROBE_UNKNOWN_ACTION() }) === void 0)
      throw Error(of(13));
  });
}
function pf(e) {
  let t = Object.keys(e),
    n = {};
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    typeof e[i] == `function` && (n[i] = e[i]);
  }
  let r = Object.keys(n),
    i;
  try {
    ff(n);
  } catch (e) {
    i = e;
  }
  return function (e = {}, t) {
    if (i) throw i;
    let a = !1,
      o = {};
    for (let i = 0; i < r.length; i++) {
      let s = r[i],
        c = n[s],
        l = e[s],
        u = c(l, t);
      if (u === void 0) throw (t && t.type, Error(of(14)));
      ((o[s] = u), (a ||= u !== l));
    }
    return ((a ||= r.length !== Object.keys(e).length), a ? o : e);
  };
}
function mf(...e) {
  return e.length === 0
    ? (e) => e
    : e.length === 1
      ? e[0]
      : e.reduce(
          (e, t) =>
            (...n) =>
              e(t(...n)),
        );
}
function hf(...e) {
  return (t) => (n, r) => {
    let i = t(n, r),
      a = () => {
        throw Error(of(15));
      },
      o = { getState: i.getState, dispatch: (e, ...t) => a(e, ...t) };
    return ((a = mf(...e.map((e) => e(o)))(i.dispatch)), { ...i, dispatch: a });
  };
}
function gf(e) {
  return uf(e) && `type` in e && typeof e.type == `string`;
}
var _f = Symbol.for(`immer-nothing`),
  vf = Symbol.for(`immer-draftable`),
  yf = Symbol.for(`immer-state`);
function bf(e, ...t) {
  throw Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var xf = Object.getPrototypeOf;
function Sf(e) {
  return !!e && !!e[yf];
}
function Cf(e) {
  return e
    ? Ef(e) ||
        Array.isArray(e) ||
        !!e[vf] ||
        !!e.constructor?.[vf] ||
        Mf(e) ||
        Nf(e)
    : !1;
}
var wf = Object.prototype.constructor.toString(),
  Tf = new WeakMap();
function Ef(e) {
  if (!e || typeof e != `object`) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null || t === Object.prototype) return !0;
  let n = Object.hasOwnProperty.call(t, `constructor`) && t.constructor;
  if (n === Object) return !0;
  if (typeof n != `function`) return !1;
  let r = Tf.get(n);
  return (
    r === void 0 && ((r = Function.toString.call(n)), Tf.set(n, r)), r === wf
  );
}
function Df(e, t, n = !0) {
  Of(e) === 0
    ? (n ? Reflect.ownKeys(e) : Object.keys(e)).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Of(e) {
  let t = e[yf];
  return t ? t.type_ : Array.isArray(e) ? 1 : Mf(e) ? 2 : Nf(e) ? 3 : 0;
}
function kf(e, t) {
  return Of(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Af(e, t, n) {
  let r = Of(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function jf(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
function Mf(e) {
  return e instanceof Map;
}
function Nf(e) {
  return e instanceof Set;
}
function Pf(e) {
  return e.copy_ || e.base_;
}
function Ff(e, t) {
  if (Mf(e)) return new Map(e);
  if (Nf(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  let n = Ef(e);
  if (t === !0 || (t === `class_only` && !n)) {
    let t = Object.getOwnPropertyDescriptors(e);
    delete t[yf];
    let n = Reflect.ownKeys(t);
    for (let r = 0; r < n.length; r++) {
      let i = n[r],
        a = t[i];
      (a.writable === !1 && ((a.writable = !0), (a.configurable = !0)),
        (a.get || a.set) &&
          (t[i] = {
            configurable: !0,
            writable: !0,
            enumerable: a.enumerable,
            value: e[i],
          }));
    }
    return Object.create(xf(e), t);
  }
  {
    let t = xf(e);
    if (t !== null && n) return { ...e };
    let r = Object.create(t);
    return Object.assign(r, e);
  }
}
function If(e, t = !1) {
  return (
    zf(e) ||
      Sf(e) ||
      !Cf(e) ||
      (Of(e) > 1 &&
        Object.defineProperties(e, { set: Rf, add: Rf, clear: Rf, delete: Rf }),
      Object.freeze(e),
      t && Object.values(e).forEach((e) => If(e, !0))),
    e
  );
}
function Lf() {
  bf(2);
}
var Rf = { value: Lf };
function zf(e) {
  return typeof e != `object` || !e || Object.isFrozen(e);
}
var Bf = {};
function Vf(e) {
  let t = Bf[e];
  return (t || bf(0, e), t);
}
var Hf;
function Uf() {
  return Hf;
}
function Wf(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Gf(e, t) {
  t &&
    (Vf(`Patches`),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Kf(e) {
  (qf(e), e.drafts_.forEach(Yf), (e.drafts_ = null));
}
function qf(e) {
  e === Hf && (Hf = e.parent_);
}
function Jf(e) {
  return (Hf = Wf(Hf, e));
}
function Yf(e) {
  let t = e[yf];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Xf(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  let n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[yf].modified_ && (Kf(t), bf(4)),
        Cf(e) && ((e = Zf(t, e)), t.parent_ || $f(t, e)),
        t.patches_ &&
          Vf(`Patches`).generateReplacementPatches_(
            n[yf].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = Zf(t, n, [])),
    Kf(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e === _f ? void 0 : e
  );
}
function Zf(e, t, n) {
  if (zf(t)) return t;
  let r = e.immer_.shouldUseStrictIteration(),
    i = t[yf];
  if (!i) return (Df(t, (r, a) => Qf(e, i, t, r, a, n), r), t);
  if (i.scope_ !== e) return t;
  if (!i.modified_) return ($f(e, i.base_, !0), i.base_);
  if (!i.finalized_) {
    ((i.finalized_ = !0), i.scope_.unfinalizedDrafts_--);
    let t = i.copy_,
      a = t,
      o = !1;
    (i.type_ === 3 && ((a = new Set(t)), t.clear(), (o = !0)),
      Df(a, (r, a) => Qf(e, i, t, r, a, n, o), r),
      $f(e, t, !1),
      n &&
        e.patches_ &&
        Vf(`Patches`).generatePatches_(i, n, e.patches_, e.inversePatches_));
  }
  return i.copy_;
}
function Qf(e, t, n, r, i, a, o) {
  if (i == null || (typeof i != `object` && !o)) return;
  let s = zf(i);
  if (!s || o) {
    if (Sf(i)) {
      let o = Zf(
        e,
        i,
        a && t && t.type_ !== 3 && !kf(t.assigned_, r) ? a.concat(r) : void 0,
      );
      if ((Af(n, r, o), Sf(o))) e.canAutoFreeze_ = !1;
      else return;
    } else o && n.add(i);
    if (Cf(i) && !s) {
      if (
        (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) ||
        (t && t.base_ && t.base_[r] === i && s)
      )
        return;
      (Zf(e, i),
        (!t || !t.scope_.parent_) &&
          typeof r != `symbol` &&
          (Mf(n)
            ? n.has(r)
            : Object.prototype.propertyIsEnumerable.call(n, r)) &&
          $f(e, i));
    }
  }
}
function $f(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && If(t, n);
}
function ep(e, t) {
  let n = Array.isArray(e),
    r = {
      type_: +!!n,
      scope_: t ? t.scope_ : Uf(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    },
    i = r,
    a = tp;
  n && ((i = [r]), (a = np));
  let { revoke: o, proxy: s } = Proxy.revocable(i, a);
  return ((r.draft_ = s), (r.revoke_ = o), s);
}
var tp = {
    get(e, t) {
      if (t === yf) return e;
      let n = Pf(e);
      if (!kf(n, t)) return ip(e, n, t);
      let r = n[t];
      return e.finalized_ || !Cf(r)
        ? r
        : r === rp(e.base_, t)
          ? (sp(e), (e.copy_[t] = lp(r, e)))
          : r;
    },
    has(e, t) {
      return t in Pf(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Pf(e));
    },
    set(e, t, n) {
      let r = ap(Pf(e), t);
      if (r?.set) return (r.set.call(e.draft_, n), !0);
      if (!e.modified_) {
        let r = rp(Pf(e), t),
          i = r?.[yf];
        if (i && i.base_ === n)
          return ((e.copy_[t] = n), (e.assigned_[t] = !1), !0);
        if (jf(n, r) && (n !== void 0 || kf(e.base_, t))) return !0;
        (sp(e), op(e));
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        rp(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), sp(e), op(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      let n = Pf(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== `length`,
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      bf(11);
    },
    getPrototypeOf(e) {
      return xf(e.base_);
    },
    setPrototypeOf() {
      bf(12);
    },
  },
  np = {};
(Df(tp, (e, t) => {
  np[e] = function () {
    return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
  };
}),
  (np.deleteProperty = function (e, t) {
    return np.set.call(this, e, t, void 0);
  }),
  (np.set = function (e, t, n) {
    return tp.set.call(this, e[0], t, n, e[0]);
  }));
function rp(e, t) {
  let n = e[yf];
  return (n ? Pf(n) : e)[t];
}
function ip(e, t, n) {
  let r = ap(t, n);
  return r ? (`value` in r ? r.value : r.get?.call(e.draft_)) : void 0;
}
function ap(e, t) {
  if (!(t in e)) return;
  let n = xf(e);
  for (; n;) {
    let e = Object.getOwnPropertyDescriptor(n, t);
    if (e) return e;
    n = xf(n);
  }
}
function op(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && op(e.parent_));
}
function sp(e) {
  e.copy_ ||= Ff(e.base_, e.scope_.immer_.useStrictShallowCopy_);
}
var cp = class {
  constructor(e) {
    ((this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.useStrictIteration_ = !0),
      (this.produce = (e, t, n) => {
        if (typeof e == `function` && typeof t != `function`) {
          let n = t;
          t = e;
          let r = this;
          return function (e = n, ...i) {
            return r.produce(e, (e) => t.call(this, e, ...i));
          };
        }
        (typeof t != `function` && bf(6),
          n !== void 0 && typeof n != `function` && bf(7));
        let r;
        if (Cf(e)) {
          let i = Jf(this),
            a = lp(e, void 0),
            o = !0;
          try {
            ((r = t(a)), (o = !1));
          } finally {
            o ? Kf(i) : qf(i);
          }
          return (Gf(i, n), Xf(r, i));
        }
        if (!e || typeof e != `object`) {
          if (
            ((r = t(e)),
            r === void 0 && (r = e),
            r === _f && (r = void 0),
            this.autoFreeze_ && If(r, !0),
            n)
          ) {
            let t = [],
              i = [];
            (Vf(`Patches`).generateReplacementPatches_(e, r, t, i), n(t, i));
          }
          return r;
        }
        bf(1, e);
      }),
      (this.produceWithPatches = (e, t) => {
        if (typeof e == `function`)
          return (t, ...n) => this.produceWithPatches(t, (t) => e(t, ...n));
        let n, r;
        return [
          this.produce(e, t, (e, t) => {
            ((n = e), (r = t));
          }),
          n,
          r,
        ];
      }),
      typeof e?.autoFreeze == `boolean` && this.setAutoFreeze(e.autoFreeze),
      typeof e?.useStrictShallowCopy == `boolean` &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy),
      typeof e?.useStrictIteration == `boolean` &&
        this.setUseStrictIteration(e.useStrictIteration));
  }
  createDraft(e) {
    (Cf(e) || bf(8), Sf(e) && (e = up(e)));
    let t = Jf(this),
      n = lp(e, void 0);
    return ((n[yf].isManual_ = !0), qf(t), n);
  }
  finishDraft(e, t) {
    let n = e && e[yf];
    (n && n.isManual_) || bf(9);
    let { scope_: r } = n;
    return (Gf(r, t), Xf(void 0, r));
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  setUseStrictIteration(e) {
    this.useStrictIteration_ = e;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      let r = t[n];
      if (r.path.length === 0 && r.op === `replace`) {
        e = r.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    let r = Vf(`Patches`).applyPatches_;
    return Sf(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
  }
};
function lp(e, t) {
  let n = Mf(e)
    ? Vf(`MapSet`).proxyMap_(e, t)
    : Nf(e)
      ? Vf(`MapSet`).proxySet_(e, t)
      : ep(e, t);
  return ((t ? t.scope_ : Uf()).drafts_.push(n), n);
}
function up(e) {
  return (Sf(e) || bf(10, e), dp(e));
}
function dp(e) {
  if (!Cf(e) || zf(e)) return e;
  let t = e[yf],
    n,
    r = !0;
  if (t) {
    if (!t.modified_) return t.base_;
    ((t.finalized_ = !0),
      (n = Ff(e, t.scope_.immer_.useStrictShallowCopy_)),
      (r = t.scope_.immer_.shouldUseStrictIteration()));
  } else n = Ff(e, !0);
  return (
    Df(
      n,
      (e, t) => {
        Af(n, e, dp(t));
      },
      r,
    ),
    t && (t.finalized_ = !1),
    n
  );
}
var fp = new cp(),
  pp = fp.produce,
  mp = fp.setUseStrictIteration.bind(fp);
function hp(e) {
  return e;
}
function gp(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function _p(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != `object`) throw TypeError(t);
}
function vp(
  e,
  t = `expected all items to be functions, instead received the following types: `,
) {
  if (!e.every((e) => typeof e == `function`)) {
    let n = e
      .map((e) =>
        typeof e == `function` ? `function ${e.name || `unnamed`}()` : typeof e,
      )
      .join(`, `);
    throw TypeError(`${t}[${n}]`);
  }
}
var yp = (e) => (Array.isArray(e) ? e : [e]);
function bp(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    vp(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    t
  );
}
function xp(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var Sp = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  Cp = typeof WeakRef < `u` ? WeakRef : Sp,
  wp = 0,
  Tp = 1;
function Ep() {
  return { s: wp, v: void 0, o: null, p: null };
}
function Dp(e, t = {}) {
  let n = Ep(),
    { resultEqualityCheck: r } = t,
    i,
    a = 0;
  function o() {
    let t = n,
      { length: o } = arguments;
    for (let e = 0, n = o; e < n; e++) {
      let n = arguments[e];
      if (typeof n == `function` || (typeof n == `object` && n)) {
        let e = t.o;
        e === null && (t.o = e = new WeakMap());
        let r = e.get(n);
        r === void 0 ? ((t = Ep()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = Ep()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === Tp) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = i?.deref?.() ?? i;
      (e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new Cp(c)
            : c));
    }
    return ((s.s = Tp), (s.v = c), c);
  }
  return (
    (o.clearCache = () => {
      ((n = Ep()), o.resetResultsCount());
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function Op(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      (typeof o == `object` && ((a = o), (o = e.pop())),
        gp(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`,
        ));
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = Dp,
          argsMemoizeOptions: u = [],
          devModeChecks: d = {},
        } = { ...n, ...a },
        f = yp(c),
        p = yp(u),
        m = bp(e),
        h = s(
          function () {
            return (t++, o.apply(null, arguments));
          },
          ...f,
        ),
        g = l(
          function () {
            r++;
            let e = xp(m, arguments);
            return ((i = h.apply(null, e)), i);
          },
          ...p,
        );
      return Object.assign(g, {
        resultFunc: o,
        memoizedResultFunc: h,
        dependencies: m,
        dependencyRecomputations: () => r,
        resetDependencyRecomputations: () => {
          r = 0;
        },
        lastResult: () => i,
        recomputations: () => t,
        resetRecomputations: () => {
          t = 0;
        },
        memoize: s,
        argsMemoize: l,
      });
    };
  return (Object.assign(r, { withTypes: () => r }), r);
}
var kp = Op(Dp),
  Ap = Object.assign(
    (e, t = kp) => {
      _p(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {}),
      );
    },
    { withTypes: () => Ap },
  );
function jp(e) {
  return ({ dispatch: t, getState: n }) =>
    (r) =>
    (i) =>
      typeof i == `function` ? i(t, n, e) : r(i);
}
var Mp = jp(),
  Np = jp;
((...e) => {
  let t = Op(...e),
    n = Object.assign(
      (...e) => {
        let n = t(...e),
          r = (e, ...t) => n(Sf(e) ? up(e) : e, ...t);
        return (Object.assign(r, n), r);
      },
      { withTypes: () => n },
    );
  return n;
})(Dp);
var Pp =
  typeof window < `u` && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == `object`
            ? mf
            : mf.apply(null, arguments);
      };
typeof window < `u` &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__;
var Fp = (e) => e && typeof e.match == `function`;
function Ip(e, t) {
  function n(...n) {
    if (t) {
      let r = t(...n);
      if (!r) throw Error(th(0));
      return {
        type: e,
        payload: r.payload,
        ...(`meta` in r && { meta: r.meta }),
        ...(`error` in r && { error: r.error }),
      };
    }
    return { type: e, payload: n[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (t) => gf(t) && t.type === e),
    n
  );
}
var Lp = class e extends Array {
  constructor(...t) {
    (super(...t), Object.setPrototypeOf(this, e.prototype));
  }
  static get [Symbol.species]() {
    return e;
  }
  concat(...e) {
    return super.concat.apply(this, e);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new e(...t[0].concat(this))
      : new e(...t.concat(this));
  }
};
function Rp(e) {
  return Cf(e) ? pp(e, () => {}) : e;
}
function zp(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function Bp(e) {
  return typeof e == `boolean`;
}
var Vp = () =>
    function (e) {
      let {
          thunk: t = !0,
          immutableCheck: n = !0,
          serializableCheck: r = !0,
          actionCreatorCheck: i = !0,
        } = e ?? {},
        a = new Lp();
      return (t && (Bp(t) ? a.push(Mp) : a.push(Np(t.extraArgument))), a);
    },
  Hp = `RTK_autoBatch`,
  Up = () => (e) => ({ payload: e, meta: { [Hp]: !0 } }),
  Wp = (e) => (t) => {
    setTimeout(t, e);
  },
  Gp =
    (e = { type: `raf` }) =>
    (t) =>
    (...n) => {
      let r = t(...n),
        i = !0,
        a = !1,
        o = !1,
        s = new Set(),
        c =
          e.type === `tick`
            ? queueMicrotask
            : e.type === `raf`
              ? typeof window < `u` && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : Wp(10)
              : e.type === `callback`
                ? e.queueNotification
                : Wp(e.timeout),
        l = () => {
          ((o = !1), a && ((a = !1), s.forEach((e) => e())));
        };
      return Object.assign({}, r, {
        subscribe(e) {
          let t = r.subscribe(() => i && e());
          return (
            s.add(e),
            () => {
              (t(), s.delete(e));
            }
          );
        },
        dispatch(e) {
          try {
            return (
              (i = !e?.meta?.[Hp]),
              (a = !i),
              a && (o || ((o = !0), c(l))),
              r.dispatch(e)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  Kp = (e) =>
    function (t) {
      let { autoBatch: n = !0 } = t ?? {},
        r = new Lp(e);
      return (n && r.push(Gp(typeof n == `object` ? n : void 0)), r);
    };
function qp(e) {
  let t = Vp(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      duplicateMiddlewareCheck: a = !0,
      preloadedState: o = void 0,
      enhancers: s = void 0,
    } = e || {},
    c;
  if (typeof n == `function`) c = n;
  else if (uf(n)) c = pf(n);
  else throw Error(th(1));
  let l;
  l = typeof r == `function` ? r(t) : t();
  let u = mf;
  i && (u = Pp({ trace: !1, ...(typeof i == `object` && i) }));
  let d = Kp(hf(...l)),
    f = typeof s == `function` ? s(d) : d(),
    p = u(...f);
  return df(c, o, p);
}
function Jp(e) {
  let t = {},
    n = [],
    r,
    i = {
      addCase(e, n) {
        let r = typeof e == `string` ? e : e.type;
        if (!r) throw Error(th(28));
        if (r in t) throw Error(th(29));
        return ((t[r] = n), i);
      },
      addAsyncThunk(e, r) {
        return (
          r.pending && (t[e.pending.type] = r.pending),
          r.rejected && (t[e.rejected.type] = r.rejected),
          r.fulfilled && (t[e.fulfilled.type] = r.fulfilled),
          r.settled && n.push({ matcher: e.settled, reducer: r.settled }),
          i
        );
      },
      addMatcher(e, t) {
        return (n.push({ matcher: e, reducer: t }), i);
      },
      addDefaultCase(e) {
        return ((r = e), i);
      },
    };
  return (e(i), [t, n, r]);
}
mp(!1);
function Yp(e) {
  return typeof e == `function`;
}
function Xp(e, t) {
  let [n, r, i] = Jp(t),
    a;
  if (Yp(e)) a = () => Rp(e());
  else {
    let t = Rp(e);
    a = () => t;
  }
  function o(e = a(), t) {
    let o = [
      n[t.type],
      ...r.filter(({ matcher: e }) => e(t)).map(({ reducer: e }) => e),
    ];
    return (
      o.filter((e) => !!e).length === 0 && (o = [i]),
      o.reduce((e, n) => {
        if (n) {
          if (Sf(e)) {
            let r = n(e, t);
            return r === void 0 ? e : r;
          }
          if (Cf(e)) return pp(e, (e) => n(e, t));
          {
            let r = n(e, t);
            if (r === void 0) {
              if (e === null) return e;
              throw Error(
                `A case reducer on a non-draftable value must not return undefined`,
              );
            }
            return r;
          }
        }
        return e;
      }, e)
    );
  }
  return ((o.getInitialState = a), o);
}
var Zp = (e, t) => (Fp(e) ? e.match(t) : e(t));
function Qp(...e) {
  return (t) => e.some((e) => Zp(e, t));
}
var $p = `ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW`,
  em = (e = 21) => {
    let t = ``,
      n = e;
    for (; n--;) t += $p[(Math.random() * 64) | 0];
    return t;
  },
  tm = [`name`, `message`, `stack`, `code`],
  nm = class {
    constructor(e, t) {
      ((this.payload = e), (this.meta = t));
    }
    _type;
  },
  rm = class {
    constructor(e, t) {
      ((this.payload = e), (this.meta = t));
    }
    _type;
  },
  im = (e) => {
    if (typeof e == `object` && e) {
      let t = {};
      for (let n of tm) typeof e[n] == `string` && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  am = `External signal was aborted`;
(() => {
  function e(e, t, n) {
    let r = Ip(e + `/fulfilled`, (e, t, n, r) => ({
        payload: e,
        meta: {
          ...(r || {}),
          arg: n,
          requestId: t,
          requestStatus: `fulfilled`,
        },
      })),
      i = Ip(e + `/pending`, (e, t, n) => ({
        payload: void 0,
        meta: { ...(n || {}), arg: t, requestId: e, requestStatus: `pending` },
      })),
      a = Ip(e + `/rejected`, (e, t, r, i, a) => ({
        payload: i,
        error: ((n && n.serializeError) || im)(e || `Rejected`),
        meta: {
          ...(a || {}),
          arg: r,
          requestId: t,
          rejectedWithValue: !!i,
          requestStatus: `rejected`,
          aborted: e?.name === `AbortError`,
          condition: e?.name === `ConditionError`,
        },
      }));
    function o(e, { signal: o } = {}) {
      return (s, c, l) => {
        let u = n?.idGenerator ? n.idGenerator(e) : em(),
          d = new AbortController(),
          f,
          p;
        function m(e) {
          ((p = e), d.abort());
        }
        o &&
          (o.aborted
            ? m(am)
            : o.addEventListener(`abort`, () => m(am), { once: !0 }));
        let h = (async function () {
          let o;
          try {
            let a = n?.condition?.(e, { getState: c, extra: l });
            if ((sm(a) && (a = await a), a === !1 || d.signal.aborted))
              throw {
                name: `ConditionError`,
                message: `Aborted due to condition callback returning false.`,
              };
            let h = new Promise((e, t) => {
              ((f = () => {
                t({ name: `AbortError`, message: p || `Aborted` });
              }),
                d.signal.addEventListener(`abort`, f));
            });
            (s(
              i(
                u,
                e,
                n?.getPendingMeta?.(
                  { requestId: u, arg: e },
                  { getState: c, extra: l },
                ),
              ),
            ),
              (o = await Promise.race([
                h,
                Promise.resolve(
                  t(e, {
                    dispatch: s,
                    getState: c,
                    extra: l,
                    requestId: u,
                    signal: d.signal,
                    abort: m,
                    rejectWithValue: (e, t) => new nm(e, t),
                    fulfillWithValue: (e, t) => new rm(e, t),
                  }),
                ).then((t) => {
                  if (t instanceof nm) throw t;
                  return t instanceof rm
                    ? r(t.payload, u, e, t.meta)
                    : r(t, u, e);
                }),
              ])));
          } catch (t) {
            o = t instanceof nm ? a(null, u, e, t.payload, t.meta) : a(t, u, e);
          } finally {
            f && d.signal.removeEventListener(`abort`, f);
          }
          return (
            (n &&
              !n.dispatchConditionRejection &&
              a.match(o) &&
              o.meta.condition) ||
              s(o),
            o
          );
        })();
        return Object.assign(h, {
          abort: m,
          requestId: u,
          arg: e,
          unwrap() {
            return h.then(om);
          },
        });
      };
    }
    return Object.assign(o, {
      pending: i,
      rejected: a,
      fulfilled: r,
      settled: Qp(a, r),
      typePrefix: e,
    });
  }
  return ((e.withTypes = () => e), e);
})();
function om(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function sm(e) {
  return typeof e == `object` && !!e && typeof e.then == `function`;
}
var cm = Symbol.for(`rtk-slice-createasyncthunk`),
  lm = ((e) => (
    (e.reducer = `reducer`),
    (e.reducerWithPrepare = `reducerWithPrepare`),
    (e.asyncThunk = `asyncThunk`),
    e
  ))(lm || {});
function um(e, t) {
  return `${e}/${t}`;
}
function dm({ creators: e } = {}) {
  let t = e?.asyncThunk?.[cm];
  return function (e) {
    let { name: n, reducerPath: r = n } = e;
    if (!n) throw Error(th(11));
    let i =
        (typeof e.reducers == `function` ? e.reducers(mm()) : e.reducers) || {},
      a = Object.keys(i),
      o = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      s = {
        addCase(e, t) {
          let n = typeof e == `string` ? e : e.type;
          if (!n) throw Error(th(12));
          if (n in o.sliceCaseReducersByType) throw Error(th(13));
          return ((o.sliceCaseReducersByType[n] = t), s);
        },
        addMatcher(e, t) {
          return (o.sliceMatchers.push({ matcher: e, reducer: t }), s);
        },
        exposeAction(e, t) {
          return ((o.actionCreators[e] = t), s);
        },
        exposeCaseReducer(e, t) {
          return ((o.sliceCaseReducersByName[e] = t), s);
        },
      };
    a.forEach((r) => {
      let a = i[r],
        o = {
          reducerName: r,
          type: um(n, r),
          createNotation: typeof e.reducers == `function`,
        };
      gm(a) ? vm(o, a, s, t) : hm(o, a, s);
    });
    function c() {
      let [t = {}, n = [], r = void 0] =
          typeof e.extraReducers == `function`
            ? Jp(e.extraReducers)
            : [e.extraReducers],
        i = { ...t, ...o.sliceCaseReducersByType };
      return Xp(e.initialState, (e) => {
        for (let t in i) e.addCase(t, i[t]);
        for (let t of o.sliceMatchers) e.addMatcher(t.matcher, t.reducer);
        for (let t of n) e.addMatcher(t.matcher, t.reducer);
        r && e.addDefaultCase(r);
      });
    }
    let l = (e) => e,
      u = new Map(),
      d = new WeakMap(),
      f;
    function p(e, t) {
      return ((f ||= c()), f(e, t));
    }
    function m() {
      return ((f ||= c()), f.getInitialState());
    }
    function h(t, n = !1) {
      function r(e) {
        let i = e[t];
        return (typeof i > `u` && n && (i = zp(d, r, m)), i);
      }
      function i(t = l) {
        return zp(
          zp(u, n, () => new WeakMap()),
          t,
          () => {
            let r = {};
            for (let [i, a] of Object.entries(e.selectors ?? {}))
              r[i] = fm(a, t, () => zp(d, t, m), n);
            return r;
          },
        );
      }
      return {
        reducerPath: t,
        getSelectors: i,
        get selectors() {
          return i(r);
        },
        selectSlice: r,
      };
    }
    let g = {
      name: n,
      reducer: p,
      actions: o.actionCreators,
      caseReducers: o.sliceCaseReducersByName,
      getInitialState: m,
      ...h(r),
      injectInto(e, { reducerPath: t, ...n } = {}) {
        let i = t ?? r;
        return (
          e.inject({ reducerPath: i, reducer: p }, n), { ...g, ...h(i, !0) }
        );
      },
    };
    return g;
  };
}
function fm(e, t, n, r) {
  function i(i, ...a) {
    let o = t(i);
    return (typeof o > `u` && r && (o = n()), e(o, ...a));
  }
  return ((i.unwrapped = e), i);
}
var pm = dm();
function mm() {
  function e(e, t) {
    return { _reducerDefinitionType: `asyncThunk`, payloadCreator: e, ...t };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(e) {
        return Object.assign(
          {
            [e.name](...t) {
              return e(...t);
            },
          }[e.name],
          { _reducerDefinitionType: `reducer` },
        );
      },
      preparedReducer(e, t) {
        return {
          _reducerDefinitionType: `reducerWithPrepare`,
          prepare: e,
          reducer: t,
        };
      },
      asyncThunk: e,
    }
  );
}
function hm({ type: e, reducerName: t, createNotation: n }, r, i) {
  let a, o;
  if (`reducer` in r) {
    if (n && !_m(r)) throw Error(th(17));
    ((a = r.reducer), (o = r.prepare));
  } else a = r;
  i.addCase(e, a)
    .exposeCaseReducer(t, a)
    .exposeAction(t, o ? Ip(e, o) : Ip(e));
}
function gm(e) {
  return e._reducerDefinitionType === `asyncThunk`;
}
function _m(e) {
  return e._reducerDefinitionType === `reducerWithPrepare`;
}
function vm({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw Error(th(18));
  let {
      payloadCreator: a,
      fulfilled: o,
      pending: s,
      rejected: c,
      settled: l,
      options: u,
    } = n,
    d = i(e, a, u);
  (r.exposeAction(t, d),
    o && r.addCase(d.fulfilled, o),
    s && r.addCase(d.pending, s),
    c && r.addCase(d.rejected, c),
    l && r.addMatcher(d.settled, l),
    r.exposeCaseReducer(t, {
      fulfilled: o || ym,
      pending: s || ym,
      rejected: c || ym,
      settled: l || ym,
    }));
}
function ym() {}
var bm = `task`,
  xm = `listener`,
  Sm = `completed`,
  Cm = `cancelled`,
  wm = `task-${Cm}`,
  Tm = `task-${Sm}`,
  Em = `${xm}-${Cm}`,
  Dm = `${xm}-${Sm}`,
  Om = class {
    constructor(e) {
      ((this.code = e), (this.message = `${bm} ${Cm} (reason: ${e})`));
    }
    name = `TaskAbortError`;
    message;
  },
  km = (e, t) => {
    if (typeof e != `function`) throw TypeError(th(32));
  },
  Am = () => {},
  jm = (e, t = Am) => (e.catch(t), e),
  Mm = (e, t) => (
    e.addEventListener(`abort`, t, { once: !0 }),
    () => e.removeEventListener(`abort`, t)
  ),
  Nm = (e, t) => {
    let n = e.signal;
    n.aborted ||
      (`reason` in n ||
        Object.defineProperty(n, "reason", {
          enumerable: !0,
          value: t,
          configurable: !0,
          writable: !0,
        }),
      e.abort(t));
  },
  Pm = (e) => {
    if (e.aborted) {
      let { reason: t } = e;
      throw new Om(t);
    }
  };
function Fm(e, t) {
  let n = Am;
  return new Promise((r, i) => {
    let a = () => i(new Om(e.reason));
    e.aborted ? a() : ((n = Mm(e, a)), t.finally(() => n()).then(r, i));
  }).finally(() => {
    n = Am;
  });
}
var Im = async (e, t) => {
    try {
      return (await Promise.resolve(), { status: `ok`, value: await e() });
    } catch (e) {
      return { status: e instanceof Om ? `cancelled` : `rejected`, error: e };
    } finally {
      t?.();
    }
  },
  Lm = (e) => (t) => jm(Fm(e, t).then((t) => (Pm(e), t))),
  Rm = (e) => {
    let t = Lm(e);
    return (e) => t(new Promise((t) => setTimeout(t, e)));
  },
  { assign: zm } = Object,
  Bm = {},
  Vm = `listenerMiddleware`,
  Hm = (e, t) => {
    let n = (t) => Mm(e, () => Nm(t, e.reason));
    return (r, i) => {
      km(r, `taskExecutor`);
      let a = new AbortController();
      n(a);
      let o = Im(
        async () => {
          (Pm(e), Pm(a.signal));
          let t = await r({
            pause: Lm(a.signal),
            delay: Rm(a.signal),
            signal: a.signal,
          });
          return (Pm(a.signal), t);
        },
        () => Nm(a, Tm),
      );
      return (
        i?.autoJoin && t.push(o.catch(Am)),
        {
          result: Lm(e)(o),
          cancel() {
            Nm(a, wm);
          },
        }
      );
    };
  },
  Um = (e, t) => {
    let n = async (n, r) => {
      Pm(t);
      let i = () => {},
        a = [
          new Promise((t, r) => {
            let a = e({
              predicate: n,
              effect: (e, n) => {
                (n.unsubscribe(), t([e, n.getState(), n.getOriginalState()]));
              },
            });
            i = () => {
              (a(), r());
            };
          }),
        ];
      r != null && a.push(new Promise((e) => setTimeout(e, r, null)));
      try {
        let e = await Fm(t, Promise.race(a));
        return (Pm(t), e);
      } finally {
        i();
      }
    };
    return (e, t) => jm(n(e, t));
  },
  Wm = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: i, effect: a } = e;
    if (t) i = Ip(t).match;
    else if (n) ((t = n.type), (i = n.match));
    else if (r) i = r;
    else if (!i) throw Error(th(21));
    return (km(a, `options.listener`), { predicate: i, type: t, effect: a });
  },
  Gm = zm(
    (e) => {
      let { type: t, predicate: n, effect: r } = Wm(e);
      return {
        id: em(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw Error(th(22));
        },
      };
    },
    { withTypes: () => Gm },
  ),
  Km = (e, t) => {
    let { type: n, effect: r, predicate: i } = Wm(t);
    return Array.from(e.values()).find(
      (e) =>
        (typeof n == `string` ? e.type === n : e.predicate === i) &&
        e.effect === r,
    );
  },
  qm = (e) => {
    e.pending.forEach((e) => {
      Nm(e, Em);
    });
  },
  Jm = (e, t) => () => {
    for (let e of t.keys()) qm(e);
    e.clear();
  },
  Ym = (e, t, n) => {
    try {
      e(t, n);
    } catch (e) {
      setTimeout(() => {
        throw e;
      }, 0);
    }
  },
  Xm = zm(Ip(`${Vm}/add`), { withTypes: () => Xm }),
  Zm = Ip(`${Vm}/removeAll`),
  Qm = zm(Ip(`${Vm}/remove`), { withTypes: () => Qm }),
  $m = (...e) => {
    console.error(`${Vm}/error`, ...e);
  },
  eh = (e = {}) => {
    let t = new Map(),
      n = new Map(),
      r = (e) => {
        let t = n.get(e) ?? 0;
        n.set(e, t + 1);
      },
      i = (e) => {
        let t = n.get(e) ?? 1;
        t === 1 ? n.delete(e) : n.set(e, t - 1);
      },
      { extra: a, onError: o = $m } = e;
    km(o, `onError`);
    let s = (e) => (
        (e.unsubscribe = () => t.delete(e.id)),
        t.set(e.id, e),
        (t) => {
          (e.unsubscribe(), t?.cancelActive && qm(e));
        }
      ),
      c = (e) => {
        let n = Km(t, e) ?? Gm(e);
        return s(n);
      };
    zm(c, { withTypes: () => c });
    let l = (e) => {
      let n = Km(t, e);
      return (n && (n.unsubscribe(), e.cancelActive && qm(n)), !!n);
    };
    zm(l, { withTypes: () => l });
    let u = async (e, n, s, l) => {
        let u = new AbortController(),
          d = Um(c, u.signal),
          f = [];
        try {
          (e.pending.add(u),
            r(e),
            await Promise.resolve(
              e.effect(
                n,
                zm({}, s, {
                  getOriginalState: l,
                  condition: (e, t) => d(e, t).then(Boolean),
                  take: d,
                  delay: Rm(u.signal),
                  pause: Lm(u.signal),
                  extra: a,
                  signal: u.signal,
                  fork: Hm(u.signal, f),
                  unsubscribe: e.unsubscribe,
                  subscribe: () => {
                    t.set(e.id, e);
                  },
                  cancelActiveListeners: () => {
                    e.pending.forEach((e, t, n) => {
                      e !== u && (Nm(e, Em), n.delete(e));
                    });
                  },
                  cancel: () => {
                    (Nm(u, Em), e.pending.delete(u));
                  },
                  throwIfCancelled: () => {
                    Pm(u.signal);
                  },
                }),
              ),
            ));
        } catch (e) {
          e instanceof Om || Ym(o, e, { raisedBy: `effect` });
        } finally {
          (await Promise.all(f), Nm(u, Dm), i(e), e.pending.delete(u));
        }
      },
      d = Jm(t, n);
    return {
      middleware: (e) => (n) => (r) => {
        if (!gf(r)) return n(r);
        if (Xm.match(r)) return c(r.payload);
        if (Zm.match(r)) {
          d();
          return;
        }
        if (Qm.match(r)) return l(r.payload);
        let i = e.getState(),
          a = () => {
            if (i === Bm) throw Error(th(23));
            return i;
          },
          s;
        try {
          if (((s = n(r)), t.size > 0)) {
            let n = e.getState(),
              s = Array.from(t.values());
            for (let t of s) {
              let s = !1;
              try {
                s = t.predicate(r, n, i);
              } catch (e) {
                ((s = !1), Ym(o, e, { raisedBy: `predicate` }));
              }
              s && u(t, r, e, a);
            }
          }
        } finally {
          i = Bm;
        }
        return s;
      },
      startListening: c,
      stopListening: l,
      clearListeners: d,
    };
  };
function th(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var nh = pm({
    name: `chartLayout`,
    initialState: {
      layoutType: `horizontal`,
      width: 0,
      height: 0,
      margin: { top: 5, right: 5, bottom: 5, left: 5 },
      scale: 1,
    },
    reducers: {
      setLayout(e, t) {
        e.layoutType = t.payload;
      },
      setChartSize(e, t) {
        ((e.width = t.payload.width), (e.height = t.payload.height));
      },
      setMargin(e, t) {
        ((e.margin.top = t.payload.top ?? 0),
          (e.margin.right = t.payload.right ?? 0),
          (e.margin.bottom = t.payload.bottom ?? 0),
          (e.margin.left = t.payload.left ?? 0));
      },
      setScale(e, t) {
        e.scale = t.payload;
      },
    },
  }),
  { setMargin: rh, setLayout: ih, setChartSize: ah, setScale: oh } = nh.actions,
  sh = nh.reducer;
function ch(e, t) {
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
function lh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ch(Object(n), !0).forEach(function (t) {
          uh(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ch(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function uh(e, t, n) {
  return (
    (t = dh(t)) in e
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
function dh(e) {
  var t = fh(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function fh(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var ph = Math.PI / 180,
  mh = (e) => (e * Math.PI) / 180,
  hh = (e) => (e * 180) / Math.PI,
  gh = (e, t, n, r) => ({
    x: e + Math.cos(-ph * r) * n,
    y: t + Math.sin(-ph * r) * n,
  }),
  _h = function (e, t) {
    var n =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0,
            brushBottom: 0,
          };
    return (
      Math.min(
        Math.abs(e - (n.left || 0) - (n.right || 0)),
        Math.abs(t - (n.top || 0) - (n.bottom || 0)),
      ) / 2
    );
  },
  vh = (e, t) => {
    var { x: n, y: r } = e,
      { x: i, y: a } = t;
    return Math.sqrt((n - i) ** 2 + (r - a) ** 2);
  },
  yh = (e, t) => {
    var { x: n, y: r } = e,
      { cx: i, cy: a } = t,
      o = vh({ x: n, y: r }, { x: i, y: a });
    if (o <= 0) return { radius: o, angle: 0 };
    var s = (n - i) / o,
      c = Math.acos(s);
    return (
      r > a && (c = 2 * Math.PI - c),
      { radius: o, angle: hh(c), angleInRadian: c }
    );
  },
  bh = (e) => {
    var { startAngle: t, endAngle: n } = e,
      r = Math.floor(t / 360),
      i = Math.floor(n / 360),
      a = Math.min(r, i);
    return { startAngle: t - a * 360, endAngle: n - a * 360 };
  },
  xh = (e, t) => {
    var { startAngle: n, endAngle: r } = t,
      i = Math.floor(n / 360),
      a = Math.floor(r / 360);
    return e + Math.min(i, a) * 360;
  },
  Sh = (e, t) => {
    var { x: n, y: r } = e,
      { radius: i, angle: a } = yh({ x: n, y: r }, t),
      { innerRadius: o, outerRadius: s } = t;
    if (i < o || i > s || i === 0) return null;
    var { startAngle: c, endAngle: l } = bh(t),
      u = a,
      d;
    if (c <= l) {
      for (; u > l;) u -= 360;
      for (; u < c;) u += 360;
      d = u >= c && u <= l;
    } else {
      for (; u > c;) u -= 360;
      for (; u < l;) u += 360;
      d = u >= l && u <= c;
    }
    return d ? lh(lh({}, t), {}, { radius: i, angle: xh(u, t) }) : null;
  },
  Ch = (e) =>
    !(0, R.isValidElement)(e) &&
    typeof e != `function` &&
    typeof e != `boolean` &&
    e != null
      ? e.className
      : ``;
function wh(e, t, n) {
  return Array.isArray(e) && e && t + n !== 0 ? e.slice(t, n + 1) : e;
}
function Th(e, t) {
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
function Eh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Th(Object(n), !0).forEach(function (t) {
          Dh(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Th(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Dh(e, t, n) {
  return (
    (t = Oh(t)) in e
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
function Oh(e) {
  var t = kh(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function kh(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Ah(e, t, n) {
  return Au(e) || Au(t)
    ? n
    : Cu(t)
      ? (0, yu.default)(e, t, n)
      : typeof t == `function`
        ? t(e)
        : n;
}
var jh = (e, t, n, r, i) => {
    var a = -1,
      o = t?.length ?? 0;
    if (o <= 1 || e == null) return 0;
    if (
      r === `angleAxis` &&
      i != null &&
      Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6
    )
      for (var s = 0; s < o; s++) {
        var c = s > 0 ? n[s - 1].coordinate : n[o - 1].coordinate,
          l = n[s].coordinate,
          u = s >= o - 1 ? n[0].coordinate : n[s + 1].coordinate,
          d = void 0;
        if (bu(l - c) !== bu(u - l)) {
          var f = [];
          if (bu(u - l) === bu(i[1] - i[0])) {
            d = u;
            var p = l + i[1] - i[0];
            ((f[0] = Math.min(p, (p + c) / 2)),
              (f[1] = Math.max(p, (p + c) / 2)));
          } else {
            d = c;
            var m = u + i[1] - i[0];
            ((f[0] = Math.min(l, (m + l) / 2)),
              (f[1] = Math.max(l, (m + l) / 2)));
          }
          var h = [Math.min(l, (d + l) / 2), Math.max(l, (d + l) / 2)];
          if ((e > h[0] && e <= h[1]) || (e >= f[0] && e <= f[1])) {
            ({ index: a } = n[s]);
            break;
          }
        } else {
          var g = Math.min(c, u),
            _ = Math.max(c, u);
          if (e > (g + l) / 2 && e <= (_ + l) / 2) {
            ({ index: a } = n[s]);
            break;
          }
        }
      }
    else if (t) {
      for (var v = 0; v < o; v++)
        if (
          (v === 0 && e <= (t[v].coordinate + t[v + 1].coordinate) / 2) ||
          (v > 0 &&
            v < o - 1 &&
            e > (t[v].coordinate + t[v - 1].coordinate) / 2 &&
            e <= (t[v].coordinate + t[v + 1].coordinate) / 2) ||
          (v === o - 1 && e > (t[v].coordinate + t[v - 1].coordinate) / 2)
        ) {
          ({ index: a } = t[v]);
          break;
        }
    }
    return a;
  },
  Mh = (e, t, n) => {
    if (t && n) {
      var { width: r, height: i } = n,
        { align: a, verticalAlign: o, layout: s } = t;
      if (
        (s === `vertical` || (s === `horizontal` && o === `middle`)) &&
        a !== `center` &&
        G(e[a])
      )
        return Eh(Eh({}, e), {}, { [a]: e[a] + (r || 0) });
      if (
        (s === `horizontal` || (s === `vertical` && a === `center`)) &&
        o !== `middle` &&
        G(e[o])
      )
        return Eh(Eh({}, e), {}, { [o]: e[o] + (i || 0) });
    }
    return e;
  },
  Nh = (e, t) =>
    (e === `horizontal` && t === `xAxis`) ||
    (e === `vertical` && t === `yAxis`) ||
    (e === `centric` && t === `angleAxis`) ||
    (e === `radial` && t === `radiusAxis`),
  Ph = (e, t, n, r) => {
    if (r) return e.map((e) => e.coordinate);
    var i,
      a,
      o = e.map(
        (e) => (
          e.coordinate === t && (i = !0),
          e.coordinate === n && (a = !0),
          e.coordinate
        ),
      );
    return (i || o.push(t), a || o.push(n), o);
  },
  Fh = (e, t, n) => {
    if (!e) return null;
    var {
      duplicateDomain: r,
      type: i,
      range: a,
      scale: o,
      realScaleType: s,
      isCategorical: c,
      categoricalDomain: l,
      tickCount: u,
      ticks: d,
      niceTicks: f,
      axisType: p,
    } = e;
    if (!o) return null;
    var m = s === `scaleBand` && o.bandwidth ? o.bandwidth() / 2 : 2,
      h = (t || n) && i === `category` && o.bandwidth ? o.bandwidth() / m : 0;
    return (
      (h =
        p === `angleAxis` && a && a.length >= 2 ? bu(a[0] - a[1]) * 2 * h : h),
      t && (d || f)
        ? (d || f || [])
            .map((e, t) => ({
              coordinate: o(r ? r.indexOf(e) : e) + h,
              value: e,
              offset: h,
              index: t,
            }))
            .filter((e) => !xu(e.coordinate))
        : c && l
          ? l.map((e, t) => ({
              coordinate: o(e) + h,
              value: e,
              index: t,
              offset: h,
            }))
          : o.ticks && !n && u != null
            ? o
                .ticks(u)
                .map((e, t) => ({
                  coordinate: o(e) + h,
                  value: e,
                  offset: h,
                  index: t,
                }))
            : o
                .domain()
                .map((e, t) => ({
                  coordinate: o(e) + h,
                  value: r ? r[e] : e,
                  index: t,
                  offset: h,
                }))
    );
  },
  Ih = 1e-4,
  Lh = (e) => {
    var t = e.domain();
    if (!(!t || t.length <= 2)) {
      var n = t.length,
        r = e.range(),
        i = Math.min(r[0], r[1]) - Ih,
        a = Math.max(r[0], r[1]) + Ih,
        o = e(t[0]),
        s = e(t[n - 1]);
      (o < i || o > a || s < i || s > a) && e.domain([t[0], t[n - 1]]);
    }
  },
  Rh = (e, t) => {
    if (!t || t.length !== 2 || !G(t[0]) || !G(t[1])) return e;
    var n = Math.min(t[0], t[1]),
      r = Math.max(t[0], t[1]),
      i = [e[0], e[1]];
    return (
      (!G(e[0]) || e[0] < n) && (i[0] = n),
      (!G(e[1]) || e[1] > r) && (i[1] = r),
      i[0] > r && (i[0] = r),
      i[1] < n && (i[1] = n),
      i
    );
  },
  zh = {
    sign: (e) => {
      var t = e.length;
      if (!(t <= 0))
        for (var n = 0, r = e[0].length; n < r; ++n)
          for (var i = 0, a = 0, o = 0; o < t; ++o) {
            var s = xu(e[o][n][1]) ? e[o][n][0] : e[o][n][1];
            s >= 0
              ? ((e[o][n][0] = i), (e[o][n][1] = i + s), (i = e[o][n][1]))
              : ((e[o][n][0] = a), (e[o][n][1] = a + s), (a = e[o][n][1]));
          }
    },
    expand: uu,
    none: au,
    silhouette: du,
    wiggle: fu,
    positive: (e) => {
      var t = e.length;
      if (!(t <= 0))
        for (var n = 0, r = e[0].length; n < r; ++n)
          for (var i = 0, a = 0; a < t; ++a) {
            var o = xu(e[a][n][1]) ? e[a][n][0] : e[a][n][1];
            o >= 0
              ? ((e[a][n][0] = i), (e[a][n][1] = i + o), (i = e[a][n][1]))
              : ((e[a][n][0] = 0), (e[a][n][1] = 0));
          }
    },
  },
  Bh = (e, t, n) => {
    var r = zh[n];
    return lu()
      .keys(t)
      .value((e, t) => +Ah(e, t, 0))
      .order(ou)
      .offset(r)(e);
  };
function Vh(e) {
  return e == null ? void 0 : String(e);
}
var Hh = (e) => {
    var { axis: t, ticks: n, offset: r, bandSize: i, entry: a, index: o } = e;
    if (t.type === `category`) return n[o] ? n[o].coordinate + r : null;
    var s = Ah(a, t.dataKey, t.scale.domain()[o]);
    return Au(s) ? null : t.scale(s) - i / 2 + r;
  },
  Uh = (e) => {
    var { numericAxis: t } = e,
      n = t.scale.domain();
    if (t.type === `number`) {
      var r = Math.min(n[0], n[1]),
        i = Math.max(n[0], n[1]);
      return r <= 0 && i >= 0 ? 0 : i < 0 ? i : r;
    }
    return n[0];
  },
  Wh = (e) => {
    var t = e.flat(2).filter(G);
    return [Math.min(...t), Math.max(...t)];
  },
  Gh = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]],
  Kh = (e, t, n) => {
    if (e != null)
      return Gh(
        Object.keys(e).reduce(
          (r, i) => {
            var { stackedData: a } = e[i],
              o = a.reduce(
                (e, r) => {
                  var i = Wh(wh(r, t, n));
                  return [Math.min(e[0], i[0]), Math.max(e[1], i[1])];
                },
                [1 / 0, -1 / 0],
              );
            return [Math.min(o[0], r[0]), Math.max(o[1], r[1])];
          },
          [1 / 0, -1 / 0],
        ),
      );
  },
  qh = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Jh = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Yh = (e, t, n) => {
    if (e && e.scale && e.scale.bandwidth) {
      var r = e.scale.bandwidth();
      if (!n || r > 0) return r;
    }
    if (e && t && t.length >= 2) {
      for (
        var i = (0, $d.default)(t, (e) => e.coordinate),
          a = 1 / 0,
          o = 1,
          s = i.length;
        o < s;
        o++
      ) {
        var c = i[o],
          l = i[o - 1];
        a = Math.min((c.coordinate || 0) - (l.coordinate || 0), a);
      }
      return a === 1 / 0 ? 0 : a;
    }
    return n ? void 0 : 0;
  };
function Xh(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: n,
    payload: r,
    value: i,
    name: a,
  } = e;
  return Eh(Eh({}, t), {}, { dataKey: n, payload: r, value: i, name: a });
}
function Zh(e, t) {
  if (e) return String(e);
  if (typeof t == `string`) return t;
}
function Qh(e, t, n, r, i) {
  return n === `horizontal` || n === `vertical`
    ? e >= i.left &&
      e <= i.left + i.width &&
      t >= i.top &&
      t <= i.top + i.height
      ? { x: e, y: t }
      : null
    : r
      ? Sh({ x: e, y: t }, r)
      : null;
}
var $h = (e, t, n, r) => {
    var i = t.find((e) => e && e.index === n);
    if (i) {
      if (e === `horizontal`) return { x: i.coordinate, y: r.y };
      if (e === `vertical`) return { x: r.x, y: i.coordinate };
      if (e === `centric`) {
        var a = i.coordinate,
          { radius: o } = r;
        return Eh(
          Eh(Eh({}, r), gh(r.cx, r.cy, o, a)),
          {},
          { angle: a, radius: o },
        );
      }
      var s = i.coordinate,
        { angle: c } = r;
      return Eh(
        Eh(Eh({}, r), gh(r.cx, r.cy, s, c)),
        {},
        { angle: c, radius: s },
      );
    }
    return { x: 0, y: 0 };
  },
  eg = (e, t) =>
    t === `horizontal`
      ? e.x
      : t === `vertical`
        ? e.y
        : t === `centric`
          ? e.angle
          : e.radius,
  tg = (e) => e.layout.width,
  ng = (e) => e.layout.height,
  rg = (e) => e.layout.scale,
  ig = (e) => e.layout.margin,
  ag = J(
    (e) => e.cartesianAxis.xAxis,
    (e) => Object.values(e),
  ),
  og = J(
    (e) => e.cartesianAxis.yAxis,
    (e) => Object.values(e),
  ),
  sg = `data-recharts-item-index`,
  cg = `data-recharts-item-data-key`;
function lg(e, t) {
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
function ug(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? lg(Object(n), !0).forEach(function (t) {
          dg(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : lg(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function dg(e, t, n) {
  return (
    (t = fg(t)) in e
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
function fg(e) {
  var t = pg(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function pg(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var mg = (e) => e.brush.height;
function hg(e) {
  return og(e).reduce(
    (e, t) =>
      t.orientation === `left` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function gg(e) {
  return og(e).reduce(
    (e, t) =>
      t.orientation === `right` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function _g(e) {
  return ag(e).reduce(
    (e, t) =>
      t.orientation === `top` && !t.mirror && !t.hide ? e + t.height : e,
    0,
  );
}
function vg(e) {
  return ag(e).reduce(
    (e, t) =>
      t.orientation === `bottom` && !t.mirror && !t.hide ? e + t.height : e,
    0,
  );
}
var yg = J(
    [tg, ng, ig, mg, hg, gg, _g, vg, ef, tf],
    (e, t, n, r, i, a, o, s, c, l) => {
      var u = { left: (n.left || 0) + i, right: (n.right || 0) + a },
        d = ug(
          ug({}, { top: (n.top || 0) + o, bottom: (n.bottom || 0) + s }),
          u,
        ),
        f = d.bottom;
      ((d.bottom += r), (d = Mh(d, c, l)));
      var p = e - d.left - d.right,
        m = t - d.top - d.bottom;
      return ug(
        ug({ brushBottom: f }, d),
        {},
        { width: Math.max(p, 0), height: Math.max(m, 0) },
      );
    },
  ),
  bg = J(yg, (e) => ({
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height,
  })),
  xg = J(tg, ng, (e, t) => ({ x: 0, y: 0, width: e, height: t })),
  Sg = (0, R.createContext)(null),
  Cg = () => (0, R.useContext)(Sg) != null,
  wg = (e) => e.brush,
  Tg = J([wg, yg, ig], (e, t, n) => ({
    height: e.height,
    x: G(e.x) ? e.x : t.left,
    y: G(e.y) ? e.y : t.top + t.height + t.brushBottom - (n?.bottom || 0),
    width: G(e.width) ? e.width : t.width,
  })),
  Eg = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e, t, { signal: n, edges: r } = {}) {
      let i,
        a = null,
        o = r != null && r.includes(`leading`),
        s = r == null || r.includes(`trailing`),
        c = () => {
          a !== null && (e.apply(i, a), (i = void 0), (a = null));
        },
        l = () => {
          (s && c(), p());
        },
        u = null,
        d = () => {
          (u != null && clearTimeout(u),
            (u = setTimeout(() => {
              ((u = null), l());
            }, t)));
        },
        f = () => {
          u !== null && (clearTimeout(u), (u = null));
        },
        p = () => {
          (f(), (i = void 0), (a = null));
        },
        m = () => {
          c();
        },
        h = function (...e) {
          if (n?.aborted) return;
          ((i = this), (a = e));
          let t = u == null;
          (d(), o && t && c());
        };
      return (
        (h.schedule = d),
        (h.cancel = p),
        (h.flush = m),
        n?.addEventListener(`abort`, p, { once: !0 }),
        h
      );
    }
    e.debounce = t;
  }),
  Dg = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Eg();
    function n(e, n = 0, r = {}) {
      typeof r != `object` && (r = {});
      let { leading: i = !1, trailing: a = !0, maxWait: o } = r,
        s = [, ,];
      (i && (s[0] = `leading`), a && (s[1] = `trailing`));
      let c,
        l = null,
        u = t.debounce(
          function (...t) {
            ((c = e.apply(this, t)), (l = null));
          },
          n,
          { edges: s },
        ),
        d = function (...t) {
          return o != null &&
            (l === null && (l = Date.now()), Date.now() - l >= o)
            ? ((c = e.apply(this, t)),
              (l = Date.now()),
              u.cancel(),
              u.schedule(),
              c)
            : (u.apply(this, t), c);
        };
      return ((d.cancel = u.cancel), (d.flush = () => (u.flush(), c)), d);
    }
    e.debounce = n;
  }),
  Og = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Dg();
    function n(e, n = 0, r = {}) {
      let { leading: i = !0, trailing: a = !0 } = r;
      return t.debounce(e, n, { leading: i, maxWait: n, trailing: a });
    }
    e.throttle = n;
  }),
  kg = e(
    n((e, t) => {
      t.exports = Og().throttle;
    })(),
  ),
  Ag = (e, t, n) => {
    var { width: r = `100%`, height: i = `100%`, aspect: a, maxHeight: o } = n,
      s = Su(r) ? e : Number(r),
      c = Su(i) ? t : Number(i);
    return (
      a && a > 0 && (s ? (c = s / a) : c && (s = c * a), o && c > o && (c = o)),
      { calculatedWidth: s, calculatedHeight: c }
    );
  },
  jg = { width: 0, height: 0, overflow: `visible` },
  Mg = { width: 0, overflowX: `visible` },
  Ng = { height: 0, overflowY: `visible` },
  Pg = {},
  Fg = (e) => {
    var { width: t, height: n } = e,
      r = Su(t),
      i = Su(n);
    return r && i ? jg : r ? Mg : i ? Ng : Pg;
  };
function Ig(e) {
  var { width: t, height: n, aspect: r } = e,
    i = t,
    a = n;
  return (
    i === void 0 && a === void 0
      ? ((i = `100%`), (a = `100%`))
      : i === void 0
        ? (i = r && r > 0 ? void 0 : `100%`)
        : a === void 0 && (a = r && r > 0 ? void 0 : `100%`),
    { width: i, height: a }
  );
}
function Lg(e) {
  return Number.isFinite(e);
}
function Rg(e) {
  return typeof e == `number` && e > 0 && Number.isFinite(e);
}
function zg() {
  return (
    (zg = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zg.apply(null, arguments)
  );
}
function Bg(e, t) {
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
function Vg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Bg(Object(n), !0).forEach(function (t) {
          Hg(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Bg(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Hg(e, t, n) {
  return (
    (t = Ug(t)) in e
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
function Ug(e) {
  var t = Wg(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Wg(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Gg = (0, R.createContext)({ width: -1, height: -1 });
function Kg(e) {
  var { children: t, width: n, height: r } = e,
    i = (0, R.useMemo)(() => ({ width: n, height: r }), [n, r]);
  return n <= 0 || r <= 0
    ? null
    : R.createElement(Gg.Provider, { value: i }, t);
}
var qg = () => (0, R.useContext)(Gg),
  Jg = (0, R.forwardRef)((e, t) => {
    var {
        aspect: n,
        initialDimension: r = { width: -1, height: -1 },
        width: i,
        height: a,
        minWidth: o = 0,
        minHeight: s,
        maxHeight: c,
        children: l,
        debounce: u = 0,
        id: d,
        className: f,
        onResize: p,
        style: m = {},
      } = e,
      h = (0, R.useRef)(null),
      g = (0, R.useRef)();
    ((g.current = p), (0, R.useImperativeHandle)(t, () => h.current));
    var [_, v] = (0, R.useState)({
        containerWidth: r.width,
        containerHeight: r.height,
      }),
      y = (0, R.useCallback)((e, t) => {
        v((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []);
    (0, R.useEffect)(() => {
      var e = (e) => {
        var t,
          { width: n, height: r } = e[0].contentRect;
        (y(n, r), (t = g.current) == null || t.call(g, n, r));
      };
      u > 0 && (e = (0, kg.default)(e, u, { trailing: !0, leading: !1 }));
      var t = new ResizeObserver(e),
        { width: n, height: r } = h.current.getBoundingClientRect();
      return (
        y(n, r),
        t.observe(h.current),
        () => {
          t.disconnect();
        }
      );
    }, [y, u]);
    var { containerWidth: b, containerHeight: x } = _,
      { calculatedWidth: S, calculatedHeight: C } = Ag(b, x, {
        width: i,
        height: a,
        aspect: n,
        maxHeight: c,
      });
    return R.createElement(
      `div`,
      {
        id: d ? `${d}` : void 0,
        className: U(`recharts-responsive-container`, f),
        style: Vg(
          Vg({}, m),
          {},
          { width: i, height: a, minWidth: o, minHeight: s, maxHeight: c },
        ),
        ref: h,
      },
      R.createElement(
        `div`,
        { style: Fg({ width: i, height: a }) },
        R.createElement(Kg, { width: S, height: C }, l),
      ),
    );
  }),
  Yg = (0, R.forwardRef)((e, t) => {
    var n = qg();
    if (Rg(n.width) && Rg(n.height)) return e.children;
    var { width: r, height: i } = Ig({
        width: e.width,
        height: e.height,
        aspect: e.aspect,
      }),
      { calculatedWidth: a, calculatedHeight: o } = Ag(void 0, void 0, {
        width: r,
        height: i,
        aspect: e.aspect,
        maxHeight: e.maxHeight,
      });
    return G(a) && G(o)
      ? R.createElement(Kg, { width: a, height: o }, e.children)
      : R.createElement(Jg, zg({}, e, { width: r, height: i, ref: t }));
  }),
  Xg = () => {
    var e = Cg(),
      t = q(bg),
      n = q(Tg),
      r = q(wg)?.padding;
    return !e || !n || !r
      ? t
      : {
          width: n.width - r.left - r.right,
          height: n.height - r.top - r.bottom,
          x: r.left,
          y: r.top,
        };
  },
  Zg = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    brushBottom: 0,
  },
  Qg = () => q(yg) ?? Zg,
  $g = () => q(tg),
  e_ = () => q(ng),
  t_ = () => q((e) => e.layout.margin),
  Y = (e) => e.layout.layoutType,
  n_ = () => q(Y),
  r_ = (e) => {
    var t = K(),
      n = Cg(),
      { width: r, height: i } = e,
      a = qg(),
      o = r,
      s = i;
    return (
      a && ((o = a.width > 0 ? a.width : r), (s = a.height > 0 ? a.height : i)),
      (0, R.useEffect)(() => {
        !n && Rg(o) && Rg(s) && t(ah({ width: o, height: s }));
      }, [t, n, o, s]),
      null
    );
  },
  i_ = pm({
    name: `legend`,
    initialState: {
      settings: {
        layout: `horizontal`,
        align: `center`,
        verticalAlign: `middle`,
        itemSorter: `value`,
      },
      size: { width: 0, height: 0 },
      payload: [],
    },
    reducers: {
      setLegendSize(e, t) {
        ((e.size.width = t.payload.width), (e.size.height = t.payload.height));
      },
      setLegendSettings(e, t) {
        ((e.settings.align = t.payload.align),
          (e.settings.layout = t.payload.layout),
          (e.settings.verticalAlign = t.payload.verticalAlign),
          (e.settings.itemSorter = t.payload.itemSorter));
      },
      addLegendPayload: {
        reducer(e, t) {
          e.payload.push(hp(t.payload));
        },
        prepare: Up(),
      },
      removeLegendPayload: {
        reducer(e, t) {
          var n = up(e).payload.indexOf(hp(t.payload));
          n > -1 && e.payload.splice(n, 1);
        },
        prepare: Up(),
      },
    },
  }),
  {
    setLegendSize: a_,
    setLegendSettings: o_,
    addLegendPayload: s_,
    removeLegendPayload: c_,
  } = i_.actions,
  l_ = i_.reducer;
function u_() {
  return (
    (u_ = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    u_.apply(null, arguments)
  );
}
function d_(e, t) {
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
function f_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? d_(Object(n), !0).forEach(function (t) {
          p_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : d_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function p_(e, t, n) {
  return (
    (t = m_(t)) in e
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
function m_(e) {
  var t = h_(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function h_(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function g_(e) {
  return Array.isArray(e) && Cu(e[0]) && Cu(e[1]) ? e.join(` ~ `) : e;
}
var __ = (e) => {
    var {
        separator: t = ` : `,
        contentStyle: n = {},
        itemStyle: r = {},
        labelStyle: i = {},
        payload: a,
        formatter: o,
        itemSorter: s,
        wrapperClassName: c,
        labelClassName: l,
        label: u,
        labelFormatter: d,
        accessibilityLayer: f = !1,
      } = e,
      p = () => {
        if (a && a.length) {
          var e = { padding: 0, margin: 0 },
            n = (s ? (0, $d.default)(a, s) : a).map((e, n) => {
              if (e.type === `none`) return null;
              var i = e.formatter || o || g_,
                { value: s, name: c } = e,
                l = s,
                u = c;
              if (i) {
                var d = i(s, c, e, n, a);
                if (Array.isArray(d)) [l, u] = d;
                else if (d != null) l = d;
                else return null;
              }
              var f = f_(
                {
                  display: `block`,
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: e.color || `#000`,
                },
                r,
              );
              return R.createElement(
                `li`,
                {
                  className: `recharts-tooltip-item`,
                  key: `tooltip-item-${n}`,
                  style: f,
                },
                Cu(u)
                  ? R.createElement(
                      `span`,
                      { className: `recharts-tooltip-item-name` },
                      u,
                    )
                  : null,
                Cu(u)
                  ? R.createElement(
                      `span`,
                      { className: `recharts-tooltip-item-separator` },
                      t,
                    )
                  : null,
                R.createElement(
                  `span`,
                  { className: `recharts-tooltip-item-value` },
                  l,
                ),
                R.createElement(
                  `span`,
                  { className: `recharts-tooltip-item-unit` },
                  e.unit || ``,
                ),
              );
            });
          return R.createElement(
            `ul`,
            { className: `recharts-tooltip-item-list`, style: e },
            n,
          );
        }
        return null;
      },
      m = f_(
        {
          margin: 0,
          padding: 10,
          backgroundColor: `#fff`,
          border: `1px solid #ccc`,
          whiteSpace: `nowrap`,
        },
        n,
      ),
      h = f_({ margin: 0 }, i),
      g = !Au(u),
      _ = g ? u : ``,
      v = U(`recharts-default-tooltip`, c),
      y = U(`recharts-tooltip-label`, l);
    g && d && a != null && (_ = d(u, a));
    var b = f ? { role: `status`, "aria-live": `assertive` } : {};
    return R.createElement(
      `div`,
      u_({ className: v, style: m }, b),
      R.createElement(
        `p`,
        { className: y, style: h },
        R.isValidElement(_) ? _ : `${_}`,
      ),
      p(),
    );
  },
  v_ = `recharts-tooltip-wrapper`,
  y_ = { visibility: `hidden` };
function b_(e) {
  var { coordinate: t, translateX: n, translateY: r } = e;
  return U(v_, {
    [`${v_}-right`]: G(n) && t && G(t.x) && n >= t.x,
    [`${v_}-left`]: G(n) && t && G(t.x) && n < t.x,
    [`${v_}-bottom`]: G(r) && t && G(t.y) && r >= t.y,
    [`${v_}-top`]: G(r) && t && G(t.y) && r < t.y,
  });
}
function x_(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: n,
    key: r,
    offsetTopLeft: i,
    position: a,
    reverseDirection: o,
    tooltipDimension: s,
    viewBox: c,
    viewBoxDimension: l,
  } = e;
  if (a && G(a[r])) return a[r];
  var u = n[r] - s - (i > 0 ? i : 0),
    d = n[r] + i;
  if (t[r]) return o[r] ? u : d;
  var f = c[r];
  return f == null
    ? 0
    : o[r]
      ? Math.max(u < f ? d : u, f)
      : l == null
        ? 0
        : d + s > f + l
          ? Math.max(u, f)
          : Math.max(d, f);
}
function S_(e) {
  var { translateX: t, translateY: n, useTranslate3d: r } = e;
  return {
    transform: r
      ? `translate3d(${t}px, ${n}px, 0)`
      : `translate(${t}px, ${n}px)`,
  };
}
function C_(e) {
  var {
      allowEscapeViewBox: t,
      coordinate: n,
      offsetTopLeft: r,
      position: i,
      reverseDirection: a,
      tooltipBox: o,
      useTranslate3d: s,
      viewBox: c,
    } = e,
    l,
    u,
    d;
  return (
    o.height > 0 && o.width > 0 && n
      ? ((u = x_({
          allowEscapeViewBox: t,
          coordinate: n,
          key: `x`,
          offsetTopLeft: r,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.width,
          viewBox: c,
          viewBoxDimension: c.width,
        })),
        (d = x_({
          allowEscapeViewBox: t,
          coordinate: n,
          key: `y`,
          offsetTopLeft: r,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.height,
          viewBox: c,
          viewBoxDimension: c.height,
        })),
        (l = S_({ translateX: u, translateY: d, useTranslate3d: s })))
      : (l = y_),
    {
      cssProperties: l,
      cssClasses: b_({ translateX: u, translateY: d, coordinate: n }),
    }
  );
}
function w_(e, t) {
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
function T_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? w_(Object(n), !0).forEach(function (t) {
          E_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : w_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function E_(e, t, n) {
  return (
    (t = D_(t)) in e
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
function D_(e) {
  var t = O_(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function O_(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var k_ = class extends R.PureComponent {
    constructor() {
      (super(...arguments),
        E_(this, `state`, {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
        }),
        E_(this, `handleKeyDown`, (e) => {
          e.key === `Escape` &&
            this.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: this.props.coordinate?.x ?? 0,
                y: this.props.coordinate?.y ?? 0,
              },
            });
        }));
    }
    componentDidMount() {
      document.addEventListener(`keydown`, this.handleKeyDown);
    }
    componentWillUnmount() {
      document.removeEventListener(`keydown`, this.handleKeyDown);
    }
    componentDidUpdate() {
      this.state.dismissed &&
        (this.props.coordinate?.x !== this.state.dismissedAtCoordinate.x ||
          this.props.coordinate?.y !== this.state.dismissedAtCoordinate.y) &&
        (this.state.dismissed = !1);
    }
    render() {
      var {
          active: e,
          allowEscapeViewBox: t,
          animationDuration: n,
          animationEasing: r,
          children: i,
          coordinate: a,
          hasPayload: o,
          isAnimationActive: s,
          offset: c,
          position: l,
          reverseDirection: u,
          useTranslate3d: d,
          viewBox: f,
          wrapperStyle: p,
          lastBoundingBox: m,
          innerRef: h,
          hasPortalFromProps: g,
        } = this.props,
        { cssClasses: _, cssProperties: v } = C_({
          allowEscapeViewBox: t,
          coordinate: a,
          offsetTopLeft: c,
          position: l,
          reverseDirection: u,
          tooltipBox: { height: m.height, width: m.width },
          useTranslate3d: d,
          viewBox: f,
        }),
        y = T_(
          T_(
            {},
            g
              ? {}
              : T_(
                  T_(
                    { transition: s && e ? `transform ${n}ms ${r}` : void 0 },
                    v,
                  ),
                  {},
                  {
                    pointerEvents: `none`,
                    visibility:
                      !this.state.dismissed && e && o ? `visible` : `hidden`,
                    position: `absolute`,
                    top: 0,
                    left: 0,
                  },
                ),
          ),
          {},
          {
            visibility: !this.state.dismissed && e && o ? `visible` : `hidden`,
          },
          p,
        );
      return R.createElement(
        `div`,
        {
          xmlns: `http://www.w3.org/1999/xhtml`,
          tabIndex: -1,
          className: _,
          style: y,
          ref: h,
        },
        i,
      );
    }
  },
  A_ = {
    devToolsEnabled: !1,
    isSsr: !(
      typeof window < `u` &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    ),
  },
  j_ = () => q((e) => e.rootProps.accessibilityLayer);
function M_() {
  return (
    (M_ = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    M_.apply(null, arguments)
  );
}
function N_(e, t) {
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
function P_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? N_(Object(n), !0).forEach(function (t) {
          F_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : N_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function F_(e, t, n) {
  return (
    (t = I_(t)) in e
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
function I_(e) {
  var t = L_(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function L_(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var R_ = {
    curveBasisClosed: Rl,
    curveBasisOpen: Bl,
    curveBasis: Il,
    curveBumpX: fl,
    curveBumpY: pl,
    curveLinearClosed: Hl,
    curveLinear: ol,
    curveMonotoneX: Xl,
    curveMonotoneY: Zl,
    curveNatural: eu,
    curveStep: nu,
    curveStepAfter: iu,
    curveStepBefore: ru,
  },
  z_ = (e) => Lg(e.x) && Lg(e.y),
  B_ = (e) => e.x,
  V_ = (e) => e.y,
  H_ = (e, t) => {
    if (typeof e == `function`) return e;
    var n = `curve${ju(e)}`;
    return (n === `curveMonotone` || n === `curveBump`) && t
      ? R_[`${n}${t === `vertical` ? `Y` : `X`}`]
      : R_[n] || ol;
  },
  U_ = (e) => {
    var {
        type: t = `linear`,
        points: n = [],
        baseLine: r,
        layout: i,
        connectNulls: a = !1,
      } = e,
      o = H_(t, i),
      s = a ? n.filter(z_) : n,
      c;
    if (Array.isArray(r)) {
      var l = a ? r.filter((e) => z_(e)) : r,
        u = s.map((e, t) => P_(P_({}, e), {}, { base: l[t] }));
      return (
        (c =
          i === `vertical`
            ? ul()
                .y(V_)
                .x1(B_)
                .x0((e) => e.base.x)
            : ul()
                .x(B_)
                .y1(V_)
                .y0((e) => e.base.y)),
        c.defined(z_).curve(o),
        c(u)
      );
    }
    return (
      (c =
        i === `vertical` && G(r)
          ? ul().y(V_).x1(B_).x0(r)
          : G(r)
            ? ul().x(B_).y1(V_).y0(r)
            : ll().x(B_).y(V_)),
      c.defined(z_).curve(o),
      c(s)
    );
  },
  W_ = (e) => {
    var { className: t, points: n, path: r, pathRef: i } = e;
    if ((!n || !n.length) && !r) return null;
    var a = n && n.length ? U_(e) : r;
    return R.createElement(
      `path`,
      M_({}, kc(e), qu(e), {
        className: U(`recharts-curve`, t),
        d: a === null ? void 0 : a,
        ref: i,
      }),
    );
  },
  G_ = [`x`, `y`, `top`, `left`, `width`, `height`, `className`];
function K_() {
  return (
    (K_ = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    K_.apply(null, arguments)
  );
}
function q_(e, t) {
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
function J_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? q_(Object(n), !0).forEach(function (t) {
          Y_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : q_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Y_(e, t, n) {
  return (
    (t = X_(t)) in e
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
function X_(e) {
  var t = Z_(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Z_(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Q_(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = $_(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function $_(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var ev = (e, t, n, r, i, a) => `M${e},${i}v${r}M${a},${t}h${n}`,
  tv = (e) => {
    var {
        x: t = 0,
        y: n = 0,
        top: r = 0,
        left: i = 0,
        width: a = 0,
        height: o = 0,
        className: s,
      } = e,
      c = Q_(e, G_),
      l = J_({ x: t, y: n, top: r, left: i, width: a, height: o }, c);
    return !G(t) || !G(n) || !G(a) || !G(o) || !G(r) || !G(i)
      ? null
      : R.createElement(
          `path`,
          K_({}, jc(l), {
            className: U(`recharts-cross`, s),
            d: ev(t, n, a, o, r, i),
          }),
        );
  };
function nv(e, t, n, r) {
  var i = r / 2;
  return {
    stroke: `none`,
    fill: `#ccc`,
    x: e === `horizontal` ? t.x - i : n.left + 0.5,
    y: e === `horizontal` ? n.top + 0.5 : t.y - i,
    width: e === `horizontal` ? r : n.width - 1,
    height: e === `horizontal` ? n.height - 1 : r,
  };
}
function rv(e, t) {
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
function iv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? rv(Object(n), !0).forEach(function (t) {
          av(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : rv(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function av(e, t, n) {
  return (
    (t = ov(t)) in e
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
function ov(e) {
  var t = sv(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function sv(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function cv(e, t) {
  var n = iv({}, e),
    r = t;
  return Object.keys(t).reduce(
    (e, t) => (e[t] === void 0 && r[t] !== void 0 && (e[t] = r[t]), e),
    n,
  );
}
function lv() {}
function uv(e) {
  return e != null;
}
function dv(e, t) {
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
function fv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? dv(Object(n), !0).forEach(function (t) {
          pv(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : dv(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function pv(e, t, n) {
  return (
    (t = mv(t)) in e
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
function mv(e) {
  var t = hv(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function hv(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var gv = (e) => e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`),
  _v = (e, t, n) => e.map((e) => `${gv(e)} ${t}ms ${n}`).join(`,`),
  vv = (e, t) =>
    [Object.keys(e), Object.keys(t)].reduce((e, t) =>
      e.filter((e) => t.includes(e)),
    ),
  yv = (e, t) =>
    Object.keys(t).reduce((n, r) => fv(fv({}, n), {}, { [r]: e(r, t[r]) }), {});
function bv(e, t) {
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
function xv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? bv(Object(n), !0).forEach(function (t) {
          Sv(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : bv(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Sv(e, t, n) {
  return (
    (t = Cv(t)) in e
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
function Cv(e) {
  var t = wv(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function wv(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Tv = (e, t, n) => e + (t - e) * n,
  Ev = (e) => {
    var { from: t, to: n } = e;
    return t !== n;
  },
  Dv = (e, t, n) => {
    var r = yv((t, n) => {
      if (Ev(n)) {
        var [r, i] = e(n.from, n.to, n.velocity);
        return xv(xv({}, n), {}, { from: r, velocity: i });
      }
      return n;
    }, t);
    return n < 1
      ? yv(
          (e, t) =>
            Ev(t)
              ? xv(
                  xv({}, t),
                  {},
                  {
                    velocity: Tv(t.velocity, r[e].velocity, n),
                    from: Tv(t.from, r[e].from, n),
                  },
                )
              : t,
          t,
        )
      : Dv(e, r, n - 1);
  };
function Ov(e, t, n, r, i, a) {
  var o,
    s = r.reduce(
      (n, r) =>
        xv(xv({}, n), {}, { [r]: { from: e[r], velocity: 0, to: t[r] } }),
      {},
    ),
    c = () => yv((e, t) => t.from, s),
    l = () => !Object.values(s).filter(Ev).length,
    u = null,
    d = (r) => {
      o ||= r;
      var f = (r - o) / n.dt;
      ((s = Dv(n, s, f)),
        i(xv(xv(xv({}, e), t), c())),
        (o = r),
        l() || (u = a.setTimeout(d)));
    };
  return () => (
    (u = a.setTimeout(d)),
    () => {
      u();
    }
  );
}
function kv(e, t, n, r, i, a, o) {
  var s = null,
    c = i.reduce((n, r) => xv(xv({}, n), {}, { [r]: [e[r], t[r]] }), {}),
    l,
    u = (i) => {
      l ||= i;
      var d = (i - l) / r,
        f = yv((e, t) => Tv(...t, n(d)), c);
      if ((a(xv(xv(xv({}, e), t), f)), d < 1)) s = o.setTimeout(u);
      else {
        var p = yv((e, t) => Tv(...t, n(1)), c);
        a(xv(xv(xv({}, e), t), p));
      }
    };
  return () => (
    (s = o.setTimeout(u)),
    () => {
      s();
    }
  );
}
var Av = (e, t, n, r, i, a) => {
    var o = vv(e, t);
    return n.isStepper === !0 ? Ov(e, t, n, o, i, a) : kv(e, t, n, r, o, i, a);
  },
  jv = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1],
  Mv = (e, t) => e.map((e, n) => e * t ** n).reduce((e, t) => e + t),
  Nv = (e, t) => (n) => Mv(jv(e, t), n),
  Pv = (e, t) => (n) =>
    Mv(
      [
        ...jv(e, t)
          .map((e, t) => e * t)
          .slice(1),
        0,
      ],
      n,
    ),
  Fv = function () {
    var e,
      t,
      n,
      r,
      i = [...arguments];
    if (i.length === 1)
      switch (i[0]) {
        case `linear`:
          [e, n, t, r] = [0, 0, 1, 1];
          break;
        case `ease`:
          [e, n, t, r] = [0.25, 0.1, 0.25, 1];
          break;
        case `ease-in`:
          [e, n, t, r] = [0.42, 0, 1, 1];
          break;
        case `ease-out`:
          [e, n, t, r] = [0.42, 0, 0.58, 1];
          break;
        case `ease-in-out`:
          [e, n, t, r] = [0, 0, 0.58, 1];
          break;
        default:
          var a = i[0].split(`(`);
          a[0] === `cubic-bezier` &&
            a[1].split(`)`)[0].split(`,`).length === 4 &&
            ([e, n, t, r] = a[1]
              .split(`)`)[0]
              .split(`,`)
              .map((e) => parseFloat(e)));
      }
    else i.length === 4 && ([e, n, t, r] = i);
    var o = Nv(e, t),
      s = Nv(n, r),
      c = Pv(e, t),
      l = (e) => (e > 1 ? 1 : e < 0 ? 0 : e),
      u = (e) => {
        for (var t = e > 1 ? 1 : e, n = t, r = 0; r < 8; ++r) {
          var i = o(n) - t,
            a = c(n);
          if (Math.abs(i - t) < 1e-4 || a < 1e-4) return s(n);
          n = l(n - i / a);
        }
        return s(n);
      };
    return ((u.isStepper = !1), u);
  },
  Iv = function () {
    var {
        stiff: e = 100,
        damping: t = 8,
        dt: n = 17,
      } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = (r, i, a) => {
        var o = a + ((-(r - i) * e - a * t) * n) / 1e3,
          s = (a * n) / 1e3 + r;
        return Math.abs(s - i) < 1e-4 && Math.abs(o) < 1e-4 ? [i, 0] : [s, o];
      };
    return ((r.isStepper = !0), (r.dt = n), r);
  },
  Lv = (e) => {
    if (typeof e == `string`)
      switch (e) {
        case `ease`:
        case `ease-in-out`:
        case `ease-out`:
        case `ease-in`:
        case `linear`:
          return Fv(e);
        case `spring`:
          return Iv();
        default:
          if (e.split(`(`)[0] === `cubic-bezier`) return Fv(e);
      }
    return typeof e == `function` ? e : null;
  };
function Rv(e) {
  var t,
    n = () => null,
    r = !1,
    i = null,
    a = (o) => {
      if (!r) {
        if (Array.isArray(o)) {
          if (!o.length) return;
          var [s, ...c] = o;
          if (typeof s == `number`) {
            i = e.setTimeout(a.bind(null, c), s);
            return;
          }
          (a(s), (i = e.setTimeout(a.bind(null, c))));
        } else
          (typeof o == `string` && ((t = o), n(t)),
            typeof o == `object` && ((t = o), n(t)),
            typeof o == `function` && o());
      }
    };
  return {
    stop: () => {
      r = !0;
    },
    start: (e) => {
      ((r = !1), (i &&= (i(), null)), a(e));
    },
    subscribe: (e) => (
      (n = e),
      () => {
        n = () => null;
      }
    ),
    getTimeoutController: () => e,
  };
}
var zv = class {
  setTimeout(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      n = performance.now(),
      r = null,
      i = (a) => {
        a - n >= t
          ? e(a)
          : typeof requestAnimationFrame == `function` &&
            (r = requestAnimationFrame(i));
      };
    return (
      (r = requestAnimationFrame(i)),
      () => {
        cancelAnimationFrame(r);
      }
    );
  }
};
function Bv() {
  return Rv(new zv());
}
var Vv = (0, R.createContext)(Bv);
function Hv(e, t) {
  var n = (0, R.useContext)(Vv);
  return (0, R.useMemo)(() => t ?? n(e), [e, t, n]);
}
var Uv = {
    begin: 0,
    duration: 1e3,
    easing: `ease`,
    isActive: !0,
    canBegin: !0,
    onAnimationEnd: () => {},
    onAnimationStart: () => {},
  },
  Wv = { t: 0 },
  Gv = { t: 1 };
function Kv(e) {
  var t = cv(e, Uv),
    {
      isActive: n,
      canBegin: r,
      duration: i,
      easing: a,
      begin: o,
      onAnimationEnd: s,
      onAnimationStart: c,
      children: l,
    } = t,
    u = Hv(t.animationId, t.animationManager),
    [d, f] = (0, R.useState)(n ? Wv : Gv),
    p = (0, R.useRef)(null);
  return (
    (0, R.useEffect)(() => {
      n || f(Gv);
    }, [n]),
    (0, R.useEffect)(() => {
      if (!n || !r) return lv;
      var e = Av(Wv, Gv, Lv(a), i, f, u.getTimeoutController());
      return (
        u.start([
          c,
          o,
          () => {
            p.current = e();
          },
          i,
          s,
        ]),
        () => {
          (u.stop(), p.current && p.current(), s());
        }
      );
    }, [n, r, i, a, o, c, s, u]),
    l(d.t)
  );
}
function qv(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : `animation-`,
    n = (0, R.useRef)(Tu(t)),
    r = (0, R.useRef)(e);
  return (r.current !== e && ((n.current = Tu(t)), (r.current = e)), n.current);
}
var Jv = [`radius`],
  Yv = [`radius`];
function Xv(e, t) {
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
function Zv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Xv(Object(n), !0).forEach(function (t) {
          Qv(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Xv(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Qv(e, t, n) {
  return (
    (t = $v(t)) in e
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
function $v(e) {
  var t = ey(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ey(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function ty() {
  return (
    (ty = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ty.apply(null, arguments)
  );
}
function ny(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = ry(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function ry(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var iy = (e, t, n, r, i) => {
    var a = Math.min(Math.abs(n) / 2, Math.abs(r) / 2),
      o = r >= 0 ? 1 : -1,
      s = n >= 0 ? 1 : -1,
      c = +((r >= 0 && n >= 0) || (r < 0 && n < 0)),
      l;
    if (a > 0 && i instanceof Array) {
      for (var u = [0, 0, 0, 0], d = 0, f = 4; d < f; d++)
        u[d] = i[d] > a ? a : i[d];
      ((l = `M${e},${t + o * u[0]}`),
        u[0] > 0 && (l += `A ${u[0]},${u[0]},0,0,${c},${e + s * u[0]},${t}`),
        (l += `L ${e + n - s * u[1]},${t}`),
        u[1] > 0 &&
          (l += `A ${u[1]},${u[1]},0,0,${c},
        ${e + n},${t + o * u[1]}`),
        (l += `L ${e + n},${t + r - o * u[2]}`),
        u[2] > 0 &&
          (l += `A ${u[2]},${u[2]},0,0,${c},
        ${e + n - s * u[2]},${t + r}`),
        (l += `L ${e + s * u[3]},${t + r}`),
        u[3] > 0 &&
          (l += `A ${u[3]},${u[3]},0,0,${c},
        ${e},${t + r - o * u[3]}`),
        (l += `Z`));
    } else if (a > 0 && i === +i && i > 0) {
      var p = Math.min(a, i);
      l = `M ${e},${t + o * p}
            A ${p},${p},0,0,${c},${e + s * p},${t}
            L ${e + n - s * p},${t}
            A ${p},${p},0,0,${c},${e + n},${t + o * p}
            L ${e + n},${t + r - o * p}
            A ${p},${p},0,0,${c},${e + n - s * p},${t + r}
            L ${e + s * p},${t + r}
            A ${p},${p},0,0,${c},${e},${t + r - o * p} Z`;
    } else l = `M ${e},${t} h ${n} v ${r} h ${-n} Z`;
    return l;
  },
  ay = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
  },
  oy = (e) => {
    var t = cv(e, ay),
      n = (0, R.useRef)(null),
      [r, i] = (0, R.useState)(-1);
    (0, R.useEffect)(() => {
      if (n.current && n.current.getTotalLength)
        try {
          var e = n.current.getTotalLength();
          e && i(e);
        } catch {}
    }, []);
    var { x: a, y: o, width: s, height: c, radius: l, className: u } = t,
      {
        animationEasing: d,
        animationDuration: f,
        animationBegin: p,
        isAnimationActive: m,
        isUpdateAnimationActive: h,
      } = t,
      g = (0, R.useRef)(s),
      _ = (0, R.useRef)(c),
      v = (0, R.useRef)(a),
      y = (0, R.useRef)(o),
      b = qv(
        (0, R.useMemo)(
          () => ({ x: a, y: o, width: s, height: c, radius: l }),
          [a, o, s, c, l],
        ),
        `rectangle-`,
      );
    if (a !== +a || o !== +o || s !== +s || c !== +c || s === 0 || c === 0)
      return null;
    var x = U(`recharts-rectangle`, u);
    if (!h) {
      var S = jc(t),
        { radius: C } = S,
        w = ny(S, Jv);
      return R.createElement(
        `path`,
        ty({}, w, {
          radius: typeof l == `number` ? l : void 0,
          className: x,
          d: iy(a, o, s, c, l),
        }),
      );
    }
    var T = g.current,
      E = _.current,
      D = v.current,
      O = y.current,
      k = `0px ${r === -1 ? 1 : r}px`,
      ee = `${r}px 0px`,
      te = _v([`strokeDasharray`], f, typeof d == `string` ? d : void 0);
    return R.createElement(
      Kv,
      {
        animationId: b,
        key: b,
        canBegin: r > 0,
        duration: f,
        easing: d,
        isActive: h,
        begin: p,
      },
      (e) => {
        var r = Ou(T, s, e),
          i = Ou(E, c, e),
          u = Ou(D, a, e),
          d = Ou(O, o, e);
        n.current &&
          ((g.current = r), (_.current = i), (v.current = u), (y.current = d));
        var f = m
            ? e > 0
              ? { transition: te, strokeDasharray: ee }
              : { strokeDasharray: k }
            : { strokeDasharray: ee },
          p = jc(t),
          { radius: h } = p,
          b = ny(p, Yv);
        return R.createElement(
          `path`,
          ty({}, b, {
            radius: typeof l == `number` ? l : void 0,
            className: x,
            d: iy(u, d, r, i, l),
            ref: n,
            style: Zv(Zv({}, f), t.style),
          }),
        );
      },
    );
  };
function sy(e) {
  var { cx: t, cy: n, radius: r, startAngle: i, endAngle: a } = e;
  return {
    points: [gh(t, n, r, i), gh(t, n, r, a)],
    cx: t,
    cy: n,
    radius: r,
    startAngle: i,
    endAngle: a,
  };
}
function cy() {
  return (
    (cy = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    cy.apply(null, arguments)
  );
}
var ly = (e, t) => bu(t - e) * Math.min(Math.abs(t - e), 359.999),
  uy = (e) => {
    var {
        cx: t,
        cy: n,
        radius: r,
        angle: i,
        sign: a,
        isExternal: o,
        cornerRadius: s,
        cornerIsExternal: c,
      } = e,
      l = s * (o ? 1 : -1) + r,
      u = Math.asin(s / l) / ph,
      d = c ? i : i + a * u,
      f = gh(t, n, l, d),
      p = gh(t, n, r, d),
      m = c ? i - a * u : i;
    return {
      center: f,
      circleTangency: p,
      lineTangency: gh(t, n, l * Math.cos(u * ph), m),
      theta: u,
    };
  },
  dy = (e) => {
    var {
        cx: t,
        cy: n,
        innerRadius: r,
        outerRadius: i,
        startAngle: a,
        endAngle: o,
      } = e,
      s = ly(a, o),
      c = a + s,
      l = gh(t, n, i, a),
      u = gh(t, n, i, c),
      d = `M ${l.x},${l.y}
    A ${i},${i},0,
    ${+(Math.abs(s) > 180)},${+(a > c)},
    ${u.x},${u.y}
  `;
    if (r > 0) {
      var f = gh(t, n, r, a),
        p = gh(t, n, r, c);
      d += `L ${p.x},${p.y}
            A ${r},${r},0,
            ${+(Math.abs(s) > 180)},${+(a <= c)},
            ${f.x},${f.y} Z`;
    } else d += `L ${t},${n} Z`;
    return d;
  },
  fy = (e) => {
    var {
        cx: t,
        cy: n,
        innerRadius: r,
        outerRadius: i,
        cornerRadius: a,
        forceCornerRadius: o,
        cornerIsExternal: s,
        startAngle: c,
        endAngle: l,
      } = e,
      u = bu(l - c),
      {
        circleTangency: d,
        lineTangency: f,
        theta: p,
      } = uy({
        cx: t,
        cy: n,
        radius: i,
        angle: c,
        sign: u,
        cornerRadius: a,
        cornerIsExternal: s,
      }),
      {
        circleTangency: m,
        lineTangency: h,
        theta: g,
      } = uy({
        cx: t,
        cy: n,
        radius: i,
        angle: l,
        sign: -u,
        cornerRadius: a,
        cornerIsExternal: s,
      }),
      _ = s ? Math.abs(c - l) : Math.abs(c - l) - p - g;
    if (_ < 0)
      return o
        ? `M ${f.x},${f.y}
        a${a},${a},0,0,1,${a * 2},0
        a${a},${a},0,0,1,${-a * 2},0
      `
        : dy({
            cx: t,
            cy: n,
            innerRadius: r,
            outerRadius: i,
            startAngle: c,
            endAngle: l,
          });
    var v = `M ${f.x},${f.y}
    A${a},${a},0,0,${+(u < 0)},${d.x},${d.y}
    A${i},${i},0,${+(_ > 180)},${+(u < 0)},${m.x},${m.y}
    A${a},${a},0,0,${+(u < 0)},${h.x},${h.y}
  `;
    if (r > 0) {
      var {
          circleTangency: y,
          lineTangency: b,
          theta: x,
        } = uy({
          cx: t,
          cy: n,
          radius: r,
          angle: c,
          sign: u,
          isExternal: !0,
          cornerRadius: a,
          cornerIsExternal: s,
        }),
        {
          circleTangency: S,
          lineTangency: C,
          theta: w,
        } = uy({
          cx: t,
          cy: n,
          radius: r,
          angle: l,
          sign: -u,
          isExternal: !0,
          cornerRadius: a,
          cornerIsExternal: s,
        }),
        T = s ? Math.abs(c - l) : Math.abs(c - l) - x - w;
      if (T < 0 && a === 0) return `${v}L${t},${n}Z`;
      v += `L${C.x},${C.y}
      A${a},${a},0,0,${+(u < 0)},${S.x},${S.y}
      A${r},${r},0,${+(T > 180)},${+(u > 0)},${y.x},${y.y}
      A${a},${a},0,0,${+(u < 0)},${b.x},${b.y}Z`;
    } else v += `L${t},${n}Z`;
    return v;
  },
  py = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  my = (e) => {
    var t = cv(e, py),
      {
        cx: n,
        cy: r,
        innerRadius: i,
        outerRadius: a,
        cornerRadius: o,
        forceCornerRadius: s,
        cornerIsExternal: c,
        startAngle: l,
        endAngle: u,
        className: d,
      } = t;
    if (a < i || l === u) return null;
    var f = U(`recharts-sector`, d),
      p = a - i,
      m = Eu(o, p, 0, !0),
      h =
        m > 0 && Math.abs(l - u) < 360
          ? fy({
              cx: n,
              cy: r,
              innerRadius: i,
              outerRadius: a,
              cornerRadius: Math.min(m, p / 2),
              forceCornerRadius: s,
              cornerIsExternal: c,
              startAngle: l,
              endAngle: u,
            })
          : dy({
              cx: n,
              cy: r,
              innerRadius: i,
              outerRadius: a,
              startAngle: l,
              endAngle: u,
            });
    return R.createElement(`path`, cy({}, jc(t), { className: f, d: h }));
  };
function hy(e, t, n) {
  var r, i, a, o;
  if (e === `horizontal`)
    ((r = t.x), (a = r), (i = n.top), (o = n.top + n.height));
  else if (e === `vertical`)
    ((i = t.y), (o = i), (r = n.left), (a = n.left + n.width));
  else if (t.cx != null && t.cy != null) {
    if (e === `centric`) {
      var { cx: s, cy: c, innerRadius: l, outerRadius: u, angle: d } = t,
        f = gh(s, c, l, d),
        p = gh(s, c, u, d);
      ((r = f.x), (i = f.y), (a = p.x), (o = p.y));
    } else return sy(t);
  }
  return [
    { x: r, y: i },
    { x: a, y: o },
  ];
}
var gy = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = qd();
    function n(e) {
      return t.isSymbol(e) ? NaN : Number(e);
    }
    e.toNumber = n;
  }),
  _y = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = gy();
    function n(e) {
      return e
        ? ((e = t.toNumber(e)),
          e === 1 / 0 || e === -1 / 0
            ? (e < 0 ? -1 : 1) * Number.MAX_VALUE
            : e === e
              ? e
              : 0)
        : e === 0
          ? e
          : 0;
    }
    e.toFinite = n;
  }),
  vy = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Zd(),
      n = _y();
    function r(e, r, i) {
      (i &&
        typeof i != `number` &&
        t.isIterateeCall(e, r, i) &&
        (r = i = void 0),
        (e = n.toFinite(e)),
        r === void 0 ? ((r = e), (e = 0)) : (r = n.toFinite(r)),
        (i = i === void 0 ? (e < r ? 1 : -1) : n.toFinite(i)));
      let a = Math.max(Math.ceil((r - e) / (i || 1)), 0),
        o = Array(a);
      for (let t = 0; t < a; t++) ((o[t] = e), (e += i));
      return o;
    }
    e.range = r;
  }),
  yy = n((e, t) => {
    t.exports = vy().range;
  });
function by(e, t) {
  return e == null || t == null
    ? NaN
    : e < t
      ? -1
      : e > t
        ? 1
        : e >= t
          ? 0
          : NaN;
}
function xy(e, t) {
  return e == null || t == null
    ? NaN
    : t < e
      ? -1
      : t > e
        ? 1
        : t >= e
          ? 0
          : NaN;
}
function Sy(e) {
  let t, n, r;
  e.length === 2
    ? ((t = e === by || e === xy ? e : Cy), (n = e), (r = e))
    : ((t = by), (n = (t, n) => by(e(t), n)), (r = (t, n) => e(t) - n));
  function i(e, r, i = 0, a = e.length) {
    if (i < a) {
      if (t(r, r) !== 0) return a;
      do {
        let t = (i + a) >>> 1;
        n(e[t], r) < 0 ? (i = t + 1) : (a = t);
      } while (i < a);
    }
    return i;
  }
  function a(e, r, i = 0, a = e.length) {
    if (i < a) {
      if (t(r, r) !== 0) return a;
      do {
        let t = (i + a) >>> 1;
        n(e[t], r) <= 0 ? (i = t + 1) : (a = t);
      } while (i < a);
    }
    return i;
  }
  function o(e, t, n = 0, a = e.length) {
    let o = i(e, t, n, a - 1);
    return o > n && r(e[o - 1], t) > -r(e[o], t) ? o - 1 : o;
  }
  return { left: i, center: o, right: a };
}
function Cy() {
  return 0;
}
function wy(e) {
  return e === null ? NaN : +e;
}
function* Ty(e, t) {
  if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
  else {
    let n = -1;
    for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
  }
}
var Ey = Sy(by),
  Dy = Ey.right;
(Ey.left, Sy(wy).center);
var Oy = class extends Map {
  constructor(e, t = My) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: t },
      }),
      e != null)
    )
      for (let [t, n] of e) this.set(t, n);
  }
  get(e) {
    return super.get(ky(this, e));
  }
  has(e) {
    return super.has(ky(this, e));
  }
  set(e, t) {
    return super.set(Ay(this, e), t);
  }
  delete(e) {
    return super.delete(jy(this, e));
  }
};
function ky({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function Ay({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function jy({ _intern: e, _key: t }, n) {
  let r = t(n);
  return (e.has(r) && ((n = e.get(r)), e.delete(r)), n);
}
function My(e) {
  return typeof e == `object` && e ? e.valueOf() : e;
}
function Ny(e = by) {
  if (e === by) return Py;
  if (typeof e != `function`) throw TypeError(`compare is not a function`);
  return (t, n) => {
    let r = e(t, n);
    return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
  };
}
function Py(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : +(e > t))
  );
}
var Fy = Math.sqrt(50),
  Iy = Math.sqrt(10),
  Ly = Math.sqrt(2);
function Ry(e, t, n) {
  let r = (t - e) / Math.max(0, n),
    i = Math.floor(Math.log10(r)),
    a = r / 10 ** i,
    o = a >= Fy ? 10 : a >= Iy ? 5 : a >= Ly ? 2 : 1,
    s,
    c,
    l;
  return (
    i < 0
      ? ((l = 10 ** -i / o),
        (s = Math.round(e * l)),
        (c = Math.round(t * l)),
        s / l < e && ++s,
        c / l > t && --c,
        (l = -l))
      : ((l = 10 ** i * o),
        (s = Math.round(e / l)),
        (c = Math.round(t / l)),
        s * l < e && ++s,
        c * l > t && --c),
    c < s && 0.5 <= n && n < 2 ? Ry(e, t, n * 2) : [s, c, l]
  );
}
function zy(e, t, n) {
  if (((t = +t), (e = +e), (n = +n), !(n > 0))) return [];
  if (e === t) return [e];
  let r = t < e,
    [i, a, o] = r ? Ry(t, e, n) : Ry(e, t, n);
  if (!(a >= i)) return [];
  let s = a - i + 1,
    c = Array(s);
  if (r) {
    if (o < 0) for (let e = 0; e < s; ++e) c[e] = (a - e) / -o;
    else for (let e = 0; e < s; ++e) c[e] = (a - e) * o;
  } else if (o < 0) for (let e = 0; e < s; ++e) c[e] = (i + e) / -o;
  else for (let e = 0; e < s; ++e) c[e] = (i + e) * o;
  return c;
}
function By(e, t, n) {
  return ((t = +t), (e = +e), (n = +n), Ry(e, t, n)[2]);
}
function Vy(e, t, n) {
  ((t = +t), (e = +e), (n = +n));
  let r = t < e,
    i = r ? By(t, e, n) : By(e, t, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Hy(e, t) {
  let n;
  if (t === void 0)
    for (let t of e)
      t != null && (n < t || (n === void 0 && t >= t)) && (n = t);
  else {
    let r = -1;
    for (let i of e)
      (i = t(i, ++r, e)) != null &&
        (n < i || (n === void 0 && i >= i)) &&
        (n = i);
  }
  return n;
}
function Uy(e, t) {
  let n;
  if (t === void 0)
    for (let t of e)
      t != null && (n > t || (n === void 0 && t >= t)) && (n = t);
  else {
    let r = -1;
    for (let i of e)
      (i = t(i, ++r, e)) != null &&
        (n > i || (n === void 0 && i >= i)) &&
        (n = i);
  }
  return n;
}
function Wy(e, t, n = 0, r = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (n = Math.floor(Math.max(0, n))),
    (r = Math.floor(Math.min(e.length - 1, r))),
    !(n <= t && t <= r))
  )
    return e;
  for (i = i === void 0 ? Py : Ny(i); r > n;) {
    if (r - n > 600) {
      let a = r - n + 1,
        o = t - n + 1,
        s = Math.log(a),
        c = 0.5 * Math.exp((2 * s) / 3),
        l = 0.5 * Math.sqrt((s * c * (a - c)) / a) * (o - a / 2 < 0 ? -1 : 1),
        u = Math.max(n, Math.floor(t - (o * c) / a + l)),
        d = Math.min(r, Math.floor(t + ((a - o) * c) / a + l));
      Wy(e, t, u, d, i);
    }
    let a = e[t],
      o = n,
      s = r;
    for (Gy(e, n, t), i(e[r], a) > 0 && Gy(e, n, r); o < s;) {
      for (Gy(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
      for (; i(e[s], a) > 0;) --s;
    }
    (i(e[n], a) === 0 ? Gy(e, n, s) : (++s, Gy(e, s, r)),
      s <= t && (n = s + 1),
      t <= s && (r = s - 1));
  }
  return e;
}
function Gy(e, t, n) {
  let r = e[t];
  ((e[t] = e[n]), (e[n] = r));
}
function Ky(e, t, n) {
  if (((e = Float64Array.from(Ty(e, n))), (r = e.length) && !isNaN((t = +t)))) {
    if (t <= 0 || r < 2) return Uy(e);
    if (t >= 1) return Hy(e);
    var r,
      i = (r - 1) * t,
      a = Math.floor(i),
      o = Hy(Wy(e, a).subarray(0, a + 1));
    return o + (Uy(e.subarray(a + 1)) - o) * (i - a);
  }
}
function qy(e, t, n = wy) {
  if ((r = e.length) && !isNaN((t = +t))) {
    if (t <= 0 || r < 2) return +n(e[0], 0, e);
    if (t >= 1) return +n(e[r - 1], r - 1, e);
    var r,
      i = (r - 1) * t,
      a = Math.floor(i),
      o = +n(e[a], a, e);
    return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
  }
}
function Jy(e, t, n) {
  ((e = +e),
    (t = +t),
    (n = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +n));
  for (
    var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = Array(i);
    ++r < i;
  )
    a[r] = e + r * n;
  return a;
}
function Yy(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
  }
  return this;
}
function Xy(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      typeof e == `function` ? this.interpolator(e) : this.range(e);
      break;
    default:
      (this.domain(e),
        typeof t == `function` ? this.interpolator(t) : this.range(t));
  }
  return this;
}
var Zy = Symbol(`implicit`);
function Qy() {
  var e = new Oy(),
    t = [],
    n = [],
    r = Zy;
  function i(i) {
    let a = e.get(i);
    if (a === void 0) {
      if (r !== Zy) return r;
      e.set(i, (a = t.push(i) - 1));
    }
    return n[a % n.length];
  }
  return (
    (i.domain = function (n) {
      if (!arguments.length) return t.slice();
      ((t = []), (e = new Oy()));
      for (let r of n) e.has(r) || e.set(r, t.push(r) - 1);
      return i;
    }),
    (i.range = function (e) {
      return arguments.length ? ((n = Array.from(e)), i) : n.slice();
    }),
    (i.unknown = function (e) {
      return arguments.length ? ((r = e), i) : r;
    }),
    (i.copy = function () {
      return Qy(t, n).unknown(r);
    }),
    Yy.apply(i, arguments),
    i
  );
}
function $y() {
  var e = Qy().unknown(void 0),
    t = e.domain,
    n = e.range,
    r = 0,
    i = 1,
    a,
    o,
    s = !1,
    c = 0,
    l = 0,
    u = 0.5;
  delete e.unknown;
  function d() {
    var e = t().length,
      d = i < r,
      f = d ? i : r,
      p = d ? r : i;
    ((a = (p - f) / Math.max(1, e - c + l * 2)),
      s && (a = Math.floor(a)),
      (f += (p - f - a * (e - c)) * u),
      (o = a * (1 - c)),
      s && ((f = Math.round(f)), (o = Math.round(o))));
    var m = Jy(e).map(function (e) {
      return f + a * e;
    });
    return n(d ? m.reverse() : m);
  }
  return (
    (e.domain = function (e) {
      return arguments.length ? (t(e), d()) : t();
    }),
    (e.range = function (e) {
      return arguments.length
        ? (([r, i] = e), (r = +r), (i = +i), d())
        : [r, i];
    }),
    (e.rangeRound = function (e) {
      return (([r, i] = e), (r = +r), (i = +i), (s = !0), d());
    }),
    (e.bandwidth = function () {
      return o;
    }),
    (e.step = function () {
      return a;
    }),
    (e.round = function (e) {
      return arguments.length ? ((s = !!e), d()) : s;
    }),
    (e.padding = function (e) {
      return arguments.length ? ((c = Math.min(1, (l = +e))), d()) : c;
    }),
    (e.paddingInner = function (e) {
      return arguments.length ? ((c = Math.min(1, e)), d()) : c;
    }),
    (e.paddingOuter = function (e) {
      return arguments.length ? ((l = +e), d()) : l;
    }),
    (e.align = function (e) {
      return arguments.length ? ((u = Math.max(0, Math.min(1, e))), d()) : u;
    }),
    (e.copy = function () {
      return $y(t(), [r, i]).round(s).paddingInner(c).paddingOuter(l).align(u);
    }),
    Yy.apply(d(), arguments)
  );
}
function eb(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return eb(t());
    }),
    e
  );
}
function tb() {
  return eb($y.apply(null, arguments).paddingInner(1));
}
function nb(e, t, n) {
  ((e.prototype = t.prototype = n), (n.constructor = e));
}
function rb(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function ib() {}
var ab = 0.7,
  ob = 1 / ab,
  sb = `\\s*([+-]?\\d+)\\s*`,
  cb = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,
  lb = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,
  ub = /^#([0-9a-f]{3,8})$/,
  db = RegExp(`^rgb\\(${sb},${sb},${sb}\\)$`),
  fb = RegExp(`^rgb\\(${lb},${lb},${lb}\\)$`),
  pb = RegExp(`^rgba\\(${sb},${sb},${sb},${cb}\\)$`),
  mb = RegExp(`^rgba\\(${lb},${lb},${lb},${cb}\\)$`),
  hb = RegExp(`^hsl\\(${cb},${lb},${lb}\\)$`),
  gb = RegExp(`^hsla\\(${cb},${lb},${lb},${cb}\\)$`),
  _b = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
nb(ib, Sb, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: vb,
  formatHex: vb,
  formatHex8: yb,
  formatHsl: bb,
  formatRgb: xb,
  toString: xb,
});
function vb() {
  return this.rgb().formatHex();
}
function yb() {
  return this.rgb().formatHex8();
}
function bb() {
  return Fb(this).formatHsl();
}
function xb() {
  return this.rgb().formatRgb();
}
function Sb(e) {
  var t, n;
  return (
    (e = (e + ``).trim().toLowerCase()),
    (t = ub.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? Cb(t)
          : n === 3
            ? new Db(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : n === 8
              ? wb(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : n === 4
                ? wb(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = db.exec(e))
        ? new Db(t[1], t[2], t[3], 1)
        : (t = fb.exec(e))
          ? new Db(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = pb.exec(e))
            ? wb(t[1], t[2], t[3], t[4])
            : (t = mb.exec(e))
              ? wb(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = hb.exec(e))
                ? Pb(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = gb.exec(e))
                  ? Pb(t[1], t[2] / 100, t[3] / 100, t[4])
                  : _b.hasOwnProperty(e)
                    ? Cb(_b[e])
                    : e === `transparent`
                      ? new Db(NaN, NaN, NaN, 0)
                      : null
  );
}
function Cb(e) {
  return new Db((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function wb(e, t, n, r) {
  return (r <= 0 && (e = t = n = NaN), new Db(e, t, n, r));
}
function Tb(e) {
  return (
    e instanceof ib || (e = Sb(e)),
    e ? ((e = e.rgb()), new Db(e.r, e.g, e.b, e.opacity)) : new Db()
  );
}
function Eb(e, t, n, r) {
  return arguments.length === 1 ? Tb(e) : new Db(e, t, n, r ?? 1);
}
function Db(e, t, n, r) {
  ((this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r));
}
nb(
  Db,
  Eb,
  rb(ib, {
    brighter(e) {
      return (
        (e = e == null ? ob : ob ** +e),
        new Db(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? ab : ab ** +e),
        new Db(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Db(Mb(this.r), Mb(this.g), Mb(this.b), jb(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: Ob,
    formatHex: Ob,
    formatHex8: kb,
    formatRgb: Ab,
    toString: Ab,
  }),
);
function Ob() {
  return `#${Nb(this.r)}${Nb(this.g)}${Nb(this.b)}`;
}
function kb() {
  return `#${Nb(this.r)}${Nb(this.g)}${Nb(this.b)}${Nb((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ab() {
  let e = jb(this.opacity);
  return `${e === 1 ? `rgb(` : `rgba(`}${Mb(this.r)}, ${Mb(this.g)}, ${Mb(this.b)}${e === 1 ? `)` : `, ${e})`}`;
}
function jb(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Mb(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Nb(e) {
  return ((e = Mb(e)), (e < 16 ? `0` : ``) + e.toString(16));
}
function Pb(e, t, n, r) {
  return (
    r <= 0
      ? (e = t = n = NaN)
      : n <= 0 || n >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new Lb(e, t, n, r)
  );
}
function Fb(e) {
  if (e instanceof Lb) return new Lb(e.h, e.s, e.l, e.opacity);
  if ((e instanceof ib || (e = Sb(e)), !e)) return new Lb();
  if (e instanceof Lb) return e;
  e = e.rgb();
  var t = e.r / 255,
    n = e.g / 255,
    r = e.b / 255,
    i = Math.min(t, n, r),
    a = Math.max(t, n, r),
    o = NaN,
    s = a - i,
    c = (a + i) / 2;
  return (
    s
      ? ((o =
          t === a
            ? (n - r) / s + (n < r) * 6
            : n === a
              ? (r - t) / s + 2
              : (t - n) / s + 4),
        (s /= c < 0.5 ? a + i : 2 - a - i),
        (o *= 60))
      : (s = c > 0 && c < 1 ? 0 : o),
    new Lb(o, s, c, e.opacity)
  );
}
function Ib(e, t, n, r) {
  return arguments.length === 1 ? Fb(e) : new Lb(e, t, n, r ?? 1);
}
function Lb(e, t, n, r) {
  ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
}
nb(
  Lb,
  Ib,
  rb(ib, {
    brighter(e) {
      return (
        (e = e == null ? ob : ob ** +e),
        new Lb(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? ab : ab ** +e),
        new Lb(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        i = 2 * n - r;
      return new Db(
        Bb(e >= 240 ? e - 240 : e + 120, i, r),
        Bb(e, i, r),
        Bb(e < 120 ? e + 240 : e - 120, i, r),
        this.opacity,
      );
    },
    clamp() {
      return new Lb(Rb(this.h), zb(this.s), zb(this.l), jb(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      let e = jb(this.opacity);
      return `${e === 1 ? `hsl(` : `hsla(`}${Rb(this.h)}, ${zb(this.s) * 100}%, ${zb(this.l) * 100}%${e === 1 ? `)` : `, ${e})`}`;
    },
  }),
);
function Rb(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function zb(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Bb(e, t, n) {
  return (
    (e < 60
      ? t + ((n - t) * e) / 60
      : e < 180
        ? n
        : e < 240
          ? t + ((n - t) * (240 - e)) / 60
          : t) * 255
  );
}
var Vb = (e) => () => e;
function Hb(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function Ub(e, t, n) {
  return (
    (e **= +n),
    (t = t ** +n - e),
    (n = 1 / n),
    function (r) {
      return (e + r * t) ** +n;
    }
  );
}
function Wb(e) {
  return (e = +e) == 1
    ? Gb
    : function (t, n) {
        return n - t ? Ub(t, n, e) : Vb(isNaN(t) ? n : t);
      };
}
function Gb(e, t) {
  var n = t - e;
  return n ? Hb(e, n) : Vb(isNaN(e) ? t : e);
}
var Kb = (function e(t) {
  var n = Wb(t);
  function r(e, t) {
    var r = n((e = Eb(e)).r, (t = Eb(t)).r),
      i = n(e.g, t.g),
      a = n(e.b, t.b),
      o = Gb(e.opacity, t.opacity);
    return function (t) {
      return (
        (e.r = r(t)), (e.g = i(t)), (e.b = a(t)), (e.opacity = o(t)), e + ``
      );
    };
  }
  return ((r.gamma = e), r);
})(1);
function qb(e, t) {
  t ||= [];
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
    return r;
  };
}
function Jb(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Yb(e, t) {
  for (
    var n = t ? t.length : 0,
      r = e ? Math.min(n, e.length) : 0,
      i = Array(r),
      a = Array(n),
      o = 0;
    o < r;
    ++o
  )
    i[o] = ix(e[o], t[o]);
  for (; o < n; ++o) a[o] = t[o];
  return function (e) {
    for (o = 0; o < r; ++o) a[o] = i[o](e);
    return a;
  };
}
function Xb(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return (n.setTime(e * (1 - r) + t * r), n);
    }
  );
}
function Zb(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function Qb(e, t) {
  var n = {},
    r = {},
    i;
  for (i in ((typeof e == `object` && e) || (e = {}),
  (typeof t == `object` && t) || (t = {}),
  t))
    i in e ? (n[i] = ix(e[i], t[i])) : (r[i] = t[i]);
  return function (e) {
    for (i in n) r[i] = n[i](e);
    return r;
  };
}
var $b = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  ex = new RegExp($b.source, `g`);
function tx(e) {
  return function () {
    return e;
  };
}
function nx(e) {
  return function (t) {
    return e(t) + ``;
  };
}
function rx(e, t) {
  var n = ($b.lastIndex = ex.lastIndex = 0),
    r,
    i,
    a,
    o = -1,
    s = [],
    c = [];
  for (e += ``, t += ``; (r = $b.exec(e)) && (i = ex.exec(t));)
    ((a = i.index) > n &&
      ((a = t.slice(n, a)), s[o] ? (s[o] += a) : (s[++o] = a)),
      (r = r[0]) === (i = i[0])
        ? s[o]
          ? (s[o] += i)
          : (s[++o] = i)
        : ((s[++o] = null), c.push({ i: o, x: Zb(r, i) })),
      (n = ex.lastIndex));
  return (
    n < t.length && ((a = t.slice(n)), s[o] ? (s[o] += a) : (s[++o] = a)),
    s.length < 2
      ? c[0]
        ? nx(c[0].x)
        : tx(t)
      : ((t = c.length),
        function (e) {
          for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
          return s.join(``);
        })
  );
}
function ix(e, t) {
  var n = typeof t,
    r;
  return t == null || n === `boolean`
    ? Vb(t)
    : (n === `number`
        ? Zb
        : n === `string`
          ? (r = Sb(t))
            ? ((t = r), Kb)
            : rx
          : t instanceof Sb
            ? Kb
            : t instanceof Date
              ? Xb
              : Jb(t)
                ? qb
                : Array.isArray(t)
                  ? Yb
                  : (typeof t.valueOf != `function` &&
                        typeof t.toString != `function`) ||
                      isNaN(t)
                    ? Qb
                    : Zb)(e, t);
}
function ax(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
function ox(e, t) {
  t === void 0 && ((t = e), (e = ix));
  for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;)
    a[n] = e(i, (i = t[++n]));
  return function (e) {
    var t = Math.max(0, Math.min(r - 1, Math.floor((e *= r))));
    return a[t](e - t);
  };
}
function sx(e) {
  return function () {
    return e;
  };
}
function cx(e) {
  return +e;
}
var lx = [0, 1];
function ux(e) {
  return e;
}
function dx(e, t) {
  return (t -= e = +e)
    ? function (n) {
        return (n - e) / t;
      }
    : sx(isNaN(t) ? NaN : 0.5);
}
function fx(e, t) {
  var n;
  return (
    e > t && ((n = e), (e = t), (t = n)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function px(e, t, n) {
  var r = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < r ? ((r = dx(i, r)), (a = n(o, a))) : ((r = dx(r, i)), (a = n(a, o))),
    function (e) {
      return a(r(e));
    }
  );
}
function mx(e, t, n) {
  var r = Math.min(e.length, t.length) - 1,
    i = Array(r),
    a = Array(r),
    o = -1;
  for (
    e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < r;
  )
    ((i[o] = dx(e[o], e[o + 1])), (a[o] = n(t[o], t[o + 1])));
  return function (t) {
    var n = Dy(e, t, 1, r) - 1;
    return a[n](i[n](t));
  };
}
function hx(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function gx() {
  var e = lx,
    t = lx,
    n = ix,
    r,
    i,
    a,
    o = ux,
    s,
    c,
    l;
  function u() {
    var n = Math.min(e.length, t.length);
    return (
      o !== ux && (o = fx(e[0], e[n - 1])),
      (s = n > 2 ? mx : px),
      (c = l = null),
      d
    );
  }
  function d(i) {
    return i == null || isNaN((i = +i))
      ? a
      : (c ||= s(e.map(r), t, n))(r(o(i)));
  }
  return (
    (d.invert = function (n) {
      return o(i((l ||= s(t, e.map(r), Zb))(n)));
    }),
    (d.domain = function (t) {
      return arguments.length ? ((e = Array.from(t, cx)), u()) : e.slice();
    }),
    (d.range = function (e) {
      return arguments.length ? ((t = Array.from(e)), u()) : t.slice();
    }),
    (d.rangeRound = function (e) {
      return ((t = Array.from(e)), (n = ax), u());
    }),
    (d.clamp = function (e) {
      return arguments.length ? ((o = e ? !0 : ux), u()) : o !== ux;
    }),
    (d.interpolate = function (e) {
      return arguments.length ? ((n = e), u()) : n;
    }),
    (d.unknown = function (e) {
      return arguments.length ? ((a = e), d) : a;
    }),
    function (e, t) {
      return ((r = e), (i = t), u());
    }
  );
}
function _x() {
  return gx()(ux, ux);
}
function vx(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString(`en`).replace(/,/g, ``)
    : e.toString(10);
}
function yx(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(`e`),
    r = e.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
function bx(e) {
  return ((e = yx(Math.abs(e))), e ? e[1] : NaN);
}
function xx(e, t) {
  return function (n, r) {
    for (
      var i = n.length, a = [], o = 0, s = e[0], c = 0;
      i > 0 &&
      s > 0 &&
      (c + s + 1 > r && (s = Math.max(1, r - c)),
      a.push(n.substring((i -= s), i + s)),
      !((c += s + 1) > r));
    )
      s = e[(o = (o + 1) % e.length)];
    return a.reverse().join(t);
  };
}
function Sx(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (t) {
      return e[+t];
    });
  };
}
var Cx =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function wx(e) {
  if (!(t = Cx.exec(e))) throw Error(`invalid format: ` + e);
  var t;
  return new Tx({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
wx.prototype = Tx.prototype;
function Tx(e) {
  ((this.fill = e.fill === void 0 ? ` ` : e.fill + ``),
    (this.align = e.align === void 0 ? `>` : e.align + ``),
    (this.sign = e.sign === void 0 ? `-` : e.sign + ``),
    (this.symbol = e.symbol === void 0 ? `` : e.symbol + ``),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? `` : e.type + ``));
}
Tx.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? `0` : ``) +
    (this.width === void 0 ? `` : Math.max(1, this.width | 0)) +
    (this.comma ? `,` : ``) +
    (this.precision === void 0 ? `` : `.` + Math.max(0, this.precision | 0)) +
    (this.trim ? `~` : ``) +
    this.type
  );
};
function Ex(e) {
  out: for (var t = e.length, n = 1, r = -1, i; n < t; ++n)
    switch (e[n]) {
      case `.`:
        r = i = n;
        break;
      case `0`:
        (r === 0 && (r = n), (i = n));
        break;
      default:
        if (!+e[n]) break out;
        r > 0 && (r = 0);
    }
  return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
var Dx;
function Ox(e, t) {
  var n = yx(e, t);
  if (!n) return ((Dx = void 0), e.toPrecision(t));
  var r = n[0],
    i = n[1],
    a = i - (Dx = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = r.length;
  return a === o
    ? r
    : a > o
      ? r + Array(a - o + 1).join(`0`)
      : a > 0
        ? r.slice(0, a) + `.` + r.slice(a)
        : `0.` + Array(1 - a).join(`0`) + yx(e, Math.max(0, t + a - 1))[0];
}
function kx(e, t) {
  var n = yx(e, t);
  if (!n) return e + ``;
  var r = n[0],
    i = n[1];
  return i < 0
    ? `0.` + Array(-i).join(`0`) + r
    : r.length > i + 1
      ? r.slice(0, i + 1) + `.` + r.slice(i + 1)
      : r + Array(i - r.length + 2).join(`0`);
}
var Ax = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + ``,
  d: vx,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => kx(e * 100, t),
  r: kx,
  s: Ox,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function jx(e) {
  return e;
}
var Mx = Array.prototype.map,
  Nx = [
    `y`,
    `z`,
    `a`,
    `f`,
    `p`,
    `n`,
    `µ`,
    `m`,
    ``,
    `k`,
    `M`,
    `G`,
    `T`,
    `P`,
    `E`,
    `Z`,
    `Y`,
  ];
function Px(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? jx
        : xx(Mx.call(e.grouping, Number), e.thousands + ``),
    n = e.currency === void 0 ? `` : e.currency[0] + ``,
    r = e.currency === void 0 ? `` : e.currency[1] + ``,
    i = e.decimal === void 0 ? `.` : e.decimal + ``,
    a = e.numerals === void 0 ? jx : Sx(Mx.call(e.numerals, String)),
    o = e.percent === void 0 ? `%` : e.percent + ``,
    s = e.minus === void 0 ? `−` : e.minus + ``,
    c = e.nan === void 0 ? `NaN` : e.nan + ``;
  function l(e, l) {
    e = wx(e);
    var u = e.fill,
      d = e.align,
      f = e.sign,
      p = e.symbol,
      m = e.zero,
      h = e.width,
      g = e.comma,
      _ = e.precision,
      v = e.trim,
      y = e.type;
    (y === `n`
      ? ((g = !0), (y = `g`))
      : Ax[y] || (_ === void 0 && (_ = 12), (v = !0), (y = `g`)),
      (m || (u === `0` && d === `=`)) && ((m = !0), (u = `0`), (d = `=`)));
    var b =
        (l && l.prefix !== void 0 ? l.prefix : ``) +
        (p === `$`
          ? n
          : p === `#` && /[boxX]/.test(y)
            ? `0` + y.toLowerCase()
            : ``),
      x =
        (p === `$` ? r : /[%p]/.test(y) ? o : ``) +
        (l && l.suffix !== void 0 ? l.suffix : ``),
      S = Ax[y],
      C = /[defgprs%]/.test(y);
    _ =
      _ === void 0
        ? 6
        : /[gprs]/.test(y)
          ? Math.max(1, Math.min(21, _))
          : Math.max(0, Math.min(20, _));
    function w(e) {
      var n = b,
        r = x,
        o,
        l,
        p;
      if (y === `c`) ((r = S(e) + r), (e = ``));
      else {
        e = +e;
        var w = e < 0 || 1 / e < 0;
        if (
          ((e = isNaN(e) ? c : S(Math.abs(e), _)),
          v && (e = Ex(e)),
          w && +e == 0 && f !== `+` && (w = !1),
          (n = (w ? (f === `(` ? f : s) : f === `-` || f === `(` ? `` : f) + n),
          (r =
            (y === `s` && !isNaN(e) && Dx !== void 0 ? Nx[8 + Dx / 3] : ``) +
            r +
            (w && f === `(` ? `)` : ``)),
          C)
        ) {
          for (o = -1, l = e.length; ++o < l;)
            if (((p = e.charCodeAt(o)), 48 > p || p > 57)) {
              ((r = (p === 46 ? i + e.slice(o + 1) : e.slice(o)) + r),
                (e = e.slice(0, o)));
              break;
            }
        }
      }
      g && !m && (e = t(e, 1 / 0));
      var T = n.length + e.length + r.length,
        E = T < h ? Array(h - T + 1).join(u) : ``;
      switch (
        (g && m && ((e = t(E + e, E.length ? h - r.length : 1 / 0)), (E = ``)),
        d)
      ) {
        case `<`:
          e = n + e + r + E;
          break;
        case `=`:
          e = n + E + e + r;
          break;
        case `^`:
          e = E.slice(0, (T = E.length >> 1)) + n + e + r + E.slice(T);
          break;
        default:
          e = E + n + e + r;
      }
      return a(e);
    }
    return (
      (w.toString = function () {
        return e + ``;
      }),
      w
    );
  }
  function u(e, t) {
    var n = Math.max(-8, Math.min(8, Math.floor(bx(t) / 3))) * 3,
      r = 10 ** -n,
      i = l(((e = wx(e)), (e.type = `f`), e), { suffix: Nx[8 + n / 3] });
    return function (e) {
      return i(r * e);
    };
  }
  return { format: l, formatPrefix: u };
}
var Fx, Ix, Lx;
Rx({ thousands: `,`, grouping: [3], currency: [`$`, ``] });
function Rx(e) {
  return ((Fx = Px(e)), (Ix = Fx.format), (Lx = Fx.formatPrefix), Fx);
}
function zx(e) {
  return Math.max(0, -bx(Math.abs(e)));
}
function Bx(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(bx(t) / 3))) * 3 - bx(Math.abs(e)),
  );
}
function Vx(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, bx(t) - bx(e)) + 1
  );
}
function Hx(e, t, n, r) {
  var i = Vy(e, t, n),
    a;
  switch (((r = wx(r ?? `,f`)), r.type)) {
    case `s`:
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        r.precision == null && !isNaN((a = Bx(i, o))) && (r.precision = a),
        Lx(r, o)
      );
    case ``:
    case `e`:
    case `g`:
    case `p`:
    case `r`:
      r.precision == null &&
        !isNaN((a = Vx(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (r.precision = a - (r.type === `e`));
      break;
    case `f`:
    case `%`:
      r.precision == null &&
        !isNaN((a = zx(i))) &&
        (r.precision = a - (r.type === `%`) * 2);
  }
  return Ix(r);
}
function Ux(e) {
  var t = e.domain;
  return (
    (e.ticks = function (e) {
      var n = t();
      return zy(n[0], n[n.length - 1], e ?? 10);
    }),
    (e.tickFormat = function (e, n) {
      var r = t();
      return Hx(r[0], r[r.length - 1], e ?? 10, n);
    }),
    (e.nice = function (n) {
      n ??= 10;
      var r = t(),
        i = 0,
        a = r.length - 1,
        o = r[i],
        s = r[a],
        c,
        l,
        u = 10;
      for (
        s < o && ((l = o), (o = s), (s = l), (l = i), (i = a), (a = l));
        u-- > 0;
      ) {
        if (((l = By(o, s, n)), l === c)) return ((r[i] = o), (r[a] = s), t(r));
        if (l > 0) ((o = Math.floor(o / l) * l), (s = Math.ceil(s / l) * l));
        else if (l < 0)
          ((o = Math.ceil(o * l) / l), (s = Math.floor(s * l) / l));
        else break;
        c = l;
      }
      return e;
    }),
    e
  );
}
function Wx() {
  var e = _x();
  return (
    (e.copy = function () {
      return hx(e, Wx());
    }),
    Yy.apply(e, arguments),
    Ux(e)
  );
}
function Gx(e) {
  var t;
  function n(e) {
    return e == null || isNaN((e = +e)) ? t : e;
  }
  return (
    (n.invert = n),
    (n.domain = n.range =
      function (t) {
        return arguments.length ? ((e = Array.from(t, cx)), n) : e.slice();
      }),
    (n.unknown = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.copy = function () {
      return Gx(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, cx) : [0, 1]),
    Ux(n)
  );
}
function Kx(e, t) {
  e = e.slice();
  var n = 0,
    r = e.length - 1,
    i = e[n],
    a = e[r],
    o;
  return (
    a < i && ((o = n), (n = r), (r = o), (o = i), (i = a), (a = o)),
    (e[n] = t.floor(i)),
    (e[r] = t.ceil(a)),
    e
  );
}
function qx(e) {
  return Math.log(e);
}
function Jx(e) {
  return Math.exp(e);
}
function Yx(e) {
  return -Math.log(-e);
}
function Xx(e) {
  return -Math.exp(-e);
}
function Zx(e) {
  return isFinite(e) ? +(`1e` + e) : e < 0 ? 0 : e;
}
function Qx(e) {
  return e === 10 ? Zx : e === Math.E ? Math.exp : (t) => e ** +t;
}
function $x(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function eS(e) {
  return (t, n) => -e(-t, n);
}
function tS(e) {
  let t = e(qx, Jx),
    n = t.domain,
    r = 10,
    i,
    a;
  function o() {
    return (
      (i = $x(r)),
      (a = Qx(r)),
      n()[0] < 0 ? ((i = eS(i)), (a = eS(a)), e(Yx, Xx)) : e(qx, Jx),
      t
    );
  }
  return (
    (t.base = function (e) {
      return arguments.length ? ((r = +e), o()) : r;
    }),
    (t.domain = function (e) {
      return arguments.length ? (n(e), o()) : n();
    }),
    (t.ticks = (e) => {
      let t = n(),
        o = t[0],
        s = t[t.length - 1],
        c = s < o;
      c && ([o, s] = [s, o]);
      let l = i(o),
        u = i(s),
        d,
        f,
        p = e == null ? 10 : +e,
        m = [];
      if (!(r % 1) && u - l < p) {
        if (((l = Math.floor(l)), (u = Math.ceil(u)), o > 0)) {
          for (; l <= u; ++l)
            for (d = 1; d < r; ++d)
              if (((f = l < 0 ? d / a(-l) : d * a(l)), !(f < o))) {
                if (f > s) break;
                m.push(f);
              }
        } else
          for (; l <= u; ++l)
            for (d = r - 1; d >= 1; --d)
              if (((f = l > 0 ? d / a(-l) : d * a(l)), !(f < o))) {
                if (f > s) break;
                m.push(f);
              }
        m.length * 2 < p && (m = zy(o, s, p));
      } else m = zy(l, u, Math.min(u - l, p)).map(a);
      return c ? m.reverse() : m;
    }),
    (t.tickFormat = (e, n) => {
      if (
        ((e ??= 10),
        (n ??= r === 10 ? `s` : `,`),
        typeof n != `function` &&
          (!(r % 1) && (n = wx(n)).precision == null && (n.trim = !0),
          (n = Ix(n))),
        e === 1 / 0)
      )
        return n;
      let o = Math.max(1, (r * e) / t.ticks().length);
      return (e) => {
        let t = e / a(Math.round(i(e)));
        return (t * r < r - 0.5 && (t *= r), t <= o ? n(e) : ``);
      };
    }),
    (t.nice = () =>
      n(
        Kx(n(), {
          floor: (e) => a(Math.floor(i(e))),
          ceil: (e) => a(Math.ceil(i(e))),
        }),
      )),
    t
  );
}
function nS() {
  let e = tS(gx()).domain([1, 10]);
  return (
    (e.copy = () => hx(e, nS()).base(e.base())), Yy.apply(e, arguments), e
  );
}
function rS(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function iS(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function aS(e) {
  var t = 1,
    n = e(rS(t), iS(t));
  return (
    (n.constant = function (n) {
      return arguments.length ? e(rS((t = +n)), iS(t)) : t;
    }),
    Ux(n)
  );
}
function oS() {
  var e = aS(gx());
  return (
    (e.copy = function () {
      return hx(e, oS()).constant(e.constant());
    }),
    Yy.apply(e, arguments)
  );
}
function sS(e) {
  return function (t) {
    return t < 0 ? -((-t) ** +e) : t ** +e;
  };
}
function cS(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function lS(e) {
  return e < 0 ? -e * e : e * e;
}
function uS(e) {
  var t = e(ux, ux),
    n = 1;
  function r() {
    return n === 1 ? e(ux, ux) : n === 0.5 ? e(cS, lS) : e(sS(n), sS(1 / n));
  }
  return (
    (t.exponent = function (e) {
      return arguments.length ? ((n = +e), r()) : n;
    }),
    Ux(t)
  );
}
function dS() {
  var e = uS(gx());
  return (
    (e.copy = function () {
      return hx(e, dS()).exponent(e.exponent());
    }),
    Yy.apply(e, arguments),
    e
  );
}
function fS() {
  return dS.apply(null, arguments).exponent(0.5);
}
function pS(e) {
  return Math.sign(e) * e * e;
}
function mS(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function hS() {
  var e = _x(),
    t = [0, 1],
    n = !1,
    r;
  function i(t) {
    var i = mS(e(t));
    return isNaN(i) ? r : n ? Math.round(i) : i;
  }
  return (
    (i.invert = function (t) {
      return e.invert(pS(t));
    }),
    (i.domain = function (t) {
      return arguments.length ? (e.domain(t), i) : e.domain();
    }),
    (i.range = function (n) {
      return arguments.length
        ? (e.range((t = Array.from(n, cx)).map(pS)), i)
        : t.slice();
    }),
    (i.rangeRound = function (e) {
      return i.range(e).round(!0);
    }),
    (i.round = function (e) {
      return arguments.length ? ((n = !!e), i) : n;
    }),
    (i.clamp = function (t) {
      return arguments.length ? (e.clamp(t), i) : e.clamp();
    }),
    (i.unknown = function (e) {
      return arguments.length ? ((r = e), i) : r;
    }),
    (i.copy = function () {
      return hS(e.domain(), t).round(n).clamp(e.clamp()).unknown(r);
    }),
    Yy.apply(i, arguments),
    Ux(i)
  );
}
function gS() {
  var e = [],
    t = [],
    n = [],
    r;
  function i() {
    var r = 0,
      i = Math.max(1, t.length);
    for (n = Array(i - 1); ++r < i;) n[r - 1] = qy(e, r / i);
    return a;
  }
  function a(e) {
    return e == null || isNaN((e = +e)) ? r : t[Dy(n, e)];
  }
  return (
    (a.invertExtent = function (r) {
      var i = t.indexOf(r);
      return i < 0
        ? [NaN, NaN]
        : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]];
    }),
    (a.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let n of t) n != null && !isNaN((n = +n)) && e.push(n);
      return (e.sort(by), i());
    }),
    (a.range = function (e) {
      return arguments.length ? ((t = Array.from(e)), i()) : t.slice();
    }),
    (a.unknown = function (e) {
      return arguments.length ? ((r = e), a) : r;
    }),
    (a.quantiles = function () {
      return n.slice();
    }),
    (a.copy = function () {
      return gS().domain(e).range(t).unknown(r);
    }),
    Yy.apply(a, arguments)
  );
}
function _S() {
  var e = 0,
    t = 1,
    n = 1,
    r = [0.5],
    i = [0, 1],
    a;
  function o(e) {
    return e != null && e <= e ? i[Dy(r, e, 0, n)] : a;
  }
  function s() {
    var i = -1;
    for (r = Array(n); ++i < n;) r[i] = ((i + 1) * t - (i - n) * e) / (n + 1);
    return o;
  }
  return (
    (o.domain = function (n) {
      return arguments.length
        ? (([e, t] = n), (e = +e), (t = +t), s())
        : [e, t];
    }),
    (o.range = function (e) {
      return arguments.length
        ? ((n = (i = Array.from(e)).length - 1), s())
        : i.slice();
    }),
    (o.invertExtent = function (a) {
      var o = i.indexOf(a);
      return o < 0
        ? [NaN, NaN]
        : o < 1
          ? [e, r[0]]
          : o >= n
            ? [r[n - 1], t]
            : [r[o - 1], r[o]];
    }),
    (o.unknown = function (e) {
      return (arguments.length && (a = e), o);
    }),
    (o.thresholds = function () {
      return r.slice();
    }),
    (o.copy = function () {
      return _S().domain([e, t]).range(i).unknown(a);
    }),
    Yy.apply(Ux(o), arguments)
  );
}
function vS() {
  var e = [0.5],
    t = [0, 1],
    n,
    r = 1;
  function i(i) {
    return i != null && i <= i ? t[Dy(e, i, 0, r)] : n;
  }
  return (
    (i.domain = function (n) {
      return arguments.length
        ? ((e = Array.from(n)), (r = Math.min(e.length, t.length - 1)), i)
        : e.slice();
    }),
    (i.range = function (n) {
      return arguments.length
        ? ((t = Array.from(n)), (r = Math.min(e.length, t.length - 1)), i)
        : t.slice();
    }),
    (i.invertExtent = function (n) {
      var r = t.indexOf(n);
      return [e[r - 1], e[r]];
    }),
    (i.unknown = function (e) {
      return arguments.length ? ((n = e), i) : n;
    }),
    (i.copy = function () {
      return vS().domain(e).range(t).unknown(n);
    }),
    Yy.apply(i, arguments)
  );
}
var yS = new Date(),
  bS = new Date();
function xS(e, t, n, r) {
  function i(t) {
    return (e((t = arguments.length === 0 ? new Date() : new Date(+t))), t);
  }
  return (
    (i.floor = (t) => (e((t = new Date(+t))), t)),
    (i.ceil = (n) => (e((n = new Date(n - 1))), t(n, 1), e(n), n)),
    (i.round = (e) => {
      let t = i(e),
        n = i.ceil(e);
      return e - t < n - e ? t : n;
    }),
    (i.offset = (e, n) => (
      t((e = new Date(+e)), n == null ? 1 : Math.floor(n)),
      e
    )),
    (i.range = (n, r, a) => {
      let o = [];
      if (
        ((n = i.ceil(n)),
        (a = a == null ? 1 : Math.floor(a)),
        !(n < r) || !(a > 0))
      )
        return o;
      let s;
      do (o.push((s = new Date(+n))), t(n, a), e(n));
      while (s < n && n < r);
      return o;
    }),
    (i.filter = (n) =>
      xS(
        (t) => {
          if (t >= t) for (; e(t), !n(t);) t.setTime(t - 1);
        },
        (e, r) => {
          if (e >= e) {
            if (r < 0) for (; ++r <= 0;) for (; t(e, -1), !n(e););
            else for (; --r >= 0;) for (; t(e, 1), !n(e););
          }
        },
      )),
    n &&
      ((i.count = (t, r) => (
        yS.setTime(+t),
        bS.setTime(+r),
        e(yS),
        e(bS),
        Math.floor(n(yS, bS))
      )),
      (i.every = (e) => (
        (e = Math.floor(e)),
        !isFinite(e) || !(e > 0)
          ? null
          : e > 1
            ? i.filter(
                r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0,
              )
            : i
      ))),
    i
  );
}
var SS = xS(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
((SS.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? xS(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, n) => {
            t.setTime(+t + n * e);
          },
          (t, n) => (n - t) / e,
        )
      : SS
)),
  SS.range);
var CS = 1e3,
  wS = CS * 60,
  TS = wS * 60,
  ES = TS * 24,
  DS = ES * 7,
  OS = ES * 30,
  kS = ES * 365,
  AS = xS(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * CS);
    },
    (e, t) => (t - e) / CS,
    (e) => e.getUTCSeconds(),
  );
AS.range;
var jS = xS(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * CS);
  },
  (e, t) => {
    e.setTime(+e + t * wS);
  },
  (e, t) => (t - e) / wS,
  (e) => e.getMinutes(),
);
jS.range;
var MS = xS(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * wS);
  },
  (e, t) => (t - e) / wS,
  (e) => e.getUTCMinutes(),
);
MS.range;
var NS = xS(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * CS - e.getMinutes() * wS,
    );
  },
  (e, t) => {
    e.setTime(+e + t * TS);
  },
  (e, t) => (t - e) / TS,
  (e) => e.getHours(),
);
NS.range;
var PS = xS(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * TS);
  },
  (e, t) => (t - e) / TS,
  (e) => e.getUTCHours(),
);
PS.range;
var FS = xS(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * wS) / ES,
  (e) => e.getDate() - 1,
);
FS.range;
var IS = xS(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / ES,
  (e) => e.getUTCDate() - 1,
);
IS.range;
var LS = xS(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / ES,
  (e) => Math.floor(e / ES),
);
LS.range;
function RS(e) {
  return xS(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setDate(e.getDate() + t * 7);
    },
    (e, t) =>
      (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * wS) / DS,
  );
}
var zS = RS(0),
  BS = RS(1),
  VS = RS(2),
  HS = RS(3),
  US = RS(4),
  WS = RS(5),
  GS = RS(6);
(zS.range, BS.range, VS.range, HS.range, US.range, WS.range, GS.range);
function KS(e) {
  return xS(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setUTCDate(e.getUTCDate() + t * 7);
    },
    (e, t) => (t - e) / DS,
  );
}
var qS = KS(0),
  JS = KS(1),
  YS = KS(2),
  XS = KS(3),
  ZS = KS(4),
  QS = KS(5),
  $S = KS(6);
(qS.range, JS.range, YS.range, XS.range, ZS.range, QS.range, $S.range);
var eC = xS(
  (e) => {
    (e.setDate(1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) =>
    t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth(),
);
eC.range;
var tC = xS(
  (e) => {
    (e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) =>
    t.getUTCMonth() -
    e.getUTCMonth() +
    (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth(),
);
tC.range;
var nC = xS(
  (e) => {
    (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
((nC.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : xS(
        (t) => {
          (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setFullYear(t.getFullYear() + n * e);
        },
      )),
  nC.range);
var rC = xS(
  (e) => {
    (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
((rC.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : xS(
        (t) => {
          (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setUTCFullYear(t.getUTCFullYear() + n * e);
        },
      )),
  rC.range);
function iC(e, t, n, r, i, a) {
  let o = [
    [AS, 1, CS],
    [AS, 5, 5 * CS],
    [AS, 15, 15 * CS],
    [AS, 30, 30 * CS],
    [a, 1, wS],
    [a, 5, 5 * wS],
    [a, 15, 15 * wS],
    [a, 30, 30 * wS],
    [i, 1, TS],
    [i, 3, 3 * TS],
    [i, 6, 6 * TS],
    [i, 12, 12 * TS],
    [r, 1, ES],
    [r, 2, 2 * ES],
    [n, 1, DS],
    [t, 1, OS],
    [t, 3, 3 * OS],
    [e, 1, kS],
  ];
  function s(e, t, n) {
    let r = t < e;
    r && ([e, t] = [t, e]);
    let i = n && typeof n.range == `function` ? n : c(e, t, n),
      a = i ? i.range(e, +t + 1) : [];
    return r ? a.reverse() : a;
  }
  function c(t, n, r) {
    let i = Math.abs(n - t) / r,
      a = Sy(([, , e]) => e).right(o, i);
    if (a === o.length) return e.every(Vy(t / kS, n / kS, r));
    if (a === 0) return SS.every(Math.max(Vy(t, n, r), 1));
    let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
    return s.every(c);
  }
  return [s, c];
}
var [aC, oC] = iC(rC, tC, qS, LS, PS, MS),
  [sC, cC] = iC(nC, eC, zS, FS, NS, jS);
function lC(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function uC(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function dC(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function fC(e) {
  var t = e.dateTime,
    n = e.date,
    r = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    s = e.months,
    c = e.shortMonths,
    l = vC(i),
    u = yC(i),
    d = vC(a),
    f = yC(a),
    p = vC(o),
    m = yC(o),
    h = vC(s),
    g = yC(s),
    _ = vC(c),
    v = yC(c),
    y = {
      a: A,
      A: re,
      b: ie,
      B: ae,
      c: null,
      d: BC,
      e: BC,
      f: GC,
      g: nw,
      G: iw,
      H: VC,
      I: HC,
      j: UC,
      L: WC,
      m: KC,
      M: qC,
      p: oe,
      q: se,
      Q: Dw,
      s: Ow,
      S: JC,
      u: YC,
      U: XC,
      V: QC,
      w: $C,
      W: ew,
      x: null,
      X: null,
      y: tw,
      Y: rw,
      Z: aw,
      "%": Ew,
    },
    b = {
      a: ce,
      A: le,
      b: ue,
      B: de,
      c: null,
      d: ow,
      e: ow,
      f: dw,
      g: Sw,
      G: ww,
      H: sw,
      I: cw,
      j: lw,
      L: uw,
      m: fw,
      M: pw,
      p: fe,
      q: pe,
      Q: Dw,
      s: Ow,
      S: mw,
      u: hw,
      U: gw,
      V: vw,
      w: yw,
      W: bw,
      x: null,
      X: null,
      y: xw,
      Y: Cw,
      Z: Tw,
      "%": Ew,
    },
    x = {
      a: E,
      A: D,
      b: O,
      B: k,
      c: ee,
      d: AC,
      e: AC,
      f: IC,
      g: EC,
      G: TC,
      H: MC,
      I: MC,
      j: jC,
      L: FC,
      m: kC,
      M: NC,
      p: T,
      q: OC,
      Q: RC,
      s: zC,
      S: PC,
      u: xC,
      U: SC,
      V: CC,
      w: bC,
      W: wC,
      x: te,
      X: ne,
      y: EC,
      Y: TC,
      Z: DC,
      "%": LC,
    };
  ((y.x = S(n, y)),
    (y.X = S(r, y)),
    (y.c = S(t, y)),
    (b.x = S(n, b)),
    (b.X = S(r, b)),
    (b.c = S(t, b)));
  function S(e, t) {
    return function (n) {
      var r = [],
        i = -1,
        a = 0,
        o = e.length,
        s,
        c,
        l;
      for (n instanceof Date || (n = new Date(+n)); ++i < o;)
        e.charCodeAt(i) === 37 &&
          (r.push(e.slice(a, i)),
          (c = pC[(s = e.charAt(++i))]) == null
            ? (c = s === `e` ? ` ` : `0`)
            : (s = e.charAt(++i)),
          (l = t[s]) && (s = l(n, c)),
          r.push(s),
          (a = i + 1));
      return (r.push(e.slice(a, i)), r.join(``));
    };
  }
  function C(e, t) {
    return function (n) {
      var r = dC(1900, void 0, 1),
        i = w(r, e, (n += ``), 0),
        a,
        o;
      if (i != n.length) return null;
      if (`Q` in r) return new Date(r.Q);
      if (`s` in r) return new Date(r.s * 1e3 + (`L` in r ? r.L : 0));
      if (
        (t && !(`Z` in r) && (r.Z = 0),
        `p` in r && (r.H = (r.H % 12) + r.p * 12),
        r.m === void 0 && (r.m = `q` in r ? r.q : 0),
        `V` in r)
      ) {
        if (r.V < 1 || r.V > 53) return null;
        (`w` in r || (r.w = 1),
          `Z` in r
            ? ((a = uC(dC(r.y, 0, 1))),
              (o = a.getUTCDay()),
              (a = o > 4 || o === 0 ? JS.ceil(a) : JS(a)),
              (a = IS.offset(a, (r.V - 1) * 7)),
              (r.y = a.getUTCFullYear()),
              (r.m = a.getUTCMonth()),
              (r.d = a.getUTCDate() + ((r.w + 6) % 7)))
            : ((a = lC(dC(r.y, 0, 1))),
              (o = a.getDay()),
              (a = o > 4 || o === 0 ? BS.ceil(a) : BS(a)),
              (a = FS.offset(a, (r.V - 1) * 7)),
              (r.y = a.getFullYear()),
              (r.m = a.getMonth()),
              (r.d = a.getDate() + ((r.w + 6) % 7))));
      } else
        (`W` in r || `U` in r) &&
          (`w` in r || (r.w = `u` in r ? r.u % 7 : +(`W` in r)),
          (o =
            `Z` in r
              ? uC(dC(r.y, 0, 1)).getUTCDay()
              : lC(dC(r.y, 0, 1)).getDay()),
          (r.m = 0),
          (r.d =
            `W` in r
              ? ((r.w + 6) % 7) + r.W * 7 - ((o + 5) % 7)
              : r.w + r.U * 7 - ((o + 6) % 7)));
      return `Z` in r
        ? ((r.H += (r.Z / 100) | 0), (r.M += r.Z % 100), uC(r))
        : lC(r);
    };
  }
  function w(e, t, n, r) {
    for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
      if (r >= o) return -1;
      if (((s = t.charCodeAt(i++)), s === 37)) {
        if (
          ((s = t.charAt(i++)),
          (c = x[s in pC ? t.charAt(i++) : s]),
          !c || (r = c(e, n, r)) < 0)
        )
          return -1;
      } else if (s != n.charCodeAt(r++)) return -1;
    }
    return r;
  }
  function T(e, t, n) {
    var r = l.exec(t.slice(n));
    return r ? ((e.p = u.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function E(e, t, n) {
    var r = p.exec(t.slice(n));
    return r ? ((e.w = m.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function D(e, t, n) {
    var r = d.exec(t.slice(n));
    return r ? ((e.w = f.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function O(e, t, n) {
    var r = _.exec(t.slice(n));
    return r ? ((e.m = v.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function k(e, t, n) {
    var r = h.exec(t.slice(n));
    return r ? ((e.m = g.get(r[0].toLowerCase())), n + r[0].length) : -1;
  }
  function ee(e, n, r) {
    return w(e, t, n, r);
  }
  function te(e, t, r) {
    return w(e, n, t, r);
  }
  function ne(e, t, n) {
    return w(e, r, t, n);
  }
  function A(e) {
    return o[e.getDay()];
  }
  function re(e) {
    return a[e.getDay()];
  }
  function ie(e) {
    return c[e.getMonth()];
  }
  function ae(e) {
    return s[e.getMonth()];
  }
  function oe(e) {
    return i[+(e.getHours() >= 12)];
  }
  function se(e) {
    return 1 + ~~(e.getMonth() / 3);
  }
  function ce(e) {
    return o[e.getUTCDay()];
  }
  function le(e) {
    return a[e.getUTCDay()];
  }
  function ue(e) {
    return c[e.getUTCMonth()];
  }
  function de(e) {
    return s[e.getUTCMonth()];
  }
  function fe(e) {
    return i[+(e.getUTCHours() >= 12)];
  }
  function pe(e) {
    return 1 + ~~(e.getUTCMonth() / 3);
  }
  return {
    format: function (e) {
      var t = S((e += ``), y);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
    parse: function (e) {
      var t = C((e += ``), !1);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
    utcFormat: function (e) {
      var t = S((e += ``), b);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
    utcParse: function (e) {
      var t = C((e += ``), !0);
      return (
        (t.toString = function () {
          return e;
        }),
        t
      );
    },
  };
}
var pC = { "-": ``, _: ` `, 0: `0` },
  mC = /^\s*\d+/,
  hC = /^%/,
  gC = /[\\^$*+?|[\]().{}]/g;
function X(e, t, n) {
  var r = e < 0 ? `-` : ``,
    i = (r ? -e : e) + ``,
    a = i.length;
  return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function _C(e) {
  return e.replace(gC, `\\$&`);
}
function vC(e) {
  return RegExp(`^(?:` + e.map(_C).join(`|`) + `)`, `i`);
}
function yC(e) {
  return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function bC(e, t, n) {
  var r = mC.exec(t.slice(n, n + 1));
  return r ? ((e.w = +r[0]), n + r[0].length) : -1;
}
function xC(e, t, n) {
  var r = mC.exec(t.slice(n, n + 1));
  return r ? ((e.u = +r[0]), n + r[0].length) : -1;
}
function SC(e, t, n) {
  var r = mC.exec(t.slice(n, n + 2));
  return r ? ((e.U = +r[0]), n + r[0].length) : -1;
}
function CC(e, t, n) {
  var r = mC.exec(t.slice(n, n + 2));
  return r ? ((e.V = +r[0]), n + r[0].length) : -1;
}
function wC(e, t, n) {
  var r = mC.exec(t.slice(n, n + 2));
  return r ? ((e.W = +r[0]), n + r[0].length) : -1;
}
function TC(e, t, n) {
  var r = mC.exec(t.slice(n, n + 4));
  return r ? ((e.y = +r[0]), n + r[0].length) : -1;
}
function EC(e, t, n) {
  var r = mC.exec(t.slice(n, n + 2));
  return r ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
}
function DC(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r
    ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || `00`))), n + r[0].length)
    : -1;
}
function OC(e, t, n) {
  var r = mC.exec(t.slice(n, n + 1));
  return r ? ((e.q = r[0] * 3 - 3), n + r[0].length) : -1;
}
function kC(e, t, n) {
  var r = mC.exec(t.slice(n, n + 2));
  return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
}
function AC(e, t, n) {
  var r = mC.exec(t.slice(n, n + 2));
  return r ? ((e.d = +r[0]), n + r[0].length) : -1;
}
function jC(e, t, n) {
  var r = mC.exec(t.slice(n, n + 3));
  return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
}
function MC(e, t, n) {
  var r = mC.exec(t.slice(n, n + 2));
  return r ? ((e.H = +r[0]), n + r[0].length) : -1;
}
function NC(e, t, n) {
  var r = mC.exec(t.slice(n, n + 2));
  return r ? ((e.M = +r[0]), n + r[0].length) : -1;
}
function PC(e, t, n) {
  var r = mC.exec(t.slice(n, n + 2));
  return r ? ((e.S = +r[0]), n + r[0].length) : -1;
}
function FC(e, t, n) {
  var r = mC.exec(t.slice(n, n + 3));
  return r ? ((e.L = +r[0]), n + r[0].length) : -1;
}
function IC(e, t, n) {
  var r = mC.exec(t.slice(n, n + 6));
  return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
}
function LC(e, t, n) {
  var r = hC.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function RC(e, t, n) {
  var r = mC.exec(t.slice(n));
  return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
}
function zC(e, t, n) {
  var r = mC.exec(t.slice(n));
  return r ? ((e.s = +r[0]), n + r[0].length) : -1;
}
function BC(e, t) {
  return X(e.getDate(), t, 2);
}
function VC(e, t) {
  return X(e.getHours(), t, 2);
}
function HC(e, t) {
  return X(e.getHours() % 12 || 12, t, 2);
}
function UC(e, t) {
  return X(1 + FS.count(nC(e), e), t, 3);
}
function WC(e, t) {
  return X(e.getMilliseconds(), t, 3);
}
function GC(e, t) {
  return WC(e, t) + `000`;
}
function KC(e, t) {
  return X(e.getMonth() + 1, t, 2);
}
function qC(e, t) {
  return X(e.getMinutes(), t, 2);
}
function JC(e, t) {
  return X(e.getSeconds(), t, 2);
}
function YC(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function XC(e, t) {
  return X(zS.count(nC(e) - 1, e), t, 2);
}
function ZC(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? US(e) : US.ceil(e);
}
function QC(e, t) {
  return ((e = ZC(e)), X(US.count(nC(e), e) + (nC(e).getDay() === 4), t, 2));
}
function $C(e) {
  return e.getDay();
}
function ew(e, t) {
  return X(BS.count(nC(e) - 1, e), t, 2);
}
function tw(e, t) {
  return X(e.getFullYear() % 100, t, 2);
}
function nw(e, t) {
  return ((e = ZC(e)), X(e.getFullYear() % 100, t, 2));
}
function rw(e, t) {
  return X(e.getFullYear() % 1e4, t, 4);
}
function iw(e, t) {
  var n = e.getDay();
  return (
    (e = n >= 4 || n === 0 ? US(e) : US.ceil(e)), X(e.getFullYear() % 1e4, t, 4)
  );
}
function aw(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? `-` : ((t *= -1), `+`)) +
    X((t / 60) | 0, `0`, 2) +
    X(t % 60, `0`, 2)
  );
}
function ow(e, t) {
  return X(e.getUTCDate(), t, 2);
}
function sw(e, t) {
  return X(e.getUTCHours(), t, 2);
}
function cw(e, t) {
  return X(e.getUTCHours() % 12 || 12, t, 2);
}
function lw(e, t) {
  return X(1 + IS.count(rC(e), e), t, 3);
}
function uw(e, t) {
  return X(e.getUTCMilliseconds(), t, 3);
}
function dw(e, t) {
  return uw(e, t) + `000`;
}
function fw(e, t) {
  return X(e.getUTCMonth() + 1, t, 2);
}
function pw(e, t) {
  return X(e.getUTCMinutes(), t, 2);
}
function mw(e, t) {
  return X(e.getUTCSeconds(), t, 2);
}
function hw(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function gw(e, t) {
  return X(qS.count(rC(e) - 1, e), t, 2);
}
function _w(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? ZS(e) : ZS.ceil(e);
}
function vw(e, t) {
  return ((e = _w(e)), X(ZS.count(rC(e), e) + (rC(e).getUTCDay() === 4), t, 2));
}
function yw(e) {
  return e.getUTCDay();
}
function bw(e, t) {
  return X(JS.count(rC(e) - 1, e), t, 2);
}
function xw(e, t) {
  return X(e.getUTCFullYear() % 100, t, 2);
}
function Sw(e, t) {
  return ((e = _w(e)), X(e.getUTCFullYear() % 100, t, 2));
}
function Cw(e, t) {
  return X(e.getUTCFullYear() % 1e4, t, 4);
}
function ww(e, t) {
  var n = e.getUTCDay();
  return (
    (e = n >= 4 || n === 0 ? ZS(e) : ZS.ceil(e)),
    X(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function Tw() {
  return `+0000`;
}
function Ew() {
  return `%`;
}
function Dw(e) {
  return +e;
}
function Ow(e) {
  return Math.floor(e / 1e3);
}
var kw, Aw, jw;
Mw({
  dateTime: `%x, %X`,
  date: `%-m/%-d/%Y`,
  time: `%-I:%M:%S %p`,
  periods: [`AM`, `PM`],
  days: [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ],
  shortDays: [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`],
  months: [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`,
  ],
  shortMonths: [
    `Jan`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`,
  ],
});
function Mw(e) {
  return (
    (kw = fC(e)),
    (Aw = kw.format),
    kw.parse,
    (jw = kw.utcFormat),
    kw.utcParse,
    kw
  );
}
function Nw(e) {
  return new Date(e);
}
function Pw(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function Fw(e, t, n, r, i, a, o, s, c, l) {
  var u = _x(),
    d = u.invert,
    f = u.domain,
    p = l(`.%L`),
    m = l(`:%S`),
    h = l(`%I:%M`),
    g = l(`%I %p`),
    _ = l(`%a %d`),
    v = l(`%b %d`),
    y = l(`%B`),
    b = l(`%Y`);
  function x(e) {
    return (
      c(e) < e
        ? p
        : s(e) < e
          ? m
          : o(e) < e
            ? h
            : a(e) < e
              ? g
              : r(e) < e
                ? i(e) < e
                  ? _
                  : v
                : n(e) < e
                  ? y
                  : b
    )(e);
  }
  return (
    (u.invert = function (e) {
      return new Date(d(e));
    }),
    (u.domain = function (e) {
      return arguments.length ? f(Array.from(e, Pw)) : f().map(Nw);
    }),
    (u.ticks = function (t) {
      var n = f();
      return e(n[0], n[n.length - 1], t ?? 10);
    }),
    (u.tickFormat = function (e, t) {
      return t == null ? x : l(t);
    }),
    (u.nice = function (e) {
      var n = f();
      return (
        (e && typeof e.range == `function`) ||
          (e = t(n[0], n[n.length - 1], e ?? 10)),
        e ? f(Kx(n, e)) : u
      );
    }),
    (u.copy = function () {
      return hx(u, Fw(e, t, n, r, i, a, o, s, c, l));
    }),
    u
  );
}
function Iw() {
  return Yy.apply(
    Fw(sC, cC, nC, eC, zS, FS, NS, jS, AS, Aw).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function Lw() {
  return Yy.apply(
    Fw(aC, oC, rC, tC, qS, IS, PS, MS, AS, jw).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function Rw() {
  var e = 0,
    t = 1,
    n,
    r,
    i,
    a,
    o = ux,
    s = !1,
    c;
  function l(e) {
    return e == null || isNaN((e = +e))
      ? c
      : o(
          i === 0
            ? 0.5
            : ((e = (a(e) - n) * i), s ? Math.max(0, Math.min(1, e)) : e),
        );
  }
  ((l.domain = function (o) {
    return arguments.length
      ? (([e, t] = o),
        (n = a((e = +e))),
        (r = a((t = +t))),
        (i = n === r ? 0 : 1 / (r - n)),
        l)
      : [e, t];
  }),
    (l.clamp = function (e) {
      return arguments.length ? ((s = !!e), l) : s;
    }),
    (l.interpolator = function (e) {
      return arguments.length ? ((o = e), l) : o;
    }));
  function u(e) {
    return function (t) {
      var n, r;
      return arguments.length ? (([n, r] = t), (o = e(n, r)), l) : [o(0), o(1)];
    };
  }
  return (
    (l.range = u(ix)),
    (l.rangeRound = u(ax)),
    (l.unknown = function (e) {
      return arguments.length ? ((c = e), l) : c;
    }),
    function (o) {
      return (
        (a = o), (n = o(e)), (r = o(t)), (i = n === r ? 0 : 1 / (r - n)), l
      );
    }
  );
}
function zw(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function Bw() {
  var e = Ux(Rw()(ux));
  return (
    (e.copy = function () {
      return zw(e, Bw());
    }),
    Xy.apply(e, arguments)
  );
}
function Vw() {
  var e = tS(Rw()).domain([1, 10]);
  return (
    (e.copy = function () {
      return zw(e, Vw()).base(e.base());
    }),
    Xy.apply(e, arguments)
  );
}
function Hw() {
  var e = aS(Rw());
  return (
    (e.copy = function () {
      return zw(e, Hw()).constant(e.constant());
    }),
    Xy.apply(e, arguments)
  );
}
function Uw() {
  var e = uS(Rw());
  return (
    (e.copy = function () {
      return zw(e, Uw()).exponent(e.exponent());
    }),
    Xy.apply(e, arguments)
  );
}
function Ww() {
  return Uw.apply(null, arguments).exponent(0.5);
}
function Gw() {
  var e = [],
    t = ux;
  function n(n) {
    if (n != null && !isNaN((n = +n)))
      return t((Dy(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (n.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let n of t) n != null && !isNaN((n = +n)) && e.push(n);
      return (e.sort(by), n);
    }),
    (n.interpolator = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.range = function () {
      return e.map((n, r) => t(r / (e.length - 1)));
    }),
    (n.quantiles = function (t) {
      return Array.from({ length: t + 1 }, (n, r) => Ky(e, r / t));
    }),
    (n.copy = function () {
      return Gw(t).domain(e);
    }),
    Xy.apply(n, arguments)
  );
}
function Kw() {
  var e = 0,
    t = 0.5,
    n = 1,
    r = 1,
    i,
    a,
    o,
    s,
    c,
    l = ux,
    u,
    d = !1,
    f;
  function p(e) {
    return isNaN((e = +e))
      ? f
      : ((e = 0.5 + ((e = +u(e)) - a) * (r * e < r * a ? s : c)),
        l(d ? Math.max(0, Math.min(1, e)) : e));
  }
  ((p.domain = function (l) {
    return arguments.length
      ? (([e, t, n] = l),
        (i = u((e = +e))),
        (a = u((t = +t))),
        (o = u((n = +n))),
        (s = i === a ? 0 : 0.5 / (a - i)),
        (c = a === o ? 0 : 0.5 / (o - a)),
        (r = a < i ? -1 : 1),
        p)
      : [e, t, n];
  }),
    (p.clamp = function (e) {
      return arguments.length ? ((d = !!e), p) : d;
    }),
    (p.interpolator = function (e) {
      return arguments.length ? ((l = e), p) : l;
    }));
  function m(e) {
    return function (t) {
      var n, r, i;
      return arguments.length
        ? (([n, r, i] = t), (l = ox(e, [n, r, i])), p)
        : [l(0), l(0.5), l(1)];
    };
  }
  return (
    (p.range = m(ix)),
    (p.rangeRound = m(ax)),
    (p.unknown = function (e) {
      return arguments.length ? ((f = e), p) : f;
    }),
    function (l) {
      return (
        (u = l),
        (i = l(e)),
        (a = l(t)),
        (o = l(n)),
        (s = i === a ? 0 : 0.5 / (a - i)),
        (c = a === o ? 0 : 0.5 / (o - a)),
        (r = a < i ? -1 : 1),
        p
      );
    }
  );
}
function qw() {
  var e = Ux(Kw()(ux));
  return (
    (e.copy = function () {
      return zw(e, qw());
    }),
    Xy.apply(e, arguments)
  );
}
function Jw() {
  var e = tS(Kw()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return zw(e, Jw()).base(e.base());
    }),
    Xy.apply(e, arguments)
  );
}
function Yw() {
  var e = aS(Kw());
  return (
    (e.copy = function () {
      return zw(e, Yw()).constant(e.constant());
    }),
    Xy.apply(e, arguments)
  );
}
function Xw() {
  var e = uS(Kw());
  return (
    (e.copy = function () {
      return zw(e, Xw()).exponent(e.exponent());
    }),
    Xy.apply(e, arguments)
  );
}
function Zw() {
  return Xw.apply(null, arguments).exponent(0.5);
}
var Qw = e(yy()),
  $w = t({
    scaleBand: () => $y,
    scaleDiverging: () => qw,
    scaleDivergingLog: () => Jw,
    scaleDivergingPow: () => Xw,
    scaleDivergingSqrt: () => Zw,
    scaleDivergingSymlog: () => Yw,
    scaleIdentity: () => Gx,
    scaleImplicit: () => Zy,
    scaleLinear: () => Wx,
    scaleLog: () => nS,
    scaleOrdinal: () => Qy,
    scalePoint: () => tb,
    scalePow: () => dS,
    scaleQuantile: () => gS,
    scaleQuantize: () => _S,
    scaleRadial: () => hS,
    scaleSequential: () => Bw,
    scaleSequentialLog: () => Vw,
    scaleSequentialPow: () => Uw,
    scaleSequentialQuantile: () => Gw,
    scaleSequentialSqrt: () => Ww,
    scaleSequentialSymlog: () => Hw,
    scaleSqrt: () => fS,
    scaleSymlog: () => oS,
    scaleThreshold: () => vS,
    scaleTime: () => Iw,
    scaleUtc: () => Lw,
    tickFormat: () => Hx,
  }),
  eT = (e) => e.chartData,
  tT = J([eT], (e) => {
    var t = e.chartData == null ? 0 : e.chartData.length - 1;
    return {
      chartData: e.chartData,
      computedData: e.computedData,
      dataEndIndex: t,
      dataStartIndex: 0,
    };
  }),
  nT = (e, t, n, r) => (r ? tT(e) : eT(e));
function rT(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, n] = e;
    if (Lg(t) && Lg(n)) return !0;
  }
  return !1;
}
function iT(e, t, n) {
  return n ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function aT(e, t) {
  if (t && typeof e != `function` && Array.isArray(e) && e.length === 2) {
    var [n, r] = e,
      i,
      a;
    if (Lg(n)) i = n;
    else if (typeof n == `function`) return;
    if (Lg(r)) a = r;
    else if (typeof r == `function`) return;
    var o = [i, a];
    if (rT(o)) return o;
  }
}
function oT(e, t, n) {
  if (n || t != null) {
    if (typeof e == `function` && t != null)
      try {
        var r = e(t, n);
        if (rT(r)) return iT(r, t, n);
      } catch {}
    if (Array.isArray(e) && e.length === 2) {
      var [i, a] = e,
        o,
        s;
      if (i === `auto`) t != null && (o = Math.min(...t));
      else if (G(i)) o = i;
      else if (typeof i == `function`)
        try {
          t != null && (o = i(t?.[0]));
        } catch {}
      else if (typeof i == `string` && qh.test(i)) {
        var c = qh.exec(i);
        if (c == null || t == null) o = void 0;
        else {
          var l = +c[1];
          o = t[0] - l;
        }
      } else o = t?.[0];
      if (a === `auto`) t != null && (s = Math.max(...t));
      else if (G(a)) s = a;
      else if (typeof a == `function`)
        try {
          t != null && (s = a(t?.[1]));
        } catch {}
      else if (typeof a == `string` && Jh.test(a)) {
        var u = Jh.exec(a);
        if (u == null || t == null) s = void 0;
        else {
          var d = +u[1];
          s = t[1] + d;
        }
      } else s = t?.[1];
      var f = [o, s];
      if (rT(f)) return t == null ? f : iT(f, t, n);
    }
  }
}
var Z = e(
    n((e, t, n) => {
      (function (e) {
        var n = 1e9,
          r = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: `2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286`,
          },
          i = !0,
          a = `[DecimalError] `,
          o = a + `Invalid argument: `,
          s = a + `Exponent out of range: `,
          c = Math.floor,
          l = Math.pow,
          u = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          d,
          f = 1e7,
          p = 7,
          m = 9007199254740991,
          h = c(m / p),
          g = {};
        ((g.absoluteValue = g.abs =
          function () {
            var e = new this.constructor(this);
            return ((e.s &&= 1), e);
          }),
          (g.comparedTo = g.cmp =
            function (e) {
              var t,
                n,
                r,
                i,
                a = this;
              if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s;
              if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1;
              for (
                r = a.d.length, i = e.d.length, t = 0, n = r < i ? r : i;
                t < n;
                ++t
              )
                if (a.d[t] !== e.d[t])
                  return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
              return r === i ? 0 : (r > i) ^ (a.s < 0) ? 1 : -1;
            }),
          (g.decimalPlaces = g.dp =
            function () {
              var e = this,
                t = e.d.length - 1,
                n = (t - e.e) * p;
              if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) n--;
              return n < 0 ? 0 : n;
            }),
          (g.dividedBy = g.div =
            function (e) {
              return b(this, new this.constructor(e));
            }),
          (g.dividedToIntegerBy = g.idiv =
            function (e) {
              var t = this,
                n = t.constructor;
              return D(b(t, new n(e), 0, 1), n.precision);
            }),
          (g.equals = g.eq =
            function (e) {
              return !this.cmp(e);
            }),
          (g.exponent = function () {
            return S(this);
          }),
          (g.greaterThan = g.gt =
            function (e) {
              return this.cmp(e) > 0;
            }),
          (g.greaterThanOrEqualTo = g.gte =
            function (e) {
              return this.cmp(e) >= 0;
            }),
          (g.isInteger = g.isint =
            function () {
              return this.e > this.d.length - 2;
            }),
          (g.isNegative = g.isneg =
            function () {
              return this.s < 0;
            }),
          (g.isPositive = g.ispos =
            function () {
              return this.s > 0;
            }),
          (g.isZero = function () {
            return this.s === 0;
          }),
          (g.lessThan = g.lt =
            function (e) {
              return this.cmp(e) < 0;
            }),
          (g.lessThanOrEqualTo = g.lte =
            function (e) {
              return this.cmp(e) < 1;
            }),
          (g.logarithm = g.log =
            function (e) {
              var t,
                n = this,
                r = n.constructor,
                o = r.precision,
                s = o + 5;
              if (e === void 0) e = new r(10);
              else if (((e = new r(e)), e.s < 1 || e.eq(d)))
                throw Error(a + `NaN`);
              if (n.s < 1) throw Error(a + (n.s ? `NaN` : `-Infinity`));
              return n.eq(d)
                ? new r(0)
                : ((i = !1), (t = b(T(n, s), T(e, s), s)), (i = !0), D(t, o));
            }),
          (g.minus = g.sub =
            function (e) {
              var t = this;
              return (
                (e = new t.constructor(e)),
                t.s == e.s ? O(t, e) : _(t, ((e.s = -e.s), e))
              );
            }),
          (g.modulo = g.mod =
            function (e) {
              var t,
                n = this,
                r = n.constructor,
                o = r.precision;
              if (((e = new r(e)), !e.s)) throw Error(a + `NaN`);
              return n.s
                ? ((i = !1), (t = b(n, e, 0, 1).times(e)), (i = !0), n.minus(t))
                : D(new r(n), o);
            }),
          (g.naturalExponential = g.exp =
            function () {
              return x(this);
            }),
          (g.naturalLogarithm = g.ln =
            function () {
              return T(this);
            }),
          (g.negated = g.neg =
            function () {
              var e = new this.constructor(this);
              return ((e.s = -e.s || 0), e);
            }),
          (g.plus = g.add =
            function (e) {
              var t = this;
              return (
                (e = new t.constructor(e)),
                t.s == e.s ? _(t, e) : O(t, ((e.s = -e.s), e))
              );
            }),
          (g.precision = g.sd =
            function (e) {
              var t,
                n,
                r,
                i = this;
              if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
                throw Error(o + e);
              if (
                ((t = S(i) + 1),
                (r = i.d.length - 1),
                (n = r * p + 1),
                (r = i.d[r]),
                r)
              ) {
                for (; r % 10 == 0; r /= 10) n--;
                for (r = i.d[0]; r >= 10; r /= 10) n++;
              }
              return e && t > n ? t : n;
            }),
          (g.squareRoot = g.sqrt =
            function () {
              var e,
                t,
                n,
                r,
                o,
                s,
                l,
                u = this,
                d = u.constructor;
              if (u.s < 1) {
                if (!u.s) return new d(0);
                throw Error(a + `NaN`);
              }
              for (
                e = S(u),
                  i = !1,
                  o = Math.sqrt(+u),
                  o == 0 || o == 1 / 0
                    ? ((t = y(u.d)),
                      (t.length + e) % 2 == 0 && (t += `0`),
                      (o = Math.sqrt(t)),
                      (e = c((e + 1) / 2) - (e < 0 || e % 2)),
                      o == 1 / 0
                        ? (t = `5e` + e)
                        : ((t = o.toExponential()),
                          (t = t.slice(0, t.indexOf(`e`) + 1) + e)),
                      (r = new d(t)))
                    : (r = new d(o.toString())),
                  n = d.precision,
                  o = l = n + 3;
                ;
              )
                if (
                  ((s = r),
                  (r = s.plus(b(u, s, l + 2)).times(0.5)),
                  y(s.d).slice(0, l) === (t = y(r.d)).slice(0, l))
                ) {
                  if (((t = t.slice(l - 3, l + 1)), o == l && t == `4999`)) {
                    if ((D(s, n + 1, 0), s.times(s).eq(u))) {
                      r = s;
                      break;
                    }
                  } else if (t != `9999`) break;
                  l += 4;
                }
              return ((i = !0), D(r, n));
            }),
          (g.times = g.mul =
            function (e) {
              var t,
                n,
                r,
                a,
                o,
                s,
                c,
                l,
                u,
                d = this,
                p = d.constructor,
                m = d.d,
                h = (e = new p(e)).d;
              if (!d.s || !e.s) return new p(0);
              for (
                e.s *= d.s,
                  n = d.e + e.e,
                  l = m.length,
                  u = h.length,
                  l < u &&
                    ((o = m), (m = h), (h = o), (s = l), (l = u), (u = s)),
                  o = [],
                  s = l + u,
                  r = s;
                r--;
              )
                o.push(0);
              for (r = u; --r >= 0;) {
                for (t = 0, a = l + r; a > r;)
                  ((c = o[a] + h[r] * m[a - r - 1] + t),
                    (o[a--] = (c % f) | 0),
                    (t = (c / f) | 0));
                o[a] = ((o[a] + t) % f) | 0;
              }
              for (; !o[--s];) o.pop();
              return (
                t ? ++n : o.shift(),
                (e.d = o),
                (e.e = n),
                i ? D(e, p.precision) : e
              );
            }),
          (g.toDecimalPlaces = g.todp =
            function (e, t) {
              var r = this,
                i = r.constructor;
              return (
                (r = new i(r)),
                e === void 0
                  ? r
                  : (v(e, 0, n),
                    t === void 0 ? (t = i.rounding) : v(t, 0, 8),
                    D(r, e + S(r) + 1, t))
              );
            }),
          (g.toExponential = function (e, t) {
            var r,
              i = this,
              a = i.constructor;
            return (
              e === void 0
                ? (r = k(i, !0))
                : (v(e, 0, n),
                  t === void 0 ? (t = a.rounding) : v(t, 0, 8),
                  (i = D(new a(i), e + 1, t)),
                  (r = k(i, !0, e + 1))),
              r
            );
          }),
          (g.toFixed = function (e, t) {
            var r,
              i,
              a = this,
              o = a.constructor;
            return e === void 0
              ? k(a)
              : (v(e, 0, n),
                t === void 0 ? (t = o.rounding) : v(t, 0, 8),
                (i = D(new o(a), e + S(a) + 1, t)),
                (r = k(i.abs(), !1, e + S(i) + 1)),
                a.isneg() && !a.isZero() ? `-` + r : r);
          }),
          (g.toInteger = g.toint =
            function () {
              var e = this,
                t = e.constructor;
              return D(new t(e), S(e) + 1, t.rounding);
            }),
          (g.toNumber = function () {
            return +this;
          }),
          (g.toPower = g.pow =
            function (e) {
              var t,
                n,
                r,
                o,
                s,
                l,
                u = this,
                f = u.constructor,
                h = 12,
                g = +(e = new f(e));
              if (!e.s) return new f(d);
              if (((u = new f(u)), !u.s)) {
                if (e.s < 1) throw Error(a + `Infinity`);
                return u;
              }
              if (u.eq(d)) return u;
              if (((r = f.precision), e.eq(d))) return D(u, r);
              if (
                ((t = e.e), (n = e.d.length - 1), (l = t >= n), (s = u.s), !l)
              ) {
                if (s < 0) throw Error(a + `NaN`);
              } else if ((n = g < 0 ? -g : g) <= m) {
                for (
                  o = new f(d), t = Math.ceil(r / p + 4), i = !1;
                  n % 2 && ((o = o.times(u)), ee(o.d, t)),
                    (n = c(n / 2)),
                    n !== 0;
                )
                  ((u = u.times(u)), ee(u.d, t));
                return ((i = !0), e.s < 0 ? new f(d).div(o) : D(o, r));
              }
              return (
                (s = s < 0 && e.d[Math.max(t, n)] & 1 ? -1 : 1),
                (u.s = 1),
                (i = !1),
                (o = e.times(T(u, r + h))),
                (i = !0),
                (o = x(o)),
                (o.s = s),
                o
              );
            }),
          (g.toPrecision = function (e, t) {
            var r,
              i,
              a = this,
              o = a.constructor;
            return (
              e === void 0
                ? ((r = S(a)), (i = k(a, r <= o.toExpNeg || r >= o.toExpPos)))
                : (v(e, 1, n),
                  t === void 0 ? (t = o.rounding) : v(t, 0, 8),
                  (a = D(new o(a), e, t)),
                  (r = S(a)),
                  (i = k(a, e <= r || r <= o.toExpNeg, e))),
              i
            );
          }),
          (g.toSignificantDigits = g.tosd =
            function (e, t) {
              var r = this,
                i = r.constructor;
              return (
                e === void 0
                  ? ((e = i.precision), (t = i.rounding))
                  : (v(e, 1, n), t === void 0 ? (t = i.rounding) : v(t, 0, 8)),
                D(new i(r), e, t)
              );
            }),
          (g.toString =
            g.valueOf =
            g.val =
            g.toJSON =
              function () {
                var e = this,
                  t = S(e),
                  n = e.constructor;
                return k(e, t <= n.toExpNeg || t >= n.toExpPos);
              }));
        function _(e, t) {
          var n,
            r,
            a,
            o,
            s,
            c,
            l,
            u,
            d = e.constructor,
            m = d.precision;
          if (!e.s || !t.s) return (t.s || (t = new d(e)), i ? D(t, m) : t);
          if (
            ((l = e.d),
            (u = t.d),
            (s = e.e),
            (a = t.e),
            (l = l.slice()),
            (o = s - a),
            o)
          ) {
            for (
              o < 0
                ? ((r = l), (o = -o), (c = u.length))
                : ((r = u), (a = s), (c = l.length)),
                s = Math.ceil(m / p),
                c = s > c ? s + 1 : c + 1,
                o > c && ((o = c), (r.length = 1)),
                r.reverse();
              o--;
            )
              r.push(0);
            r.reverse();
          }
          for (
            c = l.length,
              o = u.length,
              c - o < 0 && ((o = c), (r = u), (u = l), (l = r)),
              n = 0;
            o;
          )
            ((n = ((l[--o] = l[o] + u[o] + n) / f) | 0), (l[o] %= f));
          for (n && (l.unshift(n), ++a), c = l.length; l[--c] == 0;) l.pop();
          return ((t.d = l), (t.e = a), i ? D(t, m) : t);
        }
        function v(e, t, n) {
          if (e !== ~~e || e < t || e > n) throw Error(o + e);
        }
        function y(e) {
          var t,
            n,
            r,
            i = e.length - 1,
            a = ``,
            o = e[0];
          if (i > 0) {
            for (a += o, t = 1; t < i; t++)
              ((r = e[t] + ``), (n = p - r.length), n && (a += w(n)), (a += r));
            ((o = e[t]), (r = o + ``), (n = p - r.length), n && (a += w(n)));
          } else if (o === 0) return `0`;
          for (; o % 10 == 0;) o /= 10;
          return a + o;
        }
        var b = (function () {
          function e(e, t) {
            var n,
              r = 0,
              i = e.length;
            for (e = e.slice(); i--;)
              ((n = e[i] * t + r), (e[i] = (n % f) | 0), (r = (n / f) | 0));
            return (r && e.unshift(r), e);
          }
          function t(e, t, n, r) {
            var i, a;
            if (n != r) a = n > r ? 1 : -1;
            else
              for (i = a = 0; i < n; i++)
                if (e[i] != t[i]) {
                  a = e[i] > t[i] ? 1 : -1;
                  break;
                }
            return a;
          }
          function n(e, t, n) {
            for (var r = 0; n--;)
              ((e[n] -= r), (r = +(e[n] < t[n])), (e[n] = r * f + e[n] - t[n]));
            for (; !e[0] && e.length > 1;) e.shift();
          }
          return function (r, i, o, s) {
            var c,
              l,
              u,
              d,
              m,
              h,
              g,
              _,
              v,
              y,
              b,
              x,
              C,
              w,
              T,
              E,
              O,
              k,
              ee = r.constructor,
              te = r.s == i.s ? 1 : -1,
              ne = r.d,
              A = i.d;
            if (!r.s) return new ee(r);
            if (!i.s) throw Error(a + `Division by zero`);
            for (
              l = r.e - i.e,
                O = A.length,
                T = ne.length,
                g = new ee(te),
                _ = g.d = [],
                u = 0;
              A[u] == (ne[u] || 0);
            )
              ++u;
            if (
              (A[u] > (ne[u] || 0) && --l,
              (x =
                o == null ? (o = ee.precision) : s ? o + (S(r) - S(i)) + 1 : o),
              x < 0)
            )
              return new ee(0);
            if (((x = (x / p + 2) | 0), (u = 0), O == 1))
              for (d = 0, A = A[0], x++; (u < T || d) && x--; u++)
                ((C = d * f + (ne[u] || 0)),
                  (_[u] = (C / A) | 0),
                  (d = (C % A) | 0));
            else {
              for (
                d = (f / (A[0] + 1)) | 0,
                  d > 1 &&
                    ((A = e(A, d)),
                    (ne = e(ne, d)),
                    (O = A.length),
                    (T = ne.length)),
                  w = O,
                  v = ne.slice(0, O),
                  y = v.length;
                y < O;
              )
                v[y++] = 0;
              ((k = A.slice()), k.unshift(0), (E = A[0]), A[1] >= f / 2 && ++E);
              do
                ((d = 0),
                  (c = t(A, v, O, y)),
                  c < 0
                    ? ((b = v[0]),
                      O != y && (b = b * f + (v[1] || 0)),
                      (d = (b / E) | 0),
                      d > 1
                        ? (d >= f && (d = f - 1),
                          (m = e(A, d)),
                          (h = m.length),
                          (y = v.length),
                          (c = t(m, v, h, y)),
                          c == 1 && (d--, n(m, O < h ? k : A, h)))
                        : (d == 0 && (c = d = 1), (m = A.slice())),
                      (h = m.length),
                      h < y && m.unshift(0),
                      n(v, m, y),
                      c == -1 &&
                        ((y = v.length),
                        (c = t(A, v, O, y)),
                        c < 1 && (d++, n(v, O < y ? k : A, y))),
                      (y = v.length))
                    : c === 0 && (d++, (v = [0])),
                  (_[u++] = d),
                  c && v[0] ? (v[y++] = ne[w] || 0) : ((v = [ne[w]]), (y = 1)));
              while ((w++ < T || v[0] !== void 0) && x--);
            }
            return (_[0] || _.shift(), (g.e = l), D(g, s ? o + S(g) + 1 : o));
          };
        })();
        function x(e, t) {
          var n,
            r,
            a,
            o,
            c,
            u,
            f = 0,
            p = 0,
            m = e.constructor,
            h = m.precision;
          if (S(e) > 16) throw Error(s + S(e));
          if (!e.s) return new m(d);
          for (
            t == null ? ((i = !1), (u = h)) : (u = t), c = new m(0.03125);
            e.abs().gte(0.1);
          )
            ((e = e.times(c)), (p += 5));
          for (
            r = ((Math.log(l(2, p)) / Math.LN10) * 2 + 5) | 0,
              u += r,
              n = a = o = new m(d),
              m.precision = u;
            ;
          ) {
            if (
              ((a = D(a.times(e), u)),
              (n = n.times(++f)),
              (c = o.plus(b(a, n, u))),
              y(c.d).slice(0, u) === y(o.d).slice(0, u))
            ) {
              for (; p--;) o = D(o.times(o), u);
              return ((m.precision = h), t == null ? ((i = !0), D(o, h)) : o);
            }
            o = c;
          }
        }
        function S(e) {
          for (var t = e.e * p, n = e.d[0]; n >= 10; n /= 10) t++;
          return t;
        }
        function C(e, t, n) {
          if (t > e.LN10.sd())
            throw (
              (i = !0),
              n && (e.precision = n),
              Error(a + `LN10 precision limit exceeded`)
            );
          return D(new e(e.LN10), t);
        }
        function w(e) {
          for (var t = ``; e--;) t += `0`;
          return t;
        }
        function T(e, t) {
          var n,
            r,
            o,
            s,
            c,
            l,
            u,
            f,
            p,
            m = 1,
            h = 10,
            g = e,
            _ = g.d,
            v = g.constructor,
            x = v.precision;
          if (g.s < 1) throw Error(a + (g.s ? `NaN` : `-Infinity`));
          if (g.eq(d)) return new v(0);
          if ((t == null ? ((i = !1), (f = x)) : (f = t), g.eq(10)))
            return (t ?? (i = !0), C(v, f));
          if (
            ((f += h),
            (v.precision = f),
            (n = y(_)),
            (r = n.charAt(0)),
            (s = S(g)),
            Math.abs(s) < 0x5543df729c000)
          ) {
            for (; (r < 7 && r != 1) || (r == 1 && n.charAt(1) > 3);)
              ((g = g.times(e)), (n = y(g.d)), (r = n.charAt(0)), m++);
            ((s = S(g)),
              r > 1
                ? ((g = new v(`0.` + n)), s++)
                : (g = new v(r + `.` + n.slice(1))));
          } else
            return (
              (u = C(v, f + 2, x).times(s + ``)),
              (g = T(new v(r + `.` + n.slice(1)), f - h).plus(u)),
              (v.precision = x),
              t == null ? ((i = !0), D(g, x)) : g
            );
          for (
            l = c = g = b(g.minus(d), g.plus(d), f),
              p = D(g.times(g), f),
              o = 3;
            ;
          ) {
            if (
              ((c = D(c.times(p), f)),
              (u = l.plus(b(c, new v(o), f))),
              y(u.d).slice(0, f) === y(l.d).slice(0, f))
            )
              return (
                (l = l.times(2)),
                s !== 0 && (l = l.plus(C(v, f + 2, x).times(s + ``))),
                (l = b(l, new v(m), f)),
                (v.precision = x),
                t == null ? ((i = !0), D(l, x)) : l
              );
            ((l = u), (o += 2));
          }
        }
        function E(e, t) {
          var n, r, a;
          for (
            (n = t.indexOf(`.`)) > -1 && (t = t.replace(`.`, ``)),
              (r = t.search(/e/i)) > 0
                ? (n < 0 && (n = r),
                  (n += +t.slice(r + 1)),
                  (t = t.substring(0, r)))
                : n < 0 && (n = t.length),
              r = 0;
            t.charCodeAt(r) === 48;
          )
            ++r;
          for (a = t.length; t.charCodeAt(a - 1) === 48;) --a;
          if (((t = t.slice(r, a)), t)) {
            if (
              ((a -= r),
              (n = n - r - 1),
              (e.e = c(n / p)),
              (e.d = []),
              (r = (n + 1) % p),
              n < 0 && (r += p),
              r < a)
            ) {
              for (r && e.d.push(+t.slice(0, r)), a -= p; r < a;)
                e.d.push(+t.slice(r, (r += p)));
              ((t = t.slice(r)), (r = p - t.length));
            } else r -= a;
            for (; r--;) t += `0`;
            if ((e.d.push(+t), i && (e.e > h || e.e < -h))) throw Error(s + n);
          } else ((e.s = 0), (e.e = 0), (e.d = [0]));
          return e;
        }
        function D(e, t, n) {
          var r,
            a,
            o,
            u,
            d,
            m,
            g,
            _,
            v = e.d;
          for (u = 1, o = v[0]; o >= 10; o /= 10) u++;
          if (((r = t - u), r < 0)) ((r += p), (a = t), (g = v[(_ = 0)]));
          else {
            if (((_ = Math.ceil((r + 1) / p)), (o = v.length), _ >= o))
              return e;
            for (g = o = v[_], u = 1; o >= 10; o /= 10) u++;
            ((r %= p), (a = r - p + u));
          }
          if (
            (n !== void 0 &&
              ((o = l(10, u - a - 1)),
              (d = ((g / o) % 10) | 0),
              (m = t < 0 || v[_ + 1] !== void 0 || g % o),
              (m =
                n < 4
                  ? (d || m) && (n == 0 || n == (e.s < 0 ? 3 : 2))
                  : d > 5 ||
                    (d == 5 &&
                      (n == 4 ||
                        m ||
                        (n == 6 &&
                          ((r > 0 ? (a > 0 ? g / l(10, u - a) : 0) : v[_ - 1]) %
                            10) &
                            1) ||
                        n == (e.s < 0 ? 8 : 7))))),
            t < 1 || !v[0])
          )
            return (
              m
                ? ((o = S(e)),
                  (v.length = 1),
                  (t = t - o - 1),
                  (v[0] = l(10, (p - (t % p)) % p)),
                  (e.e = c(-t / p) || 0))
                : ((v.length = 1), (v[0] = e.e = e.s = 0)),
              e
            );
          if (
            (r == 0
              ? ((v.length = _), (o = 1), _--)
              : ((v.length = _ + 1),
                (o = l(10, p - r)),
                (v[_] = a > 0 ? (((g / l(10, u - a)) % l(10, a)) | 0) * o : 0)),
            m)
          )
            for (;;)
              if (_ == 0) {
                (v[0] += o) == f && ((v[0] = 1), ++e.e);
                break;
              } else {
                if (((v[_] += o), v[_] != f)) break;
                ((v[_--] = 0), (o = 1));
              }
          for (r = v.length; v[--r] === 0;) v.pop();
          if (i && (e.e > h || e.e < -h)) throw Error(s + S(e));
          return e;
        }
        function O(e, t) {
          var n,
            r,
            a,
            o,
            s,
            c,
            l,
            u,
            d,
            m,
            h = e.constructor,
            g = h.precision;
          if (!e.s || !t.s)
            return (t.s ? (t.s = -t.s) : (t = new h(e)), i ? D(t, g) : t);
          if (
            ((l = e.d),
            (m = t.d),
            (r = t.e),
            (u = e.e),
            (l = l.slice()),
            (s = u - r),
            s)
          ) {
            for (
              d = s < 0,
                d
                  ? ((n = l), (s = -s), (c = m.length))
                  : ((n = m), (r = u), (c = l.length)),
                a = Math.max(Math.ceil(g / p), c) + 2,
                s > a && ((s = a), (n.length = 1)),
                n.reverse(),
                a = s;
              a--;
            )
              n.push(0);
            n.reverse();
          } else {
            for (
              a = l.length, c = m.length, d = a < c, d && (c = a), a = 0;
              a < c;
              a++
            )
              if (l[a] != m[a]) {
                d = l[a] < m[a];
                break;
              }
            s = 0;
          }
          for (
            d && ((n = l), (l = m), (m = n), (t.s = -t.s)),
              c = l.length,
              a = m.length - c;
            a > 0;
            --a
          )
            l[c++] = 0;
          for (a = m.length; a > s;) {
            if (l[--a] < m[a]) {
              for (o = a; o && l[--o] === 0;) l[o] = f - 1;
              (--l[o], (l[a] += f));
            }
            l[a] -= m[a];
          }
          for (; l[--c] === 0;) l.pop();
          for (; l[0] === 0; l.shift()) --r;
          return l[0] ? ((t.d = l), (t.e = r), i ? D(t, g) : t) : new h(0);
        }
        function k(e, t, n) {
          var r,
            i = S(e),
            a = y(e.d),
            o = a.length;
          return (
            t
              ? (n && (r = n - o) > 0
                  ? (a = a.charAt(0) + `.` + a.slice(1) + w(r))
                  : o > 1 && (a = a.charAt(0) + `.` + a.slice(1)),
                (a = a + (i < 0 ? `e` : `e+`) + i))
              : i < 0
                ? ((a = `0.` + w(-i - 1) + a),
                  n && (r = n - o) > 0 && (a += w(r)))
                : i >= o
                  ? ((a += w(i + 1 - o)),
                    n && (r = n - i - 1) > 0 && (a = a + `.` + w(r)))
                  : ((r = i + 1) < o && (a = a.slice(0, r) + `.` + a.slice(r)),
                    n &&
                      (r = n - o) > 0 &&
                      (i + 1 === o && (a += `.`), (a += w(r)))),
            e.s < 0 ? `-` + a : a
          );
        }
        function ee(e, t) {
          if (e.length > t) return ((e.length = t), !0);
        }
        function te(e) {
          var t, n, r;
          function i(e) {
            var t = this;
            if (!(t instanceof i)) return new i(e);
            if (((t.constructor = i), e instanceof i))
              ((t.s = e.s), (t.e = e.e), (t.d = (e = e.d) ? e.slice() : e));
            else {
              if (typeof e == `number`) {
                if (e * 0 != 0) throw Error(o + e);
                if (e > 0) t.s = 1;
                else if (e < 0) ((e = -e), (t.s = -1));
                else {
                  ((t.s = 0), (t.e = 0), (t.d = [0]));
                  return;
                }
                if (e === ~~e && e < 1e7) {
                  ((t.e = 0), (t.d = [e]));
                  return;
                }
                return E(t, e.toString());
              }
              if (typeof e != `string`) throw Error(o + e);
              if (
                (e.charCodeAt(0) === 45
                  ? ((e = e.slice(1)), (t.s = -1))
                  : (t.s = 1),
                u.test(e))
              )
                E(t, e);
              else throw Error(o + e);
            }
          }
          if (
            ((i.prototype = g),
            (i.ROUND_UP = 0),
            (i.ROUND_DOWN = 1),
            (i.ROUND_CEIL = 2),
            (i.ROUND_FLOOR = 3),
            (i.ROUND_HALF_UP = 4),
            (i.ROUND_HALF_DOWN = 5),
            (i.ROUND_HALF_EVEN = 6),
            (i.ROUND_HALF_CEIL = 7),
            (i.ROUND_HALF_FLOOR = 8),
            (i.clone = te),
            (i.config = i.set = ne),
            e === void 0 && (e = {}),
            e)
          )
            for (
              r = [`precision`, `rounding`, `toExpNeg`, `toExpPos`, `LN10`],
                t = 0;
              t < r.length;
            )
              e.hasOwnProperty((n = r[t++])) || (e[n] = this[n]);
          return (i.config(e), i);
        }
        function ne(e) {
          if (!e || typeof e != `object`) throw Error(a + `Object expected`);
          var t,
            r,
            i,
            s = [
              `precision`,
              1,
              n,
              `rounding`,
              0,
              8,
              `toExpNeg`,
              -1 / 0,
              0,
              `toExpPos`,
              0,
              1 / 0,
            ];
          for (t = 0; t < s.length; t += 3)
            if ((i = e[(r = s[t])]) !== void 0) {
              if (c(i) === i && i >= s[t + 1] && i <= s[t + 2]) this[r] = i;
              else throw Error(o + r + `: ` + i);
            }
          if ((i = e[(r = `LN10`)]) !== void 0) {
            if (i == Math.LN10) this[r] = new this(i);
            else throw Error(o + r + `: ` + i);
          }
          return this;
        }
        ((r = te(r)),
          (r.default = r.Decimal = r),
          (d = new r(1)),
          typeof define == `function` && define.amd
            ? define(function () {
                return r;
              })
            : t !== void 0 && t.exports
              ? (t.exports = r)
              : ((e ||=
                  typeof self < `u` && self && self.self == self
                    ? self
                    : Function(`return this`)()),
                (e.Decimal = r)));
      })(n);
    })(),
  ),
  sT = (e) => e,
  cT = { "@@functional/placeholder": !0 },
  lT = (e) => e === cT,
  uT = (e) =>
    function t() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          lT(arguments.length <= 0 ? void 0 : arguments[0]))
        ? t
        : e(...arguments);
    },
  dT = (e, t) =>
    e === 1
      ? t
      : uT(function () {
          var n = [...arguments],
            r = n.filter((e) => e !== cT).length;
          return r >= e
            ? t(...n)
            : dT(
                e - r,
                uT(function () {
                  var e = [...arguments];
                  return t(...n.map((t) => (lT(t) ? e.shift() : t)), ...e);
                }),
              );
        }),
  fT = (e) => dT(e.length, e),
  pT = (e, t) => {
    for (var n = [], r = e; r < t; ++r) n[r - e] = r;
    return n;
  },
  mT = fT((e, t) =>
    Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map((e) => t[e])
          .map(e),
  ),
  hT = function () {
    var e = [...arguments];
    if (!e.length) return sT;
    var t = e.reverse(),
      n = t[0],
      r = t.slice(1);
    return function () {
      return r.reduce((e, t) => t(e), n(...arguments));
    };
  },
  gT = (e) => (Array.isArray(e) ? e.reverse() : e.split(``).reverse().join(``)),
  _T = (e) => {
    var t = null,
      n = null;
    return function () {
      var r = [...arguments];
      return (
        (t && r.every((e, n) => e === t?.[n])) || ((t = r), (n = e(...r))), n
      );
    };
  };
function vT(e) {
  return e === 0
    ? 1
    : Math.floor(new Z.default(e).abs().log(10).toNumber()) + 1;
}
function yT(e, t, n) {
  for (var r = new Z.default(e), i = 0, a = []; r.lt(t) && i < 1e5;)
    (a.push(r.toNumber()), (r = r.add(n)), i++);
  return a;
}
(fT((e, t, n) => {
  var r = +e;
  return r + n * (+t - r);
}),
  fT((e, t, n) => {
    var r = t - +e;
    return ((r ||= 1 / 0), (n - e) / r);
  }),
  fT((e, t, n) => {
    var r = t - +e;
    return ((r ||= 1 / 0), Math.max(0, Math.min(1, (n - e) / r)));
  }));
var bT = (e) => {
    var [t, n] = e,
      [r, i] = [t, n];
    return (t > n && ([r, i] = [n, t]), [r, i]);
  },
  xT = (e, t, n) => {
    if (e.lte(0)) return new Z.default(0);
    var r = vT(e.toNumber()),
      i = new Z.default(10).pow(r),
      a = e.div(i),
      o = r === 1 ? 0.1 : 0.05,
      s = new Z.default(Math.ceil(a.div(o).toNumber())).add(n).mul(o).mul(i);
    return t
      ? new Z.default(s.toNumber())
      : new Z.default(Math.ceil(s.toNumber()));
  },
  ST = (e, t, n) => {
    var r = new Z.default(1),
      i = new Z.default(e);
    if (!i.isint() && n) {
      var a = Math.abs(e);
      a < 1
        ? ((r = new Z.default(10).pow(vT(e) - 1)),
          (i = new Z.default(Math.floor(i.div(r).toNumber())).mul(r)))
        : a > 1 && (i = new Z.default(Math.floor(e)));
    } else
      e === 0
        ? (i = new Z.default(Math.floor((t - 1) / 2)))
        : n || (i = new Z.default(Math.floor(e)));
    var o = Math.floor((t - 1) / 2);
    return hT(
      mT((e) => i.add(new Z.default(e - o).mul(r)).toNumber()),
      pT,
    )(0, t);
  },
  CT = function (e, t, n, r) {
    var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    if (!Number.isFinite((t - e) / (n - 1)))
      return {
        step: new Z.default(0),
        tickMin: new Z.default(0),
        tickMax: new Z.default(0),
      };
    var a = xT(new Z.default(t).sub(e).div(n - 1), r, i),
      o;
    e <= 0 && t >= 0
      ? (o = new Z.default(0))
      : ((o = new Z.default(e).add(t).div(2)),
        (o = o.sub(new Z.default(o).mod(a))));
    var s = Math.ceil(o.sub(e).div(a).toNumber()),
      c = Math.ceil(new Z.default(t).sub(o).div(a).toNumber()),
      l = s + c + 1;
    return l > n
      ? CT(e, t, n, r, i + 1)
      : (l < n &&
          ((c = t > 0 ? c + (n - l) : c), (s = t > 0 ? s : s + (n - l))),
        {
          step: a,
          tickMin: o.sub(new Z.default(s).mul(a)),
          tickMax: o.add(new Z.default(c).mul(a)),
        });
  };
function wT(e) {
  var [t, n] = e,
    r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    a = Math.max(r, 2),
    [o, s] = bT([t, n]);
  if (o === -1 / 0 || s === 1 / 0) {
    var c =
      s === 1 / 0
        ? [o, ...pT(0, r - 1).map(() => 1 / 0)]
        : [...pT(0, r - 1).map(() => -1 / 0), s];
    return t > n ? gT(c) : c;
  }
  if (o === s) return ST(o, r, i);
  var { step: l, tickMin: u, tickMax: d } = CT(o, s, a, i, 0),
    f = yT(u, d.add(new Z.default(0.1).mul(l)), l);
  return t > n ? gT(f) : f;
}
function TT(e, t) {
  var [n, r] = e,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    [a, o] = bT([n, r]);
  if (a === -1 / 0 || o === 1 / 0) return [n, r];
  if (a === o) return [a];
  var s = Math.max(t, 2),
    c = xT(new Z.default(o).sub(a).div(s - 1), i, 0),
    l = [...yT(new Z.default(a), new Z.default(o), c), o];
  return (i === !1 && (l = l.map((e) => Math.round(e))), n > r ? gT(l) : l);
}
var ET = _T(wT),
  DT = _T(TT),
  OT = (e) => e.rootProps.maxBarSize,
  kT = (e) => e.rootProps.barGap,
  AT = (e) => e.rootProps.barCategoryGap,
  jT = (e) => e.rootProps.barSize,
  MT = (e) => e.rootProps.stackOffset,
  NT = (e) => e.options.chartName,
  PT = (e) => e.rootProps.syncId,
  FT = (e) => e.rootProps.syncMethod,
  IT = (e) => e.options.eventEmitter,
  LT = {
    allowDuplicatedCategory: !0,
    angleAxisId: 0,
    axisLine: !0,
    cx: 0,
    cy: 0,
    orientation: `outer`,
    reversed: !1,
    scale: `auto`,
    tick: !0,
    tickLine: !0,
    tickSize: 8,
    type: `category`,
  },
  RT = {
    allowDataOverflow: !1,
    allowDuplicatedCategory: !0,
    angle: 0,
    axisLine: !0,
    cx: 0,
    cy: 0,
    orientation: `right`,
    radiusAxisId: 0,
    scale: `auto`,
    stroke: `#ccc`,
    tick: !0,
    tickCount: 5,
    type: `number`,
  },
  zT = (e, t) => {
    if (e && t) return e != null && e.reversed ? [t[1], t[0]] : t;
  },
  BT = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    domain: void 0,
    id: LT.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: LT.reversed,
    scale: LT.scale,
    tick: LT.tick,
    tickCount: void 0,
    ticks: void 0,
    type: LT.type,
    unit: void 0,
  },
  VT = {
    allowDataOverflow: RT.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: RT.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: RT.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: RT.scale,
    tick: RT.tick,
    tickCount: RT.tickCount,
    ticks: void 0,
    type: RT.type,
    unit: void 0,
  },
  HT = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: LT.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: LT.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: LT.scale,
    tick: LT.tick,
    tickCount: void 0,
    ticks: void 0,
    type: `number`,
    unit: void 0,
  },
  UT = {
    allowDataOverflow: RT.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: RT.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: RT.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: RT.scale,
    tick: RT.tick,
    tickCount: RT.tickCount,
    ticks: void 0,
    type: `category`,
    unit: void 0,
  },
  WT = (e, t) =>
    e.polarAxis.angleAxis[t] == null
      ? e.layout.layoutType === `radial`
        ? HT
        : BT
      : e.polarAxis.angleAxis[t],
  GT = (e, t) =>
    e.polarAxis.radiusAxis[t] == null
      ? e.layout.layoutType === `radial`
        ? UT
        : VT
      : e.polarAxis.radiusAxis[t],
  KT = (e) => e.polarOptions,
  qT = J([tg, ng, yg], _h),
  JT = J([KT, qT], (e, t) => {
    if (e != null) return Eu(e.innerRadius, t, 0);
  }),
  YT = J([KT, qT], (e, t) => {
    if (e != null) return Eu(e.outerRadius, t, t * 0.8);
  }),
  XT = J([KT], (e) => {
    if (e == null) return [0, 0];
    var { startAngle: t, endAngle: n } = e;
    return [t, n];
  }),
  ZT = J([WT, XT], zT),
  QT = J([qT, JT, YT], (e, t, n) => {
    if (e != null && t != null && n != null) return [t, n];
  }),
  $T = J([GT, QT], zT),
  eE = J([Y, KT, JT, YT, tg, ng], (e, t, n, r, i, a) => {
    if (
      !(
        (e !== `centric` && e !== `radial`) ||
        t == null ||
        n == null ||
        r == null
      )
    ) {
      var { cx: o, cy: s, startAngle: c, endAngle: l } = t;
      return {
        cx: Eu(o, i, i / 2),
        cy: Eu(s, a, a / 2),
        innerRadius: n,
        outerRadius: r,
        startAngle: c,
        endAngle: l,
        clockWise: !1,
      };
    }
  }),
  tE = (e, t) => t,
  nE = (e, t, n) => n;
function rE(e) {
  return e?.id;
}
var iE = (e) => {
    var t = Y(e);
    return t === `horizontal`
      ? `xAxis`
      : t === `vertical`
        ? `yAxis`
        : t === `centric`
          ? `angleAxis`
          : `radiusAxis`;
  },
  aE = (e) => e.tooltip.settings.axisId,
  oE = (e) => OE(e, iE(e), aE(e)),
  sE = J([oE], (e) => e?.dataKey);
function cE(e, t, n) {
  var { chartData: r = [] } = t,
    { allowDuplicatedCategory: i, dataKey: a } = n,
    o = new Map();
  return (
    e.forEach((e) => {
      var t = e.data ?? r;
      if (t != null && t.length !== 0) {
        var n = rE(e);
        t.forEach((t, r) => {
          var s = a == null || i ? r : String(Ah(t, a, null)),
            c = Ah(t, e.dataKey, 0),
            l = o.has(s) ? o.get(s) : {};
          (Object.assign(l, { [n]: c }), o.set(s, l));
        });
      }
    }),
    Array.from(o.values())
  );
}
function lE(e) {
  return e.stackId != null && e.dataKey != null;
}
var uE = (e, t) =>
  e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function dE(e, t) {
  return Array.isArray(e) &&
    Array.isArray(t) &&
    e.length === 0 &&
    t.length === 0
    ? !0
    : e === t;
}
function fE(e, t) {
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
function pE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? fE(Object(n), !0).forEach(function (t) {
          mE(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : fE(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function mE(e, t, n) {
  return (
    (t = hE(t)) in e
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
function hE(e) {
  var t = gE(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function gE(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var _E = [0, `auto`],
  vE = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: void 0,
    height: 30,
    hide: !0,
    id: 0,
    includeHidden: !1,
    interval: `preserveEnd`,
    minTickGap: 5,
    mirror: !1,
    name: void 0,
    orientation: `bottom`,
    padding: { left: 0, right: 0 },
    reversed: !1,
    scale: `auto`,
    tick: !0,
    tickCount: 5,
    tickFormatter: void 0,
    ticks: void 0,
    type: `category`,
    unit: void 0,
  },
  yE = (e, t) => e.cartesianAxis.xAxis[t],
  bE = (e, t) => yE(e, t) ?? vE,
  xE = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: _E,
    hide: !0,
    id: 0,
    includeHidden: !1,
    interval: `preserveEnd`,
    minTickGap: 5,
    mirror: !1,
    name: void 0,
    orientation: `left`,
    padding: { top: 0, bottom: 0 },
    reversed: !1,
    scale: `auto`,
    tick: !0,
    tickCount: 5,
    tickFormatter: void 0,
    ticks: void 0,
    type: `number`,
    unit: void 0,
    width: 60,
  },
  SE = (e, t) => e.cartesianAxis.yAxis[t],
  CE = (e, t) => SE(e, t) ?? xE,
  wE = {
    domain: [0, `auto`],
    includeHidden: !1,
    reversed: !1,
    allowDataOverflow: !1,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    id: 0,
    name: ``,
    range: [64, 64],
    scale: `auto`,
    type: `number`,
    unit: ``,
  },
  TE = (e, t) => e.cartesianAxis.zAxis[t] ?? wE,
  EE = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return bE(e, n);
      case `yAxis`:
        return CE(e, n);
      case `zAxis`:
        return TE(e, n);
      case `angleAxis`:
        return WT(e, n);
      case `radiusAxis`:
        return GT(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  DE = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return bE(e, n);
      case `yAxis`:
        return CE(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  OE = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return bE(e, n);
      case `yAxis`:
        return CE(e, n);
      case `angleAxis`:
        return WT(e, n);
      case `radiusAxis`:
        return GT(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  kE = (e) =>
    e.graphicalItems.cartesianItems.some((e) => e.type === `bar`) ||
    e.graphicalItems.polarItems.some((e) => e.type === `radialBar`);
function AE(e, t) {
  return (n) => {
    switch (e) {
      case `xAxis`:
        return `xAxisId` in n && n.xAxisId === t;
      case `yAxis`:
        return `yAxisId` in n && n.yAxisId === t;
      case `zAxis`:
        return `zAxisId` in n && n.zAxisId === t;
      case `angleAxis`:
        return `angleAxisId` in n && n.angleAxisId === t;
      case `radiusAxis`:
        return `radiusAxisId` in n && n.radiusAxisId === t;
      default:
        return !1;
    }
  };
}
var jE = (e) => e.graphicalItems.cartesianItems,
  ME = J([tE, nE], AE),
  NE = (e, t, n) =>
    e.filter(n).filter((e) => t?.includeHidden === !0 || !e.hide),
  PE = J([jE, EE, ME], NE, { memoizeOptions: { resultEqualityCheck: dE } }),
  FE = J([PE], (e) =>
    e.filter((e) => e.type === `area` || e.type === `bar`).filter(lE),
  ),
  IE = (e) => e.filter((e) => !(`stackId` in e) || e.stackId === void 0),
  LE = J([PE], IE),
  RE = (e) =>
    e
      .map((e) => e.data)
      .filter(Boolean)
      .flat(1),
  zE = J([PE], RE, { memoizeOptions: { resultEqualityCheck: dE } }),
  BE = (e, t) => {
    var { chartData: n = [], dataStartIndex: r, dataEndIndex: i } = t;
    return e.length > 0 ? e : n.slice(r, i + 1);
  },
  VE = J([zE, nT], BE),
  HE = (e, t, n) =>
    t?.dataKey == null
      ? n.length > 0
        ? n
            .map((e) => e.dataKey)
            .flatMap((t) => e.map((e) => ({ value: Ah(e, t) })))
        : e.map((e) => ({ value: e }))
      : e.map((e) => ({ value: Ah(e, t.dataKey) })),
  UE = J([VE, EE, PE], HE);
function WE(e, t) {
  switch (e) {
    case `xAxis`:
      return t.direction === `x`;
    case `yAxis`:
      return t.direction === `y`;
    default:
      return !1;
  }
}
function GE(e) {
  if (Cu(e) || e instanceof Date) {
    var t = Number(e);
    if (Lg(t)) return t;
  }
}
function KE(e) {
  if (Array.isArray(e)) {
    var t = [GE(e[0]), GE(e[1])];
    return rT(t) ? t : void 0;
  }
  var n = GE(e);
  if (n != null) return [n, n];
}
function qE(e) {
  return e.map(GE).filter(uv);
}
function JE(e, t, n) {
  return !n || typeof t != `number` || xu(t) || !n.length
    ? []
    : qE(
        n.flatMap((n) => {
          var r = Ah(e, n.dataKey),
            i,
            a;
          if ((Array.isArray(r) ? ([i, a] = r) : (i = a = r), Lg(i) && Lg(a)))
            return [t - i, t + a];
        }),
      );
}
var YE = J([FE, nT, oE], cE),
  XE = (e, t, n) => {
    var r = t.reduce(
      (e, t) => (
        t.stackId == null ||
          (e[t.stackId] ?? (e[t.stackId] = []), e[t.stackId].push(t)),
        e
      ),
      {},
    );
    return Object.fromEntries(
      Object.entries(r).map((t) => {
        var [r, i] = t;
        return [r, { stackedData: Bh(e, i.map(rE), n), graphicalItems: i }];
      }),
    );
  },
  ZE = J([YE, FE, MT], XE),
  QE = (e, t, n, r) => {
    var { dataStartIndex: i, dataEndIndex: a } = t;
    if (r == null && n !== `zAxis`) {
      var o = Kh(e, i, a);
      if (o == null || o[0] !== 0 || o[1] !== 0) return o;
    }
  },
  $E = J([EE], (e) => e.allowDataOverflow),
  eD = (e) => {
    if (e == null || !(`domain` in e)) return _E;
    if (e.domain != null) return e.domain;
    if (e.ticks != null) {
      if (e.type === `number`) {
        var t = qE(e.ticks);
        return [Math.min(...t), Math.max(...t)];
      }
      if (e.type === `category`) return e.ticks.map(String);
    }
    return e?.domain ?? _E;
  },
  tD = J([EE], eD),
  nD = J([tD, $E], aT),
  rD = J([ZE, eT, tE, nD], QE, { memoizeOptions: { resultEqualityCheck: uE } }),
  iD = (e) => e.errorBars,
  aD = (e, t, n) =>
    e
      .flatMap((e) => t[e.id])
      .filter(Boolean)
      .filter((e) => WE(n, e)),
  oD = function () {
    var e = [...arguments].filter(Boolean);
    if (e.length !== 0) {
      var t = e.flat();
      return [Math.min(...t), Math.max(...t)];
    }
  },
  sD = (e, t, n, r, i) => {
    var a, o;
    if (
      (n.length > 0 &&
        e.forEach((e) => {
          n.forEach((n) => {
            var s = r[n.id]?.filter((e) => WE(i, e)),
              c = Ah(e, t.dataKey ?? n.dataKey),
              l = JE(e, c, s);
            if (l.length >= 2) {
              var u = Math.min(...l),
                d = Math.max(...l);
              ((a == null || u < a) && (a = u),
                (o == null || d > o) && (o = d));
            }
            var f = KE(c);
            f != null &&
              ((a = a == null ? f[0] : Math.min(a, f[0])),
              (o = o == null ? f[1] : Math.max(o, f[1])));
          });
        }),
      t?.dataKey != null &&
        e.forEach((e) => {
          var n = KE(Ah(e, t.dataKey));
          n != null &&
            ((a = a == null ? n[0] : Math.min(a, n[0])),
            (o = o == null ? n[1] : Math.max(o, n[1])));
        }),
      Lg(a) && Lg(o))
    )
      return [a, o];
  },
  cD = J([VE, EE, LE, iD, tE], sD, {
    memoizeOptions: { resultEqualityCheck: uE },
  });
function lD(e) {
  var { value: t } = e;
  if (Cu(t) || t instanceof Date) return t;
}
var uD = (e, t, n) => {
    var r = e.map(lD).filter((e) => e != null);
    return n && (t.dataKey == null || (t.allowDuplicatedCategory && Du(r)))
      ? (0, Qw.default)(0, e.length)
      : t.allowDuplicatedCategory
        ? r
        : Array.from(new Set(r));
  },
  dD = (e) => e.referenceElements.dots,
  fD = (e, t, n) =>
    e
      .filter((e) => e.ifOverflow === `extendDomain`)
      .filter((e) => (t === `xAxis` ? e.xAxisId === n : e.yAxisId === n)),
  pD = J([dD, tE, nE], fD),
  mD = (e) => e.referenceElements.areas,
  hD = J([mD, tE, nE], fD),
  gD = (e) => e.referenceElements.lines,
  _D = J([gD, tE, nE], fD),
  vD = (e, t) => {
    var n = qE(e.map((e) => (t === `xAxis` ? e.x : e.y)));
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  yD = J(pD, tE, vD),
  bD = (e, t) => {
    var n = qE(
      e.flatMap((e) => [
        t === `xAxis` ? e.x1 : e.y1,
        t === `xAxis` ? e.x2 : e.y2,
      ]),
    );
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  xD = J([hD, tE], bD),
  SD = (e, t) => {
    var n = qE(e.map((e) => (t === `xAxis` ? e.x : e.y)));
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  CD = J(yD, J(_D, tE, SD), xD, (e, t, n) => oD(e, n, t)),
  wD = (e, t, n, r, i, a, o, s) =>
    n ??
    oT(
      t,
      (o === `vertical` && s === `xAxis`) ||
        (o === `horizontal` && s === `yAxis`)
        ? oD(r, a, i)
        : oD(a, i),
      e.allowDataOverflow,
    ),
  TD = J([EE, tD, nD, rD, cD, CD, Y, tE], wD, {
    memoizeOptions: { resultEqualityCheck: uE },
  }),
  ED = [0, 1],
  DD = (e, t, n, r, i, a, o) => {
    if ((e != null && n != null && n.length !== 0) || o !== void 0) {
      var { dataKey: s, type: c } = e,
        l = Nh(t, a);
      return l && s == null
        ? (0, Qw.default)(0, n.length)
        : c === `category`
          ? uD(r, e, l)
          : i === `expand`
            ? ED
            : o;
    }
  },
  OD = J([EE, Y, VE, UE, MT, tE, TD], DD),
  kD = (e, t, n, r, i) => {
    if (e != null) {
      var { scale: a, type: o } = e;
      if (a === `auto`)
        return t === `radial` && i === `radiusAxis`
          ? `band`
          : t === `radial` && i === `angleAxis`
            ? `linear`
            : o === `category` &&
                r &&
                (r.indexOf(`LineChart`) >= 0 ||
                  r.indexOf(`AreaChart`) >= 0 ||
                  (r.indexOf(`ComposedChart`) >= 0 && !n))
              ? `point`
              : o === `category`
                ? `band`
                : `linear`;
      if (typeof a == `string`) {
        var s = `scale${ju(a)}`;
        return s in $w ? s : `point`;
      }
    }
  },
  AD = J([EE, Y, kE, NT, tE], kD);
function jD(e) {
  if (e != null) {
    if (e in $w) return $w[e]();
    var t = `scale${ju(e)}`;
    if (t in $w) return $w[t]();
  }
}
function MD(e, t, n, r) {
  if (n != null && r != null) {
    if (typeof e.scale == `function`) return e.scale.copy().domain(n).range(r);
    var i = jD(t);
    if (i != null) {
      var a = i.domain(n).range(r);
      return (Lh(a), a);
    }
  }
}
var ND = (e, t, n) => {
    var r = eD(t);
    if (n === `auto` || n === `linear`) {
      if (
        t != null &&
        t.tickCount &&
        Array.isArray(r) &&
        (r[0] === `auto` || r[1] === `auto`) &&
        rT(e)
      )
        return ET(e, t.tickCount, t.allowDecimals);
      if (t != null && t.tickCount && t.type === `number` && rT(e))
        return DT(e, t.tickCount, t.allowDecimals);
    }
  },
  PD = J([OD, OE, AD], ND),
  FD = (e, t, n, r) => {
    if (
      r !== `angleAxis` &&
      e?.type === `number` &&
      rT(t) &&
      Array.isArray(n) &&
      n.length > 0
    ) {
      var i = t[0],
        a = n[0],
        o = t[1],
        s = n[n.length - 1];
      return [Math.min(i, a), Math.max(o, s)];
    }
    return t;
  },
  ID = J([EE, OD, PD, tE], FD),
  LD = J(
    J(UE, EE, (e, t) => {
      if (t && t.type === `number`) {
        var n = 1 / 0,
          r = Array.from(qE(e.map((e) => e.value))).sort((e, t) => e - t);
        if (r.length < 2) return 1 / 0;
        var i = r[r.length - 1] - r[0];
        if (i === 0) return 1 / 0;
        for (var a = 0; a < r.length - 1; a++) {
          var o = r[a + 1] - r[a];
          n = Math.min(n, o);
        }
        return n / i;
      }
    }),
    Y,
    AT,
    yg,
    (e, t, n, r) => r,
    (e, t, n, r, i) => {
      if (!Lg(e)) return 0;
      var a = t === `vertical` ? r.height : r.width;
      if (i === `gap`) return (e * a) / 2;
      if (i === `no-gap`) {
        var o = Eu(n, e * a),
          s = (e * a) / 2;
        return s - o - ((s - o) / a) * o;
      }
      return 0;
    },
  ),
  RD = (e, t) => {
    var n = bE(e, t);
    return n == null || typeof n.padding != `string`
      ? 0
      : LD(e, `xAxis`, t, n.padding);
  },
  zD = (e, t) => {
    var n = CE(e, t);
    return n == null || typeof n.padding != `string`
      ? 0
      : LD(e, `yAxis`, t, n.padding);
  },
  BD = J(bE, RD, (e, t) => {
    if (e == null) return { left: 0, right: 0 };
    var { padding: n } = e;
    return typeof n == `string`
      ? { left: t, right: t }
      : { left: (n.left ?? 0) + t, right: (n.right ?? 0) + t };
  }),
  VD = J(CE, zD, (e, t) => {
    if (e == null) return { top: 0, bottom: 0 };
    var { padding: n } = e;
    return typeof n == `string`
      ? { top: t, bottom: t }
      : { top: (n.top ?? 0) + t, bottom: (n.bottom ?? 0) + t };
  }),
  HD = J([yg, BD, Tg, wg, (e, t, n) => n], (e, t, n, r, i) => {
    var { padding: a } = r;
    return i
      ? [a.left, n.width - a.right]
      : [e.left + t.left, e.left + e.width - t.right];
  }),
  UD = J([yg, Y, VD, Tg, wg, (e, t, n) => n], (e, t, n, r, i, a) => {
    var { padding: o } = i;
    return a
      ? [r.height - o.bottom, o.top]
      : t === `horizontal`
        ? [e.top + e.height - n.bottom, e.top + n.top]
        : [e.top + n.top, e.top + e.height - n.bottom];
  }),
  WD = (e, t, n, r) => {
    switch (t) {
      case `xAxis`:
        return HD(e, n, r);
      case `yAxis`:
        return UD(e, n, r);
      case `zAxis`:
        return TE(e, n)?.range;
      case `angleAxis`:
        return XT(e);
      case `radiusAxis`:
        return QT(e, n);
      default:
        return;
    }
  },
  GD = J([EE, WD], zT),
  KD = J([EE, AD, ID, GD], MD);
J([PE, iD, tE], aD);
function qD(e, t) {
  return e.id < t.id ? -1 : +(e.id > t.id);
}
var JD = (e, t) => t,
  YD = (e, t, n) => n,
  XD = J(ag, JD, YD, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort(qD),
  ),
  ZD = J(og, JD, YD, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort(qD),
  ),
  QD = (e, t) => ({ width: e.width, height: t.height }),
  $D = (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  }),
  eO = J(yg, bE, QD),
  tO = (e, t, n) => {
    switch (t) {
      case `top`:
        return e.top;
      case `bottom`:
        return n - e.bottom;
      default:
        return 0;
    }
  },
  nO = (e, t, n) => {
    switch (t) {
      case `left`:
        return e.left;
      case `right`:
        return n - e.right;
      default:
        return 0;
    }
  },
  rO = J(ng, yg, XD, JD, YD, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = QD(t, n);
        o ??= tO(t, r, e);
        var c = (r === `top` && !i) || (r === `bottom` && i);
        ((a[n.id] = o - Number(c) * s.height), (o += (c ? -1 : 1) * s.height));
      }),
      a
    );
  }),
  iO = J(tg, yg, ZD, JD, YD, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = $D(t, n);
        o ??= nO(t, r, e);
        var c = (r === `left` && !i) || (r === `right` && i);
        ((a[n.id] = o - Number(c) * s.width), (o += (c ? -1 : 1) * s.width));
      }),
      a
    );
  }),
  aO = J(
    [
      yg,
      bE,
      (e, t) => {
        var n = bE(e, t);
        if (n != null) return rO(e, n.orientation, n.mirror);
      },
      (e, t) => t,
    ],
    (e, t, n, r) => {
      if (t != null) {
        var i = n?.[r];
        return i == null ? { x: e.left, y: 0 } : { x: e.left, y: i };
      }
    },
  ),
  oO = J(
    [
      yg,
      CE,
      (e, t) => {
        var n = CE(e, t);
        if (n != null) return iO(e, n.orientation, n.mirror);
      },
      (e, t) => t,
    ],
    (e, t, n, r) => {
      if (t != null) {
        var i = n?.[r];
        return i == null ? { x: 0, y: e.top } : { x: i, y: e.top };
      }
    },
  ),
  sO = J(yg, CE, (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  })),
  cO = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return eO(e, n).width;
      case `yAxis`:
        return sO(e, n).height;
      default:
        return;
    }
  },
  lO = (e, t, n, r) => {
    if (n != null) {
      var { allowDuplicatedCategory: i, type: a, dataKey: o } = n,
        s = Nh(e, r),
        c = t.map((e) => e.value);
      if (o && s && a === `category` && i && Du(c)) return c;
    }
  },
  uO = J([Y, UE, EE, tE], lO),
  dO = (e, t, n, r) => {
    if (n != null && n.dataKey != null) {
      var { type: i, scale: a } = n;
      if (Nh(e, r) && (i === `number` || a !== `auto`))
        return t.map((e) => e.value);
    }
  },
  fO = J([Y, UE, OE, tE], dO),
  pO = J([Y, DE, AD, KD, uO, fO, WD, PD, tE], (e, t, n, r, i, a, o, s, c) => {
    if (t == null) return null;
    var l = Nh(e, c);
    return {
      angle: t.angle,
      interval: t.interval,
      minTickGap: t.minTickGap,
      orientation: t.orientation,
      tick: t.tick,
      tickCount: t.tickCount,
      tickFormatter: t.tickFormatter,
      ticks: t.ticks,
      type: t.type,
      unit: t.unit,
      axisType: c,
      categoricalDomain: a,
      duplicateDomain: i,
      isCategorical: l,
      niceTicks: s,
      range: o,
      realScaleType: n,
      scale: r,
    };
  }),
  mO = (e, t, n, r, i, a, o, s, c) => {
    if (t != null && r != null) {
      var l = Nh(e, c),
        { type: u, ticks: d, tickCount: f } = t,
        p =
          n === `scaleBand` && typeof r.bandwidth == `function`
            ? r.bandwidth() / 2
            : 2,
        m = u === `category` && r.bandwidth ? r.bandwidth() / p : 0;
      m =
        c === `angleAxis` && a != null && a.length >= 2
          ? bu(a[0] - a[1]) * 2 * m
          : m;
      var h = d || i;
      return h
        ? h
            .map((e, t) => ({
              index: t,
              coordinate: r(o ? o.indexOf(e) : e) + m,
              value: e,
              offset: m,
            }))
            .filter((e) => !xu(e.coordinate))
        : l && s
          ? s.map((e, t) => ({
              coordinate: r(e) + m,
              value: e,
              index: t,
              offset: m,
            }))
          : r.ticks
            ? r
                .ticks(f)
                .map((e) => ({ coordinate: r(e) + m, value: e, offset: m }))
            : r
                .domain()
                .map((e, t) => ({
                  coordinate: r(e) + m,
                  value: o ? o[e] : e,
                  index: t,
                  offset: m,
                }));
    }
  },
  hO = J([Y, OE, AD, KD, PD, WD, uO, fO, tE], mO),
  gO = (e, t, n, r, i, a, o) => {
    if (t != null && n != null && r != null && r[0] !== r[1]) {
      var s = Nh(e, o),
        { tickCount: c } = t,
        l = 0;
      return (
        (l = o === `angleAxis` && r?.length >= 2 ? bu(r[0] - r[1]) * 2 * l : l),
        s && a
          ? a.map((e, t) => ({
              coordinate: n(e) + l,
              value: e,
              index: t,
              offset: l,
            }))
          : n.ticks
            ? n
                .ticks(c)
                .map((e) => ({ coordinate: n(e) + l, value: e, offset: l }))
            : n
                .domain()
                .map((e, t) => ({
                  coordinate: n(e) + l,
                  value: i ? i[e] : e,
                  index: t,
                  offset: l,
                }))
      );
    }
  },
  _O = J([Y, OE, KD, WD, uO, fO, tE], gO),
  vO = J(EE, KD, (e, t) => {
    if (e != null && t != null) return pE(pE({}, e), {}, { scale: t });
  });
J(
  (e, t, n) => TE(e, n),
  J([EE, AD, OD, GD], MD),
  (e, t) => {
    if (e != null && t != null) return pE(pE({}, e), {}, { scale: t });
  },
);
var yO = J([Y, ag, og], (e, t, n) => {
    switch (e) {
      case `horizontal`:
        return t.some((e) => e.reversed) ? `right-to-left` : `left-to-right`;
      case `vertical`:
        return n.some((e) => e.reversed) ? `bottom-to-top` : `top-to-bottom`;
      case `centric`:
      case `radial`:
        return `left-to-right`;
      default:
        return;
    }
  }),
  bO = (e) => e.options.defaultTooltipEventType,
  xO = (e) => e.options.validateTooltipEventTypes;
function SO(e, t, n) {
  if (e == null) return t;
  var r = e ? `axis` : `item`;
  return n == null ? t : n.includes(r) ? r : t;
}
function CO(e, t) {
  return SO(t, bO(e), xO(e));
}
function wO(e) {
  return q((t) => CO(t, e));
}
var TO = (e, t) => {
    var n,
      r = Number(t);
    if (!(xu(r) || t == null))
      return r >= 0
        ? e == null || (n = e[r]) == null
          ? void 0
          : n.value
        : void 0;
  },
  EO = (e) => e.tooltip.settings,
  DO = { active: !1, index: null, dataKey: void 0, coordinate: void 0 },
  OO = pm({
    name: `tooltip`,
    initialState: {
      itemInteraction: { click: DO, hover: DO },
      axisInteraction: { click: DO, hover: DO },
      keyboardInteraction: DO,
      syncInteraction: {
        active: !1,
        index: null,
        dataKey: void 0,
        label: void 0,
        coordinate: void 0,
        sourceViewBox: void 0,
      },
      tooltipItemPayloads: [],
      settings: {
        shared: void 0,
        trigger: `hover`,
        axisId: 0,
        active: !1,
        defaultIndex: void 0,
      },
    },
    reducers: {
      addTooltipEntrySettings: {
        reducer(e, t) {
          e.tooltipItemPayloads.push(hp(t.payload));
        },
        prepare: Up(),
      },
      removeTooltipEntrySettings: {
        reducer(e, t) {
          var n = up(e).tooltipItemPayloads.indexOf(hp(t.payload));
          n > -1 && e.tooltipItemPayloads.splice(n, 1);
        },
        prepare: Up(),
      },
      setTooltipSettingsState(e, t) {
        e.settings = t.payload;
      },
      setActiveMouseOverItemIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.keyboardInteraction.active = !1),
          (e.itemInteraction.hover.active = !0),
          (e.itemInteraction.hover.index = t.payload.activeIndex),
          (e.itemInteraction.hover.dataKey = t.payload.activeDataKey),
          (e.itemInteraction.hover.coordinate = t.payload.activeCoordinate));
      },
      mouseLeaveChart(e) {
        ((e.itemInteraction.hover.active = !1),
          (e.axisInteraction.hover.active = !1));
      },
      mouseLeaveItem(e) {
        e.itemInteraction.hover.active = !1;
      },
      setActiveClickItemIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.itemInteraction.click.active = !0),
          (e.keyboardInteraction.active = !1),
          (e.itemInteraction.click.index = t.payload.activeIndex),
          (e.itemInteraction.click.dataKey = t.payload.activeDataKey),
          (e.itemInteraction.click.coordinate = t.payload.activeCoordinate));
      },
      setMouseOverAxisIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.axisInteraction.hover.active = !0),
          (e.keyboardInteraction.active = !1),
          (e.axisInteraction.hover.index = t.payload.activeIndex),
          (e.axisInteraction.hover.dataKey = t.payload.activeDataKey),
          (e.axisInteraction.hover.coordinate = t.payload.activeCoordinate));
      },
      setMouseClickAxisIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.keyboardInteraction.active = !1),
          (e.axisInteraction.click.active = !0),
          (e.axisInteraction.click.index = t.payload.activeIndex),
          (e.axisInteraction.click.dataKey = t.payload.activeDataKey),
          (e.axisInteraction.click.coordinate = t.payload.activeCoordinate));
      },
      setSyncInteraction(e, t) {
        e.syncInteraction = t.payload;
      },
      setKeyboardInteraction(e, t) {
        ((e.keyboardInteraction.active = t.payload.active),
          (e.keyboardInteraction.index = t.payload.activeIndex),
          (e.keyboardInteraction.coordinate = t.payload.activeCoordinate),
          (e.keyboardInteraction.dataKey = t.payload.activeDataKey));
      },
    },
  }),
  {
    addTooltipEntrySettings: kO,
    removeTooltipEntrySettings: AO,
    setTooltipSettingsState: jO,
    setActiveMouseOverItemIndex: MO,
    mouseLeaveItem: NO,
    mouseLeaveChart: PO,
    setActiveClickItemIndex: FO,
    setMouseOverAxisIndex: IO,
    setMouseClickAxisIndex: LO,
    setSyncInteraction: RO,
    setKeyboardInteraction: zO,
  } = OO.actions,
  BO = OO.reducer;
function VO(e, t) {
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
function HO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? VO(Object(n), !0).forEach(function (t) {
          UO(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : VO(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function UO(e, t, n) {
  return (
    (t = WO(t)) in e
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
function WO(e) {
  var t = GO(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function GO(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function KO(e, t, n) {
  return t === `axis`
    ? n === `click`
      ? e.axisInteraction.click
      : e.axisInteraction.hover
    : n === `click`
      ? e.itemInteraction.click
      : e.itemInteraction.hover;
}
function qO(e) {
  return e.index != null;
}
var JO = (e, t, n, r) => {
    if (t == null) return DO;
    var i = KO(e, t, n);
    if (i == null) return DO;
    if (i.active) return i;
    if (e.keyboardInteraction.active) return e.keyboardInteraction;
    if (e.syncInteraction.active && e.syncInteraction.index != null)
      return e.syncInteraction;
    var a = e.settings.active === !0;
    if (qO(i)) {
      if (a) return HO(HO({}, i), {}, { active: !0 });
    } else if (r != null)
      return { active: !0, coordinate: void 0, dataKey: void 0, index: r };
    return HO(HO({}, DO), {}, { coordinate: i.coordinate });
  },
  YO = (e, t) => {
    var n = e?.index;
    if (n == null) return null;
    var r = Number(n);
    if (!Lg(r)) return n;
    var i = 0,
      a = 1 / 0;
    return (
      t.length > 0 && (a = t.length - 1), String(Math.max(i, Math.min(r, a)))
    );
  },
  XO = (e, t, n, r, i, a, o, s) => {
    if (a != null && s != null) {
      var c = o[0],
        l = c == null ? void 0 : s(c.positions, a);
      if (l != null) return l;
      var u = i?.[Number(a)];
      if (u)
        switch (n) {
          case `horizontal`:
            return { x: u.coordinate, y: (r.top + t) / 2 };
          default:
            return { x: (r.left + e) / 2, y: u.coordinate };
        }
    }
  },
  ZO = (e, t, n, r) => {
    if (t === `axis`) return e.tooltipItemPayloads;
    if (e.tooltipItemPayloads.length === 0) return [];
    var i =
      n === `hover`
        ? e.itemInteraction.hover.dataKey
        : e.itemInteraction.click.dataKey;
    return i == null && r != null
      ? [e.tooltipItemPayloads[0]]
      : e.tooltipItemPayloads.filter((e) => e.settings?.dataKey === i);
  },
  QO = (e) => e.options.tooltipPayloadSearcher,
  $O = (e) => e.tooltip;
function ek(e, t) {
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
function tk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ek(Object(n), !0).forEach(function (t) {
          nk(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ek(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function nk(e, t, n) {
  return (
    (t = rk(t)) in e
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
function rk(e) {
  var t = ik(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ik(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function ak(e, t) {
  return e ?? t;
}
var ok = (e, t, n, r, i, a, o) => {
    if (t != null && a != null) {
      var {
        chartData: s,
        computedData: c,
        dataStartIndex: l,
        dataEndIndex: u,
      } = n;
      return e.reduce((e, n) => {
        var { dataDefinedOnItem: d, settings: f } = n,
          p = ak(d, s),
          m = Array.isArray(p) ? wh(p, l, u) : p,
          h = f?.dataKey ?? r,
          g = f?.nameKey,
          _ =
            r && Array.isArray(m) && !Array.isArray(m[0]) && o === `axis`
              ? ku(m, r, i)
              : a(m, t, c, g);
        return (
          Array.isArray(_)
            ? _.forEach((t) => {
                var n = tk(
                  tk({}, f),
                  {},
                  { name: t.name, unit: t.unit, color: void 0, fill: void 0 },
                );
                e.push(
                  Xh({
                    tooltipEntrySettings: n,
                    dataKey: t.dataKey,
                    payload: t.payload,
                    value: Ah(t.payload, t.dataKey),
                    name: t.name,
                  }),
                );
              })
            : e.push(
                Xh({
                  tooltipEntrySettings: f,
                  dataKey: h,
                  payload: _,
                  value: Ah(_, h),
                  name: Ah(_, g) ?? f?.name,
                }),
              ),
          e
        );
      }, []);
    }
  },
  sk = J([oE, Y, kE, NT, iE], kD),
  ck = J(
    [
      J(
        [
          (e) => e.graphicalItems.cartesianItems,
          (e) => e.graphicalItems.polarItems,
        ],
        (e, t) => [...e, ...t],
      ),
      oE,
      J([iE, aE], AE),
    ],
    NE,
    { memoizeOptions: { resultEqualityCheck: dE } },
  ),
  lk = J([ck], (e) => e.filter(lE)),
  uk = J(
    [J([ck], RE, { memoizeOptions: { resultEqualityCheck: dE } }), eT],
    BE,
  ),
  dk = J([lk, eT, oE], cE),
  fk = J([uk, oE, ck], HE),
  pk = J([oE], eD),
  mk = J([pk, J([oE], (e) => e.allowDataOverflow)], aT),
  hk = J([J([dk, J([ck], (e) => e.filter(lE)), MT], XE), eT, iE, mk], QE),
  gk = J([uk, oE, J([ck], IE), iD, iE], sD, {
    memoizeOptions: { resultEqualityCheck: uE },
  }),
  _k = J([J([dD, iE, aE], fD), iE], vD),
  vk = J([J([mD, iE, aE], fD), iE], bD),
  yk = J(
    [
      oE,
      Y,
      uk,
      fk,
      MT,
      iE,
      J(
        [
          oE,
          pk,
          mk,
          hk,
          gk,
          J([_k, J([J([gD, iE, aE], fD), iE], SD), vk], oD),
          Y,
          iE,
        ],
        wD,
      ),
    ],
    DD,
  ),
  bk = J([oE, yk, J([yk, oE, sk], ND), iE], FD),
  xk = (e) => WD(e, iE(e), aE(e), !1),
  Sk = J([oE, xk], zT),
  Ck = J([oE, sk, bk, Sk], MD),
  wk = J(
    [Y, oE, sk, Ck, xk, J([Y, fk, oE, iE], lO), J([Y, fk, oE, iE], dO), iE],
    (e, t, n, r, i, a, o, s) => {
      if (t) {
        var { type: c } = t,
          l = Nh(e, s);
        if (r) {
          var u = n === `scaleBand` && r.bandwidth ? r.bandwidth() / 2 : 2,
            d = c === `category` && r.bandwidth ? r.bandwidth() / u : 0;
          return (
            (d =
              s === `angleAxis` && i != null && i?.length >= 2
                ? bu(i[0] - i[1]) * 2 * d
                : d),
            l && o
              ? o.map((e, t) => ({
                  coordinate: r(e) + d,
                  value: e,
                  index: t,
                  offset: d,
                }))
              : r
                  .domain()
                  .map((e, t) => ({
                    coordinate: r(e) + d,
                    value: a ? a[e] : e,
                    index: t,
                    offset: d,
                  }))
          );
        }
      }
    },
  ),
  Tk = J([bO, xO, EO], (e, t, n) => SO(n.shared, e, t)),
  Ek = (e) => e.tooltip.settings.trigger,
  Dk = (e) => e.tooltip.settings.defaultIndex,
  Ok = J([$O, Tk, Ek, Dk], JO),
  kk = J([Ok, uk], YO),
  Ak = J([wk, kk], TO),
  jk = J([Ok], (e) => {
    if (e) return e.dataKey;
  }),
  Mk = J([$O, Tk, Ek, Dk], ZO),
  Nk = J([Ok, J([tg, ng, Y, yg, wk, Dk, Mk, QO], XO)], (e, t) =>
    e != null && e.coordinate ? e.coordinate : t,
  ),
  Pk = J([Ok], (e) => e.active),
  Fk = J([J([Mk, kk, eT, sE, Ak, QO, Tk], ok)], (e) => {
    if (e != null) {
      var t = e.map((e) => e.payload).filter((e) => e != null);
      return Array.from(new Set(t));
    }
  });
function Ik(e, t) {
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
function Lk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ik(Object(n), !0).forEach(function (t) {
          Rk(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ik(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Rk(e, t, n) {
  return (
    (t = zk(t)) in e
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
function zk(e) {
  var t = Bk(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Bk(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Vk = () => q(oE),
  Hk = () => {
    var e = Vk(),
      t = q(wk),
      n = q(Ck);
    return Yh(Lk(Lk({}, e), {}, { scale: n }), t);
  },
  Uk = () => q(NT),
  Wk = (e, t) => t,
  Gk = (e, t, n) => n,
  Kk = (e, t, n, r) => r,
  qk = J(wk, (e) => (0, $d.default)(e, (e) => e.coordinate)),
  Jk = J([$O, Wk, Gk, Kk], JO),
  Yk = J([Jk, uk], YO),
  Xk = (e, t, n) => {
    if (t != null) {
      var r = $O(e);
      return t === `axis`
        ? n === `hover`
          ? r.axisInteraction.hover.dataKey
          : r.axisInteraction.click.dataKey
        : n === `hover`
          ? r.itemInteraction.hover.dataKey
          : r.itemInteraction.click.dataKey;
    }
  },
  Zk = J([$O, Wk, Gk, Kk], ZO),
  Qk = J([tg, ng, Y, yg, wk, Kk, Zk, QO], XO),
  $k = J([Jk, Qk], (e, t) => e.coordinate ?? t),
  eA = J(wk, Yk, TO),
  tA = J([Zk, Yk, eT, sE, eA, QO, Wk], ok),
  nA = J([Jk], (e) => ({ isActive: e.active, activeIndex: e.index })),
  rA = (e, t, n, r, i, a, o, s) => {
    if (e && t && r && i && a) {
      var c = Qh(e.chartX, e.chartY, t, n, s);
      if (c) {
        var l = jh(eg(c, t), o, a, r, i),
          u = $h(t, a, l, c);
        return { activeIndex: String(l), activeCoordinate: u };
      }
    }
  };
function iA() {
  return (
    (iA = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    iA.apply(null, arguments)
  );
}
function aA(e, t) {
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
function oA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? aA(Object(n), !0).forEach(function (t) {
          sA(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : aA(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function sA(e, t, n) {
  return (
    (t = cA(t)) in e
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
function cA(e) {
  var t = lA(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function lA(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function uA(e) {
  var {
      coordinate: t,
      payload: n,
      index: r,
      offset: i,
      tooltipAxisBandSize: a,
      layout: o,
      cursor: s,
      tooltipEventType: c,
      chartName: l,
    } = e,
    u = t,
    d = n,
    f = r;
  if (!s || !u || (l !== `ScatterChart` && c !== `axis`)) return null;
  var p, m;
  if (l === `ScatterChart`) ((p = u), (m = tv));
  else if (l === `BarChart`) ((p = nv(o, u, i, a)), (m = oy));
  else if (o === `radial`) {
    var { cx: h, cy: g, radius: _, startAngle: v, endAngle: y } = sy(u);
    ((p = {
      cx: h,
      cy: g,
      startAngle: v,
      endAngle: y,
      innerRadius: _,
      outerRadius: _,
    }),
      (m = my));
  } else ((p = { points: hy(o, u, i) }), (m = W_));
  var b = typeof s == `object` && `className` in s ? s.className : void 0,
    x = oA(
      oA(oA(oA({ stroke: `#ccc`, pointerEvents: `none` }, i), p), Ac(s)),
      {},
      {
        payload: d,
        payloadIndex: f,
        className: U(`recharts-tooltip-cursor`, b),
      },
    );
  return (0, R.isValidElement)(s)
    ? (0, R.cloneElement)(s, x)
    : (0, R.createElement)(m, x);
}
function dA(e) {
  var t = Hk(),
    n = Qg(),
    r = n_(),
    i = Uk();
  return R.createElement(
    uA,
    iA({}, e, {
      coordinate: e.coordinate,
      index: e.index,
      payload: e.payload,
      offset: n,
      layout: r,
      tooltipAxisBandSize: t,
      chartName: i,
    }),
  );
}
var fA = (0, R.createContext)(null),
  pA = () => (0, R.useContext)(fA),
  mA = e(
    n((e, t) => {
      var n = Object.prototype.hasOwnProperty,
        r = `~`;
      function i() {}
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
      function a(e, t, n) {
        ((this.fn = e), (this.context = t), (this.once = n || !1));
      }
      function o(e, t, n, i, o) {
        if (typeof n != `function`)
          throw TypeError(`The listener must be a function`);
        var s = new a(n, i || e, o),
          c = r ? r + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], s])
              : e._events[c].push(s)
            : ((e._events[c] = s), e._eventsCount++),
          e
        );
      }
      function s(e, t) {
        --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
      }
      function c() {
        ((this._events = new i()), (this._eventsCount = 0));
      }
      ((c.prototype.eventNames = function () {
        var e = [],
          t,
          i;
        if (this._eventsCount === 0) return e;
        for (i in (t = this._events))
          n.call(t, i) && e.push(r ? i.slice(1) : i);
        return Object.getOwnPropertySymbols
          ? e.concat(Object.getOwnPropertySymbols(t))
          : e;
      }),
        (c.prototype.listeners = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var i = 0, a = n.length, o = Array(a); i < a; i++)
            o[i] = n[i].fn;
          return o;
        }),
        (c.prototype.listenerCount = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (c.prototype.emit = function (e, t, n, i, a, o) {
          var s = r ? r + e : e;
          if (!this._events[s]) return !1;
          var c = this._events[s],
            l = arguments.length,
            u,
            d;
          if (c.fn) {
            switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
              case 1:
                return (c.fn.call(c.context), !0);
              case 2:
                return (c.fn.call(c.context, t), !0);
              case 3:
                return (c.fn.call(c.context, t, n), !0);
              case 4:
                return (c.fn.call(c.context, t, n, i), !0);
              case 5:
                return (c.fn.call(c.context, t, n, i, a), !0);
              case 6:
                return (c.fn.call(c.context, t, n, i, a, o), !0);
            }
            for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
            c.fn.apply(c.context, u);
          } else {
            var f = c.length,
              p;
            for (d = 0; d < f; d++)
              switch (
                (c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)
              ) {
                case 1:
                  c[d].fn.call(c[d].context);
                  break;
                case 2:
                  c[d].fn.call(c[d].context, t);
                  break;
                case 3:
                  c[d].fn.call(c[d].context, t, n);
                  break;
                case 4:
                  c[d].fn.call(c[d].context, t, n, i);
                  break;
                default:
                  if (!u)
                    for (p = 1, u = Array(l - 1); p < l; p++)
                      u[p - 1] = arguments[p];
                  c[d].fn.apply(c[d].context, u);
              }
          }
          return !0;
        }),
        (c.prototype.on = function (e, t, n) {
          return o(this, e, t, n, !1);
        }),
        (c.prototype.once = function (e, t, n) {
          return o(this, e, t, n, !0);
        }),
        (c.prototype.removeListener = function (e, t, n, i) {
          var a = r ? r + e : e;
          if (!this._events[a]) return this;
          if (!t) return (s(this, a), this);
          var o = this._events[a];
          if (o.fn)
            o.fn !== t ||
              (i && !o.once) ||
              (n && o.context !== n) ||
              s(this, a);
          else {
            for (var c = 0, l = [], u = o.length; c < u; c++)
              (o[c].fn !== t ||
                (i && !o[c].once) ||
                (n && o[c].context !== n)) &&
                l.push(o[c]);
            l.length
              ? (this._events[a] = l.length === 1 ? l[0] : l)
              : s(this, a);
          }
          return this;
        }),
        (c.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = r ? r + e : e), this._events[t] && s(this, t))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (c.prototype.off = c.prototype.removeListener),
        (c.prototype.addListener = c.prototype.on),
        (c.prefixed = r),
        (c.EventEmitter = c),
        t !== void 0 && (t.exports = c));
    })(),
    1,
  ).default,
  hA = new mA(),
  gA = `recharts.syncEvent.tooltip`,
  _A = `recharts.syncEvent.brush`;
function vA(e, t) {
  if (t) {
    var n = Number.parseInt(t, 10);
    if (!xu(n)) return e?.[n];
  }
}
var yA = pm({
    name: `options`,
    initialState: {
      chartName: ``,
      tooltipPayloadSearcher: void 0,
      eventEmitter: void 0,
      defaultTooltipEventType: `axis`,
    },
    reducers: {
      createEventEmitter: (e) => {
        e.eventEmitter ??= Symbol(`rechartsEventEmitter`);
      },
    },
  }),
  bA = yA.reducer,
  { createEventEmitter: xA } = yA.actions;
function SA(e) {
  return e.tooltip.syncInteraction;
}
var CA = pm({
    name: `chartData`,
    initialState: {
      chartData: void 0,
      computedData: void 0,
      dataStartIndex: 0,
      dataEndIndex: 0,
    },
    reducers: {
      setChartData(e, t) {
        ((e.chartData = t.payload),
          t.payload == null
            ? ((e.dataStartIndex = 0), (e.dataEndIndex = 0))
            : t.payload.length > 0 &&
              e.dataEndIndex !== t.payload.length - 1 &&
              (e.dataEndIndex = t.payload.length - 1));
      },
      setComputedData(e, t) {
        e.computedData = t.payload;
      },
      setDataStartEndIndexes(e, t) {
        var { startIndex: n, endIndex: r } = t.payload;
        (n != null && (e.dataStartIndex = n),
          r != null && (e.dataEndIndex = r));
      },
    },
  }),
  {
    setChartData: wA,
    setDataStartEndIndexes: TA,
    setComputedData: EA,
  } = CA.actions,
  DA = CA.reducer,
  OA = [`x`, `y`];
function kA(e, t) {
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
function AA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? kA(Object(n), !0).forEach(function (t) {
          jA(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : kA(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function jA(e, t, n) {
  return (
    (t = MA(t)) in e
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
function MA(e) {
  var t = NA(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function NA(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function PA(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = FA(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function FA(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var IA = () => {};
function LA() {
  var e = q(PT),
    t = q(IT),
    n = K(),
    r = q(FT),
    i = q(wk),
    a = n_(),
    o = Xg(),
    s = q((e) => e.rootProps.className);
  (0, R.useEffect)(() => {
    if (e == null) return IA;
    var s = (s, c, l) => {
      if (t !== l && e === s) {
        if (r === `index`) {
          var u;
          if (
            o &&
            c != null &&
            (u = c.payload) != null &&
            u.coordinate &&
            c.payload.sourceViewBox
          ) {
            var d = c.payload.coordinate,
              { x: f, y: p } = d,
              m = PA(d, OA),
              { x: h, y: g, width: _, height: v } = c.payload.sourceViewBox,
              y = AA(
                AA({}, m),
                {},
                {
                  x: o.x + (_ ? (f - h) / _ : 0) * o.width,
                  y: o.y + (v ? (p - g) / v : 0) * o.height,
                },
              );
            n(
              AA(
                AA({}, c),
                {},
                { payload: AA(AA({}, c.payload), {}, { coordinate: y }) },
              ),
            );
          } else n(c);
        } else if (i != null) {
          var b;
          typeof r == `function`
            ? (b =
                i[
                  r(i, {
                    activeTooltipIndex:
                      c.payload.index == null
                        ? void 0
                        : Number(c.payload.index),
                    isTooltipActive: c.payload.active,
                    activeIndex:
                      c.payload.index == null
                        ? void 0
                        : Number(c.payload.index),
                    activeLabel: c.payload.label,
                    activeDataKey: c.payload.dataKey,
                    activeCoordinate: c.payload.coordinate,
                  })
                ])
            : r === `value` &&
              (b = i.find((e) => String(e.value) === c.payload.label));
          var { coordinate: x } = c.payload;
          if (b == null || c.payload.active === !1 || x == null || o == null)
            n(
              RO({
                active: !1,
                coordinate: void 0,
                dataKey: void 0,
                index: null,
                label: void 0,
                sourceViewBox: void 0,
              }),
            );
          else {
            var { x: S, y: C } = x,
              w = Math.min(S, o.x + o.width),
              T = Math.min(C, o.y + o.height),
              E = {
                x: a === `horizontal` ? b.coordinate : w,
                y: a === `horizontal` ? T : b.coordinate,
              };
            n(
              RO({
                active: c.payload.active,
                coordinate: E,
                dataKey: c.payload.dataKey,
                index: String(b.index),
                label: c.payload.label,
                sourceViewBox: c.payload.sourceViewBox,
              }),
            );
          }
        }
      }
    };
    return (
      hA.on(gA, s),
      () => {
        hA.off(gA, s);
      }
    );
  }, [s, n, t, e, r, i, a, o]);
}
function RA() {
  var e = q(PT),
    t = q(IT),
    n = K();
  (0, R.useEffect)(() => {
    if (e == null) return IA;
    var r = (r, i, a) => {
      t !== a && e === r && n(TA(i));
    };
    return (
      hA.on(_A, r),
      () => {
        hA.off(_A, r);
      }
    );
  }, [n, t, e]);
}
function zA() {
  var e = K();
  ((0, R.useEffect)(() => {
    e(xA());
  }, [e]),
    LA(),
    RA());
}
function BA(e, t, n, r, i, a) {
  var o = q((n) => Xk(n, e, t)),
    s = q(IT),
    c = q(PT),
    l = q(FT),
    u = q(SA)?.active,
    d = Xg();
  (0, R.useEffect)(() => {
    if (!u && c != null && s != null) {
      var e = RO({
        active: a,
        coordinate: n,
        dataKey: o,
        index: i,
        label: typeof r == `number` ? String(r) : r,
        sourceViewBox: d,
      });
      hA.emit(gA, c, e, s);
    }
  }, [u, n, o, i, r, s, c, l, a, d]);
}
function VA(e, t) {
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
function HA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? VA(Object(n), !0).forEach(function (t) {
          UA(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : VA(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function UA(e, t, n) {
  return (
    (t = WA(t)) in e
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
function WA(e) {
  var t = GA(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function GA(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function KA(e) {
  return e.dataKey;
}
function qA(e, t) {
  return R.isValidElement(e)
    ? R.cloneElement(e, t)
    : typeof e == `function`
      ? R.createElement(e, t)
      : R.createElement(__, t);
}
var JA = [],
  YA = {
    allowEscapeViewBox: { x: !1, y: !1 },
    animationDuration: 400,
    animationEasing: `ease`,
    axisId: 0,
    contentStyle: {},
    cursor: !0,
    filterNull: !0,
    isAnimationActive: !A_.isSsr,
    itemSorter: `name`,
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: { x: !1, y: !1 },
    separator: ` : `,
    trigger: `hover`,
    useTranslate3d: !1,
    wrapperStyle: {},
  };
function XA(e) {
  var t = cv(e, YA),
    {
      active: n,
      allowEscapeViewBox: r,
      animationDuration: i,
      animationEasing: a,
      content: o,
      filterNull: s,
      isAnimationActive: c,
      offset: l,
      payloadUniqBy: u,
      position: d,
      reverseDirection: f,
      useTranslate3d: p,
      wrapperStyle: m,
      cursor: h,
      shared: g,
      trigger: _,
      defaultIndex: v,
      portal: y,
      axisId: b,
    } = t,
    x = K(),
    S = typeof v == `number` ? String(v) : v;
  (0, R.useEffect)(() => {
    x(jO({ shared: g, trigger: _, axisId: b, active: n, defaultIndex: S }));
  }, [x, g, _, b, n, S]);
  var C = Xg(),
    w = j_(),
    T = wO(g),
    { activeIndex: E, isActive: D } = q((e) => nA(e, T, _, S)),
    O = q((e) => tA(e, T, _, S)),
    k = q((e) => eA(e, T, _, S)),
    ee = q((e) => $k(e, T, _, S)),
    te = O,
    ne = pA(),
    A = n ?? D,
    [re, ie] = af([te, A]),
    ae = T === `axis` ? k : void 0;
  BA(T, _, ee, ae, E, A);
  var oe = y ?? ne;
  if (oe == null) return null;
  var se = te ?? JA;
  (A || (se = JA),
    s &&
      se.length &&
      (se = wd(
        te.filter((e) => e.value != null && (e.hide !== !0 || t.includeHidden)),
        u,
        KA,
      )));
  var ce = se.length > 0,
    le = R.createElement(
      k_,
      {
        allowEscapeViewBox: r,
        animationDuration: i,
        animationEasing: a,
        isAnimationActive: c,
        active: A,
        coordinate: ee,
        hasPayload: ce,
        offset: l,
        position: d,
        reverseDirection: f,
        useTranslate3d: p,
        viewBox: C,
        wrapperStyle: m,
        lastBoundingBox: re,
        innerRef: ie,
        hasPortalFromProps: !!y,
      },
      qA(
        o,
        HA(
          HA({}, t),
          {},
          {
            payload: se,
            label: ae,
            active: A,
            coordinate: ee,
            accessibilityLayer: w,
          },
        ),
      ),
    );
  return R.createElement(
    R.Fragment,
    null,
    (0, jr.createPortal)(le, oe),
    A &&
      R.createElement(dA, {
        cursor: h,
        tooltipEventType: T,
        coordinate: ee,
        payload: te,
        index: E,
      }),
  );
}
var ZA = (e) => null;
ZA.displayName = `Cell`;
function QA(e, t, n) {
  return (
    (t = $A(t)) in e
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
function $A(e) {
  var t = ej(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ej(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var tj = class {
  constructor(e) {
    (QA(this, `cache`, new Map()), (this.maxSize = e));
  }
  get(e) {
    var t = this.cache.get(e);
    return (t !== void 0 && (this.cache.delete(e), this.cache.set(e, t)), t);
  }
  set(e, t) {
    if (this.cache.has(e)) this.cache.delete(e);
    else if (this.cache.size >= this.maxSize) {
      var n = this.cache.keys().next().value;
      this.cache.delete(n);
    }
    this.cache.set(e, t);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
};
function nj(e, t) {
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
function rj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? nj(Object(n), !0).forEach(function (t) {
          ij(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : nj(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ij(e, t, n) {
  return (
    (t = aj(t)) in e
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
function aj(e) {
  var t = oj(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function oj(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var sj = rj({}, { cacheSize: 2e3, enableCache: !0 }),
  cj = new tj(sj.cacheSize),
  lj = {
    position: `absolute`,
    top: `-20000px`,
    left: 0,
    padding: 0,
    margin: 0,
    border: `none`,
    whiteSpace: `pre`,
  },
  uj = `recharts_measurement_span`;
function dj(e, t) {
  return `${e}|${t.fontSize || ``}|${t.fontFamily || ``}|${t.fontWeight || ``}|${t.fontStyle || ``}|${t.letterSpacing || ``}|${t.textTransform || ``}`;
}
var fj = (e, t) => {
    try {
      var n = document.getElementById(uj);
      (n ||
        ((n = document.createElement(`span`)),
        n.setAttribute(`id`, uj),
        n.setAttribute(`aria-hidden`, `true`),
        document.body.appendChild(n)),
        Object.assign(n.style, lj, t),
        (n.textContent = `${e}`));
      var r = n.getBoundingClientRect();
      return { width: r.width, height: r.height };
    } catch {
      return { width: 0, height: 0 };
    }
  },
  pj = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (e == null || A_.isSsr) return { width: 0, height: 0 };
    var n = sj.measureText || fj;
    if (!sj.enableCache) return n(e, t);
    var r = dj(e, t),
      i = cj.get(r);
    if (i) return i;
    var a = n(e, t);
    return (cj.set(r, a), a);
  },
  mj = (e) => {
    var t = rj(rj({}, sj), e);
    (t.cacheSize !== sj.cacheSize && (cj = new tj(t.cacheSize)), (sj = t));
  },
  hj = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  gj = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  _j = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  vj = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  yj = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 16,
    in: 96,
    Q: 96 / 101.6,
    px: 1,
  },
  bj = Object.keys(yj),
  xj = `NaN`;
function Sj(e, t) {
  return e * yj[t];
}
var Cj = class e {
  static parse(t) {
    var [, n, r] = vj.exec(t) ?? [];
    return new e(parseFloat(n), r ?? ``);
  }
  constructor(e, t) {
    ((this.num = e),
      (this.unit = t),
      (this.num = e),
      (this.unit = t),
      xu(e) && (this.unit = ``),
      t !== `` && !_j.test(t) && ((this.num = NaN), (this.unit = ``)),
      bj.includes(t) && ((this.num = Sj(e, t)), (this.unit = `px`)));
  }
  add(t) {
    return this.unit === t.unit
      ? new e(this.num + t.num, this.unit)
      : new e(NaN, ``);
  }
  subtract(t) {
    return this.unit === t.unit
      ? new e(this.num - t.num, this.unit)
      : new e(NaN, ``);
  }
  multiply(t) {
    return this.unit !== `` && t.unit !== `` && this.unit !== t.unit
      ? new e(NaN, ``)
      : new e(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== `` && t.unit !== `` && this.unit !== t.unit
      ? new e(NaN, ``)
      : new e(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return `${this.num}${this.unit}`;
  }
  isNaN() {
    return xu(this.num);
  }
};
function wj(e) {
  if (e.includes(xj)) return xj;
  for (var t = e; t.includes(`*`) || t.includes(`/`);) {
    var [, n, r, i] = hj.exec(t) ?? [],
      a = Cj.parse(n ?? ``),
      o = Cj.parse(i ?? ``),
      s = r === `*` ? a.multiply(o) : a.divide(o);
    if (s.isNaN()) return xj;
    t = t.replace(hj, s.toString());
  }
  for (; t.includes(`+`) || /.-\d+(?:\.\d+)?/.test(t);) {
    var [, c, l, u] = gj.exec(t) ?? [],
      d = Cj.parse(c ?? ``),
      f = Cj.parse(u ?? ``),
      p = l === `+` ? d.add(f) : d.subtract(f);
    if (p.isNaN()) return xj;
    t = t.replace(gj, p.toString());
  }
  return t;
}
var Tj = /\(([^()]*)\)/;
function Ej(e) {
  for (var t = e, n; (n = Tj.exec(t)) != null;) {
    var [, r] = n;
    t = t.replace(Tj, wj(r));
  }
  return t;
}
function Dj(e) {
  var t = e.replace(/\s+/g, ``);
  return ((t = Ej(t)), (t = wj(t)), t);
}
function Oj(e) {
  try {
    return Dj(e);
  } catch {
    return xj;
  }
}
function kj(e) {
  var t = Oj(e.slice(5, -1));
  return t === xj ? `` : t;
}
var Aj = [
    `x`,
    `y`,
    `lineHeight`,
    `capHeight`,
    `scaleToFit`,
    `textAnchor`,
    `verticalAnchor`,
    `fill`,
  ],
  jj = [`dx`, `dy`, `angle`, `className`, `breakAll`];
function Mj() {
  return (
    (Mj = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Mj.apply(null, arguments)
  );
}
function Nj(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Pj(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Pj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Fj = /[ \f\n\r\t\v\u2028\u2029]+/,
  Ij = (e) => {
    var { children: t, breakAll: n, style: r } = e;
    try {
      var i = [];
      return (
        Au(t) || (i = n ? t.toString().split(``) : t.toString().split(Fj)),
        {
          wordsWithComputedWidth: i.map((e) => ({
            word: e,
            width: pj(e, r).width,
          })),
          spaceWidth: n ? 0 : pj(`\xA0`, r).width,
        }
      );
    } catch {
      return null;
    }
  },
  Lj = (e, t, n, r, i) => {
    var { maxLines: a, children: o, style: s, breakAll: c } = e,
      l = G(a),
      u = o,
      d = function () {
        return (
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
        ).reduce((e, t) => {
          var { word: a, width: o } = t,
            s = e[e.length - 1];
          if (s && (r == null || i || s.width + o + n < Number(r)))
            (s.words.push(a), (s.width += o + n));
          else {
            var c = { words: [a], width: o };
            e.push(c);
          }
          return e;
        }, []);
      },
      f = d(t),
      p = (e) => e.reduce((e, t) => (e.width > t.width ? e : t));
    if (!l || i || !(f.length > a || p(f).width > Number(r))) return f;
    for (
      var m = `…`,
        h = (e) => {
          var t = Ij({
              breakAll: c,
              style: s,
              children: u.slice(0, e) + m,
            }).wordsWithComputedWidth,
            n = d(t);
          return [n.length > a || p(n).width > Number(r), n];
        },
        g = 0,
        _ = u.length - 1,
        v = 0,
        y;
      g <= _ && v <= u.length - 1;
    ) {
      var b = Math.floor((g + _) / 2),
        [x, S] = h(b - 1),
        [C] = h(b);
      if ((!x && !C && (g = b + 1), x && C && (_ = b - 1), !x && C)) {
        y = S;
        break;
      }
      v++;
    }
    return y || f;
  },
  Rj = (e) => [{ words: Au(e) ? [] : e.toString().split(Fj) }],
  zj = (e) => {
    var {
      width: t,
      scaleToFit: n,
      children: r,
      style: i,
      breakAll: a,
      maxLines: o,
    } = e;
    if ((t || n) && !A_.isSsr) {
      var s,
        c,
        l = Ij({ breakAll: a, children: r, style: i });
      if (l) {
        var { wordsWithComputedWidth: u, spaceWidth: d } = l;
        ((s = u), (c = d));
      } else return Rj(r);
      return Lj(
        { breakAll: a, children: r, maxLines: o, style: i },
        s,
        c,
        t,
        n,
      );
    }
    return Rj(r);
  },
  Bj = `#808080`,
  Vj = (0, R.forwardRef)((e, t) => {
    var {
        x: n = 0,
        y: r = 0,
        lineHeight: i = `1em`,
        capHeight: a = `0.71em`,
        scaleToFit: o = !1,
        textAnchor: s = `start`,
        verticalAnchor: c = `end`,
        fill: l = Bj,
      } = e,
      u = Nj(e, Aj),
      d = (0, R.useMemo)(
        () =>
          zj({
            breakAll: u.breakAll,
            children: u.children,
            maxLines: u.maxLines,
            scaleToFit: o,
            style: u.style,
            width: u.width,
          }),
        [u.breakAll, u.children, u.maxLines, o, u.style, u.width],
      ),
      { dx: f, dy: p, angle: m, className: h, breakAll: g } = u,
      _ = Nj(u, jj);
    if (!Cu(n) || !Cu(r) || d.length === 0) return null;
    var v = n + (G(f) ? f : 0),
      y = r + (G(p) ? p : 0),
      b;
    switch (c) {
      case `start`:
        b = kj(`calc(${a})`);
        break;
      case `middle`:
        b = kj(`calc(${(d.length - 1) / 2} * -${i} + (${a} / 2))`);
        break;
      default:
        b = kj(`calc(${d.length - 1} * -${i})`);
    }
    var x = [];
    if (o) {
      var S = d[0].width,
        { width: C } = u;
      x.push(`scale(${G(C) ? C / S : 1})`);
    }
    return (
      m && x.push(`rotate(${m}, ${v}, ${y})`),
      x.length && (_.transform = x.join(` `)),
      R.createElement(
        `text`,
        Mj({}, jc(_), {
          ref: t,
          x: v,
          y,
          className: U(`recharts-text`, h),
          textAnchor: s,
          fill: l.includes(`url`) ? Bj : l,
        }),
        d.map((e, t) => {
          var n = e.words.join(g ? `` : ` `);
          return R.createElement(
            `tspan`,
            { x: v, dy: t === 0 ? b : i, key: `${n}-${t}` },
            n,
          );
        }),
      )
    );
  });
Vj.displayName = `Text`;
var Hj = [`labelRef`];
function Uj(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Wj(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Wj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Gj(e, t) {
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
function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Gj(Object(n), !0).forEach(function (t) {
          Kj(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Gj(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Kj(e, t, n) {
  return (
    (t = qj(t)) in e
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
function qj(e) {
  var t = Jj(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Jj(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Yj() {
  return (
    (Yj = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Yj.apply(null, arguments)
  );
}
var Xj = (0, R.createContext)(null),
  Zj = (e) => {
    var { x: t, y: n, width: r, height: i, children: a } = e,
      o = (0, R.useMemo)(
        () => ({ x: t, y: n, width: r, height: i }),
        [t, n, r, i],
      );
    return R.createElement(Xj.Provider, { value: o }, a);
  },
  Qj = () => {
    var e = (0, R.useContext)(Xj),
      t = Xg();
    return e || t;
  },
  $j = (0, R.createContext)(null),
  eM = () => {
    var e = (0, R.useContext)($j),
      t = q(eE);
    return e || t;
  },
  tM = (e) => {
    var { value: t, formatter: n } = e,
      r = Au(e.children) ? t : e.children;
    return typeof n == `function` ? n(r) : r;
  },
  nM = (e) => e != null && typeof e == `function`,
  rM = (e, t) => bu(t - e) * Math.min(Math.abs(t - e), 360),
  iM = (e, t, n, r, i) => {
    var { offset: a, className: o } = e,
      {
        cx: s,
        cy: c,
        innerRadius: l,
        outerRadius: u,
        startAngle: d,
        endAngle: f,
        clockWise: p,
      } = i,
      m = (l + u) / 2,
      h = rM(d, f),
      g = h >= 0 ? 1 : -1,
      _,
      v;
    switch (t) {
      case `insideStart`:
        ((_ = d + g * a), (v = p));
        break;
      case `insideEnd`:
        ((_ = f - g * a), (v = !p));
        break;
      case `end`:
        ((_ = f + g * a), (v = p));
        break;
      default:
        throw Error(`Unsupported position ${t}`);
    }
    v = h <= 0 ? v : !v;
    var y = gh(s, c, m, _),
      b = gh(s, c, m, _ + (v ? 1 : -1) * 359),
      x = `M${y.x},${y.y}
    A${m},${m},0,1,${+!v},
    ${b.x},${b.y}`,
      S = Au(e.id) ? Tu(`recharts-radial-line-`) : e.id;
    return R.createElement(
      `text`,
      Yj({}, r, {
        dominantBaseline: `central`,
        className: U(`recharts-radial-bar-label`, o),
      }),
      R.createElement(`defs`, null, R.createElement(`path`, { id: S, d: x })),
      R.createElement(`textPath`, { xlinkHref: `#${S}` }, n),
    );
  },
  aM = (e, t, n) => {
    var {
        cx: r,
        cy: i,
        innerRadius: a,
        outerRadius: o,
        startAngle: s,
        endAngle: c,
      } = e,
      l = (s + c) / 2;
    if (n === `outside`) {
      var { x: u, y: d } = gh(r, i, o + t, l);
      return {
        x: u,
        y: d,
        textAnchor: u >= r ? `start` : `end`,
        verticalAnchor: `middle`,
      };
    }
    if (n === `center`)
      return { x: r, y: i, textAnchor: `middle`, verticalAnchor: `middle` };
    if (n === `centerTop`)
      return { x: r, y: i, textAnchor: `middle`, verticalAnchor: `start` };
    if (n === `centerBottom`)
      return { x: r, y: i, textAnchor: `middle`, verticalAnchor: `end` };
    var { x: f, y: p } = gh(r, i, (a + o) / 2, l);
    return { x: f, y: p, textAnchor: `middle`, verticalAnchor: `middle` };
  },
  oM = (e) => `cx` in e && G(e.cx),
  sM = (e, t) => {
    var { parentViewBox: n, offset: r, position: i } = e,
      a;
    n != null && !oM(n) && (a = n);
    var { x: o, y: s, width: c, height: l } = t,
      u = l >= 0 ? 1 : -1,
      d = u * r,
      f = u > 0 ? `end` : `start`,
      p = u > 0 ? `start` : `end`,
      m = c >= 0 ? 1 : -1,
      h = m * r,
      g = m > 0 ? `end` : `start`,
      _ = m > 0 ? `start` : `end`;
    if (i === `top`)
      return Q(
        Q(
          {},
          {
            x: o + c / 2,
            y: s - u * r,
            textAnchor: `middle`,
            verticalAnchor: f,
          },
        ),
        a ? { height: Math.max(s - a.y, 0), width: c } : {},
      );
    if (i === `bottom`)
      return Q(
        Q(
          {},
          {
            x: o + c / 2,
            y: s + l + d,
            textAnchor: `middle`,
            verticalAnchor: p,
          },
        ),
        a ? { height: Math.max(a.y + a.height - (s + l), 0), width: c } : {},
      );
    if (i === `left`) {
      var v = {
        x: o - h,
        y: s + l / 2,
        textAnchor: g,
        verticalAnchor: `middle`,
      };
      return Q(Q({}, v), a ? { width: Math.max(v.x - a.x, 0), height: l } : {});
    }
    if (i === `right`) {
      var y = {
        x: o + c + h,
        y: s + l / 2,
        textAnchor: _,
        verticalAnchor: `middle`,
      };
      return Q(
        Q({}, y),
        a ? { width: Math.max(a.x + a.width - y.x, 0), height: l } : {},
      );
    }
    var b = a ? { width: c, height: l } : {};
    return i === `insideLeft`
      ? Q(
          { x: o + h, y: s + l / 2, textAnchor: _, verticalAnchor: `middle` },
          b,
        )
      : i === `insideRight`
        ? Q(
            {
              x: o + c - h,
              y: s + l / 2,
              textAnchor: g,
              verticalAnchor: `middle`,
            },
            b,
          )
        : i === `insideTop`
          ? Q(
              {
                x: o + c / 2,
                y: s + d,
                textAnchor: `middle`,
                verticalAnchor: p,
              },
              b,
            )
          : i === `insideBottom`
            ? Q(
                {
                  x: o + c / 2,
                  y: s + l - d,
                  textAnchor: `middle`,
                  verticalAnchor: f,
                },
                b,
              )
            : i === `insideTopLeft`
              ? Q({ x: o + h, y: s + d, textAnchor: _, verticalAnchor: p }, b)
              : i === `insideTopRight`
                ? Q(
                    {
                      x: o + c - h,
                      y: s + d,
                      textAnchor: g,
                      verticalAnchor: p,
                    },
                    b,
                  )
                : i === `insideBottomLeft`
                  ? Q(
                      {
                        x: o + h,
                        y: s + l - d,
                        textAnchor: _,
                        verticalAnchor: f,
                      },
                      b,
                    )
                  : i === `insideBottomRight`
                    ? Q(
                        {
                          x: o + c - h,
                          y: s + l - d,
                          textAnchor: g,
                          verticalAnchor: f,
                        },
                        b,
                      )
                    : i &&
                        typeof i == `object` &&
                        (G(i.x) || Su(i.x)) &&
                        (G(i.y) || Su(i.y))
                      ? Q(
                          {
                            x: o + Eu(i.x, c),
                            y: s + Eu(i.y, l),
                            textAnchor: `end`,
                            verticalAnchor: `end`,
                          },
                          b,
                        )
                      : Q(
                          {
                            x: o + c / 2,
                            y: s + l / 2,
                            textAnchor: `middle`,
                            verticalAnchor: `middle`,
                          },
                          b,
                        );
  },
  cM = { offset: 5 };
function lM(e) {
  var t = cv(e, cM),
    {
      viewBox: n,
      position: r,
      value: i,
      children: a,
      content: o,
      className: s = ``,
      textBreakAll: c,
      labelRef: l,
    } = t,
    u = eM(),
    d = Qj(),
    f = n || (r === `center` ? d : (u ?? d));
  if (
    !f ||
    (Au(i) && Au(a) && !(0, R.isValidElement)(o) && typeof o != `function`)
  )
    return null;
  var p = Q(Q({}, t), {}, { viewBox: f });
  if ((0, R.isValidElement)(o)) {
    var { labelRef: m } = p,
      h = Uj(p, Hj);
    return (0, R.cloneElement)(o, h);
  }
  var g;
  if (typeof o == `function`) {
    if (((g = (0, R.createElement)(o, p)), (0, R.isValidElement)(g))) return g;
  } else g = tM(t);
  var _ = oM(f),
    v = jc(t);
  if (_ && (r === `insideStart` || r === `insideEnd` || r === `end`))
    return iM(t, r, g, v, f);
  var y = _ ? aM(f, t.offset, t.position) : sM(t, f);
  return R.createElement(
    Vj,
    Yj({ ref: l, className: U(`recharts-label`, s) }, v, y, { breakAll: c }),
    g,
  );
}
lM.displayName = `Label`;
var uM = (e, t, n) => {
  if (!e) return null;
  var r = { viewBox: t, labelRef: n };
  return e === !0
    ? R.createElement(lM, Yj({ key: `label-implicit` }, r))
    : Cu(e)
      ? R.createElement(lM, Yj({ key: `label-implicit`, value: e }, r))
      : (0, R.isValidElement)(e)
        ? e.type === lM
          ? (0, R.cloneElement)(e, Q({ key: `label-implicit` }, r))
          : R.createElement(lM, Yj({ key: `label-implicit`, content: e }, r))
        : nM(e)
          ? R.createElement(lM, Yj({ key: `label-implicit`, content: e }, r))
          : e && typeof e == `object`
            ? R.createElement(lM, Yj({}, e, { key: `label-implicit` }, r))
            : null;
};
function dM(e) {
  var { label: t, labelRef: n } = e;
  return uM(t, Qj(), n) || null;
}
var fM = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e[e.length - 1];
    }
    e.last = t;
  }),
  pM = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Array.isArray(e) ? e : Array.from(e);
    }
    e.toArray = t;
  }),
  mM = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = fM(),
      n = pM(),
      r = $u();
    function i(e) {
      if (r.isArrayLike(e)) return t.last(n.toArray(e));
    }
    e.last = i;
  }),
  hM = n((e, t) => {
    t.exports = mM().last;
  }),
  gM = e(hM()),
  _M = [`valueAccessor`],
  vM = [`dataKey`, `clockWise`, `id`, `textBreakAll`];
function yM() {
  return (
    (yM = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yM.apply(null, arguments)
  );
}
function bM(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = xM(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function xM(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var SM = (e) => (Array.isArray(e.value) ? (0, gM.default)(e.value) : e.value),
  CM = (0, R.createContext)(void 0),
  wM = CM.Provider,
  TM = (0, R.createContext)(void 0),
  EM = TM.Provider;
function DM() {
  return (0, R.useContext)(CM);
}
function OM() {
  return (0, R.useContext)(TM);
}
function kM(e) {
  var { valueAccessor: t = SM } = e,
    n = bM(e, _M),
    { dataKey: r, clockWise: i, id: a, textBreakAll: o } = n,
    s = bM(n, vM),
    c = DM(),
    l = OM(),
    u = c || l;
  return !u || !u.length
    ? null
    : R.createElement(
        Hc,
        { className: `recharts-label-list` },
        u.map((e, i) => {
          var c = Au(r) ? t(e, i) : Ah(e && e.payload, r),
            l = Au(a) ? {} : { id: `${a}-${i}` };
          return R.createElement(
            lM,
            yM({ key: `label-${i}` }, jc(e), s, l, {
              fill: n.fill ?? e.fill,
              parentViewBox: e.parentViewBox,
              value: c,
              textBreakAll: o,
              viewBox: e.viewBox,
              index: i,
            }),
          );
        }),
      );
}
kM.displayName = `LabelList`;
function AM(e) {
  var { label: t } = e;
  return t
    ? t === !0
      ? R.createElement(kM, { key: `labelList-implicit` })
      : R.isValidElement(t) || nM(t)
        ? R.createElement(kM, { key: `labelList-implicit`, content: t })
        : typeof t == `object`
          ? R.createElement(
              kM,
              yM({ key: `labelList-implicit` }, t, { type: String(t.type) }),
            )
          : null
    : null;
}
var jM = pm({
    name: `polarAxis`,
    initialState: { radiusAxis: {}, angleAxis: {} },
    reducers: {
      addRadiusAxis(e, t) {
        e.radiusAxis[t.payload.id] = hp(t.payload);
      },
      removeRadiusAxis(e, t) {
        delete e.radiusAxis[t.payload.id];
      },
      addAngleAxis(e, t) {
        e.angleAxis[t.payload.id] = hp(t.payload);
      },
      removeAngleAxis(e, t) {
        delete e.angleAxis[t.payload.id];
      },
    },
  }),
  {
    addRadiusAxis: MM,
    removeRadiusAxis: NM,
    addAngleAxis: PM,
    removeAngleAxis: FM,
  } = jM.actions,
  IM = jM.reducer,
  LM = n((e) => {
    var t = Symbol.for(`react.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.provider`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.server_context`),
      l = Symbol.for(`react.forward_ref`),
      u = Symbol.for(`react.suspense`),
      d = Symbol.for(`react.suspense_list`),
      f = Symbol.for(`react.memo`),
      p = Symbol.for(`react.lazy`);
    function m(e) {
      if (typeof e == `object` && e) {
        var m = e.$$typeof;
        switch (m) {
          case t:
            switch (((e = e.type), e)) {
              case r:
              case a:
              case i:
              case u:
              case d:
                return e;
              default:
                switch (((e &&= e.$$typeof), e)) {
                  case c:
                  case s:
                  case l:
                  case p:
                  case f:
                  case o:
                    return e;
                  default:
                    return m;
                }
            }
          case n:
            return m;
        }
      }
    }
    e.isFragment = function (e) {
      return m(e) === r;
    };
  }),
  RM = n((e, t) => {
    t.exports = LM();
  })(),
  zM = (e) =>
    typeof e == `string` ? e : e ? e.displayName || e.name || `Component` : ``,
  BM = null,
  VM = null,
  HM = (e) => {
    if (e === BM && Array.isArray(VM)) return VM;
    var t = [];
    return (
      R.Children.forEach(e, (e) => {
        Au(e) ||
          ((0, RM.isFragment)(e)
            ? (t = t.concat(HM(e.props.children)))
            : t.push(e));
      }),
      (VM = t),
      (BM = e),
      t
    );
  };
function UM(e, t) {
  var n = [],
    r = [];
  return (
    (r = Array.isArray(t) ? t.map((e) => zM(e)) : [zM(t)]),
    HM(e).forEach((e) => {
      var t =
        (0, yu.default)(e, `type.displayName`) ||
        (0, yu.default)(e, `type.name`);
      r.indexOf(t) !== -1 && n.push(e);
    }),
    n
  );
}
var WM = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      if (typeof e != `object` || !e) return !1;
      if (Object.getPrototypeOf(e) === null) return !0;
      if (Object.prototype.toString.call(e) !== `[object Object]`) {
        let t = e[Symbol.toStringTag];
        return t == null ||
          !Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)?.writable
          ? !1
          : e.toString() === `[object ${t}]`;
      }
      let t = e;
      for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
      return Object.getPrototypeOf(e) === t;
    }
    e.isPlainObject = t;
  }),
  GM = n((e, t) => {
    t.exports = WM().isPlainObject;
  });
function KM(e, t) {
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
function qM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? KM(Object(n), !0).forEach(function (t) {
          JM(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : KM(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function JM(e, t, n) {
  return (
    (t = YM(t)) in e
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
function YM(e) {
  var t = XM(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function XM(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function ZM() {
  return (
    (ZM = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ZM.apply(null, arguments)
  );
}
var QM = (e, t, n, r, i) => {
    var a = n - r,
      o = `M ${e},${t}`;
    return (
      (o += `L ${e + n},${t}`),
      (o += `L ${e + n - a / 2},${t + i}`),
      (o += `L ${e + n - a / 2 - r},${t + i}`),
      (o += `L ${e},${t} Z`),
      o
    );
  },
  $M = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
  },
  eN = (e) => {
    var t = cv(e, $M),
      { x: n, y: r, upperWidth: i, lowerWidth: a, height: o, className: s } = t,
      {
        animationEasing: c,
        animationDuration: l,
        animationBegin: u,
        isUpdateAnimationActive: d,
      } = t,
      f = (0, R.useRef)(null),
      [p, m] = (0, R.useState)(-1),
      h = (0, R.useRef)(i),
      g = (0, R.useRef)(a),
      _ = (0, R.useRef)(o),
      v = (0, R.useRef)(n),
      y = (0, R.useRef)(r),
      b = qv(e, `trapezoid-`);
    if (
      ((0, R.useEffect)(() => {
        if (f.current && f.current.getTotalLength)
          try {
            var e = f.current.getTotalLength();
            e && m(e);
          } catch {}
      }, []),
      n !== +n ||
        r !== +r ||
        i !== +i ||
        a !== +a ||
        o !== +o ||
        (i === 0 && a === 0) ||
        o === 0)
    )
      return null;
    var x = U(`recharts-trapezoid`, s);
    if (!d)
      return R.createElement(
        `g`,
        null,
        R.createElement(
          `path`,
          ZM({}, jc(t), { className: x, d: QM(n, r, i, a, o) }),
        ),
      );
    var S = h.current,
      C = g.current,
      w = _.current,
      T = v.current,
      E = y.current,
      D = `0px ${p === -1 ? 1 : p}px`,
      O = `${p}px 0px`,
      k = _v([`strokeDasharray`], l, c);
    return R.createElement(
      Kv,
      {
        animationId: b,
        key: b,
        canBegin: p > 0,
        duration: l,
        easing: c,
        isActive: d,
        begin: u,
      },
      (e) => {
        var s = Ou(S, i, e),
          c = Ou(C, a, e),
          l = Ou(w, o, e),
          u = Ou(T, n, e),
          d = Ou(E, r, e);
        f.current &&
          ((h.current = s),
          (g.current = c),
          (_.current = l),
          (v.current = u),
          (y.current = d));
        var p =
          e > 0
            ? { transition: k, strokeDasharray: O }
            : { strokeDasharray: D };
        return R.createElement(
          `path`,
          ZM({}, jc(t), {
            className: x,
            d: QM(u, d, s, c, l),
            ref: f,
            style: qM(qM({}, p), t.style),
          }),
        );
      },
    );
  },
  tN = e(GM()),
  nN = [
    `option`,
    `shapeType`,
    `propTransformer`,
    `activeClassName`,
    `isActive`,
  ];
function rN(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = iN(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function iN(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function aN(e, t) {
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
function oN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? aN(Object(n), !0).forEach(function (t) {
          sN(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : aN(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function sN(e, t, n) {
  return (
    (t = cN(t)) in e
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
function cN(e) {
  var t = lN(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function lN(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function uN(e, t) {
  return oN(oN({}, t), e);
}
function dN(e, t) {
  return e === `symbols`;
}
function fN(e) {
  var { shapeType: t, elementProps: n } = e;
  switch (t) {
    case `rectangle`:
      return R.createElement(oy, n);
    case `trapezoid`:
      return R.createElement(eN, n);
    case `sector`:
      return R.createElement(my, n);
    case `symbols`:
      if (dN(t, n)) return R.createElement(Ku, n);
      break;
    default:
      return null;
  }
}
function pN(e) {
  return (0, R.isValidElement)(e) ? e.props : e;
}
function mN(e) {
  var {
      option: t,
      shapeType: n,
      propTransformer: r = uN,
      activeClassName: i = `recharts-active-shape`,
      isActive: a,
    } = e,
    o = rN(e, nN),
    s;
  if ((0, R.isValidElement)(t))
    s = (0, R.cloneElement)(t, oN(oN({}, o), pN(t)));
  else if (typeof t == `function`) s = t(o);
  else if ((0, tN.default)(t) && typeof t != `boolean`) {
    var c = r(t, o);
    s = R.createElement(fN, { shapeType: n, elementProps: c });
  } else {
    var l = o;
    s = R.createElement(fN, { shapeType: n, elementProps: l });
  }
  return a ? R.createElement(Hc, { className: i }, s) : s;
}
var hN = (e, t) => {
    var n = K();
    return (r, i) => (a) => {
      (e?.(r, i, a),
        n(
          MO({
            activeIndex: String(i),
            activeDataKey: t,
            activeCoordinate: r.tooltipPosition,
          }),
        ));
    };
  },
  gN = (e) => {
    var t = K();
    return (n, r) => (i) => {
      (e?.(n, r, i), t(NO()));
    };
  },
  _N = (e, t) => {
    var n = K();
    return (r, i) => (a) => {
      (e?.(r, i, a),
        n(
          FO({
            activeIndex: String(i),
            activeDataKey: t,
            activeCoordinate: r.tooltipPosition,
          }),
        ));
    };
  };
function vN(e) {
  var { fn: t, args: n } = e,
    r = K(),
    i = Cg();
  return (
    (0, R.useLayoutEffect)(() => {
      if (!i) {
        var e = t(n);
        return (
          r(kO(e)),
          () => {
            r(AO(e));
          }
        );
      }
    }, [t, n, r, i]),
    null
  );
}
var yN = () => {};
function bN(e) {
  var { legendPayload: t } = e,
    n = K(),
    r = Cg();
  return (
    (0, R.useLayoutEffect)(
      () =>
        r
          ? yN
          : (n(s_(t)),
            () => {
              n(c_(t));
            }),
      [n, r, t],
    ),
    null
  );
}
function xN(e) {
  var { legendPayload: t } = e,
    n = K(),
    r = q(Y);
  return (
    (0, R.useLayoutEffect)(
      () =>
        r !== `centric` && r !== `radial`
          ? yN
          : (n(s_(t)),
            () => {
              n(c_(t));
            }),
      [n, r, t],
    ),
    null
  );
}
var SN =
  R.useId ??
  (() => {
    var [e] = R.useState(() => Tu(`uid-`));
    return e;
  });
function CN(e, t) {
  var n = SN();
  return t || (e ? `${e}-${n}` : n);
}
var wN = (0, R.createContext)(void 0),
  TN = (e) => {
    var { id: t, type: n, children: r } = e,
      i = CN(`recharts-${n}`, t);
    return R.createElement(wN.Provider, { value: i }, r(i));
  },
  EN = pm({
    name: `graphicalItems`,
    initialState: { cartesianItems: [], polarItems: [] },
    reducers: {
      addCartesianGraphicalItem: {
        reducer(e, t) {
          e.cartesianItems.push(hp(t.payload));
        },
        prepare: Up(),
      },
      replaceCartesianGraphicalItem: {
        reducer(e, t) {
          var { prev: n, next: r } = t.payload,
            i = up(e).cartesianItems.indexOf(hp(n));
          i > -1 && (e.cartesianItems[i] = hp(r));
        },
        prepare: Up(),
      },
      removeCartesianGraphicalItem: {
        reducer(e, t) {
          var n = up(e).cartesianItems.indexOf(hp(t.payload));
          n > -1 && e.cartesianItems.splice(n, 1);
        },
        prepare: Up(),
      },
      addPolarGraphicalItem: {
        reducer(e, t) {
          e.polarItems.push(hp(t.payload));
        },
        prepare: Up(),
      },
      removePolarGraphicalItem: {
        reducer(e, t) {
          var n = up(e).polarItems.indexOf(hp(t.payload));
          n > -1 && e.polarItems.splice(n, 1);
        },
        prepare: Up(),
      },
    },
  }),
  {
    addCartesianGraphicalItem: DN,
    replaceCartesianGraphicalItem: ON,
    removeCartesianGraphicalItem: kN,
    addPolarGraphicalItem: AN,
    removePolarGraphicalItem: jN,
  } = EN.actions,
  MN = EN.reducer;
function NN(e) {
  var t = K(),
    n = (0, R.useRef)(null);
  return (
    (0, R.useLayoutEffect)(() => {
      (n.current === null
        ? t(DN(e))
        : n.current !== e && t(ON({ prev: n.current, next: e })),
        (n.current = e));
    }, [t, e]),
    (0, R.useLayoutEffect)(
      () => () => {
        n.current &&= (t(kN(n.current)), null);
      },
      [t],
    ),
    null
  );
}
function PN(e) {
  var t = K();
  return (
    (0, R.useLayoutEffect)(
      () => (
        t(AN(e)),
        () => {
          t(jN(e));
        }
      ),
      [t, e],
    ),
    null
  );
}
function FN(e, t) {
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
function IN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? FN(Object(n), !0).forEach(function (t) {
          LN(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : FN(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function LN(e, t, n) {
  return (
    (t = RN(t)) in e
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
function RN(e) {
  var t = zN(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function zN(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var BN = pm({
    name: `cartesianAxis`,
    initialState: { xAxis: {}, yAxis: {}, zAxis: {} },
    reducers: {
      addXAxis: {
        reducer(e, t) {
          e.xAxis[t.payload.id] = hp(t.payload);
        },
        prepare: Up(),
      },
      removeXAxis: {
        reducer(e, t) {
          delete e.xAxis[t.payload.id];
        },
        prepare: Up(),
      },
      addYAxis: {
        reducer(e, t) {
          e.yAxis[t.payload.id] = hp(t.payload);
        },
        prepare: Up(),
      },
      removeYAxis: {
        reducer(e, t) {
          delete e.yAxis[t.payload.id];
        },
        prepare: Up(),
      },
      addZAxis: {
        reducer(e, t) {
          e.zAxis[t.payload.id] = hp(t.payload);
        },
        prepare: Up(),
      },
      removeZAxis: {
        reducer(e, t) {
          delete e.zAxis[t.payload.id];
        },
        prepare: Up(),
      },
      updateYAxisWidth(e, t) {
        var { id: n, width: r } = t.payload,
          i = e.yAxis[n];
        if (i) {
          var a = i.widthHistory || [];
          if (
            a.length === 3 &&
            a[0] === a[2] &&
            r === a[1] &&
            r !== i.width &&
            Math.abs(r - a[0]) <= 1
          )
            return;
          var o = [...a, r].slice(-3);
          e.yAxis[n] = IN(
            IN({}, e.yAxis[n]),
            {},
            { width: r, widthHistory: o },
          );
        }
      },
    },
  }),
  {
    addXAxis: VN,
    removeXAxis: HN,
    addYAxis: UN,
    removeYAxis: WN,
    addZAxis: GN,
    removeZAxis: KN,
    updateYAxisWidth: qN,
  } = BN.actions,
  JN = BN.reducer,
  YN = J(
    [
      J([yg], (e) => {
        if (e)
          return { top: e.top, bottom: e.bottom, left: e.left, right: e.right };
      }),
      tg,
      ng,
    ],
    (e, t, n) => {
      if (e && t != null && n != null)
        return {
          x: e.left,
          y: e.top,
          width: Math.max(0, t - e.left - e.right),
          height: Math.max(0, n - e.top - e.bottom),
        };
    },
  ),
  XN = () => q(YN),
  ZN = () => q(Fk),
  QN = [`x`, `y`];
function $N() {
  return (
    ($N = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $N.apply(null, arguments)
  );
}
function eP(e, t) {
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
function tP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? eP(Object(n), !0).forEach(function (t) {
          nP(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : eP(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function nP(e, t, n) {
  return (
    (t = rP(t)) in e
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
function rP(e) {
  var t = iP(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function iP(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function aP(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = oP(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function oP(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function sP(e, t) {
  var { x: n, y: r } = e,
    i = aP(e, QN),
    a = `${n}`,
    o = parseInt(a, 10),
    s = `${r}`,
    c = parseInt(s, 10),
    l = `${t.height || i.height}`,
    u = parseInt(l, 10),
    d = `${t.width || i.width}`,
    f = parseInt(d, 10);
  return tP(
    tP(tP(tP(tP({}, t), i), o ? { x: o } : {}), c ? { y: c } : {}),
    {},
    { height: u, width: f, name: t.name, radius: t.radius },
  );
}
function cP(e) {
  return R.createElement(
    mN,
    $N(
      {
        shapeType: `rectangle`,
        propTransformer: sP,
        activeClassName: `recharts-active-bar`,
      },
      e,
    ),
  );
}
var lP = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (n, r) => {
      if (G(e)) return e;
      var i = G(n) || Au(n);
      return i ? e(n, r) : (!i && o(!1), t);
    };
  },
  uP = pm({
    name: `errorBars`,
    initialState: {},
    reducers: {
      addErrorBar: (e, t) => {
        var { itemId: n, errorBar: r } = t.payload;
        (e[n] || (e[n] = []), e[n].push(r));
      },
      replaceErrorBar: (e, t) => {
        var { itemId: n, prev: r, next: i } = t.payload;
        e[n] &&
          (e[n] = e[n].map((e) =>
            e.dataKey === r.dataKey && e.direction === r.direction ? i : e,
          ));
      },
      removeErrorBar: (e, t) => {
        var { itemId: n, errorBar: r } = t.payload;
        e[n] &&
          (e[n] = e[n].filter(
            (e) => e.dataKey !== r.dataKey || e.direction !== r.direction,
          ));
      },
    },
  }),
  { addErrorBar: dP, replaceErrorBar: fP, removeErrorBar: pP } = uP.actions,
  mP = uP.reducer,
  hP = [`children`];
function gP(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = _P(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function _P(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var vP = (0, R.createContext)({
  data: [],
  xAxisId: `xAxis-0`,
  yAxisId: `yAxis-0`,
  dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }),
  errorBarOffset: 0,
});
function yP(e) {
  var { children: t } = e,
    n = gP(e, hP);
  return R.createElement(vP.Provider, { value: n }, t);
}
function bP(e, t) {
  var n = q((t) => bE(t, e)),
    r = q((e) => CE(e, t)),
    i = n?.allowDataOverflow ?? vE.allowDataOverflow,
    a = r?.allowDataOverflow ?? xE.allowDataOverflow;
  return { needClip: i || a, needClipX: i, needClipY: a };
}
function xP(e) {
  var { xAxisId: t, yAxisId: n, clipPathId: r } = e,
    i = XN(),
    { needClipX: a, needClipY: o, needClip: s } = bP(t, n);
  if (!s) return null;
  var { x: c, y: l, width: u, height: d } = i;
  return R.createElement(
    `clipPath`,
    { id: `clipPath-${r}` },
    R.createElement(`rect`, {
      x: a ? c : c - u / 2,
      y: o ? l : l - d / 2,
      width: a ? u : u * 2,
      height: o ? d : d * 2,
    }),
  );
}
var SP = [`onMouseEnter`, `onMouseLeave`, `onClick`],
  CP = [`value`, `background`, `tooltipPosition`],
  wP = [`id`],
  TP = [`onMouseEnter`, `onClick`, `onMouseLeave`];
function EP() {
  return (
    (EP = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    EP.apply(null, arguments)
  );
}
function DP(e, t) {
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
function OP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? DP(Object(n), !0).forEach(function (t) {
          kP(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : DP(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function kP(e, t, n) {
  return (
    (t = AP(t)) in e
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
function AP(e) {
  var t = jP(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function jP(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function MP(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = NP(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function NP(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var PP = (e) => {
  var { dataKey: t, name: n, fill: r, legendType: i, hide: a } = e;
  return [
    { inactive: a, dataKey: t, type: i, color: r, value: Zh(n, t), payload: e },
  ];
};
function FP(e) {
  var {
    dataKey: t,
    stroke: n,
    strokeWidth: r,
    fill: i,
    name: a,
    hide: o,
    unit: s,
  } = e;
  return {
    dataDefinedOnItem: void 0,
    positions: void 0,
    settings: {
      stroke: n,
      strokeWidth: r,
      fill: i,
      dataKey: t,
      nameKey: void 0,
      name: Zh(a, t),
      hide: o,
      type: e.tooltipType,
      color: e.fill,
      unit: s,
    },
  };
}
function IP(e) {
  var t = q(kk),
    { data: n, dataKey: r, background: i, allOtherBarProps: a } = e,
    { onMouseEnter: o, onMouseLeave: s, onClick: c } = a,
    l = MP(a, SP),
    u = hN(o, r),
    d = gN(s),
    f = _N(c, r);
  if (!i || n == null) return null;
  var p = Ac(i);
  return R.createElement(
    R.Fragment,
    null,
    n.map((e, n) => {
      var { value: a, background: o, tooltipPosition: s } = e,
        c = MP(e, CP);
      if (!o) return null;
      var m = u(e, n),
        h = d(e, n),
        g = f(e, n),
        _ = OP(
          OP(
            OP(
              OP(
                OP({ option: i, isActive: String(n) === t }, c),
                {},
                { fill: `#eee` },
                o,
              ),
              p,
            ),
            Yu(l, e, n),
          ),
          {},
          {
            onMouseEnter: m,
            onMouseLeave: h,
            onClick: g,
            dataKey: r,
            index: n,
            className: `recharts-bar-background-rectangle`,
          },
        );
      return R.createElement(cP, EP({ key: `background-bar-${n}` }, _));
    }),
  );
}
function LP(e) {
  var { showLabels: t, children: n, rects: r } = e,
    i = r?.map((e) => {
      var t = { x: e.x, y: e.y, width: e.width, height: e.height };
      return OP(
        OP({}, t),
        {},
        {
          value: e.value,
          payload: e.payload,
          parentViewBox: e.parentViewBox,
          viewBox: t,
          fill: e.fill,
        },
      );
    });
  return R.createElement(wM, { value: t ? i : void 0 }, n);
}
function RP(e) {
  var {
      shape: t,
      activeBar: n,
      baseProps: r,
      entry: i,
      index: a,
      dataKey: o,
    } = e,
    s = q(kk),
    c = q(jk),
    l = n && String(a) === s && (c == null || o === c),
    u = l ? n : t;
  return R.createElement(
    cP,
    EP({}, r, { name: String(r.name) }, i, {
      isActive: l,
      option: u,
      index: a,
      dataKey: o,
    }),
  );
}
function zP(e) {
  var { shape: t, baseProps: n, entry: r, index: i, dataKey: a } = e;
  return R.createElement(
    cP,
    EP({}, n, { name: String(n.name) }, r, {
      isActive: !1,
      option: t,
      index: i,
      dataKey: a,
    }),
  );
}
function BP(e) {
  var { data: t, props: n } = e,
    r = kc(n),
    { id: i } = r,
    a = MP(r, wP),
    { shape: o, dataKey: s, activeBar: c } = n,
    { onMouseEnter: l, onClick: u, onMouseLeave: d } = n,
    f = MP(n, TP),
    p = hN(l, s),
    m = gN(d),
    h = _N(u, s);
  return t
    ? R.createElement(
        R.Fragment,
        null,
        t.map((e, t) =>
          R.createElement(
            Hc,
            EP(
              {
                key: `rectangle-${e?.x}-${e?.y}-${e?.value}-${t}`,
                className: `recharts-bar-rectangle`,
              },
              Yu(f, e, t),
              {
                onMouseEnter: p(e, t),
                onMouseLeave: m(e, t),
                onClick: h(e, t),
              },
            ),
            c
              ? R.createElement(RP, {
                  shape: o,
                  activeBar: c,
                  baseProps: a,
                  entry: e,
                  index: t,
                  dataKey: s,
                })
              : R.createElement(zP, {
                  shape: o,
                  baseProps: a,
                  entry: e,
                  index: t,
                  dataKey: s,
                }),
          ),
        ),
      )
    : null;
}
function VP(e) {
  var { props: t, previousRectanglesRef: n } = e,
    {
      data: r,
      layout: i,
      isAnimationActive: a,
      animationBegin: o,
      animationDuration: s,
      animationEasing: c,
      onAnimationEnd: l,
      onAnimationStart: u,
    } = t,
    d = n.current,
    f = qv(t, `recharts-bar-`),
    [p, m] = (0, R.useState)(!1),
    h = !p,
    g = (0, R.useCallback)(() => {
      (typeof l == `function` && l(), m(!1));
    }, [l]),
    _ = (0, R.useCallback)(() => {
      (typeof u == `function` && u(), m(!0));
    }, [u]);
  return R.createElement(
    LP,
    { showLabels: h, rects: r },
    R.createElement(
      Kv,
      {
        animationId: f,
        begin: o,
        duration: s,
        isActive: a,
        easing: c,
        onAnimationEnd: g,
        onAnimationStart: _,
        key: f,
      },
      (e) => {
        var a =
          e === 1
            ? r
            : r?.map((t, n) => {
                var r = d && d[n];
                if (r)
                  return OP(
                    OP({}, t),
                    {},
                    {
                      x: Ou(r.x, t.x, e),
                      y: Ou(r.y, t.y, e),
                      width: Ou(r.width, t.width, e),
                      height: Ou(r.height, t.height, e),
                    },
                  );
                if (i === `horizontal`) {
                  var a = Ou(0, t.height, e);
                  return OP(
                    OP({}, t),
                    {},
                    { y: t.y + t.height - a, height: a },
                  );
                }
                var o = Ou(0, t.width, e);
                return OP(OP({}, t), {}, { width: o });
              });
        return (
          e > 0 && (n.current = a ?? null),
          a == null
            ? null
            : R.createElement(
                Hc,
                null,
                R.createElement(BP, { props: t, data: a }),
              )
        );
      },
    ),
    R.createElement(AM, { label: t.label }),
    t.children,
  );
}
function HP(e) {
  var t = (0, R.useRef)(null);
  return R.createElement(VP, { previousRectanglesRef: t, props: e });
}
var UP = 0,
  WP = (e, t) => {
    var n = Array.isArray(e.value) ? e.value[1] : e.value;
    return { x: e.x, y: e.y, value: n, errorVal: Ah(e, t) };
  },
  GP = class extends R.PureComponent {
    render() {
      var {
        hide: e,
        data: t,
        dataKey: n,
        className: r,
        xAxisId: i,
        yAxisId: a,
        needClip: o,
        background: s,
        id: c,
      } = this.props;
      if (e || t == null) return null;
      var l = U(`recharts-bar`, r),
        u = c;
      return R.createElement(
        Hc,
        { className: l, id: c },
        o &&
          R.createElement(
            `defs`,
            null,
            R.createElement(xP, { clipPathId: u, xAxisId: i, yAxisId: a }),
          ),
        R.createElement(
          Hc,
          {
            className: `recharts-bar-rectangles`,
            clipPath: o ? `url(#clipPath-${u})` : void 0,
          },
          R.createElement(IP, {
            data: t,
            dataKey: n,
            background: s,
            allOtherBarProps: this.props,
          }),
          R.createElement(HP, this.props),
        ),
      );
    }
  },
  KP = {
    activeBar: !1,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: `ease`,
    hide: !1,
    isAnimationActive: !A_.isSsr,
    legendType: `rect`,
    minPointSize: UP,
    xAxisId: 0,
    yAxisId: 0,
  };
function qP(e) {
  var {
      xAxisId: t,
      yAxisId: n,
      hide: r,
      legendType: i,
      minPointSize: a,
      activeBar: o,
      animationBegin: s,
      animationDuration: c,
      animationEasing: l,
      isAnimationActive: u,
    } = e,
    { needClip: d } = bP(t, n),
    f = n_(),
    p = Cg(),
    m = UM(e.children, ZA),
    h = q((r) => hF(r, t, n, p, e.id, m));
  if (f !== `vertical` && f !== `horizontal`) return null;
  var g,
    _ = h?.[0];
  return (
    (g =
      _ == null || _.height == null || _.width == null
        ? 0
        : f === `vertical`
          ? _.height / 2
          : _.width / 2),
    R.createElement(
      yP,
      {
        xAxisId: t,
        yAxisId: n,
        data: h,
        dataPointFormatter: WP,
        errorBarOffset: g,
      },
      R.createElement(
        GP,
        EP({}, e, {
          layout: f,
          needClip: d,
          data: h,
          xAxisId: t,
          yAxisId: n,
          hide: r,
          legendType: i,
          minPointSize: a,
          activeBar: o,
          animationBegin: s,
          animationDuration: c,
          animationEasing: l,
          isAnimationActive: u,
        }),
      ),
    )
  );
}
function JP(e) {
  var {
      layout: t,
      barSettings: { dataKey: n, minPointSize: r },
      pos: i,
      bandSize: a,
      xAxis: o,
      yAxis: s,
      xAxisTicks: c,
      yAxisTicks: l,
      stackedData: u,
      displayedData: d,
      offset: f,
      cells: p,
      parentViewBox: m,
    } = e,
    h = t === `horizontal` ? s : o,
    g = u ? h.scale.domain() : null,
    _ = Uh({ numericAxis: h });
  return d
    .map((e, d) => {
      var h, v, y, b, x, S;
      u
        ? (h = Rh(u[d], g))
        : ((h = Ah(e, n)), Array.isArray(h) || (h = [_, h]));
      var C = lP(r, UP)(h[1], d);
      if (t === `horizontal`) {
        var [w, T] = [s.scale(h[0]), s.scale(h[1])];
        ((v = Hh({
          axis: o,
          ticks: c,
          bandSize: a,
          offset: i.offset,
          entry: e,
          index: d,
        })),
          (y = T ?? w ?? void 0),
          (b = i.size));
        var E = w - T;
        if (
          ((x = xu(E) ? 0 : E),
          (S = { x: v, y: f.top, width: b, height: f.height }),
          Math.abs(C) > 0 && Math.abs(x) < Math.abs(C))
        ) {
          var D = bu(x || C) * (Math.abs(C) - Math.abs(x));
          ((y -= D), (x += D));
        }
      } else {
        var [O, k] = [o.scale(h[0]), o.scale(h[1])];
        if (
          ((v = O),
          (y = Hh({
            axis: s,
            ticks: l,
            bandSize: a,
            offset: i.offset,
            entry: e,
            index: d,
          })),
          (b = k - O),
          (x = i.size),
          (S = { x: f.left, y, width: f.width, height: x }),
          Math.abs(C) > 0 && Math.abs(b) < Math.abs(C))
        ) {
          var ee = bu(b || C) * (Math.abs(C) - Math.abs(b));
          b += ee;
        }
      }
      return v == null || y == null || b == null || x == null
        ? null
        : OP(
            OP({}, e),
            {},
            {
              x: v,
              y,
              width: b,
              height: x,
              value: u ? h : h[1],
              payload: e,
              background: S,
              tooltipPosition: { x: v + b / 2, y: y + x / 2 },
              parentViewBox: m,
            },
            p && p[d] && p[d].props,
          );
    })
    .filter(Boolean);
}
function YP(e) {
  var t = cv(e, KP),
    n = Cg();
  return R.createElement(TN, { id: t.id, type: `bar` }, (e) =>
    R.createElement(
      R.Fragment,
      null,
      R.createElement(bN, { legendPayload: PP(t) }),
      R.createElement(vN, { fn: FP, args: t }),
      R.createElement(NN, {
        type: `bar`,
        id: e,
        data: void 0,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        dataKey: t.dataKey,
        stackId: Vh(t.stackId),
        hide: t.hide,
        barSize: t.barSize,
        minPointSize: t.minPointSize,
        maxBarSize: t.maxBarSize,
        isPanorama: n,
      }),
      R.createElement(qP, EP({}, t, { id: e })),
    ),
  );
}
var XP = R.memo(YP);
XP.displayName = `Bar`;
function ZP(e, t) {
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
function QP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ZP(Object(n), !0).forEach(function (t) {
          $P(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ZP(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function $P(e, t, n) {
  return (
    (t = eF(t)) in e
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
function eF(e) {
  var t = tF(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function tF(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var nF = (e, t) => t,
  rF = (e, t, n) => n,
  iF = (e, t, n, r) => r,
  aF = J([jE, (e, t, n, r, i) => i], (e, t) =>
    e.filter((e) => e.type === `bar`).find((e) => e.id === t),
  ),
  oF = J([aF], (e) => e?.maxBarSize),
  sF = (e, t, n, r, i, a) => a,
  cF = (e, t, n) => {
    var r = n ?? e;
    if (!Au(r)) return Eu(r, t, 0);
  },
  lF = J([Y, jE, nF, rF, iF], (e, t, n, r, i) =>
    t
      .filter((t) => (e === `horizontal` ? t.xAxisId === n : t.yAxisId === r))
      .filter((e) => e.isPanorama === i)
      .filter((e) => e.hide === !1)
      .filter((e) => e.type === `bar`),
  ),
  uF = (e, t, n, r) =>
    Y(e) === `horizontal` ? ZE(e, `yAxis`, n, r) : ZE(e, `xAxis`, t, r),
  dF = J(
    [
      lF,
      jT,
      (e, t, n) =>
        Y(e) === `horizontal` ? cO(e, `xAxis`, t) : cO(e, `yAxis`, n),
    ],
    (e, t, n) => {
      var r = {},
        i = e.filter(lE),
        a = e.filter((e) => e.stackId == null),
        o = i.reduce(
          (e, t) => (
            e[t.stackId] || (e[t.stackId] = []),
            e[t.stackId].push(t),
            e
          ),
          r,
        ),
        s = Object.entries(o).map((e) => {
          var [r, i] = e;
          return {
            stackId: r,
            dataKeys: i.map((e) => e.dataKey),
            barSize: cF(t, n, i[0].barSize),
          };
        }),
        c = a.map((e) => ({
          stackId: void 0,
          dataKeys: [e.dataKey].filter((e) => e != null),
          barSize: cF(t, n, e.barSize),
        }));
      return [...s, ...c];
    },
  ),
  fF = (e, t, n, r, i) => {
    var a = aF(e, t, n, r, i);
    if (a != null) {
      var o = Y(e),
        s = OT(e),
        { maxBarSize: c } = a,
        l = Au(c) ? s : c,
        u,
        d;
      return (
        o === `horizontal`
          ? ((u = vO(e, `xAxis`, t, r)), (d = _O(e, `xAxis`, t, r)))
          : ((u = vO(e, `yAxis`, n, r)), (d = _O(e, `yAxis`, n, r))),
        Yh(u, d, !0) ?? l ?? 0
      );
    }
  },
  pF = (e, t, n, r) => {
    var i = Y(e),
      a,
      o;
    return (
      i === `horizontal`
        ? ((a = vO(e, `xAxis`, t, r)), (o = _O(e, `xAxis`, t, r)))
        : ((a = vO(e, `yAxis`, n, r)), (o = _O(e, `yAxis`, n, r))),
      Yh(a, o)
    );
  };
function mF(e, t, n, r, i) {
  var a = r.length;
  if (!(a < 1)) {
    var o = Eu(e, n, 0, !0),
      s,
      c = [];
    if (Lg(r[0].barSize)) {
      var l = !1,
        u = n / a,
        d = r.reduce((e, t) => e + (t.barSize || 0), 0);
      ((d += (a - 1) * o),
        d >= n && ((d -= (a - 1) * o), (o = 0)),
        d >= n && u > 0 && ((l = !0), (u *= 0.9), (d = a * u)));
      var f = { offset: (((n - d) / 2) | 0) - o, size: 0 };
      s = r.reduce((e, t) => {
        var n = {
            stackId: t.stackId,
            dataKeys: t.dataKeys,
            position: {
              offset: f.offset + f.size + o,
              size: l ? u : (t.barSize ?? 0),
            },
          },
          r = [...e, n];
        return ((f = r[r.length - 1].position), r);
      }, c);
    } else {
      var p = Eu(t, n, 0, !0);
      n - 2 * p - (a - 1) * o <= 0 && (o = 0);
      var m = (n - 2 * p - (a - 1) * o) / a;
      m > 1 && (m >>= 0);
      var h = Lg(i) ? Math.min(m, i) : m;
      s = r.reduce(
        (e, t, n) => [
          ...e,
          {
            stackId: t.stackId,
            dataKeys: t.dataKeys,
            position: { offset: p + (m + o) * n + (m - h) / 2, size: h },
          },
        ],
        c,
      );
    }
    return s;
  }
}
var hF = J(
    [
      yg,
      xg,
      (e, t, n, r) => vO(e, `xAxis`, t, r),
      (e, t, n, r) => vO(e, `yAxis`, n, r),
      (e, t, n, r) => _O(e, `xAxis`, t, r),
      (e, t, n, r) => _O(e, `yAxis`, n, r),
      J(
        [
          J([dF, OT, kT, AT, fF, pF, oF], (e, t, n, r, i, a, o) => {
            var s = Au(o) ? t : o,
              c = mF(n, r, i === a ? a : i, e, s);
            return (
              i !== a &&
                c != null &&
                (c = c.map((e) =>
                  QP(
                    QP({}, e),
                    {},
                    {
                      position: QP(
                        QP({}, e.position),
                        {},
                        { offset: e.position.offset - i / 2 },
                      ),
                    },
                  ),
                )),
              c
            );
          }),
          aF,
        ],
        (e, t) => {
          if (e != null && t != null) {
            var n = e.find(
              (e) =>
                e.stackId === t.stackId &&
                t.dataKey != null &&
                e.dataKeys.includes(t.dataKey),
            );
            if (n != null) return n.position;
          }
        },
      ),
      Y,
      nT,
      pF,
      J([uF, aF], (e, t) => {
        var n = rE(t);
        if (e && n != null && t != null) {
          var { stackId: r } = t;
          if (r != null) {
            var i = e[r];
            if (i) {
              var { stackedData: a } = i;
              if (a) return a.find((e) => e.key === n);
            }
          }
        }
      }),
      aF,
      sF,
    ],
    (e, t, n, r, i, a, o, s, c, l, u, d, f) => {
      var { chartData: p, dataStartIndex: m, dataEndIndex: h } = c;
      if (
        !(
          d == null ||
          o == null ||
          t == null ||
          (s !== `horizontal` && s !== `vertical`) ||
          n == null ||
          r == null ||
          i == null ||
          a == null ||
          l == null
        )
      ) {
        var { data: g } = d,
          _ = g != null && g.length > 0 ? g : p?.slice(m, h + 1);
        if (_ != null)
          return JP({
            layout: s,
            barSettings: d,
            pos: o,
            parentViewBox: t,
            bandSize: l,
            xAxis: n,
            yAxis: r,
            xAxisTicks: i,
            yAxisTicks: a,
            stackedData: u,
            displayedData: _,
            offset: e,
            cells: f,
          });
      }
    },
  ),
  gF = (e) => {
    var { chartData: t } = e,
      n = K(),
      r = Cg();
    return (
      (0, R.useEffect)(
        () =>
          r
            ? () => {}
            : (n(wA(t)),
              () => {
                n(wA(void 0));
              }),
        [t, n, r],
      ),
      null
    );
  },
  _F = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
  vF = pm({
    name: `brush`,
    initialState: _F,
    reducers: {
      setBrushSettings(e, t) {
        return t.payload == null ? _F : t.payload;
      },
    },
  }),
  { setBrushSettings: yF } = vF.actions,
  bF = vF.reducer;
function xF(e, t, n) {
  return (
    (t = SF(t)) in e
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
function SF(e) {
  var t = CF(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function CF(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
xF(
  class e {
    static create(t) {
      return new e(t);
    }
    constructor(e) {
      this.scale = e;
    }
    get domain() {
      return this.scale.domain;
    }
    get range() {
      return this.scale.range;
    }
    get rangeMin() {
      return this.range()[0];
    }
    get rangeMax() {
      return this.range()[1];
    }
    get bandwidth() {
      return this.scale.bandwidth;
    }
    apply(e) {
      var { bandAware: t, position: n } =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (e !== void 0) {
        if (n)
          switch (n) {
            case `start`:
              return this.scale(e);
            case `middle`:
              var r = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(e) + r;
            case `end`:
              var i = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(e) + i;
            default:
              return this.scale(e);
          }
        if (t) {
          var a = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(e) + a;
        }
        return this.scale(e);
      }
    }
    isInRange(e) {
      var t = this.range(),
        n = t[0],
        r = t[t.length - 1];
      return n <= r ? e >= n && e <= r : e >= r && e <= n;
    }
  },
  `EPS`,
  1e-4,
);
function wF(e) {
  return ((e % 180) + 180) % 180;
}
var TF = function (e) {
    var { width: t, height: n } = e,
      r =
        (wF(
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        ) *
          Math.PI) /
        180,
      i = Math.atan(n / t),
      a = r > i && r < Math.PI - i ? n / Math.sin(r) : t / Math.cos(r);
    return Math.abs(a);
  },
  EF = pm({
    name: `referenceElements`,
    initialState: { dots: [], areas: [], lines: [] },
    reducers: {
      addDot: (e, t) => {
        e.dots.push(t.payload);
      },
      removeDot: (e, t) => {
        var n = up(e).dots.findIndex((e) => e === t.payload);
        n !== -1 && e.dots.splice(n, 1);
      },
      addArea: (e, t) => {
        e.areas.push(t.payload);
      },
      removeArea: (e, t) => {
        var n = up(e).areas.findIndex((e) => e === t.payload);
        n !== -1 && e.areas.splice(n, 1);
      },
      addLine: (e, t) => {
        e.lines.push(t.payload);
      },
      removeLine: (e, t) => {
        var n = up(e).lines.findIndex((e) => e === t.payload);
        n !== -1 && e.lines.splice(n, 1);
      },
    },
  }),
  {
    addDot: DF,
    removeDot: OF,
    addArea: kF,
    removeArea: AF,
    addLine: jF,
    removeLine: MF,
  } = EF.actions,
  NF = EF.reducer,
  PF = (0, R.createContext)(void 0),
  FF = (e) => {
    var { children: t } = e,
      [n] = (0, R.useState)(`${Tu(`recharts`)}-clip`),
      r = XN();
    if (r == null) return null;
    var { x: i, y: a, width: o, height: s } = r;
    return R.createElement(
      PF.Provider,
      { value: n },
      R.createElement(
        `defs`,
        null,
        R.createElement(
          `clipPath`,
          { id: n },
          R.createElement(`rect`, { x: i, y: a, height: s, width: o }),
        ),
      ),
      t,
    );
  };
function IF(e, t) {
  for (var n in e)
    if (
      {}.hasOwnProperty.call(e, n) &&
      (!{}.hasOwnProperty.call(t, n) || e[n] !== t[n])
    )
      return !1;
  for (var r in t)
    if ({}.hasOwnProperty.call(t, r) && !{}.hasOwnProperty.call(e, r))
      return !1;
  return !0;
}
function LF(e, t, n) {
  if (t < 1) return [];
  if (t === 1 && n === void 0) return e;
  for (var r = [], i = 0; i < e.length; i += t)
    if (n === void 0 || n(e[i]) === !0) r.push(e[i]);
    else return;
  return r;
}
function RF(e, t, n) {
  return TF({ width: e.width + t.width, height: e.height + t.height }, n);
}
function zF(e, t, n) {
  var r = n === `width`,
    { x: i, y: a, width: o, height: s } = e;
  return t === 1
    ? { start: r ? i : a, end: r ? i + o : a + s }
    : { start: r ? i + o : a + s, end: r ? i : a };
}
function BF(e, t, n, r, i) {
  if (e * t < e * r || e * t > e * i) return !1;
  var a = n();
  return e * (t - (e * a) / 2 - r) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
}
function VF(e, t) {
  return LF(e, t + 1);
}
function HF(e, t, n, r, i) {
  for (
    var a = (r || []).slice(),
      { start: o, end: s } = t,
      c = 0,
      l = 1,
      u = o,
      d = function () {
        var t = r?.[c];
        if (t === void 0) return { v: LF(r, l) };
        var a = c,
          d,
          f = () => (d === void 0 && (d = n(t, a)), d),
          p = t.coordinate,
          m = c === 0 || BF(e, p, f, u, s);
        (m || ((c = 0), (u = o), (l += 1)),
          m && ((u = p + e * (f() / 2 + i)), (c += l)));
      },
      f;
    l <= a.length;
  )
    if (((f = d()), f)) return f.v;
  return [];
}
function UF(e, t) {
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
function WF(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? UF(Object(n), !0).forEach(function (t) {
          GF(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : UF(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function GF(e, t, n) {
  return (
    (t = KF(t)) in e
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
function KF(e) {
  var t = qF(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function qF(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function JF(e, t, n, r, i) {
  for (
    var a = (r || []).slice(),
      o = a.length,
      { start: s } = t,
      { end: c } = t,
      l = function (t) {
        var r = a[t],
          l,
          u = () => (l === void 0 && (l = n(r, t)), l);
        if (t === o - 1) {
          var d = e * (r.coordinate + (e * u()) / 2 - c);
          a[t] = r = WF(
            WF({}, r),
            {},
            { tickCoord: d > 0 ? r.coordinate - d * e : r.coordinate },
          );
        } else a[t] = r = WF(WF({}, r), {}, { tickCoord: r.coordinate });
        BF(e, r.tickCoord, u, s, c) &&
          ((c = r.tickCoord - e * (u() / 2 + i)),
          (a[t] = WF(WF({}, r), {}, { isShow: !0 })));
      },
      u = o - 1;
    u >= 0;
    u--
  )
    l(u);
  return a;
}
function YF(e, t, n, r, i, a) {
  var o = (r || []).slice(),
    s = o.length,
    { start: c, end: l } = t;
  if (a) {
    var u = r[s - 1],
      d = n(u, s - 1),
      f = e * (u.coordinate + (e * d) / 2 - l);
    ((o[s - 1] = u =
      WF(
        WF({}, u),
        {},
        { tickCoord: f > 0 ? u.coordinate - f * e : u.coordinate },
      )),
      BF(e, u.tickCoord, () => d, c, l) &&
        ((l = u.tickCoord - e * (d / 2 + i)),
        (o[s - 1] = WF(WF({}, u), {}, { isShow: !0 }))));
  }
  for (
    var p = a ? s - 1 : s,
      m = function (t) {
        var r = o[t],
          a,
          s = () => (a === void 0 && (a = n(r, t)), a);
        if (t === 0) {
          var u = e * (r.coordinate - (e * s()) / 2 - c);
          o[t] = r = WF(
            WF({}, r),
            {},
            { tickCoord: u < 0 ? r.coordinate - u * e : r.coordinate },
          );
        } else o[t] = r = WF(WF({}, r), {}, { tickCoord: r.coordinate });
        BF(e, r.tickCoord, s, c, l) &&
          ((c = r.tickCoord + e * (s() / 2 + i)),
          (o[t] = WF(WF({}, r), {}, { isShow: !0 })));
      },
      h = 0;
    h < p;
    h++
  )
    m(h);
  return o;
}
function XF(e, t, n) {
  var {
    tick: r,
    ticks: i,
    viewBox: a,
    minTickGap: o,
    orientation: s,
    interval: c,
    tickFormatter: l,
    unit: u,
    angle: d,
  } = e;
  if (!i || !i.length || !r) return [];
  if (G(c) || A_.isSsr) return VF(i, G(c) ? c : 0) ?? [];
  var f = [],
    p = s === `top` || s === `bottom` ? `width` : `height`,
    m =
      u && p === `width`
        ? pj(u, { fontSize: t, letterSpacing: n })
        : { width: 0, height: 0 },
    h = (e, r) => {
      var i = typeof l == `function` ? l(e.value, r) : e.value;
      return p === `width`
        ? RF(pj(i, { fontSize: t, letterSpacing: n }), m, d)
        : pj(i, { fontSize: t, letterSpacing: n })[p];
    },
    g = i.length >= 2 ? bu(i[1].coordinate - i[0].coordinate) : 1,
    _ = zF(a, g, p);
  return c === `equidistantPreserveStart`
    ? HF(g, _, h, i, o)
    : ((f =
        c === `preserveStart` || c === `preserveStartEnd`
          ? YF(g, _, h, i, o, c === `preserveStartEnd`)
          : JF(g, _, h, i, o)),
      f.filter((e) => e.isShow));
}
var ZF = (e) => {
    var {
        ticks: t,
        label: n,
        labelGapWithTick: r = 5,
        tickSize: i = 0,
        tickMargin: a = 0,
      } = e,
      o = 0;
    if (t) {
      Array.from(t).forEach((e) => {
        if (e) {
          var t = e.getBoundingClientRect();
          t.width > o && (o = t.width);
        }
      });
      var s = n ? n.getBoundingClientRect().width : 0,
        c = i + a,
        l = o + c + s + (n ? r : 0);
      return Math.round(l);
    }
    return 0;
  },
  QF = [`axisLine`, `width`, `height`, `className`, `hide`, `ticks`],
  $F = [`viewBox`],
  eI = [`viewBox`];
function tI(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = nI(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function nI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function rI() {
  return (
    (rI = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rI.apply(null, arguments)
  );
}
function iI(e, t) {
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
function aI(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? iI(Object(n), !0).forEach(function (t) {
          oI(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : iI(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function oI(e, t, n) {
  return (
    (t = sI(t)) in e
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
function sI(e) {
  var t = cI(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function cI(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var lI = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  orientation: `bottom`,
  ticks: [],
  stroke: `#666`,
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: `preserveEnd`,
};
function uI(e) {
  var {
    x: t,
    y: n,
    width: r,
    height: i,
    orientation: a,
    mirror: o,
    axisLine: s,
    otherSvgProps: c,
  } = e;
  if (!s) return null;
  var l = aI(aI(aI({}, c), kc(s)), {}, { fill: `none` });
  if (a === `top` || a === `bottom`) {
    var u = +((a === `top` && !o) || (a === `bottom` && o));
    l = aI(aI({}, l), {}, { x1: t, y1: n + u * i, x2: t + r, y2: n + u * i });
  } else {
    var d = +((a === `left` && !o) || (a === `right` && o));
    l = aI(aI({}, l), {}, { x1: t + d * r, y1: n, x2: t + d * r, y2: n + i });
  }
  return R.createElement(
    `line`,
    rI({}, l, {
      className: U(
        `recharts-cartesian-axis-line`,
        (0, yu.default)(s, `className`),
      ),
    }),
  );
}
function dI(e, t, n, r, i, a, o, s, c) {
  var l,
    u,
    d,
    f,
    p,
    m,
    h = s ? -1 : 1,
    g = e.tickSize || o,
    _ = G(e.tickCoord) ? e.tickCoord : e.coordinate;
  switch (a) {
    case `top`:
      ((l = u = e.coordinate),
        (f = n + +!s * i),
        (d = f - h * g),
        (m = d - h * c),
        (p = _));
      break;
    case `left`:
      ((d = f = e.coordinate),
        (u = t + +!s * r),
        (l = u - h * g),
        (p = l - h * c),
        (m = _));
      break;
    case `right`:
      ((d = f = e.coordinate),
        (u = t + +s * r),
        (l = u + h * g),
        (p = l + h * c),
        (m = _));
      break;
    default:
      ((l = u = e.coordinate),
        (f = n + +s * i),
        (d = f + h * g),
        (m = d + h * c),
        (p = _));
  }
  return { line: { x1: l, y1: d, x2: u, y2: f }, tick: { x: p, y: m } };
}
function fI(e, t) {
  switch (e) {
    case `left`:
      return t ? `start` : `end`;
    case `right`:
      return t ? `end` : `start`;
    default:
      return `middle`;
  }
}
function pI(e, t) {
  switch (e) {
    case `left`:
    case `right`:
      return `middle`;
    case `top`:
      return t ? `start` : `end`;
    default:
      return t ? `end` : `start`;
  }
}
function mI(e) {
  var { option: t, tickProps: n, value: r } = e,
    i,
    a = U(n.className, `recharts-cartesian-axis-tick-value`);
  if (R.isValidElement(t))
    i = R.cloneElement(t, aI(aI({}, n), {}, { className: a }));
  else if (typeof t == `function`) i = t(aI(aI({}, n), {}, { className: a }));
  else {
    var o = `recharts-cartesian-axis-tick-value`;
    (typeof t != `boolean` && (o = U(o, t?.className)),
      (i = R.createElement(Vj, rI({}, n, { className: o }), r)));
  }
  return i;
}
function hI(e) {
  var {
      ticks: t = [],
      tick: n,
      tickLine: r,
      stroke: i,
      tickFormatter: a,
      unit: o,
      padding: s,
      tickTextProps: c,
      orientation: l,
      mirror: u,
      x: d,
      y: f,
      width: p,
      height: m,
      tickSize: h,
      tickMargin: g,
      fontSize: _,
      letterSpacing: v,
      getTicksConfig: y,
      events: b,
    } = e,
    x = XF(aI(aI({}, y), {}, { ticks: t }), _, v),
    S = fI(l, u),
    C = pI(l, u),
    w = kc(y),
    T = Ac(n),
    E = {};
  typeof r == `object` && (E = r);
  var D = aI(aI({}, w), {}, { fill: `none` }, E),
    O = x.map((e, t) => {
      var { line: _, tick: v } = dI(e, d, f, p, m, l, h, u, g),
        y = aI(
          aI(
            aI(
              aI({ textAnchor: S, verticalAnchor: C }, w),
              {},
              { stroke: `none`, fill: i },
              T,
            ),
            v,
          ),
          {},
          {
            index: t,
            payload: e,
            visibleTicksCount: x.length,
            tickFormatter: a,
            padding: s,
          },
          c,
        );
      return R.createElement(
        Hc,
        rI(
          {
            className: `recharts-cartesian-axis-tick`,
            key: `tick-${e.value}-${e.coordinate}-${e.tickCoord}`,
          },
          Yu(b, e, t),
        ),
        r &&
          R.createElement(
            `line`,
            rI({}, D, _, {
              className: U(
                `recharts-cartesian-axis-tick-line`,
                (0, yu.default)(r, `className`),
              ),
            }),
          ),
        n &&
          R.createElement(mI, {
            option: n,
            tickProps: y,
            value: `${typeof a == `function` ? a(e.value, t) : e.value}${o || ``}`,
          }),
      );
    });
  return O.length > 0
    ? R.createElement(`g`, { className: `recharts-cartesian-axis-ticks` }, O)
    : null;
}
var gI = (0, R.forwardRef)((e, t) => {
    var {
        axisLine: n,
        width: r,
        height: i,
        className: a,
        hide: o,
        ticks: s,
      } = e,
      c = tI(e, QF),
      [l, u] = (0, R.useState)(``),
      [d, f] = (0, R.useState)(``),
      p = (0, R.useRef)(null);
    (0, R.useImperativeHandle)(t, () => ({
      getCalculatedWidth: () =>
        ZF({
          ticks: p.current,
          label: e.labelRef?.current,
          labelGapWithTick: 5,
          tickSize: e.tickSize,
          tickMargin: e.tickMargin,
        }),
    }));
    var m = (0, R.useCallback)(
      (e) => {
        if (e) {
          var t = e.getElementsByClassName(
            `recharts-cartesian-axis-tick-value`,
          );
          p.current = t;
          var n = t[0];
          if (n) {
            var r = window.getComputedStyle(n),
              i = r.fontSize,
              a = r.letterSpacing;
            (i !== l || a !== d) && (u(i), f(a));
          }
        }
      },
      [l, d],
    );
    return o || (r != null && r <= 0) || (i != null && i <= 0)
      ? null
      : R.createElement(
          Hc,
          { className: U(`recharts-cartesian-axis`, a), ref: m },
          R.createElement(uI, {
            x: e.x,
            y: e.y,
            width: r,
            height: i,
            orientation: e.orientation,
            mirror: e.mirror,
            axisLine: n,
            otherSvgProps: kc(e),
          }),
          R.createElement(hI, {
            ticks: s,
            tick: e.tick,
            tickLine: e.tickLine,
            stroke: e.stroke,
            tickFormatter: e.tickFormatter,
            unit: e.unit,
            padding: e.padding,
            tickTextProps: e.tickTextProps,
            orientation: e.orientation,
            mirror: e.mirror,
            x: e.x,
            y: e.y,
            width: e.width,
            height: e.height,
            tickSize: e.tickSize,
            tickMargin: e.tickMargin,
            fontSize: l,
            letterSpacing: d,
            getTicksConfig: e,
            events: c,
          }),
          R.createElement(
            Zj,
            { x: e.x, y: e.y, width: e.width, height: e.height },
            R.createElement(dM, { label: e.label, labelRef: e.labelRef }),
            e.children,
          ),
        );
  }),
  _I = R.memo(gI, (e, t) => {
    var { viewBox: n } = e,
      r = tI(e, $F),
      { viewBox: i } = t,
      a = tI(t, eI);
    return IF(n, i) && IF(r, a);
  }),
  vI = R.forwardRef((e, t) => {
    var n = cv(e, lI);
    return R.createElement(_I, rI({}, n, { ref: t }));
  });
vI.displayName = `CartesianAxis`;
var yI = [`x1`, `y1`, `x2`, `y2`, `key`],
  bI = [`offset`],
  xI = [`xAxisId`, `yAxisId`],
  SI = [`xAxisId`, `yAxisId`];
function CI(e, t) {
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
function wI(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? CI(Object(n), !0).forEach(function (t) {
          TI(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : CI(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function TI(e, t, n) {
  return (
    (t = EI(t)) in e
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
function EI(e) {
  var t = DI(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function DI(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function OI() {
  return (
    (OI = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    OI.apply(null, arguments)
  );
}
function kI(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = AI(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function AI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var jI = (e) => {
  var { fill: t } = e;
  if (!t || t === `none`) return null;
  var { fillOpacity: n, x: r, y: i, width: a, height: o, ry: s } = e;
  return R.createElement(`rect`, {
    x: r,
    y: i,
    ry: s,
    width: a,
    height: o,
    stroke: `none`,
    fill: t,
    fillOpacity: n,
    className: `recharts-cartesian-grid-bg`,
  });
};
function MI(e, t) {
  var n;
  if (R.isValidElement(e)) n = R.cloneElement(e, t);
  else if (typeof e == `function`) n = e(t);
  else {
    var { x1: r, y1: i, x2: a, y2: o, key: s } = t,
      c = kc(kI(t, yI)),
      { offset: l } = c,
      u = kI(c, bI);
    n = R.createElement(
      `line`,
      OI({}, u, { x1: r, y1: i, x2: a, y2: o, fill: `none`, key: s }),
    );
  }
  return n;
}
function NI(e) {
  var { x: t, width: n, horizontal: r = !0, horizontalPoints: i } = e;
  if (!r || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e,
    s = kI(e, xI),
    c = i.map((e, i) =>
      MI(
        r,
        wI(
          wI({}, s),
          {},
          { x1: t, y1: e, x2: t + n, y2: e, key: `line-${i}`, index: i },
        ),
      ),
    );
  return R.createElement(
    `g`,
    { className: `recharts-cartesian-grid-horizontal` },
    c,
  );
}
function PI(e) {
  var { y: t, height: n, vertical: r = !0, verticalPoints: i } = e;
  if (!r || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e,
    s = kI(e, SI),
    c = i.map((e, i) =>
      MI(
        r,
        wI(
          wI({}, s),
          {},
          { x1: e, y1: t, x2: e, y2: t + n, key: `line-${i}`, index: i },
        ),
      ),
    );
  return R.createElement(
    `g`,
    { className: `recharts-cartesian-grid-vertical` },
    c,
  );
}
function FI(e) {
  var {
    horizontalFill: t,
    fillOpacity: n,
    x: r,
    y: i,
    width: a,
    height: o,
    horizontalPoints: s,
    horizontal: c = !0,
  } = e;
  if (!c || !t || !t.length) return null;
  var l = s.map((e) => Math.round(e + i - i)).sort((e, t) => e - t);
  i !== l[0] && l.unshift(0);
  var u = l.map((e, s) => {
    var c = l[s + 1] ? l[s + 1] - e : i + o - e;
    if (c <= 0) return null;
    var u = s % t.length;
    return R.createElement(`rect`, {
      key: `react-${s}`,
      y: e,
      x: r,
      height: c,
      width: a,
      stroke: `none`,
      fill: t[u],
      fillOpacity: n,
      className: `recharts-cartesian-grid-bg`,
    });
  });
  return R.createElement(
    `g`,
    { className: `recharts-cartesian-gridstripes-horizontal` },
    u,
  );
}
function II(e) {
  var {
    vertical: t = !0,
    verticalFill: n,
    fillOpacity: r,
    x: i,
    y: a,
    width: o,
    height: s,
    verticalPoints: c,
  } = e;
  if (!t || !n || !n.length) return null;
  var l = c.map((e) => Math.round(e + i - i)).sort((e, t) => e - t);
  i !== l[0] && l.unshift(0);
  var u = l.map((e, t) => {
    var c = l[t + 1] ? l[t + 1] - e : i + o - e;
    if (c <= 0) return null;
    var u = t % n.length;
    return R.createElement(`rect`, {
      key: `react-${t}`,
      x: e,
      y: a,
      width: c,
      height: s,
      stroke: `none`,
      fill: n[u],
      fillOpacity: r,
      className: `recharts-cartesian-grid-bg`,
    });
  });
  return R.createElement(
    `g`,
    { className: `recharts-cartesian-gridstripes-vertical` },
    u,
  );
}
var LI = (e, t) => {
    var { xAxis: n, width: r, height: i, offset: a } = e;
    return Ph(
      XF(
        wI(
          wI(wI({}, lI), n),
          {},
          { ticks: Fh(n, !0), viewBox: { x: 0, y: 0, width: r, height: i } },
        ),
      ),
      a.left,
      a.left + a.width,
      t,
    );
  },
  RI = (e, t) => {
    var { yAxis: n, width: r, height: i, offset: a } = e;
    return Ph(
      XF(
        wI(
          wI(wI({}, lI), n),
          {},
          { ticks: Fh(n, !0), viewBox: { x: 0, y: 0, width: r, height: i } },
        ),
      ),
      a.top,
      a.top + a.height,
      t,
    );
  },
  zI = {
    horizontal: !0,
    vertical: !0,
    horizontalPoints: [],
    verticalPoints: [],
    stroke: `#ccc`,
    fill: `none`,
    verticalFill: [],
    horizontalFill: [],
    xAxisId: 0,
    yAxisId: 0,
  };
function BI(e) {
  var t = $g(),
    n = e_(),
    r = Qg(),
    i = wI(
      wI({}, cv(e, zI)),
      {},
      {
        x: G(e.x) ? e.x : r.left,
        y: G(e.y) ? e.y : r.top,
        width: G(e.width) ? e.width : r.width,
        height: G(e.height) ? e.height : r.height,
      },
    ),
    {
      xAxisId: a,
      yAxisId: o,
      x: s,
      y: c,
      width: l,
      height: u,
      syncWithTicks: d,
      horizontalValues: f,
      verticalValues: p,
    } = i,
    m = Cg(),
    h = q((e) => pO(e, `xAxis`, a, m)),
    g = q((e) => pO(e, `yAxis`, o, m));
  if (
    !G(l) ||
    l <= 0 ||
    !G(u) ||
    u <= 0 ||
    !G(s) ||
    s !== +s ||
    !G(c) ||
    c !== +c
  )
    return null;
  var _ = i.verticalCoordinatesGenerator || LI,
    v = i.horizontalCoordinatesGenerator || RI,
    { horizontalPoints: y, verticalPoints: b } = i;
  if ((!y || !y.length) && typeof v == `function`) {
    var x = f && f.length,
      S = v(
        {
          yAxis: g ? wI(wI({}, g), {}, { ticks: x ? f : g.ticks }) : void 0,
          width: t,
          height: n,
          offset: r,
        },
        x ? !0 : d,
      );
    Array.isArray(S) && (y = S);
  }
  if ((!b || !b.length) && typeof _ == `function`) {
    var C = p && p.length,
      w = _(
        {
          xAxis: h ? wI(wI({}, h), {}, { ticks: C ? p : h.ticks }) : void 0,
          width: t,
          height: n,
          offset: r,
        },
        C ? !0 : d,
      );
    Array.isArray(w) && (b = w);
  }
  return R.createElement(
    `g`,
    { className: `recharts-cartesian-grid` },
    R.createElement(jI, {
      fill: i.fill,
      fillOpacity: i.fillOpacity,
      x: i.x,
      y: i.y,
      width: i.width,
      height: i.height,
      ry: i.ry,
    }),
    R.createElement(FI, OI({}, i, { horizontalPoints: y })),
    R.createElement(II, OI({}, i, { verticalPoints: b })),
    R.createElement(
      NI,
      OI({}, i, { offset: r, horizontalPoints: y, xAxis: h, yAxis: g }),
    ),
    R.createElement(
      PI,
      OI({}, i, { offset: r, verticalPoints: b, xAxis: h, yAxis: g }),
    ),
  );
}
BI.displayName = `CartesianGrid`;
var VI = [`dangerouslySetInnerHTML`, `ticks`],
  HI = [`id`],
  UI = [`domain`],
  WI = [`domain`];
function GI() {
  return (
    (GI = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    GI.apply(null, arguments)
  );
}
function KI(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = qI(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function qI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function JI(e) {
  var t = K();
  return (
    (0, R.useLayoutEffect)(
      () => (
        t(VN(e)),
        () => {
          t(HN(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var YI = (e) => {
    var { xAxisId: t, className: n } = e,
      r = q(xg),
      i = Cg(),
      a = `xAxis`,
      o = q((e) => KD(e, a, t, i)),
      s = q((e) => hO(e, a, t, i)),
      c = q((e) => eO(e, t)),
      l = q((e) => aO(e, t)),
      u = q((e) => yE(e, t));
    if (c == null || l == null || u == null) return null;
    var { dangerouslySetInnerHTML: d, ticks: f } = e,
      p = KI(e, VI),
      { id: m } = u,
      h = KI(u, HI);
    return R.createElement(
      vI,
      GI({}, p, h, {
        scale: o,
        x: l.x,
        y: l.y,
        width: c.width,
        height: c.height,
        className: U(`recharts-${a} ${a}`, n),
        viewBox: r,
        ticks: s,
      }),
    );
  },
  XI = {
    allowDataOverflow: vE.allowDataOverflow,
    allowDecimals: vE.allowDecimals,
    allowDuplicatedCategory: vE.allowDuplicatedCategory,
    height: vE.height,
    hide: !1,
    mirror: vE.mirror,
    orientation: vE.orientation,
    padding: vE.padding,
    reversed: vE.reversed,
    scale: vE.scale,
    tickCount: vE.tickCount,
    type: vE.type,
    xAxisId: 0,
  },
  ZI = R.memo(
    (e) => {
      var t = cv(e, XI);
      return R.createElement(
        R.Fragment,
        null,
        R.createElement(JI, {
          interval: t.interval ?? `preserveEnd`,
          id: t.xAxisId,
          scale: t.scale,
          type: t.type,
          padding: t.padding,
          allowDataOverflow: t.allowDataOverflow,
          domain: t.domain,
          dataKey: t.dataKey,
          allowDuplicatedCategory: t.allowDuplicatedCategory,
          allowDecimals: t.allowDecimals,
          tickCount: t.tickCount,
          includeHidden: t.includeHidden ?? !1,
          reversed: t.reversed,
          ticks: t.ticks,
          height: t.height,
          orientation: t.orientation,
          mirror: t.mirror,
          hide: t.hide,
          unit: t.unit,
          name: t.name,
          angle: t.angle ?? 0,
          minTickGap: t.minTickGap ?? 5,
          tick: t.tick ?? !0,
          tickFormatter: t.tickFormatter,
        }),
        R.createElement(YI, t),
      );
    },
    (e, t) => {
      var { domain: n } = e,
        r = KI(e, UI),
        { domain: i } = t;
      return IF(r, KI(t, WI))
        ? Array.isArray(n) &&
          n.length === 2 &&
          Array.isArray(i) &&
          i.length === 2
          ? n[0] === i[0] && n[1] === i[1]
          : IF({ domain: n }, { domain: i })
        : !1;
    },
  );
ZI.displayName = `XAxis`;
var QI = [`dangerouslySetInnerHTML`, `ticks`],
  $I = [`id`],
  eL = [`domain`],
  tL = [`domain`];
function nL() {
  return (
    (nL = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nL.apply(null, arguments)
  );
}
function rL(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = iL(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function iL(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function aL(e) {
  var t = K();
  return (
    (0, R.useLayoutEffect)(
      () => (
        t(UN(e)),
        () => {
          t(WN(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var oL = (e) => {
    var { yAxisId: t, className: n, width: r, label: i } = e,
      a = (0, R.useRef)(null),
      o = (0, R.useRef)(null),
      s = q(xg),
      c = Cg(),
      l = K(),
      u = `yAxis`,
      d = q((e) => KD(e, u, t, c)),
      f = q((e) => sO(e, t)),
      p = q((e) => oO(e, t)),
      m = q((e) => hO(e, u, t, c)),
      h = q((e) => SE(e, t));
    if (
      ((0, R.useLayoutEffect)(() => {
        if (
          !(
            r !== `auto` ||
            !f ||
            nM(i) ||
            (0, R.isValidElement)(i) ||
            h == null
          )
        ) {
          var e = a.current;
          if (e) {
            var n = e.getCalculatedWidth();
            Math.round(f.width) !== Math.round(n) && l(qN({ id: t, width: n }));
          }
        }
      }, [m, f, l, i, t, r, h]),
      f == null || p == null || h == null)
    )
      return null;
    var { dangerouslySetInnerHTML: g, ticks: _ } = e,
      v = rL(e, QI),
      { id: y } = h,
      b = rL(h, $I);
    return R.createElement(
      vI,
      nL({}, v, b, {
        ref: a,
        labelRef: o,
        scale: d,
        x: p.x,
        y: p.y,
        tickTextProps: r === `auto` ? { width: void 0 } : { width: r },
        width: f.width,
        height: f.height,
        className: U(`recharts-${u} ${u}`, n),
        viewBox: s,
        ticks: m,
      }),
    );
  },
  sL = {
    allowDataOverflow: xE.allowDataOverflow,
    allowDecimals: xE.allowDecimals,
    allowDuplicatedCategory: xE.allowDuplicatedCategory,
    hide: !1,
    mirror: xE.mirror,
    orientation: xE.orientation,
    padding: xE.padding,
    reversed: xE.reversed,
    scale: xE.scale,
    tickCount: xE.tickCount,
    type: xE.type,
    width: xE.width,
    yAxisId: 0,
  },
  cL = R.memo(
    (e) => {
      var t = cv(e, sL);
      return R.createElement(
        R.Fragment,
        null,
        R.createElement(aL, {
          interval: t.interval ?? `preserveEnd`,
          id: t.yAxisId,
          scale: t.scale,
          type: t.type,
          domain: t.domain,
          allowDataOverflow: t.allowDataOverflow,
          dataKey: t.dataKey,
          allowDuplicatedCategory: t.allowDuplicatedCategory,
          allowDecimals: t.allowDecimals,
          tickCount: t.tickCount,
          padding: t.padding,
          includeHidden: t.includeHidden ?? !1,
          reversed: t.reversed,
          ticks: t.ticks,
          width: t.width,
          orientation: t.orientation,
          mirror: t.mirror,
          hide: t.hide,
          unit: t.unit,
          name: t.name,
          angle: t.angle ?? 0,
          minTickGap: t.minTickGap ?? 5,
          tick: t.tick ?? !0,
          tickFormatter: t.tickFormatter,
        }),
        R.createElement(oL, t),
      );
    },
    (e, t) => {
      var { domain: n } = e,
        r = rL(e, eL),
        { domain: i } = t;
      return IF(r, rL(t, tL))
        ? Array.isArray(n) &&
          n.length === 2 &&
          Array.isArray(i) &&
          i.length === 2
          ? n[0] === i[0] && n[1] === i[1]
          : IF({ domain: n }, { domain: i })
        : !1;
    },
  );
cL.displayName = `YAxis`;
var lL = n((e) => {
  var t = i();
  (t.useSyncExternalStore, t.useRef, t.useEffect, t.useMemo, t.useDebugValue);
});
n((e, t) => {
  t.exports = lL();
})();
function uL(e) {
  e();
}
function dL() {
  let e = null,
    t = null;
  return {
    clear() {
      ((e = null), (t = null));
    },
    notify() {
      uL(() => {
        let t = e;
        for (; t;) (t.callback(), (t = t.next));
      });
    },
    get() {
      let t = [],
        n = e;
      for (; n;) (t.push(n), (n = n.next));
      return t;
    },
    subscribe(n) {
      let r = !0,
        i = (t = { callback: n, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          r &&
            e !== null &&
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var fL = { notify() {}, get: () => [] };
function pL(e, t) {
  let n,
    r = fL,
    i = 0,
    a = !1;
  function o(e) {
    u();
    let t = r.subscribe(e),
      n = !1;
    return () => {
      n || ((n = !0), t(), d());
    };
  }
  function s() {
    r.notify();
  }
  function c() {
    m.onStateChange && m.onStateChange();
  }
  function l() {
    return a;
  }
  function u() {
    (i++, n || ((n = t ? t.addNestedSub(c) : e.subscribe(c)), (r = dL())));
  }
  function d() {
    (i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = fL)));
  }
  function f() {
    a || ((a = !0), u());
  }
  function p() {
    a && ((a = !1), d());
  }
  let m = {
    addNestedSub: o,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => r,
  };
  return m;
}
var mL =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0,
  hL = typeof navigator < `u` && navigator.product === `ReactNative`,
  gL = mL || hL ? R.useLayoutEffect : R.useEffect,
  _L = Symbol.for(`react-redux-context`),
  vL = typeof globalThis < `u` ? globalThis : {};
function yL() {
  if (!R.createContext) return {};
  let e = (vL[_L] ??= new Map()),
    t = e.get(R.createContext);
  return (t || ((t = R.createContext(null)), e.set(R.createContext, t)), t);
}
var bL = yL();
function xL(e) {
  let { children: t, context: n, serverState: r, store: i } = e,
    a = R.useMemo(() => {
      let e = pL(i);
      return {
        store: i,
        subscription: e,
        getServerState: r ? () => r : void 0,
      };
    }, [i, r]),
    o = R.useMemo(() => i.getState(), [i]);
  gL(() => {
    let { subscription: e } = a;
    return (
      (e.onStateChange = e.notifyNestedSubs),
      e.trySubscribe(),
      o !== i.getState() && e.notifyNestedSubs(),
      () => {
        (e.tryUnsubscribe(), (e.onStateChange = void 0));
      }
    );
  }, [a, o]);
  let s = n || bL;
  return R.createElement(s.Provider, { value: a }, t);
}
var SL = xL,
  CL = J([(e, t) => t, Y, eE, iE, Sk, wk, qk, yg], rA),
  wL = (e) => {
    var t = e.currentTarget.getBoundingClientRect(),
      n = t.width / e.currentTarget.offsetWidth,
      r = t.height / e.currentTarget.offsetHeight;
    return {
      chartX: Math.round((e.clientX - t.left) / n),
      chartY: Math.round((e.clientY - t.top) / r),
    };
  },
  TL = Ip(`mouseClick`),
  EL = eh();
EL.startListening({
  actionCreator: TL,
  effect: (e, t) => {
    var n = e.payload,
      r = CL(t.getState(), wL(n));
    r?.activeIndex != null &&
      t.dispatch(
        LO({
          activeIndex: r.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: r.activeCoordinate,
        }),
      );
  },
});
var DL = Ip(`mouseMove`),
  OL = eh();
OL.startListening({
  actionCreator: DL,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState(),
      i = CO(r, r.tooltip.settings.shared),
      a = CL(r, wL(n));
    i === `axis` &&
      (a?.activeIndex == null
        ? t.dispatch(PO())
        : t.dispatch(
            IO({
              activeIndex: a.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: a.activeCoordinate,
            }),
          ));
  },
});
function kL(e, t) {
  return t instanceof HTMLElement
    ? `HTMLElement <${t.tagName} class="${t.className}">`
    : t === window
      ? `global.window`
      : t;
}
var AL = {
    accessibilityLayer: !0,
    barCategoryGap: `10%`,
    barGap: 4,
    barSize: void 0,
    className: void 0,
    maxBarSize: void 0,
    stackOffset: `none`,
    syncId: void 0,
    syncMethod: `index`,
  },
  jL = pm({
    name: `rootProps`,
    initialState: AL,
    reducers: {
      updateOptions: (e, t) => {
        ((e.accessibilityLayer = t.payload.accessibilityLayer),
          (e.barCategoryGap = t.payload.barCategoryGap),
          (e.barGap = t.payload.barGap ?? AL.barGap),
          (e.barSize = t.payload.barSize),
          (e.maxBarSize = t.payload.maxBarSize),
          (e.stackOffset = t.payload.stackOffset),
          (e.syncId = t.payload.syncId),
          (e.syncMethod = t.payload.syncMethod),
          (e.className = t.payload.className));
      },
    },
  }),
  ML = jL.reducer,
  { updateOptions: NL } = jL.actions,
  PL = pm({
    name: `polarOptions`,
    initialState: null,
    reducers: { updatePolarOptions: (e, t) => t.payload },
  }),
  { updatePolarOptions: FL } = PL.actions,
  IL = PL.reducer,
  LL = Ip(`keyDown`),
  RL = Ip(`focus`),
  zL = eh();
(zL.startListening({
  actionCreator: LL,
  effect: (e, t) => {
    var n = t.getState();
    if (n.rootProps.accessibilityLayer !== !1) {
      var { keyboardInteraction: r } = n.tooltip,
        i = e.payload;
      if (i === `ArrowRight` || i === `ArrowLeft` || i === `Enter`) {
        var a = Number(YO(r, uk(n))),
          o = wk(n);
        if (i === `Enter`) {
          var s = Qk(n, `axis`, `hover`, String(r.index));
          t.dispatch(
            zO({
              active: !r.active,
              activeIndex: r.index,
              activeDataKey: r.dataKey,
              activeCoordinate: s,
            }),
          );
        } else {
          var c = yO(n) === `left-to-right` ? 1 : -1,
            l = a + (i === `ArrowRight` ? 1 : -1) * c;
          if (!(o == null || l >= o.length || l < 0)) {
            var u = Qk(n, `axis`, `hover`, String(l));
            t.dispatch(
              zO({
                active: !0,
                activeIndex: l.toString(),
                activeDataKey: void 0,
                activeCoordinate: u,
              }),
            );
          }
        }
      }
    }
  },
}),
  zL.startListening({
    actionCreator: RL,
    effect: (e, t) => {
      var n = t.getState();
      if (n.rootProps.accessibilityLayer !== !1) {
        var { keyboardInteraction: r } = n.tooltip;
        if (!r.active && r.index == null) {
          var i = `0`,
            a = Qk(n, `axis`, `hover`, String(i));
          t.dispatch(
            zO({
              activeDataKey: void 0,
              active: !0,
              activeIndex: i,
              activeCoordinate: a,
            }),
          );
        }
      }
    },
  }));
var BL = Ip(`externalEvent`),
  VL = eh();
VL.startListening({
  actionCreator: BL,
  effect: (e, t) => {
    if (e.payload.handler != null) {
      var n = t.getState(),
        r = {
          activeCoordinate: Nk(n),
          activeDataKey: jk(n),
          activeIndex: kk(n),
          activeLabel: Ak(n),
          activeTooltipIndex: kk(n),
          isTooltipActive: Pk(n),
        };
      e.payload.handler(r, e.payload.reactEvent);
    }
  },
});
var HL = J(
    [J([$O], (e) => e.tooltipItemPayloads), QO, (e, t, n) => t, (e, t, n) => n],
    (e, t, n, r) => {
      var i = e.find((e) => e.settings.dataKey === r);
      if (i != null) {
        var { positions: a } = i;
        if (a != null) return t(a, n);
      }
    },
  ),
  UL = Ip(`touchMove`),
  WL = eh();
WL.startListening({
  actionCreator: UL,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState(),
      i = CO(r, r.tooltip.settings.shared);
    if (i === `axis`) {
      var a = CL(
        r,
        wL({
          clientX: n.touches[0].clientX,
          clientY: n.touches[0].clientY,
          currentTarget: n.currentTarget,
        }),
      );
      a?.activeIndex != null &&
        t.dispatch(
          IO({
            activeIndex: a.activeIndex,
            activeDataKey: void 0,
            activeCoordinate: a.activeCoordinate,
          }),
        );
    } else if (i === `item`) {
      var o = n.touches[0],
        s = document.elementFromPoint(o.clientX, o.clientY);
      if (!s || !s.getAttribute) return;
      var c = s.getAttribute(sg),
        l = s.getAttribute(`data-recharts-item-data-key`) ?? void 0,
        u = HL(t.getState(), c, l);
      t.dispatch(MO({ activeDataKey: l, activeIndex: c, activeCoordinate: u }));
    }
  },
});
var GL = pf({
    brush: bF,
    cartesianAxis: JN,
    chartData: DA,
    errorBars: mP,
    graphicalItems: MN,
    layout: sh,
    legend: l_,
    options: bA,
    polarAxis: IM,
    polarOptions: IL,
    referenceElements: NF,
    rootProps: ML,
    tooltip: BO,
  }),
  KL = function (e) {
    var t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : `Chart`;
    return qp({
      reducer: GL,
      preloadedState: e,
      middleware: (e) =>
        e({ serializableCheck: !1 }).concat([
          EL.middleware,
          OL.middleware,
          zL.middleware,
          VL.middleware,
          WL.middleware,
        ]),
      enhancers: (e) => {
        var t = e;
        return (
          typeof e == `function` && (t = e()), t.concat(Gp({ type: `raf` }))
        );
      },
      devTools: A_.devToolsEnabled && {
        serialize: { replacer: kL },
        name: `recharts-${t}`,
      },
    });
  };
function qL(e) {
  var { preloadedState: t, children: n, reduxStoreName: r } = e,
    i = Cg(),
    a = (0, R.useRef)(null);
  if (i) return n;
  a.current ??= KL(t, r);
  var o = Dd;
  return R.createElement(SL, { context: o, store: a.current }, n);
}
function JL(e) {
  var { layout: t, margin: n } = e,
    r = K(),
    i = Cg();
  return (
    (0, R.useEffect)(() => {
      i || (r(ih(t)), r(rh(n)));
    }, [r, i, t, n]),
    null
  );
}
function YL(e) {
  var t = K();
  return (
    (0, R.useEffect)(() => {
      t(NL(e));
    }, [t, e]),
    null
  );
}
var XL = [`children`];
function ZL(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = QL(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function QL(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function $L() {
  return (
    ($L = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $L.apply(null, arguments)
  );
}
var eR = { width: `100%`, height: `100%`, display: `block` },
  tR = (0, R.forwardRef)((e, t) => {
    var n = $g(),
      r = e_(),
      i = j_();
    if (!Rg(n) || !Rg(r)) return null;
    var { children: a, otherAttributes: o, title: s, desc: c } = e,
      l = typeof o.tabIndex == `number` ? o.tabIndex : i ? 0 : void 0,
      u = typeof o.role == `string` ? o.role : i ? `application` : void 0;
    return R.createElement(
      Lc,
      $L({}, o, {
        title: s,
        desc: c,
        role: u,
        tabIndex: l,
        width: n,
        height: r,
        style: eR,
        ref: t,
      }),
      a,
    );
  }),
  nR = (e) => {
    var { children: t } = e,
      n = q(Tg);
    if (!n) return null;
    var { width: r, height: i, y: a, x: o } = n;
    return R.createElement(Lc, { width: r, height: i, x: o, y: a }, t);
  },
  rR = (0, R.forwardRef)((e, t) => {
    var { children: n } = e,
      r = ZL(e, XL);
    return Cg()
      ? R.createElement(nR, null, n)
      : R.createElement(tR, $L({ ref: t }, r), n);
  });
function iR() {
  var e = K(),
    [t, n] = (0, R.useState)(null),
    r = q(rg);
  return (
    (0, R.useEffect)(() => {
      if (t != null) {
        var n = t.getBoundingClientRect().width / t.offsetWidth;
        Lg(n) && n !== r && e(oh(n));
      }
    }, [t, e, r]),
    n
  );
}
function aR(e, t) {
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
function oR(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? aR(Object(n), !0).forEach(function (t) {
          sR(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : aR(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function sR(e, t, n) {
  return (
    (t = cR(t)) in e
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
function cR(e) {
  var t = lR(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function lR(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function uR() {
  return (
    (uR = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    uR.apply(null, arguments)
  );
}
var dR = () => (zA(), null);
function fR(e) {
  if (typeof e == `number`) return e;
  if (typeof e == `string`) {
    var t = parseFloat(e);
    if (!Number.isNaN(t)) return t;
  }
  return 0;
}
var pR = (0, R.forwardRef)((e, t) => {
    var n = (0, R.useRef)(null),
      [r, i] = (0, R.useState)({
        containerWidth: fR(e.style?.width),
        containerHeight: fR(e.style?.height),
      }),
      a = (0, R.useCallback)((e, t) => {
        i((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []),
      o = (0, R.useCallback)(
        (e) => {
          if ((typeof t == `function` && t(e), e != null)) {
            var { width: r, height: i } = e.getBoundingClientRect();
            a(r, i);
            var o = new ResizeObserver((e) => {
              var { width: t, height: n } = e[0].contentRect;
              a(t, n);
            });
            (o.observe(e), (n.current = o));
          }
        },
        [t, a],
      );
    return (
      (0, R.useEffect)(
        () => () => {
          n.current?.disconnect();
        },
        [a],
      ),
      R.createElement(
        R.Fragment,
        null,
        R.createElement(r_, {
          width: r.containerWidth,
          height: r.containerHeight,
        }),
        R.createElement(`div`, uR({ ref: o }, e)),
      )
    );
  }),
  mR = (0, R.forwardRef)((e, t) => {
    var { width: n, height: r } = e,
      [i, a] = (0, R.useState)({
        containerWidth: fR(n),
        containerHeight: fR(r),
      }),
      o = (0, R.useCallback)((e, t) => {
        a((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []),
      s = (0, R.useCallback)(
        (e) => {
          if ((typeof t == `function` && t(e), e != null)) {
            var { width: n, height: r } = e.getBoundingClientRect();
            o(n, r);
          }
        },
        [t, o],
      );
    return R.createElement(
      R.Fragment,
      null,
      R.createElement(r_, {
        width: i.containerWidth,
        height: i.containerHeight,
      }),
      R.createElement(`div`, uR({ ref: s }, e)),
    );
  }),
  hR = (0, R.forwardRef)((e, t) => {
    var { width: n, height: r } = e;
    return R.createElement(
      R.Fragment,
      null,
      R.createElement(r_, { width: n, height: r }),
      R.createElement(`div`, uR({ ref: t }, e)),
    );
  }),
  gR = (0, R.forwardRef)((e, t) => {
    var { width: n, height: r } = e;
    return Su(n) || Su(r)
      ? R.createElement(mR, uR({}, e, { ref: t }))
      : R.createElement(hR, uR({}, e, { ref: t }));
  });
function _R(e) {
  return e === !0 ? pR : gR;
}
var vR = (0, R.forwardRef)((e, t) => {
    var {
        children: n,
        className: r,
        height: i,
        onClick: a,
        onContextMenu: o,
        onDoubleClick: s,
        onMouseDown: c,
        onMouseEnter: l,
        onMouseLeave: u,
        onMouseMove: d,
        onMouseUp: f,
        onTouchEnd: p,
        onTouchMove: m,
        onTouchStart: h,
        style: g,
        width: _,
        responsive: v,
        dispatchTouchEvents: y = !0,
      } = e,
      b = (0, R.useRef)(null),
      x = K(),
      [S, C] = (0, R.useState)(null),
      [w, T] = (0, R.useState)(null),
      E = iR(),
      D = qg(),
      O = D?.width > 0 ? D.width : _,
      k = D?.height > 0 ? D.height : i,
      ee = (0, R.useCallback)(
        (e) => {
          (E(e),
            typeof t == `function` && t(e),
            C(e),
            T(e),
            e != null && (b.current = e));
        },
        [E, t, C, T],
      ),
      te = (0, R.useCallback)(
        (e) => {
          (x(TL(e)), x(BL({ handler: a, reactEvent: e })));
        },
        [x, a],
      ),
      ne = (0, R.useCallback)(
        (e) => {
          (x(DL(e)), x(BL({ handler: l, reactEvent: e })));
        },
        [x, l],
      ),
      A = (0, R.useCallback)(
        (e) => {
          (x(PO()), x(BL({ handler: u, reactEvent: e })));
        },
        [x, u],
      ),
      re = (0, R.useCallback)(
        (e) => {
          (x(DL(e)), x(BL({ handler: d, reactEvent: e })));
        },
        [x, d],
      ),
      ie = (0, R.useCallback)(() => {
        x(RL());
      }, [x]),
      ae = (0, R.useCallback)(
        (e) => {
          x(LL(e.key));
        },
        [x],
      ),
      oe = (0, R.useCallback)(
        (e) => {
          x(BL({ handler: o, reactEvent: e }));
        },
        [x, o],
      ),
      se = (0, R.useCallback)(
        (e) => {
          x(BL({ handler: s, reactEvent: e }));
        },
        [x, s],
      ),
      ce = (0, R.useCallback)(
        (e) => {
          x(BL({ handler: c, reactEvent: e }));
        },
        [x, c],
      ),
      le = (0, R.useCallback)(
        (e) => {
          x(BL({ handler: f, reactEvent: e }));
        },
        [x, f],
      ),
      ue = (0, R.useCallback)(
        (e) => {
          x(BL({ handler: h, reactEvent: e }));
        },
        [x, h],
      ),
      de = (0, R.useCallback)(
        (e) => {
          (y && x(UL(e)), x(BL({ handler: m, reactEvent: e })));
        },
        [x, y, m],
      ),
      fe = (0, R.useCallback)(
        (e) => {
          x(BL({ handler: p, reactEvent: e }));
        },
        [x, p],
      ),
      pe = _R(v);
    return R.createElement(
      fA.Provider,
      { value: S },
      R.createElement(
        Uc.Provider,
        { value: w },
        R.createElement(
          pe,
          {
            width: O ?? g?.width,
            height: k ?? g?.height,
            className: U(`recharts-wrapper`, r),
            style: oR(
              { position: `relative`, cursor: `default`, width: O, height: k },
              g,
            ),
            onClick: te,
            onContextMenu: oe,
            onDoubleClick: se,
            onFocus: ie,
            onKeyDown: ae,
            onMouseDown: ce,
            onMouseEnter: ne,
            onMouseLeave: A,
            onMouseMove: re,
            onMouseUp: le,
            onTouchEnd: fe,
            onTouchMove: de,
            onTouchStart: ue,
            ref: ee,
          },
          R.createElement(dR, null),
          n,
        ),
      ),
    );
  }),
  yR = [
    `width`,
    `height`,
    `responsive`,
    `children`,
    `className`,
    `style`,
    `compact`,
    `title`,
    `desc`,
  ];
function bR(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = xR(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function xR(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var SR = (0, R.forwardRef)((e, t) => {
  var {
      width: n,
      height: r,
      responsive: i,
      children: a,
      className: o,
      style: s,
      compact: c,
      title: l,
      desc: u,
    } = e,
    d = kc(bR(e, yR));
  return c
    ? R.createElement(
        R.Fragment,
        null,
        R.createElement(r_, { width: n, height: r }),
        R.createElement(rR, { otherAttributes: d, title: l, desc: u }, a),
      )
    : R.createElement(
        vR,
        {
          className: o,
          style: s,
          width: n,
          height: r,
          responsive: i,
          onClick: e.onClick,
          onMouseLeave: e.onMouseLeave,
          onMouseEnter: e.onMouseEnter,
          onMouseMove: e.onMouseMove,
          onMouseDown: e.onMouseDown,
          onMouseUp: e.onMouseUp,
          onContextMenu: e.onContextMenu,
          onDoubleClick: e.onDoubleClick,
          onTouchStart: e.onTouchStart,
          onTouchMove: e.onTouchMove,
          onTouchEnd: e.onTouchEnd,
        },
        R.createElement(
          rR,
          { otherAttributes: d, title: l, desc: u, ref: t },
          R.createElement(FF, null, a),
        ),
      );
});
function CR() {
  return (
    (CR = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    CR.apply(null, arguments)
  );
}
var wR = {
    accessibilityLayer: !0,
    layout: `horizontal`,
    stackOffset: `none`,
    barCategoryGap: `10%`,
    barGap: 4,
    margin: { top: 5, right: 5, bottom: 5, left: 5 },
    reverseStackOrder: !1,
    syncMethod: `index`,
    responsive: !1,
  },
  TR = (0, R.forwardRef)(function (e, t) {
    var n = cv(e.categoricalChartProps, wR),
      {
        chartName: r,
        defaultTooltipEventType: i,
        validateTooltipEventTypes: a,
        tooltipPayloadSearcher: o,
        categoricalChartProps: s,
      } = e,
      c = {
        chartName: r,
        defaultTooltipEventType: i,
        validateTooltipEventTypes: a,
        tooltipPayloadSearcher: o,
        eventEmitter: void 0,
      };
    return R.createElement(
      qL,
      { preloadedState: { options: c }, reduxStoreName: s.id ?? r },
      R.createElement(gF, { chartData: s.data }),
      R.createElement(JL, { layout: n.layout, margin: n.margin }),
      R.createElement(YL, {
        accessibilityLayer: n.accessibilityLayer,
        barCategoryGap: n.barCategoryGap,
        maxBarSize: n.maxBarSize,
        stackOffset: n.stackOffset,
        barGap: n.barGap,
        barSize: n.barSize,
        syncId: n.syncId,
        syncMethod: n.syncMethod,
        className: n.className,
      }),
      R.createElement(SR, CR({}, n, { ref: t })),
    );
  }),
  ER = [`axis`, `item`],
  DR = (0, R.forwardRef)((e, t) =>
    R.createElement(TR, {
      chartName: `BarChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: ER,
      tooltipPayloadSearcher: vA,
      categoricalChartProps: e,
      ref: t,
    }),
  ),
  OR = `nK2pFw6yu3o-`,
  kR = `nzXI4r-KhTY-`,
  AR = `iKEtAveWi-8-`,
  jR = `ZXpki9wJyL0-`,
  MR = 5;
function NR({ active: e, payload: t }) {
  if (!e || !t?.length) return null;
  let n = t[0].payload;
  return (0, z.jsx)(`div`, {
    className: jR,
    children: `${M.Localize(`#GamePerformanceStats_FPS`, n.framerate ?? 0)}: ${n.percentage ?? 0}%`,
  });
}
function PR(e) {
  let { histogram: t, className: n, minWidth: r = 400, minHeight: i = 300 } = e,
    a = R.useMemo(() => {
      if (!t) return;
      let e = -1;
      if (
        (t.forEach((t, n) => {
          Math.floor(t) > 0 && (e = n);
        }),
        e < 0)
      )
        return;
      let n = [];
      return (
        t.slice(0, e + 1).forEach((e, t) => {
          n.push({ framerate: t * MR, percentage: Math.round(e) });
        }),
        n.sort((e, t) => e.framerate - t.framerate)
      );
    }, [t]);
  return a?.length
    ? (0, z.jsxs)(`div`, {
        className: I(OR, n),
        children: [
          (0, z.jsx)(`div`, {
            className: kR,
            children: M.Localize(`#GamePerformanceStats_SessionLabel`),
          }),
          (0, z.jsx)(Yg, {
            width: `100%`,
            minWidth: r,
            minHeight: i,
            children: (0, z.jsxs)(DR, {
              accessibilityLayer: !1,
              margin: { top: 35, left: 0, right: 0, bottom: 25 },
              data: a,
              children: [
                (0, z.jsx)(BI, {
                  stroke: `#888`,
                  strokeWidth: `0.5`,
                  vertical: !1,
                }),
                (0, z.jsx)(ZI, {
                  dataKey: `framerate`,
                  stroke: `white`,
                  label: {
                    value: M.Localize(`#GamePerformanceStats_Framerate`),
                    position: `bottom`,
                    fill: `#A9A9A9`,
                    fontSize: 14,
                  },
                }),
                (0, z.jsx)(cL, {
                  stroke: `white`,
                  domain: [() => 0, (e) => Math.max(e, 100)],
                }),
                (0, z.jsx)(XA, {
                  content: NR,
                  cursor: !1,
                  isAnimationActive: !1,
                }),
                (0, z.jsx)(XP, {
                  fill: `#1a9fff`,
                  activeBar: { fill: `white` },
                  dataKey: `percentage`,
                  name: ``,
                }),
              ],
            }),
          }),
        ],
      })
    : (0, z.jsx)(`div`, {
        className: I(OR, n),
        children: (0, z.jsx)(`div`, {
          className: AR,
          children: M.Localize(
            `#GamePerformanceStats_StillGatheringData_NoDevice`,
          ),
        }),
      });
}
function FR(e) {
  let {
    results: t,
    titleId: n,
    descriptionId: r,
    appName: i,
    buttonProps: a,
    autoFocus: o,
    onOpenBlogPost: s,
    eStartingTab: c = 1,
    bShowTabs: l = !0,
  } = e;
  if (!t) return null;
  let u = () => {
      s
        ? s()
        : t.steam_deck_blog_url &&
          (window.location.href = t.steam_deck_blog_url);
    },
    d = a ?? {},
    f = null,
    p = null;
  if (
    (t.steam_deck_blog_url &&
      ((d.onOptionsActionDescription = M.Localize(
        `#SteamDeckVerified_ViewDeveloperPost`,
      )),
      (d.onOptionsButton = u),
      (f = (0, z.jsx)(HR, {
        blogURL: t.steam_deck_blog_url,
        eHWCompatibiltyDisplay: 1,
      })),
      (p = (0, z.jsx)(HR, {
        blogURL: t.steam_deck_blog_url,
        eHWCompatibiltyDisplay: 2,
      }))),
    !t.resolved_items?.length &&
      !t.machine_resolved_items?.length &&
      !t.frame_resolved_items?.length)
  ) {
    let e = ``,
      a = null,
      s = null,
      l = (0, z.jsx)(QR, { category: t.resolved_category });
    return (
      c == 3
        ? ((e = M.Localize(
            `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
          )),
          (s = (0, z.jsx)(nz, {
            id: r,
            category: t.machine_resolved_category,
            appName: i,
          })),
          (l = (0, z.jsx)(QR, { category: t.machine_resolved_category })))
        : c == 2
          ? ((e = M.Localize(
              `#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI`,
            )),
            (s = (0, z.jsx)(tz, {
              id: r,
              category: t.steamos_resolved_category,
              appName: i,
            })),
            (l = (0, z.jsx)($R, { category: t.steamos_resolved_category })),
            (a = p))
          : c == 4
            ? ((e = M.Localize(
                `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
              )),
              (s = (0, z.jsx)(rz, {
                id: r,
                category: t.frame_resolved_category,
                appName: i,
              })),
              (l = (0, z.jsx)(QR, { category: t.frame_resolved_category })))
            : ((e = M.Localize(
                `#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI`,
              )),
              (s = (0, z.jsx)(ez, {
                category: t.resolved_category,
                appName: i,
              })),
              (a = f)),
      (0, z.jsx)(IR, {
        children: (0, z.jsxs)(ln, {
          autoFocus: o,
          focusableIfEmpty: o,
          noFocusRing: !0,
          className: qo,
          ...d,
          children: [
            (0, z.jsxs)(`div`, {
              id: n,
              className: Wo,
              children: [
                (0, z.jsx)(`div`, { className: Go, children: e }),
                (0, z.jsx)(`div`, { className: Ko, children: l }),
              ],
            }),
            s,
            a,
            (0, z.jsx)(qR, { appid: t.appid, appName: i }),
          ],
        }),
      })
    );
  }
  let m = oe(t.resolved_category),
    h = Xt(t.steamos_resolved_category),
    g = oe(t.machine_resolved_category),
    _ = oe(t.frame_resolved_category || 0);
  if (!l) {
    let t = null;
    switch (c) {
      case 3:
        t = (0, z.jsx)(BR, { ...e });
        break;
      case 2:
      case 5:
        t = (0, z.jsx)(RR, { ...e, deckBlogContent: p });
        break;
      case 4:
        t = (0, z.jsx)(VR, { ...e });
        break;
      default:
        t = (0, z.jsx)(zR, { ...e, deckBlogContent: f });
    }
    return (0, z.jsx)(kt, { children: (0, z.jsx)(IR, { children: t }) });
  }
  let v = (e) =>
      window.sessionStorage.setItem(`steamdeckcompatibility`, `?tab=${e.key}`),
    y = [
      {
        name: (0, z.jsxs)(`div`, {
          className: xs,
          children: [
            (0, z.jsx)(Pe, { className: Ts }),
            (0, z.jsx)(m, { className: Ss }),
          ],
        }),
        key: `1`,
        contents: (0, z.jsx)(kt, {
          children: (0, z.jsx)(zR, { ...e, deckBlogContent: f }),
        }),
        onClick: v,
      },
      {
        name: (0, z.jsxs)(`div`, {
          className: xs,
          children: [
            (0, z.jsx)(Dt, { className: Cs }),
            (0, z.jsx)(g, { className: Ss }),
          ],
        }),
        key: `3`,
        contents: (0, z.jsx)(kt, { children: (0, z.jsx)(BR, { ...e }) }),
        onClick: v,
      },
      {
        name: (0, z.jsxs)(`div`, {
          className: xs,
          children: [`steamos`, (0, z.jsx)(h, { className: Ss })],
        }),
        key: `2`,
        contents: (0, z.jsx)(kt, {
          children: (0, z.jsx)(RR, { ...e, deckBlogContent: p }),
        }),
        onClick: v,
      },
      {
        name: (0, z.jsxs)(`div`, {
          className: xs,
          children: [
            (0, z.jsx)(ke, { className: ws }),
            (0, z.jsx)(_, { className: Ss }),
          ],
        }),
        key: `4`,
        contents: (0, z.jsx)(kt, { children: (0, z.jsx)(VR, { ...e }) }),
        onClick: v,
      },
    ];
  return (0, z.jsx)(IR, {
    children: (0, z.jsx)(hc, {
      tabs: y,
      classNameCtn: ys,
      classNameTabContent: vs,
      startingTab: c.toString(),
      preferredFocus: !0,
      bDisableRouting: !0,
      focusRingHasBorderRadius: !0,
    }),
  });
}
function IR(e) {
  let [t, n] = R.useState(!1),
    r = R.useRef(null),
    i = R.useCallback(() => {
      let e = r.current;
      e && n(e.scrollHeight > e.clientHeight);
    }, []),
    a = sn(i);
  return (0, z.jsx)(It, {
    ref: r,
    className: ns,
    children: (0, z.jsx)(ln, {
      ref: a,
      className: rs,
      focusableIfEmpty: t,
      noFocusRing: !0,
      children: e.children,
    }),
  });
}
function LR(e) {
  let {
      titleId: t,
      title: n,
      autoFocus: r,
      buttonProps: i,
      ratingIcon: a,
      ratingSummary: o,
      deckBlogContent: s,
      children: c,
    } = e,
    l = i ?? {};
  return (0, z.jsxs)(ln, {
    className: qo,
    ...l,
    children: [
      (0, z.jsxs)(`div`, {
        children: [
          (0, z.jsxs)(`div`, {
            id: t,
            className: Wo,
            children: [
              (0, z.jsx)(`div`, { className: Go, children: n }),
              (0, z.jsx)(`div`, { className: Ko, children: a }),
            ],
          }),
          o,
        ],
      }),
      s,
      (0, z.jsx)(ln, {
        autoFocus: r,
        focusableIfEmpty: r,
        noFocusRing: !0,
        children: c,
      }),
    ],
  });
}
function RR(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a =
      r.steamos_resolved_items &&
      r.steamos_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, z.jsx)(tz, {
      id: n,
      category: r.steamos_resolved_category ?? 0,
      appName: i,
    }),
    s = (0, z.jsx)($R, { category: r.steamos_resolved_category }),
    c = r.steamos_resolved_items && r.steamos_resolved_items?.length > 0;
  return (0, z.jsx)(LR, {
    titleId: t,
    title: M.Localize(
      `#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    ratingIcon: s,
    ratingSummary: o,
    ...e,
    children: (0, z.jsxs)(z.Fragment, {
      children: [
        c && (0, z.jsx)(`div`, { className: `BlWeoXRF0aE-` }),
        r.steamos_resolved_items &&
          r.steamos_resolved_items
            .filter((e) => e.display_type != 1)
            .map((e) =>
              (0, z.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, z.jsx)(WR, { displaytype: e.display_type }),
                    (0, z.jsx)(`span`, { children: M.Localize(e.loc_token) }),
                  ],
                },
                e.loc_token + e.display_type,
              ),
            ),
        a &&
          (0, z.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: r.steamos_resolved_items
              ?.filter((e) => e.display_type == 1)
              .map((e) =>
                (0, z.jsxs)(
                  `div`,
                  {
                    className: `-vnBPYbU1nw-`,
                    children: [
                      (0, z.jsx)(WR, { displaytype: e.display_type }),
                      (0, z.jsx)(`span`, { children: M.Localize(e.loc_token) }),
                    ],
                  },
                  e.loc_token + e.display_type,
                ),
              ),
          }),
      ],
    }),
  });
}
function zR(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, z.jsx)(ez, { id: n, category: r.resolved_category, appName: i }),
    s = (0, z.jsx)(QR, { category: r.resolved_category }),
    c = r.resolved_items && r.resolved_items?.length > 0;
  return (0, z.jsx)(LR, {
    titleId: t,
    title: M.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI`),
    ratingIcon: s,
    ratingSummary: o,
    ...e,
    children: (0, z.jsxs)(z.Fragment, {
      children: [
        c && (0, z.jsx)(`div`, { className: `BlWeoXRF0aE-` }),
        r.resolved_items &&
          r.resolved_items
            .filter((e) => e.display_type !== 1)
            .map((e) =>
              (0, z.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, z.jsx)(UR, { displaytype: e.display_type }),
                    (0, z.jsx)(`span`, {
                      children:
                        e.loc_token.charAt(0) == `#`
                          ? M.Localize(e.loc_token)
                          : M.Localize(`#` + e.loc_token),
                    }),
                  ],
                },
                e.loc_token + e.display_type,
              ),
            ),
        a &&
          r.resolved_items &&
          (0, z.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: r.resolved_items
              .filter((e) => e.display_type == 1)
              .map((e) =>
                (0, z.jsx)(
                  `div`,
                  {
                    className: `_00kSG69QbjI-`,
                    children: (0, z.jsx)(`span`, {
                      children: M.Localize(e.loc_token),
                    }),
                  },
                  e.loc_token + e.display_type,
                ),
              ),
          }),
        (0, z.jsx)(qR, { appid: r.appid, appName: i }),
      ],
    }),
  });
}
function BR(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.machine_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, z.jsx)(nz, {
      id: n,
      category: r.machine_resolved_category,
      appName: i,
    }),
    s = (0, z.jsx)(QR, { category: r.machine_resolved_category }),
    c = r.machine_resolved_items && r.machine_resolved_items?.length > 0;
  return (0, z.jsx)(LR, {
    titleId: t,
    title: M.Localize(
      `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    ratingIcon: s,
    ratingSummary: o,
    ...e,
    children: (0, z.jsxs)(z.Fragment, {
      children: [
        c && (0, z.jsx)(`div`, { className: `BlWeoXRF0aE-` }),
        r.machine_resolved_items &&
          r.machine_resolved_items
            .filter((e) => e.display_type !== 1)
            .map((e) =>
              (0, z.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, z.jsx)(UR, { displaytype: e.display_type }),
                    (0, z.jsx)(`span`, { children: M.Localize(e.loc_token) }),
                  ],
                },
                e.loc_token + e.display_type,
              ),
            ),
        a &&
          r.machine_resolved_items &&
          (0, z.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: r.machine_resolved_items
              .filter((e) => e.display_type == 1)
              .map((e) =>
                (0, z.jsx)(
                  `div`,
                  {
                    className: `_00kSG69QbjI-`,
                    children: (0, z.jsx)(`span`, {
                      children: M.Localize(e.loc_token),
                    }),
                  },
                  e.loc_token + e.display_type,
                ),
              ),
          }),
      ],
    }),
  });
}
function VR(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.frame_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, z.jsx)(rz, {
      id: n,
      category: r.frame_resolved_category ?? 0,
      appName: i,
    }),
    s = (0, z.jsx)(QR, { category: r.frame_resolved_category ?? 0 }),
    c = r.frame_resolved_items && r.frame_resolved_items?.length > 0;
  return (0, z.jsx)(LR, {
    titleId: t,
    title: M.Localize(
      `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    ratingIcon: s,
    ratingSummary: o,
    ...e,
    children: (0, z.jsxs)(z.Fragment, {
      children: [
        c && (0, z.jsx)(`div`, { className: `BlWeoXRF0aE-` }),
        r.frame_resolved_items &&
          r.frame_resolved_items
            .filter((e) => e.display_type !== 1)
            .map((e) =>
              (0, z.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, z.jsx)(UR, { displaytype: e.display_type }),
                    (0, z.jsx)(`span`, { children: M.Localize(e.loc_token) }),
                  ],
                },
                e.loc_token + e.display_type,
              ),
            ),
        a &&
          r.frame_resolved_items &&
          (0, z.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: r.frame_resolved_items
              .filter((e) => e.display_type == 1)
              .map((e) =>
                (0, z.jsx)(
                  `div`,
                  {
                    className: `_00kSG69QbjI-`,
                    children: (0, z.jsx)(`span`, {
                      children: M.Localize(e.loc_token),
                    }),
                  },
                  e.loc_token + e.display_type,
                ),
              ),
          }),
      ],
    }),
  });
}
function HR(e) {
  let { blogURL: t, eHWCompatibiltyDisplay: n } = e,
    r = Tt();
  if (!t) return null;
  if (r) {
    let e =
      n == 2
        ? M.Localize(`#SteamOS_DescriptionHeader_DeveloperBlog`)
        : M.Localize(`#SteamDeckVerified_DescriptionHeader_DeveloperBlog`);
    return (0, z.jsxs)(`div`, {
      className: as,
      children: [
        e,
        (0, z.jsx)(`div`, {
          className: ps,
          children: (0, z.jsx)(Is, { button: B.Y, type: Ms.Knockout }),
        }),
      ],
    });
  }
  let i =
    n == 2
      ? M.Localize(`#SteamOS_DescriptionHeader_DeveloperBlog_Desktop`)
      : M.Localize(
          `#SteamDeckVerified_DescriptionHeader_DeveloperBlog_Desktop`,
        );
  return (0, z.jsxs)(`div`, {
    className: as,
    children: [
      i,
      (0, z.jsx)(`a`, {
        href: t,
        className: Bo,
        children: M.Localize(`#SteamDeckVerified_ViewDeveloperPost`),
      }),
    ],
  });
}
function UR(e) {
  let { displaytype: t } = e;
  switch (t) {
    case 4:
      return (0, z.jsx)(fe, { className: fs });
    case 3:
      return (0, z.jsx)(Ge, { className: fs });
    case 2:
      return (0, z.jsx)(er, { className: fs });
    case 0:
      return (0, z.jsx)(lt, { className: fs });
    case 1:
      return null;
  }
}
function WR(e) {
  let { displaytype: t } = e;
  switch (t) {
    case 3:
      return (0, z.jsx)(ze, { className: fs });
    case 1:
      return (0, z.jsx)(De, { className: fs });
    default:
      return null;
  }
}
function GR(e) {
  let { histogram: t, deviceName: n, nFrameLimit: r, appName: i } = e,
    a = i
      ? M.Localize(`#GamePerformanceStats_FrameRateDistribution`, i, n)
      : M.Localize(`#GamePerformanceStats_FrameRateDistribution_ThisGame`, n);
  return (0, z.jsxs)(`div`, {
    className: $o,
    children: [
      (0, z.jsxs)(`div`, {
        children: [
          (0, z.jsx)(`div`, {
            className: es,
            children: M.Localize(`#GamePerformanceStats_MoreInfoTitle`),
          }),
          (0, z.jsx)(`div`, { children: a }),
        ],
      }),
      (0, z.jsx)(PR, { histogram: t, minWidth: 200, minHeight: 200 }),
      (0, z.jsx)(`div`, {
        className: es,
        children: M.Localize(`#GamePerformanceStats_MoreDetailsTitle`),
      }),
      (0, z.jsxs)(`div`, {
        className: ts,
        children: [
          (0, z.jsx)(`div`, {
            children: M.Localize(
              `#GamePerformanceStats_MoreDetails_Filtering`,
              n,
              r,
            ),
          }),
          (0, z.jsx)(`div`, {
            children: M.Localize(
              `#GamePerformanceStats_MoreDetails_VSync`,
              r / 2,
              r,
            ),
          }),
        ],
      }),
    ],
  });
}
var KR = [4, 3];
function qR(e) {
  let { appid: t, appName: n } = e,
    r = xc(t),
    { data: i } = Sc(void 0, !!r),
    [a, o] = R.useState(!1),
    [s, c] = R.useState(void 0),
    l = R.useRef(null),
    u = (0, R.useMemo)(() => {
      let e = new Map();
      for (let t of KR) {
        let n = r?.frame_rates?.find((e) => e.clusterid == `` + t);
        if (n) {
          let r = n.mean_frame_rate ?? 0;
          e.set(t, {
            average: r > 0 ? r.toFixed(0) : void 0,
            histogram: n.frame_rate_histogram,
            lastUpdated: n.last_updated,
          });
        }
      }
      return e;
    }, [r]),
    d = (0, R.useMemo)(() => {
      let e = !!u.get(3)?.average,
        t = !!u.get(4)?.average;
      return e &&
        ((i?.has_steam_deck_neptune && !i?.has_steam_deck_galileo) || !t)
        ? 3
        : 4;
    }, [u, i]),
    f = R.useMemo(
      () =>
        new Map([
          [3, M.Localize(`#GamePerformanceStats_SteamDeckLCD`)],
          [4, M.Localize(`#GamePerformanceStats_SteamDeckOLED`)],
        ]),
      [],
    );
  if (!r) return null;
  if (!Array.from(u.values()).some((e) => !!e.average))
    return (0, z.jsxs)(`div`, {
      className: Jo,
      children: [
        (0, z.jsx)(`div`, { className: ds }),
        (0, z.jsx)(`div`, {
          className: Yo,
          children: M.Localize(
            `#GamePerformanceStats_StillGatheringData_NoDevice`,
          ),
        }),
      ],
    });
  let p = KR.map((e) => ({
      name: (0, z.jsx)(`div`, { className: xs, children: f.get(e) }),
      key: e.toString(),
      contents: (0, z.jsx)(kt, {
        children: (0, z.jsx)(GR, {
          histogram: u.get(e)?.histogram,
          deviceName: f.get(e) ?? ``,
          nFrameLimit: e == 3 ? 60 : 90,
          appName: n,
        }),
      }),
      onClick: () => c(e),
    })),
    m = s ?? d,
    h = f.get(m) ?? ``,
    g = u.get(m)?.average,
    _ = u.get(m)?.lastUpdated ?? 0,
    v;
  if (g) {
    let e = (0, z.jsx)(`span`, {
      className: Zo,
      children: M.Localize(`#GameFrameRate_FPS`, g),
    });
    v = M.LocalizeReact(`#GameFrameRate_Description_ThisGame`, h, e);
  } else
    v = n
      ? M.Localize(`#GamePerformanceStats_StillGatheringData`, n, h)
      : M.Localize(`#GamePerformanceStats_StillGatheringData_ThisGame`, h);
  let y = !!g && !a;
  return (0, z.jsxs)(`div`, {
    className: Jo,
    onTransitionEnd: (e) => {
      e.propertyName == `height` &&
        l.current?.scrollIntoView({ behavior: `smooth`, block: `nearest` });
    },
    children: [
      (0, z.jsx)(`div`, { className: ds }),
      (0, z.jsxs)(ln, {
        className: Yo,
        onActivate: y ? () => o(!a) : void 0,
        focusable: y,
        children: [
          (0, z.jsxs)(`div`, {
            className: Xo,
            children: [
              v,
              y &&
                (0, z.jsx)(ae, {
                  className: `heKA7rr02xo-`,
                  direction: a ? `up` : `down`,
                }),
            ],
          }),
          !!g &&
            _ > 0 &&
            (0, z.jsx)(`div`, {
              className: `HKN5tcQd-XE-`,
              children: M.Localize(`#GameFrameRate_LastUpdated`, gn(_)),
            }),
        ],
      }),
      (0, z.jsx)(ot, {
        visible: a,
        children: (0, z.jsx)(`div`, {
          ref: l,
          className: Qo,
          children: (0, z.jsx)(hc, {
            tabs: p,
            classNameCtn: bs,
            startingTab: m.toString(),
            controlledTab: m.toString(),
            preferredFocus: !0,
            bDisableRouting: !0,
            focusRingHasBorderRadius: !0,
          }),
        }),
      }),
    ],
  });
}
function JR(e) {
  let { id: t, compatibility: n, onShowDialog: r } = e,
    { data: i } = nt(t),
    { data: a } = Ve(t),
    [o, s, c] = ve();
  if (!i || !a || i.item_type !== 0) return null;
  let l = null,
    u = null;
  if (n == 4) {
    let e = a.steam_frame_compat_category || 0;
    ((l = (0, z.jsx)(yn, { category: e })),
      (u = M.Localize(
        `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
      )));
  } else if (n == 3) {
    let e = a.steam_machine_compat_category || 0;
    ((l = (0, z.jsx)(Rt, { category: e })),
      (u = M.Localize(
        `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
      )));
  } else {
    let e = a.steam_deck_compat_category || 0;
    ((l = (0, z.jsx)(Fn, { category: e })),
      (u = M.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_Desktop`)));
  }
  return (0, z.jsxs)(`div`, {
    className: I(Ho, `LearnMoreCtn`),
    children: [
      l,
      (0, z.jsx)(Cn, {
        onClick: (e) => {
          (e.preventDefault(), (r ?? s)());
        },
        children: (0, z.jsx)(`span`, { className: Uo, children: u }),
      }),
      !r &&
        (0, z.jsx)(YR, {
          nAppID: i.appid,
          appName: i.name,
          active: o,
          startingTab: n,
          closeModal: c,
        }),
    ],
  });
}
function YR(e) {
  let { nAppID: t, active: n, appName: r, startingTab: i, closeModal: a } = e;
  return (0, z.jsx)(Qt, {
    active: n,
    children: (0, z.jsx)(ZR, {
      nAppID: t,
      appName: r,
      startingTab: i,
      closeModal: a,
    }),
  });
}
function XR(e) {
  let { url: t, containerClass: n, bIncludeIcon: r, onOpenBlogPost: i } = e;
  return (0, z.jsxs)(Cn, {
    className: n,
    onClick: () => {
      i ? i() : t && (window.location.href = t);
    },
    children: [
      r && (0, z.jsx)(`div`, { className: `PJ-pfpmq-JI-` }),
      (0, z.jsx)(`div`, {
        className: r ? _s : gs,
        children: M.Localize(
          `#SteamDeckVerified_Store_CompatSection_DeveloperComments`,
        ),
      }),
    ],
  });
}
function ZR(e) {
  let { nAppID: t, appName: n, startingTab: r, closeModal: i } = e,
    a = Mo(t),
    o = R.useId();
  return (0, z.jsx)(Ke, {
    "aria-labelledby": o,
    modalClassName: `DeckVerifiedModalDialog`,
    closeModal: i,
    onCancel: i,
    children: (0, z.jsx)(bn, {
      children: (0, z.jsx)(ln, {
        focusable: !1,
        "flow-children": `column`,
        className: is,
        children: a
          ? (0, z.jsx)(FR, {
              titleId: o,
              appName: n,
              results: a,
              eStartingTab: r,
            })
          : (0, z.jsx)(D, {
              size: `medium`,
              position: `center`,
              string: M.Localize(`#Loading`),
            }),
      }),
    }),
  });
}
function QR(e) {
  let { category: t } = e;
  switch (t) {
    case 3:
      return (0, z.jsx)(fe, { className: Vo, role: `presentation` });
    case 2:
      return (0, z.jsx)(Ge, { className: Vo, role: `presentation` });
    case 1:
      return (0, z.jsx)(er, { className: Vo, role: `presentation` });
    default:
      return (0, z.jsx)(lt, { className: Vo, role: `presentation` });
  }
}
function $R(e) {
  let { category: t } = e;
  switch (t) {
    case 2:
      return (0, z.jsx)(ze, { className: Vo, role: `presentation` });
    case 1:
      return (0, z.jsx)(er, { className: Vo, role: `presentation` });
    default:
      return (0, z.jsx)(lt, { className: Vo, role: `presentation` });
  }
}
function ez(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, z.jsx)(`div`, {
      id: t,
      className: as,
      children: r
        ? M.LocalizeReact(
            `#SteamDeckVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, z.jsx)(`b`, { children: O(r) }),
          )
        : M.Localize(`#SteamDeckVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamDeckVerified_DescriptionHeader_Verified`), (o = os));
      break;
    case 2:
      ((a = `#SteamDeckVerified_DescriptionHeader_Playable`), (o = ss));
      break;
    case 1:
      ((a = `#SteamDeckVerified_DescriptionHeader_Unsupported`), (o = cs));
  }
  let s = (0, z.jsx)(`span`, { className: o, children: M.Localize(iz(n)) }),
    c = (0, z.jsx)(`span`, { className: as, children: M.Localize(i || a) }),
    l = r
      ? M.LocalizeReact(
          `#SteamDeckVerified_DescriptionHeader_WithAppName`,
          (0, z.jsx)(`b`, { children: O(r) }),
          s,
          c,
        )
      : M.LocalizeReact(`#SteamDeckVerified_DescriptionHeader`, s, c);
  return (0, z.jsx)(`div`, { id: t, className: as, children: l });
}
function tz(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, z.jsx)(`div`, {
      className: as,
      children: r
        ? M.LocalizeReact(
            `#SteamOSCompatibility_DescriptionHeader_Unknown_WithAppName`,
            (0, z.jsx)(`b`, { children: O(r) }),
          )
        : M.Localize(`#SteamOSCompatibility_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 2:
      ((a = `#SteamOSCompatibility_DescriptionHeader_Compatible`), (o = ls));
      break;
    case 1:
      ((a = `#SteamOSCompatibility_DescriptionHeader_Unsupported`), (o = cs));
  }
  let s = (0, z.jsx)(`span`, { className: o, children: M.Localize(az(n)) }),
    c = (0, z.jsx)(`span`, { className: as, children: M.Localize(i || a) }),
    l = r
      ? M.LocalizeReact(
          `#SteamOSCompatibility_DescriptionHeader_WithAppName`,
          (0, z.jsx)(`b`, { children: O(r) }),
          s,
          c,
        )
      : M.LocalizeReact(`#SteamOSCompatibility_DescriptionHeader`, s, c);
  return (0, z.jsx)(`div`, { id: t, className: as, children: l });
}
function nz(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, z.jsx)(`div`, {
      className: as,
      children: r
        ? M.LocalizeReact(
            `#SteamMachineVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, z.jsx)(`b`, { children: O(r) }),
          )
        : M.Localize(`#SteamMachineVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamMachineVerified_DescriptionHeader_Verified`), (o = os));
      break;
    case 2:
      ((a = `#SteamMachineVerified_DescriptionHeader_Playable`), (o = ss));
      break;
    case 1:
      ((a = `#SteamMachineVerified_DescriptionHeader_Unsupported`), (o = cs));
  }
  let s = (0, z.jsx)(`span`, { className: o, children: M.Localize(iz(n)) }),
    c = (0, z.jsx)(`span`, { className: as, children: M.Localize(i || a) }),
    l = r
      ? M.LocalizeReact(
          `#SteamMachineVerified_DescriptionHeader_WithAppName`,
          (0, z.jsx)(`b`, { children: O(r) }),
          s,
          c,
        )
      : M.LocalizeReact(`#SteamMachineVerified_DescriptionHeader`, s, c);
  return (0, z.jsx)(`div`, { id: t, className: as, children: l });
}
function rz(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, z.jsx)(`div`, {
      className: as,
      children: r
        ? M.LocalizeReact(
            `#SteamFrameVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, z.jsx)(`b`, { children: O(r) }),
          )
        : M.Localize(`#SteamFrameVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamFrameVerified_DescriptionHeader_Verified`), (o = os));
      break;
    case 2:
      ((a = `#SteamFrameVerified_DescriptionHeader_Playable`), (o = ss));
      break;
    case 1:
      ((a = `#SteamFrameVerified_DescriptionHeader_Unsupported`), (o = cs));
  }
  let s = (0, z.jsx)(`span`, { className: o, children: M.Localize(iz(n)) }),
    c = (0, z.jsx)(`span`, { className: as, children: M.Localize(i || a) }),
    l = r
      ? M.LocalizeReact(
          `#SteamFrameVerified_DescriptionHeader_WithAppName`,
          (0, z.jsx)(`b`, { children: O(r) }),
          s,
          c,
        )
      : M.LocalizeReact(`#SteamFrameVerified_DescriptionHeader`, s, c);
  return (0, z.jsx)(`div`, { id: t, className: as, children: l });
}
function iz(e) {
  switch (e) {
    case 3:
      return `#SteamDeckVerified_Category_Verified`;
    case 2:
      return `#SteamDeckVerified_Category_Playable`;
    case 1:
      return `#SteamDeckVerified_Category_Unsupported`;
    default:
      return `#SteamDeckVerified_Category_Unknown`;
  }
}
function az(e) {
  switch (e) {
    case 2:
      return `#SteamOSCompatibility_Category_Compatible`;
    case 1:
      return `#SteamOSCompatibility_Category_Unsupported`;
    default:
      return `#SteamOSCompatibility_Category_Unknown`;
  }
}
function oz(e) {
  return e == 2 ? `bundle` : e == 1 ? `sub` : `app`;
}
function sz(e, t) {
  let n = t || +!!e;
  return [!!n, n];
}
var cz = (e) => {
  let { appid: t } = e,
    n = (0, z.jsx)(`div`, {
      className: `ImpressionTrackedElement`,
      children: e.children,
    });
  return t ? (0, z.jsx)(Pt, { appID: t, children: n }) : n;
};
function lz(e) {
  let { id: t } = e,
    { data: n } = On(t);
  return n
    ? (0, z.jsx)(`div`, {
        className: so,
        children: (0, z.jsx)(`div`, {
          className: co,
          children: n
            .slice(0, 10)
            .filter((e) => e.tagid)
            .map((e) =>
              (0, z.jsx)(
                TU,
                { tagid: e.tagid, className: lo },
                `tag_` + e.tagid,
              ),
            ),
        }),
      })
    : null;
}
function uz(e) {
  let {
      id: t,
      displayID: n,
      name: r,
      strStoreUrl: i,
      elElementToAppend: a,
      bShowDemoButton: o,
      bHideBottomHalf: s,
      bHidePrice: c,
      bShowDeckCompatibilityDialog: l,
      eHardwareCompatibilityDisplay: u,
      onShowDeckCompatibilityDialog: d,
      bUseSubscriptionLayout: f,
      nCreatorAccountID: p,
      bPreventNavigation: m,
      bShowDescription: h,
    } = e,
    g = JH(),
    _ =
      d &&
      (() => {
        (g?.(), d());
      }),
    [v, y] = (0, R.useState)(!1),
    [b, x] = (0, R.useState)(``),
    S = (e) => x(`translateY( -${e?.clientHeight || 0}px )`),
    { data: C } = nt(t),
    { data: w } = mn(n),
    T = !f && !o && !a,
    E = C && C.item_type == 0,
    [D, O] = sz(l, u);
  return (0, z.jsxs)(`div`, {
    className: no,
    style: { transform: s && v ? b : `` },
    onMouseEnter: () => y(!0),
    onFocus: () => y(!0),
    onMouseLeave: () => y(!1),
    onBlur: () => y(!1),
    children: [
      (0, z.jsxs)(`a`, {
        href: i,
        className: Za,
        onClick: (e) => {
          m && e.preventDefault();
        },
        "aria-disabled": m,
        children: [
          w &&
            (0, z.jsx)(`div`, {
              className: `JsLUT-ZChQQ-`,
              children: (0, z.jsx)(`div`, {
                className: I(`-G728TP4qEc-`, `AWrycDVaY80-`),
                children: (0, z.jsx)(`img`, {
                  loading: `lazy`,
                  src: be(w, `header`),
                  alt: C?.name,
                }),
              }),
            }),
          !c &&
            !f &&
            (0, z.jsx)(`div`, {
              className: `Er5Gw2jrA3A-`,
              children: (0, z.jsx)(Sz, { id: t, onlyOneDiscountPct: !0 }),
            }),
        ],
      }),
      (0, z.jsx)(`div`, {
        className: ro,
        ref: S,
        children: (0, z.jsxs)(`div`, {
          className: ao,
          children: [
            (0, z.jsx)(`a`, {
              href: i,
              onClick: (e) => {
                m && e.preventDefault();
              },
              "aria-disabled": m,
              children: (0, z.jsx)(`div`, {
                className: oo,
                children: C?.name || r,
              }),
            }),
            h && (0, z.jsx)(fz, { id: t }),
            (0, z.jsx)(lz, { id: t }),
            !D && (0, z.jsx)(xo, { id: t }),
            !(D || !T) &&
              (0, z.jsxs)(`div`, {
                className: `N6R56w3oY8s-`,
                children: [
                  (0, z.jsx)(hz, { id: t, strClassName: `aRGldfNGEPM-` }),
                  (0, z.jsx)(dz, { id: t }),
                ],
              }),
            o && (0, z.jsx)(uB, { id: t, className: `mVkwv5PYwMg-` }),
            !!(D && E) &&
              (0, z.jsx)(JR, { id: t, compatibility: O, onShowDialog: _ }),
            !!a && a,
            f &&
              E &&
              t &&
              `appid` in t &&
              t.appid &&
              (0, z.jsx)(zz, { appid: t.appid, bIsMuted: !1 }),
            p && (0, z.jsx)(TH, { nCreatorAccountID: p }),
          ],
        }),
      }),
    ],
  });
}
function dz(e) {
  let { id: t } = e,
    { data: n } = wt(t);
  if (!n) return null;
  let r = Na(n);
  return (0, z.jsx)(`div`, { className: uo, children: r });
}
function fz(e) {
  let { id: t } = e,
    { data: n } = dn(t);
  return n
    ? (0, z.jsx)(`div`, { className: io, children: n?.short_description })
    : null;
}
function pz(e) {
  let {
      id: t,
      displayID: n,
      strStoreUrl: r,
      bHideBottomHalf: i,
      bShowDeckCompatibilityDialog: a,
      eHardwareCompatibilityDisplay: o,
      bShowWishlistButton: s = !0,
      bShowIgnoreButton: c = !1,
    } = e,
    { data: l } = Le(t),
    { data: u } = yt(t),
    d = l === void 0 && u === void 0,
    [f] = sz(!!a, o);
  return (0, z.jsxs)(`div`, {
    className: I(Ka, d && `dNo27dzDPfI-`, zi, i && `djLCJl8FKv8-`),
    children: [
      (0, z.jsxs)(`a`, {
        href: r,
        className: qa,
        children: [
          !(!s || f) && (0, z.jsx)(Ao, { id: n, snr: e.strSNR }),
          !(!c || f) && (0, z.jsx)(VV, { id: n, snr: e.strSNR }),
          t && (0, z.jsx)(IH, { id: t }),
        ],
      }),
      (0, z.jsx)(uz, { ...e }),
    ],
  });
}
function mz(e) {
  let {
      id: t,
      name: n,
      bPreventNavigation: r,
      elElementToAppend: i,
      bShowDemoButton: a,
      bPreferDemoStorePage: o,
      bHidePrice: s,
      bUseSubscriptionLayout: c,
      strExtraParams: l,
      children: u,
      nCreatorAccountID: d,
      nWidthMultiplier: f,
      bShowDeckCompatibilityDialog: p,
      eHardwareCompatibilityDisplay: m,
      bShowWishlistButton: h = !0,
      bShowIgnoreButton: g = !1,
      bShowDescription: _ = !1,
      strChildLinkURL: v,
      ...y
    } = e,
    { data: b } = nt(t),
    x = Tt(),
    [S, C, w] = ve(),
    { strStoreURL: T, snr: E } = Gz(b, o);
  if ((!b && !n) || x) return (0, z.jsx)(z.Fragment, { children: u });
  let D = t;
  b &&
    b.item_type == 1 &&
    b.included_appids?.length == 1 &&
    (D = { appid: b.included_appids[0] });
  let O = QH() == `hiding`,
    k;
  r || (k = v ?? (b ? T : void 0));
  let [, ee] = sz(p, m),
    te;
  ee != 0 && b?.appid && b?.item_type == 0 && (te = b.appid);
  let ne = (0, z.jsx)(pz, {
      id: t,
      displayID: D,
      name: n,
      bPreventNavigation: r,
      strStoreUrl: k,
      elElementToAppend: i,
      bShowDemoButton: a,
      bShowDeckCompatibilityDialog: p,
      eHardwareCompatibilityDisplay: m,
      bHideBottomHalf: O,
      bHidePrice: s,
      bUseSubscriptionLayout: c,
      strSNR: E,
      nCreatorAccountID: d,
      bShowWishlistButton: h,
      bShowIgnoreButton: g,
      bShowDescription: _,
      onShowDeckCompatibilityDialog: te ? C : void 0,
    }),
    A = k && !v ? (0, z.jsx)(`a`, { href: k, children: u }) : u;
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(YH, {
        hoverContent: ne,
        nWidthMultiplier: f,
        ...y,
        children: A,
      }),
      te &&
        (0, z.jsx)(YR, {
          nAppID: te,
          appName: b?.name || n,
          startingTab: ee,
          active: S,
          closeModal: w,
        }),
    ],
  });
}
function hz(e) {
  let { id: t, strClassName: n, bMinimizePlatforms: r, bHideWindows: i } = e,
    { data: a } = Ve(t);
  if (!a) return null;
  if (r) {
    let e = i
      ? null
      : a?.windows &&
        (0, z.jsx)(`span`, {
          title: M.Localize(`#Platform_Windows`),
          children: (0, z.jsx)(en, {
            "aria-label": M.Localize(`#Platform_Windows`),
          }),
        });
    return (
      F.PLATFORM === `linux` && a?.steamos_linux
        ? (e = (0, z.jsx)(`span`, {
            title: M.Localize(`#Platform_Linux`),
            children: (0, z.jsx)(vt, {
              "aria-label": M.Localize(`#Platform_Linux`),
            }),
          }))
        : F.PLATFORM === `macos` && a?.mac
          ? (e = (0, z.jsx)(`span`, {
              title: M.Localize(`#Platform_Mac`),
              children: (0, z.jsx)(Ce, {
                "aria-label": M.Localize(`#Platform_Mac`),
              }),
            }))
          : a.vr_support?.vrhmd &&
            (e = (0, z.jsx)(`span`, {
              title: M.Localize(`#Platform_VR`),
              children: (0, z.jsx)(Ln, {
                "aria-label": M.Localize(`#Platform_VR`),
              }),
            })),
      e ? (0, z.jsx)(`span`, { className: I(Jr, n), children: e }) : null
    );
  }
  return (0, z.jsxs)(`span`, {
    className: I(Jr, n),
    children: [
      !i &&
        a.windows &&
        (0, z.jsx)(`span`, {
          title: M.Localize(`#Platform_Windows`),
          children: (0, z.jsx)(en, {
            "aria-label": M.Localize(`#Platform_Windows`),
          }),
        }),
      a.mac &&
        (0, z.jsx)(`span`, {
          title: M.Localize(`#Platform_Mac`),
          children: (0, z.jsx)(Ce, {
            "aria-label": M.Localize(`#Platform_Mac`),
          }),
        }),
      a.steamos_linux &&
        (0, z.jsx)(`span`, {
          title: M.Localize(`#Platform_Linux`),
          children: (0, z.jsx)(vt, {
            "aria-label": M.Localize(`#Platform_Linux`),
          }),
        }),
      a.vr_support?.vrhmd &&
        (0, z.jsx)(`span`, {
          title: M.Localize(`#Platform_VR`),
          children: (0, z.jsx)(Ln, {
            "aria-label": M.Localize(`#Platform_VR`),
          }),
        }),
    ],
  });
}
function gz(e) {
  switch (e?.toUpperCase()) {
    case `AE`:
      return 32;
    case `AU`:
      return 21;
    case `BR`:
      return 7;
    case `CA`:
      return 20;
    case `CH`:
    case `LI`:
      return 4;
    case `CL`:
      return 25;
    case `CN`:
    case `XC`:
      return 23;
    case `CO`:
      return 27;
    case `CR`:
      return 40;
    case `AD`:
    case `AL`:
    case `AT`:
    case `AX`:
    case `BA`:
    case `BE`:
    case `BG`:
    case `CY`:
    case `CZ`:
    case `DE`:
    case `DK`:
    case `EE`:
    case `ES`:
    case `FI`:
    case `FO`:
    case `FR`:
    case `GF`:
    case `GI`:
    case `GP`:
    case `GR`:
    case `HR`:
    case `HU`:
    case `IE`:
    case `IT`:
    case `LT`:
    case `LU`:
    case `LV`:
    case `MC`:
    case `ME`:
    case `MK`:
    case `MQ`:
    case `MT`:
    case `NC`:
    case `NL`:
    case `PF`:
    case `PT`:
    case `RE`:
    case `RO`:
    case `RS`:
    case `SE`:
    case `SI`:
    case `SJ`:
    case `SK`:
    case `SM`:
    case `VA`:
      return 3;
    case `GB`:
    case `GG`:
    case `GS`:
    case `IM`:
    case `JE`:
      return 2;
    case `HK`:
      return 29;
    case `ID`:
      return 10;
    case `IL`:
      return 35;
    case `IN`:
      return 24;
    case `JP`:
      return 8;
    case `KR`:
      return 16;
    case `KW`:
      return 38;
    case `KZ`:
      return 37;
    case `MX`:
      return 19;
    case `MY`:
      return 11;
    case `NO`:
      return 9;
    case `NZ`:
      return 22;
    case `PE`:
      return 26;
    case `PH`:
      return 12;
    case `PL`:
      return 6;
    case `QA`:
      return 39;
    case `RU`:
      return 5;
    case `SA`:
      return 31;
    case `SG`:
      return 13;
    case `TH`:
      return 14;
    case `TW`:
      return 30;
    case `UA`:
      return 18;
    case `AF`:
    case `AG`:
    case `AI`:
    case `AM`:
    case `AN`:
    case `AO`:
    case `AQ`:
    case `AR`:
    case `AS`:
    case `AW`:
    case `AZ`:
    case `BB`:
    case `BD`:
    case `BF`:
    case `BH`:
    case `BI`:
    case `BJ`:
    case `BM`:
    case `BN`:
    case `BO`:
    case `BS`:
    case `BT`:
    case `BV`:
    case `BW`:
    case `BY`:
    case `BZ`:
    case `CC`:
    case `CD`:
    case `CF`:
    case `CG`:
    case `CI`:
    case `CK`:
    case `CM`:
    case `CV`:
    case `CX`:
    case `DJ`:
    case `DM`:
    case `DO`:
    case `DZ`:
    case `EC`:
    case `EG`:
    case `EH`:
    case `ER`:
    case `ET`:
    case `FJ`:
    case `FK`:
    case `FM`:
    case `GA`:
    case `GD`:
    case `GE`:
    case `GH`:
    case `GL`:
    case `GM`:
    case `GN`:
    case `GQ`:
    case `GT`:
    case `GU`:
    case `GW`:
    case `GY`:
    case `HM`:
    case `HN`:
    case `HT`:
    case `IO`:
    case `IQ`:
    case `IS`:
    case `JM`:
    case `JO`:
    case `KE`:
    case `KG`:
    case `KH`:
    case `KI`:
    case `KM`:
    case `KN`:
    case `KY`:
    case `LA`:
    case `LB`:
    case `LC`:
    case `LK`:
    case `LR`:
    case `LS`:
    case `LY`:
    case `MA`:
    case `MD`:
    case `MG`:
    case `MH`:
    case `ML`:
    case `MM`:
    case `MN`:
    case `MO`:
    case `MP`:
    case `MR`:
    case `MS`:
    case `MU`:
    case `MV`:
    case `MW`:
    case `MZ`:
    case `NA`:
    case `NE`:
    case `NF`:
    case `NG`:
    case `NI`:
    case `NP`:
    case `NR`:
    case `NU`:
    case `OM`:
    case `PA`:
    case `PG`:
    case `PK`:
    case `PM`:
    case `PN`:
    case `PR`:
    case `PS`:
    case `PW`:
    case `PY`:
    case `RW`:
    case `SB`:
    case `SC`:
    case `SD`:
    case `SH`:
    case `SL`:
    case `SN`:
    case `SO`:
    case `SR`:
    case `ST`:
    case `SV`:
    case `SY`:
    case `SZ`:
    case `TC`:
    case `TD`:
    case `TF`:
    case `TG`:
    case `TJ`:
    case `TK`:
    case `TL`:
    case `TM`:
    case `TN`:
    case `TO`:
    case `TR`:
    case `TT`:
    case `TV`:
    case `TZ`:
    case `UG`:
    case `UM`:
    case `US`:
    case `UZ`:
    case `VC`:
    case `VE`:
    case `VG`:
    case `VI`:
    case `VU`:
    case `WF`:
    case `WS`:
    case `YE`:
    case `YT`:
    case `ZM`:
    case `ZW`:
      return 1;
    case `UY`:
      return 41;
    case `VN`:
      return 15;
    case `ZA`:
      return 28;
    default:
      return (
        e !== `IR` && console.assert(!1, `Unhandled country code: ${e}`), 1
      );
  }
}
var _z = {
    0: {},
    1: { strSymbol: `$` },
    2: { strSymbol: `£` },
    3: { strSymbol: `€`, strDecimalSymbol: `,`, strThousandsSeparator: ` ` },
    4: { strSymbol: `CHF` },
    5: {
      strSymbol: `руб.`,
      bSuffixSymbol: !0,
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ``,
    },
    6: {
      strSymbol: `zł`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ` `,
    },
    7: {
      strSymbol: `R$`,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    8: { strSymbol: `¥`, bWholeUnitsOnly: !0, bSpaceForSymbol: !0 },
    9: {
      strSymbol: `kr`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    10: {
      strSymbol: `Rp`,
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `.`,
      strThousandsSeparator: ` `,
    },
    11: { strSymbol: `RM` },
    12: { strSymbol: `P` },
    13: { strSymbol: `S$` },
    14: { strSymbol: `฿` },
    15: {
      strSymbol: `₫`,
      bWholeUnitsOnly: !0,
      bSuffixSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    16: { strSymbol: `₩`, bWholeUnitsOnly: !0, bSpaceForSymbol: !0 },
    17: {
      strSymbol: `TL`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    18: {
      strSymbol: `₴`,
      bSuffixSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ` `,
    },
    19: { strSymbol: `Mex$`, bSpaceForSymbol: !0 },
    20: { strSymbol: `CDN$`, bSpaceForSymbol: !0 },
    21: { strSymbol: `A$`, bSpaceForSymbol: !0 },
    22: { strSymbol: `NZ$`, bSpaceForSymbol: !0 },
    23: { strSymbol: `¥`, bSpaceForSymbol: !0 },
    24: { strSymbol: `₹`, bSpaceForSymbol: !0, bWholeUnitsOnly: !0 },
    25: {
      strSymbol: `CLP$`,
      bSpaceForSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    26: { strSymbol: `S/.` },
    27: {
      strSymbol: `COL$`,
      bSpaceForSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    28: {
      strSymbol: `R`,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `.`,
      strThousandsSeparator: ` `,
    },
    29: { strSymbol: `HK$`, bSpaceForSymbol: !0 },
    30: { strSymbol: `NT$`, bWholeUnitsOnly: !0, bSpaceForSymbol: !0 },
    31: { strSymbol: `SR`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    32: { strSymbol: `AED`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    33: { strSymbol: `kr`, bSpaceForSymbol: !0, bSuffixSymbol: !0 },
    34: {
      strSymbol: `ARS$`,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    35: { strSymbol: `₪` },
    36: { strSymbol: `Br` },
    37: {
      strSymbol: `₸`,
      bSuffixSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ` `,
    },
    38: { strSymbol: `KD`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    39: { strSymbol: `QR`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    40: {
      strSymbol: `₡`,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    41: {
      strSymbol: `$U`,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    42: { strSymbol: `лв`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    43: { strSymbol: `kn`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    44: { strSymbol: `Kč`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    45: { strSymbol: `kr.`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    46: { strSymbol: `Ft`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    47: { strSymbol: `lei`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    48: {},
  },
  vz = {
    strSymbol: ``,
    bSuffixSymbol: !1,
    bSpaceForSymbol: !1,
    bWholeUnitsOnly: !1,
    eCurrency: 0,
    strDecimalSymbol: `.`,
    strThousandsSeparator: `,`,
  };
function yz(e) {
  return { ...vz, ..._z[e], eCurrency: e };
}
function bz(e, t) {
  return xz(e, yz(t));
}
function xz(e, t) {
  let {
      strSymbol: n,
      bSuffixSymbol: r,
      bSpaceForSymbol: i,
      bWholeUnitsOnly: a,
      strDecimalSymbol: o,
      strThousandsSeparator: s,
    } = t,
    c = e < 0,
    l = a && e % 100 == 0;
  c && (e = -e);
  let u = [];
  for (let t = 0; t < 2; t++) (l || u.push(e % 10), (e = Math.floor(e / 10)));
  !l && o && u.push(o);
  let d = 0;
  do
    (d++ % 3 == 0 && d > 2 && s && u.push(s),
      u.push(e % 10),
      (e = Math.floor(e / 10)));
  while (e > 0);
  let f = u.reverse().join(``),
    p = i ? ` ` : ``,
    m = c ? `-` : ``;
  return r ? `${m}${f}${p}${n}` : `${m}${n}${p}${f}`;
}
function Sz(e) {
  let { id: t, bSelfPurchaseOption: n } = e,
    { data: r } = qe(t),
    { data: i } = nt(t);
  if (!i) return null;
  let a = n && i.item_type == 1 ? i.self_purchase_option : r;
  return (0, z.jsx)(Cz, { purchaseOption: a, ...e });
}
function Cz(e) {
  let {
      bSingleLineMode: t,
      onlyOneDiscountPct: n,
      id: r,
      purchaseOption: i,
      bHidePrePurchase: a,
      bHideReleaseDate: o,
      bHideIfDemo: s,
      bPurchaseOptionDisplay: c,
      strContainerClassName: l,
      strDiscountAndPriceClassName: u,
      strPriceFormattedClassName: d,
      bPreferWholeNumbers: f,
      bSelfPurchaseOption: p,
      bHideNewTag: m,
      bPrePurchaseBesidePrice: h,
    } = e,
    g = F.NOW,
    { data: _ } = wt(r),
    { data: v } = nt(r);
  if (!v) return null;
  let y = i,
    b = !m && Ia(_, g),
    x = I({
      [oi]: !0,
      [Ni]: t,
      StoreSalePriceWidgetContainer: !0,
      [Li]: b,
      [Kr]: c,
      [l ?? ``]: !!l,
    });
  if (e.bShowInLibrary)
    return (0, z.jsx)(`div`, {
      className: x,
      children: (0, z.jsx)(`div`, {
        className: Mi,
        children: M.Localize(`#EventDisplay_CallToAction_InLibrary`),
      }),
    });
  if (_ && _.is_coming_soon && (!y || (!y.packageid && !y.bundleid))) {
    if (o) return null;
    let e =
      _.coming_soon_display &&
      [`text_comingsoon`, `text_tba`].includes(_.coming_soon_display)
        ? xn(_)
        : M.Localize(`#EventDisplay_CallToAction_ComingSoon_Date`, Na(_));
    return (0, z.jsx)(`div`, {
      className: x,
      children: (0, z.jsx)(`div`, { className: Mi, children: e }),
    });
  }
  if (v.is_free) {
    if (!v.is_free_temporarily)
      return v.item_type == 0 && v.type == 1
        ? s
          ? null
          : (0, z.jsxs)(`div`, {
              className: x,
              children: [
                b &&
                  (0, z.jsx)(`div`, {
                    className: `eNdjZ1XB-fk-`,
                    children: M.Localize(`#Flag_New`),
                  }),
                (0, z.jsx)(`div`, {
                  className: Mi,
                  children: M.Localize(`#EventDisplay_CallToAction_FreeDemo`),
                }),
              ],
            })
        : (0, z.jsxs)(`div`, {
            className: x,
            children: [
              b &&
                (0, z.jsx)(`div`, {
                  className: `eNdjZ1XB-fk-`,
                  children: M.Localize(`#Flag_New`),
                }),
              (0, z.jsx)(`div`, {
                className: Mi,
                children: M.Localize(`#EventDisplay_CallToAction_FreeToPlay`),
              }),
            ],
          });
    if (y && y.is_free_to_keep && !y.formatted_original_price)
      return (0, z.jsx)(`div`, {
        className: x,
        children: (0, z.jsx)(`div`, {
          className: Mi,
          children: M.Localize(`#EventDisplay_CallToAction_Free`),
        }),
      });
  }
  if (!y || !y.formatted_final_price) return null;
  let S = v.item_type == 2,
    C = Nt(y),
    w = !!C && !C.nSupersededBundlePct,
    T = C?.nSupersededBundlePct ? C.nDiscountPct : y.discount_pct || 0,
    E = ((C || S) && (!n || w || (C && !t)) && y.bundle_discount_pct) || 0,
    D = y.formatted_final_price;
  if (f) {
    let e = { ...yz(gz(Ot.country_code.toUpperCase())), bWholeUnitsOnly: !0 };
    D = xz(Number.parseInt(y.final_price_in_cents || `0`), e);
  }
  let O = La(_, y);
  return (0, z.jsx)(wz, {
    bSingleLineMode: !!t,
    bBundleItem: S,
    nBaseDiscountPercentage: E,
    nDiscountPercentage: T,
    bIsPrePurchase: O,
    strBestPurchaseOriginalPriceFormatted:
      C?.strOriginalPrice || y.formatted_original_price || ``,
    strBestPurchasePriceFormatted: D,
    bHideDiscountPercentForCompliance: !!y.hide_discount_pct_for_compliance,
    bShowNewFlag: b,
    bHidePrePurchase: !!a,
    bPrePurchaseBesidePrice: h,
    strDiscountAndPriceClassName: u,
    strPriceFormattedClassName: d,
    bPurchaseOptionDisplay: c,
  });
}
function wz(e) {
  let {
      bSingleLineMode: t,
      nDiscountPercentage: n,
      bIsPrePurchase: r,
      nBaseDiscountPercentage: i,
      strBestPurchaseOriginalPriceFormatted: a,
      strBestPurchasePriceFormatted: o,
      bHideDiscountPercentForCompliance: s,
      bShowNewFlag: c,
      bHidePrePurchase: l,
      bPrePurchaseBesidePrice: u,
      strDiscountAndPriceClassName: d,
      strPriceFormattedClassName: f,
      bPurchaseOptionDisplay: p,
      bBundleItem: m,
    } = e,
    h = s,
    g;
  n &&
    (g = h
      ? M.Localize(`#Discount_ARIA_Label_SpecialPrice`, a)
      : M.Localize(`#Discount_ARIA_Label`, n, a, o));
  let _ = !((!n && !i) || h) && !!a,
    v = !(!i || !n || h || t),
    y = M.Localize(jt(!!i, !!n, !!m));
  return (0, z.jsxs)(`div`, {
    className: I({
      [oi]: !0,
      [Ni]: t,
      StoreSalePriceWidgetContainer: !0,
      [Ai]: !!n,
      Discounted: !!n,
      [Ii]: !!r,
      [Vi]: !!u,
      [Li]: !!c,
      [Kr]: p,
      [d ?? ``]: !!d,
    }),
    "aria-label": g,
    children: [
      !(!r || l) &&
        (0, z.jsx)(`div`, {
          className: I(`DfwzMU92EL4-`, `StoreSalePrepurchaseLabel`),
          children: (0, z.jsxs)(`span`, {
            children: [
              (0, z.jsx)(Yt, {}),
              M.Localize(`#EventDisplay_CallToAction_Prepurchase_Short`),
            ],
          }),
        }),
      !(r || !c) &&
        (0, z.jsx)(`div`, {
          className: `eNdjZ1XB-fk-`,
          children: M.Localize(`#Flag_New`),
        }),
      v &&
        (0, z.jsx)(de, {
          toolTipContent: y,
          children: (0, z.jsxs)(`span`, {
            className: I(`kjiBcsaqA8o-`, `_3jMC2e33p3s-`),
            children: [
              (0, z.jsx)(`span`, {
                className: `cCmCiA6FCMc-`,
                children: `-${i}%`,
              }),
              `-${n}%`,
            ],
          }),
        }),
      !(!i || h || v) &&
        (0, z.jsxs)(z.Fragment, {
          children: [
            (0, z.jsx)(de, {
              toolTipContent: y,
              children: (0, z.jsx)(`span`, {
                className: I(`_-1f811oo4iw-`),
                children: `-${i}%`,
              }),
            }),
            !!n &&
              (0, z.jsx)(de, {
                toolTipContent: y,
                children: (0, z.jsx)(`span`, {
                  className: I(`kjiBcsaqA8o-`),
                  children: `-${n}%`,
                }),
              }),
          ],
        }),
      !(i || !n || h) &&
        (0, z.jsx)(de, {
          toolTipContent: y,
          children: (0, z.jsx)(`div`, {
            className: I(`kjiBcsaqA8o-`, `StoreSaleDiscountBox`),
            children: `-${n}%`,
          }),
        }),
      !!(n && h) &&
        (0, z.jsx)(`div`, {
          className: `NqZ9uMSo13A-`,
          children: (0, z.jsx)(tt, {}),
        }),
      _
        ? (0, z.jsxs)(`div`, {
            className: I(Pi),
            children: [
              (0, z.jsx)(`div`, {
                className: I({ [Bi]: t, [Fi]: !t }),
                children: a,
              }),
              (0, z.jsx)(`div`, {
                className: I({ [Mi]: !0, [Ni]: t, [f ?? ``]: !!f }),
                children: o,
              }),
            ],
          })
        : (0, z.jsx)(`div`, {
            className: I({ [Mi]: !0, [f ?? ``]: !!f }),
            children: o,
          }),
    ],
  });
}
var Tz = `pE3kiYj-T9c-`,
  Ez = `bXqn3-4kGc8-`,
  Dz = `bNGFzJt9CmI-`,
  Oz = `vE1beFyJ7fE-`,
  kz = `jLH2MgXW2QA-`,
  Az = `dGNTZWr-al8-`,
  jz = `_8aFotqvmohI-`,
  Mz = `sjibpkgu4sc-`,
  Nz = `I09IQjtbMSg-`,
  Pz = `C4-YRfvAL7Q-`;
async function Fz(e, t) {
  let n = `steam://run/` + e;
  P.IN_CLIENT
    ? (console.log(`Running game ${e} locally.`), (window.location.href = n))
    : (console.log(
        `Cannot identify local client. Prompting user to launch ${e}.`,
      ),
      Lz(e, n, t));
}
async function Iz(e, t) {
  let n = `steam://install/` + e;
  P.IN_CLIENT ? (window.location.href = n) : Lz(e, n, t);
}
async function Lz(e, t, n) {
  console.log(`prompting for`, n);
  let r = P.STORE_BASE_URL + `about/`;
  Ye(
    (0, z.jsx)(Rz, {
      appid: e,
      strGameName: n || ``,
      strOnOKUrl: t,
      strDownloadSteamUrl: r,
    }),
    window,
  );
}
var Rz = (e) => {
  let t = () => e.closeModal && e.closeModal();
  return (0, z.jsx)(Ne, {
    onEscKeypress: t,
    className: Tz,
    children: (0, z.jsxs)(Nn, {
      children: [
        (0, z.jsxs)(zn, { children: [` `, N(`#GotSteam_Title`), ` `] }),
        (0, z.jsxs)(bn, {
          children: [
            (0, z.jsx)(cn, {
              children: ce(
                `#GotSteam_PromptWithDownloadLink`,
                (0, z.jsx)(`a`, {
                  href: e.strDownloadSteamUrl,
                  className: Ez,
                  children: N(`#GotSteam_DownloadLinkText`),
                }),
                (0, z.jsx)(`span`, { className: Dz, children: e.strGameName }),
              ),
            }),
            (0, z.jsxs)(`div`, {
              className: Oz,
              children: [
                (0, z.jsxs)(`a`, {
                  href: e.strOnOKUrl,
                  onClick: t,
                  className: I(kz, Az),
                  children: [
                    (0, z.jsxs)(`div`, {
                      className: jz,
                      children: [` `, N(`#GotSteam_Yes`), ` `],
                    }),
                    (0, z.jsxs)(`div`, {
                      className: Mz,
                      children: [` `, N(`#GotSteam_Yes_Play`), ` `],
                    }),
                  ],
                }),
                (0, z.jsxs)(`a`, {
                  href: e.strDownloadSteamUrl,
                  onClick: t,
                  className: kz,
                  children: [
                    (0, z.jsxs)(`div`, {
                      className: jz,
                      children: [` `, N(`#GotSteam_No`), ` `],
                    }),
                    (0, z.jsxs)(`div`, {
                      className: Mz,
                      children: [` `, N(`#GotSteam_No_Download`), ` `],
                    }),
                  ],
                }),
              ],
            }),
            (0, z.jsxs)(`div`, {
              className: Nz,
              children: [
                (0, z.jsx)(vt, { className: Pz }),
                N(`#GotSteam_Blurb`),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
function zz(e) {
  let { appid: t, bIsMuted: n } = e,
    r = cr(t),
    i = hr(t),
    { data: a } = nt(r),
    { mutate: o } = Wa(r),
    s = (e) => {
      (e.preventDefault(), i ? Fz(t, a?.name) : o());
    },
    c = I(ni, n && void 0, i ? ri : ii);
  return (0, z.jsx)(`div`, {
    role: `button`,
    tabIndex: 0,
    onClick: s,
    className: c,
    onKeyDown: (e) => {
      (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), s(e));
    },
    children: N(i ? `#Sale_PlayNow` : `#Sale_AddToLibrary`),
  });
}
function Bz(e) {
  let t = e?.jsondata?.read_more_link;
  if (!t) return;
  let n = xt(t).toLocaleLowerCase();
  return n ? [n] : void 0;
}
function Vz(e, t) {
  return ye(e, Bz(t));
}
function Hz(e, t) {
  if (!e) return ``;
  if (!ye(e)) return _t(e);
  let n = Vz(e, t) ? $e(e) : e;
  return (F.IN_CLIENT ? `steam://openurl_external/` : ``) + n;
}
function Uz(e, t, n) {
  let r = e.toLowerCase().startsWith(`http`) ? e : `http://` + e;
  return (0, z.jsx)(Wz, { url: r, event: t, children: n || e });
}
var Wz = (e) => {
  let { url: t, event: n, className: r, style: i } = e,
    a = st(t);
  a = Hz(a, n);
  let o = ye(a) ? `noopener nofollow` : void 0,
    s =
      typeof e.children == `string` &&
      e.children.length > 0 &&
      t &&
      !t.startsWith(`steam://`)
        ? Oe(t)
        : void 0;
  return (0, z.jsx)(de, {
    toolTipContent: s,
    direction: `top`,
    children: (0, z.jsx)(Cn, {
      className: r,
      href: a,
      rel: o,
      id: e.id,
      style: i,
      children: e.children,
    }),
  });
};
function Gz(e, t) {
  let n = Be(),
    r = Fe(),
    i = Hz(y(e, t));
  return { snr: Ue(n), strStoreURL: Me(i, n, r) };
}
function Kz(e, t, n, r, i) {
  return qz(
    [{ packageid: e, bundleid: t, bIsGift: n, nAccountIDGiftee: r }],
    i,
  );
}
function qz(e, t) {
  let n = En(),
    r = hn(),
    i = s(),
    { storeBrowseContext: a, dataLoader: o } = Kt(),
    { country: c } = a,
    l = Dn(t);
  return f({
    mutationFn: async () => {
      if (e.length == 0 || !e.every((e) => e.packageid || e.bundleid))
        throw `Every item must have a valid package or bundle id`;
      let t;
      if (tr(n)) {
        let [a, o] = await he(r, c, e, l);
        if (a == 1) ((t = o.line_item_ids), un(i, n, o.cart));
        else throw `AddItemsToAccountCart failed with ${a}`;
      } else if (pe(n)) {
        let a = e.map((e) => e.packageid).filter(Se),
          o = e.map((e) => e.bundleid).filter(Se);
        if (o.length > 1)
          throw `The anonymous cart can only take one bundle per call`;
        let [s, c] = await Kn(
          r,
          a.length > 0 ? a : void 0,
          o[0],
          e.some((e) => e.bIsGift),
          e.find((e) => e.nAccountIDGiftee)?.nAccountIDGiftee,
        );
        if (s == 1 && c) {
          let e = new Set(a),
            r = new Set(o);
          ((t =
            c.lineitems
              ?.filter(
                (t) =>
                  (t.package_item &&
                    !t.package_item.gidbundle &&
                    e.has(t.package_item.packageid)) ||
                  (t.bundle_item && r.has(t.bundle_item.bundleid)),
              )
              ?.map((e) => e.gidlineitem) || []),
            un(i, n, gt(c)));
        } else throw `AddItemsToAnonymousCart failed with ${s}`;
      } else throw `Invalid cart type`;
      return t;
    },
    onMutate: () => {
      (async () => {
        let t = e.map((e) =>
          e.packageid ? { packageid: e.packageid } : { bundleid: e.bundleid },
        );
        (await Promise.all(t.map((e) => i.fetchQuery(nn(o, e))))).forEach(
          (e, n) => {
            let r =
              e?.included_appids?.length == 1
                ? { appid: e.included_appids[0] }
                : t[n];
            (i.prefetchQuery(wn(o, r)), i.prefetchQuery(qn(o, r)));
          },
        );
      })();
    },
  });
}
var Jz = e(d(), 1);
async function Yz(e, t) {
  let n = Zn.Init($t);
  (n.Body().set_context(_n(!1)), t.forEach((e) => n.Body().add_packageid(e)));
  let r = await rn.GetHardwareItems(e, n);
  return r.BSuccess()
    ? r
        .Body()
        .details()
        .map((e) => e.toObject())
    : (console.error(`GetHardareDetails failed on packages: ${t.join(`,`)}`),
      null);
}
function Xz(e) {
  let t = tB(hn());
  return p($z(t, e));
}
var Zz = (function (e) {
  return (
    (e[(e.k_Loading = 0)] = `k_Loading`),
    (e[(e.k_LoadSuccess = 1)] = `k_LoadSuccess`),
    (e[(e.k_LoadFailure = 2)] = `k_LoadFailure`),
    e
  );
})({});
function Qz(e) {
  let t = tB(hn()),
    n = u({ queries: e.map((n) => ({ ...$z(t, n), enabled: e.length > 0 })) }),
    r = n.some((e) => e.isLoading),
    i = n.some((e) => e.isError || e.data === null),
    a,
    o = 0;
  return (
    i
      ? ((a = null), (o = 2))
      : r
        ? ((a = void 0), (o = 0))
        : ((a = n.map((e) => e.data)), (o = 1)),
    { rgHardwareDetails: a, eHardwareLoadingState: o }
  );
}
function $z(e, t) {
  return { queryKey: eB(t), queryFn: async () => e.load(t), enabled: !!t };
}
function eB(e) {
  return [`hardwaredetail`, e];
}
function tB(e) {
  return h(`HardwareDetailLoader`, () => nB(e));
}
function nB(e) {
  return new Jz.default(async (t) => {
    let n = await Yz(e, t),
      r = new Map();
    return (
      n &&
        n.forEach((e) => {
          e.packageid && r.set(e.packageid, e);
        }),
      t.map((e) => r.get(e) || null)
    );
  });
}
var rB = { high_pending_orders: !1, inventory_available: !0 };
function iB(e) {
  let { data: t } = nt(e),
    n = t?.item_type === 1 && t.type === 10,
    { data: r } = Xz(n ? t.id : void 0);
  return t ? (n ? (r ?? null) : rB) : null;
}
var aB = `wvEYeGaFmt0-`,
  oB = `GW1050ijiP0-`;
function sB(e) {
  let { id: t, className: n } = e,
    r = Be(),
    { data: i } = nt(t),
    { data: a } = wt(t),
    { data: o } = Ze(t),
    s = iB(t),
    { bIsOwned: c } = vr(t),
    l = ft(i),
    u = (0, R.useCallback)(() => {
      if (i) {
        let e = i.appid;
        (i.related_items?.parent_appid &&
          i.type != 11 &&
          (e = i.related_items.parent_appid),
          xe(window, `steam://run/${e}`));
      }
    }, [i]);
  if (!i || !a || !o || i.type == 8) return null;
  let d =
    i.is_free ||
    (o.final_price_in_cents != null && o.final_price_in_cents == `0`) ||
    (o.discount_pct && o.discount_pct >= 100);
  if (i.item_type == 1) {
    if (i.type == 10) {
      if (!s) return (0, z.jsx)(D, { size: `small`, position: `center` });
      if (!s.inventory_available)
        return (0, z.jsx)(`div`, {
          className: I(oB, n),
          children: (0, z.jsxs)(`span`, {
            children: [` `, M.Localize(`#Sale_ReserveExhausted`)],
          }),
        });
    } else if (d && i.included_appids && i.included_appids.length > 1)
      return null;
  }
  if (i.item_type == 0) {
    if ((a.is_coming_soon && !o.packageid) || (c && i.type === 10)) return null;
    if (!c && o.is_free_to_keep) {
      if (P.IN_CLIENT || Qn() != `store`) {
        let e = `${P.IN_CLIENT ? `steam://openurl/` : ``}${l}`;
        return (0, z.jsx)(`div`, {
          onClick: (t) => xe(t, e),
          className: I(aB, n),
          children: (0, z.jsx)(`span`, {
            children: M.Localize(`#EventDisplay_CallToAction_VisitStore`),
          }),
        });
      }
      {
        let e = Te(`${P.STORE_BASE_URL}freelicense/addfreelicense`, r);
        return (0, z.jsxs)(`form`, {
          action: e,
          method: `POST`,
          children: [
            (0, z.jsx)(`input`, {
              type: `hidden`,
              name: `subid`,
              value: o.packageid,
            }),
            (0, z.jsx)(`input`, {
              type: `hidden`,
              name: `sessionid`,
              value: rt(),
            }),
            (0, z.jsx)(`button`, {
              className: I(aB, n),
              type: `submit`,
              children: M.Localize(`#EventDisplay_CallToAction_AddToAccount`),
            }),
          ],
        });
      }
    }
    if ((c || d) && !i.is_coming_soon) {
      let e = M.Localize(`#EventDisplay_CallToAction_PlayNowForFree`);
      return (
        c
          ? (e = M.Localize(`#EventDisplay_CallToAction_PlayNow`))
          : i.is_free_temporarily &&
            (e = M.Localize(`#EventDisplay_CallToAction_AddToAccount`)),
        (0, z.jsx)(`div`, {
          className: I(aB, n),
          onClick: u,
          children: (0, z.jsx)(`span`, { children: e }),
        })
      );
    }
    if (o.formatted_final_price == ``)
      return (0, z.jsx)(`a`, {
        href: l,
        className: I(aB, n),
        children: M.Localize(`#EventDisplay_CallToAction_VisitStore`),
      });
  }
  return (0, z.jsx)(cB, {
    className: n,
    storeItemBestPurchaseOption: o,
    storeItemDefaultData: i,
  });
}
function cB(e) {
  let {
      className: t,
      storeItemBestPurchaseOption: n,
      storeItemDefaultData: r,
    } = e,
    i = Be(),
    { mutate: a } = Kz(n?.packageid, n?.bundleid, !1, void 0, i.feature);
  return (0, z.jsx)(`div`, {
    className: I(aB, t),
    onClick: () => a(),
    children: (0, z.jsx)(`span`, { children: M.Localize(`#Store_AddToCart`) }),
  });
}
var lB = `_8xhMURZRDBY-`;
function uB(e) {
  let { id: t, className: n } = e,
    { data: r } = nt(t);
  if (!r) return null;
  let i =
      r.related_items?.demo_appid && r.related_items.demo_appid
        ? r.related_items.demo_appid
        : [],
    a = i.length > 0,
    o = a || r.type === 1,
    s = o
      ? M.Localize(`#Sale_InstallDemo_ttip`, r.name || ``)
      : a
        ? M.Localize(`#Sale_CannotInstallDemo_ttip`, r.name || ``)
        : M.Localize(`#Loading`);
  if (F.IN_MOBILE_WEBVIEW) {
    if (o && a) {
      let e = r.type === 1 ? r.appid : i[0];
      return (0, z.jsx)(`div`, {
        className: n,
        children: (0, z.jsx)(yU, { appid: e }),
      });
    }
    return null;
  }
  return !o && a && r.is_free
    ? (0, z.jsx)(sB, { id: t, className: n })
    : (0, z.jsx)(Ct, {
        toolTipContent: s,
        onClick: (e) => {
          (e.preventDefault(),
            e.stopPropagation(),
            o && Fz(r.type === 1 ? r.appid : i[0], r.name));
        },
        className: I(n, lB, !o && `gpIFsnR2ZGs-`),
        children: o
          ? M.Localize(`#Sale_InstallDemo`)
          : M.Localize(`#Sale_DemoNotFound`),
      });
}
var $ = {};
(($.arabic = () =>
  j(() => import(`./chunk~dab13398e5.js`), [], import.meta.url)),
  ($.brazilian = () =>
    j(() => import(`./chunk~dab1246145.js`), [], import.meta.url)),
  ($.bulgarian = () =>
    j(() => import(`./chunk~4bdff36891.js`), [], import.meta.url)),
  ($.czech = () =>
    j(() => import(`./chunk~2545b0937f.js`), [], import.meta.url)),
  ($.danish = () =>
    j(() => import(`./chunk~dd0ba56211.js`), [], import.meta.url)),
  ($.dutch = () =>
    j(() => import(`./chunk~3082dc6760.js`), [], import.meta.url)),
  ($.english = () =>
    j(() => import(`./chunk~5d62d6ca8b.js`), [], import.meta.url)),
  ($.finnish = () =>
    j(() => import(`./chunk~4f95d7925a.js`), [], import.meta.url)),
  ($.french = () =>
    j(() => import(`./chunk~11a8bb7eb1.js`), [], import.meta.url)),
  ($.german = () =>
    j(() => import(`./chunk~edd1a7534c.js`), [], import.meta.url)),
  ($.greek = () =>
    j(() => import(`./chunk~3f51d22cb3.js`), [], import.meta.url)),
  ($.hungarian = () =>
    j(() => import(`./chunk~670fab083e.js`), [], import.meta.url)),
  ($.indonesian = () =>
    j(() => import(`./chunk~13e12dd392.js`), [], import.meta.url)),
  ($.italian = () =>
    j(() => import(`./chunk~adba104c1f.js`), [], import.meta.url)),
  ($.japanese = () =>
    j(() => import(`./chunk~4eec58f087.js`), [], import.meta.url)),
  ($.koreana = () =>
    j(() => import(`./chunk~bba5046be4.js`), [], import.meta.url)),
  ($.latam = () =>
    j(() => import(`./chunk~ea21cd4d57.js`), [], import.meta.url)),
  ($.malay = () =>
    j(() => import(`./chunk~308b243181.js`), [], import.meta.url)),
  ($.norwegian = () =>
    j(() => import(`./chunk~5ac43a3563.js`), [], import.meta.url)),
  ($.polish = () =>
    j(() => import(`./chunk~4f755de70e.js`), [], import.meta.url)),
  ($.portuguese = () =>
    j(() => import(`./chunk~24c4d88bb0.js`), [], import.meta.url)),
  ($.romanian = () =>
    j(() => import(`./chunk~12e32dc158.js`), [], import.meta.url)),
  ($.russian = () =>
    j(() => import(`./chunk~826f71c3ec.js`), [], import.meta.url)),
  ($.sc_schinese = () =>
    j(() => import(`./chunk~c4ad2ce98c.js`), [], import.meta.url)),
  ($.schinese = () =>
    j(() => import(`./chunk~4471e18869.js`), [], import.meta.url)),
  ($.spanish = () =>
    j(() => import(`./chunk~2c71f9094b.js`), [], import.meta.url)),
  ($.swedish = () =>
    j(() => import(`./chunk~e0ccea11c6.js`), [], import.meta.url)),
  ($.tchinese = () =>
    j(() => import(`./chunk~4e11e578eb.js`), [], import.meta.url)),
  ($.thai = () =>
    j(() => import(`./chunk~6b7e311b97.js`), [], import.meta.url)),
  ($.turkish = () =>
    j(() => import(`./chunk~19221a0d49.js`), [], import.meta.url)),
  ($.ukrainian = () =>
    j(() => import(`./chunk~89f3b39bfb.js`), [], import.meta.url)),
  ($.vietnamese = () =>
    j(() => import(`./chunk~bdb7ec474f.js`), [], import.meta.url)));
async function dB(e) {
  if ($[e]) return await $[e]();
}
var fB = Qe(dB);
function pB(e) {
  let { closeModal: t, strDescOverride: n } = e;
  return (0, z.jsx)(pn, {
    strTitle: fB.Localize(`#LoginRedirect_Dialog_Title`),
    strDescription: n || fB.Localize(`#LoginRedirect_Dialog_Description`),
    onCancel: t,
    strOKButtonText: M.Localize(`#Button_OK`),
    onOK: () => {
      (_(), t());
    },
  });
}
function mB(e) {
  let [t, n, r] = ve();
  return {
    elDialogElement: (0, z.jsx)(Qt, {
      active: t,
      children: (0, z.jsx)(pB, { closeModal: r, strDescOverride: e }),
    }),
    fnShowLogonDialog: n,
  };
}
function hB(e) {
  let { label: t, strDialogDesc: n } = e,
    { elDialogElement: r, fnShowLogonDialog: i } = mB(n);
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(In, {
        onClick: i,
        children: t || M.Localize(`#Login_SignIn`),
      }),
      r,
    ],
  });
}
var gB = t({
    AlbumCoverImage: () => iV,
    AlbumTitle: () => aV,
    AppSummaryWidgetCtn: () => RB,
    CarouselCapsuleAnimated: () => LB,
    CarouselCapsuleBordered: () => IB,
    CarouselDisplay: () => bB,
    CarouselPage: () => _V,
    CarouselSalePageCapsule: () => zB,
    CustomStyle_together: () => UB,
    DefaultCreatorCtn: () => xV,
    DesktopTabs: () => dV,
    DisabledBackground: () => wB,
    EmptySectionPreview: () => $B,
    EventSectionViewAllCtn: () => SV,
    HorizontalScrollInDragForceCursor: () => hV,
    Hover: () => AB,
    JumpToButton: () => NB,
    JumpToSection: () => MB,
    JumpedTo: () => jB,
    LinkCapsule: () => eV,
    LoginButton: () => OB,
    MobileTabSelector: () => sV,
    MobileTabSelectorButton: () => lV,
    MobileTabSelectorDropDown: () => fV,
    MobileTabSelectorOption: () => pV,
    MobileTabSelectorShortcut: () => uV,
    NoTopPadding: () => SB,
    SaleBackground: () => KB,
    SaleBroadcastCtn: () => BB,
    SaleBroadcastSection: () => gV,
    SaleHeaderContainer: () => CB,
    SaleNewSizing: () => WB,
    SaleOuterContainer: () => HB,
    SaleOuterTopMargin: () => VB,
    SaleOverlay: () => FB,
    SaleOverlayCtn: () => PB,
    SalePageBroadcastContextHover: () => rV,
    SalePageLogoSet: () => GB,
    SaleSection: () => yB,
    SaleSectionBackgroundImageGroupEdit: () => CV,
    SaleSectionContainer: () => YB,
    SaleSectionCtn: () => xB,
    SaleSectionLivePreview: () => kB,
    SaleSectionLoginPrompt: () => DB,
    SaleSectionSubtext: () => JB,
    SaleSectionTabListContainer: () => oV,
    SaleSectionTabs: () => TB,
    SaleSectionTitleCtn: () => qB,
    SaleTabLabel: () => bV,
    SaleViewAll: () => EB,
    TabButton: () => yV,
    TabButtonsCtn: () => vV,
    TabContentsContainer: () => mV,
    Visible: () => cV,
    default: () => wV,
    "duration-app-launch": () => _B,
    fullscreen_bg: () => tV,
    fullscreen_bg_video: () => nV,
    narrowWidth: () => vB,
    preview_placeholder_section: () => QB,
    vr_required: () => ZB,
    vr_supported: () => XB,
  }),
  _B = `800ms`,
  vB = `500px`,
  yB = `_5uN-ZG0AdmQ-`,
  bB = `_1z-QD5sz6XA-`,
  xB = `BjU45TzF-sA-`,
  SB = `QYv8zbj--Ck-`,
  CB = `fgKHCBFFyCk-`,
  wB = `iZzul86MCHw-`,
  TB = `A3eo6r5OuXY-`,
  EB = `dp33i3JEBBw-`,
  DB = `FyvPogThu-8-`,
  OB = `QSC5IqjmQXQ-`,
  kB = `_4V-KrqNLPmQ-`,
  AB = `_5ogwM4KIkcI-`,
  jB = `Gl6SVCjLh9k-`,
  MB = `d2m-PEeOVmY-`,
  NB = `BxPO-muNnTI-`,
  PB = `aOA-KMNFbEE-`,
  FB = `QYd-JimFMMk-`,
  IB = `_9PVhWUbR3rk-`,
  LB = `giUOrzG6Ujs-`,
  RB = `zct4M8EzfNo-`,
  zB = `FolDBzXMW2I-`,
  BB = `_0pSO3K-0Hs4-`,
  VB = `_9D3431c8-XE-`,
  HB = `G-t-vlNhbRM-`,
  UB = `BFlA7ucDxBk-`,
  WB = `_5NaHSqwUb-k-`,
  GB = `RG63SnOtLk0-`,
  KB = `XuI82j9l9uk-`,
  qB = `_29km0evCwsI-`,
  JB = `pL8IDIWBDg8-`,
  YB = `EbBLppwfKjc-`,
  XB = `EGwn6tH7C3A-`,
  ZB = `p8u1MHwjP-M-`,
  QB = `h-z1TiT2EHc-`,
  $B = `lVRRRKgBwVY-`,
  eV = `DH6P5MgdIW4-`,
  tV = `v-DWOHY9-II-`,
  nV = `tXTiGEi7jtU-`,
  rV = `v2nIqzREAqo-`,
  iV = `YWSh4uKYrRw-`,
  aV = `rSkuhIlNBLw-`,
  oV = `_9tUDGLmuFv4-`,
  sV = `_4AjIhoHXOgI-`,
  cV = `Q-Ikm9aXlIY-`,
  lV = `j3KNKPgNrvY-`,
  uV = `_0TmI5Lz4Zkc-`,
  dV = `_6VXiW9d8-lQ-`,
  fV = `t274EZYLkbA-`,
  pV = `gni2wFLBcSk-`,
  mV = `Rbv-UgEUoaw-`,
  hV = `OvCIJMOKBQ8-`,
  gV = `_0lI2wcrU0XU-`,
  _V = `CuZwu-t3ukQ-`,
  vV = `bevr-bUWbuk-`,
  yV = `yedrb7j8BiU-`,
  bV = `hAnG1YoY-8k-`,
  xV = `u8sMh8Um98Q-`,
  SV = `JuZBiq95wYE-`,
  CV = `oh4R-N9DrSA-`,
  wV = {
    "duration-app-launch": `800ms`,
    narrowWidth: vB,
    SaleSection: yB,
    CarouselDisplay: bB,
    SaleSectionCtn: xB,
    NoTopPadding: SB,
    SaleHeaderContainer: CB,
    DisabledBackground: wB,
    SaleSectionTabs: TB,
    SaleViewAll: EB,
    SaleSectionLoginPrompt: DB,
    LoginButton: OB,
    SaleSectionLivePreview: kB,
    Hover: AB,
    JumpedTo: jB,
    JumpToSection: MB,
    JumpToButton: NB,
    SaleOverlayCtn: PB,
    SaleOverlay: FB,
    CarouselCapsuleBordered: IB,
    CarouselCapsuleAnimated: LB,
    AppSummaryWidgetCtn: RB,
    CarouselSalePageCapsule: zB,
    SaleBroadcastCtn: BB,
    SaleOuterTopMargin: VB,
    SaleOuterContainer: HB,
    CustomStyle_together: UB,
    SaleNewSizing: WB,
    SalePageLogoSet: GB,
    SaleBackground: KB,
    SaleSectionTitleCtn: qB,
    SaleSectionSubtext: JB,
    SaleSectionContainer: YB,
    vr_supported: XB,
    vr_required: ZB,
    preview_placeholder_section: QB,
    EmptySectionPreview: $B,
    LinkCapsule: eV,
    fullscreen_bg: tV,
    fullscreen_bg_video: nV,
    SalePageBroadcastContextHover: rV,
    AlbumCoverImage: iV,
    AlbumTitle: aV,
    SaleSectionTabListContainer: oV,
    MobileTabSelector: sV,
    Visible: cV,
    MobileTabSelectorButton: lV,
    MobileTabSelectorShortcut: uV,
    DesktopTabs: dV,
    MobileTabSelectorDropDown: fV,
    MobileTabSelectorOption: pV,
    TabContentsContainer: mV,
    HorizontalScrollInDragForceCursor: hV,
    SaleBroadcastSection: gV,
    CarouselPage: _V,
    TabButtonsCtn: vV,
    TabButton: yV,
    SaleTabLabel: bV,
    DefaultCreatorCtn: xV,
    EventSectionViewAllCtn: SV,
    SaleSectionBackgroundImageGroupEdit: CV,
  };
async function TV(e, t) {
  let n = qt(P.STORE_BASE_URL, t, Vn.country_code);
  return (await (await fetch(n)).json()).rgFollowedApps || [];
}
function EV() {
  let e = hn(),
    t = Vn.accountid;
  return p(DV(e, t));
}
function DV(e, t) {
  return {
    queryKey: AV(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await TV(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function OV(e) {
  let { data: t } = EV();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function kV() {
  let e = s(),
    t = Vn.accountid;
  return (n, r) => {
    e.setQueryData(AV(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function AV(e) {
  return [`AccountFollowApps`, e ?? 0];
}
function jV(e, t, n) {
  let r = kV(),
    i = Vn.accountid;
  return f({
    mutationKey: [`useUpdateAppFollow`, e, i, t],
    mutationFn: async () => {
      if (e == null) return;
      let r = P.STORE_BASE_URL + `explore/followgame`,
        i = new FormData();
      (i.append(`appid`, `` + e),
        i.append(`sessionid`, rt()),
        t || i.append(`unfollow`, `1`),
        n && i.append(`snr`, n));
      let a = await fetch(r, {
        method: `POST`,
        body: i,
        credentials: `include`,
      });
      if (!a.ok)
        throw Error(
          `Follow App ${t ? `add` : `remove`} of appid ${e} failed (${a.status})`,
        );
    },
    onMutate: () => {
      e != null && r(t ? [e] : void 0, t ? void 0 : [e]);
    },
    onError: () => {
      e != null && r(t ? void 0 : [e], t ? [e] : void 0);
    },
    onSuccess: () => {
      Zt();
    },
  });
}
var MV = `VULTMp1PCTw-`,
  NV = `_2vLXBykr6zc-`;
async function PV(e, t) {
  let n = qt(P.STORE_BASE_URL, t, Vn.country_code),
    r = await (await fetch(n)).json();
  return Object.keys(r.rgIgnoredApps).map(Number) || [];
}
function FV() {
  let e = hn(),
    t = Vn.accountid;
  return p(IV(e, t));
}
function IV(e, t) {
  return {
    queryKey: zV(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await PV(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function LV(e) {
  let { data: t } = FV();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function RV() {
  let e = s(),
    t = Vn.accountid;
  return (n, r) => {
    e.setQueryData(zV(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function zV(e) {
  return [`AccountIgnoreApps`, e ?? 0];
}
function BV(e, t, n, r = 0) {
  let i = RV(),
    a = Vn.accountid;
  return f({
    mutationKey: [`useUpdateAppIgnore`, e, a, t],
    mutationFn: async () => {
      if (e == null) return;
      let i = P.STORE_BASE_URL + `recommended/ignorerecommendation`,
        a = new FormData();
      (a.append(`appid`, `` + e),
        a.append(`sessionid`, rt()),
        a.append(`remove`, t ? `0` : `1`),
        n && a.append(`snr`, n),
        a.append(`ignore_reason`, `` + r));
      let o = await fetch(i, {
        method: `POST`,
        body: a,
        credentials: `include`,
      });
      if (!o.ok)
        throw Error(
          `Ignore App ${t ? `add` : `remove`} of appid ${e} failed (${o.status})`,
        );
    },
    onMutate: () => {
      e != null && i(t ? [e] : void 0, t ? void 0 : [e]);
    },
    onError: () => {
      e != null && i(t ? void 0 : [e], t ? [e] : void 0);
    },
    onSuccess: () => {
      Zt();
    },
  });
}
function VV(e) {
  let { id: t, snr: n, classOverride: r } = e,
    [i, a] = (0, R.useState)(!1),
    o = w(`GameHoverIgnoreButton`),
    { elDialogElement: s, fnShowLogonDialog: c } = mB(),
    l = t && `appid` in t ? t.appid : void 0,
    { mutateAsync: u } = BV(l, !LV(l), n),
    d = t && `appid` in t && ge.Get().BIsGameIgnored(t.appid);
  return (0, z.jsxs)(ln, {
    className: I(MV, r),
    onClick: async (e) => {
      (e.preventDefault(),
        e.stopPropagation(),
        Vn.logged_in
          ? t && `appid` in t && (a(!0), await u(), o.token.reason || a(!1))
          : c());
    },
    children: [
      (0, z.jsx)($n, {}),
      (0, z.jsx)(`div`, {
        className: I(NV, i && `vyz9N2LpdMs-`),
        children: N(d ? `#Sale_RemoveFromIgnored` : `#Sale_Ignore`),
      }),
      s,
    ],
  });
}
async function HV(e, t) {
  let n = qt(P.STORE_BASE_URL, t, Vn.country_code),
    r = await (await fetch(n)).json(),
    i = new Set();
  (r.rgCreatorsIgnored?.forEach((e) => i.add(e)),
    r.rgCreatorsFollowed?.forEach((e) => i.add(e)));
  let a = new Set();
  return (
    r.rgCreatorsIgnored?.forEach((e) => a.add(e)),
    [
      ...(r.rgCuratorsIgnored ?? []),
      ...(r.rgCurators
        ? Object.values(r.rgCurators ?? {}).map((e) => e.clanid)
        : []),
    ].map((e) => {
      let t = a.has(e);
      return { clanid: e, ignored: t, followed: !t, is_creator: i.has(e) };
    })
  );
}
function UV() {
  let e = hn(),
    t = Ot.accountid;
  return p(WV(e, t));
}
function WV(e, t) {
  return {
    queryKey: XV(t),
    queryFn: async () => {
      let n = new Map();
      if (t)
        try {
          (await HV(e, t)).forEach((e) => n.set(e.clanid, e));
        } catch (e) {
          console.error(`GetCuratorAffinityQuery`, e);
        }
      return n;
    },
    enabled: !!t,
  };
}
function GV(e) {
  let { data: t } = UV();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.followed;
}
function KV(e) {
  let { data: t } = UV();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.ignored;
}
function qV() {
  return F.EREALM != pt.k_ESteamRealmChina;
}
function JV() {
  return F.EREALM != pt.k_ESteamRealmChina;
}
function YV() {
  let e = s(),
    t = Ot.accountid;
  return (n, r, i, a) => {
    e.setQueryData(XV(t), (e) => {
      if (!e) return;
      let t = new Map(e);
      return (
        n?.forEach((e) => {
          t.has(e.clanAccountID)
            ? (t.get(e.clanAccountID).followed = !0)
            : t.set(e.clanAccountID, {
                clanid: e.clanAccountID,
                followed: !0,
                ignored: !1,
                is_creator: !1,
              });
        }),
        r?.forEach((e) => {
          t.has(e.clanAccountID)
            ? (t.get(e.clanAccountID).ignored = !0)
            : t.set(e.clanAccountID, {
                clanid: e.clanAccountID,
                followed: !1,
                ignored: !0,
                is_creator: !1,
              });
        }),
        i?.forEach((e) => t.delete(e.clanAccountID)),
        a?.forEach((e) => {
          let n = t.get(e.clanAccountID);
          n && (n.is_creator = !0);
        }),
        t
      );
    });
  };
}
function XV(e) {
  return [`CuratorAffinityQueryKey`, e ?? 0];
}
var ZV = (function (e) {
  return (
    (e[(e.k_ECuratorFollow = 1)] = `k_ECuratorFollow`),
    (e[(e.k_ECuratorUnfollow = 2)] = `k_ECuratorUnfollow`),
    (e[(e.k_ECuratorIgnore = 3)] = `k_ECuratorIgnore`),
    (e[(e.k_ECuratorUnignore = 4)] = `k_ECuratorUnignore`),
    e
  );
})({});
function QV(e, t) {
  let n = YV(),
    r = Vn.accountid;
  return f({
    mutationKey: [`useUpdateCuratorAffinity`, e, r, t],
    mutationFn: async () => {
      if (e == null) return !1;
      let n = t == ZV.k_ECuratorFollow || t == ZV.k_ECuratorUnfollow,
        r = t == ZV.k_ECuratorFollow || t == ZV.k_ECuratorIgnore,
        i = `${P.STORE_BASE_URL}curators/${n ? `ajaxfollow/` : `ajaxignore/`}`,
        a = new FormData();
      (a.append(`clanid`, `` + e),
        a.append(`sessionid`, rt()),
        a.append(n ? `follow` : `ignore`, r ? `1` : `0`));
      let o = await fetch(i, {
          method: `POST`,
          body: a,
          credentials: `include`,
        }),
        s = await o.json();
      if (!o.ok)
        throw Error(
          `Curator Affinity: ${n ? `Follow` : `Ignore`} Currator ${r ? `add` : `remove`} failed (${o.status} / ${s.msg})`,
        );
      return s.is_creator;
    },
    onMutate: () => {
      if (e != null) {
        let r = t == ZV.k_ECuratorUnfollow || t == ZV.k_ECuratorUnignore;
        n(
          t == ZV.k_ECuratorFollow ? [{ clanAccountID: e }] : void 0,
          t == ZV.k_ECuratorIgnore ? [{ clanAccountID: e }] : void 0,
          r ? [{ clanAccountID: e }] : void 0,
        );
      }
    },
    onError: (r) => {
      if (e != null) {
        let i = t == ZV.k_ECuratorFollow || t == ZV.k_ECuratorIgnore;
        n(
          t == ZV.k_ECuratorUnfollow ? [{ clanAccountID: e }] : void 0,
          t == ZV.k_ECuratorUnignore ? [{ clanAccountID: e }] : void 0,
          i ? [{ clanAccountID: e }] : void 0,
          r ? [{ clanAccountID: e, is_creator: !0 }] : void 0,
        );
      }
    },
    onSuccess: (t) => {
      (t &&
        e &&
        n(void 0, void 0, void 0, [{ clanAccountID: e, is_creator: !0 }]),
        Zt());
    },
  });
}
var $V = `QOSk1wMadGg-`,
  eH = `DH1jwyMHeXo-`,
  tH = `J5g1CfUd95U-`,
  nH = `_3IPvWkyhZzM-`,
  rH = `jB1S5EvgUjI-`,
  iH = `iWO-8zu8RAA-`,
  aH = `MTgAGoNV5vg-`,
  oH = `LEvP9jHHfL8-`,
  sH = `K9ZawxnkJcI-`,
  cH = `OlPIY4AN-5s-`,
  lH = `_7UT3Pb65ni0-`,
  uH = `sT74IdnPxY8-`,
  dH = `ZTz7p5tpqNU-`,
  fH = `ct7kvDppls0-`,
  pH = `SG9Xn5tF5a0-`,
  mH = `clYVRh6K2Ig-`,
  hH = `k6MwDwdCJTU-`,
  gH = `mnFUxHcas-0-`,
  _H = `_6lWvo8crYSU-`,
  vH = `r3PgsXSGPho-`,
  yH = `EWCiFLRR-T8-`,
  bH = `GEroszngeLM-`,
  xH = (e) => {
    let t = F.HELP_BASE_URL + `wizard/HelpWithLimitedAccount`;
    return (0, z.jsx)(pn, {
      strTitle: N(`#Informational_Message`),
      onCancel: e.closeModal,
      onOK: e.closeModal,
      bAlertDialog: !0,
      children: (0, z.jsx)(`div`, {
        children: ce(
          e.strTokenOverride || `#User_LimitedAccount`,
          (0, z.jsx)(`a`, {
            href: t,
            target: F.IN_CLIENT ? void 0 : `_blank`,
            rel: `noopener noreferrer`,
            children: N(`#User_LimitedAccount_UrlInfo`),
          }),
        ),
      }),
    });
  },
  SH = (e) => {
    let {
        className: t,
        bIgnored: n,
        bApplyingFollowing: r,
        bFollowing: i,
        onFollowClick: a,
        followType: o,
      } = e,
      { elDialogElement: s, fnShowLogonDialog: c } = mB();
    if (!qV()) return null;
    let l = null;
    switch (o) {
      case `app`:
        l = N(`#text_store_follow_desc`);
        break;
      case `creatorhome`:
        l = N(`#CreatorHome_Follow_tooltip`);
        break;
      case `steamcurator`:
        l = N(`#steam_curator_follow_ttip`);
        break;
      case `group`:
        l = N(`#steam_group_follow_ttip`);
    }
    return l
      ? (0, z.jsxs)(z.Fragment, {
          children: [
            (0, z.jsx)(de, {
              toolTipContent: !n && !i ? l : void 0,
              children: (0, z.jsxs)(Wt, {
                className: I(k, vH, `FollowButton`, t, i ? `Followed` : ``),
                onClick: () => {
                  Ot.logged_in ? a() : c();
                },
                children: [
                  r && (0, z.jsx)(te, { size: 15 }),
                  !r && (i || n) && (0, z.jsx)(An, {}),
                  (0, z.jsx)(`div`, {
                    className: I(yH, `FollowBtnText`),
                    children:
                      !r &&
                      N(
                        i
                          ? `#Button_Followed`
                          : n
                            ? `#Button_Ignored`
                            : `#Button_Follow`,
                      ),
                  }),
                ],
              }),
            }),
            s,
          ],
        })
      : (console.error(`CommonFollowButton unexpected type`, o), null);
  };
function CH(e) {
  let {
      followType: t,
      fnSuccessCallback: n,
      clanAccountID: r,
      className: i,
    } = e,
    [a, o] = R.useState(!1),
    { data: s } = g(t ? void 0 : r),
    c = GV(r),
    l = KV(r),
    { mutateAsync: u } = QV(r, c ? ZV.k_ECuratorUnfollow : ZV.k_ECuratorFollow),
    [d, f, p] = ve(),
    m = R.useCallback(async () => {
      c != null && (o(!0), await u(), o(!1), n?.(c));
    }, [c, n, u]);
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(SH, {
        className: i,
        bIgnored: !!l,
        bFollowing: !!c,
        bApplyingFollowing: a,
        onFollowClick: () => {
          Ot.is_limited ? f() : m();
        },
        followType: t ?? (s?.is_creator_home ? `creatorhome` : `steamcurator`),
      }),
      (0, z.jsx)(Qt, {
        active: d,
        children: (0, z.jsx)(xH, { closeModal: p }),
      }),
    ],
  });
}
function wH(e) {
  let { appid: t, className: n } = e,
    [r, i] = R.useState(!1),
    a = OV(t),
    o = LV(t),
    s = Be(),
    c = Mt.GetSNRLinkParam(s),
    { mutateAsync: l } = jV(t, !a, c),
    u = R.useCallback(async () => {
      (i(!0), await l(), i(!1));
    }, [l]);
  return (0, z.jsx)(SH, {
    className: n,
    bIgnored: !!o,
    bFollowing: !!a,
    bApplyingFollowing: r,
    onFollowClick: u,
    followType: `app`,
  });
}
function TH(e) {
  let {
      nCreatorAccountID: t,
      classOverride: n,
      styleOverride: r,
      followType: i,
    } = e,
    { data: a } = g(t),
    { data: o } = br(t);
  if (!a || !o) return null;
  let s = a.avatar_medium_url || a.avatar_full_url;
  return (
    (s ||= ee(void 0, `medium`, `web`)),
    (0, z.jsxs)(`div`, {
      className: I(bo, n),
      style: r,
      children: [
        (0, z.jsx)(`a`, {
          href: Cr(o, `developer`),
          children: (0, z.jsx)(`img`, { src: s, alt: a.group_name }),
        }),
        (0, z.jsx)(CH, { clanAccountID: t, followType: i }),
      ],
    })
  );
}
var EH = 5500,
  DH = 2e3,
  OH = 10;
function kH(e, t) {
  return e && t && t.main_capsule
    ? {
        stringifyID: `maincap_${e.id}_${e.item_type}`,
        rctImage: (0, z.jsx)(
          `img`,
          {
            className: Ya,
            loading: `lazy`,
            src: be(t, `main_capsule`),
            alt: e.name,
          },
          `fallback`,
        ),
        nDurationMs: DH,
      }
    : null;
}
function AH(e, t) {
  return {
    stringifyID: `vid_${se(e)}`,
    rctImage: (0, z.jsx)(C, { id: e, active: !0 }),
    nDurationMs: EH,
  };
}
function jH(e) {
  let t = at(e);
  return Bt(e) ? void 0 : t;
}
function MH(e, t, n, r) {
  return n.slice(0, r).map((n, r) => {
    let i = _e(n, `1920x1080`);
    return {
      stringifyID: `screen${r}_${se(e)}`,
      rctImage: (0, z.jsx)(
        `img`,
        {
          className: Ya,
          loading: `lazy`,
          src: i,
          alt: `${t}'s screenshot ${r + 1}`,
        },
        i,
      ),
      nDurationMs: DH,
    };
  });
}
function NH(e, t, n, r, i) {
  let a = [];
  if (
    (i && a.push(AH(e, i)),
    r && r.length > 0 && a.push(...MH(e, t.name, r, OH)),
    a.length == 0 && n && n.main_capsule)
  ) {
    let e = kH(t, n);
    e && a.push(e);
  }
  return (e && a.length, a);
}
function PH(e, t, n, r, i, a) {
  let o = [];
  (a && o.push(AH(t, a)), r && r.length > 0 && o.push(...MH(e, n.name, r, OH)));
  let s = OH - (r?.length || 0);
  return (
    s > 0 && i && i.length > 0 && o.push(...MH(e, n.name, i, s)),
    e && o.length,
    o
  );
}
function FH(e) {
  return (0, z.jsx)(`img`, {
    className: Ya,
    loading: `lazy`,
    src: Re(S),
    alt: `default`,
  });
}
function IH(e) {
  let { id: t } = e,
    { data: n } = nr(t);
  if (!n || n.unvailable_for_country_restriction || !n.visible)
    return (0, z.jsx)(`div`, {
      className: Ja,
      children: (0, z.jsx)(FH, {}, `default`),
    });
  let r = n.item_type,
    i = n.type;
  return r == 2 || r == 1
    ? (0, z.jsx)(BH, { includeAppIDs: n.included_appids })
    : (i == 1 || i == 12) && n.related_items && n.related_items.parent_appid
      ? (0, z.jsx)(RH, {
          demoItemDefaultInfo: n,
          parentAppID: n.related_items.parent_appid,
        })
      : (0, z.jsx)(LH, { storeItemDefaultData: n });
}
function LH(e) {
  let { storeItemDefaultData: t } = e,
    n = Tn(t),
    r = jH(n),
    { data: i } = mn(n),
    a = fn(n),
    o = (0, R.useMemo)(() => NH(n, t, i, a, r), [n, a, r, i, t]);
  return (0, z.jsx)(VH, { rgTrailerAndImages: o });
}
function RH(e) {
  let { demoItemDefaultInfo: t, parentAppID: n } = e,
    r = Tn(t);
  return jH(r)
    ? (0, z.jsx)(LH, { storeItemDefaultData: t })
    : (0, z.jsx)(zH, { demoID: r, demoItemDefaultInfo: t, parentAppID: n });
}
function zH(e) {
  let { parentAppID: t, demoID: n, demoItemDefaultInfo: r } = e,
    i = cr(t),
    a = fn(n),
    o = fn(i),
    s = jH(i),
    c = (0, R.useMemo)(() => PH(n, i, r, a, o, s), [n, i, r, s, a, o]);
  return (0, z.jsx)(VH, { rgTrailerAndImages: c });
}
function BH(e) {
  let { includeAppIDs: t } = e,
    n = Bn(),
    r = u({ queries: t.map((e) => wn(n, { appid: e })) }),
    i = u({ queries: t.map((e) => nn(n, { appid: e })) }),
    a = (0, R.useMemo)(
      () =>
        r
          .map((e, t) => {
            let n = i[t].data,
              r = e.data;
            return kH(n, r);
          })
          .filter((e) => !!e),
      [r, i],
    );
  return (0, z.jsx)(VH, { rgTrailerAndImages: a });
}
function VH(e) {
  let { rgTrailerAndImages: t } = e,
    n = (0, R.useRef)(0),
    r = ht(),
    [i] = R.useState(new Je()),
    a = (0, R.useCallback)(
      (e = !1) => {
        if ((e && (n.current = 0), t?.length > 0)) {
          let e = t[n.current].nDurationMs;
          i.Schedule(e, () => {
            let e = n.current;
            ((n.current = (n.current + 1) % t.length),
              e != n.current && (a(), r()));
          });
        }
      },
      [t, i, r],
    );
  return (
    (0, R.useEffect)(() => (t.length > 0 && a(), () => i.Cancel()), [t, a, i]),
    (0, z.jsx)(`div`, {
      className: Ja,
      children: t?.map((e, t) =>
        (0, z.jsx)(
          `div`,
          {
            className: I({ [Ya]: !0, [Xa]: t != n.current }),
            children: e.rctImage,
          },
          `e-` + t + `-` + e.stringifyID,
        ),
      ),
    })
  );
}
var HH = `ghYXSqVPJ-U-`,
  UH = `lx1fe7xI0bg-`,
  WH = `ARp2qEoElPE-`,
  GH = `DwDon-U2yLI-`,
  KH = 150,
  qH = R.createContext(void 0);
function JH() {
  return R.useContext(qH);
}
function YH(e) {
  let {
      hoverContent: t,
      hoverProps: n,
      nDelayShowMs: r,
      nWidthMultiplier: i,
      children: a,
      className: o,
    } = e,
    s = Tt(),
    c = b(),
    l = !s && !c,
    [u, d] = R.useState(!1),
    [f, p] = R.useState(void 0),
    m = (e) => {
      (d(!0), p(e.currentTarget));
    },
    h = () => d(!1),
    g = R.useCallback(() => d(!1), []);
  return (0, z.jsxs)(`div`, {
    "data-key": `hover div`,
    role: `button`,
    tabIndex: 0,
    className: I(HH, o),
    onMouseEnter: m,
    onMouseLeave: h,
    onTouchStart: () => d(!1),
    onKeyDown: (e) => {
      e.keyCode == 27 && (d(!1), e.preventDefault(), e.stopPropagation());
    },
    children: [
      l &&
        f &&
        (0, z.jsx)(qH.Provider, {
          value: g,
          children: (0, z.jsx)(XH, {
            visible: u,
            target: f,
            nDelayShowMs: r,
            nWidthMultiplier: i,
            hoverProps: n,
            children: t,
          }),
        }),
      (0, z.jsx)(kt, { children: a }),
    ],
  });
}
function XH(e) {
  let {
      hoverProps: t,
      nDelayShowMs: n = KH,
      nWidthMultiplier: r = 1.15,
      target: i,
      visible: a,
      children: o,
    } = e,
    [s, c] = R.useState(a);
  if (
    (R.useEffect(() => {
      if (a) {
        if (n) {
          let e = window.setTimeout(() => c(!0), n);
          return () => window.clearTimeout(e);
        }
        c(!0);
      } else {
        if (et()) return;
        c(!1);
      }
    }, [a]),
    R.useEffect(() => {
      if (!s) return;
      let e = i.ownerDocument.defaultView;
      if (e) {
        let t = e.scrollY,
          n = () => {
            Math.abs(e.scrollY - t) > 50 && c(!1);
          };
        return (
          window.addEventListener(`scroll`, n),
          () => window.removeEventListener(`scroll`, n)
        );
      }
      return () => {};
    }, [s, i?.ownerDocument.defaultView]),
    !i || !o || !s)
  )
    return null;
  let l = i.clientWidth < 200 ? `8px` : `10px`,
    u = {
      direction: `overlay-center`,
      bEnablePointerEvents: !0,
      ...(t || {}),
      style: {
        zIndex: 98,
        width: i.clientWidth * r,
        fontSize: l,
        minHeight: QH() == `hiding` ? void 0 : 300,
        height: QH() == `hiding` ? i.clientWidth * 1.15 * (125 / 184) : void 0,
        ...t?.style,
      },
      target: i,
    };
  return (0, z.jsx)(ZH, {
    hoverProps: u,
    children: (0, z.jsx)(kt, { children: o }),
  });
}
function ZH(e) {
  let { hoverProps: t, children: n } = e,
    r = R.useCallback((e) => e?.focus(), []);
  return (0, z.jsx)(Ee, {
    ...t,
    children: (0, z.jsx)(ne, {
      timeout: 500,
      in: !0,
      appear: !0,
      classNames: { appearActive: I(WH, Qa), enterDone: I(GH, $a) },
      children: (e) =>
        (0, z.jsx)(`div`, {
          ref: St(e, r),
          className: UH,
          tabIndex: -1,
          children: n,
        }),
    }),
  });
}
function QH() {
  return window.sessionStorage?.getItem($H) || `default`;
}
var $H = `DEBUG_UseNewGameHover`;
function eU(e) {
  window.sessionStorage.setItem($H, e);
}
window.SetHoverPresentation = eU;
function tU(e) {
  let {
      className: t,
      url: n,
      style: r,
      children: i,
      bSkipForcingStoreLink: a,
      bOpenInline: o,
      bFocusable: s = !0,
      fnCanTakeFocus: c,
    } = e,
    l = a ? n : n ? nU(n, F.STORE_BASE_URL) : void 0,
    u = Ie(l);
  return u
    ? (0, z.jsx)(Cn, {
        href: u,
        target: F.IN_CLIENT || o ? void 0 : `_blank`,
        className: t,
        style: r,
        rel: `noopener noreferrer`,
        focusable: s,
        fnCanTakeFocus: c,
        children: i,
      })
    : (0, z.jsx)(`span`, { style: r, className: t, children: i });
}
function nU(e, t) {
  try {
    let n = new URL(t),
      r = new URL(e);
    return n.href.replace(/\/$/, ``) + r.pathname + r.search + r.hash;
  } catch {
    return ``;
  }
}
function rU(e) {
  let { section: t } = e;
  return !t.label_link || t.label_link_style
    ? null
    : (0, z.jsx)(`div`, {
        className: EB,
        children: (0, z.jsx)(tU, {
          url: t.label_link,
          children: M.Localize(`#btn_live_streams_all`),
        }),
      });
}
var iU = `KDJh8Ln6DTA-`,
  aU = `cwU-YKIjBO4-`,
  oU = {
    bFitToWindow: !0,
    bOverlapHorizontal: !0,
    bMatchWidth: !1,
    bShiftToFitWindow: !0,
    bDisablePopTop: !0,
  };
function sU(e) {
  let { setRemoteClientID: t, rgSessions: n } = e,
    r = (0, R.useCallback)(
      (e) => {
        n?.length &&
          le(
            (0, z.jsx)(cU, { sessions: n, setRemoteDownloadClientId: t }),
            e,
            oU,
          );
      },
      [t, n],
    );
  return n?.length
    ? (0, z.jsx)(`button`, {
        onClick: r,
        className: iU,
        children: (0, z.jsx)(uU, {}),
      })
    : null;
}
function cU({ sessions: e, setRemoteDownloadClientId: t }) {
  return (0, z.jsx)(`ul`, {
    className: aU,
    children: e.map((e) =>
      (0, z.jsx)(
        Xe,
        {
          onSelected: () => {
            t(e.client_instanceid);
          },
          children: N(
            `#GamesList_Client_Indicator`,
            lU(e.device_type) ?? ``,
            e.machine_name,
          ),
        },
        e.client_instanceid,
      ),
    ),
  });
}
function lU(e) {
  switch (e) {
    case 1:
      return N(`#Library_DeviceType_PC`);
    case 544:
      return N(`#Library_DeviceType_SteamDeck`);
    case 546:
      return N(`#Library_DeviceType_SteamMachine`);
    case zt:
      return N(`#Library_DeviceType_SteamFrame`);
    default:
      return;
  }
}
function uU(e) {
  return (0, z.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 13 8`,
    fill: `none`,
    ...e,
    children: (0, z.jsx)(`path`, {
      fill: `currentColor`,
      d: `M12.6128 1.7121C12.7616 1.56087 12.8428 1.3684 12.8428 1.14155C12.8428 0.687862 12.491 0.323534 12.0446 0.323534C11.8214 0.323534 11.6184 0.419772 11.4628 0.577877L6.83601 5.38975L2.22271 0.577877C2.06712 0.419772 1.85743 0.323534 1.64097 0.323534C1.19452 0.323534 0.842773 0.687862 0.842773 1.14155C0.842773 1.3684 0.923946 1.56087 1.07276 1.71211L6.21369 7.06016C6.38956 7.25264 6.60602 7.342 6.84277 7.34888C7.07953 7.34888 7.28246 7.25264 7.4651 7.06016L12.6128 1.7121Z`,
    }),
  });
}
var dU = `O2hPihu9CRE-`,
  fU = `QhSrcq93V7k-`,
  pU = `_7MjE60RYT0Q-`,
  mU = `UlZXEOyFPCE-`,
  hU = `_8wO4Yx-lIIo-`,
  gU = `FA82eVIC918-`,
  _U = `_0sgpZmAY-zs-`,
  vU = `RLntJ4QtQLU-`;
function yU(e) {
  let { appid: t } = e,
    n = cr(t),
    { data: r } = nt(n),
    [i, a, o] = ve(!1),
    { mutateAsync: s } = Wa({ appid: t }),
    [c, l] = (0, R.useState)(!1),
    u = hr(t);
  return !r || u
    ? null
    : (0, z.jsxs)(z.Fragment, {
        children: [
          (0, z.jsxs)(Dr, {
            onClick: async () => {
              try {
                (l(!0), await s(), Zt(), l(!1), a());
              } catch (e) {
                (l(!1),
                  console.error(
                    `Error AddToLibraryActionWithRemoteInstall`,
                    e,
                  ));
              }
            },
            children: [
              c && (0, z.jsx)(D, { size: `small` }),
              N(`#Sale_AddToLibrary_NoPlus`),
            ],
          }),
          (0, z.jsx)(kt, {
            children: (0, z.jsx)(Qt, {
              active: i,
              children: (0, z.jsx)(pn, {
                strTitle: N(`#Sale_AddedToLibrary`),
                strDescription: ce(
                  `#Sale_AddToLibrary_DialogDesc`,
                  (0, z.jsx)(`span`, { className: pU, children: r.name || `` }),
                ),
                closeModal: o,
                bAlertDialog: !0,
                children: (0, z.jsx)(bU, { id: n }),
              }),
            }),
          }),
        ],
      });
}
function bU(e) {
  let { id: t } = e,
    n = re(),
    [r, i] = (0, R.useState)(0),
    [a, o] = (0, R.useState)(!1),
    { data: s } = Ve(t);
  if (!t || !(`appid` in t) || P.IN_CLIENT || !s) return null;
  let c = n.data?.sessions?.filter((e) => {
    switch (e.device_type) {
      default:
      case 1:
        {
          if (!e.os_type) return !1;
          let t = x(e.os_type);
          if (
            (s.windows && t.includes(`Windows`)) ||
            (s.mac && t.includes(`Mac`)) ||
            (s.steamos_linux && t.includes(`Linux`))
          )
            return !0;
        }
        break;
      case 544:
        return s.windows || s.steamos_linux;
    }
    return !1;
  });
  if (c && c?.length > 0) {
    let e = c[r];
    return (0, z.jsx)(`div`, {
      className: dU,
      children: a
        ? (0, z.jsx)(SU, { session: e })
        : (0, z.jsxs)(z.Fragment, {
            children: [
              (0, z.jsx)(xU, {
                rgAcceptableSession: c,
                session: e,
                setSessionIndex: i,
              }),
              (0, z.jsx)(`div`, {
                className: gU,
                children: (0, z.jsx)(CU, {
                  appid: t.appid,
                  session: e,
                  setRemoteDownloadRequested: o,
                }),
              }),
            ],
          }),
    });
  }
  return null;
}
function xU(e) {
  let { rgAcceptableSession: t, session: n, setSessionIndex: r } = e;
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(`div`, { children: N(`#Sale_AddToLibrary_RemoteDownload`) }),
      (0, z.jsxs)(`div`, {
        className: _U,
        children: [
          (0, z.jsx)(`span`, { className: vU, children: n.machine_name }),
          (0, z.jsx)(sU, {
            rgSessions: t,
            setRemoteClientID: (e) => {
              let n = t.findIndex((t) => t.client_instanceid === e);
              n >= 0 && r(n);
            },
          }),
        ],
      }),
    ],
  });
}
function SU(e) {
  let { session: t } = e;
  return (0, z.jsxs)(`div`, {
    className: mU,
    children: [
      N(`#Sale_AddToLibrary_DownloadStarted`),
      (0, z.jsx)(`br`, {}),
      (0, z.jsx)(`a`, {
        href: `${P.COMMUNITY_BASE_URL}my/games?tab=all&clientid=${t.client_instanceid}`,
        children: N(`#Sale_AddToLibrary_SeeDownloadProgress`),
      }),
    ],
  });
}
function CU(e) {
  let { appid: t, session: n, setRemoteDownloadRequested: r } = e,
    i = A(t, n.client_instanceid);
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsxs)(Dr, {
        onClick: () => {
          (i.mutateAsync(), r(!0));
        },
        children: [(0, z.jsx)(Un, {}), N(`#Button_StartDownload`)],
      }),
      (0, z.jsx)(`div`, {
        className: hU,
        children: (0, z.jsx)(`a`, {
          href: `https://help.steampowered.com/faqs/view/1025-BD94-12FC-3409`,
          className: fU,
          children: N(`#Button_Learn`),
        }),
      }),
    ],
  });
}
function wU(e) {
  let {
    rgTagIDs: t,
    bShowEvenIfNoTags: n,
    bHideTitle: r,
    bLargeText: i,
    bNoStoreLinks: a,
  } = e;
  return t?.length > 0 || n
    ? (0, z.jsxs)(`div`, {
        className: I(ui, i ? bi : ``, `SaleTagBlockCtn`),
        children: [
          !r &&
            (0, z.jsx)(`div`, {
              className: I(`F3fTh-GlONs-`, `WidgetTagTitle`),
              children: M.Localize(`#GameHover_Tags`),
            }),
          t?.length > 0
            ? (0, z.jsx)(`div`, {
                className: I(xi, `TagBox`),
                children: t.map((e) =>
                  (0, z.jsx)(EU, { tagid: e, bNoStoreLinks: a }, e),
                ),
              })
            : (0, z.jsx)(`div`, { children: M.Localize(`#Broadcast_None`) }),
        ],
      })
    : null;
}
function TU(e) {
  let { tagid: t, className: n } = e,
    r = mt(t, F.LANGUAGE);
  if (!r) return null;
  let i = an(Yn(F.LANGUAGE)),
    a = `${F.STORE_BASE_URL}tags/${i}/${r}`;
  return (0, z.jsx)(tU, {
    url: a,
    className: I(Si, `WidgetTag`, n),
    children: r,
  });
}
function EU(e) {
  let { tagid: t, className: n, bNoStoreLinks: r } = e,
    i = an(Yn(F.LANGUAGE)),
    a = mt(t, F.LANGUAGE),
    o = `${F.STORE_BASE_URL}tags/${i}/${a}`;
  return a
    ? r
      ? (0, z.jsx)(`div`, { className: I(Si, `WidgetTag`, n), children: a })
      : (0, z.jsx)(tU, {
          url: o,
          className: I(Si, `WidgetTag`, n),
          children: a,
        })
    : null;
}
export {
  BB as $,
  Wr as $a,
  qi as $i,
  tE as $n,
  U as $r,
  SR as $t,
  qV as A,
  Ir as Aa,
  vi as Ai,
  kk as An,
  gh as Ar,
  Wz as At,
  bB as B,
  Zr as Ba,
  _a as Bi,
  NE as Bn,
  Eu as Br,
  hz as Bt,
  eH as C,
  Rr as Ca,
  Ra as Ci,
  EM as Cn,
  sr as Co,
  Yh as Cr,
  eB as Ct,
  gH as D,
  Ea as Da,
  ki as Di,
  ZA as Dn,
  lr as Do,
  mh as Dr,
  Kz as Dt,
  nH as E,
  Ri as Ea,
  ja as Ei,
  mj as En,
  cr as Eo,
  Nh as Er,
  qz as Et,
  jV as F,
  Fi as Fa,
  pi as Fi,
  dO as Fn,
  q as Fr,
  Cz as Ft,
  SV as G,
  oi as Ga,
  ra as Gi,
  iD as Gn,
  vu as Gr,
  QR as Gt,
  zB as H,
  fi as Ha,
  ni as Hi,
  wD as Hn,
  Au as Hr,
  cz as Ht,
  OV as I,
  Di as Ia,
  ya as Ii,
  BE as In,
  wd as Ir,
  bz as It,
  jB as J,
  Pr as Ja,
  Ci as Ji,
  tD as Jn,
  Lc as Jr,
  XR as Jt,
  AB as K,
  si as Ka,
  Oa as Ki,
  OE as Kn,
  Wc as Kr,
  iz as Kt,
  RB as L,
  Gr as La,
  Lr as Li,
  sD as Ln,
  qu as Lr,
  xz as Lt,
  GV as M,
  va as Ma,
  ca as Mi,
  DD as Mn,
  nf as Mr,
  Iz as Mt,
  BV as N,
  ai as Na,
  Ui as Ni,
  FD as Nn,
  J as Nr,
  Fz as Nt,
  pH as O,
  Ei as Oa,
  Yi as Oi,
  XA as On,
  rr as Oo,
  _h as Or,
  Gz as Ot,
  LV as P,
  Xr as Pa,
  Ki as Pi,
  mO as Pn,
  K as Pr,
  Sz as Pt,
  KB as Q,
  qr as Qa,
  xa as Qi,
  nE as Qn,
  Ac as Qr,
  TR as Qt,
  LB as R,
  Pi as Ra,
  ga as Ri,
  gO as Rn,
  Yu as Rr,
  yz as Rt,
  mH as S,
  oa as Sa,
  Ha as Si,
  AM as Sn,
  ar as So,
  sg as Sr,
  Zz as St,
  rH as T,
  Sa as Ta,
  Na as Ti,
  Vj as Tn,
  ir as To,
  Ah as Tr,
  Qz as Tt,
  wB as U,
  Oi as Ua,
  Wi as Ui,
  MD as Un,
  G as Ur,
  sz as Ut,
  _V as V,
  $r as Va,
  wa as Vi,
  ND as Vn,
  Ou as Vr,
  mz as Vt,
  $B as W,
  Mi as Wa,
  da as Wi,
  AE as Wn,
  bu as Wr,
  oz as Wt,
  OB as X,
  ti as Xa,
  Ti as Xi,
  uO as Xn,
  Mc as Xr,
  $R as Xt,
  eV as Y,
  Yr as Ya,
  wi as Yi,
  nD as Yn,
  jc as Yr,
  JR as Yt,
  SB as Z,
  Vr as Za,
  ha as Zi,
  AD as Zn,
  kc as Zr,
  FR as Zt,
  aH as _,
  Qi as _a,
  Eo as _i,
  mN as _n,
  pr as _o,
  $g as _r,
  hB as _t,
  TH as a,
  ma as aa,
  Fo as ai,
  ZI as an,
  _i as ao,
  LT as ar,
  yB as at,
  _H as b,
  ea as ba,
  Wa as bi,
  FM as bn,
  fr as bo,
  yg as br,
  uB as bt,
  xH as c,
  na as ca,
  Io as ci,
  XP as cn,
  ei as co,
  qv as cr,
  xB as ct,
  sH as d,
  Fr as da,
  ms as di,
  TN as dn,
  ji as do,
  W_ as dr,
  JB as dt,
  Ji as ea,
  Sc as ei,
  YL as en,
  Ur as eo,
  WT as er,
  gV as et,
  tH as f,
  ci as fa,
  zo as fi,
  xN as fn,
  Or as fo,
  A_ as fr,
  oV as ft,
  oH as g,
  Da as ga,
  To as gi,
  gN as gn,
  br as go,
  e_ as gr,
  QB as gt,
  uH as h,
  Gi as ha,
  ko as hi,
  hN as hn,
  Cr as ho,
  Y as hr,
  gB as ht,
  tU as i,
  la as ia,
  Ms as ii,
  cL as in,
  yi as io,
  $T as ir,
  GB as it,
  UV as j,
  ui as ja,
  sa as ji,
  HE as jn,
  af as jr,
  zz as jt,
  JV as k,
  hi as ka,
  Xi as ki,
  vA as kn,
  Ch as kr,
  Uz as kt,
  lH as l,
  Zi as la,
  us as li,
  ZN as ln,
  ta as lo,
  Kv as lr,
  kB as lt,
  fH as m,
  ia as ma,
  Ao as mi,
  _N as mn,
  Ar as mo,
  a_ as mr,
  nV as mt,
  wU as n,
  ka as na,
  Is as ni,
  qL as nn,
  gi as no,
  eE as nr,
  HB as nt,
  wH as o,
  pa as oa,
  Ro as oi,
  BI as on,
  Hr as oo,
  MT as or,
  CV as ot,
  dH as p,
  ua as pa,
  B as pi,
  vN as pn,
  kr as po,
  o_ as pr,
  qB as pt,
  NB as q,
  di as qa,
  aa as qi,
  EE as qn,
  Hc as qr,
  az as qt,
  rU as r,
  Ai as ra,
  Ns as ri,
  FL as rn,
  Br as ro,
  GT as rr,
  VB as rt,
  CH as s,
  li as sa,
  Lo as si,
  gF as sn,
  xi as so,
  tT as sr,
  YB as st,
  TU as t,
  Ca as ta,
  hc as ti,
  JL as tn,
  ba as to,
  ZT as tr,
  WB as tt,
  cH as u,
  $i as ua,
  hs as ui,
  PN as un,
  mi as uo,
  cv as ur,
  DB as ut,
  $V as v,
  zr as va,
  wo as vi,
  UM as vn,
  hr as vo,
  t_ as vr,
  mB as vt,
  bH as w,
  Ta as wa,
  La as wi,
  hM as wn,
  or as wo,
  Zh as wr,
  Xz as wt,
  hH as x,
  Hi as xa,
  Ba as xi,
  wM as xn,
  gr as xo,
  cg as xr,
  sB as xt,
  iH as y,
  Aa as ya,
  xo as yi,
  PM as yn,
  vr as yo,
  Cg as yr,
  fB as yt,
  IB as z,
  Qr as za,
  fa as zi,
  RE as zn,
  Ku as zr,
  gz as zt,
};
