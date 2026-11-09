/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  B as t,
  Lt as n,
  Pt as r,
  V as i,
  dt as a,
  ft as o,
  lt as s,
  nt as c,
  ot as l,
  st as u,
  tt as d,
} from "./libraries.js";
import { t as f } from "./usedataloader.client.js";
import { R as p, V as m, n as h } from "./storelink.js";
import { u as g } from "./claninfo.js";
import { r as _, t as v } from "./storeurl.js";
import "./modals.js";
import { a as y, n as b, r as x } from "./ostype.js";
import { t as S } from "./microtrailerdisplay.js";
import { t as C } from "./ajaxhooks.js";
import { i as ee, t as w } from "./historyutils.js";
import { t as T } from "./throbber.js";
import { a as E } from "./stringutils.js";
import { r as D } from "./linkfilter.js";
import { n as te } from "./saletechredirectsignin.js";
import { i as ne } from "./partnereventshared.module.js";
import { n as re } from "./personautils.js";
import { n as ie, t as ae } from "./csstransitionwrapper.js";
import { n as oe, r as se } from "./remotedownloadhooks.js";
import {
  $n as ce,
  $t as le,
  $x as ue,
  Ab as de,
  An as fe,
  Ar as pe,
  Bs as me,
  Cl as he,
  Cr as ge,
  Cx as _e,
  Dc as ve,
  Dr as ye,
  Dt as be,
  Dv as xe,
  En as Se,
  Et as Ce,
  Ev as we,
  Fc as Te,
  Fs as Ee,
  Fu as De,
  Gb as O,
  Gu as Oe,
  Hb as k,
  Hr as ke,
  Hs as Ae,
  Ht as je,
  Hu as Me,
  Hv as Ne,
  Ii as Pe,
  Is as Fe,
  Iv as Ie,
  Jb as Le,
  Jc as A,
  Jl as Re,
  Jv as ze,
  Jy as Be,
  Li as Ve,
  Ll as He,
  Lo as Ue,
  Lr as We,
  Ls as Ge,
  Lv as Ke,
  Lx as qe,
  Mb as Je,
  Mo as Ye,
  Na as Xe,
  Nc as Ze,
  Nn as Qe,
  Nt as $e,
  Ob as et,
  Ov as tt,
  Pb as nt,
  Pc as rt,
  Ps as it,
  Pv as at,
  Ql as ot,
  Qt as st,
  Qx as j,
  Rr as ct,
  Rs as lt,
  Rv as ut,
  Rx as dt,
  Sc as M,
  Tc as ft,
  Tt as pt,
  Ui as mt,
  Ul as ht,
  Us as gt,
  Uv as _t,
  Uy as N,
  Vb as vt,
  Vs as yt,
  Vt as bt,
  Vu as xt,
  Vv as St,
  Ws as Ct,
  Xt as wt,
  Xx as Tt,
  Yi as Et,
  Yt as Dt,
  Yx as Ot,
  Zi as kt,
  Zr as At,
  Zt as jt,
  Zx as Mt,
  _c as Nt,
  _l as P,
  av as Pt,
  ax as F,
  bS as Ft,
  bd as It,
  bl as Lt,
  cc as Rt,
  cv as zt,
  dd as Bt,
  dn as Vt,
  dv as Ht,
  dx as Ut,
  eS as Wt,
  en as Gt,
  gc as Kt,
  gl as qt,
  go as Jt,
  hS as Yt,
  hd as Xt,
  hx as Zt,
  il as Qt,
  ir as $t,
  iy as I,
  kc as L,
  kn as en,
  kv as R,
  ln as tn,
  mS as nn,
  mc as rn,
  mx as an,
  nS as z,
  nl as on,
  nn as sn,
  od as cn,
  on as ln,
  pl as un,
  pn as dn,
  px as fn,
  qb as pn,
  rl as mn,
  rn as hn,
  rv as gn,
  rx as B,
  sd as _n,
  sr as vn,
  sx as yn,
  tS as bn,
  tn as xn,
  to as Sn,
  tr as Cn,
  uS as wn,
  uu as Tn,
  vl as En,
  vn as Dn,
  wc as On,
  wt as kn,
  wv as An,
  xb as V,
  xl as jn,
  xx as Mn,
  yr as Nn,
  yu as Pn,
  yv as Fn,
  zb as In,
  zi as Ln,
} from "./main.js";
var H = e(n(), 1),
  U = o();
async function Rn(e, t) {
  let n = cn(B.STORE_BASE_URL, t, F.country_code);
  return (await (await fetch(n)).json()).rgOwnedApps || [];
}
async function zn(e, t, n) {
  return (await Rn(e, t)).includes(n);
}
function Bn() {
  let e = I(),
    t = O.accountid;
  return u(Vn(e, t));
}
function Vn(e, t) {
  return {
    queryKey: Gn(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await Rn(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function Hn(e, t, n) {
  return {
    queryKey: [`AccountOwnsApp`, t, n],
    queryFn: async () => (t ? await zn(e, t, n) : !1),
    staleTime: 6e5,
  };
}
function Un(e) {
  let t = I(),
    n = O.accountid,
    { data: r } = u(Hn(t, n, e));
  return r === void 0 ? void 0 : r;
}
function Wn(e) {
  let t = a(),
    n = O.accountid;
  return H.useCallback(
    (r) => {
      t.setQueryData(Gn(n), (t) =>
        t ? new Set([...t.values(), ...r]) : e ? new Set(r) : void 0,
      );
    },
    [t, n, e],
  );
}
function Gn(e) {
  return [`AccountOwnedApps`, e ?? 0];
}
function Kn(e) {
  let { data: t } = R(e && `appid` in e ? void 0 : e),
    { data: n } = Bn(),
    r;
  return (
    e && `appid` in e ? (r = [e.appid]) : t && (r = t.included_appids),
    r === void 0 || n === void 0 || r.length == 0
      ? { bIsOwned: void 0, unAppID: void 0 }
      : { bIsOwned: !r.some((e) => !n.has(e)), unAppID: r[0] }
  );
}
async function qn(e) {
  let t = { get_appids: !0, l: k.LANGUAGE },
    n = new URLSearchParams(t).toString(),
    r = `${k.STORE_BASE_URL}curator/${e}/ajaxgetcreatorhomeinfo/?${n}`,
    i = await fetch(r, { method: `GET` });
  if (!i.ok) throw Error(`Server returned ${i.status}`);
  let a = await i.json();
  return a.success == 1 ? a : null;
}
function Jn(e) {
  return u(Yn(e));
}
function Yn(e) {
  return {
    queryKey: Xn(e),
    queryFn: async () => {
      let t = await qn(e);
      if (t) {
        let { success: e, err_msg: n, warning: r, warning_msg: i, ...a } = t;
        return a;
      }
      return null;
    },
    enabled: !!e,
  };
}
function Xn(e) {
  return [`creatorhomebyaccount`, e];
}
function Zn(e, t) {
  if (e.vanity) {
    switch (t) {
      case `publisher`:
        return `${k.STORE_BASE_URL}publisher/${e.vanity}/`;
      case `franchise`:
        return `${k.STORE_BASE_URL}franchise/${e.vanity}/`;
    }
    return `${k.STORE_BASE_URL}developer/${e.vanity}/`;
  }
  return `${k.STORE_BASE_URL}curator/${e.creator_clan_id}/`;
}
var Qn = `qkhMGgZoiEA-`,
  $n = `dR7N9Ozyb6k-`,
  er = `_8j-XyEfRwfE-`;
function tr(e) {
  let { children: t, ...n } = e;
  return (0, U.jsx)(mn, {
    className: Qn,
    type: `button`,
    ...n,
    children: (0, U.jsx)(`span`, { children: t }),
  });
}
function nr(e) {
  let { children: t, ...n } = e;
  return (0, U.jsx)(mn, {
    className: er,
    type: `button`,
    ...n,
    children: (0, U.jsx)(`span`, { children: t }),
  });
}
function rr(e) {
  let { children: t, ...n } = e;
  return (0, U.jsx)(on, {
    className: er,
    ...n,
    children: (0, U.jsx)(`span`, { children: t }),
  });
}
function ir(e) {
  let { children: t, ...n } = e;
  return (0, U.jsx)(mn, {
    className: $n,
    type: `button`,
    ...n,
    children: (0, U.jsx)(`span`, { children: t }),
  });
}
var W = e(r(), 1),
  ar = e(d()),
  or = `_8Wp5WbqAbJA-`,
  sr = `K2PjXmYWvSg-`,
  cr = `UYfcYZDtfbs-`,
  lr = `O-TsWDon65A-`,
  ur = `E8DrK8oV4Hs-`,
  dr = `XTfMA1ObAn4-`,
  fr = `-Rv33oXsbT0-`,
  pr = `MN6Xv-pm6i8-`,
  mr = `uvLRAREPa4E-`,
  hr = `bdPmPtfuqIY-`,
  gr = `JCVuyoKAC-k-`,
  _r = `kjiBcsaqA8o-`,
  vr = `UFAsjplGzxc-`,
  yr = `vL-XYGsLedM-`,
  br = `aCttqIa8NC4-`,
  xr = `-rXzhlz0w3Q-`,
  Sr = `R9ivMzB3Gic-`,
  Cr = `W9-byrNtR9Q-`,
  wr = `llT8dhJgnqw-`,
  Tr = `kxs4VtommH4-`,
  Er = `ncKEDk26SHQ-`,
  Dr = `VGzHGCF3I5o-`,
  Or = `fNtXEMzHz58-`,
  kr = `jrHvWWIOlw4-`,
  Ar = `FOKKfGVYUDk-`,
  jr = `OClIuwfiMKQ-`,
  Mr = `ZLlm68-AqhM-`,
  Nr = `raYV6Y-MQ7I-`,
  Pr = `IWFCYfhR05U-`,
  Fr = `KtOQKgU1W5w-`,
  Ir = `jXpKqo3-cWA-`,
  Lr = `_-7gyAR9oUx4-`,
  Rr = `GcBGxmj4uvE-`,
  zr = `QwN0eH2k0O0-`,
  Br = `sgCiKk3DUeg-`,
  Vr = `N86EuolnWHc-`,
  Hr = `A8oyzoRvWQ8-`,
  Ur = `V7rq-SSC9xQ-`,
  Wr = `pNXxwljIaD8-`,
  Gr = `lsjYiHotCwA-`,
  Kr = `iVV26V5rbpU-`,
  qr = `XosTQwEOBO0-`,
  Jr = `ITE-CUK3U10-`,
  Yr = `wPxkst62n-Q-`,
  Xr = `gxtdwNjsesg-`,
  Zr = `y1XjkIvVj6A-`,
  Qr = `BZ9dZKOmXqE-`,
  $r = `zMMJGDB8n-o-`,
  ei = `XPrPiD27WdE-`,
  ti = `R0sGSaFdUWo-`,
  ni = `PON8X0ze5G8-`,
  ri = `rfhpla0PGMA-`,
  G = `OySWwOLLxFc-`,
  ii = `tkR3-aHpyI4-`,
  ai = `yyrI0Nka69I-`,
  oi = `D3fuhd6kG6I-`,
  si = `Xk-QP-zS-18-`,
  ci = `I9cM1cZTYqc-`,
  li = `LkW8eRLttsM-`,
  ui = `_4KL8m0wDedE-`,
  di = `E3GBmOK5lMc-`,
  fi = `lOHW8g-YyoY-`,
  pi = `RQzfcqJK1Eg-`,
  mi = `_0MLgqm-W-nA-`,
  hi = `v-RxDE-Li8U-`,
  gi = `iwrzh-mg8hE-`,
  _i = `oZCOhIQDgxo-`,
  vi = `-G-r65tUoo0-`,
  yi = `qVhohSfcErA-`,
  bi = `GqNlebj1uds-`,
  xi = `oqhyMK1Krt0-`,
  Si = `GRw4r5TpD5s-`,
  Ci = `mspnwaz0EAg-`,
  wi = `_06Z7Ej-J6OU-`,
  Ti = `lO9B4Ti6gBk-`,
  Ei = `lkVpo86MFuI-`,
  Di = `chTH6btujQ0-`,
  Oi = `_96v5CHkkJJY-`,
  ki = `GxypNLhVZWE-`,
  Ai = `_-4JZsb8K2FY-`,
  ji = `BD3vXqZ-6yI-`,
  Mi = `l9by-6sJDpM-`,
  Ni = `LCYi5cxHqgI-`,
  Pi = `ZuMhm9DQqbw-`,
  Fi = `eASrfjoxe3o-`,
  Ii = `ppO76q5Y-Zg-`,
  Li = `WWolAsqP274-`,
  Ri = `mP8HbLoIUo0-`,
  zi = `BuCaaYRb4Cg-`,
  Bi = `bYNmqkeEJGc-`,
  Vi = `_4xLBehMPMIU-`,
  Hi = `XiCMCQH8z2U-`,
  Ui = `_3wT3W-azVyE-`,
  Wi = `EpyWQfQU-D4-`,
  Gi = `FDvyBhD2AA0-`,
  Ki = `RIck6AI1vX8-`,
  qi = `Sndyr6iqn8g-`,
  Ji = `qUsoY9s6daM-`,
  Yi = `tUIs-i3NWoU-`,
  Xi = `_8o-dkC5O1co-`,
  Zi = `v7ul8g8zqHs-`,
  Qi = `-cW4bgqyLAo-`,
  $i = `aN31caRmRcQ-`,
  ea = `tobj1evrU4w-`,
  ta = `NqZ9uMSo13A-`,
  na = `RAahmG4F6sc-`;
function ra(e) {
  return e?.is_coming_soon
    ? ia(
        e.coming_soon_display,
        e.steam_release_date,
        e.custom_release_date_message,
      )
    : e?.steam_release_date
      ? mt(e.steam_release_date)
      : ``;
}
function ia(e, t, n) {
  switch (e) {
    case `date_full`:
      return mt(t);
    case `date_month`:
      return Pe(new Date(t * 1e3));
    case `date_quarter`:
      return Ve(new Date(t * 1e3));
    case `date_year`:
      return Ln(new Date(t * 1e3));
    case `text_comingsoon`:
      return n || V.Localize(`#Store_ComingSoon_ComingSoon`);
    case `text_tba`:
      return n || V.Localize(`#Store_ComingSoon_TBA`);
    default:
      return ``;
  }
}
function aa(e) {
  if (!e) return ``;
  if (e && e.is_coming_soon) {
    if (e.coming_soon_display) return ot(e);
    if (e.custom_release_date_message) return e.custom_release_date_message;
    let t = e.steam_release_date;
    return t
      ? e.is_abridged_release_date
        ? Pe(new Date(t * 1e3))
        : mt(t)
      : ``;
  }
  let t = e.steam_release_date;
  return ((t ||= e.original_release_date), t ? mt(t) : ``);
}
function oa(e, t = !1) {
  if (e.is_coming_soon && !t) return 0;
  let n = e.steam_release_date;
  return ((n ||= e.original_release_date), n);
}
var sa = 7;
function ca(e, t) {
  if (!e) return !1;
  let n = oa(e);
  return n ? !e.is_coming_soon && n + sa * Et.PerDay > t : !1;
}
function la(e, t) {
  return !!(e && e.is_coming_soon && t && t.packageid);
}
function ua(e, t) {
  return !!(e && t && t.packageid);
}
function da(e) {
  let t = I(),
    n = Wn();
  return l({
    mutationFn: () => fa(t, e),
    onSuccess(e) {
      let [
        t,
        { packageids_added: r, appids_added: i, purchase_result_detail: a },
      ] = e;
      i && n(i);
    },
  });
}
async function fa(e, t) {
  let n = an.Init(tn);
  n.Body().set_item_id(fn.fromObject(t));
  let r = await Vt.AddFreeLicense(e, n);
  return [r.GetEResult(), r.Body().toObject()];
}
var pa = `PFP2RDjCi0w-`,
  ma = `Cbfoq6WaXq4-`,
  ha = `_4lcICEhYuQw-`,
  ga = `unoV6P6DXbM-`,
  _a = `p8d03I0RAAs-`,
  va = `brHZRAeRCnw-`,
  ya = `hATzo-Hjaaw-`,
  ba = `_7vEy4qHpqHo-`,
  xa = `KoUJweWUwjY-`,
  Sa = `XAGO1LWGig0-`,
  Ca = `uN9-XHR7odQ-`,
  wa = `CnbkzZzYDxs-`,
  Ta = `_8UjVVV-S-j8-`,
  Ea = `k0yt-Gxhbs4-`,
  Da = `io6uTUtzW-A-`,
  Oa = `_58-zzK2uRws-`,
  ka = `mGygcOFcFcQ-`,
  Aa = `mW8gl4NPYGg-`,
  ja = `X9907eDQcow-`,
  Ma = `GwjmtMACpAo-`,
  Na = `S8JsHzHuIMA-`,
  Pa = `_4nNWbL6J2cI-`,
  Fa = `Djw7Ta0NL0Q-`,
  Ia = `u-mW6oZelJ4-`,
  La = `j0BUhYRjGwM-`,
  Ra = `I-L7P5K0HUM-`,
  za = `VYzpavMEA5M-`,
  Ba = `iXn31HpcmTo-`;
function Va(e) {
  let { id: t, bTruncateTotalReviews: n, bShowTooltip: r } = e,
    { data: i } = Ke(t),
    { data: a } = R(t),
    o = p(t),
    { data: s } = R(o),
    { data: c } = Bt();
  if (!i || !a || (a.type == 1 && !_(s))) return null;
  let l = i.summary_unfiltered || i.summary_filtered,
    u = `#ReviewScore_UserReviewScoreAria`,
    d = !1,
    f = V.Localize(`#Language_` + k.LANGUAGE);
  if (
    (Ha(c?.preferences?.review_score_preference) &&
      (i.summary_language_specific
        ? ((d = !0),
          (u = `#ReviewScore_UserReviewScoreAria_LanguageSpecific`),
          (l = i.summary_language_specific))
        : (l = i.summary_filtered)),
    !l || !l.review_score)
  )
    return null;
  let m = Fa;
  m =
    l.review_score > 0 && l.review_score < 5
      ? Ia
      : l.review_score == 5
        ? La
        : Ra;
  let g = `${k.STORE_BASE_URL}app/${a.appid}/#app_reviews_hash`,
    v = (0, U.jsxs)(`div`, {
      className: M(Pa, m),
      children: [
        (0, U.jsx)(`div`, {
          className: za,
          "aria-label": V.Localize(u, l.review_score_label, f),
          children: l.review_score_label,
        }),
        (0, U.jsxs)(`div`, {
          className: Na,
          "aria-label": V.Localize(
            `#GameHover_UserReviewCount`,
            l.review_count.toLocaleString(kt()),
          ),
          children: [
            `(`,
            n
              ? `(` + l.review_count.toLocaleString(kt()) + `)`
              : d
                ? V.Localize(
                    `#GameHover_UserReviewCount_Lang`,
                    l.review_count.toLocaleString(kt()),
                    f,
                  )
                : V.Localize(
                    `#GameHover_UserReviewCount`,
                    l.review_count.toLocaleString(kt()),
                  ),
            `)`,
          ],
        }),
        !n &&
          (0, U.jsxs)(`div`, {
            className: `ZBPprMOYoMs-`,
            children: [` `, V.Localize(`#GameHover_UserReviewsHeader`)],
          }),
      ],
    }),
    y = `#ReviewScore_PercentPositive`;
  if (a.item_type === 2) y = `#ReviewScore_PercentPositive_bundle`;
  else if (a.item_type === 0)
    switch (a.type) {
      case 6:
        y = `#ReviewScore_PercentPositive_software`;
        break;
      case 7:
        y = `#ReviewScore_PercentPositive_video`;
        break;
      case 10:
        y = `#ReviewScore_PercentPositive_hardware`;
        break;
      case 8:
        y = `#ReviewScore_PercentPositive_series`;
    }
  return (0, U.jsx)(h, {
    url: g,
    className: M(Ma, `ReviewScore`),
    children:
      r && l.percent_positive != null && l.review_count != null && y
        ? (0, U.jsx)(ct, {
            bTopmost: !0,
            toolTipContent: V.Localize(y, l.percent_positive, l.review_count),
            children: v,
          })
        : v,
  });
}
function Ha(e) {
  return e === void 0 || e === 0 || e === 2;
}
async function Ua(e, t) {
  let n = cn(B.STORE_BASE_URL, t, F.country_code);
  return (await (await fetch(n)).json()).rgWishlist || [];
}
function Wa() {
  let e = I(),
    t = O.accountid;
  return u(Ga(e, t));
}
function Ga(e, t) {
  return {
    queryKey: Ja(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await Ua(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function Ka(e) {
  let { data: t } = Wa();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function qa() {
  let e = a(),
    t = O.accountid;
  return (n, r) => {
    e.setQueryData(Ja(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function Ja(e) {
  return [`AccountWishlistApps`, e ?? 0];
}
function Ya(e, t, n) {
  let r = qa(),
    i = F.accountid;
  return l({
    mutationKey: [`useUpdateWishlist`, e, i, t],
    mutationFn: async () => {
      if (e == null) return;
      let r =
          B.STORE_BASE_URL +
          `api/` +
          (t ? `addtowishlist` : `removefromwishlist`),
        i = new FormData();
      (i.append(`appid`, `` + e),
        i.append(`sessionid`, pn()),
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
      _n();
    },
  });
}
function Xa(e) {
  let {
      id: t,
      snr: n,
      classOverride: r,
      styleOverride: i,
      bShowInGamepadUI: a,
    } = e,
    { data: o } = R(t),
    { elDialogElement: s, fnShowLogonDialog: c } = te(),
    [l, u] = (0, H.useState)(() => {
      if (o && (o.type == 1 || o.type == 12) && o.related_items?.parent_appid)
        return o.related_items?.parent_appid;
      if (t && `appid` in t) return t.appid;
    }),
    d = m(l),
    f = Ka(l),
    { bIsOwned: p } = Kn(d),
    [h, g] = (0, H.useState)(!1),
    _ = C(`GameHoverWishlistButton`),
    { mutateAsync: v } = Ya(l, !f, n);
  (0, H.useEffect)(() => {
    t &&
      `appid` in t &&
      (o?.type == 1 || o?.type == 12) &&
      u(o.related_items?.parent_appid || t.appid);
  }, [o, t]);
  let y = (0, H.useCallback)(
    async (e) => {
      F.logged_in
        ? (e.preventDefault(),
          e.stopPropagation(),
          g(!0),
          await v(),
          _.token.reason || g(!1))
        : c();
    },
    [_.token.reason, c, v],
  );
  return p && o?.type != 10
    ? null
    : (0, U.jsxs)(L, {
        className: M(xa, a && `B7tWNVp-vns-`, r),
        onActivate: y,
        style: i,
        children: [
          f ? (0, U.jsx)(Kt, {}) : (0, U.jsx)(Nt, {}),
          (0, U.jsx)(`div`, {
            className: M(Sa, h && `u8yceEMO9LM-`, `WishlistButtonText`),
            children: V.Localize(
              f ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
            ),
          }),
          s,
        ],
      });
}
var K = class e {
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
        this.m_mapAppCallbackList.set(e, new qe()),
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
      let n = { nAppID: e, l: B.LANGUAGE, cc: B.COUNTRY },
        r = B.STORE_BASE_URL + `saleaction/ajaxgetdeckappcompatibilityreport`,
        i = await ar.default.get(r, { params: n, withCredentials: !0 });
      if (i?.status == 200 && i.data?.success == 1 && i.data?.results)
        return (this.AddCompatabilityResult(i.data.results), !0);
      t = De(i);
    } catch (e) {
      t = De(e);
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
      let t = Le(`hardwarecompatibility`, `application_config`);
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
Je([dt], K.prototype, `LoadAppCompabitilityResult`, null);
function Za(e) {
  let [t, n] = H.useState(K.Get().GetCompatabilityResultForApp(e));
  return (
    Lt(K.Get().GetCallbackForAppList(e), n),
    H.useEffect(() => {
      K.Get().BHasCompatabilityResultForApp(e) ||
        K.Get()
          .LoadAppCompabitilityResult(e)
          .then(() => n(K.Get().GetCompatabilityResultForApp(e)));
    }, [e]),
    t
  );
}
var q = (function (e) {
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
function Qa(e) {
  switch (e) {
    case P.OK:
      return 0;
    case P.CANCEL:
      return 1;
    case P.SECONDARY:
      return 2;
    case P.OPTIONS:
      return 3;
    case P.DIR_LEFT:
      return 4;
    case P.DIR_RIGHT:
      return 5;
    case P.DIR_UP:
      return 6;
    case P.DIR_DOWN:
      return 7;
    case P.STEAM_GUIDE:
      return 8;
    case P.STEAM_QUICK_MENU:
      return 9;
    case P.SELECT:
      return 10;
    case P.START:
      return 11;
    case P.BUMPER_LEFT:
      return 12;
    case P.BUMPER_RIGHT:
      return 13;
    case P.TRIGGER_LEFT:
      return 14;
    case P.TRIGGER_RIGHT:
      return 15;
    case P.REAR_LEFT_UPPER:
      return 24;
    case P.REAR_LEFT_LOWER:
      return 25;
    case P.REAR_RIGHT_UPPER:
      return 26;
    case P.REAR_RIGHT_LOWER:
      return 27;
    default:
      return 0;
  }
}
var $a = class e {
  m_boundActions = new Map();
  m_defaultActions = new Map();
  m_globalActionsSubscriptions = [];
  m_actionDescriptionChangedCallbackRegistrations = [];
  static Log = new En(`ActionDescription`).Debug;
  m_nodeForCurrentDescriptions;
  InitContext(e) {
    let t = new de();
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
    } else this.SetActionDescriptionsFromMap({ [P.OK]: null });
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
    let e = Object.values(q).filter((e) => typeof e == `number`),
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
        i = Qa(r);
      t[i] = e[r];
    }
    this.SetActionsFromMap(t);
  }
  SetAction(t, n) {
    if ((e.Log(`SetActionDescription`, t, n), n === void 0)) {
      if (!this.m_boundActions.has(t)) return !1;
      this.m_boundActions.delete(t);
    } else {
      if (qt(this.m_boundActions.get(t), n)) return !1;
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
(Je([dt], $a.prototype, `OnFocusNavigationChanged`, null),
  Je([dt], $a.prototype, `OnActiveNavTreeChanged`, null),
  Je([dt], $a.prototype, `SetActionDescriptionsFromMap`, null));
var eo = `-h3mdabpWCk-`,
  to = `z7OUnz8a2LE-`,
  no = `-JC2DTwjTLY-`,
  ro = `gBGbg1Aq4kE-`,
  io = `S0TPsOpik3c-`,
  ao = `_6t-T9facds8-`,
  J = `_9ltdnbqRBVs-`,
  oo = `KMiaP3xxJic-`,
  so = `-f6--J8iYK8-`,
  co = `tlFgqgPT5b8-`,
  lo = `LR3Stix-A4Y-`,
  uo = `zxsM3zpa9JU-`,
  fo = `c3ZsONtZeOk-`,
  po = `Ee3wL0zu-5c-`,
  mo = `OCfnyhzTpeE-`,
  Y = `_1ArCdbgfzNY-`,
  ho = `IBiSpw0atyM-`,
  go = `mDOopKELMBg-`,
  _o = `C8-HMz-fVag-`,
  vo = `lDDPCoGwJAU-`,
  yo = `QvYBOAdgkPk-`,
  bo = `dNQ1ofH4Cbs-`,
  xo = `rmDLW23h1zQ-`,
  So = `ahykWXj-Rak-`,
  Co = `TxQs7xIpj2A-`,
  wo = `xWg9uSQknuo-`,
  To = `_2csr6Pw04gI-`,
  Eo = `CT05Js5REus-`,
  Do = `CAlqxCfPEko-`,
  Oo = `c1DR5MyoXPo-`,
  ko = `KnF9XvfALGs-`,
  Ao = `voFKnm6BHlI-`,
  jo = `XRBn-My-JYo-`,
  Mo = `MnMGQkxU8KU-`,
  No = `BPpr5dZdGc4-`,
  X = `QeQ6K92V-ik-`,
  Z = `jlNNNIYiAYQ-`,
  Po = `dXUGCsJI9Qw-`,
  Fo = `N88ag1lENrA-`,
  Io = `-m9XoDI2d0Q-`,
  Lo = `IulAmRs78UQ-`,
  Ro = `X86r8MkR480-`,
  zo = (function (e) {
    return (
      (e[(e.Knockout = 0)] = `Knockout`),
      (e[(e.Light = 1)] = `Light`),
      (e[(e.Dark = 2)] = `Dark`),
      e
    );
  })({}),
  Bo = (function (e) {
    return (
      (e[(e.Small = 0)] = `Small`),
      (e[(e.Medium = 1)] = `Medium`),
      (e[(e.Large = 2)] = `Large`),
      e
    );
  })({});
function Vo(e) {
  switch (e) {
    case 0:
      return Io;
    case 1:
      return Lo;
    case 2:
      return Ro;
    default:
      return Lo;
  }
}
function Ho(e) {
  switch (e) {
    case 0:
      return Fo;
    case 1:
      return Po;
    case 2:
      return No;
    default:
      return Po;
  }
}
function Uo(e) {
  let t = M(
      e.size == null ? Vo(1) : Vo(e.size),
      e.type == null ? Ho(1) : Ho(e.type),
      e.additionalClassName,
    ),
    n = e.type == 0;
  switch (e.button) {
    case q.A:
      return (0, U.jsx)(Wo, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_A`),
      });
    case q.B:
      return (0, U.jsx)(Go, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_B`),
      });
    case q.X:
      return (0, U.jsx)(Ko, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_X`),
      });
    case q.Y:
      return (0, U.jsx)(qo, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_Y`),
      });
    case q.Left:
      return (0, U.jsx)(Xo, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_DpadLeft`),
      });
    case q.Right:
      return (0, U.jsx)(Zo, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_DpadRight`),
      });
    case q.Up:
      return (0, U.jsx)(Jo, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_DpadUp`),
      });
    case q.Down:
      return (0, U.jsx)(Yo, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_DpadDown`),
      });
    case q.HomeMenu:
      return (0, U.jsx)(Qo, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_Steam`),
      });
    case q.QuickMenu:
      return (0, U.jsx)($o, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_QAM`),
      });
    case q.Select:
      return (0, U.jsx)(es, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_View`),
      });
    case q.Start:
      return (0, U.jsx)(ts, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_Menu`),
      });
    case q.LeftBumper:
      return (0, U.jsx)(ns, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_L1`),
      });
    case q.RightBumper:
      return (0, U.jsx)(rs, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_R1`),
      });
    case q.LeftTrigger:
      return (0, U.jsx)(is, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_L2`),
      });
    case q.RightTrigger:
      return (0, U.jsx)(as, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_R2`),
      });
    case q.LeftStick:
      return (0, U.jsx)(ls, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_LS`),
      });
    case q.RightStick:
      return (0, U.jsx)(cs, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_RS`),
      });
    case q.LeftStickClick:
      return (0, U.jsx)(os, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_L3`),
      });
    case q.RightStickClick:
      return (0, U.jsx)(ss, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_R3`),
      });
    case q.LeftTrackpad:
      return (0, U.jsx)(ms, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_LPad`),
      });
    case q.RightTrackpad:
      return (0, U.jsx)(gs, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_RPad`),
      });
    case q.LeftTrackpadClick:
      return (0, U.jsx)(hs, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_LPad_Click`),
      });
    case q.RightTrackpadClick:
      return (0, U.jsx)(_s, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_RPad_Click`),
      });
    case q.RearLeftUpper:
      return (0, U.jsx)(us, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_L4`),
      });
    case q.RearRightUpper:
      return (0, U.jsx)(fs, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_R4`),
      });
    case q.RearLeftLower:
      return (0, U.jsx)(ds, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_L5`),
      });
    case q.RearRightLower:
      return (0, U.jsx)(ps, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_R5`),
      });
    default:
      return (0, U.jsx)(vs, {
        bIsKnockout: n,
        className: t,
        "aria-label": N(`#ControllerButton_Default`),
      });
  }
}
function Wo({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM21.2697 24H24.1317L19.2717 11.4H16.6077L11.8917 24H14.6457L15.4737 21.552H20.4057L21.2697 24ZM16.1937 19.446L17.9217 14.406L19.6857 19.446H16.1937Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`circle`, {
            className: X,
            cx: `18`,
            cy: `18`,
            r: `18`,
            fill: `currentColor`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M24.1317 24H21.2697L20.4057 21.552H15.4737L14.6457 24H11.8917L16.6077 11.4H19.2717L24.1317 24ZM17.9217 14.406L16.1937 19.446H19.6857L17.9217 14.406Z`,
          }),
        ],
      });
}
function Go({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM23.173 20.382C23.173 18.81 22.369 17.778 20.761 17.286C21.349 16.974 21.775 16.584 22.039 16.116C22.303 15.648 22.435 15.132 22.435 14.568C22.435 13.56 22.081 12.78 21.373 12.228C20.665 11.676 19.573 11.4 18.097 11.4H13.435V24H18.601C19.993 24 21.103 23.682 21.931 23.046C22.759 22.41 23.173 21.522 23.173 20.382ZM16.117 16.674V13.596H17.881C19.165 13.596 19.807 14.082 19.807 15.054C19.807 15.57 19.645 15.972 19.321 16.26C18.997 16.536 18.535 16.674 17.935 16.674H16.117ZM19.843 21.372C19.507 21.672 19.003 21.822 18.331 21.822H16.117V18.582H18.403C19.039 18.582 19.525 18.72 19.861 18.996C20.197 19.26 20.365 19.656 20.365 20.184C20.365 20.676 20.191 21.072 19.843 21.372Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`circle`, {
            className: X,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M20.761 17.286C22.369 17.778 23.173 18.81 23.173 20.382C23.173 21.522 22.759 22.41 21.931 23.046C21.103 23.682 19.993 24 18.601 24H13.435V11.4H18.097C19.573 11.4 20.665 11.676 21.373 12.228C22.081 12.78 22.435 13.56 22.435 14.568C22.435 15.132 22.303 15.648 22.039 16.116C21.775 16.584 21.349 16.974 20.761 17.286ZM16.117 13.596V16.674H17.935C18.535 16.674 18.997 16.536 19.321 16.26C19.645 15.972 19.807 15.57 19.807 15.054C19.807 14.082 19.165 13.596 17.881 13.596H16.117ZM18.331 21.822C19.003 21.822 19.507 21.672 19.843 21.372C20.191 21.072 20.365 20.676 20.365 20.184C20.365 19.656 20.197 19.26 19.861 18.996C19.525 18.72 19.039 18.582 18.403 18.582H16.117V21.822H18.331Z`,
          }),
        ],
      });
}
function Ko({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM23.7101 11.4H20.3621L17.8601 15.45L15.3581 11.4H12.1001L16.4021 17.484L11.9201 24H15.0881L17.9141 19.41L20.8661 24H24.1061L19.2821 17.394L23.7101 11.4Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`circle`, {
            className: X,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M20.3621 11.4H23.7101L19.2821 17.394L24.1061 24H20.8661L17.9141 19.41L15.0881 24H11.9201L16.4021 17.484L12.1001 11.4H15.3581L17.8601 15.45L20.3621 11.4Z`,
          }),
        ],
      });
}
function qo({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM16.69 24H19.318V18.996L23.71 11.4H20.848L18.094 16.44L15.358 11.4H12.298L16.69 18.978V24Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`circle`, {
            className: X,
            cx: `18`,
            cy: `18`,
            r: `18`,
            fill: `currentColor`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M19.318 24H16.69V18.978L12.298 11.4H15.358L18.094 16.44L20.848 11.4H23.71L19.318 18.996V24Z`,
          }),
        ],
      });
}
function Jo({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM25 20.1998L19.5555 14.7554V27.1998H16.4444V14.7554L11 20.1998L8.66663 17.8665L18 8.66661L27.3333 17.8665L25 20.1998Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`circle`, {
            className: X,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M19.5555 14.7554L25 20.1998L27.3333 17.8665L18 8.66661L8.66663 17.8665L11 20.1998L16.4444 14.7554V27.1998H19.5555V14.7554Z`,
          }),
        ],
      });
}
function Yo({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM10.9999 15.6666L16.4444 21.1111L16.4444 8.66663H19.5555L19.5555 21.1111L24.9999 15.6666L27.3333 18L17.9999 27.1998L8.66659 18L10.9999 15.6666Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`circle`, {
            className: X,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M16.4444 21.1111L10.9999 15.6666L8.66659 18L17.9999 27.1998L27.3333 18L24.9999 15.6666L19.5555 21.1111L19.5555 8.66663L16.4444 8.66663L16.4444 21.1111Z`,
          }),
        ],
      });
}
function Xo({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.2664 10.9332L14.8219 16.3777H27.2664V19.4888H14.8219L20.2664 24.9332L17.933 27.2665L8.73314 17.9332L17.933 8.59988L20.2664 10.9332Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`circle`, {
            className: X,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M14.8219 16.3777L20.2664 10.9333L17.933 8.59994L8.73314 17.9332L17.933 27.2666L20.2664 24.9333L14.8219 19.4888L27.2664 19.4888L27.2664 16.3777L14.8219 16.3777Z`,
          }),
        ],
      });
}
function Zo({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM15.7332 24.9332L21.1776 19.4888H8.73315V16.3777H21.1776L15.7332 10.9332L18.0665 8.59991L27.2664 17.9333L18.0665 27.2666L15.7332 24.9332Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`circle`, {
            className: X,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M21.1776 19.4887L15.7332 24.9332L18.0665 27.2665L27.2664 17.9332L18.0665 8.59985L15.7332 10.9332L21.1776 16.3776L8.73315 16.3776L8.73315 19.4887L21.1776 19.4887Z`,
          }),
        ],
      });
}
function Qo({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 100 36`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          d: `M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36H82C91.9411 36 100 27.9411 100 18C100 8.05888 91.9411 0 82 0H18ZM21.8011 11.5C22.6531 11.5 23.4391 11.62 24.1591 11.86C24.8791 12.1 25.4851 12.394 25.9771 12.742L24.8611 14.722C24.4171 14.41 23.9191 14.158 23.3671 13.966C22.8271 13.774 22.3111 13.678 21.8191 13.678C21.2191 13.678 20.7511 13.804 20.4151 14.056C20.0791 14.296 19.9111 14.632 19.9111 15.064C19.9111 15.496 20.1091 15.838 20.5051 16.09C20.9011 16.33 21.5071 16.594 22.3231 16.882C23.1631 17.182 23.8351 17.458 24.3391 17.71C24.8431 17.962 25.2811 18.334 25.6531 18.826C26.0371 19.306 26.2291 19.924 26.2291 20.68C26.2291 21.484 26.0191 22.18 25.5991 22.768C25.1911 23.356 24.6151 23.812 23.8711 24.136C23.1271 24.448 22.2751 24.604 21.3151 24.604C20.5351 24.604 19.7371 24.502 18.9211 24.298C18.1171 24.082 17.4091 23.794 16.7971 23.434L17.6251 21.238C18.2011 21.55 18.8071 21.802 19.4431 21.994C20.0911 22.174 20.7271 22.264 21.3511 22.264C22.0351 22.264 22.5451 22.132 22.8811 21.868C23.2291 21.604 23.4031 21.256 23.4031 20.824C23.4031 20.392 23.2171 20.056 22.8451 19.816C22.4731 19.576 21.9031 19.33 21.1351 19.078C20.2711 18.802 19.5751 18.538 19.0471 18.286C18.5191 18.022 18.0631 17.644 17.6791 17.152C17.3071 16.648 17.1211 15.994 17.1211 15.19C17.1211 14.446 17.3131 13.798 17.6971 13.246C18.0931 12.682 18.6451 12.25 19.3531 11.95C20.0611 11.65 20.8771 11.5 21.8011 11.5ZM35.2486 24.388H32.6026V14.056H28.7866V11.788H39.0646V14.056H35.2486V24.388ZM50.8108 11.788H42.3148V24.388H50.8108V22.102H44.9608V19.15H50.0008V16.882H44.9608V14.038H50.8108V11.788ZM65.8582 24.388H62.9962L62.1322 21.94H57.2002L56.3722 24.388H53.6182L58.3342 11.788H60.9982L65.8582 24.388ZM59.6482 14.794L57.9202 19.834H61.4122L59.6482 14.794ZM79.7729 11.788L75.8489 20.734L71.6009 11.788H69.0629V24.388H71.4749V16.468L74.9309 24.028H76.5329L79.9169 16.378V24.388H82.4549V11.788H79.7729Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 100 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M0 18C0 8.05888 8.05888 0 18 0H82C91.9411 0 100 8.05888 100 18C100 27.9411 91.9411 36 82 36H18C8.05888 36 0 27.9411 0 18Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M21.8011 11.5C22.6531 11.5 23.4391 11.62 24.1591 11.86C24.8791 12.1 25.4851 12.394 25.9771 12.742L24.8611 14.722C24.4171 14.41 23.9191 14.158 23.3671 13.966C22.8271 13.774 22.3111 13.678 21.8191 13.678C21.2191 13.678 20.7511 13.804 20.4151 14.056C20.0791 14.296 19.9111 14.632 19.9111 15.064C19.9111 15.496 20.1091 15.838 20.5051 16.09C20.9011 16.33 21.5071 16.594 22.3231 16.882C23.1631 17.182 23.8351 17.458 24.3391 17.71C24.8431 17.962 25.2811 18.334 25.6531 18.826C26.0371 19.306 26.2291 19.924 26.2291 20.68C26.2291 21.484 26.0191 22.18 25.5991 22.768C25.1911 23.356 24.6151 23.812 23.8711 24.136C23.1271 24.448 22.2751 24.604 21.3151 24.604C20.5351 24.604 19.7371 24.502 18.9211 24.298C18.1171 24.082 17.4091 23.794 16.7971 23.434L17.6251 21.238C18.2011 21.55 18.8071 21.802 19.4431 21.994C20.0911 22.174 20.7271 22.264 21.3511 22.264C22.0351 22.264 22.5451 22.132 22.8811 21.868C23.2291 21.604 23.4031 21.256 23.4031 20.824C23.4031 20.392 23.2171 20.056 22.8451 19.816C22.4731 19.576 21.9031 19.33 21.1351 19.078C20.2711 18.802 19.5751 18.538 19.0471 18.286C18.5191 18.022 18.0631 17.644 17.6791 17.152C17.3071 16.648 17.1211 15.994 17.1211 15.19C17.1211 14.446 17.3131 13.798 17.6971 13.246C18.0931 12.682 18.6451 12.25 19.3531 11.95C20.0611 11.65 20.8771 11.5 21.8011 11.5Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M35.2486 24.388H32.6026V14.056H28.7866V11.788H39.0646V14.056H35.2486V24.388Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M42.3148 11.788H50.8108V14.038H44.9608V16.882H50.0008V19.15H44.9608V22.102H50.8108V24.388H42.3148V11.788Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M65.8582 24.388H62.9962L62.1322 21.94H57.2002L56.3722 24.388H53.6182L58.3342 11.788H60.9982L65.8582 24.388ZM59.6482 14.794L57.9202 19.834H61.4122L59.6482 14.794Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M75.8489 20.734L79.7729 11.788H82.4549V24.388H79.9169V16.378L76.5329 24.028H74.9309L71.4749 16.468V24.388H69.0629V11.788H71.6009L75.8489 20.734Z`,
          }),
        ],
      });
}
function $o({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 81 36`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36H61C70.9411 36 79 27.9411 79 18C79 8.05888 70.9411 0 61 0H18ZM21.5 22.5C23.9853 22.5 26 20.4853 26 18C26 15.5147 23.9853 13.5 21.5 13.5C19.0147 13.5 17 15.5147 17 18C17 20.4853 19.0147 22.5 21.5 22.5ZM44 18C44 20.4853 41.9853 22.5 39.5 22.5C37.0147 22.5 35 20.4853 35 18C35 15.5147 37.0147 13.5 39.5 13.5C41.9853 13.5 44 15.5147 44 18ZM57.5 22.5C59.9853 22.5 62 20.4853 62 18C62 15.5147 59.9853 13.5 57.5 13.5C55.0147 13.5 53 15.5147 53 18C53 20.4853 55.0147 22.5 57.5 22.5Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 81 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M0 18C0 8.05888 8.05888 0 18 0H61C70.9411 0 79 8.05888 79 18C79 27.9411 70.9411 36 61 36H18C8.05888 36 0 27.9411 0 18Z`,
          }),
          (0, U.jsx)(`circle`, {
            className: Z,
            fill: `currentColor`,
            cx: `21.5`,
            cy: `18`,
            r: `4.5`,
          }),
          (0, U.jsx)(`circle`, {
            className: Z,
            fill: `currentColor`,
            cx: `39.5`,
            cy: `18`,
            r: `4.5`,
          }),
          (0, U.jsx)(`circle`, {
            className: Z,
            fill: `currentColor`,
            cx: `57.5`,
            cy: `18`,
            r: `4.5`,
          }),
        ],
      });
}
function es({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M12 6C5.37258 6 0 11.3726 0 18C0 24.6274 5.37258 30 12 30H36C42.6274 30 48 24.6274 48 18C48 11.3726 42.6274 6 36 6H12ZM31 11H17V25H31V11Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`rect`, {
            className: X,
            fill: `currentColor`,
            y: `6`,
            width: `48`,
            height: `24`,
            rx: `12`,
          }),
          (0, U.jsx)(`rect`, {
            className: Z,
            fill: `currentColor`,
            x: `17`,
            y: `11`,
            width: `14`,
            height: `14`,
          }),
        ],
      });
}
function ts({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M12 6C5.37258 6 0 11.3726 0 18C0 24.6274 5.37258 30 12 30H36C42.6274 30 48 24.6274 48 18C48 11.3726 42.6274 6 36 6H12ZM31 11H17V13.8H31V11ZM17 22.2H31V25H17V22.2ZM31 16.6H17V19.4H31V16.6Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`rect`, {
            className: X,
            fill: `currentColor`,
            y: `6`,
            width: `48`,
            height: `24`,
            rx: `12`,
          }),
          (0, U.jsx)(`rect`, {
            className: Z,
            fill: `currentColor`,
            x: `17`,
            y: `11`,
            width: `14`,
            height: `2.8`,
          }),
          (0, U.jsx)(`rect`, {
            className: Z,
            fill: `currentColor`,
            x: `17`,
            y: `22.2`,
            width: `14`,
            height: `2.8`,
          }),
          (0, U.jsx)(`rect`, {
            className: Z,
            fill: `currentColor`,
            x: `17`,
            y: `16.6`,
            width: `14`,
            height: `2.8`,
          }),
        ],
      });
}
function ns({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M7.5 0C3.35786 0 0 4.47715 0 10V30C0 31.1046 0.671574 32 1.5 32H34.5C35.3284 32 36 31.1046 36 30V2C36 0.895431 35.3284 0 34.5 0H7.5ZM9.36182 23H17.8218V20.624H12.0078V10.4H9.36182V23ZM25.7635 20.714V10.4H23.7296L19.5896 12.452L20.4356 14.432L23.0816 13.316V20.714H20.1115V23H28.1576V20.714H25.7635Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M0 10C0 4.47715 3.35786 0 7.5 0H34.5C35.3284 0 36 0.895431 36 2V30C36 31.1046 35.3284 32 34.5 32H1.5C0.671574 32 0 31.1046 0 30V10Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M17.8218 23H9.36182V10.4H12.0078V20.624H17.8218V23Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M25.7635 10.4V20.714H28.1576V23H20.1116V20.714H23.0816V13.316L20.4356 14.432L19.5896 12.452L23.7296 10.4H25.7635Z`,
          }),
        ],
      });
}
function rs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M28.5 0C32.6421 0 36 4.47715 36 10V30C36 31.1046 35.3284 32 34.5 32H1.5C0.671573 32 0 31.1046 0 30V2C0 0.895431 0.671573 0 1.5 0H28.5ZM15.8185 23H18.7525L15.7825 18.23C16.5505 17.894 17.1445 17.402 17.5645 16.754C17.9965 16.106 18.2125 15.296 18.2125 14.324C18.2125 13.088 17.8045 12.128 16.9885 11.444C16.1725 10.748 14.9005 10.4 13.1725 10.4H8.45654V23H11.1025V18.752H12.9745H13.2805L15.8185 23ZM11.1025 16.484V12.65H13.0105C13.8385 12.65 14.4385 12.806 14.8105 13.118C15.1945 13.418 15.3865 13.874 15.3865 14.486C15.3865 15.11 15.1885 15.602 14.7925 15.962C14.4085 16.31 13.8685 16.484 13.1725 16.484H11.1025ZM26.6688 20.714V10.4H24.6348L20.4948 12.452L21.3408 14.432L23.9868 13.316V20.714H21.0168V23H29.0628V20.714H26.6688Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M36 10C36 4.47715 32.6421 0 28.5 0H1.5C0.671574 0 0 0.895431 0 2V30C0 31.1046 0.671574 32 1.5 32H34.5C35.3284 32 36 31.1046 36 30V10Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M18.7525 23H15.8185L13.2805 18.752H12.9745H11.1025V23H8.45654V10.4H13.1725C14.9005 10.4 16.1725 10.748 16.9885 11.444C17.8045 12.128 18.2125 13.088 18.2125 14.324C18.2125 15.296 17.9965 16.106 17.5645 16.754C17.1445 17.402 16.5505 17.894 15.7825 18.23L18.7525 23ZM11.1025 12.65V16.484H13.1725C13.8685 16.484 14.4085 16.31 14.7925 15.962C15.1885 15.602 15.3865 15.11 15.3865 14.486C15.3865 13.874 15.1945 13.418 14.8105 13.118C14.4385 12.806 13.8385 12.65 13.0105 12.65H11.1025Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M26.6688 10.4V20.714H29.0628V23H21.0168V20.714H23.9868V13.316L21.3408 14.432L20.4948 12.452L24.6348 10.4H26.6688Z`,
          }),
        ],
      });
}
function is({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M7.5 32C3.35786 32 0 27.5228 0 22V2C0 0.895431 0.671574 0 1.5 0H34.5C35.3284 0 36 0.895431 36 2V30C36 31.1046 35.3284 32 34.5 32H7.5ZM29.0743 20.714H23.0083L25.6183 18.554C26.6623 17.69 27.4363 16.91 27.9403 16.214C28.4443 15.506 28.6963 14.72 28.6963 13.856C28.6963 12.68 28.2583 11.774 27.3823 11.138C26.5063 10.502 25.3423 10.184 23.8903 10.184C23.0743 10.184 22.3063 10.298 21.5863 10.526C20.8783 10.754 20.2483 11.06 19.6963 11.444L20.5963 13.388C20.9683 13.136 21.4003 12.926 21.8923 12.758C22.3963 12.59 22.9123 12.506 23.4403 12.506C24.1483 12.506 24.7243 12.668 25.1683 12.992C25.6243 13.304 25.8523 13.772 25.8523 14.396C25.8523 14.78 25.7623 15.134 25.5823 15.458C25.4023 15.782 25.1623 16.088 24.8623 16.376C24.5743 16.664 24.1543 17.042 23.6023 17.51L23.2963 17.78L19.6603 20.804V23H29.0743V20.714ZM9.32458 23H17.7846V20.624H11.9706V10.4H9.32458V23Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M0 22C0 27.5228 3.35786 32 7.5 32H34.5C35.3284 32 36 31.1046 36 30V2C36 0.895432 35.3284 0 34.5 0H1.5C0.671574 0 0 0.895432 0 2V22Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M17.7846 23H9.32458V10.4H11.9706V20.624H17.7846V23Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M23.0083 20.714H29.0743V23H19.6603V20.804L23.2963 17.78L23.6023 17.51C24.1543 17.042 24.5743 16.664 24.8623 16.376C25.1623 16.088 25.4023 15.782 25.5823 15.458C25.7623 15.134 25.8523 14.78 25.8523 14.396C25.8523 13.772 25.6243 13.304 25.1683 12.992C24.7243 12.668 24.1483 12.506 23.4403 12.506C22.9123 12.506 22.3963 12.59 21.8923 12.758C21.4003 12.926 20.9683 13.136 20.5963 13.388L19.6963 11.444C20.2483 11.06 20.8783 10.754 21.5863 10.526C22.3063 10.298 23.0743 10.184 23.8903 10.184C25.3423 10.184 26.5063 10.502 27.3823 11.138C28.2583 11.774 28.6963 12.68 28.6963 13.856C28.6963 14.72 28.4443 15.506 27.9403 16.214C27.4363 16.91 26.6623 17.69 25.6183 18.554L23.0083 20.714Z`,
          }),
        ],
      });
}
function as({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M28.5 32C32.6421 32 36 27.5228 36 22V2C36 0.895431 35.3284 0 34.5 0H1.5C0.671573 0 0 0.895431 0 2V30C0 31.1046 0.671573 32 1.5 32H28.5ZM28.9796 20.714H22.9136L25.5236 18.554C26.5676 17.69 27.3416 16.91 27.8456 16.214C28.3496 15.506 28.6016 14.72 28.6016 13.856C28.6016 12.68 28.1636 11.774 27.2876 11.138C26.4116 10.502 25.2476 10.184 23.7956 10.184C22.9796 10.184 22.2116 10.298 21.4916 10.526C20.7836 10.754 20.1536 11.06 19.6016 11.444L20.5016 13.388C20.8736 13.136 21.3056 12.926 21.7976 12.758C22.3016 12.59 22.8176 12.506 23.3456 12.506C24.0536 12.506 24.6296 12.668 25.0736 12.992C25.5296 13.304 25.7576 13.772 25.7576 14.396C25.7576 14.78 25.6676 15.134 25.4876 15.458C25.3076 15.782 25.0676 16.088 24.7676 16.376C24.4796 16.664 24.0596 17.042 23.5076 17.51L23.2016 17.78L19.5656 20.804V23H28.9796V20.714ZM14.7813 23H17.7153L14.7453 18.23C15.5133 17.894 16.1073 17.402 16.5273 16.754C16.9593 16.106 17.1753 15.296 17.1753 14.324C17.1753 13.088 16.7673 12.128 15.9513 11.444C15.1353 10.748 13.8633 10.4 12.1353 10.4H7.41931V23H10.0653V18.752H11.9373H12.2433L14.7813 23ZM10.0653 16.484V12.65H11.9733C12.8013 12.65 13.4013 12.806 13.7733 13.118C14.1573 13.418 14.3493 13.874 14.3493 14.486C14.3493 15.11 14.1513 15.602 13.7553 15.962C13.3713 16.31 12.8313 16.484 12.1353 16.484H10.0653Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M36 22C36 27.5228 32.6421 32 28.5 32H1.5C0.671574 32 0 31.1046 0 30V2C0 0.895432 0.671574 0 1.5 0H34.5C35.3284 0 36 0.895432 36 2V22Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M17.7153 23H14.7813L12.2433 18.752H11.9373H10.0653V23H7.41931V10.4H12.1353C13.8633 10.4 15.1353 10.748 15.9513 11.444C16.7673 12.128 17.1753 13.088 17.1753 14.324C17.1753 15.296 16.9593 16.106 16.5273 16.754C16.1073 17.402 15.5133 17.894 14.7453 18.23L17.7153 23ZM10.0653 12.65V16.484H12.1353C12.8313 16.484 13.3713 16.31 13.7553 15.962C14.1513 15.602 14.3493 15.11 14.3493 14.486C14.3493 13.874 14.1573 13.418 13.7733 13.118C13.4013 12.806 12.8013 12.65 11.9733 12.65H10.0653Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M22.9136 20.714H28.9796V23H19.5656V20.804L23.2016 17.78L23.5076 17.51C24.0596 17.042 24.4796 16.664 24.7676 16.376C25.0676 16.088 25.3076 15.782 25.4876 15.458C25.6676 15.134 25.7576 14.78 25.7576 14.396C25.7576 13.772 25.5296 13.304 25.0736 12.992C24.6296 12.668 24.0536 12.506 23.3456 12.506C22.8176 12.506 22.3016 12.59 21.7976 12.758C21.3056 12.926 20.8736 13.136 20.5016 13.388L19.6016 11.444C20.1536 11.06 20.7836 10.754 21.4916 10.526C22.2116 10.298 22.9796 10.184 23.7956 10.184C25.2476 10.184 26.4116 10.502 27.2876 11.138C28.1636 11.774 28.6016 12.68 28.6016 13.856C28.6016 14.72 28.3496 15.506 27.8456 16.214C27.3416 16.91 26.5676 17.69 25.5236 18.554L22.9136 20.714Z`,
          }),
        ],
      });
}
function os({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`path`, {
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, U.jsx)(`path`, {
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, U.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M18 30.75C27.9411 30.75 36 25.7132 36 19.5C36 13.2868 27.9411 8.25 18 8.25C8.05887 8.25 0 13.2868 0 19.5C0 25.7132 8.05887 30.75 18 30.75ZM25.4679 14.284C24.7852 13.7613 23.7879 13.5 22.4759 13.5C21.6972 13.5 20.9666 13.6173 20.2839 13.852C19.6119 14.0867 19.0092 14.4227 18.4759 14.86L19.4679 16.364C19.8199 16.0973 20.2146 15.8893 20.6519 15.74C21.0999 15.58 21.5639 15.5 22.0439 15.5C22.6732 15.5 23.1639 15.6227 23.5159 15.868C23.8786 16.1133 24.0599 16.4387 24.0599 16.844C24.0599 17.2813 23.8679 17.6227 23.4839 17.868C23.1106 18.1027 22.6146 18.22 21.9959 18.22H20.6999V19.996H22.1399C23.7079 19.996 24.4919 20.508 24.4919 21.532C24.4919 22.0547 24.2839 22.4653 23.8679 22.764C23.4626 23.0627 22.8972 23.212 22.1719 23.212C21.0306 23.212 20.0439 22.876 19.2119 22.204L18.2039 23.932C18.7052 24.3373 19.3186 24.652 20.0439 24.876C20.7799 25.1 21.5532 25.212 22.3639 25.212C23.2172 25.212 23.9959 25.068 24.6999 24.78C25.4039 24.4813 25.9586 24.0653 26.3639 23.532C26.7692 22.988 26.9719 22.364 26.9719 21.66C26.9719 20.892 26.7479 20.2787 26.2999 19.82C25.8626 19.3507 25.2866 19.0413 24.5719 18.892V18.844C25.1799 18.6093 25.6492 18.2733 25.9799 17.836C26.3212 17.388 26.4919 16.8813 26.4919 16.316C26.4919 15.484 26.1506 14.8067 25.4679 14.284ZM9.48901 24.956H17.009V22.844H11.841V13.756H9.48901V24.956Z`,
          }),
        ],
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`ellipse`, {
            className: X,
            fill: `currentColor`,
            cx: `18`,
            cy: `19.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M17.009 24.956H9.48901V13.756H11.841V22.844H17.009V24.956Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M22.4759 13.5C23.7879 13.5 24.7852 13.7613 25.4679 14.284C26.1506 14.8067 26.4919 15.484 26.4919 16.316C26.4919 16.8813 26.3212 17.388 25.9799 17.836C25.6492 18.2733 25.1799 18.6093 24.5719 18.844V18.892C25.2866 19.0413 25.8626 19.3507 26.2999 19.82C26.7479 20.2787 26.9719 20.892 26.9719 21.66C26.9719 22.364 26.7692 22.988 26.3639 23.532C25.9586 24.0653 25.4039 24.4813 24.6999 24.78C23.9959 25.068 23.2172 25.212 22.3639 25.212C21.5532 25.212 20.7799 25.1 20.0439 24.876C19.3186 24.652 18.7052 24.3373 18.2039 23.932L19.2119 22.204C20.0439 22.876 21.0306 23.212 22.1719 23.212C22.8972 23.212 23.4626 23.0627 23.8679 22.764C24.2839 22.4653 24.4919 22.0547 24.4919 21.532C24.4919 20.508 23.7079 19.996 22.1399 19.996H20.6999V18.22H21.9959C22.6146 18.22 23.1106 18.1027 23.4839 17.868C23.8679 17.6227 24.0599 17.2813 24.0599 16.844C24.0599 16.4387 23.8786 16.1133 23.5159 15.868C23.1639 15.6227 22.6732 15.5 22.0439 15.5C21.5639 15.5 21.0999 15.58 20.6519 15.74C20.2146 15.8893 19.8199 16.0973 19.4679 16.364L18.4759 14.86C19.0092 14.4227 19.6119 14.0867 20.2839 13.852C20.9666 13.6173 21.6972 13.5 22.4759 13.5Z`,
          }),
        ],
      });
}
function ss({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`path`, {
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, U.jsx)(`path`, {
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, U.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M18 30.75C27.9411 30.75 36 25.7132 36 19.5C36 13.2868 27.9411 8.25 18 8.25C8.05887 8.25 0 13.2868 0 19.5C0 25.7132 8.05887 30.75 18 30.75ZM26.5882 14.284C25.9056 13.7613 24.9082 13.5 23.5962 13.5C22.8176 13.5 22.0869 13.6173 21.4043 13.852C20.7323 14.0867 20.1296 14.4227 19.5963 14.86L20.5882 16.364C20.9403 16.0973 21.3349 15.8893 21.7723 15.74C22.2202 15.58 22.6842 15.5 23.1642 15.5C23.7936 15.5 24.2843 15.6227 24.6362 15.868C24.9989 16.1133 25.1803 16.4387 25.1803 16.844C25.1803 17.2813 24.9883 17.6227 24.6043 17.868C24.2309 18.1027 23.7349 18.22 23.1162 18.22H21.8203V19.996H23.2603C24.8283 19.996 25.6122 20.508 25.6122 21.532C25.6122 22.0547 25.4042 22.4653 24.9883 22.764C24.5829 23.0627 24.0176 23.212 23.2923 23.212C22.1509 23.212 21.1643 22.876 20.3323 22.204L19.3242 23.932C19.8256 24.3373 20.4389 24.652 21.1642 24.876C21.9002 25.1 22.6736 25.212 23.4842 25.212C24.3376 25.212 25.1162 25.068 25.8202 24.78C26.5243 24.4813 27.0789 24.0653 27.4842 23.532C27.8896 22.988 28.0923 22.364 28.0923 21.66C28.0923 20.892 27.8682 20.2787 27.4202 19.82C26.9829 19.3507 26.4069 19.0413 25.6922 18.892V18.844C26.3002 18.6093 26.7696 18.2733 27.1003 17.836C27.4416 17.388 27.6122 16.8813 27.6122 16.316C27.6122 15.484 27.2709 14.8067 26.5882 14.284ZM15.544 24.956H18.152L15.512 20.716C16.1947 20.4173 16.7227 19.98 17.096 19.404C17.48 18.828 17.672 18.108 17.672 17.244C17.672 16.1453 17.3093 15.292 16.584 14.684C15.8587 14.0653 14.728 13.756 13.192 13.756H9V24.956H11.352V21.18H13.016H13.288L15.544 24.956ZM11.352 19.164V15.756H13.048C13.784 15.756 14.3173 15.8947 14.648 16.172C14.9893 16.4387 15.16 16.844 15.16 17.388C15.16 17.9427 14.984 18.38 14.632 18.7C14.2907 19.0093 13.8107 19.164 13.192 19.164H11.352Z`,
          }),
        ],
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`ellipse`, {
            className: X,
            fill: `currentColor`,
            cx: `18`,
            cy: `19.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M18.152 24.956H15.544L13.288 21.18H13.016H11.352V24.956H9V13.756H13.192C14.728 13.756 15.8587 14.0653 16.584 14.684C17.3093 15.292 17.672 16.1453 17.672 17.244C17.672 18.108 17.48 18.828 17.096 19.404C16.7227 19.98 16.1947 20.4173 15.512 20.716L18.152 24.956ZM11.352 15.756V19.164H13.192C13.8107 19.164 14.2907 19.0093 14.632 18.7C14.984 18.38 15.16 17.9427 15.16 17.388C15.16 16.844 14.9893 16.4387 14.648 16.172C14.3173 15.8947 13.784 15.756 13.048 15.756H11.352Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M23.5962 13.5C24.9082 13.5 25.9056 13.7613 26.5882 14.284C27.2709 14.8067 27.6122 15.484 27.6122 16.316C27.6122 16.8813 27.4416 17.388 27.1003 17.836C26.7696 18.2733 26.3002 18.6093 25.6922 18.844V18.892C26.4069 19.0413 26.9829 19.3507 27.4202 19.82C27.8682 20.2787 28.0923 20.892 28.0923 21.66C28.0923 22.364 27.8896 22.988 27.4842 23.532C27.0789 24.0653 26.5243 24.4813 25.8202 24.78C25.1162 25.068 24.3376 25.212 23.4843 25.212C22.6736 25.212 21.9003 25.1 21.1643 24.876C20.4389 24.652 19.8256 24.3373 19.3243 23.932L20.3323 22.204C21.1643 22.876 22.1509 23.212 23.2923 23.212C24.0176 23.212 24.5829 23.0627 24.9882 22.764C25.4042 22.4653 25.6122 22.0547 25.6122 21.532C25.6122 20.508 24.8283 19.996 23.2603 19.996H21.8203V18.22H23.1163C23.7349 18.22 24.2309 18.1027 24.6043 17.868C24.9883 17.6227 25.1803 17.2813 25.1803 16.844C25.1803 16.4387 24.9989 16.1133 24.6363 15.868C24.2843 15.6227 23.7936 15.5 23.1643 15.5C22.6842 15.5 22.2203 15.58 21.7723 15.74C21.3349 15.8893 20.9403 16.0973 20.5883 16.364L19.5963 14.86C20.1296 14.4227 20.7323 14.0867 21.4043 13.852C22.0869 13.6173 22.8176 13.5 23.5962 13.5Z`,
          }),
        ],
      });
}
function cs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M18 24.75C27.9411 24.75 36 19.7132 36 13.5C36 7.2868 27.9411 2.25 18 2.25C8.05887 2.25 0 7.2868 0 13.5C0 19.7132 8.05887 24.75 18 24.75ZM20.8833 18.9875H23.6775L20.849 14.4447C21.5804 14.1247 22.1461 13.6561 22.5461 13.039C22.9575 12.4218 23.1633 11.6504 23.1633 10.7247C23.1633 9.54755 22.7747 8.63326 21.9975 7.98183C21.2204 7.31898 20.009 6.98755 18.3633 6.98755H13.8718V18.9875H16.3918V14.9418H18.1747H18.4661L20.8833 18.9875ZM16.3918 12.7818V9.13041H18.209C18.9975 9.13041 19.569 9.27898 19.9233 9.57612C20.289 9.86183 20.4718 10.2961 20.4718 10.879C20.4718 11.4733 20.2833 11.9418 19.9061 12.2847C19.5404 12.6161 19.0261 12.7818 18.3633 12.7818H16.3918Z`,
          }),
          (0, U.jsx)(`path`, {
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`ellipse`, {
            className: X,
            fill: `currentColor`,
            cx: `18`,
            cy: `13.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M23.6775 18.9875H20.8833L18.4661 14.9418H18.1747H16.3918V18.9875H13.8718V6.98755H18.3633C20.009 6.98755 21.2204 7.31898 21.9975 7.98184C22.7747 8.63326 23.1633 9.54755 23.1633 10.7247C23.1633 11.6504 22.9575 12.4218 22.5461 13.039C22.1461 13.6561 21.5804 14.1247 20.849 14.4447L23.6775 18.9875ZM16.3918 9.13041V12.7818H18.3633C19.0261 12.7818 19.5404 12.6161 19.9061 12.2847C20.2833 11.9418 20.4718 11.4733 20.4718 10.879C20.4718 10.2961 20.289 9.86183 19.9233 9.57612C19.569 9.27898 18.9975 9.13041 18.209 9.13041H16.3918Z`,
          }),
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      });
}
function ls({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M18 24.75C27.9411 24.75 36 19.7132 36 13.5C36 7.2868 27.9411 2.25 18 2.25C8.05887 2.25 0 7.2868 0 13.5C0 19.7132 8.05887 24.75 18 24.75ZM14 19H23V16.7371H16.8149V7H14V19Z`,
          }),
          (0, U.jsx)(`path`, {
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`ellipse`, {
            className: X,
            fill: `currentColor`,
            cx: `18`,
            cy: `13.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M23 19H14V7H16.8149V16.7371H23V19Z`,
          }),
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      });
}
function us({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM8.62341 24.75H17.0834V22.374H11.2694V12.15H8.62341V24.75ZM27.3111 19.854V12.15H24.8631L18.6891 20.16V21.888H24.6291V24.75H27.3111V21.888H29.1291V19.854H27.3111ZM21.2631 19.854L24.7371 15.3V19.854H21.2631Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M17.0834 24.75H8.62341V12.15H11.2694V22.374H17.0834V24.75Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M27.3111 12.15V19.854H29.1291V21.888H27.3111V24.75H24.6291V21.888H18.6891V20.16L24.8631 12.15H27.3111ZM24.7371 15.3L21.2631 19.854H24.7371V15.3Z`,
          }),
        ],
      });
}
function ds({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM8.23669 24.75H16.6967V22.374H10.8827V12.15H8.23669V24.75ZM27.3744 14.4V12.15H19.3284V18.648L21.0024 19.566C21.3744 19.266 21.7524 19.044 22.1364 18.9C22.5204 18.744 22.9404 18.666 23.3964 18.666C24.0084 18.666 24.4884 18.828 24.8364 19.152C25.1964 19.476 25.3764 19.944 25.3764 20.556C25.3764 21.252 25.1424 21.786 24.6744 22.158C24.2064 22.53 23.5464 22.716 22.6944 22.716C21.5664 22.716 20.5404 22.404 19.6164 21.78L18.6804 23.796C19.1484 24.192 19.7364 24.498 20.4444 24.714C21.1524 24.93 21.9144 25.038 22.7304 25.038C23.8344 25.038 24.7884 24.852 25.5924 24.48C26.4084 24.096 27.0264 23.562 27.4464 22.878C27.8784 22.194 28.0944 21.396 28.0944 20.484C28.0944 19.26 27.7524 18.33 27.0684 17.694C26.3964 17.046 25.4964 16.722 24.3684 16.722C23.9244 16.722 23.4804 16.776 23.0364 16.884C22.6044 16.98 22.2144 17.136 21.8664 17.352V14.4H27.3744Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M16.6967 24.75H8.23669V12.15H10.8827V22.374H16.6967V24.75Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M27.3744 12.15V14.4H21.8664V17.352C22.2144 17.136 22.6044 16.98 23.0364 16.884C23.4804 16.776 23.9244 16.722 24.3684 16.722C25.4964 16.722 26.3964 17.046 27.0684 17.694C27.7524 18.33 28.0944 19.26 28.0944 20.484C28.0944 21.396 27.8784 22.194 27.4464 22.878C27.0264 23.562 26.4084 24.096 25.5924 24.48C24.7884 24.852 23.8344 25.038 22.7304 25.038C21.9144 25.038 21.1524 24.93 20.4444 24.714C19.7364 24.498 19.1484 24.192 18.6804 23.796L19.6164 21.78C20.5404 22.404 21.5664 22.716 22.6944 22.716C23.5464 22.716 24.2064 22.53 24.6744 22.158C25.1424 21.786 25.3764 21.252 25.3764 20.556C25.3764 19.944 25.1964 19.476 24.8364 19.152C24.4884 18.828 24.0084 18.666 23.3964 18.666C22.9404 18.666 22.5204 18.744 22.1364 18.9C21.7524 19.044 21.3744 19.266 21.0024 19.566L19.3284 18.648V12.15H27.3744Z`,
          }),
        ],
      });
}
function fs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM14.5176 24.75H17.4516L14.4816 19.98C15.2496 19.644 15.8436 19.152 16.2636 18.504C16.6956 17.856 16.9116 17.046 16.9116 16.074C16.9116 14.838 16.5036 13.878 15.6876 13.194C14.8716 12.498 13.5996 12.15 11.8716 12.15H7.15564V24.75H9.80164V20.502H11.6736H11.9796L14.5176 24.75ZM9.80164 18.234V14.4H11.7096C12.5376 14.4 13.1376 14.556 13.5096 14.868C13.8936 15.168 14.0856 15.624 14.0856 16.236C14.0856 16.86 13.8876 17.352 13.4916 17.712C13.1076 18.06 12.5676 18.234 11.8716 18.234H9.80164ZM27.6539 19.854V12.15H25.2059L19.0319 20.16V21.888H24.9719V24.75H27.6539V21.888H29.4719V19.854H27.6539ZM21.6059 19.854L25.0799 15.3V19.854H21.6059Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M17.4516 24.75H14.5176L11.9796 20.502H11.6736H9.80164V24.75H7.15564V12.15H11.8716C13.5996 12.15 14.8716 12.498 15.6876 13.194C16.5036 13.878 16.9116 14.838 16.9116 16.074C16.9116 17.046 16.6956 17.856 16.2636 18.504C15.8436 19.152 15.2496 19.644 14.4816 19.98L17.4516 24.75ZM9.80164 14.4V18.234H11.8716C12.5676 18.234 13.1076 18.06 13.4916 17.712C13.8876 17.352 14.0856 16.86 14.0856 16.236C14.0856 15.624 13.8936 15.168 13.5096 14.868C13.1376 14.556 12.5376 14.4 11.7096 14.4H9.80164Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M27.6539 12.15V19.854H29.4719V21.888H27.6539V24.75H24.9719V21.888H19.0319V20.16L25.2059 12.15H27.6539ZM25.0799 15.3L21.6059 19.854H25.0799V15.3Z`,
          }),
        ],
      });
}
function ps({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM14.6934 24.75H17.6274L14.6574 19.98C15.4254 19.644 16.0194 19.152 16.4394 18.504C16.8714 17.856 17.0874 17.046 17.0874 16.074C17.0874 14.838 16.6794 13.878 15.8634 13.194C15.0474 12.498 13.7754 12.15 12.0474 12.15H7.33142V24.75H9.97742V20.502H11.8494H12.1554L14.6934 24.75ZM9.97742 18.234V14.4H11.8854C12.7134 14.4 13.3134 14.556 13.6854 14.868C14.0694 15.168 14.2614 15.624 14.2614 16.236C14.2614 16.86 14.0634 17.352 13.6674 17.712C13.2834 18.06 12.7434 18.234 12.0474 18.234H9.97742ZM28.2797 14.4V12.15H20.2337V18.648L21.9077 19.566C22.2797 19.266 22.6577 19.044 23.0417 18.9C23.4257 18.744 23.8457 18.666 24.3017 18.666C24.9137 18.666 25.3937 18.828 25.7417 19.152C26.1017 19.476 26.2817 19.944 26.2817 20.556C26.2817 21.252 26.0477 21.786 25.5797 22.158C25.1117 22.53 24.4517 22.716 23.5997 22.716C22.4717 22.716 21.4457 22.404 20.5217 21.78L19.5857 23.796C20.0537 24.192 20.6417 24.498 21.3497 24.714C22.0577 24.93 22.8197 25.038 23.6357 25.038C24.7397 25.038 25.6937 24.852 26.4977 24.48C27.3137 24.096 27.9317 23.562 28.3517 22.878C28.7837 22.194 28.9997 21.396 28.9997 20.484C28.9997 19.26 28.6577 18.33 27.9737 17.694C27.3017 17.046 26.4017 16.722 25.2737 16.722C24.8297 16.722 24.3857 16.776 23.9417 16.884C23.5097 16.98 23.1197 17.136 22.7717 17.352V14.4H28.2797Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M17.6274 24.75H14.6934L12.1554 20.502H11.8494H9.97742V24.75H7.33142V12.15H12.0474C13.7754 12.15 15.0474 12.498 15.8634 13.194C16.6794 13.878 17.0874 14.838 17.0874 16.074C17.0874 17.046 16.8714 17.856 16.4394 18.504C16.0194 19.152 15.4254 19.644 14.6574 19.98L17.6274 24.75ZM9.97742 14.4V18.234H12.0474C12.7434 18.234 13.2834 18.06 13.6674 17.712C14.0634 17.352 14.2614 16.86 14.2614 16.236C14.2614 15.624 14.0694 15.168 13.6854 14.868C13.3134 14.556 12.7134 14.4 11.8854 14.4H9.97742Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M28.2797 12.15V14.4H22.7717V17.352C23.1197 17.136 23.5097 16.98 23.9417 16.884C24.3857 16.776 24.8297 16.722 25.2737 16.722C26.4017 16.722 27.3017 17.046 27.9737 17.694C28.6577 18.33 28.9997 19.26 28.9997 20.484C28.9997 21.396 28.7837 22.194 28.3517 22.878C27.9317 23.562 27.3137 24.096 26.4977 24.48C25.6937 24.852 24.7397 25.038 23.6357 25.038C22.8197 25.038 22.0577 24.93 21.3497 24.714C20.6417 24.498 20.0537 24.192 19.5857 23.796L20.5217 21.78C21.4457 22.404 22.4717 22.716 23.5997 22.716C24.4517 22.716 25.1117 22.53 25.5797 22.158C26.0477 21.786 26.2817 21.252 26.2817 20.556C26.2817 19.944 26.1017 19.476 25.7417 19.152C25.3937 18.828 24.9137 18.666 24.3017 18.666C23.8457 18.666 23.4257 18.744 23.0417 18.9C22.6577 19.044 22.2797 19.266 21.9077 19.566L20.2337 18.648V12.15H28.2797Z`,
          }),
        ],
      });
}
function ms({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M5.73583 3C3.6326 3 1.88863 4.6288 1.74515 6.72713L0.292161 27.9771C0.134133 30.2883 1.96629 32.25 4.28284 32.25H31.7172C34.0337 32.25 35.8659 30.2883 35.7078 27.9771L34.2548 6.72713C34.1114 4.6288 32.3674 3 30.2642 3H5.73583ZM14.8236 24.0625H23.2836V21.6865H17.4696V11.4625H14.8236V24.0625Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M1.74515 6.72713C1.88863 4.6288 3.6326 3 5.73584 3H30.2642C32.3674 3 34.1114 4.6288 34.2548 6.72713L35.7078 27.9771C35.8659 30.2883 34.0337 32.25 31.7172 32.25H4.28284C1.96629 32.25 0.134134 30.2883 0.292162 27.9771L1.74515 6.72713Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M23.2836 24.0625H14.8236V11.4625H17.4696V21.6865H23.2836V24.0625Z`,
          }),
        ],
      });
}
function hs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M6.6282 8C4.52356 8 2.77893 9.6309 2.63727 11.7308L1.28806 31.7308C1.13224 34.0406 2.96389 36 5.27899 36H30.7211C33.0362 36 34.8679 34.0406 34.7121 31.7308L33.3629 11.7308C33.2212 9.63091 31.4766 8 29.3719 8H6.6282ZM14.8237 28.0625H23.2837V25.6865H17.4697V15.4625H14.8237V28.0625Z`,
          }),
          (0, U.jsx)(`path`, {
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M2.63721 11.7308C2.77887 9.6309 4.5235 8 6.62814 8H29.3719C31.4765 8 33.2211 9.63091 33.3628 11.7308L34.712 31.7308C34.8678 34.0406 33.0362 36 30.7211 36H5.27893C2.96382 36 1.13218 34.0406 1.288 31.7308L2.63721 11.7308Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M23.2836 28.0625H14.8236V15.4625H17.4696V25.6865H23.2836V28.0625Z`,
          }),
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      });
}
function gs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M5.7359 3C3.63266 3 1.88869 4.6288 1.74521 6.72713L0.292222 27.9771C0.134194 30.2883 1.96635 32.25 4.2829 32.25H31.7172C34.0338 32.25 35.8659 30.2883 35.7079 27.9771L34.2549 6.72713C34.1114 4.6288 32.3675 3 30.2642 3H5.7359ZM20.7179 24.0625H23.6519L20.6819 19.2925C21.4499 18.9565 22.0439 18.4645 22.4639 17.8165C22.8959 17.1685 23.1119 16.3585 23.1119 15.3865C23.1119 14.1505 22.7039 13.1905 21.8879 12.5065C21.0719 11.8105 19.7999 11.4625 18.0719 11.4625H13.3559V24.0625H16.0019V19.8145H17.8739H18.1799L20.7179 24.0625ZM16.0019 17.5465V13.7125H17.9099C18.7379 13.7125 19.3379 13.8685 19.7099 14.1805C20.0939 14.4805 20.2859 14.9365 20.2859 15.5485C20.2859 16.1725 20.0879 16.6645 19.6919 17.0245C19.3079 17.3725 18.7679 17.5465 18.0719 17.5465H16.0019Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M1.74515 6.72713C1.88863 4.6288 3.6326 3 5.73584 3H30.2642C32.3674 3 34.1114 4.6288 34.2548 6.72713L35.7078 27.9771C35.8659 30.2883 34.0337 32.25 31.7172 32.25H4.28284C1.96629 32.25 0.134134 30.2883 0.292162 27.9771L1.74515 6.72713Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M23.6518 24.0625H20.7178L18.1798 19.8145H17.8738H16.0018V24.0625H13.3558V11.4625H18.0718C19.7998 11.4625 21.0718 11.8105 21.8878 12.5065C22.7038 13.1905 23.1118 14.1505 23.1118 15.3865C23.1118 16.3585 22.8958 17.1685 22.4638 17.8165C22.0438 18.4645 21.4498 18.9565 20.6818 19.2925L23.6518 24.0625ZM16.0018 13.7125V17.5465H18.0718C18.7678 17.5465 19.3078 17.3725 19.6918 17.0245C20.0878 16.6645 20.2858 16.1725 20.2858 15.5485C20.2858 14.9365 20.0938 14.4805 19.7098 14.1805C19.3378 13.8685 18.7378 13.7125 17.9098 13.7125H16.0018Z`,
          }),
        ],
      });
}
function _s({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M6.6282 8C4.52356 8 2.77893 9.6309 2.63727 11.7308L1.28806 31.7308C1.13224 34.0406 2.96389 36 5.27899 36H30.7211C33.0362 36 34.8679 34.0406 34.7121 31.7308L33.3629 11.7308C33.2212 9.63091 31.4766 8 29.3719 8H6.6282ZM20.7179 28.0625H23.6519L20.6819 23.2925C21.4499 22.9565 22.0439 22.4645 22.4639 21.8165C22.8959 21.1685 23.1119 20.3585 23.1119 19.3865C23.1119 18.1505 22.7039 17.1905 21.8879 16.5065C21.0719 15.8105 19.7999 15.4625 18.0719 15.4625H13.3559V28.0625H16.0019V23.8145H17.8739H18.1799L20.7179 28.0625ZM16.0019 21.5465V17.7125H17.9099C18.7379 17.7125 19.3379 17.8685 19.7099 18.1805C20.0939 18.4805 20.2859 18.9365 20.2859 19.5485C20.2859 20.1725 20.0879 20.6645 19.6919 21.0245C19.3079 21.3725 18.7679 21.5465 18.0719 21.5465H16.0019Z`,
          }),
          (0, U.jsx)(`path`, {
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M2.63721 11.7308C2.77887 9.6309 4.5235 8 6.62814 8H29.3719C31.4765 8 33.2211 9.63091 33.3628 11.7308L34.712 31.7308C34.8678 34.0406 33.0362 36 30.7211 36H5.27893C2.96382 36 1.13218 34.0406 1.288 31.7308L2.63721 11.7308Z`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M23.6518 28.0625H20.7178L18.1798 23.8145H17.8738H16.0018V28.0625H13.3558V15.4625H18.0718C19.7998 15.4625 21.0718 15.8105 21.8878 16.5065C22.7038 17.1905 23.1118 18.1505 23.1118 19.3865C23.1118 20.3585 22.8958 21.1685 22.4638 21.8165C22.0438 22.4645 21.4498 22.9565 20.6818 23.2925L23.6518 28.0625ZM16.0018 17.7125V21.5465H18.0718C18.7678 21.5465 19.3078 21.3725 19.6918 21.0245C20.0878 20.6645 20.2858 20.1725 20.2858 19.5485C20.2858 18.9365 20.0938 18.4805 19.7098 18.1805C19.3378 17.8685 18.7378 17.7125 17.9098 17.7125H16.0018Z`,
          }),
          (0, U.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      });
}
function vs({ bIsKnockout: e, ...t }) {
  return e
    ? (0, U.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, U.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.4999 10.8201C19.7519 10.4974 18.8719 10.3361 17.8599 10.3361C16.9799 10.3361 16.1219 10.4681 15.2859 10.7321C14.4499 10.9961 13.7166 11.3407 13.0859 11.7661L14.0759 13.9881C15.0586 13.2547 16.1073 12.8881 17.2219 12.8881C17.9699 12.8881 18.5493 13.0494 18.9599 13.3721C19.3853 13.6801 19.5979 14.1201 19.5979 14.6921C19.5979 15.1027 19.4953 15.4474 19.2899 15.7261C19.0846 16.0047 18.7693 16.3201 18.3439 16.6721C17.8893 17.0681 17.5153 17.4347 17.2219 17.7721C16.9286 18.1094 16.6793 18.5641 16.4739 19.1361C16.2686 19.7081 16.1659 20.4047 16.1659 21.2261H18.8499C18.8499 20.6541 18.9453 20.1554 19.1359 19.7301C19.3266 19.2901 19.5539 18.9234 19.8179 18.6301C20.0966 18.3221 20.4633 17.9701 20.9179 17.5741C21.3579 17.1781 21.7026 16.8407 21.9519 16.5621C22.2159 16.2834 22.4359 15.9461 22.6119 15.5501C22.7879 15.1541 22.8759 14.6994 22.8759 14.1861C22.8759 13.4234 22.6706 12.7561 22.2599 12.1841C21.8493 11.5974 21.2626 11.1427 20.4999 10.8201ZM18.7839 23.2721C18.4759 22.9494 18.0653 22.7881 17.5519 22.7881C17.0386 22.7881 16.6279 22.9494 16.3199 23.2721C16.0119 23.5801 15.8579 23.9907 15.8579 24.5041C15.8579 25.0467 16.0119 25.4794 16.3199 25.8021C16.6279 26.1101 17.0386 26.2641 17.5519 26.2641C18.0653 26.2641 18.4759 26.1101 18.7839 25.8021C19.0919 25.4794 19.2459 25.0467 19.2459 24.5041C19.2459 23.9907 19.0919 23.5801 18.7839 23.2721Z`,
        }),
      })
    : (0, U.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, U.jsx)(`circle`, {
            className: X,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, U.jsx)(`path`, {
            className: Z,
            fill: `currentColor`,
            d: `M17.8599 10.3361C18.8719 10.3361 19.7519 10.4974 20.4999 10.8201C21.2626 11.1427 21.8493 11.5974 22.2599 12.1841C22.6706 12.7561 22.8759 13.4234 22.8759 14.1861C22.8759 14.6994 22.7879 15.1541 22.6119 15.5501C22.4359 15.9461 22.2159 16.2834 21.9519 16.5621C21.7026 16.8407 21.3579 17.1781 20.9179 17.5741C20.4633 17.9701 20.0966 18.3221 19.8179 18.6301C19.5539 18.9234 19.3266 19.2901 19.1359 19.7301C18.9453 20.1554 18.8499 20.6541 18.8499 21.2261H16.1659C16.1659 20.4047 16.2686 19.7081 16.4739 19.1361C16.6793 18.5641 16.9286 18.1094 17.2219 17.7721C17.5153 17.4347 17.8893 17.0681 18.3439 16.6721C18.7693 16.3201 19.0846 16.0047 19.2899 15.7261C19.4953 15.4474 19.5979 15.1027 19.5979 14.6921C19.5979 14.1201 19.3853 13.6801 18.9599 13.3721C18.5493 13.0494 17.9699 12.8881 17.2219 12.8881C16.1073 12.8881 15.0586 13.2547 14.0759 13.9881L13.0859 11.7661C13.7166 11.3407 14.4499 10.9961 15.2859 10.7321C16.1219 10.4681 16.9799 10.3361 17.8599 10.3361ZM17.5519 22.7881C18.0653 22.7881 18.4759 22.9494 18.7839 23.2721C19.0919 23.5801 19.2459 23.9907 19.2459 24.5041C19.2459 25.0467 19.0919 25.4794 18.7839 25.8021C18.4759 26.1101 18.0653 26.2641 17.5519 26.2641C17.0386 26.2641 16.6279 26.1101 16.3199 25.8021C16.0119 25.4794 15.8579 25.0467 15.8579 24.5041C15.8579 23.9907 16.0119 23.5801 16.3199 23.2721C16.6279 22.9494 17.0386 22.7881 17.5519 22.7881Z`,
          }),
        ],
      });
}
var ys = `_5YxPcG58GcM-`,
  bs = `AYShSUpazpQ-`,
  xs = `HjTriTNInOs-`;
function Ss(e) {
  let {
      tabs: n,
      bDisableRouting: r,
      startingTab: a,
      controlledTab: o,
      OnTabChanged: s,
      classNameCtn: c,
      classNameTab: l,
      focusRingHasBorderRadius: u,
      classNameTabContent: d,
      preferredFocus: f,
      bVerticalTabs: p,
      bSticky: m,
      bChecklistMode: h,
    } = e,
    g = i(),
    _ = t(),
    [v, y] = (0, H.useState)(
      () => a || (!r && w(g, `tab`) ? (w(g, `tab`) ?? ``) : ``),
    );
  (0, H.useEffect)(() => {
    if (!e.bDisableRouting && g) {
      let e = w(g, `tab`);
      e && y(e);
    }
  }, [g, g.key, e.bDisableRouting, y]);
  let b = H.useCallback(
      (e) => {
        (y(e.key),
          r || ee(_, `tab`, e.key),
          s?.(e.key),
          e.onClick && e.onClick(e));
      },
      [r, _, s],
    ),
    x = n.filter((e) => !e.hidden);
  if (!x.length) return null;
  let S = o ?? v,
    C = x.find((e) => e.key === S) || x[0],
    T = f ? (a ?? x[0].key) : void 0,
    E = (0, U.jsxs)(U.Fragment, {
      children: [
        (0, U.jsx)(L, {
          className: M(
            ys,
            p && `iBLrw-7gAIM-`,
            h && `dLhmGXBhTkM-`,
            m && `ShXw34CXvuE-`,
            c,
          ),
          navEntryPreferPosition: f ? un.PREFERRED_CHILD : un.FIRST,
          children: x.map((e, t) =>
            (0, U.jsx)(
              Cs,
              {
                tab: e,
                OnTabClick: b,
                classNameTab: l,
                focusRingHasBorderRadius: u,
                active: e.key === C.key,
                preferredFocus: T === e.key,
              },
              e.key,
            ),
          ),
        }),
        C && (0, U.jsx)(L, { className: d, children: C.contents }),
      ],
    });
  return p ? (0, U.jsx)(L, { className: M(xs), children: E }) : E;
}
function Cs(e) {
  let {
    tab: t,
    OnTabClick: n,
    classNameTab: r,
    focusRingHasBorderRadius: i,
    active: a,
    preferredFocus: o,
  } = e;
  return (0, U.jsx)(Nn, {
    condition: !!(t.statusToolTip || t.tooltip),
    wrap: (e) =>
      (0, U.jsx)(ct, {
        toolTipContent: t.statusToolTip || t.tooltip,
        children: e,
      }),
    children: (0, U.jsxs)(L, {
      className: M(bs, a && `Tw-TchJW1T8-`, a && `ActiveTab`, r),
      onActivate: () => n(t),
      preferredFocus: o,
      focusRingHasBorderRadius: i,
      children: [
        !!t.vo_warning &&
          (0, U.jsx)(ct, {
            toolTipContent: t.vo_warning,
            children: (0, U.jsx)(`div`, {
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
var ws = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || Ot(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: j.readUint32, bw: z.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= ue(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return bn(e.M(), t, n);
    }
    static fromObject(t) {
      return Mt(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Tt(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      Wt(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Request`;
    }
  },
  Ts = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.frame_rates || Ot(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { frame_rates: { n: 1, c: Es, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= ue(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return bn(e.M(), t, n);
    }
    static fromObject(t) {
      return Mt(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Tt(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      Wt(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Response`;
    }
  },
  Es = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clusterid || Ot(e.M()),
        W.Message.initialize(this, t, 0, -1, [8], null));
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
              br: j.readUint64String,
              bw: z.writeUint64String,
            },
            report_days: { n: 4, br: j.readUint32, bw: z.writeUint32 },
            report_count: {
              n: 5,
              br: j.readUint64String,
              bw: z.writeUint64String,
            },
            mean_frame_rate: { n: 6, br: j.readDouble, bw: z.writeDouble },
            frame_rate_histogram: {
              n: 8,
              r: !0,
              q: !0,
              br: j.readDouble,
              pbr: j.readPackedDouble,
              bw: z.writeRepeatedDouble,
            },
            histogram_report_count: {
              n: 9,
              br: j.readUint64String,
              bw: z.writeUint64String,
            },
            last_updated: { n: 10, br: j.readUint32, bw: z.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= ue(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return bn(e.M(), t, n);
    }
    static fromObject(t) {
      return Mt(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Tt(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      Wt(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Response_FrameRate`;
    }
  },
  Ds;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `GamePerformanceStats.GetGameFrameRateStats#1`,
      Zt(ws, t, n),
      Ts,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`, `store`, `community`],
      },
    );
  }
  e.GetGameFrameRateStats = t;
})((Ds ||= {}));
function Os(e, t = !0) {
  return u({
    queryKey: [`GetControllersUsed`],
    queryFn: async () => {
      let e;
      try {
        let t = `${B.STORE_BASE_URL}account/ajaxgetcontrollersused`,
          n = await ar.default.get(t, { withCredentials: !0 });
        if (n?.status === 200 && n?.data?.success === 1) return n.data.data;
        e = De(n);
      } catch (t) {
        e = De(t);
      }
      return (console.error(`usePlayerHardwareUsed failed:`, e), null);
    },
    select: e,
    enabled: t && !!F.accountid,
  });
}
function ks(e) {
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
      ((d.onOptionsActionDescription = V.Localize(
        `#SteamDeckVerified_ViewDeveloperPost`,
      )),
      (d.onOptionsButton = u),
      (f = (0, U.jsx)(Fs, {
        blogURL: t.steam_deck_blog_url,
        eHWCompatibiltyDisplay: 1,
      })),
      (p = (0, U.jsx)(Fs, {
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
      l = (0, U.jsx)(Q, { category: t.resolved_category });
    return (
      c == 3
        ? ((e = V.Localize(
            `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
          )),
          (s = (0, U.jsx)(Gs, {
            id: r,
            category: t.machine_resolved_category,
            appName: i,
          })),
          (l = (0, U.jsx)(Q, { category: t.machine_resolved_category })))
        : c == 2
          ? ((e = V.Localize(
              `#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI`,
            )),
            (s = (0, U.jsx)(Ws, {
              id: r,
              category: t.steamos_resolved_category,
              appName: i,
            })),
            (l = (0, U.jsx)(Hs, { category: t.steamos_resolved_category })),
            (a = p))
          : c == 4
            ? ((e = V.Localize(
                `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
              )),
              (s = (0, U.jsx)(Ks, {
                id: r,
                category: t.frame_resolved_category,
                appName: i,
              })),
              (l = (0, U.jsx)(Q, { category: t.frame_resolved_category })))
            : ((e = V.Localize(
                `#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI`,
              )),
              (s = (0, U.jsx)(Us, {
                category: t.resolved_category,
                appName: i,
              })),
              (a = f)),
      (0, U.jsxs)(L, {
        autoFocus: o,
        focusableIfEmpty: o,
        noFocusRing: !0,
        className: fo,
        ...d,
        children: [
          (0, U.jsxs)(`div`, {
            id: n,
            className: co,
            children: [
              (0, U.jsx)(`div`, { className: lo, children: e }),
              (0, U.jsx)(`div`, { className: uo, children: l }),
            ],
          }),
          s,
          a,
          !1,
        ],
      })
    );
  }
  let m = Gt(t.resolved_category),
    h = xn(t.steamos_resolved_category),
    g = Gt(t.machine_resolved_category),
    _ = Gt(t.frame_resolved_category || 0);
  if (!l) {
    let t = null;
    switch (c) {
      case 3:
        t = (0, U.jsx)(Ns, { ...e });
        break;
      case 2:
      case 5:
        t = (0, U.jsx)(js, { ...e, deckBlogContent: p });
        break;
      case 4:
        t = (0, U.jsx)(Ps, { ...e });
        break;
      default:
        t = (0, U.jsx)(Ms, { ...e, deckBlogContent: f });
    }
    return (0, U.jsx)(A, { children: t });
  }
  let v = (e) =>
      window.sessionStorage.setItem(`steamdeckcompatibility`, `?tab=${e.key}`),
    y = [
      {
        name: (0, U.jsxs)(`div`, {
          className: Oo,
          children: [
            (0, U.jsx)(it, { className: Mo }),
            (0, U.jsx)(m, { className: ko }),
          ],
        }),
        key: `1`,
        contents: (0, U.jsx)(A, {
          children: (0, U.jsx)(Ms, { ...e, deckBlogContent: f }),
        }),
        onClick: v,
      },
      {
        name: (0, U.jsxs)(`div`, {
          className: Oo,
          children: [
            (0, U.jsx)(Ae, { className: Ao }),
            (0, U.jsx)(g, { className: ko }),
          ],
        }),
        key: `3`,
        contents: (0, U.jsx)(A, { children: (0, U.jsx)(Ns, { ...e }) }),
        onClick: v,
      },
      {
        name: (0, U.jsxs)(`div`, {
          className: Oo,
          children: [`steamos`, (0, U.jsx)(h, { className: ko })],
        }),
        key: `2`,
        contents: (0, U.jsx)(A, {
          children: (0, U.jsx)(js, { ...e, deckBlogContent: p }),
        }),
        onClick: v,
      },
      {
        name: (0, U.jsxs)(`div`, {
          className: Oo,
          children: [
            (0, U.jsx)(me, { className: jo }),
            (0, U.jsx)(_, { className: ko }),
          ],
        }),
        key: `4`,
        contents: (0, U.jsx)(A, { children: (0, U.jsx)(Ps, { ...e }) }),
        onClick: v,
      },
    ];
  return (0, U.jsx)(Ss, {
    tabs: y,
    classNameCtn: Do,
    classNameTabContent: Eo,
    startingTab: c.toString(),
    preferredFocus: !0,
    bDisableRouting: !0,
    focusRingHasBorderRadius: !0,
  });
}
function As(e) {
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
    [l, u] = H.useState(!1),
    d = H.useCallback(() => l, [l]),
    f = H.useRef(null);
  In();
  let p = i ?? {};
  return (
    H.useEffect(() => {
      f?.current?.scrollHeight !== void 0 &&
        f?.current?.clientHeight !== void 0 &&
        u(f?.current?.scrollHeight > f?.current?.clientHeight);
    }, []),
    (0, U.jsxs)(L, {
      className: fo,
      ...p,
      children: [
        (0, U.jsxs)(`div`, {
          children: [
            (0, U.jsxs)(`div`, {
              id: t,
              className: co,
              children: [
                (0, U.jsx)(`div`, { className: lo, children: n }),
                (0, U.jsx)(`div`, { className: uo, children: a }),
              ],
            }),
            o,
          ],
        }),
        s,
        (0, U.jsx)(Dn, {
          ref: f,
          className: d() ? mo : po,
          children: (0, U.jsx)(L, {
            autoFocus: r,
            focusableIfEmpty: r || d(),
            noFocusRing: !0,
            children: c,
          }),
        }),
      ],
    })
  );
}
function js(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a =
      r.steamos_resolved_items &&
      r.steamos_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, U.jsx)(Ws, {
      id: n,
      category: r.steamos_resolved_category ?? 0,
      appName: i,
    }),
    s = (0, U.jsx)(Hs, { category: r.steamos_resolved_category }),
    c = r.steamos_resolved_items && r.steamos_resolved_items?.length > 0;
  return (0, U.jsx)(As, {
    titleId: t,
    title: V.Localize(
      `#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    ratingIcon: s,
    ratingSummary: o,
    ...e,
    children: (0, U.jsxs)(U.Fragment, {
      children: [
        c && (0, U.jsx)(`div`, { className: `BlWeoXRF0aE-` }),
        r.steamos_resolved_items &&
          r.steamos_resolved_items
            .filter((e) => e.display_type != 1)
            .map((e) =>
              (0, U.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, U.jsx)(Ls, { displaytype: e.display_type }),
                    (0, U.jsx)(`span`, { children: V.Localize(e.loc_token) }),
                  ],
                },
                e.loc_token + e.display_type,
              ),
            ),
        a &&
          (0, U.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: r.steamos_resolved_items
              ?.filter((e) => e.display_type == 1)
              .map((e) =>
                (0, U.jsxs)(
                  `div`,
                  {
                    className: `-vnBPYbU1nw-`,
                    children: [
                      (0, U.jsx)(Ls, { displaytype: e.display_type }),
                      (0, U.jsx)(`span`, { children: V.Localize(e.loc_token) }),
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
function Ms(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, U.jsx)(Us, { id: n, category: r.resolved_category, appName: i }),
    s = (0, U.jsx)(Q, { category: r.resolved_category }),
    c = r.resolved_items && r.resolved_items?.length > 0;
  return (0, U.jsx)(As, {
    titleId: t,
    title: V.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI`),
    ratingIcon: s,
    ratingSummary: o,
    ...e,
    children: (0, U.jsxs)(U.Fragment, {
      children: [
        c && (0, U.jsx)(`div`, { className: `BlWeoXRF0aE-` }),
        r.resolved_items &&
          r.resolved_items
            .filter((e) => e.display_type !== 1)
            .map((e) =>
              (0, U.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, U.jsx)(Is, { displaytype: e.display_type }),
                    (0, U.jsx)(`span`, {
                      children:
                        e.loc_token.charAt(0) == `#`
                          ? V.Localize(e.loc_token)
                          : V.Localize(`#` + e.loc_token),
                    }),
                  ],
                },
                e.loc_token + e.display_type,
              ),
            ),
        a &&
          r.resolved_items &&
          (0, U.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: r.resolved_items
              .filter((e) => e.display_type == 1)
              .map((e) =>
                (0, U.jsx)(
                  `div`,
                  {
                    className: `_00kSG69QbjI-`,
                    children: (0, U.jsx)(`span`, {
                      children: V.Localize(e.loc_token),
                    }),
                  },
                  e.loc_token + e.display_type,
                ),
              ),
          }),
        !1,
      ],
    }),
  });
}
function Ns(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.machine_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, U.jsx)(Gs, {
      id: n,
      category: r.machine_resolved_category,
      appName: i,
    }),
    s = (0, U.jsx)(Q, { category: r.machine_resolved_category }),
    c = r.machine_resolved_items && r.machine_resolved_items?.length > 0;
  return (0, U.jsx)(As, {
    titleId: t,
    title: V.Localize(
      `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    ratingIcon: s,
    ratingSummary: o,
    ...e,
    children: (0, U.jsxs)(U.Fragment, {
      children: [
        c && (0, U.jsx)(`div`, { className: `BlWeoXRF0aE-` }),
        r.machine_resolved_items &&
          r.machine_resolved_items
            .filter((e) => e.display_type !== 1)
            .map((e) =>
              (0, U.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, U.jsx)(Is, { displaytype: e.display_type }),
                    (0, U.jsx)(`span`, { children: V.Localize(e.loc_token) }),
                  ],
                },
                e.loc_token + e.display_type,
              ),
            ),
        a &&
          r.machine_resolved_items &&
          (0, U.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: r.machine_resolved_items
              .filter((e) => e.display_type == 1)
              .map((e) =>
                (0, U.jsx)(
                  `div`,
                  {
                    className: `_00kSG69QbjI-`,
                    children: (0, U.jsx)(`span`, {
                      children: V.Localize(e.loc_token),
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
function Ps(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.frame_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, U.jsx)(Ks, {
      id: n,
      category: r.frame_resolved_category ?? 0,
      appName: i,
    }),
    s = (0, U.jsx)(Q, { category: r.frame_resolved_category ?? 0 }),
    c = r.frame_resolved_items && r.frame_resolved_items?.length > 0;
  return (0, U.jsx)(As, {
    titleId: t,
    title: V.Localize(
      `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    ratingIcon: s,
    ratingSummary: o,
    ...e,
    children: (0, U.jsxs)(U.Fragment, {
      children: [
        c && (0, U.jsx)(`div`, { className: `BlWeoXRF0aE-` }),
        r.frame_resolved_items &&
          r.frame_resolved_items
            .filter((e) => e.display_type !== 1)
            .map((e) =>
              (0, U.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, U.jsx)(Is, { displaytype: e.display_type }),
                    (0, U.jsx)(`span`, { children: V.Localize(e.loc_token) }),
                  ],
                },
                e.loc_token + e.display_type,
              ),
            ),
        a &&
          r.frame_resolved_items &&
          (0, U.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: r.frame_resolved_items
              .filter((e) => e.display_type == 1)
              .map((e) =>
                (0, U.jsx)(
                  `div`,
                  {
                    className: `_00kSG69QbjI-`,
                    children: (0, U.jsx)(`span`, {
                      children: V.Localize(e.loc_token),
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
function Fs(e) {
  let { blogURL: t, eHWCompatibiltyDisplay: n } = e,
    r = In();
  if (!t) return null;
  if (r) {
    let e =
      n == 2
        ? V.Localize(`#SteamOS_DescriptionHeader_DeveloperBlog`)
        : V.Localize(`#SteamDeckVerified_DescriptionHeader_DeveloperBlog`);
    return (0, U.jsxs)(`div`, {
      className: Y,
      children: [
        e,
        (0, U.jsx)(`div`, {
          className: xo,
          children: (0, U.jsx)(Uo, { button: q.Y, type: zo.Knockout }),
        }),
      ],
    });
  }
  let i =
    n == 2
      ? V.Localize(`#SteamOS_DescriptionHeader_DeveloperBlog_Desktop`)
      : V.Localize(
          `#SteamDeckVerified_DescriptionHeader_DeveloperBlog_Desktop`,
        );
  return (0, U.jsxs)(`div`, {
    className: Y,
    children: [
      i,
      (0, U.jsx)(`a`, {
        href: t,
        className: ao,
        children: V.Localize(`#SteamDeckVerified_ViewDeveloperPost`),
      }),
    ],
  });
}
function Is(e) {
  let { displaytype: t } = e;
  switch (t) {
    case 4:
      return (0, U.jsx)(lt, { className: bo });
    case 3:
      return (0, U.jsx)(Ee, { className: bo });
    case 2:
      return (0, U.jsx)(Ge, { className: bo });
    case 0:
      return (0, U.jsx)(Fe, { className: bo });
    case 1:
      return null;
  }
}
function Ls(e) {
  let { displaytype: t } = e;
  switch (t) {
    case 3:
      return (0, U.jsx)(Ct, { className: bo });
    case 1:
      return (0, U.jsx)(gt, { className: bo });
    default:
      return null;
  }
}
function Rs(e) {
  let { id: t, compatibility: n, onShowDialog: r } = e,
    { data: i } = R(t),
    { data: a } = St(t),
    [o, s, c] = he();
  if (!i || !a || i.item_type !== 0) return null;
  let l = null,
    u = null;
  if (n == 4) {
    let e = a.steam_frame_compat_category || 0;
    ((l = (0, U.jsx)(hn, { category: e })),
      (u = V.Localize(
        `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
      )));
  } else if (n == 3) {
    let e = a.steam_machine_compat_category || 0;
    ((l = (0, U.jsx)(ln, { category: e })),
      (u = V.Localize(
        `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
      )));
  } else {
    let e = a.steam_deck_compat_category || 0;
    ((l = (0, U.jsx)(sn, { category: e })),
      (u = V.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_Desktop`)));
  }
  return (0, U.jsxs)(`div`, {
    className: M(oo, `LearnMoreCtn`),
    children: [
      l,
      (0, U.jsx)(on, {
        onClick: (e) => {
          (e.preventDefault(), (r ?? s)());
        },
        children: (0, U.jsx)(`span`, { className: so, children: u }),
      }),
      !r &&
        (0, U.jsx)(zs, {
          nAppID: i.appid,
          appName: i.name,
          active: o,
          startingTab: n,
          closeModal: c,
        }),
    ],
  });
}
function zs(e) {
  let { nAppID: t, active: n, appName: r, startingTab: i, closeModal: a } = e;
  return (0, U.jsx)(dn, {
    active: n,
    children: (0, U.jsx)(Vs, {
      nAppID: t,
      appName: r,
      startingTab: i,
      closeModal: a,
    }),
  });
}
function Bs(e) {
  let { url: t, containerClass: n, bIncludeIcon: r, onOpenBlogPost: i } = e;
  return (0, U.jsxs)(on, {
    className: n,
    onClick: () => {
      i ? i() : t && (window.location.href = t);
    },
    children: [
      r && (0, U.jsx)(`div`, { className: `PJ-pfpmq-JI-` }),
      (0, U.jsx)(`div`, {
        className: r ? To : wo,
        children: V.Localize(
          `#SteamDeckVerified_Store_CompatSection_DeveloperComments`,
        ),
      }),
    ],
  });
}
function Vs(e) {
  let { nAppID: t, appName: n, startingTab: r, closeModal: i } = e,
    a = Za(t),
    o = H.useId();
  return (0, U.jsx)(en, {
    "aria-labelledby": o,
    modalClassName: `DeckVerifiedModalDialog`,
    closeModal: i,
    onCancel: i,
    children: (0, U.jsx)(ce, {
      children: (0, U.jsx)(L, {
        focusable: !1,
        "flow-children": `column`,
        children: a
          ? (0, U.jsx)(ks, {
              titleId: o,
              appName: n,
              results: a,
              eStartingTab: r,
            })
          : (0, U.jsx)(T, {
              size: `medium`,
              position: `center`,
              string: V.Localize(`#Loading`),
            }),
      }),
    }),
  });
}
function Q(e) {
  let { category: t } = e;
  switch (t) {
    case 3:
      return (0, U.jsx)(lt, { className: J, role: `presentation` });
    case 2:
      return (0, U.jsx)(Ee, { className: J, role: `presentation` });
    case 1:
      return (0, U.jsx)(Ge, { className: J, role: `presentation` });
    default:
      return (0, U.jsx)(Fe, { className: J, role: `presentation` });
  }
}
function Hs(e) {
  let { category: t } = e;
  switch (t) {
    case 2:
      return (0, U.jsx)(Ct, { className: J, role: `presentation` });
    case 1:
      return (0, U.jsx)(Ge, { className: J, role: `presentation` });
    default:
      return (0, U.jsx)(Fe, { className: J, role: `presentation` });
  }
}
function Us(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, U.jsx)(`div`, {
      id: t,
      className: Y,
      children: r
        ? V.LocalizeReact(
            `#SteamDeckVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, U.jsx)(`b`, { children: E(r) }),
          )
        : V.Localize(`#SteamDeckVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamDeckVerified_DescriptionHeader_Verified`), (o = ho));
      break;
    case 2:
      ((a = `#SteamDeckVerified_DescriptionHeader_Playable`), (o = go));
      break;
    case 1:
      ((a = `#SteamDeckVerified_DescriptionHeader_Unsupported`), (o = _o));
  }
  let s = (0, U.jsx)(`span`, { className: o, children: V.Localize(qs(n)) }),
    c = (0, U.jsx)(`span`, { className: Y, children: V.Localize(i || a) }),
    l = r
      ? V.LocalizeReact(
          `#SteamDeckVerified_DescriptionHeader_WithAppName`,
          (0, U.jsx)(`b`, { children: E(r) }),
          s,
          c,
        )
      : V.LocalizeReact(`#SteamDeckVerified_DescriptionHeader`, s, c);
  return (0, U.jsx)(`div`, { id: t, className: Y, children: l });
}
function Ws(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, U.jsx)(`div`, {
      className: Y,
      children: r
        ? V.LocalizeReact(
            `#SteamOSCompatibility_DescriptionHeader_Unknown_WithAppName`,
            (0, U.jsx)(`b`, { children: E(r) }),
          )
        : V.Localize(`#SteamOSCompatibility_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 2:
      ((a = `#SteamOSCompatibility_DescriptionHeader_Compatible`), (o = vo));
      break;
    case 1:
      ((a = `#SteamOSCompatibility_DescriptionHeader_Unsupported`), (o = _o));
  }
  let s = (0, U.jsx)(`span`, { className: o, children: V.Localize(Js(n)) }),
    c = (0, U.jsx)(`span`, { className: Y, children: V.Localize(i || a) }),
    l = r
      ? V.LocalizeReact(
          `#SteamOSCompatibility_DescriptionHeader_WithAppName`,
          (0, U.jsx)(`b`, { children: E(r) }),
          s,
          c,
        )
      : V.LocalizeReact(`#SteamOSCompatibility_DescriptionHeader`, s, c);
  return (0, U.jsx)(`div`, { id: t, className: Y, children: l });
}
function Gs(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, U.jsx)(`div`, {
      className: Y,
      children: r
        ? V.LocalizeReact(
            `#SteamMachineVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, U.jsx)(`b`, { children: E(r) }),
          )
        : V.Localize(`#SteamMachineVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamMachineVerified_DescriptionHeader_Verified`), (o = ho));
      break;
    case 2:
      ((a = `#SteamMachineVerified_DescriptionHeader_Playable`), (o = go));
      break;
    case 1:
      ((a = `#SteamMachineVerified_DescriptionHeader_Unsupported`), (o = _o));
  }
  let s = (0, U.jsx)(`span`, { className: o, children: V.Localize(qs(n)) }),
    c = (0, U.jsx)(`span`, { className: Y, children: V.Localize(i || a) }),
    l = r
      ? V.LocalizeReact(
          `#SteamMachineVerified_DescriptionHeader_WithAppName`,
          (0, U.jsx)(`b`, { children: E(r) }),
          s,
          c,
        )
      : V.LocalizeReact(`#SteamMachineVerified_DescriptionHeader`, s, c);
  return (0, U.jsx)(`div`, { id: t, className: Y, children: l });
}
function Ks(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, U.jsx)(`div`, {
      className: Y,
      children: r
        ? V.LocalizeReact(
            `#SteamFrameVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, U.jsx)(`b`, { children: E(r) }),
          )
        : V.Localize(`#SteamFrameVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamFrameVerified_DescriptionHeader_Verified`), (o = ho));
      break;
    case 2:
      ((a = `#SteamFrameVerified_DescriptionHeader_Playable`), (o = go));
      break;
    case 1:
      ((a = `#SteamFrameVerified_DescriptionHeader_Unsupported`), (o = _o));
  }
  let s = (0, U.jsx)(`span`, { className: o, children: V.Localize(qs(n)) }),
    c = (0, U.jsx)(`span`, { className: Y, children: V.Localize(i || a) }),
    l = r
      ? V.LocalizeReact(
          `#SteamFrameVerified_DescriptionHeader_WithAppName`,
          (0, U.jsx)(`b`, { children: E(r) }),
          s,
          c,
        )
      : V.LocalizeReact(`#SteamFrameVerified_DescriptionHeader`, s, c);
  return (0, U.jsx)(`div`, { id: t, className: Y, children: l });
}
function qs(e) {
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
function Js(e) {
  switch (e) {
    case 2:
      return `#SteamOSCompatibility_Category_Compatible`;
    case 1:
      return `#SteamOSCompatibility_Category_Unsupported`;
    default:
      return `#SteamOSCompatibility_Category_Unknown`;
  }
}
function Ys(e) {
  return e == 2 ? `bundle` : e == 1 ? `sub` : `app`;
}
function Xs(e, t) {
  let n = t || +!!e;
  return [!!n, n];
}
var Zs = (e) => {
  let { appid: t } = e,
    n = (0, U.jsx)(`div`, {
      className: `ImpressionTrackedElement`,
      children: e.children,
    });
  return t ? (0, U.jsx)(le, { appID: t, children: n }) : n;
};
function Qs(e) {
  let { id: t } = e,
    { data: n } = Ne(t);
  return n
    ? (0, U.jsx)(`div`, {
        className: Oa,
        children: (0, U.jsx)(`div`, {
          className: ka,
          children: n
            .slice(0, 10)
            .filter((e) => e.tagid)
            .map((e) =>
              (0, U.jsx)(
                Gu,
                { tagid: e.tagid, className: Aa },
                `tag_` + e.tagid,
              ),
            ),
        }),
      })
    : null;
}
function $s(e) {
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
    g = _u(),
    _ =
      d &&
      (() => {
        (g?.(), d());
      }),
    [v, y] = (0, H.useState)(!1),
    [b, x] = (0, H.useState)(``),
    S = (e) => x(`translateY( -${e?.clientHeight || 0}px )`),
    { data: C } = R(t),
    { data: ee } = An(n),
    w = !f && !o && !a,
    T = C && C.item_type == 0,
    [E, D] = Xs(l, u);
  return (0, U.jsxs)(`div`, {
    className: Ca,
    style: { transform: s && v ? b : `` },
    onMouseEnter: () => y(!0),
    onFocus: () => y(!0),
    onMouseLeave: () => y(!1),
    onBlur: () => y(!1),
    children: [
      (0, U.jsxs)(`a`, {
        href: i,
        className: va,
        onClick: (e) => {
          m && e.preventDefault();
        },
        "aria-disabled": m,
        children: [
          ee &&
            (0, U.jsx)(`div`, {
              className: `JsLUT-ZChQQ-`,
              children: (0, U.jsx)(`div`, {
                className: M(`-G728TP4qEc-`, `AWrycDVaY80-`),
                children: (0, U.jsx)(`img`, {
                  loading: `lazy`,
                  src: On(ee, `header`),
                  alt: C?.name,
                }),
              }),
            }),
          !c &&
            !f &&
            (0, U.jsx)(`div`, {
              className: `Er5Gw2jrA3A-`,
              children: (0, U.jsx)(dc, { id: t, onlyOneDiscountPct: !0 }),
            }),
        ],
      }),
      (0, U.jsx)(`div`, {
        className: wa,
        ref: S,
        children: (0, U.jsxs)(`div`, {
          className: Ea,
          children: [
            (0, U.jsx)(`a`, {
              href: i,
              onClick: (e) => {
                m && e.preventDefault();
              },
              "aria-disabled": m,
              children: (0, U.jsx)(`div`, {
                className: Da,
                children: C?.name || r,
              }),
            }),
            h && (0, U.jsx)(tc, { id: t }),
            (0, U.jsx)(Qs, { id: t }),
            !E && (0, U.jsx)(Va, { id: t }),
            !(E || !w) &&
              (0, U.jsxs)(`div`, {
                className: `N6R56w3oY8s-`,
                children: [
                  (0, U.jsx)(ic, { id: t, strClassName: `aRGldfNGEPM-` }),
                  (0, U.jsx)(ec, { id: t }),
                ],
              }),
            o && (0, U.jsx)(Jc, { id: t, className: `mVkwv5PYwMg-` }),
            !!(E && T) &&
              (0, U.jsx)(Rs, { id: t, compatibility: D, onShowDialog: _ }),
            !!a && a,
            f &&
              T &&
              t &&
              `appid` in t &&
              t.appid &&
              (0, U.jsx)(Oc, { appid: t.appid, bIsMuted: !1 }),
            p && (0, U.jsx)(Jl, { nCreatorAccountID: p }),
          ],
        }),
      }),
    ],
  });
}
function ec(e) {
  let { id: t } = e,
    { data: n } = Ie(t);
  if (!n) return null;
  let r = aa(n);
  return (0, U.jsx)(`div`, { className: ja, children: r });
}
function tc(e) {
  let { id: t } = e,
    { data: n } = we(t);
  return n
    ? (0, U.jsx)(`div`, { className: Ta, children: n?.short_description })
    : null;
}
function nc(e) {
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
    { data: l } = _t(t),
    { data: u } = ut(t),
    d = l === void 0 && u === void 0,
    [f] = Xs(!!a, o);
  return (0, U.jsxs)(`div`, {
    className: M(pa, d && `dNo27dzDPfI-`, ui, i && `djLCJl8FKv8-`),
    children: [
      (0, U.jsxs)(`a`, {
        href: r,
        className: ma,
        children: [
          !(!s || f) && (0, U.jsx)(Xa, { id: n, snr: e.strSNR }),
          !(!c || f) && (0, U.jsx)(dl, { id: n, snr: e.strSNR }),
          t && (0, U.jsx)(au, { id: t }),
        ],
      }),
      (0, U.jsx)($s, { ...e }),
    ],
  });
}
function rc(e) {
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
    { data: y } = R(t),
    b = In(),
    [x, S, C] = he(),
    { strStoreURL: ee, snr: w } = kc(y, o);
  if ((!y && !n) || b) return (0, U.jsx)(U.Fragment, { children: u });
  let T = t;
  y &&
    y.item_type == 1 &&
    y.included_appids?.length == 1 &&
    (T = { appid: y.included_appids[0] });
  let E = xu() == `hiding`,
    D = r || !y ? void 0 : ee,
    [, te] = Xs(p, m),
    ne;
  te != 0 && y?.appid && y?.item_type == 0 && (ne = y.appid);
  let re = (0, U.jsx)(nc, {
      id: t,
      displayID: T,
      name: n,
      bPreventNavigation: r,
      strStoreUrl: D,
      elElementToAppend: i,
      bShowDemoButton: a,
      bShowDeckCompatibilityDialog: p,
      eHardwareCompatibilityDisplay: m,
      bHideBottomHalf: E,
      bHidePrice: s,
      bUseSubscriptionLayout: c,
      strSNR: w,
      nCreatorAccountID: d,
      bShowWishlistButton: h,
      bShowIgnoreButton: g,
      bShowDescription: _,
      onShowDeckCompatibilityDialog: ne ? S : void 0,
    }),
    ie = D ? (0, U.jsx)(`a`, { href: D, children: u }) : u;
  return (0, U.jsxs)(U.Fragment, {
    children: [
      (0, U.jsx)(vu, {
        hoverContent: re,
        nWidthMultiplier: f,
        ...v,
        children: ie,
      }),
      ne &&
        (0, U.jsx)(zs, {
          nAppID: ne,
          appName: y?.name || n,
          startingTab: te,
          active: x,
          closeModal: C,
        }),
    ],
  });
}
function ic(e) {
  let { id: t, strClassName: n, bMinimizePlatforms: r, bHideWindows: i } = e,
    { data: a } = St(t);
  if (!a) return null;
  if (r) {
    let e = i
      ? null
      : a?.windows &&
        (0, U.jsx)(`span`, {
          title: V.Localize(`#Platform_Windows`),
          children: (0, U.jsx)(rn, {
            "aria-label": V.Localize(`#Platform_Windows`),
          }),
        });
    return (
      k.PLATFORM === `linux` && a?.steamos_linux
        ? (e = (0, U.jsx)(`span`, {
            title: V.Localize(`#Platform_Linux`),
            children: (0, U.jsx)(yt, {
              "aria-label": V.Localize(`#Platform_Linux`),
            }),
          }))
        : k.PLATFORM === `macos` && a?.mac
          ? (e = (0, U.jsx)(`span`, {
              title: V.Localize(`#Platform_Mac`),
              children: (0, U.jsx)(Xe, {
                "aria-label": V.Localize(`#Platform_Mac`),
              }),
            }))
          : a.vr_support?.vrhmd &&
            (e = (0, U.jsx)(`span`, {
              title: V.Localize(`#Platform_VR`),
              children: (0, U.jsx)(Rt, {
                "aria-label": V.Localize(`#Platform_VR`),
              }),
            })),
      e ? (0, U.jsx)(`span`, { className: M(br, n), children: e }) : null
    );
  }
  return (0, U.jsxs)(`span`, {
    className: M(br, n),
    children: [
      !i &&
        a.windows &&
        (0, U.jsx)(`span`, {
          title: V.Localize(`#Platform_Windows`),
          children: (0, U.jsx)(rn, {
            "aria-label": V.Localize(`#Platform_Windows`),
          }),
        }),
      a.mac &&
        (0, U.jsx)(`span`, {
          title: V.Localize(`#Platform_Mac`),
          children: (0, U.jsx)(Xe, {
            "aria-label": V.Localize(`#Platform_Mac`),
          }),
        }),
      a.steamos_linux &&
        (0, U.jsx)(`span`, {
          title: V.Localize(`#Platform_Linux`),
          children: (0, U.jsx)(yt, {
            "aria-label": V.Localize(`#Platform_Linux`),
          }),
        }),
      a.vr_support?.vrhmd &&
        (0, U.jsx)(`span`, {
          title: V.Localize(`#Platform_VR`),
          children: (0, U.jsx)(Rt, {
            "aria-label": V.Localize(`#Platform_VR`),
          }),
        }),
    ],
  });
}
function ac(e) {
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
var oc = {
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
  sc = {
    strSymbol: ``,
    bSuffixSymbol: !1,
    bSpaceForSymbol: !1,
    bWholeUnitsOnly: !1,
    eCurrency: 0,
    strDecimalSymbol: `.`,
    strThousandsSeparator: `,`,
  };
function cc(e) {
  return { ...sc, ...oc[e], eCurrency: e };
}
function lc(e, t) {
  return uc(e, cc(t));
}
function uc(e, t) {
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
function dc(e) {
  let { id: t, bSelfPurchaseOption: n } = e,
    { data: r } = xe(t),
    { data: i } = R(t);
  if (!i) return null;
  let a = n && i.item_type == 1 ? i.self_purchase_option : r;
  return (0, U.jsx)(fc, { purchaseOption: a, ...e });
}
function fc(e) {
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
    g = k.NOW,
    { data: _ } = Ie(r),
    { data: v } = R(r);
  if (!v) return null;
  let y = i,
    b = !m && ca(_, g),
    x = M({
      [Mr]: !0,
      [ii]: t,
      StoreSalePriceWidgetContainer: !0,
      [ci]: b,
      [vr]: c,
      [l ?? ``]: !!l,
    });
  if (e.bShowInLibrary)
    return (0, U.jsx)(`div`, {
      className: x,
      children: (0, U.jsx)(`div`, {
        className: G,
        children: V.Localize(`#EventDisplay_CallToAction_InLibrary`),
      }),
    });
  if (_ && _.is_coming_soon && (!y || (!y.packageid && !y.bundleid))) {
    if (o) return null;
    let e =
      _.coming_soon_display &&
      [`text_comingsoon`, `text_tba`].includes(_.coming_soon_display)
        ? ot(_)
        : V.Localize(`#EventDisplay_CallToAction_ComingSoon_Date`, aa(_));
    return (0, U.jsx)(`div`, {
      className: x,
      children: (0, U.jsx)(`div`, { className: G, children: e }),
    });
  }
  if (v.is_free) {
    if (!v.is_free_temporarily)
      return v.item_type == 0 && v.type == 1
        ? s
          ? null
          : (0, U.jsxs)(`div`, {
              className: x,
              children: [
                b &&
                  (0, U.jsx)(`div`, {
                    className: `eNdjZ1XB-fk-`,
                    children: V.Localize(`#Flag_New`),
                  }),
                (0, U.jsx)(`div`, {
                  className: G,
                  children: V.Localize(`#EventDisplay_CallToAction_FreeDemo`),
                }),
              ],
            })
        : (0, U.jsxs)(`div`, {
            className: x,
            children: [
              b &&
                (0, U.jsx)(`div`, {
                  className: `eNdjZ1XB-fk-`,
                  children: V.Localize(`#Flag_New`),
                }),
              (0, U.jsx)(`div`, {
                className: G,
                children: V.Localize(`#EventDisplay_CallToAction_FreeToPlay`),
              }),
            ],
          });
    if (y && y.is_free_to_keep && !y.formatted_original_price)
      return (0, U.jsx)(`div`, {
        className: x,
        children: (0, U.jsx)(`div`, {
          className: G,
          children: V.Localize(`#EventDisplay_CallToAction_Free`),
        }),
      });
  }
  if (!y || !y.formatted_final_price) return null;
  let S = v.item_type == 2,
    C = jt(y),
    ee = !!C && !C.nSupersededBundlePct,
    w = C?.nSupersededBundlePct ? C.nDiscountPct : y.discount_pct || 0,
    T = ((C || S) && (!n || ee || (C && !t)) && y.bundle_discount_pct) || 0,
    E = y.formatted_final_price;
  if (f) {
    let e = { ...cc(ac(O.country_code.toUpperCase())), bWholeUnitsOnly: !0 };
    E = uc(Number.parseInt(y.final_price_in_cents || `0`), e);
  }
  let D = la(_, y);
  return (0, U.jsx)(pc, {
    bSingleLineMode: !!t,
    bBundleItem: S,
    nBaseDiscountPercentage: T,
    nDiscountPercentage: w,
    bIsPrePurchase: D,
    strBestPurchaseOriginalPriceFormatted:
      C?.strOriginalPrice || y.formatted_original_price || ``,
    strBestPurchasePriceFormatted: E,
    bHideDiscountPercentForCompliance: !!y.hide_discount_pct_for_compliance,
    bShowNewFlag: b,
    bHidePrePurchase: !!a,
    bPrePurchaseBesidePrice: h,
    strDiscountAndPriceClassName: u,
    strPriceFormattedClassName: d,
    bPurchaseOptionDisplay: c,
  });
}
function pc(e) {
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
      ? V.Localize(`#Discount_ARIA_Label_SpecialPrice`, a)
      : V.Localize(`#Discount_ARIA_Label`, n, a, o));
  let _ = !((!n && !i) || h) && !!a,
    v = !(!i || !n || h || t),
    y = V.Localize(st(!!i, !!n, !!m));
  return (0, U.jsxs)(`div`, {
    className: M({
      [Mr]: !0,
      [ii]: t,
      StoreSalePriceWidgetContainer: !0,
      [ni]: !!n,
      Discounted: !!n,
      [si]: !!r,
      [fi]: !!u,
      [ci]: !!c,
      [vr]: p,
      [d ?? ``]: !!d,
    }),
    "aria-label": g,
    children: [
      !(!r || l) &&
        (0, U.jsx)(`div`, {
          className: M(`DfwzMU92EL4-`, `StoreSalePrepurchaseLabel`),
          children: (0, U.jsxs)(`span`, {
            children: [
              (0, U.jsx)(At, {}),
              V.Localize(`#EventDisplay_CallToAction_Prepurchase_Short`),
            ],
          }),
        }),
      !(r || !c) &&
        (0, U.jsx)(`div`, {
          className: `eNdjZ1XB-fk-`,
          children: V.Localize(`#Flag_New`),
        }),
      v &&
        (0, U.jsx)(We, {
          toolTipContent: y,
          children: (0, U.jsxs)(`span`, {
            className: M(`kjiBcsaqA8o-`, `_3jMC2e33p3s-`),
            children: [
              (0, U.jsx)(`span`, {
                className: `cCmCiA6FCMc-`,
                children: `-${i}%`,
              }),
              `-${n}%`,
            ],
          }),
        }),
      !(!i || h || v) &&
        (0, U.jsxs)(U.Fragment, {
          children: [
            (0, U.jsx)(We, {
              toolTipContent: y,
              children: (0, U.jsx)(`span`, {
                className: M(`_-1f811oo4iw-`),
                children: `-${i}%`,
              }),
            }),
            !!n &&
              (0, U.jsx)(We, {
                toolTipContent: y,
                children: (0, U.jsx)(`span`, {
                  className: M(`kjiBcsaqA8o-`),
                  children: `-${n}%`,
                }),
              }),
          ],
        }),
      !(i || !n || h) &&
        (0, U.jsx)(We, {
          toolTipContent: y,
          children: (0, U.jsx)(`div`, {
            className: M(`kjiBcsaqA8o-`, `StoreSaleDiscountBox`),
            children: `-${n}%`,
          }),
        }),
      !!(n && h) &&
        (0, U.jsx)(`div`, {
          className: `NqZ9uMSo13A-`,
          children: (0, U.jsx)(Ye, {}),
        }),
      _
        ? (0, U.jsxs)(`div`, {
            className: M(ai),
            children: [
              (0, U.jsx)(`div`, {
                className: M({ [di]: t, [oi]: !t }),
                children: a,
              }),
              (0, U.jsx)(`div`, {
                className: M({ [G]: !0, [ii]: t, [f ?? ``]: !!f }),
                children: o,
              }),
            ],
          })
        : (0, U.jsx)(`div`, {
            className: M({ [G]: !0, [f ?? ``]: !!f }),
            children: o,
          }),
    ],
  });
}
var mc = `pE3kiYj-T9c-`,
  hc = `bXqn3-4kGc8-`,
  gc = `bNGFzJt9CmI-`,
  _c = `vE1beFyJ7fE-`,
  vc = `jLH2MgXW2QA-`,
  yc = `dGNTZWr-al8-`,
  bc = `_8aFotqvmohI-`,
  xc = `sjibpkgu4sc-`,
  Sc = `I09IQjtbMSg-`,
  Cc = `C4-YRfvAL7Q-`;
async function wc(e, t) {
  let n = `steam://run/` + e;
  B.IN_CLIENT
    ? (console.log(`Running game ${e} locally.`), (window.location.href = n))
    : (console.log(
        `Cannot identify local client. Prompting user to launch ${e}.`,
      ),
      Ec(e, n, t));
}
async function Tc(e, t) {
  let n = `steam://install/` + e;
  B.IN_CLIENT ? (window.location.href = n) : Ec(e, n, t);
}
async function Ec(e, t, n) {
  console.log(`prompting for`, n);
  let r = B.STORE_BASE_URL + `about/`;
  fe(
    (0, U.jsx)(Dc, {
      appid: e,
      strGameName: n || ``,
      strOnOKUrl: t,
      strDownloadSteamUrl: r,
    }),
    window,
  );
}
var Dc = (e) => {
  let t = () => e.closeModal && e.closeModal();
  return (0, U.jsx)(Qe, {
    onEscKeypress: t,
    className: mc,
    children: (0, U.jsxs)($t, {
      children: [
        (0, U.jsxs)(vn, { children: [` `, N(`#GotSteam_Title`), ` `] }),
        (0, U.jsxs)(ce, {
          children: [
            (0, U.jsx)(Cn, {
              children: Be(
                `#GotSteam_PromptWithDownloadLink`,
                (0, U.jsx)(`a`, {
                  href: e.strDownloadSteamUrl,
                  className: hc,
                  children: N(`#GotSteam_DownloadLinkText`),
                }),
                (0, U.jsx)(`span`, { className: gc, children: e.strGameName }),
              ),
            }),
            (0, U.jsxs)(`div`, {
              className: _c,
              children: [
                (0, U.jsxs)(`a`, {
                  href: e.strOnOKUrl,
                  onClick: t,
                  className: M(vc, yc),
                  children: [
                    (0, U.jsxs)(`div`, {
                      className: bc,
                      children: [` `, N(`#GotSteam_Yes`), ` `],
                    }),
                    (0, U.jsxs)(`div`, {
                      className: xc,
                      children: [` `, N(`#GotSteam_Yes_Play`), ` `],
                    }),
                  ],
                }),
                (0, U.jsxs)(`a`, {
                  href: e.strDownloadSteamUrl,
                  onClick: t,
                  className: vc,
                  children: [
                    (0, U.jsxs)(`div`, {
                      className: bc,
                      children: [` `, N(`#GotSteam_No`), ` `],
                    }),
                    (0, U.jsxs)(`div`, {
                      className: xc,
                      children: [` `, N(`#GotSteam_No_Download`), ` `],
                    }),
                  ],
                }),
              ],
            }),
            (0, U.jsxs)(`div`, {
              className: Sc,
              children: [
                (0, U.jsx)(yt, { className: Cc }),
                N(`#GotSteam_Blurb`),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
function Oc(e) {
  let { appid: t, bIsMuted: n } = e,
    r = m(t),
    i = Un(t),
    { data: a } = R(r),
    { mutate: o } = da(r),
    s = (e) => {
      (e.preventDefault(), i ? wc(t, a?.name) : o());
    },
    c = M(Or, n && void 0, i ? kr : Ar);
  return (0, U.jsx)(`div`, {
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
function kc(e, t) {
  let n = xt(),
    r = wt(),
    i = D(v(e, t));
  return { snr: Te(n), strStoreURL: rt(i, n, r) };
}
function Ac(e, t, n, r, i) {
  return jc(
    [{ packageid: e, bundleid: t, bIsGift: n, nAccountIDGiftee: r }],
    i,
  );
}
function jc(e, t) {
  let n = Dt(),
    r = I(),
    i = a(),
    { storeBrowseContext: o, dataLoader: s } = gn(),
    { country: c } = o,
    u = Me(t);
  return l({
    mutationFn: async () => {
      if (e.length == 0 || !e.every((e) => e.packageid || e.bundleid))
        throw `Every item must have a valid package or bundle id`;
      let t;
      if (bt(n)) {
        let [a, o] = await pt(r, c, e, u);
        if (a == 1) ((t = o.line_item_ids), $e(i, n, o.cart));
        else throw `AddItemsToAccountCart failed with ${a}`;
      } else if (je(n)) {
        let a = e.map((e) => e.packageid).filter(Mn),
          o = e.map((e) => e.bundleid).filter(Mn);
        if (o.length > 1)
          throw `The anonymous cart can only take one bundle per call`;
        let [s, c] = await Ce(
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
            $e(i, n, be(c)));
        } else throw `AddItemsToAnonymousCart failed with ${s}`;
      } else throw `Invalid cart type`;
      return t;
    },
    onMutate: () => {
      (async () => {
        let t = e.map((e) =>
          e.packageid ? { packageid: e.packageid } : { bundleid: e.bundleid },
        );
        (await Promise.all(t.map((e) => i.fetchQuery(Ht(s, e))))).forEach(
          (e, n) => {
            let r =
              e?.included_appids?.length == 1
                ? { appid: e.included_appids[0] }
                : t[n];
            (i.prefetchQuery(zt(s, r)), i.prefetchQuery(Fn(s, r)));
          },
        );
      })();
    },
  });
}
var Mc = e(c(), 1);
async function Nc(e, t) {
  let n = an.Init(yn);
  (n.Body().set_context(Tn(!1)), t.forEach((e) => n.Body().add_packageid(e)));
  let r = await Ut.GetHardwareItems(e, n);
  return r.BSuccess()
    ? r
        .Body()
        .details()
        .map((e) => e.toObject())
    : (console.error(`GetHardareDetails failed on packages: ${t.join(`,`)}`),
      null);
}
function Pc(e) {
  let t = zc(I());
  return u(Lc(t, e));
}
var Fc = (function (e) {
  return (
    (e[(e.k_Loading = 0)] = `k_Loading`),
    (e[(e.k_LoadSuccess = 1)] = `k_LoadSuccess`),
    (e[(e.k_LoadFailure = 2)] = `k_LoadFailure`),
    e
  );
})({});
function Ic(e) {
  let t = zc(I()),
    n = s({ queries: e.map((n) => ({ ...Lc(t, n), enabled: e.length > 0 })) }),
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
function Lc(e, t) {
  return { queryKey: Rc(t), queryFn: async () => e.load(t), enabled: !!t };
}
function Rc(e) {
  return [`hardwaredetail`, e];
}
function zc(e) {
  return f(`HardwareDetailLoader`, () => Bc(e));
}
function Bc(e) {
  return new Mc.default(async (t) => {
    let n = await Nc(e, t),
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
var Vc = { high_pending_orders: !1, inventory_available: !0 };
function Hc(e) {
  let { data: t } = R(e),
    n = t?.item_type === 1 && t.type === 10,
    { data: r } = Pc(n ? t.id : void 0);
  return t ? (n ? (r ?? null) : Vc) : null;
}
var Uc = `wvEYeGaFmt0-`,
  Wc = `GW1050ijiP0-`;
function Gc(e) {
  let { id: t, className: n } = e,
    r = xt(),
    { data: i } = R(t),
    { data: a } = Ie(t),
    { data: o } = tt(t),
    s = Hc(t),
    { bIsOwned: c } = Kn(t),
    l = kn(i),
    u = (0, H.useCallback)(() => {
      if (i) {
        let e = i.appid;
        (i.related_items?.parent_appid &&
          i.type != 11 &&
          (e = i.related_items.parent_appid),
          ge(window, `steam://run/${e}`));
      }
    }, [i]);
  if (!i || !a || !o || i.type == 8) return null;
  let d =
    i.is_free ||
    (o.final_price_in_cents != null && o.final_price_in_cents == `0`) ||
    (o.discount_pct && o.discount_pct >= 100);
  if (i.item_type == 1) {
    if (i.type == 10) {
      if (!s) return (0, U.jsx)(T, { size: `small`, position: `center` });
      if (!s.inventory_available)
        return (0, U.jsx)(`div`, {
          className: M(Wc, n),
          children: (0, U.jsxs)(`span`, {
            children: [` `, V.Localize(`#Sale_ReserveExhausted`)],
          }),
        });
    } else if (d && i.included_appids && i.included_appids.length > 1)
      return null;
  }
  if (i.item_type == 0) {
    if ((a.is_coming_soon && !o.packageid) || (c && i.type === 10)) return null;
    if (!c && o.is_free_to_keep) {
      if (B.IN_CLIENT || nt() != `store`) {
        let e = `${B.IN_CLIENT ? `steam://openurl/` : ``}${l}`;
        return (0, U.jsx)(`div`, {
          onClick: (t) => ge(t, e),
          className: M(Uc, n),
          children: (0, U.jsx)(`span`, {
            children: V.Localize(`#EventDisplay_CallToAction_VisitStore`),
          }),
        });
      }
      {
        let e = Ze(`${B.STORE_BASE_URL}freelicense/addfreelicense`, r);
        return (0, U.jsxs)(`form`, {
          action: e,
          method: `POST`,
          children: [
            (0, U.jsx)(`input`, {
              type: `hidden`,
              name: `subid`,
              value: o.packageid,
            }),
            (0, U.jsx)(`input`, {
              type: `hidden`,
              name: `sessionid`,
              value: pn(),
            }),
            (0, U.jsx)(`button`, {
              className: M(Uc, n),
              type: `submit`,
              children: V.Localize(`#EventDisplay_CallToAction_AddToAccount`),
            }),
          ],
        });
      }
    }
    if ((c || d) && !i.is_coming_soon) {
      let e = V.Localize(`#EventDisplay_CallToAction_PlayNowForFree`);
      return (
        c
          ? (e = V.Localize(`#EventDisplay_CallToAction_PlayNow`))
          : i.is_free_temporarily &&
            (e = V.Localize(`#EventDisplay_CallToAction_AddToAccount`)),
        (0, U.jsx)(`div`, {
          className: M(Uc, n),
          onClick: u,
          children: (0, U.jsx)(`span`, { children: e }),
        })
      );
    }
    if (o.formatted_final_price == ``)
      return (0, U.jsx)(`a`, {
        href: l,
        className: M(Uc, n),
        children: V.Localize(`#EventDisplay_CallToAction_VisitStore`),
      });
  }
  return (0, U.jsx)(Kc, {
    className: n,
    storeItemBestPurchaseOption: o,
    storeItemDefaultData: i,
  });
}
function Kc(e) {
  let {
      className: t,
      storeItemBestPurchaseOption: n,
      storeItemDefaultData: r,
    } = e,
    i = xt(),
    { mutate: a } = Ac(n?.packageid, n?.bundleid, !1, void 0, i.feature);
  return (0, U.jsx)(`div`, {
    className: M(Uc, t),
    onClick: () => a(),
    children: (0, U.jsx)(`span`, { children: V.Localize(`#Store_AddToCart`) }),
  });
}
var qc = `_8xhMURZRDBY-`;
function Jc(e) {
  let { id: t, className: n } = e,
    { data: r } = R(t);
  if (!r) return null;
  let i =
      r.related_items?.demo_appid && r.related_items.demo_appid
        ? r.related_items.demo_appid
        : [],
    a = i.length > 0,
    o = a || r.type === 1,
    s = o
      ? V.Localize(`#Sale_InstallDemo_ttip`, r.name || ``)
      : a
        ? V.Localize(`#Sale_CannotInstallDemo_ttip`, r.name || ``)
        : V.Localize(`#Loading`);
  if (k.IN_MOBILE_WEBVIEW) {
    if (o && a) {
      let e = r.type === 1 ? r.appid : i[0];
      return (0, U.jsx)(`div`, {
        className: n,
        children: (0, U.jsx)(zu, { appid: e }),
      });
    }
    return null;
  }
  return !o && a && r.is_free
    ? (0, U.jsx)(Gc, { id: t, className: n })
    : (0, U.jsx)(ct, {
        toolTipContent: s,
        onClick: (e) => {
          (e.preventDefault(),
            e.stopPropagation(),
            o && wc(r.type === 1 ? r.appid : i[0], r.name));
        },
        className: M(n, qc, !o && `gpIFsnR2ZGs-`),
        children: o
          ? V.Localize(`#Sale_InstallDemo`)
          : V.Localize(`#Sale_DemoNotFound`),
      });
}
async function Yc(e, t) {
  let n = cn(B.STORE_BASE_URL, t, F.country_code);
  return (await (await fetch(n)).json()).rgFollowedApps || [];
}
function Xc() {
  let e = I(),
    t = F.accountid;
  return u(Zc(e, t));
}
function Zc(e, t) {
  return {
    queryKey: el(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await Yc(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function Qc(e) {
  let { data: t } = Xc();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function $c() {
  let e = a(),
    t = F.accountid;
  return (n, r) => {
    e.setQueryData(el(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function el(e) {
  return [`AccountFollowApps`, e ?? 0];
}
function tl(e, t, n) {
  let r = $c(),
    i = F.accountid;
  return l({
    mutationKey: [`useUpdateAppFollow`, e, i, t],
    mutationFn: async () => {
      if (e == null) return;
      let r = B.STORE_BASE_URL + `explore/followgame`,
        i = new FormData();
      (i.append(`appid`, `` + e),
        i.append(`sessionid`, pn()),
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
      _n();
    },
  });
}
var nl = `VULTMp1PCTw-`,
  rl = `_2vLXBykr6zc-`;
async function il(e, t) {
  let n = cn(B.STORE_BASE_URL, t, F.country_code),
    r = await (await fetch(n)).json();
  return Object.keys(r.rgIgnoredApps).map(Number) || [];
}
function al() {
  let e = I(),
    t = F.accountid;
  return u(ol(e, t));
}
function ol(e, t) {
  return {
    queryKey: ll(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await il(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function sl(e) {
  let { data: t } = al();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function cl() {
  let e = a(),
    t = F.accountid;
  return (n, r) => {
    e.setQueryData(ll(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function ll(e) {
  return [`AccountIgnoreApps`, e ?? 0];
}
function ul(e, t, n, r = 0) {
  let i = cl(),
    a = F.accountid;
  return l({
    mutationKey: [`useUpdateAppIgnore`, e, a, t],
    mutationFn: async () => {
      if (e == null) return;
      let i = B.STORE_BASE_URL + `recommended/ignorerecommendation`,
        a = new FormData();
      (a.append(`appid`, `` + e),
        a.append(`sessionid`, pn()),
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
      _n();
    },
  });
}
function dl(e) {
  let { id: t, snr: n, classOverride: r } = e,
    [i, a] = (0, H.useState)(!1),
    o = C(`GameHoverIgnoreButton`),
    { elDialogElement: s, fnShowLogonDialog: c } = te(),
    l = t && `appid` in t ? t.appid : void 0,
    { mutateAsync: u } = ul(l, !sl(l), n),
    d = t && `appid` in t && Pn.Get().BIsGameIgnored(t.appid);
  return (0, U.jsxs)(L, {
    className: M(nl, r),
    onClick: async (e) => {
      (e.preventDefault(),
        e.stopPropagation(),
        F.logged_in
          ? t && `appid` in t && (a(!0), await u(), o.token.reason || a(!1))
          : c());
    },
    children: [
      (0, U.jsx)(Ue, {}),
      (0, U.jsx)(`div`, {
        className: M(rl, i && `vyz9N2LpdMs-`),
        children: N(d ? `#Sale_RemoveFromIgnored` : `#Sale_Ignore`),
      }),
      s,
    ],
  });
}
async function fl(e, t) {
  let n = cn(B.STORE_BASE_URL, t, F.country_code),
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
function pl() {
  let e = I(),
    t = O.accountid;
  return u(ml(e, t));
}
function ml(e, t) {
  return {
    queryKey: bl(t),
    queryFn: async () => {
      let n = new Map();
      if (t)
        try {
          (await fl(e, t)).forEach((e) => n.set(e.clanid, e));
        } catch (e) {
          console.error(`GetCuratorAffinityQuery`, e);
        }
      return n;
    },
    enabled: !!t,
  };
}
function hl(e) {
  let { data: t } = pl();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.followed;
}
function gl(e) {
  let { data: t } = pl();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.ignored;
}
function _l() {
  return k.EREALM != Ft.k_ESteamRealmChina;
}
function vl() {
  return k.EREALM != Ft.k_ESteamRealmChina;
}
function yl() {
  let e = a(),
    t = O.accountid;
  return (n, r, i, a) => {
    e.setQueryData(bl(t), (e) => {
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
function bl(e) {
  return [`CuratorAffinityQueryKey`, e ?? 0];
}
var $ = (function (e) {
  return (
    (e[(e.k_ECuratorFollow = 1)] = `k_ECuratorFollow`),
    (e[(e.k_ECuratorUnfollow = 2)] = `k_ECuratorUnfollow`),
    (e[(e.k_ECuratorIgnore = 3)] = `k_ECuratorIgnore`),
    (e[(e.k_ECuratorUnignore = 4)] = `k_ECuratorUnignore`),
    e
  );
})({});
function xl(e, t) {
  let n = yl(),
    r = F.accountid;
  return l({
    mutationKey: [`useUpdateCuratorAffinity`, e, r, t],
    mutationFn: async () => {
      if (e == null) return !1;
      let n = t == $.k_ECuratorFollow || t == $.k_ECuratorUnfollow,
        r = t == $.k_ECuratorFollow || t == $.k_ECuratorIgnore,
        i = `${B.STORE_BASE_URL}curators/${n ? `ajaxfollow/` : `ajaxignore/`}`,
        a = new FormData();
      (a.append(`clanid`, `` + e),
        a.append(`sessionid`, pn()),
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
        let r = t == $.k_ECuratorUnfollow || t == $.k_ECuratorUnignore;
        n(
          t == $.k_ECuratorFollow ? [{ clanAccountID: e }] : void 0,
          t == $.k_ECuratorIgnore ? [{ clanAccountID: e }] : void 0,
          r ? [{ clanAccountID: e }] : void 0,
        );
      }
    },
    onError: (r) => {
      if (e != null) {
        let i = t == $.k_ECuratorFollow || t == $.k_ECuratorIgnore;
        n(
          t == $.k_ECuratorUnfollow ? [{ clanAccountID: e }] : void 0,
          t == $.k_ECuratorUnignore ? [{ clanAccountID: e }] : void 0,
          i ? [{ clanAccountID: e }] : void 0,
          r ? [{ clanAccountID: e, is_creator: !0 }] : void 0,
        );
      }
    },
    onSuccess: (t) => {
      (t &&
        e &&
        n(void 0, void 0, void 0, [{ clanAccountID: e, is_creator: !0 }]),
        _n());
    },
  });
}
var Sl = `QOSk1wMadGg-`,
  Cl = `DH1jwyMHeXo-`,
  wl = `J5g1CfUd95U-`,
  Tl = `_3IPvWkyhZzM-`,
  El = `jB1S5EvgUjI-`,
  Dl = `iWO-8zu8RAA-`,
  Ol = `MTgAGoNV5vg-`,
  kl = `LEvP9jHHfL8-`,
  Al = `K9ZawxnkJcI-`,
  jl = `OlPIY4AN-5s-`,
  Ml = `_7UT3Pb65ni0-`,
  Nl = `sT74IdnPxY8-`,
  Pl = `ZTz7p5tpqNU-`,
  Fl = `ct7kvDppls0-`,
  Il = `SG9Xn5tF5a0-`,
  Ll = `clYVRh6K2Ig-`,
  Rl = `k6MwDwdCJTU-`,
  zl = `mnFUxHcas-0-`,
  Bl = `_6lWvo8crYSU-`,
  Vl = `r3PgsXSGPho-`,
  Hl = `EWCiFLRR-T8-`,
  Ul = `GEroszngeLM-`,
  Wl = (e) => {
    let t = k.HELP_BASE_URL + `wizard/HelpWithLimitedAccount`;
    return (0, U.jsx)(Se, {
      strTitle: N(`#Informational_Message`),
      onCancel: e.closeModal,
      onOK: e.closeModal,
      bAlertDialog: !0,
      children: (0, U.jsx)(`div`, {
        children: Be(
          e.strTokenOverride || `#User_LimitedAccount`,
          (0, U.jsx)(`a`, {
            href: t,
            target: k.IN_CLIENT ? void 0 : `_blank`,
            rel: `noopener noreferrer`,
            children: N(`#User_LimitedAccount_UrlInfo`),
          }),
        ),
      }),
    });
  },
  Gl = (e) => {
    let {
        className: t,
        bIgnored: n,
        bApplyingFollowing: r,
        bFollowing: i,
        onFollowClick: a,
        followType: o,
      } = e,
      { elDialogElement: s, fnShowLogonDialog: c } = te();
    if (!_l()) return null;
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
      ? (0, U.jsxs)(U.Fragment, {
          children: [
            (0, U.jsx)(We, {
              toolTipContent: !n && !i ? l : void 0,
              children: (0, U.jsxs)(Qt, {
                className: M(ne, Vl, `FollowButton`, t, i ? `Followed` : ``),
                onClick: () => {
                  O.logged_in ? a() : c();
                },
                children: [
                  r && (0, U.jsx)(ie, { size: 15 }),
                  !r && (i || n) && (0, U.jsx)(Sn, {}),
                  (0, U.jsx)(`div`, {
                    className: M(Hl, `FollowBtnText`),
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
function Kl(e) {
  let {
      followType: t,
      fnSuccessCallback: n,
      clanAccountID: r,
      className: i,
    } = e,
    [a, o] = H.useState(!1),
    { data: s } = g(t ? void 0 : r),
    c = hl(r),
    l = gl(r),
    { mutateAsync: u } = xl(r, c ? $.k_ECuratorUnfollow : $.k_ECuratorFollow),
    [d, f, p] = he(),
    m = H.useCallback(async () => {
      c != null && (o(!0), await u(), o(!1), n?.(c));
    }, [c, n, u]);
  return (0, U.jsxs)(U.Fragment, {
    children: [
      (0, U.jsx)(Gl, {
        className: i,
        bIgnored: !!l,
        bFollowing: !!c,
        bApplyingFollowing: a,
        onFollowClick: () => {
          O.is_limited ? f() : m();
        },
        followType: t ?? (s?.is_creator_home ? `creatorhome` : `steamcurator`),
      }),
      (0, U.jsx)(dn, {
        active: d,
        children: (0, U.jsx)(Wl, { closeModal: p }),
      }),
    ],
  });
}
function ql(e) {
  let { appid: t, className: n } = e,
    [r, i] = H.useState(!1),
    a = Qc(t),
    o = sl(t),
    s = xt(),
    c = Oe.GetSNRLinkParam(s),
    { mutateAsync: l } = tl(t, !a, c),
    u = H.useCallback(async () => {
      (i(!0), await l(), i(!1));
    }, [l]);
  return (0, U.jsx)(Gl, {
    className: n,
    bIgnored: !!o,
    bFollowing: !!a,
    bApplyingFollowing: r,
    onFollowClick: u,
    followType: `app`,
  });
}
function Jl(e) {
  let {
      nCreatorAccountID: t,
      classOverride: n,
      styleOverride: r,
      followType: i,
    } = e,
    { data: a } = g(t),
    { data: o } = Jn(t);
  if (!a || !o) return null;
  let s = a.avatar_medium_url || a.avatar_full_url;
  return (
    (s ||= re(void 0, `medium`, `web`)),
    (0, U.jsxs)(`div`, {
      className: M(Ba, n),
      style: r,
      children: [
        (0, U.jsx)(`a`, {
          href: Zn(o, `developer`),
          children: (0, U.jsx)(`img`, { src: s, alt: a.group_name }),
        }),
        (0, U.jsx)(Kl, { clanAccountID: t, followType: i }),
      ],
    })
  );
}
var Yl = 5500,
  Xl = 2e3,
  Zl = 10;
function Ql(e, t) {
  return e && t && t.main_capsule
    ? {
        stringifyID: `maincap_${e.id}_${e.item_type}`,
        rctImage: (0, U.jsx)(
          `img`,
          {
            className: ga,
            loading: `lazy`,
            src: On(t, `main_capsule`),
            alt: e.name,
          },
          `fallback`,
        ),
        nDurationMs: Xl,
      }
    : null;
}
function $l(e, t) {
  return {
    stringifyID: `vid_${ze(e)}`,
    rctImage: (0, U.jsx)(S, { id: e, active: !0 }),
    nDurationMs: Yl,
  };
}
function eu(e) {
  let t = Re(e);
  return Xt(e) ? void 0 : t;
}
function tu(e, t, n, r) {
  return n.slice(0, r).map((n, r) => {
    let i = ft(n, `1920x1080`);
    return {
      stringifyID: `screen${r}_${ze(e)}`,
      rctImage: (0, U.jsx)(
        `img`,
        {
          className: ga,
          loading: `lazy`,
          src: i,
          alt: `${t}'s screenshot ${r + 1}`,
        },
        i,
      ),
      nDurationMs: Xl,
    };
  });
}
function nu(e, t, n, r, i) {
  let a = [];
  if (
    (i && a.push($l(e, i)),
    r && r.length > 0 && a.push(...tu(e, t.name, r, Zl)),
    a.length == 0 && n && n.main_capsule)
  ) {
    let e = Ql(t, n);
    e && a.push(e);
  }
  return (e && a.length, a);
}
function ru(e, t, n, r, i, a) {
  let o = [];
  (a && o.push($l(t, a)), r && r.length > 0 && o.push(...tu(e, n.name, r, Zl)));
  let s = Zl - (r?.length || 0);
  return (
    s > 0 && i && i.length > 0 && o.push(...tu(e, n.name, i, s)),
    e && o.length,
    o
  );
}
function iu(e) {
  return (0, U.jsx)(`img`, {
    className: ga,
    loading: `lazy`,
    src: vt(x),
    alt: `default`,
  });
}
function au(e) {
  let { id: t } = e,
    { data: n } = at(t);
  if (!n || n.unvailable_for_country_restriction || !n.visible)
    return (0, U.jsx)(`div`, {
      className: ha,
      children: (0, U.jsx)(iu, {}, `default`),
    });
  let r = n.item_type,
    i = n.type;
  return r == 2 || r == 1
    ? (0, U.jsx)(lu, { includeAppIDs: n.included_appids })
    : (i == 1 || i == 12) && n.related_items && n.related_items.parent_appid
      ? (0, U.jsx)(su, {
          demoItemDefaultInfo: n,
          parentAppID: n.related_items.parent_appid,
        })
      : (0, U.jsx)(ou, { storeItemDefaultData: n });
}
function ou(e) {
  let { storeItemDefaultData: t } = e,
    n = ht(t),
    r = eu(n),
    { data: i } = An(n),
    a = ve(n),
    o = (0, H.useMemo)(() => nu(n, t, i, a, r), [n, a, r, i, t]);
  return (0, U.jsx)(uu, { rgTrailerAndImages: o });
}
function su(e) {
  let { demoItemDefaultInfo: t, parentAppID: n } = e,
    r = ht(t);
  return eu(r)
    ? (0, U.jsx)(ou, { storeItemDefaultData: t })
    : (0, U.jsx)(cu, { demoID: r, demoItemDefaultInfo: t, parentAppID: n });
}
function cu(e) {
  let { parentAppID: t, demoID: n, demoItemDefaultInfo: r } = e,
    i = m(t),
    a = ve(n),
    o = ve(i),
    s = eu(i),
    c = (0, H.useMemo)(() => ru(n, i, r, a, o, s), [n, i, r, s, a, o]);
  return (0, U.jsx)(uu, { rgTrailerAndImages: c });
}
function lu(e) {
  let { includeAppIDs: t } = e,
    n = Pt(),
    r = s({ queries: t.map((e) => zt(n, { appid: e })) }),
    i = s({ queries: t.map((e) => Ht(n, { appid: e })) }),
    a = (0, H.useMemo)(
      () =>
        r
          .map((e, t) => {
            let n = i[t].data,
              r = e.data;
            return Ql(n, r);
          })
          .filter((e) => !!e),
      [r, i],
    );
  return (0, U.jsx)(uu, { rgTrailerAndImages: a });
}
function uu(e) {
  let { rgTrailerAndImages: t } = e,
    n = (0, H.useRef)(0),
    r = jn(),
    [i] = H.useState(new et()),
    a = (0, H.useCallback)(
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
    (0, H.useEffect)(() => (t.length > 0 && a(), () => i.Cancel()), [t, a, i]),
    (0, U.jsx)(`div`, {
      className: ha,
      children: t?.map((e, t) =>
        (0, U.jsx)(
          `div`,
          {
            className: M({ [ga]: !0, [_a]: t != n.current }),
            children: e.rctImage,
          },
          `e-` + t + `-` + e.stringifyID,
        ),
      ),
    })
  );
}
var du = `ghYXSqVPJ-U-`,
  fu = `lx1fe7xI0bg-`,
  pu = `ARp2qEoElPE-`,
  mu = `DwDon-U2yLI-`,
  hu = 150,
  gu = H.createContext(void 0);
function _u() {
  return H.useContext(gu);
}
function vu(e) {
  let {
      hoverContent: t,
      hoverProps: n,
      nDelayShowMs: r,
      nWidthMultiplier: i,
      children: a,
      className: o,
    } = e,
    s = In(),
    c = y(),
    l = !s && !c,
    [u, d] = H.useState(!1),
    [f, p] = H.useState(void 0),
    m = (e) => {
      (d(!0), p(e.currentTarget));
    },
    h = () => d(!1),
    g = H.useCallback(() => d(!1), []);
  return (0, U.jsxs)(`div`, {
    "data-key": `hover div`,
    role: `button`,
    tabIndex: 0,
    className: M(du, o),
    onMouseEnter: m,
    onMouseLeave: h,
    onTouchStart: () => d(!1),
    onKeyDown: (e) => {
      e.keyCode == 27 && (d(!1), e.preventDefault(), e.stopPropagation());
    },
    children: [
      l &&
        f &&
        (0, U.jsx)(gu.Provider, {
          value: g,
          children: (0, U.jsx)(yu, {
            visible: u,
            target: f,
            nDelayShowMs: r,
            nWidthMultiplier: i,
            hoverProps: n,
            children: t,
          }),
        }),
      (0, U.jsx)(A, { children: a }),
    ],
  });
}
function yu(e) {
  let {
      hoverProps: t,
      nDelayShowMs: n = hu,
      nWidthMultiplier: r = 1.15,
      target: i,
      visible: a,
      children: o,
    } = e,
    [s, c] = H.useState(a);
  if (
    (H.useEffect(() => {
      if (a) {
        if (n) {
          let e = window.setTimeout(() => c(!0), n);
          return () => window.clearTimeout(e);
        }
        c(!0);
      } else {
        if (_e()) return;
        c(!1);
      }
    }, [a]),
    H.useEffect(() => {
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
        minHeight: xu() == `hiding` ? void 0 : 300,
        height: xu() == `hiding` ? i.clientWidth * 1.15 * (125 / 184) : void 0,
        ...t?.style,
      },
      target: i,
    };
  return (0, U.jsx)(bu, {
    hoverProps: u,
    children: (0, U.jsx)(A, { children: o }),
  });
}
function bu(e) {
  let { hoverProps: t, children: n } = e,
    r = H.useCallback((e) => e?.focus(), []);
  return (0, U.jsx)(ke, {
    ...t,
    children: (0, U.jsx)(ae, {
      timeout: 500,
      in: !0,
      appear: !0,
      classNames: { appearActive: M(pu, ya), enterDone: M(mu, ba) },
      children: (e) =>
        (0, U.jsx)(`div`, {
          ref: He(e, r),
          className: fu,
          tabIndex: -1,
          children: n,
        }),
    }),
  });
}
function xu() {
  return window.sessionStorage?.getItem(Su) || `default`;
}
var Su = `DEBUG_UseNewGameHover`;
function Cu(e) {
  window.sessionStorage.setItem(Su, e);
}
window.SetHoverPresentation = Cu;
var wu = `KDJh8Ln6DTA-`,
  Tu = `cwU-YKIjBO4-`,
  Eu = {
    bFitToWindow: !0,
    bOverlapHorizontal: !0,
    bMatchWidth: !1,
    bShiftToFitWindow: !0,
    bDisablePopTop: !0,
  };
function Du(e) {
  let { setRemoteClientID: t, rgSessions: n } = e,
    r = (0, H.useCallback)(
      (e) => {
        n?.length &&
          ye(
            (0, U.jsx)(Ou, { sessions: n, setRemoteDownloadClientId: t }),
            e,
            Eu,
          );
      },
      [t, n],
    );
  return n?.length
    ? (0, U.jsx)(`button`, {
        onClick: r,
        className: wu,
        children: (0, U.jsx)(Au, {}),
      })
    : null;
}
function Ou({ sessions: e, setRemoteDownloadClientId: t }) {
  return (0, U.jsx)(`ul`, {
    className: Tu,
    children: e.map((e) =>
      (0, U.jsx)(
        pe,
        {
          onSelected: () => {
            t(e.client_instanceid);
          },
          children: N(
            `#GamesList_Client_Indicator`,
            ku(e.device_type) ?? ``,
            e.machine_name,
          ),
        },
        e.client_instanceid,
      ),
    ),
  });
}
function ku(e) {
  switch (e) {
    case 1:
      return N(`#Library_DeviceType_PC`);
    case 544:
      return N(`#Library_DeviceType_SteamDeck`);
    case 546:
      return N(`#Library_DeviceType_SteamMachine`);
    case Yt:
      return N(`#Library_DeviceType_SteamFrame`);
    default:
      return;
  }
}
function Au(e) {
  return (0, U.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 13 8`,
    fill: `none`,
    ...e,
    children: (0, U.jsx)(`path`, {
      fill: `currentColor`,
      d: `M12.6128 1.7121C12.7616 1.56087 12.8428 1.3684 12.8428 1.14155C12.8428 0.687862 12.491 0.323534 12.0446 0.323534C11.8214 0.323534 11.6184 0.419772 11.4628 0.577877L6.83601 5.38975L2.22271 0.577877C2.06712 0.419772 1.85743 0.323534 1.64097 0.323534C1.19452 0.323534 0.842773 0.687862 0.842773 1.14155C0.842773 1.3684 0.923946 1.56087 1.07276 1.71211L6.21369 7.06016C6.38956 7.25264 6.60602 7.342 6.84277 7.34888C7.07953 7.34888 7.28246 7.25264 7.4651 7.06016L12.6128 1.7121Z`,
    }),
  });
}
var ju = `O2hPihu9CRE-`,
  Mu = `QhSrcq93V7k-`,
  Nu = `_7MjE60RYT0Q-`,
  Pu = `UlZXEOyFPCE-`,
  Fu = `_8wO4Yx-lIIo-`,
  Iu = `FA82eVIC918-`,
  Lu = `_0sgpZmAY-zs-`,
  Ru = `RLntJ4QtQLU-`;
function zu(e) {
  let { appid: t } = e,
    n = m(t),
    { data: r } = R(n),
    [i, a, o] = he(!1),
    { mutateAsync: s } = da({ appid: t }),
    [c, l] = (0, H.useState)(!1),
    u = Un(t);
  return !r || u
    ? null
    : (0, U.jsxs)(U.Fragment, {
        children: [
          (0, U.jsxs)(tr, {
            onClick: async () => {
              try {
                (l(!0), await s(), _n(), l(!1), a());
              } catch (e) {
                (l(!1),
                  console.error(
                    `Error AddToLibraryActionWithRemoteInstall`,
                    e,
                  ));
              }
            },
            children: [
              c && (0, U.jsx)(T, { size: `small` }),
              N(`#Sale_AddToLibrary_NoPlus`),
            ],
          }),
          (0, U.jsx)(A, {
            children: (0, U.jsx)(dn, {
              active: i,
              children: (0, U.jsx)(Se, {
                strTitle: N(`#Sale_AddedToLibrary`),
                strDescription: Be(
                  `#Sale_AddToLibrary_DialogDesc`,
                  (0, U.jsx)(`span`, { className: Nu, children: r.name || `` }),
                ),
                closeModal: o,
                bAlertDialog: !0,
                children: (0, U.jsx)(Bu, { id: n }),
              }),
            }),
          }),
        ],
      });
}
function Bu(e) {
  let { id: t } = e,
    n = se(),
    [r, i] = (0, H.useState)(0),
    [a, o] = (0, H.useState)(!1),
    { data: s } = St(t);
  if (!t || !(`appid` in t) || B.IN_CLIENT || !s) return null;
  let c = n.data?.sessions?.filter((e) => {
    switch (e.device_type) {
      default:
      case 1:
        {
          if (!e.os_type) return !1;
          let t = b(e.os_type);
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
    return (0, U.jsx)(`div`, {
      className: ju,
      children: a
        ? (0, U.jsx)(Hu, { session: e })
        : (0, U.jsxs)(U.Fragment, {
            children: [
              (0, U.jsx)(Vu, {
                rgAcceptableSession: c,
                session: e,
                setSessionIndex: i,
              }),
              (0, U.jsx)(`div`, {
                className: Iu,
                children: (0, U.jsx)(Uu, {
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
function Vu(e) {
  let { rgAcceptableSession: t, session: n, setSessionIndex: r } = e;
  return (0, U.jsxs)(U.Fragment, {
    children: [
      (0, U.jsx)(`div`, { children: N(`#Sale_AddToLibrary_RemoteDownload`) }),
      (0, U.jsxs)(`div`, {
        className: Lu,
        children: [
          (0, U.jsx)(`span`, { className: Ru, children: n.machine_name }),
          (0, U.jsx)(Du, {
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
function Hu(e) {
  let { session: t } = e;
  return (0, U.jsxs)(`div`, {
    className: Pu,
    children: [
      N(`#Sale_AddToLibrary_DownloadStarted`),
      (0, U.jsx)(`br`, {}),
      (0, U.jsx)(`a`, {
        href: `${B.COMMUNITY_BASE_URL}my/games?tab=all&clientid=${t.client_instanceid}`,
        children: N(`#Sale_AddToLibrary_SeeDownloadProgress`),
      }),
    ],
  });
}
function Uu(e) {
  let { appid: t, session: n, setRemoteDownloadRequested: r } = e,
    i = oe(t, n.client_instanceid);
  return (0, U.jsxs)(U.Fragment, {
    children: [
      (0, U.jsxs)(tr, {
        onClick: () => {
          (i.mutateAsync(), r(!0));
        },
        children: [(0, U.jsx)(Jt, {}), N(`#Button_StartDownload`)],
      }),
      (0, U.jsx)(`div`, {
        className: Fu,
        children: (0, U.jsx)(`a`, {
          href: `https://help.steampowered.com/faqs/view/1025-BD94-12FC-3409`,
          className: Mu,
          children: N(`#Button_Learn`),
        }),
      }),
    ],
  });
}
function Wu(e) {
  let {
    rgTagIDs: t,
    bShowEvenIfNoTags: n,
    bHideTitle: r,
    bLargeText: i,
    bNoStoreLinks: a,
  } = e;
  return t?.length > 0 || n
    ? (0, U.jsxs)(`div`, {
        className: M(Ir, i ? Kr : ``, `SaleTagBlockCtn`),
        children: [
          !r &&
            (0, U.jsx)(`div`, {
              className: M(`F3fTh-GlONs-`, `WidgetTagTitle`),
              children: V.Localize(`#GameHover_Tags`),
            }),
          t?.length > 0
            ? (0, U.jsx)(`div`, {
                className: M(qr, `TagBox`),
                children: t.map((e) =>
                  (0, U.jsx)(Ku, { tagid: e, bNoStoreLinks: a }, e),
                ),
              })
            : (0, U.jsx)(`div`, { children: V.Localize(`#Broadcast_None`) }),
        ],
      })
    : null;
}
function Gu(e) {
  let { tagid: t, className: n } = e,
    r = It(t, k.LANGUAGE);
  if (!r) return null;
  let i = wn(nn(k.LANGUAGE)),
    a = `${k.STORE_BASE_URL}tags/${i}/${r}`;
  return (0, U.jsx)(h, {
    url: a,
    className: M(Jr, `WidgetTag`, n),
    children: r,
  });
}
function Ku(e) {
  let { tagid: t, className: n, bNoStoreLinks: r } = e,
    i = wn(nn(k.LANGUAGE)),
    a = It(t, k.LANGUAGE),
    o = `${k.STORE_BASE_URL}tags/${i}/${a}`;
  return a
    ? r
      ? (0, U.jsx)(`div`, { className: M(Jr, `WidgetTag`, n), children: a })
      : (0, U.jsx)(h, { url: o, className: M(Jr, `WidgetTag`, n), children: a })
    : null;
}
export {
  ic as $,
  G as $n,
  Li as $t,
  hl as A,
  pi as An,
  Bn as Ar,
  Va as At,
  Ic as B,
  Ir as Bn,
  Ni as Bt,
  El as C,
  Ai as Cn,
  rr as Cr,
  io as Ct,
  vl as D,
  dr as Dn,
  Vn as Dr,
  Ga as Dt,
  Il as E,
  wi as En,
  Jn as Er,
  Ya as Et,
  Jc as F,
  li as Fn,
  ra as Ft,
  Tc as G,
  $r as Gn,
  Gi as Gt,
  Ac as H,
  jr as Hn,
  mi as Ht,
  Gc as I,
  Qi as In,
  ti as It,
  fc as J,
  wr as Jn,
  Ri as Jt,
  wc as K,
  _r as Kn,
  lr as Kt,
  Fc as L,
  Qr as Ln,
  xi as Lt,
  sl as M,
  ur as Mn,
  ua as Mt,
  tl as N,
  Zi as Nn,
  la as Nt,
  _l as O,
  na as On,
  Un as Or,
  Ka as Ot,
  Qc as P,
  Ji as Pn,
  aa as Pt,
  ac as Q,
  ei as Qn,
  gi as Qt,
  Rc as R,
  Vr as Rn,
  Si as Rt,
  Ul as S,
  Ii as Sn,
  nr as Sr,
  So as St,
  zl as T,
  $i as Tn,
  Zn as Tr,
  Xa as Tt,
  kc as U,
  Sr as Un,
  vi as Ut,
  jc as V,
  Wi as Vn,
  Pi as Vt,
  Oc as W,
  oi as Wn,
  zr as Wt,
  uc as X,
  Tr as Xn,
  Xi as Xt,
  lc as Y,
  Cr as Yn,
  Ui as Yt,
  cc as Z,
  Rr as Zn,
  Or as Zt,
  Dl as _,
  Oi as _n,
  Er as _r,
  ro as _t,
  Kl as a,
  Zr as an,
  Dr as ar,
  qs as at,
  Ll as b,
  sr as bn,
  Br as br,
  yo as bt,
  jl as c,
  yi as cn,
  gr as cr,
  Rs as ct,
  Pl as d,
  ta as dn,
  Hr as dr,
  Os as dt,
  ki as en,
  Mr as er,
  rc as et,
  Fl as f,
  ni as fn,
  fr,
  Ss as ft,
  Sl as g,
  Fr as gn,
  qr as gr,
  eo as gt,
  Ol as h,
  zi as hn,
  mr as hr,
  zo as ht,
  ql as i,
  Xr as in,
  xr as ir,
  Q as it,
  ul as j,
  Mi as jn,
  Wn as jr,
  da as jt,
  pl as k,
  Ei as kn,
  Kn as kr,
  Wa as kt,
  Al as l,
  bi as ln,
  hr as lr,
  Hs as lt,
  kl as m,
  Bi as mn,
  Ur as mr,
  Bo as mt,
  Wu as n,
  ji as nn,
  Lr as nr,
  Xs as nt,
  Wl as o,
  Vi as on,
  pr as or,
  Js as ot,
  Nl as p,
  Fi as pn,
  Gr as pr,
  Uo as pt,
  dc as q,
  ai as qn,
  Hi as qt,
  Jl as r,
  Yr as rn,
  or as rr,
  Ys as rt,
  Ml as s,
  qi as sn,
  yr as sr,
  Bs as st,
  Gu as t,
  ea as tn,
  Nr as tr,
  Zs as tt,
  wl as u,
  Yi as un,
  Ki as ur,
  ks as ut,
  Bl as v,
  Ci as vn,
  hi as vr,
  no as vt,
  Tl as w,
  _i as wn,
  ir as wr,
  q as wt,
  Cl as x,
  Pr as xn,
  ri as xr,
  Co as xt,
  Rl as y,
  Ti as yn,
  Di as yr,
  to as yt,
  Pc as z,
  cr as zn,
  Wr as zt,
};
