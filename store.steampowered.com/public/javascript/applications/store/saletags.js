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
  l as u,
  lt as d,
  nt as f,
  ot as p,
  st as m,
  tt as h,
} from "./chunk~01cfc309bf.js";
import { t as g } from "./chunk~68b7e78d68.js";
import {
  M as _,
  d as v,
  j as y,
  l as b,
  s as x,
  st as S,
  v as C,
  y as w,
} from "./chunk~f57d770d64.js";
import { c as T, u as E } from "./chunk~8c66e1c7a5.js";
import { n as D, r as O, t as k } from "./chunk~4c13037b22.js";
import "./chunk~8681f5c764.js";
import { a as A, n as ee, r as te } from "./chunk~2f085f1384.js";
import { m as j, n as ne, p as re, t as ie } from "./chunk~4eed35ad1f.js";
import { t as ae } from "./chunk~92931c6310.js";
import { i as oe, t as se } from "./chunk~af36c62e9f.js";
import { t as ce } from "./chunk~eefd71512b.js";
import { a as le } from "./chunk~e867464c75.js";
import { n as ue } from "./chunk~521597d5f9.js";
import { n as de } from "./chunk~593a6b8ddc.js";
import { O as fe, i as pe, k as me, m as he } from "./chunk~2f8c67b4de.js";
import { c as ge, i as _e, l as ve, o as ye } from "./chunk~7b4b9eb713.js";
import { n as be } from "./chunk~0278ae6236.js";
import { n as xe, t as Se } from "./chunk~90b9831ad2.js";
import { n as Ce, r as we } from "./chunk~f162f235ea.js";
import {
  $b as Te,
  $h as Ee,
  $i as De,
  $m as Oe,
  $r as ke,
  $s as Ae,
  $t as je,
  $y as Me,
  Al as Ne,
  An as Pe,
  Bc as Fe,
  Bf as Ie,
  Bg as Le,
  Bn as Re,
  Bp as ze,
  Bv as Be,
  Cb as Ve,
  Cd as He,
  Cg as Ue,
  Cr as We,
  Cu as Ge,
  Dc as Ke,
  Df as qe,
  Dm as Je,
  Dn as Ye,
  Do as Xe,
  Dt as Ze,
  Dx as Qe,
  El as $e,
  Ep as et,
  Et as tt,
  Fb as M,
  Fc as nt,
  Fg as rt,
  Fh as it,
  Fr as at,
  Fx as ot,
  Gc as st,
  Gf as ct,
  Gs as lt,
  Hb as ut,
  Hd as dt,
  Hf as ft,
  Hh as pt,
  Hp as mt,
  Ht as ht,
  Hv as gt,
  Ib as N,
  Ic as _t,
  Il as vt,
  Im as yt,
  In as bt,
  Iv as xt,
  Jb as St,
  Jf as Ct,
  Jo as wt,
  Jr as Tt,
  Js as Et,
  Jv as Dt,
  Kb as Ot,
  Kc as kt,
  Ki as At,
  Kp as jt,
  Ks as Mt,
  Lb as Nt,
  Lh as Pt,
  Lm as Ft,
  Lp as It,
  Lr as Lt,
  Lx as Rt,
  Mf as zt,
  Mu as Bt,
  Mv as Vt,
  Nc as P,
  Ng as Ht,
  Nl as Ut,
  Nm as Wt,
  Nr as Gt,
  Nv as Kt,
  OS as qt,
  Oc as Jt,
  Of as Yt,
  Og as Xt,
  On as Zt,
  Or as Qt,
  Ot as $t,
  Ov as en,
  Ox as tn,
  PS as nn,
  P_ as rn,
  Pd as an,
  Pl as on,
  Pr as sn,
  Pt as cn,
  Pv as ln,
  Qc as un,
  Qh as dn,
  Qm as fn,
  Qs as pn,
  Qt as mn,
  Qv as hn,
  Qx as gn,
  Qy as _n,
  Rc as vn,
  Rh as yn,
  Rv as bn,
  Sv as xn,
  Tc as Sn,
  Td as Cn,
  Tt as wn,
  Tv as Tn,
  Tx as En,
  Uh as Dn,
  Un as On,
  Uo as kn,
  Ut as An,
  Uv as jn,
  Vd as Mn,
  Vm as Nn,
  Vr as Pn,
  Vv as Fn,
  W_ as In,
  Wa as Ln,
  Wb as Rn,
  Wc as zn,
  Wd as Bn,
  Xc as Vn,
  Xh as Hn,
  Xl as Un,
  Xm as Wn,
  Xt as Gn,
  Xv as Kn,
  Xy as qn,
  Yd as Jn,
  Yi as Yn,
  Yp as Xn,
  Yr as Zn,
  Ys as Qn,
  Yu as $n,
  Zc as er,
  Zd as tr,
  Zf as nr,
  Zh as rr,
  Zp as ir,
  Zs as ar,
  Zt as or,
  Zv as sr,
  Zx as cr,
  _f as lr,
  _l as ur,
  _n as dr,
  _r as fr,
  _v as pr,
  _x as mr,
  aa as hr,
  ad as gr,
  ag as _r,
  al as vr,
  ax as F,
  b_ as yr,
  bd as br,
  bp as xr,
  cS as Sr,
  cb as Cr,
  cg as wr,
  ci as Tr,
  cn as Er,
  cx as Dr,
  cy as Or,
  dS as kr,
  dp as Ar,
  dr as jr,
  du as Mr,
  ec as Nr,
  eg as Pr,
  en as Fr,
  fS as Ir,
  fg as Lr,
  fn as Rr,
  fo as zr,
  ft as Br,
  gS as Vr,
  g_ as Hr,
  gg as Ur,
  gl as Wr,
  gp as Gr,
  gy as Kr,
  hS as qr,
  h_ as Jr,
  hf as Yr,
  hl as Xr,
  hn as Zr,
  if as Qr,
  im as $r,
  ip as ei,
  iv as ti,
  jf as ni,
  jl as ri,
  kS as ii,
  kd as ai,
  kl as oi,
  kn as si,
  kr as ci,
  kx as li,
  lS as ui,
  l_ as di,
  lg as fi,
  ln as pi,
  lp as mi,
  lr as hi,
  ly as gi,
  mS as _i,
  mg as vi,
  mp as yi,
  mr as bi,
  mt as xi,
  mv as Si,
  nd as Ci,
  nn as wi,
  nu as Ti,
  nx as I,
  ny as Ei,
  oS as Di,
  o_ as Oi,
  og as ki,
  on as Ai,
  op as ji,
  pS as Mi,
  pd as Ni,
  pf as Pi,
  pl as Fi,
  pu as Ii,
  py as Li,
  qc as Ri,
  qf as zi,
  qg as Bi,
  qi as Vi,
  qm as Hi,
  qs as Ui,
  rb as L,
  rd as Wi,
  rn as Gi,
  ry as Ki,
  sS as qi,
  sa as Ji,
  sg as Yi,
  si as Xi,
  sn as Zi,
  su as Qi,
  sx as $i,
  sy as ea,
  t_ as ta,
  tc as na,
  td as ra,
  th as ia,
  tn as aa,
  tv as oa,
  tx as sa,
  ty as ca,
  uS as la,
  vy as ua,
  wS as da,
  wg as fa,
  wm as pa,
  wn as ma,
  xd as ha,
  xm as ga,
  xx as _a,
  ya as va,
  yc as ya,
  yh as ba,
  ym as xa,
  yn as Sa,
  yv as Ca,
  yx as wa,
  zd as Ta,
  zg as Ea,
  zn as Da,
  zx as Oa,
} from "./main.js";
var ka = class extends Error {
  eResult;
  constructor(e, t) {
    (super(t ? `EResult ${e}: ${t}` : `EResult ${e}`), (this.eResult = e));
  }
};
function Aa(e, t, n, r) {
  let { tagid: i, top_n_sellers: a, store_filter_json: o } = n,
    s = n.min_discount_percent ?? 1,
    c = !!n.include_packages,
    l = !!n.include_bundles,
    u = !!n.include_dlc;
  return {
    queryKey: [
      `DiscountedItems`,
      i ?? 0,
      a ?? 0,
      o ?? ``,
      s,
      c,
      l,
      u,
      r,
      t.country,
    ],
    queryFn: async () =>
      (
        await Si(`DiscountedItems`, e, t, {
          start: 0,
          count: r,
          sort: 10,
          filters: {
            released_only: !0,
            type_filters: {
              include_games: !0,
              include_packages: c,
              include_bundles: l,
              include_dlc: u,
            },
            price_filters: { min_discount_percent: s },
            tagids_must_match: i ? [{ tagids: [i] }] : void 0,
            regional_top_n_sellers: a,
            store_page_filter: o
              ? { store_filters: [{ filter_json: o }] }
              : void 0,
          },
        })
      ).rgItemIDs,
    staleTime: 6e5,
  };
}
var ja = 3;
function Ma(e, t) {
  if (!e.is_coming_soon()) return !1;
  if (!t.min_discount_percent) return !0;
  let n = e.best_purchase_option(!1);
  return !!n?.packageid() && (n?.discount_pct() ?? 0) >= t.min_discount_percent;
}
function Na(e, t, n, r) {
  let { store_filter_json: i, min_discount_percent: a } = n;
  return {
    queryKey: [`TopWishlistedComingSoon`, i ?? ``, a ?? 0, r, t.country],
    queryFn: async () => {
      let o = new Map();
      return (
        await Si(
          `TopWishlistedComingSoon`,
          e,
          t,
          {
            start: 0,
            count: r * ja,
            sort: 23,
            filters: {
              coming_soon_only: !0,
              exclude_from: [2, 4],
              type_filters: {
                include_games: !0,
                include_dlc: !0,
                include_software: !0,
                include_music: !0,
                include_hardware: !0,
              },
              price_filters: a ? { min_discount_percent: a } : void 0,
              store_page_filter: i
                ? { store_filters: [{ filter_json: i }] }
                : void 0,
            },
          },
          {
            data_request: {},
            cacheStoreItemData: (e) => {
              let t = ea({ item_type: e.item_type(), id: e.id() });
              t && o.set(Or(t), e);
            },
          },
        )
      ).rgItemIDs
        .filter((e) => {
          let t = o.get(Or(e));
          return t !== void 0 && Ma(t, n);
        })
        .slice(0, r);
    },
    staleTime: 6e5,
  };
}
var R = e(i(), 1);
function Pa(e) {
  let { data: t } = jn(e);
  return (0, R.useMemo)(
    () => (t ? (t.item_type == 0 ? [t.appid] : t.included_appids || []) : []),
    [t],
  );
}
function Fa(e) {
  if (!e?.length) return [];
  let t = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
  return Array.from(new Set(t));
}
function Ia(e) {
  let { data: t } = jn({ appid: e });
  return t?.appid || e;
}
function La(e) {
  let { data: t } = jn(e);
  return (0, R.useMemo)(() => {
    if (t && t.related_items && t.related_items.parent_appid)
      return { appid: t.related_items.parent_appid };
  }, [t]);
}
function Ra(e) {
  return (0, R.useMemo)(() => (e ? { appid: e } : void 0), [e]);
}
function za(e) {
  return (0, R.useMemo)(() => (e ? { packageid: e } : void 0), [e]);
}
async function Ba(e, t) {
  let n = br(mr.STORE_BASE_URL, t, wa.country_code);
  return (await (await fetch(n)).json()).rgOwnedApps || [];
}
async function Va(e, t, n) {
  return (await Ba(e, t)).includes(n);
}
function Ha() {
  let e = ua(),
    t = F.accountid;
  return m(Ua(e, t));
}
function Ua(e, t) {
  return {
    queryKey: qa(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await Ba(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function Wa(e, t, n) {
  return {
    queryKey: [`AccountOwnsApp`, t, n],
    queryFn: async () => (t ? await Va(e, t, n) : !1),
    staleTime: 6e5,
  };
}
function Ga(e) {
  let t = ua(),
    n = F.accountid,
    { data: r } = m(Wa(t, n, e));
  return r === void 0 ? void 0 : r;
}
function Ka(e) {
  let t = s(),
    n = F.accountid;
  return R.useCallback(
    (r) => {
      t.setQueryData(qa(n), (t) =>
        t ? new Set([...t.values(), ...r]) : e ? new Set(r) : void 0,
      );
    },
    [t, n, e],
  );
}
function qa(e) {
  return [`AccountOwnedApps`, e ?? 0];
}
function Ja(e) {
  let { data: t } = jn(e && `appid` in e ? void 0 : e),
    { data: n } = Ha(),
    r;
  return (
    e && `appid` in e ? (r = [e.appid]) : t && (r = t.included_appids),
    r === void 0 || n === void 0 || r.length == 0
      ? { bIsOwned: void 0, unAppID: void 0 }
      : { bIsOwned: !r.some((e) => !n.has(e)), unAppID: r[0] }
  );
}
var Ya = 500,
  Xa = 100;
function Za(e, t, n, r, i, a = 1) {
  return {
    queryKey: [`AccountOwnedDLCOnSale`, r ?? 0, i, n.country, a],
    queryFn: async () => {
      if (!r) return [];
      let o = await e.fetchQuery(Ua(t, r)),
        s = Array.from(o).slice(0, Ya);
      return s.length
        ? (
            await Si(`SaleTechOwnedDLCOnSale`, t, n, {
              start: 0,
              count: Xa,
              sort: 10,
              filters: {
                released_only: !0,
                type_filters: {
                  include_dlc: i === `dlc`,
                  include_music: i === `music`,
                },
                price_filters: { min_discount_percent: a },
                parent_appids: s,
              },
            })
          ).rgItemIDs.flatMap((e) => (`appid` in e ? [e.appid] : []))
        : [];
    },
    staleTime: 6e5,
  };
}
async function Qa(e) {
  let t = { get_appids: !0, l: I.LANGUAGE },
    n = new URLSearchParams(t).toString(),
    r = `${I.STORE_BASE_URL}curator/${e}/ajaxgetcreatorhomeinfo/?${n}`,
    i = await fetch(r, { method: `GET` });
  if (!i.ok) throw Error(`Server returned ${i.status}`);
  let a = await i.json();
  return a.success == 1 ? a : null;
}
function $a(e) {
  return m(eo(e));
}
function eo(e) {
  return {
    queryKey: to(e),
    queryFn: async () => {
      let t = await Qa(e);
      if (t) {
        let { success: e, err_msg: n, warning: r, warning_msg: i, ...a } = t;
        return a;
      }
      return null;
    },
    enabled: !!e,
  };
}
function to(e) {
  return [`creatorhomebyaccount`, e];
}
function no(e, t) {
  if (e.vanity) {
    switch (t) {
      case `publisher`:
        return `${I.STORE_BASE_URL}publisher/${e.vanity}/`;
      case `franchise`:
        return `${I.STORE_BASE_URL}franchise/${e.vanity}/`;
    }
    return `${I.STORE_BASE_URL}developer/${e.vanity}/`;
  }
  return `${I.STORE_BASE_URL}curator/${e.creator_clan_id}/`;
}
var ro = `qkhMGgZoiEA-`,
  io = `dR7N9Ozyb6k-`,
  ao = `_8j-XyEfRwfE-`,
  z = l();
function oo(e) {
  let { children: t, ...n } = e;
  return (0, z.jsx)(Wr, {
    className: ro,
    type: `button`,
    ...n,
    children: (0, z.jsx)(`span`, { children: t }),
  });
}
function so(e) {
  let { children: t, ...n } = e;
  return (0, z.jsx)(Wr, {
    className: ao,
    type: `button`,
    ...n,
    children: (0, z.jsx)(`span`, { children: t }),
  });
}
function co(e) {
  let { children: t, ...n } = e;
  return (0, z.jsx)(Xr, {
    className: ao,
    ...n,
    children: (0, z.jsx)(`span`, { children: t }),
  });
}
function lo(e) {
  let { children: t, ...n } = e;
  return (0, z.jsx)(Wr, {
    className: io,
    type: `button`,
    ...n,
    children: (0, z.jsx)(`span`, { children: t }),
  });
}
var uo = e(r()),
  B = e(a(), 1),
  fo = e(h()),
  po = `_8Wp5WbqAbJA-`,
  mo = `K2PjXmYWvSg-`,
  ho = `UYfcYZDtfbs-`,
  go = `O-TsWDon65A-`,
  _o = `E8DrK8oV4Hs-`,
  vo = `XTfMA1ObAn4-`,
  yo = `-Rv33oXsbT0-`,
  bo = `MN6Xv-pm6i8-`,
  xo = `uvLRAREPa4E-`,
  So = `bdPmPtfuqIY-`,
  Co = `JCVuyoKAC-k-`,
  wo = `kjiBcsaqA8o-`,
  To = `UFAsjplGzxc-`,
  Eo = `vL-XYGsLedM-`,
  Do = `aCttqIa8NC4-`,
  Oo = `-rXzhlz0w3Q-`,
  ko = `R9ivMzB3Gic-`,
  Ao = `W9-byrNtR9Q-`,
  jo = `llT8dhJgnqw-`,
  Mo = `kxs4VtommH4-`,
  No = `ncKEDk26SHQ-`,
  Po = `VGzHGCF3I5o-`,
  Fo = `fNtXEMzHz58-`,
  Io = `jrHvWWIOlw4-`,
  Lo = `FOKKfGVYUDk-`,
  Ro = `OClIuwfiMKQ-`,
  zo = `ZLlm68-AqhM-`,
  Bo = `raYV6Y-MQ7I-`,
  Vo = `IWFCYfhR05U-`,
  Ho = `KtOQKgU1W5w-`,
  Uo = `jXpKqo3-cWA-`,
  Wo = `_-7gyAR9oUx4-`,
  Go = `GcBGxmj4uvE-`,
  Ko = `QwN0eH2k0O0-`,
  qo = `sgCiKk3DUeg-`,
  Jo = `N86EuolnWHc-`,
  Yo = `A8oyzoRvWQ8-`,
  Xo = `V7rq-SSC9xQ-`,
  Zo = `pNXxwljIaD8-`,
  Qo = `lsjYiHotCwA-`,
  $o = `iVV26V5rbpU-`,
  es = `XosTQwEOBO0-`,
  ts = `ITE-CUK3U10-`,
  ns = `wPxkst62n-Q-`,
  rs = `gxtdwNjsesg-`,
  is = `y1XjkIvVj6A-`,
  as = `BZ9dZKOmXqE-`,
  os = `zMMJGDB8n-o-`,
  ss = `XPrPiD27WdE-`,
  cs = `R0sGSaFdUWo-`,
  ls = `PON8X0ze5G8-`,
  us = `rfhpla0PGMA-`,
  ds = `OySWwOLLxFc-`,
  fs = `tkR3-aHpyI4-`,
  ps = `yyrI0Nka69I-`,
  ms = `D3fuhd6kG6I-`,
  hs = `Xk-QP-zS-18-`,
  gs = `I9cM1cZTYqc-`,
  _s = `LkW8eRLttsM-`,
  vs = `_4KL8m0wDedE-`,
  ys = `E3GBmOK5lMc-`,
  bs = `lOHW8g-YyoY-`,
  xs = `NqZ9uMSo13A-`,
  Ss = `Ybt9EqGhaaU-`,
  Cs = `RQzfcqJK1Eg-`,
  ws = `_0MLgqm-W-nA-`,
  Ts = `iwrzh-mg8hE-`,
  Es = `oZCOhIQDgxo-`,
  Ds = `-G-r65tUoo0-`,
  Os = `qVhohSfcErA-`,
  ks = `GqNlebj1uds-`,
  As = `oqhyMK1Krt0-`,
  js = `GRw4r5TpD5s-`,
  Ms = `mspnwaz0EAg-`,
  Ns = `_06Z7Ej-J6OU-`,
  Ps = `lO9B4Ti6gBk-`,
  Fs = `lkVpo86MFuI-`,
  Is = `chTH6btujQ0-`,
  Ls = `_96v5CHkkJJY-`,
  Rs = `GxypNLhVZWE-`,
  zs = `_-4JZsb8K2FY-`,
  Bs = `BD3vXqZ-6yI-`,
  Vs = `l9by-6sJDpM-`,
  Hs = `LCYi5cxHqgI-`,
  Us = `ZuMhm9DQqbw-`,
  Ws = `eASrfjoxe3o-`,
  Gs = `ppO76q5Y-Zg-`,
  Ks = `WWolAsqP274-`,
  qs = `mP8HbLoIUo0-`,
  Js = `BuCaaYRb4Cg-`,
  Ys = `bYNmqkeEJGc-`,
  Xs = `_4xLBehMPMIU-`,
  Zs = `XiCMCQH8z2U-`,
  Qs = `_3wT3W-azVyE-`,
  $s = `EpyWQfQU-D4-`,
  ec = `FDvyBhD2AA0-`,
  tc = `RIck6AI1vX8-`,
  nc = `Sndyr6iqn8g-`,
  rc = `qUsoY9s6daM-`,
  ic = `tUIs-i3NWoU-`,
  ac = `_8o-dkC5O1co-`,
  oc = `v7ul8g8zqHs-`,
  sc = `-cW4bgqyLAo-`,
  cc = `aN31caRmRcQ-`,
  lc = `tobj1evrU4w-`,
  uc = `RAahmG4F6sc-`;
function dc(e) {
  return e?.is_coming_soon
    ? fc(
        e.coming_soon_display,
        e.steam_release_date,
        e.custom_release_date_message,
      )
    : e?.steam_release_date
      ? De(e.steam_release_date)
      : ``;
}
function fc(e, t, n) {
  switch (e) {
    case `date_full`:
      return De(t);
    case `date_month`:
      return At(new Date(t * 1e3));
    case `date_quarter`:
      return Vi(new Date(t * 1e3));
    case `date_year`:
      return Yn(new Date(t * 1e3));
    case `text_comingsoon`:
      return n || M.Localize(`#Store_ComingSoon_ComingSoon`);
    case `text_tba`:
      return n || M.Localize(`#Store_ComingSoon_TBA`);
    default:
      return ``;
  }
}
function pc(e) {
  if (!e) return ``;
  if (e && e.is_coming_soon) {
    if (e.coming_soon_display) return Mr(e);
    if (e.custom_release_date_message) return e.custom_release_date_message;
    let t = e.steam_release_date;
    return t
      ? e.is_abridged_release_date
        ? At(new Date(t * 1e3))
        : De(t)
      : ``;
  }
  let t = e.steam_release_date;
  return ((t ||= e.original_release_date), t ? De(t) : ``);
}
function mc(e, t = !1) {
  if (e.is_coming_soon && !t) return 0;
  let n = e.steam_release_date;
  return ((n ||= e.original_release_date), n);
}
var hc = 7;
function gc(e, t) {
  if (!e) return !1;
  let n = mc(e);
  return n ? !e.is_coming_soon && n + hc * hr.PerDay > t : !1;
}
function _c(e, t) {
  return !!(e && e.is_coming_soon && t && t.packageid);
}
function vc(e, t) {
  return !!(e && t && t.packageid);
}
async function yc(e, t) {
  throw new ka(20, `Owned packages must be seeded by the page`);
}
function bc() {
  let e = ua(),
    t = F.accountid;
  return m(xc(e, t));
}
function xc(e, t) {
  return {
    queryKey: Cc(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await yc(e, t);
      return new Set(n);
    },
    retry: !1,
    staleTime: 1 / 0,
  };
}
function Sc(e) {
  let t = s(),
    n = F.accountid;
  return R.useCallback(
    (r) => {
      t.setQueryData(Cc(n), (t) =>
        t ? new Set([...t.values(), ...r]) : e ? new Set(r) : void 0,
      );
    },
    [t, n, e],
  );
}
function Cc(e) {
  return [`AccountOwnedPackages`, e ?? 0];
}
function wc(e) {
  let t = ua(),
    n = Ka(),
    r = Sc();
  return p({
    mutationFn: () => Tc(t, e),
    onSuccess(e) {
      let [
        t,
        { packageids_added: i, appids_added: a, purchase_result_detail: o },
      ] = e;
      (a && n(a), i && r(i));
    },
  });
}
async function Tc(e, t) {
  let n = tn.Init(Zr);
  n.Body().set_item_id(Qe.fromObject(t));
  let r = await dr.AddFreeLicense(e, n);
  return [r.GetEResult(), r.Body().toObject()];
}
async function Ec(e, t) {
  t.set(`origin`, location.origin);
  let n = `${I.STORE_BASE_URL}saleaction/${e}?${t}`,
    r = await fetch(n);
  if (!r.ok) throw Error(`${n} answered ${r.status}`);
  let i = await r.json();
  if (i?.success != 1) throw Error(`${n} answered EResult ${i?.success}`);
  return i;
}
async function Dc(e) {
  let t = await Ec(
    `ajaxgetpopularcompatlist`,
    new URLSearchParams({ compatDevice: e }),
  );
  if (!t.list) throw Error(`ajaxgetpopularcompatlist answered without a list`);
  return t.list;
}
var Oc = 3e5;
function kc(e) {
  return [`PopularCompatList`, e];
}
function Ac(e) {
  return { queryKey: kc(e), queryFn: () => Dc(e), staleTime: Oc, retry: !1 };
}
var jc = `PFP2RDjCi0w-`,
  Mc = `Cbfoq6WaXq4-`,
  Nc = `_4lcICEhYuQw-`,
  Pc = `unoV6P6DXbM-`,
  Fc = `p8d03I0RAAs-`,
  Ic = `brHZRAeRCnw-`,
  Lc = `hATzo-Hjaaw-`,
  Rc = `_7vEy4qHpqHo-`,
  zc = `KoUJweWUwjY-`,
  Bc = `XAGO1LWGig0-`,
  Vc = `uN9-XHR7odQ-`,
  Hc = `CnbkzZzYDxs-`,
  Uc = `_8UjVVV-S-j8-`,
  Wc = `k0yt-Gxhbs4-`,
  Gc = `io6uTUtzW-A-`,
  Kc = `_58-zzK2uRws-`,
  qc = `mGygcOFcFcQ-`,
  Jc = `mW8gl4NPYGg-`,
  Yc = `X9907eDQcow-`,
  Xc = `GwjmtMACpAo-`,
  Zc = `S8JsHzHuIMA-`,
  Qc = `_4nNWbL6J2cI-`,
  $c = `Djw7Ta0NL0Q-`,
  el = `u-mW6oZelJ4-`,
  tl = `j0BUhYRjGwM-`,
  nl = `I-L7P5K0HUM-`,
  rl = `VYzpavMEA5M-`,
  il = `iXn31HpcmTo-`;
function al(e) {
  let { id: t, bTruncateTotalReviews: n, bShowTooltip: r } = e,
    { data: i } = sr(t),
    { data: a } = jn(t),
    o = La(t),
    { data: s } = jn(o),
    { data: c } = Cn();
  if (!i || !a || (a.type == 1 && !O(s))) return null;
  let l = i.summary_unfiltered || i.summary_filtered,
    u = `#ReviewScore_UserReviewScoreAria`,
    d = !1,
    f = M.Localize(`#Language_` + I.LANGUAGE);
  if (
    (ol(c?.preferences?.review_score_preference) &&
      (i.summary_language_specific
        ? ((d = !0),
          (u = `#ReviewScore_UserReviewScoreAria_LanguageSpecific`),
          (l = i.summary_language_specific))
        : (l = i.summary_filtered)),
    !l || !l.review_score)
  )
    return null;
  let p = $c;
  p =
    l.review_score > 0 && l.review_score < 5
      ? el
      : l.review_score == 5
        ? tl
        : nl;
  let m = `${I.STORE_BASE_URL}app/${a.appid}/#app_reviews_hash`,
    h = (0, z.jsxs)(`div`, {
      className: P(Qc, p),
      children: [
        (0, z.jsx)(`div`, {
          className: rl,
          "aria-label": M.Localize(u, l.review_score_label, f),
          children: l.review_score_label,
        }),
        (0, z.jsxs)(`div`, {
          className: Zc,
          "aria-label": M.Localize(
            `#GameHover_UserReviewCount`,
            l.review_count.toLocaleString(Ji()),
          ),
          children: [
            `(`,
            n
              ? `(` + l.review_count.toLocaleString(Ji()) + `)`
              : d
                ? M.Localize(
                    `#GameHover_UserReviewCount_Lang`,
                    l.review_count.toLocaleString(Ji()),
                    f,
                  )
                : M.Localize(
                    `#GameHover_UserReviewCount`,
                    l.review_count.toLocaleString(Ji()),
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
  return (0, z.jsx)(tY, {
    url: m,
    className: P(Xc, `ReviewScore`),
    children:
      r && l.percent_positive != null && l.review_count != null && g
        ? (0, z.jsx)(Zn, {
            bTopmost: !0,
            toolTipContent: M.Localize(g, l.percent_positive, l.review_count),
            children: h,
          })
        : h,
  });
}
function ol(e) {
  return e === void 0 || e === 0 || e === 2;
}
function sl(e) {
  let {
      id: t,
      snr: n,
      classOverride: r,
      styleOverride: i,
      bShowInGamepadUI: a,
    } = e,
    { data: o } = jn(t),
    { elDialogElement: s, fnShowLogonDialog: c } = JW(),
    [l, u] = (0, R.useState)(() => {
      if (o && (o.type == 1 || o.type == 12) && o.related_items?.parent_appid)
        return o.related_items?.parent_appid;
      if (t && `appid` in t) return t.appid;
    }),
    d = Ra(l),
    f = Gi(l),
    { bIsOwned: p } = Ja(d),
    [m, h] = (0, R.useState)(!1),
    g = ae(`GameHoverWishlistButton`),
    { mutateAsync: _ } = re(l, !f, n);
  (0, R.useEffect)(() => {
    t &&
      `appid` in t &&
      (o?.type == 1 || o?.type == 12) &&
      u(o.related_items?.parent_appid || t.appid);
  }, [o, t]);
  let v = (0, R.useCallback)(
    async (e) => {
      wa.logged_in
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
    : (0, z.jsxs)(Fe, {
        className: P(zc, a && `B7tWNVp-vns-`, r),
        onActivate: v,
        style: i,
        children: [
          f ? (0, z.jsx)(Ke, {}) : (0, z.jsx)(Jt, {}),
          (0, z.jsx)(`div`, {
            className: P(Bc, m && `u8yceEMO9LM-`, `WishlistButtonText`),
            children: M.Localize(
              f ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
            ),
          }),
          s,
        ],
      });
}
var cl = class e {
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
        this.m_mapAppCallbackList.set(e, new cr()),
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
      let n = { nAppID: e, l: mr.LANGUAGE, cc: mr.COUNTRY },
        r = mr.STORE_BASE_URL + `saleaction/ajaxgetdeckappcompatibilityreport`,
        i = await fo.default.get(r, { params: n, withCredentials: !0 });
      if (i?.status == 200 && i.data?.success == 1 && i.data?.results)
        return (this.AddCompatabilityResult(i.data.results), !0);
      t = $n(i);
    } catch (e) {
      t = $n(e);
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
      let t = Dr(`hardwarecompatibility`, `application_config`);
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
Ot([gn], cl.prototype, `LoadAppCompabitilityResult`, null);
function ll(e) {
  let [t, n] = R.useState(cl.Get().GetCompatabilityResultForApp(e));
  return (
    Ut(cl.Get().GetCallbackForAppList(e), n),
    R.useEffect(() => {
      cl.Get().BHasCompatabilityResultForApp(e) ||
        cl
          .Get()
          .LoadAppCompabitilityResult(e)
          .then(() => n(cl.Get().GetCompatabilityResultForApp(e)));
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
function ul(e) {
  switch (e) {
    case Ne.OK:
      return 0;
    case Ne.CANCEL:
      return 1;
    case Ne.SECONDARY:
      return 2;
    case Ne.OPTIONS:
      return 3;
    case Ne.DIR_LEFT:
      return 4;
    case Ne.DIR_RIGHT:
      return 5;
    case Ne.DIR_UP:
      return 6;
    case Ne.DIR_DOWN:
      return 7;
    case Ne.STEAM_GUIDE:
      return 8;
    case Ne.STEAM_QUICK_MENU:
      return 9;
    case Ne.SELECT:
      return 10;
    case Ne.START:
      return 11;
    case Ne.BUMPER_LEFT:
      return 12;
    case Ne.BUMPER_RIGHT:
      return 13;
    case Ne.TRIGGER_LEFT:
      return 14;
    case Ne.TRIGGER_RIGHT:
      return 15;
    case Ne.REAR_LEFT_UPPER:
      return 24;
    case Ne.REAR_LEFT_LOWER:
      return 25;
    case Ne.REAR_RIGHT_UPPER:
      return 26;
    case Ne.REAR_RIGHT_LOWER:
      return 27;
    default:
      return 0;
  }
}
var dl = class e {
  m_boundActions = new Map();
  m_defaultActions = new Map();
  m_globalActionsSubscriptions = [];
  m_actionDescriptionChangedCallbackRegistrations = [];
  static Log = new ri(`ActionDescription`).Debug;
  m_nodeForCurrentDescriptions;
  InitContext(e) {
    let t = new Rn();
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
    } else this.SetActionDescriptionsFromMap({ [Ne.OK]: null });
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
        i = ul(r);
      t[i] = e[r];
    }
    this.SetActionsFromMap(t);
  }
  SetAction(t, n) {
    if ((e.Log(`SetActionDescription`, t, n), n === void 0)) {
      if (!this.m_boundActions.has(t)) return !1;
      this.m_boundActions.delete(t);
    } else {
      if (oi(this.m_boundActions.get(t), n)) return !1;
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
(Ot([gn], dl.prototype, `OnFocusNavigationChanged`, null),
  Ot([gn], dl.prototype, `OnActiveNavTreeChanged`, null),
  Ot([gn], dl.prototype, `SetActionDescriptionsFromMap`, null));
var fl = `-h3mdabpWCk-`,
  pl = `z7OUnz8a2LE-`,
  ml = `-JC2DTwjTLY-`,
  hl = `gBGbg1Aq4kE-`,
  gl = `S0TPsOpik3c-`,
  _l = `_6t-T9facds8-`,
  vl = `_9ltdnbqRBVs-`,
  yl = `KMiaP3xxJic-`,
  bl = `-f6--J8iYK8-`,
  xl = `tlFgqgPT5b8-`,
  Sl = `LR3Stix-A4Y-`,
  Cl = `zxsM3zpa9JU-`,
  wl = `c3ZsONtZeOk-`,
  Tl = `uboNutS5k7k-`,
  El = `_31u9Wgg0oro-`,
  Dl = `m9cG66kvPgg-`,
  Ol = `WGUFkBLPn8E-`,
  kl = `WFe7p-8r4T4-`,
  Al = `_5sgfQl5H11I-`,
  jl = `ifxfOQVR6MY-`,
  Ml = `nPQe387f344-`,
  Nl = `Z8zypUObkYE-`,
  Pl = `_1GTC22hSCmY-`,
  Fl = `toY0I97PWjg-`,
  Il = `_1ArCdbgfzNY-`,
  Ll = `IBiSpw0atyM-`,
  Rl = `mDOopKELMBg-`,
  zl = `C8-HMz-fVag-`,
  Bl = `lDDPCoGwJAU-`,
  Vl = `QvYBOAdgkPk-`,
  Hl = `ZAn1-qmM-Iw-`,
  Ul = `dNQ1ofH4Cbs-`,
  Wl = `rmDLW23h1zQ-`,
  Gl = `ahykWXj-Rak-`,
  Kl = `TxQs7xIpj2A-`,
  ql = `xWg9uSQknuo-`,
  Jl = `_2csr6Pw04gI-`,
  Yl = `CT05Js5REus-`,
  Xl = `CAlqxCfPEko-`,
  Zl = `hH8fUDD712k-`,
  Ql = `c1DR5MyoXPo-`,
  $l = `KnF9XvfALGs-`,
  eu = `voFKnm6BHlI-`,
  tu = `XRBn-My-JYo-`,
  nu = `MnMGQkxU8KU-`,
  ru = `BPpr5dZdGc4-`,
  H = `QeQ6K92V-ik-`,
  U = `jlNNNIYiAYQ-`,
  iu = `dXUGCsJI9Qw-`,
  au = `N88ag1lENrA-`,
  ou = `-m9XoDI2d0Q-`,
  su = `IulAmRs78UQ-`,
  cu = `X86r8MkR480-`,
  lu = (function (e) {
    return (
      (e[(e.Knockout = 0)] = `Knockout`),
      (e[(e.Light = 1)] = `Light`),
      (e[(e.Dark = 2)] = `Dark`),
      e
    );
  })({}),
  uu = (function (e) {
    return (
      (e[(e.Small = 0)] = `Small`),
      (e[(e.Medium = 1)] = `Medium`),
      (e[(e.Large = 2)] = `Large`),
      e
    );
  })({});
function du(e) {
  switch (e) {
    case 0:
      return ou;
    case 1:
      return su;
    case 2:
      return cu;
    default:
      return su;
  }
}
function fu(e) {
  switch (e) {
    case 0:
      return au;
    case 1:
      return iu;
    case 2:
      return ru;
    default:
      return iu;
  }
}
function pu(e) {
  let t = P(
      e.size == null ? du(1) : du(e.size),
      e.type == null ? fu(1) : fu(e.type),
      e.additionalClassName,
    ),
    n = e.type == 0;
  switch (e.button) {
    case V.A:
      return (0, z.jsx)(mu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_A`),
      });
    case V.B:
      return (0, z.jsx)(hu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_B`),
      });
    case V.X:
      return (0, z.jsx)(gu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_X`),
      });
    case V.Y:
      return (0, z.jsx)(_u, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_Y`),
      });
    case V.Left:
      return (0, z.jsx)(bu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_DpadLeft`),
      });
    case V.Right:
      return (0, z.jsx)(xu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_DpadRight`),
      });
    case V.Up:
      return (0, z.jsx)(vu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_DpadUp`),
      });
    case V.Down:
      return (0, z.jsx)(yu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_DpadDown`),
      });
    case V.HomeMenu:
      return (0, z.jsx)(Su, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_Steam`),
      });
    case V.QuickMenu:
      return (0, z.jsx)(Cu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_QAM`),
      });
    case V.Select:
      return (0, z.jsx)(wu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_View`),
      });
    case V.Start:
      return (0, z.jsx)(Tu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_Menu`),
      });
    case V.LeftBumper:
      return (0, z.jsx)(Eu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_L1`),
      });
    case V.RightBumper:
      return (0, z.jsx)(Du, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_R1`),
      });
    case V.LeftTrigger:
      return (0, z.jsx)(Ou, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_L2`),
      });
    case V.RightTrigger:
      return (0, z.jsx)(ku, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_R2`),
      });
    case V.LeftStick:
      return (0, z.jsx)(Nu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_LS`),
      });
    case V.RightStick:
      return (0, z.jsx)(Mu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_RS`),
      });
    case V.LeftStickClick:
      return (0, z.jsx)(Au, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_L3`),
      });
    case V.RightStickClick:
      return (0, z.jsx)(ju, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_R3`),
      });
    case V.LeftTrackpad:
      return (0, z.jsx)(Ru, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_LPad`),
      });
    case V.RightTrackpad:
      return (0, z.jsx)(Bu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_RPad`),
      });
    case V.LeftTrackpadClick:
      return (0, z.jsx)(zu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_LPad_Click`),
      });
    case V.RightTrackpadClick:
      return (0, z.jsx)(Vu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_RPad_Click`),
      });
    case V.RearLeftUpper:
      return (0, z.jsx)(Pu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_L4`),
      });
    case V.RearRightUpper:
      return (0, z.jsx)(Iu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_R4`),
      });
    case V.RearLeftLower:
      return (0, z.jsx)(Fu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_L5`),
      });
    case V.RearRightLower:
      return (0, z.jsx)(Lu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_R5`),
      });
    default:
      return (0, z.jsx)(Hu, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_Default`),
      });
  }
}
function mu({ bIsKnockout: e, ...t }) {
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
            className: H,
            cx: `18`,
            cy: `18`,
            r: `18`,
            fill: `currentColor`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M24.1317 24H21.2697L20.4057 21.552H15.4737L14.6457 24H11.8917L16.6077 11.4H19.2717L24.1317 24ZM17.9217 14.406L16.1937 19.446H19.6857L17.9217 14.406Z`,
          }),
        ],
      });
}
function hu({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M20.761 17.286C22.369 17.778 23.173 18.81 23.173 20.382C23.173 21.522 22.759 22.41 21.931 23.046C21.103 23.682 19.993 24 18.601 24H13.435V11.4H18.097C19.573 11.4 20.665 11.676 21.373 12.228C22.081 12.78 22.435 13.56 22.435 14.568C22.435 15.132 22.303 15.648 22.039 16.116C21.775 16.584 21.349 16.974 20.761 17.286ZM16.117 13.596V16.674H17.935C18.535 16.674 18.997 16.536 19.321 16.26C19.645 15.972 19.807 15.57 19.807 15.054C19.807 14.082 19.165 13.596 17.881 13.596H16.117ZM18.331 21.822C19.003 21.822 19.507 21.672 19.843 21.372C20.191 21.072 20.365 20.676 20.365 20.184C20.365 19.656 20.197 19.26 19.861 18.996C19.525 18.72 19.039 18.582 18.403 18.582H16.117V21.822H18.331Z`,
          }),
        ],
      });
}
function gu({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M20.3621 11.4H23.7101L19.2821 17.394L24.1061 24H20.8661L17.9141 19.41L15.0881 24H11.9201L16.4021 17.484L12.1001 11.4H15.3581L17.8601 15.45L20.3621 11.4Z`,
          }),
        ],
      });
}
function _u({ bIsKnockout: e, ...t }) {
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
            className: H,
            cx: `18`,
            cy: `18`,
            r: `18`,
            fill: `currentColor`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M19.318 24H16.69V18.978L12.298 11.4H15.358L18.094 16.44L20.848 11.4H23.71L19.318 18.996V24Z`,
          }),
        ],
      });
}
function vu({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M19.5555 14.7554L25 20.1998L27.3333 17.8665L18 8.66661L8.66663 17.8665L11 20.1998L16.4444 14.7554V27.1998H19.5555V14.7554Z`,
          }),
        ],
      });
}
function yu({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M16.4444 21.1111L10.9999 15.6666L8.66659 18L17.9999 27.1998L27.3333 18L24.9999 15.6666L19.5555 21.1111L19.5555 8.66663L16.4444 8.66663L16.4444 21.1111Z`,
          }),
        ],
      });
}
function bu({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M14.8219 16.3777L20.2664 10.9333L17.933 8.59994L8.73314 17.9332L17.933 27.2666L20.2664 24.9333L14.8219 19.4888L27.2664 19.4888L27.2664 16.3777L14.8219 16.3777Z`,
          }),
        ],
      });
}
function xu({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M21.1776 19.4887L15.7332 24.9332L18.0665 27.2665L27.2664 17.9332L18.0665 8.59985L15.7332 10.9332L21.1776 16.3776L8.73315 16.3776L8.73315 19.4887L21.1776 19.4887Z`,
          }),
        ],
      });
}
function Su({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            d: `M0 18C0 8.05888 8.05888 0 18 0H82C91.9411 0 100 8.05888 100 18C100 27.9411 91.9411 36 82 36H18C8.05888 36 0 27.9411 0 18Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M21.8011 11.5C22.6531 11.5 23.4391 11.62 24.1591 11.86C24.8791 12.1 25.4851 12.394 25.9771 12.742L24.8611 14.722C24.4171 14.41 23.9191 14.158 23.3671 13.966C22.8271 13.774 22.3111 13.678 21.8191 13.678C21.2191 13.678 20.7511 13.804 20.4151 14.056C20.0791 14.296 19.9111 14.632 19.9111 15.064C19.9111 15.496 20.1091 15.838 20.5051 16.09C20.9011 16.33 21.5071 16.594 22.3231 16.882C23.1631 17.182 23.8351 17.458 24.3391 17.71C24.8431 17.962 25.2811 18.334 25.6531 18.826C26.0371 19.306 26.2291 19.924 26.2291 20.68C26.2291 21.484 26.0191 22.18 25.5991 22.768C25.1911 23.356 24.6151 23.812 23.8711 24.136C23.1271 24.448 22.2751 24.604 21.3151 24.604C20.5351 24.604 19.7371 24.502 18.9211 24.298C18.1171 24.082 17.4091 23.794 16.7971 23.434L17.6251 21.238C18.2011 21.55 18.8071 21.802 19.4431 21.994C20.0911 22.174 20.7271 22.264 21.3511 22.264C22.0351 22.264 22.5451 22.132 22.8811 21.868C23.2291 21.604 23.4031 21.256 23.4031 20.824C23.4031 20.392 23.2171 20.056 22.8451 19.816C22.4731 19.576 21.9031 19.33 21.1351 19.078C20.2711 18.802 19.5751 18.538 19.0471 18.286C18.5191 18.022 18.0631 17.644 17.6791 17.152C17.3071 16.648 17.1211 15.994 17.1211 15.19C17.1211 14.446 17.3131 13.798 17.6971 13.246C18.0931 12.682 18.6451 12.25 19.3531 11.95C20.0611 11.65 20.8771 11.5 21.8011 11.5Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M35.2486 24.388H32.6026V14.056H28.7866V11.788H39.0646V14.056H35.2486V24.388Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M42.3148 11.788H50.8108V14.038H44.9608V16.882H50.0008V19.15H44.9608V22.102H50.8108V24.388H42.3148V11.788Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M65.8582 24.388H62.9962L62.1322 21.94H57.2002L56.3722 24.388H53.6182L58.3342 11.788H60.9982L65.8582 24.388ZM59.6482 14.794L57.9202 19.834H61.4122L59.6482 14.794Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M75.8489 20.734L79.7729 11.788H82.4549V24.388H79.9169V16.378L76.5329 24.028H74.9309L71.4749 16.468V24.388H69.0629V11.788H71.6009L75.8489 20.734Z`,
          }),
        ],
      });
}
function Cu({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            d: `M0 18C0 8.05888 8.05888 0 18 0H61C70.9411 0 79 8.05888 79 18C79 27.9411 70.9411 36 61 36H18C8.05888 36 0 27.9411 0 18Z`,
          }),
          (0, z.jsx)(`circle`, {
            className: U,
            fill: `currentColor`,
            cx: `21.5`,
            cy: `18`,
            r: `4.5`,
          }),
          (0, z.jsx)(`circle`, {
            className: U,
            fill: `currentColor`,
            cx: `39.5`,
            cy: `18`,
            r: `4.5`,
          }),
          (0, z.jsx)(`circle`, {
            className: U,
            fill: `currentColor`,
            cx: `57.5`,
            cy: `18`,
            r: `4.5`,
          }),
        ],
      });
}
function wu({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            y: `6`,
            width: `48`,
            height: `24`,
            rx: `12`,
          }),
          (0, z.jsx)(`rect`, {
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
function Tu({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            y: `6`,
            width: `48`,
            height: `24`,
            rx: `12`,
          }),
          (0, z.jsx)(`rect`, {
            className: U,
            fill: `currentColor`,
            x: `17`,
            y: `11`,
            width: `14`,
            height: `2.8`,
          }),
          (0, z.jsx)(`rect`, {
            className: U,
            fill: `currentColor`,
            x: `17`,
            y: `22.2`,
            width: `14`,
            height: `2.8`,
          }),
          (0, z.jsx)(`rect`, {
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
function Eu({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            d: `M0 10C0 4.47715 3.35786 0 7.5 0H34.5C35.3284 0 36 0.895431 36 2V30C36 31.1046 35.3284 32 34.5 32H1.5C0.671574 32 0 31.1046 0 30V10Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.8218 23H9.36182V10.4H12.0078V20.624H17.8218V23Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M25.7635 10.4V20.714H28.1576V23H20.1116V20.714H23.0816V13.316L20.4356 14.432L19.5896 12.452L23.7296 10.4H25.7635Z`,
          }),
        ],
      });
}
function Du({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            d: `M36 10C36 4.47715 32.6421 0 28.5 0H1.5C0.671574 0 0 0.895431 0 2V30C0 31.1046 0.671574 32 1.5 32H34.5C35.3284 32 36 31.1046 36 30V10Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M18.7525 23H15.8185L13.2805 18.752H12.9745H11.1025V23H8.45654V10.4H13.1725C14.9005 10.4 16.1725 10.748 16.9885 11.444C17.8045 12.128 18.2125 13.088 18.2125 14.324C18.2125 15.296 17.9965 16.106 17.5645 16.754C17.1445 17.402 16.5505 17.894 15.7825 18.23L18.7525 23ZM11.1025 12.65V16.484H13.1725C13.8685 16.484 14.4085 16.31 14.7925 15.962C15.1885 15.602 15.3865 15.11 15.3865 14.486C15.3865 13.874 15.1945 13.418 14.8105 13.118C14.4385 12.806 13.8385 12.65 13.0105 12.65H11.1025Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M26.6688 10.4V20.714H29.0628V23H21.0168V20.714H23.9868V13.316L21.3408 14.432L20.4948 12.452L24.6348 10.4H26.6688Z`,
          }),
        ],
      });
}
function Ou({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            d: `M0 22C0 27.5228 3.35786 32 7.5 32H34.5C35.3284 32 36 31.1046 36 30V2C36 0.895432 35.3284 0 34.5 0H1.5C0.671574 0 0 0.895432 0 2V22Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.7846 23H9.32458V10.4H11.9706V20.624H17.7846V23Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.0083 20.714H29.0743V23H19.6603V20.804L23.2963 17.78L23.6023 17.51C24.1543 17.042 24.5743 16.664 24.8623 16.376C25.1623 16.088 25.4023 15.782 25.5823 15.458C25.7623 15.134 25.8523 14.78 25.8523 14.396C25.8523 13.772 25.6243 13.304 25.1683 12.992C24.7243 12.668 24.1483 12.506 23.4403 12.506C22.9123 12.506 22.3963 12.59 21.8923 12.758C21.4003 12.926 20.9683 13.136 20.5963 13.388L19.6963 11.444C20.2483 11.06 20.8783 10.754 21.5863 10.526C22.3063 10.298 23.0743 10.184 23.8903 10.184C25.3423 10.184 26.5063 10.502 27.3823 11.138C28.2583 11.774 28.6963 12.68 28.6963 13.856C28.6963 14.72 28.4443 15.506 27.9403 16.214C27.4363 16.91 26.6623 17.69 25.6183 18.554L23.0083 20.714Z`,
          }),
        ],
      });
}
function ku({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            d: `M36 22C36 27.5228 32.6421 32 28.5 32H1.5C0.671574 32 0 31.1046 0 30V2C0 0.895432 0.671574 0 1.5 0H34.5C35.3284 0 36 0.895432 36 2V22Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.7153 23H14.7813L12.2433 18.752H11.9373H10.0653V23H7.41931V10.4H12.1353C13.8633 10.4 15.1353 10.748 15.9513 11.444C16.7673 12.128 17.1753 13.088 17.1753 14.324C17.1753 15.296 16.9593 16.106 16.5273 16.754C16.1073 17.402 15.5133 17.894 14.7453 18.23L17.7153 23ZM10.0653 12.65V16.484H12.1353C12.8313 16.484 13.3713 16.31 13.7553 15.962C14.1513 15.602 14.3493 15.11 14.3493 14.486C14.3493 13.874 14.1573 13.418 13.7733 13.118C13.4013 12.806 12.8013 12.65 11.9733 12.65H10.0653Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M22.9136 20.714H28.9796V23H19.5656V20.804L23.2016 17.78L23.5076 17.51C24.0596 17.042 24.4796 16.664 24.7676 16.376C25.0676 16.088 25.3076 15.782 25.4876 15.458C25.6676 15.134 25.7576 14.78 25.7576 14.396C25.7576 13.772 25.5296 13.304 25.0736 12.992C24.6296 12.668 24.0536 12.506 23.3456 12.506C22.8176 12.506 22.3016 12.59 21.7976 12.758C21.3056 12.926 20.8736 13.136 20.5016 13.388L19.6016 11.444C20.1536 11.06 20.7836 10.754 21.4916 10.526C22.2116 10.298 22.9796 10.184 23.7956 10.184C25.2476 10.184 26.4116 10.502 27.2876 11.138C28.1636 11.774 28.6016 12.68 28.6016 13.856C28.6016 14.72 28.3496 15.506 27.8456 16.214C27.3416 16.91 26.5676 17.69 25.5236 18.554L22.9136 20.714Z`,
          }),
        ],
      });
}
function Au({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `19.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.009 24.956H9.48901V13.756H11.841V22.844H17.009V24.956Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M22.4759 13.5C23.7879 13.5 24.7852 13.7613 25.4679 14.284C26.1506 14.8067 26.4919 15.484 26.4919 16.316C26.4919 16.8813 26.3212 17.388 25.9799 17.836C25.6492 18.2733 25.1799 18.6093 24.5719 18.844V18.892C25.2866 19.0413 25.8626 19.3507 26.2999 19.82C26.7479 20.2787 26.9719 20.892 26.9719 21.66C26.9719 22.364 26.7692 22.988 26.3639 23.532C25.9586 24.0653 25.4039 24.4813 24.6999 24.78C23.9959 25.068 23.2172 25.212 22.3639 25.212C21.5532 25.212 20.7799 25.1 20.0439 24.876C19.3186 24.652 18.7052 24.3373 18.2039 23.932L19.2119 22.204C20.0439 22.876 21.0306 23.212 22.1719 23.212C22.8972 23.212 23.4626 23.0627 23.8679 22.764C24.2839 22.4653 24.4919 22.0547 24.4919 21.532C24.4919 20.508 23.7079 19.996 22.1399 19.996H20.6999V18.22H21.9959C22.6146 18.22 23.1106 18.1027 23.4839 17.868C23.8679 17.6227 24.0599 17.2813 24.0599 16.844C24.0599 16.4387 23.8786 16.1133 23.5159 15.868C23.1639 15.6227 22.6732 15.5 22.0439 15.5C21.5639 15.5 21.0999 15.58 20.6519 15.74C20.2146 15.8893 19.8199 16.0973 19.4679 16.364L18.4759 14.86C19.0092 14.4227 19.6119 14.0867 20.2839 13.852C20.9666 13.6173 21.6972 13.5 22.4759 13.5Z`,
          }),
        ],
      });
}
function ju({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `19.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M18.152 24.956H15.544L13.288 21.18H13.016H11.352V24.956H9V13.756H13.192C14.728 13.756 15.8587 14.0653 16.584 14.684C17.3093 15.292 17.672 16.1453 17.672 17.244C17.672 18.108 17.48 18.828 17.096 19.404C16.7227 19.98 16.1947 20.4173 15.512 20.716L18.152 24.956ZM11.352 15.756V19.164H13.192C13.8107 19.164 14.2907 19.0093 14.632 18.7C14.984 18.38 15.16 17.9427 15.16 17.388C15.16 16.844 14.9893 16.4387 14.648 16.172C14.3173 15.8947 13.784 15.756 13.048 15.756H11.352Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.5962 13.5C24.9082 13.5 25.9056 13.7613 26.5882 14.284C27.2709 14.8067 27.6122 15.484 27.6122 16.316C27.6122 16.8813 27.4416 17.388 27.1003 17.836C26.7696 18.2733 26.3002 18.6093 25.6922 18.844V18.892C26.4069 19.0413 26.9829 19.3507 27.4202 19.82C27.8682 20.2787 28.0923 20.892 28.0923 21.66C28.0923 22.364 27.8896 22.988 27.4842 23.532C27.0789 24.0653 26.5243 24.4813 25.8202 24.78C25.1162 25.068 24.3376 25.212 23.4843 25.212C22.6736 25.212 21.9003 25.1 21.1643 24.876C20.4389 24.652 19.8256 24.3373 19.3243 23.932L20.3323 22.204C21.1643 22.876 22.1509 23.212 23.2923 23.212C24.0176 23.212 24.5829 23.0627 24.9882 22.764C25.4042 22.4653 25.6122 22.0547 25.6122 21.532C25.6122 20.508 24.8283 19.996 23.2603 19.996H21.8203V18.22H23.1163C23.7349 18.22 24.2309 18.1027 24.6043 17.868C24.9883 17.6227 25.1803 17.2813 25.1803 16.844C25.1803 16.4387 24.9989 16.1133 24.6363 15.868C24.2843 15.6227 23.7936 15.5 23.1643 15.5C22.6842 15.5 22.2203 15.58 21.7723 15.74C21.3349 15.8893 20.9403 16.0973 20.5883 16.364L19.5963 14.86C20.1296 14.4227 20.7323 14.0867 21.4043 13.852C22.0869 13.6173 22.8176 13.5 23.5962 13.5Z`,
          }),
        ],
      });
}
function Mu({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `13.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.6775 18.9875H20.8833L18.4661 14.9418H18.1747H16.3918V18.9875H13.8718V6.98755H18.3633C20.009 6.98755 21.2204 7.31898 21.9975 7.98184C22.7747 8.63326 23.1633 9.54755 23.1633 10.7247C23.1633 11.6504 22.9575 12.4218 22.5461 13.039C22.1461 13.6561 21.5804 14.1247 20.849 14.4447L23.6775 18.9875ZM16.3918 9.13041V12.7818H18.3633C19.0261 12.7818 19.5404 12.6161 19.9061 12.2847C20.2833 11.9418 20.4718 11.4733 20.4718 10.879C20.4718 10.2961 20.289 9.86183 19.9233 9.57612C19.569 9.27898 18.9975 9.13041 18.209 9.13041H16.3918Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      });
}
function Nu({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `13.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23 19H14V7H16.8149V16.7371H23V19Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      });
}
function Pu({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.0834 24.75H8.62341V12.15H11.2694V22.374H17.0834V24.75Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M27.3111 12.15V19.854H29.1291V21.888H27.3111V24.75H24.6291V21.888H18.6891V20.16L24.8631 12.15H27.3111ZM24.7371 15.3L21.2631 19.854H24.7371V15.3Z`,
          }),
        ],
      });
}
function Fu({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M16.6967 24.75H8.23669V12.15H10.8827V22.374H16.6967V24.75Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M27.3744 12.15V14.4H21.8664V17.352C22.2144 17.136 22.6044 16.98 23.0364 16.884C23.4804 16.776 23.9244 16.722 24.3684 16.722C25.4964 16.722 26.3964 17.046 27.0684 17.694C27.7524 18.33 28.0944 19.26 28.0944 20.484C28.0944 21.396 27.8784 22.194 27.4464 22.878C27.0264 23.562 26.4084 24.096 25.5924 24.48C24.7884 24.852 23.8344 25.038 22.7304 25.038C21.9144 25.038 21.1524 24.93 20.4444 24.714C19.7364 24.498 19.1484 24.192 18.6804 23.796L19.6164 21.78C20.5404 22.404 21.5664 22.716 22.6944 22.716C23.5464 22.716 24.2064 22.53 24.6744 22.158C25.1424 21.786 25.3764 21.252 25.3764 20.556C25.3764 19.944 25.1964 19.476 24.8364 19.152C24.4884 18.828 24.0084 18.666 23.3964 18.666C22.9404 18.666 22.5204 18.744 22.1364 18.9C21.7524 19.044 21.3744 19.266 21.0024 19.566L19.3284 18.648V12.15H27.3744Z`,
          }),
        ],
      });
}
function Iu({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.4516 24.75H14.5176L11.9796 20.502H11.6736H9.80164V24.75H7.15564V12.15H11.8716C13.5996 12.15 14.8716 12.498 15.6876 13.194C16.5036 13.878 16.9116 14.838 16.9116 16.074C16.9116 17.046 16.6956 17.856 16.2636 18.504C15.8436 19.152 15.2496 19.644 14.4816 19.98L17.4516 24.75ZM9.80164 14.4V18.234H11.8716C12.5676 18.234 13.1076 18.06 13.4916 17.712C13.8876 17.352 14.0856 16.86 14.0856 16.236C14.0856 15.624 13.8936 15.168 13.5096 14.868C13.1376 14.556 12.5376 14.4 11.7096 14.4H9.80164Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M27.6539 12.15V19.854H29.4719V21.888H27.6539V24.75H24.9719V21.888H19.0319V20.16L25.2059 12.15H27.6539ZM25.0799 15.3L21.6059 19.854H25.0799V15.3Z`,
          }),
        ],
      });
}
function Lu({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.6274 24.75H14.6934L12.1554 20.502H11.8494H9.97742V24.75H7.33142V12.15H12.0474C13.7754 12.15 15.0474 12.498 15.8634 13.194C16.6794 13.878 17.0874 14.838 17.0874 16.074C17.0874 17.046 16.8714 17.856 16.4394 18.504C16.0194 19.152 15.4254 19.644 14.6574 19.98L17.6274 24.75ZM9.97742 14.4V18.234H12.0474C12.7434 18.234 13.2834 18.06 13.6674 17.712C14.0634 17.352 14.2614 16.86 14.2614 16.236C14.2614 15.624 14.0694 15.168 13.6854 14.868C13.3134 14.556 12.7134 14.4 11.8854 14.4H9.97742Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M28.2797 12.15V14.4H22.7717V17.352C23.1197 17.136 23.5097 16.98 23.9417 16.884C24.3857 16.776 24.8297 16.722 25.2737 16.722C26.4017 16.722 27.3017 17.046 27.9737 17.694C28.6577 18.33 28.9997 19.26 28.9997 20.484C28.9997 21.396 28.7837 22.194 28.3517 22.878C27.9317 23.562 27.3137 24.096 26.4977 24.48C25.6937 24.852 24.7397 25.038 23.6357 25.038C22.8197 25.038 22.0577 24.93 21.3497 24.714C20.6417 24.498 20.0537 24.192 19.5857 23.796L20.5217 21.78C21.4457 22.404 22.4717 22.716 23.5997 22.716C24.4517 22.716 25.1117 22.53 25.5797 22.158C26.0477 21.786 26.2817 21.252 26.2817 20.556C26.2817 19.944 26.1017 19.476 25.7417 19.152C25.3937 18.828 24.9137 18.666 24.3017 18.666C23.8457 18.666 23.4257 18.744 23.0417 18.9C22.6577 19.044 22.2797 19.266 21.9077 19.566L20.2337 18.648V12.15H28.2797Z`,
          }),
        ],
      });
}
function Ru({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            d: `M1.74515 6.72713C1.88863 4.6288 3.6326 3 5.73584 3H30.2642C32.3674 3 34.1114 4.6288 34.2548 6.72713L35.7078 27.9771C35.8659 30.2883 34.0337 32.25 31.7172 32.25H4.28284C1.96629 32.25 0.134134 30.2883 0.292162 27.9771L1.74515 6.72713Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.2836 24.0625H14.8236V11.4625H17.4696V21.6865H23.2836V24.0625Z`,
          }),
        ],
      });
}
function zu({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            d: `M2.63721 11.7308C2.77887 9.6309 4.5235 8 6.62814 8H29.3719C31.4765 8 33.2211 9.63091 33.3628 11.7308L34.712 31.7308C34.8678 34.0406 33.0362 36 30.7211 36H5.27893C2.96382 36 1.13218 34.0406 1.288 31.7308L2.63721 11.7308Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.2836 28.0625H14.8236V15.4625H17.4696V25.6865H23.2836V28.0625Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      });
}
function Bu({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            d: `M1.74515 6.72713C1.88863 4.6288 3.6326 3 5.73584 3H30.2642C32.3674 3 34.1114 4.6288 34.2548 6.72713L35.7078 27.9771C35.8659 30.2883 34.0337 32.25 31.7172 32.25H4.28284C1.96629 32.25 0.134134 30.2883 0.292162 27.9771L1.74515 6.72713Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.6518 24.0625H20.7178L18.1798 19.8145H17.8738H16.0018V24.0625H13.3558V11.4625H18.0718C19.7998 11.4625 21.0718 11.8105 21.8878 12.5065C22.7038 13.1905 23.1118 14.1505 23.1118 15.3865C23.1118 16.3585 22.8958 17.1685 22.4638 17.8165C22.0438 18.4645 21.4498 18.9565 20.6818 19.2925L23.6518 24.0625ZM16.0018 13.7125V17.5465H18.0718C18.7678 17.5465 19.3078 17.3725 19.6918 17.0245C20.0878 16.6645 20.2858 16.1725 20.2858 15.5485C20.2858 14.9365 20.0938 14.4805 19.7098 14.1805C19.3378 13.8685 18.7378 13.7125 17.9098 13.7125H16.0018Z`,
          }),
        ],
      });
}
function Vu({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            d: `M2.63721 11.7308C2.77887 9.6309 4.5235 8 6.62814 8H29.3719C31.4765 8 33.2211 9.63091 33.3628 11.7308L34.712 31.7308C34.8678 34.0406 33.0362 36 30.7211 36H5.27893C2.96382 36 1.13218 34.0406 1.288 31.7308L2.63721 11.7308Z`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.6518 28.0625H20.7178L18.1798 23.8145H17.8738H16.0018V28.0625H13.3558V15.4625H18.0718C19.7998 15.4625 21.0718 15.8105 21.8878 16.5065C22.7038 17.1905 23.1118 18.1505 23.1118 19.3865C23.1118 20.3585 22.8958 21.1685 22.4638 21.8165C22.0438 22.4645 21.4498 22.9565 20.6818 23.2925L23.6518 28.0625ZM16.0018 17.7125V21.5465H18.0718C18.7678 21.5465 19.3078 21.3725 19.6918 21.0245C20.0878 20.6645 20.2858 20.1725 20.2858 19.5485C20.2858 18.9365 20.0938 18.4805 19.7098 18.1805C19.3378 17.8685 18.7378 17.7125 17.9098 17.7125H16.0018Z`,
          }),
          (0, z.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      });
}
function Hu({ bIsKnockout: e, ...t }) {
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
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, z.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.8599 10.3361C18.8719 10.3361 19.7519 10.4974 20.4999 10.8201C21.2626 11.1427 21.8493 11.5974 22.2599 12.1841C22.6706 12.7561 22.8759 13.4234 22.8759 14.1861C22.8759 14.6994 22.7879 15.1541 22.6119 15.5501C22.4359 15.9461 22.2159 16.2834 21.9519 16.5621C21.7026 16.8407 21.3579 17.1781 20.9179 17.5741C20.4633 17.9701 20.0966 18.3221 19.8179 18.6301C19.5539 18.9234 19.3266 19.2901 19.1359 19.7301C18.9453 20.1554 18.8499 20.6541 18.8499 21.2261H16.1659C16.1659 20.4047 16.2686 19.7081 16.4739 19.1361C16.6793 18.5641 16.9286 18.1094 17.2219 17.7721C17.5153 17.4347 17.8893 17.0681 18.3439 16.6721C18.7693 16.3201 19.0846 16.0047 19.2899 15.7261C19.4953 15.4474 19.5979 15.1027 19.5979 14.6921C19.5979 14.1201 19.3853 13.6801 18.9599 13.3721C18.5493 13.0494 17.9699 12.8881 17.2219 12.8881C16.1073 12.8881 15.0586 13.2547 14.0759 13.9881L13.0859 11.7661C13.7166 11.3407 14.4499 10.9961 15.2859 10.7321C16.1219 10.4681 16.9799 10.3361 17.8599 10.3361ZM17.5519 22.7881C18.0653 22.7881 18.4759 22.9494 18.7839 23.2721C19.0919 23.5801 19.2459 23.9907 19.2459 24.5041C19.2459 25.0467 19.0919 25.4794 18.7839 25.8021C18.4759 26.1101 18.0653 26.2641 17.5519 26.2641C17.0386 26.2641 16.6279 26.1101 16.3199 25.8021C16.0119 25.4794 15.8579 25.0467 15.8579 24.5041C15.8579 23.9907 16.0119 23.5801 16.3199 23.2721C16.6279 22.9494 17.0386 22.7881 17.5519 22.7881Z`,
          }),
        ],
      });
}
var Uu = `_5YxPcG58GcM-`,
  Wu = `AYShSUpazpQ-`,
  Gu = `HjTriTNInOs-`;
function Ku(e) {
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
    m = Zt(),
    h = Ye(),
    [g, _] = (0, R.useState)(
      () => r || (!n && se(m, `tab`) ? (se(m, `tab`) ?? ``) : ``),
    );
  (0, R.useEffect)(() => {
    if (!e.bDisableRouting && m) {
      let e = se(m, `tab`);
      e && _(e);
    }
  }, [m, e.bDisableRouting, _]);
  let v = R.useCallback(
      (e) => {
        (_(e.key),
          n || oe(h, `tab`, e.key),
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
        (0, z.jsx)(Fe, {
          className: P(
            Uu,
            d && `iBLrw-7gAIM-`,
            p && `dLhmGXBhTkM-`,
            f && `ShXw34CXvuE-`,
            o,
          ),
          navEntryPreferPosition: u ? $e.PREFERRED_CHILD : $e.FIRST,
          children: y.map((e, t) =>
            (0, z.jsx)(
              qu,
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
        x && (0, z.jsx)(Fe, { className: l, children: x.contents }),
      ],
    });
  return d ? (0, z.jsx)(Fe, { className: P(Gu), children: C }) : C;
}
function qu(e) {
  let {
    tab: t,
    OnTabClick: n,
    classNameTab: r,
    focusRingHasBorderRadius: i,
    active: a,
    preferredFocus: o,
  } = e;
  return (0, z.jsx)(ci, {
    condition: !!(t.statusToolTip || t.tooltip),
    wrap: (e) =>
      (0, z.jsx)(Zn, {
        toolTipContent: t.statusToolTip || t.tooltip,
        children: e,
      }),
    children: (0, z.jsxs)(Fe, {
      className: P(Wu, a && `Tw-TchJW1T8-`, a && `ActiveTab`, r),
      onActivate: () => n(t),
      preferredFocus: o,
      focusRingHasBorderRadius: i,
      children: [
        !!t.vo_warning &&
          (0, z.jsx)(Zn, {
            toolTipContent: t.vo_warning,
            children: (0, z.jsx)(`div`, {
              className: `OpvmjD098-U-`,
              children: L(`#EventEditor_VOWarning`),
            }),
          }),
        t.status,
        t.name,
      ],
    }),
  });
}
var Ju = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || ui(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: Ir.readUint32, bw: Vr.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= Mi(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return qr(e.M(), t, n);
    }
    static fromObject(t) {
      return kr(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return la(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Request`;
    }
  },
  Yu = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.frame_rates || ui(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { frame_rates: { n: 1, c: Xu, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= Mi(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return qr(e.M(), t, n);
    }
    static fromObject(t) {
      return kr(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return la(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Response`;
    }
  },
  Xu = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clusterid || ui(e.M()),
        B.Message.initialize(this, t, 0, -1, [8], null));
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
              br: Ir.readUint64String,
              bw: Vr.writeUint64String,
            },
            report_days: { n: 4, br: Ir.readUint32, bw: Vr.writeUint32 },
            report_count: {
              n: 5,
              br: Ir.readUint64String,
              bw: Vr.writeUint64String,
            },
            mean_frame_rate: { n: 6, br: Ir.readDouble, bw: Vr.writeDouble },
            frame_rate_histogram: {
              n: 8,
              r: !0,
              q: !0,
              br: Ir.readDouble,
              pbr: Ir.readPackedDouble,
              bw: Vr.writeRepeatedDouble,
            },
            histogram_report_count: {
              n: 9,
              br: Ir.readUint64String,
              bw: Vr.writeUint64String,
            },
            last_updated: { n: 10, br: Ir.readUint32, bw: Vr.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= Mi(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return qr(e.M(), t, n);
    }
    static fromObject(t) {
      return kr(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return la(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Response_FrameRate`;
    }
  },
  Zu;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `GamePerformanceStats.GetGameFrameRateStats#1`,
      li(Ju, t, n),
      Yu,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`, `store`, `community`],
      },
    );
  }
  e.GetGameFrameRateStats = t;
})((Zu ||= {}));
function Qu(e) {
  let t = ua(),
    { data: n } = m({
      queryKey: [`performancestats_` + e],
      queryFn: async () => {
        if (!e) return null;
        let n = tn.Init(Ju);
        n.Body().set_appid(e);
        let r = await Zu.GetGameFrameRateStats(t, n);
        return r.BSuccess() ? r.Body().toObject() : null;
      },
    });
  return n ?? void 0;
}
function $u(e, t = !0) {
  return m({
    queryKey: [`GetControllersUsed`],
    queryFn: async () => {
      let e;
      try {
        let t = `${mr.STORE_BASE_URL}account/ajaxgetcontrollersused`,
          n = await fo.default.get(t, { withCredentials: !0 });
        if (n?.status === 200 && n?.data?.success === 1) return n.data.data;
        e = $n(n);
      } catch (t) {
        e = $n(t);
      }
      return (console.error(`usePlayerHardwareUsed failed:`, e), null);
    },
    select: e,
    enabled: t && !!wa.accountid,
  });
}
function ed(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = ed(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function W() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = ed(e)) && (r && (r += ` `), (r += t));
  return r;
}
var td =
  `dangerouslySetInnerHTML.onCopy.onCopyCapture.onCut.onCutCapture.onPaste.onPasteCapture.onCompositionEnd.onCompositionEndCapture.onCompositionStart.onCompositionStartCapture.onCompositionUpdate.onCompositionUpdateCapture.onFocus.onFocusCapture.onBlur.onBlurCapture.onChange.onChangeCapture.onBeforeInput.onBeforeInputCapture.onInput.onInputCapture.onReset.onResetCapture.onSubmit.onSubmitCapture.onInvalid.onInvalidCapture.onLoad.onLoadCapture.onError.onErrorCapture.onKeyDown.onKeyDownCapture.onKeyPress.onKeyPressCapture.onKeyUp.onKeyUpCapture.onAbort.onAbortCapture.onCanPlay.onCanPlayCapture.onCanPlayThrough.onCanPlayThroughCapture.onDurationChange.onDurationChangeCapture.onEmptied.onEmptiedCapture.onEncrypted.onEncryptedCapture.onEnded.onEndedCapture.onLoadedData.onLoadedDataCapture.onLoadedMetadata.onLoadedMetadataCapture.onLoadStart.onLoadStartCapture.onPause.onPauseCapture.onPlay.onPlayCapture.onPlaying.onPlayingCapture.onProgress.onProgressCapture.onRateChange.onRateChangeCapture.onSeeked.onSeekedCapture.onSeeking.onSeekingCapture.onStalled.onStalledCapture.onSuspend.onSuspendCapture.onTimeUpdate.onTimeUpdateCapture.onVolumeChange.onVolumeChangeCapture.onWaiting.onWaitingCapture.onAuxClick.onAuxClickCapture.onClick.onClickCapture.onContextMenu.onContextMenuCapture.onDoubleClick.onDoubleClickCapture.onDrag.onDragCapture.onDragEnd.onDragEndCapture.onDragEnter.onDragEnterCapture.onDragExit.onDragExitCapture.onDragLeave.onDragLeaveCapture.onDragOver.onDragOverCapture.onDragStart.onDragStartCapture.onDrop.onDropCapture.onMouseDown.onMouseDownCapture.onMouseEnter.onMouseLeave.onMouseMove.onMouseMoveCapture.onMouseOut.onMouseOutCapture.onMouseOver.onMouseOverCapture.onMouseUp.onMouseUpCapture.onSelect.onSelectCapture.onTouchCancel.onTouchCancelCapture.onTouchEnd.onTouchEndCapture.onTouchMove.onTouchMoveCapture.onTouchStart.onTouchStartCapture.onPointerDown.onPointerDownCapture.onPointerMove.onPointerMoveCapture.onPointerUp.onPointerUpCapture.onPointerCancel.onPointerCancelCapture.onPointerEnter.onPointerEnterCapture.onPointerLeave.onPointerLeaveCapture.onPointerOver.onPointerOverCapture.onPointerOut.onPointerOutCapture.onGotPointerCapture.onGotPointerCaptureCapture.onLostPointerCapture.onLostPointerCaptureCapture.onScroll.onScrollCapture.onWheel.onWheelCapture.onAnimationStart.onAnimationStartCapture.onAnimationEnd.onAnimationEndCapture.onAnimationIteration.onAnimationIterationCapture.onTransitionEnd.onTransitionEndCapture`.split(
    `.`,
  );
function nd(e) {
  return typeof e == `string` && td.includes(e);
}
var rd =
  `aria-activedescendant.aria-atomic.aria-autocomplete.aria-busy.aria-checked.aria-colcount.aria-colindex.aria-colspan.aria-controls.aria-current.aria-describedby.aria-details.aria-disabled.aria-errormessage.aria-expanded.aria-flowto.aria-haspopup.aria-hidden.aria-invalid.aria-keyshortcuts.aria-label.aria-labelledby.aria-level.aria-live.aria-modal.aria-multiline.aria-multiselectable.aria-orientation.aria-owns.aria-placeholder.aria-posinset.aria-pressed.aria-readonly.aria-relevant.aria-required.aria-roledescription.aria-rowcount.aria-rowindex.aria-rowspan.aria-selected.aria-setsize.aria-sort.aria-valuemax.aria-valuemin.aria-valuenow.aria-valuetext.className.color.height.id.lang.max.media.method.min.name.style.target.width.role.tabIndex.accentHeight.accumulate.additive.alignmentBaseline.allowReorder.alphabetic.amplitude.arabicForm.ascent.attributeName.attributeType.autoReverse.azimuth.baseFrequency.baselineShift.baseProfile.bbox.begin.bias.by.calcMode.capHeight.clip.clipPath.clipPathUnits.clipRule.colorInterpolation.colorInterpolationFilters.colorProfile.colorRendering.contentScriptType.contentStyleType.cursor.cx.cy.d.decelerate.descent.diffuseConstant.direction.display.divisor.dominantBaseline.dur.dx.dy.edgeMode.elevation.enableBackground.end.exponent.externalResourcesRequired.fill.fillOpacity.fillRule.filter.filterRes.filterUnits.floodColor.floodOpacity.focusable.fontFamily.fontSize.fontSizeAdjust.fontStretch.fontStyle.fontVariant.fontWeight.format.from.fx.fy.g1.g2.glyphName.glyphOrientationHorizontal.glyphOrientationVertical.glyphRef.gradientTransform.gradientUnits.hanging.horizAdvX.horizOriginX.href.ideographic.imageRendering.in2.in.intercept.k1.k2.k3.k4.k.kernelMatrix.kernelUnitLength.kerning.keyPoints.keySplines.keyTimes.lengthAdjust.letterSpacing.lightingColor.limitingConeAngle.local.markerEnd.markerHeight.markerMid.markerStart.markerUnits.markerWidth.mask.maskContentUnits.maskUnits.mathematical.mode.numOctaves.offset.opacity.operator.order.orient.orientation.origin.overflow.overlinePosition.overlineThickness.paintOrder.panose1.pathLength.patternContentUnits.patternTransform.patternUnits.pointerEvents.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.r.radius.refX.refY.renderingIntent.repeatCount.repeatDur.requiredExtensions.requiredFeatures.restart.result.rotate.rx.ry.seed.shapeRendering.slope.spacing.specularConstant.specularExponent.speed.spreadMethod.startOffset.stdDeviation.stemh.stemv.stitchTiles.stopColor.stopOpacity.strikethroughPosition.strikethroughThickness.string.stroke.strokeDasharray.strokeDashoffset.strokeLinecap.strokeLinejoin.strokeMiterlimit.strokeOpacity.strokeWidth.surfaceScale.systemLanguage.tableValues.targetX.targetY.textAnchor.textDecoration.textLength.textRendering.to.transform.u1.u2.underlinePosition.underlineThickness.unicode.unicodeBidi.unicodeRange.unitsPerEm.vAlphabetic.values.vectorEffect.version.vertAdvY.vertOriginX.vertOriginY.vHanging.vIdeographic.viewTarget.visibility.vMathematical.widths.wordSpacing.writingMode.x1.x2.x.xChannelSelector.xHeight.xlinkActuate.xlinkArcrole.xlinkHref.xlinkRole.xlinkShow.xlinkTitle.xlinkType.xmlBase.xmlLang.xmlns.xmlnsXlink.xmlSpace.y1.y2.y.yChannelSelector.z.zoomAndPan.ref.key.angle`.split(
    `.`,
  );
function id(e) {
  return typeof e == `string` && rd.includes(e);
}
function ad(e) {
  return typeof e == `string` && e.startsWith(`data-`);
}
function od(e) {
  var t = Object.entries(e).filter((e) => {
    var [t] = e;
    return id(t) || ad(t);
  });
  return Object.fromEntries(t);
}
function sd(e) {
  if (e == null) return null;
  if (
    (0, R.isValidElement)(e) &&
    typeof e.props == `object` &&
    e.props !== null
  ) {
    var t = e.props;
    return od(t);
  }
  return typeof e == `object` && !Array.isArray(e) ? od(e) : null;
}
function cd(e) {
  var t = Object.entries(e).filter((e) => {
    var [t] = e;
    return id(t) || ad(t) || nd(t);
  });
  return Object.fromEntries(t);
}
function ld(e) {
  return e == null
    ? null
    : (0, R.isValidElement)(e)
      ? cd(e.props)
      : typeof e == `object` && !Array.isArray(e)
        ? cd(e)
        : null;
}
var ud = [
  `children`,
  `width`,
  `height`,
  `viewBox`,
  `className`,
  `style`,
  `title`,
  `desc`,
];
function dd() {
  return (
    (dd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    dd.apply(null, arguments)
  );
}
function fd(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = pd(e, t);
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
function pd(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var md = (0, R.forwardRef)((e, t) => {
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
      u = fd(e, ud),
      d = a || { width: r, height: i, x: 0, y: 0 },
      f = W(`recharts-surface`, o);
    return R.createElement(
      `svg`,
      dd({}, cd(u), {
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
  hd = [`children`, `className`];
function gd() {
  return (
    (gd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gd.apply(null, arguments)
  );
}
function _d(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = vd(e, t);
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
function vd(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var yd = R.forwardRef((e, t) => {
    var { children: n, className: r } = e,
      i = _d(e, hd),
      a = W(`recharts-layer`, r);
    return R.createElement(`g`, gd({ className: a }, cd(i), { ref: t }), n);
  }),
  bd = (0, R.createContext)(null),
  xd = () => (0, R.useContext)(bd);
function G(e) {
  return function () {
    return e;
  };
}
var Sd = Math.cos,
  Cd = Math.sin,
  wd = Math.sqrt,
  Td = Math.PI;
Td / 2;
var Ed = 2 * Td,
  Dd = Math.PI,
  Od = 2 * Dd,
  kd = 1e-6,
  Ad = Od - kd;
function jd(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function Md(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
  if (t > 15) return jd;
  let n = 10 ** t;
  return function (e) {
    this._ += e[0];
    for (let t = 1, r = e.length; t < r; ++t)
      this._ += Math.round(arguments[t] * n) / n + e[t];
  };
}
var Nd = class {
  constructor(e) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ``),
      (this._append = e == null ? jd : Md(e)));
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
    else if (d > kd) {
      if (!(Math.abs(u * s - c * l) > kd) || !i)
        this._append`L${(this._x1 = e)},${(this._y1 = t)}`;
      else {
        let f = n - a,
          p = r - o,
          m = s * s + c * c,
          h = f * f + p * p,
          g = Math.sqrt(m),
          _ = Math.sqrt(d),
          v = i * Math.tan((Dd - Math.acos((m + d - h) / (2 * g * _))) / 2),
          y = v / _,
          b = v / g;
        (Math.abs(y - 1) > kd && this._append`L${e + y * l},${t + y * u}`,
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
      : (Math.abs(this._x1 - c) > kd || Math.abs(this._y1 - l) > kd) &&
        this._append`L${c},${l}`,
      n &&
        (d < 0 && (d = (d % Od) + Od),
        d > Ad
          ? this._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${(this._x1 = c)},${(this._y1 = l)}`
          : d > kd &&
            this._append`A${n},${n},0,${+(d >= Dd)},${u},${(this._x1 = e + n * Math.cos(i))},${(this._y1 = t + n * Math.sin(i))}`));
  }
  rect(e, t, n, r) {
    this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}h${(n = +n)}v${+r}h${-n}Z`;
  }
  toString() {
    return this._;
  }
};
Nd.prototype;
function Pd(e) {
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
    () => new Nd(t)
  );
}
Array.prototype.slice;
function Fd(e) {
  return typeof e == `object` && `length` in e ? e : Array.from(e);
}
function Id(e) {
  this._context = e;
}
Id.prototype = {
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
function Ld(e) {
  return new Id(e);
}
function Rd(e) {
  return e[0];
}
function zd(e) {
  return e[1];
}
function Bd(e, t) {
  var n = G(!0),
    r = null,
    i = Ld,
    a = null,
    o = Pd(s);
  ((e = typeof e == `function` ? e : e === void 0 ? Rd : G(e)),
    (t = typeof t == `function` ? t : t === void 0 ? zd : G(t)));
  function s(s) {
    var c,
      l = (s = Fd(s)).length,
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
function Vd(e, t, n) {
  var r = null,
    i = G(!0),
    a = null,
    o = Ld,
    s = null,
    c = Pd(l);
  ((e = typeof e == `function` ? e : e === void 0 ? Rd : G(+e)),
    (t = typeof t == `function` ? t : G(t === void 0 ? 0 : +t)),
    (n = typeof n == `function` ? n : n === void 0 ? zd : G(+n)));
  function l(l) {
    var u,
      d,
      f,
      p = (l = Fd(l)).length,
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
    return Bd().defined(i).curve(o).context(a);
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
var Hd = class {
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
function Ud(e) {
  return new Hd(e, !0);
}
function Wd(e) {
  return new Hd(e, !1);
}
var Gd = {
    draw(e, t) {
      let n = wd(t / Td);
      (e.moveTo(n, 0), e.arc(0, 0, n, 0, Ed));
    },
  },
  Kd = {
    draw(e, t) {
      let n = wd(t / 5) / 2;
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
  qd = wd(1 / 3),
  Jd = qd * 2,
  Yd = {
    draw(e, t) {
      let n = wd(t / Jd),
        r = n * qd;
      (e.moveTo(0, -n),
        e.lineTo(r, 0),
        e.lineTo(0, n),
        e.lineTo(-r, 0),
        e.closePath());
    },
  },
  Xd = {
    draw(e, t) {
      let n = wd(t),
        r = -n / 2;
      e.rect(r, r, n, n);
    },
  },
  Zd = 0.8908130915292852,
  Qd = Cd(Td / 10) / Cd((7 * Td) / 10),
  $d = Cd(Ed / 10) * Qd,
  ef = -Sd(Ed / 10) * Qd,
  tf = {
    draw(e, t) {
      let n = wd(t * Zd),
        r = $d * n,
        i = ef * n;
      (e.moveTo(0, -n), e.lineTo(r, i));
      for (let t = 1; t < 5; ++t) {
        let a = (Ed * t) / 5,
          o = Sd(a),
          s = Cd(a);
        (e.lineTo(s * n, -o * n), e.lineTo(o * r - s * i, s * r + o * i));
      }
      e.closePath();
    },
  },
  nf = wd(3),
  rf = {
    draw(e, t) {
      let n = -wd(t / (nf * 3));
      (e.moveTo(0, n * 2),
        e.lineTo(-nf * n, -n),
        e.lineTo(nf * n, -n),
        e.closePath());
    },
  },
  af = -0.5,
  of = wd(3) / 2,
  sf = 1 / wd(12),
  cf = (sf / 2 + 1) * 3,
  lf = {
    draw(e, t) {
      let n = wd(t / cf),
        r = n / 2,
        i = n * sf,
        a = r,
        o = n * sf + n,
        s = -a,
        c = o;
      (e.moveTo(r, i),
        e.lineTo(a, o),
        e.lineTo(s, c),
        e.lineTo(af * r - of * i, of * r + af * i),
        e.lineTo(af * a - of * o, of * a + af * o),
        e.lineTo(af * s - of * c, of * s + af * c),
        e.lineTo(af * r + of * i, af * i - of * r),
        e.lineTo(af * a + of * o, af * o - of * a),
        e.lineTo(af * s + of * c, af * c - of * s),
        e.closePath());
    },
  };
function uf(e, t) {
  let n = null,
    r = Pd(i);
  ((e = typeof e == `function` ? e : G(e || Gd)),
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
function df() {}
function ff(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6,
  );
}
function pf(e) {
  this._context = e;
}
pf.prototype = {
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
        ff(this, this._x1, this._y1);
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
        ff(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function mf(e) {
  return new pf(e);
}
function hf(e) {
  this._context = e;
}
hf.prototype = {
  areaStart: df,
  areaEnd: df,
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
        ff(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function gf(e) {
  return new hf(e);
}
function _f(e) {
  this._context = e;
}
_f.prototype = {
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
        ff(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function vf(e) {
  return new _f(e);
}
function yf(e) {
  this._context = e;
}
yf.prototype = {
  areaStart: df,
  areaEnd: df,
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
function bf(e) {
  return new yf(e);
}
function xf(e) {
  return e < 0 ? -1 : 1;
}
function Sf(e, t, n) {
  var r = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (r || (i < 0 && -0)),
    o = (n - e._y1) / (i || (r < 0 && -0)),
    s = (a * i + o * r) / (r + i);
  return (
    (xf(a) + xf(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0
  );
}
function Cf(e, t) {
  var n = e._x1 - e._x0;
  return n ? ((3 * (e._y1 - e._y0)) / n - t) / 2 : t;
}
function wf(e, t, n) {
  var r = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    s = (a - r) / 3;
  e._context.bezierCurveTo(r + s, i + s * t, a - s, o - s * n, a, o);
}
function Tf(e) {
  this._context = e;
}
Tf.prototype = {
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
        wf(this, this._t0, Cf(this, this._t0));
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
          ((this._point = 3), wf(this, Cf(this, (n = Sf(this, e, t))), n));
          break;
        default:
          wf(this, this._t0, (n = Sf(this, e, t)));
      }
      ((this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = n));
    }
  },
};
function Ef(e) {
  this._context = new Df(e);
}
(Ef.prototype = Object.create(Tf.prototype)).point = function (e, t) {
  Tf.prototype.point.call(this, t, e);
};
function Df(e) {
  this._context = e;
}
Df.prototype = {
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
function Of(e) {
  return new Tf(e);
}
function kf(e) {
  return new Ef(e);
}
function Af(e) {
  this._context = e;
}
Af.prototype = {
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
        for (var r = jf(e), i = jf(t), a = 0, o = 1; o < n; ++a, ++o)
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
function jf(e) {
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
function Mf(e) {
  return new Af(e);
}
function Nf(e, t) {
  ((this._context = e), (this._t = t));
}
Nf.prototype = {
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
function Pf(e) {
  return new Nf(e, 0.5);
}
function Ff(e) {
  return new Nf(e, 0);
}
function If(e) {
  return new Nf(e, 1);
}
function Lf(e, t) {
  if ((o = e.length) > 1)
    for (var n = 1, r, i, a = e[t[0]], o, s = a.length; n < o; ++n)
      for (i = a, a = e[t[n]], r = 0; r < s; ++r)
        a[r][1] += a[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
}
function Rf(e) {
  for (var t = e.length, n = Array(t); --t >= 0;) n[t] = t;
  return n;
}
function zf(e, t) {
  return e[t];
}
function Bf(e) {
  let t = [];
  return ((t.key = e), t);
}
function Vf() {
  var e = G([]),
    t = Rf,
    n = Lf,
    r = zf;
  function i(i) {
    var a = Array.from(e.apply(this, arguments), Bf),
      o,
      s = a.length,
      c = -1,
      l;
    for (let e of i)
      for (o = 0, ++c; o < s; ++o)
        (a[o][c] = [0, +r(e, a[o].key, c, i)]).data = e;
    for (o = 0, l = Fd(t(a)); o < s; ++o) a[l[o]].index = o;
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
        ? ((t = e == null ? Rf : typeof e == `function` ? e : G(Array.from(e))),
          i)
        : t;
    }),
    (i.offset = function (e) {
      return arguments.length ? ((n = e ?? Lf), i) : n;
    }),
    i
  );
}
function Hf(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = n = 0; n < r; ++n) o += e[n][i][1] || 0;
      if (o) for (n = 0; n < r; ++n) e[n][i][1] /= o;
    }
    Lf(e, t);
  }
}
function Uf(e, t) {
  if ((i = e.length) > 0) {
    for (var n = 0, r = e[t[0]], i, a = r.length; n < a; ++n) {
      for (var o = 0, s = 0; o < i; ++o) s += e[o][n][1] || 0;
      r[n][1] += r[n][0] = -s / 2;
    }
    Lf(e, t);
  }
}
function Wf(e, t) {
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
    ((i[r - 1][1] += i[r - 1][0] = n), Lf(e, t));
  }
}
var Gf = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e === `__proto__`;
    }
    e.isUnsafeProperty = t;
  }),
  Kf = n((e) => {
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
  qf = n((e) => {
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
  Jf = n((e) => {
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
  Yf = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Gf(),
      n = Kf(),
      r = qf(),
      i = Jf();
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
  Xf = n((e, t) => {
    t.exports = Yf().get;
  }),
  Zf = e(Xf()),
  Qf = (e) => (e === 0 ? 0 : e > 0 ? 1 : -1),
  $f = (e) => typeof e == `number` && e != +e,
  ep = (e) => typeof e == `string` && e.indexOf(`%`) === e.length - 1,
  K = (e) => (typeof e == `number` || e instanceof Number) && !$f(e),
  tp = (e) => K(e) || typeof e == `string`,
  np = 0,
  rp = (e) => {
    var t = ++np;
    return `${e || ``}${t}`;
  },
  ip = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      r = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    if (!K(e) && typeof e != `string`) return n;
    var i;
    if (ep(e)) {
      if (t == null) return n;
      var a = e.indexOf(`%`);
      i = (t * parseFloat(e.slice(0, a))) / 100;
    } else i = +e;
    return ($f(i) && (i = n), r && t != null && i > t && (i = t), i);
  },
  ap = (e) => {
    if (!Array.isArray(e)) return !1;
    for (var t = e.length, n = {}, r = 0; r < t; r++)
      if (!n[e[r]]) n[e[r]] = !0;
      else return !0;
    return !1;
  };
function op(e, t, n) {
  return K(e) && K(t) ? e + n * (t - e) : t;
}
function sp(e, t, n) {
  if (e && e.length)
    return e.find(
      (e) => e && (typeof t == `function` ? t(e) : (0, Zf.default)(e, t)) === n,
    );
}
var cp = (e) => e == null,
  lp = (e) => (cp(e) ? e : `${e.charAt(0).toUpperCase()}${e.slice(1)}`),
  up = [`type`, `size`, `sizeType`];
function dp() {
  return (
    (dp = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    dp.apply(null, arguments)
  );
}
function fp(e, t) {
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
function pp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? fp(Object(n), !0).forEach(function (t) {
          mp(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : fp(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function mp(e, t, n) {
  return (
    (t = hp(t)) in e
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
function hp(e) {
  var t = gp(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function gp(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function _p(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = vp(e, t);
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
function vp(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var yp = {
    symbolCircle: Gd,
    symbolCross: Kd,
    symbolDiamond: Yd,
    symbolSquare: Xd,
    symbolStar: tf,
    symbolTriangle: rf,
    symbolWye: lf,
  },
  bp = Math.PI / 180,
  xp = (e) => yp[`symbol${lp(e)}`] || Gd,
  Sp = (e, t, n) => {
    if (t === `area`) return e;
    switch (n) {
      case `cross`:
        return (5 * e * e) / 9;
      case `diamond`:
        return (0.5 * e * e) / Math.sqrt(3);
      case `square`:
        return e * e;
      case `star`:
        var r = 18 * bp;
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
  Cp = (e, t) => {
    yp[`symbol${lp(e)}`] = t;
  },
  wp = (e) => {
    var { type: t = `circle`, size: n = 64, sizeType: r = `area` } = e,
      i = pp(pp({}, _p(e, up)), {}, { type: t, size: n, sizeType: r }),
      a = `circle`;
    typeof t == `string` && (a = t);
    var o = () => {
        var e = xp(a),
          t = uf()
            .type(e)
            .size(Sp(n, r, a))();
        if (t !== null) return t;
      },
      { className: s, cx: c, cy: l } = i,
      u = cd(i);
    return c === +c && l === +l && n === +n
      ? R.createElement(
          `path`,
          dp({}, u, {
            className: W(`recharts-symbols`, s),
            transform: `translate(${c}, ${l})`,
            d: o(),
          }),
        )
      : null;
  };
wp.registerSymbol = Cp;
var Tp = (e, t) => {
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
        nd(e) && (r[e] = t || ((t) => n[e](n, t)));
      }),
      r
    );
  },
  Ep = (e, t, n) => (r) => (e(t, n, r), null),
  Dp = (e, t, n) => {
    if (e === null || (typeof e != `object` && typeof e != `function`))
      return null;
    var r = null;
    return (
      Object.keys(e).forEach((i) => {
        var a = e[i];
        nd(i) && typeof a == `function` && ((r ||= {}), (r[i] = Ep(a, t, n)));
      }),
      r
    );
  },
  Op = n((e) => {
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
  kp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e;
    }
    e.identity = t;
  }),
  Ap = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Number.isSafeInteger(e) && e >= 0;
    }
    e.isLength = t;
  }),
  jp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Ap();
    function n(e) {
      return e != null && typeof e != `function` && t.isLength(e.length);
    }
    e.isArrayLike = n;
  }),
  Mp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `object` && !!e;
    }
    e.isObjectLike = t;
  }),
  Np = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = jp(),
      n = Mp();
    function r(e) {
      return n.isObjectLike(e) && t.isArrayLike(e);
    }
    e.isArrayLikeObject = r;
  }),
  Pp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Yf();
    function n(e) {
      return function (n) {
        return t.get(n, e);
      };
    }
    e.property = n;
  }),
  Fp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e !== null && (typeof e == `object` || typeof e == `function`);
    }
    e.isObject = t;
  }),
  Ip = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e == null || (typeof e != `object` && typeof e != `function`);
    }
    e.isPrimitive = t;
  }),
  Lp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e, t) {
      return e === t || (Number.isNaN(e) && Number.isNaN(t));
    }
    e.eq = t;
  }),
  Rp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = zp(),
      n = Fp(),
      r = Ip(),
      i = Lp();
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
  zp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Rp();
    function n(e, n) {
      return t.isMatchWith(e, n, () => void 0);
    }
    e.isMatch = n;
  }),
  Bp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Object.getOwnPropertySymbols(e).filter((t) =>
        Object.prototype.propertyIsEnumerable.call(e, t),
      );
    }
    e.getSymbols = t;
  }),
  Vp = n((e) => {
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
  Hp = n((e) => {
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
  Up = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return ArrayBuffer.isView(e) && !(e instanceof DataView);
    }
    e.isTypedArray = t;
  }),
  Wp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Bp(),
      n = Vp(),
      r = Hp(),
      i = Ip(),
      a = Up();
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
  Gp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Wp();
    function n(e) {
      return t.cloneDeepWithImpl(e, void 0, e, new Map(), void 0);
    }
    e.cloneDeep = n;
  }),
  Kp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = zp(),
      n = Gp();
    function r(e) {
      return ((e = n.cloneDeep(e)), (n) => t.isMatch(n, e));
    }
    e.matches = r;
  }),
  qp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Wp(),
      n = Hp();
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
  Jp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = qp();
    function n(e) {
      return t.cloneDeepWith(e);
    }
    e.cloneDeep = n;
  }),
  Yp = n((e) => {
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
  Xp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Vp();
    function n(e) {
      return (
        typeof e == `object` && !!e && t.getTag(e) === `[object Arguments]`
      );
    }
    e.isArguments = n;
  }),
  Zp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Kf(),
      n = Yp(),
      r = Xp(),
      i = Jf();
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
  Qp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = zp(),
      n = qf(),
      r = Jp(),
      i = Yf(),
      a = Zp();
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
  $p = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = kp(),
      n = Pp(),
      r = Kp(),
      i = Qp();
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
  em = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Op(),
      n = kp(),
      r = Np(),
      i = $p();
    function a(e, a = n.identity) {
      return r.isArrayLikeObject(e)
        ? t.uniqBy(Array.from(e), i.iteratee(a))
        : [];
    }
    e.uniqBy = a;
  }),
  tm = e(
    n((e, t) => {
      t.exports = em().uniqBy;
    })(),
  );
function nm(e, t, n) {
  return t === !0
    ? (0, tm.default)(e, n)
    : typeof t == `function`
      ? (0, tm.default)(e, t)
      : e;
}
var rm = n((e) => {
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
  im = n((e, t) => {
    t.exports = rm();
  })(),
  am = (0, R.createContext)(null),
  om = (e) => e,
  q = () => {
    var e = (0, R.useContext)(am);
    return e ? e.store.dispatch : om;
  },
  sm = () => {},
  cm = () => sm,
  lm = (e, t) => e === t;
function J(e) {
  var t = (0, R.useContext)(am);
  return (0, im.useSyncExternalStoreWithSelector)(
    t ? t.subscription.addNestedSub : cm,
    t ? t.store.getState : sm,
    t ? t.store.getState : sm,
    t ? e : sm,
    lm,
  );
}
function um(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function dm(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != `object`) throw TypeError(t);
}
function fm(
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
var pm = (e) => (Array.isArray(e) ? e : [e]);
function mm(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    fm(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    t
  );
}
function hm(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var gm = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  _m = typeof WeakRef < `u` ? WeakRef : gm,
  vm = 0,
  ym = 1;
function bm() {
  return { s: vm, v: void 0, o: null, p: null };
}
function xm(e, t = {}) {
  let n = bm(),
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
        r === void 0 ? ((t = bm()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = bm()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === ym) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = i?.deref?.() ?? i;
      (e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new _m(c)
            : c));
    }
    return ((s.s = ym), (s.v = c), c);
  }
  return (
    (o.clearCache = () => {
      ((n = bm()), o.resetResultsCount());
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function Sm(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      (typeof o == `object` && ((a = o), (o = e.pop())),
        um(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`,
        ));
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = xm,
          argsMemoizeOptions: u = [],
          devModeChecks: d = {},
        } = { ...n, ...a },
        f = pm(c),
        p = pm(u),
        m = mm(e),
        h = s(
          function () {
            return (t++, o.apply(null, arguments));
          },
          ...f,
        ),
        g = l(
          function () {
            r++;
            let e = hm(m, arguments);
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
var Y = Sm(xm),
  Cm = Object.assign(
    (e, t = Y) => {
      dm(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {}),
      );
    },
    { withTypes: () => Cm },
  ),
  wm = n((e) => {
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
  Tm = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `symbol` || e instanceof Symbol;
    }
    e.isSymbol = t;
  }),
  Em = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Tm(),
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
  Dm = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = wm(),
      n = Em(),
      r = Jf();
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
  Om = n((e) => {
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
  km = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Yp(),
      n = jp(),
      r = Fp(),
      i = Lp();
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
  Am = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Dm(),
      n = Om(),
      r = km();
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
  jm = e(
    n((e, t) => {
      t.exports = Am().sortBy;
    })(),
  ),
  Mm = (e) => e.legend.settings,
  Nm = (e) => e.legend.size,
  Pm = Y([(e) => e.legend.payload, Mm], (e, t) => {
    var { itemSorter: n } = t,
      r = e.flat(1);
    return n ? (0, jm.default)(r, n) : r;
  }),
  Fm = 1;
function Im() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    [t, n] = (0, R.useState)({ height: 0, left: 0, top: 0, width: 0 });
  return [
    t,
    (0, R.useCallback)(
      (e) => {
        if (e != null) {
          var r = e.getBoundingClientRect(),
            i = { height: r.height, left: r.left, top: r.top, width: r.width };
          (Math.abs(i.height - t.height) > Fm ||
            Math.abs(i.left - t.left) > Fm ||
            Math.abs(i.top - t.top) > Fm ||
            Math.abs(i.width - t.width) > Fm) &&
            n({ height: i.height, left: i.left, top: i.top, width: i.width });
        }
      },
      [t.width, t.height, t.top, t.left, ...e],
    ),
  ];
}
function Lm(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Rm = (typeof Symbol == `function` && Symbol.observable) || `@@observable`,
  zm = () => Math.random().toString(36).substring(7).split(``).join(`.`),
  Bm = {
    INIT: `@@redux/INIT${zm()}`,
    REPLACE: `@@redux/REPLACE${zm()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${zm()}`,
  };
function Vm(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Hm(e, t, n) {
  if (typeof e != `function`) throw Error(Lm(2));
  if (
    (typeof t == `function` && typeof n == `function`) ||
    (typeof n == `function` && typeof arguments[3] == `function`)
  )
    throw Error(Lm(0));
  if (
    (typeof t == `function` && n === void 0 && ((n = t), (t = void 0)),
    n !== void 0)
  ) {
    if (typeof n != `function`) throw Error(Lm(1));
    return n(Hm)(e, t);
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
    if (c) throw Error(Lm(3));
    return i;
  }
  function d(e) {
    if (typeof e != `function`) throw Error(Lm(4));
    if (c) throw Error(Lm(5));
    let t = !0;
    l();
    let n = s++;
    return (
      o.set(n, e),
      function () {
        if (t) {
          if (c) throw Error(Lm(6));
          ((t = !1), l(), o.delete(n), (a = null));
        }
      }
    );
  }
  function f(e) {
    if (!Vm(e)) throw Error(Lm(7));
    if (e.type === void 0) throw Error(Lm(8));
    if (typeof e.type != `string`) throw Error(Lm(17));
    if (c) throw Error(Lm(9));
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
    if (typeof e != `function`) throw Error(Lm(10));
    ((r = e), f({ type: Bm.REPLACE }));
  }
  function m() {
    let e = d;
    return {
      subscribe(t) {
        if (typeof t != `object` || !t) throw Error(Lm(11));
        function n() {
          let e = t;
          e.next && e.next(u());
        }
        return (n(), { unsubscribe: e(n) });
      },
      [Rm]() {
        return this;
      },
    };
  }
  return (
    f({ type: Bm.INIT }),
    { dispatch: f, subscribe: d, getState: u, replaceReducer: p, [Rm]: m }
  );
}
function Um(e) {
  Object.keys(e).forEach((t) => {
    let n = e[t];
    if (n(void 0, { type: Bm.INIT }) === void 0) throw Error(Lm(12));
    if (n(void 0, { type: Bm.PROBE_UNKNOWN_ACTION() }) === void 0)
      throw Error(Lm(13));
  });
}
function Wm(e) {
  let t = Object.keys(e),
    n = {};
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    typeof e[i] == `function` && (n[i] = e[i]);
  }
  let r = Object.keys(n),
    i;
  try {
    Um(n);
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
      if (u === void 0) throw (t && t.type, Error(Lm(14)));
      ((o[s] = u), (a ||= u !== l));
    }
    return ((a ||= r.length !== Object.keys(e).length), a ? o : e);
  };
}
function Gm(...e) {
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
function Km(...e) {
  return (t) => (n, r) => {
    let i = t(n, r),
      a = () => {
        throw Error(Lm(15));
      },
      o = { getState: i.getState, dispatch: (e, ...t) => a(e, ...t) };
    return ((a = Gm(...e.map((e) => e(o)))(i.dispatch)), { ...i, dispatch: a });
  };
}
function qm(e) {
  return Vm(e) && `type` in e && typeof e.type == `string`;
}
var Jm = Symbol.for(`immer-nothing`),
  Ym = Symbol.for(`immer-draftable`),
  Xm = Symbol.for(`immer-state`);
function Zm(e, ...t) {
  throw Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var Qm = Object.getPrototypeOf;
function $m(e) {
  return !!e && !!e[Xm];
}
function eh(e) {
  return e
    ? rh(e) ||
        Array.isArray(e) ||
        !!e[Ym] ||
        !!e.constructor?.[Ym] ||
        lh(e) ||
        uh(e)
    : !1;
}
var th = Object.prototype.constructor.toString(),
  nh = new WeakMap();
function rh(e) {
  if (!e || typeof e != `object`) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null || t === Object.prototype) return !0;
  let n = Object.hasOwnProperty.call(t, `constructor`) && t.constructor;
  if (n === Object) return !0;
  if (typeof n != `function`) return !1;
  let r = nh.get(n);
  return (
    r === void 0 && ((r = Function.toString.call(n)), nh.set(n, r)), r === th
  );
}
function ih(e, t, n = !0) {
  ah(e) === 0
    ? (n ? Reflect.ownKeys(e) : Object.keys(e)).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function ah(e) {
  let t = e[Xm];
  return t ? t.type_ : Array.isArray(e) ? 1 : lh(e) ? 2 : uh(e) ? 3 : 0;
}
function oh(e, t) {
  return ah(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function sh(e, t, n) {
  let r = ah(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function ch(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
function lh(e) {
  return e instanceof Map;
}
function uh(e) {
  return e instanceof Set;
}
function dh(e) {
  return e.copy_ || e.base_;
}
function fh(e, t) {
  if (lh(e)) return new Map(e);
  if (uh(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  let n = rh(e);
  if (t === !0 || (t === `class_only` && !n)) {
    let t = Object.getOwnPropertyDescriptors(e);
    delete t[Xm];
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
    return Object.create(Qm(e), t);
  }
  {
    let t = Qm(e);
    if (t !== null && n) return { ...e };
    let r = Object.create(t);
    return Object.assign(r, e);
  }
}
function ph(e, t = !1) {
  return (
    gh(e) ||
      $m(e) ||
      !eh(e) ||
      (ah(e) > 1 &&
        Object.defineProperties(e, { set: hh, add: hh, clear: hh, delete: hh }),
      Object.freeze(e),
      t && Object.values(e).forEach((e) => ph(e, !0))),
    e
  );
}
function mh() {
  Zm(2);
}
var hh = { value: mh };
function gh(e) {
  return typeof e != `object` || !e || Object.isFrozen(e);
}
var _h = {};
function vh(e) {
  let t = _h[e];
  return (t || Zm(0, e), t);
}
var yh;
function bh() {
  return yh;
}
function xh(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Sh(e, t) {
  t &&
    (vh(`Patches`),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Ch(e) {
  (wh(e), e.drafts_.forEach(Eh), (e.drafts_ = null));
}
function wh(e) {
  e === yh && (yh = e.parent_);
}
function Th(e) {
  return (yh = xh(yh, e));
}
function Eh(e) {
  let t = e[Xm];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Dh(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  let n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Xm].modified_ && (Ch(t), Zm(4)),
        eh(e) && ((e = Oh(t, e)), t.parent_ || Ah(t, e)),
        t.patches_ &&
          vh(`Patches`).generateReplacementPatches_(
            n[Xm].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = Oh(t, n, [])),
    Ch(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e === Jm ? void 0 : e
  );
}
function Oh(e, t, n) {
  if (gh(t)) return t;
  let r = e.immer_.shouldUseStrictIteration(),
    i = t[Xm];
  if (!i) return (ih(t, (r, a) => kh(e, i, t, r, a, n), r), t);
  if (i.scope_ !== e) return t;
  if (!i.modified_) return (Ah(e, i.base_, !0), i.base_);
  if (!i.finalized_) {
    ((i.finalized_ = !0), i.scope_.unfinalizedDrafts_--);
    let t = i.copy_,
      a = t,
      o = !1;
    (i.type_ === 3 && ((a = new Set(t)), t.clear(), (o = !0)),
      ih(a, (r, a) => kh(e, i, t, r, a, n, o), r),
      Ah(e, t, !1),
      n &&
        e.patches_ &&
        vh(`Patches`).generatePatches_(i, n, e.patches_, e.inversePatches_));
  }
  return i.copy_;
}
function kh(e, t, n, r, i, a, o) {
  if (i == null || (typeof i != `object` && !o)) return;
  let s = gh(i);
  if (!s || o) {
    if ($m(i)) {
      let o = Oh(
        e,
        i,
        a && t && t.type_ !== 3 && !oh(t.assigned_, r) ? a.concat(r) : void 0,
      );
      if ((sh(n, r, o), $m(o))) e.canAutoFreeze_ = !1;
      else return;
    } else o && n.add(i);
    if (eh(i) && !s) {
      if (
        (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) ||
        (t && t.base_ && t.base_[r] === i && s)
      )
        return;
      (Oh(e, i),
        (!t || !t.scope_.parent_) &&
          typeof r != `symbol` &&
          (lh(n)
            ? n.has(r)
            : Object.prototype.propertyIsEnumerable.call(n, r)) &&
          Ah(e, i));
    }
  }
}
function Ah(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ph(t, n);
}
function jh(e, t) {
  let n = Array.isArray(e),
    r = {
      type_: +!!n,
      scope_: t ? t.scope_ : bh(),
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
    a = Mh;
  n && ((i = [r]), (a = Nh));
  let { revoke: o, proxy: s } = Proxy.revocable(i, a);
  return ((r.draft_ = s), (r.revoke_ = o), s);
}
var Mh = {
    get(e, t) {
      if (t === Xm) return e;
      let n = dh(e);
      if (!oh(n, t)) return Fh(e, n, t);
      let r = n[t];
      return e.finalized_ || !eh(r)
        ? r
        : r === Ph(e.base_, t)
          ? (Rh(e), (e.copy_[t] = Bh(r, e)))
          : r;
    },
    has(e, t) {
      return t in dh(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(dh(e));
    },
    set(e, t, n) {
      let r = Ih(dh(e), t);
      if (r?.set) return (r.set.call(e.draft_, n), !0);
      if (!e.modified_) {
        let r = Ph(dh(e), t),
          i = r?.[Xm];
        if (i && i.base_ === n)
          return ((e.copy_[t] = n), (e.assigned_[t] = !1), !0);
        if (ch(n, r) && (n !== void 0 || oh(e.base_, t))) return !0;
        (Rh(e), Lh(e));
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
        Ph(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Rh(e), Lh(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      let n = dh(e),
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
      Zm(11);
    },
    getPrototypeOf(e) {
      return Qm(e.base_);
    },
    setPrototypeOf() {
      Zm(12);
    },
  },
  Nh = {};
(ih(Mh, (e, t) => {
  Nh[e] = function () {
    return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
  };
}),
  (Nh.deleteProperty = function (e, t) {
    return Nh.set.call(this, e, t, void 0);
  }),
  (Nh.set = function (e, t, n) {
    return Mh.set.call(this, e[0], t, n, e[0]);
  }));
function Ph(e, t) {
  let n = e[Xm];
  return (n ? dh(n) : e)[t];
}
function Fh(e, t, n) {
  let r = Ih(t, n);
  return r ? (`value` in r ? r.value : r.get?.call(e.draft_)) : void 0;
}
function Ih(e, t) {
  if (!(t in e)) return;
  let n = Qm(e);
  for (; n;) {
    let e = Object.getOwnPropertyDescriptor(n, t);
    if (e) return e;
    n = Qm(n);
  }
}
function Lh(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Lh(e.parent_));
}
function Rh(e) {
  e.copy_ ||= fh(e.base_, e.scope_.immer_.useStrictShallowCopy_);
}
var zh = class {
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
        (typeof t != `function` && Zm(6),
          n !== void 0 && typeof n != `function` && Zm(7));
        let r;
        if (eh(e)) {
          let i = Th(this),
            a = Bh(e, void 0),
            o = !0;
          try {
            ((r = t(a)), (o = !1));
          } finally {
            o ? Ch(i) : wh(i);
          }
          return (Sh(i, n), Dh(r, i));
        }
        if (!e || typeof e != `object`) {
          if (
            ((r = t(e)),
            r === void 0 && (r = e),
            r === Jm && (r = void 0),
            this.autoFreeze_ && ph(r, !0),
            n)
          ) {
            let t = [],
              i = [];
            (vh(`Patches`).generateReplacementPatches_(e, r, t, i), n(t, i));
          }
          return r;
        }
        Zm(1, e);
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
    (eh(e) || Zm(8), $m(e) && (e = Vh(e)));
    let t = Th(this),
      n = Bh(e, void 0);
    return ((n[Xm].isManual_ = !0), wh(t), n);
  }
  finishDraft(e, t) {
    let n = e && e[Xm];
    (n && n.isManual_) || Zm(9);
    let { scope_: r } = n;
    return (Sh(r, t), Dh(void 0, r));
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
    let r = vh(`Patches`).applyPatches_;
    return $m(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
  }
};
function Bh(e, t) {
  let n = lh(e)
    ? vh(`MapSet`).proxyMap_(e, t)
    : uh(e)
      ? vh(`MapSet`).proxySet_(e, t)
      : jh(e, t);
  return ((t ? t.scope_ : bh()).drafts_.push(n), n);
}
function Vh(e) {
  return ($m(e) || Zm(10, e), Hh(e));
}
function Hh(e) {
  if (!eh(e) || gh(e)) return e;
  let t = e[Xm],
    n,
    r = !0;
  if (t) {
    if (!t.modified_) return t.base_;
    ((t.finalized_ = !0),
      (n = fh(e, t.scope_.immer_.useStrictShallowCopy_)),
      (r = t.scope_.immer_.shouldUseStrictIteration()));
  } else n = fh(e, !0);
  return (
    ih(
      n,
      (e, t) => {
        sh(n, e, Hh(t));
      },
      r,
    ),
    t && (t.finalized_ = !1),
    n
  );
}
var Uh = new zh(),
  Wh = Uh.produce,
  Gh = Uh.setUseStrictIteration.bind(Uh);
function Kh(e) {
  return e;
}
function qh(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function Jh(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != `object`) throw TypeError(t);
}
function Yh(
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
var Xh = (e) => (Array.isArray(e) ? e : [e]);
function Zh(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    Yh(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    t
  );
}
function Qh(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var $h = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  eg = typeof WeakRef < `u` ? WeakRef : $h,
  tg = 0,
  ng = 1;
function rg() {
  return { s: tg, v: void 0, o: null, p: null };
}
function ig(e, t = {}) {
  let n = rg(),
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
        r === void 0 ? ((t = rg()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = rg()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === ng) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = i?.deref?.() ?? i;
      (e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new eg(c)
            : c));
    }
    return ((s.s = ng), (s.v = c), c);
  }
  return (
    (o.clearCache = () => {
      ((n = rg()), o.resetResultsCount());
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function ag(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      (typeof o == `object` && ((a = o), (o = e.pop())),
        qh(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`,
        ));
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = ig,
          argsMemoizeOptions: u = [],
          devModeChecks: d = {},
        } = { ...n, ...a },
        f = Xh(c),
        p = Xh(u),
        m = Zh(e),
        h = s(
          function () {
            return (t++, o.apply(null, arguments));
          },
          ...f,
        ),
        g = l(
          function () {
            r++;
            let e = Qh(m, arguments);
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
var og = ag(ig),
  sg = Object.assign(
    (e, t = og) => {
      Jh(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {}),
      );
    },
    { withTypes: () => sg },
  );
function cg(e) {
  return ({ dispatch: t, getState: n }) =>
    (r) =>
    (i) =>
      typeof i == `function` ? i(t, n, e) : r(i);
}
var lg = cg(),
  ug = cg;
((...e) => {
  let t = ag(...e),
    n = Object.assign(
      (...e) => {
        let n = t(...e),
          r = (e, ...t) => n($m(e) ? Vh(e) : e, ...t);
        return (Object.assign(r, n), r);
      },
      { withTypes: () => n },
    );
  return n;
})(ig);
var dg =
  typeof window < `u` && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == `object`
            ? Gm
            : Gm.apply(null, arguments);
      };
typeof window < `u` &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__;
var fg = (e) => e && typeof e.match == `function`;
function pg(e, t) {
  function n(...n) {
    if (t) {
      let r = t(...n);
      if (!r) throw Error(M_(0));
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
    (n.match = (t) => qm(t) && t.type === e),
    n
  );
}
var mg = class e extends Array {
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
function hg(e) {
  return eh(e) ? Wh(e, () => {}) : e;
}
function gg(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function _g(e) {
  return typeof e == `boolean`;
}
var vg = () =>
    function (e) {
      let {
          thunk: t = !0,
          immutableCheck: n = !0,
          serializableCheck: r = !0,
          actionCreatorCheck: i = !0,
        } = e ?? {},
        a = new mg();
      return (t && (_g(t) ? a.push(lg) : a.push(ug(t.extraArgument))), a);
    },
  yg = `RTK_autoBatch`,
  bg = () => (e) => ({ payload: e, meta: { [yg]: !0 } }),
  xg = (e) => (t) => {
    setTimeout(t, e);
  },
  Sg =
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
                : xg(10)
              : e.type === `callback`
                ? e.queueNotification
                : xg(e.timeout),
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
              (i = !e?.meta?.[yg]),
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
  Cg = (e) =>
    function (t) {
      let { autoBatch: n = !0 } = t ?? {},
        r = new mg(e);
      return (n && r.push(Sg(typeof n == `object` ? n : void 0)), r);
    };
function wg(e) {
  let t = vg(),
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
  else if (Vm(n)) c = Wm(n);
  else throw Error(M_(1));
  let l;
  l = typeof r == `function` ? r(t) : t();
  let u = Gm;
  i && (u = dg({ trace: !1, ...(typeof i == `object` && i) }));
  let d = Cg(Km(...l)),
    f = typeof s == `function` ? s(d) : d(),
    p = u(...f);
  return Hm(c, o, p);
}
function Tg(e) {
  let t = {},
    n = [],
    r,
    i = {
      addCase(e, n) {
        let r = typeof e == `string` ? e : e.type;
        if (!r) throw Error(M_(28));
        if (r in t) throw Error(M_(29));
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
Gh(!1);
function Eg(e) {
  return typeof e == `function`;
}
function Dg(e, t) {
  let [n, r, i] = Tg(t),
    a;
  if (Eg(e)) a = () => hg(e());
  else {
    let t = hg(e);
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
          if ($m(e)) {
            let r = n(e, t);
            return r === void 0 ? e : r;
          }
          if (eh(e)) return Wh(e, (e) => n(e, t));
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
var Og = (e, t) => (fg(e) ? e.match(t) : e(t));
function kg(...e) {
  return (t) => e.some((e) => Og(e, t));
}
var Ag = `ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW`,
  jg = (e = 21) => {
    let t = ``,
      n = e;
    for (; n--;) t += Ag[(Math.random() * 64) | 0];
    return t;
  },
  Mg = [`name`, `message`, `stack`, `code`],
  Ng = class {
    constructor(e, t) {
      ((this.payload = e), (this.meta = t));
    }
    _type;
  },
  Pg = class {
    constructor(e, t) {
      ((this.payload = e), (this.meta = t));
    }
    _type;
  },
  Fg = (e) => {
    if (typeof e == `object` && e) {
      let t = {};
      for (let n of Mg) typeof e[n] == `string` && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  Ig = `External signal was aborted`;
(() => {
  function e(e, t, n) {
    let r = pg(e + `/fulfilled`, (e, t, n, r) => ({
        payload: e,
        meta: {
          ...(r || {}),
          arg: n,
          requestId: t,
          requestStatus: `fulfilled`,
        },
      })),
      i = pg(e + `/pending`, (e, t, n) => ({
        payload: void 0,
        meta: { ...(n || {}), arg: t, requestId: e, requestStatus: `pending` },
      })),
      a = pg(e + `/rejected`, (e, t, r, i, a) => ({
        payload: i,
        error: ((n && n.serializeError) || Fg)(e || `Rejected`),
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
        let u = n?.idGenerator ? n.idGenerator(e) : jg(),
          d = new AbortController(),
          f,
          p;
        function m(e) {
          ((p = e), d.abort());
        }
        o &&
          (o.aborted
            ? m(Ig)
            : o.addEventListener(`abort`, () => m(Ig), { once: !0 }));
        let h = (async function () {
          let o;
          try {
            let a = n?.condition?.(e, { getState: c, extra: l });
            if ((Rg(a) && (a = await a), a === !1 || d.signal.aborted))
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
                    rejectWithValue: (e, t) => new Ng(e, t),
                    fulfillWithValue: (e, t) => new Pg(e, t),
                  }),
                ).then((t) => {
                  if (t instanceof Ng) throw t;
                  return t instanceof Pg
                    ? r(t.payload, u, e, t.meta)
                    : r(t, u, e);
                }),
              ])));
          } catch (t) {
            o = t instanceof Ng ? a(null, u, e, t.payload, t.meta) : a(t, u, e);
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
            return h.then(Lg);
          },
        });
      };
    }
    return Object.assign(o, {
      pending: i,
      rejected: a,
      fulfilled: r,
      settled: kg(a, r),
      typePrefix: e,
    });
  }
  return ((e.withTypes = () => e), e);
})();
function Lg(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function Rg(e) {
  return typeof e == `object` && !!e && typeof e.then == `function`;
}
var zg = Symbol.for(`rtk-slice-createasyncthunk`),
  Bg = ((e) => (
    (e.reducer = `reducer`),
    (e.reducerWithPrepare = `reducerWithPrepare`),
    (e.asyncThunk = `asyncThunk`),
    e
  ))(Bg || {});
function Vg(e, t) {
  return `${e}/${t}`;
}
function Hg({ creators: e } = {}) {
  let t = e?.asyncThunk?.[zg];
  return function (e) {
    let { name: n, reducerPath: r = n } = e;
    if (!n) throw Error(M_(11));
    let i =
        (typeof e.reducers == `function` ? e.reducers(Gg()) : e.reducers) || {},
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
          if (!n) throw Error(M_(12));
          if (n in o.sliceCaseReducersByType) throw Error(M_(13));
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
          type: Vg(n, r),
          createNotation: typeof e.reducers == `function`,
        };
      qg(a) ? Yg(o, a, s, t) : Kg(o, a, s);
    });
    function c() {
      let [t = {}, n = [], r = void 0] =
          typeof e.extraReducers == `function`
            ? Tg(e.extraReducers)
            : [e.extraReducers],
        i = { ...t, ...o.sliceCaseReducersByType };
      return Dg(e.initialState, (e) => {
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
        return (typeof i > `u` && n && (i = gg(d, r, m)), i);
      }
      function i(t = l) {
        return gg(
          gg(u, n, () => new WeakMap()),
          t,
          () => {
            let r = {};
            for (let [i, a] of Object.entries(e.selectors ?? {}))
              r[i] = Ug(a, t, () => gg(d, t, m), n);
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
function Ug(e, t, n, r) {
  function i(i, ...a) {
    let o = t(i);
    return (typeof o > `u` && r && (o = n()), e(o, ...a));
  }
  return ((i.unwrapped = e), i);
}
var Wg = Hg();
function Gg() {
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
function Kg({ type: e, reducerName: t, createNotation: n }, r, i) {
  let a, o;
  if (`reducer` in r) {
    if (n && !Jg(r)) throw Error(M_(17));
    ((a = r.reducer), (o = r.prepare));
  } else a = r;
  i.addCase(e, a)
    .exposeCaseReducer(t, a)
    .exposeAction(t, o ? pg(e, o) : pg(e));
}
function qg(e) {
  return e._reducerDefinitionType === `asyncThunk`;
}
function Jg(e) {
  return e._reducerDefinitionType === `reducerWithPrepare`;
}
function Yg({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw Error(M_(18));
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
      fulfilled: o || Xg,
      pending: s || Xg,
      rejected: c || Xg,
      settled: l || Xg,
    }));
}
function Xg() {}
var Zg = `task`,
  Qg = `listener`,
  $g = `completed`,
  e_ = `cancelled`,
  t_ = `task-${e_}`,
  n_ = `task-${$g}`,
  r_ = `${Qg}-${e_}`,
  i_ = `${Qg}-${$g}`,
  a_ = class {
    constructor(e) {
      ((this.code = e), (this.message = `${Zg} ${e_} (reason: ${e})`));
    }
    name = `TaskAbortError`;
    message;
  },
  o_ = (e, t) => {
    if (typeof e != `function`) throw TypeError(M_(32));
  },
  s_ = () => {},
  c_ = (e, t = s_) => (e.catch(t), e),
  l_ = (e, t) => (
    e.addEventListener(`abort`, t, { once: !0 }),
    () => e.removeEventListener(`abort`, t)
  ),
  u_ = (e, t) => {
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
  d_ = (e) => {
    if (e.aborted) {
      let { reason: t } = e;
      throw new a_(t);
    }
  };
function f_(e, t) {
  let n = s_;
  return new Promise((r, i) => {
    let a = () => i(new a_(e.reason));
    e.aborted ? a() : ((n = l_(e, a)), t.finally(() => n()).then(r, i));
  }).finally(() => {
    n = s_;
  });
}
var p_ = async (e, t) => {
    try {
      return (await Promise.resolve(), { status: `ok`, value: await e() });
    } catch (e) {
      return { status: e instanceof a_ ? `cancelled` : `rejected`, error: e };
    } finally {
      t?.();
    }
  },
  m_ = (e) => (t) => c_(f_(e, t).then((t) => (d_(e), t))),
  h_ = (e) => {
    let t = m_(e);
    return (e) => t(new Promise((t) => setTimeout(t, e)));
  },
  { assign: g_ } = Object,
  __ = {},
  v_ = `listenerMiddleware`,
  y_ = (e, t) => {
    let n = (t) => l_(e, () => u_(t, e.reason));
    return (r, i) => {
      o_(r, `taskExecutor`);
      let a = new AbortController();
      n(a);
      let o = p_(
        async () => {
          (d_(e), d_(a.signal));
          let t = await r({
            pause: m_(a.signal),
            delay: h_(a.signal),
            signal: a.signal,
          });
          return (d_(a.signal), t);
        },
        () => u_(a, n_),
      );
      return (
        i?.autoJoin && t.push(o.catch(s_)),
        {
          result: m_(e)(o),
          cancel() {
            u_(a, t_);
          },
        }
      );
    };
  },
  b_ = (e, t) => {
    let n = async (n, r) => {
      d_(t);
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
        let e = await f_(t, Promise.race(a));
        return (d_(t), e);
      } finally {
        i();
      }
    };
    return (e, t) => c_(n(e, t));
  },
  x_ = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: i, effect: a } = e;
    if (t) i = pg(t).match;
    else if (n) ((t = n.type), (i = n.match));
    else if (r) i = r;
    else if (!i) throw Error(M_(21));
    return (o_(a, `options.listener`), { predicate: i, type: t, effect: a });
  },
  S_ = g_(
    (e) => {
      let { type: t, predicate: n, effect: r } = x_(e);
      return {
        id: jg(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw Error(M_(22));
        },
      };
    },
    { withTypes: () => S_ },
  ),
  C_ = (e, t) => {
    let { type: n, effect: r, predicate: i } = x_(t);
    return Array.from(e.values()).find(
      (e) =>
        (typeof n == `string` ? e.type === n : e.predicate === i) &&
        e.effect === r,
    );
  },
  w_ = (e) => {
    e.pending.forEach((e) => {
      u_(e, r_);
    });
  },
  T_ = (e, t) => () => {
    for (let e of t.keys()) w_(e);
    e.clear();
  },
  E_ = (e, t, n) => {
    try {
      e(t, n);
    } catch (e) {
      setTimeout(() => {
        throw e;
      }, 0);
    }
  },
  D_ = g_(pg(`${v_}/add`), { withTypes: () => D_ }),
  O_ = pg(`${v_}/removeAll`),
  k_ = g_(pg(`${v_}/remove`), { withTypes: () => k_ }),
  A_ = (...e) => {
    console.error(`${v_}/error`, ...e);
  },
  j_ = (e = {}) => {
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
      { extra: a, onError: o = A_ } = e;
    o_(o, `onError`);
    let s = (e) => (
        (e.unsubscribe = () => t.delete(e.id)),
        t.set(e.id, e),
        (t) => {
          (e.unsubscribe(), t?.cancelActive && w_(e));
        }
      ),
      c = (e) => {
        let n = C_(t, e) ?? S_(e);
        return s(n);
      };
    g_(c, { withTypes: () => c });
    let l = (e) => {
      let n = C_(t, e);
      return (n && (n.unsubscribe(), e.cancelActive && w_(n)), !!n);
    };
    g_(l, { withTypes: () => l });
    let u = async (e, n, s, l) => {
        let u = new AbortController(),
          d = b_(c, u.signal),
          f = [];
        try {
          (e.pending.add(u),
            r(e),
            await Promise.resolve(
              e.effect(
                n,
                g_({}, s, {
                  getOriginalState: l,
                  condition: (e, t) => d(e, t).then(Boolean),
                  take: d,
                  delay: h_(u.signal),
                  pause: m_(u.signal),
                  extra: a,
                  signal: u.signal,
                  fork: y_(u.signal, f),
                  unsubscribe: e.unsubscribe,
                  subscribe: () => {
                    t.set(e.id, e);
                  },
                  cancelActiveListeners: () => {
                    e.pending.forEach((e, t, n) => {
                      e !== u && (u_(e, r_), n.delete(e));
                    });
                  },
                  cancel: () => {
                    (u_(u, r_), e.pending.delete(u));
                  },
                  throwIfCancelled: () => {
                    d_(u.signal);
                  },
                }),
              ),
            ));
        } catch (e) {
          e instanceof a_ || E_(o, e, { raisedBy: `effect` });
        } finally {
          (await Promise.all(f), u_(u, i_), i(e), e.pending.delete(u));
        }
      },
      d = T_(t, n);
    return {
      middleware: (e) => (n) => (r) => {
        if (!qm(r)) return n(r);
        if (D_.match(r)) return c(r.payload);
        if (O_.match(r)) {
          d();
          return;
        }
        if (k_.match(r)) return l(r.payload);
        let i = e.getState(),
          a = () => {
            if (i === __) throw Error(M_(23));
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
                ((s = !1), E_(o, e, { raisedBy: `predicate` }));
              }
              s && u(t, r, e, a);
            }
          }
        } finally {
          i = __;
        }
        return s;
      },
      startListening: c,
      stopListening: l,
      clearListeners: d,
    };
  };
function M_(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var N_ = Wg({
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
  { setMargin: P_, setLayout: F_, setChartSize: I_, setScale: L_ } = N_.actions,
  R_ = N_.reducer;
function z_(e, t) {
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
function B_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? z_(Object(n), !0).forEach(function (t) {
          V_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : z_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function V_(e, t, n) {
  return (
    (t = H_(t)) in e
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
function H_(e) {
  var t = U_(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function U_(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var W_ = Math.PI / 180,
  G_ = (e) => (e * Math.PI) / 180,
  K_ = (e) => (e * 180) / Math.PI,
  q_ = (e, t, n, r) => ({
    x: e + Math.cos(-W_ * r) * n,
    y: t + Math.sin(-W_ * r) * n,
  }),
  J_ = function (e, t) {
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
  Y_ = (e, t) => {
    var { x: n, y: r } = e,
      { x: i, y: a } = t;
    return Math.sqrt((n - i) ** 2 + (r - a) ** 2);
  },
  X_ = (e, t) => {
    var { x: n, y: r } = e,
      { cx: i, cy: a } = t,
      o = Y_({ x: n, y: r }, { x: i, y: a });
    if (o <= 0) return { radius: o, angle: 0 };
    var s = (n - i) / o,
      c = Math.acos(s);
    return (
      r > a && (c = 2 * Math.PI - c),
      { radius: o, angle: K_(c), angleInRadian: c }
    );
  },
  Z_ = (e) => {
    var { startAngle: t, endAngle: n } = e,
      r = Math.floor(t / 360),
      i = Math.floor(n / 360),
      a = Math.min(r, i);
    return { startAngle: t - a * 360, endAngle: n - a * 360 };
  },
  Q_ = (e, t) => {
    var { startAngle: n, endAngle: r } = t,
      i = Math.floor(n / 360),
      a = Math.floor(r / 360);
    return e + Math.min(i, a) * 360;
  },
  $_ = (e, t) => {
    var { x: n, y: r } = e,
      { radius: i, angle: a } = X_({ x: n, y: r }, t),
      { innerRadius: o, outerRadius: s } = t;
    if (i < o || i > s || i === 0) return null;
    var { startAngle: c, endAngle: l } = Z_(t),
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
    return d ? B_(B_({}, t), {}, { radius: i, angle: Q_(u, t) }) : null;
  },
  ev = (e) =>
    !(0, R.isValidElement)(e) &&
    typeof e != `function` &&
    typeof e != `boolean` &&
    e != null
      ? e.className
      : ``;
function tv(e, t, n) {
  return Array.isArray(e) && e && t + n !== 0 ? e.slice(t, n + 1) : e;
}
function nv(e, t) {
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
function rv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? nv(Object(n), !0).forEach(function (t) {
          iv(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : nv(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function iv(e, t, n) {
  return (
    (t = av(t)) in e
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
function av(e) {
  var t = ov(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ov(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function sv(e, t, n) {
  return cp(e) || cp(t)
    ? n
    : tp(t)
      ? (0, Zf.default)(e, t, n)
      : typeof t == `function`
        ? t(e)
        : n;
}
var cv = (e, t, n, r, i) => {
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
        if (Qf(l - c) !== Qf(u - l)) {
          var f = [];
          if (Qf(u - l) === Qf(i[1] - i[0])) {
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
  lv = (e, t, n) => {
    if (t && n) {
      var { width: r, height: i } = n,
        { align: a, verticalAlign: o, layout: s } = t;
      if (
        (s === `vertical` || (s === `horizontal` && o === `middle`)) &&
        a !== `center` &&
        K(e[a])
      )
        return rv(rv({}, e), {}, { [a]: e[a] + (r || 0) });
      if (
        (s === `horizontal` || (s === `vertical` && a === `center`)) &&
        o !== `middle` &&
        K(e[o])
      )
        return rv(rv({}, e), {}, { [o]: e[o] + (i || 0) });
    }
    return e;
  },
  uv = (e, t) =>
    (e === `horizontal` && t === `xAxis`) ||
    (e === `vertical` && t === `yAxis`) ||
    (e === `centric` && t === `angleAxis`) ||
    (e === `radial` && t === `radiusAxis`),
  dv = (e, t, n, r) => {
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
  fv = (e, t, n) => {
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
        p === `angleAxis` && a && a.length >= 2 ? Qf(a[0] - a[1]) * 2 * h : h),
      t && (d || f)
        ? (d || f || [])
            .map((e, t) => ({
              coordinate: o(r ? r.indexOf(e) : e) + h,
              value: e,
              offset: h,
              index: t,
            }))
            .filter((e) => !$f(e.coordinate))
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
  pv = 1e-4,
  mv = (e) => {
    var t = e.domain();
    if (!(!t || t.length <= 2)) {
      var n = t.length,
        r = e.range(),
        i = Math.min(r[0], r[1]) - pv,
        a = Math.max(r[0], r[1]) + pv,
        o = e(t[0]),
        s = e(t[n - 1]);
      (o < i || o > a || s < i || s > a) && e.domain([t[0], t[n - 1]]);
    }
  },
  hv = (e, t) => {
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
  gv = {
    sign: (e) => {
      var t = e.length;
      if (!(t <= 0))
        for (var n = 0, r = e[0].length; n < r; ++n)
          for (var i = 0, a = 0, o = 0; o < t; ++o) {
            var s = $f(e[o][n][1]) ? e[o][n][0] : e[o][n][1];
            s >= 0
              ? ((e[o][n][0] = i), (e[o][n][1] = i + s), (i = e[o][n][1]))
              : ((e[o][n][0] = a), (e[o][n][1] = a + s), (a = e[o][n][1]));
          }
    },
    expand: Hf,
    none: Lf,
    silhouette: Uf,
    wiggle: Wf,
    positive: (e) => {
      var t = e.length;
      if (!(t <= 0))
        for (var n = 0, r = e[0].length; n < r; ++n)
          for (var i = 0, a = 0; a < t; ++a) {
            var o = $f(e[a][n][1]) ? e[a][n][0] : e[a][n][1];
            o >= 0
              ? ((e[a][n][0] = i), (e[a][n][1] = i + o), (i = e[a][n][1]))
              : ((e[a][n][0] = 0), (e[a][n][1] = 0));
          }
    },
  },
  _v = (e, t, n) => {
    var r = gv[n];
    return Vf()
      .keys(t)
      .value((e, t) => +sv(e, t, 0))
      .order(Rf)
      .offset(r)(e);
  };
function vv(e) {
  return e == null ? void 0 : String(e);
}
var yv = (e) => {
    var { axis: t, ticks: n, offset: r, bandSize: i, entry: a, index: o } = e;
    if (t.type === `category`) return n[o] ? n[o].coordinate + r : null;
    var s = sv(a, t.dataKey, t.scale.domain()[o]);
    return cp(s) ? null : t.scale(s) - i / 2 + r;
  },
  bv = (e) => {
    var { numericAxis: t } = e,
      n = t.scale.domain();
    if (t.type === `number`) {
      var r = Math.min(n[0], n[1]),
        i = Math.max(n[0], n[1]);
      return r <= 0 && i >= 0 ? 0 : i < 0 ? i : r;
    }
    return n[0];
  },
  xv = (e) => {
    var t = e.flat(2).filter(K);
    return [Math.min(...t), Math.max(...t)];
  },
  Sv = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]],
  Cv = (e, t, n) => {
    if (e != null)
      return Sv(
        Object.keys(e).reduce(
          (r, i) => {
            var { stackedData: a } = e[i],
              o = a.reduce(
                (e, r) => {
                  var i = xv(tv(r, t, n));
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
  wv = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Tv = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Ev = (e, t, n) => {
    if (e && e.scale && e.scale.bandwidth) {
      var r = e.scale.bandwidth();
      if (!n || r > 0) return r;
    }
    if (e && t && t.length >= 2) {
      for (
        var i = (0, jm.default)(t, (e) => e.coordinate),
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
function Dv(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: n,
    payload: r,
    value: i,
    name: a,
  } = e;
  return rv(rv({}, t), {}, { dataKey: n, payload: r, value: i, name: a });
}
function Ov(e, t) {
  if (e) return String(e);
  if (typeof t == `string`) return t;
}
function kv(e, t, n, r, i) {
  return n === `horizontal` || n === `vertical`
    ? e >= i.left &&
      e <= i.left + i.width &&
      t >= i.top &&
      t <= i.top + i.height
      ? { x: e, y: t }
      : null
    : r
      ? $_({ x: e, y: t }, r)
      : null;
}
var Av = (e, t, n, r) => {
    var i = t.find((e) => e && e.index === n);
    if (i) {
      if (e === `horizontal`) return { x: i.coordinate, y: r.y };
      if (e === `vertical`) return { x: r.x, y: i.coordinate };
      if (e === `centric`) {
        var a = i.coordinate,
          { radius: o } = r;
        return rv(
          rv(rv({}, r), q_(r.cx, r.cy, o, a)),
          {},
          { angle: a, radius: o },
        );
      }
      var s = i.coordinate,
        { angle: c } = r;
      return rv(
        rv(rv({}, r), q_(r.cx, r.cy, s, c)),
        {},
        { angle: c, radius: s },
      );
    }
    return { x: 0, y: 0 };
  },
  jv = (e, t) =>
    t === `horizontal`
      ? e.x
      : t === `vertical`
        ? e.y
        : t === `centric`
          ? e.angle
          : e.radius,
  Mv = (e) => e.layout.width,
  Nv = (e) => e.layout.height,
  Pv = (e) => e.layout.scale,
  Fv = (e) => e.layout.margin,
  Iv = Y(
    (e) => e.cartesianAxis.xAxis,
    (e) => Object.values(e),
  ),
  Lv = Y(
    (e) => e.cartesianAxis.yAxis,
    (e) => Object.values(e),
  ),
  Rv = `data-recharts-item-index`,
  zv = `data-recharts-item-data-key`;
function Bv(e, t) {
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
function Vv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Bv(Object(n), !0).forEach(function (t) {
          Hv(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Bv(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Hv(e, t, n) {
  return (
    (t = Uv(t)) in e
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
function Uv(e) {
  var t = Wv(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Wv(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Gv = (e) => e.brush.height;
function Kv(e) {
  return Lv(e).reduce(
    (e, t) =>
      t.orientation === `left` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function qv(e) {
  return Lv(e).reduce(
    (e, t) =>
      t.orientation === `right` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function Jv(e) {
  return Iv(e).reduce(
    (e, t) =>
      t.orientation === `top` && !t.mirror && !t.hide ? e + t.height : e,
    0,
  );
}
function Yv(e) {
  return Iv(e).reduce(
    (e, t) =>
      t.orientation === `bottom` && !t.mirror && !t.hide ? e + t.height : e,
    0,
  );
}
var Xv = Y(
    [Mv, Nv, Fv, Gv, Kv, qv, Jv, Yv, Mm, Nm],
    (e, t, n, r, i, a, o, s, c, l) => {
      var u = { left: (n.left || 0) + i, right: (n.right || 0) + a },
        d = Vv(
          Vv({}, { top: (n.top || 0) + o, bottom: (n.bottom || 0) + s }),
          u,
        ),
        f = d.bottom;
      ((d.bottom += r), (d = lv(d, c, l)));
      var p = e - d.left - d.right,
        m = t - d.top - d.bottom;
      return Vv(
        Vv({ brushBottom: f }, d),
        {},
        { width: Math.max(p, 0), height: Math.max(m, 0) },
      );
    },
  ),
  Zv = Y(Xv, (e) => ({
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height,
  })),
  Qv = Y(Mv, Nv, (e, t) => ({ x: 0, y: 0, width: e, height: t })),
  $v = (0, R.createContext)(null),
  ey = () => (0, R.useContext)($v) != null,
  ty = (e) => e.brush,
  ny = Y([ty, Xv, Fv], (e, t, n) => ({
    height: e.height,
    x: K(e.x) ? e.x : t.left,
    y: K(e.y) ? e.y : t.top + t.height + t.brushBottom - (n?.bottom || 0),
    width: K(e.width) ? e.width : t.width,
  })),
  ry = n((e) => {
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
  iy = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = ry();
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
  ay = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = iy();
    function n(e, n = 0, r = {}) {
      let { leading: i = !0, trailing: a = !0 } = r;
      return t.debounce(e, n, { leading: i, maxWait: n, trailing: a });
    }
    e.throttle = n;
  }),
  oy = e(
    n((e, t) => {
      t.exports = ay().throttle;
    })(),
  ),
  sy = (e, t, n) => {
    var { width: r = `100%`, height: i = `100%`, aspect: a, maxHeight: o } = n,
      s = ep(r) ? e : Number(r),
      c = ep(i) ? t : Number(i);
    return (
      a && a > 0 && (s ? (c = s / a) : c && (s = c * a), o && c > o && (c = o)),
      { calculatedWidth: s, calculatedHeight: c }
    );
  },
  cy = { width: 0, height: 0, overflow: `visible` },
  ly = { width: 0, overflowX: `visible` },
  uy = { height: 0, overflowY: `visible` },
  dy = {},
  fy = (e) => {
    var { width: t, height: n } = e,
      r = ep(t),
      i = ep(n);
    return r && i ? cy : r ? ly : i ? uy : dy;
  };
function py(e) {
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
function my(e) {
  return Number.isFinite(e);
}
function hy(e) {
  return typeof e == `number` && e > 0 && Number.isFinite(e);
}
function gy() {
  return (
    (gy = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gy.apply(null, arguments)
  );
}
function _y(e, t) {
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
function vy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? _y(Object(n), !0).forEach(function (t) {
          yy(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : _y(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function yy(e, t, n) {
  return (
    (t = by(t)) in e
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
function by(e) {
  var t = xy(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function xy(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Sy = (0, R.createContext)({ width: -1, height: -1 });
function Cy(e) {
  var { children: t, width: n, height: r } = e,
    i = (0, R.useMemo)(() => ({ width: n, height: r }), [n, r]);
  return n <= 0 || r <= 0
    ? null
    : R.createElement(Sy.Provider, { value: i }, t);
}
var wy = () => (0, R.useContext)(Sy),
  Ty = (0, R.forwardRef)((e, t) => {
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
      u > 0 && (e = (0, oy.default)(e, u, { trailing: !0, leading: !1 }));
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
      { calculatedWidth: S, calculatedHeight: C } = sy(b, x, {
        width: i,
        height: a,
        aspect: n,
        maxHeight: c,
      });
    return R.createElement(
      `div`,
      {
        id: d ? `${d}` : void 0,
        className: W(`recharts-responsive-container`, f),
        style: vy(
          vy({}, m),
          {},
          { width: i, height: a, minWidth: o, minHeight: s, maxHeight: c },
        ),
        ref: h,
      },
      R.createElement(
        `div`,
        { style: fy({ width: i, height: a }) },
        R.createElement(Cy, { width: S, height: C }, l),
      ),
    );
  }),
  Ey = (0, R.forwardRef)((e, t) => {
    var n = wy();
    if (hy(n.width) && hy(n.height)) return e.children;
    var { width: r, height: i } = py({
        width: e.width,
        height: e.height,
        aspect: e.aspect,
      }),
      { calculatedWidth: a, calculatedHeight: o } = sy(void 0, void 0, {
        width: r,
        height: i,
        aspect: e.aspect,
        maxHeight: e.maxHeight,
      });
    return K(a) && K(o)
      ? R.createElement(Cy, { width: a, height: o }, e.children)
      : R.createElement(Ty, gy({}, e, { width: r, height: i, ref: t }));
  }),
  Dy = () => {
    var e = ey(),
      t = J(Zv),
      n = J(ny),
      r = J(ty)?.padding;
    return !e || !n || !r
      ? t
      : {
          width: n.width - r.left - r.right,
          height: n.height - r.top - r.bottom,
          x: r.left,
          y: r.top,
        };
  },
  Oy = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    brushBottom: 0,
  },
  ky = () => J(Xv) ?? Oy,
  Ay = () => J(Mv),
  jy = () => J(Nv),
  My = () => J((e) => e.layout.margin),
  X = (e) => e.layout.layoutType,
  Ny = () => J(X),
  Py = (e) => {
    var t = q(),
      n = ey(),
      { width: r, height: i } = e,
      a = wy(),
      o = r,
      s = i;
    return (
      a && ((o = a.width > 0 ? a.width : r), (s = a.height > 0 ? a.height : i)),
      (0, R.useEffect)(() => {
        !n && hy(o) && hy(s) && t(I_({ width: o, height: s }));
      }, [t, n, o, s]),
      null
    );
  },
  Fy = Wg({
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
          e.payload.push(Kh(t.payload));
        },
        prepare: bg(),
      },
      removeLegendPayload: {
        reducer(e, t) {
          var n = Vh(e).payload.indexOf(Kh(t.payload));
          n > -1 && e.payload.splice(n, 1);
        },
        prepare: bg(),
      },
    },
  }),
  {
    setLegendSize: Iy,
    setLegendSettings: Ly,
    addLegendPayload: Ry,
    removeLegendPayload: zy,
  } = Fy.actions,
  By = Fy.reducer;
function Vy() {
  return (
    (Vy = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vy.apply(null, arguments)
  );
}
function Hy(e, t) {
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
function Uy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Hy(Object(n), !0).forEach(function (t) {
          Wy(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Hy(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Wy(e, t, n) {
  return (
    (t = Gy(t)) in e
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
function Gy(e) {
  var t = Ky(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ky(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function qy(e) {
  return Array.isArray(e) && tp(e[0]) && tp(e[1]) ? e.join(` ~ `) : e;
}
var Jy = (e) => {
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
            n = (s ? (0, jm.default)(a, s) : a).map((e, n) => {
              if (e.type === `none`) return null;
              var i = e.formatter || o || qy,
                { value: s, name: c } = e,
                l = s,
                u = c;
              if (i) {
                var d = i(s, c, e, n, a);
                if (Array.isArray(d)) [l, u] = d;
                else if (d != null) l = d;
                else return null;
              }
              var f = Uy(
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
                tp(u)
                  ? R.createElement(
                      `span`,
                      { className: `recharts-tooltip-item-name` },
                      u,
                    )
                  : null,
                tp(u)
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
      m = Uy(
        {
          margin: 0,
          padding: 10,
          backgroundColor: `#fff`,
          border: `1px solid #ccc`,
          whiteSpace: `nowrap`,
        },
        n,
      ),
      h = Uy({ margin: 0 }, i),
      g = !cp(u),
      _ = g ? u : ``,
      v = W(`recharts-default-tooltip`, c),
      y = W(`recharts-tooltip-label`, l);
    g && d && a != null && (_ = d(u, a));
    var b = f ? { role: `status`, "aria-live": `assertive` } : {};
    return R.createElement(
      `div`,
      Vy({ className: v, style: m }, b),
      R.createElement(
        `p`,
        { className: y, style: h },
        R.isValidElement(_) ? _ : `${_}`,
      ),
      p(),
    );
  },
  Yy = `recharts-tooltip-wrapper`,
  Xy = { visibility: `hidden` };
function Zy(e) {
  var { coordinate: t, translateX: n, translateY: r } = e;
  return W(Yy, {
    [`${Yy}-right`]: K(n) && t && K(t.x) && n >= t.x,
    [`${Yy}-left`]: K(n) && t && K(t.x) && n < t.x,
    [`${Yy}-bottom`]: K(r) && t && K(t.y) && r >= t.y,
    [`${Yy}-top`]: K(r) && t && K(t.y) && r < t.y,
  });
}
function Qy(e) {
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
function $y(e) {
  var { translateX: t, translateY: n, useTranslate3d: r } = e;
  return {
    transform: r
      ? `translate3d(${t}px, ${n}px, 0)`
      : `translate(${t}px, ${n}px)`,
  };
}
function eb(e) {
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
      ? ((u = Qy({
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
        (d = Qy({
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
        (l = $y({ translateX: u, translateY: d, useTranslate3d: s })))
      : (l = Xy),
    {
      cssProperties: l,
      cssClasses: Zy({ translateX: u, translateY: d, coordinate: n }),
    }
  );
}
function tb(e, t) {
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
function nb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? tb(Object(n), !0).forEach(function (t) {
          rb(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : tb(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function rb(e, t, n) {
  return (
    (t = ib(t)) in e
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
function ib(e) {
  var t = ab(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ab(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var ob = class extends R.PureComponent {
    constructor() {
      (super(...arguments),
        rb(this, `state`, {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
        }),
        rb(this, `handleKeyDown`, (e) => {
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
        { cssClasses: _, cssProperties: v } = eb({
          allowEscapeViewBox: t,
          coordinate: a,
          offsetTopLeft: c,
          position: l,
          reverseDirection: u,
          tooltipBox: { height: m.height, width: m.width },
          useTranslate3d: d,
          viewBox: f,
        }),
        y = nb(
          nb(
            {},
            g
              ? {}
              : nb(
                  nb(
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
  sb = {
    devToolsEnabled: !1,
    isSsr: !(
      typeof window < `u` &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    ),
  },
  cb = () => J((e) => e.rootProps.accessibilityLayer);
function lb() {
  return (
    (lb = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    lb.apply(null, arguments)
  );
}
function ub(e, t) {
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
function db(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ub(Object(n), !0).forEach(function (t) {
          fb(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ub(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function fb(e, t, n) {
  return (
    (t = pb(t)) in e
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
function pb(e) {
  var t = mb(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function mb(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var hb = {
    curveBasisClosed: gf,
    curveBasisOpen: vf,
    curveBasis: mf,
    curveBumpX: Ud,
    curveBumpY: Wd,
    curveLinearClosed: bf,
    curveLinear: Ld,
    curveMonotoneX: Of,
    curveMonotoneY: kf,
    curveNatural: Mf,
    curveStep: Pf,
    curveStepAfter: If,
    curveStepBefore: Ff,
  },
  gb = (e) => my(e.x) && my(e.y),
  _b = (e) => e.x,
  vb = (e) => e.y,
  yb = (e, t) => {
    if (typeof e == `function`) return e;
    var n = `curve${lp(e)}`;
    return (n === `curveMonotone` || n === `curveBump`) && t
      ? hb[`${n}${t === `vertical` ? `Y` : `X`}`]
      : hb[n] || Ld;
  },
  bb = (e) => {
    var {
        type: t = `linear`,
        points: n = [],
        baseLine: r,
        layout: i,
        connectNulls: a = !1,
      } = e,
      o = yb(t, i),
      s = a ? n.filter(gb) : n,
      c;
    if (Array.isArray(r)) {
      var l = a ? r.filter((e) => gb(e)) : r,
        u = s.map((e, t) => db(db({}, e), {}, { base: l[t] }));
      return (
        (c =
          i === `vertical`
            ? Vd()
                .y(vb)
                .x1(_b)
                .x0((e) => e.base.x)
            : Vd()
                .x(_b)
                .y1(vb)
                .y0((e) => e.base.y)),
        c.defined(gb).curve(o),
        c(u)
      );
    }
    return (
      (c =
        i === `vertical` && K(r)
          ? Vd().y(vb).x1(_b).x0(r)
          : K(r)
            ? Vd().x(_b).y1(vb).y0(r)
            : Bd().x(_b).y(vb)),
      c.defined(gb).curve(o),
      c(s)
    );
  },
  xb = (e) => {
    var { className: t, points: n, path: r, pathRef: i } = e;
    if ((!n || !n.length) && !r) return null;
    var a = n && n.length ? bb(e) : r;
    return R.createElement(
      `path`,
      lb({}, od(e), Tp(e), {
        className: W(`recharts-curve`, t),
        d: a === null ? void 0 : a,
        ref: i,
      }),
    );
  },
  Sb = [`x`, `y`, `top`, `left`, `width`, `height`, `className`];
function Cb() {
  return (
    (Cb = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cb.apply(null, arguments)
  );
}
function wb(e, t) {
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
function Tb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? wb(Object(n), !0).forEach(function (t) {
          Eb(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : wb(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Eb(e, t, n) {
  return (
    (t = Db(t)) in e
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
function Db(e) {
  var t = Ob(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ob(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function kb(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Ab(e, t);
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
function Ab(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var jb = (e, t, n, r, i, a) => `M${e},${i}v${r}M${a},${t}h${n}`,
  Mb = (e) => {
    var {
        x: t = 0,
        y: n = 0,
        top: r = 0,
        left: i = 0,
        width: a = 0,
        height: o = 0,
        className: s,
      } = e,
      c = kb(e, Sb),
      l = Tb({ x: t, y: n, top: r, left: i, width: a, height: o }, c);
    return !K(t) || !K(n) || !K(a) || !K(o) || !K(r) || !K(i)
      ? null
      : R.createElement(
          `path`,
          Cb({}, cd(l), {
            className: W(`recharts-cross`, s),
            d: jb(t, n, a, o, r, i),
          }),
        );
  };
function Nb(e, t, n, r) {
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
function Pb(e, t) {
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
function Fb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Pb(Object(n), !0).forEach(function (t) {
          Ib(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Pb(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ib(e, t, n) {
  return (
    (t = Lb(t)) in e
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
function Lb(e) {
  var t = Rb(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Rb(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function zb(e, t) {
  var n = Fb({}, e),
    r = t;
  return Object.keys(t).reduce(
    (e, t) => (e[t] === void 0 && r[t] !== void 0 && (e[t] = r[t]), e),
    n,
  );
}
function Bb() {}
function Vb(e) {
  return e != null;
}
function Hb(e, t) {
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
function Ub(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Hb(Object(n), !0).forEach(function (t) {
          Wb(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Hb(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Wb(e, t, n) {
  return (
    (t = Gb(t)) in e
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
function Gb(e) {
  var t = Kb(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Kb(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var qb = (e) => e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`),
  Jb = (e, t, n) => e.map((e) => `${qb(e)} ${t}ms ${n}`).join(`,`),
  Yb = (e, t) =>
    [Object.keys(e), Object.keys(t)].reduce((e, t) =>
      e.filter((e) => t.includes(e)),
    ),
  Xb = (e, t) =>
    Object.keys(t).reduce((n, r) => Ub(Ub({}, n), {}, { [r]: e(r, t[r]) }), {});
function Zb(e, t) {
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
function Qb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Zb(Object(n), !0).forEach(function (t) {
          $b(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Zb(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function $b(e, t, n) {
  return (
    (t = ex(t)) in e
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
function ex(e) {
  var t = tx(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function tx(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var nx = (e, t, n) => e + (t - e) * n,
  rx = (e) => {
    var { from: t, to: n } = e;
    return t !== n;
  },
  ix = (e, t, n) => {
    var r = Xb((t, n) => {
      if (rx(n)) {
        var [r, i] = e(n.from, n.to, n.velocity);
        return Qb(Qb({}, n), {}, { from: r, velocity: i });
      }
      return n;
    }, t);
    return n < 1
      ? Xb(
          (e, t) =>
            rx(t)
              ? Qb(
                  Qb({}, t),
                  {},
                  {
                    velocity: nx(t.velocity, r[e].velocity, n),
                    from: nx(t.from, r[e].from, n),
                  },
                )
              : t,
          t,
        )
      : ix(e, r, n - 1);
  };
function ax(e, t, n, r, i, a) {
  var o,
    s = r.reduce(
      (n, r) =>
        Qb(Qb({}, n), {}, { [r]: { from: e[r], velocity: 0, to: t[r] } }),
      {},
    ),
    c = () => Xb((e, t) => t.from, s),
    l = () => !Object.values(s).filter(rx).length,
    u = null,
    d = (r) => {
      o ||= r;
      var f = (r - o) / n.dt;
      ((s = ix(n, s, f)),
        i(Qb(Qb(Qb({}, e), t), c())),
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
function ox(e, t, n, r, i, a, o) {
  var s = null,
    c = i.reduce((n, r) => Qb(Qb({}, n), {}, { [r]: [e[r], t[r]] }), {}),
    l,
    u = (i) => {
      l ||= i;
      var d = (i - l) / r,
        f = Xb((e, t) => nx(...t, n(d)), c);
      if ((a(Qb(Qb(Qb({}, e), t), f)), d < 1)) s = o.setTimeout(u);
      else {
        var p = Xb((e, t) => nx(...t, n(1)), c);
        a(Qb(Qb(Qb({}, e), t), p));
      }
    };
  return () => (
    (s = o.setTimeout(u)),
    () => {
      s();
    }
  );
}
var sx = (e, t, n, r, i, a) => {
    var o = Yb(e, t);
    return n.isStepper === !0 ? ax(e, t, n, o, i, a) : ox(e, t, n, r, o, i, a);
  },
  cx = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1],
  lx = (e, t) => e.map((e, n) => e * t ** n).reduce((e, t) => e + t),
  ux = (e, t) => (n) => lx(cx(e, t), n),
  dx = (e, t) => (n) =>
    lx(
      [
        ...cx(e, t)
          .map((e, t) => e * t)
          .slice(1),
        0,
      ],
      n,
    ),
  fx = function () {
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
    var o = ux(e, t),
      s = ux(n, r),
      c = dx(e, t),
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
  px = function () {
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
  mx = (e) => {
    if (typeof e == `string`)
      switch (e) {
        case `ease`:
        case `ease-in-out`:
        case `ease-out`:
        case `ease-in`:
        case `linear`:
          return fx(e);
        case `spring`:
          return px();
        default:
          if (e.split(`(`)[0] === `cubic-bezier`) return fx(e);
      }
    return typeof e == `function` ? e : null;
  };
function hx(e) {
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
var gx = class {
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
function _x() {
  return hx(new gx());
}
var vx = (0, R.createContext)(_x);
function yx(e, t) {
  var n = (0, R.useContext)(vx);
  return (0, R.useMemo)(() => t ?? n(e), [e, t, n]);
}
var bx = {
    begin: 0,
    duration: 1e3,
    easing: `ease`,
    isActive: !0,
    canBegin: !0,
    onAnimationEnd: () => {},
    onAnimationStart: () => {},
  },
  xx = { t: 0 },
  Sx = { t: 1 };
function Cx(e) {
  var t = zb(e, bx),
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
    u = yx(t.animationId, t.animationManager),
    [d, f] = (0, R.useState)(n ? xx : Sx),
    p = (0, R.useRef)(null);
  return (
    (0, R.useEffect)(() => {
      n || f(Sx);
    }, [n]),
    (0, R.useEffect)(() => {
      if (!n || !r) return Bb;
      var e = sx(xx, Sx, mx(a), i, f, u.getTimeoutController());
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
function wx(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : `animation-`,
    n = (0, R.useRef)(rp(t)),
    r = (0, R.useRef)(e);
  return (r.current !== e && ((n.current = rp(t)), (r.current = e)), n.current);
}
var Tx = [`radius`],
  Ex = [`radius`];
function Dx(e, t) {
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
function Ox(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Dx(Object(n), !0).forEach(function (t) {
          kx(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Dx(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function kx(e, t, n) {
  return (
    (t = Ax(t)) in e
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
function Ax(e) {
  var t = jx(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function jx(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Mx() {
  return (
    (Mx = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Mx.apply(null, arguments)
  );
}
function Nx(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Px(e, t);
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
function Px(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Fx = (e, t, n, r, i) => {
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
  Ix = {
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
  Lx = (e) => {
    var t = zb(e, Ix),
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
      b = wx(
        (0, R.useMemo)(
          () => ({ x: a, y: o, width: s, height: c, radius: l }),
          [a, o, s, c, l],
        ),
        `rectangle-`,
      );
    if (a !== +a || o !== +o || s !== +s || c !== +c || s === 0 || c === 0)
      return null;
    var x = W(`recharts-rectangle`, u);
    if (!h) {
      var S = cd(t),
        { radius: C } = S,
        w = Nx(S, Tx);
      return R.createElement(
        `path`,
        Mx({}, w, {
          radius: typeof l == `number` ? l : void 0,
          className: x,
          d: Fx(a, o, s, c, l),
        }),
      );
    }
    var T = g.current,
      E = _.current,
      D = v.current,
      O = y.current,
      k = `0px ${r === -1 ? 1 : r}px`,
      A = `${r}px 0px`,
      ee = Jb([`strokeDasharray`], f, typeof d == `string` ? d : void 0);
    return R.createElement(
      Cx,
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
        var r = op(T, s, e),
          i = op(E, c, e),
          u = op(D, a, e),
          d = op(O, o, e);
        n.current &&
          ((g.current = r), (_.current = i), (v.current = u), (y.current = d));
        var f = m
            ? e > 0
              ? { transition: ee, strokeDasharray: A }
              : { strokeDasharray: k }
            : { strokeDasharray: A },
          p = cd(t),
          { radius: h } = p,
          b = Nx(p, Ex);
        return R.createElement(
          `path`,
          Mx({}, b, {
            radius: typeof l == `number` ? l : void 0,
            className: x,
            d: Fx(u, d, r, i, l),
            ref: n,
            style: Ox(Ox({}, f), t.style),
          }),
        );
      },
    );
  };
function Rx(e) {
  var { cx: t, cy: n, radius: r, startAngle: i, endAngle: a } = e;
  return {
    points: [q_(t, n, r, i), q_(t, n, r, a)],
    cx: t,
    cy: n,
    radius: r,
    startAngle: i,
    endAngle: a,
  };
}
function zx() {
  return (
    (zx = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zx.apply(null, arguments)
  );
}
var Bx = (e, t) => Qf(t - e) * Math.min(Math.abs(t - e), 359.999),
  Vx = (e) => {
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
      u = Math.asin(s / l) / W_,
      d = c ? i : i + a * u,
      f = q_(t, n, l, d),
      p = q_(t, n, r, d),
      m = c ? i - a * u : i;
    return {
      center: f,
      circleTangency: p,
      lineTangency: q_(t, n, l * Math.cos(u * W_), m),
      theta: u,
    };
  },
  Hx = (e) => {
    var {
        cx: t,
        cy: n,
        innerRadius: r,
        outerRadius: i,
        startAngle: a,
        endAngle: o,
      } = e,
      s = Bx(a, o),
      c = a + s,
      l = q_(t, n, i, a),
      u = q_(t, n, i, c),
      d = `M ${l.x},${l.y}
    A ${i},${i},0,
    ${+(Math.abs(s) > 180)},${+(a > c)},
    ${u.x},${u.y}
  `;
    if (r > 0) {
      var f = q_(t, n, r, a),
        p = q_(t, n, r, c);
      d += `L ${p.x},${p.y}
            A ${r},${r},0,
            ${+(Math.abs(s) > 180)},${+(a <= c)},
            ${f.x},${f.y} Z`;
    } else d += `L ${t},${n} Z`;
    return d;
  },
  Ux = (e) => {
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
      u = Qf(l - c),
      {
        circleTangency: d,
        lineTangency: f,
        theta: p,
      } = Vx({
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
      } = Vx({
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
        : Hx({
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
        } = Vx({
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
        } = Vx({
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
  Wx = {
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
  Gx = (e) => {
    var t = zb(e, Wx),
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
      m = ip(o, p, 0, !0),
      h =
        m > 0 && Math.abs(l - u) < 360
          ? Ux({
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
          : Hx({
              cx: n,
              cy: r,
              innerRadius: i,
              outerRadius: a,
              startAngle: l,
              endAngle: u,
            });
    return R.createElement(`path`, zx({}, cd(t), { className: f, d: h }));
  };
function Kx(e, t, n) {
  var r, i, a, o;
  if (e === `horizontal`)
    ((r = t.x), (a = r), (i = n.top), (o = n.top + n.height));
  else if (e === `vertical`)
    ((i = t.y), (o = i), (r = n.left), (a = n.left + n.width));
  else if (t.cx != null && t.cy != null) {
    if (e === `centric`) {
      var { cx: s, cy: c, innerRadius: l, outerRadius: u, angle: d } = t,
        f = q_(s, c, l, d),
        p = q_(s, c, u, d);
      ((r = f.x), (i = f.y), (a = p.x), (o = p.y));
    } else return Rx(t);
  }
  return [
    { x: r, y: i },
    { x: a, y: o },
  ];
}
var qx = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Tm();
    function n(e) {
      return t.isSymbol(e) ? NaN : Number(e);
    }
    e.toNumber = n;
  }),
  Jx = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = qx();
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
  Yx = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = km(),
      n = Jx();
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
  Xx = n((e, t) => {
    t.exports = Yx().range;
  });
function Zx(e, t) {
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
function Qx(e, t) {
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
function $x(e) {
  let t, n, r;
  e.length === 2
    ? ((t = e === Zx || e === Qx ? e : eS), (n = e), (r = e))
    : ((t = Zx), (n = (t, n) => Zx(e(t), n)), (r = (t, n) => e(t) - n));
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
function eS() {
  return 0;
}
function tS(e) {
  return e === null ? NaN : +e;
}
function* nS(e, t) {
  if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
  else {
    let n = -1;
    for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
  }
}
var rS = $x(Zx),
  iS = rS.right;
(rS.left, $x(tS).center);
var aS = class extends Map {
  constructor(e, t = lS) {
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
    return super.get(oS(this, e));
  }
  has(e) {
    return super.has(oS(this, e));
  }
  set(e, t) {
    return super.set(sS(this, e), t);
  }
  delete(e) {
    return super.delete(cS(this, e));
  }
};
function oS({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function sS({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function cS({ _intern: e, _key: t }, n) {
  let r = t(n);
  return (e.has(r) && ((n = e.get(r)), e.delete(r)), n);
}
function lS(e) {
  return typeof e == `object` && e ? e.valueOf() : e;
}
function uS(e = Zx) {
  if (e === Zx) return dS;
  if (typeof e != `function`) throw TypeError(`compare is not a function`);
  return (t, n) => {
    let r = e(t, n);
    return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
  };
}
function dS(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : +(e > t))
  );
}
var fS = Math.sqrt(50),
  pS = Math.sqrt(10),
  mS = Math.sqrt(2);
function hS(e, t, n) {
  let r = (t - e) / Math.max(0, n),
    i = Math.floor(Math.log10(r)),
    a = r / 10 ** i,
    o = a >= fS ? 10 : a >= pS ? 5 : a >= mS ? 2 : 1,
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
    c < s && 0.5 <= n && n < 2 ? hS(e, t, n * 2) : [s, c, l]
  );
}
function gS(e, t, n) {
  if (((t = +t), (e = +e), (n = +n), !(n > 0))) return [];
  if (e === t) return [e];
  let r = t < e,
    [i, a, o] = r ? hS(t, e, n) : hS(e, t, n);
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
function _S(e, t, n) {
  return ((t = +t), (e = +e), (n = +n), hS(e, t, n)[2]);
}
function vS(e, t, n) {
  ((t = +t), (e = +e), (n = +n));
  let r = t < e,
    i = r ? _S(t, e, n) : _S(e, t, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function yS(e, t) {
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
function bS(e, t) {
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
function xS(e, t, n = 0, r = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (n = Math.floor(Math.max(0, n))),
    (r = Math.floor(Math.min(e.length - 1, r))),
    !(n <= t && t <= r))
  )
    return e;
  for (i = i === void 0 ? dS : uS(i); r > n;) {
    if (r - n > 600) {
      let a = r - n + 1,
        o = t - n + 1,
        s = Math.log(a),
        c = 0.5 * Math.exp((2 * s) / 3),
        l = 0.5 * Math.sqrt((s * c * (a - c)) / a) * (o - a / 2 < 0 ? -1 : 1),
        u = Math.max(n, Math.floor(t - (o * c) / a + l)),
        d = Math.min(r, Math.floor(t + ((a - o) * c) / a + l));
      xS(e, t, u, d, i);
    }
    let a = e[t],
      o = n,
      s = r;
    for (SS(e, n, t), i(e[r], a) > 0 && SS(e, n, r); o < s;) {
      for (SS(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
      for (; i(e[s], a) > 0;) --s;
    }
    (i(e[n], a) === 0 ? SS(e, n, s) : (++s, SS(e, s, r)),
      s <= t && (n = s + 1),
      t <= s && (r = s - 1));
  }
  return e;
}
function SS(e, t, n) {
  let r = e[t];
  ((e[t] = e[n]), (e[n] = r));
}
function CS(e, t, n) {
  if (((e = Float64Array.from(nS(e, n))), (r = e.length) && !isNaN((t = +t)))) {
    if (t <= 0 || r < 2) return bS(e);
    if (t >= 1) return yS(e);
    var r,
      i = (r - 1) * t,
      a = Math.floor(i),
      o = yS(xS(e, a).subarray(0, a + 1));
    return o + (bS(e.subarray(a + 1)) - o) * (i - a);
  }
}
function wS(e, t, n = tS) {
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
function TS(e, t, n) {
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
function ES(e, t) {
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
function DS(e, t) {
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
var OS = Symbol(`implicit`);
function kS() {
  var e = new aS(),
    t = [],
    n = [],
    r = OS;
  function i(i) {
    let a = e.get(i);
    if (a === void 0) {
      if (r !== OS) return r;
      e.set(i, (a = t.push(i) - 1));
    }
    return n[a % n.length];
  }
  return (
    (i.domain = function (n) {
      if (!arguments.length) return t.slice();
      ((t = []), (e = new aS()));
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
      return kS(t, n).unknown(r);
    }),
    ES.apply(i, arguments),
    i
  );
}
function AS() {
  var e = kS().unknown(void 0),
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
    var m = TS(e).map(function (e) {
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
      return AS(t(), [r, i]).round(s).paddingInner(c).paddingOuter(l).align(u);
    }),
    ES.apply(d(), arguments)
  );
}
function jS(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return jS(t());
    }),
    e
  );
}
function MS() {
  return jS(AS.apply(null, arguments).paddingInner(1));
}
function NS(e, t, n) {
  ((e.prototype = t.prototype = n), (n.constructor = e));
}
function PS(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function FS() {}
var IS = 0.7,
  LS = 1 / IS,
  RS = `\\s*([+-]?\\d+)\\s*`,
  zS = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,
  BS = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,
  VS = /^#([0-9a-f]{3,8})$/,
  HS = RegExp(`^rgb\\(${RS},${RS},${RS}\\)$`),
  US = RegExp(`^rgb\\(${BS},${BS},${BS}\\)$`),
  WS = RegExp(`^rgba\\(${RS},${RS},${RS},${zS}\\)$`),
  GS = RegExp(`^rgba\\(${BS},${BS},${BS},${zS}\\)$`),
  KS = RegExp(`^hsl\\(${zS},${BS},${BS}\\)$`),
  qS = RegExp(`^hsla\\(${zS},${BS},${BS},${zS}\\)$`),
  JS = {
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
NS(FS, $S, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: YS,
  formatHex: YS,
  formatHex8: XS,
  formatHsl: ZS,
  formatRgb: QS,
  toString: QS,
});
function YS() {
  return this.rgb().formatHex();
}
function XS() {
  return this.rgb().formatHex8();
}
function ZS() {
  return fC(this).formatHsl();
}
function QS() {
  return this.rgb().formatRgb();
}
function $S(e) {
  var t, n;
  return (
    (e = (e + ``).trim().toLowerCase()),
    (t = VS.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? eC(t)
          : n === 3
            ? new iC(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : n === 8
              ? tC(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : n === 4
                ? tC(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = HS.exec(e))
        ? new iC(t[1], t[2], t[3], 1)
        : (t = US.exec(e))
          ? new iC(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = WS.exec(e))
            ? tC(t[1], t[2], t[3], t[4])
            : (t = GS.exec(e))
              ? tC(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = KS.exec(e))
                ? dC(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = qS.exec(e))
                  ? dC(t[1], t[2] / 100, t[3] / 100, t[4])
                  : JS.hasOwnProperty(e)
                    ? eC(JS[e])
                    : e === `transparent`
                      ? new iC(NaN, NaN, NaN, 0)
                      : null
  );
}
function eC(e) {
  return new iC((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function tC(e, t, n, r) {
  return (r <= 0 && (e = t = n = NaN), new iC(e, t, n, r));
}
function nC(e) {
  return (
    e instanceof FS || (e = $S(e)),
    e ? ((e = e.rgb()), new iC(e.r, e.g, e.b, e.opacity)) : new iC()
  );
}
function rC(e, t, n, r) {
  return arguments.length === 1 ? nC(e) : new iC(e, t, n, r ?? 1);
}
function iC(e, t, n, r) {
  ((this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r));
}
NS(
  iC,
  rC,
  PS(FS, {
    brighter(e) {
      return (
        (e = e == null ? LS : LS ** +e),
        new iC(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? IS : IS ** +e),
        new iC(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new iC(lC(this.r), lC(this.g), lC(this.b), cC(this.opacity));
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
    hex: aC,
    formatHex: aC,
    formatHex8: oC,
    formatRgb: sC,
    toString: sC,
  }),
);
function aC() {
  return `#${uC(this.r)}${uC(this.g)}${uC(this.b)}`;
}
function oC() {
  return `#${uC(this.r)}${uC(this.g)}${uC(this.b)}${uC((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function sC() {
  let e = cC(this.opacity);
  return `${e === 1 ? `rgb(` : `rgba(`}${lC(this.r)}, ${lC(this.g)}, ${lC(this.b)}${e === 1 ? `)` : `, ${e})`}`;
}
function cC(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function lC(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function uC(e) {
  return ((e = lC(e)), (e < 16 ? `0` : ``) + e.toString(16));
}
function dC(e, t, n, r) {
  return (
    r <= 0
      ? (e = t = n = NaN)
      : n <= 0 || n >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new mC(e, t, n, r)
  );
}
function fC(e) {
  if (e instanceof mC) return new mC(e.h, e.s, e.l, e.opacity);
  if ((e instanceof FS || (e = $S(e)), !e)) return new mC();
  if (e instanceof mC) return e;
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
    new mC(o, s, c, e.opacity)
  );
}
function pC(e, t, n, r) {
  return arguments.length === 1 ? fC(e) : new mC(e, t, n, r ?? 1);
}
function mC(e, t, n, r) {
  ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
}
NS(
  mC,
  pC,
  PS(FS, {
    brighter(e) {
      return (
        (e = e == null ? LS : LS ** +e),
        new mC(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? IS : IS ** +e),
        new mC(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        i = 2 * n - r;
      return new iC(
        _C(e >= 240 ? e - 240 : e + 120, i, r),
        _C(e, i, r),
        _C(e < 120 ? e + 240 : e - 120, i, r),
        this.opacity,
      );
    },
    clamp() {
      return new mC(hC(this.h), gC(this.s), gC(this.l), cC(this.opacity));
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
      let e = cC(this.opacity);
      return `${e === 1 ? `hsl(` : `hsla(`}${hC(this.h)}, ${gC(this.s) * 100}%, ${gC(this.l) * 100}%${e === 1 ? `)` : `, ${e})`}`;
    },
  }),
);
function hC(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function gC(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function _C(e, t, n) {
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
var vC = (e) => () => e;
function yC(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function bC(e, t, n) {
  return (
    (e **= +n),
    (t = t ** +n - e),
    (n = 1 / n),
    function (r) {
      return (e + r * t) ** +n;
    }
  );
}
function xC(e) {
  return (e = +e) == 1
    ? SC
    : function (t, n) {
        return n - t ? bC(t, n, e) : vC(isNaN(t) ? n : t);
      };
}
function SC(e, t) {
  var n = t - e;
  return n ? yC(e, n) : vC(isNaN(e) ? t : e);
}
var CC = (function e(t) {
  var n = xC(t);
  function r(e, t) {
    var r = n((e = rC(e)).r, (t = rC(t)).r),
      i = n(e.g, t.g),
      a = n(e.b, t.b),
      o = SC(e.opacity, t.opacity);
    return function (t) {
      return (
        (e.r = r(t)), (e.g = i(t)), (e.b = a(t)), (e.opacity = o(t)), e + ``
      );
    };
  }
  return ((r.gamma = e), r);
})(1);
function wC(e, t) {
  t ||= [];
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
    return r;
  };
}
function TC(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function EC(e, t) {
  for (
    var n = t ? t.length : 0,
      r = e ? Math.min(n, e.length) : 0,
      i = Array(r),
      a = Array(n),
      o = 0;
    o < r;
    ++o
  )
    i[o] = FC(e[o], t[o]);
  for (; o < n; ++o) a[o] = t[o];
  return function (e) {
    for (o = 0; o < r; ++o) a[o] = i[o](e);
    return a;
  };
}
function DC(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return (n.setTime(e * (1 - r) + t * r), n);
    }
  );
}
function OC(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function kC(e, t) {
  var n = {},
    r = {},
    i;
  for (i in ((typeof e == `object` && e) || (e = {}),
  (typeof t == `object` && t) || (t = {}),
  t))
    i in e ? (n[i] = FC(e[i], t[i])) : (r[i] = t[i]);
  return function (e) {
    for (i in n) r[i] = n[i](e);
    return r;
  };
}
var AC = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  jC = new RegExp(AC.source, `g`);
function MC(e) {
  return function () {
    return e;
  };
}
function NC(e) {
  return function (t) {
    return e(t) + ``;
  };
}
function PC(e, t) {
  var n = (AC.lastIndex = jC.lastIndex = 0),
    r,
    i,
    a,
    o = -1,
    s = [],
    c = [];
  for (e += ``, t += ``; (r = AC.exec(e)) && (i = jC.exec(t));)
    ((a = i.index) > n &&
      ((a = t.slice(n, a)), s[o] ? (s[o] += a) : (s[++o] = a)),
      (r = r[0]) === (i = i[0])
        ? s[o]
          ? (s[o] += i)
          : (s[++o] = i)
        : ((s[++o] = null), c.push({ i: o, x: OC(r, i) })),
      (n = jC.lastIndex));
  return (
    n < t.length && ((a = t.slice(n)), s[o] ? (s[o] += a) : (s[++o] = a)),
    s.length < 2
      ? c[0]
        ? NC(c[0].x)
        : MC(t)
      : ((t = c.length),
        function (e) {
          for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
          return s.join(``);
        })
  );
}
function FC(e, t) {
  var n = typeof t,
    r;
  return t == null || n === `boolean`
    ? vC(t)
    : (n === `number`
        ? OC
        : n === `string`
          ? (r = $S(t))
            ? ((t = r), CC)
            : PC
          : t instanceof $S
            ? CC
            : t instanceof Date
              ? DC
              : TC(t)
                ? wC
                : Array.isArray(t)
                  ? EC
                  : (typeof t.valueOf != `function` &&
                        typeof t.toString != `function`) ||
                      isNaN(t)
                    ? kC
                    : OC)(e, t);
}
function IC(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
function LC(e, t) {
  t === void 0 && ((t = e), (e = FC));
  for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;)
    a[n] = e(i, (i = t[++n]));
  return function (e) {
    var t = Math.max(0, Math.min(r - 1, Math.floor((e *= r))));
    return a[t](e - t);
  };
}
function RC(e) {
  return function () {
    return e;
  };
}
function zC(e) {
  return +e;
}
var BC = [0, 1];
function VC(e) {
  return e;
}
function HC(e, t) {
  return (t -= e = +e)
    ? function (n) {
        return (n - e) / t;
      }
    : RC(isNaN(t) ? NaN : 0.5);
}
function UC(e, t) {
  var n;
  return (
    e > t && ((n = e), (e = t), (t = n)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function WC(e, t, n) {
  var r = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < r ? ((r = HC(i, r)), (a = n(o, a))) : ((r = HC(r, i)), (a = n(a, o))),
    function (e) {
      return a(r(e));
    }
  );
}
function GC(e, t, n) {
  var r = Math.min(e.length, t.length) - 1,
    i = Array(r),
    a = Array(r),
    o = -1;
  for (
    e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < r;
  )
    ((i[o] = HC(e[o], e[o + 1])), (a[o] = n(t[o], t[o + 1])));
  return function (t) {
    var n = iS(e, t, 1, r) - 1;
    return a[n](i[n](t));
  };
}
function KC(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function qC() {
  var e = BC,
    t = BC,
    n = FC,
    r,
    i,
    a,
    o = VC,
    s,
    c,
    l;
  function u() {
    var n = Math.min(e.length, t.length);
    return (
      o !== VC && (o = UC(e[0], e[n - 1])),
      (s = n > 2 ? GC : WC),
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
      return o(i((l ||= s(t, e.map(r), OC))(n)));
    }),
    (d.domain = function (t) {
      return arguments.length ? ((e = Array.from(t, zC)), u()) : e.slice();
    }),
    (d.range = function (e) {
      return arguments.length ? ((t = Array.from(e)), u()) : t.slice();
    }),
    (d.rangeRound = function (e) {
      return ((t = Array.from(e)), (n = IC), u());
    }),
    (d.clamp = function (e) {
      return arguments.length ? ((o = e ? !0 : VC), u()) : o !== VC;
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
function JC() {
  return qC()(VC, VC);
}
function YC(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString(`en`).replace(/,/g, ``)
    : e.toString(10);
}
function XC(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(`e`),
    r = e.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
function ZC(e) {
  return ((e = XC(Math.abs(e))), e ? e[1] : NaN);
}
function QC(e, t) {
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
function $C(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (t) {
      return e[+t];
    });
  };
}
var ew =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function tw(e) {
  if (!(t = ew.exec(e))) throw Error(`invalid format: ` + e);
  var t;
  return new nw({
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
tw.prototype = nw.prototype;
function nw(e) {
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
nw.prototype.toString = function () {
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
function rw(e) {
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
var iw;
function aw(e, t) {
  var n = XC(e, t);
  if (!n) return ((iw = void 0), e.toPrecision(t));
  var r = n[0],
    i = n[1],
    a = i - (iw = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = r.length;
  return a === o
    ? r
    : a > o
      ? r + Array(a - o + 1).join(`0`)
      : a > 0
        ? r.slice(0, a) + `.` + r.slice(a)
        : `0.` + Array(1 - a).join(`0`) + XC(e, Math.max(0, t + a - 1))[0];
}
function ow(e, t) {
  var n = XC(e, t);
  if (!n) return e + ``;
  var r = n[0],
    i = n[1];
  return i < 0
    ? `0.` + Array(-i).join(`0`) + r
    : r.length > i + 1
      ? r.slice(0, i + 1) + `.` + r.slice(i + 1)
      : r + Array(i - r.length + 2).join(`0`);
}
var sw = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + ``,
  d: YC,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ow(e * 100, t),
  r: ow,
  s: aw,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function cw(e) {
  return e;
}
var lw = Array.prototype.map,
  uw = [
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
function dw(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? cw
        : QC(lw.call(e.grouping, Number), e.thousands + ``),
    n = e.currency === void 0 ? `` : e.currency[0] + ``,
    r = e.currency === void 0 ? `` : e.currency[1] + ``,
    i = e.decimal === void 0 ? `.` : e.decimal + ``,
    a = e.numerals === void 0 ? cw : $C(lw.call(e.numerals, String)),
    o = e.percent === void 0 ? `%` : e.percent + ``,
    s = e.minus === void 0 ? `−` : e.minus + ``,
    c = e.nan === void 0 ? `NaN` : e.nan + ``;
  function l(e, l) {
    e = tw(e);
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
      : sw[y] || (_ === void 0 && (_ = 12), (v = !0), (y = `g`)),
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
      S = sw[y],
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
          v && (e = rw(e)),
          w && +e == 0 && f !== `+` && (w = !1),
          (n = (w ? (f === `(` ? f : s) : f === `-` || f === `(` ? `` : f) + n),
          (r =
            (y === `s` && !isNaN(e) && iw !== void 0 ? uw[8 + iw / 3] : ``) +
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
    var n = Math.max(-8, Math.min(8, Math.floor(ZC(t) / 3))) * 3,
      r = 10 ** -n,
      i = l(((e = tw(e)), (e.type = `f`), e), { suffix: uw[8 + n / 3] });
    return function (e) {
      return i(r * e);
    };
  }
  return { format: l, formatPrefix: u };
}
var fw, pw, mw;
hw({ thousands: `,`, grouping: [3], currency: [`$`, ``] });
function hw(e) {
  return ((fw = dw(e)), (pw = fw.format), (mw = fw.formatPrefix), fw);
}
function gw(e) {
  return Math.max(0, -ZC(Math.abs(e)));
}
function _w(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(ZC(t) / 3))) * 3 - ZC(Math.abs(e)),
  );
}
function vw(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, ZC(t) - ZC(e)) + 1
  );
}
function yw(e, t, n, r) {
  var i = vS(e, t, n),
    a;
  switch (((r = tw(r ?? `,f`)), r.type)) {
    case `s`:
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        r.precision == null && !isNaN((a = _w(i, o))) && (r.precision = a),
        mw(r, o)
      );
    case ``:
    case `e`:
    case `g`:
    case `p`:
    case `r`:
      r.precision == null &&
        !isNaN((a = vw(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (r.precision = a - (r.type === `e`));
      break;
    case `f`:
    case `%`:
      r.precision == null &&
        !isNaN((a = gw(i))) &&
        (r.precision = a - (r.type === `%`) * 2);
  }
  return pw(r);
}
function bw(e) {
  var t = e.domain;
  return (
    (e.ticks = function (e) {
      var n = t();
      return gS(n[0], n[n.length - 1], e ?? 10);
    }),
    (e.tickFormat = function (e, n) {
      var r = t();
      return yw(r[0], r[r.length - 1], e ?? 10, n);
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
        if (((l = _S(o, s, n)), l === c)) return ((r[i] = o), (r[a] = s), t(r));
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
function xw() {
  var e = JC();
  return (
    (e.copy = function () {
      return KC(e, xw());
    }),
    ES.apply(e, arguments),
    bw(e)
  );
}
function Sw(e) {
  var t;
  function n(e) {
    return e == null || isNaN((e = +e)) ? t : e;
  }
  return (
    (n.invert = n),
    (n.domain = n.range =
      function (t) {
        return arguments.length ? ((e = Array.from(t, zC)), n) : e.slice();
      }),
    (n.unknown = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.copy = function () {
      return Sw(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, zC) : [0, 1]),
    bw(n)
  );
}
function Cw(e, t) {
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
function ww(e) {
  return Math.log(e);
}
function Tw(e) {
  return Math.exp(e);
}
function Ew(e) {
  return -Math.log(-e);
}
function Dw(e) {
  return -Math.exp(-e);
}
function Ow(e) {
  return isFinite(e) ? +(`1e` + e) : e < 0 ? 0 : e;
}
function kw(e) {
  return e === 10 ? Ow : e === Math.E ? Math.exp : (t) => e ** +t;
}
function Aw(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function jw(e) {
  return (t, n) => -e(-t, n);
}
function Mw(e) {
  let t = e(ww, Tw),
    n = t.domain,
    r = 10,
    i,
    a;
  function o() {
    return (
      (i = Aw(r)),
      (a = kw(r)),
      n()[0] < 0 ? ((i = jw(i)), (a = jw(a)), e(Ew, Dw)) : e(ww, Tw),
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
        m.length * 2 < p && (m = gS(o, s, p));
      } else m = gS(l, u, Math.min(u - l, p)).map(a);
      return c ? m.reverse() : m;
    }),
    (t.tickFormat = (e, n) => {
      if (
        ((e ??= 10),
        (n ??= r === 10 ? `s` : `,`),
        typeof n != `function` &&
          (!(r % 1) && (n = tw(n)).precision == null && (n.trim = !0),
          (n = pw(n))),
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
        Cw(n(), {
          floor: (e) => a(Math.floor(i(e))),
          ceil: (e) => a(Math.ceil(i(e))),
        }),
      )),
    t
  );
}
function Nw() {
  let e = Mw(qC()).domain([1, 10]);
  return (
    (e.copy = () => KC(e, Nw()).base(e.base())), ES.apply(e, arguments), e
  );
}
function Pw(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Fw(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Iw(e) {
  var t = 1,
    n = e(Pw(t), Fw(t));
  return (
    (n.constant = function (n) {
      return arguments.length ? e(Pw((t = +n)), Fw(t)) : t;
    }),
    bw(n)
  );
}
function Lw() {
  var e = Iw(qC());
  return (
    (e.copy = function () {
      return KC(e, Lw()).constant(e.constant());
    }),
    ES.apply(e, arguments)
  );
}
function Rw(e) {
  return function (t) {
    return t < 0 ? -((-t) ** +e) : t ** +e;
  };
}
function zw(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Bw(e) {
  return e < 0 ? -e * e : e * e;
}
function Vw(e) {
  var t = e(VC, VC),
    n = 1;
  function r() {
    return n === 1 ? e(VC, VC) : n === 0.5 ? e(zw, Bw) : e(Rw(n), Rw(1 / n));
  }
  return (
    (t.exponent = function (e) {
      return arguments.length ? ((n = +e), r()) : n;
    }),
    bw(t)
  );
}
function Hw() {
  var e = Vw(qC());
  return (
    (e.copy = function () {
      return KC(e, Hw()).exponent(e.exponent());
    }),
    ES.apply(e, arguments),
    e
  );
}
function Uw() {
  return Hw.apply(null, arguments).exponent(0.5);
}
function Ww(e) {
  return Math.sign(e) * e * e;
}
function Gw(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Kw() {
  var e = JC(),
    t = [0, 1],
    n = !1,
    r;
  function i(t) {
    var i = Gw(e(t));
    return isNaN(i) ? r : n ? Math.round(i) : i;
  }
  return (
    (i.invert = function (t) {
      return e.invert(Ww(t));
    }),
    (i.domain = function (t) {
      return arguments.length ? (e.domain(t), i) : e.domain();
    }),
    (i.range = function (n) {
      return arguments.length
        ? (e.range((t = Array.from(n, zC)).map(Ww)), i)
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
      return Kw(e.domain(), t).round(n).clamp(e.clamp()).unknown(r);
    }),
    ES.apply(i, arguments),
    bw(i)
  );
}
function qw() {
  var e = [],
    t = [],
    n = [],
    r;
  function i() {
    var r = 0,
      i = Math.max(1, t.length);
    for (n = Array(i - 1); ++r < i;) n[r - 1] = wS(e, r / i);
    return a;
  }
  function a(e) {
    return e == null || isNaN((e = +e)) ? r : t[iS(n, e)];
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
      return (e.sort(Zx), i());
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
      return qw().domain(e).range(t).unknown(r);
    }),
    ES.apply(a, arguments)
  );
}
function Jw() {
  var e = 0,
    t = 1,
    n = 1,
    r = [0.5],
    i = [0, 1],
    a;
  function o(e) {
    return e != null && e <= e ? i[iS(r, e, 0, n)] : a;
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
      return Jw().domain([e, t]).range(i).unknown(a);
    }),
    ES.apply(bw(o), arguments)
  );
}
function Yw() {
  var e = [0.5],
    t = [0, 1],
    n,
    r = 1;
  function i(i) {
    return i != null && i <= i ? t[iS(e, i, 0, r)] : n;
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
      return Yw().domain(e).range(t).unknown(n);
    }),
    ES.apply(i, arguments)
  );
}
var Xw = new Date(),
  Zw = new Date();
function Qw(e, t, n, r) {
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
      Qw(
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
        Xw.setTime(+t),
        Zw.setTime(+r),
        e(Xw),
        e(Zw),
        Math.floor(n(Xw, Zw))
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
var $w = Qw(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
(($w.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? Qw(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, n) => {
            t.setTime(+t + n * e);
          },
          (t, n) => (n - t) / e,
        )
      : $w
)),
  $w.range);
var eT = 1e3,
  tT = eT * 60,
  nT = tT * 60,
  rT = nT * 24,
  iT = rT * 7,
  aT = rT * 30,
  oT = rT * 365,
  sT = Qw(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * eT);
    },
    (e, t) => (t - e) / eT,
    (e) => e.getUTCSeconds(),
  );
sT.range;
var cT = Qw(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * eT);
  },
  (e, t) => {
    e.setTime(+e + t * tT);
  },
  (e, t) => (t - e) / tT,
  (e) => e.getMinutes(),
);
cT.range;
var lT = Qw(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * tT);
  },
  (e, t) => (t - e) / tT,
  (e) => e.getUTCMinutes(),
);
lT.range;
var uT = Qw(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * eT - e.getMinutes() * tT,
    );
  },
  (e, t) => {
    e.setTime(+e + t * nT);
  },
  (e, t) => (t - e) / nT,
  (e) => e.getHours(),
);
uT.range;
var dT = Qw(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * nT);
  },
  (e, t) => (t - e) / nT,
  (e) => e.getUTCHours(),
);
dT.range;
var fT = Qw(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * tT) / rT,
  (e) => e.getDate() - 1,
);
fT.range;
var pT = Qw(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / rT,
  (e) => e.getUTCDate() - 1,
);
pT.range;
var mT = Qw(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / rT,
  (e) => Math.floor(e / rT),
);
mT.range;
function hT(e) {
  return Qw(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setDate(e.getDate() + t * 7);
    },
    (e, t) =>
      (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * tT) / iT,
  );
}
var gT = hT(0),
  _T = hT(1),
  vT = hT(2),
  yT = hT(3),
  bT = hT(4),
  xT = hT(5),
  ST = hT(6);
(gT.range, _T.range, vT.range, yT.range, bT.range, xT.range, ST.range);
function CT(e) {
  return Qw(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setUTCDate(e.getUTCDate() + t * 7);
    },
    (e, t) => (t - e) / iT,
  );
}
var wT = CT(0),
  TT = CT(1),
  ET = CT(2),
  DT = CT(3),
  OT = CT(4),
  kT = CT(5),
  AT = CT(6);
(wT.range, TT.range, ET.range, DT.range, OT.range, kT.range, AT.range);
var jT = Qw(
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
jT.range;
var MT = Qw(
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
MT.range;
var NT = Qw(
  (e) => {
    (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
((NT.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Qw(
        (t) => {
          (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setFullYear(t.getFullYear() + n * e);
        },
      )),
  NT.range);
var PT = Qw(
  (e) => {
    (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
((PT.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Qw(
        (t) => {
          (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setUTCFullYear(t.getUTCFullYear() + n * e);
        },
      )),
  PT.range);
function FT(e, t, n, r, i, a) {
  let o = [
    [sT, 1, eT],
    [sT, 5, 5 * eT],
    [sT, 15, 15 * eT],
    [sT, 30, 30 * eT],
    [a, 1, tT],
    [a, 5, 5 * tT],
    [a, 15, 15 * tT],
    [a, 30, 30 * tT],
    [i, 1, nT],
    [i, 3, 3 * nT],
    [i, 6, 6 * nT],
    [i, 12, 12 * nT],
    [r, 1, rT],
    [r, 2, 2 * rT],
    [n, 1, iT],
    [t, 1, aT],
    [t, 3, 3 * aT],
    [e, 1, oT],
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
      a = $x(([, , e]) => e).right(o, i);
    if (a === o.length) return e.every(vS(t / oT, n / oT, r));
    if (a === 0) return $w.every(Math.max(vS(t, n, r), 1));
    let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
    return s.every(c);
  }
  return [s, c];
}
var [IT, LT] = FT(PT, MT, wT, mT, dT, lT),
  [RT, zT] = FT(NT, jT, gT, fT, uT, cT);
function BT(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function VT(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function HT(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function UT(e) {
  var t = e.dateTime,
    n = e.date,
    r = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    s = e.months,
    c = e.shortMonths,
    l = YT(i),
    u = XT(i),
    d = YT(a),
    f = XT(a),
    p = YT(o),
    m = XT(o),
    h = YT(s),
    g = XT(s),
    _ = YT(c),
    v = XT(c),
    y = {
      a: j,
      A: ne,
      b: re,
      B: ie,
      c: null,
      d: _E,
      e: _E,
      f: SE,
      g: NE,
      G: FE,
      H: vE,
      I: yE,
      j: bE,
      L: xE,
      m: CE,
      M: wE,
      p: ae,
      q: oe,
      Q: iD,
      s: aD,
      S: TE,
      u: EE,
      U: DE,
      V: kE,
      w: AE,
      W: jE,
      x: null,
      X: null,
      y: ME,
      Y: PE,
      Z: IE,
      "%": rD,
    },
    b = {
      a: se,
      A: ce,
      b: le,
      B: ue,
      c: null,
      d: LE,
      e: LE,
      f: HE,
      g: $E,
      G: tD,
      H: RE,
      I: zE,
      j: BE,
      L: VE,
      m: UE,
      M: WE,
      p: de,
      q: fe,
      Q: iD,
      s: aD,
      S: GE,
      u: KE,
      U: qE,
      V: YE,
      w: XE,
      W: ZE,
      x: null,
      X: null,
      y: QE,
      Y: eD,
      Z: nD,
      "%": rD,
    },
    x = {
      a: E,
      A: D,
      b: O,
      B: k,
      c: A,
      d: sE,
      e: sE,
      f: pE,
      g: rE,
      G: nE,
      H: lE,
      I: lE,
      j: cE,
      L: fE,
      m: oE,
      M: uE,
      p: T,
      q: aE,
      Q: hE,
      s: gE,
      S: dE,
      u: QT,
      U: $T,
      V: eE,
      w: ZT,
      W: tE,
      x: ee,
      X: te,
      y: rE,
      Y: nE,
      Z: iE,
      "%": mE,
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
          (c = WT[(s = e.charAt(++i))]) == null
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
      var r = HT(1900, void 0, 1),
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
            ? ((a = VT(HT(r.y, 0, 1))),
              (o = a.getUTCDay()),
              (a = o > 4 || o === 0 ? TT.ceil(a) : TT(a)),
              (a = pT.offset(a, (r.V - 1) * 7)),
              (r.y = a.getUTCFullYear()),
              (r.m = a.getUTCMonth()),
              (r.d = a.getUTCDate() + ((r.w + 6) % 7)))
            : ((a = BT(HT(r.y, 0, 1))),
              (o = a.getDay()),
              (a = o > 4 || o === 0 ? _T.ceil(a) : _T(a)),
              (a = fT.offset(a, (r.V - 1) * 7)),
              (r.y = a.getFullYear()),
              (r.m = a.getMonth()),
              (r.d = a.getDate() + ((r.w + 6) % 7))));
      } else
        (`W` in r || `U` in r) &&
          (`w` in r || (r.w = `u` in r ? r.u % 7 : +(`W` in r)),
          (o =
            `Z` in r
              ? VT(HT(r.y, 0, 1)).getUTCDay()
              : BT(HT(r.y, 0, 1)).getDay()),
          (r.m = 0),
          (r.d =
            `W` in r
              ? ((r.w + 6) % 7) + r.W * 7 - ((o + 5) % 7)
              : r.w + r.U * 7 - ((o + 6) % 7)));
      return `Z` in r
        ? ((r.H += (r.Z / 100) | 0), (r.M += r.Z % 100), VT(r))
        : BT(r);
    };
  }
  function w(e, t, n, r) {
    for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
      if (r >= o) return -1;
      if (((s = t.charCodeAt(i++)), s === 37)) {
        if (
          ((s = t.charAt(i++)),
          (c = x[s in WT ? t.charAt(i++) : s]),
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
  function te(e, t, n) {
    return w(e, r, t, n);
  }
  function j(e) {
    return o[e.getDay()];
  }
  function ne(e) {
    return a[e.getDay()];
  }
  function re(e) {
    return c[e.getMonth()];
  }
  function ie(e) {
    return s[e.getMonth()];
  }
  function ae(e) {
    return i[+(e.getHours() >= 12)];
  }
  function oe(e) {
    return 1 + ~~(e.getMonth() / 3);
  }
  function se(e) {
    return o[e.getUTCDay()];
  }
  function ce(e) {
    return a[e.getUTCDay()];
  }
  function le(e) {
    return c[e.getUTCMonth()];
  }
  function ue(e) {
    return s[e.getUTCMonth()];
  }
  function de(e) {
    return i[+(e.getUTCHours() >= 12)];
  }
  function fe(e) {
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
var WT = { "-": ``, _: ` `, 0: `0` },
  GT = /^\s*\d+/,
  KT = /^%/,
  qT = /[\\^$*+?|[\]().{}]/g;
function Z(e, t, n) {
  var r = e < 0 ? `-` : ``,
    i = (r ? -e : e) + ``,
    a = i.length;
  return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function JT(e) {
  return e.replace(qT, `\\$&`);
}
function YT(e) {
  return RegExp(`^(?:` + e.map(JT).join(`|`) + `)`, `i`);
}
function XT(e) {
  return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function ZT(e, t, n) {
  var r = GT.exec(t.slice(n, n + 1));
  return r ? ((e.w = +r[0]), n + r[0].length) : -1;
}
function QT(e, t, n) {
  var r = GT.exec(t.slice(n, n + 1));
  return r ? ((e.u = +r[0]), n + r[0].length) : -1;
}
function $T(e, t, n) {
  var r = GT.exec(t.slice(n, n + 2));
  return r ? ((e.U = +r[0]), n + r[0].length) : -1;
}
function eE(e, t, n) {
  var r = GT.exec(t.slice(n, n + 2));
  return r ? ((e.V = +r[0]), n + r[0].length) : -1;
}
function tE(e, t, n) {
  var r = GT.exec(t.slice(n, n + 2));
  return r ? ((e.W = +r[0]), n + r[0].length) : -1;
}
function nE(e, t, n) {
  var r = GT.exec(t.slice(n, n + 4));
  return r ? ((e.y = +r[0]), n + r[0].length) : -1;
}
function rE(e, t, n) {
  var r = GT.exec(t.slice(n, n + 2));
  return r ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
}
function iE(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r
    ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || `00`))), n + r[0].length)
    : -1;
}
function aE(e, t, n) {
  var r = GT.exec(t.slice(n, n + 1));
  return r ? ((e.q = r[0] * 3 - 3), n + r[0].length) : -1;
}
function oE(e, t, n) {
  var r = GT.exec(t.slice(n, n + 2));
  return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
}
function sE(e, t, n) {
  var r = GT.exec(t.slice(n, n + 2));
  return r ? ((e.d = +r[0]), n + r[0].length) : -1;
}
function cE(e, t, n) {
  var r = GT.exec(t.slice(n, n + 3));
  return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
}
function lE(e, t, n) {
  var r = GT.exec(t.slice(n, n + 2));
  return r ? ((e.H = +r[0]), n + r[0].length) : -1;
}
function uE(e, t, n) {
  var r = GT.exec(t.slice(n, n + 2));
  return r ? ((e.M = +r[0]), n + r[0].length) : -1;
}
function dE(e, t, n) {
  var r = GT.exec(t.slice(n, n + 2));
  return r ? ((e.S = +r[0]), n + r[0].length) : -1;
}
function fE(e, t, n) {
  var r = GT.exec(t.slice(n, n + 3));
  return r ? ((e.L = +r[0]), n + r[0].length) : -1;
}
function pE(e, t, n) {
  var r = GT.exec(t.slice(n, n + 6));
  return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
}
function mE(e, t, n) {
  var r = KT.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function hE(e, t, n) {
  var r = GT.exec(t.slice(n));
  return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
}
function gE(e, t, n) {
  var r = GT.exec(t.slice(n));
  return r ? ((e.s = +r[0]), n + r[0].length) : -1;
}
function _E(e, t) {
  return Z(e.getDate(), t, 2);
}
function vE(e, t) {
  return Z(e.getHours(), t, 2);
}
function yE(e, t) {
  return Z(e.getHours() % 12 || 12, t, 2);
}
function bE(e, t) {
  return Z(1 + fT.count(NT(e), e), t, 3);
}
function xE(e, t) {
  return Z(e.getMilliseconds(), t, 3);
}
function SE(e, t) {
  return xE(e, t) + `000`;
}
function CE(e, t) {
  return Z(e.getMonth() + 1, t, 2);
}
function wE(e, t) {
  return Z(e.getMinutes(), t, 2);
}
function TE(e, t) {
  return Z(e.getSeconds(), t, 2);
}
function EE(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function DE(e, t) {
  return Z(gT.count(NT(e) - 1, e), t, 2);
}
function OE(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? bT(e) : bT.ceil(e);
}
function kE(e, t) {
  return ((e = OE(e)), Z(bT.count(NT(e), e) + (NT(e).getDay() === 4), t, 2));
}
function AE(e) {
  return e.getDay();
}
function jE(e, t) {
  return Z(_T.count(NT(e) - 1, e), t, 2);
}
function ME(e, t) {
  return Z(e.getFullYear() % 100, t, 2);
}
function NE(e, t) {
  return ((e = OE(e)), Z(e.getFullYear() % 100, t, 2));
}
function PE(e, t) {
  return Z(e.getFullYear() % 1e4, t, 4);
}
function FE(e, t) {
  var n = e.getDay();
  return (
    (e = n >= 4 || n === 0 ? bT(e) : bT.ceil(e)), Z(e.getFullYear() % 1e4, t, 4)
  );
}
function IE(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? `-` : ((t *= -1), `+`)) +
    Z((t / 60) | 0, `0`, 2) +
    Z(t % 60, `0`, 2)
  );
}
function LE(e, t) {
  return Z(e.getUTCDate(), t, 2);
}
function RE(e, t) {
  return Z(e.getUTCHours(), t, 2);
}
function zE(e, t) {
  return Z(e.getUTCHours() % 12 || 12, t, 2);
}
function BE(e, t) {
  return Z(1 + pT.count(PT(e), e), t, 3);
}
function VE(e, t) {
  return Z(e.getUTCMilliseconds(), t, 3);
}
function HE(e, t) {
  return VE(e, t) + `000`;
}
function UE(e, t) {
  return Z(e.getUTCMonth() + 1, t, 2);
}
function WE(e, t) {
  return Z(e.getUTCMinutes(), t, 2);
}
function GE(e, t) {
  return Z(e.getUTCSeconds(), t, 2);
}
function KE(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function qE(e, t) {
  return Z(wT.count(PT(e) - 1, e), t, 2);
}
function JE(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? OT(e) : OT.ceil(e);
}
function YE(e, t) {
  return ((e = JE(e)), Z(OT.count(PT(e), e) + (PT(e).getUTCDay() === 4), t, 2));
}
function XE(e) {
  return e.getUTCDay();
}
function ZE(e, t) {
  return Z(TT.count(PT(e) - 1, e), t, 2);
}
function QE(e, t) {
  return Z(e.getUTCFullYear() % 100, t, 2);
}
function $E(e, t) {
  return ((e = JE(e)), Z(e.getUTCFullYear() % 100, t, 2));
}
function eD(e, t) {
  return Z(e.getUTCFullYear() % 1e4, t, 4);
}
function tD(e, t) {
  var n = e.getUTCDay();
  return (
    (e = n >= 4 || n === 0 ? OT(e) : OT.ceil(e)),
    Z(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function nD() {
  return `+0000`;
}
function rD() {
  return `%`;
}
function iD(e) {
  return +e;
}
function aD(e) {
  return Math.floor(e / 1e3);
}
var oD, sD, cD;
lD({
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
function lD(e) {
  return (
    (oD = UT(e)),
    (sD = oD.format),
    oD.parse,
    (cD = oD.utcFormat),
    oD.utcParse,
    oD
  );
}
function uD(e) {
  return new Date(e);
}
function dD(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function fD(e, t, n, r, i, a, o, s, c, l) {
  var u = JC(),
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
      return arguments.length ? f(Array.from(e, dD)) : f().map(uD);
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
        e ? f(Cw(n, e)) : u
      );
    }),
    (u.copy = function () {
      return KC(u, fD(e, t, n, r, i, a, o, s, c, l));
    }),
    u
  );
}
function pD() {
  return ES.apply(
    fD(RT, zT, NT, jT, gT, fT, uT, cT, sT, sD).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function mD() {
  return ES.apply(
    fD(IT, LT, PT, MT, wT, pT, dT, lT, sT, cD).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function hD() {
  var e = 0,
    t = 1,
    n,
    r,
    i,
    a,
    o = VC,
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
    (l.range = u(FC)),
    (l.rangeRound = u(IC)),
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
function gD(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function _D() {
  var e = bw(hD()(VC));
  return (
    (e.copy = function () {
      return gD(e, _D());
    }),
    DS.apply(e, arguments)
  );
}
function vD() {
  var e = Mw(hD()).domain([1, 10]);
  return (
    (e.copy = function () {
      return gD(e, vD()).base(e.base());
    }),
    DS.apply(e, arguments)
  );
}
function yD() {
  var e = Iw(hD());
  return (
    (e.copy = function () {
      return gD(e, yD()).constant(e.constant());
    }),
    DS.apply(e, arguments)
  );
}
function bD() {
  var e = Vw(hD());
  return (
    (e.copy = function () {
      return gD(e, bD()).exponent(e.exponent());
    }),
    DS.apply(e, arguments)
  );
}
function xD() {
  return bD.apply(null, arguments).exponent(0.5);
}
function SD() {
  var e = [],
    t = VC;
  function n(n) {
    if (n != null && !isNaN((n = +n)))
      return t((iS(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (n.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let n of t) n != null && !isNaN((n = +n)) && e.push(n);
      return (e.sort(Zx), n);
    }),
    (n.interpolator = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.range = function () {
      return e.map((n, r) => t(r / (e.length - 1)));
    }),
    (n.quantiles = function (t) {
      return Array.from({ length: t + 1 }, (n, r) => CS(e, r / t));
    }),
    (n.copy = function () {
      return SD(t).domain(e);
    }),
    DS.apply(n, arguments)
  );
}
function CD() {
  var e = 0,
    t = 0.5,
    n = 1,
    r = 1,
    i,
    a,
    o,
    s,
    c,
    l = VC,
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
        ? (([n, r, i] = t), (l = LC(e, [n, r, i])), p)
        : [l(0), l(0.5), l(1)];
    };
  }
  return (
    (p.range = m(FC)),
    (p.rangeRound = m(IC)),
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
function wD() {
  var e = bw(CD()(VC));
  return (
    (e.copy = function () {
      return gD(e, wD());
    }),
    DS.apply(e, arguments)
  );
}
function TD() {
  var e = Mw(CD()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return gD(e, TD()).base(e.base());
    }),
    DS.apply(e, arguments)
  );
}
function ED() {
  var e = Iw(CD());
  return (
    (e.copy = function () {
      return gD(e, ED()).constant(e.constant());
    }),
    DS.apply(e, arguments)
  );
}
function DD() {
  var e = Vw(CD());
  return (
    (e.copy = function () {
      return gD(e, DD()).exponent(e.exponent());
    }),
    DS.apply(e, arguments)
  );
}
function OD() {
  return DD.apply(null, arguments).exponent(0.5);
}
var kD = e(Xx()),
  AD = t({
    scaleBand: () => AS,
    scaleDiverging: () => wD,
    scaleDivergingLog: () => TD,
    scaleDivergingPow: () => DD,
    scaleDivergingSqrt: () => OD,
    scaleDivergingSymlog: () => ED,
    scaleIdentity: () => Sw,
    scaleImplicit: () => OS,
    scaleLinear: () => xw,
    scaleLog: () => Nw,
    scaleOrdinal: () => kS,
    scalePoint: () => MS,
    scalePow: () => Hw,
    scaleQuantile: () => qw,
    scaleQuantize: () => Jw,
    scaleRadial: () => Kw,
    scaleSequential: () => _D,
    scaleSequentialLog: () => vD,
    scaleSequentialPow: () => bD,
    scaleSequentialQuantile: () => SD,
    scaleSequentialSqrt: () => xD,
    scaleSequentialSymlog: () => yD,
    scaleSqrt: () => Uw,
    scaleSymlog: () => Lw,
    scaleThreshold: () => Yw,
    scaleTime: () => pD,
    scaleUtc: () => mD,
    tickFormat: () => yw,
  }),
  jD = (e) => e.chartData,
  MD = Y([jD], (e) => {
    var t = e.chartData == null ? 0 : e.chartData.length - 1;
    return {
      chartData: e.chartData,
      computedData: e.computedData,
      dataEndIndex: t,
      dataStartIndex: 0,
    };
  }),
  ND = (e, t, n, r) => (r ? MD(e) : jD(e));
function PD(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, n] = e;
    if (my(t) && my(n)) return !0;
  }
  return !1;
}
function FD(e, t, n) {
  return n ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function ID(e, t) {
  if (t && typeof e != `function` && Array.isArray(e) && e.length === 2) {
    var [n, r] = e,
      i,
      a;
    if (my(n)) i = n;
    else if (typeof n == `function`) return;
    if (my(r)) a = r;
    else if (typeof r == `function`) return;
    var o = [i, a];
    if (PD(o)) return o;
  }
}
function LD(e, t, n) {
  if (n || t != null) {
    if (typeof e == `function` && t != null)
      try {
        var r = e(t, n);
        if (PD(r)) return FD(r, t, n);
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
      else if (typeof i == `string` && wv.test(i)) {
        var c = wv.exec(i);
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
      else if (typeof a == `string` && Tv.test(a)) {
        var u = Tv.exec(a);
        if (u == null || t == null) s = void 0;
        else {
          var d = +u[1];
          s = t[1] + d;
        }
      } else s = t?.[1];
      var f = [o, s];
      if (PD(f)) return t == null ? f : FD(f, t, n);
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
              te = r.d,
              j = i.d;
            if (!r.s) return new A(r);
            if (!i.s) throw Error(a + `Division by zero`);
            for (
              l = r.e - i.e,
                O = j.length,
                T = te.length,
                g = new A(ee),
                _ = g.d = [],
                u = 0;
              j[u] == (te[u] || 0);
            )
              ++u;
            if (
              (j[u] > (te[u] || 0) && --l,
              (x =
                o == null ? (o = A.precision) : s ? o + (S(r) - S(i)) + 1 : o),
              x < 0)
            )
              return new A(0);
            if (((x = (x / p + 2) | 0), (u = 0), O == 1))
              for (d = 0, j = j[0], x++; (u < T || d) && x--; u++)
                ((C = d * f + (te[u] || 0)),
                  (_[u] = (C / j) | 0),
                  (d = (C % j) | 0));
            else {
              for (
                d = (f / (j[0] + 1)) | 0,
                  d > 1 &&
                    ((j = e(j, d)),
                    (te = e(te, d)),
                    (O = j.length),
                    (T = te.length)),
                  w = O,
                  v = te.slice(0, O),
                  y = v.length;
                y < O;
              )
                v[y++] = 0;
              ((k = j.slice()), k.unshift(0), (E = j[0]), j[1] >= f / 2 && ++E);
              do
                ((d = 0),
                  (c = t(j, v, O, y)),
                  c < 0
                    ? ((b = v[0]),
                      O != y && (b = b * f + (v[1] || 0)),
                      (d = (b / E) | 0),
                      d > 1
                        ? (d >= f && (d = f - 1),
                          (m = e(j, d)),
                          (h = m.length),
                          (y = v.length),
                          (c = t(m, v, h, y)),
                          c == 1 && (d--, n(m, O < h ? k : j, h)))
                        : (d == 0 && (c = d = 1), (m = j.slice())),
                      (h = m.length),
                      h < y && m.unshift(0),
                      n(v, m, y),
                      c == -1 &&
                        ((y = v.length),
                        (c = t(j, v, O, y)),
                        c < 1 && (d++, n(v, O < y ? k : j, y))),
                      (y = v.length))
                    : c === 0 && (d++, (v = [0])),
                  (_[u++] = d),
                  c && v[0] ? (v[y++] = te[w] || 0) : ((v = [te[w]]), (y = 1)));
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
            (i.config = i.set = te),
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
        function te(e) {
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
  RD = (e) => e,
  zD = { "@@functional/placeholder": !0 },
  BD = (e) => e === zD,
  VD = (e) =>
    function t() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          BD(arguments.length <= 0 ? void 0 : arguments[0]))
        ? t
        : e(...arguments);
    },
  HD = (e, t) =>
    e === 1
      ? t
      : VD(function () {
          var n = [...arguments],
            r = n.filter((e) => e !== zD).length;
          return r >= e
            ? t(...n)
            : HD(
                e - r,
                VD(function () {
                  var e = [...arguments];
                  return t(...n.map((t) => (BD(t) ? e.shift() : t)), ...e);
                }),
              );
        }),
  UD = (e) => HD(e.length, e),
  WD = (e, t) => {
    for (var n = [], r = e; r < t; ++r) n[r - e] = r;
    return n;
  },
  GD = UD((e, t) =>
    Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map((e) => t[e])
          .map(e),
  ),
  KD = function () {
    var e = [...arguments];
    if (!e.length) return RD;
    var t = e.reverse(),
      n = t[0],
      r = t.slice(1);
    return function () {
      return r.reduce((e, t) => t(e), n(...arguments));
    };
  },
  qD = (e) => (Array.isArray(e) ? e.reverse() : e.split(``).reverse().join(``)),
  JD = (e) => {
    var t = null,
      n = null;
    return function () {
      var r = [...arguments];
      return (
        (t && r.every((e, n) => e === t?.[n])) || ((t = r), (n = e(...r))), n
      );
    };
  };
function YD(e) {
  return e === 0
    ? 1
    : Math.floor(new Q.default(e).abs().log(10).toNumber()) + 1;
}
function XD(e, t, n) {
  for (var r = new Q.default(e), i = 0, a = []; r.lt(t) && i < 1e5;)
    (a.push(r.toNumber()), (r = r.add(n)), i++);
  return a;
}
(UD((e, t, n) => {
  var r = +e;
  return r + n * (+t - r);
}),
  UD((e, t, n) => {
    var r = t - +e;
    return ((r ||= 1 / 0), (n - e) / r);
  }),
  UD((e, t, n) => {
    var r = t - +e;
    return ((r ||= 1 / 0), Math.max(0, Math.min(1, (n - e) / r)));
  }));
var ZD = (e) => {
    var [t, n] = e,
      [r, i] = [t, n];
    return (t > n && ([r, i] = [n, t]), [r, i]);
  },
  QD = (e, t, n) => {
    if (e.lte(0)) return new Q.default(0);
    var r = YD(e.toNumber()),
      i = new Q.default(10).pow(r),
      a = e.div(i),
      o = r === 1 ? 0.1 : 0.05,
      s = new Q.default(Math.ceil(a.div(o).toNumber())).add(n).mul(o).mul(i);
    return t
      ? new Q.default(s.toNumber())
      : new Q.default(Math.ceil(s.toNumber()));
  },
  $D = (e, t, n) => {
    var r = new Q.default(1),
      i = new Q.default(e);
    if (!i.isint() && n) {
      var a = Math.abs(e);
      a < 1
        ? ((r = new Q.default(10).pow(YD(e) - 1)),
          (i = new Q.default(Math.floor(i.div(r).toNumber())).mul(r)))
        : a > 1 && (i = new Q.default(Math.floor(e)));
    } else
      e === 0
        ? (i = new Q.default(Math.floor((t - 1) / 2)))
        : n || (i = new Q.default(Math.floor(e)));
    var o = Math.floor((t - 1) / 2);
    return KD(
      GD((e) => i.add(new Q.default(e - o).mul(r)).toNumber()),
      WD,
    )(0, t);
  },
  eO = function (e, t, n, r) {
    var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    if (!Number.isFinite((t - e) / (n - 1)))
      return {
        step: new Q.default(0),
        tickMin: new Q.default(0),
        tickMax: new Q.default(0),
      };
    var a = QD(new Q.default(t).sub(e).div(n - 1), r, i),
      o;
    e <= 0 && t >= 0
      ? (o = new Q.default(0))
      : ((o = new Q.default(e).add(t).div(2)),
        (o = o.sub(new Q.default(o).mod(a))));
    var s = Math.ceil(o.sub(e).div(a).toNumber()),
      c = Math.ceil(new Q.default(t).sub(o).div(a).toNumber()),
      l = s + c + 1;
    return l > n
      ? eO(e, t, n, r, i + 1)
      : (l < n &&
          ((c = t > 0 ? c + (n - l) : c), (s = t > 0 ? s : s + (n - l))),
        {
          step: a,
          tickMin: o.sub(new Q.default(s).mul(a)),
          tickMax: o.add(new Q.default(c).mul(a)),
        });
  };
function tO(e) {
  var [t, n] = e,
    r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    a = Math.max(r, 2),
    [o, s] = ZD([t, n]);
  if (o === -1 / 0 || s === 1 / 0) {
    var c =
      s === 1 / 0
        ? [o, ...WD(0, r - 1).map(() => 1 / 0)]
        : [...WD(0, r - 1).map(() => -1 / 0), s];
    return t > n ? qD(c) : c;
  }
  if (o === s) return $D(o, r, i);
  var { step: l, tickMin: u, tickMax: d } = eO(o, s, a, i, 0),
    f = XD(u, d.add(new Q.default(0.1).mul(l)), l);
  return t > n ? qD(f) : f;
}
function nO(e, t) {
  var [n, r] = e,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    [a, o] = ZD([n, r]);
  if (a === -1 / 0 || o === 1 / 0) return [n, r];
  if (a === o) return [a];
  var s = Math.max(t, 2),
    c = QD(new Q.default(o).sub(a).div(s - 1), i, 0),
    l = [...XD(new Q.default(a), new Q.default(o), c), o];
  return (i === !1 && (l = l.map((e) => Math.round(e))), n > r ? qD(l) : l);
}
var rO = JD(tO),
  iO = JD(nO),
  aO = (e) => e.rootProps.maxBarSize,
  oO = (e) => e.rootProps.barGap,
  sO = (e) => e.rootProps.barCategoryGap,
  cO = (e) => e.rootProps.barSize,
  lO = (e) => e.rootProps.stackOffset,
  uO = (e) => e.options.chartName,
  dO = (e) => e.rootProps.syncId,
  fO = (e) => e.rootProps.syncMethod,
  pO = (e) => e.options.eventEmitter,
  mO = {
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
  hO = {
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
  gO = (e, t) => {
    if (e && t) return e != null && e.reversed ? [t[1], t[0]] : t;
  },
  _O = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    domain: void 0,
    id: mO.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: mO.reversed,
    scale: mO.scale,
    tick: mO.tick,
    tickCount: void 0,
    ticks: void 0,
    type: mO.type,
    unit: void 0,
  },
  vO = {
    allowDataOverflow: hO.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: hO.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: hO.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: hO.scale,
    tick: hO.tick,
    tickCount: hO.tickCount,
    ticks: void 0,
    type: hO.type,
    unit: void 0,
  },
  yO = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: mO.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: mO.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: mO.scale,
    tick: mO.tick,
    tickCount: void 0,
    ticks: void 0,
    type: `number`,
    unit: void 0,
  },
  bO = {
    allowDataOverflow: hO.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: hO.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: hO.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: hO.scale,
    tick: hO.tick,
    tickCount: hO.tickCount,
    ticks: void 0,
    type: `category`,
    unit: void 0,
  },
  xO = (e, t) =>
    e.polarAxis.angleAxis[t] == null
      ? e.layout.layoutType === `radial`
        ? yO
        : _O
      : e.polarAxis.angleAxis[t],
  SO = (e, t) =>
    e.polarAxis.radiusAxis[t] == null
      ? e.layout.layoutType === `radial`
        ? bO
        : vO
      : e.polarAxis.radiusAxis[t],
  CO = (e) => e.polarOptions,
  wO = Y([Mv, Nv, Xv], J_),
  TO = Y([CO, wO], (e, t) => {
    if (e != null) return ip(e.innerRadius, t, 0);
  }),
  EO = Y([CO, wO], (e, t) => {
    if (e != null) return ip(e.outerRadius, t, t * 0.8);
  }),
  DO = Y([CO], (e) => {
    if (e == null) return [0, 0];
    var { startAngle: t, endAngle: n } = e;
    return [t, n];
  }),
  OO = Y([xO, DO], gO),
  kO = Y([wO, TO, EO], (e, t, n) => {
    if (e != null && t != null && n != null) return [t, n];
  }),
  AO = Y([SO, kO], gO),
  jO = Y([X, CO, TO, EO, Mv, Nv], (e, t, n, r, i, a) => {
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
        cx: ip(o, i, i / 2),
        cy: ip(s, a, a / 2),
        innerRadius: n,
        outerRadius: r,
        startAngle: c,
        endAngle: l,
        clockWise: !1,
      };
    }
  }),
  MO = (e, t) => t,
  NO = (e, t, n) => n;
function PO(e) {
  return e?.id;
}
var FO = (e) => {
    var t = X(e);
    return t === `horizontal`
      ? `xAxis`
      : t === `vertical`
        ? `yAxis`
        : t === `centric`
          ? `angleAxis`
          : `radiusAxis`;
  },
  IO = (e) => e.tooltip.settings.axisId,
  LO = (e) => ak(e, FO(e), IO(e)),
  RO = Y([LO], (e) => e?.dataKey);
function zO(e, t, n) {
  var { chartData: r = [] } = t,
    { allowDuplicatedCategory: i, dataKey: a } = n,
    o = new Map();
  return (
    e.forEach((e) => {
      var t = e.data ?? r;
      if (t != null && t.length !== 0) {
        var n = PO(e);
        t.forEach((t, r) => {
          var s = a == null || i ? r : String(sv(t, a, null)),
            c = sv(t, e.dataKey, 0),
            l = o.has(s) ? o.get(s) : {};
          (Object.assign(l, { [n]: c }), o.set(s, l));
        });
      }
    }),
    Array.from(o.values())
  );
}
function BO(e) {
  return e.stackId != null && e.dataKey != null;
}
var VO = (e, t) =>
  e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function HO(e, t) {
  return Array.isArray(e) &&
    Array.isArray(t) &&
    e.length === 0 &&
    t.length === 0
    ? !0
    : e === t;
}
function UO(e, t) {
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
function WO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? UO(Object(n), !0).forEach(function (t) {
          GO(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : UO(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function GO(e, t, n) {
  return (
    (t = KO(t)) in e
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
function KO(e) {
  var t = qO(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function qO(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var JO = [0, `auto`],
  YO = {
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
  XO = (e, t) => e.cartesianAxis.xAxis[t],
  ZO = (e, t) => XO(e, t) ?? YO,
  QO = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: JO,
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
  $O = (e, t) => e.cartesianAxis.yAxis[t],
  ek = (e, t) => $O(e, t) ?? QO,
  tk = {
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
  nk = (e, t) => e.cartesianAxis.zAxis[t] ?? tk,
  rk = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return ZO(e, n);
      case `yAxis`:
        return ek(e, n);
      case `zAxis`:
        return nk(e, n);
      case `angleAxis`:
        return xO(e, n);
      case `radiusAxis`:
        return SO(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  ik = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return ZO(e, n);
      case `yAxis`:
        return ek(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  ak = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return ZO(e, n);
      case `yAxis`:
        return ek(e, n);
      case `angleAxis`:
        return xO(e, n);
      case `radiusAxis`:
        return SO(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  ok = (e) =>
    e.graphicalItems.cartesianItems.some((e) => e.type === `bar`) ||
    e.graphicalItems.polarItems.some((e) => e.type === `radialBar`);
function sk(e, t) {
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
var ck = (e) => e.graphicalItems.cartesianItems,
  lk = Y([MO, NO], sk),
  uk = (e, t, n) =>
    e.filter(n).filter((e) => t?.includeHidden === !0 || !e.hide),
  dk = Y([ck, rk, lk], uk, { memoizeOptions: { resultEqualityCheck: HO } }),
  fk = Y([dk], (e) =>
    e.filter((e) => e.type === `area` || e.type === `bar`).filter(BO),
  ),
  pk = (e) => e.filter((e) => !(`stackId` in e) || e.stackId === void 0),
  mk = Y([dk], pk),
  hk = (e) =>
    e
      .map((e) => e.data)
      .filter(Boolean)
      .flat(1),
  gk = Y([dk], hk, { memoizeOptions: { resultEqualityCheck: HO } }),
  _k = (e, t) => {
    var { chartData: n = [], dataStartIndex: r, dataEndIndex: i } = t;
    return e.length > 0 ? e : n.slice(r, i + 1);
  },
  vk = Y([gk, ND], _k),
  yk = (e, t, n) =>
    t?.dataKey == null
      ? n.length > 0
        ? n
            .map((e) => e.dataKey)
            .flatMap((t) => e.map((e) => ({ value: sv(e, t) })))
        : e.map((e) => ({ value: e }))
      : e.map((e) => ({ value: sv(e, t.dataKey) })),
  bk = Y([vk, rk, dk], yk);
function xk(e, t) {
  switch (e) {
    case `xAxis`:
      return t.direction === `x`;
    case `yAxis`:
      return t.direction === `y`;
    default:
      return !1;
  }
}
function Sk(e) {
  if (tp(e) || e instanceof Date) {
    var t = Number(e);
    if (my(t)) return t;
  }
}
function Ck(e) {
  if (Array.isArray(e)) {
    var t = [Sk(e[0]), Sk(e[1])];
    return PD(t) ? t : void 0;
  }
  var n = Sk(e);
  if (n != null) return [n, n];
}
function wk(e) {
  return e.map(Sk).filter(Vb);
}
function Tk(e, t, n) {
  return !n || typeof t != `number` || $f(t) || !n.length
    ? []
    : wk(
        n.flatMap((n) => {
          var r = sv(e, n.dataKey),
            i,
            a;
          if ((Array.isArray(r) ? ([i, a] = r) : (i = a = r), my(i) && my(a)))
            return [t - i, t + a];
        }),
      );
}
var Ek = Y([fk, ND, LO], zO),
  Dk = (e, t, n) => {
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
        return [r, { stackedData: _v(e, i.map(PO), n), graphicalItems: i }];
      }),
    );
  },
  Ok = Y([Ek, fk, lO], Dk),
  kk = (e, t, n, r) => {
    var { dataStartIndex: i, dataEndIndex: a } = t;
    if (r == null && n !== `zAxis`) {
      var o = Cv(e, i, a);
      if (o == null || o[0] !== 0 || o[1] !== 0) return o;
    }
  },
  Ak = Y([rk], (e) => e.allowDataOverflow),
  jk = (e) => {
    if (e == null || !(`domain` in e)) return JO;
    if (e.domain != null) return e.domain;
    if (e.ticks != null) {
      if (e.type === `number`) {
        var t = wk(e.ticks);
        return [Math.min(...t), Math.max(...t)];
      }
      if (e.type === `category`) return e.ticks.map(String);
    }
    return e?.domain ?? JO;
  },
  Mk = Y([rk], jk),
  Nk = Y([Mk, Ak], ID),
  Pk = Y([Ok, jD, MO, Nk], kk, { memoizeOptions: { resultEqualityCheck: VO } }),
  Fk = (e) => e.errorBars,
  Ik = (e, t, n) =>
    e
      .flatMap((e) => t[e.id])
      .filter(Boolean)
      .filter((e) => xk(n, e)),
  Lk = function () {
    var e = [...arguments].filter(Boolean);
    if (e.length !== 0) {
      var t = e.flat();
      return [Math.min(...t), Math.max(...t)];
    }
  },
  Rk = (e, t, n, r, i) => {
    var a, o;
    if (
      (n.length > 0 &&
        e.forEach((e) => {
          n.forEach((n) => {
            var s = r[n.id]?.filter((e) => xk(i, e)),
              c = sv(e, t.dataKey ?? n.dataKey),
              l = Tk(e, c, s);
            if (l.length >= 2) {
              var u = Math.min(...l),
                d = Math.max(...l);
              ((a == null || u < a) && (a = u),
                (o == null || d > o) && (o = d));
            }
            var f = Ck(c);
            f != null &&
              ((a = a == null ? f[0] : Math.min(a, f[0])),
              (o = o == null ? f[1] : Math.max(o, f[1])));
          });
        }),
      t?.dataKey != null &&
        e.forEach((e) => {
          var n = Ck(sv(e, t.dataKey));
          n != null &&
            ((a = a == null ? n[0] : Math.min(a, n[0])),
            (o = o == null ? n[1] : Math.max(o, n[1])));
        }),
      my(a) && my(o))
    )
      return [a, o];
  },
  zk = Y([vk, rk, mk, Fk, MO], Rk, {
    memoizeOptions: { resultEqualityCheck: VO },
  });
function Bk(e) {
  var { value: t } = e;
  if (tp(t) || t instanceof Date) return t;
}
var Vk = (e, t, n) => {
    var r = e.map(Bk).filter((e) => e != null);
    return n && (t.dataKey == null || (t.allowDuplicatedCategory && ap(r)))
      ? (0, kD.default)(0, e.length)
      : t.allowDuplicatedCategory
        ? r
        : Array.from(new Set(r));
  },
  Hk = (e) => e.referenceElements.dots,
  Uk = (e, t, n) =>
    e
      .filter((e) => e.ifOverflow === `extendDomain`)
      .filter((e) => (t === `xAxis` ? e.xAxisId === n : e.yAxisId === n)),
  Wk = Y([Hk, MO, NO], Uk),
  Gk = (e) => e.referenceElements.areas,
  Kk = Y([Gk, MO, NO], Uk),
  qk = (e) => e.referenceElements.lines,
  Jk = Y([qk, MO, NO], Uk),
  Yk = (e, t) => {
    var n = wk(e.map((e) => (t === `xAxis` ? e.x : e.y)));
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  Xk = Y(Wk, MO, Yk),
  Zk = (e, t) => {
    var n = wk(
      e.flatMap((e) => [
        t === `xAxis` ? e.x1 : e.y1,
        t === `xAxis` ? e.x2 : e.y2,
      ]),
    );
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  Qk = Y([Kk, MO], Zk),
  $k = (e, t) => {
    var n = wk(e.map((e) => (t === `xAxis` ? e.x : e.y)));
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  eA = Y(Xk, Y(Jk, MO, $k), Qk, (e, t, n) => Lk(e, n, t)),
  tA = (e, t, n, r, i, a, o, s) =>
    n ??
    LD(
      t,
      (o === `vertical` && s === `xAxis`) ||
        (o === `horizontal` && s === `yAxis`)
        ? Lk(r, a, i)
        : Lk(a, i),
      e.allowDataOverflow,
    ),
  nA = Y([rk, Mk, Nk, Pk, zk, eA, X, MO], tA, {
    memoizeOptions: { resultEqualityCheck: VO },
  }),
  rA = [0, 1],
  iA = (e, t, n, r, i, a, o) => {
    if ((e != null && n != null && n.length !== 0) || o !== void 0) {
      var { dataKey: s, type: c } = e,
        l = uv(t, a);
      return l && s == null
        ? (0, kD.default)(0, n.length)
        : c === `category`
          ? Vk(r, e, l)
          : i === `expand`
            ? rA
            : o;
    }
  },
  aA = Y([rk, X, vk, bk, lO, MO, nA], iA),
  oA = (e, t, n, r, i) => {
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
        var s = `scale${lp(a)}`;
        return s in AD ? s : `point`;
      }
    }
  },
  sA = Y([rk, X, ok, uO, MO], oA);
function cA(e) {
  if (e != null) {
    if (e in AD) return AD[e]();
    var t = `scale${lp(e)}`;
    if (t in AD) return AD[t]();
  }
}
function lA(e, t, n, r) {
  if (n != null && r != null) {
    if (typeof e.scale == `function`) return e.scale.copy().domain(n).range(r);
    var i = cA(t);
    if (i != null) {
      var a = i.domain(n).range(r);
      return (mv(a), a);
    }
  }
}
var uA = (e, t, n) => {
    var r = jk(t);
    if (n === `auto` || n === `linear`) {
      if (
        t != null &&
        t.tickCount &&
        Array.isArray(r) &&
        (r[0] === `auto` || r[1] === `auto`) &&
        PD(e)
      )
        return rO(e, t.tickCount, t.allowDecimals);
      if (t != null && t.tickCount && t.type === `number` && PD(e))
        return iO(e, t.tickCount, t.allowDecimals);
    }
  },
  dA = Y([aA, ak, sA], uA),
  fA = (e, t, n, r) => {
    if (
      r !== `angleAxis` &&
      e?.type === `number` &&
      PD(t) &&
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
  pA = Y([rk, aA, dA, MO], fA),
  mA = Y(
    Y(bk, rk, (e, t) => {
      if (t && t.type === `number`) {
        var n = 1 / 0,
          r = Array.from(wk(e.map((e) => e.value))).sort((e, t) => e - t);
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
    sO,
    Xv,
    (e, t, n, r) => r,
    (e, t, n, r, i) => {
      if (!my(e)) return 0;
      var a = t === `vertical` ? r.height : r.width;
      if (i === `gap`) return (e * a) / 2;
      if (i === `no-gap`) {
        var o = ip(n, e * a),
          s = (e * a) / 2;
        return s - o - ((s - o) / a) * o;
      }
      return 0;
    },
  ),
  hA = (e, t) => {
    var n = ZO(e, t);
    return n == null || typeof n.padding != `string`
      ? 0
      : mA(e, `xAxis`, t, n.padding);
  },
  gA = (e, t) => {
    var n = ek(e, t);
    return n == null || typeof n.padding != `string`
      ? 0
      : mA(e, `yAxis`, t, n.padding);
  },
  _A = Y(ZO, hA, (e, t) => {
    if (e == null) return { left: 0, right: 0 };
    var { padding: n } = e;
    return typeof n == `string`
      ? { left: t, right: t }
      : { left: (n.left ?? 0) + t, right: (n.right ?? 0) + t };
  }),
  vA = Y(ek, gA, (e, t) => {
    if (e == null) return { top: 0, bottom: 0 };
    var { padding: n } = e;
    return typeof n == `string`
      ? { top: t, bottom: t }
      : { top: (n.top ?? 0) + t, bottom: (n.bottom ?? 0) + t };
  }),
  yA = Y([Xv, _A, ny, ty, (e, t, n) => n], (e, t, n, r, i) => {
    var { padding: a } = r;
    return i
      ? [a.left, n.width - a.right]
      : [e.left + t.left, e.left + e.width - t.right];
  }),
  bA = Y([Xv, X, vA, ny, ty, (e, t, n) => n], (e, t, n, r, i, a) => {
    var { padding: o } = i;
    return a
      ? [r.height - o.bottom, o.top]
      : t === `horizontal`
        ? [e.top + e.height - n.bottom, e.top + n.top]
        : [e.top + n.top, e.top + e.height - n.bottom];
  }),
  xA = (e, t, n, r) => {
    switch (t) {
      case `xAxis`:
        return yA(e, n, r);
      case `yAxis`:
        return bA(e, n, r);
      case `zAxis`:
        return nk(e, n)?.range;
      case `angleAxis`:
        return DO(e);
      case `radiusAxis`:
        return kO(e, n);
      default:
        return;
    }
  },
  SA = Y([rk, xA], gO),
  CA = Y([rk, sA, pA, SA], lA);
Y([dk, Fk, MO], Ik);
function wA(e, t) {
  return e.id < t.id ? -1 : +(e.id > t.id);
}
var TA = (e, t) => t,
  EA = (e, t, n) => n,
  DA = Y(Iv, TA, EA, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort(wA),
  ),
  OA = Y(Lv, TA, EA, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort(wA),
  ),
  kA = (e, t) => ({ width: e.width, height: t.height }),
  AA = (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  }),
  jA = Y(Xv, ZO, kA),
  MA = (e, t, n) => {
    switch (t) {
      case `top`:
        return e.top;
      case `bottom`:
        return n - e.bottom;
      default:
        return 0;
    }
  },
  NA = (e, t, n) => {
    switch (t) {
      case `left`:
        return e.left;
      case `right`:
        return n - e.right;
      default:
        return 0;
    }
  },
  PA = Y(Nv, Xv, DA, TA, EA, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = kA(t, n);
        o ??= MA(t, r, e);
        var c = (r === `top` && !i) || (r === `bottom` && i);
        ((a[n.id] = o - Number(c) * s.height), (o += (c ? -1 : 1) * s.height));
      }),
      a
    );
  }),
  FA = Y(Mv, Xv, OA, TA, EA, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = AA(t, n);
        o ??= NA(t, r, e);
        var c = (r === `left` && !i) || (r === `right` && i);
        ((a[n.id] = o - Number(c) * s.width), (o += (c ? -1 : 1) * s.width));
      }),
      a
    );
  }),
  IA = Y(
    [
      Xv,
      ZO,
      (e, t) => {
        var n = ZO(e, t);
        if (n != null) return PA(e, n.orientation, n.mirror);
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
  LA = Y(
    [
      Xv,
      ek,
      (e, t) => {
        var n = ek(e, t);
        if (n != null) return FA(e, n.orientation, n.mirror);
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
  RA = Y(Xv, ek, (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  })),
  zA = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return jA(e, n).width;
      case `yAxis`:
        return RA(e, n).height;
      default:
        return;
    }
  },
  BA = (e, t, n, r) => {
    if (n != null) {
      var { allowDuplicatedCategory: i, type: a, dataKey: o } = n,
        s = uv(e, r),
        c = t.map((e) => e.value);
      if (o && s && a === `category` && i && ap(c)) return c;
    }
  },
  VA = Y([X, bk, rk, MO], BA),
  HA = (e, t, n, r) => {
    if (n != null && n.dataKey != null) {
      var { type: i, scale: a } = n;
      if (uv(e, r) && (i === `number` || a !== `auto`))
        return t.map((e) => e.value);
    }
  },
  UA = Y([X, bk, ak, MO], HA),
  WA = Y([X, ik, sA, CA, VA, UA, xA, dA, MO], (e, t, n, r, i, a, o, s, c) => {
    if (t == null) return null;
    var l = uv(e, c);
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
  GA = (e, t, n, r, i, a, o, s, c) => {
    if (t != null && r != null) {
      var l = uv(e, c),
        { type: u, ticks: d, tickCount: f } = t,
        p =
          n === `scaleBand` && typeof r.bandwidth == `function`
            ? r.bandwidth() / 2
            : 2,
        m = u === `category` && r.bandwidth ? r.bandwidth() / p : 0;
      m =
        c === `angleAxis` && a != null && a.length >= 2
          ? Qf(a[0] - a[1]) * 2 * m
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
            .filter((e) => !$f(e.coordinate))
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
  KA = Y([X, ak, sA, CA, dA, xA, VA, UA, MO], GA),
  qA = (e, t, n, r, i, a, o) => {
    if (t != null && n != null && r != null && r[0] !== r[1]) {
      var s = uv(e, o),
        { tickCount: c } = t,
        l = 0;
      return (
        (l = o === `angleAxis` && r?.length >= 2 ? Qf(r[0] - r[1]) * 2 * l : l),
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
  JA = Y([X, ak, CA, xA, VA, UA, MO], qA),
  YA = Y(rk, CA, (e, t) => {
    if (e != null && t != null) return WO(WO({}, e), {}, { scale: t });
  });
Y(
  (e, t, n) => nk(e, n),
  Y([rk, sA, aA, SA], lA),
  (e, t) => {
    if (e != null && t != null) return WO(WO({}, e), {}, { scale: t });
  },
);
var XA = Y([X, Iv, Lv], (e, t, n) => {
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
  ZA = (e) => e.options.defaultTooltipEventType,
  QA = (e) => e.options.validateTooltipEventTypes;
function $A(e, t, n) {
  if (e == null) return t;
  var r = e ? `axis` : `item`;
  return n == null ? t : n.includes(r) ? r : t;
}
function ej(e, t) {
  return $A(t, ZA(e), QA(e));
}
function tj(e) {
  return J((t) => ej(t, e));
}
var nj = (e, t) => {
    var n,
      r = Number(t);
    if (!($f(r) || t == null))
      return r >= 0
        ? e == null || (n = e[r]) == null
          ? void 0
          : n.value
        : void 0;
  },
  rj = (e) => e.tooltip.settings,
  ij = { active: !1, index: null, dataKey: void 0, coordinate: void 0 },
  aj = Wg({
    name: `tooltip`,
    initialState: {
      itemInteraction: { click: ij, hover: ij },
      axisInteraction: { click: ij, hover: ij },
      keyboardInteraction: ij,
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
          e.tooltipItemPayloads.push(Kh(t.payload));
        },
        prepare: bg(),
      },
      removeTooltipEntrySettings: {
        reducer(e, t) {
          var n = Vh(e).tooltipItemPayloads.indexOf(Kh(t.payload));
          n > -1 && e.tooltipItemPayloads.splice(n, 1);
        },
        prepare: bg(),
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
    addTooltipEntrySettings: oj,
    removeTooltipEntrySettings: sj,
    setTooltipSettingsState: cj,
    setActiveMouseOverItemIndex: lj,
    mouseLeaveItem: uj,
    mouseLeaveChart: dj,
    setActiveClickItemIndex: fj,
    setMouseOverAxisIndex: pj,
    setMouseClickAxisIndex: mj,
    setSyncInteraction: hj,
    setKeyboardInteraction: gj,
  } = aj.actions,
  _j = aj.reducer;
function vj(e, t) {
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
function yj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? vj(Object(n), !0).forEach(function (t) {
          bj(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : vj(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function bj(e, t, n) {
  return (
    (t = xj(t)) in e
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
function xj(e) {
  var t = Sj(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Sj(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Cj(e, t, n) {
  return t === `axis`
    ? n === `click`
      ? e.axisInteraction.click
      : e.axisInteraction.hover
    : n === `click`
      ? e.itemInteraction.click
      : e.itemInteraction.hover;
}
function wj(e) {
  return e.index != null;
}
var Tj = (e, t, n, r) => {
    if (t == null) return ij;
    var i = Cj(e, t, n);
    if (i == null) return ij;
    if (i.active) return i;
    if (e.keyboardInteraction.active) return e.keyboardInteraction;
    if (e.syncInteraction.active && e.syncInteraction.index != null)
      return e.syncInteraction;
    var a = e.settings.active === !0;
    if (wj(i)) {
      if (a) return yj(yj({}, i), {}, { active: !0 });
    } else if (r != null)
      return { active: !0, coordinate: void 0, dataKey: void 0, index: r };
    return yj(yj({}, ij), {}, { coordinate: i.coordinate });
  },
  Ej = (e, t) => {
    var n = e?.index;
    if (n == null) return null;
    var r = Number(n);
    if (!my(r)) return n;
    var i = 0,
      a = 1 / 0;
    return (
      t.length > 0 && (a = t.length - 1), String(Math.max(i, Math.min(r, a)))
    );
  },
  Dj = (e, t, n, r, i, a, o, s) => {
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
  Oj = (e, t, n, r) => {
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
  kj = (e) => e.options.tooltipPayloadSearcher,
  Aj = (e) => e.tooltip;
function jj(e, t) {
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
function Mj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? jj(Object(n), !0).forEach(function (t) {
          Nj(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : jj(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Nj(e, t, n) {
  return (
    (t = Pj(t)) in e
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
function Pj(e) {
  var t = Fj(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Fj(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Ij(e, t) {
  return e ?? t;
}
var Lj = (e, t, n, r, i, a, o) => {
    if (t != null && a != null) {
      var {
        chartData: s,
        computedData: c,
        dataStartIndex: l,
        dataEndIndex: u,
      } = n;
      return e.reduce((e, n) => {
        var { dataDefinedOnItem: d, settings: f } = n,
          p = Ij(d, s),
          m = Array.isArray(p) ? tv(p, l, u) : p,
          h = f?.dataKey ?? r,
          g = f?.nameKey,
          _ =
            r && Array.isArray(m) && !Array.isArray(m[0]) && o === `axis`
              ? sp(m, r, i)
              : a(m, t, c, g);
        return (
          Array.isArray(_)
            ? _.forEach((t) => {
                var n = Mj(
                  Mj({}, f),
                  {},
                  { name: t.name, unit: t.unit, color: void 0, fill: void 0 },
                );
                e.push(
                  Dv({
                    tooltipEntrySettings: n,
                    dataKey: t.dataKey,
                    payload: t.payload,
                    value: sv(t.payload, t.dataKey),
                    name: t.name,
                  }),
                );
              })
            : e.push(
                Dv({
                  tooltipEntrySettings: f,
                  dataKey: h,
                  payload: _,
                  value: sv(_, h),
                  name: sv(_, g) ?? f?.name,
                }),
              ),
          e
        );
      }, []);
    }
  },
  Rj = Y([LO, X, ok, uO, FO], oA),
  zj = Y(
    [
      Y(
        [
          (e) => e.graphicalItems.cartesianItems,
          (e) => e.graphicalItems.polarItems,
        ],
        (e, t) => [...e, ...t],
      ),
      LO,
      Y([FO, IO], sk),
    ],
    uk,
    { memoizeOptions: { resultEqualityCheck: HO } },
  ),
  Bj = Y([zj], (e) => e.filter(BO)),
  Vj = Y(
    [Y([zj], hk, { memoizeOptions: { resultEqualityCheck: HO } }), jD],
    _k,
  ),
  Hj = Y([Bj, jD, LO], zO),
  Uj = Y([Vj, LO, zj], yk),
  Wj = Y([LO], jk),
  Gj = Y([Wj, Y([LO], (e) => e.allowDataOverflow)], ID),
  Kj = Y([Y([Hj, Y([zj], (e) => e.filter(BO)), lO], Dk), jD, FO, Gj], kk),
  qj = Y([Vj, LO, Y([zj], pk), Fk, FO], Rk, {
    memoizeOptions: { resultEqualityCheck: VO },
  }),
  Jj = Y([Y([Hk, FO, IO], Uk), FO], Yk),
  Yj = Y([Y([Gk, FO, IO], Uk), FO], Zk),
  Xj = Y(
    [
      LO,
      X,
      Vj,
      Uj,
      lO,
      FO,
      Y(
        [
          LO,
          Wj,
          Gj,
          Kj,
          qj,
          Y([Jj, Y([Y([qk, FO, IO], Uk), FO], $k), Yj], Lk),
          X,
          FO,
        ],
        tA,
      ),
    ],
    iA,
  ),
  Zj = Y([LO, Xj, Y([Xj, LO, Rj], uA), FO], fA),
  Qj = (e) => xA(e, FO(e), IO(e), !1),
  $j = Y([LO, Qj], gO),
  eM = Y([LO, Rj, Zj, $j], lA),
  tM = Y(
    [X, LO, Rj, eM, Qj, Y([X, Uj, LO, FO], BA), Y([X, Uj, LO, FO], HA), FO],
    (e, t, n, r, i, a, o, s) => {
      if (t) {
        var { type: c } = t,
          l = uv(e, s);
        if (r) {
          var u = n === `scaleBand` && r.bandwidth ? r.bandwidth() / 2 : 2,
            d = c === `category` && r.bandwidth ? r.bandwidth() / u : 0;
          return (
            (d =
              s === `angleAxis` && i != null && i?.length >= 2
                ? Qf(i[0] - i[1]) * 2 * d
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
  nM = Y([ZA, QA, rj], (e, t, n) => $A(n.shared, e, t)),
  rM = (e) => e.tooltip.settings.trigger,
  iM = (e) => e.tooltip.settings.defaultIndex,
  aM = Y([Aj, nM, rM, iM], Tj),
  oM = Y([aM, Vj], Ej),
  sM = Y([tM, oM], nj),
  cM = Y([aM], (e) => {
    if (e) return e.dataKey;
  }),
  lM = Y([Aj, nM, rM, iM], Oj),
  uM = Y([aM, Y([Mv, Nv, X, Xv, tM, iM, lM, kj], Dj)], (e, t) =>
    e != null && e.coordinate ? e.coordinate : t,
  ),
  dM = Y([aM], (e) => e.active),
  fM = Y([Y([lM, oM, jD, RO, sM, kj, nM], Lj)], (e) => {
    if (e != null) {
      var t = e.map((e) => e.payload).filter((e) => e != null);
      return Array.from(new Set(t));
    }
  });
function pM(e, t) {
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
function mM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? pM(Object(n), !0).forEach(function (t) {
          hM(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : pM(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function hM(e, t, n) {
  return (
    (t = gM(t)) in e
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
function gM(e) {
  var t = _M(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function _M(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var vM = () => J(LO),
  yM = () => {
    var e = vM(),
      t = J(tM),
      n = J(eM);
    return Ev(mM(mM({}, e), {}, { scale: n }), t);
  },
  bM = () => J(uO),
  xM = (e, t) => t,
  SM = (e, t, n) => n,
  CM = (e, t, n, r) => r,
  wM = Y(tM, (e) => (0, jm.default)(e, (e) => e.coordinate)),
  TM = Y([Aj, xM, SM, CM], Tj),
  EM = Y([TM, Vj], Ej),
  DM = (e, t, n) => {
    if (t != null) {
      var r = Aj(e);
      return t === `axis`
        ? n === `hover`
          ? r.axisInteraction.hover.dataKey
          : r.axisInteraction.click.dataKey
        : n === `hover`
          ? r.itemInteraction.hover.dataKey
          : r.itemInteraction.click.dataKey;
    }
  },
  OM = Y([Aj, xM, SM, CM], Oj),
  kM = Y([Mv, Nv, X, Xv, tM, CM, OM, kj], Dj),
  AM = Y([TM, kM], (e, t) => e.coordinate ?? t),
  jM = Y(tM, EM, nj),
  MM = Y([OM, EM, jD, RO, jM, kj, xM], Lj),
  NM = Y([TM], (e) => ({ isActive: e.active, activeIndex: e.index })),
  PM = (e, t, n, r, i, a, o, s) => {
    if (e && t && r && i && a) {
      var c = kv(e.chartX, e.chartY, t, n, s);
      if (c) {
        var l = cv(jv(c, t), o, a, r, i),
          u = Av(t, a, l, c);
        return { activeIndex: String(l), activeCoordinate: u };
      }
    }
  };
function FM() {
  return (
    (FM = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    FM.apply(null, arguments)
  );
}
function IM(e, t) {
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
function LM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? IM(Object(n), !0).forEach(function (t) {
          RM(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : IM(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function RM(e, t, n) {
  return (
    (t = zM(t)) in e
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
function zM(e) {
  var t = BM(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function BM(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function VM(e) {
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
  if (l === `ScatterChart`) ((p = u), (m = Mb));
  else if (l === `BarChart`) ((p = Nb(o, u, i, a)), (m = Lx));
  else if (o === `radial`) {
    var { cx: h, cy: g, radius: _, startAngle: v, endAngle: y } = Rx(u);
    ((p = {
      cx: h,
      cy: g,
      startAngle: v,
      endAngle: y,
      innerRadius: _,
      outerRadius: _,
    }),
      (m = Gx));
  } else ((p = { points: Kx(o, u, i) }), (m = xb));
  var b = typeof s == `object` && `className` in s ? s.className : void 0,
    x = LM(
      LM(LM(LM({ stroke: `#ccc`, pointerEvents: `none` }, i), p), sd(s)),
      {},
      {
        payload: d,
        payloadIndex: f,
        className: W(`recharts-tooltip-cursor`, b),
      },
    );
  return (0, R.isValidElement)(s)
    ? (0, R.cloneElement)(s, x)
    : (0, R.createElement)(m, x);
}
function HM(e) {
  var t = yM(),
    n = ky(),
    r = Ny(),
    i = bM();
  return R.createElement(
    VM,
    FM({}, e, {
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
var UM = (0, R.createContext)(null),
  WM = () => (0, R.useContext)(UM),
  GM = e(
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
  KM = new GM(),
  qM = `recharts.syncEvent.tooltip`,
  JM = `recharts.syncEvent.brush`;
function YM(e, t) {
  if (t) {
    var n = Number.parseInt(t, 10);
    if (!$f(n)) return e?.[n];
  }
}
var XM = Wg({
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
  ZM = XM.reducer,
  { createEventEmitter: QM } = XM.actions;
function $M(e) {
  return e.tooltip.syncInteraction;
}
var eN = Wg({
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
    setChartData: tN,
    setDataStartEndIndexes: nN,
    setComputedData: rN,
  } = eN.actions,
  iN = eN.reducer,
  aN = [`x`, `y`];
function oN(e, t) {
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
function sN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? oN(Object(n), !0).forEach(function (t) {
          cN(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : oN(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function cN(e, t, n) {
  return (
    (t = lN(t)) in e
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
function lN(e) {
  var t = uN(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function uN(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function dN(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = fN(e, t);
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
function fN(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var pN = () => {};
function mN() {
  var e = J(dO),
    t = J(pO),
    n = q(),
    r = J(fO),
    i = J(tM),
    a = Ny(),
    o = Dy(),
    s = J((e) => e.rootProps.className);
  (0, R.useEffect)(() => {
    if (e == null) return pN;
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
              m = dN(d, aN),
              { x: h, y: g, width: _, height: v } = c.payload.sourceViewBox,
              y = sN(
                sN({}, m),
                {},
                {
                  x: o.x + (_ ? (f - h) / _ : 0) * o.width,
                  y: o.y + (v ? (p - g) / v : 0) * o.height,
                },
              );
            n(
              sN(
                sN({}, c),
                {},
                { payload: sN(sN({}, c.payload), {}, { coordinate: y }) },
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
              hj({
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
              hj({
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
      KM.on(qM, s),
      () => {
        KM.off(qM, s);
      }
    );
  }, [s, n, t, e, r, i, a, o]);
}
function hN() {
  var e = J(dO),
    t = J(pO),
    n = q();
  (0, R.useEffect)(() => {
    if (e == null) return pN;
    var r = (r, i, a) => {
      t !== a && e === r && n(nN(i));
    };
    return (
      KM.on(JM, r),
      () => {
        KM.off(JM, r);
      }
    );
  }, [n, t, e]);
}
function gN() {
  var e = q();
  ((0, R.useEffect)(() => {
    e(QM());
  }, [e]),
    mN(),
    hN());
}
function _N(e, t, n, r, i, a) {
  var o = J((n) => DM(n, e, t)),
    s = J(pO),
    c = J(dO),
    l = J(fO),
    u = J($M)?.active,
    d = Dy();
  (0, R.useEffect)(() => {
    if (!u && c != null && s != null) {
      var e = hj({
        active: a,
        coordinate: n,
        dataKey: o,
        index: i,
        label: typeof r == `number` ? String(r) : r,
        sourceViewBox: d,
      });
      KM.emit(qM, c, e, s);
    }
  }, [u, n, o, i, r, s, c, l, a, d]);
}
function vN(e, t) {
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
function yN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? vN(Object(n), !0).forEach(function (t) {
          bN(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : vN(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function bN(e, t, n) {
  return (
    (t = xN(t)) in e
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
function xN(e) {
  var t = SN(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function SN(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function CN(e) {
  return e.dataKey;
}
function wN(e, t) {
  return R.isValidElement(e)
    ? R.cloneElement(e, t)
    : typeof e == `function`
      ? R.createElement(e, t)
      : R.createElement(Jy, t);
}
var TN = [],
  EN = {
    allowEscapeViewBox: { x: !1, y: !1 },
    animationDuration: 400,
    animationEasing: `ease`,
    axisId: 0,
    contentStyle: {},
    cursor: !0,
    filterNull: !0,
    isAnimationActive: !sb.isSsr,
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
function DN(e) {
  var t = zb(e, EN),
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
  (0, R.useEffect)(() => {
    x(cj({ shared: g, trigger: _, axisId: b, active: n, defaultIndex: S }));
  }, [x, g, _, b, n, S]);
  var C = Dy(),
    w = cb(),
    T = tj(g),
    { activeIndex: E, isActive: D } = J((e) => NM(e, T, _, S)),
    O = J((e) => MM(e, T, _, S)),
    k = J((e) => jM(e, T, _, S)),
    A = J((e) => AM(e, T, _, S)),
    ee = O,
    te = WM(),
    j = n ?? D,
    [ne, re] = Im([ee, j]),
    ie = T === `axis` ? k : void 0;
  _N(T, _, A, ie, E, j);
  var ae = y ?? te;
  if (ae == null) return null;
  var oe = ee ?? TN;
  (j || (oe = TN),
    s &&
      oe.length &&
      (oe = nm(
        ee.filter((e) => e.value != null && (e.hide !== !0 || t.includeHidden)),
        u,
        CN,
      )));
  var se = oe.length > 0,
    ce = R.createElement(
      ob,
      {
        allowEscapeViewBox: r,
        animationDuration: i,
        animationEasing: a,
        isAnimationActive: c,
        active: j,
        coordinate: A,
        hasPayload: se,
        offset: l,
        position: d,
        reverseDirection: f,
        useTranslate3d: p,
        viewBox: C,
        wrapperStyle: m,
        lastBoundingBox: ne,
        innerRef: re,
        hasPortalFromProps: !!y,
      },
      wN(
        o,
        yN(
          yN({}, t),
          {},
          {
            payload: oe,
            label: ie,
            active: j,
            coordinate: A,
            accessibilityLayer: w,
          },
        ),
      ),
    );
  return R.createElement(
    R.Fragment,
    null,
    (0, uo.createPortal)(ce, ae),
    j &&
      R.createElement(HM, {
        cursor: h,
        tooltipEventType: T,
        coordinate: A,
        payload: ee,
        index: E,
      }),
  );
}
var ON = (e) => null;
ON.displayName = `Cell`;
function kN(e, t, n) {
  return (
    (t = AN(t)) in e
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
function AN(e) {
  var t = jN(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function jN(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var MN = class {
  constructor(e) {
    (kN(this, `cache`, new Map()), (this.maxSize = e));
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
function NN(e, t) {
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
function PN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? NN(Object(n), !0).forEach(function (t) {
          FN(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : NN(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function FN(e, t, n) {
  return (
    (t = IN(t)) in e
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
function IN(e) {
  var t = LN(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function LN(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var RN = PN({}, { cacheSize: 2e3, enableCache: !0 }),
  zN = new MN(RN.cacheSize),
  BN = {
    position: `absolute`,
    top: `-20000px`,
    left: 0,
    padding: 0,
    margin: 0,
    border: `none`,
    whiteSpace: `pre`,
  },
  VN = `recharts_measurement_span`;
function HN(e, t) {
  return `${e}|${t.fontSize || ``}|${t.fontFamily || ``}|${t.fontWeight || ``}|${t.fontStyle || ``}|${t.letterSpacing || ``}|${t.textTransform || ``}`;
}
var UN = (e, t) => {
    try {
      var n = document.getElementById(VN);
      (n ||
        ((n = document.createElement(`span`)),
        n.setAttribute(`id`, VN),
        n.setAttribute(`aria-hidden`, `true`),
        document.body.appendChild(n)),
        Object.assign(n.style, BN, t),
        (n.textContent = `${e}`));
      var r = n.getBoundingClientRect();
      return { width: r.width, height: r.height };
    } catch {
      return { width: 0, height: 0 };
    }
  },
  WN = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (e == null || sb.isSsr) return { width: 0, height: 0 };
    var n = RN.measureText || UN;
    if (!RN.enableCache) return n(e, t);
    var r = HN(e, t),
      i = zN.get(r);
    if (i) return i;
    var a = n(e, t);
    return (zN.set(r, a), a);
  },
  GN = (e) => {
    var t = PN(PN({}, RN), e);
    (t.cacheSize !== RN.cacheSize && (zN = new MN(t.cacheSize)), (RN = t));
  },
  KN = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  qN = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  JN = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  YN = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  XN = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 16,
    in: 96,
    Q: 96 / 101.6,
    px: 1,
  },
  ZN = Object.keys(XN),
  QN = `NaN`;
function $N(e, t) {
  return e * XN[t];
}
var eP = class e {
  static parse(t) {
    var [, n, r] = YN.exec(t) ?? [];
    return new e(parseFloat(n), r ?? ``);
  }
  constructor(e, t) {
    ((this.num = e),
      (this.unit = t),
      (this.num = e),
      (this.unit = t),
      $f(e) && (this.unit = ``),
      t !== `` && !JN.test(t) && ((this.num = NaN), (this.unit = ``)),
      ZN.includes(t) && ((this.num = $N(e, t)), (this.unit = `px`)));
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
    return $f(this.num);
  }
};
function tP(e) {
  if (e.includes(QN)) return QN;
  for (var t = e; t.includes(`*`) || t.includes(`/`);) {
    var [, n, r, i] = KN.exec(t) ?? [],
      a = eP.parse(n ?? ``),
      o = eP.parse(i ?? ``),
      s = r === `*` ? a.multiply(o) : a.divide(o);
    if (s.isNaN()) return QN;
    t = t.replace(KN, s.toString());
  }
  for (; t.includes(`+`) || /.-\d+(?:\.\d+)?/.test(t);) {
    var [, c, l, u] = qN.exec(t) ?? [],
      d = eP.parse(c ?? ``),
      f = eP.parse(u ?? ``),
      p = l === `+` ? d.add(f) : d.subtract(f);
    if (p.isNaN()) return QN;
    t = t.replace(qN, p.toString());
  }
  return t;
}
var nP = /\(([^()]*)\)/;
function rP(e) {
  for (var t = e, n; (n = nP.exec(t)) != null;) {
    var [, r] = n;
    t = t.replace(nP, tP(r));
  }
  return t;
}
function iP(e) {
  var t = e.replace(/\s+/g, ``);
  return ((t = rP(t)), (t = tP(t)), t);
}
function aP(e) {
  try {
    return iP(e);
  } catch {
    return QN;
  }
}
function oP(e) {
  var t = aP(e.slice(5, -1));
  return t === QN ? `` : t;
}
var sP = [
    `x`,
    `y`,
    `lineHeight`,
    `capHeight`,
    `scaleToFit`,
    `textAnchor`,
    `verticalAnchor`,
    `fill`,
  ],
  cP = [`dx`, `dy`, `angle`, `className`, `breakAll`];
function lP() {
  return (
    (lP = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    lP.apply(null, arguments)
  );
}
function uP(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = dP(e, t);
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
function dP(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var fP = /[ \f\n\r\t\v\u2028\u2029]+/,
  pP = (e) => {
    var { children: t, breakAll: n, style: r } = e;
    try {
      var i = [];
      return (
        cp(t) || (i = n ? t.toString().split(``) : t.toString().split(fP)),
        {
          wordsWithComputedWidth: i.map((e) => ({
            word: e,
            width: WN(e, r).width,
          })),
          spaceWidth: n ? 0 : WN(`\xA0`, r).width,
        }
      );
    } catch {
      return null;
    }
  },
  mP = (e, t, n, r, i) => {
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
          var t = pP({
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
  hP = (e) => [{ words: cp(e) ? [] : e.toString().split(fP) }],
  gP = (e) => {
    var {
      width: t,
      scaleToFit: n,
      children: r,
      style: i,
      breakAll: a,
      maxLines: o,
    } = e;
    if ((t || n) && !sb.isSsr) {
      var s,
        c,
        l = pP({ breakAll: a, children: r, style: i });
      if (l) {
        var { wordsWithComputedWidth: u, spaceWidth: d } = l;
        ((s = u), (c = d));
      } else return hP(r);
      return mP(
        { breakAll: a, children: r, maxLines: o, style: i },
        s,
        c,
        t,
        n,
      );
    }
    return hP(r);
  },
  _P = `#808080`,
  vP = (0, R.forwardRef)((e, t) => {
    var {
        x: n = 0,
        y: r = 0,
        lineHeight: i = `1em`,
        capHeight: a = `0.71em`,
        scaleToFit: o = !1,
        textAnchor: s = `start`,
        verticalAnchor: c = `end`,
        fill: l = _P,
      } = e,
      u = uP(e, sP),
      d = (0, R.useMemo)(
        () =>
          gP({
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
      _ = uP(u, cP);
    if (!tp(n) || !tp(r) || d.length === 0) return null;
    var v = n + (K(f) ? f : 0),
      y = r + (K(p) ? p : 0),
      b;
    switch (c) {
      case `start`:
        b = oP(`calc(${a})`);
        break;
      case `middle`:
        b = oP(`calc(${(d.length - 1) / 2} * -${i} + (${a} / 2))`);
        break;
      default:
        b = oP(`calc(${d.length - 1} * -${i})`);
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
      R.createElement(
        `text`,
        lP({}, cd(_), {
          ref: t,
          x: v,
          y,
          className: W(`recharts-text`, h),
          textAnchor: s,
          fill: l.includes(`url`) ? _P : l,
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
vP.displayName = `Text`;
var yP = [`labelRef`];
function bP(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = xP(e, t);
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
function xP(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function SP(e, t) {
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
function CP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? SP(Object(n), !0).forEach(function (t) {
          wP(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : SP(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function wP(e, t, n) {
  return (
    (t = TP(t)) in e
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
function TP(e) {
  var t = EP(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function EP(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function DP() {
  return (
    (DP = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    DP.apply(null, arguments)
  );
}
var OP = (0, R.createContext)(null),
  kP = (e) => {
    var { x: t, y: n, width: r, height: i, children: a } = e,
      o = (0, R.useMemo)(
        () => ({ x: t, y: n, width: r, height: i }),
        [t, n, r, i],
      );
    return R.createElement(OP.Provider, { value: o }, a);
  },
  AP = () => {
    var e = (0, R.useContext)(OP),
      t = Dy();
    return e || t;
  },
  jP = (0, R.createContext)(null),
  MP = () => {
    var e = (0, R.useContext)(jP),
      t = J(jO);
    return e || t;
  },
  NP = (e) => {
    var { value: t, formatter: n } = e,
      r = cp(e.children) ? t : e.children;
    return typeof n == `function` ? n(r) : r;
  },
  PP = (e) => e != null && typeof e == `function`,
  FP = (e, t) => Qf(t - e) * Math.min(Math.abs(t - e), 360),
  IP = (e, t, n, r, i) => {
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
      h = FP(d, f),
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
    var y = q_(s, c, m, _),
      b = q_(s, c, m, _ + (v ? 1 : -1) * 359),
      x = `M${y.x},${y.y}
    A${m},${m},0,1,${+!v},
    ${b.x},${b.y}`,
      S = cp(e.id) ? rp(`recharts-radial-line-`) : e.id;
    return R.createElement(
      `text`,
      DP({}, r, {
        dominantBaseline: `central`,
        className: W(`recharts-radial-bar-label`, o),
      }),
      R.createElement(`defs`, null, R.createElement(`path`, { id: S, d: x })),
      R.createElement(`textPath`, { xlinkHref: `#${S}` }, n),
    );
  },
  LP = (e, t, n) => {
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
      var { x: u, y: d } = q_(r, i, o + t, l);
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
    var { x: f, y: p } = q_(r, i, (a + o) / 2, l);
    return { x: f, y: p, textAnchor: `middle`, verticalAnchor: `middle` };
  },
  RP = (e) => `cx` in e && K(e.cx),
  zP = (e, t) => {
    var { parentViewBox: n, offset: r, position: i } = e,
      a;
    n != null && !RP(n) && (a = n);
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
      return CP(
        CP(
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
      return CP(
        CP(
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
      return CP(
        CP({}, v),
        a ? { width: Math.max(v.x - a.x, 0), height: l } : {},
      );
    }
    if (i === `right`) {
      var y = {
        x: o + c + h,
        y: s + l / 2,
        textAnchor: _,
        verticalAnchor: `middle`,
      };
      return CP(
        CP({}, y),
        a ? { width: Math.max(a.x + a.width - y.x, 0), height: l } : {},
      );
    }
    var b = a ? { width: c, height: l } : {};
    return i === `insideLeft`
      ? CP(
          { x: o + h, y: s + l / 2, textAnchor: _, verticalAnchor: `middle` },
          b,
        )
      : i === `insideRight`
        ? CP(
            {
              x: o + c - h,
              y: s + l / 2,
              textAnchor: g,
              verticalAnchor: `middle`,
            },
            b,
          )
        : i === `insideTop`
          ? CP(
              {
                x: o + c / 2,
                y: s + d,
                textAnchor: `middle`,
                verticalAnchor: p,
              },
              b,
            )
          : i === `insideBottom`
            ? CP(
                {
                  x: o + c / 2,
                  y: s + l - d,
                  textAnchor: `middle`,
                  verticalAnchor: f,
                },
                b,
              )
            : i === `insideTopLeft`
              ? CP({ x: o + h, y: s + d, textAnchor: _, verticalAnchor: p }, b)
              : i === `insideTopRight`
                ? CP(
                    {
                      x: o + c - h,
                      y: s + d,
                      textAnchor: g,
                      verticalAnchor: p,
                    },
                    b,
                  )
                : i === `insideBottomLeft`
                  ? CP(
                      {
                        x: o + h,
                        y: s + l - d,
                        textAnchor: _,
                        verticalAnchor: f,
                      },
                      b,
                    )
                  : i === `insideBottomRight`
                    ? CP(
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
                        (K(i.x) || ep(i.x)) &&
                        (K(i.y) || ep(i.y))
                      ? CP(
                          {
                            x: o + ip(i.x, c),
                            y: s + ip(i.y, l),
                            textAnchor: `end`,
                            verticalAnchor: `end`,
                          },
                          b,
                        )
                      : CP(
                          {
                            x: o + c / 2,
                            y: s + l / 2,
                            textAnchor: `middle`,
                            verticalAnchor: `middle`,
                          },
                          b,
                        );
  },
  BP = { offset: 5 };
function VP(e) {
  var t = zb(e, BP),
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
    u = MP(),
    d = AP(),
    f = n || (r === `center` ? d : (u ?? d));
  if (
    !f ||
    (cp(i) && cp(a) && !(0, R.isValidElement)(o) && typeof o != `function`)
  )
    return null;
  var p = CP(CP({}, t), {}, { viewBox: f });
  if ((0, R.isValidElement)(o)) {
    var { labelRef: m } = p,
      h = bP(p, yP);
    return (0, R.cloneElement)(o, h);
  }
  var g;
  if (typeof o == `function`) {
    if (((g = (0, R.createElement)(o, p)), (0, R.isValidElement)(g))) return g;
  } else g = NP(t);
  var _ = RP(f),
    v = cd(t);
  if (_ && (r === `insideStart` || r === `insideEnd` || r === `end`))
    return IP(t, r, g, v, f);
  var y = _ ? LP(f, t.offset, t.position) : zP(t, f);
  return R.createElement(
    vP,
    DP({ ref: l, className: W(`recharts-label`, s) }, v, y, { breakAll: c }),
    g,
  );
}
VP.displayName = `Label`;
var HP = (e, t, n) => {
  if (!e) return null;
  var r = { viewBox: t, labelRef: n };
  return e === !0
    ? R.createElement(VP, DP({ key: `label-implicit` }, r))
    : tp(e)
      ? R.createElement(VP, DP({ key: `label-implicit`, value: e }, r))
      : (0, R.isValidElement)(e)
        ? e.type === VP
          ? (0, R.cloneElement)(e, CP({ key: `label-implicit` }, r))
          : R.createElement(VP, DP({ key: `label-implicit`, content: e }, r))
        : PP(e)
          ? R.createElement(VP, DP({ key: `label-implicit`, content: e }, r))
          : e && typeof e == `object`
            ? R.createElement(VP, DP({}, e, { key: `label-implicit` }, r))
            : null;
};
function UP(e) {
  var { label: t, labelRef: n } = e;
  return HP(t, AP(), n) || null;
}
var WP = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e[e.length - 1];
    }
    e.last = t;
  }),
  GP = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Array.isArray(e) ? e : Array.from(e);
    }
    e.toArray = t;
  }),
  KP = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = WP(),
      n = GP(),
      r = jp();
    function i(e) {
      if (r.isArrayLike(e)) return t.last(n.toArray(e));
    }
    e.last = i;
  }),
  qP = n((e, t) => {
    t.exports = KP().last;
  }),
  JP = e(qP()),
  YP = [`valueAccessor`],
  XP = [`dataKey`, `clockWise`, `id`, `textBreakAll`];
function ZP() {
  return (
    (ZP = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ZP.apply(null, arguments)
  );
}
function QP(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = $P(e, t);
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
function $P(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var eF = (e) => (Array.isArray(e.value) ? (0, JP.default)(e.value) : e.value),
  tF = (0, R.createContext)(void 0),
  nF = tF.Provider,
  rF = (0, R.createContext)(void 0),
  iF = rF.Provider;
function aF() {
  return (0, R.useContext)(tF);
}
function oF() {
  return (0, R.useContext)(rF);
}
function sF(e) {
  var { valueAccessor: t = eF } = e,
    n = QP(e, YP),
    { dataKey: r, clockWise: i, id: a, textBreakAll: o } = n,
    s = QP(n, XP),
    c = aF(),
    l = oF(),
    u = c || l;
  return !u || !u.length
    ? null
    : R.createElement(
        yd,
        { className: `recharts-label-list` },
        u.map((e, i) => {
          var c = cp(r) ? t(e, i) : sv(e && e.payload, r),
            l = cp(a) ? {} : { id: `${a}-${i}` };
          return R.createElement(
            VP,
            ZP({ key: `label-${i}` }, cd(e), s, l, {
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
sF.displayName = `LabelList`;
function cF(e) {
  var { label: t } = e;
  return t
    ? t === !0
      ? R.createElement(sF, { key: `labelList-implicit` })
      : R.isValidElement(t) || PP(t)
        ? R.createElement(sF, { key: `labelList-implicit`, content: t })
        : typeof t == `object`
          ? R.createElement(
              sF,
              ZP({ key: `labelList-implicit` }, t, { type: String(t.type) }),
            )
          : null
    : null;
}
var lF = Wg({
    name: `polarAxis`,
    initialState: { radiusAxis: {}, angleAxis: {} },
    reducers: {
      addRadiusAxis(e, t) {
        e.radiusAxis[t.payload.id] = Kh(t.payload);
      },
      removeRadiusAxis(e, t) {
        delete e.radiusAxis[t.payload.id];
      },
      addAngleAxis(e, t) {
        e.angleAxis[t.payload.id] = Kh(t.payload);
      },
      removeAngleAxis(e, t) {
        delete e.angleAxis[t.payload.id];
      },
    },
  }),
  {
    addRadiusAxis: uF,
    removeRadiusAxis: dF,
    addAngleAxis: fF,
    removeAngleAxis: pF,
  } = lF.actions,
  mF = lF.reducer,
  hF = n((e) => {
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
  gF = n((e, t) => {
    t.exports = hF();
  })(),
  _F = (e) =>
    typeof e == `string` ? e : e ? e.displayName || e.name || `Component` : ``,
  vF = null,
  yF = null,
  bF = (e) => {
    if (e === vF && Array.isArray(yF)) return yF;
    var t = [];
    return (
      R.Children.forEach(e, (e) => {
        cp(e) ||
          ((0, gF.isFragment)(e)
            ? (t = t.concat(bF(e.props.children)))
            : t.push(e));
      }),
      (yF = t),
      (vF = e),
      t
    );
  };
function xF(e, t) {
  var n = [],
    r = [];
  return (
    (r = Array.isArray(t) ? t.map((e) => _F(e)) : [_F(t)]),
    bF(e).forEach((e) => {
      var t =
        (0, Zf.default)(e, `type.displayName`) ||
        (0, Zf.default)(e, `type.name`);
      r.indexOf(t) !== -1 && n.push(e);
    }),
    n
  );
}
var SF = n((e) => {
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
  CF = n((e, t) => {
    t.exports = SF().isPlainObject;
  });
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
function kF() {
  return (
    (kF = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    kF.apply(null, arguments)
  );
}
var AF = (e, t, n, r, i) => {
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
  jF = {
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
  MF = (e) => {
    var t = zb(e, jF),
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
      b = wx(e, `trapezoid-`);
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
    var x = W(`recharts-trapezoid`, s);
    if (!d)
      return R.createElement(
        `g`,
        null,
        R.createElement(
          `path`,
          kF({}, cd(t), { className: x, d: AF(n, r, i, a, o) }),
        ),
      );
    var S = h.current,
      C = g.current,
      w = _.current,
      T = v.current,
      E = y.current,
      D = `0px ${p === -1 ? 1 : p}px`,
      O = `${p}px 0px`,
      k = Jb([`strokeDasharray`], l, c);
    return R.createElement(
      Cx,
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
        var s = op(S, i, e),
          c = op(C, a, e),
          l = op(w, o, e),
          u = op(T, n, e),
          d = op(E, r, e);
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
          kF({}, cd(t), {
            className: x,
            d: AF(u, d, s, c, l),
            ref: f,
            style: TF(TF({}, p), t.style),
          }),
        );
      },
    );
  },
  NF = e(CF()),
  PF = [
    `option`,
    `shapeType`,
    `propTransformer`,
    `activeClassName`,
    `isActive`,
  ];
function FF(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = IF(e, t);
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
function IF(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function LF(e, t) {
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
function RF(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? LF(Object(n), !0).forEach(function (t) {
          zF(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : LF(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function zF(e, t, n) {
  return (
    (t = BF(t)) in e
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
function BF(e) {
  var t = VF(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function VF(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function HF(e, t) {
  return RF(RF({}, t), e);
}
function UF(e, t) {
  return e === `symbols`;
}
function WF(e) {
  var { shapeType: t, elementProps: n } = e;
  switch (t) {
    case `rectangle`:
      return R.createElement(Lx, n);
    case `trapezoid`:
      return R.createElement(MF, n);
    case `sector`:
      return R.createElement(Gx, n);
    case `symbols`:
      if (UF(t, n)) return R.createElement(wp, n);
      break;
    default:
      return null;
  }
}
function GF(e) {
  return (0, R.isValidElement)(e) ? e.props : e;
}
function KF(e) {
  var {
      option: t,
      shapeType: n,
      propTransformer: r = HF,
      activeClassName: i = `recharts-active-shape`,
      isActive: a,
    } = e,
    o = FF(e, PF),
    s;
  if ((0, R.isValidElement)(t))
    s = (0, R.cloneElement)(t, RF(RF({}, o), GF(t)));
  else if (typeof t == `function`) s = t(o);
  else if ((0, NF.default)(t) && typeof t != `boolean`) {
    var c = r(t, o);
    s = R.createElement(WF, { shapeType: n, elementProps: c });
  } else {
    var l = o;
    s = R.createElement(WF, { shapeType: n, elementProps: l });
  }
  return a ? R.createElement(yd, { className: i }, s) : s;
}
var qF = (e, t) => {
    var n = q();
    return (r, i) => (a) => {
      (e?.(r, i, a),
        n(
          lj({
            activeIndex: String(i),
            activeDataKey: t,
            activeCoordinate: r.tooltipPosition,
          }),
        ));
    };
  },
  JF = (e) => {
    var t = q();
    return (n, r) => (i) => {
      (e?.(n, r, i), t(uj()));
    };
  },
  YF = (e, t) => {
    var n = q();
    return (r, i) => (a) => {
      (e?.(r, i, a),
        n(
          fj({
            activeIndex: String(i),
            activeDataKey: t,
            activeCoordinate: r.tooltipPosition,
          }),
        ));
    };
  };
function XF(e) {
  var { fn: t, args: n } = e,
    r = q(),
    i = ey();
  return (
    (0, R.useLayoutEffect)(() => {
      if (!i) {
        var e = t(n);
        return (
          r(oj(e)),
          () => {
            r(sj(e));
          }
        );
      }
    }, [t, n, r, i]),
    null
  );
}
var ZF = () => {};
function QF(e) {
  var { legendPayload: t } = e,
    n = q(),
    r = ey();
  return (
    (0, R.useLayoutEffect)(
      () =>
        r
          ? ZF
          : (n(Ry(t)),
            () => {
              n(zy(t));
            }),
      [n, r, t],
    ),
    null
  );
}
function $F(e) {
  var { legendPayload: t } = e,
    n = q(),
    r = J(X);
  return (
    (0, R.useLayoutEffect)(
      () =>
        r !== `centric` && r !== `radial`
          ? ZF
          : (n(Ry(t)),
            () => {
              n(zy(t));
            }),
      [n, r, t],
    ),
    null
  );
}
var eI =
  R.useId ??
  (() => {
    var [e] = R.useState(() => rp(`uid-`));
    return e;
  });
function tI(e, t) {
  var n = eI();
  return t || (e ? `${e}-${n}` : n);
}
var nI = (0, R.createContext)(void 0),
  rI = (e) => {
    var { id: t, type: n, children: r } = e,
      i = tI(`recharts-${n}`, t);
    return R.createElement(nI.Provider, { value: i }, r(i));
  },
  iI = Wg({
    name: `graphicalItems`,
    initialState: { cartesianItems: [], polarItems: [] },
    reducers: {
      addCartesianGraphicalItem: {
        reducer(e, t) {
          e.cartesianItems.push(Kh(t.payload));
        },
        prepare: bg(),
      },
      replaceCartesianGraphicalItem: {
        reducer(e, t) {
          var { prev: n, next: r } = t.payload,
            i = Vh(e).cartesianItems.indexOf(Kh(n));
          i > -1 && (e.cartesianItems[i] = Kh(r));
        },
        prepare: bg(),
      },
      removeCartesianGraphicalItem: {
        reducer(e, t) {
          var n = Vh(e).cartesianItems.indexOf(Kh(t.payload));
          n > -1 && e.cartesianItems.splice(n, 1);
        },
        prepare: bg(),
      },
      addPolarGraphicalItem: {
        reducer(e, t) {
          e.polarItems.push(Kh(t.payload));
        },
        prepare: bg(),
      },
      removePolarGraphicalItem: {
        reducer(e, t) {
          var n = Vh(e).polarItems.indexOf(Kh(t.payload));
          n > -1 && e.polarItems.splice(n, 1);
        },
        prepare: bg(),
      },
    },
  }),
  {
    addCartesianGraphicalItem: aI,
    replaceCartesianGraphicalItem: oI,
    removeCartesianGraphicalItem: sI,
    addPolarGraphicalItem: cI,
    removePolarGraphicalItem: lI,
  } = iI.actions,
  uI = iI.reducer;
function dI(e) {
  var t = q(),
    n = (0, R.useRef)(null);
  return (
    (0, R.useLayoutEffect)(() => {
      (n.current === null
        ? t(aI(e))
        : n.current !== e && t(oI({ prev: n.current, next: e })),
        (n.current = e));
    }, [t, e]),
    (0, R.useLayoutEffect)(
      () => () => {
        n.current &&= (t(sI(n.current)), null);
      },
      [t],
    ),
    null
  );
}
function fI(e) {
  var t = q();
  return (
    (0, R.useLayoutEffect)(
      () => (
        t(cI(e)),
        () => {
          t(lI(e));
        }
      ),
      [t, e],
    ),
    null
  );
}
function pI(e, t) {
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
function mI(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? pI(Object(n), !0).forEach(function (t) {
          hI(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : pI(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function hI(e, t, n) {
  return (
    (t = gI(t)) in e
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
function gI(e) {
  var t = _I(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function _I(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var vI = Wg({
    name: `cartesianAxis`,
    initialState: { xAxis: {}, yAxis: {}, zAxis: {} },
    reducers: {
      addXAxis: {
        reducer(e, t) {
          e.xAxis[t.payload.id] = Kh(t.payload);
        },
        prepare: bg(),
      },
      removeXAxis: {
        reducer(e, t) {
          delete e.xAxis[t.payload.id];
        },
        prepare: bg(),
      },
      addYAxis: {
        reducer(e, t) {
          e.yAxis[t.payload.id] = Kh(t.payload);
        },
        prepare: bg(),
      },
      removeYAxis: {
        reducer(e, t) {
          delete e.yAxis[t.payload.id];
        },
        prepare: bg(),
      },
      addZAxis: {
        reducer(e, t) {
          e.zAxis[t.payload.id] = Kh(t.payload);
        },
        prepare: bg(),
      },
      removeZAxis: {
        reducer(e, t) {
          delete e.zAxis[t.payload.id];
        },
        prepare: bg(),
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
          e.yAxis[n] = mI(
            mI({}, e.yAxis[n]),
            {},
            { width: r, widthHistory: o },
          );
        }
      },
    },
  }),
  {
    addXAxis: yI,
    removeXAxis: bI,
    addYAxis: xI,
    removeYAxis: SI,
    addZAxis: CI,
    removeZAxis: wI,
    updateYAxisWidth: TI,
  } = vI.actions,
  EI = vI.reducer,
  DI = Y(
    [
      Y([Xv], (e) => {
        if (e)
          return { top: e.top, bottom: e.bottom, left: e.left, right: e.right };
      }),
      Mv,
      Nv,
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
  OI = () => J(DI),
  kI = () => J(fM),
  AI = [`x`, `y`];
function jI() {
  return (
    (jI = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    jI.apply(null, arguments)
  );
}
function MI(e, t) {
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
function NI(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? MI(Object(n), !0).forEach(function (t) {
          PI(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : MI(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function PI(e, t, n) {
  return (
    (t = FI(t)) in e
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
function FI(e) {
  var t = II(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function II(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function LI(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = RI(e, t);
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
function RI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function zI(e, t) {
  var { x: n, y: r } = e,
    i = LI(e, AI),
    a = `${n}`,
    o = parseInt(a, 10),
    s = `${r}`,
    c = parseInt(s, 10),
    l = `${t.height || i.height}`,
    u = parseInt(l, 10),
    d = `${t.width || i.width}`,
    f = parseInt(d, 10);
  return NI(
    NI(NI(NI(NI({}, t), i), o ? { x: o } : {}), c ? { y: c } : {}),
    {},
    { height: u, width: f, name: t.name, radius: t.radius },
  );
}
function BI(e) {
  return R.createElement(
    KF,
    jI(
      {
        shapeType: `rectangle`,
        propTransformer: zI,
        activeClassName: `recharts-active-bar`,
      },
      e,
    ),
  );
}
var VI = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (n, r) => {
      if (K(e)) return e;
      var i = K(n) || cp(n);
      return i ? e(n, r) : (!i && o(!1), t);
    };
  },
  HI = Wg({
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
  { addErrorBar: UI, replaceErrorBar: WI, removeErrorBar: GI } = HI.actions,
  KI = HI.reducer,
  qI = [`children`];
function JI(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = YI(e, t);
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
function YI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var XI = (0, R.createContext)({
  data: [],
  xAxisId: `xAxis-0`,
  yAxisId: `yAxis-0`,
  dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }),
  errorBarOffset: 0,
});
function ZI(e) {
  var { children: t } = e,
    n = JI(e, qI);
  return R.createElement(XI.Provider, { value: n }, t);
}
function QI(e, t) {
  var n = J((t) => ZO(t, e)),
    r = J((e) => ek(e, t)),
    i = n?.allowDataOverflow ?? YO.allowDataOverflow,
    a = r?.allowDataOverflow ?? QO.allowDataOverflow;
  return { needClip: i || a, needClipX: i, needClipY: a };
}
function $I(e) {
  var { xAxisId: t, yAxisId: n, clipPathId: r } = e,
    i = OI(),
    { needClipX: a, needClipY: o, needClip: s } = QI(t, n);
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
var eL = [`onMouseEnter`, `onMouseLeave`, `onClick`],
  tL = [`value`, `background`, `tooltipPosition`],
  nL = [`id`],
  rL = [`onMouseEnter`, `onClick`, `onMouseLeave`];
function iL() {
  return (
    (iL = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    iL.apply(null, arguments)
  );
}
function aL(e, t) {
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
function oL(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? aL(Object(n), !0).forEach(function (t) {
          sL(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : aL(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function sL(e, t, n) {
  return (
    (t = cL(t)) in e
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
function cL(e) {
  var t = lL(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function lL(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function uL(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = dL(e, t);
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
function dL(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var fL = (e) => {
  var { dataKey: t, name: n, fill: r, legendType: i, hide: a } = e;
  return [
    { inactive: a, dataKey: t, type: i, color: r, value: Ov(n, t), payload: e },
  ];
};
function pL(e) {
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
      name: Ov(a, t),
      hide: o,
      type: e.tooltipType,
      color: e.fill,
      unit: s,
    },
  };
}
function mL(e) {
  var t = J(oM),
    { data: n, dataKey: r, background: i, allOtherBarProps: a } = e,
    { onMouseEnter: o, onMouseLeave: s, onClick: c } = a,
    l = uL(a, eL),
    u = qF(o, r),
    d = JF(s),
    f = YF(c, r);
  if (!i || n == null) return null;
  var p = sd(i);
  return R.createElement(
    R.Fragment,
    null,
    n.map((e, n) => {
      var { value: a, background: o, tooltipPosition: s } = e,
        c = uL(e, tL);
      if (!o) return null;
      var m = u(e, n),
        h = d(e, n),
        g = f(e, n),
        _ = oL(
          oL(
            oL(
              oL(
                oL({ option: i, isActive: String(n) === t }, c),
                {},
                { fill: `#eee` },
                o,
              ),
              p,
            ),
            Dp(l, e, n),
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
      return R.createElement(BI, iL({ key: `background-bar-${n}` }, _));
    }),
  );
}
function hL(e) {
  var { showLabels: t, children: n, rects: r } = e,
    i = r?.map((e) => {
      var t = { x: e.x, y: e.y, width: e.width, height: e.height };
      return oL(
        oL({}, t),
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
  return R.createElement(nF, { value: t ? i : void 0 }, n);
}
function gL(e) {
  var {
      shape: t,
      activeBar: n,
      baseProps: r,
      entry: i,
      index: a,
      dataKey: o,
    } = e,
    s = J(oM),
    c = J(cM),
    l = n && String(a) === s && (c == null || o === c),
    u = l ? n : t;
  return R.createElement(
    BI,
    iL({}, r, { name: String(r.name) }, i, {
      isActive: l,
      option: u,
      index: a,
      dataKey: o,
    }),
  );
}
function _L(e) {
  var { shape: t, baseProps: n, entry: r, index: i, dataKey: a } = e;
  return R.createElement(
    BI,
    iL({}, n, { name: String(n.name) }, r, {
      isActive: !1,
      option: t,
      index: i,
      dataKey: a,
    }),
  );
}
function vL(e) {
  var { data: t, props: n } = e,
    r = od(n),
    { id: i } = r,
    a = uL(r, nL),
    { shape: o, dataKey: s, activeBar: c } = n,
    { onMouseEnter: l, onClick: u, onMouseLeave: d } = n,
    f = uL(n, rL),
    p = qF(l, s),
    m = JF(d),
    h = YF(u, s);
  return t
    ? R.createElement(
        R.Fragment,
        null,
        t.map((e, t) =>
          R.createElement(
            yd,
            iL(
              {
                key: `rectangle-${e?.x}-${e?.y}-${e?.value}-${t}`,
                className: `recharts-bar-rectangle`,
              },
              Dp(f, e, t),
              {
                onMouseEnter: p(e, t),
                onMouseLeave: m(e, t),
                onClick: h(e, t),
              },
            ),
            c
              ? R.createElement(gL, {
                  shape: o,
                  activeBar: c,
                  baseProps: a,
                  entry: e,
                  index: t,
                  dataKey: s,
                })
              : R.createElement(_L, {
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
function yL(e) {
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
    f = wx(t, `recharts-bar-`),
    [p, m] = (0, R.useState)(!1),
    h = !p,
    g = (0, R.useCallback)(() => {
      (typeof l == `function` && l(), m(!1));
    }, [l]),
    _ = (0, R.useCallback)(() => {
      (typeof u == `function` && u(), m(!0));
    }, [u]);
  return R.createElement(
    hL,
    { showLabels: h, rects: r },
    R.createElement(
      Cx,
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
                  return oL(
                    oL({}, t),
                    {},
                    {
                      x: op(r.x, t.x, e),
                      y: op(r.y, t.y, e),
                      width: op(r.width, t.width, e),
                      height: op(r.height, t.height, e),
                    },
                  );
                if (i === `horizontal`) {
                  var a = op(0, t.height, e);
                  return oL(
                    oL({}, t),
                    {},
                    { y: t.y + t.height - a, height: a },
                  );
                }
                var o = op(0, t.width, e);
                return oL(oL({}, t), {}, { width: o });
              });
        return (
          e > 0 && (n.current = a ?? null),
          a == null
            ? null
            : R.createElement(
                yd,
                null,
                R.createElement(vL, { props: t, data: a }),
              )
        );
      },
    ),
    R.createElement(cF, { label: t.label }),
    t.children,
  );
}
function bL(e) {
  var t = (0, R.useRef)(null);
  return R.createElement(yL, { previousRectanglesRef: t, props: e });
}
var xL = 0,
  SL = (e, t) => {
    var n = Array.isArray(e.value) ? e.value[1] : e.value;
    return { x: e.x, y: e.y, value: n, errorVal: sv(e, t) };
  },
  CL = class extends R.PureComponent {
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
      return R.createElement(
        yd,
        { className: l, id: c },
        o &&
          R.createElement(
            `defs`,
            null,
            R.createElement($I, { clipPathId: u, xAxisId: i, yAxisId: a }),
          ),
        R.createElement(
          yd,
          {
            className: `recharts-bar-rectangles`,
            clipPath: o ? `url(#clipPath-${u})` : void 0,
          },
          R.createElement(mL, {
            data: t,
            dataKey: n,
            background: s,
            allOtherBarProps: this.props,
          }),
          R.createElement(bL, this.props),
        ),
      );
    }
  },
  wL = {
    activeBar: !1,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: `ease`,
    hide: !1,
    isAnimationActive: !sb.isSsr,
    legendType: `rect`,
    minPointSize: xL,
    xAxisId: 0,
    yAxisId: 0,
  };
function TL(e) {
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
    { needClip: d } = QI(t, n),
    f = Ny(),
    p = ey(),
    m = xF(e.children, ON),
    h = J((r) => qL(r, t, n, p, e.id, m));
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
      ZI,
      {
        xAxisId: t,
        yAxisId: n,
        data: h,
        dataPointFormatter: SL,
        errorBarOffset: g,
      },
      R.createElement(
        CL,
        iL({}, e, {
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
function EL(e) {
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
    _ = bv({ numericAxis: h });
  return d
    .map((e, d) => {
      var h, v, y, b, x, S;
      u
        ? (h = hv(u[d], g))
        : ((h = sv(e, n)), Array.isArray(h) || (h = [_, h]));
      var C = VI(r, xL)(h[1], d);
      if (t === `horizontal`) {
        var [w, T] = [s.scale(h[0]), s.scale(h[1])];
        ((v = yv({
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
          ((x = $f(E) ? 0 : E),
          (S = { x: v, y: f.top, width: b, height: f.height }),
          Math.abs(C) > 0 && Math.abs(x) < Math.abs(C))
        ) {
          var D = Qf(x || C) * (Math.abs(C) - Math.abs(x));
          ((y -= D), (x += D));
        }
      } else {
        var [O, k] = [o.scale(h[0]), o.scale(h[1])];
        if (
          ((v = O),
          (y = yv({
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
          var A = Qf(b || C) * (Math.abs(C) - Math.abs(b));
          b += A;
        }
      }
      return v == null || y == null || b == null || x == null
        ? null
        : oL(
            oL({}, e),
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
function DL(e) {
  var t = zb(e, wL),
    n = ey();
  return R.createElement(rI, { id: t.id, type: `bar` }, (e) =>
    R.createElement(
      R.Fragment,
      null,
      R.createElement(QF, { legendPayload: fL(t) }),
      R.createElement(XF, { fn: pL, args: t }),
      R.createElement(dI, {
        type: `bar`,
        id: e,
        data: void 0,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        dataKey: t.dataKey,
        stackId: vv(t.stackId),
        hide: t.hide,
        barSize: t.barSize,
        minPointSize: t.minPointSize,
        maxBarSize: t.maxBarSize,
        isPanorama: n,
      }),
      R.createElement(TL, iL({}, t, { id: e })),
    ),
  );
}
var OL = R.memo(DL);
OL.displayName = `Bar`;
function kL(e, t) {
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
function AL(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? kL(Object(n), !0).forEach(function (t) {
          jL(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : kL(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function jL(e, t, n) {
  return (
    (t = ML(t)) in e
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
function ML(e) {
  var t = NL(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function NL(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var PL = (e, t) => t,
  FL = (e, t, n) => n,
  IL = (e, t, n, r) => r,
  LL = Y([ck, (e, t, n, r, i) => i], (e, t) =>
    e.filter((e) => e.type === `bar`).find((e) => e.id === t),
  ),
  RL = Y([LL], (e) => e?.maxBarSize),
  zL = (e, t, n, r, i, a) => a,
  BL = (e, t, n) => {
    var r = n ?? e;
    if (!cp(r)) return ip(r, t, 0);
  },
  VL = Y([X, ck, PL, FL, IL], (e, t, n, r, i) =>
    t
      .filter((t) => (e === `horizontal` ? t.xAxisId === n : t.yAxisId === r))
      .filter((e) => e.isPanorama === i)
      .filter((e) => e.hide === !1)
      .filter((e) => e.type === `bar`),
  ),
  HL = (e, t, n, r) =>
    X(e) === `horizontal` ? Ok(e, `yAxis`, n, r) : Ok(e, `xAxis`, t, r),
  UL = Y(
    [
      VL,
      cO,
      (e, t, n) =>
        X(e) === `horizontal` ? zA(e, `xAxis`, t) : zA(e, `yAxis`, n),
    ],
    (e, t, n) => {
      var r = {},
        i = e.filter(BO),
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
            barSize: BL(t, n, i[0].barSize),
          };
        }),
        c = a.map((e) => ({
          stackId: void 0,
          dataKeys: [e.dataKey].filter((e) => e != null),
          barSize: BL(t, n, e.barSize),
        }));
      return [...s, ...c];
    },
  ),
  WL = (e, t, n, r, i) => {
    var a = LL(e, t, n, r, i);
    if (a != null) {
      var o = X(e),
        s = aO(e),
        { maxBarSize: c } = a,
        l = cp(c) ? s : c,
        u,
        d;
      return (
        o === `horizontal`
          ? ((u = YA(e, `xAxis`, t, r)), (d = JA(e, `xAxis`, t, r)))
          : ((u = YA(e, `yAxis`, n, r)), (d = JA(e, `yAxis`, n, r))),
        Ev(u, d, !0) ?? l ?? 0
      );
    }
  },
  GL = (e, t, n, r) => {
    var i = X(e),
      a,
      o;
    return (
      i === `horizontal`
        ? ((a = YA(e, `xAxis`, t, r)), (o = JA(e, `xAxis`, t, r)))
        : ((a = YA(e, `yAxis`, n, r)), (o = JA(e, `yAxis`, n, r))),
      Ev(a, o)
    );
  };
function KL(e, t, n, r, i) {
  var a = r.length;
  if (!(a < 1)) {
    var o = ip(e, n, 0, !0),
      s,
      c = [];
    if (my(r[0].barSize)) {
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
      var p = ip(t, n, 0, !0);
      n - 2 * p - (a - 1) * o <= 0 && (o = 0);
      var m = (n - 2 * p - (a - 1) * o) / a;
      m > 1 && (m >>= 0);
      var h = my(i) ? Math.min(m, i) : m;
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
var qL = Y(
    [
      Xv,
      Qv,
      (e, t, n, r) => YA(e, `xAxis`, t, r),
      (e, t, n, r) => YA(e, `yAxis`, n, r),
      (e, t, n, r) => JA(e, `xAxis`, t, r),
      (e, t, n, r) => JA(e, `yAxis`, n, r),
      Y(
        [
          Y([UL, aO, oO, sO, WL, GL, RL], (e, t, n, r, i, a, o) => {
            var s = cp(o) ? t : o,
              c = KL(n, r, i === a ? a : i, e, s);
            return (
              i !== a &&
                c != null &&
                (c = c.map((e) =>
                  AL(
                    AL({}, e),
                    {},
                    {
                      position: AL(
                        AL({}, e.position),
                        {},
                        { offset: e.position.offset - i / 2 },
                      ),
                    },
                  ),
                )),
              c
            );
          }),
          LL,
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
      ND,
      GL,
      Y([HL, LL], (e, t) => {
        var n = PO(t);
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
      LL,
      zL,
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
          return EL({
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
  JL = (e) => {
    var { chartData: t } = e,
      n = q(),
      r = ey();
    return (
      (0, R.useEffect)(
        () =>
          r
            ? () => {}
            : (n(tN(t)),
              () => {
                n(tN(void 0));
              }),
        [t, n, r],
      ),
      null
    );
  },
  YL = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
  XL = Wg({
    name: `brush`,
    initialState: YL,
    reducers: {
      setBrushSettings(e, t) {
        return t.payload == null ? YL : t.payload;
      },
    },
  }),
  { setBrushSettings: ZL } = XL.actions,
  QL = XL.reducer;
function $L(e, t, n) {
  return (
    (t = eR(t)) in e
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
function eR(e) {
  var t = tR(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function tR(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
$L(
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
function nR(e) {
  return ((e % 180) + 180) % 180;
}
var rR = function (e) {
    var { width: t, height: n } = e,
      r =
        (nR(
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        ) *
          Math.PI) /
        180,
      i = Math.atan(n / t),
      a = r > i && r < Math.PI - i ? n / Math.sin(r) : t / Math.cos(r);
    return Math.abs(a);
  },
  iR = Wg({
    name: `referenceElements`,
    initialState: { dots: [], areas: [], lines: [] },
    reducers: {
      addDot: (e, t) => {
        e.dots.push(t.payload);
      },
      removeDot: (e, t) => {
        var n = Vh(e).dots.findIndex((e) => e === t.payload);
        n !== -1 && e.dots.splice(n, 1);
      },
      addArea: (e, t) => {
        e.areas.push(t.payload);
      },
      removeArea: (e, t) => {
        var n = Vh(e).areas.findIndex((e) => e === t.payload);
        n !== -1 && e.areas.splice(n, 1);
      },
      addLine: (e, t) => {
        e.lines.push(t.payload);
      },
      removeLine: (e, t) => {
        var n = Vh(e).lines.findIndex((e) => e === t.payload);
        n !== -1 && e.lines.splice(n, 1);
      },
    },
  }),
  {
    addDot: aR,
    removeDot: oR,
    addArea: sR,
    removeArea: cR,
    addLine: lR,
    removeLine: uR,
  } = iR.actions,
  dR = iR.reducer,
  fR = (0, R.createContext)(void 0),
  pR = (e) => {
    var { children: t } = e,
      [n] = (0, R.useState)(`${rp(`recharts`)}-clip`),
      r = OI();
    if (r == null) return null;
    var { x: i, y: a, width: o, height: s } = r;
    return R.createElement(
      fR.Provider,
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
function mR(e, t) {
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
function hR(e, t, n) {
  if (t < 1) return [];
  if (t === 1 && n === void 0) return e;
  for (var r = [], i = 0; i < e.length; i += t)
    if (n === void 0 || n(e[i]) === !0) r.push(e[i]);
    else return;
  return r;
}
function gR(e, t, n) {
  return rR({ width: e.width + t.width, height: e.height + t.height }, n);
}
function _R(e, t, n) {
  var r = n === `width`,
    { x: i, y: a, width: o, height: s } = e;
  return t === 1
    ? { start: r ? i : a, end: r ? i + o : a + s }
    : { start: r ? i + o : a + s, end: r ? i : a };
}
function vR(e, t, n, r, i) {
  if (e * t < e * r || e * t > e * i) return !1;
  var a = n();
  return e * (t - (e * a) / 2 - r) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
}
function yR(e, t) {
  return hR(e, t + 1);
}
function bR(e, t, n, r, i) {
  for (
    var a = (r || []).slice(),
      { start: o, end: s } = t,
      c = 0,
      l = 1,
      u = o,
      d = function () {
        var t = r?.[c];
        if (t === void 0) return { v: hR(r, l) };
        var a = c,
          d,
          f = () => (d === void 0 && (d = n(t, a)), d),
          p = t.coordinate,
          m = c === 0 || vR(e, p, f, u, s);
        (m || ((c = 0), (u = o), (l += 1)),
          m && ((u = p + e * (f() / 2 + i)), (c += l)));
      },
      f;
    l <= a.length;
  )
    if (((f = d()), f)) return f.v;
  return [];
}
function xR(e, t) {
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
function SR(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? xR(Object(n), !0).forEach(function (t) {
          CR(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : xR(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function CR(e, t, n) {
  return (
    (t = wR(t)) in e
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
function wR(e) {
  var t = TR(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function TR(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function ER(e, t, n, r, i) {
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
          a[t] = r = SR(
            SR({}, r),
            {},
            { tickCoord: d > 0 ? r.coordinate - d * e : r.coordinate },
          );
        } else a[t] = r = SR(SR({}, r), {}, { tickCoord: r.coordinate });
        vR(e, r.tickCoord, u, s, c) &&
          ((c = r.tickCoord - e * (u() / 2 + i)),
          (a[t] = SR(SR({}, r), {}, { isShow: !0 })));
      },
      u = o - 1;
    u >= 0;
    u--
  )
    l(u);
  return a;
}
function DR(e, t, n, r, i, a) {
  var o = (r || []).slice(),
    s = o.length,
    { start: c, end: l } = t;
  if (a) {
    var u = r[s - 1],
      d = n(u, s - 1),
      f = e * (u.coordinate + (e * d) / 2 - l);
    ((o[s - 1] = u =
      SR(
        SR({}, u),
        {},
        { tickCoord: f > 0 ? u.coordinate - f * e : u.coordinate },
      )),
      vR(e, u.tickCoord, () => d, c, l) &&
        ((l = u.tickCoord - e * (d / 2 + i)),
        (o[s - 1] = SR(SR({}, u), {}, { isShow: !0 }))));
  }
  for (
    var p = a ? s - 1 : s,
      m = function (t) {
        var r = o[t],
          a,
          s = () => (a === void 0 && (a = n(r, t)), a);
        if (t === 0) {
          var u = e * (r.coordinate - (e * s()) / 2 - c);
          o[t] = r = SR(
            SR({}, r),
            {},
            { tickCoord: u < 0 ? r.coordinate - u * e : r.coordinate },
          );
        } else o[t] = r = SR(SR({}, r), {}, { tickCoord: r.coordinate });
        vR(e, r.tickCoord, s, c, l) &&
          ((c = r.tickCoord + e * (s() / 2 + i)),
          (o[t] = SR(SR({}, r), {}, { isShow: !0 })));
      },
      h = 0;
    h < p;
    h++
  )
    m(h);
  return o;
}
function OR(e, t, n) {
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
  if (K(c) || sb.isSsr) return yR(i, K(c) ? c : 0) ?? [];
  var f = [],
    p = s === `top` || s === `bottom` ? `width` : `height`,
    m =
      u && p === `width`
        ? WN(u, { fontSize: t, letterSpacing: n })
        : { width: 0, height: 0 },
    h = (e, r) => {
      var i = typeof l == `function` ? l(e.value, r) : e.value;
      return p === `width`
        ? gR(WN(i, { fontSize: t, letterSpacing: n }), m, d)
        : WN(i, { fontSize: t, letterSpacing: n })[p];
    },
    g = i.length >= 2 ? Qf(i[1].coordinate - i[0].coordinate) : 1,
    _ = _R(a, g, p);
  return c === `equidistantPreserveStart`
    ? bR(g, _, h, i, o)
    : ((f =
        c === `preserveStart` || c === `preserveStartEnd`
          ? DR(g, _, h, i, o, c === `preserveStartEnd`)
          : ER(g, _, h, i, o)),
      f.filter((e) => e.isShow));
}
var kR = (e) => {
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
  AR = [`axisLine`, `width`, `height`, `className`, `hide`, `ticks`],
  jR = [`viewBox`],
  MR = [`viewBox`];
function NR(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = PR(e, t);
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
function PR(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function FR() {
  return (
    (FR = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    FR.apply(null, arguments)
  );
}
function IR(e, t) {
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
function LR(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? IR(Object(n), !0).forEach(function (t) {
          RR(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : IR(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function RR(e, t, n) {
  return (
    (t = zR(t)) in e
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
function zR(e) {
  var t = BR(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function BR(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var VR = {
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
function HR(e) {
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
  var l = LR(LR(LR({}, c), od(s)), {}, { fill: `none` });
  if (a === `top` || a === `bottom`) {
    var u = +((a === `top` && !o) || (a === `bottom` && o));
    l = LR(LR({}, l), {}, { x1: t, y1: n + u * i, x2: t + r, y2: n + u * i });
  } else {
    var d = +((a === `left` && !o) || (a === `right` && o));
    l = LR(LR({}, l), {}, { x1: t + d * r, y1: n, x2: t + d * r, y2: n + i });
  }
  return R.createElement(
    `line`,
    FR({}, l, {
      className: W(
        `recharts-cartesian-axis-line`,
        (0, Zf.default)(s, `className`),
      ),
    }),
  );
}
function UR(e, t, n, r, i, a, o, s, c) {
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
function WR(e, t) {
  switch (e) {
    case `left`:
      return t ? `start` : `end`;
    case `right`:
      return t ? `end` : `start`;
    default:
      return `middle`;
  }
}
function GR(e, t) {
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
function KR(e) {
  var { option: t, tickProps: n, value: r } = e,
    i,
    a = W(n.className, `recharts-cartesian-axis-tick-value`);
  if (R.isValidElement(t))
    i = R.cloneElement(t, LR(LR({}, n), {}, { className: a }));
  else if (typeof t == `function`) i = t(LR(LR({}, n), {}, { className: a }));
  else {
    var o = `recharts-cartesian-axis-tick-value`;
    (typeof t != `boolean` && (o = W(o, t?.className)),
      (i = R.createElement(vP, FR({}, n, { className: o }), r)));
  }
  return i;
}
function qR(e) {
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
    x = OR(LR(LR({}, y), {}, { ticks: t }), _, v),
    S = WR(l, u),
    C = GR(l, u),
    w = od(y),
    T = sd(n),
    E = {};
  typeof r == `object` && (E = r);
  var D = LR(LR({}, w), {}, { fill: `none` }, E),
    O = x.map((e, t) => {
      var { line: _, tick: v } = UR(e, d, f, p, m, l, h, u, g),
        y = LR(
          LR(
            LR(
              LR({ textAnchor: S, verticalAnchor: C }, w),
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
        yd,
        FR(
          {
            className: `recharts-cartesian-axis-tick`,
            key: `tick-${e.value}-${e.coordinate}-${e.tickCoord}`,
          },
          Dp(b, e, t),
        ),
        r &&
          R.createElement(
            `line`,
            FR({}, D, _, {
              className: W(
                `recharts-cartesian-axis-tick-line`,
                (0, Zf.default)(r, `className`),
              ),
            }),
          ),
        n &&
          R.createElement(KR, {
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
var JR = (0, R.forwardRef)((e, t) => {
    var {
        axisLine: n,
        width: r,
        height: i,
        className: a,
        hide: o,
        ticks: s,
      } = e,
      c = NR(e, AR),
      [l, u] = (0, R.useState)(``),
      [d, f] = (0, R.useState)(``),
      p = (0, R.useRef)(null);
    (0, R.useImperativeHandle)(t, () => ({
      getCalculatedWidth: () =>
        kR({
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
          yd,
          { className: W(`recharts-cartesian-axis`, a), ref: m },
          R.createElement(HR, {
            x: e.x,
            y: e.y,
            width: r,
            height: i,
            orientation: e.orientation,
            mirror: e.mirror,
            axisLine: n,
            otherSvgProps: od(e),
          }),
          R.createElement(qR, {
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
            kP,
            { x: e.x, y: e.y, width: e.width, height: e.height },
            R.createElement(UP, { label: e.label, labelRef: e.labelRef }),
            e.children,
          ),
        );
  }),
  YR = R.memo(JR, (e, t) => {
    var { viewBox: n } = e,
      r = NR(e, jR),
      { viewBox: i } = t,
      a = NR(t, MR);
    return mR(n, i) && mR(r, a);
  }),
  XR = R.forwardRef((e, t) => {
    var n = zb(e, VR);
    return R.createElement(YR, FR({}, n, { ref: t }));
  });
XR.displayName = `CartesianAxis`;
var ZR = [`x1`, `y1`, `x2`, `y2`, `key`],
  QR = [`offset`],
  $R = [`xAxisId`, `yAxisId`],
  ez = [`xAxisId`, `yAxisId`];
function tz(e, t) {
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
function nz(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? tz(Object(n), !0).forEach(function (t) {
          rz(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : tz(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function rz(e, t, n) {
  return (
    (t = iz(t)) in e
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
function iz(e) {
  var t = az(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function az(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function oz() {
  return (
    (oz = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oz.apply(null, arguments)
  );
}
function sz(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = cz(e, t);
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
function cz(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var lz = (e) => {
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
function uz(e, t) {
  var n;
  if (R.isValidElement(e)) n = R.cloneElement(e, t);
  else if (typeof e == `function`) n = e(t);
  else {
    var { x1: r, y1: i, x2: a, y2: o, key: s } = t,
      c = od(sz(t, ZR)),
      { offset: l } = c,
      u = sz(c, QR);
    n = R.createElement(
      `line`,
      oz({}, u, { x1: r, y1: i, x2: a, y2: o, fill: `none`, key: s }),
    );
  }
  return n;
}
function dz(e) {
  var { x: t, width: n, horizontal: r = !0, horizontalPoints: i } = e;
  if (!r || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e,
    s = sz(e, $R),
    c = i.map((e, i) =>
      uz(
        r,
        nz(
          nz({}, s),
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
function fz(e) {
  var { y: t, height: n, vertical: r = !0, verticalPoints: i } = e;
  if (!r || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e,
    s = sz(e, ez),
    c = i.map((e, i) =>
      uz(
        r,
        nz(
          nz({}, s),
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
function pz(e) {
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
function mz(e) {
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
var hz = (e, t) => {
    var { xAxis: n, width: r, height: i, offset: a } = e;
    return dv(
      OR(
        nz(
          nz(nz({}, VR), n),
          {},
          { ticks: fv(n, !0), viewBox: { x: 0, y: 0, width: r, height: i } },
        ),
      ),
      a.left,
      a.left + a.width,
      t,
    );
  },
  gz = (e, t) => {
    var { yAxis: n, width: r, height: i, offset: a } = e;
    return dv(
      OR(
        nz(
          nz(nz({}, VR), n),
          {},
          { ticks: fv(n, !0), viewBox: { x: 0, y: 0, width: r, height: i } },
        ),
      ),
      a.top,
      a.top + a.height,
      t,
    );
  },
  _z = {
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
function vz(e) {
  var t = Ay(),
    n = jy(),
    r = ky(),
    i = nz(
      nz({}, zb(e, _z)),
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
    m = ey(),
    h = J((e) => WA(e, `xAxis`, a, m)),
    g = J((e) => WA(e, `yAxis`, o, m));
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
  var _ = i.verticalCoordinatesGenerator || hz,
    v = i.horizontalCoordinatesGenerator || gz,
    { horizontalPoints: y, verticalPoints: b } = i;
  if ((!y || !y.length) && typeof v == `function`) {
    var x = f && f.length,
      S = v(
        {
          yAxis: g ? nz(nz({}, g), {}, { ticks: x ? f : g.ticks }) : void 0,
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
          xAxis: h ? nz(nz({}, h), {}, { ticks: C ? p : h.ticks }) : void 0,
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
    R.createElement(lz, {
      fill: i.fill,
      fillOpacity: i.fillOpacity,
      x: i.x,
      y: i.y,
      width: i.width,
      height: i.height,
      ry: i.ry,
    }),
    R.createElement(pz, oz({}, i, { horizontalPoints: y })),
    R.createElement(mz, oz({}, i, { verticalPoints: b })),
    R.createElement(
      dz,
      oz({}, i, { offset: r, horizontalPoints: y, xAxis: h, yAxis: g }),
    ),
    R.createElement(
      fz,
      oz({}, i, { offset: r, verticalPoints: b, xAxis: h, yAxis: g }),
    ),
  );
}
vz.displayName = `CartesianGrid`;
var yz = [`dangerouslySetInnerHTML`, `ticks`],
  bz = [`id`],
  xz = [`domain`],
  Sz = [`domain`];
function Cz() {
  return (
    (Cz = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cz.apply(null, arguments)
  );
}
function wz(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Tz(e, t);
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
function Tz(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Ez(e) {
  var t = q();
  return (
    (0, R.useLayoutEffect)(
      () => (
        t(yI(e)),
        () => {
          t(bI(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var Dz = (e) => {
    var { xAxisId: t, className: n } = e,
      r = J(Qv),
      i = ey(),
      a = `xAxis`,
      o = J((e) => CA(e, a, t, i)),
      s = J((e) => KA(e, a, t, i)),
      c = J((e) => jA(e, t)),
      l = J((e) => IA(e, t)),
      u = J((e) => XO(e, t));
    if (c == null || l == null || u == null) return null;
    var { dangerouslySetInnerHTML: d, ticks: f } = e,
      p = wz(e, yz),
      { id: m } = u,
      h = wz(u, bz);
    return R.createElement(
      XR,
      Cz({}, p, h, {
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
  Oz = {
    allowDataOverflow: YO.allowDataOverflow,
    allowDecimals: YO.allowDecimals,
    allowDuplicatedCategory: YO.allowDuplicatedCategory,
    height: YO.height,
    hide: !1,
    mirror: YO.mirror,
    orientation: YO.orientation,
    padding: YO.padding,
    reversed: YO.reversed,
    scale: YO.scale,
    tickCount: YO.tickCount,
    type: YO.type,
    xAxisId: 0,
  },
  kz = R.memo(
    (e) => {
      var t = zb(e, Oz);
      return R.createElement(
        R.Fragment,
        null,
        R.createElement(Ez, {
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
        R.createElement(Dz, t),
      );
    },
    (e, t) => {
      var { domain: n } = e,
        r = wz(e, xz),
        { domain: i } = t;
      return mR(r, wz(t, Sz))
        ? Array.isArray(n) &&
          n.length === 2 &&
          Array.isArray(i) &&
          i.length === 2
          ? n[0] === i[0] && n[1] === i[1]
          : mR({ domain: n }, { domain: i })
        : !1;
    },
  );
kz.displayName = `XAxis`;
var Az = [`dangerouslySetInnerHTML`, `ticks`],
  jz = [`id`],
  Mz = [`domain`],
  Nz = [`domain`];
function Pz() {
  return (
    (Pz = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Pz.apply(null, arguments)
  );
}
function Fz(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Iz(e, t);
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
function Iz(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Lz(e) {
  var t = q();
  return (
    (0, R.useLayoutEffect)(
      () => (
        t(xI(e)),
        () => {
          t(SI(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var Rz = (e) => {
    var { yAxisId: t, className: n, width: r, label: i } = e,
      a = (0, R.useRef)(null),
      o = (0, R.useRef)(null),
      s = J(Qv),
      c = ey(),
      l = q(),
      u = `yAxis`,
      d = J((e) => CA(e, u, t, c)),
      f = J((e) => RA(e, t)),
      p = J((e) => LA(e, t)),
      m = J((e) => KA(e, u, t, c)),
      h = J((e) => $O(e, t));
    if (
      ((0, R.useLayoutEffect)(() => {
        if (
          !(
            r !== `auto` ||
            !f ||
            PP(i) ||
            (0, R.isValidElement)(i) ||
            h == null
          )
        ) {
          var e = a.current;
          if (e) {
            var n = e.getCalculatedWidth();
            Math.round(f.width) !== Math.round(n) && l(TI({ id: t, width: n }));
          }
        }
      }, [m, f, l, i, t, r, h]),
      f == null || p == null || h == null)
    )
      return null;
    var { dangerouslySetInnerHTML: g, ticks: _ } = e,
      v = Fz(e, Az),
      { id: y } = h,
      b = Fz(h, jz);
    return R.createElement(
      XR,
      Pz({}, v, b, {
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
  zz = {
    allowDataOverflow: QO.allowDataOverflow,
    allowDecimals: QO.allowDecimals,
    allowDuplicatedCategory: QO.allowDuplicatedCategory,
    hide: !1,
    mirror: QO.mirror,
    orientation: QO.orientation,
    padding: QO.padding,
    reversed: QO.reversed,
    scale: QO.scale,
    tickCount: QO.tickCount,
    type: QO.type,
    width: QO.width,
    yAxisId: 0,
  },
  Bz = R.memo(
    (e) => {
      var t = zb(e, zz);
      return R.createElement(
        R.Fragment,
        null,
        R.createElement(Lz, {
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
        R.createElement(Rz, t),
      );
    },
    (e, t) => {
      var { domain: n } = e,
        r = Fz(e, Mz),
        { domain: i } = t;
      return mR(r, Fz(t, Nz))
        ? Array.isArray(n) &&
          n.length === 2 &&
          Array.isArray(i) &&
          i.length === 2
          ? n[0] === i[0] && n[1] === i[1]
          : mR({ domain: n }, { domain: i })
        : !1;
    },
  );
Bz.displayName = `YAxis`;
var Vz = n((e) => {
  var t = i();
  (t.useSyncExternalStore, t.useRef, t.useEffect, t.useMemo, t.useDebugValue);
});
n((e, t) => {
  t.exports = Vz();
})();
function Hz(e) {
  e();
}
function Uz() {
  let e = null,
    t = null;
  return {
    clear() {
      ((e = null), (t = null));
    },
    notify() {
      Hz(() => {
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
var Wz = { notify() {}, get: () => [] };
function Gz(e, t) {
  let n,
    r = Wz,
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
    (i++, n || ((n = t ? t.addNestedSub(c) : e.subscribe(c)), (r = Uz())));
  }
  function d() {
    (i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = Wz)));
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
var Kz =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0,
  qz = typeof navigator < `u` && navigator.product === `ReactNative`,
  Jz = Kz || qz ? R.useLayoutEffect : R.useEffect,
  Yz = Symbol.for(`react-redux-context`),
  Xz = typeof globalThis < `u` ? globalThis : {};
function Zz() {
  if (!R.createContext) return {};
  let e = (Xz[Yz] ??= new Map()),
    t = e.get(R.createContext);
  return (t || ((t = R.createContext(null)), e.set(R.createContext, t)), t);
}
var Qz = Zz();
function $z(e) {
  let { children: t, context: n, serverState: r, store: i } = e,
    a = R.useMemo(() => {
      let e = Gz(i);
      return {
        store: i,
        subscription: e,
        getServerState: r ? () => r : void 0,
      };
    }, [i, r]),
    o = R.useMemo(() => i.getState(), [i]);
  Jz(() => {
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
  let s = n || Qz;
  return R.createElement(s.Provider, { value: a }, t);
}
var eB = $z,
  tB = Y([(e, t) => t, X, jO, FO, $j, tM, wM, Xv], PM),
  nB = (e) => {
    var t = e.currentTarget.getBoundingClientRect(),
      n = t.width / e.currentTarget.offsetWidth,
      r = t.height / e.currentTarget.offsetHeight;
    return {
      chartX: Math.round((e.clientX - t.left) / n),
      chartY: Math.round((e.clientY - t.top) / r),
    };
  },
  rB = pg(`mouseClick`),
  iB = j_();
iB.startListening({
  actionCreator: rB,
  effect: (e, t) => {
    var n = e.payload,
      r = tB(t.getState(), nB(n));
    r?.activeIndex != null &&
      t.dispatch(
        mj({
          activeIndex: r.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: r.activeCoordinate,
        }),
      );
  },
});
var aB = pg(`mouseMove`),
  oB = j_();
oB.startListening({
  actionCreator: aB,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState(),
      i = ej(r, r.tooltip.settings.shared),
      a = tB(r, nB(n));
    i === `axis` &&
      (a?.activeIndex == null
        ? t.dispatch(dj())
        : t.dispatch(
            pj({
              activeIndex: a.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: a.activeCoordinate,
            }),
          ));
  },
});
function sB(e, t) {
  return t instanceof HTMLElement
    ? `HTMLElement <${t.tagName} class="${t.className}">`
    : t === window
      ? `global.window`
      : t;
}
var cB = {
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
  lB = Wg({
    name: `rootProps`,
    initialState: cB,
    reducers: {
      updateOptions: (e, t) => {
        ((e.accessibilityLayer = t.payload.accessibilityLayer),
          (e.barCategoryGap = t.payload.barCategoryGap),
          (e.barGap = t.payload.barGap ?? cB.barGap),
          (e.barSize = t.payload.barSize),
          (e.maxBarSize = t.payload.maxBarSize),
          (e.stackOffset = t.payload.stackOffset),
          (e.syncId = t.payload.syncId),
          (e.syncMethod = t.payload.syncMethod),
          (e.className = t.payload.className));
      },
    },
  }),
  uB = lB.reducer,
  { updateOptions: dB } = lB.actions,
  fB = Wg({
    name: `polarOptions`,
    initialState: null,
    reducers: { updatePolarOptions: (e, t) => t.payload },
  }),
  { updatePolarOptions: pB } = fB.actions,
  mB = fB.reducer,
  hB = pg(`keyDown`),
  gB = pg(`focus`),
  _B = j_();
(_B.startListening({
  actionCreator: hB,
  effect: (e, t) => {
    var n = t.getState();
    if (n.rootProps.accessibilityLayer !== !1) {
      var { keyboardInteraction: r } = n.tooltip,
        i = e.payload;
      if (i === `ArrowRight` || i === `ArrowLeft` || i === `Enter`) {
        var a = Number(Ej(r, Vj(n))),
          o = tM(n);
        if (i === `Enter`) {
          var s = kM(n, `axis`, `hover`, String(r.index));
          t.dispatch(
            gj({
              active: !r.active,
              activeIndex: r.index,
              activeDataKey: r.dataKey,
              activeCoordinate: s,
            }),
          );
        } else {
          var c = XA(n) === `left-to-right` ? 1 : -1,
            l = a + (i === `ArrowRight` ? 1 : -1) * c;
          if (!(o == null || l >= o.length || l < 0)) {
            var u = kM(n, `axis`, `hover`, String(l));
            t.dispatch(
              gj({
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
  _B.startListening({
    actionCreator: gB,
    effect: (e, t) => {
      var n = t.getState();
      if (n.rootProps.accessibilityLayer !== !1) {
        var { keyboardInteraction: r } = n.tooltip;
        if (!r.active && r.index == null) {
          var i = `0`,
            a = kM(n, `axis`, `hover`, String(i));
          t.dispatch(
            gj({
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
var vB = pg(`externalEvent`),
  yB = j_();
yB.startListening({
  actionCreator: vB,
  effect: (e, t) => {
    if (e.payload.handler != null) {
      var n = t.getState(),
        r = {
          activeCoordinate: uM(n),
          activeDataKey: cM(n),
          activeIndex: oM(n),
          activeLabel: sM(n),
          activeTooltipIndex: oM(n),
          isTooltipActive: dM(n),
        };
      e.payload.handler(r, e.payload.reactEvent);
    }
  },
});
var bB = Y(
    [Y([Aj], (e) => e.tooltipItemPayloads), kj, (e, t, n) => t, (e, t, n) => n],
    (e, t, n, r) => {
      var i = e.find((e) => e.settings.dataKey === r);
      if (i != null) {
        var { positions: a } = i;
        if (a != null) return t(a, n);
      }
    },
  ),
  xB = pg(`touchMove`),
  SB = j_();
SB.startListening({
  actionCreator: xB,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState(),
      i = ej(r, r.tooltip.settings.shared);
    if (i === `axis`) {
      var a = tB(
        r,
        nB({
          clientX: n.touches[0].clientX,
          clientY: n.touches[0].clientY,
          currentTarget: n.currentTarget,
        }),
      );
      a?.activeIndex != null &&
        t.dispatch(
          pj({
            activeIndex: a.activeIndex,
            activeDataKey: void 0,
            activeCoordinate: a.activeCoordinate,
          }),
        );
    } else if (i === `item`) {
      var o = n.touches[0],
        s = document.elementFromPoint(o.clientX, o.clientY);
      if (!s || !s.getAttribute) return;
      var c = s.getAttribute(Rv),
        l = s.getAttribute(`data-recharts-item-data-key`) ?? void 0,
        u = bB(t.getState(), c, l);
      t.dispatch(lj({ activeDataKey: l, activeIndex: c, activeCoordinate: u }));
    }
  },
});
var CB = Wm({
    brush: QL,
    cartesianAxis: EI,
    chartData: iN,
    errorBars: KI,
    graphicalItems: uI,
    layout: R_,
    legend: By,
    options: ZM,
    polarAxis: mF,
    polarOptions: mB,
    referenceElements: dR,
    rootProps: uB,
    tooltip: _j,
  }),
  wB = function (e) {
    var t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : `Chart`;
    return wg({
      reducer: CB,
      preloadedState: e,
      middleware: (e) =>
        e({ serializableCheck: !1 }).concat([
          iB.middleware,
          oB.middleware,
          _B.middleware,
          yB.middleware,
          SB.middleware,
        ]),
      enhancers: (e) => {
        var t = e;
        return (
          typeof e == `function` && (t = e()), t.concat(Sg({ type: `raf` }))
        );
      },
      devTools: sb.devToolsEnabled && {
        serialize: { replacer: sB },
        name: `recharts-${t}`,
      },
    });
  };
function TB(e) {
  var { preloadedState: t, children: n, reduxStoreName: r } = e,
    i = ey(),
    a = (0, R.useRef)(null);
  if (i) return n;
  a.current ??= wB(t, r);
  var o = am;
  return R.createElement(eB, { context: o, store: a.current }, n);
}
function EB(e) {
  var { layout: t, margin: n } = e,
    r = q(),
    i = ey();
  return (
    (0, R.useEffect)(() => {
      i || (r(F_(t)), r(P_(n)));
    }, [r, i, t, n]),
    null
  );
}
function DB(e) {
  var t = q();
  return (
    (0, R.useEffect)(() => {
      t(dB(e));
    }, [t, e]),
    null
  );
}
var OB = [`children`];
function kB(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = AB(e, t);
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
function AB(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function jB() {
  return (
    (jB = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    jB.apply(null, arguments)
  );
}
var MB = { width: `100%`, height: `100%`, display: `block` },
  NB = (0, R.forwardRef)((e, t) => {
    var n = Ay(),
      r = jy(),
      i = cb();
    if (!hy(n) || !hy(r)) return null;
    var { children: a, otherAttributes: o, title: s, desc: c } = e,
      l = typeof o.tabIndex == `number` ? o.tabIndex : i ? 0 : void 0,
      u = typeof o.role == `string` ? o.role : i ? `application` : void 0;
    return R.createElement(
      md,
      jB({}, o, {
        title: s,
        desc: c,
        role: u,
        tabIndex: l,
        width: n,
        height: r,
        style: MB,
        ref: t,
      }),
      a,
    );
  }),
  PB = (e) => {
    var { children: t } = e,
      n = J(ny);
    if (!n) return null;
    var { width: r, height: i, y: a, x: o } = n;
    return R.createElement(md, { width: r, height: i, x: o, y: a }, t);
  },
  FB = (0, R.forwardRef)((e, t) => {
    var { children: n } = e,
      r = kB(e, OB);
    return ey()
      ? R.createElement(PB, null, n)
      : R.createElement(NB, jB({ ref: t }, r), n);
  });
function IB() {
  var e = q(),
    [t, n] = (0, R.useState)(null),
    r = J(Pv);
  return (
    (0, R.useEffect)(() => {
      if (t != null) {
        var n = t.getBoundingClientRect().width / t.offsetWidth;
        my(n) && n !== r && e(L_(n));
      }
    }, [t, e, r]),
    n
  );
}
function LB(e, t) {
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
function RB(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? LB(Object(n), !0).forEach(function (t) {
          zB(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : LB(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function zB(e, t, n) {
  return (
    (t = BB(t)) in e
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
function BB(e) {
  var t = VB(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function VB(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function HB() {
  return (
    (HB = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    HB.apply(null, arguments)
  );
}
var UB = () => (gN(), null);
function WB(e) {
  if (typeof e == `number`) return e;
  if (typeof e == `string`) {
    var t = parseFloat(e);
    if (!Number.isNaN(t)) return t;
  }
  return 0;
}
var GB = (0, R.forwardRef)((e, t) => {
    var n = (0, R.useRef)(null),
      [r, i] = (0, R.useState)({
        containerWidth: WB(e.style?.width),
        containerHeight: WB(e.style?.height),
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
        R.createElement(Py, {
          width: r.containerWidth,
          height: r.containerHeight,
        }),
        R.createElement(`div`, HB({ ref: o }, e)),
      )
    );
  }),
  KB = (0, R.forwardRef)((e, t) => {
    var { width: n, height: r } = e,
      [i, a] = (0, R.useState)({
        containerWidth: WB(n),
        containerHeight: WB(r),
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
      R.createElement(Py, {
        width: i.containerWidth,
        height: i.containerHeight,
      }),
      R.createElement(`div`, HB({ ref: s }, e)),
    );
  }),
  qB = (0, R.forwardRef)((e, t) => {
    var { width: n, height: r } = e;
    return R.createElement(
      R.Fragment,
      null,
      R.createElement(Py, { width: n, height: r }),
      R.createElement(`div`, HB({ ref: t }, e)),
    );
  }),
  JB = (0, R.forwardRef)((e, t) => {
    var { width: n, height: r } = e;
    return ep(n) || ep(r)
      ? R.createElement(KB, HB({}, e, { ref: t }))
      : R.createElement(qB, HB({}, e, { ref: t }));
  });
function YB(e) {
  return e === !0 ? GB : JB;
}
var XB = (0, R.forwardRef)((e, t) => {
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
      x = q(),
      [S, C] = (0, R.useState)(null),
      [w, T] = (0, R.useState)(null),
      E = IB(),
      D = wy(),
      O = D?.width > 0 ? D.width : _,
      k = D?.height > 0 ? D.height : i,
      A = (0, R.useCallback)(
        (e) => {
          (E(e),
            typeof t == `function` && t(e),
            C(e),
            T(e),
            e != null && (b.current = e));
        },
        [E, t, C, T],
      ),
      ee = (0, R.useCallback)(
        (e) => {
          (x(rB(e)), x(vB({ handler: a, reactEvent: e })));
        },
        [x, a],
      ),
      te = (0, R.useCallback)(
        (e) => {
          (x(aB(e)), x(vB({ handler: l, reactEvent: e })));
        },
        [x, l],
      ),
      j = (0, R.useCallback)(
        (e) => {
          (x(dj()), x(vB({ handler: u, reactEvent: e })));
        },
        [x, u],
      ),
      ne = (0, R.useCallback)(
        (e) => {
          (x(aB(e)), x(vB({ handler: d, reactEvent: e })));
        },
        [x, d],
      ),
      re = (0, R.useCallback)(() => {
        x(gB());
      }, [x]),
      ie = (0, R.useCallback)(
        (e) => {
          x(hB(e.key));
        },
        [x],
      ),
      ae = (0, R.useCallback)(
        (e) => {
          x(vB({ handler: o, reactEvent: e }));
        },
        [x, o],
      ),
      oe = (0, R.useCallback)(
        (e) => {
          x(vB({ handler: s, reactEvent: e }));
        },
        [x, s],
      ),
      se = (0, R.useCallback)(
        (e) => {
          x(vB({ handler: c, reactEvent: e }));
        },
        [x, c],
      ),
      ce = (0, R.useCallback)(
        (e) => {
          x(vB({ handler: f, reactEvent: e }));
        },
        [x, f],
      ),
      le = (0, R.useCallback)(
        (e) => {
          x(vB({ handler: h, reactEvent: e }));
        },
        [x, h],
      ),
      ue = (0, R.useCallback)(
        (e) => {
          (y && x(xB(e)), x(vB({ handler: m, reactEvent: e })));
        },
        [x, y, m],
      ),
      de = (0, R.useCallback)(
        (e) => {
          x(vB({ handler: p, reactEvent: e }));
        },
        [x, p],
      ),
      fe = YB(v);
    return R.createElement(
      UM.Provider,
      { value: S },
      R.createElement(
        bd.Provider,
        { value: w },
        R.createElement(
          fe,
          {
            width: O ?? g?.width,
            height: k ?? g?.height,
            className: W(`recharts-wrapper`, r),
            style: RB(
              { position: `relative`, cursor: `default`, width: O, height: k },
              g,
            ),
            onClick: ee,
            onContextMenu: ae,
            onDoubleClick: oe,
            onFocus: re,
            onKeyDown: ie,
            onMouseDown: se,
            onMouseEnter: te,
            onMouseLeave: j,
            onMouseMove: ne,
            onMouseUp: ce,
            onTouchEnd: de,
            onTouchMove: ue,
            onTouchStart: le,
            ref: A,
          },
          R.createElement(UB, null),
          n,
        ),
      ),
    );
  }),
  ZB = [
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
function QB(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = $B(e, t);
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
function $B(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var eV = (0, R.forwardRef)((e, t) => {
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
    d = od(QB(e, ZB));
  return c
    ? R.createElement(
        R.Fragment,
        null,
        R.createElement(Py, { width: n, height: r }),
        R.createElement(FB, { otherAttributes: d, title: l, desc: u }, a),
      )
    : R.createElement(
        XB,
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
          FB,
          { otherAttributes: d, title: l, desc: u, ref: t },
          R.createElement(pR, null, a),
        ),
      );
});
function tV() {
  return (
    (tV = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    tV.apply(null, arguments)
  );
}
var nV = {
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
  rV = (0, R.forwardRef)(function (e, t) {
    var n = zb(e.categoricalChartProps, nV),
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
      TB,
      { preloadedState: { options: c }, reduxStoreName: s.id ?? r },
      R.createElement(JL, { chartData: s.data }),
      R.createElement(EB, { layout: n.layout, margin: n.margin }),
      R.createElement(DB, {
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
      R.createElement(eV, tV({}, n, { ref: t })),
    );
  }),
  iV = [`axis`, `item`],
  aV = (0, R.forwardRef)((e, t) =>
    R.createElement(rV, {
      chartName: `BarChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: iV,
      tooltipPayloadSearcher: YM,
      categoricalChartProps: e,
      ref: t,
    }),
  ),
  oV = `nK2pFw6yu3o-`,
  sV = `nzXI4r-KhTY-`,
  cV = `iKEtAveWi-8-`,
  lV = `ZXpki9wJyL0-`,
  uV = 5;
function dV({ active: e, payload: t }) {
  if (!e || !t?.length) return null;
  let n = t[0].payload;
  return (0, z.jsx)(`div`, {
    className: lV,
    children: `${M.Localize(`#GamePerformanceStats_FPS`, n.framerate ?? 0)}: ${n.percentage ?? 0}%`,
  });
}
function fV(e) {
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
          n.push({ framerate: t * uV, percentage: Math.round(e) });
        }),
        n.sort((e, t) => e.framerate - t.framerate)
      );
    }, [t]);
  return a?.length
    ? (0, z.jsxs)(`div`, {
        className: P(oV, n),
        children: [
          (0, z.jsx)(`div`, {
            className: sV,
            children: M.Localize(`#GamePerformanceStats_SessionLabel`),
          }),
          (0, z.jsx)(Ey, {
            width: `100%`,
            minWidth: r,
            minHeight: i,
            children: (0, z.jsxs)(aV, {
              accessibilityLayer: !1,
              margin: { top: 35, left: 0, right: 0, bottom: 25 },
              data: a,
              children: [
                (0, z.jsx)(vz, {
                  stroke: `#888`,
                  strokeWidth: `0.5`,
                  vertical: !1,
                }),
                (0, z.jsx)(kz, {
                  dataKey: `framerate`,
                  stroke: `white`,
                  label: {
                    value: M.Localize(`#GamePerformanceStats_Framerate`),
                    position: `bottom`,
                    fill: `#A9A9A9`,
                    fontSize: 14,
                  },
                }),
                (0, z.jsx)(Bz, {
                  stroke: `white`,
                  domain: [() => 0, (e) => Math.max(e, 100)],
                }),
                (0, z.jsx)(DN, {
                  content: dV,
                  cursor: !1,
                  isAnimationActive: !1,
                }),
                (0, z.jsx)(OL, {
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
        className: P(oV, n),
        children: (0, z.jsx)(`div`, {
          className: cV,
          children: M.Localize(
            `#GamePerformanceStats_StillGatheringData_NoDevice`,
          ),
        }),
      });
}
function pV(e) {
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
      (f = (0, z.jsx)(bV, {
        blogURL: t.steam_deck_blog_url,
        eHWCompatibiltyDisplay: 1,
      })),
      (p = (0, z.jsx)(bV, {
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
      l = (0, z.jsx)(AV, { category: t.resolved_category });
    return (
      c == 3
        ? ((e = M.Localize(
            `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
          )),
          (s = (0, z.jsx)(PV, {
            id: r,
            category: t.machine_resolved_category,
            appName: i,
          })),
          (l = (0, z.jsx)(AV, { category: t.machine_resolved_category })))
        : c == 2
          ? ((e = M.Localize(
              `#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI`,
            )),
            (s = (0, z.jsx)(NV, {
              id: r,
              category: t.steamos_resolved_category,
              appName: i,
            })),
            (l = (0, z.jsx)(jV, { category: t.steamos_resolved_category })),
            (a = p))
          : c == 4
            ? ((e = M.Localize(
                `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
              )),
              (s = (0, z.jsx)(FV, {
                id: r,
                category: t.frame_resolved_category,
                appName: i,
              })),
              (l = (0, z.jsx)(AV, { category: t.frame_resolved_category })))
            : ((e = M.Localize(
                `#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI`,
              )),
              (s = (0, z.jsx)(MV, {
                category: t.resolved_category,
                appName: i,
              })),
              (a = f)),
      (0, z.jsx)(mV, {
        children: (0, z.jsxs)(Fe, {
          autoFocus: o,
          focusableIfEmpty: o,
          noFocusRing: !0,
          className: wl,
          ...d,
          children: [
            (0, z.jsxs)(`div`, {
              id: n,
              className: xl,
              children: [
                (0, z.jsx)(`div`, { className: Sl, children: e }),
                (0, z.jsx)(`div`, { className: Cl, children: l }),
              ],
            }),
            s,
            a,
            (0, z.jsx)(TV, { appid: t.appid, appName: i }),
          ],
        }),
      })
    );
  }
  let m = Ai(t.resolved_category),
    h = Zi(t.steamos_resolved_category),
    g = Ai(t.machine_resolved_category),
    _ = Ai(t.frame_resolved_category || 0);
  if (!l) {
    let t = null;
    switch (c) {
      case 3:
        t = (0, z.jsx)(vV, { ...e });
        break;
      case 2:
      case 5:
        t = (0, z.jsx)(gV, { ...e, deckBlogContent: p });
        break;
      case 4:
        t = (0, z.jsx)(yV, { ...e });
        break;
      default:
        t = (0, z.jsx)(_V, { ...e, deckBlogContent: f });
    }
    return (0, z.jsx)(vr, { children: (0, z.jsx)(mV, { children: t }) });
  }
  let v = (e) =>
      window.sessionStorage.setItem(`steamdeckcompatibility`, `?tab=${e.key}`),
    y = [
      {
        name: (0, z.jsxs)(`div`, {
          className: Ql,
          children: [
            (0, z.jsx)(lt, { className: nu }),
            (0, z.jsx)(m, { className: $l }),
          ],
        }),
        key: `1`,
        contents: (0, z.jsx)(vr, {
          children: (0, z.jsx)(_V, { ...e, deckBlogContent: f }),
        }),
        onClick: v,
      },
      {
        name: (0, z.jsxs)(`div`, {
          className: Ql,
          children: [
            (0, z.jsx)(Ae, { className: eu }),
            (0, z.jsx)(g, { className: $l }),
          ],
        }),
        key: `3`,
        contents: (0, z.jsx)(vr, { children: (0, z.jsx)(vV, { ...e }) }),
        onClick: v,
      },
      {
        name: (0, z.jsxs)(`div`, {
          className: Ql,
          children: [`steamos`, (0, z.jsx)(h, { className: $l })],
        }),
        key: `2`,
        contents: (0, z.jsx)(vr, {
          children: (0, z.jsx)(gV, { ...e, deckBlogContent: p }),
        }),
        onClick: v,
      },
      {
        name: (0, z.jsxs)(`div`, {
          className: Ql,
          children: [
            (0, z.jsx)(ar, { className: tu }),
            (0, z.jsx)(_, { className: $l }),
          ],
        }),
        key: `4`,
        contents: (0, z.jsx)(vr, { children: (0, z.jsx)(yV, { ...e }) }),
        onClick: v,
      },
    ];
  return (0, z.jsx)(mV, {
    children: (0, z.jsx)(Ku, {
      tabs: y,
      classNameCtn: Xl,
      classNameTabContent: Yl,
      startingTab: c.toString(),
      preferredFocus: !0,
      bDisableRouting: !0,
      focusRingHasBorderRadius: !0,
    }),
  });
}
function mV(e) {
  let [t, n] = R.useState(!1),
    r = R.useRef(null),
    i = R.useCallback(() => {
      let e = r.current;
      e && n(e.scrollHeight > e.clientHeight);
    }, []),
    a = Fi(i);
  return (0, z.jsx)(ma, {
    ref: r,
    className: Nl,
    children: (0, z.jsx)(Fe, {
      ref: a,
      className: Pl,
      focusableIfEmpty: t,
      noFocusRing: !0,
      children: e.children,
    }),
  });
}
function hV(e) {
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
  return (0, z.jsxs)(Fe, {
    className: wl,
    ...l,
    children: [
      (0, z.jsxs)(`div`, {
        children: [
          (0, z.jsxs)(`div`, {
            id: t,
            className: xl,
            children: [
              (0, z.jsx)(`div`, { className: Sl, children: n }),
              (0, z.jsx)(`div`, { className: Cl, children: a }),
            ],
          }),
          o,
        ],
      }),
      s,
      (0, z.jsx)(Fe, {
        autoFocus: r,
        focusableIfEmpty: r,
        noFocusRing: !0,
        children: c,
      }),
    ],
  });
}
function gV(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a =
      r.steamos_resolved_items &&
      r.steamos_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, z.jsx)(NV, {
      id: n,
      category: r.steamos_resolved_category ?? 0,
      appName: i,
    }),
    s = (0, z.jsx)(jV, { category: r.steamos_resolved_category }),
    c = r.steamos_resolved_items && r.steamos_resolved_items?.length > 0;
  return (0, z.jsx)(hV, {
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
                    (0, z.jsx)(SV, { displaytype: e.display_type }),
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
                      (0, z.jsx)(SV, { displaytype: e.display_type }),
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
function _V(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, z.jsx)(MV, { id: n, category: r.resolved_category, appName: i }),
    s = (0, z.jsx)(AV, { category: r.resolved_category }),
    c = r.resolved_items && r.resolved_items?.length > 0;
  return (0, z.jsx)(hV, {
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
                    (0, z.jsx)(xV, { displaytype: e.display_type }),
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
        (0, z.jsx)(TV, { appid: r.appid, appName: i }),
      ],
    }),
  });
}
function vV(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.machine_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, z.jsx)(PV, {
      id: n,
      category: r.machine_resolved_category,
      appName: i,
    }),
    s = (0, z.jsx)(AV, { category: r.machine_resolved_category }),
    c = r.machine_resolved_items && r.machine_resolved_items?.length > 0;
  return (0, z.jsx)(hV, {
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
                    (0, z.jsx)(xV, { displaytype: e.display_type }),
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
function yV(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.frame_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, z.jsx)(FV, {
      id: n,
      category: r.frame_resolved_category ?? 0,
      appName: i,
    }),
    s = (0, z.jsx)(AV, { category: r.frame_resolved_category ?? 0 }),
    c = r.frame_resolved_items && r.frame_resolved_items?.length > 0;
  return (0, z.jsx)(hV, {
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
                    (0, z.jsx)(xV, { displaytype: e.display_type }),
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
function bV(e) {
  let { blogURL: t, eHWCompatibiltyDisplay: n } = e,
    r = Te();
  if (!t) return null;
  if (r) {
    let e =
      n == 2
        ? M.Localize(`#SteamOS_DescriptionHeader_DeveloperBlog`)
        : M.Localize(`#SteamDeckVerified_DescriptionHeader_DeveloperBlog`);
    return (0, z.jsxs)(`div`, {
      className: Il,
      children: [
        e,
        (0, z.jsx)(`div`, {
          className: Wl,
          children: (0, z.jsx)(pu, { button: V.Y, type: lu.Knockout }),
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
    className: Il,
    children: [
      i,
      (0, z.jsx)(`a`, {
        href: t,
        className: _l,
        children: M.Localize(`#SteamDeckVerified_ViewDeveloperPost`),
      }),
    ],
  });
}
function xV(e) {
  let { displaytype: t } = e;
  switch (t) {
    case 4:
      return (0, z.jsx)(Qn, { className: Ul });
    case 3:
      return (0, z.jsx)(Mt, { className: Ul });
    case 2:
      return (0, z.jsx)(Et, { className: Ul });
    case 0:
      return (0, z.jsx)(Ui, { className: Ul });
    case 1:
      return null;
  }
}
function SV(e) {
  let { displaytype: t } = e;
  switch (t) {
    case 3:
      return (0, z.jsx)(na, { className: Ul });
    case 1:
      return (0, z.jsx)(Nr, { className: Ul });
    default:
      return null;
  }
}
function CV(e) {
  let { histogram: t, deviceName: n, nFrameLimit: r, appName: i } = e,
    a = i
      ? M.Localize(`#GamePerformanceStats_FrameRateDistribution`, i, n)
      : M.Localize(`#GamePerformanceStats_FrameRateDistribution_ThisGame`, n);
  return (0, z.jsxs)(`div`, {
    className: Al,
    children: [
      (0, z.jsxs)(`div`, {
        children: [
          (0, z.jsx)(`div`, {
            className: jl,
            children: M.Localize(`#GamePerformanceStats_MoreInfoTitle`),
          }),
          (0, z.jsx)(`div`, { children: a }),
        ],
      }),
      (0, z.jsx)(fV, { histogram: t, minWidth: 200, minHeight: 200 }),
      (0, z.jsx)(`div`, {
        className: jl,
        children: M.Localize(`#GamePerformanceStats_MoreDetailsTitle`),
      }),
      (0, z.jsxs)(`div`, {
        className: Ml,
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
var wV = [4, 3];
function TV(e) {
  let { appid: t, appName: n } = e,
    r = Qu(t),
    { data: i } = $u(void 0, !!r),
    [a, o] = R.useState(!1),
    [s, c] = R.useState(void 0),
    l = R.useRef(null),
    u = (0, R.useMemo)(() => {
      let e = new Map();
      for (let t of wV) {
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
      className: Tl,
      children: [
        (0, z.jsx)(`div`, { className: Hl }),
        (0, z.jsx)(`div`, {
          className: El,
          children: M.Localize(
            `#GamePerformanceStats_StillGatheringData_NoDevice`,
          ),
        }),
      ],
    });
  let p = wV.map((e) => ({
      name: (0, z.jsx)(`div`, { className: Ql, children: f.get(e) }),
      key: e.toString(),
      contents: (0, z.jsx)(vr, {
        children: (0, z.jsx)(CV, {
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
      className: Ol,
      children: M.Localize(`#GameFrameRate_FPS`, g),
    });
    v = M.LocalizeReact(`#GameFrameRate_Description_ThisGame`, h, e);
  } else
    v = n
      ? M.Localize(`#GamePerformanceStats_StillGatheringData`, n, h)
      : M.Localize(`#GamePerformanceStats_StillGatheringData_ThisGame`, h);
  let y = !!g && !a;
  return (0, z.jsxs)(`div`, {
    className: Tl,
    onTransitionEnd: (e) => {
      e.propertyName == `height` &&
        l.current?.scrollIntoView({ behavior: `smooth`, block: `nearest` });
    },
    children: [
      (0, z.jsx)(`div`, { className: Hl }),
      (0, z.jsxs)(Fe, {
        className: El,
        onActivate: y ? () => o(!a) : void 0,
        focusable: y,
        children: [
          (0, z.jsxs)(`div`, {
            className: Dl,
            children: [
              v,
              y &&
                (0, z.jsx)(Xi, {
                  className: `heKA7rr02xo-`,
                  direction: a ? `up` : `down`,
                }),
            ],
          }),
          !!g &&
            _ > 0 &&
            (0, z.jsx)(`div`, {
              className: `HKN5tcQd-XE-`,
              children: M.Localize(`#GameFrameRate_LastUpdated`, Ve(_)),
            }),
        ],
      }),
      (0, z.jsx)(aa, {
        visible: a,
        children: (0, z.jsx)(`div`, {
          ref: l,
          className: kl,
          children: (0, z.jsx)(Ku, {
            tabs: p,
            classNameCtn: Zl,
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
function EV(e) {
  let { id: t, compatibility: n, onShowDialog: r } = e,
    { data: i } = jn(t),
    { data: a } = ca(t),
    [o, s, c] = vt();
  if (!i || !a || i.item_type !== 0) return null;
  let l = null,
    u = null;
  if (n == 4) {
    let e = a.steam_frame_compat_category || 0;
    ((l = (0, z.jsx)(pi, { category: e })),
      (u = M.Localize(
        `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
      )));
  } else if (n == 3) {
    let e = a.steam_machine_compat_category || 0;
    ((l = (0, z.jsx)(Rr, { category: e })),
      (u = M.Localize(
        `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
      )));
  } else {
    let e = a.steam_deck_compat_category || 0;
    ((l = (0, z.jsx)(Er, { category: e })),
      (u = M.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_Desktop`)));
  }
  return (0, z.jsxs)(`div`, {
    className: P(yl, `LearnMoreCtn`),
    children: [
      l,
      (0, z.jsx)(Xr, {
        onClick: (e) => {
          (e.preventDefault(), (r ?? s)());
        },
        children: (0, z.jsx)(`span`, { className: bl, children: u }),
      }),
      !r &&
        (0, z.jsx)(DV, {
          nAppID: i.appid,
          appName: i.name,
          active: o,
          startingTab: n,
          closeModal: c,
        }),
    ],
  });
}
function DV(e) {
  let { nAppID: t, active: n, appName: r, startingTab: i, closeModal: a } = e;
  return (0, z.jsx)(Sa, {
    active: n,
    children: (0, z.jsx)(kV, {
      nAppID: t,
      appName: r,
      startingTab: i,
      closeModal: a,
    }),
  });
}
function OV(e) {
  let { url: t, containerClass: n, bIncludeIcon: r, onOpenBlogPost: i } = e;
  return (0, z.jsxs)(Xr, {
    className: n,
    onClick: () => {
      i ? i() : t && (window.location.href = t);
    },
    children: [
      r && (0, z.jsx)(`div`, { className: `PJ-pfpmq-JI-` }),
      (0, z.jsx)(`div`, {
        className: r ? Jl : ql,
        children: M.Localize(
          `#SteamDeckVerified_Store_CompatSection_DeveloperComments`,
        ),
      }),
    ],
  });
}
function kV(e) {
  let { nAppID: t, appName: n, startingTab: r, closeModal: i } = e,
    a = ll(t),
    o = R.useId();
  return (0, z.jsx)(Da, {
    "aria-labelledby": o,
    modalClassName: `DeckVerifiedModalDialog`,
    closeModal: i,
    onCancel: i,
    children: (0, z.jsx)(hi, {
      children: (0, z.jsx)(Fe, {
        focusable: !1,
        "flow-children": `column`,
        className: Fl,
        children: a
          ? (0, z.jsx)(pV, {
              titleId: o,
              appName: n,
              results: a,
              eStartingTab: r,
            })
          : (0, z.jsx)(ce, {
              size: `medium`,
              position: `center`,
              string: M.Localize(`#Loading`),
            }),
      }),
    }),
  });
}
function AV(e) {
  let { category: t } = e;
  switch (t) {
    case 3:
      return (0, z.jsx)(Qn, { className: vl, role: `presentation` });
    case 2:
      return (0, z.jsx)(Mt, { className: vl, role: `presentation` });
    case 1:
      return (0, z.jsx)(Et, { className: vl, role: `presentation` });
    default:
      return (0, z.jsx)(Ui, { className: vl, role: `presentation` });
  }
}
function jV(e) {
  let { category: t } = e;
  switch (t) {
    case 2:
      return (0, z.jsx)(na, { className: vl, role: `presentation` });
    case 1:
      return (0, z.jsx)(Et, { className: vl, role: `presentation` });
    default:
      return (0, z.jsx)(Ui, { className: vl, role: `presentation` });
  }
}
function MV(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, z.jsx)(`div`, {
      id: t,
      className: Il,
      children: r
        ? M.LocalizeReact(
            `#SteamDeckVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, z.jsx)(`b`, { children: le(r) }),
          )
        : M.Localize(`#SteamDeckVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamDeckVerified_DescriptionHeader_Verified`), (o = Ll));
      break;
    case 2:
      ((a = `#SteamDeckVerified_DescriptionHeader_Playable`), (o = Rl));
      break;
    case 1:
      ((a = `#SteamDeckVerified_DescriptionHeader_Unsupported`), (o = zl));
  }
  let s = (0, z.jsx)(`span`, { className: o, children: M.Localize(IV(n)) }),
    c = (0, z.jsx)(`span`, { className: Il, children: M.Localize(i || a) }),
    l = r
      ? M.LocalizeReact(
          `#SteamDeckVerified_DescriptionHeader_WithAppName`,
          (0, z.jsx)(`b`, { children: le(r) }),
          s,
          c,
        )
      : M.LocalizeReact(`#SteamDeckVerified_DescriptionHeader`, s, c);
  return (0, z.jsx)(`div`, { id: t, className: Il, children: l });
}
function NV(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, z.jsx)(`div`, {
      className: Il,
      children: r
        ? M.LocalizeReact(
            `#SteamOSCompatibility_DescriptionHeader_Unknown_WithAppName`,
            (0, z.jsx)(`b`, { children: le(r) }),
          )
        : M.Localize(`#SteamOSCompatibility_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 2:
      ((a = `#SteamOSCompatibility_DescriptionHeader_Compatible`), (o = Bl));
      break;
    case 1:
      ((a = `#SteamOSCompatibility_DescriptionHeader_Unsupported`), (o = zl));
  }
  let s = (0, z.jsx)(`span`, { className: o, children: M.Localize(LV(n)) }),
    c = (0, z.jsx)(`span`, { className: Il, children: M.Localize(i || a) }),
    l = r
      ? M.LocalizeReact(
          `#SteamOSCompatibility_DescriptionHeader_WithAppName`,
          (0, z.jsx)(`b`, { children: le(r) }),
          s,
          c,
        )
      : M.LocalizeReact(`#SteamOSCompatibility_DescriptionHeader`, s, c);
  return (0, z.jsx)(`div`, { id: t, className: Il, children: l });
}
function PV(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, z.jsx)(`div`, {
      className: Il,
      children: r
        ? M.LocalizeReact(
            `#SteamMachineVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, z.jsx)(`b`, { children: le(r) }),
          )
        : M.Localize(`#SteamMachineVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamMachineVerified_DescriptionHeader_Verified`), (o = Ll));
      break;
    case 2:
      ((a = `#SteamMachineVerified_DescriptionHeader_Playable`), (o = Rl));
      break;
    case 1:
      ((a = `#SteamMachineVerified_DescriptionHeader_Unsupported`), (o = zl));
  }
  let s = (0, z.jsx)(`span`, { className: o, children: M.Localize(IV(n)) }),
    c = (0, z.jsx)(`span`, { className: Il, children: M.Localize(i || a) }),
    l = r
      ? M.LocalizeReact(
          `#SteamMachineVerified_DescriptionHeader_WithAppName`,
          (0, z.jsx)(`b`, { children: le(r) }),
          s,
          c,
        )
      : M.LocalizeReact(`#SteamMachineVerified_DescriptionHeader`, s, c);
  return (0, z.jsx)(`div`, { id: t, className: Il, children: l });
}
function FV(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, z.jsx)(`div`, {
      className: Il,
      children: r
        ? M.LocalizeReact(
            `#SteamFrameVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, z.jsx)(`b`, { children: le(r) }),
          )
        : M.Localize(`#SteamFrameVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamFrameVerified_DescriptionHeader_Verified`), (o = Ll));
      break;
    case 2:
      ((a = `#SteamFrameVerified_DescriptionHeader_Playable`), (o = Rl));
      break;
    case 1:
      ((a = `#SteamFrameVerified_DescriptionHeader_Unsupported`), (o = zl));
  }
  let s = (0, z.jsx)(`span`, { className: o, children: M.Localize(IV(n)) }),
    c = (0, z.jsx)(`span`, { className: Il, children: M.Localize(i || a) }),
    l = r
      ? M.LocalizeReact(
          `#SteamFrameVerified_DescriptionHeader_WithAppName`,
          (0, z.jsx)(`b`, { children: le(r) }),
          s,
          c,
        )
      : M.LocalizeReact(`#SteamFrameVerified_DescriptionHeader`, s, c);
  return (0, z.jsx)(`div`, { id: t, className: Il, children: l });
}
function IV(e) {
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
function LV(e) {
  switch (e) {
    case 2:
      return `#SteamOSCompatibility_Category_Compatible`;
    case 1:
      return `#SteamOSCompatibility_Category_Unsupported`;
    default:
      return `#SteamOSCompatibility_Category_Unknown`;
  }
}
function RV(e) {
  return e == 2 ? `bundle` : e == 1 ? `sub` : `app`;
}
function zV(e, t) {
  let n = t || +!!e;
  return [!!n, n];
}
var BV = (e) => {
  let { appid: t } = e,
    n = (0, z.jsx)(`div`, {
      className: `ImpressionTrackedElement`,
      children: e.children,
    });
  return t ? (0, z.jsx)(Fr, { appID: t, children: n }) : n;
};
function VV(e) {
  let { id: t } = e,
    { data: n } = Ei(t);
  return n
    ? (0, z.jsx)(`div`, {
        className: Kc,
        children: (0, z.jsx)(`div`, {
          className: qc,
          children: n
            .slice(0, 10)
            .filter((e) => e.tagid)
            .map((e) =>
              (0, z.jsx)(
                TY,
                { tagid: e.tagid, className: Jc },
                `tag_` + e.tagid,
              ),
            ),
        }),
      })
    : null;
}
function HV(e) {
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
    g = xK(),
    _ =
      d &&
      (() => {
        (g?.(), d());
      }),
    [v, y] = (0, R.useState)(!1),
    [b, x] = (0, R.useState)(``),
    S = (e) => x(`translateY( -${e?.clientHeight || 0}px )`),
    { data: C } = jn(t),
    { data: w } = bn(n),
    T = !f && !o && !a,
    E = C && C.item_type == 0,
    [D, O] = zV(l, u);
  return (0, z.jsxs)(`div`, {
    className: Vc,
    style: { transform: s && v ? b : `` },
    onMouseEnter: () => y(!0),
    onFocus: () => y(!0),
    onMouseLeave: () => y(!1),
    onBlur: () => y(!1),
    children: [
      (0, z.jsxs)(`a`, {
        href: i,
        className: Ic,
        onClick: (e) => {
          m && e.preventDefault();
        },
        "aria-disabled": m,
        children: [
          w &&
            (0, z.jsx)(`div`, {
              className: `JsLUT-ZChQQ-`,
              children: (0, z.jsx)(`div`, {
                className: P(`-G728TP4qEc-`, `AWrycDVaY80-`),
                children: (0, z.jsx)(`img`, {
                  loading: `lazy`,
                  src: nt(w, `header`),
                  alt: C?.name,
                }),
              }),
            }),
          !c &&
            !f &&
            (0, z.jsx)(`div`, {
              className: `Er5Gw2jrA3A-`,
              children: (0, z.jsx)(sH, { id: t, onlyOneDiscountPct: !0 }),
            }),
        ],
      }),
      (0, z.jsx)(`div`, {
        className: Hc,
        ref: S,
        children: (0, z.jsxs)(`div`, {
          className: Wc,
          children: [
            (0, z.jsx)(`a`, {
              href: i,
              onClick: (e) => {
                m && e.preventDefault();
              },
              "aria-disabled": m,
              children: (0, z.jsx)(`div`, {
                className: Gc,
                children: C?.name || r,
              }),
            }),
            h && (0, z.jsx)(WV, { id: t }),
            (0, z.jsx)(VV, { id: t }),
            !D && (0, z.jsx)(al, { id: t }),
            !(D || !T) &&
              (0, z.jsxs)(`div`, {
                className: `N6R56w3oY8s-`,
                children: [
                  (0, z.jsx)(eH, { id: t, strClassName: `aRGldfNGEPM-` }),
                  (0, z.jsx)(UV, { id: t }),
                ],
              }),
            o && (0, z.jsx)(YH, { id: t, className: `mVkwv5PYwMg-` }),
            !!(D && E) &&
              (0, z.jsx)(EV, { id: t, compatibility: O, onShowDialog: _ }),
            !!a && a,
            f &&
              E &&
              t &&
              `appid` in t &&
              t.appid &&
              (0, z.jsx)(wH, { appid: t.appid, bIsMuted: !1 }),
            p && (0, z.jsx)(QG, { nCreatorAccountID: p }),
          ],
        }),
      }),
    ],
  });
}
function UV(e) {
  let { id: t } = e,
    { data: n } = Kn(t);
  if (!n) return null;
  let r = pc(n);
  return (0, z.jsx)(`div`, { className: Yc, children: r });
}
function WV(e) {
  let { id: t } = e,
    { data: n } = Be(t);
  return n
    ? (0, z.jsx)(`div`, { className: Uc, children: n?.short_description })
    : null;
}
function GV(e) {
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
    { data: l } = Ki(t),
    { data: u } = hn(t),
    d = l === void 0 && u === void 0,
    [f] = zV(!!a, o);
  return (0, z.jsxs)(`div`, {
    className: P(jc, d && `dNo27dzDPfI-`, vs, i && `djLCJl8FKv8-`),
    children: [
      (0, z.jsxs)(`a`, {
        href: r,
        className: Mc,
        children: [
          !(!s || f) && (0, z.jsx)(sl, { id: n, snr: e.strSNR }),
          !(!c || f) && (0, z.jsx)(mG, { id: n, snr: e.strSNR }),
          t && (0, z.jsx)(lK, { id: t }),
        ],
      }),
      (0, z.jsx)(HV, { ...e }),
    ],
  });
}
function KV(e) {
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
    { data: b } = jn(t),
    x = Te(),
    [S, C, w] = vt(),
    { strStoreURL: T, snr: E } = AH(b, o);
  if ((!b && !n) || x) return (0, z.jsx)(z.Fragment, { children: u });
  let D = t;
  b &&
    b.item_type == 1 &&
    b.included_appids?.length == 1 &&
    (D = { appid: b.included_appids[0] });
  let O = TK() == `hiding`,
    k;
  r || (k = v ?? (b ? T : void 0));
  let [, A] = zV(p, m),
    ee;
  A != 0 && b?.appid && b?.item_type == 0 && (ee = b.appid);
  let te = (0, z.jsx)(GV, {
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
      onShowDeckCompatibilityDialog: ee ? C : void 0,
    }),
    j = k && !v ? (0, z.jsx)(`a`, { href: k, children: u }) : u;
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(SK, {
        hoverContent: te,
        nWidthMultiplier: f,
        ...y,
        children: j,
      }),
      ee &&
        (0, z.jsx)(DV, {
          nAppID: ee,
          appName: b?.name || n,
          startingTab: A,
          active: S,
          closeModal: w,
        }),
    ],
  });
}
function qV(e) {
  return (0, R.useMemo)(() => XV(e), [e?.id, e?.type]);
}
function JV(e, t) {
  return (0, R.useMemo)(() => $V(e, t), [e, t]);
}
function YV(e, t) {
  return (0, R.useMemo)(() => QV(e, t), [e, t]);
}
function XV(e) {
  if (e && e.id) {
    if (!e.type) return { appid: e.id };
    switch (e.type) {
      case `sub`:
        return { packageid: e.id };
      case `bundle`:
        return { bundleid: e.id };
      default:
        return { appid: e.id };
    }
  }
}
function ZV(e) {
  if (`appid` in e) return { id: e.appid, type: `game` };
  if (`packageid` in e) return { id: e.packageid, type: `sub` };
  if (`bundleid` in e) return { id: e.bundleid, type: `bundle` };
}
function QV(e, t) {
  switch (t) {
    case `sub`:
      return { packageid: e };
    case `bundle`:
      return { bundleid: e };
    default:
      return { appid: e };
  }
}
function $V(e, t) {
  switch (t) {
    case `sub`:
      return { packageid: e };
    case `bundle`:
      return { bundleid: e };
    default:
      return { appid: e };
  }
}
function eH(e) {
  let { id: t, strClassName: n, bMinimizePlatforms: r, bHideWindows: i } = e,
    { data: a } = ca(t);
  if (!a) return null;
  if (r) {
    let e = i
      ? null
      : a?.windows &&
        (0, z.jsx)(`span`, {
          title: M.Localize(`#Platform_Windows`),
          children: (0, z.jsx)(Sn, {
            "aria-label": M.Localize(`#Platform_Windows`),
          }),
        });
    return (
      I.PLATFORM === `linux` && a?.steamos_linux
        ? (e = (0, z.jsx)(`span`, {
            title: M.Localize(`#Platform_Linux`),
            children: (0, z.jsx)(pn, {
              "aria-label": M.Localize(`#Platform_Linux`),
            }),
          }))
        : I.PLATFORM === `macos` && a?.mac
          ? (e = (0, z.jsx)(`span`, {
              title: M.Localize(`#Platform_Mac`),
              children: (0, z.jsx)(Ln, {
                "aria-label": M.Localize(`#Platform_Mac`),
              }),
            }))
          : a.vr_support?.vrhmd &&
            (e = (0, z.jsx)(`span`, {
              title: M.Localize(`#Platform_VR`),
              children: (0, z.jsx)(ya, {
                "aria-label": M.Localize(`#Platform_VR`),
              }),
            })),
      e ? (0, z.jsx)(`span`, { className: P(Do, n), children: e }) : null
    );
  }
  return (0, z.jsxs)(`span`, {
    className: P(Do, n),
    children: [
      !i &&
        a.windows &&
        (0, z.jsx)(`span`, {
          title: M.Localize(`#Platform_Windows`),
          children: (0, z.jsx)(Sn, {
            "aria-label": M.Localize(`#Platform_Windows`),
          }),
        }),
      a.mac &&
        (0, z.jsx)(`span`, {
          title: M.Localize(`#Platform_Mac`),
          children: (0, z.jsx)(Ln, {
            "aria-label": M.Localize(`#Platform_Mac`),
          }),
        }),
      a.steamos_linux &&
        (0, z.jsx)(`span`, {
          title: M.Localize(`#Platform_Linux`),
          children: (0, z.jsx)(pn, {
            "aria-label": M.Localize(`#Platform_Linux`),
          }),
        }),
      a.vr_support?.vrhmd &&
        (0, z.jsx)(`span`, {
          title: M.Localize(`#Platform_VR`),
          children: (0, z.jsx)(ya, {
            "aria-label": M.Localize(`#Platform_VR`),
          }),
        }),
    ],
  });
}
function tH(e) {
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
var nH = {
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
  rH = {
    strSymbol: ``,
    bSuffixSymbol: !1,
    bSpaceForSymbol: !1,
    bWholeUnitsOnly: !1,
    eCurrency: 0,
    strDecimalSymbol: `.`,
    strThousandsSeparator: `,`,
  };
function iH(e) {
  return { ...rH, ...nH[e], eCurrency: e };
}
function aH(e, t) {
  return oH(e, iH(t));
}
function oH(e, t) {
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
function sH(e) {
  let { id: t, bSelfPurchaseOption: n } = e,
    { data: r } = Fn(t),
    { data: i } = jn(t);
  if (!i) return null;
  let a = n && i.item_type == 1 ? i.self_purchase_option : r;
  return (0, z.jsx)(cH, { purchaseOption: a, ...e });
}
function cH(e) {
  let {
      bSingleLineMode: t,
      onlyOneDiscountPct: n,
      id: r,
      purchaseOption: i,
      bHidePrePurchase: a,
      bHideReleaseDate: o,
      bHideIfDemo: s,
      bPurchaseOptionDisplay: c,
      bCapsuleRowDisplay: l,
      strContainerClassName: u,
      strDiscountAndPriceClassName: d,
      strPriceFormattedClassName: f,
      bPreferWholeNumbers: p,
      bSelfPurchaseOption: m,
      bHideNewTag: h,
      bPrePurchaseBesidePrice: g,
    } = e,
    _ = I.NOW,
    { data: v } = Kn(r),
    { data: y } = jn(r);
  if (!y) return null;
  let b = i,
    x = !h && gc(v, _),
    S = P({
      [zo]: !0,
      [fs]: t,
      StoreSalePriceWidgetContainer: !0,
      [gs]: x,
      [To]: c,
      [Ss]: l,
      [u ?? ``]: !!u,
    });
  if (e.bShowInLibrary)
    return (0, z.jsx)(`div`, {
      className: S,
      children: (0, z.jsx)(`div`, {
        className: ds,
        children: M.Localize(`#EventDisplay_CallToAction_InLibrary`),
      }),
    });
  if (v && v.is_coming_soon && (!b || (!b.packageid && !b.bundleid))) {
    if (o) return null;
    let e =
      v.coming_soon_display &&
      [`text_comingsoon`, `text_tba`].includes(v.coming_soon_display)
        ? Mr(v)
        : M.Localize(`#EventDisplay_CallToAction_ComingSoon_Date`, pc(v));
    return (0, z.jsx)(`div`, {
      className: S,
      children: (0, z.jsx)(`div`, { className: ds, children: e }),
    });
  }
  if (y.is_free) {
    if (!y.is_free_temporarily)
      return y.item_type == 0 && y.type == 1
        ? s
          ? null
          : (0, z.jsxs)(`div`, {
              className: S,
              children: [
                x &&
                  (0, z.jsx)(`div`, {
                    className: `eNdjZ1XB-fk-`,
                    children: M.Localize(`#Flag_New`),
                  }),
                (0, z.jsx)(`div`, {
                  className: ds,
                  children: M.Localize(`#EventDisplay_CallToAction_FreeDemo`),
                }),
              ],
            })
        : (0, z.jsxs)(`div`, {
            className: S,
            children: [
              x &&
                (0, z.jsx)(`div`, {
                  className: `eNdjZ1XB-fk-`,
                  children: M.Localize(`#Flag_New`),
                }),
              (0, z.jsx)(`div`, {
                className: ds,
                children: M.Localize(`#EventDisplay_CallToAction_FreeToPlay`),
              }),
            ],
          });
    if (b && b.is_free_to_keep && !b.formatted_original_price)
      return (0, z.jsx)(`div`, {
        className: S,
        children: (0, z.jsx)(`div`, {
          className: ds,
          children: M.Localize(`#EventDisplay_CallToAction_Free`),
        }),
      });
  }
  if (!b || !b.formatted_final_price) return null;
  let C = y.item_type == 2,
    w = mn(b),
    T = !!w && !w.nSupersededBundlePct,
    E = w?.nSupersededBundlePct ? w.nDiscountPct : b.discount_pct || 0,
    D = ((w || C) && (!n || T || (w && !t)) && b.bundle_discount_pct) || 0,
    O = b.formatted_final_price;
  if (p) {
    let e = { ...iH(tH(F.country_code.toUpperCase())), bWholeUnitsOnly: !0 };
    O = oH(Number.parseInt(b.final_price_in_cents || `0`), e);
  }
  let k = _c(v, b);
  return (0, z.jsx)(lH, {
    bSingleLineMode: !!t,
    bBundleItem: C,
    nBaseDiscountPercentage: D,
    nDiscountPercentage: E,
    bIsPrePurchase: k,
    strBestPurchaseOriginalPriceFormatted:
      w?.strOriginalPrice || b.formatted_original_price || ``,
    strBestPurchasePriceFormatted: O,
    bHideDiscountPercentForCompliance: !!b.hide_discount_pct_for_compliance,
    bShowNewFlag: x,
    bHidePrePurchase: !!a,
    bPrePurchaseBesidePrice: g,
    strDiscountAndPriceClassName: d,
    strPriceFormattedClassName: f,
    bPurchaseOptionDisplay: c,
    bCapsuleRowDisplay: l,
  });
}
function lH(e) {
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
      bCapsuleRowDisplay: m,
      bBundleItem: h,
    } = e,
    g = s,
    _;
  n &&
    (_ = g
      ? M.Localize(`#Discount_ARIA_Label_SpecialPrice`, a)
      : M.Localize(`#Discount_ARIA_Label`, n, a, o));
  let v = !((!n && !i) || g) && !!a,
    y = !(!i || !n || g || t),
    b = M.Localize(je(!!i, !!n, !!h));
  return (0, z.jsxs)(`div`, {
    className: P({
      [zo]: !0,
      [fs]: t,
      StoreSalePriceWidgetContainer: !0,
      [ls]: !!n,
      Discounted: !!n,
      [hs]: !!r,
      [bs]: !!u,
      [gs]: !!c,
      [To]: p,
      [Ss]: m,
      [d ?? ``]: !!d,
    }),
    "aria-label": _,
    children: [
      !(!r || l) &&
        (0, z.jsx)(`div`, {
          className: P(`DfwzMU92EL4-`, `StoreSalePrepurchaseLabel`),
          children: (0, z.jsxs)(`span`, {
            children: [
              (0, z.jsx)(Tr, {}),
              M.Localize(`#EventDisplay_CallToAction_Prepurchase_Short`),
            ],
          }),
        }),
      !(r || !c) &&
        (0, z.jsx)(`div`, {
          className: `eNdjZ1XB-fk-`,
          children: M.Localize(`#Flag_New`),
        }),
      y &&
        (0, z.jsx)(Tt, {
          toolTipContent: b,
          children: (0, z.jsxs)(`span`, {
            className: P(`kjiBcsaqA8o-`, `_3jMC2e33p3s-`),
            children: [
              (0, z.jsx)(`span`, {
                className: `cCmCiA6FCMc-`,
                children: `-${i}%`,
              }),
              `-${n}%`,
            ],
          }),
        }),
      !(!i || g || y) &&
        (0, z.jsxs)(z.Fragment, {
          children: [
            (0, z.jsx)(Tt, {
              toolTipContent: b,
              children: (0, z.jsx)(`span`, {
                className: P(`_-1f811oo4iw-`),
                children: `-${i}%`,
              }),
            }),
            !!n &&
              (0, z.jsx)(Tt, {
                toolTipContent: b,
                children: (0, z.jsx)(`span`, {
                  className: P(`kjiBcsaqA8o-`),
                  children: `-${n}%`,
                }),
              }),
          ],
        }),
      !(i || !n || g) &&
        (0, z.jsx)(Tt, {
          toolTipContent: b,
          children: (0, z.jsx)(`div`, {
            className: P(`kjiBcsaqA8o-`, `StoreSaleDiscountBox`),
            children: `-${n}%`,
          }),
        }),
      !!(n && g) &&
        (0, z.jsx)(`div`, {
          className: `NqZ9uMSo13A-`,
          children: (0, z.jsx)(kn, {}),
        }),
      v
        ? (0, z.jsxs)(`div`, {
            className: P(ps),
            children: [
              (0, z.jsx)(`div`, {
                className: P({ [ys]: t, [ms]: !t }),
                children: a,
              }),
              (0, z.jsx)(`div`, {
                className: P({ [ds]: !0, [fs]: t, [f ?? ``]: !!f }),
                children: o,
              }),
            ],
          })
        : (0, z.jsx)(`div`, {
            className: P({ [ds]: !0, [f ?? ``]: !!f }),
            children: o,
          }),
    ],
  });
}
var uH = `pE3kiYj-T9c-`,
  dH = `bXqn3-4kGc8-`,
  fH = `bNGFzJt9CmI-`,
  pH = `vE1beFyJ7fE-`,
  mH = `jLH2MgXW2QA-`,
  hH = `dGNTZWr-al8-`,
  gH = `_8aFotqvmohI-`,
  _H = `sjibpkgu4sc-`,
  vH = `I09IQjtbMSg-`,
  yH = `C4-YRfvAL7Q-`;
async function bH(e, t) {
  let n = `steam://run/` + e;
  mr.IN_CLIENT
    ? (console.log(`Running game ${e} locally.`), (window.location.href = n))
    : (console.log(
        `Cannot identify local client. Prompting user to launch ${e}.`,
      ),
      SH(e, n, t));
}
async function xH(e, t) {
  let n = `steam://install/` + e;
  mr.IN_CLIENT ? (window.location.href = n) : SH(e, n, t);
}
async function SH(e, t, n) {
  console.log(`prompting for`, n);
  let r = mr.STORE_BASE_URL + `about/`;
  Re(
    (0, z.jsx)(CH, {
      appid: e,
      strGameName: n || ``,
      strOnOKUrl: t,
      strDownloadSteamUrl: r,
    }),
    window,
  );
}
var CH = (e) => {
  let t = () => e.closeModal && e.closeModal();
  return (0, z.jsx)(On, {
    onEscKeypress: t,
    className: uH,
    children: (0, z.jsxs)(bi, {
      children: [
        (0, z.jsxs)(fr, { children: [` `, L(`#GotSteam_Title`), ` `] }),
        (0, z.jsxs)(hi, {
          children: [
            (0, z.jsx)(jr, {
              children: Cr(
                `#GotSteam_PromptWithDownloadLink`,
                (0, z.jsx)(`a`, {
                  href: e.strDownloadSteamUrl,
                  className: dH,
                  children: L(`#GotSteam_DownloadLinkText`),
                }),
                (0, z.jsx)(`span`, { className: fH, children: e.strGameName }),
              ),
            }),
            (0, z.jsxs)(`div`, {
              className: pH,
              children: [
                (0, z.jsxs)(`a`, {
                  href: e.strOnOKUrl,
                  onClick: t,
                  className: P(mH, hH),
                  children: [
                    (0, z.jsxs)(`div`, {
                      className: gH,
                      children: [` `, L(`#GotSteam_Yes`), ` `],
                    }),
                    (0, z.jsxs)(`div`, {
                      className: _H,
                      children: [` `, L(`#GotSteam_Yes_Play`), ` `],
                    }),
                  ],
                }),
                (0, z.jsxs)(`a`, {
                  href: e.strDownloadSteamUrl,
                  onClick: t,
                  className: mH,
                  children: [
                    (0, z.jsxs)(`div`, {
                      className: gH,
                      children: [` `, L(`#GotSteam_No`), ` `],
                    }),
                    (0, z.jsxs)(`div`, {
                      className: _H,
                      children: [` `, L(`#GotSteam_No_Download`), ` `],
                    }),
                  ],
                }),
              ],
            }),
            (0, z.jsxs)(`div`, {
              className: vH,
              children: [
                (0, z.jsx)(pn, { className: yH }),
                L(`#GotSteam_Blurb`),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
function wH(e) {
  let { appid: t, bIsMuted: n } = e,
    r = Ra(t),
    i = Ga(t),
    { data: a } = jn(r),
    { mutate: o } = wc(r),
    s = (e) => {
      (e.preventDefault(), i ? bH(t, a?.name) : o());
    },
    c = P(Fo, n && void 0, i ? Io : Lo);
  return (0, z.jsx)(`div`, {
    role: `button`,
    tabIndex: 0,
    onClick: s,
    className: c,
    onKeyDown: (e) => {
      (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), s(e));
    },
    children: L(i ? `#Sale_PlayNow` : `#Sale_AddToLibrary`),
  });
}
function TH(e) {
  let t = e?.jsondata?.read_more_link;
  if (!t) return;
  let n = Vn(t).toLocaleLowerCase();
  return n ? [n] : void 0;
}
function EH(e, t) {
  return sn(e, TH(t));
}
function DH(e, t) {
  if (!e) return ``;
  if (!sn(e)) return un(e);
  let n = EH(e, t) ? at(e) : e;
  return (I.IN_CLIENT ? `steam://openurl_external/` : ``) + n;
}
function OH(e, t, n) {
  let r = e.toLowerCase().startsWith(`http`) ? e : `http://` + e;
  return (0, z.jsx)(kH, { url: r, event: t, children: n || e });
}
var kH = (e) => {
  let { url: t, event: n, className: r, style: i } = e,
    a = Ri(t);
  a = DH(a, n);
  let o = sn(a) ? `noopener nofollow` : void 0,
    s =
      typeof e.children == `string` &&
      e.children.length > 0 &&
      t &&
      !t.startsWith(`steam://`)
        ? er(t)
        : void 0;
  return (0, z.jsx)(Tt, {
    toolTipContent: s,
    direction: `top`,
    children: (0, z.jsx)(Xr, {
      className: r,
      href: a,
      rel: o,
      id: e.id,
      style: i,
      children: e.children,
    }),
  });
};
function AH(e, t) {
  let n = ra(),
    r = or(),
    i = DH(k(e, t));
  return { snr: kt(n), strStoreURL: st(i, n, r) };
}
function jH(e, t, n, r, i) {
  return MH(
    [{ packageid: e, bundleid: t, bIsGift: n, nAccountIDGiftee: r }],
    i,
  );
}
function MH(e, t) {
  let n = Gn(),
    r = ua(),
    i = s(),
    { storeBrowseContext: a, dataLoader: o } = pr(),
    { country: c } = a,
    l = Ci(t);
  return p({
    mutationFn: async () => {
      if (e.length == 0 || !e.every((e) => e.packageid || e.bundleid))
        throw `Every item must have a valid package or bundle id`;
      let t;
      if (ht(n)) {
        let [a, o] = await tt(r, c, e, l);
        if (a == 1) ((t = o.line_item_ids), cn(i, n, o.cart));
        else throw `AddItemsToAccountCart failed with ${a}`;
      } else if (An(n)) {
        let a = e.map((e) => e.packageid).filter(ot),
          o = e.map((e) => e.bundleid).filter(ot);
        if (o.length > 1)
          throw `The anonymous cart can only take one bundle per call`;
        let [s, c] = await Ze(
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
            cn(i, n, $t(c)));
        } else throw `AddItemsToAnonymousCart failed with ${s}`;
      } else throw `Invalid cart type`;
      return t;
    },
    onMutate: () => {
      (async () => {
        let t = e.map((e) =>
          e.packageid ? { packageid: e.packageid } : { bundleid: e.bundleid },
        );
        (await Promise.all(t.map((e) => i.fetchQuery(Tn(o, e))))).forEach(
          (e, n) => {
            let r =
              e?.included_appids?.length == 1
                ? { appid: e.included_appids[0] }
                : t[n];
            (i.prefetchQuery(xn(o, r)), i.prefetchQuery(Kt(o, r)));
          },
        );
      })();
    },
  });
}
var NH = e(f(), 1);
async function PH(e, t) {
  let n = tn.Init(_a);
  (n.Body().set_context(Ge(!1)), t.forEach((e) => n.Body().add_packageid(e)));
  let r = await En.GetHardwareItems(e, n);
  return r.BSuccess()
    ? r
        .Body()
        .details()
        .map((e) => e.toObject())
    : (console.error(`GetHardareDetails failed on packages: ${t.join(`,`)}`),
      null);
}
function FH(e) {
  let t = BH(ua());
  return m(RH(t, e));
}
var IH = (function (e) {
  return (
    (e[(e.k_Loading = 0)] = `k_Loading`),
    (e[(e.k_LoadSuccess = 1)] = `k_LoadSuccess`),
    (e[(e.k_LoadFailure = 2)] = `k_LoadFailure`),
    e
  );
})({});
function LH(e) {
  let t = BH(ua()),
    n = d({ queries: e.map((n) => ({ ...RH(t, n), enabled: e.length > 0 })) }),
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
function RH(e, t) {
  return { queryKey: zH(t), queryFn: async () => e.load(t), enabled: !!t };
}
function zH(e) {
  return [`hardwaredetail`, e];
}
function BH(e) {
  return g(`HardwareDetailLoader`, () => VH(e));
}
function VH(e) {
  return new NH.default(async (t) => {
    let n = await PH(e, t),
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
var HH = { high_pending_orders: !1, inventory_available: !0 };
function UH(e) {
  let { data: t } = jn(e),
    n = t?.item_type === 1 && t.type === 10,
    { data: r } = FH(n ? t.id : void 0);
  return t ? (n ? (r ?? null) : HH) : null;
}
var WH = `wvEYeGaFmt0-`,
  GH = `GW1050ijiP0-`;
function KH(e) {
  let { id: t, className: n } = e,
    r = ra(),
    { data: i } = jn(t),
    { data: a } = Kn(t),
    { data: o } = gt(t),
    s = UH(t),
    { bIsOwned: c } = Ja(t),
    l = wn(i),
    u = (0, R.useCallback)(() => {
      if (i) {
        let e = i.appid;
        (i.related_items?.parent_appid &&
          i.type != 11 &&
          (e = i.related_items.parent_appid),
          Gt(window, `steam://run/${e}`));
      }
    }, [i]);
  if (!i || !a || !o || i.type == 8) return null;
  let d =
    i.is_free ||
    (o.final_price_in_cents != null && o.final_price_in_cents == `0`) ||
    (o.discount_pct && o.discount_pct >= 100);
  if (i.item_type == 1) {
    if (i.type == 10) {
      if (!s) return (0, z.jsx)(ce, { size: `small`, position: `center` });
      if (!s.inventory_available)
        return (0, z.jsx)(`div`, {
          className: P(GH, n),
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
      if (mr.IN_CLIENT || St() != `store`) {
        let e = `${mr.IN_CLIENT ? `steam://openurl/` : ``}${l}`;
        return (0, z.jsx)(`div`, {
          onClick: (t) => Gt(t, e),
          className: P(WH, n),
          children: (0, z.jsx)(`span`, {
            children: M.Localize(`#EventDisplay_CallToAction_VisitStore`),
          }),
        });
      }
      {
        let e = zn(`${mr.STORE_BASE_URL}freelicense/addfreelicense`, r);
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
              value: $i(),
            }),
            (0, z.jsx)(`button`, {
              className: P(WH, n),
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
          className: P(WH, n),
          onClick: u,
          children: (0, z.jsx)(`span`, { children: e }),
        })
      );
    }
    if (o.formatted_final_price == ``)
      return (0, z.jsx)(`a`, {
        href: l,
        className: P(WH, n),
        children: M.Localize(`#EventDisplay_CallToAction_VisitStore`),
      });
  }
  return (0, z.jsx)(qH, {
    className: n,
    storeItemBestPurchaseOption: o,
    storeItemDefaultData: i,
  });
}
function qH(e) {
  let {
      className: t,
      storeItemBestPurchaseOption: n,
      storeItemDefaultData: r,
    } = e,
    i = ra(),
    { mutate: a } = jH(n?.packageid, n?.bundleid, !1, void 0, i.feature);
  return (0, z.jsx)(`div`, {
    className: P(WH, t),
    onClick: () => a(),
    children: (0, z.jsx)(`span`, { children: M.Localize(`#Store_AddToCart`) }),
  });
}
var JH = `_8xhMURZRDBY-`;
function YH(e) {
  let { id: t, className: n } = e,
    { data: r } = jn(t);
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
  if (I.IN_MOBILE_WEBVIEW) {
    if (o && a) {
      let e = r.type === 1 ? r.appid : i[0];
      return (0, z.jsx)(`div`, {
        className: n,
        children: (0, z.jsx)(yY, { appid: e }),
      });
    }
    return null;
  }
  return !o && a && r.is_free
    ? (0, z.jsx)(KH, { id: t, className: n })
    : (0, z.jsx)(Zn, {
        toolTipContent: s,
        onClick: (e) => {
          (e.preventDefault(),
            e.stopPropagation(),
            o && bH(r.type === 1 ? r.appid : i[0], r.name));
        },
        className: P(n, JH, !o && `gpIFsnR2ZGs-`),
        children: o
          ? M.Localize(`#Sale_InstallDemo`)
          : M.Localize(`#Sale_DemoNotFound`),
      });
}
var $ = {};
(($.arabic = () =>
  N(() => import(`./chunk~dab13398e5.js`), [], import.meta.url)),
  ($.brazilian = () =>
    N(() => import(`./chunk~dab1246145.js`), [], import.meta.url)),
  ($.bulgarian = () =>
    N(() => import(`./chunk~4bdff36891.js`), [], import.meta.url)),
  ($.czech = () =>
    N(() => import(`./chunk~2545b0937f.js`), [], import.meta.url)),
  ($.danish = () =>
    N(() => import(`./chunk~dd0ba56211.js`), [], import.meta.url)),
  ($.dutch = () =>
    N(() => import(`./chunk~3082dc6760.js`), [], import.meta.url)),
  ($.english = () =>
    N(() => import(`./chunk~5d62d6ca8b.js`), [], import.meta.url)),
  ($.finnish = () =>
    N(() => import(`./chunk~4f95d7925a.js`), [], import.meta.url)),
  ($.french = () =>
    N(() => import(`./chunk~11a8bb7eb1.js`), [], import.meta.url)),
  ($.german = () =>
    N(() => import(`./chunk~edd1a7534c.js`), [], import.meta.url)),
  ($.greek = () =>
    N(() => import(`./chunk~3f51d22cb3.js`), [], import.meta.url)),
  ($.hungarian = () =>
    N(() => import(`./chunk~670fab083e.js`), [], import.meta.url)),
  ($.indonesian = () =>
    N(() => import(`./chunk~13e12dd392.js`), [], import.meta.url)),
  ($.italian = () =>
    N(() => import(`./chunk~adba104c1f.js`), [], import.meta.url)),
  ($.japanese = () =>
    N(() => import(`./chunk~4eec58f087.js`), [], import.meta.url)),
  ($.koreana = () =>
    N(() => import(`./chunk~bba5046be4.js`), [], import.meta.url)),
  ($.latam = () =>
    N(() => import(`./chunk~ea21cd4d57.js`), [], import.meta.url)),
  ($.malay = () =>
    N(() => import(`./chunk~308b243181.js`), [], import.meta.url)),
  ($.norwegian = () =>
    N(() => import(`./chunk~5ac43a3563.js`), [], import.meta.url)),
  ($.polish = () =>
    N(() => import(`./chunk~4f755de70e.js`), [], import.meta.url)),
  ($.portuguese = () =>
    N(() => import(`./chunk~24c4d88bb0.js`), [], import.meta.url)),
  ($.romanian = () =>
    N(() => import(`./chunk~12e32dc158.js`), [], import.meta.url)),
  ($.russian = () =>
    N(() => import(`./chunk~826f71c3ec.js`), [], import.meta.url)),
  ($.sc_schinese = () =>
    N(() => import(`./chunk~c4ad2ce98c.js`), [], import.meta.url)),
  ($.schinese = () =>
    N(() => import(`./chunk~4471e18869.js`), [], import.meta.url)),
  ($.spanish = () =>
    N(() => import(`./chunk~2c71f9094b.js`), [], import.meta.url)),
  ($.swedish = () =>
    N(() => import(`./chunk~e0ccea11c6.js`), [], import.meta.url)),
  ($.tchinese = () =>
    N(() => import(`./chunk~4e11e578eb.js`), [], import.meta.url)),
  ($.thai = () =>
    N(() => import(`./chunk~6b7e311b97.js`), [], import.meta.url)),
  ($.turkish = () =>
    N(() => import(`./chunk~19221a0d49.js`), [], import.meta.url)),
  ($.ukrainian = () =>
    N(() => import(`./chunk~89f3b39bfb.js`), [], import.meta.url)),
  ($.vietnamese = () =>
    N(() => import(`./chunk~bdb7ec474f.js`), [], import.meta.url)));
async function XH(e) {
  if ($[e]) return await $[e]();
}
var ZH = Nt(XH),
  QH = R.createContext(void 0);
function $H() {
  return R.useContext(QH) ?? ue();
}
var eU = t({
    AlbumCoverImage: () => UU,
    AlbumTitle: () => WU,
    AppSummaryWidgetCtn: () => SU,
    CarouselCapsuleAnimated: () => xU,
    CarouselCapsuleBordered: () => bU,
    CarouselDisplay: () => iU,
    CarouselPage: () => nW,
    CarouselSalePageCapsule: () => CU,
    CarouselSalePageCapsuleTall: () => wU,
    CustomStyle_together: () => OU,
    DefaultCreatorCtn: () => oW,
    DesktopTabs: () => XU,
    DisabledBackground: () => cU,
    EmptySectionPreview: () => RU,
    EventSectionViewAllCtn: () => sW,
    HorizontalScrollInDragForceCursor: () => eW,
    Hover: () => mU,
    JumpToButton: () => _U,
    JumpToSection: () => gU,
    JumpedTo: () => hU,
    LinkCapsule: () => zU,
    LoginButton: () => fU,
    MobileTabSelector: () => KU,
    MobileTabSelectorButton: () => JU,
    MobileTabSelectorDropDown: () => ZU,
    MobileTabSelectorOption: () => QU,
    MobileTabSelectorShortcut: () => YU,
    NoTopPadding: () => oU,
    SaleBackground: () => jU,
    SaleBroadcastCtn: () => TU,
    SaleBroadcastSection: () => tW,
    SaleHeaderContainer: () => sU,
    SaleNewSizing: () => kU,
    SaleOuterContainer: () => DU,
    SaleOuterTopMargin: () => EU,
    SaleOverlay: () => yU,
    SaleOverlayCtn: () => vU,
    SalePageBroadcastContextHover: () => HU,
    SalePageLogoSet: () => AU,
    SaleSection: () => rU,
    SaleSectionBackgroundImageGroupEdit: () => cW,
    SaleSectionContainer: () => PU,
    SaleSectionCtn: () => aU,
    SaleSectionLivePreview: () => pU,
    SaleSectionLoginPrompt: () => dU,
    SaleSectionSubtext: () => NU,
    SaleSectionTabListContainer: () => GU,
    SaleSectionTabs: () => lU,
    SaleSectionTitleCtn: () => MU,
    SaleTabLabel: () => aW,
    SaleViewAll: () => uU,
    TabButton: () => iW,
    TabButtonsCtn: () => rW,
    TabContentsContainer: () => $U,
    Visible: () => qU,
    default: () => lW,
    "duration-app-launch": () => tU,
    fullscreen_bg: () => BU,
    fullscreen_bg_video: () => VU,
    narrowWidth: () => nU,
    preview_placeholder_section: () => LU,
    vr_required: () => IU,
    vr_supported: () => FU,
  }),
  tU = `800ms`,
  nU = `500px`,
  rU = `_5uN-ZG0AdmQ-`,
  iU = `_1z-QD5sz6XA-`,
  aU = `BjU45TzF-sA-`,
  oU = `QYv8zbj--Ck-`,
  sU = `fgKHCBFFyCk-`,
  cU = `iZzul86MCHw-`,
  lU = `A3eo6r5OuXY-`,
  uU = `dp33i3JEBBw-`,
  dU = `FyvPogThu-8-`,
  fU = `QSC5IqjmQXQ-`,
  pU = `_4V-KrqNLPmQ-`,
  mU = `_5ogwM4KIkcI-`,
  hU = `Gl6SVCjLh9k-`,
  gU = `d2m-PEeOVmY-`,
  _U = `BxPO-muNnTI-`,
  vU = `aOA-KMNFbEE-`,
  yU = `QYd-JimFMMk-`,
  bU = `_9PVhWUbR3rk-`,
  xU = `giUOrzG6Ujs-`,
  SU = `zct4M8EzfNo-`,
  CU = `FolDBzXMW2I-`,
  wU = `E6LHQcm-39c-`,
  TU = `_0pSO3K-0Hs4-`,
  EU = `_9D3431c8-XE-`,
  DU = `G-t-vlNhbRM-`,
  OU = `BFlA7ucDxBk-`,
  kU = `_5NaHSqwUb-k-`,
  AU = `RG63SnOtLk0-`,
  jU = `XuI82j9l9uk-`,
  MU = `_29km0evCwsI-`,
  NU = `pL8IDIWBDg8-`,
  PU = `EbBLppwfKjc-`,
  FU = `EGwn6tH7C3A-`,
  IU = `p8u1MHwjP-M-`,
  LU = `h-z1TiT2EHc-`,
  RU = `lVRRRKgBwVY-`,
  zU = `DH6P5MgdIW4-`,
  BU = `v-DWOHY9-II-`,
  VU = `tXTiGEi7jtU-`,
  HU = `v2nIqzREAqo-`,
  UU = `YWSh4uKYrRw-`,
  WU = `rSkuhIlNBLw-`,
  GU = `_9tUDGLmuFv4-`,
  KU = `_4AjIhoHXOgI-`,
  qU = `Q-Ikm9aXlIY-`,
  JU = `j3KNKPgNrvY-`,
  YU = `_0TmI5Lz4Zkc-`,
  XU = `_6VXiW9d8-lQ-`,
  ZU = `t274EZYLkbA-`,
  QU = `gni2wFLBcSk-`,
  $U = `Rbv-UgEUoaw-`,
  eW = `OvCIJMOKBQ8-`,
  tW = `_0lI2wcrU0XU-`,
  nW = `CuZwu-t3ukQ-`,
  rW = `bevr-bUWbuk-`,
  iW = `yedrb7j8BiU-`,
  aW = `hAnG1YoY-8k-`,
  oW = `u8sMh8Um98Q-`,
  sW = `JuZBiq95wYE-`,
  cW = `oh4R-N9DrSA-`,
  lW = {
    "duration-app-launch": `800ms`,
    narrowWidth: nU,
    SaleSection: rU,
    CarouselDisplay: iU,
    SaleSectionCtn: aU,
    NoTopPadding: oU,
    SaleHeaderContainer: sU,
    DisabledBackground: cU,
    SaleSectionTabs: lU,
    SaleViewAll: uU,
    SaleSectionLoginPrompt: dU,
    LoginButton: fU,
    SaleSectionLivePreview: pU,
    Hover: mU,
    JumpedTo: hU,
    JumpToSection: gU,
    JumpToButton: _U,
    SaleOverlayCtn: vU,
    SaleOverlay: yU,
    CarouselCapsuleBordered: bU,
    CarouselCapsuleAnimated: xU,
    AppSummaryWidgetCtn: SU,
    CarouselSalePageCapsule: CU,
    CarouselSalePageCapsuleTall: wU,
    SaleBroadcastCtn: TU,
    SaleOuterTopMargin: EU,
    SaleOuterContainer: DU,
    CustomStyle_together: OU,
    SaleNewSizing: kU,
    SalePageLogoSet: AU,
    SaleBackground: jU,
    SaleSectionTitleCtn: MU,
    SaleSectionSubtext: NU,
    SaleSectionContainer: PU,
    vr_supported: FU,
    vr_required: IU,
    preview_placeholder_section: LU,
    EmptySectionPreview: RU,
    LinkCapsule: zU,
    fullscreen_bg: BU,
    fullscreen_bg_video: VU,
    SalePageBroadcastContextHover: HU,
    AlbumCoverImage: UU,
    AlbumTitle: WU,
    SaleSectionTabListContainer: GU,
    MobileTabSelector: KU,
    Visible: qU,
    MobileTabSelectorButton: JU,
    MobileTabSelectorShortcut: YU,
    DesktopTabs: XU,
    MobileTabSelectorDropDown: ZU,
    MobileTabSelectorOption: QU,
    TabContentsContainer: $U,
    HorizontalScrollInDragForceCursor: eW,
    SaleBroadcastSection: tW,
    CarouselPage: nW,
    TabButtonsCtn: rW,
    TabButton: iW,
    SaleTabLabel: aW,
    DefaultCreatorCtn: oW,
    EventSectionViewAllCtn: sW,
    SaleSectionBackgroundImageGroupEdit: cW,
  };
function uW(e) {
  let t = Me.GetELanguageFallback(e);
  return e == t ? `${e}` : `${e}_${t}`;
}
function dW(e) {
  return e ? de(new qn(e.clanSteamID64), e.event) : null;
}
async function fW(e, t) {
  let n = new URLSearchParams();
  (e.clanAccountID && n.set(`clan_accountid`, String(e.clanAccountID)),
    e.appid && n.set(`appid`, String(e.appid)),
    e.eventGID && n.set(`event_gid`, e.eventGID),
    e.announcementGID && n.set(`announcement_gid`, e.announcementGID),
    n.set(`lang_list`, uW(t)),
    n.set(`last_modified_time`, `0`),
    n.set(`origin`, window.location.origin));
  let r = I.STORE_BASE_URL + `events/ajaxgetpartnerevent?` + n.toString(),
    i = await fetch(r);
  if (!i.ok) throw Error(`${r} answered ${i.status}`);
  let a = await i.json();
  return a.success !== 1 || !a.event?.clan_steamid
    ? null
    : { clanSteamID64: a.event.clan_steamid, event: a.event };
}
function pW(e, t) {
  return [
    `LinkedPartnerEvent`,
    e.clanAccountID,
    e.appid,
    e.eventGID,
    e.announcementGID,
    t,
  ];
}
function mW(e) {
  return (
    !!e &&
    (!!e.clanAccountID || !!e.appid) &&
    (!!e.eventGID || !!e.announcementGID)
  );
}
function hW(e, t) {
  let n = mW(e);
  return {
    queryKey: pW(e ?? {}, t),
    queryFn: () => fW(e ?? {}, t),
    select: dW,
    enabled: n,
    staleTime: 36e5,
    retry: !1,
  };
}
function gW(e) {
  let t = qt(I.LANGUAGE);
  return m(hW(e, t));
}
function _W(e) {
  return e?.clan_steamid ? de(new qn(e.clan_steamid), e) : null;
}
var vW = 100;
async function yW(e, t) {
  let n = new URLSearchParams();
  (n.set(`event_gids`, [...new Set(e)].sort().join(`,`)),
    n.set(`lang_list`, uW(t)),
    n.set(`origin`, location.origin));
  let r =
      I.STORE_BASE_URL + `events/ajaxgetbatchedpartnerevent/?` + n.toString(),
    i = await fetch(r);
  if (i.status === 204) return e.map(() => null);
  if (!i.ok) throw Error(`${r} answered ${i.status}`);
  let a = await i.json(),
    o = new Map((a.events ?? []).map((e) => [e.gid, e]));
  return e.map((e) => o.get(e) ?? null);
}
function bW(e) {
  return g(
    [`PublicPartnerEventBrowser`, e],
    () => new NH.default((t) => yW(t, e), { maxBatchSize: vW, cache: !1 }),
  );
}
function xW(e, t) {
  return [`PublicPartnerEvent`, e, t];
}
function SW(e, t, n) {
  return {
    queryKey: xW(e, t),
    queryFn: async () => (n ? n.load(e) : (await yW([e], t))[0]),
    select: _W,
    enabled: !!e,
    staleTime: 6e5,
  };
}
function CW(e) {
  let t = qt(I.LANGUAGE),
    n = bW(t);
  return m(SW(e, t, n));
}
function wW(e, t, n) {
  return qJ(t, e, n)?.strTagName || void 0;
}
function TW(e, t, n, r) {
  let i = n == 1 || n == 3 || n == 4,
    a = () => {
      let t = ye(e.smart_section_creator_listid);
      return t
        ? i
          ? L(`#Sale_CreatorList_Section_Editor_title`, t)
          : t
        : null;
    };
  if (e.section_type === `items`)
    switch (y(e)) {
      case `wishlist`:
        return `#Sale_default_label_OnYourWishlist`;
      case `interactive_recommender`:
        return `#Sale_default_label_RecommendedForYou`;
      case `tag_recommender`:
        return `#Sale_default_label_RecommendedForYou`;
      case `deck_topplayed`:
        return `#Sale_TopPlayedOnDeckSection`;
      case `personalized_carousel`:
        if (i) {
          let { nSectionIndex: n, nNumSections: r } = aq(e, t);
          return L(`#Sale_PersonalizedCarousel_Section_Editor_title`, n + 1, r);
        }
        let o = wW(e, t, r);
        if (!o && n == 2) {
          let { nSectionIndex: n, nNumSections: r } = aq(e, t);
          return L(`#Sale_PersonalizedCarousel_Section_Editor_title`, n + 1, r);
        }
        return o ? L(`#Sale_PersonalizedCarousel_Section_title`, o) : null;
      case `creator_list`:
        return a();
      case `discount_reason`:
        return SJ(e);
    }
  else if (e.section_type === `tabs`) return ``;
  else if (e.section_type === `curator`) {
    if (e.curator_clan_id) {
      let t = qn.InitFromClanID(e.curator_clan_id, mr.EUNIVERSE),
        n = ve.GetCreatorHome(t);
      if (n) return L(`#Sale_CuratorSection_Name`, n.GetName());
    }
    return `#Sale_CuratorSection`;
  } else if (e.section_type === `event_schedule`) return `#Sale_EventSchedule`;
  else if (e.section_type === `curator_recommendation`)
    return `#Sale_CuratorRecommendation_title`;
  else if (e.section_type === `discoveryqueue`) return `#DiscoveryQueue_Title`;
  else if (e.section_type === `sale_events`) return `#Sale_SaleEvent_Section`;
  else if (e.section_type === `calendar`) return `#Sale_SectionType_Calendar`;
  else if (e.section_type === `crosspromotesalepage` && n == 1)
    return `#Sale_CrossPromoSale_DefaultSectionTitle`;
  else if (e.section_type === `creator_list`) return a();
  return null;
}
function EW(e, t, n, r) {
  let i = TW(e, t, n, r);
  return i === null ? null : i && i.startsWith(`#`) ? L(i) : i;
}
function DW(e, t, n, r, i, a, o, s) {
  if (!e) return ``;
  if (e.section_type === `crosspromotesalepage`) return KK(s, n);
  let c = EW(e, t, i, o),
    l = _n.GetWithFallback(e.localized_label, n),
    u =
      c ||
      l ||
      (e.default_label === `#Sale_default_label` ? `` : L(e.default_label)),
    d = e.internal_section_title?.trim();
  if ((d?.length ?? 0) > 0) {
    if (i == 3 || i == 4)
      return u?.trim().length == 0 || a
        ? d
        : (0, z.jsxs)(z.Fragment, {
            children: [
              d,
              ` `,
              (0, z.jsx)(Qt, {
                tooltip: Cr(
                  `#Sale_Section_InternalTitle_Note`,
                  (0, z.jsx)(`br`, {}),
                  u,
                ),
              }),
            ],
          });
    if (i == 1)
      return u?.trim().length == 0 || a
        ? d
        : (0, z.jsxs)(z.Fragment, {
            children: [
              d,
              ` `,
              (0, z.jsx)(`span`, {
                children: Cr(`#Sale_Section_InternalTitle_Actual`, u),
              }),
            ],
          });
  }
  let f = _n.GetWithFallback(e.localized_label_image, n);
  if (!a && f) {
    let e = S.GenerateURLFromHashAndExt(r, f);
    return (0, z.jsx)(`img`, { loading: `lazy`, src: e, alt: u });
  }
  return u;
}
function OW(e, t, n) {
  if (b(e.section_type))
    switch (y(e)) {
      case `personalized_carousel`:
        let r = wW(e, t, n);
        return r ? L(`#Sale_PersonalizedCarousel_Section_subtitle`, r) : null;
      case `creator_list`:
        return _e(e.smart_section_creator_listid) ?? null;
      case `discount_reason`:
        return CJ(e);
    }
  return null;
}
function kW(e, t, n, r) {
  let i = OW(e, t, r);
  return i === null
    ? _n.GetWithFallback(e.localized_subtitle, n) ||
        (!e.default_subtitle || e.default_subtitle === `#Sale_default_subtitle`
          ? ``
          : L(e.default_subtitle))
    : i && i.startsWith(`#`)
      ? L(i)
      : i;
}
var AW = `dYYkud-Jf3s-`,
  jW = `zZo1XshRYmQ-`,
  MW = `RfHJSn8AdQE-`,
  NW = `D8GFuSKNhX0-`,
  PW = `woc2JepJIek-`;
function FW(e, t) {
  return (
    _n.GetWithFallback(e.localized_label, t) ||
    (e.default_label === `#Sale_default_label` ? `` : L(e.default_label))
  );
}
function IW(e) {
  if (b(e.section_type))
    switch (y(e)) {
      case `deck_topplayed`:
        return I.STORE_BASE_URL + `charts/steamdecktopplayed`;
    }
  return e.label_link;
}
function LW(e) {
  let t,
    n,
    r = !1;
  return (
    e.label_link_style === `button`
      ? ((t = L(`#Sale_SectionLink_BrowseAll`)), (r = !0))
      : e.label_link_style === `browseall`
        ? ((t = L(`#Sale_SectionLink_BrowseAll`)),
          (n = P(MW, `SaleSectionLabelLinkButton`)))
        : y(e) === `deck_topplayed` &&
          ((t = L(`#EventBrowse_MoreEventsBtn`)),
          (n = P(he, `SaleSectionLabelLinkButton`))),
    { strLinkButtonLabel: t, strLinkButtonClasses: n, bSmallButton: r }
  );
}
var RW = u((e) => {
  let {
      section: t,
      event: n,
      language: r,
      nHiddenCapsules: i,
      title: a,
      subtitle: o,
      bShowSeeMoreHint: s,
      bUseGamepadLinkHint: c,
      eGamepadLinkHintButton: l,
      onLinkResolved: u,
      personalizedCarousels: d,
      promotedSale: f,
    } = e,
    p = Te(),
    m = nG(),
    h = f !== void 0,
    { data: g } = CW(h ? void 0 : BK(t)),
    _ = (h ? f : g) ?? void 0,
    v = e.link || IW(t) || ge(_);
  if (
    (R.useEffect(() => {
      u?.(v);
    }, [v, u]),
    t.section_type == `title_image` && t.title_image_selected === `image`)
  )
    return null;
  let y = a || DW(t, n, r, n.clanSteamID.GetAccountID(), m.eLocation, !1, d, _);
  if (!y) return null;
  let b = o || kW(t, n, r, d),
    x = (0, z.jsxs)(`div`, {
      className: P(fe, `SaleSectionHeader`),
      style: zW(t, n, r),
      children: [
        t.test_show_on_valve_ip_only &&
          (0, z.jsx)(`div`, {
            className: `JrlXbYAw30w-`,
            children: `(VO)\xA0`,
          }),
        y,
      ],
    }),
    S = (0, z.jsx)(`div`, {
      className: P(fe, me, `SaleSectionSubtitle`),
      style: BW(t, n, r),
      children: b,
    }),
    C = null;
  if ((v?.length ?? 0) > 0) {
    let {
      strLinkButtonLabel: e,
      strLinkButtonClasses: n,
      bSmallButton: r,
    } = LW(t);
    (e &&
      (C =
        p && c
          ? (0, z.jsx)(ne, { label: e, shown: !!s, button: l })
          : r
            ? (0, z.jsx)(`div`, {
                className: P(sW, NW),
                children: (0, z.jsx)(tY, {
                  url: v,
                  children: (0, z.jsx)(We, { children: e }),
                }),
              })
            : (0, z.jsx)(tY, { url: v, className: n, children: e })),
      (x = (0, z.jsx)(tY, { url: v, bFocusable: !C, children: x })));
  }
  return (0, z.jsxs)(`div`, {
    className: P(AW, `SaleSectionLabelCtn`),
    children: [
      (0, z.jsxs)(`div`, { className: PW, children: [x, !!b && S] }),
      (0, z.jsxs)(`div`, {
        className: jW,
        children: [
          !!i &&
            (0, z.jsx)(Zn, {
              className: `pL8IDIWBDg8-`,
              toolTipContent: L(`#Sale_HiddenItem_Tooltip`),
              children: (0, z.jsx)(`a`, {
                href: I.STORE_BASE_URL + `account/preferences`,
                children: Cr(
                  i == 1
                    ? `#Sale_HiddenItem_Single_Short`
                    : `#Sale_HiddenItems_Short`,
                  i,
                ),
              }),
            }),
          C,
        ],
      }),
    ],
  });
});
function zW(e, t, n) {
  return {
    fontFamily: t.jsondata.sale_font ? VW(t.jsondata.sale_font, n) : void 0,
    fontWeight: t.jsondata.sale_font_weight,
    fontSize: `${t.jsondata.sale_section_font_size}px`,
    textTransform: t.jsondata.sale_section_disable_capitalize
      ? `initial`
      : void 0,
    color: e.label_color,
  };
}
function BW(e, t, n) {
  return {
    fontFamily: t.jsondata.sale_font ? VW(t.jsondata.sale_font, n) : void 0,
    fontWeight: 300,
    fontSize: `${t.jsondata.sale_section_font_size && t.jsondata.sale_section_font_size - 3}px`,
    letterSpacing: 0,
    lineHeight: `${t.jsondata.sale_section_font_size}px`,
    textTransform: t.jsondata.sale_section_disable_capitalize
      ? `initial`
      : void 0,
    color: e.label_color,
    opacity: `50%`,
  };
}
function VW(e, t) {
  return (
    (e ||= ``),
    t === 12
      ? e.replace(`Jolly Lodger`, `New Rocker`)
      : t === 23 || t === 19 || t === 24 || t === 18 || t === 8 || t === 26
        ? e.replace(`Sigmar One`, `Play`)
        : t === 6
          ? e.replace(`Sigmar One`, `Noto Serif SC`)
          : t === 7
            ? e.replace(`Sigmar One`, `Noto Serif TC`)
            : t === 10
              ? e.replace(`Sigmar One`, `M PLUS Rounded 1c`)
              : t === 4
                ? e.replace(`Sigmar One`, `Black Han Sans`)
                : t === 9
                  ? e.replace(`Sigmar One`, `Prompt`)
                  : e
  );
}
function HW(e, t, n, r, i) {
  let a = DW(t, r, n, r.clanSteamID.GetAccountID(), e);
  if (a) return a;
  let o = L(`#Sale_Section_Header`, i + 1),
    s = `#Sale_Section_Type_` + (t?.section_type || `unknowntype`),
    c = L(s);
  if (c !== s) return `${o} (${c})`;
}
function UW(e, t, n) {
  return `linear-gradient(${n ?? 0}deg, ${e || `transparent`} 0%, ${t || `transparent`} 100%)`;
}
function WW(e) {
  return UW(
    e.background_gradient_bottom,
    e.background_gradient_top,
    e.background_gradient_angle,
  );
}
function GW(e, t, n) {
  if (e.disable_background) return { paddingLeft: 0, paddingRight: 0 };
  let r = ``;
  if (e.background_image) {
    let n = S.GenerateURLFromHashAndExt(t.clanSteamID, e.background_image);
    r += `,url(${n})`;
  }
  return e.background_gradient_bottom ||
    e.background_gradient_top ||
    r.length > 0 ||
    e.background_repeat ||
    e.border_color ||
    e.border_width
    ? {
        backgroundImage: WW(e) + r,
        backgroundRepeat: e.background_repeat,
        backgroundSize: e.background_repeat == `coverBlur` ? `cover` : ``,
        outlineStyle: e.border_color && e.border_width ? `solid` : void 0,
        outlineColor: e.border_color,
        outlineWidth: e.border_width ? `${e.border_width}px` : void 0,
      }
    : {};
}
function KW(e, t) {
  return e
    ? e.disable_background && !t
      ? { paddingLeft: 0, paddingRight: 0 }
      : e.background_gradient_bottom ||
          e.background_gradient_top ||
          e.background_repeat ||
          e.border_color ||
          e.border_width
        ? {
            background: WW(e),
            backgroundRepeat: e.background_repeat,
            outlineStyle: e.border_color && e.border_width ? `solid` : void 0,
            outlineColor: e.border_color,
            outlineWidth: e.border_width ? `${e.border_width}px` : void 0,
          }
        : {}
    : {};
}
function qW(e) {
  let { closeModal: t, strDescOverride: n } = e;
  return (0, z.jsx)(bt, {
    strTitle: ZH.Localize(`#LoginRedirect_Dialog_Title`),
    strDescription: n || ZH.Localize(`#LoginRedirect_Dialog_Description`),
    onCancel: t,
    strOKButtonText: M.Localize(`#Button_OK`),
    onOK: () => {
      (D(), t());
    },
  });
}
function JW(e) {
  let [t, n, r] = vt();
  return {
    elDialogElement: (0, z.jsx)(Sa, {
      active: t,
      children: (0, z.jsx)(qW, { closeModal: r, strDescOverride: e }),
    }),
    fnShowLogonDialog: n,
  };
}
function YW(e) {
  let { label: t, strDialogDesc: n } = e,
    { elDialogElement: r, fnShowLogonDialog: i } = JW(n);
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(va, {
        onClick: i,
        children: t || M.Localize(`#Login_SignIn`),
      }),
      r,
    ],
  });
}
function XW(e, t = {}) {
  let n = y(e);
  return !!(
    e.section_type == `discoveryqueue` ||
    e.section_type == `dlc_for_you` ||
    e.section_type == `claim_item` ||
    (b(e.section_type) &&
      x(e) &&
      (n == `wishlist` ||
        n == `interactive_recommender` ||
        n == `personalized_carousel` ||
        n == `dlc_music_onsale` ||
        n == `ir_subscription` ||
        ((n == `deck_compatibility` || n == `frame_compatibility`) &&
          e.smart_section_data_source != `popularity`) ||
        (n == `wishlist_onsale` && !t.bHideWishlist) ||
        (n == `dlc_onsale` && !t.bHideDLC) ||
        (n == `interactive_recommender_onsale` && !t.bHideIRList)))
  );
}
function ZW(e) {
  let { section: t, event: n } = e,
    r = Te();
  return (0, z.jsxs)(Fe, {
    className: rU,
    style: GW(t, n, r),
    children: [
      (0, z.jsx)(RW, { ...e }),
      (0, z.jsxs)(Fe, {
        className: dU,
        children: [L(`#SalePage_LoginPrompt`), (0, z.jsx)(QW, {})],
      }),
    ],
  });
}
function QW() {
  return (0, z.jsx)(`button`, {
    onClick: () => D(),
    className: fU,
    children: L(`#Login_SignIn`),
  });
}
var $W = { eLocation: 0 },
  eG = R.createContext($W);
function tG(e) {
  let { children: t, location: n } = e;
  return (0, z.jsx)(eG.Provider, {
    value: { ...$W, eLocation: n ?? 0 },
    children: t,
  });
}
function nG() {
  return R.useContext(eG);
}
function rG() {
  return nG().eLocation == 2;
}
function iG() {
  let e = nG();
  return e.eLocation == 2 || e.eLocation == 1;
}
async function aG(e, t) {
  let n = br(mr.STORE_BASE_URL, t, wa.country_code);
  return (await (await fetch(n)).json()).rgFollowedApps || [];
}
function oG() {
  let e = ua(),
    t = wa.accountid;
  return m(sG(e, t));
}
function sG(e, t) {
  return {
    queryKey: uG(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await aG(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function cG(e) {
  let { data: t } = oG();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function lG() {
  let e = s(),
    t = wa.accountid;
  return (n, r) => {
    e.setQueryData(uG(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function uG(e) {
  return [`AccountFollowApps`, e ?? 0];
}
function dG(e, t, n) {
  let r = lG(),
    i = wa.accountid;
  return p({
    mutationKey: [`useUpdateAppFollow`, e, i, t],
    mutationFn: async () => {
      if (e == null) return;
      let r = mr.STORE_BASE_URL + `explore/followgame`,
        i = new FormData();
      (i.append(`appid`, `` + e),
        i.append(`sessionid`, $i()),
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
      ha();
    },
  });
}
var fG = `VULTMp1PCTw-`,
  pG = `_2vLXBykr6zc-`;
function mG(e) {
  let { id: t, snr: n, classOverride: r } = e,
    [i, a] = (0, R.useState)(!1),
    o = ae(`GameHoverIgnoreButton`),
    { elDialogElement: s, fnShowLogonDialog: c } = JW(),
    l = t && `appid` in t ? t.appid : void 0,
    u = xi(l),
    { mutateAsync: d } = ie(l, !u, n),
    f = t && `appid` in t && Bt.Get().BIsGameIgnored(t.appid);
  return (0, z.jsxs)(Fe, {
    className: P(fG, r),
    onClick: async (e) => {
      (e.preventDefault(),
        e.stopPropagation(),
        wa.logged_in
          ? t && `appid` in t && (a(!0), await d(), o.token.reason || a(!1))
          : c());
    },
    children: [
      (0, z.jsx)(wt, {}),
      (0, z.jsx)(`div`, {
        className: P(pG, i && `vyz9N2LpdMs-`),
        children: L(f ? `#Sale_RemoveFromIgnored` : `#Sale_Ignore`),
      }),
      s,
    ],
  });
}
async function hG(e, t) {
  let n = br(mr.STORE_BASE_URL, t, wa.country_code),
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
function gG() {
  let e = ua(),
    t = F.accountid;
  return m(_G(e, t));
}
function _G(e, t) {
  return {
    queryKey: CG(t),
    queryFn: async () => {
      let n = new Map();
      if (t)
        try {
          (await hG(e, t)).forEach((e) => n.set(e.clanid, e));
        } catch (e) {
          console.error(`GetCuratorAffinityQuery`, e);
        }
      return n;
    },
    enabled: !!t,
  };
}
function vG(e) {
  let { data: t } = gG();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.followed;
}
function yG(e) {
  let { data: t } = gG();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.ignored;
}
function bG() {
  return I.EREALM != nn.k_ESteamRealmChina;
}
function xG() {
  return I.EREALM != nn.k_ESteamRealmChina;
}
function SG() {
  let e = s(),
    t = F.accountid;
  return (n, r, i, a) => {
    e.setQueryData(CG(t), (e) => {
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
function CG(e) {
  return [`CuratorAffinityQueryKey`, e ?? 0];
}
var wG = (function (e) {
  return (
    (e[(e.k_ECuratorFollow = 1)] = `k_ECuratorFollow`),
    (e[(e.k_ECuratorUnfollow = 2)] = `k_ECuratorUnfollow`),
    (e[(e.k_ECuratorIgnore = 3)] = `k_ECuratorIgnore`),
    (e[(e.k_ECuratorUnignore = 4)] = `k_ECuratorUnignore`),
    e
  );
})({});
function TG(e, t) {
  let n = SG(),
    r = wa.accountid;
  return p({
    mutationKey: [`useUpdateCuratorAffinity`, e, r, t],
    mutationFn: async () => {
      if (e == null) return !1;
      let n = t == wG.k_ECuratorFollow || t == wG.k_ECuratorUnfollow,
        r = t == wG.k_ECuratorFollow || t == wG.k_ECuratorIgnore,
        i = `${mr.STORE_BASE_URL}curators/${n ? `ajaxfollow/` : `ajaxignore/`}`,
        a = new FormData();
      (a.append(`clanid`, `` + e),
        a.append(`sessionid`, $i()),
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
        let r = t == wG.k_ECuratorUnfollow || t == wG.k_ECuratorUnignore;
        n(
          t == wG.k_ECuratorFollow ? [{ clanAccountID: e }] : void 0,
          t == wG.k_ECuratorIgnore ? [{ clanAccountID: e }] : void 0,
          r ? [{ clanAccountID: e }] : void 0,
        );
      }
    },
    onError: (r) => {
      if (e != null) {
        let i = t == wG.k_ECuratorFollow || t == wG.k_ECuratorIgnore;
        n(
          t == wG.k_ECuratorUnfollow ? [{ clanAccountID: e }] : void 0,
          t == wG.k_ECuratorUnignore ? [{ clanAccountID: e }] : void 0,
          i ? [{ clanAccountID: e }] : void 0,
          r ? [{ clanAccountID: e, is_creator: !0 }] : void 0,
        );
      }
    },
    onSuccess: (t) => {
      (t &&
        e &&
        n(void 0, void 0, void 0, [{ clanAccountID: e, is_creator: !0 }]),
        ha());
    },
  });
}
var EG = `QOSk1wMadGg-`,
  DG = `DH1jwyMHeXo-`,
  OG = `J5g1CfUd95U-`,
  kG = `_3IPvWkyhZzM-`,
  AG = `jB1S5EvgUjI-`,
  jG = `iWO-8zu8RAA-`,
  MG = `MTgAGoNV5vg-`,
  NG = `LEvP9jHHfL8-`,
  PG = `K9ZawxnkJcI-`,
  FG = `OlPIY4AN-5s-`,
  IG = `_7UT3Pb65ni0-`,
  LG = `sT74IdnPxY8-`,
  RG = `ZTz7p5tpqNU-`,
  zG = `ct7kvDppls0-`,
  BG = `SG9Xn5tF5a0-`,
  VG = `clYVRh6K2Ig-`,
  HG = `k6MwDwdCJTU-`,
  UG = `mnFUxHcas-0-`,
  WG = `_6lWvo8crYSU-`,
  GG = `r3PgsXSGPho-`,
  KG = `EWCiFLRR-T8-`,
  qG = `GEroszngeLM-`,
  JG = (e) => {
    let t = I.HELP_BASE_URL + `wizard/HelpWithLimitedAccount`;
    return (0, z.jsx)(bt, {
      strTitle: L(`#Informational_Message`),
      onCancel: e.closeModal,
      onOK: e.closeModal,
      bAlertDialog: !0,
      children: (0, z.jsx)(`div`, {
        children: Cr(
          e.strTokenOverride || `#User_LimitedAccount`,
          (0, z.jsx)(`a`, {
            href: t,
            target: I.IN_CLIENT ? void 0 : `_blank`,
            rel: `noopener noreferrer`,
            children: L(`#User_LimitedAccount_UrlInfo`),
          }),
        ),
      }),
    });
  },
  YG = (e) => {
    let {
        className: t,
        bIgnored: n,
        bApplyingFollowing: r,
        bFollowing: i,
        onFollowClick: a,
        followType: o,
      } = e,
      { elDialogElement: s, fnShowLogonDialog: c } = JW();
    if (!bG()) return null;
    let l = null;
    switch (o) {
      case `app`:
        l = L(`#text_store_follow_desc`);
        break;
      case `creatorhome`:
        l = L(`#CreatorHome_Follow_tooltip`);
        break;
      case `steamcurator`:
        l = L(`#steam_curator_follow_ttip`);
        break;
      case `group`:
        l = L(`#steam_group_follow_ttip`);
    }
    return l
      ? (0, z.jsxs)(z.Fragment, {
          children: [
            (0, z.jsx)(Tt, {
              toolTipContent: !n && !i ? l : void 0,
              children: (0, z.jsxs)(ur, {
                className: P(pe, GG, `FollowButton`, t, i ? `Followed` : ``),
                onClick: () => {
                  F.logged_in ? a() : c();
                },
                children: [
                  r && (0, z.jsx)(xe, { size: 15 }),
                  !r && (i || n) && (0, z.jsx)(zr, {}),
                  (0, z.jsx)(`div`, {
                    className: P(KG, `FollowBtnText`),
                    children:
                      !r &&
                      L(
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
function XG(e) {
  let {
      followType: t,
      fnSuccessCallback: n,
      clanAccountID: r,
      className: i,
    } = e,
    [a, o] = R.useState(!1),
    { data: s } = E(t ? void 0 : r),
    c = vG(r),
    l = yG(r),
    { mutateAsync: u } = TG(r, c ? wG.k_ECuratorUnfollow : wG.k_ECuratorFollow),
    [d, f, p] = vt(),
    m = R.useCallback(async () => {
      c != null && (o(!0), await u(), o(!1), n?.(c));
    }, [c, n, u]);
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(YG, {
        className: i,
        bIgnored: !!l,
        bFollowing: !!c,
        bApplyingFollowing: a,
        onFollowClick: () => {
          F.is_limited ? f() : m();
        },
        followType: t ?? (s?.is_creator_home ? `creatorhome` : `steamcurator`),
      }),
      (0, z.jsx)(Sa, {
        active: d,
        children: (0, z.jsx)(JG, { closeModal: p }),
      }),
    ],
  });
}
function ZG(e) {
  let { appid: t, className: n } = e,
    [r, i] = R.useState(!1),
    a = cG(t),
    o = xi(t),
    s = ra(),
    c = gr.GetSNRLinkParam(s),
    { mutateAsync: l } = dG(t, !a, c),
    u = R.useCallback(async () => {
      (i(!0), await l(), i(!1));
    }, [l]);
  return (0, z.jsx)(YG, {
    className: n,
    bIgnored: !!o,
    bFollowing: !!a,
    bApplyingFollowing: r,
    onFollowClick: u,
    followType: `app`,
  });
}
function QG(e) {
  let {
      nCreatorAccountID: t,
      classOverride: n,
      styleOverride: r,
      followType: i,
    } = e,
    { data: a } = E(t),
    { data: o } = $a(t);
  if (!a || !o) return null;
  let s = a.avatar_medium_url || a.avatar_full_url;
  return (
    (s ||= be(void 0, `medium`, `web`)),
    (0, z.jsxs)(`div`, {
      className: P(il, n),
      style: r,
      children: [
        (0, z.jsx)(`a`, {
          href: no(o, `developer`),
          children: (0, z.jsx)(`img`, { src: s, alt: a.group_name }),
        }),
        (0, z.jsx)(XG, { clanAccountID: t, followType: i }),
      ],
    })
  );
}
var $G = 5500,
  eK = 2e3,
  tK = 10;
function nK(e, t) {
  return e && t && t.main_capsule
    ? {
        stringifyID: `maincap_${e.id}_${e.item_type}`,
        rctImage: (0, z.jsx)(
          `img`,
          {
            className: Pc,
            loading: `lazy`,
            src: nt(t, `main_capsule`),
            alt: e.name,
          },
          `fallback`,
        ),
        nDurationMs: eK,
      }
    : null;
}
function rK(e, t) {
  return {
    stringifyID: `vid_${Or(e)}`,
    rctImage: (0, z.jsx)(j, { id: e, active: !0 }),
    nDurationMs: $G,
  };
}
function iK(e) {
  let t = Qi(e);
  return ai(e) ? void 0 : t;
}
function aK(e, t, n, r) {
  return n.slice(0, r).map((n, r) => {
    let i = _t(n, `1920x1080`);
    return {
      stringifyID: `screen${r}_${Or(e)}`,
      rctImage: (0, z.jsx)(
        `img`,
        {
          className: Pc,
          loading: `lazy`,
          src: i,
          alt: `${t}'s screenshot ${r + 1}`,
        },
        i,
      ),
      nDurationMs: eK,
    };
  });
}
function oK(e, t, n, r, i) {
  let a = [];
  if (
    (i && a.push(rK(e, i)),
    r && r.length > 0 && a.push(...aK(e, t.name, r, tK)),
    a.length == 0 && n && n.main_capsule)
  ) {
    let e = nK(t, n);
    e && a.push(e);
  }
  return (e && a.length, a);
}
function sK(e, t, n, r, i, a) {
  let o = [];
  (a && o.push(rK(t, a)), r && r.length > 0 && o.push(...aK(e, n.name, r, tK)));
  let s = tK - (r?.length || 0);
  return (
    s > 0 && i && i.length > 0 && o.push(...aK(e, n.name, i, s)),
    e && o.length,
    o
  );
}
function cK(e) {
  return (0, z.jsx)(`img`, {
    className: Pc,
    loading: `lazy`,
    src: sa(te),
    alt: `default`,
  });
}
function lK(e) {
  let { id: t } = e,
    { data: n } = Dt(t);
  if (!n || n.unvailable_for_country_restriction || !n.visible)
    return (0, z.jsx)(`div`, {
      className: Nc,
      children: (0, z.jsx)(cK, {}, `default`),
    });
  let r = n.item_type,
    i = n.type;
  return r == 2 || r == 1
    ? (0, z.jsx)(pK, { includeAppIDs: n.included_appids })
    : (i == 1 || i == 12) && n.related_items && n.related_items.parent_appid
      ? (0, z.jsx)(dK, {
          demoItemDefaultInfo: n,
          parentAppID: n.related_items.parent_appid,
        })
      : (0, z.jsx)(uK, { storeItemDefaultData: n });
}
function uK(e) {
  let { storeItemDefaultData: t } = e,
    n = Ti(t),
    r = iK(n),
    { data: i } = bn(n),
    a = vn(n),
    o = (0, R.useMemo)(() => oK(n, t, i, a, r), [n, a, r, i, t]);
  return (0, z.jsx)(mK, { rgTrailerAndImages: o });
}
function dK(e) {
  let { demoItemDefaultInfo: t, parentAppID: n } = e,
    r = Ti(t);
  return iK(r)
    ? (0, z.jsx)(uK, { storeItemDefaultData: t })
    : (0, z.jsx)(fK, { demoID: r, demoItemDefaultInfo: t, parentAppID: n });
}
function fK(e) {
  let { parentAppID: t, demoID: n, demoItemDefaultInfo: r } = e,
    i = Ra(t),
    a = vn(n),
    o = vn(i),
    s = iK(i),
    c = (0, R.useMemo)(() => sK(n, i, r, a, o, s), [n, i, r, s, a, o]);
  return (0, z.jsx)(mK, { rgTrailerAndImages: c });
}
function pK(e) {
  let { includeAppIDs: t } = e,
    n = Ca(),
    r = d({ queries: t.map((e) => xn(n, { appid: e })) }),
    i = d({ queries: t.map((e) => Tn(n, { appid: e })) }),
    a = (0, R.useMemo)(
      () =>
        r
          .map((e, t) => {
            let n = i[t].data,
              r = e.data;
            return nK(n, r);
          })
          .filter((e) => !!e),
      [r, i],
    );
  return (0, z.jsx)(mK, { rgTrailerAndImages: a });
}
function mK(e) {
  let { rgTrailerAndImages: t } = e,
    n = (0, R.useRef)(0),
    r = on(),
    [i] = R.useState(new ut()),
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
      className: Nc,
      children: t?.map((e, t) =>
        (0, z.jsx)(
          `div`,
          {
            className: P({ [Pc]: !0, [Fc]: t != n.current }),
            children: e.rctImage,
          },
          `e-` + t + `-` + e.stringifyID,
        ),
      ),
    })
  );
}
var hK = `ghYXSqVPJ-U-`,
  gK = `lx1fe7xI0bg-`,
  _K = `ARp2qEoElPE-`,
  vK = `DwDon-U2yLI-`,
  yK = 150,
  bK = R.createContext(void 0);
function xK() {
  return R.useContext(bK);
}
function SK(e) {
  let {
      hoverContent: t,
      hoverProps: n,
      nDelayShowMs: r,
      nWidthMultiplier: i,
      children: a,
      className: o,
    } = e,
    s = Te(),
    c = A(),
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
    className: P(hK, o),
    "data-hovered": u || void 0,
    onMouseEnter: m,
    onMouseLeave: h,
    onTouchStart: () => d(!1),
    onKeyDown: (e) => {
      e.keyCode == 27 && (d(!1), e.preventDefault(), e.stopPropagation());
    },
    children: [
      l &&
        f &&
        (0, z.jsx)(bK.Provider, {
          value: g,
          children: (0, z.jsx)(CK, {
            visible: u,
            target: f,
            nDelayShowMs: r,
            nWidthMultiplier: i,
            hoverProps: n,
            children: t,
          }),
        }),
      (0, z.jsx)(vr, { children: a }),
    ],
  });
}
function CK(e) {
  let {
      hoverProps: t,
      nDelayShowMs: n = yK,
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
        if (Rt()) return;
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
        minHeight: TK() == `hiding` ? void 0 : 300,
        height: TK() == `hiding` ? i.clientWidth * 1.15 * (125 / 184) : void 0,
        ...t?.style,
      },
      target: i,
    };
  return (0, z.jsx)(wK, {
    hoverProps: u,
    children: (0, z.jsx)(vr, { children: o }),
  });
}
function wK(e) {
  let { hoverProps: t, children: n } = e,
    r = R.useCallback((e) => e?.focus(), []);
  return (0, z.jsx)(ke, {
    ...t,
    children: (0, z.jsx)(Se, {
      timeout: 500,
      in: !0,
      appear: !0,
      classNames: { appearActive: P(_K, Lc), enterDone: P(vK, Rc) },
      children: (e) =>
        (0, z.jsx)(`div`, {
          ref: Un(e, r),
          className: gK,
          tabIndex: -1,
          children: n,
        }),
    }),
  });
}
function TK() {
  return window.sessionStorage?.getItem(EK) || `default`;
}
var EK = `DEBUG_UseNewGameHover`;
function DK(e) {
  window.sessionStorage.setItem(EK, e);
}
window.SetHoverPresentation = DK;
var OK = R.createContext(void 0);
function kK() {
  return R.useContext(OK);
}
function AK(e, t, n, r) {
  if (r === void 0 || n.length <= 1 || !v(e, t, void 0)) return n;
  let i = Oa(r + (t.unique_id ?? 0));
  return Di([...n], t.random_order_top_x ?? 0, i);
}
function jK(e, t, n, r) {
  if (t.length <= n) return t;
  if (r === void 0) return t.slice(0, n);
  let i = Oa(r + (e.unique_id ?? 0));
  return Di([...t], 0, i).slice(0, n);
}
async function MK(e, t) {
  let n = br(I.STORE_BASE_URL, t, F.country_code);
  return ((await (await fetch(n)).json()).rgRecommendedApps ?? []).map(Number);
}
function NK() {
  let e = ua(),
    t = F.accountid;
  return m(PK(e, t));
}
function PK(e, t) {
  return {
    queryKey: FK(t),
    queryFn: async () => (t ? MK(e, t) : []),
    staleTime: 6e5,
  };
}
function FK(e) {
  return [`AccountRecommendedApps`, e ?? 0];
}
var IK = 100;
function LK(e, t, n, r, i = 1) {
  return {
    queryKey: [`AccountRecommendedAppsOnSale`, r ?? 0, n.cacheScope ?? ``, i],
    queryFn: async () => {
      if (!r) return [];
      let a = (await e.fetchQuery(PK(t, r))).slice(0, IK),
        o = await Promise.all(a.map((t) => e.fetchQuery(Tn(n, { appid: t }))));
      return a.filter(
        (e, t) => (o[t]?.best_purchase_option?.discount_pct ?? 0) >= i,
      );
    },
    staleTime: 6e5,
  };
}
function RK(e) {
  return e.section_type === `crosspromotesalepage`
    ? (e.sale_page_cross_promo_sales ?? [])
    : [];
}
function zK(e) {
  return RK(e).map((t) => ({
    ...e,
    sale_page_cross_promo_sales: [t],
    capsules: t.capsules ?? [],
  }));
}
function BK(e) {
  return RK(e)[0]?.event_gid || void 0;
}
function VK(e) {
  return RK(e).flatMap((e) => e.event_gid || []);
}
function HK(e) {
  return RK(e)[0]?.featured_app_tagid || void 0;
}
function UK(e) {
  let t = RK(e);
  return t.length > 0 && t.every((e) => (e.capsules?.length ?? 0) > 0);
}
function WK(e, t) {
  return GK(e) ? (t?.BIsVisibleEvent() ? null : `missing`) : `setup`;
}
function GK(e) {
  let t = RK(e)[0];
  return t?.creator_clan_account_id
    ? !!t.capsules?.length
    : !!t?.event_gid && (!!t.featured_app_tagid || !!t.capsules?.length);
}
function KK(e, t) {
  return e
    ? L(`#Sale_CrossPromoSale_SectionTitle`, e.GetNameWithFallback(t) ?? ``)
    : L(`#Sale_CrossPromoSale_DefaultSectionTitle`);
}
function qK(e, t) {
  let n = Me.GetELanguageFallback(t),
    r =
      e.jsondata.localized_sale_cross_promo_logo_image?.findIndex((e) => !!e) ??
      -1;
  return (
    e.GetImageURL(`sale_cross_promo_logo`, t) ||
    e.GetImageURL(`sale_cross_promo_logo`, n) ||
    (r >= 0 ? e.GetImageURL(`sale_cross_promo_logo`, r) : void 0) ||
    e.GetImageURL(`sale_logo`, t) ||
    e.GetImageURL(`sale_logo`, n)
  );
}
function JK(e) {
  return 3;
}
function YK(e) {
  return e.type !== `sub` && e.type !== `bundle`;
}
function XK(e, t, n, r) {
  let i = [];
  for (let a of e)
    if ((!t || t.has(a)) && !n(a) && (i.push(a), i.length >= r)) break;
  return i;
}
function ZK(e, t, n, r = new Set()) {
  for (let t of e.GetSaleSections())
    if (!(!b(t.section_type) || (n && !n.BIncludeSection(t))))
      for (let e of t.capsules) YK(e) && r.add(e.id);
  for (let e of t ?? []) {
    let t = e.capsule;
    YK(t) && (!n || n.BIncludeLinkedCapsule(t)) && r.add(t.id);
  }
  return r;
}
function QK(e, t, n) {
  return {
    nSaleTagID: e.BUsesContentHubForItemSource()
      ? void 0
      : e.featured_app_tagid,
    strContentHubType: e.GetContentHubType(),
    strContentHubCategory: e.GetContentHubCategory(),
    nContentHubTagID: e.GetContentHubTag(),
    bDiscountsOnly: e.BContentHubDiscountedOnly(),
    bPrioritizeDiscounts: t,
    strOptInName: e.jsondata.prune_list_optin_name,
    nOptInTagID: e.jsondata.optin_tagid,
    nPruneTagID: e.jsondata.optin_prune_tagid,
    bOptInOnly: e.jsondata.optin_only,
    nCreatorClanAccountId: n ? e.clanSteamID.GetAccountID() : void 0,
  };
}
var $K = 4;
function eq(e) {
  return e
    .GetSaleSections()
    .filter((e) => b(e.section_type) && y(e) === `personalized_carousel`);
}
function tq(e) {
  return eq(e)[0];
}
function nq(e) {
  if (e.appid()) return { id: e.appid(), type: `game` };
  if (e.bundleid()) return { id: e.bundleid(), type: `bundle` };
  if (e.packageid()) return { id: e.packageid(), type: `sub` };
}
function rq(e, t, n, r, i, a, o) {
  let s = eq(n),
    c = {
      rgSections: s.map((e) => ({
        eSort: e.smart_section_personalized_carousel_sort ?? 13,
        nMinItems: e.smart_section_personalized_carousel_min_items ?? $K,
        bRandomize: !!e.smart_section_personalized_carousel_randomize,
        bIncludePackages: e.smart_section_include_packages,
        bIncludeBundles: e.smart_section_include_bundles,
        bIncludeDLC: e.smart_section_include_dlc,
        nMinDiscountPercent:
          e.smart_section_min_discount_percent === void 0 ? void 0 : FJ(e),
      })),
      storePageFilter: QK(n, !!s[0]?.prioritize_discounts, r),
      strStoreFilterJSON: s[0] ? _(s[0]) : void 0,
      strTabStoreFilterJSON: a ? JSON.stringify(a) : void 0,
    };
  return {
    queryKey: [
      `SaleTech`,
      `PersonalizedCarousels`,
      i,
      t.country,
      t.language,
      JSON.stringify(c),
    ],
    queryFn: () => iq(e, t, c, i, o),
    staleTime: 1 / 0,
  };
}
async function iq(e, t, n, r, i) {
  if (!r || n.rgSections.length === 0) return [];
  let a = tn.Init(Li);
  for (let e of n.rgSections) {
    let t = a.Body().add_sections();
    (t.set_sort(e.eSort),
      t.set_min_items(e.nMinItems),
      t.set_randomize(e.bRandomize),
      t.set_include_packages(!!e.bIncludePackages),
      t.set_include_bundles(!!e.bIncludeBundles),
      t.set_include_dlc(e.bIncludeDLC),
      t.set_min_discount_percent(e.nMinDiscountPercent));
  }
  for (let e of i ?? []) {
    let t = a.Body().add_recommended_tags();
    (t.set_tagid(e.tagid), t.set_name(e.name));
  }
  (a.Body().set_context(gi(t)),
    a.Body().set_filters(Br(n.storePageFilter, !1)),
    n.strStoreFilterJSON &&
      a
        .Body()
        .filters(!0)
        .add_store_filters()
        .set_filter_json(n.strStoreFilterJSON),
    n.strTabStoreFilterJSON &&
      a
        .Body()
        .filters(!0)
        .add_store_filters()
        .set_filter_json(n.strTabStoreFilterJSON));
  let o = await Kr.GetItemsByUserRecommendedTags(e, a);
  if (o.GetEResult() != 1)
    throw Error(`GetItemsByUserRecommendedTags failed: ${o.GetEResult()}`);
  return o
    .Body()
    .sections()
    .map((e) => ({
      strTagName: e.tag_name() ?? ``,
      rgCapsules: e.store_item_ids().flatMap((e) => {
        let t = nq(e);
        return t ? [t] : [];
      }),
    }));
}
function aq(e, t) {
  let n = t
    .GetSaleSections()
    .filter((e) => b(e.section_type) && y(e) == `personalized_carousel`);
  if (n.length == 0) return { nNumSections: 0, nSectionIndex: -1 };
  let r = n.findIndex((t) => t.unique_id == e.unique_id);
  return { nNumSections: n.length, nSectionIndex: r };
}
var oq = 1778623200;
function sq(e, t) {
  let n = !1;
  return (
    e && e.GetEventType() == 36
      ? (n = !0)
      : e && t && t.is_creator_home && (n = cq(e, t)),
    n
  );
}
function cq(e, t) {
  return !!t && !!t.is_creator_home && (e.createTime ?? 0) > oq;
}
function lq(e) {
  return y(e) === `frame_compatibility` ? `frame` : `deck`;
}
function uq(e, t) {
  let n = e.smart_section_deck_compatibility ?? 3;
  switch (n) {
    case 3:
      return t.verifiedList ?? [];
    case 2:
      return t.playableList ?? [];
    case 1:
      return t.unsupportedList ?? [];
    case 0:
      return t.unknownList ?? [];
  }
  return (
    console.error(
      `GetAppsForSectionCompatCategory: unexpected compatibility category ${n}`,
    ),
    []
  );
}
var dq = [
    {
      nOptInTagID: 9,
      rgChildren: [
        { nTagID: In },
        { nTagID: Xt },
        { nTagID: zt },
        { nTagID: rn },
        { nTagID: di },
        { nTagID: ni },
        { nTagID: Lr },
        { nTagID: ft },
        { nTagID: Ct },
      ],
    },
    {
      nOptInTagID: 19,
      rgChildren: [
        { nTagID: Jn },
        { nTagID: Ea },
        { nTagID: Qr },
        { nTagID: tr },
        { nTagID: ir },
        { nTagID: Yt },
        { nTagID: qe },
        { nTagID: fa },
        { nTagID: Ue },
      ],
    },
    {
      nOptInTagID: 21,
      rgChildren: [
        { nTagID: Jn },
        { nTagID: it },
        { nTagID: Jr },
        { nTagID: ji },
        { nTagID: It },
        { nTagID: rr },
        { nTagID: ti },
        { nTagID: Ie },
      ],
    },
    {
      nOptInTagID: 122,
      rgChildren: [
        { nTagID: tr },
        { nTagID: Wt },
        { nTagID: mi },
        { nTagID: et },
        { nTagID: pt },
        { nTagID: di },
        { nTagID: yr },
      ],
    },
    {
      nOptInTagID: 599,
      rgChildren: [
        { nTagID: Pi },
        { nTagID: Gr },
        { nTagID: mt },
        { nTagID: Je },
        { nTagID: Ft },
        { nTagID: Hi },
        { nTagID: fn },
        { nTagID: dn },
        { nTagID: Le },
        { nTagID: ta },
        { nTagID: ti },
      ],
    },
    {
      nOptInTagID: 699,
      rgChildren: [
        { nTagID: Qr },
        { nTagID: nr },
        { nTagID: Pr },
        { nTagID: vi },
        { nTagID: rt },
      ],
    },
    {
      nOptInTagID: 701,
      rgChildren: [
        { nTagID: Qr },
        { nTagID: Hi },
        { nTagID: 599 },
        { nTagID: Yr },
        { nTagID: lr },
        { nTagID: Bi },
        { nTagID: $r },
      ],
    },
    {
      nOptInTagID: Hn,
      rgChildren: [
        { nTagID: Mn },
        { nTagID: Bn },
        { nTagID: ia },
        { nTagID: Pr },
        { nTagID: Yi },
      ],
    },
    {
      nOptInTagID: ki,
      rgChildren: [
        { nTagID: xa },
        { nTagID: Nn },
        { nTagID: Wn },
        { nTagID: ba },
        { nTagID: Pt },
        { nTagID: rr },
        { nTagID: Yi },
      ],
    },
    {
      nOptInTagID: oa,
      rgChildren: [
        { eContentDescriptor: 3 },
        { nTagID: Gr },
        { nTagID: yt },
        { nTagID: yn },
        { nTagID: Xn },
        { nTagID: ba },
        { nTagID: _r },
      ],
    },
  ],
  fq = [
    {
      nTagID: ze,
      rgChildren: [
        { nTagID: 122 },
        { nTagID: 9 },
        { nTagID: 597 },
        { nTagID: 19 },
        { nTagID: 21 },
        { nTagID: 599 },
        { nTagID: yi },
      ],
    },
    {
      nTagID: Ht,
      rgChildren: [
        { nTagID: 122 },
        { nTagID: 9 },
        { nTagID: 597 },
        { nTagID: 19 },
        { nTagID: 21 },
        { nTagID: 599 },
        { nTagID: Ar },
        { nTagID: Ee },
      ],
    },
    {
      nTagID: Oe,
      rgChildren: [
        { nTagID: 9 },
        { nTagID: 122 },
        { nTagID: 19 },
        { nTagID: 21 },
        { nTagID: 597 },
        { nTagID: 599 },
      ],
    },
    {
      nTagID: ga,
      rgChildren: [
        { nTagID: Hr },
        { nTagID: 19 },
        { nTagID: Oi },
        { nTagID: _r },
        { nTagID: ti },
      ],
    },
    {
      nTagID: Ur,
      rgChildren: [
        { nTagID: ki },
        { nTagID: pa },
        { nTagID: 599 },
        { nTagID: 21 },
        { nTagID: rr },
        { nTagID: zi },
        { nTagID: ct },
        { nTagID: Hi },
      ],
    },
    {
      nTagID: ba,
      rgChildren: [
        { nTagID: 21 },
        { nTagID: ki },
        { nTagID: It },
        { nTagID: jt },
        { nTagID: xr },
      ],
    },
    {
      eContentDescriptor: 3,
      rgChildren: [
        { nTagID: oa },
        { nTagID: yt },
        { nTagID: ki },
        { nTagID: Ta },
        { nTagID: dt },
      ],
    },
  ],
  pq = [
    {
      strOptInTag: `option_58733`,
      rgChildren: [
        { nTagID: fi },
        { nTagID: wr },
        { nTagID: ei },
        { nTagID: 128 },
        { nTagID: Dn },
      ],
    },
    {
      strOptInTag: `option_40066`,
      rgChildren: [
        { nTagID: fi },
        { nTagID: wr },
        { nTagID: ei },
        { nTagID: Dn },
      ],
    },
    { strAppType: `software` },
    { strFeature: `vr` },
    { strFeature: `mac` },
  ],
  mq = {
    linux: `#Platform_Linux`,
    mac: `#Platform_Mac`,
    vr: `#Platform_VR`,
    "vr only": `#Sale_Tabs_TagFilter_Feature_VROnly`,
    free: `#Sale_Tabs_TagFilter_Feature_Free`,
    discounted: `#Sale_Tabs_TagFilter_Feature_Discounted`,
    "xbox controller": `#ControllerSupportLabelTitle`,
    "full controller": `#Store_ControllerFilter_Xbox`,
    "ps4 controller": `#Store_ControllerFilter_PS4`,
    "ps5 controller": `#Store_ControllerFilter_PS5`,
    "remote play together": `#Sale_Tabs_TagFilter_Feature_RemotePlayTogether`,
    "steam deck verified": `#Sale_Tabs_TagFilter_Feature_SteamDeckVerified`,
  },
  hq = [
    {
      strClass: `genre`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Genre`,
      rgNodes: dq,
    },
    {
      strClass: `theme`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Theme`,
      rgNodes: fq,
    },
    {
      strClass: `feature`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Feature`,
      rgNodes: pq,
    },
  ];
function gq(e) {
  return e?.rgNodes
    ? e.rgNodes
    : (hq.find((t) => t.strClass === e?.tag_class)?.rgNodes ?? []);
}
function _q(e) {
  return e.nTagID
    ? String(e.nTagID)
    : e.nOptInTagID || e.strOptInTag
      ? `optin:` + Tq(e)
      : e.eContentDescriptor
        ? `descriptor:` + e.eContentDescriptor
        : e.strFeature
          ? `feature:` + e.strFeature
          : `apptype:` + e.strAppType;
}
function vq(e) {
  if (e.strFeature) return mq[e.strFeature];
  if (e.strAppType) return `#AppTypeLabel_` + e.strAppType;
}
function yq(e) {
  if (e)
    return e.strChildKey
      ? e.strParentKey + `,` + e.strChildKey
      : e.strParentKey;
}
var bq = `tabtag`,
  xq = `tabsubtag`;
function Sq(e, t) {
  if (e) return { strParentKey: e, strChildKey: t || void 0 };
}
function Cq(e) {
  return { [bq]: e?.strParentKey ?? null, [xq]: e?.strChildKey ?? null };
}
function wq(e, t, n) {
  let r = () => {
    if (!t?.bNoAllOption) return;
    let e = gq(t).find(n);
    return e ? { strParentKey: _q(e) } : void 0;
  };
  if (!e) return r();
  let i = Dq(gq(t), e.strParentKey);
  if (!i || !n(i)) return r();
  if (!e.strChildKey) return e;
  let a = Dq(i.rgChildren ?? [], e.strChildKey);
  return !a || !n(a) ? { strParentKey: e.strParentKey } : e;
}
function Tq(e) {
  return e.strOptInTag ?? String(e.nOptInTagID);
}
function Eq(e, t) {
  return e.nOptInTagID || e.strOptInTag
    ? (qi(t, `Opt-in registration tag used on a sale without an opt-in`),
      {
        type: w.k_EStoreFilterClauseTypeOptInRegistrationTag,
        optin: t,
        value: Tq(e),
      })
    : e.nTagID
      ? { type: w.k_EStoreFilterClauseTypeStoreTag, value: e.nTagID }
      : e.eContentDescriptor
        ? {
            type: w.k_EStoreFilterClauseTypeContentDescriptor,
            value: e.eContentDescriptor,
          }
        : e.strFeature
          ? { type: w.k_EStoreFilterClauseTypeFeatureTag, value: e.strFeature }
          : { type: w.k_EStoreFilterClauseTypeAppType, value: e.strAppType };
}
function Dq(e, t) {
  return e.find((e) => _q(e) === t);
}
function Oq(e, t, n) {
  if (!e) return;
  let r = Dq(gq(t), e.strParentKey);
  if (!r) return;
  if (!e.strChildKey) return Eq(r, n);
  let i = Dq(r.rgChildren ?? [], e.strChildKey);
  if (i)
    return {
      type: w.k_EStoreFilterClauseTypeAnd,
      rgSubexpressions: [Eq(r, n), Eq(i, n)],
    };
}
function kq() {
  let [e] = Rq(`tab`),
    t = R.useCallback((e, t) => Bq({ ...t, tab: String(e) }), []);
  return [Aq(e), t];
}
function Aq(e) {
  return e === null ? 0 : Number(e);
}
function jq(e) {
  let t = R.useContext(Mq),
    [n] = kq();
  return Nq(e, t?.nTabUniqueID ?? n);
}
var Mq = R.createContext(void 0);
(R.createContext(void 0), R.createContext(void 0));
function Nq(e, t) {
  let n = Pq(e);
  return n.find((e) => e.unique_id === t) ?? n[0];
}
function Pq(e) {
  return (
    e.GetSaleSectionFirstMatchByType(`tabs`)?.tabs?.filter((e) => !e.hide) ?? []
  );
}
function Fq(e, t, n, r) {
  if (!n || t.diable_tab_id_filtering) return;
  let i = e.jsondata.sale_opt_in_page_name || e.jsondata.prune_list_optin_name,
    a = Oq(r, n.tab_tag_filter, i),
    o =
      n.store_filter && a
        ? {
            type: w.k_EStoreFilterClauseTypeAnd,
            rgSubexpressions: [n.store_filter, a],
          }
        : (n.store_filter ?? a);
  if (o) return Iq(e, t, n) ? o : void 0;
}
function Iq(e, t, n) {
  let r = e.GetSaleSections(),
    i = r.findIndex((e) => e.section_type === `tabs`);
  return i < 0 || !r[i].tabs?.includes(n) ? !1 : r.indexOf(t) > i;
}
function Lq(e, t) {
  let n = jq(e);
  return !n || n === Pq(e)[0] || t.diable_tab_id_filtering || !Iq(e, t, n)
    ? ``
    : `tabid${n.unique_id}`;
}
function Rq(e) {
  let t = R.useSyncExternalStore(Pe, zq, zq);
  return [
    new URLSearchParams(t).get(e),
    R.useCallback((t) => Bq({ [e]: t ?? null }), [e]),
  ];
}
function zq() {
  return location.search;
}
function Bq(e) {
  let t = new URL(window.location.href);
  for (let [n, r] of Object.entries(e))
    r === null ? t.searchParams.delete(n) : t.searchParams.set(n, r);
  t.href !== window.location.href && si((e) => e, t);
}
function Vq(e) {
  let t = R.useContext(Mq),
    n = jq(e),
    r = Hq(),
    [i] = Rq(bq),
    [a] = Rq(xq),
    o = R.useCallback((e, t) => Bq({ ...t, ...Cq(e) }), []);
  return [wq(t ? t.tagSelection : Sq(i, a), n?.tab_tag_filter, r), o];
}
function Hq() {
  let { data: e } = Cn();
  return R.useMemo(() => Uq(e), [e]);
}
function Uq(e) {
  let t = !!F.logged_in && I.EREALM !== nn.k_ESteamRealmChina && e !== void 0,
    n = new Set(He(e));
  return (e) => !e.eContentDescriptor || (t && !n.has(e.eContentDescriptor));
}
function Wq(e, t) {
  let n = jq(e),
    [r] = Vq(e);
  return Fq(e, t, n, r);
}
var Gq = 50;
function Kq(e, t, n) {
  let { defaultInfo: r } = t;
  switch (e.type) {
    case w.k_EStoreFilterClauseTypeStoreTag:
      return !!t.tags?.some((t) => t.tagid === e.value);
    case w.k_EStoreFilterClauseTypeFeatureTag:
      switch (e.value) {
        case `linux`:
          return !!t.platforms?.steamos_linux;
        case `mac`:
          return !!t.platforms?.mac;
        case `vr`:
          return !!t.platforms?.vr_support?.vrhmd;
        case `vr only`:
          return !!t.platforms?.vr_support?.vrhmd_only;
        case `free`:
          return !!r?.is_free;
        case `discounted`:
          return (r?.best_purchase_option?.discount_pct ?? 0) > 0;
        default:
          return !1;
      }
    case w.k_EStoreFilterClauseTypeAppType:
      return (
        (r?.item_type !== void 0 && r.type !== void 0
          ? Ii(r.item_type, r.type)
          : `game`) === e.value
      );
    case w.k_EStoreFilterClauseTypeLanguage: {
      let n = qt(String(e.value));
      return !!t.supportedLanguages?.some(
        (e) =>
          e.elanguage === n && (e.supported || e.subtitles || e.full_audio),
      );
    }
    case w.k_EStoreFilterClauseTypeContentDescriptor:
      return !!r?.content_descriptorids?.some((t) => t === e.value);
    case w.k_EStoreFilterClauseTypePrice: {
      let t = r?.free_weekend,
        i = !!t && (t.start_time ?? 1 / 0) <= n && n <= (t.end_time ?? 0),
        a = r?.best_purchase_option?.final_price_in_cents,
        o = a ? Number.parseInt(a) : 1 / 0;
      return (
        !!r?.is_free ||
        !!r?.is_free_temporarily ||
        i ||
        o <= Number(e.value) * 100
      );
    }
    case w.k_EStoreFilterClauseTypeOr: {
      let r = e.rgSubexpressions?.some((e) => Kq(e, t, n)) ?? !1;
      return e.bNegated ? !r : r;
    }
    case w.k_EStoreFilterClauseTypeAnd: {
      let r = e.rgSubexpressions?.every((e) => Kq(e, t, n)) ?? !1;
      return e.bNegated ? !r : r;
    }
    case w.k_EStoreFilterClauseTypeOptInRegistrationTag:
      return !!(
        e.optin &&
        t.optInRegistrationTags
          ?.find((t) => t.optin_name === e.optin)
          ?.values?.includes(String(e.value))
      );
    default:
      return !0;
  }
}
function qq(e, t, n, r, i) {
  return {
    queryKey: [
      `StoreFilterPassingApps`,
      t.cacheScope,
      r && JSON.stringify(r),
      i,
      n,
    ],
    queryFn: () => Yq(e, t, n, (e) => ({ appid: e }), r, i),
    enabled: !!(n && r),
    staleTime: 6e5,
  };
}
function Jq(e, t, n, r, i) {
  return {
    queryKey: [
      `StoreFilterPassingItems`,
      t.cacheScope,
      r && JSON.stringify(r),
      i,
      n?.map(Or),
    ],
    queryFn: () => Yq(e, t, n, (e) => e, r, i),
    enabled: !!(n && r),
    staleTime: 6e5,
  };
}
async function Yq(e, t, n, r, i, a) {
  let o = Xq(i, {
      bTags: !1,
      bPlatforms: !1,
      bLanguages: !1,
      bOptInRegistrationTags: !1,
    }),
    s = Math.floor(Date.now() / 1e3),
    c = [];
  for (let l = 0; l < n.length && c.length < a; l += Gq) {
    let u = n.slice(l, l + Gq),
      d = await Promise.all(u.map((n) => Zq(e, t, r(n), o)));
    u.forEach((e, t) => {
      c.length < a && Kq(i, d[t], s) && c.push(e);
    });
  }
  return c;
}
function Xq(e, t) {
  switch (e.type) {
    case w.k_EStoreFilterClauseTypeStoreTag:
      t.bTags = !0;
      break;
    case w.k_EStoreFilterClauseTypeFeatureTag:
      t.bPlatforms = !0;
      break;
    case w.k_EStoreFilterClauseTypeLanguage:
      t.bLanguages = !0;
      break;
    case w.k_EStoreFilterClauseTypeOptInRegistrationTag:
      t.bOptInRegistrationTags = !0;
      break;
    case w.k_EStoreFilterClauseTypeOr:
    case w.k_EStoreFilterClauseTypeAnd:
      e.rgSubexpressions?.forEach((e) => Xq(e, t));
  }
  return t;
}
async function Zq(e, t, n, r) {
  let [i, a, o, s, c] = await Promise.all([
    e.fetchQuery(Tn(t, n)).catch(() => void 0),
    r.bTags ? e.fetchQuery(ln(t, n)).catch(() => null) : null,
    r.bPlatforms ? e.fetchQuery(Kt(t, n)).catch(() => null) : null,
    r.bLanguages ? e.fetchQuery(Vt(t, n)).catch(() => null) : null,
    r.bOptInRegistrationTags ? e.fetchQuery(en(t, n)).catch(() => null) : null,
  ]);
  return {
    defaultInfo: i,
    tags: a,
    platforms: o,
    supportedLanguages: s,
    optInRegistrationTags: c,
  };
}
var Qq = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.count || ui(e.M()),
        B.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            count: { n: 1, br: Ir.readInt32, bw: Vr.writeInt32 },
            additional_source_items: { n: 2, c: Qe, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= Mi(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return qr(e.M(), t, n);
    }
    static fromObject(t) {
      return kr(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return la(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendations_Request`;
    }
  },
  $q = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recommendations || ui(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { recommendations: { n: 1, c: eJ, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= Mi(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return qr(e.M(), t, n);
    }
    static fromObject(t) {
      return kr(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return la(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendations_Response`;
    }
  },
  eJ = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_id || ui(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_id: { n: 1, c: Qe },
            weight: { n: 2, br: Ir.readFloat, bw: Vr.writeFloat },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= Mi(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return qr(e.M(), t, n);
    }
    static fromObject(t) {
      return kr(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return la(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendations_Response_Recommendation`;
    }
  },
  tJ = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.count || ui(e.M()),
        B.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            count: { n: 1, br: Ir.readInt32, bw: Vr.writeInt32 },
            item_ids: { n: 2, c: Qe, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= Mi(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return qr(e.M(), t, n);
    }
    static fromObject(t) {
      return kr(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return la(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendationsForItems_Request`;
    }
  },
  nJ = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recommendations || ui(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { recommendations: { n: 1, c: rJ, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= Mi(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return qr(e.M(), t, n);
    }
    static fromObject(t) {
      return kr(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return la(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendationsForItems_Response`;
    }
  },
  rJ = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_id || ui(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_id: { n: 1, c: Qe },
            weight: { n: 2, br: Ir.readFloat, bw: Vr.writeFloat },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= Mi(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return qr(e.M(), t, n);
    }
    static fromObject(t) {
      return kr(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return la(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendationsForItems_Response_Recommendation`;
    }
  },
  iJ = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.start || ui(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            start: { n: 1, br: Ir.readUint32, bw: Vr.writeUint32 },
            count: { n: 2, br: Ir.readUint32, bw: Vr.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= Mi(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return qr(e.M(), t, n);
    }
    static fromObject(t) {
      return kr(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return la(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetLiveSales_Request`;
    }
  },
  aJ = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sales || ui(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sales: { n: 1, c: oJ, r: !0, q: !0 },
            total_count: { n: 2, br: Ir.readUint32, bw: Vr.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= Mi(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return qr(e.M(), t, n);
    }
    static fromObject(t) {
      return kr(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return la(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetLiveSales_Response`;
    }
  },
  oJ = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || ui(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: Ir.readUint32, bw: Vr.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: Ir.readFixed64String,
              bw: Vr.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= Mi(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return qr(e.M(), t, n);
    }
    static fromObject(t) {
      return kr(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return la(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetLiveSales_Response_Sale`;
    }
  },
  sJ;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `StoreRecommendations.GetPackagePurchaseRecommendations#1`,
      li(Qq, t, n),
      $q,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetPackagePurchaseRecommendations = t;
  function n(e, t, n) {
    return e.SendMsg(
      `StoreRecommendations.GetPackagePurchaseRecommendationsForItems#1`,
      li(tJ, t, n),
      nJ,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetPackagePurchaseRecommendationsForItems = n;
  function r(e, t, n) {
    return e.SendMsg(`StoreRecommendations.GetLiveSales#1`, li(iJ, t, n), aJ, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.GetLiveSales = r;
})((sJ ||= {}));
var cJ = `saleaction/recommendeddiscounts`;
function lJ(e) {
  let t = new URLSearchParams(),
    { contentHub: n } = e;
  return (
    n &&
      (t.set(`hub_type`, n.strHubType),
      n.strCategory && t.set(`hub_category`, n.strCategory),
      n.nTagID && t.set(`hub_tagid`, String(n.nTagID))),
    t.toString()
  );
}
async function uJ(e, t, n) {
  let r = lJ(n),
    i = `${I.STORE_BASE_URL}${cJ}${r ? `?${r}` : ``}`,
    a = await fetch(i, { credentials: `include` });
  if (!a.ok) throw Error(`${i} answered ${a.status}`);
  let o = await a.json();
  if (o?.success !== 1 || !o.discounts)
    throw Error(`${i} answered EResult ${o?.success}`);
  return o.discounts;
}
var dJ = 6e5;
function fJ(e, t, n, r) {
  return {
    queryKey: [
      `RecommendedDiscounts`,
      n ?? 0,
      t.country,
      r ? JSON.stringify(r) : null,
    ],
    queryFn: () => uJ(e, t.country, { contentHub: r }),
    staleTime: dJ,
  };
}
function pJ(e, t) {
  return e.rgReasonLists.find((e) => e.eReason === t)?.rgAppIDs ?? [];
}
function mJ(e) {
  if (e.jsondata.item_source_type !== C.k_EContentHub) return;
  let t = e.GetContentHub();
  if (t?.type)
    return { strHubType: t.type, strCategory: t.category, nTagID: t.tagid };
}
function hJ(e, t) {
  let n = mJ(e),
    r = { contentHub: n, listStoreFilter: t, bTabTagHub: !1 };
  if (!t || n) return r;
  let i = vJ(t);
  if (!i) return r;
  let a = gJ(i[i.length - 1]);
  return a
    ? {
        contentHub: { strHubType: `tags`, nTagID: a },
        listStoreFilter: _J(i.slice(0, -1)),
        bTabTagHub: !0,
      }
    : r;
}
function gJ(e) {
  if (e.type !== w.k_EStoreFilterClauseTypeStoreTag || e.bNegated) return;
  let t = Number(e.value);
  if (!(!Number.isSafeInteger(t) || t <= 0)) return t;
}
function _J(e) {
  return e.length <= 1
    ? e[0]
    : { type: w.k_EStoreFilterClauseTypeAnd, rgSubexpressions: e };
}
function vJ(e) {
  if (e.type !== w.k_EStoreFilterClauseTypeAnd) return [e];
  if (e.bNegated || !e.rgSubexpressions?.length) return;
  let t = [];
  for (let n of e.rgSubexpressions) {
    let e = vJ(n);
    if (!e) return;
    t.push(...e);
  }
  return t;
}
function yJ(e, t, n) {
  if (t)
    return e.smart_section_discount_reason === void 0
      ? []
      : pJ(t, e.smart_section_discount_reason).slice(0, n);
}
var bJ = [
  {
    eReason: 1,
    strTitleToken: `#Sale_default_label_OnYourWishlist`,
    strSubtitleToken: `#Sale_Specials_Subtitle_Wishlist`,
  },
  {
    eReason: 2,
    strTitleToken: `#Sale_DiscountReason_Section_FirstTimeOnSale`,
    strSubtitleToken: `#Sale_Specials_Subtitle_FirstTimeOnSale`,
  },
  {
    eReason: 3,
    strTitleToken: `#Sale_DiscountReason_Section_LargestDiscount`,
    strSubtitleToken: `#Sale_Specials_Subtitle_LargestDiscount`,
  },
  {
    eReason: 4,
    strTitleToken: `#Sale_DiscountReason_Section_EndingSoon`,
    strSubtitleToken: `#Sale_Specials_Subtitle_EndingSoon`,
  },
  {
    eReason: 5,
    strTitleToken: `#Sale_DiscountReason_Section_NewlyOnSale`,
    strSubtitleToken: `#Sale_Specials_Subtitle_NewlyOnSale`,
  },
  {
    eReason: 6,
    strTitleToken: `#Sale_DiscountReason_Section_WellReviewed`,
    strSubtitleToken: `#Sale_Specials_Subtitle_WellReviewed`,
  },
  {
    eReason: 7,
    strTitleToken: `#Sale_DiscountReason_Section_TopSeller`,
    strSubtitleToken: `#Sale_Specials_Subtitle_TopSeller`,
  },
  {
    eReason: 8,
    strTitleToken: `#Sale_DiscountReason_Section_HotDeal`,
    strSubtitleToken: `#Sale_Specials_Subtitle_HotDeal`,
  },
  {
    eReason: 9,
    strTitleToken: `#Sale_DiscountReason_Section_DeepDiscount`,
    strSubtitleToken: `#Sale_Specials_Subtitle_DeepDiscount`,
  },
  {
    eReason: 10,
    strTitleToken: `#Sale_DiscountReason_Section_PopularInRegion`,
    strSubtitleToken: `#Sale_Specials_Subtitle_PopularInRegion`,
  },
];
function xJ(e) {
  return bJ.find((t) => t.eReason === e.smart_section_discount_reason);
}
function SJ(e) {
  return xJ(e)?.strTitleToken ?? ``;
}
function CJ(e) {
  return xJ(e)?.strSubtitleToken ?? ``;
}
function wJ(e, t) {
  return e.BUsesContentHubForItemSource() || !!t.hide_owned_items;
}
function TJ(e, t, n) {
  if (!e) return !1;
  let r = !n?.bHasHideIgnoredValue || n.bHideIgnored;
  return (e.ignored && r) ||
    (e.excluded_tagids?.length ?? 0) > 0 ||
    (e.excluded_content_descriptorids?.length ?? 0) > 0 ||
    (n?.bHideOwned && e.already_owned) ||
    (n?.bHideWishlisted && e.on_wishlist)
    ? !0
    : t && !!(e.already_owned || e.demo_for_owned_game);
}
function EJ(e) {
  return e.map((e) => e.data);
}
function DJ(e) {
  return e.map((e) => e.data?.visible === !1);
}
function OJ(e, t, n, r, i) {
  let a = Ca(),
    o = wJ(e, t),
    s = !!r?.bHideOwned,
    c = !!r?.bHideWishlisted,
    l = !!r?.bHideIgnored,
    u = !!r?.bHasHideIgnoredValue,
    f = d({
      queries: (n ?? []).map((e) => {
        let t = xt(a, XV(e));
        return i ? { ...t, enabled: !1 } : t;
      }),
      combine: EJ,
    }),
    p = d({
      queries: (n ?? []).map((e) => ({ ...Tn(a, XV(e)), enabled: !1 })),
      combine: DJ,
    });
  return (0, R.useMemo)(() => {
    if (!n) return { capsules: void 0, nHiddenCapsules: 0 };
    let e = {
        bHideOwned: s,
        bHideWishlisted: c,
        bHideIgnored: l,
        bHasHideIgnoredValue: u,
      },
      t = 0;
    return {
      capsules: n.filter((n, r) => {
        if (p[r]) return !1;
        let i = f[r];
        return !TJ(i, o, e) || ((!i?.already_owned || s) && t++, !1);
      }),
      nHiddenCapsules: t,
    };
  }, [n, f, p, o, s, c, l, u]);
}
function kJ(e) {
  let { capsules: t } = e,
    n = Ca();
  return (
    d({ queries: (t ?? []).map((e) => xt(n, XV(e))), combine: AJ }), null
  );
}
function AJ() {
  return null;
}
var jJ = {
    popularity: { eType: `game`, bDropsOwned: !1 },
    wishlist: { eType: `game`, bDropsOwned: !0 },
    interactive_recommender: { eType: `game`, bDropsOwned: !0 },
    wishlist_onsale: { eType: `game`, bDropsOwned: !0 },
    interactive_recommender_onsale: { eType: `game`, bDropsOwned: !0 },
    dlc_onsale: { eType: `dlc`, bDropsOwned: !0 },
    dlc_music_onsale: { eType: `music`, bDropsOwned: !0 },
    discount_reason: { eType: `game`, bDropsOwned: !1 },
  },
  MJ = 24,
  NJ = 100,
  PJ = 500;
function FJ(e) {
  return Math.max(1, e.smart_section_min_discount_percent ?? 1);
}
function IJ(e) {
  return LJ(e) && jJ[e].bDropsOwned;
}
function LJ(e) {
  return e !== void 0 && e in jJ;
}
function RJ(e, t, n, r) {
  let i = y(n),
    a =
      i === `tag`
        ? { tagid: n.smart_section_tag }
        : i === `top_n`
          ? { top_n_sellers: PJ }
          : {};
  return (
    (a.min_discount_percent = FJ(n)),
    (a.include_packages = n.smart_section_include_packages),
    (a.include_bundles = n.smart_section_include_bundles),
    (a.include_dlc = n.smart_section_include_dlc),
    r && (a.store_filter_json = JSON.stringify(r)),
    Aa(
      e,
      t,
      a,
      i === `tag` && n.random_from_entire_set
        ? NJ
        : n.smart_section_max_apps || MJ,
    )
  );
}
function zJ(e, t, n, r) {
  return Na(
    e,
    t,
    {
      min_discount_percent: n.smart_section_min_discount_percent || void 0,
      store_filter_json: r ? JSON.stringify(r) : void 0,
    },
    KJ(n),
  );
}
function BJ(e, t) {
  if (UK(t)) return `manual`;
  if (t.section_type !== `items`) return;
  let n = y(t);
  if (t.enable_faceted_browsing) return n === void 0 ? `faceted` : void 0;
  if (n === void 0) return `manual`;
  if (
    (n === `deck_compatibility` || n === `frame_compatibility`) &&
    t.smart_section_data_source === `popularity`
  )
    return `popularity`;
  if (
    ((n === `wishlist` || n === `interactive_recommender`) &&
      e.jsondata.item_source_type !== C.k_EContentHub) ||
    n === `wishlist_onsale` ||
    n === `interactive_recommender_onsale` ||
    n === `dlc_onsale` ||
    n === `dlc_music_onsale`
  )
    return n;
  if (n === `tag` && t.smart_section_tag) return `tag`;
  if (n === `top_n`) return `top_n`;
  if (n === `all_discounted`) return `all_discounted`;
  if (n === `topwishlisted`) return `topwishlisted`;
  if (n === `personalized_carousel`) return `personalized_carousel`;
  if (n === `discount_reason`) return `discount_reason`;
}
function VJ(e, t, n) {
  let r = e.GetDayIndexFromEventStart(n);
  return t.capsules.filter(
    (e) => e.visibility_index === void 0 || e.visibility_index === r,
  );
}
function HJ(e, t, n) {
  return VJ(e, t, n).flatMap((e) => {
    let t = XV(e);
    return t ? [t] : [];
  });
}
function UJ(e, t, n, r, i) {
  let a = KJ(t),
    o = BJ(e, t);
  if (LJ(o)) {
    let n = jJ[o].eType;
    return (r.tabStoreFilter ? r.tabFilteredAppIDs : WJ(e, t, r, a))?.map(
      (e) => ({ id: e, type: n }),
    );
  }
  switch (o) {
    case `manual`: {
      let i = VJ(e, t, n);
      if (!r.tabStoreFilter) return i;
      if (!r.tabFilteredItems) return;
      let a = new Set(r.tabFilteredItems.map(Or));
      return i.filter((e) => {
        let t = XV(e);
        return t !== void 0 && a.has(Or(t));
      });
    }
    case `tag`:
    case `top_n`:
    case `all_discounted`: {
      if (!r.discountedItems) return;
      let e = r.discountedItems.map(ZV).filter((e) => !!e);
      return o === `tag` && t.random_from_entire_set
        ? jK(t, e, a, i)
        : e.slice(0, a);
    }
    case `topwishlisted`:
      return r.topWishlistedItems
        ?.map(ZV)
        .filter((e) => !!e)
        .slice(0, a);
    case `personalized_carousel`: {
      let n = qJ(e, t, r.personalizedCarousels)?.rgCapsules;
      return n && GJ(t, n).slice(0, a);
    }
    default:
      return;
  }
}
function WJ(e, t, n, r) {
  let i = BJ(e, t);
  if (LJ(i))
    switch (i) {
      case `popularity`:
        return n.compatAppList && uq(t, n.compatAppList).slice(0, r);
      case `wishlist`:
        return XJ(
          t,
          n.wishlistAppIDs,
          ZK(e, e.GetTaggedItems()),
          n.ownedAppIDs,
          r,
        );
      case `interactive_recommender`:
        return XJ(
          t,
          n.recommendedAppIDs,
          ZK(e, e.GetTaggedItems()),
          n.ownedAppIDs,
          r,
        );
      case `wishlist_onsale`:
        return XJ(t, n.wishlistOnSaleAppIDs, void 0, n.ownedAppIDs, r);
      case `interactive_recommender_onsale`:
        return XJ(t, n.recommendedOnSaleAppIDs, void 0, n.ownedAppIDs, r);
      case `dlc_onsale`:
        return XJ(t, n.ownedDLCOnSaleAppIDs, void 0, n.ownedAppIDs, r);
      case `dlc_music_onsale`:
        return XJ(t, n.ownedSoundtracksOnSaleAppIDs, void 0, n.ownedAppIDs, r);
      case `discount_reason`:
        return yJ(t, n.recommendedDiscounts, r);
      default:
        Sr(i, `GetSaleItemSectionAppList: fixed-list flavor with no list`);
        return;
    }
}
function GJ(e, t) {
  if (!e.smart_section_exclude_appids?.length) return t;
  let n = new Set(e.smart_section_exclude_appids);
  return t.filter((e) => e.type !== `game` || !n.has(e.id));
}
function KJ(e) {
  return e.smart_section_max_apps || MJ;
}
function qJ(e, t, n) {
  if (n) return n[aq(t, e).nSectionIndex] ?? null;
}
function JJ(e, t) {
  let n = BJ(e, t) === `personalized_carousel`;
  return YJ(e, tq(e) ?? t, n);
}
function YJ(e, t, n) {
  let r = ua(),
    i = s(),
    { storeBrowseContext: a } = pr(),
    o = jq(e),
    [c] = Vq(e),
    l = t ? Fq(e, t, o, c) : void 0,
    { data: u, isSuccess: d } = m({
      ...T(e.clanSteamID.GetAccountID(), i),
      enabled: n,
    }),
    { data: f } = m({
      ...rq(r, a, e, sq(e, u), F.accountid, l),
      enabled: n && d,
    });
  return f;
}
function XJ(e, t, n, r, i) {
  if (!t || !r) return;
  let a = new Set(e.smart_section_exclude_appids);
  return XK(t, n, (e) => r.has(e) || a.has(e), i);
}
function ZJ(e, t, n) {
  let r = !n,
    i = $H(),
    a = kK(),
    o = BJ(e, t),
    c = ua(),
    l = s(),
    { storeBrowseContext: u, dataLoader: d } = pr(),
    f = Wq(e, t),
    p = FJ(t),
    h = (0, R.useMemo)(() => hJ(e, f), [e, f]),
    g = o === `discount_reason` ? h.listStoreFilter : f,
    { data: _ } = m({ ...Ac(lq(t)), enabled: r && o === `popularity` }),
    { data: v } = m({ ...wi(c, F.accountid), enabled: r && o === `wishlist` }),
    { data: y } = m({
      ...PK(c, F.accountid),
      enabled: r && o === `interactive_recommender`,
    }),
    { data: b } = m({
      ...Ni(c, u, F.accountid, p),
      enabled: r && o === `wishlist_onsale`,
    }),
    { data: x } = m({
      ...LK(l, c, d, F.accountid, p),
      enabled: r && o === `interactive_recommender_onsale`,
    }),
    { data: S } = m({
      ...Za(l, c, u, F.accountid, `dlc`, p),
      enabled: r && o === `dlc_onsale`,
    }),
    { data: C } = m({
      ...Za(l, c, u, F.accountid, `music`, p),
      enabled: r && o === `dlc_music_onsale`,
    }),
    { data: w } = m({
      ...RJ(c, u, t, f),
      enabled: r && (o === `tag` || o === `top_n` || o === `all_discounted`),
    }),
    { data: T } = m({ ...zJ(c, u, t, f), enabled: r && o === `topwishlisted` }),
    E = JJ(e, t),
    { data: D } = m({
      ...fJ(c, u, F.accountid, h.contentHub),
      enabled: r && o === `discount_reason`,
    }),
    { data: O } = m({ ...Ua(c, F.accountid), enabled: r && IJ(o) }),
    k = (0, R.useMemo)(
      () => ({
        compatAppList: _,
        wishlistAppIDs: v,
        recommendedAppIDs: y,
        wishlistOnSaleAppIDs: b,
        recommendedOnSaleAppIDs: x,
        ownedDLCOnSaleAppIDs: S,
        ownedSoundtracksOnSaleAppIDs: C,
        discountedItems: w,
        topWishlistedItems: T,
        personalizedCarousels: E,
        recommendedDiscounts: D,
        ownedAppIDs: O,
        tabStoreFilter: g,
      }),
      [_, v, y, b, x, S, C, w, T, E, D, O, g],
    ),
    A = !!g && LJ(o),
    ee = (0, R.useMemo)(() => (A ? WJ(e, t, k, 1 / 0) : void 0), [A, e, t, k]),
    { data: te } = m({
      ...qq(l, d, ee, g, KJ(t)),
      enabled: r && A && ee !== void 0,
    }),
    j = !!f && o === `manual`,
    ne = (0, R.useMemo)(() => (j ? HJ(e, t, i) : void 0), [j, e, t, i]),
    { data: re } = m({
      ...Jq(l, d, ne, f, ne?.length ?? 0),
      enabled: r && j && ne !== void 0,
    });
  return (0, R.useMemo)(() => {
    let n = UJ(
      e,
      t,
      i,
      { ...k, tabFilteredAppIDs: te, tabFilteredItems: re },
      a,
    );
    return n && AK(e, t, n, a);
  }, [e, t, i, k, te, re, a]);
}
function QJ(e) {
  return (ZJ(e.event, e.section), null);
}
function $J(e, t) {
  let n = Ca(),
    r = d({
      queries: e.map((e) => {
        let r = xt(n, e);
        return t ? { ...r, enabled: !1 } : r;
      }),
      combine: eY,
    });
  return (0, R.useMemo)(() => {
    if (t || !r.some((e) => e === void 0))
      return e.filter((e, t) => !TJ(r[t], !1));
  }, [e, r, t]);
}
function eY(e) {
  return e.map((e) => e.data);
}
function tY(e) {
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
    l = a ? n : n ? nY(n, I.STORE_BASE_URL) : void 0,
    u = Wi(l);
  return u
    ? (0, z.jsx)(Xr, {
        href: u,
        target: I.IN_CLIENT || o ? void 0 : `_blank`,
        className: t,
        style: r,
        rel: `noopener noreferrer`,
        focusable: s,
        fnCanTakeFocus: c,
        children: i,
      })
    : (0, z.jsx)(`span`, { style: r, className: t, children: i });
}
function nY(e, t) {
  try {
    let n = new URL(t),
      r = new URL(e);
    return n.href.replace(/\/$/, ``) + r.pathname + r.search + r.hash;
  } catch {
    return ``;
  }
}
function rY(e) {
  let { section: t } = e;
  return !t.label_link || t.label_link_style
    ? null
    : (0, z.jsx)(`div`, {
        className: uU,
        children: (0, z.jsx)(tY, {
          url: t.label_link,
          children: M.Localize(`#btn_live_streams_all`),
        }),
      });
}
var iY = `KDJh8Ln6DTA-`,
  aY = `cwU-YKIjBO4-`,
  oY = {
    bFitToWindow: !0,
    bOverlapHorizontal: !0,
    bMatchWidth: !1,
    bShiftToFitWindow: !0,
    bDisablePopTop: !0,
  };
function sY(e) {
  let { setRemoteClientID: t, rgSessions: n } = e,
    r = (0, R.useCallback)(
      (e) => {
        n?.length &&
          Lt(
            (0, z.jsx)(cY, { sessions: n, setRemoteDownloadClientId: t }),
            e,
            oY,
          );
      },
      [t, n],
    );
  return n?.length
    ? (0, z.jsx)(`button`, {
        onClick: r,
        className: iY,
        children: (0, z.jsx)(uY, {}),
      })
    : null;
}
function cY({ sessions: e, setRemoteDownloadClientId: t }) {
  return (0, z.jsx)(`ul`, {
    className: aY,
    children: e.map((e) =>
      (0, z.jsx)(
        Pn,
        {
          onSelected: () => {
            t(e.client_instanceid);
          },
          children: L(
            `#GamesList_Client_Indicator`,
            lY(e.device_type) ?? ``,
            e.machine_name,
          ),
        },
        e.client_instanceid,
      ),
    ),
  });
}
function lY(e) {
  switch (e) {
    case 1:
      return L(`#Library_DeviceType_PC`);
    case 544:
      return L(`#Library_DeviceType_SteamDeck`);
    case 546:
      return L(`#Library_DeviceType_SteamMachine`);
    case ii:
      return L(`#Library_DeviceType_SteamFrame`);
    default:
      return;
  }
}
function uY(e) {
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
var dY = `O2hPihu9CRE-`,
  fY = `QhSrcq93V7k-`,
  pY = `_7MjE60RYT0Q-`,
  mY = `UlZXEOyFPCE-`,
  hY = `_8wO4Yx-lIIo-`,
  gY = `FA82eVIC918-`,
  _Y = `_0sgpZmAY-zs-`,
  vY = `RLntJ4QtQLU-`;
function yY(e) {
  let { appid: t } = e,
    n = Ra(t),
    { data: r } = jn(n),
    [i, a, o] = vt(!1),
    { mutateAsync: s } = wc({ appid: t }),
    [c, l] = (0, R.useState)(!1),
    u = Ga(t);
  return !r || u
    ? null
    : (0, z.jsxs)(z.Fragment, {
        children: [
          (0, z.jsxs)(oo, {
            onClick: async () => {
              try {
                (l(!0), await s(), ha(), l(!1), a());
              } catch (e) {
                (l(!1),
                  console.error(
                    `Error AddToLibraryActionWithRemoteInstall`,
                    e,
                  ));
              }
            },
            children: [
              c && (0, z.jsx)(ce, { size: `small` }),
              L(`#Sale_AddToLibrary_NoPlus`),
            ],
          }),
          (0, z.jsx)(vr, {
            children: (0, z.jsx)(Sa, {
              active: i,
              children: (0, z.jsx)(bt, {
                strTitle: L(`#Sale_AddedToLibrary`),
                strDescription: Cr(
                  `#Sale_AddToLibrary_DialogDesc`,
                  (0, z.jsx)(`span`, { className: pY, children: r.name || `` }),
                ),
                closeModal: o,
                bAlertDialog: !0,
                children: (0, z.jsx)(bY, { id: n }),
              }),
            }),
          }),
        ],
      });
}
function bY(e) {
  let { id: t } = e,
    n = we(),
    [r, i] = (0, R.useState)(0),
    [a, o] = (0, R.useState)(!1),
    { data: s } = ca(t);
  if (!t || !(`appid` in t) || mr.IN_CLIENT || !s) return null;
  let c = n.data?.sessions?.filter((e) => {
    switch (e.device_type) {
      default:
      case 1:
        {
          if (!e.os_type) return !1;
          let t = ee(e.os_type);
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
      className: dY,
      children: a
        ? (0, z.jsx)(SY, { session: e })
        : (0, z.jsxs)(z.Fragment, {
            children: [
              (0, z.jsx)(xY, {
                rgAcceptableSession: c,
                session: e,
                setSessionIndex: i,
              }),
              (0, z.jsx)(`div`, {
                className: gY,
                children: (0, z.jsx)(CY, {
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
function xY(e) {
  let { rgAcceptableSession: t, session: n, setSessionIndex: r } = e;
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(`div`, { children: L(`#Sale_AddToLibrary_RemoteDownload`) }),
      (0, z.jsxs)(`div`, {
        className: _Y,
        children: [
          (0, z.jsx)(`span`, { className: vY, children: n.machine_name }),
          (0, z.jsx)(sY, {
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
function SY(e) {
  let { session: t } = e;
  return (0, z.jsxs)(`div`, {
    className: mY,
    children: [
      L(`#Sale_AddToLibrary_DownloadStarted`),
      (0, z.jsx)(`br`, {}),
      (0, z.jsx)(`a`, {
        href: `${mr.COMMUNITY_BASE_URL}my/games?tab=all&clientid=${t.client_instanceid}`,
        children: L(`#Sale_AddToLibrary_SeeDownloadProgress`),
      }),
    ],
  });
}
function CY(e) {
  let { appid: t, session: n, setRemoteDownloadRequested: r } = e,
    i = Ce(t, n.client_instanceid);
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsxs)(oo, {
        onClick: () => {
          (i.mutateAsync(), r(!0));
        },
        children: [(0, z.jsx)(Xe, {}), L(`#Button_StartDownload`)],
      }),
      (0, z.jsx)(`div`, {
        className: hY,
        children: (0, z.jsx)(`a`, {
          href: `https://help.steampowered.com/faqs/view/1025-BD94-12FC-3409`,
          className: fY,
          children: L(`#Button_Learn`),
        }),
      }),
    ],
  });
}
function wY(e) {
  let {
    rgTagIDs: t,
    bShowEvenIfNoTags: n,
    bHideTitle: r,
    bLargeText: i,
    bNoStoreLinks: a,
  } = e;
  return t?.length > 0 || n
    ? (0, z.jsxs)(`div`, {
        className: P(Uo, i ? $o : ``, `SaleTagBlockCtn`),
        children: [
          !r &&
            (0, z.jsx)(`div`, {
              className: P(`F3fTh-GlONs-`, `WidgetTagTitle`),
              children: M.Localize(`#GameHover_Tags`),
            }),
          t?.length > 0
            ? (0, z.jsx)(`div`, {
                className: P(es, `TagBox`),
                children: t.map((e) =>
                  (0, z.jsx)(EY, { tagid: e, bNoStoreLinks: a }, e),
                ),
              })
            : (0, z.jsx)(`div`, { children: M.Localize(`#Broadcast_None`) }),
        ],
      })
    : null;
}
function TY(e) {
  let { tagid: t, className: n } = e,
    r = an(t, I.LANGUAGE);
  if (!r) return null;
  let i = da(qt(I.LANGUAGE)),
    a = `${I.STORE_BASE_URL}tags/${i}/${r}`;
  return (0, z.jsx)(tY, {
    url: a,
    className: P(ts, `WidgetTag`, n),
    children: r,
  });
}
function EY(e) {
  let { tagid: t, className: n, bNoStoreLinks: r } = e,
    i = da(qt(I.LANGUAGE)),
    a = an(t, I.LANGUAGE),
    o = `${I.STORE_BASE_URL}tags/${i}/${a}`;
  return a
    ? r
      ? (0, z.jsx)(`div`, { className: P(ts, `WidgetTag`, n), children: a })
      : (0, z.jsx)(tY, {
          url: o,
          className: P(ts, `WidgetTag`, n),
          children: a,
        })
    : null;
}
export {
  PG as $,
  Fo as $a,
  op as $i,
  KV as $n,
  Go as $o,
  uA as $r,
  cU as $t,
  lq as A,
  Ec as Aa,
  My as Ai,
  zH as An,
  uc as Ao,
  xF as Ar,
  Ha as As,
  ZW as At,
  HK as B,
  js as Ba,
  J_ as Bi,
  bH as Bn,
  Jo as Bo,
  DN as Br,
  RW as Bt,
  vq as C,
  Gl as Ca,
  xb as Ci,
  eU as Cn,
  Vo as Co,
  rI as Cr,
  so as Cs,
  eG as Ct,
  xq as D,
  al as Da,
  X as Di,
  YH as Dn,
  cc as Do,
  qF as Dr,
  $a as Ds,
  iG as Dt,
  wq as E,
  sl as Ea,
  Iy as Ei,
  ZH as En,
  Es as Eo,
  YF as Er,
  no as Es,
  rG as Et,
  QK as F,
  _c as Fa,
  Ev as Fi,
  AH as Fn,
  oc as Fo,
  iF as Fr,
  Pa as Fs,
  KW as Ft,
  RK as G,
  Ds as Ga,
  Y as Gi,
  iH as Gn,
  ko as Go,
  fA as Gr,
  gW as Gt,
  JK as H,
  Hs as Ha,
  q_ as Hi,
  cH as Hn,
  Uo as Ho,
  oM as Hr,
  kW as Ht,
  ZK as I,
  pc as Ia,
  Ov as Ii,
  OH as In,
  rc as Io,
  qP as Ir,
  Ra as Is,
  GW as It,
  ZG as J,
  go as Ja,
  nm as Ji,
  XV as Jn,
  wo as Jo,
  _k as Jr,
  bU as Jt,
  NK as K,
  Ko as Ka,
  q as Ki,
  tH as Kn,
  ms as Ko,
  GA as Kr,
  SU as Kt,
  XK as L,
  dc as La,
  sv as Li,
  kH as Ln,
  _s as Lo,
  vP as Lr,
  za as Ls,
  HW as Lt,
  aq as M,
  bc as Ma,
  Xv as Mi,
  LH as Mn,
  Cs as Mo,
  pF as Mr,
  Fa as Ms,
  JW as Mt,
  tq as N,
  Sc as Na,
  zv as Ni,
  MH as Nn,
  Vs as No,
  nF as Nr,
  La as Ns,
  UW as Nt,
  bq as O,
  Ac as Oa,
  jy as Oi,
  KH as On,
  Ns as Oo,
  JF as Or,
  Ga as Os,
  XW as Ot,
  rq as P,
  vc as Pa,
  Rv as Pi,
  jH as Pn,
  _o as Po,
  cF as Pr,
  Ia as Ps,
  WW as Pt,
  FG as Q,
  ac as Qa,
  ip as Qi,
  YV as Qn,
  Mo as Qo,
  uk as Qr,
  wU as Qt,
  BK as R,
  cs as Ra,
  uv as Ri,
  wH as Rn,
  sc as Ro,
  GN as Rr,
  ka as Rs,
  FW as Rt,
  _q as S,
  Kl as Sa,
  zb as Si,
  VU as Sn,
  mo as So,
  fI as Sr,
  us as Ss,
  cG as St,
  Sq as T,
  V as Ta,
  Ly as Ti,
  $H as Tn,
  zs as To,
  XF as Tr,
  lo as Ts,
  nG as Tt,
  qK as U,
  Us as Ua,
  Im as Ui,
  aH as Un,
  $s as Uo,
  yk as Ur,
  SW as Ut,
  WK as V,
  Zo as Va,
  ev as Vi,
  sH as Vn,
  ho as Vo,
  YM as Vr,
  DW as Vt,
  zK as W,
  ws as Wa,
  Pm as Wi,
  oH as Wn,
  Ro as Wo,
  iA as Wr,
  bW as Wt,
  JG as X,
  qs as Xa,
  Dp as Xi,
  JV as Xn,
  jo as Xo,
  qA as Xr,
  nW as Xt,
  XG as Y,
  Zs as Ya,
  Tp as Yi,
  ZV as Yn,
  ps as Yo,
  Rk as Yr,
  iU as Yt,
  IG as Z,
  Qs as Za,
  wp as Zi,
  qV as Zn,
  Ao as Zo,
  hk as Zr,
  CU as Zt,
  fJ as _,
  fl as _a,
  mO as _i,
  aU as _n,
  Js as _o,
  kz as _r,
  xo as _s,
  xG as _t,
  qJ as a,
  yd as aa,
  rk as ai,
  zU as an,
  ns as ao,
  LV as ar,
  po as as,
  MG as at,
  yq as b,
  pl as ba,
  wx as bi,
  GU as bn,
  Ms as bo,
  OL as br,
  Is as bs,
  vG as bt,
  JJ as c,
  ld as ca,
  VA as ci,
  TU as cn,
  Xs as co,
  jV as cr,
  bo as cs,
  WG as ct,
  TJ as d,
  W as da,
  MO as di,
  DU as dn,
  ks as do,
  eV as dr,
  So as ds,
  DG as dt,
  cp as ea,
  tA as ei,
  RU as en,
  Ts as eo,
  BV as er,
  ss as es,
  OG as et,
  wJ as f,
  $u as fa,
  xO as fi,
  EU as fn,
  ic as fo,
  DB as fr,
  tc as fs,
  qG as ft,
  mJ as g,
  lu as ga,
  AO as gi,
  PU as gn,
  Ys as go,
  Bz as gr,
  Xo as gs,
  BG as gt,
  yJ as h,
  uu as ha,
  SO as hi,
  cW as hn,
  Ws as ho,
  pB as hr,
  Qo as hs,
  UG as ht,
  tY as i,
  xd as ia,
  ak as ii,
  hU as in,
  Bs as io,
  IV as ir,
  Wo as is,
  NG as it,
  sq as j,
  wc as ja,
  ey as ji,
  FH as jn,
  Fs as jo,
  fF as jr,
  Ka as js,
  YW as jt,
  uq as k,
  Dc as ka,
  Ay as ki,
  IH as kn,
  vo as ko,
  KF as kr,
  Ja as ks,
  QW as kt,
  ZJ as l,
  od as la,
  sA as li,
  tW as ln,
  nc as lo,
  pV as lr,
  Eo as ls,
  HG as lt,
  OJ as m,
  pu as ma,
  jO as mi,
  rU as mn,
  ls as mo,
  TB as mr,
  yo as ms,
  kG as mt,
  wY as n,
  Qf as na,
  sk as ni,
  mU as nn,
  Rs as no,
  RV as nr,
  zo as ns,
  zG as nt,
  BJ as o,
  md as oa,
  Mk as oi,
  oU as on,
  rs as oo,
  OV as or,
  Oo as os,
  EG as ot,
  kJ as p,
  Ku as pa,
  OO as pi,
  AU as pn,
  xs as po,
  EB as pr,
  Yo as ps,
  AG as pt,
  QG as q,
  ec as qa,
  J as qi,
  eH as qn,
  os as qo,
  HA as qr,
  xU as qt,
  rY as r,
  Xf as ra,
  Fk as ri,
  _U as rn,
  lc as ro,
  AV as rr,
  Bo as rs,
  LG as rt,
  QJ as s,
  cd as sa,
  Nk as si,
  jU as sn,
  is as so,
  EV as sr,
  Po as ss,
  jG as st,
  TY as t,
  K as ta,
  lA as ti,
  sW as tn,
  Ks as to,
  zV as tr,
  ds as ts,
  RG as tt,
  $J as u,
  sd as ua,
  NO as ui,
  kU as un,
  Os as uo,
  rV as ur,
  Co as us,
  VG as ut,
  Lq as v,
  hl as va,
  lO as vi,
  pU as vn,
  Ho as vo,
  vz as vr,
  es as vs,
  bG as vt,
  Cq as w,
  gl as wa,
  sb as wi,
  LU as wn,
  Gs as wo,
  $F as wr,
  co as ws,
  tG as wt,
  gq as x,
  Vl as xa,
  Cx as xi,
  MU as xn,
  Ps as xo,
  kI as xr,
  qo as xs,
  dG as xt,
  Oq as y,
  ml as ya,
  MD as yi,
  dU as yn,
  Ls as yo,
  JL as yr,
  No as ys,
  gG as yt,
  VK as z,
  As as za,
  G_ as zi,
  xH as zn,
  as as zo,
  ON as zr,
  zW as zt,
};
