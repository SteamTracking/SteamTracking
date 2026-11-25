/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e, r as t, t as n } from "./chunk~f025431ab0.js";
import {
  Ft as r,
  It as i,
  Nt as a,
  X as o,
  at as s,
  c,
  ct as l,
  d as u,
  dt as d,
  et as f,
  ot as p,
  tt as m,
  ut as h,
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
import {
  E as T,
  S as E,
  _ as D,
  b as O,
  g as k,
  k as A,
  m as ee,
  n as j,
  t as M,
  w as te,
  x as ne,
} from "./chunk~4eed35ad1f.js";
import { c as re, u as ie } from "./chunk~8c66e1c7a5.js";
import { n as ae, r as oe, t as se } from "./chunk~4c13037b22.js";
import "./chunk~8681f5c764.js";
import { a as ce, n as le, r as ue } from "./chunk~2f085f1384.js";
import { t as de } from "./chunk~92931c6310.js";
import { i as fe, t as pe } from "./chunk~af36c62e9f.js";
import { t as me } from "./chunk~eefd71512b.js";
import { a as he } from "./chunk~e867464c75.js";
import { n as ge } from "./chunk~521597d5f9.js";
import { n as _e } from "./chunk~593a6b8ddc.js";
import { A as ve, i as ye, k as be, m as xe } from "./chunk~2f8c67b4de.js";
import { c as Se, i as Ce, l as we, o as Te } from "./chunk~7b4b9eb713.js";
import { n as Ee } from "./chunk~0278ae6236.js";
import { n as De, t as Oe } from "./chunk~90b9831ad2.js";
import { n as ke, r as Ae } from "./chunk~f162f235ea.js";
import {
  $c as je,
  $h as Me,
  $m as Ne,
  $r as Pe,
  $s as Fe,
  $t as Ie,
  $v as Le,
  $x as Re,
  $y as ze,
  AS as Be,
  Ad as Ve,
  Al as He,
  An as Ue,
  Ax as We,
  Bd as Ge,
  Bg as Ke,
  Bn as qe,
  Bx as Je,
  Cr as Ye,
  Cv as Xe,
  Dl as Ze,
  Dn as Qe,
  Dp as $e,
  Dt as et,
  ES as tt,
  Ec as nt,
  Ed as rt,
  Et as it,
  Ev as at,
  Ex as ot,
  F_ as st,
  Fd as ct,
  Fl as lt,
  Fr as ut,
  Fv as dt,
  G_ as ft,
  Ga as pt,
  Gb as mt,
  Gc as ht,
  Gd as gt,
  Hd as _t,
  Hm as vt,
  Ht as yt,
  Hv as bt,
  IS as xt,
  Ib as N,
  Ic as St,
  Ig as Ct,
  Ih as wt,
  In as Tt,
  Ix as Et,
  Jc as Dt,
  Jf as Ot,
  Jg as kt,
  Ji as At,
  Jm as jt,
  Jr as Mt,
  Js as Nt,
  Kc as Pt,
  Kf as Ft,
  Ks as It,
  Lb as P,
  Lc as Lt,
  Ll as Rt,
  Lm as zt,
  Lr as Bt,
  Lv as Vt,
  Mf as Ht,
  Ml as Ut,
  Nf as Wt,
  Nr as Gt,
  Nu as Kt,
  Nv as qt,
  Oc as Jt,
  Of as Yt,
  Om as Xt,
  On as Zt,
  Oo as Qt,
  Or as $t,
  Ot as en,
  Ox as tn,
  Pc as F,
  Pg as nn,
  Pl as rn,
  Pm as an,
  Pr as on,
  Pt as sn,
  Pv as cn,
  Qc as ln,
  Qd as un,
  Qf as dn,
  Qh as fn,
  Qp as pn,
  Qs as mn,
  Qt as hn,
  Qv as gn,
  Rb as _n,
  Rh as vn,
  Rm as yn,
  Rp as bn,
  Rx as xn,
  Sd as Sn,
  Sm as Cn,
  Sx as wn,
  Tg as Tn,
  Tm as En,
  Tt as Dn,
  Ub as On,
  Ud as kn,
  Uf as An,
  Uh as jn,
  Un as Mn,
  Up as Nn,
  Ut as Pn,
  Uv as Fn,
  Vc as In,
  Vf as Ln,
  Vg as Rn,
  Vp as zn,
  Vr as Bn,
  Vv as Vn,
  Wh as Hn,
  Wo as Un,
  Wv as Wn,
  Xd as Gn,
  Xi as Kn,
  Xp as qn,
  Xr as Jn,
  Xs as Yn,
  Xt as Xn,
  Xu as Zn,
  Yb as Qn,
  Yf as $n,
  Yo as er,
  Ys as tr,
  Yv as nr,
  Zc as rr,
  Zh as ir,
  Zl as ar,
  Zm as or,
  Zt as sr,
  Zv as cr,
  Zy as lr,
  _S as ur,
  __ as dr,
  _g as fr,
  _l as pr,
  _n as mr,
  _p as hr,
  _r as gr,
  _y as _r,
  af as vr,
  am as yr,
  ap as br,
  av as xr,
  ba as Sr,
  bc as Cr,
  bh as wr,
  bm as Tr,
  bv as Er,
  bx as Dr,
  cS as Or,
  ca as kr,
  cg as Ar,
  ci as jr,
  cn as Mr,
  cu as Nr,
  cx as Pr,
  cy as Fr,
  dS as Ir,
  dr as Lr,
  eS as Rr,
  ea as zr,
  eb as Br,
  ec as Vr,
  eg as Hr,
  eh as Ur,
  ex as Wr,
  fS as Gr,
  fn as Kr,
  fp as qr,
  ft as Jr,
  fu as Yr,
  gS as Xr,
  g_ as Zr,
  gf as Qr,
  gl as $r,
  hS as ei,
  hg as ti,
  hn as ni,
  hp as ri,
  hv as ii,
  ib as I,
  id as ai,
  iy as oi,
  jS as si,
  jl as ci,
  kc as li,
  kf as ui,
  kg as di,
  kn as fi,
  kr as pi,
  kv as mi,
  kx as hi,
  lS as gi,
  lb as _i,
  lg as vi,
  ln as yi,
  lr as bi,
  lx as xi,
  ly as Si,
  mS as Ci,
  md as wi,
  mf as Ti,
  ml as Ei,
  mr as Di,
  mt as Oi,
  mu as ki,
  my as Ai,
  n_ as ji,
  nc as Mi,
  nd as Ni,
  nh as Pi,
  nn as Fi,
  nv as Ii,
  nx as Li,
  ny as Ri,
  oa as zi,
  od as Bi,
  og as Vi,
  ol as Hi,
  on as Ui,
  ox as Wi,
  pS as Gi,
  pg as Ki,
  po as qi,
  qb as Ji,
  qc as Yi,
  qi as Xi,
  qp as Zi,
  qs as Qi,
  rd as $i,
  rn as ea,
  ru as ta,
  rx as L,
  ry as na,
  s_ as ra,
  sg as ia,
  si as aa,
  sn as oa,
  sp as sa,
  tc as ca,
  tg as la,
  tn as ua,
  uS as da,
  u_ as fa,
  ug as pa,
  up as ma,
  uy as ha,
  vS as ga,
  vf as _a,
  vl as va,
  vv as ya,
  vx as ba,
  wb as xa,
  wd as Sa,
  wg as Ca,
  wn as wa,
  wu as Ta,
  x_ as Ea,
  xd as Da,
  xp as Oa,
  yn as ka,
  yy as Aa,
  zc as ja,
  zh as Ma,
  zn as Na,
  zv as Pa,
} from "./main.js";
var Fa = class extends Error {
  eResult;
  constructor(e, t) {
    (super(t ? `EResult ${e}: ${t}` : `EResult ${e}`), (this.eResult = e));
  }
};
function Ia(e, t, n, r) {
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
        await ii(`DiscountedItems`, e, t, {
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
var La = 3;
function Ra(e, t) {
  if (!e.is_coming_soon()) return !1;
  if (!t.min_discount_percent) return !0;
  let n = e.best_purchase_option(!1);
  return !!n?.packageid() && (n?.discount_pct() ?? 0) >= t.min_discount_percent;
}
function za(e, t, n, r) {
  let { store_filter_json: i, min_discount_percent: a } = n;
  return {
    queryKey: [`TopWishlistedComingSoon`, i ?? ``, a ?? 0, r, t.country],
    queryFn: async () => {
      let o = new Map();
      return (
        await ii(
          `TopWishlistedComingSoon`,
          e,
          t,
          {
            start: 0,
            count: r * La,
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
              let t = Fr({ item_type: e.item_type(), id: e.id() });
              t && o.set(Si(t), e);
            },
          },
        )
      ).rgItemIDs
        .filter((e) => {
          let t = o.get(Si(e));
          return t !== void 0 && Ra(t, n);
        })
        .slice(0, r);
    },
    staleTime: 6e5,
  };
}
var Ba = 500,
  Va = 100;
function Ha(e, t, n, r, i, a = 1) {
  return {
    queryKey: [`AccountOwnedDLCOnSale`, r ?? 0, i, n.country, a],
    queryFn: async () => {
      if (!r) return [];
      let o = await e.fetchQuery(O(t, r)),
        s = Array.from(o).slice(0, Ba);
      return s.length
        ? (
            await ii(`SaleTechOwnedDLCOnSale`, t, n, {
              start: 0,
              count: Va,
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
async function Ua(e) {
  let t = { get_appids: !0, l: L.LANGUAGE },
    n = new URLSearchParams(t).toString(),
    r = `${L.STORE_BASE_URL}curator/${e}/ajaxgetcreatorhomeinfo/?${n}`,
    i = await fetch(r, { method: `GET` });
  if (!i.ok) throw Error(`Server returned ${i.status}`);
  let a = await i.json();
  return a.success == 1 ? a : null;
}
function Wa(e) {
  return p(Ga(e));
}
function Ga(e) {
  return {
    queryKey: Ka(e),
    queryFn: async () => {
      let t = await Ua(e);
      if (t) {
        let { success: e, err_msg: n, warning: r, warning_msg: i, ...a } = t;
        return a;
      }
      return null;
    },
    enabled: !!e,
  };
}
function Ka(e) {
  return [`creatorhomebyaccount`, e];
}
function qa(e, t) {
  if (e.vanity) {
    switch (t) {
      case `publisher`:
        return `${L.STORE_BASE_URL}publisher/${e.vanity}/`;
      case `franchise`:
        return `${L.STORE_BASE_URL}franchise/${e.vanity}/`;
    }
    return `${L.STORE_BASE_URL}developer/${e.vanity}/`;
  }
  return `${L.STORE_BASE_URL}curator/${e.creator_clan_id}/`;
}
var Ja = `qkhMGgZoiEA-`,
  Ya = `dR7N9Ozyb6k-`,
  Xa = `_8j-XyEfRwfE-`,
  R = d();
function Za(e) {
  let { children: t, ...n } = e;
  return (0, R.jsx)(pr, {
    className: Ja,
    type: `button`,
    ...n,
    children: (0, R.jsx)(`span`, { children: t }),
  });
}
function Qa(e) {
  let { children: t, ...n } = e;
  return (0, R.jsx)(pr, {
    className: Xa,
    type: `button`,
    ...n,
    children: (0, R.jsx)(`span`, { children: t }),
  });
}
function $a(e) {
  let { children: t, ...n } = e;
  return (0, R.jsx)($r, {
    className: Xa,
    ...n,
    children: (0, R.jsx)(`span`, { children: t }),
  });
}
function eo(e) {
  let { children: t, ...n } = e;
  return (0, R.jsx)(pr, {
    className: Ya,
    type: `button`,
    ...n,
    children: (0, R.jsx)(`span`, { children: t }),
  });
}
var z = e(i(), 1),
  to = e(r()),
  B = e(a(), 1),
  no = e(f()),
  ro = `_8Wp5WbqAbJA-`,
  io = `K2PjXmYWvSg-`,
  ao = `UYfcYZDtfbs-`,
  oo = `O-TsWDon65A-`,
  so = `E8DrK8oV4Hs-`,
  co = `XTfMA1ObAn4-`,
  lo = `-Rv33oXsbT0-`,
  uo = `MN6Xv-pm6i8-`,
  fo = `uvLRAREPa4E-`,
  po = `bdPmPtfuqIY-`,
  mo = `JCVuyoKAC-k-`,
  ho = `kjiBcsaqA8o-`,
  go = `UFAsjplGzxc-`,
  _o = `vL-XYGsLedM-`,
  vo = `aCttqIa8NC4-`,
  yo = `-rXzhlz0w3Q-`,
  bo = `R9ivMzB3Gic-`,
  xo = `W9-byrNtR9Q-`,
  So = `llT8dhJgnqw-`,
  Co = `kxs4VtommH4-`,
  wo = `ncKEDk26SHQ-`,
  To = `VGzHGCF3I5o-`,
  Eo = `fNtXEMzHz58-`,
  Do = `jrHvWWIOlw4-`,
  Oo = `FOKKfGVYUDk-`,
  ko = `OClIuwfiMKQ-`,
  Ao = `ZLlm68-AqhM-`,
  jo = `raYV6Y-MQ7I-`,
  Mo = `IWFCYfhR05U-`,
  No = `KtOQKgU1W5w-`,
  Po = `jXpKqo3-cWA-`,
  Fo = `_-7gyAR9oUx4-`,
  Io = `GcBGxmj4uvE-`,
  Lo = `QwN0eH2k0O0-`,
  Ro = `sgCiKk3DUeg-`,
  zo = `N86EuolnWHc-`,
  Bo = `A8oyzoRvWQ8-`,
  Vo = `V7rq-SSC9xQ-`,
  Ho = `pNXxwljIaD8-`,
  Uo = `lsjYiHotCwA-`,
  Wo = `iVV26V5rbpU-`,
  Go = `XosTQwEOBO0-`,
  Ko = `ITE-CUK3U10-`,
  qo = `wPxkst62n-Q-`,
  Jo = `gxtdwNjsesg-`,
  Yo = `y1XjkIvVj6A-`,
  Xo = `BZ9dZKOmXqE-`,
  Zo = `zMMJGDB8n-o-`,
  Qo = `XPrPiD27WdE-`,
  $o = `R0sGSaFdUWo-`,
  es = `PON8X0ze5G8-`,
  ts = `rfhpla0PGMA-`,
  ns = `OySWwOLLxFc-`,
  rs = `tkR3-aHpyI4-`,
  is = `yyrI0Nka69I-`,
  as = `D3fuhd6kG6I-`,
  os = `Xk-QP-zS-18-`,
  ss = `I9cM1cZTYqc-`,
  cs = `LkW8eRLttsM-`,
  ls = `_4KL8m0wDedE-`,
  us = `E3GBmOK5lMc-`,
  ds = `lOHW8g-YyoY-`,
  fs = `NqZ9uMSo13A-`,
  ps = `Ybt9EqGhaaU-`,
  ms = `RQzfcqJK1Eg-`,
  hs = `_0MLgqm-W-nA-`,
  gs = `iwrzh-mg8hE-`,
  _s = `oZCOhIQDgxo-`,
  vs = `-G-r65tUoo0-`,
  ys = `qVhohSfcErA-`,
  bs = `GqNlebj1uds-`,
  xs = `oqhyMK1Krt0-`,
  Ss = `GRw4r5TpD5s-`,
  Cs = `mspnwaz0EAg-`,
  ws = `_06Z7Ej-J6OU-`,
  Ts = `lO9B4Ti6gBk-`,
  Es = `lkVpo86MFuI-`,
  Ds = `chTH6btujQ0-`,
  Os = `_96v5CHkkJJY-`,
  ks = `GxypNLhVZWE-`,
  As = `_-4JZsb8K2FY-`,
  js = `BD3vXqZ-6yI-`,
  Ms = `l9by-6sJDpM-`,
  Ns = `LCYi5cxHqgI-`,
  Ps = `ZuMhm9DQqbw-`,
  Fs = `eASrfjoxe3o-`,
  Is = `ppO76q5Y-Zg-`,
  Ls = `WWolAsqP274-`,
  Rs = `mP8HbLoIUo0-`,
  zs = `BuCaaYRb4Cg-`,
  Bs = `bYNmqkeEJGc-`,
  Vs = `_4xLBehMPMIU-`,
  Hs = `XiCMCQH8z2U-`,
  Us = `_3wT3W-azVyE-`,
  Ws = `EpyWQfQU-D4-`,
  Gs = `FDvyBhD2AA0-`,
  Ks = `RIck6AI1vX8-`,
  qs = `Sndyr6iqn8g-`,
  Js = `qUsoY9s6daM-`,
  Ys = `tUIs-i3NWoU-`,
  Xs = `_8o-dkC5O1co-`,
  Zs = `v7ul8g8zqHs-`,
  Qs = `-cW4bgqyLAo-`,
  $s = `aN31caRmRcQ-`,
  ec = `tobj1evrU4w-`,
  tc = `RAahmG4F6sc-`;
function nc(e) {
  return e?.is_coming_soon
    ? rc(
        e.coming_soon_display,
        e.steam_release_date,
        e.custom_release_date_message,
      )
    : e?.steam_release_date
      ? zr(e.steam_release_date)
      : ``;
}
function rc(e, t, n) {
  switch (e) {
    case `date_full`:
      return zr(t);
    case `date_month`:
      return Xi(new Date(t * 1e3));
    case `date_quarter`:
      return At(new Date(t * 1e3));
    case `date_year`:
      return Kn(new Date(t * 1e3));
    case `text_comingsoon`:
      return n || N.Localize(`#Store_ComingSoon_ComingSoon`);
    case `text_tba`:
      return n || N.Localize(`#Store_ComingSoon_TBA`);
    default:
      return ``;
  }
}
function ic(e) {
  if (!e) return ``;
  if (e && e.is_coming_soon) {
    if (e.coming_soon_display) return Yr(e);
    if (e.custom_release_date_message) return e.custom_release_date_message;
    let t = e.steam_release_date;
    return t
      ? e.is_abridged_release_date
        ? Xi(new Date(t * 1e3))
        : zr(t)
      : ``;
  }
  let t = e.steam_release_date;
  return ((t ||= e.original_release_date), t ? zr(t) : ``);
}
function ac(e, t = !1) {
  if (e.is_coming_soon && !t) return 0;
  let n = e.steam_release_date;
  return ((n ||= e.original_release_date), n);
}
var oc = 7;
function sc(e, t) {
  if (!e) return !1;
  let n = ac(e);
  return n ? !e.is_coming_soon && n + oc * zi.PerDay > t : !1;
}
function cc(e, t) {
  return !!(e && e.is_coming_soon && t && t.packageid);
}
function lc(e, t) {
  return !!(e && t && t.packageid);
}
async function uc(e, t) {
  throw new Fa(20, `Owned packages must be seeded by the page`);
}
function dc() {
  let e = Aa(),
    t = Wi.accountid;
  return p(fc(e, t));
}
function fc(e, t) {
  return {
    queryKey: mc(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await uc(e, t);
      return new Set(n);
    },
    retry: !1,
    staleTime: 1 / 0,
  };
}
function pc(e) {
  let t = h(),
    n = Wi.accountid;
  return z.useCallback(
    (r) => {
      t.setQueryData(mc(n), (t) =>
        t ? new Set([...t.values(), ...r]) : e ? new Set(r) : void 0,
      );
    },
    [t, n, e],
  );
}
function mc(e) {
  return [`AccountOwnedPackages`, e ?? 0];
}
function hc(e) {
  let t = Aa(),
    n = te(),
    r = pc();
  return s({
    mutationFn: () => gc(t, e),
    onSuccess(e) {
      let [
        t,
        { packageids_added: i, appids_added: a, purchase_result_detail: o },
      ] = e;
      (a && n(a), i && r(i));
    },
  });
}
async function gc(e, t) {
  let n = hi.Init(ni);
  n.Body().set_item_id(tn.fromObject(t));
  let r = await mr.AddFreeLicense(e, n);
  return [r.GetEResult(), r.Body().toObject()];
}
async function _c(e, t) {
  t.set(`origin`, location.origin);
  let n = `${L.STORE_BASE_URL}saleaction/${e}?${t}`,
    r = await fetch(n);
  if (!r.ok) throw Error(`${n} answered ${r.status}`);
  let i = await r.json();
  if (i?.success != 1) throw Error(`${n} answered EResult ${i?.success}`);
  return i;
}
async function vc(e) {
  let t = await _c(
    `ajaxgetpopularcompatlist`,
    new URLSearchParams({ compatDevice: e }),
  );
  if (!t.list) throw Error(`ajaxgetpopularcompatlist answered without a list`);
  return t.list;
}
var yc = 3e5;
function bc(e) {
  return [`PopularCompatList`, e];
}
function xc(e) {
  return { queryKey: bc(e), queryFn: () => vc(e), staleTime: yc, retry: !1 };
}
var Sc = `PFP2RDjCi0w-`,
  Cc = `Cbfoq6WaXq4-`,
  wc = `_4lcICEhYuQw-`,
  Tc = `unoV6P6DXbM-`,
  Ec = `p8d03I0RAAs-`,
  Dc = `brHZRAeRCnw-`,
  Oc = `hATzo-Hjaaw-`,
  kc = `_7vEy4qHpqHo-`,
  Ac = `KoUJweWUwjY-`,
  jc = `XAGO1LWGig0-`,
  Mc = `uN9-XHR7odQ-`,
  Nc = `CnbkzZzYDxs-`,
  Pc = `_8UjVVV-S-j8-`,
  Fc = `k0yt-Gxhbs4-`,
  Ic = `io6uTUtzW-A-`,
  Lc = `_58-zzK2uRws-`,
  Rc = `mGygcOFcFcQ-`,
  zc = `mW8gl4NPYGg-`,
  Bc = `X9907eDQcow-`,
  Vc = `GwjmtMACpAo-`,
  Hc = `S8JsHzHuIMA-`,
  Uc = `_4nNWbL6J2cI-`,
  Wc = `Djw7Ta0NL0Q-`,
  Gc = `u-mW6oZelJ4-`,
  Kc = `j0BUhYRjGwM-`,
  qc = `I-L7P5K0HUM-`,
  Jc = `VYzpavMEA5M-`,
  Yc = `iXn31HpcmTo-`;
function Xc(e) {
  let { id: t, bTruncateTotalReviews: n, bShowTooltip: r } = e,
    { data: i } = gn(t),
    { data: a } = Wn(t),
    o = T(t),
    { data: s } = Wn(o),
    { data: c } = rt();
  if (!i || !a || (a.type == 1 && !oe(s))) return null;
  let l = i.summary_unfiltered || i.summary_filtered,
    u = `#ReviewScore_UserReviewScoreAria`,
    d = !1,
    f = N.Localize(`#Language_` + L.LANGUAGE);
  if (
    (Zc(c?.preferences?.review_score_preference) &&
      (i.summary_language_specific
        ? ((d = !0),
          (u = `#ReviewScore_UserReviewScoreAria_LanguageSpecific`),
          (l = i.summary_language_specific))
        : (l = i.summary_filtered)),
    !l || !l.review_score)
  )
    return null;
  let p = Wc;
  p =
    l.review_score > 0 && l.review_score < 5
      ? Gc
      : l.review_score == 5
        ? Kc
        : qc;
  let m = `${L.STORE_BASE_URL}app/${a.appid}/#app_reviews_hash`,
    h = (0, R.jsxs)(`div`, {
      className: F(Uc, p),
      children: [
        (0, R.jsx)(`div`, {
          className: Jc,
          "aria-label": N.Localize(u, l.review_score_label, f),
          children: l.review_score_label,
        }),
        (0, R.jsxs)(`div`, {
          className: Hc,
          "aria-label": N.Localize(
            `#GameHover_UserReviewCount`,
            l.review_count.toLocaleString(kr()),
          ),
          children: [
            `(`,
            n
              ? `(` + l.review_count.toLocaleString(kr()) + `)`
              : d
                ? N.Localize(
                    `#GameHover_UserReviewCount_Lang`,
                    l.review_count.toLocaleString(kr()),
                    f,
                  )
                : N.Localize(
                    `#GameHover_UserReviewCount`,
                    l.review_count.toLocaleString(kr()),
                  ),
            `)`,
          ],
        }),
        !n &&
          (0, R.jsxs)(`div`, {
            className: `ZBPprMOYoMs-`,
            children: [` `, N.Localize(`#GameHover_UserReviewsHeader`)],
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
  return (0, R.jsx)(iY, {
    url: m,
    className: F(Vc, `ReviewScore`),
    children:
      r && l.percent_positive != null && l.review_count != null && g
        ? (0, R.jsx)(Jn, {
            bTopmost: !0,
            toolTipContent: N.Localize(g, l.percent_positive, l.review_count),
            children: h,
          })
        : h,
  });
}
function Zc(e) {
  return e === void 0 || e === 0 || e === 2;
}
function Qc(e) {
  let {
      id: t,
      snr: n,
      classOverride: r,
      styleOverride: i,
      bShowInGamepadUI: a,
    } = e,
    { data: o } = Wn(t),
    { elDialogElement: s, fnShowLogonDialog: c } = LW(),
    [l, u] = (0, z.useState)(() => {
      if (o && (o.type == 1 || o.type == 12) && o.related_items?.parent_appid)
        return o.related_items?.parent_appid;
      if (t && `appid` in t) return t.appid;
    }),
    d = A(l),
    f = ea(l),
    { bIsOwned: p } = E(d),
    [m, h] = (0, z.useState)(!1),
    g = de(`GameHoverWishlistButton`),
    { mutateAsync: _ } = k(l, !f, n);
  (0, z.useEffect)(() => {
    t &&
      `appid` in t &&
      (o?.type == 1 || o?.type == 12) &&
      u(o.related_items?.parent_appid || t.appid);
  }, [o, t]);
  let v = (0, z.useCallback)(
    async (e) => {
      Dr.logged_in
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
    : (0, R.jsxs)(In, {
        className: F(Ac, a && `B7tWNVp-vns-`, r),
        onActivate: v,
        style: i,
        children: [
          f ? (0, R.jsx)(Jt, {}) : (0, R.jsx)(li, {}),
          (0, R.jsx)(`div`, {
            className: F(jc, m && `u8yceEMO9LM-`, `WishlistButtonText`),
            children: N.Localize(
              f ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
            ),
          }),
          s,
        ],
      });
}
var $c = class e {
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
        this.m_mapAppCallbackList.set(e, new Re()),
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
      let n = { nAppID: e, l: ba.LANGUAGE, cc: ba.COUNTRY },
        r = ba.STORE_BASE_URL + `saleaction/ajaxgetdeckappcompatibilityreport`,
        i = await no.default.get(r, { params: n, withCredentials: !0 });
      if (i?.status == 200 && i.data?.success == 1 && i.data?.results)
        return (this.AddCompatabilityResult(i.data.results), !0);
      t = Zn(i);
    } catch (e) {
      t = Zn(e);
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
      let t = xi(`hardwarecompatibility`, `application_config`);
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
Ji([Rr], $c.prototype, `LoadAppCompabitilityResult`, null);
function el(e) {
  let [t, n] = z.useState($c.Get().GetCompatabilityResultForApp(e));
  return (
    rn($c.Get().GetCallbackForAppList(e), n),
    z.useEffect(() => {
      $c.Get().BHasCompatabilityResultForApp(e) ||
        $c
          .Get()
          .LoadAppCompabitilityResult(e)
          .then(() => n($c.Get().GetCompatabilityResultForApp(e)));
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
function tl(e) {
  switch (e) {
    case ci.OK:
      return 0;
    case ci.CANCEL:
      return 1;
    case ci.SECONDARY:
      return 2;
    case ci.OPTIONS:
      return 3;
    case ci.DIR_LEFT:
      return 4;
    case ci.DIR_RIGHT:
      return 5;
    case ci.DIR_UP:
      return 6;
    case ci.DIR_DOWN:
      return 7;
    case ci.STEAM_GUIDE:
      return 8;
    case ci.STEAM_QUICK_MENU:
      return 9;
    case ci.SELECT:
      return 10;
    case ci.START:
      return 11;
    case ci.BUMPER_LEFT:
      return 12;
    case ci.BUMPER_RIGHT:
      return 13;
    case ci.TRIGGER_LEFT:
      return 14;
    case ci.TRIGGER_RIGHT:
      return 15;
    case ci.REAR_LEFT_UPPER:
      return 24;
    case ci.REAR_LEFT_LOWER:
      return 25;
    case ci.REAR_RIGHT_UPPER:
      return 26;
    case ci.REAR_RIGHT_LOWER:
      return 27;
    default:
      return 0;
  }
}
var nl = class e {
  m_boundActions = new Map();
  m_defaultActions = new Map();
  m_globalActionsSubscriptions = [];
  m_actionDescriptionChangedCallbackRegistrations = [];
  static Log = new Ut(`ActionDescription`).Debug;
  m_nodeForCurrentDescriptions;
  InitContext(e) {
    let t = new mt();
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
    } else this.SetActionDescriptionsFromMap({ [ci.OK]: null });
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
        i = tl(r);
      t[i] = e[r];
    }
    this.SetActionsFromMap(t);
  }
  SetAction(t, n) {
    if ((e.Log(`SetActionDescription`, t, n), n === void 0)) {
      if (!this.m_boundActions.has(t)) return !1;
      this.m_boundActions.delete(t);
    } else {
      if (He(this.m_boundActions.get(t), n)) return !1;
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
(Ji([Rr], nl.prototype, `OnFocusNavigationChanged`, null),
  Ji([Rr], nl.prototype, `OnActiveNavTreeChanged`, null),
  Ji([Rr], nl.prototype, `SetActionDescriptionsFromMap`, null));
var rl = `-h3mdabpWCk-`,
  il = `z7OUnz8a2LE-`,
  al = `-JC2DTwjTLY-`,
  ol = `gBGbg1Aq4kE-`,
  sl = `S0TPsOpik3c-`,
  cl = `_6t-T9facds8-`,
  ll = `_9ltdnbqRBVs-`,
  ul = `KMiaP3xxJic-`,
  dl = `-f6--J8iYK8-`,
  fl = `tlFgqgPT5b8-`,
  pl = `LR3Stix-A4Y-`,
  ml = `zxsM3zpa9JU-`,
  hl = `c3ZsONtZeOk-`,
  gl = `uboNutS5k7k-`,
  _l = `_31u9Wgg0oro-`,
  vl = `m9cG66kvPgg-`,
  yl = `WGUFkBLPn8E-`,
  bl = `WFe7p-8r4T4-`,
  xl = `_5sgfQl5H11I-`,
  Sl = `ifxfOQVR6MY-`,
  Cl = `nPQe387f344-`,
  wl = `Z8zypUObkYE-`,
  Tl = `_1GTC22hSCmY-`,
  El = `toY0I97PWjg-`,
  Dl = `_1ArCdbgfzNY-`,
  Ol = `IBiSpw0atyM-`,
  kl = `mDOopKELMBg-`,
  Al = `C8-HMz-fVag-`,
  jl = `lDDPCoGwJAU-`,
  Ml = `QvYBOAdgkPk-`,
  Nl = `ZAn1-qmM-Iw-`,
  Pl = `dNQ1ofH4Cbs-`,
  Fl = `rmDLW23h1zQ-`,
  Il = `ahykWXj-Rak-`,
  Ll = `TxQs7xIpj2A-`,
  Rl = `xWg9uSQknuo-`,
  zl = `_2csr6Pw04gI-`,
  Bl = `CT05Js5REus-`,
  Vl = `CAlqxCfPEko-`,
  Hl = `hH8fUDD712k-`,
  Ul = `c1DR5MyoXPo-`,
  Wl = `KnF9XvfALGs-`,
  Gl = `voFKnm6BHlI-`,
  Kl = `XRBn-My-JYo-`,
  ql = `MnMGQkxU8KU-`,
  Jl = `BPpr5dZdGc4-`,
  H = `QeQ6K92V-ik-`,
  U = `jlNNNIYiAYQ-`,
  Yl = `dXUGCsJI9Qw-`,
  Xl = `N88ag1lENrA-`,
  Zl = `-m9XoDI2d0Q-`,
  Ql = `IulAmRs78UQ-`,
  $l = `X86r8MkR480-`,
  eu = (function (e) {
    return (
      (e[(e.Knockout = 0)] = `Knockout`),
      (e[(e.Light = 1)] = `Light`),
      (e[(e.Dark = 2)] = `Dark`),
      e
    );
  })({}),
  tu = (function (e) {
    return (
      (e[(e.Small = 0)] = `Small`),
      (e[(e.Medium = 1)] = `Medium`),
      (e[(e.Large = 2)] = `Large`),
      e
    );
  })({});
function nu(e) {
  switch (e) {
    case 0:
      return Zl;
    case 1:
      return Ql;
    case 2:
      return $l;
    default:
      return Ql;
  }
}
function ru(e) {
  switch (e) {
    case 0:
      return Xl;
    case 1:
      return Yl;
    case 2:
      return Jl;
    default:
      return Yl;
  }
}
function iu(e) {
  let t = F(
      e.size == null ? nu(1) : nu(e.size),
      e.type == null ? ru(1) : ru(e.type),
      e.additionalClassName,
    ),
    n = e.type == 0;
  switch (e.button) {
    case V.A:
      return (0, R.jsx)(au, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_A`),
      });
    case V.B:
      return (0, R.jsx)(ou, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_B`),
      });
    case V.X:
      return (0, R.jsx)(su, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_X`),
      });
    case V.Y:
      return (0, R.jsx)(cu, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_Y`),
      });
    case V.Left:
      return (0, R.jsx)(du, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_DpadLeft`),
      });
    case V.Right:
      return (0, R.jsx)(fu, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_DpadRight`),
      });
    case V.Up:
      return (0, R.jsx)(lu, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_DpadUp`),
      });
    case V.Down:
      return (0, R.jsx)(uu, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_DpadDown`),
      });
    case V.HomeMenu:
      return (0, R.jsx)(pu, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_Steam`),
      });
    case V.QuickMenu:
      return (0, R.jsx)(mu, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_QAM`),
      });
    case V.Select:
      return (0, R.jsx)(hu, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_View`),
      });
    case V.Start:
      return (0, R.jsx)(gu, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_Menu`),
      });
    case V.LeftBumper:
      return (0, R.jsx)(_u, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_L1`),
      });
    case V.RightBumper:
      return (0, R.jsx)(vu, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_R1`),
      });
    case V.LeftTrigger:
      return (0, R.jsx)(yu, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_L2`),
      });
    case V.RightTrigger:
      return (0, R.jsx)(bu, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_R2`),
      });
    case V.LeftStick:
      return (0, R.jsx)(wu, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_LS`),
      });
    case V.RightStick:
      return (0, R.jsx)(Cu, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_RS`),
      });
    case V.LeftStickClick:
      return (0, R.jsx)(xu, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_L3`),
      });
    case V.RightStickClick:
      return (0, R.jsx)(Su, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_R3`),
      });
    case V.LeftTrackpad:
      return (0, R.jsx)(ku, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_LPad`),
      });
    case V.RightTrackpad:
      return (0, R.jsx)(ju, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_RPad`),
      });
    case V.LeftTrackpadClick:
      return (0, R.jsx)(Au, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_LPad_Click`),
      });
    case V.RightTrackpadClick:
      return (0, R.jsx)(Mu, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_RPad_Click`),
      });
    case V.RearLeftUpper:
      return (0, R.jsx)(Tu, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_L4`),
      });
    case V.RearRightUpper:
      return (0, R.jsx)(Du, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_R4`),
      });
    case V.RearLeftLower:
      return (0, R.jsx)(Eu, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_L5`),
      });
    case V.RearRightLower:
      return (0, R.jsx)(Ou, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_R5`),
      });
    default:
      return (0, R.jsx)(Nu, {
        bIsKnockout: n,
        className: t,
        "aria-label": I(`#ControllerButton_Default`),
      });
  }
}
function au({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM21.2697 24H24.1317L19.2717 11.4H16.6077L11.8917 24H14.6457L15.4737 21.552H20.4057L21.2697 24ZM16.1937 19.446L17.9217 14.406L19.6857 19.446H16.1937Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`circle`, {
            className: H,
            cx: `18`,
            cy: `18`,
            r: `18`,
            fill: `currentColor`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M24.1317 24H21.2697L20.4057 21.552H15.4737L14.6457 24H11.8917L16.6077 11.4H19.2717L24.1317 24ZM17.9217 14.406L16.1937 19.446H19.6857L17.9217 14.406Z`,
          }),
        ],
      });
}
function ou({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM23.173 20.382C23.173 18.81 22.369 17.778 20.761 17.286C21.349 16.974 21.775 16.584 22.039 16.116C22.303 15.648 22.435 15.132 22.435 14.568C22.435 13.56 22.081 12.78 21.373 12.228C20.665 11.676 19.573 11.4 18.097 11.4H13.435V24H18.601C19.993 24 21.103 23.682 21.931 23.046C22.759 22.41 23.173 21.522 23.173 20.382ZM16.117 16.674V13.596H17.881C19.165 13.596 19.807 14.082 19.807 15.054C19.807 15.57 19.645 15.972 19.321 16.26C18.997 16.536 18.535 16.674 17.935 16.674H16.117ZM19.843 21.372C19.507 21.672 19.003 21.822 18.331 21.822H16.117V18.582H18.403C19.039 18.582 19.525 18.72 19.861 18.996C20.197 19.26 20.365 19.656 20.365 20.184C20.365 20.676 20.191 21.072 19.843 21.372Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`circle`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M20.761 17.286C22.369 17.778 23.173 18.81 23.173 20.382C23.173 21.522 22.759 22.41 21.931 23.046C21.103 23.682 19.993 24 18.601 24H13.435V11.4H18.097C19.573 11.4 20.665 11.676 21.373 12.228C22.081 12.78 22.435 13.56 22.435 14.568C22.435 15.132 22.303 15.648 22.039 16.116C21.775 16.584 21.349 16.974 20.761 17.286ZM16.117 13.596V16.674H17.935C18.535 16.674 18.997 16.536 19.321 16.26C19.645 15.972 19.807 15.57 19.807 15.054C19.807 14.082 19.165 13.596 17.881 13.596H16.117ZM18.331 21.822C19.003 21.822 19.507 21.672 19.843 21.372C20.191 21.072 20.365 20.676 20.365 20.184C20.365 19.656 20.197 19.26 19.861 18.996C19.525 18.72 19.039 18.582 18.403 18.582H16.117V21.822H18.331Z`,
          }),
        ],
      });
}
function su({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM23.7101 11.4H20.3621L17.8601 15.45L15.3581 11.4H12.1001L16.4021 17.484L11.9201 24H15.0881L17.9141 19.41L20.8661 24H24.1061L19.2821 17.394L23.7101 11.4Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`circle`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M20.3621 11.4H23.7101L19.2821 17.394L24.1061 24H20.8661L17.9141 19.41L15.0881 24H11.9201L16.4021 17.484L12.1001 11.4H15.3581L17.8601 15.45L20.3621 11.4Z`,
          }),
        ],
      });
}
function cu({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM16.69 24H19.318V18.996L23.71 11.4H20.848L18.094 16.44L15.358 11.4H12.298L16.69 18.978V24Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`circle`, {
            className: H,
            cx: `18`,
            cy: `18`,
            r: `18`,
            fill: `currentColor`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M19.318 24H16.69V18.978L12.298 11.4H15.358L18.094 16.44L20.848 11.4H23.71L19.318 18.996V24Z`,
          }),
        ],
      });
}
function lu({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM25 20.1998L19.5555 14.7554V27.1998H16.4444V14.7554L11 20.1998L8.66663 17.8665L18 8.66661L27.3333 17.8665L25 20.1998Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`circle`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M19.5555 14.7554L25 20.1998L27.3333 17.8665L18 8.66661L8.66663 17.8665L11 20.1998L16.4444 14.7554V27.1998H19.5555V14.7554Z`,
          }),
        ],
      });
}
function uu({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM10.9999 15.6666L16.4444 21.1111L16.4444 8.66663H19.5555L19.5555 21.1111L24.9999 15.6666L27.3333 18L17.9999 27.1998L8.66659 18L10.9999 15.6666Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`circle`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M16.4444 21.1111L10.9999 15.6666L8.66659 18L17.9999 27.1998L27.3333 18L24.9999 15.6666L19.5555 21.1111L19.5555 8.66663L16.4444 8.66663L16.4444 21.1111Z`,
          }),
        ],
      });
}
function du({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.2664 10.9332L14.8219 16.3777H27.2664V19.4888H14.8219L20.2664 24.9332L17.933 27.2665L8.73314 17.9332L17.933 8.59988L20.2664 10.9332Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`circle`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M14.8219 16.3777L20.2664 10.9333L17.933 8.59994L8.73314 17.9332L17.933 27.2666L20.2664 24.9333L14.8219 19.4888L27.2664 19.4888L27.2664 16.3777L14.8219 16.3777Z`,
          }),
        ],
      });
}
function fu({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM15.7332 24.9332L21.1776 19.4888H8.73315V16.3777H21.1776L15.7332 10.9332L18.0665 8.59991L27.2664 17.9333L18.0665 27.2666L15.7332 24.9332Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`circle`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M21.1776 19.4887L15.7332 24.9332L18.0665 27.2665L27.2664 17.9332L18.0665 8.59985L15.7332 10.9332L21.1776 16.3776L8.73315 16.3776L8.73315 19.4887L21.1776 19.4887Z`,
          }),
        ],
      });
}
function pu({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 100 36`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          d: `M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36H82C91.9411 36 100 27.9411 100 18C100 8.05888 91.9411 0 82 0H18ZM21.8011 11.5C22.6531 11.5 23.4391 11.62 24.1591 11.86C24.8791 12.1 25.4851 12.394 25.9771 12.742L24.8611 14.722C24.4171 14.41 23.9191 14.158 23.3671 13.966C22.8271 13.774 22.3111 13.678 21.8191 13.678C21.2191 13.678 20.7511 13.804 20.4151 14.056C20.0791 14.296 19.9111 14.632 19.9111 15.064C19.9111 15.496 20.1091 15.838 20.5051 16.09C20.9011 16.33 21.5071 16.594 22.3231 16.882C23.1631 17.182 23.8351 17.458 24.3391 17.71C24.8431 17.962 25.2811 18.334 25.6531 18.826C26.0371 19.306 26.2291 19.924 26.2291 20.68C26.2291 21.484 26.0191 22.18 25.5991 22.768C25.1911 23.356 24.6151 23.812 23.8711 24.136C23.1271 24.448 22.2751 24.604 21.3151 24.604C20.5351 24.604 19.7371 24.502 18.9211 24.298C18.1171 24.082 17.4091 23.794 16.7971 23.434L17.6251 21.238C18.2011 21.55 18.8071 21.802 19.4431 21.994C20.0911 22.174 20.7271 22.264 21.3511 22.264C22.0351 22.264 22.5451 22.132 22.8811 21.868C23.2291 21.604 23.4031 21.256 23.4031 20.824C23.4031 20.392 23.2171 20.056 22.8451 19.816C22.4731 19.576 21.9031 19.33 21.1351 19.078C20.2711 18.802 19.5751 18.538 19.0471 18.286C18.5191 18.022 18.0631 17.644 17.6791 17.152C17.3071 16.648 17.1211 15.994 17.1211 15.19C17.1211 14.446 17.3131 13.798 17.6971 13.246C18.0931 12.682 18.6451 12.25 19.3531 11.95C20.0611 11.65 20.8771 11.5 21.8011 11.5ZM35.2486 24.388H32.6026V14.056H28.7866V11.788H39.0646V14.056H35.2486V24.388ZM50.8108 11.788H42.3148V24.388H50.8108V22.102H44.9608V19.15H50.0008V16.882H44.9608V14.038H50.8108V11.788ZM65.8582 24.388H62.9962L62.1322 21.94H57.2002L56.3722 24.388H53.6182L58.3342 11.788H60.9982L65.8582 24.388ZM59.6482 14.794L57.9202 19.834H61.4122L59.6482 14.794ZM79.7729 11.788L75.8489 20.734L71.6009 11.788H69.0629V24.388H71.4749V16.468L74.9309 24.028H76.5329L79.9169 16.378V24.388H82.4549V11.788H79.7729Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 100 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M0 18C0 8.05888 8.05888 0 18 0H82C91.9411 0 100 8.05888 100 18C100 27.9411 91.9411 36 82 36H18C8.05888 36 0 27.9411 0 18Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M21.8011 11.5C22.6531 11.5 23.4391 11.62 24.1591 11.86C24.8791 12.1 25.4851 12.394 25.9771 12.742L24.8611 14.722C24.4171 14.41 23.9191 14.158 23.3671 13.966C22.8271 13.774 22.3111 13.678 21.8191 13.678C21.2191 13.678 20.7511 13.804 20.4151 14.056C20.0791 14.296 19.9111 14.632 19.9111 15.064C19.9111 15.496 20.1091 15.838 20.5051 16.09C20.9011 16.33 21.5071 16.594 22.3231 16.882C23.1631 17.182 23.8351 17.458 24.3391 17.71C24.8431 17.962 25.2811 18.334 25.6531 18.826C26.0371 19.306 26.2291 19.924 26.2291 20.68C26.2291 21.484 26.0191 22.18 25.5991 22.768C25.1911 23.356 24.6151 23.812 23.8711 24.136C23.1271 24.448 22.2751 24.604 21.3151 24.604C20.5351 24.604 19.7371 24.502 18.9211 24.298C18.1171 24.082 17.4091 23.794 16.7971 23.434L17.6251 21.238C18.2011 21.55 18.8071 21.802 19.4431 21.994C20.0911 22.174 20.7271 22.264 21.3511 22.264C22.0351 22.264 22.5451 22.132 22.8811 21.868C23.2291 21.604 23.4031 21.256 23.4031 20.824C23.4031 20.392 23.2171 20.056 22.8451 19.816C22.4731 19.576 21.9031 19.33 21.1351 19.078C20.2711 18.802 19.5751 18.538 19.0471 18.286C18.5191 18.022 18.0631 17.644 17.6791 17.152C17.3071 16.648 17.1211 15.994 17.1211 15.19C17.1211 14.446 17.3131 13.798 17.6971 13.246C18.0931 12.682 18.6451 12.25 19.3531 11.95C20.0611 11.65 20.8771 11.5 21.8011 11.5Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M35.2486 24.388H32.6026V14.056H28.7866V11.788H39.0646V14.056H35.2486V24.388Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M42.3148 11.788H50.8108V14.038H44.9608V16.882H50.0008V19.15H44.9608V22.102H50.8108V24.388H42.3148V11.788Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M65.8582 24.388H62.9962L62.1322 21.94H57.2002L56.3722 24.388H53.6182L58.3342 11.788H60.9982L65.8582 24.388ZM59.6482 14.794L57.9202 19.834H61.4122L59.6482 14.794Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M75.8489 20.734L79.7729 11.788H82.4549V24.388H79.9169V16.378L76.5329 24.028H74.9309L71.4749 16.468V24.388H69.0629V11.788H71.6009L75.8489 20.734Z`,
          }),
        ],
      });
}
function mu({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 81 36`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36H61C70.9411 36 79 27.9411 79 18C79 8.05888 70.9411 0 61 0H18ZM21.5 22.5C23.9853 22.5 26 20.4853 26 18C26 15.5147 23.9853 13.5 21.5 13.5C19.0147 13.5 17 15.5147 17 18C17 20.4853 19.0147 22.5 21.5 22.5ZM44 18C44 20.4853 41.9853 22.5 39.5 22.5C37.0147 22.5 35 20.4853 35 18C35 15.5147 37.0147 13.5 39.5 13.5C41.9853 13.5 44 15.5147 44 18ZM57.5 22.5C59.9853 22.5 62 20.4853 62 18C62 15.5147 59.9853 13.5 57.5 13.5C55.0147 13.5 53 15.5147 53 18C53 20.4853 55.0147 22.5 57.5 22.5Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 81 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M0 18C0 8.05888 8.05888 0 18 0H61C70.9411 0 79 8.05888 79 18C79 27.9411 70.9411 36 61 36H18C8.05888 36 0 27.9411 0 18Z`,
          }),
          (0, R.jsx)(`circle`, {
            className: U,
            fill: `currentColor`,
            cx: `21.5`,
            cy: `18`,
            r: `4.5`,
          }),
          (0, R.jsx)(`circle`, {
            className: U,
            fill: `currentColor`,
            cx: `39.5`,
            cy: `18`,
            r: `4.5`,
          }),
          (0, R.jsx)(`circle`, {
            className: U,
            fill: `currentColor`,
            cx: `57.5`,
            cy: `18`,
            r: `4.5`,
          }),
        ],
      });
}
function hu({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M12 6C5.37258 6 0 11.3726 0 18C0 24.6274 5.37258 30 12 30H36C42.6274 30 48 24.6274 48 18C48 11.3726 42.6274 6 36 6H12ZM31 11H17V25H31V11Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`rect`, {
            className: H,
            fill: `currentColor`,
            y: `6`,
            width: `48`,
            height: `24`,
            rx: `12`,
          }),
          (0, R.jsx)(`rect`, {
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
function gu({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M12 6C5.37258 6 0 11.3726 0 18C0 24.6274 5.37258 30 12 30H36C42.6274 30 48 24.6274 48 18C48 11.3726 42.6274 6 36 6H12ZM31 11H17V13.8H31V11ZM17 22.2H31V25H17V22.2ZM31 16.6H17V19.4H31V16.6Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`rect`, {
            className: H,
            fill: `currentColor`,
            y: `6`,
            width: `48`,
            height: `24`,
            rx: `12`,
          }),
          (0, R.jsx)(`rect`, {
            className: U,
            fill: `currentColor`,
            x: `17`,
            y: `11`,
            width: `14`,
            height: `2.8`,
          }),
          (0, R.jsx)(`rect`, {
            className: U,
            fill: `currentColor`,
            x: `17`,
            y: `22.2`,
            width: `14`,
            height: `2.8`,
          }),
          (0, R.jsx)(`rect`, {
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
function _u({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M7.5 0C3.35786 0 0 4.47715 0 10V30C0 31.1046 0.671574 32 1.5 32H34.5C35.3284 32 36 31.1046 36 30V2C36 0.895431 35.3284 0 34.5 0H7.5ZM9.36182 23H17.8218V20.624H12.0078V10.4H9.36182V23ZM25.7635 20.714V10.4H23.7296L19.5896 12.452L20.4356 14.432L23.0816 13.316V20.714H20.1115V23H28.1576V20.714H25.7635Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M0 10C0 4.47715 3.35786 0 7.5 0H34.5C35.3284 0 36 0.895431 36 2V30C36 31.1046 35.3284 32 34.5 32H1.5C0.671574 32 0 31.1046 0 30V10Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.8218 23H9.36182V10.4H12.0078V20.624H17.8218V23Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M25.7635 10.4V20.714H28.1576V23H20.1116V20.714H23.0816V13.316L20.4356 14.432L19.5896 12.452L23.7296 10.4H25.7635Z`,
          }),
        ],
      });
}
function vu({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M28.5 0C32.6421 0 36 4.47715 36 10V30C36 31.1046 35.3284 32 34.5 32H1.5C0.671573 32 0 31.1046 0 30V2C0 0.895431 0.671573 0 1.5 0H28.5ZM15.8185 23H18.7525L15.7825 18.23C16.5505 17.894 17.1445 17.402 17.5645 16.754C17.9965 16.106 18.2125 15.296 18.2125 14.324C18.2125 13.088 17.8045 12.128 16.9885 11.444C16.1725 10.748 14.9005 10.4 13.1725 10.4H8.45654V23H11.1025V18.752H12.9745H13.2805L15.8185 23ZM11.1025 16.484V12.65H13.0105C13.8385 12.65 14.4385 12.806 14.8105 13.118C15.1945 13.418 15.3865 13.874 15.3865 14.486C15.3865 15.11 15.1885 15.602 14.7925 15.962C14.4085 16.31 13.8685 16.484 13.1725 16.484H11.1025ZM26.6688 20.714V10.4H24.6348L20.4948 12.452L21.3408 14.432L23.9868 13.316V20.714H21.0168V23H29.0628V20.714H26.6688Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M36 10C36 4.47715 32.6421 0 28.5 0H1.5C0.671574 0 0 0.895431 0 2V30C0 31.1046 0.671574 32 1.5 32H34.5C35.3284 32 36 31.1046 36 30V10Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M18.7525 23H15.8185L13.2805 18.752H12.9745H11.1025V23H8.45654V10.4H13.1725C14.9005 10.4 16.1725 10.748 16.9885 11.444C17.8045 12.128 18.2125 13.088 18.2125 14.324C18.2125 15.296 17.9965 16.106 17.5645 16.754C17.1445 17.402 16.5505 17.894 15.7825 18.23L18.7525 23ZM11.1025 12.65V16.484H13.1725C13.8685 16.484 14.4085 16.31 14.7925 15.962C15.1885 15.602 15.3865 15.11 15.3865 14.486C15.3865 13.874 15.1945 13.418 14.8105 13.118C14.4385 12.806 13.8385 12.65 13.0105 12.65H11.1025Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M26.6688 10.4V20.714H29.0628V23H21.0168V20.714H23.9868V13.316L21.3408 14.432L20.4948 12.452L24.6348 10.4H26.6688Z`,
          }),
        ],
      });
}
function yu({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M7.5 32C3.35786 32 0 27.5228 0 22V2C0 0.895431 0.671574 0 1.5 0H34.5C35.3284 0 36 0.895431 36 2V30C36 31.1046 35.3284 32 34.5 32H7.5ZM29.0743 20.714H23.0083L25.6183 18.554C26.6623 17.69 27.4363 16.91 27.9403 16.214C28.4443 15.506 28.6963 14.72 28.6963 13.856C28.6963 12.68 28.2583 11.774 27.3823 11.138C26.5063 10.502 25.3423 10.184 23.8903 10.184C23.0743 10.184 22.3063 10.298 21.5863 10.526C20.8783 10.754 20.2483 11.06 19.6963 11.444L20.5963 13.388C20.9683 13.136 21.4003 12.926 21.8923 12.758C22.3963 12.59 22.9123 12.506 23.4403 12.506C24.1483 12.506 24.7243 12.668 25.1683 12.992C25.6243 13.304 25.8523 13.772 25.8523 14.396C25.8523 14.78 25.7623 15.134 25.5823 15.458C25.4023 15.782 25.1623 16.088 24.8623 16.376C24.5743 16.664 24.1543 17.042 23.6023 17.51L23.2963 17.78L19.6603 20.804V23H29.0743V20.714ZM9.32458 23H17.7846V20.624H11.9706V10.4H9.32458V23Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M0 22C0 27.5228 3.35786 32 7.5 32H34.5C35.3284 32 36 31.1046 36 30V2C36 0.895432 35.3284 0 34.5 0H1.5C0.671574 0 0 0.895432 0 2V22Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.7846 23H9.32458V10.4H11.9706V20.624H17.7846V23Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.0083 20.714H29.0743V23H19.6603V20.804L23.2963 17.78L23.6023 17.51C24.1543 17.042 24.5743 16.664 24.8623 16.376C25.1623 16.088 25.4023 15.782 25.5823 15.458C25.7623 15.134 25.8523 14.78 25.8523 14.396C25.8523 13.772 25.6243 13.304 25.1683 12.992C24.7243 12.668 24.1483 12.506 23.4403 12.506C22.9123 12.506 22.3963 12.59 21.8923 12.758C21.4003 12.926 20.9683 13.136 20.5963 13.388L19.6963 11.444C20.2483 11.06 20.8783 10.754 21.5863 10.526C22.3063 10.298 23.0743 10.184 23.8903 10.184C25.3423 10.184 26.5063 10.502 27.3823 11.138C28.2583 11.774 28.6963 12.68 28.6963 13.856C28.6963 14.72 28.4443 15.506 27.9403 16.214C27.4363 16.91 26.6623 17.69 25.6183 18.554L23.0083 20.714Z`,
          }),
        ],
      });
}
function bu({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M28.5 32C32.6421 32 36 27.5228 36 22V2C36 0.895431 35.3284 0 34.5 0H1.5C0.671573 0 0 0.895431 0 2V30C0 31.1046 0.671573 32 1.5 32H28.5ZM28.9796 20.714H22.9136L25.5236 18.554C26.5676 17.69 27.3416 16.91 27.8456 16.214C28.3496 15.506 28.6016 14.72 28.6016 13.856C28.6016 12.68 28.1636 11.774 27.2876 11.138C26.4116 10.502 25.2476 10.184 23.7956 10.184C22.9796 10.184 22.2116 10.298 21.4916 10.526C20.7836 10.754 20.1536 11.06 19.6016 11.444L20.5016 13.388C20.8736 13.136 21.3056 12.926 21.7976 12.758C22.3016 12.59 22.8176 12.506 23.3456 12.506C24.0536 12.506 24.6296 12.668 25.0736 12.992C25.5296 13.304 25.7576 13.772 25.7576 14.396C25.7576 14.78 25.6676 15.134 25.4876 15.458C25.3076 15.782 25.0676 16.088 24.7676 16.376C24.4796 16.664 24.0596 17.042 23.5076 17.51L23.2016 17.78L19.5656 20.804V23H28.9796V20.714ZM14.7813 23H17.7153L14.7453 18.23C15.5133 17.894 16.1073 17.402 16.5273 16.754C16.9593 16.106 17.1753 15.296 17.1753 14.324C17.1753 13.088 16.7673 12.128 15.9513 11.444C15.1353 10.748 13.8633 10.4 12.1353 10.4H7.41931V23H10.0653V18.752H11.9373H12.2433L14.7813 23ZM10.0653 16.484V12.65H11.9733C12.8013 12.65 13.4013 12.806 13.7733 13.118C14.1573 13.418 14.3493 13.874 14.3493 14.486C14.3493 15.11 14.1513 15.602 13.7553 15.962C13.3713 16.31 12.8313 16.484 12.1353 16.484H10.0653Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M36 22C36 27.5228 32.6421 32 28.5 32H1.5C0.671574 32 0 31.1046 0 30V2C0 0.895432 0.671574 0 1.5 0H34.5C35.3284 0 36 0.895432 36 2V22Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.7153 23H14.7813L12.2433 18.752H11.9373H10.0653V23H7.41931V10.4H12.1353C13.8633 10.4 15.1353 10.748 15.9513 11.444C16.7673 12.128 17.1753 13.088 17.1753 14.324C17.1753 15.296 16.9593 16.106 16.5273 16.754C16.1073 17.402 15.5133 17.894 14.7453 18.23L17.7153 23ZM10.0653 12.65V16.484H12.1353C12.8313 16.484 13.3713 16.31 13.7553 15.962C14.1513 15.602 14.3493 15.11 14.3493 14.486C14.3493 13.874 14.1573 13.418 13.7733 13.118C13.4013 12.806 12.8013 12.65 11.9733 12.65H10.0653Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M22.9136 20.714H28.9796V23H19.5656V20.804L23.2016 17.78L23.5076 17.51C24.0596 17.042 24.4796 16.664 24.7676 16.376C25.0676 16.088 25.3076 15.782 25.4876 15.458C25.6676 15.134 25.7576 14.78 25.7576 14.396C25.7576 13.772 25.5296 13.304 25.0736 12.992C24.6296 12.668 24.0536 12.506 23.3456 12.506C22.8176 12.506 22.3016 12.59 21.7976 12.758C21.3056 12.926 20.8736 13.136 20.5016 13.388L19.6016 11.444C20.1536 11.06 20.7836 10.754 21.4916 10.526C22.2116 10.298 22.9796 10.184 23.7956 10.184C25.2476 10.184 26.4116 10.502 27.2876 11.138C28.1636 11.774 28.6016 12.68 28.6016 13.856C28.6016 14.72 28.3496 15.506 27.8456 16.214C27.3416 16.91 26.5676 17.69 25.5236 18.554L22.9136 20.714Z`,
          }),
        ],
      });
}
function xu({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`path`, {
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, R.jsx)(`path`, {
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, R.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M18 30.75C27.9411 30.75 36 25.7132 36 19.5C36 13.2868 27.9411 8.25 18 8.25C8.05887 8.25 0 13.2868 0 19.5C0 25.7132 8.05887 30.75 18 30.75ZM25.4679 14.284C24.7852 13.7613 23.7879 13.5 22.4759 13.5C21.6972 13.5 20.9666 13.6173 20.2839 13.852C19.6119 14.0867 19.0092 14.4227 18.4759 14.86L19.4679 16.364C19.8199 16.0973 20.2146 15.8893 20.6519 15.74C21.0999 15.58 21.5639 15.5 22.0439 15.5C22.6732 15.5 23.1639 15.6227 23.5159 15.868C23.8786 16.1133 24.0599 16.4387 24.0599 16.844C24.0599 17.2813 23.8679 17.6227 23.4839 17.868C23.1106 18.1027 22.6146 18.22 21.9959 18.22H20.6999V19.996H22.1399C23.7079 19.996 24.4919 20.508 24.4919 21.532C24.4919 22.0547 24.2839 22.4653 23.8679 22.764C23.4626 23.0627 22.8972 23.212 22.1719 23.212C21.0306 23.212 20.0439 22.876 19.2119 22.204L18.2039 23.932C18.7052 24.3373 19.3186 24.652 20.0439 24.876C20.7799 25.1 21.5532 25.212 22.3639 25.212C23.2172 25.212 23.9959 25.068 24.6999 24.78C25.4039 24.4813 25.9586 24.0653 26.3639 23.532C26.7692 22.988 26.9719 22.364 26.9719 21.66C26.9719 20.892 26.7479 20.2787 26.2999 19.82C25.8626 19.3507 25.2866 19.0413 24.5719 18.892V18.844C25.1799 18.6093 25.6492 18.2733 25.9799 17.836C26.3212 17.388 26.4919 16.8813 26.4919 16.316C26.4919 15.484 26.1506 14.8067 25.4679 14.284ZM9.48901 24.956H17.009V22.844H11.841V13.756H9.48901V24.956Z`,
          }),
        ],
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`ellipse`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `19.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.009 24.956H9.48901V13.756H11.841V22.844H17.009V24.956Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M22.4759 13.5C23.7879 13.5 24.7852 13.7613 25.4679 14.284C26.1506 14.8067 26.4919 15.484 26.4919 16.316C26.4919 16.8813 26.3212 17.388 25.9799 17.836C25.6492 18.2733 25.1799 18.6093 24.5719 18.844V18.892C25.2866 19.0413 25.8626 19.3507 26.2999 19.82C26.7479 20.2787 26.9719 20.892 26.9719 21.66C26.9719 22.364 26.7692 22.988 26.3639 23.532C25.9586 24.0653 25.4039 24.4813 24.6999 24.78C23.9959 25.068 23.2172 25.212 22.3639 25.212C21.5532 25.212 20.7799 25.1 20.0439 24.876C19.3186 24.652 18.7052 24.3373 18.2039 23.932L19.2119 22.204C20.0439 22.876 21.0306 23.212 22.1719 23.212C22.8972 23.212 23.4626 23.0627 23.8679 22.764C24.2839 22.4653 24.4919 22.0547 24.4919 21.532C24.4919 20.508 23.7079 19.996 22.1399 19.996H20.6999V18.22H21.9959C22.6146 18.22 23.1106 18.1027 23.4839 17.868C23.8679 17.6227 24.0599 17.2813 24.0599 16.844C24.0599 16.4387 23.8786 16.1133 23.5159 15.868C23.1639 15.6227 22.6732 15.5 22.0439 15.5C21.5639 15.5 21.0999 15.58 20.6519 15.74C20.2146 15.8893 19.8199 16.0973 19.4679 16.364L18.4759 14.86C19.0092 14.4227 19.6119 14.0867 20.2839 13.852C20.9666 13.6173 21.6972 13.5 22.4759 13.5Z`,
          }),
        ],
      });
}
function Su({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`path`, {
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, R.jsx)(`path`, {
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, R.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M18 30.75C27.9411 30.75 36 25.7132 36 19.5C36 13.2868 27.9411 8.25 18 8.25C8.05887 8.25 0 13.2868 0 19.5C0 25.7132 8.05887 30.75 18 30.75ZM26.5882 14.284C25.9056 13.7613 24.9082 13.5 23.5962 13.5C22.8176 13.5 22.0869 13.6173 21.4043 13.852C20.7323 14.0867 20.1296 14.4227 19.5963 14.86L20.5882 16.364C20.9403 16.0973 21.3349 15.8893 21.7723 15.74C22.2202 15.58 22.6842 15.5 23.1642 15.5C23.7936 15.5 24.2843 15.6227 24.6362 15.868C24.9989 16.1133 25.1803 16.4387 25.1803 16.844C25.1803 17.2813 24.9883 17.6227 24.6043 17.868C24.2309 18.1027 23.7349 18.22 23.1162 18.22H21.8203V19.996H23.2603C24.8283 19.996 25.6122 20.508 25.6122 21.532C25.6122 22.0547 25.4042 22.4653 24.9883 22.764C24.5829 23.0627 24.0176 23.212 23.2923 23.212C22.1509 23.212 21.1643 22.876 20.3323 22.204L19.3242 23.932C19.8256 24.3373 20.4389 24.652 21.1642 24.876C21.9002 25.1 22.6736 25.212 23.4842 25.212C24.3376 25.212 25.1162 25.068 25.8202 24.78C26.5243 24.4813 27.0789 24.0653 27.4842 23.532C27.8896 22.988 28.0923 22.364 28.0923 21.66C28.0923 20.892 27.8682 20.2787 27.4202 19.82C26.9829 19.3507 26.4069 19.0413 25.6922 18.892V18.844C26.3002 18.6093 26.7696 18.2733 27.1003 17.836C27.4416 17.388 27.6122 16.8813 27.6122 16.316C27.6122 15.484 27.2709 14.8067 26.5882 14.284ZM15.544 24.956H18.152L15.512 20.716C16.1947 20.4173 16.7227 19.98 17.096 19.404C17.48 18.828 17.672 18.108 17.672 17.244C17.672 16.1453 17.3093 15.292 16.584 14.684C15.8587 14.0653 14.728 13.756 13.192 13.756H9V24.956H11.352V21.18H13.016H13.288L15.544 24.956ZM11.352 19.164V15.756H13.048C13.784 15.756 14.3173 15.8947 14.648 16.172C14.9893 16.4387 15.16 16.844 15.16 17.388C15.16 17.9427 14.984 18.38 14.632 18.7C14.2907 19.0093 13.8107 19.164 13.192 19.164H11.352Z`,
          }),
        ],
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`ellipse`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `19.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M18.152 24.956H15.544L13.288 21.18H13.016H11.352V24.956H9V13.756H13.192C14.728 13.756 15.8587 14.0653 16.584 14.684C17.3093 15.292 17.672 16.1453 17.672 17.244C17.672 18.108 17.48 18.828 17.096 19.404C16.7227 19.98 16.1947 20.4173 15.512 20.716L18.152 24.956ZM11.352 15.756V19.164H13.192C13.8107 19.164 14.2907 19.0093 14.632 18.7C14.984 18.38 15.16 17.9427 15.16 17.388C15.16 16.844 14.9893 16.4387 14.648 16.172C14.3173 15.8947 13.784 15.756 13.048 15.756H11.352Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.5962 13.5C24.9082 13.5 25.9056 13.7613 26.5882 14.284C27.2709 14.8067 27.6122 15.484 27.6122 16.316C27.6122 16.8813 27.4416 17.388 27.1003 17.836C26.7696 18.2733 26.3002 18.6093 25.6922 18.844V18.892C26.4069 19.0413 26.9829 19.3507 27.4202 19.82C27.8682 20.2787 28.0923 20.892 28.0923 21.66C28.0923 22.364 27.8896 22.988 27.4842 23.532C27.0789 24.0653 26.5243 24.4813 25.8202 24.78C25.1162 25.068 24.3376 25.212 23.4843 25.212C22.6736 25.212 21.9003 25.1 21.1643 24.876C20.4389 24.652 19.8256 24.3373 19.3243 23.932L20.3323 22.204C21.1643 22.876 22.1509 23.212 23.2923 23.212C24.0176 23.212 24.5829 23.0627 24.9882 22.764C25.4042 22.4653 25.6122 22.0547 25.6122 21.532C25.6122 20.508 24.8283 19.996 23.2603 19.996H21.8203V18.22H23.1163C23.7349 18.22 24.2309 18.1027 24.6043 17.868C24.9883 17.6227 25.1803 17.2813 25.1803 16.844C25.1803 16.4387 24.9989 16.1133 24.6363 15.868C24.2843 15.6227 23.7936 15.5 23.1643 15.5C22.6842 15.5 22.2203 15.58 21.7723 15.74C21.3349 15.8893 20.9403 16.0973 20.5883 16.364L19.5963 14.86C20.1296 14.4227 20.7323 14.0867 21.4043 13.852C22.0869 13.6173 22.8176 13.5 23.5962 13.5Z`,
          }),
        ],
      });
}
function Cu({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M18 24.75C27.9411 24.75 36 19.7132 36 13.5C36 7.2868 27.9411 2.25 18 2.25C8.05887 2.25 0 7.2868 0 13.5C0 19.7132 8.05887 24.75 18 24.75ZM20.8833 18.9875H23.6775L20.849 14.4447C21.5804 14.1247 22.1461 13.6561 22.5461 13.039C22.9575 12.4218 23.1633 11.6504 23.1633 10.7247C23.1633 9.54755 22.7747 8.63326 21.9975 7.98183C21.2204 7.31898 20.009 6.98755 18.3633 6.98755H13.8718V18.9875H16.3918V14.9418H18.1747H18.4661L20.8833 18.9875ZM16.3918 12.7818V9.13041H18.209C18.9975 9.13041 19.569 9.27898 19.9233 9.57612C20.289 9.86183 20.4718 10.2961 20.4718 10.879C20.4718 11.4733 20.2833 11.9418 19.9061 12.2847C19.5404 12.6161 19.0261 12.7818 18.3633 12.7818H16.3918Z`,
          }),
          (0, R.jsx)(`path`, {
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`ellipse`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `13.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.6775 18.9875H20.8833L18.4661 14.9418H18.1747H16.3918V18.9875H13.8718V6.98755H18.3633C20.009 6.98755 21.2204 7.31898 21.9975 7.98184C22.7747 8.63326 23.1633 9.54755 23.1633 10.7247C23.1633 11.6504 22.9575 12.4218 22.5461 13.039C22.1461 13.6561 21.5804 14.1247 20.849 14.4447L23.6775 18.9875ZM16.3918 9.13041V12.7818H18.3633C19.0261 12.7818 19.5404 12.6161 19.9061 12.2847C20.2833 11.9418 20.4718 11.4733 20.4718 10.879C20.4718 10.2961 20.289 9.86183 19.9233 9.57612C19.569 9.27898 18.9975 9.13041 18.209 9.13041H16.3918Z`,
          }),
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      });
}
function wu({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M18 24.75C27.9411 24.75 36 19.7132 36 13.5C36 7.2868 27.9411 2.25 18 2.25C8.05887 2.25 0 7.2868 0 13.5C0 19.7132 8.05887 24.75 18 24.75ZM14 19H23V16.7371H16.8149V7H14V19Z`,
          }),
          (0, R.jsx)(`path`, {
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`ellipse`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `13.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23 19H14V7H16.8149V16.7371H23V19Z`,
          }),
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      });
}
function Tu({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM8.62341 24.75H17.0834V22.374H11.2694V12.15H8.62341V24.75ZM27.3111 19.854V12.15H24.8631L18.6891 20.16V21.888H24.6291V24.75H27.3111V21.888H29.1291V19.854H27.3111ZM21.2631 19.854L24.7371 15.3V19.854H21.2631Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.0834 24.75H8.62341V12.15H11.2694V22.374H17.0834V24.75Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M27.3111 12.15V19.854H29.1291V21.888H27.3111V24.75H24.6291V21.888H18.6891V20.16L24.8631 12.15H27.3111ZM24.7371 15.3L21.2631 19.854H24.7371V15.3Z`,
          }),
        ],
      });
}
function Eu({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM8.23669 24.75H16.6967V22.374H10.8827V12.15H8.23669V24.75ZM27.3744 14.4V12.15H19.3284V18.648L21.0024 19.566C21.3744 19.266 21.7524 19.044 22.1364 18.9C22.5204 18.744 22.9404 18.666 23.3964 18.666C24.0084 18.666 24.4884 18.828 24.8364 19.152C25.1964 19.476 25.3764 19.944 25.3764 20.556C25.3764 21.252 25.1424 21.786 24.6744 22.158C24.2064 22.53 23.5464 22.716 22.6944 22.716C21.5664 22.716 20.5404 22.404 19.6164 21.78L18.6804 23.796C19.1484 24.192 19.7364 24.498 20.4444 24.714C21.1524 24.93 21.9144 25.038 22.7304 25.038C23.8344 25.038 24.7884 24.852 25.5924 24.48C26.4084 24.096 27.0264 23.562 27.4464 22.878C27.8784 22.194 28.0944 21.396 28.0944 20.484C28.0944 19.26 27.7524 18.33 27.0684 17.694C26.3964 17.046 25.4964 16.722 24.3684 16.722C23.9244 16.722 23.4804 16.776 23.0364 16.884C22.6044 16.98 22.2144 17.136 21.8664 17.352V14.4H27.3744Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M16.6967 24.75H8.23669V12.15H10.8827V22.374H16.6967V24.75Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M27.3744 12.15V14.4H21.8664V17.352C22.2144 17.136 22.6044 16.98 23.0364 16.884C23.4804 16.776 23.9244 16.722 24.3684 16.722C25.4964 16.722 26.3964 17.046 27.0684 17.694C27.7524 18.33 28.0944 19.26 28.0944 20.484C28.0944 21.396 27.8784 22.194 27.4464 22.878C27.0264 23.562 26.4084 24.096 25.5924 24.48C24.7884 24.852 23.8344 25.038 22.7304 25.038C21.9144 25.038 21.1524 24.93 20.4444 24.714C19.7364 24.498 19.1484 24.192 18.6804 23.796L19.6164 21.78C20.5404 22.404 21.5664 22.716 22.6944 22.716C23.5464 22.716 24.2064 22.53 24.6744 22.158C25.1424 21.786 25.3764 21.252 25.3764 20.556C25.3764 19.944 25.1964 19.476 24.8364 19.152C24.4884 18.828 24.0084 18.666 23.3964 18.666C22.9404 18.666 22.5204 18.744 22.1364 18.9C21.7524 19.044 21.3744 19.266 21.0024 19.566L19.3284 18.648V12.15H27.3744Z`,
          }),
        ],
      });
}
function Du({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM14.5176 24.75H17.4516L14.4816 19.98C15.2496 19.644 15.8436 19.152 16.2636 18.504C16.6956 17.856 16.9116 17.046 16.9116 16.074C16.9116 14.838 16.5036 13.878 15.6876 13.194C14.8716 12.498 13.5996 12.15 11.8716 12.15H7.15564V24.75H9.80164V20.502H11.6736H11.9796L14.5176 24.75ZM9.80164 18.234V14.4H11.7096C12.5376 14.4 13.1376 14.556 13.5096 14.868C13.8936 15.168 14.0856 15.624 14.0856 16.236C14.0856 16.86 13.8876 17.352 13.4916 17.712C13.1076 18.06 12.5676 18.234 11.8716 18.234H9.80164ZM27.6539 19.854V12.15H25.2059L19.0319 20.16V21.888H24.9719V24.75H27.6539V21.888H29.4719V19.854H27.6539ZM21.6059 19.854L25.0799 15.3V19.854H21.6059Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.4516 24.75H14.5176L11.9796 20.502H11.6736H9.80164V24.75H7.15564V12.15H11.8716C13.5996 12.15 14.8716 12.498 15.6876 13.194C16.5036 13.878 16.9116 14.838 16.9116 16.074C16.9116 17.046 16.6956 17.856 16.2636 18.504C15.8436 19.152 15.2496 19.644 14.4816 19.98L17.4516 24.75ZM9.80164 14.4V18.234H11.8716C12.5676 18.234 13.1076 18.06 13.4916 17.712C13.8876 17.352 14.0856 16.86 14.0856 16.236C14.0856 15.624 13.8936 15.168 13.5096 14.868C13.1376 14.556 12.5376 14.4 11.7096 14.4H9.80164Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M27.6539 12.15V19.854H29.4719V21.888H27.6539V24.75H24.9719V21.888H19.0319V20.16L25.2059 12.15H27.6539ZM25.0799 15.3L21.6059 19.854H25.0799V15.3Z`,
          }),
        ],
      });
}
function Ou({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM14.6934 24.75H17.6274L14.6574 19.98C15.4254 19.644 16.0194 19.152 16.4394 18.504C16.8714 17.856 17.0874 17.046 17.0874 16.074C17.0874 14.838 16.6794 13.878 15.8634 13.194C15.0474 12.498 13.7754 12.15 12.0474 12.15H7.33142V24.75H9.97742V20.502H11.8494H12.1554L14.6934 24.75ZM9.97742 18.234V14.4H11.8854C12.7134 14.4 13.3134 14.556 13.6854 14.868C14.0694 15.168 14.2614 15.624 14.2614 16.236C14.2614 16.86 14.0634 17.352 13.6674 17.712C13.2834 18.06 12.7434 18.234 12.0474 18.234H9.97742ZM28.2797 14.4V12.15H20.2337V18.648L21.9077 19.566C22.2797 19.266 22.6577 19.044 23.0417 18.9C23.4257 18.744 23.8457 18.666 24.3017 18.666C24.9137 18.666 25.3937 18.828 25.7417 19.152C26.1017 19.476 26.2817 19.944 26.2817 20.556C26.2817 21.252 26.0477 21.786 25.5797 22.158C25.1117 22.53 24.4517 22.716 23.5997 22.716C22.4717 22.716 21.4457 22.404 20.5217 21.78L19.5857 23.796C20.0537 24.192 20.6417 24.498 21.3497 24.714C22.0577 24.93 22.8197 25.038 23.6357 25.038C24.7397 25.038 25.6937 24.852 26.4977 24.48C27.3137 24.096 27.9317 23.562 28.3517 22.878C28.7837 22.194 28.9997 21.396 28.9997 20.484C28.9997 19.26 28.6577 18.33 27.9737 17.694C27.3017 17.046 26.4017 16.722 25.2737 16.722C24.8297 16.722 24.3857 16.776 23.9417 16.884C23.5097 16.98 23.1197 17.136 22.7717 17.352V14.4H28.2797Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.6274 24.75H14.6934L12.1554 20.502H11.8494H9.97742V24.75H7.33142V12.15H12.0474C13.7754 12.15 15.0474 12.498 15.8634 13.194C16.6794 13.878 17.0874 14.838 17.0874 16.074C17.0874 17.046 16.8714 17.856 16.4394 18.504C16.0194 19.152 15.4254 19.644 14.6574 19.98L17.6274 24.75ZM9.97742 14.4V18.234H12.0474C12.7434 18.234 13.2834 18.06 13.6674 17.712C14.0634 17.352 14.2614 16.86 14.2614 16.236C14.2614 15.624 14.0694 15.168 13.6854 14.868C13.3134 14.556 12.7134 14.4 11.8854 14.4H9.97742Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M28.2797 12.15V14.4H22.7717V17.352C23.1197 17.136 23.5097 16.98 23.9417 16.884C24.3857 16.776 24.8297 16.722 25.2737 16.722C26.4017 16.722 27.3017 17.046 27.9737 17.694C28.6577 18.33 28.9997 19.26 28.9997 20.484C28.9997 21.396 28.7837 22.194 28.3517 22.878C27.9317 23.562 27.3137 24.096 26.4977 24.48C25.6937 24.852 24.7397 25.038 23.6357 25.038C22.8197 25.038 22.0577 24.93 21.3497 24.714C20.6417 24.498 20.0537 24.192 19.5857 23.796L20.5217 21.78C21.4457 22.404 22.4717 22.716 23.5997 22.716C24.4517 22.716 25.1117 22.53 25.5797 22.158C26.0477 21.786 26.2817 21.252 26.2817 20.556C26.2817 19.944 26.1017 19.476 25.7417 19.152C25.3937 18.828 24.9137 18.666 24.3017 18.666C23.8457 18.666 23.4257 18.744 23.0417 18.9C22.6577 19.044 22.2797 19.266 21.9077 19.566L20.2337 18.648V12.15H28.2797Z`,
          }),
        ],
      });
}
function ku({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M5.73583 3C3.6326 3 1.88863 4.6288 1.74515 6.72713L0.292161 27.9771C0.134133 30.2883 1.96629 32.25 4.28284 32.25H31.7172C34.0337 32.25 35.8659 30.2883 35.7078 27.9771L34.2548 6.72713C34.1114 4.6288 32.3674 3 30.2642 3H5.73583ZM14.8236 24.0625H23.2836V21.6865H17.4696V11.4625H14.8236V24.0625Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M1.74515 6.72713C1.88863 4.6288 3.6326 3 5.73584 3H30.2642C32.3674 3 34.1114 4.6288 34.2548 6.72713L35.7078 27.9771C35.8659 30.2883 34.0337 32.25 31.7172 32.25H4.28284C1.96629 32.25 0.134134 30.2883 0.292162 27.9771L1.74515 6.72713Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.2836 24.0625H14.8236V11.4625H17.4696V21.6865H23.2836V24.0625Z`,
          }),
        ],
      });
}
function Au({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M6.6282 8C4.52356 8 2.77893 9.6309 2.63727 11.7308L1.28806 31.7308C1.13224 34.0406 2.96389 36 5.27899 36H30.7211C33.0362 36 34.8679 34.0406 34.7121 31.7308L33.3629 11.7308C33.2212 9.63091 31.4766 8 29.3719 8H6.6282ZM14.8237 28.0625H23.2837V25.6865H17.4697V15.4625H14.8237V28.0625Z`,
          }),
          (0, R.jsx)(`path`, {
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M2.63721 11.7308C2.77887 9.6309 4.5235 8 6.62814 8H29.3719C31.4765 8 33.2211 9.63091 33.3628 11.7308L34.712 31.7308C34.8678 34.0406 33.0362 36 30.7211 36H5.27893C2.96382 36 1.13218 34.0406 1.288 31.7308L2.63721 11.7308Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.2836 28.0625H14.8236V15.4625H17.4696V25.6865H23.2836V28.0625Z`,
          }),
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      });
}
function ju({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M5.7359 3C3.63266 3 1.88869 4.6288 1.74521 6.72713L0.292222 27.9771C0.134194 30.2883 1.96635 32.25 4.2829 32.25H31.7172C34.0338 32.25 35.8659 30.2883 35.7079 27.9771L34.2549 6.72713C34.1114 4.6288 32.3675 3 30.2642 3H5.7359ZM20.7179 24.0625H23.6519L20.6819 19.2925C21.4499 18.9565 22.0439 18.4645 22.4639 17.8165C22.8959 17.1685 23.1119 16.3585 23.1119 15.3865C23.1119 14.1505 22.7039 13.1905 21.8879 12.5065C21.0719 11.8105 19.7999 11.4625 18.0719 11.4625H13.3559V24.0625H16.0019V19.8145H17.8739H18.1799L20.7179 24.0625ZM16.0019 17.5465V13.7125H17.9099C18.7379 13.7125 19.3379 13.8685 19.7099 14.1805C20.0939 14.4805 20.2859 14.9365 20.2859 15.5485C20.2859 16.1725 20.0879 16.6645 19.6919 17.0245C19.3079 17.3725 18.7679 17.5465 18.0719 17.5465H16.0019Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M1.74515 6.72713C1.88863 4.6288 3.6326 3 5.73584 3H30.2642C32.3674 3 34.1114 4.6288 34.2548 6.72713L35.7078 27.9771C35.8659 30.2883 34.0337 32.25 31.7172 32.25H4.28284C1.96629 32.25 0.134134 30.2883 0.292162 27.9771L1.74515 6.72713Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.6518 24.0625H20.7178L18.1798 19.8145H17.8738H16.0018V24.0625H13.3558V11.4625H18.0718C19.7998 11.4625 21.0718 11.8105 21.8878 12.5065C22.7038 13.1905 23.1118 14.1505 23.1118 15.3865C23.1118 16.3585 22.8958 17.1685 22.4638 17.8165C22.0438 18.4645 21.4498 18.9565 20.6818 19.2925L23.6518 24.0625ZM16.0018 13.7125V17.5465H18.0718C18.7678 17.5465 19.3078 17.3725 19.6918 17.0245C20.0878 16.6645 20.2858 16.1725 20.2858 15.5485C20.2858 14.9365 20.0938 14.4805 19.7098 14.1805C19.3378 13.8685 18.7378 13.7125 17.9098 13.7125H16.0018Z`,
          }),
        ],
      });
}
function Mu({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M6.6282 8C4.52356 8 2.77893 9.6309 2.63727 11.7308L1.28806 31.7308C1.13224 34.0406 2.96389 36 5.27899 36H30.7211C33.0362 36 34.8679 34.0406 34.7121 31.7308L33.3629 11.7308C33.2212 9.63091 31.4766 8 29.3719 8H6.6282ZM20.7179 28.0625H23.6519L20.6819 23.2925C21.4499 22.9565 22.0439 22.4645 22.4639 21.8165C22.8959 21.1685 23.1119 20.3585 23.1119 19.3865C23.1119 18.1505 22.7039 17.1905 21.8879 16.5065C21.0719 15.8105 19.7999 15.4625 18.0719 15.4625H13.3559V28.0625H16.0019V23.8145H17.8739H18.1799L20.7179 28.0625ZM16.0019 21.5465V17.7125H17.9099C18.7379 17.7125 19.3379 17.8685 19.7099 18.1805C20.0939 18.4805 20.2859 18.9365 20.2859 19.5485C20.2859 20.1725 20.0879 20.6645 19.6919 21.0245C19.3079 21.3725 18.7679 21.5465 18.0719 21.5465H16.0019Z`,
          }),
          (0, R.jsx)(`path`, {
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M2.63721 11.7308C2.77887 9.6309 4.5235 8 6.62814 8H29.3719C31.4765 8 33.2211 9.63091 33.3628 11.7308L34.712 31.7308C34.8678 34.0406 33.0362 36 30.7211 36H5.27893C2.96382 36 1.13218 34.0406 1.288 31.7308L2.63721 11.7308Z`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M23.6518 28.0625H20.7178L18.1798 23.8145H17.8738H16.0018V28.0625H13.3558V15.4625H18.0718C19.7998 15.4625 21.0718 15.8105 21.8878 16.5065C22.7038 17.1905 23.1118 18.1505 23.1118 19.3865C23.1118 20.3585 22.8958 21.1685 22.4638 21.8165C22.0438 22.4645 21.4498 22.9565 20.6818 23.2925L23.6518 28.0625ZM16.0018 17.7125V21.5465H18.0718C18.7678 21.5465 19.3078 21.3725 19.6918 21.0245C20.0878 20.6645 20.2858 20.1725 20.2858 19.5485C20.2858 18.9365 20.0938 18.4805 19.7098 18.1805C19.3378 17.8685 18.7378 17.7125 17.9098 17.7125H16.0018Z`,
          }),
          (0, R.jsx)(`path`, {
            className: H,
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      });
}
function Nu({ bIsKnockout: e, ...t }) {
  return e
    ? (0, R.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, R.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.4999 10.8201C19.7519 10.4974 18.8719 10.3361 17.8599 10.3361C16.9799 10.3361 16.1219 10.4681 15.2859 10.7321C14.4499 10.9961 13.7166 11.3407 13.0859 11.7661L14.0759 13.9881C15.0586 13.2547 16.1073 12.8881 17.2219 12.8881C17.9699 12.8881 18.5493 13.0494 18.9599 13.3721C19.3853 13.6801 19.5979 14.1201 19.5979 14.6921C19.5979 15.1027 19.4953 15.4474 19.2899 15.7261C19.0846 16.0047 18.7693 16.3201 18.3439 16.6721C17.8893 17.0681 17.5153 17.4347 17.2219 17.7721C16.9286 18.1094 16.6793 18.5641 16.4739 19.1361C16.2686 19.7081 16.1659 20.4047 16.1659 21.2261H18.8499C18.8499 20.6541 18.9453 20.1554 19.1359 19.7301C19.3266 19.2901 19.5539 18.9234 19.8179 18.6301C20.0966 18.3221 20.4633 17.9701 20.9179 17.5741C21.3579 17.1781 21.7026 16.8407 21.9519 16.5621C22.2159 16.2834 22.4359 15.9461 22.6119 15.5501C22.7879 15.1541 22.8759 14.6994 22.8759 14.1861C22.8759 13.4234 22.6706 12.7561 22.2599 12.1841C21.8493 11.5974 21.2626 11.1427 20.4999 10.8201ZM18.7839 23.2721C18.4759 22.9494 18.0653 22.7881 17.5519 22.7881C17.0386 22.7881 16.6279 22.9494 16.3199 23.2721C16.0119 23.5801 15.8579 23.9907 15.8579 24.5041C15.8579 25.0467 16.0119 25.4794 16.3199 25.8021C16.6279 26.1101 17.0386 26.2641 17.5519 26.2641C18.0653 26.2641 18.4759 26.1101 18.7839 25.8021C19.0919 25.4794 19.2459 25.0467 19.2459 24.5041C19.2459 23.9907 19.0919 23.5801 18.7839 23.2721Z`,
        }),
      })
    : (0, R.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, R.jsx)(`circle`, {
            className: H,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, R.jsx)(`path`, {
            className: U,
            fill: `currentColor`,
            d: `M17.8599 10.3361C18.8719 10.3361 19.7519 10.4974 20.4999 10.8201C21.2626 11.1427 21.8493 11.5974 22.2599 12.1841C22.6706 12.7561 22.8759 13.4234 22.8759 14.1861C22.8759 14.6994 22.7879 15.1541 22.6119 15.5501C22.4359 15.9461 22.2159 16.2834 21.9519 16.5621C21.7026 16.8407 21.3579 17.1781 20.9179 17.5741C20.4633 17.9701 20.0966 18.3221 19.8179 18.6301C19.5539 18.9234 19.3266 19.2901 19.1359 19.7301C18.9453 20.1554 18.8499 20.6541 18.8499 21.2261H16.1659C16.1659 20.4047 16.2686 19.7081 16.4739 19.1361C16.6793 18.5641 16.9286 18.1094 17.2219 17.7721C17.5153 17.4347 17.8893 17.0681 18.3439 16.6721C18.7693 16.3201 19.0846 16.0047 19.2899 15.7261C19.4953 15.4474 19.5979 15.1027 19.5979 14.6921C19.5979 14.1201 19.3853 13.6801 18.9599 13.3721C18.5493 13.0494 17.9699 12.8881 17.2219 12.8881C16.1073 12.8881 15.0586 13.2547 14.0759 13.9881L13.0859 11.7661C13.7166 11.3407 14.4499 10.9961 15.2859 10.7321C16.1219 10.4681 16.9799 10.3361 17.8599 10.3361ZM17.5519 22.7881C18.0653 22.7881 18.4759 22.9494 18.7839 23.2721C19.0919 23.5801 19.2459 23.9907 19.2459 24.5041C19.2459 25.0467 19.0919 25.4794 18.7839 25.8021C18.4759 26.1101 18.0653 26.2641 17.5519 26.2641C17.0386 26.2641 16.6279 26.1101 16.3199 25.8021C16.0119 25.4794 15.8579 25.0467 15.8579 24.5041C15.8579 23.9907 16.0119 23.5801 16.3199 23.2721C16.6279 22.9494 17.0386 22.7881 17.5519 22.7881Z`,
          }),
        ],
      });
}
var Pu = `_5YxPcG58GcM-`,
  Fu = `AYShSUpazpQ-`,
  Iu = `HjTriTNInOs-`;
function Lu(e) {
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
    h = Qe(),
    [g, _] = (0, z.useState)(
      () => r || (!n && pe(m, `tab`) ? (pe(m, `tab`) ?? ``) : ``),
    );
  (0, z.useEffect)(() => {
    if (!e.bDisableRouting && m) {
      let e = pe(m, `tab`);
      e && _(e);
    }
  }, [m, e.bDisableRouting, _]);
  let v = z.useCallback(
      (e) => {
        (_(e.key),
          n || fe(h, `tab`, e.key),
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
    C = (0, R.jsxs)(R.Fragment, {
      children: [
        (0, R.jsx)(In, {
          className: F(
            Pu,
            d && `iBLrw-7gAIM-`,
            p && `dLhmGXBhTkM-`,
            f && `ShXw34CXvuE-`,
            o,
          ),
          navEntryPreferPosition: u ? Ze.PREFERRED_CHILD : Ze.FIRST,
          children: y.map((e, t) =>
            (0, R.jsx)(
              Ru,
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
        x && (0, R.jsx)(In, { className: l, children: x.contents }),
      ],
    });
  return d ? (0, R.jsx)(In, { className: F(Iu), children: C }) : C;
}
function Ru(e) {
  let {
    tab: t,
    OnTabClick: n,
    classNameTab: r,
    focusRingHasBorderRadius: i,
    active: a,
    preferredFocus: o,
  } = e;
  return (0, R.jsx)(pi, {
    condition: !!(t.statusToolTip || t.tooltip),
    wrap: (e) =>
      (0, R.jsx)(Jn, {
        toolTipContent: t.statusToolTip || t.tooltip,
        children: e,
      }),
    children: (0, R.jsxs)(In, {
      className: F(Fu, a && `Tw-TchJW1T8-`, a && `ActiveTab`, r),
      onActivate: () => n(t),
      preferredFocus: o,
      focusRingHasBorderRadius: i,
      children: [
        !!t.vo_warning &&
          (0, R.jsx)(Jn, {
            toolTipContent: t.vo_warning,
            children: (0, R.jsx)(`div`, {
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
var zu = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || Ir(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: Ci.readUint32, bw: ga.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= ei(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return ur(e.M(), t, n);
    }
    static fromObject(t) {
      return Gi(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Gr(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      Xr(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Request`;
    }
  },
  Bu = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.frame_rates || Ir(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { frame_rates: { n: 1, c: Vu, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= ei(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return ur(e.M(), t, n);
    }
    static fromObject(t) {
      return Gi(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Gr(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      Xr(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Response`;
    }
  },
  Vu = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clusterid || Ir(e.M()),
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
              br: Ci.readUint64String,
              bw: ga.writeUint64String,
            },
            report_days: { n: 4, br: Ci.readUint32, bw: ga.writeUint32 },
            report_count: {
              n: 5,
              br: Ci.readUint64String,
              bw: ga.writeUint64String,
            },
            mean_frame_rate: { n: 6, br: Ci.readDouble, bw: ga.writeDouble },
            frame_rate_histogram: {
              n: 8,
              r: !0,
              q: !0,
              br: Ci.readDouble,
              pbr: Ci.readPackedDouble,
              bw: ga.writeRepeatedDouble,
            },
            histogram_report_count: {
              n: 9,
              br: Ci.readUint64String,
              bw: ga.writeUint64String,
            },
            last_updated: { n: 10, br: Ci.readUint32, bw: ga.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= ei(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return ur(e.M(), t, n);
    }
    static fromObject(t) {
      return Gi(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Gr(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      Xr(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Response_FrameRate`;
    }
  },
  Hu;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `GamePerformanceStats.GetGameFrameRateStats#1`,
      We(zu, t, n),
      Bu,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  e.GetGameFrameRateStats = t;
})((Hu ||= {}));
function Uu(e) {
  let t = Aa(),
    { data: n } = p({
      queryKey: [`performancestats_` + e],
      queryFn: async () => {
        if (!e) return null;
        let n = hi.Init(zu);
        n.Body().set_appid(e);
        let r = await Hu.GetGameFrameRateStats(t, n);
        return r.BSuccess() ? r.Body().toObject() : null;
      },
    });
  return n ?? void 0;
}
function Wu(e, t = !0) {
  return p({
    queryKey: [`GetControllersUsed`],
    queryFn: async () => {
      let e;
      try {
        let t = `${ba.STORE_BASE_URL}account/ajaxgetcontrollersused`,
          n = await no.default.get(t, { withCredentials: !0 });
        if (n?.status === 200 && n?.data?.success === 1) return n.data.data;
        e = Zn(n);
      } catch (t) {
        e = Zn(t);
      }
      return (console.error(`usePlayerHardwareUsed failed:`, e), null);
    },
    select: e,
    enabled: t && !!Dr.accountid,
  });
}
function Gu(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = Gu(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function W() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Gu(e)) && (r && (r += ` `), (r += t));
  return r;
}
var Ku =
  `dangerouslySetInnerHTML.onCopy.onCopyCapture.onCut.onCutCapture.onPaste.onPasteCapture.onCompositionEnd.onCompositionEndCapture.onCompositionStart.onCompositionStartCapture.onCompositionUpdate.onCompositionUpdateCapture.onFocus.onFocusCapture.onBlur.onBlurCapture.onChange.onChangeCapture.onBeforeInput.onBeforeInputCapture.onInput.onInputCapture.onReset.onResetCapture.onSubmit.onSubmitCapture.onInvalid.onInvalidCapture.onLoad.onLoadCapture.onError.onErrorCapture.onKeyDown.onKeyDownCapture.onKeyPress.onKeyPressCapture.onKeyUp.onKeyUpCapture.onAbort.onAbortCapture.onCanPlay.onCanPlayCapture.onCanPlayThrough.onCanPlayThroughCapture.onDurationChange.onDurationChangeCapture.onEmptied.onEmptiedCapture.onEncrypted.onEncryptedCapture.onEnded.onEndedCapture.onLoadedData.onLoadedDataCapture.onLoadedMetadata.onLoadedMetadataCapture.onLoadStart.onLoadStartCapture.onPause.onPauseCapture.onPlay.onPlayCapture.onPlaying.onPlayingCapture.onProgress.onProgressCapture.onRateChange.onRateChangeCapture.onSeeked.onSeekedCapture.onSeeking.onSeekingCapture.onStalled.onStalledCapture.onSuspend.onSuspendCapture.onTimeUpdate.onTimeUpdateCapture.onVolumeChange.onVolumeChangeCapture.onWaiting.onWaitingCapture.onAuxClick.onAuxClickCapture.onClick.onClickCapture.onContextMenu.onContextMenuCapture.onDoubleClick.onDoubleClickCapture.onDrag.onDragCapture.onDragEnd.onDragEndCapture.onDragEnter.onDragEnterCapture.onDragExit.onDragExitCapture.onDragLeave.onDragLeaveCapture.onDragOver.onDragOverCapture.onDragStart.onDragStartCapture.onDrop.onDropCapture.onMouseDown.onMouseDownCapture.onMouseEnter.onMouseLeave.onMouseMove.onMouseMoveCapture.onMouseOut.onMouseOutCapture.onMouseOver.onMouseOverCapture.onMouseUp.onMouseUpCapture.onSelect.onSelectCapture.onTouchCancel.onTouchCancelCapture.onTouchEnd.onTouchEndCapture.onTouchMove.onTouchMoveCapture.onTouchStart.onTouchStartCapture.onPointerDown.onPointerDownCapture.onPointerMove.onPointerMoveCapture.onPointerUp.onPointerUpCapture.onPointerCancel.onPointerCancelCapture.onPointerEnter.onPointerEnterCapture.onPointerLeave.onPointerLeaveCapture.onPointerOver.onPointerOverCapture.onPointerOut.onPointerOutCapture.onGotPointerCapture.onGotPointerCaptureCapture.onLostPointerCapture.onLostPointerCaptureCapture.onScroll.onScrollCapture.onWheel.onWheelCapture.onAnimationStart.onAnimationStartCapture.onAnimationEnd.onAnimationEndCapture.onAnimationIteration.onAnimationIterationCapture.onTransitionEnd.onTransitionEndCapture`.split(
    `.`,
  );
function qu(e) {
  return typeof e == `string` && Ku.includes(e);
}
var Ju =
  `aria-activedescendant.aria-atomic.aria-autocomplete.aria-busy.aria-checked.aria-colcount.aria-colindex.aria-colspan.aria-controls.aria-current.aria-describedby.aria-details.aria-disabled.aria-errormessage.aria-expanded.aria-flowto.aria-haspopup.aria-hidden.aria-invalid.aria-keyshortcuts.aria-label.aria-labelledby.aria-level.aria-live.aria-modal.aria-multiline.aria-multiselectable.aria-orientation.aria-owns.aria-placeholder.aria-posinset.aria-pressed.aria-readonly.aria-relevant.aria-required.aria-roledescription.aria-rowcount.aria-rowindex.aria-rowspan.aria-selected.aria-setsize.aria-sort.aria-valuemax.aria-valuemin.aria-valuenow.aria-valuetext.className.color.height.id.lang.max.media.method.min.name.style.target.width.role.tabIndex.accentHeight.accumulate.additive.alignmentBaseline.allowReorder.alphabetic.amplitude.arabicForm.ascent.attributeName.attributeType.autoReverse.azimuth.baseFrequency.baselineShift.baseProfile.bbox.begin.bias.by.calcMode.capHeight.clip.clipPath.clipPathUnits.clipRule.colorInterpolation.colorInterpolationFilters.colorProfile.colorRendering.contentScriptType.contentStyleType.cursor.cx.cy.d.decelerate.descent.diffuseConstant.direction.display.divisor.dominantBaseline.dur.dx.dy.edgeMode.elevation.enableBackground.end.exponent.externalResourcesRequired.fill.fillOpacity.fillRule.filter.filterRes.filterUnits.floodColor.floodOpacity.focusable.fontFamily.fontSize.fontSizeAdjust.fontStretch.fontStyle.fontVariant.fontWeight.format.from.fx.fy.g1.g2.glyphName.glyphOrientationHorizontal.glyphOrientationVertical.glyphRef.gradientTransform.gradientUnits.hanging.horizAdvX.horizOriginX.href.ideographic.imageRendering.in2.in.intercept.k1.k2.k3.k4.k.kernelMatrix.kernelUnitLength.kerning.keyPoints.keySplines.keyTimes.lengthAdjust.letterSpacing.lightingColor.limitingConeAngle.local.markerEnd.markerHeight.markerMid.markerStart.markerUnits.markerWidth.mask.maskContentUnits.maskUnits.mathematical.mode.numOctaves.offset.opacity.operator.order.orient.orientation.origin.overflow.overlinePosition.overlineThickness.paintOrder.panose1.pathLength.patternContentUnits.patternTransform.patternUnits.pointerEvents.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.r.radius.refX.refY.renderingIntent.repeatCount.repeatDur.requiredExtensions.requiredFeatures.restart.result.rotate.rx.ry.seed.shapeRendering.slope.spacing.specularConstant.specularExponent.speed.spreadMethod.startOffset.stdDeviation.stemh.stemv.stitchTiles.stopColor.stopOpacity.strikethroughPosition.strikethroughThickness.string.stroke.strokeDasharray.strokeDashoffset.strokeLinecap.strokeLinejoin.strokeMiterlimit.strokeOpacity.strokeWidth.surfaceScale.systemLanguage.tableValues.targetX.targetY.textAnchor.textDecoration.textLength.textRendering.to.transform.u1.u2.underlinePosition.underlineThickness.unicode.unicodeBidi.unicodeRange.unitsPerEm.vAlphabetic.values.vectorEffect.version.vertAdvY.vertOriginX.vertOriginY.vHanging.vIdeographic.viewTarget.visibility.vMathematical.widths.wordSpacing.writingMode.x1.x2.x.xChannelSelector.xHeight.xlinkActuate.xlinkArcrole.xlinkHref.xlinkRole.xlinkShow.xlinkTitle.xlinkType.xmlBase.xmlLang.xmlns.xmlnsXlink.xmlSpace.y1.y2.y.yChannelSelector.z.zoomAndPan.ref.key.angle`.split(
    `.`,
  );
function Yu(e) {
  return typeof e == `string` && Ju.includes(e);
}
function Xu(e) {
  return typeof e == `string` && e.startsWith(`data-`);
}
function Zu(e) {
  var t = Object.entries(e).filter((e) => {
    var [t] = e;
    return Yu(t) || Xu(t);
  });
  return Object.fromEntries(t);
}
function Qu(e) {
  if (e == null) return null;
  if (
    (0, z.isValidElement)(e) &&
    typeof e.props == `object` &&
    e.props !== null
  ) {
    var t = e.props;
    return Zu(t);
  }
  return typeof e == `object` && !Array.isArray(e) ? Zu(e) : null;
}
function $u(e) {
  var t = Object.entries(e).filter((e) => {
    var [t] = e;
    return Yu(t) || Xu(t) || qu(t);
  });
  return Object.fromEntries(t);
}
function ed(e) {
  return e == null
    ? null
    : (0, z.isValidElement)(e)
      ? $u(e.props)
      : typeof e == `object` && !Array.isArray(e)
        ? $u(e)
        : null;
}
var td = [
  `children`,
  `width`,
  `height`,
  `viewBox`,
  `className`,
  `style`,
  `title`,
  `desc`,
];
function nd() {
  return (
    (nd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nd.apply(null, arguments)
  );
}
function rd(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = id(e, t);
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
function id(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var ad = (0, z.forwardRef)((e, t) => {
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
      u = rd(e, td),
      d = a || { width: r, height: i, x: 0, y: 0 },
      f = W(`recharts-surface`, o);
    return z.createElement(
      `svg`,
      nd({}, $u(u), {
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
  od = [`children`, `className`];
function sd() {
  return (
    (sd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    sd.apply(null, arguments)
  );
}
function cd(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = ld(e, t);
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
function ld(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var ud = z.forwardRef((e, t) => {
    var { children: n, className: r } = e,
      i = cd(e, od),
      a = W(`recharts-layer`, r);
    return z.createElement(`g`, sd({ className: a }, $u(i), { ref: t }), n);
  }),
  dd = (0, z.createContext)(null),
  fd = () => (0, z.useContext)(dd);
function G(e) {
  return function () {
    return e;
  };
}
var pd = Math.cos,
  md = Math.sin,
  hd = Math.sqrt,
  gd = Math.PI;
gd / 2;
var _d = 2 * gd,
  vd = Math.PI,
  yd = 2 * vd,
  bd = 1e-6,
  xd = yd - bd;
function Sd(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function Cd(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
  if (t > 15) return Sd;
  let n = 10 ** t;
  return function (e) {
    this._ += e[0];
    for (let t = 1, r = e.length; t < r; ++t)
      this._ += Math.round(arguments[t] * n) / n + e[t];
  };
}
var wd = class {
  constructor(e) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ``),
      (this._append = e == null ? Sd : Cd(e)));
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
    else if (d > bd) {
      if (!(Math.abs(u * s - c * l) > bd) || !i)
        this._append`L${(this._x1 = e)},${(this._y1 = t)}`;
      else {
        let f = n - a,
          p = r - o,
          m = s * s + c * c,
          h = f * f + p * p,
          g = Math.sqrt(m),
          _ = Math.sqrt(d),
          v = i * Math.tan((vd - Math.acos((m + d - h) / (2 * g * _))) / 2),
          y = v / _,
          b = v / g;
        (Math.abs(y - 1) > bd && this._append`L${e + y * l},${t + y * u}`,
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
      : (Math.abs(this._x1 - c) > bd || Math.abs(this._y1 - l) > bd) &&
        this._append`L${c},${l}`,
      n &&
        (d < 0 && (d = (d % yd) + yd),
        d > xd
          ? this._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${(this._x1 = c)},${(this._y1 = l)}`
          : d > bd &&
            this._append`A${n},${n},0,${+(d >= vd)},${u},${(this._x1 = e + n * Math.cos(i))},${(this._y1 = t + n * Math.sin(i))}`));
  }
  rect(e, t, n, r) {
    this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}h${(n = +n)}v${+r}h${-n}Z`;
  }
  toString() {
    return this._;
  }
};
wd.prototype;
function Td(e) {
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
    () => new wd(t)
  );
}
Array.prototype.slice;
function Ed(e) {
  return typeof e == `object` && `length` in e ? e : Array.from(e);
}
function Dd(e) {
  this._context = e;
}
Dd.prototype = {
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
function Od(e) {
  return new Dd(e);
}
function kd(e) {
  return e[0];
}
function Ad(e) {
  return e[1];
}
function jd(e, t) {
  var n = G(!0),
    r = null,
    i = Od,
    a = null,
    o = Td(s);
  ((e = typeof e == `function` ? e : e === void 0 ? kd : G(e)),
    (t = typeof t == `function` ? t : t === void 0 ? Ad : G(t)));
  function s(s) {
    var c,
      l = (s = Ed(s)).length,
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
function Md(e, t, n) {
  var r = null,
    i = G(!0),
    a = null,
    o = Od,
    s = null,
    c = Td(l);
  ((e = typeof e == `function` ? e : e === void 0 ? kd : G(+e)),
    (t = typeof t == `function` ? t : G(t === void 0 ? 0 : +t)),
    (n = typeof n == `function` ? n : n === void 0 ? Ad : G(+n)));
  function l(l) {
    var u,
      d,
      f,
      p = (l = Ed(l)).length,
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
    return jd().defined(i).curve(o).context(a);
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
var Nd = class {
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
function Pd(e) {
  return new Nd(e, !0);
}
function Fd(e) {
  return new Nd(e, !1);
}
var Id = {
    draw(e, t) {
      let n = hd(t / gd);
      (e.moveTo(n, 0), e.arc(0, 0, n, 0, _d));
    },
  },
  Ld = {
    draw(e, t) {
      let n = hd(t / 5) / 2;
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
  Rd = hd(1 / 3),
  zd = Rd * 2,
  Bd = {
    draw(e, t) {
      let n = hd(t / zd),
        r = n * Rd;
      (e.moveTo(0, -n),
        e.lineTo(r, 0),
        e.lineTo(0, n),
        e.lineTo(-r, 0),
        e.closePath());
    },
  },
  Vd = {
    draw(e, t) {
      let n = hd(t),
        r = -n / 2;
      e.rect(r, r, n, n);
    },
  },
  Hd = 0.8908130915292852,
  Ud = md(gd / 10) / md((7 * gd) / 10),
  Wd = md(_d / 10) * Ud,
  Gd = -pd(_d / 10) * Ud,
  Kd = {
    draw(e, t) {
      let n = hd(t * Hd),
        r = Wd * n,
        i = Gd * n;
      (e.moveTo(0, -n), e.lineTo(r, i));
      for (let t = 1; t < 5; ++t) {
        let a = (_d * t) / 5,
          o = pd(a),
          s = md(a);
        (e.lineTo(s * n, -o * n), e.lineTo(o * r - s * i, s * r + o * i));
      }
      e.closePath();
    },
  },
  qd = hd(3),
  Jd = {
    draw(e, t) {
      let n = -hd(t / (qd * 3));
      (e.moveTo(0, n * 2),
        e.lineTo(-qd * n, -n),
        e.lineTo(qd * n, -n),
        e.closePath());
    },
  },
  Yd = -0.5,
  Xd = hd(3) / 2,
  Zd = 1 / hd(12),
  Qd = (Zd / 2 + 1) * 3,
  $d = {
    draw(e, t) {
      let n = hd(t / Qd),
        r = n / 2,
        i = n * Zd,
        a = r,
        o = n * Zd + n,
        s = -a,
        c = o;
      (e.moveTo(r, i),
        e.lineTo(a, o),
        e.lineTo(s, c),
        e.lineTo(Yd * r - Xd * i, Xd * r + Yd * i),
        e.lineTo(Yd * a - Xd * o, Xd * a + Yd * o),
        e.lineTo(Yd * s - Xd * c, Xd * s + Yd * c),
        e.lineTo(Yd * r + Xd * i, Yd * i - Xd * r),
        e.lineTo(Yd * a + Xd * o, Yd * o - Xd * a),
        e.lineTo(Yd * s + Xd * c, Yd * c - Xd * s),
        e.closePath());
    },
  };
function ef(e, t) {
  let n = null,
    r = Td(i);
  ((e = typeof e == `function` ? e : G(e || Id)),
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
function tf() {}
function nf(e, t, n) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + n) / 6,
  );
}
function rf(e) {
  this._context = e;
}
rf.prototype = {
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
        nf(this, this._x1, this._y1);
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
        nf(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function af(e) {
  return new rf(e);
}
function of(e) {
  this._context = e;
}
of.prototype = {
  areaStart: tf,
  areaEnd: tf,
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
        nf(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function sf(e) {
  return new of(e);
}
function cf(e) {
  this._context = e;
}
cf.prototype = {
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
        nf(this, e, t);
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function lf(e) {
  return new cf(e);
}
function uf(e) {
  this._context = e;
}
uf.prototype = {
  areaStart: tf,
  areaEnd: tf,
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
function df(e) {
  return new uf(e);
}
function ff(e) {
  return e < 0 ? -1 : 1;
}
function pf(e, t, n) {
  var r = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (r || (i < 0 && -0)),
    o = (n - e._y1) / (i || (r < 0 && -0)),
    s = (a * i + o * r) / (r + i);
  return (
    (ff(a) + ff(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0
  );
}
function mf(e, t) {
  var n = e._x1 - e._x0;
  return n ? ((3 * (e._y1 - e._y0)) / n - t) / 2 : t;
}
function hf(e, t, n) {
  var r = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    s = (a - r) / 3;
  e._context.bezierCurveTo(r + s, i + s * t, a - s, o - s * n, a, o);
}
function gf(e) {
  this._context = e;
}
gf.prototype = {
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
        hf(this, this._t0, mf(this, this._t0));
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
          ((this._point = 3), hf(this, mf(this, (n = pf(this, e, t))), n));
          break;
        default:
          hf(this, this._t0, (n = pf(this, e, t)));
      }
      ((this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = n));
    }
  },
};
function _f(e) {
  this._context = new vf(e);
}
(_f.prototype = Object.create(gf.prototype)).point = function (e, t) {
  gf.prototype.point.call(this, t, e);
};
function vf(e) {
  this._context = e;
}
vf.prototype = {
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
function yf(e) {
  return new gf(e);
}
function bf(e) {
  return new _f(e);
}
function xf(e) {
  this._context = e;
}
xf.prototype = {
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
        for (var r = Sf(e), i = Sf(t), a = 0, o = 1; o < n; ++a, ++o)
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
function Sf(e) {
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
function Cf(e) {
  return new xf(e);
}
function wf(e, t) {
  ((this._context = e), (this._t = t));
}
wf.prototype = {
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
function Tf(e) {
  return new wf(e, 0.5);
}
function Ef(e) {
  return new wf(e, 0);
}
function Df(e) {
  return new wf(e, 1);
}
function Of(e, t) {
  if ((o = e.length) > 1)
    for (var n = 1, r, i, a = e[t[0]], o, s = a.length; n < o; ++n)
      for (i = a, a = e[t[n]], r = 0; r < s; ++r)
        a[r][1] += a[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
}
function kf(e) {
  for (var t = e.length, n = Array(t); --t >= 0;) n[t] = t;
  return n;
}
function Af(e, t) {
  return e[t];
}
function jf(e) {
  let t = [];
  return ((t.key = e), t);
}
function Mf() {
  var e = G([]),
    t = kf,
    n = Of,
    r = Af;
  function i(i) {
    var a = Array.from(e.apply(this, arguments), jf),
      o,
      s = a.length,
      c = -1,
      l;
    for (let e of i)
      for (o = 0, ++c; o < s; ++o)
        (a[o][c] = [0, +r(e, a[o].key, c, i)]).data = e;
    for (o = 0, l = Ed(t(a)); o < s; ++o) a[l[o]].index = o;
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
        ? ((t = e == null ? kf : typeof e == `function` ? e : G(Array.from(e))),
          i)
        : t;
    }),
    (i.offset = function (e) {
      return arguments.length ? ((n = e ?? Of), i) : n;
    }),
    i
  );
}
function Nf(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = n = 0; n < r; ++n) o += e[n][i][1] || 0;
      if (o) for (n = 0; n < r; ++n) e[n][i][1] /= o;
    }
    Of(e, t);
  }
}
function Pf(e, t) {
  if ((i = e.length) > 0) {
    for (var n = 0, r = e[t[0]], i, a = r.length; n < a; ++n) {
      for (var o = 0, s = 0; o < i; ++o) s += e[o][n][1] || 0;
      r[n][1] += r[n][0] = -s / 2;
    }
    Of(e, t);
  }
}
function Ff(e, t) {
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
    ((i[r - 1][1] += i[r - 1][0] = n), Of(e, t));
  }
}
var If = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e === `__proto__`;
    }
    e.isUnsafeProperty = t;
  }),
  Lf = n((e) => {
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
  Rf = n((e) => {
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
  zf = n((e) => {
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
  Bf = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = If(),
      n = Lf(),
      r = Rf(),
      i = zf();
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
  Vf = n((e, t) => {
    t.exports = Bf().get;
  }),
  Hf = e(Vf()),
  Uf = (e) => (e === 0 ? 0 : e > 0 ? 1 : -1),
  Wf = (e) => typeof e == `number` && e != +e,
  Gf = (e) => typeof e == `string` && e.indexOf(`%`) === e.length - 1,
  K = (e) => (typeof e == `number` || e instanceof Number) && !Wf(e),
  Kf = (e) => K(e) || typeof e == `string`,
  qf = 0,
  Jf = (e) => {
    var t = ++qf;
    return `${e || ``}${t}`;
  },
  Yf = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      r = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    if (!K(e) && typeof e != `string`) return n;
    var i;
    if (Gf(e)) {
      if (t == null) return n;
      var a = e.indexOf(`%`);
      i = (t * parseFloat(e.slice(0, a))) / 100;
    } else i = +e;
    return (Wf(i) && (i = n), r && t != null && i > t && (i = t), i);
  },
  Xf = (e) => {
    if (!Array.isArray(e)) return !1;
    for (var t = e.length, n = {}, r = 0; r < t; r++)
      if (!n[e[r]]) n[e[r]] = !0;
      else return !0;
    return !1;
  };
function Zf(e, t, n) {
  return K(e) && K(t) ? e + n * (t - e) : t;
}
function Qf(e, t, n) {
  if (e && e.length)
    return e.find(
      (e) => e && (typeof t == `function` ? t(e) : (0, Hf.default)(e, t)) === n,
    );
}
var $f = (e) => e == null,
  ep = (e) => ($f(e) ? e : `${e.charAt(0).toUpperCase()}${e.slice(1)}`),
  tp = [`type`, `size`, `sizeType`];
function np() {
  return (
    (np = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    np.apply(null, arguments)
  );
}
function rp(e, t) {
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
function ip(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? rp(Object(n), !0).forEach(function (t) {
          ap(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : rp(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ap(e, t, n) {
  return (
    (t = op(t)) in e
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
function op(e) {
  var t = sp(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function sp(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function cp(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = lp(e, t);
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
function lp(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var up = {
    symbolCircle: Id,
    symbolCross: Ld,
    symbolDiamond: Bd,
    symbolSquare: Vd,
    symbolStar: Kd,
    symbolTriangle: Jd,
    symbolWye: $d,
  },
  dp = Math.PI / 180,
  fp = (e) => up[`symbol${ep(e)}`] || Id,
  pp = (e, t, n) => {
    if (t === `area`) return e;
    switch (n) {
      case `cross`:
        return (5 * e * e) / 9;
      case `diamond`:
        return (0.5 * e * e) / Math.sqrt(3);
      case `square`:
        return e * e;
      case `star`:
        var r = 18 * dp;
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
  mp = (e, t) => {
    up[`symbol${ep(e)}`] = t;
  },
  hp = (e) => {
    var { type: t = `circle`, size: n = 64, sizeType: r = `area` } = e,
      i = ip(ip({}, cp(e, tp)), {}, { type: t, size: n, sizeType: r }),
      a = `circle`;
    typeof t == `string` && (a = t);
    var o = () => {
        var e = fp(a),
          t = ef()
            .type(e)
            .size(pp(n, r, a))();
        if (t !== null) return t;
      },
      { className: s, cx: c, cy: l } = i,
      u = $u(i);
    return c === +c && l === +l && n === +n
      ? z.createElement(
          `path`,
          np({}, u, {
            className: W(`recharts-symbols`, s),
            transform: `translate(${c}, ${l})`,
            d: o(),
          }),
        )
      : null;
  };
hp.registerSymbol = mp;
var gp = (e, t) => {
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
        qu(e) && (r[e] = t || ((t) => n[e](n, t)));
      }),
      r
    );
  },
  _p = (e, t, n) => (r) => (e(t, n, r), null),
  vp = (e, t, n) => {
    if (e === null || (typeof e != `object` && typeof e != `function`))
      return null;
    var r = null;
    return (
      Object.keys(e).forEach((i) => {
        var a = e[i];
        qu(i) && typeof a == `function` && ((r ||= {}), (r[i] = _p(a, t, n)));
      }),
      r
    );
  },
  yp = n((e) => {
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
  bp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e;
    }
    e.identity = t;
  }),
  xp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Number.isSafeInteger(e) && e >= 0;
    }
    e.isLength = t;
  }),
  Sp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = xp();
    function n(e) {
      return e != null && typeof e != `function` && t.isLength(e.length);
    }
    e.isArrayLike = n;
  }),
  Cp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `object` && !!e;
    }
    e.isObjectLike = t;
  }),
  wp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Sp(),
      n = Cp();
    function r(e) {
      return n.isObjectLike(e) && t.isArrayLike(e);
    }
    e.isArrayLikeObject = r;
  }),
  Tp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Bf();
    function n(e) {
      return function (n) {
        return t.get(n, e);
      };
    }
    e.property = n;
  }),
  Ep = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e !== null && (typeof e == `object` || typeof e == `function`);
    }
    e.isObject = t;
  }),
  Dp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e == null || (typeof e != `object` && typeof e != `function`);
    }
    e.isPrimitive = t;
  }),
  Op = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e, t) {
      return e === t || (Number.isNaN(e) && Number.isNaN(t));
    }
    e.eq = t;
  }),
  kp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Ap(),
      n = Ep(),
      r = Dp(),
      i = Op();
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
  Ap = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = kp();
    function n(e, n) {
      return t.isMatchWith(e, n, () => void 0);
    }
    e.isMatch = n;
  }),
  jp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Object.getOwnPropertySymbols(e).filter((t) =>
        Object.prototype.propertyIsEnumerable.call(e, t),
      );
    }
    e.getSymbols = t;
  }),
  Mp = n((e) => {
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
  Np = n((e) => {
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
  Pp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return ArrayBuffer.isView(e) && !(e instanceof DataView);
    }
    e.isTypedArray = t;
  }),
  Fp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = jp(),
      n = Mp(),
      r = Np(),
      i = Dp(),
      a = Pp();
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
  Ip = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Fp();
    function n(e) {
      return t.cloneDeepWithImpl(e, void 0, e, new Map(), void 0);
    }
    e.cloneDeep = n;
  }),
  Lp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Ap(),
      n = Ip();
    function r(e) {
      return ((e = n.cloneDeep(e)), (n) => t.isMatch(n, e));
    }
    e.matches = r;
  }),
  Rp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Fp(),
      n = Np();
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
  zp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Rp();
    function n(e) {
      return t.cloneDeepWith(e);
    }
    e.cloneDeep = n;
  }),
  Bp = n((e) => {
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
  Vp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Mp();
    function n(e) {
      return (
        typeof e == `object` && !!e && t.getTag(e) === `[object Arguments]`
      );
    }
    e.isArguments = n;
  }),
  Hp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Lf(),
      n = Bp(),
      r = Vp(),
      i = zf();
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
  Up = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Ap(),
      n = Rf(),
      r = zp(),
      i = Bf(),
      a = Hp();
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
  Wp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = bp(),
      n = Tp(),
      r = Lp(),
      i = Up();
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
  Gp = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = yp(),
      n = bp(),
      r = wp(),
      i = Wp();
    function a(e, a = n.identity) {
      return r.isArrayLikeObject(e)
        ? t.uniqBy(Array.from(e), i.iteratee(a))
        : [];
    }
    e.uniqBy = a;
  }),
  Kp = e(
    n((e, t) => {
      t.exports = Gp().uniqBy;
    })(),
  );
function qp(e, t, n) {
  return t === !0
    ? (0, Kp.default)(e, n)
    : typeof t == `function`
      ? (0, Kp.default)(e, t)
      : e;
}
var Jp = n((e) => {
    var t = i(),
      n = u();
    function r(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var a = typeof Object.is == `function` ? Object.is : r,
      o = n.useSyncExternalStore,
      s = t.useRef,
      c = t.useEffect,
      l = t.useMemo,
      d = t.useDebugValue;
    e.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
      var u = s(null);
      if (u.current === null) {
        var f = { hasValue: !1, value: null };
        u.current = f;
      } else f = u.current;
      u = l(
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
  Yp = n((e, t) => {
    t.exports = Jp();
  })(),
  Xp = (0, z.createContext)(null),
  Zp = (e) => e,
  q = () => {
    var e = (0, z.useContext)(Xp);
    return e ? e.store.dispatch : Zp;
  },
  Qp = () => {},
  $p = () => Qp,
  em = (e, t) => e === t;
function J(e) {
  var t = (0, z.useContext)(Xp);
  return (0, Yp.useSyncExternalStoreWithSelector)(
    t ? t.subscription.addNestedSub : $p,
    t ? t.store.getState : Qp,
    t ? t.store.getState : Qp,
    t ? e : Qp,
    em,
  );
}
function tm(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function nm(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != `object`) throw TypeError(t);
}
function rm(
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
var im = (e) => (Array.isArray(e) ? e : [e]);
function am(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    rm(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    t
  );
}
function om(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var sm = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  cm = typeof WeakRef < `u` ? WeakRef : sm,
  lm = 0,
  um = 1;
function dm() {
  return { s: lm, v: void 0, o: null, p: null };
}
function fm(e, t = {}) {
  let n = dm(),
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
        r === void 0 ? ((t = dm()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = dm()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === um) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = i?.deref?.() ?? i;
      (e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new cm(c)
            : c));
    }
    return ((s.s = um), (s.v = c), c);
  }
  return (
    (o.clearCache = () => {
      ((n = dm()), o.resetResultsCount());
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function pm(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      (typeof o == `object` && ((a = o), (o = e.pop())),
        tm(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`,
        ));
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = fm,
          argsMemoizeOptions: u = [],
          devModeChecks: d = {},
        } = { ...n, ...a },
        f = im(c),
        p = im(u),
        m = am(e),
        h = s(
          function () {
            return (t++, o.apply(null, arguments));
          },
          ...f,
        ),
        g = l(
          function () {
            r++;
            let e = om(m, arguments);
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
var Y = pm(fm),
  mm = Object.assign(
    (e, t = Y) => {
      nm(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {}),
      );
    },
    { withTypes: () => mm },
  ),
  hm = n((e) => {
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
  gm = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return typeof e == `symbol` || e instanceof Symbol;
    }
    e.isSymbol = t;
  }),
  _m = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = gm(),
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
  vm = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = hm(),
      n = _m(),
      r = zf();
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
  ym = n((e) => {
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
  bm = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Bp(),
      n = Sp(),
      r = Ep(),
      i = Op();
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
  xm = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = vm(),
      n = ym(),
      r = bm();
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
  Sm = e(
    n((e, t) => {
      t.exports = xm().sortBy;
    })(),
  ),
  Cm = (e) => e.legend.settings,
  wm = (e) => e.legend.size,
  Tm = Y([(e) => e.legend.payload, Cm], (e, t) => {
    var { itemSorter: n } = t,
      r = e.flat(1);
    return n ? (0, Sm.default)(r, n) : r;
  }),
  Em = 1;
function Dm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    [t, n] = (0, z.useState)({ height: 0, left: 0, top: 0, width: 0 });
  return [
    t,
    (0, z.useCallback)(
      (e) => {
        if (e != null) {
          var r = e.getBoundingClientRect(),
            i = { height: r.height, left: r.left, top: r.top, width: r.width };
          (Math.abs(i.height - t.height) > Em ||
            Math.abs(i.left - t.left) > Em ||
            Math.abs(i.top - t.top) > Em ||
            Math.abs(i.width - t.width) > Em) &&
            n({ height: i.height, left: i.left, top: i.top, width: i.width });
        }
      },
      [t.width, t.height, t.top, t.left, ...e],
    ),
  ];
}
function Om(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var km = (typeof Symbol == `function` && Symbol.observable) || `@@observable`,
  Am = () => Math.random().toString(36).substring(7).split(``).join(`.`),
  jm = {
    INIT: `@@redux/INIT${Am()}`,
    REPLACE: `@@redux/REPLACE${Am()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Am()}`,
  };
function Mm(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Nm(e, t, n) {
  if (typeof e != `function`) throw Error(Om(2));
  if (
    (typeof t == `function` && typeof n == `function`) ||
    (typeof n == `function` && typeof arguments[3] == `function`)
  )
    throw Error(Om(0));
  if (
    (typeof t == `function` && n === void 0 && ((n = t), (t = void 0)),
    n !== void 0)
  ) {
    if (typeof n != `function`) throw Error(Om(1));
    return n(Nm)(e, t);
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
    if (c) throw Error(Om(3));
    return i;
  }
  function d(e) {
    if (typeof e != `function`) throw Error(Om(4));
    if (c) throw Error(Om(5));
    let t = !0;
    l();
    let n = s++;
    return (
      o.set(n, e),
      function () {
        if (t) {
          if (c) throw Error(Om(6));
          ((t = !1), l(), o.delete(n), (a = null));
        }
      }
    );
  }
  function f(e) {
    if (!Mm(e)) throw Error(Om(7));
    if (e.type === void 0) throw Error(Om(8));
    if (typeof e.type != `string`) throw Error(Om(17));
    if (c) throw Error(Om(9));
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
    if (typeof e != `function`) throw Error(Om(10));
    ((r = e), f({ type: jm.REPLACE }));
  }
  function m() {
    let e = d;
    return {
      subscribe(t) {
        if (typeof t != `object` || !t) throw Error(Om(11));
        function n() {
          let e = t;
          e.next && e.next(u());
        }
        return (n(), { unsubscribe: e(n) });
      },
      [km]() {
        return this;
      },
    };
  }
  return (
    f({ type: jm.INIT }),
    { dispatch: f, subscribe: d, getState: u, replaceReducer: p, [km]: m }
  );
}
function Pm(e) {
  Object.keys(e).forEach((t) => {
    let n = e[t];
    if (n(void 0, { type: jm.INIT }) === void 0) throw Error(Om(12));
    if (n(void 0, { type: jm.PROBE_UNKNOWN_ACTION() }) === void 0)
      throw Error(Om(13));
  });
}
function Fm(e) {
  let t = Object.keys(e),
    n = {};
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    typeof e[i] == `function` && (n[i] = e[i]);
  }
  let r = Object.keys(n),
    i;
  try {
    Pm(n);
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
      if (u === void 0) throw (t && t.type, Error(Om(14)));
      ((o[s] = u), (a ||= u !== l));
    }
    return ((a ||= r.length !== Object.keys(e).length), a ? o : e);
  };
}
function Im(...e) {
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
function Lm(...e) {
  return (t) => (n, r) => {
    let i = t(n, r),
      a = () => {
        throw Error(Om(15));
      },
      o = { getState: i.getState, dispatch: (e, ...t) => a(e, ...t) };
    return ((a = Im(...e.map((e) => e(o)))(i.dispatch)), { ...i, dispatch: a });
  };
}
function Rm(e) {
  return Mm(e) && `type` in e && typeof e.type == `string`;
}
var zm = Symbol.for(`immer-nothing`),
  Bm = Symbol.for(`immer-draftable`),
  Vm = Symbol.for(`immer-state`);
function Hm(e, ...t) {
  throw Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var Um = Object.getPrototypeOf;
function Wm(e) {
  return !!e && !!e[Vm];
}
function Gm(e) {
  return e
    ? Jm(e) ||
        Array.isArray(e) ||
        !!e[Bm] ||
        !!e.constructor?.[Bm] ||
        eh(e) ||
        th(e)
    : !1;
}
var Km = Object.prototype.constructor.toString(),
  qm = new WeakMap();
function Jm(e) {
  if (!e || typeof e != `object`) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null || t === Object.prototype) return !0;
  let n = Object.hasOwnProperty.call(t, `constructor`) && t.constructor;
  if (n === Object) return !0;
  if (typeof n != `function`) return !1;
  let r = qm.get(n);
  return (
    r === void 0 && ((r = Function.toString.call(n)), qm.set(n, r)), r === Km
  );
}
function Ym(e, t, n = !0) {
  Xm(e) === 0
    ? (n ? Reflect.ownKeys(e) : Object.keys(e)).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Xm(e) {
  let t = e[Vm];
  return t ? t.type_ : Array.isArray(e) ? 1 : eh(e) ? 2 : th(e) ? 3 : 0;
}
function Zm(e, t) {
  return Xm(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Qm(e, t, n) {
  let r = Xm(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function $m(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
function eh(e) {
  return e instanceof Map;
}
function th(e) {
  return e instanceof Set;
}
function nh(e) {
  return e.copy_ || e.base_;
}
function rh(e, t) {
  if (eh(e)) return new Map(e);
  if (th(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  let n = Jm(e);
  if (t === !0 || (t === `class_only` && !n)) {
    let t = Object.getOwnPropertyDescriptors(e);
    delete t[Vm];
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
    return Object.create(Um(e), t);
  }
  {
    let t = Um(e);
    if (t !== null && n) return { ...e };
    let r = Object.create(t);
    return Object.assign(r, e);
  }
}
function ih(e, t = !1) {
  return (
    sh(e) ||
      Wm(e) ||
      !Gm(e) ||
      (Xm(e) > 1 &&
        Object.defineProperties(e, { set: oh, add: oh, clear: oh, delete: oh }),
      Object.freeze(e),
      t && Object.values(e).forEach((e) => ih(e, !0))),
    e
  );
}
function ah() {
  Hm(2);
}
var oh = { value: ah };
function sh(e) {
  return typeof e != `object` || !e || Object.isFrozen(e);
}
var ch = {};
function lh(e) {
  let t = ch[e];
  return (t || Hm(0, e), t);
}
var uh;
function dh() {
  return uh;
}
function fh(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function ph(e, t) {
  t &&
    (lh(`Patches`),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function mh(e) {
  (hh(e), e.drafts_.forEach(_h), (e.drafts_ = null));
}
function hh(e) {
  e === uh && (uh = e.parent_);
}
function gh(e) {
  return (uh = fh(uh, e));
}
function _h(e) {
  let t = e[Vm];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function vh(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  let n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Vm].modified_ && (mh(t), Hm(4)),
        Gm(e) && ((e = yh(t, e)), t.parent_ || xh(t, e)),
        t.patches_ &&
          lh(`Patches`).generateReplacementPatches_(
            n[Vm].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = yh(t, n, [])),
    mh(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e === zm ? void 0 : e
  );
}
function yh(e, t, n) {
  if (sh(t)) return t;
  let r = e.immer_.shouldUseStrictIteration(),
    i = t[Vm];
  if (!i) return (Ym(t, (r, a) => bh(e, i, t, r, a, n), r), t);
  if (i.scope_ !== e) return t;
  if (!i.modified_) return (xh(e, i.base_, !0), i.base_);
  if (!i.finalized_) {
    ((i.finalized_ = !0), i.scope_.unfinalizedDrafts_--);
    let t = i.copy_,
      a = t,
      o = !1;
    (i.type_ === 3 && ((a = new Set(t)), t.clear(), (o = !0)),
      Ym(a, (r, a) => bh(e, i, t, r, a, n, o), r),
      xh(e, t, !1),
      n &&
        e.patches_ &&
        lh(`Patches`).generatePatches_(i, n, e.patches_, e.inversePatches_));
  }
  return i.copy_;
}
function bh(e, t, n, r, i, a, o) {
  if (i == null || (typeof i != `object` && !o)) return;
  let s = sh(i);
  if (!s || o) {
    if (Wm(i)) {
      let o = yh(
        e,
        i,
        a && t && t.type_ !== 3 && !Zm(t.assigned_, r) ? a.concat(r) : void 0,
      );
      if ((Qm(n, r, o), Wm(o))) e.canAutoFreeze_ = !1;
      else return;
    } else o && n.add(i);
    if (Gm(i) && !s) {
      if (
        (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) ||
        (t && t.base_ && t.base_[r] === i && s)
      )
        return;
      (yh(e, i),
        (!t || !t.scope_.parent_) &&
          typeof r != `symbol` &&
          (eh(n)
            ? n.has(r)
            : Object.prototype.propertyIsEnumerable.call(n, r)) &&
          xh(e, i));
    }
  }
}
function xh(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ih(t, n);
}
function Sh(e, t) {
  let n = Array.isArray(e),
    r = {
      type_: +!!n,
      scope_: t ? t.scope_ : dh(),
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
    a = Ch;
  n && ((i = [r]), (a = wh));
  let { revoke: o, proxy: s } = Proxy.revocable(i, a);
  return ((r.draft_ = s), (r.revoke_ = o), s);
}
var Ch = {
    get(e, t) {
      if (t === Vm) return e;
      let n = nh(e);
      if (!Zm(n, t)) return Eh(e, n, t);
      let r = n[t];
      return e.finalized_ || !Gm(r)
        ? r
        : r === Th(e.base_, t)
          ? (kh(e), (e.copy_[t] = jh(r, e)))
          : r;
    },
    has(e, t) {
      return t in nh(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(nh(e));
    },
    set(e, t, n) {
      let r = Dh(nh(e), t);
      if (r?.set) return (r.set.call(e.draft_, n), !0);
      if (!e.modified_) {
        let r = Th(nh(e), t),
          i = r?.[Vm];
        if (i && i.base_ === n)
          return ((e.copy_[t] = n), (e.assigned_[t] = !1), !0);
        if ($m(n, r) && (n !== void 0 || Zm(e.base_, t))) return !0;
        (kh(e), Oh(e));
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
        Th(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), kh(e), Oh(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      let n = nh(e),
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
      Hm(11);
    },
    getPrototypeOf(e) {
      return Um(e.base_);
    },
    setPrototypeOf() {
      Hm(12);
    },
  },
  wh = {};
(Ym(Ch, (e, t) => {
  wh[e] = function () {
    return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
  };
}),
  (wh.deleteProperty = function (e, t) {
    return wh.set.call(this, e, t, void 0);
  }),
  (wh.set = function (e, t, n) {
    return Ch.set.call(this, e[0], t, n, e[0]);
  }));
function Th(e, t) {
  let n = e[Vm];
  return (n ? nh(n) : e)[t];
}
function Eh(e, t, n) {
  let r = Dh(t, n);
  return r ? (`value` in r ? r.value : r.get?.call(e.draft_)) : void 0;
}
function Dh(e, t) {
  if (!(t in e)) return;
  let n = Um(e);
  for (; n;) {
    let e = Object.getOwnPropertyDescriptor(n, t);
    if (e) return e;
    n = Um(n);
  }
}
function Oh(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Oh(e.parent_));
}
function kh(e) {
  e.copy_ ||= rh(e.base_, e.scope_.immer_.useStrictShallowCopy_);
}
var Ah = class {
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
        (typeof t != `function` && Hm(6),
          n !== void 0 && typeof n != `function` && Hm(7));
        let r;
        if (Gm(e)) {
          let i = gh(this),
            a = jh(e, void 0),
            o = !0;
          try {
            ((r = t(a)), (o = !1));
          } finally {
            o ? mh(i) : hh(i);
          }
          return (ph(i, n), vh(r, i));
        }
        if (!e || typeof e != `object`) {
          if (
            ((r = t(e)),
            r === void 0 && (r = e),
            r === zm && (r = void 0),
            this.autoFreeze_ && ih(r, !0),
            n)
          ) {
            let t = [],
              i = [];
            (lh(`Patches`).generateReplacementPatches_(e, r, t, i), n(t, i));
          }
          return r;
        }
        Hm(1, e);
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
    (Gm(e) || Hm(8), Wm(e) && (e = Mh(e)));
    let t = gh(this),
      n = jh(e, void 0);
    return ((n[Vm].isManual_ = !0), hh(t), n);
  }
  finishDraft(e, t) {
    let n = e && e[Vm];
    (n && n.isManual_) || Hm(9);
    let { scope_: r } = n;
    return (ph(r, t), vh(void 0, r));
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
    let r = lh(`Patches`).applyPatches_;
    return Wm(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
  }
};
function jh(e, t) {
  let n = eh(e)
    ? lh(`MapSet`).proxyMap_(e, t)
    : th(e)
      ? lh(`MapSet`).proxySet_(e, t)
      : Sh(e, t);
  return ((t ? t.scope_ : dh()).drafts_.push(n), n);
}
function Mh(e) {
  return (Wm(e) || Hm(10, e), Nh(e));
}
function Nh(e) {
  if (!Gm(e) || sh(e)) return e;
  let t = e[Vm],
    n,
    r = !0;
  if (t) {
    if (!t.modified_) return t.base_;
    ((t.finalized_ = !0),
      (n = rh(e, t.scope_.immer_.useStrictShallowCopy_)),
      (r = t.scope_.immer_.shouldUseStrictIteration()));
  } else n = rh(e, !0);
  return (
    Ym(
      n,
      (e, t) => {
        Qm(n, e, Nh(t));
      },
      r,
    ),
    t && (t.finalized_ = !1),
    n
  );
}
var Ph = new Ah(),
  Fh = Ph.produce,
  Ih = Ph.setUseStrictIteration.bind(Ph);
function Lh(e) {
  return e;
}
function Rh(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != `function`) throw TypeError(t);
}
function zh(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != `object`) throw TypeError(t);
}
function Bh(
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
var Vh = (e) => (Array.isArray(e) ? e : [e]);
function Hh(e) {
  let t = Array.isArray(e[0]) ? e[0] : e;
  return (
    Bh(
      t,
      `createSelector expects all input-selectors to be functions, but received the following types: `,
    ),
    t
  );
}
function Uh(e, t) {
  let n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var Wh = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  Gh = typeof WeakRef < `u` ? WeakRef : Wh,
  Kh = 0,
  qh = 1;
function Jh() {
  return { s: Kh, v: void 0, o: null, p: null };
}
function Yh(e, t = {}) {
  let n = Jh(),
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
        r === void 0 ? ((t = Jh()), e.set(n, t)) : (t = r);
      } else {
        let e = t.p;
        e === null && (t.p = e = new Map());
        let r = e.get(n);
        r === void 0 ? ((t = Jh()), e.set(n, t)) : (t = r);
      }
    }
    let s = t,
      c;
    if (t.s === qh) c = t.v;
    else if (((c = e.apply(null, arguments)), a++, r)) {
      let e = i?.deref?.() ?? i;
      (e != null && r(e, c) && ((c = e), a !== 0 && a--),
        (i =
          (typeof c == `object` && c) || typeof c == `function`
            ? new Gh(c)
            : c));
    }
    return ((s.s = qh), (s.v = c), c);
  }
  return (
    (o.clearCache = () => {
      ((n = Jh()), o.resetResultsCount());
    }),
    (o.resultsCount = () => a),
    (o.resetResultsCount = () => {
      a = 0;
    }),
    o
  );
}
function Xh(e, ...t) {
  let n = typeof e == `function` ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t = 0,
        r = 0,
        i,
        a = {},
        o = e.pop();
      (typeof o == `object` && ((a = o), (o = e.pop())),
        Rh(
          o,
          `createSelector expects an output function after the inputs, but received: [${typeof o}]`,
        ));
      let {
          memoize: s,
          memoizeOptions: c = [],
          argsMemoize: l = Yh,
          argsMemoizeOptions: u = [],
          devModeChecks: d = {},
        } = { ...n, ...a },
        f = Vh(c),
        p = Vh(u),
        m = Hh(e),
        h = s(
          function () {
            return (t++, o.apply(null, arguments));
          },
          ...f,
        ),
        g = l(
          function () {
            r++;
            let e = Uh(m, arguments);
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
var Zh = Xh(Yh),
  Qh = Object.assign(
    (e, t = Zh) => {
      zh(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {}),
      );
    },
    { withTypes: () => Qh },
  );
function $h(e) {
  return ({ dispatch: t, getState: n }) =>
    (r) =>
    (i) =>
      typeof i == `function` ? i(t, n, e) : r(i);
}
var eg = $h(),
  tg = $h;
((...e) => {
  let t = Xh(...e),
    n = Object.assign(
      (...e) => {
        let n = t(...e),
          r = (e, ...t) => n(Wm(e) ? Mh(e) : e, ...t);
        return (Object.assign(r, n), r);
      },
      { withTypes: () => n },
    );
  return n;
})(Yh);
var ng =
  typeof window < `u` && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == `object`
            ? Im
            : Im.apply(null, arguments);
      };
typeof window < `u` &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__;
var rg = (e) => e && typeof e.match == `function`;
function ig(e, t) {
  function n(...n) {
    if (t) {
      let r = t(...n);
      if (!r) throw Error(C_(0));
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
    (n.match = (t) => Rm(t) && t.type === e),
    n
  );
}
var ag = class e extends Array {
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
function og(e) {
  return Gm(e) ? Fh(e, () => {}) : e;
}
function sg(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function cg(e) {
  return typeof e == `boolean`;
}
var lg = () =>
    function (e) {
      let {
          thunk: t = !0,
          immutableCheck: n = !0,
          serializableCheck: r = !0,
          actionCreatorCheck: i = !0,
        } = e ?? {},
        a = new ag();
      return (t && (cg(t) ? a.push(eg) : a.push(tg(t.extraArgument))), a);
    },
  ug = `RTK_autoBatch`,
  dg = () => (e) => ({ payload: e, meta: { [ug]: !0 } }),
  fg = (e) => (t) => {
    setTimeout(t, e);
  },
  pg =
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
                : fg(10)
              : e.type === `callback`
                ? e.queueNotification
                : fg(e.timeout),
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
              (i = !e?.meta?.[ug]),
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
  mg = (e) =>
    function (t) {
      let { autoBatch: n = !0 } = t ?? {},
        r = new ag(e);
      return (n && r.push(pg(typeof n == `object` ? n : void 0)), r);
    };
function hg(e) {
  let t = lg(),
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
  else if (Mm(n)) c = Fm(n);
  else throw Error(C_(1));
  let l;
  l = typeof r == `function` ? r(t) : t();
  let u = Im;
  i && (u = ng({ trace: !1, ...(typeof i == `object` && i) }));
  let d = mg(Lm(...l)),
    f = typeof s == `function` ? s(d) : d(),
    p = u(...f);
  return Nm(c, o, p);
}
function gg(e) {
  let t = {},
    n = [],
    r,
    i = {
      addCase(e, n) {
        let r = typeof e == `string` ? e : e.type;
        if (!r) throw Error(C_(28));
        if (r in t) throw Error(C_(29));
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
Ih(!1);
function _g(e) {
  return typeof e == `function`;
}
function vg(e, t) {
  let [n, r, i] = gg(t),
    a;
  if (_g(e)) a = () => og(e());
  else {
    let t = og(e);
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
          if (Wm(e)) {
            let r = n(e, t);
            return r === void 0 ? e : r;
          }
          if (Gm(e)) return Fh(e, (e) => n(e, t));
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
var yg = (e, t) => (rg(e) ? e.match(t) : e(t));
function bg(...e) {
  return (t) => e.some((e) => yg(e, t));
}
var xg = `ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW`,
  Sg = (e = 21) => {
    let t = ``,
      n = e;
    for (; n--;) t += xg[(Math.random() * 64) | 0];
    return t;
  },
  Cg = [`name`, `message`, `stack`, `code`],
  wg = class {
    constructor(e, t) {
      ((this.payload = e), (this.meta = t));
    }
    _type;
  },
  Tg = class {
    constructor(e, t) {
      ((this.payload = e), (this.meta = t));
    }
    _type;
  },
  Eg = (e) => {
    if (typeof e == `object` && e) {
      let t = {};
      for (let n of Cg) typeof e[n] == `string` && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  Dg = `External signal was aborted`;
(() => {
  function e(e, t, n) {
    let r = ig(e + `/fulfilled`, (e, t, n, r) => ({
        payload: e,
        meta: {
          ...(r || {}),
          arg: n,
          requestId: t,
          requestStatus: `fulfilled`,
        },
      })),
      i = ig(e + `/pending`, (e, t, n) => ({
        payload: void 0,
        meta: { ...(n || {}), arg: t, requestId: e, requestStatus: `pending` },
      })),
      a = ig(e + `/rejected`, (e, t, r, i, a) => ({
        payload: i,
        error: ((n && n.serializeError) || Eg)(e || `Rejected`),
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
        let u = n?.idGenerator ? n.idGenerator(e) : Sg(),
          d = new AbortController(),
          f,
          p;
        function m(e) {
          ((p = e), d.abort());
        }
        o &&
          (o.aborted
            ? m(Dg)
            : o.addEventListener(`abort`, () => m(Dg), { once: !0 }));
        let h = (async function () {
          let o;
          try {
            let a = n?.condition?.(e, { getState: c, extra: l });
            if ((kg(a) && (a = await a), a === !1 || d.signal.aborted))
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
                    rejectWithValue: (e, t) => new wg(e, t),
                    fulfillWithValue: (e, t) => new Tg(e, t),
                  }),
                ).then((t) => {
                  if (t instanceof wg) throw t;
                  return t instanceof Tg
                    ? r(t.payload, u, e, t.meta)
                    : r(t, u, e);
                }),
              ])));
          } catch (t) {
            o = t instanceof wg ? a(null, u, e, t.payload, t.meta) : a(t, u, e);
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
            return h.then(Og);
          },
        });
      };
    }
    return Object.assign(o, {
      pending: i,
      rejected: a,
      fulfilled: r,
      settled: bg(a, r),
      typePrefix: e,
    });
  }
  return ((e.withTypes = () => e), e);
})();
function Og(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function kg(e) {
  return typeof e == `object` && !!e && typeof e.then == `function`;
}
var Ag = Symbol.for(`rtk-slice-createasyncthunk`),
  jg = ((e) => (
    (e.reducer = `reducer`),
    (e.reducerWithPrepare = `reducerWithPrepare`),
    (e.asyncThunk = `asyncThunk`),
    e
  ))(jg || {});
function Mg(e, t) {
  return `${e}/${t}`;
}
function Ng({ creators: e } = {}) {
  let t = e?.asyncThunk?.[Ag];
  return function (e) {
    let { name: n, reducerPath: r = n } = e;
    if (!n) throw Error(C_(11));
    let i =
        (typeof e.reducers == `function` ? e.reducers(Ig()) : e.reducers) || {},
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
          if (!n) throw Error(C_(12));
          if (n in o.sliceCaseReducersByType) throw Error(C_(13));
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
          type: Mg(n, r),
          createNotation: typeof e.reducers == `function`,
        };
      Rg(a) ? Bg(o, a, s, t) : Lg(o, a, s);
    });
    function c() {
      let [t = {}, n = [], r = void 0] =
          typeof e.extraReducers == `function`
            ? gg(e.extraReducers)
            : [e.extraReducers],
        i = { ...t, ...o.sliceCaseReducersByType };
      return vg(e.initialState, (e) => {
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
        return (typeof i > `u` && n && (i = sg(d, r, m)), i);
      }
      function i(t = l) {
        return sg(
          sg(u, n, () => new WeakMap()),
          t,
          () => {
            let r = {};
            for (let [i, a] of Object.entries(e.selectors ?? {}))
              r[i] = Pg(a, t, () => sg(d, t, m), n);
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
function Pg(e, t, n, r) {
  function i(i, ...a) {
    let o = t(i);
    return (typeof o > `u` && r && (o = n()), e(o, ...a));
  }
  return ((i.unwrapped = e), i);
}
var Fg = Ng();
function Ig() {
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
function Lg({ type: e, reducerName: t, createNotation: n }, r, i) {
  let a, o;
  if (`reducer` in r) {
    if (n && !zg(r)) throw Error(C_(17));
    ((a = r.reducer), (o = r.prepare));
  } else a = r;
  i.addCase(e, a)
    .exposeCaseReducer(t, a)
    .exposeAction(t, o ? ig(e, o) : ig(e));
}
function Rg(e) {
  return e._reducerDefinitionType === `asyncThunk`;
}
function zg(e) {
  return e._reducerDefinitionType === `reducerWithPrepare`;
}
function Bg({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw Error(C_(18));
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
      fulfilled: o || Vg,
      pending: s || Vg,
      rejected: c || Vg,
      settled: l || Vg,
    }));
}
function Vg() {}
var Hg = `task`,
  Ug = `listener`,
  Wg = `completed`,
  Gg = `cancelled`,
  Kg = `task-${Gg}`,
  qg = `task-${Wg}`,
  Jg = `${Ug}-${Gg}`,
  Yg = `${Ug}-${Wg}`,
  Xg = class {
    constructor(e) {
      ((this.code = e), (this.message = `${Hg} ${Gg} (reason: ${e})`));
    }
    name = `TaskAbortError`;
    message;
  },
  Zg = (e, t) => {
    if (typeof e != `function`) throw TypeError(C_(32));
  },
  Qg = () => {},
  $g = (e, t = Qg) => (e.catch(t), e),
  e_ = (e, t) => (
    e.addEventListener(`abort`, t, { once: !0 }),
    () => e.removeEventListener(`abort`, t)
  ),
  t_ = (e, t) => {
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
  n_ = (e) => {
    if (e.aborted) {
      let { reason: t } = e;
      throw new Xg(t);
    }
  };
function r_(e, t) {
  let n = Qg;
  return new Promise((r, i) => {
    let a = () => i(new Xg(e.reason));
    e.aborted ? a() : ((n = e_(e, a)), t.finally(() => n()).then(r, i));
  }).finally(() => {
    n = Qg;
  });
}
var i_ = async (e, t) => {
    try {
      return (await Promise.resolve(), { status: `ok`, value: await e() });
    } catch (e) {
      return { status: e instanceof Xg ? `cancelled` : `rejected`, error: e };
    } finally {
      t?.();
    }
  },
  a_ = (e) => (t) => $g(r_(e, t).then((t) => (n_(e), t))),
  o_ = (e) => {
    let t = a_(e);
    return (e) => t(new Promise((t) => setTimeout(t, e)));
  },
  { assign: s_ } = Object,
  c_ = {},
  l_ = `listenerMiddleware`,
  u_ = (e, t) => {
    let n = (t) => e_(e, () => t_(t, e.reason));
    return (r, i) => {
      Zg(r, `taskExecutor`);
      let a = new AbortController();
      n(a);
      let o = i_(
        async () => {
          (n_(e), n_(a.signal));
          let t = await r({
            pause: a_(a.signal),
            delay: o_(a.signal),
            signal: a.signal,
          });
          return (n_(a.signal), t);
        },
        () => t_(a, qg),
      );
      return (
        i?.autoJoin && t.push(o.catch(Qg)),
        {
          result: a_(e)(o),
          cancel() {
            t_(a, Kg);
          },
        }
      );
    };
  },
  d_ = (e, t) => {
    let n = async (n, r) => {
      n_(t);
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
        let e = await r_(t, Promise.race(a));
        return (n_(t), e);
      } finally {
        i();
      }
    };
    return (e, t) => $g(n(e, t));
  },
  f_ = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: i, effect: a } = e;
    if (t) i = ig(t).match;
    else if (n) ((t = n.type), (i = n.match));
    else if (r) i = r;
    else if (!i) throw Error(C_(21));
    return (Zg(a, `options.listener`), { predicate: i, type: t, effect: a });
  },
  p_ = s_(
    (e) => {
      let { type: t, predicate: n, effect: r } = f_(e);
      return {
        id: Sg(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw Error(C_(22));
        },
      };
    },
    { withTypes: () => p_ },
  ),
  m_ = (e, t) => {
    let { type: n, effect: r, predicate: i } = f_(t);
    return Array.from(e.values()).find(
      (e) =>
        (typeof n == `string` ? e.type === n : e.predicate === i) &&
        e.effect === r,
    );
  },
  h_ = (e) => {
    e.pending.forEach((e) => {
      t_(e, Jg);
    });
  },
  g_ = (e, t) => () => {
    for (let e of t.keys()) h_(e);
    e.clear();
  },
  __ = (e, t, n) => {
    try {
      e(t, n);
    } catch (e) {
      setTimeout(() => {
        throw e;
      }, 0);
    }
  },
  v_ = s_(ig(`${l_}/add`), { withTypes: () => v_ }),
  y_ = ig(`${l_}/removeAll`),
  b_ = s_(ig(`${l_}/remove`), { withTypes: () => b_ }),
  x_ = (...e) => {
    console.error(`${l_}/error`, ...e);
  },
  S_ = (e = {}) => {
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
      { extra: a, onError: o = x_ } = e;
    Zg(o, `onError`);
    let s = (e) => (
        (e.unsubscribe = () => t.delete(e.id)),
        t.set(e.id, e),
        (t) => {
          (e.unsubscribe(), t?.cancelActive && h_(e));
        }
      ),
      c = (e) => {
        let n = m_(t, e) ?? p_(e);
        return s(n);
      };
    s_(c, { withTypes: () => c });
    let l = (e) => {
      let n = m_(t, e);
      return (n && (n.unsubscribe(), e.cancelActive && h_(n)), !!n);
    };
    s_(l, { withTypes: () => l });
    let u = async (e, n, s, l) => {
        let u = new AbortController(),
          d = d_(c, u.signal),
          f = [];
        try {
          (e.pending.add(u),
            r(e),
            await Promise.resolve(
              e.effect(
                n,
                s_({}, s, {
                  getOriginalState: l,
                  condition: (e, t) => d(e, t).then(Boolean),
                  take: d,
                  delay: o_(u.signal),
                  pause: a_(u.signal),
                  extra: a,
                  signal: u.signal,
                  fork: u_(u.signal, f),
                  unsubscribe: e.unsubscribe,
                  subscribe: () => {
                    t.set(e.id, e);
                  },
                  cancelActiveListeners: () => {
                    e.pending.forEach((e, t, n) => {
                      e !== u && (t_(e, Jg), n.delete(e));
                    });
                  },
                  cancel: () => {
                    (t_(u, Jg), e.pending.delete(u));
                  },
                  throwIfCancelled: () => {
                    n_(u.signal);
                  },
                }),
              ),
            ));
        } catch (e) {
          e instanceof Xg || __(o, e, { raisedBy: `effect` });
        } finally {
          (await Promise.all(f), t_(u, Yg), i(e), e.pending.delete(u));
        }
      },
      d = g_(t, n);
    return {
      middleware: (e) => (n) => (r) => {
        if (!Rm(r)) return n(r);
        if (v_.match(r)) return c(r.payload);
        if (y_.match(r)) {
          d();
          return;
        }
        if (b_.match(r)) return l(r.payload);
        let i = e.getState(),
          a = () => {
            if (i === c_) throw Error(C_(23));
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
                ((s = !1), __(o, e, { raisedBy: `predicate` }));
              }
              s && u(t, r, e, a);
            }
          }
        } finally {
          i = c_;
        }
        return s;
      },
      startListening: c,
      stopListening: l,
      clearListeners: d,
    };
  };
function C_(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var w_ = Fg({
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
  { setMargin: T_, setLayout: E_, setChartSize: D_, setScale: O_ } = w_.actions,
  k_ = w_.reducer;
function A_(e, t) {
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
function j_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? A_(Object(n), !0).forEach(function (t) {
          M_(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : A_(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function M_(e, t, n) {
  return (
    (t = N_(t)) in e
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
function N_(e) {
  var t = P_(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function P_(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var F_ = Math.PI / 180,
  I_ = (e) => (e * Math.PI) / 180,
  L_ = (e) => (e * 180) / Math.PI,
  R_ = (e, t, n, r) => ({
    x: e + Math.cos(-F_ * r) * n,
    y: t + Math.sin(-F_ * r) * n,
  }),
  z_ = function (e, t) {
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
  B_ = (e, t) => {
    var { x: n, y: r } = e,
      { x: i, y: a } = t;
    return Math.sqrt((n - i) ** 2 + (r - a) ** 2);
  },
  V_ = (e, t) => {
    var { x: n, y: r } = e,
      { cx: i, cy: a } = t,
      o = B_({ x: n, y: r }, { x: i, y: a });
    if (o <= 0) return { radius: o, angle: 0 };
    var s = (n - i) / o,
      c = Math.acos(s);
    return (
      r > a && (c = 2 * Math.PI - c),
      { radius: o, angle: L_(c), angleInRadian: c }
    );
  },
  H_ = (e) => {
    var { startAngle: t, endAngle: n } = e,
      r = Math.floor(t / 360),
      i = Math.floor(n / 360),
      a = Math.min(r, i);
    return { startAngle: t - a * 360, endAngle: n - a * 360 };
  },
  U_ = (e, t) => {
    var { startAngle: n, endAngle: r } = t,
      i = Math.floor(n / 360),
      a = Math.floor(r / 360);
    return e + Math.min(i, a) * 360;
  },
  W_ = (e, t) => {
    var { x: n, y: r } = e,
      { radius: i, angle: a } = V_({ x: n, y: r }, t),
      { innerRadius: o, outerRadius: s } = t;
    if (i < o || i > s || i === 0) return null;
    var { startAngle: c, endAngle: l } = H_(t),
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
    return d ? j_(j_({}, t), {}, { radius: i, angle: U_(u, t) }) : null;
  },
  G_ = (e) =>
    !(0, z.isValidElement)(e) &&
    typeof e != `function` &&
    typeof e != `boolean` &&
    e != null
      ? e.className
      : ``;
function K_(e, t, n) {
  return Array.isArray(e) && e && t + n !== 0 ? e.slice(t, n + 1) : e;
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
function Q_(e, t, n) {
  return $f(e) || $f(t)
    ? n
    : Kf(t)
      ? (0, Hf.default)(e, t, n)
      : typeof t == `function`
        ? t(e)
        : n;
}
var $_ = (e, t, n, r, i) => {
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
        if (Uf(l - c) !== Uf(u - l)) {
          var f = [];
          if (Uf(u - l) === Uf(i[1] - i[0])) {
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
  ev = (e, t, n) => {
    if (t && n) {
      var { width: r, height: i } = n,
        { align: a, verticalAlign: o, layout: s } = t;
      if (
        (s === `vertical` || (s === `horizontal` && o === `middle`)) &&
        a !== `center` &&
        K(e[a])
      )
        return J_(J_({}, e), {}, { [a]: e[a] + (r || 0) });
      if (
        (s === `horizontal` || (s === `vertical` && a === `center`)) &&
        o !== `middle` &&
        K(e[o])
      )
        return J_(J_({}, e), {}, { [o]: e[o] + (i || 0) });
    }
    return e;
  },
  tv = (e, t) =>
    (e === `horizontal` && t === `xAxis`) ||
    (e === `vertical` && t === `yAxis`) ||
    (e === `centric` && t === `angleAxis`) ||
    (e === `radial` && t === `radiusAxis`),
  nv = (e, t, n, r) => {
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
  rv = (e, t, n) => {
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
        p === `angleAxis` && a && a.length >= 2 ? Uf(a[0] - a[1]) * 2 * h : h),
      t && (d || f)
        ? (d || f || [])
            .map((e, t) => ({
              coordinate: o(r ? r.indexOf(e) : e) + h,
              value: e,
              offset: h,
              index: t,
            }))
            .filter((e) => !Wf(e.coordinate))
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
  iv = 1e-4,
  av = (e) => {
    var t = e.domain();
    if (!(!t || t.length <= 2)) {
      var n = t.length,
        r = e.range(),
        i = Math.min(r[0], r[1]) - iv,
        a = Math.max(r[0], r[1]) + iv,
        o = e(t[0]),
        s = e(t[n - 1]);
      (o < i || o > a || s < i || s > a) && e.domain([t[0], t[n - 1]]);
    }
  },
  ov = (e, t) => {
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
  sv = {
    sign: (e) => {
      var t = e.length;
      if (!(t <= 0))
        for (var n = 0, r = e[0].length; n < r; ++n)
          for (var i = 0, a = 0, o = 0; o < t; ++o) {
            var s = Wf(e[o][n][1]) ? e[o][n][0] : e[o][n][1];
            s >= 0
              ? ((e[o][n][0] = i), (e[o][n][1] = i + s), (i = e[o][n][1]))
              : ((e[o][n][0] = a), (e[o][n][1] = a + s), (a = e[o][n][1]));
          }
    },
    expand: Nf,
    none: Of,
    silhouette: Pf,
    wiggle: Ff,
    positive: (e) => {
      var t = e.length;
      if (!(t <= 0))
        for (var n = 0, r = e[0].length; n < r; ++n)
          for (var i = 0, a = 0; a < t; ++a) {
            var o = Wf(e[a][n][1]) ? e[a][n][0] : e[a][n][1];
            o >= 0
              ? ((e[a][n][0] = i), (e[a][n][1] = i + o), (i = e[a][n][1]))
              : ((e[a][n][0] = 0), (e[a][n][1] = 0));
          }
    },
  },
  cv = (e, t, n) => {
    var r = sv[n];
    return Mf()
      .keys(t)
      .value((e, t) => +Q_(e, t, 0))
      .order(kf)
      .offset(r)(e);
  };
function lv(e) {
  return e == null ? void 0 : String(e);
}
var uv = (e) => {
    var { axis: t, ticks: n, offset: r, bandSize: i, entry: a, index: o } = e;
    if (t.type === `category`) return n[o] ? n[o].coordinate + r : null;
    var s = Q_(a, t.dataKey, t.scale.domain()[o]);
    return $f(s) ? null : t.scale(s) - i / 2 + r;
  },
  dv = (e) => {
    var { numericAxis: t } = e,
      n = t.scale.domain();
    if (t.type === `number`) {
      var r = Math.min(n[0], n[1]),
        i = Math.max(n[0], n[1]);
      return r <= 0 && i >= 0 ? 0 : i < 0 ? i : r;
    }
    return n[0];
  },
  fv = (e) => {
    var t = e.flat(2).filter(K);
    return [Math.min(...t), Math.max(...t)];
  },
  pv = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]],
  mv = (e, t, n) => {
    if (e != null)
      return pv(
        Object.keys(e).reduce(
          (r, i) => {
            var { stackedData: a } = e[i],
              o = a.reduce(
                (e, r) => {
                  var i = fv(K_(r, t, n));
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
  hv = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  gv = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  _v = (e, t, n) => {
    if (e && e.scale && e.scale.bandwidth) {
      var r = e.scale.bandwidth();
      if (!n || r > 0) return r;
    }
    if (e && t && t.length >= 2) {
      for (
        var i = (0, Sm.default)(t, (e) => e.coordinate),
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
function vv(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: n,
    payload: r,
    value: i,
    name: a,
  } = e;
  return J_(J_({}, t), {}, { dataKey: n, payload: r, value: i, name: a });
}
function yv(e, t) {
  if (e) return String(e);
  if (typeof t == `string`) return t;
}
function bv(e, t, n, r, i) {
  return n === `horizontal` || n === `vertical`
    ? e >= i.left &&
      e <= i.left + i.width &&
      t >= i.top &&
      t <= i.top + i.height
      ? { x: e, y: t }
      : null
    : r
      ? W_({ x: e, y: t }, r)
      : null;
}
var xv = (e, t, n, r) => {
    var i = t.find((e) => e && e.index === n);
    if (i) {
      if (e === `horizontal`) return { x: i.coordinate, y: r.y };
      if (e === `vertical`) return { x: r.x, y: i.coordinate };
      if (e === `centric`) {
        var a = i.coordinate,
          { radius: o } = r;
        return J_(
          J_(J_({}, r), R_(r.cx, r.cy, o, a)),
          {},
          { angle: a, radius: o },
        );
      }
      var s = i.coordinate,
        { angle: c } = r;
      return J_(
        J_(J_({}, r), R_(r.cx, r.cy, s, c)),
        {},
        { angle: c, radius: s },
      );
    }
    return { x: 0, y: 0 };
  },
  Sv = (e, t) =>
    t === `horizontal`
      ? e.x
      : t === `vertical`
        ? e.y
        : t === `centric`
          ? e.angle
          : e.radius,
  Cv = (e) => e.layout.width,
  wv = (e) => e.layout.height,
  Tv = (e) => e.layout.scale,
  Ev = (e) => e.layout.margin,
  Dv = Y(
    (e) => e.cartesianAxis.xAxis,
    (e) => Object.values(e),
  ),
  Ov = Y(
    (e) => e.cartesianAxis.yAxis,
    (e) => Object.values(e),
  ),
  kv = `data-recharts-item-index`,
  Av = `data-recharts-item-data-key`;
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
var Iv = (e) => e.brush.height;
function Lv(e) {
  return Ov(e).reduce(
    (e, t) =>
      t.orientation === `left` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function Rv(e) {
  return Ov(e).reduce(
    (e, t) =>
      t.orientation === `right` && !t.mirror && !t.hide
        ? e + (typeof t.width == `number` ? t.width : 60)
        : e,
    0,
  );
}
function zv(e) {
  return Dv(e).reduce(
    (e, t) =>
      t.orientation === `top` && !t.mirror && !t.hide ? e + t.height : e,
    0,
  );
}
function Bv(e) {
  return Dv(e).reduce(
    (e, t) =>
      t.orientation === `bottom` && !t.mirror && !t.hide ? e + t.height : e,
    0,
  );
}
var Vv = Y(
    [Cv, wv, Ev, Iv, Lv, Rv, zv, Bv, Cm, wm],
    (e, t, n, r, i, a, o, s, c, l) => {
      var u = { left: (n.left || 0) + i, right: (n.right || 0) + a },
        d = Mv(
          Mv({}, { top: (n.top || 0) + o, bottom: (n.bottom || 0) + s }),
          u,
        ),
        f = d.bottom;
      ((d.bottom += r), (d = ev(d, c, l)));
      var p = e - d.left - d.right,
        m = t - d.top - d.bottom;
      return Mv(
        Mv({ brushBottom: f }, d),
        {},
        { width: Math.max(p, 0), height: Math.max(m, 0) },
      );
    },
  ),
  Hv = Y(Vv, (e) => ({
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height,
  })),
  Uv = Y(Cv, wv, (e, t) => ({ x: 0, y: 0, width: e, height: t })),
  Wv = (0, z.createContext)(null),
  Gv = () => (0, z.useContext)(Wv) != null,
  Kv = (e) => e.brush,
  qv = Y([Kv, Vv, Ev], (e, t, n) => ({
    height: e.height,
    x: K(e.x) ? e.x : t.left,
    y: K(e.y) ? e.y : t.top + t.height + t.brushBottom - (n?.bottom || 0),
    width: K(e.width) ? e.width : t.width,
  })),
  Jv = n((e) => {
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
  Yv = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Jv();
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
  Xv = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Yv();
    function n(e, n = 0, r = {}) {
      let { leading: i = !0, trailing: a = !0 } = r;
      return t.debounce(e, n, { leading: i, maxWait: n, trailing: a });
    }
    e.throttle = n;
  }),
  Zv = e(
    n((e, t) => {
      t.exports = Xv().throttle;
    })(),
  ),
  Qv = (e, t, n) => {
    var { width: r = `100%`, height: i = `100%`, aspect: a, maxHeight: o } = n,
      s = Gf(r) ? e : Number(r),
      c = Gf(i) ? t : Number(i);
    return (
      a && a > 0 && (s ? (c = s / a) : c && (s = c * a), o && c > o && (c = o)),
      { calculatedWidth: s, calculatedHeight: c }
    );
  },
  $v = { width: 0, height: 0, overflow: `visible` },
  ey = { width: 0, overflowX: `visible` },
  ty = { height: 0, overflowY: `visible` },
  ny = {},
  ry = (e) => {
    var { width: t, height: n } = e,
      r = Gf(t),
      i = Gf(n);
    return r && i ? $v : r ? ey : i ? ty : ny;
  };
function iy(e) {
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
function ay(e) {
  return Number.isFinite(e);
}
function oy(e) {
  return typeof e == `number` && e > 0 && Number.isFinite(e);
}
function sy() {
  return (
    (sy = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    sy.apply(null, arguments)
  );
}
function cy(e, t) {
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
function ly(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? cy(Object(n), !0).forEach(function (t) {
          uy(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : cy(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function uy(e, t, n) {
  return (
    (t = dy(t)) in e
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
function dy(e) {
  var t = fy(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function fy(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var py = (0, z.createContext)({ width: -1, height: -1 });
function my(e) {
  var { children: t, width: n, height: r } = e,
    i = (0, z.useMemo)(() => ({ width: n, height: r }), [n, r]);
  return n <= 0 || r <= 0
    ? null
    : z.createElement(py.Provider, { value: i }, t);
}
var hy = () => (0, z.useContext)(py),
  gy = (0, z.forwardRef)((e, t) => {
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
      u > 0 && (e = (0, Zv.default)(e, u, { trailing: !0, leading: !1 }));
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
      { calculatedWidth: S, calculatedHeight: C } = Qv(b, x, {
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
        style: ly(
          ly({}, m),
          {},
          { width: i, height: a, minWidth: o, minHeight: s, maxHeight: c },
        ),
        ref: h,
      },
      z.createElement(
        `div`,
        { style: ry({ width: i, height: a }) },
        z.createElement(my, { width: S, height: C }, l),
      ),
    );
  }),
  _y = (0, z.forwardRef)((e, t) => {
    var n = hy();
    if (oy(n.width) && oy(n.height)) return e.children;
    var { width: r, height: i } = iy({
        width: e.width,
        height: e.height,
        aspect: e.aspect,
      }),
      { calculatedWidth: a, calculatedHeight: o } = Qv(void 0, void 0, {
        width: r,
        height: i,
        aspect: e.aspect,
        maxHeight: e.maxHeight,
      });
    return K(a) && K(o)
      ? z.createElement(my, { width: a, height: o }, e.children)
      : z.createElement(gy, sy({}, e, { width: r, height: i, ref: t }));
  }),
  vy = () => {
    var e = Gv(),
      t = J(Hv),
      n = J(qv),
      r = J(Kv)?.padding;
    return !e || !n || !r
      ? t
      : {
          width: n.width - r.left - r.right,
          height: n.height - r.top - r.bottom,
          x: r.left,
          y: r.top,
        };
  },
  yy = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    brushBottom: 0,
  },
  by = () => J(Vv) ?? yy,
  xy = () => J(Cv),
  Sy = () => J(wv),
  Cy = () => J((e) => e.layout.margin),
  X = (e) => e.layout.layoutType,
  wy = () => J(X),
  Ty = (e) => {
    var t = q(),
      n = Gv(),
      { width: r, height: i } = e,
      a = hy(),
      o = r,
      s = i;
    return (
      a && ((o = a.width > 0 ? a.width : r), (s = a.height > 0 ? a.height : i)),
      (0, z.useEffect)(() => {
        !n && oy(o) && oy(s) && t(D_({ width: o, height: s }));
      }, [t, n, o, s]),
      null
    );
  },
  Ey = Fg({
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
          e.payload.push(Lh(t.payload));
        },
        prepare: dg(),
      },
      removeLegendPayload: {
        reducer(e, t) {
          var n = Mh(e).payload.indexOf(Lh(t.payload));
          n > -1 && e.payload.splice(n, 1);
        },
        prepare: dg(),
      },
    },
  }),
  {
    setLegendSize: Dy,
    setLegendSettings: Oy,
    addLegendPayload: ky,
    removeLegendPayload: Ay,
  } = Ey.actions,
  jy = Ey.reducer;
function My() {
  return (
    (My = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    My.apply(null, arguments)
  );
}
function Ny(e, t) {
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
function Py(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ny(Object(n), !0).forEach(function (t) {
          Fy(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ny(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Fy(e, t, n) {
  return (
    (t = Iy(t)) in e
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
function Iy(e) {
  var t = Ly(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ly(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Ry(e) {
  return Array.isArray(e) && Kf(e[0]) && Kf(e[1]) ? e.join(` ~ `) : e;
}
var zy = (e) => {
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
            n = (s ? (0, Sm.default)(a, s) : a).map((e, n) => {
              if (e.type === `none`) return null;
              var i = e.formatter || o || Ry,
                { value: s, name: c } = e,
                l = s,
                u = c;
              if (i) {
                var d = i(s, c, e, n, a);
                if (Array.isArray(d)) [l, u] = d;
                else if (d != null) l = d;
                else return null;
              }
              var f = Py(
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
                Kf(u)
                  ? z.createElement(
                      `span`,
                      { className: `recharts-tooltip-item-name` },
                      u,
                    )
                  : null,
                Kf(u)
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
      m = Py(
        {
          margin: 0,
          padding: 10,
          backgroundColor: `#fff`,
          border: `1px solid #ccc`,
          whiteSpace: `nowrap`,
        },
        n,
      ),
      h = Py({ margin: 0 }, i),
      g = !$f(u),
      _ = g ? u : ``,
      v = W(`recharts-default-tooltip`, c),
      y = W(`recharts-tooltip-label`, l);
    g && d && a != null && (_ = d(u, a));
    var b = f ? { role: `status`, "aria-live": `assertive` } : {};
    return z.createElement(
      `div`,
      My({ className: v, style: m }, b),
      z.createElement(
        `p`,
        { className: y, style: h },
        z.isValidElement(_) ? _ : `${_}`,
      ),
      p(),
    );
  },
  By = `recharts-tooltip-wrapper`,
  Vy = { visibility: `hidden` };
function Hy(e) {
  var { coordinate: t, translateX: n, translateY: r } = e;
  return W(By, {
    [`${By}-right`]: K(n) && t && K(t.x) && n >= t.x,
    [`${By}-left`]: K(n) && t && K(t.x) && n < t.x,
    [`${By}-bottom`]: K(r) && t && K(t.y) && r >= t.y,
    [`${By}-top`]: K(r) && t && K(t.y) && r < t.y,
  });
}
function Uy(e) {
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
function Wy(e) {
  var { translateX: t, translateY: n, useTranslate3d: r } = e;
  return {
    transform: r
      ? `translate3d(${t}px, ${n}px, 0)`
      : `translate(${t}px, ${n}px)`,
  };
}
function Gy(e) {
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
      ? ((u = Uy({
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
        (d = Uy({
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
        (l = Wy({ translateX: u, translateY: d, useTranslate3d: s })))
      : (l = Vy),
    {
      cssProperties: l,
      cssClasses: Hy({ translateX: u, translateY: d, coordinate: n }),
    }
  );
}
function Ky(e, t) {
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
function qy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ky(Object(n), !0).forEach(function (t) {
          Jy(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ky(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Jy(e, t, n) {
  return (
    (t = Yy(t)) in e
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
function Yy(e) {
  var t = Xy(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Xy(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Zy = class extends z.PureComponent {
    constructor() {
      (super(...arguments),
        Jy(this, `state`, {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
        }),
        Jy(this, `handleKeyDown`, (e) => {
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
        { cssClasses: _, cssProperties: v } = Gy({
          allowEscapeViewBox: t,
          coordinate: a,
          offsetTopLeft: c,
          position: l,
          reverseDirection: u,
          tooltipBox: { height: m.height, width: m.width },
          useTranslate3d: d,
          viewBox: f,
        }),
        y = qy(
          qy(
            {},
            g
              ? {}
              : qy(
                  qy(
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
  Qy = {
    devToolsEnabled: !1,
    isSsr: !(
      typeof window < `u` &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    ),
  },
  $y = () => J((e) => e.rootProps.accessibilityLayer);
function eb() {
  return (
    (eb = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    eb.apply(null, arguments)
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
var ob = {
    curveBasisClosed: sf,
    curveBasisOpen: lf,
    curveBasis: af,
    curveBumpX: Pd,
    curveBumpY: Fd,
    curveLinearClosed: df,
    curveLinear: Od,
    curveMonotoneX: yf,
    curveMonotoneY: bf,
    curveNatural: Cf,
    curveStep: Tf,
    curveStepAfter: Df,
    curveStepBefore: Ef,
  },
  sb = (e) => ay(e.x) && ay(e.y),
  cb = (e) => e.x,
  lb = (e) => e.y,
  ub = (e, t) => {
    if (typeof e == `function`) return e;
    var n = `curve${ep(e)}`;
    return (n === `curveMonotone` || n === `curveBump`) && t
      ? ob[`${n}${t === `vertical` ? `Y` : `X`}`]
      : ob[n] || Od;
  },
  db = (e) => {
    var {
        type: t = `linear`,
        points: n = [],
        baseLine: r,
        layout: i,
        connectNulls: a = !1,
      } = e,
      o = ub(t, i),
      s = a ? n.filter(sb) : n,
      c;
    if (Array.isArray(r)) {
      var l = a ? r.filter((e) => sb(e)) : r,
        u = s.map((e, t) => nb(nb({}, e), {}, { base: l[t] }));
      return (
        (c =
          i === `vertical`
            ? Md()
                .y(lb)
                .x1(cb)
                .x0((e) => e.base.x)
            : Md()
                .x(cb)
                .y1(lb)
                .y0((e) => e.base.y)),
        c.defined(sb).curve(o),
        c(u)
      );
    }
    return (
      (c =
        i === `vertical` && K(r)
          ? Md().y(lb).x1(cb).x0(r)
          : K(r)
            ? Md().x(cb).y1(lb).y0(r)
            : jd().x(cb).y(lb)),
      c.defined(sb).curve(o),
      c(s)
    );
  },
  fb = (e) => {
    var { className: t, points: n, path: r, pathRef: i } = e;
    if ((!n || !n.length) && !r) return null;
    var a = n && n.length ? db(e) : r;
    return z.createElement(
      `path`,
      eb({}, Zu(e), gp(e), {
        className: W(`recharts-curve`, t),
        d: a === null ? void 0 : a,
        ref: i,
      }),
    );
  },
  pb = [`x`, `y`, `top`, `left`, `width`, `height`, `className`];
function mb() {
  return (
    (mb = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    mb.apply(null, arguments)
  );
}
function hb(e, t) {
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
function gb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? hb(Object(n), !0).forEach(function (t) {
          _b(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : hb(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function _b(e, t, n) {
  return (
    (t = vb(t)) in e
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
function vb(e) {
  var t = yb(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function yb(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function bb(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = xb(e, t);
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
function xb(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Sb = (e, t, n, r, i, a) => `M${e},${i}v${r}M${a},${t}h${n}`,
  Cb = (e) => {
    var {
        x: t = 0,
        y: n = 0,
        top: r = 0,
        left: i = 0,
        width: a = 0,
        height: o = 0,
        className: s,
      } = e,
      c = bb(e, pb),
      l = gb({ x: t, y: n, top: r, left: i, width: a, height: o }, c);
    return !K(t) || !K(n) || !K(a) || !K(o) || !K(r) || !K(i)
      ? null
      : z.createElement(
          `path`,
          mb({}, $u(l), {
            className: W(`recharts-cross`, s),
            d: Sb(t, n, a, o, r, i),
          }),
        );
  };
function wb(e, t, n, r) {
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
function Tb(e, t) {
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
function Eb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Tb(Object(n), !0).forEach(function (t) {
          Db(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Tb(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Db(e, t, n) {
  return (
    (t = Ob(t)) in e
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
function Ob(e) {
  var t = kb(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function kb(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Ab(e, t) {
  var n = Eb({}, e),
    r = t;
  return Object.keys(t).reduce(
    (e, t) => (e[t] === void 0 && r[t] !== void 0 && (e[t] = r[t]), e),
    n,
  );
}
function jb() {}
function Mb(e) {
  return e != null;
}
function Nb(e, t) {
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
function Pb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Nb(Object(n), !0).forEach(function (t) {
          Fb(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Nb(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Fb(e, t, n) {
  return (
    (t = Ib(t)) in e
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
function Ib(e) {
  var t = Lb(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Lb(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Rb = (e) => e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`),
  zb = (e, t, n) => e.map((e) => `${Rb(e)} ${t}ms ${n}`).join(`,`),
  Bb = (e, t) =>
    [Object.keys(e), Object.keys(t)].reduce((e, t) =>
      e.filter((e) => t.includes(e)),
    ),
  Vb = (e, t) =>
    Object.keys(t).reduce((n, r) => Pb(Pb({}, n), {}, { [r]: e(r, t[r]) }), {});
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
var qb = (e, t, n) => e + (t - e) * n,
  Jb = (e) => {
    var { from: t, to: n } = e;
    return t !== n;
  },
  Yb = (e, t, n) => {
    var r = Vb((t, n) => {
      if (Jb(n)) {
        var [r, i] = e(n.from, n.to, n.velocity);
        return Ub(Ub({}, n), {}, { from: r, velocity: i });
      }
      return n;
    }, t);
    return n < 1
      ? Vb(
          (e, t) =>
            Jb(t)
              ? Ub(
                  Ub({}, t),
                  {},
                  {
                    velocity: qb(t.velocity, r[e].velocity, n),
                    from: qb(t.from, r[e].from, n),
                  },
                )
              : t,
          t,
        )
      : Yb(e, r, n - 1);
  };
function Xb(e, t, n, r, i, a) {
  var o,
    s = r.reduce(
      (n, r) =>
        Ub(Ub({}, n), {}, { [r]: { from: e[r], velocity: 0, to: t[r] } }),
      {},
    ),
    c = () => Vb((e, t) => t.from, s),
    l = () => !Object.values(s).filter(Jb).length,
    u = null,
    d = (r) => {
      o ||= r;
      var f = (r - o) / n.dt;
      ((s = Yb(n, s, f)),
        i(Ub(Ub(Ub({}, e), t), c())),
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
function Zb(e, t, n, r, i, a, o) {
  var s = null,
    c = i.reduce((n, r) => Ub(Ub({}, n), {}, { [r]: [e[r], t[r]] }), {}),
    l,
    u = (i) => {
      l ||= i;
      var d = (i - l) / r,
        f = Vb((e, t) => qb(...t, n(d)), c);
      if ((a(Ub(Ub(Ub({}, e), t), f)), d < 1)) s = o.setTimeout(u);
      else {
        var p = Vb((e, t) => qb(...t, n(1)), c);
        a(Ub(Ub(Ub({}, e), t), p));
      }
    };
  return () => (
    (s = o.setTimeout(u)),
    () => {
      s();
    }
  );
}
var Qb = (e, t, n, r, i, a) => {
    var o = Bb(e, t);
    return n.isStepper === !0 ? Xb(e, t, n, o, i, a) : Zb(e, t, n, r, o, i, a);
  },
  $b = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1],
  ex = (e, t) => e.map((e, n) => e * t ** n).reduce((e, t) => e + t),
  tx = (e, t) => (n) => ex($b(e, t), n),
  nx = (e, t) => (n) =>
    ex(
      [
        ...$b(e, t)
          .map((e, t) => e * t)
          .slice(1),
        0,
      ],
      n,
    ),
  rx = function () {
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
    var o = tx(e, t),
      s = tx(n, r),
      c = nx(e, t),
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
  ix = function () {
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
  ax = (e) => {
    if (typeof e == `string`)
      switch (e) {
        case `ease`:
        case `ease-in-out`:
        case `ease-out`:
        case `ease-in`:
        case `linear`:
          return rx(e);
        case `spring`:
          return ix();
        default:
          if (e.split(`(`)[0] === `cubic-bezier`) return rx(e);
      }
    return typeof e == `function` ? e : null;
  };
function ox(e) {
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
var sx = class {
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
function cx() {
  return ox(new sx());
}
var lx = (0, z.createContext)(cx);
function ux(e, t) {
  var n = (0, z.useContext)(lx);
  return (0, z.useMemo)(() => t ?? n(e), [e, t, n]);
}
var dx = {
    begin: 0,
    duration: 1e3,
    easing: `ease`,
    isActive: !0,
    canBegin: !0,
    onAnimationEnd: () => {},
    onAnimationStart: () => {},
  },
  fx = { t: 0 },
  px = { t: 1 };
function mx(e) {
  var t = Ab(e, dx),
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
    u = ux(t.animationId, t.animationManager),
    [d, f] = (0, z.useState)(n ? fx : px),
    p = (0, z.useRef)(null);
  return (
    (0, z.useEffect)(() => {
      n || f(px);
    }, [n]),
    (0, z.useEffect)(() => {
      if (!n || !r) return jb;
      var e = Qb(fx, px, ax(a), i, f, u.getTimeoutController());
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
function hx(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : `animation-`,
    n = (0, z.useRef)(Jf(t)),
    r = (0, z.useRef)(e);
  return (r.current !== e && ((n.current = Jf(t)), (r.current = e)), n.current);
}
var gx = [`radius`],
  _x = [`radius`];
function vx(e, t) {
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
function yx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? vx(Object(n), !0).forEach(function (t) {
          bx(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : vx(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function bx(e, t, n) {
  return (
    (t = xx(t)) in e
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
function xx(e) {
  var t = Sx(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Sx(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Cx() {
  return (
    (Cx = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cx.apply(null, arguments)
  );
}
function wx(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Tx(e, t);
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
function Tx(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Ex = (e, t, n, r, i) => {
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
  Dx = {
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
  Ox = (e) => {
    var t = Ab(e, Dx),
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
      b = hx(
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
      var S = $u(t),
        { radius: C } = S,
        w = wx(S, gx);
      return z.createElement(
        `path`,
        Cx({}, w, {
          radius: typeof l == `number` ? l : void 0,
          className: x,
          d: Ex(a, o, s, c, l),
        }),
      );
    }
    var T = g.current,
      E = _.current,
      D = v.current,
      O = y.current,
      k = `0px ${r === -1 ? 1 : r}px`,
      A = `${r}px 0px`,
      ee = zb([`strokeDasharray`], f, typeof d == `string` ? d : void 0);
    return z.createElement(
      mx,
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
        var r = Zf(T, s, e),
          i = Zf(E, c, e),
          u = Zf(D, a, e),
          d = Zf(O, o, e);
        n.current &&
          ((g.current = r), (_.current = i), (v.current = u), (y.current = d));
        var f = m
            ? e > 0
              ? { transition: ee, strokeDasharray: A }
              : { strokeDasharray: k }
            : { strokeDasharray: A },
          p = $u(t),
          { radius: h } = p,
          b = wx(p, _x);
        return z.createElement(
          `path`,
          Cx({}, b, {
            radius: typeof l == `number` ? l : void 0,
            className: x,
            d: Ex(u, d, r, i, l),
            ref: n,
            style: yx(yx({}, f), t.style),
          }),
        );
      },
    );
  };
function kx(e) {
  var { cx: t, cy: n, radius: r, startAngle: i, endAngle: a } = e;
  return {
    points: [R_(t, n, r, i), R_(t, n, r, a)],
    cx: t,
    cy: n,
    radius: r,
    startAngle: i,
    endAngle: a,
  };
}
function Ax() {
  return (
    (Ax = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ax.apply(null, arguments)
  );
}
var jx = (e, t) => Uf(t - e) * Math.min(Math.abs(t - e), 359.999),
  Mx = (e) => {
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
      u = Math.asin(s / l) / F_,
      d = c ? i : i + a * u,
      f = R_(t, n, l, d),
      p = R_(t, n, r, d),
      m = c ? i - a * u : i;
    return {
      center: f,
      circleTangency: p,
      lineTangency: R_(t, n, l * Math.cos(u * F_), m),
      theta: u,
    };
  },
  Nx = (e) => {
    var {
        cx: t,
        cy: n,
        innerRadius: r,
        outerRadius: i,
        startAngle: a,
        endAngle: o,
      } = e,
      s = jx(a, o),
      c = a + s,
      l = R_(t, n, i, a),
      u = R_(t, n, i, c),
      d = `M ${l.x},${l.y}
    A ${i},${i},0,
    ${+(Math.abs(s) > 180)},${+(a > c)},
    ${u.x},${u.y}
  `;
    if (r > 0) {
      var f = R_(t, n, r, a),
        p = R_(t, n, r, c);
      d += `L ${p.x},${p.y}
            A ${r},${r},0,
            ${+(Math.abs(s) > 180)},${+(a <= c)},
            ${f.x},${f.y} Z`;
    } else d += `L ${t},${n} Z`;
    return d;
  },
  Px = (e) => {
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
      u = Uf(l - c),
      {
        circleTangency: d,
        lineTangency: f,
        theta: p,
      } = Mx({
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
      } = Mx({
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
        : Nx({
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
        } = Mx({
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
        } = Mx({
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
  Fx = {
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
  Ix = (e) => {
    var t = Ab(e, Fx),
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
      m = Yf(o, p, 0, !0),
      h =
        m > 0 && Math.abs(l - u) < 360
          ? Px({
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
          : Nx({
              cx: n,
              cy: r,
              innerRadius: i,
              outerRadius: a,
              startAngle: l,
              endAngle: u,
            });
    return z.createElement(`path`, Ax({}, $u(t), { className: f, d: h }));
  };
function Lx(e, t, n) {
  var r, i, a, o;
  if (e === `horizontal`)
    ((r = t.x), (a = r), (i = n.top), (o = n.top + n.height));
  else if (e === `vertical`)
    ((i = t.y), (o = i), (r = n.left), (a = n.left + n.width));
  else if (t.cx != null && t.cy != null) {
    if (e === `centric`) {
      var { cx: s, cy: c, innerRadius: l, outerRadius: u, angle: d } = t,
        f = R_(s, c, l, d),
        p = R_(s, c, u, d);
      ((r = f.x), (i = f.y), (a = p.x), (o = p.y));
    } else return kx(t);
  }
  return [
    { x: r, y: i },
    { x: a, y: o },
  ];
}
var Rx = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = gm();
    function n(e) {
      return t.isSymbol(e) ? NaN : Number(e);
    }
    e.toNumber = n;
  }),
  zx = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = Rx();
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
  Bx = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = bm(),
      n = zx();
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
  Vx = n((e, t) => {
    t.exports = Bx().range;
  });
function Hx(e, t) {
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
function Ux(e, t) {
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
function Wx(e) {
  let t, n, r;
  e.length === 2
    ? ((t = e === Hx || e === Ux ? e : Gx), (n = e), (r = e))
    : ((t = Hx), (n = (t, n) => Hx(e(t), n)), (r = (t, n) => e(t) - n));
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
function Gx() {
  return 0;
}
function Kx(e) {
  return e === null ? NaN : +e;
}
function* qx(e, t) {
  if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
  else {
    let n = -1;
    for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
  }
}
var Jx = Wx(Hx),
  Yx = Jx.right;
(Jx.left, Wx(Kx).center);
var Xx = class extends Map {
  constructor(e, t = eS) {
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
    return super.get(Zx(this, e));
  }
  has(e) {
    return super.has(Zx(this, e));
  }
  set(e, t) {
    return super.set(Qx(this, e), t);
  }
  delete(e) {
    return super.delete($x(this, e));
  }
};
function Zx({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function Qx({ _intern: e, _key: t }, n) {
  let r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function $x({ _intern: e, _key: t }, n) {
  let r = t(n);
  return (e.has(r) && ((n = e.get(r)), e.delete(r)), n);
}
function eS(e) {
  return typeof e == `object` && e ? e.valueOf() : e;
}
function tS(e = Hx) {
  if (e === Hx) return nS;
  if (typeof e != `function`) throw TypeError(`compare is not a function`);
  return (t, n) => {
    let r = e(t, n);
    return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
  };
}
function nS(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : +(e > t))
  );
}
var rS = Math.sqrt(50),
  iS = Math.sqrt(10),
  aS = Math.sqrt(2);
function oS(e, t, n) {
  let r = (t - e) / Math.max(0, n),
    i = Math.floor(Math.log10(r)),
    a = r / 10 ** i,
    o = a >= rS ? 10 : a >= iS ? 5 : a >= aS ? 2 : 1,
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
    c < s && 0.5 <= n && n < 2 ? oS(e, t, n * 2) : [s, c, l]
  );
}
function sS(e, t, n) {
  if (((t = +t), (e = +e), (n = +n), !(n > 0))) return [];
  if (e === t) return [e];
  let r = t < e,
    [i, a, o] = r ? oS(t, e, n) : oS(e, t, n);
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
function cS(e, t, n) {
  return ((t = +t), (e = +e), (n = +n), oS(e, t, n)[2]);
}
function lS(e, t, n) {
  ((t = +t), (e = +e), (n = +n));
  let r = t < e,
    i = r ? cS(t, e, n) : cS(e, t, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function uS(e, t) {
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
function dS(e, t) {
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
function fS(e, t, n = 0, r = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (n = Math.floor(Math.max(0, n))),
    (r = Math.floor(Math.min(e.length - 1, r))),
    !(n <= t && t <= r))
  )
    return e;
  for (i = i === void 0 ? nS : tS(i); r > n;) {
    if (r - n > 600) {
      let a = r - n + 1,
        o = t - n + 1,
        s = Math.log(a),
        c = 0.5 * Math.exp((2 * s) / 3),
        l = 0.5 * Math.sqrt((s * c * (a - c)) / a) * (o - a / 2 < 0 ? -1 : 1),
        u = Math.max(n, Math.floor(t - (o * c) / a + l)),
        d = Math.min(r, Math.floor(t + ((a - o) * c) / a + l));
      fS(e, t, u, d, i);
    }
    let a = e[t],
      o = n,
      s = r;
    for (pS(e, n, t), i(e[r], a) > 0 && pS(e, n, r); o < s;) {
      for (pS(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
      for (; i(e[s], a) > 0;) --s;
    }
    (i(e[n], a) === 0 ? pS(e, n, s) : (++s, pS(e, s, r)),
      s <= t && (n = s + 1),
      t <= s && (r = s - 1));
  }
  return e;
}
function pS(e, t, n) {
  let r = e[t];
  ((e[t] = e[n]), (e[n] = r));
}
function mS(e, t, n) {
  if (((e = Float64Array.from(qx(e, n))), (r = e.length) && !isNaN((t = +t)))) {
    if (t <= 0 || r < 2) return dS(e);
    if (t >= 1) return uS(e);
    var r,
      i = (r - 1) * t,
      a = Math.floor(i),
      o = uS(fS(e, a).subarray(0, a + 1));
    return o + (dS(e.subarray(a + 1)) - o) * (i - a);
  }
}
function hS(e, t, n = Kx) {
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
function gS(e, t, n) {
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
function _S(e, t) {
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
function vS(e, t) {
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
var yS = Symbol(`implicit`);
function bS() {
  var e = new Xx(),
    t = [],
    n = [],
    r = yS;
  function i(i) {
    let a = e.get(i);
    if (a === void 0) {
      if (r !== yS) return r;
      e.set(i, (a = t.push(i) - 1));
    }
    return n[a % n.length];
  }
  return (
    (i.domain = function (n) {
      if (!arguments.length) return t.slice();
      ((t = []), (e = new Xx()));
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
      return bS(t, n).unknown(r);
    }),
    _S.apply(i, arguments),
    i
  );
}
function xS() {
  var e = bS().unknown(void 0),
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
    var m = gS(e).map(function (e) {
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
      return xS(t(), [r, i]).round(s).paddingInner(c).paddingOuter(l).align(u);
    }),
    _S.apply(d(), arguments)
  );
}
function SS(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return SS(t());
    }),
    e
  );
}
function CS() {
  return SS(xS.apply(null, arguments).paddingInner(1));
}
function wS(e, t, n) {
  ((e.prototype = t.prototype = n), (n.constructor = e));
}
function TS(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function ES() {}
var DS = 0.7,
  OS = 1 / DS,
  kS = `\\s*([+-]?\\d+)\\s*`,
  AS = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,
  jS = `\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,
  MS = /^#([0-9a-f]{3,8})$/,
  NS = RegExp(`^rgb\\(${kS},${kS},${kS}\\)$`),
  PS = RegExp(`^rgb\\(${jS},${jS},${jS}\\)$`),
  FS = RegExp(`^rgba\\(${kS},${kS},${kS},${AS}\\)$`),
  IS = RegExp(`^rgba\\(${jS},${jS},${jS},${AS}\\)$`),
  LS = RegExp(`^hsl\\(${AS},${jS},${jS}\\)$`),
  RS = RegExp(`^hsla\\(${AS},${jS},${jS},${AS}\\)$`),
  zS = {
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
wS(ES, WS, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: BS,
  formatHex: BS,
  formatHex8: VS,
  formatHsl: HS,
  formatRgb: US,
  toString: US,
});
function BS() {
  return this.rgb().formatHex();
}
function VS() {
  return this.rgb().formatHex8();
}
function HS() {
  return rC(this).formatHsl();
}
function US() {
  return this.rgb().formatRgb();
}
function WS(e) {
  var t, n;
  return (
    (e = (e + ``).trim().toLowerCase()),
    (t = MS.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? GS(t)
          : n === 3
            ? new YS(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : n === 8
              ? KS(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : n === 4
                ? KS(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = NS.exec(e))
        ? new YS(t[1], t[2], t[3], 1)
        : (t = PS.exec(e))
          ? new YS(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = FS.exec(e))
            ? KS(t[1], t[2], t[3], t[4])
            : (t = IS.exec(e))
              ? KS(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = LS.exec(e))
                ? nC(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = RS.exec(e))
                  ? nC(t[1], t[2] / 100, t[3] / 100, t[4])
                  : zS.hasOwnProperty(e)
                    ? GS(zS[e])
                    : e === `transparent`
                      ? new YS(NaN, NaN, NaN, 0)
                      : null
  );
}
function GS(e) {
  return new YS((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function KS(e, t, n, r) {
  return (r <= 0 && (e = t = n = NaN), new YS(e, t, n, r));
}
function qS(e) {
  return (
    e instanceof ES || (e = WS(e)),
    e ? ((e = e.rgb()), new YS(e.r, e.g, e.b, e.opacity)) : new YS()
  );
}
function JS(e, t, n, r) {
  return arguments.length === 1 ? qS(e) : new YS(e, t, n, r ?? 1);
}
function YS(e, t, n, r) {
  ((this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r));
}
wS(
  YS,
  JS,
  TS(ES, {
    brighter(e) {
      return (
        (e = e == null ? OS : OS ** +e),
        new YS(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? DS : DS ** +e),
        new YS(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new YS(eC(this.r), eC(this.g), eC(this.b), $S(this.opacity));
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
    hex: XS,
    formatHex: XS,
    formatHex8: ZS,
    formatRgb: QS,
    toString: QS,
  }),
);
function XS() {
  return `#${tC(this.r)}${tC(this.g)}${tC(this.b)}`;
}
function ZS() {
  return `#${tC(this.r)}${tC(this.g)}${tC(this.b)}${tC((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function QS() {
  let e = $S(this.opacity);
  return `${e === 1 ? `rgb(` : `rgba(`}${eC(this.r)}, ${eC(this.g)}, ${eC(this.b)}${e === 1 ? `)` : `, ${e})`}`;
}
function $S(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function eC(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function tC(e) {
  return ((e = eC(e)), (e < 16 ? `0` : ``) + e.toString(16));
}
function nC(e, t, n, r) {
  return (
    r <= 0
      ? (e = t = n = NaN)
      : n <= 0 || n >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new aC(e, t, n, r)
  );
}
function rC(e) {
  if (e instanceof aC) return new aC(e.h, e.s, e.l, e.opacity);
  if ((e instanceof ES || (e = WS(e)), !e)) return new aC();
  if (e instanceof aC) return e;
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
    new aC(o, s, c, e.opacity)
  );
}
function iC(e, t, n, r) {
  return arguments.length === 1 ? rC(e) : new aC(e, t, n, r ?? 1);
}
function aC(e, t, n, r) {
  ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
}
wS(
  aC,
  iC,
  TS(ES, {
    brighter(e) {
      return (
        (e = e == null ? OS : OS ** +e),
        new aC(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? DS : DS ** +e),
        new aC(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        i = 2 * n - r;
      return new YS(
        cC(e >= 240 ? e - 240 : e + 120, i, r),
        cC(e, i, r),
        cC(e < 120 ? e + 240 : e - 120, i, r),
        this.opacity,
      );
    },
    clamp() {
      return new aC(oC(this.h), sC(this.s), sC(this.l), $S(this.opacity));
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
      let e = $S(this.opacity);
      return `${e === 1 ? `hsl(` : `hsla(`}${oC(this.h)}, ${sC(this.s) * 100}%, ${sC(this.l) * 100}%${e === 1 ? `)` : `, ${e})`}`;
    },
  }),
);
function oC(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function sC(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function cC(e, t, n) {
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
var lC = (e) => () => e;
function uC(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function dC(e, t, n) {
  return (
    (e **= +n),
    (t = t ** +n - e),
    (n = 1 / n),
    function (r) {
      return (e + r * t) ** +n;
    }
  );
}
function fC(e) {
  return (e = +e) == 1
    ? pC
    : function (t, n) {
        return n - t ? dC(t, n, e) : lC(isNaN(t) ? n : t);
      };
}
function pC(e, t) {
  var n = t - e;
  return n ? uC(e, n) : lC(isNaN(e) ? t : e);
}
var mC = (function e(t) {
  var n = fC(t);
  function r(e, t) {
    var r = n((e = JS(e)).r, (t = JS(t)).r),
      i = n(e.g, t.g),
      a = n(e.b, t.b),
      o = pC(e.opacity, t.opacity);
    return function (t) {
      return (
        (e.r = r(t)), (e.g = i(t)), (e.b = a(t)), (e.opacity = o(t)), e + ``
      );
    };
  }
  return ((r.gamma = e), r);
})(1);
function hC(e, t) {
  t ||= [];
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
    return r;
  };
}
function gC(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function _C(e, t) {
  for (
    var n = t ? t.length : 0,
      r = e ? Math.min(n, e.length) : 0,
      i = Array(r),
      a = Array(n),
      o = 0;
    o < r;
    ++o
  )
    i[o] = EC(e[o], t[o]);
  for (; o < n; ++o) a[o] = t[o];
  return function (e) {
    for (o = 0; o < r; ++o) a[o] = i[o](e);
    return a;
  };
}
function vC(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return (n.setTime(e * (1 - r) + t * r), n);
    }
  );
}
function yC(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function bC(e, t) {
  var n = {},
    r = {},
    i;
  for (i in ((typeof e == `object` && e) || (e = {}),
  (typeof t == `object` && t) || (t = {}),
  t))
    i in e ? (n[i] = EC(e[i], t[i])) : (r[i] = t[i]);
  return function (e) {
    for (i in n) r[i] = n[i](e);
    return r;
  };
}
var xC = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  SC = new RegExp(xC.source, `g`);
function CC(e) {
  return function () {
    return e;
  };
}
function wC(e) {
  return function (t) {
    return e(t) + ``;
  };
}
function TC(e, t) {
  var n = (xC.lastIndex = SC.lastIndex = 0),
    r,
    i,
    a,
    o = -1,
    s = [],
    c = [];
  for (e += ``, t += ``; (r = xC.exec(e)) && (i = SC.exec(t));)
    ((a = i.index) > n &&
      ((a = t.slice(n, a)), s[o] ? (s[o] += a) : (s[++o] = a)),
      (r = r[0]) === (i = i[0])
        ? s[o]
          ? (s[o] += i)
          : (s[++o] = i)
        : ((s[++o] = null), c.push({ i: o, x: yC(r, i) })),
      (n = SC.lastIndex));
  return (
    n < t.length && ((a = t.slice(n)), s[o] ? (s[o] += a) : (s[++o] = a)),
    s.length < 2
      ? c[0]
        ? wC(c[0].x)
        : CC(t)
      : ((t = c.length),
        function (e) {
          for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
          return s.join(``);
        })
  );
}
function EC(e, t) {
  var n = typeof t,
    r;
  return t == null || n === `boolean`
    ? lC(t)
    : (n === `number`
        ? yC
        : n === `string`
          ? (r = WS(t))
            ? ((t = r), mC)
            : TC
          : t instanceof WS
            ? mC
            : t instanceof Date
              ? vC
              : gC(t)
                ? hC
                : Array.isArray(t)
                  ? _C
                  : (typeof t.valueOf != `function` &&
                        typeof t.toString != `function`) ||
                      isNaN(t)
                    ? bC
                    : yC)(e, t);
}
function DC(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
function OC(e, t) {
  t === void 0 && ((t = e), (e = EC));
  for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;)
    a[n] = e(i, (i = t[++n]));
  return function (e) {
    var t = Math.max(0, Math.min(r - 1, Math.floor((e *= r))));
    return a[t](e - t);
  };
}
function kC(e) {
  return function () {
    return e;
  };
}
function AC(e) {
  return +e;
}
var jC = [0, 1];
function MC(e) {
  return e;
}
function NC(e, t) {
  return (t -= e = +e)
    ? function (n) {
        return (n - e) / t;
      }
    : kC(isNaN(t) ? NaN : 0.5);
}
function PC(e, t) {
  var n;
  return (
    e > t && ((n = e), (e = t), (t = n)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function FC(e, t, n) {
  var r = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < r ? ((r = NC(i, r)), (a = n(o, a))) : ((r = NC(r, i)), (a = n(a, o))),
    function (e) {
      return a(r(e));
    }
  );
}
function IC(e, t, n) {
  var r = Math.min(e.length, t.length) - 1,
    i = Array(r),
    a = Array(r),
    o = -1;
  for (
    e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < r;
  )
    ((i[o] = NC(e[o], e[o + 1])), (a[o] = n(t[o], t[o + 1])));
  return function (t) {
    var n = Yx(e, t, 1, r) - 1;
    return a[n](i[n](t));
  };
}
function LC(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function RC() {
  var e = jC,
    t = jC,
    n = EC,
    r,
    i,
    a,
    o = MC,
    s,
    c,
    l;
  function u() {
    var n = Math.min(e.length, t.length);
    return (
      o !== MC && (o = PC(e[0], e[n - 1])),
      (s = n > 2 ? IC : FC),
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
      return o(i((l ||= s(t, e.map(r), yC))(n)));
    }),
    (d.domain = function (t) {
      return arguments.length ? ((e = Array.from(t, AC)), u()) : e.slice();
    }),
    (d.range = function (e) {
      return arguments.length ? ((t = Array.from(e)), u()) : t.slice();
    }),
    (d.rangeRound = function (e) {
      return ((t = Array.from(e)), (n = DC), u());
    }),
    (d.clamp = function (e) {
      return arguments.length ? ((o = e ? !0 : MC), u()) : o !== MC;
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
function zC() {
  return RC()(MC, MC);
}
function BC(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString(`en`).replace(/,/g, ``)
    : e.toString(10);
}
function VC(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(`e`),
    r = e.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
function HC(e) {
  return ((e = VC(Math.abs(e))), e ? e[1] : NaN);
}
function UC(e, t) {
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
function WC(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (t) {
      return e[+t];
    });
  };
}
var GC =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function KC(e) {
  if (!(t = GC.exec(e))) throw Error(`invalid format: ` + e);
  var t;
  return new qC({
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
KC.prototype = qC.prototype;
function qC(e) {
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
qC.prototype.toString = function () {
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
function JC(e) {
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
var YC;
function XC(e, t) {
  var n = VC(e, t);
  if (!n) return ((YC = void 0), e.toPrecision(t));
  var r = n[0],
    i = n[1],
    a = i - (YC = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = r.length;
  return a === o
    ? r
    : a > o
      ? r + Array(a - o + 1).join(`0`)
      : a > 0
        ? r.slice(0, a) + `.` + r.slice(a)
        : `0.` + Array(1 - a).join(`0`) + VC(e, Math.max(0, t + a - 1))[0];
}
function ZC(e, t) {
  var n = VC(e, t);
  if (!n) return e + ``;
  var r = n[0],
    i = n[1];
  return i < 0
    ? `0.` + Array(-i).join(`0`) + r
    : r.length > i + 1
      ? r.slice(0, i + 1) + `.` + r.slice(i + 1)
      : r + Array(i - r.length + 2).join(`0`);
}
var QC = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + ``,
  d: BC,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ZC(e * 100, t),
  r: ZC,
  s: XC,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function $C(e) {
  return e;
}
var ew = Array.prototype.map,
  tw = [
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
function nw(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? $C
        : UC(ew.call(e.grouping, Number), e.thousands + ``),
    n = e.currency === void 0 ? `` : e.currency[0] + ``,
    r = e.currency === void 0 ? `` : e.currency[1] + ``,
    i = e.decimal === void 0 ? `.` : e.decimal + ``,
    a = e.numerals === void 0 ? $C : WC(ew.call(e.numerals, String)),
    o = e.percent === void 0 ? `%` : e.percent + ``,
    s = e.minus === void 0 ? `−` : e.minus + ``,
    c = e.nan === void 0 ? `NaN` : e.nan + ``;
  function l(e, l) {
    e = KC(e);
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
      : QC[y] || (_ === void 0 && (_ = 12), (v = !0), (y = `g`)),
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
      S = QC[y],
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
          v && (e = JC(e)),
          w && +e == 0 && f !== `+` && (w = !1),
          (n = (w ? (f === `(` ? f : s) : f === `-` || f === `(` ? `` : f) + n),
          (r =
            (y === `s` && !isNaN(e) && YC !== void 0 ? tw[8 + YC / 3] : ``) +
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
    var n = Math.max(-8, Math.min(8, Math.floor(HC(t) / 3))) * 3,
      r = 10 ** -n,
      i = l(((e = KC(e)), (e.type = `f`), e), { suffix: tw[8 + n / 3] });
    return function (e) {
      return i(r * e);
    };
  }
  return { format: l, formatPrefix: u };
}
var rw, iw, aw;
ow({ thousands: `,`, grouping: [3], currency: [`$`, ``] });
function ow(e) {
  return ((rw = nw(e)), (iw = rw.format), (aw = rw.formatPrefix), rw);
}
function sw(e) {
  return Math.max(0, -HC(Math.abs(e)));
}
function cw(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(HC(t) / 3))) * 3 - HC(Math.abs(e)),
  );
}
function lw(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, HC(t) - HC(e)) + 1
  );
}
function uw(e, t, n, r) {
  var i = lS(e, t, n),
    a;
  switch (((r = KC(r ?? `,f`)), r.type)) {
    case `s`:
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        r.precision == null && !isNaN((a = cw(i, o))) && (r.precision = a),
        aw(r, o)
      );
    case ``:
    case `e`:
    case `g`:
    case `p`:
    case `r`:
      r.precision == null &&
        !isNaN((a = lw(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (r.precision = a - (r.type === `e`));
      break;
    case `f`:
    case `%`:
      r.precision == null &&
        !isNaN((a = sw(i))) &&
        (r.precision = a - (r.type === `%`) * 2);
  }
  return iw(r);
}
function dw(e) {
  var t = e.domain;
  return (
    (e.ticks = function (e) {
      var n = t();
      return sS(n[0], n[n.length - 1], e ?? 10);
    }),
    (e.tickFormat = function (e, n) {
      var r = t();
      return uw(r[0], r[r.length - 1], e ?? 10, n);
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
        if (((l = cS(o, s, n)), l === c)) return ((r[i] = o), (r[a] = s), t(r));
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
function fw() {
  var e = zC();
  return (
    (e.copy = function () {
      return LC(e, fw());
    }),
    _S.apply(e, arguments),
    dw(e)
  );
}
function pw(e) {
  var t;
  function n(e) {
    return e == null || isNaN((e = +e)) ? t : e;
  }
  return (
    (n.invert = n),
    (n.domain = n.range =
      function (t) {
        return arguments.length ? ((e = Array.from(t, AC)), n) : e.slice();
      }),
    (n.unknown = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.copy = function () {
      return pw(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, AC) : [0, 1]),
    dw(n)
  );
}
function mw(e, t) {
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
function hw(e) {
  return Math.log(e);
}
function gw(e) {
  return Math.exp(e);
}
function _w(e) {
  return -Math.log(-e);
}
function vw(e) {
  return -Math.exp(-e);
}
function yw(e) {
  return isFinite(e) ? +(`1e` + e) : e < 0 ? 0 : e;
}
function bw(e) {
  return e === 10 ? yw : e === Math.E ? Math.exp : (t) => e ** +t;
}
function xw(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function Sw(e) {
  return (t, n) => -e(-t, n);
}
function Cw(e) {
  let t = e(hw, gw),
    n = t.domain,
    r = 10,
    i,
    a;
  function o() {
    return (
      (i = xw(r)),
      (a = bw(r)),
      n()[0] < 0 ? ((i = Sw(i)), (a = Sw(a)), e(_w, vw)) : e(hw, gw),
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
        m.length * 2 < p && (m = sS(o, s, p));
      } else m = sS(l, u, Math.min(u - l, p)).map(a);
      return c ? m.reverse() : m;
    }),
    (t.tickFormat = (e, n) => {
      if (
        ((e ??= 10),
        (n ??= r === 10 ? `s` : `,`),
        typeof n != `function` &&
          (!(r % 1) && (n = KC(n)).precision == null && (n.trim = !0),
          (n = iw(n))),
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
        mw(n(), {
          floor: (e) => a(Math.floor(i(e))),
          ceil: (e) => a(Math.ceil(i(e))),
        }),
      )),
    t
  );
}
function ww() {
  let e = Cw(RC()).domain([1, 10]);
  return (
    (e.copy = () => LC(e, ww()).base(e.base())), _S.apply(e, arguments), e
  );
}
function Tw(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Ew(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Dw(e) {
  var t = 1,
    n = e(Tw(t), Ew(t));
  return (
    (n.constant = function (n) {
      return arguments.length ? e(Tw((t = +n)), Ew(t)) : t;
    }),
    dw(n)
  );
}
function Ow() {
  var e = Dw(RC());
  return (
    (e.copy = function () {
      return LC(e, Ow()).constant(e.constant());
    }),
    _S.apply(e, arguments)
  );
}
function kw(e) {
  return function (t) {
    return t < 0 ? -((-t) ** +e) : t ** +e;
  };
}
function Aw(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function jw(e) {
  return e < 0 ? -e * e : e * e;
}
function Mw(e) {
  var t = e(MC, MC),
    n = 1;
  function r() {
    return n === 1 ? e(MC, MC) : n === 0.5 ? e(Aw, jw) : e(kw(n), kw(1 / n));
  }
  return (
    (t.exponent = function (e) {
      return arguments.length ? ((n = +e), r()) : n;
    }),
    dw(t)
  );
}
function Nw() {
  var e = Mw(RC());
  return (
    (e.copy = function () {
      return LC(e, Nw()).exponent(e.exponent());
    }),
    _S.apply(e, arguments),
    e
  );
}
function Pw() {
  return Nw.apply(null, arguments).exponent(0.5);
}
function Fw(e) {
  return Math.sign(e) * e * e;
}
function Iw(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Lw() {
  var e = zC(),
    t = [0, 1],
    n = !1,
    r;
  function i(t) {
    var i = Iw(e(t));
    return isNaN(i) ? r : n ? Math.round(i) : i;
  }
  return (
    (i.invert = function (t) {
      return e.invert(Fw(t));
    }),
    (i.domain = function (t) {
      return arguments.length ? (e.domain(t), i) : e.domain();
    }),
    (i.range = function (n) {
      return arguments.length
        ? (e.range((t = Array.from(n, AC)).map(Fw)), i)
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
      return Lw(e.domain(), t).round(n).clamp(e.clamp()).unknown(r);
    }),
    _S.apply(i, arguments),
    dw(i)
  );
}
function Rw() {
  var e = [],
    t = [],
    n = [],
    r;
  function i() {
    var r = 0,
      i = Math.max(1, t.length);
    for (n = Array(i - 1); ++r < i;) n[r - 1] = hS(e, r / i);
    return a;
  }
  function a(e) {
    return e == null || isNaN((e = +e)) ? r : t[Yx(n, e)];
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
      return (e.sort(Hx), i());
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
      return Rw().domain(e).range(t).unknown(r);
    }),
    _S.apply(a, arguments)
  );
}
function zw() {
  var e = 0,
    t = 1,
    n = 1,
    r = [0.5],
    i = [0, 1],
    a;
  function o(e) {
    return e != null && e <= e ? i[Yx(r, e, 0, n)] : a;
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
      return zw().domain([e, t]).range(i).unknown(a);
    }),
    _S.apply(dw(o), arguments)
  );
}
function Bw() {
  var e = [0.5],
    t = [0, 1],
    n,
    r = 1;
  function i(i) {
    return i != null && i <= i ? t[Yx(e, i, 0, r)] : n;
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
      return Bw().domain(e).range(t).unknown(n);
    }),
    _S.apply(i, arguments)
  );
}
var Vw = new Date(),
  Hw = new Date();
function Uw(e, t, n, r) {
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
      Uw(
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
        Vw.setTime(+t),
        Hw.setTime(+r),
        e(Vw),
        e(Hw),
        Math.floor(n(Vw, Hw))
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
var Ww = Uw(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
((Ww.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? Uw(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, n) => {
            t.setTime(+t + n * e);
          },
          (t, n) => (n - t) / e,
        )
      : Ww
)),
  Ww.range);
var Gw = 1e3,
  Kw = Gw * 60,
  qw = Kw * 60,
  Jw = qw * 24,
  Yw = Jw * 7,
  Xw = Jw * 30,
  Zw = Jw * 365,
  Qw = Uw(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * Gw);
    },
    (e, t) => (t - e) / Gw,
    (e) => e.getUTCSeconds(),
  );
Qw.range;
var $w = Uw(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * Gw);
  },
  (e, t) => {
    e.setTime(+e + t * Kw);
  },
  (e, t) => (t - e) / Kw,
  (e) => e.getMinutes(),
);
$w.range;
var eT = Uw(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Kw);
  },
  (e, t) => (t - e) / Kw,
  (e) => e.getUTCMinutes(),
);
eT.range;
var tT = Uw(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * Gw - e.getMinutes() * Kw,
    );
  },
  (e, t) => {
    e.setTime(+e + t * qw);
  },
  (e, t) => (t - e) / qw,
  (e) => e.getHours(),
);
tT.range;
var nT = Uw(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * qw);
  },
  (e, t) => (t - e) / qw,
  (e) => e.getUTCHours(),
);
nT.range;
var rT = Uw(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Kw) / Jw,
  (e) => e.getDate() - 1,
);
rT.range;
var iT = Uw(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Jw,
  (e) => e.getUTCDate() - 1,
);
iT.range;
var aT = Uw(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Jw,
  (e) => Math.floor(e / Jw),
);
aT.range;
function oT(e) {
  return Uw(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setDate(e.getDate() + t * 7);
    },
    (e, t) =>
      (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Kw) / Yw,
  );
}
var sT = oT(0),
  cT = oT(1),
  lT = oT(2),
  uT = oT(3),
  dT = oT(4),
  fT = oT(5),
  pT = oT(6);
(sT.range, cT.range, lT.range, uT.range, dT.range, fT.range, pT.range);
function mT(e) {
  return Uw(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0));
    },
    (e, t) => {
      e.setUTCDate(e.getUTCDate() + t * 7);
    },
    (e, t) => (t - e) / Yw,
  );
}
var hT = mT(0),
  gT = mT(1),
  _T = mT(2),
  vT = mT(3),
  yT = mT(4),
  bT = mT(5),
  xT = mT(6);
(hT.range, gT.range, _T.range, vT.range, yT.range, bT.range, xT.range);
var ST = Uw(
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
ST.range;
var CT = Uw(
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
CT.range;
var wT = Uw(
  (e) => {
    (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
((wT.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Uw(
        (t) => {
          (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setFullYear(t.getFullYear() + n * e);
        },
      )),
  wT.range);
var TT = Uw(
  (e) => {
    (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
((TT.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Uw(
        (t) => {
          (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setUTCFullYear(t.getUTCFullYear() + n * e);
        },
      )),
  TT.range);
function ET(e, t, n, r, i, a) {
  let o = [
    [Qw, 1, Gw],
    [Qw, 5, 5 * Gw],
    [Qw, 15, 15 * Gw],
    [Qw, 30, 30 * Gw],
    [a, 1, Kw],
    [a, 5, 5 * Kw],
    [a, 15, 15 * Kw],
    [a, 30, 30 * Kw],
    [i, 1, qw],
    [i, 3, 3 * qw],
    [i, 6, 6 * qw],
    [i, 12, 12 * qw],
    [r, 1, Jw],
    [r, 2, 2 * Jw],
    [n, 1, Yw],
    [t, 1, Xw],
    [t, 3, 3 * Xw],
    [e, 1, Zw],
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
      a = Wx(([, , e]) => e).right(o, i);
    if (a === o.length) return e.every(lS(t / Zw, n / Zw, r));
    if (a === 0) return Ww.every(Math.max(lS(t, n, r), 1));
    let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
    return s.every(c);
  }
  return [s, c];
}
var [DT, OT] = ET(TT, CT, hT, aT, nT, eT),
  [kT, AT] = ET(wT, ST, sT, rT, tT, $w);
function jT(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function MT(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function NT(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function PT(e) {
  var t = e.dateTime,
    n = e.date,
    r = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    s = e.months,
    c = e.shortMonths,
    l = BT(i),
    u = VT(i),
    d = BT(a),
    f = VT(a),
    p = BT(o),
    m = VT(o),
    h = BT(s),
    g = VT(s),
    _ = BT(c),
    v = VT(c),
    y = {
      a: M,
      A: te,
      b: ne,
      B: re,
      c: null,
      d: cE,
      e: cE,
      f: pE,
      g: wE,
      G: EE,
      H: lE,
      I: uE,
      j: dE,
      L: fE,
      m: mE,
      M: hE,
      p: ie,
      q: ae,
      Q: YE,
      s: XE,
      S: gE,
      u: _E,
      U: vE,
      V: bE,
      w: xE,
      W: SE,
      x: null,
      X: null,
      y: CE,
      Y: TE,
      Z: DE,
      "%": JE,
    },
    b = {
      a: oe,
      A: se,
      b: ce,
      B: le,
      c: null,
      d: OE,
      e: OE,
      f: NE,
      g: WE,
      G: KE,
      H: kE,
      I: AE,
      j: jE,
      L: ME,
      m: PE,
      M: FE,
      p: ue,
      q: de,
      Q: YE,
      s: XE,
      S: IE,
      u: LE,
      U: RE,
      V: BE,
      w: VE,
      W: HE,
      x: null,
      X: null,
      y: UE,
      Y: GE,
      Z: qE,
      "%": JE,
    },
    x = {
      a: E,
      A: D,
      b: O,
      B: k,
      c: A,
      d: QT,
      e: QT,
      f: iE,
      g: JT,
      G: qT,
      H: eE,
      I: eE,
      j: $T,
      L: rE,
      m: ZT,
      M: tE,
      p: T,
      q: XT,
      Q: oE,
      s: sE,
      S: nE,
      u: UT,
      U: WT,
      V: GT,
      w: HT,
      W: KT,
      x: ee,
      X: j,
      y: JT,
      Y: qT,
      Z: YT,
      "%": aE,
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
          (c = FT[(s = e.charAt(++i))]) == null
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
      var r = NT(1900, void 0, 1),
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
            ? ((a = MT(NT(r.y, 0, 1))),
              (o = a.getUTCDay()),
              (a = o > 4 || o === 0 ? gT.ceil(a) : gT(a)),
              (a = iT.offset(a, (r.V - 1) * 7)),
              (r.y = a.getUTCFullYear()),
              (r.m = a.getUTCMonth()),
              (r.d = a.getUTCDate() + ((r.w + 6) % 7)))
            : ((a = jT(NT(r.y, 0, 1))),
              (o = a.getDay()),
              (a = o > 4 || o === 0 ? cT.ceil(a) : cT(a)),
              (a = rT.offset(a, (r.V - 1) * 7)),
              (r.y = a.getFullYear()),
              (r.m = a.getMonth()),
              (r.d = a.getDate() + ((r.w + 6) % 7))));
      } else
        (`W` in r || `U` in r) &&
          (`w` in r || (r.w = `u` in r ? r.u % 7 : +(`W` in r)),
          (o =
            `Z` in r
              ? MT(NT(r.y, 0, 1)).getUTCDay()
              : jT(NT(r.y, 0, 1)).getDay()),
          (r.m = 0),
          (r.d =
            `W` in r
              ? ((r.w + 6) % 7) + r.W * 7 - ((o + 5) % 7)
              : r.w + r.U * 7 - ((o + 6) % 7)));
      return `Z` in r
        ? ((r.H += (r.Z / 100) | 0), (r.M += r.Z % 100), MT(r))
        : jT(r);
    };
  }
  function w(e, t, n, r) {
    for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
      if (r >= o) return -1;
      if (((s = t.charCodeAt(i++)), s === 37)) {
        if (
          ((s = t.charAt(i++)),
          (c = x[s in FT ? t.charAt(i++) : s]),
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
var FT = { "-": ``, _: ` `, 0: `0` },
  IT = /^\s*\d+/,
  LT = /^%/,
  RT = /[\\^$*+?|[\]().{}]/g;
function Z(e, t, n) {
  var r = e < 0 ? `-` : ``,
    i = (r ? -e : e) + ``,
    a = i.length;
  return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function zT(e) {
  return e.replace(RT, `\\$&`);
}
function BT(e) {
  return RegExp(`^(?:` + e.map(zT).join(`|`) + `)`, `i`);
}
function VT(e) {
  return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function HT(e, t, n) {
  var r = IT.exec(t.slice(n, n + 1));
  return r ? ((e.w = +r[0]), n + r[0].length) : -1;
}
function UT(e, t, n) {
  var r = IT.exec(t.slice(n, n + 1));
  return r ? ((e.u = +r[0]), n + r[0].length) : -1;
}
function WT(e, t, n) {
  var r = IT.exec(t.slice(n, n + 2));
  return r ? ((e.U = +r[0]), n + r[0].length) : -1;
}
function GT(e, t, n) {
  var r = IT.exec(t.slice(n, n + 2));
  return r ? ((e.V = +r[0]), n + r[0].length) : -1;
}
function KT(e, t, n) {
  var r = IT.exec(t.slice(n, n + 2));
  return r ? ((e.W = +r[0]), n + r[0].length) : -1;
}
function qT(e, t, n) {
  var r = IT.exec(t.slice(n, n + 4));
  return r ? ((e.y = +r[0]), n + r[0].length) : -1;
}
function JT(e, t, n) {
  var r = IT.exec(t.slice(n, n + 2));
  return r ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
}
function YT(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r
    ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || `00`))), n + r[0].length)
    : -1;
}
function XT(e, t, n) {
  var r = IT.exec(t.slice(n, n + 1));
  return r ? ((e.q = r[0] * 3 - 3), n + r[0].length) : -1;
}
function ZT(e, t, n) {
  var r = IT.exec(t.slice(n, n + 2));
  return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
}
function QT(e, t, n) {
  var r = IT.exec(t.slice(n, n + 2));
  return r ? ((e.d = +r[0]), n + r[0].length) : -1;
}
function $T(e, t, n) {
  var r = IT.exec(t.slice(n, n + 3));
  return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
}
function eE(e, t, n) {
  var r = IT.exec(t.slice(n, n + 2));
  return r ? ((e.H = +r[0]), n + r[0].length) : -1;
}
function tE(e, t, n) {
  var r = IT.exec(t.slice(n, n + 2));
  return r ? ((e.M = +r[0]), n + r[0].length) : -1;
}
function nE(e, t, n) {
  var r = IT.exec(t.slice(n, n + 2));
  return r ? ((e.S = +r[0]), n + r[0].length) : -1;
}
function rE(e, t, n) {
  var r = IT.exec(t.slice(n, n + 3));
  return r ? ((e.L = +r[0]), n + r[0].length) : -1;
}
function iE(e, t, n) {
  var r = IT.exec(t.slice(n, n + 6));
  return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
}
function aE(e, t, n) {
  var r = LT.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function oE(e, t, n) {
  var r = IT.exec(t.slice(n));
  return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
}
function sE(e, t, n) {
  var r = IT.exec(t.slice(n));
  return r ? ((e.s = +r[0]), n + r[0].length) : -1;
}
function cE(e, t) {
  return Z(e.getDate(), t, 2);
}
function lE(e, t) {
  return Z(e.getHours(), t, 2);
}
function uE(e, t) {
  return Z(e.getHours() % 12 || 12, t, 2);
}
function dE(e, t) {
  return Z(1 + rT.count(wT(e), e), t, 3);
}
function fE(e, t) {
  return Z(e.getMilliseconds(), t, 3);
}
function pE(e, t) {
  return fE(e, t) + `000`;
}
function mE(e, t) {
  return Z(e.getMonth() + 1, t, 2);
}
function hE(e, t) {
  return Z(e.getMinutes(), t, 2);
}
function gE(e, t) {
  return Z(e.getSeconds(), t, 2);
}
function _E(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function vE(e, t) {
  return Z(sT.count(wT(e) - 1, e), t, 2);
}
function yE(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? dT(e) : dT.ceil(e);
}
function bE(e, t) {
  return ((e = yE(e)), Z(dT.count(wT(e), e) + (wT(e).getDay() === 4), t, 2));
}
function xE(e) {
  return e.getDay();
}
function SE(e, t) {
  return Z(cT.count(wT(e) - 1, e), t, 2);
}
function CE(e, t) {
  return Z(e.getFullYear() % 100, t, 2);
}
function wE(e, t) {
  return ((e = yE(e)), Z(e.getFullYear() % 100, t, 2));
}
function TE(e, t) {
  return Z(e.getFullYear() % 1e4, t, 4);
}
function EE(e, t) {
  var n = e.getDay();
  return (
    (e = n >= 4 || n === 0 ? dT(e) : dT.ceil(e)), Z(e.getFullYear() % 1e4, t, 4)
  );
}
function DE(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? `-` : ((t *= -1), `+`)) +
    Z((t / 60) | 0, `0`, 2) +
    Z(t % 60, `0`, 2)
  );
}
function OE(e, t) {
  return Z(e.getUTCDate(), t, 2);
}
function kE(e, t) {
  return Z(e.getUTCHours(), t, 2);
}
function AE(e, t) {
  return Z(e.getUTCHours() % 12 || 12, t, 2);
}
function jE(e, t) {
  return Z(1 + iT.count(TT(e), e), t, 3);
}
function ME(e, t) {
  return Z(e.getUTCMilliseconds(), t, 3);
}
function NE(e, t) {
  return ME(e, t) + `000`;
}
function PE(e, t) {
  return Z(e.getUTCMonth() + 1, t, 2);
}
function FE(e, t) {
  return Z(e.getUTCMinutes(), t, 2);
}
function IE(e, t) {
  return Z(e.getUTCSeconds(), t, 2);
}
function LE(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function RE(e, t) {
  return Z(hT.count(TT(e) - 1, e), t, 2);
}
function zE(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? yT(e) : yT.ceil(e);
}
function BE(e, t) {
  return ((e = zE(e)), Z(yT.count(TT(e), e) + (TT(e).getUTCDay() === 4), t, 2));
}
function VE(e) {
  return e.getUTCDay();
}
function HE(e, t) {
  return Z(gT.count(TT(e) - 1, e), t, 2);
}
function UE(e, t) {
  return Z(e.getUTCFullYear() % 100, t, 2);
}
function WE(e, t) {
  return ((e = zE(e)), Z(e.getUTCFullYear() % 100, t, 2));
}
function GE(e, t) {
  return Z(e.getUTCFullYear() % 1e4, t, 4);
}
function KE(e, t) {
  var n = e.getUTCDay();
  return (
    (e = n >= 4 || n === 0 ? yT(e) : yT.ceil(e)),
    Z(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function qE() {
  return `+0000`;
}
function JE() {
  return `%`;
}
function YE(e) {
  return +e;
}
function XE(e) {
  return Math.floor(e / 1e3);
}
var ZE, QE, $E;
eD({
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
function eD(e) {
  return (
    (ZE = PT(e)),
    (QE = ZE.format),
    ZE.parse,
    ($E = ZE.utcFormat),
    ZE.utcParse,
    ZE
  );
}
function tD(e) {
  return new Date(e);
}
function nD(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function rD(e, t, n, r, i, a, o, s, c, l) {
  var u = zC(),
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
      return arguments.length ? f(Array.from(e, nD)) : f().map(tD);
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
        e ? f(mw(n, e)) : u
      );
    }),
    (u.copy = function () {
      return LC(u, rD(e, t, n, r, i, a, o, s, c, l));
    }),
    u
  );
}
function iD() {
  return _S.apply(
    rD(kT, AT, wT, ST, sT, rT, tT, $w, Qw, QE).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function aD() {
  return _S.apply(
    rD(DT, OT, TT, CT, hT, iT, nT, eT, Qw, $E).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function oD() {
  var e = 0,
    t = 1,
    n,
    r,
    i,
    a,
    o = MC,
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
    (l.range = u(EC)),
    (l.rangeRound = u(DC)),
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
function sD(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function cD() {
  var e = dw(oD()(MC));
  return (
    (e.copy = function () {
      return sD(e, cD());
    }),
    vS.apply(e, arguments)
  );
}
function lD() {
  var e = Cw(oD()).domain([1, 10]);
  return (
    (e.copy = function () {
      return sD(e, lD()).base(e.base());
    }),
    vS.apply(e, arguments)
  );
}
function uD() {
  var e = Dw(oD());
  return (
    (e.copy = function () {
      return sD(e, uD()).constant(e.constant());
    }),
    vS.apply(e, arguments)
  );
}
function dD() {
  var e = Mw(oD());
  return (
    (e.copy = function () {
      return sD(e, dD()).exponent(e.exponent());
    }),
    vS.apply(e, arguments)
  );
}
function fD() {
  return dD.apply(null, arguments).exponent(0.5);
}
function pD() {
  var e = [],
    t = MC;
  function n(n) {
    if (n != null && !isNaN((n = +n)))
      return t((Yx(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (n.domain = function (t) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let n of t) n != null && !isNaN((n = +n)) && e.push(n);
      return (e.sort(Hx), n);
    }),
    (n.interpolator = function (e) {
      return arguments.length ? ((t = e), n) : t;
    }),
    (n.range = function () {
      return e.map((n, r) => t(r / (e.length - 1)));
    }),
    (n.quantiles = function (t) {
      return Array.from({ length: t + 1 }, (n, r) => mS(e, r / t));
    }),
    (n.copy = function () {
      return pD(t).domain(e);
    }),
    vS.apply(n, arguments)
  );
}
function mD() {
  var e = 0,
    t = 0.5,
    n = 1,
    r = 1,
    i,
    a,
    o,
    s,
    c,
    l = MC,
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
        ? (([n, r, i] = t), (l = OC(e, [n, r, i])), p)
        : [l(0), l(0.5), l(1)];
    };
  }
  return (
    (p.range = m(EC)),
    (p.rangeRound = m(DC)),
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
function hD() {
  var e = dw(mD()(MC));
  return (
    (e.copy = function () {
      return sD(e, hD());
    }),
    vS.apply(e, arguments)
  );
}
function gD() {
  var e = Cw(mD()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return sD(e, gD()).base(e.base());
    }),
    vS.apply(e, arguments)
  );
}
function _D() {
  var e = Dw(mD());
  return (
    (e.copy = function () {
      return sD(e, _D()).constant(e.constant());
    }),
    vS.apply(e, arguments)
  );
}
function vD() {
  var e = Mw(mD());
  return (
    (e.copy = function () {
      return sD(e, vD()).exponent(e.exponent());
    }),
    vS.apply(e, arguments)
  );
}
function yD() {
  return vD.apply(null, arguments).exponent(0.5);
}
var bD = e(Vx()),
  xD = t({
    scaleBand: () => xS,
    scaleDiverging: () => hD,
    scaleDivergingLog: () => gD,
    scaleDivergingPow: () => vD,
    scaleDivergingSqrt: () => yD,
    scaleDivergingSymlog: () => _D,
    scaleIdentity: () => pw,
    scaleImplicit: () => yS,
    scaleLinear: () => fw,
    scaleLog: () => ww,
    scaleOrdinal: () => bS,
    scalePoint: () => CS,
    scalePow: () => Nw,
    scaleQuantile: () => Rw,
    scaleQuantize: () => zw,
    scaleRadial: () => Lw,
    scaleSequential: () => cD,
    scaleSequentialLog: () => lD,
    scaleSequentialPow: () => dD,
    scaleSequentialQuantile: () => pD,
    scaleSequentialSqrt: () => fD,
    scaleSequentialSymlog: () => uD,
    scaleSqrt: () => Pw,
    scaleSymlog: () => Ow,
    scaleThreshold: () => Bw,
    scaleTime: () => iD,
    scaleUtc: () => aD,
    tickFormat: () => uw,
  }),
  SD = (e) => e.chartData,
  CD = Y([SD], (e) => {
    var t = e.chartData == null ? 0 : e.chartData.length - 1;
    return {
      chartData: e.chartData,
      computedData: e.computedData,
      dataEndIndex: t,
      dataStartIndex: 0,
    };
  }),
  wD = (e, t, n, r) => (r ? CD(e) : SD(e));
function TD(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, n] = e;
    if (ay(t) && ay(n)) return !0;
  }
  return !1;
}
function ED(e, t, n) {
  return n ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function DD(e, t) {
  if (t && typeof e != `function` && Array.isArray(e) && e.length === 2) {
    var [n, r] = e,
      i,
      a;
    if (ay(n)) i = n;
    else if (typeof n == `function`) return;
    if (ay(r)) a = r;
    else if (typeof r == `function`) return;
    var o = [i, a];
    if (TD(o)) return o;
  }
}
function OD(e, t, n) {
  if (n || t != null) {
    if (typeof e == `function` && t != null)
      try {
        var r = e(t, n);
        if (TD(r)) return ED(r, t, n);
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
      else if (typeof i == `string` && hv.test(i)) {
        var c = hv.exec(i);
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
      else if (typeof a == `string` && gv.test(a)) {
        var u = gv.exec(a);
        if (u == null || t == null) s = void 0;
        else {
          var d = +u[1];
          s = t[1] + d;
        }
      } else s = t?.[1];
      var f = [o, s];
      if (TD(f)) return t == null ? f : ED(f, t, n);
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
  kD = (e) => e,
  AD = { "@@functional/placeholder": !0 },
  jD = (e) => e === AD,
  MD = (e) =>
    function t() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          jD(arguments.length <= 0 ? void 0 : arguments[0]))
        ? t
        : e(...arguments);
    },
  ND = (e, t) =>
    e === 1
      ? t
      : MD(function () {
          var n = [...arguments],
            r = n.filter((e) => e !== AD).length;
          return r >= e
            ? t(...n)
            : ND(
                e - r,
                MD(function () {
                  var e = [...arguments];
                  return t(...n.map((t) => (jD(t) ? e.shift() : t)), ...e);
                }),
              );
        }),
  PD = (e) => ND(e.length, e),
  FD = (e, t) => {
    for (var n = [], r = e; r < t; ++r) n[r - e] = r;
    return n;
  },
  ID = PD((e, t) =>
    Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map((e) => t[e])
          .map(e),
  ),
  LD = function () {
    var e = [...arguments];
    if (!e.length) return kD;
    var t = e.reverse(),
      n = t[0],
      r = t.slice(1);
    return function () {
      return r.reduce((e, t) => t(e), n(...arguments));
    };
  },
  RD = (e) => (Array.isArray(e) ? e.reverse() : e.split(``).reverse().join(``)),
  zD = (e) => {
    var t = null,
      n = null;
    return function () {
      var r = [...arguments];
      return (
        (t && r.every((e, n) => e === t?.[n])) || ((t = r), (n = e(...r))), n
      );
    };
  };
function BD(e) {
  return e === 0
    ? 1
    : Math.floor(new Q.default(e).abs().log(10).toNumber()) + 1;
}
function VD(e, t, n) {
  for (var r = new Q.default(e), i = 0, a = []; r.lt(t) && i < 1e5;)
    (a.push(r.toNumber()), (r = r.add(n)), i++);
  return a;
}
(PD((e, t, n) => {
  var r = +e;
  return r + n * (+t - r);
}),
  PD((e, t, n) => {
    var r = t - +e;
    return ((r ||= 1 / 0), (n - e) / r);
  }),
  PD((e, t, n) => {
    var r = t - +e;
    return ((r ||= 1 / 0), Math.max(0, Math.min(1, (n - e) / r)));
  }));
var HD = (e) => {
    var [t, n] = e,
      [r, i] = [t, n];
    return (t > n && ([r, i] = [n, t]), [r, i]);
  },
  UD = (e, t, n) => {
    if (e.lte(0)) return new Q.default(0);
    var r = BD(e.toNumber()),
      i = new Q.default(10).pow(r),
      a = e.div(i),
      o = r === 1 ? 0.1 : 0.05,
      s = new Q.default(Math.ceil(a.div(o).toNumber())).add(n).mul(o).mul(i);
    return t
      ? new Q.default(s.toNumber())
      : new Q.default(Math.ceil(s.toNumber()));
  },
  WD = (e, t, n) => {
    var r = new Q.default(1),
      i = new Q.default(e);
    if (!i.isint() && n) {
      var a = Math.abs(e);
      a < 1
        ? ((r = new Q.default(10).pow(BD(e) - 1)),
          (i = new Q.default(Math.floor(i.div(r).toNumber())).mul(r)))
        : a > 1 && (i = new Q.default(Math.floor(e)));
    } else
      e === 0
        ? (i = new Q.default(Math.floor((t - 1) / 2)))
        : n || (i = new Q.default(Math.floor(e)));
    var o = Math.floor((t - 1) / 2);
    return LD(
      ID((e) => i.add(new Q.default(e - o).mul(r)).toNumber()),
      FD,
    )(0, t);
  },
  GD = function (e, t, n, r) {
    var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    if (!Number.isFinite((t - e) / (n - 1)))
      return {
        step: new Q.default(0),
        tickMin: new Q.default(0),
        tickMax: new Q.default(0),
      };
    var a = UD(new Q.default(t).sub(e).div(n - 1), r, i),
      o;
    e <= 0 && t >= 0
      ? (o = new Q.default(0))
      : ((o = new Q.default(e).add(t).div(2)),
        (o = o.sub(new Q.default(o).mod(a))));
    var s = Math.ceil(o.sub(e).div(a).toNumber()),
      c = Math.ceil(new Q.default(t).sub(o).div(a).toNumber()),
      l = s + c + 1;
    return l > n
      ? GD(e, t, n, r, i + 1)
      : (l < n &&
          ((c = t > 0 ? c + (n - l) : c), (s = t > 0 ? s : s + (n - l))),
        {
          step: a,
          tickMin: o.sub(new Q.default(s).mul(a)),
          tickMax: o.add(new Q.default(c).mul(a)),
        });
  };
function KD(e) {
  var [t, n] = e,
    r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    a = Math.max(r, 2),
    [o, s] = HD([t, n]);
  if (o === -1 / 0 || s === 1 / 0) {
    var c =
      s === 1 / 0
        ? [o, ...FD(0, r - 1).map(() => 1 / 0)]
        : [...FD(0, r - 1).map(() => -1 / 0), s];
    return t > n ? RD(c) : c;
  }
  if (o === s) return WD(o, r, i);
  var { step: l, tickMin: u, tickMax: d } = GD(o, s, a, i, 0),
    f = VD(u, d.add(new Q.default(0.1).mul(l)), l);
  return t > n ? RD(f) : f;
}
function qD(e, t) {
  var [n, r] = e,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    [a, o] = HD([n, r]);
  if (a === -1 / 0 || o === 1 / 0) return [n, r];
  if (a === o) return [a];
  var s = Math.max(t, 2),
    c = UD(new Q.default(o).sub(a).div(s - 1), i, 0),
    l = [...VD(new Q.default(a), new Q.default(o), c), o];
  return (i === !1 && (l = l.map((e) => Math.round(e))), n > r ? RD(l) : l);
}
var JD = zD(KD),
  YD = zD(qD),
  XD = (e) => e.rootProps.maxBarSize,
  ZD = (e) => e.rootProps.barGap,
  QD = (e) => e.rootProps.barCategoryGap,
  $D = (e) => e.rootProps.barSize,
  eO = (e) => e.rootProps.stackOffset,
  tO = (e) => e.options.chartName,
  nO = (e) => e.rootProps.syncId,
  rO = (e) => e.rootProps.syncMethod,
  iO = (e) => e.options.eventEmitter,
  aO = {
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
  oO = {
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
  sO = (e, t) => {
    if (e && t) return e != null && e.reversed ? [t[1], t[0]] : t;
  },
  cO = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    domain: void 0,
    id: aO.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: aO.reversed,
    scale: aO.scale,
    tick: aO.tick,
    tickCount: void 0,
    ticks: void 0,
    type: aO.type,
    unit: void 0,
  },
  lO = {
    allowDataOverflow: oO.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: oO.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: oO.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: oO.scale,
    tick: oO.tick,
    tickCount: oO.tickCount,
    ticks: void 0,
    type: oO.type,
    unit: void 0,
  },
  uO = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: aO.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: aO.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: aO.scale,
    tick: aO.tick,
    tickCount: void 0,
    ticks: void 0,
    type: `number`,
    unit: void 0,
  },
  dO = {
    allowDataOverflow: oO.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: oO.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: oO.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: oO.scale,
    tick: oO.tick,
    tickCount: oO.tickCount,
    ticks: void 0,
    type: `category`,
    unit: void 0,
  },
  fO = (e, t) =>
    e.polarAxis.angleAxis[t] == null
      ? e.layout.layoutType === `radial`
        ? uO
        : cO
      : e.polarAxis.angleAxis[t],
  pO = (e, t) =>
    e.polarAxis.radiusAxis[t] == null
      ? e.layout.layoutType === `radial`
        ? dO
        : lO
      : e.polarAxis.radiusAxis[t],
  mO = (e) => e.polarOptions,
  hO = Y([Cv, wv, Vv], z_),
  gO = Y([mO, hO], (e, t) => {
    if (e != null) return Yf(e.innerRadius, t, 0);
  }),
  _O = Y([mO, hO], (e, t) => {
    if (e != null) return Yf(e.outerRadius, t, t * 0.8);
  }),
  vO = Y([mO], (e) => {
    if (e == null) return [0, 0];
    var { startAngle: t, endAngle: n } = e;
    return [t, n];
  }),
  yO = Y([fO, vO], sO),
  bO = Y([hO, gO, _O], (e, t, n) => {
    if (e != null && t != null && n != null) return [t, n];
  }),
  xO = Y([pO, bO], sO),
  SO = Y([X, mO, gO, _O, Cv, wv], (e, t, n, r, i, a) => {
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
        cx: Yf(o, i, i / 2),
        cy: Yf(s, a, a / 2),
        innerRadius: n,
        outerRadius: r,
        startAngle: c,
        endAngle: l,
        clockWise: !1,
      };
    }
  }),
  CO = (e, t) => t,
  wO = (e, t, n) => n;
function TO(e) {
  return e?.id;
}
var EO = (e) => {
    var t = X(e);
    return t === `horizontal`
      ? `xAxis`
      : t === `vertical`
        ? `yAxis`
        : t === `centric`
          ? `angleAxis`
          : `radiusAxis`;
  },
  DO = (e) => e.tooltip.settings.axisId,
  OO = (e) => XO(e, EO(e), DO(e)),
  kO = Y([OO], (e) => e?.dataKey);
function AO(e, t, n) {
  var { chartData: r = [] } = t,
    { allowDuplicatedCategory: i, dataKey: a } = n,
    o = new Map();
  return (
    e.forEach((e) => {
      var t = e.data ?? r;
      if (t != null && t.length !== 0) {
        var n = TO(e);
        t.forEach((t, r) => {
          var s = a == null || i ? r : String(Q_(t, a, null)),
            c = Q_(t, e.dataKey, 0),
            l = o.has(s) ? o.get(s) : {};
          (Object.assign(l, { [n]: c }), o.set(s, l));
        });
      }
    }),
    Array.from(o.values())
  );
}
function jO(e) {
  return e.stackId != null && e.dataKey != null;
}
var MO = (e, t) =>
  e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function NO(e, t) {
  return Array.isArray(e) &&
    Array.isArray(t) &&
    e.length === 0 &&
    t.length === 0
    ? !0
    : e === t;
}
function PO(e, t) {
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
function FO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? PO(Object(n), !0).forEach(function (t) {
          IO(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : PO(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function IO(e, t, n) {
  return (
    (t = LO(t)) in e
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
function LO(e) {
  var t = RO(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function RO(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var zO = [0, `auto`],
  BO = {
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
  VO = (e, t) => e.cartesianAxis.xAxis[t],
  HO = (e, t) => VO(e, t) ?? BO,
  UO = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: zO,
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
  WO = (e, t) => e.cartesianAxis.yAxis[t],
  GO = (e, t) => WO(e, t) ?? UO,
  KO = {
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
  qO = (e, t) => e.cartesianAxis.zAxis[t] ?? KO,
  JO = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return HO(e, n);
      case `yAxis`:
        return GO(e, n);
      case `zAxis`:
        return qO(e, n);
      case `angleAxis`:
        return fO(e, n);
      case `radiusAxis`:
        return pO(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  YO = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return HO(e, n);
      case `yAxis`:
        return GO(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  XO = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return HO(e, n);
      case `yAxis`:
        return GO(e, n);
      case `angleAxis`:
        return fO(e, n);
      case `radiusAxis`:
        return pO(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  ZO = (e) =>
    e.graphicalItems.cartesianItems.some((e) => e.type === `bar`) ||
    e.graphicalItems.polarItems.some((e) => e.type === `radialBar`);
function QO(e, t) {
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
var $O = (e) => e.graphicalItems.cartesianItems,
  ek = Y([CO, wO], QO),
  tk = (e, t, n) =>
    e.filter(n).filter((e) => t?.includeHidden === !0 || !e.hide),
  nk = Y([$O, JO, ek], tk, { memoizeOptions: { resultEqualityCheck: NO } }),
  rk = Y([nk], (e) =>
    e.filter((e) => e.type === `area` || e.type === `bar`).filter(jO),
  ),
  ik = (e) => e.filter((e) => !(`stackId` in e) || e.stackId === void 0),
  ak = Y([nk], ik),
  ok = (e) =>
    e
      .map((e) => e.data)
      .filter(Boolean)
      .flat(1),
  sk = Y([nk], ok, { memoizeOptions: { resultEqualityCheck: NO } }),
  ck = (e, t) => {
    var { chartData: n = [], dataStartIndex: r, dataEndIndex: i } = t;
    return e.length > 0 ? e : n.slice(r, i + 1);
  },
  lk = Y([sk, wD], ck),
  uk = (e, t, n) =>
    t?.dataKey == null
      ? n.length > 0
        ? n
            .map((e) => e.dataKey)
            .flatMap((t) => e.map((e) => ({ value: Q_(e, t) })))
        : e.map((e) => ({ value: e }))
      : e.map((e) => ({ value: Q_(e, t.dataKey) })),
  dk = Y([lk, JO, nk], uk);
function fk(e, t) {
  switch (e) {
    case `xAxis`:
      return t.direction === `x`;
    case `yAxis`:
      return t.direction === `y`;
    default:
      return !1;
  }
}
function pk(e) {
  if (Kf(e) || e instanceof Date) {
    var t = Number(e);
    if (ay(t)) return t;
  }
}
function mk(e) {
  if (Array.isArray(e)) {
    var t = [pk(e[0]), pk(e[1])];
    return TD(t) ? t : void 0;
  }
  var n = pk(e);
  if (n != null) return [n, n];
}
function hk(e) {
  return e.map(pk).filter(Mb);
}
function gk(e, t, n) {
  return !n || typeof t != `number` || Wf(t) || !n.length
    ? []
    : hk(
        n.flatMap((n) => {
          var r = Q_(e, n.dataKey),
            i,
            a;
          if ((Array.isArray(r) ? ([i, a] = r) : (i = a = r), ay(i) && ay(a)))
            return [t - i, t + a];
        }),
      );
}
var _k = Y([rk, wD, OO], AO),
  vk = (e, t, n) => {
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
        return [r, { stackedData: cv(e, i.map(TO), n), graphicalItems: i }];
      }),
    );
  },
  yk = Y([_k, rk, eO], vk),
  bk = (e, t, n, r) => {
    var { dataStartIndex: i, dataEndIndex: a } = t;
    if (r == null && n !== `zAxis`) {
      var o = mv(e, i, a);
      if (o == null || o[0] !== 0 || o[1] !== 0) return o;
    }
  },
  xk = Y([JO], (e) => e.allowDataOverflow),
  Sk = (e) => {
    if (e == null || !(`domain` in e)) return zO;
    if (e.domain != null) return e.domain;
    if (e.ticks != null) {
      if (e.type === `number`) {
        var t = hk(e.ticks);
        return [Math.min(...t), Math.max(...t)];
      }
      if (e.type === `category`) return e.ticks.map(String);
    }
    return e?.domain ?? zO;
  },
  Ck = Y([JO], Sk),
  wk = Y([Ck, xk], DD),
  Tk = Y([yk, SD, CO, wk], bk, { memoizeOptions: { resultEqualityCheck: MO } }),
  Ek = (e) => e.errorBars,
  Dk = (e, t, n) =>
    e
      .flatMap((e) => t[e.id])
      .filter(Boolean)
      .filter((e) => fk(n, e)),
  Ok = function () {
    var e = [...arguments].filter(Boolean);
    if (e.length !== 0) {
      var t = e.flat();
      return [Math.min(...t), Math.max(...t)];
    }
  },
  kk = (e, t, n, r, i) => {
    var a, o;
    if (
      (n.length > 0 &&
        e.forEach((e) => {
          n.forEach((n) => {
            var s = r[n.id]?.filter((e) => fk(i, e)),
              c = Q_(e, t.dataKey ?? n.dataKey),
              l = gk(e, c, s);
            if (l.length >= 2) {
              var u = Math.min(...l),
                d = Math.max(...l);
              ((a == null || u < a) && (a = u),
                (o == null || d > o) && (o = d));
            }
            var f = mk(c);
            f != null &&
              ((a = a == null ? f[0] : Math.min(a, f[0])),
              (o = o == null ? f[1] : Math.max(o, f[1])));
          });
        }),
      t?.dataKey != null &&
        e.forEach((e) => {
          var n = mk(Q_(e, t.dataKey));
          n != null &&
            ((a = a == null ? n[0] : Math.min(a, n[0])),
            (o = o == null ? n[1] : Math.max(o, n[1])));
        }),
      ay(a) && ay(o))
    )
      return [a, o];
  },
  Ak = Y([lk, JO, ak, Ek, CO], kk, {
    memoizeOptions: { resultEqualityCheck: MO },
  });
function jk(e) {
  var { value: t } = e;
  if (Kf(t) || t instanceof Date) return t;
}
var Mk = (e, t, n) => {
    var r = e.map(jk).filter((e) => e != null);
    return n && (t.dataKey == null || (t.allowDuplicatedCategory && Xf(r)))
      ? (0, bD.default)(0, e.length)
      : t.allowDuplicatedCategory
        ? r
        : Array.from(new Set(r));
  },
  Nk = (e) => e.referenceElements.dots,
  Pk = (e, t, n) =>
    e
      .filter((e) => e.ifOverflow === `extendDomain`)
      .filter((e) => (t === `xAxis` ? e.xAxisId === n : e.yAxisId === n)),
  Fk = Y([Nk, CO, wO], Pk),
  Ik = (e) => e.referenceElements.areas,
  Lk = Y([Ik, CO, wO], Pk),
  Rk = (e) => e.referenceElements.lines,
  zk = Y([Rk, CO, wO], Pk),
  Bk = (e, t) => {
    var n = hk(e.map((e) => (t === `xAxis` ? e.x : e.y)));
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  Vk = Y(Fk, CO, Bk),
  Hk = (e, t) => {
    var n = hk(
      e.flatMap((e) => [
        t === `xAxis` ? e.x1 : e.y1,
        t === `xAxis` ? e.x2 : e.y2,
      ]),
    );
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  Uk = Y([Lk, CO], Hk),
  Wk = (e, t) => {
    var n = hk(e.map((e) => (t === `xAxis` ? e.x : e.y)));
    if (n.length !== 0) return [Math.min(...n), Math.max(...n)];
  },
  Gk = Y(Vk, Y(zk, CO, Wk), Uk, (e, t, n) => Ok(e, n, t)),
  Kk = (e, t, n, r, i, a, o, s) =>
    n ??
    OD(
      t,
      (o === `vertical` && s === `xAxis`) ||
        (o === `horizontal` && s === `yAxis`)
        ? Ok(r, a, i)
        : Ok(a, i),
      e.allowDataOverflow,
    ),
  qk = Y([JO, Ck, wk, Tk, Ak, Gk, X, CO], Kk, {
    memoizeOptions: { resultEqualityCheck: MO },
  }),
  Jk = [0, 1],
  Yk = (e, t, n, r, i, a, o) => {
    if ((e != null && n != null && n.length !== 0) || o !== void 0) {
      var { dataKey: s, type: c } = e,
        l = tv(t, a);
      return l && s == null
        ? (0, bD.default)(0, n.length)
        : c === `category`
          ? Mk(r, e, l)
          : i === `expand`
            ? Jk
            : o;
    }
  },
  Xk = Y([JO, X, lk, dk, eO, CO, qk], Yk),
  Zk = (e, t, n, r, i) => {
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
        var s = `scale${ep(a)}`;
        return s in xD ? s : `point`;
      }
    }
  },
  Qk = Y([JO, X, ZO, tO, CO], Zk);
function $k(e) {
  if (e != null) {
    if (e in xD) return xD[e]();
    var t = `scale${ep(e)}`;
    if (t in xD) return xD[t]();
  }
}
function eA(e, t, n, r) {
  if (n != null && r != null) {
    if (typeof e.scale == `function`) return e.scale.copy().domain(n).range(r);
    var i = $k(t);
    if (i != null) {
      var a = i.domain(n).range(r);
      return (av(a), a);
    }
  }
}
var tA = (e, t, n) => {
    var r = Sk(t);
    if (n === `auto` || n === `linear`) {
      if (
        t != null &&
        t.tickCount &&
        Array.isArray(r) &&
        (r[0] === `auto` || r[1] === `auto`) &&
        TD(e)
      )
        return JD(e, t.tickCount, t.allowDecimals);
      if (t != null && t.tickCount && t.type === `number` && TD(e))
        return YD(e, t.tickCount, t.allowDecimals);
    }
  },
  nA = Y([Xk, XO, Qk], tA),
  rA = (e, t, n, r) => {
    if (
      r !== `angleAxis` &&
      e?.type === `number` &&
      TD(t) &&
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
  iA = Y([JO, Xk, nA, CO], rA),
  aA = Y(
    Y(dk, JO, (e, t) => {
      if (t && t.type === `number`) {
        var n = 1 / 0,
          r = Array.from(hk(e.map((e) => e.value))).sort((e, t) => e - t);
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
    QD,
    Vv,
    (e, t, n, r) => r,
    (e, t, n, r, i) => {
      if (!ay(e)) return 0;
      var a = t === `vertical` ? r.height : r.width;
      if (i === `gap`) return (e * a) / 2;
      if (i === `no-gap`) {
        var o = Yf(n, e * a),
          s = (e * a) / 2;
        return s - o - ((s - o) / a) * o;
      }
      return 0;
    },
  ),
  oA = (e, t) => {
    var n = HO(e, t);
    return n == null || typeof n.padding != `string`
      ? 0
      : aA(e, `xAxis`, t, n.padding);
  },
  sA = (e, t) => {
    var n = GO(e, t);
    return n == null || typeof n.padding != `string`
      ? 0
      : aA(e, `yAxis`, t, n.padding);
  },
  cA = Y(HO, oA, (e, t) => {
    if (e == null) return { left: 0, right: 0 };
    var { padding: n } = e;
    return typeof n == `string`
      ? { left: t, right: t }
      : { left: (n.left ?? 0) + t, right: (n.right ?? 0) + t };
  }),
  lA = Y(GO, sA, (e, t) => {
    if (e == null) return { top: 0, bottom: 0 };
    var { padding: n } = e;
    return typeof n == `string`
      ? { top: t, bottom: t }
      : { top: (n.top ?? 0) + t, bottom: (n.bottom ?? 0) + t };
  }),
  uA = Y([Vv, cA, qv, Kv, (e, t, n) => n], (e, t, n, r, i) => {
    var { padding: a } = r;
    return i
      ? [a.left, n.width - a.right]
      : [e.left + t.left, e.left + e.width - t.right];
  }),
  dA = Y([Vv, X, lA, qv, Kv, (e, t, n) => n], (e, t, n, r, i, a) => {
    var { padding: o } = i;
    return a
      ? [r.height - o.bottom, o.top]
      : t === `horizontal`
        ? [e.top + e.height - n.bottom, e.top + n.top]
        : [e.top + n.top, e.top + e.height - n.bottom];
  }),
  fA = (e, t, n, r) => {
    switch (t) {
      case `xAxis`:
        return uA(e, n, r);
      case `yAxis`:
        return dA(e, n, r);
      case `zAxis`:
        return qO(e, n)?.range;
      case `angleAxis`:
        return vO(e);
      case `radiusAxis`:
        return bO(e, n);
      default:
        return;
    }
  },
  pA = Y([JO, fA], sO),
  mA = Y([JO, Qk, iA, pA], eA);
Y([nk, Ek, CO], Dk);
function hA(e, t) {
  return e.id < t.id ? -1 : +(e.id > t.id);
}
var gA = (e, t) => t,
  _A = (e, t, n) => n,
  vA = Y(Dv, gA, _A, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort(hA),
  ),
  yA = Y(Ov, gA, _A, (e, t, n) =>
    e
      .filter((e) => e.orientation === t)
      .filter((e) => e.mirror === n)
      .sort(hA),
  ),
  bA = (e, t) => ({ width: e.width, height: t.height }),
  xA = (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  }),
  SA = Y(Vv, HO, bA),
  CA = (e, t, n) => {
    switch (t) {
      case `top`:
        return e.top;
      case `bottom`:
        return n - e.bottom;
      default:
        return 0;
    }
  },
  wA = (e, t, n) => {
    switch (t) {
      case `left`:
        return e.left;
      case `right`:
        return n - e.right;
      default:
        return 0;
    }
  },
  TA = Y(wv, Vv, vA, gA, _A, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = bA(t, n);
        o ??= CA(t, r, e);
        var c = (r === `top` && !i) || (r === `bottom` && i);
        ((a[n.id] = o - Number(c) * s.height), (o += (c ? -1 : 1) * s.height));
      }),
      a
    );
  }),
  EA = Y(Cv, Vv, yA, gA, _A, (e, t, n, r, i) => {
    var a = {},
      o;
    return (
      n.forEach((n) => {
        var s = xA(t, n);
        o ??= wA(t, r, e);
        var c = (r === `left` && !i) || (r === `right` && i);
        ((a[n.id] = o - Number(c) * s.width), (o += (c ? -1 : 1) * s.width));
      }),
      a
    );
  }),
  DA = Y(
    [
      Vv,
      HO,
      (e, t) => {
        var n = HO(e, t);
        if (n != null) return TA(e, n.orientation, n.mirror);
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
  OA = Y(
    [
      Vv,
      GO,
      (e, t) => {
        var n = GO(e, t);
        if (n != null) return EA(e, n.orientation, n.mirror);
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
  kA = Y(Vv, GO, (e, t) => ({
    width: typeof t.width == `number` ? t.width : 60,
    height: e.height,
  })),
  AA = (e, t, n) => {
    switch (t) {
      case `xAxis`:
        return SA(e, n).width;
      case `yAxis`:
        return kA(e, n).height;
      default:
        return;
    }
  },
  jA = (e, t, n, r) => {
    if (n != null) {
      var { allowDuplicatedCategory: i, type: a, dataKey: o } = n,
        s = tv(e, r),
        c = t.map((e) => e.value);
      if (o && s && a === `category` && i && Xf(c)) return c;
    }
  },
  MA = Y([X, dk, JO, CO], jA),
  NA = (e, t, n, r) => {
    if (n != null && n.dataKey != null) {
      var { type: i, scale: a } = n;
      if (tv(e, r) && (i === `number` || a !== `auto`))
        return t.map((e) => e.value);
    }
  },
  PA = Y([X, dk, XO, CO], NA),
  FA = Y([X, YO, Qk, mA, MA, PA, fA, nA, CO], (e, t, n, r, i, a, o, s, c) => {
    if (t == null) return null;
    var l = tv(e, c);
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
  IA = (e, t, n, r, i, a, o, s, c) => {
    if (t != null && r != null) {
      var l = tv(e, c),
        { type: u, ticks: d, tickCount: f } = t,
        p =
          n === `scaleBand` && typeof r.bandwidth == `function`
            ? r.bandwidth() / 2
            : 2,
        m = u === `category` && r.bandwidth ? r.bandwidth() / p : 0;
      m =
        c === `angleAxis` && a != null && a.length >= 2
          ? Uf(a[0] - a[1]) * 2 * m
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
            .filter((e) => !Wf(e.coordinate))
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
  LA = Y([X, XO, Qk, mA, nA, fA, MA, PA, CO], IA),
  RA = (e, t, n, r, i, a, o) => {
    if (t != null && n != null && r != null && r[0] !== r[1]) {
      var s = tv(e, o),
        { tickCount: c } = t,
        l = 0;
      return (
        (l = o === `angleAxis` && r?.length >= 2 ? Uf(r[0] - r[1]) * 2 * l : l),
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
  zA = Y([X, XO, mA, fA, MA, PA, CO], RA),
  BA = Y(JO, mA, (e, t) => {
    if (e != null && t != null) return FO(FO({}, e), {}, { scale: t });
  });
Y(
  (e, t, n) => qO(e, n),
  Y([JO, Qk, Xk, pA], eA),
  (e, t) => {
    if (e != null && t != null) return FO(FO({}, e), {}, { scale: t });
  },
);
var VA = Y([X, Dv, Ov], (e, t, n) => {
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
  HA = (e) => e.options.defaultTooltipEventType,
  UA = (e) => e.options.validateTooltipEventTypes;
function WA(e, t, n) {
  if (e == null) return t;
  var r = e ? `axis` : `item`;
  return n == null ? t : n.includes(r) ? r : t;
}
function GA(e, t) {
  return WA(t, HA(e), UA(e));
}
function KA(e) {
  return J((t) => GA(t, e));
}
var qA = (e, t) => {
    var n,
      r = Number(t);
    if (!(Wf(r) || t == null))
      return r >= 0
        ? e == null || (n = e[r]) == null
          ? void 0
          : n.value
        : void 0;
  },
  JA = (e) => e.tooltip.settings,
  YA = { active: !1, index: null, dataKey: void 0, coordinate: void 0 },
  XA = Fg({
    name: `tooltip`,
    initialState: {
      itemInteraction: { click: YA, hover: YA },
      axisInteraction: { click: YA, hover: YA },
      keyboardInteraction: YA,
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
          e.tooltipItemPayloads.push(Lh(t.payload));
        },
        prepare: dg(),
      },
      removeTooltipEntrySettings: {
        reducer(e, t) {
          var n = Mh(e).tooltipItemPayloads.indexOf(Lh(t.payload));
          n > -1 && e.tooltipItemPayloads.splice(n, 1);
        },
        prepare: dg(),
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
    addTooltipEntrySettings: ZA,
    removeTooltipEntrySettings: QA,
    setTooltipSettingsState: $A,
    setActiveMouseOverItemIndex: ej,
    mouseLeaveItem: tj,
    mouseLeaveChart: nj,
    setActiveClickItemIndex: rj,
    setMouseOverAxisIndex: ij,
    setMouseClickAxisIndex: aj,
    setSyncInteraction: oj,
    setKeyboardInteraction: sj,
  } = XA.actions,
  cj = XA.reducer;
function lj(e, t) {
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
function uj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? lj(Object(n), !0).forEach(function (t) {
          dj(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : lj(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function dj(e, t, n) {
  return (
    (t = fj(t)) in e
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
function fj(e) {
  var t = pj(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function pj(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function mj(e, t, n) {
  return t === `axis`
    ? n === `click`
      ? e.axisInteraction.click
      : e.axisInteraction.hover
    : n === `click`
      ? e.itemInteraction.click
      : e.itemInteraction.hover;
}
function hj(e) {
  return e.index != null;
}
var gj = (e, t, n, r) => {
    if (t == null) return YA;
    var i = mj(e, t, n);
    if (i == null) return YA;
    if (i.active) return i;
    if (e.keyboardInteraction.active) return e.keyboardInteraction;
    if (e.syncInteraction.active && e.syncInteraction.index != null)
      return e.syncInteraction;
    var a = e.settings.active === !0;
    if (hj(i)) {
      if (a) return uj(uj({}, i), {}, { active: !0 });
    } else if (r != null)
      return { active: !0, coordinate: void 0, dataKey: void 0, index: r };
    return uj(uj({}, YA), {}, { coordinate: i.coordinate });
  },
  _j = (e, t) => {
    var n = e?.index;
    if (n == null) return null;
    var r = Number(n);
    if (!ay(r)) return n;
    var i = 0,
      a = 1 / 0;
    return (
      t.length > 0 && (a = t.length - 1), String(Math.max(i, Math.min(r, a)))
    );
  },
  vj = (e, t, n, r, i, a, o, s) => {
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
  yj = (e, t, n, r) => {
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
  bj = (e) => e.options.tooltipPayloadSearcher,
  xj = (e) => e.tooltip;
function Sj(e, t) {
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
function Cj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Sj(Object(n), !0).forEach(function (t) {
          wj(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Sj(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function wj(e, t, n) {
  return (
    (t = Tj(t)) in e
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
function Tj(e) {
  var t = Ej(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ej(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Dj(e, t) {
  return e ?? t;
}
var Oj = (e, t, n, r, i, a, o) => {
    if (t != null && a != null) {
      var {
        chartData: s,
        computedData: c,
        dataStartIndex: l,
        dataEndIndex: u,
      } = n;
      return e.reduce((e, n) => {
        var { dataDefinedOnItem: d, settings: f } = n,
          p = Dj(d, s),
          m = Array.isArray(p) ? K_(p, l, u) : p,
          h = f?.dataKey ?? r,
          g = f?.nameKey,
          _ =
            r && Array.isArray(m) && !Array.isArray(m[0]) && o === `axis`
              ? Qf(m, r, i)
              : a(m, t, c, g);
        return (
          Array.isArray(_)
            ? _.forEach((t) => {
                var n = Cj(
                  Cj({}, f),
                  {},
                  { name: t.name, unit: t.unit, color: void 0, fill: void 0 },
                );
                e.push(
                  vv({
                    tooltipEntrySettings: n,
                    dataKey: t.dataKey,
                    payload: t.payload,
                    value: Q_(t.payload, t.dataKey),
                    name: t.name,
                  }),
                );
              })
            : e.push(
                vv({
                  tooltipEntrySettings: f,
                  dataKey: h,
                  payload: _,
                  value: Q_(_, h),
                  name: Q_(_, g) ?? f?.name,
                }),
              ),
          e
        );
      }, []);
    }
  },
  kj = Y([OO, X, ZO, tO, EO], Zk),
  Aj = Y(
    [
      Y(
        [
          (e) => e.graphicalItems.cartesianItems,
          (e) => e.graphicalItems.polarItems,
        ],
        (e, t) => [...e, ...t],
      ),
      OO,
      Y([EO, DO], QO),
    ],
    tk,
    { memoizeOptions: { resultEqualityCheck: NO } },
  ),
  jj = Y([Aj], (e) => e.filter(jO)),
  Mj = Y(
    [Y([Aj], ok, { memoizeOptions: { resultEqualityCheck: NO } }), SD],
    ck,
  ),
  Nj = Y([jj, SD, OO], AO),
  Pj = Y([Mj, OO, Aj], uk),
  Fj = Y([OO], Sk),
  Ij = Y([Fj, Y([OO], (e) => e.allowDataOverflow)], DD),
  Lj = Y([Y([Nj, Y([Aj], (e) => e.filter(jO)), eO], vk), SD, EO, Ij], bk),
  Rj = Y([Mj, OO, Y([Aj], ik), Ek, EO], kk, {
    memoizeOptions: { resultEqualityCheck: MO },
  }),
  zj = Y([Y([Nk, EO, DO], Pk), EO], Bk),
  Bj = Y([Y([Ik, EO, DO], Pk), EO], Hk),
  Vj = Y(
    [
      OO,
      X,
      Mj,
      Pj,
      eO,
      EO,
      Y(
        [
          OO,
          Fj,
          Ij,
          Lj,
          Rj,
          Y([zj, Y([Y([Rk, EO, DO], Pk), EO], Wk), Bj], Ok),
          X,
          EO,
        ],
        Kk,
      ),
    ],
    Yk,
  ),
  Hj = Y([OO, Vj, Y([Vj, OO, kj], tA), EO], rA),
  Uj = (e) => fA(e, EO(e), DO(e), !1),
  Wj = Y([OO, Uj], sO),
  Gj = Y([OO, kj, Hj, Wj], eA),
  Kj = Y(
    [X, OO, kj, Gj, Uj, Y([X, Pj, OO, EO], jA), Y([X, Pj, OO, EO], NA), EO],
    (e, t, n, r, i, a, o, s) => {
      if (t) {
        var { type: c } = t,
          l = tv(e, s);
        if (r) {
          var u = n === `scaleBand` && r.bandwidth ? r.bandwidth() / 2 : 2,
            d = c === `category` && r.bandwidth ? r.bandwidth() / u : 0;
          return (
            (d =
              s === `angleAxis` && i != null && i?.length >= 2
                ? Uf(i[0] - i[1]) * 2 * d
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
  qj = Y([HA, UA, JA], (e, t, n) => WA(n.shared, e, t)),
  Jj = (e) => e.tooltip.settings.trigger,
  Yj = (e) => e.tooltip.settings.defaultIndex,
  Xj = Y([xj, qj, Jj, Yj], gj),
  Zj = Y([Xj, Mj], _j),
  Qj = Y([Kj, Zj], qA),
  $j = Y([Xj], (e) => {
    if (e) return e.dataKey;
  }),
  eM = Y([xj, qj, Jj, Yj], yj),
  tM = Y([Xj, Y([Cv, wv, X, Vv, Kj, Yj, eM, bj], vj)], (e, t) =>
    e != null && e.coordinate ? e.coordinate : t,
  ),
  nM = Y([Xj], (e) => e.active),
  rM = Y([Y([eM, Zj, SD, kO, Qj, bj, qj], Oj)], (e) => {
    if (e != null) {
      var t = e.map((e) => e.payload).filter((e) => e != null);
      return Array.from(new Set(t));
    }
  });
function iM(e, t) {
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
function aM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? iM(Object(n), !0).forEach(function (t) {
          oM(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : iM(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function oM(e, t, n) {
  return (
    (t = sM(t)) in e
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
function sM(e) {
  var t = cM(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function cM(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var lM = () => J(OO),
  uM = () => {
    var e = lM(),
      t = J(Kj),
      n = J(Gj);
    return _v(aM(aM({}, e), {}, { scale: n }), t);
  },
  dM = () => J(tO),
  fM = (e, t) => t,
  pM = (e, t, n) => n,
  mM = (e, t, n, r) => r,
  hM = Y(Kj, (e) => (0, Sm.default)(e, (e) => e.coordinate)),
  gM = Y([xj, fM, pM, mM], gj),
  _M = Y([gM, Mj], _j),
  vM = (e, t, n) => {
    if (t != null) {
      var r = xj(e);
      return t === `axis`
        ? n === `hover`
          ? r.axisInteraction.hover.dataKey
          : r.axisInteraction.click.dataKey
        : n === `hover`
          ? r.itemInteraction.hover.dataKey
          : r.itemInteraction.click.dataKey;
    }
  },
  yM = Y([xj, fM, pM, mM], yj),
  bM = Y([Cv, wv, X, Vv, Kj, mM, yM, bj], vj),
  xM = Y([gM, bM], (e, t) => e.coordinate ?? t),
  SM = Y(Kj, _M, qA),
  CM = Y([yM, _M, SD, kO, SM, bj, fM], Oj),
  wM = Y([gM], (e) => ({ isActive: e.active, activeIndex: e.index })),
  TM = (e, t, n, r, i, a, o, s) => {
    if (e && t && r && i && a) {
      var c = bv(e.chartX, e.chartY, t, n, s);
      if (c) {
        var l = $_(Sv(c, t), o, a, r, i),
          u = xv(t, a, l, c);
        return { activeIndex: String(l), activeCoordinate: u };
      }
    }
  };
function EM() {
  return (
    (EM = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    EM.apply(null, arguments)
  );
}
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
function MM(e) {
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
  if (l === `ScatterChart`) ((p = u), (m = Cb));
  else if (l === `BarChart`) ((p = wb(o, u, i, a)), (m = Ox));
  else if (o === `radial`) {
    var { cx: h, cy: g, radius: _, startAngle: v, endAngle: y } = kx(u);
    ((p = {
      cx: h,
      cy: g,
      startAngle: v,
      endAngle: y,
      innerRadius: _,
      outerRadius: _,
    }),
      (m = Ix));
  } else ((p = { points: Lx(o, u, i) }), (m = fb));
  var b = typeof s == `object` && `className` in s ? s.className : void 0,
    x = OM(
      OM(OM(OM({ stroke: `#ccc`, pointerEvents: `none` }, i), p), Qu(s)),
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
function NM(e) {
  var t = uM(),
    n = by(),
    r = wy(),
    i = dM();
  return z.createElement(
    MM,
    EM({}, e, {
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
var PM = (0, z.createContext)(null),
  FM = () => (0, z.useContext)(PM),
  IM = e(
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
  LM = new IM(),
  RM = `recharts.syncEvent.tooltip`,
  zM = `recharts.syncEvent.brush`;
function BM(e, t) {
  if (t) {
    var n = Number.parseInt(t, 10);
    if (!Wf(n)) return e?.[n];
  }
}
var VM = Fg({
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
  HM = VM.reducer,
  { createEventEmitter: UM } = VM.actions;
function WM(e) {
  return e.tooltip.syncInteraction;
}
var GM = Fg({
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
    setChartData: KM,
    setDataStartEndIndexes: qM,
    setComputedData: JM,
  } = GM.actions,
  YM = GM.reducer,
  XM = [`x`, `y`];
function ZM(e, t) {
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
function QM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ZM(Object(n), !0).forEach(function (t) {
          $M(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ZM(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function $M(e, t, n) {
  return (
    (t = eN(t)) in e
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
function eN(e) {
  var t = tN(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function tN(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function nN(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = rN(e, t);
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
function rN(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var iN = () => {};
function aN() {
  var e = J(nO),
    t = J(iO),
    n = q(),
    r = J(rO),
    i = J(Kj),
    a = wy(),
    o = vy(),
    s = J((e) => e.rootProps.className);
  (0, z.useEffect)(() => {
    if (e == null) return iN;
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
              m = nN(d, XM),
              { x: h, y: g, width: _, height: v } = c.payload.sourceViewBox,
              y = QM(
                QM({}, m),
                {},
                {
                  x: o.x + (_ ? (f - h) / _ : 0) * o.width,
                  y: o.y + (v ? (p - g) / v : 0) * o.height,
                },
              );
            n(
              QM(
                QM({}, c),
                {},
                { payload: QM(QM({}, c.payload), {}, { coordinate: y }) },
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
              oj({
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
              oj({
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
      LM.on(RM, s),
      () => {
        LM.off(RM, s);
      }
    );
  }, [s, n, t, e, r, i, a, o]);
}
function oN() {
  var e = J(nO),
    t = J(iO),
    n = q();
  (0, z.useEffect)(() => {
    if (e == null) return iN;
    var r = (r, i, a) => {
      t !== a && e === r && n(qM(i));
    };
    return (
      LM.on(zM, r),
      () => {
        LM.off(zM, r);
      }
    );
  }, [n, t, e]);
}
function sN() {
  var e = q();
  ((0, z.useEffect)(() => {
    e(UM());
  }, [e]),
    aN(),
    oN());
}
function cN(e, t, n, r, i, a) {
  var o = J((n) => vM(n, e, t)),
    s = J(iO),
    c = J(nO),
    l = J(rO),
    u = J(WM)?.active,
    d = vy();
  (0, z.useEffect)(() => {
    if (!u && c != null && s != null) {
      var e = oj({
        active: a,
        coordinate: n,
        dataKey: o,
        index: i,
        label: typeof r == `number` ? String(r) : r,
        sourceViewBox: d,
      });
      LM.emit(RM, c, e, s);
    }
  }, [u, n, o, i, r, s, c, l, a, d]);
}
function lN(e, t) {
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
function uN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? lN(Object(n), !0).forEach(function (t) {
          dN(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : lN(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function dN(e, t, n) {
  return (
    (t = fN(t)) in e
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
function fN(e) {
  var t = pN(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function pN(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function mN(e) {
  return e.dataKey;
}
function hN(e, t) {
  return z.isValidElement(e)
    ? z.cloneElement(e, t)
    : typeof e == `function`
      ? z.createElement(e, t)
      : z.createElement(zy, t);
}
var gN = [],
  _N = {
    allowEscapeViewBox: { x: !1, y: !1 },
    animationDuration: 400,
    animationEasing: `ease`,
    axisId: 0,
    contentStyle: {},
    cursor: !0,
    filterNull: !0,
    isAnimationActive: !Qy.isSsr,
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
function vN(e) {
  var t = Ab(e, _N),
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
    x($A({ shared: g, trigger: _, axisId: b, active: n, defaultIndex: S }));
  }, [x, g, _, b, n, S]);
  var C = vy(),
    w = $y(),
    T = KA(g),
    { activeIndex: E, isActive: D } = J((e) => wM(e, T, _, S)),
    O = J((e) => CM(e, T, _, S)),
    k = J((e) => SM(e, T, _, S)),
    A = J((e) => xM(e, T, _, S)),
    ee = O,
    j = FM(),
    M = n ?? D,
    [te, ne] = Dm([ee, M]),
    re = T === `axis` ? k : void 0;
  cN(T, _, A, re, E, M);
  var ie = y ?? j;
  if (ie == null) return null;
  var ae = ee ?? gN;
  (M || (ae = gN),
    s &&
      ae.length &&
      (ae = qp(
        ee.filter((e) => e.value != null && (e.hide !== !0 || t.includeHidden)),
        u,
        mN,
      )));
  var oe = ae.length > 0,
    se = z.createElement(
      Zy,
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
      hN(
        o,
        uN(
          uN({}, t),
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
    (0, to.createPortal)(se, ie),
    M &&
      z.createElement(NM, {
        cursor: h,
        tooltipEventType: T,
        coordinate: A,
        payload: ee,
        index: E,
      }),
  );
}
var yN = (e) => null;
yN.displayName = `Cell`;
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
var CN = class {
  constructor(e) {
    (bN(this, `cache`, new Map()), (this.maxSize = e));
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
function wN(e, t) {
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
function TN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? wN(Object(n), !0).forEach(function (t) {
          EN(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : wN(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function EN(e, t, n) {
  return (
    (t = DN(t)) in e
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
function DN(e) {
  var t = ON(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ON(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var kN = TN({}, { cacheSize: 2e3, enableCache: !0 }),
  AN = new CN(kN.cacheSize),
  jN = {
    position: `absolute`,
    top: `-20000px`,
    left: 0,
    padding: 0,
    margin: 0,
    border: `none`,
    whiteSpace: `pre`,
  },
  MN = `recharts_measurement_span`;
function NN(e, t) {
  return `${e}|${t.fontSize || ``}|${t.fontFamily || ``}|${t.fontWeight || ``}|${t.fontStyle || ``}|${t.letterSpacing || ``}|${t.textTransform || ``}`;
}
var PN = (e, t) => {
    try {
      var n = document.getElementById(MN);
      (n ||
        ((n = document.createElement(`span`)),
        n.setAttribute(`id`, MN),
        n.setAttribute(`aria-hidden`, `true`),
        document.body.appendChild(n)),
        Object.assign(n.style, jN, t),
        (n.textContent = `${e}`));
      var r = n.getBoundingClientRect();
      return { width: r.width, height: r.height };
    } catch {
      return { width: 0, height: 0 };
    }
  },
  FN = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (e == null || Qy.isSsr) return { width: 0, height: 0 };
    var n = kN.measureText || PN;
    if (!kN.enableCache) return n(e, t);
    var r = NN(e, t),
      i = AN.get(r);
    if (i) return i;
    var a = n(e, t);
    return (AN.set(r, a), a);
  },
  IN = (e) => {
    var t = TN(TN({}, kN), e);
    (t.cacheSize !== kN.cacheSize && (AN = new CN(t.cacheSize)), (kN = t));
  },
  LN = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  RN = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  zN = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  BN = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  VN = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 16,
    in: 96,
    Q: 96 / 101.6,
    px: 1,
  },
  HN = Object.keys(VN),
  UN = `NaN`;
function WN(e, t) {
  return e * VN[t];
}
var GN = class e {
  static parse(t) {
    var [, n, r] = BN.exec(t) ?? [];
    return new e(parseFloat(n), r ?? ``);
  }
  constructor(e, t) {
    ((this.num = e),
      (this.unit = t),
      (this.num = e),
      (this.unit = t),
      Wf(e) && (this.unit = ``),
      t !== `` && !zN.test(t) && ((this.num = NaN), (this.unit = ``)),
      HN.includes(t) && ((this.num = WN(e, t)), (this.unit = `px`)));
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
    return Wf(this.num);
  }
};
function KN(e) {
  if (e.includes(UN)) return UN;
  for (var t = e; t.includes(`*`) || t.includes(`/`);) {
    var [, n, r, i] = LN.exec(t) ?? [],
      a = GN.parse(n ?? ``),
      o = GN.parse(i ?? ``),
      s = r === `*` ? a.multiply(o) : a.divide(o);
    if (s.isNaN()) return UN;
    t = t.replace(LN, s.toString());
  }
  for (; t.includes(`+`) || /.-\d+(?:\.\d+)?/.test(t);) {
    var [, c, l, u] = RN.exec(t) ?? [],
      d = GN.parse(c ?? ``),
      f = GN.parse(u ?? ``),
      p = l === `+` ? d.add(f) : d.subtract(f);
    if (p.isNaN()) return UN;
    t = t.replace(RN, p.toString());
  }
  return t;
}
var qN = /\(([^()]*)\)/;
function JN(e) {
  for (var t = e, n; (n = qN.exec(t)) != null;) {
    var [, r] = n;
    t = t.replace(qN, KN(r));
  }
  return t;
}
function YN(e) {
  var t = e.replace(/\s+/g, ``);
  return ((t = JN(t)), (t = KN(t)), t);
}
function XN(e) {
  try {
    return YN(e);
  } catch {
    return UN;
  }
}
function ZN(e) {
  var t = XN(e.slice(5, -1));
  return t === UN ? `` : t;
}
var QN = [
    `x`,
    `y`,
    `lineHeight`,
    `capHeight`,
    `scaleToFit`,
    `textAnchor`,
    `verticalAnchor`,
    `fill`,
  ],
  $N = [`dx`, `dy`, `angle`, `className`, `breakAll`];
function eP() {
  return (
    (eP = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    eP.apply(null, arguments)
  );
}
function tP(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = nP(e, t);
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
function nP(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var rP = /[ \f\n\r\t\v\u2028\u2029]+/,
  iP = (e) => {
    var { children: t, breakAll: n, style: r } = e;
    try {
      var i = [];
      return (
        $f(t) || (i = n ? t.toString().split(``) : t.toString().split(rP)),
        {
          wordsWithComputedWidth: i.map((e) => ({
            word: e,
            width: FN(e, r).width,
          })),
          spaceWidth: n ? 0 : FN(`\xA0`, r).width,
        }
      );
    } catch {
      return null;
    }
  },
  aP = (e, t, n, r, i) => {
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
          var t = iP({
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
  oP = (e) => [{ words: $f(e) ? [] : e.toString().split(rP) }],
  sP = (e) => {
    var {
      width: t,
      scaleToFit: n,
      children: r,
      style: i,
      breakAll: a,
      maxLines: o,
    } = e;
    if ((t || n) && !Qy.isSsr) {
      var s,
        c,
        l = iP({ breakAll: a, children: r, style: i });
      if (l) {
        var { wordsWithComputedWidth: u, spaceWidth: d } = l;
        ((s = u), (c = d));
      } else return oP(r);
      return aP(
        { breakAll: a, children: r, maxLines: o, style: i },
        s,
        c,
        t,
        n,
      );
    }
    return oP(r);
  },
  cP = `#808080`,
  lP = (0, z.forwardRef)((e, t) => {
    var {
        x: n = 0,
        y: r = 0,
        lineHeight: i = `1em`,
        capHeight: a = `0.71em`,
        scaleToFit: o = !1,
        textAnchor: s = `start`,
        verticalAnchor: c = `end`,
        fill: l = cP,
      } = e,
      u = tP(e, QN),
      d = (0, z.useMemo)(
        () =>
          sP({
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
      _ = tP(u, $N);
    if (!Kf(n) || !Kf(r) || d.length === 0) return null;
    var v = n + (K(f) ? f : 0),
      y = r + (K(p) ? p : 0),
      b;
    switch (c) {
      case `start`:
        b = ZN(`calc(${a})`);
        break;
      case `middle`:
        b = ZN(`calc(${(d.length - 1) / 2} * -${i} + (${a} / 2))`);
        break;
      default:
        b = ZN(`calc(${d.length - 1} * -${i})`);
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
        eP({}, $u(_), {
          ref: t,
          x: v,
          y,
          className: W(`recharts-text`, h),
          textAnchor: s,
          fill: l.includes(`url`) ? cP : l,
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
lP.displayName = `Text`;
var uP = [`labelRef`];
function dP(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = fP(e, t);
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
function fP(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function pP(e, t) {
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
function mP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? pP(Object(n), !0).forEach(function (t) {
          hP(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : pP(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function hP(e, t, n) {
  return (
    (t = gP(t)) in e
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
function gP(e) {
  var t = _P(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function _P(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function vP() {
  return (
    (vP = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vP.apply(null, arguments)
  );
}
var yP = (0, z.createContext)(null),
  bP = (e) => {
    var { x: t, y: n, width: r, height: i, children: a } = e,
      o = (0, z.useMemo)(
        () => ({ x: t, y: n, width: r, height: i }),
        [t, n, r, i],
      );
    return z.createElement(yP.Provider, { value: o }, a);
  },
  xP = () => {
    var e = (0, z.useContext)(yP),
      t = vy();
    return e || t;
  },
  SP = (0, z.createContext)(null),
  CP = () => {
    var e = (0, z.useContext)(SP),
      t = J(SO);
    return e || t;
  },
  wP = (e) => {
    var { value: t, formatter: n } = e,
      r = $f(e.children) ? t : e.children;
    return typeof n == `function` ? n(r) : r;
  },
  TP = (e) => e != null && typeof e == `function`,
  EP = (e, t) => Uf(t - e) * Math.min(Math.abs(t - e), 360),
  DP = (e, t, n, r, i) => {
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
      h = EP(d, f),
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
    var y = R_(s, c, m, _),
      b = R_(s, c, m, _ + (v ? 1 : -1) * 359),
      x = `M${y.x},${y.y}
    A${m},${m},0,1,${+!v},
    ${b.x},${b.y}`,
      S = $f(e.id) ? Jf(`recharts-radial-line-`) : e.id;
    return z.createElement(
      `text`,
      vP({}, r, {
        dominantBaseline: `central`,
        className: W(`recharts-radial-bar-label`, o),
      }),
      z.createElement(`defs`, null, z.createElement(`path`, { id: S, d: x })),
      z.createElement(`textPath`, { xlinkHref: `#${S}` }, n),
    );
  },
  OP = (e, t, n) => {
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
      var { x: u, y: d } = R_(r, i, o + t, l);
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
    var { x: f, y: p } = R_(r, i, (a + o) / 2, l);
    return { x: f, y: p, textAnchor: `middle`, verticalAnchor: `middle` };
  },
  kP = (e) => `cx` in e && K(e.cx),
  AP = (e, t) => {
    var { parentViewBox: n, offset: r, position: i } = e,
      a;
    n != null && !kP(n) && (a = n);
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
      return mP(
        mP(
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
      return mP(
        mP(
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
      return mP(
        mP({}, v),
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
      return mP(
        mP({}, y),
        a ? { width: Math.max(a.x + a.width - y.x, 0), height: l } : {},
      );
    }
    var b = a ? { width: c, height: l } : {};
    return i === `insideLeft`
      ? mP(
          { x: o + h, y: s + l / 2, textAnchor: _, verticalAnchor: `middle` },
          b,
        )
      : i === `insideRight`
        ? mP(
            {
              x: o + c - h,
              y: s + l / 2,
              textAnchor: g,
              verticalAnchor: `middle`,
            },
            b,
          )
        : i === `insideTop`
          ? mP(
              {
                x: o + c / 2,
                y: s + d,
                textAnchor: `middle`,
                verticalAnchor: p,
              },
              b,
            )
          : i === `insideBottom`
            ? mP(
                {
                  x: o + c / 2,
                  y: s + l - d,
                  textAnchor: `middle`,
                  verticalAnchor: f,
                },
                b,
              )
            : i === `insideTopLeft`
              ? mP({ x: o + h, y: s + d, textAnchor: _, verticalAnchor: p }, b)
              : i === `insideTopRight`
                ? mP(
                    {
                      x: o + c - h,
                      y: s + d,
                      textAnchor: g,
                      verticalAnchor: p,
                    },
                    b,
                  )
                : i === `insideBottomLeft`
                  ? mP(
                      {
                        x: o + h,
                        y: s + l - d,
                        textAnchor: _,
                        verticalAnchor: f,
                      },
                      b,
                    )
                  : i === `insideBottomRight`
                    ? mP(
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
                        (K(i.x) || Gf(i.x)) &&
                        (K(i.y) || Gf(i.y))
                      ? mP(
                          {
                            x: o + Yf(i.x, c),
                            y: s + Yf(i.y, l),
                            textAnchor: `end`,
                            verticalAnchor: `end`,
                          },
                          b,
                        )
                      : mP(
                          {
                            x: o + c / 2,
                            y: s + l / 2,
                            textAnchor: `middle`,
                            verticalAnchor: `middle`,
                          },
                          b,
                        );
  },
  jP = { offset: 5 };
function MP(e) {
  var t = Ab(e, jP),
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
    u = CP(),
    d = xP(),
    f = n || (r === `center` ? d : (u ?? d));
  if (
    !f ||
    ($f(i) && $f(a) && !(0, z.isValidElement)(o) && typeof o != `function`)
  )
    return null;
  var p = mP(mP({}, t), {}, { viewBox: f });
  if ((0, z.isValidElement)(o)) {
    var { labelRef: m } = p,
      h = dP(p, uP);
    return (0, z.cloneElement)(o, h);
  }
  var g;
  if (typeof o == `function`) {
    if (((g = (0, z.createElement)(o, p)), (0, z.isValidElement)(g))) return g;
  } else g = wP(t);
  var _ = kP(f),
    v = $u(t);
  if (_ && (r === `insideStart` || r === `insideEnd` || r === `end`))
    return DP(t, r, g, v, f);
  var y = _ ? OP(f, t.offset, t.position) : AP(t, f);
  return z.createElement(
    lP,
    vP({ ref: l, className: W(`recharts-label`, s) }, v, y, { breakAll: c }),
    g,
  );
}
MP.displayName = `Label`;
var NP = (e, t, n) => {
  if (!e) return null;
  var r = { viewBox: t, labelRef: n };
  return e === !0
    ? z.createElement(MP, vP({ key: `label-implicit` }, r))
    : Kf(e)
      ? z.createElement(MP, vP({ key: `label-implicit`, value: e }, r))
      : (0, z.isValidElement)(e)
        ? e.type === MP
          ? (0, z.cloneElement)(e, mP({ key: `label-implicit` }, r))
          : z.createElement(MP, vP({ key: `label-implicit`, content: e }, r))
        : TP(e)
          ? z.createElement(MP, vP({ key: `label-implicit`, content: e }, r))
          : e && typeof e == `object`
            ? z.createElement(MP, vP({}, e, { key: `label-implicit` }, r))
            : null;
};
function PP(e) {
  var { label: t, labelRef: n } = e;
  return NP(t, xP(), n) || null;
}
var FP = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return e[e.length - 1];
    }
    e.last = t;
  }),
  IP = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    function t(e) {
      return Array.isArray(e) ? e : Array.from(e);
    }
    e.toArray = t;
  }),
  LP = n((e) => {
    Object.defineProperty(e, Symbol.toStringTag, { value: `Module` });
    var t = FP(),
      n = IP(),
      r = Sp();
    function i(e) {
      if (r.isArrayLike(e)) return t.last(n.toArray(e));
    }
    e.last = i;
  }),
  RP = n((e, t) => {
    t.exports = LP().last;
  }),
  zP = e(RP()),
  BP = [`valueAccessor`],
  VP = [`dataKey`, `clockWise`, `id`, `textBreakAll`];
function HP() {
  return (
    (HP = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    HP.apply(null, arguments)
  );
}
function UP(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = WP(e, t);
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
function WP(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var GP = (e) => (Array.isArray(e.value) ? (0, zP.default)(e.value) : e.value),
  KP = (0, z.createContext)(void 0),
  qP = KP.Provider,
  JP = (0, z.createContext)(void 0),
  YP = JP.Provider;
function XP() {
  return (0, z.useContext)(KP);
}
function ZP() {
  return (0, z.useContext)(JP);
}
function QP(e) {
  var { valueAccessor: t = GP } = e,
    n = UP(e, BP),
    { dataKey: r, clockWise: i, id: a, textBreakAll: o } = n,
    s = UP(n, VP),
    c = XP(),
    l = ZP(),
    u = c || l;
  return !u || !u.length
    ? null
    : z.createElement(
        ud,
        { className: `recharts-label-list` },
        u.map((e, i) => {
          var c = $f(r) ? t(e, i) : Q_(e && e.payload, r),
            l = $f(a) ? {} : { id: `${a}-${i}` };
          return z.createElement(
            MP,
            HP({ key: `label-${i}` }, $u(e), s, l, {
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
QP.displayName = `LabelList`;
function $P(e) {
  var { label: t } = e;
  return t
    ? t === !0
      ? z.createElement(QP, { key: `labelList-implicit` })
      : z.isValidElement(t) || TP(t)
        ? z.createElement(QP, { key: `labelList-implicit`, content: t })
        : typeof t == `object`
          ? z.createElement(
              QP,
              HP({ key: `labelList-implicit` }, t, { type: String(t.type) }),
            )
          : null
    : null;
}
var eF = Fg({
    name: `polarAxis`,
    initialState: { radiusAxis: {}, angleAxis: {} },
    reducers: {
      addRadiusAxis(e, t) {
        e.radiusAxis[t.payload.id] = Lh(t.payload);
      },
      removeRadiusAxis(e, t) {
        delete e.radiusAxis[t.payload.id];
      },
      addAngleAxis(e, t) {
        e.angleAxis[t.payload.id] = Lh(t.payload);
      },
      removeAngleAxis(e, t) {
        delete e.angleAxis[t.payload.id];
      },
    },
  }),
  {
    addRadiusAxis: tF,
    removeRadiusAxis: nF,
    addAngleAxis: rF,
    removeAngleAxis: iF,
  } = eF.actions,
  aF = eF.reducer,
  oF = n((e) => {
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
  sF = n((e, t) => {
    t.exports = oF();
  })(),
  cF = (e) =>
    typeof e == `string` ? e : e ? e.displayName || e.name || `Component` : ``,
  lF = null,
  uF = null,
  dF = (e) => {
    if (e === lF && Array.isArray(uF)) return uF;
    var t = [];
    return (
      z.Children.forEach(e, (e) => {
        $f(e) ||
          ((0, sF.isFragment)(e)
            ? (t = t.concat(dF(e.props.children)))
            : t.push(e));
      }),
      (uF = t),
      (lF = e),
      t
    );
  };
function fF(e, t) {
  var n = [],
    r = [];
  return (
    (r = Array.isArray(t) ? t.map((e) => cF(e)) : [cF(t)]),
    dF(e).forEach((e) => {
      var t =
        (0, Hf.default)(e, `type.displayName`) ||
        (0, Hf.default)(e, `type.name`);
      r.indexOf(t) !== -1 && n.push(e);
    }),
    n
  );
}
var pF = n((e) => {
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
  mF = n((e, t) => {
    t.exports = pF().isPlainObject;
  });
function hF(e, t) {
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
function gF(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? hF(Object(n), !0).forEach(function (t) {
          _F(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : hF(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function _F(e, t, n) {
  return (
    (t = vF(t)) in e
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
function vF(e) {
  var t = yF(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function yF(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function bF() {
  return (
    (bF = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bF.apply(null, arguments)
  );
}
var xF = (e, t, n, r, i) => {
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
  SF = {
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
  CF = (e) => {
    var t = Ab(e, SF),
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
      b = hx(e, `trapezoid-`);
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
          bF({}, $u(t), { className: x, d: xF(n, r, i, a, o) }),
        ),
      );
    var S = h.current,
      C = g.current,
      w = _.current,
      T = v.current,
      E = y.current,
      D = `0px ${p === -1 ? 1 : p}px`,
      O = `${p}px 0px`,
      k = zb([`strokeDasharray`], l, c);
    return z.createElement(
      mx,
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
        var s = Zf(S, i, e),
          c = Zf(C, a, e),
          l = Zf(w, o, e),
          u = Zf(T, n, e),
          d = Zf(E, r, e);
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
          bF({}, $u(t), {
            className: x,
            d: xF(u, d, s, c, l),
            ref: f,
            style: gF(gF({}, p), t.style),
          }),
        );
      },
    );
  },
  wF = e(mF()),
  TF = [
    `option`,
    `shapeType`,
    `propTransformer`,
    `activeClassName`,
    `isActive`,
  ];
function EF(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = DF(e, t);
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
function DF(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function OF(e, t) {
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
function kF(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? OF(Object(n), !0).forEach(function (t) {
          AF(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : OF(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function AF(e, t, n) {
  return (
    (t = jF(t)) in e
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
function jF(e) {
  var t = MF(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function MF(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function NF(e, t) {
  return kF(kF({}, t), e);
}
function PF(e, t) {
  return e === `symbols`;
}
function FF(e) {
  var { shapeType: t, elementProps: n } = e;
  switch (t) {
    case `rectangle`:
      return z.createElement(Ox, n);
    case `trapezoid`:
      return z.createElement(CF, n);
    case `sector`:
      return z.createElement(Ix, n);
    case `symbols`:
      if (PF(t, n)) return z.createElement(hp, n);
      break;
    default:
      return null;
  }
}
function IF(e) {
  return (0, z.isValidElement)(e) ? e.props : e;
}
function LF(e) {
  var {
      option: t,
      shapeType: n,
      propTransformer: r = NF,
      activeClassName: i = `recharts-active-shape`,
      isActive: a,
    } = e,
    o = EF(e, TF),
    s;
  if ((0, z.isValidElement)(t))
    s = (0, z.cloneElement)(t, kF(kF({}, o), IF(t)));
  else if (typeof t == `function`) s = t(o);
  else if ((0, wF.default)(t) && typeof t != `boolean`) {
    var c = r(t, o);
    s = z.createElement(FF, { shapeType: n, elementProps: c });
  } else {
    var l = o;
    s = z.createElement(FF, { shapeType: n, elementProps: l });
  }
  return a ? z.createElement(ud, { className: i }, s) : s;
}
var RF = (e, t) => {
    var n = q();
    return (r, i) => (a) => {
      (e?.(r, i, a),
        n(
          ej({
            activeIndex: String(i),
            activeDataKey: t,
            activeCoordinate: r.tooltipPosition,
          }),
        ));
    };
  },
  zF = (e) => {
    var t = q();
    return (n, r) => (i) => {
      (e?.(n, r, i), t(tj()));
    };
  },
  BF = (e, t) => {
    var n = q();
    return (r, i) => (a) => {
      (e?.(r, i, a),
        n(
          rj({
            activeIndex: String(i),
            activeDataKey: t,
            activeCoordinate: r.tooltipPosition,
          }),
        ));
    };
  };
function VF(e) {
  var { fn: t, args: n } = e,
    r = q(),
    i = Gv();
  return (
    (0, z.useLayoutEffect)(() => {
      if (!i) {
        var e = t(n);
        return (
          r(ZA(e)),
          () => {
            r(QA(e));
          }
        );
      }
    }, [t, n, r, i]),
    null
  );
}
var HF = () => {};
function UF(e) {
  var { legendPayload: t } = e,
    n = q(),
    r = Gv();
  return (
    (0, z.useLayoutEffect)(
      () =>
        r
          ? HF
          : (n(ky(t)),
            () => {
              n(Ay(t));
            }),
      [n, r, t],
    ),
    null
  );
}
function WF(e) {
  var { legendPayload: t } = e,
    n = q(),
    r = J(X);
  return (
    (0, z.useLayoutEffect)(
      () =>
        r !== `centric` && r !== `radial`
          ? HF
          : (n(ky(t)),
            () => {
              n(Ay(t));
            }),
      [n, r, t],
    ),
    null
  );
}
var GF =
  z.useId ??
  (() => {
    var [e] = z.useState(() => Jf(`uid-`));
    return e;
  });
function KF(e, t) {
  var n = GF();
  return t || (e ? `${e}-${n}` : n);
}
var qF = (0, z.createContext)(void 0),
  JF = (e) => {
    var { id: t, type: n, children: r } = e,
      i = KF(`recharts-${n}`, t);
    return z.createElement(qF.Provider, { value: i }, r(i));
  },
  YF = Fg({
    name: `graphicalItems`,
    initialState: { cartesianItems: [], polarItems: [] },
    reducers: {
      addCartesianGraphicalItem: {
        reducer(e, t) {
          e.cartesianItems.push(Lh(t.payload));
        },
        prepare: dg(),
      },
      replaceCartesianGraphicalItem: {
        reducer(e, t) {
          var { prev: n, next: r } = t.payload,
            i = Mh(e).cartesianItems.indexOf(Lh(n));
          i > -1 && (e.cartesianItems[i] = Lh(r));
        },
        prepare: dg(),
      },
      removeCartesianGraphicalItem: {
        reducer(e, t) {
          var n = Mh(e).cartesianItems.indexOf(Lh(t.payload));
          n > -1 && e.cartesianItems.splice(n, 1);
        },
        prepare: dg(),
      },
      addPolarGraphicalItem: {
        reducer(e, t) {
          e.polarItems.push(Lh(t.payload));
        },
        prepare: dg(),
      },
      removePolarGraphicalItem: {
        reducer(e, t) {
          var n = Mh(e).polarItems.indexOf(Lh(t.payload));
          n > -1 && e.polarItems.splice(n, 1);
        },
        prepare: dg(),
      },
    },
  }),
  {
    addCartesianGraphicalItem: XF,
    replaceCartesianGraphicalItem: ZF,
    removeCartesianGraphicalItem: QF,
    addPolarGraphicalItem: $F,
    removePolarGraphicalItem: eI,
  } = YF.actions,
  tI = YF.reducer;
function nI(e) {
  var t = q(),
    n = (0, z.useRef)(null);
  return (
    (0, z.useLayoutEffect)(() => {
      (n.current === null
        ? t(XF(e))
        : n.current !== e && t(ZF({ prev: n.current, next: e })),
        (n.current = e));
    }, [t, e]),
    (0, z.useLayoutEffect)(
      () => () => {
        n.current &&= (t(QF(n.current)), null);
      },
      [t],
    ),
    null
  );
}
function rI(e) {
  var t = q();
  return (
    (0, z.useLayoutEffect)(
      () => (
        t($F(e)),
        () => {
          t(eI(e));
        }
      ),
      [t, e],
    ),
    null
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
var lI = Fg({
    name: `cartesianAxis`,
    initialState: { xAxis: {}, yAxis: {}, zAxis: {} },
    reducers: {
      addXAxis: {
        reducer(e, t) {
          e.xAxis[t.payload.id] = Lh(t.payload);
        },
        prepare: dg(),
      },
      removeXAxis: {
        reducer(e, t) {
          delete e.xAxis[t.payload.id];
        },
        prepare: dg(),
      },
      addYAxis: {
        reducer(e, t) {
          e.yAxis[t.payload.id] = Lh(t.payload);
        },
        prepare: dg(),
      },
      removeYAxis: {
        reducer(e, t) {
          delete e.yAxis[t.payload.id];
        },
        prepare: dg(),
      },
      addZAxis: {
        reducer(e, t) {
          e.zAxis[t.payload.id] = Lh(t.payload);
        },
        prepare: dg(),
      },
      removeZAxis: {
        reducer(e, t) {
          delete e.zAxis[t.payload.id];
        },
        prepare: dg(),
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
          e.yAxis[n] = aI(
            aI({}, e.yAxis[n]),
            {},
            { width: r, widthHistory: o },
          );
        }
      },
    },
  }),
  {
    addXAxis: uI,
    removeXAxis: dI,
    addYAxis: fI,
    removeYAxis: pI,
    addZAxis: mI,
    removeZAxis: hI,
    updateYAxisWidth: gI,
  } = lI.actions,
  _I = lI.reducer,
  vI = Y(
    [
      Y([Vv], (e) => {
        if (e)
          return { top: e.top, bottom: e.bottom, left: e.left, right: e.right };
      }),
      Cv,
      wv,
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
  yI = () => J(vI),
  bI = () => J(rM),
  xI = [`x`, `y`];
function SI() {
  return (
    (SI = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    SI.apply(null, arguments)
  );
}
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
function OI(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = kI(e, t);
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
function kI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function AI(e, t) {
  var { x: n, y: r } = e,
    i = OI(e, xI),
    a = `${n}`,
    o = parseInt(a, 10),
    s = `${r}`,
    c = parseInt(s, 10),
    l = `${t.height || i.height}`,
    u = parseInt(l, 10),
    d = `${t.width || i.width}`,
    f = parseInt(d, 10);
  return wI(
    wI(wI(wI(wI({}, t), i), o ? { x: o } : {}), c ? { y: c } : {}),
    {},
    { height: u, width: f, name: t.name, radius: t.radius },
  );
}
function jI(e) {
  return z.createElement(
    LF,
    SI(
      {
        shapeType: `rectangle`,
        propTransformer: AI,
        activeClassName: `recharts-active-bar`,
      },
      e,
    ),
  );
}
var MI = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (n, r) => {
      if (K(e)) return e;
      var i = K(n) || $f(n);
      return i ? e(n, r) : (!i && o(!1), t);
    };
  },
  NI = Fg({
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
  { addErrorBar: PI, replaceErrorBar: FI, removeErrorBar: II } = NI.actions,
  LI = NI.reducer,
  RI = [`children`];
function zI(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = BI(e, t);
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
function BI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var VI = (0, z.createContext)({
  data: [],
  xAxisId: `xAxis-0`,
  yAxisId: `yAxis-0`,
  dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }),
  errorBarOffset: 0,
});
function HI(e) {
  var { children: t } = e,
    n = zI(e, RI);
  return z.createElement(VI.Provider, { value: n }, t);
}
function UI(e, t) {
  var n = J((t) => HO(t, e)),
    r = J((e) => GO(e, t)),
    i = n?.allowDataOverflow ?? BO.allowDataOverflow,
    a = r?.allowDataOverflow ?? UO.allowDataOverflow;
  return { needClip: i || a, needClipX: i, needClipY: a };
}
function WI(e) {
  var { xAxisId: t, yAxisId: n, clipPathId: r } = e,
    i = yI(),
    { needClipX: a, needClipY: o, needClip: s } = UI(t, n);
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
var GI = [`onMouseEnter`, `onMouseLeave`, `onClick`],
  KI = [`value`, `background`, `tooltipPosition`],
  qI = [`id`],
  JI = [`onMouseEnter`, `onClick`, `onMouseLeave`];
function YI() {
  return (
    (YI = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    YI.apply(null, arguments)
  );
}
function XI(e, t) {
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
function ZI(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? XI(Object(n), !0).forEach(function (t) {
          QI(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : XI(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function QI(e, t, n) {
  return (
    (t = $I(t)) in e
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
function $I(e) {
  var t = eL(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function eL(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function tL(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = nL(e, t);
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
function nL(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var rL = (e) => {
  var { dataKey: t, name: n, fill: r, legendType: i, hide: a } = e;
  return [
    { inactive: a, dataKey: t, type: i, color: r, value: yv(n, t), payload: e },
  ];
};
function iL(e) {
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
      name: yv(a, t),
      hide: o,
      type: e.tooltipType,
      color: e.fill,
      unit: s,
    },
  };
}
function aL(e) {
  var t = J(Zj),
    { data: n, dataKey: r, background: i, allOtherBarProps: a } = e,
    { onMouseEnter: o, onMouseLeave: s, onClick: c } = a,
    l = tL(a, GI),
    u = RF(o, r),
    d = zF(s),
    f = BF(c, r);
  if (!i || n == null) return null;
  var p = Qu(i);
  return z.createElement(
    z.Fragment,
    null,
    n.map((e, n) => {
      var { value: a, background: o, tooltipPosition: s } = e,
        c = tL(e, KI);
      if (!o) return null;
      var m = u(e, n),
        h = d(e, n),
        g = f(e, n),
        _ = ZI(
          ZI(
            ZI(
              ZI(
                ZI({ option: i, isActive: String(n) === t }, c),
                {},
                { fill: `#eee` },
                o,
              ),
              p,
            ),
            vp(l, e, n),
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
      return z.createElement(jI, YI({ key: `background-bar-${n}` }, _));
    }),
  );
}
function oL(e) {
  var { showLabels: t, children: n, rects: r } = e,
    i = r?.map((e) => {
      var t = { x: e.x, y: e.y, width: e.width, height: e.height };
      return ZI(
        ZI({}, t),
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
  return z.createElement(qP, { value: t ? i : void 0 }, n);
}
function sL(e) {
  var {
      shape: t,
      activeBar: n,
      baseProps: r,
      entry: i,
      index: a,
      dataKey: o,
    } = e,
    s = J(Zj),
    c = J($j),
    l = n && String(a) === s && (c == null || o === c),
    u = l ? n : t;
  return z.createElement(
    jI,
    YI({}, r, { name: String(r.name) }, i, {
      isActive: l,
      option: u,
      index: a,
      dataKey: o,
    }),
  );
}
function cL(e) {
  var { shape: t, baseProps: n, entry: r, index: i, dataKey: a } = e;
  return z.createElement(
    jI,
    YI({}, n, { name: String(n.name) }, r, {
      isActive: !1,
      option: t,
      index: i,
      dataKey: a,
    }),
  );
}
function lL(e) {
  var { data: t, props: n } = e,
    r = Zu(n),
    { id: i } = r,
    a = tL(r, qI),
    { shape: o, dataKey: s, activeBar: c } = n,
    { onMouseEnter: l, onClick: u, onMouseLeave: d } = n,
    f = tL(n, JI),
    p = RF(l, s),
    m = zF(d),
    h = BF(u, s);
  return t
    ? z.createElement(
        z.Fragment,
        null,
        t.map((e, t) =>
          z.createElement(
            ud,
            YI(
              {
                key: `rectangle-${e?.x}-${e?.y}-${e?.value}-${t}`,
                className: `recharts-bar-rectangle`,
              },
              vp(f, e, t),
              {
                onMouseEnter: p(e, t),
                onMouseLeave: m(e, t),
                onClick: h(e, t),
              },
            ),
            c
              ? z.createElement(sL, {
                  shape: o,
                  activeBar: c,
                  baseProps: a,
                  entry: e,
                  index: t,
                  dataKey: s,
                })
              : z.createElement(cL, {
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
function uL(e) {
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
    f = hx(t, `recharts-bar-`),
    [p, m] = (0, z.useState)(!1),
    h = !p,
    g = (0, z.useCallback)(() => {
      (typeof l == `function` && l(), m(!1));
    }, [l]),
    _ = (0, z.useCallback)(() => {
      (typeof u == `function` && u(), m(!0));
    }, [u]);
  return z.createElement(
    oL,
    { showLabels: h, rects: r },
    z.createElement(
      mx,
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
                  return ZI(
                    ZI({}, t),
                    {},
                    {
                      x: Zf(r.x, t.x, e),
                      y: Zf(r.y, t.y, e),
                      width: Zf(r.width, t.width, e),
                      height: Zf(r.height, t.height, e),
                    },
                  );
                if (i === `horizontal`) {
                  var a = Zf(0, t.height, e);
                  return ZI(
                    ZI({}, t),
                    {},
                    { y: t.y + t.height - a, height: a },
                  );
                }
                var o = Zf(0, t.width, e);
                return ZI(ZI({}, t), {}, { width: o });
              });
        return (
          e > 0 && (n.current = a ?? null),
          a == null
            ? null
            : z.createElement(
                ud,
                null,
                z.createElement(lL, { props: t, data: a }),
              )
        );
      },
    ),
    z.createElement($P, { label: t.label }),
    t.children,
  );
}
function dL(e) {
  var t = (0, z.useRef)(null);
  return z.createElement(uL, { previousRectanglesRef: t, props: e });
}
var fL = 0,
  pL = (e, t) => {
    var n = Array.isArray(e.value) ? e.value[1] : e.value;
    return { x: e.x, y: e.y, value: n, errorVal: Q_(e, t) };
  },
  mL = class extends z.PureComponent {
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
        ud,
        { className: l, id: c },
        o &&
          z.createElement(
            `defs`,
            null,
            z.createElement(WI, { clipPathId: u, xAxisId: i, yAxisId: a }),
          ),
        z.createElement(
          ud,
          {
            className: `recharts-bar-rectangles`,
            clipPath: o ? `url(#clipPath-${u})` : void 0,
          },
          z.createElement(aL, {
            data: t,
            dataKey: n,
            background: s,
            allOtherBarProps: this.props,
          }),
          z.createElement(dL, this.props),
        ),
      );
    }
  },
  hL = {
    activeBar: !1,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: `ease`,
    hide: !1,
    isAnimationActive: !Qy.isSsr,
    legendType: `rect`,
    minPointSize: fL,
    xAxisId: 0,
    yAxisId: 0,
  };
function gL(e) {
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
    { needClip: d } = UI(t, n),
    f = wy(),
    p = Gv(),
    m = fF(e.children, yN),
    h = J((r) => RL(r, t, n, p, e.id, m));
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
      HI,
      {
        xAxisId: t,
        yAxisId: n,
        data: h,
        dataPointFormatter: pL,
        errorBarOffset: g,
      },
      z.createElement(
        mL,
        YI({}, e, {
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
function _L(e) {
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
    _ = dv({ numericAxis: h });
  return d
    .map((e, d) => {
      var h, v, y, b, x, S;
      u
        ? (h = ov(u[d], g))
        : ((h = Q_(e, n)), Array.isArray(h) || (h = [_, h]));
      var C = MI(r, fL)(h[1], d);
      if (t === `horizontal`) {
        var [w, T] = [s.scale(h[0]), s.scale(h[1])];
        ((v = uv({
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
          ((x = Wf(E) ? 0 : E),
          (S = { x: v, y: f.top, width: b, height: f.height }),
          Math.abs(C) > 0 && Math.abs(x) < Math.abs(C))
        ) {
          var D = Uf(x || C) * (Math.abs(C) - Math.abs(x));
          ((y -= D), (x += D));
        }
      } else {
        var [O, k] = [o.scale(h[0]), o.scale(h[1])];
        if (
          ((v = O),
          (y = uv({
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
          var A = Uf(b || C) * (Math.abs(C) - Math.abs(b));
          b += A;
        }
      }
      return v == null || y == null || b == null || x == null
        ? null
        : ZI(
            ZI({}, e),
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
function vL(e) {
  var t = Ab(e, hL),
    n = Gv();
  return z.createElement(JF, { id: t.id, type: `bar` }, (e) =>
    z.createElement(
      z.Fragment,
      null,
      z.createElement(UF, { legendPayload: rL(t) }),
      z.createElement(VF, { fn: iL, args: t }),
      z.createElement(nI, {
        type: `bar`,
        id: e,
        data: void 0,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        dataKey: t.dataKey,
        stackId: lv(t.stackId),
        hide: t.hide,
        barSize: t.barSize,
        minPointSize: t.minPointSize,
        maxBarSize: t.maxBarSize,
        isPanorama: n,
      }),
      z.createElement(gL, YI({}, t, { id: e })),
    ),
  );
}
var yL = z.memo(vL);
yL.displayName = `Bar`;
function bL(e, t) {
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
function xL(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? bL(Object(n), !0).forEach(function (t) {
          SL(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : bL(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function SL(e, t, n) {
  return (
    (t = CL(t)) in e
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
function CL(e) {
  var t = wL(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function wL(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var TL = (e, t) => t,
  EL = (e, t, n) => n,
  DL = (e, t, n, r) => r,
  OL = Y([$O, (e, t, n, r, i) => i], (e, t) =>
    e.filter((e) => e.type === `bar`).find((e) => e.id === t),
  ),
  kL = Y([OL], (e) => e?.maxBarSize),
  AL = (e, t, n, r, i, a) => a,
  jL = (e, t, n) => {
    var r = n ?? e;
    if (!$f(r)) return Yf(r, t, 0);
  },
  ML = Y([X, $O, TL, EL, DL], (e, t, n, r, i) =>
    t
      .filter((t) => (e === `horizontal` ? t.xAxisId === n : t.yAxisId === r))
      .filter((e) => e.isPanorama === i)
      .filter((e) => e.hide === !1)
      .filter((e) => e.type === `bar`),
  ),
  NL = (e, t, n, r) =>
    X(e) === `horizontal` ? yk(e, `yAxis`, n, r) : yk(e, `xAxis`, t, r),
  PL = Y(
    [
      ML,
      $D,
      (e, t, n) =>
        X(e) === `horizontal` ? AA(e, `xAxis`, t) : AA(e, `yAxis`, n),
    ],
    (e, t, n) => {
      var r = {},
        i = e.filter(jO),
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
            barSize: jL(t, n, i[0].barSize),
          };
        }),
        c = a.map((e) => ({
          stackId: void 0,
          dataKeys: [e.dataKey].filter((e) => e != null),
          barSize: jL(t, n, e.barSize),
        }));
      return [...s, ...c];
    },
  ),
  FL = (e, t, n, r, i) => {
    var a = OL(e, t, n, r, i);
    if (a != null) {
      var o = X(e),
        s = XD(e),
        { maxBarSize: c } = a,
        l = $f(c) ? s : c,
        u,
        d;
      return (
        o === `horizontal`
          ? ((u = BA(e, `xAxis`, t, r)), (d = zA(e, `xAxis`, t, r)))
          : ((u = BA(e, `yAxis`, n, r)), (d = zA(e, `yAxis`, n, r))),
        _v(u, d, !0) ?? l ?? 0
      );
    }
  },
  IL = (e, t, n, r) => {
    var i = X(e),
      a,
      o;
    return (
      i === `horizontal`
        ? ((a = BA(e, `xAxis`, t, r)), (o = zA(e, `xAxis`, t, r)))
        : ((a = BA(e, `yAxis`, n, r)), (o = zA(e, `yAxis`, n, r))),
      _v(a, o)
    );
  };
function LL(e, t, n, r, i) {
  var a = r.length;
  if (!(a < 1)) {
    var o = Yf(e, n, 0, !0),
      s,
      c = [];
    if (ay(r[0].barSize)) {
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
      var p = Yf(t, n, 0, !0);
      n - 2 * p - (a - 1) * o <= 0 && (o = 0);
      var m = (n - 2 * p - (a - 1) * o) / a;
      m > 1 && (m >>= 0);
      var h = ay(i) ? Math.min(m, i) : m;
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
var RL = Y(
    [
      Vv,
      Uv,
      (e, t, n, r) => BA(e, `xAxis`, t, r),
      (e, t, n, r) => BA(e, `yAxis`, n, r),
      (e, t, n, r) => zA(e, `xAxis`, t, r),
      (e, t, n, r) => zA(e, `yAxis`, n, r),
      Y(
        [
          Y([PL, XD, ZD, QD, FL, IL, kL], (e, t, n, r, i, a, o) => {
            var s = $f(o) ? t : o,
              c = LL(n, r, i === a ? a : i, e, s);
            return (
              i !== a &&
                c != null &&
                (c = c.map((e) =>
                  xL(
                    xL({}, e),
                    {},
                    {
                      position: xL(
                        xL({}, e.position),
                        {},
                        { offset: e.position.offset - i / 2 },
                      ),
                    },
                  ),
                )),
              c
            );
          }),
          OL,
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
      wD,
      IL,
      Y([NL, OL], (e, t) => {
        var n = TO(t);
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
      OL,
      AL,
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
          return _L({
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
  zL = (e) => {
    var { chartData: t } = e,
      n = q(),
      r = Gv();
    return (
      (0, z.useEffect)(
        () =>
          r
            ? () => {}
            : (n(KM(t)),
              () => {
                n(KM(void 0));
              }),
        [t, n, r],
      ),
      null
    );
  },
  BL = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
  VL = Fg({
    name: `brush`,
    initialState: BL,
    reducers: {
      setBrushSettings(e, t) {
        return t.payload == null ? BL : t.payload;
      },
    },
  }),
  { setBrushSettings: HL } = VL.actions,
  UL = VL.reducer;
function WL(e, t, n) {
  return (
    (t = GL(t)) in e
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
function GL(e) {
  var t = KL(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function KL(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
WL(
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
function qL(e) {
  return ((e % 180) + 180) % 180;
}
var JL = function (e) {
    var { width: t, height: n } = e,
      r =
        (qL(
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        ) *
          Math.PI) /
        180,
      i = Math.atan(n / t),
      a = r > i && r < Math.PI - i ? n / Math.sin(r) : t / Math.cos(r);
    return Math.abs(a);
  },
  YL = Fg({
    name: `referenceElements`,
    initialState: { dots: [], areas: [], lines: [] },
    reducers: {
      addDot: (e, t) => {
        e.dots.push(t.payload);
      },
      removeDot: (e, t) => {
        var n = Mh(e).dots.findIndex((e) => e === t.payload);
        n !== -1 && e.dots.splice(n, 1);
      },
      addArea: (e, t) => {
        e.areas.push(t.payload);
      },
      removeArea: (e, t) => {
        var n = Mh(e).areas.findIndex((e) => e === t.payload);
        n !== -1 && e.areas.splice(n, 1);
      },
      addLine: (e, t) => {
        e.lines.push(t.payload);
      },
      removeLine: (e, t) => {
        var n = Mh(e).lines.findIndex((e) => e === t.payload);
        n !== -1 && e.lines.splice(n, 1);
      },
    },
  }),
  {
    addDot: XL,
    removeDot: ZL,
    addArea: QL,
    removeArea: $L,
    addLine: eR,
    removeLine: tR,
  } = YL.actions,
  nR = YL.reducer,
  rR = (0, z.createContext)(void 0),
  iR = (e) => {
    var { children: t } = e,
      [n] = (0, z.useState)(`${Jf(`recharts`)}-clip`),
      r = yI();
    if (r == null) return null;
    var { x: i, y: a, width: o, height: s } = r;
    return z.createElement(
      rR.Provider,
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
function aR(e, t) {
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
function oR(e, t, n) {
  if (t < 1) return [];
  if (t === 1 && n === void 0) return e;
  for (var r = [], i = 0; i < e.length; i += t)
    if (n === void 0 || n(e[i]) === !0) r.push(e[i]);
    else return;
  return r;
}
function sR(e, t, n) {
  return JL({ width: e.width + t.width, height: e.height + t.height }, n);
}
function cR(e, t, n) {
  var r = n === `width`,
    { x: i, y: a, width: o, height: s } = e;
  return t === 1
    ? { start: r ? i : a, end: r ? i + o : a + s }
    : { start: r ? i + o : a + s, end: r ? i : a };
}
function lR(e, t, n, r, i) {
  if (e * t < e * r || e * t > e * i) return !1;
  var a = n();
  return e * (t - (e * a) / 2 - r) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
}
function uR(e, t) {
  return oR(e, t + 1);
}
function dR(e, t, n, r, i) {
  for (
    var a = (r || []).slice(),
      { start: o, end: s } = t,
      c = 0,
      l = 1,
      u = o,
      d = function () {
        var t = r?.[c];
        if (t === void 0) return { v: oR(r, l) };
        var a = c,
          d,
          f = () => (d === void 0 && (d = n(t, a)), d),
          p = t.coordinate,
          m = c === 0 || lR(e, p, f, u, s);
        (m || ((c = 0), (u = o), (l += 1)),
          m && ((u = p + e * (f() / 2 + i)), (c += l)));
      },
      f;
    l <= a.length;
  )
    if (((f = d()), f)) return f.v;
  return [];
}
function fR(e, t) {
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
function pR(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? fR(Object(n), !0).forEach(function (t) {
          mR(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : fR(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function mR(e, t, n) {
  return (
    (t = hR(t)) in e
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
function hR(e) {
  var t = gR(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function gR(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function _R(e, t, n, r, i) {
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
          a[t] = r = pR(
            pR({}, r),
            {},
            { tickCoord: d > 0 ? r.coordinate - d * e : r.coordinate },
          );
        } else a[t] = r = pR(pR({}, r), {}, { tickCoord: r.coordinate });
        lR(e, r.tickCoord, u, s, c) &&
          ((c = r.tickCoord - e * (u() / 2 + i)),
          (a[t] = pR(pR({}, r), {}, { isShow: !0 })));
      },
      u = o - 1;
    u >= 0;
    u--
  )
    l(u);
  return a;
}
function vR(e, t, n, r, i, a) {
  var o = (r || []).slice(),
    s = o.length,
    { start: c, end: l } = t;
  if (a) {
    var u = r[s - 1],
      d = n(u, s - 1),
      f = e * (u.coordinate + (e * d) / 2 - l);
    ((o[s - 1] = u =
      pR(
        pR({}, u),
        {},
        { tickCoord: f > 0 ? u.coordinate - f * e : u.coordinate },
      )),
      lR(e, u.tickCoord, () => d, c, l) &&
        ((l = u.tickCoord - e * (d / 2 + i)),
        (o[s - 1] = pR(pR({}, u), {}, { isShow: !0 }))));
  }
  for (
    var p = a ? s - 1 : s,
      m = function (t) {
        var r = o[t],
          a,
          s = () => (a === void 0 && (a = n(r, t)), a);
        if (t === 0) {
          var u = e * (r.coordinate - (e * s()) / 2 - c);
          o[t] = r = pR(
            pR({}, r),
            {},
            { tickCoord: u < 0 ? r.coordinate - u * e : r.coordinate },
          );
        } else o[t] = r = pR(pR({}, r), {}, { tickCoord: r.coordinate });
        lR(e, r.tickCoord, s, c, l) &&
          ((c = r.tickCoord + e * (s() / 2 + i)),
          (o[t] = pR(pR({}, r), {}, { isShow: !0 })));
      },
      h = 0;
    h < p;
    h++
  )
    m(h);
  return o;
}
function yR(e, t, n) {
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
  if (K(c) || Qy.isSsr) return uR(i, K(c) ? c : 0) ?? [];
  var f = [],
    p = s === `top` || s === `bottom` ? `width` : `height`,
    m =
      u && p === `width`
        ? FN(u, { fontSize: t, letterSpacing: n })
        : { width: 0, height: 0 },
    h = (e, r) => {
      var i = typeof l == `function` ? l(e.value, r) : e.value;
      return p === `width`
        ? sR(FN(i, { fontSize: t, letterSpacing: n }), m, d)
        : FN(i, { fontSize: t, letterSpacing: n })[p];
    },
    g = i.length >= 2 ? Uf(i[1].coordinate - i[0].coordinate) : 1,
    _ = cR(a, g, p);
  return c === `equidistantPreserveStart`
    ? dR(g, _, h, i, o)
    : ((f =
        c === `preserveStart` || c === `preserveStartEnd`
          ? vR(g, _, h, i, o, c === `preserveStartEnd`)
          : _R(g, _, h, i, o)),
      f.filter((e) => e.isShow));
}
var bR = (e) => {
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
  xR = [`axisLine`, `width`, `height`, `className`, `hide`, `ticks`],
  SR = [`viewBox`],
  CR = [`viewBox`];
function wR(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = TR(e, t);
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
function TR(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function ER() {
  return (
    (ER = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ER.apply(null, arguments)
  );
}
function DR(e, t) {
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
function OR(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? DR(Object(n), !0).forEach(function (t) {
          kR(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : DR(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function kR(e, t, n) {
  return (
    (t = AR(t)) in e
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
function AR(e) {
  var t = jR(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function jR(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var MR = {
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
function NR(e) {
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
  var l = OR(OR(OR({}, c), Zu(s)), {}, { fill: `none` });
  if (a === `top` || a === `bottom`) {
    var u = +((a === `top` && !o) || (a === `bottom` && o));
    l = OR(OR({}, l), {}, { x1: t, y1: n + u * i, x2: t + r, y2: n + u * i });
  } else {
    var d = +((a === `left` && !o) || (a === `right` && o));
    l = OR(OR({}, l), {}, { x1: t + d * r, y1: n, x2: t + d * r, y2: n + i });
  }
  return z.createElement(
    `line`,
    ER({}, l, {
      className: W(
        `recharts-cartesian-axis-line`,
        (0, Hf.default)(s, `className`),
      ),
    }),
  );
}
function PR(e, t, n, r, i, a, o, s, c) {
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
function FR(e, t) {
  switch (e) {
    case `left`:
      return t ? `start` : `end`;
    case `right`:
      return t ? `end` : `start`;
    default:
      return `middle`;
  }
}
function IR(e, t) {
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
function LR(e) {
  var { option: t, tickProps: n, value: r } = e,
    i,
    a = W(n.className, `recharts-cartesian-axis-tick-value`);
  if (z.isValidElement(t))
    i = z.cloneElement(t, OR(OR({}, n), {}, { className: a }));
  else if (typeof t == `function`) i = t(OR(OR({}, n), {}, { className: a }));
  else {
    var o = `recharts-cartesian-axis-tick-value`;
    (typeof t != `boolean` && (o = W(o, t?.className)),
      (i = z.createElement(lP, ER({}, n, { className: o }), r)));
  }
  return i;
}
function RR(e) {
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
    x = yR(OR(OR({}, y), {}, { ticks: t }), _, v),
    S = FR(l, u),
    C = IR(l, u),
    w = Zu(y),
    T = Qu(n),
    E = {};
  typeof r == `object` && (E = r);
  var D = OR(OR({}, w), {}, { fill: `none` }, E),
    O = x.map((e, t) => {
      var { line: _, tick: v } = PR(e, d, f, p, m, l, h, u, g),
        y = OR(
          OR(
            OR(
              OR({ textAnchor: S, verticalAnchor: C }, w),
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
        ud,
        ER(
          {
            className: `recharts-cartesian-axis-tick`,
            key: `tick-${e.value}-${e.coordinate}-${e.tickCoord}`,
          },
          vp(b, e, t),
        ),
        r &&
          z.createElement(
            `line`,
            ER({}, D, _, {
              className: W(
                `recharts-cartesian-axis-tick-line`,
                (0, Hf.default)(r, `className`),
              ),
            }),
          ),
        n &&
          z.createElement(LR, {
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
var zR = (0, z.forwardRef)((e, t) => {
    var {
        axisLine: n,
        width: r,
        height: i,
        className: a,
        hide: o,
        ticks: s,
      } = e,
      c = wR(e, xR),
      [l, u] = (0, z.useState)(``),
      [d, f] = (0, z.useState)(``),
      p = (0, z.useRef)(null);
    (0, z.useImperativeHandle)(t, () => ({
      getCalculatedWidth: () =>
        bR({
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
          ud,
          { className: W(`recharts-cartesian-axis`, a), ref: m },
          z.createElement(NR, {
            x: e.x,
            y: e.y,
            width: r,
            height: i,
            orientation: e.orientation,
            mirror: e.mirror,
            axisLine: n,
            otherSvgProps: Zu(e),
          }),
          z.createElement(RR, {
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
            bP,
            { x: e.x, y: e.y, width: e.width, height: e.height },
            z.createElement(PP, { label: e.label, labelRef: e.labelRef }),
            e.children,
          ),
        );
  }),
  BR = z.memo(zR, (e, t) => {
    var { viewBox: n } = e,
      r = wR(e, SR),
      { viewBox: i } = t,
      a = wR(t, CR);
    return aR(n, i) && aR(r, a);
  }),
  VR = z.forwardRef((e, t) => {
    var n = Ab(e, MR);
    return z.createElement(BR, ER({}, n, { ref: t }));
  });
VR.displayName = `CartesianAxis`;
var HR = [`x1`, `y1`, `x2`, `y2`, `key`],
  UR = [`offset`],
  WR = [`xAxisId`, `yAxisId`],
  GR = [`xAxisId`, `yAxisId`];
function KR(e, t) {
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
function qR(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? KR(Object(n), !0).forEach(function (t) {
          JR(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : KR(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function JR(e, t, n) {
  return (
    (t = YR(t)) in e
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
function YR(e) {
  var t = XR(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function XR(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function ZR() {
  return (
    (ZR = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ZR.apply(null, arguments)
  );
}
function QR(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = $R(e, t);
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
function $R(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var ez = (e) => {
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
function tz(e, t) {
  var n;
  if (z.isValidElement(e)) n = z.cloneElement(e, t);
  else if (typeof e == `function`) n = e(t);
  else {
    var { x1: r, y1: i, x2: a, y2: o, key: s } = t,
      c = Zu(QR(t, HR)),
      { offset: l } = c,
      u = QR(c, UR);
    n = z.createElement(
      `line`,
      ZR({}, u, { x1: r, y1: i, x2: a, y2: o, fill: `none`, key: s }),
    );
  }
  return n;
}
function nz(e) {
  var { x: t, width: n, horizontal: r = !0, horizontalPoints: i } = e;
  if (!r || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e,
    s = QR(e, WR),
    c = i.map((e, i) =>
      tz(
        r,
        qR(
          qR({}, s),
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
function rz(e) {
  var { y: t, height: n, vertical: r = !0, verticalPoints: i } = e;
  if (!r || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e,
    s = QR(e, GR),
    c = i.map((e, i) =>
      tz(
        r,
        qR(
          qR({}, s),
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
function iz(e) {
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
function az(e) {
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
var oz = (e, t) => {
    var { xAxis: n, width: r, height: i, offset: a } = e;
    return nv(
      yR(
        qR(
          qR(qR({}, MR), n),
          {},
          { ticks: rv(n, !0), viewBox: { x: 0, y: 0, width: r, height: i } },
        ),
      ),
      a.left,
      a.left + a.width,
      t,
    );
  },
  sz = (e, t) => {
    var { yAxis: n, width: r, height: i, offset: a } = e;
    return nv(
      yR(
        qR(
          qR(qR({}, MR), n),
          {},
          { ticks: rv(n, !0), viewBox: { x: 0, y: 0, width: r, height: i } },
        ),
      ),
      a.top,
      a.top + a.height,
      t,
    );
  },
  cz = {
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
function lz(e) {
  var t = xy(),
    n = Sy(),
    r = by(),
    i = qR(
      qR({}, Ab(e, cz)),
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
    m = Gv(),
    h = J((e) => FA(e, `xAxis`, a, m)),
    g = J((e) => FA(e, `yAxis`, o, m));
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
  var _ = i.verticalCoordinatesGenerator || oz,
    v = i.horizontalCoordinatesGenerator || sz,
    { horizontalPoints: y, verticalPoints: b } = i;
  if ((!y || !y.length) && typeof v == `function`) {
    var x = f && f.length,
      S = v(
        {
          yAxis: g ? qR(qR({}, g), {}, { ticks: x ? f : g.ticks }) : void 0,
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
          xAxis: h ? qR(qR({}, h), {}, { ticks: C ? p : h.ticks }) : void 0,
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
    z.createElement(ez, {
      fill: i.fill,
      fillOpacity: i.fillOpacity,
      x: i.x,
      y: i.y,
      width: i.width,
      height: i.height,
      ry: i.ry,
    }),
    z.createElement(iz, ZR({}, i, { horizontalPoints: y })),
    z.createElement(az, ZR({}, i, { verticalPoints: b })),
    z.createElement(
      nz,
      ZR({}, i, { offset: r, horizontalPoints: y, xAxis: h, yAxis: g }),
    ),
    z.createElement(
      rz,
      ZR({}, i, { offset: r, verticalPoints: b, xAxis: h, yAxis: g }),
    ),
  );
}
lz.displayName = `CartesianGrid`;
var uz = [`dangerouslySetInnerHTML`, `ticks`],
  dz = [`id`],
  fz = [`domain`],
  pz = [`domain`];
function mz() {
  return (
    (mz = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    mz.apply(null, arguments)
  );
}
function hz(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = gz(e, t);
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
function gz(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function _z(e) {
  var t = q();
  return (
    (0, z.useLayoutEffect)(
      () => (
        t(uI(e)),
        () => {
          t(dI(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var vz = (e) => {
    var { xAxisId: t, className: n } = e,
      r = J(Uv),
      i = Gv(),
      a = `xAxis`,
      o = J((e) => mA(e, a, t, i)),
      s = J((e) => LA(e, a, t, i)),
      c = J((e) => SA(e, t)),
      l = J((e) => DA(e, t)),
      u = J((e) => VO(e, t));
    if (c == null || l == null || u == null) return null;
    var { dangerouslySetInnerHTML: d, ticks: f } = e,
      p = hz(e, uz),
      { id: m } = u,
      h = hz(u, dz);
    return z.createElement(
      VR,
      mz({}, p, h, {
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
  yz = {
    allowDataOverflow: BO.allowDataOverflow,
    allowDecimals: BO.allowDecimals,
    allowDuplicatedCategory: BO.allowDuplicatedCategory,
    height: BO.height,
    hide: !1,
    mirror: BO.mirror,
    orientation: BO.orientation,
    padding: BO.padding,
    reversed: BO.reversed,
    scale: BO.scale,
    tickCount: BO.tickCount,
    type: BO.type,
    xAxisId: 0,
  },
  bz = z.memo(
    (e) => {
      var t = Ab(e, yz);
      return z.createElement(
        z.Fragment,
        null,
        z.createElement(_z, {
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
        z.createElement(vz, t),
      );
    },
    (e, t) => {
      var { domain: n } = e,
        r = hz(e, fz),
        { domain: i } = t;
      return aR(r, hz(t, pz))
        ? Array.isArray(n) &&
          n.length === 2 &&
          Array.isArray(i) &&
          i.length === 2
          ? n[0] === i[0] && n[1] === i[1]
          : aR({ domain: n }, { domain: i })
        : !1;
    },
  );
bz.displayName = `XAxis`;
var xz = [`dangerouslySetInnerHTML`, `ticks`],
  Sz = [`id`],
  Cz = [`domain`],
  wz = [`domain`];
function Tz() {
  return (
    (Tz = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Tz.apply(null, arguments)
  );
}
function Ez(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Dz(e, t);
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
function Dz(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Oz(e) {
  var t = q();
  return (
    (0, z.useLayoutEffect)(
      () => (
        t(fI(e)),
        () => {
          t(pI(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var kz = (e) => {
    var { yAxisId: t, className: n, width: r, label: i } = e,
      a = (0, z.useRef)(null),
      o = (0, z.useRef)(null),
      s = J(Uv),
      c = Gv(),
      l = q(),
      u = `yAxis`,
      d = J((e) => mA(e, u, t, c)),
      f = J((e) => kA(e, t)),
      p = J((e) => OA(e, t)),
      m = J((e) => LA(e, u, t, c)),
      h = J((e) => WO(e, t));
    if (
      ((0, z.useLayoutEffect)(() => {
        if (
          !(
            r !== `auto` ||
            !f ||
            TP(i) ||
            (0, z.isValidElement)(i) ||
            h == null
          )
        ) {
          var e = a.current;
          if (e) {
            var n = e.getCalculatedWidth();
            Math.round(f.width) !== Math.round(n) && l(gI({ id: t, width: n }));
          }
        }
      }, [m, f, l, i, t, r, h]),
      f == null || p == null || h == null)
    )
      return null;
    var { dangerouslySetInnerHTML: g, ticks: _ } = e,
      v = Ez(e, xz),
      { id: y } = h,
      b = Ez(h, Sz);
    return z.createElement(
      VR,
      Tz({}, v, b, {
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
  Az = {
    allowDataOverflow: UO.allowDataOverflow,
    allowDecimals: UO.allowDecimals,
    allowDuplicatedCategory: UO.allowDuplicatedCategory,
    hide: !1,
    mirror: UO.mirror,
    orientation: UO.orientation,
    padding: UO.padding,
    reversed: UO.reversed,
    scale: UO.scale,
    tickCount: UO.tickCount,
    type: UO.type,
    width: UO.width,
    yAxisId: 0,
  },
  jz = z.memo(
    (e) => {
      var t = Ab(e, Az);
      return z.createElement(
        z.Fragment,
        null,
        z.createElement(Oz, {
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
        z.createElement(kz, t),
      );
    },
    (e, t) => {
      var { domain: n } = e,
        r = Ez(e, Cz),
        { domain: i } = t;
      return aR(r, Ez(t, wz))
        ? Array.isArray(n) &&
          n.length === 2 &&
          Array.isArray(i) &&
          i.length === 2
          ? n[0] === i[0] && n[1] === i[1]
          : aR({ domain: n }, { domain: i })
        : !1;
    },
  );
jz.displayName = `YAxis`;
var Mz = n((e) => {
  var t = i();
  (t.useSyncExternalStore, t.useRef, t.useEffect, t.useMemo, t.useDebugValue);
});
n((e, t) => {
  t.exports = Mz();
})();
function Nz(e) {
  e();
}
function Pz() {
  let e = null,
    t = null;
  return {
    clear() {
      ((e = null), (t = null));
    },
    notify() {
      Nz(() => {
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
var Fz = { notify() {}, get: () => [] };
function Iz(e, t) {
  let n,
    r = Fz,
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
    (i++, n || ((n = t ? t.addNestedSub(c) : e.subscribe(c)), (r = Pz())));
  }
  function d() {
    (i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = Fz)));
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
var Lz =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0,
  Rz = typeof navigator < `u` && navigator.product === `ReactNative`,
  zz = Lz || Rz ? z.useLayoutEffect : z.useEffect,
  Bz = Symbol.for(`react-redux-context`),
  Vz = typeof globalThis < `u` ? globalThis : {};
function Hz() {
  if (!z.createContext) return {};
  let e = (Vz[Bz] ??= new Map()),
    t = e.get(z.createContext);
  return (t || ((t = z.createContext(null)), e.set(z.createContext, t)), t);
}
var Uz = Hz();
function Wz(e) {
  let { children: t, context: n, serverState: r, store: i } = e,
    a = z.useMemo(() => {
      let e = Iz(i);
      return {
        store: i,
        subscription: e,
        getServerState: r ? () => r : void 0,
      };
    }, [i, r]),
    o = z.useMemo(() => i.getState(), [i]);
  zz(() => {
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
  let s = n || Uz;
  return z.createElement(s.Provider, { value: a }, t);
}
var Gz = Wz,
  Kz = Y([(e, t) => t, X, SO, EO, Wj, Kj, hM, Vv], TM),
  qz = (e) => {
    var t = e.currentTarget.getBoundingClientRect(),
      n = t.width / e.currentTarget.offsetWidth,
      r = t.height / e.currentTarget.offsetHeight;
    return {
      chartX: Math.round((e.clientX - t.left) / n),
      chartY: Math.round((e.clientY - t.top) / r),
    };
  },
  Jz = ig(`mouseClick`),
  Yz = S_();
Yz.startListening({
  actionCreator: Jz,
  effect: (e, t) => {
    var n = e.payload,
      r = Kz(t.getState(), qz(n));
    r?.activeIndex != null &&
      t.dispatch(
        aj({
          activeIndex: r.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: r.activeCoordinate,
        }),
      );
  },
});
var Xz = ig(`mouseMove`),
  Zz = S_();
Zz.startListening({
  actionCreator: Xz,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState(),
      i = GA(r, r.tooltip.settings.shared),
      a = Kz(r, qz(n));
    i === `axis` &&
      (a?.activeIndex == null
        ? t.dispatch(nj())
        : t.dispatch(
            ij({
              activeIndex: a.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: a.activeCoordinate,
            }),
          ));
  },
});
function Qz(e, t) {
  return t instanceof HTMLElement
    ? `HTMLElement <${t.tagName} class="${t.className}">`
    : t === window
      ? `global.window`
      : t;
}
var $z = {
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
  eB = Fg({
    name: `rootProps`,
    initialState: $z,
    reducers: {
      updateOptions: (e, t) => {
        ((e.accessibilityLayer = t.payload.accessibilityLayer),
          (e.barCategoryGap = t.payload.barCategoryGap),
          (e.barGap = t.payload.barGap ?? $z.barGap),
          (e.barSize = t.payload.barSize),
          (e.maxBarSize = t.payload.maxBarSize),
          (e.stackOffset = t.payload.stackOffset),
          (e.syncId = t.payload.syncId),
          (e.syncMethod = t.payload.syncMethod),
          (e.className = t.payload.className));
      },
    },
  }),
  tB = eB.reducer,
  { updateOptions: nB } = eB.actions,
  rB = Fg({
    name: `polarOptions`,
    initialState: null,
    reducers: { updatePolarOptions: (e, t) => t.payload },
  }),
  { updatePolarOptions: iB } = rB.actions,
  aB = rB.reducer,
  oB = ig(`keyDown`),
  sB = ig(`focus`),
  cB = S_();
(cB.startListening({
  actionCreator: oB,
  effect: (e, t) => {
    var n = t.getState();
    if (n.rootProps.accessibilityLayer !== !1) {
      var { keyboardInteraction: r } = n.tooltip,
        i = e.payload;
      if (i === `ArrowRight` || i === `ArrowLeft` || i === `Enter`) {
        var a = Number(_j(r, Mj(n))),
          o = Kj(n);
        if (i === `Enter`) {
          var s = bM(n, `axis`, `hover`, String(r.index));
          t.dispatch(
            sj({
              active: !r.active,
              activeIndex: r.index,
              activeDataKey: r.dataKey,
              activeCoordinate: s,
            }),
          );
        } else {
          var c = VA(n) === `left-to-right` ? 1 : -1,
            l = a + (i === `ArrowRight` ? 1 : -1) * c;
          if (!(o == null || l >= o.length || l < 0)) {
            var u = bM(n, `axis`, `hover`, String(l));
            t.dispatch(
              sj({
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
  cB.startListening({
    actionCreator: sB,
    effect: (e, t) => {
      var n = t.getState();
      if (n.rootProps.accessibilityLayer !== !1) {
        var { keyboardInteraction: r } = n.tooltip;
        if (!r.active && r.index == null) {
          var i = `0`,
            a = bM(n, `axis`, `hover`, String(i));
          t.dispatch(
            sj({
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
var lB = ig(`externalEvent`),
  uB = S_();
uB.startListening({
  actionCreator: lB,
  effect: (e, t) => {
    if (e.payload.handler != null) {
      var n = t.getState(),
        r = {
          activeCoordinate: tM(n),
          activeDataKey: $j(n),
          activeIndex: Zj(n),
          activeLabel: Qj(n),
          activeTooltipIndex: Zj(n),
          isTooltipActive: nM(n),
        };
      e.payload.handler(r, e.payload.reactEvent);
    }
  },
});
var dB = Y(
    [Y([xj], (e) => e.tooltipItemPayloads), bj, (e, t, n) => t, (e, t, n) => n],
    (e, t, n, r) => {
      var i = e.find((e) => e.settings.dataKey === r);
      if (i != null) {
        var { positions: a } = i;
        if (a != null) return t(a, n);
      }
    },
  ),
  fB = ig(`touchMove`),
  pB = S_();
pB.startListening({
  actionCreator: fB,
  effect: (e, t) => {
    var n = e.payload,
      r = t.getState(),
      i = GA(r, r.tooltip.settings.shared);
    if (i === `axis`) {
      var a = Kz(
        r,
        qz({
          clientX: n.touches[0].clientX,
          clientY: n.touches[0].clientY,
          currentTarget: n.currentTarget,
        }),
      );
      a?.activeIndex != null &&
        t.dispatch(
          ij({
            activeIndex: a.activeIndex,
            activeDataKey: void 0,
            activeCoordinate: a.activeCoordinate,
          }),
        );
    } else if (i === `item`) {
      var o = n.touches[0],
        s = document.elementFromPoint(o.clientX, o.clientY);
      if (!s || !s.getAttribute) return;
      var c = s.getAttribute(kv),
        l = s.getAttribute(`data-recharts-item-data-key`) ?? void 0,
        u = dB(t.getState(), c, l);
      t.dispatch(ej({ activeDataKey: l, activeIndex: c, activeCoordinate: u }));
    }
  },
});
var mB = Fm({
    brush: UL,
    cartesianAxis: _I,
    chartData: YM,
    errorBars: LI,
    graphicalItems: tI,
    layout: k_,
    legend: jy,
    options: HM,
    polarAxis: aF,
    polarOptions: aB,
    referenceElements: nR,
    rootProps: tB,
    tooltip: cj,
  }),
  hB = function (e) {
    var t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : `Chart`;
    return hg({
      reducer: mB,
      preloadedState: e,
      middleware: (e) =>
        e({ serializableCheck: !1 }).concat([
          Yz.middleware,
          Zz.middleware,
          cB.middleware,
          uB.middleware,
          pB.middleware,
        ]),
      enhancers: (e) => {
        var t = e;
        return (
          typeof e == `function` && (t = e()), t.concat(pg({ type: `raf` }))
        );
      },
      devTools: Qy.devToolsEnabled && {
        serialize: { replacer: Qz },
        name: `recharts-${t}`,
      },
    });
  };
function gB(e) {
  var { preloadedState: t, children: n, reduxStoreName: r } = e,
    i = Gv(),
    a = (0, z.useRef)(null);
  if (i) return n;
  a.current ??= hB(t, r);
  var o = Xp;
  return z.createElement(Gz, { context: o, store: a.current }, n);
}
function _B(e) {
  var { layout: t, margin: n } = e,
    r = q(),
    i = Gv();
  return (
    (0, z.useEffect)(() => {
      i || (r(E_(t)), r(T_(n)));
    }, [r, i, t, n]),
    null
  );
}
function vB(e) {
  var t = q();
  return (
    (0, z.useEffect)(() => {
      t(nB(e));
    }, [t, e]),
    null
  );
}
var yB = [`children`];
function bB(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = xB(e, t);
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
function xB(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function SB() {
  return (
    (SB = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    SB.apply(null, arguments)
  );
}
var CB = { width: `100%`, height: `100%`, display: `block` },
  wB = (0, z.forwardRef)((e, t) => {
    var n = xy(),
      r = Sy(),
      i = $y();
    if (!oy(n) || !oy(r)) return null;
    var { children: a, otherAttributes: o, title: s, desc: c } = e,
      l = typeof o.tabIndex == `number` ? o.tabIndex : i ? 0 : void 0,
      u = typeof o.role == `string` ? o.role : i ? `application` : void 0;
    return z.createElement(
      ad,
      SB({}, o, {
        title: s,
        desc: c,
        role: u,
        tabIndex: l,
        width: n,
        height: r,
        style: CB,
        ref: t,
      }),
      a,
    );
  }),
  TB = (e) => {
    var { children: t } = e,
      n = J(qv);
    if (!n) return null;
    var { width: r, height: i, y: a, x: o } = n;
    return z.createElement(ad, { width: r, height: i, x: o, y: a }, t);
  },
  EB = (0, z.forwardRef)((e, t) => {
    var { children: n } = e,
      r = bB(e, yB);
    return Gv()
      ? z.createElement(TB, null, n)
      : z.createElement(wB, SB({ ref: t }, r), n);
  });
function DB() {
  var e = q(),
    [t, n] = (0, z.useState)(null),
    r = J(Tv);
  return (
    (0, z.useEffect)(() => {
      if (t != null) {
        var n = t.getBoundingClientRect().width / t.offsetWidth;
        ay(n) && n !== r && e(O_(n));
      }
    }, [t, e, r]),
    n
  );
}
function OB(e, t) {
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
function kB(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? OB(Object(n), !0).forEach(function (t) {
          AB(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : OB(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function AB(e, t, n) {
  return (
    (t = jB(t)) in e
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
function jB(e) {
  var t = MB(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function MB(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function NB() {
  return (
    (NB = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    NB.apply(null, arguments)
  );
}
var PB = () => (sN(), null);
function FB(e) {
  if (typeof e == `number`) return e;
  if (typeof e == `string`) {
    var t = parseFloat(e);
    if (!Number.isNaN(t)) return t;
  }
  return 0;
}
var IB = (0, z.forwardRef)((e, t) => {
    var n = (0, z.useRef)(null),
      [r, i] = (0, z.useState)({
        containerWidth: FB(e.style?.width),
        containerHeight: FB(e.style?.height),
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
        z.createElement(Ty, {
          width: r.containerWidth,
          height: r.containerHeight,
        }),
        z.createElement(`div`, NB({ ref: o }, e)),
      )
    );
  }),
  LB = (0, z.forwardRef)((e, t) => {
    var { width: n, height: r } = e,
      [i, a] = (0, z.useState)({
        containerWidth: FB(n),
        containerHeight: FB(r),
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
      z.createElement(Ty, {
        width: i.containerWidth,
        height: i.containerHeight,
      }),
      z.createElement(`div`, NB({ ref: s }, e)),
    );
  }),
  RB = (0, z.forwardRef)((e, t) => {
    var { width: n, height: r } = e;
    return z.createElement(
      z.Fragment,
      null,
      z.createElement(Ty, { width: n, height: r }),
      z.createElement(`div`, NB({ ref: t }, e)),
    );
  }),
  zB = (0, z.forwardRef)((e, t) => {
    var { width: n, height: r } = e;
    return Gf(n) || Gf(r)
      ? z.createElement(LB, NB({}, e, { ref: t }))
      : z.createElement(RB, NB({}, e, { ref: t }));
  });
function BB(e) {
  return e === !0 ? IB : zB;
}
var VB = (0, z.forwardRef)((e, t) => {
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
      E = DB(),
      D = hy(),
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
          (x(Jz(e)), x(lB({ handler: a, reactEvent: e })));
        },
        [x, a],
      ),
      j = (0, z.useCallback)(
        (e) => {
          (x(Xz(e)), x(lB({ handler: l, reactEvent: e })));
        },
        [x, l],
      ),
      M = (0, z.useCallback)(
        (e) => {
          (x(nj()), x(lB({ handler: u, reactEvent: e })));
        },
        [x, u],
      ),
      te = (0, z.useCallback)(
        (e) => {
          (x(Xz(e)), x(lB({ handler: d, reactEvent: e })));
        },
        [x, d],
      ),
      ne = (0, z.useCallback)(() => {
        x(sB());
      }, [x]),
      re = (0, z.useCallback)(
        (e) => {
          x(oB(e.key));
        },
        [x],
      ),
      ie = (0, z.useCallback)(
        (e) => {
          x(lB({ handler: o, reactEvent: e }));
        },
        [x, o],
      ),
      ae = (0, z.useCallback)(
        (e) => {
          x(lB({ handler: s, reactEvent: e }));
        },
        [x, s],
      ),
      oe = (0, z.useCallback)(
        (e) => {
          x(lB({ handler: c, reactEvent: e }));
        },
        [x, c],
      ),
      se = (0, z.useCallback)(
        (e) => {
          x(lB({ handler: f, reactEvent: e }));
        },
        [x, f],
      ),
      ce = (0, z.useCallback)(
        (e) => {
          x(lB({ handler: h, reactEvent: e }));
        },
        [x, h],
      ),
      le = (0, z.useCallback)(
        (e) => {
          (y && x(fB(e)), x(lB({ handler: m, reactEvent: e })));
        },
        [x, y, m],
      ),
      ue = (0, z.useCallback)(
        (e) => {
          x(lB({ handler: p, reactEvent: e }));
        },
        [x, p],
      ),
      de = BB(v);
    return z.createElement(
      PM.Provider,
      { value: S },
      z.createElement(
        dd.Provider,
        { value: w },
        z.createElement(
          de,
          {
            width: O ?? g?.width,
            height: k ?? g?.height,
            className: W(`recharts-wrapper`, r),
            style: kB(
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
          z.createElement(PB, null),
          n,
        ),
      ),
    );
  }),
  HB = [
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
function UB(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = WB(e, t);
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
function WB(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var GB = (0, z.forwardRef)((e, t) => {
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
    d = Zu(UB(e, HB));
  return c
    ? z.createElement(
        z.Fragment,
        null,
        z.createElement(Ty, { width: n, height: r }),
        z.createElement(EB, { otherAttributes: d, title: l, desc: u }, a),
      )
    : z.createElement(
        VB,
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
          EB,
          { otherAttributes: d, title: l, desc: u, ref: t },
          z.createElement(iR, null, a),
        ),
      );
});
function KB() {
  return (
    (KB = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    KB.apply(null, arguments)
  );
}
var qB = {
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
  JB = (0, z.forwardRef)(function (e, t) {
    var n = Ab(e.categoricalChartProps, qB),
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
      gB,
      { preloadedState: { options: c }, reduxStoreName: s.id ?? r },
      z.createElement(zL, { chartData: s.data }),
      z.createElement(_B, { layout: n.layout, margin: n.margin }),
      z.createElement(vB, {
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
      z.createElement(GB, KB({}, n, { ref: t })),
    );
  }),
  YB = [`axis`, `item`],
  XB = (0, z.forwardRef)((e, t) =>
    z.createElement(JB, {
      chartName: `BarChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: YB,
      tooltipPayloadSearcher: BM,
      categoricalChartProps: e,
      ref: t,
    }),
  ),
  ZB = `nK2pFw6yu3o-`,
  QB = `nzXI4r-KhTY-`,
  $B = `iKEtAveWi-8-`,
  eV = `ZXpki9wJyL0-`,
  tV = 5;
function nV({ active: e, payload: t }) {
  if (!e || !t?.length) return null;
  let n = t[0].payload;
  return (0, R.jsx)(`div`, {
    className: eV,
    children: `${N.Localize(`#GamePerformanceStats_FPS`, n.framerate ?? 0)}: ${n.percentage ?? 0}%`,
  });
}
function rV(e) {
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
          n.push({ framerate: t * tV, percentage: Math.round(e) });
        }),
        n.sort((e, t) => e.framerate - t.framerate)
      );
    }, [t]);
  return a?.length
    ? (0, R.jsxs)(`div`, {
        className: F(ZB, n),
        children: [
          (0, R.jsx)(`div`, {
            className: QB,
            children: N.Localize(`#GamePerformanceStats_SessionLabel`),
          }),
          (0, R.jsx)(_y, {
            width: `100%`,
            minWidth: r,
            minHeight: i,
            children: (0, R.jsxs)(XB, {
              accessibilityLayer: !1,
              margin: { top: 35, left: 0, right: 0, bottom: 25 },
              data: a,
              children: [
                (0, R.jsx)(lz, {
                  stroke: `#888`,
                  strokeWidth: `0.5`,
                  vertical: !1,
                }),
                (0, R.jsx)(bz, {
                  dataKey: `framerate`,
                  stroke: `white`,
                  label: {
                    value: N.Localize(`#GamePerformanceStats_Framerate`),
                    position: `bottom`,
                    fill: `#A9A9A9`,
                    fontSize: 14,
                  },
                }),
                (0, R.jsx)(jz, {
                  stroke: `white`,
                  domain: [() => 0, (e) => Math.max(e, 100)],
                }),
                (0, R.jsx)(vN, {
                  content: nV,
                  cursor: !1,
                  isAnimationActive: !1,
                }),
                (0, R.jsx)(yL, {
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
    : (0, R.jsx)(`div`, {
        className: F(ZB, n),
        children: (0, R.jsx)(`div`, {
          className: $B,
          children: N.Localize(
            `#GamePerformanceStats_StillGatheringData_NoDevice`,
          ),
        }),
      });
}
function iV(e) {
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
      ((d.onOptionsActionDescription = N.Localize(
        `#SteamDeckVerified_ViewDeveloperPost`,
      )),
      (d.onOptionsButton = u),
      (f = (0, R.jsx)(dV, {
        blogURL: t.steam_deck_blog_url,
        eHWCompatibiltyDisplay: 1,
      })),
      (p = (0, R.jsx)(dV, {
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
      l = (0, R.jsx)(xV, { category: t.resolved_category });
    return (
      c == 3
        ? ((e = N.Localize(
            `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
          )),
          (s = (0, R.jsx)(TV, {
            id: r,
            category: t.machine_resolved_category,
            appName: i,
          })),
          (l = (0, R.jsx)(xV, { category: t.machine_resolved_category })))
        : c == 2
          ? ((e = N.Localize(
              `#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI`,
            )),
            (s = (0, R.jsx)(wV, {
              id: r,
              category: t.steamos_resolved_category,
              appName: i,
            })),
            (l = (0, R.jsx)(SV, { category: t.steamos_resolved_category })),
            (a = p))
          : c == 4
            ? ((e = N.Localize(
                `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
              )),
              (s = (0, R.jsx)(EV, {
                id: r,
                category: t.frame_resolved_category,
                appName: i,
              })),
              (l = (0, R.jsx)(xV, { category: t.frame_resolved_category })))
            : ((e = N.Localize(
                `#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI`,
              )),
              (s = (0, R.jsx)(CV, {
                category: t.resolved_category,
                appName: i,
              })),
              (a = f)),
      (0, R.jsx)(aV, {
        children: (0, R.jsxs)(In, {
          autoFocus: o,
          focusableIfEmpty: o,
          noFocusRing: !0,
          className: hl,
          ...d,
          children: [
            (0, R.jsxs)(`div`, {
              id: n,
              className: fl,
              children: [
                (0, R.jsx)(`div`, { className: pl, children: e }),
                (0, R.jsx)(`div`, { className: ml, children: l }),
              ],
            }),
            s,
            a,
            (0, R.jsx)(gV, { appid: t.appid, appName: i }),
          ],
        }),
      })
    );
  }
  let m = Ui(t.resolved_category),
    h = oa(t.steamos_resolved_category),
    g = Ui(t.machine_resolved_category),
    _ = Ui(t.frame_resolved_category || 0);
  if (!l) {
    let t = null;
    switch (c) {
      case 3:
        t = (0, R.jsx)(lV, { ...e });
        break;
      case 2:
      case 5:
        t = (0, R.jsx)(sV, { ...e, deckBlogContent: p });
        break;
      case 4:
        t = (0, R.jsx)(uV, { ...e });
        break;
      default:
        t = (0, R.jsx)(cV, { ...e, deckBlogContent: f });
    }
    return (0, R.jsx)(Hi, { children: (0, R.jsx)(aV, { children: t }) });
  }
  let v = (e) =>
      window.sessionStorage.setItem(`steamdeckcompatibility`, `?tab=${e.key}`),
    y = [
      {
        name: (0, R.jsxs)(`div`, {
          className: Ul,
          children: [
            (0, R.jsx)(It, { className: ql }),
            (0, R.jsx)(m, { className: Wl }),
          ],
        }),
        key: `1`,
        contents: (0, R.jsx)(Hi, {
          children: (0, R.jsx)(cV, { ...e, deckBlogContent: f }),
        }),
        onClick: v,
      },
      {
        name: (0, R.jsxs)(`div`, {
          className: Ul,
          children: [
            (0, R.jsx)(Vr, { className: Gl }),
            (0, R.jsx)(g, { className: Wl }),
          ],
        }),
        key: `3`,
        contents: (0, R.jsx)(Hi, { children: (0, R.jsx)(lV, { ...e }) }),
        onClick: v,
      },
      {
        name: (0, R.jsxs)(`div`, {
          className: Ul,
          children: [`steamos`, (0, R.jsx)(h, { className: Wl })],
        }),
        key: `2`,
        contents: (0, R.jsx)(Hi, {
          children: (0, R.jsx)(sV, { ...e, deckBlogContent: p }),
        }),
        onClick: v,
      },
      {
        name: (0, R.jsxs)(`div`, {
          className: Ul,
          children: [
            (0, R.jsx)(mn, { className: Kl }),
            (0, R.jsx)(_, { className: Wl }),
          ],
        }),
        key: `4`,
        contents: (0, R.jsx)(Hi, { children: (0, R.jsx)(uV, { ...e }) }),
        onClick: v,
      },
    ];
  return (0, R.jsx)(aV, {
    children: (0, R.jsx)(Lu, {
      tabs: y,
      classNameCtn: Vl,
      classNameTabContent: Bl,
      startingTab: c.toString(),
      preferredFocus: !0,
      bDisableRouting: !0,
      focusRingHasBorderRadius: !0,
    }),
  });
}
function aV(e) {
  let [t, n] = z.useState(!1),
    r = z.useRef(null),
    i = z.useCallback(() => {
      let e = r.current;
      e && n(e.scrollHeight > e.clientHeight);
    }, []),
    a = Ei(i);
  return (0, R.jsx)(wa, {
    ref: r,
    className: wl,
    children: (0, R.jsx)(In, {
      ref: a,
      className: Tl,
      focusableIfEmpty: t,
      noFocusRing: !0,
      children: e.children,
    }),
  });
}
function oV(e) {
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
  return (0, R.jsxs)(In, {
    className: hl,
    ...l,
    children: [
      (0, R.jsxs)(`div`, {
        children: [
          (0, R.jsxs)(`div`, {
            id: t,
            className: fl,
            children: [
              (0, R.jsx)(`div`, { className: pl, children: n }),
              (0, R.jsx)(`div`, { className: ml, children: a }),
            ],
          }),
          o,
        ],
      }),
      s,
      (0, R.jsx)(In, {
        autoFocus: r,
        focusableIfEmpty: r,
        noFocusRing: !0,
        children: c,
      }),
    ],
  });
}
function sV(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a =
      r.steamos_resolved_items &&
      r.steamos_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, R.jsx)(wV, {
      id: n,
      category: r.steamos_resolved_category ?? 0,
      appName: i,
    }),
    s = (0, R.jsx)(SV, { category: r.steamos_resolved_category }),
    c = r.steamos_resolved_items && r.steamos_resolved_items?.length > 0;
  return (0, R.jsx)(oV, {
    titleId: t,
    title: N.Localize(
      `#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    ratingIcon: s,
    ratingSummary: o,
    ...e,
    children: (0, R.jsxs)(R.Fragment, {
      children: [
        c && (0, R.jsx)(`div`, { className: `BlWeoXRF0aE-` }),
        r.steamos_resolved_items &&
          r.steamos_resolved_items
            .filter((e) => e.display_type != 1)
            .map((e) =>
              (0, R.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, R.jsx)(pV, { displaytype: e.display_type }),
                    (0, R.jsx)(`span`, { children: N.Localize(e.loc_token) }),
                  ],
                },
                e.loc_token + e.display_type,
              ),
            ),
        a &&
          (0, R.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: r.steamos_resolved_items
              ?.filter((e) => e.display_type == 1)
              .map((e) =>
                (0, R.jsxs)(
                  `div`,
                  {
                    className: `-vnBPYbU1nw-`,
                    children: [
                      (0, R.jsx)(pV, { displaytype: e.display_type }),
                      (0, R.jsx)(`span`, { children: N.Localize(e.loc_token) }),
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
function cV(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, R.jsx)(CV, { id: n, category: r.resolved_category, appName: i }),
    s = (0, R.jsx)(xV, { category: r.resolved_category }),
    c = r.resolved_items && r.resolved_items?.length > 0;
  return (0, R.jsx)(oV, {
    titleId: t,
    title: N.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI`),
    ratingIcon: s,
    ratingSummary: o,
    ...e,
    children: (0, R.jsxs)(R.Fragment, {
      children: [
        c && (0, R.jsx)(`div`, { className: `BlWeoXRF0aE-` }),
        r.resolved_items &&
          r.resolved_items
            .filter((e) => e.display_type !== 1)
            .map((e) =>
              (0, R.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, R.jsx)(fV, { displaytype: e.display_type }),
                    (0, R.jsx)(`span`, {
                      children:
                        e.loc_token.charAt(0) == `#`
                          ? N.Localize(e.loc_token)
                          : N.Localize(`#` + e.loc_token),
                    }),
                  ],
                },
                e.loc_token + e.display_type,
              ),
            ),
        a &&
          r.resolved_items &&
          (0, R.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: r.resolved_items
              .filter((e) => e.display_type == 1)
              .map((e) =>
                (0, R.jsx)(
                  `div`,
                  {
                    className: `_00kSG69QbjI-`,
                    children: (0, R.jsx)(`span`, {
                      children: N.Localize(e.loc_token),
                    }),
                  },
                  e.loc_token + e.display_type,
                ),
              ),
          }),
        (0, R.jsx)(gV, { appid: r.appid, appName: i }),
      ],
    }),
  });
}
function lV(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.machine_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, R.jsx)(TV, {
      id: n,
      category: r.machine_resolved_category,
      appName: i,
    }),
    s = (0, R.jsx)(xV, { category: r.machine_resolved_category }),
    c = r.machine_resolved_items && r.machine_resolved_items?.length > 0;
  return (0, R.jsx)(oV, {
    titleId: t,
    title: N.Localize(
      `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    ratingIcon: s,
    ratingSummary: o,
    ...e,
    children: (0, R.jsxs)(R.Fragment, {
      children: [
        c && (0, R.jsx)(`div`, { className: `BlWeoXRF0aE-` }),
        r.machine_resolved_items &&
          r.machine_resolved_items
            .filter((e) => e.display_type !== 1)
            .map((e) =>
              (0, R.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, R.jsx)(fV, { displaytype: e.display_type }),
                    (0, R.jsx)(`span`, { children: N.Localize(e.loc_token) }),
                  ],
                },
                e.loc_token + e.display_type,
              ),
            ),
        a &&
          r.machine_resolved_items &&
          (0, R.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: r.machine_resolved_items
              .filter((e) => e.display_type == 1)
              .map((e) =>
                (0, R.jsx)(
                  `div`,
                  {
                    className: `_00kSG69QbjI-`,
                    children: (0, R.jsx)(`span`, {
                      children: N.Localize(e.loc_token),
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
function uV(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.frame_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, R.jsx)(EV, {
      id: n,
      category: r.frame_resolved_category ?? 0,
      appName: i,
    }),
    s = (0, R.jsx)(xV, { category: r.frame_resolved_category ?? 0 }),
    c = r.frame_resolved_items && r.frame_resolved_items?.length > 0;
  return (0, R.jsx)(oV, {
    titleId: t,
    title: N.Localize(
      `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    ratingIcon: s,
    ratingSummary: o,
    ...e,
    children: (0, R.jsxs)(R.Fragment, {
      children: [
        c && (0, R.jsx)(`div`, { className: `BlWeoXRF0aE-` }),
        r.frame_resolved_items &&
          r.frame_resolved_items
            .filter((e) => e.display_type !== 1)
            .map((e) =>
              (0, R.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, R.jsx)(fV, { displaytype: e.display_type }),
                    (0, R.jsx)(`span`, { children: N.Localize(e.loc_token) }),
                  ],
                },
                e.loc_token + e.display_type,
              ),
            ),
        a &&
          r.frame_resolved_items &&
          (0, R.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: r.frame_resolved_items
              .filter((e) => e.display_type == 1)
              .map((e) =>
                (0, R.jsx)(
                  `div`,
                  {
                    className: `_00kSG69QbjI-`,
                    children: (0, R.jsx)(`span`, {
                      children: N.Localize(e.loc_token),
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
function dV(e) {
  let { blogURL: t, eHWCompatibiltyDisplay: n } = e,
    r = Wr();
  if (!t) return null;
  if (r) {
    let e =
      n == 2
        ? N.Localize(`#SteamOS_DescriptionHeader_DeveloperBlog`)
        : N.Localize(`#SteamDeckVerified_DescriptionHeader_DeveloperBlog`);
    return (0, R.jsxs)(`div`, {
      className: Dl,
      children: [
        e,
        (0, R.jsx)(`div`, {
          className: Fl,
          children: (0, R.jsx)(iu, { button: V.Y, type: eu.Knockout }),
        }),
      ],
    });
  }
  let i =
    n == 2
      ? N.Localize(`#SteamOS_DescriptionHeader_DeveloperBlog_Desktop`)
      : N.Localize(
          `#SteamDeckVerified_DescriptionHeader_DeveloperBlog_Desktop`,
        );
  return (0, R.jsxs)(`div`, {
    className: Dl,
    children: [
      i,
      (0, R.jsx)(`a`, {
        href: t,
        className: cl,
        children: N.Localize(`#SteamDeckVerified_ViewDeveloperPost`),
      }),
    ],
  });
}
function fV(e) {
  let { displaytype: t } = e;
  switch (t) {
    case 4:
      return (0, R.jsx)(Yn, { className: Pl });
    case 3:
      return (0, R.jsx)(Qi, { className: Pl });
    case 2:
      return (0, R.jsx)(tr, { className: Pl });
    case 0:
      return (0, R.jsx)(Nt, { className: Pl });
    case 1:
      return null;
  }
}
function pV(e) {
  let { displaytype: t } = e;
  switch (t) {
    case 3:
      return (0, R.jsx)(Mi, { className: Pl });
    case 1:
      return (0, R.jsx)(ca, { className: Pl });
    default:
      return null;
  }
}
function mV(e) {
  let { histogram: t, deviceName: n, nFrameLimit: r, appName: i } = e,
    a = i
      ? N.Localize(`#GamePerformanceStats_FrameRateDistribution`, i, n)
      : N.Localize(`#GamePerformanceStats_FrameRateDistribution_ThisGame`, n);
  return (0, R.jsxs)(`div`, {
    className: xl,
    children: [
      (0, R.jsxs)(`div`, {
        children: [
          (0, R.jsx)(`div`, {
            className: Sl,
            children: N.Localize(`#GamePerformanceStats_MoreInfoTitle`),
          }),
          (0, R.jsx)(`div`, { children: a }),
        ],
      }),
      (0, R.jsx)(rV, { histogram: t, minWidth: 200, minHeight: 200 }),
      (0, R.jsx)(`div`, {
        className: Sl,
        children: N.Localize(`#GamePerformanceStats_MoreDetailsTitle`),
      }),
      (0, R.jsxs)(`div`, {
        className: Cl,
        children: [
          (0, R.jsx)(`div`, {
            children: N.Localize(
              `#GamePerformanceStats_MoreDetails_Filtering`,
              n,
              r,
            ),
          }),
          (0, R.jsx)(`div`, {
            children: N.Localize(
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
var hV = [4, 3];
function gV(e) {
  let { appid: t, appName: n } = e,
    r = Uu(t),
    { data: i } = Wu(void 0, !!r),
    [a, o] = z.useState(!1),
    [s, c] = z.useState(void 0),
    l = z.useRef(null),
    u = (0, z.useMemo)(() => {
      let e = new Map();
      for (let t of hV) {
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
          [3, N.Localize(`#GamePerformanceStats_SteamDeckLCD`)],
          [4, N.Localize(`#GamePerformanceStats_SteamDeckOLED`)],
        ]),
      [],
    );
  if (!r) return null;
  if (!Array.from(u.values()).some((e) => !!e.average))
    return (0, R.jsxs)(`div`, {
      className: gl,
      children: [
        (0, R.jsx)(`div`, { className: Nl }),
        (0, R.jsx)(`div`, {
          className: _l,
          children: N.Localize(
            `#GamePerformanceStats_StillGatheringData_NoDevice`,
          ),
        }),
      ],
    });
  let p = hV.map((e) => ({
      name: (0, R.jsx)(`div`, { className: Ul, children: f.get(e) }),
      key: e.toString(),
      contents: (0, R.jsx)(Hi, {
        children: (0, R.jsx)(mV, {
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
    let e = (0, R.jsx)(`span`, {
      className: yl,
      children: N.Localize(`#GameFrameRate_FPS`, g),
    });
    v = N.LocalizeReact(`#GameFrameRate_Description_ThisGame`, h, e);
  } else
    v = n
      ? N.Localize(`#GamePerformanceStats_StillGatheringData`, n, h)
      : N.Localize(`#GamePerformanceStats_StillGatheringData_ThisGame`, h);
  let y = !!g && !a;
  return (0, R.jsxs)(`div`, {
    className: gl,
    onTransitionEnd: (e) => {
      e.propertyName == `height` &&
        l.current?.scrollIntoView({ behavior: `smooth`, block: `nearest` });
    },
    children: [
      (0, R.jsx)(`div`, { className: Nl }),
      (0, R.jsxs)(In, {
        className: _l,
        onActivate: y ? () => o(!a) : void 0,
        focusable: y,
        children: [
          (0, R.jsxs)(`div`, {
            className: vl,
            children: [
              v,
              y &&
                (0, R.jsx)(aa, {
                  className: `heKA7rr02xo-`,
                  direction: a ? `up` : `down`,
                }),
            ],
          }),
          !!g &&
            _ > 0 &&
            (0, R.jsx)(`div`, {
              className: `HKN5tcQd-XE-`,
              children: N.Localize(`#GameFrameRate_LastUpdated`, xa(_)),
            }),
        ],
      }),
      (0, R.jsx)(ua, {
        visible: a,
        children: (0, R.jsx)(`div`, {
          ref: l,
          className: bl,
          children: (0, R.jsx)(Lu, {
            tabs: p,
            classNameCtn: Hl,
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
function _V(e) {
  let { id: t, compatibility: n, onShowDialog: r } = e,
    { data: i } = Wn(t),
    { data: a } = Ri(t),
    [o, s, c] = Rt();
  if (!i || !a || i.item_type !== 0) return null;
  let l = null,
    u = null;
  if (n == 4) {
    let e = a.steam_frame_compat_category || 0;
    ((l = (0, R.jsx)(yi, { category: e })),
      (u = N.Localize(
        `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
      )));
  } else if (n == 3) {
    let e = a.steam_machine_compat_category || 0;
    ((l = (0, R.jsx)(Kr, { category: e })),
      (u = N.Localize(
        `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
      )));
  } else {
    let e = a.steam_deck_compat_category || 0;
    ((l = (0, R.jsx)(Mr, { category: e })),
      (u = N.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_Desktop`)));
  }
  return (0, R.jsxs)(`div`, {
    className: F(ul, `LearnMoreCtn`),
    children: [
      l,
      (0, R.jsx)($r, {
        onClick: (e) => {
          (e.preventDefault(), (r ?? s)());
        },
        children: (0, R.jsx)(`span`, { className: dl, children: u }),
      }),
      !r &&
        (0, R.jsx)(vV, {
          nAppID: i.appid,
          appName: i.name,
          active: o,
          startingTab: n,
          closeModal: c,
        }),
    ],
  });
}
function vV(e) {
  let { nAppID: t, active: n, appName: r, startingTab: i, closeModal: a } = e;
  return (0, R.jsx)(ka, {
    active: n,
    children: (0, R.jsx)(bV, {
      nAppID: t,
      appName: r,
      startingTab: i,
      closeModal: a,
    }),
  });
}
function yV(e) {
  let { url: t, containerClass: n, bIncludeIcon: r, onOpenBlogPost: i } = e;
  return (0, R.jsxs)($r, {
    className: n,
    onClick: () => {
      i ? i() : t && (window.location.href = t);
    },
    children: [
      r && (0, R.jsx)(`div`, { className: `PJ-pfpmq-JI-` }),
      (0, R.jsx)(`div`, {
        className: r ? zl : Rl,
        children: N.Localize(
          `#SteamDeckVerified_Store_CompatSection_DeveloperComments`,
        ),
      }),
    ],
  });
}
function bV(e) {
  let { nAppID: t, appName: n, startingTab: r, closeModal: i } = e,
    a = el(t),
    o = z.useId();
  return (0, R.jsx)(Na, {
    "aria-labelledby": o,
    modalClassName: `DeckVerifiedModalDialog`,
    closeModal: i,
    onCancel: i,
    children: (0, R.jsx)(bi, {
      children: (0, R.jsx)(In, {
        focusable: !1,
        "flow-children": `column`,
        className: El,
        children: a
          ? (0, R.jsx)(iV, {
              titleId: o,
              appName: n,
              results: a,
              eStartingTab: r,
            })
          : (0, R.jsx)(me, {
              size: `medium`,
              position: `center`,
              string: N.Localize(`#Loading`),
            }),
      }),
    }),
  });
}
function xV(e) {
  let { category: t } = e;
  switch (t) {
    case 3:
      return (0, R.jsx)(Yn, { className: ll, role: `presentation` });
    case 2:
      return (0, R.jsx)(Qi, { className: ll, role: `presentation` });
    case 1:
      return (0, R.jsx)(tr, { className: ll, role: `presentation` });
    default:
      return (0, R.jsx)(Nt, { className: ll, role: `presentation` });
  }
}
function SV(e) {
  let { category: t } = e;
  switch (t) {
    case 2:
      return (0, R.jsx)(Mi, { className: ll, role: `presentation` });
    case 1:
      return (0, R.jsx)(tr, { className: ll, role: `presentation` });
    default:
      return (0, R.jsx)(Nt, { className: ll, role: `presentation` });
  }
}
function CV(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, R.jsx)(`div`, {
      id: t,
      className: Dl,
      children: r
        ? N.LocalizeReact(
            `#SteamDeckVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, R.jsx)(`b`, { children: he(r) }),
          )
        : N.Localize(`#SteamDeckVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamDeckVerified_DescriptionHeader_Verified`), (o = Ol));
      break;
    case 2:
      ((a = `#SteamDeckVerified_DescriptionHeader_Playable`), (o = kl));
      break;
    case 1:
      ((a = `#SteamDeckVerified_DescriptionHeader_Unsupported`), (o = Al));
  }
  let s = (0, R.jsx)(`span`, { className: o, children: N.Localize(DV(n)) }),
    c = (0, R.jsx)(`span`, { className: Dl, children: N.Localize(i || a) }),
    l = r
      ? N.LocalizeReact(
          `#SteamDeckVerified_DescriptionHeader_WithAppName`,
          (0, R.jsx)(`b`, { children: he(r) }),
          s,
          c,
        )
      : N.LocalizeReact(`#SteamDeckVerified_DescriptionHeader`, s, c);
  return (0, R.jsx)(`div`, { id: t, className: Dl, children: l });
}
function wV(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, R.jsx)(`div`, {
      className: Dl,
      children: r
        ? N.LocalizeReact(
            `#SteamOSCompatibility_DescriptionHeader_Unknown_WithAppName`,
            (0, R.jsx)(`b`, { children: he(r) }),
          )
        : N.Localize(`#SteamOSCompatibility_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 2:
      ((a = `#SteamOSCompatibility_DescriptionHeader_Compatible`), (o = jl));
      break;
    case 1:
      ((a = `#SteamOSCompatibility_DescriptionHeader_Unsupported`), (o = Al));
  }
  let s = (0, R.jsx)(`span`, { className: o, children: N.Localize(OV(n)) }),
    c = (0, R.jsx)(`span`, { className: Dl, children: N.Localize(i || a) }),
    l = r
      ? N.LocalizeReact(
          `#SteamOSCompatibility_DescriptionHeader_WithAppName`,
          (0, R.jsx)(`b`, { children: he(r) }),
          s,
          c,
        )
      : N.LocalizeReact(`#SteamOSCompatibility_DescriptionHeader`, s, c);
  return (0, R.jsx)(`div`, { id: t, className: Dl, children: l });
}
function TV(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, R.jsx)(`div`, {
      className: Dl,
      children: r
        ? N.LocalizeReact(
            `#SteamMachineVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, R.jsx)(`b`, { children: he(r) }),
          )
        : N.Localize(`#SteamMachineVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamMachineVerified_DescriptionHeader_Verified`), (o = Ol));
      break;
    case 2:
      ((a = `#SteamMachineVerified_DescriptionHeader_Playable`), (o = kl));
      break;
    case 1:
      ((a = `#SteamMachineVerified_DescriptionHeader_Unsupported`), (o = Al));
  }
  let s = (0, R.jsx)(`span`, { className: o, children: N.Localize(DV(n)) }),
    c = (0, R.jsx)(`span`, { className: Dl, children: N.Localize(i || a) }),
    l = r
      ? N.LocalizeReact(
          `#SteamMachineVerified_DescriptionHeader_WithAppName`,
          (0, R.jsx)(`b`, { children: he(r) }),
          s,
          c,
        )
      : N.LocalizeReact(`#SteamMachineVerified_DescriptionHeader`, s, c);
  return (0, R.jsx)(`div`, { id: t, className: Dl, children: l });
}
function EV(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, R.jsx)(`div`, {
      className: Dl,
      children: r
        ? N.LocalizeReact(
            `#SteamFrameVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, R.jsx)(`b`, { children: he(r) }),
          )
        : N.Localize(`#SteamFrameVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamFrameVerified_DescriptionHeader_Verified`), (o = Ol));
      break;
    case 2:
      ((a = `#SteamFrameVerified_DescriptionHeader_Playable`), (o = kl));
      break;
    case 1:
      ((a = `#SteamFrameVerified_DescriptionHeader_Unsupported`), (o = Al));
  }
  let s = (0, R.jsx)(`span`, { className: o, children: N.Localize(DV(n)) }),
    c = (0, R.jsx)(`span`, { className: Dl, children: N.Localize(i || a) }),
    l = r
      ? N.LocalizeReact(
          `#SteamFrameVerified_DescriptionHeader_WithAppName`,
          (0, R.jsx)(`b`, { children: he(r) }),
          s,
          c,
        )
      : N.LocalizeReact(`#SteamFrameVerified_DescriptionHeader`, s, c);
  return (0, R.jsx)(`div`, { id: t, className: Dl, children: l });
}
function DV(e) {
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
function OV(e) {
  switch (e) {
    case 2:
      return `#SteamOSCompatibility_Category_Compatible`;
    case 1:
      return `#SteamOSCompatibility_Category_Unsupported`;
    default:
      return `#SteamOSCompatibility_Category_Unknown`;
  }
}
function kV(e) {
  let { id: t } = e,
    { data: n } = na(t);
  return n
    ? (0, R.jsx)(`div`, {
        className: Lc,
        children: (0, R.jsx)(`div`, {
          className: Rc,
          children: n
            .slice(0, 10)
            .filter((e) => e.tagid)
            .map((e) =>
              (0, R.jsx)(
                OY,
                { tagid: e.tagid, className: zc },
                `tag_` + e.tagid,
              ),
            ),
        }),
      })
    : null;
}
function AV(e) {
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
    g = uK(),
    _ =
      d &&
      (() => {
        (g?.(), d());
      }),
    [v, y] = (0, z.useState)(!1),
    [b, x] = (0, z.useState)(``),
    S = (e) => x(`translateY( -${e?.clientHeight || 0}px )`),
    { data: C } = Wn(t),
    { data: w } = Pa(n),
    T = !f && !o && !a,
    E = C && C.item_type == 0,
    [D, O] = ee(l, u);
  return (0, R.jsxs)(`div`, {
    className: Mc,
    style: { transform: s && v ? b : `` },
    onMouseEnter: () => y(!0),
    onFocus: () => y(!0),
    onMouseLeave: () => y(!1),
    onBlur: () => y(!1),
    children: [
      (0, R.jsxs)(`a`, {
        href: i,
        className: Dc,
        onClick: (e) => {
          m && e.preventDefault();
        },
        "aria-disabled": m,
        children: [
          w &&
            (0, R.jsx)(`div`, {
              className: `JsLUT-ZChQQ-`,
              children: (0, R.jsx)(`div`, {
                className: F(`-G728TP4qEc-`, `AWrycDVaY80-`),
                children: (0, R.jsx)(`img`, {
                  loading: `lazy`,
                  src: St(w, `header`),
                  alt: C?.name,
                }),
              }),
            }),
          !c &&
            !f &&
            (0, R.jsx)(`div`, {
              className: `Er5Gw2jrA3A-`,
              children: (0, R.jsx)(YV, { id: t, onlyOneDiscountPct: !0 }),
            }),
        ],
      }),
      (0, R.jsx)(`div`, {
        className: Nc,
        ref: S,
        children: (0, R.jsxs)(`div`, {
          className: Fc,
          children: [
            (0, R.jsx)(`a`, {
              href: i,
              onClick: (e) => {
                m && e.preventDefault();
              },
              "aria-disabled": m,
              children: (0, R.jsx)(`div`, {
                className: Ic,
                children: C?.name || r,
              }),
            }),
            h && (0, R.jsx)(MV, { id: t }),
            (0, R.jsx)(kV, { id: t }),
            !D && (0, R.jsx)(Xc, { id: t }),
            !(D || !T) &&
              (0, R.jsxs)(`div`, {
                className: `N6R56w3oY8s-`,
                children: [
                  (0, R.jsx)(HV, { id: t, strClassName: `aRGldfNGEPM-` }),
                  (0, R.jsx)(jV, { id: t }),
                ],
              }),
            o && (0, R.jsx)(RH, { id: t, className: `mVkwv5PYwMg-` }),
            !!(D && E) &&
              (0, R.jsx)(_V, { id: t, compatibility: O, onShowDialog: _ }),
            !!a && a,
            f &&
              E &&
              t &&
              `appid` in t &&
              t.appid &&
              (0, R.jsx)(fH, { appid: t.appid, bIsMuted: !1 }),
            p && (0, R.jsx)(VG, { nCreatorAccountID: p }),
          ],
        }),
      }),
    ],
  });
}
function jV(e) {
  let { id: t } = e,
    { data: n } = cr(t);
  if (!n) return null;
  let r = ic(n);
  return (0, R.jsx)(`div`, { className: Bc, children: r });
}
function MV(e) {
  let { id: t } = e,
    { data: n } = Vn(t);
  return n
    ? (0, R.jsx)(`div`, { className: Pc, children: n?.short_description })
    : null;
}
function NV(e) {
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
    { data: l } = oi(t),
    { data: u } = Le(t),
    d = l === void 0 && u === void 0,
    [f] = ee(!!a, o);
  return (0, R.jsxs)(`div`, {
    className: F(Sc, d && `dNo27dzDPfI-`, ls, i && `djLCJl8FKv8-`),
    children: [
      (0, R.jsxs)(`a`, {
        href: r,
        className: Cc,
        children: [
          !(!s || f) && (0, R.jsx)(Qc, { id: n, snr: e.strSNR }),
          !(!c || f) && (0, R.jsx)(rG, { id: n, snr: e.strSNR }),
          t && (0, R.jsx)(QG, { id: t }),
        ],
      }),
      (0, R.jsx)(AV, { ...e }),
    ],
  });
}
function PV(e) {
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
    { data: b } = Wn(t),
    x = Wr(),
    [S, C, w] = Rt(),
    { strStoreURL: T, snr: E } = vH(b, o);
  if ((!b && !n) || x) return (0, R.jsx)(R.Fragment, { children: u });
  let D = t;
  b &&
    b.item_type == 1 &&
    b.included_appids?.length == 1 &&
    (D = { appid: b.included_appids[0] });
  let O = mK() == `hiding`,
    k;
  r || (k = v ?? (b ? T : void 0));
  let [, A] = ee(p, m),
    j;
  A != 0 && b?.appid && b?.item_type == 0 && (j = b.appid);
  let M = (0, R.jsx)(NV, {
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
      onShowDeckCompatibilityDialog: j ? C : void 0,
    }),
    te = k && !v ? (0, R.jsx)(`a`, { href: k, children: u }) : u;
  return (0, R.jsxs)(R.Fragment, {
    children: [
      (0, R.jsx)(dK, {
        hoverContent: M,
        nWidthMultiplier: f,
        ...y,
        children: te,
      }),
      j &&
        (0, R.jsx)(vV, {
          nAppID: j,
          appName: b?.name || n,
          startingTab: A,
          active: S,
          closeModal: w,
        }),
    ],
  });
}
function FV(e) {
  return (0, z.useMemo)(() => RV(e), [e?.id, e?.type]);
}
function IV(e, t) {
  return (0, z.useMemo)(() => VV(e, t), [e, t]);
}
function LV(e, t) {
  return (0, z.useMemo)(() => BV(e, t), [e, t]);
}
function RV(e) {
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
function zV(e) {
  if (`appid` in e) return { id: e.appid, type: `game` };
  if (`packageid` in e) return { id: e.packageid, type: `sub` };
  if (`bundleid` in e) return { id: e.bundleid, type: `bundle` };
}
function BV(e, t) {
  switch (t) {
    case `sub`:
      return { packageid: e };
    case `bundle`:
      return { bundleid: e };
    default:
      return { appid: e };
  }
}
function VV(e, t) {
  switch (t) {
    case `sub`:
      return { packageid: e };
    case `bundle`:
      return { bundleid: e };
    default:
      return { appid: e };
  }
}
function HV(e) {
  let { id: t, strClassName: n, bMinimizePlatforms: r, bHideWindows: i } = e,
    { data: a } = Ri(t);
  if (!a) return null;
  if (r) {
    let e = i
      ? null
      : a?.windows &&
        (0, R.jsx)(`span`, {
          title: N.Localize(`#Platform_Windows`),
          children: (0, R.jsx)(nt, {
            "aria-label": N.Localize(`#Platform_Windows`),
          }),
        });
    return (
      L.PLATFORM === `linux` && a?.steamos_linux
        ? (e = (0, R.jsx)(`span`, {
            title: N.Localize(`#Platform_Linux`),
            children: (0, R.jsx)(Fe, {
              "aria-label": N.Localize(`#Platform_Linux`),
            }),
          }))
        : L.PLATFORM === `macos` && a?.mac
          ? (e = (0, R.jsx)(`span`, {
              title: N.Localize(`#Platform_Mac`),
              children: (0, R.jsx)(pt, {
                "aria-label": N.Localize(`#Platform_Mac`),
              }),
            }))
          : a.vr_support?.vrhmd &&
            (e = (0, R.jsx)(`span`, {
              title: N.Localize(`#Platform_VR`),
              children: (0, R.jsx)(Cr, {
                "aria-label": N.Localize(`#Platform_VR`),
              }),
            })),
      e ? (0, R.jsx)(`span`, { className: F(vo, n), children: e }) : null
    );
  }
  return (0, R.jsxs)(`span`, {
    className: F(vo, n),
    children: [
      !i &&
        a.windows &&
        (0, R.jsx)(`span`, {
          title: N.Localize(`#Platform_Windows`),
          children: (0, R.jsx)(nt, {
            "aria-label": N.Localize(`#Platform_Windows`),
          }),
        }),
      a.mac &&
        (0, R.jsx)(`span`, {
          title: N.Localize(`#Platform_Mac`),
          children: (0, R.jsx)(pt, {
            "aria-label": N.Localize(`#Platform_Mac`),
          }),
        }),
      a.steamos_linux &&
        (0, R.jsx)(`span`, {
          title: N.Localize(`#Platform_Linux`),
          children: (0, R.jsx)(Fe, {
            "aria-label": N.Localize(`#Platform_Linux`),
          }),
        }),
      a.vr_support?.vrhmd &&
        (0, R.jsx)(`span`, {
          title: N.Localize(`#Platform_VR`),
          children: (0, R.jsx)(Cr, {
            "aria-label": N.Localize(`#Platform_VR`),
          }),
        }),
    ],
  });
}
function UV(e) {
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
var WV = {
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
  GV = {
    strSymbol: ``,
    bSuffixSymbol: !1,
    bSpaceForSymbol: !1,
    bWholeUnitsOnly: !1,
    eCurrency: 0,
    strDecimalSymbol: `.`,
    strThousandsSeparator: `,`,
  };
function KV(e) {
  return { ...GV, ...WV[e], eCurrency: e };
}
function qV(e, t) {
  return JV(e, KV(t));
}
function JV(e, t) {
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
function YV(e) {
  let { id: t, bSelfPurchaseOption: n } = e,
    { data: r } = bt(t),
    { data: i } = Wn(t);
  if (!i) return null;
  let a = n && i.item_type == 1 ? i.self_purchase_option : r;
  return (0, R.jsx)(XV, { purchaseOption: a, ...e });
}
function XV(e) {
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
    _ = L.NOW,
    { data: v } = cr(r),
    { data: y } = Wn(r);
  if (!y) return null;
  let b = i,
    x = !h && sc(v, _),
    S = F({
      [Ao]: !0,
      [rs]: t,
      StoreSalePriceWidgetContainer: !0,
      [ss]: x,
      [go]: c,
      [ps]: l,
      [u ?? ``]: !!u,
    });
  if (e.bShowInLibrary)
    return (0, R.jsx)(`div`, {
      className: S,
      children: (0, R.jsx)(`div`, {
        className: ns,
        children: N.Localize(`#EventDisplay_CallToAction_InLibrary`),
      }),
    });
  if (v && v.is_coming_soon && (!b || (!b.packageid && !b.bundleid))) {
    if (o) return null;
    let e =
      v.coming_soon_display &&
      [`text_comingsoon`, `text_tba`].includes(v.coming_soon_display)
        ? Yr(v)
        : N.Localize(`#EventDisplay_CallToAction_ComingSoon_Date`, ic(v));
    return (0, R.jsx)(`div`, {
      className: S,
      children: (0, R.jsx)(`div`, { className: ns, children: e }),
    });
  }
  if (y.is_free) {
    if (!y.is_free_temporarily)
      return y.item_type == 0 && y.type == 1
        ? s
          ? null
          : (0, R.jsxs)(`div`, {
              className: S,
              children: [
                x &&
                  (0, R.jsx)(`div`, {
                    className: `eNdjZ1XB-fk-`,
                    children: N.Localize(`#Flag_New`),
                  }),
                (0, R.jsx)(`div`, {
                  className: ns,
                  children: N.Localize(`#EventDisplay_CallToAction_FreeDemo`),
                }),
              ],
            })
        : (0, R.jsxs)(`div`, {
            className: S,
            children: [
              x &&
                (0, R.jsx)(`div`, {
                  className: `eNdjZ1XB-fk-`,
                  children: N.Localize(`#Flag_New`),
                }),
              (0, R.jsx)(`div`, {
                className: ns,
                children: N.Localize(`#EventDisplay_CallToAction_FreeToPlay`),
              }),
            ],
          });
    if (b && b.is_free_to_keep && !b.formatted_original_price)
      return (0, R.jsx)(`div`, {
        className: S,
        children: (0, R.jsx)(`div`, {
          className: ns,
          children: N.Localize(`#EventDisplay_CallToAction_Free`),
        }),
      });
  }
  if (!b || !b.formatted_final_price) return null;
  let C = y.item_type == 2,
    w = hn(b),
    T = !!w && !w.nSupersededBundlePct,
    E = w?.nSupersededBundlePct ? w.nDiscountPct : b.discount_pct || 0,
    D = ((w || C) && (!n || T || (w && !t)) && b.bundle_discount_pct) || 0,
    O = b.formatted_final_price;
  if (p) {
    let e = { ...KV(UV(Wi.country_code.toUpperCase())), bWholeUnitsOnly: !0 };
    O = JV(Number.parseInt(b.final_price_in_cents || `0`), e);
  }
  let k = cc(v, b);
  return (0, R.jsx)(ZV, {
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
function ZV(e) {
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
      ? N.Localize(`#Discount_ARIA_Label_SpecialPrice`, a)
      : N.Localize(`#Discount_ARIA_Label`, n, a, o));
  let v = !((!n && !i) || g) && !!a,
    y = !(!i || !n || g || t),
    b = N.Localize(Ie(!!i, !!n, !!h));
  return (0, R.jsxs)(`div`, {
    className: F({
      [Ao]: !0,
      [rs]: t,
      StoreSalePriceWidgetContainer: !0,
      [es]: !!n,
      Discounted: !!n,
      [os]: !!r,
      [ds]: !!u,
      [ss]: !!c,
      [go]: p,
      [ps]: m,
      [d ?? ``]: !!d,
    }),
    "aria-label": _,
    children: [
      !(!r || l) &&
        (0, R.jsx)(`div`, {
          className: F(`DfwzMU92EL4-`, `StoreSalePrepurchaseLabel`),
          children: (0, R.jsxs)(`span`, {
            children: [
              (0, R.jsx)(jr, {}),
              N.Localize(`#EventDisplay_CallToAction_Prepurchase_Short`),
            ],
          }),
        }),
      !(r || !c) &&
        (0, R.jsx)(`div`, {
          className: `eNdjZ1XB-fk-`,
          children: N.Localize(`#Flag_New`),
        }),
      y &&
        (0, R.jsx)(Mt, {
          toolTipContent: b,
          children: (0, R.jsxs)(`span`, {
            className: F(`kjiBcsaqA8o-`, `_3jMC2e33p3s-`),
            children: [
              (0, R.jsx)(`span`, {
                className: `cCmCiA6FCMc-`,
                children: `-${i}%`,
              }),
              `-${n}%`,
            ],
          }),
        }),
      !(!i || g || y) &&
        (0, R.jsxs)(R.Fragment, {
          children: [
            (0, R.jsx)(Mt, {
              toolTipContent: b,
              children: (0, R.jsx)(`span`, {
                className: F(`_-1f811oo4iw-`),
                children: `-${i}%`,
              }),
            }),
            !!n &&
              (0, R.jsx)(Mt, {
                toolTipContent: b,
                children: (0, R.jsx)(`span`, {
                  className: F(`kjiBcsaqA8o-`),
                  children: `-${n}%`,
                }),
              }),
          ],
        }),
      !(i || !n || g) &&
        (0, R.jsx)(Mt, {
          toolTipContent: b,
          children: (0, R.jsx)(`div`, {
            className: F(`kjiBcsaqA8o-`, `StoreSaleDiscountBox`),
            children: `-${n}%`,
          }),
        }),
      !!(n && g) &&
        (0, R.jsx)(`div`, {
          className: `NqZ9uMSo13A-`,
          children: (0, R.jsx)(Un, {}),
        }),
      v
        ? (0, R.jsxs)(`div`, {
            className: F(is),
            children: [
              (0, R.jsx)(`div`, {
                className: F({ [us]: t, [as]: !t }),
                children: a,
              }),
              (0, R.jsx)(`div`, {
                className: F({ [ns]: !0, [rs]: t, [f ?? ``]: !!f }),
                children: o,
              }),
            ],
          })
        : (0, R.jsx)(`div`, {
            className: F({ [ns]: !0, [f ?? ``]: !!f }),
            children: o,
          }),
    ],
  });
}
var QV = `pE3kiYj-T9c-`,
  $V = `bXqn3-4kGc8-`,
  eH = `bNGFzJt9CmI-`,
  tH = `vE1beFyJ7fE-`,
  nH = `jLH2MgXW2QA-`,
  rH = `dGNTZWr-al8-`,
  iH = `_8aFotqvmohI-`,
  aH = `sjibpkgu4sc-`,
  oH = `I09IQjtbMSg-`,
  sH = `C4-YRfvAL7Q-`;
async function cH(e, t) {
  let n = `steam://run/` + e;
  ba.IN_CLIENT
    ? (console.log(`Running game ${e} locally.`), (window.location.href = n))
    : (console.log(
        `Cannot identify local client. Prompting user to launch ${e}.`,
      ),
      uH(e, n, t));
}
async function lH(e, t) {
  let n = `steam://install/` + e;
  ba.IN_CLIENT ? (window.location.href = n) : uH(e, n, t);
}
async function uH(e, t, n) {
  console.log(`prompting for`, n);
  let r = ba.STORE_BASE_URL + `about/`;
  qe(
    (0, R.jsx)(dH, {
      appid: e,
      strGameName: n || ``,
      strOnOKUrl: t,
      strDownloadSteamUrl: r,
    }),
    window,
  );
}
var dH = (e) => {
  let t = () => e.closeModal && e.closeModal();
  return (0, R.jsx)(Mn, {
    onEscKeypress: t,
    className: QV,
    children: (0, R.jsxs)(Di, {
      children: [
        (0, R.jsxs)(gr, { children: [` `, I(`#GotSteam_Title`), ` `] }),
        (0, R.jsxs)(bi, {
          children: [
            (0, R.jsx)(Lr, {
              children: _i(
                `#GotSteam_PromptWithDownloadLink`,
                (0, R.jsx)(`a`, {
                  href: e.strDownloadSteamUrl,
                  className: $V,
                  children: I(`#GotSteam_DownloadLinkText`),
                }),
                (0, R.jsx)(`span`, { className: eH, children: e.strGameName }),
              ),
            }),
            (0, R.jsxs)(`div`, {
              className: tH,
              children: [
                (0, R.jsxs)(`a`, {
                  href: e.strOnOKUrl,
                  onClick: t,
                  className: F(nH, rH),
                  children: [
                    (0, R.jsxs)(`div`, {
                      className: iH,
                      children: [` `, I(`#GotSteam_Yes`), ` `],
                    }),
                    (0, R.jsxs)(`div`, {
                      className: aH,
                      children: [` `, I(`#GotSteam_Yes_Play`), ` `],
                    }),
                  ],
                }),
                (0, R.jsxs)(`a`, {
                  href: e.strDownloadSteamUrl,
                  onClick: t,
                  className: nH,
                  children: [
                    (0, R.jsxs)(`div`, {
                      className: iH,
                      children: [` `, I(`#GotSteam_No`), ` `],
                    }),
                    (0, R.jsxs)(`div`, {
                      className: aH,
                      children: [` `, I(`#GotSteam_No_Download`), ` `],
                    }),
                  ],
                }),
              ],
            }),
            (0, R.jsxs)(`div`, {
              className: oH,
              children: [
                (0, R.jsx)(Fe, { className: sH }),
                I(`#GotSteam_Blurb`),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
function fH(e) {
  let { appid: t, bIsMuted: n } = e,
    r = A(t),
    i = ne(t),
    { data: a } = Wn(r),
    { mutate: o } = hc(r),
    s = (e) => {
      (e.preventDefault(), i ? cH(t, a?.name) : o());
    },
    c = F(Eo, n && void 0, i ? Do : Oo);
  return (0, R.jsx)(`div`, {
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
function pH(e) {
  let t = e?.jsondata?.read_more_link;
  if (!t) return;
  let n = rr(t).toLocaleLowerCase();
  return n ? [n] : void 0;
}
function mH(e, t) {
  return on(e, pH(t));
}
function hH(e, t) {
  if (!e) return ``;
  if (!on(e)) return je(e);
  let n = mH(e, t) ? ut(e) : e;
  return (L.IN_CLIENT ? `steam://openurl_external/` : ``) + n;
}
function gH(e, t, n) {
  let r = e.toLowerCase().startsWith(`http`) ? e : `http://` + e;
  return (0, R.jsx)(_H, { url: r, event: t, children: n || e });
}
var _H = (e) => {
  let { url: t, event: n, className: r, style: i } = e,
    a = Dt(t);
  a = hH(a, n);
  let o = on(a) ? `noopener nofollow` : void 0,
    s =
      typeof e.children == `string` &&
      e.children.length > 0 &&
      t &&
      !t.startsWith(`steam://`)
        ? ln(t)
        : void 0;
  return (0, R.jsx)(Mt, {
    toolTipContent: s,
    direction: `top`,
    children: (0, R.jsx)($r, {
      className: r,
      href: a,
      rel: o,
      id: e.id,
      style: i,
      children: e.children,
    }),
  });
};
function vH(e, t, n) {
  let r = Ni(),
    i = sr(),
    a = hH(yH(se(e, t), n));
  return { snr: Yi(r), strStoreURL: Pt(a, r, i) };
}
function yH(e, t) {
  if (!e || !t) return e;
  let n = new URL(e);
  for (let [e, r] of Object.entries(t)) n.searchParams.set(e, r);
  return n.toString();
}
function bH(e, t, n, r, i) {
  return xH(
    [{ packageid: e, bundleid: t, bIsGift: n, nAccountIDGiftee: r }],
    i,
  );
}
function xH(e, t) {
  let n = Xn(),
    r = Aa(),
    i = h(),
    { storeBrowseContext: a, dataLoader: o } = ya(),
    { country: c } = a,
    l = $i(t);
  return s({
    mutationFn: async () => {
      if (e.length == 0 || !e.every((e) => e.packageid || e.bundleid))
        throw `Every item must have a valid package or bundle id`;
      let t;
      if (yt(n)) {
        let [a, o] = await it(r, c, e, l);
        if (a == 1) ((t = o.line_item_ids), sn(i, n, o.cart));
        else throw `AddItemsToAccountCart failed with ${a}`;
      } else if (Pn(n)) {
        let a = e.map((e) => e.packageid).filter(Et),
          o = e.map((e) => e.bundleid).filter(Et);
        if (o.length > 1)
          throw `The anonymous cart can only take one bundle per call`;
        let [s, c] = await et(
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
            sn(i, n, en(c)));
        } else throw `AddItemsToAnonymousCart failed with ${s}`;
      } else throw `Invalid cart type`;
      return t;
    },
    onMutate: () => {
      (async () => {
        let t = e.map((e) =>
          e.packageid ? { packageid: e.packageid } : { bundleid: e.bundleid },
        );
        (await Promise.all(t.map((e) => i.fetchQuery(at(o, e))))).forEach(
          (e, n) => {
            let r =
              e?.included_appids?.length == 1
                ? { appid: e.included_appids[0] }
                : t[n];
            (i.prefetchQuery(Xe(o, r)), i.prefetchQuery(cn(o, r)));
          },
        );
      })();
    },
  });
}
var SH = e(m(), 1);
async function CH(e, t) {
  let n = hi.Init(wn);
  (n.Body().set_context(Ta(!1)), t.forEach((e) => n.Body().add_packageid(e)));
  let r = await ot.GetHardwareItems(e, n);
  return r.BSuccess()
    ? r
        .Body()
        .details()
        .map((e) => e.toObject())
    : (console.error(`GetHardareDetails failed on packages: ${t.join(`,`)}`),
      null);
}
function wH(e) {
  let t = kH(Aa());
  return p(DH(t, e));
}
var TH = (function (e) {
  return (
    (e[(e.k_Loading = 0)] = `k_Loading`),
    (e[(e.k_LoadSuccess = 1)] = `k_LoadSuccess`),
    (e[(e.k_LoadFailure = 2)] = `k_LoadFailure`),
    e
  );
})({});
function EH(e) {
  let t = kH(Aa()),
    n = l({ queries: e.map((n) => ({ ...DH(t, n), enabled: e.length > 0 })) }),
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
function DH(e, t) {
  return { queryKey: OH(t), queryFn: async () => e.load(t), enabled: !!t };
}
function OH(e) {
  return [`hardwaredetail`, e];
}
function kH(e) {
  return g(`HardwareDetailLoader`, () => AH(e));
}
function AH(e) {
  return new SH.default(async (t) => {
    let n = await CH(e, t),
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
var jH = { high_pending_orders: !1, inventory_available: !0 };
function MH(e) {
  let { data: t } = Wn(e),
    n = t?.item_type === 1 && t.type === 10,
    { data: r } = wH(n ? t.id : void 0);
  return t ? (n ? (r ?? null) : jH) : null;
}
var NH = `wvEYeGaFmt0-`,
  PH = `GW1050ijiP0-`;
function FH(e) {
  let { id: t, className: n } = e,
    r = Ni(),
    { data: i } = Wn(t),
    { data: a } = cr(t),
    { data: o } = Fn(t),
    s = MH(t),
    { bIsOwned: c } = E(t),
    l = Dn(i),
    u = (0, z.useCallback)(() => {
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
      if (!s) return (0, R.jsx)(me, { size: `small`, position: `center` });
      if (!s.inventory_available)
        return (0, R.jsx)(`div`, {
          className: F(PH, n),
          children: (0, R.jsxs)(`span`, {
            children: [` `, N.Localize(`#Sale_ReserveExhausted`)],
          }),
        });
    } else if (d && i.included_appids && i.included_appids.length > 1)
      return null;
  }
  if (i.item_type == 0) {
    if ((a.is_coming_soon && !o.packageid) || (c && i.type === 10)) return null;
    if (!c && o.is_free_to_keep) {
      if (ba.IN_CLIENT || Qn() != `store`) {
        let e = `${ba.IN_CLIENT ? `steam://openurl/` : ``}${l}`;
        return (0, R.jsx)(`div`, {
          onClick: (t) => Gt(t, e),
          className: F(NH, n),
          children: (0, R.jsx)(`span`, {
            children: N.Localize(`#EventDisplay_CallToAction_VisitStore`),
          }),
        });
      }
      {
        let e = ht(`${ba.STORE_BASE_URL}freelicense/addfreelicense`, r);
        return (0, R.jsxs)(`form`, {
          action: e,
          method: `POST`,
          children: [
            (0, R.jsx)(`input`, {
              type: `hidden`,
              name: `subid`,
              value: o.packageid,
            }),
            (0, R.jsx)(`input`, {
              type: `hidden`,
              name: `sessionid`,
              value: Pr(),
            }),
            (0, R.jsx)(`button`, {
              className: F(NH, n),
              type: `submit`,
              children: N.Localize(`#EventDisplay_CallToAction_AddToAccount`),
            }),
          ],
        });
      }
    }
    if ((c || d) && !i.is_coming_soon) {
      let e = N.Localize(`#EventDisplay_CallToAction_PlayNowForFree`);
      return (
        c
          ? (e = N.Localize(`#EventDisplay_CallToAction_PlayNow`))
          : i.is_free_temporarily &&
            (e = N.Localize(`#EventDisplay_CallToAction_AddToAccount`)),
        (0, R.jsx)(`div`, {
          className: F(NH, n),
          onClick: u,
          children: (0, R.jsx)(`span`, { children: e }),
        })
      );
    }
    if (o.formatted_final_price == ``)
      return (0, R.jsx)(`a`, {
        href: l,
        className: F(NH, n),
        children: N.Localize(`#EventDisplay_CallToAction_VisitStore`),
      });
  }
  return (0, R.jsx)(IH, {
    className: n,
    storeItemBestPurchaseOption: o,
    storeItemDefaultData: i,
  });
}
function IH(e) {
  let {
      className: t,
      storeItemBestPurchaseOption: n,
      storeItemDefaultData: r,
    } = e,
    i = Ni(),
    { mutate: a } = bH(n?.packageid, n?.bundleid, !1, void 0, i.feature);
  return (0, R.jsx)(`div`, {
    className: F(NH, t),
    onClick: () => a(),
    children: (0, R.jsx)(`span`, { children: N.Localize(`#Store_AddToCart`) }),
  });
}
var LH = `_8xhMURZRDBY-`;
function RH(e) {
  let { id: t, className: n } = e,
    { data: r } = Wn(t);
  if (!r) return null;
  let i =
      r.related_items?.demo_appid && r.related_items.demo_appid
        ? r.related_items.demo_appid
        : [],
    a = i.length > 0,
    o = a || r.type === 1,
    s = o
      ? N.Localize(`#Sale_InstallDemo_ttip`, r.name || ``)
      : a
        ? N.Localize(`#Sale_CannotInstallDemo_ttip`, r.name || ``)
        : N.Localize(`#Loading`);
  if (L.IN_MOBILE_WEBVIEW) {
    if (o && a) {
      let e = r.type === 1 ? r.appid : i[0];
      return (0, R.jsx)(`div`, {
        className: n,
        children: (0, R.jsx)(SY, { appid: e }),
      });
    }
    return null;
  }
  return !o && a && r.is_free
    ? (0, R.jsx)(FH, { id: t, className: n })
    : (0, R.jsx)(Jn, {
        toolTipContent: s,
        onClick: (e) => {
          (e.preventDefault(),
            e.stopPropagation(),
            o && cH(r.type === 1 ? r.appid : i[0], r.name));
        },
        className: F(n, LH, !o && `gpIFsnR2ZGs-`),
        children: o
          ? N.Localize(`#Sale_InstallDemo`)
          : N.Localize(`#Sale_DemoNotFound`),
      });
}
var $ = {};
(($.arabic = () =>
  P(() => import(`./chunk~dab13398e5.js`), [], import.meta.url)),
  ($.brazilian = () =>
    P(() => import(`./chunk~dab1246145.js`), [], import.meta.url)),
  ($.bulgarian = () =>
    P(() => import(`./chunk~4bdff36891.js`), [], import.meta.url)),
  ($.czech = () =>
    P(() => import(`./chunk~2545b0937f.js`), [], import.meta.url)),
  ($.danish = () =>
    P(() => import(`./chunk~dd0ba56211.js`), [], import.meta.url)),
  ($.dutch = () =>
    P(() => import(`./chunk~3082dc6760.js`), [], import.meta.url)),
  ($.english = () =>
    P(() => import(`./chunk~5d62d6ca8b.js`), [], import.meta.url)),
  ($.finnish = () =>
    P(() => import(`./chunk~4f95d7925a.js`), [], import.meta.url)),
  ($.french = () =>
    P(() => import(`./chunk~11a8bb7eb1.js`), [], import.meta.url)),
  ($.german = () =>
    P(() => import(`./chunk~edd1a7534c.js`), [], import.meta.url)),
  ($.greek = () =>
    P(() => import(`./chunk~3f51d22cb3.js`), [], import.meta.url)),
  ($.hungarian = () =>
    P(() => import(`./chunk~670fab083e.js`), [], import.meta.url)),
  ($.indonesian = () =>
    P(() => import(`./chunk~13e12dd392.js`), [], import.meta.url)),
  ($.italian = () =>
    P(() => import(`./chunk~adba104c1f.js`), [], import.meta.url)),
  ($.japanese = () =>
    P(() => import(`./chunk~4eec58f087.js`), [], import.meta.url)),
  ($.koreana = () =>
    P(() => import(`./chunk~bba5046be4.js`), [], import.meta.url)),
  ($.latam = () =>
    P(() => import(`./chunk~ea21cd4d57.js`), [], import.meta.url)),
  ($.malay = () =>
    P(() => import(`./chunk~308b243181.js`), [], import.meta.url)),
  ($.norwegian = () =>
    P(() => import(`./chunk~5ac43a3563.js`), [], import.meta.url)),
  ($.polish = () =>
    P(() => import(`./chunk~4f755de70e.js`), [], import.meta.url)),
  ($.portuguese = () =>
    P(() => import(`./chunk~24c4d88bb0.js`), [], import.meta.url)),
  ($.romanian = () =>
    P(() => import(`./chunk~12e32dc158.js`), [], import.meta.url)),
  ($.russian = () =>
    P(() => import(`./chunk~826f71c3ec.js`), [], import.meta.url)),
  ($.sc_schinese = () =>
    P(() => import(`./chunk~c4ad2ce98c.js`), [], import.meta.url)),
  ($.schinese = () =>
    P(() => import(`./chunk~4471e18869.js`), [], import.meta.url)),
  ($.spanish = () =>
    P(() => import(`./chunk~2c71f9094b.js`), [], import.meta.url)),
  ($.swedish = () =>
    P(() => import(`./chunk~e0ccea11c6.js`), [], import.meta.url)),
  ($.tchinese = () =>
    P(() => import(`./chunk~4e11e578eb.js`), [], import.meta.url)),
  ($.thai = () =>
    P(() => import(`./chunk~6b7e311b97.js`), [], import.meta.url)),
  ($.turkish = () =>
    P(() => import(`./chunk~19221a0d49.js`), [], import.meta.url)),
  ($.ukrainian = () =>
    P(() => import(`./chunk~89f3b39bfb.js`), [], import.meta.url)),
  ($.vietnamese = () =>
    P(() => import(`./chunk~bdb7ec474f.js`), [], import.meta.url)));
async function zH(e) {
  if ($[e]) return await $[e]();
}
var BH = _n(zH),
  VH = z.createContext(void 0);
function HH() {
  return z.useContext(VH) ?? ge();
}
var UH = t({
    AlbumCoverImage: () => MU,
    AlbumTitle: () => NU,
    AppSummaryWidgetCtn: () => dU,
    CarouselCapsuleAnimated: () => uU,
    CarouselCapsuleBordered: () => lU,
    CarouselDisplay: () => qH,
    CarouselPage: () => GU,
    CarouselSalePageCapsule: () => fU,
    CarouselSalePageCapsuleTall: () => pU,
    CustomStyle_together: () => _U,
    DefaultCreatorCtn: () => YU,
    DesktopTabs: () => zU,
    DisabledBackground: () => ZH,
    EmptySectionPreview: () => DU,
    EventSectionViewAllCtn: () => XU,
    HorizontalScrollInDragForceCursor: () => UU,
    Hover: () => rU,
    JumpToButton: () => oU,
    JumpToSection: () => aU,
    JumpedTo: () => iU,
    LinkCapsule: () => OU,
    LoginButton: () => tU,
    MobileTabSelector: () => FU,
    MobileTabSelectorButton: () => LU,
    MobileTabSelectorDropDown: () => BU,
    MobileTabSelectorOption: () => VU,
    MobileTabSelectorShortcut: () => RU,
    NoTopPadding: () => YH,
    SaleBackground: () => bU,
    SaleBroadcastCtn: () => mU,
    SaleBroadcastSection: () => WU,
    SaleHeaderContainer: () => XH,
    SaleNewSizing: () => vU,
    SaleOuterContainer: () => gU,
    SaleOuterTopMargin: () => hU,
    SaleOverlay: () => cU,
    SaleOverlayCtn: () => sU,
    SalePageBroadcastContextHover: () => jU,
    SalePageLogoSet: () => yU,
    SaleSection: () => KH,
    SaleSectionBackgroundImageGroupEdit: () => ZU,
    SaleSectionContainer: () => CU,
    SaleSectionCtn: () => JH,
    SaleSectionLivePreview: () => nU,
    SaleSectionLoginPrompt: () => eU,
    SaleSectionSubtext: () => SU,
    SaleSectionTabListContainer: () => PU,
    SaleSectionTabs: () => QH,
    SaleSectionTitleCtn: () => xU,
    SaleTabLabel: () => JU,
    SaleViewAll: () => $H,
    TabButton: () => qU,
    TabButtonsCtn: () => KU,
    TabContentsContainer: () => HU,
    Visible: () => IU,
    default: () => QU,
    "duration-app-launch": () => WH,
    fullscreen_bg: () => kU,
    fullscreen_bg_video: () => AU,
    narrowWidth: () => GH,
    preview_placeholder_section: () => EU,
    vr_required: () => TU,
    vr_supported: () => wU,
  }),
  WH = `800ms`,
  GH = `500px`,
  KH = `_5uN-ZG0AdmQ-`,
  qH = `_1z-QD5sz6XA-`,
  JH = `BjU45TzF-sA-`,
  YH = `QYv8zbj--Ck-`,
  XH = `fgKHCBFFyCk-`,
  ZH = `iZzul86MCHw-`,
  QH = `A3eo6r5OuXY-`,
  $H = `dp33i3JEBBw-`,
  eU = `FyvPogThu-8-`,
  tU = `QSC5IqjmQXQ-`,
  nU = `_4V-KrqNLPmQ-`,
  rU = `_5ogwM4KIkcI-`,
  iU = `Gl6SVCjLh9k-`,
  aU = `d2m-PEeOVmY-`,
  oU = `BxPO-muNnTI-`,
  sU = `aOA-KMNFbEE-`,
  cU = `QYd-JimFMMk-`,
  lU = `_9PVhWUbR3rk-`,
  uU = `giUOrzG6Ujs-`,
  dU = `zct4M8EzfNo-`,
  fU = `FolDBzXMW2I-`,
  pU = `E6LHQcm-39c-`,
  mU = `_0pSO3K-0Hs4-`,
  hU = `_9D3431c8-XE-`,
  gU = `G-t-vlNhbRM-`,
  _U = `BFlA7ucDxBk-`,
  vU = `_5NaHSqwUb-k-`,
  yU = `RG63SnOtLk0-`,
  bU = `XuI82j9l9uk-`,
  xU = `_29km0evCwsI-`,
  SU = `pL8IDIWBDg8-`,
  CU = `EbBLppwfKjc-`,
  wU = `EGwn6tH7C3A-`,
  TU = `p8u1MHwjP-M-`,
  EU = `h-z1TiT2EHc-`,
  DU = `lVRRRKgBwVY-`,
  OU = `DH6P5MgdIW4-`,
  kU = `v-DWOHY9-II-`,
  AU = `tXTiGEi7jtU-`,
  jU = `v2nIqzREAqo-`,
  MU = `YWSh4uKYrRw-`,
  NU = `rSkuhIlNBLw-`,
  PU = `_9tUDGLmuFv4-`,
  FU = `_4AjIhoHXOgI-`,
  IU = `Q-Ikm9aXlIY-`,
  LU = `j3KNKPgNrvY-`,
  RU = `_0TmI5Lz4Zkc-`,
  zU = `_6VXiW9d8-lQ-`,
  BU = `t274EZYLkbA-`,
  VU = `gni2wFLBcSk-`,
  HU = `Rbv-UgEUoaw-`,
  UU = `OvCIJMOKBQ8-`,
  WU = `_0lI2wcrU0XU-`,
  GU = `CuZwu-t3ukQ-`,
  KU = `bevr-bUWbuk-`,
  qU = `yedrb7j8BiU-`,
  JU = `hAnG1YoY-8k-`,
  YU = `u8sMh8Um98Q-`,
  XU = `JuZBiq95wYE-`,
  ZU = `oh4R-N9DrSA-`,
  QU = {
    "duration-app-launch": `800ms`,
    narrowWidth: GH,
    SaleSection: KH,
    CarouselDisplay: qH,
    SaleSectionCtn: JH,
    NoTopPadding: YH,
    SaleHeaderContainer: XH,
    DisabledBackground: ZH,
    SaleSectionTabs: QH,
    SaleViewAll: $H,
    SaleSectionLoginPrompt: eU,
    LoginButton: tU,
    SaleSectionLivePreview: nU,
    Hover: rU,
    JumpedTo: iU,
    JumpToSection: aU,
    JumpToButton: oU,
    SaleOverlayCtn: sU,
    SaleOverlay: cU,
    CarouselCapsuleBordered: lU,
    CarouselCapsuleAnimated: uU,
    AppSummaryWidgetCtn: dU,
    CarouselSalePageCapsule: fU,
    CarouselSalePageCapsuleTall: pU,
    SaleBroadcastCtn: mU,
    SaleOuterTopMargin: hU,
    SaleOuterContainer: gU,
    CustomStyle_together: _U,
    SaleNewSizing: vU,
    SalePageLogoSet: yU,
    SaleBackground: bU,
    SaleSectionTitleCtn: xU,
    SaleSectionSubtext: SU,
    SaleSectionContainer: CU,
    vr_supported: wU,
    vr_required: TU,
    preview_placeholder_section: EU,
    EmptySectionPreview: DU,
    LinkCapsule: OU,
    fullscreen_bg: kU,
    fullscreen_bg_video: AU,
    SalePageBroadcastContextHover: jU,
    AlbumCoverImage: MU,
    AlbumTitle: NU,
    SaleSectionTabListContainer: PU,
    MobileTabSelector: FU,
    Visible: IU,
    MobileTabSelectorButton: LU,
    MobileTabSelectorShortcut: RU,
    DesktopTabs: zU,
    MobileTabSelectorDropDown: BU,
    MobileTabSelectorOption: VU,
    TabContentsContainer: HU,
    HorizontalScrollInDragForceCursor: UU,
    SaleBroadcastSection: WU,
    CarouselPage: GU,
    TabButtonsCtn: KU,
    TabButton: qU,
    SaleTabLabel: JU,
    DefaultCreatorCtn: YU,
    EventSectionViewAllCtn: XU,
    SaleSectionBackgroundImageGroupEdit: ZU,
  };
function $U(e) {
  let t = Br.GetELanguageFallback(e);
  return e == t ? `${e}` : `${e}_${t}`;
}
function eW(e) {
  return e ? _e(new lr(e.clanSteamID64), e.event) : null;
}
async function tW(e, t) {
  let n = new URLSearchParams();
  (e.clanAccountID && n.set(`clan_accountid`, String(e.clanAccountID)),
    e.appid && n.set(`appid`, String(e.appid)),
    e.eventGID && n.set(`event_gid`, e.eventGID),
    e.announcementGID && n.set(`announcement_gid`, e.announcementGID),
    n.set(`lang_list`, $U(t)),
    n.set(`last_modified_time`, `0`),
    n.set(`origin`, window.location.origin));
  let r = L.STORE_BASE_URL + `events/ajaxgetpartnerevent?` + n.toString(),
    i = await fetch(r);
  if (!i.ok) throw Error(`${r} answered ${i.status}`);
  let a = await i.json();
  return a.success !== 1 || !a.event?.clan_steamid
    ? null
    : { clanSteamID64: a.event.clan_steamid, event: a.event };
}
function nW(e, t) {
  return [
    `LinkedPartnerEvent`,
    e.clanAccountID,
    e.appid,
    e.eventGID,
    e.announcementGID,
    t,
  ];
}
function rW(e) {
  return (
    !!e &&
    (!!e.clanAccountID || !!e.appid) &&
    (!!e.eventGID || !!e.announcementGID)
  );
}
function iW(e, t) {
  let n = rW(e);
  return {
    queryKey: nW(e ?? {}, t),
    queryFn: () => tW(e ?? {}, t),
    select: eW,
    enabled: n,
    staleTime: 36e5,
    retry: !1,
  };
}
function aW(e) {
  let t = Be(L.LANGUAGE);
  return p(iW(e, t));
}
function oW(e) {
  return e?.clan_steamid ? _e(new lr(e.clan_steamid), e) : null;
}
var sW = 100;
async function cW(e, t) {
  let n = new URLSearchParams();
  (n.set(`event_gids`, [...new Set(e)].sort().join(`,`)),
    n.set(`lang_list`, $U(t)),
    n.set(`origin`, location.origin));
  let r =
      L.STORE_BASE_URL + `events/ajaxgetbatchedpartnerevent/?` + n.toString(),
    i = await fetch(r);
  if (i.status === 204) return e.map(() => null);
  if (!i.ok) throw Error(`${r} answered ${i.status}`);
  let a = await i.json(),
    o = new Map((a.events ?? []).map((e) => [e.gid, e]));
  return e.map((e) => o.get(e) ?? null);
}
function lW(e) {
  return g(
    [`PublicPartnerEventBrowser`, e],
    () => new SH.default((t) => cW(t, e), { maxBatchSize: sW, cache: !1 }),
  );
}
function uW(e, t) {
  return [`PublicPartnerEvent`, e, t];
}
function dW(e, t, n) {
  return {
    queryKey: uW(e, t),
    queryFn: async () => (n ? n.load(e) : (await cW([e], t))[0]),
    select: oW,
    enabled: !!e,
    staleTime: 6e5,
  };
}
function fW(e) {
  let t = Be(L.LANGUAGE),
    n = lW(t);
  return p(dW(e, t, n));
}
function pW(e, t, n) {
  return XJ(t, e, n)?.strTagName || void 0;
}
function mW(e, t, n, r) {
  let i = n == 1 || n == 3 || n == 4,
    a = () => {
      let t = Te(e.smart_section_creator_listid);
      return t
        ? i
          ? I(`#Sale_CreatorList_Section_Editor_title`, t)
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
          let { nSectionIndex: n, nNumSections: r } = cq(e, t);
          return I(`#Sale_PersonalizedCarousel_Section_Editor_title`, n + 1, r);
        }
        let o = pW(e, t, r);
        if (!o && n == 2) {
          let { nSectionIndex: n, nNumSections: r } = cq(e, t);
          return I(`#Sale_PersonalizedCarousel_Section_Editor_title`, n + 1, r);
        }
        return o ? I(`#Sale_PersonalizedCarousel_Section_title`, o) : null;
      case `creator_list`:
        return a();
      case `discount_reason`:
        return TJ(e);
    }
  else if (e.section_type === `tabs`) return ``;
  else if (e.section_type === `curator`) {
    if (e.curator_clan_id) {
      let t = lr.InitFromClanID(e.curator_clan_id, ba.EUNIVERSE),
        n = we.GetCreatorHome(t);
      if (n) return I(`#Sale_CuratorSection_Name`, n.GetName());
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
function hW(e, t, n, r) {
  let i = mW(e, t, n, r);
  return i === null ? null : i && i.startsWith(`#`) ? I(i) : i;
}
function gW(e, t, n, r, i, a, o, s) {
  if (!e) return ``;
  if (e.section_type === `crosspromotesalepage`) return VK(s, n);
  let c = hW(e, t, i, o),
    l = ze.GetWithFallback(e.localized_label, n),
    u =
      c ||
      l ||
      (e.default_label === `#Sale_default_label` ? `` : I(e.default_label)),
    d = e.internal_section_title?.trim();
  if ((d?.length ?? 0) > 0) {
    if (i == 3 || i == 4)
      return u?.trim().length == 0 || a
        ? d
        : (0, R.jsxs)(R.Fragment, {
            children: [
              d,
              ` `,
              (0, R.jsx)($t, {
                tooltip: _i(
                  `#Sale_Section_InternalTitle_Note`,
                  (0, R.jsx)(`br`, {}),
                  u,
                ),
              }),
            ],
          });
    if (i == 1)
      return u?.trim().length == 0 || a
        ? d
        : (0, R.jsxs)(R.Fragment, {
            children: [
              d,
              ` `,
              (0, R.jsx)(`span`, {
                children: _i(`#Sale_Section_InternalTitle_Actual`, u),
              }),
            ],
          });
  }
  let f = ze.GetWithFallback(e.localized_label_image, n);
  if (!a && f) {
    let e = S.GenerateURLFromHashAndExt(r, f);
    return (0, R.jsx)(`img`, { loading: `lazy`, src: e, alt: u });
  }
  return u;
}
function _W(e, t, n) {
  if (b(e.section_type))
    switch (y(e)) {
      case `personalized_carousel`:
        let r = pW(e, t, n);
        return r ? I(`#Sale_PersonalizedCarousel_Section_subtitle`, r) : null;
      case `creator_list`:
        return Ce(e.smart_section_creator_listid) ?? null;
      case `discount_reason`:
        return EJ(e);
    }
  return null;
}
function vW(e, t, n, r) {
  let i = _W(e, t, r);
  return i === null
    ? ze.GetWithFallback(e.localized_subtitle, n) ||
        (!e.default_subtitle || e.default_subtitle === `#Sale_default_subtitle`
          ? ``
          : I(e.default_subtitle))
    : i && i.startsWith(`#`)
      ? I(i)
      : i;
}
var yW = `dYYkud-Jf3s-`,
  bW = `zZo1XshRYmQ-`,
  xW = `RfHJSn8AdQE-`,
  SW = `D8GFuSKNhX0-`,
  CW = `woc2JepJIek-`;
function wW(e, t) {
  return (
    ze.GetWithFallback(e.localized_label, t) ||
    (e.default_label === `#Sale_default_label` ? `` : I(e.default_label))
  );
}
function TW(e) {
  if (b(e.section_type))
    switch (y(e)) {
      case `deck_topplayed`:
        return L.STORE_BASE_URL + `charts/steamdecktopplayed`;
    }
  return e.label_link;
}
function EW(e) {
  let t,
    n,
    r = !1;
  return (
    e.label_link_style === `button`
      ? ((t = I(`#Sale_SectionLink_BrowseAll`)), (r = !0))
      : e.label_link_style === `browseall`
        ? ((t = I(`#Sale_SectionLink_BrowseAll`)),
          (n = F(xW, `SaleSectionLabelLinkButton`)))
        : y(e) === `deck_topplayed` &&
          ((t = I(`#EventBrowse_MoreEventsBtn`)),
          (n = F(xe, `SaleSectionLabelLinkButton`))),
    { strLinkButtonLabel: t, strLinkButtonClasses: n, bSmallButton: r }
  );
}
var DW = c((e) => {
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
    p = Wr(),
    m = GW(),
    h = f !== void 0,
    { data: g } = fW(h ? void 0 : kK(t)),
    _ = (h ? f : g) ?? void 0,
    v = e.link || TW(t) || Se(_);
  if (
    (z.useEffect(() => {
      u?.(v);
    }, [v, u]),
    t.section_type == `title_image` && t.title_image_selected === `image`)
  )
    return null;
  let y = a || gW(t, n, r, n.clanSteamID.GetAccountID(), m.eLocation, !1, d, _);
  if (!y) return null;
  let b = o || vW(t, n, r, d),
    x = (0, R.jsxs)(`div`, {
      className: F(be, `SaleSectionHeader`),
      style: OW(t, n, r),
      children: [
        t.test_show_on_valve_ip_only &&
          (0, R.jsx)(`div`, {
            className: `JrlXbYAw30w-`,
            children: `(VO)\xA0`,
          }),
        y,
      ],
    }),
    S = (0, R.jsx)(`div`, {
      className: F(be, ve, `SaleSectionSubtitle`),
      style: kW(t, n, r),
      children: b,
    }),
    C = null;
  if ((v?.length ?? 0) > 0) {
    let {
      strLinkButtonLabel: e,
      strLinkButtonClasses: n,
      bSmallButton: r,
    } = EW(t);
    (e &&
      (C =
        p && c
          ? (0, R.jsx)(j, { label: e, shown: !!s, button: l })
          : r
            ? (0, R.jsx)(`div`, {
                className: F(XU, SW),
                children: (0, R.jsx)(iY, {
                  url: v,
                  children: (0, R.jsx)(Ye, { children: e }),
                }),
              })
            : (0, R.jsx)(iY, { url: v, className: n, children: e })),
      (x = (0, R.jsx)(iY, { url: v, bFocusable: !C, children: x })));
  }
  return (0, R.jsxs)(`div`, {
    className: F(yW, `SaleSectionLabelCtn`),
    children: [
      (0, R.jsxs)(`div`, { className: CW, children: [x, !!b && S] }),
      (0, R.jsxs)(`div`, {
        className: bW,
        children: [
          !!i &&
            (0, R.jsx)(Jn, {
              className: `pL8IDIWBDg8-`,
              toolTipContent: I(`#Sale_HiddenItem_Tooltip`),
              children: (0, R.jsx)(`a`, {
                href: L.STORE_BASE_URL + `account/preferences`,
                children: _i(
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
function OW(e, t, n) {
  return {
    fontFamily: t.jsondata.sale_font ? AW(t.jsondata.sale_font, n) : void 0,
    fontWeight: t.jsondata.sale_font_weight,
    fontSize: `${t.jsondata.sale_section_font_size}px`,
    textTransform: t.jsondata.sale_section_disable_capitalize
      ? `initial`
      : void 0,
    color: e.label_color,
  };
}
function kW(e, t, n) {
  return {
    fontFamily: t.jsondata.sale_font ? AW(t.jsondata.sale_font, n) : void 0,
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
function AW(e, t) {
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
function jW(e, t, n, r, i) {
  let a = gW(t, r, n, r.clanSteamID.GetAccountID(), e);
  if (a) return a;
  let o = I(`#Sale_Section_Header`, i + 1),
    s = `#Sale_Section_Type_` + (t?.section_type || `unknowntype`),
    c = I(s);
  if (c !== s) return `${o} (${c})`;
}
function MW(e, t, n) {
  return `linear-gradient(${n ?? 0}deg, ${e || `transparent`} 0%, ${t || `transparent`} 100%)`;
}
function NW(e) {
  return MW(
    e.background_gradient_bottom,
    e.background_gradient_top,
    e.background_gradient_angle,
  );
}
function PW(e, t, n) {
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
        backgroundImage: NW(e) + r,
        backgroundRepeat: e.background_repeat,
        backgroundSize: e.background_repeat == `coverBlur` ? `cover` : ``,
        outlineStyle: e.border_color && e.border_width ? `solid` : void 0,
        outlineColor: e.border_color,
        outlineWidth: e.border_width ? `${e.border_width}px` : void 0,
      }
    : {};
}
function FW(e, t) {
  return e
    ? e.disable_background && !t
      ? { paddingLeft: 0, paddingRight: 0 }
      : e.background_gradient_bottom ||
          e.background_gradient_top ||
          e.background_repeat ||
          e.border_color ||
          e.border_width
        ? {
            background: NW(e),
            backgroundRepeat: e.background_repeat,
            outlineStyle: e.border_color && e.border_width ? `solid` : void 0,
            outlineColor: e.border_color,
            outlineWidth: e.border_width ? `${e.border_width}px` : void 0,
          }
        : {}
    : {};
}
function IW(e) {
  let { closeModal: t, strDescOverride: n } = e;
  return (0, R.jsx)(Tt, {
    strTitle: BH.Localize(`#LoginRedirect_Dialog_Title`),
    strDescription: n || BH.Localize(`#LoginRedirect_Dialog_Description`),
    onCancel: t,
    strOKButtonText: N.Localize(`#Button_OK`),
    onOK: () => {
      (ae(), t());
    },
  });
}
function LW(e) {
  let [t, n, r] = Rt();
  return {
    elDialogElement: (0, R.jsx)(ka, {
      active: t,
      children: (0, R.jsx)(IW, { closeModal: r, strDescOverride: e }),
    }),
    fnShowLogonDialog: n,
  };
}
function RW(e) {
  let { label: t, strDialogDesc: n } = e,
    { elDialogElement: r, fnShowLogonDialog: i } = LW(n);
  return (0, R.jsxs)(R.Fragment, {
    children: [
      (0, R.jsx)(Sr, {
        onClick: i,
        children: t || N.Localize(`#Login_SignIn`),
      }),
      r,
    ],
  });
}
function zW(e, t = {}) {
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
function BW(e) {
  let { section: t, event: n } = e,
    r = Wr();
  return (0, R.jsxs)(In, {
    className: KH,
    style: PW(t, n, r),
    children: [
      (0, R.jsx)(DW, { ...e }),
      (0, R.jsxs)(In, {
        className: eU,
        children: [I(`#SalePage_LoginPrompt`), (0, R.jsx)(VW, {})],
      }),
    ],
  });
}
function VW() {
  return (0, R.jsx)(`button`, {
    onClick: () => ae(),
    className: tU,
    children: I(`#Login_SignIn`),
  });
}
var HW = { eLocation: 0 },
  UW = z.createContext(HW);
function WW(e) {
  let { children: t, location: n } = e;
  return (0, R.jsx)(UW.Provider, {
    value: { ...HW, eLocation: n ?? 0 },
    children: t,
  });
}
function GW() {
  return z.useContext(UW);
}
function KW() {
  return GW().eLocation == 2;
}
function qW() {
  let e = GW();
  return e.eLocation == 2 || e.eLocation == 1;
}
async function JW(e, t) {
  let n = Da(ba.STORE_BASE_URL, t, Dr.country_code);
  return (await (await fetch(n)).json()).rgFollowedApps || [];
}
function YW() {
  let e = Aa(),
    t = Dr.accountid;
  return p(XW(e, t));
}
function XW(e, t) {
  return {
    queryKey: $W(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await JW(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function ZW(e) {
  let { data: t } = YW();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function QW() {
  let e = h(),
    t = Dr.accountid;
  return (n, r) => {
    e.setQueryData($W(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function $W(e) {
  return [`AccountFollowApps`, e ?? 0];
}
function eG(e, t, n) {
  let r = QW(),
    i = Dr.accountid;
  return s({
    mutationKey: [`useUpdateAppFollow`, e, i, t],
    mutationFn: async () => {
      if (e == null) return;
      let r = ba.STORE_BASE_URL + `explore/followgame`,
        i = new FormData();
      (i.append(`appid`, `` + e),
        i.append(`sessionid`, Pr()),
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
      Sn();
    },
  });
}
var tG = `VULTMp1PCTw-`,
  nG = `_2vLXBykr6zc-`;
function rG(e) {
  let { id: t, snr: n, classOverride: r } = e,
    [i, a] = (0, z.useState)(!1),
    o = de(`GameHoverIgnoreButton`),
    { elDialogElement: s, fnShowLogonDialog: c } = LW(),
    l = t && `appid` in t ? t.appid : void 0,
    u = Oi(l),
    { mutateAsync: d } = M(l, !u, n),
    f = t && `appid` in t && Kt.Get().BIsGameIgnored(t.appid);
  return (0, R.jsxs)(In, {
    className: F(tG, r),
    onClick: async (e) => {
      (e.preventDefault(),
        e.stopPropagation(),
        Dr.logged_in
          ? t && `appid` in t && (a(!0), await d(), o.token.reason || a(!1))
          : c());
    },
    children: [
      (0, R.jsx)(er, {}),
      (0, R.jsx)(`div`, {
        className: F(nG, i && `vyz9N2LpdMs-`),
        children: I(f ? `#Sale_RemoveFromIgnored` : `#Sale_Ignore`),
      }),
      s,
    ],
  });
}
async function iG(e, t) {
  let n = Da(ba.STORE_BASE_URL, t, Dr.country_code),
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
function aG() {
  let e = Aa(),
    t = Wi.accountid;
  return p(oG(e, t));
}
function oG(e, t) {
  return {
    queryKey: fG(t),
    queryFn: async () => {
      let n = new Map();
      if (t)
        try {
          (await iG(e, t)).forEach((e) => n.set(e.clanid, e));
        } catch (e) {
          console.error(`GetCuratorAffinityQuery`, e);
        }
      return n;
    },
    enabled: !!t,
  };
}
function sG(e) {
  let { data: t } = aG();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.followed;
}
function cG(e) {
  let { data: t } = aG();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.ignored;
}
function lG() {
  return L.EREALM != xt.k_ESteamRealmChina;
}
function uG() {
  return L.EREALM != xt.k_ESteamRealmChina;
}
function dG() {
  let e = h(),
    t = Wi.accountid;
  return (n, r, i, a) => {
    e.setQueryData(fG(t), (e) => {
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
function fG(e) {
  return [`CuratorAffinityQueryKey`, e ?? 0];
}
var pG = (function (e) {
  return (
    (e[(e.k_ECuratorFollow = 1)] = `k_ECuratorFollow`),
    (e[(e.k_ECuratorUnfollow = 2)] = `k_ECuratorUnfollow`),
    (e[(e.k_ECuratorIgnore = 3)] = `k_ECuratorIgnore`),
    (e[(e.k_ECuratorUnignore = 4)] = `k_ECuratorUnignore`),
    e
  );
})({});
function mG(e, t) {
  let n = dG(),
    r = Dr.accountid;
  return s({
    mutationKey: [`useUpdateCuratorAffinity`, e, r, t],
    mutationFn: async () => {
      if (e == null) return !1;
      let n = t == pG.k_ECuratorFollow || t == pG.k_ECuratorUnfollow,
        r = t == pG.k_ECuratorFollow || t == pG.k_ECuratorIgnore,
        i = `${ba.STORE_BASE_URL}curators/${n ? `ajaxfollow/` : `ajaxignore/`}`,
        a = new FormData();
      (a.append(`clanid`, `` + e),
        a.append(`sessionid`, Pr()),
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
        let r = t == pG.k_ECuratorUnfollow || t == pG.k_ECuratorUnignore;
        n(
          t == pG.k_ECuratorFollow ? [{ clanAccountID: e }] : void 0,
          t == pG.k_ECuratorIgnore ? [{ clanAccountID: e }] : void 0,
          r ? [{ clanAccountID: e }] : void 0,
        );
      }
    },
    onError: (r) => {
      if (e != null) {
        let i = t == pG.k_ECuratorFollow || t == pG.k_ECuratorIgnore;
        n(
          t == pG.k_ECuratorUnfollow ? [{ clanAccountID: e }] : void 0,
          t == pG.k_ECuratorUnignore ? [{ clanAccountID: e }] : void 0,
          i ? [{ clanAccountID: e }] : void 0,
          r ? [{ clanAccountID: e, is_creator: !0 }] : void 0,
        );
      }
    },
    onSuccess: (t) => {
      (t &&
        e &&
        n(void 0, void 0, void 0, [{ clanAccountID: e, is_creator: !0 }]),
        Sn());
    },
  });
}
var hG = `QOSk1wMadGg-`,
  gG = `DH1jwyMHeXo-`,
  _G = `J5g1CfUd95U-`,
  vG = `_3IPvWkyhZzM-`,
  yG = `jB1S5EvgUjI-`,
  bG = `iWO-8zu8RAA-`,
  xG = `MTgAGoNV5vg-`,
  SG = `LEvP9jHHfL8-`,
  CG = `K9ZawxnkJcI-`,
  wG = `OlPIY4AN-5s-`,
  TG = `_7UT3Pb65ni0-`,
  EG = `sT74IdnPxY8-`,
  DG = `ZTz7p5tpqNU-`,
  OG = `ct7kvDppls0-`,
  kG = `SG9Xn5tF5a0-`,
  AG = `clYVRh6K2Ig-`,
  jG = `k6MwDwdCJTU-`,
  MG = `mnFUxHcas-0-`,
  NG = `_6lWvo8crYSU-`,
  PG = `r3PgsXSGPho-`,
  FG = `EWCiFLRR-T8-`,
  IG = `GEroszngeLM-`,
  LG = (e) => {
    let t = L.HELP_BASE_URL + `wizard/HelpWithLimitedAccount`;
    return (0, R.jsx)(Tt, {
      strTitle: I(`#Informational_Message`),
      onCancel: e.closeModal,
      onOK: e.closeModal,
      bAlertDialog: !0,
      children: (0, R.jsx)(`div`, {
        children: _i(
          e.strTokenOverride || `#User_LimitedAccount`,
          (0, R.jsx)(`a`, {
            href: t,
            target: L.IN_CLIENT ? void 0 : `_blank`,
            rel: `noopener noreferrer`,
            children: I(`#User_LimitedAccount_UrlInfo`),
          }),
        ),
      }),
    });
  },
  RG = (e) => {
    let {
        className: t,
        bIgnored: n,
        bApplyingFollowing: r,
        bFollowing: i,
        onFollowClick: a,
        followType: o,
      } = e,
      { elDialogElement: s, fnShowLogonDialog: c } = LW();
    if (!lG()) return null;
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
      ? (0, R.jsxs)(R.Fragment, {
          children: [
            (0, R.jsx)(Mt, {
              toolTipContent: !n && !i ? l : void 0,
              children: (0, R.jsxs)(va, {
                className: F(ye, PG, `FollowButton`, t, i ? `Followed` : ``),
                onClick: () => {
                  Wi.logged_in ? a() : c();
                },
                children: [
                  r && (0, R.jsx)(De, { size: 15 }),
                  !r && (i || n) && (0, R.jsx)(qi, {}),
                  (0, R.jsx)(`div`, {
                    className: F(FG, `FollowBtnText`),
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
function zG(e) {
  let {
      followType: t,
      fnSuccessCallback: n,
      clanAccountID: r,
      className: i,
    } = e,
    [a, o] = z.useState(!1),
    { data: s } = ie(t ? void 0 : r),
    c = sG(r),
    l = cG(r),
    { mutateAsync: u } = mG(r, c ? pG.k_ECuratorUnfollow : pG.k_ECuratorFollow),
    [d, f, p] = Rt(),
    m = z.useCallback(async () => {
      c != null && (o(!0), await u(), o(!1), n?.(c));
    }, [c, n, u]);
  return (0, R.jsxs)(R.Fragment, {
    children: [
      (0, R.jsx)(RG, {
        className: i,
        bIgnored: !!l,
        bFollowing: !!c,
        bApplyingFollowing: a,
        onFollowClick: () => {
          Wi.is_limited ? f() : m();
        },
        followType: t ?? (s?.is_creator_home ? `creatorhome` : `steamcurator`),
      }),
      (0, R.jsx)(ka, {
        active: d,
        children: (0, R.jsx)(LG, { closeModal: p }),
      }),
    ],
  });
}
function BG(e) {
  let { appid: t, className: n } = e,
    [r, i] = z.useState(!1),
    a = ZW(t),
    o = Oi(t),
    s = Ni(),
    c = Bi.GetSNRLinkParam(s),
    { mutateAsync: l } = eG(t, !a, c),
    u = z.useCallback(async () => {
      (i(!0), await l(), i(!1));
    }, [l]);
  return (0, R.jsx)(RG, {
    className: n,
    bIgnored: !!o,
    bFollowing: !!a,
    bApplyingFollowing: r,
    onFollowClick: u,
    followType: `app`,
  });
}
function VG(e) {
  let {
      nCreatorAccountID: t,
      classOverride: n,
      styleOverride: r,
      followType: i,
    } = e,
    { data: a } = ie(t),
    { data: o } = Wa(t);
  if (!a || !o) return null;
  let s = a.avatar_medium_url || a.avatar_full_url;
  return (
    (s ||= Ee(void 0, `medium`, `web`)),
    (0, R.jsxs)(`div`, {
      className: F(Yc, n),
      style: r,
      children: [
        (0, R.jsx)(`a`, {
          href: qa(o, `developer`),
          children: (0, R.jsx)(`img`, { src: s, alt: a.group_name }),
        }),
        (0, R.jsx)(zG, { clanAccountID: t, followType: i }),
      ],
    })
  );
}
var HG = 5500,
  UG = 2e3,
  WG = 10;
function GG(e, t) {
  return e && t && t.main_capsule
    ? {
        stringifyID: `maincap_${e.id}_${e.item_type}`,
        rctImage: (0, R.jsx)(
          `img`,
          {
            className: Tc,
            loading: `lazy`,
            src: St(t, `main_capsule`),
            alt: e.name,
          },
          `fallback`,
        ),
        nDurationMs: UG,
      }
    : null;
}
function KG(e, t) {
  return {
    stringifyID: `vid_${Si(e)}`,
    rctImage: (0, R.jsx)(D, { id: e, active: !0 }),
    nDurationMs: HG,
  };
}
function qG(e) {
  let t = Nr(e);
  return Ve(e) ? void 0 : t;
}
function JG(e, t, n, r) {
  return n.slice(0, r).map((n, r) => {
    let i = Lt(n, `1920x1080`);
    return {
      stringifyID: `screen${r}_${Si(e)}`,
      rctImage: (0, R.jsx)(
        `img`,
        {
          className: Tc,
          loading: `lazy`,
          src: i,
          alt: `${t}'s screenshot ${r + 1}`,
        },
        i,
      ),
      nDurationMs: UG,
    };
  });
}
function YG(e, t, n, r, i) {
  let a = [];
  if (
    (i && a.push(KG(e, i)),
    r && r.length > 0 && a.push(...JG(e, t.name, r, WG)),
    a.length == 0 && n && n.main_capsule)
  ) {
    let e = GG(t, n);
    e && a.push(e);
  }
  return (e && a.length, a);
}
function XG(e, t, n, r, i, a) {
  let o = [];
  (a && o.push(KG(t, a)), r && r.length > 0 && o.push(...JG(e, n.name, r, WG)));
  let s = WG - (r?.length || 0);
  return (
    s > 0 && i && i.length > 0 && o.push(...JG(e, n.name, i, s)),
    e && o.length,
    o
  );
}
function ZG(e) {
  return (0, R.jsx)(`img`, {
    className: Tc,
    loading: `lazy`,
    src: Li(ue),
    alt: `default`,
  });
}
function QG(e) {
  let { id: t } = e,
    { data: n } = nr(t);
  if (!n || n.unvailable_for_country_restriction || !n.visible)
    return (0, R.jsx)(`div`, {
      className: wc,
      children: (0, R.jsx)(ZG, {}, `default`),
    });
  let r = n.item_type,
    i = n.type;
  return r == 2 || r == 1
    ? (0, R.jsx)(nK, { includeAppIDs: n.included_appids })
    : (i == 1 || i == 12) && n.related_items && n.related_items.parent_appid
      ? (0, R.jsx)(eK, {
          demoItemDefaultInfo: n,
          parentAppID: n.related_items.parent_appid,
        })
      : (0, R.jsx)($G, { storeItemDefaultData: n });
}
function $G(e) {
  let { storeItemDefaultData: t } = e,
    n = ta(t),
    r = qG(n),
    { data: i } = Pa(n),
    a = ja(n),
    o = (0, z.useMemo)(() => YG(n, t, i, a, r), [n, a, r, i, t]);
  return (0, R.jsx)(rK, { rgTrailerAndImages: o });
}
function eK(e) {
  let { demoItemDefaultInfo: t, parentAppID: n } = e,
    r = ta(t);
  return qG(r)
    ? (0, R.jsx)($G, { storeItemDefaultData: t })
    : (0, R.jsx)(tK, { demoID: r, demoItemDefaultInfo: t, parentAppID: n });
}
function tK(e) {
  let { parentAppID: t, demoID: n, demoItemDefaultInfo: r } = e,
    i = A(t),
    a = ja(n),
    o = ja(i),
    s = qG(i),
    c = (0, z.useMemo)(() => XG(n, i, r, a, o, s), [n, i, r, s, a, o]);
  return (0, R.jsx)(rK, { rgTrailerAndImages: c });
}
function nK(e) {
  let { includeAppIDs: t } = e,
    n = Er(),
    r = l({ queries: t.map((e) => Xe(n, { appid: e })) }),
    i = l({ queries: t.map((e) => at(n, { appid: e })) }),
    a = (0, z.useMemo)(
      () =>
        r
          .map((e, t) => {
            let n = i[t].data,
              r = e.data;
            return GG(n, r);
          })
          .filter((e) => !!e),
      [r, i],
    );
  return (0, R.jsx)(rK, { rgTrailerAndImages: a });
}
function rK(e) {
  let { rgTrailerAndImages: t } = e,
    n = (0, z.useRef)(0),
    r = lt(),
    [i] = z.useState(new On()),
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
    (0, R.jsx)(`div`, {
      className: wc,
      children: t?.map((e, t) =>
        (0, R.jsx)(
          `div`,
          {
            className: F({ [Tc]: !0, [Ec]: t != n.current }),
            children: e.rctImage,
          },
          `e-` + t + `-` + e.stringifyID,
        ),
      ),
    })
  );
}
var iK = `ghYXSqVPJ-U-`,
  aK = `lx1fe7xI0bg-`,
  oK = `ARp2qEoElPE-`,
  sK = `DwDon-U2yLI-`,
  cK = 150,
  lK = z.createContext(void 0);
function uK() {
  return z.useContext(lK);
}
function dK(e) {
  let {
      hoverContent: t,
      hoverProps: n,
      nDelayShowMs: r,
      nWidthMultiplier: i,
      children: a,
      className: o,
    } = e,
    s = Wr(),
    c = ce(),
    l = !s && !c,
    [u, d] = z.useState(!1),
    [f, p] = z.useState(void 0),
    m = (e) => {
      (d(!0), p(e.currentTarget));
    },
    h = () => d(!1),
    g = z.useCallback(() => d(!1), []);
  return (0, R.jsxs)(`div`, {
    "data-key": `hover div`,
    role: `button`,
    tabIndex: 0,
    className: F(iK, o),
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
        (0, R.jsx)(lK.Provider, {
          value: g,
          children: (0, R.jsx)(fK, {
            visible: u,
            target: f,
            nDelayShowMs: r,
            nWidthMultiplier: i,
            hoverProps: n,
            children: t,
          }),
        }),
      (0, R.jsx)(Hi, { children: a }),
    ],
  });
}
function fK(e) {
  let {
      hoverProps: t,
      nDelayShowMs: n = cK,
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
        if (xn()) return;
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
        minHeight: mK() == `hiding` ? void 0 : 300,
        height: mK() == `hiding` ? i.clientWidth * 1.15 * (125 / 184) : void 0,
        ...t?.style,
      },
      target: i,
    };
  return (0, R.jsx)(pK, {
    hoverProps: u,
    children: (0, R.jsx)(Hi, { children: o }),
  });
}
function pK(e) {
  let { hoverProps: t, children: n } = e,
    r = z.useCallback((e) => e?.focus(), []);
  return (0, R.jsx)(Pe, {
    ...t,
    children: (0, R.jsx)(Oe, {
      timeout: 500,
      in: !0,
      appear: !0,
      classNames: { appearActive: F(oK, Oc), enterDone: F(sK, kc) },
      children: (e) =>
        (0, R.jsx)(`div`, {
          ref: ar(e, r),
          className: aK,
          tabIndex: -1,
          children: n,
        }),
    }),
  });
}
function mK() {
  return window.sessionStorage?.getItem(hK) || `default`;
}
var hK = `DEBUG_UseNewGameHover`;
function gK(e) {
  window.sessionStorage.setItem(hK, e);
}
window.SetHoverPresentation = gK;
var _K = z.createContext(void 0);
function vK() {
  return z.useContext(_K);
}
function yK(e, t, n, r) {
  if (r === void 0 || n.length <= 1 || !v(e, t, void 0)) return n;
  let i = Je(r + (t.unique_id ?? 0));
  return Or([...n], t.random_order_top_x ?? 0, i);
}
function bK(e, t, n, r) {
  if (t.length <= n) return t;
  if (r === void 0) return t.slice(0, n);
  let i = Je(r + (e.unique_id ?? 0));
  return Or([...t], 0, i).slice(0, n);
}
async function xK(e, t) {
  let n = Da(L.STORE_BASE_URL, t, Wi.country_code);
  return ((await (await fetch(n)).json()).rgRecommendedApps ?? []).map(Number);
}
function SK() {
  let e = Aa(),
    t = Wi.accountid;
  return p(CK(e, t));
}
function CK(e, t) {
  return {
    queryKey: wK(t),
    queryFn: async () => (t ? xK(e, t) : []),
    staleTime: 6e5,
  };
}
function wK(e) {
  return [`AccountRecommendedApps`, e ?? 0];
}
var TK = 100;
function EK(e, t, n, r, i = 1) {
  return {
    queryKey: [`AccountRecommendedAppsOnSale`, r ?? 0, n.cacheScope ?? ``, i],
    queryFn: async () => {
      if (!r) return [];
      let a = (await e.fetchQuery(CK(t, r))).slice(0, TK),
        o = await Promise.all(a.map((t) => e.fetchQuery(at(n, { appid: t }))));
      return a.filter(
        (e, t) => (o[t]?.best_purchase_option?.discount_pct ?? 0) >= i,
      );
    },
    staleTime: 6e5,
  };
}
function DK(e) {
  return e.section_type === `crosspromotesalepage`
    ? (e.sale_page_cross_promo_sales ?? [])
    : [];
}
function OK(e) {
  return DK(e).map((t) => ({
    ...e,
    sale_page_cross_promo_sales: [t],
    capsules: t.capsules ?? [],
  }));
}
function kK(e) {
  return DK(e)[0]?.event_gid || void 0;
}
function AK(e) {
  return DK(e).flatMap((e) => e.event_gid || []);
}
function jK(e) {
  return DK(e)[0]?.creator_clan_account_id || void 0;
}
function MK(e) {
  return jK(e) !== void 0;
}
function NK(e) {
  return DK(e)[0]?.featured_app_tagid || void 0;
}
function PK(e) {
  return (
    e.section_type === `crosspromotesalepage` &&
    !!e.sale_page_cross_promo_side_by_side
  );
}
function FK(e) {
  return (
    e.section_type === `crosspromotesalepage` &&
    !!e.sale_page_cross_promo_in_sale_events
  );
}
function IK(e) {
  let t = DK(e);
  return t.length > 0 && t.every((e) => (e.capsules?.length ?? 0) > 0);
}
function LK(e, t) {
  return zK(e) ? (t?.BIsVisibleEvent() ? null : `missing`) : `setup`;
}
function RK(e, t) {
  return !zK(e) || (!MK(e) && !DK(e)[0]?.clan_account_id)
    ? `setup`
    : t
      ? null
      : `missing`;
}
function zK(e) {
  let t = DK(e)[0];
  return t?.creator_clan_account_id
    ? !!t.capsules?.length
    : !!t?.event_gid && (!!t.featured_app_tagid || !!t.capsules?.length);
}
function BK(e, t) {
  if (!t.length) return `creator`;
  let n = (n) =>
    t.every((t) => !!t && !!n(t)?.some((t) => t.creator_clan_account_id === e));
  return n((e) => e.franchises)
    ? `franchise`
    : n((e) => e.developers)
      ? `developer`
      : n((e) => e.publishers)
        ? `publisher`
        : `creator`;
}
function VK(e, t) {
  return e
    ? I(`#Sale_CrossPromoSale_SectionTitle`, e.GetNameWithFallback(t) ?? ``)
    : I(`#Sale_CrossPromoSale_DefaultSectionTitle`);
}
function HK(e, t) {
  let n = ze.GetWithFallback(e.localized_label, t);
  if (n) return n;
  if (e.default_label && e.default_label !== `#Sale_default_label`)
    return I(e.default_label);
}
var UK = [`logo_left`, `logo_top`, `event_capsule`],
  WK = `crosspromo_layout`;
function GK(e, t, n) {
  let r = qK(e, n);
  if (t && (r === `logo_left` || r === `logo_top`)) {
    if (!t.strBackgroundURL || !t.strLogoURL) return `event_capsule`;
    if (!KK(n)) return t.eDesktopLayout ?? `logo_left`;
  }
  return r;
}
function KK(e) {
  return UK.some((t) => t === e);
}
function qK(e, t) {
  let n = KK(t) ? t : void 0,
    r = e.sale_page_cross_promo_layout;
  return n ?? (r && r !== `sale_banner` ? r : `event_capsule`);
}
function JK(e, t) {
  let n = Br.GetELanguageFallback(t),
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
function YK(e) {
  return 3;
}
function XK(e) {
  return !0;
}
function ZK(e) {
  return e === `event_capsule`;
}
function QK(e) {
  return e.type !== `sub` && e.type !== `bundle`;
}
function $K(e, t, n, r) {
  let i = [];
  for (let a of e)
    if ((!t || t.has(a)) && !n(a) && (i.push(a), i.length >= r)) break;
  return i;
}
function eq(e, t, n, r = new Set()) {
  for (let t of e.GetSaleSections())
    if (!(!b(t.section_type) || (n && !n.BIncludeSection(t))))
      for (let e of t.capsules) QK(e) && r.add(e.id);
  for (let e of t ?? []) {
    let t = e.capsule;
    QK(t) && (!n || n.BIncludeLinkedCapsule(t)) && r.add(t.id);
  }
  return r;
}
function tq(e, t, n) {
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
var nq = 4;
function rq(e) {
  return e
    .GetSaleSections()
    .filter((e) => b(e.section_type) && y(e) === `personalized_carousel`);
}
function iq(e) {
  return rq(e)[0];
}
function aq(e) {
  if (e.appid()) return { id: e.appid(), type: `game` };
  if (e.bundleid()) return { id: e.bundleid(), type: `bundle` };
  if (e.packageid()) return { id: e.packageid(), type: `sub` };
}
function oq(e, t, n, r, i, a, o) {
  let s = rq(n),
    c = {
      rgSections: s.map((e) => ({
        eSort: e.smart_section_personalized_carousel_sort ?? 13,
        nMinItems: e.smart_section_personalized_carousel_min_items ?? nq,
        bRandomize: !!e.smart_section_personalized_carousel_randomize,
        bIncludePackages: e.smart_section_include_packages,
        bIncludeBundles: e.smart_section_include_bundles,
        bIncludeDLC: e.smart_section_include_dlc,
        nMinDiscountPercent:
          e.smart_section_min_discount_percent === void 0 ? void 0 : RJ(e),
      })),
      storePageFilter: tq(n, !!s[0]?.prioritize_discounts, r),
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
    queryFn: () => sq(e, t, c, i, o),
    staleTime: 1 / 0,
  };
}
async function sq(e, t, n, r, i) {
  if (!r || n.rgSections.length === 0) return [];
  let a = hi.Init(Ai);
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
  (a.Body().set_context(ha(t)),
    a.Body().set_filters(Jr(n.storePageFilter, !1)),
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
  let o = await _r.GetItemsByUserRecommendedTags(e, a);
  if (o.GetEResult() != 1)
    throw Error(`GetItemsByUserRecommendedTags failed: ${o.GetEResult()}`);
  return o
    .Body()
    .sections()
    .map((e) => ({
      strTagName: e.tag_name() ?? ``,
      rgCapsules: e.store_item_ids().flatMap((e) => {
        let t = aq(e);
        return t ? [t] : [];
      }),
    }));
}
function cq(e, t) {
  let n = t
    .GetSaleSections()
    .filter((e) => b(e.section_type) && y(e) == `personalized_carousel`);
  if (n.length == 0) return { nNumSections: 0, nSectionIndex: -1 };
  let r = n.findIndex((t) => t.unique_id == e.unique_id);
  return { nNumSections: n.length, nSectionIndex: r };
}
var lq = 1778623200;
function uq(e, t) {
  let n = !1;
  return (
    e && e.GetEventType() == 36
      ? (n = !0)
      : e && t && t.is_creator_home && (n = dq(e, t)),
    n
  );
}
function dq(e, t) {
  return !!t && !!t.is_creator_home && (e.createTime ?? 0) > lq;
}
function fq(e) {
  return y(e) === `frame_compatibility` ? `frame` : `deck`;
}
function pq(e, t) {
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
var mq = [
    {
      nOptInTagID: 9,
      rgChildren: [
        { nTagID: ft },
        { nTagID: di },
        { nTagID: Wt },
        { nTagID: st },
        { nTagID: fa },
        { nTagID: Ht },
        { nTagID: Ki },
        { nTagID: An },
        { nTagID: $n },
      ],
    },
    {
      nOptInTagID: 19,
      rgChildren: [
        { nTagID: Gn },
        { nTagID: Ke },
        { nTagID: vr },
        { nTagID: un },
        { nTagID: pn },
        { nTagID: ui },
        { nTagID: Yt },
        { nTagID: Tn },
        { nTagID: Ca },
      ],
    },
    {
      nOptInTagID: 21,
      rgChildren: [
        { nTagID: Gn },
        { nTagID: wt },
        { nTagID: Zr },
        { nTagID: sa },
        { nTagID: bn },
        { nTagID: fn },
        { nTagID: xr },
        { nTagID: Ln },
      ],
    },
    {
      nOptInTagID: 122,
      rgChildren: [
        { nTagID: un },
        { nTagID: an },
        { nTagID: ma },
        { nTagID: $e },
        { nTagID: jn },
        { nTagID: fa },
        { nTagID: Ea },
      ],
    },
    {
      nOptInTagID: 599,
      rgChildren: [
        { nTagID: Ti },
        { nTagID: hr },
        { nTagID: Nn },
        { nTagID: Xt },
        { nTagID: yn },
        { nTagID: jt },
        { nTagID: Ne },
        { nTagID: Me },
        { nTagID: Rn },
        { nTagID: ji },
        { nTagID: xr },
      ],
    },
    {
      nOptInTagID: 699,
      rgChildren: [
        { nTagID: vr },
        { nTagID: dn },
        { nTagID: la },
        { nTagID: ti },
        { nTagID: Ct },
      ],
    },
    {
      nOptInTagID: 701,
      rgChildren: [
        { nTagID: vr },
        { nTagID: jt },
        { nTagID: 599 },
        { nTagID: Qr },
        { nTagID: _a },
        { nTagID: kt },
        { nTagID: yr },
      ],
    },
    {
      nOptInTagID: ir,
      rgChildren: [
        { nTagID: _t },
        { nTagID: gt },
        { nTagID: Pi },
        { nTagID: la },
        { nTagID: Ar },
      ],
    },
    {
      nOptInTagID: ia,
      rgChildren: [
        { nTagID: Tr },
        { nTagID: vt },
        { nTagID: or },
        { nTagID: wr },
        { nTagID: vn },
        { nTagID: fn },
        { nTagID: Ar },
      ],
    },
    {
      nOptInTagID: Ii,
      rgChildren: [
        { eContentDescriptor: 3 },
        { nTagID: hr },
        { nTagID: zt },
        { nTagID: Ma },
        { nTagID: qn },
        { nTagID: wr },
        { nTagID: Vi },
      ],
    },
  ],
  hq = [
    {
      nTagID: zn,
      rgChildren: [
        { nTagID: 122 },
        { nTagID: 9 },
        { nTagID: 597 },
        { nTagID: 19 },
        { nTagID: 21 },
        { nTagID: 599 },
        { nTagID: ri },
      ],
    },
    {
      nTagID: nn,
      rgChildren: [
        { nTagID: 122 },
        { nTagID: 9 },
        { nTagID: 597 },
        { nTagID: 19 },
        { nTagID: 21 },
        { nTagID: 599 },
        { nTagID: qr },
        { nTagID: Hr },
      ],
    },
    {
      nTagID: Ur,
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
      nTagID: Cn,
      rgChildren: [
        { nTagID: dr },
        { nTagID: 19 },
        { nTagID: ra },
        { nTagID: Vi },
        { nTagID: xr },
      ],
    },
    {
      nTagID: fr,
      rgChildren: [
        { nTagID: ia },
        { nTagID: En },
        { nTagID: 599 },
        { nTagID: 21 },
        { nTagID: fn },
        { nTagID: Ot },
        { nTagID: Ft },
        { nTagID: jt },
      ],
    },
    {
      nTagID: wr,
      rgChildren: [
        { nTagID: 21 },
        { nTagID: ia },
        { nTagID: bn },
        { nTagID: Zi },
        { nTagID: Oa },
      ],
    },
    {
      eContentDescriptor: 3,
      rgChildren: [
        { nTagID: Ii },
        { nTagID: zt },
        { nTagID: ia },
        { nTagID: Ge },
        { nTagID: kn },
      ],
    },
  ],
  gq = [
    {
      strOptInTag: `option_58733`,
      rgChildren: [
        { nTagID: pa },
        { nTagID: vi },
        { nTagID: br },
        { nTagID: 128 },
        { nTagID: Hn },
      ],
    },
    {
      strOptInTag: `option_40066`,
      rgChildren: [
        { nTagID: pa },
        { nTagID: vi },
        { nTagID: br },
        { nTagID: Hn },
      ],
    },
    { strAppType: `software` },
    { strFeature: `vr` },
    { strFeature: `mac` },
  ],
  _q = {
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
  vq = [
    {
      strClass: `genre`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Genre`,
      rgNodes: mq,
    },
    {
      strClass: `theme`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Theme`,
      rgNodes: hq,
    },
    {
      strClass: `feature`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Feature`,
      rgNodes: gq,
    },
  ];
function yq(e) {
  return e?.rgNodes
    ? e.rgNodes
    : (vq.find((t) => t.strClass === e?.tag_class)?.rgNodes ?? []);
}
function bq(e) {
  return e.nTagID
    ? String(e.nTagID)
    : e.nOptInTagID || e.strOptInTag
      ? `optin:` + Oq(e)
      : e.eContentDescriptor
        ? `descriptor:` + e.eContentDescriptor
        : e.strFeature
          ? `feature:` + e.strFeature
          : `apptype:` + e.strAppType;
}
function xq(e) {
  if (e.strFeature) return _q[e.strFeature];
  if (e.strAppType) return `#AppTypeLabel_` + e.strAppType;
}
function Sq(e) {
  if (e)
    return e.strChildKey
      ? e.strParentKey + `,` + e.strChildKey
      : e.strParentKey;
}
var Cq = `tabtag`,
  wq = `tabsubtag`;
function Tq(e, t) {
  if (e) return { strParentKey: e, strChildKey: t || void 0 };
}
function Eq(e) {
  return { [Cq]: e?.strParentKey ?? null, [wq]: e?.strChildKey ?? null };
}
function Dq(e, t, n) {
  let r = () => {
    if (!t?.bNoAllOption) return;
    let e = yq(t).find(n);
    return e ? { strParentKey: bq(e) } : void 0;
  };
  if (!e) return r();
  let i = Aq(yq(t), e.strParentKey);
  if (!i || !n(i)) return r();
  if (!e.strChildKey) return e;
  let a = Aq(i.rgChildren ?? [], e.strChildKey);
  return !a || !n(a) ? { strParentKey: e.strParentKey } : e;
}
function Oq(e) {
  return e.strOptInTag ?? String(e.nOptInTagID);
}
function kq(e, t) {
  return e.nOptInTagID || e.strOptInTag
    ? (gi(t, `Opt-in registration tag used on a sale without an opt-in`),
      {
        type: w.k_EStoreFilterClauseTypeOptInRegistrationTag,
        optin: t,
        value: Oq(e),
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
function Aq(e, t) {
  return e.find((e) => bq(e) === t);
}
function jq(e, t, n) {
  if (!e) return;
  let r = Aq(yq(t), e.strParentKey);
  if (!r) return;
  if (!e.strChildKey) return kq(r, n);
  let i = Aq(r.rgChildren ?? [], e.strChildKey);
  if (i)
    return {
      type: w.k_EStoreFilterClauseTypeAnd,
      rgSubexpressions: [kq(r, n), kq(i, n)],
    };
}
function Mq() {
  let [e] = Vq(`tab`),
    t = z.useCallback((e, t) => Uq({ ...t, tab: String(e) }), []);
  return [Nq(e), t];
}
function Nq(e) {
  return e === null ? 0 : Number(e);
}
function Pq(e) {
  let t = z.useContext(Fq),
    [n] = Mq();
  return Iq(e, t?.nTabUniqueID ?? n);
}
var Fq = z.createContext(void 0);
(z.createContext(void 0), z.createContext(void 0));
function Iq(e, t) {
  let n = Lq(e);
  return n.find((e) => e.unique_id === t) ?? n[0];
}
function Lq(e) {
  return (
    e.GetSaleSectionFirstMatchByType(`tabs`)?.tabs?.filter((e) => !e.hide) ?? []
  );
}
function Rq(e, t, n, r) {
  if (!n || t.diable_tab_id_filtering) return;
  let i = e.jsondata.sale_opt_in_page_name || e.jsondata.prune_list_optin_name,
    a = jq(r, n.tab_tag_filter, i),
    o =
      n.store_filter && a
        ? {
            type: w.k_EStoreFilterClauseTypeAnd,
            rgSubexpressions: [n.store_filter, a],
          }
        : (n.store_filter ?? a);
  if (o) return zq(e, t, n) ? o : void 0;
}
function zq(e, t, n) {
  let r = e.GetSaleSections(),
    i = r.findIndex((e) => e.section_type === `tabs`);
  return i < 0 || !r[i].tabs?.includes(n) ? !1 : r.indexOf(t) > i;
}
function Bq(e, t) {
  let n = Pq(e);
  return !n || n === Lq(e)[0] || t.diable_tab_id_filtering || !zq(e, t, n)
    ? ``
    : `tabid${n.unique_id}`;
}
function Vq(e) {
  let t = z.useSyncExternalStore(Ue, Hq, Hq);
  return [
    new URLSearchParams(t).get(e),
    z.useCallback((t) => Uq({ [e]: t ?? null }), [e]),
  ];
}
function Hq() {
  return location.search;
}
function Uq(e) {
  let t = new URL(window.location.href);
  for (let [n, r] of Object.entries(e))
    r === null ? t.searchParams.delete(n) : t.searchParams.set(n, r);
  t.href !== window.location.href && fi((e) => e, t);
}
function Wq(e) {
  let t = z.useContext(Fq),
    n = Pq(e),
    r = Gq(),
    [i] = Vq(Cq),
    [a] = Vq(wq),
    o = z.useCallback((e, t) => Uq({ ...t, ...Eq(e) }), []);
  return [Dq(t ? t.tagSelection : Tq(i, a), n?.tab_tag_filter, r), o];
}
function Gq() {
  let { data: e } = rt();
  return z.useMemo(() => Kq(e), [e]);
}
function Kq(e) {
  let t = !!Wi.logged_in && L.EREALM !== xt.k_ESteamRealmChina && e !== void 0,
    n = new Set(Sa(e));
  return (e) => !e.eContentDescriptor || (t && !n.has(e.eContentDescriptor));
}
function qq(e, t) {
  let n = Pq(e),
    [r] = Wq(e);
  return Rq(e, t, n, r);
}
var Jq = 50;
function Yq(e, t, n) {
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
          ? ki(r.item_type, r.type)
          : `game`) === e.value
      );
    case w.k_EStoreFilterClauseTypeLanguage: {
      let n = Be(String(e.value));
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
      let r = e.rgSubexpressions?.some((e) => Yq(e, t, n)) ?? !1;
      return e.bNegated ? !r : r;
    }
    case w.k_EStoreFilterClauseTypeAnd: {
      let r = e.rgSubexpressions?.every((e) => Yq(e, t, n)) ?? !1;
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
function Xq(e, t, n, r, i) {
  return {
    queryKey: [
      `StoreFilterPassingApps`,
      t.cacheScope,
      r && JSON.stringify(r),
      i,
      n,
    ],
    queryFn: () => Qq(e, t, n, (e) => ({ appid: e }), r, i),
    enabled: !!(n && r),
    staleTime: 6e5,
  };
}
function Zq(e, t, n, r, i) {
  return {
    queryKey: [
      `StoreFilterPassingItems`,
      t.cacheScope,
      r && JSON.stringify(r),
      i,
      n?.map(Si),
    ],
    queryFn: () => Qq(e, t, n, (e) => e, r, i),
    enabled: !!(n && r),
    staleTime: 6e5,
  };
}
async function Qq(e, t, n, r, i, a) {
  let o = $q(i, {
      bTags: !1,
      bPlatforms: !1,
      bLanguages: !1,
      bOptInRegistrationTags: !1,
    }),
    s = Math.floor(Date.now() / 1e3),
    c = [];
  for (let l = 0; l < n.length && c.length < a; l += Jq) {
    let u = n.slice(l, l + Jq),
      d = await Promise.all(u.map((n) => eJ(e, t, r(n), o)));
    u.forEach((e, t) => {
      c.length < a && Yq(i, d[t], s) && c.push(e);
    });
  }
  return c;
}
function $q(e, t) {
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
      e.rgSubexpressions?.forEach((e) => $q(e, t));
  }
  return t;
}
async function eJ(e, t, n, r) {
  let [i, a, o, s, c] = await Promise.all([
    e.fetchQuery(at(t, n)).catch(() => void 0),
    r.bTags ? e.fetchQuery(dt(t, n)).catch(() => null) : null,
    r.bPlatforms ? e.fetchQuery(cn(t, n)).catch(() => null) : null,
    r.bLanguages ? e.fetchQuery(qt(t, n)).catch(() => null) : null,
    r.bOptInRegistrationTags ? e.fetchQuery(mi(t, n)).catch(() => null) : null,
  ]);
  return {
    defaultInfo: i,
    tags: a,
    platforms: o,
    supportedLanguages: s,
    optInRegistrationTags: c,
  };
}
var tJ = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.count || Ir(e.M()),
        B.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            count: { n: 1, br: Ci.readInt32, bw: ga.writeInt32 },
            additional_source_items: { n: 2, c: tn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= ei(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return ur(e.M(), t, n);
    }
    static fromObject(t) {
      return Gi(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Gr(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      Xr(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendations_Request`;
    }
  },
  nJ = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recommendations || Ir(e.M()),
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
      return ((e.sm_mbf ||= ei(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return ur(e.M(), t, n);
    }
    static fromObject(t) {
      return Gi(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Gr(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      Xr(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendations_Response`;
    }
  },
  rJ = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_id || Ir(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_id: { n: 1, c: tn },
            weight: { n: 2, br: Ci.readFloat, bw: ga.writeFloat },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= ei(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return ur(e.M(), t, n);
    }
    static fromObject(t) {
      return Gi(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Gr(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      Xr(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendations_Response_Recommendation`;
    }
  },
  iJ = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.count || Ir(e.M()),
        B.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            count: { n: 1, br: Ci.readInt32, bw: ga.writeInt32 },
            item_ids: { n: 2, c: tn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= ei(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return ur(e.M(), t, n);
    }
    static fromObject(t) {
      return Gi(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Gr(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      Xr(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendationsForItems_Request`;
    }
  },
  aJ = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recommendations || Ir(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { recommendations: { n: 1, c: oJ, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= ei(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return ur(e.M(), t, n);
    }
    static fromObject(t) {
      return Gi(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Gr(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      Xr(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendationsForItems_Response`;
    }
  },
  oJ = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_id || Ir(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_id: { n: 1, c: tn },
            weight: { n: 2, br: Ci.readFloat, bw: ga.writeFloat },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= ei(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return ur(e.M(), t, n);
    }
    static fromObject(t) {
      return Gi(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Gr(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      Xr(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendationsForItems_Response_Recommendation`;
    }
  },
  sJ = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.start || Ir(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            start: { n: 1, br: Ci.readUint32, bw: ga.writeUint32 },
            count: { n: 2, br: Ci.readUint32, bw: ga.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= ei(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return ur(e.M(), t, n);
    }
    static fromObject(t) {
      return Gi(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Gr(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      Xr(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetLiveSales_Request`;
    }
  },
  cJ = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sales || Ir(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sales: { n: 1, c: lJ, r: !0, q: !0 },
            total_count: { n: 2, br: Ci.readUint32, bw: ga.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= ei(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return ur(e.M(), t, n);
    }
    static fromObject(t) {
      return Gi(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Gr(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      Xr(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetLiveSales_Response`;
    }
  },
  lJ = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || Ir(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: Ci.readUint32, bw: ga.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: Ci.readFixed64String,
              bw: ga.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= ei(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return ur(e.M(), t, n);
    }
    static fromObject(t) {
      return Gi(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return Gr(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      Xr(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetLiveSales_Response_Sale`;
    }
  },
  uJ;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `StoreRecommendations.GetPackagePurchaseRecommendations#1`,
      We(tJ, t, n),
      nJ,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetPackagePurchaseRecommendations = t;
  function n(e, t, n) {
    return e.SendMsg(
      `StoreRecommendations.GetPackagePurchaseRecommendationsForItems#1`,
      We(iJ, t, n),
      aJ,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetPackagePurchaseRecommendationsForItems = n;
  function r(e, t, n) {
    return e.SendMsg(`StoreRecommendations.GetLiveSales#1`, We(sJ, t, n), cJ, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetLiveSales = r;
})((uJ ||= {}));
var dJ = `saleaction/recommendeddiscounts`;
function fJ(e) {
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
async function pJ(e, t, n) {
  let r = fJ(n),
    i = `${L.STORE_BASE_URL}${dJ}${r ? `?${r}` : ``}`,
    a = await fetch(i, { credentials: `include` });
  if (!a.ok) throw Error(`${i} answered ${a.status}`);
  let o = await a.json();
  if (o?.success !== 1 || !o.discounts)
    throw Error(`${i} answered EResult ${o?.success}`);
  return o.discounts;
}
var mJ = 6e5;
function hJ(e, t, n, r) {
  return {
    queryKey: [
      `RecommendedDiscounts`,
      n ?? 0,
      t.country,
      r ? JSON.stringify(r) : null,
    ],
    queryFn: () => pJ(e, t.country, { contentHub: r }),
    staleTime: mJ,
  };
}
function gJ(e, t) {
  return e.rgReasonLists.find((e) => e.eReason === t)?.rgAppIDs ?? [];
}
function _J(e) {
  if (e.jsondata.item_source_type !== C.k_EContentHub) return;
  let t = e.GetContentHub();
  if (t?.type)
    return { strHubType: t.type, strCategory: t.category, nTagID: t.tagid };
}
function vJ(e, t) {
  let n = _J(e),
    r = { contentHub: n, listStoreFilter: t, bTabTagHub: !1 };
  if (!t || n) return r;
  let i = xJ(t);
  if (!i) return r;
  let a = yJ(i[i.length - 1]);
  return a
    ? {
        contentHub: { strHubType: `tags`, nTagID: a },
        listStoreFilter: bJ(i.slice(0, -1)),
        bTabTagHub: !0,
      }
    : r;
}
function yJ(e) {
  if (e.type !== w.k_EStoreFilterClauseTypeStoreTag || e.bNegated) return;
  let t = Number(e.value);
  if (!(!Number.isSafeInteger(t) || t <= 0)) return t;
}
function bJ(e) {
  return e.length <= 1
    ? e[0]
    : { type: w.k_EStoreFilterClauseTypeAnd, rgSubexpressions: e };
}
function xJ(e) {
  if (e.type !== w.k_EStoreFilterClauseTypeAnd) return [e];
  if (e.bNegated || !e.rgSubexpressions?.length) return;
  let t = [];
  for (let n of e.rgSubexpressions) {
    let e = xJ(n);
    if (!e) return;
    t.push(...e);
  }
  return t;
}
function SJ(e, t, n) {
  if (t)
    return e.smart_section_discount_reason === void 0
      ? []
      : gJ(t, e.smart_section_discount_reason).slice(0, n);
}
var CJ = [
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
    strSubtitleToken: ``,
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
    strSubtitleToken: ``,
  },
  {
    eReason: 10,
    strTitleToken: `#Sale_DiscountReason_Section_PopularInRegion`,
    strSubtitleToken: ``,
  },
];
function wJ(e) {
  return CJ.find((t) => t.eReason === e.smart_section_discount_reason);
}
function TJ(e) {
  return wJ(e)?.strTitleToken ?? ``;
}
function EJ(e) {
  return wJ(e)?.strSubtitleToken ?? ``;
}
function DJ(e, t) {
  return e.BUsesContentHubForItemSource() || !!t.hide_owned_items;
}
function OJ(e, t, n) {
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
function kJ(e) {
  return e.map((e) => e.data);
}
function AJ(e) {
  return e.map((e) => e.data?.visible === !1);
}
function jJ(e, t, n, r, i) {
  let a = Er(),
    o = DJ(e, t),
    s = !!r?.bHideOwned,
    c = !!r?.bHideWishlisted,
    u = !!r?.bHideIgnored,
    d = !!r?.bHasHideIgnoredValue,
    f = l({
      queries: (n ?? []).map((e) => {
        let t = Vt(a, RV(e));
        return i ? { ...t, enabled: !1 } : t;
      }),
      combine: kJ,
    }),
    p = l({
      queries: (n ?? []).map((e) => ({ ...at(a, RV(e)), enabled: !1 })),
      combine: AJ,
    });
  return (0, z.useMemo)(() => {
    if (!n) return { capsules: void 0, nHiddenCapsules: 0 };
    let e = {
        bHideOwned: s,
        bHideWishlisted: c,
        bHideIgnored: u,
        bHasHideIgnoredValue: d,
      },
      t = 0;
    return {
      capsules: n.filter((n, r) => {
        if (p[r]) return !1;
        let i = f[r];
        return !OJ(i, o, e) || ((!i?.already_owned || s) && t++, !1);
      }),
      nHiddenCapsules: t,
    };
  }, [n, f, p, o, s, c, u, d]);
}
function MJ(e) {
  let { capsules: t } = e,
    n = Er();
  return (
    l({ queries: (t ?? []).map((e) => Vt(n, RV(e))), combine: NJ }), null
  );
}
function NJ() {
  return null;
}
var PJ = {
    popularity: { eType: `game`, bDropsOwned: !1 },
    wishlist: { eType: `game`, bDropsOwned: !0 },
    interactive_recommender: { eType: `game`, bDropsOwned: !0 },
    wishlist_onsale: { eType: `game`, bDropsOwned: !0 },
    interactive_recommender_onsale: { eType: `game`, bDropsOwned: !0 },
    dlc_onsale: { eType: `dlc`, bDropsOwned: !0 },
    dlc_music_onsale: { eType: `music`, bDropsOwned: !0 },
    discount_reason: { eType: `game`, bDropsOwned: !1 },
  },
  FJ = 24,
  IJ = 100,
  LJ = 500;
function RJ(e) {
  return Math.max(1, e.smart_section_min_discount_percent ?? 1);
}
function zJ(e) {
  return BJ(e) && PJ[e].bDropsOwned;
}
function BJ(e) {
  return e !== void 0 && e in PJ;
}
function VJ(e, t, n, r) {
  let i = y(n),
    a =
      i === `tag`
        ? { tagid: n.smart_section_tag }
        : i === `top_n`
          ? { top_n_sellers: LJ }
          : {};
  return (
    (a.min_discount_percent = RJ(n)),
    (a.include_packages = n.smart_section_include_packages),
    (a.include_bundles = n.smart_section_include_bundles),
    (a.include_dlc = n.smart_section_include_dlc),
    r && (a.store_filter_json = JSON.stringify(r)),
    Ia(
      e,
      t,
      a,
      i === `tag` && n.random_from_entire_set
        ? IJ
        : n.smart_section_max_apps || FJ,
    )
  );
}
function HJ(e, t, n, r) {
  return za(
    e,
    t,
    {
      min_discount_percent: n.smart_section_min_discount_percent || void 0,
      store_filter_json: r ? JSON.stringify(r) : void 0,
    },
    YJ(n),
  );
}
function UJ(e, t) {
  if (IK(t)) return `manual`;
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
function WJ(e, t, n) {
  let r = e.GetDayIndexFromEventStart(n);
  return t.capsules.filter(
    (e) => e.visibility_index === void 0 || e.visibility_index === r,
  );
}
function GJ(e, t, n) {
  return WJ(e, t, n).flatMap((e) => {
    let t = RV(e);
    return t ? [t] : [];
  });
}
function KJ(e, t, n, r, i) {
  let a = YJ(t),
    o = UJ(e, t);
  if (BJ(o)) {
    let n = PJ[o].eType;
    return (r.tabStoreFilter ? r.tabFilteredAppIDs : qJ(e, t, r, a))?.map(
      (e) => ({ id: e, type: n }),
    );
  }
  switch (o) {
    case `manual`: {
      let i = WJ(e, t, n);
      if (!r.tabStoreFilter) return i;
      if (!r.tabFilteredItems) return;
      let a = new Set(r.tabFilteredItems.map(Si));
      return i.filter((e) => {
        let t = RV(e);
        return t !== void 0 && a.has(Si(t));
      });
    }
    case `tag`:
    case `top_n`:
    case `all_discounted`: {
      if (!r.discountedItems) return;
      let e = r.discountedItems.map(zV).filter((e) => !!e);
      return o === `tag` && t.random_from_entire_set
        ? bK(t, e, a, i)
        : e.slice(0, a);
    }
    case `topwishlisted`:
      return r.topWishlistedItems
        ?.map(zV)
        .filter((e) => !!e)
        .slice(0, a);
    case `personalized_carousel`: {
      let n = XJ(e, t, r.personalizedCarousels)?.rgCapsules;
      return n && JJ(t, n).slice(0, a);
    }
    default:
      return;
  }
}
function qJ(e, t, n, r) {
  let i = UJ(e, t);
  if (BJ(i))
    switch (i) {
      case `popularity`:
        return n.compatAppList && pq(t, n.compatAppList).slice(0, r);
      case `wishlist`:
        return $J(
          t,
          n.wishlistAppIDs,
          eq(e, e.GetTaggedItems()),
          n.ownedAppIDs,
          r,
        );
      case `interactive_recommender`:
        return $J(
          t,
          n.recommendedAppIDs,
          eq(e, e.GetTaggedItems()),
          n.ownedAppIDs,
          r,
        );
      case `wishlist_onsale`:
        return $J(t, n.wishlistOnSaleAppIDs, void 0, n.ownedAppIDs, r);
      case `interactive_recommender_onsale`:
        return $J(t, n.recommendedOnSaleAppIDs, void 0, n.ownedAppIDs, r);
      case `dlc_onsale`:
        return $J(t, n.ownedDLCOnSaleAppIDs, void 0, n.ownedAppIDs, r);
      case `dlc_music_onsale`:
        return $J(t, n.ownedSoundtracksOnSaleAppIDs, void 0, n.ownedAppIDs, r);
      case `discount_reason`:
        return SJ(t, n.recommendedDiscounts, r);
      default:
        da(i, `GetSaleItemSectionAppList: fixed-list flavor with no list`);
        return;
    }
}
function JJ(e, t) {
  if (!e.smart_section_exclude_appids?.length) return t;
  let n = new Set(e.smart_section_exclude_appids);
  return t.filter((e) => e.type !== `game` || !n.has(e.id));
}
function YJ(e) {
  return e.smart_section_max_apps || FJ;
}
function XJ(e, t, n) {
  if (n) return n[cq(t, e).nSectionIndex] ?? null;
}
function ZJ(e, t) {
  let n = UJ(e, t) === `personalized_carousel`;
  return QJ(e, iq(e) ?? t, n);
}
function QJ(e, t, n) {
  let r = Aa(),
    i = h(),
    { storeBrowseContext: a } = ya(),
    o = Pq(e),
    [s] = Wq(e),
    c = t ? Rq(e, t, o, s) : void 0,
    { data: l, isSuccess: u } = p({
      ...re(e.clanSteamID.GetAccountID(), i),
      enabled: n,
    }),
    { data: d } = p({
      ...oq(r, a, e, uq(e, l), Wi.accountid, c),
      enabled: n && u,
    });
  return d;
}
function $J(e, t, n, r, i) {
  if (!t || !r) return;
  let a = new Set(e.smart_section_exclude_appids);
  return $K(t, n, (e) => r.has(e) || a.has(e), i);
}
function eY(e, t, n) {
  let r = !n,
    i = HH(),
    a = vK(),
    o = UJ(e, t),
    s = Aa(),
    c = h(),
    { storeBrowseContext: l, dataLoader: u } = ya(),
    d = qq(e, t),
    f = RJ(t),
    m = (0, z.useMemo)(() => vJ(e, d), [e, d]),
    g = o === `discount_reason` ? m.listStoreFilter : d,
    { data: _ } = p({ ...xc(fq(t)), enabled: r && o === `popularity` }),
    { data: v } = p({ ...Fi(s, Wi.accountid), enabled: r && o === `wishlist` }),
    { data: y } = p({
      ...CK(s, Wi.accountid),
      enabled: r && o === `interactive_recommender`,
    }),
    { data: b } = p({
      ...wi(s, l, Wi.accountid, f),
      enabled: r && o === `wishlist_onsale`,
    }),
    { data: x } = p({
      ...EK(c, s, u, Wi.accountid, f),
      enabled: r && o === `interactive_recommender_onsale`,
    }),
    { data: S } = p({
      ...Ha(c, s, l, Wi.accountid, `dlc`, f),
      enabled: r && o === `dlc_onsale`,
    }),
    { data: C } = p({
      ...Ha(c, s, l, Wi.accountid, `music`, f),
      enabled: r && o === `dlc_music_onsale`,
    }),
    { data: w } = p({
      ...VJ(s, l, t, d),
      enabled: r && (o === `tag` || o === `top_n` || o === `all_discounted`),
    }),
    { data: T } = p({ ...HJ(s, l, t, d), enabled: r && o === `topwishlisted` }),
    E = ZJ(e, t),
    { data: D } = p({
      ...hJ(s, l, Wi.accountid, m.contentHub),
      enabled: r && o === `discount_reason`,
    }),
    { data: k } = p({ ...O(s, Wi.accountid), enabled: r && zJ(o) }),
    A = (0, z.useMemo)(
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
        ownedAppIDs: k,
        tabStoreFilter: g,
      }),
      [_, v, y, b, x, S, C, w, T, E, D, k, g],
    ),
    ee = !!g && BJ(o),
    j = (0, z.useMemo)(() => (ee ? qJ(e, t, A, 1 / 0) : void 0), [ee, e, t, A]),
    { data: M } = p({
      ...Xq(c, u, j, g, YJ(t)),
      enabled: r && ee && j !== void 0,
    }),
    te = !!d && o === `manual`,
    ne = (0, z.useMemo)(() => (te ? GJ(e, t, i) : void 0), [te, e, t, i]),
    { data: re } = p({
      ...Zq(c, u, ne, d, ne?.length ?? 0),
      enabled: r && te && ne !== void 0,
    });
  return (0, z.useMemo)(() => {
    let n = KJ(
      e,
      t,
      i,
      { ...A, tabFilteredAppIDs: M, tabFilteredItems: re },
      a,
    );
    return n && yK(e, t, n, a);
  }, [e, t, i, A, M, re, a]);
}
function tY(e) {
  return (eY(e.event, e.section), null);
}
function nY(e, t) {
  let n = Er(),
    r = l({
      queries: e.map((e) => {
        let r = Vt(n, e);
        return t ? { ...r, enabled: !1 } : r;
      }),
      combine: rY,
    });
  return (0, z.useMemo)(() => {
    if (t || !r.some((e) => e === void 0))
      return e.filter((e, t) => !OJ(r[t], !1));
  }, [e, r, t]);
}
function rY(e) {
  return e.map((e) => e.data);
}
function iY(e) {
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
    l = a ? n : n ? aY(n, L.STORE_BASE_URL) : void 0,
    u = ai(l);
  return u
    ? (0, R.jsx)($r, {
        href: u,
        target: L.IN_CLIENT || o ? void 0 : `_blank`,
        className: t,
        style: r,
        rel: `noopener noreferrer`,
        focusable: s,
        fnCanTakeFocus: c,
        children: i,
      })
    : (0, R.jsx)(`span`, { style: r, className: t, children: i });
}
function aY(e, t) {
  try {
    let n = new URL(t),
      r = new URL(e);
    return n.href.replace(/\/$/, ``) + r.pathname + r.search + r.hash;
  } catch {
    return ``;
  }
}
function oY(e) {
  let { section: t } = e;
  return !t.label_link || t.label_link_style
    ? null
    : (0, R.jsx)(`div`, {
        className: $H,
        children: (0, R.jsx)(iY, {
          url: t.label_link,
          children: N.Localize(`#btn_live_streams_all`),
        }),
      });
}
var sY = `KDJh8Ln6DTA-`,
  cY = `cwU-YKIjBO4-`,
  lY = {
    bFitToWindow: !0,
    bOverlapHorizontal: !0,
    bMatchWidth: !1,
    bShiftToFitWindow: !0,
    bDisablePopTop: !0,
  };
function uY(e) {
  let { setRemoteClientID: t, rgSessions: n } = e,
    r = (0, z.useCallback)(
      (e) => {
        n?.length &&
          Bt(
            (0, R.jsx)(dY, { sessions: n, setRemoteDownloadClientId: t }),
            e,
            lY,
          );
      },
      [t, n],
    );
  return n?.length
    ? (0, R.jsx)(`button`, {
        onClick: r,
        className: sY,
        children: (0, R.jsx)(pY, {}),
      })
    : null;
}
function dY({ sessions: e, setRemoteDownloadClientId: t }) {
  return (0, R.jsx)(`ul`, {
    className: cY,
    children: e.map((e) =>
      (0, R.jsx)(
        Bn,
        {
          onSelected: () => {
            t(e.client_instanceid);
          },
          children: I(
            `#GamesList_Client_Indicator`,
            fY(e.device_type) ?? ``,
            e.machine_name,
          ),
        },
        e.client_instanceid,
      ),
    ),
  });
}
function fY(e) {
  switch (e) {
    case 1:
      return I(`#Library_DeviceType_PC`);
    case 544:
      return I(`#Library_DeviceType_SteamDeck`);
    case 546:
      return I(`#Library_DeviceType_SteamMachine`);
    case si:
      return I(`#Library_DeviceType_SteamFrame`);
    default:
      return;
  }
}
function pY(e) {
  return (0, R.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 13 8`,
    fill: `none`,
    ...e,
    children: (0, R.jsx)(`path`, {
      fill: `currentColor`,
      d: `M12.6128 1.7121C12.7616 1.56087 12.8428 1.3684 12.8428 1.14155C12.8428 0.687862 12.491 0.323534 12.0446 0.323534C11.8214 0.323534 11.6184 0.419772 11.4628 0.577877L6.83601 5.38975L2.22271 0.577877C2.06712 0.419772 1.85743 0.323534 1.64097 0.323534C1.19452 0.323534 0.842773 0.687862 0.842773 1.14155C0.842773 1.3684 0.923946 1.56087 1.07276 1.71211L6.21369 7.06016C6.38956 7.25264 6.60602 7.342 6.84277 7.34888C7.07953 7.34888 7.28246 7.25264 7.4651 7.06016L12.6128 1.7121Z`,
    }),
  });
}
var mY = `O2hPihu9CRE-`,
  hY = `QhSrcq93V7k-`,
  gY = `_7MjE60RYT0Q-`,
  _Y = `UlZXEOyFPCE-`,
  vY = `_8wO4Yx-lIIo-`,
  yY = `FA82eVIC918-`,
  bY = `_0sgpZmAY-zs-`,
  xY = `RLntJ4QtQLU-`;
function SY(e) {
  let { appid: t } = e,
    n = A(t),
    { data: r } = Wn(n),
    [i, a, o] = Rt(!1),
    { mutateAsync: s } = hc({ appid: t }),
    [c, l] = (0, z.useState)(!1),
    u = ne(t);
  return !r || u
    ? null
    : (0, R.jsxs)(R.Fragment, {
        children: [
          (0, R.jsxs)(Za, {
            onClick: async () => {
              try {
                (l(!0), await s(), Sn(), l(!1), a());
              } catch (e) {
                (l(!1),
                  console.error(
                    `Error AddToLibraryActionWithRemoteInstall`,
                    e,
                  ));
              }
            },
            children: [
              c && (0, R.jsx)(me, { size: `small` }),
              I(`#Sale_AddToLibrary_NoPlus`),
            ],
          }),
          (0, R.jsx)(Hi, {
            children: (0, R.jsx)(ka, {
              active: i,
              children: (0, R.jsx)(Tt, {
                strTitle: I(`#Sale_AddedToLibrary`),
                strDescription: _i(
                  `#Sale_AddToLibrary_DialogDesc`,
                  (0, R.jsx)(`span`, { className: gY, children: r.name || `` }),
                ),
                closeModal: o,
                bAlertDialog: !0,
                children: (0, R.jsx)(CY, { id: n }),
              }),
            }),
          }),
        ],
      });
}
function CY(e) {
  let { id: t } = e,
    n = Ae(),
    [r, i] = (0, z.useState)(0),
    [a, o] = (0, z.useState)(!1),
    { data: s } = Ri(t);
  if (!t || !(`appid` in t) || ba.IN_CLIENT || !s) return null;
  let c = n.data?.sessions?.filter((e) => {
    switch (e.device_type) {
      default:
      case 1:
        {
          if (!e.os_type) return !1;
          let t = le(e.os_type);
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
    return (0, R.jsx)(`div`, {
      className: mY,
      children: a
        ? (0, R.jsx)(TY, { session: e })
        : (0, R.jsxs)(R.Fragment, {
            children: [
              (0, R.jsx)(wY, {
                rgAcceptableSession: c,
                session: e,
                setSessionIndex: i,
              }),
              (0, R.jsx)(`div`, {
                className: yY,
                children: (0, R.jsx)(EY, {
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
function wY(e) {
  let { rgAcceptableSession: t, session: n, setSessionIndex: r } = e;
  return (0, R.jsxs)(R.Fragment, {
    children: [
      (0, R.jsx)(`div`, { children: I(`#Sale_AddToLibrary_RemoteDownload`) }),
      (0, R.jsxs)(`div`, {
        className: bY,
        children: [
          (0, R.jsx)(`span`, { className: xY, children: n.machine_name }),
          (0, R.jsx)(uY, {
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
function TY(e) {
  let { session: t } = e;
  return (0, R.jsxs)(`div`, {
    className: _Y,
    children: [
      I(`#Sale_AddToLibrary_DownloadStarted`),
      (0, R.jsx)(`br`, {}),
      (0, R.jsx)(`a`, {
        href: `${ba.COMMUNITY_BASE_URL}my/games?tab=all&clientid=${t.client_instanceid}`,
        children: I(`#Sale_AddToLibrary_SeeDownloadProgress`),
      }),
    ],
  });
}
function EY(e) {
  let { appid: t, session: n, setRemoteDownloadRequested: r } = e,
    i = ke(t, n.client_instanceid);
  return (0, R.jsxs)(R.Fragment, {
    children: [
      (0, R.jsxs)(Za, {
        onClick: () => {
          (i.mutateAsync(), r(!0));
        },
        children: [(0, R.jsx)(Qt, {}), I(`#Button_StartDownload`)],
      }),
      (0, R.jsx)(`div`, {
        className: vY,
        children: (0, R.jsx)(`a`, {
          href: `https://help.steampowered.com/faqs/view/1025-BD94-12FC-3409`,
          className: hY,
          children: I(`#Button_Learn`),
        }),
      }),
    ],
  });
}
function DY(e) {
  let {
    rgTagIDs: t,
    bShowEvenIfNoTags: n,
    bHideTitle: r,
    bLargeText: i,
    bNoStoreLinks: a,
  } = e;
  return t?.length > 0 || n
    ? (0, R.jsxs)(`div`, {
        className: F(Po, i ? Wo : ``, `SaleTagBlockCtn`),
        children: [
          !r &&
            (0, R.jsx)(`div`, {
              className: F(`F3fTh-GlONs-`, `WidgetTagTitle`),
              children: N.Localize(`#GameHover_Tags`),
            }),
          t?.length > 0
            ? (0, R.jsx)(`div`, {
                className: F(Go, `TagBox`),
                children: t.map((e) =>
                  (0, R.jsx)(kY, { tagid: e, bNoStoreLinks: a }, e),
                ),
              })
            : (0, R.jsx)(`div`, { children: N.Localize(`#Broadcast_None`) }),
        ],
      })
    : null;
}
function OY(e) {
  let { tagid: t, className: n } = e,
    r = ct(t, L.LANGUAGE);
  if (!r) return null;
  let i = tt(Be(L.LANGUAGE)),
    a = `${L.STORE_BASE_URL}tags/${i}/${r}`;
  return (0, R.jsx)(iY, {
    url: a,
    className: F(Ko, `WidgetTag`, n),
    children: r,
  });
}
function kY(e) {
  let { tagid: t, className: n, bNoStoreLinks: r } = e,
    i = tt(Be(L.LANGUAGE)),
    a = ct(t, L.LANGUAGE),
    o = `${L.STORE_BASE_URL}tags/${i}/${a}`;
  return a
    ? r
      ? (0, R.jsx)(`div`, { className: F(Ko, `WidgetTag`, n), children: a })
      : (0, R.jsx)(iY, {
          url: o,
          className: F(Ko, `WidgetTag`, n),
          children: a,
        })
    : null;
}
export {
  HK as $,
  hs as $a,
  Tm as $i,
  YV as $n,
  ko as $o,
  Yk as $r,
  gW as $t,
  pq as A,
  Ml as Aa,
  mx as Ai,
  nU as An,
  Ts as Ao,
  bI as Ar,
  Ro as As,
  lG as At,
  MK as B,
  hc as Ba,
  Gv as Bi,
  FH as Bn,
  Es as Bo,
  rF as Br,
  zW as Bt,
  bq as C,
  iu as Ca,
  SO as Ci,
  gU as Cn,
  es as Co,
  gB as Cr,
  lo as Cs,
  gG as Ct,
  Dq as D,
  ol as Da,
  eO as Di,
  ZU as Dn,
  No as Do,
  lz as Dr,
  Go as Ds,
  MG as Dt,
  Tq as E,
  rl as Ea,
  aO as Ei,
  KH as En,
  zs as Eo,
  bz as Er,
  fo as Es,
  vG as Et,
  oq as F,
  Qc as Fa,
  Dy as Fi,
  UH as Fn,
  _s as Fo,
  BF as Fr,
  Ga as Fs,
  UW as Ft,
  BK as G,
  ic as Ga,
  yv as Gi,
  xH as Gn,
  Js as Go,
  RP as Gr,
  MW as Gt,
  XK as H,
  pc as Ha,
  Av as Hi,
  OH as Hn,
  Ms as Ho,
  qP as Hr,
  BW as Ht,
  tq as I,
  Xc as Ia,
  X as Ii,
  EU as In,
  $s as Io,
  RF as Ir,
  qa as Is,
  WW as It,
  NK as J,
  xs as Ja,
  I_ as Ji,
  gH as Jn,
  Xo as Jo,
  yN as Jr,
  PW as Jt,
  kK as K,
  nc as Ka,
  Q_ as Ki,
  bH as Kn,
  cs as Ko,
  lP as Kr,
  NW as Kt,
  eq as L,
  xc as La,
  Sy as Li,
  HH as Ln,
  ws as Lo,
  zF as Lr,
  Wa as Ls,
  GW as Lt,
  uq as M,
  Il as Ma,
  fb as Mi,
  PU as Mn,
  Mo,
  JF as Mr,
  Qa as Ms,
  sG as Mt,
  cq as N,
  sl as Na,
  Qy as Ni,
  xU as Nn,
  Is as No,
  WF as Nr,
  $a as Ns,
  eG as Nt,
  wq as O,
  al as Oa,
  CD as Oi,
  CU as On,
  Os as Oo,
  zL as Or,
  wo as Os,
  kG as Ot,
  iq as P,
  V as Pa,
  Oy as Pi,
  AU as Pn,
  As as Po,
  VF as Pr,
  eo as Ps,
  ZW as Pt,
  JK as Q,
  Ps as Qa,
  Dm as Qi,
  cH as Qn,
  Ws as Qo,
  uk as Qr,
  DW as Qt,
  $K as R,
  vc as Ra,
  xy as Ri,
  BH as Rn,
  co as Ro,
  LF as Rr,
  Fa as Rs,
  KW as Rt,
  yq as S,
  Lu as Sa,
  yO as Si,
  vU as Sn,
  fs as So,
  _B as Sr,
  Bo as Ss,
  AG as St,
  Eq as T,
  eu as Ta,
  xO as Ti,
  yU as Tn,
  Bs as To,
  jz as Tr,
  Vo as Ts,
  yG as Tt,
  PK as U,
  lc as Ua,
  kv as Ui,
  wH as Un,
  so as Uo,
  $P as Ur,
  RW as Ut,
  ZK as V,
  dc as Va,
  Vv as Vi,
  TH as Vn,
  ms as Vo,
  iF as Vr,
  VW as Vt,
  jK as W,
  cc as Wa,
  _v as Wi,
  EH as Wn,
  Zs as Wo,
  YP as Wr,
  LW as Wt,
  GK as X,
  Ho as Xa,
  G_ as Xi,
  fH as Xn,
  ao as Xo,
  BM as Xr,
  wW as Xt,
  LK as Y,
  Ss as Ya,
  z_ as Yi,
  _H as Yn,
  zo as Yo,
  vN as Yr,
  jW as Yt,
  YK as Z,
  Ns as Za,
  R_ as Zi,
  lH as Zn,
  Po as Zo,
  Zj as Zr,
  OW as Zt,
  hJ as _,
  ed as _a,
  MA as _i,
  OU as _n,
  Vs as _o,
  SV as _r,
  uo as _s,
  xG as _t,
  XJ as a,
  vp as aa,
  RA as ai,
  uU as an,
  Rs as ao,
  HV as ar,
  So as as,
  VG as at,
  jq as b,
  W as ba,
  CO as bi,
  mU as bn,
  bs as bo,
  GB as br,
  po as bs,
  NG as bt,
  ZJ as c,
  Zf as ca,
  tA as ci,
  GU as cn,
  Eo as co,
  IV as cr,
  Io as cs,
  LG as ct,
  OJ as d,
  Uf as da,
  QO as di,
  ZH as dn,
  ks as do,
  PV as dr,
  Ao as ds,
  CG as dt,
  Y as ea,
  rA as ei,
  vW as en,
  vs as eo,
  XV as er,
  bo as es,
  OK as et,
  DJ as f,
  Vf as fa,
  Ek as fi,
  DU as fn,
  ec as fo,
  xV as fr,
  jo as fs,
  _G as ft,
  _J as g,
  $u as ga,
  wk as gi,
  iU as gn,
  Yo as go,
  _V as gr,
  To as gs,
  SG as gt,
  SJ as h,
  ad as ha,
  Ck as hi,
  oU as hn,
  Jo as ho,
  yV as hr,
  yo as hs,
  EG as ht,
  iY as i,
  gp as ia,
  kk as ii,
  dU as in,
  Hs as io,
  UV as ir,
  is,
  SK as it,
  fq as j,
  Ll as ja,
  Ab as ji,
  eU as jn,
  io as jo,
  rI as jr,
  ts as js,
  aG as jt,
  Cq as k,
  il as ka,
  hx as ki,
  JH as kn,
  Cs as ko,
  yL as kr,
  Ds as ks,
  uG as kt,
  eY as l,
  $f as la,
  Kk as li,
  fU as ln,
  gs as lo,
  FV as lr,
  Qo as ls,
  TG as lt,
  jJ as m,
  ud as ma,
  JO as mi,
  rU as mn,
  qo as mo,
  OV as mr,
  ro as ms,
  OG as mt,
  DY as n,
  J as na,
  NA as ni,
  lW as nn,
  Gs as no,
  JV as nr,
  Zo as ns,
  DK as nt,
  UJ as o,
  hp as oa,
  ok as oi,
  lU as on,
  Us as oo,
  RV as or,
  xo as os,
  BG as ot,
  MJ as p,
  fd as pa,
  XO as pi,
  XU as pn,
  js as po,
  DV as pr,
  Fo as ps,
  DG as pt,
  AK as q,
  $o as qa,
  tv as qi,
  vH as qn,
  Qs as qo,
  IN as qr,
  FW as qt,
  oY as r,
  qp as ra,
  ck as ri,
  aW as rn,
  oo as ro,
  KV as rr,
  ho as rs,
  WK as rt,
  tY as s,
  Yf as sa,
  tk as si,
  qH as sn,
  Xs as so,
  zV as sr,
  Co as ss,
  zG as st,
  OY as t,
  q as ta,
  IA as ti,
  dW as tn,
  Lo as to,
  qV as tr,
  as as ts,
  RK as tt,
  nY as u,
  K as ua,
  eA as ui,
  pU as un,
  Ls as uo,
  LV as ur,
  ns as us,
  wG as ut,
  Vq as v,
  Zu as va,
  Qk as vi,
  YH as vn,
  qs as vo,
  iV as vr,
  _o as vs,
  hG as vt,
  xq as w,
  tu as wa,
  pO as wi,
  hU as wn,
  Fs as wo,
  iB as wr,
  Uo as ws,
  IG as wt,
  Sq as x,
  Wu as xa,
  fO as xi,
  WU as xn,
  Ys as xo,
  vB as xr,
  Ks as xs,
  jG as xt,
  Bq as y,
  Qu as ya,
  wO as yi,
  bU as yn,
  ys as yo,
  JB as yr,
  mo as ys,
  bG as yt,
  FK as z,
  _c as za,
  Cy as zi,
  RH as zn,
  tc as zo,
  fF as zr,
  qW as zt,
};
