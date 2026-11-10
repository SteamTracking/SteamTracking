/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e, r as t, t as n } from "./rolldown-runtime.js";
import {
  B as r,
  It as i,
  Lt as a,
  Pt as o,
  V as s,
  Z as c,
  dt as l,
  f as u,
  ft as d,
  lt as f,
  nt as p,
  ot as m,
  st as h,
  tt as g,
} from "./libraries.js";
import { t as _ } from "./usedataloader.client.js";
import { R as v, V as y, n as b } from "./storelink.js";
import { u as x } from "./claninfo.js";
import { r as S, t as C } from "./storeurl.js";
import "./modals.js";
import { a as w, n as T, r as E } from "./ostype.js";
import { t as D } from "./microtrailerdisplay.js";
import { t as O } from "./ajaxhooks.js";
import { i as k, t as A } from "./historyutils.js";
import { t as ee } from "./throbber.js";
import { a as j } from "./stringutils.js";
import { r as M } from "./linkfilter.js";
import { n as te } from "./saletechredirectsignin.js";
import { i as ne } from "./partnereventshared.module.js";
import { n as re } from "./personautils.js";
import { n as ie, t as ae } from "./csstransitionwrapper.js";
import { n as oe, r as se } from "./remotedownloadhooks.js";
import {
  $l as ce,
  $t as le,
  $x as ue,
  Ac as de,
  An as fe,
  Av as pe,
  Bb as me,
  Bi as he,
  Cc as N,
  Dn as ge,
  Dt as _e,
  Dv as ve,
  Ec as ye,
  Et as be,
  Fb as xe,
  Fc as Se,
  Fs as Ce,
  Fv as we,
  Gs as Te,
  Hb as Ee,
  Hs as De,
  Ht as Oe,
  Hu as ke,
  Hv as Ae,
  Ic as je,
  Is as Me,
  Iu as Ne,
  Jb as Pe,
  Kb as Fe,
  Ku as Ie,
  Li as Le,
  Ls as Re,
  Lv as ze,
  Nb as Be,
  No as Ve,
  Nt as He,
  Oc as Ue,
  Or as We,
  Ov as Ge,
  Pa as Ke,
  Pc as qe,
  Pn as Je,
  Qi as Ye,
  Qr as Xe,
  Qt as Ze,
  Qx as Qe,
  Ri as $e,
  Rl as et,
  Ro as tt,
  Rr as nt,
  Rs as rt,
  Rv as it,
  Rx as at,
  Sb as P,
  Sl as ot,
  Sx as st,
  Tc as ct,
  Tt as lt,
  Tv as ut,
  Ub as F,
  Ur as dt,
  Us as ft,
  Uu as pt,
  Uv as mt,
  Vs as ht,
  Vt as gt,
  Wi as _t,
  Wl as vt,
  Ws as yt,
  Wv as bt,
  Wy as I,
  Xi as xt,
  Xt as St,
  Xx as Ct,
  Yb as wt,
  Yc as Tt,
  Yl as Et,
  Yt as Dt,
  Yv as Ot,
  Yy as kt,
  Zr as At,
  Zt as jt,
  Zx as Mt,
  _c as Nt,
  _l as Pt,
  _o as Ft,
  al as It,
  ar as Lt,
  ay as Rt,
  br as zt,
  bu as Bt,
  bv as Vt,
  cd as Ht,
  cr as Ut,
  cx as Wt,
  dS as Gt,
  du as Kt,
  eS as qt,
  en as Jt,
  er as Yt,
  fd as Xt,
  fn as Zt,
  fv as Qt,
  fx as $t,
  gS as en,
  gd as tn,
  gx as nn,
  hS as rn,
  hc as an,
  hx as on,
  il as sn,
  in as cn,
  iv as ln,
  ix as L,
  jb as un,
  jn as dn,
  jr as fn,
  kb as pn,
  kv as mn,
  lc as hn,
  lv as gn,
  ml as _n,
  mn as vn,
  mx as yn,
  nS as bn,
  nn as xn,
  no as Sn,
  nr as Cn,
  ov as wn,
  ox as Tn,
  rS as En,
  rl as Dn,
  rn as On,
  sd as kn,
  sn as An,
  tS as jn,
  tl as Mn,
  tn as Nn,
  ub as Pn,
  un as Fn,
  vc as In,
  vl as R,
  wl as Ln,
  wr as Rn,
  wt as zn,
  wx as Bn,
  xS as Vn,
  xd as Hn,
  xl as Un,
  yl as Wn,
  yn as Gn,
  zr as Kn,
  zs as qn,
  zv as Jn,
  zx as Yn,
} from "./main.js";
var z = e(a(), 1),
  B = d();
async function Xn(e, t) {
  let n = kn(L.STORE_BASE_URL, t, Tn.country_code);
  return (await (await fetch(n)).json()).rgOwnedApps || [];
}
async function Zn(e, t, n) {
  return (await Xn(e, t)).includes(n);
}
function Qn() {
  let e = Rt(),
    t = Fe.accountid;
  return h($n(e, t));
}
function $n(e, t) {
  return {
    queryKey: rr(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await Xn(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function er(e, t, n) {
  return {
    queryKey: [`AccountOwnsApp`, t, n],
    queryFn: async () => (t ? await Zn(e, t, n) : !1),
    staleTime: 6e5,
  };
}
function tr(e) {
  let t = Rt(),
    n = Fe.accountid,
    { data: r } = h(er(t, n, e));
  return r === void 0 ? void 0 : r;
}
function nr(e) {
  let t = l(),
    n = Fe.accountid;
  return z.useCallback(
    (r) => {
      t.setQueryData(rr(n), (t) =>
        t ? new Set([...t.values(), ...r]) : e ? new Set(r) : void 0,
      );
    },
    [t, n, e],
  );
}
function rr(e) {
  return [`AccountOwnedApps`, e ?? 0];
}
function ir(e) {
  let { data: t } = pe(e && `appid` in e ? void 0 : e),
    { data: n } = Qn(),
    r;
  return (
    e && `appid` in e ? (r = [e.appid]) : t && (r = t.included_appids),
    r === void 0 || n === void 0 || r.length == 0
      ? { bIsOwned: void 0, unAppID: void 0 }
      : { bIsOwned: !r.some((e) => !n.has(e)), unAppID: r[0] }
  );
}
async function ar(e) {
  let t = { get_appids: !0, l: F.LANGUAGE },
    n = new URLSearchParams(t).toString(),
    r = `${F.STORE_BASE_URL}curator/${e}/ajaxgetcreatorhomeinfo/?${n}`,
    i = await fetch(r, { method: `GET` });
  if (!i.ok) throw Error(`Server returned ${i.status}`);
  let a = await i.json();
  return a.success == 1 ? a : null;
}
function or(e) {
  return h(sr(e));
}
function sr(e) {
  return {
    queryKey: cr(e),
    queryFn: async () => {
      let t = await ar(e);
      if (t) {
        let { success: e, err_msg: n, warning: r, warning_msg: i, ...a } = t;
        return a;
      }
      return null;
    },
    enabled: !!e,
  };
}
function cr(e) {
  return [`creatorhomebyaccount`, e];
}
function lr(e, t) {
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
var ur = `qkhMGgZoiEA-`,
  dr = `dR7N9Ozyb6k-`,
  fr = `_8j-XyEfRwfE-`;
function pr(e) {
  let { children: t, ...n } = e;
  return (0, B.jsx)(sn, {
    className: ur,
    type: `button`,
    ...n,
    children: (0, B.jsx)(`span`, { children: t }),
  });
}
function mr(e) {
  let { children: t, ...n } = e;
  return (0, B.jsx)(sn, {
    className: fr,
    type: `button`,
    ...n,
    children: (0, B.jsx)(`span`, { children: t }),
  });
}
function hr(e) {
  let { children: t, ...n } = e;
  return (0, B.jsx)(Dn, {
    className: fr,
    ...n,
    children: (0, B.jsx)(`span`, { children: t }),
  });
}
function gr(e) {
  let { children: t, ...n } = e;
  return (0, B.jsx)(sn, {
    className: dr,
    type: `button`,
    ...n,
    children: (0, B.jsx)(`span`, { children: t }),
  });
}
var _r = e(i()),
  vr = e(o(), 1),
  yr = e(g()),
  br = `_8Wp5WbqAbJA-`,
  xr = `K2PjXmYWvSg-`,
  Sr = `UYfcYZDtfbs-`,
  Cr = `O-TsWDon65A-`,
  wr = `E8DrK8oV4Hs-`,
  Tr = `XTfMA1ObAn4-`,
  Er = `-Rv33oXsbT0-`,
  Dr = `MN6Xv-pm6i8-`,
  Or = `uvLRAREPa4E-`,
  kr = `bdPmPtfuqIY-`,
  Ar = `JCVuyoKAC-k-`,
  jr = `kjiBcsaqA8o-`,
  Mr = `UFAsjplGzxc-`,
  Nr = `vL-XYGsLedM-`,
  Pr = `aCttqIa8NC4-`,
  Fr = `-rXzhlz0w3Q-`,
  Ir = `R9ivMzB3Gic-`,
  Lr = `W9-byrNtR9Q-`,
  Rr = `llT8dhJgnqw-`,
  zr = `kxs4VtommH4-`,
  Br = `ncKEDk26SHQ-`,
  Vr = `VGzHGCF3I5o-`,
  Hr = `fNtXEMzHz58-`,
  Ur = `jrHvWWIOlw4-`,
  Wr = `FOKKfGVYUDk-`,
  Gr = `OClIuwfiMKQ-`,
  Kr = `ZLlm68-AqhM-`,
  qr = `raYV6Y-MQ7I-`,
  Jr = `IWFCYfhR05U-`,
  Yr = `KtOQKgU1W5w-`,
  Xr = `jXpKqo3-cWA-`,
  Zr = `_-7gyAR9oUx4-`,
  Qr = `GcBGxmj4uvE-`,
  $r = `QwN0eH2k0O0-`,
  ei = `sgCiKk3DUeg-`,
  ti = `N86EuolnWHc-`,
  ni = `A8oyzoRvWQ8-`,
  ri = `V7rq-SSC9xQ-`,
  ii = `pNXxwljIaD8-`,
  ai = `lsjYiHotCwA-`,
  oi = `iVV26V5rbpU-`,
  si = `XosTQwEOBO0-`,
  ci = `ITE-CUK3U10-`,
  li = `wPxkst62n-Q-`,
  ui = `gxtdwNjsesg-`,
  di = `y1XjkIvVj6A-`,
  fi = `BZ9dZKOmXqE-`,
  pi = `zMMJGDB8n-o-`,
  mi = `XPrPiD27WdE-`,
  hi = `R0sGSaFdUWo-`,
  gi = `PON8X0ze5G8-`,
  _i = `rfhpla0PGMA-`,
  vi = `OySWwOLLxFc-`,
  yi = `tkR3-aHpyI4-`,
  bi = `yyrI0Nka69I-`,
  xi = `D3fuhd6kG6I-`,
  Si = `Xk-QP-zS-18-`,
  Ci = `I9cM1cZTYqc-`,
  wi = `LkW8eRLttsM-`,
  Ti = `_4KL8m0wDedE-`,
  Ei = `E3GBmOK5lMc-`,
  Di = `lOHW8g-YyoY-`,
  Oi = `RQzfcqJK1Eg-`,
  ki = `_0MLgqm-W-nA-`,
  Ai = `v-RxDE-Li8U-`,
  ji = `iwrzh-mg8hE-`,
  Mi = `oZCOhIQDgxo-`,
  Ni = `-G-r65tUoo0-`,
  Pi = `qVhohSfcErA-`,
  Fi = `GqNlebj1uds-`,
  Ii = `oqhyMK1Krt0-`,
  Li = `GRw4r5TpD5s-`,
  Ri = `mspnwaz0EAg-`,
  zi = `_06Z7Ej-J6OU-`,
  Bi = `lO9B4Ti6gBk-`,
  Vi = `lkVpo86MFuI-`,
  Hi = `chTH6btujQ0-`,
  Ui = `_96v5CHkkJJY-`,
  Wi = `GxypNLhVZWE-`,
  Gi = `_-4JZsb8K2FY-`,
  Ki = `BD3vXqZ-6yI-`,
  qi = `l9by-6sJDpM-`,
  Ji = `LCYi5cxHqgI-`,
  Yi = `ZuMhm9DQqbw-`,
  Xi = `eASrfjoxe3o-`,
  Zi = `ppO76q5Y-Zg-`,
  Qi = `WWolAsqP274-`,
  $i = `mP8HbLoIUo0-`,
  ea = `BuCaaYRb4Cg-`,
  ta = `bYNmqkeEJGc-`,
  na = `_4xLBehMPMIU-`,
  ra = `XiCMCQH8z2U-`,
  ia = `_3wT3W-azVyE-`,
  aa = `EpyWQfQU-D4-`,
  oa = `FDvyBhD2AA0-`,
  sa = `RIck6AI1vX8-`,
  ca = `Sndyr6iqn8g-`,
  la = `qUsoY9s6daM-`,
  ua = `tUIs-i3NWoU-`,
  da = `_8o-dkC5O1co-`,
  fa = `v7ul8g8zqHs-`,
  pa = `-cW4bgqyLAo-`,
  ma = `aN31caRmRcQ-`,
  ha = `tobj1evrU4w-`,
  ga = `NqZ9uMSo13A-`,
  _a = `RAahmG4F6sc-`;
function va(e) {
  return e?.is_coming_soon
    ? ya(
        e.coming_soon_display,
        e.steam_release_date,
        e.custom_release_date_message,
      )
    : e?.steam_release_date
      ? _t(e.steam_release_date)
      : ``;
}
function ya(e, t, n) {
  switch (e) {
    case `date_full`:
      return _t(t);
    case `date_month`:
      return Le(new Date(t * 1e3));
    case `date_quarter`:
      return $e(new Date(t * 1e3));
    case `date_year`:
      return he(new Date(t * 1e3));
    case `text_comingsoon`:
      return n || P.Localize(`#Store_ComingSoon_ComingSoon`);
    case `text_tba`:
      return n || P.Localize(`#Store_ComingSoon_TBA`);
    default:
      return ``;
  }
}
function ba(e) {
  if (!e) return ``;
  if (e && e.is_coming_soon) {
    if (e.coming_soon_display) return ce(e);
    if (e.custom_release_date_message) return e.custom_release_date_message;
    let t = e.steam_release_date;
    return t
      ? e.is_abridged_release_date
        ? Le(new Date(t * 1e3))
        : _t(t)
      : ``;
  }
  let t = e.steam_release_date;
  return ((t ||= e.original_release_date), t ? _t(t) : ``);
}
function xa(e, t = !1) {
  if (e.is_coming_soon && !t) return 0;
  let n = e.steam_release_date;
  return ((n ||= e.original_release_date), n);
}
var Sa = 7;
function Ca(e, t) {
  if (!e) return !1;
  let n = xa(e);
  return n ? !e.is_coming_soon && n + Sa * xt.PerDay > t : !1;
}
function wa(e, t) {
  return !!(e && e.is_coming_soon && t && t.packageid);
}
function Ta(e, t) {
  return !!(e && t && t.packageid);
}
function Ea(e) {
  let t = Rt(),
    n = nr();
  return m({
    mutationFn: () => Da(t, e),
    onSuccess(e) {
      let [
        t,
        { packageids_added: r, appids_added: i, purchase_result_detail: a },
      ] = e;
      i && n(i);
    },
  });
}
async function Da(e, t) {
  let n = on.Init(Fn);
  n.Body().set_item_id(yn.fromObject(t));
  let r = await Zt.AddFreeLicense(e, n);
  return [r.GetEResult(), r.Body().toObject()];
}
var Oa = `PFP2RDjCi0w-`,
  ka = `Cbfoq6WaXq4-`,
  Aa = `_4lcICEhYuQw-`,
  ja = `unoV6P6DXbM-`,
  Ma = `p8d03I0RAAs-`,
  Na = `brHZRAeRCnw-`,
  Pa = `hATzo-Hjaaw-`,
  Fa = `_7vEy4qHpqHo-`,
  Ia = `KoUJweWUwjY-`,
  La = `XAGO1LWGig0-`,
  Ra = `uN9-XHR7odQ-`,
  za = `CnbkzZzYDxs-`,
  Ba = `_8UjVVV-S-j8-`,
  Va = `k0yt-Gxhbs4-`,
  Ha = `io6uTUtzW-A-`,
  Ua = `_58-zzK2uRws-`,
  Wa = `mGygcOFcFcQ-`,
  Ga = `mW8gl4NPYGg-`,
  Ka = `X9907eDQcow-`,
  qa = `GwjmtMACpAo-`,
  Ja = `S8JsHzHuIMA-`,
  Ya = `_4nNWbL6J2cI-`,
  Xa = `Djw7Ta0NL0Q-`,
  Za = `u-mW6oZelJ4-`,
  Qa = `j0BUhYRjGwM-`,
  $a = `I-L7P5K0HUM-`,
  eo = `VYzpavMEA5M-`,
  to = `iXn31HpcmTo-`;
function no(e) {
  let { id: t, bTruncateTotalReviews: n, bShowTooltip: r } = e,
    { data: i } = it(t),
    { data: a } = pe(t),
    o = v(t),
    { data: s } = pe(o),
    { data: c } = Xt();
  if (!i || !a || (a.type == 1 && !S(s))) return null;
  let l = i.summary_unfiltered || i.summary_filtered,
    u = `#ReviewScore_UserReviewScoreAria`,
    d = !1,
    f = P.Localize(`#Language_` + F.LANGUAGE);
  if (
    (ro(c?.preferences?.review_score_preference) &&
      (i.summary_language_specific
        ? ((d = !0),
          (u = `#ReviewScore_UserReviewScoreAria_LanguageSpecific`),
          (l = i.summary_language_specific))
        : (l = i.summary_filtered)),
    !l || !l.review_score)
  )
    return null;
  let p = Xa;
  p =
    l.review_score > 0 && l.review_score < 5
      ? Za
      : l.review_score == 5
        ? Qa
        : $a;
  let m = `${F.STORE_BASE_URL}app/${a.appid}/#app_reviews_hash`,
    h = (0, B.jsxs)(`div`, {
      className: N(Ya, p),
      children: [
        (0, B.jsx)(`div`, {
          className: eo,
          "aria-label": P.Localize(u, l.review_score_label, f),
          children: l.review_score_label,
        }),
        (0, B.jsxs)(`div`, {
          className: Ja,
          "aria-label": P.Localize(
            `#GameHover_UserReviewCount`,
            l.review_count.toLocaleString(Ye()),
          ),
          children: [
            `(`,
            n
              ? `(` + l.review_count.toLocaleString(Ye()) + `)`
              : d
                ? P.Localize(
                    `#GameHover_UserReviewCount_Lang`,
                    l.review_count.toLocaleString(Ye()),
                    f,
                  )
                : P.Localize(
                    `#GameHover_UserReviewCount`,
                    l.review_count.toLocaleString(Ye()),
                  ),
            `)`,
          ],
        }),
        !n &&
          (0, B.jsxs)(`div`, {
            className: `ZBPprMOYoMs-`,
            children: [` `, P.Localize(`#GameHover_UserReviewsHeader`)],
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
  return (0, B.jsx)(b, {
    url: m,
    className: N(qa, `ReviewScore`),
    children:
      r && l.percent_positive != null && l.review_count != null && g
        ? (0, B.jsx)(Kn, {
            bTopmost: !0,
            toolTipContent: P.Localize(g, l.percent_positive, l.review_count),
            children: h,
          })
        : h,
  });
}
function ro(e) {
  return e === void 0 || e === 0 || e === 2;
}
async function io(e, t) {
  let n = kn(L.STORE_BASE_URL, t, Tn.country_code);
  return (await (await fetch(n)).json()).rgWishlist || [];
}
function ao() {
  let e = Rt(),
    t = Fe.accountid;
  return h(oo(e, t));
}
function oo(e, t) {
  return {
    queryKey: lo(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await io(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function so(e) {
  let { data: t } = ao();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function co() {
  let e = l(),
    t = Fe.accountid;
  return (n, r) => {
    e.setQueryData(lo(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function lo(e) {
  return [`AccountWishlistApps`, e ?? 0];
}
function uo(e, t, n) {
  let r = co(),
    i = Tn.accountid;
  return m({
    mutationKey: [`useUpdateWishlist`, e, i, t],
    mutationFn: async () => {
      if (e == null) return;
      let r =
          L.STORE_BASE_URL +
          `api/` +
          (t ? `addtowishlist` : `removefromwishlist`),
        i = new FormData();
      (i.append(`appid`, `` + e),
        i.append(`sessionid`, Pe()),
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
      Ht();
    },
  });
}
function fo(e) {
  let {
      id: t,
      snr: n,
      classOverride: r,
      styleOverride: i,
      bShowInGamepadUI: a,
    } = e,
    { data: o } = pe(t),
    { elDialogElement: s, fnShowLogonDialog: c } = te(),
    [l, u] = (0, z.useState)(() => {
      if (o && (o.type == 1 || o.type == 12) && o.related_items?.parent_appid)
        return o.related_items?.parent_appid;
      if (t && `appid` in t) return t.appid;
    }),
    d = y(l),
    f = so(l),
    { bIsOwned: p } = ir(d),
    [m, h] = (0, z.useState)(!1),
    g = O(`GameHoverWishlistButton`),
    { mutateAsync: _ } = uo(l, !f, n);
  (0, z.useEffect)(() => {
    t &&
      `appid` in t &&
      (o?.type == 1 || o?.type == 12) &&
      u(o.related_items?.parent_appid || t.appid);
  }, [o, t]);
  let v = (0, z.useCallback)(
    async (e) => {
      Tn.logged_in
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
    : (0, B.jsxs)(de, {
        className: N(Ia, a && `B7tWNVp-vns-`, r),
        onActivate: v,
        style: i,
        children: [
          f ? (0, B.jsx)(Nt, {}) : (0, B.jsx)(In, {}),
          (0, B.jsx)(`div`, {
            className: N(La, m && `u8yceEMO9LM-`, `WishlistButtonText`),
            children: P.Localize(
              f ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
            ),
          }),
          s,
        ],
      });
}
var po = class e {
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
        this.m_mapAppCallbackList.set(e, new at()),
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
      let n = { nAppID: e, l: L.LANGUAGE, cc: L.COUNTRY },
        r = L.STORE_BASE_URL + `saleaction/ajaxgetdeckappcompatibilityreport`,
        i = await yr.default.get(r, { params: n, withCredentials: !0 });
      if (i?.status == 200 && i.data?.success == 1 && i.data?.results)
        return (this.AddCompatabilityResult(i.data.results), !0);
      t = Ne(i);
    } catch (e) {
      t = Ne(e);
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
      let t = wt(`hardwarecompatibility`, `application_config`);
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
Be([Yn], po.prototype, `LoadAppCompabitilityResult`, null);
function mo(e) {
  let [t, n] = z.useState(po.Get().GetCompatabilityResultForApp(e));
  return (
    Un(po.Get().GetCallbackForAppList(e), n),
    z.useEffect(() => {
      po.Get().BHasCompatabilityResultForApp(e) ||
        po
          .Get()
          .LoadAppCompabitilityResult(e)
          .then(() => n(po.Get().GetCompatabilityResultForApp(e)));
    }, [e]),
    t
  );
}
var V = (function (e) {
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
function ho(e) {
  switch (e) {
    case R.OK:
      return 0;
    case R.CANCEL:
      return 1;
    case R.SECONDARY:
      return 2;
    case R.OPTIONS:
      return 3;
    case R.DIR_LEFT:
      return 4;
    case R.DIR_RIGHT:
      return 5;
    case R.DIR_UP:
      return 6;
    case R.DIR_DOWN:
      return 7;
    case R.STEAM_GUIDE:
      return 8;
    case R.STEAM_QUICK_MENU:
      return 9;
    case R.SELECT:
      return 10;
    case R.START:
      return 11;
    case R.BUMPER_LEFT:
      return 12;
    case R.BUMPER_RIGHT:
      return 13;
    case R.TRIGGER_LEFT:
      return 14;
    case R.TRIGGER_RIGHT:
      return 15;
    case R.REAR_LEFT_UPPER:
      return 24;
    case R.REAR_LEFT_LOWER:
      return 25;
    case R.REAR_RIGHT_UPPER:
      return 26;
    case R.REAR_RIGHT_LOWER:
      return 27;
    default:
      return 0;
  }
}
var go = class e {
  m_boundActions = new Map();
  m_defaultActions = new Map();
  m_globalActionsSubscriptions = [];
  m_actionDescriptionChangedCallbackRegistrations = [];
  static Log = new Wn(`ActionDescription`).Debug;
  m_nodeForCurrentDescriptions;
  InitContext(e) {
    let t = new un();
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
    } else this.SetActionDescriptionsFromMap({ [R.OK]: null });
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
    let e = Object.values(V).filter((e) => typeof e == `number`),
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
        i = ho(r);
      t[i] = e[r];
    }
    this.SetActionsFromMap(t);
  }
  SetAction(t, n) {
    if ((e.Log(`SetActionDescription`, t, n), n === void 0)) {
      if (!this.m_boundActions.has(t)) return !1;
      this.m_boundActions.delete(t);
    } else {
      if (Pt(this.m_boundActions.get(t), n)) return !1;
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
(Be([Yn], go.prototype, `OnFocusNavigationChanged`, null),
  Be([Yn], go.prototype, `OnActiveNavTreeChanged`, null),
  Be([Yn], go.prototype, `SetActionDescriptionsFromMap`, null));
var _o = `-h3mdabpWCk-`,
  vo = `z7OUnz8a2LE-`,
  yo = `-JC2DTwjTLY-`,
  bo = `gBGbg1Aq4kE-`,
  xo = `S0TPsOpik3c-`,
  So = `_6t-T9facds8-`,
  Co = `_9ltdnbqRBVs-`,
  wo = `KMiaP3xxJic-`,
  To = `-f6--J8iYK8-`,
  Eo = `tlFgqgPT5b8-`,
  Do = `LR3Stix-A4Y-`,
  Oo = `zxsM3zpa9JU-`,
  ko = `c3ZsONtZeOk-`,
  Ao = `uboNutS5k7k-`,
  jo = `_31u9Wgg0oro-`,
  Mo = `m9cG66kvPgg-`,
  No = `WGUFkBLPn8E-`,
  Po = `WFe7p-8r4T4-`,
  Fo = `_5sgfQl5H11I-`,
  Io = `ifxfOQVR6MY-`,
  Lo = `Z8zypUObkYE-`,
  Ro = `_1GTC22hSCmY-`,
  zo = `toY0I97PWjg-`,
  Bo = `_1ArCdbgfzNY-`,
  Vo = `IBiSpw0atyM-`,
  Ho = `mDOopKELMBg-`,
  Uo = `C8-HMz-fVag-`,
  Wo = `lDDPCoGwJAU-`,
  Go = `QvYBOAdgkPk-`,
  Ko = `ZAn1-qmM-Iw-`,
  qo = `dNQ1ofH4Cbs-`,
  Jo = `rmDLW23h1zQ-`,
  Yo = `ahykWXj-Rak-`,
  Xo = `TxQs7xIpj2A-`,
  Zo = `xWg9uSQknuo-`,
  Qo = `_2csr6Pw04gI-`,
  $o = `CT05Js5REus-`,
  es = `CAlqxCfPEko-`,
  ts = `hH8fUDD712k-`,
  ns = `c1DR5MyoXPo-`,
  rs = `KnF9XvfALGs-`,
  is = `voFKnm6BHlI-`,
  as = `XRBn-My-JYo-`,
  os = `MnMGQkxU8KU-`,
  ss = `BPpr5dZdGc4-`,
  H = `QeQ6K92V-ik-`,
  U = `jlNNNIYiAYQ-`,
  cs = `dXUGCsJI9Qw-`,
  ls = `N88ag1lENrA-`,
  us = `-m9XoDI2d0Q-`,
  ds = `IulAmRs78UQ-`,
  fs = `X86r8MkR480-`,
  ps = (function (e) {
    return (
      (e[(e.Knockout = 0)] = `Knockout`),
      (e[(e.Light = 1)] = `Light`),
      (e[(e.Dark = 2)] = `Dark`),
      e
    );
  })({}),
  ms = (function (e) {
    return (
      (e[(e.Small = 0)] = `Small`),
      (e[(e.Medium = 1)] = `Medium`),
      (e[(e.Large = 2)] = `Large`),
      e
    );
  })({});
function hs(e) {
  switch (e) {
    case 0:
      return us;
    case 1:
      return ds;
    case 2:
      return fs;
    default:
      return ds;
  }
}
function gs(e) {
  switch (e) {
    case 0:
      return ls;
    case 1:
      return cs;
    case 2:
      return ss;
    default:
      return cs;
  }
}
function _s(e) {
  let t = N(
      e.size == null ? hs(1) : hs(e.size),
      e.type == null ? gs(1) : gs(e.type),
      e.additionalClassName,
    ),
    n = e.type == 0;
  switch (e.button) {
    case V.A:
      return (0, B.jsx)(vs, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_A`),
      });
    case V.B:
      return (0, B.jsx)(ys, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_B`),
      });
    case V.X:
      return (0, B.jsx)(bs, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_X`),
      });
    case V.Y:
      return (0, B.jsx)(xs, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_Y`),
      });
    case V.Left:
      return (0, B.jsx)(ws, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_DpadLeft`),
      });
    case V.Right:
      return (0, B.jsx)(Ts, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_DpadRight`),
      });
    case V.Up:
      return (0, B.jsx)(Ss, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_DpadUp`),
      });
    case V.Down:
      return (0, B.jsx)(Cs, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_DpadDown`),
      });
    case V.HomeMenu:
      return (0, B.jsx)(Es, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_Steam`),
      });
    case V.QuickMenu:
      return (0, B.jsx)(Ds, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_QAM`),
      });
    case V.Select:
      return (0, B.jsx)(Os, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_View`),
      });
    case V.Start:
      return (0, B.jsx)(ks, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_Menu`),
      });
    case V.LeftBumper:
      return (0, B.jsx)(As, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_L1`),
      });
    case V.RightBumper:
      return (0, B.jsx)(js, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_R1`),
      });
    case V.LeftTrigger:
      return (0, B.jsx)(Ms, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_L2`),
      });
    case V.RightTrigger:
      return (0, B.jsx)(Ns, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_R2`),
      });
    case V.LeftStick:
      return (0, B.jsx)(Ls, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_LS`),
      });
    case V.RightStick:
      return (0, B.jsx)(Is, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_RS`),
      });
    case V.LeftStickClick:
      return (0, B.jsx)(Ps, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_L3`),
      });
    case V.RightStickClick:
      return (0, B.jsx)(Fs, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_R3`),
      });
    case V.LeftTrackpad:
      return (0, B.jsx)(Hs, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_LPad`),
      });
    case V.RightTrackpad:
      return (0, B.jsx)(Ws, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_RPad`),
      });
    case V.LeftTrackpadClick:
      return (0, B.jsx)(Us, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_LPad_Click`),
      });
    case V.RightTrackpadClick:
      return (0, B.jsx)(Gs, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_RPad_Click`),
      });
    case V.RearLeftUpper:
      return (0, B.jsx)(Rs, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_L4`),
      });
    case V.RearRightUpper:
      return (0, B.jsx)(Bs, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_R4`),
      });
    case V.RearLeftLower:
      return (0, B.jsx)(zs, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_L5`),
      });
    case V.RearRightLower:
      return (0, B.jsx)(Vs, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_R5`),
      });
    default:
      return (0, B.jsx)(Ks, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_Default`),
      });
  }
}
function vs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM21.2697 24H24.1317L19.2717 11.4H16.6077L11.8917 24H14.6457L15.4737 21.552H20.4057L21.2697 24ZM16.1937 19.446L17.9217 14.406L19.6857 19.446H16.1937Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`circle`, {
            className: H,
            cx: `18`,
            cy: `18`,
            r: `18`,
            fill: `currentColor`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M24.1317 24H21.2697L20.4057 21.552H15.4737L14.6457 24H11.8917L16.6077 11.4H19.2717L24.1317 24ZM17.9217 14.406L16.1937 19.446H19.6857L17.9217 14.406Z`,
          }),
        ],
      });
}
function ys({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM23.173 20.382C23.173 18.81 22.369 17.778 20.761 17.286C21.349 16.974 21.775 16.584 22.039 16.116C22.303 15.648 22.435 15.132 22.435 14.568C22.435 13.56 22.081 12.78 21.373 12.228C20.665 11.676 19.573 11.4 18.097 11.4H13.435V24H18.601C19.993 24 21.103 23.682 21.931 23.046C22.759 22.41 23.173 21.522 23.173 20.382ZM16.117 16.674V13.596H17.881C19.165 13.596 19.807 14.082 19.807 15.054C19.807 15.57 19.645 15.972 19.321 16.26C18.997 16.536 18.535 16.674 17.935 16.674H16.117ZM19.843 21.372C19.507 21.672 19.003 21.822 18.331 21.822H16.117V18.582H18.403C19.039 18.582 19.525 18.72 19.861 18.996C20.197 19.26 20.365 19.656 20.365 20.184C20.365 20.676 20.191 21.072 19.843 21.372Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`circle`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M20.761 17.286C22.369 17.778 23.173 18.81 23.173 20.382C23.173 21.522 22.759 22.41 21.931 23.046C21.103 23.682 19.993 24 18.601 24H13.435V11.4H18.097C19.573 11.4 20.665 11.676 21.373 12.228C22.081 12.78 22.435 13.56 22.435 14.568C22.435 15.132 22.303 15.648 22.039 16.116C21.775 16.584 21.349 16.974 20.761 17.286ZM16.117 13.596V16.674H17.935C18.535 16.674 18.997 16.536 19.321 16.26C19.645 15.972 19.807 15.57 19.807 15.054C19.807 14.082 19.165 13.596 17.881 13.596H16.117ZM18.331 21.822C19.003 21.822 19.507 21.672 19.843 21.372C20.191 21.072 20.365 20.676 20.365 20.184C20.365 19.656 20.197 19.26 19.861 18.996C19.525 18.72 19.039 18.582 18.403 18.582H16.117V21.822H18.331Z`,
          }),
        ],
      });
}
function bs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM23.7101 11.4H20.3621L17.8601 15.45L15.3581 11.4H12.1001L16.4021 17.484L11.9201 24H15.0881L17.9141 19.41L20.8661 24H24.1061L19.2821 17.394L23.7101 11.4Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`circle`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M20.3621 11.4H23.7101L19.2821 17.394L24.1061 24H20.8661L17.9141 19.41L15.0881 24H11.9201L16.4021 17.484L12.1001 11.4H15.3581L17.8601 15.45L20.3621 11.4Z`,
          }),
        ],
      });
}
function xs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM16.69 24H19.318V18.996L23.71 11.4H20.848L18.094 16.44L15.358 11.4H12.298L16.69 18.978V24Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`circle`, {
            className: H,
            cx: `18`,
            cy: `18`,
            r: `18`,
            fill: `currentColor`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M19.318 24H16.69V18.978L12.298 11.4H15.358L18.094 16.44L20.848 11.4H23.71L19.318 18.996V24Z`,
          }),
        ],
      });
}
function Ss({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM25 20.1998L19.5555 14.7554V27.1998H16.4444V14.7554L11 20.1998L8.66663 17.8665L18 8.66661L27.3333 17.8665L25 20.1998Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`circle`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M19.5555 14.7554L25 20.1998L27.3333 17.8665L18 8.66661L8.66663 17.8665L11 20.1998L16.4444 14.7554V27.1998H19.5555V14.7554Z`,
          }),
        ],
      });
}
function Cs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM10.9999 15.6666L16.4444 21.1111L16.4444 8.66663H19.5555L19.5555 21.1111L24.9999 15.6666L27.3333 18L17.9999 27.1998L8.66659 18L10.9999 15.6666Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`circle`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M16.4444 21.1111L10.9999 15.6666L8.66659 18L17.9999 27.1998L27.3333 18L24.9999 15.6666L19.5555 21.1111L19.5555 8.66663L16.4444 8.66663L16.4444 21.1111Z`,
          }),
        ],
      });
}
function ws({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.2664 10.9332L14.8219 16.3777H27.2664V19.4888H14.8219L20.2664 24.9332L17.933 27.2665L8.73314 17.9332L17.933 8.59988L20.2664 10.9332Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`circle`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M14.8219 16.3777L20.2664 10.9333L17.933 8.59994L8.73314 17.9332L17.933 27.2666L20.2664 24.9333L14.8219 19.4888L27.2664 19.4888L27.2664 16.3777L14.8219 16.3777Z`,
          }),
        ],
      });
}
function Ts({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM15.7332 24.9332L21.1776 19.4888H8.73315V16.3777H21.1776L15.7332 10.9332L18.0665 8.59991L27.2664 17.9333L18.0665 27.2666L15.7332 24.9332Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`circle`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M21.1776 19.4887L15.7332 24.9332L18.0665 27.2665L27.2664 17.9332L18.0665 8.59985L15.7332 10.9332L21.1776 16.3776L8.73315 16.3776L8.73315 19.4887L21.1776 19.4887Z`,
          }),
        ],
      });
}
function Es({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 100 36`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          d: `M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36H82C91.9411 36 100 27.9411 100 18C100 8.05888 91.9411 0 82 0H18ZM21.8011 11.5C22.6531 11.5 23.4391 11.62 24.1591 11.86C24.8791 12.1 25.4851 12.394 25.9771 12.742L24.8611 14.722C24.4171 14.41 23.9191 14.158 23.3671 13.966C22.8271 13.774 22.3111 13.678 21.8191 13.678C21.2191 13.678 20.7511 13.804 20.4151 14.056C20.0791 14.296 19.9111 14.632 19.9111 15.064C19.9111 15.496 20.1091 15.838 20.5051 16.09C20.9011 16.33 21.5071 16.594 22.3231 16.882C23.1631 17.182 23.8351 17.458 24.3391 17.71C24.8431 17.962 25.2811 18.334 25.6531 18.826C26.0371 19.306 26.2291 19.924 26.2291 20.68C26.2291 21.484 26.0191 22.18 25.5991 22.768C25.1911 23.356 24.6151 23.812 23.8711 24.136C23.1271 24.448 22.2751 24.604 21.3151 24.604C20.5351 24.604 19.7371 24.502 18.9211 24.298C18.1171 24.082 17.4091 23.794 16.7971 23.434L17.6251 21.238C18.2011 21.55 18.8071 21.802 19.4431 21.994C20.0911 22.174 20.7271 22.264 21.3511 22.264C22.0351 22.264 22.5451 22.132 22.8811 21.868C23.2291 21.604 23.4031 21.256 23.4031 20.824C23.4031 20.392 23.2171 20.056 22.8451 19.816C22.4731 19.576 21.9031 19.33 21.1351 19.078C20.2711 18.802 19.5751 18.538 19.0471 18.286C18.5191 18.022 18.0631 17.644 17.6791 17.152C17.3071 16.648 17.1211 15.994 17.1211 15.19C17.1211 14.446 17.3131 13.798 17.6971 13.246C18.0931 12.682 18.6451 12.25 19.3531 11.95C20.0611 11.65 20.8771 11.5 21.8011 11.5ZM35.2486 24.388H32.6026V14.056H28.7866V11.788H39.0646V14.056H35.2486V24.388ZM50.8108 11.788H42.3148V24.388H50.8108V22.102H44.9608V19.15H50.0008V16.882H44.9608V14.038H50.8108V11.788ZM65.8582 24.388H62.9962L62.1322 21.94H57.2002L56.3722 24.388H53.6182L58.3342 11.788H60.9982L65.8582 24.388ZM59.6482 14.794L57.9202 19.834H61.4122L59.6482 14.794ZM79.7729 11.788L75.8489 20.734L71.6009 11.788H69.0629V24.388H71.4749V16.468L74.9309 24.028H76.5329L79.9169 16.378V24.388H82.4549V11.788H79.7729Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 100 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M0 18C0 8.05888 8.05888 0 18 0H82C91.9411 0 100 8.05888 100 18C100 27.9411 91.9411 36 82 36H18C8.05888 36 0 27.9411 0 18Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M21.8011 11.5C22.6531 11.5 23.4391 11.62 24.1591 11.86C24.8791 12.1 25.4851 12.394 25.9771 12.742L24.8611 14.722C24.4171 14.41 23.9191 14.158 23.3671 13.966C22.8271 13.774 22.3111 13.678 21.8191 13.678C21.2191 13.678 20.7511 13.804 20.4151 14.056C20.0791 14.296 19.9111 14.632 19.9111 15.064C19.9111 15.496 20.1091 15.838 20.5051 16.09C20.9011 16.33 21.5071 16.594 22.3231 16.882C23.1631 17.182 23.8351 17.458 24.3391 17.71C24.8431 17.962 25.2811 18.334 25.6531 18.826C26.0371 19.306 26.2291 19.924 26.2291 20.68C26.2291 21.484 26.0191 22.18 25.5991 22.768C25.1911 23.356 24.6151 23.812 23.8711 24.136C23.1271 24.448 22.2751 24.604 21.3151 24.604C20.5351 24.604 19.7371 24.502 18.9211 24.298C18.1171 24.082 17.4091 23.794 16.7971 23.434L17.6251 21.238C18.2011 21.55 18.8071 21.802 19.4431 21.994C20.0911 22.174 20.7271 22.264 21.3511 22.264C22.0351 22.264 22.5451 22.132 22.8811 21.868C23.2291 21.604 23.4031 21.256 23.4031 20.824C23.4031 20.392 23.2171 20.056 22.8451 19.816C22.4731 19.576 21.9031 19.33 21.1351 19.078C20.2711 18.802 19.5751 18.538 19.0471 18.286C18.5191 18.022 18.0631 17.644 17.6791 17.152C17.3071 16.648 17.1211 15.994 17.1211 15.19C17.1211 14.446 17.3131 13.798 17.6971 13.246C18.0931 12.682 18.6451 12.25 19.3531 11.95C20.0611 11.65 20.8771 11.5 21.8011 11.5Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M35.2486 24.388H32.6026V14.056H28.7866V11.788H39.0646V14.056H35.2486V24.388Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M42.3148 11.788H50.8108V14.038H44.9608V16.882H50.0008V19.15H44.9608V22.102H50.8108V24.388H42.3148V11.788Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M65.8582 24.388H62.9962L62.1322 21.94H57.2002L56.3722 24.388H53.6182L58.3342 11.788H60.9982L65.8582 24.388ZM59.6482 14.794L57.9202 19.834H61.4122L59.6482 14.794Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M75.8489 20.734L79.7729 11.788H82.4549V24.388H79.9169V16.378L76.5329 24.028H74.9309L71.4749 16.468V24.388H69.0629V11.788H71.6009L75.8489 20.734Z`,
          }),
        ],
      });
}
function Ds({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 81 36`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36H61C70.9411 36 79 27.9411 79 18C79 8.05888 70.9411 0 61 0H18ZM21.5 22.5C23.9853 22.5 26 20.4853 26 18C26 15.5147 23.9853 13.5 21.5 13.5C19.0147 13.5 17 15.5147 17 18C17 20.4853 19.0147 22.5 21.5 22.5ZM44 18C44 20.4853 41.9853 22.5 39.5 22.5C37.0147 22.5 35 20.4853 35 18C35 15.5147 37.0147 13.5 39.5 13.5C41.9853 13.5 44 15.5147 44 18ZM57.5 22.5C59.9853 22.5 62 20.4853 62 18C62 15.5147 59.9853 13.5 57.5 13.5C55.0147 13.5 53 15.5147 53 18C53 20.4853 55.0147 22.5 57.5 22.5Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 81 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M0 18C0 8.05888 8.05888 0 18 0H61C70.9411 0 79 8.05888 79 18C79 27.9411 70.9411 36 61 36H18C8.05888 36 0 27.9411 0 18Z`,
          }),
          (0, B.jsx)(`circle`, {
            className: U,
            fill: `currentColor`,
            cx: `21.5`,
            cy: `18`,
            r: `4.5`,
          }),
          (0, B.jsx)(`circle`, {
            className: U,
            fill: `currentColor`,
            cx: `39.5`,
            cy: `18`,
            r: `4.5`,
          }),
          (0, B.jsx)(`circle`, {
            className: U,
            fill: `currentColor`,
            cx: `57.5`,
            cy: `18`,
            r: `4.5`,
          }),
        ],
      });
}
function Os({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M12 6C5.37258 6 0 11.3726 0 18C0 24.6274 5.37258 30 12 30H36C42.6274 30 48 24.6274 48 18C48 11.3726 42.6274 6 36 6H12ZM31 11H17V25H31V11Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`rect`, {
            className: H,
            fill: `currentColor`,
            y: `6`,
            width: `48`,
            height: `24`,
            rx: `12`,
          }),
          (0, B.jsx)(`rect`, {
            className: U,
            fill: `currentColor`,
            x: `17`,
            y: `11`,
            width: `14`,
            height: `14`,
          }),
        ],
      });
}
function ks({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M12 6C5.37258 6 0 11.3726 0 18C0 24.6274 5.37258 30 12 30H36C42.6274 30 48 24.6274 48 18C48 11.3726 42.6274 6 36 6H12ZM31 11H17V13.8H31V11ZM17 22.2H31V25H17V22.2ZM31 16.6H17V19.4H31V16.6Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`rect`, {
            className: H,
            fill: `currentColor`,
            y: `6`,
            width: `48`,
            height: `24`,
            rx: `12`,
          }),
          (0, B.jsx)(`rect`, {
            className: U,
            fill: `currentColor`,
            x: `17`,
            y: `11`,
            width: `14`,
            height: `2.8`,
          }),
          (0, B.jsx)(`rect`, {
            className: U,
            fill: `currentColor`,
            x: `17`,
            y: `22.2`,
            width: `14`,
            height: `2.8`,
          }),
          (0, B.jsx)(`rect`, {
            className: U,
            fill: `currentColor`,
            x: `17`,
            y: `16.6`,
            width: `14`,
            height: `2.8`,
          }),
        ],
      });
}
function As({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M7.5 0C3.35786 0 0 4.47715 0 10V30C0 31.1046 0.671574 32 1.5 32H34.5C35.3284 32 36 31.1046 36 30V2C36 0.895431 35.3284 0 34.5 0H7.5ZM9.36182 23H17.8218V20.624H12.0078V10.4H9.36182V23ZM25.7635 20.714V10.4H23.7296L19.5896 12.452L20.4356 14.432L23.0816 13.316V20.714H20.1115V23H28.1576V20.714H25.7635Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M0 10C0 4.47715 3.35786 0 7.5 0H34.5C35.3284 0 36 0.895431 36 2V30C36 31.1046 35.3284 32 34.5 32H1.5C0.671574 32 0 31.1046 0 30V10Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.8218 23H9.36182V10.4H12.0078V20.624H17.8218V23Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M25.7635 10.4V20.714H28.1576V23H20.1116V20.714H23.0816V13.316L20.4356 14.432L19.5896 12.452L23.7296 10.4H25.7635Z`,
          }),
        ],
      });
}
function js({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M28.5 0C32.6421 0 36 4.47715 36 10V30C36 31.1046 35.3284 32 34.5 32H1.5C0.671573 32 0 31.1046 0 30V2C0 0.895431 0.671573 0 1.5 0H28.5ZM15.8185 23H18.7525L15.7825 18.23C16.5505 17.894 17.1445 17.402 17.5645 16.754C17.9965 16.106 18.2125 15.296 18.2125 14.324C18.2125 13.088 17.8045 12.128 16.9885 11.444C16.1725 10.748 14.9005 10.4 13.1725 10.4H8.45654V23H11.1025V18.752H12.9745H13.2805L15.8185 23ZM11.1025 16.484V12.65H13.0105C13.8385 12.65 14.4385 12.806 14.8105 13.118C15.1945 13.418 15.3865 13.874 15.3865 14.486C15.3865 15.11 15.1885 15.602 14.7925 15.962C14.4085 16.31 13.8685 16.484 13.1725 16.484H11.1025ZM26.6688 20.714V10.4H24.6348L20.4948 12.452L21.3408 14.432L23.9868 13.316V20.714H21.0168V23H29.0628V20.714H26.6688Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M36 10C36 4.47715 32.6421 0 28.5 0H1.5C0.671574 0 0 0.895431 0 2V30C0 31.1046 0.671574 32 1.5 32H34.5C35.3284 32 36 31.1046 36 30V10Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M18.7525 23H15.8185L13.2805 18.752H12.9745H11.1025V23H8.45654V10.4H13.1725C14.9005 10.4 16.1725 10.748 16.9885 11.444C17.8045 12.128 18.2125 13.088 18.2125 14.324C18.2125 15.296 17.9965 16.106 17.5645 16.754C17.1445 17.402 16.5505 17.894 15.7825 18.23L18.7525 23ZM11.1025 12.65V16.484H13.1725C13.8685 16.484 14.4085 16.31 14.7925 15.962C15.1885 15.602 15.3865 15.11 15.3865 14.486C15.3865 13.874 15.1945 13.418 14.8105 13.118C14.4385 12.806 13.8385 12.65 13.0105 12.65H11.1025Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M26.6688 10.4V20.714H29.0628V23H21.0168V20.714H23.9868V13.316L21.3408 14.432L20.4948 12.452L24.6348 10.4H26.6688Z`,
          }),
        ],
      });
}
function Ms({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M7.5 32C3.35786 32 0 27.5228 0 22V2C0 0.895431 0.671574 0 1.5 0H34.5C35.3284 0 36 0.895431 36 2V30C36 31.1046 35.3284 32 34.5 32H7.5ZM29.0743 20.714H23.0083L25.6183 18.554C26.6623 17.69 27.4363 16.91 27.9403 16.214C28.4443 15.506 28.6963 14.72 28.6963 13.856C28.6963 12.68 28.2583 11.774 27.3823 11.138C26.5063 10.502 25.3423 10.184 23.8903 10.184C23.0743 10.184 22.3063 10.298 21.5863 10.526C20.8783 10.754 20.2483 11.06 19.6963 11.444L20.5963 13.388C20.9683 13.136 21.4003 12.926 21.8923 12.758C22.3963 12.59 22.9123 12.506 23.4403 12.506C24.1483 12.506 24.7243 12.668 25.1683 12.992C25.6243 13.304 25.8523 13.772 25.8523 14.396C25.8523 14.78 25.7623 15.134 25.5823 15.458C25.4023 15.782 25.1623 16.088 24.8623 16.376C24.5743 16.664 24.1543 17.042 23.6023 17.51L23.2963 17.78L19.6603 20.804V23H29.0743V20.714ZM9.32458 23H17.7846V20.624H11.9706V10.4H9.32458V23Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M0 22C0 27.5228 3.35786 32 7.5 32H34.5C35.3284 32 36 31.1046 36 30V2C36 0.895432 35.3284 0 34.5 0H1.5C0.671574 0 0 0.895432 0 2V22Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.7846 23H9.32458V10.4H11.9706V20.624H17.7846V23Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.0083 20.714H29.0743V23H19.6603V20.804L23.2963 17.78L23.6023 17.51C24.1543 17.042 24.5743 16.664 24.8623 16.376C25.1623 16.088 25.4023 15.782 25.5823 15.458C25.7623 15.134 25.8523 14.78 25.8523 14.396C25.8523 13.772 25.6243 13.304 25.1683 12.992C24.7243 12.668 24.1483 12.506 23.4403 12.506C22.9123 12.506 22.3963 12.59 21.8923 12.758C21.4003 12.926 20.9683 13.136 20.5963 13.388L19.6963 11.444C20.2483 11.06 20.8783 10.754 21.5863 10.526C22.3063 10.298 23.0743 10.184 23.8903 10.184C25.3423 10.184 26.5063 10.502 27.3823 11.138C28.2583 11.774 28.6963 12.68 28.6963 13.856C28.6963 14.72 28.4443 15.506 27.9403 16.214C27.4363 16.91 26.6623 17.69 25.6183 18.554L23.0083 20.714Z`,
          }),
        ],
      });
}
function Ns({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M28.5 32C32.6421 32 36 27.5228 36 22V2C36 0.895431 35.3284 0 34.5 0H1.5C0.671573 0 0 0.895431 0 2V30C0 31.1046 0.671573 32 1.5 32H28.5ZM28.9796 20.714H22.9136L25.5236 18.554C26.5676 17.69 27.3416 16.91 27.8456 16.214C28.3496 15.506 28.6016 14.72 28.6016 13.856C28.6016 12.68 28.1636 11.774 27.2876 11.138C26.4116 10.502 25.2476 10.184 23.7956 10.184C22.9796 10.184 22.2116 10.298 21.4916 10.526C20.7836 10.754 20.1536 11.06 19.6016 11.444L20.5016 13.388C20.8736 13.136 21.3056 12.926 21.7976 12.758C22.3016 12.59 22.8176 12.506 23.3456 12.506C24.0536 12.506 24.6296 12.668 25.0736 12.992C25.5296 13.304 25.7576 13.772 25.7576 14.396C25.7576 14.78 25.6676 15.134 25.4876 15.458C25.3076 15.782 25.0676 16.088 24.7676 16.376C24.4796 16.664 24.0596 17.042 23.5076 17.51L23.2016 17.78L19.5656 20.804V23H28.9796V20.714ZM14.7813 23H17.7153L14.7453 18.23C15.5133 17.894 16.1073 17.402 16.5273 16.754C16.9593 16.106 17.1753 15.296 17.1753 14.324C17.1753 13.088 16.7673 12.128 15.9513 11.444C15.1353 10.748 13.8633 10.4 12.1353 10.4H7.41931V23H10.0653V18.752H11.9373H12.2433L14.7813 23ZM10.0653 16.484V12.65H11.9733C12.8013 12.65 13.4013 12.806 13.7733 13.118C14.1573 13.418 14.3493 13.874 14.3493 14.486C14.3493 15.11 14.1513 15.602 13.7553 15.962C13.3713 16.31 12.8313 16.484 12.1353 16.484H10.0653Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M36 22C36 27.5228 32.6421 32 28.5 32H1.5C0.671574 32 0 31.1046 0 30V2C0 0.895432 0.671574 0 1.5 0H34.5C35.3284 0 36 0.895432 36 2V22Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.7153 23H14.7813L12.2433 18.752H11.9373H10.0653V23H7.41931V10.4H12.1353C13.8633 10.4 15.1353 10.748 15.9513 11.444C16.7673 12.128 17.1753 13.088 17.1753 14.324C17.1753 15.296 16.9593 16.106 16.5273 16.754C16.1073 17.402 15.5133 17.894 14.7453 18.23L17.7153 23ZM10.0653 12.65V16.484H12.1353C12.8313 16.484 13.3713 16.31 13.7553 15.962C14.1513 15.602 14.3493 15.11 14.3493 14.486C14.3493 13.874 14.1573 13.418 13.7733 13.118C13.4013 12.806 12.8013 12.65 11.9733 12.65H10.0653Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M22.9136 20.714H28.9796V23H19.5656V20.804L23.2016 17.78L23.5076 17.51C24.0596 17.042 24.4796 16.664 24.7676 16.376C25.0676 16.088 25.3076 15.782 25.4876 15.458C25.6676 15.134 25.7576 14.78 25.7576 14.396C25.7576 13.772 25.5296 13.304 25.0736 12.992C24.6296 12.668 24.0536 12.506 23.3456 12.506C22.8176 12.506 22.3016 12.59 21.7976 12.758C21.3056 12.926 20.8736 13.136 20.5016 13.388L19.6016 11.444C20.1536 11.06 20.7836 10.754 21.4916 10.526C22.2116 10.298 22.9796 10.184 23.7956 10.184C25.2476 10.184 26.4116 10.502 27.2876 11.138C28.1636 11.774 28.6016 12.68 28.6016 13.856C28.6016 14.72 28.3496 15.506 27.8456 16.214C27.3416 16.91 26.5676 17.69 25.5236 18.554L22.9136 20.714Z`,
          }),
        ],
      });
}
function Ps({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`path`, {
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, B.jsx)(`path`, {
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, B.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M18 30.75C27.9411 30.75 36 25.7132 36 19.5C36 13.2868 27.9411 8.25 18 8.25C8.05887 8.25 0 13.2868 0 19.5C0 25.7132 8.05887 30.75 18 30.75ZM25.4679 14.284C24.7852 13.7613 23.7879 13.5 22.4759 13.5C21.6972 13.5 20.9666 13.6173 20.2839 13.852C19.6119 14.0867 19.0092 14.4227 18.4759 14.86L19.4679 16.364C19.8199 16.0973 20.2146 15.8893 20.6519 15.74C21.0999 15.58 21.5639 15.5 22.0439 15.5C22.6732 15.5 23.1639 15.6227 23.5159 15.868C23.8786 16.1133 24.0599 16.4387 24.0599 16.844C24.0599 17.2813 23.8679 17.6227 23.4839 17.868C23.1106 18.1027 22.6146 18.22 21.9959 18.22H20.6999V19.996H22.1399C23.7079 19.996 24.4919 20.508 24.4919 21.532C24.4919 22.0547 24.2839 22.4653 23.8679 22.764C23.4626 23.0627 22.8972 23.212 22.1719 23.212C21.0306 23.212 20.0439 22.876 19.2119 22.204L18.2039 23.932C18.7052 24.3373 19.3186 24.652 20.0439 24.876C20.7799 25.1 21.5532 25.212 22.3639 25.212C23.2172 25.212 23.9959 25.068 24.6999 24.78C25.4039 24.4813 25.9586 24.0653 26.3639 23.532C26.7692 22.988 26.9719 22.364 26.9719 21.66C26.9719 20.892 26.7479 20.2787 26.2999 19.82C25.8626 19.3507 25.2866 19.0413 24.5719 18.892V18.844C25.1799 18.6093 25.6492 18.2733 25.9799 17.836C26.3212 17.388 26.4919 16.8813 26.4919 16.316C26.4919 15.484 26.1506 14.8067 25.4679 14.284ZM9.48901 24.956H17.009V22.844H11.841V13.756H9.48901V24.956Z`,
          }),
        ],
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`ellipse`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `19.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.009 24.956H9.48901V13.756H11.841V22.844H17.009V24.956Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M22.4759 13.5C23.7879 13.5 24.7852 13.7613 25.4679 14.284C26.1506 14.8067 26.4919 15.484 26.4919 16.316C26.4919 16.8813 26.3212 17.388 25.9799 17.836C25.6492 18.2733 25.1799 18.6093 24.5719 18.844V18.892C25.2866 19.0413 25.8626 19.3507 26.2999 19.82C26.7479 20.2787 26.9719 20.892 26.9719 21.66C26.9719 22.364 26.7692 22.988 26.3639 23.532C25.9586 24.0653 25.4039 24.4813 24.6999 24.78C23.9959 25.068 23.2172 25.212 22.3639 25.212C21.5532 25.212 20.7799 25.1 20.0439 24.876C19.3186 24.652 18.7052 24.3373 18.2039 23.932L19.2119 22.204C20.0439 22.876 21.0306 23.212 22.1719 23.212C22.8972 23.212 23.4626 23.0627 23.8679 22.764C24.2839 22.4653 24.4919 22.0547 24.4919 21.532C24.4919 20.508 23.7079 19.996 22.1399 19.996H20.6999V18.22H21.9959C22.6146 18.22 23.1106 18.1027 23.4839 17.868C23.8679 17.6227 24.0599 17.2813 24.0599 16.844C24.0599 16.4387 23.8786 16.1133 23.5159 15.868C23.1639 15.6227 22.6732 15.5 22.0439 15.5C21.5639 15.5 21.0999 15.58 20.6519 15.74C20.2146 15.8893 19.8199 16.0973 19.4679 16.364L18.4759 14.86C19.0092 14.4227 19.6119 14.0867 20.2839 13.852C20.9666 13.6173 21.6972 13.5 22.4759 13.5Z`,
          }),
        ],
      });
}
function Fs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`path`, {
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, B.jsx)(`path`, {
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, B.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M18 30.75C27.9411 30.75 36 25.7132 36 19.5C36 13.2868 27.9411 8.25 18 8.25C8.05887 8.25 0 13.2868 0 19.5C0 25.7132 8.05887 30.75 18 30.75ZM26.5882 14.284C25.9056 13.7613 24.9082 13.5 23.5962 13.5C22.8176 13.5 22.0869 13.6173 21.4043 13.852C20.7323 14.0867 20.1296 14.4227 19.5963 14.86L20.5882 16.364C20.9403 16.0973 21.3349 15.8893 21.7723 15.74C22.2202 15.58 22.6842 15.5 23.1642 15.5C23.7936 15.5 24.2843 15.6227 24.6362 15.868C24.9989 16.1133 25.1803 16.4387 25.1803 16.844C25.1803 17.2813 24.9883 17.6227 24.6043 17.868C24.2309 18.1027 23.7349 18.22 23.1162 18.22H21.8203V19.996H23.2603C24.8283 19.996 25.6122 20.508 25.6122 21.532C25.6122 22.0547 25.4042 22.4653 24.9883 22.764C24.5829 23.0627 24.0176 23.212 23.2923 23.212C22.1509 23.212 21.1643 22.876 20.3323 22.204L19.3242 23.932C19.8256 24.3373 20.4389 24.652 21.1642 24.876C21.9002 25.1 22.6736 25.212 23.4842 25.212C24.3376 25.212 25.1162 25.068 25.8202 24.78C26.5243 24.4813 27.0789 24.0653 27.4842 23.532C27.8896 22.988 28.0923 22.364 28.0923 21.66C28.0923 20.892 27.8682 20.2787 27.4202 19.82C26.9829 19.3507 26.4069 19.0413 25.6922 18.892V18.844C26.3002 18.6093 26.7696 18.2733 27.1003 17.836C27.4416 17.388 27.6122 16.8813 27.6122 16.316C27.6122 15.484 27.2709 14.8067 26.5882 14.284ZM15.544 24.956H18.152L15.512 20.716C16.1947 20.4173 16.7227 19.98 17.096 19.404C17.48 18.828 17.672 18.108 17.672 17.244C17.672 16.1453 17.3093 15.292 16.584 14.684C15.8587 14.0653 14.728 13.756 13.192 13.756H9V24.956H11.352V21.18H13.016H13.288L15.544 24.956ZM11.352 19.164V15.756H13.048C13.784 15.756 14.3173 15.8947 14.648 16.172C14.9893 16.4387 15.16 16.844 15.16 17.388C15.16 17.9427 14.984 18.38 14.632 18.7C14.2907 19.0093 13.8107 19.164 13.192 19.164H11.352Z`,
          }),
        ],
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`ellipse`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `19.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M18.152 24.956H15.544L13.288 21.18H13.016H11.352V24.956H9V13.756H13.192C14.728 13.756 15.8587 14.0653 16.584 14.684C17.3093 15.292 17.672 16.1453 17.672 17.244C17.672 18.108 17.48 18.828 17.096 19.404C16.7227 19.98 16.1947 20.4173 15.512 20.716L18.152 24.956ZM11.352 15.756V19.164H13.192C13.8107 19.164 14.2907 19.0093 14.632 18.7C14.984 18.38 15.16 17.9427 15.16 17.388C15.16 16.844 14.9893 16.4387 14.648 16.172C14.3173 15.8947 13.784 15.756 13.048 15.756H11.352Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.5962 13.5C24.9082 13.5 25.9056 13.7613 26.5882 14.284C27.2709 14.8067 27.6122 15.484 27.6122 16.316C27.6122 16.8813 27.4416 17.388 27.1003 17.836C26.7696 18.2733 26.3002 18.6093 25.6922 18.844V18.892C26.4069 19.0413 26.9829 19.3507 27.4202 19.82C27.8682 20.2787 28.0923 20.892 28.0923 21.66C28.0923 22.364 27.8896 22.988 27.4842 23.532C27.0789 24.0653 26.5243 24.4813 25.8202 24.78C25.1162 25.068 24.3376 25.212 23.4843 25.212C22.6736 25.212 21.9003 25.1 21.1643 24.876C20.4389 24.652 19.8256 24.3373 19.3243 23.932L20.3323 22.204C21.1643 22.876 22.1509 23.212 23.2923 23.212C24.0176 23.212 24.5829 23.0627 24.9882 22.764C25.4042 22.4653 25.6122 22.0547 25.6122 21.532C25.6122 20.508 24.8283 19.996 23.2603 19.996H21.8203V18.22H23.1163C23.7349 18.22 24.2309 18.1027 24.6043 17.868C24.9883 17.6227 25.1803 17.2813 25.1803 16.844C25.1803 16.4387 24.9989 16.1133 24.6363 15.868C24.2843 15.6227 23.7936 15.5 23.1643 15.5C22.6842 15.5 22.2203 15.58 21.7723 15.74C21.3349 15.8893 20.9403 16.0973 20.5883 16.364L19.5963 14.86C20.1296 14.4227 20.7323 14.0867 21.4043 13.852C22.0869 13.6173 22.8176 13.5 23.5962 13.5Z`,
          }),
        ],
      });
}
function Is({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M18 24.75C27.9411 24.75 36 19.7132 36 13.5C36 7.2868 27.9411 2.25 18 2.25C8.05887 2.25 0 7.2868 0 13.5C0 19.7132 8.05887 24.75 18 24.75ZM20.8833 18.9875H23.6775L20.849 14.4447C21.5804 14.1247 22.1461 13.6561 22.5461 13.039C22.9575 12.4218 23.1633 11.6504 23.1633 10.7247C23.1633 9.54755 22.7747 8.63326 21.9975 7.98183C21.2204 7.31898 20.009 6.98755 18.3633 6.98755H13.8718V18.9875H16.3918V14.9418H18.1747H18.4661L20.8833 18.9875ZM16.3918 12.7818V9.13041H18.209C18.9975 9.13041 19.569 9.27898 19.9233 9.57612C20.289 9.86183 20.4718 10.2961 20.4718 10.879C20.4718 11.4733 20.2833 11.9418 19.9061 12.2847C19.5404 12.6161 19.0261 12.7818 18.3633 12.7818H16.3918Z`,
          }),
          (0, B.jsx)(`path`, {
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`ellipse`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `13.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.6775 18.9875H20.8833L18.4661 14.9418H18.1747H16.3918V18.9875H13.8718V6.98755H18.3633C20.009 6.98755 21.2204 7.31898 21.9975 7.98184C22.7747 8.63326 23.1633 9.54755 23.1633 10.7247C23.1633 11.6504 22.9575 12.4218 22.5461 13.039C22.1461 13.6561 21.5804 14.1247 20.849 14.4447L23.6775 18.9875ZM16.3918 9.13041V12.7818H18.3633C19.0261 12.7818 19.5404 12.6161 19.9061 12.2847C20.2833 11.9418 20.4718 11.4733 20.4718 10.879C20.4718 10.2961 20.289 9.86183 19.9233 9.57612C19.569 9.27898 18.9975 9.13041 18.209 9.13041H16.3918Z`,
          }),
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      });
}
function Ls({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M18 24.75C27.9411 24.75 36 19.7132 36 13.5C36 7.2868 27.9411 2.25 18 2.25C8.05887 2.25 0 7.2868 0 13.5C0 19.7132 8.05887 24.75 18 24.75ZM14 19H23V16.7371H16.8149V7H14V19Z`,
          }),
          (0, B.jsx)(`path`, {
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`ellipse`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `13.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23 19H14V7H16.8149V16.7371H23V19Z`,
          }),
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      });
}
function Rs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM8.62341 24.75H17.0834V22.374H11.2694V12.15H8.62341V24.75ZM27.3111 19.854V12.15H24.8631L18.6891 20.16V21.888H24.6291V24.75H27.3111V21.888H29.1291V19.854H27.3111ZM21.2631 19.854L24.7371 15.3V19.854H21.2631Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.0834 24.75H8.62341V12.15H11.2694V22.374H17.0834V24.75Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M27.3111 12.15V19.854H29.1291V21.888H27.3111V24.75H24.6291V21.888H18.6891V20.16L24.8631 12.15H27.3111ZM24.7371 15.3L21.2631 19.854H24.7371V15.3Z`,
          }),
        ],
      });
}
function zs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM8.23669 24.75H16.6967V22.374H10.8827V12.15H8.23669V24.75ZM27.3744 14.4V12.15H19.3284V18.648L21.0024 19.566C21.3744 19.266 21.7524 19.044 22.1364 18.9C22.5204 18.744 22.9404 18.666 23.3964 18.666C24.0084 18.666 24.4884 18.828 24.8364 19.152C25.1964 19.476 25.3764 19.944 25.3764 20.556C25.3764 21.252 25.1424 21.786 24.6744 22.158C24.2064 22.53 23.5464 22.716 22.6944 22.716C21.5664 22.716 20.5404 22.404 19.6164 21.78L18.6804 23.796C19.1484 24.192 19.7364 24.498 20.4444 24.714C21.1524 24.93 21.9144 25.038 22.7304 25.038C23.8344 25.038 24.7884 24.852 25.5924 24.48C26.4084 24.096 27.0264 23.562 27.4464 22.878C27.8784 22.194 28.0944 21.396 28.0944 20.484C28.0944 19.26 27.7524 18.33 27.0684 17.694C26.3964 17.046 25.4964 16.722 24.3684 16.722C23.9244 16.722 23.4804 16.776 23.0364 16.884C22.6044 16.98 22.2144 17.136 21.8664 17.352V14.4H27.3744Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M16.6967 24.75H8.23669V12.15H10.8827V22.374H16.6967V24.75Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M27.3744 12.15V14.4H21.8664V17.352C22.2144 17.136 22.6044 16.98 23.0364 16.884C23.4804 16.776 23.9244 16.722 24.3684 16.722C25.4964 16.722 26.3964 17.046 27.0684 17.694C27.7524 18.33 28.0944 19.26 28.0944 20.484C28.0944 21.396 27.8784 22.194 27.4464 22.878C27.0264 23.562 26.4084 24.096 25.5924 24.48C24.7884 24.852 23.8344 25.038 22.7304 25.038C21.9144 25.038 21.1524 24.93 20.4444 24.714C19.7364 24.498 19.1484 24.192 18.6804 23.796L19.6164 21.78C20.5404 22.404 21.5664 22.716 22.6944 22.716C23.5464 22.716 24.2064 22.53 24.6744 22.158C25.1424 21.786 25.3764 21.252 25.3764 20.556C25.3764 19.944 25.1964 19.476 24.8364 19.152C24.4884 18.828 24.0084 18.666 23.3964 18.666C22.9404 18.666 22.5204 18.744 22.1364 18.9C21.7524 19.044 21.3744 19.266 21.0024 19.566L19.3284 18.648V12.15H27.3744Z`,
          }),
        ],
      });
}
function Bs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM14.5176 24.75H17.4516L14.4816 19.98C15.2496 19.644 15.8436 19.152 16.2636 18.504C16.6956 17.856 16.9116 17.046 16.9116 16.074C16.9116 14.838 16.5036 13.878 15.6876 13.194C14.8716 12.498 13.5996 12.15 11.8716 12.15H7.15564V24.75H9.80164V20.502H11.6736H11.9796L14.5176 24.75ZM9.80164 18.234V14.4H11.7096C12.5376 14.4 13.1376 14.556 13.5096 14.868C13.8936 15.168 14.0856 15.624 14.0856 16.236C14.0856 16.86 13.8876 17.352 13.4916 17.712C13.1076 18.06 12.5676 18.234 11.8716 18.234H9.80164ZM27.6539 19.854V12.15H25.2059L19.0319 20.16V21.888H24.9719V24.75H27.6539V21.888H29.4719V19.854H27.6539ZM21.6059 19.854L25.0799 15.3V19.854H21.6059Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.4516 24.75H14.5176L11.9796 20.502H11.6736H9.80164V24.75H7.15564V12.15H11.8716C13.5996 12.15 14.8716 12.498 15.6876 13.194C16.5036 13.878 16.9116 14.838 16.9116 16.074C16.9116 17.046 16.6956 17.856 16.2636 18.504C15.8436 19.152 15.2496 19.644 14.4816 19.98L17.4516 24.75ZM9.80164 14.4V18.234H11.8716C12.5676 18.234 13.1076 18.06 13.4916 17.712C13.8876 17.352 14.0856 16.86 14.0856 16.236C14.0856 15.624 13.8936 15.168 13.5096 14.868C13.1376 14.556 12.5376 14.4 11.7096 14.4H9.80164Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M27.6539 12.15V19.854H29.4719V21.888H27.6539V24.75H24.9719V21.888H19.0319V20.16L25.2059 12.15H27.6539ZM25.0799 15.3L21.6059 19.854H25.0799V15.3Z`,
          }),
        ],
      });
}
function Vs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM14.6934 24.75H17.6274L14.6574 19.98C15.4254 19.644 16.0194 19.152 16.4394 18.504C16.8714 17.856 17.0874 17.046 17.0874 16.074C17.0874 14.838 16.6794 13.878 15.8634 13.194C15.0474 12.498 13.7754 12.15 12.0474 12.15H7.33142V24.75H9.97742V20.502H11.8494H12.1554L14.6934 24.75ZM9.97742 18.234V14.4H11.8854C12.7134 14.4 13.3134 14.556 13.6854 14.868C14.0694 15.168 14.2614 15.624 14.2614 16.236C14.2614 16.86 14.0634 17.352 13.6674 17.712C13.2834 18.06 12.7434 18.234 12.0474 18.234H9.97742ZM28.2797 14.4V12.15H20.2337V18.648L21.9077 19.566C22.2797 19.266 22.6577 19.044 23.0417 18.9C23.4257 18.744 23.8457 18.666 24.3017 18.666C24.9137 18.666 25.3937 18.828 25.7417 19.152C26.1017 19.476 26.2817 19.944 26.2817 20.556C26.2817 21.252 26.0477 21.786 25.5797 22.158C25.1117 22.53 24.4517 22.716 23.5997 22.716C22.4717 22.716 21.4457 22.404 20.5217 21.78L19.5857 23.796C20.0537 24.192 20.6417 24.498 21.3497 24.714C22.0577 24.93 22.8197 25.038 23.6357 25.038C24.7397 25.038 25.6937 24.852 26.4977 24.48C27.3137 24.096 27.9317 23.562 28.3517 22.878C28.7837 22.194 28.9997 21.396 28.9997 20.484C28.9997 19.26 28.6577 18.33 27.9737 17.694C27.3017 17.046 26.4017 16.722 25.2737 16.722C24.8297 16.722 24.3857 16.776 23.9417 16.884C23.5097 16.98 23.1197 17.136 22.7717 17.352V14.4H28.2797Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.6274 24.75H14.6934L12.1554 20.502H11.8494H9.97742V24.75H7.33142V12.15H12.0474C13.7754 12.15 15.0474 12.498 15.8634 13.194C16.6794 13.878 17.0874 14.838 17.0874 16.074C17.0874 17.046 16.8714 17.856 16.4394 18.504C16.0194 19.152 15.4254 19.644 14.6574 19.98L17.6274 24.75ZM9.97742 14.4V18.234H12.0474C12.7434 18.234 13.2834 18.06 13.6674 17.712C14.0634 17.352 14.2614 16.86 14.2614 16.236C14.2614 15.624 14.0694 15.168 13.6854 14.868C13.3134 14.556 12.7134 14.4 11.8854 14.4H9.97742Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M28.2797 12.15V14.4H22.7717V17.352C23.1197 17.136 23.5097 16.98 23.9417 16.884C24.3857 16.776 24.8297 16.722 25.2737 16.722C26.4017 16.722 27.3017 17.046 27.9737 17.694C28.6577 18.33 28.9997 19.26 28.9997 20.484C28.9997 21.396 28.7837 22.194 28.3517 22.878C27.9317 23.562 27.3137 24.096 26.4977 24.48C25.6937 24.852 24.7397 25.038 23.6357 25.038C22.8197 25.038 22.0577 24.93 21.3497 24.714C20.6417 24.498 20.0537 24.192 19.5857 23.796L20.5217 21.78C21.4457 22.404 22.4717 22.716 23.5997 22.716C24.4517 22.716 25.1117 22.53 25.5797 22.158C26.0477 21.786 26.2817 21.252 26.2817 20.556C26.2817 19.944 26.1017 19.476 25.7417 19.152C25.3937 18.828 24.9137 18.666 24.3017 18.666C23.8457 18.666 23.4257 18.744 23.0417 18.9C22.6577 19.044 22.2797 19.266 21.9077 19.566L20.2337 18.648V12.15H28.2797Z`,
          }),
        ],
      });
}
function Hs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M5.73583 3C3.6326 3 1.88863 4.6288 1.74515 6.72713L0.292161 27.9771C0.134133 30.2883 1.96629 32.25 4.28284 32.25H31.7172C34.0337 32.25 35.8659 30.2883 35.7078 27.9771L34.2548 6.72713C34.1114 4.6288 32.3674 3 30.2642 3H5.73583ZM14.8236 24.0625H23.2836V21.6865H17.4696V11.4625H14.8236V24.0625Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M1.74515 6.72713C1.88863 4.6288 3.6326 3 5.73584 3H30.2642C32.3674 3 34.1114 4.6288 34.2548 6.72713L35.7078 27.9771C35.8659 30.2883 34.0337 32.25 31.7172 32.25H4.28284C1.96629 32.25 0.134134 30.2883 0.292162 27.9771L1.74515 6.72713Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.2836 24.0625H14.8236V11.4625H17.4696V21.6865H23.2836V24.0625Z`,
          }),
        ],
      });
}
function Us({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M6.6282 8C4.52356 8 2.77893 9.6309 2.63727 11.7308L1.28806 31.7308C1.13224 34.0406 2.96389 36 5.27899 36H30.7211C33.0362 36 34.8679 34.0406 34.7121 31.7308L33.3629 11.7308C33.2212 9.63091 31.4766 8 29.3719 8H6.6282ZM14.8237 28.0625H23.2837V25.6865H17.4697V15.4625H14.8237V28.0625Z`,
          }),
          (0, B.jsx)(`path`, {
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M2.63721 11.7308C2.77887 9.6309 4.5235 8 6.62814 8H29.3719C31.4765 8 33.2211 9.63091 33.3628 11.7308L34.712 31.7308C34.8678 34.0406 33.0362 36 30.7211 36H5.27893C2.96382 36 1.13218 34.0406 1.288 31.7308L2.63721 11.7308Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.2836 28.0625H14.8236V15.4625H17.4696V25.6865H23.2836V28.0625Z`,
          }),
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      });
}
function Ws({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M5.7359 3C3.63266 3 1.88869 4.6288 1.74521 6.72713L0.292222 27.9771C0.134194 30.2883 1.96635 32.25 4.2829 32.25H31.7172C34.0338 32.25 35.8659 30.2883 35.7079 27.9771L34.2549 6.72713C34.1114 4.6288 32.3675 3 30.2642 3H5.7359ZM20.7179 24.0625H23.6519L20.6819 19.2925C21.4499 18.9565 22.0439 18.4645 22.4639 17.8165C22.8959 17.1685 23.1119 16.3585 23.1119 15.3865C23.1119 14.1505 22.7039 13.1905 21.8879 12.5065C21.0719 11.8105 19.7999 11.4625 18.0719 11.4625H13.3559V24.0625H16.0019V19.8145H17.8739H18.1799L20.7179 24.0625ZM16.0019 17.5465V13.7125H17.9099C18.7379 13.7125 19.3379 13.8685 19.7099 14.1805C20.0939 14.4805 20.2859 14.9365 20.2859 15.5485C20.2859 16.1725 20.0879 16.6645 19.6919 17.0245C19.3079 17.3725 18.7679 17.5465 18.0719 17.5465H16.0019Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M1.74515 6.72713C1.88863 4.6288 3.6326 3 5.73584 3H30.2642C32.3674 3 34.1114 4.6288 34.2548 6.72713L35.7078 27.9771C35.8659 30.2883 34.0337 32.25 31.7172 32.25H4.28284C1.96629 32.25 0.134134 30.2883 0.292162 27.9771L1.74515 6.72713Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.6518 24.0625H20.7178L18.1798 19.8145H17.8738H16.0018V24.0625H13.3558V11.4625H18.0718C19.7998 11.4625 21.0718 11.8105 21.8878 12.5065C22.7038 13.1905 23.1118 14.1505 23.1118 15.3865C23.1118 16.3585 22.8958 17.1685 22.4638 17.8165C22.0438 18.4645 21.4498 18.9565 20.6818 19.2925L23.6518 24.0625ZM16.0018 13.7125V17.5465H18.0718C18.7678 17.5465 19.3078 17.3725 19.6918 17.0245C20.0878 16.6645 20.2858 16.1725 20.2858 15.5485C20.2858 14.9365 20.0938 14.4805 19.7098 14.1805C19.3378 13.8685 18.7378 13.7125 17.9098 13.7125H16.0018Z`,
          }),
        ],
      });
}
function Gs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M6.6282 8C4.52356 8 2.77893 9.6309 2.63727 11.7308L1.28806 31.7308C1.13224 34.0406 2.96389 36 5.27899 36H30.7211C33.0362 36 34.8679 34.0406 34.7121 31.7308L33.3629 11.7308C33.2212 9.63091 31.4766 8 29.3719 8H6.6282ZM20.7179 28.0625H23.6519L20.6819 23.2925C21.4499 22.9565 22.0439 22.4645 22.4639 21.8165C22.8959 21.1685 23.1119 20.3585 23.1119 19.3865C23.1119 18.1505 22.7039 17.1905 21.8879 16.5065C21.0719 15.8105 19.7999 15.4625 18.0719 15.4625H13.3559V28.0625H16.0019V23.8145H17.8739H18.1799L20.7179 28.0625ZM16.0019 21.5465V17.7125H17.9099C18.7379 17.7125 19.3379 17.8685 19.7099 18.1805C20.0939 18.4805 20.2859 18.9365 20.2859 19.5485C20.2859 20.1725 20.0879 20.6645 19.6919 21.0245C19.3079 21.3725 18.7679 21.5465 18.0719 21.5465H16.0019Z`,
          }),
          (0, B.jsx)(`path`, {
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M2.63721 11.7308C2.77887 9.6309 4.5235 8 6.62814 8H29.3719C31.4765 8 33.2211 9.63091 33.3628 11.7308L34.712 31.7308C34.8678 34.0406 33.0362 36 30.7211 36H5.27893C2.96382 36 1.13218 34.0406 1.288 31.7308L2.63721 11.7308Z`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.6518 28.0625H20.7178L18.1798 23.8145H17.8738H16.0018V28.0625H13.3558V15.4625H18.0718C19.7998 15.4625 21.0718 15.8105 21.8878 16.5065C22.7038 17.1905 23.1118 18.1505 23.1118 19.3865C23.1118 20.3585 22.8958 21.1685 22.4638 21.8165C22.0438 22.4645 21.4498 22.9565 20.6818 23.2925L23.6518 28.0625ZM16.0018 17.7125V21.5465H18.0718C18.7678 21.5465 19.3078 21.3725 19.6918 21.0245C20.0878 20.6645 20.2858 20.1725 20.2858 19.5485C20.2858 18.9365 20.0938 18.4805 19.7098 18.1805C19.3378 17.8685 18.7378 17.7125 17.9098 17.7125H16.0018Z`,
          }),
          (0, B.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      });
}
function Ks({ bIsKnockout: e, ...t }) {
  return e
    ? (0, B.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, B.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.4999 10.8201C19.7519 10.4974 18.8719 10.3361 17.8599 10.3361C16.9799 10.3361 16.1219 10.4681 15.2859 10.7321C14.4499 10.9961 13.7166 11.3407 13.0859 11.7661L14.0759 13.9881C15.0586 13.2547 16.1073 12.8881 17.2219 12.8881C17.9699 12.8881 18.5493 13.0494 18.9599 13.3721C19.3853 13.6801 19.5979 14.1201 19.5979 14.6921C19.5979 15.1027 19.4953 15.4474 19.2899 15.7261C19.0846 16.0047 18.7693 16.3201 18.3439 16.6721C17.8893 17.0681 17.5153 17.4347 17.2219 17.7721C16.9286 18.1094 16.6793 18.5641 16.4739 19.1361C16.2686 19.7081 16.1659 20.4047 16.1659 21.2261H18.8499C18.8499 20.6541 18.9453 20.1554 19.1359 19.7301C19.3266 19.2901 19.5539 18.9234 19.8179 18.6301C20.0966 18.3221 20.4633 17.9701 20.9179 17.5741C21.3579 17.1781 21.7026 16.8407 21.9519 16.5621C22.2159 16.2834 22.4359 15.9461 22.6119 15.5501C22.7879 15.1541 22.8759 14.6994 22.8759 14.1861C22.8759 13.4234 22.6706 12.7561 22.2599 12.1841C21.8493 11.5974 21.2626 11.1427 20.4999 10.8201ZM18.7839 23.2721C18.4759 22.9494 18.0653 22.7881 17.5519 22.7881C17.0386 22.7881 16.6279 22.9494 16.3199 23.2721C16.0119 23.5801 15.8579 23.9907 15.8579 24.5041C15.8579 25.0467 16.0119 25.4794 16.3199 25.8021C16.6279 26.1101 17.0386 26.2641 17.5519 26.2641C18.0653 26.2641 18.4759 26.1101 18.7839 25.8021C19.0919 25.4794 19.2459 25.0467 19.2459 24.5041C19.2459 23.9907 19.0919 23.5801 18.7839 23.2721Z`,
        }),
      })
    : (0, B.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, B.jsx)(`circle`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, B.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.8599 10.3361C18.8719 10.3361 19.7519 10.4974 20.4999 10.8201C21.2626 11.1427 21.8493 11.5974 22.2599 12.1841C22.6706 12.7561 22.8759 13.4234 22.8759 14.1861C22.8759 14.6994 22.7879 15.1541 22.6119 15.5501C22.4359 15.9461 22.2159 16.2834 21.9519 16.5621C21.7026 16.8407 21.3579 17.1781 20.9179 17.5741C20.4633 17.9701 20.0966 18.3221 19.8179 18.6301C19.5539 18.9234 19.3266 19.2901 19.1359 19.7301C18.9453 20.1554 18.8499 20.6541 18.8499 21.2261H16.1659C16.1659 20.4047 16.2686 19.7081 16.4739 19.1361C16.6793 18.5641 16.9286 18.1094 17.2219 17.7721C17.5153 17.4347 17.8893 17.0681 18.3439 16.6721C18.7693 16.3201 19.0846 16.0047 19.2899 15.7261C19.4953 15.4474 19.5979 15.1027 19.5979 14.6921C19.5979 14.1201 19.3853 13.6801 18.9599 13.3721C18.5493 13.0494 17.9699 12.8881 17.2219 12.8881C16.1073 12.8881 15.0586 13.2547 14.0759 13.9881L13.0859 11.7661C13.7166 11.3407 14.4499 10.9961 15.2859 10.7321C16.1219 10.4681 16.9799 10.3361 17.8599 10.3361ZM17.5519 22.7881C18.0653 22.7881 18.4759 22.9494 18.7839 23.2721C19.0919 23.5801 19.2459 23.9907 19.2459 24.5041C19.2459 25.0467 19.0919 25.4794 18.7839 25.8021C18.4759 26.1101 18.0653 26.2641 17.5519 26.2641C17.0386 26.2641 16.6279 26.1101 16.3199 25.8021C16.0119 25.4794 15.8579 25.0467 15.8579 24.5041C15.8579 23.9907 16.0119 23.5801 16.3199 23.2721C16.6279 22.9494 17.0386 22.7881 17.5519 22.7881Z`,
          }),
        ],
      });
}
var qs = `_5YxPcG58GcM-`,
  Js = `AYShSUpazpQ-`,
  Ys = `HjTriTNInOs-`;
function Xs(e) {
  let {
      tabs: t,
      bDisableRouting: n,
      startingTab: i,
      controlledTab: a,
      OnTabChanged: o,
      classNameCtn: c,
      classNameTab: l,
      focusRingHasBorderRadius: u,
      classNameTabContent: d,
      preferredFocus: f,
      bVerticalTabs: p,
      bSticky: m,
      bChecklistMode: h,
    } = e,
    g = s(),
    _ = r(),
    [v, y] = (0, z.useState)(
      () => i || (!n && A(g, `tab`) ? (A(g, `tab`) ?? ``) : ``),
    );
  (0, z.useEffect)(() => {
    if (!e.bDisableRouting && g) {
      let e = A(g, `tab`);
      e && y(e);
    }
  }, [g, g.key, e.bDisableRouting, y]);
  let b = z.useCallback(
      (e) => {
        (y(e.key),
          n || k(_, `tab`, e.key),
          o?.(e.key),
          e.onClick && e.onClick(e));
      },
      [n, _, o],
    ),
    x = t.filter((e) => !e.hidden);
  if (!x.length) return null;
  let S = a ?? v,
    C = x.find((e) => e.key === S) || x[0],
    w = f ? (i ?? x[0].key) : void 0,
    T = (0, B.jsxs)(B.Fragment, {
      children: [
        (0, B.jsx)(de, {
          className: N(
            qs,
            p && `iBLrw-7gAIM-`,
            h && `dLhmGXBhTkM-`,
            m && `ShXw34CXvuE-`,
            c,
          ),
          navEntryPreferPosition: f ? _n.PREFERRED_CHILD : _n.FIRST,
          children: x.map((e, t) =>
            (0, B.jsx)(
              Zs,
              {
                tab: e,
                OnTabClick: b,
                classNameTab: l,
                focusRingHasBorderRadius: u,
                active: e.key === C.key,
                preferredFocus: w === e.key,
              },
              e.key,
            ),
          ),
        }),
        C && (0, B.jsx)(de, { className: d, children: C.contents }),
      ],
    });
  return p ? (0, B.jsx)(de, { className: N(Ys), children: T }) : T;
}
function Zs(e) {
  let {
    tab: t,
    OnTabClick: n,
    classNameTab: r,
    focusRingHasBorderRadius: i,
    active: a,
    preferredFocus: o,
  } = e;
  return (0, B.jsx)(zt, {
    condition: !!(t.statusToolTip || t.tooltip),
    wrap: (e) =>
      (0, B.jsx)(Kn, {
        toolTipContent: t.statusToolTip || t.tooltip,
        children: e,
      }),
    children: (0, B.jsxs)(de, {
      className: N(Js, a && `Tw-TchJW1T8-`, a && `ActiveTab`, r),
      onActivate: () => n(t),
      preferredFocus: o,
      focusRingHasBorderRadius: i,
      children: [
        !!t.vo_warning &&
          (0, B.jsx)(Kn, {
            toolTipContent: t.vo_warning,
            children: (0, B.jsx)(`div`, {
              className: `OpvmjD098-U-`,
              children: I(`#EventEditor_VOWarning`),
            }),
          }),
        t.status,
        t.name,
      ],
    }),
  });
}
var Qs = class e extends vr.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || Ct(e.M()),
        vr.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: ue.readUint32, bw: En.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= qt(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return bn(e.M(), t, n);
    }
    static fromObject(t) {
      return Qe(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new vr.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Mt(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new vr.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      jn(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new vr.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Request`;
    }
  },
  $s = class e extends vr.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.frame_rates || Ct(e.M()),
        vr.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { frame_rates: { n: 1, c: ec, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= qt(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return bn(e.M(), t, n);
    }
    static fromObject(t) {
      return Qe(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new vr.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Mt(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new vr.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      jn(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new vr.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Response`;
    }
  },
  ec = class e extends vr.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clusterid || Ct(e.M()),
        vr.Message.initialize(this, t, 0, -1, [8], null));
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
              br: ue.readUint64String,
              bw: En.writeUint64String,
            },
            report_days: { n: 4, br: ue.readUint32, bw: En.writeUint32 },
            report_count: {
              n: 5,
              br: ue.readUint64String,
              bw: En.writeUint64String,
            },
            mean_frame_rate: { n: 6, br: ue.readDouble, bw: En.writeDouble },
            frame_rate_histogram: {
              n: 8,
              r: !0,
              q: !0,
              br: ue.readDouble,
              pbr: ue.readPackedDouble,
              bw: En.writeRepeatedDouble,
            },
            histogram_report_count: {
              n: 9,
              br: ue.readUint64String,
              bw: En.writeUint64String,
            },
            last_updated: { n: 10, br: ue.readUint32, bw: En.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= qt(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return bn(e.M(), t, n);
    }
    static fromObject(t) {
      return Qe(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new vr.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Mt(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new vr.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      jn(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new vr.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Response_FrameRate`;
    }
  },
  tc;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `GamePerformanceStats.GetGameFrameRateStats#1`,
      nn(Qs, t, n),
      $s,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`, `store`, `community`],
      },
    );
  }
  e.GetGameFrameRateStats = t;
})((tc ||= {}));
function nc(e) {
  let t = Rt(),
    { data: n } = h({
      queryKey: [`performancestats_` + e],
      queryFn: async () => {
        if (!e) return null;
        let n = on.Init(Qs);
        n.Body().set_appid(e);
        let r = await tc.GetGameFrameRateStats(t, n);
        return r.BSuccess() ? r.Body().toObject() : null;
      },
    });
  return n ?? void 0;
}
function rc(e, t = !0) {
  return h({
    queryKey: [`GetControllersUsed`],
    queryFn: async () => {
      let e;
      try {
        let t = `${L.STORE_BASE_URL}account/ajaxgetcontrollersused`,
          n = await yr.default.get(t, { withCredentials: !0 });
        if (n?.status === 200 && n?.data?.success === 1) return n.data.data;
        e = Ne(n);
      } catch (t) {
        e = Ne(t);
      }
      return (console.error(`usePlayerHardwareUsed failed:`, e), null);
    },
    select: e,
    enabled: t && !!Tn.accountid,
  });
}
function ic(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = ic(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function W() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = ic(e)) && (r && (r += ` `), (r += t));
  return r;
}
var ac =
  `dangerouslySetInnerHTML.onCopy.onCopyCapture.onCut.onCutCapture.onPaste.onPasteCapture.onCompositionEnd.onCompositionEndCapture.onCompositionStart.onCompositionStartCapture.onCompositionUpdate.onCompositionUpdateCapture.onFocus.onFocusCapture.onBlur.onBlurCapture.onChange.onChangeCapture.onBeforeInput.onBeforeInputCapture.onInput.onInputCapture.onReset.onResetCapture.onSubmit.onSubmitCapture.onInvalid.onInvalidCapture.onLoad.onLoadCapture.onError.onErrorCapture.onKeyDown.onKeyDownCapture.onKeyPress.onKeyPressCapture.onKeyUp.onKeyUpCapture.onAbort.onAbortCapture.onCanPlay.onCanPlayCapture.onCanPlayThrough.onCanPlayThroughCapture.onDurationChange.onDurationChangeCapture.onEmptied.onEmptiedCapture.onEncrypted.onEncryptedCapture.onEnded.onEndedCapture.onLoadedData.onLoadedDataCapture.onLoadedMetadata.onLoadedMetadataCapture.onLoadStart.onLoadStartCapture.onPause.onPauseCapture.onPlay.onPlayCapture.onPlaying.onPlayingCapture.onProgress.onProgressCapture.onRateChange.onRateChangeCapture.onSeeked.onSeekedCapture.onSeeking.onSeekingCapture.onStalled.onStalledCapture.onSuspend.onSuspendCapture.onTimeUpdate.onTimeUpdateCapture.onVolumeChange.onVolumeChangeCapture.onWaiting.onWaitingCapture.onAuxClick.onAuxClickCapture.onClick.onClickCapture.onContextMenu.onContextMenuCapture.onDoubleClick.onDoubleClickCapture.onDrag.onDragCapture.onDragEnd.onDragEndCapture.onDragEnter.onDragEnterCapture.onDragExit.onDragExitCapture.onDragLeave.onDragLeaveCapture.onDragOver.onDragOverCapture.onDragStart.onDragStartCapture.onDrop.onDropCapture.onMouseDown.onMouseDownCapture.onMouseEnter.onMouseLeave.onMouseMove.onMouseMoveCapture.onMouseOut.onMouseOutCapture.onMouseOver.onMouseOverCapture.onMouseUp.onMouseUpCapture.onSelect.onSelectCapture.onTouchCancel.onTouchCancelCapture.onTouchEnd.onTouchEndCapture.onTouchMove.onTouchMoveCapture.onTouchStart.onTouchStartCapture.onPointerDown.onPointerDownCapture.onPointerMove.onPointerMoveCapture.onPointerUp.onPointerUpCapture.onPointerCancel.onPointerCancelCapture.onPointerEnter.onPointerEnterCapture.onPointerLeave.onPointerLeaveCapture.onPointerOver.onPointerOverCapture.onPointerOut.onPointerOutCapture.onGotPointerCapture.onGotPointerCaptureCapture.onLostPointerCapture.onLostPointerCaptureCapture.onScroll.onScrollCapture.onWheel.onWheelCapture.onAnimationStart.onAnimationStartCapture.onAnimationEnd.onAnimationEndCapture.onAnimationIteration.onAnimationIterationCapture.onTransitionEnd.onTransitionEndCapture`.split(
    `.`,
  );
function oc(e) {
  return typeof e == `string` && ac.includes(e);
}
var sc =
  `aria-activedescendant.aria-atomic.aria-autocomplete.aria-busy.aria-checked.aria-colcount.aria-colindex.aria-colspan.aria-controls.aria-current.aria-describedby.aria-details.aria-disabled.aria-errormessage.aria-expanded.aria-flowto.aria-haspopup.aria-hidden.aria-invalid.aria-keyshortcuts.aria-label.aria-labelledby.aria-level.aria-live.aria-modal.aria-multiline.aria-multiselectable.aria-orientation.aria-owns.aria-placeholder.aria-posinset.aria-pressed.aria-readonly.aria-relevant.aria-required.aria-roledescription.aria-rowcount.aria-rowindex.aria-rowspan.aria-selected.aria-setsize.aria-sort.aria-valuemax.aria-valuemin.aria-valuenow.aria-valuetext.className.color.height.id.lang.max.media.method.min.name.style.target.width.role.tabIndex.accentHeight.accumulate.additive.alignmentBaseline.allowReorder.alphabetic.amplitude.arabicForm.ascent.attributeName.attributeType.autoReverse.azimuth.baseFrequency.baselineShift.baseProfile.bbox.begin.bias.by.calcMode.capHeight.clip.clipPath.clipPathUnits.clipRule.colorInterpolation.colorInterpolationFilters.colorProfile.colorRendering.contentScriptType.contentStyleType.cursor.cx.cy.d.decelerate.descent.diffuseConstant.direction.display.divisor.dominantBaseline.dur.dx.dy.edgeMode.elevation.enableBackground.end.exponent.externalResourcesRequired.fill.fillOpacity.fillRule.filter.filterRes.filterUnits.floodColor.floodOpacity.focusable.fontFamily.fontSize.fontSizeAdjust.fontStretch.fontStyle.fontVariant.fontWeight.format.from.fx.fy.g1.g2.glyphName.glyphOrientationHorizontal.glyphOrientationVertical.glyphRef.gradientTransform.gradientUnits.hanging.horizAdvX.horizOriginX.href.ideographic.imageRendering.in2.in.intercept.k1.k2.k3.k4.k.kernelMatrix.kernelUnitLength.kerning.keyPoints.keySplines.keyTimes.lengthAdjust.letterSpacing.lightingColor.limitingConeAngle.local.markerEnd.markerHeight.markerMid.markerStart.markerUnits.markerWidth.mask.maskContentUnits.maskUnits.mathematical.mode.numOctaves.offset.opacity.operator.order.orient.orientation.origin.overflow.overlinePosition.overlineThickness.paintOrder.panose1.pathLength.patternContentUnits.patternTransform.patternUnits.pointerEvents.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.r.radius.refX.refY.renderingIntent.repeatCount.repeatDur.requiredExtensions.requiredFeatures.restart.result.rotate.rx.ry.seed.shapeRendering.slope.spacing.specularConstant.specularExponent.speed.spreadMethod.startOffset.stdDeviation.stemh.stemv.stitchTiles.stopColor.stopOpacity.strikethroughPosition.strikethroughThickness.string.stroke.strokeDasharray.strokeDashoffset.strokeLinecap.strokeLinejoin.strokeMiterlimit.strokeOpacity.strokeWidth.surfaceScale.systemLanguage.tableValues.targetX.targetY.textAnchor.textDecoration.textLength.textRendering.to.transform.u1.u2.underlinePosition.underlineThickness.unicode.unicodeBidi.unicodeRange.unitsPerEm.vAlphabetic.values.vectorEffect.version.vertAdvY.vertOriginX.vertOriginY.vHanging.vIdeographic.viewTarget.visibility.vMathematical.widths.wordSpacing.writingMode.x1.x2.x.xChannelSelector.xHeight.xlinkActuate.xlinkArcrole.xlinkHref.xlinkRole.xlinkShow.xlinkTitle.xlinkType.xmlBase.xmlLang.xmlns.xmlnsXlink.xmlSpace.y1.y2.y.yChannelSelector.z.zoomAndPan.ref.key.angle`.split(
    `.`,
  );
function cc(e) {
  return typeof e == `string` && sc.includes(e);
}
function lc(e) {
  return typeof e == `string` && e.startsWith(`data-`);
}
function uc(e) {
  var t = Object.entries(e).filter((e) => {
    var [t] = e;
    return cc(t) || lc(t);
  });
  return Object.fromEntries(t);
}
function dc(e) {
  if (e == null) return null;
  if (
    (0, z.isValidElement)(e) &&
    typeof e.props == `object` &&
    e.props !== null
  ) {
    var t = e.props;
    return uc(t);
  }
  return typeof e == `object` && !Array.isArray(e) ? uc(e) : null;
}
function fc(e) {
  var t = Object.entries(e).filter((e) => {
    var [t] = e;
    return cc(t) || lc(t) || oc(t);
  });
  return Object.fromEntries(t);
}
function pc(e) {
  return e == null
    ? null
    : (0, z.isValidElement)(e)
      ? fc(e.props)
      : typeof e == `object` && !Array.isArray(e)
        ? fc(e)
        : null;
}
var mc = [
  `children`,
  `width`,
  `height`,
  `viewBox`,
  `className`,
  `style`,
  `title`,
  `desc`,
];
function hc() {
  return (
    (hc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hc.apply(null, arguments)
  );
}
function gc(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = _c(e, t);
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
function _c(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var vc = (0, z.forwardRef)((e, t) => {
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
      u = gc(e, mc),
      d = a || { width: r, height: i, x: 0, y: 0 },
      f = W(`recharts-surface`, o);
    return z.createElement(
      `svg`,
      hc({}, fc(u), {
        className: f,
        width: r,
        height: i,
        style: s,
        viewBox: `${d.x} ${d.y} ${d.width} ${d.height}`,
        ref: t,
      }),
      z.createElement(`title`, null, c),
      z.createElement(`desc`, null, l),
      n,
    );
  }),
  yc = [`children`, `className`];
function bc() {
  return (
    (bc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bc.apply(null, arguments)
  );
}
function xc(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Sc(e, t);
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
function Sc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Cc = z.forwardRef((e, t) => {
    var { children: n, className: r } = e,
      i = xc(e, yc),
      a = W(`recharts-layer`, r);
    return z.createElement(`g`, bc({ className: a }, fc(i), { ref: t }), n);
  }),
  wc = (0, z.createContext)(null),
  Tc = () => (0, z.useContext)(wc);
function G(e) {
  return function () {
    return e;
  };
}
var Ec = Math.cos,
  Dc = Math.sin,
  Oc = Math.sqrt,
  kc = Math.PI;
kc / 2;
var Ac = 2 * kc,
  jc = Math.PI,
  Mc = 2 * jc,
  Nc = 1e-6,
  Pc = Mc - Nc;
function Fc(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function Ic(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
  if (t > 15) return Fc;
  let n = 10 ** t;
  return function (e) {
    this._ += e[0];
    for (let t = 1, r = e.length; t < r; ++t)
      this._ += Math.round(arguments[t] * n) / n + e[t];
  };
}
var Lc = class {
  constructor(e) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ``),
      (this._append = e == null ? Fc : Ic(e)));
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
    else if (d > Nc) {
      if (!(Math.abs(u * s - c * l) > Nc) || !i)
        this._append`L${(this._x1 = e)},${(this._y1 = t)}`;
      else {
        let f = n - a,
          p = r - o,
          m = s * s + c * c,
          h = f * f + p * p,
          g = Math.sqrt(m),
          _ = Math.sqrt(d),
          v = i * Math.tan((jc - Math.acos((m + d - h) / (2 * g * _))) / 2),
          y = v / _,
          b = v / g;
        (Math.abs(y - 1) > Nc && this._append`L${e + y * l},${t + y * u}`,
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
      : (Math.abs(this._x1 - c) > Nc || Math.abs(this._y1 - l) > Nc) &&
        this._append`L${c},${l}`,
      n &&
        (d < 0 && (d = (d % Mc) + Mc),
        d > Pc
          ? this._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${(this._x1 = c)},${(this._y1 = l)}`
          : d > Nc &&
            this._append`A${n},${n},0,${+(d >= jc)},${u},${(this._x1 = e + n * Math.cos(i))},${(this._y1 = t + n * Math.sin(i))}`));
  }
  rect(e, t, n, r) {
    this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}h${(n = +n)}v${+r}h${-n}Z`;
  }
  toString() {
    return this._;
  }
};
Lc.prototype;
function Rc(e) {
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
    () => new Lc(t)
  );
}
Array.prototype.slice;
function zc(e) {
  return typeof e == `object` && `length` in e ? e : Array.from(e);
}
function Bc(e) {
  this._context = e;
}
Bc.prototype = {
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
function Vc(e) {
  return new Bc(e);
}
function Hc(e) {
  return e[0];
}
function Uc(e) {
  return e[1];
}
function Wc(e, t) {
  var n = G(!0),
    r = null,
    i = Vc,
    a = null,
    o = Rc(s);
  ((e = typeof e == `function` ? e : e === void 0 ? Hc : G(e)),
    (t = typeof t == `function` ? t : t === void 0 ? Uc : G(t)));
  function s(s) {
    var c,
      l = (s = zc(s)).length,
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
        ? ((e = typeof t == `function` ? t : G(+t)), s)
        : e;
    }),
    (s.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : G(+e)), s)
        : t;
    }),
    (s.defined = function (e) {
      return arguments.length
        ? ((n = typeof e == `function` ? e : G(!!e)), s)
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
function Gc(e, t, n) {
  var r = null,
    i = G(!0),
    a = null,
    o = Vc,
    s = null,
    c = Rc(l);
  ((e = typeof e == `function` ? e : e === void 0 ? Hc : G(+e)),
    (t = typeof t == `function` ? t : G(t === void 0 ? 0 : +t)),
    (n = typeof n == `function` ? n : n === void 0 ? Uc : G(+n)));
  function l(l) {
    var u,
      d,
      f,
      p = (l = zc(l)).length,
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
    return Wc().defined(i).curve(o).context(a);
  }
  return (
    (l.x = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : G(+t)), (r = null), l)
        : e;
    }),
    (l.x0 = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : G(+t)), l)
        : e;
    }),
    (l.x1 = function (e) {
      return arguments.length
        ? ((r = e == null ? null : typeof e == `function` ? e : G(+e)), l)
        : r;
    }),
    (l.y = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : G(+e)), (n = null), l)
        : t;
    }),
    (l.y0 = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : G(+e)), l)
        : t;
    }),
    (l.y1 = function (e) {
      return arguments.length
        ? ((n = e == null ? null : typeof e == `function` ? e : G(+e)), l)
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
        ? ((i = typeof e == `function` ? e : G(!!e)), l)
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
var Kc = class {
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
function qc(e) {
  return new Kc(e, !0);
}
function Jc(e) {
  return new Kc(e, !1);
}
var Yc = {
    draw(e, t) {
      let n = Oc(t / kc);
      (e.moveTo(n, 0), e.arc(0, 0, n, 0, Ac));
    },
  },
  Xc = {
    draw(e, t) {
      let n = Oc(t / 5) / 2;
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
  Zc = Oc(1 / 3),
  Qc = Zc * 2,
  $c = {
    draw(e, t) {
      let n = Oc(t / Qc),
        r = n * Zc;
      (e.moveTo(0, -n),
        e.lineTo(r, 0),
        e.lineTo(0, n),
        e.lineTo(-r, 0),
        e.closePath());
    },
  },
  el = {
    draw(e, t) {
      let n = Oc(t),
        r = -n / 2;
      e.rect(r, r, n, n);
    },
  },
  tl = 0.8908130915292852,
  nl = Dc(kc / 10) / Dc((7 * kc) / 10),
  rl = Dc(Ac / 10) * nl,
  il = -Ec(Ac / 10) * nl,
  al = {
    draw(e, t) {
      let n = Oc(t * tl),
        r = rl * n,
        i = il * n;
      (e.moveTo(0, -n), e.lineTo(r, i));
      for (let t = 1; t < 5; ++t) {
        let a = (Ac * t) / 5,
          o = Ec(a),
          s = Dc(a);
        (e.lineTo(s * n, -o * n), e.lineTo(o * r - s * i, s * r + o * i));
      }
      e.closePath();
    },
  },
  ol = Oc(3),
  sl = {
    draw(e, t) {
      let n = -Oc(t / (ol * 3));
      (e.moveTo(0, n * 2),
        e.lineTo(-ol * n, -n),
        e.lineTo(ol * n, -n),
        e.closePath());
    },
  },
  cl = -0.5,
  ll = Oc(3) / 2,
  ul = 1 / Oc(12),
  dl = (ul / 2 + 1) * 3,
  fl = {
    draw(e, t) {
      let n = Oc(t / dl),
        r = n / 2,
        i = n * ul,
        a = r,
        o = n * ul + n,
        s = -a,
        c = o;
      (e.moveTo(r, i),
        e.lineTo(a, o),
        e.lineTo(s, c),
        e.lineTo(cl * r - ll * i, ll * r + cl * i),
        e.lineTo(cl * a - ll * o, ll * a + cl * o),
        e.lineTo(cl * s - ll * c, ll * s + cl * c),
        e.lineTo(cl * r + ll * i, cl * i - ll * r),
        e.lineTo(cl * a + ll * o, cl * o - ll * a),
        e.lineTo(cl * s + ll * c, cl * c - ll * s),
        e.closePath());
    },
  };
function pl(e, t) {
  let n = null,
    r = Rc(i);
  ((e = typeof e == `function` ? e : G(e || Yc)),
    (t = typeof t == `function` ? t : G(t === void 0 ? 64 : +t)));
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
        ? ((e = typeof t == `function` ? t : G(t)), i)
        : e;
    }),
    (i.size = function (e) {
      return arguments.length
        ? ((t = typeof e == `function` ? e : G(+e)), i)
        : t;
    }),
    (i.context = function (e) {
      return arguments.length ? ((n = e ?? null), i) : n;
    }),
    i
  );
}
function ml() {}
function hl(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6,
  );
}
function gl(e) {
  this._context = e;
}
gl.prototype = {
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
        hl(this, this._x1, this._y1);
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
        hl(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function _l(e) {
  return new gl(e);
}
function vl(e) {
  this._context = e;
}
vl.prototype = {
  areaStart: ml,
  areaEnd: ml,
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
        hl(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function yl(e) {
  return new vl(e);
}
function bl(e) {
  this._context = e;
}
bl.prototype = {
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
        hl(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function xl(e) {
  return new bl(e);
}
function Sl(e) {
  this._context = e;
}
Sl.prototype = {
  areaStart: ml,
  areaEnd: ml,
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
function Cl(e) {
  return new Sl(e);
}
function wl(e) {
  return e < 0 ? -1 : 1;
}
function Tl(e, t, n) {
  var r = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (r || (i < 0 && -0)),
    o = (n - e._y1) / (i || (r < 0 && -0)),
    s = (a * i + o * r) / (r + i);
  return (
    (wl(a) + wl(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0
  );
}
function El(e, t) {
  var n = e._x1 - e._x0;
  return n ? ((3 * (e._y1 - e._y0)) / n - t) / 2 : t;
}
function Dl(e, t, n) {
  var r = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    s = (a - r) / 3;
  e._context.bezierCurveTo(r + s, i + s * t, a - s, o - s * n, a, o);
}
function Ol(e) {
  this._context = e;
}
Ol.prototype = {
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
        Dl(this, this._t0, El(this, this._t0));
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
          ((this._point = 3), Dl(this, El(this, (n = Tl(this, e, t))), n));
          break;
        default:
          Dl(this, this._t0, (n = Tl(this, e, t)));
      }
      ((this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = n));
    }
  },
};
function kl(e) {
  this._context = new Al(e);
}
(kl.prototype = Object.create(Ol.prototype)).point = function (e, t) {
  Ol.prototype.point.call(this, t, e);
};
function Al(e) {
  this._context = e;
}
Al.prototype = {
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
function jl(e) {
  return new Ol(e);
}
function Ml(e) {
  return new kl(e);
}
function Nl(e) {
  this._context = e;
}
Nl.prototype = {
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
        for (var r = Pl(e), i = Pl(t), a = 0, o = 1; o < n; ++a, ++o)
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
function Pl(e) {
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
function Fl(e) {
  return new Nl(e);
}
function Il(e, t) {
  ((this._context = e), (this._t = t));
}
Il.prototype = {
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
function Ll(e) {
  return new Il(e, 0.5);
}
function Rl(e) {
  return new Il(e, 0);
}
function zl(e) {
  return new Il(e, 1);
}
function Bl(e, t) {
  if ((o = e.length) > 1)
    for (var n = 1, r, i, a = e[t[0]], o, s = a.length; n < o; ++n)
      for (i = a, a = e[t[n]], r = 0; r < s; ++r)
        a[r][1] += a[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
}
function Vl(e) {
  for (var t = e.length, n = Array(t); --t >= 0;) n[t] = t;
  return n;
}
function Hl(e, t) {
  return e[t];
}
function Ul(e) {
  let t = [];
  return ((t.key = e), t);
}
function Wl() {
  var e = G([]),
    t = Vl,
    n = Bl,
    r = Hl;
  function i(i) {
    var a = Array.from(e.apply(this, arguments), Ul),
      o,
      s = a.length,
      c = -1,
      l;
    for (let e of i)
      for (o = 0, ++c; o < s; ++o)
        (a[o][c] = [0, +r(e, a[o].key, c, i)]).data = e;
    for (o = 0, l = zc(t(a)); o < s; ++o) a[l[o]].index = o;
    return (n(a, l), a);
  }
  return (
    (i.keys = function (t) {
      return arguments.length
        ? ((e = typeof t == `function` ? t : G(Array.from(t))), i)
        : e;
    }),
    (i.value = function (e) {
      return arguments.length
        ? ((r = typeof e == `function` ? e : G(+e)), i)
        : r;
    }),
    (i.order = function (e) {
      return arguments.length
        ? ((t = e == null ? Vl : typeof e == `function` ? e : G(Array.from(e))),
          i)
        : t;
    }),
    (i.offset = function (e) {
      return arguments.length ? ((n = e ?? Bl), i) : n;
    }),
    i
  );
}
function Gl(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = n = 0; n < r; ++n) o += e[n][i][1] || 0;
      if (o) for (n = 0; n < r; ++n) e[n][i][1] /= o;
    }
    Bl(e, t);
  }
}
function Kl(e, t) {
  if ((i = e.length) > 0) {
    for (var n = 0, r = e[t[0]], i, a = r.length; n < a; ++n) {
      for (var o = 0, s = 0; o < i; ++o) s += e[o][n][1] || 0;
      r[n][1] += r[n][0] = -s / 2;
    }
    Bl(e, t);
  }
}
function ql(e, t) {
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
    ((i[r - 1][1] += i[r - 1][0] = n), Bl(e, t));
  }
}
var Jl = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e === `__proto__`;
    }
    e.isUnsafeProperty = t;
  }),
  Yl = n((e) => {
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
  Xl = n((e) => {
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
  Zl = n((e) => {
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
  Ql = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Jl(),
      n = Yl(),
      r = Xl(),
      i = Zl();
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
  $l = n((e, t) => {
    t.exports = Ql().get;
  }),
  eu = e($l()),
  tu = (e) => (e === 0 ? 0 : e > 0 ? 1 : -1),
  nu = (e) => typeof e == `number` && e != +e,
  ru = (e) => typeof e == `string` && e.indexOf(`%`) === e.length - 1,
  K = (e) => (typeof e == `number` || e instanceof Number) && !nu(e),
  iu = (e) => K(e) || typeof e == `string`,
  au = 0,
  ou = (e) => {
    var t = ++au;
    return `${e || ``}${t}`;
  },
  su = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      r = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    if (!K(e) && typeof e != `string`) return n;
    var i;
    if (ru(e)) {
      if (t == null) return n;
      var a = e.indexOf(`%`);
      i = (t * parseFloat(e.slice(0, a))) / 100;
    } else i = +e;
    return (nu(i) && (i = n), r && t != null && i > t && (i = t), i);
  },
  cu = (e) => {
    if (!Array.isArray(e)) return !1;
    for (var t = e.length, n = {}, r = 0; r < t; r++)
      if (!n[e[r]]) n[e[r]] = !0;
      else return !0;
    return !1;
  };
function lu(e, t, n) {
  return K(e) && K(t) ? e + n * (t - e) : t;
}
function uu(e, t, n) {
  if (e && e.length)
    return e.find(
      (e) => e && (typeof t == `function` ? t(e) : (0, eu.default)(e, t)) === n,
    );
}
var du = (e) => e == null,
  fu = (e) => (du(e) ? e : `${e.charAt(0).toUpperCase()}${e.slice(1)}`),
  pu = [`type`, `size`, `sizeType`];
function mu() {
  return (
    (mu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    mu.apply(null, arguments)
  );
}
function hu(e, t) {
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
function gu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? hu(Object(n), !0).forEach(function (t) {
          _u(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : hu(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function _u(e, t, n) {
  return (
    (t = vu(t)) in e
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
function vu(e) {
  var t = yu(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function yu(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function bu(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = xu(e, t);
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
function xu(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Su = {
    symbolCircle: Yc,
    symbolCross: Xc,
    symbolDiamond: $c,
    symbolSquare: el,
    symbolStar: al,
    symbolTriangle: sl,
    symbolWye: fl,
  },
  Cu = Math.PI / 180,
  wu = (e) => Su[`symbol${fu(e)}`] || Yc,
  Tu = (e, t, n) => {
    if (t === `area`) return e;
    switch (n) {
      case `cross`:
        return (5 * e * e) / 9;
      case `diamond`:
        return (0.5 * e * e) / Math.sqrt(3);
      case `square`:
        return e * e;
      case `star`:
        var r = 18 * Cu;
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
  Eu = (e, t) => {
    Su[`symbol${fu(e)}`] = t;
  },
  Du = (e) => {
    var { type: t = `circle`, size: n = 64, sizeType: r = `area` } = e,
      i = gu(gu({}, bu(e, pu)), {}, { type: t, size: n, sizeType: r }),
      a = `circle`;
    typeof t == `string` && (a = t);
    var o = () => {
        var e = wu(a),
          t = pl()
            .type(e)
            .size(Tu(n, r, a))();
        if (t !== null) return t;
      },
      { className: s, cx: c, cy: l } = i,
      u = fc(i);
    return c === +c && l === +l && n === +n
      ? z.createElement(
          `path`,
          mu({}, u, {
            className: W(`recharts-symbols`, s),
            transform: `translate(${c}, ${l})`,
            d: o(),
          }),
        )
      : null;
  };
Du.registerSymbol = Eu;
var Ou = (e, t) => {
    if (!e || typeof e == `function` || typeof e == `boolean`) return null;
    var n = e;
    if (
      ((0, z.isValidElement)(e) && (n = e.props),
      typeof n != `object` && typeof n != `function`)
    )
      return null;
    var r = {};
    return (
      Object.keys(n).forEach((e) => {
        oc(e) && (r[e] = t || ((t) => n[e](n, t)));
      }),
      r
    );
  },
  ku = (e, t, n) => (r) => (e(t, n, r), null),
  Au = (e, t, n) => {
    if (e === null || (typeof e != `object` && typeof e != `function`))
      return null;
    var r = null;
    return (
      Object.keys(e).forEach((i) => {
        var a = e[i];
        oc(i) && typeof a == `function` && ((r ||= {}), (r[i] = ku(a, t, n)));
      }),
      r
    );
  },
  ju = n((e) => {
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
  Mu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e;
    }
    e.identity = t;
  }),
  Nu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Number.isSafeInteger(e) && e >= 0;
    }
    e.isLength = t;
  }),
  Pu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Nu();
    function n(e) {
      return e != null && typeof e != `function` && t.isLength(e.length);
    }
    e.isArrayLike = n;
  }),
  Fu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `object` && !!e;
    }
    e.isObjectLike = t;
  }),
  Iu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Pu(),
      n = Fu();
    function r(e) {
      return n.isObjectLike(e) && t.isArrayLike(e);
    }
    e.isArrayLikeObject = r;
  }),
  Lu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Ql();
    function n(e) {
      return function (n) {
        return t.get(n, e);
      };
    }
    e.property = n;
  }),
  Ru = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e !== null && (typeof e == `object` || typeof e == `function`);
    }
    e.isObject = t;
  }),
  zu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e == null || (typeof e != `object` && typeof e != `function`);
    }
    e.isPrimitive = t;
  }),
  Bu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e, t) {
      return e === t || (Number.isNaN(e) && Number.isNaN(t));
    }
    e.eq = t;
  }),
  Vu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Hu(),
      n = Ru(),
      r = zu(),
      i = Bu();
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
  Hu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Vu();
    function n(e, n) {
      return t.isMatchWith(e, n, () => void 0);
    }
    e.isMatch = n;
  }),
  Uu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Object.getOwnPropertySymbols(e).filter((t) =>
        Object.prototype.propertyIsEnumerable.call(e, t),
      );
    }
    e.getSymbols = t;
  }),
  Wu = n((e) => {
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
  Gu = n((e) => {
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
  Ku = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return ArrayBuffer.isView(e) && !(e instanceof DataView);
    }
    e.isTypedArray = t;
  }),
  qu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Uu(),
      n = Wu(),
      r = Gu(),
      i = zu(),
      a = Ku();
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
  Ju = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = qu();
    function n(e) {
      return t.cloneDeepWithImpl(e, void 0, e, new Map(), void 0);
    }
    e.cloneDeep = n;
  }),
  Yu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Hu(),
      n = Ju();
    function r(e) {
      return ((e = n.cloneDeep(e)), (n) => t.isMatch(n, e));
    }
    e.matches = r;
  }),
  Xu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = qu(),
      n = Gu();
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
  Zu = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Xu();
    function n(e) {
      return t.cloneDeepWith(e);
    }
    e.cloneDeep = n;
  }),
  Qu = n((e) => {
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
  $u = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Wu();
    function n(e) {
      return (
        typeof e == `object` && !!e && t.getTag(e) === `[object Arguments]`
      );
    }
    e.isArguments = n;
  }),
  ed = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Yl(),
      n = Qu(),
      r = $u(),
      i = Zl();
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
  td = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Hu(),
      n = Xl(),
      r = Zu(),
      i = Ql(),
      a = ed();
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
  nd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Mu(),
      n = Lu(),
      r = Yu(),
      i = td();
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
  rd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = ju(),
      n = Mu(),
      r = Iu(),
      i = nd();
    function a(e, a = n.identity) {
      return r.isArrayLikeObject(e)
        ? t.uniqBy(Array.from(e), i.iteratee(a))
        : [];
    }
    e.uniqBy = a;
  }),
  id = e(
    n((e, t) => {
      t.exports = rd().uniqBy;
    })(),
  );
function ad(e, t, n) {
  return t === !0
    ? (0, id.default)(e, n)
    : typeof t == `function`
      ? (0, id.default)(e, t)
      : e;
}
var od = n((e) => {
    var t = a(),
      n = u();
    function r(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var i = typeof Object.is == `function` ? Object.is : r,
      o = n.useSyncExternalStore,
      s = t.useRef,
      c = t.useEffect,
      l = t.useMemo,
      d = t.useDebugValue;
    e.useSyncExternalStoreWithSelector = function (e, t, n, r, a) {
      var u = s(null);
      if (u.current === null) {
        var f = { hasValue: !1, value: null };
        u.current = f;
      } else f = u.current;
      u = l(
        function () {
          function e(e) {
            if (!o) {
              if (((o = !0), (s = e), (e = r(e)), a !== void 0 && f.hasValue)) {
                var t = f.value;
                if (a(t, e)) return (c = t);
              }
              return (c = e);
            }
            if (((t = c), i(s, e))) return t;
            var n = r(e);
            return a !== void 0 && a(t, n) ? ((s = e), t) : ((s = e), (c = n));
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
        [t, n, r, a],
      );
      var p = o(e, u[0], u[1]);
      return (
        c(
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
  sd = n((e, t) => {
    t.exports = od();
  })(),
  cd = (0, z.createContext)(null),
  ld = (e) => e,
  q = () => {
    var e = (0, z.useContext)(cd);
    return e ? e.store.dispatch : ld;
  },
  ud = () => {},
  dd = () => ud,
  fd = (e, t) => e === t;
function J(e) {
  var t = (0, z.useContext)(cd);
  return (0, sd.useSyncExternalStoreWithSelector)(
    t ? t.subscription.addNestedSub : dd,
    t ? t.store.getState : ud,
    t ? t.store.getState : ud,
    t ? e : ud,
    fd,
  );
}
function pd(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function md(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != `object`) throw TypeError(t);
}
function hd(
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
var gd = (e) => (Array.isArray(e) ? e : [e]);
function _d(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    hd(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    t
  );
}
function vd(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var yd = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  bd = typeof WeakRef < `u` ? WeakRef : yd,
  xd = 0,
  Sd = 1;
function Cd() {
  return { s: xd, v: void 0, o: null, p: null };
}
function wd(e, t = {}) {
  let n = Cd(),
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
        r === void 0 ? ((t = Cd()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = Cd()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === Sd) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = i?.deref?.() ?? i;
      (e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new bd(c)
            : c));
    }
    return ((s.s = Sd), (s.v = c), c);
  }
  return (
    (o.clearCache = () => {
      ((n = Cd()), o.resetResultsCount());
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function Td(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      (typeof o == `object` && ((a = o), (o = e.pop())),
        pd(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`,
        ));
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = wd,
          argsMemoizeOptions: u = [],
          devModeChecks: d = {},
        } = { ...n, ...a },
        f = gd(c),
        p = gd(u),
        m = _d(e),
        h = s(
          function () {
            return (t++, o.apply(null, arguments));
          },
          ...f,
        ),
        g = l(
          function () {
            r++;
            let e = vd(m, arguments);
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
var Y = Td(wd),
  Ed = Object.assign(
    (e, t = Y) => {
      md(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {}),
      );
    },
    { withTypes: () => Ed },
  ),
  Dd = n((e) => {
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
  Od = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `symbol` || e instanceof Symbol;
    }
    e.isSymbol = t;
  }),
  kd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Od(),
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
  Ad = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Dd(),
      n = kd(),
      r = Zl();
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
  jd = n((e) => {
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
  Md = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Qu(),
      n = Pu(),
      r = Ru(),
      i = Bu();
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
  Nd = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Ad(),
      n = jd(),
      r = Md();
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
  Pd = e(
    n((e, t) => {
      t.exports = Nd().sortBy;
    })(),
  ),
  Fd = (e) => e.legend.settings,
  Id = (e) => e.legend.size,
  Ld = Y([(e) => e.legend.payload, Fd], (e, t) => {
    var { itemSorter: n } = t,
      r = e.flat(1);
    return n ? (0, Pd.default)(r, n) : r;
  }),
  Rd = 1;
function zd() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    [t, n] = (0, z.useState)({ height: 0, left: 0, top: 0, width: 0 });
  return [
    t,
    (0, z.useCallback)(
      (e) => {
        if (e != null) {
          var r = e.getBoundingClientRect(),
            i = { height: r.height, left: r.left, top: r.top, width: r.width };
          (Math.abs(i.height - t.height) > Rd ||
            Math.abs(i.left - t.left) > Rd ||
            Math.abs(i.top - t.top) > Rd ||
            Math.abs(i.width - t.width) > Rd) &&
            n({ height: i.height, left: i.left, top: i.top, width: i.width });
        }
      },
      [t.width, t.height, t.top, t.left, ...e],
    ),
  ];
}
function Bd(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Vd = (typeof Symbol == `function` && Symbol.observable) || `@@observable`,
  Hd = () => Math.random().toString(36).substring(7).split(``).join(`.`),
  Ud = {
    INIT: `@@redux/INIT${Hd()}`,
    REPLACE: `@@redux/REPLACE${Hd()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Hd()}`,
  };
function Wd(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Gd(e, t, n) {
  if (typeof e != `function`) throw Error(Bd(2));
  if (
    (typeof t == `function` && typeof n == `function`) ||
    (typeof n == `function` && typeof arguments[3] == `function`)
  )
    throw Error(Bd(0));
  if (
    (typeof t == `function` && n === void 0 && ((n = t), (t = void 0)),
    n !== void 0)
  ) {
    if (typeof n != `function`) throw Error(Bd(1));
    return n(Gd)(e, t);
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
    if (c) throw Error(Bd(3));
    return i;
  }
  function d(e) {
    if (typeof e != `function`) throw Error(Bd(4));
    if (c) throw Error(Bd(5));
    let t = !0;
    l();
    let n = s++;
    return (
      o.set(n, e),
      function () {
        if (t) {
          if (c) throw Error(Bd(6));
          ((t = !1), l(), o.delete(n), (a = null));
        }
      }
    );
  }
  function f(e) {
    if (!Wd(e)) throw Error(Bd(7));
    if (e.type === void 0) throw Error(Bd(8));
    if (typeof e.type != `string`) throw Error(Bd(17));
    if (c) throw Error(Bd(9));
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
    if (typeof e != `function`) throw Error(Bd(10));
    ((r = e), f({ type: Ud.REPLACE }));
  }
  function m() {
    let e = d;
    return {
      subscribe(t) {
        if (typeof t != `object` || !t) throw Error(Bd(11));
        function n() {
          let e = t;
          e.next && e.next(u());
        }
        return (n(), { unsubscribe: e(n) });
      },
      [Vd]() {
        return this;
      },
    };
  }
  return (
    f({ type: Ud.INIT }),
    { dispatch: f, subscribe: d, getState: u, replaceReducer: p, [Vd]: m }
  );
}
function Kd(e) {
  Object.keys(e).forEach((t) => {
    let n = e[t];
    if (n(void 0, { type: Ud.INIT }) === void 0) throw Error(Bd(12));
    if (n(void 0, { type: Ud.PROBE_UNKNOWN_ACTION() }) === void 0)
      throw Error(Bd(13));
  });
}
function qd(e) {
  let t = Object.keys(e),
    n = {};
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    typeof e[i] == `function` && (n[i] = e[i]);
  }
  let r = Object.keys(n),
    i;
  try {
    Kd(n);
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
      if (u === void 0) throw (t && t.type, Error(Bd(14)));
      ((o[s] = u), (a ||= u !== l));
    }
    return ((a ||= r.length !== Object.keys(e).length), a ? o : e);
  };
}
function Jd(...e) {
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
function Yd(...e) {
  return (t) => (n, r) => {
    let i = t(n, r),
      a = () => {
        throw Error(Bd(15));
      },
      o = { getState: i.getState, dispatch: (e, ...t) => a(e, ...t) };
    return ((a = Jd(...e.map((e) => e(o)))(i.dispatch)), { ...i, dispatch: a });
  };
}
function Xd(e) {
  return Wd(e) && `type` in e && typeof e.type == `string`;
}
var Zd = Symbol.for(`immer-nothing`),
  Qd = Symbol.for(`immer-draftable`),
  $d = Symbol.for(`immer-state`);
function ef(e, ...t) {
  throw Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var tf = Object.getPrototypeOf;
function nf(e) {
  return !!e && !!e[$d];
}
function rf(e) {
  return e
    ? sf(e) ||
        Array.isArray(e) ||
        !!e[Qd] ||
        !!e.constructor?.[Qd] ||
        pf(e) ||
        mf(e)
    : !1;
}
var af = Object.prototype.constructor.toString(),
  of = new WeakMap();
function sf(e) {
  if (!e || typeof e != `object`) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null || t === Object.prototype) return !0;
  let n = Object.hasOwnProperty.call(t, `constructor`) && t.constructor;
  if (n === Object) return !0;
  if (typeof n != `function`) return !1;
  let r = of.get(n);
  return (
    r === void 0 && ((r = Function.toString.call(n)), of.set(n, r)), r === af
  );
}
function cf(e, t, n = !0) {
  lf(e) === 0
    ? (n ? Reflect.ownKeys(e) : Object.keys(e)).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function lf(e) {
  let t = e[$d];
  return t ? t.type_ : Array.isArray(e) ? 1 : pf(e) ? 2 : mf(e) ? 3 : 0;
}
function uf(e, t) {
  return lf(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function df(e, t, n) {
  let r = lf(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function ff(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
function pf(e) {
  return e instanceof Map;
}
function mf(e) {
  return e instanceof Set;
}
function hf(e) {
  return e.copy_ || e.base_;
}
function gf(e, t) {
  if (pf(e)) return new Map(e);
  if (mf(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  let n = sf(e);
  if (t === !0 || (t === `class_only` && !n)) {
    let t = Object.getOwnPropertyDescriptors(e);
    delete t[$d];
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
    return Object.create(tf(e), t);
  }
  {
    let t = tf(e);
    if (t !== null && n) return { ...e };
    let r = Object.create(t);
    return Object.assign(r, e);
  }
}
function _f(e, t = !1) {
  return (
    bf(e) ||
      nf(e) ||
      !rf(e) ||
      (lf(e) > 1 &&
        Object.defineProperties(e, { set: yf, add: yf, clear: yf, delete: yf }),
      Object.freeze(e),
      t && Object.values(e).forEach((e) => _f(e, !0))),
    e
  );
}
function vf() {
  ef(2);
}
var yf = { value: vf };
function bf(e) {
  return typeof e != `object` || !e || Object.isFrozen(e);
}
var xf = {};
function Sf(e) {
  let t = xf[e];
  return (t || ef(0, e), t);
}
var Cf;
function wf() {
  return Cf;
}
function Tf(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Ef(e, t) {
  t &&
    (Sf(`Patches`),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Df(e) {
  (Of(e), e.drafts_.forEach(Af), (e.drafts_ = null));
}
function Of(e) {
  e === Cf && (Cf = e.parent_);
}
function kf(e) {
  return (Cf = Tf(Cf, e));
}
function Af(e) {
  let t = e[$d];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function jf(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  let n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[$d].modified_ && (Df(t), ef(4)),
        rf(e) && ((e = Mf(t, e)), t.parent_ || Pf(t, e)),
        t.patches_ &&
          Sf(`Patches`).generateReplacementPatches_(
            n[$d].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = Mf(t, n, [])),
    Df(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e === Zd ? void 0 : e
  );
}
function Mf(e, t, n) {
  if (bf(t)) return t;
  let r = e.immer_.shouldUseStrictIteration(),
    i = t[$d];
  if (!i) return (cf(t, (r, a) => Nf(e, i, t, r, a, n), r), t);
  if (i.scope_ !== e) return t;
  if (!i.modified_) return (Pf(e, i.base_, !0), i.base_);
  if (!i.finalized_) {
    ((i.finalized_ = !0), i.scope_.unfinalizedDrafts_--);
    let t = i.copy_,
      a = t,
      o = !1;
    (i.type_ === 3 && ((a = new Set(t)), t.clear(), (o = !0)),
      cf(a, (r, a) => Nf(e, i, t, r, a, n, o), r),
      Pf(e, t, !1),
      n &&
        e.patches_ &&
        Sf(`Patches`).generatePatches_(i, n, e.patches_, e.inversePatches_));
  }
  return i.copy_;
}
function Nf(e, t, n, r, i, a, o) {
  if (i == null || (typeof i != `object` && !o)) return;
  let s = bf(i);
  if (!s || o) {
    if (nf(i)) {
      let o = Mf(
        e,
        i,
        a && t && t.type_ !== 3 && !uf(t.assigned_, r) ? a.concat(r) : void 0,
      );
      if ((df(n, r, o), nf(o))) e.canAutoFreeze_ = !1;
      else return;
    } else o && n.add(i);
    if (rf(i) && !s) {
      if (
        (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) ||
        (t && t.base_ && t.base_[r] === i && s)
      )
        return;
      (Mf(e, i),
        (!t || !t.scope_.parent_) &&
          typeof r != `symbol` &&
          (pf(n)
            ? n.has(r)
            : Object.prototype.propertyIsEnumerable.call(n, r)) &&
          Pf(e, i));
    }
  }
}
function Pf(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && _f(t, n);
}
function Ff(e, t) {
  let n = Array.isArray(e),
    r = {
      type_: +!!n,
      scope_: t ? t.scope_ : wf(),
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
    a = If;
  n && ((i = [r]), (a = Lf));
  let { revoke: o, proxy: s } = Proxy.revocable(i, a);
  return ((r.draft_ = s), (r.revoke_ = o), s);
}
var If = {
    get(e, t) {
      if (t === $d) return e;
      let n = hf(e);
      if (!uf(n, t)) return zf(e, n, t);
      let r = n[t];
      return e.finalized_ || !rf(r)
        ? r
        : r === Rf(e.base_, t)
          ? (Hf(e), (e.copy_[t] = Wf(r, e)))
          : r;
    },
    has(e, t) {
      return t in hf(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(hf(e));
    },
    set(e, t, n) {
      let r = Bf(hf(e), t);
      if (r?.set) return (r.set.call(e.draft_, n), !0);
      if (!e.modified_) {
        let r = Rf(hf(e), t),
          i = r?.[$d];
        if (i && i.base_ === n)
          return ((e.copy_[t] = n), (e.assigned_[t] = !1), !0);
        if (ff(n, r) && (n !== void 0 || uf(e.base_, t))) return !0;
        (Hf(e), Vf(e));
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
        Rf(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Hf(e), Vf(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      let n = hf(e),
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
      ef(11);
    },
    getPrototypeOf(e) {
      return tf(e.base_);
    },
    setPrototypeOf() {
      ef(12);
    },
  },
  Lf = {};
(cf(If, (e, t) => {
  Lf[e] = function () {
    return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
  };
}),
  (Lf.deleteProperty = function (e, t) {
    return Lf.set.call(this, e, t, void 0);
  }),
  (Lf.set = function (e, t, n) {
    return If.set.call(this, e[0], t, n, e[0]);
  }));
function Rf(e, t) {
  let n = e[$d];
  return (n ? hf(n) : e)[t];
}
function zf(e, t, n) {
  let r = Bf(t, n);
  return r ? (`value` in r ? r.value : r.get?.call(e.draft_)) : void 0;
}
function Bf(e, t) {
  if (!(t in e)) return;
  let n = tf(e);
  for (; n;) {
    let e = Object.getOwnPropertyDescriptor(n, t);
    if (e) return e;
    n = tf(n);
  }
}
function Vf(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Vf(e.parent_));
}
function Hf(e) {
  e.copy_ ||= gf(e.base_, e.scope_.immer_.useStrictShallowCopy_);
}
var Uf = class {
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
        (typeof t != `function` && ef(6),
          n !== void 0 && typeof n != `function` && ef(7));
        let r;
        if (rf(e)) {
          let i = kf(this),
            a = Wf(e, void 0),
            o = !0;
          try {
            ((r = t(a)), (o = !1));
          } finally {
            o ? Df(i) : Of(i);
          }
          return (Ef(i, n), jf(r, i));
        }
        if (!e || typeof e != `object`) {
          if (
            ((r = t(e)),
            r === void 0 && (r = e),
            r === Zd && (r = void 0),
            this.autoFreeze_ && _f(r, !0),
            n)
          ) {
            let t = [],
              i = [];
            (Sf(`Patches`).generateReplacementPatches_(e, r, t, i), n(t, i));
          }
          return r;
        }
        ef(1, e);
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
    (rf(e) || ef(8), nf(e) && (e = Gf(e)));
    let t = kf(this),
      n = Wf(e, void 0);
    return ((n[$d].isManual_ = !0), Of(t), n);
  }
  finishDraft(e, t) {
    let n = e && e[$d];
    (n && n.isManual_) || ef(9);
    let { scope_: r } = n;
    return (Ef(r, t), jf(void 0, r));
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
    let r = Sf(`Patches`).applyPatches_;
    return nf(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
  }
};
function Wf(e, t) {
  let n = pf(e)
    ? Sf(`MapSet`).proxyMap_(e, t)
    : mf(e)
      ? Sf(`MapSet`).proxySet_(e, t)
      : Ff(e, t);
  return ((t ? t.scope_ : wf()).drafts_.push(n), n);
}
function Gf(e) {
  return (nf(e) || ef(10, e), Kf(e));
}
function Kf(e) {
  if (!rf(e) || bf(e)) return e;
  let t = e[$d],
    n,
    r = !0;
  if (t) {
    if (!t.modified_) return t.base_;
    ((t.finalized_ = !0),
      (n = gf(e, t.scope_.immer_.useStrictShallowCopy_)),
      (r = t.scope_.immer_.shouldUseStrictIteration()));
  } else n = gf(e, !0);
  return (
    cf(
      n,
      (e, t) => {
        df(n, e, Kf(t));
      },
      r,
    ),
    t && (t.finalized_ = !1),
    n
  );
}
var qf = new Uf(),
  Jf = qf.produce,
  Yf = qf.setUseStrictIteration.bind(qf);
function Xf(e) {
  return e;
}
function Zf(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function Qf(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != `object`) throw TypeError(t);
}
function $f(
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
var ep = (e) => (Array.isArray(e) ? e : [e]);
function tp(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    $f(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    t
  );
}
function np(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var rp = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  ip = typeof WeakRef < `u` ? WeakRef : rp,
  ap = 0,
  op = 1;
function sp() {
  return { s: ap, v: void 0, o: null, p: null };
}
function cp(e, t = {}) {
  let n = sp(),
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
        r === void 0 ? ((t = sp()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = sp()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === op) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = i?.deref?.() ?? i;
      (e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new ip(c)
            : c));
    }
    return ((s.s = op), (s.v = c), c);
  }
  return (
    (o.clearCache = () => {
      ((n = sp()), o.resetResultsCount());
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function lp(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      (typeof o == `object` && ((a = o), (o = e.pop())),
        Zf(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`,
        ));
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = cp,
          argsMemoizeOptions: u = [],
          devModeChecks: d = {},
        } = { ...n, ...a },
        f = ep(c),
        p = ep(u),
        m = tp(e),
        h = s(
          function () {
            return (t++, o.apply(null, arguments));
          },
          ...f,
        ),
        g = l(
          function () {
            r++;
            let e = np(m, arguments);
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
var up = lp(cp),
  dp = Object.assign(
    (e, t = up) => {
      Qf(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {}),
      );
    },
    { withTypes: () => dp },
  );
function fp(e) {
  return ({ dispatch: t, getState: n }) =>
    (r) =>
    (i) =>
      typeof i == `function` ? i(t, n, e) : r(i);
}
var pp = fp(),
  mp = fp;
((...e) => {
  let t = lp(...e),
    n = Object.assign(
      (...e) => {
        let n = t(...e),
          r = (e, ...t) => n(nf(e) ? Gf(e) : e, ...t);
        return (Object.assign(r, n), r);
      },
      { withTypes: () => n },
    );
  return n;
})(cp);
var hp =
  typeof window < `u` && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == `object`
            ? Jd
            : Jd.apply(null, arguments);
      };
typeof window < `u` &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__;
var gp = (e) => e && typeof e.match == `function`;
function _p(e, t) {
  function n(...n) {
    if (t) {
      let r = t(...n);
      if (!r) throw Error(Im(0));
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
    (n.match = (t) => Xd(t) && t.type === e),
    n
  );
}
var vp = class e extends Array {
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
function yp(e) {
  return rf(e) ? Jf(e, () => {}) : e;
}
function bp(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function xp(e) {
  return typeof e == `boolean`;
}
var Sp = () =>
    function (e) {
      let {
          thunk: t = !0,
          immutableCheck: n = !0,
          serializableCheck: r = !0,
          actionCreatorCheck: i = !0,
        } = e ?? {},
        a = new vp();
      return (t && (xp(t) ? a.push(pp) : a.push(mp(t.extraArgument))), a);
    },
  Cp = `RTK_autoBatch`,
  wp = () => (e) => ({ payload: e, meta: { [Cp]: !0 } }),
  Tp = (e) => (t) => {
    setTimeout(t, e);
  },
  Ep =
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
                : Tp(10)
              : e.type === `callback`
                ? e.queueNotification
                : Tp(e.timeout),
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
              (i = !e?.meta?.[Cp]),
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
  Dp = (e) =>
    function (t) {
      let { autoBatch: n = !0 } = t ?? {},
        r = new vp(e);
      return (n && r.push(Ep(typeof n == `object` ? n : void 0)), r);
    };
function Op(e) {
  let t = Sp(),
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
  else if (Wd(n)) c = qd(n);
  else throw Error(Im(1));
  let l;
  l = typeof r == `function` ? r(t) : t();
  let u = Jd;
  i && (u = hp({ trace: !1, ...(typeof i == `object` && i) }));
  let d = Dp(Yd(...l)),
    f = typeof s == `function` ? s(d) : d(),
    p = u(...f);
  return Gd(c, o, p);
}
function kp(e) {
  let t = {},
    n = [],
    r,
    i = {
      addCase(e, n) {
        let r = typeof e == `string` ? e : e.type;
        if (!r) throw Error(Im(28));
        if (r in t) throw Error(Im(29));
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
Yf(!1);
function Ap(e) {
  return typeof e == `function`;
}
function jp(e, t) {
  let [n, r, i] = kp(t),
    a;
  if (Ap(e)) a = () => yp(e());
  else {
    let t = yp(e);
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
          if (nf(e)) {
            let r = n(e, t);
            return r === void 0 ? e : r;
          }
          if (rf(e)) return Jf(e, (e) => n(e, t));
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
var Mp = (e, t) => (gp(e) ? e.match(t) : e(t));
function Np(...e) {
  return (t) => e.some((e) => Mp(e, t));
}
var Pp = `ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW`,
  Fp = (e = 21) => {
    let t = ``,
      n = e;
    for (; n--;) t += Pp[(Math.random() * 64) | 0];
    return t;
  },
  Ip = [`name`, `message`, `stack`, `code`],
  Lp = class {
    constructor(e, t) {
      ((this.payload = e), (this.meta = t));
    }
    _type;
  },
  Rp = class {
    constructor(e, t) {
      ((this.payload = e), (this.meta = t));
    }
    _type;
  },
  zp = (e) => {
    if (typeof e == `object` && e) {
      let t = {};
      for (let n of Ip) typeof e[n] == `string` && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  Bp = `External signal was aborted`;
(() => {
  function e(e, t, n) {
    let r = _p(e + `/fulfilled`, (e, t, n, r) => ({
        payload: e,
        meta: {
          ...(r || {}),
          arg: n,
          requestId: t,
          requestStatus: `fulfilled`,
        },
      })),
      i = _p(e + `/pending`, (e, t, n) => ({
        payload: void 0,
        meta: { ...(n || {}), arg: t, requestId: e, requestStatus: `pending` },
      })),
      a = _p(e + `/rejected`, (e, t, r, i, a) => ({
        payload: i,
        error: ((n && n.serializeError) || zp)(e || `Rejected`),
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
        let u = n?.idGenerator ? n.idGenerator(e) : Fp(),
          d = new AbortController(),
          f,
          p;
        function m(e) {
          ((p = e), d.abort());
        }
        o &&
          (o.aborted
            ? m(Bp)
            : o.addEventListener(`abort`, () => m(Bp), { once: !0 }));
        let h = (async function () {
          let o;
          try {
            let a = n?.condition?.(e, { getState: c, extra: l });
            if ((Hp(a) && (a = await a), a === !1 || d.signal.aborted))
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
                    rejectWithValue: (e, t) => new Lp(e, t),
                    fulfillWithValue: (e, t) => new Rp(e, t),
                  }),
                ).then((t) => {
                  if (t instanceof Lp) throw t;
                  return t instanceof Rp
                    ? r(t.payload, u, e, t.meta)
                    : r(t, u, e);
                }),
              ])));
          } catch (t) {
            o = t instanceof Lp ? a(null, u, e, t.payload, t.meta) : a(t, u, e);
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
            return h.then(Vp);
          },
        });
      };
    }
    return Object.assign(o, {
      pending: i,
      rejected: a,
      fulfilled: r,
      settled: Np(a, r),
      typePrefix: e,
    });
  }
  return ((e.withTypes = () => e), e);
})();
function Vp(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function Hp(e) {
  return typeof e == `object` && !!e && typeof e.then == `function`;
}
var Up = Symbol.for(`rtk-slice-createasyncthunk`),
  Wp = ((e) => (
    (e.reducer = `reducer`),
    (e.reducerWithPrepare = `reducerWithPrepare`),
    (e.asyncThunk = `asyncThunk`),
    e
  ))(Wp || {});
function Gp(e, t) {
  return `${e}/${t}`;
}
function Kp({ creators: e } = {}) {
  let t = e?.asyncThunk?.[Up];
  return function (e) {
    let { name: n, reducerPath: r = n } = e;
    if (!n) throw Error(Im(11));
    let i =
        (typeof e.reducers == `function` ? e.reducers(Yp()) : e.reducers) || {},
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
          if (!n) throw Error(Im(12));
          if (n in o.sliceCaseReducersByType) throw Error(Im(13));
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
          type: Gp(n, r),
          createNotation: typeof e.reducers == `function`,
        };
      Zp(a) ? $p(o, a, s, t) : Xp(o, a, s);
    });
    function c() {
      let [t = {}, n = [], r = void 0] =
          typeof e.extraReducers == `function`
            ? kp(e.extraReducers)
            : [e.extraReducers],
        i = { ...t, ...o.sliceCaseReducersByType };
      return jp(e.initialState, (e) => {
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
        return (typeof i > `u` && n && (i = bp(d, r, m)), i);
      }
      function i(t = l) {
        return bp(
          bp(u, n, () => new WeakMap()),
          t,
          () => {
            let r = {};
            for (let [i, a] of Object.entries(e.selectors ?? {}))
              r[i] = qp(a, t, () => bp(d, t, m), n);
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
function qp(e, t, n, r) {
  function i(i, ...a) {
    let o = t(i);
    return (typeof o > `u` && r && (o = n()), e(o, ...a));
  }
  return ((i.unwrapped = e), i);
}
var Jp = Kp();
function Yp() {
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
function Xp({ type: e, reducerName: t, createNotation: n }, r, i) {
  let a, o;
  if (`reducer` in r) {
    if (n && !Qp(r)) throw Error(Im(17));
    ((a = r.reducer), (o = r.prepare));
  } else a = r;
  i.addCase(e, a)
    .exposeCaseReducer(t, a)
    .exposeAction(t, o ? _p(e, o) : _p(e));
}
function Zp(e) {
  return e._reducerDefinitionType === `asyncThunk`;
}
function Qp(e) {
  return e._reducerDefinitionType === `reducerWithPrepare`;
}
function $p({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw Error(Im(18));
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
      fulfilled: o || em,
      pending: s || em,
      rejected: c || em,
      settled: l || em,
    }));
}
function em() {}
var tm = `task`,
  nm = `listener`,
  rm = `completed`,
  im = `cancelled`,
  am = `task-${im}`,
  om = `task-${rm}`,
  sm = `${nm}-${im}`,
  cm = `${nm}-${rm}`,
  lm = class {
    constructor(e) {
      ((this.code = e), (this.message = `${tm} ${im} (reason: ${e})`));
    }
    name = `TaskAbortError`;
    message;
  },
  um = (e, t) => {
    if (typeof e != `function`) throw TypeError(Im(32));
  },
  dm = () => {},
  fm = (e, t = dm) => (e.catch(t), e),
  pm = (e, t) => (
    e.addEventListener(`abort`, t, { once: !0 }),
    () => e.removeEventListener(`abort`, t)
  ),
  mm = (e, t) => {
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
  hm = (e) => {
    if (e.aborted) {
      let { reason: t } = e;
      throw new lm(t);
    }
  };
function gm(e, t) {
  let n = dm;
  return new Promise((r, i) => {
    let a = () => i(new lm(e.reason));
    e.aborted ? a() : ((n = pm(e, a)), t.finally(() => n()).then(r, i));
  }).finally(() => {
    n = dm;
  });
}
var _m = async (e, t) => {
    try {
      return (await Promise.resolve(), { status: `ok`, value: await e() });
    } catch (e) {
      return { status: e instanceof lm ? `cancelled` : `rejected`, error: e };
    } finally {
      t?.();
    }
  },
  vm = (e) => (t) => fm(gm(e, t).then((t) => (hm(e), t))),
  ym = (e) => {
    let t = vm(e);
    return (e) => t(new Promise((t) => setTimeout(t, e)));
  },
  { assign: bm } = Object,
  xm = {},
  Sm = `listenerMiddleware`,
  Cm = (e, t) => {
    let n = (t) => pm(e, () => mm(t, e.reason));
    return (r, i) => {
      um(r, `taskExecutor`);
      let a = new AbortController();
      n(a);
      let o = _m(
        async () => {
          (hm(e), hm(a.signal));
          let t = await r({
            pause: vm(a.signal),
            delay: ym(a.signal),
            signal: a.signal,
          });
          return (hm(a.signal), t);
        },
        () => mm(a, om),
      );
      return (
        i?.autoJoin && t.push(o.catch(dm)),
        {
          result: vm(e)(o),
          cancel() {
            mm(a, am);
          },
        }
      );
    };
  },
  wm = (e, t) => {
    let n = async (n, r) => {
      hm(t);
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
        let e = await gm(t, Promise.race(a));
        return (hm(t), e);
      } finally {
        i();
      }
    };
    return (e, t) => fm(n(e, t));
  },
  Tm = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: i, effect: a } = e;
    if (t) i = _p(t).match;
    else if (n) ((t = n.type), (i = n.match));
    else if (r) i = r;
    else if (!i) throw Error(Im(21));
    return (um(a, `options.listener`), { predicate: i, type: t, effect: a });
  },
  Em = bm(
    (e) => {
      let { type: t, predicate: n, effect: r } = Tm(e);
      return {
        id: Fp(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw Error(Im(22));
        },
      };
    },
    { withTypes: () => Em },
  ),
  Dm = (e, t) => {
    let { type: n, effect: r, predicate: i } = Tm(t);
    return Array.from(e.values()).find(
      (e) =>
        (typeof n == `string` ? e.type === n : e.predicate === i) &&
        e.effect === r,
    );
  },
  Om = (e) => {
    e.pending.forEach((e) => {
      mm(e, sm);
    });
  },
  km = (e, t) => () => {
    for (let e of t.keys()) Om(e);
    e.clear();
  },
  Am = (e, t, n) => {
    try {
      e(t, n);
    } catch (e) {
      setTimeout(() => {
        throw e;
      }, 0);
    }
  },
  jm = bm(_p(`${Sm}/add`), { withTypes: () => jm }),
  Mm = _p(`${Sm}/removeAll`),
  Nm = bm(_p(`${Sm}/remove`), { withTypes: () => Nm }),
  Pm = (...e) => {
    console.error(`${Sm}/error`, ...e);
  },
  Fm = (e = {}) => {
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
      { extra: a, onError: o = Pm } = e;
    um(o, `onError`);
    let s = (e) => (
        (e.unsubscribe = () => t.delete(e.id)),
        t.set(e.id, e),
        (t) => {
          (e.unsubscribe(), t?.cancelActive && Om(e));
        }
      ),
      c = (e) => {
        let n = Dm(t, e) ?? Em(e);
        return s(n);
      };
    bm(c, { withTypes: () => c });
    let l = (e) => {
      let n = Dm(t, e);
      return (n && (n.unsubscribe(), e.cancelActive && Om(n)), !!n);
    };
    bm(l, { withTypes: () => l });
    let u = async (e, n, s, l) => {
        let u = new AbortController(),
          d = wm(c, u.signal),
          f = [];
        try {
          (e.pending.add(u),
            r(e),
            await Promise.resolve(
              e.effect(
                n,
                bm({}, s, {
                  getOriginalState: l,
                  condition: (e, t) => d(e, t).then(Boolean),
                  take: d,
                  delay: ym(u.signal),
                  pause: vm(u.signal),
                  extra: a,
                  signal: u.signal,
                  fork: Cm(u.signal, f),
                  unsubscribe: e.unsubscribe,
                  subscribe: () => {
                    t.set(e.id, e);
                  },
                  cancelActiveListeners: () => {
                    e.pending.forEach((e, t, n) => {
                      e !== u && (mm(e, sm), n.delete(e));
                    });
                  },
                  cancel: () => {
                    (mm(u, sm), e.pending.delete(u));
                  },
                  throwIfCancelled: () => {
                    hm(u.signal);
                  },
                }),
              ),
            ));
        } catch (e) {
          e instanceof lm || Am(o, e, { raisedBy: `effect` });
        } finally {
          (await Promise.all(f), mm(u, cm), i(e), e.pending.delete(u));
        }
      },
      d = km(t, n);
    return {
      middleware: (e) => (n) => (r) => {
        if (!Xd(r)) return n(r);
        if (jm.match(r)) return c(r.payload);
        if (Mm.match(r)) {
          d();
          return;
        }
        if (Nm.match(r)) return l(r.payload);
        let i = e.getState(),
          a = () => {
            if (i === xm) throw Error(Im(23));
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
                ((s = !1), Am(o, e, { raisedBy: `predicate` }));
              }
              s && u(t, r, e, a);
            }
          }
        } finally {
          i = xm;
        }
        return s;
      },
      startListening: c,
      stopListening: l,
      clearListeners: d,
    };
  };
function Im(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Lm = Jp({
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
  { setMargin: Rm, setLayout: zm, setChartSize: Bm, setScale: Vm } = Lm.actions,
  Hm = Lm.reducer;
function Um(e, t) {
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
function Wm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Um(Object(n), !0).forEach(function (t) {
          Gm(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Um(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Gm(e, t, n) {
  return (
    (t = Km(t)) in e
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
function Km(e) {
  var t = qm(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function qm(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Jm = Math.PI / 180,
  Ym = (e) => (e * Math.PI) / 180,
  Xm = (e) => (e * 180) / Math.PI,
  Zm = (e, t, n, r) => ({
    x: e + Math.cos(-Jm * r) * n,
    y: t + Math.sin(-Jm * r) * n,
  }),
  Qm = function (e, t) {
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
  $m = (e, t) => {
    var { x: n, y: r } = e,
      { x: i, y: a } = t;
    return Math.sqrt((n - i) ** 2 + (r - a) ** 2);
  },
  eh = (e, t) => {
    var { x: n, y: r } = e,
      { cx: i, cy: a } = t,
      o = $m({ x: n, y: r }, { x: i, y: a });
    if (o <= 0) return { radius: o, angle: 0 };
    var s = (n - i) / o,
      c = Math.acos(s);
    return (
      r > a && (c = 2 * Math.PI - c),
      { radius: o, angle: Xm(c), angleInRadian: c }
    );
  },
  th = (e) => {
    var { startAngle: t, endAngle: n } = e,
      r = Math.floor(t / 360),
      i = Math.floor(n / 360),
      a = Math.min(r, i);
    return { startAngle: t - a * 360, endAngle: n - a * 360 };
  },
  nh = (e, t) => {
    var { startAngle: n, endAngle: r } = t,
      i = Math.floor(n / 360),
      a = Math.floor(r / 360);
    return e + Math.min(i, a) * 360;
  },
  rh = (e, t) => {
    var { x: n, y: r } = e,
      { radius: i, angle: a } = eh({ x: n, y: r }, t),
      { innerRadius: o, outerRadius: s } = t;
    if (i < o || i > s || i === 0) return null;
    var { startAngle: c, endAngle: l } = th(t),
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
    return d ? Wm(Wm({}, t), {}, { radius: i, angle: nh(u, t) }) : null;
  },
  ih = (e) =>
    !(0, z.isValidElement)(e) &&
    typeof e != `function` &&
    typeof e != `boolean` &&
    e != null
      ? e.className
      : ``;
function ah(e, t, n) {
  return Array.isArray(e) && e && t + n !== 0 ? e.slice(t, n + 1) : e;
}
function oh(e, t) {
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
function sh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? oh(Object(n), !0).forEach(function (t) {
          ch(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : oh(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ch(e, t, n) {
  return (
    (t = lh(t)) in e
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
function lh(e) {
  var t = uh(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function uh(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function dh(e, t, n) {
  return du(e) || du(t)
    ? n
    : iu(t)
      ? (0, eu.default)(e, t, n)
      : typeof t == `function`
        ? t(e)
        : n;
}
var fh = (e, t, n, r, i) => {
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
        if (tu(l - c) !== tu(u - l)) {
          var f = [];
          if (tu(u - l) === tu(i[1] - i[0])) {
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
  ph = (e, t, n) => {
    if (t && n) {
      var { width: r, height: i } = n,
        { align: a, verticalAlign: o, layout: s } = t;
      if (
        (s === `vertical` || (s === `horizontal` && o === `middle`)) &&
        a !== `center` &&
        K(e[a])
      )
        return sh(sh({}, e), {}, { [a]: e[a] + (r || 0) });
      if (
        (s === `horizontal` || (s === `vertical` && a === `center`)) &&
        o !== `middle` &&
        K(e[o])
      )
        return sh(sh({}, e), {}, { [o]: e[o] + (i || 0) });
    }
    return e;
  },
  mh = (e, t) =>
    (e === `horizontal` && t === `xAxis`) ||
    (e === `vertical` && t === `yAxis`) ||
    (e === `centric` && t === `angleAxis`) ||
    (e === `radial` && t === `radiusAxis`),
  hh = (e, t, n, r) => {
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
  gh = (e, t, n) => {
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
        p === `angleAxis` && a && a.length >= 2 ? tu(a[0] - a[1]) * 2 * h : h),
      t && (d || f)
        ? (d || f || [])
            .map((e, t) => ({
              coordinate: o(r ? r.indexOf(e) : e) + h,
              value: e,
              offset: h,
              index: t,
            }))
            .filter((e) => !nu(e.coordinate))
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
  _h = 1e-4,
  vh = (e) => {
    var t = e.domain();
    if (!(!t || t.length <= 2)) {
      var n = t.length,
        r = e.range(),
        i = Math.min(r[0], r[1]) - _h,
        a = Math.max(r[0], r[1]) + _h,
        o = e(t[0]),
        s = e(t[n - 1]);
      (o < i || o > a || s < i || s > a) && e.domain([t[0], t[n - 1]]);
    }
  },
  yh = (e, t) => {
    if (!t || t.length !== 2 || !K(t[0]) || !K(t[1])) return e;
    var n = Math.min(t[0], t[1]),
      r = Math.max(t[0], t[1]),
      i = [e[0], e[1]];
    return (
      (!K(e[0]) || e[0] < n) && (i[0] = n),
      (!K(e[1]) || e[1] > r) && (i[1] = r),
      i[0] > r && (i[0] = r),
      i[1] < n && (i[1] = n),
      i
    );
  },
  bh = {
    sign: (e) => {
      var t = e.length;
      if (!(t <= 0))
        for (var n = 0, r = e[0].length; n < r; ++n)
          for (var i = 0, a = 0, o = 0; o < t; ++o) {
            var s = nu(e[o][n][1]) ? e[o][n][0] : e[o][n][1];
            s >= 0
              ? ((e[o][n][0] = i), (e[o][n][1] = i + s), (i = e[o][n][1]))
              : ((e[o][n][0] = a), (e[o][n][1] = a + s), (a = e[o][n][1]));
          }
    },
    expand: Gl,
    none: Bl,
    silhouette: Kl,
    wiggle: ql,
    positive: (e) => {
      var t = e.length;
      if (!(t <= 0))
        for (var n = 0, r = e[0].length; n < r; ++n)
          for (var i = 0, a = 0; a < t; ++a) {
            var o = nu(e[a][n][1]) ? e[a][n][0] : e[a][n][1];
            o >= 0
              ? ((e[a][n][0] = i), (e[a][n][1] = i + o), (i = e[a][n][1]))
              : ((e[a][n][0] = 0), (e[a][n][1] = 0));
          }
    },
  },
  xh = (e, t, n) => {
    var r = bh[n];
    return Wl()
      .keys(t)
      .value((e, t) => +dh(e, t, 0))
      .order(Vl)
      .offset(r)(e);
  };
function Sh(e) {
  return e == null ? void 0 : String(e);
}
var Ch = (e) => {
    var { axis: t, ticks: n, offset: r, bandSize: i, entry: a, index: o } = e;
    if (t.type === `category`) return n[o] ? n[o].coordinate + r : null;
    var s = dh(a, t.dataKey, t.scale.domain()[o]);
    return du(s) ? null : t.scale(s) - i / 2 + r;
  },
  wh = (e) => {
    var { numericAxis: t } = e,
      n = t.scale.domain();
    if (t.type === `number`) {
      var r = Math.min(n[0], n[1]),
        i = Math.max(n[0], n[1]);
      return r <= 0 && i >= 0 ? 0 : i < 0 ? i : r;
    }
    return n[0];
  },
  Th = (e) => {
    var t = e.flat(2).filter(K);
    return [Math.min(...t), Math.max(...t)];
  },
  Eh = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]],
  Dh = (e, t, n) => {
    if (e != null)
      return Eh(
        Object.keys(e).reduce(
          (r, i) => {
            var { stackedData: a } = e[i],
              o = a.reduce(
                (e, r) => {
                  var i = Th(ah(r, t, n));
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
  Oh = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  kh = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Ah = (e, t, n) => {
    if (e && e.scale && e.scale.bandwidth) {
      var r = e.scale.bandwidth();
      if (!n || r > 0) return r;
    }
    if (e && t && t.length >= 2) {
      for (
        var i = (0, Pd.default)(t, (e) => e.coordinate),
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
function jh(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: n,
    payload: r,
    value: i,
    name: a,
  } = e;
  return sh(sh({}, t), {}, { dataKey: n, payload: r, value: i, name: a });
}
function Mh(e, t) {
  if (e) return String(e);
  if (typeof t == `string`) return t;
}
function Nh(e, t, n, r, i) {
  return n === `horizontal` || n === `vertical`
    ? e >= i.left &&
      e <= i.left + i.width &&
      t >= i.top &&
      t <= i.top + i.height
      ? { x: e, y: t }
      : null
    : r
      ? rh({ x: e, y: t }, r)
      : null;
}
var Ph = (e, t, n, r) => {
    var i = t.find((e) => e && e.index === n);
    if (i) {
      if (e === `horizontal`) return { x: i.coordinate, y: r.y };
      if (e === `vertical`) return { x: r.x, y: i.coordinate };
      if (e === `centric`) {
        var a = i.coordinate,
          { radius: o } = r;
        return sh(
          sh(sh({}, r), Zm(r.cx, r.cy, o, a)),
          {},
          { angle: a, radius: o },
        );
      }
      var s = i.coordinate,
        { angle: c } = r;
      return sh(
        sh(sh({}, r), Zm(r.cx, r.cy, s, c)),
        {},
        { angle: c, radius: s },
      );
    }
    return { x: 0, y: 0 };
  },
  Fh = (e, t) =>
    t === `horizontal`
      ? e.x
      : t === `vertical`
        ? e.y
        : t === `centric`
          ? e.angle
          : e.radius,
  Ih = (e) => e.layout.width,
  Lh = (e) => e.layout.height,
  Rh = (e) => e.layout.scale,
  zh = (e) => e.layout.margin,
  Bh = Y(
    (e) => e.cartesianAxis.xAxis,
    (e) => Object.values(e),
  ),
  Vh = Y(
    (e) => e.cartesianAxis.yAxis,
    (e) => Object.values(e),
  ),
  Hh = `data-recharts-item-index`,
  Uh = `data-recharts-item-data-key`;
function Wh(e, t) {
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
function Gh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Wh(Object(n), !0).forEach(function (t) {
          Kh(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Wh(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Kh(e, t, n) {
  return (
    (t = qh(t)) in e
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
function qh(e) {
  var t = Jh(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Jh(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Yh = (e) => e.brush.height;
function Xh(e) {
  return Vh(e).reduce(
    (e, t) =>
      t.orientation === `left` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function Zh(e) {
  return Vh(e).reduce(
    (e, t) =>
      t.orientation === `right` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function Qh(e) {
  return Bh(e).reduce(
    (e, t) =>
      t.orientation === `top` && !t.mirror && !t.hide ? e + t.height : e,
    0,
  );
}
function $h(e) {
  return Bh(e).reduce(
    (e, t) =>
      t.orientation === `bottom` && !t.mirror && !t.hide ? e + t.height : e,
    0,
  );
}
var eg = Y(
    [Ih, Lh, zh, Yh, Xh, Zh, Qh, $h, Fd, Id],
    (e, t, n, r, i, a, o, s, c, l) => {
      var u = { left: (n.left || 0) + i, right: (n.right || 0) + a },
        d = Gh(
          Gh({}, { top: (n.top || 0) + o, bottom: (n.bottom || 0) + s }),
          u,
        ),
        f = d.bottom;
      ((d.bottom += r), (d = ph(d, c, l)));
      var p = e - d.left - d.right,
        m = t - d.top - d.bottom;
      return Gh(
        Gh({ brushBottom: f }, d),
        {},
        { width: Math.max(p, 0), height: Math.max(m, 0) },
      );
    },
  ),
  tg = Y(eg, (e) => ({
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height,
  })),
  ng = Y(Ih, Lh, (e, t) => ({ x: 0, y: 0, width: e, height: t })),
  rg = (0, z.createContext)(null),
  ig = () => (0, z.useContext)(rg) != null,
  ag = (e) => e.brush,
  og = Y([ag, eg, zh], (e, t, n) => ({
    height: e.height,
    x: K(e.x) ? e.x : t.left,
    y: K(e.y) ? e.y : t.top + t.height + t.brushBottom - (n?.bottom || 0),
    width: K(e.width) ? e.width : t.width,
  })),
  sg = n((e) => {
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
  cg = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = sg();
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
  lg = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = cg();
    function n(e, n = 0, r = {}) {
      let { leading: i = !0, trailing: a = !0 } = r;
      return t.debounce(e, n, { leading: i, maxWait: n, trailing: a });
    }
    e.throttle = n;
  }),
  ug = e(
    n((e, t) => {
      t.exports = lg().throttle;
    })(),
  ),
  dg = (e, t, n) => {
    var { width: r = `100%`, height: i = `100%`, aspect: a, maxHeight: o } = n,
      s = ru(r) ? e : Number(r),
      c = ru(i) ? t : Number(i);
    return (
      a && a > 0 && (s ? (c = s / a) : c && (s = c * a), o && c > o && (c = o)),
      { calculatedWidth: s, calculatedHeight: c }
    );
  },
  fg = { width: 0, height: 0, overflow: `visible` },
  pg = { width: 0, overflowX: `visible` },
  mg = { height: 0, overflowY: `visible` },
  hg = {},
  gg = (e) => {
    var { width: t, height: n } = e,
      r = ru(t),
      i = ru(n);
    return r && i ? fg : r ? pg : i ? mg : hg;
  };
function _g(e) {
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
function vg(e) {
  return Number.isFinite(e);
}
function yg(e) {
  return typeof e == `number` && e > 0 && Number.isFinite(e);
}
function bg() {
  return (
    (bg = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bg.apply(null, arguments)
  );
}
function xg(e, t) {
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
function Sg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? xg(Object(n), !0).forEach(function (t) {
          Cg(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : xg(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Cg(e, t, n) {
  return (
    (t = wg(t)) in e
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
function wg(e) {
  var t = Tg(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Tg(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Eg = (0, z.createContext)({ width: -1, height: -1 });
function Dg(e) {
  var { children: t, width: n, height: r } = e,
    i = (0, z.useMemo)(() => ({ width: n, height: r }), [n, r]);
  return n <= 0 || r <= 0
    ? null
    : z.createElement(Eg.Provider, { value: i }, t);
}
var Og = () => (0, z.useContext)(Eg),
  kg = (0, z.forwardRef)((e, t) => {
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
      h = (0, z.useRef)(null),
      g = (0, z.useRef)();
    ((g.current = p), (0, z.useImperativeHandle)(t, () => h.current));
    var [_, v] = (0, z.useState)({
        containerWidth: r.width,
        containerHeight: r.height,
      }),
      y = (0, z.useCallback)((e, t) => {
        v((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []);
    (0, z.useEffect)(() => {
      var e = (e) => {
        var t,
          { width: n, height: r } = e[0].contentRect;
        (y(n, r), (t = g.current) == null || t.call(g, n, r));
      };
      u > 0 && (e = (0, ug.default)(e, u, { trailing: !0, leading: !1 }));
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
      { calculatedWidth: S, calculatedHeight: C } = dg(b, x, {
        width: i,
        height: a,
        aspect: n,
        maxHeight: c,
      });
    return z.createElement(
      `div`,
      {
        id: d ? `${d}` : void 0,
        className: W(`recharts-responsive-container`, f),
        style: Sg(
          Sg({}, m),
          {},
          { width: i, height: a, minWidth: o, minHeight: s, maxHeight: c },
        ),
        ref: h,
      },
      z.createElement(
        `div`,
        { style: gg({ width: i, height: a }) },
        z.createElement(Dg, { width: S, height: C }, l),
      ),
    );
  }),
  Ag = (0, z.forwardRef)((e, t) => {
    var n = Og();
    if (yg(n.width) && yg(n.height)) return e.children;
    var { width: r, height: i } = _g({
        width: e.width,
        height: e.height,
        aspect: e.aspect,
      }),
      { calculatedWidth: a, calculatedHeight: o } = dg(void 0, void 0, {
        width: r,
        height: i,
        aspect: e.aspect,
        maxHeight: e.maxHeight,
      });
    return K(a) && K(o)
      ? z.createElement(Dg, { width: a, height: o }, e.children)
      : z.createElement(kg, bg({}, e, { width: r, height: i, ref: t }));
  }),
  jg = () => {
    var e = ig(),
      t = J(tg),
      n = J(og),
      r = J(ag)?.padding;
    return !e || !n || !r
      ? t
      : {
          width: n.width - r.left - r.right,
          height: n.height - r.top - r.bottom,
          x: r.left,
          y: r.top,
        };
  },
  Mg = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    brushBottom: 0,
  },
  Ng = () => J(eg) ?? Mg,
  Pg = () => J(Ih),
  Fg = () => J(Lh),
  Ig = () => J((e) => e.layout.margin),
  X = (e) => e.layout.layoutType,
  Lg = () => J(X),
  Rg = (e) => {
    var t = q(),
      n = ig(),
      { width: r, height: i } = e,
      a = Og(),
      o = r,
      s = i;
    return (
      a && ((o = a.width > 0 ? a.width : r), (s = a.height > 0 ? a.height : i)),
      (0, z.useEffect)(() => {
        !n && yg(o) && yg(s) && t(Bm({ width: o, height: s }));
      }, [t, n, o, s]),
      null
    );
  },
  zg = Jp({
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
          e.payload.push(Xf(t.payload));
        },
        prepare: wp(),
      },
      removeLegendPayload: {
        reducer(e, t) {
          var n = Gf(e).payload.indexOf(Xf(t.payload));
          n > -1 && e.payload.splice(n, 1);
        },
        prepare: wp(),
      },
    },
  }),
  {
    setLegendSize: Bg,
    setLegendSettings: Vg,
    addLegendPayload: Hg,
    removeLegendPayload: Ug,
  } = zg.actions,
  Wg = zg.reducer;
function Gg() {
  return (
    (Gg = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Gg.apply(null, arguments)
  );
}
function Kg(e, t) {
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
function qg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Kg(Object(n), !0).forEach(function (t) {
          Jg(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Kg(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Jg(e, t, n) {
  return (
    (t = Yg(t)) in e
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
function Yg(e) {
  var t = Xg(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Xg(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Zg(e) {
  return Array.isArray(e) && iu(e[0]) && iu(e[1]) ? e.join(` ~ `) : e;
}
var Qg = (e) => {
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
            n = (s ? (0, Pd.default)(a, s) : a).map((e, n) => {
              if (e.type === `none`) return null;
              var i = e.formatter || o || Zg,
                { value: s, name: c } = e,
                l = s,
                u = c;
              if (i) {
                var d = i(s, c, e, n, a);
                if (Array.isArray(d)) [l, u] = d;
                else if (d != null) l = d;
                else return null;
              }
              var f = qg(
                {
                  display: `block`,
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: e.color || `#000`,
                },
                r,
              );
              return z.createElement(
                `li`,
                {
                  className: `recharts-tooltip-item`,
                  key: `tooltip-item-${n}`,
                  style: f,
                },
                iu(u)
                  ? z.createElement(
                      `span`,
                      { className: `recharts-tooltip-item-name` },
                      u,
                    )
                  : null,
                iu(u)
                  ? z.createElement(
                      `span`,
                      { className: `recharts-tooltip-item-separator` },
                      t,
                    )
                  : null,
                z.createElement(
                  `span`,
                  { className: `recharts-tooltip-item-value` },
                  l,
                ),
                z.createElement(
                  `span`,
                  { className: `recharts-tooltip-item-unit` },
                  e.unit || ``,
                ),
              );
            });
          return z.createElement(
            `ul`,
            { className: `recharts-tooltip-item-list`, style: e },
            n,
          );
        }
        return null;
      },
      m = qg(
        {
          margin: 0,
          padding: 10,
          backgroundColor: `#fff`,
          border: `1px solid #ccc`,
          whiteSpace: `nowrap`,
        },
        n,
      ),
      h = qg({ margin: 0 }, i),
      g = !du(u),
      _ = g ? u : ``,
      v = W(`recharts-default-tooltip`, c),
      y = W(`recharts-tooltip-label`, l);
    g && d && a != null && (_ = d(u, a));
    var b = f ? { role: `status`, "aria-live": `assertive` } : {};
    return z.createElement(
      `div`,
      Gg({ className: v, style: m }, b),
      z.createElement(
        `p`,
        { className: y, style: h },
        z.isValidElement(_) ? _ : `${_}`,
      ),
      p(),
    );
  },
  $g = `recharts-tooltip-wrapper`,
  e_ = { visibility: `hidden` };
function t_(e) {
  var { coordinate: t, translateX: n, translateY: r } = e;
  return W($g, {
    [`${$g}-right`]: K(n) && t && K(t.x) && n >= t.x,
    [`${$g}-left`]: K(n) && t && K(t.x) && n < t.x,
    [`${$g}-bottom`]: K(r) && t && K(t.y) && r >= t.y,
    [`${$g}-top`]: K(r) && t && K(t.y) && r < t.y,
  });
}
function n_(e) {
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
  if (a && K(a[r])) return a[r];
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
function r_(e) {
  var { translateX: t, translateY: n, useTranslate3d: r } = e;
  return {
    transform: r
      ? `translate3d(${t}px, ${n}px, 0)`
      : `translate(${t}px, ${n}px)`,
  };
}
function i_(e) {
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
      ? ((u = n_({
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
        (d = n_({
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
        (l = r_({ translateX: u, translateY: d, useTranslate3d: s })))
      : (l = e_),
    {
      cssProperties: l,
      cssClasses: t_({ translateX: u, translateY: d, coordinate: n }),
    }
  );
}
function a_(e, t) {
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
function o_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? a_(Object(n), !0).forEach(function (t) {
          s_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : a_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function s_(e, t, n) {
  return (
    (t = c_(t)) in e
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
function c_(e) {
  var t = l_(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function l_(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var u_ = class extends z.PureComponent {
    constructor() {
      (super(...arguments),
        s_(this, `state`, {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
        }),
        s_(this, `handleKeyDown`, (e) => {
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
        { cssClasses: _, cssProperties: v } = i_({
          allowEscapeViewBox: t,
          coordinate: a,
          offsetTopLeft: c,
          position: l,
          reverseDirection: u,
          tooltipBox: { height: m.height, width: m.width },
          useTranslate3d: d,
          viewBox: f,
        }),
        y = o_(
          o_(
            {},
            g
              ? {}
              : o_(
                  o_(
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
      return z.createElement(
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
  d_ = {
    devToolsEnabled: !1,
    isSsr: !(
      typeof window < `u` &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    ),
  },
  f_ = () => J((e) => e.rootProps.accessibilityLayer);
function p_() {
  return (
    (p_ = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    p_.apply(null, arguments)
  );
}
function m_(e, t) {
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
function h_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? m_(Object(n), !0).forEach(function (t) {
          g_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : m_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function g_(e, t, n) {
  return (
    (t = __(t)) in e
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
function __(e) {
  var t = v_(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function v_(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var y_ = {
    curveBasisClosed: yl,
    curveBasisOpen: xl,
    curveBasis: _l,
    curveBumpX: qc,
    curveBumpY: Jc,
    curveLinearClosed: Cl,
    curveLinear: Vc,
    curveMonotoneX: jl,
    curveMonotoneY: Ml,
    curveNatural: Fl,
    curveStep: Ll,
    curveStepAfter: zl,
    curveStepBefore: Rl,
  },
  b_ = (e) => vg(e.x) && vg(e.y),
  x_ = (e) => e.x,
  S_ = (e) => e.y,
  C_ = (e, t) => {
    if (typeof e == `function`) return e;
    var n = `curve${fu(e)}`;
    return (n === `curveMonotone` || n === `curveBump`) && t
      ? y_[`${n}${t === `vertical` ? `Y` : `X`}`]
      : y_[n] || Vc;
  },
  w_ = (e) => {
    var {
        type: t = `linear`,
        points: n = [],
        baseLine: r,
        layout: i,
        connectNulls: a = !1,
      } = e,
      o = C_(t, i),
      s = a ? n.filter(b_) : n,
      c;
    if (Array.isArray(r)) {
      var l = a ? r.filter((e) => b_(e)) : r,
        u = s.map((e, t) => h_(h_({}, e), {}, { base: l[t] }));
      return (
        (c =
          i === `vertical`
            ? Gc()
                .y(S_)
                .x1(x_)
                .x0((e) => e.base.x)
            : Gc()
                .x(x_)
                .y1(S_)
                .y0((e) => e.base.y)),
        c.defined(b_).curve(o),
        c(u)
      );
    }
    return (
      (c =
        i === `vertical` && K(r)
          ? Gc().y(S_).x1(x_).x0(r)
          : K(r)
            ? Gc().x(x_).y1(S_).y0(r)
            : Wc().x(x_).y(S_)),
      c.defined(b_).curve(o),
      c(s)
    );
  },
  T_ = (e) => {
    var { className: t, points: n, path: r, pathRef: i } = e;
    if ((!n || !n.length) && !r) return null;
    var a = n && n.length ? w_(e) : r;
    return z.createElement(
      `path`,
      p_({}, uc(e), Ou(e), {
        className: W(`recharts-curve`, t),
        d: a === null ? void 0 : a,
        ref: i,
      }),
    );
  },
  E_ = [`x`, `y`, `top`, `left`, `width`, `height`, `className`];
function D_() {
  return (
    (D_ = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    D_.apply(null, arguments)
  );
}
function O_(e, t) {
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
function k_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? O_(Object(n), !0).forEach(function (t) {
          A_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : O_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function A_(e, t, n) {
  return (
    (t = j_(t)) in e
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
function j_(e) {
  var t = M_(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function M_(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function N_(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = P_(e, t);
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
function P_(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var F_ = (e, t, n, r, i, a) => `M${e},${i}v${r}M${a},${t}h${n}`,
  I_ = (e) => {
    var {
        x: t = 0,
        y: n = 0,
        top: r = 0,
        left: i = 0,
        width: a = 0,
        height: o = 0,
        className: s,
      } = e,
      c = N_(e, E_),
      l = k_({ x: t, y: n, top: r, left: i, width: a, height: o }, c);
    return !K(t) || !K(n) || !K(a) || !K(o) || !K(r) || !K(i)
      ? null
      : z.createElement(
          `path`,
          D_({}, fc(l), {
            className: W(`recharts-cross`, s),
            d: F_(t, n, a, o, r, i),
          }),
        );
  };
function L_(e, t, n, r) {
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
function R_(e, t) {
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
function z_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? R_(Object(n), !0).forEach(function (t) {
          B_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : R_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function B_(e, t, n) {
  return (
    (t = V_(t)) in e
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
function V_(e) {
  var t = H_(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function H_(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function U_(e, t) {
  var n = z_({}, e),
    r = t;
  return Object.keys(t).reduce(
    (e, t) => (e[t] === void 0 && r[t] !== void 0 && (e[t] = r[t]), e),
    n,
  );
}
function W_() {}
function G_(e) {
  return e != null;
}
function K_(e, t) {
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
function q_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? K_(Object(n), !0).forEach(function (t) {
          J_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : K_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function J_(e, t, n) {
  return (
    (t = Y_(t)) in e
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
function Y_(e) {
  var t = X_(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function X_(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Z_ = (e) => e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`),
  Q_ = (e, t, n) => e.map((e) => `${Z_(e)} ${t}ms ${n}`).join(`,`),
  $_ = (e, t) =>
    [Object.keys(e), Object.keys(t)].reduce((e, t) =>
      e.filter((e) => t.includes(e)),
    ),
  ev = (e, t) =>
    Object.keys(t).reduce((n, r) => q_(q_({}, n), {}, { [r]: e(r, t[r]) }), {});
function tv(e, t) {
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
function nv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? tv(Object(n), !0).forEach(function (t) {
          rv(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : tv(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function rv(e, t, n) {
  return (
    (t = iv(t)) in e
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
function iv(e) {
  var t = av(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function av(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var ov = (e, t, n) => e + (t - e) * n,
  sv = (e) => {
    var { from: t, to: n } = e;
    return t !== n;
  },
  cv = (e, t, n) => {
    var r = ev((t, n) => {
      if (sv(n)) {
        var [r, i] = e(n.from, n.to, n.velocity);
        return nv(nv({}, n), {}, { from: r, velocity: i });
      }
      return n;
    }, t);
    return n < 1
      ? ev(
          (e, t) =>
            sv(t)
              ? nv(
                  nv({}, t),
                  {},
                  {
                    velocity: ov(t.velocity, r[e].velocity, n),
                    from: ov(t.from, r[e].from, n),
                  },
                )
              : t,
          t,
        )
      : cv(e, r, n - 1);
  };
function lv(e, t, n, r, i, a) {
  var o,
    s = r.reduce(
      (n, r) =>
        nv(nv({}, n), {}, { [r]: { from: e[r], velocity: 0, to: t[r] } }),
      {},
    ),
    c = () => ev((e, t) => t.from, s),
    l = () => !Object.values(s).filter(sv).length,
    u = null,
    d = (r) => {
      o ||= r;
      var f = (r - o) / n.dt;
      ((s = cv(n, s, f)),
        i(nv(nv(nv({}, e), t), c())),
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
function uv(e, t, n, r, i, a, o) {
  var s = null,
    c = i.reduce((n, r) => nv(nv({}, n), {}, { [r]: [e[r], t[r]] }), {}),
    l,
    u = (i) => {
      l ||= i;
      var d = (i - l) / r,
        f = ev((e, t) => ov(...t, n(d)), c);
      if ((a(nv(nv(nv({}, e), t), f)), d < 1)) s = o.setTimeout(u);
      else {
        var p = ev((e, t) => ov(...t, n(1)), c);
        a(nv(nv(nv({}, e), t), p));
      }
    };
  return () => (
    (s = o.setTimeout(u)),
    () => {
      s();
    }
  );
}
var dv = (e, t, n, r, i, a) => {
    var o = $_(e, t);
    return n.isStepper === !0 ? lv(e, t, n, o, i, a) : uv(e, t, n, r, o, i, a);
  },
  fv = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1],
  pv = (e, t) => e.map((e, n) => e * t ** n).reduce((e, t) => e + t),
  mv = (e, t) => (n) => pv(fv(e, t), n),
  hv = (e, t) => (n) =>
    pv(
      [
        ...fv(e, t)
          .map((e, t) => e * t)
          .slice(1),
        0,
      ],
      n,
    ),
  gv = function () {
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
    var o = mv(e, t),
      s = mv(n, r),
      c = hv(e, t),
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
  _v = function () {
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
  vv = (e) => {
    if (typeof e == `string`)
      switch (e) {
        case `ease`:
        case `ease-in-out`:
        case `ease-out`:
        case `ease-in`:
        case `linear`:
          return gv(e);
        case `spring`:
          return _v();
        default:
          if (e.split(`(`)[0] === `cubic-bezier`) return gv(e);
      }
    return typeof e == `function` ? e : null;
  };
function yv(e) {
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
var bv = class {
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
function xv() {
  return yv(new bv());
}
var Sv = (0, z.createContext)(xv);
function Cv(e, t) {
  var n = (0, z.useContext)(Sv);
  return (0, z.useMemo)(() => t ?? n(e), [e, t, n]);
}
var wv = {
    begin: 0,
    duration: 1e3,
    easing: `ease`,
    isActive: !0,
    canBegin: !0,
    onAnimationEnd: () => {},
    onAnimationStart: () => {},
  },
  Tv = { t: 0 },
  Ev = { t: 1 };
function Dv(e) {
  var t = U_(e, wv),
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
    u = Cv(t.animationId, t.animationManager),
    [d, f] = (0, z.useState)(n ? Tv : Ev),
    p = (0, z.useRef)(null);
  return (
    (0, z.useEffect)(() => {
      n || f(Ev);
    }, [n]),
    (0, z.useEffect)(() => {
      if (!n || !r) return W_;
      var e = dv(Tv, Ev, vv(a), i, f, u.getTimeoutController());
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
function Ov(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : `animation-`,
    n = (0, z.useRef)(ou(t)),
    r = (0, z.useRef)(e);
  return (r.current !== e && ((n.current = ou(t)), (r.current = e)), n.current);
}
var kv = [`radius`],
  Av = [`radius`];
function jv(e, t) {
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
function Mv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? jv(Object(n), !0).forEach(function (t) {
          Nv(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : jv(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Nv(e, t, n) {
  return (
    (t = Pv(t)) in e
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
function Pv(e) {
  var t = Fv(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Fv(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Iv() {
  return (
    (Iv = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Iv.apply(null, arguments)
  );
}
function Lv(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Rv(e, t);
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
function Rv(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var zv = (e, t, n, r, i) => {
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
  Bv = {
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
  Vv = (e) => {
    var t = U_(e, Bv),
      n = (0, z.useRef)(null),
      [r, i] = (0, z.useState)(-1);
    (0, z.useEffect)(() => {
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
      g = (0, z.useRef)(s),
      _ = (0, z.useRef)(c),
      v = (0, z.useRef)(a),
      y = (0, z.useRef)(o),
      b = Ov(
        (0, z.useMemo)(
          () => ({ x: a, y: o, width: s, height: c, radius: l }),
          [a, o, s, c, l],
        ),
        `rectangle-`,
      );
    if (a !== +a || o !== +o || s !== +s || c !== +c || s === 0 || c === 0)
      return null;
    var x = W(`recharts-rectangle`, u);
    if (!h) {
      var S = fc(t),
        { radius: C } = S,
        w = Lv(S, kv);
      return z.createElement(
        `path`,
        Iv({}, w, {
          radius: typeof l == `number` ? l : void 0,
          className: x,
          d: zv(a, o, s, c, l),
        }),
      );
    }
    var T = g.current,
      E = _.current,
      D = v.current,
      O = y.current,
      k = `0px ${r === -1 ? 1 : r}px`,
      A = `${r}px 0px`,
      ee = Q_([`strokeDasharray`], f, typeof d == `string` ? d : void 0);
    return z.createElement(
      Dv,
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
        var r = lu(T, s, e),
          i = lu(E, c, e),
          u = lu(D, a, e),
          d = lu(O, o, e);
        n.current &&
          ((g.current = r), (_.current = i), (v.current = u), (y.current = d));
        var f = m
            ? e > 0
              ? { transition: ee, strokeDasharray: A }
              : { strokeDasharray: k }
            : { strokeDasharray: A },
          p = fc(t),
          { radius: h } = p,
          b = Lv(p, Av);
        return z.createElement(
          `path`,
          Iv({}, b, {
            radius: typeof l == `number` ? l : void 0,
            className: x,
            d: zv(u, d, r, i, l),
            ref: n,
            style: Mv(Mv({}, f), t.style),
          }),
        );
      },
    );
  };
function Hv(e) {
  var { cx: t, cy: n, radius: r, startAngle: i, endAngle: a } = e;
  return {
    points: [Zm(t, n, r, i), Zm(t, n, r, a)],
    cx: t,
    cy: n,
    radius: r,
    startAngle: i,
    endAngle: a,
  };
}
function Uv() {
  return (
    (Uv = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Uv.apply(null, arguments)
  );
}
var Wv = (e, t) => tu(t - e) * Math.min(Math.abs(t - e), 359.999),
  Gv = (e) => {
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
      u = Math.asin(s / l) / Jm,
      d = c ? i : i + a * u,
      f = Zm(t, n, l, d),
      p = Zm(t, n, r, d),
      m = c ? i - a * u : i;
    return {
      center: f,
      circleTangency: p,
      lineTangency: Zm(t, n, l * Math.cos(u * Jm), m),
      theta: u,
    };
  },
  Kv = (e) => {
    var {
        cx: t,
        cy: n,
        innerRadius: r,
        outerRadius: i,
        startAngle: a,
        endAngle: o,
      } = e,
      s = Wv(a, o),
      c = a + s,
      l = Zm(t, n, i, a),
      u = Zm(t, n, i, c),
      d = `M ${l.x},${l.y}
    A ${i},${i},0,
    ${+(Math.abs(s) > 180)},${+(a > c)},
    ${u.x},${u.y}
  `;
    if (r > 0) {
      var f = Zm(t, n, r, a),
        p = Zm(t, n, r, c);
      d += `L ${p.x},${p.y}
            A ${r},${r},0,
            ${+(Math.abs(s) > 180)},${+(a <= c)},
            ${f.x},${f.y} Z`;
    } else d += `L ${t},${n} Z`;
    return d;
  },
  qv = (e) => {
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
      u = tu(l - c),
      {
        circleTangency: d,
        lineTangency: f,
        theta: p,
      } = Gv({
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
      } = Gv({
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
        : Kv({
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
        } = Gv({
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
        } = Gv({
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
  Jv = {
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
  Yv = (e) => {
    var t = U_(e, Jv),
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
    var f = W(`recharts-sector`, d),
      p = a - i,
      m = su(o, p, 0, !0),
      h =
        m > 0 && Math.abs(l - u) < 360
          ? qv({
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
          : Kv({
              cx: n,
              cy: r,
              innerRadius: i,
              outerRadius: a,
              startAngle: l,
              endAngle: u,
            });
    return z.createElement(`path`, Uv({}, fc(t), { className: f, d: h }));
  };
function Xv(e, t, n) {
  var r, i, a, o;
  if (e === `horizontal`)
    ((r = t.x), (a = r), (i = n.top), (o = n.top + n.height));
  else if (e === `vertical`)
    ((i = t.y), (o = i), (r = n.left), (a = n.left + n.width));
  else if (t.cx != null && t.cy != null) {
    if (e === `centric`) {
      var { cx: s, cy: c, innerRadius: l, outerRadius: u, angle: d } = t,
        f = Zm(s, c, l, d),
        p = Zm(s, c, u, d);
      ((r = f.x), (i = f.y), (a = p.x), (o = p.y));
    } else return Hv(t);
  }
  return [
    { x: r, y: i },
    { x: a, y: o },
  ];
}
var Zv = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Od();
    function n(e) {
      return t.isSymbol(e) ? NaN : Number(e);
    }
    e.toNumber = n;
  }),
  Qv = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Zv();
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
  $v = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Md(),
      n = Qv();
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
  ey = n((e, t) => {
    t.exports = $v().range;
  });
function ty(e, t) {
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
function ny(e, t) {
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
function ry(e) {
  let t, n, r;
  e.length === 2
    ? ((t = e === ty || e === ny ? e : iy), (n = e), (r = e))
    : ((t = ty), (n = (t, n) => ty(e(t), n)), (r = (t, n) => e(t) - n));
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
function iy() {
  return 0;
}
function ay(e) {
  return e === null ? NaN : +e;
}
function* oy(e, t) {
  if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
  else {
    let n = -1;
    for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
  }
}
var sy = ry(ty),
  cy = sy.right;
(sy.left, ry(ay).center);
var ly = class extends Map {
  constructor(e, t = py) {
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
    return super.get(uy(this, e));
  }
  has(e) {
    return super.has(uy(this, e));
  }
  set(e, t) {
    return super.set(dy(this, e), t);
  }
  delete(e) {
    return super.delete(fy(this, e));
  }
};
function uy({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function dy({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function fy({ _intern: e, _key: t }, n) {
  let r = t(n);
  return (e.has(r) && ((n = e.get(r)), e.delete(r)), n);
}
function py(e) {
  return typeof e == `object` && e ? e.valueOf() : e;
}
function my(e = ty) {
  if (e === ty) return hy;
  if (typeof e != `function`) throw TypeError(`compare is not a function`);
  return (t, n) => {
    let r = e(t, n);
    return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
  };
}
function hy(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : +(e > t))
  );
}
var gy = Math.sqrt(50),
  _y = Math.sqrt(10),
  vy = Math.sqrt(2);
function yy(e, t, n) {
  let r = (t - e) / Math.max(0, n),
    i = Math.floor(Math.log10(r)),
    a = r / 10 ** i,
    o = a >= gy ? 10 : a >= _y ? 5 : a >= vy ? 2 : 1,
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
    c < s && 0.5 <= n && n < 2 ? yy(e, t, n * 2) : [s, c, l]
  );
}
function by(e, t, n) {
  if (((t = +t), (e = +e), (n = +n), !(n > 0))) return [];
  if (e === t) return [e];
  let r = t < e,
    [i, a, o] = r ? yy(t, e, n) : yy(e, t, n);
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
function xy(e, t, n) {
  return ((t = +t), (e = +e), (n = +n), yy(e, t, n)[2]);
}
function Sy(e, t, n) {
  ((t = +t), (e = +e), (n = +n));
  let r = t < e,
    i = r ? xy(t, e, n) : xy(e, t, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Cy(e, t) {
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
function wy(e, t) {
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
function Ty(e, t, n = 0, r = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (n = Math.floor(Math.max(0, n))),
    (r = Math.floor(Math.min(e.length - 1, r))),
    !(n <= t && t <= r))
  )
    return e;
  for (i = i === void 0 ? hy : my(i); r > n;) {
    if (r - n > 600) {
      let a = r - n + 1,
        o = t - n + 1,
        s = Math.log(a),
        c = 0.5 * Math.exp((2 * s) / 3),
        l = 0.5 * Math.sqrt((s * c * (a - c)) / a) * (o - a / 2 < 0 ? -1 : 1),
        u = Math.max(n, Math.floor(t - (o * c) / a + l)),
        d = Math.min(r, Math.floor(t + ((a - o) * c) / a + l));
      Ty(e, t, u, d, i);
    }
    let a = e[t],
      o = n,
      s = r;
    for (Ey(e, n, t), i(e[r], a) > 0 && Ey(e, n, r); o < s;) {
      for (Ey(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
      for (; i(e[s], a) > 0;) --s;
    }
    (i(e[n], a) === 0 ? Ey(e, n, s) : (++s, Ey(e, s, r)),
      s <= t && (n = s + 1),
      t <= s && (r = s - 1));
  }
  return e;
}
function Ey(e, t, n) {
  let r = e[t];
  ((e[t] = e[n]), (e[n] = r));
}
function Dy(e, t, n) {
  if (((e = Float64Array.from(oy(e, n))), (r = e.length) && !isNaN((t = +t)))) {
    if (t <= 0 || r < 2) return wy(e);
    if (t >= 1) return Cy(e);
    var r,
      i = (r - 1) * t,
      a = Math.floor(i),
      o = Cy(Ty(e, a).subarray(0, a + 1));
    return o + (wy(e.subarray(a + 1)) - o) * (i - a);
  }
}
function Oy(e, t, n = ay) {
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
function ky(e, t, n) {
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
function Ay(e, t) {
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
function jy(e, t) {
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
var My = Symbol(`implicit`);
function Ny() {
  var e = new ly(),
    t = [],
    n = [],
    r = My;
  function i(i) {
    let a = e.get(i);
    if (a === void 0) {
      if (r !== My) return r;
      e.set(i, (a = t.push(i) - 1));
    }
    return n[a % n.length];
  }
  return (
    (i.domain = function (n) {
      if (!arguments.length) return t.slice();
      ((t = []), (e = new ly()));
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
      return Ny(t, n).unknown(r);
    }),
    Ay.apply(i, arguments),
    i
  );
}
function Py() {
  var e = Ny().unknown(void 0),
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
    var m = ky(e).map(function (e) {
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
      return Py(t(), [r, i]).round(s).paddingInner(c).paddingOuter(l).align(u);
    }),
    Ay.apply(d(), arguments)
  );
}
function Fy(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return Fy(t());
    }),
    e
  );
}
function Iy() {
  return Fy(Py.apply(null, arguments).paddingInner(1));
}
function Ly(e, t, n) {
  ((e.prototype = t.prototype = n), (n.constructor = e));
}
function Ry(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function zy() {}
var By = 0.7,
  Vy = 1 / By,
  Hy = `\\s*([+-]?\\d+)\\s*`,
  Uy = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,
  Wy = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,
  Gy = /^#([0-9a-f]{3,8})$/,
  Ky = RegExp(`^rgb\\(${Hy},${Hy},${Hy}\\)$`),
  qy = RegExp(`^rgb\\(${Wy},${Wy},${Wy}\\)$`),
  Jy = RegExp(`^rgba\\(${Hy},${Hy},${Hy},${Uy}\\)$`),
  Yy = RegExp(`^rgba\\(${Wy},${Wy},${Wy},${Uy}\\)$`),
  Xy = RegExp(`^hsl\\(${Uy},${Wy},${Wy}\\)$`),
  Zy = RegExp(`^hsla\\(${Uy},${Wy},${Wy},${Uy}\\)$`),
  Qy = {
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
Ly(zy, rb, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: $y,
  formatHex: $y,
  formatHex8: eb,
  formatHsl: tb,
  formatRgb: nb,
  toString: nb,
});
function $y() {
  return this.rgb().formatHex();
}
function eb() {
  return this.rgb().formatHex8();
}
function tb() {
  return gb(this).formatHsl();
}
function nb() {
  return this.rgb().formatRgb();
}
function rb(e) {
  var t, n;
  return (
    (e = (e + ``).trim().toLowerCase()),
    (t = Gy.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? ib(t)
          : n === 3
            ? new cb(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : n === 8
              ? ab(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : n === 4
                ? ab(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = Ky.exec(e))
        ? new cb(t[1], t[2], t[3], 1)
        : (t = qy.exec(e))
          ? new cb(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = Jy.exec(e))
            ? ab(t[1], t[2], t[3], t[4])
            : (t = Yy.exec(e))
              ? ab(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = Xy.exec(e))
                ? hb(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = Zy.exec(e))
                  ? hb(t[1], t[2] / 100, t[3] / 100, t[4])
                  : Qy.hasOwnProperty(e)
                    ? ib(Qy[e])
                    : e === `transparent`
                      ? new cb(NaN, NaN, NaN, 0)
                      : null
  );
}
function ib(e) {
  return new cb((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function ab(e, t, n, r) {
  return (r <= 0 && (e = t = n = NaN), new cb(e, t, n, r));
}
function ob(e) {
  return (
    e instanceof zy || (e = rb(e)),
    e ? ((e = e.rgb()), new cb(e.r, e.g, e.b, e.opacity)) : new cb()
  );
}
function sb(e, t, n, r) {
  return arguments.length === 1 ? ob(e) : new cb(e, t, n, r ?? 1);
}
function cb(e, t, n, r) {
  ((this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r));
}
Ly(
  cb,
  sb,
  Ry(zy, {
    brighter(e) {
      return (
        (e = e == null ? Vy : Vy ** +e),
        new cb(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? By : By ** +e),
        new cb(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new cb(pb(this.r), pb(this.g), pb(this.b), fb(this.opacity));
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
    hex: lb,
    formatHex: lb,
    formatHex8: ub,
    formatRgb: db,
    toString: db,
  }),
);
function lb() {
  return `#${mb(this.r)}${mb(this.g)}${mb(this.b)}`;
}
function ub() {
  return `#${mb(this.r)}${mb(this.g)}${mb(this.b)}${mb((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function db() {
  let e = fb(this.opacity);
  return `${e === 1 ? `rgb(` : `rgba(`}${pb(this.r)}, ${pb(this.g)}, ${pb(this.b)}${e === 1 ? `)` : `, ${e})`}`;
}
function fb(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function pb(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function mb(e) {
  return ((e = pb(e)), (e < 16 ? `0` : ``) + e.toString(16));
}
function hb(e, t, n, r) {
  return (
    r <= 0
      ? (e = t = n = NaN)
      : n <= 0 || n >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new vb(e, t, n, r)
  );
}
function gb(e) {
  if (e instanceof vb) return new vb(e.h, e.s, e.l, e.opacity);
  if ((e instanceof zy || (e = rb(e)), !e)) return new vb();
  if (e instanceof vb) return e;
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
    new vb(o, s, c, e.opacity)
  );
}
function _b(e, t, n, r) {
  return arguments.length === 1 ? gb(e) : new vb(e, t, n, r ?? 1);
}
function vb(e, t, n, r) {
  ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
}
Ly(
  vb,
  _b,
  Ry(zy, {
    brighter(e) {
      return (
        (e = e == null ? Vy : Vy ** +e),
        new vb(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? By : By ** +e),
        new vb(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        i = 2 * n - r;
      return new cb(
        xb(e >= 240 ? e - 240 : e + 120, i, r),
        xb(e, i, r),
        xb(e < 120 ? e + 240 : e - 120, i, r),
        this.opacity,
      );
    },
    clamp() {
      return new vb(yb(this.h), bb(this.s), bb(this.l), fb(this.opacity));
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
      let e = fb(this.opacity);
      return `${e === 1 ? `hsl(` : `hsla(`}${yb(this.h)}, ${bb(this.s) * 100}%, ${bb(this.l) * 100}%${e === 1 ? `)` : `, ${e})`}`;
    },
  }),
);
function yb(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function bb(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function xb(e, t, n) {
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
var Sb = (e) => () => e;
function Cb(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function wb(e, t, n) {
  return (
    (e **= +n),
    (t = t ** +n - e),
    (n = 1 / n),
    function (r) {
      return (e + r * t) ** +n;
    }
  );
}
function Tb(e) {
  return (e = +e) == 1
    ? Eb
    : function (t, n) {
        return n - t ? wb(t, n, e) : Sb(isNaN(t) ? n : t);
      };
}
function Eb(e, t) {
  var n = t - e;
  return n ? Cb(e, n) : Sb(isNaN(e) ? t : e);
}
var Db = (function e(t) {
  var n = Tb(t);
  function r(e, t) {
    var r = n((e = sb(e)).r, (t = sb(t)).r),
      i = n(e.g, t.g),
      a = n(e.b, t.b),
      o = Eb(e.opacity, t.opacity);
    return function (t) {
      return (
        (e.r = r(t)), (e.g = i(t)), (e.b = a(t)), (e.opacity = o(t)), e + ``
      );
    };
  }
  return ((r.gamma = e), r);
})(1);
function Ob(e, t) {
  t ||= [];
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
    return r;
  };
}
function kb(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Ab(e, t) {
  for (
    var n = t ? t.length : 0,
      r = e ? Math.min(n, e.length) : 0,
      i = Array(r),
      a = Array(n),
      o = 0;
    o < r;
    ++o
  )
    i[o] = zb(e[o], t[o]);
  for (; o < n; ++o) a[o] = t[o];
  return function (e) {
    for (o = 0; o < r; ++o) a[o] = i[o](e);
    return a;
  };
}
function jb(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return (n.setTime(e * (1 - r) + t * r), n);
    }
  );
}
function Mb(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function Nb(e, t) {
  var n = {},
    r = {},
    i;
  for (i in ((typeof e == `object` && e) || (e = {}),
  (typeof t == `object` && t) || (t = {}),
  t))
    i in e ? (n[i] = zb(e[i], t[i])) : (r[i] = t[i]);
  return function (e) {
    for (i in n) r[i] = n[i](e);
    return r;
  };
}
var Pb = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Fb = new RegExp(Pb.source, `g`);
function Ib(e) {
  return function () {
    return e;
  };
}
function Lb(e) {
  return function (t) {
    return e(t) + ``;
  };
}
function Rb(e, t) {
  var n = (Pb.lastIndex = Fb.lastIndex = 0),
    r,
    i,
    a,
    o = -1,
    s = [],
    c = [];
  for (e += ``, t += ``; (r = Pb.exec(e)) && (i = Fb.exec(t));)
    ((a = i.index) > n &&
      ((a = t.slice(n, a)), s[o] ? (s[o] += a) : (s[++o] = a)),
      (r = r[0]) === (i = i[0])
        ? s[o]
          ? (s[o] += i)
          : (s[++o] = i)
        : ((s[++o] = null), c.push({ i: o, x: Mb(r, i) })),
      (n = Fb.lastIndex));
  return (
    n < t.length && ((a = t.slice(n)), s[o] ? (s[o] += a) : (s[++o] = a)),
    s.length < 2
      ? c[0]
        ? Lb(c[0].x)
        : Ib(t)
      : ((t = c.length),
        function (e) {
          for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
          return s.join(``);
        })
  );
}
function zb(e, t) {
  var n = typeof t,
    r;
  return t == null || n === `boolean`
    ? Sb(t)
    : (n === `number`
        ? Mb
        : n === `string`
          ? (r = rb(t))
            ? ((t = r), Db)
            : Rb
          : t instanceof rb
            ? Db
            : t instanceof Date
              ? jb
              : kb(t)
                ? Ob
                : Array.isArray(t)
                  ? Ab
                  : (typeof t.valueOf != `function` &&
                        typeof t.toString != `function`) ||
                      isNaN(t)
                    ? Nb
                    : Mb)(e, t);
}
function Bb(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
function Vb(e, t) {
  t === void 0 && ((t = e), (e = zb));
  for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;)
    a[n] = e(i, (i = t[++n]));
  return function (e) {
    var t = Math.max(0, Math.min(r - 1, Math.floor((e *= r))));
    return a[t](e - t);
  };
}
function Hb(e) {
  return function () {
    return e;
  };
}
function Ub(e) {
  return +e;
}
var Wb = [0, 1];
function Gb(e) {
  return e;
}
function Kb(e, t) {
  return (t -= e = +e)
    ? function (n) {
        return (n - e) / t;
      }
    : Hb(isNaN(t) ? NaN : 0.5);
}
function qb(e, t) {
  var n;
  return (
    e > t && ((n = e), (e = t), (t = n)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function Jb(e, t, n) {
  var r = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < r ? ((r = Kb(i, r)), (a = n(o, a))) : ((r = Kb(r, i)), (a = n(a, o))),
    function (e) {
      return a(r(e));
    }
  );
}
function Yb(e, t, n) {
  var r = Math.min(e.length, t.length) - 1,
    i = Array(r),
    a = Array(r),
    o = -1;
  for (
    e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < r;
  )
    ((i[o] = Kb(e[o], e[o + 1])), (a[o] = n(t[o], t[o + 1])));
  return function (t) {
    var n = cy(e, t, 1, r) - 1;
    return a[n](i[n](t));
  };
}
function Xb(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function Zb() {
  var e = Wb,
    t = Wb,
    n = zb,
    r,
    i,
    a,
    o = Gb,
    s,
    c,
    l;
  function u() {
    var n = Math.min(e.length, t.length);
    return (
      o !== Gb && (o = qb(e[0], e[n - 1])),
      (s = n > 2 ? Yb : Jb),
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
      return o(i((l ||= s(t, e.map(r), Mb))(n)));
    }),
    (d.domain = function (t) {
      return arguments.length ? ((e = Array.from(t, Ub)), u()) : e.slice();
    }),
    (d.range = function (e) {
      return arguments.length ? ((t = Array.from(e)), u()) : t.slice();
    }),
    (d.rangeRound = function (e) {
      return ((t = Array.from(e)), (n = Bb), u());
    }),
    (d.clamp = function (e) {
      return arguments.length ? ((o = e ? !0 : Gb), u()) : o !== Gb;
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
function Qb() {
  return Zb()(Gb, Gb);
}
function $b(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString(`en`).replace(/,/g, ``)
    : e.toString(10);
}
function ex(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(`e`),
    r = e.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
function tx(e) {
  return ((e = ex(Math.abs(e))), e ? e[1] : NaN);
}
function nx(e, t) {
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
function rx(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (t) {
      return e[+t];
    });
  };
}
var ix =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ax(e) {
  if (!(t = ix.exec(e))) throw Error(`invalid format: ` + e);
  var t;
  return new ox({
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
ax.prototype = ox.prototype;
function ox(e) {
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
ox.prototype.toString = function () {
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
function sx(e) {
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
var cx;
function lx(e, t) {
  var n = ex(e, t);
  if (!n) return ((cx = void 0), e.toPrecision(t));
  var r = n[0],
    i = n[1],
    a = i - (cx = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = r.length;
  return a === o
    ? r
    : a > o
      ? r + Array(a - o + 1).join(`0`)
      : a > 0
        ? r.slice(0, a) + `.` + r.slice(a)
        : `0.` + Array(1 - a).join(`0`) + ex(e, Math.max(0, t + a - 1))[0];
}
function ux(e, t) {
  var n = ex(e, t);
  if (!n) return e + ``;
  var r = n[0],
    i = n[1];
  return i < 0
    ? `0.` + Array(-i).join(`0`) + r
    : r.length > i + 1
      ? r.slice(0, i + 1) + `.` + r.slice(i + 1)
      : r + Array(i - r.length + 2).join(`0`);
}
var dx = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + ``,
  d: $b,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ux(e * 100, t),
  r: ux,
  s: lx,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function fx(e) {
  return e;
}
var px = Array.prototype.map,
  mx = [
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
function hx(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? fx
        : nx(px.call(e.grouping, Number), e.thousands + ``),
    n = e.currency === void 0 ? `` : e.currency[0] + ``,
    r = e.currency === void 0 ? `` : e.currency[1] + ``,
    i = e.decimal === void 0 ? `.` : e.decimal + ``,
    a = e.numerals === void 0 ? fx : rx(px.call(e.numerals, String)),
    o = e.percent === void 0 ? `%` : e.percent + ``,
    s = e.minus === void 0 ? `−` : e.minus + ``,
    c = e.nan === void 0 ? `NaN` : e.nan + ``;
  function l(e, l) {
    e = ax(e);
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
      : dx[y] || (_ === void 0 && (_ = 12), (v = !0), (y = `g`)),
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
      S = dx[y],
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
          v && (e = sx(e)),
          w && +e == 0 && f !== `+` && (w = !1),
          (n = (w ? (f === `(` ? f : s) : f === `-` || f === `(` ? `` : f) + n),
          (r =
            (y === `s` && !isNaN(e) && cx !== void 0 ? mx[8 + cx / 3] : ``) +
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
    var n = Math.max(-8, Math.min(8, Math.floor(tx(t) / 3))) * 3,
      r = 10 ** -n,
      i = l(((e = ax(e)), (e.type = `f`), e), { suffix: mx[8 + n / 3] });
    return function (e) {
      return i(r * e);
    };
  }
  return { format: l, formatPrefix: u };
}
var gx, _x, vx;
yx({ thousands: `,`, grouping: [3], currency: [`$`, ``] });
function yx(e) {
  return ((gx = hx(e)), (_x = gx.format), (vx = gx.formatPrefix), gx);
}
function bx(e) {
  return Math.max(0, -tx(Math.abs(e)));
}
function xx(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(tx(t) / 3))) * 3 - tx(Math.abs(e)),
  );
}
function Sx(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, tx(t) - tx(e)) + 1
  );
}
function Cx(e, t, n, r) {
  var i = Sy(e, t, n),
    a;
  switch (((r = ax(r ?? `,f`)), r.type)) {
    case `s`:
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        r.precision == null && !isNaN((a = xx(i, o))) && (r.precision = a),
        vx(r, o)
      );
    case ``:
    case `e`:
    case `g`:
    case `p`:
    case `r`:
      r.precision == null &&
        !isNaN((a = Sx(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (r.precision = a - (r.type === `e`));
      break;
    case `f`:
    case `%`:
      r.precision == null &&
        !isNaN((a = bx(i))) &&
        (r.precision = a - (r.type === `%`) * 2);
  }
  return _x(r);
}
function wx(e) {
  var t = e.domain;
  return (
    (e.ticks = function (e) {
      var n = t();
      return by(n[0], n[n.length - 1], e ?? 10);
    }),
    (e.tickFormat = function (e, n) {
      var r = t();
      return Cx(r[0], r[r.length - 1], e ?? 10, n);
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
        if (((l = xy(o, s, n)), l === c)) return ((r[i] = o), (r[a] = s), t(r));
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
function Tx() {
  var e = Qb();
  return (
    (e.copy = function () {
      return Xb(e, Tx());
    }),
    Ay.apply(e, arguments),
    wx(e)
  );
}
function Ex(e) {
  var t;
  function n(e) {
    return e == null || isNaN((e = +e)) ? t : e;
  }
  return (
    (n.invert = n),
    (n.domain = n.range =
      function (t) {
        return arguments.length ? ((e = Array.from(t, Ub)), n) : e.slice();
      }),
    (n.unknown = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.copy = function () {
      return Ex(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, Ub) : [0, 1]),
    wx(n)
  );
}
function Dx(e, t) {
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
function Ox(e) {
  return Math.log(e);
}
function kx(e) {
  return Math.exp(e);
}
function Ax(e) {
  return -Math.log(-e);
}
function jx(e) {
  return -Math.exp(-e);
}
function Mx(e) {
  return isFinite(e) ? +(`1e` + e) : e < 0 ? 0 : e;
}
function Nx(e) {
  return e === 10 ? Mx : e === Math.E ? Math.exp : (t) => e ** +t;
}
function Px(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function Fx(e) {
  return (t, n) => -e(-t, n);
}
function Ix(e) {
  let t = e(Ox, kx),
    n = t.domain,
    r = 10,
    i,
    a;
  function o() {
    return (
      (i = Px(r)),
      (a = Nx(r)),
      n()[0] < 0 ? ((i = Fx(i)), (a = Fx(a)), e(Ax, jx)) : e(Ox, kx),
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
        m.length * 2 < p && (m = by(o, s, p));
      } else m = by(l, u, Math.min(u - l, p)).map(a);
      return c ? m.reverse() : m;
    }),
    (t.tickFormat = (e, n) => {
      if (
        ((e ??= 10),
        (n ??= r === 10 ? `s` : `,`),
        typeof n != `function` &&
          (!(r % 1) && (n = ax(n)).precision == null && (n.trim = !0),
          (n = _x(n))),
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
        Dx(n(), {
          floor: (e) => a(Math.floor(i(e))),
          ceil: (e) => a(Math.ceil(i(e))),
        }),
      )),
    t
  );
}
function Lx() {
  let e = Ix(Zb()).domain([1, 10]);
  return (
    (e.copy = () => Xb(e, Lx()).base(e.base())), Ay.apply(e, arguments), e
  );
}
function Rx(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function zx(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Bx(e) {
  var t = 1,
    n = e(Rx(t), zx(t));
  return (
    (n.constant = function (n) {
      return arguments.length ? e(Rx((t = +n)), zx(t)) : t;
    }),
    wx(n)
  );
}
function Vx() {
  var e = Bx(Zb());
  return (
    (e.copy = function () {
      return Xb(e, Vx()).constant(e.constant());
    }),
    Ay.apply(e, arguments)
  );
}
function Hx(e) {
  return function (t) {
    return t < 0 ? -((-t) ** +e) : t ** +e;
  };
}
function Ux(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Wx(e) {
  return e < 0 ? -e * e : e * e;
}
function Gx(e) {
  var t = e(Gb, Gb),
    n = 1;
  function r() {
    return n === 1 ? e(Gb, Gb) : n === 0.5 ? e(Ux, Wx) : e(Hx(n), Hx(1 / n));
  }
  return (
    (t.exponent = function (e) {
      return arguments.length ? ((n = +e), r()) : n;
    }),
    wx(t)
  );
}
function Kx() {
  var e = Gx(Zb());
  return (
    (e.copy = function () {
      return Xb(e, Kx()).exponent(e.exponent());
    }),
    Ay.apply(e, arguments),
    e
  );
}
function qx() {
  return Kx.apply(null, arguments).exponent(0.5);
}
function Jx(e) {
  return Math.sign(e) * e * e;
}
function Yx(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Xx() {
  var e = Qb(),
    t = [0, 1],
    n = !1,
    r;
  function i(t) {
    var i = Yx(e(t));
    return isNaN(i) ? r : n ? Math.round(i) : i;
  }
  return (
    (i.invert = function (t) {
      return e.invert(Jx(t));
    }),
    (i.domain = function (t) {
      return arguments.length ? (e.domain(t), i) : e.domain();
    }),
    (i.range = function (n) {
      return arguments.length
        ? (e.range((t = Array.from(n, Ub)).map(Jx)), i)
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
      return Xx(e.domain(), t).round(n).clamp(e.clamp()).unknown(r);
    }),
    Ay.apply(i, arguments),
    wx(i)
  );
}
function Zx() {
  var e = [],
    t = [],
    n = [],
    r;
  function i() {
    var r = 0,
      i = Math.max(1, t.length);
    for (n = Array(i - 1); ++r < i;) n[r - 1] = Oy(e, r / i);
    return a;
  }
  function a(e) {
    return e == null || isNaN((e = +e)) ? r : t[cy(n, e)];
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
      return (e.sort(ty), i());
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
      return Zx().domain(e).range(t).unknown(r);
    }),
    Ay.apply(a, arguments)
  );
}
function Qx() {
  var e = 0,
    t = 1,
    n = 1,
    r = [0.5],
    i = [0, 1],
    a;
  function o(e) {
    return e != null && e <= e ? i[cy(r, e, 0, n)] : a;
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
      return Qx().domain([e, t]).range(i).unknown(a);
    }),
    Ay.apply(wx(o), arguments)
  );
}
function $x() {
  var e = [0.5],
    t = [0, 1],
    n,
    r = 1;
  function i(i) {
    return i != null && i <= i ? t[cy(e, i, 0, r)] : n;
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
      return $x().domain(e).range(t).unknown(n);
    }),
    Ay.apply(i, arguments)
  );
}
var eS = new Date(),
  tS = new Date();
function nS(e, t, n, r) {
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
      nS(
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
        eS.setTime(+t),
        tS.setTime(+r),
        e(eS),
        e(tS),
        Math.floor(n(eS, tS))
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
var rS = nS(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
((rS.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? nS(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, n) => {
            t.setTime(+t + n * e);
          },
          (t, n) => (n - t) / e,
        )
      : rS
)),
  rS.range);
var iS = 1e3,
  aS = iS * 60,
  oS = aS * 60,
  sS = oS * 24,
  cS = sS * 7,
  lS = sS * 30,
  uS = sS * 365,
  dS = nS(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * iS);
    },
    (e, t) => (t - e) / iS,
    (e) => e.getUTCSeconds(),
  );
dS.range;
var fS = nS(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * iS);
  },
  (e, t) => {
    e.setTime(+e + t * aS);
  },
  (e, t) => (t - e) / aS,
  (e) => e.getMinutes(),
);
fS.range;
var pS = nS(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * aS);
  },
  (e, t) => (t - e) / aS,
  (e) => e.getUTCMinutes(),
);
pS.range;
var mS = nS(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * iS - e.getMinutes() * aS,
    );
  },
  (e, t) => {
    e.setTime(+e + t * oS);
  },
  (e, t) => (t - e) / oS,
  (e) => e.getHours(),
);
mS.range;
var hS = nS(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * oS);
  },
  (e, t) => (t - e) / oS,
  (e) => e.getUTCHours(),
);
hS.range;
var gS = nS(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * aS) / sS,
  (e) => e.getDate() - 1,
);
gS.range;
var _S = nS(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / sS,
  (e) => e.getUTCDate() - 1,
);
_S.range;
var vS = nS(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / sS,
  (e) => Math.floor(e / sS),
);
vS.range;
function yS(e) {
  return nS(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setDate(e.getDate() + t * 7);
    },
    (e, t) =>
      (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * aS) / cS,
  );
}
var bS = yS(0),
  xS = yS(1),
  SS = yS(2),
  CS = yS(3),
  wS = yS(4),
  TS = yS(5),
  ES = yS(6);
(bS.range, xS.range, SS.range, CS.range, wS.range, TS.range, ES.range);
function DS(e) {
  return nS(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setUTCDate(e.getUTCDate() + t * 7);
    },
    (e, t) => (t - e) / cS,
  );
}
var OS = DS(0),
  kS = DS(1),
  AS = DS(2),
  jS = DS(3),
  MS = DS(4),
  NS = DS(5),
  PS = DS(6);
(OS.range, kS.range, AS.range, jS.range, MS.range, NS.range, PS.range);
var FS = nS(
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
FS.range;
var IS = nS(
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
IS.range;
var LS = nS(
  (e) => {
    (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
((LS.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : nS(
        (t) => {
          (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setFullYear(t.getFullYear() + n * e);
        },
      )),
  LS.range);
var RS = nS(
  (e) => {
    (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
((RS.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : nS(
        (t) => {
          (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setUTCFullYear(t.getUTCFullYear() + n * e);
        },
      )),
  RS.range);
function zS(e, t, n, r, i, a) {
  let o = [
    [dS, 1, iS],
    [dS, 5, 5 * iS],
    [dS, 15, 15 * iS],
    [dS, 30, 30 * iS],
    [a, 1, aS],
    [a, 5, 5 * aS],
    [a, 15, 15 * aS],
    [a, 30, 30 * aS],
    [i, 1, oS],
    [i, 3, 3 * oS],
    [i, 6, 6 * oS],
    [i, 12, 12 * oS],
    [r, 1, sS],
    [r, 2, 2 * sS],
    [n, 1, cS],
    [t, 1, lS],
    [t, 3, 3 * lS],
    [e, 1, uS],
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
      a = ry(([, , e]) => e).right(o, i);
    if (a === o.length) return e.every(Sy(t / uS, n / uS, r));
    if (a === 0) return rS.every(Math.max(Sy(t, n, r), 1));
    let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
    return s.every(c);
  }
  return [s, c];
}
var [BS, VS] = zS(RS, IS, OS, vS, hS, pS),
  [HS, US] = zS(LS, FS, bS, gS, mS, fS);
function WS(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function GS(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function KS(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function qS(e) {
  var t = e.dateTime,
    n = e.date,
    r = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    s = e.months,
    c = e.shortMonths,
    l = $S(i),
    u = eC(i),
    d = $S(a),
    f = eC(a),
    p = $S(o),
    m = eC(o),
    h = $S(s),
    g = eC(s),
    _ = $S(c),
    v = eC(c),
    y = {
      a: M,
      A: te,
      b: ne,
      B: re,
      c: null,
      d: xC,
      e: xC,
      f: EC,
      g: LC,
      G: zC,
      H: SC,
      I: CC,
      j: wC,
      L: TC,
      m: DC,
      M: OC,
      p: ie,
      q: ae,
      Q: cw,
      s: lw,
      S: kC,
      u: AC,
      U: jC,
      V: NC,
      w: PC,
      W: FC,
      x: null,
      X: null,
      y: IC,
      Y: RC,
      Z: BC,
      "%": sw,
    },
    b = {
      a: oe,
      A: se,
      b: ce,
      B: le,
      c: null,
      d: VC,
      e: VC,
      f: KC,
      g: rw,
      G: aw,
      H: HC,
      I: UC,
      j: WC,
      L: GC,
      m: qC,
      M: JC,
      p: ue,
      q: de,
      Q: cw,
      s: lw,
      S: YC,
      u: XC,
      U: ZC,
      V: $C,
      w: ew,
      W: tw,
      x: null,
      X: null,
      y: nw,
      Y: iw,
      Z: ow,
      "%": sw,
    },
    x = {
      a: E,
      A: D,
      b: O,
      B: k,
      c: A,
      d: dC,
      e: dC,
      f: _C,
      g: sC,
      G: oC,
      H: pC,
      I: pC,
      j: fC,
      L: gC,
      m: uC,
      M: mC,
      p: T,
      q: lC,
      Q: yC,
      s: bC,
      S: hC,
      u: nC,
      U: rC,
      V: iC,
      w: tC,
      W: aC,
      x: ee,
      X: j,
      y: sC,
      Y: oC,
      Z: cC,
      "%": vC,
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
          (c = JS[(s = e.charAt(++i))]) == null
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
      var r = KS(1900, void 0, 1),
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
            ? ((a = GS(KS(r.y, 0, 1))),
              (o = a.getUTCDay()),
              (a = o > 4 || o === 0 ? kS.ceil(a) : kS(a)),
              (a = _S.offset(a, (r.V - 1) * 7)),
              (r.y = a.getUTCFullYear()),
              (r.m = a.getUTCMonth()),
              (r.d = a.getUTCDate() + ((r.w + 6) % 7)))
            : ((a = WS(KS(r.y, 0, 1))),
              (o = a.getDay()),
              (a = o > 4 || o === 0 ? xS.ceil(a) : xS(a)),
              (a = gS.offset(a, (r.V - 1) * 7)),
              (r.y = a.getFullYear()),
              (r.m = a.getMonth()),
              (r.d = a.getDate() + ((r.w + 6) % 7))));
      } else
        (`W` in r || `U` in r) &&
          (`w` in r || (r.w = `u` in r ? r.u % 7 : +(`W` in r)),
          (o =
            `Z` in r
              ? GS(KS(r.y, 0, 1)).getUTCDay()
              : WS(KS(r.y, 0, 1)).getDay()),
          (r.m = 0),
          (r.d =
            `W` in r
              ? ((r.w + 6) % 7) + r.W * 7 - ((o + 5) % 7)
              : r.w + r.U * 7 - ((o + 6) % 7)));
      return `Z` in r
        ? ((r.H += (r.Z / 100) | 0), (r.M += r.Z % 100), GS(r))
        : WS(r);
    };
  }
  function w(e, t, n, r) {
    for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
      if (r >= o) return -1;
      if (((s = t.charCodeAt(i++)), s === 37)) {
        if (
          ((s = t.charAt(i++)),
          (c = x[s in JS ? t.charAt(i++) : s]),
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
  function A(e, n, r) {
    return w(e, t, n, r);
  }
  function ee(e, t, r) {
    return w(e, n, t, r);
  }
  function j(e, t, n) {
    return w(e, r, t, n);
  }
  function M(e) {
    return o[e.getDay()];
  }
  function te(e) {
    return a[e.getDay()];
  }
  function ne(e) {
    return c[e.getMonth()];
  }
  function re(e) {
    return s[e.getMonth()];
  }
  function ie(e) {
    return i[+(e.getHours() >= 12)];
  }
  function ae(e) {
    return 1 + ~~(e.getMonth() / 3);
  }
  function oe(e) {
    return o[e.getUTCDay()];
  }
  function se(e) {
    return a[e.getUTCDay()];
  }
  function ce(e) {
    return c[e.getUTCMonth()];
  }
  function le(e) {
    return s[e.getUTCMonth()];
  }
  function ue(e) {
    return i[+(e.getUTCHours() >= 12)];
  }
  function de(e) {
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
var JS = { "-": ``, _: ` `, 0: `0` },
  YS = /^\s*\d+/,
  XS = /^%/,
  ZS = /[\\^$*+?|[\]().{}]/g;
function Z(e, t, n) {
  var r = e < 0 ? `-` : ``,
    i = (r ? -e : e) + ``,
    a = i.length;
  return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function QS(e) {
  return e.replace(ZS, `\\$&`);
}
function $S(e) {
  return RegExp(`^(?:` + e.map(QS).join(`|`) + `)`, `i`);
}
function eC(e) {
  return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function tC(e, t, n) {
  var r = YS.exec(t.slice(n, n + 1));
  return r ? ((e.w = +r[0]), n + r[0].length) : -1;
}
function nC(e, t, n) {
  var r = YS.exec(t.slice(n, n + 1));
  return r ? ((e.u = +r[0]), n + r[0].length) : -1;
}
function rC(e, t, n) {
  var r = YS.exec(t.slice(n, n + 2));
  return r ? ((e.U = +r[0]), n + r[0].length) : -1;
}
function iC(e, t, n) {
  var r = YS.exec(t.slice(n, n + 2));
  return r ? ((e.V = +r[0]), n + r[0].length) : -1;
}
function aC(e, t, n) {
  var r = YS.exec(t.slice(n, n + 2));
  return r ? ((e.W = +r[0]), n + r[0].length) : -1;
}
function oC(e, t, n) {
  var r = YS.exec(t.slice(n, n + 4));
  return r ? ((e.y = +r[0]), n + r[0].length) : -1;
}
function sC(e, t, n) {
  var r = YS.exec(t.slice(n, n + 2));
  return r ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
}
function cC(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r
    ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || `00`))), n + r[0].length)
    : -1;
}
function lC(e, t, n) {
  var r = YS.exec(t.slice(n, n + 1));
  return r ? ((e.q = r[0] * 3 - 3), n + r[0].length) : -1;
}
function uC(e, t, n) {
  var r = YS.exec(t.slice(n, n + 2));
  return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
}
function dC(e, t, n) {
  var r = YS.exec(t.slice(n, n + 2));
  return r ? ((e.d = +r[0]), n + r[0].length) : -1;
}
function fC(e, t, n) {
  var r = YS.exec(t.slice(n, n + 3));
  return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
}
function pC(e, t, n) {
  var r = YS.exec(t.slice(n, n + 2));
  return r ? ((e.H = +r[0]), n + r[0].length) : -1;
}
function mC(e, t, n) {
  var r = YS.exec(t.slice(n, n + 2));
  return r ? ((e.M = +r[0]), n + r[0].length) : -1;
}
function hC(e, t, n) {
  var r = YS.exec(t.slice(n, n + 2));
  return r ? ((e.S = +r[0]), n + r[0].length) : -1;
}
function gC(e, t, n) {
  var r = YS.exec(t.slice(n, n + 3));
  return r ? ((e.L = +r[0]), n + r[0].length) : -1;
}
function _C(e, t, n) {
  var r = YS.exec(t.slice(n, n + 6));
  return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
}
function vC(e, t, n) {
  var r = XS.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function yC(e, t, n) {
  var r = YS.exec(t.slice(n));
  return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
}
function bC(e, t, n) {
  var r = YS.exec(t.slice(n));
  return r ? ((e.s = +r[0]), n + r[0].length) : -1;
}
function xC(e, t) {
  return Z(e.getDate(), t, 2);
}
function SC(e, t) {
  return Z(e.getHours(), t, 2);
}
function CC(e, t) {
  return Z(e.getHours() % 12 || 12, t, 2);
}
function wC(e, t) {
  return Z(1 + gS.count(LS(e), e), t, 3);
}
function TC(e, t) {
  return Z(e.getMilliseconds(), t, 3);
}
function EC(e, t) {
  return TC(e, t) + `000`;
}
function DC(e, t) {
  return Z(e.getMonth() + 1, t, 2);
}
function OC(e, t) {
  return Z(e.getMinutes(), t, 2);
}
function kC(e, t) {
  return Z(e.getSeconds(), t, 2);
}
function AC(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function jC(e, t) {
  return Z(bS.count(LS(e) - 1, e), t, 2);
}
function MC(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? wS(e) : wS.ceil(e);
}
function NC(e, t) {
  return ((e = MC(e)), Z(wS.count(LS(e), e) + (LS(e).getDay() === 4), t, 2));
}
function PC(e) {
  return e.getDay();
}
function FC(e, t) {
  return Z(xS.count(LS(e) - 1, e), t, 2);
}
function IC(e, t) {
  return Z(e.getFullYear() % 100, t, 2);
}
function LC(e, t) {
  return ((e = MC(e)), Z(e.getFullYear() % 100, t, 2));
}
function RC(e, t) {
  return Z(e.getFullYear() % 1e4, t, 4);
}
function zC(e, t) {
  var n = e.getDay();
  return (
    (e = n >= 4 || n === 0 ? wS(e) : wS.ceil(e)), Z(e.getFullYear() % 1e4, t, 4)
  );
}
function BC(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? `-` : ((t *= -1), `+`)) +
    Z((t / 60) | 0, `0`, 2) +
    Z(t % 60, `0`, 2)
  );
}
function VC(e, t) {
  return Z(e.getUTCDate(), t, 2);
}
function HC(e, t) {
  return Z(e.getUTCHours(), t, 2);
}
function UC(e, t) {
  return Z(e.getUTCHours() % 12 || 12, t, 2);
}
function WC(e, t) {
  return Z(1 + _S.count(RS(e), e), t, 3);
}
function GC(e, t) {
  return Z(e.getUTCMilliseconds(), t, 3);
}
function KC(e, t) {
  return GC(e, t) + `000`;
}
function qC(e, t) {
  return Z(e.getUTCMonth() + 1, t, 2);
}
function JC(e, t) {
  return Z(e.getUTCMinutes(), t, 2);
}
function YC(e, t) {
  return Z(e.getUTCSeconds(), t, 2);
}
function XC(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function ZC(e, t) {
  return Z(OS.count(RS(e) - 1, e), t, 2);
}
function QC(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? MS(e) : MS.ceil(e);
}
function $C(e, t) {
  return ((e = QC(e)), Z(MS.count(RS(e), e) + (RS(e).getUTCDay() === 4), t, 2));
}
function ew(e) {
  return e.getUTCDay();
}
function tw(e, t) {
  return Z(kS.count(RS(e) - 1, e), t, 2);
}
function nw(e, t) {
  return Z(e.getUTCFullYear() % 100, t, 2);
}
function rw(e, t) {
  return ((e = QC(e)), Z(e.getUTCFullYear() % 100, t, 2));
}
function iw(e, t) {
  return Z(e.getUTCFullYear() % 1e4, t, 4);
}
function aw(e, t) {
  var n = e.getUTCDay();
  return (
    (e = n >= 4 || n === 0 ? MS(e) : MS.ceil(e)),
    Z(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function ow() {
  return `+0000`;
}
function sw() {
  return `%`;
}
function cw(e) {
  return +e;
}
function lw(e) {
  return Math.floor(e / 1e3);
}
var uw, dw, fw;
pw({
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
function pw(e) {
  return (
    (uw = qS(e)),
    (dw = uw.format),
    uw.parse,
    (fw = uw.utcFormat),
    uw.utcParse,
    uw
  );
}
function mw(e) {
  return new Date(e);
}
function hw(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function gw(e, t, n, r, i, a, o, s, c, l) {
  var u = Qb(),
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
      return arguments.length ? f(Array.from(e, hw)) : f().map(mw);
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
        e ? f(Dx(n, e)) : u
      );
    }),
    (u.copy = function () {
      return Xb(u, gw(e, t, n, r, i, a, o, s, c, l));
    }),
    u
  );
}
function _w() {
  return Ay.apply(
    gw(HS, US, LS, FS, bS, gS, mS, fS, dS, dw).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function vw() {
  return Ay.apply(
    gw(BS, VS, RS, IS, OS, _S, hS, pS, dS, fw).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function yw() {
  var e = 0,
    t = 1,
    n,
    r,
    i,
    a,
    o = Gb,
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
    (l.range = u(zb)),
    (l.rangeRound = u(Bb)),
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
function bw(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function xw() {
  var e = wx(yw()(Gb));
  return (
    (e.copy = function () {
      return bw(e, xw());
    }),
    jy.apply(e, arguments)
  );
}
function Sw() {
  var e = Ix(yw()).domain([1, 10]);
  return (
    (e.copy = function () {
      return bw(e, Sw()).base(e.base());
    }),
    jy.apply(e, arguments)
  );
}
function Cw() {
  var e = Bx(yw());
  return (
    (e.copy = function () {
      return bw(e, Cw()).constant(e.constant());
    }),
    jy.apply(e, arguments)
  );
}
function ww() {
  var e = Gx(yw());
  return (
    (e.copy = function () {
      return bw(e, ww()).exponent(e.exponent());
    }),
    jy.apply(e, arguments)
  );
}
function Tw() {
  return ww.apply(null, arguments).exponent(0.5);
}
function Ew() {
  var e = [],
    t = Gb;
  function n(n) {
    if (n != null && !isNaN((n = +n)))
      return t((cy(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (n.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let n of t) n != null && !isNaN((n = +n)) && e.push(n);
      return (e.sort(ty), n);
    }),
    (n.interpolator = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.range = function () {
      return e.map((n, r) => t(r / (e.length - 1)));
    }),
    (n.quantiles = function (t) {
      return Array.from({ length: t + 1 }, (n, r) => Dy(e, r / t));
    }),
    (n.copy = function () {
      return Ew(t).domain(e);
    }),
    jy.apply(n, arguments)
  );
}
function Dw() {
  var e = 0,
    t = 0.5,
    n = 1,
    r = 1,
    i,
    a,
    o,
    s,
    c,
    l = Gb,
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
        ? (([n, r, i] = t), (l = Vb(e, [n, r, i])), p)
        : [l(0), l(0.5), l(1)];
    };
  }
  return (
    (p.range = m(zb)),
    (p.rangeRound = m(Bb)),
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
function Ow() {
  var e = wx(Dw()(Gb));
  return (
    (e.copy = function () {
      return bw(e, Ow());
    }),
    jy.apply(e, arguments)
  );
}
function kw() {
  var e = Ix(Dw()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return bw(e, kw()).base(e.base());
    }),
    jy.apply(e, arguments)
  );
}
function Aw() {
  var e = Bx(Dw());
  return (
    (e.copy = function () {
      return bw(e, Aw()).constant(e.constant());
    }),
    jy.apply(e, arguments)
  );
}
function jw() {
  var e = Gx(Dw());
  return (
    (e.copy = function () {
      return bw(e, jw()).exponent(e.exponent());
    }),
    jy.apply(e, arguments)
  );
}
function Mw() {
  return jw.apply(null, arguments).exponent(0.5);
}
var Nw = e(ey()),
  Pw = t({
    scaleBand: () => Py,
    scaleDiverging: () => Ow,
    scaleDivergingLog: () => kw,
    scaleDivergingPow: () => jw,
    scaleDivergingSqrt: () => Mw,
    scaleDivergingSymlog: () => Aw,
    scaleIdentity: () => Ex,
    scaleImplicit: () => My,
    scaleLinear: () => Tx,
    scaleLog: () => Lx,
    scaleOrdinal: () => Ny,
    scalePoint: () => Iy,
    scalePow: () => Kx,
    scaleQuantile: () => Zx,
    scaleQuantize: () => Qx,
    scaleRadial: () => Xx,
    scaleSequential: () => xw,
    scaleSequentialLog: () => Sw,
    scaleSequentialPow: () => ww,
    scaleSequentialQuantile: () => Ew,
    scaleSequentialSqrt: () => Tw,
    scaleSequentialSymlog: () => Cw,
    scaleSqrt: () => qx,
    scaleSymlog: () => Vx,
    scaleThreshold: () => $x,
    scaleTime: () => _w,
    scaleUtc: () => vw,
    tickFormat: () => Cx,
  }),
  Fw = (e) => e.chartData,
  Iw = Y([Fw], (e) => {
    var t = e.chartData == null ? 0 : e.chartData.length - 1;
    return {
      chartData: e.chartData,
      computedData: e.computedData,
      dataEndIndex: t,
      dataStartIndex: 0,
    };
  }),
  Lw = (e, t, n, r) => (r ? Iw(e) : Fw(e));
function Rw(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, n] = e;
    if (vg(t) && vg(n)) return !0;
  }
  return !1;
}
function zw(e, t, n) {
  return n ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function Bw(e, t) {
  if (t && typeof e != `function` && Array.isArray(e) && e.length === 2) {
    var [n, r] = e,
      i,
      a;
    if (vg(n)) i = n;
    else if (typeof n == `function`) return;
    if (vg(r)) a = r;
    else if (typeof r == `function`) return;
    var o = [i, a];
    if (Rw(o)) return o;
  }
}
function Vw(e, t, n) {
  if (n || t != null) {
    if (typeof e == `function` && t != null)
      try {
        var r = e(t, n);
        if (Rw(r)) return zw(r, t, n);
      } catch {}
    if (Array.isArray(e) && e.length === 2) {
      var [i, a] = e,
        o,
        s;
      if (i === `auto`) t != null && (o = Math.min(...t));
      else if (K(i)) o = i;
      else if (typeof i == `function`)
        try {
          t != null && (o = i(t?.[0]));
        } catch {}
      else if (typeof i == `string` && Oh.test(i)) {
        var c = Oh.exec(i);
        if (c == null || t == null) o = void 0;
        else {
          var l = +c[1];
          o = t[0] - l;
        }
      } else o = t?.[0];
      if (a === `auto`) t != null && (s = Math.max(...t));
      else if (K(a)) s = a;
      else if (typeof a == `function`)
        try {
          t != null && (s = a(t?.[1]));
        } catch {}
      else if (typeof a == `string` && kh.test(a)) {
        var u = kh.exec(a);
        if (u == null || t == null) s = void 0;
        else {
          var d = +u[1];
          s = t[1] + d;
        }
      } else s = t?.[1];
      var f = [o, s];
      if (Rw(f)) return t == null ? f : zw(f, t, n);
    }
  }
}
var Q = e(
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
                  n % 2 && ((o = o.times(u)), A(o.d, t)),
                    (n = c(n / 2)),
                    n !== 0;
                )
                  ((u = u.times(u)), A(u.d, t));
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
              A = r.constructor,
              ee = r.s == i.s ? 1 : -1,
              j = r.d,
              M = i.d;
            if (!r.s) return new A(r);
            if (!i.s) throw Error(a + `Division by zero`);
            for (
              l = r.e - i.e,
                O = M.length,
                T = j.length,
                g = new A(ee),
                _ = g.d = [],
                u = 0;
              M[u] == (j[u] || 0);
            )
              ++u;
            if (
              (M[u] > (j[u] || 0) && --l,
              (x =
                o == null ? (o = A.precision) : s ? o + (S(r) - S(i)) + 1 : o),
              x < 0)
            )
              return new A(0);
            if (((x = (x / p + 2) | 0), (u = 0), O == 1))
              for (d = 0, M = M[0], x++; (u < T || d) && x--; u++)
                ((C = d * f + (j[u] || 0)),
                  (_[u] = (C / M) | 0),
                  (d = (C % M) | 0));
            else {
              for (
                d = (f / (M[0] + 1)) | 0,
                  d > 1 &&
                    ((M = e(M, d)),
                    (j = e(j, d)),
                    (O = M.length),
                    (T = j.length)),
                  w = O,
                  v = j.slice(0, O),
                  y = v.length;
                y < O;
              )
                v[y++] = 0;
              ((k = M.slice()), k.unshift(0), (E = M[0]), M[1] >= f / 2 && ++E);
              do
                ((d = 0),
                  (c = t(M, v, O, y)),
                  c < 0
                    ? ((b = v[0]),
                      O != y && (b = b * f + (v[1] || 0)),
                      (d = (b / E) | 0),
                      d > 1
                        ? (d >= f && (d = f - 1),
                          (m = e(M, d)),
                          (h = m.length),
                          (y = v.length),
                          (c = t(m, v, h, y)),
                          c == 1 && (d--, n(m, O < h ? k : M, h)))
                        : (d == 0 && (c = d = 1), (m = M.slice())),
                      (h = m.length),
                      h < y && m.unshift(0),
                      n(v, m, y),
                      c == -1 &&
                        ((y = v.length),
                        (c = t(M, v, O, y)),
                        c < 1 && (d++, n(v, O < y ? k : M, y))),
                      (y = v.length))
                    : c === 0 && (d++, (v = [0])),
                  (_[u++] = d),
                  c && v[0] ? (v[y++] = j[w] || 0) : ((v = [j[w]]), (y = 1)));
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
        function A(e, t) {
          if (e.length > t) return ((e.length = t), !0);
        }
        function ee(e) {
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
            (i.clone = ee),
            (i.config = i.set = j),
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
        function j(e) {
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
        ((r = ee(r)),
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
  Hw = (e) => e,
  Uw = { "@@functional/placeholder": !0 },
  Ww = (e) => e === Uw,
  Gw = (e) =>
    function t() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          Ww(arguments.length <= 0 ? void 0 : arguments[0]))
        ? t
        : e(...arguments);
    },
  Kw = (e, t) =>
    e === 1
      ? t
      : Gw(function () {
          var n = [...arguments],
            r = n.filter((e) => e !== Uw).length;
          return r >= e
            ? t(...n)
            : Kw(
                e - r,
                Gw(function () {
                  var e = [...arguments];
                  return t(...n.map((t) => (Ww(t) ? e.shift() : t)), ...e);
                }),
              );
        }),
  qw = (e) => Kw(e.length, e),
  Jw = (e, t) => {
    for (var n = [], r = e; r < t; ++r) n[r - e] = r;
    return n;
  },
  Yw = qw((e, t) =>
    Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map((e) => t[e])
          .map(e),
  ),
  Xw = function () {
    var e = [...arguments];
    if (!e.length) return Hw;
    var t = e.reverse(),
      n = t[0],
      r = t.slice(1);
    return function () {
      return r.reduce((e, t) => t(e), n(...arguments));
    };
  },
  Zw = (e) => (Array.isArray(e) ? e.reverse() : e.split(``).reverse().join(``)),
  Qw = (e) => {
    var t = null,
      n = null;
    return function () {
      var r = [...arguments];
      return (
        (t && r.every((e, n) => e === t?.[n])) || ((t = r), (n = e(...r))), n
      );
    };
  };
function $w(e) {
  return e === 0
    ? 1
    : Math.floor(new Q.default(e).abs().log(10).toNumber()) + 1;
}
function eT(e, t, n) {
  for (var r = new Q.default(e), i = 0, a = []; r.lt(t) && i < 1e5;)
    (a.push(r.toNumber()), (r = r.add(n)), i++);
  return a;
}
(qw((e, t, n) => {
  var r = +e;
  return r + n * (+t - r);
}),
  qw((e, t, n) => {
    var r = t - +e;
    return ((r ||= 1 / 0), (n - e) / r);
  }),
  qw((e, t, n) => {
    var r = t - +e;
    return ((r ||= 1 / 0), Math.max(0, Math.min(1, (n - e) / r)));
  }));
var tT = (e) => {
    var [t, n] = e,
      [r, i] = [t, n];
    return (t > n && ([r, i] = [n, t]), [r, i]);
  },
  nT = (e, t, n) => {
    if (e.lte(0)) return new Q.default(0);
    var r = $w(e.toNumber()),
      i = new Q.default(10).pow(r),
      a = e.div(i),
      o = r === 1 ? 0.1 : 0.05,
      s = new Q.default(Math.ceil(a.div(o).toNumber())).add(n).mul(o).mul(i);
    return t
      ? new Q.default(s.toNumber())
      : new Q.default(Math.ceil(s.toNumber()));
  },
  rT = (e, t, n) => {
    var r = new Q.default(1),
      i = new Q.default(e);
    if (!i.isint() && n) {
      var a = Math.abs(e);
      a < 1
        ? ((r = new Q.default(10).pow($w(e) - 1)),
          (i = new Q.default(Math.floor(i.div(r).toNumber())).mul(r)))
        : a > 1 && (i = new Q.default(Math.floor(e)));
    } else
      e === 0
        ? (i = new Q.default(Math.floor((t - 1) / 2)))
        : n || (i = new Q.default(Math.floor(e)));
    var o = Math.floor((t - 1) / 2);
    return Xw(
      Yw((e) => i.add(new Q.default(e - o).mul(r)).toNumber()),
      Jw,
    )(0, t);
  },
  iT = function (e, t, n, r) {
    var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    if (!Number.isFinite((t - e) / (n - 1)))
      return {
        step: new Q.default(0),
        tickMin: new Q.default(0),
        tickMax: new Q.default(0),
      };
    var a = nT(new Q.default(t).sub(e).div(n - 1), r, i),
      o;
    e <= 0 && t >= 0
      ? (o = new Q.default(0))
      : ((o = new Q.default(e).add(t).div(2)),
        (o = o.sub(new Q.default(o).mod(a))));
    var s = Math.ceil(o.sub(e).div(a).toNumber()),
      c = Math.ceil(new Q.default(t).sub(o).div(a).toNumber()),
      l = s + c + 1;
    return l > n
      ? iT(e, t, n, r, i + 1)
      : (l < n &&
          ((c = t > 0 ? c + (n - l) : c), (s = t > 0 ? s : s + (n - l))),
        {
          step: a,
          tickMin: o.sub(new Q.default(s).mul(a)),
          tickMax: o.add(new Q.default(c).mul(a)),
        });
  };
function aT(e) {
  var [t, n] = e,
    r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    a = Math.max(r, 2),
    [o, s] = tT([t, n]);
  if (o === -1 / 0 || s === 1 / 0) {
    var c =
      s === 1 / 0
        ? [o, ...Jw(0, r - 1).map(() => 1 / 0)]
        : [...Jw(0, r - 1).map(() => -1 / 0), s];
    return t > n ? Zw(c) : c;
  }
  if (o === s) return rT(o, r, i);
  var { step: l, tickMin: u, tickMax: d } = iT(o, s, a, i, 0),
    f = eT(u, d.add(new Q.default(0.1).mul(l)), l);
  return t > n ? Zw(f) : f;
}
function oT(e, t) {
  var [n, r] = e,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    [a, o] = tT([n, r]);
  if (a === -1 / 0 || o === 1 / 0) return [n, r];
  if (a === o) return [a];
  var s = Math.max(t, 2),
    c = nT(new Q.default(o).sub(a).div(s - 1), i, 0),
    l = [...eT(new Q.default(a), new Q.default(o), c), o];
  return (i === !1 && (l = l.map((e) => Math.round(e))), n > r ? Zw(l) : l);
}
var sT = Qw(aT),
  cT = Qw(oT),
  lT = (e) => e.rootProps.maxBarSize,
  uT = (e) => e.rootProps.barGap,
  dT = (e) => e.rootProps.barCategoryGap,
  fT = (e) => e.rootProps.barSize,
  pT = (e) => e.rootProps.stackOffset,
  mT = (e) => e.options.chartName,
  hT = (e) => e.rootProps.syncId,
  gT = (e) => e.rootProps.syncMethod,
  _T = (e) => e.options.eventEmitter,
  vT = {
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
  yT = {
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
  bT = (e, t) => {
    if (e && t) return e != null && e.reversed ? [t[1], t[0]] : t;
  },
  xT = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    domain: void 0,
    id: vT.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: vT.reversed,
    scale: vT.scale,
    tick: vT.tick,
    tickCount: void 0,
    ticks: void 0,
    type: vT.type,
    unit: void 0,
  },
  ST = {
    allowDataOverflow: yT.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: yT.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: yT.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: yT.scale,
    tick: yT.tick,
    tickCount: yT.tickCount,
    ticks: void 0,
    type: yT.type,
    unit: void 0,
  },
  CT = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: vT.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: vT.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: vT.scale,
    tick: vT.tick,
    tickCount: void 0,
    ticks: void 0,
    type: `number`,
    unit: void 0,
  },
  wT = {
    allowDataOverflow: yT.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: yT.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: yT.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: yT.scale,
    tick: yT.tick,
    tickCount: yT.tickCount,
    ticks: void 0,
    type: `category`,
    unit: void 0,
  },
  TT = (e, t) =>
    e.polarAxis.angleAxis[t] == null
      ? e.layout.layoutType === `radial`
        ? CT
        : xT
      : e.polarAxis.angleAxis[t],
  ET = (e, t) =>
    e.polarAxis.radiusAxis[t] == null
      ? e.layout.layoutType === `radial`
        ? wT
        : ST
      : e.polarAxis.radiusAxis[t],
  DT = (e) => e.polarOptions,
  OT = Y([Ih, Lh, eg], Qm),
  kT = Y([DT, OT], (e, t) => {
    if (e != null) return su(e.innerRadius, t, 0);
  }),
  AT = Y([DT, OT], (e, t) => {
    if (e != null) return su(e.outerRadius, t, t * 0.8);
  }),
  jT = Y([DT], (e) => {
    if (e == null) return [0, 0];
    var { startAngle: t, endAngle: n } = e;
    return [t, n];
  }),
  MT = Y([TT, jT], bT),
  NT = Y([OT, kT, AT], (e, t, n) => {
    if (e != null && t != null && n != null) return [t, n];
  }),
  PT = Y([ET, NT], bT),
  FT = Y([X, DT, kT, AT, Ih, Lh], (e, t, n, r, i, a) => {
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
        cx: su(o, i, i / 2),
        cy: su(s, a, a / 2),
        innerRadius: n,
        outerRadius: r,
        startAngle: c,
        endAngle: l,
        clockWise: !1,
      };
    }
  }),
  IT = (e, t) => t,
  LT = (e, t, n) => n;
function RT(e) {
  return e?.id;
}
var zT = (e) => {
    var t = X(e);
    return t === `horizontal`
      ? `xAxis`
      : t === `vertical`
        ? `yAxis`
        : t === `centric`
          ? `angleAxis`
          : `radiusAxis`;
  },
  BT = (e) => e.tooltip.settings.axisId,
  VT = (e) => lE(e, zT(e), BT(e)),
  HT = Y([VT], (e) => e?.dataKey);
function UT(e, t, n) {
  var { chartData: r = [] } = t,
    { allowDuplicatedCategory: i, dataKey: a } = n,
    o = new Map();
  return (
    e.forEach((e) => {
      var t = e.data ?? r;
      if (t != null && t.length !== 0) {
        var n = RT(e);
        t.forEach((t, r) => {
          var s = a == null || i ? r : String(dh(t, a, null)),
            c = dh(t, e.dataKey, 0),
            l = o.has(s) ? o.get(s) : {};
          (Object.assign(l, { [n]: c }), o.set(s, l));
        });
      }
    }),
    Array.from(o.values())
  );
}
function WT(e) {
  return e.stackId != null && e.dataKey != null;
}
var GT = (e, t) =>
  e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function KT(e, t) {
  return Array.isArray(e) &&
    Array.isArray(t) &&
    e.length === 0 &&
    t.length === 0
    ? !0
    : e === t;
}
function qT(e, t) {
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
function JT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? qT(Object(n), !0).forEach(function (t) {
          YT(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : qT(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function YT(e, t, n) {
  return (
    (t = XT(t)) in e
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
function XT(e) {
  var t = ZT(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ZT(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var QT = [0, `auto`],
  $T = {
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
  eE = (e, t) => e.cartesianAxis.xAxis[t],
  tE = (e, t) => eE(e, t) ?? $T,
  nE = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: QT,
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
  rE = (e, t) => e.cartesianAxis.yAxis[t],
  iE = (e, t) => rE(e, t) ?? nE,
  aE = {
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
  oE = (e, t) => e.cartesianAxis.zAxis[t] ?? aE,
  sE = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return tE(e, n);
      case `yAxis`:
        return iE(e, n);
      case `zAxis`:
        return oE(e, n);
      case `angleAxis`:
        return TT(e, n);
      case `radiusAxis`:
        return ET(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  cE = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return tE(e, n);
      case `yAxis`:
        return iE(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  lE = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return tE(e, n);
      case `yAxis`:
        return iE(e, n);
      case `angleAxis`:
        return TT(e, n);
      case `radiusAxis`:
        return ET(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  uE = (e) =>
    e.graphicalItems.cartesianItems.some((e) => e.type === `bar`) ||
    e.graphicalItems.polarItems.some((e) => e.type === `radialBar`);
function dE(e, t) {
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
var fE = (e) => e.graphicalItems.cartesianItems,
  pE = Y([IT, LT], dE),
  mE = (e, t, n) =>
    e.filter(n).filter((e) => t?.includeHidden === !0 || !e.hide),
  hE = Y([fE, sE, pE], mE, { memoizeOptions: { resultEqualityCheck: KT } }),
  gE = Y([hE], (e) =>
    e.filter((e) => e.type === `area` || e.type === `bar`).filter(WT),
  ),
  _E = (e) => e.filter((e) => !(`stackId` in e) || e.stackId === void 0),
  vE = Y([hE], _E),
  yE = (e) =>
    e
      .map((e) => e.data)
      .filter(Boolean)
      .flat(1),
  bE = Y([hE], yE, { memoizeOptions: { resultEqualityCheck: KT } }),
  xE = (e, t) => {
    var { chartData: n = [], dataStartIndex: r, dataEndIndex: i } = t;
    return e.length > 0 ? e : n.slice(r, i + 1);
  },
  SE = Y([bE, Lw], xE),
  CE = (e, t, n) =>
    t?.dataKey == null
      ? n.length > 0
        ? n
            .map((e) => e.dataKey)
            .flatMap((t) => e.map((e) => ({ value: dh(e, t) })))
        : e.map((e) => ({ value: e }))
      : e.map((e) => ({ value: dh(e, t.dataKey) })),
  wE = Y([SE, sE, hE], CE);
function TE(e, t) {
  switch (e) {
    case `xAxis`:
      return t.direction === `x`;
    case `yAxis`:
      return t.direction === `y`;
    default:
      return !1;
  }
}
function EE(e) {
  if (iu(e) || e instanceof Date) {
    var t = Number(e);
    if (vg(t)) return t;
  }
}
function DE(e) {
  if (Array.isArray(e)) {
    var t = [EE(e[0]), EE(e[1])];
    return Rw(t) ? t : void 0;
  }
  var n = EE(e);
  if (n != null) return [n, n];
}
function OE(e) {
  return e.map(EE).filter(G_);
}
function kE(e, t, n) {
  return !n || typeof t != `number` || nu(t) || !n.length
    ? []
    : OE(
        n.flatMap((n) => {
          var r = dh(e, n.dataKey),
            i,
            a;
          if ((Array.isArray(r) ? ([i, a] = r) : (i = a = r), vg(i) && vg(a)))
            return [t - i, t + a];
        }),
      );
}
var AE = Y([gE, Lw, VT], UT),
  jE = (e, t, n) => {
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
        return [r, { stackedData: xh(e, i.map(RT), n), graphicalItems: i }];
      }),
    );
  },
  ME = Y([AE, gE, pT], jE),
  NE = (e, t, n, r) => {
    var { dataStartIndex: i, dataEndIndex: a } = t;
    if (r == null && n !== `zAxis`) {
      var o = Dh(e, i, a);
      if (o == null || o[0] !== 0 || o[1] !== 0) return o;
    }
  },
  PE = Y([sE], (e) => e.allowDataOverflow),
  FE = (e) => {
    if (e == null || !(`domain` in e)) return QT;
    if (e.domain != null) return e.domain;
    if (e.ticks != null) {
      if (e.type === `number`) {
        var t = OE(e.ticks);
        return [Math.min(...t), Math.max(...t)];
      }
      if (e.type === `category`) return e.ticks.map(String);
    }
    return e?.domain ?? QT;
  },
  IE = Y([sE], FE),
  LE = Y([IE, PE], Bw),
  RE = Y([ME, Fw, IT, LE], NE, { memoizeOptions: { resultEqualityCheck: GT } }),
  zE = (e) => e.errorBars,
  BE = (e, t, n) =>
    e
      .flatMap((e) => t[e.id])
      .filter(Boolean)
      .filter((e) => TE(n, e)),
  VE = function () {
    var e = [...arguments].filter(Boolean);
    if (e.length !== 0) {
      var t = e.flat();
      return [Math.min(...t), Math.max(...t)];
    }
  },
  HE = (e, t, n, r, i) => {
    var a, o;
    if (
      (n.length > 0 &&
        e.forEach((e) => {
          n.forEach((n) => {
            var s = r[n.id]?.filter((e) => TE(i, e)),
              c = dh(e, t.dataKey ?? n.dataKey),
              l = kE(e, c, s);
            if (l.length >= 2) {
              var u = Math.min(...l),
                d = Math.max(...l);
              ((a == null || u < a) && (a = u),
                (o == null || d > o) && (o = d));
            }
            var f = DE(c);
            f != null &&
              ((a = a == null ? f[0] : Math.min(a, f[0])),
              (o = o == null ? f[1] : Math.max(o, f[1])));
          });
        }),
      t?.dataKey != null &&
        e.forEach((e) => {
          var n = DE(dh(e, t.dataKey));
          n != null &&
            ((a = a == null ? n[0] : Math.min(a, n[0])),
            (o = o == null ? n[1] : Math.max(o, n[1])));
        }),
      vg(a) && vg(o))
    )
      return [a, o];
  },
  UE = Y([SE, sE, vE, zE, IT], HE, {
    memoizeOptions: { resultEqualityCheck: GT },
  });
function WE(e) {
  var { value: t } = e;
  if (iu(t) || t instanceof Date) return t;
}
var GE = (e, t, n) => {
    var r = e.map(WE).filter((e) => e != null);
    return n && (t.dataKey == null || (t.allowDuplicatedCategory && cu(r)))
      ? (0, Nw.default)(0, e.length)
      : t.allowDuplicatedCategory
        ? r
        : Array.from(new Set(r));
  },
  KE = (e) => e.referenceElements.dots,
  qE = (e, t, n) =>
    e
      .filter((e) => e.ifOverflow === `extendDomain`)
      .filter((e) => (t === `xAxis` ? e.xAxisId === n : e.yAxisId === n)),
  JE = Y([KE, IT, LT], qE),
  YE = (e) => e.referenceElements.areas,
  XE = Y([YE, IT, LT], qE),
  ZE = (e) => e.referenceElements.lines,
  QE = Y([ZE, IT, LT], qE),
  $E = (e, t) => {
    var n = OE(e.map((e) => (t === `xAxis` ? e.x : e.y)));
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  eD = Y(JE, IT, $E),
  tD = (e, t) => {
    var n = OE(
      e.flatMap((e) => [
        t === `xAxis` ? e.x1 : e.y1,
        t === `xAxis` ? e.x2 : e.y2,
      ]),
    );
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  nD = Y([XE, IT], tD),
  rD = (e, t) => {
    var n = OE(e.map((e) => (t === `xAxis` ? e.x : e.y)));
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  iD = Y(eD, Y(QE, IT, rD), nD, (e, t, n) => VE(e, n, t)),
  aD = (e, t, n, r, i, a, o, s) =>
    n ??
    Vw(
      t,
      (o === `vertical` && s === `xAxis`) ||
        (o === `horizontal` && s === `yAxis`)
        ? VE(r, a, i)
        : VE(a, i),
      e.allowDataOverflow,
    ),
  oD = Y([sE, IE, LE, RE, UE, iD, X, IT], aD, {
    memoizeOptions: { resultEqualityCheck: GT },
  }),
  sD = [0, 1],
  cD = (e, t, n, r, i, a, o) => {
    if ((e != null && n != null && n.length !== 0) || o !== void 0) {
      var { dataKey: s, type: c } = e,
        l = mh(t, a);
      return l && s == null
        ? (0, Nw.default)(0, n.length)
        : c === `category`
          ? GE(r, e, l)
          : i === `expand`
            ? sD
            : o;
    }
  },
  lD = Y([sE, X, SE, wE, pT, IT, oD], cD),
  uD = (e, t, n, r, i) => {
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
        var s = `scale${fu(a)}`;
        return s in Pw ? s : `point`;
      }
    }
  },
  dD = Y([sE, X, uE, mT, IT], uD);
function fD(e) {
  if (e != null) {
    if (e in Pw) return Pw[e]();
    var t = `scale${fu(e)}`;
    if (t in Pw) return Pw[t]();
  }
}
function pD(e, t, n, r) {
  if (n != null && r != null) {
    if (typeof e.scale == `function`) return e.scale.copy().domain(n).range(r);
    var i = fD(t);
    if (i != null) {
      var a = i.domain(n).range(r);
      return (vh(a), a);
    }
  }
}
var mD = (e, t, n) => {
    var r = FE(t);
    if (n === `auto` || n === `linear`) {
      if (
        t != null &&
        t.tickCount &&
        Array.isArray(r) &&
        (r[0] === `auto` || r[1] === `auto`) &&
        Rw(e)
      )
        return sT(e, t.tickCount, t.allowDecimals);
      if (t != null && t.tickCount && t.type === `number` && Rw(e))
        return cT(e, t.tickCount, t.allowDecimals);
    }
  },
  hD = Y([lD, lE, dD], mD),
  gD = (e, t, n, r) => {
    if (
      r !== `angleAxis` &&
      e?.type === `number` &&
      Rw(t) &&
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
  _D = Y([sE, lD, hD, IT], gD),
  vD = Y(
    Y(wE, sE, (e, t) => {
      if (t && t.type === `number`) {
        var n = 1 / 0,
          r = Array.from(OE(e.map((e) => e.value))).sort((e, t) => e - t);
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
    X,
    dT,
    eg,
    (e, t, n, r) => r,
    (e, t, n, r, i) => {
      if (!vg(e)) return 0;
      var a = t === `vertical` ? r.height : r.width;
      if (i === `gap`) return (e * a) / 2;
      if (i === `no-gap`) {
        var o = su(n, e * a),
          s = (e * a) / 2;
        return s - o - ((s - o) / a) * o;
      }
      return 0;
    },
  ),
  yD = (e, t) => {
    var n = tE(e, t);
    return n == null || typeof n.padding != `string`
      ? 0
      : vD(e, `xAxis`, t, n.padding);
  },
  bD = (e, t) => {
    var n = iE(e, t);
    return n == null || typeof n.padding != `string`
      ? 0
      : vD(e, `yAxis`, t, n.padding);
  },
  xD = Y(tE, yD, (e, t) => {
    if (e == null) return { left: 0, right: 0 };
    var { padding: n } = e;
    return typeof n == `string`
      ? { left: t, right: t }
      : { left: (n.left ?? 0) + t, right: (n.right ?? 0) + t };
  }),
  SD = Y(iE, bD, (e, t) => {
    if (e == null) return { top: 0, bottom: 0 };
    var { padding: n } = e;
    return typeof n == `string`
      ? { top: t, bottom: t }
      : { top: (n.top ?? 0) + t, bottom: (n.bottom ?? 0) + t };
  }),
  CD = Y([eg, xD, og, ag, (e, t, n) => n], (e, t, n, r, i) => {
    var { padding: a } = r;
    return i
      ? [a.left, n.width - a.right]
      : [e.left + t.left, e.left + e.width - t.right];
  }),
  wD = Y([eg, X, SD, og, ag, (e, t, n) => n], (e, t, n, r, i, a) => {
    var { padding: o } = i;
    return a
      ? [r.height - o.bottom, o.top]
      : t === `horizontal`
        ? [e.top + e.height - n.bottom, e.top + n.top]
        : [e.top + n.top, e.top + e.height - n.bottom];
  }),
  TD = (e, t, n, r) => {
    switch (t) {
      case `xAxis`:
        return CD(e, n, r);
      case `yAxis`:
        return wD(e, n, r);
      case `zAxis`:
        return oE(e, n)?.range;
      case `angleAxis`:
        return jT(e);
      case `radiusAxis`:
        return NT(e, n);
      default:
        return;
    }
  },
  ED = Y([sE, TD], bT),
  DD = Y([sE, dD, _D, ED], pD);
Y([hE, zE, IT], BE);
function OD(e, t) {
  return e.id < t.id ? -1 : +(e.id > t.id);
}
var kD = (e, t) => t,
  AD = (e, t, n) => n,
  jD = Y(Bh, kD, AD, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort(OD),
  ),
  MD = Y(Vh, kD, AD, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort(OD),
  ),
  ND = (e, t) => ({ width: e.width, height: t.height }),
  PD = (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  }),
  FD = Y(eg, tE, ND),
  ID = (e, t, n) => {
    switch (t) {
      case `top`:
        return e.top;
      case `bottom`:
        return n - e.bottom;
      default:
        return 0;
    }
  },
  LD = (e, t, n) => {
    switch (t) {
      case `left`:
        return e.left;
      case `right`:
        return n - e.right;
      default:
        return 0;
    }
  },
  RD = Y(Lh, eg, jD, kD, AD, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = ND(t, n);
        o ??= ID(t, r, e);
        var c = (r === `top` && !i) || (r === `bottom` && i);
        ((a[n.id] = o - Number(c) * s.height), (o += (c ? -1 : 1) * s.height));
      }),
      a
    );
  }),
  zD = Y(Ih, eg, MD, kD, AD, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = PD(t, n);
        o ??= LD(t, r, e);
        var c = (r === `left` && !i) || (r === `right` && i);
        ((a[n.id] = o - Number(c) * s.width), (o += (c ? -1 : 1) * s.width));
      }),
      a
    );
  }),
  BD = Y(
    [
      eg,
      tE,
      (e, t) => {
        var n = tE(e, t);
        if (n != null) return RD(e, n.orientation, n.mirror);
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
  VD = Y(
    [
      eg,
      iE,
      (e, t) => {
        var n = iE(e, t);
        if (n != null) return zD(e, n.orientation, n.mirror);
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
  HD = Y(eg, iE, (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  })),
  UD = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return FD(e, n).width;
      case `yAxis`:
        return HD(e, n).height;
      default:
        return;
    }
  },
  WD = (e, t, n, r) => {
    if (n != null) {
      var { allowDuplicatedCategory: i, type: a, dataKey: o } = n,
        s = mh(e, r),
        c = t.map((e) => e.value);
      if (o && s && a === `category` && i && cu(c)) return c;
    }
  },
  GD = Y([X, wE, sE, IT], WD),
  KD = (e, t, n, r) => {
    if (n != null && n.dataKey != null) {
      var { type: i, scale: a } = n;
      if (mh(e, r) && (i === `number` || a !== `auto`))
        return t.map((e) => e.value);
    }
  },
  qD = Y([X, wE, lE, IT], KD),
  JD = Y([X, cE, dD, DD, GD, qD, TD, hD, IT], (e, t, n, r, i, a, o, s, c) => {
    if (t == null) return null;
    var l = mh(e, c);
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
  YD = (e, t, n, r, i, a, o, s, c) => {
    if (t != null && r != null) {
      var l = mh(e, c),
        { type: u, ticks: d, tickCount: f } = t,
        p =
          n === `scaleBand` && typeof r.bandwidth == `function`
            ? r.bandwidth() / 2
            : 2,
        m = u === `category` && r.bandwidth ? r.bandwidth() / p : 0;
      m =
        c === `angleAxis` && a != null && a.length >= 2
          ? tu(a[0] - a[1]) * 2 * m
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
            .filter((e) => !nu(e.coordinate))
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
  XD = Y([X, lE, dD, DD, hD, TD, GD, qD, IT], YD),
  ZD = (e, t, n, r, i, a, o) => {
    if (t != null && n != null && r != null && r[0] !== r[1]) {
      var s = mh(e, o),
        { tickCount: c } = t,
        l = 0;
      return (
        (l = o === `angleAxis` && r?.length >= 2 ? tu(r[0] - r[1]) * 2 * l : l),
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
  QD = Y([X, lE, DD, TD, GD, qD, IT], ZD),
  $D = Y(sE, DD, (e, t) => {
    if (e != null && t != null) return JT(JT({}, e), {}, { scale: t });
  });
Y(
  (e, t, n) => oE(e, n),
  Y([sE, dD, lD, ED], pD),
  (e, t) => {
    if (e != null && t != null) return JT(JT({}, e), {}, { scale: t });
  },
);
var eO = Y([X, Bh, Vh], (e, t, n) => {
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
  tO = (e) => e.options.defaultTooltipEventType,
  nO = (e) => e.options.validateTooltipEventTypes;
function rO(e, t, n) {
  if (e == null) return t;
  var r = e ? `axis` : `item`;
  return n == null ? t : n.includes(r) ? r : t;
}
function iO(e, t) {
  return rO(t, tO(e), nO(e));
}
function aO(e) {
  return J((t) => iO(t, e));
}
var oO = (e, t) => {
    var n,
      r = Number(t);
    if (!(nu(r) || t == null))
      return r >= 0
        ? e == null || (n = e[r]) == null
          ? void 0
          : n.value
        : void 0;
  },
  sO = (e) => e.tooltip.settings,
  cO = { active: !1, index: null, dataKey: void 0, coordinate: void 0 },
  lO = Jp({
    name: `tooltip`,
    initialState: {
      itemInteraction: { click: cO, hover: cO },
      axisInteraction: { click: cO, hover: cO },
      keyboardInteraction: cO,
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
          e.tooltipItemPayloads.push(Xf(t.payload));
        },
        prepare: wp(),
      },
      removeTooltipEntrySettings: {
        reducer(e, t) {
          var n = Gf(e).tooltipItemPayloads.indexOf(Xf(t.payload));
          n > -1 && e.tooltipItemPayloads.splice(n, 1);
        },
        prepare: wp(),
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
    addTooltipEntrySettings: uO,
    removeTooltipEntrySettings: dO,
    setTooltipSettingsState: fO,
    setActiveMouseOverItemIndex: pO,
    mouseLeaveItem: mO,
    mouseLeaveChart: hO,
    setActiveClickItemIndex: gO,
    setMouseOverAxisIndex: _O,
    setMouseClickAxisIndex: vO,
    setSyncInteraction: yO,
    setKeyboardInteraction: bO,
  } = lO.actions,
  xO = lO.reducer;
function SO(e, t) {
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
function CO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? SO(Object(n), !0).forEach(function (t) {
          wO(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : SO(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function wO(e, t, n) {
  return (
    (t = TO(t)) in e
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
function TO(e) {
  var t = EO(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function EO(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function DO(e, t, n) {
  return t === `axis`
    ? n === `click`
      ? e.axisInteraction.click
      : e.axisInteraction.hover
    : n === `click`
      ? e.itemInteraction.click
      : e.itemInteraction.hover;
}
function OO(e) {
  return e.index != null;
}
var kO = (e, t, n, r) => {
    if (t == null) return cO;
    var i = DO(e, t, n);
    if (i == null) return cO;
    if (i.active) return i;
    if (e.keyboardInteraction.active) return e.keyboardInteraction;
    if (e.syncInteraction.active && e.syncInteraction.index != null)
      return e.syncInteraction;
    var a = e.settings.active === !0;
    if (OO(i)) {
      if (a) return CO(CO({}, i), {}, { active: !0 });
    } else if (r != null)
      return { active: !0, coordinate: void 0, dataKey: void 0, index: r };
    return CO(CO({}, cO), {}, { coordinate: i.coordinate });
  },
  AO = (e, t) => {
    var n = e?.index;
    if (n == null) return null;
    var r = Number(n);
    if (!vg(r)) return n;
    var i = 0,
      a = 1 / 0;
    return (
      t.length > 0 && (a = t.length - 1), String(Math.max(i, Math.min(r, a)))
    );
  },
  jO = (e, t, n, r, i, a, o, s) => {
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
  MO = (e, t, n, r) => {
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
  NO = (e) => e.options.tooltipPayloadSearcher,
  PO = (e) => e.tooltip;
function FO(e, t) {
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
function IO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? FO(Object(n), !0).forEach(function (t) {
          LO(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : FO(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function LO(e, t, n) {
  return (
    (t = RO(t)) in e
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
function RO(e) {
  var t = zO(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function zO(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function BO(e, t) {
  return e ?? t;
}
var VO = (e, t, n, r, i, a, o) => {
    if (t != null && a != null) {
      var {
        chartData: s,
        computedData: c,
        dataStartIndex: l,
        dataEndIndex: u,
      } = n;
      return e.reduce((e, n) => {
        var { dataDefinedOnItem: d, settings: f } = n,
          p = BO(d, s),
          m = Array.isArray(p) ? ah(p, l, u) : p,
          h = f?.dataKey ?? r,
          g = f?.nameKey,
          _ =
            r && Array.isArray(m) && !Array.isArray(m[0]) && o === `axis`
              ? uu(m, r, i)
              : a(m, t, c, g);
        return (
          Array.isArray(_)
            ? _.forEach((t) => {
                var n = IO(
                  IO({}, f),
                  {},
                  { name: t.name, unit: t.unit, color: void 0, fill: void 0 },
                );
                e.push(
                  jh({
                    tooltipEntrySettings: n,
                    dataKey: t.dataKey,
                    payload: t.payload,
                    value: dh(t.payload, t.dataKey),
                    name: t.name,
                  }),
                );
              })
            : e.push(
                jh({
                  tooltipEntrySettings: f,
                  dataKey: h,
                  payload: _,
                  value: dh(_, h),
                  name: dh(_, g) ?? f?.name,
                }),
              ),
          e
        );
      }, []);
    }
  },
  HO = Y([VT, X, uE, mT, zT], uD),
  UO = Y(
    [
      Y(
        [
          (e) => e.graphicalItems.cartesianItems,
          (e) => e.graphicalItems.polarItems,
        ],
        (e, t) => [...e, ...t],
      ),
      VT,
      Y([zT, BT], dE),
    ],
    mE,
    { memoizeOptions: { resultEqualityCheck: KT } },
  ),
  WO = Y([UO], (e) => e.filter(WT)),
  GO = Y(
    [Y([UO], yE, { memoizeOptions: { resultEqualityCheck: KT } }), Fw],
    xE,
  ),
  KO = Y([WO, Fw, VT], UT),
  qO = Y([GO, VT, UO], CE),
  JO = Y([VT], FE),
  YO = Y([JO, Y([VT], (e) => e.allowDataOverflow)], Bw),
  XO = Y([Y([KO, Y([UO], (e) => e.filter(WT)), pT], jE), Fw, zT, YO], NE),
  ZO = Y([GO, VT, Y([UO], _E), zE, zT], HE, {
    memoizeOptions: { resultEqualityCheck: GT },
  }),
  QO = Y([Y([KE, zT, BT], qE), zT], $E),
  $O = Y([Y([YE, zT, BT], qE), zT], tD),
  ek = Y(
    [
      VT,
      X,
      GO,
      qO,
      pT,
      zT,
      Y(
        [
          VT,
          JO,
          YO,
          XO,
          ZO,
          Y([QO, Y([Y([ZE, zT, BT], qE), zT], rD), $O], VE),
          X,
          zT,
        ],
        aD,
      ),
    ],
    cD,
  ),
  tk = Y([VT, ek, Y([ek, VT, HO], mD), zT], gD),
  nk = (e) => TD(e, zT(e), BT(e), !1),
  rk = Y([VT, nk], bT),
  ik = Y([VT, HO, tk, rk], pD),
  ak = Y(
    [X, VT, HO, ik, nk, Y([X, qO, VT, zT], WD), Y([X, qO, VT, zT], KD), zT],
    (e, t, n, r, i, a, o, s) => {
      if (t) {
        var { type: c } = t,
          l = mh(e, s);
        if (r) {
          var u = n === `scaleBand` && r.bandwidth ? r.bandwidth() / 2 : 2,
            d = c === `category` && r.bandwidth ? r.bandwidth() / u : 0;
          return (
            (d =
              s === `angleAxis` && i != null && i?.length >= 2
                ? tu(i[0] - i[1]) * 2 * d
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
  ok = Y([tO, nO, sO], (e, t, n) => rO(n.shared, e, t)),
  sk = (e) => e.tooltip.settings.trigger,
  ck = (e) => e.tooltip.settings.defaultIndex,
  lk = Y([PO, ok, sk, ck], kO),
  uk = Y([lk, GO], AO),
  dk = Y([ak, uk], oO),
  fk = Y([lk], (e) => {
    if (e) return e.dataKey;
  }),
  pk = Y([PO, ok, sk, ck], MO),
  mk = Y([lk, Y([Ih, Lh, X, eg, ak, ck, pk, NO], jO)], (e, t) =>
    e != null && e.coordinate ? e.coordinate : t,
  ),
  hk = Y([lk], (e) => e.active),
  gk = Y([Y([pk, uk, Fw, HT, dk, NO, ok], VO)], (e) => {
    if (e != null) {
      var t = e.map((e) => e.payload).filter((e) => e != null);
      return Array.from(new Set(t));
    }
  });
function _k(e, t) {
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
function vk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? _k(Object(n), !0).forEach(function (t) {
          yk(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : _k(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function yk(e, t, n) {
  return (
    (t = bk(t)) in e
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
function bk(e) {
  var t = xk(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function xk(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Sk = () => J(VT),
  Ck = () => {
    var e = Sk(),
      t = J(ak),
      n = J(ik);
    return Ah(vk(vk({}, e), {}, { scale: n }), t);
  },
  wk = () => J(mT),
  Tk = (e, t) => t,
  Ek = (e, t, n) => n,
  Dk = (e, t, n, r) => r,
  Ok = Y(ak, (e) => (0, Pd.default)(e, (e) => e.coordinate)),
  kk = Y([PO, Tk, Ek, Dk], kO),
  Ak = Y([kk, GO], AO),
  jk = (e, t, n) => {
    if (t != null) {
      var r = PO(e);
      return t === `axis`
        ? n === `hover`
          ? r.axisInteraction.hover.dataKey
          : r.axisInteraction.click.dataKey
        : n === `hover`
          ? r.itemInteraction.hover.dataKey
          : r.itemInteraction.click.dataKey;
    }
  },
  Mk = Y([PO, Tk, Ek, Dk], MO),
  Nk = Y([Ih, Lh, X, eg, ak, Dk, Mk, NO], jO),
  Pk = Y([kk, Nk], (e, t) => e.coordinate ?? t),
  Fk = Y(ak, Ak, oO),
  Ik = Y([Mk, Ak, Fw, HT, Fk, NO, Tk], VO),
  Lk = Y([kk], (e) => ({ isActive: e.active, activeIndex: e.index })),
  Rk = (e, t, n, r, i, a, o, s) => {
    if (e && t && r && i && a) {
      var c = Nh(e.chartX, e.chartY, t, n, s);
      if (c) {
        var l = fh(Fh(c, t), o, a, r, i),
          u = Ph(t, a, l, c);
        return { activeIndex: String(l), activeCoordinate: u };
      }
    }
  };
function zk() {
  return (
    (zk = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zk.apply(null, arguments)
  );
}
function Bk(e, t) {
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
function Vk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Bk(Object(n), !0).forEach(function (t) {
          Hk(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Bk(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Hk(e, t, n) {
  return (
    (t = Uk(t)) in e
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
function Uk(e) {
  var t = Wk(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Wk(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Gk(e) {
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
  if (l === `ScatterChart`) ((p = u), (m = I_));
  else if (l === `BarChart`) ((p = L_(o, u, i, a)), (m = Vv));
  else if (o === `radial`) {
    var { cx: h, cy: g, radius: _, startAngle: v, endAngle: y } = Hv(u);
    ((p = {
      cx: h,
      cy: g,
      startAngle: v,
      endAngle: y,
      innerRadius: _,
      outerRadius: _,
    }),
      (m = Yv));
  } else ((p = { points: Xv(o, u, i) }), (m = T_));
  var b = typeof s == `object` && `className` in s ? s.className : void 0,
    x = Vk(
      Vk(Vk(Vk({ stroke: `#ccc`, pointerEvents: `none` }, i), p), dc(s)),
      {},
      {
        payload: d,
        payloadIndex: f,
        className: W(`recharts-tooltip-cursor`, b),
      },
    );
  return (0, z.isValidElement)(s)
    ? (0, z.cloneElement)(s, x)
    : (0, z.createElement)(m, x);
}
function Kk(e) {
  var t = Ck(),
    n = Ng(),
    r = Lg(),
    i = wk();
  return z.createElement(
    Gk,
    zk({}, e, {
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
var qk = (0, z.createContext)(null),
  Jk = () => (0, z.useContext)(qk),
  Yk = e(
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
  Xk = new Yk(),
  Zk = `recharts.syncEvent.tooltip`,
  Qk = `recharts.syncEvent.brush`;
function $k(e, t) {
  if (t) {
    var n = Number.parseInt(t, 10);
    if (!nu(n)) return e?.[n];
  }
}
var eA = Jp({
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
  tA = eA.reducer,
  { createEventEmitter: nA } = eA.actions;
function rA(e) {
  return e.tooltip.syncInteraction;
}
var iA = Jp({
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
    setChartData: aA,
    setDataStartEndIndexes: oA,
    setComputedData: sA,
  } = iA.actions,
  cA = iA.reducer,
  lA = [`x`, `y`];
function uA(e, t) {
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
function dA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? uA(Object(n), !0).forEach(function (t) {
          fA(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : uA(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function fA(e, t, n) {
  return (
    (t = pA(t)) in e
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
function pA(e) {
  var t = mA(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function mA(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function hA(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = gA(e, t);
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
function gA(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var _A = () => {};
function vA() {
  var e = J(hT),
    t = J(_T),
    n = q(),
    r = J(gT),
    i = J(ak),
    a = Lg(),
    o = jg(),
    s = J((e) => e.rootProps.className);
  (0, z.useEffect)(() => {
    if (e == null) return _A;
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
              m = hA(d, lA),
              { x: h, y: g, width: _, height: v } = c.payload.sourceViewBox,
              y = dA(
                dA({}, m),
                {},
                {
                  x: o.x + (_ ? (f - h) / _ : 0) * o.width,
                  y: o.y + (v ? (p - g) / v : 0) * o.height,
                },
              );
            n(
              dA(
                dA({}, c),
                {},
                { payload: dA(dA({}, c.payload), {}, { coordinate: y }) },
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
              yO({
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
              yO({
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
      Xk.on(Zk, s),
      () => {
        Xk.off(Zk, s);
      }
    );
  }, [s, n, t, e, r, i, a, o]);
}
function yA() {
  var e = J(hT),
    t = J(_T),
    n = q();
  (0, z.useEffect)(() => {
    if (e == null) return _A;
    var r = (r, i, a) => {
      t !== a && e === r && n(oA(i));
    };
    return (
      Xk.on(Qk, r),
      () => {
        Xk.off(Qk, r);
      }
    );
  }, [n, t, e]);
}
function bA() {
  var e = q();
  ((0, z.useEffect)(() => {
    e(nA());
  }, [e]),
    vA(),
    yA());
}
function xA(e, t, n, r, i, a) {
  var o = J((n) => jk(n, e, t)),
    s = J(_T),
    c = J(hT),
    l = J(gT),
    u = J(rA)?.active,
    d = jg();
  (0, z.useEffect)(() => {
    if (!u && c != null && s != null) {
      var e = yO({
        active: a,
        coordinate: n,
        dataKey: o,
        index: i,
        label: typeof r == `number` ? String(r) : r,
        sourceViewBox: d,
      });
      Xk.emit(Zk, c, e, s);
    }
  }, [u, n, o, i, r, s, c, l, a, d]);
}
function SA(e, t) {
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
function CA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? SA(Object(n), !0).forEach(function (t) {
          wA(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : SA(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function wA(e, t, n) {
  return (
    (t = TA(t)) in e
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
function TA(e) {
  var t = EA(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function EA(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function DA(e) {
  return e.dataKey;
}
function OA(e, t) {
  return z.isValidElement(e)
    ? z.cloneElement(e, t)
    : typeof e == `function`
      ? z.createElement(e, t)
      : z.createElement(Qg, t);
}
var kA = [],
  AA = {
    allowEscapeViewBox: { x: !1, y: !1 },
    animationDuration: 400,
    animationEasing: `ease`,
    axisId: 0,
    contentStyle: {},
    cursor: !0,
    filterNull: !0,
    isAnimationActive: !d_.isSsr,
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
function jA(e) {
  var t = U_(e, AA),
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
    x = q(),
    S = typeof v == `number` ? String(v) : v;
  (0, z.useEffect)(() => {
    x(fO({ shared: g, trigger: _, axisId: b, active: n, defaultIndex: S }));
  }, [x, g, _, b, n, S]);
  var C = jg(),
    w = f_(),
    T = aO(g),
    { activeIndex: E, isActive: D } = J((e) => Lk(e, T, _, S)),
    O = J((e) => Ik(e, T, _, S)),
    k = J((e) => Fk(e, T, _, S)),
    A = J((e) => Pk(e, T, _, S)),
    ee = O,
    j = Jk(),
    M = n ?? D,
    [te, ne] = zd([ee, M]),
    re = T === `axis` ? k : void 0;
  xA(T, _, A, re, E, M);
  var ie = y ?? j;
  if (ie == null) return null;
  var ae = ee ?? kA;
  (M || (ae = kA),
    s &&
      ae.length &&
      (ae = ad(
        ee.filter((e) => e.value != null && (e.hide !== !0 || t.includeHidden)),
        u,
        DA,
      )));
  var oe = ae.length > 0,
    se = z.createElement(
      u_,
      {
        allowEscapeViewBox: r,
        animationDuration: i,
        animationEasing: a,
        isAnimationActive: c,
        active: M,
        coordinate: A,
        hasPayload: oe,
        offset: l,
        position: d,
        reverseDirection: f,
        useTranslate3d: p,
        viewBox: C,
        wrapperStyle: m,
        lastBoundingBox: te,
        innerRef: ne,
        hasPortalFromProps: !!y,
      },
      OA(
        o,
        CA(
          CA({}, t),
          {},
          {
            payload: ae,
            label: re,
            active: M,
            coordinate: A,
            accessibilityLayer: w,
          },
        ),
      ),
    );
  return z.createElement(
    z.Fragment,
    null,
    (0, _r.createPortal)(se, ie),
    M &&
      z.createElement(Kk, {
        cursor: h,
        tooltipEventType: T,
        coordinate: A,
        payload: ee,
        index: E,
      }),
  );
}
var MA = (e) => null;
MA.displayName = `Cell`;
function NA(e, t, n) {
  return (
    (t = PA(t)) in e
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
function PA(e) {
  var t = FA(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function FA(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var IA = class {
  constructor(e) {
    (NA(this, `cache`, new Map()), (this.maxSize = e));
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
function LA(e, t) {
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
function RA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? LA(Object(n), !0).forEach(function (t) {
          zA(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : LA(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function zA(e, t, n) {
  return (
    (t = BA(t)) in e
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
function BA(e) {
  var t = VA(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function VA(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var HA = RA({}, { cacheSize: 2e3, enableCache: !0 }),
  UA = new IA(HA.cacheSize),
  WA = {
    position: `absolute`,
    top: `-20000px`,
    left: 0,
    padding: 0,
    margin: 0,
    border: `none`,
    whiteSpace: `pre`,
  },
  GA = `recharts_measurement_span`;
function KA(e, t) {
  return `${e}|${t.fontSize || ``}|${t.fontFamily || ``}|${t.fontWeight || ``}|${t.fontStyle || ``}|${t.letterSpacing || ``}|${t.textTransform || ``}`;
}
var qA = (e, t) => {
    try {
      var n = document.getElementById(GA);
      (n ||
        ((n = document.createElement(`span`)),
        n.setAttribute(`id`, GA),
        n.setAttribute(`aria-hidden`, `true`),
        document.body.appendChild(n)),
        Object.assign(n.style, WA, t),
        (n.textContent = `${e}`));
      var r = n.getBoundingClientRect();
      return { width: r.width, height: r.height };
    } catch {
      return { width: 0, height: 0 };
    }
  },
  JA = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (e == null || d_.isSsr) return { width: 0, height: 0 };
    var n = HA.measureText || qA;
    if (!HA.enableCache) return n(e, t);
    var r = KA(e, t),
      i = UA.get(r);
    if (i) return i;
    var a = n(e, t);
    return (UA.set(r, a), a);
  },
  YA = (e) => {
    var t = RA(RA({}, HA), e);
    (t.cacheSize !== HA.cacheSize && (UA = new IA(t.cacheSize)), (HA = t));
  },
  XA = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  ZA = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  QA = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  $A = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  ej = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 16,
    in: 96,
    Q: 96 / 101.6,
    px: 1,
  },
  tj = Object.keys(ej),
  nj = `NaN`;
function rj(e, t) {
  return e * ej[t];
}
var ij = class e {
  static parse(t) {
    var [, n, r] = $A.exec(t) ?? [];
    return new e(parseFloat(n), r ?? ``);
  }
  constructor(e, t) {
    ((this.num = e),
      (this.unit = t),
      (this.num = e),
      (this.unit = t),
      nu(e) && (this.unit = ``),
      t !== `` && !QA.test(t) && ((this.num = NaN), (this.unit = ``)),
      tj.includes(t) && ((this.num = rj(e, t)), (this.unit = `px`)));
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
    return nu(this.num);
  }
};
function aj(e) {
  if (e.includes(nj)) return nj;
  for (var t = e; t.includes(`*`) || t.includes(`/`);) {
    var [, n, r, i] = XA.exec(t) ?? [],
      a = ij.parse(n ?? ``),
      o = ij.parse(i ?? ``),
      s = r === `*` ? a.multiply(o) : a.divide(o);
    if (s.isNaN()) return nj;
    t = t.replace(XA, s.toString());
  }
  for (; t.includes(`+`) || /.-\d+(?:\.\d+)?/.test(t);) {
    var [, c, l, u] = ZA.exec(t) ?? [],
      d = ij.parse(c ?? ``),
      f = ij.parse(u ?? ``),
      p = l === `+` ? d.add(f) : d.subtract(f);
    if (p.isNaN()) return nj;
    t = t.replace(ZA, p.toString());
  }
  return t;
}
var oj = /\(([^()]*)\)/;
function sj(e) {
  for (var t = e, n; (n = oj.exec(t)) != null;) {
    var [, r] = n;
    t = t.replace(oj, aj(r));
  }
  return t;
}
function cj(e) {
  var t = e.replace(/\s+/g, ``);
  return ((t = sj(t)), (t = aj(t)), t);
}
function lj(e) {
  try {
    return cj(e);
  } catch {
    return nj;
  }
}
function uj(e) {
  var t = lj(e.slice(5, -1));
  return t === nj ? `` : t;
}
var dj = [
    `x`,
    `y`,
    `lineHeight`,
    `capHeight`,
    `scaleToFit`,
    `textAnchor`,
    `verticalAnchor`,
    `fill`,
  ],
  fj = [`dx`, `dy`, `angle`, `className`, `breakAll`];
function pj() {
  return (
    (pj = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pj.apply(null, arguments)
  );
}
function mj(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = hj(e, t);
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
function hj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var gj = /[ \f\n\r\t\v\u2028\u2029]+/,
  _j = (e) => {
    var { children: t, breakAll: n, style: r } = e;
    try {
      var i = [];
      return (
        du(t) || (i = n ? t.toString().split(``) : t.toString().split(gj)),
        {
          wordsWithComputedWidth: i.map((e) => ({
            word: e,
            width: JA(e, r).width,
          })),
          spaceWidth: n ? 0 : JA(`\xA0`, r).width,
        }
      );
    } catch {
      return null;
    }
  },
  vj = (e, t, n, r, i) => {
    var { maxLines: a, children: o, style: s, breakAll: c } = e,
      l = K(a),
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
          var t = _j({
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
  yj = (e) => [{ words: du(e) ? [] : e.toString().split(gj) }],
  bj = (e) => {
    var {
      width: t,
      scaleToFit: n,
      children: r,
      style: i,
      breakAll: a,
      maxLines: o,
    } = e;
    if ((t || n) && !d_.isSsr) {
      var s,
        c,
        l = _j({ breakAll: a, children: r, style: i });
      if (l) {
        var { wordsWithComputedWidth: u, spaceWidth: d } = l;
        ((s = u), (c = d));
      } else return yj(r);
      return vj(
        { breakAll: a, children: r, maxLines: o, style: i },
        s,
        c,
        t,
        n,
      );
    }
    return yj(r);
  },
  xj = `#808080`,
  Sj = (0, z.forwardRef)((e, t) => {
    var {
        x: n = 0,
        y: r = 0,
        lineHeight: i = `1em`,
        capHeight: a = `0.71em`,
        scaleToFit: o = !1,
        textAnchor: s = `start`,
        verticalAnchor: c = `end`,
        fill: l = xj,
      } = e,
      u = mj(e, dj),
      d = (0, z.useMemo)(
        () =>
          bj({
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
      _ = mj(u, fj);
    if (!iu(n) || !iu(r) || d.length === 0) return null;
    var v = n + (K(f) ? f : 0),
      y = r + (K(p) ? p : 0),
      b;
    switch (c) {
      case `start`:
        b = uj(`calc(${a})`);
        break;
      case `middle`:
        b = uj(`calc(${(d.length - 1) / 2} * -${i} + (${a} / 2))`);
        break;
      default:
        b = uj(`calc(${d.length - 1} * -${i})`);
    }
    var x = [];
    if (o) {
      var S = d[0].width,
        { width: C } = u;
      x.push(`scale(${K(C) ? C / S : 1})`);
    }
    return (
      m && x.push(`rotate(${m}, ${v}, ${y})`),
      x.length && (_.transform = x.join(` `)),
      z.createElement(
        `text`,
        pj({}, fc(_), {
          ref: t,
          x: v,
          y,
          className: W(`recharts-text`, h),
          textAnchor: s,
          fill: l.includes(`url`) ? xj : l,
        }),
        d.map((e, t) => {
          var n = e.words.join(g ? `` : ` `);
          return z.createElement(
            `tspan`,
            { x: v, dy: t === 0 ? b : i, key: `${n}-${t}` },
            n,
          );
        }),
      )
    );
  });
Sj.displayName = `Text`;
var Cj = [`labelRef`];
function wj(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Tj(e, t);
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
function Tj(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Ej(e, t) {
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
function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ej(Object(n), !0).forEach(function (t) {
          Dj(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ej(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Dj(e, t, n) {
  return (
    (t = Oj(t)) in e
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
function Oj(e) {
  var t = kj(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function kj(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Aj() {
  return (
    (Aj = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Aj.apply(null, arguments)
  );
}
var jj = (0, z.createContext)(null),
  Mj = (e) => {
    var { x: t, y: n, width: r, height: i, children: a } = e,
      o = (0, z.useMemo)(
        () => ({ x: t, y: n, width: r, height: i }),
        [t, n, r, i],
      );
    return z.createElement(jj.Provider, { value: o }, a);
  },
  Nj = () => {
    var e = (0, z.useContext)(jj),
      t = jg();
    return e || t;
  },
  Pj = (0, z.createContext)(null),
  Fj = () => {
    var e = (0, z.useContext)(Pj),
      t = J(FT);
    return e || t;
  },
  Ij = (e) => {
    var { value: t, formatter: n } = e,
      r = du(e.children) ? t : e.children;
    return typeof n == `function` ? n(r) : r;
  },
  Lj = (e) => e != null && typeof e == `function`,
  Rj = (e, t) => tu(t - e) * Math.min(Math.abs(t - e), 360),
  zj = (e, t, n, r, i) => {
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
      h = Rj(d, f),
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
    var y = Zm(s, c, m, _),
      b = Zm(s, c, m, _ + (v ? 1 : -1) * 359),
      x = `M${y.x},${y.y}
    A${m},${m},0,1,${+!v},
    ${b.x},${b.y}`,
      S = du(e.id) ? ou(`recharts-radial-line-`) : e.id;
    return z.createElement(
      `text`,
      Aj({}, r, {
        dominantBaseline: `central`,
        className: W(`recharts-radial-bar-label`, o),
      }),
      z.createElement(`defs`, null, z.createElement(`path`, { id: S, d: x })),
      z.createElement(`textPath`, { xlinkHref: `#${S}` }, n),
    );
  },
  Bj = (e, t, n) => {
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
      var { x: u, y: d } = Zm(r, i, o + t, l);
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
    var { x: f, y: p } = Zm(r, i, (a + o) / 2, l);
    return { x: f, y: p, textAnchor: `middle`, verticalAnchor: `middle` };
  },
  Vj = (e) => `cx` in e && K(e.cx),
  Hj = (e, t) => {
    var { parentViewBox: n, offset: r, position: i } = e,
      a;
    n != null && !Vj(n) && (a = n);
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
      return $(
        $(
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
      return $(
        $(
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
      return $($({}, v), a ? { width: Math.max(v.x - a.x, 0), height: l } : {});
    }
    if (i === `right`) {
      var y = {
        x: o + c + h,
        y: s + l / 2,
        textAnchor: _,
        verticalAnchor: `middle`,
      };
      return $(
        $({}, y),
        a ? { width: Math.max(a.x + a.width - y.x, 0), height: l } : {},
      );
    }
    var b = a ? { width: c, height: l } : {};
    return i === `insideLeft`
      ? $(
          { x: o + h, y: s + l / 2, textAnchor: _, verticalAnchor: `middle` },
          b,
        )
      : i === `insideRight`
        ? $(
            {
              x: o + c - h,
              y: s + l / 2,
              textAnchor: g,
              verticalAnchor: `middle`,
            },
            b,
          )
        : i === `insideTop`
          ? $(
              {
                x: o + c / 2,
                y: s + d,
                textAnchor: `middle`,
                verticalAnchor: p,
              },
              b,
            )
          : i === `insideBottom`
            ? $(
                {
                  x: o + c / 2,
                  y: s + l - d,
                  textAnchor: `middle`,
                  verticalAnchor: f,
                },
                b,
              )
            : i === `insideTopLeft`
              ? $({ x: o + h, y: s + d, textAnchor: _, verticalAnchor: p }, b)
              : i === `insideTopRight`
                ? $(
                    {
                      x: o + c - h,
                      y: s + d,
                      textAnchor: g,
                      verticalAnchor: p,
                    },
                    b,
                  )
                : i === `insideBottomLeft`
                  ? $(
                      {
                        x: o + h,
                        y: s + l - d,
                        textAnchor: _,
                        verticalAnchor: f,
                      },
                      b,
                    )
                  : i === `insideBottomRight`
                    ? $(
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
                        (K(i.x) || ru(i.x)) &&
                        (K(i.y) || ru(i.y))
                      ? $(
                          {
                            x: o + su(i.x, c),
                            y: s + su(i.y, l),
                            textAnchor: `end`,
                            verticalAnchor: `end`,
                          },
                          b,
                        )
                      : $(
                          {
                            x: o + c / 2,
                            y: s + l / 2,
                            textAnchor: `middle`,
                            verticalAnchor: `middle`,
                          },
                          b,
                        );
  },
  Uj = { offset: 5 };
function Wj(e) {
  var t = U_(e, Uj),
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
    u = Fj(),
    d = Nj(),
    f = n || (r === `center` ? d : (u ?? d));
  if (
    !f ||
    (du(i) && du(a) && !(0, z.isValidElement)(o) && typeof o != `function`)
  )
    return null;
  var p = $($({}, t), {}, { viewBox: f });
  if ((0, z.isValidElement)(o)) {
    var { labelRef: m } = p,
      h = wj(p, Cj);
    return (0, z.cloneElement)(o, h);
  }
  var g;
  if (typeof o == `function`) {
    if (((g = (0, z.createElement)(o, p)), (0, z.isValidElement)(g))) return g;
  } else g = Ij(t);
  var _ = Vj(f),
    v = fc(t);
  if (_ && (r === `insideStart` || r === `insideEnd` || r === `end`))
    return zj(t, r, g, v, f);
  var y = _ ? Bj(f, t.offset, t.position) : Hj(t, f);
  return z.createElement(
    Sj,
    Aj({ ref: l, className: W(`recharts-label`, s) }, v, y, { breakAll: c }),
    g,
  );
}
Wj.displayName = `Label`;
var Gj = (e, t, n) => {
  if (!e) return null;
  var r = { viewBox: t, labelRef: n };
  return e === !0
    ? z.createElement(Wj, Aj({ key: `label-implicit` }, r))
    : iu(e)
      ? z.createElement(Wj, Aj({ key: `label-implicit`, value: e }, r))
      : (0, z.isValidElement)(e)
        ? e.type === Wj
          ? (0, z.cloneElement)(e, $({ key: `label-implicit` }, r))
          : z.createElement(Wj, Aj({ key: `label-implicit`, content: e }, r))
        : Lj(e)
          ? z.createElement(Wj, Aj({ key: `label-implicit`, content: e }, r))
          : e && typeof e == `object`
            ? z.createElement(Wj, Aj({}, e, { key: `label-implicit` }, r))
            : null;
};
function Kj(e) {
  var { label: t, labelRef: n } = e;
  return Gj(t, Nj(), n) || null;
}
var qj = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e[e.length - 1];
    }
    e.last = t;
  }),
  Jj = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Array.isArray(e) ? e : Array.from(e);
    }
    e.toArray = t;
  }),
  Yj = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = qj(),
      n = Jj(),
      r = Pu();
    function i(e) {
      if (r.isArrayLike(e)) return t.last(n.toArray(e));
    }
    e.last = i;
  }),
  Xj = n((e, t) => {
    t.exports = Yj().last;
  }),
  Zj = e(Xj()),
  Qj = [`valueAccessor`],
  $j = [`dataKey`, `clockWise`, `id`, `textBreakAll`];
function eM() {
  return (
    (eM = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    eM.apply(null, arguments)
  );
}
function tM(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = nM(e, t);
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
function nM(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var rM = (e) => (Array.isArray(e.value) ? (0, Zj.default)(e.value) : e.value),
  iM = (0, z.createContext)(void 0),
  aM = iM.Provider,
  oM = (0, z.createContext)(void 0),
  sM = oM.Provider;
function cM() {
  return (0, z.useContext)(iM);
}
function lM() {
  return (0, z.useContext)(oM);
}
function uM(e) {
  var { valueAccessor: t = rM } = e,
    n = tM(e, Qj),
    { dataKey: r, clockWise: i, id: a, textBreakAll: o } = n,
    s = tM(n, $j),
    c = cM(),
    l = lM(),
    u = c || l;
  return !u || !u.length
    ? null
    : z.createElement(
        Cc,
        { className: `recharts-label-list` },
        u.map((e, i) => {
          var c = du(r) ? t(e, i) : dh(e && e.payload, r),
            l = du(a) ? {} : { id: `${a}-${i}` };
          return z.createElement(
            Wj,
            eM({ key: `label-${i}` }, fc(e), s, l, {
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
uM.displayName = `LabelList`;
function dM(e) {
  var { label: t } = e;
  return t
    ? t === !0
      ? z.createElement(uM, { key: `labelList-implicit` })
      : z.isValidElement(t) || Lj(t)
        ? z.createElement(uM, { key: `labelList-implicit`, content: t })
        : typeof t == `object`
          ? z.createElement(
              uM,
              eM({ key: `labelList-implicit` }, t, { type: String(t.type) }),
            )
          : null
    : null;
}
var fM = Jp({
    name: `polarAxis`,
    initialState: { radiusAxis: {}, angleAxis: {} },
    reducers: {
      addRadiusAxis(e, t) {
        e.radiusAxis[t.payload.id] = Xf(t.payload);
      },
      removeRadiusAxis(e, t) {
        delete e.radiusAxis[t.payload.id];
      },
      addAngleAxis(e, t) {
        e.angleAxis[t.payload.id] = Xf(t.payload);
      },
      removeAngleAxis(e, t) {
        delete e.angleAxis[t.payload.id];
      },
    },
  }),
  {
    addRadiusAxis: pM,
    removeRadiusAxis: mM,
    addAngleAxis: hM,
    removeAngleAxis: gM,
  } = fM.actions,
  _M = fM.reducer,
  vM = n((e) => {
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
  yM = n((e, t) => {
    t.exports = vM();
  })(),
  bM = (e) =>
    typeof e == `string` ? e : e ? e.displayName || e.name || `Component` : ``,
  xM = null,
  SM = null,
  CM = (e) => {
    if (e === xM && Array.isArray(SM)) return SM;
    var t = [];
    return (
      z.Children.forEach(e, (e) => {
        du(e) ||
          ((0, yM.isFragment)(e)
            ? (t = t.concat(CM(e.props.children)))
            : t.push(e));
      }),
      (SM = t),
      (xM = e),
      t
    );
  };
function wM(e, t) {
  var n = [],
    r = [];
  return (
    (r = Array.isArray(t) ? t.map((e) => bM(e)) : [bM(t)]),
    CM(e).forEach((e) => {
      var t =
        (0, eu.default)(e, `type.displayName`) ||
        (0, eu.default)(e, `type.name`);
      r.indexOf(t) !== -1 && n.push(e);
    }),
    n
  );
}
var TM = n((e) => {
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
  EM = n((e, t) => {
    t.exports = TM().isPlainObject;
  });
function DM(e, t) {
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
function OM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? DM(Object(n), !0).forEach(function (t) {
          kM(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : DM(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function kM(e, t, n) {
  return (
    (t = AM(t)) in e
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
function AM(e) {
  var t = jM(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function jM(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function MM() {
  return (
    (MM = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    MM.apply(null, arguments)
  );
}
var NM = (e, t, n, r, i) => {
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
  PM = {
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
  FM = (e) => {
    var t = U_(e, PM),
      { x: n, y: r, upperWidth: i, lowerWidth: a, height: o, className: s } = t,
      {
        animationEasing: c,
        animationDuration: l,
        animationBegin: u,
        isUpdateAnimationActive: d,
      } = t,
      f = (0, z.useRef)(null),
      [p, m] = (0, z.useState)(-1),
      h = (0, z.useRef)(i),
      g = (0, z.useRef)(a),
      _ = (0, z.useRef)(o),
      v = (0, z.useRef)(n),
      y = (0, z.useRef)(r),
      b = Ov(e, `trapezoid-`);
    if (
      ((0, z.useEffect)(() => {
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
    var x = W(`recharts-trapezoid`, s);
    if (!d)
      return z.createElement(
        `g`,
        null,
        z.createElement(
          `path`,
          MM({}, fc(t), { className: x, d: NM(n, r, i, a, o) }),
        ),
      );
    var S = h.current,
      C = g.current,
      w = _.current,
      T = v.current,
      E = y.current,
      D = `0px ${p === -1 ? 1 : p}px`,
      O = `${p}px 0px`,
      k = Q_([`strokeDasharray`], l, c);
    return z.createElement(
      Dv,
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
        var s = lu(S, i, e),
          c = lu(C, a, e),
          l = lu(w, o, e),
          u = lu(T, n, e),
          d = lu(E, r, e);
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
        return z.createElement(
          `path`,
          MM({}, fc(t), {
            className: x,
            d: NM(u, d, s, c, l),
            ref: f,
            style: OM(OM({}, p), t.style),
          }),
        );
      },
    );
  },
  IM = e(EM()),
  LM = [
    `option`,
    `shapeType`,
    `propTransformer`,
    `activeClassName`,
    `isActive`,
  ];
function RM(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = zM(e, t);
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
function zM(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function BM(e, t) {
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
function VM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? BM(Object(n), !0).forEach(function (t) {
          HM(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : BM(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function HM(e, t, n) {
  return (
    (t = UM(t)) in e
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
function UM(e) {
  var t = WM(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function WM(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function GM(e, t) {
  return VM(VM({}, t), e);
}
function KM(e, t) {
  return e === `symbols`;
}
function qM(e) {
  var { shapeType: t, elementProps: n } = e;
  switch (t) {
    case `rectangle`:
      return z.createElement(Vv, n);
    case `trapezoid`:
      return z.createElement(FM, n);
    case `sector`:
      return z.createElement(Yv, n);
    case `symbols`:
      if (KM(t, n)) return z.createElement(Du, n);
      break;
    default:
      return null;
  }
}
function JM(e) {
  return (0, z.isValidElement)(e) ? e.props : e;
}
function YM(e) {
  var {
      option: t,
      shapeType: n,
      propTransformer: r = GM,
      activeClassName: i = `recharts-active-shape`,
      isActive: a,
    } = e,
    o = RM(e, LM),
    s;
  if ((0, z.isValidElement)(t))
    s = (0, z.cloneElement)(t, VM(VM({}, o), JM(t)));
  else if (typeof t == `function`) s = t(o);
  else if ((0, IM.default)(t) && typeof t != `boolean`) {
    var c = r(t, o);
    s = z.createElement(qM, { shapeType: n, elementProps: c });
  } else {
    var l = o;
    s = z.createElement(qM, { shapeType: n, elementProps: l });
  }
  return a ? z.createElement(Cc, { className: i }, s) : s;
}
var XM = (e, t) => {
    var n = q();
    return (r, i) => (a) => {
      (e?.(r, i, a),
        n(
          pO({
            activeIndex: String(i),
            activeDataKey: t,
            activeCoordinate: r.tooltipPosition,
          }),
        ));
    };
  },
  ZM = (e) => {
    var t = q();
    return (n, r) => (i) => {
      (e?.(n, r, i), t(mO()));
    };
  },
  QM = (e, t) => {
    var n = q();
    return (r, i) => (a) => {
      (e?.(r, i, a),
        n(
          gO({
            activeIndex: String(i),
            activeDataKey: t,
            activeCoordinate: r.tooltipPosition,
          }),
        ));
    };
  };
function $M(e) {
  var { fn: t, args: n } = e,
    r = q(),
    i = ig();
  return (
    (0, z.useLayoutEffect)(() => {
      if (!i) {
        var e = t(n);
        return (
          r(uO(e)),
          () => {
            r(dO(e));
          }
        );
      }
    }, [t, n, r, i]),
    null
  );
}
var eN = () => {};
function tN(e) {
  var { legendPayload: t } = e,
    n = q(),
    r = ig();
  return (
    (0, z.useLayoutEffect)(
      () =>
        r
          ? eN
          : (n(Hg(t)),
            () => {
              n(Ug(t));
            }),
      [n, r, t],
    ),
    null
  );
}
function nN(e) {
  var { legendPayload: t } = e,
    n = q(),
    r = J(X);
  return (
    (0, z.useLayoutEffect)(
      () =>
        r !== `centric` && r !== `radial`
          ? eN
          : (n(Hg(t)),
            () => {
              n(Ug(t));
            }),
      [n, r, t],
    ),
    null
  );
}
var rN =
  z.useId ??
  (() => {
    var [e] = z.useState(() => ou(`uid-`));
    return e;
  });
function iN(e, t) {
  var n = rN();
  return t || (e ? `${e}-${n}` : n);
}
var aN = (0, z.createContext)(void 0),
  oN = (e) => {
    var { id: t, type: n, children: r } = e,
      i = iN(`recharts-${n}`, t);
    return z.createElement(aN.Provider, { value: i }, r(i));
  },
  sN = Jp({
    name: `graphicalItems`,
    initialState: { cartesianItems: [], polarItems: [] },
    reducers: {
      addCartesianGraphicalItem: {
        reducer(e, t) {
          e.cartesianItems.push(Xf(t.payload));
        },
        prepare: wp(),
      },
      replaceCartesianGraphicalItem: {
        reducer(e, t) {
          var { prev: n, next: r } = t.payload,
            i = Gf(e).cartesianItems.indexOf(Xf(n));
          i > -1 && (e.cartesianItems[i] = Xf(r));
        },
        prepare: wp(),
      },
      removeCartesianGraphicalItem: {
        reducer(e, t) {
          var n = Gf(e).cartesianItems.indexOf(Xf(t.payload));
          n > -1 && e.cartesianItems.splice(n, 1);
        },
        prepare: wp(),
      },
      addPolarGraphicalItem: {
        reducer(e, t) {
          e.polarItems.push(Xf(t.payload));
        },
        prepare: wp(),
      },
      removePolarGraphicalItem: {
        reducer(e, t) {
          var n = Gf(e).polarItems.indexOf(Xf(t.payload));
          n > -1 && e.polarItems.splice(n, 1);
        },
        prepare: wp(),
      },
    },
  }),
  {
    addCartesianGraphicalItem: cN,
    replaceCartesianGraphicalItem: lN,
    removeCartesianGraphicalItem: uN,
    addPolarGraphicalItem: dN,
    removePolarGraphicalItem: fN,
  } = sN.actions,
  pN = sN.reducer;
function mN(e) {
  var t = q(),
    n = (0, z.useRef)(null);
  return (
    (0, z.useLayoutEffect)(() => {
      (n.current === null
        ? t(cN(e))
        : n.current !== e && t(lN({ prev: n.current, next: e })),
        (n.current = e));
    }, [t, e]),
    (0, z.useLayoutEffect)(
      () => () => {
        n.current &&= (t(uN(n.current)), null);
      },
      [t],
    ),
    null
  );
}
function hN(e) {
  var t = q();
  return (
    (0, z.useLayoutEffect)(
      () => (
        t(dN(e)),
        () => {
          t(fN(e));
        }
      ),
      [t, e],
    ),
    null
  );
}
function gN(e, t) {
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
function _N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? gN(Object(n), !0).forEach(function (t) {
          vN(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : gN(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function vN(e, t, n) {
  return (
    (t = yN(t)) in e
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
function yN(e) {
  var t = bN(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function bN(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var xN = Jp({
    name: `cartesianAxis`,
    initialState: { xAxis: {}, yAxis: {}, zAxis: {} },
    reducers: {
      addXAxis: {
        reducer(e, t) {
          e.xAxis[t.payload.id] = Xf(t.payload);
        },
        prepare: wp(),
      },
      removeXAxis: {
        reducer(e, t) {
          delete e.xAxis[t.payload.id];
        },
        prepare: wp(),
      },
      addYAxis: {
        reducer(e, t) {
          e.yAxis[t.payload.id] = Xf(t.payload);
        },
        prepare: wp(),
      },
      removeYAxis: {
        reducer(e, t) {
          delete e.yAxis[t.payload.id];
        },
        prepare: wp(),
      },
      addZAxis: {
        reducer(e, t) {
          e.zAxis[t.payload.id] = Xf(t.payload);
        },
        prepare: wp(),
      },
      removeZAxis: {
        reducer(e, t) {
          delete e.zAxis[t.payload.id];
        },
        prepare: wp(),
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
          e.yAxis[n] = _N(
            _N({}, e.yAxis[n]),
            {},
            { width: r, widthHistory: o },
          );
        }
      },
    },
  }),
  {
    addXAxis: SN,
    removeXAxis: CN,
    addYAxis: wN,
    removeYAxis: TN,
    addZAxis: EN,
    removeZAxis: DN,
    updateYAxisWidth: ON,
  } = xN.actions,
  kN = xN.reducer,
  AN = Y(
    [
      Y([eg], (e) => {
        if (e)
          return { top: e.top, bottom: e.bottom, left: e.left, right: e.right };
      }),
      Ih,
      Lh,
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
  jN = () => J(AN),
  MN = () => J(gk),
  NN = [`x`, `y`];
function PN() {
  return (
    (PN = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    PN.apply(null, arguments)
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
function BN(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = VN(e, t);
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
function VN(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function HN(e, t) {
  var { x: n, y: r } = e,
    i = BN(e, NN),
    a = `${n}`,
    o = parseInt(a, 10),
    s = `${r}`,
    c = parseInt(s, 10),
    l = `${t.height || i.height}`,
    u = parseInt(l, 10),
    d = `${t.width || i.width}`,
    f = parseInt(d, 10);
  return IN(
    IN(IN(IN(IN({}, t), i), o ? { x: o } : {}), c ? { y: c } : {}),
    {},
    { height: u, width: f, name: t.name, radius: t.radius },
  );
}
function UN(e) {
  return z.createElement(
    YM,
    PN(
      {
        shapeType: `rectangle`,
        propTransformer: HN,
        activeClassName: `recharts-active-bar`,
      },
      e,
    ),
  );
}
var WN = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (n, r) => {
      if (K(e)) return e;
      var i = K(n) || du(n);
      return i ? e(n, r) : (!i && c(!1), t);
    };
  },
  GN = Jp({
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
  { addErrorBar: KN, replaceErrorBar: qN, removeErrorBar: JN } = GN.actions,
  YN = GN.reducer,
  XN = [`children`];
function ZN(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = QN(e, t);
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
function QN(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var $N = (0, z.createContext)({
  data: [],
  xAxisId: `xAxis-0`,
  yAxisId: `yAxis-0`,
  dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }),
  errorBarOffset: 0,
});
function eP(e) {
  var { children: t } = e,
    n = ZN(e, XN);
  return z.createElement($N.Provider, { value: n }, t);
}
function tP(e, t) {
  var n = J((t) => tE(t, e)),
    r = J((e) => iE(e, t)),
    i = n?.allowDataOverflow ?? $T.allowDataOverflow,
    a = r?.allowDataOverflow ?? nE.allowDataOverflow;
  return { needClip: i || a, needClipX: i, needClipY: a };
}
function nP(e) {
  var { xAxisId: t, yAxisId: n, clipPathId: r } = e,
    i = jN(),
    { needClipX: a, needClipY: o, needClip: s } = tP(t, n);
  if (!s) return null;
  var { x: c, y: l, width: u, height: d } = i;
  return z.createElement(
    `clipPath`,
    { id: `clipPath-${r}` },
    z.createElement(`rect`, {
      x: a ? c : c - u / 2,
      y: o ? l : l - d / 2,
      width: a ? u : u * 2,
      height: o ? d : d * 2,
    }),
  );
}
var rP = [`onMouseEnter`, `onMouseLeave`, `onClick`],
  iP = [`value`, `background`, `tooltipPosition`],
  aP = [`id`],
  oP = [`onMouseEnter`, `onClick`, `onMouseLeave`];
function sP() {
  return (
    (sP = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    sP.apply(null, arguments)
  );
}
function cP(e, t) {
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
function lP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? cP(Object(n), !0).forEach(function (t) {
          uP(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : cP(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function uP(e, t, n) {
  return (
    (t = dP(t)) in e
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
function dP(e) {
  var t = fP(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function fP(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function pP(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = mP(e, t);
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
function mP(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var hP = (e) => {
  var { dataKey: t, name: n, fill: r, legendType: i, hide: a } = e;
  return [
    { inactive: a, dataKey: t, type: i, color: r, value: Mh(n, t), payload: e },
  ];
};
function gP(e) {
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
      name: Mh(a, t),
      hide: o,
      type: e.tooltipType,
      color: e.fill,
      unit: s,
    },
  };
}
function _P(e) {
  var t = J(uk),
    { data: n, dataKey: r, background: i, allOtherBarProps: a } = e,
    { onMouseEnter: o, onMouseLeave: s, onClick: c } = a,
    l = pP(a, rP),
    u = XM(o, r),
    d = ZM(s),
    f = QM(c, r);
  if (!i || n == null) return null;
  var p = dc(i);
  return z.createElement(
    z.Fragment,
    null,
    n.map((e, n) => {
      var { value: a, background: o, tooltipPosition: s } = e,
        c = pP(e, iP);
      if (!o) return null;
      var m = u(e, n),
        h = d(e, n),
        g = f(e, n),
        _ = lP(
          lP(
            lP(
              lP(
                lP({ option: i, isActive: String(n) === t }, c),
                {},
                { fill: `#eee` },
                o,
              ),
              p,
            ),
            Au(l, e, n),
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
      return z.createElement(UN, sP({ key: `background-bar-${n}` }, _));
    }),
  );
}
function vP(e) {
  var { showLabels: t, children: n, rects: r } = e,
    i = r?.map((e) => {
      var t = { x: e.x, y: e.y, width: e.width, height: e.height };
      return lP(
        lP({}, t),
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
  return z.createElement(aM, { value: t ? i : void 0 }, n);
}
function yP(e) {
  var {
      shape: t,
      activeBar: n,
      baseProps: r,
      entry: i,
      index: a,
      dataKey: o,
    } = e,
    s = J(uk),
    c = J(fk),
    l = n && String(a) === s && (c == null || o === c),
    u = l ? n : t;
  return z.createElement(
    UN,
    sP({}, r, { name: String(r.name) }, i, {
      isActive: l,
      option: u,
      index: a,
      dataKey: o,
    }),
  );
}
function bP(e) {
  var { shape: t, baseProps: n, entry: r, index: i, dataKey: a } = e;
  return z.createElement(
    UN,
    sP({}, n, { name: String(n.name) }, r, {
      isActive: !1,
      option: t,
      index: i,
      dataKey: a,
    }),
  );
}
function xP(e) {
  var { data: t, props: n } = e,
    r = uc(n),
    { id: i } = r,
    a = pP(r, aP),
    { shape: o, dataKey: s, activeBar: c } = n,
    { onMouseEnter: l, onClick: u, onMouseLeave: d } = n,
    f = pP(n, oP),
    p = XM(l, s),
    m = ZM(d),
    h = QM(u, s);
  return t
    ? z.createElement(
        z.Fragment,
        null,
        t.map((e, t) =>
          z.createElement(
            Cc,
            sP(
              {
                key: `rectangle-${e?.x}-${e?.y}-${e?.value}-${t}`,
                className: `recharts-bar-rectangle`,
              },
              Au(f, e, t),
              {
                onMouseEnter: p(e, t),
                onMouseLeave: m(e, t),
                onClick: h(e, t),
              },
            ),
            c
              ? z.createElement(yP, {
                  shape: o,
                  activeBar: c,
                  baseProps: a,
                  entry: e,
                  index: t,
                  dataKey: s,
                })
              : z.createElement(bP, {
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
function SP(e) {
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
    f = Ov(t, `recharts-bar-`),
    [p, m] = (0, z.useState)(!1),
    h = !p,
    g = (0, z.useCallback)(() => {
      (typeof l == `function` && l(), m(!1));
    }, [l]),
    _ = (0, z.useCallback)(() => {
      (typeof u == `function` && u(), m(!0));
    }, [u]);
  return z.createElement(
    vP,
    { showLabels: h, rects: r },
    z.createElement(
      Dv,
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
                  return lP(
                    lP({}, t),
                    {},
                    {
                      x: lu(r.x, t.x, e),
                      y: lu(r.y, t.y, e),
                      width: lu(r.width, t.width, e),
                      height: lu(r.height, t.height, e),
                    },
                  );
                if (i === `horizontal`) {
                  var a = lu(0, t.height, e);
                  return lP(
                    lP({}, t),
                    {},
                    { y: t.y + t.height - a, height: a },
                  );
                }
                var o = lu(0, t.width, e);
                return lP(lP({}, t), {}, { width: o });
              });
        return (
          e > 0 && (n.current = a ?? null),
          a == null
            ? null
            : z.createElement(
                Cc,
                null,
                z.createElement(xP, { props: t, data: a }),
              )
        );
      },
    ),
    z.createElement(dM, { label: t.label }),
    t.children,
  );
}
function CP(e) {
  var t = (0, z.useRef)(null);
  return z.createElement(SP, { previousRectanglesRef: t, props: e });
}
var wP = 0,
  TP = (e, t) => {
    var n = Array.isArray(e.value) ? e.value[1] : e.value;
    return { x: e.x, y: e.y, value: n, errorVal: dh(e, t) };
  },
  EP = class extends z.PureComponent {
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
      var l = W(`recharts-bar`, r),
        u = c;
      return z.createElement(
        Cc,
        { className: l, id: c },
        o &&
          z.createElement(
            `defs`,
            null,
            z.createElement(nP, { clipPathId: u, xAxisId: i, yAxisId: a }),
          ),
        z.createElement(
          Cc,
          {
            className: `recharts-bar-rectangles`,
            clipPath: o ? `url(#clipPath-${u})` : void 0,
          },
          z.createElement(_P, {
            data: t,
            dataKey: n,
            background: s,
            allOtherBarProps: this.props,
          }),
          z.createElement(CP, this.props),
        ),
      );
    }
  },
  DP = {
    activeBar: !1,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: `ease`,
    hide: !1,
    isAnimationActive: !d_.isSsr,
    legendType: `rect`,
    minPointSize: wP,
    xAxisId: 0,
    yAxisId: 0,
  };
function OP(e) {
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
    { needClip: d } = tP(t, n),
    f = Lg(),
    p = ig(),
    m = wM(e.children, MA),
    h = J((r) => XP(r, t, n, p, e.id, m));
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
    z.createElement(
      eP,
      {
        xAxisId: t,
        yAxisId: n,
        data: h,
        dataPointFormatter: TP,
        errorBarOffset: g,
      },
      z.createElement(
        EP,
        sP({}, e, {
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
function kP(e) {
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
    _ = wh({ numericAxis: h });
  return d
    .map((e, d) => {
      var h, v, y, b, x, S;
      u
        ? (h = yh(u[d], g))
        : ((h = dh(e, n)), Array.isArray(h) || (h = [_, h]));
      var C = WN(r, wP)(h[1], d);
      if (t === `horizontal`) {
        var [w, T] = [s.scale(h[0]), s.scale(h[1])];
        ((v = Ch({
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
          ((x = nu(E) ? 0 : E),
          (S = { x: v, y: f.top, width: b, height: f.height }),
          Math.abs(C) > 0 && Math.abs(x) < Math.abs(C))
        ) {
          var D = tu(x || C) * (Math.abs(C) - Math.abs(x));
          ((y -= D), (x += D));
        }
      } else {
        var [O, k] = [o.scale(h[0]), o.scale(h[1])];
        if (
          ((v = O),
          (y = Ch({
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
          var A = tu(b || C) * (Math.abs(C) - Math.abs(b));
          b += A;
        }
      }
      return v == null || y == null || b == null || x == null
        ? null
        : lP(
            lP({}, e),
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
function AP(e) {
  var t = U_(e, DP),
    n = ig();
  return z.createElement(oN, { id: t.id, type: `bar` }, (e) =>
    z.createElement(
      z.Fragment,
      null,
      z.createElement(tN, { legendPayload: hP(t) }),
      z.createElement($M, { fn: gP, args: t }),
      z.createElement(mN, {
        type: `bar`,
        id: e,
        data: void 0,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        dataKey: t.dataKey,
        stackId: Sh(t.stackId),
        hide: t.hide,
        barSize: t.barSize,
        minPointSize: t.minPointSize,
        maxBarSize: t.maxBarSize,
        isPanorama: n,
      }),
      z.createElement(OP, sP({}, t, { id: e })),
    ),
  );
}
var jP = z.memo(AP);
jP.displayName = `Bar`;
function MP(e, t) {
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
function NP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? MP(Object(n), !0).forEach(function (t) {
          PP(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : MP(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function PP(e, t, n) {
  return (
    (t = FP(t)) in e
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
function FP(e) {
  var t = IP(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function IP(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var LP = (e, t) => t,
  RP = (e, t, n) => n,
  zP = (e, t, n, r) => r,
  BP = Y([fE, (e, t, n, r, i) => i], (e, t) =>
    e.filter((e) => e.type === `bar`).find((e) => e.id === t),
  ),
  VP = Y([BP], (e) => e?.maxBarSize),
  HP = (e, t, n, r, i, a) => a,
  UP = (e, t, n) => {
    var r = n ?? e;
    if (!du(r)) return su(r, t, 0);
  },
  WP = Y([X, fE, LP, RP, zP], (e, t, n, r, i) =>
    t
      .filter((t) => (e === `horizontal` ? t.xAxisId === n : t.yAxisId === r))
      .filter((e) => e.isPanorama === i)
      .filter((e) => e.hide === !1)
      .filter((e) => e.type === `bar`),
  ),
  GP = (e, t, n, r) =>
    X(e) === `horizontal` ? ME(e, `yAxis`, n, r) : ME(e, `xAxis`, t, r),
  KP = Y(
    [
      WP,
      fT,
      (e, t, n) =>
        X(e) === `horizontal` ? UD(e, `xAxis`, t) : UD(e, `yAxis`, n),
    ],
    (e, t, n) => {
      var r = {},
        i = e.filter(WT),
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
            barSize: UP(t, n, i[0].barSize),
          };
        }),
        c = a.map((e) => ({
          stackId: void 0,
          dataKeys: [e.dataKey].filter((e) => e != null),
          barSize: UP(t, n, e.barSize),
        }));
      return [...s, ...c];
    },
  ),
  qP = (e, t, n, r, i) => {
    var a = BP(e, t, n, r, i);
    if (a != null) {
      var o = X(e),
        s = lT(e),
        { maxBarSize: c } = a,
        l = du(c) ? s : c,
        u,
        d;
      return (
        o === `horizontal`
          ? ((u = $D(e, `xAxis`, t, r)), (d = QD(e, `xAxis`, t, r)))
          : ((u = $D(e, `yAxis`, n, r)), (d = QD(e, `yAxis`, n, r))),
        Ah(u, d, !0) ?? l ?? 0
      );
    }
  },
  JP = (e, t, n, r) => {
    var i = X(e),
      a,
      o;
    return (
      i === `horizontal`
        ? ((a = $D(e, `xAxis`, t, r)), (o = QD(e, `xAxis`, t, r)))
        : ((a = $D(e, `yAxis`, n, r)), (o = QD(e, `yAxis`, n, r))),
      Ah(a, o)
    );
  };
function YP(e, t, n, r, i) {
  var a = r.length;
  if (!(a < 1)) {
    var o = su(e, n, 0, !0),
      s,
      c = [];
    if (vg(r[0].barSize)) {
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
      var p = su(t, n, 0, !0);
      n - 2 * p - (a - 1) * o <= 0 && (o = 0);
      var m = (n - 2 * p - (a - 1) * o) / a;
      m > 1 && (m >>= 0);
      var h = vg(i) ? Math.min(m, i) : m;
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
var XP = Y(
    [
      eg,
      ng,
      (e, t, n, r) => $D(e, `xAxis`, t, r),
      (e, t, n, r) => $D(e, `yAxis`, n, r),
      (e, t, n, r) => QD(e, `xAxis`, t, r),
      (e, t, n, r) => QD(e, `yAxis`, n, r),
      Y(
        [
          Y([KP, lT, uT, dT, qP, JP, VP], (e, t, n, r, i, a, o) => {
            var s = du(o) ? t : o,
              c = YP(n, r, i === a ? a : i, e, s);
            return (
              i !== a &&
                c != null &&
                (c = c.map((e) =>
                  NP(
                    NP({}, e),
                    {},
                    {
                      position: NP(
                        NP({}, e.position),
                        {},
                        { offset: e.position.offset - i / 2 },
                      ),
                    },
                  ),
                )),
              c
            );
          }),
          BP,
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
      X,
      Lw,
      JP,
      Y([GP, BP], (e, t) => {
        var n = RT(t);
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
      BP,
      HP,
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
          return kP({
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
  ZP = (e) => {
    var { chartData: t } = e,
      n = q(),
      r = ig();
    return (
      (0, z.useEffect)(
        () =>
          r
            ? () => {}
            : (n(aA(t)),
              () => {
                n(aA(void 0));
              }),
        [t, n, r],
      ),
      null
    );
  },
  QP = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
  $P = Jp({
    name: `brush`,
    initialState: QP,
    reducers: {
      setBrushSettings(e, t) {
        return t.payload == null ? QP : t.payload;
      },
    },
  }),
  { setBrushSettings: eF } = $P.actions,
  tF = $P.reducer;
function nF(e, t, n) {
  return (
    (t = rF(t)) in e
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
function rF(e) {
  var t = iF(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function iF(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
nF(
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
function aF(e) {
  return ((e % 180) + 180) % 180;
}
var oF = function (e) {
    var { width: t, height: n } = e,
      r =
        (aF(
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        ) *
          Math.PI) /
        180,
      i = Math.atan(n / t),
      a = r > i && r < Math.PI - i ? n / Math.sin(r) : t / Math.cos(r);
    return Math.abs(a);
  },
  sF = Jp({
    name: `referenceElements`,
    initialState: { dots: [], areas: [], lines: [] },
    reducers: {
      addDot: (e, t) => {
        e.dots.push(t.payload);
      },
      removeDot: (e, t) => {
        var n = Gf(e).dots.findIndex((e) => e === t.payload);
        n !== -1 && e.dots.splice(n, 1);
      },
      addArea: (e, t) => {
        e.areas.push(t.payload);
      },
      removeArea: (e, t) => {
        var n = Gf(e).areas.findIndex((e) => e === t.payload);
        n !== -1 && e.areas.splice(n, 1);
      },
      addLine: (e, t) => {
        e.lines.push(t.payload);
      },
      removeLine: (e, t) => {
        var n = Gf(e).lines.findIndex((e) => e === t.payload);
        n !== -1 && e.lines.splice(n, 1);
      },
    },
  }),
  {
    addDot: cF,
    removeDot: lF,
    addArea: uF,
    removeArea: dF,
    addLine: fF,
    removeLine: pF,
  } = sF.actions,
  mF = sF.reducer,
  hF = (0, z.createContext)(void 0),
  gF = (e) => {
    var { children: t } = e,
      [n] = (0, z.useState)(`${ou(`recharts`)}-clip`),
      r = jN();
    if (r == null) return null;
    var { x: i, y: a, width: o, height: s } = r;
    return z.createElement(
      hF.Provider,
      { value: n },
      z.createElement(
        `defs`,
        null,
        z.createElement(
          `clipPath`,
          { id: n },
          z.createElement(`rect`, { x: i, y: a, height: s, width: o }),
        ),
      ),
      t,
    );
  };
function _F(e, t) {
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
function vF(e, t, n) {
  if (t < 1) return [];
  if (t === 1 && n === void 0) return e;
  for (var r = [], i = 0; i < e.length; i += t)
    if (n === void 0 || n(e[i]) === !0) r.push(e[i]);
    else return;
  return r;
}
function yF(e, t, n) {
  return oF({ width: e.width + t.width, height: e.height + t.height }, n);
}
function bF(e, t, n) {
  var r = n === `width`,
    { x: i, y: a, width: o, height: s } = e;
  return t === 1
    ? { start: r ? i : a, end: r ? i + o : a + s }
    : { start: r ? i + o : a + s, end: r ? i : a };
}
function xF(e, t, n, r, i) {
  if (e * t < e * r || e * t > e * i) return !1;
  var a = n();
  return e * (t - (e * a) / 2 - r) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
}
function SF(e, t) {
  return vF(e, t + 1);
}
function CF(e, t, n, r, i) {
  for (
    var a = (r || []).slice(),
      { start: o, end: s } = t,
      c = 0,
      l = 1,
      u = o,
      d = function () {
        var t = r?.[c];
        if (t === void 0) return { v: vF(r, l) };
        var a = c,
          d,
          f = () => (d === void 0 && (d = n(t, a)), d),
          p = t.coordinate,
          m = c === 0 || xF(e, p, f, u, s);
        (m || ((c = 0), (u = o), (l += 1)),
          m && ((u = p + e * (f() / 2 + i)), (c += l)));
      },
      f;
    l <= a.length;
  )
    if (((f = d()), f)) return f.v;
  return [];
}
function wF(e, t) {
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
function TF(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? wF(Object(n), !0).forEach(function (t) {
          EF(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : wF(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function EF(e, t, n) {
  return (
    (t = DF(t)) in e
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
function DF(e) {
  var t = OF(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function OF(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function kF(e, t, n, r, i) {
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
          a[t] = r = TF(
            TF({}, r),
            {},
            { tickCoord: d > 0 ? r.coordinate - d * e : r.coordinate },
          );
        } else a[t] = r = TF(TF({}, r), {}, { tickCoord: r.coordinate });
        xF(e, r.tickCoord, u, s, c) &&
          ((c = r.tickCoord - e * (u() / 2 + i)),
          (a[t] = TF(TF({}, r), {}, { isShow: !0 })));
      },
      u = o - 1;
    u >= 0;
    u--
  )
    l(u);
  return a;
}
function AF(e, t, n, r, i, a) {
  var o = (r || []).slice(),
    s = o.length,
    { start: c, end: l } = t;
  if (a) {
    var u = r[s - 1],
      d = n(u, s - 1),
      f = e * (u.coordinate + (e * d) / 2 - l);
    ((o[s - 1] = u =
      TF(
        TF({}, u),
        {},
        { tickCoord: f > 0 ? u.coordinate - f * e : u.coordinate },
      )),
      xF(e, u.tickCoord, () => d, c, l) &&
        ((l = u.tickCoord - e * (d / 2 + i)),
        (o[s - 1] = TF(TF({}, u), {}, { isShow: !0 }))));
  }
  for (
    var p = a ? s - 1 : s,
      m = function (t) {
        var r = o[t],
          a,
          s = () => (a === void 0 && (a = n(r, t)), a);
        if (t === 0) {
          var u = e * (r.coordinate - (e * s()) / 2 - c);
          o[t] = r = TF(
            TF({}, r),
            {},
            { tickCoord: u < 0 ? r.coordinate - u * e : r.coordinate },
          );
        } else o[t] = r = TF(TF({}, r), {}, { tickCoord: r.coordinate });
        xF(e, r.tickCoord, s, c, l) &&
          ((c = r.tickCoord + e * (s() / 2 + i)),
          (o[t] = TF(TF({}, r), {}, { isShow: !0 })));
      },
      h = 0;
    h < p;
    h++
  )
    m(h);
  return o;
}
function jF(e, t, n) {
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
  if (K(c) || d_.isSsr) return SF(i, K(c) ? c : 0) ?? [];
  var f = [],
    p = s === `top` || s === `bottom` ? `width` : `height`,
    m =
      u && p === `width`
        ? JA(u, { fontSize: t, letterSpacing: n })
        : { width: 0, height: 0 },
    h = (e, r) => {
      var i = typeof l == `function` ? l(e.value, r) : e.value;
      return p === `width`
        ? yF(JA(i, { fontSize: t, letterSpacing: n }), m, d)
        : JA(i, { fontSize: t, letterSpacing: n })[p];
    },
    g = i.length >= 2 ? tu(i[1].coordinate - i[0].coordinate) : 1,
    _ = bF(a, g, p);
  return c === `equidistantPreserveStart`
    ? CF(g, _, h, i, o)
    : ((f =
        c === `preserveStart` || c === `preserveStartEnd`
          ? AF(g, _, h, i, o, c === `preserveStartEnd`)
          : kF(g, _, h, i, o)),
      f.filter((e) => e.isShow));
}
var MF = (e) => {
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
  NF = [`axisLine`, `width`, `height`, `className`, `hide`, `ticks`],
  PF = [`viewBox`],
  FF = [`viewBox`];
function IF(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = LF(e, t);
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
function LF(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function RF() {
  return (
    (RF = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    RF.apply(null, arguments)
  );
}
function zF(e, t) {
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
function BF(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? zF(Object(n), !0).forEach(function (t) {
          VF(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : zF(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function VF(e, t, n) {
  return (
    (t = HF(t)) in e
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
function HF(e) {
  var t = UF(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function UF(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var WF = {
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
function GF(e) {
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
  var l = BF(BF(BF({}, c), uc(s)), {}, { fill: `none` });
  if (a === `top` || a === `bottom`) {
    var u = +((a === `top` && !o) || (a === `bottom` && o));
    l = BF(BF({}, l), {}, { x1: t, y1: n + u * i, x2: t + r, y2: n + u * i });
  } else {
    var d = +((a === `left` && !o) || (a === `right` && o));
    l = BF(BF({}, l), {}, { x1: t + d * r, y1: n, x2: t + d * r, y2: n + i });
  }
  return z.createElement(
    `line`,
    RF({}, l, {
      className: W(
        `recharts-cartesian-axis-line`,
        (0, eu.default)(s, `className`),
      ),
    }),
  );
}
function KF(e, t, n, r, i, a, o, s, c) {
  var l,
    u,
    d,
    f,
    p,
    m,
    h = s ? -1 : 1,
    g = e.tickSize || o,
    _ = K(e.tickCoord) ? e.tickCoord : e.coordinate;
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
function qF(e, t) {
  switch (e) {
    case `left`:
      return t ? `start` : `end`;
    case `right`:
      return t ? `end` : `start`;
    default:
      return `middle`;
  }
}
function JF(e, t) {
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
function YF(e) {
  var { option: t, tickProps: n, value: r } = e,
    i,
    a = W(n.className, `recharts-cartesian-axis-tick-value`);
  if (z.isValidElement(t))
    i = z.cloneElement(t, BF(BF({}, n), {}, { className: a }));
  else if (typeof t == `function`) i = t(BF(BF({}, n), {}, { className: a }));
  else {
    var o = `recharts-cartesian-axis-tick-value`;
    (typeof t != `boolean` && (o = W(o, t?.className)),
      (i = z.createElement(Sj, RF({}, n, { className: o }), r)));
  }
  return i;
}
function XF(e) {
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
    x = jF(BF(BF({}, y), {}, { ticks: t }), _, v),
    S = qF(l, u),
    C = JF(l, u),
    w = uc(y),
    T = dc(n),
    E = {};
  typeof r == `object` && (E = r);
  var D = BF(BF({}, w), {}, { fill: `none` }, E),
    O = x.map((e, t) => {
      var { line: _, tick: v } = KF(e, d, f, p, m, l, h, u, g),
        y = BF(
          BF(
            BF(
              BF({ textAnchor: S, verticalAnchor: C }, w),
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
      return z.createElement(
        Cc,
        RF(
          {
            className: `recharts-cartesian-axis-tick`,
            key: `tick-${e.value}-${e.coordinate}-${e.tickCoord}`,
          },
          Au(b, e, t),
        ),
        r &&
          z.createElement(
            `line`,
            RF({}, D, _, {
              className: W(
                `recharts-cartesian-axis-tick-line`,
                (0, eu.default)(r, `className`),
              ),
            }),
          ),
        n &&
          z.createElement(YF, {
            option: n,
            tickProps: y,
            value: `${typeof a == `function` ? a(e.value, t) : e.value}${o || ``}`,
          }),
      );
    });
  return O.length > 0
    ? z.createElement(`g`, { className: `recharts-cartesian-axis-ticks` }, O)
    : null;
}
var ZF = (0, z.forwardRef)((e, t) => {
    var {
        axisLine: n,
        width: r,
        height: i,
        className: a,
        hide: o,
        ticks: s,
      } = e,
      c = IF(e, NF),
      [l, u] = (0, z.useState)(``),
      [d, f] = (0, z.useState)(``),
      p = (0, z.useRef)(null);
    (0, z.useImperativeHandle)(t, () => ({
      getCalculatedWidth: () =>
        MF({
          ticks: p.current,
          label: e.labelRef?.current,
          labelGapWithTick: 5,
          tickSize: e.tickSize,
          tickMargin: e.tickMargin,
        }),
    }));
    var m = (0, z.useCallback)(
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
      : z.createElement(
          Cc,
          { className: W(`recharts-cartesian-axis`, a), ref: m },
          z.createElement(GF, {
            x: e.x,
            y: e.y,
            width: r,
            height: i,
            orientation: e.orientation,
            mirror: e.mirror,
            axisLine: n,
            otherSvgProps: uc(e),
          }),
          z.createElement(XF, {
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
          z.createElement(
            Mj,
            { x: e.x, y: e.y, width: e.width, height: e.height },
            z.createElement(Kj, { label: e.label, labelRef: e.labelRef }),
            e.children,
          ),
        );
  }),
  QF = z.memo(ZF, (e, t) => {
    var { viewBox: n } = e,
      r = IF(e, PF),
      { viewBox: i } = t,
      a = IF(t, FF);
    return _F(n, i) && _F(r, a);
  }),
  $F = z.forwardRef((e, t) => {
    var n = U_(e, WF);
    return z.createElement(QF, RF({}, n, { ref: t }));
  });
$F.displayName = `CartesianAxis`;
var eI = [`x1`, `y1`, `x2`, `y2`, `key`],
  tI = [`offset`],
  nI = [`xAxisId`, `yAxisId`],
  rI = [`xAxisId`, `yAxisId`];
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
function lI() {
  return (
    (lI = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    lI.apply(null, arguments)
  );
}
function uI(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = dI(e, t);
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
function dI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var fI = (e) => {
  var { fill: t } = e;
  if (!t || t === `none`) return null;
  var { fillOpacity: n, x: r, y: i, width: a, height: o, ry: s } = e;
  return z.createElement(`rect`, {
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
function pI(e, t) {
  var n;
  if (z.isValidElement(e)) n = z.cloneElement(e, t);
  else if (typeof e == `function`) n = e(t);
  else {
    var { x1: r, y1: i, x2: a, y2: o, key: s } = t,
      c = uc(uI(t, eI)),
      { offset: l } = c,
      u = uI(c, tI);
    n = z.createElement(
      `line`,
      lI({}, u, { x1: r, y1: i, x2: a, y2: o, fill: `none`, key: s }),
    );
  }
  return n;
}
function mI(e) {
  var { x: t, width: n, horizontal: r = !0, horizontalPoints: i } = e;
  if (!r || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e,
    s = uI(e, nI),
    c = i.map((e, i) =>
      pI(
        r,
        aI(
          aI({}, s),
          {},
          { x1: t, y1: e, x2: t + n, y2: e, key: `line-${i}`, index: i },
        ),
      ),
    );
  return z.createElement(
    `g`,
    { className: `recharts-cartesian-grid-horizontal` },
    c,
  );
}
function hI(e) {
  var { y: t, height: n, vertical: r = !0, verticalPoints: i } = e;
  if (!r || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e,
    s = uI(e, rI),
    c = i.map((e, i) =>
      pI(
        r,
        aI(
          aI({}, s),
          {},
          { x1: e, y1: t, x2: e, y2: t + n, key: `line-${i}`, index: i },
        ),
      ),
    );
  return z.createElement(
    `g`,
    { className: `recharts-cartesian-grid-vertical` },
    c,
  );
}
function gI(e) {
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
    return z.createElement(`rect`, {
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
  return z.createElement(
    `g`,
    { className: `recharts-cartesian-gridstripes-horizontal` },
    u,
  );
}
function _I(e) {
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
    return z.createElement(`rect`, {
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
  return z.createElement(
    `g`,
    { className: `recharts-cartesian-gridstripes-vertical` },
    u,
  );
}
var vI = (e, t) => {
    var { xAxis: n, width: r, height: i, offset: a } = e;
    return hh(
      jF(
        aI(
          aI(aI({}, WF), n),
          {},
          { ticks: gh(n, !0), viewBox: { x: 0, y: 0, width: r, height: i } },
        ),
      ),
      a.left,
      a.left + a.width,
      t,
    );
  },
  yI = (e, t) => {
    var { yAxis: n, width: r, height: i, offset: a } = e;
    return hh(
      jF(
        aI(
          aI(aI({}, WF), n),
          {},
          { ticks: gh(n, !0), viewBox: { x: 0, y: 0, width: r, height: i } },
        ),
      ),
      a.top,
      a.top + a.height,
      t,
    );
  },
  bI = {
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
function xI(e) {
  var t = Pg(),
    n = Fg(),
    r = Ng(),
    i = aI(
      aI({}, U_(e, bI)),
      {},
      {
        x: K(e.x) ? e.x : r.left,
        y: K(e.y) ? e.y : r.top,
        width: K(e.width) ? e.width : r.width,
        height: K(e.height) ? e.height : r.height,
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
    m = ig(),
    h = J((e) => JD(e, `xAxis`, a, m)),
    g = J((e) => JD(e, `yAxis`, o, m));
  if (
    !K(l) ||
    l <= 0 ||
    !K(u) ||
    u <= 0 ||
    !K(s) ||
    s !== +s ||
    !K(c) ||
    c !== +c
  )
    return null;
  var _ = i.verticalCoordinatesGenerator || vI,
    v = i.horizontalCoordinatesGenerator || yI,
    { horizontalPoints: y, verticalPoints: b } = i;
  if ((!y || !y.length) && typeof v == `function`) {
    var x = f && f.length,
      S = v(
        {
          yAxis: g ? aI(aI({}, g), {}, { ticks: x ? f : g.ticks }) : void 0,
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
          xAxis: h ? aI(aI({}, h), {}, { ticks: C ? p : h.ticks }) : void 0,
          width: t,
          height: n,
          offset: r,
        },
        C ? !0 : d,
      );
    Array.isArray(w) && (b = w);
  }
  return z.createElement(
    `g`,
    { className: `recharts-cartesian-grid` },
    z.createElement(fI, {
      fill: i.fill,
      fillOpacity: i.fillOpacity,
      x: i.x,
      y: i.y,
      width: i.width,
      height: i.height,
      ry: i.ry,
    }),
    z.createElement(gI, lI({}, i, { horizontalPoints: y })),
    z.createElement(_I, lI({}, i, { verticalPoints: b })),
    z.createElement(
      mI,
      lI({}, i, { offset: r, horizontalPoints: y, xAxis: h, yAxis: g }),
    ),
    z.createElement(
      hI,
      lI({}, i, { offset: r, verticalPoints: b, xAxis: h, yAxis: g }),
    ),
  );
}
xI.displayName = `CartesianGrid`;
var SI = [`dangerouslySetInnerHTML`, `ticks`],
  CI = [`id`],
  wI = [`domain`],
  TI = [`domain`];
function EI() {
  return (
    (EI = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    EI.apply(null, arguments)
  );
}
function DI(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = OI(e, t);
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
function OI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function kI(e) {
  var t = q();
  return (
    (0, z.useLayoutEffect)(
      () => (
        t(SN(e)),
        () => {
          t(CN(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var AI = (e) => {
    var { xAxisId: t, className: n } = e,
      r = J(ng),
      i = ig(),
      a = `xAxis`,
      o = J((e) => DD(e, a, t, i)),
      s = J((e) => XD(e, a, t, i)),
      c = J((e) => FD(e, t)),
      l = J((e) => BD(e, t)),
      u = J((e) => eE(e, t));
    if (c == null || l == null || u == null) return null;
    var { dangerouslySetInnerHTML: d, ticks: f } = e,
      p = DI(e, SI),
      { id: m } = u,
      h = DI(u, CI);
    return z.createElement(
      $F,
      EI({}, p, h, {
        scale: o,
        x: l.x,
        y: l.y,
        width: c.width,
        height: c.height,
        className: W(`recharts-${a} ${a}`, n),
        viewBox: r,
        ticks: s,
      }),
    );
  },
  jI = {
    allowDataOverflow: $T.allowDataOverflow,
    allowDecimals: $T.allowDecimals,
    allowDuplicatedCategory: $T.allowDuplicatedCategory,
    height: $T.height,
    hide: !1,
    mirror: $T.mirror,
    orientation: $T.orientation,
    padding: $T.padding,
    reversed: $T.reversed,
    scale: $T.scale,
    tickCount: $T.tickCount,
    type: $T.type,
    xAxisId: 0,
  },
  MI = z.memo(
    (e) => {
      var t = U_(e, jI);
      return z.createElement(
        z.Fragment,
        null,
        z.createElement(kI, {
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
        z.createElement(AI, t),
      );
    },
    (e, t) => {
      var { domain: n } = e,
        r = DI(e, wI),
        { domain: i } = t;
      return _F(r, DI(t, TI))
        ? Array.isArray(n) &&
          n.length === 2 &&
          Array.isArray(i) &&
          i.length === 2
          ? n[0] === i[0] && n[1] === i[1]
          : _F({ domain: n }, { domain: i })
        : !1;
    },
  );
MI.displayName = `XAxis`;
var NI = [`dangerouslySetInnerHTML`, `ticks`],
  PI = [`id`],
  FI = [`domain`],
  II = [`domain`];
function LI() {
  return (
    (LI = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    LI.apply(null, arguments)
  );
}
function RI(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = zI(e, t);
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
function zI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function BI(e) {
  var t = q();
  return (
    (0, z.useLayoutEffect)(
      () => (
        t(wN(e)),
        () => {
          t(TN(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var VI = (e) => {
    var { yAxisId: t, className: n, width: r, label: i } = e,
      a = (0, z.useRef)(null),
      o = (0, z.useRef)(null),
      s = J(ng),
      c = ig(),
      l = q(),
      u = `yAxis`,
      d = J((e) => DD(e, u, t, c)),
      f = J((e) => HD(e, t)),
      p = J((e) => VD(e, t)),
      m = J((e) => XD(e, u, t, c)),
      h = J((e) => rE(e, t));
    if (
      ((0, z.useLayoutEffect)(() => {
        if (
          !(
            r !== `auto` ||
            !f ||
            Lj(i) ||
            (0, z.isValidElement)(i) ||
            h == null
          )
        ) {
          var e = a.current;
          if (e) {
            var n = e.getCalculatedWidth();
            Math.round(f.width) !== Math.round(n) && l(ON({ id: t, width: n }));
          }
        }
      }, [m, f, l, i, t, r, h]),
      f == null || p == null || h == null)
    )
      return null;
    var { dangerouslySetInnerHTML: g, ticks: _ } = e,
      v = RI(e, NI),
      { id: y } = h,
      b = RI(h, PI);
    return z.createElement(
      $F,
      LI({}, v, b, {
        ref: a,
        labelRef: o,
        scale: d,
        x: p.x,
        y: p.y,
        tickTextProps: r === `auto` ? { width: void 0 } : { width: r },
        width: f.width,
        height: f.height,
        className: W(`recharts-${u} ${u}`, n),
        viewBox: s,
        ticks: m,
      }),
    );
  },
  HI = {
    allowDataOverflow: nE.allowDataOverflow,
    allowDecimals: nE.allowDecimals,
    allowDuplicatedCategory: nE.allowDuplicatedCategory,
    hide: !1,
    mirror: nE.mirror,
    orientation: nE.orientation,
    padding: nE.padding,
    reversed: nE.reversed,
    scale: nE.scale,
    tickCount: nE.tickCount,
    type: nE.type,
    width: nE.width,
    yAxisId: 0,
  },
  UI = z.memo(
    (e) => {
      var t = U_(e, HI);
      return z.createElement(
        z.Fragment,
        null,
        z.createElement(BI, {
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
        z.createElement(VI, t),
      );
    },
    (e, t) => {
      var { domain: n } = e,
        r = RI(e, FI),
        { domain: i } = t;
      return _F(r, RI(t, II))
        ? Array.isArray(n) &&
          n.length === 2 &&
          Array.isArray(i) &&
          i.length === 2
          ? n[0] === i[0] && n[1] === i[1]
          : _F({ domain: n }, { domain: i })
        : !1;
    },
  );
UI.displayName = `YAxis`;
var WI = n((e) => {
  var t = a();
  (t.useSyncExternalStore, t.useRef, t.useEffect, t.useMemo, t.useDebugValue);
});
n((e, t) => {
  t.exports = WI();
})();
function GI(e) {
  e();
}
function KI() {
  let e = null,
    t = null;
  return {
    clear() {
      ((e = null), (t = null));
    },
    notify() {
      GI(() => {
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
var qI = { notify() {}, get: () => [] };
function JI(e, t) {
  let n,
    r = qI,
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
    (i++, n || ((n = t ? t.addNestedSub(c) : e.subscribe(c)), (r = KI())));
  }
  function d() {
    (i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = qI)));
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
var YI =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0,
  XI = typeof navigator < `u` && navigator.product === `ReactNative`,
  ZI = YI || XI ? z.useLayoutEffect : z.useEffect,
  QI = Symbol.for(`react-redux-context`),
  $I = typeof globalThis < `u` ? globalThis : {};
function eL() {
  if (!z.createContext) return {};
  let e = ($I[QI] ??= new Map()),
    t = e.get(z.createContext);
  return (t || ((t = z.createContext(null)), e.set(z.createContext, t)), t);
}
var tL = eL();
function nL(e) {
  let { children: t, context: n, serverState: r, store: i } = e,
    a = z.useMemo(() => {
      let e = JI(i);
      return {
        store: i,
        subscription: e,
        getServerState: r ? () => r : void 0,
      };
    }, [i, r]),
    o = z.useMemo(() => i.getState(), [i]);
  ZI(() => {
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
  let s = n || tL;
  return z.createElement(s.Provider, { value: a }, t);
}
var rL = nL,
  iL = Y([(e, t) => t, X, FT, zT, rk, ak, Ok, eg], Rk),
  aL = (e) => {
    var t = e.currentTarget.getBoundingClientRect(),
      n = t.width / e.currentTarget.offsetWidth,
      r = t.height / e.currentTarget.offsetHeight;
    return {
      chartX: Math.round((e.clientX - t.left) / n),
      chartY: Math.round((e.clientY - t.top) / r),
    };
  },
  oL = _p(`mouseClick`),
  sL = Fm();
sL.startListening({
  actionCreator: oL,
  effect: (e, t) => {
    var n = e.payload,
      r = iL(t.getState(), aL(n));
    r?.activeIndex != null &&
      t.dispatch(
        vO({
          activeIndex: r.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: r.activeCoordinate,
        }),
      );
  },
});
var cL = _p(`mouseMove`),
  lL = Fm();
lL.startListening({
  actionCreator: cL,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState(),
      i = iO(r, r.tooltip.settings.shared),
      a = iL(r, aL(n));
    i === `axis` &&
      (a?.activeIndex == null
        ? t.dispatch(hO())
        : t.dispatch(
            _O({
              activeIndex: a.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: a.activeCoordinate,
            }),
          ));
  },
});
function uL(e, t) {
  return t instanceof HTMLElement
    ? `HTMLElement <${t.tagName} class="${t.className}">`
    : t === window
      ? `global.window`
      : t;
}
var dL = {
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
  fL = Jp({
    name: `rootProps`,
    initialState: dL,
    reducers: {
      updateOptions: (e, t) => {
        ((e.accessibilityLayer = t.payload.accessibilityLayer),
          (e.barCategoryGap = t.payload.barCategoryGap),
          (e.barGap = t.payload.barGap ?? dL.barGap),
          (e.barSize = t.payload.barSize),
          (e.maxBarSize = t.payload.maxBarSize),
          (e.stackOffset = t.payload.stackOffset),
          (e.syncId = t.payload.syncId),
          (e.syncMethod = t.payload.syncMethod),
          (e.className = t.payload.className));
      },
    },
  }),
  pL = fL.reducer,
  { updateOptions: mL } = fL.actions,
  hL = Jp({
    name: `polarOptions`,
    initialState: null,
    reducers: { updatePolarOptions: (e, t) => t.payload },
  }),
  { updatePolarOptions: gL } = hL.actions,
  _L = hL.reducer,
  vL = _p(`keyDown`),
  yL = _p(`focus`),
  bL = Fm();
(bL.startListening({
  actionCreator: vL,
  effect: (e, t) => {
    var n = t.getState();
    if (n.rootProps.accessibilityLayer !== !1) {
      var { keyboardInteraction: r } = n.tooltip,
        i = e.payload;
      if (i === `ArrowRight` || i === `ArrowLeft` || i === `Enter`) {
        var a = Number(AO(r, GO(n))),
          o = ak(n);
        if (i === `Enter`) {
          var s = Nk(n, `axis`, `hover`, String(r.index));
          t.dispatch(
            bO({
              active: !r.active,
              activeIndex: r.index,
              activeDataKey: r.dataKey,
              activeCoordinate: s,
            }),
          );
        } else {
          var c = eO(n) === `left-to-right` ? 1 : -1,
            l = a + (i === `ArrowRight` ? 1 : -1) * c;
          if (!(o == null || l >= o.length || l < 0)) {
            var u = Nk(n, `axis`, `hover`, String(l));
            t.dispatch(
              bO({
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
  bL.startListening({
    actionCreator: yL,
    effect: (e, t) => {
      var n = t.getState();
      if (n.rootProps.accessibilityLayer !== !1) {
        var { keyboardInteraction: r } = n.tooltip;
        if (!r.active && r.index == null) {
          var i = `0`,
            a = Nk(n, `axis`, `hover`, String(i));
          t.dispatch(
            bO({
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
var xL = _p(`externalEvent`),
  SL = Fm();
SL.startListening({
  actionCreator: xL,
  effect: (e, t) => {
    if (e.payload.handler != null) {
      var n = t.getState(),
        r = {
          activeCoordinate: mk(n),
          activeDataKey: fk(n),
          activeIndex: uk(n),
          activeLabel: dk(n),
          activeTooltipIndex: uk(n),
          isTooltipActive: hk(n),
        };
      e.payload.handler(r, e.payload.reactEvent);
    }
  },
});
var CL = Y(
    [Y([PO], (e) => e.tooltipItemPayloads), NO, (e, t, n) => t, (e, t, n) => n],
    (e, t, n, r) => {
      var i = e.find((e) => e.settings.dataKey === r);
      if (i != null) {
        var { positions: a } = i;
        if (a != null) return t(a, n);
      }
    },
  ),
  wL = _p(`touchMove`),
  TL = Fm();
TL.startListening({
  actionCreator: wL,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState(),
      i = iO(r, r.tooltip.settings.shared);
    if (i === `axis`) {
      var a = iL(
        r,
        aL({
          clientX: n.touches[0].clientX,
          clientY: n.touches[0].clientY,
          currentTarget: n.currentTarget,
        }),
      );
      a?.activeIndex != null &&
        t.dispatch(
          _O({
            activeIndex: a.activeIndex,
            activeDataKey: void 0,
            activeCoordinate: a.activeCoordinate,
          }),
        );
    } else if (i === `item`) {
      var o = n.touches[0],
        s = document.elementFromPoint(o.clientX, o.clientY);
      if (!s || !s.getAttribute) return;
      var c = s.getAttribute(Hh),
        l = s.getAttribute(`data-recharts-item-data-key`) ?? void 0,
        u = CL(t.getState(), c, l);
      t.dispatch(pO({ activeDataKey: l, activeIndex: c, activeCoordinate: u }));
    }
  },
});
var EL = qd({
    brush: tF,
    cartesianAxis: kN,
    chartData: cA,
    errorBars: YN,
    graphicalItems: pN,
    layout: Hm,
    legend: Wg,
    options: tA,
    polarAxis: _M,
    polarOptions: _L,
    referenceElements: mF,
    rootProps: pL,
    tooltip: xO,
  }),
  DL = function (e) {
    var t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : `Chart`;
    return Op({
      reducer: EL,
      preloadedState: e,
      middleware: (e) =>
        e({ serializableCheck: !1 }).concat([
          sL.middleware,
          lL.middleware,
          bL.middleware,
          SL.middleware,
          TL.middleware,
        ]),
      enhancers: (e) => {
        var t = e;
        return (
          typeof e == `function` && (t = e()), t.concat(Ep({ type: `raf` }))
        );
      },
      devTools: d_.devToolsEnabled && {
        serialize: { replacer: uL },
        name: `recharts-${t}`,
      },
    });
  };
function OL(e) {
  var { preloadedState: t, children: n, reduxStoreName: r } = e,
    i = ig(),
    a = (0, z.useRef)(null);
  if (i) return n;
  a.current ??= DL(t, r);
  var o = cd;
  return z.createElement(rL, { context: o, store: a.current }, n);
}
function kL(e) {
  var { layout: t, margin: n } = e,
    r = q(),
    i = ig();
  return (
    (0, z.useEffect)(() => {
      i || (r(zm(t)), r(Rm(n)));
    }, [r, i, t, n]),
    null
  );
}
function AL(e) {
  var t = q();
  return (
    (0, z.useEffect)(() => {
      t(mL(e));
    }, [t, e]),
    null
  );
}
var jL = [`children`];
function ML(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = NL(e, t);
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
function NL(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function PL() {
  return (
    (PL = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    PL.apply(null, arguments)
  );
}
var FL = { width: `100%`, height: `100%`, display: `block` },
  IL = (0, z.forwardRef)((e, t) => {
    var n = Pg(),
      r = Fg(),
      i = f_();
    if (!yg(n) || !yg(r)) return null;
    var { children: a, otherAttributes: o, title: s, desc: c } = e,
      l = typeof o.tabIndex == `number` ? o.tabIndex : i ? 0 : void 0,
      u = typeof o.role == `string` ? o.role : i ? `application` : void 0;
    return z.createElement(
      vc,
      PL({}, o, {
        title: s,
        desc: c,
        role: u,
        tabIndex: l,
        width: n,
        height: r,
        style: FL,
        ref: t,
      }),
      a,
    );
  }),
  LL = (e) => {
    var { children: t } = e,
      n = J(og);
    if (!n) return null;
    var { width: r, height: i, y: a, x: o } = n;
    return z.createElement(vc, { width: r, height: i, x: o, y: a }, t);
  },
  RL = (0, z.forwardRef)((e, t) => {
    var { children: n } = e,
      r = ML(e, jL);
    return ig()
      ? z.createElement(LL, null, n)
      : z.createElement(IL, PL({ ref: t }, r), n);
  });
function zL() {
  var e = q(),
    [t, n] = (0, z.useState)(null),
    r = J(Rh);
  return (
    (0, z.useEffect)(() => {
      if (t != null) {
        var n = t.getBoundingClientRect().width / t.offsetWidth;
        vg(n) && n !== r && e(Vm(n));
      }
    }, [t, e, r]),
    n
  );
}
function BL(e, t) {
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
function VL(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? BL(Object(n), !0).forEach(function (t) {
          HL(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : BL(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function HL(e, t, n) {
  return (
    (t = UL(t)) in e
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
function UL(e) {
  var t = WL(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function WL(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function GL() {
  return (
    (GL = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    GL.apply(null, arguments)
  );
}
var KL = () => (bA(), null);
function qL(e) {
  if (typeof e == `number`) return e;
  if (typeof e == `string`) {
    var t = parseFloat(e);
    if (!Number.isNaN(t)) return t;
  }
  return 0;
}
var JL = (0, z.forwardRef)((e, t) => {
    var n = (0, z.useRef)(null),
      [r, i] = (0, z.useState)({
        containerWidth: qL(e.style?.width),
        containerHeight: qL(e.style?.height),
      }),
      a = (0, z.useCallback)((e, t) => {
        i((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []),
      o = (0, z.useCallback)(
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
      (0, z.useEffect)(
        () => () => {
          n.current?.disconnect();
        },
        [a],
      ),
      z.createElement(
        z.Fragment,
        null,
        z.createElement(Rg, {
          width: r.containerWidth,
          height: r.containerHeight,
        }),
        z.createElement(`div`, GL({ ref: o }, e)),
      )
    );
  }),
  YL = (0, z.forwardRef)((e, t) => {
    var { width: n, height: r } = e,
      [i, a] = (0, z.useState)({
        containerWidth: qL(n),
        containerHeight: qL(r),
      }),
      o = (0, z.useCallback)((e, t) => {
        a((n) => {
          var r = Math.round(e),
            i = Math.round(t);
          return n.containerWidth === r && n.containerHeight === i
            ? n
            : { containerWidth: r, containerHeight: i };
        });
      }, []),
      s = (0, z.useCallback)(
        (e) => {
          if ((typeof t == `function` && t(e), e != null)) {
            var { width: n, height: r } = e.getBoundingClientRect();
            o(n, r);
          }
        },
        [t, o],
      );
    return z.createElement(
      z.Fragment,
      null,
      z.createElement(Rg, {
        width: i.containerWidth,
        height: i.containerHeight,
      }),
      z.createElement(`div`, GL({ ref: s }, e)),
    );
  }),
  XL = (0, z.forwardRef)((e, t) => {
    var { width: n, height: r } = e;
    return z.createElement(
      z.Fragment,
      null,
      z.createElement(Rg, { width: n, height: r }),
      z.createElement(`div`, GL({ ref: t }, e)),
    );
  }),
  ZL = (0, z.forwardRef)((e, t) => {
    var { width: n, height: r } = e;
    return ru(n) || ru(r)
      ? z.createElement(YL, GL({}, e, { ref: t }))
      : z.createElement(XL, GL({}, e, { ref: t }));
  });
function QL(e) {
  return e === !0 ? JL : ZL;
}
var $L = (0, z.forwardRef)((e, t) => {
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
      b = (0, z.useRef)(null),
      x = q(),
      [S, C] = (0, z.useState)(null),
      [w, T] = (0, z.useState)(null),
      E = zL(),
      D = Og(),
      O = D?.width > 0 ? D.width : _,
      k = D?.height > 0 ? D.height : i,
      A = (0, z.useCallback)(
        (e) => {
          (E(e),
            typeof t == `function` && t(e),
            C(e),
            T(e),
            e != null && (b.current = e));
        },
        [E, t, C, T],
      ),
      ee = (0, z.useCallback)(
        (e) => {
          (x(oL(e)), x(xL({ handler: a, reactEvent: e })));
        },
        [x, a],
      ),
      j = (0, z.useCallback)(
        (e) => {
          (x(cL(e)), x(xL({ handler: l, reactEvent: e })));
        },
        [x, l],
      ),
      M = (0, z.useCallback)(
        (e) => {
          (x(hO()), x(xL({ handler: u, reactEvent: e })));
        },
        [x, u],
      ),
      te = (0, z.useCallback)(
        (e) => {
          (x(cL(e)), x(xL({ handler: d, reactEvent: e })));
        },
        [x, d],
      ),
      ne = (0, z.useCallback)(() => {
        x(yL());
      }, [x]),
      re = (0, z.useCallback)(
        (e) => {
          x(vL(e.key));
        },
        [x],
      ),
      ie = (0, z.useCallback)(
        (e) => {
          x(xL({ handler: o, reactEvent: e }));
        },
        [x, o],
      ),
      ae = (0, z.useCallback)(
        (e) => {
          x(xL({ handler: s, reactEvent: e }));
        },
        [x, s],
      ),
      oe = (0, z.useCallback)(
        (e) => {
          x(xL({ handler: c, reactEvent: e }));
        },
        [x, c],
      ),
      se = (0, z.useCallback)(
        (e) => {
          x(xL({ handler: f, reactEvent: e }));
        },
        [x, f],
      ),
      ce = (0, z.useCallback)(
        (e) => {
          x(xL({ handler: h, reactEvent: e }));
        },
        [x, h],
      ),
      le = (0, z.useCallback)(
        (e) => {
          (y && x(wL(e)), x(xL({ handler: m, reactEvent: e })));
        },
        [x, y, m],
      ),
      ue = (0, z.useCallback)(
        (e) => {
          x(xL({ handler: p, reactEvent: e }));
        },
        [x, p],
      ),
      de = QL(v);
    return z.createElement(
      qk.Provider,
      { value: S },
      z.createElement(
        wc.Provider,
        { value: w },
        z.createElement(
          de,
          {
            width: O ?? g?.width,
            height: k ?? g?.height,
            className: W(`recharts-wrapper`, r),
            style: VL(
              { position: `relative`, cursor: `default`, width: O, height: k },
              g,
            ),
            onClick: ee,
            onContextMenu: ie,
            onDoubleClick: ae,
            onFocus: ne,
            onKeyDown: re,
            onMouseDown: oe,
            onMouseEnter: j,
            onMouseLeave: M,
            onMouseMove: te,
            onMouseUp: se,
            onTouchEnd: ue,
            onTouchMove: le,
            onTouchStart: ce,
            ref: A,
          },
          z.createElement(KL, null),
          n,
        ),
      ),
    );
  }),
  eR = [
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
function tR(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = nR(e, t);
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
function nR(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var rR = (0, z.forwardRef)((e, t) => {
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
    d = uc(tR(e, eR));
  return c
    ? z.createElement(
        z.Fragment,
        null,
        z.createElement(Rg, { width: n, height: r }),
        z.createElement(RL, { otherAttributes: d, title: l, desc: u }, a),
      )
    : z.createElement(
        $L,
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
        z.createElement(
          RL,
          { otherAttributes: d, title: l, desc: u, ref: t },
          z.createElement(gF, null, a),
        ),
      );
});
function iR() {
  return (
    (iR = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    iR.apply(null, arguments)
  );
}
var aR = {
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
  oR = (0, z.forwardRef)(function (e, t) {
    var n = U_(e.categoricalChartProps, aR),
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
    return z.createElement(
      OL,
      { preloadedState: { options: c }, reduxStoreName: s.id ?? r },
      z.createElement(ZP, { chartData: s.data }),
      z.createElement(kL, { layout: n.layout, margin: n.margin }),
      z.createElement(AL, {
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
      z.createElement(rR, iR({}, n, { ref: t })),
    );
  }),
  sR = [`axis`, `item`],
  cR = (0, z.forwardRef)((e, t) =>
    z.createElement(oR, {
      chartName: `BarChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: sR,
      tooltipPayloadSearcher: $k,
      categoricalChartProps: e,
      ref: t,
    }),
  ),
  lR = `nK2pFw6yu3o-`,
  uR = `nzXI4r-KhTY-`,
  dR = `iKEtAveWi-8-`,
  fR = `ZXpki9wJyL0-`,
  pR = 5;
function mR({ active: e, payload: t }) {
  if (!e || !t?.length) return null;
  let n = t[0].payload;
  return (0, B.jsx)(`div`, {
    className: fR,
    children: `${P.Localize(`#GamePerformanceStats_FPS`, n.framerate ?? 0)}: ${n.percentage ?? 0}%`,
  });
}
function hR(e) {
  let { histogram: t, className: n, minWidth: r = 400, minHeight: i = 300 } = e,
    a = z.useMemo(() => {
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
          n.push({ framerate: t * pR, percentage: Math.round(e) });
        }),
        n.sort((e, t) => e.framerate - t.framerate)
      );
    }, [t]);
  return a?.length
    ? (0, B.jsxs)(`div`, {
        className: N(lR, n),
        children: [
          (0, B.jsx)(`div`, {
            className: uR,
            children: P.Localize(`#GamePerformanceStats_SessionLabel`),
          }),
          (0, B.jsx)(Ag, {
            width: `100%`,
            minWidth: r,
            minHeight: i,
            children: (0, B.jsxs)(cR, {
              accessibilityLayer: !1,
              margin: { top: 35, left: 0, right: 0, bottom: 25 },
              data: a,
              children: [
                (0, B.jsx)(xI, {
                  stroke: `#888`,
                  strokeWidth: `0.5`,
                  vertical: !1,
                }),
                (0, B.jsx)(MI, {
                  dataKey: `framerate`,
                  stroke: `white`,
                  label: {
                    value: P.Localize(`#GamePerformanceStats_Framerate`),
                    position: `bottom`,
                    fill: `#A9A9A9`,
                    fontSize: 14,
                  },
                }),
                (0, B.jsx)(UI, {
                  stroke: `white`,
                  domain: [() => 0, (e) => Math.max(e, 100)],
                }),
                (0, B.jsx)(jA, {
                  content: mR,
                  cursor: !1,
                  isAnimationActive: !1,
                }),
                (0, B.jsx)(jP, {
                  fill: `#1a9fff`,
                  dataKey: `percentage`,
                  name: ``,
                }),
              ],
            }),
          }),
        ],
      })
    : (0, B.jsx)(`div`, {
        className: N(lR, n),
        children: (0, B.jsx)(`div`, {
          className: dR,
          children: P.Localize(
            `#GamePerformanceStats_StillGatheringData_NoDevice`,
          ),
        }),
      });
}
function gR(e) {
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
      ((d.onOptionsActionDescription = P.Localize(
        `#SteamDeckVerified_ViewDeveloperPost`,
      )),
      (d.onOptionsButton = u),
      (f = (0, B.jsx)(CR, {
        blogURL: t.steam_deck_blog_url,
        eHWCompatibiltyDisplay: 1,
      })),
      (p = (0, B.jsx)(CR, {
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
      l = (0, B.jsx)(NR, { category: t.resolved_category });
    return (
      c == 3
        ? ((e = P.Localize(
            `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
          )),
          (s = (0, B.jsx)(LR, {
            id: r,
            category: t.machine_resolved_category,
            appName: i,
          })),
          (l = (0, B.jsx)(NR, { category: t.machine_resolved_category })))
        : c == 2
          ? ((e = P.Localize(
              `#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI`,
            )),
            (s = (0, B.jsx)(IR, {
              id: r,
              category: t.steamos_resolved_category,
              appName: i,
            })),
            (l = (0, B.jsx)(PR, { category: t.steamos_resolved_category })),
            (a = p))
          : c == 4
            ? ((e = P.Localize(
                `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
              )),
              (s = (0, B.jsx)(RR, {
                id: r,
                category: t.frame_resolved_category,
                appName: i,
              })),
              (l = (0, B.jsx)(NR, { category: t.frame_resolved_category })))
            : ((e = P.Localize(
                `#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI`,
              )),
              (s = (0, B.jsx)(FR, {
                category: t.resolved_category,
                appName: i,
              })),
              (a = f)),
      (0, B.jsx)(_R, {
        children: (0, B.jsxs)(de, {
          autoFocus: o,
          focusableIfEmpty: o,
          noFocusRing: !0,
          className: ko,
          ...d,
          children: [
            (0, B.jsxs)(`div`, {
              id: n,
              className: Eo,
              children: [
                (0, B.jsx)(`div`, { className: Do, children: e }),
                (0, B.jsx)(`div`, { className: Oo, children: l }),
              ],
            }),
            s,
            a,
            (0, B.jsx)(OR, { appid: t.appid, appName: i }),
          ],
        }),
      })
    );
  }
  let m = Nn(t.resolved_category),
    h = xn(t.steamos_resolved_category),
    g = Nn(t.machine_resolved_category),
    _ = Nn(t.frame_resolved_category || 0);
  if (!l) {
    let t = null;
    switch (c) {
      case 3:
        t = (0, B.jsx)(xR, { ...e });
        break;
      case 2:
      case 5:
        t = (0, B.jsx)(yR, { ...e, deckBlogContent: p });
        break;
      case 4:
        t = (0, B.jsx)(SR, { ...e });
        break;
      default:
        t = (0, B.jsx)(bR, { ...e, deckBlogContent: f });
    }
    return (0, B.jsx)(Tt, { children: (0, B.jsx)(_R, { children: t }) });
  }
  let v = (e) =>
      window.sessionStorage.setItem(`steamdeckcompatibility`, `?tab=${e.key}`),
    y = [
      {
        name: (0, B.jsxs)(`div`, {
          className: ns,
          children: [
            (0, B.jsx)(Ce, { className: os }),
            (0, B.jsx)(m, { className: rs }),
          ],
        }),
        key: `1`,
        contents: (0, B.jsx)(Tt, {
          children: (0, B.jsx)(bR, { ...e, deckBlogContent: f }),
        }),
        onClick: v,
      },
      {
        name: (0, B.jsxs)(`div`, {
          className: ns,
          children: [
            (0, B.jsx)(ft, { className: is }),
            (0, B.jsx)(g, { className: rs }),
          ],
        }),
        key: `3`,
        contents: (0, B.jsx)(Tt, { children: (0, B.jsx)(xR, { ...e }) }),
        onClick: v,
      },
      {
        name: (0, B.jsxs)(`div`, {
          className: ns,
          children: [`steamos`, (0, B.jsx)(h, { className: rs })],
        }),
        key: `2`,
        contents: (0, B.jsx)(Tt, {
          children: (0, B.jsx)(yR, { ...e, deckBlogContent: p }),
        }),
        onClick: v,
      },
      {
        name: (0, B.jsxs)(`div`, {
          className: ns,
          children: [
            (0, B.jsx)(ht, { className: as }),
            (0, B.jsx)(_, { className: rs }),
          ],
        }),
        key: `4`,
        contents: (0, B.jsx)(Tt, { children: (0, B.jsx)(SR, { ...e }) }),
        onClick: v,
      },
    ];
  return (0, B.jsx)(_R, {
    children: (0, B.jsx)(Xs, {
      tabs: y,
      classNameCtn: es,
      classNameTabContent: $o,
      startingTab: c.toString(),
      preferredFocus: !0,
      bDisableRouting: !0,
      focusRingHasBorderRadius: !0,
    }),
  });
}
function _R(e) {
  let [t, n] = z.useState(!1),
    r = z.useRef(null),
    i = z.useCallback(() => {
      let e = r.current;
      e && n(e.scrollHeight > e.clientHeight);
    }, []),
    a = Mn(i);
  return (0, B.jsx)(Gn, {
    ref: r,
    className: Lo,
    children: (0, B.jsx)(de, {
      ref: a,
      className: Ro,
      focusableIfEmpty: t,
      noFocusRing: !0,
      children: e.children,
    }),
  });
}
function vR(e) {
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
  return (0, B.jsxs)(de, {
    className: ko,
    ...l,
    children: [
      (0, B.jsxs)(`div`, {
        children: [
          (0, B.jsxs)(`div`, {
            id: t,
            className: Eo,
            children: [
              (0, B.jsx)(`div`, { className: Do, children: n }),
              (0, B.jsx)(`div`, { className: Oo, children: a }),
            ],
          }),
          o,
        ],
      }),
      s,
      (0, B.jsx)(de, {
        autoFocus: r,
        focusableIfEmpty: r,
        noFocusRing: !0,
        children: c,
      }),
    ],
  });
}
function yR(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a =
      r.steamos_resolved_items &&
      r.steamos_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, B.jsx)(IR, {
      id: n,
      category: r.steamos_resolved_category ?? 0,
      appName: i,
    }),
    s = (0, B.jsx)(PR, { category: r.steamos_resolved_category }),
    c = r.steamos_resolved_items && r.steamos_resolved_items?.length > 0;
  return (0, B.jsx)(vR, {
    titleId: t,
    title: P.Localize(
      `#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    ratingIcon: s,
    ratingSummary: o,
    ...e,
    children: (0, B.jsxs)(B.Fragment, {
      children: [
        c && (0, B.jsx)(`div`, { className: `BlWeoXRF0aE-` }),
        r.steamos_resolved_items &&
          r.steamos_resolved_items
            .filter((e) => e.display_type != 1)
            .map((e) =>
              (0, B.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, B.jsx)(TR, { displaytype: e.display_type }),
                    (0, B.jsx)(`span`, { children: P.Localize(e.loc_token) }),
                  ],
                },
                e.loc_token + e.display_type,
              ),
            ),
        a &&
          (0, B.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: r.steamos_resolved_items
              ?.filter((e) => e.display_type == 1)
              .map((e) =>
                (0, B.jsxs)(
                  `div`,
                  {
                    className: `-vnBPYbU1nw-`,
                    children: [
                      (0, B.jsx)(TR, { displaytype: e.display_type }),
                      (0, B.jsx)(`span`, { children: P.Localize(e.loc_token) }),
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
function bR(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, B.jsx)(FR, { id: n, category: r.resolved_category, appName: i }),
    s = (0, B.jsx)(NR, { category: r.resolved_category }),
    c = r.resolved_items && r.resolved_items?.length > 0;
  return (0, B.jsx)(vR, {
    titleId: t,
    title: P.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI`),
    ratingIcon: s,
    ratingSummary: o,
    ...e,
    children: (0, B.jsxs)(B.Fragment, {
      children: [
        c && (0, B.jsx)(`div`, { className: `BlWeoXRF0aE-` }),
        r.resolved_items &&
          r.resolved_items
            .filter((e) => e.display_type !== 1)
            .map((e) =>
              (0, B.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, B.jsx)(wR, { displaytype: e.display_type }),
                    (0, B.jsx)(`span`, {
                      children:
                        e.loc_token.charAt(0) == `#`
                          ? P.Localize(e.loc_token)
                          : P.Localize(`#` + e.loc_token),
                    }),
                  ],
                },
                e.loc_token + e.display_type,
              ),
            ),
        a &&
          r.resolved_items &&
          (0, B.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: r.resolved_items
              .filter((e) => e.display_type == 1)
              .map((e) =>
                (0, B.jsx)(
                  `div`,
                  {
                    className: `_00kSG69QbjI-`,
                    children: (0, B.jsx)(`span`, {
                      children: P.Localize(e.loc_token),
                    }),
                  },
                  e.loc_token + e.display_type,
                ),
              ),
          }),
        (0, B.jsx)(OR, { appid: r.appid, appName: i }),
      ],
    }),
  });
}
function xR(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.machine_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, B.jsx)(LR, {
      id: n,
      category: r.machine_resolved_category,
      appName: i,
    }),
    s = (0, B.jsx)(NR, { category: r.machine_resolved_category }),
    c = r.machine_resolved_items && r.machine_resolved_items?.length > 0;
  return (0, B.jsx)(vR, {
    titleId: t,
    title: P.Localize(
      `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    ratingIcon: s,
    ratingSummary: o,
    ...e,
    children: (0, B.jsxs)(B.Fragment, {
      children: [
        c && (0, B.jsx)(`div`, { className: `BlWeoXRF0aE-` }),
        r.machine_resolved_items &&
          r.machine_resolved_items
            .filter((e) => e.display_type !== 1)
            .map((e) =>
              (0, B.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, B.jsx)(wR, { displaytype: e.display_type }),
                    (0, B.jsx)(`span`, { children: P.Localize(e.loc_token) }),
                  ],
                },
                e.loc_token + e.display_type,
              ),
            ),
        a &&
          r.machine_resolved_items &&
          (0, B.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: r.machine_resolved_items
              .filter((e) => e.display_type == 1)
              .map((e) =>
                (0, B.jsx)(
                  `div`,
                  {
                    className: `_00kSG69QbjI-`,
                    children: (0, B.jsx)(`span`, {
                      children: P.Localize(e.loc_token),
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
function SR(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.frame_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, B.jsx)(RR, {
      id: n,
      category: r.frame_resolved_category ?? 0,
      appName: i,
    }),
    s = (0, B.jsx)(NR, { category: r.frame_resolved_category ?? 0 }),
    c = r.frame_resolved_items && r.frame_resolved_items?.length > 0;
  return (0, B.jsx)(vR, {
    titleId: t,
    title: P.Localize(
      `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    ratingIcon: s,
    ratingSummary: o,
    ...e,
    children: (0, B.jsxs)(B.Fragment, {
      children: [
        c && (0, B.jsx)(`div`, { className: `BlWeoXRF0aE-` }),
        r.frame_resolved_items &&
          r.frame_resolved_items
            .filter((e) => e.display_type !== 1)
            .map((e) =>
              (0, B.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, B.jsx)(wR, { displaytype: e.display_type }),
                    (0, B.jsx)(`span`, { children: P.Localize(e.loc_token) }),
                  ],
                },
                e.loc_token + e.display_type,
              ),
            ),
        a &&
          r.frame_resolved_items &&
          (0, B.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: r.frame_resolved_items
              .filter((e) => e.display_type == 1)
              .map((e) =>
                (0, B.jsx)(
                  `div`,
                  {
                    className: `_00kSG69QbjI-`,
                    children: (0, B.jsx)(`span`, {
                      children: P.Localize(e.loc_token),
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
function CR(e) {
  let { blogURL: t, eHWCompatibiltyDisplay: n } = e,
    r = me();
  if (!t) return null;
  if (r) {
    let e =
      n == 2
        ? P.Localize(`#SteamOS_DescriptionHeader_DeveloperBlog`)
        : P.Localize(`#SteamDeckVerified_DescriptionHeader_DeveloperBlog`);
    return (0, B.jsxs)(`div`, {
      className: Bo,
      children: [
        e,
        (0, B.jsx)(`div`, {
          className: Jo,
          children: (0, B.jsx)(_s, { button: V.Y, type: ps.Knockout }),
        }),
      ],
    });
  }
  let i =
    n == 2
      ? P.Localize(`#SteamOS_DescriptionHeader_DeveloperBlog_Desktop`)
      : P.Localize(
          `#SteamDeckVerified_DescriptionHeader_DeveloperBlog_Desktop`,
        );
  return (0, B.jsxs)(`div`, {
    className: Bo,
    children: [
      i,
      (0, B.jsx)(`a`, {
        href: t,
        className: So,
        children: P.Localize(`#SteamDeckVerified_ViewDeveloperPost`),
      }),
    ],
  });
}
function wR(e) {
  let { displaytype: t } = e;
  switch (t) {
    case 4:
      return (0, B.jsx)(qn, { className: qo });
    case 3:
      return (0, B.jsx)(Me, { className: qo });
    case 2:
      return (0, B.jsx)(rt, { className: qo });
    case 0:
      return (0, B.jsx)(Re, { className: qo });
    case 1:
      return null;
  }
}
function TR(e) {
  let { displaytype: t } = e;
  switch (t) {
    case 3:
      return (0, B.jsx)(Te, { className: qo });
    case 1:
      return (0, B.jsx)(yt, { className: qo });
    default:
      return null;
  }
}
function ER(e) {
  let { histogram: t, deviceName: n, appName: r } = e,
    i = r
      ? P.Localize(`#GamePerformanceStats_FrameRateDistribution`, r, n)
      : P.Localize(`#GamePerformanceStats_FrameRateDistribution_ThisGame`, n);
  return (0, B.jsxs)(`div`, {
    className: Fo,
    children: [
      (0, B.jsxs)(`div`, {
        children: [
          (0, B.jsx)(`div`, {
            className: Io,
            children: P.Localize(`#GamePerformanceStats_MoreInfoTitle`),
          }),
          (0, B.jsx)(`div`, { children: i }),
        ],
      }),
      (0, B.jsx)(hR, { histogram: t, minWidth: 200, minHeight: 200 }),
    ],
  });
}
var DR = [4, 3];
function OR(e) {
  let { appid: t, appName: n } = e,
    r = nc(t),
    { data: i } = rc(void 0, !!r),
    [a, o] = z.useState(!1),
    [s, c] = z.useState(void 0),
    l = z.useRef(null),
    u = (0, z.useMemo)(() => {
      let e = new Map();
      for (let t of DR) {
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
    d = (0, z.useMemo)(() => {
      let e = !!u.get(3)?.average,
        t = !!u.get(4)?.average;
      return e &&
        ((i?.has_steam_deck_neptune && !i?.has_steam_deck_galileo) || !t)
        ? 3
        : 4;
    }, [u, i]),
    f = z.useMemo(
      () =>
        new Map([
          [3, P.Localize(`#GamePerformanceStats_SteamDeckLCD`)],
          [4, P.Localize(`#GamePerformanceStats_SteamDeckOLED`)],
        ]),
      [],
    );
  if (!r) return null;
  if (!Array.from(u.values()).some((e) => !!e.average))
    return (0, B.jsxs)(`div`, {
      className: Ao,
      children: [
        (0, B.jsx)(`div`, { className: Ko }),
        (0, B.jsx)(`div`, {
          className: jo,
          children: P.Localize(
            `#GamePerformanceStats_StillGatheringData_NoDevice`,
          ),
        }),
      ],
    });
  let p = DR.map((e) => ({
      name: (0, B.jsx)(`div`, { className: ns, children: f.get(e) }),
      key: e.toString(),
      contents: (0, B.jsx)(Tt, {
        children: (0, B.jsx)(ER, {
          histogram: u.get(e)?.histogram,
          deviceName: f.get(e) ?? ``,
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
    let e = (0, B.jsx)(`span`, {
      className: No,
      children: P.Localize(`#GameFrameRate_FPS`, g),
    });
    v = P.LocalizeReact(`#GameFrameRate_Description_ThisGame`, h, e);
  } else
    v = n
      ? P.Localize(`#GamePerformanceStats_StillGatheringData`, n, h)
      : P.Localize(`#GamePerformanceStats_StillGatheringData_ThisGame`, h);
  let y = !!g && !a;
  return (0, B.jsxs)(`div`, {
    className: Ao,
    onTransitionEnd: (e) => {
      e.propertyName == `height` &&
        l.current?.scrollIntoView({ behavior: `smooth`, block: `nearest` });
    },
    children: [
      (0, B.jsx)(`div`, { className: Ko }),
      (0, B.jsxs)(de, {
        className: jo,
        onActivate: y ? () => o(!a) : void 0,
        focusable: y,
        children: [
          (0, B.jsxs)(`div`, {
            className: Mo,
            children: [
              v,
              y &&
                (0, B.jsx)(At, {
                  className: `heKA7rr02xo-`,
                  direction: a ? `up` : `down`,
                }),
            ],
          }),
          !!g &&
            _ > 0 &&
            (0, B.jsx)(`div`, {
              className: `HKN5tcQd-XE-`,
              children: P.Localize(`#GameFrameRate_LastUpdated`, Pn(_)),
            }),
        ],
      }),
      (0, B.jsx)(Jt, {
        visible: a,
        children: (0, B.jsx)(`div`, {
          ref: l,
          className: Po,
          children: (0, B.jsx)(Xs, {
            tabs: p,
            classNameCtn: ts,
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
function kR(e) {
  let { id: t, compatibility: n, onShowDialog: r } = e,
    { data: i } = pe(t),
    { data: a } = Ae(t),
    [o, s, c] = Ln();
  if (!i || !a || i.item_type !== 0) return null;
  let l = null,
    u = null;
  if (n == 4) {
    let e = a.steam_frame_compat_category || 0;
    ((l = (0, B.jsx)(cn, { category: e })),
      (u = P.Localize(
        `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
      )));
  } else if (n == 3) {
    let e = a.steam_machine_compat_category || 0;
    ((l = (0, B.jsx)(An, { category: e })),
      (u = P.Localize(
        `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
      )));
  } else {
    let e = a.steam_deck_compat_category || 0;
    ((l = (0, B.jsx)(On, { category: e })),
      (u = P.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_Desktop`)));
  }
  return (0, B.jsxs)(`div`, {
    className: N(wo, `LearnMoreCtn`),
    children: [
      l,
      (0, B.jsx)(Dn, {
        onClick: (e) => {
          (e.preventDefault(), (r ?? s)());
        },
        children: (0, B.jsx)(`span`, { className: To, children: u }),
      }),
      !r &&
        (0, B.jsx)(AR, {
          nAppID: i.appid,
          appName: i.name,
          active: o,
          startingTab: n,
          closeModal: c,
        }),
    ],
  });
}
function AR(e) {
  let { nAppID: t, active: n, appName: r, startingTab: i, closeModal: a } = e;
  return (0, B.jsx)(vn, {
    active: n,
    children: (0, B.jsx)(MR, {
      nAppID: t,
      appName: r,
      startingTab: i,
      closeModal: a,
    }),
  });
}
function jR(e) {
  let { url: t, containerClass: n, bIncludeIcon: r, onOpenBlogPost: i } = e;
  return (0, B.jsxs)(Dn, {
    className: n,
    onClick: () => {
      i ? i() : t && (window.location.href = t);
    },
    children: [
      r && (0, B.jsx)(`div`, { className: `PJ-pfpmq-JI-` }),
      (0, B.jsx)(`div`, {
        className: r ? Qo : Zo,
        children: P.Localize(
          `#SteamDeckVerified_Store_CompatSection_DeveloperComments`,
        ),
      }),
    ],
  });
}
function MR(e) {
  let { nAppID: t, appName: n, startingTab: r, closeModal: i } = e,
    a = mo(t),
    o = z.useId();
  return (0, B.jsx)(fe, {
    "aria-labelledby": o,
    modalClassName: `DeckVerifiedModalDialog`,
    closeModal: i,
    onCancel: i,
    children: (0, B.jsx)(Yt, {
      children: (0, B.jsx)(de, {
        focusable: !1,
        "flow-children": `column`,
        className: zo,
        children: a
          ? (0, B.jsx)(gR, {
              titleId: o,
              appName: n,
              results: a,
              eStartingTab: r,
            })
          : (0, B.jsx)(ee, {
              size: `medium`,
              position: `center`,
              string: P.Localize(`#Loading`),
            }),
      }),
    }),
  });
}
function NR(e) {
  let { category: t } = e;
  switch (t) {
    case 3:
      return (0, B.jsx)(qn, { className: Co, role: `presentation` });
    case 2:
      return (0, B.jsx)(Me, { className: Co, role: `presentation` });
    case 1:
      return (0, B.jsx)(rt, { className: Co, role: `presentation` });
    default:
      return (0, B.jsx)(Re, { className: Co, role: `presentation` });
  }
}
function PR(e) {
  let { category: t } = e;
  switch (t) {
    case 2:
      return (0, B.jsx)(Te, { className: Co, role: `presentation` });
    case 1:
      return (0, B.jsx)(rt, { className: Co, role: `presentation` });
    default:
      return (0, B.jsx)(Re, { className: Co, role: `presentation` });
  }
}
function FR(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, B.jsx)(`div`, {
      id: t,
      className: Bo,
      children: r
        ? P.LocalizeReact(
            `#SteamDeckVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, B.jsx)(`b`, { children: j(r) }),
          )
        : P.Localize(`#SteamDeckVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamDeckVerified_DescriptionHeader_Verified`), (o = Vo));
      break;
    case 2:
      ((a = `#SteamDeckVerified_DescriptionHeader_Playable`), (o = Ho));
      break;
    case 1:
      ((a = `#SteamDeckVerified_DescriptionHeader_Unsupported`), (o = Uo));
  }
  let s = (0, B.jsx)(`span`, { className: o, children: P.Localize(zR(n)) }),
    c = (0, B.jsx)(`span`, { className: Bo, children: P.Localize(i || a) }),
    l = r
      ? P.LocalizeReact(
          `#SteamDeckVerified_DescriptionHeader_WithAppName`,
          (0, B.jsx)(`b`, { children: j(r) }),
          s,
          c,
        )
      : P.LocalizeReact(`#SteamDeckVerified_DescriptionHeader`, s, c);
  return (0, B.jsx)(`div`, { id: t, className: Bo, children: l });
}
function IR(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, B.jsx)(`div`, {
      className: Bo,
      children: r
        ? P.LocalizeReact(
            `#SteamOSCompatibility_DescriptionHeader_Unknown_WithAppName`,
            (0, B.jsx)(`b`, { children: j(r) }),
          )
        : P.Localize(`#SteamOSCompatibility_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 2:
      ((a = `#SteamOSCompatibility_DescriptionHeader_Compatible`), (o = Wo));
      break;
    case 1:
      ((a = `#SteamOSCompatibility_DescriptionHeader_Unsupported`), (o = Uo));
  }
  let s = (0, B.jsx)(`span`, { className: o, children: P.Localize(BR(n)) }),
    c = (0, B.jsx)(`span`, { className: Bo, children: P.Localize(i || a) }),
    l = r
      ? P.LocalizeReact(
          `#SteamOSCompatibility_DescriptionHeader_WithAppName`,
          (0, B.jsx)(`b`, { children: j(r) }),
          s,
          c,
        )
      : P.LocalizeReact(`#SteamOSCompatibility_DescriptionHeader`, s, c);
  return (0, B.jsx)(`div`, { id: t, className: Bo, children: l });
}
function LR(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, B.jsx)(`div`, {
      className: Bo,
      children: r
        ? P.LocalizeReact(
            `#SteamMachineVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, B.jsx)(`b`, { children: j(r) }),
          )
        : P.Localize(`#SteamMachineVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamMachineVerified_DescriptionHeader_Verified`), (o = Vo));
      break;
    case 2:
      ((a = `#SteamMachineVerified_DescriptionHeader_Playable`), (o = Ho));
      break;
    case 1:
      ((a = `#SteamMachineVerified_DescriptionHeader_Unsupported`), (o = Uo));
  }
  let s = (0, B.jsx)(`span`, { className: o, children: P.Localize(zR(n)) }),
    c = (0, B.jsx)(`span`, { className: Bo, children: P.Localize(i || a) }),
    l = r
      ? P.LocalizeReact(
          `#SteamMachineVerified_DescriptionHeader_WithAppName`,
          (0, B.jsx)(`b`, { children: j(r) }),
          s,
          c,
        )
      : P.LocalizeReact(`#SteamMachineVerified_DescriptionHeader`, s, c);
  return (0, B.jsx)(`div`, { id: t, className: Bo, children: l });
}
function RR(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, B.jsx)(`div`, {
      className: Bo,
      children: r
        ? P.LocalizeReact(
            `#SteamFrameVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, B.jsx)(`b`, { children: j(r) }),
          )
        : P.Localize(`#SteamFrameVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamFrameVerified_DescriptionHeader_Verified`), (o = Vo));
      break;
    case 2:
      ((a = `#SteamFrameVerified_DescriptionHeader_Playable`), (o = Ho));
      break;
    case 1:
      ((a = `#SteamFrameVerified_DescriptionHeader_Unsupported`), (o = Uo));
  }
  let s = (0, B.jsx)(`span`, { className: o, children: P.Localize(zR(n)) }),
    c = (0, B.jsx)(`span`, { className: Bo, children: P.Localize(i || a) }),
    l = r
      ? P.LocalizeReact(
          `#SteamFrameVerified_DescriptionHeader_WithAppName`,
          (0, B.jsx)(`b`, { children: j(r) }),
          s,
          c,
        )
      : P.LocalizeReact(`#SteamFrameVerified_DescriptionHeader`, s, c);
  return (0, B.jsx)(`div`, { id: t, className: Bo, children: l });
}
function zR(e) {
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
function BR(e) {
  switch (e) {
    case 2:
      return `#SteamOSCompatibility_Category_Compatible`;
    case 1:
      return `#SteamOSCompatibility_Category_Unsupported`;
    default:
      return `#SteamOSCompatibility_Category_Unknown`;
  }
}
function VR(e) {
  return e == 2 ? `bundle` : e == 1 ? `sub` : `app`;
}
function HR(e, t) {
  let n = t || +!!e;
  return [!!n, n];
}
var UR = (e) => {
  let { appid: t } = e,
    n = (0, B.jsx)(`div`, {
      className: `ImpressionTrackedElement`,
      children: e.children,
    });
  return t ? (0, B.jsx)(le, { appID: t, children: n }) : n;
};
function WR(e) {
  let { id: t } = e,
    { data: n } = mt(t);
  return n
    ? (0, B.jsx)(`div`, {
        className: Ua,
        children: (0, B.jsx)(`div`, {
          className: Wa,
          children: n
            .slice(0, 10)
            .filter((e) => e.tagid)
            .map((e) =>
              (0, B.jsx)(
                RV,
                { tagid: e.tagid, className: Ga },
                `tag_` + e.tagid,
              ),
            ),
        }),
      })
    : null;
}
function GR(e) {
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
    g = uV(),
    _ =
      d &&
      (() => {
        (g?.(), d());
      }),
    [v, y] = (0, z.useState)(!1),
    [b, x] = (0, z.useState)(``),
    S = (e) => x(`translateY( -${e?.clientHeight || 0}px )`),
    { data: C } = pe(t),
    { data: w } = ut(n),
    T = !f && !o && !a,
    E = C && C.item_type == 0,
    [D, O] = HR(l, u);
  return (0, B.jsxs)(`div`, {
    className: Ra,
    style: { transform: s && v ? b : `` },
    onMouseEnter: () => y(!0),
    onFocus: () => y(!0),
    onMouseLeave: () => y(!1),
    onBlur: () => y(!1),
    children: [
      (0, B.jsxs)(`a`, {
        href: i,
        className: Na,
        onClick: (e) => {
          m && e.preventDefault();
        },
        "aria-disabled": m,
        children: [
          w &&
            (0, B.jsx)(`div`, {
              className: `JsLUT-ZChQQ-`,
              children: (0, B.jsx)(`div`, {
                className: N(`-G728TP4qEc-`, `AWrycDVaY80-`),
                children: (0, B.jsx)(`img`, {
                  loading: `lazy`,
                  src: ct(w, `header`),
                  alt: C?.name,
                }),
              }),
            }),
          !c &&
            !f &&
            (0, B.jsx)(`div`, {
              className: `Er5Gw2jrA3A-`,
              children: (0, B.jsx)(rz, { id: t, onlyOneDiscountPct: !0 }),
            }),
        ],
      }),
      (0, B.jsx)(`div`, {
        className: za,
        ref: S,
        children: (0, B.jsxs)(`div`, {
          className: Va,
          children: [
            (0, B.jsx)(`a`, {
              href: i,
              onClick: (e) => {
                m && e.preventDefault();
              },
              "aria-disabled": m,
              children: (0, B.jsx)(`div`, {
                className: Ha,
                children: C?.name || r,
              }),
            }),
            h && (0, B.jsx)(qR, { id: t }),
            (0, B.jsx)(WR, { id: t }),
            !D && (0, B.jsx)(no, { id: t }),
            !(D || !T) &&
              (0, B.jsxs)(`div`, {
                className: `N6R56w3oY8s-`,
                children: [
                  (0, B.jsx)(XR, { id: t, strClassName: `aRGldfNGEPM-` }),
                  (0, B.jsx)(KR, { id: t }),
                ],
              }),
            o && (0, B.jsx)(Bz, { id: t, className: `mVkwv5PYwMg-` }),
            !!(D && E) &&
              (0, B.jsx)(kR, { id: t, compatibility: O, onShowDialog: _ }),
            !!a && a,
            f &&
              E &&
              t &&
              `appid` in t &&
              t.appid &&
              (0, B.jsx)(bz, { appid: t.appid, bIsMuted: !1 }),
            p && (0, B.jsx)(VB, { nCreatorAccountID: p }),
          ],
        }),
      }),
    ],
  });
}
function KR(e) {
  let { id: t } = e,
    { data: n } = ze(t);
  if (!n) return null;
  let r = ba(n);
  return (0, B.jsx)(`div`, { className: Ka, children: r });
}
function qR(e) {
  let { id: t } = e,
    { data: n } = ve(t);
  return n
    ? (0, B.jsx)(`div`, { className: Ba, children: n?.short_description })
    : null;
}
function JR(e) {
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
    { data: l } = bt(t),
    { data: u } = Jn(t),
    d = l === void 0 && u === void 0,
    [f] = HR(!!a, o);
  return (0, B.jsxs)(`div`, {
    className: N(Oa, d && `dNo27dzDPfI-`, Ti, i && `djLCJl8FKv8-`),
    children: [
      (0, B.jsxs)(`a`, {
        href: r,
        className: ka,
        children: [
          !(!s || f) && (0, B.jsx)(fo, { id: n, snr: e.strSNR }),
          !(!c || f) && (0, B.jsx)(rB, { id: n, snr: e.strSNR }),
          t && (0, B.jsx)(QB, { id: t }),
        ],
      }),
      (0, B.jsx)(GR, { ...e }),
    ],
  });
}
function YR(e) {
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
      ...v
    } = e,
    { data: y } = pe(t),
    b = me(),
    [x, S, C] = Ln(),
    { strStoreURL: w, snr: T } = xz(y, o);
  if ((!y && !n) || b) return (0, B.jsx)(B.Fragment, { children: u });
  let E = t;
  y &&
    y.item_type == 1 &&
    y.included_appids?.length == 1 &&
    (E = { appid: y.included_appids[0] });
  let D = mV() == `hiding`,
    O = r || !y ? void 0 : w,
    [, k] = HR(p, m),
    A;
  k != 0 && y?.appid && y?.item_type == 0 && (A = y.appid);
  let ee = (0, B.jsx)(JR, {
      id: t,
      displayID: E,
      name: n,
      bPreventNavigation: r,
      strStoreUrl: O,
      elElementToAppend: i,
      bShowDemoButton: a,
      bShowDeckCompatibilityDialog: p,
      eHardwareCompatibilityDisplay: m,
      bHideBottomHalf: D,
      bHidePrice: s,
      bUseSubscriptionLayout: c,
      strSNR: T,
      nCreatorAccountID: d,
      bShowWishlistButton: h,
      bShowIgnoreButton: g,
      bShowDescription: _,
      onShowDeckCompatibilityDialog: A ? S : void 0,
    }),
    j = O ? (0, B.jsx)(`a`, { href: O, children: u }) : u;
  return (0, B.jsxs)(B.Fragment, {
    children: [
      (0, B.jsx)(dV, {
        hoverContent: ee,
        nWidthMultiplier: f,
        ...v,
        children: j,
      }),
      A &&
        (0, B.jsx)(AR, {
          nAppID: A,
          appName: y?.name || n,
          startingTab: k,
          active: x,
          closeModal: C,
        }),
    ],
  });
}
function XR(e) {
  let { id: t, strClassName: n, bMinimizePlatforms: r, bHideWindows: i } = e,
    { data: a } = Ae(t);
  if (!a) return null;
  if (r) {
    let e = i
      ? null
      : a?.windows &&
        (0, B.jsx)(`span`, {
          title: P.Localize(`#Platform_Windows`),
          children: (0, B.jsx)(an, {
            "aria-label": P.Localize(`#Platform_Windows`),
          }),
        });
    return (
      F.PLATFORM === `linux` && a?.steamos_linux
        ? (e = (0, B.jsx)(`span`, {
            title: P.Localize(`#Platform_Linux`),
            children: (0, B.jsx)(De, {
              "aria-label": P.Localize(`#Platform_Linux`),
            }),
          }))
        : F.PLATFORM === `macos` && a?.mac
          ? (e = (0, B.jsx)(`span`, {
              title: P.Localize(`#Platform_Mac`),
              children: (0, B.jsx)(Ke, {
                "aria-label": P.Localize(`#Platform_Mac`),
              }),
            }))
          : a.vr_support?.vrhmd &&
            (e = (0, B.jsx)(`span`, {
              title: P.Localize(`#Platform_VR`),
              children: (0, B.jsx)(hn, {
                "aria-label": P.Localize(`#Platform_VR`),
              }),
            })),
      e ? (0, B.jsx)(`span`, { className: N(Pr, n), children: e }) : null
    );
  }
  return (0, B.jsxs)(`span`, {
    className: N(Pr, n),
    children: [
      !i &&
        a.windows &&
        (0, B.jsx)(`span`, {
          title: P.Localize(`#Platform_Windows`),
          children: (0, B.jsx)(an, {
            "aria-label": P.Localize(`#Platform_Windows`),
          }),
        }),
      a.mac &&
        (0, B.jsx)(`span`, {
          title: P.Localize(`#Platform_Mac`),
          children: (0, B.jsx)(Ke, {
            "aria-label": P.Localize(`#Platform_Mac`),
          }),
        }),
      a.steamos_linux &&
        (0, B.jsx)(`span`, {
          title: P.Localize(`#Platform_Linux`),
          children: (0, B.jsx)(De, {
            "aria-label": P.Localize(`#Platform_Linux`),
          }),
        }),
      a.vr_support?.vrhmd &&
        (0, B.jsx)(`span`, {
          title: P.Localize(`#Platform_VR`),
          children: (0, B.jsx)(hn, {
            "aria-label": P.Localize(`#Platform_VR`),
          }),
        }),
    ],
  });
}
function ZR(e) {
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
      return (console.assert(!1, `Unhandled country code: ${e}`), 1);
  }
}
var QR = {
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
  $R = {
    strSymbol: ``,
    bSuffixSymbol: !1,
    bSpaceForSymbol: !1,
    bWholeUnitsOnly: !1,
    eCurrency: 0,
    strDecimalSymbol: `.`,
    strThousandsSeparator: `,`,
  };
function ez(e) {
  return { ...$R, ...QR[e], eCurrency: e };
}
function tz(e, t) {
  return nz(e, ez(t));
}
function nz(e, t) {
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
function rz(e) {
  let { id: t, bSelfPurchaseOption: n } = e,
    { data: r } = Ge(t),
    { data: i } = pe(t);
  if (!i) return null;
  let a = n && i.item_type == 1 ? i.self_purchase_option : r;
  return (0, B.jsx)(iz, { purchaseOption: a, ...e });
}
function iz(e) {
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
    { data: _ } = ze(r),
    { data: v } = pe(r);
  if (!v) return null;
  let y = i,
    b = !m && Ca(_, g),
    x = N({
      [Kr]: !0,
      [yi]: t,
      StoreSalePriceWidgetContainer: !0,
      [Ci]: b,
      [Mr]: c,
      [l ?? ``]: !!l,
    });
  if (e.bShowInLibrary)
    return (0, B.jsx)(`div`, {
      className: x,
      children: (0, B.jsx)(`div`, {
        className: vi,
        children: P.Localize(`#EventDisplay_CallToAction_InLibrary`),
      }),
    });
  if (_ && _.is_coming_soon && (!y || (!y.packageid && !y.bundleid))) {
    if (o) return null;
    let e =
      _.coming_soon_display &&
      [`text_comingsoon`, `text_tba`].includes(_.coming_soon_display)
        ? ce(_)
        : P.Localize(`#EventDisplay_CallToAction_ComingSoon_Date`, ba(_));
    return (0, B.jsx)(`div`, {
      className: x,
      children: (0, B.jsx)(`div`, { className: vi, children: e }),
    });
  }
  if (v.is_free) {
    if (!v.is_free_temporarily)
      return v.item_type == 0 && v.type == 1
        ? s
          ? null
          : (0, B.jsxs)(`div`, {
              className: x,
              children: [
                b &&
                  (0, B.jsx)(`div`, {
                    className: `eNdjZ1XB-fk-`,
                    children: P.Localize(`#Flag_New`),
                  }),
                (0, B.jsx)(`div`, {
                  className: vi,
                  children: P.Localize(`#EventDisplay_CallToAction_FreeDemo`),
                }),
              ],
            })
        : (0, B.jsxs)(`div`, {
            className: x,
            children: [
              b &&
                (0, B.jsx)(`div`, {
                  className: `eNdjZ1XB-fk-`,
                  children: P.Localize(`#Flag_New`),
                }),
              (0, B.jsx)(`div`, {
                className: vi,
                children: P.Localize(`#EventDisplay_CallToAction_FreeToPlay`),
              }),
            ],
          });
    if (y && y.is_free_to_keep && !y.formatted_original_price)
      return (0, B.jsx)(`div`, {
        className: x,
        children: (0, B.jsx)(`div`, {
          className: vi,
          children: P.Localize(`#EventDisplay_CallToAction_Free`),
        }),
      });
  }
  if (!y || !y.formatted_final_price) return null;
  let S = v.item_type == 2,
    C = jt(y),
    w = !!C && !C.nSupersededBundlePct,
    T = C?.nSupersededBundlePct ? C.nDiscountPct : y.discount_pct || 0,
    E = ((C || S) && (!n || w || (C && !t)) && y.bundle_discount_pct) || 0,
    D = y.formatted_final_price;
  if (f) {
    let e = { ...ez(ZR(Fe.country_code.toUpperCase())), bWholeUnitsOnly: !0 };
    D = nz(Number.parseInt(y.final_price_in_cents || `0`), e);
  }
  let O = wa(_, y);
  return (0, B.jsx)(az, {
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
function az(e) {
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
      ? P.Localize(`#Discount_ARIA_Label_SpecialPrice`, a)
      : P.Localize(`#Discount_ARIA_Label`, n, a, o));
  let _ = !((!n && !i) || h) && !!a,
    v = !(!i || !n || h || t),
    y = P.Localize(Ze(!!i, !!n, !!m));
  return (0, B.jsxs)(`div`, {
    className: N({
      [Kr]: !0,
      [yi]: t,
      StoreSalePriceWidgetContainer: !0,
      [gi]: !!n,
      Discounted: !!n,
      [Si]: !!r,
      [Di]: !!u,
      [Ci]: !!c,
      [Mr]: p,
      [d ?? ``]: !!d,
    }),
    "aria-label": g,
    children: [
      !(!r || l) &&
        (0, B.jsx)(`div`, {
          className: N(`DfwzMU92EL4-`, `StoreSalePrepurchaseLabel`),
          children: (0, B.jsxs)(`span`, {
            children: [
              (0, B.jsx)(Xe, {}),
              P.Localize(`#EventDisplay_CallToAction_Prepurchase_Short`),
            ],
          }),
        }),
      !(r || !c) &&
        (0, B.jsx)(`div`, {
          className: `eNdjZ1XB-fk-`,
          children: P.Localize(`#Flag_New`),
        }),
      v &&
        (0, B.jsx)(nt, {
          toolTipContent: y,
          children: (0, B.jsxs)(`span`, {
            className: N(`kjiBcsaqA8o-`, `_3jMC2e33p3s-`),
            children: [
              (0, B.jsx)(`span`, {
                className: `cCmCiA6FCMc-`,
                children: `-${i}%`,
              }),
              `-${n}%`,
            ],
          }),
        }),
      !(!i || h || v) &&
        (0, B.jsxs)(B.Fragment, {
          children: [
            (0, B.jsx)(nt, {
              toolTipContent: y,
              children: (0, B.jsx)(`span`, {
                className: N(`_-1f811oo4iw-`),
                children: `-${i}%`,
              }),
            }),
            !!n &&
              (0, B.jsx)(nt, {
                toolTipContent: y,
                children: (0, B.jsx)(`span`, {
                  className: N(`kjiBcsaqA8o-`),
                  children: `-${n}%`,
                }),
              }),
          ],
        }),
      !(i || !n || h) &&
        (0, B.jsx)(nt, {
          toolTipContent: y,
          children: (0, B.jsx)(`div`, {
            className: N(`kjiBcsaqA8o-`, `StoreSaleDiscountBox`),
            children: `-${n}%`,
          }),
        }),
      !!(n && h) &&
        (0, B.jsx)(`div`, {
          className: `NqZ9uMSo13A-`,
          children: (0, B.jsx)(Ve, {}),
        }),
      _
        ? (0, B.jsxs)(`div`, {
            className: N(bi),
            children: [
              (0, B.jsx)(`div`, {
                className: N({ [Ei]: t, [xi]: !t }),
                children: a,
              }),
              (0, B.jsx)(`div`, {
                className: N({ [vi]: !0, [yi]: t, [f ?? ``]: !!f }),
                children: o,
              }),
            ],
          })
        : (0, B.jsx)(`div`, {
            className: N({ [vi]: !0, [f ?? ``]: !!f }),
            children: o,
          }),
    ],
  });
}
var oz = `pE3kiYj-T9c-`,
  sz = `bXqn3-4kGc8-`,
  cz = `bNGFzJt9CmI-`,
  lz = `vE1beFyJ7fE-`,
  uz = `jLH2MgXW2QA-`,
  dz = `dGNTZWr-al8-`,
  fz = `_8aFotqvmohI-`,
  pz = `sjibpkgu4sc-`,
  mz = `I09IQjtbMSg-`,
  hz = `C4-YRfvAL7Q-`;
async function gz(e, t) {
  let n = `steam://run/` + e;
  L.IN_CLIENT
    ? (console.log(`Running game ${e} locally.`), (window.location.href = n))
    : (console.log(
        `Cannot identify local client. Prompting user to launch ${e}.`,
      ),
      vz(e, n, t));
}
async function _z(e, t) {
  let n = `steam://install/` + e;
  L.IN_CLIENT ? (window.location.href = n) : vz(e, n, t);
}
async function vz(e, t, n) {
  console.log(`prompting for`, n);
  let r = L.STORE_BASE_URL + `about/`;
  dn(
    (0, B.jsx)(yz, {
      appid: e,
      strGameName: n || ``,
      strOnOKUrl: t,
      strDownloadSteamUrl: r,
    }),
    window,
  );
}
var yz = (e) => {
  let t = () => e.closeModal && e.closeModal();
  return (0, B.jsx)(Je, {
    onEscKeypress: t,
    className: oz,
    children: (0, B.jsxs)(Lt, {
      children: [
        (0, B.jsxs)(Ut, { children: [` `, I(`#GotSteam_Title`), ` `] }),
        (0, B.jsxs)(Yt, {
          children: [
            (0, B.jsx)(Cn, {
              children: kt(
                `#GotSteam_PromptWithDownloadLink`,
                (0, B.jsx)(`a`, {
                  href: e.strDownloadSteamUrl,
                  className: sz,
                  children: I(`#GotSteam_DownloadLinkText`),
                }),
                (0, B.jsx)(`span`, { className: cz, children: e.strGameName }),
              ),
            }),
            (0, B.jsxs)(`div`, {
              className: lz,
              children: [
                (0, B.jsxs)(`a`, {
                  href: e.strOnOKUrl,
                  onClick: t,
                  className: N(uz, dz),
                  children: [
                    (0, B.jsxs)(`div`, {
                      className: fz,
                      children: [` `, I(`#GotSteam_Yes`), ` `],
                    }),
                    (0, B.jsxs)(`div`, {
                      className: pz,
                      children: [` `, I(`#GotSteam_Yes_Play`), ` `],
                    }),
                  ],
                }),
                (0, B.jsxs)(`a`, {
                  href: e.strDownloadSteamUrl,
                  onClick: t,
                  className: uz,
                  children: [
                    (0, B.jsxs)(`div`, {
                      className: fz,
                      children: [` `, I(`#GotSteam_No`), ` `],
                    }),
                    (0, B.jsxs)(`div`, {
                      className: pz,
                      children: [` `, I(`#GotSteam_No_Download`), ` `],
                    }),
                  ],
                }),
              ],
            }),
            (0, B.jsxs)(`div`, {
              className: mz,
              children: [
                (0, B.jsx)(De, { className: hz }),
                I(`#GotSteam_Blurb`),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
function bz(e) {
  let { appid: t, bIsMuted: n } = e,
    r = y(t),
    i = tr(t),
    { data: a } = pe(r),
    { mutate: o } = Ea(r),
    s = (e) => {
      (e.preventDefault(), i ? gz(t, a?.name) : o());
    },
    c = N(Hr, n && void 0, i ? Ur : Wr);
  return (0, B.jsx)(`div`, {
    role: `button`,
    tabIndex: 0,
    onClick: s,
    className: c,
    onKeyDown: (e) => {
      (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), s(e));
    },
    children: I(i ? `#Sale_PlayNow` : `#Sale_AddToLibrary`),
  });
}
function xz(e, t) {
  let n = ke(),
    r = St(),
    i = M(C(e, t));
  return { snr: je(n), strStoreURL: Se(i, n, r) };
}
function Sz(e, t, n, r, i) {
  return Cz(
    [{ packageid: e, bundleid: t, bIsGift: n, nAccountIDGiftee: r }],
    i,
  );
}
function Cz(e, t) {
  let n = Dt(),
    r = Rt(),
    i = l(),
    { storeBrowseContext: a, dataLoader: o } = ln(),
    { country: s } = a,
    c = pt(t);
  return m({
    mutationFn: async () => {
      if (e.length == 0 || !e.every((e) => e.packageid || e.bundleid))
        throw `Every item must have a valid package or bundle id`;
      let t;
      if (gt(n)) {
        let [a, o] = await lt(r, s, e, c);
        if (a == 1) ((t = o.line_item_ids), He(i, n, o.cart));
        else throw `AddItemsToAccountCart failed with ${a}`;
      } else if (Oe(n)) {
        let a = e.map((e) => e.packageid).filter(st),
          o = e.map((e) => e.bundleid).filter(st);
        if (o.length > 1)
          throw `The anonymous cart can only take one bundle per call`;
        let [s, c] = await be(
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
            He(i, n, _e(c)));
        } else throw `AddItemsToAnonymousCart failed with ${s}`;
      } else throw `Invalid cart type`;
      return t;
    },
    onMutate: () => {
      (async () => {
        let t = e.map((e) =>
          e.packageid ? { packageid: e.packageid } : { bundleid: e.bundleid },
        );
        (await Promise.all(t.map((e) => i.fetchQuery(Qt(o, e))))).forEach(
          (e, n) => {
            let r =
              e?.included_appids?.length == 1
                ? { appid: e.included_appids[0] }
                : t[n];
            (i.prefetchQuery(gn(o, r)), i.prefetchQuery(Vt(o, r)));
          },
        );
      })();
    },
  });
}
var wz = e(p(), 1);
async function Tz(e, t) {
  let n = on.Init(Wt);
  (n.Body().set_context(Kt(!1)), t.forEach((e) => n.Body().add_packageid(e)));
  let r = await $t.GetHardwareItems(e, n);
  return r.BSuccess()
    ? r
        .Body()
        .details()
        .map((e) => e.toObject())
    : (console.error(`GetHardareDetails failed on packages: ${t.join(`,`)}`),
      null);
}
function Ez(e) {
  let t = jz(Rt());
  return h(kz(t, e));
}
var Dz = (function (e) {
  return (
    (e[(e.k_Loading = 0)] = `k_Loading`),
    (e[(e.k_LoadSuccess = 1)] = `k_LoadSuccess`),
    (e[(e.k_LoadFailure = 2)] = `k_LoadFailure`),
    e
  );
})({});
function Oz(e) {
  let t = jz(Rt()),
    n = f({ queries: e.map((n) => ({ ...kz(t, n), enabled: e.length > 0 })) }),
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
function kz(e, t) {
  return { queryKey: Az(t), queryFn: async () => e.load(t), enabled: !!t };
}
function Az(e) {
  return [`hardwaredetail`, e];
}
function jz(e) {
  return _(`HardwareDetailLoader`, () => Mz(e));
}
function Mz(e) {
  return new wz.default(async (t) => {
    let n = await Tz(e, t),
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
var Nz = { high_pending_orders: !1, inventory_available: !0 };
function Pz(e) {
  let { data: t } = pe(e),
    n = t?.item_type === 1 && t.type === 10,
    { data: r } = Ez(n ? t.id : void 0);
  return t ? (n ? (r ?? null) : Nz) : null;
}
var Fz = `wvEYeGaFmt0-`,
  Iz = `GW1050ijiP0-`;
function Lz(e) {
  let { id: t, className: n } = e,
    r = ke(),
    { data: i } = pe(t),
    { data: a } = ze(t),
    { data: o } = mn(t),
    s = Pz(t),
    { bIsOwned: c } = ir(t),
    l = zn(i),
    u = (0, z.useCallback)(() => {
      if (i) {
        let e = i.appid;
        (i.related_items?.parent_appid &&
          i.type != 11 &&
          (e = i.related_items.parent_appid),
          Rn(window, `steam://run/${e}`));
      }
    }, [i]);
  if (!i || !a || !o || i.type == 8) return null;
  let d =
    i.is_free ||
    (o.final_price_in_cents != null && o.final_price_in_cents == `0`) ||
    (o.discount_pct && o.discount_pct >= 100);
  if (i.item_type == 1) {
    if (i.type == 10) {
      if (!s) return (0, B.jsx)(ee, { size: `small`, position: `center` });
      if (!s.inventory_available)
        return (0, B.jsx)(`div`, {
          className: N(Iz, n),
          children: (0, B.jsxs)(`span`, {
            children: [` `, P.Localize(`#Sale_ReserveExhausted`)],
          }),
        });
    } else if (d && i.included_appids && i.included_appids.length > 1)
      return null;
  }
  if (i.item_type == 0) {
    if ((a.is_coming_soon && !o.packageid) || (c && i.type === 10)) return null;
    if (!c && o.is_free_to_keep) {
      if (L.IN_CLIENT || xe() != `store`) {
        let e = `${L.IN_CLIENT ? `steam://openurl/` : ``}${l}`;
        return (0, B.jsx)(`div`, {
          onClick: (t) => Rn(t, e),
          className: N(Fz, n),
          children: (0, B.jsx)(`span`, {
            children: P.Localize(`#EventDisplay_CallToAction_VisitStore`),
          }),
        });
      }
      {
        let e = qe(`${L.STORE_BASE_URL}freelicense/addfreelicense`, r);
        return (0, B.jsxs)(`form`, {
          action: e,
          method: `POST`,
          children: [
            (0, B.jsx)(`input`, {
              type: `hidden`,
              name: `subid`,
              value: o.packageid,
            }),
            (0, B.jsx)(`input`, {
              type: `hidden`,
              name: `sessionid`,
              value: Pe(),
            }),
            (0, B.jsx)(`button`, {
              className: N(Fz, n),
              type: `submit`,
              children: P.Localize(`#EventDisplay_CallToAction_AddToAccount`),
            }),
          ],
        });
      }
    }
    if ((c || d) && !i.is_coming_soon) {
      let e = P.Localize(`#EventDisplay_CallToAction_PlayNowForFree`);
      return (
        c
          ? (e = P.Localize(`#EventDisplay_CallToAction_PlayNow`))
          : i.is_free_temporarily &&
            (e = P.Localize(`#EventDisplay_CallToAction_AddToAccount`)),
        (0, B.jsx)(`div`, {
          className: N(Fz, n),
          onClick: u,
          children: (0, B.jsx)(`span`, { children: e }),
        })
      );
    }
    if (o.formatted_final_price == ``)
      return (0, B.jsx)(`a`, {
        href: l,
        className: N(Fz, n),
        children: P.Localize(`#EventDisplay_CallToAction_VisitStore`),
      });
  }
  return (0, B.jsx)(Rz, {
    className: n,
    storeItemBestPurchaseOption: o,
    storeItemDefaultData: i,
  });
}
function Rz(e) {
  let {
      className: t,
      storeItemBestPurchaseOption: n,
      storeItemDefaultData: r,
    } = e,
    i = ke(),
    { mutate: a } = Sz(n?.packageid, n?.bundleid, !1, void 0, i.feature);
  return (0, B.jsx)(`div`, {
    className: N(Fz, t),
    onClick: () => a(),
    children: (0, B.jsx)(`span`, { children: P.Localize(`#Store_AddToCart`) }),
  });
}
var zz = `_8xhMURZRDBY-`;
function Bz(e) {
  let { id: t, className: n } = e,
    { data: r } = pe(t);
  if (!r) return null;
  let i =
      r.related_items?.demo_appid && r.related_items.demo_appid
        ? r.related_items.demo_appid
        : [],
    a = i.length > 0,
    o = a || r.type === 1,
    s = o
      ? P.Localize(`#Sale_InstallDemo_ttip`, r.name || ``)
      : a
        ? P.Localize(`#Sale_CannotInstallDemo_ttip`, r.name || ``)
        : P.Localize(`#Loading`);
  if (F.IN_MOBILE_WEBVIEW) {
    if (o && a) {
      let e = r.type === 1 ? r.appid : i[0];
      return (0, B.jsx)(`div`, {
        className: n,
        children: (0, B.jsx)(MV, { appid: e }),
      });
    }
    return null;
  }
  return !o && a && r.is_free
    ? (0, B.jsx)(Lz, { id: t, className: n })
    : (0, B.jsx)(Kn, {
        toolTipContent: s,
        onClick: (e) => {
          (e.preventDefault(),
            e.stopPropagation(),
            o && gz(r.type === 1 ? r.appid : i[0], r.name));
        },
        className: N(n, zz, !o && `gpIFsnR2ZGs-`),
        children: o
          ? P.Localize(`#Sale_InstallDemo`)
          : P.Localize(`#Sale_DemoNotFound`),
      });
}
async function Vz(e, t) {
  let n = kn(L.STORE_BASE_URL, t, Tn.country_code);
  return (await (await fetch(n)).json()).rgFollowedApps || [];
}
function Hz() {
  let e = Rt(),
    t = Tn.accountid;
  return h(Uz(e, t));
}
function Uz(e, t) {
  return {
    queryKey: Kz(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await Vz(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function Wz(e) {
  let { data: t } = Hz();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function Gz() {
  let e = l(),
    t = Tn.accountid;
  return (n, r) => {
    e.setQueryData(Kz(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function Kz(e) {
  return [`AccountFollowApps`, e ?? 0];
}
function qz(e, t, n) {
  let r = Gz(),
    i = Tn.accountid;
  return m({
    mutationKey: [`useUpdateAppFollow`, e, i, t],
    mutationFn: async () => {
      if (e == null) return;
      let r = L.STORE_BASE_URL + `explore/followgame`,
        i = new FormData();
      (i.append(`appid`, `` + e),
        i.append(`sessionid`, Pe()),
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
      Ht();
    },
  });
}
var Jz = `VULTMp1PCTw-`,
  Yz = `_2vLXBykr6zc-`;
async function Xz(e, t) {
  let n = kn(L.STORE_BASE_URL, t, Tn.country_code),
    r = await (await fetch(n)).json();
  return Object.keys(r.rgIgnoredApps).map(Number) || [];
}
function Zz() {
  let e = Rt(),
    t = Tn.accountid;
  return h(Qz(e, t));
}
function Qz(e, t) {
  return {
    queryKey: tB(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await Xz(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function $z(e) {
  let { data: t } = Zz();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function eB() {
  let e = l(),
    t = Tn.accountid;
  return (n, r) => {
    e.setQueryData(tB(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function tB(e) {
  return [`AccountIgnoreApps`, e ?? 0];
}
function nB(e, t, n, r = 0) {
  let i = eB(),
    a = Tn.accountid;
  return m({
    mutationKey: [`useUpdateAppIgnore`, e, a, t],
    mutationFn: async () => {
      if (e == null) return;
      let i = L.STORE_BASE_URL + `recommended/ignorerecommendation`,
        a = new FormData();
      (a.append(`appid`, `` + e),
        a.append(`sessionid`, Pe()),
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
      Ht();
    },
  });
}
function rB(e) {
  let { id: t, snr: n, classOverride: r } = e,
    [i, a] = (0, z.useState)(!1),
    o = O(`GameHoverIgnoreButton`),
    { elDialogElement: s, fnShowLogonDialog: c } = te(),
    l = t && `appid` in t ? t.appid : void 0,
    { mutateAsync: u } = nB(l, !$z(l), n),
    d = t && `appid` in t && Bt.Get().BIsGameIgnored(t.appid);
  return (0, B.jsxs)(de, {
    className: N(Jz, r),
    onClick: async (e) => {
      (e.preventDefault(),
        e.stopPropagation(),
        Tn.logged_in
          ? t && `appid` in t && (a(!0), await u(), o.token.reason || a(!1))
          : c());
    },
    children: [
      (0, B.jsx)(tt, {}),
      (0, B.jsx)(`div`, {
        className: N(Yz, i && `vyz9N2LpdMs-`),
        children: I(d ? `#Sale_RemoveFromIgnored` : `#Sale_Ignore`),
      }),
      s,
    ],
  });
}
async function iB(e, t) {
  let n = kn(L.STORE_BASE_URL, t, Tn.country_code),
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
function aB() {
  let e = Rt(),
    t = Fe.accountid;
  return h(oB(e, t));
}
function oB(e, t) {
  return {
    queryKey: fB(t),
    queryFn: async () => {
      let n = new Map();
      if (t)
        try {
          (await iB(e, t)).forEach((e) => n.set(e.clanid, e));
        } catch (e) {
          console.error(`GetCuratorAffinityQuery`, e);
        }
      return n;
    },
    enabled: !!t,
  };
}
function sB(e) {
  let { data: t } = aB();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.followed;
}
function cB(e) {
  let { data: t } = aB();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.ignored;
}
function lB() {
  return F.EREALM != Vn.k_ESteamRealmChina;
}
function uB() {
  return F.EREALM != Vn.k_ESteamRealmChina;
}
function dB() {
  let e = l(),
    t = Fe.accountid;
  return (n, r, i, a) => {
    e.setQueryData(fB(t), (e) => {
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
function fB(e) {
  return [`CuratorAffinityQueryKey`, e ?? 0];
}
var pB = (function (e) {
  return (
    (e[(e.k_ECuratorFollow = 1)] = `k_ECuratorFollow`),
    (e[(e.k_ECuratorUnfollow = 2)] = `k_ECuratorUnfollow`),
    (e[(e.k_ECuratorIgnore = 3)] = `k_ECuratorIgnore`),
    (e[(e.k_ECuratorUnignore = 4)] = `k_ECuratorUnignore`),
    e
  );
})({});
function mB(e, t) {
  let n = dB(),
    r = Tn.accountid;
  return m({
    mutationKey: [`useUpdateCuratorAffinity`, e, r, t],
    mutationFn: async () => {
      if (e == null) return !1;
      let n = t == pB.k_ECuratorFollow || t == pB.k_ECuratorUnfollow,
        r = t == pB.k_ECuratorFollow || t == pB.k_ECuratorIgnore,
        i = `${L.STORE_BASE_URL}curators/${n ? `ajaxfollow/` : `ajaxignore/`}`,
        a = new FormData();
      (a.append(`clanid`, `` + e),
        a.append(`sessionid`, Pe()),
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
        let r = t == pB.k_ECuratorUnfollow || t == pB.k_ECuratorUnignore;
        n(
          t == pB.k_ECuratorFollow ? [{ clanAccountID: e }] : void 0,
          t == pB.k_ECuratorIgnore ? [{ clanAccountID: e }] : void 0,
          r ? [{ clanAccountID: e }] : void 0,
        );
      }
    },
    onError: (r) => {
      if (e != null) {
        let i = t == pB.k_ECuratorFollow || t == pB.k_ECuratorIgnore;
        n(
          t == pB.k_ECuratorUnfollow ? [{ clanAccountID: e }] : void 0,
          t == pB.k_ECuratorUnignore ? [{ clanAccountID: e }] : void 0,
          i ? [{ clanAccountID: e }] : void 0,
          r ? [{ clanAccountID: e, is_creator: !0 }] : void 0,
        );
      }
    },
    onSuccess: (t) => {
      (t &&
        e &&
        n(void 0, void 0, void 0, [{ clanAccountID: e, is_creator: !0 }]),
        Ht());
    },
  });
}
var hB = `QOSk1wMadGg-`,
  gB = `DH1jwyMHeXo-`,
  _B = `J5g1CfUd95U-`,
  vB = `_3IPvWkyhZzM-`,
  yB = `jB1S5EvgUjI-`,
  bB = `iWO-8zu8RAA-`,
  xB = `MTgAGoNV5vg-`,
  SB = `LEvP9jHHfL8-`,
  CB = `K9ZawxnkJcI-`,
  wB = `OlPIY4AN-5s-`,
  TB = `_7UT3Pb65ni0-`,
  EB = `sT74IdnPxY8-`,
  DB = `ZTz7p5tpqNU-`,
  OB = `ct7kvDppls0-`,
  kB = `SG9Xn5tF5a0-`,
  AB = `clYVRh6K2Ig-`,
  jB = `k6MwDwdCJTU-`,
  MB = `mnFUxHcas-0-`,
  NB = `_6lWvo8crYSU-`,
  PB = `r3PgsXSGPho-`,
  FB = `EWCiFLRR-T8-`,
  IB = `GEroszngeLM-`,
  LB = (e) => {
    let t = F.HELP_BASE_URL + `wizard/HelpWithLimitedAccount`;
    return (0, B.jsx)(ge, {
      strTitle: I(`#Informational_Message`),
      onCancel: e.closeModal,
      onOK: e.closeModal,
      bAlertDialog: !0,
      children: (0, B.jsx)(`div`, {
        children: kt(
          e.strTokenOverride || `#User_LimitedAccount`,
          (0, B.jsx)(`a`, {
            href: t,
            target: F.IN_CLIENT ? void 0 : `_blank`,
            rel: `noopener noreferrer`,
            children: I(`#User_LimitedAccount_UrlInfo`),
          }),
        ),
      }),
    });
  },
  RB = (e) => {
    let {
        className: t,
        bIgnored: n,
        bApplyingFollowing: r,
        bFollowing: i,
        onFollowClick: a,
        followType: o,
      } = e,
      { elDialogElement: s, fnShowLogonDialog: c } = te();
    if (!lB()) return null;
    let l = null;
    switch (o) {
      case `app`:
        l = I(`#text_store_follow_desc`);
        break;
      case `creatorhome`:
        l = I(`#CreatorHome_Follow_tooltip`);
        break;
      case `steamcurator`:
        l = I(`#steam_curator_follow_ttip`);
        break;
      case `group`:
        l = I(`#steam_group_follow_ttip`);
    }
    return l
      ? (0, B.jsxs)(B.Fragment, {
          children: [
            (0, B.jsx)(nt, {
              toolTipContent: !n && !i ? l : void 0,
              children: (0, B.jsxs)(It, {
                className: N(ne, PB, `FollowButton`, t, i ? `Followed` : ``),
                onClick: () => {
                  Fe.logged_in ? a() : c();
                },
                children: [
                  r && (0, B.jsx)(ie, { size: 15 }),
                  !r && (i || n) && (0, B.jsx)(Sn, {}),
                  (0, B.jsx)(`div`, {
                    className: N(FB, `FollowBtnText`),
                    children:
                      !r &&
                      I(
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
function zB(e) {
  let {
      followType: t,
      fnSuccessCallback: n,
      clanAccountID: r,
      className: i,
    } = e,
    [a, o] = z.useState(!1),
    { data: s } = x(t ? void 0 : r),
    c = sB(r),
    l = cB(r),
    { mutateAsync: u } = mB(r, c ? pB.k_ECuratorUnfollow : pB.k_ECuratorFollow),
    [d, f, p] = Ln(),
    m = z.useCallback(async () => {
      c != null && (o(!0), await u(), o(!1), n?.(c));
    }, [c, n, u]);
  return (0, B.jsxs)(B.Fragment, {
    children: [
      (0, B.jsx)(RB, {
        className: i,
        bIgnored: !!l,
        bFollowing: !!c,
        bApplyingFollowing: a,
        onFollowClick: () => {
          Fe.is_limited ? f() : m();
        },
        followType: t ?? (s?.is_creator_home ? `creatorhome` : `steamcurator`),
      }),
      (0, B.jsx)(vn, {
        active: d,
        children: (0, B.jsx)(LB, { closeModal: p }),
      }),
    ],
  });
}
function BB(e) {
  let { appid: t, className: n } = e,
    [r, i] = z.useState(!1),
    a = Wz(t),
    o = $z(t),
    s = ke(),
    c = Ie.GetSNRLinkParam(s),
    { mutateAsync: l } = qz(t, !a, c),
    u = z.useCallback(async () => {
      (i(!0), await l(), i(!1));
    }, [l]);
  return (0, B.jsx)(RB, {
    className: n,
    bIgnored: !!o,
    bFollowing: !!a,
    bApplyingFollowing: r,
    onFollowClick: u,
    followType: `app`,
  });
}
function VB(e) {
  let {
      nCreatorAccountID: t,
      classOverride: n,
      styleOverride: r,
      followType: i,
    } = e,
    { data: a } = x(t),
    { data: o } = or(t);
  if (!a || !o) return null;
  let s = a.avatar_medium_url || a.avatar_full_url;
  return (
    (s ||= re(void 0, `medium`, `web`)),
    (0, B.jsxs)(`div`, {
      className: N(to, n),
      style: r,
      children: [
        (0, B.jsx)(`a`, {
          href: lr(o, `developer`),
          children: (0, B.jsx)(`img`, { src: s, alt: a.group_name }),
        }),
        (0, B.jsx)(zB, { clanAccountID: t, followType: i }),
      ],
    })
  );
}
var HB = 5500,
  UB = 2e3,
  WB = 10;
function GB(e, t) {
  return e && t && t.main_capsule
    ? {
        stringifyID: `maincap_${e.id}_${e.item_type}`,
        rctImage: (0, B.jsx)(
          `img`,
          {
            className: ja,
            loading: `lazy`,
            src: ct(t, `main_capsule`),
            alt: e.name,
          },
          `fallback`,
        ),
        nDurationMs: UB,
      }
    : null;
}
function KB(e, t) {
  return {
    stringifyID: `vid_${Ot(e)}`,
    rctImage: (0, B.jsx)(D, { id: e, active: !0 }),
    nDurationMs: HB,
  };
}
function qB(e) {
  let t = Et(e);
  return tn(e) ? void 0 : t;
}
function JB(e, t, n, r) {
  return n.slice(0, r).map((n, r) => {
    let i = ye(n, `1920x1080`);
    return {
      stringifyID: `screen${r}_${Ot(e)}`,
      rctImage: (0, B.jsx)(
        `img`,
        {
          className: ja,
          loading: `lazy`,
          src: i,
          alt: `${t}'s screenshot ${r + 1}`,
        },
        i,
      ),
      nDurationMs: UB,
    };
  });
}
function YB(e, t, n, r, i) {
  let a = [];
  if (
    (i && a.push(KB(e, i)),
    r && r.length > 0 && a.push(...JB(e, t.name, r, WB)),
    a.length == 0 && n && n.main_capsule)
  ) {
    let e = GB(t, n);
    e && a.push(e);
  }
  return (e && a.length, a);
}
function XB(e, t, n, r, i, a) {
  let o = [];
  (a && o.push(KB(t, a)), r && r.length > 0 && o.push(...JB(e, n.name, r, WB)));
  let s = WB - (r?.length || 0);
  return (
    s > 0 && i && i.length > 0 && o.push(...JB(e, n.name, i, s)),
    e && o.length,
    o
  );
}
function ZB(e) {
  return (0, B.jsx)(`img`, {
    className: ja,
    loading: `lazy`,
    src: Ee(E),
    alt: `default`,
  });
}
function QB(e) {
  let { id: t } = e,
    { data: n } = we(t);
  if (!n || n.unvailable_for_country_restriction || !n.visible)
    return (0, B.jsx)(`div`, {
      className: Aa,
      children: (0, B.jsx)(ZB, {}, `default`),
    });
  let r = n.item_type,
    i = n.type;
  return r == 2 || r == 1
    ? (0, B.jsx)(nV, { includeAppIDs: n.included_appids })
    : (i == 1 || i == 12) && n.related_items && n.related_items.parent_appid
      ? (0, B.jsx)(eV, {
          demoItemDefaultInfo: n,
          parentAppID: n.related_items.parent_appid,
        })
      : (0, B.jsx)($B, { storeItemDefaultData: n });
}
function $B(e) {
  let { storeItemDefaultData: t } = e,
    n = vt(t),
    r = qB(n),
    { data: i } = ut(n),
    a = Ue(n),
    o = (0, z.useMemo)(() => YB(n, t, i, a, r), [n, a, r, i, t]);
  return (0, B.jsx)(rV, { rgTrailerAndImages: o });
}
function eV(e) {
  let { demoItemDefaultInfo: t, parentAppID: n } = e,
    r = vt(t);
  return qB(r)
    ? (0, B.jsx)($B, { storeItemDefaultData: t })
    : (0, B.jsx)(tV, { demoID: r, demoItemDefaultInfo: t, parentAppID: n });
}
function tV(e) {
  let { parentAppID: t, demoID: n, demoItemDefaultInfo: r } = e,
    i = y(t),
    a = Ue(n),
    o = Ue(i),
    s = qB(i),
    c = (0, z.useMemo)(() => XB(n, i, r, a, o, s), [n, i, r, s, a, o]);
  return (0, B.jsx)(rV, { rgTrailerAndImages: c });
}
function nV(e) {
  let { includeAppIDs: t } = e,
    n = wn(),
    r = f({ queries: t.map((e) => gn(n, { appid: e })) }),
    i = f({ queries: t.map((e) => Qt(n, { appid: e })) }),
    a = (0, z.useMemo)(
      () =>
        r
          .map((e, t) => {
            let n = i[t].data,
              r = e.data;
            return GB(n, r);
          })
          .filter((e) => !!e),
      [r, i],
    );
  return (0, B.jsx)(rV, { rgTrailerAndImages: a });
}
function rV(e) {
  let { rgTrailerAndImages: t } = e,
    n = (0, z.useRef)(0),
    r = ot(),
    [i] = z.useState(new pn()),
    a = (0, z.useCallback)(
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
    (0, z.useEffect)(() => (t.length > 0 && a(), () => i.Cancel()), [t, a, i]),
    (0, B.jsx)(`div`, {
      className: Aa,
      children: t?.map((e, t) =>
        (0, B.jsx)(
          `div`,
          {
            className: N({ [ja]: !0, [Ma]: t != n.current }),
            children: e.rctImage,
          },
          `e-` + t + `-` + e.stringifyID,
        ),
      ),
    })
  );
}
var iV = `ghYXSqVPJ-U-`,
  aV = `lx1fe7xI0bg-`,
  oV = `ARp2qEoElPE-`,
  sV = `DwDon-U2yLI-`,
  cV = 150,
  lV = z.createContext(void 0);
function uV() {
  return z.useContext(lV);
}
function dV(e) {
  let {
      hoverContent: t,
      hoverProps: n,
      nDelayShowMs: r,
      nWidthMultiplier: i,
      children: a,
      className: o,
    } = e,
    s = me(),
    c = w(),
    l = !s && !c,
    [u, d] = z.useState(!1),
    [f, p] = z.useState(void 0),
    m = (e) => {
      (d(!0), p(e.currentTarget));
    },
    h = () => d(!1),
    g = z.useCallback(() => d(!1), []);
  return (0, B.jsxs)(`div`, {
    "data-key": `hover div`,
    role: `button`,
    tabIndex: 0,
    className: N(iV, o),
    onMouseEnter: m,
    onMouseLeave: h,
    onTouchStart: () => d(!1),
    onKeyDown: (e) => {
      e.keyCode == 27 && (d(!1), e.preventDefault(), e.stopPropagation());
    },
    children: [
      l &&
        f &&
        (0, B.jsx)(lV.Provider, {
          value: g,
          children: (0, B.jsx)(fV, {
            visible: u,
            target: f,
            nDelayShowMs: r,
            nWidthMultiplier: i,
            hoverProps: n,
            children: t,
          }),
        }),
      (0, B.jsx)(Tt, { children: a }),
    ],
  });
}
function fV(e) {
  let {
      hoverProps: t,
      nDelayShowMs: n = cV,
      nWidthMultiplier: r = 1.15,
      target: i,
      visible: a,
      children: o,
    } = e,
    [s, c] = z.useState(a);
  if (
    (z.useEffect(() => {
      if (a) {
        if (n) {
          let e = window.setTimeout(() => c(!0), n);
          return () => window.clearTimeout(e);
        }
        c(!0);
      } else {
        if (Bn()) return;
        c(!1);
      }
    }, [a]),
    z.useEffect(() => {
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
        minHeight: mV() == `hiding` ? void 0 : 300,
        height: mV() == `hiding` ? i.clientWidth * 1.15 * (125 / 184) : void 0,
        ...t?.style,
      },
      target: i,
    };
  return (0, B.jsx)(pV, {
    hoverProps: u,
    children: (0, B.jsx)(Tt, { children: o }),
  });
}
function pV(e) {
  let { hoverProps: t, children: n } = e,
    r = z.useCallback((e) => e?.focus(), []);
  return (0, B.jsx)(dt, {
    ...t,
    children: (0, B.jsx)(ae, {
      timeout: 500,
      in: !0,
      appear: !0,
      classNames: { appearActive: N(oV, Pa), enterDone: N(sV, Fa) },
      children: (e) =>
        (0, B.jsx)(`div`, {
          ref: et(e, r),
          className: aV,
          tabIndex: -1,
          children: n,
        }),
    }),
  });
}
function mV() {
  return window.sessionStorage?.getItem(hV) || `default`;
}
var hV = `DEBUG_UseNewGameHover`;
function gV(e) {
  window.sessionStorage.setItem(hV, e);
}
window.SetHoverPresentation = gV;
var _V = `KDJh8Ln6DTA-`,
  vV = `cwU-YKIjBO4-`,
  yV = {
    bFitToWindow: !0,
    bOverlapHorizontal: !0,
    bMatchWidth: !1,
    bShiftToFitWindow: !0,
    bDisablePopTop: !0,
  };
function bV(e) {
  let { setRemoteClientID: t, rgSessions: n } = e,
    r = (0, z.useCallback)(
      (e) => {
        n?.length &&
          We(
            (0, B.jsx)(xV, { sessions: n, setRemoteDownloadClientId: t }),
            e,
            yV,
          );
      },
      [t, n],
    );
  return n?.length
    ? (0, B.jsx)(`button`, {
        onClick: r,
        className: _V,
        children: (0, B.jsx)(CV, {}),
      })
    : null;
}
function xV({ sessions: e, setRemoteDownloadClientId: t }) {
  return (0, B.jsx)(`ul`, {
    className: vV,
    children: e.map((e) =>
      (0, B.jsx)(
        fn,
        {
          onSelected: () => {
            t(e.client_instanceid);
          },
          children: I(
            `#GamesList_Client_Indicator`,
            SV(e.device_type) ?? ``,
            e.machine_name,
          ),
        },
        e.client_instanceid,
      ),
    ),
  });
}
function SV(e) {
  switch (e) {
    case 1:
      return I(`#Library_DeviceType_PC`);
    case 544:
      return I(`#Library_DeviceType_SteamDeck`);
    case 546:
      return I(`#Library_DeviceType_SteamMachine`);
    case en:
      return I(`#Library_DeviceType_SteamFrame`);
    default:
      return;
  }
}
function CV(e) {
  return (0, B.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 13 8`,
    fill: `none`,
    ...e,
    children: (0, B.jsx)(`path`, {
      fill: `currentColor`,
      d: `M12.6128 1.7121C12.7616 1.56087 12.8428 1.3684 12.8428 1.14155C12.8428 0.687862 12.491 0.323534 12.0446 0.323534C11.8214 0.323534 11.6184 0.419772 11.4628 0.577877L6.83601 5.38975L2.22271 0.577877C2.06712 0.419772 1.85743 0.323534 1.64097 0.323534C1.19452 0.323534 0.842773 0.687862 0.842773 1.14155C0.842773 1.3684 0.923946 1.56087 1.07276 1.71211L6.21369 7.06016C6.38956 7.25264 6.60602 7.342 6.84277 7.34888C7.07953 7.34888 7.28246 7.25264 7.4651 7.06016L12.6128 1.7121Z`,
    }),
  });
}
var wV = `O2hPihu9CRE-`,
  TV = `QhSrcq93V7k-`,
  EV = `_7MjE60RYT0Q-`,
  DV = `UlZXEOyFPCE-`,
  OV = `_8wO4Yx-lIIo-`,
  kV = `FA82eVIC918-`,
  AV = `_0sgpZmAY-zs-`,
  jV = `RLntJ4QtQLU-`;
function MV(e) {
  let { appid: t } = e,
    n = y(t),
    { data: r } = pe(n),
    [i, a, o] = Ln(!1),
    { mutateAsync: s } = Ea({ appid: t }),
    [c, l] = (0, z.useState)(!1),
    u = tr(t);
  return !r || u
    ? null
    : (0, B.jsxs)(B.Fragment, {
        children: [
          (0, B.jsxs)(pr, {
            onClick: async () => {
              try {
                (l(!0), await s(), Ht(), l(!1), a());
              } catch (e) {
                (l(!1),
                  console.error(
                    `Error AddToLibraryActionWithRemoteInstall`,
                    e,
                  ));
              }
            },
            children: [
              c && (0, B.jsx)(ee, { size: `small` }),
              I(`#Sale_AddToLibrary_NoPlus`),
            ],
          }),
          (0, B.jsx)(Tt, {
            children: (0, B.jsx)(vn, {
              active: i,
              children: (0, B.jsx)(ge, {
                strTitle: I(`#Sale_AddedToLibrary`),
                strDescription: kt(
                  `#Sale_AddToLibrary_DialogDesc`,
                  (0, B.jsx)(`span`, { className: EV, children: r.name || `` }),
                ),
                closeModal: o,
                bAlertDialog: !0,
                children: (0, B.jsx)(NV, { id: n }),
              }),
            }),
          }),
        ],
      });
}
function NV(e) {
  let { id: t } = e,
    n = se(),
    [r, i] = (0, z.useState)(0),
    [a, o] = (0, z.useState)(!1),
    { data: s } = Ae(t);
  if (!t || !(`appid` in t) || L.IN_CLIENT || !s) return null;
  let c = n.data?.sessions?.filter((e) => {
    switch (e.device_type) {
      default:
      case 1:
        {
          if (!e.os_type) return !1;
          let t = T(e.os_type);
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
    return (0, B.jsx)(`div`, {
      className: wV,
      children: a
        ? (0, B.jsx)(FV, { session: e })
        : (0, B.jsxs)(B.Fragment, {
            children: [
              (0, B.jsx)(PV, {
                rgAcceptableSession: c,
                session: e,
                setSessionIndex: i,
              }),
              (0, B.jsx)(`div`, {
                className: kV,
                children: (0, B.jsx)(IV, {
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
function PV(e) {
  let { rgAcceptableSession: t, session: n, setSessionIndex: r } = e;
  return (0, B.jsxs)(B.Fragment, {
    children: [
      (0, B.jsx)(`div`, { children: I(`#Sale_AddToLibrary_RemoteDownload`) }),
      (0, B.jsxs)(`div`, {
        className: AV,
        children: [
          (0, B.jsx)(`span`, { className: jV, children: n.machine_name }),
          (0, B.jsx)(bV, {
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
function FV(e) {
  let { session: t } = e;
  return (0, B.jsxs)(`div`, {
    className: DV,
    children: [
      I(`#Sale_AddToLibrary_DownloadStarted`),
      (0, B.jsx)(`br`, {}),
      (0, B.jsx)(`a`, {
        href: `${L.COMMUNITY_BASE_URL}my/games?tab=all&clientid=${t.client_instanceid}`,
        children: I(`#Sale_AddToLibrary_SeeDownloadProgress`),
      }),
    ],
  });
}
function IV(e) {
  let { appid: t, session: n, setRemoteDownloadRequested: r } = e,
    i = oe(t, n.client_instanceid);
  return (0, B.jsxs)(B.Fragment, {
    children: [
      (0, B.jsxs)(pr, {
        onClick: () => {
          (i.mutateAsync(), r(!0));
        },
        children: [(0, B.jsx)(Ft, {}), I(`#Button_StartDownload`)],
      }),
      (0, B.jsx)(`div`, {
        className: OV,
        children: (0, B.jsx)(`a`, {
          href: `https://help.steampowered.com/faqs/view/1025-BD94-12FC-3409`,
          className: TV,
          children: I(`#Button_Learn`),
        }),
      }),
    ],
  });
}
function LV(e) {
  let {
    rgTagIDs: t,
    bShowEvenIfNoTags: n,
    bHideTitle: r,
    bLargeText: i,
    bNoStoreLinks: a,
  } = e;
  return t?.length > 0 || n
    ? (0, B.jsxs)(`div`, {
        className: N(Xr, i ? oi : ``, `SaleTagBlockCtn`),
        children: [
          !r &&
            (0, B.jsx)(`div`, {
              className: N(`F3fTh-GlONs-`, `WidgetTagTitle`),
              children: P.Localize(`#GameHover_Tags`),
            }),
          t?.length > 0
            ? (0, B.jsx)(`div`, {
                className: N(si, `TagBox`),
                children: t.map((e) =>
                  (0, B.jsx)(zV, { tagid: e, bNoStoreLinks: a }, e),
                ),
              })
            : (0, B.jsx)(`div`, { children: P.Localize(`#Broadcast_None`) }),
        ],
      })
    : null;
}
function RV(e) {
  let { tagid: t, className: n } = e,
    r = Hn(t, F.LANGUAGE);
  if (!r) return null;
  let i = Gt(rn(F.LANGUAGE)),
    a = `${F.STORE_BASE_URL}tags/${i}/${r}`;
  return (0, B.jsx)(b, {
    url: a,
    className: N(ci, `WidgetTag`, n),
    children: r,
  });
}
function zV(e) {
  let { tagid: t, className: n, bNoStoreLinks: r } = e,
    i = Gt(rn(F.LANGUAGE)),
    a = Hn(t, F.LANGUAGE),
    o = `${F.STORE_BASE_URL}tags/${i}/${a}`;
  return a
    ? r
      ? (0, B.jsx)(`div`, { className: N(ci, `WidgetTag`, n), children: a })
      : (0, B.jsx)(b, { url: o, className: N(ci, `WidgetTag`, n), children: a })
    : null;
}
export {
  XR as $,
  Qr as $i,
  su as $n,
  Hr as $r,
  mE as $t,
  sB as A,
  tr as Aa,
  _a as Ai,
  Pg as An,
  so as Ar,
  YM as At,
  Oz as B,
  ti as Bi,
  Ym as Bn,
  Li as Br,
  MA as Bt,
  yB as C,
  _i as Ca,
  Jr as Ci,
  U_ as Cn,
  Xo as Cr,
  hN as Ct,
  uB as D,
  lr as Da,
  ma as Di,
  Bg as Dn,
  fo as Dr,
  QM as Dt,
  kB as E,
  gr as Ea,
  Mi as Ei,
  Vg as En,
  V as Er,
  $M as Et,
  Bz as F,
  fa as Fi,
  Hh as Fn,
  wa as Fr,
  dM as Ft,
  _z as G,
  Ir as Gi,
  Ld as Gn,
  Ni as Gr,
  cD as Gt,
  Sz as H,
  Xr as Hi,
  ih as Hn,
  Ji as Hr,
  $k as Ht,
  Lz as I,
  la as Ii,
  Ah as In,
  ba as Ir,
  sM as It,
  iz as J,
  jr as Ji,
  J as Jn,
  Cr as Jr,
  KD as Jt,
  gz as K,
  xi as Ki,
  Y as Kn,
  $r as Kr,
  gD as Kt,
  Dz as L,
  wi as Li,
  Mh as Ln,
  va as Lr,
  Xj as Lt,
  $z as M,
  Qn as Ma,
  Oi as Mi,
  ig as Mn,
  no as Mr,
  hM as Mt,
  qz as N,
  nr as Na,
  qi as Ni,
  eg as Nn,
  Ea as Nr,
  gM as Nt,
  lB as O,
  or as Oa,
  zi as Oi,
  X as On,
  uo as Or,
  XM as Ot,
  Wz as P,
  wr as Pi,
  Uh as Pn,
  Ta as Pr,
  aM as Pt,
  ZR as Q,
  zr as Qi,
  Du as Qn,
  da as Qr,
  yE as Qt,
  Az as R,
  pa as Ri,
  dh as Rn,
  hi as Rr,
  Sj as Rt,
  IB as S,
  ei as Sa,
  xr as Si,
  Dv as Sn,
  Go as Sr,
  MN as St,
  MB as T,
  hr as Ta,
  Gi as Ti,
  d_ as Tn,
  xo as Tr,
  nN as Tt,
  xz as U,
  aa as Ui,
  Zm as Un,
  Yi as Ur,
  uk as Ut,
  Cz as V,
  Sr as Vi,
  Qm as Vn,
  ii as Vr,
  jA as Vt,
  bz as W,
  Gr as Wi,
  zd as Wn,
  ki as Wr,
  CE as Wt,
  nz as X,
  Rr as Xi,
  Ou as Xn,
  $i as Xr,
  HE as Xt,
  tz as Y,
  bi as Yi,
  ad as Yn,
  ra as Yr,
  xE as Yt,
  ez as Z,
  Lr as Zi,
  Au as Zn,
  ia as Zr,
  ZD as Zt,
  bB as _,
  Or as _a,
  ea as _i,
  PT as _n,
  ps as _r,
  UI as _t,
  zB as a,
  br as aa,
  li as ai,
  lE as an,
  Tc as ar,
  zR as at,
  AB as b,
  Ai as ba,
  Ri as bi,
  Iw as bn,
  yo as br,
  ZP as bt,
  wB as c,
  Dr as ca,
  na as ci,
  LE as cn,
  fc as cr,
  kR as ct,
  DB as d,
  kr as da,
  Fi as di,
  LT as dn,
  dc as dr,
  oR as dt,
  mi as ea,
  ji as ei,
  mD as en,
  lu as er,
  YR as et,
  OB as f,
  sa as fa,
  ua as fi,
  IT as fn,
  W as fr,
  rR as ft,
  hB as g,
  ri as ga,
  ta as gi,
  ET as gn,
  ms as gr,
  gL as gt,
  xB as h,
  ai as ha,
  Xi as hi,
  FT as hn,
  _s as hr,
  OL as ht,
  BB as i,
  Zr as ia,
  Ki as ii,
  zE as in,
  $l as ir,
  NR as it,
  nB as j,
  ir as ja,
  Vi as ji,
  Ig as jn,
  ao as jr,
  wM as jt,
  aB as k,
  $n as ka,
  Tr as ki,
  Fg as kn,
  oo as kr,
  ZM as kt,
  CB as l,
  Nr as la,
  ca as li,
  GD as ln,
  pc as lr,
  PR as lt,
  SB as m,
  Er as ma,
  gi as mi,
  MT as mn,
  Xs as mr,
  kL as mt,
  LV as n,
  Kr as na,
  Wi as ni,
  pD as nn,
  K as nr,
  HR as nt,
  LB as o,
  Fr as oa,
  ui as oi,
  sE as on,
  Cc as or,
  BR as ot,
  EB as p,
  ni as pa,
  ga as pi,
  TT as pn,
  rc as pr,
  AL as pt,
  rz as q,
  pi as qi,
  q as qn,
  oa as qr,
  YD as qt,
  VB as r,
  qr as ra,
  ha as ri,
  dE as rn,
  tu as rr,
  VR as rt,
  TB as s,
  Vr as sa,
  di as si,
  IE as sn,
  vc as sr,
  jR as st,
  RV as t,
  vi as ta,
  Qi as ti,
  aD as tn,
  du as tr,
  UR as tt,
  _B as u,
  Ar as ua,
  Pi as ui,
  dD as un,
  uc as ur,
  gR as ut,
  NB as v,
  si as va,
  Yr as vi,
  vT as vn,
  _o as vr,
  MI as vt,
  vB as w,
  mr as wa,
  Zi as wi,
  T_ as wn,
  Yo as wr,
  oN as wt,
  gB as x,
  Hi as xa,
  Bi as xi,
  Ov as xn,
  vo as xr,
  jP as xt,
  jB as y,
  Br as ya,
  Ui as yi,
  pT as yn,
  bo as yr,
  xI as yt,
  Ez as z,
  fi as zi,
  mh as zn,
  Ii as zr,
  YA as zt,
};
